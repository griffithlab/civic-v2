(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"2XtQ":function(e,t,n){"use strict";n.d(t,"a",function(){return s});var i=n("ofXK"),o=n("ZE2D"),r=n("fXoL");let s=(()=>{class e{}return e.\u0275mod=r.Mb({type:e}),e.\u0275inj=r.Lb({factory:function(t){return new(t||e)},imports:[[i.c,o.b]]}),e})()},"3E0/":function(e,t,n){"use strict";n.d(t,"a",function(){return s});var i=n("D0XW"),o=n("7o/Q"),r=n("WMd4");function s(e,t=i.a){var n;const o=(n=e)instanceof Date&&!isNaN(+n)?+e-t.now():Math.abs(e);return e=>e.lift(new a(o,t))}class a{constructor(e,t){this.delay=e,this.scheduler=t}call(e,t){return t.subscribe(new c(e,this.delay,this.scheduler))}}class c extends o.a{constructor(e,t,n){super(e),this.delay=t,this.scheduler=n,this.queue=[],this.active=!1,this.errored=!1}static dispatch(e){const t=e.source,n=t.queue,i=e.scheduler,o=e.destination;for(;n.length>0&&n[0].time-i.now()<=0;)n.shift().notification.observe(o);if(n.length>0){const t=Math.max(0,n[0].time-i.now());this.schedule(e,t)}else this.unsubscribe(),t.active=!1}_schedule(e){this.active=!0,this.destination.add(e.schedule(c.dispatch,this.delay,{source:this,destination:this.destination,scheduler:e}))}scheduleNotification(e){if(!0===this.errored)return;const t=this.scheduler,n=new l(t.now()+this.delay,e);this.queue.push(n),!1===this.active&&this._schedule(t)}_next(e){this.scheduleNotification(r.a.createNext(e))}_error(e){this.errored=!0,this.queue=[],this.destination.error(e),this.unsubscribe()}_complete(){this.scheduleNotification(r.a.createComplete()),this.unsubscribe()}}class l{constructor(e,t){this.time=e,this.notification=t}}},"4xsP":function(e,t,n){"use strict";n.d(t,"a",function(){return b}),n.d(t,"b",function(){return h}),n.d(t,"c",function(){return m});var i=n("cH1L"),o=n("ofXK"),r=n("mrSG"),s=n("2Suw"),a=n("XNiG"),c=n("JX91"),l=n("1G5W"),u=n("fXoL");const d=["*"],p={small:8,middle:16,large:24};let h=(()=>{class e{constructor(e,t){this.renderer=e,this.elementRef=t}setDirectionAndSize(e,t){const n="string"==typeof t?p[t]:t;"horizontal"===e?(this.renderer.removeStyle(this.elementRef.nativeElement,"margin-bottom"),this.renderer.setStyle(this.elementRef.nativeElement,"margin-right",`${n}px`)):(this.renderer.removeStyle(this.elementRef.nativeElement,"margin-right"),this.renderer.setStyle(this.elementRef.nativeElement,"margin-bottom",`${n}px`))}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(u.Ob(u.F),u.Ob(u.l))},e.\u0275cmp=u.Ib({type:e,selectors:[["nz-space-item"],["","nz-space-item",""]],hostAttrs:[1,"ant-space-item"],ngContentSelectors:d,decls:1,vars:0,template:function(e,t){1&e&&(u.kc(),u.jc(0))},encapsulation:2,changeDetection:0}),e})(),b=(()=>{class e{constructor(e){this.nzConfigService=e,this._nzModuleName="space",this.nzDirection="horizontal",this.nzSize="small",this.destroy$=new a.a}updateSpaceItems(){this.nzSpaceItemComponents&&this.nzSpaceItemComponents.forEach(e=>{e.setDirectionAndSize(this.nzDirection,this.nzSize)})}ngOnChanges(){this.updateSpaceItems(),this.mergedAlign=void 0===this.nzAlign&&"horizontal"===this.nzDirection?"center":this.nzAlign}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}ngAfterViewInit(){this.nzSpaceItemComponents.changes.pipe(Object(c.a)(null),Object(l.a)(this.destroy$)).subscribe(()=>{this.updateSpaceItems()})}}return e.\u0275fac=function(t){return new(t||e)(u.Ob(s.a))},e.\u0275cmp=u.Ib({type:e,selectors:[["nz-space"],["","nz-space",""]],contentQueries:function(e,t,n){if(1&e&&u.Hb(n,h,0),2&e){let e;u.tc(e=u.cc())&&(t.nzSpaceItemComponents=e)}},hostAttrs:[1,"ant-space"],hostVars:12,hostBindings:function(e,t){2&e&&u.Gb("ant-space-horizontal","horizontal"===t.nzDirection)("ant-space-vertical","vertical"===t.nzDirection)("ant-space-align-start","start"===t.mergedAlign)("ant-space-align-end","end"===t.mergedAlign)("ant-space-align-center","center"===t.mergedAlign)("ant-space-align-baseline","baseline"===t.mergedAlign)},inputs:{nzDirection:"nzDirection",nzSize:"nzSize",nzAlign:"nzAlign"},exportAs:["NzSpace"],features:[u.Ab],ngContentSelectors:d,decls:1,vars:0,template:function(e,t){1&e&&(u.kc(),u.jc(0))},encapsulation:2,changeDetection:0}),Object(r.b)([Object(s.b)(),Object(r.c)("design:type",Object)],e.prototype,"nzSize",void 0),e})(),m=(()=>{class e{}return e.\u0275mod=u.Mb({type:e}),e.\u0275inj=u.Lb({factory:function(t){return new(t||e)},imports:[[i.a,o.c]]}),e})()},CtWS:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var i=n("ofXK"),o=n("Wfee"),r=n("fXoL");let s=(()=>{class e{}return e.\u0275mod=r.Mb({type:e}),e.\u0275inj=r.Lb({factory:function(t){return new(t||e)},imports:[[i.c,o.b]]}),e})()},Ff2k:function(e,t,n){"use strict";n.d(t,"a",function(){return ve}),n.d(t,"b",function(){return he}),n.d(t,"c",function(){return be}),n.d(t,"d",function(){return ze}),n.d(t,"e",function(){return ye});var i=n("fXoL"),o=n("mrSG"),r=n("/KA4"),s=n("XNiG"),a=n("NXyV"),c=n("LRne"),l=n("VRyK"),u=n("2Vo4"),d=n("IzEk"),p=n("eIep"),h=n("1G5W"),b=n("cH1L"),m=n("ofXK"),f=n("ZE2D"),g=n("pdGh"),v=n("QlLE"),z=n("B+r4"),y=n("qAZ0");const I=["*"];function C(e,t){1&e&&i.jc(0)}const O=["nz-list-item-actions",""];function S(e,t){}function T(e,t){1&e&&i.Pb(0,"em",3)}function E(e,t){if(1&e&&(i.Ub(0,"li"),i.Ec(1,S,0,0,"ng-template",1),i.Ec(2,T,1,0,"em",2),i.Tb()),2&e){const e=t.$implicit,n=t.last;i.Cb(1),i.lc("ngTemplateOutlet",e),i.Cb(1),i.lc("ngIf",!n)}}function N(e,t){}const $=function(e,t){return{$implicit:e,index:t}};function w(e,t){if(1&e&&(i.Sb(0),i.Ec(1,N,0,0,"ng-template",9),i.Rb()),2&e){const e=t.$implicit,n=t.index,o=i.ec(2);i.Cb(1),i.lc("ngTemplateOutlet",o.nzRenderItem)("ngTemplateOutletContext",i.rc(2,$,e,n))}}function D(e,t){if(1&e&&(i.Ub(0,"div",7),i.Ec(1,w,2,5,"ng-container",8),i.jc(2,4),i.Tb()),2&e){const e=i.ec();i.Cb(1),i.lc("ngForOf",e.nzDataSource)}}function A(e,t){if(1&e&&(i.Sb(0),i.Gc(1),i.Rb()),2&e){const e=i.ec(2);i.Cb(1),i.Hc(e.nzHeader)}}function x(e,t){if(1&e&&(i.Ub(0,"nz-list-header"),i.Ec(1,A,2,1,"ng-container",10),i.Tb()),2&e){const e=i.ec();i.Cb(1),i.lc("nzStringTemplateOutlet",e.nzHeader)}}function R(e,t){1&e&&i.Pb(0,"div"),2&e&&i.Bc("min-height",53,"px")}function k(e,t){}function M(e,t){if(1&e&&(i.Ub(0,"div",13),i.Ec(1,k,0,0,"ng-template",9),i.Tb()),2&e){const e=t.$implicit,n=t.index,o=i.ec(2);i.lc("nzSpan",o.nzGrid.span||null)("nzXs",o.nzGrid.xs||null)("nzSm",o.nzGrid.sm||null)("nzMd",o.nzGrid.md||null)("nzLg",o.nzGrid.lg||null)("nzXl",o.nzGrid.xl||null)("nzXXl",o.nzGrid.xxl||null),i.Cb(1),i.lc("ngTemplateOutlet",o.nzRenderItem)("ngTemplateOutletContext",i.rc(9,$,e,n))}}function P(e,t){if(1&e&&(i.Ub(0,"div",11),i.Ec(1,M,2,12,"div",12),i.Tb()),2&e){const e=i.ec();i.lc("nzGutter",e.nzGrid.gutter||null),i.Cb(1),i.lc("ngForOf",e.nzDataSource)}}function j(e,t){if(1&e&&i.Pb(0,"nz-list-empty",14),2&e){const e=i.ec();i.lc("nzNoResult",e.nzNoResult)}}function L(e,t){if(1&e&&(i.Sb(0),i.Gc(1),i.Rb()),2&e){const e=i.ec(2);i.Cb(1),i.Hc(e.nzFooter)}}function U(e,t){if(1&e&&(i.Ub(0,"nz-list-footer"),i.Ec(1,L,2,1,"ng-container",10),i.Tb()),2&e){const e=i.ec();i.Cb(1),i.lc("nzStringTemplateOutlet",e.nzFooter)}}function F(e,t){}function _(e,t){}function V(e,t){if(1&e&&(i.Ub(0,"nz-list-pagination"),i.Ec(1,_,0,0,"ng-template",6),i.Tb()),2&e){const e=i.ec();i.Cb(1),i.lc("ngTemplateOutlet",e.nzPagination)}}const B=[[["nz-list-header"]],[["nz-list-footer"],["","nz-list-footer",""]],[["nz-list-load-more"],["","nz-list-load-more",""]],[["nz-list-pagination"],["","nz-list-pagination",""]],"*"],G=["nz-list-header","nz-list-footer, [nz-list-footer]","nz-list-load-more, [nz-list-load-more]","nz-list-pagination, [nz-list-pagination]","*"];function K(e,t){if(1&e&&i.Pb(0,"ul",6),2&e){const e=i.ec(2);i.lc("nzActions",e.nzActions)}}function q(e,t){if(1&e&&(i.Ec(0,K,1,1,"ul",5),i.jc(1)),2&e){const e=i.ec();i.lc("ngIf",e.nzActions&&e.nzActions.length>0)}}function Y(e,t){if(1&e&&(i.Sb(0),i.Gc(1),i.Rb()),2&e){const e=i.ec(3);i.Cb(1),i.Hc(e.nzContent)}}function H(e,t){if(1&e&&(i.Sb(0),i.Ec(1,Y,2,1,"ng-container",8),i.Rb()),2&e){const e=i.ec(2);i.Cb(1),i.lc("nzStringTemplateOutlet",e.nzContent)}}function W(e,t){if(1&e&&(i.jc(0,1),i.jc(1,2),i.Ec(2,H,2,1,"ng-container",7)),2&e){const e=i.ec();i.Cb(2),i.lc("ngIf",e.nzContent)}}function X(e,t){1&e&&i.jc(0,3)}function Q(e,t){}function J(e,t){}function Z(e,t){}function ee(e,t){}function te(e,t){if(1&e&&(i.Ec(0,Q,0,0,"ng-template",9),i.Ec(1,J,0,0,"ng-template",9),i.Ec(2,Z,0,0,"ng-template",9),i.Ec(3,ee,0,0,"ng-template",9)),2&e){const e=i.ec(),t=i.uc(3),n=i.uc(5),o=i.uc(1);i.lc("ngTemplateOutlet",t),i.Cb(1),i.lc("ngTemplateOutlet",e.nzExtra),i.Cb(1),i.lc("ngTemplateOutlet",n),i.Cb(1),i.lc("ngTemplateOutlet",o)}}function ne(e,t){}function ie(e,t){}function oe(e,t){}function re(e,t){if(1&e&&(i.Ub(0,"nz-list-item-extra"),i.Ec(1,oe,0,0,"ng-template",9),i.Tb()),2&e){const e=i.ec(2);i.Cb(1),i.lc("ngTemplateOutlet",e.nzExtra)}}function se(e,t){}function ae(e,t){if(1&e&&(i.Sb(0),i.Ub(1,"div",10),i.Ec(2,ne,0,0,"ng-template",9),i.Ec(3,ie,0,0,"ng-template",9),i.Tb(),i.Ec(4,re,2,1,"nz-list-item-extra",7),i.Ec(5,se,0,0,"ng-template",9),i.Rb()),2&e){const e=i.ec(),t=i.uc(3),n=i.uc(1),o=i.uc(5);i.Cb(2),i.lc("ngTemplateOutlet",t),i.Cb(1),i.lc("ngTemplateOutlet",n),i.Cb(1),i.lc("ngIf",e.nzExtra),i.Cb(1),i.lc("ngTemplateOutlet",o)}}const ce=[[["nz-list-item-actions"],["","nz-list-item-actions",""]],[["nz-list-item-meta"],["","nz-list-item-meta",""]],"*",[["nz-list-item-extra"],["","nz-list-item-extra",""]]],le=["nz-list-item-actions, [nz-list-item-actions]","nz-list-item-meta, [nz-list-item-meta]","*","nz-list-item-extra, [nz-list-item-extra]"];let ue=(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Ib({type:e,selectors:[["nz-list-item-extra"],["","nz-list-item-extra",""]],hostAttrs:[1,"ant-list-item-extra"],exportAs:["nzListItemExtra"],ngContentSelectors:I,decls:1,vars:0,template:function(e,t){1&e&&(i.kc(),i.jc(0))},encapsulation:2,changeDetection:0}),e})(),de=(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Ib({type:e,selectors:[["nz-list-item-action"]],viewQuery:function(e,t){if(1&e&&i.Lc(i.M,1),2&e){let e;i.tc(e=i.cc())&&(t.templateRef=e.first)}},exportAs:["nzListItemAction"],ngContentSelectors:I,decls:1,vars:0,template:function(e,t){1&e&&(i.kc(),i.Ec(0,C,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),e})(),pe=(()=>{class e{constructor(e,t){this.ngZone=e,this.cdr=t,this.nzActions=[],this.actions=[],this.destroy$=new s.a,this.inputActionChanges$=new s.a,this.contentChildrenChanges$=Object(a.a)(()=>this.nzListItemActions?Object(c.a)(null):this.ngZone.onStable.asObservable().pipe(Object(d.a)(1),Object(p.a)(()=>this.contentChildrenChanges$))),Object(l.a)(this.contentChildrenChanges$,this.inputActionChanges$).pipe(Object(h.a)(this.destroy$)).subscribe(()=>{this.actions=this.nzActions.length?this.nzActions:this.nzListItemActions.map(e=>e.templateRef),this.cdr.detectChanges()})}ngOnChanges(){this.inputActionChanges$.next(null)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return e.\u0275fac=function(t){return new(t||e)(i.Ob(i.A),i.Ob(i.h))},e.\u0275cmp=i.Ib({type:e,selectors:[["ul","nz-list-item-actions",""]],contentQueries:function(e,t,n){if(1&e&&i.Hb(n,de,0),2&e){let e;i.tc(e=i.cc())&&(t.nzListItemActions=e)}},hostAttrs:[1,"ant-list-item-action"],inputs:{nzActions:"nzActions"},exportAs:["nzListItemActions"],features:[i.Ab],attrs:O,decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"ngTemplateOutlet"],["class","ant-list-item-action-split",4,"ngIf"],[1,"ant-list-item-action-split"]],template:function(e,t){1&e&&i.Ec(0,E,3,2,"li",0),2&e&&i.lc("ngForOf",t.actions)},directives:[m.p,m.x,m.q],encapsulation:2,changeDetection:0}),e})(),he=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Ib({type:e,selectors:[["nz-list-empty"]],hostAttrs:[1,"ant-list-empty-text"],inputs:{nzNoResult:"nzNoResult"},exportAs:["nzListHeader"],decls:1,vars:2,consts:[[3,"nzComponentName","specificContent"]],template:function(e,t){1&e&&i.Pb(0,"nz-embed-empty",0),2&e&&i.lc("nzComponentName","list")("specificContent",t.nzNoResult)},directives:[v.a],encapsulation:2,changeDetection:0}),e})(),be=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Ib({type:e,selectors:[["nz-list-header"]],hostAttrs:[1,"ant-list-header"],exportAs:["nzListHeader"],ngContentSelectors:I,decls:1,vars:0,template:function(e,t){1&e&&(i.kc(),i.jc(0))},encapsulation:2,changeDetection:0}),e})(),me=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Ib({type:e,selectors:[["nz-list-footer"]],hostAttrs:[1,"ant-list-footer"],exportAs:["nzListFooter"],ngContentSelectors:I,decls:1,vars:0,template:function(e,t){1&e&&(i.kc(),i.jc(0))},encapsulation:2,changeDetection:0}),e})(),fe=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Ib({type:e,selectors:[["nz-list-pagination"]],hostAttrs:[1,"ant-list-pagination"],exportAs:["nzListPagination"],ngContentSelectors:I,decls:1,vars:0,template:function(e,t){1&e&&(i.kc(),i.jc(0))},encapsulation:2,changeDetection:0}),e})(),ge=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=i.Jb({type:e,selectors:[["nz-list-load-more"]],exportAs:["nzListLoadMoreDirective"]}),e})(),ve=(()=>{class e{constructor(e,t){this.elementRef=e,this.directionality=t,this.nzBordered=!1,this.nzGrid="",this.nzItemLayout="horizontal",this.nzRenderItem=null,this.nzLoading=!1,this.nzLoadMore=null,this.nzSize="default",this.nzSplit=!0,this.hasSomethingAfterLastItem=!1,this.dir="ltr",this.itemLayoutNotifySource=new u.a(this.nzItemLayout),this.destroy$=new s.a,this.elementRef.nativeElement.classList.add("ant-list")}get itemLayoutNotify$(){return this.itemLayoutNotifySource.asObservable()}ngOnInit(){var e;this.dir=this.directionality.value,null===(e=this.directionality.change)||void 0===e||e.pipe(Object(h.a)(this.destroy$)).subscribe(e=>{this.dir=e})}getSomethingAfterLastItem(){return!!(this.nzLoadMore||this.nzPagination||this.nzFooter||this.nzListFooterComponent||this.nzListPaginationComponent||this.nzListLoadMoreDirective)}ngOnChanges(e){e.nzItemLayout&&this.itemLayoutNotifySource.next(this.nzItemLayout)}ngOnDestroy(){this.itemLayoutNotifySource.unsubscribe(),this.destroy$.next(),this.destroy$.complete()}ngAfterContentInit(){this.hasSomethingAfterLastItem=this.getSomethingAfterLastItem()}}return e.\u0275fac=function(t){return new(t||e)(i.Ob(i.l),i.Ob(b.b,8))},e.\u0275cmp=i.Ib({type:e,selectors:[["nz-list"],["","nz-list",""]],contentQueries:function(e,t,n){if(1&e&&(i.Hb(n,me,1),i.Hb(n,fe,1),i.Hb(n,ge,1)),2&e){let e;i.tc(e=i.cc())&&(t.nzListFooterComponent=e.first),i.tc(e=i.cc())&&(t.nzListPaginationComponent=e.first),i.tc(e=i.cc())&&(t.nzListLoadMoreDirective=e.first)}},hostVars:16,hostBindings:function(e,t){2&e&&i.Gb("ant-list-rtl","rtl"===t.dir)("ant-list-vertical","vertical"===t.nzItemLayout)("ant-list-lg","large"===t.nzSize)("ant-list-sm","small"===t.nzSize)("ant-list-split",t.nzSplit)("ant-list-bordered",t.nzBordered)("ant-list-loading",t.nzLoading)("ant-list-something-after-last-item",t.hasSomethingAfterLastItem)},inputs:{nzBordered:"nzBordered",nzGrid:"nzGrid",nzItemLayout:"nzItemLayout",nzRenderItem:"nzRenderItem",nzLoading:"nzLoading",nzLoadMore:"nzLoadMore",nzSize:"nzSize",nzSplit:"nzSplit",nzDataSource:"nzDataSource",nzHeader:"nzHeader",nzFooter:"nzFooter",nzPagination:"nzPagination",nzNoResult:"nzNoResult"},exportAs:["nzList"],features:[i.Ab],ngContentSelectors:G,decls:15,vars:9,consts:[["itemsTpl",""],[4,"ngIf"],[3,"nzSpinning"],[3,"min-height",4,"ngIf"],["nz-row","",3,"nzGutter",4,"ngIf","ngIfElse"],[3,"nzNoResult",4,"ngIf"],[3,"ngTemplateOutlet"],[1,"ant-list-items"],[4,"ngFor","ngForOf"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"nzStringTemplateOutlet"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan","nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl",4,"ngFor","ngForOf"],["nz-col","",3,"nzSpan","nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl"],[3,"nzNoResult"]],template:function(e,t){if(1&e&&(i.kc(B),i.Ec(0,D,3,1,"ng-template",null,0,i.Fc),i.Ec(2,x,2,1,"nz-list-header",1),i.jc(3),i.Ub(4,"nz-spin",2),i.Sb(5),i.Ec(6,R,1,2,"div",3),i.Ec(7,P,2,2,"div",4),i.Ec(8,j,1,1,"nz-list-empty",5),i.Rb(),i.Tb(),i.Ec(9,U,2,1,"nz-list-footer",1),i.jc(10,1),i.Ec(11,F,0,0,"ng-template",6),i.jc(12,2),i.Ec(13,V,2,1,"nz-list-pagination",1),i.jc(14,3)),2&e){const e=i.uc(1);i.Cb(2),i.lc("ngIf",t.nzHeader),i.Cb(2),i.lc("nzSpinning",t.nzLoading),i.Cb(2),i.lc("ngIf",t.nzLoading&&t.nzDataSource&&0===t.nzDataSource.length),i.Cb(1),i.lc("ngIf",t.nzGrid&&t.nzDataSource)("ngIfElse",e),i.Cb(1),i.lc("ngIf",!t.nzLoading&&t.nzDataSource&&0===t.nzDataSource.length),i.Cb(1),i.lc("ngIf",t.nzFooter),i.Cb(2),i.lc("ngTemplateOutlet",t.nzLoadMore),i.Cb(2),i.lc("ngIf",t.nzPagination)}},directives:[m.q,y.a,m.x,m.p,be,g.b,z.c,z.a,he,me,fe],encapsulation:2,changeDetection:0}),Object(o.b)([Object(r.a)(),Object(o.c)("design:type",Object)],e.prototype,"nzBordered",void 0),Object(o.b)([Object(r.a)(),Object(o.c)("design:type",Object)],e.prototype,"nzLoading",void 0),Object(o.b)([Object(r.a)(),Object(o.c)("design:type",Object)],e.prototype,"nzSplit",void 0),e})(),ze=(()=>{class e{constructor(e,t,n,i){this.parentComp=n,this.cdr=i,this.nzActions=[],this.nzExtra=null,this.nzNoFlex=!1,t.addClass(e.nativeElement,"ant-list-item")}get isVerticalAndExtra(){return!("vertical"!==this.itemLayout||!this.listItemExtraDirective&&!this.nzExtra)}ngAfterViewInit(){this.itemLayout$=this.parentComp.itemLayoutNotify$.subscribe(e=>{this.itemLayout=e,this.cdr.detectChanges()})}ngOnDestroy(){this.itemLayout$&&this.itemLayout$.unsubscribe()}}return e.\u0275fac=function(t){return new(t||e)(i.Ob(i.l),i.Ob(i.F),i.Ob(ve),i.Ob(i.h))},e.\u0275cmp=i.Ib({type:e,selectors:[["nz-list-item"],["","nz-list-item",""]],contentQueries:function(e,t,n){if(1&e&&i.Hb(n,ue,1),2&e){let e;i.tc(e=i.cc())&&(t.listItemExtraDirective=e.first)}},hostVars:2,hostBindings:function(e,t){2&e&&i.Gb("ant-list-item-no-flex",t.nzNoFlex)},inputs:{nzActions:"nzActions",nzExtra:"nzExtra",nzNoFlex:"nzNoFlex",nzContent:"nzContent"},exportAs:["nzListItem"],ngContentSelectors:le,decls:9,vars:2,consts:[["actionsTpl",""],["contentTpl",""],["extraTpl",""],["simpleTpl",""],[4,"ngIf","ngIfElse"],["nz-list-item-actions","",3,"nzActions",4,"ngIf"],["nz-list-item-actions","",3,"nzActions"],[4,"ngIf"],[4,"nzStringTemplateOutlet"],[3,"ngTemplateOutlet"],[1,"ant-list-item-main"]],template:function(e,t){if(1&e&&(i.kc(ce),i.Ec(0,q,2,1,"ng-template",null,0,i.Fc),i.Ec(2,W,3,1,"ng-template",null,1,i.Fc),i.Ec(4,X,1,0,"ng-template",null,2,i.Fc),i.Ec(6,te,4,4,"ng-template",null,3,i.Fc),i.Ec(8,ae,6,4,"ng-container",4)),2&e){const e=i.uc(7);i.Cb(8),i.lc("ngIf",t.isVerticalAndExtra)("ngIfElse",e)}},directives:[m.q,pe,g.b,m.x,ue],encapsulation:2,changeDetection:0}),Object(o.b)([Object(r.a)(),Object(o.c)("design:type",Boolean)],e.prototype,"nzNoFlex",void 0),e})(),ye=(()=>{class e{}return e.\u0275mod=i.Mb({type:e}),e.\u0275inj=i.Lb({factory:function(t){return new(t||e)},imports:[[b.a,m.c,y.b,z.b,f.b,g.a,v.c]]}),e})()},IjnV:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var i=n("fXoL"),o=n("ofXK"),r=n("Wfee");function s(e,t){if(1&e&&i.Pb(0,"nz-alert",4),2&e){const e=i.ec();i.lc("nzDescription",e.errors[0])}}function a(e,t){if(1&e&&i.Pb(0,"nz-alert",5),2&e){i.ec();const e=i.uc(3);i.lc("nzDescription",e)}}function c(e,t){if(1&e&&(i.Ub(0,"li"),i.Gc(1),i.Tb()),2&e){const e=t.$implicit;i.Cb(1),i.Hc(e)}}function l(e,t){if(1&e&&(i.Ub(0,"ul",6),i.Ec(1,c,2,1,"li",7),i.Tb()),2&e){const e=i.ec();i.Cb(1),i.lc("ngForOf",e.errors)}}let u=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Ib({type:e,selectors:[["cvc-form-errors-alert"]],inputs:{errors:"errors"},decls:4,vars:2,consts:[["nzType","error","nzShowIcon","",3,"nzDescription",4,"ngIf"],["nzType","error","nzShowIcon","","nzMessage","Submit Errors Occured",3,"nzDescription",4,"ngIf"],["nzSize","small"],["errorList",""],["nzType","error","nzShowIcon","",3,"nzDescription"],["nzType","error","nzShowIcon","","nzMessage","Submit Errors Occured",3,"nzDescription"],[1,"error-list"],[4,"ngFor","ngForOf"]],template:function(e,t){1&e&&(i.Ec(0,s,1,1,"nz-alert",0),i.Ec(1,a,1,1,"nz-alert",1),i.Ec(2,l,2,1,"ng-template",2,3,i.Fc)),2&e&&(i.lc("ngIf",1===t.errors.length),i.Cb(1),i.lc("ngIf",t.errors.length>1))},directives:[o.q,r.a,o.p],styles:["[_nghost-%COMP%]{display:block}.error-list[_ngcontent-%COMP%]{margin:0;padding:0 0 0 2em}"]}),e})()},JA5x:function(e,t,n){"use strict";n.d(t,"a",function(){return F}),n.d(t,"b",function(){return V}),n.d(t,"c",function(){return B}),n.d(t,"d",function(){return L});var i=n("mrSG"),o=n("fXoL"),r=n("/KA4"),s=n("cH1L"),a=n("2Suw"),c=n("XNiG"),l=n("1G5W"),u=n("ofXK"),d=n("pdGh");function p(e,t){1&e&&o.jc(0)}const h=["*"];function b(e,t){if(1&e&&(o.Sb(0),o.Gc(1),o.Rb()),2&e){const e=o.ec(3);o.Cb(1),o.Hc(e.nzTitle)}}function m(e,t){if(1&e&&(o.Ub(0,"div",11),o.Ec(1,b,2,1,"ng-container",12),o.Tb()),2&e){const e=o.ec(2);o.Cb(1),o.lc("nzStringTemplateOutlet",e.nzTitle)}}function f(e,t){if(1&e&&(o.Sb(0),o.Gc(1),o.Rb()),2&e){const e=o.ec(3);o.Cb(1),o.Hc(e.nzExtra)}}function g(e,t){if(1&e&&(o.Ub(0,"div",13),o.Ec(1,f,2,1,"ng-container",12),o.Tb()),2&e){const e=o.ec(2);o.Cb(1),o.lc("nzStringTemplateOutlet",e.nzExtra)}}function v(e,t){}function z(e,t){if(1&e&&(o.Sb(0),o.Ec(1,v,0,0,"ng-template",14),o.Rb()),2&e){const e=o.ec(2);o.Cb(1),o.lc("ngTemplateOutlet",e.listOfNzCardTabComponent.template)}}function y(e,t){if(1&e&&(o.Ub(0,"div",6),o.Ub(1,"div",7),o.Ec(2,m,2,1,"div",8),o.Ec(3,g,2,1,"div",9),o.Tb(),o.Ec(4,z,2,1,"ng-container",10),o.Tb()),2&e){const e=o.ec();o.Cb(2),o.lc("ngIf",e.nzTitle),o.Cb(1),o.lc("ngIf",e.nzExtra),o.Cb(1),o.lc("ngIf",e.listOfNzCardTabComponent)}}function I(e,t){}function C(e,t){if(1&e&&(o.Ub(0,"div",15),o.Ec(1,I,0,0,"ng-template",14),o.Tb()),2&e){const e=o.ec();o.Cb(1),o.lc("ngTemplateOutlet",e.nzCover)}}function O(e,t){1&e&&(o.Sb(0),o.jc(1),o.Rb())}function S(e,t){1&e&&o.Pb(0,"nz-card-loading")}function T(e,t){}function E(e,t){if(1&e&&(o.Ub(0,"li"),o.Ub(1,"span"),o.Ec(2,T,0,0,"ng-template",14),o.Tb(),o.Tb()),2&e){const e=t.$implicit,n=o.ec(2);o.Bc("width",100/n.nzActions.length,"%"),o.Cb(2),o.lc("ngTemplateOutlet",e)}}function N(e,t){if(1&e&&(o.Ub(0,"ul",16),o.Ec(1,E,3,3,"li",17),o.Tb()),2&e){const e=o.ec();o.Cb(1),o.lc("ngForOf",e.nzActions)}}function $(e,t){1&e&&(o.Ub(0,"div",4),o.Pb(1,"div",5),o.Tb()),2&e&&o.lc("ngClass",t.$implicit)}function w(e,t){if(1&e&&(o.Ub(0,"div",2),o.Ec(1,$,2,1,"div",3),o.Tb()),2&e){const e=t.$implicit;o.Cb(1),o.lc("ngForOf",e)}}function D(e,t){}function A(e,t){if(1&e&&(o.Ub(0,"div",2),o.Ec(1,D,0,0,"ng-template",3),o.Tb()),2&e){const e=o.ec();o.Cb(1),o.lc("ngTemplateOutlet",e.nzAvatar)}}function x(e,t){if(1&e&&(o.Sb(0),o.Gc(1),o.Rb()),2&e){const e=o.ec(3);o.Cb(1),o.Hc(e.nzTitle)}}function R(e,t){if(1&e&&(o.Ub(0,"div",7),o.Ec(1,x,2,1,"ng-container",8),o.Tb()),2&e){const e=o.ec(2);o.Cb(1),o.lc("nzStringTemplateOutlet",e.nzTitle)}}function k(e,t){if(1&e&&(o.Sb(0),o.Gc(1),o.Rb()),2&e){const e=o.ec(3);o.Cb(1),o.Hc(e.nzDescription)}}function M(e,t){if(1&e&&(o.Ub(0,"div",9),o.Ec(1,k,2,1,"ng-container",8),o.Tb()),2&e){const e=o.ec(2);o.Cb(1),o.lc("nzStringTemplateOutlet",e.nzDescription)}}function P(e,t){if(1&e&&(o.Ub(0,"div",4),o.Ec(1,R,2,1,"div",5),o.Ec(2,M,2,1,"div",6),o.Tb()),2&e){const e=o.ec();o.Cb(1),o.lc("ngIf",e.nzTitle),o.Cb(1),o.lc("ngIf",e.nzDescription)}}let j=(()=>{class e{constructor(e){this.elementRef=e,this.nzHoverable=!0,this.elementRef.nativeElement.classList.add("ant-card-grid")}}return e.\u0275fac=function(t){return new(t||e)(o.Ob(o.l))},e.\u0275dir=o.Jb({type:e,selectors:[["","nz-card-grid",""]],hostVars:2,hostBindings:function(e,t){2&e&&o.Gb("ant-card-hoverable",t.nzHoverable)},inputs:{nzHoverable:"nzHoverable"},exportAs:["nzCardGrid"]}),Object(i.b)([Object(r.a)(),Object(i.c)("design:type",Object)],e.prototype,"nzHoverable",void 0),e})(),L=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Ib({type:e,selectors:[["nz-card-tab"]],viewQuery:function(e,t){if(1&e&&o.Lc(o.M,3),2&e){let e;o.tc(e=o.cc())&&(t.template=e.first)}},exportAs:["nzCardTab"],ngContentSelectors:h,decls:1,vars:0,template:function(e,t){1&e&&(o.kc(),o.Ec(0,p,1,0,"ng-template"))},encapsulation:2,changeDetection:0}),e})();const U="card";let F=(()=>{class e{constructor(e,t,n,i){this.nzConfigService=e,this.cdr=t,this.elementRef=n,this.directionality=i,this._nzModuleName=U,this.nzBordered=!0,this.nzBorderless=!1,this.nzLoading=!1,this.nzHoverable=!1,this.nzBodyStyle=null,this.nzActions=[],this.nzType=null,this.nzSize="default",this.dir="ltr",this.destroy$=new c.a,this.elementRef.nativeElement.classList.add("ant-card"),this.nzConfigService.getConfigChangeEventForComponent(U).pipe(Object(l.a)(this.destroy$)).subscribe(()=>{this.cdr.markForCheck()})}ngOnInit(){var e;null===(e=this.directionality.change)||void 0===e||e.pipe(Object(l.a)(this.destroy$)).subscribe(e=>{this.dir=e,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return e.\u0275fac=function(t){return new(t||e)(o.Ob(a.a),o.Ob(o.h),o.Ob(o.l),o.Ob(s.b,8))},e.\u0275cmp=o.Ib({type:e,selectors:[["nz-card"]],contentQueries:function(e,t,n){if(1&e&&(o.Hb(n,L,1),o.Hb(n,j,0)),2&e){let e;o.tc(e=o.cc())&&(t.listOfNzCardTabComponent=e.first),o.tc(e=o.cc())&&(t.listOfNzCardGridDirective=e)}},hostVars:16,hostBindings:function(e,t){2&e&&o.Gb("ant-card-loading",t.nzLoading)("ant-card-bordered",!1===t.nzBorderless&&t.nzBordered)("ant-card-hoverable",t.nzHoverable)("ant-card-small","small"===t.nzSize)("ant-card-contain-grid",t.listOfNzCardGridDirective&&t.listOfNzCardGridDirective.length)("ant-card-type-inner","inner"===t.nzType)("ant-card-contain-tabs",!!t.listOfNzCardTabComponent)("ant-card-rtl","rtl"===t.dir)},inputs:{nzBordered:"nzBordered",nzBorderless:"nzBorderless",nzLoading:"nzLoading",nzHoverable:"nzHoverable",nzBodyStyle:"nzBodyStyle",nzActions:"nzActions",nzType:"nzType",nzSize:"nzSize",nzCover:"nzCover",nzTitle:"nzTitle",nzExtra:"nzExtra"},exportAs:["nzCard"],ngContentSelectors:h,decls:7,vars:6,consts:[["class","ant-card-head",4,"ngIf"],["class","ant-card-cover",4,"ngIf"],[1,"ant-card-body",3,"ngStyle"],[4,"ngIf","ngIfElse"],["loadingTemplate",""],["class","ant-card-actions",4,"ngIf"],[1,"ant-card-head"],[1,"ant-card-head-wrapper"],["class","ant-card-head-title",4,"ngIf"],["class","ant-card-extra",4,"ngIf"],[4,"ngIf"],[1,"ant-card-head-title"],[4,"nzStringTemplateOutlet"],[1,"ant-card-extra"],[3,"ngTemplateOutlet"],[1,"ant-card-cover"],[1,"ant-card-actions"],[3,"width",4,"ngFor","ngForOf"]],template:function(e,t){if(1&e&&(o.kc(),o.Ec(0,y,5,3,"div",0),o.Ec(1,C,2,1,"div",1),o.Ub(2,"div",2),o.Ec(3,O,2,0,"ng-container",3),o.Ec(4,S,1,0,"ng-template",null,4,o.Fc),o.Tb(),o.Ec(6,N,2,1,"ul",5)),2&e){const e=o.uc(5);o.lc("ngIf",t.nzTitle||t.nzExtra||t.listOfNzCardTabComponent),o.Cb(1),o.lc("ngIf",t.nzCover),o.Cb(1),o.lc("ngStyle",t.nzBodyStyle),o.Cb(1),o.lc("ngIf",!t.nzLoading)("ngIfElse",e),o.Cb(3),o.lc("ngIf",t.nzActions.length)}},directives:function(){return[u.q,u.t,d.b,u.x,_,u.p]},encapsulation:2,changeDetection:0}),Object(i.b)([Object(a.b)(),Object(r.a)(),Object(i.c)("design:type",Boolean)],e.prototype,"nzBordered",void 0),Object(i.b)([Object(a.b)(),Object(r.a)(),Object(i.c)("design:type",Boolean)],e.prototype,"nzBorderless",void 0),Object(i.b)([Object(r.a)(),Object(i.c)("design:type",Object)],e.prototype,"nzLoading",void 0),Object(i.b)([Object(a.b)(),Object(r.a)(),Object(i.c)("design:type",Boolean)],e.prototype,"nzHoverable",void 0),Object(i.b)([Object(a.b)(),Object(i.c)("design:type",String)],e.prototype,"nzSize",void 0),e})(),_=(()=>{class e{constructor(e){this.elementRef=e,this.listOfLoading=[["ant-col-22"],["ant-col-8","ant-col-15"],["ant-col-6","ant-col-18"],["ant-col-13","ant-col-9"],["ant-col-4","ant-col-3","ant-col-16"],["ant-col-8","ant-col-6","ant-col-8"]],this.elementRef.nativeElement.classList.add("ant-card-loading-content")}}return e.\u0275fac=function(t){return new(t||e)(o.Ob(o.l))},e.\u0275cmp=o.Ib({type:e,selectors:[["nz-card-loading"]],exportAs:["nzCardLoading"],decls:2,vars:1,consts:[[1,"ant-card-loading-content"],["class","ant-row","style","margin-left: -4px; margin-right: -4px;",4,"ngFor","ngForOf"],[1,"ant-row",2,"margin-left","-4px","margin-right","-4px"],["style","padding-left: 4px; padding-right: 4px;",3,"ngClass",4,"ngFor","ngForOf"],[2,"padding-left","4px","padding-right","4px",3,"ngClass"],[1,"ant-card-loading-block"]],template:function(e,t){1&e&&(o.Ub(0,"div",0),o.Ec(1,w,2,1,"div",1),o.Tb()),2&e&&(o.Cb(1),o.lc("ngForOf",t.listOfLoading))},directives:[u.p,u.o],encapsulation:2,changeDetection:0}),e})(),V=(()=>{class e{constructor(e){this.elementRef=e,this.nzTitle=null,this.nzDescription=null,this.nzAvatar=null,this.elementRef.nativeElement.classList.add("ant-card-meta")}}return e.\u0275fac=function(t){return new(t||e)(o.Ob(o.l))},e.\u0275cmp=o.Ib({type:e,selectors:[["nz-card-meta"]],inputs:{nzTitle:"nzTitle",nzDescription:"nzDescription",nzAvatar:"nzAvatar"},exportAs:["nzCardMeta"],decls:2,vars:2,consts:[["class","ant-card-meta-avatar",4,"ngIf"],["class","ant-card-meta-detail",4,"ngIf"],[1,"ant-card-meta-avatar"],[3,"ngTemplateOutlet"],[1,"ant-card-meta-detail"],["class","ant-card-meta-title",4,"ngIf"],["class","ant-card-meta-description",4,"ngIf"],[1,"ant-card-meta-title"],[4,"nzStringTemplateOutlet"],[1,"ant-card-meta-description"]],template:function(e,t){1&e&&(o.Ec(0,A,2,1,"div",0),o.Ec(1,P,3,2,"div",1)),2&e&&(o.lc("ngIf",t.nzAvatar),o.Cb(1),o.lc("ngIf",t.nzTitle||t.nzDescription))},directives:[u.q,u.x,d.b],encapsulation:2,changeDetection:0}),e})(),B=(()=>{class e{}return e.\u0275mod=o.Mb({type:e}),e.\u0275inj=o.Lb({factory:function(t){return new(t||e)},imports:[[u.c,d.a],s.a]}),e})()},Nqz0:function(e,t,n){"use strict";n.d(t,"a",function(){return j}),n.d(t,"b",function(){return _}),n.d(t,"c",function(){return U}),n.d(t,"d",function(){return F});var i=n("mrSG"),o=n("FtGj"),r=n("rDax"),s=n("nLfN"),a=n("+rOU"),c=n("fXoL"),l=n("79xS"),u=n("JgHy"),d=n("/KA4"),p=n("XNiG"),h=n("2Vo4"),b=n("VRyK"),m=n("xgIS"),f=n("EY2u"),g=n("itXk"),v=(n("quSY"),n("CqXF")),z=n("eIep"),y=n("pLZG"),I=n("lJxs"),C=n("3UWI"),O=n("/uUt"),S=n("1G5W"),T=(n("IzEk"),n("cH1L")),E=n("ofXK"),N=n("3Pt+"),$=n("OzZK"),w=n("YF2q"),D=n("pdGh"),A=n("FwiY"),x=n("Q8cG"),R=n("GR68");function k(e,t){if(1&e){const e=c.Vb();c.Ub(0,"div",0),c.bc("mouseenter",function(){return c.vc(e),c.ec().setMouseState(!0)})("mouseleave",function(){return c.vc(e),c.ec().setMouseState(!1)}),c.jc(1),c.Tb()}if(2&e){const e=c.ec();c.Gb("ant-dropdown-rtl","rtl"===e.dir),c.lc("ngClass",e.nzOverlayClassName)("ngStyle",e.nzOverlayStyle)("@slideMotion","enter")("@.disabled",null==e.noAnimation?null:e.noAnimation.nzNoAnimation)("nzNoAnimation",null==e.noAnimation?null:e.noAnimation.nzNoAnimation)}}const M=["*"],P=[u.f.bottomLeft,u.f.bottomRight,u.f.topRight,u.f.topLeft];let j=(()=>{class e{constructor(e,t,n,i,o){this.elementRef=e,this.overlay=t,this.renderer=n,this.viewContainerRef=i,this.platform=o,this.overlayRef=null,this.destroy$=new p.a,this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.elementRef.nativeElement).withLockedPosition().withTransformOriginOn(".ant-dropdown"),this.inputVisible$=new h.a(!1),this.nzTrigger$=new h.a("hover"),this.overlayClose$=new p.a,this.nzDropdownMenu=null,this.nzTrigger="hover",this.nzMatchWidthElement=null,this.nzBackdrop=!1,this.nzHasBackdrop=!1,this.nzClickHide=!0,this.nzDisabled=!1,this.nzVisible=!1,this.nzOverlayClassName="",this.nzOverlayStyle={},this.nzPlacement="bottomLeft",this.nzVisibleChange=new c.n,this.elementRef.nativeElement.classList.add("ant-dropdown-trigger")}setDropdownMenuValue(e,t){this.nzDropdownMenu&&this.nzDropdownMenu.setValue(e,t)}ngOnInit(){}ngAfterViewInit(){if(this.nzDropdownMenu){const e=this.elementRef.nativeElement,t=Object(b.a)(Object(m.a)(e,"mouseenter").pipe(Object(v.a)(!0)),Object(m.a)(e,"mouseleave").pipe(Object(v.a)(!1))),n=this.nzDropdownMenu.mouseState$,i=Object(b.a)(n,t),r=Object(m.a)(e,"click").pipe(Object(v.a)(!0)),s=this.nzTrigger$.pipe(Object(z.a)(e=>"hover"===e?i:"click"===e?r:f.a)),c=this.nzDropdownMenu.descendantMenuItemClick$.pipe(Object(y.a)(()=>this.nzClickHide),Object(v.a)(!1)),l=Object(b.a)(s,c,this.overlayClose$).pipe(Object(y.a)(()=>!this.nzDisabled)),d=Object(b.a)(this.inputVisible$,l);Object(g.a)([d,this.nzDropdownMenu.isChildSubMenuOpen$]).pipe(Object(I.a)(([e,t])=>e||t),Object(C.a)(150),Object(O.a)(),Object(y.a)(()=>this.platform.isBrowser),Object(S.a)(this.destroy$)).subscribe(t=>{const n=(this.nzMatchWidthElement?this.nzMatchWidthElement.nativeElement:e).getBoundingClientRect().width;this.nzVisible!==t&&this.nzVisibleChange.emit(t),this.nzVisible=t,t?(this.overlayRef?this.overlayRef.getConfig().minWidth=n:(this.overlayRef=this.overlay.create({positionStrategy:this.positionStrategy,minWidth:n,disposeOnNavigation:!0,hasBackdrop:(this.nzHasBackdrop||this.nzBackdrop)&&"click"===this.nzTrigger,scrollStrategy:this.overlay.scrollStrategies.reposition()}),Object(b.a)(this.overlayRef.backdropClick(),this.overlayRef.detachments(),this.overlayRef.outsidePointerEvents().pipe(Object(y.a)(e=>!this.elementRef.nativeElement.contains(e.target))),this.overlayRef.keydownEvents().pipe(Object(y.a)(e=>e.keyCode===o.f&&!Object(o.p)(e)))).pipe(Object(v.a)(!1),Object(S.a)(this.destroy$)).subscribe(this.overlayClose$)),this.positionStrategy.withPositions([u.f[this.nzPlacement],...P]),this.portal&&this.portal.templateRef===this.nzDropdownMenu.templateRef||(this.portal=new a.f(this.nzDropdownMenu.templateRef,this.viewContainerRef)),this.overlayRef.attach(this.portal)):this.overlayRef&&this.overlayRef.detach()})}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.overlayRef&&(this.overlayRef.dispose(),this.overlayRef=null)}ngOnChanges(e){const{nzVisible:t,nzDisabled:n,nzOverlayClassName:i,nzOverlayStyle:o,nzTrigger:r,nzBackdrop:s}=e;if(r&&this.nzTrigger$.next(this.nzTrigger),t&&this.inputVisible$.next(this.nzVisible),n){const e=this.elementRef.nativeElement;this.nzDisabled?(this.renderer.setAttribute(e,"disabled",""),this.inputVisible$.next(!1)):this.renderer.removeAttribute(e,"disabled")}i&&this.setDropdownMenuValue("nzOverlayClassName",this.nzOverlayClassName),o&&this.setDropdownMenuValue("nzOverlayStyle",this.nzOverlayStyle),s&&Object(l.c)("`nzBackdrop` in dropdown component will be removed in 12.0.0, please use `nzHasBackdrop` instead.")}}return e.\u0275fac=function(t){return new(t||e)(c.Ob(c.l),c.Ob(r.d),c.Ob(c.F),c.Ob(c.Q),c.Ob(s.a))},e.\u0275dir=c.Jb({type:e,selectors:[["","nz-dropdown",""]],inputs:{nzDropdownMenu:"nzDropdownMenu",nzTrigger:"nzTrigger",nzMatchWidthElement:"nzMatchWidthElement",nzBackdrop:"nzBackdrop",nzHasBackdrop:"nzHasBackdrop",nzClickHide:"nzClickHide",nzDisabled:"nzDisabled",nzVisible:"nzVisible",nzOverlayClassName:"nzOverlayClassName",nzOverlayStyle:"nzOverlayStyle",nzPlacement:"nzPlacement"},outputs:{nzVisibleChange:"nzVisibleChange"},exportAs:["nzDropdown"],features:[c.Ab]}),Object(i.b)([Object(d.a)(),Object(i.c)("design:type",Object)],e.prototype,"nzBackdrop",void 0),Object(i.b)([Object(d.a)(),Object(i.c)("design:type",Object)],e.prototype,"nzHasBackdrop",void 0),Object(i.b)([Object(d.a)(),Object(i.c)("design:type",Object)],e.prototype,"nzClickHide",void 0),Object(i.b)([Object(d.a)(),Object(i.c)("design:type",Object)],e.prototype,"nzDisabled",void 0),Object(i.b)([Object(d.a)(),Object(i.c)("design:type",Object)],e.prototype,"nzVisible",void 0),e})(),L=(()=>{class e{}return e.\u0275mod=c.Mb({type:e}),e.\u0275inj=c.Lb({factory:function(t){return new(t||e)}}),e})(),U=(()=>{class e{constructor(e,t,n){this.renderer=e,this.nzButtonGroupComponent=t,this.elementRef=n}ngAfterViewInit(){const e=this.renderer.parentNode(this.elementRef.nativeElement);this.nzButtonGroupComponent&&e&&this.renderer.addClass(e,"ant-dropdown-button")}}return e.\u0275fac=function(t){return new(t||e)(c.Ob(c.F),c.Ob($.b,9),c.Ob(c.l))},e.\u0275dir=c.Jb({type:e,selectors:[["","nz-button","","nz-dropdown",""]]}),e})(),F=(()=>{class e{constructor(e,t,n,i,o,r,s){this.cdr=e,this.elementRef=t,this.renderer=n,this.viewContainerRef=i,this.nzMenuService=o,this.directionality=r,this.noAnimation=s,this.mouseState$=new h.a(!1),this.isChildSubMenuOpen$=this.nzMenuService.isChildSubMenuOpen$,this.descendantMenuItemClick$=this.nzMenuService.descendantMenuItemClick$,this.nzOverlayClassName="",this.nzOverlayStyle={},this.dir="ltr",this.destroy$=new p.a}setMouseState(e){this.mouseState$.next(e)}setValue(e,t){this[e]=t,this.cdr.markForCheck()}ngOnInit(){var e;null===(e=this.directionality.change)||void 0===e||e.pipe(Object(S.a)(this.destroy$)).subscribe(e=>{this.dir=e,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngAfterContentInit(){this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement),this.elementRef.nativeElement)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return e.\u0275fac=function(t){return new(t||e)(c.Ob(c.h),c.Ob(c.l),c.Ob(c.F),c.Ob(c.Q),c.Ob(x.a),c.Ob(T.b,8),c.Ob(w.a,9))},e.\u0275cmp=c.Ib({type:e,selectors:[["nz-dropdown-menu"]],viewQuery:function(e,t){if(1&e&&c.Lc(c.M,3),2&e){let e;c.tc(e=c.cc())&&(t.templateRef=e.first)}},exportAs:["nzDropdownMenu"],features:[c.Bb([x.a,{provide:x.b,useValue:!0}])],ngContentSelectors:M,decls:1,vars:0,consts:[[1,"ant-dropdown",3,"ngClass","ngStyle","nzNoAnimation","mouseenter","mouseleave"]],template:function(e,t){1&e&&(c.kc(),c.Ec(0,k,2,7,"ng-template"))},directives:[E.o,E.t,w.a],encapsulation:2,data:{animation:[R.e]},changeDetection:0}),e})(),_=(()=>{class e{}return e.\u0275mod=c.Mb({type:e}),e.\u0275inj=c.Lb({factory:function(t){return new(t||e)},imports:[[T.a,E.c,r.f,N.k,$.c,x.f,A.c,w.b,s.b,u.e,L,D.a],x.f]}),e})();new r.c({originX:"start",originY:"top"},{overlayX:"start",overlayY:"top"}),new r.c({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"}),new r.c({originX:"start",originY:"top"},{overlayX:"end",overlayY:"bottom"}),new r.c({originX:"start",originY:"top"},{overlayX:"end",overlayY:"top"})},Q8cG:function(e,t,n){"use strict";n.d(t,"a",function(){return W}),n.d(t,"b",function(){return X}),n.d(t,"c",function(){return re}),n.d(t,"d",function(){return se}),n.d(t,"e",function(){return Z}),n.d(t,"f",function(){return ue});var i=n("mrSG"),o=n("cH1L"),r=n("fXoL"),s=n("/KA4"),a=n("XNiG"),c=n("2Vo4"),l=n("VRyK"),u=n("itXk"),d=n("lJxs"),p=n("5+tZ"),h=n("pLZG"),b=n("CqXF"),m=n("3UWI"),f=n("/uUt"),g=n("1G5W"),v=n("JX91"),z=n("eIep"),y=n("tyNb"),I=n("rDax"),C=n("nLfN"),O=n("YF2q"),S=n("JgHy"),T=n("GR68"),E=n("ofXK"),N=n("pdGh"),$=n("FwiY");const w=["nz-submenu",""];function D(e,t){1&e&&r.jc(0,0,["*ngIf","!nzTitle"])}function A(e,t){if(1&e&&r.Pb(0,"div",6),2&e){const e=r.ec(),t=r.uc(7);r.lc("mode",e.mode)("nzOpen",e.nzOpen)("@.disabled",null==e.noAnimation?null:e.noAnimation.nzNoAnimation)("nzNoAnimation",null==e.noAnimation?null:e.noAnimation.nzNoAnimation)("menuClass",e.nzMenuClassName)("templateOutlet",t)}}function x(e,t){if(1&e){const e=r.Vb();r.Ub(0,"div",8),r.bc("subMenuMouseState",function(t){return r.vc(e),r.ec(2).setMouseEnterState(t)}),r.Tb()}if(2&e){const e=r.ec(2),t=r.uc(7);r.lc("theme",e.theme)("mode",e.mode)("nzOpen",e.nzOpen)("position",e.position)("nzDisabled",e.nzDisabled)("isMenuInsideDropDown",e.isMenuInsideDropDown)("templateOutlet",t)("menuClass",e.nzMenuClassName)("@.disabled",null==e.noAnimation?null:e.noAnimation.nzNoAnimation)("nzNoAnimation",null==e.noAnimation?null:e.noAnimation.nzNoAnimation)}}function R(e,t){if(1&e){const e=r.Vb();r.Ec(0,x,1,10,"ng-template",7),r.bc("positionChange",function(t){return r.vc(e),r.ec().onPositionChange(t)})}if(2&e){const e=r.ec(),t=r.uc(1);r.lc("cdkConnectedOverlayPositions",e.overlayPositions)("cdkConnectedOverlayOrigin",t)("cdkConnectedOverlayWidth",e.triggerWidth)("cdkConnectedOverlayOpen",e.nzOpen)("cdkConnectedOverlayTransformOriginOn",".ant-menu-submenu")}}function k(e,t){1&e&&r.jc(0,1)}const M=[[["","title",""]],"*"],P=["[title]","*"],j=["nz-submenu-title",""];function L(e,t){if(1&e&&r.Pb(0,"i",4),2&e){const e=r.ec();r.lc("nzType",e.nzIcon)}}function U(e,t){if(1&e&&(r.Sb(0),r.Ub(1,"span"),r.Gc(2),r.Tb(),r.Rb()),2&e){const e=r.ec();r.Cb(2),r.Hc(e.nzTitle)}}function F(e,t){1&e&&r.Pb(0,"i",8)}function _(e,t){1&e&&r.Pb(0,"i",9)}function V(e,t){if(1&e&&(r.Ub(0,"span",5),r.Ec(1,F,1,0,"i",6),r.Ec(2,_,1,0,"i",7),r.Tb()),2&e){const e=r.ec();r.lc("ngSwitch",e.dir),r.Cb(1),r.lc("ngSwitchCase","rtl")}}function B(e,t){1&e&&r.Pb(0,"i",10)}const G=["*"],K=["nz-submenu-inline-child",""];function q(e,t){}const Y=["nz-submenu-none-inline-child",""];function H(e,t){}let W=(()=>{class e{constructor(){this.descendantMenuItemClick$=new a.a,this.childMenuItemClick$=new a.a,this.theme$=new c.a("light"),this.mode$=new c.a("vertical"),this.inlineIndent$=new c.a(24),this.isChildSubMenuOpen$=new c.a(!1)}onDescendantMenuItemClick(e){this.descendantMenuItemClick$.next(e)}onChildMenuItemClick(e){this.childMenuItemClick$.next(e)}setMode(e){this.mode$.next(e)}setTheme(e){this.theme$.next(e)}setInlineIndent(e){this.inlineIndent$.next(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac}),e})();const X=new r.r("NzIsInDropDownMenuToken"),Q=new r.r("NzMenuServiceLocalToken");let J=(()=>{class e{constructor(e,t,n){this.nzHostSubmenuService=e,this.nzMenuService=t,this.isMenuInsideDropDown=n,this.mode$=this.nzMenuService.mode$.pipe(Object(d.a)(e=>"inline"===e?"inline":"vertical"===e||this.nzHostSubmenuService?"vertical":"horizontal")),this.level=1,this.isCurrentSubMenuOpen$=new c.a(!1),this.isChildSubMenuOpen$=new c.a(!1),this.isMouseEnterTitleOrOverlay$=new a.a,this.childMenuItemClick$=new a.a,this.nzHostSubmenuService&&(this.level=this.nzHostSubmenuService.level+1);const i=this.childMenuItemClick$.pipe(Object(p.b)(()=>this.mode$),Object(h.a)(e=>"inline"!==e||this.isMenuInsideDropDown),Object(b.a)(!1)),o=Object(l.a)(this.isMouseEnterTitleOrOverlay$,i);Object(u.a)([this.isChildSubMenuOpen$,o]).pipe(Object(d.a)(([e,t])=>e||t),Object(m.a)(150),Object(f.a)()).pipe(Object(f.a)()).subscribe(e=>{this.setOpenStateWithoutDebounce(e),this.nzHostSubmenuService?this.nzHostSubmenuService.isChildSubMenuOpen$.next(e):this.nzMenuService.isChildSubMenuOpen$.next(e)})}onChildMenuItemClick(e){this.childMenuItemClick$.next(e)}setOpenStateWithoutDebounce(e){this.isCurrentSubMenuOpen$.next(e)}setMouseEnterTitleOrOverlayState(e){this.isMouseEnterTitleOrOverlay$.next(e)}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(e,12),r.Yb(W),r.Yb(X))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac}),e})(),Z=(()=>{class e{constructor(e,t,n,i,o,r,s,c){this.nzMenuService=e,this.cdr=t,this.nzSubmenuService=n,this.isMenuInsideDropDown=i,this.directionality=o,this.routerLink=r,this.routerLinkWithHref=s,this.router=c,this.destroy$=new a.a,this.level=this.nzSubmenuService?this.nzSubmenuService.level+1:1,this.selected$=new a.a,this.inlinePaddingLeft=null,this.dir="ltr",this.nzDisabled=!1,this.nzSelected=!1,this.nzDanger=!1,this.nzMatchRouterExact=!1,this.nzMatchRouter=!1,c&&this.router.events.pipe(Object(g.a)(this.destroy$),Object(h.a)(e=>e instanceof y.b)).subscribe(()=>{this.updateRouterActive()})}clickMenuItem(e){this.nzDisabled?(e.preventDefault(),e.stopPropagation()):(this.nzMenuService.onDescendantMenuItemClick(this),this.nzSubmenuService?this.nzSubmenuService.onChildMenuItemClick(this):this.nzMenuService.onChildMenuItemClick(this))}setSelectedState(e){this.nzSelected=e,this.selected$.next(e)}updateRouterActive(){this.listOfRouterLink&&this.listOfRouterLinkWithHref&&this.router&&this.router.navigated&&this.nzMatchRouter&&Promise.resolve().then(()=>{const e=this.hasActiveLinks();this.nzSelected!==e&&(this.nzSelected=e,this.setSelectedState(this.nzSelected),this.cdr.markForCheck())})}hasActiveLinks(){const e=this.isLinkActive(this.router);return this.routerLink&&e(this.routerLink)||this.routerLinkWithHref&&e(this.routerLinkWithHref)||this.listOfRouterLink.some(e)||this.listOfRouterLinkWithHref.some(e)}isLinkActive(e){return t=>e.isActive(t.urlTree,this.nzMatchRouterExact)}ngOnInit(){var e;Object(u.a)([this.nzMenuService.mode$,this.nzMenuService.inlineIndent$]).pipe(Object(g.a)(this.destroy$)).subscribe(([e,t])=>{this.inlinePaddingLeft="inline"===e?this.level*t:null}),this.dir=this.directionality.value,null===(e=this.directionality.change)||void 0===e||e.pipe(Object(g.a)(this.destroy$)).subscribe(e=>{this.dir=e})}ngAfterContentInit(){this.listOfRouterLink.changes.pipe(Object(g.a)(this.destroy$)).subscribe(()=>this.updateRouterActive()),this.listOfRouterLinkWithHref.changes.pipe(Object(g.a)(this.destroy$)).subscribe(()=>this.updateRouterActive()),this.updateRouterActive()}ngOnChanges(e){e.nzSelected&&this.setSelectedState(this.nzSelected)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return e.\u0275fac=function(t){return new(t||e)(r.Ob(W),r.Ob(r.h),r.Ob(J,8),r.Ob(X),r.Ob(o.b,8),r.Ob(y.e,8),r.Ob(y.g,8),r.Ob(y.d,8))},e.\u0275dir=r.Jb({type:e,selectors:[["","nz-menu-item",""]],contentQueries:function(e,t,n){if(1&e&&(r.Hb(n,y.e,1),r.Hb(n,y.g,1)),2&e){let e;r.tc(e=r.cc())&&(t.listOfRouterLink=e),r.tc(e=r.cc())&&(t.listOfRouterLinkWithHref=e)}},hostVars:20,hostBindings:function(e,t){1&e&&r.bc("click",function(e){return t.clickMenuItem(e)}),2&e&&(r.Bc("padding-left","rtl"===t.dir?null:t.nzPaddingLeft||t.inlinePaddingLeft,"px")("padding-right","rtl"===t.dir?t.nzPaddingLeft||t.inlinePaddingLeft:null,"px"),r.Gb("ant-dropdown-menu-item",t.isMenuInsideDropDown)("ant-dropdown-menu-item-selected",t.isMenuInsideDropDown&&t.nzSelected)("ant-dropdown-menu-item-danger",t.isMenuInsideDropDown&&t.nzDanger)("ant-dropdown-menu-item-disabled",t.isMenuInsideDropDown&&t.nzDisabled)("ant-menu-item",!t.isMenuInsideDropDown)("ant-menu-item-selected",!t.isMenuInsideDropDown&&t.nzSelected)("ant-menu-item-danger",!t.isMenuInsideDropDown&&t.nzDanger)("ant-menu-item-disabled",!t.isMenuInsideDropDown&&t.nzDisabled))},inputs:{nzDisabled:"nzDisabled",nzSelected:"nzSelected",nzDanger:"nzDanger",nzMatchRouterExact:"nzMatchRouterExact",nzMatchRouter:"nzMatchRouter",nzPaddingLeft:"nzPaddingLeft"},exportAs:["nzMenuItem"],features:[r.Ab]}),Object(i.b)([Object(s.a)(),Object(i.c)("design:type",Object)],e.prototype,"nzDisabled",void 0),Object(i.b)([Object(s.a)(),Object(i.c)("design:type",Object)],e.prototype,"nzSelected",void 0),Object(i.b)([Object(s.a)(),Object(i.c)("design:type",Object)],e.prototype,"nzDanger",void 0),Object(i.b)([Object(s.a)(),Object(i.c)("design:type",Object)],e.prototype,"nzMatchRouterExact",void 0),Object(i.b)([Object(s.a)(),Object(i.c)("design:type",Object)],e.prototype,"nzMatchRouter",void 0),e})();const ee=[S.f.rightTop,S.f.right,S.f.rightBottom,S.f.leftTop,S.f.left,S.f.leftBottom],te=[S.f.bottomLeft];let ne=(()=>{class e{constructor(e,t,n,i,o,s,c){this.nzMenuService=e,this.cdr=t,this.nzSubmenuService=n,this.platform=i,this.isMenuInsideDropDown=o,this.directionality=s,this.noAnimation=c,this.nzMenuClassName="",this.nzPaddingLeft=null,this.nzTitle=null,this.nzIcon=null,this.nzOpen=!1,this.nzDisabled=!1,this.nzOpenChange=new r.n,this.cdkOverlayOrigin=null,this.listOfNzSubMenuComponent=null,this.listOfNzMenuItemDirective=null,this.level=this.nzSubmenuService.level,this.destroy$=new a.a,this.position="right",this.triggerWidth=null,this.theme="light",this.mode="vertical",this.inlinePaddingLeft=null,this.overlayPositions=ee,this.isSelected=!1,this.isActive=!1,this.dir="ltr"}setOpenStateWithoutDebounce(e){this.nzSubmenuService.setOpenStateWithoutDebounce(e)}toggleSubMenu(){this.setOpenStateWithoutDebounce(!this.nzOpen)}setMouseEnterState(e){this.isActive=e,"inline"!==this.mode&&this.nzSubmenuService.setMouseEnterTitleOrOverlayState(e)}setTriggerWidth(){"horizontal"===this.mode&&this.platform.isBrowser&&this.cdkOverlayOrigin&&(this.triggerWidth=this.cdkOverlayOrigin.nativeElement.getBoundingClientRect().width)}onPositionChange(e){const t=Object(S.g)(e);"rightTop"===t||"rightBottom"===t||"right"===t?this.position="right":"leftTop"!==t&&"leftBottom"!==t&&"left"!==t||(this.position="left"),this.cdr.markForCheck()}ngOnInit(){var e;this.nzMenuService.theme$.pipe(Object(g.a)(this.destroy$)).subscribe(e=>{this.theme=e,this.cdr.markForCheck()}),this.nzSubmenuService.mode$.pipe(Object(g.a)(this.destroy$)).subscribe(e=>{this.mode=e,"horizontal"===e?this.overlayPositions=te:"vertical"===e&&(this.overlayPositions=ee),this.cdr.markForCheck()}),Object(u.a)([this.nzSubmenuService.mode$,this.nzMenuService.inlineIndent$]).pipe(Object(g.a)(this.destroy$)).subscribe(([e,t])=>{this.inlinePaddingLeft="inline"===e?this.level*t:null,this.cdr.markForCheck()}),this.nzSubmenuService.isCurrentSubMenuOpen$.pipe(Object(g.a)(this.destroy$)).subscribe(e=>{this.isActive=e,e!==this.nzOpen&&(this.setTriggerWidth(),this.nzOpen=e,this.nzOpenChange.emit(this.nzOpen),this.cdr.markForCheck())}),this.dir=this.directionality.value,null===(e=this.directionality.change)||void 0===e||e.pipe(Object(g.a)(this.destroy$)).subscribe(e=>{this.dir=e,this.cdr.markForCheck()})}ngAfterContentInit(){this.setTriggerWidth();const e=this.listOfNzMenuItemDirective,t=e.changes,n=Object(l.a)(t,...e.map(e=>e.selected$));t.pipe(Object(v.a)(e),Object(z.a)(()=>n),Object(v.a)(!0),Object(d.a)(()=>e.some(e=>e.nzSelected)),Object(g.a)(this.destroy$)).subscribe(e=>{this.isSelected=e,this.cdr.markForCheck()})}ngOnChanges(e){const{nzOpen:t}=e;t&&(this.nzSubmenuService.setOpenStateWithoutDebounce(this.nzOpen),this.setTriggerWidth())}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return e.\u0275fac=function(t){return new(t||e)(r.Ob(W),r.Ob(r.h),r.Ob(J),r.Ob(C.a),r.Ob(X),r.Ob(o.b,8),r.Ob(O.a,9))},e.\u0275cmp=r.Ib({type:e,selectors:[["","nz-submenu",""]],contentQueries:function(t,n,i){if(1&t&&(r.Hb(i,e,1),r.Hb(i,Z,1)),2&t){let e;r.tc(e=r.cc())&&(n.listOfNzSubMenuComponent=e),r.tc(e=r.cc())&&(n.listOfNzMenuItemDirective=e)}},viewQuery:function(e,t){if(1&e&&r.Lc(I.b,3,r.l),2&e){let e;r.tc(e=r.cc())&&(t.cdkOverlayOrigin=e.first)}},hostVars:34,hostBindings:function(e,t){2&e&&r.Gb("ant-dropdown-menu-submenu",t.isMenuInsideDropDown)("ant-dropdown-menu-submenu-disabled",t.isMenuInsideDropDown&&t.nzDisabled)("ant-dropdown-menu-submenu-open",t.isMenuInsideDropDown&&t.nzOpen)("ant-dropdown-menu-submenu-selected",t.isMenuInsideDropDown&&t.isSelected)("ant-dropdown-menu-submenu-vertical",t.isMenuInsideDropDown&&"vertical"===t.mode)("ant-dropdown-menu-submenu-horizontal",t.isMenuInsideDropDown&&"horizontal"===t.mode)("ant-dropdown-menu-submenu-inline",t.isMenuInsideDropDown&&"inline"===t.mode)("ant-dropdown-menu-submenu-active",t.isMenuInsideDropDown&&t.isActive)("ant-menu-submenu",!t.isMenuInsideDropDown)("ant-menu-submenu-disabled",!t.isMenuInsideDropDown&&t.nzDisabled)("ant-menu-submenu-open",!t.isMenuInsideDropDown&&t.nzOpen)("ant-menu-submenu-selected",!t.isMenuInsideDropDown&&t.isSelected)("ant-menu-submenu-vertical",!t.isMenuInsideDropDown&&"vertical"===t.mode)("ant-menu-submenu-horizontal",!t.isMenuInsideDropDown&&"horizontal"===t.mode)("ant-menu-submenu-inline",!t.isMenuInsideDropDown&&"inline"===t.mode)("ant-menu-submenu-active",!t.isMenuInsideDropDown&&t.isActive)("ant-menu-submenu-rtl","rtl"===t.dir)},inputs:{nzMenuClassName:"nzMenuClassName",nzPaddingLeft:"nzPaddingLeft",nzTitle:"nzTitle",nzIcon:"nzIcon",nzOpen:"nzOpen",nzDisabled:"nzDisabled"},outputs:{nzOpenChange:"nzOpenChange"},exportAs:["nzSubmenu"],features:[r.Bb([J]),r.Ab],attrs:w,ngContentSelectors:P,decls:8,vars:9,consts:[["nz-submenu-title","","cdkOverlayOrigin","",3,"nzIcon","nzTitle","mode","nzDisabled","isMenuInsideDropDown","paddingLeft","subMenuMouseState","toggleSubMenu"],["origin","cdkOverlayOrigin"],[4,"ngIf"],["nz-submenu-inline-child","",3,"mode","nzOpen","nzNoAnimation","menuClass","templateOutlet",4,"ngIf","ngIfElse"],["nonInlineTemplate",""],["subMenuTemplate",""],["nz-submenu-inline-child","",3,"mode","nzOpen","nzNoAnimation","menuClass","templateOutlet"],["cdkConnectedOverlay","",3,"cdkConnectedOverlayPositions","cdkConnectedOverlayOrigin","cdkConnectedOverlayWidth","cdkConnectedOverlayOpen","cdkConnectedOverlayTransformOriginOn","positionChange"],["nz-submenu-none-inline-child","",3,"theme","mode","nzOpen","position","nzDisabled","isMenuInsideDropDown","templateOutlet","menuClass","nzNoAnimation","subMenuMouseState"]],template:function(e,t){if(1&e&&(r.kc(M),r.Ub(0,"div",0,1),r.bc("subMenuMouseState",function(e){return t.setMouseEnterState(e)})("toggleSubMenu",function(){return t.toggleSubMenu()}),r.Ec(2,D,1,0,"ng-content",2),r.Tb(),r.Ec(3,A,1,6,"div",3),r.Ec(4,R,1,5,"ng-template",null,4,r.Fc),r.Ec(6,k,1,0,"ng-template",null,5,r.Fc)),2&e){const e=r.uc(5);r.lc("nzIcon",t.nzIcon)("nzTitle",t.nzTitle)("mode",t.mode)("nzDisabled",t.nzDisabled)("isMenuInsideDropDown",t.isMenuInsideDropDown)("paddingLeft",t.nzPaddingLeft||t.inlinePaddingLeft),r.Cb(2),r.lc("ngIf",!t.nzTitle),r.Cb(1),r.lc("ngIf","inline"===t.mode)("ngIfElse",e)}},directives:function(){return[ae,I.b,E.q,ce,O.a,I.a,le]},encapsulation:2,changeDetection:0}),Object(i.b)([Object(s.a)(),Object(i.c)("design:type",Object)],e.prototype,"nzOpen",void 0),Object(i.b)([Object(s.a)(),Object(i.c)("design:type",Object)],e.prototype,"nzDisabled",void 0),e})();function ie(e,t){return e||t}function oe(e){return e||!1}let re=(()=>{class e{constructor(e,t,n,i){this.nzMenuService=e,this.isMenuInsideDropDown=t,this.cdr=n,this.directionality=i,this.nzInlineIndent=24,this.nzTheme="light",this.nzMode="vertical",this.nzInlineCollapsed=!1,this.nzSelectable=!this.isMenuInsideDropDown,this.nzClick=new r.n,this.actualMode="vertical",this.dir="ltr",this.inlineCollapsed$=new c.a(this.nzInlineCollapsed),this.mode$=new c.a(this.nzMode),this.destroy$=new a.a,this.listOfOpenedNzSubMenuComponent=[]}setInlineCollapsed(e){this.nzInlineCollapsed=e,this.inlineCollapsed$.next(e)}updateInlineCollapse(){this.listOfNzMenuItemDirective&&(this.nzInlineCollapsed?(this.listOfOpenedNzSubMenuComponent=this.listOfNzSubMenuComponent.filter(e=>e.nzOpen),this.listOfNzSubMenuComponent.forEach(e=>e.setOpenStateWithoutDebounce(!1))):(this.listOfOpenedNzSubMenuComponent.forEach(e=>e.setOpenStateWithoutDebounce(!0)),this.listOfOpenedNzSubMenuComponent=[]))}ngOnInit(){var e;Object(u.a)([this.inlineCollapsed$,this.mode$]).pipe(Object(g.a)(this.destroy$)).subscribe(([e,t])=>{this.actualMode=e?"vertical":t,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()}),this.nzMenuService.descendantMenuItemClick$.pipe(Object(g.a)(this.destroy$)).subscribe(e=>{this.nzClick.emit(e),this.nzSelectable&&!e.nzMatchRouter&&this.listOfNzMenuItemDirective.forEach(t=>t.setSelectedState(t===e))}),this.dir=this.directionality.value,null===(e=this.directionality.change)||void 0===e||e.pipe(Object(g.a)(this.destroy$)).subscribe(e=>{this.dir=e,this.nzMenuService.setMode(this.actualMode),this.cdr.markForCheck()})}ngAfterContentInit(){this.inlineCollapsed$.pipe(Object(g.a)(this.destroy$)).subscribe(()=>{this.updateInlineCollapse(),this.cdr.markForCheck()})}ngOnChanges(e){const{nzInlineCollapsed:t,nzInlineIndent:n,nzTheme:i,nzMode:o}=e;t&&this.inlineCollapsed$.next(this.nzInlineCollapsed),n&&this.nzMenuService.setInlineIndent(this.nzInlineIndent),i&&this.nzMenuService.setTheme(this.nzTheme),o&&(this.mode$.next(this.nzMode),!e.nzMode.isFirstChange()&&this.listOfNzSubMenuComponent&&this.listOfNzSubMenuComponent.forEach(e=>e.setOpenStateWithoutDebounce(!1)))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return e.\u0275fac=function(t){return new(t||e)(r.Ob(W),r.Ob(X),r.Ob(r.h),r.Ob(o.b,8))},e.\u0275dir=r.Jb({type:e,selectors:[["","nz-menu",""]],contentQueries:function(e,t,n){if(1&e&&(r.Hb(n,Z,1),r.Hb(n,ne,1)),2&e){let e;r.tc(e=r.cc())&&(t.listOfNzMenuItemDirective=e),r.tc(e=r.cc())&&(t.listOfNzSubMenuComponent=e)}},hostVars:34,hostBindings:function(e,t){2&e&&r.Gb("ant-dropdown-menu",t.isMenuInsideDropDown)("ant-dropdown-menu-root",t.isMenuInsideDropDown)("ant-dropdown-menu-light",t.isMenuInsideDropDown&&"light"===t.nzTheme)("ant-dropdown-menu-dark",t.isMenuInsideDropDown&&"dark"===t.nzTheme)("ant-dropdown-menu-vertical",t.isMenuInsideDropDown&&"vertical"===t.actualMode)("ant-dropdown-menu-horizontal",t.isMenuInsideDropDown&&"horizontal"===t.actualMode)("ant-dropdown-menu-inline",t.isMenuInsideDropDown&&"inline"===t.actualMode)("ant-dropdown-menu-inline-collapsed",t.isMenuInsideDropDown&&t.nzInlineCollapsed)("ant-menu",!t.isMenuInsideDropDown)("ant-menu-root",!t.isMenuInsideDropDown)("ant-menu-light",!t.isMenuInsideDropDown&&"light"===t.nzTheme)("ant-menu-dark",!t.isMenuInsideDropDown&&"dark"===t.nzTheme)("ant-menu-vertical",!t.isMenuInsideDropDown&&"vertical"===t.actualMode)("ant-menu-horizontal",!t.isMenuInsideDropDown&&"horizontal"===t.actualMode)("ant-menu-inline",!t.isMenuInsideDropDown&&"inline"===t.actualMode)("ant-menu-inline-collapsed",!t.isMenuInsideDropDown&&t.nzInlineCollapsed)("ant-menu-rtl","rtl"===t.dir)},inputs:{nzInlineIndent:"nzInlineIndent",nzTheme:"nzTheme",nzMode:"nzMode",nzInlineCollapsed:"nzInlineCollapsed",nzSelectable:"nzSelectable"},outputs:{nzClick:"nzClick"},exportAs:["nzMenu"],features:[r.Bb([{provide:Q,useClass:W},{provide:W,useFactory:ie,deps:[[new r.K,new r.B,W],Q]},{provide:X,useFactory:oe,deps:[[new r.K,new r.B,X]]}]),r.Ab]}),Object(i.b)([Object(s.a)(),Object(i.c)("design:type",Object)],e.prototype,"nzInlineCollapsed",void 0),Object(i.b)([Object(s.a)(),Object(i.c)("design:type",Object)],e.prototype,"nzSelectable",void 0),e})(),se=(()=>{class e{constructor(e,t){this.elementRef=e,this.renderer=t,this.renderer.addClass(e.nativeElement,"ant-dropdown-menu-item-divider")}}return e.\u0275fac=function(t){return new(t||e)(r.Ob(r.l),r.Ob(r.F))},e.\u0275dir=r.Jb({type:e,selectors:[["","nz-menu-divider",""]],exportAs:["nzMenuDivider"]}),e})(),ae=(()=>{class e{constructor(e,t){this.cdr=e,this.directionality=t,this.nzIcon=null,this.nzTitle=null,this.isMenuInsideDropDown=!1,this.nzDisabled=!1,this.paddingLeft=null,this.mode="vertical",this.toggleSubMenu=new r.n,this.subMenuMouseState=new r.n,this.dir="ltr",this.destroy$=new a.a}ngOnInit(){var e;this.dir=this.directionality.value,null===(e=this.directionality.change)||void 0===e||e.pipe(Object(g.a)(this.destroy$)).subscribe(e=>{this.dir=e,this.cdr.detectChanges()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}setMouseState(e){this.nzDisabled||this.subMenuMouseState.next(e)}clickTitle(){"inline"!==this.mode||this.nzDisabled||this.toggleSubMenu.emit()}}return e.\u0275fac=function(t){return new(t||e)(r.Ob(r.h),r.Ob(o.b,8))},e.\u0275cmp=r.Ib({type:e,selectors:[["","nz-submenu-title",""]],hostVars:8,hostBindings:function(e,t){1&e&&r.bc("click",function(){return t.clickTitle()})("mouseenter",function(){return t.setMouseState(!0)})("mouseleave",function(){return t.setMouseState(!1)}),2&e&&(r.Bc("padding-left","rtl"===t.dir?null:t.paddingLeft,"px")("padding-right","rtl"===t.dir?t.paddingLeft:null,"px"),r.Gb("ant-dropdown-menu-submenu-title",t.isMenuInsideDropDown)("ant-menu-submenu-title",!t.isMenuInsideDropDown))},inputs:{nzIcon:"nzIcon",nzTitle:"nzTitle",isMenuInsideDropDown:"isMenuInsideDropDown",nzDisabled:"nzDisabled",paddingLeft:"paddingLeft",mode:"mode"},outputs:{toggleSubMenu:"toggleSubMenu",subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuTitle"],attrs:j,ngContentSelectors:G,decls:6,vars:4,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[4,"nzStringTemplateOutlet"],["class","ant-dropdown-menu-submenu-expand-icon",3,"ngSwitch",4,"ngIf","ngIfElse"],["notDropdownTpl",""],["nz-icon","",3,"nzType"],[1,"ant-dropdown-menu-submenu-expand-icon",3,"ngSwitch"],["nz-icon","","nzType","left","class","ant-dropdown-menu-submenu-arrow-icon",4,"ngSwitchCase"],["nz-icon","","nzType","right","class","ant-dropdown-menu-submenu-arrow-icon",4,"ngSwitchDefault"],["nz-icon","","nzType","left",1,"ant-dropdown-menu-submenu-arrow-icon"],["nz-icon","","nzType","right",1,"ant-dropdown-menu-submenu-arrow-icon"],[1,"ant-menu-submenu-arrow"]],template:function(e,t){if(1&e&&(r.kc(),r.Ec(0,L,1,1,"i",0),r.Ec(1,U,3,1,"ng-container",1),r.jc(2),r.Ec(3,V,3,2,"span",2),r.Ec(4,B,1,0,"ng-template",null,3,r.Fc)),2&e){const e=r.uc(5);r.lc("ngIf",t.nzIcon),r.Cb(1),r.lc("nzStringTemplateOutlet",t.nzTitle),r.Cb(2),r.lc("ngIf",t.isMenuInsideDropDown)("ngIfElse",e)}},directives:[E.q,N.b,$.b,E.u,E.v,E.w],encapsulation:2,changeDetection:0}),e})(),ce=(()=>{class e{constructor(e,t,n){this.elementRef=e,this.renderer=t,this.directionality=n,this.templateOutlet=null,this.menuClass="",this.mode="vertical",this.nzOpen=!1,this.listOfCacheClassName=[],this.expandState="collapsed",this.dir="ltr",this.destroy$=new a.a,this.elementRef.nativeElement.classList.add("ant-menu","ant-menu-inline","ant-menu-sub")}calcMotionState(){this.expandState=this.nzOpen?"expanded":"collapsed"}ngOnInit(){var e;this.calcMotionState(),this.dir=this.directionality.value,null===(e=this.directionality.change)||void 0===e||e.pipe(Object(g.a)(this.destroy$)).subscribe(e=>{this.dir=e})}ngOnChanges(e){const{mode:t,nzOpen:n,menuClass:i}=e;(t||n)&&this.calcMotionState(),i&&(this.listOfCacheClassName.length&&this.listOfCacheClassName.filter(e=>!!e).forEach(e=>{this.renderer.removeClass(this.elementRef.nativeElement,e)}),this.menuClass&&(this.listOfCacheClassName=this.menuClass.split(" "),this.listOfCacheClassName.filter(e=>!!e).forEach(e=>{this.renderer.addClass(this.elementRef.nativeElement,e)})))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return e.\u0275fac=function(t){return new(t||e)(r.Ob(r.l),r.Ob(r.F),r.Ob(o.b,8))},e.\u0275cmp=r.Ib({type:e,selectors:[["","nz-submenu-inline-child",""]],hostVars:3,hostBindings:function(e,t){2&e&&(r.Dc("@collapseMotion",t.expandState),r.Gb("ant-menu-rtl","rtl"===t.dir))},inputs:{templateOutlet:"templateOutlet",menuClass:"menuClass",mode:"mode",nzOpen:"nzOpen"},exportAs:["nzSubmenuInlineChild"],features:[r.Ab],attrs:K,decls:1,vars:1,consts:[[3,"ngTemplateOutlet"]],template:function(e,t){1&e&&r.Ec(0,q,0,0,"ng-template",0),2&e&&r.lc("ngTemplateOutlet",t.templateOutlet)},directives:[E.x],encapsulation:2,data:{animation:[T.a]},changeDetection:0}),e})(),le=(()=>{class e{constructor(e,t){this.elementRef=e,this.directionality=t,this.menuClass="",this.theme="light",this.templateOutlet=null,this.isMenuInsideDropDown=!1,this.mode="vertical",this.position="right",this.nzDisabled=!1,this.nzOpen=!1,this.subMenuMouseState=new r.n,this.expandState="collapsed",this.dir="ltr",this.destroy$=new a.a,this.elementRef.nativeElement.classList.add("ant-menu-submenu","ant-menu-submenu-popup")}setMouseState(e){this.nzDisabled||this.subMenuMouseState.next(e)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}calcMotionState(){this.nzOpen?"horizontal"===this.mode?this.expandState="bottom":"vertical"===this.mode&&(this.expandState="active"):this.expandState="collapsed"}ngOnInit(){var e;this.calcMotionState(),this.dir=this.directionality.value,null===(e=this.directionality.change)||void 0===e||e.pipe(Object(g.a)(this.destroy$)).subscribe(e=>{this.dir=e})}ngOnChanges(e){const{mode:t,nzOpen:n}=e;(t||n)&&this.calcMotionState()}}return e.\u0275fac=function(t){return new(t||e)(r.Ob(r.l),r.Ob(o.b,8))},e.\u0275cmp=r.Ib({type:e,selectors:[["","nz-submenu-none-inline-child",""]],hostVars:14,hostBindings:function(e,t){1&e&&r.bc("mouseenter",function(){return t.setMouseState(!0)})("mouseleave",function(){return t.setMouseState(!1)}),2&e&&(r.Dc("@slideMotion",t.expandState)("@zoomBigMotion",t.expandState),r.Gb("ant-menu-light","light"===t.theme)("ant-menu-dark","dark"===t.theme)("ant-menu-submenu-placement-bottom","horizontal"===t.mode)("ant-menu-submenu-placement-right","vertical"===t.mode&&"right"===t.position)("ant-menu-submenu-placement-left","vertical"===t.mode&&"left"===t.position)("ant-menu-submenu-rtl","rtl"===t.dir))},inputs:{menuClass:"menuClass",theme:"theme",templateOutlet:"templateOutlet",isMenuInsideDropDown:"isMenuInsideDropDown",mode:"mode",position:"position",nzDisabled:"nzDisabled",nzOpen:"nzOpen"},outputs:{subMenuMouseState:"subMenuMouseState"},exportAs:["nzSubmenuNoneInlineChild"],features:[r.Ab],attrs:Y,decls:2,vars:16,consts:[[3,"ngClass"],[3,"ngTemplateOutlet"]],template:function(e,t){1&e&&(r.Ub(0,"div",0),r.Ec(1,H,0,0,"ng-template",1),r.Tb()),2&e&&(r.Gb("ant-dropdown-menu",t.isMenuInsideDropDown)("ant-menu",!t.isMenuInsideDropDown)("ant-dropdown-menu-vertical",t.isMenuInsideDropDown)("ant-menu-vertical",!t.isMenuInsideDropDown)("ant-dropdown-menu-sub",t.isMenuInsideDropDown)("ant-menu-sub",!t.isMenuInsideDropDown)("ant-menu-rtl","rtl"===t.dir),r.lc("ngClass",t.menuClass),r.Cb(1),r.lc("ngTemplateOutlet",t.templateOutlet))},directives:[E.o,E.x],encapsulation:2,data:{animation:[T.g,T.e]},changeDetection:0}),e})(),ue=(()=>{class e{}return e.\u0275mod=r.Mb({type:e}),e.\u0275inj=r.Lb({factory:function(t){return new(t||e)},imports:[[o.a,E.c,C.b,I.f,$.c,O.b,N.a]]}),e})()},QlLE:function(e,t,n){"use strict";n.d(t,"a",function(){return D}),n.d(t,"b",function(){return x}),n.d(t,"c",function(){return M});var i=n("+rOU"),o=n("fXoL"),r=n("XNiG"),s=n("JX91"),a=n("1G5W"),c=n("Rm4T"),l=n("cH1L"),u=n("ofXK"),d=n("pdGh"),p=n("2Suw");function h(e,t){1&e&&o.Pb(0,"nz-empty",6),2&e&&o.lc("nzNotFoundImage","simple")}function b(e,t){1&e&&o.Pb(0,"nz-empty",7),2&e&&o.lc("nzNotFoundImage","simple")}function m(e,t){1&e&&o.Pb(0,"nz-empty")}function f(e,t){if(1&e&&(o.Sb(0,2),o.Ec(1,h,1,1,"nz-empty",3),o.Ec(2,b,1,1,"nz-empty",4),o.Ec(3,m,1,0,"nz-empty",5),o.Rb()),2&e){const e=o.ec();o.lc("ngSwitch",e.size),o.Cb(1),o.lc("ngSwitchCase","normal"),o.Cb(1),o.lc("ngSwitchCase","small")}}function g(e,t){}function v(e,t){if(1&e&&o.Ec(0,g,0,0,"ng-template",8),2&e){const e=o.ec(2);o.lc("cdkPortalOutlet",e.contentPortal)}}function z(e,t){if(1&e&&(o.Sb(0),o.Gc(1),o.Rb()),2&e){const e=o.ec(2);o.Cb(1),o.Ic(" ",e.content," ")}}function y(e,t){if(1&e&&(o.Sb(0),o.Ec(1,v,1,1,void 0,1),o.Ec(2,z,2,1,"ng-container",1),o.Rb()),2&e){const e=o.ec();o.Cb(1),o.lc("ngIf","string"!==e.contentType),o.Cb(1),o.lc("ngIf","string"===e.contentType)}}function I(e,t){if(1&e&&(o.Sb(0),o.Pb(1,"img",5),o.Rb()),2&e){const e=o.ec(2);o.Cb(1),o.lc("src",e.nzNotFoundImage,o.xc)("alt",e.isContentString?e.nzNotFoundContent:"empty")}}function C(e,t){if(1&e&&(o.Sb(0),o.Ec(1,I,2,2,"ng-container",4),o.Rb()),2&e){const e=o.ec();o.Cb(1),o.lc("nzStringTemplateOutlet",e.nzNotFoundImage)}}function O(e,t){1&e&&o.Pb(0,"nz-empty-default")}function S(e,t){1&e&&o.Pb(0,"nz-empty-simple")}function T(e,t){if(1&e&&(o.Sb(0),o.Gc(1),o.Rb()),2&e){const e=o.ec(2);o.Cb(1),o.Ic(" ",e.isContentString?e.nzNotFoundContent:e.locale.description," ")}}function E(e,t){if(1&e&&(o.Ub(0,"p",6),o.Ec(1,T,2,1,"ng-container",4),o.Tb()),2&e){const e=o.ec();o.Cb(1),o.lc("nzStringTemplateOutlet",e.nzNotFoundContent)}}function N(e,t){if(1&e&&(o.Sb(0),o.Gc(1),o.Rb()),2&e){const e=o.ec(2);o.Cb(1),o.Ic(" ",e.nzNotFoundFooter," ")}}function $(e,t){if(1&e&&(o.Ub(0,"div",7),o.Ec(1,N,2,1,"ng-container",4),o.Tb()),2&e){const e=o.ec();o.Cb(1),o.lc("nzStringTemplateOutlet",e.nzNotFoundFooter)}}const w=new o.r("nz-empty-component-name");let D=(()=>{class e{constructor(e,t,n,i){this.configService=e,this.viewContainerRef=t,this.cdr=n,this.injector=i,this.contentType="string",this.size="",this.destroy$=new r.a}ngOnChanges(e){e.nzComponentName&&(this.size=function(e){switch(e){case"table":case"list":return"normal";case"select":case"tree-select":case"cascader":case"transfer":return"small";default:return""}}(e.nzComponentName.currentValue)),e.specificContent&&!e.specificContent.isFirstChange()&&(this.content=e.specificContent.currentValue,this.renderEmpty())}ngOnInit(){this.subscribeDefaultEmptyContentChange()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}renderEmpty(){const e=this.content;if("string"==typeof e)this.contentType="string";else if(e instanceof o.M){const t={$implicit:this.nzComponentName};this.contentType="template",this.contentPortal=new i.f(e,this.viewContainerRef,t)}else if(e instanceof o.O){const t=o.s.create({parent:this.injector,providers:[{provide:w,useValue:this.nzComponentName}]});this.contentType="component",this.contentPortal=new i.c(e,this.viewContainerRef,t)}else this.contentType="string",this.contentPortal=void 0;this.cdr.detectChanges()}subscribeDefaultEmptyContentChange(){this.configService.getConfigChangeEventForComponent("empty").pipe(Object(s.a)(!0),Object(a.a)(this.destroy$)).subscribe(()=>{this.content=this.specificContent||this.getUserDefaultEmptyContent(),this.renderEmpty()})}getUserDefaultEmptyContent(){return(this.configService.getConfigForComponent("empty")||{}).nzDefaultEmptyContent}}return e.\u0275fac=function(t){return new(t||e)(o.Ob(p.a),o.Ob(o.Q),o.Ob(o.h),o.Ob(o.s))},e.\u0275cmp=o.Ib({type:e,selectors:[["nz-embed-empty"]],inputs:{nzComponentName:"nzComponentName",specificContent:"specificContent"},exportAs:["nzEmbedEmpty"],features:[o.Ab],decls:2,vars:2,consts:[[3,"ngSwitch",4,"ngIf"],[4,"ngIf"],[3,"ngSwitch"],["class","ant-empty-normal",3,"nzNotFoundImage",4,"ngSwitchCase"],["class","ant-empty-small",3,"nzNotFoundImage",4,"ngSwitchCase"],[4,"ngSwitchDefault"],[1,"ant-empty-normal",3,"nzNotFoundImage"],[1,"ant-empty-small",3,"nzNotFoundImage"],[3,"cdkPortalOutlet"]],template:function(e,t){1&e&&(o.Ec(0,f,4,3,"ng-container",0),o.Ec(1,y,3,2,"ng-container",1)),2&e&&(o.lc("ngIf",!t.content&&null!==t.specificContent),o.Cb(1),o.lc("ngIf",t.content))},directives:function(){return[u.q,u.u,u.v,u.w,x,i.b]},encapsulation:2,changeDetection:0}),e})();const A=["default","simple"];let x=(()=>{class e{constructor(e,t){this.i18n=e,this.cdr=t,this.nzNotFoundImage="default",this.isContentString=!1,this.isImageBuildIn=!0,this.destroy$=new r.a}ngOnChanges(e){const{nzNotFoundContent:t,nzNotFoundImage:n}=e;if(t&&(this.isContentString="string"==typeof t.currentValue),n){const e=n.currentValue||"default";this.isImageBuildIn=A.findIndex(t=>t===e)>-1}}ngOnInit(){this.i18n.localeChange.pipe(Object(a.a)(this.destroy$)).subscribe(()=>{this.locale=this.i18n.getLocaleData("Empty"),this.cdr.markForCheck()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return e.\u0275fac=function(t){return new(t||e)(o.Ob(c.c),o.Ob(o.h))},e.\u0275cmp=o.Ib({type:e,selectors:[["nz-empty"]],hostAttrs:[1,"ant-empty"],inputs:{nzNotFoundImage:"nzNotFoundImage",nzNotFoundContent:"nzNotFoundContent",nzNotFoundFooter:"nzNotFoundFooter"},exportAs:["nzEmpty"],features:[o.Ab],decls:6,vars:5,consts:[[1,"ant-empty-image"],[4,"ngIf"],["class","ant-empty-description",4,"ngIf"],["class","ant-empty-footer",4,"ngIf"],[4,"nzStringTemplateOutlet"],[3,"src","alt"],[1,"ant-empty-description"],[1,"ant-empty-footer"]],template:function(e,t){1&e&&(o.Ub(0,"div",0),o.Ec(1,C,2,1,"ng-container",1),o.Ec(2,O,1,0,"nz-empty-default",1),o.Ec(3,S,1,0,"nz-empty-simple",1),o.Tb(),o.Ec(4,E,2,1,"p",2),o.Ec(5,$,2,1,"div",3)),2&e&&(o.Cb(1),o.lc("ngIf",!t.isImageBuildIn),o.Cb(1),o.lc("ngIf",t.isImageBuildIn&&"simple"!==t.nzNotFoundImage),o.Cb(1),o.lc("ngIf",t.isImageBuildIn&&"simple"===t.nzNotFoundImage),o.Cb(1),o.lc("ngIf",null!==t.nzNotFoundContent),o.Cb(1),o.lc("ngIf",t.nzNotFoundFooter))},directives:function(){return[u.q,d.b,R,k]},encapsulation:2,changeDetection:0}),e})(),R=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Ib({type:e,selectors:[["nz-empty-default"]],exportAs:["nzEmptyDefault"],decls:12,vars:0,consts:[["width","184","height","152","viewBox","0 0 184 152","xmlns","http://www.w3.org/2000/svg",1,"ant-empty-img-default"],["fill","none","fill-rule","evenodd"],["transform","translate(24 31.67)"],["cx","67.797","cy","106.89","rx","67.797","ry","12.668",1,"ant-empty-img-default-ellipse"],["d","M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z",1,"ant-empty-img-default-path-1"],["d","M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z","transform","translate(13.56)",1,"ant-empty-img-default-path-2"],["d","M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z",1,"ant-empty-img-default-path-3"],["d","M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z",1,"ant-empty-img-default-path-4"],["d","M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z",1,"ant-empty-img-default-path-5"],["transform","translate(149.65 15.383)",1,"ant-empty-img-default-g"],["cx","20.654","cy","3.167","rx","2.849","ry","2.815"],["d","M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"]],template:function(e,t){1&e&&(o.dc(),o.Ub(0,"svg",0),o.Ub(1,"g",1),o.Ub(2,"g",2),o.Pb(3,"ellipse",3),o.Pb(4,"path",4),o.Pb(5,"path",5),o.Pb(6,"path",6),o.Pb(7,"path",7),o.Tb(),o.Pb(8,"path",8),o.Ub(9,"g",9),o.Pb(10,"ellipse",10),o.Pb(11,"path",11),o.Tb(),o.Tb(),o.Tb())},encapsulation:2,changeDetection:0}),e})(),k=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Ib({type:e,selectors:[["nz-empty-simple"]],exportAs:["nzEmptySimple"],decls:6,vars:0,consts:[["width","64","height","41","viewBox","0 0 64 41","xmlns","http://www.w3.org/2000/svg",1,"ant-empty-img-simple"],["transform","translate(0 1)","fill","none","fill-rule","evenodd"],["cx","32","cy","33","rx","32","ry","7",1,"ant-empty-img-simple-ellipse"],["fill-rule","nonzero",1,"ant-empty-img-simple-g"],["d","M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"],["d","M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",1,"ant-empty-img-simple-path"]],template:function(e,t){1&e&&(o.dc(),o.Ub(0,"svg",0),o.Ub(1,"g",1),o.Pb(2,"ellipse",2),o.Ub(3,"g",3),o.Pb(4,"path",4),o.Pb(5,"path",5),o.Tb(),o.Tb(),o.Tb())},encapsulation:2,changeDetection:0}),e})(),M=(()=>{class e{}return e.\u0275mod=o.Mb({type:e}),e.\u0275inj=o.Lb({factory:function(t){return new(t||e)},imports:[[l.a,u.c,i.e,d.a,c.b]]}),e})()},SKKP:function(e,t,n){"use strict";n.d(t,"a",function(){return E}),n.d(t,"b",function(){return w}),n.d(t,"c",function(){return $});var i=n("mrSG"),o=n("cH1L"),r=n("GR68"),s=n("2Suw"),a=n("/KA4"),c=n("XNiG"),l=n("1G5W"),u=n("GU7r"),d=n("ofXK"),p=n("pdGh"),h=n("fXoL");function b(e,t){if(1&e&&(h.Sb(0),h.Gc(1),h.Rb()),2&e){const e=h.ec(2);h.Cb(1),h.Hc(e.nzText)}}function m(e,t){if(1&e&&(h.Sb(0),h.Pb(1,"span",2),h.Ub(2,"span",3),h.Ec(3,b,2,1,"ng-container",1),h.Tb(),h.Rb()),2&e){const e=h.ec();h.Cb(1),h.Fb("ant-badge-status-dot ant-badge-status-",e.nzStatus||e.presetColor,""),h.Bc("background",!e.presetColor&&e.nzColor),h.lc("ngStyle",e.nzStyle),h.Cb(2),h.lc("nzStringTemplateOutlet",e.nzText)}}function f(e,t){if(1&e&&h.Pb(0,"nz-badge-sup",5),2&e){const e=h.ec(2);h.lc("nzOffset",e.nzOffset)("nzTitle",e.nzTitle)("nzStyle",e.nzStyle)("nzDot",e.nzDot)("nzOverflowCount",e.nzOverflowCount)("disableAnimation",!!(e.nzStandalone||e.nzStatus||e.nzColor))("nzCount",e.nzCount)}}function g(e,t){if(1&e&&(h.Sb(0),h.Ec(1,f,1,7,"nz-badge-sup",4),h.Rb()),2&e){const e=h.ec();h.Cb(1),h.lc("ngIf",e.showSup)}}const v=["*"];function z(e,t){if(1&e&&(h.Ub(0,"p",6),h.Gc(1),h.Tb()),2&e){const e=t.$implicit,n=h.ec(2).index,i=h.ec(2);h.Gb("current",e===i.countArray[n]),h.Cb(1),h.Ic(" ",e," ")}}function y(e,t){if(1&e&&(h.Sb(0),h.Ec(1,z,2,3,"p",5),h.Rb()),2&e){const e=h.ec(3);h.Cb(1),h.lc("ngForOf",e.countSingleArray)}}function I(e,t){if(1&e&&(h.Ub(0,"span",3),h.Ec(1,y,2,1,"ng-container",4),h.Tb()),2&e){const e=t.index,n=h.ec(2);h.Bc("transform","translateY("+100*-n.countArray[e]+"%)"),h.Cb(1),h.lc("ngIf",!n.nzDot&&void 0!==n.countArray[e])}}function C(e,t){if(1&e&&(h.Sb(0),h.Ec(1,I,2,3,"span",2),h.Rb()),2&e){const e=h.ec();h.Cb(1),h.lc("ngForOf",e.maxNumberArray)}}function O(e,t){if(1&e&&h.Gc(0),2&e){const e=h.ec();h.Ic("",e.nzOverflowCount,"+")}}function S(e,t){if(1&e&&(h.Sb(0),h.Gc(1),h.Rb()),2&e){const e=h.ec();h.Cb(1),h.Hc(e.nzText)}}const T=["pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime"];let E=(()=>{class e{constructor(e,t,n,i,o){this.nzConfigService=e,this.renderer=t,this.cdr=n,this.elementRef=i,this.directionality=o,this._nzModuleName="badge",this.showSup=!1,this.presetColor=null,this.dir="ltr",this.destroy$=new c.a,this.nzShowZero=!1,this.nzShowDot=!0,this.nzStandalone=!1,this.nzDot=!1,this.nzOverflowCount=99,this.nzColor=void 0,this.nzStyle=null,this.nzText=null,this.elementRef.nativeElement.classList.add("ant-badge")}ngOnInit(){var e;null===(e=this.directionality.change)||void 0===e||e.pipe(Object(l.a)(this.destroy$)).subscribe(e=>{this.dir=e,this.prepareBadgeForRtl(),this.cdr.detectChanges()}),this.dir=this.directionality.value,this.prepareBadgeForRtl()}ngOnChanges(e){const{nzColor:t,nzShowDot:n,nzDot:i,nzCount:o,nzShowZero:r}=e;t&&(this.presetColor=this.nzColor&&-1!==T.indexOf(this.nzColor)?this.nzColor:null),(n||i||o||r)&&(this.showSup=this.nzShowDot&&this.nzDot||this.nzCount>0||this.nzCount<=0&&this.nzShowZero)}prepareBadgeForRtl(){this.isRtlLayout?this.renderer.addClass(this.elementRef.nativeElement,"ant-badge-rtl"):this.renderer.removeClass(this.elementRef.nativeElement,"ant-badge-rtl")}get isRtlLayout(){return"rtl"===this.dir}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return e.\u0275fac=function(t){return new(t||e)(h.Ob(s.a),h.Ob(h.F),h.Ob(h.h),h.Ob(h.l),h.Ob(o.b,8))},e.\u0275cmp=h.Ib({type:e,selectors:[["nz-badge"]],hostVars:4,hostBindings:function(e,t){2&e&&h.Gb("ant-badge-status",t.nzStatus)("ant-badge-not-a-wrapper",!!(t.nzStandalone||t.nzStatus||t.nzColor))},inputs:{nzShowZero:"nzShowZero",nzShowDot:"nzShowDot",nzStandalone:"nzStandalone",nzDot:"nzDot",nzOverflowCount:"nzOverflowCount",nzColor:"nzColor",nzStyle:"nzStyle",nzText:"nzText",nzTitle:"nzTitle",nzStatus:"nzStatus",nzCount:"nzCount",nzOffset:"nzOffset"},exportAs:["nzBadge"],features:[h.Ab],ngContentSelectors:v,decls:3,vars:2,consts:[[4,"ngIf"],[4,"nzStringTemplateOutlet"],[3,"ngStyle"],[1,"ant-badge-status-text"],[3,"nzOffset","nzTitle","nzStyle","nzDot","nzOverflowCount","disableAnimation","nzCount",4,"ngIf"],[3,"nzOffset","nzTitle","nzStyle","nzDot","nzOverflowCount","disableAnimation","nzCount"]],template:function(e,t){1&e&&(h.kc(),h.Ec(0,m,4,7,"ng-container",0),h.jc(1),h.Ec(2,g,2,1,"ng-container",1)),2&e&&(h.lc("ngIf",t.nzStatus||t.nzColor),h.Cb(2),h.lc("nzStringTemplateOutlet",t.nzCount))},directives:function(){return[d.q,p.b,d.t,N]},encapsulation:2,data:{animation:[r.f]},changeDetection:0}),Object(i.b)([Object(a.a)(),Object(i.c)("design:type",Boolean)],e.prototype,"nzShowZero",void 0),Object(i.b)([Object(a.a)(),Object(i.c)("design:type",Object)],e.prototype,"nzShowDot",void 0),Object(i.b)([Object(a.a)(),Object(i.c)("design:type",Object)],e.prototype,"nzStandalone",void 0),Object(i.b)([Object(a.a)(),Object(i.c)("design:type",Object)],e.prototype,"nzDot",void 0),Object(i.b)([Object(s.b)(),Object(i.c)("design:type",Number)],e.prototype,"nzOverflowCount",void 0),Object(i.b)([Object(s.b)(),Object(i.c)("design:type",String)],e.prototype,"nzColor",void 0),e})(),N=(()=>{class e{constructor(e){this.elementRef=e,this.nzStyle=null,this.nzDot=!1,this.nzOverflowCount=99,this.disableAnimation=!1,this.maxNumberArray=[],this.countArray=[],this.count=0,this.countSingleArray=[0,1,2,3,4,5,6,7,8,9],this.elementRef.nativeElement.classList.add("ant-scroll-number")}generateMaxNumberArray(){this.maxNumberArray=this.nzOverflowCount.toString().split("")}ngOnInit(){this.generateMaxNumberArray()}ngOnChanges(e){const{nzOverflowCount:t,nzCount:n}=e;n&&"number"==typeof n.currentValue&&(this.count=Math.max(0,n.currentValue),this.countArray=this.count.toString().split("").map(e=>+e)),t&&this.generateMaxNumberArray()}}return e.\u0275fac=function(t){return new(t||e)(h.Ob(h.l))},e.\u0275cmp=h.Ib({type:e,selectors:[["nz-badge-sup"]],hostVars:15,hostBindings:function(e,t){2&e&&(h.Db("title",null===t.nzTitle?"":t.nzTitle||t.nzCount),h.Dc("@.disabled",t.disableAnimation)("@zoomBadgeMotion",void 0),h.Ac(t.nzStyle),h.Bc("right",t.nzOffset&&t.nzOffset[0]?-t.nzOffset[0]:null,"px")("margin-top",t.nzOffset&&t.nzOffset[1]?t.nzOffset[1]:null,"px"),h.Gb("ant-badge-count",!t.nzDot)("ant-badge-dot",t.nzDot)("ant-badge-multiple-words",t.countArray.length>=2))},inputs:{nzStyle:"nzStyle",nzDot:"nzDot",nzOverflowCount:"nzOverflowCount",disableAnimation:"disableAnimation",nzOffset:"nzOffset",nzTitle:"nzTitle",nzCount:"nzCount"},exportAs:["nzBadgeSup"],features:[h.Ab],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["overflowTemplate",""],["class","ant-scroll-number-only",3,"transform",4,"ngFor","ngForOf"],[1,"ant-scroll-number-only"],[4,"ngIf"],["class","ant-scroll-number-only-unit",3,"current",4,"ngFor","ngForOf"],[1,"ant-scroll-number-only-unit"]],template:function(e,t){if(1&e&&(h.Ec(0,C,2,1,"ng-container",0),h.Ec(1,O,1,1,"ng-template",null,1,h.Fc)),2&e){const e=h.uc(2);h.lc("ngIf",t.count<=t.nzOverflowCount)("ngIfElse",e)}},directives:[d.q,d.p],encapsulation:2,data:{animation:[r.f]},changeDetection:0}),e})(),$=(()=>{class e{constructor(e){this.elementRef=e,this.nzPlacement="end",this.nzText=null,this.presetColor=null,this.elementRef.nativeElement.classList.add("ant-ribbon-wrapper")}ngOnChanges(e){const{nzColor:t}=e;t&&(this.presetColor=this.nzColor&&-1!==T.indexOf(this.nzColor)?this.nzColor:null)}}return e.\u0275fac=function(t){return new(t||e)(h.Ob(h.l))},e.\u0275cmp=h.Ib({type:e,selectors:[["nz-ribbon"]],inputs:{nzPlacement:"nzPlacement",nzText:"nzText",nzColor:"nzColor"},exportAs:["nzRibbon"],features:[h.Ab],ngContentSelectors:v,decls:4,vars:11,consts:[[1,"ant-ribbon"],[4,"nzStringTemplateOutlet"],[1,"ant-ribbon-corner"]],template:function(e,t){1&e&&(h.kc(),h.jc(0),h.Ub(1,"div",0),h.Ec(2,S,2,1,"ng-container",1),h.Pb(3,"div",2),h.Tb()),2&e&&(h.Cb(1),h.Eb(t.presetColor&&"ant-ribbon-color-"+t.presetColor),h.Bc("background-color",!t.presetColor&&t.nzColor),h.Gb("ant-ribbon-placement-end","end"===t.nzPlacement)("ant-ribbon-placement-start","start"===t.nzPlacement),h.Cb(1),h.lc("nzStringTemplateOutlet",t.nzText),h.Cb(1),h.Bc("color",!t.presetColor&&t.nzColor))},directives:[p.b],encapsulation:2,changeDetection:0}),e})(),w=(()=>{class e{}return e.\u0275mod=h.Mb({type:e}),e.\u0275inj=h.Lb({factory:function(t){return new(t||e)},imports:[[o.a,d.c,u.b,p.a]]}),e})()},"Tx//":function(e,t,n){"use strict";n.r(t),n.d(t,"LayoutModule",function(){return dt});var i=n("ofXK"),o=n("tyNb"),r=n("fXoL"),s=n("lnp5"),a=n("cH1L"),c=n("XNiG"),l=n("1G5W"),u=n("mrSG"),d=n("nLfN"),p=n("JwMs"),h=n("/KA4"),b=n("Q8cG"),m=n("0MNC"),f=n("FwiY");const g=["*"];function v(e,t){if(1&e){const e=r.Vb();r.Ub(0,"div",2),r.bc("click",function(){r.vc(e);const t=r.ec();return t.setCollapsed(!t.nzCollapsed)}),r.Tb()}if(2&e){const e=r.ec();r.lc("matchBreakPoint",e.matchBreakPoint)("nzCollapsedWidth",e.nzCollapsedWidth)("nzCollapsed",e.nzCollapsed)("nzBreakpoint",e.nzBreakpoint)("nzReverseArrow",e.nzReverseArrow)("nzTrigger",e.nzTrigger)("nzZeroTrigger",e.nzZeroTrigger)("siderWidth",e.widthSetting)}}const z=["nz-sider-trigger",""];function y(e,t){}function I(e,t){if(1&e&&(r.Sb(0),r.Ec(1,y,0,0,"ng-template",3),r.Rb()),2&e){const e=r.ec(),t=r.uc(5);r.Cb(1),r.lc("ngTemplateOutlet",e.nzZeroTrigger||t)}}function C(e,t){}function O(e,t){if(1&e&&(r.Sb(0),r.Ec(1,C,0,0,"ng-template",3),r.Rb()),2&e){const e=r.ec(),t=r.uc(3);r.Cb(1),r.lc("ngTemplateOutlet",e.nzTrigger||t)}}function S(e,t){if(1&e&&r.Pb(0,"i",5),2&e){const e=r.ec(2);r.lc("nzType",e.nzCollapsed?"right":"left")}}function T(e,t){if(1&e&&r.Pb(0,"i",5),2&e){const e=r.ec(2);r.lc("nzType",e.nzCollapsed?"left":"right")}}function E(e,t){if(1&e&&(r.Ec(0,S,1,1,"i",4),r.Ec(1,T,1,1,"i",4)),2&e){const e=r.ec();r.lc("ngIf",!e.nzReverseArrow),r.Cb(1),r.lc("ngIf",e.nzReverseArrow)}}function N(e,t){1&e&&r.Pb(0,"i",6)}let $=(()=>{class e{constructor(e,t){this.elementRef=e,this.renderer=t,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-content")}}return e.\u0275fac=function(t){return new(t||e)(r.Ob(r.l),r.Ob(r.F))},e.\u0275cmp=r.Ib({type:e,selectors:[["nz-content"]],exportAs:["nzContent"],ngContentSelectors:g,decls:1,vars:0,template:function(e,t){1&e&&(r.kc(),r.jc(0))},encapsulation:2,changeDetection:0}),e})(),w=(()=>{class e{constructor(e,t){this.elementRef=e,this.renderer=t,this.renderer.addClass(this.elementRef.nativeElement,"ant-layout-header")}}return e.\u0275fac=function(t){return new(t||e)(r.Ob(r.l),r.Ob(r.F))},e.\u0275cmp=r.Ib({type:e,selectors:[["nz-header"]],exportAs:["nzHeader"],ngContentSelectors:g,decls:1,vars:0,template:function(e,t){1&e&&(r.kc(),r.jc(0))},encapsulation:2,changeDetection:0}),e})(),D=(()=>{class e{constructor(e,t,n,i){this.platform=e,this.cdr=t,this.breakpointService=n,this.elementRef=i,this.destroy$=new c.a,this.nzMenuDirective=null,this.nzCollapsedChange=new r.n,this.nzWidth=200,this.nzTheme="dark",this.nzCollapsedWidth=80,this.nzBreakpoint=null,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.nzReverseArrow=!1,this.nzCollapsible=!1,this.nzCollapsed=!1,this.matchBreakPoint=!1,this.flexSetting=null,this.widthSetting=null,this.elementRef.nativeElement.classList.add("ant-layout-sider")}updateStyleMap(){this.widthSetting=this.nzCollapsed?`${this.nzCollapsedWidth}px`:Object(h.t)(this.nzWidth),this.flexSetting=`0 0 ${this.widthSetting}`,this.cdr.markForCheck()}updateMenuInlineCollapsed(){this.nzMenuDirective&&"inline"===this.nzMenuDirective.nzMode&&0!==this.nzCollapsedWidth&&this.nzMenuDirective.setInlineCollapsed(this.nzCollapsed)}setCollapsed(e){e!==this.nzCollapsed&&(this.nzCollapsed=e,this.nzCollapsedChange.emit(e),this.updateMenuInlineCollapsed(),this.updateStyleMap(),this.cdr.markForCheck())}ngOnInit(){this.updateStyleMap(),this.platform.isBrowser&&this.breakpointService.subscribe(p.e,!0).pipe(Object(l.a)(this.destroy$)).subscribe(e=>{const t=this.nzBreakpoint;t&&Object(h.g)().subscribe(()=>{this.matchBreakPoint=!e[t],this.setCollapsed(this.matchBreakPoint),this.cdr.markForCheck()})})}ngOnChanges(e){const{nzCollapsed:t,nzCollapsedWidth:n,nzWidth:i}=e;(t||n||i)&&this.updateStyleMap(),t&&this.updateMenuInlineCollapsed()}ngAfterContentInit(){this.updateMenuInlineCollapsed()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return e.\u0275fac=function(t){return new(t||e)(r.Ob(d.a),r.Ob(r.h),r.Ob(p.b),r.Ob(r.l))},e.\u0275cmp=r.Ib({type:e,selectors:[["nz-sider"]],contentQueries:function(e,t,n){if(1&e&&r.Hb(n,b.c,1),2&e){let e;r.tc(e=r.cc())&&(t.nzMenuDirective=e.first)}},hostVars:16,hostBindings:function(e,t){2&e&&(r.Bc("flex",t.flexSetting)("max-width",t.widthSetting)("min-width",t.widthSetting)("width",t.widthSetting),r.Gb("ant-layout-sider-zero-width",t.nzCollapsed&&0===t.nzCollapsedWidth)("ant-layout-sider-light","light"===t.nzTheme)("ant-layout-sider-dark","dark"===t.nzTheme)("ant-layout-sider-collapsed",t.nzCollapsed))},inputs:{nzWidth:"nzWidth",nzTheme:"nzTheme",nzCollapsedWidth:"nzCollapsedWidth",nzBreakpoint:"nzBreakpoint",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",nzReverseArrow:"nzReverseArrow",nzCollapsible:"nzCollapsible",nzCollapsed:"nzCollapsed"},outputs:{nzCollapsedChange:"nzCollapsedChange"},exportAs:["nzSider"],features:[r.Ab],ngContentSelectors:g,decls:3,vars:1,consts:[[1,"ant-layout-sider-children"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth","click",4,"ngIf"],["nz-sider-trigger","",3,"matchBreakPoint","nzCollapsedWidth","nzCollapsed","nzBreakpoint","nzReverseArrow","nzTrigger","nzZeroTrigger","siderWidth","click"]],template:function(e,t){1&e&&(r.kc(),r.Ub(0,"div",0),r.jc(1),r.Tb(),r.Ec(2,v,1,8,"div",1)),2&e&&(r.Cb(2),r.lc("ngIf",t.nzCollapsible&&null!==t.nzTrigger))},directives:function(){return[i.q,x]},encapsulation:2,changeDetection:0}),Object(u.b)([Object(h.a)(),Object(u.c)("design:type",Object)],e.prototype,"nzReverseArrow",void 0),Object(u.b)([Object(h.a)(),Object(u.c)("design:type",Object)],e.prototype,"nzCollapsible",void 0),Object(u.b)([Object(h.a)(),Object(u.c)("design:type",Object)],e.prototype,"nzCollapsed",void 0),e})(),A=(()=>{class e{constructor(e,t){this.elementRef=e,this.directionality=t,this.dir="ltr",this.destroy$=new c.a,this.elementRef.nativeElement.classList.add("ant-layout")}ngOnInit(){var e;this.dir=this.directionality.value,null===(e=this.directionality.change)||void 0===e||e.pipe(Object(l.a)(this.destroy$)).subscribe(e=>{this.dir=e})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return e.\u0275fac=function(t){return new(t||e)(r.Ob(r.l),r.Ob(a.b,8))},e.\u0275cmp=r.Ib({type:e,selectors:[["nz-layout"]],contentQueries:function(e,t,n){if(1&e&&r.Hb(n,D,0),2&e){let e;r.tc(e=r.cc())&&(t.listOfNzSiderComponent=e)}},hostVars:4,hostBindings:function(e,t){2&e&&r.Gb("ant-layout-rtl","rtl"===t.dir)("ant-layout-has-sider",t.listOfNzSiderComponent.length>0)},exportAs:["nzLayout"],ngContentSelectors:g,decls:1,vars:0,template:function(e,t){1&e&&(r.kc(),r.jc(0))},encapsulation:2,changeDetection:0}),e})(),x=(()=>{class e{constructor(){this.nzCollapsed=!1,this.nzReverseArrow=!1,this.nzZeroTrigger=null,this.nzTrigger=void 0,this.matchBreakPoint=!1,this.nzCollapsedWidth=null,this.siderWidth=null,this.nzBreakpoint=null,this.isZeroTrigger=!1,this.isNormalTrigger=!1}updateTriggerType(){this.isZeroTrigger=0===this.nzCollapsedWidth&&(this.nzBreakpoint&&this.matchBreakPoint||!this.nzBreakpoint),this.isNormalTrigger=0!==this.nzCollapsedWidth}ngOnInit(){this.updateTriggerType()}ngOnChanges(){this.updateTriggerType()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Ib({type:e,selectors:[["","nz-sider-trigger",""]],hostVars:10,hostBindings:function(e,t){2&e&&(r.Bc("width",t.isNormalTrigger?t.siderWidth:null),r.Gb("ant-layout-sider-trigger",t.isNormalTrigger)("ant-layout-sider-zero-width-trigger",t.isZeroTrigger)("ant-layout-sider-zero-width-trigger-right",t.isZeroTrigger&&t.nzReverseArrow)("ant-layout-sider-zero-width-trigger-left",t.isZeroTrigger&&!t.nzReverseArrow))},inputs:{nzCollapsed:"nzCollapsed",nzReverseArrow:"nzReverseArrow",nzZeroTrigger:"nzZeroTrigger",nzTrigger:"nzTrigger",matchBreakPoint:"matchBreakPoint",nzCollapsedWidth:"nzCollapsedWidth",siderWidth:"siderWidth",nzBreakpoint:"nzBreakpoint"},exportAs:["nzSiderTrigger"],features:[r.Ab],attrs:z,decls:6,vars:2,consts:[[4,"ngIf"],["defaultTrigger",""],["defaultZeroTrigger",""],[3,"ngTemplateOutlet"],["nz-icon","",3,"nzType",4,"ngIf"],["nz-icon","",3,"nzType"],["nz-icon","","nzType","bars"]],template:function(e,t){1&e&&(r.Ec(0,I,2,1,"ng-container",0),r.Ec(1,O,2,1,"ng-container",0),r.Ec(2,E,2,2,"ng-template",null,1,r.Fc),r.Ec(4,N,1,0,"ng-template",null,2,r.Fc)),2&e&&(r.lc("ngIf",t.isZeroTrigger),r.Cb(1),r.lc("ngIf",t.isNormalTrigger))},directives:[i.q,i.x,f.b],encapsulation:2,changeDetection:0}),e})(),R=(()=>{class e{}return e.\u0275mod=r.Mb({type:e}),e.\u0275inj=r.Lb({factory:function(t){return new(t||e)},imports:[[a.a,i.c,f.c,m.a,d.b]]}),e})();var k=n("nJia"),M=n("B+r4"),P=n("l/kO"),j=n("wO+i"),L=n("PTRe"),U=n("3Pt+"),F=n("rDax"),_=n("YF2q"),V=n("pdGh"),B=n("FtGj"),G=n("+rOU"),K=n("quSY"),q=n("NXyV"),Y=n("VRyK"),H=n("IzEk"),W=n("eIep"),X=n("pLZG"),Q=n("vkgz"),J=n("3E0/"),Z=n("GR68");function ee(e,t){if(1&e&&(r.Sb(0),r.Gc(1),r.Rb()),2&e){const e=r.ec();r.Cb(1),r.Hc(e.nzLabel)}}const te=[[["nz-auto-option"]]],ne=["nz-auto-option"],ie=["*"],oe=["panel"],re=["content"];function se(e,t){}function ae(e,t){1&e&&r.Ec(0,se,0,0,"ng-template")}function ce(e,t){1&e&&r.jc(0)}function le(e,t){if(1&e&&(r.Ub(0,"nz-auto-option",8),r.Gc(1),r.Tb()),2&e){const e=t.$implicit;r.lc("nzValue",e)("nzLabel",e&&e.label?e.label:e),r.Cb(1),r.Ic(" ",e&&e.label?e.label:e," ")}}function ue(e,t){if(1&e&&r.Ec(0,le,2,3,"nz-auto-option",7),2&e){const e=r.ec(2);r.lc("ngForOf",e.nzDataSource)}}function de(e,t){if(1&e&&(r.Ub(0,"div",0,1),r.Ub(2,"div",2),r.Ub(3,"div",3),r.Ec(4,ae,1,0,void 0,4),r.Tb(),r.Tb(),r.Tb(),r.Ec(5,ce,1,0,"ng-template",null,5,r.Fc),r.Ec(7,ue,1,1,"ng-template",null,6,r.Fc)),2&e){const e=r.uc(6),t=r.uc(8),n=r.ec();r.Gb("ant-select-dropdown-hidden",!n.showPanel)("ant-select-dropdown-rtl","rtl"===n.dir),r.lc("ngClass",n.nzOverlayClassName)("ngStyle",n.nzOverlayStyle)("nzNoAnimation",null==n.noAnimation?null:n.noAnimation.nzNoAnimation)("@slideMotion","enter")("@.disabled",null==n.noAnimation?null:n.noAnimation.nzNoAnimation),r.Cb(4),r.lc("ngTemplateOutlet",n.nzDataSource?t:e)}}let pe=(()=>{class e{constructor(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Ib({type:e,selectors:[["nz-auto-optgroup"]],inputs:{nzLabel:"nzLabel"},exportAs:["nzAutoOptgroup"],ngContentSelectors:ne,decls:3,vars:1,consts:[[1,"ant-select-item","ant-select-item-group"],[4,"nzStringTemplateOutlet"]],template:function(e,t){1&e&&(r.kc(te),r.Ub(0,"div",0),r.Ec(1,ee,2,1,"ng-container",1),r.Tb(),r.jc(2)),2&e&&(r.Cb(1),r.lc("nzStringTemplateOutlet",t.nzLabel))},directives:[V.b],encapsulation:2,changeDetection:0}),e})();class he{constructor(e,t=!1){this.source=e,this.isUserInput=t}}let be=(()=>{class e{constructor(e,t,n){this.changeDetectorRef=e,this.element=t,this.nzAutocompleteOptgroupComponent=n,this.nzDisabled=!1,this.selectionChange=new r.n,this.mouseEntered=new r.n,this.active=!1,this.selected=!1}select(e=!0){this.selected=!0,this.changeDetectorRef.markForCheck(),e&&this.emitSelectionChangeEvent()}onMouseEnter(){this.mouseEntered.emit(this)}deselect(){this.selected=!1,this.changeDetectorRef.markForCheck(),this.emitSelectionChangeEvent()}getLabel(){return this.nzLabel||this.nzValue.toString()}setActiveStyles(){this.active||(this.active=!0,this.changeDetectorRef.markForCheck())}setInactiveStyles(){this.active&&(this.active=!1,this.changeDetectorRef.markForCheck())}scrollIntoViewIfNeeded(){Object(h.q)(this.element.nativeElement)}selectViaInteraction(){this.nzDisabled||(this.selected=!this.selected,this.selected?this.setActiveStyles():this.setInactiveStyles(),this.emitSelectionChangeEvent(!0),this.changeDetectorRef.markForCheck())}emitSelectionChangeEvent(e=!1){this.selectionChange.emit(new he(this,e))}}return e.\u0275fac=function(t){return new(t||e)(r.Ob(r.h),r.Ob(r.l),r.Ob(pe,8))},e.\u0275cmp=r.Ib({type:e,selectors:[["nz-auto-option"]],hostAttrs:["role","menuitem",1,"ant-select-item","ant-select-item-option"],hostVars:10,hostBindings:function(e,t){1&e&&r.bc("click",function(){return t.selectViaInteraction()})("mouseenter",function(){return t.onMouseEnter()})("mousedown",function(e){return e.preventDefault()}),2&e&&(r.Db("aria-selected",t.selected.toString())("aria-disabled",t.nzDisabled.toString()),r.Gb("ant-select-item-option-grouped",t.nzAutocompleteOptgroupComponent)("ant-select-item-option-selected",t.selected)("ant-select-item-option-active",t.active)("ant-select-item-option-disabled",t.nzDisabled))},inputs:{nzDisabled:"nzDisabled",nzValue:"nzValue",nzLabel:"nzLabel"},outputs:{selectionChange:"selectionChange",mouseEntered:"mouseEntered"},exportAs:["nzAutoOption"],ngContentSelectors:ie,decls:2,vars:0,consts:[[1,"ant-select-item-option-content"]],template:function(e,t){1&e&&(r.kc(),r.Ub(0,"div",0),r.jc(1),r.Tb())},encapsulation:2,changeDetection:0}),Object(u.b)([Object(h.a)(),Object(u.c)("design:type",Object)],e.prototype,"nzDisabled",void 0),e})(),me=(()=>{class e{constructor(e,t,n,i){this.changeDetectorRef=e,this.ngZone=t,this.directionality=n,this.noAnimation=i,this.nzOverlayClassName="",this.nzOverlayStyle={},this.nzDefaultActiveFirstOption=!0,this.nzBackfill=!1,this.compareWith=(e,t)=>e===t,this.selectionChange=new r.n,this.showPanel=!0,this.isOpen=!1,this.dir="ltr",this.destroy$=new c.a,this.activeItemIndex=-1,this.selectionChangeSubscription=K.a.EMPTY,this.optionMouseEnterSubscription=K.a.EMPTY,this.dataSourceChangeSubscription=K.a.EMPTY,this.optionSelectionChanges=Object(q.a)(()=>this.options?Object(Y.a)(...this.options.map(e=>e.selectionChange)):this.ngZone.onStable.asObservable().pipe(Object(H.a)(1),Object(W.a)(()=>this.optionSelectionChanges))),this.optionMouseEnter=Object(q.a)(()=>this.options?Object(Y.a)(...this.options.map(e=>e.mouseEntered)):this.ngZone.onStable.asObservable().pipe(Object(H.a)(1),Object(W.a)(()=>this.optionMouseEnter)))}get options(){return this.nzDataSource?this.fromDataSourceOptions:this.fromContentOptions}ngOnInit(){var e;null===(e=this.directionality.change)||void 0===e||e.pipe(Object(l.a)(this.destroy$)).subscribe(e=>{this.dir=e,this.changeDetectorRef.detectChanges()}),this.dir=this.directionality.value}ngAfterContentInit(){this.nzDataSource||this.optionsInit()}ngAfterViewInit(){this.nzDataSource&&this.optionsInit()}ngOnDestroy(){this.dataSourceChangeSubscription.unsubscribe(),this.selectionChangeSubscription.unsubscribe(),this.optionMouseEnterSubscription.unsubscribe(),this.destroy$.next(),this.destroy$.complete()}setVisibility(){this.showPanel=!!this.options.length,this.changeDetectorRef.markForCheck()}setActiveItem(e){const t=this.options.toArray()[e];t&&!t.active&&(this.activeItem=t,this.activeItemIndex=e,this.clearSelectedOptions(this.activeItem),this.activeItem.setActiveStyles(),this.changeDetectorRef.markForCheck())}setNextItemActive(){this.setActiveItem(this.activeItemIndex+1<=this.options.length-1?this.activeItemIndex+1:0)}setPreviousItemActive(){this.setActiveItem(this.activeItemIndex-1<0?this.options.length-1:this.activeItemIndex-1)}getOptionIndex(e){return this.options.reduce((t,n,i)=>-1===t?this.compareWith(e,n.nzValue)?i:-1:t,-1)}getOption(e){return this.options.find(t=>this.compareWith(e,t.nzValue))||null}optionsInit(){this.setVisibility(),this.subscribeOptionChanges(),this.dataSourceChangeSubscription=(this.nzDataSource?this.fromDataSourceOptions.changes:this.fromContentOptions.changes).subscribe(e=>{!e.dirty&&this.isOpen&&setTimeout(()=>this.setVisibility()),this.subscribeOptionChanges()})}clearSelectedOptions(e,t=!1){this.options.forEach(n=>{n!==e&&(t&&n.deselect(),n.setInactiveStyles())})}subscribeOptionChanges(){this.selectionChangeSubscription.unsubscribe(),this.selectionChangeSubscription=this.optionSelectionChanges.pipe(Object(X.a)(e=>e.isUserInput)).subscribe(e=>{e.source.select(),e.source.setActiveStyles(),this.activeItem=e.source,this.activeItemIndex=this.getOptionIndex(this.activeItem.nzValue),this.clearSelectedOptions(e.source,!0),this.selectionChange.emit(e.source)}),this.optionMouseEnterSubscription.unsubscribe(),this.optionMouseEnterSubscription=this.optionMouseEnter.subscribe(e=>{e.setActiveStyles(),this.activeItem=e,this.activeItemIndex=this.getOptionIndex(this.activeItem.nzValue),this.clearSelectedOptions(e)})}}return e.\u0275fac=function(t){return new(t||e)(r.Ob(r.h),r.Ob(r.A),r.Ob(a.b,8),r.Ob(_.a,9))},e.\u0275cmp=r.Ib({type:e,selectors:[["nz-autocomplete"]],contentQueries:function(e,t,n){if(1&e&&r.Hb(n,be,1),2&e){let e;r.tc(e=r.cc())&&(t.fromContentOptions=e)}},viewQuery:function(e,t){if(1&e&&(r.Lc(r.M,1),r.Lc(oe,1),r.Lc(re,1),r.Lc(be,1)),2&e){let e;r.tc(e=r.cc())&&(t.template=e.first),r.tc(e=r.cc())&&(t.panel=e.first),r.tc(e=r.cc())&&(t.content=e.first),r.tc(e=r.cc())&&(t.fromDataSourceOptions=e)}},inputs:{nzOverlayClassName:"nzOverlayClassName",nzOverlayStyle:"nzOverlayStyle",nzDefaultActiveFirstOption:"nzDefaultActiveFirstOption",nzBackfill:"nzBackfill",compareWith:"compareWith",nzWidth:"nzWidth",nzDataSource:"nzDataSource"},outputs:{selectionChange:"selectionChange"},exportAs:["nzAutocomplete"],ngContentSelectors:ie,decls:1,vars:0,consts:[[1,"ant-select-dropdown","ant-select-dropdown-placement-bottomLeft",3,"ngClass","ngStyle","nzNoAnimation"],["panel",""],[2,"max-height","256px","overflow-y","auto","overflow-anchor","none"],[2,"display","flex","flex-direction","column"],[4,"ngTemplateOutlet"],["contentTemplate",""],["optionsTemplate",""],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],[3,"nzValue","nzLabel"]],template:function(e,t){1&e&&(r.kc(),r.Ec(0,de,9,10,"ng-template"))},directives:[i.o,i.t,_.a,i.x,i.p,be],encapsulation:2,data:{animation:[Z.e]},changeDetection:0}),Object(u.b)([Object(h.a)(),Object(u.c)("design:type",Object)],e.prototype,"nzDefaultActiveFirstOption",void 0),Object(u.b)([Object(h.a)(),Object(u.c)("design:type",Object)],e.prototype,"nzBackfill",void 0),e})();const fe={provide:U.m,useExisting:Object(r.V)(()=>ge),multi:!0};let ge=(()=>{class e{constructor(e,t,n,i,o){this.elementRef=e,this.overlay=t,this.viewContainerRef=n,this.nzInputGroupWhitSuffixOrPrefixDirective=i,this.document=o,this.onChange=()=>{},this.onTouched=()=>{},this.panelOpen=!1,this.destroy$=new c.a,this.overlayRef=null,this.portal=null,this.previousValue=null}get activeOption(){if(this.nzAutocomplete&&this.nzAutocomplete.options.length)return this.nzAutocomplete.activeItem}ngOnDestroy(){this.destroyPanel()}writeValue(e){Promise.resolve(null).then(()=>this.setTriggerValue(e))}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.elementRef.nativeElement.disabled=e,this.closePanel()}openPanel(){this.previousValue=this.elementRef.nativeElement.value,this.attachOverlay(),this.updateStatus()}closePanel(){this.panelOpen&&(this.nzAutocomplete.isOpen=this.panelOpen=!1,this.overlayRef&&this.overlayRef.hasAttached()&&(this.selectionChangeSubscription.unsubscribe(),this.overlayOutsideClickSubscription.unsubscribe(),this.optionsChangeSubscription.unsubscribe(),this.overlayRef.dispose(),this.overlayRef=null,this.portal=null))}handleKeydown(e){const t=e.keyCode,n=t===B.m||t===B.c;t===B.f&&e.preventDefault(),!this.panelOpen||t!==B.f&&t!==B.l?this.panelOpen&&t===B.e?this.nzAutocomplete.showPanel&&this.activeOption&&(e.preventDefault(),this.activeOption.selectViaInteraction()):this.panelOpen&&n&&this.nzAutocomplete.showPanel&&(e.stopPropagation(),e.preventDefault(),t===B.m?this.nzAutocomplete.setPreviousItemActive():this.nzAutocomplete.setNextItemActive(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded(),this.doBackfill()):(this.activeOption&&this.activeOption.getLabel()!==this.previousValue&&this.setTriggerValue(this.previousValue),this.closePanel())}handleInput(e){const t=e.target,n=this.document;let i=t.value;"number"===t.type&&(i=""===i?null:parseFloat(i)),this.previousValue!==i&&(this.previousValue=i,this.onChange(i),this.canOpen()&&n.activeElement===e.target&&this.openPanel())}handleFocus(){this.canOpen()&&this.openPanel()}handleBlur(){this.onTouched()}subscribeOptionsChange(){return this.nzAutocomplete.options.changes.pipe(Object(Q.a)(()=>this.positionStrategy.reapplyLastPosition()),Object(J.a)(0)).subscribe(()=>{this.resetActiveItem(),this.panelOpen&&this.overlayRef.updatePosition()})}subscribeSelectionChange(){return this.nzAutocomplete.selectionChange.subscribe(e=>{this.setValueAndClose(e)})}subscribeOverlayOutsideClick(){return this.overlayRef.outsidePointerEvents().pipe(Object(X.a)(e=>!this.elementRef.nativeElement.contains(e.target))).subscribe(()=>{this.closePanel()})}attachOverlay(){if(!this.nzAutocomplete)throw Error("Attempting to open an undefined instance of `nz-autocomplete`. Make sure that the id passed to the `nzAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.");!this.portal&&this.nzAutocomplete.template&&(this.portal=new G.f(this.nzAutocomplete.template,this.viewContainerRef)),this.overlayRef||(this.overlayRef=this.overlay.create(this.getOverlayConfig())),this.overlayRef&&!this.overlayRef.hasAttached()&&(this.overlayRef.attach(this.portal),this.selectionChangeSubscription=this.subscribeSelectionChange(),this.optionsChangeSubscription=this.subscribeOptionsChange(),this.overlayOutsideClickSubscription=this.subscribeOverlayOutsideClick(),this.overlayRef.detachments().pipe(Object(l.a)(this.destroy$)).subscribe(()=>{this.closePanel()})),this.nzAutocomplete.isOpen=this.panelOpen=!0}updateStatus(){this.overlayRef&&this.overlayRef.updateSize({width:this.nzAutocomplete.nzWidth||this.getHostWidth()}),this.nzAutocomplete.setVisibility(),this.resetActiveItem(),this.activeOption&&this.activeOption.scrollIntoViewIfNeeded()}destroyPanel(){this.overlayRef&&this.closePanel()}getOverlayConfig(){return new F.e({positionStrategy:this.getOverlayPosition(),disposeOnNavigation:!0,scrollStrategy:this.overlay.scrollStrategies.reposition(),width:this.nzAutocomplete.nzWidth||this.getHostWidth()})}getConnectedElement(){return this.nzInputGroupWhitSuffixOrPrefixDirective?this.nzInputGroupWhitSuffixOrPrefixDirective.elementRef:this.elementRef}getHostWidth(){return this.getConnectedElement().nativeElement.getBoundingClientRect().width}getOverlayPosition(){const e=[new F.c({originX:"start",originY:"bottom"},{overlayX:"start",overlayY:"top"}),new F.c({originX:"start",originY:"top"},{overlayX:"start",overlayY:"bottom"})];return this.positionStrategy=this.overlay.position().flexibleConnectedTo(this.getConnectedElement()).withFlexibleDimensions(!1).withPush(!1).withPositions(e).withTransformOriginOn(".ant-select-dropdown"),this.positionStrategy}resetActiveItem(){const e=this.nzAutocomplete.getOptionIndex(this.previousValue);this.nzAutocomplete.clearSelectedOptions(null,!0),-1!==e?(this.nzAutocomplete.setActiveItem(e),this.nzAutocomplete.activeItem.select(!1)):this.nzAutocomplete.setActiveItem(this.nzAutocomplete.nzDefaultActiveFirstOption?0:-1)}setValueAndClose(e){const t=e.nzValue;this.setTriggerValue(e.getLabel()),this.onChange(t),this.elementRef.nativeElement.focus(),this.closePanel()}setTriggerValue(e){const t=this.nzAutocomplete.getOption(e),n=t?t.getLabel():e;this.elementRef.nativeElement.value=null!=n?n:"",this.nzAutocomplete.nzBackfill||(this.previousValue=n)}doBackfill(){this.nzAutocomplete.nzBackfill&&this.nzAutocomplete.activeItem&&this.setTriggerValue(this.nzAutocomplete.activeItem.getLabel())}canOpen(){const e=this.elementRef.nativeElement;return!e.readOnly&&!e.disabled}}return e.\u0275fac=function(t){return new(t||e)(r.Ob(r.l),r.Ob(F.d),r.Ob(r.Q),r.Ob(L.d,8),r.Ob(i.d,8))},e.\u0275dir=r.Jb({type:e,selectors:[["input","nzAutocomplete",""],["textarea","nzAutocomplete",""]],hostAttrs:["autocomplete","off","aria-autocomplete","list"],hostBindings:function(e,t){1&e&&r.bc("focusin",function(){return t.handleFocus()})("blur",function(){return t.handleBlur()})("input",function(e){return t.handleInput(e)})("keydown",function(e){return t.handleKeydown(e)})},inputs:{nzAutocomplete:"nzAutocomplete"},exportAs:["nzAutocompleteTrigger"],features:[r.Bb([fe])]}),e})(),ve=(()=>{class e{}return e.\u0275mod=r.Mb({type:e}),e.\u0275inj=r.Lb({factory:function(t){return new(t||e)},imports:[[a.a,i.c,F.f,U.k,V.a,_.b,L.e]]}),e})();var ze=n("9A8T");function ye(e,t){1&e&&r.Pb(0,"i",5)}function Ie(e,t){if(1&e){const e=r.Vb();r.Sb(0),r.Ub(1,"a",6),r.Ub(2,"nz-auto-option",7),r.bc("click",function(){r.vc(e);const t=r.ec();return t.searchQuery="",t.refresh()}),r.Ub(3,"span"),r.Pb(4,"i",8),r.Pb(5,"span",9),r.Pb(6,"br"),r.Pb(7,"span",9),r.Tb(),r.Tb(),r.Tb(),r.Rb()}if(2&e){const e=t.$implicit,n=r.ec();r.Cb(1),r.lc("routerLink",n.urlForResult(e)),r.Cb(1),r.lc("nzValue",n.urlForResult(e)),r.Cb(2),r.lc("nzType",n.iconNameForResult(e)),r.Cb(1),r.mc("innerHTML",e.name,r.wc),r.Cb(2),r.mc("innerHTML",e.matchingText,r.wc)}}let Ce=(()=>{class e{constructor(e,t){this.gql=e,this.router=t,this.searchQuery=""}ngOnInit(){this.queryRef=this.gql.watch({query:this.searchQuery}),this.searchResults$=this.queryRef.valueChanges.pipe(Object(j.a)("data","search"))}refresh(){this.queryRef.refetch({query:this.searchQuery})}iconNameForResult(e){switch(e.resultType){case P.Hb.EvidenceItem:return"civic:evidence";case P.Hb.VariantGroup:return"civic:variantgroup";default:return`civic:${e.resultType.toLowerCase()}`}}urlForResult(e){let t;switch(e.resultType){case P.Hb.VariantGroup:t="variant-groups";break;case P.Hb.EvidenceItem:t="evidence";break;default:t=`${e.resultType.toLowerCase()}s`}return`/${t}/${e.id}/summary`}quicksearchSelected(e){let t=e.target.value;this.searchQuery="",this.router.navigate([t])}}return e.\u0275fac=function(t){return new(t||e)(r.Ob(P.Ab),r.Ob(o.d))},e.\u0275cmp=r.Ib({type:e,selectors:[["cvc-quicksearch"]],decls:8,vars:6,consts:[["nzSize","large",3,"nzSuffix"],["placeholder","Quicksearch","nz-input","",3,"ngModel","nzAutocomplete","ngModelChange","keyup.enter"],["suffixIcon",""],["auto",""],[4,"ngFor","ngForOf"],["nz-icon","","nzType","search"],[3,"routerLink"],[3,"nzValue","click"],["nz-icon","",3,"nzType"],[3,"innerHTML"]],template:function(e,t){if(1&e&&(r.Ub(0,"nz-input-group",0),r.Ub(1,"input",1),r.bc("ngModelChange",function(e){return t.searchQuery=e})("ngModelChange",function(){return t.refresh()})("keyup.enter",function(e){return t.quicksearchSelected(e)}),r.Tb(),r.Tb(),r.Ec(2,ye,1,0,"ng-template",null,2,r.Fc),r.Ub(4,"nz-autocomplete",null,3),r.Ec(6,Ie,8,5,"ng-container",4),r.fc(7,"ngrxPush"),r.Tb()),2&e){const e=r.uc(3),n=r.uc(5);r.lc("nzSuffix",e),r.Cb(1),r.lc("ngModel",t.searchQuery)("nzAutocomplete",n),r.Cb(5),r.lc("ngForOf",r.gc(7,4,t.searchResults$))}},directives:[L.c,L.d,L.b,U.d,ge,U.o,U.r,me,i.p,f.b,o.g,be],pipes:[ze.b],styles:[""]}),e})();var Oe=n("OzZK"),Se=n("RwU8"),Te=n("C2AL"),Ee=n("dEAy"),Ne=n("b6Qw"),$e=n("Ff2k");let we=(()=>{class e{constructor(e){var t;this.cookies=e,this.location=(t=window.location.href,encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")),this.xsrfToken=this.cookies.get("XSRF-TOKEN")}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(r.Ob(Ne.a))},e.\u0275cmp=r.Ib({type:e,selectors:[["cvc-auth-options-list"]],decls:18,vars:6,consts:[["nzBordered","false","nzSplit","false"],["method","post",3,"action"],["type","hidden","name","authenticity_token",3,"value"],["type","submit","nz-button","","nzBlock","","nzType","default","nzSize","large","nzShape","round"],["nz-icon","","nzType","google"],["nz-icon","","nzType","github"]],template:function(e,t){1&e&&(r.Ub(0,"nz-list",0),r.Ub(1,"nz-list-item"),r.Ub(2,"form",1),r.Pb(3,"input",2),r.Ub(4,"button",3),r.Pb(5,"i",4),r.Gc(6," Sign In with a Google Account "),r.Tb(),r.Tb(),r.Tb(),r.Ub(7,"nz-list-item"),r.Ub(8,"form",1),r.Pb(9,"input",2),r.Ub(10,"button",3),r.Gc(11," Sign In with an ORCID Account "),r.Tb(),r.Tb(),r.Tb(),r.Ub(12,"nz-list-item"),r.Ub(13,"form",1),r.Pb(14,"input",2),r.Ub(15,"button",3),r.Pb(16,"i",5),r.Gc(17," Sign In with a Github Account "),r.Tb(),r.Tb(),r.Tb(),r.Tb()),2&e&&(r.Cb(2),r.nc("action","/api/auth/google_oauth2?origin=",t.location,"",r.xc),r.Cb(1),r.mc("value",t.xsrfToken),r.Cb(5),r.nc("action","/api/auth/orcid?origin=",t.location,"",r.xc),r.Cb(1),r.mc("value",t.xsrfToken),r.Cb(4),r.nc("action","/api/auth/github?origin=",t.location,"",r.xc),r.Cb(1),r.mc("value",t.xsrfToken))},directives:[$e.a,$e.d,Oe.a,Se.a,Te.a,f.b],styles:["[_nghost-%COMP%]{display:block}nz-list-item[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{width:100%}"]}),e})();function De(e,t){1&e&&(r.Sb(0),r.Ub(1,"p",5),r.Gc(2,"Click on one of the OAuth providers below to sign into CIViC. If you do not not have a CIViC account, one will be created for you based upon the account information your OAuth provider provides."),r.Tb(),r.Pb(3,"cvc-auth-options-list"),r.Rb())}function Ae(e,t){1&e&&r.Gc(0," Sign In\n")}function xe(e,t){if(1&e){const e=r.Vb();r.Ub(0,"button",0),r.bc("click",function(){return r.vc(e),r.ec().handleCancel()}),r.Gc(1,"Cancel"),r.Tb()}}let Re=(()=>{class e{constructor(){this.authVisible=!1}ngOnInit(){}showAuth(){this.authVisible=!0}handleCancel(){this.authVisible=!1}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Ib({type:e,selectors:[["cvc-login-button"]],decls:9,vars:3,consts:[["nz-button","","nzType","primary","nzValue","small",3,"click"],[3,"nzVisible","nzTitle","nzFooter","nzVisibleChange","nzOnCancel"],[4,"nzModalContent"],["loginModalTitle",""],["loginModalFooter",""],["nzType","secondary"]],template:function(e,t){if(1&e&&(r.Ub(0,"button",0),r.bc("click",function(){return t.showAuth()}),r.Ub(1,"span"),r.Gc(2,"Sign In"),r.Tb(),r.Tb(),r.Ub(3,"nz-modal",1),r.bc("nzVisibleChange",function(e){return t.authVisible=e})("nzOnCancel",function(){return t.handleCancel()}),r.Ec(4,De,4,0,"ng-container",2),r.Tb(),r.Ec(5,Ae,1,0,"ng-template",null,3,r.Fc),r.Ec(7,xe,2,0,"ng-template",null,4,r.Fc)),2&e){const e=r.uc(6),n=r.uc(8);r.Cb(3),r.lc("nzVisible",t.authVisible)("nzTitle",e)("nzFooter",n)}},directives:[Oe.a,Se.a,Te.a,Ee.a,Ee.b,we],styles:["[_nghost-%COMP%]{display:inline-block}"]}),e})();var ke=n("lJxs"),Me=n("JX91"),Pe=n("4xsP"),je=n("Nqz0"),Le=n("j8OM"),Ue=n("SKKP"),Fe=n("aTAi");function _e(e,t){if(1&e&&(r.Sb(0),r.Ub(1,"div",22),r.Pb(2,"i",23),r.Pb(3,"nz-badge",24),r.Tb(),r.Rb()),2&e){const e=t.ngrxLet;r.Cb(1),r.nc("nzTooltipTitle","You have ",e," unread notification(s)."),r.Cb(2),r.lc("nzShowDot",e>0)}}function Ve(e,t){1&e&&r.Pb(0,"nz-badge",25),2&e&&r.lc("nzShowDot",!0)}function Be(e,t){if(1&e){const e=r.Vb();r.Ub(0,"li",21),r.bc("click",function(){return r.vc(e),r.ec(2).coiUpdateModalVisible=!0}),r.Ub(1,"nz-badge",26),r.Ub(2,"strong"),r.Gc(3," Please provide an updated conflict of interest statement. "),r.Tb(),r.Tb(),r.Tb()}2&e&&(r.Cb(1),r.lc("nzShowDot",!0))}function Ge(e,t){1&e&&(r.Ub(0,"li",12),r.Ub(1,"a",27),r.Gc(2," Admin Console "),r.Tb(),r.Tb())}function Ke(e,t){if(1&e){const e=r.Vb();r.Sb(0),r.Ub(1,"nz-space",4),r.Ub(2,"nz-space-item",5),r.Ec(3,_e,4,2,"ng-container",6),r.Tb(),r.Ub(4,"nz-space-item"),r.Ub(5,"div",7),r.Pb(6,"i",8),r.Pb(7,"i",9),r.Ub(8,"nz-dropdown-menu",null,10),r.Ub(10,"ul",11),r.Ub(11,"li",12),r.Ub(12,"a",13),r.Gc(13," Add Evidence "),r.Tb(),r.Tb(),r.Ub(14,"li",12),r.Ub(15,"a",14),r.Gc(16," Add Assertion "),r.Tb(),r.Tb(),r.Ub(17,"li",12),r.Ub(18,"a",14),r.Gc(19," Suggest Source "),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Ub(20,"nz-space-item"),r.Ub(21,"div",7),r.Pb(22,"cvc-user-avatar",15),r.Pb(23,"i",9),r.Ec(24,Ve,1,1,"nz-badge",16),r.Ub(25,"nz-dropdown-menu",null,17),r.Ub(27,"ul",11),r.Ub(28,"li",12),r.Gc(29,"Signed In as "),r.Ub(30,"strong"),r.Gc(31),r.Tb(),r.Tb(),r.Pb(32,"li",18),r.Ec(33,Be,4,1,"li",19),r.Ub(34,"li",12),r.Ub(35,"a",5),r.Gc(36," Your Profile "),r.Tb(),r.Tb(),r.Ec(37,Ge,3,0,"li",20),r.Pb(38,"li",18),r.Ub(39,"li",21),r.bc("click",function(){return r.vc(e),r.ec().signOut()}),r.Gc(40,"Sign Out"),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Rb()}if(2&e){const e=t.ngIf,n=r.uc(9),i=r.uc(26),o=r.ec();r.Cb(2),r.nc("routerLink","/users/",e.id,"/notifications"),r.Cb(1),r.lc("ngrxLet",o.unreadCount$),r.Cb(2),r.lc("nzDropdownMenu",n),r.Cb(16),r.lc("nzDropdownMenu",i),r.Cb(1),r.lc("user",e),r.Cb(2),r.lc("ngIf",e.invalidCoi),r.Cb(7),r.Hc(e.username),r.Cb(2),r.lc("ngIf",e.invalidCoi),r.Cb(2),r.nc("routerLink","/users/",e.id,""),r.Cb(2),r.lc("ngIf",e.isAdmin)}}function qe(e,t){1&e&&(r.Ub(0,"span"),r.Gc(1,"Update your Conflict of Interest Statement"),r.Tb())}function Ye(e,t){if(1&e){const e=r.Vb();r.Ub(0,"cvc-update-coi",28),r.bc("coiUpdatedEvent",function(){return r.vc(e),r.ec().coiUpdated()}),r.Tb()}}let He=(()=>{class e{constructor(e,t){this.queryService=e,this.unreadCountGql=t,this.coiUpdateModalVisible=!1,this.viewer$=this.queryService.viewer$,this.unreadCount$=this.unreadCountGql.watch(void 0,{pollInterval:3e3}).valueChanges.pipe(Object(ke.a)(({data:e})=>e.notifications.unreadCount),Object(Me.a)(0))}signOut(){this.queryService.signOut()}coiUpdated(){this.coiUpdateModalVisible=!1,this.queryService.refetch()}handleCoiModalCancel(){this.coiUpdateModalVisible=!1}}return e.\u0275fac=function(t){return new(t||e)(r.Ob(s.a),r.Ob(P.Bc))},e.\u0275cmp=r.Ib({type:e,selectors:[["cvc-viewer-button"]],decls:7,vars:7,consts:[[4,"ngIf"],[3,"nzVisible","nzContent","nzTitle","nzFooter","nzVisibleChange","nzOnCancel"],["coiModalTitle",""],["coiModalContent",""],["nzAlign","center","nzSize","middle"],[3,"routerLink"],[4,"ngrxLet"],["nz-dropdown","","nzTrigger","click","nzPlacement","bottomRight",1,"topMenuIcon",3,"nzDropdownMenu"],["nz-icon","","nzType","plus","nzTheme","outline"],["nz-icon","","nzType","caret-down","nzTheme","outline",1,"topMenuSecondary"],["addMenu","nzDropdownMenu"],["nz-menu",""],["nz-menu-item",""],["routerLink","/evidence/add/submit"],["routerLink","/assertions/add/submit"],["size","small",3,"user"],["class","topBarBadge","nzColor","orange",3,"nzShowDot",4,"ngIf"],["userMenu","nzDropdownMenu"],["nz-menu-divider",""],["nz-menu-item","",3,"click",4,"ngIf"],["nz-menu-item","",4,"ngIf"],["nz-menu-item","",3,"click"],["nz-tooltip","",1,"topMenuIcon",3,"nzTooltipTitle"],["nz-icon","","nzType","bell","nzTheme","outline"],["nzColor","blue",1,"topBarBadge",3,"nzShowDot"],["nzColor","orange",1,"topBarBadge",3,"nzShowDot"],["nzColor","orange",3,"nzShowDot"],["routerLink","/admin"],[3,"coiUpdatedEvent"]],template:function(e,t){if(1&e&&(r.Ec(0,Ke,41,10,"ng-container",0),r.fc(1,"ngrxPush"),r.Ub(2,"nz-modal",1),r.bc("nzVisibleChange",function(e){return t.coiUpdateModalVisible=e})("nzOnCancel",function(){return t.handleCoiModalCancel()}),r.Ec(3,qe,2,0,"ng-template",null,2,r.Fc),r.Ec(5,Ye,1,0,"ng-template",null,3,r.Fc),r.Tb()),2&e){const e=r.uc(4),n=r.uc(6);r.lc("ngIf",r.gc(1,5,t.viewer$)),r.Cb(2),r.lc("nzVisible",t.coiUpdateModalVisible)("nzContent",n)("nzTitle",e)("nzFooter",null)}},directives:[i.q,Ee.a,Pe.a,Pe.b,o.e,ze.a,je.a,f.b,je.d,b.c,b.e,o.g,Le.a,b.d,k.d,Ue.a,Fe.a],pipes:[ze.b],styles:["[_nghost-%COMP%]{display:inline-block}.topMenuIcon[_ngcontent-%COMP%]:hover{cursor:pointer}.topMenuIcon[_ngcontent-%COMP%]{font-size:16px}.topMenuIcon[_ngcontent-%COMP%]   .topBarBadge[_ngcontent-%COMP%]{margin-right:-10px;margin-top:-16px}.topMenuIcon[_ngcontent-%COMP%]   .topMenuSecondary[_ngcontent-%COMP%]{font-size:10px;margin-left:2px}"]}),e})();function We(e,t){1&e&&r.Pb(0,"img",62)}function Xe(e,t){1&e&&r.Pb(0,"img",63)}function Qe(e,t){1&e&&r.Pb(0,"cvc-login-button")}function Je(e,t){1&e&&r.Pb(0,"cvc-viewer-button")}const Ze=function(e){return{"is-collapsed":e}},et=[{path:"",pathMatch:"full",redirectTo:"/welcome"},{path:"",component:(()=>{class e{constructor(e){this.viewerService=e,this.isCollapsed=!1}ngOnInit(){this.data$=this.viewerService.data$,this.viewer$=this.viewerService.viewer$,this.signedIn$=this.viewerService.signedIn$,this.signedOut$=this.viewerService.signedOut$,this.canCurate$=this.viewerService.canCurate$,this.canModerate$=this.viewerService.canModerate$}}return e.\u0275fac=function(t){return new(t||e)(r.Ob(s.a))},e.\u0275cmp=r.Ib({type:e,selectors:[["cvc-layout"]],decls:137,vars:44,consts:[[1,"app-layout"],["nzCollapsible","","nzBreakpoint","md",1,"app-sider",3,"nzWidth","nzCollapsedWidth","nzCollapsed","nzTrigger","nzCollapsedChange"],["routerLink","/"],[1,"sidebar-logo",3,"ngClass"],["src","assets/images/civic-logo_sidebar-expanded.png","alt","CIViC - Clinical Interpretations of Variants in Cancer",4,"ngIf"],["src","assets/images/civic-logo_sidebar-collapsed.png","alt","CIViC - Clinical Interpretations of Variants in Cancer",4,"ngIf"],["nz-menu","","nzTheme","dark","nzMode","inline",1,"menu-group",3,"nzInlineCollapsed"],["nz-menu-item","","nz-tooltip","","nzTooltipPlacement","right","nzSelected","","nzMatchRouter","",3,"nzTooltipTitle"],["nz-icon","","nzType","civic-assertion"],["routerLink","/assertions"],["nz-icon","","nzType","civic-evidence"],["routerLink","/evidence"],["nz-icon","","nzType","civic-gene"],["routerLink","/genes"],["nz-icon","","nzType","civic-variant"],["routerLink","/variants"],["nz-icon","","nzType","civic-variantgroup"],["routerLink","/variant-groups"],["nz-icon","","nzType","audit"],["routerLink","/clinical-trials"],["nz-icon","","nzType","civic-disease"],["routerLink","/diseases"],["nz-icon","","nzType","civic-intervention"],["routerLink","/drugs"],["nz-icon","","nzType","civic-phenotype"],["routerLink","/phenotypes"],["nz-icon","","nzType","civic-source"],["routerLink","/sources"],["nz-icon","","nzType","file-add"],["routerLink","/source-suggestions"],["nz-icon","","nzType","civic-varianttype"],["routerLink","/variant-types"],["nz-icon","","nzType","civic-revision"],["routerLink","/revisions"],["nz-icon","","nzType","civic-comment"],["routerLink","/comments"],["nz-icon","","nzType","civic-flag"],["routerLink","/flags"],["nz-icon","","nzType","global"],["routerLink","/community","id","main-community"],["nz-icon","","nzType","civic-curator"],["routerLink","/users","id","main-users"],["nz-icon","","nzType","civic-organization"],["routerLink","/organizations","id","main-organization"],["nz-icon","","nzType","download"],["routerLink","/releases","id","releases"],["nz-icon","","nzType","bar-chart"],["routerLink","/statistics","id","statistics"],[1,"right-layout",3,"ngClass"],["nz-row",""],["nz-col","","nzFlex","40px"],[1,"header-trigger",3,"click"],["nz-icon","",1,"trigger",3,"nzType"],["nz-col","","nzFlex","300px","id","header-search"],["nz-col","","nzFlex","300px","id","header-menu"],["nz-menu","","nzMode","horizontal","nzTheme","dark"],["nz-menu-item","","nzSelected","","nzMatchRouter",""],["routerLink","/pages/about"],["routerLink","/pages/help"],["routerLink","/pages/contact"],["nz-col","","nzFlex","auto","id","header-viewer"],[4,"ngIf"],["src","assets/images/civic-logo_sidebar-expanded.png","alt","CIViC - Clinical Interpretations of Variants in Cancer"],["src","assets/images/civic-logo_sidebar-collapsed.png","alt","CIViC - Clinical Interpretations of Variants in Cancer"]],template:function(e,t){1&e&&(r.Ub(0,"nz-layout",0),r.Ub(1,"nz-sider",1),r.bc("nzCollapsedChange",function(e){return t.isCollapsed=e}),r.Ub(2,"a",2),r.Ub(3,"div",3),r.Ec(4,We,1,0,"img",4),r.Ec(5,Xe,1,0,"img",5),r.Tb(),r.Tb(),r.Ub(6,"ul",6),r.Ub(7,"li",7),r.Pb(8,"i",8),r.Ub(9,"span"),r.Ub(10,"a",9),r.Gc(11,"Assertions"),r.Tb(),r.Tb(),r.Tb(),r.Ub(12,"li",7),r.Pb(13,"i",10),r.Ub(14,"span"),r.Ub(15,"a",11),r.Gc(16,"Evidence"),r.Tb(),r.Tb(),r.Tb(),r.Ub(17,"li",7),r.Pb(18,"i",12),r.Ub(19,"span"),r.Ub(20,"a",13),r.Gc(21,"Genes"),r.Tb(),r.Tb(),r.Tb(),r.Ub(22,"li",7),r.Pb(23,"i",14),r.Ub(24,"span"),r.Ub(25,"a",15),r.Gc(26,"Variants"),r.Tb(),r.Tb(),r.Tb(),r.Ub(27,"li",7),r.Pb(28,"i",16),r.Ub(29,"span"),r.Ub(30,"a",17),r.Gc(31,"Variant Groups"),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Ub(32,"ul",6),r.Ub(33,"li",7),r.Pb(34,"i",18),r.Ub(35,"span"),r.Ub(36,"a",19),r.Gc(37,"Clinical Trials"),r.Tb(),r.Tb(),r.Tb(),r.Ub(38,"li",7),r.Pb(39,"i",20),r.Ub(40,"span"),r.Ub(41,"a",21),r.Gc(42,"Diseases"),r.Tb(),r.Tb(),r.Tb(),r.Ub(43,"li",7),r.Pb(44,"i",22),r.Ub(45,"span"),r.Ub(46,"a",23),r.Gc(47,"Drugs"),r.Tb(),r.Tb(),r.Tb(),r.Ub(48,"li",7),r.Pb(49,"i",24),r.Ub(50,"span"),r.Ub(51,"a",25),r.Gc(52,"Phenotypes"),r.Tb(),r.Tb(),r.Tb(),r.Ub(53,"li",7),r.Pb(54,"i",26),r.Ub(55,"span"),r.Ub(56,"a",27),r.Gc(57,"Sources"),r.Tb(),r.Tb(),r.Tb(),r.Ub(58,"li",7),r.Pb(59,"i",28),r.Ub(60,"span"),r.Ub(61,"a",29),r.Gc(62,"Source Suggestions"),r.Tb(),r.Tb(),r.Tb(),r.Ub(63,"li",7),r.Pb(64,"i",30),r.Ub(65,"span"),r.Ub(66,"a",31),r.Gc(67,"Variant Types"),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Ub(68,"ul",6),r.Ub(69,"li",7),r.Pb(70,"i",32),r.Ub(71,"span"),r.Ub(72,"a",33),r.Gc(73,"Revisions"),r.Tb(),r.Tb(),r.Tb(),r.Ub(74,"li",7),r.Pb(75,"i",34),r.Ub(76,"span"),r.Ub(77,"a",35),r.Gc(78,"Comments"),r.Tb(),r.Tb(),r.Tb(),r.Ub(79,"li",7),r.Pb(80,"i",36),r.Ub(81,"span"),r.Ub(82,"a",37),r.Gc(83,"Flags"),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Ub(84,"ul",6),r.Ub(85,"li",7),r.Pb(86,"i",38),r.Ub(87,"span"),r.Ub(88,"a",39),r.Gc(89,"Community"),r.Tb(),r.Tb(),r.Tb(),r.Ub(90,"li",7),r.Pb(91,"i",40),r.Ub(92,"span"),r.Ub(93,"a",41),r.Gc(94,"Users"),r.Tb(),r.Tb(),r.Tb(),r.Ub(95,"li",7),r.Pb(96,"i",42),r.Ub(97,"span"),r.Ub(98,"a",43),r.Gc(99,"Organizations"),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Ub(100,"ul",6),r.Ub(101,"li",7),r.Pb(102,"i",44),r.Ub(103,"span"),r.Ub(104,"a",45),r.Gc(105,"Data Releases"),r.Tb(),r.Tb(),r.Tb(),r.Ub(106,"li",7),r.Pb(107,"i",46),r.Ub(108,"span"),r.Ub(109,"a",47),r.Gc(110,"Statistics"),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Ub(111,"nz-layout",48),r.Ub(112,"nz-header"),r.Ub(113,"div",49),r.Ub(114,"div",50),r.Ub(115,"span",51),r.bc("click",function(){return t.isCollapsed=!t.isCollapsed}),r.Pb(116,"i",52),r.Tb(),r.Tb(),r.Ub(117,"div",53),r.Pb(118,"cvc-quicksearch"),r.Tb(),r.Ub(119,"div",54),r.Ub(120,"ul",55),r.Ub(121,"li",56),r.Ub(122,"a",57),r.Gc(123,"About CIViC"),r.Tb(),r.Tb(),r.Ub(124,"li",56),r.Ub(125,"a",58),r.Gc(126,"Help"),r.Tb(),r.Tb(),r.Ub(127,"li",56),r.Ub(128,"a",59),r.Gc(129,"Contact"),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Ub(130,"div",60),r.Ec(131,Qe,1,0,"cvc-login-button",61),r.fc(132,"async"),r.Ec(133,Je,1,0,"cvc-viewer-button",61),r.fc(134,"async"),r.Tb(),r.Tb(),r.Tb(),r.Ub(135,"nz-content"),r.Pb(136,"router-outlet"),r.Tb(),r.Tb(),r.Tb()),2&e&&(r.Cb(1),r.lc("nzWidth",170)("nzCollapsedWidth",80)("nzCollapsed",t.isCollapsed)("nzTrigger",null),r.Cb(2),r.lc("ngClass",r.qc(40,Ze,t.isCollapsed)),r.Cb(1),r.lc("ngIf",!t.isCollapsed),r.Cb(1),r.lc("ngIf",t.isCollapsed),r.Cb(1),r.lc("nzInlineCollapsed",t.isCollapsed),r.Cb(1),r.lc("nzTooltipTitle",t.isCollapsed?"Assertions":""),r.Cb(5),r.lc("nzTooltipTitle",t.isCollapsed?"Evidence":""),r.Cb(5),r.lc("nzTooltipTitle",t.isCollapsed?"Genes":""),r.Cb(5),r.lc("nzTooltipTitle",t.isCollapsed?"Variants":""),r.Cb(5),r.lc("nzTooltipTitle",t.isCollapsed?"Variant Groups":""),r.Cb(5),r.lc("nzInlineCollapsed",t.isCollapsed),r.Cb(1),r.lc("nzTooltipTitle",t.isCollapsed?"Clinical Trials":""),r.Cb(5),r.lc("nzTooltipTitle",t.isCollapsed?"Diseases":""),r.Cb(5),r.lc("nzTooltipTitle",t.isCollapsed?"Drugs":""),r.Cb(5),r.lc("nzTooltipTitle",t.isCollapsed?"Phenotypes":""),r.Cb(5),r.lc("nzTooltipTitle",t.isCollapsed?"Sources":""),r.Cb(5),r.lc("nzTooltipTitle",t.isCollapsed?"Source Suggestions":""),r.Cb(5),r.lc("nzTooltipTitle",t.isCollapsed?"Variant Types":""),r.Cb(5),r.lc("nzInlineCollapsed",t.isCollapsed),r.Cb(1),r.lc("nzTooltipTitle",t.isCollapsed?"Revisions":""),r.Cb(5),r.lc("nzTooltipTitle",t.isCollapsed?"Comments":""),r.Cb(5),r.lc("nzTooltipTitle",t.isCollapsed?"Flags":""),r.Cb(5),r.lc("nzInlineCollapsed",t.isCollapsed),r.Cb(1),r.lc("nzTooltipTitle",t.isCollapsed?"Community":""),r.Cb(5),r.lc("nzTooltipTitle",t.isCollapsed?"Users":""),r.Cb(5),r.lc("nzTooltipTitle",t.isCollapsed?"Organizations":""),r.Cb(5),r.lc("nzInlineCollapsed",t.isCollapsed),r.Cb(1),r.lc("nzTooltipTitle",t.isCollapsed?"Data Releases":""),r.Cb(5),r.lc("nzTooltipTitle",t.isCollapsed?"Statistics":""),r.Cb(5),r.lc("ngClass",r.qc(42,Ze,t.isCollapsed)),r.Cb(5),r.lc("nzType",t.isCollapsed?"menu-unfold":"menu-fold"),r.Cb(15),r.lc("ngIf",r.gc(132,36,t.signedOut$)),r.Cb(2),r.lc("ngIf",r.gc(134,38,t.signedIn$)))},directives:[A,D,o.g,i.o,i.q,b.c,b.e,k.d,f.b,w,M.c,M.a,Ce,$,o.i,Re,He],pipes:[i.b],styles:["[_nghost-%COMP%]{display:flex;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.app-layout[_ngcontent-%COMP%]{min-height:100vh}nz-sider[_ngcontent-%COMP%]{width:170px;overflow:auto;height:100%;position:fixed;left:0}.right-layout[_ngcontent-%COMP%]{margin-left:170px;width:100%;position:relative;transition:all .2s,padding 0s;background-color:#001529}.right-layout.is-collapsed[_ngcontent-%COMP%]{margin-left:80px}.menu-group[_ngcontent-%COMP%]{margin-bottom:1.5em}.sidebar-logo[_ngcontent-%COMP%]{height:90px}.sidebar-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:133px;height:auto;margin:12px 16px;transition:all .2s}.sidebar-logo.is-collapsed[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:auto;margin:12px 20px;transition:all .2s}.ant-layout-header[_ngcontent-%COMP%]{height:64px;line-height:64px;padding:0;position:fixed;width:calc(100% - 170px);z-index:10;color:#d6e4ff}.header-trigger[_ngcontent-%COMP%]{height:64px;cursor:pointer;color:#d6e4ff;padding:1em 1em 1em 0}#header-menu[_ngcontent-%COMP%]{text-align:right;height:64px}#header-search[_ngcontent-%COMP%]{height:64px;padding-right:16px}#header-viewer[_ngcontent-%COMP%]{text-align:right;padding-right:1em}.header-menu[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .header-quicksearch[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .header-user[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#d6e4ff}nz-content[_ngcontent-%COMP%]{margin-top:64px;overflow:initial;position:relative;z-index:1;background-color:#273340;border-top:1px solid #3e5166;border-left:1px solid #3e5166;padding:12px;border-top-left-radius:16px}"]}),e})(),children:[{path:"assertions",loadChildren:()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(7),n.e(6),n.e(8),n.e(9),n.e(10),n.e(11),n.e(12),n.e(13),n.e(14),n.e(22),n.e(37)]).then(n.bind(null,"XsWn")).then(e=>e.AssertionsModule),data:{breadcrumb:"Assertions"}},{path:"clinical-trials",loadChildren:()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(7),n.e(6),n.e(8),n.e(10),n.e(11),n.e(15),n.e(20),n.e(5),n.e(36)]).then(n.bind(null,"cd1E")).then(e=>e.ClinicalTrialsModule),data:{breadcrumb:"Clinical Trials"}},{path:"comments",loadChildren:()=>Promise.all([n.e(0),n.e(44)]).then(n.bind(null,"UB9L")).then(e=>e.CommentsModule),data:{breadcrumb:"Comments"}},{path:"community",loadChildren:()=>Promise.all([n.e(0),n.e(45)]).then(n.bind(null,"GWlk")).then(e=>e.CommunityModule),data:{breadcrumb:"Community"}},{path:"diseases",loadChildren:()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(6),n.e(8),n.e(9),n.e(10),n.e(12),n.e(19),n.e(20),n.e(5),n.e(38)]).then(n.bind(null,"jjTn")).then(e=>e.DiseasesModule),data:{breadcrumb:"Diseases"}},{path:"drugs",loadChildren:()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(6),n.e(9),n.e(12),n.e(32)]).then(n.bind(null,"bduo")).then(e=>e.DrugsModule),data:{breadcrumb:"Drugs"}},{path:"evidence",loadChildren:()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(6),n.e(10)]).then(n.bind(null,"DiSq")).then(e=>e.EvidenceModule),data:{breadcrumb:"Evidence"}},{path:"flags",loadChildren:()=>Promise.all([n.e(0),n.e(49)]).then(n.bind(null,"Rmwg")).then(e=>e.FlagsModule),data:{breadcrumb:"Flags"}},{path:"genes",loadChildren:()=>Promise.all([n.e(0),n.e(1),n.e(3),n.e(35)]).then(n.bind(null,"IAPA")).then(e=>e.GenesModule),data:{breadcrumb:"Genes"}},{path:"organizations",loadChildren:()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(6),n.e(8),n.e(9),n.e(10),n.e(12),n.e(13),n.e(15),n.e(21),n.e(5),n.e(43)]).then(n.bind(null,"W2PW")).then(e=>e.OrganizationsModule),data:{breadcrumb:"Organizations"}},{path:"phenotypes",loadChildren:()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(6),n.e(9),n.e(12),n.e(33)]).then(n.bind(null,"0qeB")).then(e=>e.PhenotypesModule),data:{breadcrumb:"Phenotypes"}},{path:"revisions",loadChildren:()=>Promise.all([n.e(0),n.e(53)]).then(n.bind(null,"wRBE")).then(e=>e.RevisionsModule),data:{breadcrumb:"Revisions"}},{path:"sources",loadChildren:()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(7),n.e(6),n.e(8),n.e(10),n.e(11),n.e(15),n.e(20),n.e(5),n.e(41)]).then(n.bind(null,"OhQ4")).then(e=>e.SourcesModule),data:{breadcrumb:"Sources"}},{path:"source-suggestions",loadChildren:()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(7),n.e(6),n.e(8),n.e(10),n.e(11),n.e(15),n.e(42)]).then(n.bind(null,"8AIl")).then(e=>e.SourceSuggestionsModule),data:{breadcrumb:"SourceSuggestions"}},{path:"users",loadChildren:()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(6),n.e(8),n.e(9),n.e(10),n.e(12),n.e(13),n.e(15),n.e(21),n.e(31)]).then(n.bind(null,"QSsw")).then(e=>e.UsersModule),data:{breadcrumb:"Users"}},{path:"variant-groups",loadChildren:()=>Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(4),n.e(7),n.e(6),n.e(8),n.e(9),n.e(10),n.e(11),n.e(14),n.e(5),n.e(29)]).then(n.bind(null,"Bgpb")).then(e=>e.VariantGroupsModule),data:{breadcrumb:"Variant Groups"}},{path:"variants",loadChildren:()=>Promise.all([n.e(0),n.e(1),n.e(3),n.e(19),n.e(5),n.e(40)]).then(n.bind(null,"/5rf")).then(e=>e.VariantsModule),data:{breadcrumb:"Variants"}},{path:"variant-types",loadChildren:()=>Promise.all([n.e(0),n.e(1),n.e(3),n.e(19),n.e(28)]).then(n.bind(null,"HbFb")).then(e=>e.VariantTypesModule),data:{breadcrumb:"Variant Types"}},{path:"welcome",loadChildren:()=>n.e(55).then(n.bind(null,"6bkv")).then(e=>e.WelcomeModule),data:{breadcrumb:"Welcome to CIViC"}},{path:"statistics",loadChildren:()=>Promise.all([n.e(0),n.e(1),n.e(54)]).then(n.bind(null,"gzb6")).then(e=>e.StatisticsModule),data:{breadcrumb:"Statistics"}},{path:"releases",loadChildren:()=>Promise.all([n.e(0),n.e(1),n.e(52)]).then(n.bind(null,"buMc")).then(e=>e.ReleasesModule),data:{breadcrumb:"Releases"}},{path:"pages",loadChildren:()=>n.e(51).then(n.bind(null,"TskO")).then(e=>e.PagesModule),data:{breadcrumb:"Pages"}}]}];let tt=(()=>{class e{}return e.\u0275mod=r.Mb({type:e}),e.\u0275inj=r.Lb({factory:function(t){return new(t||e)},imports:[[o.h.forChild(et)],o.h]}),e})();var nt=n("eHCX"),it=n("xWP1"),ot=n("ocnv");let rt=(()=>{class e{}return e.\u0275mod=r.Mb({type:e}),e.\u0275inj=r.Lb({factory:function(t){return new(t||e)},imports:[[i.c,U.k,o.h,ze.c,L.e,ot.e,f.c,ve]]}),e})(),st=(()=>{class e{}return e.\u0275mod=r.Mb({type:e}),e.\u0275inj=r.Lb({factory:function(t){return new(t||e)},imports:[[i.c,f.c,$e.e,Oe.c]]}),e})(),at=(()=>{class e{}return e.\u0275mod=r.Mb({type:e}),e.\u0275inj=r.Lb({factory:function(t){return new(t||e)},imports:[[i.c,Oe.c,Ee.c,st]]}),e})();var ct=n("2XtQ"),lt=n("waJF");let ut=(()=>{class e{}return e.\u0275mod=r.Mb({type:e}),e.\u0275inj=r.Lb({factory:function(t){return new(t||e)},imports:[[i.c,ze.c,je.b,o.h,Pe.c,f.c,Ue.b,k.b,Ee.c,ct.a,lt.a]]}),e})(),dt=(()=>{class e{}return e.\u0275mod=r.Mb({type:e}),e.\u0275inj=r.Lb({factory:function(t){return new(t||e)},imports:[[i.c,tt,f.c,M.b,R,b.f,k.b,nt.b,it.b,at,ut,rt]]}),e})()},ZE2D:function(e,t,n){"use strict";n.d(t,"a",function(){return m}),n.d(t,"b",function(){return f});var i=n("mrSG"),o=n("nLfN"),r=n("fXoL"),s=n("2Suw"),a=n("/KA4"),c=n("cH1L"),l=n("ofXK"),u=n("FwiY");const d=["textEl"];function p(e,t){if(1&e&&r.Pb(0,"i",3),2&e){const e=r.ec();r.lc("nzType",e.nzIcon)}}function h(e,t){if(1&e){const e=r.Vb();r.Ub(0,"img",4),r.bc("error",function(t){return r.vc(e),r.ec().imgError(t)}),r.Tb()}if(2&e){const e=r.ec();r.lc("src",e.nzSrc,r.xc),r.Db("srcset",e.nzSrcSet,r.xc)("alt",e.nzAlt)}}function b(e,t){if(1&e&&(r.Ub(0,"span",5,6),r.Gc(2),r.Tb()),2&e){const e=r.ec();r.lc("ngStyle",e.textStyles),r.Cb(2),r.Hc(e.nzText)}}let m=(()=>{class e{constructor(e,t,n,i){this.nzConfigService=e,this.elementRef=t,this.cdr=n,this.platform=i,this._nzModuleName="avatar",this.nzShape="circle",this.nzSize="default",this.nzGap=4,this.nzError=new r.n,this.hasText=!1,this.hasSrc=!0,this.hasIcon=!1,this.textStyles={},this.classMap={},this.customSize=null,this.el=this.elementRef.nativeElement,this.elementRef.nativeElement.classList.add("ant-avatar")}imgError(e){this.nzError.emit(e),e.defaultPrevented||(this.hasSrc=!1,this.hasIcon=!1,this.hasText=!1,this.nzIcon?this.hasIcon=!0:this.nzText&&(this.hasText=!0),this.cdr.detectChanges(),this.setSizeStyle(),this.notifyCalc())}ngOnChanges(){this.hasText=!this.nzSrc&&!!this.nzText,this.hasIcon=!this.nzSrc&&!!this.nzIcon,this.hasSrc=!!this.nzSrc,this.setSizeStyle(),this.notifyCalc()}calcStringSize(){if(!this.hasText)return;const e=this.textEl.nativeElement.offsetWidth,t=this.el.getBoundingClientRect().width,n=2*this.nzGap<t?2*this.nzGap:8;this.textStyles={transform:`scale(${t-n<e?(t-n)/e:1}) translateX(-50%)`},this.customSize&&Object.assign(this.textStyles,{lineHeight:this.customSize}),this.cdr.detectChanges()}notifyCalc(){this.platform.isBrowser&&setTimeout(()=>{this.calcStringSize()})}setSizeStyle(){this.customSize="number"==typeof this.nzSize?`${this.nzSize}px`:null,this.cdr.markForCheck()}}return e.\u0275fac=function(t){return new(t||e)(r.Ob(s.a),r.Ob(r.l),r.Ob(r.h),r.Ob(o.a))},e.\u0275cmp=r.Ib({type:e,selectors:[["nz-avatar"]],viewQuery:function(e,t){if(1&e&&r.Lc(d,1),2&e){let e;r.tc(e=r.cc())&&(t.textEl=e.first)}},hostVars:20,hostBindings:function(e,t){2&e&&(r.Bc("width",t.customSize)("height",t.customSize)("line-height",t.customSize)("font-size",t.hasIcon&&t.customSize?t.nzSize/2:null,"px"),r.Gb("ant-avatar-lg","large"===t.nzSize)("ant-avatar-sm","small"===t.nzSize)("ant-avatar-square","square"===t.nzShape)("ant-avatar-circle","circle"===t.nzShape)("ant-avatar-icon",t.nzIcon)("ant-avatar-image",t.hasSrc))},inputs:{nzShape:"nzShape",nzSize:"nzSize",nzGap:"nzGap",nzText:"nzText",nzSrc:"nzSrc",nzSrcSet:"nzSrcSet",nzAlt:"nzAlt",nzIcon:"nzIcon"},outputs:{nzError:"nzError"},exportAs:["nzAvatar"],features:[r.Ab],decls:3,vars:3,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[3,"src","error",4,"ngIf"],["class","ant-avatar-string",3,"ngStyle",4,"ngIf"],["nz-icon","",3,"nzType"],[3,"src","error"],[1,"ant-avatar-string",3,"ngStyle"],["textEl",""]],template:function(e,t){1&e&&(r.Ec(0,p,1,1,"i",0),r.Ec(1,h,1,3,"img",1),r.Ec(2,b,3,2,"span",2)),2&e&&(r.lc("ngIf",t.nzIcon&&t.hasIcon),r.Cb(1),r.lc("ngIf",t.nzSrc&&t.hasSrc),r.Cb(1),r.lc("ngIf",t.nzText&&t.hasText))},directives:[l.q,u.b,l.t],encapsulation:2,changeDetection:0}),Object(i.b)([Object(s.b)(),Object(i.c)("design:type",String)],e.prototype,"nzShape",void 0),Object(i.b)([Object(s.b)(),Object(i.c)("design:type",Object)],e.prototype,"nzSize",void 0),Object(i.b)([Object(s.b)(),Object(a.b)(),Object(i.c)("design:type",Object)],e.prototype,"nzGap",void 0),e})(),f=(()=>{class e{}return e.\u0275mod=r.Mb({type:e}),e.\u0275inj=r.Lb({factory:function(t){return new(t||e)},imports:[[c.a,l.c,u.c,o.b]]}),e})()},aTAi:function(e,t,n){"use strict";n.d(t,"a",function(){return S});var i=n("fXoL"),o=n("ip/c"),r=n("XNiG"),s=n("1G5W"),a=n("l/kO"),c=n("CVmQ"),l=n("JA5x"),u=n("ofXK"),d=n("qAZ0"),p=n("B+r4"),h=n("ocnv"),b=n("bE2y"),m=n("3Pt+"),f=n("OzZK"),g=n("RwU8"),v=n("C2AL"),z=n("Wfee"),y=n("IjnV");function I(e,t){1&e&&i.Pb(0,"nz-alert",7)}function C(e,t){if(1&e&&(i.Ub(0,"nz-form-item"),i.Pb(1,"cvc-form-errors-alert",8),i.Tb()),2&e){const e=i.ec();i.Cb(1),i.lc("errors",e.errorMessages)}}function O(e,t){if(1&e){const e=i.Vb();i.Ub(0,"nz-form-item"),i.Ub(1,"textarea",9),i.bc("ngModelChange",function(t){return i.vc(e),i.ec().coiText=t}),i.Tb(),i.Tb()}if(2&e){const e=i.ec();i.Cb(1),i.lc("ngModel",e.coiText)}}let S=(()=>{class e{constructor(e,t){this.updateCoiGql=e,this.coiUpdatedEvent=new i.n,this.coiText=void 0,this.coiStatus="noCoi",this.success=!1,this.errorMessages=[],this.loading=!1,this.destroy$=new r.a,this.updateCoiMutator=new o.a(t)}updateCoi(){if("coiPresent"===this.coiStatus&&this.coiText||"noCoi"===this.coiStatus){this.errorMessages=[];let e=this.updateCoiMutator.mutate(this.updateCoiGql,{input:{coiPresent:"coiPresent"===this.coiStatus,statement:this.coiText}});e.submitSuccess$.pipe(Object(s.a)(this.destroy$)).subscribe(e=>{e&&(this.resetForm(),this.success=!0,this.coiUpdatedEvent.emit())}),e.submitError$.pipe(Object(s.a)(this.destroy$)).subscribe(e=>{e&&(this.errorMessages=e,this.success=!1)}),e.isSubmitting$.pipe(Object(s.a)(this.destroy$)).subscribe(e=>{this.loading=e})}}resetForm(){this.coiStatus="noCoi",this.coiText=void 0}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return e.\u0275fac=function(t){return new(t||e)(i.Ob(a.Zb),i.Ob(c.a))},e.\u0275cmp=i.Ib({type:e,selectors:[["cvc-update-coi"]],outputs:{coiUpdatedEvent:"coiUpdatedEvent"},decls:14,vars:6,consts:[["nzBanner","","nzMessage","COI Statement Updated.","nzType","success","nzCloseable","",4,"ngIf"],[4,"ngIf"],["nzTip","Submitting",3,"nzSpinning"],[3,"ngModel","ngModelChange"],["nz-radio","","nzValue","noCoi"],["nz-radio","","nzValue","coiPresent"],["type","submit","nz-button","","nzType","primary","nzSize","small",3,"disabled","click"],["nzBanner","","nzMessage","COI Statement Updated.","nzType","success","nzCloseable",""],[3,"errors"],["nz-input","","rows","5","placeholder","Provide a concise description of any potential or actual conflicts of interest that you may have in curating CIViC",2,"width","100%",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(i.Ub(0,"nz-card"),i.Ec(1,I,1,0,"nz-alert",0),i.Ec(2,C,2,1,"nz-form-item",1),i.Ub(3,"nz-spin",2),i.Ub(4,"nz-form-item"),i.Ub(5,"nz-radio-group",3),i.bc("ngModelChange",function(e){return t.coiStatus=e}),i.Ub(6,"label",4),i.Gc(7,"I do not have any potential conflicts of interest."),i.Tb(),i.Ub(8,"label",5),i.Gc(9,"I do have a potential conflict of interest."),i.Tb(),i.Tb(),i.Tb(),i.Ec(10,O,2,1,"nz-form-item",1),i.Ub(11,"nz-form-item"),i.Ub(12,"button",6),i.bc("click",function(){return t.updateCoi()}),i.Gc(13," Save Conflict of Interest Statement "),i.Tb(),i.Tb(),i.Tb(),i.Tb()),2&e&&(i.Cb(1),i.lc("ngIf",t.success),i.Cb(1),i.lc("ngIf",t.errorMessages.length>0),i.Cb(1),i.lc("nzSpinning",t.loading),i.Cb(2),i.lc("ngModel",t.coiStatus),i.Cb(5),i.lc("ngIf","coiPresent"===t.coiStatus),i.Cb(2),i.lc("disabled",t.loading||"coiPresent"===t.coiStatus&&(void 0===t.coiText||t.coiText.length<10)))},directives:[l.a,u.q,d.a,p.c,h.c,b.b,m.o,m.r,b.a,f.a,g.a,v.a,z.a,y.a,m.d],styles:["[_nghost-%COMP%]{display:block}nz-space[_ngcontent-%COMP%]{width:100%}nz-form-item[_ngcontent-%COMP%]:last-of-type{margin-bottom:0}"]}),e})()},bE2y:function(e,t,n){"use strict";n.d(t,"a",function(){return z}),n.d(t,"b",function(){return v}),n.d(t,"c",function(){return y});var i=n("fXoL"),o=n("mrSG"),r=n("cH1L"),s=n("3Pt+"),a=n("/KA4"),c=n("jtHE"),l=n("XNiG"),u=n("1G5W"),d=n("ofXK"),p=n("u47x");const h=["*"],b=["inputElement"],m=["nz-radio",""];let f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=i.Jb({type:e,selectors:[["","nz-radio-button",""]]}),e})(),g=(()=>{class e{constructor(){this.selected$=new c.a(1),this.touched$=new l.a,this.disabled$=new c.a(1),this.name$=new c.a(1)}touch(){this.touched$.next()}select(e){this.selected$.next(e)}setDisabled(e){this.disabled$.next(e)}setName(e){this.name$.next(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=i.Kb({token:e,factory:e.\u0275fac}),e})(),v=(()=>{class e{constructor(e,t,n,i){this.cdr=e,this.nzRadioService=t,this.elementRef=n,this.directionality=i,this.value=null,this.destroy$=new l.a,this.onChange=()=>{},this.onTouched=()=>{},this.nzDisabled=!1,this.nzButtonStyle="outline",this.nzSize="default",this.nzName=null,this.dir="ltr",this.elementRef.nativeElement.classList.add("ant-radio-group")}ngOnInit(){var e;this.nzRadioService.selected$.subscribe(e=>{this.value!==e&&(this.value=e,this.onChange(this.value))}),this.nzRadioService.touched$.subscribe(()=>{Promise.resolve().then(()=>this.onTouched())}),null===(e=this.directionality.change)||void 0===e||e.pipe(Object(u.a)(this.destroy$)).subscribe(e=>{this.dir=e,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(e){const{nzDisabled:t,nzName:n}=e;t&&this.nzRadioService.setDisabled(this.nzDisabled),n&&this.nzRadioService.setName(this.nzName)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}writeValue(e){this.value=e,this.nzRadioService.select(e),this.cdr.markForCheck()}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.nzDisabled=e,this.nzRadioService.setDisabled(e),this.cdr.markForCheck()}}return e.\u0275fac=function(t){return new(t||e)(i.Ob(i.h),i.Ob(g),i.Ob(i.l),i.Ob(r.b,8))},e.\u0275cmp=i.Ib({type:e,selectors:[["nz-radio-group"]],hostVars:8,hostBindings:function(e,t){2&e&&i.Gb("ant-radio-group-large","large"===t.nzSize)("ant-radio-group-small","small"===t.nzSize)("ant-radio-group-solid","solid"===t.nzButtonStyle)("ant-radio-group-rtl","rtl"===t.dir)},inputs:{nzDisabled:"nzDisabled",nzButtonStyle:"nzButtonStyle",nzSize:"nzSize",nzName:"nzName"},exportAs:["nzRadioGroup"],features:[i.Bb([g,{provide:s.m,useExisting:Object(i.V)(()=>e),multi:!0}]),i.Ab],ngContentSelectors:h,decls:1,vars:0,template:function(e,t){1&e&&(i.kc(),i.jc(0))},encapsulation:2,changeDetection:0}),Object(o.b)([Object(a.a)(),Object(o.c)("design:type",Object)],e.prototype,"nzDisabled",void 0),e})(),z=(()=>{class e{constructor(e,t,n,i,o,r){this.elementRef=e,this.cdr=t,this.focusMonitor=n,this.directionality=i,this.nzRadioService=o,this.nzRadioButtonDirective=r,this.isNgModel=!1,this.destroy$=new l.a,this.isChecked=!1,this.name=null,this.isRadioButton=!!this.nzRadioButtonDirective,this.onChange=()=>{},this.onTouched=()=>{},this.nzValue=null,this.nzDisabled=!1,this.nzAutoFocus=!1,this.dir="ltr"}onHostClick(e){e.stopPropagation(),e.preventDefault(),this.nzDisabled||this.isChecked||(this.nzRadioService&&this.nzRadioService.select(this.nzValue),this.isNgModel&&(this.isChecked=!0,this.onChange(!0)))}focus(){this.focusMonitor.focusVia(this.inputElement,"keyboard")}blur(){this.inputElement.nativeElement.blur()}setDisabledState(e){this.nzDisabled=e,this.cdr.markForCheck()}writeValue(e){this.isChecked=e,this.cdr.markForCheck()}registerOnChange(e){this.isNgModel=!0,this.onChange=e}registerOnTouched(e){this.onTouched=e}ngOnInit(){var e;this.nzRadioService&&(this.nzRadioService.name$.pipe(Object(u.a)(this.destroy$)).subscribe(e=>{this.name=e,this.cdr.markForCheck()}),this.nzRadioService.disabled$.pipe(Object(u.a)(this.destroy$)).subscribe(e=>{this.nzDisabled=e,this.cdr.markForCheck()}),this.nzRadioService.selected$.pipe(Object(u.a)(this.destroy$)).subscribe(e=>{this.isChecked=this.nzValue===e,this.cdr.markForCheck()})),this.focusMonitor.monitor(this.elementRef,!0).subscribe(e=>{e||(Promise.resolve().then(()=>this.onTouched()),this.nzRadioService&&this.nzRadioService.touch())}),null===(e=this.directionality.change)||void 0===e||e.pipe(Object(u.a)(this.destroy$)).subscribe(e=>{this.dir=e,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngAfterViewInit(){this.nzAutoFocus&&this.focus()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.focusMonitor.stopMonitoring(this.elementRef)}}return e.\u0275fac=function(t){return new(t||e)(i.Ob(i.l),i.Ob(i.h),i.Ob(p.d),i.Ob(r.b,8),i.Ob(g,8),i.Ob(f,8))},e.\u0275cmp=i.Ib({type:e,selectors:[["","nz-radio",""],["","nz-radio-button",""]],viewQuery:function(e,t){if(1&e&&i.Lc(b,1),2&e){let e;i.tc(e=i.cc())&&(t.inputElement=e.first)}},hostVars:16,hostBindings:function(e,t){1&e&&i.bc("click",function(e){return t.onHostClick(e)}),2&e&&i.Gb("ant-radio-wrapper",!t.isRadioButton)("ant-radio-button-wrapper",t.isRadioButton)("ant-radio-wrapper-checked",t.isChecked&&!t.isRadioButton)("ant-radio-button-wrapper-checked",t.isChecked&&t.isRadioButton)("ant-radio-wrapper-disabled",t.nzDisabled&&!t.isRadioButton)("ant-radio-button-wrapper-disabled",t.nzDisabled&&t.isRadioButton)("ant-radio-wrapper-rtl",!t.isRadioButton&&"rtl"===t.dir)("ant-radio-button-wrapper-rtl",t.isRadioButton&&"rtl"===t.dir)},inputs:{nzValue:"nzValue",nzDisabled:"nzDisabled",nzAutoFocus:"nzAutoFocus"},exportAs:["nzRadio"],features:[i.Bb([{provide:s.m,useExisting:Object(i.V)(()=>e),multi:!0}])],attrs:m,ngContentSelectors:h,decls:6,vars:24,consts:[["type","radio",3,"disabled","checked"],["inputElement",""]],template:function(e,t){1&e&&(i.kc(),i.Ub(0,"span"),i.Pb(1,"input",0,1),i.Pb(3,"span"),i.Tb(),i.Ub(4,"span"),i.jc(5),i.Tb()),2&e&&(i.Gb("ant-radio",!t.isRadioButton)("ant-radio-checked",t.isChecked&&!t.isRadioButton)("ant-radio-disabled",t.nzDisabled&&!t.isRadioButton)("ant-radio-button",t.isRadioButton)("ant-radio-button-checked",t.isChecked&&t.isRadioButton)("ant-radio-button-disabled",t.nzDisabled&&t.isRadioButton),i.Cb(1),i.Gb("ant-radio-input",!t.isRadioButton)("ant-radio-button-input",t.isRadioButton),i.lc("disabled",t.nzDisabled)("checked",t.isChecked),i.Db("autofocus",t.nzAutoFocus?"autofocus":null)("name",t.name),i.Cb(2),i.Gb("ant-radio-inner",!t.isRadioButton)("ant-radio-button-inner",t.isRadioButton))},encapsulation:2,changeDetection:0}),Object(o.b)([Object(a.a)(),Object(o.c)("design:type",Object)],e.prototype,"nzDisabled",void 0),Object(o.b)([Object(a.a)(),Object(o.c)("design:type",Object)],e.prototype,"nzAutoFocus",void 0),e})(),y=(()=>{class e{}return e.\u0275mod=i.Mb({type:e}),e.\u0275inj=i.Lb({factory:function(t){return new(t||e)},imports:[[r.a,d.c,s.k]]}),e})()},cXLW:function(e,t,n){"use strict";n.d(t,"a",function(){return q});var i=n("zC+P");function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r=n("2Fve");function s(e,t){for(var n,i=/\r\n|[\n\r]/g,o=1,r=t+1;(n=i.exec(e.body))&&n.index<t;)o+=1,r=t+1-(n.index+n[0].length);return{line:o,column:r}}function a(e,t){var n=e.locationOffset.column-1,i=l(n)+e.body,o=t.line-1,r=t.line+(e.locationOffset.line-1),s=t.column+(1===t.line?n:0),a="".concat(e.name,":").concat(r,":").concat(s,"\n"),u=i.split(/\r\n|[\n\r]/g),d=u[o];if(d.length>120){for(var p=Math.floor(s/80),h=s%80,b=[],m=0;m<d.length;m+=80)b.push(d.slice(m,m+80));return a+c([["".concat(r),b[0]]].concat(b.slice(1,p+1).map(function(e){return["",e]}),[[" ",l(h-1)+"^"],["",b[p+1]]]))}return a+c([["".concat(r-1),u[o-1]],["".concat(r),d],["",l(s-1)+"^"],["".concat(r+1),u[o+1]]])}function c(e){var t=e.filter(function(e){return void 0!==e[1]}),n=Math.max.apply(Math,t.map(function(e){return e[0].length}));return t.map(function(e){var t,i=e[1];return l(n-(t=e[0]).length)+t+(i?" | "+i:" |")}).join("\n")}function l(e){return Array(e+1).join(" ")}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?p(e):t}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){var t="function"==typeof Map?new Map:void 0;return(h=function(e){if(null===e||-1===Function.toString.call(e).indexOf("[native code]"))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return b(e,arguments,g(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),f(n,e)})(e)}function b(e,t,n){return(b=m()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var o=new(Function.bind.apply(e,i));return n&&f(o,n.prototype),o}).apply(null,arguments)}function m(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(l,e);var t,n,i,c=(t=l,n=m(),function(){var e,i=g(t);if(n){var o=g(this).constructor;e=Reflect.construct(i,arguments,o)}else e=i.apply(this,arguments);return d(this,e)});function l(e,t,n,i,r,a,u){var h,b,m,f,g;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),g=c.call(this,e);var v,z=Array.isArray(t)?0!==t.length?t:void 0:t?[t]:void 0,y=n;!y&&z&&(y=null===(v=z[0].loc)||void 0===v?void 0:v.source);var I,C=i;!C&&z&&(C=z.reduce(function(e,t){return t.loc&&e.push(t.loc.start),e},[])),C&&0===C.length&&(C=void 0),i&&n?I=i.map(function(e){return s(n,e)}):z&&(I=z.reduce(function(e,t){return t.loc&&e.push(s(t.loc.source,t.loc.start)),e},[]));var O,S=u;if(null==S&&null!=a){var T=a.extensions;"object"==o(O=T)&&null!==O&&(S=T)}return Object.defineProperties(p(g),{name:{value:"GraphQLError"},message:{value:e,enumerable:!0,writable:!0},locations:{value:null!==(h=I)&&void 0!==h?h:void 0,enumerable:null!=I},path:{value:null!=r?r:void 0,enumerable:null!=r},nodes:{value:null!=z?z:void 0},source:{value:null!==(b=y)&&void 0!==b?b:void 0},positions:{value:null!==(m=C)&&void 0!==m?m:void 0},originalError:{value:a},extensions:{value:null!==(f=S)&&void 0!==f?f:void 0,enumerable:null!=S}}),(null==a?void 0:a.stack)?(Object.defineProperty(p(g),"stack",{value:a.stack,writable:!0,configurable:!0}),d(g)):(Error.captureStackTrace?Error.captureStackTrace(p(g),l):Object.defineProperty(p(g),"stack",{value:Error().stack,writable:!0,configurable:!0}),g)}return(i=[{key:"toString",value:function(){return function(e){var t,n=e.message;if(e.nodes)for(var i=0,o=e.nodes;i<o.length;i++){var r=o[i];r.loc&&(n+="\n\n"+a((t=r.loc).source,s(t.source,t.start)))}else if(e.source&&e.locations)for(var c=0,l=e.locations;c<l.length;c++)n+="\n\n"+a(e.source,l[c]);return n}(this)}},{key:r.a,get:function(){return"Object"}}])&&function(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(l.prototype,i),l}(h(Error));function z(e,t,n){return new v("Syntax Error: ".concat(n),void 0,e,[t])}var y=Object.freeze({NAME:"Name",DOCUMENT:"Document",OPERATION_DEFINITION:"OperationDefinition",VARIABLE_DEFINITION:"VariableDefinition",SELECTION_SET:"SelectionSet",FIELD:"Field",ARGUMENT:"Argument",FRAGMENT_SPREAD:"FragmentSpread",INLINE_FRAGMENT:"InlineFragment",FRAGMENT_DEFINITION:"FragmentDefinition",VARIABLE:"Variable",INT:"IntValue",FLOAT:"FloatValue",STRING:"StringValue",BOOLEAN:"BooleanValue",NULL:"NullValue",ENUM:"EnumValue",LIST:"ListValue",OBJECT:"ObjectValue",OBJECT_FIELD:"ObjectField",DIRECTIVE:"Directive",NAMED_TYPE:"NamedType",LIST_TYPE:"ListType",NON_NULL_TYPE:"NonNullType",SCHEMA_DEFINITION:"SchemaDefinition",OPERATION_TYPE_DEFINITION:"OperationTypeDefinition",SCALAR_TYPE_DEFINITION:"ScalarTypeDefinition",OBJECT_TYPE_DEFINITION:"ObjectTypeDefinition",FIELD_DEFINITION:"FieldDefinition",INPUT_VALUE_DEFINITION:"InputValueDefinition",INTERFACE_TYPE_DEFINITION:"InterfaceTypeDefinition",UNION_TYPE_DEFINITION:"UnionTypeDefinition",ENUM_TYPE_DEFINITION:"EnumTypeDefinition",ENUM_VALUE_DEFINITION:"EnumValueDefinition",INPUT_OBJECT_TYPE_DEFINITION:"InputObjectTypeDefinition",DIRECTIVE_DEFINITION:"DirectiveDefinition",SCHEMA_EXTENSION:"SchemaExtension",SCALAR_TYPE_EXTENSION:"ScalarTypeExtension",OBJECT_TYPE_EXTENSION:"ObjectTypeExtension",INTERFACE_TYPE_EXTENSION:"InterfaceTypeExtension",UNION_TYPE_EXTENSION:"UnionTypeExtension",ENUM_TYPE_EXTENSION:"EnumTypeExtension",INPUT_OBJECT_TYPE_EXTENSION:"InputObjectTypeExtension"}),I=n("klf5"),C=Object.freeze({SOF:"<SOF>",EOF:"<EOF>",BANG:"!",DOLLAR:"$",AMP:"&",PAREN_L:"(",PAREN_R:")",SPREAD:"...",COLON:":",EQUALS:"=",AT:"@",BRACKET_L:"[",BRACKET_R:"]",BRACE_L:"{",PIPE:"|",BRACE_R:"}",NAME:"Name",INT:"Int",FLOAT:"Float",STRING:"String",BLOCK_STRING:"BlockString",COMMENT:"Comment"}),O=n("neE4"),S=Object.freeze({QUERY:"QUERY",MUTATION:"MUTATION",SUBSCRIPTION:"SUBSCRIPTION",FIELD:"FIELD",FRAGMENT_DEFINITION:"FRAGMENT_DEFINITION",FRAGMENT_SPREAD:"FRAGMENT_SPREAD",INLINE_FRAGMENT:"INLINE_FRAGMENT",VARIABLE_DEFINITION:"VARIABLE_DEFINITION",SCHEMA:"SCHEMA",SCALAR:"SCALAR",OBJECT:"OBJECT",FIELD_DEFINITION:"FIELD_DEFINITION",ARGUMENT_DEFINITION:"ARGUMENT_DEFINITION",INTERFACE:"INTERFACE",UNION:"UNION",ENUM:"ENUM",ENUM_VALUE:"ENUM_VALUE",INPUT_OBJECT:"INPUT_OBJECT",INPUT_FIELD_DEFINITION:"INPUT_FIELD_DEFINITION"}),T=n("BLR7"),E=function(){function e(e){var t=new I.b(C.SOF,0,0,0,0,null);this.source=e,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}var t=e.prototype;return t.advance=function(){return this.lastToken=this.token,this.token=this.lookahead()},t.lookahead=function(){var e=this.token;if(e.kind!==C.EOF)do{var t;e=null!==(t=e.next)&&void 0!==t?t:e.next=$(this,e)}while(e.kind===C.COMMENT);return e},e}();function N(e){return isNaN(e)?C.EOF:e<127?JSON.stringify(String.fromCharCode(e)):'"\\u'.concat(("00"+e.toString(16).toUpperCase()).slice(-4),'"')}function $(e,t){for(var n=e.source,i=n.body,o=i.length,r=t.end;r<o;){var s=i.charCodeAt(r),a=e.line,c=1+r-e.lineStart;switch(s){case 65279:case 9:case 32:case 44:++r;continue;case 10:++r,++e.line,e.lineStart=r;continue;case 13:10===i.charCodeAt(r+1)?r+=2:++r,++e.line,e.lineStart=r;continue;case 33:return new I.b(C.BANG,r,r+1,a,c,t);case 35:return D(n,r,a,c,t);case 36:return new I.b(C.DOLLAR,r,r+1,a,c,t);case 38:return new I.b(C.AMP,r,r+1,a,c,t);case 40:return new I.b(C.PAREN_L,r,r+1,a,c,t);case 41:return new I.b(C.PAREN_R,r,r+1,a,c,t);case 46:if(46===i.charCodeAt(r+1)&&46===i.charCodeAt(r+2))return new I.b(C.SPREAD,r,r+3,a,c,t);break;case 58:return new I.b(C.COLON,r,r+1,a,c,t);case 61:return new I.b(C.EQUALS,r,r+1,a,c,t);case 64:return new I.b(C.AT,r,r+1,a,c,t);case 91:return new I.b(C.BRACKET_L,r,r+1,a,c,t);case 93:return new I.b(C.BRACKET_R,r,r+1,a,c,t);case 123:return new I.b(C.BRACE_L,r,r+1,a,c,t);case 124:return new I.b(C.PIPE,r,r+1,a,c,t);case 125:return new I.b(C.BRACE_R,r,r+1,a,c,t);case 34:return 34===i.charCodeAt(r+1)&&34===i.charCodeAt(r+2)?k(n,r,a,c,t,e):R(n,r,a,c,t);case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return A(n,r,s,a,c,t);case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 95:case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 110:case 111:case 112:case 113:case 114:case 115:case 116:case 117:case 118:case 119:case 120:case 121:case 122:return P(n,r,a,c,t)}throw z(n,r,w(s))}return new I.b(C.EOF,o,o,e.line,1+r-e.lineStart,t)}function w(e){return e<32&&9!==e&&10!==e&&13!==e?"Cannot contain the invalid character ".concat(N(e),"."):39===e?"Unexpected single quote character ('), did you mean to use a double quote (\")?":"Cannot parse the unexpected character ".concat(N(e),".")}function D(e,t,n,i,o){var r,s=e.body,a=t;do{r=s.charCodeAt(++a)}while(!isNaN(r)&&(r>31||9===r));return new I.b(C.COMMENT,t,a,n,i,o,s.slice(t+1,a))}function A(e,t,n,i,o,r){var s=e.body,a=n,c=t,l=!1;if(45===a&&(a=s.charCodeAt(++c)),48===a){if((a=s.charCodeAt(++c))>=48&&a<=57)throw z(e,c,"Invalid number, unexpected digit after 0: ".concat(N(a),"."))}else c=x(e,c,a),a=s.charCodeAt(c);if(46===a&&(l=!0,a=s.charCodeAt(++c),c=x(e,c,a),a=s.charCodeAt(c)),69!==a&&101!==a||(l=!0,43!==(a=s.charCodeAt(++c))&&45!==a||(a=s.charCodeAt(++c)),c=x(e,c,a),a=s.charCodeAt(c)),46===a||function(e){return 95===e||e>=65&&e<=90||e>=97&&e<=122}(a))throw z(e,c,"Invalid number, expected digit but got: ".concat(N(a),"."));return new I.b(l?C.FLOAT:C.INT,t,c,i,o,r,s.slice(t,c))}function x(e,t,n){var i=e.body,o=t,r=n;if(r>=48&&r<=57){do{r=i.charCodeAt(++o)}while(r>=48&&r<=57);return o}throw z(e,o,"Invalid number, expected digit but got: ".concat(N(r),"."))}function R(e,t,n,i,o){for(var r,s,a,c,l=e.body,u=t+1,d=u,p=0,h="";u<l.length&&!isNaN(p=l.charCodeAt(u))&&10!==p&&13!==p;){if(34===p)return h+=l.slice(d,u),new I.b(C.STRING,t,u+1,n,i,o,h);if(p<32&&9!==p)throw z(e,u,"Invalid character within String: ".concat(N(p),"."));if(++u,92===p){switch(h+=l.slice(d,u-1),p=l.charCodeAt(u)){case 34:h+='"';break;case 47:h+="/";break;case 92:h+="\\";break;case 98:h+="\b";break;case 102:h+="\f";break;case 110:h+="\n";break;case 114:h+="\r";break;case 116:h+="\t";break;case 117:var b=(r=l.charCodeAt(u+1),s=l.charCodeAt(u+2),a=l.charCodeAt(u+3),c=l.charCodeAt(u+4),M(r)<<12|M(s)<<8|M(a)<<4|M(c));if(b<0){var m=l.slice(u+1,u+5);throw z(e,u,"Invalid character escape sequence: \\u".concat(m,"."))}h+=String.fromCharCode(b),u+=4;break;default:throw z(e,u,"Invalid character escape sequence: \\".concat(String.fromCharCode(p),"."))}d=++u}}throw z(e,u,"Unterminated string.")}function k(e,t,n,i,o,r){for(var s=e.body,a=t+3,c=a,l=0,u="";a<s.length&&!isNaN(l=s.charCodeAt(a));){if(34===l&&34===s.charCodeAt(a+1)&&34===s.charCodeAt(a+2))return u+=s.slice(c,a),new I.b(C.BLOCK_STRING,t,a+3,n,i,o,Object(T.a)(u));if(l<32&&9!==l&&10!==l&&13!==l)throw z(e,a,"Invalid character within String: ".concat(N(l),"."));10===l?(++a,++r.line,r.lineStart=a):13===l?(10===s.charCodeAt(a+1)?a+=2:++a,++r.line,r.lineStart=a):92===l&&34===s.charCodeAt(a+1)&&34===s.charCodeAt(a+2)&&34===s.charCodeAt(a+3)?(u+=s.slice(c,a)+'"""',c=a+=4):++a}throw z(e,a,"Unterminated string.")}function M(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function P(e,t,n,i,o){for(var r=e.body,s=r.length,a=t+1,c=0;a!==s&&!isNaN(c=r.charCodeAt(a))&&(95===c||c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122);)++a;return new I.b(C.NAME,t,a,n,i,o,r.slice(t,a))}var j=function(){function e(e,t){var n=Object(O.b)(e)?e:new O.a(e);this._lexer=new E(n),this._options=t}var t=e.prototype;return t.parseName=function(){var e=this.expectToken(C.NAME);return{kind:y.NAME,value:e.value,loc:this.loc(e)}},t.parseDocument=function(){var e=this._lexer.token;return{kind:y.DOCUMENT,definitions:this.many(C.SOF,this.parseDefinition,C.EOF),loc:this.loc(e)}},t.parseDefinition=function(){if(this.peek(C.NAME))switch(this._lexer.token.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"schema":case"scalar":case"type":case"interface":case"union":case"enum":case"input":case"directive":return this.parseTypeSystemDefinition();case"extend":return this.parseTypeSystemExtension()}else{if(this.peek(C.BRACE_L))return this.parseOperationDefinition();if(this.peekDescription())return this.parseTypeSystemDefinition()}throw this.unexpected()},t.parseOperationDefinition=function(){var e=this._lexer.token;if(this.peek(C.BRACE_L))return{kind:y.OPERATION_DEFINITION,operation:"query",name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet(),loc:this.loc(e)};var t,n=this.parseOperationType();return this.peek(C.NAME)&&(t=this.parseName()),{kind:y.OPERATION_DEFINITION,operation:n,name:t,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(e)}},t.parseOperationType=function(){var e=this.expectToken(C.NAME);switch(e.value){case"query":return"query";case"mutation":return"mutation";case"subscription":return"subscription"}throw this.unexpected(e)},t.parseVariableDefinitions=function(){return this.optionalMany(C.PAREN_L,this.parseVariableDefinition,C.PAREN_R)},t.parseVariableDefinition=function(){var e=this._lexer.token;return{kind:y.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(C.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(C.EQUALS)?this.parseValueLiteral(!0):void 0,directives:this.parseDirectives(!0),loc:this.loc(e)}},t.parseVariable=function(){var e=this._lexer.token;return this.expectToken(C.DOLLAR),{kind:y.VARIABLE,name:this.parseName(),loc:this.loc(e)}},t.parseSelectionSet=function(){var e=this._lexer.token;return{kind:y.SELECTION_SET,selections:this.many(C.BRACE_L,this.parseSelection,C.BRACE_R),loc:this.loc(e)}},t.parseSelection=function(){return this.peek(C.SPREAD)?this.parseFragment():this.parseField()},t.parseField=function(){var e,t,n=this._lexer.token,i=this.parseName();return this.expectOptionalToken(C.COLON)?(e=i,t=this.parseName()):t=i,{kind:y.FIELD,alias:e,name:t,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(C.BRACE_L)?this.parseSelectionSet():void 0,loc:this.loc(n)}},t.parseArguments=function(e){return this.optionalMany(C.PAREN_L,e?this.parseConstArgument:this.parseArgument,C.PAREN_R)},t.parseArgument=function(){var e=this._lexer.token,t=this.parseName();return this.expectToken(C.COLON),{kind:y.ARGUMENT,name:t,value:this.parseValueLiteral(!1),loc:this.loc(e)}},t.parseConstArgument=function(){var e=this._lexer.token;return{kind:y.ARGUMENT,name:this.parseName(),value:(this.expectToken(C.COLON),this.parseValueLiteral(!0)),loc:this.loc(e)}},t.parseFragment=function(){var e=this._lexer.token;this.expectToken(C.SPREAD);var t=this.expectOptionalKeyword("on");return!t&&this.peek(C.NAME)?{kind:y.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1),loc:this.loc(e)}:{kind:y.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(e)}},t.parseFragmentDefinition=function(){var e,t=this._lexer.token;return this.expectKeyword("fragment"),!0===(null===(e=this._options)||void 0===e?void 0:e.experimentalFragmentVariables)?{kind:y.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(t)}:{kind:y.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet(),loc:this.loc(t)}},t.parseFragmentName=function(){if("on"===this._lexer.token.value)throw this.unexpected();return this.parseName()},t.parseValueLiteral=function(e){var t=this._lexer.token;switch(t.kind){case C.BRACKET_L:return this.parseList(e);case C.BRACE_L:return this.parseObject(e);case C.INT:return this._lexer.advance(),{kind:y.INT,value:t.value,loc:this.loc(t)};case C.FLOAT:return this._lexer.advance(),{kind:y.FLOAT,value:t.value,loc:this.loc(t)};case C.STRING:case C.BLOCK_STRING:return this.parseStringLiteral();case C.NAME:switch(this._lexer.advance(),t.value){case"true":return{kind:y.BOOLEAN,value:!0,loc:this.loc(t)};case"false":return{kind:y.BOOLEAN,value:!1,loc:this.loc(t)};case"null":return{kind:y.NULL,loc:this.loc(t)};default:return{kind:y.ENUM,value:t.value,loc:this.loc(t)}}case C.DOLLAR:if(!e)return this.parseVariable()}throw this.unexpected()},t.parseStringLiteral=function(){var e=this._lexer.token;return this._lexer.advance(),{kind:y.STRING,value:e.value,block:e.kind===C.BLOCK_STRING,loc:this.loc(e)}},t.parseList=function(e){var t=this,n=this._lexer.token;return{kind:y.LIST,values:this.any(C.BRACKET_L,function(){return t.parseValueLiteral(e)},C.BRACKET_R),loc:this.loc(n)}},t.parseObject=function(e){var t=this,n=this._lexer.token;return{kind:y.OBJECT,fields:this.any(C.BRACE_L,function(){return t.parseObjectField(e)},C.BRACE_R),loc:this.loc(n)}},t.parseObjectField=function(e){var t=this._lexer.token,n=this.parseName();return this.expectToken(C.COLON),{kind:y.OBJECT_FIELD,name:n,value:this.parseValueLiteral(e),loc:this.loc(t)}},t.parseDirectives=function(e){for(var t=[];this.peek(C.AT);)t.push(this.parseDirective(e));return t},t.parseDirective=function(e){var t=this._lexer.token;return this.expectToken(C.AT),{kind:y.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e),loc:this.loc(t)}},t.parseTypeReference=function(){var e,t=this._lexer.token;return this.expectOptionalToken(C.BRACKET_L)?(e=this.parseTypeReference(),this.expectToken(C.BRACKET_R),e={kind:y.LIST_TYPE,type:e,loc:this.loc(t)}):e=this.parseNamedType(),this.expectOptionalToken(C.BANG)?{kind:y.NON_NULL_TYPE,type:e,loc:this.loc(t)}:e},t.parseNamedType=function(){var e=this._lexer.token;return{kind:y.NAMED_TYPE,name:this.parseName(),loc:this.loc(e)}},t.parseTypeSystemDefinition=function(){var e=this.peekDescription()?this._lexer.lookahead():this._lexer.token;if(e.kind===C.NAME)switch(e.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}throw this.unexpected(e)},t.peekDescription=function(){return this.peek(C.STRING)||this.peek(C.BLOCK_STRING)},t.parseDescription=function(){if(this.peekDescription())return this.parseStringLiteral()},t.parseSchemaDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");var n=this.parseDirectives(!0),i=this.many(C.BRACE_L,this.parseOperationTypeDefinition,C.BRACE_R);return{kind:y.SCHEMA_DEFINITION,description:t,directives:n,operationTypes:i,loc:this.loc(e)}},t.parseOperationTypeDefinition=function(){var e=this._lexer.token,t=this.parseOperationType();this.expectToken(C.COLON);var n=this.parseNamedType();return{kind:y.OPERATION_TYPE_DEFINITION,operation:t,type:n,loc:this.loc(e)}},t.parseScalarTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");var n=this.parseName(),i=this.parseDirectives(!0);return{kind:y.SCALAR_TYPE_DEFINITION,description:t,name:n,directives:i,loc:this.loc(e)}},t.parseObjectTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");var n=this.parseName(),i=this.parseImplementsInterfaces(),o=this.parseDirectives(!0),r=this.parseFieldsDefinition();return{kind:y.OBJECT_TYPE_DEFINITION,description:t,name:n,interfaces:i,directives:o,fields:r,loc:this.loc(e)}},t.parseImplementsInterfaces=function(){var e;if(!this.expectOptionalKeyword("implements"))return[];if(!0===(null===(e=this._options)||void 0===e?void 0:e.allowLegacySDLImplementsInterfaces)){var t=[];this.expectOptionalToken(C.AMP);do{t.push(this.parseNamedType())}while(this.expectOptionalToken(C.AMP)||this.peek(C.NAME));return t}return this.delimitedMany(C.AMP,this.parseNamedType)},t.parseFieldsDefinition=function(){var e;return!0===(null===(e=this._options)||void 0===e?void 0:e.allowLegacySDLEmptyFields)&&this.peek(C.BRACE_L)&&this._lexer.lookahead().kind===C.BRACE_R?(this._lexer.advance(),this._lexer.advance(),[]):this.optionalMany(C.BRACE_L,this.parseFieldDefinition,C.BRACE_R)},t.parseFieldDefinition=function(){var e=this._lexer.token,t=this.parseDescription(),n=this.parseName(),i=this.parseArgumentDefs();this.expectToken(C.COLON);var o=this.parseTypeReference(),r=this.parseDirectives(!0);return{kind:y.FIELD_DEFINITION,description:t,name:n,arguments:i,type:o,directives:r,loc:this.loc(e)}},t.parseArgumentDefs=function(){return this.optionalMany(C.PAREN_L,this.parseInputValueDef,C.PAREN_R)},t.parseInputValueDef=function(){var e=this._lexer.token,t=this.parseDescription(),n=this.parseName();this.expectToken(C.COLON);var i,o=this.parseTypeReference();this.expectOptionalToken(C.EQUALS)&&(i=this.parseValueLiteral(!0));var r=this.parseDirectives(!0);return{kind:y.INPUT_VALUE_DEFINITION,description:t,name:n,type:o,defaultValue:i,directives:r,loc:this.loc(e)}},t.parseInterfaceTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");var n=this.parseName(),i=this.parseImplementsInterfaces(),o=this.parseDirectives(!0),r=this.parseFieldsDefinition();return{kind:y.INTERFACE_TYPE_DEFINITION,description:t,name:n,interfaces:i,directives:o,fields:r,loc:this.loc(e)}},t.parseUnionTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");var n=this.parseName(),i=this.parseDirectives(!0),o=this.parseUnionMemberTypes();return{kind:y.UNION_TYPE_DEFINITION,description:t,name:n,directives:i,types:o,loc:this.loc(e)}},t.parseUnionMemberTypes=function(){return this.expectOptionalToken(C.EQUALS)?this.delimitedMany(C.PIPE,this.parseNamedType):[]},t.parseEnumTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");var n=this.parseName(),i=this.parseDirectives(!0),o=this.parseEnumValuesDefinition();return{kind:y.ENUM_TYPE_DEFINITION,description:t,name:n,directives:i,values:o,loc:this.loc(e)}},t.parseEnumValuesDefinition=function(){return this.optionalMany(C.BRACE_L,this.parseEnumValueDefinition,C.BRACE_R)},t.parseEnumValueDefinition=function(){var e=this._lexer.token,t=this.parseDescription(),n=this.parseName(),i=this.parseDirectives(!0);return{kind:y.ENUM_VALUE_DEFINITION,description:t,name:n,directives:i,loc:this.loc(e)}},t.parseInputObjectTypeDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");var n=this.parseName(),i=this.parseDirectives(!0),o=this.parseInputFieldsDefinition();return{kind:y.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:n,directives:i,fields:o,loc:this.loc(e)}},t.parseInputFieldsDefinition=function(){return this.optionalMany(C.BRACE_L,this.parseInputValueDef,C.BRACE_R)},t.parseTypeSystemExtension=function(){var e=this._lexer.lookahead();if(e.kind===C.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)},t.parseSchemaExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");var t=this.parseDirectives(!0),n=this.optionalMany(C.BRACE_L,this.parseOperationTypeDefinition,C.BRACE_R);if(0===t.length&&0===n.length)throw this.unexpected();return{kind:y.SCHEMA_EXTENSION,directives:t,operationTypes:n,loc:this.loc(e)}},t.parseScalarTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");var t=this.parseName(),n=this.parseDirectives(!0);if(0===n.length)throw this.unexpected();return{kind:y.SCALAR_TYPE_EXTENSION,name:t,directives:n,loc:this.loc(e)}},t.parseObjectTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");var t=this.parseName(),n=this.parseImplementsInterfaces(),i=this.parseDirectives(!0),o=this.parseFieldsDefinition();if(0===n.length&&0===i.length&&0===o.length)throw this.unexpected();return{kind:y.OBJECT_TYPE_EXTENSION,name:t,interfaces:n,directives:i,fields:o,loc:this.loc(e)}},t.parseInterfaceTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");var t=this.parseName(),n=this.parseImplementsInterfaces(),i=this.parseDirectives(!0),o=this.parseFieldsDefinition();if(0===n.length&&0===i.length&&0===o.length)throw this.unexpected();return{kind:y.INTERFACE_TYPE_EXTENSION,name:t,interfaces:n,directives:i,fields:o,loc:this.loc(e)}},t.parseUnionTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");var t=this.parseName(),n=this.parseDirectives(!0),i=this.parseUnionMemberTypes();if(0===n.length&&0===i.length)throw this.unexpected();return{kind:y.UNION_TYPE_EXTENSION,name:t,directives:n,types:i,loc:this.loc(e)}},t.parseEnumTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");var t=this.parseName(),n=this.parseDirectives(!0),i=this.parseEnumValuesDefinition();if(0===n.length&&0===i.length)throw this.unexpected();return{kind:y.ENUM_TYPE_EXTENSION,name:t,directives:n,values:i,loc:this.loc(e)}},t.parseInputObjectTypeExtension=function(){var e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");var t=this.parseName(),n=this.parseDirectives(!0),i=this.parseInputFieldsDefinition();if(0===n.length&&0===i.length)throw this.unexpected();return{kind:y.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:n,fields:i,loc:this.loc(e)}},t.parseDirectiveDefinition=function(){var e=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(C.AT);var n=this.parseName(),i=this.parseArgumentDefs(),o=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");var r=this.parseDirectiveLocations();return{kind:y.DIRECTIVE_DEFINITION,description:t,name:n,arguments:i,repeatable:o,locations:r,loc:this.loc(e)}},t.parseDirectiveLocations=function(){return this.delimitedMany(C.PIPE,this.parseDirectiveLocation)},t.parseDirectiveLocation=function(){var e=this._lexer.token,t=this.parseName();if(void 0!==S[t.value])return t;throw this.unexpected(e)},t.loc=function(e){var t;if(!0!==(null===(t=this._options)||void 0===t?void 0:t.noLocation))return new I.a(e,this._lexer.lastToken,this._lexer.source)},t.peek=function(e){return this._lexer.token.kind===e},t.expectToken=function(e){var t=this._lexer.token;if(t.kind===e)return this._lexer.advance(),t;throw z(this._lexer.source,t.start,"Expected ".concat(U(e),", found ").concat(L(t),"."))},t.expectOptionalToken=function(e){var t=this._lexer.token;if(t.kind===e)return this._lexer.advance(),t},t.expectKeyword=function(e){var t=this._lexer.token;if(t.kind!==C.NAME||t.value!==e)throw z(this._lexer.source,t.start,'Expected "'.concat(e,'", found ').concat(L(t),"."));this._lexer.advance()},t.expectOptionalKeyword=function(e){var t=this._lexer.token;return t.kind===C.NAME&&t.value===e&&(this._lexer.advance(),!0)},t.unexpected=function(e){var t=null!=e?e:this._lexer.token;return z(this._lexer.source,t.start,"Unexpected ".concat(L(t),"."))},t.any=function(e,t,n){this.expectToken(e);for(var i=[];!this.expectOptionalToken(n);)i.push(t.call(this));return i},t.optionalMany=function(e,t,n){if(this.expectOptionalToken(e)){var i=[];do{i.push(t.call(this))}while(!this.expectOptionalToken(n));return i}return[]},t.many=function(e,t,n){this.expectToken(e);var i=[];do{i.push(t.call(this))}while(!this.expectOptionalToken(n));return i},t.delimitedMany=function(e,t){this.expectOptionalToken(e);var n=[];do{n.push(t.call(this))}while(this.expectOptionalToken(e));return n},e}();function L(e){var t=e.value;return U(e.kind)+(null!=t?' "'.concat(t,'"'):"")}function U(e){return function(e){return e===C.BANG||e===C.DOLLAR||e===C.AMP||e===C.PAREN_L||e===C.PAREN_R||e===C.SPREAD||e===C.COLON||e===C.EQUALS||e===C.AT||e===C.BRACKET_L||e===C.BRACKET_R||e===C.BRACE_L||e===C.PIPE||e===C.BRACE_R}(e)?'"'.concat(e,'"'):e}var F=new Map,_=new Map,V=!0,B=!1;function G(e){return e.replace(/[\s,]+/g," ").trim()}function K(e){var t,n,o,r=G(e);if(!F.has(r)){var s=function(e,t){return new j(e,t).parseDocument()}(e,{experimentalFragmentVariables:B,allowLegacyFragmentVariables:B});if(!s||"Document"!==s.kind)throw new Error("Not a valid GraphQL document.");F.set(r,function(e){var t=new Set(e.definitions);t.forEach(function(e){e.loc&&delete e.loc,Object.keys(e).forEach(function(n){var i=e[n];i&&"object"==typeof i&&t.add(i)})});var n=e.loc;return n&&(delete n.startToken,delete n.endToken),e}((t=s,n=new Set,o=[],t.definitions.forEach(function(e){if("FragmentDefinition"===e.kind){var t=e.name.value,i=G((s=e.loc).source.body.substring(s.start,s.end)),r=_.get(t);r&&!r.has(i)?V&&console.warn("Warning: fragment with name "+t+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"):r||_.set(t,r=new Set),r.add(i),n.has(i)||(n.add(i),o.push(e))}else o.push(e);var s}),Object(i.a)(Object(i.a)({},t),{definitions:o}))))}return F.get(r)}function q(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];"string"==typeof e&&(e=[e]);var i=e[0];return t.forEach(function(t,n){i+=t&&"Document"===t.kind?t.loc.source.body:t,i+=e[n+1]}),K(i)}var Y,H=q;(Y=q||(q={})).gql=H,Y.resetCaches=function(){F.clear(),_.clear()},Y.disableFragmentWarnings=function(){V=!1},Y.enableExperimentalFragmentVariables=function(){B=!0},Y.disableExperimentalFragmentVariables=function(){B=!1},q.default=q},"ip/c":function(e,t,n){"use strict";n.d(t,"a",function(){return a});var i=n("XNiG"),o=n("2Vo4"),r=n("1G5W"),s=n("nYR2");class a{constructor(e){this.networkErrorService=e}mutate(e,t){let n=new i.a,a={isSubmitting$:new o.a(!1),submitSuccess$:new o.a(!1),submitError$:new o.a([]),cleanup:()=>{n.next(),n.complete()}};return a.isSubmitting$.next(!0),e.mutate(t).pipe(Object(r.a)(n),Object(s.a)(()=>{a.isSubmitting$.next(!1)})).subscribe({error:e=>{e.graphQLErrors.length>0?a.submitError$.next(e.graphQLErrors.map(e=>e.message)):e.networkError&&this.networkErrorService.networkError$.next(e.networkError),a.cleanup()},complete:()=>{a.submitError$.next([]),a.submitSuccess$.next(!0),this.networkErrorService.networkError$.next(void 0),a.cleanup()}}),a}}},j8OM:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var i=n("fXoL"),o=n("ofXK"),r=n("ZE2D");function s(e,t){if(1&e&&i.Pb(0,"nz-avatar",2),2&e){const e=i.ec();i.lc("nzSrc",e.user.profileImagePath)("nzSize",e.size)}}function a(e,t){if(1&e&&(i.Pb(0,"nz-avatar",3),i.fc(1,"uppercase")),2&e){const e=i.ec();i.lc("nzSize",e.size)("nzText",i.gc(1,2,e.user.displayName.charAt(0)))}}let c=(()=>{class e{ngOnInit(){if(void 0===this.user)throw new Error("Must supply a user to use this component");void 0===this.size&&(this.size="default")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Ib({type:e,selectors:[["cvc-user-avatar"]],inputs:{user:"user",size:"size"},decls:3,vars:2,consts:[["nz-comment-avatar","",3,"nzSrc","nzSize",4,"ngIf","ngIfElse"],["noAvatar",""],["nz-comment-avatar","",3,"nzSrc","nzSize"],["nz-comment-avatar","",3,"nzSize","nzText"]],template:function(e,t){if(1&e&&(i.Ec(0,s,1,2,"nz-avatar",0),i.Ec(1,a,2,4,"ng-template",null,1,i.Fc)),2&e){const e=i.uc(2);i.lc("ngIf",t.user.profileImagePath)("ngIfElse",e)}},directives:[o.q,r.a],pipes:[o.D],styles:["[_nghost-%COMP%]{display:inline-block}"]}),e})()},"l/kO":function(e,t,n){"use strict";n.d(t,"e",function(){return s}),n.d(t,"r",function(){return a}),n.d(t,"t",function(){return c}),n.d(t,"w",function(){return l}),n.d(t,"A",function(){return u}),n.d(t,"E",function(){return d}),n.d(t,"G",function(){return p}),n.d(t,"I",function(){return h}),n.d(t,"M",function(){return b}),n.d(t,"P",function(){return m}),n.d(t,"R",function(){return f}),n.d(t,"T",function(){return g}),n.d(t,"V",function(){return v}),n.d(t,"W",function(){return z}),n.d(t,"Z",function(){return y}),n.d(t,"cb",function(){return I}),n.d(t,"db",function(){return C}),n.d(t,"ib",function(){return O}),n.d(t,"mb",function(){return S}),n.d(t,"nb",function(){return T}),n.d(t,"sb",function(){return E}),n.d(t,"wb",function(){return N}),n.d(t,"Bb",function(){return $}),n.d(t,"Cb",function(){return w}),n.d(t,"Fb",function(){return D}),n.d(t,"Hb",function(){return A}),n.d(t,"Ib",function(){return x}),n.d(t,"Lb",function(){return R}),n.d(t,"Mb",function(){return k}),n.d(t,"Nb",function(){return M}),n.d(t,"Pb",function(){return P}),n.d(t,"Rb",function(){return j}),n.d(t,"Xb",function(){return L}),n.d(t,"fc",function(){return U}),n.d(t,"jc",function(){return F}),n.d(t,"mc",function(){return _}),n.d(t,"oc",function(){return V}),n.d(t,"uc",function(){return B}),n.d(t,"zc",function(){return G}),n.d(t,"d",function(){return et}),n.d(t,"g",function(){return nt}),n.d(t,"q",function(){return ot}),n.d(t,"s",function(){return st}),n.d(t,"u",function(){return ct}),n.d(t,"v",function(){return ut}),n.d(t,"C",function(){return pt}),n.d(t,"h",function(){return bt}),n.d(t,"H",function(){return ft}),n.d(t,"K",function(){return vt}),n.d(t,"N",function(){return yt}),n.d(t,"U",function(){return Ct}),n.d(t,"O",function(){return St}),n.d(t,"bb",function(){return Et}),n.d(t,"fb",function(){return $t}),n.d(t,"i",function(){return Dt}),n.d(t,"Ab",function(){return xt}),n.d(t,"ob",function(){return kt}),n.d(t,"tb",function(){return Pt}),n.d(t,"vb",function(){return Lt}),n.d(t,"yb",function(){return Ft}),n.d(t,"a",function(){return Vt}),n.d(t,"Db",function(){return Gt}),n.d(t,"hc",function(){return qt}),n.d(t,"Gb",function(){return Ht}),n.d(t,"x",function(){return Xt}),n.d(t,"Tb",function(){return Jt}),n.d(t,"lb",function(){return en}),n.d(t,"kb",function(){return nn}),n.d(t,"j",function(){return rn}),n.d(t,"Kb",function(){return an}),n.d(t,"k",function(){return ln}),n.d(t,"ec",function(){return dn}),n.d(t,"l",function(){return hn}),n.d(t,"tc",function(){return mn}),n.d(t,"xc",function(){return gn}),n.d(t,"pc",function(){return zn}),n.d(t,"yc",function(){return In}),n.d(t,"m",function(){return On}),n.d(t,"Ac",function(){return Tn}),n.d(t,"Bc",function(){return Nn}),n.d(t,"b",function(){return wn}),n.d(t,"zb",function(){return An}),n.d(t,"gc",function(){return Rn}),n.d(t,"L",function(){return Mn}),n.d(t,"D",function(){return jn}),n.d(t,"J",function(){return Un}),n.d(t,"S",function(){return _n}),n.d(t,"Ub",function(){return Bn}),n.d(t,"X",function(){return Kn}),n.d(t,"Qb",function(){return Yn}),n.d(t,"ab",function(){return Wn}),n.d(t,"Eb",function(){return Qn}),n.d(t,"gb",function(){return Zn}),n.d(t,"Vb",function(){return ti}),n.d(t,"hb",function(){return ii}),n.d(t,"xb",function(){return ri}),n.d(t,"o",function(){return ai}),n.d(t,"n",function(){return li}),n.d(t,"z",function(){return di}),n.d(t,"Zb",function(){return hi}),n.d(t,"bc",function(){return mi}),n.d(t,"y",function(){return gi}),n.d(t,"vc",function(){return zi}),n.d(t,"qc",function(){return Ii}),n.d(t,"Wb",function(){return Oi}),n.d(t,"wc",function(){return Ti}),n.d(t,"c",function(){return Ni}),n.d(t,"f",function(){return wi}),n.d(t,"p",function(){return Ai}),n.d(t,"B",function(){return Ri}),n.d(t,"F",function(){return Mi}),n.d(t,"Q",function(){return ji}),n.d(t,"Y",function(){return Ui}),n.d(t,"eb",function(){return _i}),n.d(t,"jb",function(){return Bi}),n.d(t,"pb",function(){return Ki}),n.d(t,"qb",function(){return Yi}),n.d(t,"rb",function(){return Wi}),n.d(t,"ub",function(){return Qi}),n.d(t,"Jb",function(){return Zi}),n.d(t,"Ob",function(){return to}),n.d(t,"cc",function(){return io}),n.d(t,"dc",function(){return ro}),n.d(t,"ac",function(){return ao}),n.d(t,"Yb",function(){return lo}),n.d(t,"Sb",function(){return po}),n.d(t,"kc",function(){return bo}),n.d(t,"lc",function(){return fo}),n.d(t,"nc",function(){return vo}),n.d(t,"sc",function(){return yo}),n.d(t,"ic",function(){return Co}),n.d(t,"rc",function(){return So});var i=n("cXLW"),o=n("/IUn"),r=n("fXoL"),s=function(e){return e.AmpLevel="AMP_LEVEL",e.AssertionDirection="ASSERTION_DIRECTION",e.AssertionType="ASSERTION_TYPE",e.ClinicalSignificance="CLINICAL_SIGNIFICANCE",e.DiseaseName="DISEASE_NAME",e.DrugName="DRUG_NAME",e.GeneName="GENE_NAME",e.Id="ID",e.Status="STATUS",e.Summary="SUMMARY",e.VariantName="VARIANT_NAME",e}({}),a=function(e){return e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.Name="NAME",e.NctId="NCT_ID",e.SourceCount="SOURCE_COUNT",e}({}),c=function(e){return e.Conflict="CONFLICT",e.Expired="EXPIRED",e.Missing="MISSING",e.Valid="VALID",e}({}),l=function(e){return e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP",e}({}),u=function(e){return e.Created="CREATED",e.LastModified="LAST_MODIFIED",e}({}),d=function(e){return e.AssertionCount="ASSERTION_COUNT",e.Doid="DOID",e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.GeneCount="GENE_COUNT",e.Name="NAME",e.VariantCount="VARIANT_COUNT",e}({}),p=function(e){return e.Combination="COMBINATION",e.Sequential="SEQUENTIAL",e.Substitutes="SUBSTITUTES",e}({}),h=function(e){return e.AssertionCount="ASSERTION_COUNT",e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.Name="NAME",e.NcitId="NCIT_ID",e}({}),b=function(e){return e.Accepted="ACCEPTED",e.AssertionAccepted="ASSERTION_ACCEPTED",e.AssertionRejected="ASSERTION_REJECTED",e.AssertionReverted="ASSERTION_REVERTED",e.AssertionSubmitted="ASSERTION_SUBMITTED",e.Commented="COMMENTED",e.CuratedSourceSuggestion="CURATED_SOURCE_SUGGESTION",e.Flagged="FLAGGED",e.FlagResolved="FLAG_RESOLVED",e.PublicationSuggested="PUBLICATION_SUGGESTED",e.Rejected="REJECTED",e.RejectedSourceSuggestion="REJECTED_SOURCE_SUGGESTION",e.RequeuedSourceSuggestion="REQUEUED_SOURCE_SUGGESTION",e.Reverted="REVERTED",e.RevisionAccepted="REVISION_ACCEPTED",e.RevisionRejected="REVISION_REJECTED",e.RevisionSuggested="REVISION_SUGGESTED",e.RevisionSuperseded="REVISION_SUPERSEDED",e.Submitted="SUBMITTED",e}({}),m=function(e){return e.AdverseResponse="ADVERSE_RESPONSE",e.Benign="BENIGN",e.BetterOutcome="BETTER_OUTCOME",e.DominantNegative="DOMINANT_NEGATIVE",e.GainOfFunction="GAIN_OF_FUNCTION",e.LikelyBenign="LIKELY_BENIGN",e.LikelyPathogenic="LIKELY_PATHOGENIC",e.LossOfFunction="LOSS_OF_FUNCTION",e.Na="NA",e.Negative="NEGATIVE",e.Neomorphic="NEOMORPHIC",e.Pathogenic="PATHOGENIC",e.PoorOutcome="POOR_OUTCOME",e.Positive="POSITIVE",e.ReducedSensitivity="REDUCED_SENSITIVITY",e.Resistance="RESISTANCE",e.Sensitivityresponse="SENSITIVITYRESPONSE",e.UnalteredFunction="UNALTERED_FUNCTION",e.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",e.Unknown="UNKNOWN",e}({}),f=function(e){return e.DoesNotSupport="DOES_NOT_SUPPORT",e.Na="NA",e.Supports="SUPPORTS",e}({}),g=function(e){return e.A="A",e.B="B",e.C="C",e.D="D",e.E="E",e}({}),v=function(e){return e.ClinicalSignificance="CLINICAL_SIGNIFICANCE",e.Description="DESCRIPTION",e.DiseaseName="DISEASE_NAME",e.DrugName="DRUG_NAME",e.EvidenceDirection="EVIDENCE_DIRECTION",e.EvidenceLevel="EVIDENCE_LEVEL",e.EvidenceRating="EVIDENCE_RATING",e.EvidenceType="EVIDENCE_TYPE",e.GeneSymbol="GENE_SYMBOL",e.Id="ID",e.Status="STATUS",e.VariantName="VARIANT_NAME",e.VariantOrigin="VARIANT_ORIGIN",e}({}),z=function(e){return e.Accepted="ACCEPTED",e.Rejected="REJECTED",e.Submitted="SUBMITTED",e}({}),y=function(e){return e.Diagnostic="DIAGNOSTIC",e.Functional="FUNCTIONAL",e.Oncogenic="ONCOGENIC",e.Predictive="PREDICTIVE",e.Predisposing="PREDISPOSING",e.Prognostic="PROGNOSTIC",e}({}),I=function(e){return e.Open="OPEN",e.Resolved="RESOLVED",e}({}),C=function(e){return e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP",e}({}),O=function(e){return e.AssertionCount="assertionCount",e.DiseaseName="diseaseName",e.DrugName="drugName",e.EntrezSymbol="entrezSymbol",e.EvidenceItemCount="evidenceItemCount",e.GeneAlias="geneAlias",e.VariantCount="variantCount",e}({}),S=function(e){return e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Variant="VARIANT",e}({}),T=function(e){return e.Mention="MENTION",e.Subscription="SUBSCRIPTION",e}({}),E=function(e){return e.Id="ID",e.Name="NAME",e}({}),N=function(e){return e.AssertionCount="ASSERTION_COUNT",e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.HpoId="HPO_ID",e.Name="NAME",e}({}),$=function(e){return e.Read="READ",e.Unread="UNREAD",e}({}),w=function(e){return e.Grch37="GRCH37",e.Grch38="GRCH38",e.Ncbi36="NCBI36",e}({}),D=function(e){return e.Accepted="ACCEPTED",e.New="NEW",e.Rejected="REJECTED",e.Superseded="SUPERSEDED",e}({}),A=function(e){return e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Revision="REVISION",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP",e}({}),x=function(e){return e.Asc="ASC",e.Desc="DESC",e}({}),R=function(e){return e.Asco="ASCO",e.Pubmed="PUBMED",e}({}),k=function(e){return e.Curated="CURATED",e.New="NEW",e.Rejected="REJECTED",e}({}),M=function(e){return e.Citation="CITATION",e.CitationId="CITATION_ID",e.DiseaseName="DISEASE_NAME",e.GeneName="GENE_NAME",e.SourceType="SOURCE_TYPE",e.Submitter="SUBMITTER",e.VariantName="VARIANT_NAME",e}({}),P=function(e){return e.Authors="AUTHORS",e.CitationId="CITATION_ID",e.EvidenceCount="EVIDENCE_COUNT",e.Journal="JOURNAL",e.Name="NAME",e.SourceType="SOURCE_TYPE",e.Year="YEAR",e}({}),j=function(e){return e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Revision="REVISION",e.SourceSuggestion="SOURCE_SUGGESTION",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP",e}({}),L=function(e){return e.Assertion="ASSERTION",e.EvidenceItem="EVIDENCE_ITEM",e.Gene="GENE",e.Revision="REVISION",e.Role="ROLE",e.Variant="VARIANT",e.VariantGroup="VARIANT_GROUP",e}({}),U=function(e){return e.Admin="ADMIN",e.Curator="CURATOR",e.Editor="EDITOR",e}({}),F=function(e){return e.All="ALL",e.WithAccepted="WITH_ACCEPTED",e.WithAcceptedOrSubmitted="WITH_ACCEPTED_OR_SUBMITTED",e.WithSubmitted="WITH_SUBMITTED",e}({}),_=function(e){return e.EvidenceItemCount="EVIDENCE_ITEM_COUNT",e.GeneNames="GENE_NAMES",e.Name="NAME",e.VariantCount="VARIANT_COUNT",e.VariantNames="VARIANT_NAMES",e}({}),V=function(e){return e.CommonGermline="COMMON_GERMLINE",e.GermlineOrSomatic="GERMLINE_OR_SOMATIC",e.Na="NA",e.RareGermline="RARE_GERMLINE",e.Somatic="SOMATIC",e.Unknown="UNKNOWN",e}({}),B=function(e){return e.Name="NAME",e.Soid="SOID",e.VariantCount="VARIANT_COUNT",e}({}),G=function(e){return e.AssertionCount="assertionCount",e.DiseaseName="diseaseName",e.DrugName="drugName",e.EntrezSymbol="entrezSymbol",e.EvidenceItemCount="evidenceItemCount",e.EvidenceScore="evidenceScore",e.VariantName="variantName",e}({});const K=i.a`
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
    `,q=i.a`
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
    `,Y=i.a`
    fragment clinicalTrialPopover on BrowseClinicalTrial {
  id
  name
  nctId
  url
  sourceCount
  evidenceCount
}
    `,H=i.a`
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
    `,W=i.a`
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
    `,X=i.a`
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
    `,Q=i.a`
    fragment DrugBrowseTableRowFields on BrowseDrug {
  id
  name
  ncitId
  drugUrl
  assertionCount
  evidenceCount
}
    `,J=i.a`
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
    `,Z=i.a`
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
    ${J}`,ee=i.a`
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
    `,te=i.a`
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
    `,ne=i.a`
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
    `,ie=i.a`
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
    ${ne}`,oe=i.a`
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
    `,re=i.a`
    fragment QuicksearchResult on SearchResult {
  id
  resultType
  name
  matchingText
}
    `,se=i.a`
    fragment orgPopover on Organization {
  id
  profileImagePath(size: 64)
  name
  description
  url
}
    `,ae=i.a`
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
    `,ce=i.a`
    fragment PhenotypeBrowseTableRowFields on BrowsePhenotype {
  id
  name
  hpoId
  url
  assertionCount
  evidenceCount
}
    `,le=i.a`
    fragment validationError on FieldValidationError {
  fieldName
  error
}
    `,ue=i.a`
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
    `,de=i.a`
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
    `,pe=i.a`
    fragment subscriptionId on Subscription {
  id
  __typename
}
    `,he=i.a`
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
    `,be=i.a`
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
    `,me=i.a`
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
    `,fe=i.a`
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
    `,ge=i.a`
    fragment BrowseVariantGroupRowFields on BrowseVariantGroup {
  id
  name
  geneNames
  variantNames
  variantCount
  evidenceItemCount
}
    `,ve=i.a`
    fragment variantTypePopover on VariantTypePopover {
  id
  name
  url
  soid
  variantCount
}
    `,ze=i.a`
    fragment VariantTypeBrowseTableRowFields on BrowseVariantType {
  id
  name
  soid
  url
  variantCount
}
    `,ye=i.a`
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
    `,Ie=i.a`
    fragment menuVariant on Variant {
  id
  name
}
    `,Ce=i.a`
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
    `,Oe=i.a`
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
    `,Se=i.a`
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
    `,Te=i.a`
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
    `,Ee=i.a`
    fragment GeneTypeaheadFields on Gene {
  id
  name
  geneAliases
  entrezId
}
    `,Ne=i.a`
    fragment SourceTypeaheadResult on Source {
  id
  name
  citation
  citationId
  sourceType
}
    `,$e=i.a`
    fragment CoordinateFields on Coordinate {
  chromosome
  referenceBases
  representativeTranscript
  start
  stop
  variantBases
}
    `,we=i.a`
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
    ${$e}`,De=i.a`
    fragment VariantTypeaheadFields on Variant {
  id
  name
}
    `,Ae=i.a`
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
    `,xe=i.a`
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
    `,Re=i.a`
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
    `,ke=i.a`
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
    `,Me=i.a`
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
    `,Pe=i.a`
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
    `,je=i.a`
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
    `,Le=i.a`
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
    `,Ue=i.a`
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
    `,Fe=i.a`
    fragment SourceDetailFields on Source {
  id
  citation
  sourceUrl
  displayType
  citationId
}
    `,_e=i.a`
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
    `,Ve=i.a`
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
    `,Be=i.a`
    fragment notificationOrganization on Organization {
  id
  name
}
    `,Ge=i.a`
    fragment notificationOriginatingUsers on User {
  id
  displayName
}
    `,Ke=i.a`
    fragment notificationFeedSubjects on EventSubjectWithCount {
  subject {
    id
    __typename
    name
  }
  occuranceCount
}
    `,qe=i.a`
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
    ${J}`,Ye=i.a`
    fragment subscribable on Subscribable {
  id
  entityType
  __typename
}
    `,He=i.a`
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
    `,We=i.a`
    fragment VariantGroupSummaryFields on VariantGroup {
  id
  name
  description
}
    `,Xe=i.a`
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
    `,Qe=i.a`
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
    `,Je=i.a`
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
    ${Qe}`,Ze=i.a`
    query AssertionPopover($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...assertionPopover
  }
}
    ${K}`;let et=(()=>{class e extends o.d{constructor(e){super(e),this.document=Ze}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const tt=i.a`
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
    ${q}`;let nt=(()=>{class e extends o.d{constructor(e){super(e),this.document=tt}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const it=i.a`
    query ClinicalTrialPopover($clinicalTrialId: Int!) {
  clinicalTrials(id: $clinicalTrialId) {
    edges {
      node {
        ...clinicalTrialPopover
      }
    }
  }
}
    ${Y}`;let ot=(()=>{class e extends o.d{constructor(e){super(e),this.document=it}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const rt=i.a`
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
    `;let st=(()=>{class e extends o.d{constructor(e){super(e),this.document=rt}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const at=i.a`
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
    ${H}`;let ct=(()=>{class e extends o.d{constructor(e){super(e),this.document=at}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const lt=i.a`
    query CommentPopover($commentId: Int!) {
  comment(id: $commentId) {
    ...commentPopover
  }
}
    ${W}`;let ut=(()=>{class e extends o.d{constructor(e){super(e),this.document=lt}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const dt=i.a`
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
    `;let pt=(()=>{class e extends o.d{constructor(e){super(e),this.document=dt}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ht=i.a`
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
    ${X}`;let bt=(()=>{class e extends o.d{constructor(e){super(e),this.document=ht}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const mt=i.a`
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
    `;let ft=(()=>{class e extends o.d{constructor(e){super(e),this.document=mt}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const gt=i.a`
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
    ${Q}`;let vt=(()=>{class e extends o.d{constructor(e){super(e),this.document=gt}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const zt=i.a`
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
    ${Z}`;let yt=(()=>{class e extends o.d{constructor(e){super(e),this.document=zt}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const It=i.a`
    query EvidencePopover($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...evidencePopover
  }
}
    ${ee}`;let Ct=(()=>{class e extends o.d{constructor(e){super(e),this.document=It}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ot=i.a`
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
    ${te}`;let St=(()=>{class e extends o.d{constructor(e){super(e),this.document=Ot}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Tt=i.a`
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
    ${ie}`;let Et=(()=>{class e extends o.d{constructor(e){super(e),this.document=Tt}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Nt=i.a`
    query GenePopover($geneId: Int!) {
  gene(id: $geneId) {
    ...genePopover
  }
}
    ${oe}`;let $t=(()=>{class e extends o.d{constructor(e){super(e),this.document=Nt}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const wt=i.a`
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
    `;let Dt=(()=>{class e extends o.d{constructor(e){super(e),this.document=wt}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const At=i.a`
    query Quicksearch($query: String!) {
  search(query: $query) {
    ...QuicksearchResult
  }
}
    ${re}`;let xt=(()=>{class e extends o.d{constructor(e){super(e),this.document=At}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Rt=i.a`
    query OrgPopover($orgId: Int!) {
  organization(id: $orgId) {
    ...orgPopover
  }
}
    ${se}`;let kt=(()=>{class e extends o.d{constructor(e){super(e),this.document=Rt}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Mt=i.a`
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
    ${ae}`;let Pt=(()=>{class e extends o.d{constructor(e){super(e),this.document=Mt}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const jt=i.a`
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
    `;let Lt=(()=>{class e extends o.d{constructor(e){super(e),this.document=jt}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ut=i.a`
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
    ${ce}`;let Ft=(()=>{class e extends o.d{constructor(e){super(e),this.document=Ut}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const _t=i.a`
    mutation AcceptRevision($input: AcceptRevisionsInput!) {
  acceptRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;let Vt=(()=>{class e extends o.c{constructor(e){super(e),this.document=_t}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Bt=i.a`
    mutation RejectRevision($input: RejectRevisionsInput!) {
  rejectRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;let Gt=(()=>{class e extends o.c{constructor(e){super(e),this.document=Bt}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Kt=i.a`
    query ValidateRevisionsForAcceptance($ids: [Int!]!) {
  validateRevisionsForAcceptance(revisionIds: $ids) {
    genericErrors
    validationErrors {
      ...validationError
    }
  }
}
    ${le}`;let qt=(()=>{class e extends o.d{constructor(e){super(e),this.document=Kt}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Yt=i.a`
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
    ${ue}`;let Ht=(()=>{class e extends o.d{constructor(e){super(e),this.document=Yt}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Wt=i.a`
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
    ${de}`;let Xt=(()=>{class e extends o.d{constructor(e){super(e),this.document=Wt}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Qt=i.a`
    query SubscriptionForEntity($subscribable: SubscribableInput!) {
  subscriptionForEntity(subscribable: $subscribable) {
    ...subscriptionId
  }
}
    ${pe}`;let Jt=(()=>{class e extends o.d{constructor(e){super(e),this.document=Qt}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Zt=i.a`
    mutation ModerateEvidenceItem($input: ModerateEvidenceItemInput!) {
  moderateEvidenceItem(input: $input) {
    evidenceItem {
      id
    }
  }
}
    `;let en=(()=>{class e extends o.c{constructor(e){super(e),this.document=Zt}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const tn=i.a`
    mutation ModerateAssertion($input: ModerateAssertionInput!) {
  moderateAssertion(input: $input) {
    assertion {
      id
    }
  }
}
    `;let nn=(()=>{class e extends o.c{constructor(e){super(e),this.document=tn}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const on=i.a`
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
    ${he}`;let rn=(()=>{class e extends o.d{constructor(e){super(e),this.document=on}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();i.a`
    mutation UpdateSourceSuggestionStatus($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;const sn=i.a`
    query SourcePopover($sourceId: Int!) {
  sourcePopover(id: $sourceId) {
    ...sourcePopover
  }
}
    ${be}`;let an=(()=>{class e extends o.d{constructor(e){super(e),this.document=sn}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const cn=i.a`
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
    ${me}`;let ln=(()=>{class e extends o.d{constructor(e){super(e),this.document=cn}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const un=i.a`
    query UserPopover($userId: Int!) {
  user(id: $userId) {
    ...popoverUser
  }
}
    ${fe}`;let dn=(()=>{class e extends o.d{constructor(e){super(e),this.document=un}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const pn=i.a`
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
    ${ge}`;let hn=(()=>{class e extends o.d{constructor(e){super(e),this.document=pn}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const bn=i.a`
    query VariantTypePopover($variantTypeId: Int!) {
  variantTypePopover(id: $variantTypeId) {
    ...variantTypePopover
  }
}
    ${ve}`;let mn=(()=>{class e extends o.d{constructor(e){super(e),this.document=bn}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const fn=i.a`
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
    ${ze}`;let gn=(()=>{class e extends o.d{constructor(e){super(e),this.document=fn}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const vn=i.a`
    query VariantPopover($variantId: Int!) {
  variant(id: $variantId) {
    ...variantPopoverFields
  }
}
    ${ye}`;let zn=(()=>{class e extends o.d{constructor(e){super(e),this.document=vn}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const yn=i.a`
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
    ${Ie}`;let In=(()=>{class e extends o.d{constructor(e){super(e),this.document=yn}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Cn=i.a`
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
    `;let On=(()=>{class e extends o.d{constructor(e){super(e),this.document=Cn}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Sn=i.a`
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
    `;let Tn=(()=>{class e extends o.d{constructor(e){super(e),this.document=Sn}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const En=i.a`
    query ViewerNotificationCount {
  notifications {
    unreadCount
  }
}
    `;let Nn=(()=>{class e extends o.d{constructor(e){super(e),this.document=En}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const $n=i.a`
    mutation AddComment($input: AddCommentInput!) {
  addComment(input: $input) {
    clientMutationId
    comment {
      ...commentListNode
    }
  }
}
    ${H}`;let wn=(()=>{class e extends o.c{constructor(e){super(e),this.document=$n}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Dn=i.a`
    query previewComment($commentText: String!) {
  previewCommentText(commentText: $commentText) {
    ...previewComment
  }
}
    ${Ce}`;let An=(()=>{class e extends o.d{constructor(e){super(e),this.document=Dn}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const xn=i.a`
    query userTypeahead($queryTerm: String!) {
  userTypeahead(queryTerm: $queryTerm) {
    username
  }
}
    `;let Rn=(()=>{class e extends o.d{constructor(e){super(e),this.document=xn}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const kn=i.a`
    query entityTypeahead($queryTerm: String!) {
  entityTypeahead(queryTerm: $queryTerm) {
    entityId
    tagType
    displayName
  }
}
    `;let Mn=(()=>{class e extends o.d{constructor(e){super(e),this.document=kn}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Pn=i.a`
    query DiseaseTypeahead($name: String!) {
  diseaseTypeahead(queryTerm: $name) {
    id
    name
    doid
    diseaseAliases
  }
}
    `;let jn=(()=>{class e extends o.d{constructor(e){super(e),this.document=Pn}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ln=i.a`
    query DrugTypeahead($name: String!) {
  drugTypeahead(queryTerm: $name) {
    id
    name
    ncitId
    drugAliases
  }
}
    `;let Un=(()=>{class e extends o.d{constructor(e){super(e),this.document=Ln}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Fn=i.a`
    query EvidenceItemRevisableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...RevisableEvidenceFields
  }
}
    ${Oe}`;let _n=(()=>{class e extends o.d{constructor(e){super(e),this.document=Fn}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Vn=i.a`
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
    `;let Bn=(()=>{class e extends o.c{constructor(e){super(e),this.document=Vn}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Gn=i.a`
    query EvidenceSubmittableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...SubmittableEvidenceFields
  }
}
    ${Se}`;let Kn=(()=>{class e extends o.d{constructor(e){super(e),this.document=Gn}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const qn=i.a`
    mutation SubmitEvidenceItem($input: SubmitEvidenceItemInput!) {
  submitEvidence(input: $input) {
    clientMutationId
    evidenceItem {
      id
    }
  }
}
    `;let Yn=(()=>{class e extends o.c{constructor(e){super(e),this.document=qn}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Hn=i.a`
    mutation FlagEntity($input: FlagEntityInput!) {
  flagEntity(input: $input) {
    flag {
      id
    }
  }
}
    `;let Wn=(()=>{class e extends o.c{constructor(e){super(e),this.document=Hn}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Xn=i.a`
    mutation ResolveFlag($input: ResolveFlagInput!) {
  resolveFlag(input: $input) {
    flag {
      id
    }
  }
}
    `;let Qn=(()=>{class e extends o.c{constructor(e){super(e),this.document=Xn}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Jn=i.a`
    query GeneRevisableFields($geneId: Int!) {
  gene(id: $geneId) {
    ...RevisableGeneFields
  }
}
    ${Te}`;let Zn=(()=>{class e extends o.d{constructor(e){super(e),this.document=Jn}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ei=i.a`
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
    `;let ti=(()=>{class e extends o.c{constructor(e){super(e),this.document=ei}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ni=i.a`
    query GeneTypeahead($entrezSymbol: String!) {
  geneTypeahead(queryTerm: $entrezSymbol) {
    ...GeneTypeaheadFields
  }
}
    ${Ee}`;let ii=(()=>{class e extends o.d{constructor(e){super(e),this.document=ni}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const oi=i.a`
    query PhenotypeTypeahead($name: String!) {
  phenotypeTypeahead(queryTerm: $name) {
    hpoId
    id
    name
  }
}
    `;let ri=(()=>{class e extends o.d{constructor(e){super(e),this.document=oi}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const si=i.a`
    query CitationTypeahead($partialCitationId: Int!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceTypeaheadResult
  }
}
    ${Ne}`;let ai=(()=>{class e extends o.d{constructor(e){super(e),this.document=si}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ci=i.a`
    query CitationExistenceCheck($sourceType: SourceSource!, $citationId: Int!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;let li=(()=>{class e extends o.d{constructor(e){super(e),this.document=ci}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ui=i.a`
    mutation CreateSourceStub($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      id
      citationId
      sourceType
    }
  }
}
    `;let di=(()=>{class e extends o.c{constructor(e){super(e),this.document=ui}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const pi=i.a`
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
    `;let hi=(()=>{class e extends o.c{constructor(e){super(e),this.document=pi}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const bi=i.a`
    mutation UpdateUserProfile($input: EditUserInput!) {
  editUser(input: $input) {
    user {
      id
    }
  }
}
    `;let mi=(()=>{class e extends o.c{constructor(e){super(e),this.document=bi}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const fi=i.a`
    query Countries {
  countries {
    id
    name
  }
}
    `;let gi=(()=>{class e extends o.d{constructor(e){super(e),this.document=fi}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const vi=i.a`
    query VariantTypeTypeahead($name: String!) {
  variantTypeTypeahead(queryTerm: $name) {
    name
    soid
    id
  }
}
    `;let zi=(()=>{class e extends o.d{constructor(e){super(e),this.document=vi}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const yi=i.a`
    query VariantRevisableFields($variantId: Int!) {
  variant(id: $variantId) {
    ...RevisableVariantFields
  }
}
    ${we}`;let Ii=(()=>{class e extends o.d{constructor(e){super(e),this.document=yi}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ci=i.a`
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
    `;let Oi=(()=>{class e extends o.c{constructor(e){super(e),this.document=Ci}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Si=i.a`
    query VariantTypeahead($name: String!) {
  variants(name: $name, first: 20) {
    nodes {
      ...VariantTypeaheadFields
    }
  }
}
    ${De}`;let Ti=(()=>{class e extends o.d{constructor(e){super(e),this.document=Si}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ei=i.a`
    query AssertionDetail($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionDetailFields
  }
}
    ${Ae}`;let Ni=(()=>{class e extends o.d{constructor(e){super(e),this.document=Ei}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const $i=i.a`
    query AssertionSummary($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionSummaryFields
  }
}
    ${xe}`;let wi=(()=>{class e extends o.d{constructor(e){super(e),this.document=$i}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Di=i.a`
    query ClinicalTrialDetail($clinicalTrialId: Int!) {
  clinicalTrial(id: $clinicalTrialId) {
    id
    name
    nctId
    description
    url
  }
}
    `;let Ai=(()=>{class e extends o.d{constructor(e){super(e),this.document=Di}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const xi=i.a`
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
    `;let Ri=(()=>{class e extends o.d{constructor(e){super(e),this.document=xi}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ki=i.a`
    query DrugDetail($drugId: Int!) {
  drug(id: $drugId) {
    id
    name
    ncitId
    drugUrl
    drugAliases
  }
}
    `;let Mi=(()=>{class e extends o.d{constructor(e){super(e),this.document=ki}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Pi=i.a`
    query EvidenceDetail($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceDetailFields
  }
}
    ${Re}`;let ji=(()=>{class e extends o.d{constructor(e){super(e),this.document=Pi}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Li=i.a`
    query EvidenceSummary($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceSummaryFields
  }
}
    ${ke}`;let Ui=(()=>{class e extends o.d{constructor(e){super(e),this.document=Li}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Fi=i.a`
    query GeneDetail($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneDetailFields
  }
}
    ${Me}`;let _i=(()=>{class e extends o.d{constructor(e){super(e),this.document=Fi}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Vi=i.a`
    query GenesSummary($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneSummaryFields
  }
}
    ${Pe}`;let Bi=(()=>{class e extends o.d{constructor(e){super(e),this.document=Vi}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Gi=i.a`
    query OrganizationDetail($organizationId: Int!) {
  organization(id: $organizationId) {
    ...OrganizationDetailFields
  }
}
    ${je}`;let Ki=(()=>{class e extends o.d{constructor(e){super(e),this.document=Gi}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const qi=i.a`
    query OrganizationGroups($organizationId: Int!) {
  organization(id: $organizationId) {
    subGroups {
      ...OrganizationGroupsFields
    }
  }
}
    ${Le}`;let Yi=(()=>{class e extends o.d{constructor(e){super(e),this.document=qi}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Hi=i.a`
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
    ${Ue}`;let Wi=(()=>{class e extends o.d{constructor(e){super(e),this.document=Hi}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Xi=i.a`
    query PhenotypeDetail($phenotypeId: Int!) {
  phenotype(id: $phenotypeId) {
    id
    name
    hpoId
    url
  }
}
    `;let Qi=(()=>{class e extends o.d{constructor(e){super(e),this.document=Xi}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Ji=i.a`
    query SourceDetail($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceDetailFields
  }
}
    ${Fe}`;let Zi=(()=>{class e extends o.d{constructor(e){super(e),this.document=Ji}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const eo=i.a`
    query SourceSummary($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceSummaryFields
  }
}
    ${_e}`;let to=(()=>{class e extends o.d{constructor(e){super(e),this.document=eo}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const no=i.a`
    query UserDetail($userId: Int!) {
  user(id: $userId) {
    ...UserDetailFields
  }
}
    ${Ve}`;let io=(()=>{class e extends o.d{constructor(e){super(e),this.document=no}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const oo=i.a`
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
    ${Ke}
${Ge}
${Be}
${qe}`;let ro=(()=>{class e extends o.d{constructor(e){super(e),this.document=oo}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const so=i.a`
    mutation UpdateNotificationStatus($input: UpdateNotificationStatusInput!) {
  updateNotificationStatus(input: $input) {
    notifications {
      ...notificationNode
    }
  }
}
    ${qe}`;let ao=(()=>{class e extends o.c{constructor(e){super(e),this.document=so}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const co=i.a`
    mutation Unsubscribe($input: UnsubscribeInput!) {
  unsubscribe(input: $input) {
    unsubscribedEntities {
      ...subscribable
    }
  }
}
    ${Ye}`;let lo=(()=>{class e extends o.c{constructor(e){super(e),this.document=co}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const uo=i.a`
    mutation Subscribe($input: SubscribeInput!) {
  subscribe(input: $input) {
    subscriptions {
      id
    }
  }
}
    `;let po=(()=>{class e extends o.c{constructor(e){super(e),this.document=uo}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const ho=i.a`
    query VariantGroupDetail($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupDetailFields
  }
}
    ${He}`;let bo=(()=>{class e extends o.d{constructor(e){super(e),this.document=ho}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const mo=i.a`
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
    `;let fo=(()=>{class e extends o.d{constructor(e){super(e),this.document=mo}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const go=i.a`
    query VariantGroupsSummary($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupSummaryFields
  }
}
    ${We}`;let vo=(()=>{class e extends o.d{constructor(e){super(e),this.document=go}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const zo=i.a`
    query VariantTypeDetail($variantTypeId: Int!) {
  variantType(id: $variantTypeId) {
    id
    name
    soid
    description
    url
  }
}
    `;let yo=(()=>{class e extends o.d{constructor(e){super(e),this.document=zo}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Io=i.a`
    query VariantDetail($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantDetailFields
  }
}
    ${Xe}`;let Co=(()=>{class e extends o.d{constructor(e){super(e),this.document=Io}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();const Oo=i.a`
    query VariantSummary($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantSummaryFields
  }
}
    ${Je}`;let So=(()=>{class e extends o.d{constructor(e){super(e),this.document=Oo}}return e.\u0275fac=function(t){return new(t||e)(r.Yb(o.b))},e.\u0275prov=r.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},lnp5:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var i=n("lJxs"),o=n("UXun"),r=n("wO+i"),s=n("JX91"),a=n("l/kO"),c=n("fXoL"),l=n("tk/3");const u={mostRecentOrg:void 0,signedIn:!1,isAdmin:!1,isEditor:!1,isCurator:!1,canCurate:!1,canModerate:!1,invalidCoi:!0};let d=(()=>{class e{constructor(e,t){function n(e){return!(!e||e.role!==a.fc.Admin)}function c(e){return!(!e||e.role!==a.fc.Editor&&e.role!==a.fc.Admin)}function l(e){return!(!e||e.role!==a.fc.Curator)}function d(e){return!(!e||e.role!==a.fc.Curator&&e.role!==a.fc.Editor&&e.role!==a.fc.Admin)}function p(e){var t,n;return!(!e||e.role!==a.fc.Editor&&e.role!==a.fc.Admin||!e.mostRecentConflictOfInterestStatement||(null===(t=e.mostRecentConflictOfInterestStatement)||void 0===t?void 0:t.coiStatus)!=a.t.Conflict&&(null===(n=e.mostRecentConflictOfInterestStatement)||void 0===n?void 0:n.coiStatus)!=a.t.Valid)}function h(e){return e.mostRecentOrganizationId?e.organizations.find(t=>t.id===e.mostRecentOrganizationId):void 0}this.viewerBaseGQL=e,this.http=t,this.queryRef=this.viewerBaseGQL.watch(),this.data$=this.queryRef.valueChanges.pipe(Object(i.a)(e=>({data:e.data,loading:e.loading,networkStatus:e.networkStatus})),Object(o.a)(1)),this.isLoading$=this.data$.pipe(Object(r.a)("loading"),Object(s.a)(!0)),this.viewer$=this.data$.pipe(Object(r.a)("data","viewer"),Object(i.a)(e=>Object.assign(Object.assign({},e),{signedIn:null!==e,signedOut:null===e,canCurate:d(e),canModerate:p(e),isAdmin:n(e),isEditor:c(e),isCurator:l(e),organizations:null===e?[]:e.organizations,mostRecentOrg:null===e?void 0:h(e),invalidCoi:c(e)&&(!e.mostRecentConflictOfInterestStatement||e.mostRecentConflictOfInterestStatement.coiStatus===a.t.Expired||e.mostRecentConflictOfInterestStatement.coiStatus===a.t.Missing)})),Object(s.a)(u),Object(o.a)(1)),this.signedIn$=this.viewer$.pipe(Object(i.a)(e=>e.signedIn)),this.signedOut$=this.viewer$.pipe(Object(i.a)(e=>e.signedOut)),this.isAdmin$=this.viewer$.pipe(Object(i.a)(e=>n(e))),this.isEditor$=this.viewer$.pipe(Object(i.a)(e=>c(e))),this.isCurator$=this.viewer$.pipe(Object(i.a)(e=>l(e))),this.canCurate$=this.viewer$.pipe(Object(i.a)(e=>d(e))),this.canModerate$=this.viewer$.pipe(Object(i.a)(e=>p(e)))}signOut(){this.http.get("/api/sign_out").subscribe(e=>{this.refetch()})}refetch(){this.queryRef.refetch()}ngOnDestroy(){}}return e.\u0275fac=function(t){return new(t||e)(c.Yb(a.Ac),c.Yb(l.b))},e.\u0275prov=c.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},qAZ0:function(e,t,n){"use strict";n.d(t,"a",function(){return $}),n.d(t,"b",function(){return w});var i=n("mrSG"),o=n("cH1L"),r=n("2Suw"),s=n("/KA4"),a=n("XNiG"),c=n("2Vo4"),l=n("jtHE"),u=n("PqYM"),d=n("JX91"),p=n("/uUt"),h=n("eIep"),b=n("zx2A");class m{constructor(e){this.durationSelector=e}call(e,t){return t.subscribe(new f(e,this.durationSelector))}}class f extends b.b{constructor(e,t){super(e),this.durationSelector=t,this.hasValue=!1}_next(e){try{const t=this.durationSelector.call(this,e);t&&this._tryNext(e,t)}catch(t){this.destination.error(t)}}_complete(){this.emitValue(),this.destination.complete()}_tryNext(e,t){let n=this.durationSubscription;this.value=e,this.hasValue=!0,n&&(n.unsubscribe(),this.remove(n)),n=Object(b.c)(t,new b.a(this)),n&&!n.closed&&this.add(this.durationSubscription=n)}notifyNext(){this.emitValue()}notifyComplete(){this.emitValue()}emitValue(){if(this.hasValue){const e=this.value,t=this.durationSubscription;t&&(this.durationSubscription=void 0,t.unsubscribe(),this.remove(t)),this.value=void 0,this.hasValue=!1,super._next(e)}}}var g=n("1G5W"),v=n("GU7r"),z=n("ofXK"),y=n("fXoL");function I(e,t){1&e&&(y.Ub(0,"span",3),y.Pb(1,"i",4),y.Pb(2,"i",4),y.Pb(3,"i",4),y.Pb(4,"i",4),y.Tb())}function C(e,t){}function O(e,t){if(1&e&&(y.Ub(0,"div",8),y.Gc(1),y.Tb()),2&e){const e=y.ec(2);y.Cb(1),y.Hc(e.nzTip)}}function S(e,t){if(1&e&&(y.Ub(0,"div"),y.Ub(1,"div",5),y.Ec(2,C,0,0,"ng-template",6),y.Ec(3,O,2,1,"div",7),y.Tb(),y.Tb()),2&e){const e=y.ec(),t=y.uc(1);y.Cb(1),y.Gb("ant-spin-rtl","rtl"===e.dir)("ant-spin-spinning",e.isLoading)("ant-spin-lg","large"===e.nzSize)("ant-spin-sm","small"===e.nzSize)("ant-spin-show-text",e.nzTip),y.Cb(1),y.lc("ngTemplateOutlet",e.nzIndicator||t),y.Cb(1),y.lc("ngIf",e.nzTip)}}function T(e,t){if(1&e&&(y.Ub(0,"div",9),y.jc(1),y.Tb()),2&e){const e=y.ec();y.Gb("ant-spin-blur",e.isLoading)}}const E=["*"],N="spin";let $=(()=>{class e{constructor(e,t,n){this.nzConfigService=e,this.cdr=t,this.directionality=n,this._nzModuleName=N,this.nzIndicator=null,this.nzSize="default",this.nzTip=null,this.nzDelay=0,this.nzSimple=!1,this.nzSpinning=!0,this.destroy$=new a.a,this.spinning$=new c.a(this.nzSpinning),this.delay$=new l.a(1),this.isLoading=!1,this.dir="ltr"}ngOnInit(){var e;this.delay$.pipe(Object(d.a)(this.nzDelay),Object(p.a)(),Object(h.a)(e=>{return 0===e?this.spinning$:this.spinning$.pipe((t=t=>Object(u.a)(t?e:0),e=>e.lift(new m(t))));var t}),Object(g.a)(this.destroy$)).subscribe(e=>{this.isLoading=e,this.cdr.markForCheck()}),this.nzConfigService.getConfigChangeEventForComponent(N).pipe(Object(g.a)(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),null===(e=this.directionality.change)||void 0===e||e.pipe(Object(g.a)(this.destroy$)).subscribe(e=>{this.dir=e,this.cdr.detectChanges()}),this.dir=this.directionality.value}ngOnChanges(e){const{nzSpinning:t,nzDelay:n}=e;t&&this.spinning$.next(this.nzSpinning),n&&this.delay$.next(this.nzDelay)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return e.\u0275fac=function(t){return new(t||e)(y.Ob(r.a),y.Ob(y.h),y.Ob(o.b,8))},e.\u0275cmp=y.Ib({type:e,selectors:[["nz-spin"]],hostVars:2,hostBindings:function(e,t){2&e&&y.Gb("ant-spin-nested-loading",!t.nzSimple)},inputs:{nzIndicator:"nzIndicator",nzSize:"nzSize",nzTip:"nzTip",nzDelay:"nzDelay",nzSimple:"nzSimple",nzSpinning:"nzSpinning"},exportAs:["nzSpin"],features:[y.Ab],ngContentSelectors:E,decls:4,vars:2,consts:[["defaultTemplate",""],[4,"ngIf"],["class","ant-spin-container",3,"ant-spin-blur",4,"ngIf"],[1,"ant-spin-dot","ant-spin-dot-spin"],[1,"ant-spin-dot-item"],[1,"ant-spin"],[3,"ngTemplateOutlet"],["class","ant-spin-text",4,"ngIf"],[1,"ant-spin-text"],[1,"ant-spin-container"]],template:function(e,t){1&e&&(y.kc(),y.Ec(0,I,5,0,"ng-template",null,0,y.Fc),y.Ec(2,S,4,12,"div",1),y.Ec(3,T,2,2,"div",2)),2&e&&(y.Cb(2),y.lc("ngIf",t.isLoading),y.Cb(1),y.lc("ngIf",!t.nzSimple))},directives:[z.q,z.x],encapsulation:2}),Object(i.b)([Object(r.b)(),Object(i.c)("design:type",Object)],e.prototype,"nzIndicator",void 0),Object(i.b)([Object(s.b)(),Object(i.c)("design:type",Object)],e.prototype,"nzDelay",void 0),Object(i.b)([Object(s.a)(),Object(i.c)("design:type",Object)],e.prototype,"nzSimple",void 0),Object(i.b)([Object(s.a)(),Object(i.c)("design:type",Object)],e.prototype,"nzSpinning",void 0),e})(),w=(()=>{class e{}return e.\u0275mod=y.Mb({type:e}),e.\u0275inj=y.Lb({factory:function(t){return new(t||e)},imports:[[o.a,z.c,v.b]]}),e})()},"wO+i":function(e,t,n){"use strict";n.d(t,"a",function(){return o});var i=n("lJxs");function o(...e){const t=e.length;if(0===t)throw new Error("list of properties cannot be empty.");return n=>Object(i.a)(function(e,t){return n=>{let i=n;for(let o=0;o<t;o++){const t=null!=i?i[e[o]]:void 0;if(void 0===t)return;i=t}return i}}(e,t))(n)}},waJF:function(e,t,n){"use strict";n.d(t,"a",function(){return b});var i=n("ofXK"),o=n("3Pt+"),r=n("9A8T"),s=n("JA5x"),a=n("Wfee"),c=n("ocnv"),l=n("CtWS"),u=n("bE2y"),d=n("qAZ0"),p=n("OzZK"),h=n("fXoL");let b=(()=>{class e{}return e.\u0275mod=h.Mb({type:e}),e.\u0275inj=h.Lb({factory:function(t){return new(t||e)},imports:[[i.c,o.k,c.e,o.s,r.c,s.c,a.b,u.c,p.c,d.b,l.a]]}),e})()}}]);