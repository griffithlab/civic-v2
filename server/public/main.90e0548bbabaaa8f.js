"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[179],{4265:(bt,Te,c)=>{c.d(Te,{T6:()=>B,VD:()=>V,WE:()=>H,Yt:()=>I,lC:()=>y,py:()=>N,rW:()=>r,s:()=>w,ve:()=>u,vq:()=>U});var n=c(6337);function r(x,ne,Q){return{r:255*(0,n.sh)(x,255),g:255*(0,n.sh)(ne,255),b:255*(0,n.sh)(Q,255)}}function y(x,ne,Q){x=(0,n.sh)(x,255),ne=(0,n.sh)(ne,255),Q=(0,n.sh)(Q,255);var ye=Math.max(x,ne,Q),ve=Math.min(x,ne,Q),ae=0,te=0,q=(ye+ve)/2;if(ye===ve)te=0,ae=0;else{var j=ye-ve;switch(te=q>.5?j/(2-ye-ve):j/(ye+ve),ye){case x:ae=(ne-Q)/j+(ne<Q?6:0);break;case ne:ae=(Q-x)/j+2;break;case Q:ae=(x-ne)/j+4}ae/=6}return{h:ae,s:te,l:q}}function e(x,ne,Q){return Q<0&&(Q+=1),Q>1&&(Q-=1),Q<1/6?x+6*Q*(ne-x):Q<.5?ne:Q<2/3?x+(ne-x)*(2/3-Q)*6:x}function u(x,ne,Q){var ye,ve,ae;if(x=(0,n.sh)(x,360),ne=(0,n.sh)(ne,100),Q=(0,n.sh)(Q,100),0===ne)ve=Q,ae=Q,ye=Q;else{var te=Q<.5?Q*(1+ne):Q+ne-Q*ne,q=2*Q-te;ye=e(q,te,x+1/3),ve=e(q,te,x),ae=e(q,te,x-1/3)}return{r:255*ye,g:255*ve,b:255*ae}}function N(x,ne,Q){x=(0,n.sh)(x,255),ne=(0,n.sh)(ne,255),Q=(0,n.sh)(Q,255);var ye=Math.max(x,ne,Q),ve=Math.min(x,ne,Q),ae=0,te=ye,q=ye-ve,j=0===ye?0:q/ye;if(ye===ve)ae=0;else{switch(ye){case x:ae=(ne-Q)/q+(ne<Q?6:0);break;case ne:ae=(Q-x)/q+2;break;case Q:ae=(x-ne)/q+4}ae/=6}return{h:ae,s:j,v:te}}function H(x,ne,Q){x=6*(0,n.sh)(x,360),ne=(0,n.sh)(ne,100),Q=(0,n.sh)(Q,100);var ye=Math.floor(x),ve=x-ye,ae=Q*(1-ne),te=Q*(1-ve*ne),q=Q*(1-(1-ve)*ne),j=ye%6;return{r:255*[Q,te,ae,ae,q,Q][j],g:255*[q,Q,Q,te,ae,ae][j],b:255*[ae,ae,q,Q,Q,te][j]}}function U(x,ne,Q,ye){var ve=[(0,n.FZ)(Math.round(x).toString(16)),(0,n.FZ)(Math.round(ne).toString(16)),(0,n.FZ)(Math.round(Q).toString(16))];return ye&&ve[0].startsWith(ve[0].charAt(1))&&ve[1].startsWith(ve[1].charAt(1))&&ve[2].startsWith(ve[2].charAt(1))?ve[0].charAt(0)+ve[1].charAt(0)+ve[2].charAt(0):ve.join("")}function w(x,ne,Q,ye,ve){var ae=[(0,n.FZ)(Math.round(x).toString(16)),(0,n.FZ)(Math.round(ne).toString(16)),(0,n.FZ)(Math.round(Q).toString(16)),(0,n.FZ)(L(ye))];return ve&&ae[0].startsWith(ae[0].charAt(1))&&ae[1].startsWith(ae[1].charAt(1))&&ae[2].startsWith(ae[2].charAt(1))&&ae[3].startsWith(ae[3].charAt(1))?ae[0].charAt(0)+ae[1].charAt(0)+ae[2].charAt(0)+ae[3].charAt(0):ae.join("")}function L(x){return Math.round(255*parseFloat(x)).toString(16)}function B(x){return V(x)/255}function V(x){return parseInt(x,16)}function I(x){return{r:x>>16,g:(65280&x)>>8,b:255&x}}},1309:(bt,Te,c)=>{c.d(Te,{R:()=>n});var n={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"}},6379:(bt,Te,c)=>{c.d(Te,{uA:()=>e});var n=c(4265),r=c(1309),y=c(6337);function e(V){var I={r:0,g:0,b:0},x=1,ne=null,Q=null,ye=null,ve=!1,ae=!1;return"string"==typeof V&&(V=function L(V){if(0===(V=V.trim().toLowerCase()).length)return!1;var I=!1;if(r.R[V])V=r.R[V],I=!0;else if("transparent"===V)return{r:0,g:0,b:0,a:0,format:"name"};var x=S.rgb.exec(V);return x?{r:x[1],g:x[2],b:x[3]}:(x=S.rgba.exec(V))?{r:x[1],g:x[2],b:x[3],a:x[4]}:(x=S.hsl.exec(V))?{h:x[1],s:x[2],l:x[3]}:(x=S.hsla.exec(V))?{h:x[1],s:x[2],l:x[3],a:x[4]}:(x=S.hsv.exec(V))?{h:x[1],s:x[2],v:x[3]}:(x=S.hsva.exec(V))?{h:x[1],s:x[2],v:x[3],a:x[4]}:(x=S.hex8.exec(V))?{r:(0,n.VD)(x[1]),g:(0,n.VD)(x[2]),b:(0,n.VD)(x[3]),a:(0,n.T6)(x[4]),format:I?"name":"hex8"}:(x=S.hex6.exec(V))?{r:(0,n.VD)(x[1]),g:(0,n.VD)(x[2]),b:(0,n.VD)(x[3]),format:I?"name":"hex"}:(x=S.hex4.exec(V))?{r:(0,n.VD)(x[1]+x[1]),g:(0,n.VD)(x[2]+x[2]),b:(0,n.VD)(x[3]+x[3]),a:(0,n.T6)(x[4]+x[4]),format:I?"name":"hex8"}:!!(x=S.hex3.exec(V))&&{r:(0,n.VD)(x[1]+x[1]),g:(0,n.VD)(x[2]+x[2]),b:(0,n.VD)(x[3]+x[3]),format:I?"name":"hex"}}(V)),"object"==typeof V&&(B(V.r)&&B(V.g)&&B(V.b)?(I=(0,n.rW)(V.r,V.g,V.b),ve=!0,ae="%"===String(V.r).substr(-1)?"prgb":"rgb"):B(V.h)&&B(V.s)&&B(V.v)?(ne=(0,y.JX)(V.s),Q=(0,y.JX)(V.v),I=(0,n.WE)(V.h,ne,Q),ve=!0,ae="hsv"):B(V.h)&&B(V.s)&&B(V.l)&&(ne=(0,y.JX)(V.s),ye=(0,y.JX)(V.l),I=(0,n.ve)(V.h,ne,ye),ve=!0,ae="hsl"),Object.prototype.hasOwnProperty.call(V,"a")&&(x=V.a)),x=(0,y.Yq)(x),{ok:ve,format:V.format||ae,r:Math.min(255,Math.max(I.r,0)),g:Math.min(255,Math.max(I.g,0)),b:Math.min(255,Math.max(I.b,0)),a:x}}var H="(?:".concat("[-\\+]?\\d*\\.\\d+%?",")|(?:").concat("[-\\+]?\\d+%?",")"),U="[\\s|\\(]+(".concat(H,")[,|\\s]+(").concat(H,")[,|\\s]+(").concat(H,")\\s*\\)?"),w="[\\s|\\(]+(".concat(H,")[,|\\s]+(").concat(H,")[,|\\s]+(").concat(H,")[,|\\s]+(").concat(H,")\\s*\\)?"),S={CSS_UNIT:new RegExp(H),rgb:new RegExp("rgb"+U),rgba:new RegExp("rgba"+w),hsl:new RegExp("hsl"+U),hsla:new RegExp("hsla"+w),hsv:new RegExp("hsv"+U),hsva:new RegExp("hsva"+w),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function B(V){return!!S.CSS_UNIT.exec(String(V))}},6337:(bt,Te,c)=>{function n(U,w){(function y(U){return"string"==typeof U&&-1!==U.indexOf(".")&&1===parseFloat(U)})(U)&&(U="100%");var S=function e(U){return"string"==typeof U&&-1!==U.indexOf("%")}(U);return U=360===w?U:Math.min(w,Math.max(0,parseFloat(U))),S&&(U=parseInt(String(U*w),10)/100),Math.abs(U-w)<1e-6?1:U=360===w?(U<0?U%w+w:U%w)/parseFloat(String(w)):U%w/parseFloat(String(w))}function r(U){return Math.min(1,Math.max(0,U))}function u(U){return U=parseFloat(U),(isNaN(U)||U<0||U>1)&&(U=1),U}function N(U){return U<=1?"".concat(100*Number(U),"%"):U}function H(U){return 1===U.length?"0"+U:String(U)}c.d(Te,{FZ:()=>H,JX:()=>N,V2:()=>r,Yq:()=>u,sh:()=>n})},3369:(bt,Te,c)=>{c.d(Te,{G:()=>Y});var n=c(9212),r=c(6814),y=c(4190),e=c(551),u=c(5695),N=c(7417),H=c(5676),U=c(7398),w=c(2181),S=c(313),L=c(2962),B=c(8125),V=c(3317),I=c(8091),x=c(2616);function ne(ee,se){if(1&ee&&(n._UZ(0,"i",9),n.ALo(1,"entityColor"),n._uU(2)),2&ee){const ze=n.oxw().ngIf;n.Q6J("nzTwotoneColor",n.lcZ(1,2,"ClinicalTrial")),n.xp6(2),n.hij(" ",ze.nctId," ")}}function Q(ee,se){if(1&ee&&(n.TgZ(0,"cvc-link-tag",10),n._uU(1," View on clinicaltrials.gov "),n.qZA()),2&ee){const ze=n.oxw().ngIf;n.Q6J("href",ze.url)}}function ye(ee,se){if(1&ee&&(n.ynx(0),n.TgZ(1,"nz-card",2),n.YNc(2,ne,3,4,"ng-template",null,3,n.W1O)(4,Q,2,1,"ng-template",null,4,n.W1O),n.TgZ(6,"nz-descriptions",5)(7,"nz-descriptions-item",6),n._uU(8),n.qZA(),n.TgZ(9,"nz-descriptions-item",7),n._uU(10),n.qZA(),n.TgZ(11,"nz-descriptions-item",8),n._uU(12),n.qZA()()(),n.BQk()),2&ee){const ze=se.ngIf,Me=n.MAs(3),Ye=n.MAs(5);n.xp6(),n.Q6J("nzTitle",Me)("nzExtra",Ye),n.xp6(5),n.Q6J("nzColumn",2),n.xp6(2),n.hij(" ",ze.name," "),n.xp6(2),n.hij(" ",ze.sourceCount," "),n.xp6(2),n.hij(" ",ze.evidenceCount," ")}}let ve=(()=>{class ee{constructor(ze){this.gql=ze}ngOnInit(){if(null==this.clinicalTrialId)throw new Error("cvc-clinical-trial-popover requires valid clinicalTrialId input.");this.clinicalTrial$=this.gql.watch({clinicalTrialId:this.clinicalTrialId}).valueChanges.pipe((0,U.U)(({data:ze})=>ze?.clinicalTrials.edges[0]?.node),(0,w.h)(H.ep))}}return ee.\u0275fac=function(ze){return new(ze||ee)(n.Y36(S.UIR))},ee.\u0275cmp=n.Xpm({type:ee,selectors:[["cvc-clinical-trial-popover"]],inputs:{clinicalTrialId:"clinicalTrialId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["linkout",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Name","nzSpan","2"],["nzTitle","Sources","nzSpan","2"],["nzTitle","Evidence","nzSpan","2"],["nz-icon","","nzTheme","twotone","nzType","civic-clinicaltrial",3,"nzTwotoneColor"],[3,"href"]],template:function(ze,Me){1&ze&&(n.TgZ(0,"div",0),n.YNc(1,ye,13,6,"ng-container",1),n.ALo(2,"ngrxPush"),n.qZA()),2&ze&&(n.xp6(),n.Q6J("ngIf",n.lcZ(2,1,Me.clinicalTrial$)))},dependencies:[r.O5,L.bd,e.Ls,B.R7,B.uj,V.l,I.fM,x.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),ee})();function ae(ee,se){}function te(ee,se){if(1&ee&&(n.ynx(0),n.TgZ(1,"a",4),n.YNc(2,ae,0,0,"ng-template",5),n.qZA(),n.BQk()),2&ee){const ze=n.oxw(),Me=n.MAs(2);n.xp6(),n.Q6J("routerLink",ze.clinicalTrial.link),n.xp6(),n.Q6J("ngTemplateOutlet",Me)}}function q(ee,se){}function j(ee,se){if(1&ee&&n._UZ(0,"cvc-clinical-trial-popover",8),2&ee){const ze=n.oxw(2);n.Q6J("clinicalTrialId",ze.clinicalTrial.id)}}function k(ee,se){if(1&ee&&(n.TgZ(0,"nz-tag",6),n.YNc(1,q,0,0,"ng-template",5),n.qZA(),n.YNc(2,j,1,1,"ng-template",null,7,n.W1O)),2&ee){const ze=n.MAs(3),Me=n.oxw(),Ye=n.MAs(6);n.Q6J("nzPopoverMouseEnterDelay",.5)("nzPopoverContent",ze)("nzPopoverTrigger",Me.enablePopover?"hover":null),n.xp6(),n.Q6J("ngTemplateOutlet",Ye)}}function M(ee,se){}function K(ee,se){if(1&ee&&n.YNc(0,M,0,0,"ng-template",5),2&ee){n.oxw();const ze=n.MAs(2);n.Q6J("ngTemplateOutlet",ze)}}function G(ee,se){if(1&ee&&(n._UZ(0,"i",9),n.ALo(1,"entityColor"),n._uU(2)),2&ee){const ze=n.oxw();n.Q6J("nzTwotoneColor",n.lcZ(1,2,"ClinicalTrial")),n.xp6(2),n.hij(" ",ze.clinicalTrial.nctId,"\n")}}let Y=(()=>{class ee{set clinicalTrial(ze){if(!ze)throw new Error("clinical-trial-tag clinicalTrial Input requires LinkableClinicalTrial.");this._clinicalTrial=ze}get clinicalTrial(){return this._clinicalTrial}constructor(){this.linked=!0,this.enablePopover=!0}}return ee.\u0275fac=function(ze){return new(ze||ee)},ee.\u0275cmp=n.Xpm({type:ee,selectors:[["cvc-clinical-trial-tag"]],inputs:{clinicalTrial:"clinicalTrial",linked:"linked",enablePopover:"enablePopover"},decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger"],["clinicalTrialPopover",""],[3,"clinicalTrialId"],["nz-icon","","nzTheme","twotone","nzType","civic-clinicaltrial",3,"nzTwotoneColor"]],template:function(ze,Me){if(1&ze&&n.YNc(0,te,3,2,"ng-container",0)(1,k,4,4,"ng-template",null,1,n.W1O)(3,K,1,1,"ng-template",null,2,n.W1O)(5,G,3,4,"ng-template",null,3,n.W1O),2&ze){const Ye=n.MAs(4);n.Q6J("ngIf",Me.linked)("ngIfElse",Ye)}},dependencies:[r.O5,r.tP,y.rH,e.Ls,u.j,N.lU,ve,x.a],styles:["[_nghost-%COMP%]{display:block}"]}),ee})()},4605:(bt,Te,c)=>{c.d(Te,{N:()=>B});var n=c(6814),r=c(4190),y=c(5695),e=c(7417),u=c(6067),N=c(2524),H=c(2962),U=c(8125),w=c(551),S=c(9212);let L=(()=>{class V{}return V.\u0275fac=function(x){return new(x||V)},V.\u0275mod=S.oAB({type:V}),V.\u0275inj=S.cJS({imports:[n.ez,H.vh,w.PV,U.q6,u.X,N.s]}),V})(),B=(()=>{class V{}return V.\u0275fac=function(x){return new(x||V)},V.\u0275mod=S.oAB({type:V}),V.\u0275inj=S.cJS({imports:[n.ez,r.Bz,w.PV,y.X,e.$6,L,N.s]}),V})()},2851:(bt,Te,c)=>{c.d(Te,{I:()=>te});var n=c(5676),r=c(7398),y=c(2181),e=c(9212),u=c(313),N=c(6814),H=c(2962),U=c(8125),w=c(551),S=c(2392),L=c(3317),B=c(8091),V=c(5869);function I(q,j){if(1&q&&(e._UZ(0,"i",12),e._uU(1),e.ALo(2,"truncate")),2&q){const k=e.oxw().ngIf;e.xp6(),e.hij(" ",e.xi3(2,1,k.name,50)," ")}}function x(q,j){if(1&q&&(e.TgZ(0,"cvc-link-tag",14),e._uU(1),e.qZA()),2&q){const k=e.oxw(2).ngIf;e.Q6J("href",k.diseaseUrl),e.xp6(),e.hij(" DOID: ",k.doid," ")}}function ne(q,j){if(1&q&&e.YNc(0,x,2,2,"cvc-link-tag",13),2&q){const k=e.oxw().ngIf,M=e.MAs(7);e.Q6J("ngIf",k.doid)("ngIfElse",M)}}function Q(q,j){1&q&&(e.TgZ(0,"span",15),e._uU(1,"No DOID"),e.qZA())}function ye(q,j){if(1&q&&(e.TgZ(0,"nz-descriptions-item",16),e._uU(1),e.qZA()),2&q){const k=e.oxw().ngIf;e.xp6(),e.hij(" ",k.name," ")}}function ve(q,j){if(1&q&&(e.TgZ(0,"nz-descriptions-item",17),e._uU(1),e.qZA()),2&q){const k=e.oxw().ngIf;e.xp6(),e.hij(" ",k.diseaseAliases.join(", ")," ")}}function ae(q,j){if(1&q&&(e.ynx(0),e.TgZ(1,"nz-card",2),e.YNc(2,I,3,4,"ng-template",null,3,e.W1O)(4,ne,1,2,"ng-template",null,4,e.W1O)(6,Q,2,0,"ng-template",null,5,e.W1O),e.TgZ(8,"nz-descriptions",6),e.YNc(9,ye,2,1,"nz-descriptions-item",7)(10,ve,2,1,"nz-descriptions-item",8),e.TgZ(11,"nz-descriptions-item",9),e._uU(12),e.qZA(),e.TgZ(13,"nz-descriptions-item",10),e._uU(14),e.qZA(),e.TgZ(15,"nz-descriptions-item",11),e._uU(16),e.qZA()()(),e.BQk()),2&q){const k=j.ngIf,M=e.MAs(3),K=e.MAs(5);e.xp6(),e.Q6J("nzTitle",M)("nzExtra",K),e.xp6(7),e.Q6J("nzColumn",1),e.xp6(),e.Q6J("ngIf",k.name.length>50),e.xp6(),e.Q6J("ngIf",k.diseaseAliases.length>0),e.xp6(2),e.hij(" ",k.assertionCount," "),e.xp6(2),e.hij(" ",k.evidenceItemCount," "),e.xp6(2),e.hij(" ",k.molecularProfileCount," ")}}let te=(()=>{class q{constructor(k){this.gql=k}ngOnInit(){if(null==this.diseaseId)throw new Error("cvc-disease-popover requires valid diseaseId input.");this.disease$=this.gql.watch({diseaseId:this.diseaseId}).valueChanges.pipe((0,r.U)(({data:k})=>k?.diseasePopover),(0,y.h)(n.ep))}}return q.\u0275fac=function(k){return new(k||q)(e.Y36(u.k7O))},q.\u0275cmp=e.Xpm({type:q,selectors:[["cvc-disease-popover"]],inputs:{diseaseId:"diseaseId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["linkout",""],["noDoid",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Name","nzSpan","2",4,"ngIf"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Assertions","nzSpan","1"],["nzTitle","Evidence","nzSpan","1"],["nzTitle","Molecular Profiles","nzSpan","1"],["nz-icon","","nzType","civic-disease","nzTheme","twotone","nzTwotoneColor","#E62F76"],["tooltip","View on disease-ontology.org",3,"href",4,"ngIf","ngIfElse"],["tooltip","View on disease-ontology.org",3,"href"],["nz-typography","","nzType","secondary"],["nzTitle","Name","nzSpan","2"],["nzTitle","Aliases","nzSpan","2"]],template:function(k,M){1&k&&(e.TgZ(0,"div",0),e.YNc(1,ae,17,8,"ng-container",1),e.ALo(2,"ngrxPush"),e.qZA()),2&k&&(e.xp6(),e.Q6J("ngIf",e.lcZ(2,1,M.disease$)))},dependencies:[N.O5,H.bd,U.R7,U.uj,w.Ls,S.ZU,L.l,B.fM,V.W],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),q})()},5687:(bt,Te,c)=>{c.d(Te,{t:()=>w});var n=c(6814),r=c(2962),y=c(8125),e=c(551),u=c(6067),N=c(2392),H=c(2524),U=c(9212);let w=(()=>{class S{}return S.\u0275fac=function(B){return new(B||S)},S.\u0275mod=U.oAB({type:S}),S.\u0275inj=U.cJS({imports:[n.ez,r.vh,y.q6,e.PV,N.ZJ,H.s,u.X]}),S})()},9775:(bt,Te,c)=>{c.d(Te,{n:()=>ae});var n=c(8130),r=c(9212),y=c(6814),e=c(4190),u=c(5695),N=c(7417),H=c(551),U=c(2851),w=c(5869);function S(te,q){}function L(te,q){if(1&te&&(r.ynx(0),r.TgZ(1,"a",4),r.YNc(2,S,0,0,"ng-template",5),r.qZA(),r.BQk()),2&te){const j=r.oxw(),k=r.MAs(2);r.xp6(),r.Q6J("routerLink",j.disease.link),r.xp6(),r.Q6J("ngTemplateOutlet",k)}}function B(te,q){}function V(te,q){if(1&te&&r._UZ(0,"cvc-disease-popover",8),2&te){const j=r.oxw(2);r.Q6J("diseaseId",j.disease.id)}}function I(te,q){if(1&te){const j=r.EpF();r.TgZ(0,"nz-tag",6),r.NdJ("nzOnClose",function(M){r.CHM(j);const K=r.oxw();return r.KtG(K.itemClosed(M))}),r.YNc(1,B,0,0,"ng-template",5),r.qZA(),r.YNc(2,V,1,1,"ng-template",null,7,r.W1O)}if(2&te){const j=r.MAs(3),k=r.oxw(),M=r.MAs(6);r.Q6J("nzPopoverMouseEnterDelay",k.onCloseClicked?0:.5)("nzPopoverContent",j)("nzPopoverTrigger",k.enablePopover?"hover":null)("nzMode",k.onCloseClicked?"closeable":"default"),r.xp6(),r.Q6J("ngTemplateOutlet",M)}}function x(te,q){}function ne(te,q){if(1&te&&r.YNc(0,x,0,0,"ng-template",5),2&te){r.oxw();const j=r.MAs(2);r.Q6J("ngTemplateOutlet",j)}}function Q(te,q){if(1&te&&(r.ynx(0),r._uU(1),r.ALo(2,"truncate"),r.BQk()),2&te){const j=r.oxw(2);r.xp6(),r.hij(" ",r.xi3(2,1,j.disease.name,27)," ")}}function ye(te,q){if(1&te&&r._uU(0),2&te){const j=r.oxw(2);r.hij(" ",j.disease.name," ")}}function ve(te,q){if(1&te&&(r._UZ(0,"i",9),r.YNc(1,Q,3,4,"ng-container",0)(2,ye,1,1,"ng-template",null,10,r.W1O)),2&te){const j=r.MAs(3),k=r.oxw();r.xp6(),r.Q6J("ngIf",k.truncateLongName)("ngIfElse",j)}}let ae=(()=>{class te extends n.a{constructor(){super(...arguments),this.enablePopover=!0,this.truncateLongName=!1}set disease(j){if(!j)throw new Error("disease-tag disease Input requires LinkableDisease.");this._disease=j}get disease(){return this._disease}idFunction(){return this.disease.id}}return te.\u0275fac=(()=>{let q;return function(k){return(q||(q=r.n5z(te)))(k||te)}})(),te.\u0275cmp=r.Xpm({type:te,selectors:[["cvc-disease-tag"]],inputs:{disease:"disease",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[r.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["diseasePopover",""],[3,"diseaseId"],["nz-icon","","nzType","civic-disease","nzTheme","twotone","nzTwotoneColor","#E62F76"],["fullName",""]],template:function(j,k){if(1&j&&r.YNc(0,L,3,2,"ng-container",0)(1,I,4,5,"ng-template",null,1,r.W1O)(3,ne,1,1,"ng-template",null,2,r.W1O)(5,ve,4,2,"ng-template",null,3,r.W1O),2&j){const M=r.MAs(4);r.Q6J("ngIf",k.linked)("ngIfElse",M)}},dependencies:[y.O5,y.tP,e.rH,u.j,N.lU,H.Ls,U.I,w.W],encapsulation:2,changeDetection:0}),te})()},3396:(bt,Te,c)=>{c.d(Te,{Q:()=>w});var n=c(6814),r=c(4190),y=c(5695),e=c(7417),u=c(551),N=c(5687),H=c(2524),U=c(9212);let w=(()=>{class S{}return S.\u0275fac=function(B){return new(B||S)},S.\u0275mod=U.oAB({type:S}),S.\u0275inj=U.cJS({imports:[n.ez,r.Bz,y.X,e.$6,u.PV,H.s,N.t]}),S})()},8213:(bt,Te,c)=>{c.d(Te,{_:()=>gt});var n=c(7398),r=c(2181),y=c(5676),e=c(9212),u=c(313),N=c(6814),H=c(4190),U=c(551),w=c(2962),S=c(95),L=c(8125),B=c(5695),V=c(2574),I=c(2392),x=c(4770),ne=c(9775),Q=c(3897),ye=c(4138),ve=c(2384),ae=c(2606),te=c(750),q=c(8091),j=c(6967),k=c(2616);function M(qe,Zt){if(1&qe&&(e.ynx(0),e._UZ(1,"i",17),e.ALo(2,"entityColor"),e._uU(3),e.BQk()),2&qe){const on=e.oxw(2).ngIf;e.xp6(),e.Q6J("nzTwotoneColor",e.lcZ(2,2,"EvidenceItem")),e.xp6(2),e.hij(" ",on.name," ")}}function K(qe,Zt){if(1&qe&&e._UZ(0,"cvc-status-tag",18),2&qe){const on=e.oxw(2).ngIf;e.Q6J("status",on.status)}}function G(qe,Zt){1&qe&&(e.TgZ(0,"nz-space"),e.YNc(1,M,4,4,"ng-container",15)(2,K,1,1,"cvc-status-tag",16),e.qZA())}function Y(qe,Zt){if(1&qe&&e._UZ(0,"cvc-molecular-profile-tag",19),2&qe){const on=e.oxw().ngIf;e.Q6J("molecularProfile",on.molecularProfile)("enablePopover",!1)("truncateLongName",!0)}}function ee(qe,Zt){if(1&qe&&(e.ynx(0),e._uU(1),e.BQk()),2&qe){const on=Zt.ngIf;e.xp6(),e.hij(" ",on," ")}}function se(qe,Zt){if(1&qe&&(e.TgZ(0,"nz-descriptions",20)(1,"nz-descriptions-item",21),e._UZ(2,"cvc-mp-tag-name",22),e.qZA(),e.TgZ(3,"nz-descriptions-item",23),e._UZ(4,"cvc-source-tag",24),e.qZA()()),2&qe){const on=e.oxw().ngIf;e.Q6J("nzColumn",1),e.xp6(2),e.Q6J("nameSegments",on.molecularProfile.parsedName)("enablePopover",!1),e.xp6(2),e.Q6J("source",on.source)("enablePopover",!1)}}function ze(qe,Zt){if(1&qe&&(e.ynx(0),e._UZ(1,"cvc-disease-tag",35),e.BQk()),2&qe){const on=e.oxw(2).ngIf;e.xp6(),e.Q6J("enablePopover",!1)("disease",on.disease)("truncateLongName",!0)}}function Me(qe,Zt){1&qe&&e._uU(0," N/A ")}function Ye(qe,Zt){if(1&qe&&(e.TgZ(0,"span"),e._UZ(1,"cvc-therapy-tag",38),e.qZA()),2&qe){const on=Zt.$implicit;e.xp6(),e.Q6J("enablePopover",!1)("therapy",on)("truncateLongName",!0)}}function Ut(qe,Zt){if(1&qe&&(e.ynx(0),e._uU(1),e.ALo(2,"titlecase"),e.BQk()),2&qe){const on=e.oxw(3).ngIf;e.xp6(),e.hij(" ",e.lcZ(2,1,on.therapyInteractionType)," ")}}function Et(qe,Zt){if(1&qe&&(e.TgZ(0,"nz-descriptions-item",36),e.YNc(1,Ye,2,3,"span",37)(2,Ut,3,3,"ng-container",1),e.qZA()),2&qe){const on=e.oxw(2).ngIf;e.xp6(),e.Q6J("ngForOf",on.therapies),e.xp6(),e.Q6J("ngIf",on.therapies.length>1)}}function Cn(qe,Zt){if(1&qe&&(e.TgZ(0,"span"),e._UZ(1,"cvc-phenotype-tag",40),e.qZA()),2&qe){const on=Zt.$implicit;e.xp6(),e.Q6J("enablePopover",!1)("phenotype",on)}}function Ot(qe,Zt){if(1&qe&&(e.TgZ(0,"nz-descriptions-item",39),e.YNc(1,Cn,2,2,"span",37),e.qZA()),2&qe){const on=e.oxw(2).ngIf;e.xp6(),e.Q6J("ngForOf",on.phenotypes)}}function hn(qe,Zt){if(1&qe&&(e.TgZ(0,"nz-descriptions",20)(1,"nz-descriptions-item",25),e._uU(2),e.qZA(),e.TgZ(3,"nz-descriptions-item",26),e._uU(4),e.ALo(5,"evidenceEnumDisplay"),e.qZA(),e.TgZ(6,"nz-descriptions-item",27),e._uU(7),e.ALo(8,"evidenceEnumDisplay"),e.qZA(),e.TgZ(9,"nz-descriptions-item",28),e._uU(10),e.ALo(11,"evidenceEnumDisplay"),e.qZA(),e.TgZ(12,"nz-descriptions-item",29),e._uU(13),e._UZ(14,"i",30),e.qZA(),e.TgZ(15,"nz-descriptions-item",31),e.YNc(16,ze,2,3,"ng-container",9)(17,Me,1,0,"ng-template",null,32,e.W1O),e.qZA(),e.YNc(19,Et,3,2,"nz-descriptions-item",33)(20,Ot,2,1,"nz-descriptions-item",34),e.qZA()),2&qe){const on=e.MAs(18),Dn=e.oxw().ngIf;e.Q6J("nzColumn",2),e.xp6(2),e.hij(" ",Dn.evidenceLevel," "),e.xp6(2),e.hij(" ",e.lcZ(5,10,Dn.evidenceType)," "),e.xp6(3),e.hij(" ",e.lcZ(8,12,Dn.evidenceDirection)," "),e.xp6(3),e.hij(" ",e.lcZ(11,14,Dn.significance)," "),e.xp6(3),e.hij(" ",Dn.evidenceRating,""),e.xp6(3),e.Q6J("ngIf",Dn.disease)("ngIfElse",on),e.xp6(3),e.Q6J("ngIf",Dn.therapies.length>0),e.xp6(),e.Q6J("ngIf",Dn.phenotypes.length>0)}}function Kt(qe,Zt){if(1&qe&&(e.TgZ(0,"a",41)(1,"nz-tag",42),e._UZ(2,"i",43),e._uU(3),e.qZA()()),2&qe){const on=e.oxw().ngIf;e.MGl("routerLink","/evidence/",on.id,"/flags"),e.xp6(3),e.hij(" Flags (",on.flags.totalCount,") ")}}function cn(qe,Zt){if(1&qe&&(e.TgZ(0,"a",41)(1,"nz-tag",44),e._UZ(2,"i",45),e._uU(3),e.qZA()()),2&qe){const on=e.oxw().ngIf;e.MGl("routerLink","/evidence/",on.id,"/revisions"),e.xp6(3),e.hij(" Revisions (",on.revisions.totalCount,") ")}}function vn(qe,Zt){if(1&qe&&(e.TgZ(0,"a",41)(1,"nz-tag",46),e._UZ(2,"i",47),e._uU(3),e.qZA()()),2&qe){const on=e.oxw().ngIf;e.MGl("routerLink","/evidence/",on.id,"/comments"),e.xp6(3),e.hij(" Comments (",on.comments.totalCount,") ")}}function lt(qe,Zt){if(1&qe&&(e.ynx(0),e.TgZ(1,"nz-card",3),e.YNc(2,G,3,0,"ng-template",null,4,e.W1O)(4,Y,1,3,"ng-template",null,5,e.W1O),e.TgZ(6,"nz-row")(7,"nz-col",6)(8,"div",7)(9,"p",8),e.YNc(10,ee,2,1,"ng-container",9),e.qZA()()()(),e.TgZ(11,"nz-space",10),e.YNc(12,se,5,5,"nz-descriptions",11)(13,hn,21,16,"nz-descriptions",11),e.qZA(),e.TgZ(14,"nz-row",12)(15,"nz-col",6)(16,"nz-space",13),e.YNc(17,Kt,4,2,"a",14)(18,cn,4,2,"a",14)(19,vn,4,2,"a",14),e.qZA()()()(),e.BQk()),2&qe){const on=Zt.ngIf,Dn=e.MAs(3),Bn=e.MAs(5);e.oxw();const rn=e.MAs(4);e.xp6(),e.Q6J("nzTitle",Dn)("nzExtra",Bn),e.xp6(8),e.Q6J("nzEllipsisRows",4),e.xp6(),e.Q6J("ngIf",on.description)("ngIfElse",rn)}}function Je(qe,Zt){1&qe&&e._uU(0," Evidence item has not been provided a description.\n")}let gt=(()=>{class qe{constructor(on){this.gql=on}ngOnInit(){if(null==this.evidenceId)throw new Error("cvc-evidence-popover requires valid evidenceId input.");this.evidence$=this.gql.watch({evidenceId:this.evidenceId}).valueChanges.pipe((0,n.U)(({data:on})=>on?.evidenceItem),(0,r.h)(y.ep))}}return qe.\u0275fac=function(on){return new(on||qe)(e.Y36(u.Ybm))},qe.\u0275cmp=e.Xpm({type:qe,selectors:[["cvc-evidence-popover"]],inputs:{evidenceId:"evidenceId"},decls:5,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["noDescription",""],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["molecularProfile",""],["nzSpan","24"],[1,"popover-text"],["nz-typography","","nzEllipsis","","nzExpandable","",3,"nzEllipsisRows"],[4,"ngIf","ngIfElse"],["nzDirection","vertical","nzSize","small"],["nzSize","small","nzBordered","true",3,"nzColumn",4,"nzSpaceItem"],["id","entity-child-counts"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],[4,"nzSpaceItem"],["style","font-weight: normal",3,"status",4,"nzSpaceItem"],["nz-icon","","nzTheme","twotone","nzType","civic-evidence",3,"nzTwotoneColor"],[2,"font-weight","normal",3,"status"],[3,"molecularProfile","enablePopover","truncateLongName"],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","MP Expression"],[3,"nameSegments","enablePopover"],["nzTitle","Source","nzSpan","2"],[3,"source","enablePopover"],["nzTitle","Level"],["nzTitle","Type"],["nzTitle","Direction"],["nzTitle","Clinical Significance","nzSpan","2"],["nzTitle","Rating"],["nz-icon","","nzType","star","nzTheme","fill"],["nzTitle","Disease"],["noDisease",""],["nzTitle","Therapies","nzSpan","2",4,"ngIf"],["nzTitle","Phenotypes","nzSpan","2",4,"ngIf"],[3,"enablePopover","disease","truncateLongName"],["nzTitle","Therapies","nzSpan","2"],[4,"ngFor","ngForOf"],[3,"enablePopover","therapy","truncateLongName"],["nzTitle","Phenotypes","nzSpan","2"],[3,"enablePopover","phenotype"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(on,Dn){1&on&&(e.TgZ(0,"div",0),e.YNc(1,lt,20,5,"ng-container",1),e.ALo(2,"ngrxPush"),e.qZA(),e.YNc(3,Je,1,0,"ng-template",null,2,e.W1O)),2&on&&(e.xp6(),e.Q6J("ngIf",e.lcZ(2,1,Dn.evidence$)))},dependencies:[N.sg,N.O5,H.rH,U.Ls,w.bd,S.t3,S.SK,L.R7,L.uj,B.j,V.NU,V.$1,I.ZU,x.T,ne.n,Q.i,ye.T,ve.h,ae.p,te.C,N.rS,q.fM,j.Do,k.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),qe})()},1855:(bt,Te,c)=>{c.d(Te,{f:()=>ve});var n=c(6814),r=c(2962),y=c(95),e=c(8125),u=c(4190),N=c(5695),H=c(3396),U=c(3043),w=c(2574),S=c(551),L=c(2524),B=c(8641),V=c(2655),I=c(2392),x=c(4717),ne=c(8527),Q=c(6061),ye=c(9212);let ve=(()=>{class ae{}return ae.\u0275fac=function(q){return new(q||ae)},ae.\u0275mod=ye.oAB({type:ae}),ae.\u0275inj=ye.cJS({imports:[n.ez,u.Bz,S.PV,r.vh,y.Jb,e.q6,N.X,w.zf,I.ZJ,L.s,Q.N,H.Q,U.y,B.s,V.x,ne.u,x.r]}),ae})()},3743:(bt,Te,c)=>{c.d(Te,{y:()=>j});var n=c(5676),r=c(7398),y=c(2181),e=c(9212),u=c(313),N=c(6814),H=c(4190),U=c(2962),w=c(95),S=c(8125),L=c(5695),B=c(551),V=c(2574),I=c(8091),x=c(2616);function ne(k,M){if(1&k&&(e._UZ(0,"i",11),e.ALo(1,"entityColor"),e._uU(2)),2&k){const K=e.oxw().ngIf;e.Q6J("nzTwotoneColor",e.lcZ(1,3,"Feature")),e.xp6(2),e.AsE(" ",K.featureInstance.__typename," - ",K.name," ")}}function Q(k,M){if(1&k&&(e.TgZ(0,"nz-tag"),e._uU(1),e.qZA()),2&k){const K=M.$implicit;e.xp6(),e.Oqu(K)}}function ye(k,M){if(1&k&&(e.TgZ(0,"nz-descriptions-item",12),e.YNc(1,Q,2,1,"nz-tag",13),e.qZA()),2&k){const K=e.oxw().ngIf;e.xp6(),e.Q6J("ngForOf",K.featureAliases)}}function ve(k,M){if(1&k&&(e.TgZ(0,"a",14)(1,"nz-tag",15),e._UZ(2,"i",16),e._uU(3),e.qZA()()),2&k){const K=e.oxw().ngIf;e.MGl("routerLink","/features/",K.id,"/flags"),e.xp6(3),e.hij(" Flags (",K.flags.totalCount,") ")}}function ae(k,M){if(1&k&&(e.TgZ(0,"a",14)(1,"nz-tag",17),e._UZ(2,"i",18),e._uU(3," Revisions "),e.qZA()()),2&k){const K=e.oxw().ngIf;e.MGl("routerLink","/features/",K.id,"/revisions")}}function te(k,M){if(1&k&&(e.TgZ(0,"a",14)(1,"nz-tag",19),e._UZ(2,"i",20),e._uU(3," Comments "),e.qZA()()),2&k){const K=e.oxw().ngIf;e.MGl("routerLink","/features/",K.id,"/comments")}}function q(k,M){if(1&k&&(e.ynx(0),e.TgZ(1,"nz-card",2),e.YNc(2,ne,3,5,"ng-template",null,3,e.W1O),e.TgZ(4,"nz-descriptions",4),e.YNc(5,ye,2,1,"nz-descriptions-item",5),e.TgZ(6,"nz-descriptions-item",6),e._uU(7),e.qZA()(),e.TgZ(8,"nz-row",7)(9,"nz-col",8)(10,"nz-space",9),e.YNc(11,ve,4,2,"a",10)(12,ae,4,1,"a",10)(13,te,4,1,"a",10),e.qZA()()()(),e.BQk()),2&k){const K=M.ngIf,G=e.MAs(3);e.xp6(),e.Q6J("nzTitle",G),e.xp6(3),e.Q6J("nzColumn",2),e.xp6(),e.Q6J("ngIf",K.featureAliases.length>0),e.xp6(2),e.hij(" ",K.variants.totalCount," ")}}let j=(()=>{class k{constructor(K){this.gql=K}ngOnInit(){if(null==this.featureId)throw new Error("cvc-feature-popover requires valid featureId input.");this.feature$=this.gql.watch({featureId:this.featureId}).valueChanges.pipe((0,r.U)(({data:K})=>K?.feature),(0,y.h)(n.ep))}}return k.\u0275fac=function(K){return new(K||k)(e.Y36(u.Dnw))},k.\u0275cmp=e.Xpm({type:k,selectors:[["cvc-feature-popover"]],inputs:{featureId:"featureId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle"],["cardTitle",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Variants"],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzTheme","twotone","nzType","civic-feature",3,"nzTwotoneColor"],["nzTitle","Aliases","nzSpan","2"],[4,"ngFor","ngForOf"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(K,G){1&K&&(e.TgZ(0,"div",0),e.YNc(1,q,14,4,"ng-container",1),e.ALo(2,"ngrxPush"),e.qZA()),2&K&&(e.xp6(),e.Q6J("ngIf",e.lcZ(2,1,G.feature$)))},dependencies:[N.sg,N.O5,H.rH,U.bd,w.t3,w.SK,S.R7,S.uj,L.j,B.Ls,V.NU,V.$1,I.fM,x.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),k})()},9910:(bt,Te,c)=>{c.d(Te,{N:()=>L});var n=c(6814),r=c(4190),y=c(2524),e=c(2962),u=c(8125),N=c(95),H=c(551),U=c(2574),w=c(5695),S=c(9212);let L=(()=>{class B{}return B.\u0275fac=function(I){return new(I||B)},B.\u0275mod=S.oAB({type:B}),B.\u0275inj=S.cJS({imports:[n.ez,r.Bz,e.vh,N.Jb,u.q6,w.X,H.PV,U.zf,y.s]}),B})()},355:(bt,Te,c)=>{c.d(Te,{K:()=>k});var n=c(8130),r=c(2023),y=c(9212),e=c(6814),u=c(4190),N=c(5695),H=c(7417),U=c(551),w=c(3743),S=c(3103),L=c(5869),B=c(2616);function V(M,K){}function I(M,K){if(1&M&&(y.ynx(0),y.TgZ(1,"a",4),y.YNc(2,V,0,0,"ng-template",5),y.qZA(),y.BQk()),2&M){const G=y.oxw(),Y=y.MAs(2);y.xp6(),y.Q6J("routerLink",G.feature.link),y.xp6(),y.Q6J("ngTemplateOutlet",Y)}}function x(M,K){}function ne(M,K){if(1&M&&y._UZ(0,"cvc-feature-popover",8),2&M){const G=y.oxw(2);y.Q6J("featureId",G.feature.id)}}const Q=M=>({deprecated:M});function ye(M,K){if(1&M){const G=y.EpF();y.TgZ(0,"nz-tag",6),y.NdJ("nzOnClose",function(ee){y.CHM(G);const se=y.oxw();return y.KtG(se.itemClosed(ee))}),y.YNc(1,x,0,0,"ng-template",5),y.qZA(),y.YNc(2,ne,1,1,"ng-template",null,7,y.W1O)}if(2&M){const G=y.MAs(3),Y=y.oxw(),ee=y.MAs(6);y.Q6J("ngClass",y.VKq(6,Q,Y.feature.deprecated))("nzPopoverMouseEnterDelay",Y.onCloseClicked?0:.5)("nzPopoverContent",G)("nzPopoverTrigger",Y.enablePopover?"hover":null)("nzMode",Y.onCloseClicked?"closeable":"default"),y.xp6(),y.Q6J("ngTemplateOutlet",ee)}}function ve(M,K){}function ae(M,K){if(1&M&&y.YNc(0,ve,0,0,"ng-template",5),2&M){y.oxw();const G=y.MAs(2);y.Q6J("ngTemplateOutlet",G)}}function te(M,K){if(1&M&&(y.ynx(0),y._uU(1),y.ALo(2,"truncate"),y.BQk()),2&M){const G=y.oxw(2);y.xp6(),y.hij(" ",y.xi3(2,1,G.feature.name,12)," ")}}function q(M,K){if(1&M&&y._uU(0),2&M){const G=y.oxw(2);y.hij(" ",G.feature.name," ")}}function j(M,K){if(1&M&&(y.TgZ(0,"cvc-icon-badges",9),y._UZ(1,"i",10),y.ALo(2,"entityColor"),y.qZA(),y.YNc(3,te,3,4,"ng-container",0)(4,q,1,1,"ng-template",null,11,y.W1O)),2&M){const G=y.MAs(5),Y=y.oxw();y.Q6J("flagged",Y.feature.flagged)("entityColor",Y.iconColor),y.xp6(),y.Q6J("nzTwotoneColor",y.lcZ(2,5,"Feature")),y.xp6(2),y.Q6J("ngIf",Y.truncateLongName)("ngIfElse",G)}}let k=(()=>{class M extends n.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1,this.iconColor=(0,r.f)("Gene")}idFunction(){return this.feature.id}ngOnInit(){if(super.ngOnInit(),void 0===this.feature)throw new Error("cvc-feature-tag requires LinkableFeature input, none supplied.")}}return M.\u0275fac=function(G){return new(G||M)},M.\u0275cmp=y.Xpm({type:M,selectors:[["cvc-feature-tag"]],inputs:{feature:"feature",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[y.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","",3,"ngClass","nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["featurePopover",""],[3,"featureId"],[3,"flagged","entityColor"],["nz-icon","","nzType","civic-feature","nzTheme","twotone",3,"nzTwotoneColor"],["fullName",""]],template:function(G,Y){if(1&G&&y.YNc(0,I,3,2,"ng-container",0)(1,ye,4,8,"ng-template",null,1,y.W1O)(3,ae,1,1,"ng-template",null,2,y.W1O)(5,j,6,7,"ng-template",null,3,y.W1O),2&G){const ee=y.MAs(4);y.Q6J("ngIf",Y.linked)("ngIfElse",ee)}},dependencies:[e.mk,e.O5,e.tP,u.rH,N.j,H.lU,U.Ls,w.y,S.b,L.W,B.a],styles:["[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.submitted, [_nghost-%COMP%]     nz-tag.accepted, [_nghost-%COMP%]     nz-tag.deprecated{border-right-width:2px}[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.deprecated{border-color:#e6e6e6;background-color:#fff;color:#999999d9}[_nghost-%COMP%]     nz-tag.submitted{border-color:#ffe58f}[_nghost-%COMP%]     nz-tag.accepted{border-color:#b7eb8f}[_nghost-%COMP%]{display:inline-block}"],changeDetection:0}),M})()},2647:(bt,Te,c)=>{c.d(Te,{k:()=>L});var n=c(6814),r=c(4190),y=c(5695),e=c(551),u=c(7417),N=c(2524),H=c(3640),U=c(3146),w=c(9910),S=c(9212);let L=(()=>{class B{}return B.\u0275fac=function(I){return new(I||B)},B.\u0275mod=S.oAB({type:B}),B.\u0275inj=S.cJS({imports:[n.ez,r.Bz,y.X,u.$6,e.PV,H.mS,N.s,w.N,U.C]}),B})()},156:(bt,Te,c)=>{c.d(Te,{_:()=>G});var n=c(5676),r=c(7398),y=c(2181),e=c(9212),u=c(313),N=c(6814),H=c(4190),U=c(2962),w=c(95),S=c(8125),L=c(5695),B=c(551),V=c(2574),I=c(1887),x=c(750),ne=c(8091);function Q(Y,ee){if(1&Y&&(e._UZ(0,"i",16),e._uU(1)),2&Y){const se=e.oxw().ngIf;e.xp6(),e.hij(" ",se.name," ")}}function ye(Y,ee){if(1&Y&&(e.TgZ(0,"nz-descriptions-item",17),e._uU(1),e.qZA()),2&Y){const se=e.oxw().ngIf;e.xp6(),e.hij(" ",se.evidenceItems.totalCount," ")}}function ve(Y,ee){if(1&Y&&(e.TgZ(0,"nz-descriptions-item",18),e._uU(1),e.qZA()),2&Y){const se=e.oxw().ngIf;e.xp6(),e.hij(" ",se.assertions.totalCount," ")}}function ae(Y,ee){if(1&Y&&(e.TgZ(0,"nz-tag"),e._uU(1),e.qZA()),2&Y){const se=ee.$implicit;e.xp6(),e.Oqu(se)}}function te(Y,ee){if(1&Y&&(e.ynx(0),e.TgZ(1,"cvc-tag-list"),e.YNc(2,ae,2,1,"nz-tag",19),e.qZA(),e.BQk()),2&Y){const se=e.oxw().ngIf;e.xp6(2),e.Q6J("ngForOf",se.molecularProfileAliases)}}function q(Y,ee){1&Y&&(e.TgZ(0,"span",20),e._uU(1,"None specified"),e.qZA())}function j(Y,ee){if(1&Y&&(e.TgZ(0,"a",21)(1,"nz-tag",22),e._UZ(2,"i",23),e._uU(3),e.qZA()()),2&Y){const se=e.oxw().ngIf;e.MGl("routerLink","/molecular-profiles/",se.id,"/flags"),e.xp6(3),e.hij(" Flags (",se.flags.totalCount,") ")}}function k(Y,ee){if(1&Y&&(e.TgZ(0,"a",21)(1,"nz-tag",24),e._UZ(2,"i",25),e._uU(3),e.qZA()()),2&Y){const se=e.oxw().ngIf;e.MGl("routerLink","/molecular-profiles/",se.id,"/revisions"),e.xp6(3),e.hij(" Revisions (",se.revisions.totalCount,") ")}}function M(Y,ee){if(1&Y&&(e.TgZ(0,"a",21)(1,"nz-tag",26),e._UZ(2,"i",27),e._uU(3),e.qZA()()),2&Y){const se=e.oxw().ngIf;e.MGl("routerLink","/molecular-profiles/",se.id,"/comments"),e.xp6(3),e.hij(" Comments (",se.comments.totalCount,") ")}}function K(Y,ee){if(1&Y&&(e.ynx(0),e.TgZ(1,"nz-card",2),e.YNc(2,Q,2,1,"ng-template",null,3,e.W1O),e.TgZ(4,"nz-descriptions",4)(5,"nz-descriptions-item",5),e._UZ(6,"cvc-mp-tag-name",6),e.qZA(),e.YNc(7,ye,2,1,"nz-descriptions-item",7)(8,ve,2,1,"nz-descriptions-item",8),e.TgZ(9,"nz-descriptions-item",9),e.YNc(10,te,3,1,"ng-container",10)(11,q,2,0,"ng-template",null,11,e.W1O),e.qZA()(),e.TgZ(13,"nz-row",12)(14,"nz-col",13)(15,"nz-space",14),e.YNc(16,j,4,2,"a",15)(17,k,4,2,"a",15)(18,M,4,2,"a",15),e.qZA()()()(),e.BQk()),2&Y){const se=ee.ngIf,ze=e.MAs(3),Me=e.MAs(12);e.xp6(),e.Q6J("nzTitle",ze),e.xp6(3),e.Q6J("nzColumn",2),e.xp6(2),e.Q6J("nameSegments",se.parsedName)("enablePopover",!1),e.xp6(),e.Q6J("ngIf",se.evidenceItems.totalCount>0),e.xp6(),e.Q6J("ngIf",se.assertions.totalCount>0),e.xp6(2),e.Q6J("ngIf",se.molecularProfileAliases.length>0)("ngIfElse",Me)}}let G=(()=>{class Y{constructor(se){this.gql=se}ngOnInit(){if(void 0===this.molecularProfileId)throw new Error("Must pass a molecular profile ID into the molecular profile popover component.");this.molecularProfile$=this.gql.watch({molecularProfileId:this.molecularProfileId}).valueChanges.pipe((0,r.U)(({data:se})=>se?.molecularProfile),(0,y.h)(n.ep))}}return Y.\u0275fac=function(se){return new(se||Y)(e.Y36(u.DkJ))},Y.\u0275cmp=e.Xpm({type:Y,selectors:[["cvc-molecular-profile-popover"]],inputs:{molecularProfileId:"molecularProfileId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle"],["cardTitle",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","MP Expression","nzSpan","2"],[3,"nameSegments","enablePopover"],["nzTitle","Evidence Items","nzSpan","2",4,"ngIf"],["nzTitle","Assertions","nzSpan","2",4,"ngIf"],["nzTitle","Aliases"],[4,"ngIf","ngIfElse"],["noAliases",""],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzType","civic:molecularprofile"],["nzTitle","Evidence Items","nzSpan","2"],["nzTitle","Assertions","nzSpan","2"],[4,"ngFor","ngForOf"],["nz-typography","","nzType","secondary"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(se,ze){1&se&&(e.TgZ(0,"div",0),e.YNc(1,K,19,8,"ng-container",1),e.ALo(2,"ngrxPush"),e.qZA()),2&se&&(e.xp6(),e.Q6J("ngIf",e.lcZ(2,1,ze.molecularProfile$)))},dependencies:[N.sg,N.O5,H.rH,U.bd,w.t3,w.SK,S.R7,S.uj,L.j,B.Ls,V.NU,V.$1,I.$,x.C,ne.fM],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),Y})()},2064:(bt,Te,c)=>{c.d(Te,{_:()=>I});var n=c(6814),r=c(4190),y=c(2962),e=c(95),u=c(8125),N=c(5695),H=c(551),U=c(2574),w=c(6067),S=c(4717),L=c(366),B=c(2647),V=c(9212);let I=(()=>{class x{}return x.\u0275fac=function(Q){return new(Q||x)},x.\u0275mod=V.oAB({type:x}),x.\u0275inj=V.cJS({imports:[n.ez,r.Bz,y.vh,e.Jb,u.q6,N.X,H.PV,U.zf,B.k,w.X,L.$,S.r]}),x})()},750:(bt,Te,c)=>{c.d(Te,{C:()=>B});var n=c(9212),r=c(6814),y=c(9408),e=c(355),u=c(8184);function N(V,I){if(1&V&&n._UZ(0,"span",3),2&V){const x=n.oxw().$implicit;n.Q6J("innerHtml",x.text,n.oJD)}}function H(V,I){if(1&V&&n._UZ(0,"cvc-feature-tag",6),2&V){const x=n.oxw().$implicit,ne=n.oxw(3);n.Q6J("feature",x)("enablePopover",ne.enablePopover)}}function U(V,I){if(1&V&&(n.ynx(0),n.YNc(1,H,1,2,"cvc-feature-tag",5),n.BQk()),2&V){const x=I.$implicit;n.xp6(),n.Q6J("ngIf","Feature"==x.__typename)}}const w=V=>[V];function S(V,I){if(1&V&&(n.ynx(0),n.TgZ(1,"cvc-tag-group"),n.YNc(2,U,2,1,"ng-container",0),n._UZ(3,"cvc-variant-tag",4),n.qZA(),n.BQk()),2&V){const x=n.oxw(),ne=x.index,Q=x.$implicit,ye=n.oxw();n.xp6(2),n.Q6J("ngForOf",n.VKq(3,w,ye.nameSegments[ne-1])),n.xp6(),n.Q6J("variant",Q)("enablePopover",ye.enablePopover)}}function L(V,I){if(1&V&&(n.ynx(0),n.YNc(1,N,1,1,"span",1)(2,S,4,5,"ng-container",2),n.BQk()),2&V){const x=I.$implicit;n.xp6(),n.Q6J("ngIf","MolecularProfileTextSegment"==x.__typename),n.xp6(),n.Q6J("ngIf","Variant"==x.__typename)}}let B=(()=>{class V{constructor(){this.enablePopover=!0}ngOnInit(){if(void 0===this.nameSegments)throw new Error("Must pass a list of molecular profile name segments into mp name component.")}}return V.\u0275fac=function(x){return new(x||V)},V.\u0275cmp=n.Xpm({type:V,selectors:[["cvc-mp-tag-name"]],inputs:{nameSegments:"nameSegments",enablePopover:"enablePopover"},decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],["class","text-segment",3,"innerHtml",4,"ngIf"],[4,"ngIf"],[1,"text-segment",3,"innerHtml"],[3,"variant","enablePopover"],[3,"feature","enablePopover",4,"ngIf"],[3,"feature","enablePopover"]],template:function(x,ne){1&x&&n.YNc(0,L,3,2,"ng-container",0),2&x&&n.Q6J("ngForOf",ne.nameSegments)},dependencies:[r.sg,r.O5,y.I,e.K,u.O],styles:[".text-segment[_ngcontent-%COMP%]{display:inline-block;margin-right:8px;font-weight:700;color:#0009;font-size:14px;line-height:12px}"]}),V})()},4717:(bt,Te,c)=>{c.d(Te,{r:()=>U});var n=c(6814),r=c(7528),y=c(5695),e=c(551),u=c(3986),N=c(2647),H=c(9212);let U=(()=>{class w{}return w.\u0275fac=function(L){return new(L||w)},w.\u0275mod=H.oAB({type:w}),w.\u0275inj=H.cJS({imports:[n.ez,y.X,e.PV,r.Q,N.k,u.i]}),w})()},2606:(bt,Te,c)=>{c.d(Te,{p:()=>K});var n=c(8130),r=c(2023),y=c(9212),e=c(6814),u=c(4190),N=c(5695),H=c(7417),U=c(551),w=c(156),S=c(5869);function L(G,Y){}function B(G,Y){if(1&G&&(y.ynx(0),y.TgZ(1,"a",5),y.YNc(2,L,0,0,"ng-template",6),y.qZA(),y.BQk()),2&G){const ee=y.oxw(),se=y.MAs(2);y.xp6(),y.Q6J("routerLink",ee.molecularProfile.link),y.xp6(),y.Q6J("ngTemplateOutlet",se)}}function V(G,Y){}const I=G=>({deprecated:G});function x(G,Y){if(1&G){const ee=y.EpF();y.TgZ(0,"nz-tag",9),y.NdJ("nzOnClose",function(ze){y.CHM(ee);const Me=y.oxw(2);return y.KtG(Me.itemClosed(ze))}),y.YNc(1,V,0,0,"ng-template",6),y.qZA()}if(2&G){y.oxw();const ee=y.MAs(2),se=y.oxw(),ze=y.MAs(8);y.Q6J("ngClass",y.VKq(5,I,se.molecularProfile.deprecated))("nzPopoverMouseEnterDelay",se.onCloseClicked?0:.5)("nzPopoverContent",ee)("nzMode",se.onCloseClicked?"closeable":"default"),y.xp6(),y.Q6J("ngTemplateOutlet",ze)}}function ne(G,Y){if(1&G&&y._UZ(0,"cvc-molecular-profile-popover",11),2&G){const ee=y.oxw(3);y.Q6J("molecularProfileId",ee.molecularProfile.id)}}function Q(G,Y){if(1&G&&y.YNc(0,ne,1,1,"cvc-molecular-profile-popover",10),2&G){const ee=y.oxw(2);y.Q6J("ngIf",ee.enablePopover)}}function ye(G,Y){if(1&G&&y.YNc(0,x,2,7,"nz-tag",7)(1,Q,1,1,"ng-template",null,8,y.W1O),2&G){const ee=y.oxw(),se=y.MAs(4);y.Q6J("ngIf",ee.enablePopover)("ngIfElse",se)}}function ve(G,Y){}function ae(G,Y){if(1&G){const ee=y.EpF();y.TgZ(0,"nz-tag",12),y.NdJ("nzOnClose",function(ze){y.CHM(ee);const Me=y.oxw();return y.KtG(Me.itemClosed(ze))}),y.YNc(1,ve,0,0,"ng-template",6),y.qZA()}if(2&G){const ee=y.oxw(),se=y.MAs(8);y.Q6J("nzMode",ee.onCloseClicked?"closeable":"default")("ngClass",y.VKq(3,I,ee.molecularProfile.deprecated)),y.xp6(),y.Q6J("ngTemplateOutlet",se)}}function te(G,Y){}function q(G,Y){if(1&G&&y.YNc(0,te,0,0,"ng-template",6),2&G){y.oxw();const ee=y.MAs(2);y.Q6J("ngTemplateOutlet",ee)}}function j(G,Y){if(1&G&&(y.ynx(0),y._uU(1),y.ALo(2,"truncate"),y.BQk()),2&G){const ee=y.oxw(2);y.xp6(),y.hij(" ",y.xi3(2,1,ee.molecularProfile.name,ee.truncationLength)," ")}}function k(G,Y){if(1&G&&y._uU(0),2&G){const ee=y.oxw(2);y.hij(" ",ee.molecularProfile.name," ")}}function M(G,Y){if(1&G&&(y._UZ(0,"i",13),y.YNc(1,j,3,4,"ng-container",0)(2,k,1,1,"ng-template",null,14,y.W1O)),2&G){const ee=y.MAs(3),se=y.oxw();y.Q6J("nzTwotoneColor",se.iconColor),y.xp6(),y.Q6J("ngIf",se.truncateLongName)("ngIfElse",ee)}}let K=(()=>{class G extends n.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1,this.truncationLength=20,this.iconColor=(0,r.f)("MolecularProfile")}idFunction(){return this.molecularProfile.id}ngOnInit(){if(super.ngOnInit(),void 0===this.molecularProfile)throw new Error("cvc-molecular-profile-tag requires LinkableMolecularProfile input, none supplied.");"number"==typeof this.truncateLongName&&(this.truncationLength=this.truncateLongName),"segments"in this.molecularProfile&&(this.molecularProfile.name=this.molecularProfile.segments.map(ee=>"text"in ee?ee.text:ee.name).join(" "))}}return G.\u0275fac=function(ee){return new(ee||G)},G.\u0275cmp=y.Xpm({type:G,selectors:[["cvc-molecular-profile-tag"]],inputs:{molecularProfile:"molecularProfile",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[y.qOj],decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["noPopover",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverTrigger","hover",3,"ngClass","nzPopoverMouseEnterDelay","nzPopoverContent","nzMode","nzOnClose",4,"ngIf","ngIfElse"],["popoverContent",""],["nz-popover","","nzPopoverTrigger","hover",3,"ngClass","nzPopoverMouseEnterDelay","nzPopoverContent","nzMode","nzOnClose"],[3,"molecularProfileId",4,"ngIf"],[3,"molecularProfileId"],[3,"nzMode","ngClass","nzOnClose"],["nz-icon","","nzType","civic-molecularprofile","nzTheme","twotone",3,"nzTwotoneColor"],["fullName",""]],template:function(ee,se){if(1&ee&&y.YNc(0,B,3,2,"ng-container",0)(1,ye,3,2,"ng-template",null,1,y.W1O)(3,ae,2,5,"ng-template",null,2,y.W1O)(5,q,1,1,"ng-template",null,3,y.W1O)(7,M,4,3,"ng-template",null,4,y.W1O),2&ee){const ze=y.MAs(6);y.Q6J("ngIf",se.linked)("ngIfElse",ze)}},dependencies:[e.mk,e.O5,e.tP,u.rH,N.j,H.lU,U.Ls,w._,S.W],styles:["[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.submitted, [_nghost-%COMP%]     nz-tag.accepted, [_nghost-%COMP%]     nz-tag.deprecated{border-right-width:2px}[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.deprecated{border-color:#e6e6e6;background-color:#fff;color:#999999d9}[_nghost-%COMP%]     nz-tag.submitted{border-color:#ffe58f}[_nghost-%COMP%]     nz-tag.accepted{border-color:#b7eb8f}[_nghost-%COMP%]{display:inline-block}"],changeDetection:0}),G})()},8527:(bt,Te,c)=>{c.d(Te,{u:()=>w});var n=c(6814),r=c(4190),y=c(5695),e=c(551),u=c(7417),N=c(2524),H=c(2064),U=c(9212);let w=(()=>{class S{}return S.\u0275fac=function(B){return new(B||S)},S.\u0275mod=U.oAB({type:S}),S.\u0275inj=U.cJS({imports:[n.ez,r.Bz,y.X,u.$6,e.PV,N.s,H._]}),S})()},4402:(bt,Te,c)=>{c.d(Te,{S:()=>x});var n=c(5676),r=c(7398),y=c(2181),e=c(9212),u=c(313),N=c(6814),H=c(551),U=c(2962),w=c(3317),S=c(8125),L=c(8091);function B(ne,Q){if(1&ne&&(e._UZ(0,"i",9),e._uU(1)),2&ne){const ye=e.oxw().ngIf;e.xp6(),e.hij(" ",ye.name," ")}}function V(ne,Q){if(1&ne&&(e.TgZ(0,"cvc-link-tag",10),e._uU(1),e.qZA()),2&ne){const ye=e.oxw().ngIf;e.Q6J("href",ye.url),e.xp6(),e.hij(" ",ye.hpoId," ")}}function I(ne,Q){if(1&ne&&(e.ynx(0),e.TgZ(1,"nz-card",2),e.YNc(2,B,2,1,"ng-template",null,3,e.W1O)(4,V,2,2,"ng-template",null,4,e.W1O),e.TgZ(6,"nz-descriptions",5)(7,"nz-descriptions-item",6),e._uU(8),e.qZA(),e.TgZ(9,"nz-descriptions-item",7),e._uU(10),e.qZA(),e.TgZ(11,"nz-descriptions-item",8),e._uU(12),e.qZA()()(),e.BQk()),2&ne){const ye=Q.ngIf,ve=e.MAs(3),ae=e.MAs(5);e.xp6(),e.Q6J("nzTitle",ve)("nzExtra",ae),e.xp6(5),e.Q6J("nzColumn",2),e.xp6(2),e.hij(" ",ye.assertionCount," "),e.xp6(2),e.hij(" ",ye.evidenceItemCount," "),e.xp6(2),e.hij(" ",ye.molecularProfileCount," ")}}let x=(()=>{class ne{constructor(ye){this.gql=ye}ngOnInit(){if(null==this.phenotypeId)throw new Error("cvc-phenotype-popover requires valid phenotypeId input.");this.phenotype$=this.gql.watch({phenotypeId:this.phenotypeId}).valueChanges.pipe((0,r.U)(({data:ye})=>ye?.phenotypePopover),(0,y.h)(n.ep))}}return ne.\u0275fac=function(ye){return new(ye||ne)(e.Y36(u.OHm))},ne.\u0275cmp=e.Xpm({type:ne,selectors:[["cvc-phenotype-popover"]],inputs:{phenotypeId:"phenotypeId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["linkout",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Assertions","nzSpan","2"],["nzTitle","Evidence","nzSpan","2"],["nzTitle","Molecular Profiles","nzSpan","2"],["nz-icon","","nzType","civic-phenotype","nzTheme","twotone","nzTwotoneColor","#2A63B6"],["tooltip","View in the Human Phenotype Ontology",3,"href"]],template:function(ye,ve){1&ye&&(e.TgZ(0,"div",0),e.YNc(1,I,13,6,"ng-container",1),e.ALo(2,"ngrxPush"),e.qZA()),2&ye&&(e.xp6(),e.Q6J("ngIf",e.lcZ(2,1,ve.phenotype$)))},dependencies:[N.O5,H.Ls,U.bd,w.l,S.R7,S.uj,L.fM],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),ne})()},1332:(bt,Te,c)=>{c.d(Te,{I:()=>H});var n=c(6814),r=c(2962),y=c(6067),e=c(8125),u=c(551),N=c(9212);let H=(()=>{class U{}return U.\u0275fac=function(S){return new(S||U)},U.\u0275mod=N.oAB({type:U}),U.\u0275inj=N.cJS({imports:[n.ez,u.PV,r.vh,y.X,e.q6]}),U})()},3897:(bt,Te,c)=>{c.d(Te,{i:()=>ae});var n=c(8130),r=c(9212),y=c(6814),e=c(4190),u=c(5695),N=c(7417),H=c(551),U=c(4402),w=c(2616);function S(te,q){}function L(te,q){if(1&te&&(r.ynx(0),r.TgZ(1,"a",5),r.YNc(2,S,0,0,"ng-template",6),r.qZA(),r.BQk()),2&te){const j=r.oxw(),k=r.MAs(2);r.xp6(),r.Q6J("routerLink",j.phenotype.link),r.xp6(),r.Q6J("ngTemplateOutlet",k)}}function B(te,q){}function V(te,q){if(1&te&&r._UZ(0,"cvc-phenotype-popover",9),2&te){const j=r.oxw(2);r.Q6J("phenotypeId",j.phenotype.id)}}function I(te,q){if(1&te){const j=r.EpF();r.TgZ(0,"nz-tag",7),r.NdJ("nzOnClose",function(M){r.CHM(j);const K=r.oxw();return r.KtG(K.itemClosed(M))}),r.YNc(1,B,0,0,"ng-template",6),r.qZA(),r.YNc(2,V,1,1,"ng-template",null,8,r.W1O)}if(2&te){const j=r.MAs(3),k=r.oxw(),M=r.MAs(8);r.Q6J("nzPopoverMouseEnterDelay",k.onCloseClicked?0:.5)("nzPopoverContent",j)("nzPopoverTrigger",k.enablePopover?"hover":null)("nzMode",k.onCloseClicked?"closeable":"default"),r.xp6(),r.Q6J("ngTemplateOutlet",M)}}function x(te,q){}function ne(te,q){if(1&te){const j=r.EpF();r.TgZ(0,"nz-tag",10),r.NdJ("nzOnClose",function(M){r.CHM(j);const K=r.oxw();return r.KtG(K.itemClosed(M))}),r.YNc(1,x,0,0,"ng-template",6),r.qZA()}if(2&te){const j=r.oxw(),k=r.MAs(8);r.Q6J("nzMode",j.onCloseClicked?"closeable":"default"),r.xp6(),r.Q6J("ngTemplateOutlet",k)}}function Q(te,q){}function ye(te,q){if(1&te&&r.YNc(0,Q,0,0,"ng-template",6),2&te){r.oxw();const j=r.MAs(2);r.Q6J("ngTemplateOutlet",j)}}function ve(te,q){if(1&te&&(r._UZ(0,"i",11),r.ALo(1,"entityColor"),r._uU(2)),2&te){const j=r.oxw();r.Q6J("nzTwotoneColor",r.lcZ(1,2,"Phenotype")),r.xp6(2),r.hij(" ",j.phenotype.name,"\n")}}let ae=(()=>{class te extends n.a{constructor(){super(...arguments),this.enablePopover=!0}set phenotype(j){if(!j)throw new Error("phenotype-tag phentype input requires LinkablePhenotype.");this._phenotype=j}get phenotype(){return this._phenotype}idFunction(){return this.phenotype.id}}return te.\u0275fac=(()=>{let q;return function(k){return(q||(q=r.n5z(te)))(k||te)}})(),te.\u0275cmp=r.Xpm({type:te,selectors:[["cvc-phenotype-tag"]],inputs:{phenotype:"phenotype",enablePopover:"enablePopover"},features:[r.qOj],decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["noPopover",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["phenotypePopover",""],[3,"phenotypeId"],[3,"nzMode","nzOnClose"],["nz-icon","","nzTheme","twotone","nzType","civic-phenotype",3,"nzTwotoneColor"]],template:function(j,k){if(1&j&&r.YNc(0,L,3,2,"ng-container",0)(1,I,4,5,"ng-template",null,1,r.W1O)(3,ne,2,2,"ng-template",null,2,r.W1O)(5,ye,1,1,"ng-template",null,3,r.W1O)(7,ve,3,4,"ng-template",null,4,r.W1O),2&j){const M=r.MAs(6);r.Q6J("ngIf",k.linked)("ngIfElse",M)}},dependencies:[y.O5,y.tP,e.rH,u.j,N.lU,H.Ls,U.S,w.a],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),te})()},3043:(bt,Te,c)=>{c.d(Te,{y:()=>w});var n=c(6814),r=c(4190),y=c(2524),e=c(551),u=c(7417),N=c(5695),H=c(1332),U=c(9212);let w=(()=>{class S{}return S.\u0275fac=function(B){return new(B||S)},S.\u0275mod=U.oAB({type:S}),S.\u0275inj=U.cJS({imports:[n.ez,r.Bz,N.X,u.$6,e.PV,H.I,y.s]}),S})()},3103:(bt,Te,c)=>{c.d(Te,{b:()=>w});var n=c(2023),r=c(9212),y=c(6814);const e=S=>({background:S});function u(S,L){if(1&S&&r._UZ(0,"div",3),2&S){const B=r.oxw();r.Q6J("ngStyle",r.VKq(1,e,B.flagColor))}}function N(S,L){if(1&S&&r._UZ(0,"div",4),2&S){const B=r.oxw();r.Q6J("ngStyle",r.VKq(1,e,B.entityColor))}}function H(S,L){if(1&S&&r._UZ(0,"div",5),2&S){const B=r.oxw();r.Q6J("ngStyle",r.VKq(1,e,B.entityColor))}}const U=["*"];let w=(()=>{class S{constructor(){this.hasRevisions=!1,this.flagged=!1,this.hasComments=!1,this.entityColor="#AAA",this.flagColor=(0,n.f)("Flag")}}return S.\u0275fac=function(B){return new(B||S)},S.\u0275cmp=r.Xpm({type:S,selectors:[["cvc-icon-badges"]],inputs:{hasRevisions:"hasRevisions",flagged:"flagged",hasComments:"hasComments",entityColor:"entityColor"},ngContentSelectors:U,decls:4,vars:3,consts:[["class","cvc-badge badge-flags",3,"ngStyle",4,"ngIf"],["class","cvc-badge badge-revisions",3,"ngStyle",4,"ngIf"],["class","cvc-badge badge-comments",3,"ngStyle",4,"ngIf"],[1,"cvc-badge","badge-flags",3,"ngStyle"],[1,"cvc-badge","badge-revisions",3,"ngStyle"],[1,"cvc-badge","badge-comments",3,"ngStyle"]],template:function(B,V){1&B&&(r.F$t(),r.Hsn(0),r.YNc(1,u,1,3,"div",0)(2,N,1,3,"div",1)(3,H,1,3,"div",2)),2&B&&(r.xp6(),r.Q6J("ngIf",V.flagged),r.xp6(),r.Q6J("ngIf",V.hasRevisions),r.xp6(),r.Q6J("ngIf",V.hasComments))},dependencies:[y.O5,y.PC],styles:["[_nghost-%COMP%]{display:inline-block;position:relative;line-height:1}.cvc-badge[_ngcontent-%COMP%]{position:absolute;z-index:auto;width:4px;min-width:4px;height:4px;border-radius:100%;box-shadow:0 0 0 1px #fff;background:#aaa}.cvc-badge.badge-revisions[_ngcontent-%COMP%]{top:.5px;right:.5px;transform:translate(50%,-50%)}.cvc-badge.badge-flags[_ngcontent-%COMP%]{top:.5px;left:.5px;transform:translate(-50%,-50%)}.cvc-badge.badge-comments[_ngcontent-%COMP%]{bottom:.5px;right:.5px;transform:translate(50%,50%)}"],changeDetection:0}),S})()},3146:(bt,Te,c)=>{c.d(Te,{C:()=>e});var n=c(6814),r=c(2524),y=c(9212);let e=(()=>{class u{}return u.\u0275fac=function(H){return new(H||u)},u.\u0275mod=y.oAB({type:u}),u.\u0275inj=y.cJS({imports:[n.ez,r.s]}),u})()},3317:(bt,Te,c)=>{c.d(Te,{l:()=>N});var n=c(9212),r=c(6109),y=c(5695),e=c(551);const u=["*"];let N=(()=>{class H{set href(w){if(!w)throw new Error("link-tag link Input requires string.");this._href=w}get href(){return this._href?this._href:""}}return H.\u0275fac=function(w){return new(w||H)},H.\u0275cmp=n.Xpm({type:H,selectors:[["cvc-link-tag"]],inputs:{href:"href",tooltip:"tooltip",iconName:"iconName"},ngContentSelectors:u,decls:4,vars:4,consts:[["target","_blank",3,"href"],["nzColor","default","nz-tooltip","",3,"nzTooltipTitle","nzTooltipTrigger"],["nz-icon","","nzTheme","outline",3,"nzType"]],template:function(w,S){1&w&&(n.F$t(),n.TgZ(0,"a",0)(1,"nz-tag",1),n._UZ(2,"i",2),n.Hsn(3),n.qZA()()),2&w&&(n.Q6J("href",S.href,n.LSH),n.xp6(),n.Q6J("nzTooltipTitle",S.tooltip)("nzTooltipTrigger",S.tooltip?"hover":null),n.xp6(),n.Q6J("nzType",S.iconName?S.iconName:"link"))},dependencies:[r.SY,y.j,e.Ls],encapsulation:2}),H})()},6067:(bt,Te,c)=>{c.d(Te,{X:()=>N});var n=c(6814),r=c(6109),y=c(5695),e=c(551),u=c(9212);let N=(()=>{class H{}return H.\u0275fac=function(w){return new(w||H)},H.\u0275mod=u.oAB({type:H}),H.\u0275inj=u.cJS({imports:[n.ez,r.cg,y.X,e.PV]}),H})()},9154:(bt,Te,c)=>{c.d(Te,{y:()=>u});var n=c(6814),r=c(551),y=c(5695),e=c(9212);let u=(()=>{class N{}return N.\u0275fac=function(U){return new(U||N)},N.\u0275mod=e.oAB({type:N}),N.\u0275inj=e.cJS({imports:[n.ez,y.X,r.PV]}),N})()},3489:(bt,Te,c)=>{c.d(Te,{H:()=>S});var n=c(5619),r=c(1687),y=c(1374),e=c(9212),u=c(6814),N=c(5695),H=c(551),U=c(8091);function w(L,B){1&L&&(e.TgZ(0,"nz-tag",1),e._UZ(1,"i",2),e.TgZ(2,"span"),e._uU(3,"End of results reached"),e.qZA()())}let S=(()=>{class L{set cvcShowTag(V){void 0!==V&&V&&this.showTag()}constructor(V){this.cdr=V,this.showTag$=new n.X(!1)}showTag(){!1===this.showTag$.getValue()&&(this.showTag$.next(!0),(0,r.F)(3e3).pipe((0,y.P)()).subscribe(()=>{this.showTag$.next(!1),this.cdr.detectChanges()}))}}return L.\u0275fac=function(V){return new(V||L)(e.Y36(e.sBO))},L.\u0275cmp=e.Xpm({type:L,selectors:[["cvc-no-more-rows"]],inputs:{cvcShowTag:"cvcShowTag"},decls:2,vars:3,consts:[["nzColor","warning",4,"ngIf"],["nzColor","warning"],["nz-icon","","nzType","exclamation-circle"]],template:function(V,I){1&V&&(e.YNc(0,w,4,0,"nz-tag",0),e.ALo(1,"ngrxPush")),2&V&&e.Q6J("ngIf",e.lcZ(1,1,I.showTag$))},dependencies:[u.O5,N.j,H.Ls,U.fM],encapsulation:2,changeDetection:0}),L})()},2384:(bt,Te,c)=>{c.d(Te,{h:()=>L});var n=c(9212),r=c(6814),y=c(5695),e=c(551);function u(B,V){1&B&&n._UZ(0,"i",7)}function N(B,V){1&B&&n._UZ(0,"i",8)}function H(B,V){1&B&&n._UZ(0,"i",9)}function U(B,V){1&B&&n._UZ(0,"i",10)}function w(B,V){1&B&&n._UZ(0,"i",10)}function S(B,V){if(1&B&&(n.TgZ(0,"nz-tag",1),n.ynx(1,2),n.YNc(2,u,1,0,"i",3)(3,N,1,0,"i",4)(4,H,1,0,"i",5)(5,U,1,0,"i",6)(6,w,1,0,"i",6),n.BQk(),n._uU(7),n.ALo(8,"titlecase"),n.qZA()),2&B){const I=n.oxw();n.Q6J("nzColor",I.tagStatus),n.xp6(),n.Q6J("ngSwitch",I.tagStatus),n.xp6(),n.Q6J("ngSwitchCase","success"),n.xp6(),n.Q6J("ngSwitchCase","error"),n.xp6(),n.Q6J("ngSwitchCase","warning"),n.xp6(),n.Q6J("ngSwitchCase","processing"),n.xp6(),n.Q6J("ngSwitchCase","default"),n.xp6(),n.hij(" ",n.lcZ(8,8,I.status),"\n")}}let L=(()=>{class B{constructor(){this.statusColorMap={ACCEPTED:"success",REJECTED:"error",SUBMITTED:"warning",NEW:"processing",SUPERSEDED:"default",OPEN:"error",RESOLVED:"default"}}set status(I){this._status=I,I&&(this.tagStatus=this.statusColorMap[I])}get status(){return this._status}ngOnInit(){if(void 0===this.status)throw new Error("Must pass a valid EvidenceStatus or RevisionStatus to cvc-status-tag component")}}return B.\u0275fac=function(I){return new(I||B)},B.\u0275cmp=n.Xpm({type:B,selectors:[["cvc-status-tag"]],inputs:{status:"status"},decls:1,vars:1,consts:[[3,"nzColor",4,"ngIf"],[3,"nzColor"],[3,"ngSwitch"],["nz-icon","","nzType","check-circle",4,"ngSwitchCase"],["nz-icon","","nzType","close-circle",4,"ngSwitchCase"],["nz-icon","","nzType","exclamation-circle",4,"ngSwitchCase"],["nz-icon","",4,"ngSwitchCase"],["nz-icon","","nzType","check-circle"],["nz-icon","","nzType","close-circle"],["nz-icon","","nzType","exclamation-circle"],["nz-icon",""]],template:function(I,x){1&I&&n.YNc(0,S,9,10,"nz-tag",0),2&I&&n.Q6J("ngIf",x.tagStatus)},dependencies:[r.O5,r.RF,r.n9,y.j,e.Ls,r.rS],encapsulation:2}),B})()},2655:(bt,Te,c)=>{c.d(Te,{x:()=>u});var n=c(6814),r=c(5695),y=c(551),e=c(9212);let u=(()=>{class N{}return N.\u0275fac=function(U){return new(U||N)},N.\u0275mod=e.oAB({type:N}),N.\u0275inj=e.cJS({imports:[n.ez,r.X,y.PV]}),N})()},8184:(bt,Te,c)=>{c.d(Te,{O:()=>y});var n=c(9212);const r=["*"];let y=(()=>{class e{constructor(){}}return e.\u0275fac=function(N){return new(N||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["cvc-tag-group"]],ngContentSelectors:r,decls:1,vars:0,template:function(N,H){1&N&&(n.F$t(),n.Hsn(0))},styles:["[_nghost-%COMP%]    >*:first-child   nz-tag{border-top-right-radius:0;border-bottom-right-radius:0;margin-right:0}[_nghost-%COMP%]    >*:last-child   nz-tag{border-top-left-radius:0;border-bottom-left-radius:0;margin-left:-1px;border-left-color:#e9e9e9}"]}),e})()},3986:(bt,Te,c)=>{c.d(Te,{i:()=>y});var n=c(6814),r=c(9212);let y=(()=>{class e{}return e.\u0275fac=function(N){return new(N||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[n.ez]}),e})()},1887:(bt,Te,c)=>{c.d(Te,{$:()=>y});var n=c(9212);const r=["*"];let y=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(N){return new(N||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["cvc-tag-list"]],hostVars:4,hostBindings:function(N,H){2&N&&n.ekj("xs","xs"===H.size||!H.size)("sm","sm"===H.size)},inputs:{size:"size"},ngContentSelectors:r,decls:2,vars:0,consts:[[1,"tag-list"]],template:function(N,H){1&N&&(n.F$t(),n.TgZ(0,"div",0),n.Hsn(1),n.qZA())},styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .tag-list[_ngcontent-%COMP%]    >*{display:inline-block}[_nghost-%COMP%]   .tag-list[_ngcontent-%COMP%]    >*:last-child{margin-right:-8px}.xs[_nghost-%COMP%]{margin-bottom:-4px}.xs[_nghost-%COMP%]   .tag-list[_ngcontent-%COMP%]    >*{margin-bottom:4px}.sm[_nghost-%COMP%]{margin-bottom:-8px}.sm[_nghost-%COMP%]   .tag-list[_ngcontent-%COMP%]    >*{margin-bottom:8px}"],changeDetection:0}),e})()},366:(bt,Te,c)=>{c.d(Te,{$:()=>y});var n=c(6814),r=c(9212);let y=(()=>{class e{}return e.\u0275fac=function(N){return new(N||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[n.ez]}),e})()},1813:(bt,Te,c)=>{c.d(Te,{p:()=>ae});var n=c(5676),r=c(7398),y=c(2181),e=c(9212),u=c(313),N=c(6814),H=c(551),U=c(2962),w=c(8125),S=c(3317),L=c(1887),B=c(3369),V=c(8091);function I(te,q){if(1&te&&(e._UZ(0,"i",12),e._uU(1)),2&te){const j=e.oxw().ngIf;e.xp6(),e.AsE(" ",j.displayType,":\xa0",j.citation," ")}}function x(te,q){if(1&te&&(e.TgZ(0,"cvc-link-tag",13),e._uU(1),e.qZA()),2&te){const j=e.oxw().ngIf;e.Q6J("href",j.sourceUrl)("tooltip","View on "+j.displayType),e.xp6(),e.hij(" ",j.displayType+":"+j.citationId," ")}}function ne(te,q){1&te&&e._UZ(0,"cvc-clinical-trial-tag",15),2&te&&e.Q6J("clinicalTrial",q.$implicit)("enablePopover",!1)}function Q(te,q){if(1&te&&(e.ynx(0),e.TgZ(1,"cvc-tag-list"),e.YNc(2,ne,1,2,"cvc-clinical-trial-tag",14),e.qZA(),e.BQk()),2&te){const j=e.oxw().ngIf;e.xp6(2),e.Q6J("ngForOf",j.clinicalTrials)}}function ye(te,q){1&te&&e._uU(0," -- ")}function ve(te,q){if(1&te&&(e.ynx(0),e.TgZ(1,"nz-card",2),e.YNc(2,I,2,2,"ng-template",null,3,e.W1O)(4,x,2,3,"ng-template",null,4,e.W1O),e.TgZ(6,"nz-descriptions",5)(7,"nz-descriptions-item",6),e._uU(8),e.qZA(),e.TgZ(9,"nz-descriptions-item",7),e._uU(10),e.qZA(),e.TgZ(11,"nz-descriptions-item",8),e._uU(12),e.qZA(),e.TgZ(13,"nz-descriptions-item",9),e.YNc(14,Q,3,1,"ng-container",10)(15,ye,1,0,"ng-template",null,11,e.W1O),e.qZA()()(),e.BQk()),2&te){const j=q.ngIf,k=e.MAs(3),M=e.MAs(5),K=e.MAs(16);e.xp6(),e.Q6J("nzTitle",k)("nzExtra",M),e.xp6(5),e.Q6J("nzColumn",2),e.xp6(2),e.hij(" ",j.title," "),e.xp6(2),e.hij(" ",j.fullJournalTitle," "),e.xp6(2),e.hij(" ",j.evidenceItemCount," "),e.xp6(2),e.Q6J("ngIf",j.clinicalTrials&&j.clinicalTrials.length>0)("ngIfElse",K)}}let ae=(()=>{class te{constructor(j){this.gql=j}ngOnInit(){if(null==this.sourceId)throw new Error("cvc-source-popover requires valid sourceId input.");this.source$=this.gql.watch({sourceId:this.sourceId}).valueChanges.pipe((0,r.U)(({data:j})=>j?.sourcePopover),(0,y.h)(n.ep))}}return te.\u0275fac=function(j){return new(j||te)(e.Y36(u.TiL))},te.\u0275cmp=e.Xpm({type:te,selectors:[["cvc-source-popover"]],inputs:{sourceId:"sourceId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["linkout",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Title","nzSpan","2"],["nzTitle","Journal","nzSpan","2"],["nzTitle","Evidence","nzSpan","2"],["nzTitle","Clinical Trials:","nzSpan","2"],[4,"ngIf","ngIfElse"],["noTrials",""],["nz-icon","","nzType","civic-source","nzTheme","twotone","nzTwotoneColor","#F9BA45"],[3,"href","tooltip"],[3,"clinicalTrial","enablePopover",4,"ngFor","ngForOf"],[3,"clinicalTrial","enablePopover"]],template:function(j,k){1&j&&(e.TgZ(0,"div",0),e.YNc(1,ve,17,8,"ng-container",1),e.ALo(2,"ngrxPush"),e.qZA()),2&j&&(e.xp6(),e.Q6J("ngIf",e.lcZ(2,1,k.source$)))},dependencies:[N.sg,N.O5,H.Ls,U.bd,w.R7,w.uj,S.l,L.$,B.G,V.fM],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),te})()},6247:(bt,Te,c)=>{c.d(Te,{n:()=>w});var n=c(6814),r=c(2962),y=c(6067),e=c(8125),u=c(366),N=c(4605),H=c(551),U=c(9212);let w=(()=>{class S{}return S.\u0275fac=function(B){return new(B||S)},S.\u0275mod=U.oAB({type:S}),S.\u0275inj=U.cJS({imports:[n.ez,H.PV,r.vh,e.q6,y.X,u.$,N.N]}),S})()},4138:(bt,Te,c)=>{c.d(Te,{T:()=>k});var n=c(8130),r=c(9212),y=c(7023),e=c(6814),u=c(4190),N=c(551),H=c(7417),U=c(5695),w=c(1813),S=c(5869),L=c(2616);function B(M,K){}function V(M,K){if(1&M&&(r.ynx(0),r.TgZ(1,"a",4),r.YNc(2,B,0,0,"ng-template",5),r.qZA(),r.BQk()),2&M){const G=r.oxw(),Y=r.MAs(2);r.xp6(),r.Q6J("routerLink",G.source.link),r.xp6(),r.Q6J("ngTemplateOutlet",Y)}}function I(M,K){}function x(M,K){if(1&M&&r._UZ(0,"cvc-source-popover",8),2&M){const G=r.oxw(2);r.Q6J("sourceId",G.source.id)}}function ne(M,K){if(1&M){const G=r.EpF();r.TgZ(0,"nz-tag",6),r.NdJ("nzPopoverVisibleChange",function(ee){r.CHM(G);const se=r.oxw();return r.KtG(se.popoverVisible=ee)})("nzOnClose",function(ee){r.CHM(G);const se=r.oxw();return r.KtG(se.itemClosed(ee))}),r.YNc(1,I,0,0,"ng-template",5),r.qZA(),r.YNc(2,x,1,1,"ng-template",null,7,r.W1O)}if(2&M){const G=r.MAs(3),Y=r.oxw(),ee=r.MAs(6);r.Q6J("nzPopoverMouseEnterDelay",Y.onCloseClicked?0:.5)("nzPopoverContent",G)("nzPopoverTrigger",Y.enablePopover?"hover":null)("nzPopoverVisible",Y.popoverVisible)("nzMode",Y.onCloseClicked?"closeable":"default"),r.xp6(),r.Q6J("ngTemplateOutlet",ee)}}function Q(M,K){}function ye(M,K){if(1&M&&r.YNc(0,Q,0,0,"ng-template",5),2&M){r.oxw();const G=r.MAs(2);r.Q6J("ngTemplateOutlet",G)}}function ve(M,K){if(1&M&&(r.ynx(0),r._uU(1),r.ALo(2,"truncate"),r.BQk()),2&M){const G=r.oxw(3);r.xp6(),r.hij(" ",r.xi3(2,1,G.displayName,50)," ")}}function ae(M,K){if(1&M&&(r.ynx(0),r._uU(1),r.BQk()),2&M){const G=r.oxw(3);r.xp6(),r.hij(" ",G.displayName," ")}}function te(M,K){if(1&M&&(r.ynx(0),r.YNc(1,ve,3,4,"ng-container",11)(2,ae,2,1,"ng-container",11),r.BQk()),2&M){const G=r.oxw(2);r.xp6(),r.Q6J("ngIf",G.truncateLongName),r.xp6(),r.Q6J("ngIf",!G.truncateLongName)}}function q(M,K){if(1&M&&r._uU(0),2&M){const G=r.oxw(2);r.hij(" SID:",G.source.id," ")}}function j(M,K){if(1&M&&(r._UZ(0,"i",9),r.ALo(1,"entityColor"),r.YNc(2,te,3,2,"ng-container",0)(3,q,1,1,"ng-template",null,10,r.W1O)),2&M){const G=r.MAs(4),Y=r.oxw();r.Q6J("nzTwotoneColor",r.lcZ(1,3,"Source")),r.xp6(2),r.Q6J("ngIf","normal"===Y.mode)("ngIfElse",G)}}let k=(()=>{class M extends n.a{set source(G){if(!G)throw new Error("source-tag source input requires SourceWithDisplayName or SourceWithCitation.");this._source=G,this.displayName="displayName"in this.source?this.source.displayName:this.sourceTypeDisplay.transform(this.source.sourceType)+": "+this.source.citation}get source(){return this._source}constructor(G){super(),this.sourceTypeDisplay=G,this.enablePopover=!0,this.linked=!0,this.mode="normal",this.truncateLongName=!1}idFunction(){return this.source.id}}return M.\u0275fac=function(G){return new(G||M)(r.Y36(y.l))},M.\u0275cmp=r.Xpm({type:M,selectors:[["cvc-source-tag"]],inputs:{source:"source",enablePopover:"enablePopover",linked:"linked",mode:"mode",truncateLongName:"truncateLongName"},features:[r.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzPopoverVisible","nzMode","nzPopoverVisibleChange","nzOnClose"],["sourcePopover",""],[3,"sourceId"],["nz-icon","","nzTheme","twotone","nzType","civic-source",3,"nzTwotoneColor"],["concise",""],[4,"ngIf"]],template:function(G,Y){if(1&G&&r.YNc(0,V,3,2,"ng-container",0)(1,ne,4,6,"ng-template",null,1,r.W1O)(3,ye,1,1,"ng-template",null,2,r.W1O)(5,j,5,5,"ng-template",null,3,r.W1O),2&G){const ee=r.MAs(4);r.Q6J("ngIf",Y.linked)("ngIfElse",ee)}},dependencies:[e.O5,e.tP,u.rH,N.Ls,H.lU,U.j,w.p,S.W,L.a],styles:["[_nghost-%COMP%]{display:inline-block}"],changeDetection:0}),M})()},8641:(bt,Te,c)=>{c.d(Te,{s:()=>w});var n=c(6814),r=c(7417),y=c(4190),e=c(6247),u=c(5695),N=c(551),H=c(2524),U=c(9212);let w=(()=>{class S{}return S.\u0275fac=function(B){return new(B||S)},S.\u0275mod=U.oAB({type:S}),S.\u0275inj=U.cJS({imports:[n.ez,y.Bz,N.PV,r.$6,u.X,e.n,H.s]}),S})()},96:(bt,Te,c)=>{c.d(Te,{a:()=>k});var n=c(7398),r=c(2181),y=c(5676),e=c(9212),u=c(313),N=c(6814),H=c(2962),U=c(8125),w=c(551),S=c(2392),L=c(5695),B=c(6109),V=c(3317),I=c(8091),x=c(5869);function ne(M,K){if(1&M&&(e._UZ(0,"i",12),e._uU(1),e.ALo(2,"truncate")),2&M){const G=e.oxw().ngIf;e.xp6(),e.hij(" ",e.xi3(2,1,G.name,50)," ")}}function Q(M,K){if(1&M&&(e.TgZ(0,"cvc-link-tag",14),e._uU(1),e.qZA()),2&M){const G=e.oxw(2).ngIf;e.Q6J("href",G.therapyUrl),e.xp6(),e.hij(" ",G.ncitId," ")}}function ye(M,K){if(1&M&&e.YNc(0,Q,2,2,"cvc-link-tag",13),2&M){const G=e.oxw().ngIf,Y=e.MAs(7);e.Q6J("ngIf",G.ncitId)("ngIfElse",Y)}}function ve(M,K){1&M&&(e.TgZ(0,"span",15),e._uU(1,"No NCIt ID"),e.qZA())}function ae(M,K){if(1&M&&(e.TgZ(0,"nz-descriptions-item",16),e._uU(1),e.qZA()),2&M){const G=e.oxw().ngIf;e.xp6(),e.hij(" ",G.name," ")}}function te(M,K){if(1&M&&(e.TgZ(0,"nz-tag",19),e._uU(1),e.ALo(2,"truncate"),e.qZA()),2&M){const G=K.$implicit;e.Q6J("nzTooltipTitle",G),e.xp6(),e.Oqu(e.lcZ(2,2,G))}}function q(M,K){if(1&M&&(e.TgZ(0,"nz-descriptions-item",17),e.YNc(1,te,3,4,"nz-tag",18),e.qZA()),2&M){const G=e.oxw().ngIf;e.xp6(),e.Q6J("ngForOf",G.therapyAliases)}}function j(M,K){if(1&M&&(e.ynx(0),e.TgZ(1,"nz-card",2),e.YNc(2,ne,3,4,"ng-template",null,3,e.W1O)(4,ye,1,2,"ng-template",null,4,e.W1O)(6,ve,2,0,"ng-template",null,5,e.W1O),e.TgZ(8,"nz-descriptions",6),e.YNc(9,ae,2,1,"nz-descriptions-item",7)(10,q,2,1,"nz-descriptions-item",8),e.TgZ(11,"nz-descriptions-item",9),e._uU(12),e.qZA(),e.TgZ(13,"nz-descriptions-item",10),e._uU(14),e.qZA(),e.TgZ(15,"nz-descriptions-item",11),e._uU(16),e.qZA()()(),e.BQk()),2&M){const G=K.ngIf,Y=e.MAs(3),ee=e.MAs(5);e.xp6(),e.Q6J("nzTitle",Y)("nzExtra",ee),e.xp6(7),e.Q6J("nzColumn",2),e.xp6(),e.Q6J("ngIf",G.name.length>50),e.xp6(),e.Q6J("ngIf",G.therapyAliases.length>0),e.xp6(2),e.hij(" ",G.assertionCount," "),e.xp6(2),e.hij(" ",G.evidenceItemCount," "),e.xp6(2),e.hij(" ",G.molecularProfileCount," ")}}let k=(()=>{class M{constructor(G){this.gql=G}ngOnInit(){if(null==this.therapyId)throw new Error("cvc-therapy-popover requires valid therapyId input.");this.therapy$=this.gql.watch({therapyId:this.therapyId}).valueChanges.pipe((0,n.U)(({data:G})=>G?.therapyPopover),(0,r.h)(y.ep))}}return M.\u0275fac=function(G){return new(G||M)(e.Y36(u.L8L))},M.\u0275cmp=e.Xpm({type:M,selectors:[["cvc-therapy-popover"]],inputs:{therapyId:"therapyId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["linkout",""],["noNcitId",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Name","nzSpan","2",4,"ngIf"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Assertions","nzSpan","2"],["nzTitle","Evidence","nzSpan","2"],["nzTitle","Molecular Profiles","nzSpan","2"],["nz-icon","","nzType","civic-therapy","nzTheme","twotone","nzTwotoneColor","#AC3996"],["tooltip","View on NCI Thesaurus",3,"href",4,"ngIf","ngIfElse"],["tooltip","View on NCI Thesaurus",3,"href"],["nz-typography","","nzType","secondary"],["nzTitle","Name","nzSpan","2"],["nzTitle","Aliases","nzSpan","2"],["nz-tooltip","",3,"nzTooltipTitle",4,"ngFor","ngForOf"],["nz-tooltip","",3,"nzTooltipTitle"]],template:function(G,Y){1&G&&(e.TgZ(0,"div",0),e.YNc(1,j,17,8,"ng-container",1),e.ALo(2,"ngrxPush"),e.qZA()),2&G&&(e.xp6(),e.Q6J("ngIf",e.lcZ(2,1,Y.therapy$)))},dependencies:[N.sg,N.O5,H.bd,U.R7,U.uj,w.Ls,S.ZU,L.j,B.SY,V.l,I.fM,x.W],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),M})()},1207:(bt,Te,c)=>{c.d(Te,{s:()=>B});var n=c(6814),r=c(4190),y=c(2962),e=c(8125),u=c(6067),N=c(551),H=c(2392),U=c(2524),w=c(5695),S=c(6109),L=c(9212);let B=(()=>{class V{}return V.\u0275fac=function(x){return new(x||V)},V.\u0275mod=L.oAB({type:V}),V.\u0275inj=L.cJS({imports:[n.ez,r.Bz,y.vh,e.q6,N.PV,H.ZJ,w.X,S.cg,u.X,U.s]}),V})()},4770:(bt,Te,c)=>{c.d(Te,{T:()=>ae});var n=c(8130),r=c(9212),y=c(6814),e=c(4190),u=c(5695),N=c(7417),H=c(551),U=c(96),w=c(5869);function S(te,q){}function L(te,q){if(1&te&&(r.ynx(0),r.TgZ(1,"a",4),r.YNc(2,S,0,0,"ng-template",5),r.qZA(),r.BQk()),2&te){const j=r.oxw(),k=r.MAs(2);r.xp6(),r.Q6J("routerLink",j.therapy.link),r.xp6(),r.Q6J("ngTemplateOutlet",k)}}function B(te,q){}function V(te,q){if(1&te&&r._UZ(0,"cvc-therapy-popover",8),2&te){const j=r.oxw(2);r.Q6J("therapyId",j.therapy.id)}}function I(te,q){if(1&te){const j=r.EpF();r.TgZ(0,"nz-tag",6),r.NdJ("nzOnClose",function(M){r.CHM(j);const K=r.oxw();return r.KtG(K.itemClosed(M))}),r.YNc(1,B,0,0,"ng-template",5),r.qZA(),r.YNc(2,V,1,1,"ng-template",null,7,r.W1O)}if(2&te){const j=r.MAs(3),k=r.oxw(),M=r.MAs(6);r.Q6J("nzPopoverMouseEnterDelay",k.onCloseClicked?0:.5)("nzPopoverContent",j)("nzPopoverTrigger",k.enablePopover?"hover":null)("nzMode",k.onCloseClicked?"closeable":"default"),r.xp6(),r.Q6J("ngTemplateOutlet",M)}}function x(te,q){}function ne(te,q){if(1&te&&r.YNc(0,x,0,0,"ng-template",5),2&te){r.oxw();const j=r.MAs(2);r.Q6J("ngTemplateOutlet",j)}}function Q(te,q){if(1&te&&(r.ynx(0),r._uU(1),r.ALo(2,"truncate"),r.BQk()),2&te){const j=r.oxw(2);r.xp6(),r.hij(" ",r.xi3(2,1,j.therapy.name,21)," ")}}function ye(te,q){if(1&te&&r._uU(0),2&te){const j=r.oxw(2);r.hij(" ",j.therapy.name," ")}}function ve(te,q){if(1&te&&(r._UZ(0,"i",9),r.YNc(1,Q,3,4,"ng-container",0)(2,ye,1,1,"ng-template",null,10,r.W1O)),2&te){const j=r.MAs(3),k=r.oxw();r.xp6(),r.Q6J("ngIf",k.truncateLongName)("ngIfElse",j)}}let ae=(()=>{class te extends n.a{constructor(){super(...arguments),this.enablePopover=!0,this.truncateLongName=!1}set therapy(j){if(!j)throw new Error("therapy-tag Input requires LinkableTherapy.");this._therapy=j}get therapy(){return this._therapy}idFunction(){return this.therapy.id}}return te.\u0275fac=(()=>{let q;return function(k){return(q||(q=r.n5z(te)))(k||te)}})(),te.\u0275cmp=r.Xpm({type:te,selectors:[["cvc-therapy-tag"]],inputs:{therapy:"therapy",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[r.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["therapyPopover",""],[3,"therapyId"],["nz-icon","","nzType","civic-therapy","nzTheme","twotone","nzTwotoneColor","#AC3996"],["fullName",""]],template:function(j,k){if(1&j&&r.YNc(0,L,3,2,"ng-container",0)(1,I,4,5,"ng-template",null,1,r.W1O)(3,ne,1,1,"ng-template",null,2,r.W1O)(5,ve,4,2,"ng-template",null,3,r.W1O),2&j){const M=r.MAs(4);r.Q6J("ngIf",k.linked)("ngIfElse",M)}},dependencies:[y.O5,y.tP,e.rH,u.j,N.lU,H.Ls,U.a,w.W],encapsulation:2,changeDetection:0}),te})()},6061:(bt,Te,c)=>{c.d(Te,{N:()=>w});var n=c(6814),r=c(4190),y=c(5695),e=c(7417),u=c(551),N=c(2524),H=c(1207),U=c(9212);let w=(()=>{class S{}return S.\u0275fac=function(B){return new(B||S)},S.\u0275mod=U.oAB({type:S}),S.\u0275inj=U.cJS({imports:[n.ez,r.Bz,y.X,e.$6,u.PV,N.s,H.s]}),S})()},8545:(bt,Te,c)=>{c.d(Te,{m:()=>G});var n=c(5676),r=c(7398),y=c(2181),e=c(9212),u=c(313),N=c(6814),H=c(4190),U=c(2962),w=c(95),S=c(8125),L=c(5695),B=c(551),V=c(2574),I=c(355),x=c(3317),ne=c(8091),Q=c(2616);function ye(Y,ee){if(1&Y&&(e._UZ(0,"i",13),e.ALo(1,"entityColor"),e._uU(2)),2&Y){const se=e.oxw().ngIf;e.Q6J("nzTwotoneColor",e.lcZ(1,2,"Variant")),e.xp6(2),e.hij(" ",se.name," ")}}function ve(Y,ee){if(1&Y&&e._UZ(0,"cvc-feature-tag",14),2&Y){const se=e.oxw().ngIf;e.Q6J("enablePopover",!1)("feature",se.feature)}}function ae(Y,ee){if(1&Y&&(e.TgZ(0,"nz-tag"),e._uU(1),e.qZA()),2&Y){const se=ee.$implicit;e.xp6(),e.Oqu(se)}}function te(Y,ee){if(1&Y&&(e.TgZ(0,"nz-descriptions-item",15),e.YNc(1,ae,2,1,"nz-tag",16),e.qZA()),2&Y){const se=e.oxw().ngIf;e.xp6(),e.Q6J("ngForOf",se.variantAliases)}}function q(Y,ee){if(1&Y&&(e.TgZ(0,"nz-descriptions-item",17)(1,"cvc-link-tag",18),e._uU(2),e.qZA()()),2&Y){const se=e.oxw().ngIf;e.xp6(),e.MGl("href","https://reg.genome.network/allele/",se.alleleRegistryId,".html"),e.xp6(),e.hij(" ",se.alleleRegistryId," ")}}function j(Y,ee){if(1&Y&&(e.TgZ(0,"a",19)(1,"nz-tag",20),e._UZ(2,"i",21),e._uU(3),e.qZA()()),2&Y){const se=e.oxw().ngIf;e.MGl("routerLink","/variants/",se.id,"/flags"),e.xp6(3),e.hij(" Flags (",se.flags.totalCount,") ")}}function k(Y,ee){if(1&Y&&(e.TgZ(0,"a",19)(1,"nz-tag",22),e._UZ(2,"i",23),e._uU(3),e.qZA()()),2&Y){const se=e.oxw().ngIf;e.MGl("routerLink","/variants/",se.id,"/revisions"),e.xp6(3),e.hij(" Revisions (",se.revisions.totalCount,") ")}}function M(Y,ee){if(1&Y&&(e.TgZ(0,"a",19)(1,"nz-tag",24),e._UZ(2,"i",25),e._uU(3),e.qZA()()),2&Y){const se=e.oxw().ngIf;e.MGl("routerLink","/variants/",se.id,"/comments"),e.xp6(3),e.hij(" Comments (",se.comments.totalCount,") ")}}function K(Y,ee){if(1&Y&&(e.ynx(0),e.TgZ(1,"nz-card",2),e.YNc(2,ye,3,4,"ng-template",null,3,e.W1O)(4,ve,1,2,"ng-template",null,4,e.W1O),e.TgZ(6,"nz-descriptions",5),e.YNc(7,te,2,1,"nz-descriptions-item",6)(8,q,3,2,"nz-descriptions-item",7),e.TgZ(9,"nz-descriptions-item",8),e._uU(10),e.qZA()(),e.TgZ(11,"nz-row",9)(12,"nz-col",10)(13,"nz-space",11),e.YNc(14,j,4,2,"a",12)(15,k,4,2,"a",12)(16,M,4,2,"a",12),e.qZA()()()(),e.BQk()),2&Y){const se=ee.ngIf,ze=e.MAs(3),Me=e.MAs(5);e.xp6(),e.Q6J("nzTitle",ze)("nzExtra",Me),e.xp6(5),e.Q6J("nzColumn",2),e.xp6(),e.Q6J("ngIf",se.variantAliases.length>0),e.xp6(),e.Q6J("ngIf",se.alleleRegistryId&&"unregistered"!=se.alleleRegistryId),e.xp6(2),e.hij(" ",se.molecularProfiles.totalCount," ")}}let G=(()=>{class Y{constructor(se){this.gql=se}ngOnInit(){if(void 0===this.variantId)throw new Error("Must pass a variant ID into the variant popover component.");this.variant$=this.gql.watch({variantId:this.variantId}).valueChanges.pipe((0,r.U)(({data:se})=>se?.variant),(0,y.h)(n.ep))}}return Y.\u0275fac=function(se){return new(se||Y)(e.Y36(u.ZYZ))},Y.\u0275cmp=e.Xpm({type:Y,selectors:[["cvc-variant-popover"]],inputs:{variantId:"variantId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["feature",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Allele Registry ID","nzSpan","2",4,"ngIf"],["nzTitle","Molecular Profiles","nzSpan","2"],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzTheme","twotone","nzType","civic-variant",3,"nzTwotoneColor"],[3,"enablePopover","feature"],["nzTitle","Aliases","nzSpan","2"],[4,"ngFor","ngForOf"],["nzTitle","Allele Registry ID","nzSpan","2"],["tooltip","View on the ClinGen Allele Registry",3,"href"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(se,ze){1&se&&(e.TgZ(0,"div",0),e.YNc(1,K,17,6,"ng-container",1),e.ALo(2,"ngrxPush"),e.qZA()),2&se&&(e.xp6(),e.Q6J("ngIf",e.lcZ(2,1,ze.variant$)))},dependencies:[N.sg,N.O5,H.rH,U.bd,w.t3,w.SK,S.R7,S.uj,L.j,B.Ls,V.NU,V.$1,I.K,x.l,ne.fM,Q.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),Y})()},6446:(bt,Te,c)=>{c.d(Te,{k:()=>V});var n=c(6814),r=c(4190),y=c(2962),e=c(95),u=c(8125),N=c(5695),H=c(551),U=c(2574),w=c(6067),S=c(2524),L=c(2647),B=c(9212);let V=(()=>{class I{}return I.\u0275fac=function(ne){return new(ne||I)},I.\u0275mod=B.oAB({type:I}),I.\u0275inj=B.cJS({imports:[n.ez,r.Bz,y.vh,e.Jb,u.q6,N.X,H.PV,U.zf,S.s,L.k,w.X]}),I})()},9408:(bt,Te,c)=>{c.d(Te,{I:()=>k});var n=c(8130),r=c(2023),y=c(9212),e=c(6814),u=c(4190),N=c(5695),H=c(7417),U=c(551),w=c(8545),S=c(3103),L=c(5869);function B(M,K){}function V(M,K){if(1&M&&(y.ynx(0),y.TgZ(1,"a",4),y.YNc(2,B,0,0,"ng-template",5),y.qZA(),y.BQk()),2&M){const G=y.oxw(),Y=y.MAs(2);y.xp6(),y.Q6J("routerLink",G.variant.link),y.xp6(),y.Q6J("ngTemplateOutlet",Y)}}function I(M,K){}function x(M,K){if(1&M&&y._UZ(0,"cvc-variant-popover",9),2&M){const G=y.oxw(3);y.Q6J("variantId",G.variant.id)}}function ne(M,K){if(1&M&&y.YNc(0,x,1,1,"cvc-variant-popover",8),2&M){const G=y.oxw(2);y.Q6J("ngIf",G.enablePopover)}}const Q=M=>({deprecated:M});function ye(M,K){if(1&M){const G=y.EpF();y.TgZ(0,"nz-tag",6),y.NdJ("nzOnClose",function(ee){y.CHM(G);const se=y.oxw();return y.KtG(se.itemClosed(ee))}),y.YNc(1,I,0,0,"ng-template",5),y.qZA(),y.YNc(2,ne,1,1,"ng-template",null,7,y.W1O)}if(2&M){const G=y.MAs(3),Y=y.oxw(),ee=y.MAs(6);y.Q6J("ngClass",y.VKq(6,Q,Y.variant.deprecated))("nzPopoverMouseEnterDelay",Y.onCloseClicked?0:.5)("nzPopoverContent",G)("nzPopoverTrigger",Y.enablePopover?"hover":null)("nzMode",Y.onCloseClicked?"closeable":"default"),y.xp6(),y.Q6J("ngTemplateOutlet",ee)}}function ve(M,K){}function ae(M,K){if(1&M&&y.YNc(0,ve,0,0,"ng-template",5),2&M){y.oxw();const G=y.MAs(2);y.Q6J("ngTemplateOutlet",G)}}function te(M,K){if(1&M&&(y.ynx(0),y._uU(1),y.ALo(2,"truncate"),y.BQk()),2&M){const G=y.oxw(2);y.xp6(),y.hij(" ",y.xi3(2,1,G.variant.name,20)," ")}}function q(M,K){if(1&M&&y._uU(0),2&M){const G=y.oxw(2);y.hij(" ",G.variant.name," ")}}function j(M,K){if(1&M&&(y.TgZ(0,"cvc-icon-badges",10),y._UZ(1,"i",11),y.qZA(),y.YNc(2,te,3,4,"ng-container",0)(3,q,1,1,"ng-template",null,12,y.W1O)),2&M){const G=y.MAs(4),Y=y.oxw();y.Q6J("flagged",Y.variant.flagged)("entityColor",Y.iconColor),y.xp6(),y.Q6J("nzTwotoneColor",Y.iconColor),y.xp6(),y.Q6J("ngIf",Y.truncateLongName)("ngIfElse",G)}}let k=(()=>{class M extends n.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1,this.iconColor=(0,r.f)("Variant")}idFunction(){return this.variant.id}ngOnInit(){if(super.ngOnInit(),void 0===this.variant)throw new Error("cvc-variant-tag requires LinkableVariant input, none supplied.")}}return M.\u0275fac=function(G){return new(G||M)},M.\u0275cmp=y.Xpm({type:M,selectors:[["cvc-variant-tag"]],inputs:{variant:"variant",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[y.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","",3,"ngClass","nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["popoverContent",""],[3,"variantId",4,"ngIf"],[3,"variantId"],[3,"flagged","entityColor"],["nz-icon","","nzType","civic-variant","nzTheme","twotone",3,"nzTwotoneColor"],["fullName",""]],template:function(G,Y){if(1&G&&y.YNc(0,V,3,2,"ng-container",0)(1,ye,4,8,"ng-template",null,1,y.W1O)(3,ae,1,1,"ng-template",null,2,y.W1O)(5,j,5,5,"ng-template",null,3,y.W1O),2&G){const ee=y.MAs(4);y.Q6J("ngIf",Y.linked)("ngIfElse",ee)}},dependencies:[e.mk,e.O5,e.tP,u.rH,N.j,H.lU,U.Ls,w.m,S.b,L.W],styles:["[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.submitted, [_nghost-%COMP%]     nz-tag.accepted, [_nghost-%COMP%]     nz-tag.deprecated{border-right-width:2px}[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.deprecated{border-color:#e6e6e6;background-color:#fff;color:#999999d9}[_nghost-%COMP%]     nz-tag.submitted{border-color:#ffe58f}[_nghost-%COMP%]     nz-tag.accepted{border-color:#b7eb8f}[_nghost-%COMP%]{display:inline-block}"],changeDetection:0}),M})()},7528:(bt,Te,c)=>{c.d(Te,{Q:()=>S});var n=c(6814),r=c(4190),y=c(5695),e=c(551),u=c(7417),N=c(6446),H=c(2524),U=c(3146),w=c(9212);let S=(()=>{class L{}return L.\u0275fac=function(V){return new(V||L)},L.\u0275mod=w.oAB({type:L}),L.\u0275inj=w.cJS({imports:[n.ez,r.Bz,y.X,u.$6,e.PV,H.s,N.k,U.C]}),L})()},3702:(bt,Te,c)=>{c.d(Te,{t:()=>r});var n=c(9212);let r=(()=>{class y{transform(u,N){return u?"verbose"==N?"TIER_I_LEVEL_A"===u?"Tier I - Level A":"TIER_I_LEVEL_B"===u?"Tier I - Level B":"TIER_II_LEVEL_C"===u?"Tier II - Level C":"TIER_II_LEVEL_D"===u?"Tier II - Level D":"TIER_III"===u?"Tier III":"TIER_IV"===u?"Tier IV":"Not Applicable":u.toUpperCase().replace("TIER","").replace("LEVEL","").replace(/ /g,"").replace(/_/g,""):""}}return y.\u0275fac=function(u){return new(u||y)},y.\u0275pipe=n.Yjl({name:"formatAmp",type:y,pure:!0}),y})()},2616:(bt,Te,c)=>{c.d(Te,{a:()=>y});var n=c(2023),r=c(9212);let y=(()=>{class e{transform(N){return(0,n.f)(N)}}return e.\u0275fac=function(N){return new(N||e)},e.\u0275pipe=r.Yjl({name:"entityColor",type:e,pure:!0}),e})()},6967:(bt,Te,c)=>{c.d(Te,{Do:()=>N});var n=c(313),r=c(2),y=c(9212);const e=new Map([[n.Sx0.A,"Validated association"],[n.Sx0.B,"Clinical evidence"],[n.Sx0.C,"Case study"],[n.Sx0.D,"Preclinical evidence"],[n.Sx0.E,"Inferential association"]]),u=new Map([[1,"One Star"],[2,"Two Stars"],[3,"Three Stars"],[4,"Four Stars"],[5,"Five Stars"]]);let N=(()=>{class H{transform(w,S="display-string"){return null==w?"":"short-string"===S&&1===w.toString().length?"string"==typeof w?w:w.toString():"icon-name"===S?"number"==typeof w?`civic-rating${w}`:1===w.length?`civic-level${w.toLowerCase()}`:`civic-${w.replace(/_/g,"").toLowerCase()}`:"number"==typeof w?u.get(w)||w.toString():1===w.length?e.get(w)||w:(0,r.E)(w)}}return H.\u0275fac=function(w){return new(w||H)},H.\u0275pipe=y.Yjl({name:"evidenceEnumDisplay",type:H,pure:!0}),H})()},8004:(bt,Te,c)=>{c.d(Te,{v:()=>N});var n=c(313);const r={evidenceType:{[n.kqt.Diagnostic]:"Evidence pertains to a variant's impact on patient diagnosis (cancer subtype)",[n.kqt.Functional]:"Evidence pertains to a variant that alters biological function from the reference state",[n.kqt.Oncogenic]:"Evidence pertains to a somatic variant's involvement in tumor pathogenesis as described by the Hallmarks of Cancer",[n.kqt.Predictive]:"Evidence pertains to a variant's effect on therapeutic response",[n.kqt.Predisposing]:"Evidence pertains to a germline variant's role in conferring susceptibility to disease (including pathogenicity evaluations)",[n.kqt.Prognostic]:"Evidence pertains to a variant's impact on disease progression, severity, or patient survival"},assertionType:{[n.uBv.Diagnostic]:"Assertion pertains to a variant's impact on patient diagnosis (cancer subtype)",[n.uBv.Predictive]:"Assertion pertains to a variant's effect on therapeutic response",[n.uBv.Predisposing]:"Assertion pertains to a germline variant's role in conferring susceptibility to disease (including pathogenicity evaluations)",[n.uBv.Prognostic]:"Assertion pertains to a variant's impact on disease progression, severity, or patient survival",[n.uBv.Oncogenic]:"Assertion pertains to a somatic variant's role in driving tumor formation, growth, and other processes related to the Hallmarks of Cancer"},variantOrigin:{[n.huM.Somatic]:"Variant is a mutation, found only in tumor cells, having arisen in a specific tissue (non-germ cell), and is not expected to be inherited or passed to offspring",[n.huM.RareGermline]:"Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in less than 1% of the population relevant to this evidence item",[n.huM.CommonGermline]:"Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in at least 1% of the population relevant to this evidence item",[n.huM.Unknown]:"The variant origin is uncertain based on the available evidence",[n.huM.Na]:"The variant type (e.g., expression) is not compatible (or easily classified) with the CIViC concept of variant origin",[n.huM.Combined]:"Variants in the Molecular Profile span multiple Origin types."},evidenceLevel:{[n.Sx0.A]:"Proven/consensus association in human medicine",[n.Sx0.B]:"Clinical trial or other primary patient data supports association",[n.Sx0.C]:"Individual case reports from clinical journals",[n.Sx0.D]:"In vivo or in vitro models support association",[n.Sx0.E]:"Indirect evidence"},evidenceLevelBrief:{[n.Sx0.A]:"Validated association",[n.Sx0.B]:"Clinical evidence",[n.Sx0.C]:"Case Study",[n.Sx0.D]:"Preclinical evidence",[n.Sx0.E]:"Inferential association"},therapyInteractionType:{[n.wkr.Combination]:"The therapies listed were used as part of a combination therapy approach",[n.wkr.Sequential]:"The therapies listed were used at separate timepoints in the same treatment plan",[n.wkr.Substitutes]:"The therapies listed are often considered to be of the same family, or behave similarly in a treatment setting"},evidenceRating:{1:"Poor - Claim is not supported well by experimental evidence. Results are not reproducible, or have very small sample size. No follow-up is done to validate novel claims",2:"Adequate - Evidence is not well supported by experimental data, and little follow-up data is available. Experiments may lack proper controls, have small sample size, or are not statistically convincing",3:"Average - Evidence is convincing, but not supported by a breadth of experiments. May be smaller scale projects, or novel results without many follow-up experiments. Discrepancies from expected results are explained and not concerning",4:"Strong - Well supported evidence. Experiments are well controlled, and results are convincing. Any discrepancies from expected results are well-explained and not concerning",5:"Excellent - Solid, well supported evidence from a lab or journal with respected academic standing. Experiments are well controlled, and results are clean and reproducible across multiple replicates. Evidence confirmed using separate methods"}},y={significance:{PREDICTIVE:{ADVERSE_RESPONSE:{EvidenceItem:"Associated with an adverse response to theraputic treatment",Assertion:"Associated with an adverse response to theraputic treatment"},REDUCED_SENSITIVITY:{EvidenceItem:"Response to treatment is lower than seen in other treatment contexts",Assertion:"Response to treatment is lower than seen in other treatment contexts"},RESISTANCE:{EvidenceItem:"Associated with clinical or preclinical resistance to treatment",Assertion:"Associated with clinical or preclinical resistance to treatment"},SENSITIVITYRESPONSE:{EvidenceItem:"Associated with clinical or preclinical response to treatment",Assertion:"Associated with a clinical or preclinical response to treatment"},NA:{EvidenceItem:"Clinical Significance is not applicable",Assertion:"Clinical Significance is not applicable"}},DIAGNOSTIC:{POSITIVE:{EvidenceItem:"Associated with diagnosis of disease or subtype",Assertion:"Associated with diagnosis of disease or subtype"},NEGATIVE:{EvidenceItem:"Associated with lack of disease or subtype",Assertion:"Associated with lack of disease or subtype"}},PROGNOSTIC:{BETTER_OUTCOME:{EvidenceItem:"Demonstrates better than expected clinical outcome",Assertion:"Demonstrates better than expected clinical outcome"},POOR_OUTCOME:{EvidenceItem:"Demonstrates worse than expected clinical outcome",Assertion:"Demonstrates worse than expected clinical outcome"},Na:{EvidenceItem:"Clinical Significance is not applicable",Assertion:"Clinical Significance is not applicable"}},PREDISPOSING:{PATHOGENIC:{Assertion:"Very strong evidence the variant is pathogenic"},LIKELY_PATHOGENIC:{Assertion:"Strong evidence (>90% certainty) the variant is pathogenic"},BENIGN:{Assertion:"Very strong evidence the variant is benign"},LIKELY_BENIGN:{Assertion:"Not expected to have a major effect on disease"},UNCERTAIN_SIGNIFICANCE:{Assertion:"Does not meet the ACMG/AMP criteria for pathogenic/benign, or the evidence is conflicting"},Na:{EvidenceItem:"Clinical Significance is not applicable"},PREDISPOSITION:{EvidenceItem:"Germline variant has predisposing potential for cancer, and may meet ACMG/AMP criteria supporting pathogenic or benign classification."},PROTECTIVENESS:{EvidenceItem:"Germline variant has properties that protect individuals from acquiring cancer."}},ONCOGENIC:{ONCOGENICITY:{EvidenceItem:"Somatic variant has oncogenic potential for driving cancer, and may meet ClinGen/CGC/VICC criteria supporting pathogenic or benign classification."},PROTECTIVENESS:{EvidenceItem:"Somatic variant has a protective role and minimizes co-occuring driver variants, tumor malignancy, or other oncogenic tumor properties."},ONCOGENIC:{Assertion:"Very strong evidence the variant is oncogenic."},LIKELY_ONCOGENIC:{Assertion:"Strong evidence the variant is oncogenic."},BENIGN:{Assertion:"Very strong evidence the variant does not have oncogenic properties."},LIKELY_BENIGN:{Assertion:"Strong evidence the variant does not have oncogenic properties."},UNCERTAIN_SIGNIFICANCE:{Assertion:"Does not meet guideline criteria for oncogenic/benign, or the evidence is conflicting."}}},evidenceDirection:{PREDICTIVE:{SUPPORTS:{EvidenceItem:"The experiment or study supports this variant's response to a therapy"},DOES_NOT_SUPPORT:{EvidenceItem:"The experiment or study does not support, or was inconclusive of an interaction between this variant and a therapy"}},DIAGNOSTIC:{SUPPORTS:{EvidenceItem:"The experiment or study supports this variant's impact on the diagnosis of disease or subtype"},DOES_NOT_SUPPORT:{EvidenceItem:"The experiment or study does not support this variant's impact on diagnosis of disease or subtype"}},PROGNOSTIC:{SUPPORTS:{EvidenceItem:"The experiment or study supports this variant's impact on prognostic outcome"},DOES_NOT_SUPPORT:{EvidenceItem:"The experiment or study does not support a prognostic association between variant and outcome"}},PREDISPOSING:{Na:{EvidenceItem:"Evidence Direction is not applicable"},SUPPORTS:{EvidenceItem:"The evidence supports a pathogenic or a protective role for a germline variant in cancer."},DOES_NOT_SUPPORT:{EvidenceItem:"The evidence supports a benign (if Clinical Significance is Predisposition) or lack or protective (if Clinical Significance is Protectiveness) role for a germline variant in cancer."}},FUNCTIONAL:{SUPPORTS:{EvidenceItem:"The experiment or study supports this variant causing alteration or non-alteration of the gene product function"},DOES_NOT_SUPPORT:{EvidenceItem:"The experiment or study does not support this variant causing alteration or non-alteration of the gene product function"}},ONCOGENIC:{NA:{EvidenceItem:"Evidence Direction is not applicable for Oncogenic Evidence Type"},SUPPORTS:{EvidenceItem:"The evidence supports an oncogenic or protective role for a somatic variant"},DOES_NOT_SUPPORT:{EvidenceItem:"The evidence does not support an oncogenic or protective role for a somatic variant"}}},assertionDirection:{PREDICTIVE:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support this variant's response to a therapy"},DOES_NOT_SUPPORT:{Assertion:"The Assertion and associated evidence does not support, or was inconclusive of an interaction between this variant and a therapy"}},DIAGNOSTIC:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support this variant's impact on the diagnosis of disease or subtype"},DOES_NOT_SUPPORT:{Assertion:"The Assertion and associated evidence does not support this variant's impact on diagnosis of disease or subtype"}},PROGNOSTIC:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support this variant's impact on prognostic outcome"},DOES_NOT_SUPPORT:{Assertion:"The Assertion and associated evidence does not support a prognostic association between variant and outcome"}},PREDISPOSING:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support a variant's impact on predisposing outcome"}},FUNCTIONAL:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support this variant causing alteration or non-alteration of the gene product function"},DOES_NOT_SUPPORT:{Assertion:"The Assertion and associated evidence does not support this variant causing alteration or non-alteration of the gene product function"}},ONCOGENIC:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support a variant's oncogenic, benign, or uncertain significance"}}}};var u=c(9212);let N=(()=>{class H{transform(w,S,L=void 0,B=void 0){return S&&w?function e(H,U,w,S){let L;return L=w&&S?y[H][w][U][S]:r[H][U],L||""}(S,w,L,B):""}}return H.\u0275fac=function(w){return new(w||H)},H.\u0275pipe=u.Yjl({name:"enumTooltip",type:H,pure:!0}),H})()},7334:(bt,Te,c)=>{c.d(Te,{A:()=>y});var n=c(9212),r=c(6593);let y=(()=>{class e{constructor(N){this.sanitizer=N}transform(N,H){if(!H||""==H)return N;const U=new RegExp(H,"gi"),w=N.match(U);if(!w)return N;let S=N.replace(U,`<span class='typeahead-match'>${w[0]}</span>`);return this.sanitizer.bypassSecurityTrustHtml(S)}}return e.\u0275fac=function(N){return new(N||e)(n.Y36(r.H7,16))},e.\u0275pipe=n.Yjl({name:"highlightTypeahead",type:e,pure:!0}),e})()},2524:(bt,Te,c)=>{c.d(Te,{s:()=>e});var n=c(6814),r=c(7023),y=c(9212);let e=(()=>{class u{}return u.\u0275fac=function(H){return new(H||u)},u.\u0275mod=y.oAB({type:u}),u.\u0275inj=y.cJS({providers:[r.l],imports:[n.ez]}),u})()},7023:(bt,Te,c)=>{c.d(Te,{l:()=>y});var n=c(2666),r=c(9212);let y=(()=>{class e{transform(N){return N?(0,n.c)(N):""}}return e.\u0275fac=function(N){return new(N||e)},e.\u0275pipe=r.Yjl({name:"sourceTypeDisplay",type:e,pure:!0}),e})()},5869:(bt,Te,c)=>{c.d(Te,{W:()=>r});var n=c(9212);let r=(()=>{class y{constructor(){}transform(u,N=25){if(u.length>N){let U=u.slice(0,N);var H=U.lastIndexOf(" ");return U.slice(0,H)+"\u2026"}return u}}return y.\u0275fac=function(u){return new(u||y)},y.\u0275pipe=n.Yjl({name:"truncate",type:y,pure:!0}),y})()},1201:(bt,Te,c)=>{c.d(Te,{Z:()=>r});var n=c(9212);let r=(()=>{class y{transform(u){return u?`civic-${u.replace(/_/g,"").toLowerCase()}`:""}}return y.\u0275fac=function(u){return new(u||y)},y.\u0275pipe=n.Yjl({name:"typenameToIcon",type:y,pure:!0}),y})()},7473:(bt,Te,c)=>{c.d(Te,{Y:()=>y});var n=c(5619),r=c(9212);let y=(()=>{class e{constructor(){this.networkError$=new n.X(void 0)}clearErrors(){this.networkError$.next(void 0)}}return e.\u0275fac=function(N){return new(N||e)},e.\u0275prov=r.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},951:(bt,Te,c)=>{c.d(Te,{a:()=>L});var S,n=c(655),r=c(313),y=c(1791),e=c(7398),u=c(7921),N=c(7081),H=c(4223),U=c(9212),w=c(9862);let L=((S=class{constructor(V,I){function x(te){return!(!te||te.role!==r.i44.Admin)}function ne(te){return!(!te||te.role!==r.i44.Editor&&te.role!==r.i44.Admin)}function Q(te){return!(!te||te.role!==r.i44.Curator)}function ye(te){return!(!te||te.role!==r.i44.Curator&&te.role!==r.i44.Editor&&te.role!==r.i44.Admin)}function ve(te){return!(!te||te.role!==r.i44.Editor&&te.role!==r.i44.Admin||!te.mostRecentConflictOfInterestStatement||te.mostRecentConflictOfInterestStatement?.coiStatus!=r.Mgx.Conflict&&te.mostRecentConflictOfInterestStatement?.coiStatus!=r.Mgx.Valid)}function ae(te){if(te.mostRecentOrganizationId)return te.organizations.find(q=>q.id===te.mostRecentOrganizationId)}this.viewerBaseGQL=V,this.http=I,this.initialViewer={mostRecentOrg:void 0,signedIn:!1,isAdmin:!1,isEditor:!1,isCurator:!1,canCurate:!1,canModerate:!1,invalidCoi:!0},this.queryRef=this.viewerBaseGQL.watch(void 0,{notifyOnNetworkStatusChange:!1}),this.viewer$=this.queryRef.valueChanges.pipe((0,H.j)("data","viewer"),(0,e.U)(te=>({...te,signedIn:null!=te,signedOut:null==te,canCurate:ye(te),canModerate:ve(te),isAdmin:x(te),isEditor:ne(te),isCurator:Q(te),organizations:null==te?[]:te.organizations,mostRecentOrg:null==te?void 0:ae(te),invalidCoi:ne(te)&&(!te.mostRecentConflictOfInterestStatement||te.mostRecentConflictOfInterestStatement.coiStatus===r.Mgx.Expired||te.mostRecentConflictOfInterestStatement.coiStatus===r.Mgx.Missing)})),(0,u.O)(this.initialViewer),(0,N.d)(1)),this.signedIn$=this.viewer$.pipe((0,e.U)(te=>te.signedIn)),this.signedOut$=this.viewer$.pipe((0,e.U)(te=>te.signedOut)),this.isAdmin$=this.viewer$.pipe((0,e.U)(te=>x(te))),this.isEditor$=this.viewer$.pipe((0,e.U)(te=>ne(te))),this.isCurator$=this.viewer$.pipe((0,e.U)(te=>Q(te))),this.canCurate$=this.viewer$.pipe((0,e.U)(te=>ye(te))),this.canModerate$=this.viewer$.pipe((0,e.U)(te=>ve(te)))}signOut(){this.http.get("/api/sign_out").pipe((0,y.t)(this)).subscribe(()=>this.queryRef.refetch())}refetch(){this.queryRef.refetch()}}).\u0275fac=function(V){return new(V||S)(U.LFG(r.Tt7),U.LFG(w.eN))},S.\u0275prov=U.Yz7({token:S,factory:S.\u0275fac,providedIn:"root"}),S);L=(0,n.gn)([(0,y.c)()],L)},8130:(bt,Te,c)=>{c.d(Te,{a:()=>r});var n=c(9212);let r=(()=>{class y{constructor(){this.linked=!0,this.popoverVisible=!1}ngOnInit(){this.onCloseClicked&&(this.linked=!1)}itemClosed(u){this.popoverVisible=!1,this.onCloseClicked&&this.onCloseClicked(this.idFunction())}}return y.\u0275fac=function(u){return new(u||y)},y.\u0275cmp=n.Xpm({type:y,selectors:[["ng-component"]],inputs:{onCloseClicked:"onCloseClicked",linked:"linked"},decls:0,vars:0,template:function(u,N){},encapsulation:2}),y})()},2:(bt,Te,c)=>{function n(r){if("number"==typeof r||"boolean"==typeof r)return r;let y;if("NA"===r)y=["Not Applicable"];else if("SENSITIVITYRESPONSE"===r)y=["Sensitivity","/","Response"];else{y=r.toLowerCase().replace(/_/g," ").split(" ");for(var e=0;e<y.length;e++)y[e]=y[e].charAt(0).toUpperCase()+y[e].slice(1)}return y.join(" ")}c.d(Te,{E:()=>n})},2666:(bt,Te,c)=>{function n(r){switch(r){case"ASCO":return"ASCO";case"PUBMED":return"PubMed";case"ASH":return"ASH";default:return r}}c.d(Te,{c:()=>n})},2023:(bt,Te,c)=>{c.d(Te,{f:()=>r});const n=new Map([["Assertion","#7243b5"],["ClinicalTrial","#ac3996"],["CoordinateSystem","#f68f37"],["Disease","#e62f76"],["Event","#1db8a9"],["EvidenceItem","#2a63b6"],["Feature","#07aff0"],["MolecularProfile","#33b358"],["NccnGuideline","#49566D"],["Phenotype","#1db8a9"],["Source","#f9ba45"],["Therapy","#ac3996"],["Variant","#74d34c"],["VariantGroup","#74d34c"],["VariantType","#74d34c"],["Comment","#44d8ef"],["Event","#ffdb00"],["Flag","#e24759"],["Queue","#666699"],["Revision","#f0673a"],["Curator","#a0d8f5"],["Editor","#58a0c4"],["Admin","#58a0c4"],["Organization","#3d7b99"],["Rejected","#BBBBBB"],["Greyscale","#999999"]]);function r(y){let e="#AAAAAA";if(y){const u=n.get(y);u&&(e=u)}return e}},2024:(bt,Te,c)=>{c.d(Te,{U:()=>u});var n=c(8645),r=c(5619),y=c(9773),e=c(4716);class u{constructor(H){this.networkErrorService=H}mutate(H,U,w,S){let L=new n.x,B={isSubmitting$:new r.X(!1),submitSuccess$:new r.X(!1),submitError$:new r.X([]),cleanup:()=>{L.next(),L.complete()}};return B.isSubmitting$.next(!0),H.mutate(U,w).pipe((0,y.R)(L),(0,e.x)(()=>{B.isSubmitting$.next(!1)})).subscribe({next:V=>{V.data&&S&&S(V.data)},error:V=>{V.graphQLErrors.length>0?B.submitError$.next(V.graphQLErrors.map(I=>I.message)):V.networkError&&this.networkErrorService.networkError$.next(V.networkError),B.cleanup()},complete:()=>{B.submitError$.next([]),B.submitSuccess$.next(!0),this.networkErrorService.networkError$.next(void 0),B.cleanup()}}),B}}},9333:(bt,Te,c)=>{c.d(Te,{h:()=>y});var n=c(6814),r=c(9212);let y=(()=>{class e{}return e.\u0275fac=function(N){return new(N||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[n.ez]}),e})()},8656:(bt,Te,c)=>{c.d(Te,{P:()=>V});var n=c(9212),r=c(6814),y=c(6109);function e(I,x){1&I&&(n.ynx(0),n._uU(1," N/A "),n.BQk())}function u(I,x){1&I&&(n.ynx(0),n._uU(1," Not applicable "),n.BQk())}function N(I,x){if(1&I&&(n.TgZ(0,"span",4),n.ynx(1,0),n.YNc(2,e,2,0,"ng-container",5)(3,u,2,0,"ng-container",6),n.BQk(),n.qZA()),2&I){const ne=n.oxw();n.xp6(),n.Q6J("ngSwitch",ne.cvcDisplayMode),n.xp6(),n.Q6J("ngSwitchCase","small")}}function H(I,x){1&I&&(n.ynx(0),n._uU(1," \u2013\xa0\u2013 "),n.BQk())}function U(I,x){1&I&&(n.ynx(0),n._uU(1,"Not specified"),n.BQk())}function w(I,x){if(1&I&&(n.TgZ(0,"span",7),n.ynx(1,0),n.YNc(2,H,2,0,"ng-container",5)(3,U,2,0,"ng-container",6),n.BQk(),n.qZA()),2&I){const ne=n.oxw();n.xp6(),n.Q6J("ngSwitch",ne.cvcDisplayMode),n.xp6(),n.Q6J("ngSwitchCase","small")}}function S(I,x){1&I&&(n.ynx(0),n._uU(1,"!?"),n.BQk())}function L(I,x){1&I&&(n.ynx(0),n._uU(1,"Unspecified"),n.BQk())}function B(I,x){if(1&I&&(n.TgZ(0,"span",8),n.ynx(1,0),n.YNc(2,S,2,0,"ng-container",5)(3,L,2,0,"ng-container",6),n.BQk(),n.qZA()),2&I){const ne=n.oxw();n.xp6(),n.Q6J("ngSwitch",ne.cvcDisplayMode),n.xp6(),n.Q6J("ngSwitchCase","small")}}let V=(()=>{class I{constructor(){this.cvcEmptyCategory="not-applicable",this.cvcDisplayMode="default"}}return I.\u0275fac=function(ne){return new(ne||I)},I.\u0275cmp=n.Xpm({type:I,selectors:[["cvc-empty-value"]],inputs:{cvcEmptyCategory:"cvcEmptyCategory",cvcDisplayMode:"cvcDisplayMode"},decls:4,vars:4,consts:[[3,"ngSwitch"],["class","empty-symbol not-applicable","nz-tooltip","","nzTooltipTitle","Value is not applicable",4,"ngSwitchCase"],["nz-tooltip","","nzTooltipTitle","Unspecified","class","empty-symbol unspecified","nz-tooltip","","nzTooltipTitle","Value is unspecified",4,"ngSwitchCase"],["nz-tooltip","","nzTooltipTitle","INVALID","class","empty-symbol invalid","nz-tooltip","","nzTooltipTitle","Error: value requires specification",4,"ngSwitchCase"],["nz-tooltip","","nzTooltipTitle","Value is not applicable",1,"empty-symbol","not-applicable"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["nz-tooltip","","nzTooltipTitle","Unspecified","nz-tooltip","","nzTooltipTitle","Value is unspecified",1,"empty-symbol","unspecified"],["nz-tooltip","","nzTooltipTitle","INVALID","nz-tooltip","","nzTooltipTitle","Error: value requires specification",1,"empty-symbol","invalid"]],template:function(ne,Q){1&ne&&(n.ynx(0,0),n.YNc(1,N,4,2,"span",1)(2,w,4,2,"span",2)(3,B,4,2,"span",3),n.BQk()),2&ne&&(n.Q6J("ngSwitch",Q.cvcEmptyCategory),n.xp6(),n.Q6J("ngSwitchCase","not-applicable"),n.xp6(),n.Q6J("ngSwitchCase","unspecified"),n.xp6(),n.Q6J("ngSwitchCase","invalid"))},dependencies:[r.RF,r.n9,r.ED,y.SY],styles:[".empty-symbol[_ngcontent-%COMP%]{font-style:oblique;display:inline-block;white-space:no-wrap}.empty-symbol.not-applicable[_ngcontent-%COMP%]{color:#ccc;font-weight:500}.empty-symbol.unspecified[_ngcontent-%COMP%]{display:inline-block;color:#ccc;font-weight:500;padding:0 3px}.empty-symbol.invalid[_ngcontent-%COMP%]{display:inline-block;color:#ff4d4f;font-weight:700}"]}),I})()},821:(bt,Te,c)=>{c.d(Te,{M:()=>u});var n=c(6814),r=c(551),y=c(6109),e=c(9212);let u=(()=>{class N{}return N.\u0275fac=function(U){return new(U||N)},N.\u0275mod=e.oAB({type:N}),N.\u0275inj=e.cJS({imports:[n.ez,y.cg,r.PV]}),N})()},9835:(bt,Te,c)=>{c.d(Te,{J:()=>_t});var n=c(9212),r=c(9111),y=c(6814),e=c(156),u=c(2851),N=c(1813),H=c(96),U=c(4402),w=c(8213),S=c(3743),L=c(8545);function B(ft,$e){if(1&ft&&n._UZ(0,"cvc-molecular-profile-popover",9),2&ft){const Oe=n.oxw();n.Q6J("molecularProfileId",Oe.entity.entityId)}}function V(ft,$e){if(1&ft&&n._UZ(0,"cvc-disease-popover",10),2&ft){const Oe=n.oxw();n.Q6J("diseaseId",Oe.entity.entityId)}}function I(ft,$e){if(1&ft&&n._UZ(0,"cvc-therapy-popover",11),2&ft){const Oe=n.oxw();n.Q6J("therapyId",Oe.entity.entityId)}}function x(ft,$e){if(1&ft&&n._UZ(0,"cvc-source-popover",12),2&ft){const Oe=n.oxw();n.Q6J("sourceId",Oe.entity.entityId)}}function ne(ft,$e){if(1&ft&&n._UZ(0,"cvc-phenotype-popover",13),2&ft){const Oe=n.oxw();n.Q6J("phenotypeId",Oe.entity.entityId)}}function Q(ft,$e){if(1&ft&&n._UZ(0,"cvc-evidence-popover",14),2&ft){const Oe=n.oxw();n.Q6J("evidenceId",Oe.entity.entityId)}}function ye(ft,$e){if(1&ft&&n._UZ(0,"cvc-feature-popover",15),2&ft){const Oe=n.oxw();n.Q6J("featureId",Oe.entity.entityId)}}function ve(ft,$e){if(1&ft&&n._UZ(0,"cvc-variant-popover",16),2&ft){const Oe=n.oxw();n.Q6J("variantId",Oe.entity.entityId)}}const ae=["MolecularProfile","Disease","Therapy","Phenotype","Source","Gene","Variant","EvidenceItem"];let te=(()=>{class ft{ngOnInit(){if(null==this.entity)throw new Error("entity input is required for CvcEntityTagPopoverComponent")}}return ft.\u0275fac=function(Oe){return new(Oe||ft)},ft.\u0275cmp=n.Xpm({type:ft,selectors:[["cvc-entity-tag-popover"]],inputs:{entity:"entity"},decls:9,vars:9,consts:[[3,"ngSwitch"],[3,"molecularProfileId",4,"ngSwitchCase"],[3,"diseaseId",4,"ngSwitchCase"],[3,"therapyId",4,"ngSwitchCase"],[3,"sourceId",4,"ngSwitchCase"],[3,"phenotypeId",4,"ngSwitchCase"],[3,"evidenceId",4,"ngSwitchCase"],[3,"featureId",4,"ngSwitchCase"],[3,"variantId",4,"ngSwitchCase"],[3,"molecularProfileId"],[3,"diseaseId"],[3,"therapyId"],[3,"sourceId"],[3,"phenotypeId"],[3,"evidenceId"],[3,"featureId"],[3,"variantId"]],template:function(Oe,re){1&Oe&&(n.ynx(0,0),n.YNc(1,B,1,1,"cvc-molecular-profile-popover",1)(2,V,1,1,"cvc-disease-popover",2)(3,I,1,1,"cvc-therapy-popover",3)(4,x,1,1,"cvc-source-popover",4)(5,ne,1,1,"cvc-phenotype-popover",5)(6,Q,1,1,"cvc-evidence-popover",6)(7,ye,1,1,"cvc-feature-popover",7)(8,ve,1,1,"cvc-variant-popover",8),n.BQk()),2&Oe&&(n.Q6J("ngSwitch",re.entity.entityType),n.xp6(),n.Q6J("ngSwitchCase","MolecularProfile"),n.xp6(),n.Q6J("ngSwitchCase","Disease"),n.xp6(),n.Q6J("ngSwitchCase","Therapy"),n.xp6(),n.Q6J("ngSwitchCase","Source"),n.xp6(),n.Q6J("ngSwitchCase","Phenotype"),n.xp6(),n.Q6J("ngSwitchCase","EvidenceItem"),n.xp6(),n.Q6J("ngSwitchCase","Feature"),n.xp6(),n.Q6J("ngSwitchCase","Variant"))},dependencies:[y.RF,y.n9,e._,u.I,N.p,H.a,U.S,w._,S.y,L.m],encapsulation:2,changeDetection:0}),ft})();var q=c(4190),j=c(551),k=c(5695),M=c(6109),K=c(7417),G=c(7334),Y=c(2616),ee=c(1201);function se(ft,$e){}function ze(ft,$e){if(1&ft){const Oe=n.EpF();n.TgZ(0,"span",6)(1,"nz-tag",7),n.NdJ("nzCheckedChange",function(){n.CHM(Oe);const xe=n.oxw();return n.KtG(xe.cvcTagCheckedChange)})("nzOnClose",function(xe){n.CHM(Oe);const Fe=n.oxw();return n.KtG(Fe.cvcOnClose.next(xe))}),n.TgZ(2,"span",8),n.YNc(3,se,0,0,"ng-template",9),n.qZA()()()}if(2&ft){const Oe=n.oxw(),re=n.MAs(6),xe=n.MAs(8);n.xp6(),n.Q6J("nzMode",Oe.cvcMode)("nzChecked",Oe.cvcTagChecked),n.xp6(),n.Q6J("nzPopoverContent",Oe.cvcShowPopover&&Oe.popoverInput?re:void 0),n.xp6(),n.Q6J("ngTemplateOutlet",xe)}}function Me(ft,$e){}function Ye(ft,$e){if(1&ft&&(n.TgZ(0,"span",13),n.YNc(1,Me,0,0,"ng-template",9),n.qZA()),2&ft){const Oe=n.oxw(2),re=n.MAs(8);n.Q6J("nzTooltipTitle",Oe.entity.tooltip),n.xp6(),n.Q6J("ngTemplateOutlet",re)}}function Ut(ft,$e){if(1&ft){const Oe=n.EpF();n.TgZ(0,"span",10)(1,"nz-tag",11),n.NdJ("nzOnClose",function(xe){n.CHM(Oe);const Fe=n.oxw();return n.KtG(Fe.cvcOnClose.next(xe))}),n.YNc(2,Ye,2,2,"span",12),n.qZA()()}if(2&ft){const Oe=n.oxw(),re=n.MAs(4);n.xp6(),n.Q6J("nzMode","closeable"),n.xp6(),n.Q6J("ngIf",Oe.entity&&Oe.entity.tooltip)("ngIfElse",re)}}function Et(ft,$e){}function Cn(ft,$e){if(1&ft&&(n.TgZ(0,"span",13),n.YNc(1,Et,0,0,"ng-template",9),n.qZA()),2&ft){const Oe=n.oxw(2),re=n.MAs(8);n.Q6J("nzTooltipTitle",Oe.entity.tooltip),n.xp6(),n.Q6J("ngTemplateOutlet",re)}}function Ot(ft,$e){if(1&ft&&(n.TgZ(0,"span",14),n.YNc(1,Cn,2,2,"span",12),n.qZA()),2&ft){const Oe=n.oxw(),re=n.MAs(4);n.xp6(),n.Q6J("ngIf",Oe.entity&&Oe.entity.tooltip)("ngIfElse",re)}}function hn(ft,$e){}function Kt(ft,$e){if(1&ft&&(n.TgZ(0,"span",8),n.YNc(1,hn,0,0,"ng-template",9),n.qZA()),2&ft){const Oe=n.oxw(),re=n.MAs(6),xe=n.MAs(8);n.Q6J("nzPopoverContent",Oe.popoverInput?re:void 0),n.xp6(),n.Q6J("ngTemplateOutlet",xe)}}function cn(ft,$e){if(1&ft&&n._UZ(0,"cvc-entity-tag-popover",16),2&ft){const Oe=n.oxw(2);n.Q6J("entity",Oe.popoverInput)}}function vn(ft,$e){if(1&ft&&n.YNc(0,cn,1,1,"cvc-entity-tag-popover",15),2&ft){const Oe=n.oxw();n.Q6J("ngIf",Oe.popoverInput)}}function lt(ft,$e){if(1&ft&&(n.TgZ(0,"span"),n.GkF(1,9),n.qZA()),2&ft){n.oxw();const Oe=n.MAs(4);n.xp6(),n.Q6J("ngTemplateOutlet",Oe)}}function Je(ft,$e){if(1&ft&&(n.TgZ(0,"a",23),n.GkF(1,9),n.qZA()),2&ft){n.oxw();const Oe=n.MAs(4),re=n.oxw(2);n.Q6J("routerLink",re.entity.link),n.xp6(),n.Q6J("ngTemplateOutlet",Oe)}}function gt(ft,$e){if(1&ft&&(n._UZ(0,"span",26),n.ALo(1,"typenameToIcon"),n.ALo(2,"entityColor")),2&ft){const Oe=n.oxw(4);n.Q6J("nzType",n.lcZ(1,2,Oe.typename))("nzTwotoneColor",n.lcZ(2,4,Oe.typename))}}function qe(ft,$e){if(1&ft&&(n.YNc(0,gt,3,6,"span",24),n._UZ(1,"span",25),n.ALo(2,"highlightTypeahead")),2&ft){n.oxw(2);const Oe=n.MAs(4),re=n.oxw();n.Q6J("ngIf",re.typename&&re.cvcShowIcon)("ngIfElse",Oe),n.xp6(),n.Q6J("innerHtml",n.xi3(2,3,re.entity.name,re.cvcEmphasize),n.oJD)}}function Zt(ft,$e){if(1&ft&&(n.ynx(0),n.YNc(1,lt,2,1,"span",20)(2,Je,2,2,"a",21)(3,qe,3,6,"ng-template",null,22,n.W1O),n.BQk()),2&ft){const Oe=n.oxw(2);n.xp6(),n.Q6J("ngIf",Oe.cvcDisableLink),n.xp6(),n.Q6J("ngIf",!Oe.cvcDisableLink)}}function on(ft,$e){}function Dn(ft,$e){if(1&ft&&(n.YNc(0,on,0,0,"ng-template",9),n._uU(1)),2&ft){n.oxw();const Oe=n.MAs(4),re=n.oxw();n.Q6J("ngTemplateOutlet",Oe),n.xp6(),n.hij(" CACHE-MISS (",re.cvcCacheId,") ")}}function Bn(ft,$e){1&ft&&n._UZ(0,"span",27)}function rn(ft,$e){if(1&ft&&n.YNc(0,Zt,5,2,"ng-container",17)(1,Dn,2,2,"ng-template",null,18,n.W1O)(3,Bn,1,0,"ng-template",null,19,n.W1O),2&ft){const Oe=n.MAs(2),re=n.oxw();n.Q6J("ngIf",re.entity)("ngIfElse",Oe)}}function _n(ft,$e){if(1&ft&&n._UZ(0,"cvc-entity-tag-popover",16),2&ft){const Oe=n.oxw(2);n.Q6J("entity",Oe.popoverInput)}}function Re(ft,$e){if(1&ft&&n.YNc(0,_n,1,1,"cvc-entity-tag-popover",15),2&ft){const Oe=n.oxw();n.Q6J("ngIf",Oe.popoverInput)}}const At=ft=>void 0!==ft&&ft.__typename&&ft.id&&void 0!==ft.name;let _t=(()=>{class ft{set cvcLinkableEntity(Oe){Oe&&this.setLinkableEntity(Oe)}set cvcCacheId(Oe){Oe&&this.setCachedLinkableEntity(Oe)}constructor(Oe){this.apollo=Oe,this.cvcContext="default",this.cvcMode="default",this.cvcDisableLink=!0,this.cvcTagChecked=!1,this.cvcHasTooltip=!1,this.cvcFullWidth=!1,this.cvcShowPopover=!1,this.cvcShowIcon=!0,this.cvcTagCheckedChange=new n.vpe,this.cvcOnClose=new n.vpe}hasPopover(Oe){return ae.includes(Oe)}setLinkableEntity(Oe){At(Oe)&&(this.typename=Oe.__typename,this.id=Oe.id,this.entity=Oe,this.setPopoverInput(Oe))}setCachedLinkableEntity(Oe){const[re,xe]=Oe.split(":");if(this.typename=re,this.id=+xe,!this.typename||!this.id)return void console.error(`entity-tag received an invalid cacheId: ${Oe}. Cache IDs must be in the format 'TYPENAME:ID'.`);let Fe;Fe=this.cvcDisableLink?this.cvcHasTooltip?{id:`${re}:${xe}`,fragment:r.Ps`
          fragment Linkable${re}Entity on ${re} {
            id
            name
            tooltip
          }
        `}:{id:`${re}:${xe}`,fragment:r.Ps`
          fragment Linkable${re}Entity on ${re} {
            id
            name
          }
        `}:{id:`${re}:${xe}`,fragment:r.Ps`
          fragment Linkable${re}Entity on ${re} {
            id
            name
            link
          }
        `};const nt=this.apollo.client.readFragment(Fe);At(nt)?(this.setPopoverInput(nt),this.entity=nt):console.error(`entity-tag could not find cached entity ${Oe}`)}setPopoverInput(Oe){At(Oe)&&this.hasPopover(Oe.__typename)&&(this.popoverInput={entityId:Oe.id,entityType:Oe.__typename})}ngOnChanges(Oe){Oe.cvcMode&&"checkable"===Oe.cvcMode.currentValue&&(this.cvcDisableLink=!0),Oe.cvcContext&&"default"!==Oe.cvcContext.currentValue&&(this.cvcDisableLink=!0)}}return ft.\u0275fac=function(Oe){return new(Oe||ft)(n.Y36(r._M))},ft.\u0275cmp=n.Xpm({type:ft,selectors:[["cvc-entity-tag"]],hostVars:40,hostBindings:function(Oe,re){2&Oe&&n.ekj("full-width",!0===re.cvcFullWidth)("label-max",void 0!==re.cvcTruncateLabel)("label-max-50","50px"===re.cvcTruncateLabel)("label-max-75","75px"===re.cvcTruncateLabel)("label-max-100","100px"===re.cvcTruncateLabel)("label-max-125","125px"===re.cvcTruncateLabel)("label-max-150","150px"===re.cvcTruncateLabel)("label-max-175","175px"===re.cvcTruncateLabel)("label-max-200","200px"===re.cvcTruncateLabel)("label-max-250","250px"===re.cvcTruncateLabel)("label-max-300","300px"===re.cvcTruncateLabel)("label-max-350","350px"===re.cvcTruncateLabel)("label-max-400","400px"===re.cvcTruncateLabel)("label-max-450","450px"===re.cvcTruncateLabel)("label-max-500","500px"===re.cvcTruncateLabel)("rejected","REJECTED"===re.cvcStatus)("accepted","ACCEPTED"===re.cvcStatus)("submitted","SUBMITTED"===re.cvcStatus)("new","NEW"===re.cvcStatus)("superseded","SUPERSEDED"===re.cvcStatus)},inputs:{cvcLinkableEntity:"cvcLinkableEntity",cvcCacheId:"cvcCacheId",cvcStatus:"cvcStatus",cvcContext:"cvcContext",cvcMode:"cvcMode",cvcEmphasize:"cvcEmphasize",cvcDisableLink:"cvcDisableLink",cvcTagChecked:"cvcTagChecked",cvcHasTooltip:"cvcHasTooltip",cvcFullWidth:"cvcFullWidth",cvcShowPopover:"cvcShowPopover",cvcShowIcon:"cvcShowIcon",cvcTruncateLabel:"cvcTruncateLabel"},outputs:{cvcTagCheckedChange:"cvcTagCheckedChange",cvcOnClose:"cvcOnClose"},features:[n.TTD],decls:11,vars:3,consts:[["class","default",4,"ngIf"],["class","select-item",4,"ngIf"],["class","multi-select-item",4,"ngIf"],["noTooltip",""],["popoverContent",""],["tagContent",""],[1,"default"],[3,"nzMode","nzChecked","nzCheckedChange","nzOnClose"],["nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverContent"],[3,"ngTemplateOutlet"],[1,"select-item"],[3,"nzMode","nzOnClose"],["nz-tooltip","",3,"nzTooltipTitle",4,"ngIf","ngIfElse"],["nz-tooltip","",3,"nzTooltipTitle"],[1,"multi-select-item"],[3,"entity",4,"ngIf"],[3,"entity"],[4,"ngIf","ngIfElse"],["cacheMiss",""],["noIcon",""],[4,"ngIf"],[3,"routerLink",4,"ngIf"],["tagLabel",""],[3,"routerLink"],["nz-icon","","nzTheme","twotone","class","tag-icon",3,"nzType","nzTwotoneColor",4,"ngIf","ngIfElse"],[1,"tag-label",3,"innerHtml"],["nz-icon","","nzTheme","twotone",1,"tag-icon",3,"nzType","nzTwotoneColor"],[1,"tag-no-icon"]],template:function(Oe,re){1&Oe&&n.YNc(0,ze,4,4,"span",0)(1,Ut,3,3,"span",1)(2,Ot,2,2,"span",2)(3,Kt,2,2,"ng-template",null,3,n.W1O)(5,vn,1,1,"ng-template",null,4,n.W1O)(7,rn,5,2,"ng-template",null,5,n.W1O)(9,Re,1,1,"ng-template",null,4,n.W1O),2&Oe&&(n.Q6J("ngIf","default"===re.cvcContext),n.xp6(),n.Q6J("ngIf","select-item"===re.cvcContext),n.xp6(),n.Q6J("ngIf","multi-select-item"===re.cvcContext))},dependencies:[y.O5,y.tP,q.rH,j.Ls,k.j,M.SY,K.lU,te,G.A,Y.a,ee.Z],styles:['.hide-dropdown[_ngcontent-%COMP%]{display:none}.label-max-50[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:50px;overflow:hidden;text-overflow:ellipsis}.label-max-75[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:75px;overflow:hidden;text-overflow:ellipsis}.label-max-100[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:100px;overflow:hidden;text-overflow:ellipsis}.label-max-125[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:125px;overflow:hidden;text-overflow:ellipsis}.label-max-150[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:150px;overflow:hidden;text-overflow:ellipsis}.label-max-175[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:175px;overflow:hidden;text-overflow:ellipsis}.label-max-200[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:200px;overflow:hidden;text-overflow:ellipsis}.label-max-250[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:250px;overflow:hidden;text-overflow:ellipsis}.label-max-300[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:300px;overflow:hidden;text-overflow:ellipsis}.label-max-350[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:350px;overflow:hidden;text-overflow:ellipsis}.label-max-400[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:400px;overflow:hidden;text-overflow:ellipsis}.label-max-450[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:450px;overflow:hidden;text-overflow:ellipsis}.label-max-500[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:500px;overflow:hidden;text-overflow:ellipsis}.rejected[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%], .submitted[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%], .accepted[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%], .deprecated[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{border-right-width:2px}.rejected[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%], .deprecated[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{border-color:#e6e6e6;background-color:#fff;color:#999999d9}.submitted[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{border-color:#ffe58f}.accepted[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{border-color:#b7eb8f}.full-width[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{width:100%}.full-width[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{width:100%}nz-tag[_ngcontent-%COMP%]{margin-right:0;margin-inline-end:4px}  -checkable{background-color:transparent;cursor:pointer}  -checkable:not(  -checkable-checked):hover{color:#1890ff}  -checkable:active,   -checkable-checked{color:#fff}  -checkable-checked{background-color:#1890ff}  -checkable:active{background-color:#096dd9}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{display:inline-block;padding:3px 2px 3px 4px;margin:-3px 0}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-no-icon[_ngcontent-%COMP%]{display:inline-block;width:4px}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;font-weight:400;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{display:inline-block;padding:3px 2px 3px 4px;margin:-3px 0}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-no-icon[_ngcontent-%COMP%]{display:inline-block;width:4px}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;font-weight:400;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{padding-right:0}.multi-select-item[_ngcontent-%COMP%]{display:inline-block;margin-top:-3px;margin-bottom:-3px;margin-left:-4px;padding-left:4px}.multi-select-item[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]:after{content:" "}.typeahead-match[_ngcontent-%COMP%]{font-weight:700}a.disabled[_ngcontent-%COMP%]{pointer-events:none}'],changeDetection:0}),ft})()},188:(bt,Te,c)=>{c.d(Te,{x:()=>ve});var n=c(6814),r=c(551),y=c(5695),e=c(2524),u=c(6109),N=c(4190),H=c(9212);let U=(()=>{class ae{}return ae.\u0275fac=function(q){return new(q||ae)},ae.\u0275mod=H.oAB({type:ae}),ae.\u0275inj=H.cJS({imports:[n.ez]}),ae})();var w=c(7417),S=c(5687),L=c(1855),B=c(9910),V=c(2064),I=c(1332),x=c(6247),ne=c(1207),Q=c(6446);let ye=(()=>{class ae{}return ae.\u0275fac=function(q){return new(q||ae)},ae.\u0275mod=H.oAB({type:ae}),ae.\u0275inj=H.cJS({imports:[n.ez,V._,S.t,x.n,ne.s,I.I,L.f,B.N,Q.k]}),ae})(),ve=(()=>{class ae{}return ae.\u0275fac=function(q){return new(q||ae)},ae.\u0275mod=H.oAB({type:ae}),ae.\u0275inj=H.cJS({imports:[n.ez,N.Bz,r.PV,y.X,u.cg,w.$6,U,e.s,ye,U]}),ae})()},9928:(bt,Te,c)=>{c.d(Te,{F:()=>Q});var w,n=c(655),r=c(1791),y=c(9212),e=c(4190),u=c(6814),N=c(2669),H=c(3903),U=c(8091);function S(ye,ve){if(1&ye&&y._UZ(0,"nz-alert",6),2&ye){y.oxw();const ae=y.MAs(3),te=y.oxw();y.MGl("nzMessage","Error Submitting ",te.entityType,""),y.Q6J("nzDescription",ae)}}function L(ye,ve){if(1&ye&&(y.TgZ(0,"li"),y._uU(1),y.qZA()),2&ye){const ae=ve.$implicit;y.xp6(),y.hij(" ",ae," ")}}function B(ye,ve){if(1&ye&&(y.TgZ(0,"ul"),y.YNc(1,L,2,1,"li",7),y.qZA()),2&ye){const ae=y.oxw().ngIf;y.xp6(),y.Q6J("ngForOf",ae)}}function V(ye,ve){if(1&ye&&(y.ynx(0),y.YNc(1,S,1,2,"nz-alert",4)(2,B,2,1,"ng-template",null,5,y.W1O),y.BQk()),2&ye){const ae=ve.ngIf;y.xp6(),y.Q6J("ngIf",ae.length>0)}}function I(ye,ve){if(1&ye&&(y.ynx(0),y._UZ(1,"nz-alert",8),y.BQk()),2&ye){const ae=y.oxw();y.xp6(),y.MGl("nzMessage","",ae.entityType," Submitted"),y.Q6J("nzDescription",ae.successMessage?ae.successMessage:null)}}function x(ye,ve){1&ye&&y.Hsn(0)}let Q=((w=class{set mutationState(ve){this._mutationState=ve,this.currentTimer&&clearTimeout(this.currentTimer),ve&&ve.submitSuccess$.pipe((0,r.t)(this)).subscribe(ae=>{ae&&(this.currentTimer=setTimeout(()=>{this.redirectUrl&&this.router.navigateByUrl(this.redirectUrl)},2500))})}get mutationState(){return this._mutationState}constructor(ve){this.router=ve}ngOnInit(){}}).\u0275fac=function(ve){return new(ve||w)(y.Y36(e.F0))},w.\u0275cmp=y.Xpm({type:w,selectors:[["cvc-form-submission-status-display"]],inputs:{mutationState:"mutationState",entityType:"entityType",successMessage:"successMessage",redirectUrl:"redirectUrl"},ngContentSelectors:["*"],decls:8,vars:10,consts:[[3,"nzSpinning"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["form",""],["nzType","error","nzShowIcon","",3,"nzMessage","nzDescription",4,"ngIf"],["errorList",""],["nzType","error","nzShowIcon","",3,"nzMessage","nzDescription"],[4,"ngFor","ngForOf"],["nzType","success","nzShowIcon","",3,"nzMessage","nzDescription"]],template:function(ve,ae){if(1&ve&&(y.F$t(),y.TgZ(0,"nz-spin",0),y.ALo(1,"ngrxPush"),y.YNc(2,V,4,1,"ng-container",1),y.ALo(3,"ngrxPush"),y.YNc(4,I,2,2,"ng-container",2),y.ALo(5,"ngrxPush"),y.YNc(6,x,1,0,"ng-template",null,3,y.W1O),y.qZA()),2&ve){const te=y.MAs(7);y.Q6J("nzSpinning",y.lcZ(1,4,null==ae.mutationState?null:ae.mutationState.isSubmitting$)),y.xp6(2),y.Q6J("ngIf",y.lcZ(3,6,null==ae.mutationState?null:ae.mutationState.submitError$)),y.xp6(2),y.Q6J("ngIf",y.lcZ(5,8,null==ae.mutationState?null:ae.mutationState.submitSuccess$))("ngIfElse",te)}},dependencies:[u.sg,u.O5,N.W,H.r,U.fM],encapsulation:2,changeDetection:0}),w);Q=(0,n.gn)([(0,r.c)()],Q)},1227:(bt,Te,c)=>{c.d(Te,{g:()=>N});var n=c(6814),r=c(3903),y=c(2574),e=c(2669),u=c(9212);let N=(()=>{class H{}return H.\u0275fac=function(w){return new(w||H)},H.\u0275mod=u.oAB({type:H}),H.\u0275inj=u.cJS({imports:[n.ez,e.j,r.L,y.zf]}),H})()},9208:(bt,Te,c)=>{c.d(Te,{S:()=>L0});var n=c(6223),r=c(4190),y=c(5545),e=c(9212),u=c(6814),N=c(3599),H=c(95);function U(l,v){if(1&l&&(e.ynx(0),e.TgZ(1,"nz-form-label",4),e._uU(2),e.qZA(),e.BQk()),2&l){const s=e.oxw();e.xp6(),e.Q6J("nzRequired",s.props.required&&!0!==s.props.hideRequiredMarker)("nzFor",s.id),e.xp6(),e.hij(" ",s.props.label," ")}}function w(l,v){if(1&l&&e._UZ(0,"formly-validation-message",5),2&l){const s=e.oxw();e.Q6J("field",s.field)}}let S=(()=>{class l extends y.n2{get errorState(){return this.showError?"error":""}}return l.\u0275fac=(()=>{let v;return function(h){return(v||(v=e.n5z(l)))(h||l)}})(),l.\u0275cmp=e.Xpm({type:l,selectors:[["formly-wrapper-nz-form-field"]],features:[e.qOj],decls:7,vars:4,consts:[[4,"ngIf"],[3,"nzValidateStatus","nzErrorTip","nzExtra"],["fieldComponent",""],["errorTpl",""],[3,"nzRequired","nzFor"],[3,"field"]],template:function(s,h){if(1&s&&(e.TgZ(0,"nz-form-item"),e.YNc(1,U,3,3,"ng-container",0),e.TgZ(2,"nz-form-control",1),e.GkF(3,null,2),e.YNc(5,w,1,1,"ng-template",null,3,e.W1O),e.qZA()()),2&s){const O=e.MAs(6);e.xp6(),e.Q6J("ngIf",h.props.label&&!0!==h.props.hideLabel),e.xp6(),e.Q6J("nzValidateStatus",h.errorState)("nzErrorTip",O)("nzExtra",h.props.description)}},dependencies:[N.Nx,N.iK,N.Fd,y.M2,H.SK,u.O5,H.t3],encapsulation:2}),l})(),L=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[[u.ez,n.UX,N.U5,y.X0.forChild({wrappers:[{name:"form-field",component:S}]})]]}),l})();var B=c(824),V=c(655),I=c(6028),x=c(8645),ne=c(2438),Q=c(3019),ye=c(3997),ve=c(9773),ae=c(7921),te=c(4664),q=c(1631),j=c(7398),k=c(9087),M=c(7754),K=c(4300),G=c(9388),Y=c(883),ee=c(551),se=c(8324);const ze=["upHandler"],Me=["downHandler"],Ye=["inputElement"];function Ut(l,v){if(1&l&&e._UZ(0,"nz-form-item-feedback-icon",11),2&l){const s=e.oxw();e.Q6J("status",s.status)}}const Et=["nz-input-number-group-slot",""];function Cn(l,v){if(1&l&&e._UZ(0,"span",2),2&l){const s=e.oxw();e.Q6J("nzType",s.icon)}}function Ot(l,v){if(1&l&&(e.ynx(0),e._uU(1),e.BQk()),2&l){const s=e.oxw();e.xp6(),e.Oqu(s.template)}}const hn=["*"];function Kt(l,v){if(1&l&&e._UZ(0,"div",7),2&l){const s=e.oxw(2);e.Q6J("icon",s.nzAddOnBeforeIcon)("template",s.nzAddOnBefore)}}function cn(l,v){}function vn(l,v){if(1&l&&(e.TgZ(0,"div",8),e.YNc(1,cn,0,0,"ng-template",9),e.qZA()),2&l){const s=e.oxw(2),h=e.MAs(4);e.ekj("ant-input-number-affix-wrapper-disabled",s.disabled)("ant-input-number-affix-wrapper-sm",s.isSmall)("ant-input-number-affix-wrapper-lg",s.isLarge)("ant-input-number-affix-wrapper-focused",s.focused),e.Q6J("ngClass",s.affixInGroupStatusCls),e.xp6(),e.Q6J("ngTemplateOutlet",h)}}function lt(l,v){if(1&l&&e._UZ(0,"span",7),2&l){const s=e.oxw(2);e.Q6J("icon",s.nzAddOnAfterIcon)("template",s.nzAddOnAfter)}}function Je(l,v){if(1&l&&(e.TgZ(0,"span",4),e.YNc(1,Kt,1,2,"div",5)(2,vn,2,10,"div",6)(3,lt,1,2,"span",5),e.qZA()),2&l){const s=e.oxw(),h=e.MAs(6);e.xp6(),e.Q6J("ngIf",s.nzAddOnBefore||s.nzAddOnBeforeIcon),e.xp6(),e.Q6J("ngIf",s.isAffix||s.hasFeedback)("ngIfElse",h),e.xp6(),e.Q6J("ngIf",s.nzAddOnAfter||s.nzAddOnAfterIcon)}}function gt(l,v){}function qe(l,v){if(1&l&&e.YNc(0,gt,0,0,"ng-template",9),2&l){e.oxw(2);const s=e.MAs(4);e.Q6J("ngTemplateOutlet",s)}}function Zt(l,v){if(1&l&&e.YNc(0,qe,1,1,"ng-template",10),2&l){const s=e.oxw(),h=e.MAs(6);e.Q6J("ngIf",s.isAffix)("ngIfElse",h)}}function on(l,v){if(1&l&&e._UZ(0,"span",13),2&l){const s=e.oxw(2);e.Q6J("icon",s.nzPrefixIcon)("template",s.nzPrefix)}}function Dn(l,v){}function Bn(l,v){if(1&l&&e._UZ(0,"nz-form-item-feedback-icon",16),2&l){const s=e.oxw(3);e.Q6J("status",s.status)}}function rn(l,v){if(1&l&&(e.TgZ(0,"span",14),e.YNc(1,Bn,1,1,"nz-form-item-feedback-icon",15),e.qZA()),2&l){const s=e.oxw(2);e.Q6J("icon",s.nzSuffixIcon)("template",s.nzSuffix),e.xp6(),e.Q6J("ngIf",s.isFeedback)}}function _n(l,v){if(1&l&&e.YNc(0,on,1,2,"span",11)(1,Dn,0,0,"ng-template",9)(2,rn,2,3,"span",12),2&l){const s=e.oxw(),h=e.MAs(6);e.Q6J("ngIf",s.nzPrefix||s.nzPrefixIcon),e.xp6(),e.Q6J("ngTemplateOutlet",h),e.xp6(),e.Q6J("ngIf",s.nzSuffix||s.nzSuffixIcon||s.isFeedback)}}function Re(l,v){if(1&l&&e._UZ(0,"nz-form-item-feedback-icon",16),2&l){const s=e.oxw(3);e.Q6J("status",s.status)}}function At(l,v){if(1&l&&(e.TgZ(0,"span",18),e.YNc(1,Re,1,1,"nz-form-item-feedback-icon",15),e.qZA()),2&l){const s=e.oxw(2);e.xp6(),e.Q6J("ngIf",s.isFeedback)}}function _t(l,v){if(1&l&&(e.Hsn(0),e.YNc(1,At,2,1,"span",17)),2&l){const s=e.oxw();e.xp6(),e.Q6J("ngIf",!s.isAddOn&&!s.isAffix&&s.isFeedback)}}let ft=(()=>{class l{onModelChange(s){this.parsedValue=this.nzParser(s),this.inputElement.nativeElement.value=`${this.parsedValue}`;const h=this.getCurrentValidValue(this.parsedValue);this.setValue(h)}getCurrentValidValue(s){let h=s;return h=""===h?"":this.isNotCompleteNumber(h)?this.value:`${this.getValidValue(h)}`,this.toNumber(h)}isNotCompleteNumber(s){return isNaN(s)||""===s||null===s||!(!s||s.toString().indexOf(".")!==s.toString().length-1)}getValidValue(s){let h=parseFloat(s);return isNaN(h)?s:(h<this.nzMin&&(h=this.nzMin),h>this.nzMax&&(h=this.nzMax),h)}toNumber(s){if(this.isNotCompleteNumber(s))return s;const h=String(s);if(h.indexOf(".")>=0&&(0,M.DX)(this.nzPrecision)){if("function"==typeof this.nzPrecisionMode)return this.nzPrecisionMode(s,this.nzPrecision);if("cut"===this.nzPrecisionMode){const O=h.split(".");return O[1]=O[1].slice(0,this.nzPrecision),Number(O.join("."))}return Number(Number(s).toFixed(this.nzPrecision))}return Number(s)}getRatio(s){let h=1;return s.metaKey||s.ctrlKey?h=.1:s.shiftKey&&(h=10),h}down(s,h){this.isFocused||this.focus(),this.step("down",s,h)}up(s,h){this.isFocused||this.focus(),this.step("up",s,h)}getPrecision(s){const h=s.toString();if(h.indexOf("e-")>=0)return parseInt(h.slice(h.indexOf("e-")+2),10);let O=0;return h.indexOf(".")>=0&&(O=h.length-h.indexOf(".")-1),O}getMaxPrecision(s,h){if((0,M.DX)(this.nzPrecision))return this.nzPrecision;const O=this.getPrecision(h),ge=this.getPrecision(this.nzStep),mt=this.getPrecision(s);return s?Math.max(mt,O+ge):O+ge}getPrecisionFactor(s,h){const O=this.getMaxPrecision(s,h);return Math.pow(10,O)}upStep(s,h){const O=this.getPrecisionFactor(s,h),ge=Math.abs(this.getMaxPrecision(s,h));let mt;return mt="number"==typeof s?((O*s+O*this.nzStep*h)/O).toFixed(ge):this.nzMin===-1/0?this.nzStep:this.nzMin,this.toNumber(mt)}downStep(s,h){const O=this.getPrecisionFactor(s,h),ge=Math.abs(this.getMaxPrecision(s,h));let mt;return mt="number"==typeof s?((O*s-O*this.nzStep*h)/O).toFixed(ge):this.nzMin===-1/0?-this.nzStep:this.nzMin,this.toNumber(mt)}step(s,h,O=1){if(this.stop(),h.preventDefault(),this.nzDisabled)return;const ge=this.getCurrentValidValue(this.parsedValue)||0;let mt=0;"up"===s?mt=this.upStep(ge,O):"down"===s&&(mt=this.downStep(ge,O));const Tn=mt>this.nzMax||mt<this.nzMin;mt>this.nzMax?mt=this.nzMax:mt<this.nzMin&&(mt=this.nzMin),this.setValue(mt),this.updateDisplayValue(mt),this.isFocused=!0,!Tn&&(this.autoStepTimer=setTimeout(()=>{this[s](h,O)},300))}stop(){this.autoStepTimer&&clearTimeout(this.autoStepTimer)}setValue(s){if(`${this.value}`!=`${s}`&&this.onChange(s),this.value=s,this.parsedValue=s,this.disabledUp=this.disabledDown=!1,s||0===s){const h=Number(s);h>=this.nzMax&&(this.disabledUp=!0),h<=this.nzMin&&(this.disabledDown=!0)}}updateDisplayValue(s){const h=(0,M.DX)(this.nzFormatter(s))?this.nzFormatter(s):"";this.displayValue=h,this.inputElement.nativeElement.value=`${h}`}writeValue(s){this.value=s,this.setValue(s),this.updateDisplayValue(s),this.cdr.markForCheck()}registerOnChange(s){this.onChange=s}registerOnTouched(s){this.onTouched=s}setDisabledState(s){this.nzDisabled=this.isNzDisableFirstChange&&this.nzDisabled||s,this.isNzDisableFirstChange=!1,this.disabled$.next(this.nzDisabled),this.cdr.markForCheck()}focus(){this.focusMonitor.focusVia(this.inputElement,"keyboard")}blur(){this.inputElement.nativeElement.blur()}constructor(s,h,O,ge,mt,Tn,In,Eo,hi){this.ngZone=s,this.elementRef=h,this.cdr=O,this.focusMonitor=ge,this.renderer=mt,this.directionality=Tn,this.destroy$=In,this.nzFormStatusService=Eo,this.nzFormNoStatusService=hi,this.isNzDisableFirstChange=!0,this.isFocused=!1,this.disabled$=new x.x,this.disabledUp=!1,this.disabledDown=!1,this.dir="ltr",this.prefixCls="ant-input-number",this.status="",this.statusCls={},this.hasFeedback=!1,this.onChange=()=>{},this.onTouched=()=>{},this.nzBlur=new e.vpe,this.nzFocus=new e.vpe,this.nzSize="default",this.nzMin=-1/0,this.nzMax=1/0,this.nzParser=Vi=>Vi.trim().replace(/\u3002/g,".").replace(/[^\w\.-]+/g,""),this.nzPrecisionMode="toFixed",this.nzPlaceHolder="",this.nzStatus="",this.nzStep=1,this.nzInputMode="decimal",this.nzId=null,this.nzDisabled=!1,this.nzReadOnly=!1,this.nzAutoFocus=!1,this.nzBorderless=!1,this.nzFormatter=Vi=>Vi}ngOnInit(){this.nzFormStatusService?.formStatusChanges.pipe((0,ye.x)((s,h)=>s.status===h.status&&s.hasFeedback===h.hasFeedback),(0,ve.R)(this.destroy$)).subscribe(({status:s,hasFeedback:h})=>{this.setStatusStyles(s,h)}),this.focusMonitor.monitor(this.elementRef,!0).pipe((0,ve.R)(this.destroy$)).subscribe(s=>{s?(this.isFocused=!0,this.nzFocus.emit()):(this.isFocused=!1,this.updateDisplayValue(this.value),this.nzBlur.emit(),Promise.resolve().then(()=>this.onTouched()))}),this.dir=this.directionality.value,this.directionality.change.pipe((0,ve.R)(this.destroy$)).subscribe(s=>{this.dir=s}),this.setupHandlersListeners(),this.ngZone.runOutsideAngular(()=>{(0,ne.R)(this.inputElement.nativeElement,"keyup").pipe((0,ve.R)(this.destroy$)).subscribe(()=>this.stop()),(0,ne.R)(this.inputElement.nativeElement,"keydown").pipe((0,ve.R)(this.destroy$)).subscribe(s=>{const{keyCode:h}=s;h!==I.LH&&h!==I.JH&&h!==I.K5||this.ngZone.run(()=>{if(h===I.LH){const O=this.getRatio(s);this.up(s,O),this.stop()}else if(h===I.JH){const O=this.getRatio(s);this.down(s,O),this.stop()}else this.updateDisplayValue(this.value);this.cdr.markForCheck()})})})}ngOnChanges(s){const{nzStatus:h,nzDisabled:O}=s;if(s.nzFormatter&&!s.nzFormatter.isFirstChange()){const ge=this.getCurrentValidValue(this.parsedValue);this.setValue(ge),this.updateDisplayValue(ge)}O&&this.disabled$.next(this.nzDisabled),h&&this.setStatusStyles(this.nzStatus,this.hasFeedback)}ngAfterViewInit(){this.nzAutoFocus&&this.focus()}ngOnDestroy(){this.focusMonitor.stopMonitoring(this.elementRef)}setupHandlersListeners(){this.ngZone.runOutsideAngular(()=>{(0,Q.T)((0,ne.R)(this.upHandler.nativeElement,"mouseup"),(0,ne.R)(this.upHandler.nativeElement,"mouseleave"),(0,ne.R)(this.downHandler.nativeElement,"mouseup"),(0,ne.R)(this.downHandler.nativeElement,"mouseleave")).pipe((0,ve.R)(this.destroy$)).subscribe(()=>this.stop())})}setStatusStyles(s,h){this.status=s,this.hasFeedback=h,this.cdr.markForCheck(),this.statusCls=(0,M.Zu)(this.prefixCls,s,h),Object.keys(this.statusCls).forEach(O=>{this.statusCls[O]?this.renderer.addClass(this.elementRef.nativeElement,O):this.renderer.removeClass(this.elementRef.nativeElement,O)})}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(e.R0b),e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(K.tE),e.Y36(e.Qsj),e.Y36(G.Is,8),e.Y36(k.kn),e.Y36(Y.kH,8),e.Y36(Y.yW,8))},l.\u0275cmp=e.Xpm({type:l,selectors:[["nz-input-number"]],viewQuery:function(s,h){if(1&s&&(e.Gf(ze,7),e.Gf(Me,7),e.Gf(Ye,7)),2&s){let O;e.iGM(O=e.CRH())&&(h.upHandler=O.first),e.iGM(O=e.CRH())&&(h.downHandler=O.first),e.iGM(O=e.CRH())&&(h.inputElement=O.first)}},hostAttrs:[1,"ant-input-number"],hostVars:16,hostBindings:function(s,h){2&s&&e.ekj("ant-input-number-in-form-item",!!h.nzFormStatusService)("ant-input-number-focused",h.isFocused)("ant-input-number-lg","large"===h.nzSize)("ant-input-number-sm","small"===h.nzSize)("ant-input-number-disabled",h.nzDisabled)("ant-input-number-readonly",h.nzReadOnly)("ant-input-number-rtl","rtl"===h.dir)("ant-input-number-borderless",h.nzBorderless)},inputs:{nzSize:"nzSize",nzMin:"nzMin",nzMax:"nzMax",nzParser:"nzParser",nzPrecision:"nzPrecision",nzPrecisionMode:"nzPrecisionMode",nzPlaceHolder:"nzPlaceHolder",nzStatus:"nzStatus",nzStep:"nzStep",nzInputMode:"nzInputMode",nzId:"nzId",nzDisabled:"nzDisabled",nzReadOnly:"nzReadOnly",nzAutoFocus:"nzAutoFocus",nzBorderless:"nzBorderless",nzFormatter:"nzFormatter"},outputs:{nzBlur:"nzBlur",nzFocus:"nzFocus"},exportAs:["nzInputNumber"],features:[e._Bn([{provide:n.JU,useExisting:(0,e.Gpc)(()=>l),multi:!0},k.kn]),e.TTD],decls:11,vars:15,consts:[[1,"ant-input-number-handler-wrap"],["unselectable","unselectable",1,"ant-input-number-handler","ant-input-number-handler-up",3,"mousedown"],["upHandler",""],["nz-icon","","nzType","up",1,"ant-input-number-handler-up-inner"],["unselectable","unselectable",1,"ant-input-number-handler","ant-input-number-handler-down",3,"mousedown"],["downHandler",""],["nz-icon","","nzType","down",1,"ant-input-number-handler-down-inner"],[1,"ant-input-number-input-wrap"],["autocomplete","off",1,"ant-input-number-input",3,"disabled","placeholder","readOnly","ngModel","ngModelChange"],["inputElement",""],["class","ant-input-number-suffix",3,"status",4,"ngIf"],[1,"ant-input-number-suffix",3,"status"]],template:function(s,h){1&s&&(e.TgZ(0,"div",0)(1,"span",1,2),e.NdJ("mousedown",function(ge){return h.up(ge)}),e._UZ(3,"span",3),e.qZA(),e.TgZ(4,"span",4,5),e.NdJ("mousedown",function(ge){return h.down(ge)}),e._UZ(6,"span",6),e.qZA()(),e.TgZ(7,"div",7)(8,"input",8,9),e.NdJ("ngModelChange",function(ge){return h.onModelChange(ge)}),e.qZA()(),e.YNc(10,Ut,1,1,"nz-form-item-feedback-icon",10)),2&s&&(e.xp6(),e.ekj("ant-input-number-handler-up-disabled",h.disabledUp),e.xp6(3),e.ekj("ant-input-number-handler-down-disabled",h.disabledDown),e.xp6(4),e.Q6J("disabled",h.nzDisabled)("placeholder",h.nzPlaceHolder)("readOnly",h.nzReadOnly)("ngModel",h.displayValue),e.uIk("id",h.nzId)("autofocus",h.nzAutoFocus?"autofocus":null)("min",h.nzMin)("max",h.nzMax)("step",h.nzStep)("inputmode",h.nzInputMode),e.xp6(2),e.Q6J("ngIf",h.hasFeedback&&!!h.status&&!h.nzFormNoStatusService))},dependencies:[u.O5,n.Fj,n.JJ,n.On,ee.Ls,Y.w_],encapsulation:2,changeDetection:0}),(0,V.gn)([(0,M.yF)()],l.prototype,"nzDisabled",void 0),(0,V.gn)([(0,M.yF)()],l.prototype,"nzReadOnly",void 0),(0,V.gn)([(0,M.yF)()],l.prototype,"nzAutoFocus",void 0),(0,V.gn)([(0,M.yF)()],l.prototype,"nzBorderless",void 0),l})(),$e=(()=>{class l{constructor(){this.icon=null,this.type=null,this.template=null}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["","nz-input-number-group-slot",""]],hostVars:6,hostBindings:function(s,h){2&s&&e.ekj("ant-input-number-group-addon","addon"===h.type)("ant-input-number-prefix","prefix"===h.type)("ant-input-number-suffix","suffix"===h.type)},inputs:{icon:"icon",type:"type",template:"template"},attrs:Et,ngContentSelectors:hn,decls:3,vars:2,consts:[["nz-icon","",3,"nzType",4,"ngIf"],[4,"nzStringTemplateOutlet"],["nz-icon","",3,"nzType"]],template:function(s,h){1&s&&(e.F$t(),e.YNc(0,Cn,1,1,"span",0)(1,Ot,2,1,"ng-container",1),e.Hsn(2)),2&s&&(e.Q6J("ngIf",h.icon),e.xp6(),e.Q6J("nzStringTemplateOutlet",h.template))},dependencies:[u.O5,se.f,ee.Ls],encapsulation:2,changeDetection:0}),l})(),re=(()=>{class l{constructor(s,h,O,ge,mt,Tn,In){this.focusMonitor=s,this.elementRef=h,this.renderer=O,this.cdr=ge,this.directionality=mt,this.nzFormStatusService=Tn,this.nzFormNoStatusService=In,this.nzAddOnBeforeIcon=null,this.nzAddOnAfterIcon=null,this.nzPrefixIcon=null,this.nzSuffixIcon=null,this.nzStatus="",this.nzSize="default",this.nzCompact=!1,this.isLarge=!1,this.isSmall=!1,this.isAffix=!1,this.isAddOn=!1,this.isFeedback=!1,this.focused=!1,this.disabled=!1,this.dir="ltr",this.prefixCls="ant-input-number",this.affixStatusCls={},this.groupStatusCls={},this.affixInGroupStatusCls={},this.status="",this.hasFeedback=!1,this.destroy$=new x.x}updateChildrenInputSize(){this.listOfNzInputNumberComponent&&this.listOfNzInputNumberComponent.forEach(s=>s.nzSize=this.nzSize)}ngOnInit(){this.nzFormStatusService?.formStatusChanges.pipe((0,ye.x)((s,h)=>s.status===h.status&&s.hasFeedback===h.hasFeedback),(0,ve.R)(this.destroy$)).subscribe(({status:s,hasFeedback:h})=>{this.setStatusStyles(s,h)}),this.focusMonitor.monitor(this.elementRef,!0).pipe((0,ve.R)(this.destroy$)).subscribe(s=>{this.focused=!!s,this.cdr.markForCheck()}),this.dir=this.directionality.value,this.directionality.change?.pipe((0,ve.R)(this.destroy$)).subscribe(s=>{this.dir=s})}ngAfterContentInit(){this.updateChildrenInputSize();const s=this.listOfNzInputNumberComponent.changes.pipe((0,ae.O)(this.listOfNzInputNumberComponent));s.pipe((0,te.w)(h=>(0,Q.T)(s,...h.map(O=>O.disabled$))),(0,q.z)(()=>s),(0,j.U)(h=>h.some(O=>O.nzDisabled)),(0,ve.R)(this.destroy$)).subscribe(h=>{this.disabled=h,this.cdr.markForCheck()})}ngOnChanges(s){const{nzSize:h,nzSuffix:O,nzPrefix:ge,nzPrefixIcon:mt,nzSuffixIcon:Tn,nzAddOnAfter:In,nzAddOnBefore:Eo,nzAddOnAfterIcon:hi,nzAddOnBeforeIcon:Vi,nzStatus:gc}=s;h&&(this.updateChildrenInputSize(),this.isLarge="large"===this.nzSize,this.isSmall="small"===this.nzSize),(O||ge||mt||Tn)&&(this.isAffix=!!(this.nzSuffix||this.nzPrefix||this.nzPrefixIcon||this.nzSuffixIcon)),(In||Eo||hi||Vi)&&(this.isAddOn=!!(this.nzAddOnAfter||this.nzAddOnBefore||this.nzAddOnAfterIcon||this.nzAddOnBeforeIcon),this.nzFormNoStatusService?.noFormStatus?.next(this.isAddOn)),gc&&this.setStatusStyles(this.nzStatus,this.hasFeedback)}ngOnDestroy(){this.focusMonitor.stopMonitoring(this.elementRef),this.destroy$.next(),this.destroy$.complete()}setStatusStyles(s,h){this.status=s,this.hasFeedback=h,this.isFeedback=!!s&&h,this.isAffix=!!(this.nzSuffix||this.nzPrefix||this.nzPrefixIcon||this.nzSuffixIcon)||!this.isAddOn&&h,this.affixInGroupStatusCls=this.isAffix||this.isFeedback?this.affixStatusCls=(0,M.Zu)(`${this.prefixCls}-affix-wrapper`,s,h):{},this.cdr.markForCheck(),this.affixStatusCls=(0,M.Zu)(`${this.prefixCls}-affix-wrapper`,this.isAddOn?"":s,!this.isAddOn&&h),this.groupStatusCls=(0,M.Zu)(`${this.prefixCls}-group-wrapper`,this.isAddOn?s:"",!!this.isAddOn&&h);const ge={...this.affixStatusCls,...this.groupStatusCls};Object.keys(ge).forEach(mt=>{ge[mt]?this.renderer.addClass(this.elementRef.nativeElement,mt):this.renderer.removeClass(this.elementRef.nativeElement,mt)})}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(K.tE),e.Y36(e.SBq),e.Y36(e.Qsj),e.Y36(e.sBO),e.Y36(G.Is,8),e.Y36(Y.kH,8),e.Y36(Y.yW,8))},l.\u0275cmp=e.Xpm({type:l,selectors:[["nz-input-number-group"]],contentQueries:function(s,h,O){if(1&s&&e.Suo(O,ft,5),2&s){let ge;e.iGM(ge=e.CRH())&&(h.listOfNzInputNumberComponent=ge)}},hostVars:24,hostBindings:function(s,h){2&s&&e.ekj("ant-input-number-group",h.nzCompact)("ant-input-number-group-compact",h.nzCompact)("ant-input-number-group-wrapper",h.isAddOn)("ant-input-number-group-wrapper-rtl",h.isAddOn&&"rtl"===h.dir)("ant-input-number-group-wrapper-lg",h.isAddOn&&h.isLarge)("ant-input-number-group-wrapper-sm",h.isAddOn&&h.isSmall)("ant-input-number-affix-wrapper",!h.isAddOn&&h.isAffix)("ant-input-number-affix-wrapper-rtl",!h.isAddOn&&"rtl"===h.dir)("ant-input-number-affix-wrapper-focused",!h.isAddOn&&h.isAffix&&h.focused)("ant-input-number-affix-wrapper-disabled",!h.isAddOn&&h.isAffix&&h.disabled)("ant-input-number-affix-wrapper-lg",!h.isAddOn&&h.isAffix&&h.isLarge)("ant-input-number-affix-wrapper-sm",!h.isAddOn&&h.isAffix&&h.isSmall)},inputs:{nzAddOnBeforeIcon:"nzAddOnBeforeIcon",nzAddOnAfterIcon:"nzAddOnAfterIcon",nzPrefixIcon:"nzPrefixIcon",nzSuffixIcon:"nzSuffixIcon",nzAddOnBefore:"nzAddOnBefore",nzAddOnAfter:"nzAddOnAfter",nzPrefix:"nzPrefix",nzStatus:"nzStatus",nzSuffix:"nzSuffix",nzSize:"nzSize",nzCompact:"nzCompact"},exportAs:["nzInputNumberGroup"],features:[e._Bn([Y.yW]),e.TTD],ngContentSelectors:hn,decls:7,vars:2,consts:[["class","ant-input-number-wrapper ant-input-number-group",4,"ngIf","ngIfElse"],["noAddOnTemplate",""],["affixTemplate",""],["contentTemplate",""],[1,"ant-input-number-wrapper","ant-input-number-group"],["nz-input-number-group-slot","","type","addon",3,"icon","template",4,"ngIf"],["class","ant-input-number-affix-wrapper",3,"ant-input-number-affix-wrapper-disabled","ant-input-number-affix-wrapper-sm","ant-input-number-affix-wrapper-lg","ant-input-number-affix-wrapper-focused","ngClass",4,"ngIf","ngIfElse"],["nz-input-number-group-slot","","type","addon",3,"icon","template"],[1,"ant-input-number-affix-wrapper",3,"ngClass"],[3,"ngTemplateOutlet"],[3,"ngIf","ngIfElse"],["nz-input-number-group-slot","","type","prefix",3,"icon","template",4,"ngIf"],["nz-input-number-group-slot","","type","suffix",3,"icon","template",4,"ngIf"],["nz-input-number-group-slot","","type","prefix",3,"icon","template"],["nz-input-number-group-slot","","type","suffix",3,"icon","template"],[3,"status",4,"ngIf"],[3,"status"],["nz-input-number-group-slot","","type","suffix",4,"ngIf"],["nz-input-number-group-slot","","type","suffix"]],template:function(s,h){if(1&s&&(e.F$t(),e.YNc(0,Je,4,4,"span",0)(1,Zt,1,2,"ng-template",null,1,e.W1O)(3,_n,3,3,"ng-template",null,2,e.W1O)(5,_t,2,1,"ng-template",null,3,e.W1O)),2&s){const O=e.MAs(2);e.Q6J("ngIf",h.isAddOn)("ngIfElse",O)}},dependencies:[u.mk,u.O5,u.tP,Y.w_,$e],encapsulation:2,changeDetection:0}),(0,V.gn)([(0,M.yF)()],l.prototype,"nzCompact",void 0),l})(),xe=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[G.vT,u.ez,n.u5,se.T,ee.PV,Y.mJ]}),l})();function Fe(l,v){if(1&l&&e._UZ(0,"input",2),2&l){const s=e.oxw();e.Q6J("formControl",s.formControl)("type",s.props.type||"text")("formlyAttributes",s.field)}}function nt(l,v){if(1&l&&e._UZ(0,"nz-input-number",3),2&l){const s=e.oxw();e.Q6J("formControl",s.formControl)("formlyAttributes",s.field)}}let Lt=(()=>{class l extends y.fS{}return l.\u0275fac=(()=>{let v;return function(h){return(v||(v=e.n5z(l)))(h||l)}})(),l.\u0275cmp=e.Xpm({type:l,selectors:[["formly-field-nz-input"]],features:[e.qOj],decls:3,vars:2,consts:[["nz-input","",3,"formControl","type","formlyAttributes",4,"ngIf","ngIfElse"],["numberTmp",""],["nz-input","",3,"formControl","type","formlyAttributes"],[3,"formControl","formlyAttributes"]],template:function(s,h){if(1&s&&e.YNc(0,Fe,1,3,"input",0)(1,nt,1,2,"ng-template",null,1,e.W1O),2&s){const O=e.MAs(2);e.Q6J("ngIf","number"!==h.props.type)("ngIfElse",O)}},dependencies:[ft,u.O5,B.Zp,n.Fj,n.JJ,n.oH,y.JD],encapsulation:2,changeDetection:0}),l})(),an=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[[u.ez,n.UX,B.o7,xe,L,y.X0.forChild({types:[{name:"input",component:Lt,wrappers:["form-field"]},{name:"string",extends:"input"},{name:"number",extends:"input",defaultOptions:{props:{type:"number"}}},{name:"integer",extends:"input",defaultOptions:{props:{type:"number"}}}]})]]}),l})(),tn=(()=>{class l extends y.fS{}return l.\u0275fac=(()=>{let v;return function(h){return(v||(v=e.n5z(l)))(h||l)}})(),l.\u0275cmp=e.Xpm({type:l,selectors:[["formly-field-nz-textarea"]],features:[e.qOj],decls:1,vars:2,consts:[["nz-input","",3,"formControl","formlyAttributes"]],template:function(s,h){1&s&&e._UZ(0,"textarea",0),2&s&&e.Q6J("formControl",h.formControl)("formlyAttributes",h.field)},dependencies:[B.Zp,n.Fj,n.JJ,n.oH,y.JD],encapsulation:2,changeDetection:0}),l})(),ot=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[[u.ez,n.UX,B.o7,L,y.X0.forChild({types:[{name:"textarea",component:tn,wrappers:["form-field"]}]})]]}),l})();var it=c(5592),Ve=c(5619),yt=c(2181),Tt=c(9397);let Vt=(()=>{class l{transform(s,h){return s instanceof it.y?this.dispose():s=this.observableOf(s,h),s.pipe((0,j.U)(O=>this.transformOptions(O,h)))}ngOnDestroy(){this.dispose()}transformOptions(s,h){const O=this.transformSelectProps(h),ge=[],mt={};return s?.forEach(Tn=>{const In=this.transformOption(Tn,O);if(In.group){const Eo=mt[In.label];void 0===Eo?mt[In.label]=ge.push(In)-1:In.group.forEach(hi=>ge[Eo].group.push(hi))}else ge.push(In)}),ge}transformOption(s,h){const O=h.groupProp(s);return Array.isArray(O)?{label:h.labelProp(s),group:O.map(ge=>this.transformOption(ge,h))}:(s={label:h.labelProp(s),value:h.valueProp(s),disabled:!!h.disabledProp(s)},O?{label:O,group:[s]}:s)}transformSelectProps(s){const h=s?.props||s?.templateOptions||{},O=ge=>"function"==typeof ge?ge:mt=>mt[ge];return{groupProp:O(h.groupProp||"group"),labelProp:O(h.labelProp||"label"),valueProp:O(h.valueProp||"value"),disabledProp:O(h.disabledProp||"disabled")}}dispose(){this._options&&(this._options.complete(),this._options=null),this._subscription&&(this._subscription.unsubscribe(),this._subscription=null)}observableOf(s,h){return this.dispose(),h&&h.options&&h.options.fieldChanges&&(this._subscription=h.options.fieldChanges.pipe((0,yt.h)(({property:O,type:ge,field:mt})=>"expressionChanges"===ge&&(0===O.indexOf("templateOptions.options")||0===O.indexOf("props.options"))&&mt===h&&Array.isArray(mt.props.options)&&!!this._options),(0,Tt.b)(()=>this._options.next(h.props.options))).subscribe()),this._options=new Ve.X(s),this._options.asObservable()}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275pipe=e.Yjl({name:"formlySelectOptions",type:l,pure:!0}),l})(),Fn=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({}),l})();var Ie=c(7907);function pe(l,v){if(1&l&&(e.TgZ(0,"label",2),e._uU(1),e.qZA()),2&l){const s=v.$implicit;e.Q6J("nzValue",s.value)("nzDisabled",s.disabled),e.xp6(),e.hij(" ",s.label," ")}}let D=(()=>{class l extends y.fS{}return l.\u0275fac=(()=>{let v;return function(h){return(v||(v=e.n5z(l)))(h||l)}})(),l.\u0275cmp=e.Xpm({type:l,selectors:[["formly-field-nz-radio"]],features:[e.qOj],decls:4,vars:7,consts:[[3,"formControl","ngModelChange"],["nz-radio","",3,"nzValue","nzDisabled",4,"ngFor","ngForOf"],["nz-radio","",3,"nzValue","nzDisabled"]],template:function(s,h){1&s&&(e.TgZ(0,"nz-radio-group",0),e.NdJ("ngModelChange",function(ge){return h.props.change&&h.props.change(h.field,ge)}),e.YNc(1,pe,2,3,"label",1),e.ALo(2,"async"),e.ALo(3,"formlySelectOptions"),e.qZA()),2&s&&(e.Q6J("formControl",h.formControl),e.xp6(),e.Q6J("ngForOf",e.lcZ(2,2,e.xi3(3,4,h.props.options,h.field))))},dependencies:[Ie.Dg,Ie.Of,n.JJ,n.oH,u.sg,u.Ov,Vt],encapsulation:2,changeDetection:0}),l})(),P=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[[u.ez,n.UX,Ie.aF,L,Fn,y.X0.forChild({types:[{name:"radio",component:D,wrappers:["form-field"]}]})]]}),l})();var me=c(2612);let ht=(()=>{class l extends y.fS{constructor(){super(...arguments),this.defaultOptions={props:{indeterminate:!0,hideLabel:!0}}}}return l.\u0275fac=(()=>{let v;return function(h){return(v||(v=e.n5z(l)))(h||l)}})(),l.\u0275cmp=e.Xpm({type:l,selectors:[["formly-field-nz-checkbox"]],features:[e.qOj],decls:2,vars:4,consts:[["nz-checkbox","",3,"nzIndeterminate","formControl","formlyAttributes","ngModelChange"]],template:function(s,h){1&s&&(e.TgZ(0,"label",0),e.NdJ("ngModelChange",function(ge){return h.props.change&&h.props.change(h.field,ge)}),e._uU(1),e.qZA()),2&s&&(e.Q6J("nzIndeterminate",h.props.indeterminate&&null==h.formControl.value)("formControl",h.formControl)("formlyAttributes",h.field),e.xp6(),e.hij(" ",h.props.label," "))},dependencies:[me.Ie,n.JJ,n.oH,y.JD],encapsulation:2,changeDetection:0}),l})(),et=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[[u.ez,n.UX,me.Wr,L,y.X0.forChild({types:[{name:"checkbox",component:ht,wrappers:["form-field"]},{name:"boolean",extends:"checkbox"}]})]]}),l})();var Be=c(9691);function Xe(l,v){if(1&l&&e._UZ(0,"nz-option",6),2&l){const s=v.$implicit;e.Q6J("nzValue",s.value)("nzDisabled",s.disabled)("nzLabel",s.label)}}function Ft(l,v){if(1&l&&(e.TgZ(0,"nz-option-group",4),e.YNc(1,Xe,1,3,"nz-option",5),e.qZA()),2&l){const s=e.oxw().$implicit;e.Q6J("nzLabel",s.label),e.xp6(),e.Q6J("ngForOf",s.group)}}function wt(l,v){if(1&l&&e._UZ(0,"nz-option",6),2&l){const s=e.oxw().$implicit;e.Q6J("nzValue",s.value)("nzDisabled",s.disabled)("nzLabel",s.label)}}function Ne(l,v){if(1&l&&(e.ynx(0),e.YNc(1,Ft,2,2,"nz-option-group",2)(2,wt,1,3,"nz-option",3),e.BQk()),2&l){const s=v.$implicit;e.xp6(),e.Q6J("ngIf",s.group),e.xp6(),e.Q6J("ngIf",!s.group)}}let Ke=(()=>{class l extends y.fS{}return l.\u0275fac=(()=>{let v;return function(h){return(v||(v=e.n5z(l)))(h||l)}})(),l.\u0275cmp=e.Xpm({type:l,selectors:[["formly-field-nz-select"]],features:[e.qOj],decls:4,vars:12,consts:[[3,"nzPlaceHolder","formControl","formlyAttributes","nzMode","ngModelChange"],[4,"ngFor","ngForOf"],[3,"nzLabel",4,"ngIf"],[3,"nzValue","nzDisabled","nzLabel",4,"ngIf"],[3,"nzLabel"],[3,"nzValue","nzDisabled","nzLabel",4,"ngFor","ngForOf"],[3,"nzValue","nzDisabled","nzLabel"]],template:function(s,h){1&s&&(e.TgZ(0,"nz-select",0),e.NdJ("ngModelChange",function(ge){return h.props.change&&h.props.change(h.field,ge)}),e.YNc(1,Ne,3,2,"ng-container",1),e.ALo(2,"async"),e.ALo(3,"formlySelectOptions"),e.qZA()),2&s&&(e.ekj("ng-dirty",h.showError),e.Q6J("nzPlaceHolder",h.props.placeholder)("formControl",h.formControl)("formlyAttributes",h.field)("nzMode",h.props.multiple?"multiple":"default"),e.xp6(),e.Q6J("ngForOf",e.lcZ(2,7,e.xi3(3,9,h.props.options,h.field))))},dependencies:[Be.Vq,Be.Yy,Be.Ip,n.JJ,n.oH,y.JD,u.sg,u.O5,u.Ov,Vt],encapsulation:2,changeDetection:0}),l})(),oe=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[[u.ez,n.UX,Be.LV,L,Fn,y.X0.forChild({types:[{name:"select",component:Ke,wrappers:["form-field"]},{name:"enum",extends:"select"}]})]]}),l})(),He=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[[L,an,ot,P,et,oe]]}),l})();var Qe=c(279);function jt(l,v){return(0,ye.x)((s,h)=>v?v(s[l],h[l]):s[l]===h[l])}const ke={paramKey:!0};class vt{constructor(v){this.route=v}postPopulate(v){if(v.fieldGroup||v.fieldArray||!1===(v.props||{...ke}).paramKey||(this.paramKey=this.getParamKey(v),!this.paramKey))return;const h=this.getRouteSub(this.route,v),O=v.hooks?.onDestroy;h&&O&&(v.hooks={...v.hooks,onDestroy:ge=>{h.unsubscribe(),O(ge)}})}getParamKey(v){const s=v.props;if("string"==typeof s.paramKey)return s.paramKey;if(v.key){if("string"==typeof v.key)return v.key;console.warn(`observe-query-param cannot use field key ${JSON.stringify(v.key)} of type ${typeof v.key} to observe a query param. Use prop.paramKey to specify a query param string, or define a string field.key.`)}}getRouteSub(v,s){const h=v.queryParams.pipe(jt(this.paramKey)).subscribe(O=>{const ge=s.formControl,mt=O[this.paramKey];if(!mt)return void h.unsubscribe();let Tn;try{Tn=JSON.parse(mt)}catch(In){return console.warn(`observe-query-param failed to parse query param ${this.paramKey} for field ${s.id}: ${In}`),console.warn("Note: Query values are parsed as JSON, therefore enum strings must be enclosed in double-quotes, and numeric entity IDs must be bare, unquoted."),void h.unsubscribe()}if(Tn){if(Object.keys(Tn).length>0&&Tn.constructor===Object)return console.warn(`observe-query-param may only set primitive types or arrays of primitive types, param ${this.paramKey} is an object: ${JSON.stringify(Tn)}`),void h.unsubscribe();ge.setValue(Tn)}});return h}}function Wt(l){return{extensions:[{name:"observeQueryParam",extension:new vt(l)}]}}const ct={extras:{immutable:!1,lazyRender:!0},validationMessages:[{name:"required",message:"This field is required."},{name:"minLength",message:(l,v)=>`This field has a minimum length of ${v.templateOptions?.minLength}.`},{name:"maxLength",message:(l,v)=>`This field has a maximum length of ${v.templateOptions?.maxLength}.`},{name:"min",message:(l,v)=>`This field has a minimum value of ${v.templateOptions?.min}.`},{name:"max",message:(l,v)=>`This field has a maximum value of ${v.templateOptions?.max}.`},{name:"pattern",message:(l,v)=>`This field's value must fit the pattern ${v.templateOptions?.pattern}.`},{name:"integer",message:(l,v)=>"Value must be an integer."},{name:"nucleotide",message:(l,v)=>"Value must only contain A, C, T, G, and/or /."},{name:"clinvar",message:(l,v)=>"Value must be an integer."}],validators:[{name:"integer",validation:(l,v)=>""===l.value||null==l.value||/^\d+$/.test(l.value)?null:{integer:!0}},{name:"nucleotide",validation:(l,v)=>""===l.value||null==l.value||/^[ACTG\/]+$/.test(l.value)?null:{nucleotide:!0}},{name:"clinvar",validation:(l,v)=>{for(var s of l.value)if(""!==s&&null!=s&&!/^\d+$/.test(s))return{clinvar:!0};return null}}]};var We=c(2524),Ce=c(2392),he=c(5717),ut=c(188),st=c(2574),Nt=c(3903),An=c(6987);let xn=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,n.UX,y.X0.forChild(),Nt.L,ee.PV,Be.LV,B.o7,N.U5,Ce.ZJ,he.ic,st.zf,An.S,ut.x,We.s]}),l})();var to=c(5695);let Zn=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,ee.PV,to.X,We.s]}),l})();const qo=(l,v)=>({disabled:l,error:v});function gi(l,v){if(1&l&&(e.ynx(0),e.TgZ(1,"nz-form-label",6),e._UZ(2,"span",7),e.qZA(),e.BQk()),2&l){const s=e.oxw();e.xp6(),e.Q6J("ngClass",e.WLB(6,qo,s.props.disabled,s.showError))("nzRequired",s.props.required)("nzFor",s.id)("nzTooltipTitle",s.props.tooltip)("nzNoColon",!0),e.xp6(),e.Q6J("nzContent",s.props.label)}}function It(l,v){if(1&l&&e._UZ(0,"span",13),2&l){const s=e.oxw(2);e.Q6J("innerHTML",s.props.description,e.oJD)}}function xt(l,v){if(1&l&&e._UZ(0,"span",14),2&l){const s=e.oxw(2);e.Q6J("innerHTML",s.props.description,e.oJD)}}function St(l,v){if(1&l&&e._UZ(0,"span",15),2&l){const s=e.oxw(2);e.Q6J("innerHTML",s.props.description,e.oJD)}}function bn(l,v){if(1&l&&(e.TgZ(0,"div",8),e.ynx(1,9),e.YNc(2,It,1,1,"span",10)(3,xt,1,1,"span",11)(4,St,1,1,"span",12),e.BQk(),e.qZA()),2&l){const s=e.oxw();e.xp6(),e.Q6J("ngSwitch",s.props.extraType),e.xp6(),e.Q6J("ngSwitchCase","prompt"),e.xp6(),e.Q6J("ngSwitchCase","description")}}function On(l,v){if(1&l&&e._UZ(0,"formly-validation-message",18),2&l){const s=e.oxw(2);e.Q6J("field",s.field)}}function yn(l,v){if(1&l&&(e.TgZ(0,"div",16),e.YNc(1,On,1,1,"formly-validation-message",17),e.qZA()),2&l){const s=e.oxw();e.xp6(),e.Q6J("ngIf",s.props.showErrorTip)}}const Rn=(l,v,s,h)=>({disabled:l,error:v,required:s,valid:h}),mo={};let no=(()=>{class l extends y.n2{get errorState(){return this.showError?"error":""}constructor(s){super(),this.cdr=s,this.formLayout="vertical",this.wrapperOptions={...mo}}ngOnInit(){this.props.showExtra=this.props.showExtra??!0,this.props.extraType=this.props.extraType??"prompt",this.props.showErrorTip=this.props.showErrorTip??!0,this.props.formFieldOptions&&(this.wrapperOptions={...this.wrapperOptions,...this.props.formFieldOptions}),this.options.formState.formLayout&&(this.formLayout=this.options.formState.formLayout)}ngAfterViewInit(){this.cdr.detectChanges()}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-form-field-wrapper"]],hostVars:6,hostBindings:function(s,h){2&s&&e.ekj("layout-horizontal","horizontal"===h.formLayout)("layout-vertical","vertical"===h.formLayout)("layout-inline","inline"===h.formLayout)},features:[e.qOj],decls:9,vars:10,consts:[[3,"ngClass"],[4,"ngIf"],[3,"nzExtra","nzValidateStatus","nzErrorTip"],["fieldComponent",""],["descriptionTpl",""],["errorTpl",""],[3,"ngClass","nzRequired","nzFor","nzTooltipTitle","nzNoColon"],["nz-typography","","nzEllipsis","",1,"label",3,"nzContent"],[1,"form-field-description"],[3,"ngSwitch"],["class","extra-prompt",3,"innerHTML",4,"ngSwitchCase"],["class","extra-description",3,"innerHTML",4,"ngSwitchCase"],[3,"innerHTML",4,"ngSwitchDefault"],[1,"extra-prompt",3,"innerHTML"],[1,"extra-description",3,"innerHTML"],[3,"innerHTML"],[1,"cvc-form-field-validation"],[3,"field",4,"ngIf"],[3,"field"]],template:function(s,h){if(1&s&&(e.TgZ(0,"nz-form-item",0),e.YNc(1,gi,3,9,"ng-container",1),e.TgZ(2,"nz-form-control",2),e.GkF(3,null,3),e.qZA()(),e.YNc(5,bn,5,3,"ng-template",null,4,e.W1O)(7,yn,2,1,"ng-template",null,5,e.W1O)),2&s){const O=e.MAs(6),ge=e.MAs(8);e.Q6J("ngClass",e.l5B(5,Rn,h.props.disabled,h.showError,h.props.required,"VALID"===h.field.formControl.status&&!0===h.field.formControl.touched)),e.xp6(),e.Q6J("ngIf",h.props.label&&!0!==h.props.hideLabel),e.xp6(),e.Q6J("nzExtra",h.props.showExtra&&!h.showError?O:void 0)("nzValidateStatus",h.errorState)("nzErrorTip",ge)}},dependencies:[u.mk,u.O5,u.RF,u.n9,u.ED,H.t3,H.SK,N.Nx,N.iK,N.Fd,Ce.ZU,y.M2],styles:['.typeahead-match[_ngcontent-%COMP%]{font-weight:700}.hide-dropdown[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%] > nz-form-item[_ngcontent-%COMP%]{border-radius:4px;margin-top:8px;margin-bottom:0}[_nghost-%COMP%] > nz-form-item[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]   span.label[_ngcontent-%COMP%]{color:#096dd9}[_nghost-%COMP%] > nz-form-item[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     span.anticon{margin-left:.25em}[_nghost-%COMP%] > nz-form-item[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     span.anticon path{color:#69c0ff}[_nghost-%COMP%] > nz-form-item[_ngcontent-%COMP%]   .form-row-wrapped[_nghost-%COMP%] > nz-form-item[_ngcontent-%COMP%], .form-row-wrapped   [_nghost-%COMP%] > nz-form-item[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0}[_nghost-%COMP%] > nz-form-item.required[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label:before{border:1px solid #096dd9;height:1em;content:""}[_nghost-%COMP%] > nz-form-item.required[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label span.label{color:#096dd9;font-weight:600}[_nghost-%COMP%] > nz-form-item.required[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label   span.anticon path{color:#40a9ff}[_nghost-%COMP%] > nz-form-item.error[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label:before{border-color:#cf1322}[_nghost-%COMP%] > nz-form-item.error[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label span.label{color:#cf1322}[_nghost-%COMP%] > nz-form-item.error[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label   span.anticon path{color:#ff4d4f}[_nghost-%COMP%] > nz-form-item.valid[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label:before{border-color:#389e0d}[_nghost-%COMP%] > nz-form-item.valid[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label span.label{color:#389e0d}[_nghost-%COMP%] > nz-form-item.valid[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label   span.anticon path{color:#73d13d}[_nghost-%COMP%] > nz-form-item.disabled[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label:before{border-color:#00000073}[_nghost-%COMP%] > nz-form-item.disabled[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label span.label{color:#00000073}[_nghost-%COMP%] > nz-form-item.disabled[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label   span.anticon path{color:#d9d9d9}.layout-vertical[_nghost-%COMP%] > nz-form-item[_ngcontent-%COMP%]{background-color:#e6f7ff;border:1px solid #e6f7ff;padding:4px 8px}.layout-vertical[_nghost-%COMP%] > nz-form-item.required[_ngcontent-%COMP%]{background-color:#e6f7ff;border:1px solid #69c0ff}.layout-vertical[_nghost-%COMP%] > nz-form-item.error[_ngcontent-%COMP%]{background-color:#fff1f0;border:1px solid #ff7875}.layout-vertical[_nghost-%COMP%] > nz-form-item.valid[_ngcontent-%COMP%]{background-color:#f6ffed;border:1px solid #95de64}.layout-vertical[_nghost-%COMP%] > nz-form-item.disabled[_ngcontent-%COMP%]{background-color:#f5f5f5;border:1px solid #f5f5f5}.cvc-form-field-validation[_ngcontent-%COMP%], .form-field-description[_ngcontent-%COMP%]{min-height:16px;line-height:1.2;margin-top:4px}.cvc-form-field-validation[_ngcontent-%COMP%]   .extra-prompt[_ngcontent-%COMP%], .form-field-description[_ngcontent-%COMP%]   .extra-prompt[_ngcontent-%COMP%]{font-weight:400}.cvc-form-field-validation[_ngcontent-%COMP%]   .extra-description[_ngcontent-%COMP%], .form-field-description[_ngcontent-%COMP%]   .extra-description[_ngcontent-%COMP%]{font-style:oblique}.cvc-form-field-validation[_ngcontent-%COMP%]{font-weight:600}'],changeDetection:0}),l})();var qn=c(6109);const Po={wrappers:[{name:"form-field",component:no}]};let Jn=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,n.UX,N.U5,qn.cg,Ce.ZJ,y.X0.forChild(Po)]}),l})();var uo=c(2840),fi=c(1221),Xn=c(7417),Io=c(2),ln=c(1791),ko=c(4223);function No(){var l;let v=((l=class extends y.fS{configureBaseField(){this.field?.options?.fieldChanges?(this.onModelChange$=this.field.options.fieldChanges.pipe((0,yt.h)(h=>h.field.id===this.field.id),(0,ko.j)("value")),this.formControl.value?(this.onValueChange$=new Ve.X(this.formControl.value),Array.isArray(this.formControl.value)?this.field.formControl.value.length>0&&this.formControl.markAsTouched():this.formControl.markAsTouched()):this.onValueChange$=new Ve.X(void 0),this.onModelChange$.pipe((0,ln.t)(this)).subscribe(h=>{this.onValueChange$.next(h)}),this.field.options?.formState&&this.field.options.formState.fields&&(this.state=this.field.options.formState,this.autoConfigureStateValueChanges())):console.error(`${this.field.id} could not find its fieldChanges Observable, ensure configureBaseField() is called in this field's AfterViewInit hook.`)}autoConfigureStateValueChanges(){!this.field.key&&"string"==typeof this.field.key&&console.warn(`${this.field.id} cannot auto-configure state value changes, as its field key is not a string. field.key: `,this.field.key);const h=`${this.field.key}$`;this.state&&this.state.fields[h]?(this.stateValueChange$=this.state.fields[h],this.onValueChange$.pipe((0,j.U)(O=>null===O?void 0:O),(0,ln.t)(this)).subscribe(O=>{this.stateValueChange$&&this.stateValueChange$.next(O)})):console.warn(`${this.field.id} could not find state field ${h} on form state. State: `,this.state)}}).\u0275fac=(()=>{let s;return function(O){return(s||(s=e.n5z(l)))(O||l)}})(),l.\u0275prov=e.Yz7({token:l,factory:l.\u0275fac}),l);return v=(0,V.gn)([(0,ln.c)()],v),v}var Go=c(7328),Ci=c(836),ci=c(2460),wi=c(2096),Ji=c(9666),er=c(2428),ur=c(4911),li=c(5676),Ho=c(2572);function Bi(...l){let v=l[0],s=l[1];if(0===v.length)return(0,wi.of)(s?s([]):[]);const h=v.slice();return s&&h.push((...O)=>s(O)),Ho.a.apply(null,h)}function zi(){return function(v){return(()=>{class h extends v{configureEntitySelectField(ge){if(this.typeaheadQuery=ge.typeaheadQuery,this.tagQuery=ge.tagQuery,this.getTypeaheadVars=ge.getTypeaheadVarsFn,this.getTypeahedResults=ge.getTypeaheadResultsFn,this.getTagQueryVars=ge.getTagQueryVarsFn,this.getTagQueryResults=ge.getTagQueryResultsFn,this.getSelectedItemOption=ge.getSelectedItemOptionFn,this.getSelectOptions=ge.getSelectOptionsFn,this.typeaheadParam$=ge.typeaheadParam$,this.typeaheadParamName$=ge.typeaheadParamName$,this.selectOpen$=ge.selectOpen$||new Go.t,this.selectComponent=ge.selectComponent,this.minSearchStrLength=ge.minSearchStrLength||0,this.cdr=ge.changeDetectorRef,this.onSearch$=new Ve.X(void 0),this.isLoading$=new it.y,this.result$=new Ve.X([]),this.onPopulate$=new x.x,this.onTagClose$=new x.x,this.onOpenChange$=new x.x,this.onCreate$=new x.x,this.selectOption$=new Ve.X(void 0),this.response$=this.onSearch$.pipe((0,Ci.T)(1),(0,yt.h)(li.ep),(0,yt.h)(mt=>0===this.minSearchStrLength||mt.length>=this.minSearchStrLength),(0,ci.M)(void 0!==this.typeaheadParam$?this.typeaheadParam$:(0,wi.of)(void 0)),(0,te.w)(([mt,Tn])=>{const In=this.getTypeaheadVars(mt,Tn),Eo=Vi=>(this.queryRef=this.typeaheadQuery.watch(Vi),this.isLoading$=this.queryRef.valueChanges.pipe((0,ko.j)("loading"),(0,ye.x)()),this.queryRef.valueChanges),hi=Vi=>(0,Ji.D)(this.queryRef.refetch(Vi));return(0,er.s)(()=>void 0===this.queryRef,(0,ur.P)(()=>Eo(In)),(0,ur.P)(()=>hi(In)))})),this.onOpenChange$.subscribe(mt=>{mt&&this.onSearch$.next("")}),this.response$.pipe((0,yt.h)(mt=>void 0!==mt.data),(0,j.U)(mt=>this.getTypeahedResults(mt)),(0,ln.t)(this)).subscribe(mt=>{this.result$.next(mt),0===mt.length&&this.selectOption$.next([]),this.cdr.detectChanges()}),this.optionTemplates?this.optionTemplates.changes.pipe((0,ci.M)(this.result$),(0,ln.t)(this)).subscribe(([mt,Tn])=>{const In=this.getSelectOptions(Tn,mt);this.selectOption$.next(In),this.cdr.detectChanges()}):(console.warn(`${this.field.id} could not find reference to optionTemplates ViewChildren, options will only show entity name text.`),this.result$.pipe((0,ln.t)(this)).subscribe(mt=>{this.selectOption$.next(mt.map(Tn=>({label:Tn.name,value:Tn.id})))})),this.onPopulate$.pipe((0,yt.h)(li.ep),(0,te.w)(mt=>Bi(this.getTagQueries(mt))),(0,j.U)(mt=>mt.map(Tn=>this.getTagQueryResults(Tn))),(0,Tt.b)(mt=>{this.result$.next(mt)}),(0,ln.t)(this)).subscribe(mt=>{let Tn;if(this.field.props&&this.field.props.isMultiSelect){const In=[];mt.forEach(Eo=>In.push(Eo?.id||void 0)),Tn=In}else Tn=mt[0].id;this.formControl.setValue(Tn),this.selectOpen$.next(!1)}),this.formControl.value){const mt=this.formControl.value;if(Object.keys(mt).length>0&&mt.constructor===Object)return void console.error(`${this.field.id} prepopulated value must be a primitive or array of primitives, value is an object:`,mt);this.onPopulate$.next(mt)}this.onTagClose$.pipe((0,ln.t)(this)).subscribe(mt=>{this.resetField()})}getTagQueries(ge){return"number"==typeof ge&&(ge=[ge]),ge.map(Tn=>this.tagQuery.fetch(this.getTagQueryVars(Tn),{fetchPolicy:"cache-first"}).pipe((0,yt.h)(In=>!!In.data)))}resetField(){this.formControl.setValue(void 0),this.result$&&this.result$.next([])}}return h.\u0275fac=(()=>{let O;return function(mt){return(O||(O=e.n5z(h)))(mt||h)}})(),h.\u0275prov=e.Yz7({token:h,factory:h.\u0275fac}),h})()}}const Vo=function Zr(l){for(var v=arguments.length,s=new Array(v>1?v-1:0),h=1;h<v;h++)s[h-1]=arguments[h];return s.reduce(function(O,ge){return ge(O)},l)};var ri,Hn=c(313),lo=c(8091),Gi=c(8753),Ai=c(6321),_r=c(7081);function Le(l,v){1&l&&e._UZ(0,"span",5),2&l&&e.Q6J("nzType","loading")}function X(l,v){if(1&l&&(e.YNc(0,Le,1,1,"span",4),e.ynx(1),e._uU(2),e.BQk()),2&l){const s=e.oxw().ngrxLet;e.Q6J("ngIf",s.showSpinner),e.xp6(2),e.hij(" ",s.message," ")}}const Se=(l,v,s)=>({$implicit:l,createMsg:v,model:s});function je(l,v){if(1&l&&(e._UZ(0,"nz-divider"),e.TgZ(1,"div",6),e.GkF(2,7),e.qZA()),2&l){const s=e.oxw().ngrxLet,h=e.oxw();e.xp6(2),e.Q6J("ngTemplateOutlet",h.cvcAddEntity)("ngTemplateOutletContext",e.kEZ(2,Se,s.searchStr,s.message,h.cvcAddEntityModel))}}const Ct=()=>[];function Yt(l,v){if(1&l){const s=e.EpF();e.ynx(0),e.TgZ(1,"nz-select",1),e.NdJ("nzOpenChange",function(O){e.CHM(s);const ge=e.oxw();return e.KtG(ge.onOpenChange$.next(O))})("nzOnSearch",function(O){e.CHM(s);const ge=e.oxw();return e.KtG(ge.cvcOnSearch.next(O))})("ngModelChange",function(O){e.CHM(s);const ge=e.oxw();return e.KtG(ge.cvcOnModelChange.next(O))}),e.qZA(),e.YNc(2,X,3,2,"ng-template",null,2,e.W1O)(4,je,3,6,"ng-template",null,3,e.W1O),e.BQk()}if(2&l){const s=v.ngrxLet,h=e.MAs(3),O=e.MAs(5),ge=e.oxw();e.xp6(),e.ekj("ng-dirty",ge.cvcShowError),e.Q6J("nzDropdownMatchSelectWidth",!0)("formControl",ge.cvcFormControl)("formlyAttributes",ge.cvcFormlyAttributes)("nzMode",ge.cvcSelectMode)("nzPlaceHolder",ge.cvcPlaceholder||"Search "+ge.cvcEntityName.plural)("nzCustomTemplate",ge.cvcCustomTemplate||null)("nzOptionHeightPx",30)("nzDisabled",ge.cvcDisabled)("nzLoading",ge.cvcLoading)("nzAllowClear",ge.cvcAllowClear)("nzBorderless",ge.cvcBorderless)("nzSuffixIcon",ge.cvcSuffixIcon)("nzShowArrow",ge.cvcShowArrow)("nzAutoClearSearchValue",ge.cvcAutoClearSearchValue)("nzOptions",ge.cvcOptions||e.DdM(20,Ct))("nzDropdownRender",s.showAddForm?O:null)("nzNotFoundContent",h)("nzOpen",ge.cvcSelectOpen)}}const en={search:(l,v,s)=>`Searching ${l} matching "${v}"...`,searchAll:(l,v,s)=>`Listing all ${l}...`,searchParam:(l,v,s)=>`Searching ${s} ${l} matching "${v}"...`,searchParamAll:(l,v,s)=>`Listing all ${s} ${l}...`,searchEnterQuery:(l,v,s,h)=>`Enter at least ${h} characters to search ${s} ${l}`,searchEnterQueryAll:(l,v,s,h)=>`Enter at least least ${h} characters to search ${l}`,empty:(l,v,s)=>`No ${l} found matching "${v}"`,emptyAll:(l,v,s)=>`No ${l} found.`,emptyParam:(l,v,s)=>`No ${s} ${l} found matching "${v}"`,emptyParamAll:(l,v,s)=>`No ${s} ${l} found`};let dn=((ri=class{constructor(){this.cvcEntityName={singular:"Entity",plural:"Entities"},this.cvcSelectMode="default",this.cvcLoading=!1,this.cvcOptions=void 0,this.cvcShowError=!1,this.cvcDisabled=!1,this.cvcAllowClear=!0,this.cvcBorderless=!1,this.cvcShowArrow=!1,this.cvcAutoClearSearchValue=!0,this.cvcSuffixIcon="search",this.cvcCustomTemplate=null,this.cvcAddEntity=null,this.cvcMinSearchStrLength=0,this.cvcAddEntityBehavior=(v,s)=>v.length>this.cvcMinSearchStrLength&&0===s.length,this.cvcOnOpenChange=new e.vpe,this.cvcOnSearch=(new e.vpe).pipe((0,Gi.p)(300,Ai.z,{leading:!1,trailing:!0}),(0,_r.d)(1)),this.cvcOnModelChange=new e.vpe,this.cvcSelectComponent=new e.vpe,this.messageOptions=en,this.onParamName$=new Ve.X(void 0),this.onOption$=new Ve.X([]),this.onOpenChange$=new Ve.X(!1),this.onLoading$=new Ve.X(!1),this.notFoundDisplay$=new Ve.X({searchStr:"",showSpinner:!0,showAddForm:!1,message:`Searching ${this.cvcEntityName.plural}...`}),this.previousIsOpen=!1}ngAfterViewInit(){this.cvcSelectMessages&&(this.messageOptions={...this.messageOptions,...this.cvcSelectMessages}),this.nzSelectComponent?(this.cvcSelectComponent.next(this.nzSelectComponent),this.onOpenChange$.pipe((0,ln.t)(this)).subscribe(v=>{this.cvcOnOpenChange.next(v)}),(0,Ho.a)([this.onOpenChange$,this.cvcOnSearch,this.onParamName$,this.onOption$,this.onLoading$.pipe((0,ye.x)())]).pipe((0,j.U)(([v,s,h,O,ge])=>{const mt=this.cvcEntityName.plural,Tn=this.cvcMinSearchStrLength,In=null!==this.cvcAddEntity,Eo=!1===this.previousIsOpen&&!0===v;if(this.previousIsOpen=v,Eo)return this.getSelectInitDisplay(mt,Tn,h);if(ge&&s.length>=Tn){const hi=this.cvcAddEntityBehavior(s,this.cvcResults||[]);return this.getSelectSearchingDisplay(s,mt,Tn,h,In,hi)}return v&&!ge&&s.length>=Tn&&0===O.length?this.getSelectEmptyDisplay(s,mt,h,In):{searchStr:"",showSpinner:!1,showAddForm:In&&this.cvcAddEntityBehavior(s,this.cvcResults||[]),message:""}}),(0,Tt.b)(v=>{this.notFoundDisplay$.next(v)}),(0,ln.t)(this)).subscribe()):console.error(`${this.cvcEntityName.singular} entity-select could not gain reference to its nzSelectComponent, aborting AfterViewInit()`)}getSelectInitDisplay(v,s,h){let O=this.messageOptions.searchAll,ge=!1;return 0==s?(ge=!0,O=void 0===h?this.messageOptions.searchAll:this.messageOptions.searchParamAll):s>0&&(ge=!1,O=void 0===h?this.messageOptions.searchEnterQueryAll:this.messageOptions.searchEnterQuery),{message:O(v,"",h,s),showSpinner:ge,showAddForm:!1,searchStr:""}}getSelectSearchingDisplay(v,s,h,O,ge,mt=!1){let Tn=this.messageOptions.searchAll;return Tn=void 0===O?v.length>0?this.messageOptions.search:this.messageOptions.searchAll:v.length>0?this.messageOptions.searchParam:this.messageOptions.searchParamAll,{message:Tn(s,v,O),showSpinner:!0,showAddForm:ge&&mt,searchStr:v}}getSelectEmptyDisplay(v,s,h,O){let ge=this.messageOptions.empty;return ge=void 0===h?v.length>0?this.messageOptions.empty:this.messageOptions.emptyAll:v.length>0?this.messageOptions.emptyParam:this.messageOptions.emptyParamAll,{message:ge(s,v,h),showSpinner:!1,showAddForm:O,searchStr:v}}ngOnChanges(v){if(v.cvcParamName&&this.onParamName$.next(v.cvcParamName.currentValue),v.cvcOptions){const s=v.cvcOptions.currentValue;void 0!==s&&this.onOption$.next(s)}if(v.cvcLoading){const s=v.cvcLoading.currentValue;void 0!==s&&this.onLoading$.next(s)}}}).\u0275fac=function(v){return new(v||ri)},ri.\u0275cmp=e.Xpm({type:ri,selectors:[["cvc-entity-select"]],viewQuery:function(v,s){if(1&v&&e.Gf(Be.Vq,5),2&v){let h;e.iGM(h=e.CRH())&&(s.nzSelectComponent=h.first)}},inputs:{cvcFormControl:"cvcFormControl",cvcFormlyAttributes:"cvcFormlyAttributes",cvcEntityName:"cvcEntityName",cvcSelectMessages:"cvcSelectMessages",cvcSelectMode:"cvcSelectMode",cvcPlaceholder:"cvcPlaceholder",cvcLoading:"cvcLoading",cvcOptions:"cvcOptions",cvcResults:"cvcResults",cvcShowError:"cvcShowError",cvcDisabled:"cvcDisabled",cvcAllowClear:"cvcAllowClear",cvcBorderless:"cvcBorderless",cvcShowArrow:"cvcShowArrow",cvcAutoClearSearchValue:"cvcAutoClearSearchValue",cvcSuffixIcon:"cvcSuffixIcon",cvcCustomTemplate:"cvcCustomTemplate",cvcParamName:"cvcParamName",cvcAddEntity:"cvcAddEntity",cvcAddEntityModel:"cvcAddEntityModel",cvcMinSearchStrLength:"cvcMinSearchStrLength",cvcAddEntityBehavior:"cvcAddEntityBehavior",cvcSelectOpen:"cvcSelectOpen"},outputs:{cvcOnOpenChange:"cvcOnOpenChange",cvcOnSearch:"cvcOnSearch",cvcOnModelChange:"cvcOnModelChange",cvcSelectComponent:"cvcSelectComponent"},features:[e.TTD],decls:1,vars:1,consts:[[4,"ngrxLet"],["nzShowSearch","","nzServerSearch","","nzAllowClear","",3,"nzDropdownMatchSelectWidth","formControl","formlyAttributes","nzMode","nzPlaceHolder","nzCustomTemplate","nzOptionHeightPx","nzDisabled","nzLoading","nzAllowClear","nzBorderless","nzSuffixIcon","nzShowArrow","nzAutoClearSearchValue","nzOptions","nzDropdownRender","nzNotFoundContent","nzOpen","nzOpenChange","nzOnSearch","ngModelChange"],["searchMessages",""],["addForm",""],["nz-icon","",3,"nzType",4,"ngIf"],["nz-icon","",3,"nzType"],[1,"add-form-container"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(v,s){1&v&&e.YNc(0,Yt,6,21,"ng-container",0),2&v&&e.Q6J("ngrxLet",s.notFoundDisplay$)},dependencies:[u.O5,u.tP,n.JJ,n.oH,lo.eJ,y.JD,ee.Ls,Be.Vq,An.g],styles:["nz-divider[_ngcontent-%COMP%]{margin:4px 0 0}.add-form-container[_ngcontent-%COMP%]{padding:4px 8px 8px}"],changeDetection:0}),ri);dn=(0,V.gn)([(0,ln.c)({arrayName:"stateSubscriptions"})],dn);var nn=c(9835);const Mn=["optionTemplates"];function Yn(l,v){if(1&l&&(e.ynx(0),e.TgZ(1,"em")(2,"span",6),e._uU(3),e.qZA()(),e.BQk()),2&l){const s=e.oxw(2).$implicit;e.xp6(3),e.Oqu(s.description)}}function Pn(l,v){if(1&l&&(e.TgZ(0,"nz-tag",5),e._uU(1),e.qZA(),e.TgZ(2,"span",6),e.YNc(3,Yn,4,1,"ng-container",7),e.qZA()),2&l){const s=e.oxw().$implicit;e.xp6(),e.Oqu(s.code),e.xp6(2),e.Q6J("ngIf",s.description)}}function sn(l,v){1&l&&(e.ynx(0),e.YNc(1,Pn,4,2,"ng-template",null,4,e.W1O),e.BQk())}function $n(l,v){if(1&l&&(e.ynx(0),e.YNc(1,sn,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&l){const s=e.oxw();e.xp6(),e.Q6J("ngForOf",e.lcZ(2,1,s.result$))}}function io(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"div",8)(1,"cvc-entity-tag",9),e.NdJ("cvcOnClose",function(){const ge=e.CHM(s).$implicit,mt=e.oxw();return e.KtG(mt.onTagClose$.next(ge.nzValue))}),e.qZA()()}if(2&l){const s=v.$implicit,h=e.oxw();e.xp6(),e.Q6J("cvcDisableLink",!0)("cvcHasTooltip",!0)("cvcCacheId","AcmgCode:"+s.nzValue)("cvcContext",h.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",h.props.isMultiSelect?"default":"closeable")}}const oo=Vo(No(),zi());let eo=(()=>{class l extends oo{constructor(s,h,O){super(),this.taq=s,this.tq=h,this.changeDetectorRef=O,this.defaultOptions={props:{entityName:{singular:"ACMG/AMP Code",plural:"ACMG/AMP Codes"},isMultiSelect:!1,requireType:!0,tooltip:"If applicable, please provide evidence criteria from the standards and guidelines for interpretation of sequence variants from ACMG/AMP.",placeholder:"Search ACMG/AMP Codes",requireTypePromptFn:(ge,mt)=>`Select an ${ge} Type to search associated ACMG Code(s)`}},this.placeholder$=new Ve.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectComponent:this.selectComponent}),this.configurePlaceholders()}configureStateConnections(){if(this.state&&(this.stateEntityName=this.state.entityName,this.state.requires.requiresAcmgCodes$?this.onRequiresAcmgCode$=this.state.requires.requiresAcmgCodes$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresAcmgCodes$ subject to attach.`),this.props.requireType)){const s=`${this.stateEntityName.toLowerCase()}Type$`;this.state.fields[s]?this.onEntityType$=this.state.fields[s]:console.error(`${this.field.id} requireType is true, however form state does not provide Subject ${s}.`)}}configurePlaceholders(){this.placeholder$.next(this.props.placeholders),this.onRequiresAcmgCode$&&this.onEntityType$&&(0,Ho.a)([this.onRequiresAcmgCode$,this.onEntityType$]).pipe((0,ye.x)(),(0,ln.t)(this)).subscribe(([s,h])=>{!s&&h?(this.props.required=!1,this.props.disabled=!0,this.props.description=`${(0,Io.E)(h)} ${this.state.entityName} does not include associated ACMG/AMP Code(s)`,this.props.extraType="prompt",this.resetField(),this.cdr.markForCheck()):this.props.requireType&&!h?(this.props.required=!1,this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName,this.props.isMultiSelect),this.props.extraType="prompt"):s?(this.props.required=!0,this.props.disabled=!1,this.props.description='Please provide evidence criteria from the standards and guidelines for interpretation of sequence variants from ACMG/AMP in <a href="https://pubmed.ncbi.nlm.nih.gov/25741868/" target="_blank">Richards et. al. 2015</a>. Review all codes and select each one that applies. If a code is not applied, it is inferred to not be met.',this.props.extraType="description"):(!s&&this.formControl.value||this.props.requireType&&!h&&this.formControl.value)&&this.resetField()})}getTypeaheadVarsFn(s){return{code:s}}getTypeaheadResultsFn(s){return s.data.acmgCodesTypeahead}getTagQueryResultsFn(s){return s.data.acmgCode}getTagQueryVarsFn(s){return{id:s}}getSelectedItemOptionFn(s){return{value:s.id,label:s.code}}getSelectOptionsFn(s,h){return s.map((O,ge)=>(console.log(O),{label:h.get(ge)||O.code,value:O.id}))}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(Hn.O2u),e.Y36(Hn.AIY),e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-acmg-code-select"]],viewQuery:function(s,h){if(1&s&&e.Gf(Mn,5,e.Rgc),2&s){let O;e.iGM(O=e.CRH())&&(h.optionTemplates=O)}},features:[e.qOj],decls:9,vars:22,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],["nz-tooltip",""],["nz-typography","","nzType","secondary"],[4,"ngIf"],[1,"ant-select-selection-item-content"],[3,"cvcDisableLink","cvcHasTooltip","cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(s,h){if(1&s&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(ge){return h.onSearch$.next(ge)})("cvcOnOpenChange",function(ge){return h.onOpenChange$.next(ge)})("cvcOnModelChange",function(ge){return h.props.change&&h.props.change(h.field,ge)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.qZA(),e.YNc(6,$n,3,3,"ng-container",1)(7,io,2,5,"ng-template",null,2,e.W1O)),2&s){const O=e.MAs(8);e.Q6J("cvcSelectMode",h.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",O)("cvcFormControl",h.formControl)("cvcFormlyAttributes",h.field)("cvcEntityName",h.props.entityName)("cvcPlaceholder",e.lcZ(1,12,h.placeholder$))("cvcResults",e.lcZ(2,14,h.result$))("cvcOptions",e.lcZ(3,16,h.selectOption$))("cvcShowError",h.showError)("cvcDisabled",h.onRequiresAcmgCode$&&!e.lcZ(4,18,h.onRequiresAcmgCode$))("cvcLoading",e.lcZ(5,20,h.isLoading$)),e.xp6(6),e.Q6J("ngrxLet",h.onSearch$)}},dependencies:[u.sg,u.O5,lo.eJ,qn.SY,Ce.ZU,to.j,dn,nn.J,lo.fM],changeDetection:0}),l})();const co={types:[{name:"acmg-code-select",wrappers:["form-field"],component:eo,defaultOptions:{props:{label:"ACMG/AMP Code"}}},{name:"acmg-code-multi-select",wrappers:["form-field"],component:eo,defaultOptions:{props:{isMultiSelect:!0,label:"ACMG/AMP Code(s)"}}}]};let Lo=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,n.UX,y.X0.forChild(co),Nt.L,uo.sL,Be.LV,Xn.$6,fi.Qp,ee.PV,B.o7,H.Jb,qn.cg,st.zf,N.U5,he.ic,Ce.ZJ,to.X,Jn,xn,We.s,ut.x,Zn]}),l})(),vo=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,n.UX,y.X0.forChild(),ee.PV,N.U5,Be.LV,B.o7,We.s]}),l})();function So(){return function(v){return(()=>{class h extends v{configureEnumSelectField(ge){this.selectOption$=new Ve.X([]),this.onTagClose$=new x.x,this.optionEnum$=ge.optionEnum$,this.changeDetectorRef=ge.changeDetectorRef,this.optionTemplate$=ge.optionTemplate$?ge.optionTemplate$:new Ve.X([]),this.optionTemplate$.pipe((0,ci.M)(this.optionEnum$),(0,ln.t)(this)).subscribe(mt=>{this.emitSelectOptions(mt)}),this.onTagClose$.pipe((0,ln.t)(this)).subscribe(mt=>{this.resetField()})}emitSelectOptions([ge,mt]){this.selectOption$.next(mt.map((Tn,In)=>({label:ge[In]||Tn,value:Tn}))),this.changeDetectorRef?this.changeDetectorRef.detectChanges():console.error(`${this.field.id}'s configureEnumTagField() requires valid ChangeDetectorRef option, none detected.`)}resetField(){this.formControl.setValue(this.props.isMultiSelect?[]:void 0)}}return h.\u0275fac=(()=>{let O;return function(mt){return(O||(O=e.n5z(h)))(mt||h)}})(),h.\u0275prov=e.Yz7({token:h,factory:h.\u0275fac}),h})()}}var Fo=c(3742);const Wo=()=>[];let Bo=(()=>{class l{constructor(){this.cvcSelectMode="default",this.cvcPlaceholder="Select an option",this.cvcOptions=[],this.cvcShowError=!1,this.cvcDisabled=!1,this.cvcAllowClear=!0,this.cvcCustomTemplate=null,this.cvcOnFocus=new e.vpe}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-enum-select"]],inputs:{cvcFormControl:"cvcFormControl",cvcFormlyAttributes:"cvcFormlyAttributes",cvcSelectMode:"cvcSelectMode",cvcPlaceholder:"cvcPlaceholder",cvcOptions:"cvcOptions",cvcShowError:"cvcShowError",cvcDisabled:"cvcDisabled",cvcAllowClear:"cvcAllowClear",cvcModelChange:"cvcModelChange",cvcCustomTemplate:"cvcCustomTemplate"},outputs:{cvcOnFocus:"cvcOnFocus"},decls:1,vars:12,consts:[[3,"formControl","formlyAttributes","nzMode","nzPlaceHolder","nzOptions","nzCustomTemplate","nzOptionHeightPx","nzDisabled","nzAllowClear","nzFocus","ngModelChange"]],template:function(s,h){1&s&&(e.TgZ(0,"nz-select",0),e.NdJ("nzFocus",function(){return h.cvcOnFocus.next()})("ngModelChange",function(ge){return h.cvcModelChange&&h.cvcModelChange(h.cvcFormlyAttributes,ge)}),e.qZA()),2&s&&(e.ekj("ng-dirty",h.cvcShowError),e.Q6J("formControl",h.cvcFormControl)("formlyAttributes",h.cvcFormlyAttributes)("nzMode",h.cvcSelectMode)("nzPlaceHolder",h.cvcPlaceholder?h.cvcPlaceholder:"Select Value")("nzOptions",h.cvcOptions?h.cvcOptions:e.DdM(11,Wo))("nzCustomTemplate",h.cvcCustomTemplate?h.cvcCustomTemplate:null)("nzOptionHeightPx",30)("nzDisabled",h.cvcDisabled)("nzAllowClear",h.cvcAllowClear))},dependencies:[n.JJ,n.oH,y.JD,Be.Vq],changeDetection:0}),l})();var Do=c(3702);const vi=["optionTemplates"];function Yo(l,v){if(1&l&&(e.TgZ(0,"nz-tag")(1,"strong"),e._uU(2),e.ALo(3,"formatAmp"),e.qZA()(),e.TgZ(4,"span",4),e._uU(5),e.qZA()),2&l){const s=e.oxw().$implicit,h=e.oxw();e.xp6(2),e.Oqu(e.xi3(3,2,s,"verbose")),e.xp6(3),e.Oqu(h.descriptionForCategory(s))}}function Fi(l,v){1&l&&(e.ynx(0),e.YNc(1,Yo,6,5,"ng-template",null,3,e.W1O),e.BQk())}function tr(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"nz-tag",8),e.NdJ("nzOnClose",function(O){e.CHM(s);const ge=e.oxw(2);return e.KtG(ge.onTagClose$.next(O))}),e.TgZ(1,"strong"),e._uU(2),e.ALo(3,"formatAmp"),e.qZA()()}if(2&l){const s=e.oxw().$implicit;e.xp6(2),e.Oqu(e.xi3(3,1,s.nzValue,"verbose"))}}function Mi(l,v){if(1&l&&(e.ynx(0),e._uU(1),e.ALo(2,"formatAmp"),e.BQk()),2&l){const s=e.oxw().$implicit;e.xp6(),e.hij(" ",e.xi3(2,1,s.nzValue,"verbose")," ")}}function Wi(l,v){if(1&l&&(e.TgZ(0,"div",5),e.YNc(1,tr,4,4,"nz-tag",6)(2,Mi,3,4,"ng-container",7),e.qZA()),2&l){const s=e.oxw();e.xp6(),e.Q6J("ngIf",!s.props.isMultiSelect),e.xp6(),e.Q6J("ngIf",s.props.isMultiSelect)}}const Ki=new Map([[Hn.iwm.Na,"Not Applicable"],[Hn.iwm.TierILevelA,"Biomarkers showing therapeutic response to FDA-approved therapy, or therapy included in professional guidelines."],[Hn.iwm.TierILevelB,"Biomarkers showing therapeutic response based on well-powered studies with consensus from experts in the field."],[Hn.iwm.TierIiLevelC,"FDA-approved therapies for different tumor types or investigational therapies, or multiple small published studies with some consensus."],[Hn.iwm.TierIiLevelD,"Biomarkers that show plausible therapeutic significance based on preclinical studies."],[Hn.iwm.TierIii,"Somatic variants in cancer genes reported in the same or different cancer types with unknown clinical significance and variants in cancer genes that have not been reported in any cancers."],[Hn.iwm.TierIv,"Benign or likely benign germline variants observed at significant allele frequencies in the general population or specific subpopulation."]]),dr=Vo(No(),So());let Ei=(()=>{class l extends dr{constructor(s){super(),this.cdr=s,this.defaultOptions={props:{label:"AMP/ASCO/CAP Category",required:!1,isMultiSelect:!1,placeholder:"Select AMP/ASCO/CAP Category"}},this.ampCategoryEnum$=new Ve.X([])}descriptionForCategory(s){return Ki.get(s)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.ampCategoryEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr}),this.configurePlaceholder()}configureStateConnections(){this.props.tooltip="If applicable, please provide the AMP/ASCO/CAP somatic variant classification.",this.ampCategoryEnum$.next((0,Fo.o6)(Hn.iwm).map(s=>s)),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,j.U)(s=>s.map(h=>h))),this.state&&(this.state.requires.requiresAmpLevel$?this.onRequiresAmpCategory$=this.state.requires.requiresAmpLevel$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresAmpLevel$ subject to attach.`),this.onValueChange$.pipe((0,ln.t)(this)).subscribe(s=>{s?(this.props.extraType=void 0,this.props.description=Ki.get(s)):this.props.description="Select an Assertion Type to select its AMP Category"}))}configurePlaceholder(){this.placeholder$=new Ve.X(this.props.placeholder),this.onRequiresAmpCategory$&&this.onRequiresAmpCategory$.pipe((0,ye.x)(),(0,ln.t)(this)).subscribe(s=>{this.props.extraType=void 0,s?(this.formControl.value||(this.props.extraType="description",this.props.description='Please provide the AMP/ASCO/CAP <a href="https://pubmed.ncbi.nlm.nih.gov/27993330/" target="_blank">somatic variant classification</a>.'),this.props.required=!0,this.props.disabled=!1):(this.props.required=!1,this.props.disabled=!0,this.resetField()),this.cdr.markForCheck()})}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-amp-category-select"]],viewQuery:function(s,h){if(1&s&&e.Gf(vi,5,e.Rgc),2&s){let O;e.iGM(O=e.CRH())&&(h.optionTemplates=O)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],["nz-typography","","nzType","secondary"],[1,"ant-select-selection-item-content"],["nzMode","closeable",3,"nzOnClose",4,"ngIf"],[4,"ngIf"],["nzMode","closeable",3,"nzOnClose"]],template:function(s,h){if(1&s&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,Fi,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,Wi,3,2,"ng-template",null,2,e.W1O)),2&s){const O=e.MAs(6);e.Q6J("cvcFormControl",h.formControl)("cvcFormlyAttributes",h.field)("cvcSelectMode",h.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,h.placeholder$))("cvcCustomTemplate",O)("cvcOptions",e.lcZ(2,11,h.selectOption$))("cvcShowError",h.showError)("cvcDisabled",h.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,h.ampCategoryEnum$))}},dependencies:[u.sg,u.O5,to.j,Ce.ZU,Bo,lo.fM,Do.t]}),l})();const Jr={types:[{name:"amp-category-select",wrappers:["form-field"],component:Ei},{name:"amp-category-multi-select",wrappers:["form-field"],component:Ei,defaultOptions:{props:{label:"AMP/ASCO/CAP Categories",isMultiSelect:!0}}}]};let sr=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,n.UX,y.X0.forChild(Jr),to.X,Ce.ZJ,We.s,Jn,vo]}),l})();const gs=Vo(No()),ui={types:[{name:"checkbox",wrappers:["form-field"],component:(()=>{class l extends gs{constructor(){super(...arguments),this.defaultOptions={props:{indeterminate:!0,hideLabel:!0}}}ngAfterViewInit(){console.log(this.props)}}return l.\u0275fac=(()=>{let v;return function(h){return(v||(v=e.n5z(l)))(h||l)}})(),l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-checkbox"]],features:[e.qOj],decls:2,vars:4,consts:[["nz-checkbox","",3,"nzIndeterminate","formControl","formlyAttributes","ngModelChange"]],template:function(s,h){1&s&&(e.TgZ(0,"label",0),e.NdJ("ngModelChange",function(ge){return h.props.change&&h.props.change(h.field,ge)}),e._uU(1),e.qZA()),2&s&&(e.Q6J("nzIndeterminate",h.props.indeterminate&&null==h.formControl.value)("formControl",h.formControl)("formlyAttributes",h.field),e.xp6(),e.hij(" ",h.props.label,"\n"))},dependencies:[n.JJ,n.oH,me.Ie,y.JD],changeDetection:0}),l})()}]};let kr=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,n.UX,me.Wr,y.X0.forChild(ui),Jn]}),l})();function Pi(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"input",2),e.NdJ("ngModelChange",function(O){e.CHM(s);const ge=e.oxw();return e.KtG(ge.onValueChange$.next(O))}),e.qZA()}if(2&l){const s=e.oxw();e.Q6J("formControl",s.formControl)("type",s.props.type||"text")("formlyAttributes",s.field)}}function Pe(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"nz-input-number",3),e.NdJ("ngModelChange",function(O){e.CHM(s);const ge=e.oxw();return e.KtG(ge.onValueChange$.next(O))}),e.qZA()}if(2&l){const s=e.oxw();e.Q6J("formControl",s.formControl)("formlyAttributes",s.field)}}const Mt=Vo(No());let W=(()=>{class l extends Mt{constructor(){super()}ngAfterViewInit(){this.configureBaseField()}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-base-input"]],features:[e.qOj],decls:3,vars:2,consts:[["nz-input","",3,"formControl","type","formlyAttributes","ngModelChange",4,"ngIf","ngIfElse"],["numberTmp",""],["nz-input","",3,"formControl","type","formlyAttributes","ngModelChange"],[3,"formControl","formlyAttributes","ngModelChange"]],template:function(s,h){if(1&s&&e.YNc(0,Pi,1,3,"input",0)(1,Pe,1,2,"ng-template",null,1,e.W1O),2&s){const O=e.MAs(2);e.Q6J("ngIf","number"!==h.props.type)("ngIfElse",O)}},dependencies:[u.O5,n.Fj,n.JJ,n.oH,B.Zp,ft,y.JD],encapsulation:2,changeDetection:0}),l})(),De=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,n.UX,B.o7,xe,y.X0.forChild({types:[{name:"base-input",component:W,wrappers:["form-field"]},{name:"base-string",extends:"base-input"},{name:"base-number",extends:"base-input",defaultOptions:{props:{type:"number"}}},{name:"base-integer",extends:"base-input",defaultOptions:{props:{type:"number"}}}]})]}),l})();function Rt(l,v){if(1&l&&e._UZ(0,"nz-option",6),2&l){const s=v.$implicit;e.Q6J("nzValue",s.value)("nzDisabled",s.disabled)("nzLabel",s.label)}}function Xt(l,v){if(1&l&&(e.TgZ(0,"nz-option-group",4),e.YNc(1,Rt,1,3,"nz-option",5),e.qZA()),2&l){const s=e.oxw().$implicit;e.Q6J("nzLabel",s.label),e.xp6(),e.Q6J("ngForOf",s.group)}}function Wn(l,v){if(1&l&&e._UZ(0,"nz-option",6),2&l){const s=e.oxw().$implicit;e.Q6J("nzValue",s.value)("nzDisabled",s.disabled)("nzLabel",s.label)}}function Co(l,v){if(1&l&&(e.ynx(0),e.YNc(1,Xt,2,2,"nz-option-group",2)(2,Wn,1,3,"nz-option",3),e.BQk()),2&l){const s=v.$implicit;e.xp6(),e.Q6J("ngIf",s.group),e.xp6(),e.Q6J("ngIf",!s.group)}}const zo=Vo(No());let Xo=(()=>{class l extends zo{constructor(){super(),this.defaultOptions={props:{isMultiSelect:!1}}}ngAfterViewInit(){this.configureBaseField()}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-base-select"]],features:[e.qOj],decls:4,vars:12,consts:[[3,"nzPlaceHolder","formControl","formlyAttributes","nzMode","ngModelChange"],[4,"ngFor","ngForOf"],[3,"nzLabel",4,"ngIf"],[3,"nzValue","nzDisabled","nzLabel",4,"ngIf"],[3,"nzLabel"],[3,"nzValue","nzDisabled","nzLabel",4,"ngFor","ngForOf"],[3,"nzValue","nzDisabled","nzLabel"]],template:function(s,h){1&s&&(e.TgZ(0,"nz-select",0),e.NdJ("ngModelChange",function(ge){return h.props.change&&h.props.change(h.field,ge)}),e.YNc(1,Co,3,2,"ng-container",1),e.ALo(2,"async"),e.ALo(3,"formlySelectOptions"),e.qZA()),2&s&&(e.ekj("ng-dirty",h.showError),e.Q6J("nzPlaceHolder",void 0!==h.props.placeholder?h.props.placeholder:null)("formControl",h.formControl)("formlyAttributes",h.field)("nzMode",h.props.isMultiSelect?"multiple":"default"),e.xp6(),e.Q6J("ngForOf",e.lcZ(2,7,e.xi3(3,9,h.props.options,h.field))))},dependencies:[u.sg,u.O5,n.JJ,n.oH,Be.Ip,Be.Vq,Be.Yy,y.JD,u.Ov,Vt],encapsulation:2,changeDetection:0}),l})(),Zo=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,n.UX,Be.LV,L,Fn,y.X0.forChild({types:[{name:"base-select",component:Xo,wrappers:["form-field"]},{name:"enum",extends:"select"},{name:"base-multi-select",extends:"level-select",defaultOptions:{props:{isMultiSelect:!0}}}]})]}),l})();const so=Vo(No()),fo={types:[{name:"base-textarea",component:(()=>{class l extends so{constructor(){super(),this.defaultOptions={props:{autosize:!1}}}ngAfterViewInit(){this.configureBaseField()}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["formly-field-nz-textarea"]],features:[e.qOj],decls:1,vars:5,consts:[["nz-input","",3,"nzAutosize","rows","formControl","placeholder","formlyAttributes"]],template:function(s,h){1&s&&e._UZ(0,"textarea",0),2&s&&e.Q6J("nzAutosize",h.props.autosize)("rows",h.props.rows?h.props.rows:2)("formControl",h.formControl)("placeholder",h.props.placeholder)("formlyAttributes",h.field)},dependencies:[n.Fj,n.JJ,n.oH,y.JD,B.Zp,B.rh],encapsulation:2,changeDetection:0}),l})(),wrappers:["form-field"]}]};let _e=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,n.UX,y.X0.forChild(fo),B.o7,Jn]}),l})();var de=c(855),ce=c(1958);const gn={types:[{name:"cvc-cancel-button",component:(()=>{class l extends y.fS{constructor(s){super(),this.location=s}cancelClicked(){this.location.back()}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(u.Ye))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-cancel-button"]],features:[e.qOj],decls:2,vars:0,consts:[["nz-button","","type","button","nzType","default","nzDanger","",1,"cancel-button",3,"click"]],template:function(s,h){1&s&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return h.cancelClicked()}),e._uU(1," Cancel\n"),e.qZA())},dependencies:[uo.ix,de.w,ce.dQ],styles:[".cancel-button[_ngcontent-%COMP%]{margin-right:10px}"],changeDetection:0}),l})()}]};let Un=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,n.UX,y.X0.forChild(gn),uo.sL]}),l})();const $o=["optionTemplates"];function Ii(l,v){if(1&l&&(e.ynx(0),e.TgZ(1,"em")(2,"span",6),e._uU(3),e.qZA()(),e.BQk()),2&l){const s=e.oxw(2).$implicit;e.xp6(3),e.Oqu(s.description)}}function Oo(l,v){if(1&l&&(e.TgZ(0,"nz-tag",5),e._uU(1),e.qZA(),e.TgZ(2,"span",6),e.YNc(3,Ii,4,1,"ng-container",7),e.qZA()),2&l){const s=e.oxw().$implicit;e.xp6(),e.Oqu(s.code),e.xp6(2),e.Q6J("ngIf",s.description)}}function as(l,v){1&l&&(e.ynx(0),e.YNc(1,Oo,4,2,"ng-template",null,4,e.W1O),e.BQk())}function Ya(l,v){if(1&l&&(e.ynx(0),e.YNc(1,as,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&l){const s=e.oxw();e.xp6(),e.Q6J("ngForOf",e.lcZ(2,1,s.result$))}}function cs(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"div",8)(1,"cvc-entity-tag",9),e.NdJ("cvcOnClose",function(){const ge=e.CHM(s).$implicit,mt=e.oxw();return e.KtG(mt.onTagClose$.next(ge.nzValue))}),e.qZA()()}if(2&l){const s=v.$implicit,h=e.oxw();e.xp6(),e.Q6J("cvcDisableLink",!0)("cvcHasTooltip",!0)("cvcCacheId","ClingenCode:"+s.nzValue)("cvcContext",h.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",h.props.isMultiSelect?"default":"closeable")}}const bi=Vo(No(),zi());let Ms=(()=>{class l extends bi{constructor(s,h,O){super(),this.taq=s,this.tq=h,this.changeDetectorRef=O,this.exclusiveCodes=new Set,this.exclusiveSelected=!1,this.defaultOptions={props:{entityName:{singular:"ClinGen/CGC/VICC Code",plural:"ClinGen/CGC/VICC Codes"},isMultiSelect:!1,requireType:!0,tooltip:"If applicable, please provide evidence classifications from the Standards for the classification of pathogenicity of somatic variants in cancer (oncogenicity).",placeholder:"Search ClinGen/CGC/VICC Codes",requireTypePromptFn:(ge,mt)=>`Select an ${ge} Type to search associated ClinGen Code(s)`}},this.placeholder$=new Ve.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectComponent:this.selectComponent}),this.configurePlaceholders(),this.onValueChange$.pipe((0,ln.t)(this)).subscribe(s=>{if(s&&Array.isArray(s)&&s.length>1){const h=s.find(O=>this.exclusiveCodes.has(O));h?(this.previousDescription=this.props.description,this.previousDescriptionType=this.props.extraType,this.props.description="You have selected N/A which precludes selecting any other codes. Please remove it if you wish to select additional codes.",this.exclusiveSelected=!0,this.formControl.setValue([h])):this.exclusiveSelected=!1}this.previousDescription&&!this.exclusiveSelected&&(this.props.description=this.previousDescription,this.props.extraType=this.previousDescriptionType),this.cdr.detectChanges()})}configureStateConnections(){if(this.state&&(this.stateEntityName=this.state.entityName,this.state.requires.requiresClingenCodes$?this.onRequiresClingenCode$=this.state.requires.requiresClingenCodes$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresClingenCodes$ subject to attach.`),this.props.requireType)){const s=`${this.stateEntityName.toLowerCase()}Type$`;this.state.fields[s]?this.onEntityType$=this.state.fields[s]:console.error(`${this.field.id} requireType is true, however form state does not provide Subject ${s}.`)}}configurePlaceholders(){this.placeholder$.next(this.props.placeholders),this.onRequiresClingenCode$&&this.onEntityType$&&(0,Ho.a)([this.onRequiresClingenCode$,this.onEntityType$]).pipe((0,ye.x)(),(0,ln.t)(this)).subscribe(([s,h])=>{!s&&h?(this.props.required=!1,this.props.disabled=!0,this.props.description=`${(0,Io.E)(h)} ${this.state.entityName} does not include associated ClinGen/CGC/VICC Code(s)`,this.props.extraType="prompt",this.resetField(),this.cdr.markForCheck()):this.props.requireType&&!h?(this.props.required=!1,this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName,this.props.isMultiSelect),this.props.extraType="prompt"):s?(this.props.required=!0,this.props.disabled=!1,this.props.description='Please provide the evidence classifications from the Standards for the classification of pathogenicity of somatic variants in cancer (oncogenicity) in <a href="https://pubmed.ncbi.nlm.nih.gov/25741868/" target="_blank">Horak et. al. 2022.</a>. Review all codes and select each one that applies. If a code is not applied, it is inferred to not be met.',this.props.extraType="description"):(!s&&this.formControl.value||this.props.requireType&&!h&&this.formControl.value)&&this.resetField()})}getTypeaheadVarsFn(s){return{code:s}}getTypeaheadResultsFn(s){return s.data.clingenCodesTypeahead.forEach(h=>{h.exclusive&&this.exclusiveCodes.add(h.id)}),s.data.clingenCodesTypeahead}getTagQueryResultsFn(s){return s.data.clingenCode}getTagQueryVarsFn(s){return{id:s}}getSelectedItemOptionFn(s){return{value:s.id,label:s.code}}getSelectOptionsFn(s,h){return s.map((O,ge)=>({label:h.get(ge)||O.code,value:O.id}))}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(Hn.E2B),e.Y36(Hn.R8F),e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-clingen-code-select"]],viewQuery:function(s,h){if(1&s&&e.Gf($o,5,e.Rgc),2&s){let O;e.iGM(O=e.CRH())&&(h.optionTemplates=O)}},features:[e.qOj],decls:9,vars:22,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],["nz-tooltip",""],["nz-typography","","nzType","secondary"],[4,"ngIf"],[1,"ant-select-selection-item-content"],[3,"cvcDisableLink","cvcHasTooltip","cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(s,h){if(1&s&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(ge){return h.onSearch$.next(ge)})("cvcOnOpenChange",function(ge){return h.onOpenChange$.next(ge)})("cvcOnModelChange",function(ge){return h.props.change&&h.props.change(h.field,ge)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.qZA(),e.YNc(6,Ya,3,3,"ng-container",1)(7,cs,2,5,"ng-template",null,2,e.W1O)),2&s){const O=e.MAs(8);e.Q6J("cvcSelectMode",h.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",O)("cvcFormControl",h.formControl)("cvcFormlyAttributes",h.field)("cvcEntityName",h.props.entityName)("cvcPlaceholder",e.lcZ(1,12,h.placeholder$))("cvcResults",e.lcZ(2,14,h.result$))("cvcOptions",e.lcZ(3,16,h.selectOption$))("cvcShowError",h.showError)("cvcDisabled",h.onRequiresClingenCode$&&!e.lcZ(4,18,h.onRequiresClingenCode$))("cvcLoading",e.lcZ(5,20,h.isLoading$)),e.xp6(6),e.Q6J("ngrxLet",h.onSearch$)}},dependencies:[u.sg,u.O5,lo.eJ,qn.SY,Ce.ZU,to.j,dn,nn.J,lo.fM],changeDetection:0}),l})();const Kr={types:[{name:"clingen-code-select",wrappers:["form-field"],component:Ms,defaultOptions:{props:{label:"ClinGen/CGC/VICC Code"}}},{name:"clingen-code-multi-select",wrappers:["form-field"],component:Ms,defaultOptions:{props:{isMultiSelect:!0,label:"ClinGen/CGC/VICC Code(s)"}}}]};let yr=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,n.UX,y.X0.forChild(Kr),Nt.L,uo.sL,Be.LV,Xn.$6,fi.Qp,ee.PV,B.o7,H.Jb,qn.cg,st.zf,N.U5,he.ic,Ce.ZJ,to.X,Jn,xn,We.s,ut.x,Zn]}),l})();function Rr(l){return(()=>{class s extends l{configureStringTagField(){this.tagLabel$=new x.x,this.onTagClose$=new x.x,this.onTagClose$.pipe((0,ln.t)(this)).subscribe(O=>{this.formControl.setValue(void 0),this.tagLabel$.next(void 0)})}}return s.\u0275fac=(()=>{let h;return function(ge){return(h||(h=e.n5z(s)))(ge||s)}})(),s.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac}),s})()}var Hi,ar=c(1022);function bs(l,v){if(1&l&&(e.TgZ(0,"label",5),e._uU(1),e.qZA()),2&l){const s=v.$implicit;e.Q6J("nzValue",s.value)("nzTooltipTitle",s.tooltip),e.xp6(),e.hij(" ",s.label," ")}}function Vr(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"nz-col",2)(1,"nz-radio-group",3),e.NdJ("ngModelChange",function(O){e.CHM(s);const ge=e.oxw();return e.KtG(ge.existenceChange$.next(O))}),e.ALo(2,"ngrxPush"),e.YNc(3,bs,2,3,"label",4),e.qZA()()}if(2&l){const s=e.oxw();e.xp6(),e.Q6J("ngModel",e.lcZ(2,2,s.existenceModel$)),e.xp6(2),e.Q6J("ngForOf",s.selectOptions)}}function To(l,v){if(1&l&&e._UZ(0,"nz-option",8),2&l){const s=v.$implicit;e.Q6J("nzLabel",s)("nzValue",s)("nzHide",!0)}}function Es(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"nz-col",2)(1,"nz-select",6),e.NdJ("ngModelChange",function(O){e.CHM(s);const ge=e.oxw();return e.KtG(ge.onValueChange$.next(O))}),e.YNc(2,To,1,3,"nz-option",7),e.qZA()()}if(2&l){const s=e.oxw();e.xp6(),e.Q6J("formControl",s.formControl)("formlyAttributes",s.field),e.xp6(),e.Q6J("ngForOf",s.formControl.value)}}const Br=()=>[8,8],nr=Vo(No(),Rr);let Cr=((Hi=class extends nr{constructor(v){super(),this.cdr=v,this.defaultOptions={modelOptions:{updateOn:"blur"},props:{label:"Enter value",placeholder:"Enter value and hit Return",description:"Specify if Clinvar IDs exist, or if they are not applicable for this variant."}},this.clinvarIds$=new Ve.X([]),this.values=new Set,this.showClinvarIdEntry$=new Ve.X(!1),this.selectModel=void 0,this.selectOptions=[{value:void 0,label:"Unspecified",tooltip:"Existence of ClinVar IDs for this variant is unspecified."},{value:ar.li.NotApplicable,label:"Not Applicable",tooltip:"ClinVar IDs are not applicable to this variant."},{value:ar.li.NoneFound,label:"Were Not Found",tooltip:"A search was performed, and no ClinVar IDs were found."},{value:ar.li.Found,label:"Were Found",tooltip:"A search was performed, and ClinVar IDs were found (enter IDs below)."}],this.existenceChange$=new x.x,this.existenceModel$=new Ve.X(void 0),this.showTagSelect$=new Ve.X(!1)}ngAfterViewInit(){this.configureBaseField(),this.configureStringTagField(),this.onValueChange$.pipe((0,ln.t)(this)).subscribe(v=>{void 0===v?(this.existenceModel$.next(void 0),this.showTagSelect$.next(!1)):v.includes("NONE FOUND")||v.includes("NA")?(v.includes("NONE FOUND")?this.existenceModel$.next(ar.li.NoneFound):v.includes("NA")&&this.existenceModel$.next(ar.li.NotApplicable),this.showTagSelect$.next(!1)):(this.existenceModel$.next(ar.li.Found),this.showTagSelect$.next(!0))}),this.existenceChange$.pipe((0,j.U)(v=>{const s=this.formControl.value;void 0===v&&void 0!==this.formControl.value?this.formControl.setValue(void 0):v!==ar.li.NoneFound||s.includes("NONE FOUND")?v!==ar.li.NotApplicable||s.includes("NA")?v===ar.li.Found&&(void 0===s||s.includes("NONE FOUND")||s.includes("NA"))&&this.formControl.setValue([]):this.formControl.setValue(["NA"]):this.formControl.setValue(["NONE FOUND"])}),(0,ln.t)(this)).subscribe()}}).\u0275fac=function(v){return new(v||Hi)(e.Y36(e.sBO))},Hi.\u0275cmp=e.Xpm({type:Hi,selectors:[["cvc-clinvar-input"]],features:[e.qOj],decls:4,vars:6,consts:[[3,"nzGutter"],["nzSpan","24",4,"ngIf"],["nzSpan","24"],["nzName","existence",3,"ngModel","ngModelChange"],["nz-radio-button","","nz-tooltip","",3,"nzValue","nzTooltipTitle",4,"ngFor","ngForOf"],["nz-radio-button","","nz-tooltip","",3,"nzValue","nzTooltipTitle"],["nzMode","tags","nzPlaceHolder","Enter ClinVar IDs","nzAllowClear","","nzDropdownClassName","hide-dropdown",3,"formControl","formlyAttributes","ngModelChange"],[3,"nzLabel","nzValue","nzHide",4,"ngFor","ngForOf"],[3,"nzLabel","nzValue","nzHide"]],template:function(v,s){1&v&&(e.TgZ(0,"nz-row",0),e.YNc(1,Vr,4,4,"nz-col",1)(2,Es,3,3,"nz-col",1),e.ALo(3,"ngrxPush"),e.qZA()),2&v&&(e.Q6J("nzGutter",e.DdM(5,Br)),e.xp6(),e.Q6J("ngIf",s.props.showExistenceOptions),e.xp6(),e.Q6J("ngIf",e.lcZ(3,3,s.showTagSelect$)))},dependencies:[u.sg,u.O5,n.JJ,n.On,n.oH,y.JD,H.t3,H.SK,Ie.Of,Ie.Bq,Ie.Dg,Be.Ip,Be.Vq,qn.SY,lo.fM],changeDetection:0}),Hi);Cr=(0,V.gn)([(0,ln.c)()],Cr);const ls={types:[{name:"clinvar-input",wrappers:["form-field"],component:Cr,defaultOptions:{props:{isRepeatItem:!1,showExistenceOptions:!1}}},{name:"clinvar-multi-input",wrappers:["form-field"],component:Cr,defaultOptions:{props:{isRepeatItem:!0,showExistenceOptions:!0}}}]};let ai=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,n.u5,n.UX,y.X0.forChild(ls),N.U5,H.Jb,B.o7,Ie.aF,Be.LV,qn.cg,We.s]}),l})();var zr=c(8180);const $i=Vo(No()),vs={types:[{name:"fda-companion-test-checkbox",wrappers:["form-field"],component:(()=>{class l extends $i{constructor(){super(...arguments),this.defaultDescription='Select Yes if an FDA approved companion test exists for the variant and therapy associated with the Assertion (such as tests listed <a href="https://www.fda.gov/medical-devices/in-vitro-diagnostics/list-cleared-or-approved-companion-diagnostic-devices-in-vitro-and-imaging-tools" target="_blank">here</a>).',this.defaultOptions={props:{hideLabel:!1,label:"FDA Companion Test",description:this.defaultDescription}}}ngAfterViewInit(){this.configureBaseField(),this.state&&(this.state.formReady$?this.state.formReady$.pipe((0,yt.h)(s=>s),(0,zr.q)(1),(0,ln.t)(this)).subscribe(s=>{this.configureField()}):this.configureField())}configureField(){this.state?.fields.fdaRegulatoryApproval$.pipe((0,ln.t)(this)).subscribe(s=>{s?(this.props.disabled=!1,this.props.extraType="description",this.props.description=this.defaultDescription,void 0===this.formControl.value&&this.formControl.setValue(!1)):(this.props.disabled=!0,this.props.description="FDA Companion Test only applies when Regulatory Approval is selected",this.formControl.setValue(void 0))})}}return l.\u0275fac=(()=>{let v;return function(h){return(v||(v=e.n5z(l)))(h||l)}})(),l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-fda-companion-test-checkbox"]],features:[e.qOj],decls:2,vars:4,consts:[["nz-checkbox","",3,"nzIndeterminate","formControl","formlyAttributes","ngModelChange"]],template:function(s,h){1&s&&(e.TgZ(0,"label",0),e.NdJ("ngModelChange",function(ge){return h.props.change&&h.props.change(h.field,ge)}),e._uU(1),e.qZA()),2&s&&(e.Q6J("nzIndeterminate",h.props.indeterminate&&null==h.formControl.value)("formControl",h.formControl)("formlyAttributes",h.field),e.xp6(),e.hij(" ",h.props.label,"\n"))},dependencies:[n.JJ,n.oH,me.Ie,y.JD],changeDetection:0}),l})()}]};let Dr=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,n.UX,me.Wr,y.X0.forChild(vs),Jn]}),l})();const ks=Vo(No()),Hr={types:[{name:"fda-regulatory-approval-checkbox",wrappers:["form-field"],component:(()=>{class l extends ks{constructor(){super(...arguments),this.defaultDescription="Check this if the referenced therapy is approved for use by the FDA in the specific disease associated with the Assertion (as in a listing <a href='https://www.cancer.gov/about-cancer/treatment/drugs/cancer-type' target='_blank'>here</a>.)",this.defaultOptions={props:{hideLabel:!1,label:"FDA Regulatory Approval",description:this.defaultDescription}}}ngAfterViewInit(){this.configureBaseField(),this.state&&(this.state.formReady$?this.state.formReady$.pipe((0,yt.h)(s=>s),(0,zr.q)(1),(0,ln.t)(this)).subscribe(s=>{this.configureField()}):this.configureField())}configureField(){this.state?.requires.allowsFdaApproval$.pipe((0,ln.t)(this)).subscribe(s=>{s?(this.props.disabled=!1,this.props.extraType="description",this.props.description=this.defaultDescription,void 0===this.formControl.value&&this.formControl.setValue(!1)):(this.props.disabled=!0,this.props.description="FDA Regulatory Approval does not apply to this Assertion Type",this.formControl.setValue(void 0))})}}return l.\u0275fac=(()=>{let v;return function(h){return(v||(v=e.n5z(l)))(h||l)}})(),l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-fda-regulatory-approval-checkbox"]],features:[e.qOj],decls:2,vars:4,consts:[["nz-checkbox","",3,"nzIndeterminate","formControl","formlyAttributes","ngModelChange"]],template:function(s,h){1&s&&(e.TgZ(0,"label",0),e.NdJ("ngModelChange",function(ge){return h.props.change&&h.props.change(h.field,ge)}),e._uU(1),e.qZA()),2&s&&(e.Q6J("nzIndeterminate",h.props.indeterminate&&null==h.formControl.value)("formControl",h.formControl)("formlyAttributes",h.field),e.xp6(),e.hij(" ",h.props.label,"\n"))},dependencies:[n.JJ,n.oH,me.Ie,y.JD],changeDetection:0}),l})()}]};let Or=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,n.UX,me.Wr,y.X0.forChild(Hr),Jn]}),l})(),pr=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,to.X,ee.PV,qn.cg,We.s]}),l})();var $r=c(6967),Mr=c(7334);function _a(l,v){}function Rs(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"span",5)(1,"nz-tag",6),e.NdJ("nzOnClose",function(O){e.CHM(s);const ge=e.oxw();return e.KtG(ge.cvcOnClose.next(O))}),e.YNc(2,_a,0,0,"ng-template",7),e.qZA()()}if(2&l){const s=e.oxw(),h=e.MAs(5);e.xp6(),e.Q6J("nzMode",s.cvcMode)("nzTooltipTitle",s.cvcTooltip)("nzChecked",s.cvcChecked),e.xp6(),e.Q6J("ngTemplateOutlet",h)}}function ya(l,v){}function Ca(l,v){if(1&l&&(e.TgZ(0,"span",8)(1,"nz-tag",9),e.YNc(2,ya,0,0,"ng-template",7),e.qZA()()),2&l){const s=e.oxw(),h=e.MAs(5);e.xp6(),e.Q6J("nzMode","checkable")("nzChecked",s.cvcChecked),e.xp6(),e.Q6J("ngTemplateOutlet",h)}}function ll(l,v){}function ja(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"span",10)(1,"nz-tag",11),e.NdJ("nzOnClose",function(O){e.CHM(s);const ge=e.oxw();return e.KtG(ge.cvcOnClose.next(O))}),e.YNc(2,ll,0,0,"ng-template",7),e.qZA()()}if(2&l){e.oxw();const s=e.MAs(5);e.xp6(),e.Q6J("nzMode","closeable"),e.xp6(),e.Q6J("ngTemplateOutlet",s)}}function vu(l,v){}function yc(l,v){if(1&l&&(e.TgZ(0,"span",12)(1,"nz-tag",13),e.YNc(2,vu,0,0,"ng-template",7),e.qZA()()),2&l){const s=e.oxw(),h=e.MAs(5);e.xp6(),e.Q6J("nzMode","default")("nzTooltipTitle",s.cvcTooltip),e.xp6(),e.Q6J("ngTemplateOutlet",h)}}const ul=l=>({"tag-icon-large":l});function br(l,v){if(1&l&&(e._UZ(0,"i",16),e.ALo(1,"evidenceEnumDisplay")),2&l){const s=e.oxw(2);e.Q6J("nzType",!0===s.cvcShowIcon?e.xi3(1,5,s.cvcAttrValue,"icon-name"):s.cvcShowIcon)("nzTwotoneColor",s.cvcIconColor)("nzTheme",s.cvcIconTheme)("ngClass",e.VKq(8,ul,!0===s.cvcZoomIcon)),e.uIk("style","color: "+s.cvcIconColor,e.Ckj)}}function Ss(l,v){if(1&l&&(e._UZ(0,"span",17),e.ALo(1,"highlightTypeahead"),e.ALo(2,"evidenceEnumDisplay")),2&l){const s=e.oxw(2);e.Q6J("innerHtml",e.xi3(1,1,e.xi3(2,4,s.cvcAttrValue,"display-string"===s.cvcShowLabel?s.cvcShowLabel:"short-string"),s.cvcEmphasize),e.oJD)}}function Qa(l,v){if(1&l&&e.YNc(0,br,2,10,"i",14)(1,Ss,3,7,"span",15),2&l){const s=e.oxw();e.Q6J("ngIf",s.cvcAttrValue&&s.cvcShowIcon),e.xp6(),e.Q6J("ngIf",s.cvcShowLabel)}}let R=(()=>{class l{constructor(){this.cvcShowLabel="display-string",this.cvcShowIcon=!0,this.cvcZoomIcon=!1,this.cvcContext="default",this.cvcMode="default",this.cvcChecked=!1,this.cvcIconColor="#797979",this.cvcLabelColor="#434343",this.cvcIconTheme="outline",this.cvcFullWidth=!1,this.cvcOnClose=new e.vpe}ngOnChanges(s){s.cvcContext&&"compact"===s.cvcContext.currentValue&&(this.cvcShowIcon=!0,this.cvcShowLabel=!1,this.cvcZoomIcon=!0)}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-attribute-tag"]],hostVars:2,hostBindings:function(s,h){2&s&&e.ekj("full-width",!0===h.cvcFullWidth)},inputs:{cvcAttrValue:"cvcAttrValue",cvcShowLabel:"cvcShowLabel",cvcShowIcon:"cvcShowIcon",cvcZoomIcon:"cvcZoomIcon",cvcTooltip:"cvcTooltip",cvcContext:"cvcContext",cvcMode:"cvcMode",cvcChecked:"cvcChecked",cvcEmphasize:"cvcEmphasize",cvcIconColor:"cvcIconColor",cvcLabelColor:"cvcLabelColor",cvcIconTheme:"cvcIconTheme",cvcFullWidth:"cvcFullWidth"},outputs:{cvcOnClose:"cvcOnClose"},features:[e.TTD],decls:6,vars:4,consts:[["class","default",4,"ngIf"],["class","menu-item",4,"ngIf"],["class","select-item",4,"ngIf"],["class","compact",4,"ngIf"],["tagContent",""],[1,"default"],["nz-tooltip","",3,"nzMode","nzTooltipTitle","nzChecked","nzOnClose"],[3,"ngTemplateOutlet"],[1,"menu-item"],[3,"nzMode","nzChecked"],[1,"select-item"],[3,"nzMode","nzOnClose"],[1,"compact"],["nz-tooltip","",3,"nzMode","nzTooltipTitle"],["nz-icon","","class","tag-icon",3,"nzType","nzTwotoneColor","nzTheme","ngClass",4,"ngIf"],["class","tag-label",3,"innerHtml",4,"ngIf"],["nz-icon","",1,"tag-icon",3,"nzType","nzTwotoneColor","nzTheme","ngClass"],[1,"tag-label",3,"innerHtml"]],template:function(s,h){1&s&&e.YNc(0,Rs,3,4,"span",0)(1,Ca,3,3,"span",1)(2,ja,3,2,"span",2)(3,yc,3,3,"span",3)(4,Qa,2,2,"ng-template",null,4,e.W1O),2&s&&(e.Q6J("ngIf","default"===h.cvcContext),e.xp6(),e.Q6J("ngIf","menu-item"===h.cvcContext),e.xp6(),e.Q6J("ngIf","select-item"===h.cvcContext),e.xp6(),e.Q6J("ngIf","compact"===h.cvcContext))},dependencies:[u.mk,u.O5,u.tP,to.j,ee.Ls,qn.SY,$r.Do,Mr.A],styles:['.hide-dropdown[_ngcontent-%COMP%]{display:none}.full-width[_nghost-%COMP%]{width:100%}.full-width[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin-right:0;margin-inline-end:4px}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%], .default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{display:inline-block}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]     svg{transform:scale(1.25)}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%], .compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{display:inline-block}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]     svg{transform:scale(1.25)}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.menu-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{background-color:#fff}.menu-item[_ngcontent-%COMP%]   nz-tag.ant-tag-checkable[_ngcontent-%COMP%]{border:1px solid #d9d9d9}.menu-item[_ngcontent-%COMP%]   nz-tag.ant-tag-checkable[_ngcontent-%COMP%]:active{background-color:#e6f7ff}.menu-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]:not(.menu-item   nz-tag.ant-tag-checkable-checked)[_ngcontent-%COMP%]:hover{color:#000000d9;border-color:#1890ff}.menu-item[_ngcontent-%COMP%]   nz-tag.ant-tag-checkable-checked[_ngcontent-%COMP%]{border:transparent;background-color:#fff;color:#000000d9}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%], .select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{display:inline-block}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]     svg{transform:scale(1.25)}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{background:#f5f5f5;border:1px solid #f0f0f0}.multi-select-item[_ngcontent-%COMP%]{display:inline-block;margin-top:-3px;margin-bottom:-3px;margin-left:-4px;padding-left:4px}.multi-select-item[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]:after{content:" "}.typeahead-match[_ngcontent-%COMP%]{font-weight:700}'],changeDetection:0}),l})();const Ae=["optionTemplates"];function ue(l,v){if(1&l&&e._UZ(0,"cvc-attribute-tag",4),2&l){const s=e.oxw().$implicit;e.Q6J("cvcAttrValue",s)}}function Ze(l,v){1&l&&(e.ynx(0),e.YNc(1,ue,1,1,"ng-template",null,3,e.W1O),e.BQk())}function Dt(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"div",5)(1,"cvc-attribute-tag",6),e.NdJ("cvcOnClose",function(O){e.CHM(s);const ge=e.oxw();return e.KtG(ge.onTagClose$.next(O))}),e.qZA()()}if(2&l){const s=v.$implicit,h=e.oxw();e.xp6(),e.Q6J("cvcAttrValue",s.nzValue)("cvcContext",h.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",h.props.isMultiSelect?"default":"closeable")}}const zn={Evidence:{PREDICTIVE:{SUPPORTS:"Experiment or study supports the variant's response to a drug",DOES_NOT_SUPPORT:"Experiment or study does not support, or was inconclusive of an interaction between the variant and a drug"},DIAGNOSTIC:{SUPPORTS:"Experiment or study supports the variant's impact on the diagnosis of disease or subtype",DOES_NOT_SUPPORT:"Experiment or study does not support the variant's impact on diagnosis of disease or subtype"},PROGNOSTIC:{SUPPORTS:"Experiment or study supports the variant's impact on prognostic outcome",DOES_NOT_SUPPORT:"Experiment or study does not support a prognostic association between variant and outcome"},PREDISPOSING:{SUPPORTS:"Suggests a pathogenic or a protective role for a germline variant in cancer",DOES_NOT_SUPPORT:"Supports a benign (for Predisposition) or lack of protective (for Protectiveness) role for a germline variant in cancer."},FUNCTIONAL:{SUPPORTS:"Experiment or study supports the variant causing alteration or non-alteration of the gene product function",DOES_NOT_SUPPORT:"Experiment or study does not support the variant causing alteration or non-alteration of the gene product function"},ONCOGENIC:{NA:"Not Applicable for Oncogenic Evidence Type.",SUPPORTS:"Supports an oncogenic or protective role for a somatic variant.",DOES_NOT_SUPPORT:"Supports a benign (for Oncogenicity) or lack of protective (for Protectiveness) role for a somatic variant in cancer."}},Assertion:{PREDICTIVE:{SUPPORTS:"Supports the variant's response to a drug",DOES_NOT_SUPPORT:"Does not support, or was inconclusive of an interaction between the variant and a drug"},DIAGNOSTIC:{SUPPORTS:"Supports the variant's impact on the diagnosis of disease or subtype",DOES_NOT_SUPPORT:"Does not support the variant's impact on diagnosis of disease or subtype"},PROGNOSTIC:{SUPPORTS:"Supports the variant's impact on prognostic outcome",DOES_NOT_SUPPORT:"Does not support a prognostic association between variant and outcome"},PREDISPOSING:{SUPPORTS:"Suggests a pathogenic or a protective role for a germline variant in cancer",DOES_NOT_SUPPORT:"Does not support an association between the variant and disease causation"},FUNCTIONAL:{SUPPORTS:"Supports the variant causing alteration or non-alteration of the gene product function",DOES_NOT_SUPPORT:"Does not support the variant causing alteration or non-alteration of the gene product function"},ONCOGENIC:{SUPPORTS:"Supports an oncogenic or protective role for a somatic variant",DOES_NOT_SUPPORT:"Does not support an association between the variant and disease causation"}}},Ln=Vo(No(),So()),ei={types:[{name:"direction-select",wrappers:["form-field"],component:(()=>{class l extends Ln{constructor(s){super(),this.cdr=s,this.defaultOptions={props:{label:"Direction",labelFn:h=>`${h} Direction`,required:!0,isMultiSelect:!1,placeholder:"Select Entity Direction",placeholderFn:(h,O)=>`Select ${O?O+" ":""}${h} Direction`,requireTypePromptFn:h=>`Select ${h} Type to select its Direction`}},this.directionEnum$=new Ve.X([])}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.directionEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}configureStateConnections(){if(!this.state)return console.error(`${this.field.id} requires a form state to populate its options, none was found.`),void(this.placeholder$=new Ve.X("ERROR: Form state not found"));if(this.props.label=this.props.labelFn(this.state.entityName),this.props.tooltip=`An indicator of whether the ${this.state.entityName} statement supports or refutes the clinical significance of an event.`,this.placeholder$=new Ve.X(this.props.placeholderFn(this.state.entityName)),!this.state.enums.direction$)return void console.error(`${this.field.id} could not find form state's direction$ to populate select.`);this.state.enums.direction$.pipe((0,ln.t)(this)).subscribe(h=>{this.directionEnum$.next(h)}),this.optionTemplates||console.info(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,j.U)(h=>h.map(O=>O)));const s=`${this.state.entityName.toLowerCase()}Type$`;this.state.fields[s]?(this.onEntityType$=this.state.fields[s],this.onEntityType$.pipe((0,Ci.T)("add"===this.options.formState.formMode?0:1),(0,ln.t)(this)).subscribe(h=>{h?(this.props.disabled=!1,this.props.description=void 0,this.props.extraType=void 0,this.placeholder$.next(this.props.placeholderFn(this.state.entityName,(0,Io.E)(h)))):(this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName),this.props.extraType="prompt"),this.formControl.value&&this.formControl.setValue(void 0)}),this.onValueChange$.pipe((0,ci.M)(this.onEntityType$),(0,ln.t)(this)).subscribe(([h,O])=>{!O||!h||!this.state||(this.props.extraType="description",this.props.description=zn[this.state.entityName][O][h],this.field.formControl.markAsTouched())})):console.error(`${this.field.id} could not find form state's ${s} to populate Direction options.`)}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-direction-select"]],viewQuery:function(s,h){if(1&s&&e.Gf(Ae,5,e.Rgc),2&s){let O;e.iGM(O=e.CRH())&&(h.optionTemplates=O)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcAttrValue","cvcContext","cvcMode","cvcOnClose"]],template:function(s,h){if(1&s&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,Ze,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,Dt,2,3,"ng-template",null,2,e.W1O)),2&s){const O=e.MAs(6);e.Q6J("cvcFormControl",h.formControl)("cvcFormlyAttributes",h.field)("cvcSelectMode",h.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,h.placeholder$))("cvcCustomTemplate",O)("cvcOptions",e.lcZ(2,11,h.selectOption$))("cvcShowError",h.showError)("cvcDisabled",h.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,h.directionEnum$))}},dependencies:[u.sg,Bo,R,lo.fM],changeDetection:0}),l})()}]};let mi=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,n.UX,y.X0.forChild(ei),Jn,vo,pr]}),l})();var di,ti=c(1227),xo=c(2024),si=c(7473),ni=c(9928);function Ur(l,v){if(1&l&&e._uU(0),2&l){const s=e.oxw();e.Oqu(s.successMessage)}}function hr(l,v){if(1&l&&(e.ynx(0),e._uU(1),e.BQk()),2&l){const s=e.oxw();e.xp6(),e.hij(' "',s.model.name,'" ')}}const Yr=()=>[0,0];let wr=((di=class{set cvcSearchString(v){v&&this.searchString$.next(v)}constructor(v,s){this.query=v,this.errors=s,this.cvcOnCreate=new e.vpe,this.form=new n.nJ({}),this.model={name:""},this.formLayout="horizontal",this.options={formState:{formLayout:this.formLayout}},this.onSubmit$=new x.x,this.searchString$=new Ve.X(void 0),this.addDiseaseMutator=new xo.U(this.errors),this.fields=[{key:"doid",type:"base-input",props:{label:"DOID",keydown:(h,O)=>{"Tab"===O.code&&O.stopPropagation()}}},{key:"name",props:{hidden:!0,required:!0}}],this.searchString$.pipe((0,ln.t)(this)).subscribe(h=>{h&&(this.model.name=h)}),this.onSubmit$.pipe((0,ln.t)(this)).subscribe(h=>{console.log("disease-quick-add form model submitted.",h),this.submitDisease(h)})}submitDisease(v){v.name?this.mutationState=this.addDiseaseMutator.mutate(this.query,this.model,{},s=>{console.log("disease-quick-add submit data callback",s),s.addDisease&&(this.successMessage=s.addDisease.new?`New Disease ${s.addDisease.disease.name} added.`:`Existing Disease ${s.addDisease.disease.name} with DOID ${s.addDisease.disease.doid} found. `,setTimeout(()=>{s&&s.addDisease&&this.cvcOnCreate.next(s.addDisease.disease.id)},1e3))}):console.error("disease-quick-add form submitDisease requires model with valid name.")}}).\u0275fac=function(v){return new(v||di)(e.Y36(Hn.MPi),e.Y36(si.Y))},di.\u0275cmp=e.Xpm({type:di,selectors:[["cvc-disease-quick-add-form"]],inputs:{cvcSearchString:"cvcSearchString"},outputs:{cvcOnCreate:"cvcOnCreate"},decls:11,vars:11,consts:[["entityType","Disease",3,"mutationState","successMessage"],["success",""],["nz-form","","nzLayout","horizontal",3,"formGroup","ngSubmit"],[3,"nzGutter"],["nzSpan","24"],[3,"form","fields","model","options","modelChange"],["nz-button","","nzType","primary","nzBlock","",3,"disabled"],[4,"ngIf"]],template:function(v,s){if(1&v&&(e.TgZ(0,"cvc-form-submission-status-display",0),e.YNc(1,Ur,1,1,"ng-template",null,1,e.W1O),e.TgZ(3,"form",2),e.NdJ("ngSubmit",function(){return s.onSubmit$.next(s.model)}),e.TgZ(4,"nz-row",3)(5,"nz-col",4)(6,"formly-form",5),e.NdJ("modelChange",function(O){return s.model=O}),e.qZA()(),e.TgZ(7,"nz-col",4)(8,"button",6),e._uU(9," Add Disease\xa0 "),e.YNc(10,hr,2,1,"ng-container",7),e.qZA()()()()()),2&v){const h=e.MAs(2);e.Q6J("mutationState",s.mutationState)("successMessage",h),e.xp6(3),e.Q6J("formGroup",s.form),e.xp6(),e.Q6J("nzGutter",e.DdM(10,Yr)),e.xp6(2),e.Q6J("form",s.form)("fields",s.fields)("model",s.model)("options",s.options),e.xp6(2),e.Q6J("disabled",!s.form.valid),e.xp6(2),e.Q6J("ngIf",s.model.name)}},dependencies:[u.O5,n._Y,n.JL,n.sg,y.T7,uo.ix,de.w,ce.dQ,H.t3,H.SK,N.Lr,ni.F],encapsulation:2,changeDetection:0}),di);wr=(0,V.gn)([(0,ln.c)()],wr);const Yi=["optionTemplates"];function jr(l,v){if(1&l&&(e.ynx(0),e.TgZ(1,"strong"),e._uU(2,"DOID:"),e.qZA(),e._UZ(3,"span",9),e.ALo(4,"highlightTypeahead"),e.BQk()),2&l){const s=e.oxw(2).$implicit,h=e.oxw().ngrxLet;e.xp6(3),e.Q6J("innerHtml",e.xi3(4,1,s.doid,h),e.oJD)}}function Er(l,v){if(1&l&&(e.ynx(0),e._uU(1," \xa0 "),e.TgZ(2,"strong"),e._uU(3,"Aliases: "),e.qZA(),e.TgZ(4,"em"),e._UZ(5,"span",10),e.ALo(6,"highlightTypeahead"),e.qZA(),e.BQk()),2&l){const s=e.oxw(2).$implicit,h=e.oxw().ngrxLet;e.xp6(5),e.Q6J("nzTooltipTitle",s.diseaseAliases.join(", "))("innerHtml",e.xi3(6,2,s.diseaseAliases.join(", "),h),e.oJD)}}function xs(l,v){if(1&l&&(e._UZ(0,"cvc-entity-tag",6),e.TgZ(1,"span",7),e.YNc(2,jr,5,4,"ng-container",8)(3,Er,7,5,"ng-container",8),e._uU(4),e.qZA()),2&l){const s=e.oxw().$implicit,h=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",s.__typename+":"+s.id)("cvcEmphasize",h),e.xp6(2),e.Q6J("ngIf",s.doid),e.xp6(),e.Q6J("ngIf",s.diseaseAliases.length>0),e.xp6(),e.hij(" ",h," ")}}function dl(l,v){1&l&&(e.ynx(0),e.YNc(1,xs,5,6,"ng-template",null,5,e.W1O),e.BQk())}function Vs(l,v){if(1&l&&(e.ynx(0),e.YNc(1,dl,3,0,"ng-container",4),e.ALo(2,"ngrxPush"),e.BQk()),2&l){const s=e.oxw();e.xp6(),e.Q6J("ngForOf",e.lcZ(2,1,s.result$))}}function _i(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"div",11)(1,"cvc-entity-tag",12),e.NdJ("cvcOnClose",function(){const ge=e.CHM(s).$implicit,mt=e.oxw();return e.KtG(mt.onTagClose$.next(ge.nzValue))}),e.qZA()()}if(2&l){const s=v.$implicit,h=e.oxw();e.xp6(),e.Q6J("cvcCacheId","Disease:"+s.nzValue)("cvcContext",h.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",h.props.isMultiSelect?"default":"closeable")}}function ir(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"cvc-disease-quick-add-form",13),e.NdJ("cvcOnCreate",function(O){e.CHM(s);const ge=e.oxw();return e.KtG(ge.onPopulate$.next(O))}),e.qZA()}2&l&&e.Q6J("cvcSearchString",v.$implicit)}const _s=Vo(No(),zi());let qi=(()=>{class l extends _s{constructor(s,h,O){super(),this.taq=s,this.tq=h,this.changeDetectorRef=O,this.defaultOptions={props:{entityName:{singular:"Disease",plural:"Diseases"},tooltip:"Cancer or cancer subtype that is a result of the described variant",isMultiSelect:!1,requireType:!0,placeholder:"Search Diseases",requireTypePromptFn:(ge,mt)=>`Select an ${ge} Type to select an associated Disease${mt?"(s)":""}`,addFormTitle:"Add a New Disease"}},this.placeholder$=new Ve.X(void 0),this.selectOpen$=new Go.t}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.state&&this.state.formReady$?this.state.formReady$.pipe((0,yt.h)(s=>s),(0,zr.q)(1),(0,ln.t)(this)).subscribe(s=>{this.configureField()}):this.configureField()}configureField(){this.placeholder$.next(this.props.placeholder),this.configureStateConnections()}configureStateConnections(){if(this.state){if(this.state.requires.requiresDisease$?this.onRequiresDisease$=this.state.requires.requiresDisease$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresDisease$ subject to attach.`),this.props.requireType){const s=`${this.state.entityName.toLowerCase()}Type$`;this.state.fields[s]?this.onEntityType$=this.state.fields[s]:console.error(`${this.field.id} requireType is true, however form state does not provide Subject ${s}.`)}!this.onRequiresDisease$||!this.onEntityType$||(0,Ho.a)([this.onRequiresDisease$,this.onEntityType$,this.onValueChange$]).pipe((0,ln.t)(this)).subscribe(([s,h,O])=>{this.onStateUpdates(s,h,O)})}}onStateUpdates(s,h,O){!s&&h&&(this.props.required=!1,this.props.disabled=!0,this.props.description=`${(0,Io.E)(h)} ${this.state.entityName} does not include associated diseases`,this.props.extraType="prompt",this.cdr.markForCheck()),this.props.requireType&&!h&&(this.props.required=!1,this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName,this.props.isMultiSelect),this.props.extraType="prompt"),s&&(this.props.required=!0,this.props.disabled=!1,this.props.description=void 0,this.props.extraType=void 0),(!s&&void 0!==O||this.props.requireType&&!h&&this.formControl.value)&&this.resetField()}getTypeaheadVarsFn(s){return{name:s}}getTypeaheadResultsFn(s){return s.data.diseaseTypeahead}getTagQueryVarsFn(s){return{id:s}}getTagQueryResultsFn(s){return s.data.disease}getSelectedItemOptionFn(s){return{value:s.id,label:s.name}}getSelectOptionsFn(s,h){return s.map((O,ge)=>({label:h.get(ge)||O.name,value:O.id}))}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(Hn.RYL),e.Y36(Hn.QVn),e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-disease-select"]],viewQuery:function(s,h){if(1&s&&e.Gf(Yi,5,e.Rgc),2&s){let O;e.iGM(O=e.CRH())&&(h.optionTemplates=O)}},features:[e.qOj],decls:12,vars:26,consts:[[3,"cvcAddEntity","cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcSelectOpen","cvcOnSearch","cvcOnOpenChange","cvcSelectComponent","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],["addDisease",""],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf"],[3,"innerHtml"],["nz-typography","","nzType","secondary","nz-tooltip","",3,"nzTooltipTitle","innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"],[3,"cvcSearchString","cvcOnCreate"]],template:function(s,h){if(1&s&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(ge){return h.onSearch$.next(ge)})("cvcOnOpenChange",function(ge){return h.onOpenChange$.next(ge)})("cvcSelectComponent",function(ge){return h.selectComponent=ge})("cvcOnModelChange",function(ge){return h.props.change&&h.props.change(h.field,ge)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.qZA(),e.YNc(7,Vs,3,3,"ng-container",1)(8,_i,2,3,"ng-template",null,2,e.W1O)(10,ir,1,1,"ng-template",null,3,e.W1O)),2&s){const O=e.MAs(9),ge=e.MAs(11);e.Q6J("cvcAddEntity",ge)("cvcSelectMode",h.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",O)("cvcFormControl",h.formControl)("cvcFormlyAttributes",h.field)("cvcEntityName",h.props.entityName)("cvcPlaceholder",e.lcZ(1,14,h.placeholder$))("cvcResults",e.lcZ(2,16,h.result$))("cvcOptions",e.lcZ(3,18,h.selectOption$))("cvcShowError",h.showError)("cvcDisabled",h.onRequiresDisease$&&!e.lcZ(4,20,h.onRequiresDisease$))("cvcLoading",e.lcZ(5,22,h.isLoading$))("cvcSelectOpen",e.lcZ(6,24,h.selectOpen$)),e.xp6(7),e.Q6J("ngrxLet",h.onSearch$)}},dependencies:[u.sg,u.O5,lo.eJ,qn.SY,Ce.ZU,dn,nn.J,wr,lo.fM,Mr.A],changeDetection:0}),l})();const za={types:[{name:"disease-select",wrappers:["form-field"],component:qi,defaultOptions:{props:{label:"Disease"}}},{name:"disease-multi-select",wrappers:["form-field"],component:qi,defaultOptions:{props:{isMultiSelect:!0,label:"Diseases"}}}]};let Bs=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,n.UX,y.X0.forChild(za),Nt.L,uo.sL,Be.LV,Xn.$6,fi.Qp,ee.PV,B.o7,H.Jb,qn.cg,st.zf,N.U5,he.ic,Ce.ZJ,to.X,ti.g,Jn,xn,We.s,ut.x]}),l})();const Hs=["optionTemplates"];function fr(l,v){if(1&l&&e._UZ(0,"cvc-attribute-tag",4),2&l){const s=e.oxw().$implicit;e.Q6J("cvcAttrValue",s)}}function Cc(l,v){1&l&&(e.ynx(0),e.YNc(1,fr,1,1,"ng-template",null,3,e.W1O),e.BQk())}function zc(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"div",5)(1,"cvc-attribute-tag",6),e.NdJ("cvcOnClose",function(O){e.CHM(s);const ge=e.oxw();return e.KtG(ge.onTagClose$.next(O))}),e.qZA()()}if(2&l){const s=v.$implicit,h=e.oxw();e.xp6(),e.Q6J("cvcAttrValue",s.nzValue)("cvcContext",h.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",h.props.isMultiSelect?"default":"closeable")}}const Ta={DIAGNOSTIC:"Evidence pertains to a variant's impact on patient diagnosis (cancer subtype).",PREDICTIVE:"Evidence pertains to a variant's effect on therapeutic response.",PROGNOSTIC:"Evidence pertains to a variant's impact on disease progression, severity, or patient survival.",PREDISPOSING:"Evidence pertains to a germline variant's role in conferring susceptibility to disease (including pathogenicity evaluations).",ONCOGENIC:"Evidence pertains to a somatic variant's involvement in tumor pathogenesis as described by the Hallmarks of Cancer.",FUNCTIONAL:"Evidence pertains to a variant that alters biological function from the reference state."},mr=Vo(No(),So()),_u={types:[{name:"type-select",wrappers:["form-field"],component:(()=>{class l extends mr{constructor(s){super(),this.cdr=s,this.defaultOptions={props:{label:"ENTITY_NAME Type",entityName:{singular:"Entity",plural:"Entities"},placeholder:"Select an ENTITY_NAME Type",isMultiSelect:!1}},this.typeEnums$=new Ve.X([])}ngAfterViewInit(){this.configureBaseField(),this.state&&this.state.formReady$?this.state.formReady$.pipe((0,yt.h)(s=>s),(0,zr.q)(1),(0,ln.t)(this)).subscribe(s=>{this.configureField()}):this.configureField()}configureField(){this.onValueChange$.pipe((0,ln.t)(this)).subscribe(s=>{s?(this.props.description=Ta[s],this.props.extraType="description",this.field.formControl.markAsTouched()):(this.props.description=void 0,this.props.extraType=void 0)}),this.state?(this.props.placeholder=this.props.placeholder.replace("ENTITY_NAME",this.state.entityName),this.props.label=this.props.label.replace("ENTITY_NAME",this.state.entityName),this.props.tooltip=`Type of clinical outcome associated with the ${this.state.entityName} statement.`,this.state.enums.entityType$?(this.state.enums.entityType$.pipe((0,ln.t)(this)).subscribe(s=>{this.typeEnums$.next(s)}),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,j.U)(s=>s.map(h=>h))),this.configureEnumSelect()):console.error(`${this.field.id} could not find state's enums.inputEnum$ to populate its select options.`)):console.error(`${this.field.id} requires a form state to configure itself, none was found.`)}configureEnumSelect(){this.configureEnumSelectField({optionEnum$:this.typeEnums$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-type-select"]],viewQuery:function(s,h){if(1&s&&e.Gf(Hs,5,e.Rgc),2&s){let O;e.iGM(O=e.CRH())&&(h.optionTemplates=O)}},features:[e.qOj],decls:6,vars:13,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcAttrValue","cvcContext","cvcMode","cvcOnClose"]],template:function(s,h){if(1&s&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.YNc(2,Cc,3,0,"ng-container",1),e.ALo(3,"ngrxPush"),e.YNc(4,zc,2,3,"ng-template",null,2,e.W1O)),2&s){const O=e.MAs(5);e.Q6J("cvcFormControl",h.formControl)("cvcFormlyAttributes",h.field)("cvcSelectMode",h.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",h.props.placeholder)("cvcCustomTemplate",O)("cvcOptions",e.lcZ(1,9,h.selectOption$))("cvcShowError",h.showError)("cvcDisabled",h.props.disabled),e.xp6(2),e.Q6J("ngForOf",e.lcZ(3,11,h.typeEnums$))}},dependencies:[u.sg,R,Bo,lo.fM],changeDetection:0}),l})()}]};let Ma=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,n.UX,y.X0.forChild(_u),Jn,pr,vo]}),l})();var Pr=c(9154);let na=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,Ce.ZJ]}),l})();var rr=c(2962),us=c(2787),pi=c(3740),qr=c(6699),Mo=c(3620),ba=c(1757),Xr=c(9111),Tc=c(9377);const Cu={isSelectCol:l=>"select"===l.type,isEntityTagCol:l=>"entity-tag"===l.type,isEnumTagCol:l=>"enum-tag"===l.type,isTextTagCol:l=>"text-tag"===l.type},Sa=l=>void 0!==l.sort,Ga=l=>void 0!==l.filter,oi={description:Hn.Cp0.Description,disease:Hn.Cp0.DiseaseName,evidenceDirection:Hn.Cp0.EvidenceDirection,evidenceLevel:Hn.Cp0.EvidenceLevel,evidenceRating:Hn.Cp0.EvidenceRating,evidenceType:Hn.Cp0.EvidenceType,id:Hn.Cp0.Id,significance:Hn.Cp0.Significance,status:Hn.Cp0.Status,therapies:Hn.Cp0.TherapyName,variantOrigin:Hn.Cp0.VariantOrigin},xa={molecularProfile:"molecularProfileName",disease:"diseaseName",therapies:"therapyName",evidenceItem:"id"},Wa=["selected","id"];class Qo{constructor(){this.sortStreams=[],this.filterStreams=[],this.config=this.configureColumnStreams([{key:"selected",label:"Select",type:"select",width:"25px",align:"center",fixedLeft:!0,checkbox:{th:{showCheckbox:!1},td:{showCheckbox:!0}}},{hidden:!0,key:"id",label:"ID",type:"default",width:"30px"},{hidden:!0,key:"status",label:"Status",type:"default",width:"50px"},{key:"id",label:"Evidence",type:"entity-tag",width:"95px",context:"evidenceItem",fixedLeft:!0,showStatus:!0,tag:{fullWidth:!0},sort:{default:"ascend"},filter:{inputType:"default",options:[{key:"EID",value:null}],transform:v=>v?+v.toString().replace(/EID/i,""):null}},{key:"molecularProfile",label:"Molecular Profile",type:"entity-tag",width:"240px",sort:{},tag:{truncateLabel:"200px"},filter:{inputType:"default",typename:"MolecularProfile",options:[{key:"Filter Therapy Names",value:null}]}},{key:"disease",type:"entity-tag",label:"Disease",width:"240px",sort:{},tag:{truncateLabel:"200px"},filter:{inputType:"default",typename:"Disease",options:[{key:"Filter Disease Names",value:null}]}},{key:"therapies",label:"Therapies",type:"entity-tag",width:"275px",sort:{},tag:{maxTags:2,truncateLabel:"150px"},filter:{inputType:"default",typename:"Therapy",options:[{key:"Filter Therapy Names",value:null}]}},{key:"therapyInteractionType",label:"INT",tooltip:"Therapy Interaction Type",type:"enum-tag",width:"40px",align:"center",emptyValueCategory:"not-applicable",sort:{},filter:{options:this.getAttributeFilters((0,Fo.o6)(Hn.wkr))}},{key:"description",label:"DSC",tooltip:"Evidence Description",type:"text-tag",width:"40px",align:"center",fixedRight:!0,emptyValueCategory:"unspecified",sort:{},filter:{inputType:"default",options:[{key:"Search Descriptions",value:null}]}},{key:"evidenceType",label:"ET",tooltip:"Evidence Type",type:"enum-tag",width:"40px",align:"center",fixedRight:!0,sort:{},filter:{options:this.getAttributeFilters((0,Fo.o6)(Hn.kqt))}},{key:"evidenceLevel",label:"EL",tooltip:"Evidence Level",type:"enum-tag",width:"40px",align:"center",fixedRight:!0,sort:{},filter:{options:this.getAttributeFilters((0,Fo.o6)(Hn.Sx0))}},{key:"evidenceDirection",label:"ED",tooltip:"Evidence Direction",type:"enum-tag",width:"40px",align:"center",fixedRight:!0,sort:{},filter:{options:this.getAttributeFilters((0,Fo.o6)(Hn.tI1))}},{key:"significance",label:"SI",tooltip:"Significance",type:"enum-tag",align:"center",width:"40px",fixedRight:!0,sort:{},filter:{options:this.getAttributeFilters((0,Fo.o6)(Hn.y1h))}},{key:"evidenceRating",label:"ER",tooltip:"Evidence Rating",type:"enum-tag",width:"45px",align:"center",fixedRight:!0,tag:{showLabel:"short-string"},sort:{},filter:{options:[1,2,3,4,5].map(v=>({value:v,text:`${v} stars`}))}}])}get(){return this.config}getSortStreams(){return this.sortStreams}getFilterStreams(){return this.filterStreams}getAttributeFilters(v,s){return v.getValues().map(O=>({text:(0,Io.E)(O),value:O,byDefault:s===O}))}configureColumnStreams(v){return v.forEach(s=>{const h=s;if(Sa(h)&&(h.sort.changes=new Ve.X({key:h.key,value:h.sort.default??null}),this.sortStreams.push(h.sort.changes)),Ga(h)){const O=h.filter.options.find(ge=>ge.byDefault)?.value;h.filter.changes=new Ve.X({key:h.key,value:O??null}),this.filterStreams.push(h.filter.changes)}}),v}}var Sr,oa=c(8656);function Qr(l,v){1&l&&e.GkF(0)}const Za=(l,v,s)=>({$implicit:l,config:v,emphasize:s});function bc(l,v){if(1&l&&(e.ynx(0),e.TgZ(1,"span",1),e.YNc(2,Qr,1,0,"ng-container",2),e.qZA(),e.BQk()),2&l){const s=v.$implicit,h=e.oxw();e.xp6(2),e.Q6J("ngTemplateOutlet",h.cvcTagTemplate)("ngTemplateOutletContext",e.kEZ(2,Za,s,h.config,null==h.config?null:h.config.emphasize))}}let ia=((Sr=class{set cvcTagListConfig(v){!v||!v.tagList||!v.tag||(this.config=v,this.setEntities(v.tagList,v.tag))}constructor(){this.entities=[]}setEntities(v,s){this.entities=v&&0!==v.length&&0!==s.maxTags?v:[]}}).\u0275fac=function(v){return new(v||Sr)},Sr.\u0275cmp=e.Xpm({type:Sr,selectors:[["cvc-entity-tag-list"]],inputs:{cvcTagListConfig:"cvcTagListConfig",cvcTagTemplate:"cvcTagTemplate"},decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[1,"tag-container"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(v,s){1&v&&e.YNc(0,bc,3,6,"ng-container",0),2&v&&e.Q6J("ngForOf",s.entities)},dependencies:[u.sg,u.tP],styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}.hide-dropdown[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]{display:inline-block;margin-bottom:-4px}.tag-container[_ngcontent-%COMP%]{display:inline-block;margin-bottom:4px}"],changeDetection:0}),Sr);ia=(0,V.gn)([(0,ln.c)()],ia);var x1=c(2616),hl=c(1201);function Xi(l,v){if(1&l&&(e._UZ(0,"span",6),e.ALo(1,"typenameToIcon"),e.ALo(2,"entityColor")),2&l){const s=v.$implicit;e.Q6J("nzType",e.lcZ(1,2,s.__typename))("nzTwotoneColor",e.lcZ(2,4,s.__typename))}}function ys(l,v){if(1&l&&(e.ynx(0),e.YNc(1,Xi,3,6,"span",5),e.BQk()),2&l){const s=e.oxw();e.xp6(),e.Q6J("ngForOf",s.entities)}}function Ec(l,v){if(1&l&&(e.TgZ(0,"span",7)(1,"strong"),e._uU(2),e.qZA()(),e._UZ(3,"span",6),e.ALo(4,"typenameToIcon"),e.ALo(5,"entityColor")),2&l){const s=e.oxw();e.xp6(2),e.Oqu(s.entities.length),e.xp6(),e.Q6J("nzType",e.lcZ(4,3,s.entities[0].__typename))("nzTwotoneColor",e.lcZ(5,5,s.entities[0].__typename))}}const A=(l,v,s,h,O)=>({tagList:l,tag:v,showPopover:s,status:h,emphasize:O});function Z(l,v){if(1&l&&e._UZ(0,"cvc-entity-tag-list",11),2&l){const s=e.oxw(2);e.Q6J("cvcTagTemplate",s.cvcTagTemplate)("cvcTagListConfig",e.qbA(2,A,s.entities,s.config.tag,s.config.showPopover,s.config.status,s.config.emphasize))}}function F(l,v){1&l&&e._uU(0," Invalid config specified for entity-tag-list. ")}function le(l,v){if(1&l&&(e.TgZ(0,"div",8),e.YNc(1,Z,1,8,"cvc-entity-tag-list",9),e.qZA(),e.YNc(2,F,1,0,"ng-template",null,10,e.W1O)),2&l){const s=e.MAs(3),h=e.oxw();e.xp6(),e.Q6J("ngIf",h.config)("ngIfElse",s)}}let we=(()=>{class l{set cvcCollectionTagConfig(s){!s||!s.tagList||!s.tag||(this.setConfig(s),this.setEntities(s.tagList))}constructor(){this.cvcShowMaxIcons=5,this.cvcShowFullLabels=!0,this.entities=[]}setConfig(s){this.config=this.cvcShowFullLabels?{...s,tag:{...s.tag,truncateLabel:void 0}}:s}setEntities(s){this.entities=s&&0!==s.length?s:[]}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-entity-collection-tag"]],inputs:{cvcCollectionTagConfig:"cvcCollectionTagConfig",cvcTagTemplate:"cvcTagTemplate",cvcShowMaxIcons:"cvcShowMaxIcons",cvcShowFullLabels:"cvcShowFullLabels"},decls:9,vars:3,consts:[["nz-popover","","nzPopoverPlacement","top","nzPopoverTrigger","hover",3,"nzPopoverContent"],["nz-typography","","nzType","secondary",1,"plus-sign"],[4,"ngIf","ngIfElse"],["showCount",""],["tagListPopover",""],["class","entity-icon","nz-icon","","nzTheme","twotone",3,"nzType","nzTwotoneColor",4,"ngFor","ngForOf"],["nz-icon","","nzTheme","twotone",1,"entity-icon",3,"nzType","nzTwotoneColor"],["nz-typography","","nzType","secondary",1,"entity-count"],[1,"popover-container"],[3,"cvcTagTemplate","cvcTagListConfig",4,"ngIf","ngIfElse"],["noConfig",""],[3,"cvcTagTemplate","cvcTagListConfig"]],template:function(s,h){if(1&s&&(e.TgZ(0,"nz-tag",0)(1,"span",1)(2,"strong"),e._uU(3,"+"),e.qZA()(),e.YNc(4,ys,2,1,"ng-container",2)(5,Ec,6,7,"ng-template",null,3,e.W1O),e.qZA(),e.YNc(7,le,4,2,"ng-template",null,4,e.W1O)),2&s){const O=e.MAs(6),ge=e.MAs(8);e.Q6J("nzPopoverContent",ge),e.xp6(4),e.Q6J("ngIf",h.entities.length<=h.cvcShowMaxIcons)("ngIfElse",O)}},dependencies:[u.sg,u.O5,to.j,Ce.ZU,Xn.lU,ee.Ls,ia,x1.a,hl.Z],styles:["[_nghost-%COMP%]{display:inline-block}.popover-container[_ngcontent-%COMP%]{max-width:300px}nz-tag[_ngcontent-%COMP%]{margin:0;padding:0;margin-inline-end:4px}nz-tag[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block}nz-tag[_ngcontent-%COMP%]   .plus-sign[_ngcontent-%COMP%]{padding:3px 3px 3px 4px;margin:-3px 0;line-height:1}nz-tag[_ngcontent-%COMP%]   .entity-icon[_ngcontent-%COMP%]:first-child{padding-left:2px}nz-tag[_ngcontent-%COMP%]   .entity-icon[_ngcontent-%COMP%]{margin:-3px 1px -4px -1px;padding:3px 0;line-height:1}nz-tag[_ngcontent-%COMP%]   .entity-icon[_ngcontent-%COMP%]:last-child{padding-right:3px}nz-tag[_ngcontent-%COMP%]   .entity-count[_ngcontent-%COMP%]{margin-left:-2px;padding-right:4px}"],changeDetection:0}),l})();var tt=c(3489);function Pt(l,v){if(1&l&&(e.TgZ(0,"span",1),e._uU(1),e.ALo(2,"number"),e.ALo(3,"number"),e.qZA()),2&l){const s=v.ngIf;e.xp6(),e.AsE(" ",e.lcZ(2,2,s.edgeCount)," of ",e.lcZ(3,4,s.filteredCount)," displayed\n")}}let fn=(()=>{class l{ngOnInit(){this.tableCountsInfo$=this.cvcTableCountsConnection.pipe((0,yt.h)(s=>null!=s.totalCount||null!=s.filteredCount),(0,j.U)(s=>{const h=s.filteredCount,O=s.totalCount,ge=s.edges;return null==h&&null==O&&console.log("Need to provide either filtered count or total count in the table counts component"),{edgeCount:ge.length,filteredCount:h??O}}))}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-table-counts2"]],inputs:{cvcTableCountsConnection:"cvcTableCountsConnection"},decls:2,vars:3,consts:[["class","table-counts","nz-typography","","nzType","secondary",4,"ngIf"],["nz-typography","","nzType","secondary",1,"table-counts"]],template:function(s,h){1&s&&(e.YNc(0,Pt,4,6,"span",0),e.ALo(1,"ngrxPush")),2&s&&e.Q6J("ngIf",e.lcZ(1,1,h.tableCountsInfo$))},dependencies:[u.O5,Ce.ZU,u.JJ,lo.fM],styles:[":[_nghost-%COMP%]{border:1px solid red}.table-counts[_ngcontent-%COMP%]{display:inline-block}"],changeDetection:0}),l})();var Ro,un=c(1374),ro=c(9384);let jo=((Ro=class{set cvcTableScrollerToIndex(v){void 0!==v&&this.scrollToIndex(v)}set cvcTableScrollerToOffset(v){void 0!==v&&this.scrollToIndex(v)}constructor(v){this.host=v,this.cvcTableScrollerOnScroll=new e.vpe,this.cvcTableScrollerOnFetch=new e.vpe,this.cvcTableScrollerTargetHeight=140,this.cvcTableScrollerFetchCount=50,this.onLoadThrottleTime=500,this.onScrollThrottleTime=250,this.onScrollDebounceTime=300}ngAfterViewInit(){if(!this.host||!this.host.cdkVirtualScrollViewport)throw new Error("cvcTableScroller directive could not obtain reference to host cdkVirtualScrollViewport.");this.viewport=this.host.cdkVirtualScrollViewport,this.scrolled$=this.viewport.elementScrolled(),this.rendered$=this.viewport.renderedRangeStream,this.rendered$.pipe((0,un.P)()).subscribe(()=>this.viewport.checkViewportSize()),this.scrolled$.pipe((0,Gi.p)(this.onScrollThrottleTime,Ai.z,{leading:!0,trailing:!0}),(0,Tt.b)(v=>this.cvcTableScrollerOnScroll.next("scroll")),(0,Mo.b)(this.onScrollDebounceTime),(0,ln.t)(this)).subscribe(v=>{this.cvcTableScrollerOnScroll.next("stop")}),this.scrolled$.pipe((0,j.U)(v=>this.viewport.measureScrollOffset("bottom")),(0,ro.G)(),(0,yt.h)(([v,s])=>s<v&&s<this.cvcTableScrollerTargetHeight),(0,Gi.p)(this.onLoadThrottleTime),(0,ln.t)(this)).subscribe(v=>{this.cvcTableScrollerOnScroll.next("bottom");try{this.loadMore(this.cvcTableScrollerPageInfo)}catch(s){console.error(s)}})}loadMore(v){const s=this.cvcTableScrollerQueryRef;if(!v&&s)throw new Error("table-scroll directive requires PageInfo to use provided QueryRef.");if(v&&!s)throw new Error("table-scroll directive requires valid QueryRef when PageInfo provided.");if(v&&s){const[h,O,ge]=[this.cvcTableScrollerFetchCount,v.hasNextPage,v.endCursor];if(!h||!ge)throw new Error("table-scroll PageInfo invalid.");if(!O)return;this.cvcTableScrollerOnFetch.next({first:h,after:ge})}}scrollToIndex(v){const[s,h]=[this.host,this.host.cdkVirtualScrollViewport];if(!s||!h)throw new Error("table-scroll scrollToIndex() cannot find host viewport.");h.scrollToIndex(v)}scrollToOffset(v){const[s,h]=[this.host,this.host.cdkVirtualScrollViewport];if(!s||!h)throw new Error("table-scroll scrollToOffset() cannot find host viewport.");h.scrollToOffset(v)}}).\u0275fac=function(v){return new(v||Ro)(e.Y36(pi.N8))},Ro.\u0275dir=e.lG2({type:Ro,selectors:[["","cvcTableScroller",""]],inputs:{cvcTableScrollerTargetHeight:"cvcTableScrollerTargetHeight",cvcTableScrollerQueryRef:"cvcTableScrollerQueryRef",cvcTableScrollerPageInfo:"cvcTableScrollerPageInfo",cvcTableScrollerFetchCount:"cvcTableScrollerFetchCount",cvcTableScrollerToIndex:"cvcTableScrollerToIndex",cvcTableScrollerToOffset:"cvcTableScrollerToOffset"},outputs:{cvcTableScrollerOnScroll:"cvcTableScrollerOnScroll",cvcTableScrollerOnFetch:"cvcTableScrollerOnFetch"}}),Ro);function Si(l,v){1&l&&e._UZ(0,"span",8)}function $s(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"span",9),e.NdJ("click",function(){e.CHM(s),e.oxw(2);const O=e.MAs(3),ge=e.oxw();return O.value="",e.KtG(ge.cvcModelChange.next(null))}),e.qZA()}}function Ds(l,v){if(1&l&&e.YNc(0,Si,1,0,"span",6)(1,$s,1,0,"span",7),2&l){e.oxw();const s=e.MAs(3);e.Q6J("ngIf",!s.value),e.xp6(),e.Q6J("ngIf",s.value)}}function Os(l,v){if(1&l){const s=e.EpF();e.ynx(0),e.TgZ(1,"nz-input-group",2)(2,"input",3,4),e.NdJ("ngModelChange",function(O){e.CHM(s);const ge=e.oxw();return e.KtG(ge.cvcModelChange.next(O))}),e.qZA()(),e.YNc(4,Ds,2,2,"ng-template",null,5,e.W1O),e.BQk()}if(2&l){const s=e.MAs(5),h=e.oxw();e.xp6(),e.Q6J("nzSuffix",s),e.xp6(),e.Q6J("placeholder",h.cvcPlaceholder)("ngModel",h.cvcModel)}}function Ja(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"nz-input-number-group",10)(1,"nz-input-number",11,4),e.NdJ("ngModelChange",function(O){e.CHM(s);const ge=e.oxw();return e.KtG(ge.cvcModelChange.next(""===O?null:O))}),e.qZA()()}if(2&l){const s=e.oxw();let h;e.xp6(),e.Q6J("nzPlaceHolder",null!==(h=s.cvcPlaceholder)&&void 0!==h?h:"")("ngModel",s.cvcModel)("nzMin",1)("nzStep",1)}}jo=(0,V.gn)([(0,ln.c)()],jo);let Cs=(()=>{class l{constructor(){this.cvcModel=null,this.cvcModelChange=new e.vpe,this.cvcInputType="default"}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-table-filter-input"]],inputs:{cvcModel:"cvcModel",cvcInputType:"cvcInputType",cvcPlaceholder:"cvcPlaceholder"},outputs:{cvcModelChange:"cvcModelChange"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["numericInput",""],["nzSize","small",3,"nzSuffix"],["nz-input","",3,"placeholder","ngModel","ngModelChange"],["filterInput",""],["suffixIcon",""],["nz-icon","","nzType","search","style","color: #ddd",4,"ngIf"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzType","search",2,"color","#ddd"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],["nzSize","small"],[2,"width","100%",3,"nzPlaceHolder","ngModel","nzMin","nzStep","ngModelChange"]],template:function(s,h){if(1&s&&e.YNc(0,Os,6,3,"ng-container",0)(1,Ja,3,4,"ng-template",null,1,e.W1O),2&s){const O=e.MAs(2);e.Q6J("ngIf","default"===h.cvcInputType)("ngIfElse",O)}},dependencies:[u.O5,n.Fj,n.JJ,n.On,de.w,ee.Ls,B.Zp,B.gB,B.ke,ft,re],styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}.hide-dropdown[_ngcontent-%COMP%]{display:none}  nz-input-group{border-color:#d9d9d9!important}"]}),l})();var ra=c(3460);function cr(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"li",5),e.NdJ("click",function(){const ge=e.CHM(s).$implicit,mt=e.oxw();return e.KtG(mt.cvcOptionChange.next({key:mt.cvcColumnKey,value:ge.value}))}),e._UZ(1,"cvc-attribute-tag",6),e.qZA()}if(2&l){const s=v.$implicit,h=e.oxw();e.Q6J("nzSelected",(null==h.cvcOption?null:h.cvcOption.value)===s.value),e.xp6(),e.Q6J("cvcFullWidth",!0)("cvcChecked",(null==h.cvcOption?null:h.cvcOption.value)===s.value)("cvcAttrValue",s.value)}}let Us=(()=>{class l{constructor(){this.cvcOptionChange=new e.vpe}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-enum-filter-menu"]],inputs:{cvcColumnKey:"cvcColumnKey",cvcFilterOptions:"cvcFilterOptions",cvcOption:"cvcOption"},outputs:{cvcOptionChange:"cvcOptionChange"},decls:6,vars:2,consts:[["nz-menu",""],["nz-menu-item","",3,"nzSelected","click",4,"ngFor","ngForOf"],[2,"padding","3px"],["nz-button","","nzType","default","nzBlock","","nzSize","small",3,"disabled","click"],["nz-icon","","nzType","retweet","nzTheme","outline"],["nz-menu-item","",3,"nzSelected","click"],["cvcContext","menu-item",3,"cvcFullWidth","cvcChecked","cvcAttrValue"]],template:function(s,h){1&s&&(e.TgZ(0,"ul",0),e.YNc(1,cr,2,4,"li",1),e.TgZ(2,"li",2)(3,"button",3),e.NdJ("click",function(){return h.cvcOptionChange.next({key:h.cvcColumnKey,value:null})}),e._UZ(4,"span",4),e._uU(5," Reset "),e.qZA()()()),2&s&&(e.xp6(),e.Q6J("ngForOf",h.cvcFilterOptions),e.xp6(2),e.Q6J("disabled",null===(null==h.cvcOption?null:h.cvcOption.value)))},dependencies:[u.sg,R,uo.ix,de.w,ce.dQ,ra.wO,ra.u9,ee.Ls],styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}.hide-dropdown[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]     ul li:hover{background-color:#e6f7ff}[_nghost-%COMP%]     ul li.ant-dropdown-menu-item-selected{background-color:#1890ff}[_nghost-%COMP%]     ul li.ant-dropdown-menu-item-selected:active{background-color:#096dd9}"],changeDetection:0}),l})(),xi=(()=>{class l{transform(s){return null!=s&&Array.isArray(s)}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275pipe=e.Yjl({name:"isArray",type:l,pure:!0}),l})(),fl=(()=>{class l{transform(s,h){return h(s)?s:void 0}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275pipe=e.Yjl({name:"guardType",type:l,pure:!0}),l})();var Da;function D1(l,v){if(1&l&&e._UZ(0,"th",14),2&l){const s=v.ngIf;let h;e.Q6J("nzShowCheckbox",s.checkbox.th.showCheckbox||!1)("nzWidth",s.width)("nzAlign",null!==(h=s.align)&&void 0!==h?h:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)}}function O1(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"th",15),e.NdJ("nzSortOrderChange",function(O){const mt=e.CHM(s).ngIf;return e.KtG(mt.sort.changes.next({key:mt.key,value:O}))}),e.ALo(1,"ngrxPush"),e.TgZ(2,"span",16),e._uU(3),e.qZA()()}if(2&l){const s=v.ngIf;let h,O;e.Q6J("nzColumnKey",s.key)("nzAlign",null!==(h=s.align)&&void 0!==h?h:"left")("nzWidth",s.width)("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)("nzShowSort",void 0!==s.sort)("nzSortFn",!0)("nzSortOrder",(null==(O=e.lcZ(1,10,s.sort.changes))?null:O.value)||null),e.xp6(2),e.Q6J("nzTooltipTitle",s.tooltip),e.xp6(),e.hij(" ",s.label," ")}}function wd(l,v){if(1&l&&(e.TgZ(0,"th",17),e._uU(1),e.qZA()),2&l){const s=v.ngIf;let h;e.Q6J("nzColumnKey",s.key)("nzAlign",null!==(h=s.align)&&void 0!==h?h:"left")("nzWidth",s.width)("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)("nzTooltipTitle",s.tooltip),e.xp6(),e.hij(" ",s.label," ")}}function Pd(l,v){if(1&l&&(e.TgZ(0,"th",17),e._uU(1),e.qZA()),2&l){const s=v.ngIf;let h;e.Q6J("nzColumnKey",s.key)("nzAlign",null!==(h=s.align)&&void 0!==h?h:"left")("nzWidth",s.width)("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)("nzTooltipTitle",s.tooltip),e.xp6(),e.hij(" ",s.label," ")}}function Ka(l,v){if(1&l&&(e.ynx(0),e.YNc(1,D1,1,5,"th",11),e.ALo(2,"guardType"),e.YNc(3,O1,4,12,"th",12),e.ALo(4,"guardType"),e.YNc(5,wd,2,7,"th",13),e.ALo(6,"guardType"),e.YNc(7,Pd,2,7,"th",13),e.ALo(8,"guardType"),e.BQk()),2&l){const s=e.oxw().$implicit,h=e.oxw(2);e.xp6(),e.Q6J("ngIf",e.xi3(2,4,s,h.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,7,s,h.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,10,s,h.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,13,s,h.colGuards.isTextTagCol))}}function zs(l,v){if(1&l&&(e.ynx(0),e.YNc(1,Ka,9,16,"ng-container",10),e.BQk()),2&l){const s=v.$implicit;e.xp6(),e.Q6J("ngIf",!s.hidden)}}function Tu(l,v){if(1&l&&(e.TgZ(0,"th",22),e._uU(1," \xa0 "),e.qZA()),2&l){const s=v.ngIf;let h;e.Q6J("nzColumnKey",s.key)("nzAlign",null!==(h=s.align)&&void 0!==h?h:"left")("nzWidth",s.width)("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)}}function Sc(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"cvc-table-filter-input",25),e.NdJ("cvcModelChange",function(O){const mt=e.CHM(s).ngIf,Tn=e.oxw().ngIf;return e.KtG(mt.changes.next(mt.transform?{key:Tn.key,value:mt.transform(O)}:{key:Tn.key,value:O}))}),e.qZA()}if(2&l){const s=e.oxw().ngIf;e.Q6J("cvcInputType",s.filter.inputType)("cvcPlaceholder",s.filter.options[0].key)("cvcModel",s.filter.options[0].value)}}function ml(l,v){if(1&l&&(e.TgZ(0,"th",23),e.YNc(1,Sc,1,3,"cvc-table-filter-input",24),e.qZA()),2&l){const s=v.ngIf;let h;e.Q6J("nzColumnKey",s.key)("nzWidth",s.width)("nzAlign",null!==(h=s.align)&&void 0!==h?h:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1),e.xp6(),e.Q6J("ngIf",s.filter)}}function gl(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"th",26,27),e.NdJ("nzSortOrderChange",function(O){const mt=e.CHM(s).ngIf;return e.KtG(mt.sort.changes.next({key:mt.key,value:O}))}),e.ALo(2,"ngrxPush"),e.TgZ(3,"nz-filter-trigger",28,29),e.ALo(5,"ngrxPush"),e._UZ(6,"span",30),e.qZA(),e.TgZ(7,"nz-dropdown-menu",null,31)(9,"cvc-enum-filter-menu",32),e.NdJ("cvcOptionChange",function(O){const mt=e.CHM(s).ngIf,Tn=e.MAs(4);return mt.filter.changes.next(O),e.KtG(Tn.nzVisible=!1)}),e.ALo(10,"ngrxPush"),e.qZA()()()}if(2&l){const s=v.ngIf,h=e.MAs(8);let O,ge,mt;e.Q6J("nzColumnKey",s.key)("nzWidth",s.width)("nzAlign",null!==(O=s.align)&&void 0!==O?O:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)("nzShowSort",!0)("nzSortFn",!0)("nzSortOrder",(null==(ge=e.lcZ(2,15,s.sort.changes))?null:ge.value)||null)("nzShowFilter",void 0!==s.filter)("nzFilterFn",!0),e.xp6(3),e.Q6J("nzDropdownMenu",h)("nzActive",null!==(null==(mt=e.lcZ(5,17,s.filter.changes))?null:mt.value)),e.xp6(6),e.Q6J("cvcColumnKey",s.key)("cvcFilterOptions",s.filter.options)("cvcOption",e.lcZ(10,19,s.filter.changes))}}function Mu(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"th",33,27)(2,"nz-filter-trigger",28),e.ALo(3,"ngrxPush"),e._UZ(4,"span",34),e.qZA(),e.TgZ(5,"nz-dropdown-menu",null,35)(7,"div",36)(8,"div",37)(9,"cvc-table-filter-input",38),e.NdJ("cvcModelChange",function(O){const mt=e.CHM(s).ngIf;return e.KtG(mt.filter.changes.next({key:mt.key,value:O}))}),e.qZA()()()()()}if(2&l){const s=v.ngIf,h=e.MAs(6);let O,ge;e.Q6J("nzColumnKey",s.key)("nzWidth",s.width)("nzAlign",null!==(O=s.align)&&void 0!==O?O:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)("nzFilterFn",!0),e.xp6(2),e.Q6J("nzDropdownMenu",h)("nzActive",null!==(null==(ge=e.lcZ(3,10,s.filter.changes))?null:ge.value)),e.xp6(7),e.Q6J("cvcPlaceholder",s.filter.options[0].key)("cvcModel",s.filter.options[0].value)}}function bu(l,v){if(1&l&&(e.ynx(0),e.YNc(1,Tu,2,5,"th",18),e.ALo(2,"guardType"),e.YNc(3,ml,2,6,"th",19),e.ALo(4,"guardType"),e.YNc(5,gl,11,21,"th",20),e.ALo(6,"guardType"),e.YNc(7,Mu,10,12,"th",21),e.ALo(8,"guardType"),e.BQk()),2&l){const s=e.oxw().$implicit,h=e.oxw(2);e.xp6(),e.Q6J("ngIf",e.xi3(2,4,s,h.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,7,s,h.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,10,s,h.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,13,s,h.colGuards.isTextTagCol))}}function Eu(l,v){if(1&l&&(e.ynx(0),e.YNc(1,bu,9,16,"ng-container",10),e.BQk()),2&l){const s=v.$implicit;e.xp6(),e.Q6J("ngIf",!s.hidden)}}function xc(l,v){if(1&l&&(e.TgZ(0,"thead")(1,"tr",7),e.YNc(2,zs,2,1,"ng-container",8),e.qZA(),e.TgZ(3,"tr",9),e.YNc(4,Eu,2,1,"ng-container",8),e.qZA()()),2&l){const s=v.ngrxLet;e.xp6(2),e.Q6J("ngForOf",s),e.xp6(2),e.Q6J("ngForOf",s)}}function sa(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"td",43),e.NdJ("nzCheckedChange",function(O){e.CHM(s);const ge=e.oxw(3).$implicit,mt=e.oxw(2);return e.KtG(mt.onRowSelected$.next({id:ge.id,selected:O}))}),e.qZA()}if(2&l){const s=v.ngIf,h=e.oxw(3).$implicit;let O;e.Q6J("nzChecked",h.selected)("nzAlign",null!==(O=s.align)&&void 0!==O?O:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)}}function Oa(l,v){1&l&&e.GkF(0)}const Su=(l,v,s)=>({$implicit:l,config:v,emphasize:s});function Dc(l,v){if(1&l&&(e.ynx(0),e.YNc(1,Oa,1,0,"ng-container",49),e.ALo(2,"isArray"),e.ALo(3,"ngrxPush"),e.BQk()),2&l){const s=e.oxw().ngIf,h=e.oxw().ngIf,O=e.MAs(3),ge=e.MAs(5),mt=e.oxw(3).$implicit;let Tn;e.xp6(),e.Q6J("ngTemplateOutlet",e.lcZ(2,2,mt[s])?O:ge)("ngTemplateOutletContext",e.kEZ(6,Su,mt[s],h,null==(Tn=e.lcZ(3,4,h.filter.changes))?null:Tn.value))}}function xu(l,v){if(1&l&&(e.ynx(0),e.YNc(1,Dc,4,10,"ng-container",48),e.BQk()),2&l){const s=v.ngIf;e.oxw();const h=e.MAs(7),O=e.oxw(3).$implicit;e.xp6(),e.Q6J("ngIf",O[s])("ngIfElse",h)}}const vl=(l,v,s,h,O)=>({tagList:l,tag:v,showPopover:s,status:h,emphasize:O});function Du(l,v){if(1&l&&(e.ynx(0),e._UZ(1,"cvc-entity-collection-tag",51),e.BQk()),2&l){const s=e.oxw(2),h=s.config,O=s.$implicit,ge=s.emphasize;e.oxw();const mt=e.MAs(5),Tn=e.oxw(5);e.xp6(),e.Q6J("cvcCollectionTagConfig",e.qbA(3,vl,O.slice(h.tag.maxTags,O.length),h.tag,!Tn.isScrolling,!0===h.showStatus?O.status:void 0,ge))("cvcTagTemplate",mt)("cvcShowFullLabels",!0)}}function Id(l,v){if(1&l&&(e.ynx(0),e._UZ(1,"cvc-entity-tag-list",50),e.YNc(2,Du,2,9,"ng-container",10),e.BQk()),2&l){const s=e.oxw(),h=s.config,O=s.$implicit,ge=s.emphasize;e.oxw();const mt=e.MAs(5),Tn=e.oxw(5);e.xp6(),e.Q6J("cvcTagTemplate",mt)("cvcTagListConfig",e.qbA(3,vl,O.slice(0,h.tag.maxTags),h.tag,!Tn.isScrolling,!0===h.showStatus?O.status:void 0,ge)),e.xp6(),e.Q6J("ngIf",O.slice(h.tag.maxTags,O.length).length>0)}}function Ad(l,v){if(1&l&&e.YNc(0,Id,3,9,"ng-container",48),2&l){const s=v.$implicit;e.oxw();const h=e.MAs(7);e.Q6J("ngIf",s.length>0)("ngIfElse",h)}}function Oc(l,v){if(1&l&&e._UZ(0,"cvc-entity-tag",52),2&l){const s=v.$implicit,h=v.config,O=v.emphasize,ge=e.oxw(6);let mt;e.Q6J("cvcTruncateLabel",null==h.tag?null:h.tag.truncateLabel)("cvcLinkableEntity",s)("cvcEmphasize",O)("cvcShowPopover",!ge.isScrolling)("cvcStatus",!0===h.showStatus?s.status:void 0)("cvcFullWidth",null!==(mt=null==h.tag?null:h.tag.fullWidth)&&void 0!==mt&&mt)}}function wa(l,v){if(1&l&&e._UZ(0,"cvc-empty-value",53),2&l){const s=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",s.emptyValueCategory||"not-applicable")}}function Ou(l,v){if(1&l&&(e.TgZ(0,"td",44),e.YNc(1,xu,2,2,"ng-container",10)(2,Ad,1,2,"ng-template",null,45,e.W1O)(4,Oc,1,6,"ng-template",null,46,e.W1O)(6,wa,1,1,"ng-template",null,47,e.W1O),e.qZA()),2&l){const s=v.ngIf;let h;e.Q6J("nzAlign",null!==(h=s.align)&&void 0!==h?h:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1),e.xp6(),e.Q6J("ngIf",s.context||s.key)}}function Pa(l,v){if(1&l&&(e._UZ(0,"cvc-attribute-tag",56),e.ALo(1,"evidenceEnumDisplay")),2&l){const s=e.oxw().ngIf,h=e.oxw(3).$implicit,O=e.oxw(2);e.Q6J("cvcFullWidth",!0)("cvcAttrValue",h[s.key])("cvcTooltip",e.lcZ(1,3,!O.isScrolling&&h[s.key]))}}function wc(l,v){if(1&l&&e._UZ(0,"cvc-empty-value",57),2&l){const s=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",s.emptyValueCategory||"unspecified")}}function qa(l,v){if(1&l&&(e.TgZ(0,"td",44),e.YNc(1,Pa,2,5,"cvc-attribute-tag",54)(2,wc,1,1,"ng-template",null,55,e.W1O),e.qZA()),2&l){const s=v.ngIf,h=e.MAs(3),O=e.oxw(3).$implicit;let ge;e.Q6J("nzAlign",null!==(ge=s.align)&&void 0!==ge?ge:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1),e.xp6(),e.Q6J("ngIf",O[s.key])("ngIfElse",h)}}function Fd(l,v){if(1&l&&(e.TgZ(0,"nz-tag",60),e._UZ(1,"span",61),e.qZA()),2&l){const s=e.oxw().ngIf,h=e.oxw(3).$implicit;e.Q6J("nzTooltipTitle",h[s.key])}}function _l(l,v){if(1&l&&e._UZ(0,"cvc-empty-value",53),2&l){const s=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",s.emptyValueCategory||"unspecified")}}function wu(l,v){if(1&l&&(e.TgZ(0,"td",44),e.YNc(1,Fd,2,1,"nz-tag",58)(2,_l,1,1,"ng-template",null,59,e.W1O),e.qZA()),2&l){const s=v.ngIf,h=e.MAs(3),O=e.oxw(3).$implicit;let ge;e.Q6J("nzAlign",null!==(ge=s.align)&&void 0!==ge?ge:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1),e.xp6(),e.Q6J("ngIf",O[s.key])("ngIfElse",h)}}function Pu(l,v){if(1&l&&(e.ynx(0),e.YNc(1,sa,1,4,"td",41),e.ALo(2,"guardType"),e.YNc(3,Ou,8,4,"td",42),e.ALo(4,"guardType"),e.YNc(5,qa,4,5,"td",42),e.ALo(6,"guardType"),e.YNc(7,wu,4,5,"td",42),e.ALo(8,"guardType"),e.BQk()),2&l){const s=e.oxw().$implicit,h=e.oxw(3);e.xp6(),e.Q6J("ngIf",e.xi3(2,4,s,h.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,7,s,h.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,10,s,h.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,13,s,h.colGuards.isTextTagCol))}}function ds(l,v){if(1&l&&(e.ynx(0),e.YNc(1,Pu,9,16,"ng-container",10),e.BQk()),2&l){const s=v.$implicit;e.xp6(),e.Q6J("ngIf",!s.hidden)}}function Nd(l,v){if(1&l&&(e.TgZ(0,"tr",40),e.YNc(1,ds,2,1,"ng-container",8),e.qZA()),2&l){const s=e.oxw().ngrxLet;e.xp6(),e.Q6J("ngForOf",s)}}function Pc(l,v){1&l&&(e.TgZ(0,"tbody"),e.YNc(1,Nd,2,1,"ng-template",39),e.qZA())}function Ic(l,v){1&l&&e._UZ(0,"span",69)}function yl(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"span",70),e.NdJ("click",function(){e.CHM(s),e.oxw(2);const O=e.MAs(3),ge=e.oxw().filter;return O.value="",e.KtG(ge.changes.next({key:ge.key,value:null}))}),e.qZA()}}function Ac(l,v){if(1&l&&e.YNc(0,Ic,1,0,"span",67)(1,yl,1,0,"span",68),2&l){e.oxw();const s=e.MAs(3);e.Q6J("ngIf",!s.value),e.xp6(),e.Q6J("ngIf",s.value)}}function Cl(l,v){if(1&l){const s=e.EpF();e.ynx(0),e.TgZ(1,"nz-input-group",63)(2,"input",64,65),e.NdJ("nzFilterChange",function(O){e.CHM(s);const ge=e.oxw().filter;return e.KtG(ge.changes.next({key:ge.key,value:O}))}),e.qZA()(),e.YNc(4,Ac,2,2,"ng-template",null,66,e.W1O),e.BQk()}if(2&l){const s=e.MAs(5),h=e.oxw().filter;e.xp6(),e.Q6J("nzSuffix",s),e.xp6(),e.Q6J("placeholder",h.placeholder)("ngModel",h.defaultValue)}}function Iu(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"nz-input-number-group",71)(1,"nz-input-number",72,65),e.NdJ("ngModelChange",function(O){e.CHM(s);const ge=e.oxw().filter;return e.KtG(ge.changes.next({key:ge.key,value:O}))}),e.qZA()()}if(2&l){const s=e.oxw().filter;e.xp6(),e.Q6J("nzPlaceHolder",s.placeholder)("ngModel",s.defaultValue)("nzMin",1)("nzStep",1)}}function zl(l,v){if(1&l&&e.YNc(0,Cl,6,3,"ng-container",48)(1,Iu,3,4,"ng-template",null,62,e.W1O),2&l){const s=v.filter,h=e.MAs(2);e.Q6J("ngIf",void 0===s.inputType||"default"===s.inputType)("ngIfElse",h)}}const Tl=()=>[6,6];function Ml(l,v){1&l&&(e.TgZ(0,"nz-row",73)(1,"nz-col")(2,"span"),e._uU(3,"Use checkboxes to select or deselect EIDs"),e.qZA()()()),2&l&&e.Q6J("nzGutter",e.DdM(1,Tl))}function bl(l,v){1&l&&(e.TgZ(0,"nz-tag",84),e._UZ(1,"i",85),e.TgZ(2,"span"),e._uU(3,"Loading\u2026"),e.qZA()())}const El=l=>({$implicit:l});function Xa(l,v){if(1&l&&(e.TgZ(0,"nz-tag",88),e._UZ(1,"span",89),e.TgZ(2,"span",90),e._uU(3),e.qZA()()),2&l){e.oxw();const s=e.MAs(4),h=e.oxw().ngrxLet;e.xp6(2),e.Q6J("nzTooltipTitle",s)("nzTooltipTitleContext",e.VKq(3,El,h.query)),e.xp6(),e.hij(" Query Error",h.query.length>1?"s":""," ")}}function Ys(l,v){if(1&l&&(e.TgZ(0,"nz-tag",88)(1,"span",90)(2,"span",91)(3,"strong"),e._uU(4),e.qZA()()()()),2&l){e.oxw();const s=e.MAs(4),h=e.oxw().ngrxLet;e.xp6(),e.Q6J("nzTooltipTitle",s)("nzTooltipTitleContext",e.VKq(3,El,h.network)),e.xp6(3),e.hij(" Network Error",h.query.length>1?"s":""," ")}}function Au(l,v){if(1&l&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&l){const s=v.$implicit;e.xp6(),e.hij(" ",s.message," ")}}function Sl(l,v){1&l&&e.YNc(0,Au,2,1,"div",8),2&l&&e.Q6J("ngForOf",v.$implicit)}function xl(l,v){if(1&l&&(e.ynx(0),e.YNc(1,Xa,4,5,"nz-tag",86)(2,Ys,5,5,"nz-tag",86)(3,Sl,1,1,"ng-template",null,87,e.W1O),e.BQk()),2&l){const s=e.oxw().ngrxLet;e.xp6(),e.Q6J("ngIf",s.query),e.xp6(),e.Q6J("ngIf",s.network)}}function aa(l,v){if(1&l&&(e.ynx(0),e.YNc(1,xl,5,2,"ng-container",10),e.BQk()),2&l){const s=v.ngrxLet;e.xp6(),e.Q6J("ngIf",s)}}function js(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"div",92)(1,"nz-checkbox-group",93),e.NdJ("ngModelChange",function(O){e.CHM(s);const ge=e.oxw(2);return e.KtG(ge.onPreferenceChange$.next(O))}),e.ALo(2,"ngrxPush"),e.qZA()()}if(2&l){const s=e.oxw(2);e.xp6(),e.Q6J("ngModel",e.lcZ(2,1,s.setPreference$))}}function Zi(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"nz-row",73)(1,"nz-col",74),e.YNc(2,bl,4,0,"nz-tag",75),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e._UZ(5,"cvc-no-more-rows",76),e.ALo(6,"ngrxPush"),e.qZA(),e.TgZ(7,"nz-col",74),e.YNc(8,aa,2,1,"ng-container",3),e.qZA(),e.TgZ(9,"nz-col",74),e._UZ(10,"cvc-table-counts2",77),e.qZA(),e.TgZ(11,"nz-col",78)(12,"nz-button-group")(13,"button",79),e.NdJ("click",function(){e.CHM(s);const O=e.oxw();return e.KtG(O.onResetFilter$.next())}),e._UZ(14,"span",80),e.qZA(),e.TgZ(15,"button",81),e._UZ(16,"span",82),e.qZA()(),e.YNc(17,js,3,3,"ng-template",null,83,e.W1O),e.qZA()()}if(2&l){const s=e.MAs(18),h=e.oxw();e.Q6J("nzGutter",8),e.xp6(2),e.Q6J("ngIf",e.lcZ(3,7,h.loading$)&&e.lcZ(4,9,h.isFetchMore$)),e.xp6(3),e.Q6J("cvcShowTag",e.lcZ(6,11,h.noMoreRows$)),e.xp6(3),e.Q6J("ngrxLet",h.queryError$),e.xp6(2),e.Q6J("cvcTableCountsConnection",h.connection$),e.xp6(5),e.Q6J("nzPopoverContent",s)("nzPopoverTrigger","click")}}const Fu=()=>[],Dl=()=>({x:"800px",y:"200px"});let Ia=((Da=class{constructor(v,s,h){this.queryGQL=v,this.apollo=s,this.cdr=h,this.cvcSelectedIdsChange=new e.vpe,this.isScrolling=!1,this.colGuards=Cu,this.onFetchMore$=new x.x,this.onPreferenceChange$=new Ve.X([]),this.onResetFilter$=new x.x,this.onRowSelected$=new x.x,this.onScroll$=new Ve.X("stop"),this.onSetSelectedRow$=new Ve.X(new Set),this.queryError$=new x.x,this.queryRequest$=new x.x,this.queryResult$=new Go.t(1),this.isFetchMore$=new Ve.X(!1),this.noMoreRows$=new Ve.X(!1),this.scrollToIndex$=new x.x,this.tableConfig=new Qo;const O=(0,Ho.a)(this.tableConfig.getFilterStreams()),ge=(0,Ho.a)(this.tableConfig.getSortStreams()).pipe((0,yt.h)(mt=>mt.filter(Tn=>null!==Tn.value).length<=1));this.refetch$=(0,Ho.a)([ge,O]).pipe((0,j.U)(([mt,Tn])=>({query:"refetch",sort:mt,filter:Tn}))),this.fetchMore$=this.onFetchMore$.pipe((0,j.U)(mt=>({query:"fetchMore",fetchMore:{...mt}}))),(0,Q.T)(this.refetch$,this.fetchMore$).pipe((0,Mo.b)(50),(0,ln.t)(this)).subscribe(mt=>{const Tn=this.getQueryVars(mt);this.queryRef?(this.queryError$.next({}),"refetch"===mt.query?(this.isFetchMore$.next(!1),this.queryRef.refetch(Tn).then(In=>{(In.error||In.errors)&&this.queryError$.next(this.getRequestErrors(In))}).then(()=>{this.scrollToIndex$.next(0)})):(this.isFetchMore$.next(!0),this.queryRef.fetchMore({variables:Tn}).then(In=>{(In.error||In.errors)&&this.queryError$.next(this.getRequestErrors(In))}))):(this.isFetchMore$.next(!1),this.queryError$.next({}),this.queryRef=this.queryGQL.watch(Tn),this.queryRef.valueChanges.pipe((0,ln.t)(this)).subscribe(In=>{this.queryResult$.next(In),(In.error||In.errors)&&this.queryError$.next(this.getRequestErrors(In))}))}),this.loading$=this.queryResult$.pipe((0,ko.j)("loading"),(0,ye.x)()),this.connection$=this.queryResult$.pipe((0,ko.j)("data","evidenceItems"),(0,yt.h)(li.ep)),this.pageInfo$=this.connection$.pipe((0,ko.j)("pageInfo"),(0,yt.h)(li.ep)),this.row$=(0,Ho.a)([this.connection$.pipe((0,ko.j)("edges"),(0,yt.h)(li.ep),(0,j.U)(mt=>mt.map(Tn=>Tn.node))),this.onSetSelectedRow$]).pipe((0,j.U)(([mt,Tn])=>mt.map(In=>{if(In)return{...In,evidenceItem:{__typename:"EvidenceItem",id:In.id,name:In.name,link:In.link,status:In.status},selected:Tn.has(In.id)}}))),this.col$=new Ve.X(this.tableConfig.get()),this.setPreference$=this.col$.pipe((0,j.U)(mt=>this.getColPrefsFromTableConfig(mt))),this.onPreferenceChange$.pipe((0,ci.M)(this.col$),(0,j.U)(([mt,Tn])=>this.getTableConfigFromColPrefs(mt,Tn)),(0,ln.t)(this)).subscribe(mt=>{this.col$.next(mt)}),this.onSetTableFilter$=new Ve.X([]),this.onSetTableFilter$.pipe((0,ln.t)(this)).subscribe(mt=>{const Tn=this.col$.getValue();mt.forEach(In=>{const Eo=Tn.find(hi=>hi.key===In.key);if(void 0!==Eo.filter.inputType){const hi=Eo.filter.options[0];if(null===In.value)return Eo.filter.options=[{...hi,value:null}],void Eo.filter.changes.next(In);if(Array.isArray(In.value)&&0===In.value.length)return Eo.filter.options=[{...hi,value:null}],void Eo.filter.changes.next({...In,value:null});let Vi;Array.isArray(In.value)?In.value.length>0&&(Vi=In.value[0]):Vi=In.value;const gc=Eo.filter.typename;if(!gc||!Vi)return void console.error(`evidence-manager requires column config '${Eo.key}' provide a typename for cvcTablePrefs Input to set its filter`);const rl=this.getEntityName(gc,Vi);if(!rl)return;Eo.filter.options=[{...hi,value:rl}],Eo.filter.changes.next({...In,value:rl})}else Ga(Eo)&&Eo.filter.changes.next(In)})}),this.onSetTablePref$=new Ve.X([]),this.onSetTablePref$.pipe((0,ci.M)(this.setPreference$),(0,j.U)(([mt,Tn])=>{const In=[];return mt.forEach(Eo=>{let hi=Tn.find(Vi=>Vi.value===Eo.value);hi?In.push({...hi,...Eo}):console.warn(`evidence-manager onSetTablePref$ received updated preferences for column '${Eo.value}', but a column with that key could not be found.`)}),In}),(0,ln.t)(this)).subscribe(mt=>{this.onPreferenceChange$.next(mt)}),this.onRowSelected$.pipe((0,ci.M)(this.onSetSelectedRow$),(0,ln.t)(this)).subscribe(([mt,Tn])=>{mt.selected?Tn.add(mt.id):Tn.delete(mt.id),this.onSetSelectedRow$.next(Tn),this.cvcSelectedIdsChange.next(Array.from(Tn))}),this.onScroll$.pipe((0,j.U)(mt=>"stop"!==mt),(0,ye.x)(),(0,ln.t)(this)).subscribe(mt=>{this.isScrolling=mt,this.cdr.detectChanges()}),this.onScroll$.pipe((0,yt.h)(mt=>"bottom"===mt),(0,ci.M)(this.pageInfo$),(0,j.U)(([mt,Tn])=>Tn),(0,ln.t)(this)).subscribe(mt=>{mt.hasNextPage||(this.noMoreRows$.next(!0),this.cdr.detectChanges(),setInterval(()=>this.noMoreRows$.next(!1)))})}ngAfterViewInit(){this.onResetFilter$.pipe((0,ci.M)((0,wi.of)(this.tableConfig.get())),(0,ln.t)(this)).subscribe(([v,s])=>{const h=[];s.forEach(O=>{if(Sa(O)&&O.sort.changes&&O.sort.changes.next({key:O.key,value:O.sort.default??null}),Ga(O)){const ge=O.filter.options.find(mt=>1==mt.byDefault)?.value;O.filter.changes&&O.filter.changes.next({key:O.key,value:ge||null})}h.push(O)}),this.col$.next(h)})}getQueryVars(v){const s=this.getQueryFilterParams(v);return{...this.getQuerySortParams(v),...s,...v.fetchMore}}getQuerySortParams(v){if(!v.sort)return;const h=v.sort.find(ge=>null!==ge.value);return h?{sortBy:{column:this.getSortColumnFromColKey(h.key),direction:"ascend"===h.value?Hn.SrV.Asc:Hn.SrV.Desc||void 0}}:void 0}getQueryFilterParams(v){let s={};return v.filter&&v.filter.forEach(h=>{s[xa[h.key]||h.key]=null===h.value||""===h.value?void 0:h.value}),s}getRequestErrors(v){return{query:v.errors,network:v.error}}getTableConfigFromColPrefs(v,s){return s.forEach(h=>{if(Wa.find(ge=>ge===h.key))return;const O=v.find(ge=>ge.value===h.key);O&&(h.hidden=!O?.checked)}),[...s]}getColPrefsFromTableConfig(v){let s=[];return v.forEach(h=>{Wa.find(O=>O===h.key)||s.push({label:h.tooltip||h.label,value:h.key,checked:!h.hidden})}),s}getSortColumnFromColKey(v){return oi[v]}getEntityName(v,s){const h={id:`${v}:${s}`,fragment:Tc.Ps`
                fragment Linkable${v}Entity on ${v} {
                  id
                  name
                  link
                }`},O=this.apollo.client.readFragment(h);if(O)return O.name;console.error(`evidence-manager onSetTableFilter$ could not find cached entity ${v}:${s} to populate input filter`)}trackByIndex(v,s){return s?.id}ngOnChanges(v){if(v.cvcTableSettings){const s=v.cvcTableSettings.currentValue;void 0!==s&&this.onSetTableFilter$.next(s.filters)}if(v.cvcSelectedIds){const s=v.cvcSelectedIds.currentValue,h=new Set;void 0!==s&&s.forEach(O=>h.add(O)),this.onSetSelectedRow$.next(h)}}}).\u0275fac=function(v){return new(v||Da)(e.Y36(Hn.EH_),e.Y36(Xr._M),e.Y36(e.sBO))},Da.\u0275cmp=e.Xpm({type:Da,selectors:[["cvc-evidence-manager"]],inputs:{cvcTableSettings:"cvcTableSettings",cvcSelectedIds:"cvcSelectedIds"},outputs:{cvcSelectedIdsChange:"cvcSelectedIdsChange"},features:[e.TTD],decls:16,vars:27,consts:[["nzSize","small",3,"nzTitle","nzExtra"],["cvcTableScroller","",3,"nzData","cvcTableScrollerQueryRef","cvcTableScrollerPageInfo","cvcTableScrollerToIndex","nzScroll","nzVirtualForTrackBy","nzVirtualItemSize","nzSize","nzFrontPagination","nzShowPagination","nzLoading","cvcTableScrollerOnScroll","cvcTableScrollerOnFetch"],["virtualTable",""],[4,"ngrxLet"],["columnFilterInput",""],["cardTitle",""],["extraTemplate",""],[1,"col-header-row"],[4,"ngFor","ngForOf"],[1,"filter-row"],[4,"ngIf"],[3,"nzShowCheckbox","nzWidth","nzAlign","nzLeft","nzRight",4,"ngIf"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzSortOrderChange",4,"ngIf"],["nz-tooltip","",3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzTooltipTitle",4,"ngIf"],[3,"nzShowCheckbox","nzWidth","nzAlign","nzLeft","nzRight"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzSortOrderChange"],["nz-tooltip","",1,"col-header-label",3,"nzTooltipTitle"],["nz-tooltip","",3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzTooltipTitle"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight",4,"ngIf"],[3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight",4,"ngIf"],["class","attribute-filter","nzCustomFilter","",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzShowFilter","nzFilterFn","nzSortOrderChange",4,"ngIf"],["class","attribute-filter","nzCustomFilter","",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzFilterFn",4,"ngIf"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight"],[3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight"],[3,"cvcInputType","cvcPlaceholder","cvcModel","cvcModelChange",4,"ngIf"],[3,"cvcInputType","cvcPlaceholder","cvcModel","cvcModelChange"],["nzCustomFilter","",1,"attribute-filter",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzShowFilter","nzFilterFn","nzSortOrderChange"],["enumTableFilter",""],[3,"nzDropdownMenu","nzActive"],["enumTagFilterTrigger",""],["nz-icon","","nzType","filter","nzTheme","fill"],["enumFilterMenu","nzDropdownMenu"],[3,"cvcColumnKey","cvcFilterOptions","cvcOption","cvcOptionChange"],["nzCustomFilter","",1,"attribute-filter",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzFilterFn"],["nz-icon","","nzType","search"],["textTagFilterMenu","nzDropdownMenu"],[1,"ant-table-filter-dropdown"],[1,"custom-input-dropdown"],[3,"cvcPlaceholder","cvcModel","cvcModelChange"],["nz-virtual-scroll",""],[1,"data-row"],[3,"nzChecked","nzAlign","nzLeft","nzRight","nzCheckedChange",4,"ngIf"],[3,"nzAlign","nzLeft","nzRight",4,"ngIf"],[3,"nzChecked","nzAlign","nzLeft","nzRight","nzCheckedChange"],[3,"nzAlign","nzLeft","nzRight"],["entityTagList",""],["entityTag",""],["emptyEntityTagCell",""],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"cvcTagTemplate","cvcTagListConfig"],[3,"cvcCollectionTagConfig","cvcTagTemplate","cvcShowFullLabels"],[3,"cvcTruncateLabel","cvcLinkableEntity","cvcEmphasize","cvcShowPopover","cvcStatus","cvcFullWidth"],[3,"cvcEmptyCategory"],["cvcContext","compact",3,"cvcFullWidth","cvcAttrValue","cvcTooltip",4,"ngIf","ngIfElse"],["emptyEnumTagCell",""],["cvcContext","compact",3,"cvcFullWidth","cvcAttrValue","cvcTooltip"],["cvcDisplayMode","small",3,"cvcEmptyCategory"],["nz-tooltip","","style","width: 100%; cursor: help; color: #595959",3,"nzTooltipTitle",4,"ngIf","ngIfElse"],["emptyTextTagCell",""],["nz-tooltip","",2,"width","100%","cursor","help","color","#595959",3,"nzTooltipTitle"],["nz-icon","","nzType","align-left","nzTheme","outline"],["numericInput",""],["nzSize","small",3,"nzSuffix"],["nz-input","",3,"placeholder","ngModel","nzFilterChange"],["filterInput",""],["suffixIcon",""],["nz-icon","","nzType","search","style","color: #ddd",4,"ngIf"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzType","search",2,"color","#ddd"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],["nzSize","small"],[2,"width","100%",3,"nzPlaceHolder","ngModel","nzMin","nzStep","ngModelChange"],[3,"nzGutter"],["nzFlex","auto"],["nzColor","processing",4,"ngIf"],[3,"cvcShowTag"],[3,"cvcTableCountsConnection"],["nzFlex","35px"],["nz-button","","type","button","nzType","default","nzSize","small",3,"click"],["nz-icon","","nzType","retweet","nzTheme","outline"],["nz-button","","nz-popover","","nzPopoverTitle","Visible Columns","type","button","nzType","default","nzSize","small",3,"nzPopoverContent","nzPopoverTrigger"],["nz-icon","","nzType","setting","nzTheme","outline"],["prefsPopover",""],["nzColor","processing"],["nz-icon","","nzType","sync","nzSpin",""],["nzColor","error","style","margin-left: 12px",4,"ngIf"],["queryError",""],["nzColor","error",2,"margin-left","12px"],["nz-icon","","nzType","question-circle","nzTheme","outline"],["nz-tooltip","",2,"cursor","help",3,"nzTooltipTitle","nzTooltipTitleContext"],["nz-typography",""],[1,"prefs-popover"],[3,"ngModel","ngModelChange"]],template:function(v,s){if(1&v&&(e.TgZ(0,"nz-card",0)(1,"nz-table",1,2),e.NdJ("cvcTableScrollerOnScroll",function(O){return s.onScroll$.next(O)})("cvcTableScrollerOnFetch",function(O){return s.onFetchMore$.next(O)}),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.ALo(7,"ngrxPush"),e.YNc(8,xc,5,2,"thead",3)(9,Pc,2,0,"tbody",3),e.qZA()(),e.YNc(10,zl,3,2,"ng-template",null,4,e.W1O)(12,Ml,4,2,"ng-template",null,5,e.W1O)(14,Zi,19,13,"ng-template",null,6,e.W1O)),2&v){const h=e.MAs(13),O=e.MAs(15);e.Q6J("nzTitle",h)("nzExtra",O),e.xp6(),e.Q6J("nzData",e.lcZ(3,15,s.row$)||e.DdM(25,Fu))("cvcTableScrollerQueryRef",s.queryRef)("cvcTableScrollerPageInfo",e.lcZ(4,17,s.pageInfo$))("cvcTableScrollerToIndex",e.lcZ(5,19,s.scrollToIndex$))("nzScroll",e.DdM(26,Dl))("nzVirtualForTrackBy",s.trackByIndex)("nzVirtualItemSize",28)("nzSize","small")("nzFrontPagination",!1)("nzShowPagination",!1)("nzLoading",e.lcZ(6,21,s.loading$)&&!e.lcZ(7,23,s.isFetchMore$)),e.xp6(7),e.Q6J("ngrxLet",s.col$),e.xp6(),e.Q6J("ngrxLet",s.col$)}},dependencies:[u.sg,u.O5,u.tP,R,oa.P,we,ia,nn.J,tt.H,fn,n.Fj,n.JJ,n.On,lo.eJ,uo.ix,uo.fY,de.w,ce.dQ,rr.bd,me.ub,us.RR,H.t3,H.SK,ee.Ls,B.Zp,B.gB,B.ke,ft,re,Xn.lU,pi.N8,pi.qD,pi.Uo,pi._C,pi.h7,pi.Om,pi.p0,pi.$Z,pi.zu,pi.qn,pi.Ql,pi.UX,pi.g6,to.j,qn.SY,Ce.ZU,jo,Cs,Us,xi,$r.Do,fl,lo.fM],styles:["[_nghost-%COMP%]{display:block}nz-card[_ngcontent-%COMP%]:first-of-type     .ant-card-body{padding:0;margin-top:1px}.table-info[_ngcontent-%COMP%]{margin-left:.5rem}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell.align-right[_ngcontent-%COMP%]     .ant-table-column-title{text-align:right}tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{padding:3px 4px}tr.filter-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   nz-filter-trigger[_ngcontent-%COMP%]     span.ant-dropdown-trigger{margin-left:0;padding-right:12px}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .anticon.attribute-icon[_ngcontent-%COMP%]{color:#595959}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.overflow-ellipsis[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.button-cell[_ngcontent-%COMP%]{padding:0}tr.data-row[_ngcontent-%COMP%]   td.align-right[_ngcontent-%COMP%], tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%]{text-align:right}tr.data-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-of-type{padding-left:6px}tr.data-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-of-type   cvc-entity-tag[_ngcontent-%COMP%]{margin-left:6px}.ant-table-filter-dropdown[_ngcontent-%COMP%]{padding:8px}.prefs-popover[_ngcontent-%COMP%]     nz-checkbox-group:first-of-type label{display:block}.prefs-popover[_ngcontent-%COMP%]     nz-checkbox-group:first-of-type label span{display:inline-block}"],changeDetection:0}),Da);Ia=(0,V.gn)([(0,ln.c)()],Ia);const Nu=["optionTemplates"];function Ol(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"nz-col",9)(1,"cvc-evidence-manager",10),e.NdJ("cvcSelectedIdsChange",function(O){e.CHM(s);const ge=e.oxw();return e.KtG(ge.onPopulate$.next(O))}),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.qZA()()}if(2&l){const s=e.oxw();e.xp6(),e.Q6J("cvcSelectedIds",e.lcZ(2,2,s.onEid$))("cvcTableSettings",e.lcZ(3,4,s.tableSettingsChange$))}}function Fc(l,v){if(1&l&&e._UZ(0,"cvc-entity-tag",13),2&l){const s=e.oxw().$implicit,h=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",s.__typename+":"+s.id)("cvcEmphasize",h)}}function ca(l,v){1&l&&(e.ynx(0),e.YNc(1,Fc,1,3,"ng-template",null,12,e.W1O),e.BQk())}function la(l,v){if(1&l&&(e.ynx(0),e.YNc(1,ca,3,0,"ng-container",11),e.ALo(2,"ngrxPush"),e.BQk()),2&l){const s=e.oxw();e.xp6(),e.Q6J("ngForOf",e.lcZ(2,1,s.result$))}}function ua(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"div",14)(1,"cvc-entity-tag",15),e.NdJ("cvcOnClose",function(){const ge=e.CHM(s).$implicit,mt=e.oxw();return e.KtG(mt.onTagClose$.next(ge.nzValue))}),e.qZA()()}if(2&l){const s=v.$implicit,h=e.oxw();e.xp6(),e.Q6J("cvcCacheId","EvidenceItem:"+s.nzValue)("cvcContext",h.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",h.props.isMultiSelect?"default":"closeable")}}const wl=()=>[6,6],Nc=(l,v)=>({show:l,hide:v}),da=Vo(No(),zi());let Lu=(()=>{class l extends da{constructor(s,h,O,ge){super(),this.taq=s,this.tq=h,this.changeDetectorRef=O,this.apollo=ge,this.synchronizedFields$=[],this.synchronizedRequired$=[],this.defaultOptions={props:{label:"Evidence Items",placeholder:"Select Evidence Items",isMultiSelect:!0,description:"Select Evidence by ID, or use the manager to select with filtering",entityName:{singular:"Evidence Item",plural:"Evidence Items"},minSearchStrLength:1}},this.synchronizedFieldToColMap=new Map([["molecularProfileId","molecularProfile"],["diseaseId","disease"],["therapyIds","therapies"]]),this.requiredFieldToColMap=new Map([["disease","requiresDisease$"],["therapies","requiresTherapy$"]]),this.onEid$=new Go.t,this.onShowMgrClick$=new x.x,this.showMgr$=this.onShowMgrClick$.pipe((0,qr.R)((mt,Tn)=>!mt,!1))}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.onEid$.pipe((0,ba._)("evidence-select onEid$"),(0,ln.t)(this)).subscribe(),void 0!==this.formControl.value&&0!==this.formControl.value.length&&this.onEid$.next(this.formControl.value),this.onValueChange$.pipe((0,ci.M)(this.onEid$),(0,ln.t)(this)).subscribe(([s,h])=>{Array.isArray(s)&&this.onEid$.next(s)})}configureStateConnections(){this.state&&(this.synchronizedFieldToColMap.forEach((s,h)=>{const O=this.state.fields[`${h}$`];O&&this.synchronizedFields$.push(O.pipe((0,j.U)(ge=>({key:h,value:ge??null}))))}),this.requiredFieldToColMap.forEach((s,h)=>{const O=this.state.requires[s];O&&this.synchronizedRequired$.push(O.pipe((0,j.U)(ge=>({key:h,required:ge}))))}),this.onFieldsChange$=(0,Ho.a)(this.synchronizedFields$).pipe((0,j.U)(s=>{const h=[];return s.forEach(O=>{const ge=this.synchronizedFieldToColMap.get(O.key);ge&&h.push({key:ge,value:O.value})}),h})),this.onRequiredChange$=(0,Ho.a)(this.synchronizedRequired$).pipe((0,j.U)(s=>{const h=[];return s.forEach(O=>{h.push({value:O.key,checked:O.required})}),h})),this.tableSettingsChange$=(0,Ho.a)([this.onFieldsChange$,this.onRequiredChange$]).pipe((0,j.U)(([s,h])=>({filters:s,preferences:h})),(0,Mo.b)(100),(0,_r.d)(1)))}getTypeaheadVarsFn(s,h){return{eid:+s.replace(/EID/i,"")}}getTypeaheadResultsFn(s){return s.data.evidenceItems.nodes}getTagQueryVarsFn(s){return{eid:s}}getTagQueryResultsFn(s){return s.data.evidenceItem}getSelectedItemOptionFn(s){return{value:s.id,label:`EID${s.id}`}}getSelectOptionsFn(s,h){return s.map((O,ge)=>({label:h.get(ge)||`EID${O.id}`,value:O.id}))}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(Hn.olA),e.Y36(Hn.EFm),e.Y36(e.sBO),e.Y36(Xr._M))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-evidence-select"]],viewQuery:function(s,h){if(1&s&&e.Gf(Nu,5,e.Rgc),2&s){let O;e.iGM(O=e.CRH())&&(h.optionTemplates=O)}},features:[e.qOj],decls:18,vars:36,consts:[[3,"nzGutter"],["nzFlex","auto"],[3,"cvcSelectMode","cvcMinSearchStrLength","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcSelectOpen","cvcOnSearch","cvcOnOpenChange","cvcSelectComponent","cvcOnModelChange"],["nzFlex","50px"],["type","button","nz-button","","nzBlock","",1,"manager-button",3,"click"],["nz-icon","",3,"ngClass","nzType"],["nzSpan","24","class","manager-drawer",4,"ngIf"],[4,"ngrxLet"],["selectedTemplate",""],["nzSpan","24",1,"manager-drawer"],[3,"cvcSelectedIds","cvcTableSettings","cvcSelectedIdsChange"],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(s,h){if(1&s&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1)(2,"cvc-entity-select",2),e.NdJ("cvcOnSearch",function(ge){return h.onSearch$.next(ge)})("cvcOnOpenChange",function(ge){return h.onOpenChange$.next(ge)})("cvcSelectComponent",function(ge){return h.selectComponent=ge})("cvcOnModelChange",function(ge){return h.props.change&&h.props.change(h.field,ge)}),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.qZA()(),e.TgZ(7,"nz-col",3)(8,"button",4),e.NdJ("click",function(){return h.onShowMgrClick$.next()}),e._UZ(9,"span",5),e.ALo(10,"ngrxPush"),e.ALo(11,"ngrxPush"),e._uU(12," Manager "),e.qZA()(),e.YNc(13,Ol,4,6,"nz-col",6),e.ALo(14,"ngrxPush"),e.qZA(),e.YNc(15,la,3,3,"ng-container",7)(16,ua,2,3,"ng-template",null,8,e.W1O)),2&s){const O=e.MAs(17);e.Q6J("nzGutter",e.DdM(32,wl)),e.xp6(2),e.Q6J("cvcSelectMode",h.props.isMultiSelect?"multiple":"default")("cvcMinSearchStrLength",h.props.minSearchStrLength)("cvcCustomTemplate",O)("cvcFormControl",h.formControl)("cvcFormlyAttributes",h.field)("cvcEntityName",h.props.entityName)("cvcPlaceholder",h.props.placeholder)("cvcResults",e.lcZ(3,18,h.result$))("cvcOptions",e.lcZ(4,20,h.selectOption$))("cvcShowError",h.showError)("cvcDisabled",h.props.disabled)("cvcLoading",e.lcZ(5,22,h.isLoading$))("cvcSelectOpen",e.lcZ(6,24,h.selectOpen$)),e.xp6(7),e.Q6J("ngClass",e.WLB(33,Nc,e.lcZ(10,26,h.showMgr$),!e.lcZ(11,28,h.showMgr$)))("nzType","caret-right"),e.xp6(4),e.Q6J("ngIf",e.lcZ(14,30,h.showMgr$)),e.xp6(2),e.Q6J("ngrxLet",h.onSearch$)}},dependencies:[u.mk,u.sg,u.O5,dn,nn.J,lo.eJ,uo.ix,de.w,ce.dQ,H.t3,H.SK,ee.Ls,Ia,lo.fM],styles:[".manager-button[_ngcontent-%COMP%]   span.hide[_ngcontent-%COMP%]{transform:rotate(0);transition:transform .2s linear}.manager-button[_ngcontent-%COMP%]   span.show[_ngcontent-%COMP%]{transform:rotate(90deg);transition:transform .2s linear}"],changeDetection:0}),l})();var Pl=c(821);let Il=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,ee.PV,to.X,qn.cg,Ce.ZJ,We.s,ut.x]}),l})(),ku=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,to.X,Ce.ZJ,Xn.$6,ee.PV,qn.cg,We.s,Il]}),l})();const Ld={types:[{name:"evidence-select",wrappers:["form-field"],component:Lu},{name:"evidence-multi-select",wrappers:["form-field"],component:Lu,defaultOptions:{props:{label:"Evidence Items",isMultiSelect:!0}}}]};let kd=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,pr,Pl.M,ku,xn,Il,ut.x,Pr.y,We.s,na,y.X0.forChild(Ld),n.u5,uo.sL,rr.vh,me.Wr,us.b1,N.U5,H.Jb,ee.PV,B.o7,xe,Xn.$6,pi.HQ,to.X,qn.cg,Ce.ZJ]}),l})();var Aa;function Rd(l,v){if(1&l&&(e.ynx(0),e.TgZ(1,"span"),e._uU(2),e.qZA(),e.BQk()),2&l){const s=v.ngrxLet;e.xp6(2),e.Oqu(s.message)}}function pa(l,v){if(1&l&&e._uU(0),2&l){const s=e.oxw(2);e.Oqu(s.successMessage)}}const Al=()=>[0,0];function Ru(l,v){if(1&l){const s=e.EpF();e.ynx(0),e.YNc(1,Rd,3,1,"ng-container",1),e.TgZ(2,"cvc-form-submission-status-display",2),e.YNc(3,pa,1,1,"ng-template",null,3,e.W1O),e.TgZ(5,"form",4),e.NdJ("ngSubmit",function(){e.CHM(s);const O=e.oxw();return e.KtG(O.onSubmit$.next(O.model))}),e.TgZ(6,"nz-row",5)(7,"nz-col",6)(8,"formly-form",7),e.NdJ("modelChange",function(O){e.CHM(s);const ge=e.oxw();return e.KtG(ge.model=O)}),e.qZA()()()()(),e.BQk()}if(2&l){const s=e.MAs(4),h=e.oxw();e.xp6(),e.Q6J("ngrxLet",h.formMessageDisplay$),e.xp6(),e.Q6J("mutationState",h.mutationState)("successMessage",s),e.xp6(3),e.Q6J("formGroup",h.form),e.xp6(),e.Q6J("nzGutter",e.DdM(9,Al)),e.xp6(2),e.Q6J("form",h.form)("fields",h.fields)("model",h.model)("options",h.options)}}let Ni=((Aa=class{set cvcFeatureType(v){v&&this.featureType$.next(v)}set cvcSearchString(v){v&&this.searchString$.next(v)}constructor(v,s){this.query=v,this.errors=s,this.cvcOnCreate=new e.vpe,this.showForm$=new Ve.X(!1),this.form=new n.nJ({}),this.model={name:""},this.formLayout="horizontal",this.options={formState:{formLayout:this.formLayout}},this.onSubmit$=new x.x,this.searchString$=new Ve.X(void 0),this.featureType$=new Ve.X(void 0),this.formMessageDisplay$=new Ve.X({message:"Feature does not exist, create it?"}),this.addFeatureMutator=new xo.U(this.errors),this.minNameLength=3,this.fields=[{key:"featureType",hide:!0,props:{required:!0}},{key:"name",hide:!0,props:{minLength:this.minNameLength,required:!0}},{key:"organizationId",type:"org-submit-button",props:{submitLabel:"Add Feature"}}],this.featureType$.pipe((0,ln.t)(this)).subscribe(h=>{Object.values(Hn.t8X).includes(h)?(this.model.featureType=h,this.showForm$.next(!0)):this.showForm$.next(!1)}),this.searchString$.pipe((0,ln.t)(this)).subscribe(h=>{this.model.name=h,this.formMessageDisplay$.next(void 0===h||void 0!==h&&h.length<this.minNameLength?{message:`New Feature name must be at least ${this.minNameLength} characters.`}:{message:`Feature '${h}' does not exist, create it?`})}),this.onSubmit$.pipe((0,ln.t)(this)).subscribe(h=>{console.log("feature-quick-add form model submitted.",h),this.submitFeature(h)})}submitFeature(v){v.name&&v.featureType?this.mutationState=this.addFeatureMutator.mutate(this.query,{name:v.name,featureType:v.featureType,organizationId:v.organizationId},{},s=>{console.log("feature-quick-add submit data callback",s),s.createFeature&&(this.formMessageDisplay$.next({message:void 0}),setTimeout(()=>{s&&s.createFeature&&this.cvcOnCreate.next({id:s.createFeature.feature.id,new:s.createFeature.new})},1e3))}):console.error("feature-quick-add form submitFeature requires model with valid name and featureType.")}ngOnChanges(v){if(v.cvcFeatureType){const s=v.cvcFeatureType.currentValue;this.featureType$.next(s),this.model={...this.model,featureType:s}}}}).\u0275fac=function(v){return new(v||Aa)(e.Y36(Hn.FRr),e.Y36(si.Y))},Aa.\u0275cmp=e.Xpm({type:Aa,selectors:[["cvc-feature-quick-add-form"]],inputs:{cvcFeatureType:"cvcFeatureType",cvcSearchString:"cvcSearchString"},outputs:{cvcOnCreate:"cvcOnCreate"},standalone:!0,features:[e.TTD,e.jDz],decls:2,vars:3,consts:[[4,"ngIf"],[4,"ngrxLet"],["entityType","Feature",3,"mutationState","successMessage"],["success",""],[3,"formGroup","ngSubmit"],[3,"nzGutter"],["nzSpan","24"],[3,"form","fields","model","options","modelChange"]],template:function(v,s){1&v&&(e.YNc(0,Ru,9,10,"ng-container",0),e.ALo(1,"ngrxPush")),2&v&&e.Q6J("ngIf",e.lcZ(1,1,s.showForm$))},dependencies:[u.ez,u.O5,n.UX,n._Y,n.JL,n.sg,ti.g,ni.F,lo.eJ,lo.fM,y.X0,y.T7,H.Jb,H.t3,H.SK],encapsulation:2,changeDetection:0}),Aa);Ni=(0,V.gn)([(0,ln.c)()],Ni);const Fl=["optionTemplates"];function Fa(l,v){if(1&l&&(e.ynx(0),e.TgZ(1,"em"),e._UZ(2,"span",16),e.ALo(3,"highlightTypeahead"),e.qZA(),e.BQk()),2&l){const s=e.oxw(2).$implicit,h=e.oxw().ngrxLet;e.xp6(2),e.Q6J("nzTooltipTitle",s.featureAliases.join(", "))("innerHtml",e.xi3(3,2,s.featureAliases.join(", "),h),e.oJD)}}function Vu(l,v){1&l&&e._uU(0,"--")}function xr(l,v){if(1&l&&(e._UZ(0,"cvc-entity-tag",12),e.TgZ(1,"span",13),e.YNc(2,Fa,4,5,"ng-container",14)(3,Vu,1,0,"ng-template",null,15,e.W1O),e.qZA()),2&l){const s=e.MAs(4),h=e.oxw().$implicit,O=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",h.__typename+":"+h.id)("cvcEmphasize",O),e.xp6(2),e.Q6J("ngIf",h.featureAliases.length>0)("ngIfElse",s)}}function ha(l,v){1&l&&(e.ynx(0),e.YNc(1,xr,5,5,"ng-template",null,11,e.W1O),e.BQk())}function Lc(l,v){if(1&l&&(e.ynx(0),e.YNc(1,ha,3,0,"ng-container",10),e.ALo(2,"ngrxPush"),e.BQk()),2&l){const s=e.oxw();e.xp6(),e.Q6J("ngForOf",e.lcZ(2,1,s.result$))}}function ec(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"div",17)(1,"cvc-entity-tag",18),e.NdJ("cvcOnClose",function(){const ge=e.CHM(s).$implicit,mt=e.oxw();return e.KtG(mt.onTagClose$.next(ge.nzValue))}),e.qZA()()}if(2&l){const s=v.$implicit,h=e.oxw();e.xp6(),e.Q6J("cvcCacheId","Feature:"+s.nzValue)("cvcContext",h.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",h.props.isMultiSelect?"default":"closeable")}}function tc(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"cvc-feature-quick-add-form",19),e.NdJ("cvcOnCreate",function(O){e.CHM(s);const ge=e.oxw();return e.KtG(ge.onSelectOrCreate(O))}),e.ALo(1,"ngrxPush"),e.qZA()}if(2&l){const s=v.$implicit,h=e.oxw();e.Q6J("cvcSearchString",s)("cvcFeatureType",e.lcZ(1,2,h.onFeatureType$))}}const kc=()=>[6,6],Vd=Vo(No(),zi());let Rc=(()=>{class l extends Vd{constructor(s,h,O){super(),this.taq=s,this.tq=h,this.changeDetectorRef=O,this.defaultOptions={props:{label:"Feature",placeholder:"Search Features",isMultiSelect:!1,entityName:{singular:"Feature",plural:"Features"},description:"Feature Name"},featureType:Hn.z1I.Gene},this.selectedFeatureType=this.defaultOptions.featureType,this.onFeatureType$=new Ve.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent})}getTypeaheadVarsFn(s){return{queryTerm:s,featureType:this.selectedFeatureType}}getTypeaheadResultsFn(s){return s.data.featureTypeahead}getTagQueryVarsFn(s){return{featureId:s}}getTagQueryResultsFn(s){return s.data.feature}getSelectedItemOptionFn(s){return{value:s.id,label:s.name}}getSelectOptionsFn(s,h){return s.map((O,ge)=>({label:h.get(ge)||O.name,value:O.id}))}showAddBehavior(s,h){const O=s.toLowerCase();return s.length>=3&&!h.some(ge=>ge.name.toLowerCase()===O)}onSelectOrCreate(s){this.onPopulate$.next(s.id),this.props.isNewlyCreatedCallback&&this.props.isNewlyCreatedCallback(s.new)}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(Hn.mq6),e.Y36(Hn.uL8),e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-feature-select"]],viewQuery:function(s,h){if(1&s&&e.Gf(Fl,5,e.Rgc),2&s){let O;e.iGM(O=e.CRH())&&(h.optionTemplates=O)}},features:[e.qOj],decls:16,vars:22,consts:[[3,"nzGutter"],["nzFlex","100px"],[3,"ngModel","ngModelChange"],["nzValue","GENE","nzLabel","Gene"],["nzValue","FACTOR","nzLabel","Factor"],["nzFlex","auto"],[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcPlaceholder","cvcEntityName","cvcAddEntity","cvcAddEntityBehavior","cvcResults","cvcOptions","cvcShowError","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcSelectComponent","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],["addFeature",""],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf","ngIfElse"],["noAliases",""],["nz-typography","","nzType","secondary","nz-tooltip","",3,"nzTooltipTitle","innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"],[3,"cvcSearchString","cvcFeatureType","cvcOnCreate"]],template:function(s,h){if(1&s&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1)(2,"nz-form-item")(3,"nz-select",2),e.NdJ("ngModelChange",function(ge){return h.selectedFeatureType=ge})("ngModelChange",function(ge){return null==h.onFeatureType$?null:h.onFeatureType$.next(ge)}),e._UZ(4,"nz-option",3)(5,"nz-option",4),e.qZA()()(),e.TgZ(6,"nz-col",5)(7,"cvc-entity-select",6),e.NdJ("cvcOnSearch",function(ge){return h.onSearch$.next(ge)})("cvcOnOpenChange",function(ge){return h.onOpenChange$.next(ge)})("cvcSelectComponent",function(ge){return h.selectComponent=ge})("cvcOnModelChange",function(ge){return h.props.change&&h.props.change(h.field,ge)}),e.ALo(8,"ngrxPush"),e.ALo(9,"ngrxPush"),e.ALo(10,"ngrxPush"),e.qZA()()(),e.YNc(11,Lc,3,3,"ng-container",7)(12,ec,2,3,"ng-template",null,8,e.W1O)(14,tc,2,4,"ng-template",null,9,e.W1O)),2&s){const O=e.MAs(13),ge=e.MAs(15);e.Q6J("nzGutter",e.DdM(21,kc)),e.xp6(3),e.Q6J("ngModel",h.selectedFeatureType),e.xp6(4),e.Q6J("cvcSelectMode",h.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",O)("cvcFormControl",h.formControl)("cvcFormlyAttributes",h.field)("cvcPlaceholder",h.props.placeholder)("cvcEntityName",h.props.entityName)("cvcAddEntity",ge)("cvcAddEntityBehavior",h.showAddBehavior)("cvcResults",e.lcZ(8,15,h.result$))("cvcOptions",e.lcZ(9,17,h.selectOption$))("cvcShowError",h.showError)("cvcLoading",e.lcZ(10,19,h.isLoading$)),e.xp6(4),e.Q6J("ngrxLet",h.onSearch$)}},dependencies:[u.sg,u.O5,n.JJ,n.On,lo.eJ,Be.Ip,Be.Vq,qn.SY,H.t3,H.SK,N.Nx,Ce.ZU,dn,nn.J,Ni,lo.fM,Mr.A],changeDetection:0}),l})();const Bd={types:[{name:"feature-select",wrappers:["form-field"],component:Rc},{name:"feature-multi-select",wrappers:["form-field"],component:Rc,defaultOptions:{props:{label:"Features",isMultiSelect:!0}}}]};let Ir=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,n.UX,n.u5,y.X0.forChild(Bd),Nt.L,uo.sL,Be.LV,ee.PV,B.o7,qn.cg,N.U5,he.ic,Ce.ZJ,to.X,Jn,xn,We.s,ut.x,Ni]}),l})();const Vc=["optionTemplates"];function fa(l,v){if(1&l&&e._UZ(0,"cvc-attribute-tag",4),2&l){const s=e.oxw().$implicit;e.Q6J("cvcAttrValue",s)}}function Hd(l,v){1&l&&(e.ynx(0),e.YNc(1,fa,1,1,"ng-template",null,3,e.W1O),e.BQk())}function Nl(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"div",5)(1,"cvc-attribute-tag",6),e.NdJ("cvcOnClose",function(O){e.CHM(s);const ge=e.oxw();return e.KtG(ge.onTagClose$.next(O))}),e.qZA()()}if(2&l){const s=v.$implicit,h=e.oxw();e.xp6(),e.Q6J("cvcAttrValue",s.nzValue)("cvcContext",h.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",h.props.isMultiSelect?"default":"closeable")}}const Bu={COMBINATION:"Therapies specified were used as part of a combination therapy approach",SEQUENTIAL:"Therapies specified were used at separate timepoints in the same treatment plan",SUBSTITUTES:"Therapies specified are often considered to be of the same family, or behave similarly in a treatment setting"},Hu=Vo(No(),So()),$u={types:[{name:"interaction-select",wrappers:["form-field"],component:(()=>{class l extends Hu{constructor(s){super(),this.cdr=s,this.defaultOptions={props:{label:"Therapy Interaction",placeholder:"Select Therapy Interaction",requireMultipleTherapies:!0,requireMultipleTherapiesPromptFn:()=>"A single associated therapy does not have an Interaction type",tooltip:"Characterizes the interaction of a multi-therapy treatment"}},this.interactionEnum$=new Ve.X([]),this.placeholder$=new Ve.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.interactionEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}configureStateConnections(){if(!this.state)return console.error(`${this.field.id} requires a form state to populate its options, none was found.`),void this.placeholder$.next("ERROR: Form state not found");this.placeholder$.next(this.props.placeholder),this.state.enums.interaction$?(this.state.enums.interaction$.pipe((0,ln.t)(this)).subscribe(s=>{this.interactionEnum$.next(s)}),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,j.U)(s=>s.map(h=>h))),this.onTherapies$=this.state.fields.therapyIds$,this.optionTemplates||console.warn(`${this.field.id} could not find state's fields.therapyIds$ to handle its required & disabled states.`),this.onTherapies$.pipe((0,ln.t)(this)).subscribe(s=>{s&&0!=s.length?1==s.length?(this.props.description="A single associated therapy does not have an Interaction type",this.props.disabled=!0,this.props.required=!1,void 0!==this.formControl.value&&this.formControl.setValue(void 0)):(this.props.description="Select an Interaction Type",this.props.disabled=!1,this.props.required=!0):(this.props.disabled=!0,this.props.required=!1,this.props.description="Interaction type is not applicable when no therapies are selected.",void 0!==this.formControl.value&&this.formControl.setValue(void 0)),this.cdr.markForCheck()}),this.onValueChange$.pipe((0,ln.t)(this)).subscribe(s=>{s?(this.props.description=Bu[s],this.props.extraType="description"):(this.props.extraType="prompt",this.field.formControl.markAsTouched())})):console.error(`${this.field.id} could not find form state's interaction$ to populate select.`)}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-interaction-select"]],viewQuery:function(s,h){if(1&s&&e.Gf(Vc,5,e.Rgc),2&s){let O;e.iGM(O=e.CRH())&&(h.optionTemplates=O)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcAttrValue","cvcContext","cvcMode","cvcOnClose"]],template:function(s,h){if(1&s&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,Hd,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,Nl,2,3,"ng-template",null,2,e.W1O)),2&s){const O=e.MAs(6);e.Q6J("cvcFormControl",h.formControl)("cvcFormlyAttributes",h.field)("cvcSelectMode",h.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,h.placeholder$))("cvcCustomTemplate",O)("cvcOptions",e.lcZ(2,11,h.selectOption$))("cvcShowError",h.showError)("cvcDisabled",h.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,h.interactionEnum$))}},dependencies:[u.sg,Bo,R,lo.fM]}),l})()}]};let Uu=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,n.UX,y.X0.forChild($u),Jn,vo,pr]}),l})();var Yu=c(8004);const Bc=["optionTemplates"];function nc(l,v){if(1&l&&(e.TgZ(0,"nz-tag")(1,"strong"),e._uU(2),e.qZA(),e._uU(3),e.ALo(4,"enumTooltip"),e.qZA()),2&l){const s=e.oxw().$implicit;e.xp6(2),e.Oqu(s),e.xp6(),e.hij(" - ",e.xi3(4,2,s,"evidenceLevelBrief")," ")}}function Hc(l,v){1&l&&(e.ynx(0),e.YNc(1,nc,5,5,"ng-template",null,3,e.W1O),e.BQk())}function oc(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"nz-tag",7),e.NdJ("nzOnClose",function(O){e.CHM(s);const ge=e.oxw(2);return e.KtG(ge.onTagClose$.next(O))}),e.TgZ(1,"strong"),e._uU(2),e.qZA(),e._uU(3),e.ALo(4,"enumTooltip"),e.qZA()}if(2&l){const s=e.oxw().$implicit;e.xp6(2),e.Oqu(s.nzValue),e.xp6(),e.hij(" - ",e.xi3(4,2,s.nzValue,"evidenceLevelBrief")," ")}}function ju(l,v){if(1&l&&(e.ynx(0),e.TgZ(1,"strong"),e._uU(2),e.qZA(),e._uU(3),e.ALo(4,"enumTooltip"),e.BQk()),2&l){const s=e.oxw().$implicit;e.xp6(2),e.Oqu(s.nzValue),e.xp6(),e.hij(" - ",e.xi3(4,2,s.nzValue,"evidenceLevelBrief")," ")}}function ic(l,v){if(1&l&&(e.TgZ(0,"div",4),e.YNc(1,oc,5,5,"nz-tag",5)(2,ju,5,5,"ng-container",6),e.qZA()),2&l){const s=e.oxw();e.xp6(),e.Q6J("ngIf",!s.props.isMultiSelect),e.xp6(),e.Q6J("ngIf",s.props.isMultiSelect)}}const Qu=new Map([[Hn.Sx0.A,"Evidence shows consensus association in human medicine"],[Hn.Sx0.B,"Evidence supports association using clinical trial or other primary patient data"],[Hn.Sx0.C,"Evidence supports association using individual case reports from clinical journals"],[Hn.Sx0.D,"Evidence supports association using in vivo or in vitro models"],[Hn.Sx0.E,"Evidential association is inferential or indirect"]]),Ll=Vo(No(),So()),rc={types:[{name:"level-select",wrappers:["form-field"],component:(()=>{class l extends Ll{constructor(s){super(),this.cdr=s,this.defaultOptions={props:{label:"Evidence Level",required:!1,isMultiSelect:!1,placeholder:"Select Evidence Level",extraType:"description"}},this.levelEnum$=new Ve.X([])}ngAfterViewInit(){this.configureBaseField(),this.state&&this.state.formReady$?this.state.formReady$.pipe((0,yt.h)(s=>s),(0,zr.q)(1),(0,ln.t)(this)).subscribe(s=>{this.configureField()}):this.configureField()}configureField(){this.props.tooltip="Type of study performed to produce the evidence statement",this.levelEnum$.next((0,Fo.o6)(Hn.Sx0).map(s=>s)),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,j.U)(s=>s.map(h=>h))),this.onValueChange$.pipe((0,ln.t)(this)).subscribe(s=>{s?(this.props.description=Qu.get(s),this.field.formControl.markAsTouched()):this.props.description=void 0}),this.configureEnumSelectField({optionEnum$:this.levelEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-level-select"]],viewQuery:function(s,h){if(1&s&&e.Gf(Bc,5,e.Rgc),2&s){let O;e.iGM(O=e.CRH())&&(h.optionTemplates=O)}},features:[e.qOj],decls:6,vars:13,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[1,"ant-select-selection-item-content"],["nzMode","closeable",3,"nzOnClose",4,"ngIf"],[4,"ngIf"],["nzMode","closeable",3,"nzOnClose"]],template:function(s,h){if(1&s&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.YNc(2,Hc,3,0,"ng-container",1),e.ALo(3,"ngrxPush"),e.YNc(4,ic,3,2,"ng-template",null,2,e.W1O)),2&s){const O=e.MAs(5);e.Q6J("cvcFormControl",h.formControl)("cvcFormlyAttributes",h.field)("cvcSelectMode",h.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",h.props.placeholder)("cvcCustomTemplate",O)("cvcOptions",e.lcZ(1,9,h.selectOption$))("cvcShowError",h.showError)("cvcDisabled",h.props.disabled),e.xp6(2),e.Q6J("ngForOf",e.lcZ(3,11,h.levelEnum$))}},dependencies:[u.sg,u.O5,to.j,Bo,lo.fM,Yu.v],changeDetection:0}),l})()},{name:"level-multi-select",extends:"level-select",defaultOptions:{props:{label:"Levels",isMultiSelect:!0}}}]};let Rl=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,n.UX,y.X0.forChild(rc),to.X,We.s,Jn,vo]}),l})();var Vl=c(4717),lr=c(6976),Qs=c(4194);const Na=/\(/g,Gu=/\)/g,Bl=/AND|OR/i,Hl=/^(?<not>NOT\s)?\s*#VID(?<variantId>\d+)$/i,Wu=/\s+/,Zu="EXPR";function $l(l){return Ul(l.replace(Na," ( ").replace(Gu," ) "))}function Ul(l){let s,v=l.split(Wu),h=0,O=[],ge=[],mt=[];for(let os of v)if("("==os)0!=h&&O.push(os),h+=1;else if(")"==os)if(h-=1,0==h){let Ns=Ul(O.join(" "));if("errorMessage"in Ns)return Ns;mt.push(Ns),ge.push(Zu),O=[]}else O.push(os);else h>0?O.push(os):ge.push(os);const Tn={errorType:"trailingBoolean",errorMessage:"Expressions may not end with AND / OR boolean operators."},In={errorType:"initialBoolean",errorMessage:"Expressions may not start with AND / OR boolean operators."},Eo={errorType:"multipleBoolean",errorMessage:"Multiple boolean operators found."},hi={errorType:"incompleteExpression",errorMessage:"Ensure that parenthetical clauses are closed."};let Vi=0;for(let os of ge){let Ns=Bl.test(os);if(Ns&&0==Vi)return In;if(Ns&&Vi===v.length-1)return Tn;if(Ns&&!s)s=Yl(os);else if(Ns&&s&&Yl(os)!==s)return Eo;Vi++}let gc=[],rl=ge.join(" ").split(Bl);for(let os of rl.map(Ns=>Ns.trim())){let Ns=Hl.exec(os);if(null===Ns){if(0===os.length)return hi;if("NOT"===os||"NOT"===os.split(" ").pop())return{errorType:"incompleteNOT",errorMessage:"NOT operator must be followed by a valid #VID."};if(os!==Zu)return{errorType:"invalidToken",errorMessage:`Token '${os}' does not match the expected format.`}}else gc.push({not:!!Ns[1],variantId:parseInt(Ns[2])})}return{booleanOperator:s,variantComponents:gc,complexComponents:mt}}function Yl(l){return"AND"==l.toUpperCase()?Hn._Wm.And:Hn._Wm.Or}var ws=c(6973);function $c(l,v){const s="object"==typeof v;return new Promise((h,O)=>{let mt,ge=!1;l.subscribe({next:Tn=>{mt=Tn,ge=!0},error:O,complete:()=>{ge?h(mt):s?h(v.defaultValue):O(new ws.K)}})})}var sc=c(951),ac=c(750);let La=(()=>{class l{constructor(s){this.apollo=s,this.cvcOnSelect=new e.vpe,this.cvcOnVariantSelect=new e.vpe,this.modelChange$=new Ve.X(void 0),this.finderState={formLayout:"horizontal",fields:{featureId$:new Ve.X(void 0),variantId$:new Ve.X(void 0),variantMolecularProfile$:new Ve.X(void 0)}},this.form=new n.nJ({}),this.model={featureId:void 0,variantId:void 0},this.options={formState:this.finderState},this.config=[{wrappers:["form-row"],props:{formRowOptions:{gutter:[8,0],span:12}},fieldGroup:[{key:"featureId",type:"feature-select",props:{placeholder:"Select MP Feature",hideLabel:!0,showExtra:!1,showErrorTip:!1,required:!0}},{key:"variantId",type:"variant-select",props:{placeholder:"Select MP Variant",hideLabel:!0,required:!0,showExtra:!1,showErrorTip:!1,requireFeature:!0}}]}]}modelChange(s){if(!s?.variantId)return;const h=this.getSelectedVariant(s.variantId);h&&(this.model={featureId:void 0,variantId:void 0},this.cvcOnSelect.next(h.singleVariantMolecularProfile),this.cvcOnVariantSelect.next(h))}getSelectedVariant(s){if(!s)return;const h={id:`Variant:${s}`,fragment:Xr.Ps`
        fragment VariantSelectQuery on Variant {
          id
          name
          link
          variantAliases
          singleVariantMolecularProfileId
          singleVariantMolecularProfile {
            id
            name
            link
            molecularProfileAliases
          }
        }
      `};let O;try{O=this.apollo.client.readFragment(h)}catch(ge){console.error(ge)}if(O)return O;console.error("MpFinderForm could not resolve its Variant from the cache")}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(Xr._M))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-mp-finder"]],outputs:{cvcOnSelect:"cvcOnSelect",cvcOnVariantSelect:"cvcOnVariantSelect"},decls:2,vars:6,consts:[["nz-form","",3,"formGroup","nzLayout"],[3,"form","fields","model","options","modelChange"]],template:function(s,h){1&s&&(e.TgZ(0,"form",0)(1,"formly-form",1),e.NdJ("modelChange",function(ge){return h.modelChange(ge)}),e.qZA()()),2&s&&(e.Q6J("formGroup",h.form)("nzLayout",h.finderState.formLayout),e.xp6(),e.Q6J("form",h.form)("fields",h.config)("model",h.model)("options",h.options))},dependencies:[n._Y,n.JL,n.sg,y.T7,N.Lr],styles:["[_nghost-%COMP%]{display:block;width:100%}"],changeDetection:0}),l})();function Ju(l,v){1&l&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," The expression contains open parentheses. Please ensure that all parenthetical expressions are closed. "),e.qZA(),e.BQk())}function jl(l,v){1&l&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," Complete the expression by appending a "),e.TgZ(3,"strong"),e._uU(4,"#VID"),e.qZA(),e._uU(5," token to the incomplete boolean expression. "),e.qZA(),e.BQk())}function Ql(l,v){1&l&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," MP Expressions may not begin with an "),e.TgZ(3,"strong"),e._uU(4,"AND"),e.qZA(),e._uU(5," or "),e.TgZ(6,"strong"),e._uU(7,"OR"),e.qZA(),e._uU(8," boolean. Ensure the expression begins with a "),e.TgZ(9,"strong"),e._uU(10,"#VID"),e.qZA(),e._uU(11," or "),e.TgZ(12,"strong"),e._uU(13,"NOT #VID"),e.qZA(),e._uU(14," token. "),e.qZA(),e.BQk())}function cc(l,v){1&l&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," Molecular Profile expressions use a simple domain-specific language to specify complex MPs using boolean expressions to combine variants. These expressions may contain: "),e.qZA(),e.TgZ(3,"ul")(4,"li"),e._uU(5," Variant Tokens - "),e.TgZ(6,"strong"),e._uU(7,"#VID"),e.qZA(),e._uU(8," or "),e.TgZ(9,"strong"),e._uU(10,"NOT #VID"),e.qZA(),e._uU(11,'followed by a valid Variant ID, e.g. "#VID123" '),e.qZA(),e.TgZ(12,"li"),e._uU(13,"Boolean Tokens - "),e.TgZ(14,"strong"),e._uU(15,"AND"),e.qZA(),e._uU(16,", "),e.TgZ(17,"strong"),e._uU(18,"OR"),e.qZA()(),e.TgZ(19,"li"),e._uU(20," Parentheses - "),e.TgZ(21,"strong"),e._uU(22,"("),e.qZA(),e._uU(23," or "),e.TgZ(24,"strong"),e._uU(25,")"),e.qZA(),e._uU(26,", for grouping tokens into nested expressions "),e.qZA()(),e.TgZ(27,"p")(28,"strong"),e._uU(29,"Invalid Token"),e.qZA(),e._uU(30," errors occur if the parser encounters any text or token that does not match those listed above. "),e.qZA(),e.BQk())}function Ud(l,v){1&l&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," A single expression may not include more than one "),e.TgZ(3,"strong"),e._uU(4,"AND"),e.qZA(),e._uU(5," or "),e.TgZ(6,"strong"),e._uU(7,"OR"),e.qZA(),e._uU(8," boolean operator. To construct complex expressions, use parentheses. "),e.qZA(),e.TgZ(9,"p"),e._uU(10," For example, the expression "),e.TgZ(11,"strong"),e._uU(12,"#VID12 AND #VID2220 OR #VID456"),e.qZA(),e._uU(13," is invalid, but the expression "),e.TgZ(14,"strong"),e._uU(15,"#VID12 AND (#VID2220 OR #VID456)"),e.qZA(),e._uU(16," is valid. The parentheses create a nested expression independent of the outer expression. "),e.qZA(),e.BQk())}function Uc(l,v){1&l&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," Complete the expression by appending a "),e.TgZ(3,"strong"),e._uU(4,"#VID"),e.qZA(),e._uU(5," token to the incomplete boolean expression. "),e.qZA(),e.BQk())}function Ku(l,v){1&l&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," The expression contains a Variant ID that cannot be matched to any Variant in the CIViC database. Please re-check the Variant ID, or create a new one by following these steps: "),e.qZA(),e.TgZ(3,"ol")(4,"li"),e._uU(5,"click the 'Variant' button,"),e.qZA(),e.TgZ(6,"li"),e._uU(7,"enter a Gene name, then select a Gene"),e.qZA(),e.TgZ(8,"li"),e._uU(9,"enter the Variant name"),e.qZA(),e.TgZ(10,"li"),e._uU(11," click the 'Create Variant' button that will appear if name does not match any CIViC Variants "),e.qZA()(),e.BQk())}function Yc(l,v){1&l&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," An expression may not contain multiple instances of the same Variant. Either remove the variant or change the expression. For example, "),e.TgZ(3,"strong"),e._uU(4,"(#VID123 AND #VID456) OR (#VID123 AND #VID789)"),e.qZA(),e._uU(5,", which is invalid, is logically identical to the valid MP expression "),e.TgZ(6,"strong"),e._uU(7,"#VID123 AND (#VID456 OR #VID789)"),e.qZA(),e._uU(8,". "),e.qZA(),e.BQk())}function Gl(l,v){1&l&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," The Molecular Profile editor allows the selection or creation of complex Molecular Profiles by writing Molecular Profile Expressions. These expressions are composed with a simple language consisting of Variant tokens, boolean operators, and parentheses. For example: "),e.qZA(),e.TgZ(3,"blockquote")(4,"strong"),e._uU(5,"#VID12 AND #VID2220"),e.qZA(),e._UZ(6,"br"),e.TgZ(7,"strong"),e._uU(8,"#VID12 OR #VID2220"),e.qZA(),e._UZ(9,"br"),e.TgZ(10,"strong"),e._uU(11,"#VID12 AND NOT #VID2220"),e.qZA(),e._UZ(12,"br"),e.TgZ(13,"strong"),e._uU(14,"#VID12 AND #VID2220 AND (#VID456 OR #VID123)"),e.qZA(),e._UZ(15,"br"),e.TgZ(16,"strong"),e._uU(17,"#VID12 OR #VID2220 OR (NOT #VID456 AND #VID123)"),e.qZA(),e._UZ(18,"br"),e.qZA(),e.TgZ(19,"p")(20,"strong"),e._uU(21,"Variant Tokens"),e.qZA(),e._UZ(22,"br"),e._uU(23," Variant tokens are composed of a CIViC Variant ID prepended with "),e.TgZ(24,"strong"),e._uU(25,"#VID"),e.qZA(),e._uU(26,", and refer to specific CIViC Variants. For example, "),e.TgZ(27,"strong"),e._uU(28,"#VID12"),e.qZA(),e._uU(29," refers to "),e.TgZ(30,"strong"),e._uU(31,"BRAF V600E"),e.qZA(),e._uU(32,"; "),e.TgZ(33,"strong"),e._uU(34,"#VID2220"),e.qZA(),e._uU(35," refers to "),e.TgZ(36,"strong"),e._uU(37,"ALK FUSION"),e.qZA(),e._uU(38,". If you don\u2019t know the CIViC ID of a Variant, you can search for Variants by name using the \u2018Variant\u2019 or \u2018NOT Variant\u2019 buttons below. These interfaces can also be used to add a Variant that\u2019s not yet in CIViC. "),e.qZA(),e.TgZ(39,"p")(40,"strong"),e._uU(41,"Boolean Operators"),e.qZA(),e._UZ(42,"br"),e._uU(43," MP Expressions with more than a single variant must include boolean operators - "),e.TgZ(44,"strong"),e._uU(45,"AND"),e.qZA(),e._uU(46,", "),e.TgZ(47,"strong"),e._uU(48,"OR"),e.qZA(),e._uU(49,", and "),e.TgZ(50,"strong"),e._uU(51,"NOT"),e.qZA(),e._uU(52," - indicating their relationship. For example, the expression "),e.TgZ(53,"strong"),e._uU(54,"#VID12 AND #VID2220"),e.qZA(),e._uU(55," describes a MP that includes both "),e.TgZ(56,"strong"),e._uU(57,"BRAF V600E"),e.qZA(),e._uU(58," and "),e.TgZ(59,"strong"),e._uU(60,"ALK FUSION"),e.qZA(),e._uU(61,". "),e.qZA(),e.TgZ(62,"p")(63,"strong"),e._uU(64,"Parentheses"),e.qZA(),e._UZ(65,"br"),e._uU(66," Expressions cannot have both "),e.TgZ(67,"strong"),e._uU(68,"AND"),e.qZA(),e._uU(69," and "),e.TgZ(70,"strong"),e._uU(71,"OR"),e.qZA(),e._uU(72," operators within the same expression. To construct complex MPs that require multiple operators, one must use parentheses to create embedded expressions. "),e.qZA(),e.TgZ(73,"p")(74,"strong"),e._uU(75,"NOTE:"),e.qZA(),e._uU(76," Be sure to read the help text provided along with every alert message by hovering over 'Syntax Assistance'. "),e.qZA(),e.BQk())}let Wl=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-mp-editor-popover-help"]],inputs:{cvcErrorType:"cvcErrorType"},decls:11,vars:9,consts:[[1,"help-content"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"]],template:function(s,h){1&s&&(e.TgZ(0,"div",0),e.ynx(1,1),e.YNc(2,Ju,3,0,"ng-container",2)(3,jl,6,0,"ng-container",2)(4,Ql,15,0,"ng-container",2)(5,cc,31,0,"ng-container",2)(6,Ud,17,0,"ng-container",2)(7,Uc,6,0,"ng-container",2)(8,Ku,12,0,"ng-container",2)(9,Yc,9,0,"ng-container",2)(10,Gl,77,0,"ng-container",3),e.BQk(),e.qZA()),2&s&&(e.xp6(),e.Q6J("ngSwitch",h.cvcErrorType),e.xp6(),e.Q6J("ngSwitchCase","incompleteExpression"),e.xp6(),e.Q6J("ngSwitchCase","incompleteNOT"),e.xp6(),e.Q6J("ngSwitchCase","initialBoolean"),e.xp6(),e.Q6J("ngSwitchCase","invalidToken"),e.xp6(),e.Q6J("ngSwitchCase","multipleBoolean"),e.xp6(),e.Q6J("ngSwitchCase","trailingBoolean"),e.xp6(),e.Q6J("ngSwitchCase","unknownVariant"),e.xp6(),e.Q6J("ngSwitchCase","identicalVariants"))},dependencies:[u.RF,u.n9,u.ED],styles:[".help-content[_ngcontent-%COMP%]{max-width:500px}blockquote[_ngcontent-%COMP%]{margin-left:1em}"]}),l})();var ps;const w1=["expressionEditor"];function qu(l,v){1&l&&e._uU(0,"Added new Molecular Profile")}function jc(l,v){if(1&l&&e._UZ(0,"cvc-mp-tag-name",24),2&l){const s=e.oxw().ngrxLet;e.Q6J("nameSegments",s)}}function Yd(l,v){1&l&&(e.TgZ(0,"span",25),e._uU(1," Valid Molecular Profile expressions will be previewed here. "),e.qZA())}function Zl(l,v){if(1&l&&(e.ynx(0),e.YNc(1,jc,1,1,"cvc-mp-tag-name",22)(2,Yd,2,0,"span",23),e.BQk()),2&l){const s=v.ngrxLet;e.xp6(),e.Q6J("ngIf",s),e.xp6(),e.Q6J("ngIf",!s)}}function Jl(l,v){1&l&&e._UZ(0,"cvc-mp-editor-popover-help")}function hs(l,v){if(1&l&&(e.TgZ(0,"button",28),e._UZ(1,"span",29),e._uU(2," GETTING STARTED "),e.qZA(),e.YNc(3,Jl,1,0,"ng-template",null,30,e.W1O)),2&l){const s=e.MAs(4);e.Q6J("nzPopoverContent",s)}}function ka(l,v){if(1&l&&(e.ynx(0),e._UZ(1,"nz-alert",26),e.YNc(2,hs,5,1,"ng-template",null,27,e.W1O),e.BQk()),2&l){const s=v.ngIf,h=e.MAs(3);e.xp6(),e.Q6J("nzMessage",s)("nzAction",h)}}function Kl(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"button",34),e.NdJ("click",function(){e.CHM(s);const O=e.oxw(3).ngrxLet,ge=e.oxw();return e.KtG(ge.cvcOnSelect.next(O))}),e._uU(1," Select this MP "),e.qZA()}}function jd(l,v){if(1&l&&(e._uU(0," Molecular Profile "),e.TgZ(1,"strong"),e._uU(2),e.qZA(),e._uU(3," found. ")),2&l){const s=e.oxw(3).ngrxLet;e.xp6(2),e.Oqu(s.name)}}function Xu(l,v){if(1&l&&(e.ynx(0),e._UZ(1,"nz-alert",31),e.YNc(2,Kl,2,0,"ng-template",null,32,e.W1O)(4,jd,4,1,"ng-template",null,33,e.W1O),e.BQk()),2&l){const s=e.MAs(3),h=e.MAs(5);e.xp6(),e.Q6J("nzMessage",h)("nzAction",s)}}function Ra(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"button",37),e.NdJ("click",function(){e.CHM(s);const O=e.oxw(4);return e.KtG(O.onCreateNewMp$.next())}),e._uU(1," Create New MP "),e.qZA()}}function Va(l,v){1&l&&e._uU(0," Molecular Profile not found, create it? ")}function Qd(l,v){if(1&l&&(e.ynx(0),e._UZ(1,"nz-alert",31),e.YNc(2,Ra,2,0,"ng-template",null,35,e.W1O)(4,Va,1,0,"ng-template",null,36,e.W1O),e.BQk()),2&l){const s=e.MAs(3),h=e.MAs(5);e.xp6(),e.Q6J("nzMessage",h)("nzAction",s)}}function Gd(l,v){if(1&l&&(e.ynx(0),e.YNc(1,Xu,6,2,"ng-container",6)(2,Qd,6,2,"ng-container",6),e.BQk()),2&l){const s=e.oxw().ngrxLet;e.xp6(),e.Q6J("ngIf",void 0!==s),e.xp6(),e.Q6J("ngIf",void 0===s)}}function ed(l,v){if(1&l&&(e.ynx(0),e.YNc(1,Gd,3,2,"ng-container",6),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.BQk()),2&l){const s=e.oxw();e.xp6(),e.Q6J("ngIf",!e.lcZ(2,1,s.expressionError$)&&!e.lcZ(3,3,s.expressionMessage$))}}function Qc(l,v){if(1&l&&(e.TgZ(0,"button",40),e._UZ(1,"span",29),e._uU(2," SYNTAX ASSISTANCE "),e.qZA()),2&l){const s=e.oxw().helpContent;e.Q6J("nzPopoverContent",s)}}function Wd(l,v){if(1&l&&(e._UZ(0,"nz-alert",38),e.YNc(1,Qc,3,1,"ng-template",null,39,e.W1O)),2&l){const s=v.$implicit,h=e.MAs(2);e.Q6J("nzMessage",s.errorMessage)("nzAction",h)}}function Gc(l,v){1&l&&e.GkF(0)}function td(l,v){1&l&&e._UZ(0,"cvc-mp-editor-popover-help",46)}const Gs=(l,v)=>({$implicit:l,helpContent:v});function nd(l,v){if(1&l&&(e.ynx(0),e.YNc(1,Gc,1,0,"ng-container",44)(2,td,1,0,"ng-template",null,45,e.W1O),e.BQk()),2&l){const s=e.MAs(3),h=e.oxw().ngIf;e.oxw();const O=e.MAs(14);e.xp6(),e.Q6J("ngTemplateOutlet",O)("ngTemplateOutletContext",e.WLB(2,Gs,h,s))}}function od(l,v){1&l&&e.GkF(0)}function Zd(l,v){1&l&&e._UZ(0,"cvc-mp-editor-popover-help",48)}function id(l,v){if(1&l&&(e.ynx(0),e.YNc(1,od,1,0,"ng-container",44)(2,Zd,1,0,"ng-template",null,47,e.W1O),e.BQk()),2&l){const s=e.MAs(3),h=e.oxw().ngIf;e.oxw();const O=e.MAs(14);e.xp6(),e.Q6J("ngTemplateOutlet",O)("ngTemplateOutletContext",e.WLB(2,Gs,h,s))}}function Jd(l,v){1&l&&e.GkF(0)}function Kd(l,v){1&l&&e._UZ(0,"cvc-mp-editor-popover-help",50)}function P1(l,v){if(1&l&&(e.ynx(0),e.YNc(1,Jd,1,0,"ng-container",44)(2,Kd,1,0,"ng-template",null,49,e.W1O),e.BQk()),2&l){const s=e.MAs(3),h=e.oxw().ngIf;e.oxw();const O=e.MAs(14);e.xp6(),e.Q6J("ngTemplateOutlet",O)("ngTemplateOutletContext",e.WLB(2,Gs,h,s))}}function rd(l,v){1&l&&e.GkF(0)}function sd(l,v){1&l&&e._UZ(0,"cvc-mp-editor-popover-help",52)}function es(l,v){if(1&l&&(e.ynx(0),e.YNc(1,rd,1,0,"ng-container",44)(2,sd,1,0,"ng-template",null,51,e.W1O),e.BQk()),2&l){const s=e.MAs(3),h=e.oxw().ngIf;e.oxw();const O=e.MAs(14);e.xp6(),e.Q6J("ngTemplateOutlet",O)("ngTemplateOutletContext",e.WLB(2,Gs,h,s))}}function ql(l,v){1&l&&e.GkF(0)}function Ws(l,v){1&l&&e._UZ(0,"cvc-mp-editor-popover-help",54)}function Wc(l,v){if(1&l&&(e.ynx(0),e.YNc(1,ql,1,0,"ng-container",44)(2,Ws,1,0,"ng-template",null,53,e.W1O),e.BQk()),2&l){const s=e.MAs(3),h=e.oxw().ngIf;e.oxw();const O=e.MAs(14);e.xp6(),e.Q6J("ngTemplateOutlet",O)("ngTemplateOutletContext",e.WLB(2,Gs,h,s))}}function m(l,v){1&l&&e.GkF(0)}function at(l,v){1&l&&e._UZ(0,"cvc-mp-editor-popover-help",56)}function ie(l,v){if(1&l&&(e.ynx(0),e.YNc(1,m,1,0,"ng-container",44)(2,at,1,0,"ng-template",null,55,e.W1O),e.BQk()),2&l){const s=e.MAs(3),h=e.oxw().ngIf;e.oxw();const O=e.MAs(14);e.xp6(),e.Q6J("ngTemplateOutlet",O)("ngTemplateOutletContext",e.WLB(2,Gs,h,s))}}function ho(l,v){1&l&&e.GkF(0)}function Ui(l,v){1&l&&(e.ynx(0),e._UZ(1,"cvc-mp-editor-popover-help",58),e.BQk())}function Xl(l,v){1&l&&(e.ynx(0),e._UZ(1,"cvc-mp-editor-popover-help",59),e.BQk())}function Ps(l,v){if(1&l&&e.YNc(0,Ui,2,0,"ng-container",6)(1,Xl,2,0,"ng-container",6),2&l){const s=e.oxw(2).ngIf;e.Q6J("ngIf",s.errorMessage.split(" ").includes("multiple")),e.xp6(),e.Q6J("ngIf",s.errorMessage.split(" ").includes("found."))}}function eu(l,v){if(1&l&&(e.ynx(0),e.YNc(1,ho,1,0,"ng-container",44)(2,Ps,2,2,"ng-template",null,57,e.W1O),e.BQk()),2&l){const s=e.MAs(3),h=e.oxw().ngIf;e.oxw();const O=e.MAs(14);e.xp6(),e.Q6J("ngTemplateOutlet",O)("ngTemplateOutletContext",e.WLB(2,Gs,h,s))}}function Dp(l,v){if(1&l&&(e.ynx(0),e.TgZ(1,"pre"),e._uU(2),e.ALo(3,"json"),e.qZA(),e.BQk()),2&l){const s=e.oxw().ngIf;e.xp6(2),e.hij("              ",e.lcZ(3,1,s),"\n            ")}}function qd(l,v){if(1&l&&(e.ynx(0)(1,41),e.YNc(2,nd,4,5,"ng-container",42)(3,id,4,5,"ng-container",42)(4,P1,4,5,"ng-container",42)(5,es,4,5,"ng-container",42)(6,Wc,4,5,"ng-container",42)(7,ie,4,5,"ng-container",42)(8,eu,4,5,"ng-container",42)(9,Dp,4,3,"ng-container",43),e.BQk()()),2&l){const s=v.ngIf;e.xp6(),e.Q6J("ngSwitch",s.errorType),e.xp6(),e.Q6J("ngSwitchCase","invalidToken"),e.xp6(),e.Q6J("ngSwitchCase","trailingBoolean"),e.xp6(),e.Q6J("ngSwitchCase","initialBoolean"),e.xp6(),e.Q6J("ngSwitchCase","multipleBoolean"),e.xp6(),e.Q6J("ngSwitchCase","incompleteExpression"),e.xp6(),e.Q6J("ngSwitchCase","incompleteNOT"),e.xp6(),e.Q6J("ngSwitchCase","queryError")}}function Ao(l,v){1&l&&(e.TgZ(0,"span",25),e._uU(1," Append: "),e.qZA())}function I1(l,v){if(1&l&&(e.TgZ(0,"button",60)(1,"strong"),e._uU(2,"Variant"),e.qZA()()),2&l){e.oxw();const s=e.MAs(37);e.Q6J("nzPopoverContent",s)}}function A1(l,v){if(1&l&&(e.TgZ(0,"button",61)(1,"strong"),e._uU(2,"NOT Variant"),e.qZA()()),2&l){e.oxw();const s=e.MAs(39);e.Q6J("nzPopoverContent",s)}}function Xd(l,v){1&l&&(e.TgZ(0,"span",62),e._uU(1," | "),e.qZA())}function F1(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"button",63),e.NdJ("click",function(){e.CHM(s);const O=e.oxw();return e.KtG(O.onAppendInput$.next("AND"))}),e.TgZ(1,"strong"),e._uU(2,"AND"),e.qZA()()}}function Zc(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"button",63),e.NdJ("click",function(){e.CHM(s);const O=e.oxw();return e.KtG(O.onAppendInput$.next("OR"))}),e.TgZ(1,"strong"),e._uU(2,"OR"),e.qZA()()}}function ma(l,v){1&l&&(e.TgZ(0,"span",62),e._uU(1," | "),e.qZA())}function e1(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"button",63),e.NdJ("click",function(){e.CHM(s);const O=e.oxw();return e.KtG(O.onAppendInput$.next("("))}),e.TgZ(1,"strong"),e._uU(2,"("),e.qZA()()}}function Is(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"button",63),e.NdJ("click",function(){e.CHM(s);const O=e.oxw();return e.KtG(O.onAppendInput$.next(")"))}),e.TgZ(1,"strong"),e._uU(2,")"),e.qZA()()}}const Ba=()=>[6,8];function fs(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"div",64)(1,"nz-row",2)(2,"nz-col",3)(3,"p",65),e._uU(4," Select a Gene and Variant to append its #VID. "),e.qZA()(),e.TgZ(5,"nz-col",3)(6,"cvc-mp-finder",66),e.NdJ("cvcOnVariantSelect",function(O){e.CHM(s);const ge=e.oxw();return e.KtG(ge.onVariantSelect$.next({variant:O,prependNot:!1}))}),e.qZA()()()()}2&l&&(e.xp6(),e.Q6J("nzGutter",e.DdM(1,Ba)))}function Zs(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"div",64)(1,"nz-row",2)(2,"nz-col",3)(3,"p",65),e._uU(4," Select a Gene and Variant to append its #VID, prepended with NOT boolean. "),e.qZA()(),e.TgZ(5,"nz-col",3)(6,"cvc-mp-finder",66),e.NdJ("cvcOnVariantSelect",function(O){e.CHM(s);const ge=e.oxw();return e.KtG(ge.onVariantSelect$.next({variant:O,prependNot:!0}))}),e.qZA()()()()}2&l&&(e.xp6(),e.Q6J("nzGutter",e.DdM(1,Ba)))}function tu(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"nz-list-item")(1,"nz-list-item-meta")(2,"nz-list-item-meta-title"),e._UZ(3,"cvc-entity-tag",70),e.qZA(),e.TgZ(4,"nz-list-item-meta-description"),e._uU(5),e.qZA()(),e.TgZ(6,"ul",71)(7,"nz-list-item-action")(8,"button",72),e.NdJ("click",function(){const ge=e.CHM(s).$implicit,mt=e.oxw(2);return e.KtG(mt.onSelectExample$.next(ge))}),e._uU(9," Select "),e.qZA()()()()}if(2&l){const s=v.$implicit;e.xp6(3),e.Q6J("cvcLinkableEntity",s.mp),e.xp6(2),e.hij(" ",s.description," ")}}function ji(l,v){if(1&l&&(e.TgZ(0,"div",67)(1,"nz-list",68),e.YNc(2,tu,10,2,"nz-list-item",69),e.qZA()()),2&l){const s=e.oxw();e.xp6(2),e.Q6J("ngForOf",s.exampleExpressions)}}const Li=l=>({active:l});let As=((ps=class{constructor(v,s,h,O,ge){this.previewMpGql=v,this.createMolecularProfileGql=s,this.mpEditorPrepopulate=h,this.networkErrorService=O,this.viewerService=ge,this.cvcOnSelect=new e.vpe,this.expressionMessages={initial:"Use the editor below to construct a molecular profile."},this.exampleExpressions=[{mp:{__typename:"MolecularProfile",id:9999,name:"BRAF V600E AND EGFR L858R AND EGFR T790M"},expression:"#VID12 AND #VID33 AND #VID34",description:"BRAF V600E, EGFR L858R, and EGFR T790M must all be observed."},{mp:{__typename:"MolecularProfile",id:9999,name:"BRAF V600E AND NOT EGFR L858R"},expression:"#VID12 AND NOT #VID33",description:"BRAF V600E must be observed and EGFR L858R must be absent."},{mp:{__typename:"MolecularProfile",id:9999,name:"BRAF V600E OR EGFR L858R OR EGFR T790M"},expression:"#VID12 OR #VID33 OR #VID34",description:"Either BRAF V600E, or EGFR L858R, or EGFR T790M must be observed."},{mp:{__typename:"MolecularProfile",id:9999,name:"BRAF V600E AND (EGFR L858R OR EGFR T790M)"},expression:"#VID12 AND (#VID33 OR #VID34)",description:"BRAF V600E must be observed and either EGFR L858R or EGFR T790M must be observed."},{mp:{__typename:"MolecularProfile",id:9999,name:"NOT KIT D816V"},expression:"NOT #VID4353",description:"KIT D816V must be absent."}],this.createMolecularProfileMutator=new xo.U(this.networkErrorService),this.onInputChange$=new Ve.X(void 0),this.onAppendInput$=new x.x,this.onVariantSelect$=new x.x,this.onCreateNewMp$=new x.x,this.onSelectExample$=new x.x,this.inputValue$=new Ve.X(""),this.expressionError$=new Ve.X(void 0),this.expressionHelp$=new Ve.X(void 0),this.expressionMessage$=new Ve.X(this.expressionMessages.initial),this.expressionSegment$=new x.x,this.existingMp$=new x.x,this.viewer$=this.viewerService.viewer$,this.mostRecentOrg$=this.viewer$.pipe((0,ko.j)("mostRecentOrg"))}ngAfterViewInit(){this.mostRecentOrg$.pipe((0,ln.t)(this)).subscribe(v=>{this.mostRecentOrgId=v?.id}),this.onInputChange$.pipe((0,Mo.b)(250),(0,Tt.b)(v=>{v||this.expressionSegment$.next(void 0)}),(0,yt.h)(li.ep),(0,Tt.b)(v=>{0===v.length&&(this.expressionMessage$.next(this.expressionMessages.initial),this.expressionError$.next(void 0))}),(0,yt.h)(v=>v.length>0),(0,yt.h)(v=>" "!==v[v.length-1]),(0,j.U)(v=>{let s=$l(v);return"errorMessage"in s?s:this.previewQueryRef.refetch({mpStructure:s})}),(0,ln.t)(this)).subscribe(v=>{if(this.isMpParseError(v)){const s=v;this.expressionMessage$.next(void 0),this.expressionError$.next(s),this.expressionSegment$.next(void 0)}else v.then(({data:h,errors:O})=>{if(O)this.expressionMessage$.next(void 0),this.expressionError$.next({errorType:"queryError",errorMessage:O.map(ge=>ge.message).join("\n")}),this.expressionSegment$.next(void 0);else{this.expressionSegment$.next(h.previewMolecularProfileName.segments),this.expressionMessage$.next(void 0),this.expressionError$.next(void 0);this.existingMp$.next(h.previewMolecularProfileName.existingMolecularProfile||void 0)}})}),this.onAppendInput$.pipe((0,ln.t)(this)).subscribe(v=>{if(this.expressionEditor){const s=this.expressionEditor.nativeElement,O=`${s.value}${/\s+$/.test(v)?v:" "+v}`;s.value=O,this.inputValue$.next(O),this.onInputChange$.next(O)}}),this.onSelectExample$.pipe((0,ln.t)(this)).subscribe(v=>{this.expressionEditor&&(this.expressionEditor.nativeElement.value=v.expression,this.inputValue$.next(v.expression),this.onInputChange$.next(v.expression))}),this.onVariantSelect$.pipe((0,ci.M)(this.onInputChange$),(0,j.U)(([v,s])=>{const h=`${v.prependNot?"NOT ":""}#VID${v.variant.id}`;return s&&0!=s.trim().length?`${s.trim()} ${h}`:h}),(0,ln.t)(this)).subscribe(v=>{this.inputValue$.next(v),this.onInputChange$.next(v)}),this.previewQueryRef=this.previewMpGql.watch({}),this.previewMpName$=this.previewQueryRef.valueChanges.pipe((0,ko.j)("data","previewMolecularProfileName"),(0,yt.h)(li.ep),(0,j.U)(v=>v.segments),(0,ln.t)(this)),this.previewMpAlreadyExists$=this.previewQueryRef.valueChanges.pipe((0,ko.j)("data","previewMolecularProfileName"),(0,yt.h)(li.ep),(0,j.U)(v=>v.existingMolecularProfile),(0,ln.t)(this)),this.previewDeprecatedVariants$=this.previewQueryRef.valueChanges.pipe((0,ko.j)("data","previewMolecularProfileName"),(0,yt.h)(li.ep),(0,j.U)(v=>v.deprecatedVariants),(0,ln.t)(this)),this.onCreateNewMp$.pipe((0,ci.M)(this.onInputChange$),(0,ln.t)(this)).subscribe(([v,s])=>{if(!s||0===s.length)return;let h=$l(s);"errorMessage"in h||(this.state=this.createMolecularProfileMutator.mutate(this.createMolecularProfileGql,{mpStructure:h,organizationId:this.mostRecentOrgId},{},O=>{setTimeout(()=>{O.createMolecularProfile&&this.cvcOnSelect.next(O.createMolecularProfile.molecularProfile)},1e3)}))})}isMpParseError(v){return void 0!==v.errorMessage}prepopulateMp(v){if(!v)return this.expressionSegment$.next(void 0),this.expressionMessage$.next(this.expressionMessages.initial),void this.inputValue$.next("");$c(this.mpEditorPrepopulate.fetch({mpId:v},{fetchPolicy:"cache-first"})).then(({data:s})=>{if(!s?.molecularProfile?.id)return void console.error(`MpExpressionEditor could not fetch MolecularProfile:${v} to prepolate editor fields.`);const h=s.molecularProfile.rawName.replace(/#GID(\d+)/g,"").trim();this.inputValue$.next(h),this.onInputChange$.next(h)})}ngOnChanges(v){v.cvcPrepopulateWithId&&this.prepopulateMp(v.cvcPrepopulateWithId.currentValue)}}).\u0275fac=function(v){return new(v||ps)(e.Y36(Hn.mki),e.Y36(Hn.zpu),e.Y36(Hn.vjc),e.Y36(si.Y),e.Y36(sc.a))},ps.\u0275cmp=e.Xpm({type:ps,selectors:[["cvc-mp-expression-editor"]],viewQuery:function(v,s){if(1&v&&e.Gf(w1,5),2&v){let h;e.iGM(h=e.CRH())&&(s.expressionEditor=h.first)}},inputs:{cvcPrepopulateWithId:"cvcPrepopulateWithId"},outputs:{cvcOnSelect:"cvcOnSelect"},features:[e.TTD],decls:42,vars:23,consts:[["entityType","Molecular Profile",3,"mutationState","successMessage"],["success",""],[3,"nzGutter"],["nzSpan","24"],[1,"expression-preview",3,"ngClass"],[4,"ngrxLet"],[4,"ngIf"],["errorAlert",""],["nz-input","","rows","1","placeholder","Enter or edit a Molecular Expression here.",2,"width","100%",3,"ngModel","ngModelChange"],["expressionEditor",""],[1,"btn-row"],["nzFlex","80px"],["nzBlock","","nz-button","","nzType","primary","nzShape","round","nzSize","small","nz-popover","","nzPopoverTitle","Select a Profile to view its expression","nzPopoverTrigger","click","nzPopoverPlacement","bottomLeft",3,"nzPopoverContent"],["nzFlex","auto",2,"text-align","right"],["nz-typography","","nzType","secondary",4,"nzSpaceItem"],["type","button","nz-button","","nz-popover","","nzPopoverTitle","Append Variant #VID","nzPopoverTrigger","click","nzSize","small","nzShape","round","nzType","primary","nzPopoverPlacement","bottom",3,"nzPopoverContent",4,"nzSpaceItem"],["type","button","nz-button","","nz-popover","","nzPopoverTitle","Append Variant NOT #VID","nzPopoverTrigger","click","nzSize","small","nzShape","round","nzType","primary","nzPopoverPlacement","bottom",3,"nzPopoverContent",4,"nzSpaceItem"],["class","btn-divider",4,"nzSpaceItem"],["type","button","nz-button","","nzType","primary","nzSize","small","nzShape","round",3,"click",4,"nzSpaceItem"],["appendVariant",""],["appendNotVariant",""],["expressionExamples",""],[3,"nameSegments",4,"ngIf"],["nz-typography","","nzType","secondary",4,"ngIf"],[3,"nameSegments"],["nz-typography","","nzType","secondary"],["nzType","info","nzShowIcon","",3,"nzMessage","nzAction"],["messageAction",""],["type","button","nz-button","","nzType","dashed","nzSize","small","nzShape","round","nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverContent"],["nz-icon","","nzType","question-circle","nzTheme","fill"],["gettingStartedHelp",""],["nzType","success","nzShowIcon","",3,"nzMessage","nzAction"],["selectAction",""],["foundMessage",""],["type","button","nz-button","","nzType","primary","nzSize","small","nzBlock","",3,"click"],["createAction",""],["createMessage",""],["type","button","nz-button","","nzSize","small","nzType","primary","nzBlock","",3,"click"],["nzType","error","nzShowIcon","",3,"nzMessage","nzAction"],["errorAction",""],["nz-button","","nzDanger","","nzType","text","nzSize","small","nzShape","round","nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverContent"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["invalidTokenHelp",""],["cvcErrorType","invalidToken"],["trailingBooleanHelp",""],["cvcErrorType","trailingBoolean"],["initialBooleanHelp",""],["cvcErrorType","initialBoolean"],["multipleBooleanHelp",""],["cvcErrorType","multipleBoolean"],["incompleteExpressionHelp",""],["cvcErrorType","incompleteExpression"],["incompleteNOTHelp",""],["cvcErrorType","incompleteNOT"],["queryErrorHelp",""],["cvcErrorType","identicalVariants"],["cvcErrorType","unknownVariant"],["type","button","nz-button","","nz-popover","","nzPopoverTitle","Append Variant #VID","nzPopoverTrigger","click","nzSize","small","nzShape","round","nzType","primary","nzPopoverPlacement","bottom",3,"nzPopoverContent"],["type","button","nz-button","","nz-popover","","nzPopoverTitle","Append Variant NOT #VID","nzPopoverTrigger","click","nzSize","small","nzShape","round","nzType","primary","nzPopoverPlacement","bottom",3,"nzPopoverContent"],[1,"btn-divider"],["type","button","nz-button","","nzType","primary","nzSize","small","nzShape","round",3,"click"],[1,"append-popover-contents"],["nz-typography","","nzType","secondary",2,"margin","0","padding-bottom","2px"],[3,"cvcOnVariantSelect"],[2,"min-width","525px","margin","-8px -12px"],["nzSize","small","nzItemLayout","horizontal"],[4,"ngFor","ngForOf"],[3,"cvcLinkableEntity"],["nz-list-item-actions",""],["type","button","nz-button","","nzType","primary","nzSize","small",3,"click"]],template:function(v,s){if(1&v&&(e.TgZ(0,"cvc-form-submission-status-display",0),e.YNc(1,qu,1,0,"ng-template",null,1,e.W1O),e.TgZ(3,"nz-row",2)(4,"nz-col",3)(5,"div",4),e.ALo(6,"ngrxPush"),e.YNc(7,Zl,3,2,"ng-container",5),e.ALo(8,"ngrxPush"),e.qZA()(),e.TgZ(9,"nz-col",3),e.YNc(10,ka,4,2,"ng-container",6),e.ALo(11,"ngrxPush"),e.YNc(12,ed,4,5,"ng-container",5)(13,Wd,3,2,"ng-template",null,7,e.W1O)(15,qd,10,8,"ng-container",6),e.ALo(16,"ngrxPush"),e.qZA(),e.TgZ(17,"nz-col",3)(18,"textarea",8,9),e.NdJ("ngModelChange",function(O){return s.onInputChange$.next(O)}),e.ALo(20,"ngrxPush"),e.qZA()()(),e.TgZ(21,"nz-row",10)(22,"nz-col",11)(23,"button",12),e._uU(24," Examples "),e.qZA()(),e.TgZ(25,"nz-col",13)(26,"nz-space"),e.YNc(27,Ao,2,0,"span",14)(28,I1,3,1,"button",15)(29,A1,3,1,"button",16)(30,Xd,2,0,"span",17)(31,F1,3,0,"button",18)(32,Zc,3,0,"button",18)(33,ma,2,0,"span",17)(34,e1,3,0,"button",18)(35,Is,3,0,"button",18),e.qZA()(),e.YNc(36,fs,7,2,"ng-template",null,19,e.W1O)(38,Zs,7,2,"ng-template",null,20,e.W1O)(40,ji,3,1,"ng-template",null,21,e.W1O),e.qZA()()),2&v){const h=e.MAs(2),O=e.MAs(41);e.Q6J("mutationState",s.state)("successMessage",h),e.xp6(3),e.Q6J("nzGutter",e.DdM(20,Ba)),e.xp6(2),e.Q6J("ngClass",e.VKq(21,Li,void 0!==e.lcZ(6,10,s.expressionSegment$))),e.xp6(2),e.Q6J("ngrxLet",e.lcZ(8,12,s.expressionSegment$)),e.xp6(3),e.Q6J("ngIf",e.lcZ(11,14,s.expressionMessage$)),e.xp6(2),e.Q6J("ngrxLet",s.existingMp$),e.xp6(3),e.Q6J("ngIf",e.lcZ(16,16,s.expressionError$)),e.xp6(3),e.Q6J("ngModel",e.lcZ(20,18,s.inputValue$)),e.xp6(5),e.Q6J("nzPopoverContent",O)}},dependencies:[u.mk,u.sg,u.O5,u.tP,u.RF,u.n9,u.ED,n.Fj,n.JJ,n.On,lo.eJ,Nt.r,uo.ix,de.w,ce.dQ,ee.Ls,B.Zp,H.t3,H.SK,st.NU,st.$1,Ce.ZU,Xn.lU,lr.n_,lr.AA,lr.yi,lr.IO,lr.Pb,lr.nk,lr.KC,ni.F,ac.C,nn.J,La,Wl,u.Ts,lo.fM],styles:["[_nghost-%COMP%]{display:block;background-color:#f6f6f6;border:1px solid #dedede;border-radius:4px;padding:8px}.expression-preview[_ngcontent-%COMP%]{width:100%;padding:8px;border:1px solid #dedede;border-radius:4px}.expression-preview.active[_ngcontent-%COMP%]{background-color:#fff}.append-popover-contents[_ngcontent-%COMP%]{min-width:450px}.help-content[_ngcontent-%COMP%]{max-width:500px}.btn-row[_ngcontent-%COMP%]{margin-top:10px;flex-wrap:nowrap}.btn-row[_ngcontent-%COMP%]   .btn-divider[_ngcontent-%COMP%]{color:#aaa}"],changeDetection:0}),ps);As=(0,V.gn)([(0,ln.c)()],As);const Op=["optionTemplates"];function nu(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"cvc-mp-finder",11),e.NdJ("cvcOnSelect",function(O){e.CHM(s);const ge=e.oxw(2);return e.KtG(ge.onMpSelect$.next(O))}),e.qZA()}}function N1(l,v){1&l&&(e.TgZ(0,"div",12),e._uU(1," \xa0 "),e.TgZ(2,"span",13)(3,"i"),e._uU(4,"Select or create a Molecular Profile with the expression editor "),e.qZA()()())}function L1(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"div",14)(1,"div",15)(2,"cvc-entity-select",16),e.NdJ("cvcOnSearch",function(O){e.CHM(s);const ge=e.oxw(2);return e.KtG(ge.onSearch$.next(O))})("cvcOnModelChange",function(O){e.CHM(s);const ge=e.oxw(2);return e.KtG(ge.props.change&&ge.props.change(ge.field,O))}),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.qZA()()()}if(2&l){const s=e.oxw(2),h=e.MAs(13);e.xp6(2),e.Q6J("cvcSelectMode",s.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",h)("cvcFormControl",s.formControl)("cvcFormlyAttributes",s.field)("cvcEntityName",s.props.entityName)("cvcPlaceholder",s.props.placeholder)("cvcResults",e.lcZ(3,15,s.result$))("cvcDisabled",s.props.disabled)("cvcAllowClear",!1)("cvcOptions",e.lcZ(4,17,s.selectOption$))("cvcShowError",s.showError)("cvcLoading",e.lcZ(5,19,s.isLoading$))("cvcBorderless",!0)("cvcSuffixIcon",null)("cvcShowArrow",!1)}}function k1(l,v){if(1&l&&(e.ynx(0),e.YNc(1,nu,1,0,"cvc-mp-finder",8)(2,N1,5,0,"div",9)(3,L1,6,21,"div",10),e.BQk()),2&l){const s=v.ngrxLet,h=e.oxw();e.xp6(),e.Q6J("ngIf",s.showFinder&&!h.editorOpen),e.xp6(),e.Q6J("ngIf",h.editorOpen),e.xp6(),e.Q6J("ngIf",s.showSelect&&!h.editorOpen)}}function wp(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"nz-col",17)(1,"cvc-mp-expression-editor",18),e.NdJ("cvcOnSelect",function(O){e.CHM(s);const ge=e.oxw();return e.KtG(ge.onMpSelect$.next(O))}),e.ALo(2,"ngrxPush"),e.qZA()()}if(2&l){const s=e.oxw();e.xp6(),e.Q6J("cvcPrepopulateWithId",e.lcZ(2,1,s.onMpId$))}}function Js(l,v){if(1&l&&(e.ynx(0),e.TgZ(1,"em"),e._UZ(2,"span",25),e.ALo(3,"highlightTypeahead"),e.qZA(),e.BQk()),2&l){const s=e.oxw(2).$implicit,h=e.oxw().ngrxLet;e.xp6(2),e.Q6J("innerHtml",e.xi3(3,1,s.molecularProfileAliases.join(", "),h),e.oJD)}}function R1(l,v){1&l&&e._uU(0,"--")}function Jc(l,v){if(1&l&&(e._UZ(0,"cvc-entity-tag",21),e.TgZ(1,"span",22),e._uU(2," Aliases: "),e.YNc(3,Js,4,4,"ng-container",23)(4,R1,1,0,"ng-template",null,24,e.W1O),e.qZA()),2&l){const s=e.MAs(5),h=e.oxw().$implicit,O=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",h.__typename+":"+h.id)("cvcEmphasize",O),e.xp6(3),e.Q6J("ngIf",h.molecularProfileAliases.length>0)("ngIfElse",s)}}function Pp(l,v){1&l&&(e.ynx(0),e.YNc(1,Jc,6,5,"ng-template",null,20,e.W1O),e.BQk())}function ad(l,v){if(1&l&&(e.ynx(0),e.YNc(1,Pp,3,0,"ng-container",19),e.ALo(2,"ngrxPush"),e.BQk()),2&l){const s=e.oxw();e.xp6(),e.Q6J("ngForOf",e.lcZ(2,1,s.result$))}}function t1(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"div",26)(1,"cvc-entity-tag",27),e.NdJ("cvcOnClose",function(){const ge=e.CHM(s).$implicit,mt=e.oxw();return e.KtG(mt.onTagClose$.next(ge.nzValue))}),e.qZA()()}if(2&l){const s=v.$implicit,h=e.oxw();e.xp6(),e.Q6J("cvcCacheId","MolecularProfile:"+s.nzValue)("cvcContext",h.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",h.props.isMultiSelect?"default":"closeable")}}const V1=()=>[8,12],cd=(l,v)=>({show:l,hide:v}),ld=Vo(No(),zi());let B1=(()=>{class l extends ld{constructor(s,h,O,ge){super(),this.taq=s,this.tq=h,this.changeDetectorRef=O,this.apollo=ge,this.editorOpen=!1,this.defaultOptions={props:{label:"Molecular Profile",placeholder:"Search Molecular Profiles",tooltip:"A single variant (Simple Molecular Profile) or a combination of variants (Complex Molecular Profile) relevant to the curated assertion.",isMultiSelect:!1,description:"Select a Gene and Variant to specify a simple Molecular Profile.",entityName:{singular:"Molecular Profile",plural:"Molecular Profiles"},minSearchStrLength:1}},this.onMpSelect$=new Ve.X(void 0),this.onMpId$=new Go.t,this.onShowExpClick$=new x.x,this.showExp$=this.onShowExpClick$.pipe((0,qr.R)((mt,Tn)=>!mt,!1),(0,Tt.b)(mt=>this.editorOpen=mt)),this.selectDisplay$=new Ve.X({showFinder:!0,showSelect:!1})}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.initialDescription=this.props.description,this.onValueChange$.pipe((0,ln.t)(this)).subscribe(s=>{const h=void 0!==s;this.selectDisplay$.next({showFinder:!h,showSelect:h}),this.onMpId$.next(s),this.props.description=s?void 0:this.initialDescription}),this.onMpSelect$.pipe((0,ln.t)(this)).subscribe(s=>{s?(this.selectOption$.next([{label:s.name,value:s.id}]),this.editorOpen&&this.onShowExpClick$.next(),this.cdr.detectChanges(),this.field.formControl.setValue(s.id),this.field.formControl.markAsTouched()):this.selectDisplay$.next({showFinder:!0,showSelect:!1})})}configureStateConnections(){}getTypeaheadVarsFn(s,h){return{name:s,geneId:h}}getTypeaheadResultsFn(s){return s.data.molecularProfiles.nodes}getTagQueryVarsFn(s){return{molecularProfileId:s}}getTagQueryResultsFn(s){return s.data.molecularProfile}getSelectedItemOptionFn(s){return{value:s.id,label:s.name}}getSelectOptionsFn(s,h){return s.map((O,ge)=>({label:h.get(ge)||O.name,value:O.id}))}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(Hn.F4e),e.Y36(Hn.dGO),e.Y36(e.sBO),e.Y36(Xr._M))},l.\u0275cmp=e.Xpm({type:l,selectors:[["ng-component"]],viewQuery:function(s,h){if(1&s&&e.Gf(Op,5,e.Rgc),2&s){let O;e.iGM(O=e.CRH())&&(h.optionTemplates=O)}},features:[e.qOj],decls:14,vars:16,consts:[[3,"nzGutter"],["nzFlex","auto"],[4,"ngrxLet"],["nzFlex","50px"],["type","button","nz-button","","nzBlock","","nz-tooltip","","nzTooltipTitle","Add/Edit Complex MP Expression",1,"expression-button",3,"click"],["nz-icon","",3,"ngClass","nzType"],["nzSpan","24","class","editor-drawer",4,"ngIf"],["selectedTemplate",""],[3,"cvcOnSelect",4,"ngIf"],["class","editor-message",4,"ngIf"],["class","select-container",4,"ngIf"],[3,"cvcOnSelect"],[1,"editor-message"],["nz-typography","","nzEllipsis","","nzType","secondary"],[1,"select-container"],[1,"limit-select-width"],[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcDisabled","cvcAllowClear","cvcOptions","cvcShowError","cvcLoading","cvcBorderless","cvcSuffixIcon","cvcShowArrow","cvcOnSearch","cvcOnModelChange"],["nzSpan","24",1,"editor-drawer"],[3,"cvcPrepopulateWithId","cvcOnSelect"],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf","ngIfElse"],["noAliases",""],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(s,h){1&s&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1),e.YNc(2,k1,4,3,"ng-container",2),e.qZA(),e.TgZ(3,"nz-col",3)(4,"button",4),e.NdJ("click",function(){return h.onShowExpClick$.next()}),e._UZ(5,"span",5),e.ALo(6,"ngrxPush"),e.ALo(7,"ngrxPush"),e._uU(8,"Editor "),e.qZA()(),e.YNc(9,wp,3,3,"nz-col",6),e.ALo(10,"ngrxPush"),e.qZA(),e.YNc(11,ad,3,3,"ng-container",2)(12,t1,2,3,"ng-template",null,7,e.W1O)),2&s&&(e.Q6J("nzGutter",e.DdM(12,V1)),e.xp6(2),e.Q6J("ngrxLet",h.selectDisplay$),e.xp6(3),e.Q6J("ngClass",e.WLB(13,cd,e.lcZ(6,6,h.showExp$),!e.lcZ(7,8,h.showExp$)))("nzType","caret-right"),e.xp6(4),e.Q6J("ngIf",e.lcZ(10,10,h.showExp$)),e.xp6(2),e.Q6J("ngrxLet",h.onSearch$))},dependencies:[u.mk,u.sg,u.O5,lo.eJ,uo.ix,de.w,ce.dQ,ee.Ls,H.t3,H.SK,Ce.ZU,qn.SY,dn,nn.J,As,La,lo.fM,Mr.A],styles:["form[_ngcontent-%COMP%]   span.hide[_ngcontent-%COMP%], .expression-button[_ngcontent-%COMP%]   span.hide[_ngcontent-%COMP%]{transform:rotate(0);transition:transform .2s linear}form[_ngcontent-%COMP%]   span.show[_ngcontent-%COMP%], .expression-button[_ngcontent-%COMP%]   span.show[_ngcontent-%COMP%]{transform:rotate(90deg);transition:transform .2s linear}.editor-message[_ngcontent-%COMP%]{padding:3px;background-color:#f5f5f5;cursor:default;border-radius:2px}.select-container[_ngcontent-%COMP%]{padding:0;background-color:#fff;cursor:default;border-radius:2px;border:1px solid #d9d9d9}.select-container[_ngcontent-%COMP%]   .limit-select-width[_ngcontent-%COMP%]{display:inline-block;margin-top:-1px;margin-bottom:-1px}"],data:{animation:[Qs.mF,Qs.MC]},changeDetection:0}),l})();const H1={types:[{name:"molecular-profile-select",wrappers:["form-field"],component:B1},{name:"molecular-profile-multi-select",wrappers:["form-field"],component:B1,defaultOptions:{props:{label:"Molecular Profiles",isMultiSelect:!0}}}]};let Ip=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,n.u5,n.UX,y.X0.forChild(H1),Nt.L,uo.sL,Be.LV,fi.Qp,ee.PV,B.o7,H.Jb,st.zf,N.U5,he.ic,Ce.ZJ,qn.cg,Xn.$6,st.zf,me.Wr,lr.Ph,ti.g,Vl.r,Jn,xn,We.s,ut.x]}),l})();const lc=["optionTemplates"];function Ap(l,v){if(1&l&&(e.TgZ(0,"nz-tag",5),e._uU(1),e.qZA()),2&l){const s=e.oxw().$implicit;e.xp6(),e.Oqu(s.name)}}function ud(l,v){1&l&&(e.ynx(0),e.YNc(1,Ap,2,1,"ng-template",null,4,e.W1O),e.BQk())}function Ha(l,v){if(1&l&&(e.ynx(0),e.YNc(1,ud,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&l){const s=e.oxw();e.xp6(),e.Q6J("ngForOf",e.lcZ(2,1,s.result$))}}function Ks(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"div",6)(1,"cvc-entity-tag",7),e.NdJ("cvcOnClose",function(){const ge=e.CHM(s).$implicit,mt=e.oxw();return e.KtG(mt.onTagClose$.next(ge.nzValue))}),e.qZA()()}if(2&l){const s=v.$implicit,h=e.oxw();e.xp6(),e.Q6J("cvcDisableLink",!0)("cvcCacheId","NccnGuideline:"+s.nzValue)("cvcContext",h.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",h.props.isMultiSelect?"default":"closeable")("cvcShowIcon",!1)}}const n1=Vo(No(),zi());let o1=(()=>{class l extends n1{constructor(s,h,O){super(),this.taq=s,this.tq=h,this.changeDetectorRef=O,this.defaultOptions={props:{entityName:{singular:"NCCN Guideline",plural:"NCCN Guidelines"},isMultiSelect:!1,requireType:!1,tooltip:"If applicable, please provide cancer (e.g., Breast Cancer) for the appropriate NCCN guideline.",placeholder:"Search NCCN Guidelines"}},this.placeholder$=new Ve.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectComponent:this.selectComponent})}getTypeaheadVarsFn(s){return{name:s}}getTypeaheadResultsFn(s){return s.data.nccnGuidelinesTypeahead}getTagQueryResultsFn(s){return s.data.nccnGuideline}getTagQueryVarsFn(s){return{id:s}}getSelectedItemOptionFn(s){return{value:s.id,label:s.name}}getSelectOptionsFn(s,h){return s.map((O,ge)=>({label:h.get(ge)||O.name,value:O.id}))}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(Hn.sA8),e.Y36(Hn.N$2),e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-nccn-guideline-select"]],viewQuery:function(s,h){if(1&s&&e.Gf(lc,5,e.Rgc),2&s){let O;e.iGM(O=e.CRH())&&(h.optionTemplates=O)}},features:[e.qOj],decls:8,vars:20,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],["nz-tooltip",""],[1,"ant-select-selection-item-content"],[3,"cvcDisableLink","cvcCacheId","cvcContext","cvcMode","cvcShowIcon","cvcOnClose"]],template:function(s,h){if(1&s&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(ge){return h.onSearch$.next(ge)})("cvcOnOpenChange",function(ge){return h.onOpenChange$.next(ge)})("cvcOnModelChange",function(ge){return h.props.change&&h.props.change(h.field,ge)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.qZA(),e.YNc(5,Ha,3,3,"ng-container",1)(6,Ks,2,5,"ng-template",null,2,e.W1O)),2&s){const O=e.MAs(7);e.Q6J("cvcSelectMode",h.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",O)("cvcFormControl",h.formControl)("cvcFormlyAttributes",h.field)("cvcEntityName",h.props.entityName)("cvcPlaceholder",e.lcZ(1,12,h.placeholder$))("cvcResults",e.lcZ(2,14,h.result$))("cvcOptions",e.lcZ(3,16,h.selectOption$))("cvcShowError",h.showError)("cvcDisabled",!1)("cvcLoading",e.lcZ(4,18,h.isLoading$)),e.xp6(5),e.Q6J("ngrxLet",h.onSearch$)}},dependencies:[u.sg,lo.eJ,qn.SY,to.j,dn,nn.J,lo.fM],changeDetection:0}),l})();const ou={types:[{name:"nccn-guideline-select",wrappers:["form-field"],component:o1,defaultOptions:{props:{label:"NCCN Guideline"}}},{name:"nccn-guideline-multi-select",wrappers:["form-field"],component:o1,defaultOptions:{props:{isMultiSelect:!0,label:"NCCN Guideline(s)"}}}]};let Fp=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,n.UX,y.X0.forChild(ou),Nt.L,uo.sL,Be.LV,Xn.$6,fi.Qp,ee.PV,B.o7,H.Jb,qn.cg,st.zf,N.U5,he.ic,Ce.ZJ,to.X,Jn,xn,We.s,ut.x,Zn]}),l})();const $1=Vo(No()),dd={types:[{name:"nccn-guideline-version-input",component:(()=>{class l extends $1{constructor(s){super(),this.cdr=s,this.defaultDescription="Please enter the version of the NCCN guideline you're referencing in the format <strong>Version.Year</strong>",this.defaultOptions={validators:{nccnVersionNumber:{expression:h=>{if(h.value){if(/^\d{1,2}\.\d{4}$/.test(h.value)){let O=+h.value.split(".")[1];return O>=2e3&&O<=(new Date).getFullYear()+1}return!1}return!0},message:(h,O)=>`"${O.formControl?.value}" does not fit the format Version.Year`}},props:{label:"NCCN Guideline Version",extraType:"description",description:this.defaultDescription}}}ngAfterViewInit(){this.configureBaseField(),this.state&&this.state.formReady$?this.state.formReady$.pipe((0,yt.h)(s=>s),(0,zr.q)(1),(0,ln.t)(this)).subscribe(s=>{this.configureField()}):this.configureField()}configureField(){this.state?.fields.nccnGuidelineId$.pipe((0,ln.t)(this)).subscribe(s=>{s?(this.props.disabled=!1,this.props.required=!0,this.props.extraType="description",this.props.description=this.defaultDescription):(this.props.disabled=!0,this.props.required=!1,this.props.extraType="prompt",this.props.description="NCCN Guideline Version is only required when NCCN Guideline is specified.",this.formControl.setValue(void 0))})}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-nccn-guideline-version-input"]],features:[e.qOj],decls:1,vars:2,consts:[["nz-input","","placeholder","ex: 1.2023",3,"formControl","formlyAttributes"]],template:function(s,h){1&s&&e._UZ(0,"input",0),2&s&&e.Q6J("formControl",h.formControl)("formlyAttributes",h.field)},dependencies:[n.Fj,n.JJ,n.oH,y.JD,B.Zp],encapsulation:2,changeDetection:0}),l})(),wrappers:["form-field"]}]};let $a=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,n.UX,y.X0.forChild(dd),B.o7,Jn]}),l})();var Ua,Kc=c(6928);let qc=((Ua=class{constructor(v){this.el=v,this.domChange=new e.vpe,this.changes=new MutationObserver(s=>{(0,Ji.D)(s).pipe((0,j.U)(h=>{const O=h.target;return"class"===h.attributeName?{type:"class",change:O.classList.value,key:`${h.attributeName}:${O.classList.value}`}:"disabled"===h.attributeName?{type:"disabled",change:O.disabled,key:`${h.attributeName}:${O.disabled}`}:"hidden"===h.attributeName?{type:"hidden",change:O.hidden,key:`${h.attributeName}:${O.hidden}`}:{type:h.attributeName,change:"unknown change type",key:`${h.attributeName}:unknown-change-type`}}),jt("key"),(0,ln.t)(this)).subscribe(h=>{this.domChange.emit(h)})}),this.changes.observe(this.el.nativeElement,{attributeFilter:["class","disabled","hidden"],attributes:!0,childList:!1,subtree:!1})}ngAfterViewInit(){this.initialClass=this.el.nativeElement.classList.value}ngOnDestroy(){this.changes.disconnect()}}).\u0275fac=function(v){return new(v||Ua)(e.Y36(e.SBq))},Ua.\u0275dir=e.lG2({type:Ua,selectors:[["button","cvcOrgSubmitButton",""]],outputs:{domChange:"domChange"}}),Ua);var uc;function pd(l,v){if(1&l&&(e.TgZ(0,"button",3),e._uU(1),e.qZA()),2&l){const s=v.ngrxLet,h=e.oxw();e.Q6J("disabled",!h.form.valid)("nzTooltipTrigger",s?"hover":null)("nzTooltipTitle","For "+(null==s?null:s.name)),e.xp6(),e.hij(" ",h.props.submitLabel," ")}}qc=(0,V.gn)([(0,ln.c)()],qc);const hd=(l,v,s)=>({"btn-right":l,"btn-left":v,"btn-center":s});let fd=((uc=class extends y.fS{constructor(v,s,h){super(),this.viewerService=v,this.cdr=s,this.apollo=h,this.menuSelection$=new x.x,this.baseButtonClass="org-dropdown-btn",this.defaultOptions={props:{submitLabel:"Submit"}},this.viewer$=this.viewerService.viewer$,this.organizations$=this.viewer$.pipe((0,ko.j)("organizations")),this.mostRecentOrg$=this.viewer$.pipe((0,ko.j)("mostRecentOrg")),this.isDisabled$=new x.x,this.isHidden$=new x.x,this.buttonClass$=new Ve.X(this.baseButtonClass),this.subscriptions=[]}ngOnInit(){this.menuSelection$.pipe((0,ci.M)(this.viewer$)).subscribe(([O,ge])=>{const mt={id:`User:${ge.id}`,fragment:Xr.Ps`
            fragment UserMostRecentOrgId on User {
              mostRecentOrganizationId
            }
          `,data:{mostRecentOrganizationId:O}};this.apollo.client.writeFragment(mt)}),this.formUpdate$=new Ve.X(this.form.status);const v=this.form.statusChanges.subscribe(O=>this.formUpdate$.next(O)),s=this.formUpdate$.subscribe(O=>this.cdr.detectChanges()),h=this.mostRecentOrg$.pipe((0,ko.j)("id"),(0,yt.h)(li.ep)).subscribe(O=>{this.formControl.setValue(O)});this.subscriptions=this.subscriptions.concat([v,s,h])}ngAfterViewInit(){if(this.button&&this.button.domChange){const v=this.button.domChange.subscribe(s=>{"class"===s.type&&"string"==typeof s.change?this.buttonClass$.next(`${this.baseButtonClass} ${s.change}`):"disabled"===s.type&&"boolean"==typeof s.change?this.isDisabled$.next(s.change):"hidden"===s.type&&"boolean"==typeof s.change&&this.isHidden$.next(s.change)});this.subscriptions.push(v)}}}).\u0275fac=function(v){return new(v||uc)(e.Y36(sc.a),e.Y36(e.sBO),e.Y36(Xr._M))},uc.\u0275cmp=e.Xpm({type:uc,selectors:[["cvc-org-submit-button"]],viewQuery:function(v,s){if(1&v&&e.Gf(qc,5),2&v){let h;e.iGM(h=e.CRH())&&(s.button=h.first)}},features:[e.qOj],decls:3,vars:8,consts:[["type","hidden",3,"formControl","formlyAttributes"],[1,"btn-aligner",3,"ngClass"],["cvcOrgSubmitButton","","type","submit","nz-button","","nzType","primary","nz-tooltip","",3,"disabled","nzDanger","nzTooltipTrigger","nzTooltipTitle",4,"ngrxLet"],["cvcOrgSubmitButton","","type","submit","nz-button","","nzType","primary","nz-tooltip","",3,"disabled","nzDanger","nzTooltipTrigger","nzTooltipTitle"]],template:function(v,s){1&v&&(e._UZ(0,"input",0),e.TgZ(1,"div",1),e.YNc(2,pd,2,4,"button",2),e.qZA()),2&v&&(e.Q6J("formControl",s.formControl)("formlyAttributes",s.field),e.xp6(),e.Q6J("ngClass",e.kEZ(4,hd,"right"===s.props.align,"left"===s.props.align,"center"===s.props.align)),e.xp6(),e.Q6J("ngrxLet",s.mostRecentOrg$))},dependencies:[u.mk,n.Fj,n.JJ,n.oH,lo.eJ,y.JD,uo.ix,de.w,ce.dQ,qn.SY,qc],styles:[".btn-aligner[_ngcontent-%COMP%]{width:100%}.btn-aligner.btn-right[_ngcontent-%COMP%]{text-align:right}.btn-aligner.btn-left[_ngcontent-%COMP%]{text-align:left}.btn-aligner.btn-center[_ngcontent-%COMP%]{text-align:center}"],changeDetection:0}),uc);fd=(0,V.gn)([(0,ln.c)({arrayName:"subscriptions"})],fd);const Xc={types:[{name:"org-submit-button",component:fd}]};let U1=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,n.UX,y.X0.forChild(Xc),ee.PV,Kc.Rt,uo.sL,us.b1,qn.cg]}),l})();const md=["optionTemplates"];function Lp(l,v){if(1&l&&e._UZ(0,"cvc-attribute-tag",4),2&l){const s=e.oxw().$implicit;e.Q6J("cvcAttrValue",s)}}function Y1(l,v){1&l&&(e.ynx(0),e.YNc(1,Lp,1,1,"ng-template",null,3,e.W1O),e.BQk())}function Ar(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"div",5)(1,"cvc-attribute-tag",6),e.NdJ("cvcOnClose",function(O){e.CHM(s);const ge=e.oxw();return e.KtG(ge.onTagClose$.next(O))}),e.qZA()()}if(2&l){const s=v.$implicit,h=e.oxw();e.xp6(),e.Q6J("cvcAttrValue",s.nzValue)("cvcContext",h.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",h.props.isMultiSelect?"default":"closeable")}}const iu=new Map([[Hn.huM.Somatic,"Variant is a mutation, found only in tumor cells, having arisen in a specific tissue (non-germ cell), and is not expected to be inherited or passed to offspring."],[Hn.huM.RareGermline,"Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in less than 1% of the population relevant to this evidence item."],[Hn.huM.CommonGermline,"Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in at least 1% of the population relevant to this evidence item."],[Hn.huM.Combined," Variants in the corresponding Complex Molecular Profile have heterogeneous origins."],[Hn.huM.Unknown,"The variant origin is uncertain based on the available evidence."],[Hn.huM.Na,"The variant type (e.g., expression) is not compatible (or easily classified) with the CIViC concept of variant origin."]]),r1=Vo(No(),So());let ru=(()=>{class l extends r1{constructor(s){super(),this.cdr=s,this.defaultOptions={props:{label:"Variant Origin",required:!1,isMultiSelect:!1,placeholder:"Select Variant Origin",tooltip:"Identifies whether the variant is inherited (germline mutation) or acquired (somatic mutation) in the context of the study"}},this.originEnum$=new Ve.X([])}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.originEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr}),this.originEnum$.next(Array.from(iu.keys()))}configureStateConnections(){this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,j.U)(s=>s.map(h=>h))),this.onValueChange$.pipe((0,ln.t)(this)).subscribe(s=>{s?(this.props.description=iu.get(s),this.props.extraType="description"):(this.props.description=void 0,this.props.extraType="prompt")})}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-origin-select"]],viewQuery:function(s,h){if(1&s&&e.Gf(md,5,e.Rgc),2&s){let O;e.iGM(O=e.CRH())&&(h.optionTemplates=O)}},features:[e.qOj],decls:6,vars:13,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcAttrValue","cvcContext","cvcMode","cvcOnClose"]],template:function(s,h){if(1&s&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.YNc(2,Y1,3,0,"ng-container",1),e.ALo(3,"ngrxPush"),e.YNc(4,Ar,2,3,"ng-template",null,2,e.W1O)),2&s){const O=e.MAs(5);e.Q6J("cvcFormControl",h.formControl)("cvcFormlyAttributes",h.field)("cvcSelectMode",h.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",h.props.placeholder)("cvcCustomTemplate",O)("cvcOptions",e.lcZ(1,9,h.selectOption$))("cvcShowError",h.showError)("cvcDisabled",h.props.disabled),e.xp6(2),e.Q6J("ngForOf",e.lcZ(3,11,h.originEnum$))}},dependencies:[u.sg,Bo,R,lo.fM]}),l})();const gr={types:[{name:"origin-select",wrappers:["form-field"],component:ru},{name:"origin-multi-select",wrappers:["form-field"],component:ru,defaultOptions:{props:{label:"Variant Origins",isMultiSelect:!0}}}]};let el=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,n.UX,y.X0.forChild(gr),Jn,vo,pr]}),l})();const gd=["optionTemplates"];function j1(l,v){if(1&l&&(e.ynx(0),e.TgZ(1,"em"),e._UZ(2,"span",8),e.ALo(3,"highlightTypeahead"),e.qZA(),e.BQk()),2&l){const s=e.oxw(2).$implicit,h=e.oxw().ngrxLet;e.xp6(2),e.Q6J("innerHtml",e.xi3(3,1,s.hpoId,h),e.oJD)}}function Q1(l,v){if(1&l&&(e._UZ(0,"cvc-entity-tag",5),e.TgZ(1,"span",6),e.YNc(2,j1,4,4,"ng-container",7),e.qZA()),2&l){const s=e.oxw().$implicit,h=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",s.__typename+":"+s.id)("cvcEmphasize",h),e.xp6(2),e.Q6J("ngIf",s.hpoId)}}function vd(l,v){1&l&&(e.ynx(0),e.YNc(1,Q1,3,4,"ng-template",null,4,e.W1O),e.BQk())}function s1(l,v){if(1&l&&(e.ynx(0),e.YNc(1,vd,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&l){const s=e.oxw();e.xp6(),e.Q6J("ngForOf",e.lcZ(2,1,s.result$))}}function su(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"div",9)(1,"cvc-entity-tag",10),e.NdJ("cvcOnClose",function(){const ge=e.CHM(s).$implicit,mt=e.oxw();return e.KtG(mt.onTagClose$.next(ge.nzValue))}),e.qZA()()}if(2&l){const s=v.$implicit,h=e.oxw();e.xp6(),e.Q6J("cvcCacheId","Phenotype:"+s.nzValue)("cvcContext",h.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",h.props.isMultiSelect?"default":"closeable")}}const G1=Vo(No(),zi());let _d=(()=>{class l extends G1{constructor(s,h,O){super(),this.taq=s,this.tq=h,this.changeDetectorRef=O,this.defaultOptions={props:{entityName:{singular:"Phenotype",plural:"Phenotypes"},isMultiSelect:!1,requireType:!0,tooltip:"Phenotype or phenotype combination which interacts with the specified variant",placeholders:{default:"Search Phenotypes",multiDefault:"Select Phenotype(s) (max MULTI_MAX)",requireTypePrompt:"Select an ENTITY_NAME Type to search Phenotypes"},description:'Please provide any <a href="https://hpo.jax.org/app/browse/term/HP:0000118" target="_blank">HPO phenotypes</a>, including <a href="https://hpo.jax.org/app/browse/term/HP:0003674" target="_blank">age of onset</a>.',extraType:"prompt"}},this.placeholder$=new Ve.X(this.defaultOptions.props.placeholders.default)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.configurePlaceholders()}configureStateConnections(){}configurePlaceholders(){}getTypeaheadVarsFn(s){return{name:s}}getTypeaheadResultsFn(s){return s.data.phenotypeTypeahead}getTagQueryVarsFn(s){return{id:s}}getTagQueryResultsFn(s){return s.data.phenotype}getSelectedItemOptionFn(s){return{value:s.id,label:s.name}}getSelectOptionsFn(s,h){return s.map((O,ge)=>({label:h.get(ge)||O.name,value:O.id}))}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(Hn.zOE),e.Y36(Hn.z_7),e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-phenotype-select"]],viewQuery:function(s,h){if(1&s&&e.Gf(gd,5,e.Rgc),2&s){let O;e.iGM(O=e.CRH())&&(h.optionTemplates=O)}},features:[e.qOj],decls:9,vars:22,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf"],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(s,h){if(1&s&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(ge){return h.onSearch$.next(ge)})("cvcOnOpenChange",function(ge){return h.onOpenChange$.next(ge)})("cvcOnModelChange",function(ge){return h.props.change&&h.props.change(h.field,ge)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.qZA(),e.YNc(6,s1,3,3,"ng-container",1)(7,su,2,3,"ng-template",null,2,e.W1O)),2&s){const O=e.MAs(8);e.Q6J("cvcSelectMode",h.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",O)("cvcFormControl",h.formControl)("cvcFormlyAttributes",h.field)("cvcEntityName",h.props.entityName)("cvcPlaceholder",e.lcZ(1,12,h.placeholder$))("cvcResults",e.lcZ(2,14,h.result$))("cvcOptions",e.lcZ(3,16,h.selectOption$))("cvcShowError",h.showError)("cvcDisabled",h.onRequiresPhenotype$&&!e.lcZ(4,18,h.onRequiresPhenotype$))("cvcLoading",e.lcZ(5,20,h.isLoading$)),e.xp6(6),e.Q6J("ngrxLet",h.onSearch$)}},dependencies:[u.sg,u.O5,lo.eJ,Ce.ZU,dn,nn.J,lo.fM,Mr.A],changeDetection:0}),l})();const kp={types:[{name:"phenotype-select",wrappers:["form-field"],component:_d,defaultOptions:{props:{label:"Phenotype"}}},{name:"phenotype-multi-select",wrappers:["form-field"],component:_d,defaultOptions:{props:{isMultiSelect:!0,label:"Phenotypes"}}}]};let Rp=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,n.UX,y.X0.forChild(kp),Nt.L,uo.sL,Be.LV,Xn.$6,fi.Qp,ee.PV,B.o7,H.Jb,qn.cg,st.zf,N.U5,he.ic,Ce.ZJ,to.X,Jn,xn,We.s,ut.x]}),l})();var yd=c(874);const a1=["nz-rate-item",""];function c1(l,v){}function Ts(l,v){}function Cd(l,v){1&l&&e._UZ(0,"span",4)}const l1=l=>({$implicit:l}),zd=["ulElement"];function au(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"li",3)(1,"div",4),e.NdJ("itemHover",function(O){const mt=e.CHM(s).index,Tn=e.oxw();return e.KtG(Tn.onItemHover(mt,O))})("itemClick",function(O){const mt=e.CHM(s).index,Tn=e.oxw();return e.KtG(Tn.onItemClick(mt,O))}),e.qZA()()}if(2&l){const s=v.index,h=e.oxw();e.Q6J("ngClass",h.starStyleArray[s]||"")("nzTooltipTitle",h.nzTooltips[s]),e.xp6(),e.Q6J("allowHalf",h.nzAllowHalf)("character",h.nzCharacter)("index",s)}}let dc=(()=>{class l{constructor(){this.index=0,this.allowHalf=!1,this.itemHover=new e.vpe,this.itemClick=new e.vpe}hoverRate(s){this.itemHover.next(s&&this.allowHalf)}clickRate(s){this.itemClick.next(s&&this.allowHalf)}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["","nz-rate-item",""]],inputs:{character:"character",index:"index",allowHalf:"allowHalf"},outputs:{itemHover:"itemHover",itemClick:"itemClick"},exportAs:["nzRateItem"],attrs:a1,decls:6,vars:8,consts:[[1,"ant-rate-star-second",3,"mouseover","click"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"ant-rate-star-first",3,"mouseover","click"],["defaultCharacter",""],["nz-icon","","nzType","star","nzTheme","fill"]],template:function(s,h){if(1&s&&(e.TgZ(0,"div",0),e.NdJ("mouseover",function(ge){return h.hoverRate(!1),ge.stopPropagation()})("click",function(){return h.clickRate(!1)}),e.YNc(1,c1,0,0,"ng-template",1),e.qZA(),e.TgZ(2,"div",2),e.NdJ("mouseover",function(ge){return h.hoverRate(!0),ge.stopPropagation()})("click",function(){return h.clickRate(!0)}),e.YNc(3,Ts,0,0,"ng-template",1),e.qZA(),e.YNc(4,Cd,1,0,"ng-template",null,3,e.W1O)),2&s){const O=e.MAs(5);e.xp6(),e.Q6J("ngTemplateOutlet",h.character||O)("ngTemplateOutletContext",e.VKq(4,l1,h.index)),e.xp6(2),e.Q6J("ngTemplateOutlet",h.character||O)("ngTemplateOutletContext",e.VKq(6,l1,h.index))}},dependencies:[u.tP,ee.Ls],encapsulation:2,changeDetection:0}),(0,V.gn)([(0,M.yF)()],l.prototype,"allowHalf",void 0),l})(),W1=(()=>{class l{get nzValue(){return this._value}set nzValue(s){this._value!==s&&(this._value=s,this.hasHalf=!Number.isInteger(s),this.hoverValue=Math.ceil(s))}constructor(s,h,O,ge,mt,Tn){this.nzConfigService=s,this.ngZone=h,this.renderer=O,this.cdr=ge,this.directionality=mt,this.destroy$=Tn,this._nzModuleName="rate",this.nzAllowClear=!0,this.nzAllowHalf=!1,this.nzDisabled=!1,this.nzAutoFocus=!1,this.nzCount=5,this.nzTooltips=[],this.nzOnBlur=new e.vpe,this.nzOnFocus=new e.vpe,this.nzOnHoverChange=new e.vpe,this.nzOnKeyDown=new e.vpe,this.classMap={},this.starArray=[],this.starStyleArray=[],this.dir="ltr",this.hasHalf=!1,this.hoverValue=0,this.isFocused=!1,this._value=0,this.isNzDisableFirstChange=!0,this.onChange=()=>null,this.onTouched=()=>null}ngOnChanges(s){const{nzAutoFocus:h,nzCount:O,nzValue:ge}=s;if(h&&!h.isFirstChange()){const mt=this.ulElement.nativeElement;this.nzAutoFocus&&!this.nzDisabled?this.renderer.setAttribute(mt,"autofocus","autofocus"):this.renderer.removeAttribute(mt,"autofocus")}O&&this.updateStarArray(),ge&&this.updateStarStyle()}ngOnInit(){this.nzConfigService.getConfigChangeEventForComponent("rate").pipe((0,ve.R)(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),this.directionality.change.pipe((0,ve.R)(this.destroy$)).subscribe(s=>{this.dir=s,this.cdr.detectChanges()}),this.dir=this.directionality.value,this.ngZone.runOutsideAngular(()=>{(0,ne.R)(this.ulElement.nativeElement,"focus").pipe((0,ve.R)(this.destroy$)).subscribe(s=>{this.isFocused=!0,this.nzOnFocus.observers.length&&this.ngZone.run(()=>this.nzOnFocus.emit(s))}),(0,ne.R)(this.ulElement.nativeElement,"blur").pipe((0,ve.R)(this.destroy$)).subscribe(s=>{this.isFocused=!1,this.nzOnBlur.observers.length&&this.ngZone.run(()=>this.nzOnBlur.emit(s))})})}onItemClick(s,h){if(this.nzDisabled)return;this.hoverValue=s+1;const O=h?s+.5:s+1;this.nzValue===O?this.nzAllowClear&&(this.nzValue=0,this.onChange(this.nzValue)):(this.nzValue=O,this.onChange(this.nzValue)),this.updateStarStyle()}onItemHover(s,h){this.nzDisabled||this.hoverValue===s+1&&h===this.hasHalf||(this.hoverValue=s+1,this.hasHalf=h,this.nzOnHoverChange.emit(this.hoverValue),this.updateStarStyle())}onRateLeave(){this.hasHalf=!Number.isInteger(this.nzValue),this.hoverValue=Math.ceil(this.nzValue),this.updateStarStyle()}focus(){this.ulElement.nativeElement.focus()}blur(){this.ulElement.nativeElement.blur()}onKeyDown(s){const h=this.nzValue;s.keyCode===I.SV&&this.nzValue<this.nzCount?this.nzValue+=this.nzAllowHalf?.5:1:s.keyCode===I.oh&&this.nzValue>0&&(this.nzValue-=this.nzAllowHalf?.5:1),h!==this.nzValue&&(this.onChange(this.nzValue),this.nzOnKeyDown.emit(s),this.updateStarStyle(),this.cdr.markForCheck())}updateStarArray(){this.starArray=Array(this.nzCount).fill(0).map((s,h)=>h),this.updateStarStyle()}updateStarStyle(){this.starStyleArray=this.starArray.map(s=>{const h="ant-rate-star",O=s+1;return{[`${h}-full`]:O<this.hoverValue||!this.hasHalf&&O===this.hoverValue,[`${h}-half`]:this.hasHalf&&O===this.hoverValue,[`${h}-active`]:this.hasHalf&&O===this.hoverValue,[`${h}-zero`]:O>this.hoverValue,[`${h}-focused`]:this.hasHalf&&O===this.hoverValue&&this.isFocused}})}writeValue(s){this.nzValue=s||0,this.updateStarArray(),this.cdr.markForCheck()}setDisabledState(s){this.nzDisabled=this.isNzDisableFirstChange&&this.nzDisabled||s,this.isNzDisableFirstChange=!1,this.cdr.markForCheck()}registerOnChange(s){this.onChange=s}registerOnTouched(s){this.onTouched=s}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(yd.jY),e.Y36(e.R0b),e.Y36(e.Qsj),e.Y36(e.sBO),e.Y36(G.Is,8),e.Y36(k.kn))},l.\u0275cmp=e.Xpm({type:l,selectors:[["nz-rate"]],viewQuery:function(s,h){if(1&s&&e.Gf(zd,7),2&s){let O;e.iGM(O=e.CRH())&&(h.ulElement=O.first)}},inputs:{nzAllowClear:"nzAllowClear",nzAllowHalf:"nzAllowHalf",nzDisabled:"nzDisabled",nzAutoFocus:"nzAutoFocus",nzCharacter:"nzCharacter",nzCount:"nzCount",nzTooltips:"nzTooltips"},outputs:{nzOnBlur:"nzOnBlur",nzOnFocus:"nzOnFocus",nzOnHoverChange:"nzOnHoverChange",nzOnKeyDown:"nzOnKeyDown"},exportAs:["nzRate"],features:[e._Bn([k.kn,{provide:n.JU,useExisting:(0,e.Gpc)(()=>l),multi:!0}]),e.TTD],decls:3,vars:7,consts:[[1,"ant-rate",3,"ngClass","tabindex","keydown","mouseleave"],["ulElement",""],["class","ant-rate-star","nz-tooltip","",3,"ngClass","nzTooltipTitle",4,"ngFor","ngForOf"],["nz-tooltip","",1,"ant-rate-star",3,"ngClass","nzTooltipTitle"],["nz-rate-item","",3,"allowHalf","character","index","itemHover","itemClick"]],template:function(s,h){1&s&&(e.TgZ(0,"ul",0,1),e.NdJ("keydown",function(ge){return h.onKeyDown(ge),ge.preventDefault()})("mouseleave",function(ge){return h.onRateLeave(),ge.stopPropagation()}),e.YNc(2,au,2,5,"li",2),e.qZA()),2&s&&(e.ekj("ant-rate-disabled",h.nzDisabled)("ant-rate-rtl","rtl"===h.dir),e.Q6J("ngClass",h.classMap)("tabindex",h.nzDisabled?-1:1),e.xp6(2),e.Q6J("ngForOf",h.starArray))},dependencies:[u.mk,u.sg,qn.SY,dc],encapsulation:2,changeDetection:0}),(0,V.gn)([(0,yd.oS)(),(0,M.yF)()],l.prototype,"nzAllowClear",void 0),(0,V.gn)([(0,yd.oS)(),(0,M.yF)()],l.prototype,"nzAllowHalf",void 0),(0,V.gn)([(0,M.yF)()],l.prototype,"nzDisabled",void 0),(0,V.gn)([(0,M.yF)()],l.prototype,"nzAutoFocus",void 0),(0,V.gn)([(0,M.Rn)()],l.prototype,"nzCount",void 0),l})(),Vp=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[G.vT,u.ez,ee.PV,qn.cg]}),l})();const tl={1:"Poor - Claim is not supported well by experimental evidence. Results are not reproducible, or have very small sample size. No follow-up is done to validate novel claims.",2:"Adequate - Evidence is not well supported by experimental data, and little follow-up data is available. Experiments may lack proper controls, have small sample size, or are not statistically convincing.",3:"Average - Evidence is convincing, but not supported by a breadth of experiments. May be smaller scale projects, or novel results without many follow-up experiments. Discrepancies from expected results are explained and not concerning.",4:"Strong - Well supported evidence. Experiments are well controlled, and results are convincing. Any discrepancies from expected results are well-explained and not concerning.",5:"Excellent - Solid, well supported evidence from a lab or journal with respected academic standing. Experiments are well controlled, and results are clean and reproducible across multiple replicates. Evidence confirmed using separate methods."},Ah=Vo(No(),So()),Td={types:[{name:"rating",wrappers:["form-field"],component:(()=>{class l extends Ah{constructor(){super(),this.defaultOptions={props:{label:"Evidence Rating",count:5,tooltip:"A representation of the curator's confidence in the quality of the summarized evidence",hoverText:[]}},this.rating$=new Ve.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.formControl.value&&this.rating$.next(this.formControl.value),Object.entries(tl).map(([s,h])=>{this.props.hoverText.push(h)}),this.rating$.pipe((0,ln.t)(this)).subscribe(s=>{this.formControl.setValue(s)}),this.onValueChange$.pipe((0,ln.t)(this)).subscribe(s=>{s&&0!==s?(this.props.description=tl[s],this.props.extraType="description"):(this.formControl.setValue(void 0),this.props.description=void 0,this.props.extraType="prompt")})}configureStateConnections(){}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-rating"]],features:[e.qOj],decls:3,vars:5,consts:[["type","hidden",3,"formControl","formlyAttributes"],[1,"rate-block"],[3,"ngModel","nzCount","nzTooltips","ngModelChange"]],template:function(s,h){1&s&&(e._UZ(0,"input",0),e.TgZ(1,"div",1)(2,"nz-rate",2),e.NdJ("ngModelChange",function(ge){return h.rating$.next(ge)}),e.qZA()()),2&s&&(e.Q6J("formControl",h.formControl)("formlyAttributes",h.field),e.xp6(2),e.Q6J("ngModel",h.formControl.value)("nzCount",h.props.count)("nzTooltips",h.props.hoverText))},dependencies:[n.Fj,n.JJ,n.oH,n.On,y.JD,W1],styles:["[_nghost-%COMP%]   .rate-block[_ngcontent-%COMP%]{display:inline-block;background-color:#fff;border-radius:2px;padding:2px 4px;margin-top:-4px}[_nghost-%COMP%]     nz-rate .anticon{font-size:160%}"],changeDetection:0}),l})()}]};let d1=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,n.UX,n.u5,y.X0.forChild(Td),Vp,We.s,Jn,vo]}),l})();const Di=["optionTemplates"];function p1(l,v){if(1&l&&(e.TgZ(0,"nz-tag")(1,"strong"),e._uU(2),e.qZA()()),2&l){const s=e.oxw().$implicit;e.xp6(2),e.Oqu(s)}}function Bp(l,v){1&l&&(e.ynx(0),e.YNc(1,p1,3,1,"ng-template",null,3,e.W1O),e.BQk())}function h1(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"nz-tag",7),e.NdJ("nzOnClose",function(O){e.CHM(s);const ge=e.oxw(2);return e.KtG(ge.onTagClose$.next(O))}),e.TgZ(1,"strong"),e._uU(2),e.qZA()()}if(2&l){const s=e.oxw().$implicit;e.xp6(2),e.Oqu(s.nzValue)}}function Z1(l,v){if(1&l&&(e.ynx(0),e._uU(1),e.BQk()),2&l){const s=e.oxw().$implicit;e.xp6(),e.hij(" ",s.nzValue," ")}}function pc(l,v){if(1&l&&(e.TgZ(0,"div",4),e.YNc(1,h1,3,1,"nz-tag",5)(2,Z1,2,1,"ng-container",6),e.qZA()),2&l){const s=e.oxw();e.xp6(),e.Q6J("ngIf",!s.props.isMultiSelect),e.xp6(),e.Q6J("ngIf",s.props.isMultiSelect)}}const J1=Vo(No(),So());let f1=(()=>{class l extends J1{constructor(s){super(),this.cdr=s,this.defaultOptions={props:{label:"Reference Build",required:!1,isMultiSelect:!1,description:"Select the human genome reference sequence from which these coordinates are obtained",placeholder:"Select Reference Build"}},this.buildEnum$=new Ve.X([])}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.buildEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}configureStateConnections(){this.placeholder$=new Ve.X(this.props.placeholder),this.buildEnum$.next((0,Fo.o6)(Hn.JDX).map(s=>s)),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,j.U)(s=>s.map(h=>h)))}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-reference-build-select"]],viewQuery:function(s,h){if(1&s&&e.Gf(Di,5,e.Rgc),2&s){let O;e.iGM(O=e.CRH())&&(h.optionTemplates=O)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[1,"ant-select-selection-item-content"],["nzMode","closeable",3,"nzOnClose",4,"ngIf"],[4,"ngIf"],["nzMode","closeable",3,"nzOnClose"]],template:function(s,h){if(1&s&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,Bp,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,pc,3,2,"ng-template",null,2,e.W1O)),2&s){const O=e.MAs(6);e.Q6J("cvcFormControl",h.formControl)("cvcFormlyAttributes",h.field)("cvcSelectMode",h.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,h.placeholder$))("cvcCustomTemplate",O)("cvcOptions",e.lcZ(2,11,h.selectOption$))("cvcShowError",h.showError)("cvcDisabled",h.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,h.buildEnum$))}},dependencies:[u.sg,u.O5,to.j,Bo,lo.fM]}),l})();const Hp={types:[{name:"reference-build-select",wrappers:["form-field"],component:f1},{name:"reference-build-multi-select",wrappers:["form-field"],component:f1,defaultOptions:{props:{label:"Levels",isMultiSelect:!0}}}]};let Nh=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,n.UX,y.X0.forChild(Hp),to.X,We.s,Jn,vo]}),l})();const Md=["optionTemplates"];function $p(l,v){if(1&l&&e._UZ(0,"cvc-attribute-tag",4),2&l){const s=e.oxw().$implicit;e.Q6J("cvcAttrValue",s)}}function K1(l,v){1&l&&(e.ynx(0),e.YNc(1,$p,1,1,"ng-template",null,3,e.W1O),e.BQk())}function q1(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"div",5)(1,"cvc-attribute-tag",6),e.NdJ("cvcOnClose",function(O){e.CHM(s);const ge=e.oxw();return e.KtG(ge.onTagClose$.next(O))}),e.qZA()()}if(2&l){const s=v.$implicit,h=e.oxw();e.xp6(),e.Q6J("cvcAttrValue",s.nzValue)("cvcContext",h.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",h.props.isMultiSelect?"default":"closeable")}}const X1={Evidence:{PREDICTIVE:{SENSITIVITYRESPONSE:"Associated with a clinical or preclinical response to treatment",RESISTANCE:"Associated with clinical or preclinical resistance to treatment",ADVERSE_RESPONSE:"Associated with an adverse response to drug treatment",REDUCED_SENSITIVITY:"Response to treatment is lower than seen in other treatment contexts",NA:"Clinical Significance is not applicable."},DIAGNOSTIC:{POSITIVE:"Associated with diagnosis of disease or subtype",NEGATIVE:"Associated with lack of disease or subtype"},PROGNOSTIC:{BETTER_OUTCOME:"Demonstrates better than expected clinical outcome",POOR_OUTCOME:"Demonstrates worse than expected clinical outcome",NA:"Clinical Significance is not applicable."},PREDISPOSING:{PREDISPOSITION:"Germline variant has predisposing potential for cancer, and may meet select ACMG/AMP criteria supporting pathogenic or benign classification.",PROTECTIVENESS:"Germline variant has properties that protect individuals from acquiring cancer."},FUNCTIONAL:{GAIN_OF_FUNCTION:"Sequence variant confers an increase in normal gene function",LOSS_OF_FUNCTION:"Sequence variant confers a diminished or abolished function",UNALTERED_FUNCTION:"Gene product of sequence variant is unchanged",NEOMORPHIC:"Sequence variant creates a novel function",DOMINANT_NEGATIVE:"Sequence variant abrogates function of wildtype allele gene product",UNKNOWN:"Sequence variant that cannot be precisely defined by the other listed categories"},ONCOGENIC:{ONCOGENICITY:"Somatic variant has oncogenic potential for driving cancer, and may meet select ClinGen/CGC/VICC criteria supporting pathogenic or benign classification.",PROTECTIVENESS:"Somatic variant has a protective role against cancer."}},Assertion:{PREDICTIVE:{SENSITIVITYRESPONSE:"Associated with a clinical or preclinical response to treatment",RESISTANCE:"Associated with clinical or preclinical resistance to treatment",ADVERSE_RESPONSE:"Associated with an adverse response to drug treatment",REDUCED_SENSITIVITY:"Response to treatment is lower than seen in other treatment contexts",NA:"Clinical Significance is not applicable."},DIAGNOSTIC:{POSITIVE:"Associated with diagnosis of disease or subtype",NEGATIVE:"Associated with lack of disease or subtype"},PROGNOSTIC:{BETTER_OUTCOME:"Demonstrates better than expected clinical outcome",POOR_OUTCOME:"Demonstrates worse than expected clinical outcome",NA:"Clinical Significance is not applicable."},PREDISPOSING:{PATHOGENIC:"Very strong evidence the variant is pathogenic",LIKELY_PATHOGENIC:"Strong evidence (>90% certainty) the variant is pathogenic.",BENIGN:"Very strong evidence the variant is benign",LIKELY_BENIGN:"Not expected to have a major effect on disease",UNCERTAIN_SIGNIFICANCE:"Does not meet the ACMG/AMP criteria for pathogenic/benign, or the evidence is conflicting"},ONCOGENIC:{ONCOGENIC:"Very strong evidence the variant is oncogenic.",LIKELY_ONCOGENIC:"Strong evidence the variant is oncogenic.",BENIGN:"Very strong evidence the variant does not have oncogenic properties.",LIKELY_BENIGN:"Strong evidence the variant does not have oncogenic properties.",UNCERTAIN_SIGNIFICANCE:"Does not meet guideline criteria for oncogenic/benign, or the evidence is conflicting."}}},m1=Vo(No(),So()),p={types:[{name:"significance-select",wrappers:["form-field"],component:(()=>{class l extends m1{constructor(s){super(),this.cdr=s,this.defaultOptions={props:{label:"Significance",required:!0,isMultiSelect:!1,placeholder:"Select Significance",placeholderFn:h=>`Select ${h?h+" ":""} Significance`,requireTypePromptFn:h=>`Select ${h} Type to select its Significance`,tooltip:"Clinical impact of the variant"}},this.significanceEnum$=new Ve.X([])}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.significanceEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}configureStateConnections(){if(!this.state)return console.error(`${this.field.id} requires a form state to populate its options, none was found.`),void(this.placeholder$=new Ve.X("ERROR: Form state not found"));if(this.placeholder$=new Ve.X(this.props.placeholderFn(this.state.entityName)),!this.state.enums.significance$)return void console.error(`${this.field.id} could not find form state's enums.significance$ to populate select.`);this.state.enums.significance$.pipe((0,ln.t)(this)).subscribe(h=>{this.significanceEnum$.next(h)}),this.optionTemplates||console.warn(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,j.U)(h=>h.map(O=>O)));const s=`${this.state.entityName.toLowerCase()}Type$`;this.state.fields[s]?(this.onTypeSelect$=this.state.fields[s],this.onTypeSelect$.pipe((0,Ci.T)("add"===this.options.formState.formMode?0:1),(0,ln.t)(this)).subscribe(h=>{h?(this.props.disabled=!1,this.props.description=void 0,this.props.extraType=void 0,this.placeholder$.next(this.props.placeholderFn(this.state.entityName))):(this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName),this.props.extraType="prompt"),this.formControl.value&&this.formControl.setValue(void 0)}),this.onValueChange$.pipe((0,ci.M)(this.onTypeSelect$),(0,ln.t)(this)).subscribe(([h,O])=>{!O||!h||!this.state||(this.props.description=void 0,this.props.extraType="description",this.props.description=X1[this.state.entityName][O][h],this.field.formControl.markAsTouched())})):console.error(`${this.field.id} could not find form state's ${s} to populate Significance options.`)}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-significance-select"]],viewQuery:function(s,h){if(1&s&&e.Gf(Md,5,e.Rgc),2&s){let O;e.iGM(O=e.CRH())&&(h.optionTemplates=O)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcAttrValue","cvcContext","cvcMode","cvcOnClose"]],template:function(s,h){if(1&s&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,K1,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,q1,2,3,"ng-template",null,2,e.W1O)),2&s){const O=e.MAs(6);e.Q6J("cvcFormControl",h.formControl)("cvcFormlyAttributes",h.field)("cvcSelectMode",h.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,h.placeholder$))("cvcCustomTemplate",O)("cvcOptions",e.lcZ(2,11,h.selectOption$))("cvcShowError",h.showError)("cvcDisabled",h.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,h.significanceEnum$))}},dependencies:[u.sg,Bo,R,lo.fM]}),l})()}]};let f=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,n.UX,y.X0.forChild(p),Jn,vo,pr]}),l})();var z,_=c(2666);function b(l,v){1&l&&e._UZ(0,"span",9),2&l&&e.Q6J("nzType","loading")}function J(l,v){if(1&l&&(e.ynx(0),e.YNc(1,b,1,1,"span",8),e._uU(2,"\xa0 "),e.TgZ(3,"span"),e._uU(4),e.qZA(),e.BQk()),2&l){const s=v.ngrxLet;e.xp6(),e.Q6J("ngIf",s.showSpinner),e.xp6(3),e.Oqu(s.message)}}function fe(l,v){if(1&l&&e._uU(0),2&l){const s=e.oxw();e.Oqu(s.successMessage)}}function Ee(l,v){1&l&&(e.TgZ(0,"button",10),e._uU(1," Add Source "),e.qZA()),2&l&&e.Q6J("disabled",null===v.ngrxLet.citation)}const Ge=()=>[0,0];let dt=((z=class{constructor(v,s,h,O,ge){this.checkCitation=v,this.addRemoteCitation=s,this.errors=h,this.apollo=O,this.cdr=ge,this.cvcOnCreate=new e.vpe,this.messageOptions={empty:(mt,Tn)=>`No ${Tn} Source with a citation ID of "${mt}"`,searchCitation:(mt,Tn)=>`Searching ${Tn} for a citation ID of "${mt}"`,foundCitation:(mt,Tn,In)=>`Found ${Tn} citation "${In}" with ID ${mt}`,noCitation:(mt,Tn)=>`No ${Tn} Source with a citation ID of "${mt}" was found`},this.form=new n.nJ({}),this.model={citationId:"",sourceType:Hn.yic.Pubmed},this.formLayout="horizontal",this.options={formState:{formLayout:this.formLayout}},this.onSubmit$=new x.x,this.citationId$=new Ve.X(""),this.sourceType$=new Ve.X(Hn.yic.Pubmed),this.addSourceStubMutator=new xo.U(this.errors),this.fields=[{key:"citationId",props:{hidden:!0}},{key:"sourceType",props:{hidden:!0}}],this.onSubmit$.pipe((0,ln.t)(this)).subscribe(mt=>{console.log("disease-quick-add form model submitted.",mt),this.submitSourceStub()})}ngOnInit(){void 0!==this.model.citationId&&void 0!==this.model.sourceType?(this.queryRef=this.checkCitation.watch({citationId:this.model.citationId,sourceType:this.model.sourceType}),this.checkResult$=this.queryRef.valueChanges.pipe((0,j.U)(v=>({loading:v.loading,citation:v.data?v.data.remoteCitation:null,model:this.model})),(0,Tt.b)(v=>{this.citationString=v.citation?v.citation:void 0})),this.citationId$.pipe((0,ln.t)(this)).subscribe(v=>{this.model.sourceType&&this.queryRef.refetch({citationId:v,sourceType:this.model.sourceType})}),this.formMessageDisplay$=this.checkResult$.pipe((0,j.U)(v=>{const s=v.loading,h=v.citation,O=v.model;return s?{message:this.messageOptions.searchCitation(O.citationId,O.sourceType),showSpinner:!0}:s||null===h?s||null!==h?{message:"UNHANDLED MESSAGE STATE",showSpinner:!1}:{message:this.messageOptions.noCitation(O.citationId,O.sourceType),showSpinner:!1}:{message:this.messageOptions.foundCitation(O.citationId,(0,_.c)(O.sourceType),h),showSpinner:!1}}),(0,ae.O)({message:this.messageOptions.searchCitation(this.model.citationId,this.model.sourceType),showSpinner:!0}))):console.error("source-quick-add provided invalid initial model")}submitSourceStub(){void 0!==this.model.citationId&&void 0!==this.model.sourceType&&(this.mutationState=this.addSourceStubMutator.mutate(this.addRemoteCitation,{input:{citationId:this.model.citationId,sourceType:this.model.sourceType}},{},v=>{if(console.log("source-quick-add submit data callback",v),v.addRemoteCitation){this.successMessage=`New Source "${this.citationString}" added.`;const s=v.addRemoteCitation.newSource,h=(0,_.c)(this.model.sourceType),O=this.citationString?this.citationString:"NO CITATION",ge={query:Xr.Ps`
                query WriteLocalSource($id: Int!) {
                  source(id: $id) {
                    id
                    name
                    link
                    citation
                    citationId
                    sourceType
                  }
                }
              `,data:{source:{__typename:"Source",id:s.id,name:`${h}: ${O}`,link:`sources/${s.id}`,citation:O,citationId:this.model.citationId,sourceType:this.model.sourceType}},variables:{id:s.id}};this.apollo.client.cache.writeQuery(ge)||console.error("source-quick-add.form Source writeQuery failed.",ge),setTimeout(()=>{const Tn={id:`Source:${s.id}`,fragment:Xr.Ps`
                  fragment LinkableSource on Source {
                    id
                    name
                    link
                  }
                `},In=this.apollo.client.cache.readFragment(Tn);null!==In&&this.cvcOnCreate.next(In.id)},1e3)}}))}ngOnChanges(v){if(v.cvcSourceType){const s=v.cvcSourceType.currentValue;this.sourceType$.next(s),this.model={...this.model,sourceType:s}}if(v.cvcCitationId){const s=v.cvcCitationId.currentValue;this.citationId$.next(s),this.model={...this.model,citationId:s}}}}).\u0275fac=function(v){return new(v||z)(e.Y36(Hn.qgP),e.Y36(Hn.LHC),e.Y36(si.Y),e.Y36(Xr._M),e.Y36(e.sBO))},z.\u0275cmp=e.Xpm({type:z,selectors:[["cvc-source-quick-add"]],inputs:{cvcSourceType:"cvcSourceType",cvcCitationId:"cvcCitationId"},outputs:{cvcOnCreate:"cvcOnCreate"},features:[e.TTD],decls:10,vars:11,consts:[[4,"ngrxLet"],["entityType","Source",3,"mutationState","successMessage"],["success",""],["nz-form","","nzLayout","horizontal",3,"formGroup","ngSubmit"],[3,"nzGutter"],["nzSpan","24"],[3,"form","fields","model","options","modelChange"],["nz-button","","nzType","primary","nzBlock","",3,"disabled",4,"ngrxLet"],["nz-icon","",3,"nzType",4,"ngIf"],["nz-icon","",3,"nzType"],["nz-button","","nzType","primary","nzBlock","",3,"disabled"]],template:function(v,s){if(1&v&&(e.YNc(0,J,5,2,"ng-container",0),e.TgZ(1,"cvc-form-submission-status-display",1),e.YNc(2,fe,1,1,"ng-template",null,2,e.W1O),e.TgZ(4,"form",3),e.NdJ("ngSubmit",function(){return s.onSubmit$.next(s.model)}),e.TgZ(5,"nz-row",4)(6,"nz-col",5)(7,"formly-form",6),e.NdJ("modelChange",function(O){return s.model=O}),e.qZA()(),e.TgZ(8,"nz-col",5),e.YNc(9,Ee,2,1,"button",7),e.qZA()()()()),2&v){const h=e.MAs(3);e.Q6J("ngrxLet",s.formMessageDisplay$),e.xp6(),e.Q6J("mutationState",s.mutationState)("successMessage",h),e.xp6(3),e.Q6J("formGroup",s.form),e.xp6(),e.Q6J("nzGutter",e.DdM(10,Ge)),e.xp6(2),e.Q6J("form",s.form)("fields",s.fields)("model",s.model)("options",s.options),e.xp6(2),e.Q6J("ngrxLet",s.checkResult$)}},dependencies:[u.O5,n._Y,n.JL,n.sg,lo.eJ,y.T7,uo.ix,de.w,ce.dQ,ee.Ls,H.t3,H.SK,N.Lr,ni.F],changeDetection:0}),z);dt=(0,V.gn)([(0,ln.c)()],dt);const zt=["optionTemplates"];function kt(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"nz-col",9)(1,"nz-select",10),e.NdJ("ngModelChange",function(O){e.CHM(s);const ge=e.oxw();return e.KtG(ge.sourceType$.next(O))}),e.ALo(2,"ngrxPush"),e._UZ(3,"nz-option",11)(4,"nz-option",12)(5,"nz-option",13),e.qZA()()}if(2&l){const s=e.oxw();e.xp6(),e.Q6J("nzOptionHeightPx",28)("ngModel",e.lcZ(2,2,s.sourceType$))}}function Ht(l,v){1&l&&(e.TgZ(0,"div"),e._uU(1,"PMID:"),e.qZA())}function Gt(l,v){1&l&&(e.TgZ(0,"div"),e._uU(1,"ID:"),e.qZA())}function $t(l,v){1&l&&(e.TgZ(0,"div"),e._uU(1,"doi.org/"),e.qZA())}function pn(l,v){if(1&l&&(e.TgZ(0,"nz-col",14),e.ynx(1,15),e.ALo(2,"ngrxPush"),e.YNc(3,Ht,2,0,"div",16)(4,Gt,2,0,"div",16)(5,$t,2,0,"div",16),e.BQk(),e.qZA()),2&l){const s=e.oxw();e.xp6(),e.Q6J("ngSwitch",e.lcZ(2,4,s.sourceType$)),e.xp6(2),e.Q6J("ngSwitchCase","PUBMED"),e.xp6(),e.Q6J("ngSwitchCase","ASCO"),e.xp6(),e.Q6J("ngSwitchCase","ASH")}}function Nn(l,v){if(1&l&&(e._UZ(0,"cvc-entity-tag",19),e.TgZ(1,"span",20),e._uU(2," ID: "),e._UZ(3,"span",21),e.ALo(4,"highlightTypeahead"),e.qZA()),2&l){const s=e.oxw().$implicit,h=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",s.__typename+":"+s.id)("cvcEmphasize",h),e.xp6(3),e.Q6J("innerHtml",e.xi3(4,4,s.citationId.toString(),h),e.oJD)}}function Gn(l,v){1&l&&(e.ynx(0),e.YNc(1,Nn,5,7,"ng-template",null,18,e.W1O),e.BQk())}function qt(l,v){if(1&l&&(e.ynx(0),e.YNc(1,Gn,3,0,"ng-container",17),e.ALo(2,"ngrxPush"),e.BQk()),2&l){const s=e.oxw();e.xp6(),e.Q6J("ngForOf",e.lcZ(2,1,s.result$))}}function mn(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"div",22)(1,"cvc-entity-tag",23),e.NdJ("cvcOnClose",function(){const ge=e.CHM(s).$implicit,mt=e.oxw();return e.KtG(mt.onTagClose$.next(ge.nzValue))}),e.qZA()()}if(2&l){const s=v.$implicit,h=e.oxw();e.xp6(),e.Q6J("cvcCacheId","Source:"+s.nzValue)("cvcContext",h.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",h.props.isMultiSelect?"default":"closeable")}}function Kn(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"cvc-source-quick-add",24),e.NdJ("cvcOnCreate",function(O){e.CHM(s);const ge=e.oxw();return e.KtG(ge.onPopulate$.next(O))}),e.qZA()}if(2&l){const s=v.model;e.Q6J("cvcCitationId",s.citationId)("cvcSourceType",s.sourceType)}}function Qn(l,v){1&l&&(e.TgZ(0,"button",25),e._uU(1,"Add a New Source"),e.qZA())}const go=()=>[6,6],ki=Vo(No(),zi());let Ri=(()=>{class l extends ki{constructor(s,h,O){super(),this.taq=s,this.tq=h,this.changeDetectorRef=O,this.onModel$=new it.y,this.defaultSourceType=Hn.yic.Pubmed,this.defaultOptions={props:{entityName:{singular:"Source",plural:"Sources"},isMultiSelect:!1,minSearchStrLength:2,tooltip:"PubMed, ASCO, or ASH Abstract Source(s) that support items, statements or descriptions.",placeholders:{default:"Search PubMed, ASCO, and ASH Sources",contextualFn:ge=>`Search ${ge} Sources`},description:"Select Source type, then enter its ID to search Sources"}},this.sourceType$=new Ve.X(this.defaultSourceType),this.sourceTypeName$=new Ve.X((0,_.c)(this.defaultSourceType)),this.placeholder$=new Ve.X(this.defaultOptions.props.placeholders.contextualFn((0,_.c)(this.defaultSourceType))),this.showTypeSelect$=new it.y}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:this.sourceType$,typeaheadParamName$:this.sourceTypeName$||void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent,minSearchStrLength:this.field.props.minSearchStrLength}),this.initialDescription=this.props.description,this.showTypeSelect$=this.onValueChange$.pipe((0,j.U)(s=>!!(!s||s&&Array.isArray(s)))),this.sourceType$.pipe((0,ln.t)(this)).subscribe(s=>{const h=(0,_.c)(s);this.sourceTypeName$.next(h),this.placeholder$.next(this.props.placeholders.contextualFn(h))}),this.onModel$=(0,Ho.a)([this.sourceType$,this.onSearch$]).pipe((0,j.U)(([s,h])=>({citationId:h,sourceType:s}))),this.onValueChange$.pipe((0,ln.t)(this)).subscribe(s=>{this.props.description=s?void 0:this.initialDescription})}getTypeaheadVarsFn(s,h=Hn.yic.Pubmed){return{partialCitationId:s,sourceType:h}}getTypeaheadResultsFn(s){return s.data.sourceTypeahead}getTagQueryVarsFn(s){return{id:s}}getTagQueryResultsFn(s){return s.data.source}getSelectedItemOptionFn(s){return{value:s.id,label:s.name}}getSelectOptionsFn(s,h){return s.map((O,ge)=>({label:h.get(ge)||O.name,value:O.id}))}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(Hn.aC3),e.Y36(Hn.BYO),e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-source-select"]],viewQuery:function(s,h){if(1&s&&e.Gf(zt,5,e.Rgc),2&s){let O;e.iGM(O=e.CRH())&&(h.optionTemplates=O)}},features:[e.qOj],decls:21,vars:39,consts:[[1,"select-layout",3,"nzGutter"],["nzFlex","80px",4,"ngIf"],["nzFlex","60px","class","prefix",4,"ngIf"],["nzFlex","auto"],[3,"cvcMinSearchStrLength","cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcParamName","cvcShowError","cvcDisabled","cvcLoading","cvcAddEntity","cvcAddEntityModel","cvcSelectOpen","cvcOnSearch","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],["addSource",""],["addSourceBtn",""],["nzFlex","80px"],["nzSize","default","nzBlock","",3,"nzOptionHeightPx","ngModel","ngModelChange"],["nzValue","PUBMED","nzLabel","PubMed"],["nzValue","ASCO","nzLabel","ASCO"],["nzValue","ASH","nzLabel","ASH"],["nzFlex","60px",1,"prefix"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"],[3,"cvcCitationId","cvcSourceType","cvcOnCreate"],["type","button"]],template:function(s,h){if(1&s&&(e.TgZ(0,"nz-row",0),e.YNc(1,kt,6,4,"nz-col",1),e.ALo(2,"ngrxPush"),e.YNc(3,pn,6,6,"nz-col",2),e.ALo(4,"ngrxPush"),e.TgZ(5,"nz-col",3)(6,"cvc-entity-select",4),e.NdJ("cvcOnSearch",function(ge){return h.onSearch$.next(ge)})("cvcOnModelChange",function(ge){return h.props.change&&h.props.change(h.field,ge)}),e.ALo(7,"ngrxPush"),e.ALo(8,"ngrxPush"),e.ALo(9,"ngrxPush"),e.ALo(10,"ngrxPush"),e.ALo(11,"ngrxPush"),e.ALo(12,"ngrxPush"),e.ALo(13,"ngrxPush"),e.qZA()()(),e.YNc(14,qt,3,3,"ng-container",5)(15,mn,2,3,"ng-template",null,6,e.W1O)(17,Kn,1,2,"ng-template",null,7,e.W1O)(19,Qn,2,0,"ng-template",null,8,e.W1O)),2&s){const O=e.MAs(16),ge=e.MAs(18);e.Q6J("nzGutter",e.DdM(38,go)),e.xp6(),e.Q6J("ngIf",e.lcZ(2,20,h.showTypeSelect$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(4,22,h.showTypeSelect$)),e.xp6(3),e.Q6J("cvcMinSearchStrLength",h.props.minSearchStrLength)("cvcSelectMode",h.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",O)("cvcFormControl",h.formControl)("cvcFormlyAttributes",h.field)("cvcEntityName",h.props.entityName)("cvcPlaceholder",e.lcZ(7,24,h.placeholder$))("cvcResults",e.lcZ(8,26,h.result$))("cvcOptions",e.lcZ(9,28,h.selectOption$))("cvcParamName",e.lcZ(10,30,h.sourceTypeName$))("cvcShowError",h.showError)("cvcDisabled",h.props.disabled)("cvcLoading",e.lcZ(11,32,h.isLoading$))("cvcAddEntity",ge)("cvcAddEntityModel",e.lcZ(12,34,h.onModel$))("cvcSelectOpen",e.lcZ(13,36,h.selectOpen$)),e.xp6(8),e.Q6J("ngrxLet",h.onSearch$)}},dependencies:[u.sg,u.O5,u.RF,u.n9,n.JJ,n.On,lo.eJ,Be.Ip,Be.Vq,H.t3,H.SK,Ce.ZU,dn,nn.J,dt,lo.fM,Mr.A],styles:[".prefix[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{text-align:right;line-height:28px;color:#999}.select-layout[_ngcontent-%COMP%]{flex-wrap:nowrap}"],changeDetection:0}),l})();const qs={types:[{name:"source-select",wrappers:["form-field"],component:Ri,defaultOptions:{props:{label:"Source"}}},{name:"source-multi-select",wrappers:["form-field"],component:Ri,defaultOptions:{props:{label:"Sources",isMultiSelect:!0}}}]};let Qi=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,n.u5,n.UX,y.X0.forChild(qs),Nt.L,uo.sL,Ie.aF,Be.LV,Xn.$6,fi.Qp,ee.PV,B.o7,H.Jb,qn.cg,st.zf,N.U5,he.ic,Ce.ZJ,An.S,to.X,ti.g,Jn,xn,We.s,ut.x]}),l})();function ts(l,v){if(1&l&&e._UZ(0,"nz-option",4),2&l){const s=v.$implicit;e.Q6J("nzLabel",s)("nzValue",s)("nzHide",!0)}}function ep(l,v){if(1&l){const s=e.EpF();e.ynx(0),e.TgZ(1,"nz-select",2),e.NdJ("ngModelChange",function(O){e.CHM(s);const ge=e.oxw();return e.KtG(ge.onValueChange$.next(O))}),e.YNc(2,ts,1,3,"nz-option",3),e.qZA(),e.BQk()}if(2&l){const s=e.oxw();e.xp6(),e.Q6J("formControl",s.formControl)("formlyAttributes",s.field),e.xp6(),e.Q6J("ngForOf",s.formControl.value)}}function tp(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"nz-tag",7),e.NdJ("nzOnClose",function(O){e.CHM(s);const ge=e.oxw(2);return e.KtG(ge.onTagClose$.next(O))}),e._uU(1),e.qZA()}if(2&l){const s=v.ngIf;e.Q6J("nzMode","closeable"),e.xp6(),e.hij(" ",s," ")}}function _o(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"input",10,11),e.NdJ("keydown.enter",function(){e.CHM(s);const O=e.MAs(1);return e.KtG(O.blur())}),e.qZA()}if(2&l){const s=e.oxw(3);e.Q6J("formControl",s.formControl)("type",s.props.type||"text")("formlyAttributes",s.field)}}function wo(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"nz-input-number",12,13),e.NdJ("keydown.enter",function(){e.CHM(s);const O=e.MAs(1);return e.KtG(O.blur())}),e.qZA()}if(2&l){const s=e.oxw(3);e.Q6J("formControl",s.formControl)("formlyAttributes",s.field)}}function bo(l,v){if(1&l&&(e.ynx(0),e.YNc(1,_o,2,3,"input",8)(2,wo,2,2,"ng-template",null,9,e.W1O),e.BQk()),2&l){const s=e.MAs(3),h=e.oxw(2);e.xp6(),e.Q6J("ngIf","number"!==h.props.type)("ngIfElse",s)}}function ii(l,v){if(1&l&&(e.YNc(0,tp,2,2,"nz-tag",5),e.ALo(1,"ngrxPush"),e.YNc(2,bo,4,2,"ng-container",6),e.ALo(3,"ngrxPush")),2&l){const s=e.oxw();e.Q6J("ngIf",e.lcZ(1,2,s.tagLabel$)),e.xp6(2),e.Q6J("ngIf",!e.lcZ(3,4,s.tagLabel$))}}const vr=Vo(No(),Rr);let Fs=(()=>{class l extends vr{constructor(){super(),this.defaultOptions={props:{label:"Enter value"}}}ngAfterViewInit(){this.configureBaseField(),this.configureStringTagField()}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-tag-input"]],features:[e.qOj],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["singleInputField",""],["nzMode","tags","nzPlaceHolder","Please select","nzAllowClear","","nzDropdownClassName","hide-dropdown",3,"formControl","formlyAttributes","ngModelChange"],[3,"nzLabel","nzValue","nzHide",4,"ngFor","ngForOf"],[3,"nzLabel","nzValue","nzHide"],[3,"nzMode","nzOnClose",4,"ngIf"],[4,"ngIf"],[3,"nzMode","nzOnClose"],["nz-input","",3,"formControl","type","formlyAttributes","keydown.enter",4,"ngIf","ngIfElse"],["numberTmp",""],["nz-input","",3,"formControl","type","formlyAttributes","keydown.enter"],["baseInputTxt",""],[3,"formControl","formlyAttributes","keydown.enter"],["baseInputNum",""]],template:function(s,h){if(1&s&&e.YNc(0,ep,3,3,"ng-container",0)(1,ii,4,6,"ng-template",null,1,e.W1O),2&s){const O=e.MAs(2);e.Q6J("ngIf",h.props.isMultiInput)("ngIfElse",O)}},dependencies:[u.sg,u.O5,n.Fj,n.JJ,n.oH,y.JD,B.Zp,Be.Ip,Be.Vq,to.j,lo.fM],changeDetection:0}),l})();const ms={types:[{name:"tag-input",wrappers:["form-field"],component:Fs,defaultOptions:{modelOptions:{updateOn:"blur"}}},{name:"tag-multi-input",wrappers:["form-field"],component:Fs,defaultOptions:{props:{isMultiInput:!0}}}]};let ga=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,n.UX,y.X0.forChild(ms),N.U5,B.o7,Be.LV,to.X,Zn]}),l})();var Oi;function np(l,v){1&l&&e._UZ(0,"span",7)}function op(l,v){1&l&&e._UZ(0,"span",8)}const Fr=()=>[0,0],hc={name:void 0};let ns=((Oi=class{set cvcSearchString(v){v&&this.searchString$.next(v)}constructor(v,s){this.query=v,this.errors=s,this.cvcOnCreate=new e.vpe,this.model=hc,this.form=new n.nJ({}),this.options={},this.onSubmit$=new x.x,this.searchString$=new Ve.X(void 0),this.queryMutator=new xo.U(this.errors),this.isSubmitting$=new Ve.X(!1),this.submitSuccess$=new Ve.X(!1),this.submitError$=new Ve.X([]),this.addTherapyMutator=new xo.U(this.errors),this.fields=[{key:"name",props:{hidden:!0,required:!0}}],this.searchString$.pipe((0,ln.t)(this)).subscribe(h=>{this.model.name=h}),this.onSubmit$.pipe((0,ln.t)(this)).subscribe(h=>{this.submitTherapy(h)})}submitTherapy(v){if(!v.name)return void console.error("therapy-quick-add form submitTherapy requires model with valid name.");let s=this.addTherapyMutator.mutate(this.query,{name:v.name},{},h=>{console.log("therapy-quick-add submit data callback",h),h.addTherapy&&this.cvcOnCreate.next(h.addTherapy.therapy.id)});s.submitSuccess$.pipe((0,ln.t)(this)).subscribe(h=>{console.log("therapy-quick-add submitSuccess$",h),this.submitSuccess$.next(h)}),s.submitError$.pipe((0,ln.t)(this)).subscribe(h=>{console.log("therapy-quick-add submitError$",h),this.submitError$.next(h)}),s.isSubmitting$.pipe((0,ln.t)(this)).subscribe(h=>{this.isSubmitting$.next(h)})}}).\u0275fac=function(v){return new(v||Oi)(e.Y36(Hn.Y_K),e.Y36(si.Y))},Oi.\u0275cmp=e.Xpm({type:Oi,selectors:[["cvc-therapy-quick-add-form"]],inputs:{cvcSearchString:"cvcSearchString"},outputs:{cvcOnCreate:"cvcOnCreate"},decls:14,vars:17,consts:[[3,"formGroup","ngSubmit"],[3,"nzGutter"],["nzSpan","24"],[3,"form","fields","model","options","modelChange"],["nz-button","","nzType","primary","nzBlock","",3,"disabled"],["nz-icon","","nzType","plus-circle","nzTheme","outline",4,"ngIf"],["nz-icon","","nzType","loading","nzTheme","outline",4,"ngIf"],["nz-icon","","nzType","plus-circle","nzTheme","outline"],["nz-icon","","nzType","loading","nzTheme","outline"]],template:function(v,s){1&v&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return s.onSubmit$.next(s.model)}),e.TgZ(1,"nz-row",1)(2,"nz-col",2)(3,"formly-form",3),e.NdJ("modelChange",function(O){return s.model=O}),e.qZA()(),e.TgZ(4,"nz-col",2)(5,"button",4),e.YNc(6,np,1,0,"span",5),e.ALo(7,"ngrxPush"),e.YNc(8,op,1,0,"span",6),e.ALo(9,"ngrxPush"),e._uU(10," Create Therapy\xa0"),e.TgZ(11,"i"),e._uU(12),e.ALo(13,"ngrxPush"),e.qZA()()()()()),2&v&&(e.Q6J("formGroup",s.form),e.xp6(),e.Q6J("nzGutter",e.DdM(16,Fr)),e.xp6(2),e.Q6J("form",s.form)("fields",s.fields)("model",s.model)("options",s.options),e.xp6(2),e.Q6J("disabled",!s.form.valid),e.xp6(),e.Q6J("ngIf",!e.lcZ(7,10,s.isSubmitting$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(9,12,s.isSubmitting$)),e.xp6(4),e.Oqu(e.lcZ(13,14,s.searchString$)))},dependencies:[u.O5,n._Y,n.JL,n.sg,y.T7,uo.ix,de.w,ce.dQ,ee.Ls,H.t3,H.SK,lo.fM],encapsulation:2,changeDetection:0}),Oi);ns=(0,V.gn)([(0,ln.c)()],ns);const bd=["optionTemplates"];function nl(l,v){if(1&l&&(e.ynx(0),e.TgZ(1,"strong"),e._uU(2,"NCIt ID:"),e.qZA(),e._UZ(3,"span",9),e.ALo(4,"highlightTypeahead"),e.BQk()),2&l){const s=e.oxw(2).$implicit,h=e.oxw().ngrxLet;e.xp6(3),e.Q6J("innerHtml",e.xi3(4,1,s.ncitId,h),e.oJD)}}function fc(l,v){if(1&l&&(e.ynx(0),e.TgZ(1,"strong"),e._uU(2,"Aliases: "),e.qZA(),e.TgZ(3,"em"),e._UZ(4,"span",10),e.ALo(5,"highlightTypeahead"),e.qZA(),e.BQk()),2&l){const s=e.oxw(2).$implicit,h=e.oxw().ngrxLet;e.xp6(4),e.Q6J("nzTooltipTitle",s.therapyAliases.join(", "))("innerHtml",e.xi3(5,2,s.therapyAliases.join(", "),h),e.oJD)}}function g1(l,v){if(1&l&&(e._UZ(0,"cvc-entity-tag",6),e.TgZ(1,"span",7),e.YNc(2,nl,5,4,"ng-container",8)(3,fc,6,5,"ng-container",8),e.qZA()),2&l){const s=e.oxw().$implicit,h=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",s.__typename+":"+s.id)("cvcEmphasize",h),e.xp6(2),e.Q6J("ngIf",s.ncitId),e.xp6(),e.Q6J("ngIf",s.therapyAliases.length>0)}}function Lh(l,v){1&l&&(e.ynx(0),e.YNc(1,g1,4,5,"ng-template",null,5,e.W1O),e.BQk())}function kh(l,v){if(1&l&&(e.ynx(0),e.YNc(1,Lh,3,0,"ng-container",4),e.ALo(2,"ngrxPush"),e.BQk()),2&l){const s=e.oxw();e.xp6(),e.Q6J("ngForOf",e.lcZ(2,1,s.result$))}}function Rh(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"div",11)(1,"cvc-entity-tag",12),e.NdJ("cvcOnClose",function(){const ge=e.CHM(s).$implicit,mt=e.oxw();return e.KtG(mt.onTagClose$.next(ge.nzValue))}),e.qZA()()}if(2&l){const s=v.$implicit,h=e.oxw();e.xp6(),e.Q6J("cvcCacheId","Therapy:"+s.nzValue)("cvcContext",h.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",h.props.isMultiSelect?"default":"closeable")}}function Vf(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"cvc-therapy-quick-add-form",13),e.NdJ("cvcOnCreate",function(O){e.CHM(s);const ge=e.oxw();return e.KtG(ge.onPopulate$.next(O))}),e.qZA()}2&l&&e.Q6J("cvcSearchString",v.$implicit)}const Bf=Vo(No(),zi());let N4=(()=>{class l extends Bf{constructor(s,h,O){super(),this.taq=s,this.tq=h,this.changeDetectorRef=O,this.defaultOptions={props:{entityName:{singular:"Therapy",plural:"Therapies"},isMultiSelect:!1,requireType:!0,tooltip:"Therapy or therapy combination which interacts with the specified variant",placeholder:"Search Therapies",requireTypePromptFn:(ge,mt)=>`Select an ${ge} Type to search associated Therapies`}},this.placeholder$=new Ve.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.configurePlaceholders()}configureStateConnections(){if(this.state&&(this.stateEntityName=this.state.entityName,this.state.requires.requiresTherapy$?this.onRequiresTherapy$=this.state.requires.requiresTherapy$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresTherapy$ subject to attach.`),this.props.requireType)){const s=`${this.stateEntityName.toLowerCase()}Type$`;this.state.fields[s]?this.onEntityType$=this.state.fields[s]:console.error(`${this.field.id} requireType is true, however form state does not provide Subject ${s}.`)}}configurePlaceholders(){this.placeholder$.next(this.props.placeholder),this.onRequiresTherapy$&&this.onEntityType$&&(0,Ho.a)([this.onRequiresTherapy$,this.onEntityType$]).pipe((0,ye.x)(),(0,ln.t)(this)).subscribe(([s,h])=>{!s&&h?(this.props.required=!1,this.props.disabled=!0,this.props.description=`${(0,Io.E)(h)} ${this.state.entityName} does not include associated therapies`,this.props.extraType="prompt",this.resetField(),this.cdr.markForCheck()):this.props.requireType&&!h?(this.props.required=!1,this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName,this.props.isMultiSelect),this.props.extraType="prompt"):s?(this.props.required=!0,this.props.disabled=!1,this.props.description=void 0,this.props.extraType=void 0):(!s&&this.formControl.value||this.props.requireType&&!h&&this.formControl.value)&&(this.resetField(),console.log("HERE2"))})}getTypeaheadVarsFn(s){return{name:s}}getTypeaheadResultsFn(s){return s.data.therapyTypeahead}getTagQueryVarsFn(s){return{id:s}}getTagQueryResultsFn(s){return s.data.therapy}getSelectedItemOptionFn(s){return{value:s.id,label:s.name}}getSelectOptionsFn(s,h){return s.map((O,ge)=>({label:h.get(ge)||O.name,value:O.id}))}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(Hn.cIw),e.Y36(Hn.sjj),e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-therapy-select"]],viewQuery:function(s,h){if(1&s&&e.Gf(bd,5,e.Rgc),2&s){let O;e.iGM(O=e.CRH())&&(h.optionTemplates=O)}},features:[e.qOj],decls:12,vars:26,consts:[[3,"cvcAddEntity","cvcCustomTemplate","cvcDisabled","cvcEntityName","cvcFormControl","cvcFormlyAttributes","cvcLoading","cvcOptions","cvcPlaceholder","cvcResults","cvcSelectMode","cvcShowError","cvcSelectOpen","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],["addTherapy",""],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf"],[3,"innerHtml"],["nz-typography","","nzType","secondary","nz-tooltip","",3,"nzTooltipTitle","innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"],[3,"cvcSearchString","cvcOnCreate"]],template:function(s,h){if(1&s&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(ge){return h.onSearch$.next(ge)})("cvcOnOpenChange",function(ge){return h.onOpenChange$.next(ge)})("cvcOnModelChange",function(ge){return h.props.change&&h.props.change(h.field,ge)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.qZA(),e.YNc(7,kh,3,3,"ng-container",1)(8,Rh,2,3,"ng-template",null,2,e.W1O)(10,Vf,1,1,"ng-template",null,3,e.W1O)),2&s){const O=e.MAs(9),ge=e.MAs(11);e.Q6J("cvcAddEntity",ge)("cvcCustomTemplate",O)("cvcDisabled",h.onRequiresTherapy$&&!e.lcZ(1,14,h.onRequiresTherapy$))("cvcEntityName",h.props.entityName)("cvcFormControl",h.formControl)("cvcFormlyAttributes",h.field)("cvcLoading",e.lcZ(2,16,h.isLoading$))("cvcOptions",e.lcZ(3,18,h.selectOption$))("cvcPlaceholder",e.lcZ(4,20,h.placeholder$))("cvcResults",e.lcZ(5,22,h.result$))("cvcSelectMode",h.props.isMultiSelect?"multiple":"default")("cvcShowError",h.showError)("cvcSelectOpen",e.lcZ(6,24,h.selectOpen$)),e.xp6(7),e.Q6J("ngrxLet",h.onSearch$)}},dependencies:[u.sg,u.O5,lo.eJ,qn.SY,Ce.ZU,dn,nn.J,ns,lo.fM,Mr.A],changeDetection:0}),l})();const Up={types:[{name:"therapy-select",wrappers:["form-field"],component:N4,defaultOptions:{props:{label:"Therapy"}}},{name:"therapy-multi-select",wrappers:["form-field"],component:N4,defaultOptions:{props:{label:"Therapies",isMultiSelect:!0}}}]};let Yp=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,n.UX,y.X0.forChild(Up),Nt.L,uo.sL,Be.LV,Xn.$6,fi.Qp,ee.PV,B.o7,H.Jb,qn.cg,st.zf,N.U5,he.ic,Ce.ZJ,to.X,Jn,xn,We.s,ut.x]}),l})();const k4={isDefaultCol:l=>"default"===l.type,isSelectCol:l=>"select"===l.type,isEntityTagCol:l=>"entity-tag"===l.type,isEnumTagCol:l=>"enum-tag"===l.type,isTextTagCol:l=>"text-tag"===l.type},jp=l=>void 0!==l.sort,Ed=l=>void 0!==l.filter,R4={diseases:Hn.pP7.DiseaseName,feature:Hn.pP7.FeatureName,therapies:Hn.pP7.TherapyName,variant:Hn.pP7.VariantName},cu={diseases:"diseaseName",therapies:"therapyName",variant:"variantName",feature:"featureName",aliases:"variantAlias"},Qp=["selected","id"];class Hh{constructor(){this.sortStreams=[],this.filterStreams=[],this.config=this.configureColumnStreams([{key:"selected",label:"Select",type:"select",width:"25px",align:"center",fixedLeft:!0,checkbox:{th:{showCheckbox:!1},td:{showCheckbox:!0}}},{key:"id",label:"ID",hidden:!0,type:"hidden",width:"0px"},{key:"variant",label:"Variant",type:"entity-tag",width:"215px",context:"variant",fixedLeft:!0,showStatus:!0,tag:{fullWidth:!0,truncateLabel:"200px"},sort:{default:"ascend"},filter:{inputType:"default",options:[{key:"Filter Variant Name",value:null}]}},{key:"aliases",label:"Aliases",type:"default",width:"150px",objectKey:"name",sort:{},filter:{inputType:"default",options:[{key:"Filter Aliases",value:null}]}},{key:"feature",label:"Feature",type:"entity-tag",width:"135px",tag:{truncateLabel:"125px"},sort:{},filter:{inputType:"default",options:[{key:"Filter Feature Name",value:null}]}},{key:"diseases",label:"Diseases",type:"entity-tag",width:"250px",sort:{},tag:{maxTags:1,truncateLabel:"175px"},filter:{inputType:"default",typename:"Therapy",options:[{key:"Filter Therapy Names",value:null}]}},{key:"therapies",label:"Therapies",type:"entity-tag",width:"275px",sort:{},tag:{maxTags:2,truncateLabel:"150px"},filter:{inputType:"default",typename:"Therapy",options:[{key:"Filter Therapy Names",value:null}]}}])}get(){return this.config}getSortStreams(){return this.sortStreams}getFilterStreams(){return this.filterStreams}getAttributeFilters(v,s){return v.getValues().map(O=>({text:(0,Io.E)(O),value:O,byDefault:s===O}))}configureColumnStreams(v){return v.forEach(s=>{const h=s;if(jp(h)&&(h.sort.changes=new Ve.X({key:h.key,value:h.sort.default??null}),this.sortStreams.push(h.sort.changes)),Ed(h)){const O=h.filter.options.find(ge=>ge.byDefault)?.value;h.filter.changes=new Ve.X({key:h.key,value:O??null}),this.filterStreams.push(h.filter.changes)}}),v}}var ol;let ip=((ol=class{set cvcTableScrollerToIndex(v){void 0!==v&&this.scrollToIndex(v)}set cvcTableScrollerToOffset(v){void 0!==v&&this.scrollToIndex(v)}constructor(v){this.host=v,this.cvcTableScrollerOnScroll=new e.vpe,this.cvcTableScrollerOnFetch=new e.vpe,this.cvcTableScrollerTargetHeight=140,this.cvcTableScrollerFetchCount=50,this.onLoadThrottleTime=500,this.onScrollThrottleTime=250,this.onScrollDebounceTime=300}ngAfterViewInit(){if(!this.host||!this.host.cdkVirtualScrollViewport)throw new Error("cvcTableScroller directive could not obtain reference to host cdkVirtualScrollViewport.");this.viewport=this.host.cdkVirtualScrollViewport,this.scrolled$=this.viewport.elementScrolled(),this.rendered$=this.viewport.renderedRangeStream,this.rendered$.pipe((0,un.P)()).subscribe(()=>this.viewport.checkViewportSize()),this.scrolled$.pipe((0,Gi.p)(this.onScrollThrottleTime,Ai.z,{leading:!0,trailing:!0}),(0,Tt.b)(v=>this.cvcTableScrollerOnScroll.next("scroll")),(0,Mo.b)(this.onScrollDebounceTime),(0,ln.t)(this)).subscribe(v=>{this.cvcTableScrollerOnScroll.next("stop")}),this.scrolled$.pipe((0,j.U)(v=>this.viewport.measureScrollOffset("bottom")),(0,ro.G)(),(0,yt.h)(([v,s])=>s<v&&s<this.cvcTableScrollerTargetHeight),(0,Gi.p)(this.onLoadThrottleTime),(0,ln.t)(this)).subscribe(v=>{this.cvcTableScrollerOnScroll.next("bottom");try{this.loadMore(this.cvcTableScrollerPageInfo)}catch(s){console.error(s)}})}loadMore(v){const s=this.cvcTableScrollerQueryRef;if(!v&&s)throw new Error("table-scroll directive requires PageInfo to use provided QueryRef.");if(v&&!s)throw new Error("table-scroll directive requires valid QueryRef when PageInfo provided.");if(v&&s){const[h,O,ge]=[this.cvcTableScrollerFetchCount,v.hasNextPage,v.endCursor];if(!h||!ge)throw new Error("table-scroll PageInfo invalid.");if(!O)return;this.cvcTableScrollerOnFetch.next({first:h,after:ge})}}scrollToIndex(v){const[s,h]=[this.host,this.host.cdkVirtualScrollViewport];if(!s||!h)throw new Error("table-scroll scrollToIndex() cannot find host viewport.");h.scrollToIndex(v)}scrollToOffset(v){const[s,h]=[this.host,this.host.cdkVirtualScrollViewport];if(!s||!h)throw new Error("table-scroll scrollToOffset() cannot find host viewport.");h.scrollToOffset(v)}}).\u0275fac=function(v){return new(v||ol)(e.Y36(pi.N8))},ol.\u0275dir=e.lG2({type:ol,selectors:[["","cvcTableScroller",""]],inputs:{cvcTableScrollerTargetHeight:"cvcTableScrollerTargetHeight",cvcTableScrollerQueryRef:"cvcTableScrollerQueryRef",cvcTableScrollerPageInfo:"cvcTableScrollerPageInfo",cvcTableScrollerFetchCount:"cvcTableScrollerFetchCount",cvcTableScrollerToIndex:"cvcTableScrollerToIndex",cvcTableScrollerToOffset:"cvcTableScrollerToOffset"},outputs:{cvcTableScrollerOnScroll:"cvcTableScrollerOnScroll",cvcTableScrollerOnFetch:"cvcTableScrollerOnFetch"}}),ol);function V4(l,v){1&l&&e._UZ(0,"span",8)}function B4(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"span",9),e.NdJ("click",function(){e.CHM(s),e.oxw(2);const O=e.MAs(3),ge=e.oxw();return O.value="",e.KtG(ge.cvcModelChange.next(null))}),e.qZA()}}function H4(l,v){if(1&l&&e.YNc(0,V4,1,0,"span",6)(1,B4,1,0,"span",7),2&l){e.oxw();const s=e.MAs(3);e.Q6J("ngIf",!s.value),e.xp6(),e.Q6J("ngIf",s.value)}}function $4(l,v){if(1&l){const s=e.EpF();e.ynx(0),e.TgZ(1,"nz-input-group",2)(2,"input",3,4),e.NdJ("ngModelChange",function(O){e.CHM(s);const ge=e.oxw();return e.KtG(ge.cvcModelChange.next(O))}),e.qZA()(),e.YNc(4,H4,2,2,"ng-template",null,5,e.W1O),e.BQk()}if(2&l){const s=e.MAs(5),h=e.oxw();e.xp6(),e.Q6J("nzSuffix",s),e.xp6(),e.Q6J("placeholder",h.cvcPlaceholder)("ngModel",h.cvcModel)}}function $h(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"nz-input-number-group",10)(1,"nz-input-number",11,4),e.NdJ("ngModelChange",function(O){e.CHM(s);const ge=e.oxw();return e.KtG(ge.cvcModelChange.next(""===O?null:O))}),e.qZA()()}if(2&l){const s=e.oxw();let h;e.xp6(),e.Q6J("nzPlaceHolder",null!==(h=s.cvcPlaceholder)&&void 0!==h?h:"")("ngModel",s.cvcModel)("nzMin",1)("nzStep",1)}}ip=(0,V.gn)([(0,ln.c)()],ip);let jf=(()=>{class l{constructor(){this.cvcModel=null,this.cvcModelChange=new e.vpe,this.cvcInputType="default"}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-variant-table-filter-input"]],inputs:{cvcModel:"cvcModel",cvcInputType:"cvcInputType",cvcPlaceholder:"cvcPlaceholder"},outputs:{cvcModelChange:"cvcModelChange"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["numericInput",""],["nzSize","small",3,"nzSuffix"],["nz-input","",3,"placeholder","ngModel","ngModelChange"],["filterInput",""],["suffixIcon",""],["nz-icon","","nzType","search","style","color: #ddd",4,"ngIf"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzType","search",2,"color","#ddd"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],["nzSize","small"],[2,"width","100%",3,"nzPlaceHolder","ngModel","nzMin","nzStep","ngModelChange"]],template:function(s,h){if(1&s&&e.YNc(0,$4,6,3,"ng-container",0)(1,$h,3,4,"ng-template",null,1,e.W1O),2&s){const O=e.MAs(2);e.Q6J("ngIf","default"===h.cvcInputType)("ngIfElse",O)}},dependencies:[u.O5,n.Fj,n.JJ,n.On,de.w,ee.Ls,B.Zp,B.gB,B.ke,ft,re]}),l})();function Qf(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"li",5),e.NdJ("click",function(){const ge=e.CHM(s).$implicit,mt=e.oxw();return e.KtG(mt.cvcOptionChange.next({key:mt.cvcColumnKey,value:ge.value}))}),e._UZ(1,"cvc-attribute-tag",6),e.qZA()}if(2&l){const s=v.$implicit,h=e.oxw();e.Q6J("nzSelected",(null==h.cvcOption?null:h.cvcOption.value)===s.value),e.xp6(),e.Q6J("cvcFullWidth",!0)("cvcChecked",(null==h.cvcOption?null:h.cvcOption.value)===s.value)("cvcAttrValue",s.value)}}let v1=(()=>{class l{constructor(){this.cvcOptionChange=new e.vpe}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-variant-enum-filter-menu"]],inputs:{cvcColumnKey:"cvcColumnKey",cvcFilterOptions:"cvcFilterOptions",cvcOption:"cvcOption"},outputs:{cvcOptionChange:"cvcOptionChange"},decls:6,vars:2,consts:[["nz-menu",""],["nz-menu-item","",3,"nzSelected","click",4,"ngFor","ngForOf"],[2,"padding","3px"],["nz-button","","nzType","default","nzBlock","","nzSize","small",3,"disabled","click"],["nz-icon","","nzType","retweet","nzTheme","outline"],["nz-menu-item","",3,"nzSelected","click"],["cvcContext","menu-item",3,"cvcFullWidth","cvcChecked","cvcAttrValue"]],template:function(s,h){1&s&&(e.TgZ(0,"ul",0),e.YNc(1,Qf,2,4,"li",1),e.TgZ(2,"li",2)(3,"button",3),e.NdJ("click",function(){return h.cvcOptionChange.next({key:h.cvcColumnKey,value:null})}),e._UZ(4,"span",4),e._uU(5," Reset "),e.qZA()()()),2&s&&(e.xp6(),e.Q6J("ngForOf",h.cvcFilterOptions),e.xp6(2),e.Q6J("disabled",null===(null==h.cvcOption?null:h.cvcOption.value)))},dependencies:[u.sg,R,uo.ix,de.w,ce.dQ,ee.Ls,ra.wO,ra.u9],styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}.hide-dropdown[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]     ul li:hover{background-color:#e6f7ff}[_nghost-%COMP%]     ul li.ant-dropdown-menu-item-selected{background-color:#1890ff}[_nghost-%COMP%]     ul li.ant-dropdown-menu-item-selected:active{background-color:#096dd9}"],changeDetection:0}),l})();var lu;function Gf(l,v){if(1&l&&e._UZ(0,"th",14),2&l){const s=v.ngIf;let h;e.Q6J("nzShowCheckbox",s.checkbox.th.showCheckbox||!1)("nzWidth",s.width)("nzAlign",null!==(h=s.align)&&void 0!==h?h:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)}}function Wf(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"th",15),e.NdJ("nzSortOrderChange",function(O){const mt=e.CHM(s).ngIf;return e.KtG(mt.sort.changes.next({key:mt.key,value:O}))}),e.ALo(1,"ngrxPush"),e.TgZ(2,"span",16),e._uU(3),e.qZA()()}if(2&l){const s=v.ngIf;let h,O;e.Q6J("nzColumnKey",s.key)("nzAlign",null!==(h=s.align)&&void 0!==h?h:"left")("nzWidth",s.width)("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)("nzShowSort",void 0!==s.sort)("nzSortFn",!0)("nzSortOrder",(null==(O=e.lcZ(1,10,s.sort.changes))?null:O.value)||null),e.xp6(2),e.Q6J("nzTooltipTitle",s.tooltip),e.xp6(),e.hij(" ",s.label," ")}}function rp(l,v){if(1&l&&(e.TgZ(0,"th",17),e._uU(1),e.qZA()),2&l){const s=v.ngIf;let h;e.Q6J("nzColumnKey",s.key)("nzAlign",null!==(h=s.align)&&void 0!==h?h:"left")("nzWidth",s.width)("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)("nzTooltipTitle",s.tooltip),e.xp6(),e.hij(" ",s.label," ")}}function U4(l,v){if(1&l&&(e.TgZ(0,"th",17),e._uU(1),e.qZA()),2&l){const s=v.ngIf;let h;e.Q6J("nzColumnKey",s.key)("nzAlign",null!==(h=s.align)&&void 0!==h?h:"left")("nzWidth",s.width)("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)("nzTooltipTitle",s.tooltip),e.xp6(),e.hij(" ",s.label," ")}}function Gp(l,v){if(1&l&&(e.TgZ(0,"th",17),e._uU(1),e.qZA()),2&l){const s=v.ngIf;let h;e.Q6J("nzColumnKey",s.key)("nzAlign",null!==(h=s.align)&&void 0!==h?h:"left")("nzWidth",s.width)("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)("nzTooltipTitle",s.tooltip),e.xp6(),e.hij(" ",s.label," ")}}function Wp(l,v){if(1&l&&(e.ynx(0),e.YNc(1,Gf,1,5,"th",11),e.ALo(2,"guardType"),e.YNc(3,Wf,4,12,"th",12),e.ALo(4,"guardType"),e.YNc(5,rp,2,7,"th",13),e.ALo(6,"guardType"),e.YNc(7,U4,2,7,"th",13),e.ALo(8,"guardType"),e.YNc(9,Gp,2,7,"th",13),e.ALo(10,"guardType"),e.BQk()),2&l){const s=e.oxw().$implicit,h=e.oxw(2);e.xp6(),e.Q6J("ngIf",e.xi3(2,5,s,h.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,8,s,h.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,11,s,h.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,14,s,h.colGuards.isTextTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(10,17,s,h.colGuards.isDefaultCol))}}function uu(l,v){if(1&l&&(e.ynx(0),e.YNc(1,Wp,11,20,"ng-container",10),e.BQk()),2&l){const s=v.$implicit;e.xp6(),e.Q6J("ngIf",!s.hidden)}}function sp(l,v){if(1&l&&(e.TgZ(0,"th",22),e._uU(1," \xa0 "),e.qZA()),2&l){const s=v.ngIf;let h;e.Q6J("nzColumnKey",s.key)("nzAlign",null!==(h=s.align)&&void 0!==h?h:"left")("nzWidth",s.width)("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)}}function Zp(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"cvc-variant-table-filter-input",25),e.NdJ("cvcModelChange",function(O){const mt=e.CHM(s).ngIf,Tn=e.oxw().ngIf;return e.KtG(mt.changes.next({key:Tn.key,value:O}))}),e.qZA()}if(2&l){const s=e.oxw().ngIf;e.Q6J("cvcInputType",s.filter.inputType)("cvcPlaceholder",s.filter.options[0].key)("cvcModel",s.filter.options[0].value)}}function _1(l,v){if(1&l&&(e.TgZ(0,"th",23),e.YNc(1,Zp,1,3,"cvc-variant-table-filter-input",24),e.qZA()),2&l){const s=v.ngIf;let h;e.Q6J("nzColumnKey",s.key)("nzWidth",s.width)("nzAlign",null!==(h=s.align)&&void 0!==h?h:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1),e.xp6(),e.Q6J("ngIf",s.filter)}}function ap(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"th",26,27),e.NdJ("nzSortOrderChange",function(O){const mt=e.CHM(s).ngIf;return e.KtG(mt.sort.changes.next({key:mt.key,value:O}))}),e.ALo(2,"ngrxPush"),e.TgZ(3,"nz-filter-trigger",28,29),e.ALo(5,"ngrxPush"),e._UZ(6,"span",30),e.qZA(),e.TgZ(7,"nz-dropdown-menu",null,31)(9,"cvc-variant-enum-filter-menu",32),e.NdJ("cvcOptionChange",function(O){const mt=e.CHM(s).ngIf,Tn=e.MAs(4);return mt.filter.changes.next(O),e.KtG(Tn.nzVisible=!1)}),e.ALo(10,"ngrxPush"),e.qZA()()()}if(2&l){const s=v.ngIf,h=e.MAs(8);let O,ge,mt;e.Q6J("nzColumnKey",s.key)("nzWidth",s.width)("nzAlign",null!==(O=s.align)&&void 0!==O?O:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)("nzShowSort",!0)("nzSortFn",!0)("nzSortOrder",(null==(ge=e.lcZ(2,15,s.sort.changes))?null:ge.value)||null)("nzShowFilter",void 0!==s.filter)("nzFilterFn",!0),e.xp6(3),e.Q6J("nzDropdownMenu",h)("nzActive",null!==(null==(mt=e.lcZ(5,17,s.filter.changes))?null:mt.value)),e.xp6(6),e.Q6J("cvcColumnKey",s.key)("cvcFilterOptions",s.filter.options)("cvcOption",e.lcZ(10,19,s.filter.changes))}}function Sd(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"th",33,27)(2,"nz-filter-trigger",28),e.ALo(3,"ngrxPush"),e._UZ(4,"span",34),e.qZA(),e.TgZ(5,"nz-dropdown-menu",null,35)(7,"div",36)(8,"div",37)(9,"cvc-variant-table-filter-input",38),e.NdJ("cvcModelChange",function(O){const mt=e.CHM(s).ngIf;return e.KtG(mt.filter.changes.next({key:mt.key,value:O}))}),e.qZA()()()()()}if(2&l){const s=v.ngIf,h=e.MAs(6);let O,ge;e.Q6J("nzColumnKey",s.key)("nzWidth",s.width)("nzAlign",null!==(O=s.align)&&void 0!==O?O:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)("nzFilterFn",!0),e.xp6(2),e.Q6J("nzDropdownMenu",h)("nzActive",null!==(null==(ge=e.lcZ(3,10,s.filter.changes))?null:ge.value)),e.xp6(7),e.Q6J("cvcPlaceholder",s.filter.options[0].key)("cvcModel",s.filter.options[0].value)}}function Jp(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"cvc-variant-table-filter-input",38),e.NdJ("cvcModelChange",function(O){const mt=e.CHM(s).ngIf,Tn=e.oxw().ngIf;return e.KtG(mt.changes.next({key:Tn.key,value:O}))}),e.qZA()}if(2&l){const s=e.oxw().ngIf;e.Q6J("cvcPlaceholder",s.filter.options[0].key)("cvcModel",s.filter.options[0].value)}}function Kp(l,v){if(1&l&&(e.TgZ(0,"th",23),e.YNc(1,Jp,1,2,"cvc-variant-table-filter-input",39),e.qZA()),2&l){const s=v.ngIf;let h;e.Q6J("nzColumnKey",s.key)("nzWidth",s.width)("nzAlign",null!==(h=s.align)&&void 0!==h?h:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1),e.xp6(),e.Q6J("ngIf",s.filter)}}function cp(l,v){if(1&l&&(e.ynx(0),e.YNc(1,sp,2,5,"th",18),e.ALo(2,"guardType"),e.YNc(3,_1,2,6,"th",19),e.ALo(4,"guardType"),e.YNc(5,ap,11,21,"th",20),e.ALo(6,"guardType"),e.YNc(7,Sd,10,12,"th",21),e.ALo(8,"guardType"),e.YNc(9,Kp,2,6,"th",19),e.ALo(10,"guardType"),e.BQk()),2&l){const s=e.oxw().$implicit,h=e.oxw(2);e.xp6(),e.Q6J("ngIf",e.xi3(2,5,s,h.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,8,s,h.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,11,s,h.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,14,s,h.colGuards.isTextTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(10,17,s,h.colGuards.isDefaultCol))}}function Zf(l,v){if(1&l&&(e.ynx(0),e.YNc(1,cp,11,20,"ng-container",10),e.BQk()),2&l){const s=v.$implicit;e.xp6(),e.Q6J("ngIf",!s.hidden)}}function qp(l,v){if(1&l&&(e.TgZ(0,"thead")(1,"tr",7),e.YNc(2,uu,2,1,"ng-container",8),e.qZA(),e.TgZ(3,"tr",9),e.YNc(4,Zf,2,1,"ng-container",8),e.qZA()()),2&l){const s=v.ngrxLet;e.xp6(2),e.Q6J("ngForOf",s),e.xp6(2),e.Q6J("ngForOf",s)}}function xd(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"td",45),e.NdJ("nzCheckedChange",function(O){e.CHM(s);const ge=e.oxw(3).$implicit,mt=e.oxw(2);return e.KtG(mt.onRowSelected$.next({id:ge.id,selected:O}))}),e.qZA()}if(2&l){const s=v.ngIf,h=e.oxw(3).$implicit;let O;e.Q6J("nzChecked",h.selected)("nzAlign",null!==(O=s.align)&&void 0!==O?O:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1)}}function Y4(l,v){1&l&&e.GkF(0)}const Uh=(l,v,s)=>({$implicit:l,config:v,emphasize:s});function j4(l,v){if(1&l&&(e.ynx(0),e.YNc(1,Y4,1,0,"ng-container",51),e.ALo(2,"isArray"),e.ALo(3,"ngrxPush"),e.BQk()),2&l){const s=e.oxw().ngIf,h=e.oxw().ngIf,O=e.MAs(3),ge=e.MAs(5),mt=e.oxw(3).$implicit;let Tn;e.xp6(),e.Q6J("ngTemplateOutlet",e.lcZ(2,2,mt[s])?O:ge)("ngTemplateOutletContext",e.kEZ(6,Uh,mt[s],h,null==(Tn=e.lcZ(3,4,h.filter.changes))?null:Tn.value))}}function Q4(l,v){if(1&l&&(e.ynx(0),e.YNc(1,j4,4,10,"ng-container",50),e.BQk()),2&l){const s=v.ngIf;e.oxw();const h=e.MAs(7),O=e.oxw(3).$implicit;e.xp6(),e.Q6J("ngIf",O[s])("ngIfElse",h)}}const lp=(l,v,s,h,O)=>({tagList:l,tag:v,showPopover:s,status:h,emphasize:O});function Yh(l,v){if(1&l&&(e.ynx(0),e._UZ(1,"cvc-entity-collection-tag",53),e.BQk()),2&l){const s=e.oxw(2),h=s.config,O=s.$implicit,ge=s.emphasize;e.oxw();const mt=e.MAs(5),Tn=e.oxw(5);e.xp6(),e.Q6J("cvcCollectionTagConfig",e.qbA(3,lp,O.slice(h.tag.maxTags,O.length),h.tag,!Tn.isScrolling,!0===h.showStatus?O.status:void 0,ge))("cvcTagTemplate",mt)("cvcShowFullLabels",!0)}}function G4(l,v){if(1&l&&(e.ynx(0),e._UZ(1,"cvc-entity-tag-list",52),e.YNc(2,Yh,2,9,"ng-container",10),e.BQk()),2&l){const s=e.oxw(),h=s.config,O=s.$implicit,ge=s.emphasize;e.oxw();const mt=e.MAs(5),Tn=e.oxw(5);e.xp6(),e.Q6J("cvcTagTemplate",mt)("cvcTagListConfig",e.qbA(3,lp,O.slice(0,h.tag.maxTags),h.tag,!Tn.isScrolling,!0===h.showStatus?O.status:void 0,ge)),e.xp6(),e.Q6J("ngIf",O.slice(h.tag.maxTags,O.length).length>0)}}function W4(l,v){if(1&l&&e.YNc(0,G4,3,9,"ng-container",50),2&l){const s=v.$implicit;e.oxw();const h=e.MAs(7);e.Q6J("ngIf",s.length>0)("ngIfElse",h)}}function Jf(l,v){if(1&l&&e._UZ(0,"cvc-entity-tag",54),2&l){const s=v.$implicit,h=v.config,O=v.emphasize,ge=e.oxw(6);let mt;e.Q6J("cvcTruncateLabel",null==h.tag?null:h.tag.truncateLabel)("cvcLinkableEntity",s)("cvcEmphasize",O)("cvcShowPopover",!ge.isScrolling)("cvcStatus",!0===h.showStatus?s.status:void 0)("cvcFullWidth",null!==(mt=null==h.tag?null:h.tag.fullWidth)&&void 0!==mt&&mt)}}function Z4(l,v){if(1&l&&e._UZ(0,"cvc-empty-value",55),2&l){const s=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",s.emptyValueCategory||"unspecified")}}function up(l,v){if(1&l&&(e.TgZ(0,"td",46),e.YNc(1,Q4,2,2,"ng-container",10)(2,W4,1,2,"ng-template",null,47,e.W1O)(4,Jf,1,6,"ng-template",null,48,e.W1O)(6,Z4,1,1,"ng-template",null,49,e.W1O),e.qZA()),2&l){const s=v.ngIf;let h;e.Q6J("nzAlign",null!==(h=s.align)&&void 0!==h?h:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1),e.xp6(),e.Q6J("ngIf",s.context||s.key)}}function Xp(l,v){if(1&l&&(e._UZ(0,"cvc-attribute-tag",58),e.ALo(1,"evidenceEnumDisplay")),2&l){const s=e.oxw().ngIf,h=e.oxw(3).$implicit,O=e.oxw(2);e.Q6J("cvcFullWidth",!0)("cvcAttrValue",h[s.key])("cvcTooltip",e.lcZ(1,3,!O.isScrolling&&h[s.key]))}}function J4(l,v){if(1&l&&e._UZ(0,"cvc-empty-value",55),2&l){const s=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",s.emptyValueCategory||"unspecified")}}function jh(l,v){if(1&l&&(e.TgZ(0,"td",46),e.YNc(1,Xp,2,5,"cvc-attribute-tag",56)(2,J4,1,1,"ng-template",null,57,e.W1O),e.qZA()),2&l){const s=v.ngIf,h=e.MAs(3),O=e.oxw(3).$implicit;let ge;e.Q6J("nzAlign",null!==(ge=s.align)&&void 0!==ge?ge:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1),e.xp6(),e.Q6J("ngIf",O[s.key])("ngIfElse",h)}}function eh(l,v){if(1&l&&(e.TgZ(0,"nz-tag",61),e._UZ(1,"span",62),e.qZA()),2&l){const s=e.oxw().ngIf,h=e.oxw(3).$implicit;e.Q6J("nzTooltipTitle",h[s.key])}}function dp(l,v){if(1&l&&e._UZ(0,"cvc-empty-value",55),2&l){const s=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",s.emptyValueCategory||"unspecified")}}function Qh(l,v){if(1&l&&(e.TgZ(0,"td",46),e.YNc(1,eh,2,1,"nz-tag",59)(2,dp,1,1,"ng-template",null,60,e.W1O),e.qZA()),2&l){const s=v.ngIf,h=e.MAs(3),O=e.oxw(3).$implicit;let ge;e.Q6J("nzAlign",null!==(ge=s.align)&&void 0!==ge?ge:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1),e.xp6(),e.Q6J("ngIf",O[s.key])("ngIfElse",h)}}function Gh(l,v){1&l&&e.GkF(0)}const Wh=(l,v)=>({$implicit:l,emphasize:v});function Zh(l,v){if(1&l&&(e.ynx(0),e.YNc(1,Gh,1,0,"ng-container",51),e.ALo(2,"isArray"),e.ALo(3,"ngrxPush"),e.BQk()),2&l){const s=v.ngIf,h=e.oxw().ngIf,O=e.MAs(3),ge=e.MAs(5);let mt;e.xp6(),e.Q6J("ngTemplateOutlet",e.lcZ(2,2,s)?O:ge)("ngTemplateOutletContext",e.WLB(6,Wh,s,null==(mt=e.lcZ(3,4,h.filter.changes))?null:mt.value))}}function Kf(l,v){1&l&&e.GkF(0)}function K4(l,v){1&l&&(e.ynx(0),e._uU(1,", "),e.BQk())}function y1(l,v){if(1&l&&(e.ynx(0),e.YNc(1,Kf,1,0,"ng-container",51)(2,K4,2,0,"ng-container",10),e.BQk()),2&l){const s=v.$implicit,h=v.last,O=e.oxw(2).emphasize;e.oxw();const ge=e.MAs(5);e.xp6(),e.Q6J("ngTemplateOutlet",ge)("ngTemplateOutletContext",e.WLB(3,Wh,s,O)),e.xp6(),e.Q6J("ngIf",!h)}}function q4(l,v){if(1&l&&(e.ynx(0),e.YNc(1,y1,3,6,"ng-container",8),e.BQk()),2&l){const s=e.oxw().$implicit;e.xp6(),e.Q6J("ngForOf",s)}}function Dd(l,v){if(1&l&&e.YNc(0,q4,2,1,"ng-container",50),2&l){const s=v.$implicit;e.oxw();const h=e.MAs(7);e.Q6J("ngIf",s.length>0)("ngIfElse",h)}}function C1(l,v){if(1&l&&(e._UZ(0,"span",67),e.ALo(1,"highlightTypeahead")),2&l){const s=v.$implicit,h=v.emphasize,O=e.oxw().ngIf;e.Q6J("innerHtml",e.xi3(1,1,O.objectKey?s[O.objectKey]:s,h),e.oJD)}}function X4(l,v){if(1&l&&e._UZ(0,"cvc-empty-value",55),2&l){const s=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",s.emptyValueCategory||"unspecified")}}function Jh(l,v){if(1&l&&(e.TgZ(0,"td",63),e.YNc(1,Zh,4,9,"ng-container",50)(2,Dd,1,2,"ng-template",null,64,e.W1O)(4,C1,2,4,"ng-template",null,65,e.W1O)(6,X4,1,1,"ng-template",null,66,e.W1O),e.qZA()),2&l){const s=v.ngIf,h=e.MAs(7),O=e.oxw(3).$implicit;let ge;e.Q6J("nzAlign",null!==(ge=s.align)&&void 0!==ge?ge:"left")("nzLeft",s.fixedLeft||!1)("nzRight",s.fixedRight||!1),e.xp6(),e.Q6J("ngIf",O[s.key])("ngIfElse",h)}}function e2(l,v){if(1&l&&(e.ynx(0),e.YNc(1,xd,1,4,"td",42),e.ALo(2,"guardType"),e.YNc(3,up,8,4,"td",43),e.ALo(4,"guardType"),e.YNc(5,jh,4,5,"td",43),e.ALo(6,"guardType"),e.YNc(7,Qh,4,5,"td",43),e.ALo(8,"guardType"),e.YNc(9,Jh,8,5,"td",44),e.ALo(10,"guardType"),e.BQk()),2&l){const s=e.oxw().$implicit,h=e.oxw(3);e.xp6(),e.Q6J("ngIf",e.xi3(2,5,s,h.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,8,s,h.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,11,s,h.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,14,s,h.colGuards.isTextTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(10,17,s,h.colGuards.isDefaultCol))}}function t2(l,v){if(1&l&&(e.ynx(0),e.YNc(1,e2,11,20,"ng-container",10),e.BQk()),2&l){const s=v.$implicit;e.xp6(),e.Q6J("ngIf",!s.hidden)}}function n2(l,v){if(1&l&&(e.TgZ(0,"tr",41),e.YNc(1,t2,2,1,"ng-container",8),e.qZA()),2&l){const s=e.oxw().ngrxLet;e.xp6(),e.Q6J("ngForOf",s)}}function th(l,v){1&l&&(e.TgZ(0,"tbody"),e.YNc(1,n2,2,1,"ng-template",40),e.qZA())}function qf(l,v){1&l&&e._UZ(0,"span",75)}function Xf(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"span",76),e.NdJ("click",function(){e.CHM(s),e.oxw(2);const O=e.MAs(3),ge=e.oxw().filter;return O.value="",e.KtG(ge.changes.next({key:ge.key,value:null}))}),e.qZA()}}function e0(l,v){if(1&l&&e.YNc(0,qf,1,0,"span",73)(1,Xf,1,0,"span",74),2&l){e.oxw();const s=e.MAs(3);e.Q6J("ngIf",!s.value),e.xp6(),e.Q6J("ngIf",s.value)}}function o2(l,v){if(1&l){const s=e.EpF();e.ynx(0),e.TgZ(1,"nz-input-group",69)(2,"input",70,71),e.NdJ("nzFilterChange",function(O){e.CHM(s);const ge=e.oxw().filter;return e.KtG(ge.changes.next({key:ge.key,value:O}))}),e.qZA()(),e.YNc(4,e0,2,2,"ng-template",null,72,e.W1O),e.BQk()}if(2&l){const s=e.MAs(5),h=e.oxw().filter;e.xp6(),e.Q6J("nzSuffix",s),e.xp6(),e.Q6J("placeholder",h.placeholder)("ngModel",h.defaultValue)}}function r2(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"nz-input-number-group",77)(1,"nz-input-number",78,71),e.NdJ("ngModelChange",function(O){e.CHM(s);const ge=e.oxw().filter;return e.KtG(ge.changes.next({key:ge.key,value:O}))}),e.qZA()()}if(2&l){const s=e.oxw().filter;e.xp6(),e.Q6J("nzPlaceHolder",s.placeholder)("ngModel",s.defaultValue)("nzMin",1)("nzStep",1)}}function s2(l,v){if(1&l&&e.YNc(0,o2,6,3,"ng-container",50)(1,r2,3,4,"ng-template",null,68,e.W1O),2&l){const s=v.filter,h=e.MAs(2);e.Q6J("ngIf",void 0===s.inputType||"default"===s.inputType)("ngIfElse",h)}}const pp=()=>[6,6];function a2(l,v){1&l&&(e.TgZ(0,"nz-row",79)(1,"nz-col")(2,"span"),e._uU(3,"Use checkboxes to select or deselect Variants"),e.qZA()()()),2&l&&e.Q6J("nzGutter",e.DdM(1,pp))}function c2(l,v){1&l&&(e.TgZ(0,"nz-tag",90),e._UZ(1,"i",91),e.TgZ(2,"span"),e._uU(3,"Loading\u2026"),e.qZA()())}const z1=l=>({$implicit:l});function Kh(l,v){if(1&l&&(e.TgZ(0,"nz-tag",94),e._UZ(1,"span",95),e.TgZ(2,"span",96),e._uU(3),e.qZA()()),2&l){e.oxw();const s=e.MAs(4),h=e.oxw().ngrxLet;e.xp6(2),e.Q6J("nzTooltipTitle",s)("nzTooltipTitleContext",e.VKq(3,z1,h.query)),e.xp6(),e.hij(" Query Error",h.query.length>1?"s":""," ")}}function l2(l,v){if(1&l&&(e.TgZ(0,"nz-tag",94)(1,"span",96)(2,"span",97)(3,"strong"),e._uU(4),e.qZA()()()()),2&l){e.oxw();const s=e.MAs(4),h=e.oxw().ngrxLet;e.xp6(),e.Q6J("nzTooltipTitle",s)("nzTooltipTitleContext",e.VKq(3,z1,h.network)),e.xp6(3),e.hij(" Network Error",h.query.length>1?"s":""," ")}}function u2(l,v){if(1&l&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&l){const s=v.$implicit;e.xp6(),e.hij(" ",s.message," ")}}function t0(l,v){1&l&&e.YNc(0,u2,2,1,"div",8),2&l&&e.Q6J("ngForOf",v.$implicit)}function n0(l,v){if(1&l&&(e.ynx(0),e.YNc(1,Kh,4,5,"nz-tag",92)(2,l2,5,5,"nz-tag",92)(3,t0,1,1,"ng-template",null,93,e.W1O),e.BQk()),2&l){const s=e.oxw().ngrxLet;e.xp6(),e.Q6J("ngIf",s.query),e.xp6(),e.Q6J("ngIf",s.network)}}function d2(l,v){if(1&l&&(e.ynx(0),e.YNc(1,n0,5,2,"ng-container",10),e.BQk()),2&l){const s=v.ngrxLet;e.xp6(),e.Q6J("ngIf",s)}}function p2(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"div",98)(1,"nz-checkbox-group",99),e.NdJ("ngModelChange",function(O){e.CHM(s);const ge=e.oxw(2);return e.KtG(ge.onPreferenceChange$.next(O))}),e.ALo(2,"ngrxPush"),e.qZA()()}if(2&l){const s=e.oxw(2);e.xp6(),e.Q6J("ngModel",e.lcZ(2,1,s.setPreference$))}}function h2(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"nz-row",79)(1,"nz-col",80),e.YNc(2,c2,4,0,"nz-tag",81),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e._UZ(5,"cvc-no-more-rows",82),e.ALo(6,"ngrxPush"),e.qZA(),e.TgZ(7,"nz-col",80),e.YNc(8,d2,2,1,"ng-container",3),e.qZA(),e.TgZ(9,"nz-col",80),e._UZ(10,"cvc-table-counts2",83),e.qZA(),e.TgZ(11,"nz-col",84)(12,"nz-button-group")(13,"button",85),e.NdJ("click",function(){e.CHM(s);const O=e.oxw();return e.KtG(O.onResetFilter$.next())}),e._UZ(14,"span",86),e.qZA(),e.TgZ(15,"button",87),e._UZ(16,"span",88),e.qZA()(),e.YNc(17,p2,3,3,"ng-template",null,89,e.W1O),e.qZA()()}if(2&l){const s=e.MAs(18),h=e.oxw();e.Q6J("nzGutter",8),e.xp6(2),e.Q6J("ngIf",e.lcZ(3,7,h.loading$)&&e.lcZ(4,9,h.isFetchMore$)),e.xp6(3),e.Q6J("cvcShowTag",e.lcZ(6,11,h.noMoreRows$)),e.xp6(3),e.Q6J("ngrxLet",h.queryError$),e.xp6(2),e.Q6J("cvcTableCountsConnection",h.connection$),e.xp6(5),e.Q6J("nzPopoverContent",s)("nzPopoverTrigger","click")}}const o0=()=>[],r0=()=>({x:"800px",y:"200px"});let nh=((lu=class{constructor(v,s,h){this.queryGQL=v,this.apollo=s,this.cdr=h,this.cvcSelectedIdsChange=new e.vpe,this.isScrolling=!1,this.colGuards=k4,this.onFetchMore$=new x.x,this.onPreferenceChange$=new Ve.X([]),this.onResetFilter$=new x.x,this.onRowSelected$=new x.x,this.onScroll$=new Ve.X("stop"),this.onSetSelectedRow$=new Ve.X(new Set),this.queryError$=new x.x,this.queryRequest$=new x.x,this.queryResult$=new Go.t(1),this.isFetchMore$=new Ve.X(!1),this.noMoreRows$=new Ve.X(!1),this.scrollToIndex$=new x.x,this.tableConfig=new Hh;const O=(0,Ho.a)(this.tableConfig.getFilterStreams()),ge=(0,Ho.a)(this.tableConfig.getSortStreams()).pipe((0,yt.h)(mt=>mt.filter(Tn=>null!==Tn.value).length<=1));this.refetch$=(0,Ho.a)([ge,O]).pipe((0,j.U)(([mt,Tn])=>({query:"refetch",sort:mt,filter:Tn}))),this.fetchMore$=this.onFetchMore$.pipe((0,j.U)(mt=>({query:"fetchMore",fetchMore:{...mt}}))),(0,Q.T)(this.refetch$,this.fetchMore$).pipe((0,Mo.b)(50),(0,ln.t)(this)).subscribe(mt=>{const Tn=this.getQueryVars(mt);this.queryRef?(this.queryError$.next({}),"refetch"===mt.query?(this.isFetchMore$.next(!1),this.queryRef.refetch(Tn).then(In=>{(In.error||In.errors)&&this.queryError$.next(this.getRequestErrors(In))}).then(()=>{this.scrollToIndex$.next(0)})):(this.isFetchMore$.next(!0),this.queryRef.fetchMore({variables:Tn}).then(In=>{(In.error||In.errors)&&this.queryError$.next(this.getRequestErrors(In))}))):(this.isFetchMore$.next(!1),this.queryError$.next({}),this.queryRef=this.queryGQL.watch(Tn),this.queryRef.valueChanges.pipe((0,ln.t)(this)).subscribe(In=>{this.queryResult$.next(In),(In.error||In.errors)&&this.queryError$.next(this.getRequestErrors(In))}))}),this.loading$=this.queryResult$.pipe((0,ko.j)("loading"),(0,ye.x)()),this.connection$=this.queryResult$.pipe((0,ko.j)("data","browseVariants"),(0,yt.h)(li.ep)),this.pageInfo$=this.connection$.pipe((0,ko.j)("pageInfo"),(0,yt.h)(li.ep)),this.row$=(0,Ho.a)([this.connection$.pipe((0,ko.j)("edges"),(0,yt.h)(li.ep),(0,j.U)(mt=>mt.map(Tn=>Tn.node))),this.onSetSelectedRow$]).pipe((0,j.U)(([mt,Tn])=>mt.map(In=>{if(In)return{...In,variant:{__typename:"Variant",id:In.id,name:In.name,link:In.link},feature:{__typename:"Feature",id:In.featureId,name:In.featureName,link:In.featureLink},selected:Tn.has(In.id)}}))),this.col$=new Ve.X(this.tableConfig.get()),this.setPreference$=this.col$.pipe((0,j.U)(mt=>this.getColPrefsFromTableConfig(mt))),this.onPreferenceChange$.pipe((0,ci.M)(this.col$),(0,j.U)(([mt,Tn])=>this.getTableConfigFromColPrefs(mt,Tn)),(0,ln.t)(this)).subscribe(mt=>{this.col$.next(mt)}),this.onSetTableFilter$=new Ve.X([]),this.onSetTableFilter$.pipe((0,ln.t)(this)).subscribe(mt=>{const Tn=this.col$.getValue();mt.forEach(In=>{const Eo=Tn.find(hi=>hi.key===In.key);if(void 0!==Eo.filter.inputType){const hi=Eo.filter.options[0];if(null===In.value)return Eo.filter.options=[{...hi,value:null}],void Eo.filter.changes.next(In);if(Array.isArray(In.value)&&0===In.value.length)return Eo.filter.options=[{...hi,value:null}],void Eo.filter.changes.next({...In,value:null});let Vi;Array.isArray(In.value)?In.value.length>0&&(Vi=In.value[0]):Vi=In.value;const gc=Eo.filter.typename;if(!gc||!Vi)return void console.error(`variant-manager requires column config '${Eo.key}' provide a typename for cvcTablePrefs Input to set its filter`);const rl=this.getEntityName(gc,Vi);if(!rl)return;Eo.filter.options=[{...hi,value:rl}],Eo.filter.changes.next({...In,value:rl})}else Ed(Eo)&&Eo.filter.changes.next(In)})}),this.onSetTablePref$=new Ve.X([]),this.onSetTablePref$.pipe((0,ci.M)(this.setPreference$),(0,j.U)(([mt,Tn])=>{const In=[];return mt.forEach(Eo=>{let hi=Tn.find(Vi=>Vi.value===Eo.value);hi?In.push({...hi,...Eo}):console.warn(`variant-manager onSetTablePref$ received updated preferences for column '${Eo.value}', but a column with that key could not be found.`)}),In}),(0,ln.t)(this)).subscribe(mt=>{this.onPreferenceChange$.next(mt)}),this.onRowSelected$.pipe((0,ci.M)(this.onSetSelectedRow$),(0,ln.t)(this)).subscribe(([mt,Tn])=>{mt.selected?Tn.add(mt.id):Tn.delete(mt.id),this.onSetSelectedRow$.next(Tn),this.cvcSelectedIdsChange.next(Array.from(Tn))}),this.onScroll$.pipe((0,j.U)(mt=>"stop"!==mt),(0,ye.x)(),(0,ln.t)(this)).subscribe(mt=>{this.isScrolling=mt,this.cdr.detectChanges()}),this.onScroll$.pipe((0,yt.h)(mt=>"bottom"===mt),(0,ci.M)(this.pageInfo$),(0,j.U)(([mt,Tn])=>Tn),(0,ln.t)(this)).subscribe(mt=>{mt.hasNextPage||(this.noMoreRows$.next(!0),this.cdr.detectChanges(),setInterval(()=>this.noMoreRows$.next(!1)))})}ngAfterViewInit(){this.onResetFilter$.pipe((0,ci.M)((0,wi.of)(this.tableConfig.get())),(0,ln.t)(this)).subscribe(([v,s])=>{const h=[];s.forEach(O=>{if(jp(O)&&O.sort.changes&&O.sort.changes.next({key:O.key,value:O.sort.default??null}),Ed(O)){const ge=O.filter.options.find(mt=>1==mt.byDefault)?.value;O.filter.changes&&O.filter.changes.next({key:O.key,value:ge||null})}h.push(O)}),this.col$.next(h)})}getQueryVars(v){const s=this.getQueryFilterParams(v);return{...this.getQuerySortParams(v),...s,...v.fetchMore}}getQuerySortParams(v){if(!v.sort)return;const h=v.sort.find(ge=>null!==ge.value);return h?{sortBy:{column:this.getSortColumnFromColKey(h.key),direction:"ascend"===h.value?Hn.SrV.Asc:Hn.SrV.Desc||void 0}}:void 0}getQueryFilterParams(v){let s={};return v.filter&&v.filter.forEach(h=>{s[cu[h.key]||h.key]=null===h.value||""===h.value?void 0:h.value}),s}getRequestErrors(v){return{query:v.errors,network:v.error}}getTableConfigFromColPrefs(v,s){return s.forEach(h=>{if(Qp.find(ge=>ge===h.key))return;const O=v.find(ge=>ge.value===h.key);O&&(h.hidden=!O?.checked)}),[...s]}getColPrefsFromTableConfig(v){let s=[];return v.forEach(h=>{Qp.find(O=>O===h.key)||s.push({label:h.tooltip||h.label,value:h.key,checked:!h.hidden})}),s}getSortColumnFromColKey(v){return R4[v]}getEntityName(v,s){const h={id:`${v}:${s}`,fragment:Tc.Ps`
                fragment Linkable${v}Entity on ${v} {
                  id
                  name
                  link
                }`},O=this.apollo.client.readFragment(h);if(O)return O.name;console.error(`variant-manager onSetTableFilter$ could not find cached entity ${v}:${s} to populate input filter`)}trackByIndex(v,s){return s?.id}ngOnChanges(v){if(v.cvcTableSettings){const s=v.cvcTableSettings.currentValue;void 0!==s&&this.onSetTableFilter$.next(s.filters)}if(v.cvcSelectedIds){const s=v.cvcSelectedIds.currentValue,h=new Set;void 0!==s&&s.forEach(O=>h.add(O)),this.onSetSelectedRow$.next(h)}}}).\u0275fac=function(v){return new(v||lu)(e.Y36(Hn.XQi),e.Y36(Xr._M),e.Y36(e.sBO))},lu.\u0275cmp=e.Xpm({type:lu,selectors:[["cvc-variant-manager"]],inputs:{cvcTableSettings:"cvcTableSettings",cvcSelectedIds:"cvcSelectedIds"},outputs:{cvcSelectedIdsChange:"cvcSelectedIdsChange"},features:[e.TTD],decls:16,vars:27,consts:[["nzSize","small",3,"nzTitle","nzExtra"],["cvcTableScroller","",3,"nzData","cvcTableScrollerQueryRef","cvcTableScrollerPageInfo","cvcTableScrollerToIndex","nzScroll","nzVirtualForTrackBy","nzVirtualItemSize","nzSize","nzFrontPagination","nzShowPagination","nzLoading","cvcTableScrollerOnScroll","cvcTableScrollerOnFetch"],["virtualTable",""],[4,"ngrxLet"],["columnFilterInput",""],["cardTitle",""],["extraTemplate",""],[1,"col-header-row"],[4,"ngFor","ngForOf"],[1,"filter-row"],[4,"ngIf"],[3,"nzShowCheckbox","nzWidth","nzAlign","nzLeft","nzRight",4,"ngIf"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzSortOrderChange",4,"ngIf"],["nz-tooltip","",3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzTooltipTitle",4,"ngIf"],[3,"nzShowCheckbox","nzWidth","nzAlign","nzLeft","nzRight"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzSortOrderChange"],["nz-tooltip","",1,"col-header-label",3,"nzTooltipTitle"],["nz-tooltip","",3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzTooltipTitle"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight",4,"ngIf"],[3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight",4,"ngIf"],["class","attribute-filter","nzCustomFilter","",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzShowFilter","nzFilterFn","nzSortOrderChange",4,"ngIf"],["class","attribute-filter","nzCustomFilter","",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzFilterFn",4,"ngIf"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight"],[3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight"],[3,"cvcInputType","cvcPlaceholder","cvcModel","cvcModelChange",4,"ngIf"],[3,"cvcInputType","cvcPlaceholder","cvcModel","cvcModelChange"],["nzCustomFilter","",1,"attribute-filter",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzShowFilter","nzFilterFn","nzSortOrderChange"],["enumTableFilter",""],[3,"nzDropdownMenu","nzActive"],["enumTagFilterTrigger",""],["nz-icon","","nzType","filter","nzTheme","fill"],["enumFilterMenu","nzDropdownMenu"],[3,"cvcColumnKey","cvcFilterOptions","cvcOption","cvcOptionChange"],["nzCustomFilter","",1,"attribute-filter",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzFilterFn"],["nz-icon","","nzType","search"],["textTagFilterMenu","nzDropdownMenu"],[1,"ant-table-filter-dropdown"],[1,"custom-input-dropdown"],[3,"cvcPlaceholder","cvcModel","cvcModelChange"],[3,"cvcPlaceholder","cvcModel","cvcModelChange",4,"ngIf"],["nz-virtual-scroll",""],[1,"data-row"],[3,"nzChecked","nzAlign","nzLeft","nzRight","nzCheckedChange",4,"ngIf"],[3,"nzAlign","nzLeft","nzRight",4,"ngIf"],["class","default-col-type",3,"nzAlign","nzLeft","nzRight",4,"ngIf"],[3,"nzChecked","nzAlign","nzLeft","nzRight","nzCheckedChange"],[3,"nzAlign","nzLeft","nzRight"],["entityTagList",""],["entityTag",""],["emptyEntityTagCell",""],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"cvcTagTemplate","cvcTagListConfig"],[3,"cvcCollectionTagConfig","cvcTagTemplate","cvcShowFullLabels"],[3,"cvcTruncateLabel","cvcLinkableEntity","cvcEmphasize","cvcShowPopover","cvcStatus","cvcFullWidth"],[3,"cvcEmptyCategory"],["cvcContext","compact",3,"cvcFullWidth","cvcAttrValue","cvcTooltip",4,"ngIf","ngIfElse"],["emptyEnumTagCell",""],["cvcContext","compact",3,"cvcFullWidth","cvcAttrValue","cvcTooltip"],["nz-tooltip","","style","width: 100%; cursor: help; color: #595959",3,"nzTooltipTitle",4,"ngIf","ngIfElse"],["emptyTextTagCell",""],["nz-tooltip","",2,"width","100%","cursor","help","color","#595959",3,"nzTooltipTitle"],["nz-icon","","nzType","align-left","nzTheme","outline"],[1,"default-col-type",3,"nzAlign","nzLeft","nzRight"],["staticList",""],["staticValue",""],["emptyDefaultCell",""],[3,"innerHtml"],["numericInput",""],["nzSize","small",3,"nzSuffix"],["nz-input","",3,"placeholder","ngModel","nzFilterChange"],["filterInput",""],["suffixIcon",""],["nz-icon","","nzType","search","style","color: #ddd",4,"ngIf"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzType","search",2,"color","#ddd"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],["nzSize","small"],[2,"width","100%",3,"nzPlaceHolder","ngModel","nzMin","nzStep","ngModelChange"],[3,"nzGutter"],["nzFlex","auto"],["nzColor","processing",4,"ngIf"],[3,"cvcShowTag"],[3,"cvcTableCountsConnection"],["nzFlex","35px"],["nz-button","","type","button","nzType","default","nzSize","small",3,"click"],["nz-icon","","nzType","retweet","nzTheme","outline"],["nz-button","","nz-popover","","nzPopoverTitle","Visible Columns","type","button","nzType","default","nzSize","small",3,"nzPopoverContent","nzPopoverTrigger"],["nz-icon","","nzType","setting","nzTheme","outline"],["prefsPopover",""],["nzColor","processing"],["nz-icon","","nzType","sync","nzSpin",""],["nzColor","error","style","margin-left: 12px",4,"ngIf"],["queryError",""],["nzColor","error",2,"margin-left","12px"],["nz-icon","","nzType","question-circle","nzTheme","outline"],["nz-tooltip","",2,"cursor","help",3,"nzTooltipTitle","nzTooltipTitleContext"],["nz-typography",""],[1,"prefs-popover"],[3,"ngModel","ngModelChange"]],template:function(v,s){if(1&v&&(e.TgZ(0,"nz-card",0)(1,"nz-table",1,2),e.NdJ("cvcTableScrollerOnScroll",function(O){return s.onScroll$.next(O)})("cvcTableScrollerOnFetch",function(O){return s.onFetchMore$.next(O)}),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.ALo(7,"ngrxPush"),e.YNc(8,qp,5,2,"thead",3)(9,th,2,0,"tbody",3),e.qZA()(),e.YNc(10,s2,3,2,"ng-template",null,4,e.W1O)(12,a2,4,2,"ng-template",null,5,e.W1O)(14,h2,19,13,"ng-template",null,6,e.W1O)),2&v){const h=e.MAs(13),O=e.MAs(15);e.Q6J("nzTitle",h)("nzExtra",O),e.xp6(),e.Q6J("nzData",e.lcZ(3,15,s.row$)||e.DdM(25,o0))("cvcTableScrollerQueryRef",s.queryRef)("cvcTableScrollerPageInfo",e.lcZ(4,17,s.pageInfo$))("cvcTableScrollerToIndex",e.lcZ(5,19,s.scrollToIndex$))("nzScroll",e.DdM(26,r0))("nzVirtualForTrackBy",s.trackByIndex)("nzVirtualItemSize",28)("nzSize","small")("nzFrontPagination",!1)("nzShowPagination",!1)("nzLoading",e.lcZ(6,21,s.loading$)&&!e.lcZ(7,23,s.isFetchMore$)),e.xp6(7),e.Q6J("ngrxLet",s.col$),e.xp6(),e.Q6J("ngrxLet",s.col$)}},dependencies:[u.sg,u.O5,u.tP,nn.J,fn,ia,R,we,oa.P,tt.H,n.Fj,n.JJ,n.On,lo.eJ,uo.ix,uo.fY,de.w,ce.dQ,H.t3,H.SK,ee.Ls,B.Zp,B.gB,B.ke,Ce.ZU,rr.bd,me.ub,us.RR,ft,re,Xn.lU,pi.N8,pi.qD,pi.Uo,pi._C,pi.h7,pi.Om,pi.p0,pi.$Z,pi.zu,pi.qn,pi.Ql,pi.UX,pi.g6,to.j,qn.SY,ip,jf,v1,xi,$r.Do,Mr.A,fl,lo.fM],styles:["[_nghost-%COMP%]{display:block}nz-card[_ngcontent-%COMP%]:first-of-type     .ant-card-body{padding:0;margin-top:1px}.table-info[_ngcontent-%COMP%]{margin-left:.5rem}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell.align-right[_ngcontent-%COMP%]     .ant-table-column-title{text-align:right}tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{padding:3px 4px}tr.filter-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   nz-filter-trigger[_ngcontent-%COMP%]     span.ant-dropdown-trigger{margin-left:0;padding-right:12px}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .anticon.attribute-icon[_ngcontent-%COMP%]{color:#595959}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.overflow-ellipsis[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.button-cell[_ngcontent-%COMP%]{padding:0}tr.data-row[_ngcontent-%COMP%]   td.align-right[_ngcontent-%COMP%], tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%]{text-align:right}tr.data-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-of-type{padding-left:6px}tr.data-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-of-type   cvc-entity-tag[_ngcontent-%COMP%]{margin-left:6px}td.default-col-type[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}.ant-table-filter-dropdown[_ngcontent-%COMP%]{padding:8px}.prefs-popover[_ngcontent-%COMP%]     nz-checkbox-group:first-of-type label{display:block}.prefs-popover[_ngcontent-%COMP%]     nz-checkbox-group:first-of-type label span{display:inline-block}"],changeDetection:0}),lu);var du;function l6(l,v){if(1&l&&(e.ynx(0),e.TgZ(1,"span"),e._uU(2),e.qZA(),e.BQk()),2&l){const s=v.ngrxLet;e.xp6(2),e.Oqu(s.message)}}function f2(l,v){if(1&l&&e._uU(0),2&l){const s=e.oxw();e.Oqu(s.successMessage)}}nh=(0,V.gn)([(0,ln.c)()],nh);const qh=()=>[0,0];let Xh=((du=class{set cvcFeatureId(v){v&&this.featureId$.next(v)}set cvcFeatureName(v){v&&this.featureName$.next(v)}set cvcSearchString(v){v&&this.searchString$.next(v)}constructor(v,s){this.query=v,this.errors=s,this.cvcOnCreate=new e.vpe,this.form=new n.nJ({}),this.model={name:""},this.formLayout="horizontal",this.options={formState:{formLayout:this.formLayout}},this.onSubmit$=new x.x,this.searchString$=new Ve.X(void 0),this.featureName$=new Ve.X(void 0),this.featureId$=new Ve.X(void 0),this.formMessageDisplay$=new Ve.X({message:"Variant does not exist, create it?"}),this.queryMutator=new xo.U(this.errors),this.addVariantMutator=new xo.U(this.errors),this.minNameLength=3,this.fields=[{key:"featureId",hide:!0,props:{required:!0}},{key:"name",hide:!0,props:{minLength:this.minNameLength,required:!0}},{key:"organizationId",type:"org-submit-button",props:{submitLabel:"Add Variant"}}],this.featureId$.pipe((0,ln.t)(this)).subscribe(h=>{this.model.featureId=h}),this.searchString$.pipe((0,ln.t)(this)).subscribe(h=>{this.model.name=h,this.formMessageDisplay$.next(void 0===h||void 0!==h&&h.length<this.minNameLength?{message:`New Variant name must be at least ${this.minNameLength} characters.`}:{message:`Variant '${h}' does not exist, create it?`})}),this.onSubmit$.pipe((0,ln.t)(this)).subscribe(h=>{console.log("variant-quick-add form model submitted.",h),this.submitVariant(h)})}submitVariant(v){v.name&&v.featureId?this.mutationState=this.addVariantMutator.mutate(this.query,{name:v.name,featureId:v.featureId,organizationId:v.organizationId},{},s=>{console.log("variant-quick-add submit data callback",s),s.createVariant&&(this.formMessageDisplay$.next({message:void 0}),setTimeout(()=>{s&&s.createVariant&&this.cvcOnCreate.next({id:s.createVariant.variant.id,new:s.createVariant.new})},1e3))}):console.error("variant-quick-add form submitVariant requires model with valid name and featureId.")}ngOnChanges(v){if(v.cvcFeatureId){const s=v.cvcFeatureId.currentValue;this.featureId$.next(s),this.model={...this.model,featureId:s}}v.cvcFeatureName&&this.featureName$.next(v.cvcFeatureName.currentValue)}}).\u0275fac=function(v){return new(v||du)(e.Y36(Hn.MCG),e.Y36(si.Y))},du.\u0275cmp=e.Xpm({type:du,selectors:[["cvc-variant-quick-add-form"]],inputs:{cvcFeatureId:"cvcFeatureId",cvcFeatureName:"cvcFeatureName",cvcSearchString:"cvcSearchString"},outputs:{cvcOnCreate:"cvcOnCreate"},features:[e.TTD],decls:8,vars:10,consts:[[4,"ngrxLet"],["entityType","Variant",3,"mutationState","successMessage"],["success",""],[3,"formGroup","ngSubmit"],[3,"nzGutter"],["nzSpan","24"],[3,"form","fields","model","options","modelChange"]],template:function(v,s){if(1&v&&(e.YNc(0,l6,3,1,"ng-container",0),e.TgZ(1,"cvc-form-submission-status-display",1),e.YNc(2,f2,1,1,"ng-template",null,2,e.W1O),e.TgZ(4,"form",3),e.NdJ("ngSubmit",function(){return s.onSubmit$.next(s.model)}),e.TgZ(5,"nz-row",4)(6,"nz-col",5)(7,"formly-form",6),e.NdJ("modelChange",function(O){return s.model=O}),e.qZA()()()()()),2&v){const h=e.MAs(3);e.Q6J("ngrxLet",s.formMessageDisplay$),e.xp6(),e.Q6J("mutationState",s.mutationState)("successMessage",h),e.xp6(3),e.Q6J("formGroup",s.form),e.xp6(),e.Q6J("nzGutter",e.DdM(9,qh)),e.xp6(2),e.Q6J("form",s.form)("fields",s.fields)("model",s.model)("options",s.options)}},dependencies:[ni.F,y.T7,n._Y,n.JL,lo.eJ,H.t3,H.SK,n.sg],encapsulation:2,changeDetection:0}),du);Xh=(0,V.gn)([(0,ln.c)()],Xh);const hp=["optionTemplates"],m2=(l,v)=>({show:l,hide:v});function g2(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"nz-col",9)(1,"button",10),e.NdJ("click",function(){e.CHM(s);const O=e.oxw();return e.KtG(O.onShowMgrClick$.next())}),e._UZ(2,"span",11),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e._uU(5," Manager "),e.qZA()()}if(2&l){const s=e.oxw();e.xp6(2),e.Q6J("ngClass",e.WLB(6,m2,e.lcZ(3,2,s.showMgr$),!e.lcZ(4,4,s.showMgr$)))("nzType","caret-right")}}function s0(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"nz-col",12)(1,"cvc-variant-manager",13),e.NdJ("cvcSelectedIdsChange",function(O){e.CHM(s);const ge=e.oxw();return e.KtG(ge.onPopulate$.next(O))}),e.ALo(2,"ngrxPush"),e.qZA()()}if(2&l){const s=e.oxw();e.xp6(),e.Q6J("cvcSelectedIds",e.lcZ(2,1,s.onVid$))}}function a0(l,v){if(1&l&&(e.ynx(0),e.TgZ(1,"em"),e._UZ(2,"span",20),e.ALo(3,"highlightTypeahead"),e.qZA(),e.BQk()),2&l){const s=e.oxw(2).$implicit,h=e.oxw().ngrxLet;e.xp6(2),e.Q6J("nzTooltipTitle",s.variantAliases.join(", "))("innerHtml",e.xi3(3,2,s.variantAliases.join(", "),h),e.oJD)}}function c0(l,v){1&l&&e._uU(0,"--")}function l0(l,v){if(1&l&&(e._UZ(0,"cvc-entity-tag",16),e.TgZ(1,"span",17)(2,"strong"),e._uU(3,"Aliases:"),e.qZA(),e.YNc(4,a0,4,5,"ng-container",18)(5,c0,1,0,"ng-template",null,19,e.W1O),e.qZA()),2&l){const s=e.MAs(6),h=e.oxw().$implicit,O=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",h.__typename+":"+h.id)("cvcEmphasize",O),e.xp6(4),e.Q6J("ngIf",h.variantAliases.length>0)("ngIfElse",s)}}function u0(l,v){1&l&&(e.ynx(0),e.YNc(1,l0,7,5,"ng-template",null,15,e.W1O),e.BQk())}function d0(l,v){if(1&l&&(e.ynx(0),e.YNc(1,u0,3,0,"ng-container",14),e.ALo(2,"ngrxPush"),e.BQk()),2&l){const s=e.oxw();e.xp6(),e.Q6J("ngForOf",e.lcZ(2,1,s.result$))}}function v2(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"div",21)(1,"cvc-entity-tag",22),e.NdJ("cvcOnClose",function(){const ge=e.CHM(s).$implicit,mt=e.oxw();return e.KtG(mt.onTagClose$.next(ge.nzValue))}),e.qZA()()}if(2&l){const s=v.$implicit,h=e.oxw();e.xp6(),e.Q6J("cvcCacheId","Variant:"+s.nzValue)("cvcContext",h.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",h.props.isMultiSelect?"default":"closeable")}}function _2(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"cvc-variant-quick-add-form",23),e.NdJ("cvcOnCreate",function(O){e.CHM(s);const ge=e.oxw();return e.KtG(ge.onSelectOrCreate(O))}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.qZA()}if(2&l){const s=v.$implicit,h=e.oxw();e.Q6J("cvcSearchString",s)("cvcFeatureId",e.lcZ(1,3,h.onFeatureId$))("cvcFeatureName",e.lcZ(2,5,h.onFeatureName$))}}const y2=()=>[6,6],C2=Vo(No(),zi());let z2=(()=>{class l extends C2{constructor(s,h,O,ge){super(),this.taq=s,this.tq=h,this.featureQuery=O,this.changeDetectorRef=ge,this.onModel$=new it.y,this.defaultOptions={props:{label:"Variant",placeholder:"Search Variants",requireFeature:!0,requireFeaturePlaceholderFn:mt=>`Search ${mt} Variants`,requireFeaturePrompt:"Select a Feature to search its Variants",isMultiSelect:!1,entityName:{singular:"Variant",plural:"Variants"},showManagerBtn:!1,minSearchStrLength:0}},this.onFeatureName$=new Ve.X(void 0),this.onVid$=new Go.t,this.onShowMgrClick$=new x.x,this.showMgr$=this.onShowMgrClick$.pipe((0,qr.R)((mt,Tn)=>!mt,!1))}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent,minSearchStrLength:this.field.props.minSearchStrLength}),this.state&&this.state.formReady$?this.state.formReady$.pipe((0,yt.h)(s=>s),(0,zr.q)(1),(0,ln.t)(this)).subscribe(s=>{this.configureField()}):this.configureField()}configureField(){this.configureStateConnections(),this.onVid$.pipe((0,ln.t)(this)).subscribe(),this.onVid$.next(this.formControl.value),this.onModel$=(0,Ho.a)([this.onFeatureId$,this.onSearch$]).pipe((0,j.U)(([s,h])=>({featureId:s,name:h}))),this.onValueChange$.pipe((0,ci.M)(this.onVid$),(0,ln.t)(this)).subscribe(([s,h])=>{Array.isArray(s)&&this.onVid$.next(s)})}configureStateConnections(){if(this.state&&this.props.requireFeature){if(!this.state?.fields.featureId$)return void console.error(`${this.field.id} requireFeature is set, but no featureId$ subject found on state.`);this.onFeatureId$=this.state.fields.featureId$,this.onFeatureId$.pipe((0,ln.t)(this)).subscribe(s=>{this.onFeatureId(s)})}}getTypeaheadVarsFn(s){return{name:s,featureId:this.selectedFeatureId}}getTypeaheadResultsFn(s){return s.data.variants.nodes}getTagQueryVarsFn(s){return{variantId:s}}getTagQueryResultsFn(s){return s.data.variant}getSelectedItemOptionFn(s){return{value:s.id,label:s.name}}getSelectOptionsFn(s,h){return s.map((O,ge)=>({label:h.get(ge)||O.name,value:O.id}))}showAddBehavior(s,h){const O=s.toLowerCase();return s.length>=3&&!h.some(ge=>ge.name.toLowerCase()===O)}onSelectOrCreate(s){this.onPopulate$.next(s.id),this.props.isNewlyCreatedCallback&&this.props.isNewlyCreatedCallback(s.new)}onFeatureId(s){this.selectedFeatureId=s,!s&&this.props.requireFeature?(this.resetField(),this.props.description=this.props.requireFeaturePrompt,this.props.placeholder="Select a Variant",this.props.extraType="prompt",this.onFeatureName$.next(void 0)):s&&(this.props.description=void 0,this.props.extraType=void 0,$c(this.featureQuery.fetch({featureId:s},{fetchPolicy:"cache-first"})).then(({data:h})=>{h?.feature?.name?(this.props.placeholder=this.props.requireFeature?this.props.requireFeaturePlaceholderFn(h.feature.name):this.props.placeholder,this.onFeatureName$.next(h.feature.name)):console.error(`${this.field.id} could not fetch feature name for Feature:${s}.`)}))}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(Hn.nSb),e.Y36(Hn.dDn),e.Y36(Hn.Ni),e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["ng-component"]],viewQuery:function(s,h){if(1&s&&e.Gf(hp,5,e.Rgc),2&s){let O;e.iGM(O=e.CRH())&&(h.optionTemplates=O)}},features:[e.qOj],decls:20,vars:41,consts:[[3,"nzGutter"],["nzFlex","auto"],["nz-tooltip","","nzTooltipTitle","Select a Feature to enable field.",3,"nzTooltipTrigger"],[3,"cvcAddEntity","cvcAddEntityModel","cvcAddEntityBehavior","cvcMinSearchStrLength","cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcDisabled","cvcOptions","cvcSelectOpen","cvcShowError","cvcLoading","cvcParamName","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],["nzFlex","50px",4,"ngIf"],["nzSpan","24","class","manager-drawer",4,"ngIf"],[4,"ngrxLet"],["selectedTemplate",""],["addVariant",""],["nzFlex","50px"],["type","button","nz-button","","nzBlock","",1,"manager-button",3,"click"],["nz-icon","",3,"ngClass","nzType"],["nzSpan","24",1,"manager-drawer"],[3,"cvcSelectedIds","cvcSelectedIdsChange"],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf","ngIfElse"],["noAliases",""],["nz-typography","","nzType","secondary","nz-tooltip","",3,"nzTooltipTitle","innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"],[3,"cvcSearchString","cvcFeatureId","cvcFeatureName","cvcOnCreate"]],template:function(s,h){if(1&s&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1)(2,"span",2),e.ALo(3,"ngrxPush"),e.TgZ(4,"cvc-entity-select",3),e.NdJ("cvcOnSearch",function(ge){return h.onSearch$.next(ge)})("cvcOnOpenChange",function(ge){return h.onOpenChange$.next(ge)})("cvcOnModelChange",function(ge){return h.props.change&&h.props.change(h.field,ge)}),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.ALo(7,"ngrxPush"),e.ALo(8,"ngrxPush"),e.ALo(9,"ngrxPush"),e.ALo(10,"ngrxPush"),e.ALo(11,"ngrxPush"),e.qZA()()(),e.YNc(12,g2,6,9,"nz-col",4)(13,s0,3,3,"nz-col",5),e.ALo(14,"ngrxPush"),e.qZA(),e.YNc(15,d0,3,3,"ng-container",6)(16,v2,2,3,"ng-template",null,7,e.W1O)(18,_2,3,7,"ng-template",null,8,e.W1O)),2&s){const O=e.MAs(17),ge=e.MAs(19);e.Q6J("nzGutter",e.DdM(40,y2)),e.xp6(2),e.Q6J("nzTooltipTrigger",h.props.requireFeature&&!e.lcZ(3,22,h.onFeatureId$)?"hover":null),e.xp6(2),e.Q6J("cvcAddEntity",ge)("cvcAddEntityModel",e.lcZ(5,24,h.onModel$))("cvcAddEntityBehavior",h.showAddBehavior)("cvcMinSearchStrLength",h.props.minSearchStrLength)("cvcSelectMode",h.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",O)("cvcFormControl",h.formControl)("cvcFormlyAttributes",h.field)("cvcEntityName",h.props.entityName)("cvcPlaceholder",h.props.placeholder)("cvcResults",e.lcZ(6,26,h.result$))("cvcDisabled",h.props.requireFeature&&!e.lcZ(7,28,h.onFeatureId$))("cvcOptions",e.lcZ(8,30,h.selectOption$))("cvcSelectOpen",e.lcZ(9,32,h.selectOpen$))("cvcShowError",h.showError)("cvcLoading",e.lcZ(10,34,h.isLoading$))("cvcParamName",e.lcZ(11,36,h.onFeatureName$)),e.xp6(8),e.Q6J("ngIf",h.props.showManagerBtn),e.xp6(),e.Q6J("ngIf",e.lcZ(14,38,h.showMgr$)),e.xp6(2),e.Q6J("ngrxLet",h.onSearch$)}},styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}.hide-dropdown[_ngcontent-%COMP%]{display:none}  nz-input-group{border-color:#d9d9d9!important}"],changeDetection:0}),l})();const e4={types:[{name:"variant-select",wrappers:["form-field"],component:z2},{name:"variant-multi-select",wrappers:["form-field"],component:z2,defaultOptions:{props:{label:"Variants",isMultiSelect:!0}}}]};let pu=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,xn,ut.x,Jn,ti.g,We.s,na,Il,pr,ku,Pl.M,Pr.y,y.X0.forChild(e4),n.u5,Nt.L,he.ic,uo.sL,N.U5,H.Jb,ee.PV,B.o7,fi.Qp,Be.LV,Ce.ZJ,uo.sL,rr.vh,me.Wr,us.b1,N.U5,H.Jb,ee.PV,B.o7,xe,Xn.$6,pi.HQ,to.X,qn.cg,Ce.ZJ,n.UX]}),l})();e.B6R(z2,function(){return[u.mk,u.sg,u.O5,dn,nn.J,lo.eJ,uo.ix,de.w,ce.dQ,H.t3,H.SK,ee.Ls,Ce.ZU,qn.SY,nh,Xh]},function(){return[Mr.A,lo.fM]});const T2=["optionTemplates"];function oh(l,v){if(1&l&&(e.ynx(0),e.TgZ(1,"em"),e._UZ(2,"span",8),e.ALo(3,"highlightTypeahead"),e.qZA(),e.BQk()),2&l){const s=e.oxw(2).$implicit,h=e.oxw().ngrxLet;e.xp6(2),e.Q6J("innerHtml",e.xi3(3,1,s.soid,h),e.oJD)}}function M2(l,v){if(1&l&&(e._UZ(0,"cvc-entity-tag",5),e.TgZ(1,"span",6),e.YNc(2,oh,4,4,"ng-container",7),e.qZA()),2&l){const s=e.oxw().$implicit,h=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",s.__typename+":"+s.id)("cvcEmphasize",h),e.xp6(2),e.Q6J("ngIf",s.soid)}}function b2(l,v){1&l&&(e.ynx(0),e.YNc(1,M2,3,4,"ng-template",null,4,e.W1O),e.BQk())}function p0(l,v){if(1&l&&(e.ynx(0),e.YNc(1,b2,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&l){const s=e.oxw();e.xp6(),e.Q6J("ngForOf",e.lcZ(2,1,s.result$))}}function h0(l,v){if(1&l){const s=e.EpF();e.TgZ(0,"div",9)(1,"cvc-entity-tag",10),e.NdJ("cvcOnClose",function(){const ge=e.CHM(s).$implicit,mt=e.oxw();return e.KtG(mt.onTagClose$.next(ge.nzValue))}),e.qZA()()}if(2&l){const s=v.$implicit,h=e.oxw();e.xp6(),e.Q6J("cvcCacheId","VariantType:"+s.nzValue)("cvcContext",h.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",h.props.isMultiSelect?"default":"closeable")}}const f0=Vo(No(),zi());let E2=(()=>{class l extends f0{constructor(s,h,O){super(),this.taq=s,this.tq=h,this.changeDetectorRef=O,this.defaultOptions={props:{entityName:{singular:"VariantType",plural:"VariantTypes"},isMultiSelect:!1,placeholders:{default:"Search Variant Types",multiDefault:"Select VariantType(s)"},description:'Add one or more variant types from the <a href="http://www.sequenceontology.org/browser/" target="_blank">Sequence Ontology</a> (e.g., missense, loss-of-function). Be specific as possible, avoid the addition of root concepts, and use the sequence_variant tree of the sequence ontology.'}},this.placeholder$=new Ve.X(this.defaultOptions.props.placeholders.default)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.configurePlaceholders()}configureStateConnections(){}configurePlaceholders(){}getTypeaheadVarsFn(s){return{name:s}}getTypeaheadResultsFn(s){return s.data.variantTypeTypeahead}getTagQueryVarsFn(s){return{id:s}}getTagQueryResultsFn(s){return s.data.variantType}getSelectedItemOptionFn(s){return{value:s.id,label:s.name}}getSelectOptionsFn(s,h){return s.map((O,ge)=>({label:h.get(ge)||O.name,value:O.id}))}}return l.\u0275fac=function(s){return new(s||l)(e.Y36(Hn.jmY),e.Y36(Hn._nE),e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-variant-type-select"]],viewQuery:function(s,h){if(1&s&&e.Gf(T2,5,e.Rgc),2&s){let O;e.iGM(O=e.CRH())&&(h.optionTemplates=O)}},features:[e.qOj],decls:8,vars:19,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf"],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(s,h){if(1&s&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(ge){return h.onSearch$.next(ge)})("cvcOnOpenChange",function(ge){return h.onOpenChange$.next(ge)})("cvcOnModelChange",function(ge){return h.props.change&&h.props.change(h.field,ge)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.qZA(),e.YNc(5,p0,3,3,"ng-container",1)(6,h0,2,3,"ng-template",null,2,e.W1O)),2&s){const O=e.MAs(7);e.Q6J("cvcSelectMode",h.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",O)("cvcFormControl",h.formControl)("cvcFormlyAttributes",h.field)("cvcEntityName",h.props.entityName)("cvcPlaceholder",e.lcZ(1,11,h.placeholder$))("cvcResults",e.lcZ(2,13,h.result$))("cvcOptions",e.lcZ(3,15,h.selectOption$))("cvcShowError",h.showError)("cvcLoading",e.lcZ(4,17,h.isLoading$)),e.xp6(5),e.Q6J("ngrxLet",h.onSearch$)}},dependencies:[u.sg,u.O5,lo.eJ,Ce.ZU,dn,nn.J,lo.fM,Mr.A],changeDetection:0}),l})();const S2={types:[{name:"variant-type-select",wrappers:["form-field"],component:E2,defaultOptions:{props:{label:"Variant Type"}}},{name:"variant-type-multi-select",wrappers:["form-field"],component:E2,defaultOptions:{props:{isMultiSelect:!0,label:"Variant Types"}}}]};let u6=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,n.UX,y.X0.forChild(S2),Nt.L,uo.sL,Be.LV,Xn.$6,fi.Qp,ee.PV,B.o7,H.Jb,qn.cg,st.zf,N.U5,he.ic,Ce.ZJ,to.X,Jn,xn,We.s,ut.x]}),l})(),m0=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,Lo,sr,kr,De,Zo,_e,Un,yr,ai,Dr,Or,mi,Bs,Ma,kd,Ir,Uu,Rl,Ip,Fp,$a,U1,el,Rp,d1,Nh,f,Qi,ga,Yp,pu,u6]}),l})();var fp;function d6(l,v){if(1&l&&e._uU(0),2&l){const s=e.oxw();e.hij(" ",s.props.addFormTitle,"\n")}}const x2=()=>[6,6];let ih=((fp=class extends y.n2{constructor(){super(),this.contentTemplate$=new Go.t}ngAfterViewInit(){this.field.props&&this.field.props.addFormContent?this.contentTemplate$.next(this.field.props.addFormContent):console.error(`${this.field.id} add-entity-form wrapper failed to find parent field's props.addFormContent TemplateRef.`)}}).\u0275fac=function(v){return new(v||fp)},fp.\u0275cmp=e.Xpm({type:fp,selectors:[["cvc-add-entity-form-wrapper"]],features:[e.qOj],decls:10,vars:7,consts:[[3,"nzGutter"],["nzFlex","auto"],["fieldComponent",""],["nzFlex","20px"],["type","button","nz-button","","nzType","primary","nzSize","default","nzShape","circle","nz-popover","",3,"disabled","nzPopoverTitle","nzPopoverContent"],["nz-icon","","nzType","plus-circle","nzTheme","outline"],["titleTemplate",""]],template:function(v,s){if(1&v&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1),e.GkF(2,null,2),e.qZA(),e.TgZ(4,"nz-col",3)(5,"button",4),e.ALo(6,"ngrxPush"),e._UZ(7,"span",5),e.qZA()()(),e.YNc(8,d6,1,1,"ng-template",null,6,e.W1O)),2&v){const h=e.MAs(9);e.Q6J("nzGutter",e.DdM(6,x2)),e.xp6(5),e.Q6J("disabled",null==s.field.props?null:s.field.props.disabled)("nzPopoverTitle",h)("nzPopoverContent",e.lcZ(6,4,s.contentTemplate$))}},dependencies:[uo.ix,de.w,ce.dQ,Xn.lU,ee.Ls,H.t3,H.SK,lo.fM],styles:[".add-button[_ngcontent-%COMP%]{font-size:24px;color:#cfcfdf}"],changeDetection:0}),fp);ih=(0,V.gn)([(0,ln.c)()],ih);const p6={wrappers:[{name:"add-entity-form",component:ih}]};let Jo=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,y.X0.forChild(p6),uo.sL,Xn.$6,ee.PV,H.Jb]}),l})();function D2(l,v){1&l&&e._UZ(0,"formly-field",2),2&l&&e.Q6J("field",v.$implicit)}const O2={size:"default"},w2={wrappers:[{name:"form-card",component:(()=>{class l extends y.n2{get errorState(){return this.showError?"error":""}constructor(){super(),this.wrapperOptions={...O2}}ngOnInit(){this.props.formCardOptions&&(this.wrapperOptions={...this.wrapperOptions,...this.props.formCardOptions})}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-form-card"]],features:[e.qOj],decls:2,vars:3,consts:[[3,"nzTitle","nzSize"],[3,"field",4,"ngFor","ngForOf"],[3,"field"]],template:function(s,h){if(1&s&&(e.TgZ(0,"nz-card",0),e.YNc(1,D2,1,1,"formly-field",1),e.qZA()),2&s){let O;e.Q6J("nzTitle",h.wrapperOptions.title)("nzSize",null!==(O=h.wrapperOptions.size)&&void 0!==O?O:"default"),e.xp6(),e.Q6J("ngForOf",h.field.fieldGroup)}},dependencies:[u.sg,y.cw,rr.bd]}),l})()}]};let g0=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,n.u5,y.X0.forChild(w2),H.Jb,rr.vh,me.Wr]}),l})();const n4={wrappers:[{name:"form-footer",component:(()=>{class l extends y.n2{ngOnInit(){}}return l.\u0275fac=(()=>{let v;return function(h){return(v||(v=e.n5z(l)))(h||l)}})(),l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-form-footer"]],features:[e.qOj],decls:4,vars:0,consts:[[1,"form-footer"],["nzSpan","24",1,"submit-col"],["fieldComponent",""]],template:function(s,h){1&s&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1),e.GkF(2,null,2),e.qZA()())},dependencies:[H.t3,H.SK],styles:[".form-footer[_ngcontent-%COMP%]{margin-top:1em;border-radius:8px;background-color:#f0f0f0;padding:1em}.submit-col[_ngcontent-%COMP%]{text-align:right}"],changeDetection:0}),l})()}]};let vp=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,H.Jb,y.X0.forChild(n4)]}),l})();var P2=c(9333),_p=c(8125),T1=c(9382);let o4=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,ee.PV,H.Jb,rr.vh,T1.we,_p.q6,lr.Ph,to.X,Ce.ZJ,Qe.s]}),l})(),I2=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,uo.sL,Kc.Rt,us.b1]}),l})();var i4=c(553);const v0={VALID:"success",INVALID:"error",PENDING:"processing",DISABLED:"default"};let A2=(()=>{class l{constructor(){this.tagColor="default"}set cvcFormControlStatus(s){this._status=s,this.tagColor=s?v0[s]:"default"}get cvcFormControlStatus(){return this._status}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-form-status-tag"]],inputs:{cvcFormControlStatus:"cvcFormControlStatus"},decls:3,vars:4,consts:[[3,"nzColor"]],template:function(s,h){1&s&&(e.TgZ(0,"nz-tag",0),e._uU(1),e.ALo(2,"lowercase"),e.qZA()),2&s&&(e.Q6J("nzColor",h.tagColor),e.xp6(),e.hij(" ",h.cvcFormControlStatus?e.lcZ(2,2,h.cvcFormControlStatus):"UNKNOWN","\n"))},dependencies:[to.j,u.i8]}),l})();function _0(l,v){if(1&l&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&l){const s=e.oxw(2).ctrl;e.xp6(),e.hij(" ",s.value," ")}}function F2(l,v){1&l&&(e.TgZ(0,"span",8),e._uU(1," undefined "),e.qZA())}function y0(l,v){if(1&l&&(e.TgZ(0,"nz-list-item")(1,"nz-list-item-meta")(2,"nz-list-item-meta-title"),e._uU(3),e.qZA(),e.TgZ(4,"nz-list-item-meta-description"),e.YNc(5,_0,2,1,"span",5)(6,F2,2,0,"span",6),e.qZA()(),e.TgZ(7,"nz-list-item-extra"),e._UZ(8,"cvc-form-status-tag",7),e.qZA()()),2&l){const s=e.oxw(),h=s.key,O=s.ctrl;e.xp6(3),e.hij(" ",h," "),e.xp6(2),e.Q6J("ngIf",O.value),e.xp6(),e.Q6J("ngIf",!O.value),e.xp6(2),e.Q6J("cvcFormControlStatus",O.status)}}function C0(l,v){}const N2=(l,v)=>({key:l,ctrl:v});function z0(l,v){if(1&l&&e.YNc(0,C0,0,0,"ng-template",12),2&l){const s=v.$implicit;e.oxw(3);const h=e.MAs(3);e.Q6J("ngTemplateOutlet",h)("ngTemplateOutletContext",e.WLB(2,N2,s.key,s.value))}}function L2(l,v){if(1&l&&(e.TgZ(0,"strong"),e._uU(1),e.qZA()),2&l){const s=e.oxw(2).key;e.xp6(),e.Oqu(s)}}function k2(l,v){if(1&l&&(e.TgZ(0,"nz-list-item")(1,"nz-card",9)(2,"nz-list",10),e.YNc(3,z0,1,5,null,4),e.ALo(4,"keyvalue"),e.qZA()(),e.YNc(5,L2,2,1,"ng-template",null,11,e.W1O),e.qZA()),2&l){const s=e.oxw(),h=s.key,O=s.ctrl;e.xp6(),e.Q6J("nzTitle",h),e.xp6(2),e.Q6J("ngForOf",e.lcZ(4,2,O.controls))}}function T0(l,v){if(1&l&&e.YNc(0,y0,9,4,"nz-list-item",5)(1,k2,7,4,"nz-list-item",5),2&l){const s=v.ctrl;e.Q6J("ngIf",!s.controls),e.xp6(),e.Q6J("ngIf",s.controls)}}function M0(l,v){}function Xs(l,v){if(1&l&&e.YNc(0,M0,0,0,"ng-template",12),2&l){const s=v.$implicit;e.oxw();const h=e.MAs(3);e.Q6J("ngTemplateOutlet",h)("ngTemplateOutletContext",e.WLB(2,N2,s.key,s.value))}}function b0(l,v){if(1&l&&(e.ynx(0),e.TgZ(1,"nz-list",2),e.YNc(2,T0,2,2,"ng-template",null,3,e.W1O),e.qZA(),e.YNc(4,Xs,1,5,null,4),e.ALo(5,"keyvalue"),e.BQk()),2&l){const s=v.ngIf;e.xp6(4),e.Q6J("ngForOf",e.lcZ(5,1,s.controls))}}function E0(l,v){1&l&&e._uU(0," No AbstractFormControl provided. ")}let h6=(()=>{class l{set cvcAbstractControl(s){if(!s)throw new Error("cvc-form-debug-field-list requires valid cvcFormControl Input.");this._cvcFormControl=s,this.formControl=s}get cvcFormControl(){return this._cvcFormControl}constructor(){}ngOnInit(){}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-form-debug-field-list"]],inputs:{cvcAbstractControl:"cvcAbstractControl"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["noFormControl",""],["nzSize","small"],["ctrlTemplateRef",""],[4,"ngFor","ngForOf"],[4,"ngIf"],["style","padding: 0px 4px; color: white; background-color: #ccc",4,"ngIf"],[3,"cvcFormControlStatus"],[2,"padding","0px 4px","color","white","background-color","#ccc"],["nzSize","small",2,"width","100%",3,"nzTitle"],["nzSize","small",2,"padding","0"],["cardExtra",""],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(s,h){if(1&s&&e.YNc(0,b0,6,3,"ng-container",0)(1,E0,1,0,"ng-template",null,1,e.W1O),2&s){const O=e.MAs(2);e.Q6J("ngIf",h.formControl)("ngIfElse",O)}},dependencies:[u.sg,u.O5,u.tP,rr.bd,lr.n_,lr.AA,lr.yi,lr.IO,lr.Pb,lr.yw,A2,u.Nd],styles:["[_nghost-%COMP%]     nz-card .ant-card-body{padding:6px 0}"]}),l})();var hu;function R2(l,v){if(1&l&&(e.ynx(0),e._UZ(1,"ngx-json-viewer",9),e.BQk()),2&l){const s=e.oxw();e.xp6(),e.Q6J("json",s.watchModel)}}function S0(l,v){if(1&l&&(e.ynx(0),e.TgZ(1,"nz-descriptions",10)(2,"nz-descriptions-item",11),e._UZ(3,"cvc-form-status-tag",12),e.qZA(),e.TgZ(4,"nz-descriptions-item",13),e._uU(5),e.qZA(),e.TgZ(6,"nz-descriptions-item",14),e._uU(7),e.qZA(),e.TgZ(8,"nz-descriptions-item",15),e._uU(9),e.qZA(),e.TgZ(10,"nz-descriptions-item",16),e._uU(11),e.qZA(),e.TgZ(12,"nz-descriptions-item",17),e._uU(13),e.qZA()(),e.BQk()),2&l){const s=e.oxw();e.xp6(),e.Q6J("nzColumn",1),e.xp6(2),e.Q6J("cvcFormControlStatus",null==s.cvcForm?null:s.cvcForm.status),e.xp6(2),e.hij(" ",null==s.cvcForm?null:s.cvcForm.pending," "),e.xp6(2),e.hij(" ",null==s.cvcForm?null:s.cvcForm.touched," "),e.xp6(2),e.hij(" ",null==s.cvcForm?null:s.cvcForm.valid," "),e.xp6(2),e.hij(" ",null==s.cvcForm?null:s.cvcForm.dirty," "),e.xp6(2),e.hij(" ",null==s.cvcForm?null:s.cvcForm.enabled," ")}}function x0(l,v){if(1&l&&(e.ynx(0),e._UZ(1,"cvc-form-debug-field-list",18),e.BQk()),2&l){const s=e.oxw();e.xp6(),e.Q6J("cvcAbstractControl",s.cvcForm)}}function D0(l,v){1&l&&(e.ynx(0),e._uU(1," State Content "),e.BQk())}function V2(l,v){if(1&l&&(e.TgZ(0,"nz-row")(1,"nz-col",19),e._uU(2," Form Details "),e.qZA(),e.TgZ(3,"nz-col",20),e._UZ(4,"cvc-form-status-tag",12),e.qZA()()),2&l){const s=e.oxw();e.xp6(4),e.Q6J("cvcFormControlStatus",null==s.cvcForm?null:s.cvcForm.status)}}let r4=((hu=class{constructor(v){this.cdr=v,this.selectedIndex=0}ngOnInit(){if(!this.cvcForm)throw new Error("cvc-form-debug requires valid cvcForm Input.");this.valueChange$=new Ve.X(this.cvcForm.value),this.statusChange$=new Ve.X(this.cvcForm.status),this.formChange$=Bi([this.statusChange$,this.valueChange$]),this.watchModel=this.cvcModel,this.subscriptions=[this.cvcForm.valueChanges.subscribe(v=>{this.watchModel={...this.cvcModel},this.valueChange$.next(v)}),this.cvcForm.statusChanges.subscribe(v=>{this.statusChange$.next(v)}),this.formChange$.subscribe(v=>{this.cdr.detectChanges()})]}}).\u0275fac=function(v){return new(v||hu)(e.Y36(e.sBO))},hu.\u0275cmp=e.Xpm({type:hu,selectors:[["cvc-form-debug"]],inputs:{cvcForm:"cvcForm",cvcModel:"cvcModel"},decls:14,vars:7,consts:[["nzSize","small","nzBordered","true",3,"nzTitle"],["nzSize","small",3,"nzSelectedIndex","nzSelectedIndexChange"],["nzTitle","Model"],["nzTitle","Controls"],["nzTitle","State"],["nzTitle","Form Status"],[3,"ngSwitch"],[4,"ngSwitchCase"],["cardTitle",""],[3,"json"],["nzBordered","","nzSize","small",3,"nzColumn"],["nzTitle","status"],[3,"cvcFormControlStatus"],["nzTitle","pending"],["nzTitle","touched"],["nzTitle","valid"],["nzTitle","dirty"],["nzTitle","enabled"],[3,"cvcAbstractControl"],["nzFlex","2"],["nzFlex","3",1,"form-status-col"]],template:function(v,s){if(1&v&&(e.TgZ(0,"nz-card",0)(1,"nz-card-tab")(2,"nz-tabset",1),e.NdJ("nzSelectedIndexChange",function(O){return s.selectedIndex=O}),e._UZ(3,"nz-tab",2)(4,"nz-tab",3)(5,"nz-tab",4)(6,"nz-tab",5),e.qZA()(),e.ynx(7,6),e.YNc(8,R2,2,1,"ng-container",7)(9,S0,14,7,"ng-container",7)(10,x0,2,1,"ng-container",7)(11,D0,2,0,"ng-container",7),e.BQk(),e.qZA(),e.YNc(12,V2,5,1,"ng-template",null,8,e.W1O)),2&v){const h=e.MAs(13);e.Q6J("nzTitle",h),e.xp6(2),e.Q6J("nzSelectedIndex",s.selectedIndex),e.xp6(5),e.Q6J("ngSwitch",s.selectedIndex),e.xp6(),e.Q6J("ngSwitchCase",0),e.xp6(),e.Q6J("ngSwitchCase",3),e.xp6(),e.Q6J("ngSwitchCase",1),e.xp6(),e.Q6J("ngSwitchCase",2)}},dependencies:[u.RF,u.n9,H.t3,H.SK,rr.bd,rr._i,T1.xH,T1.xw,_p.R7,_p.uj,Qe.Y,h6,A2],styles:["[_nghost-%COMP%]{display:block}.form-status-col[_ngcontent-%COMP%]{text-align:right}.form-status-col[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]:last-child{margin-right:0}"],changeDetection:0}),hu);var M1;function s4(l,v){if(1&l&&(e.TgZ(0,"nz-col",4),e._UZ(1,"cvc-form-debug",5),e.qZA()),2&l){const s=e.oxw();e.Q6J("nzSpan",8),e.xp6(),e.Q6J("cvcForm",s.form)("cvcModel",s.model)}}r4=(0,V.gn)([(0,ln.c)({arrayName:"subscriptions"})],r4);const O0=()=>[8,8];let a4=((M1=class extends y.n2{constructor(){super()}get errorState(){return this.showError?"error":""}ngOnInit(){this.props.showDevPanel=!i4.N.production&&(this.props.showDevPanel||false)}}).\u0275fac=function(v){return new(v||M1)},M1.\u0275cmp=e.Xpm({type:M1,selectors:[["cvc-form-layout-wrapper"]],features:[e.qOj],decls:5,vars:4,consts:[[3,"nzGutter"],[1,"form-col",3,"nzSpan"],["fieldComponent",""],["class","status-col",3,"nzSpan",4,"ngIf"],[1,"status-col",3,"nzSpan"],[3,"cvcForm","cvcModel"]],template:function(v,s){1&v&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1),e.GkF(2,null,2),e.qZA(),e.YNc(4,s4,2,3,"nz-col",3),e.qZA()),2&v&&(e.Q6J("nzGutter",e.DdM(3,O0)),e.xp6(),e.Q6J("nzSpan",s.props.showDevPanel?16:24),e.xp6(3),e.Q6J("ngIf",s.props.showDevPanel))},dependencies:[u.O5,H.t3,H.SK,r4],changeDetection:0}),M1);a4=(0,V.gn)([(0,ln.c)({arrayName:"subscriptions"})],a4);const P0={wrappers:[{name:"form-layout",component:a4}]};let I0=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,y.X0.forChild(P0),uo.sL,rr.vh,ee.PV,to.X,T1.we,Xn.$6,lr.Ph,H.Jb,P2.h,I2,o4,Qe.s]}),l})();function mc(l,v){if(1&l&&(e.TgZ(0,"nz-col",4),e._UZ(1,"formly-field",5),e.qZA()),2&l){const s=v.$implicit,h=e.oxw(2);let O;e.Q6J("nzSpan",null!==(O=h.wrapperOptions.span)&&void 0!==O?O:null),e.xp6(),e.Q6J("field",s)}}function c4(l,v){if(1&l&&e.YNc(0,mc,2,2,"nz-col",3),2&l){const s=e.oxw();e.Q6J("ngForOf",s.field.fieldGroup)}}function A0(l,v){if(1&l&&(e.TgZ(0,"nz-col",8),e._UZ(1,"formly-field",5),e.qZA()),2&l){const s=v.$implicit,h=e.oxw(3);e.Q6J("nzFlex",h.wrapperOptions.flex),e.xp6(),e.Q6J("field",s)}}function B2(l,v){if(1&l&&(e.ynx(0),e.YNc(1,A0,2,2,"nz-col",7),e.BQk()),2&l){const s=e.oxw(2);e.xp6(),e.Q6J("ngForOf",s.field.fieldGroup)}}function F0(l,v){if(1&l&&(e.TgZ(0,"nz-col",10),e._UZ(1,"formly-field",5),e.qZA()),2&l){const s=v.$implicit,h=e.oxw(3);let O,ge,mt,Tn,In,Eo;e.Q6J("nzXs",null!==(O=h.wrapperOptions.responsive.xs)&&void 0!==O?O:null)("nzSm",null!==(ge=h.wrapperOptions.responsive.sm)&&void 0!==ge?ge:null)("nzMd",null!==(mt=h.wrapperOptions.responsive.md)&&void 0!==mt?mt:null)("nzLg",null!==(Tn=h.wrapperOptions.responsive.lg)&&void 0!==Tn?Tn:null)("nzXl",null!==(In=h.wrapperOptions.responsive.xl)&&void 0!==In?In:null)("nzXXl",null!==(Eo=h.wrapperOptions.responsive.xxl)&&void 0!==Eo?Eo:null),e.xp6(),e.Q6J("field",s)}}function H2(l,v){if(1&l&&(e.ynx(0),e.YNc(1,F0,2,7,"nz-col",9),e.BQk()),2&l){const s=e.oxw(2);e.xp6(),e.Q6J("ngForOf",s.field.fieldGroup)}}function $2(l,v){if(1&l&&(e.TgZ(0,"nz-col",4),e._UZ(1,"formly-field",5),e.qZA()),2&l){const s=v.$implicit,h=v.index,O=e.oxw(3);e.Q6J("nzSpan",O.wrapperOptions.spanIndexed[h]),e.xp6(),e.Q6J("field",s)}}function rh(l,v){if(1&l&&(e.ynx(0),e.YNc(1,$2,2,2,"nz-col",3),e.BQk()),2&l){const s=e.oxw(2);e.xp6(),e.Q6J("ngForOf",s.field.fieldGroup)}}function l4(l,v){if(1&l&&(e.TgZ(0,"nz-col",10),e._UZ(1,"formly-field",5),e.qZA()),2&l){const s=v.$implicit,h=v.index,O=e.oxw(3);let ge,mt,Tn,In,Eo,hi;e.Q6J("nzXs",null!==(ge=O.wrapperOptions.responsiveIndexed[h].xs)&&void 0!==ge?ge:null)("nzSm",null!==(mt=O.wrapperOptions.responsiveIndexed[h].sm)&&void 0!==mt?mt:null)("nzMd",null!==(Tn=O.wrapperOptions.responsiveIndexed[h].md)&&void 0!==Tn?Tn:null)("nzLg",null!==(In=O.wrapperOptions.responsiveIndexed[h].lg)&&void 0!==In?In:null)("nzXl",null!==(Eo=O.wrapperOptions.responsiveIndexed[h].xl)&&void 0!==Eo?Eo:null)("nzXXl",null!==(hi=O.wrapperOptions.responsiveIndexed[h].xxl)&&void 0!==hi?hi:null),e.xp6(),e.Q6J("field",s)}}function f6(l,v){if(1&l&&(e.ynx(0),e.YNc(1,l4,2,7,"nz-col",9),e.BQk()),2&l){const s=e.oxw(2);e.xp6(),e.Q6J("ngForOf",s.field.fieldGroup)}}function U2(l,v){if(1&l&&(e.TgZ(0,"nz-col",8),e._UZ(1,"formly-field",5),e.qZA()),2&l){const s=v.$implicit,h=v.index,O=e.oxw(3);e.Q6J("nzFlex",O.wrapperOptions.flexIndexed[h]),e.xp6(),e.Q6J("field",s)}}function Y2(l,v){if(1&l&&(e.ynx(0),e.YNc(1,U2,2,2,"nz-col",7),e.BQk()),2&l){const s=e.oxw(2);e.xp6(),e.Q6J("ngForOf",s.field.fieldGroup)}}function j2(l,v){if(1&l&&(e.ynx(0),e.YNc(1,B2,2,1,"ng-container",6)(2,H2,2,1,"ng-container",6)(3,rh,2,1,"ng-container",6)(4,f6,2,1,"ng-container",6)(5,Y2,2,1,"ng-container",6),e.BQk()),2&l){const s=e.oxw();e.xp6(),e.Q6J("ngIf",s.wrapperOptions.flex),e.xp6(),e.Q6J("ngIf",s.wrapperOptions.responsive),e.xp6(),e.Q6J("ngIf",s.wrapperOptions.spanIndexed),e.xp6(),e.Q6J("ngIf",s.wrapperOptions.responsiveIndexed),e.xp6(),e.Q6J("ngIf",s.wrapperOptions.flexIndexed)}}const sh={gutter:[8,8],span:24},il={wrappers:[{name:"form-row",component:(()=>{class l extends y.n2{constructor(){super(),this.wrapperOptions={...sh},this.topMargin="0"}ngOnInit(){this.props.formRowOptions&&(this.wrapperOptions={...this.wrapperOptions,...this.props.formRowOptions}),this.topMargin=Array.isArray(this.wrapperOptions.gutter)?this.wrapperOptions.gutter[1]>0?this.wrapperOptions.gutter[1]/2+"px":"0":this.wrapperOptions.gutter&&this.wrapperOptions.gutter>0?this.wrapperOptions.gutter+"px":"0"}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275cmp=e.Xpm({type:l,selectors:[["cvc-form-row"]],features:[e.qOj],decls:5,vars:4,consts:[[1,"form-row-wrapped",3,"nzGutter"],["defaultCol",""],[4,"ngIf","ngIfElse"],[3,"nzSpan",4,"ngFor","ngForOf"],[3,"nzSpan"],[3,"field"],[4,"ngIf"],[3,"nzFlex",4,"ngFor","ngForOf"],[3,"nzFlex"],[3,"nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl",4,"ngFor","ngForOf"],[3,"nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl"]],template:function(s,h){if(1&s&&(e.TgZ(0,"div")(1,"nz-row",0),e.YNc(2,c4,1,1,"ng-template",null,1,e.W1O)(4,j2,6,5,"ng-container",2),e.qZA()()),2&s){const O=e.MAs(3);let ge;e.uIk("style","margin-top: "+h.topMargin,e.Ckj),e.xp6(),e.Q6J("nzGutter",null!==(ge=h.wrapperOptions.gutter)&&void 0!==ge?ge:null),e.xp6(3),e.Q6J("ngIf",h.wrapperOptions.flex||h.wrapperOptions.flexIndexed||h.wrapperOptions.spanIndexed||h.wrapperOptions.responsive||h.wrapperOptions.responsiveIndexed)("ngIfElse",O)}},dependencies:[u.sg,u.O5,H.t3,H.SK,y.cw],changeDetection:0}),l})()}]};let N0=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,n.UX,N.U5,H.Jb,y.X0.forChild(il)]}),l})(),ah=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,I0,g0,vp,Jn,N0,Jo]}),l})(),L0=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({providers:[{provide:y.l7,multi:!0,useFactory:Wt,deps:[r.gz]}],imports:[y.X0.forRoot(ct),n.UX,N.U5,He,ah,Qe.s,n.UX,y.X0,He,N.U5,ah,m0]}),l})()},1022:(bt,Te,c)=>{function n(w){let S={value:void 0,unset:void 0};return w&&w.trim().length>0?S.value=w.trim():S.unset=!0,S}function r(w){let S={value:void 0,unset:void 0};return void 0!==w?S.value=w:S.unset=!0,S}c.d(Te,{aP:()=>U,li:()=>y,uP:()=>r,xt:()=>n});var y=function(w){return w[w.NotApplicable=0]="NotApplicable",w[w.NoneFound=1]="NoneFound",w[w.Found=2]="Found",w}(y||{});const U=[{value:void 0,label:""},{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"},{value:"5",label:"5"},{value:"6",label:"6"},{value:"7",label:"7"},{value:"8",label:"8"},{value:"9",label:"9"},{value:"10",label:"10"},{value:"11",label:"11"},{value:"12",label:"12"},{value:"13",label:"13"},{value:"14",label:"14"},{value:"15",label:"15"},{value:"16",label:"16"},{value:"17",label:"17"},{value:"18",label:"18"},{value:"19",label:"19"},{value:"20",label:"20"},{value:"21",label:"21"},{value:"22",label:"22"},{value:"X",label:"X"},{value:"Y",label:"Y"},{value:"MT",label:"MT"}]},313:(bt,Te,c)=>{c.d(Te,{A4J:()=>R,A94:()=>lr,AIY:()=>El,AMF:()=>Ud,AO2:()=>Q,Aj5:()=>Ju,B0s:()=>Ec,B97:()=>$r,BQZ:()=>ee,BTF:()=>ce,BYO:()=>Hd,Bk6:()=>ka,Bo4:()=>Wc,Cp0:()=>q,D9L:()=>Dc,Del:()=>qu,DkJ:()=>Hi,Dnw:()=>Oo,E1C:()=>$s,E2B:()=>Ys,E8d:()=>L,EFm:()=>la,EH_:()=>Nu,EwB:()=>Z,F3s:()=>Zt,F4e:()=>ku,FB1:()=>re,FJi:()=>lt,FNv:()=>Cn,FOU:()=>Oa,FRr:()=>wl,GYx:()=>oi,Gbq:()=>kr,Gnp:()=>Qd,HPJ:()=>Mo,HUC:()=>At,HWg:()=>Ql,Hmr:()=>Pr,IP1:()=>tt,IRu:()=>$e,IZ6:()=>di,JDX:()=>vn,Kk:()=>zo,Kmw:()=>pl,L5n:()=>ul,L8L:()=>hr,LHC:()=>Bd,LLl:()=>cr,LiH:()=>td,Lr0:()=>ps,MCG:()=>Hc,MNv:()=>Yl,MPi:()=>aa,MYm:()=>ue,Mgx:()=>B,MsG:()=>Et,N$2:()=>xr,NQC:()=>cn,Ni:()=>Xi,O0I:()=>Y,O2u:()=>Ml,OHm:()=>Or,OIL:()=>Kr,OfU:()=>V,PZh:()=>bu,P_b:()=>Rt,Pm:()=>or,QVn:()=>Dl,Q_P:()=>xi,Qtd:()=>Jd,Qzn:()=>ll,R8F:()=>Sl,R8w:()=>ne,RTy:()=>j,RYL:()=>Zi,Rdc:()=>Xr,S8C:()=>Ou,SAN:()=>Vs,SrV:()=>gt,Sx0:()=>ae,T1I:()=>Id,TJt:()=>oa,TbJ:()=>_t,Tg0:()=>Ku,TiL:()=>si,Tq1:()=>Vn,Tt7:()=>Od,UIR:()=>W,UWf:()=>Ln,VGC:()=>Ya,VGG:()=>xs,VZq:()=>ya,Vj7:()=>Da,WFw:()=>zs,WGV:()=>Yd,WOS:()=>Gl,WRV:()=>ei,X5f:()=>Dr,XQi:()=>Bc,Xft:()=>Fd,YMi:()=>_e,Y_K:()=>Bu,Ybm:()=>gn,ZBX:()=>je,ZYZ:()=>rr,Zo2:()=>fr,_3P:()=>H,_Wm:()=>S,_jb:()=>Dt,_nE:()=>Rl,aC3:()=>Vc,aw3:()=>ds,bgg:()=>Os,c$m:()=>Cs,cEv:()=>qi,cIw:()=>$d,cMj:()=>Bl,ce2:()=>jr,d4o:()=>xe,dDn:()=>Qu,dGO:()=>kd,da2:()=>ir,db2:()=>Jl,eDl:()=>zl,eY8:()=>$o,ejK:()=>Na,enw:()=>ls,fow:()=>Ot,fwG:()=>_u,g0X:()=>jd,ghc:()=>Rr,h01:()=>x,hVB:()=>Ra,h_J:()=>Wa,huM:()=>Fe,i44:()=>ft,iGM:()=>yu,iJT:()=>ql,iST:()=>Wn,io:()=>Tr,iwm:()=>e,j28:()=>nn,jMx:()=>Zd,jmY:()=>kl,jw9:()=>on,k7O:()=>Zo,kQf:()=>Ss,kQl:()=>Dn,kqt:()=>M,l4w:()=>ro,lYz:()=>Kt,lcA:()=>Es,ld2:()=>nr,m$d:()=>nd,m55:()=>k,mII:()=>Sa,mdl:()=>N,mki:()=>Rd,mpB:()=>_n,mq6:()=>da,nSb:()=>ju,nnL:()=>wc,o71:()=>rn,oRL:()=>Me,olA:()=>Fc,otH:()=>vu,pHu:()=>$c,pP7:()=>Lt,pR8:()=>vl,q1D:()=>P1,q2A:()=>wu,q9q:()=>Vr,qf4:()=>zc,qgP:()=>Vd,rZD:()=>Je,rzy:()=>bi,s4d:()=>gl,sA8:()=>Fa,sBY:()=>ac,sLD:()=>ed,sfv:()=>se,sjj:()=>Uu,t8X:()=>I,tI$:()=>zr,tI1:()=>ve,tJ6:()=>Bs,tWC:()=>Oc,td:()=>Pe,ti:()=>_a,tji:()=>yl,tw_:()=>mr,u4i:()=>U,uBv:()=>w,uL8:()=>Pl,ubO:()=>sd,vMt:()=>zu,vjc:()=>Al,vv6:()=>jo,vxe:()=>Sc,vz2:()=>wr,wJ2:()=>ye,wRZ:()=>le,wbP:()=>fn,wg3:()=>$l,wkr:()=>Re,wpb:()=>nt,xlL:()=>hn,y1h:()=>te,yic:()=>qe,yok:()=>xc,yqR:()=>Wd,z1I:()=>G,z8D:()=>Wu,zOE:()=>Lc,z_7:()=>tc,zpu:()=>Ni,zwS:()=>pi});var n=c(9111),r=c(9212),e=function(m){return m.Na="NA",m.TierIii="TIER_III",m.TierIiLevelC="TIER_II_LEVEL_C",m.TierIiLevelD="TIER_II_LEVEL_D",m.TierIv="TIER_IV",m.TierILevelA="TIER_I_LEVEL_A",m.TierILevelB="TIER_I_LEVEL_B",m}(e||{}),N=function(m){return m.DoesNotSupport="DOES_NOT_SUPPORT",m.Supports="SUPPORTS",m}(N||{}),H=function(m){return m.AdverseResponse="ADVERSE_RESPONSE",m.Benign="BENIGN",m.BetterOutcome="BETTER_OUTCOME",m.LikelyBenign="LIKELY_BENIGN",m.LikelyOncogenic="LIKELY_ONCOGENIC",m.LikelyPathogenic="LIKELY_PATHOGENIC",m.Na="NA",m.Negative="NEGATIVE",m.Oncogenic="ONCOGENIC",m.Pathogenic="PATHOGENIC",m.PoorOutcome="POOR_OUTCOME",m.Positive="POSITIVE",m.ReducedSensitivity="REDUCED_SENSITIVITY",m.Resistance="RESISTANCE",m.Sensitivityresponse="SENSITIVITYRESPONSE",m.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",m}(H||{}),U=function(m){return m.AmpLevel="AMP_LEVEL",m.AssertionDirection="ASSERTION_DIRECTION",m.AssertionType="ASSERTION_TYPE",m.DiseaseName="DISEASE_NAME",m.EvidenceItemsCount="EVIDENCE_ITEMS_COUNT",m.Id="ID",m.Significance="SIGNIFICANCE",m.Status="STATUS",m.Summary="SUMMARY",m.TherapyName="THERAPY_NAME",m}(U||{}),w=function(m){return m.Diagnostic="DIAGNOSTIC",m.Oncogenic="ONCOGENIC",m.Predictive="PREDICTIVE",m.Predisposing="PREDISPOSING",m.Prognostic="PROGNOSTIC",m}(w||{}),S=function(m){return m.And="AND",m.Or="OR",m}(S||{}),L=function(m){return m.EvidenceItemCount="EVIDENCE_ITEM_COUNT",m.Name="NAME",m.NctId="NCT_ID",m.SourceCount="SOURCE_COUNT",m}(L||{}),B=function(m){return m.Conflict="CONFLICT",m.Expired="EXPIRED",m.Missing="MISSING",m.Valid="VALID",m}(B||{}),V=function(m){return m.Assertion="ASSERTION",m.EvidenceItem="EVIDENCE_ITEM",m.Feature="FEATURE",m.MolecularProfile="MOLECULAR_PROFILE",m.Source="SOURCE",m.Variant="VARIANT",m.VariantGroup="VARIANT_GROUP",m}(V||{}),I=function(m){return m.Factor="FACTOR",m}(I||{}),x=function(m){return m.Created="CREATED",m.LastModified="LAST_MODIFIED",m}(x||{}),ne=function(m){return m.AssertionCount="ASSERTION_COUNT",m.Doid="DOID",m.EvidenceItemCount="EVIDENCE_ITEM_COUNT",m.FeatureCount="FEATURE_COUNT",m.Name="NAME",m.VariantCount="VARIANT_COUNT",m}(ne||{}),Q=function(m){return m.Accepted="ACCEPTED",m.AssertionAccepted="ASSERTION_ACCEPTED",m.AssertionRejected="ASSERTION_REJECTED",m.AssertionReverted="ASSERTION_REVERTED",m.AssertionSubmitted="ASSERTION_SUBMITTED",m.Commented="COMMENTED",m.ComplexMolecularProfileCreated="COMPLEX_MOLECULAR_PROFILE_CREATED",m.CuratedSourceSuggestion="CURATED_SOURCE_SUGGESTION",m.DeprecatedFeature="DEPRECATED_FEATURE",m.DeprecatedMolecularProfile="DEPRECATED_MOLECULAR_PROFILE",m.DeprecatedVariant="DEPRECATED_VARIANT",m.FeatureCreated="FEATURE_CREATED",m.Flagged="FLAGGED",m.FlagResolved="FLAG_RESOLVED",m.PublicationSuggested="PUBLICATION_SUGGESTED",m.Rejected="REJECTED",m.RejectedSourceSuggestion="REJECTED_SOURCE_SUGGESTION",m.RequeuedSourceSuggestion="REQUEUED_SOURCE_SUGGESTION",m.Reverted="REVERTED",m.RevisionAccepted="REVISION_ACCEPTED",m.RevisionRejected="REVISION_REJECTED",m.RevisionSuggested="REVISION_SUGGESTED",m.RevisionSuperseded="REVISION_SUPERSEDED",m.Submitted="SUBMITTED",m.VariantCreated="VARIANT_CREATED",m}(Q||{}),ye=function(m){return m.Organization="ORGANIZATION",m.Subject="SUBJECT",m.Unscoped="UNSCOPED",m.User="USER",m}(ye||{}),ve=function(m){return m.DoesNotSupport="DOES_NOT_SUPPORT",m.Na="NA",m.Supports="SUPPORTS",m}(ve||{}),ae=function(m){return m.A="A",m.B="B",m.C="C",m.D="D",m.E="E",m}(ae||{}),te=function(m){return m.AdverseResponse="ADVERSE_RESPONSE",m.Benign="BENIGN",m.BetterOutcome="BETTER_OUTCOME",m.DominantNegative="DOMINANT_NEGATIVE",m.GainOfFunction="GAIN_OF_FUNCTION",m.LikelyBenign="LIKELY_BENIGN",m.LikelyPathogenic="LIKELY_PATHOGENIC",m.LossOfFunction="LOSS_OF_FUNCTION",m.Na="NA",m.Negative="NEGATIVE",m.Neomorphic="NEOMORPHIC",m.Oncogenicity="ONCOGENICITY",m.Pathogenic="PATHOGENIC",m.PoorOutcome="POOR_OUTCOME",m.Positive="POSITIVE",m.Predisposition="PREDISPOSITION",m.Protectiveness="PROTECTIVENESS",m.ReducedSensitivity="REDUCED_SENSITIVITY",m.Resistance="RESISTANCE",m.Sensitivityresponse="SENSITIVITYRESPONSE",m.UnalteredFunction="UNALTERED_FUNCTION",m.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",m.Unknown="UNKNOWN",m}(te||{}),q=function(m){return m.Description="DESCRIPTION",m.DiseaseName="DISEASE_NAME",m.EvidenceDirection="EVIDENCE_DIRECTION",m.EvidenceLevel="EVIDENCE_LEVEL",m.EvidenceRating="EVIDENCE_RATING",m.EvidenceType="EVIDENCE_TYPE",m.Id="ID",m.Significance="SIGNIFICANCE",m.Status="STATUS",m.TherapyName="THERAPY_NAME",m.VariantOrigin="VARIANT_ORIGIN",m}(q||{}),j=function(m){return m.Accepted="ACCEPTED",m.Rejected="REJECTED",m.Submitted="SUBMITTED",m}(j||{}),k=function(m){return m.Accepted="ACCEPTED",m.All="ALL",m.Rejected="REJECTED",m.Submitted="SUBMITTED",m}(k||{}),M=function(m){return m.Diagnostic="DIAGNOSTIC",m.Functional="FUNCTIONAL",m.Oncogenic="ONCOGENIC",m.Predictive="PREDICTIVE",m.Predisposing="PREDISPOSING",m.Prognostic="PROGNOSTIC",m}(M||{}),G=function(m){return m.Factor="FACTOR",m.Gene="GENE",m}(G||{}),Y=function(m){return m.AssertionCount="assertionCount",m.DiseaseName="diseaseName",m.EvidenceItemCount="evidenceItemCount",m.FeatureAlias="featureAlias",m.FeatureName="featureName",m.MolecularProfileCount="molecularProfileCount",m.TherapyName="therapyName",m.VariantCount="variantCount",m}(Y||{}),ee=function(m){return m.Open="OPEN",m.Resolved="RESOLVED",m}(ee||{}),se=function(m){return m.Assertion="ASSERTION",m.EvidenceItem="EVIDENCE_ITEM",m.Feature="FEATURE",m.MolecularProfile="MOLECULAR_PROFILE",m.Variant="VARIANT",m.VariantGroup="VARIANT_GROUP",m}(se||{}),Me=function(m){return m.Assertion="ASSERTION",m.EvidenceItem="EVIDENCE_ITEM",m.Feature="FEATURE",m.MolecularProfile="MOLECULAR_PROFILE",m.Variant="VARIANT",m.VariantGroup="VARIANT_GROUP",m}(Me||{}),Et=function(m){return m.All="ALL",m.WithAccepted="WITH_ACCEPTED",m.WithAcceptedOrSubmitted="WITH_ACCEPTED_OR_SUBMITTED",m.WithSubmitted="WITH_SUBMITTED",m}(Et||{}),Cn=function(m){return m.AssertionCount="assertionCount",m.EvidenceItemCount="evidenceItemCount",m.MolecularProfileScore="molecularProfileScore",m.VariantCount="variantCount",m}(Cn||{}),Ot=function(m){return m.Mention="MENTION",m.Subscription="SUBSCRIPTION",m}(Ot||{}),hn=function(m){return m.Id="ID",m.Name="NAME",m}(hn||{}),Kt=function(m){return m.AssertionCount="ASSERTION_COUNT",m.EvidenceItemCount="EVIDENCE_ITEM_COUNT",m.HpoId="HPO_ID",m.Name="NAME",m}(Kt||{}),cn=function(m){return m.Read="READ",m.Unread="UNREAD",m}(cn||{}),vn=function(m){return m.Grch37="GRCH37",m.Grch38="GRCH38",m.Ncbi36="NCBI36",m}(vn||{}),lt=function(m){return m.Accepted="ACCEPTED",m.New="NEW",m.Rejected="REJECTED",m.Superseded="SUPERSEDED",m}(lt||{}),Je=function(m){return m.Assertion="ASSERTION",m.EvidenceItem="EVIDENCE_ITEM",m.Feature="FEATURE",m.MolecularProfile="MOLECULAR_PROFILE",m.Revision="REVISION",m.Variant="VARIANT",m.VariantGroup="VARIANT_GROUP",m}(Je||{}),gt=function(m){return m.Asc="ASC",m.Desc="DESC",m}(gt||{}),qe=function(m){return m.Asco="ASCO",m.Ash="ASH",m.Pubmed="PUBMED",m}(qe||{}),Zt=function(m){return m.Curated="CURATED",m.New="NEW",m.Rejected="REJECTED",m}(Zt||{}),on=function(m){return m.Citation="CITATION",m.CitationId="CITATION_ID",m.CreatedAt="CREATED_AT",m.DiseaseName="DISEASE_NAME",m.SourceType="SOURCE_TYPE",m.Submitter="SUBMITTER",m}(on||{}),Dn=function(m){return m.Authors="AUTHORS",m.CitationId="CITATION_ID",m.EvidenceCount="EVIDENCE_COUNT",m.Journal="JOURNAL",m.Name="NAME",m.SourceType="SOURCE_TYPE",m.SuggestionCount="SUGGESTION_COUNT",m.Year="YEAR",m}(Dn||{}),rn=function(m){return m.Assertion="ASSERTION",m.EvidenceItem="EVIDENCE_ITEM",m.Feature="FEATURE",m.MolecularProfile="MOLECULAR_PROFILE",m.Revision="REVISION",m.SourceSuggestion="SOURCE_SUGGESTION",m.Variant="VARIANT",m.VariantGroup="VARIANT_GROUP",m}(rn||{}),_n=function(m){return m.Assertion="ASSERTION",m.EvidenceItem="EVIDENCE_ITEM",m.Feature="FEATURE",m.MolecularProfile="MOLECULAR_PROFILE",m.Revision="REVISION",m.Role="ROLE",m.Variant="VARIANT",m.VariantGroup="VARIANT_GROUP",m}(_n||{}),Re=function(m){return m.Combination="COMBINATION",m.Sequential="SEQUENTIAL",m.Substitutes="SUBSTITUTES",m}(Re||{}),At=function(m){return m.AssertionCount="ASSERTION_COUNT",m.EvidenceItemCount="EVIDENCE_ITEM_COUNT",m.Name="NAME",m.NcitId="NCIT_ID",m}(At||{}),_t=function(m){return m.AllTime="ALL_TIME",m.LastMonth="LAST_MONTH",m.LastWeek="LAST_WEEK",m.LastYear="LAST_YEAR",m}(_t||{}),ft=function(m){return m.Admin="ADMIN",m.Curator="CURATOR",m.Editor="EDITOR",m}(ft||{}),$e=function(m){return m.Id="ID",m.LastAction="LAST_ACTION",m.Name="NAME",m.Role="ROLE",m}($e||{}),re=function(m){return m.EvidenceItemCount="EVIDENCE_ITEM_COUNT",m.GeneNames="GENE_NAMES",m.Name="NAME",m.VariantCount="VARIANT_COUNT",m.VariantNames="VARIANT_NAMES",m}(re||{}),xe=function(m){return m.CoordinateEnd="COORDINATE_END",m.CoordinateStart="COORDINATE_START",m.Name="NAME",m}(xe||{}),Fe=function(m){return m.Combined="COMBINED",m.CommonGermline="COMMON_GERMLINE",m.Na="NA",m.RareGermline="RARE_GERMLINE",m.Somatic="SOMATIC",m.Unknown="UNKNOWN",m}(Fe||{}),nt=function(m){return m.Name="NAME",m.Soid="SOID",m.VariantCount="VARIANT_COUNT",m}(nt||{}),Lt=function(m){return m.DiseaseName="diseaseName",m.FeatureName="featureName",m.TherapyName="therapyName",m.VariantName="variantName",m}(Lt||{});const an=n.Ps`
    fragment ActivityCard on ActivityInterface {
  id
  verbiage
}
    `,tn=n.Ps`
    fragment activityFeedNode on ActivityInterface {
  id
  verbiage
  createdAt
  organization {
    id
    name
    profileImagePath(size: 32)
  }
  user {
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
    ... on Revision {
      revisionSetId
    }
    ... on Variant {
      deprecated
      feature {
        id
        name
        link
      }
    }
    ... on MolecularProfile {
      deprecated
    }
    __typename
  }
  ... on FlagEntityActivity {
    flag {
      id
      name
      link
    }
  }
}
    `,ot=n.Ps`
    fragment activityFeed on ActivityInterfaceConnection {
  pageInfo {
    startCursor
    endCursor
    hasNextPage
    hasPreviousPage
  }
  edges {
    cursor
    node {
      ...activityFeedNode
    }
  }
}
    ${tn}`,it=n.Ps`
    fragment MolecularProfileParsedName on MolecularProfileSegment {
  __typename
  ... on MolecularProfileTextSegment {
    text
  }
  ... on Feature {
    id
    name
    link
  }
  ... on Variant {
    id
    name
    link
    deprecated
  }
}
    `,Ve=n.Ps`
    fragment assertionPopover on Assertion {
  id
  name
  status
  summary
  assertionType
  assertionDirection
  significance
  variantOrigin
  ampLevel
  acmgCodes {
    code
    description
  }
  clingenCodes {
    code
    description
  }
  nccnGuideline {
    id
    name
  }
  regulatoryApproval
  regulatoryApprovalLastUpdated
  fdaCompanionTest
  fdaCompanionTestLastUpdated
  therapies {
    id
    name
    link
  }
  therapyInteractionType
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
  molecularProfile {
    id
    name
    link
    parsedName {
      ...MolecularProfileParsedName
    }
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
    ${it}`,yt=n.Ps`
    fragment AssertionBrowseFields on Assertion {
  id
  name
  link
  molecularProfile {
    id
    name
    link
    parsedName {
      ...MolecularProfileParsedName
    }
  }
  disease {
    id
    name
    link
  }
  therapies {
    id
    name
    link
  }
  therapyInteractionType
  summary
  assertionType
  assertionDirection
  significance
  ampLevel
  evidenceItemsCount
  status
  flagged
}
    ${it}`,Tt=n.Ps`
    fragment clinicalTrialPopover on BrowseClinicalTrial {
  id
  name
  nctId
  url
  sourceCount
  evidenceCount
}
    `,Vt=n.Ps`
    fragment BrowseClinicalTrialsRowFields on BrowseClinicalTrial {
  id
  name
  nctId
  evidenceCount
  sourceCount
  link
}
    `,Fn=n.Ps`
    fragment parsedCommentFragment on CommentBodySegment {
  __typename
  ... on CommentTagSegment {
    entityId
    displayName
    tagType
    status
    deprecated
    link
    revisionSetId
    feature {
      id
      name
      link
    }
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
    `,Ie=n.Ps`
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
    ...parsedCommentFragment
  }
}
    ${Fn}`,pe=n.Ps`
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
  }
  commentable {
    id
    name
    link
    ... on Variant {
      deprecated
      feature {
        id
        name
        link
      }
    }
    __typename
  }
}
    `,D=n.Ps`
    fragment BrowseDiseaseRowFields on BrowseDisease {
  id
  name
  doid
  diseaseUrl
  features {
    id
    name
    link
  }
  assertionCount
  evidenceItemCount
  variantCount
  featureCount
  link
}
    `,P=n.Ps`
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
    ... on Revision {
      revisionSetId
    }
    ... on Variant {
      deprecated
      feature {
        id
        link
        name
      }
    }
    ... on Feature {
      deprecated
      id
      link
      name
    }
    ... on MolecularProfile {
      deprecated
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
      revisionSetId
    }
    ... on Comment {
      id
    }
    ... on Flag {
      id
    }
  }
}
    `,me=n.Ps`
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
    ${P}`,ht=n.Ps`
    fragment evidencePopover on EvidenceItem {
  id
  name
  status
  description
  evidenceLevel
  evidenceType
  evidenceDirection
  significance
  variantOrigin
  therapies {
    id
    name
    link
  }
  therapyInteractionType
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
  molecularProfile {
    id
    name
    link
    deprecated
    parsedName {
      ...MolecularProfileParsedName
    }
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
    ${it}`,et=n.Ps`
    fragment EvidenceGridFields on EvidenceItem {
  id
  name
  link
  disease {
    id
    name
    link
  }
  therapies {
    id
    name
    link
  }
  molecularProfile {
    id
    name
    link
    parsedName {
      ...MolecularProfileParsedName
    }
  }
  status
  flagged
  therapyInteractionType
  description
  evidenceType
  evidenceDirection
  evidenceLevel
  evidenceRating
  significance
  variantOrigin
}
    ${it}`,Be=n.Ps`
    fragment featurePopover on Feature {
  id
  name
  featureInstance {
    __typename
  }
  featureAliases
  variants {
    totalCount
  }
  flags(state: OPEN) {
    totalCount
  }
}
    `,Xe=n.Ps`
    fragment BrowseFeaturesFields on BrowseFeature {
  id
  name
  link
  flagged
  featureAliases
  diseases {
    name
    id
    link
  }
  therapies {
    name
    id
    link
  }
  variantCount
  evidenceItemCount
  assertionCount
  molecularProfileCount
  featureInstanceType
}
    `,Ft=n.Ps`
    fragment flag on Flag {
  id
  state
  flaggable {
    id
    name
    link
  }
  openActivity {
    id
    createdAt
    parsedNote {
      ...parsedCommentFragment
    }
    user {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
  resolutionActivity {
    id
    createdAt
    parsedNote {
      ...parsedCommentFragment
    }
    user {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
}
    ${Fn}`,wt=n.Ps`
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
    ${Ft}`,Ne=n.Ps`
    fragment flagPopover on Flag {
  id
  name
  state
  flaggingUser {
    id
    displayName
    role
  }
  flaggable {
    id
    link
    name
    ... on Variant {
      deprecated
      feature {
        id
        name
        link
      }
    }
  }
  createdAt
  openActivity {
    parsedNote {
      ...parsedCommentFragment
    }
  }
}
    ${Fn}`,Ke=n.Ps`
    fragment QuicksearchResult on SearchResult {
  id
  resultType
  name
  matchingText
}
    `,oe=n.Ps`
    fragment molecularProfilePopoverFields on MolecularProfile {
  id
  name
  parsedName {
    __typename
    ... on MolecularProfileTextSegment {
      text
    }
    ... on Feature {
      id
      name
      link
    }
    ... on Variant {
      id
      name
      deprecated
      link
    }
  }
  molecularProfileAliases
  evidenceItems {
    totalCount
  }
  assertions {
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
    `,He=n.Ps`
    fragment BrowseMolecularProfilesFields on BrowseMolecularProfile {
  id
  name
  evidenceItemCount
  molecularProfileScore
  assertionCount
  variantCount
  aliases {
    name
  }
  variants {
    id
    name
    link
    matchText
    feature {
      id
      link
      name
    }
  }
  therapies {
    id
    name
    link
  }
  diseases {
    id
    name
    link
  }
  link
}
    `,Qe=n.Ps`
    fragment menuMolecularProfile on MolecularProfile {
  id
  name
  link
  flagged
}
    `,jt=n.Ps`
    fragment LeaderboardOrganizationFields on LeaderboardOrganization {
  id
  name
  actionCount
  rank
  profileImagePath(size: 64)
}
    `,ke=n.Ps`
    fragment orgPopover on Organization {
  id
  profileImagePath(size: 64)
  name
  description
  url
}
    `,vt=n.Ps`
    fragment OrganizationBrowseTableRowFields on Organization {
  id
  name
  description
  url
  memberCount
  eventCount
  subGroups {
    name
    id
  }
  mostRecentActivityTimestamp
}
    `,Wt=n.Ps`
    fragment PhenotypeBrowseTableRowFields on BrowsePhenotype {
  id
  name
  hpoId
  url
  assertionCount
  evidenceCount
  link
}
    `,En=n.Ps`
    fragment validationError on FieldValidationError {
  fieldName
  error
}
    `,Qt=n.Ps`
    fragment revisionPopover on Revision {
  id
  name
  link
  status
  creationActivity {
    user {
      id
      displayName
      role
    }
    parsedNote {
      ...parsedCommentFragment
    }
  }
  subject {
    id
    link
    name
    ... on Variant {
      deprecated
      feature {
        id
        name
        link
      }
    }
  }
  createdAt
  linkoutData {
    name
  }
}
    ${Fn}`,ct=n.Ps`
    fragment revision on Revision {
  id
  revisionSetId
  createdAt
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
          deleted
          deprecated
          feature {
            link
            id
            name
          }
        }
        addedObjects {
          id
          displayName
          displayType
          entityType
          link
          deleted
          deprecated
          feature {
            link
            id
            name
          }
        }
        removedObjects {
          id
          displayName
          displayType
          entityType
          link
          deleted
          deprecated
          feature {
            link
            id
            name
          }
        }
        keptObjects {
          id
          displayName
          displayType
          entityType
          link
          deleted
          deprecated
          feature {
            link
            id
            name
          }
        }
        suggestedObjects {
          id
          displayName
          displayType
          entityType
          link
          deleted
          deprecated
          feature {
            link
            id
            name
          }
        }
      }
      ... on ScalarFieldDiff {
        left
        right
      }
    }
  }
  creationActivity {
    createdAt
    user {
      id
      displayName
      role
    }
    parsedNote {
      ...parsedCommentFragment
    }
  }
  resolutionActivity {
    createdAt
    user {
      id
      displayName
      role
    }
    parsedNote {
      ...parsedCommentFragment
    }
  }
  status
}
    ${Fn}`,We=n.Ps`
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
    `,Ce=n.Ps`
    fragment subscriptionId on Subscription {
  id
  __typename
}
    `,he=n.Ps`
    fragment TimepointCount on TimePointCounts {
  allTime
  newThisMonth
  newThisWeek
  newThisYear
}
    `,ut=n.Ps`
    fragment BrowseSourceSuggestionRowFields on SourceSuggestion {
  id
  molecularProfile {
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
    link
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
  creationActivity {
    parsedNote {
      ...parsedCommentFragment
    }
  }
  lastStatusUpdateActivity {
    parsedNote {
      ...parsedCommentFragment
    }
  }
  status
  reason
  createdAt
}
    ${Fn}`,st=n.Ps`
    fragment sourcePopover on SourcePopover {
  id
  title
  fullJournalTitle
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
    `,Nt=n.Ps`
    fragment BrowseSourceRowFields on BrowseSource {
  id
  authors
  citationId
  evidenceItemCount
  sourceSuggestionCount
  journal
  name
  publicationYear
  sourceType
  citation
  displayType
  link
  openAccess
}
    `,An=n.Ps`
    fragment TherapyBrowseTableRowFields on BrowseTherapy {
  id
  name
  ncitId
  therapyUrl
  assertionCount
  evidenceCount
  link
}
    `,xn=n.Ps`
    fragment LeaderboardUserFields on LeaderboardUser {
  id
  name
  displayName
  actionCount
  role
  rank
  profileImagePath(size: 64)
}
    `,to=n.Ps`
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
    `,Zn=n.Ps`
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
  profileImagePath(size: 64)
  mostRecentActivityTimestamp
}
    `,qo=n.Ps`
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
        deprecated
        feature {
          id
          name
          link
        }
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
    `,gi=n.Ps`
    fragment BrowseVariantGroupRowFields on BrowseVariantGroup {
  id
  name
  link
  featureNames
  variantNames
  variantCount
  evidenceItemCount
}
    `,It=n.Ps`
    fragment variantTypePopover on VariantTypePopover {
  id
  name
  url
  soid
  variantCount
}
    `,xt=n.Ps`
    fragment VariantTypeBrowseTableRowFields on BrowseVariantType {
  id
  name
  soid
  url
  variantCount
  link
}
    `,St=n.Ps`
    fragment CoordinatesCardFields on Variant {
  id
  name
  referenceBuild
  ensemblVersion
  primaryCoordinates {
    representativeTranscript
    chromosome
    start
    stop
  }
  secondaryCoordinates {
    representativeTranscript
    chromosome
    start
    stop
  }
  referenceBases
  variantBases
}
    `,bn=n.Ps`
    fragment variantPopoverFields on Variant {
  id
  name
  variantAliases
  alleleRegistryId
  feature {
    id
    name
    link
  }
  molecularProfiles {
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
    `,On=n.Ps`
    fragment menuVariantType on BrowseVariantType {
  id
  name
  link
}
    `,yn=n.Ps`
    fragment menuVariant on Variant {
  id
  name
  link
  flagged
}
    `,Rn=n.Ps`
    fragment BrowseVariantsFields on BrowseVariant {
  id
  name
  link
  featureId
  featureName
  featureLink
  diseases {
    id
    name
    link
  }
  therapies {
    id
    name
    link
  }
  aliases {
    name
  }
  variantTypes {
    id
    name
    link
  }
}
    `,mo=n.Ps`
    fragment RevisableAssertionFields on Assertion {
  id
  summary
  description
  molecularProfile {
    id
    name
    link
  }
  variantOrigin
  significance
  disease {
    id
    doid
    name
    displayName
    link
  }
  therapies {
    id
    ncitId
    name
    link
  }
  therapyInteractionType
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
    name
    code
    description
    tooltip
  }
  clingenCodes {
    id
    code
    description
    name
    tooltip
    exclusive
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
    `,no=n.Ps`
    fragment MolecularProfileSelectTypeaheadFields on MolecularProfile {
  id
  name
  link
  molecularProfileAliases
}
    `,qn=n.Ps`
    fragment DiseaseSelectTypeaheadFields on Disease {
  id
  name
  link
  displayName
  doid
  diseaseAliases
}
    `,Po=n.Ps`
    fragment TherapySelectTypeaheadFields on Therapy {
  id
  name
  link
  ncitId
  therapyAliases
}
    `,Jn=n.Ps`
    fragment PhenotypeSelectTypeaheadFields on Phenotype {
  id
  name
  link
  hpoId
}
    `,uo=n.Ps`
    fragment SourceSelectTypeaheadFields on Source {
  id
  name
  link
  citation
  citationId
  sourceType
}
    `,fi=n.Ps`
    fragment RevisableEvidenceFields on EvidenceItem {
  id
  molecularProfile {
    ...MolecularProfileSelectTypeaheadFields
  }
  variantOrigin
  description
  significance
  disease {
    ...DiseaseSelectTypeaheadFields
  }
  therapies {
    ...TherapySelectTypeaheadFields
  }
  therapyInteractionType
  evidenceDirection
  evidenceLevel
  evidenceType
  phenotypes {
    ...PhenotypeSelectTypeaheadFields
  }
  evidenceRating
  source {
    ...SourceSelectTypeaheadFields
  }
}
    ${no}
${qn}
${Po}
${Jn}
${uo}`,Xn=n.Ps`
    fragment SubmittableEvidenceFields on EvidenceItem {
  id
  description
  variantOrigin
  evidenceType
  significance
  evidenceLevel
  evidenceDirection
  evidenceRating
  therapyInteractionType
  source {
    id
    citation
    sourceType
  }
  phenotypes {
    id
    name
  }
  therapies {
    id
    name
  }
  disease {
    id
    name
  }
}
    `,Io=n.Ps`
    fragment RevisableFactorFields on Feature {
  id
  name
  fullName
  description
  sources {
    id
    sourceType
    citation
    citationId
  }
  featureAliases
  featureInstance {
    ... on Factor {
      ncitId
    }
  }
}
    `,ln=n.Ps`
    fragment RevisableGeneFields on Feature {
  id
  description
  sources {
    id
    sourceType
    citation
    citationId
  }
}
    `,ko=n.Ps`
    fragment RevisableMolecularProfileFields on MolecularProfile {
  id
  description
  sources {
    id
    sourceType
    citation
    citationId
  }
  molecularProfileAliases
  isComplex
}
    `,No=n.Ps`
    fragment CoordinateFields on Coordinate {
  chromosome
  representativeTranscript
  start
  stop
}
    `,Go=n.Ps`
    fragment RevisableVariantFields on Variant {
  id
  name
  feature {
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
  primaryCoordinates {
    ...CoordinateFields
  }
  secondaryCoordinates {
    ...CoordinateFields
  }
  referenceBases
  variantBases
}
    ${No}`,Ci=n.Ps`
    fragment VariantGroupRevisableFields on VariantGroup {
  id
  name
  description
  variants {
    totalCount
    edges {
      cursor
      node {
        id
        name
        link
      }
    }
    nodes {
      id
      name
      link
    }
  }
  sources {
    id
    name
    link
  }
}
    `,ci=n.Ps`
    fragment SubmittableVariantGroupFields on VariantGroup {
  id
  name
  description
  variants(first: 50) {
    nodes {
      id
      name
      link
      singleVariantMolecularProfile {
        id
        name
        link
      }
    }
  }
  sources {
    id
    link
    citation
    sourceType
  }
}
    `,wi=n.Ps`
    fragment AdvancedSearchPermalink on AdvancedSearchResult {
  permalinkId
}
    `,Ji=n.Ps`
    fragment AcmgCodeSelectTypeaheadFields on AcmgCode {
  id
  code
  name
  description
  tooltip
}
    `,er=n.Ps`
    fragment ClingenCodeSelectTypeaheadFields on ClingenCode {
  id
  code
  name
  description
  tooltip
  exclusive
}
    `,ur=n.Ps`
    fragment QuickAddDiseaseFields on AddDiseasePayload {
  new
  disease {
    ...DiseaseSelectTypeaheadFields
  }
}
    ${qn}`,li=n.Ps`
    fragment EvidenceManagerFields on EvidenceItem {
  id
  name
  link
  disease {
    id
    name
    link
  }
  therapies {
    id
    name
    link
  }
  molecularProfile {
    id
    name
    link
    parsedName {
      ...MolecularProfileParsedName
    }
  }
  status
  flagged
  therapyInteractionType
  description
  evidenceType
  evidenceDirection
  evidenceLevel
  evidenceRating
  significance
  variantOrigin
}
    ${it}`,Ho=n.Ps`
    fragment EvidenceSelectTypeaheadFields on EvidenceItem {
  id
  name
  link
  evidenceType
  evidenceDirection
  evidenceLevel
  evidenceRating
  significance
  variantOrigin
  status
}
    `,Bi=n.Ps`
    fragment GeneSummaryFields on Gene {
  id
  description
  featureAliases
  entrezId
  name
  sources {
    id
    citation
    link
    sourceUrl
    displayType
    sourceType
  }
  myGeneInfoDetails
}
    `,zi=n.Ps`
    fragment NcitDetails on NcitDetails {
  synonyms {
    name
    source
  }
  definitions {
    definition
    source
  }
}
    `,Zr=n.Ps`
    fragment FactorSummaryFields on Factor {
  id
  name
  description
  featureAliases
  ncitId
  deprecated
  sources {
    id
    citation
    link
    sourceUrl
    displayType
    sourceType
  }
  ncitDetails {
    ...NcitDetails
  }
  creationActivity {
    user {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
    createdAt
  }
  deprecationActivity {
    user {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
    createdAt
  }
}
    ${zi}`,Vo=n.Ps`
    fragment FeatureSummaryFields on Feature {
  id
  name
  fullName
  link
  featureInstance {
    __typename
    ... on Gene {
      ...GeneSummaryFields
    }
    ... on Factor {
      ...FactorSummaryFields
    }
  }
}
    ${Bi}
${Zr}`,Hn=n.Ps`
    fragment QuickAddFeatureFields on CreateFeaturePayload {
  clientMutationId
  new
  feature {
    ...FeatureSummaryFields
  }
}
    ${Vo}`,lo=n.Ps`
    fragment FeatureSelectTypeaheadFields on Feature {
  id
  name
  featureAliases
  link
  featureInstance {
    __typename
    ... on Gene {
      entrezId
    }
    ... on Factor {
      ncitId
    }
  }
}
    `,Gi=n.Ps`
    fragment PreviewMpName2 on MolecularProfileSegment {
  __typename
  ... on MolecularProfileTextSegment {
    text
  }
  ... on Feature {
    id
    name
    link
  }
  ... on Variant {
    id
    name
    link
  }
}
    `,Ai=n.Ps`
    fragment NccnGuidelineSelectTypeaheadFields on NccnGuideline {
  id
  name
}
    `,_r=n.Ps`
    fragment QuickAddTherapyFields on AddTherapyPayload {
  new
  therapy {
    ...TherapySelectTypeaheadFields
  }
}
    ${Po}`,Le=(n.Ps`
    fragment VariantManagerFields on BrowseVariant {
  id
  name
  link
  featureId
  featureName
  featureLink
  diseases {
    id
    name
    link
  }
  therapies {
    id
    name
    link
  }
  aliases {
    name
  }
}
    `,n.Ps`
    fragment VariantSelectTypeaheadFields on Variant {
  id
  name
  link
  variantAliases
  singleVariantMolecularProfileId
  singleVariantMolecularProfile {
    id
    name
    link
    molecularProfileAliases
  }
}
    `),X=n.Ps`
    fragment QuickAddVariantFields on CreateVariantPayload {
  clientMutationId
  new
  variant {
    ...VariantSelectTypeaheadFields
  }
}
    ${Le}`,Se=n.Ps`
    fragment VariantTypeSelectTypeaheadFields on VariantType {
  id
  name
  link
  soid
}
    `,je=n.Ps`
    fragment assertionSubmissionActivity on Assertion {
  submissionActivity {
    createdAt
    parsedNote {
      ...parsedCommentFragment
    }
    user {
      id
      displayName
      profileImagePath(size: 32)
    }
  }
}
    ${Fn}`,Ct=n.Ps`
    fragment AssertionDetailFields on Assertion {
  id
  name
  status
  submissionEvent {
    originatingUser {
      id
    }
  }
  molecularProfile {
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
  ...assertionSubmissionActivity
}
    ${je}`,Yt=n.Ps`
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
  molecularProfile {
    id
    name
    link
    parsedName {
      ...MolecularProfileParsedName
    }
  }
  assertionType
  assertionDirection
  significance
  therapies {
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
  therapyInteractionType
  ampLevel
  acmgCodes {
    code
    description
  }
  clingenCodes {
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
  ...assertionSubmissionActivity
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
    ${it}
${je}`,en=n.Ps`
    fragment MyDiseaseInfoFields on MyDiseaseInfo {
  diseaseOntologyExactSynonyms
  diseaseOntologyRelatedSynonyms
  mesh
  icdo
  icd10
  ncit
  omim
  doDef
  doDefCitations
  mondoDef
}
    `,dn=n.Ps`
    fragment DiseasesSummaryFields on Disease {
  id
  name
  doid
  diseaseUrl
  displayName
  diseaseAliases
  link
  myDiseaseInfo {
    ...MyDiseaseInfoFields
  }
}
    ${en}`,nn=n.Ps`
    fragment evidenceSubmissionActivity on EvidenceItem {
  submissionActivity {
    createdAt
    parsedNote {
      ...parsedCommentFragment
    }
    user {
      id
      displayName
      profileImagePath(size: 32)
    }
  }
}
    ${Fn}`,Mn=n.Ps`
    fragment EvidenceDetailFields on EvidenceItem {
  id
  name
  status
  submissionEvent {
    originatingUser {
      id
    }
  }
  molecularProfile {
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
  ...evidenceSubmissionActivity
}
    ${nn}`,Yn=n.Ps`
    fragment EvidenceSummaryFields on EvidenceItem {
  id
  name
  description
  status
  evidenceLevel
  evidenceType
  evidenceDirection
  significance
  variantOrigin
  therapies {
    id
    name
    link
  }
  therapyInteractionType
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
      link
    }
  }
  evidenceRating
  molecularProfile {
    id
    name
    link
    parsedName {
      ...MolecularProfileParsedName
    }
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
  submissionActivity {
    createdAt
    parsedNote {
      ...parsedCommentFragment
    }
    user {
      displayName
      profileImagePath(size: 32)
      id
      role
    }
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
    ${it}
${Fn}`,Pn=n.Ps`
    fragment FeatureDetailFields on Feature {
  id
  name
  fullName
  deprecated
  deprecationReason
  deprecationActivity {
    parsedNote {
      ...parsedCommentFragment
    }
  }
  featureInstance {
    __typename
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
    ${Fn}`,sn=n.Ps`
    fragment MolecularProfileDetailFields on MolecularProfile {
  id
  name
  deprecated
  deprecationReason
  complexMolecularProfileDeprecationActivity {
    parsedNote {
      ...parsedCommentFragment
    }
  }
  deprecatedVariants {
    deprecationReason
    deprecationActivity {
      parsedNote {
        ...parsedCommentFragment
      }
    }
    id
    deprecated
    name
    link
    feature {
      id
      name
      link
    }
  }
  molecularProfileAliases
  flags(state: OPEN) {
    totalCount
  }
  revisions(status: NEW) {
    totalCount
  }
  comments {
    totalCount
  }
  variants {
    id
  }
}
    ${Fn}`,$n=n.Ps`
    fragment VariantMolecularProfileCardFields on Variant {
  id
  name
  link
  feature {
    id
    name
    link
  }
  molecularProfiles(first: 3) {
    totalCount
    nodes {
      id
      link
      name
      deprecated
    }
  }
  variantAliases
  clinvarIds
  alleleRegistryId
  openCravatUrl
  variantTypes {
    id
    link
    soid
    name
  }
  referenceBuild
  ensemblVersion
  primaryCoordinates {
    representativeTranscript
    chromosome
    start
    stop
  }
  secondaryCoordinates {
    representativeTranscript
    chromosome
    start
    stop
  }
  referenceBases
  variantBases
  hgvsDescriptions
}
    `,io=n.Ps`
    fragment MolecularProfileSummaryFields on MolecularProfile {
  id
  name
  description
  molecularProfileAliases
  molecularProfileScore
  sources {
    id
    citation
    link
    sourceType
  }
  variants {
    ...VariantMolecularProfileCardFields
  }
  parsedName {
    ...MolecularProfileParsedName
  }
  complexMolecularProfileCreationActivity {
    createdAt
    user {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
  variantDeprecationActivity {
    createdAt
    user {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
  complexMolecularProfileDeprecationActivity {
    createdAt
    user {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
}
    ${$n}
${it}`,oo=n.Ps`
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
  ranks {
    commentsRank {
      rank
      actionCount
    }
    moderationRank {
      rank
      actionCount
    }
    revisionsRank {
      rank
      actionCount
    }
    submissionsRank {
      rank
      actionCount
    }
  }
}
    `,eo=n.Ps`
    fragment OrganizationGroupsFields on Organization {
  id
  name
  url
  description
  profileImagePath(size: 128)
  subGroups {
    id
    name
    url
  }
  ranks {
    commentsRank {
      rank
      actionCount
    }
    moderationRank {
      rank
      actionCount
    }
    revisionsRank {
      rank
      actionCount
    }
    submissionsRank {
      rank
      actionCount
    }
  }
}
    `,co=n.Ps`
    fragment OrganizationMembersFields on User {
  id
  name
  displayName
  username
  profileImagePath(size: 64)
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
    url
  }
}
    `,Lo=n.Ps`
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
  molecularProfileTsv {
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
    `,vo=n.Ps`
    fragment SourceDetailFields on Source {
  id
  citation
  sourceUrl
  displayType
  fullyCurated
  citationId
  comments {
    totalCount
  }
}
    `,So=n.Ps`
    fragment SourceSummaryFields on Source {
  id
  citation
  displayType
  sourceUrl
  title
  abstract
  publicationDate
  citationId
  fullJournalTitle
  pmcId
  authorString
  ascoAbstractId
  clinicalTrials {
    nctId
    id
    link
  }
}
    `,Fo=n.Ps`
    fragment MyChemInfoFields on MyChemInfo {
  chebiId
  chebiDefinition
  fdaEpcCodes {
    code
    description
  }
  fdaMoaCodes {
    code
    description
  }
  firstApproval
  chemblMoleculeType
  chemblId
  pubchemCid
  pharmgkbId
  rxnorm
  inchikey
  drugbankId
  indications
}
    `,Wo=n.Ps`
    fragment TherapiesSummaryFields on Therapy {
  id
  name
  ncitId
  therapyUrl
  therapyAliases
  link
  myChemInfo {
    ...MyChemInfoFields
  }
}
    ${Fo}`,Bo=n.Ps`
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
    url
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
  ranks {
    commentsRank {
      rank
      actionCount
    }
    moderationRank {
      rank
      actionCount
    }
    revisionsRank {
      rank
      actionCount
    }
    submissionsRank {
      rank
      actionCount
    }
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
    `,Do=n.Ps`
    fragment notificationOrganization on Organization {
  id
  name
}
    `,vi=n.Ps`
    fragment notificationOriginatingUsers on User {
  id
  displayName
}
    `,Yo=n.Ps`
    fragment notificationFeedSubjects on EventSubjectWithCount {
  subject {
    id
    __typename
    name
  }
  occuranceCount
}
    `,Fi=n.Ps`
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
    ${P}`,tr=n.Ps`
    fragment subscribable on Subscribable {
  id
  entityType
  __typename
}
    `,Mi=n.Ps`
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
    `,Wi=n.Ps`
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
}
    `,Ki=n.Ps`
    fragment VariantDetailFields on Variant {
  id
  name
  deprecated
  deprecationReason
  deprecationActivity {
    parsedNote {
      ...parsedCommentFragment
    }
  }
  feature {
    id
    name
    link
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
    ${Fn}`,dr=n.Ps`
    fragment MyVariantInfoFields on MyVariantInfo {
  myVariantInfoId
  caddConsequence
  caddDetail
  caddScore
  caddPhred
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
    `,Ei=n.Ps`
    fragment VariantSummaryFields on Variant {
  id
  name
  feature {
    __typename
    id
    name
    link
  }
  variantAliases
  alleleRegistryId
  openCravatUrl
  maneSelectTranscript
  variantTypes {
    id
    link
    soid
    name
  }
  hgvsDescriptions
  clinvarIds
  referenceBuild
  ensemblVersion
  primaryCoordinates {
    representativeTranscript
    chromosome
    start
    stop
  }
  secondaryCoordinates {
    representativeTranscript
    chromosome
    start
    stop
  }
  referenceBases
  variantBases
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
  creationActivity {
    user {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
    createdAt
  }
  deprecationActivity {
    user {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
    createdAt
  }
}
    ${dr}`;n.Ps`
    query ActivityCard($activityId: Int!) {
  activity(id: $activityId) {
    ...ActivityCard
  }
}
    ${an}`,n.Ps`
    query ActivityFeed($first: Int, $last: Int, $before: String, $after: String, $userId: Int) {
  activities(
    first: $first
    last: $last
    before: $before
    after: $after
    userId: $userId
  ) {
    ...activityFeed
  }
}
    ${ot}`;const ui=n.Ps`
    query AssertionPopover($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...assertionPopover
  }
}
    ${Ve}`;let kr=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=ui}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Pi=n.Ps`
    query AssertionsBrowse($first: Int, $last: Int, $before: String, $after: String, $diseaseName: String, $therapyName: String, $id: Int, $summary: String, $assertionDirection: EvidenceDirection, $significance: EvidenceSignificance, $assertionType: EvidenceType, $variantId: Int, $molecularProfileId: Int, $evidenceId: Int, $molecularProfileName: String, $sortBy: AssertionSort, $ampLevel: AmpLevel, $organizationId: Int, $userId: Int, $phenotypeId: Int, $diseaseId: Int, $therapyId: Int, $status: EvidenceStatusFilter) {
  assertions(
    first: $first
    last: $last
    before: $before
    after: $after
    diseaseName: $diseaseName
    therapyName: $therapyName
    id: $id
    summary: $summary
    assertionDirection: $assertionDirection
    significance: $significance
    assertionType: $assertionType
    variantId: $variantId
    molecularProfileId: $molecularProfileId
    sortBy: $sortBy
    ampLevel: $ampLevel
    molecularProfileName: $molecularProfileName
    evidenceId: $evidenceId
    organizationId: $organizationId
    userId: $userId
    phenotypeId: $phenotypeId
    therapyId: $therapyId
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
        ...AssertionBrowseFields
      }
    }
  }
}
    ${yt}`;let Pe=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Pi}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Mt=n.Ps`
    query ClinicalTrialPopover($clinicalTrialId: Int!) {
  clinicalTrials(id: $clinicalTrialId) {
    edges {
      node {
        ...clinicalTrialPopover
      }
    }
  }
}
    ${Tt}`;let W=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Mt}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const De=n.Ps`
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
        ...BrowseClinicalTrialsRowFields
      }
    }
  }
}
    ${Vt}`;let Rt=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=De}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Xt=n.Ps`
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
    ${Ie}`;let Wn=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Xt}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Co=n.Ps`
    query CommentPopover($commentId: Int!) {
  comment(id: $commentId) {
    ...commentPopover
  }
}
    ${pe}`;let zo=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Co}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Xo=n.Ps`
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
    molecularProfileCount
    link
  }
}
    `;let Zo=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Xo}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const so=n.Ps`
    query BrowseDiseases($first: Int, $last: Int, $before: String, $after: String, $sortBy: DiseasesSort, $name: String, $doid: String, $featureName: String) {
  browseDiseases(
    first: $first
    last: $last
    before: $before
    after: $after
    sortBy: $sortBy
    name: $name
    doid: $doid
    featureName: $featureName
  ) {
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
    lastUpdated
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
    ${D}`;let Vn=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=so}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const fo=n.Ps`
    query EventFeedCount($subject: SubscribableQueryInput, $first: Int, $last: Int, $before: String, $after: String, $originatingUserId: Int, $organizationId: Int, $eventType: EventAction, $includeAutomatedEvents: Boolean, $mode: EventFeedMode) {
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
    includeAutomatedEvents: $includeAutomatedEvents
  ) {
    unfilteredCount
  }
}
    `;let _e=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=fo}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const de=n.Ps`
    query EventFeed($subject: SubscribableQueryInput, $first: Int, $last: Int, $before: String, $after: String, $originatingUserId: Int, $organizationId: Int, $eventType: EventAction, $mode: EventFeedMode, $includeAutomatedEvents: Boolean = true, $showFilters: Boolean!) {
  events(
    subject: $subject
    first: $first
    last: $last
    before: $before
    after: $after
    originatingUserId: $originatingUserId
    organizationId: $organizationId
    eventType: $eventType
    includeAutomatedEvents: $includeAutomatedEvents
    mode: $mode
  ) {
    ...eventFeed
  }
}
    ${me}`;let ce=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=de}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const rt=n.Ps`
    query EvidencePopover($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...evidencePopover
  }
}
    ${ht}`;let gn=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=rt}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Un=n.Ps`
    query EvidenceBrowse($first: Int, $last: Int, $before: String, $after: String, $diseaseName: String, $therapyName: String, $id: Int, $description: String, $evidenceLevel: EvidenceLevel, $evidenceDirection: EvidenceDirection, $significance: EvidenceSignificance, $evidenceType: EvidenceType, $rating: Int, $variantOrigin: VariantOrigin, $variantId: Int, $molecularProfileId: Int, $assertionId: Int, $organizationId: Int, $userId: Int, $sortBy: EvidenceSort, $phenotypeId: Int, $diseaseId: Int, $therapyId: Int, $sourceId: Int, $clinicalTrialId: Int, $molecularProfileName: String, $status: EvidenceStatusFilter) {
  evidenceItems(
    first: $first
    last: $last
    before: $before
    after: $after
    diseaseName: $diseaseName
    therapyName: $therapyName
    id: $id
    description: $description
    evidenceLevel: $evidenceLevel
    evidenceDirection: $evidenceDirection
    significance: $significance
    evidenceType: $evidenceType
    evidenceRating: $rating
    variantOrigin: $variantOrigin
    variantId: $variantId
    molecularProfileId: $molecularProfileId
    assertionId: $assertionId
    organizationId: $organizationId
    userId: $userId
    phenotypeId: $phenotypeId
    diseaseId: $diseaseId
    therapyId: $therapyId
    sourceId: $sourceId
    clinicalTrialId: $clinicalTrialId
    molecularProfileName: $molecularProfileName
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
    ${et}`;let $o=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Un}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Ii=n.Ps`
    query FeaturePopover($featureId: Int!) {
  feature(id: $featureId) {
    ...featurePopover
  }
}
    ${Be}`;let Oo=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Ii}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const as=n.Ps`
    query BrowseFeatures($featureName: String, $therapyName: String, $featureAlias: String, $diseaseName: String, $featureType: FeatureInstanceTypes, $sortBy: FeaturesSort, $first: Int, $last: Int, $before: String, $after: String) {
  browseFeatures(
    featureName: $featureName
    therapyName: $therapyName
    featureAlias: $featureAlias
    diseaseName: $diseaseName
    featureType: $featureType
    sortBy: $sortBy
    first: $first
    last: $last
    before: $before
    after: $after
  ) {
    edges {
      cursor
      node {
        ...BrowseFeaturesFields
      }
    }
    pageInfo {
      startCursor
      endCursor
      hasPreviousPage
      hasNextPage
    }
    lastUpdated
    totalCount
    filteredCount
    pageCount
  }
}
    ${Xe}`;let Ya=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=as}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const cs=n.Ps`
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
    ${wt}`;let bi=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=cs}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Ms=n.Ps`
    query FlagPopover($flagId: Int!) {
  flag(id: $flagId) {
    ...flagPopover
  }
}
    ${Ne}`;let Kr=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Ms}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const yr=n.Ps`
    query Quicksearch($query: String!, $types: [SearchableEntities!], $highlightMatches: Boolean) {
  search(query: $query, types: $types, highlightMatches: $highlightMatches) {
    ...QuicksearchResult
  }
}
    ${Ke}`;let Rr=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=yr}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const ar=n.Ps`
    query MolecularProfilePopover($molecularProfileId: Int!) {
  molecularProfile(id: $molecularProfileId) {
    ...molecularProfilePopoverFields
  }
}
    ${oe}`;let Hi=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=ar}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const bs=n.Ps`
    query BrowseMolecularProfiles($molecularProfileName: String, $variantName: String, $variantId: Int, $featureName: String, $diseaseName: String, $therapyName: String, $molecularProfileAlias: String, $sortBy: MolecularProfilesSort, $first: Int, $last: Int, $before: String, $after: String) {
  browseMolecularProfiles(
    molecularProfileName: $molecularProfileName
    variantName: $variantName
    variantId: $variantId
    featureName: $featureName
    diseaseName: $diseaseName
    therapyName: $therapyName
    molecularProfileAlias: $molecularProfileAlias
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
        ...BrowseMolecularProfilesFields
      }
    }
    lastUpdated
    filteredCount
    pageCount
  }
}
    ${He}`;let Vr=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=bs}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const To=n.Ps`
    query MolecularProfileMenu($geneId: Int, $featureId: Int, $mpName: String, $first: Int, $last: Int, $before: String, $after: String, $evidenceStatusFilter: MolecularProfileDisplayFilter) {
  molecularProfiles(
    geneId: $geneId
    featureId: $featureId
    name: $mpName
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
        ...menuMolecularProfile
      }
    }
  }
}
    ${Qe}`;let Es=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=To}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Br=n.Ps`
    query OrganizationCommentsLeaderboard($window: TimeWindow, $first: Int, $last: Int, $before: String, $after: String) {
  organizationLeaderboards {
    commentsLeaderboard(
      first: $first
      last: $last
      before: $before
      after: $after
      window: $window
    ) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          ...LeaderboardOrganizationFields
        }
      }
      nodes {
        ...LeaderboardOrganizationFields
      }
    }
  }
}
    ${jt}`;let nr=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Br}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Cr=n.Ps`
    query OrganizationRevisionsLeaderboard($window: TimeWindow, $first: Int, $last: Int, $before: String, $after: String) {
  organizationLeaderboards {
    revisionsLeaderboard(
      first: $first
      last: $last
      before: $before
      after: $after
      window: $window
    ) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          ...LeaderboardOrganizationFields
        }
      }
      nodes {
        ...LeaderboardOrganizationFields
      }
    }
  }
}
    ${jt}`;let ls=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Cr}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const ai=n.Ps`
    query OrganizationModerationLeaderboard($window: TimeWindow, $first: Int, $last: Int, $before: String, $after: String) {
  organizationLeaderboards {
    moderationLeaderboard(
      first: $first
      last: $last
      before: $before
      after: $after
      window: $window
    ) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          ...LeaderboardOrganizationFields
        }
      }
      nodes {
        ...LeaderboardOrganizationFields
      }
    }
  }
}
    ${jt}`;let zr=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=ai}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const $i=n.Ps`
    query OrganizationSubmissionsLeaderboard($window: TimeWindow, $first: Int, $last: Int, $before: String, $after: String) {
  organizationLeaderboards {
    submissionsLeaderboard(
      first: $first
      last: $last
      before: $before
      after: $after
      window: $window
    ) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          ...LeaderboardOrganizationFields
        }
      }
      nodes {
        ...LeaderboardOrganizationFields
      }
    }
  }
}
    ${jt}`;let or=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=$i}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const vs=n.Ps`
    query OrgPopover($orgId: Int!) {
  organization(id: $orgId) {
    ...orgPopover
  }
}
    ${ke}`;let Dr=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=vs}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const ks=n.Ps`
    query OrganizationsBrowse($first: Int, $last: Int, $before: String, $after: String, $id: Int, $orgName: String, $sortBy: OrganizationSort) {
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
    ${vt}`;let Tr=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=ks}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Hr=n.Ps`
    query PhenotypePopover($phenotypeId: Int!) {
  phenotypePopover(id: $phenotypeId) {
    id
    name
    url
    hpoId
    assertionCount
    evidenceItemCount
    molecularProfileCount
    link
  }
}
    `;let Or=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Hr}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const pr=n.Ps`
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
    ${Wt}`;let $r=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=pr}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Mr=n.Ps`
    mutation AcceptRevision($input: AcceptRevisionsInput!) {
  acceptRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;let _a=(()=>{class m extends n.mm{constructor(ie){super(ie),this.document=Mr}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Rs=n.Ps`
    mutation RejectRevision($input: RejectRevisionsInput!) {
  rejectRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;let ya=(()=>{class m extends n.mm{constructor(ie){super(ie),this.document=Rs}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Ca=n.Ps`
    query ValidateRevisionsForAcceptance($ids: [Int!]!) {
  validateRevisionsForAcceptance(revisionIds: $ids) {
    genericErrors
    validationErrors {
      ...validationError
    }
  }
}
    ${En}`;let ll=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Ca}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const ja=n.Ps`
    query RevisionPopover($revisionId: Int!) {
  revision(id: $revisionId) {
    ...revisionPopover
  }
}
    ${Qt}`;let vu=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=ja}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const yc=n.Ps`
    query Revisions($subject: ModeratedInput, $first: Int, $last: Int, $before: String, $after: String, $fieldName: String, $originatingUserId: Int, $resolvingUserId: Int, $revisionSetId: Int, $status: RevisionStatus) {
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
    revisionSetId: $revisionSetId
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
    ${ct}`;let ul=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=yc}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const br=n.Ps`
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
    ${We}`;let Ss=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=br}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Qa=n.Ps`
    query SubscriptionForEntity($subscribable: SubscribableInput!) {
  subscriptionForEntity(subscribable: $subscribable) {
    ...subscriptionId
  }
}
    ${Ce}`;let R=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Qa}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Ae=n.Ps`
    mutation ModerateEvidenceItem($input: ModerateEvidenceItemInput!) {
  moderateEvidenceItem(input: $input) {
    evidenceItem {
      id
    }
  }
}
    `;let ue=(()=>{class m extends n.mm{constructor(ie){super(ie),this.document=Ae}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Ze=n.Ps`
    mutation ModerateAssertion($input: ModerateAssertionInput!) {
  moderateAssertion(input: $input) {
    assertion {
      id
    }
  }
}
    `;let Dt=(()=>{class m extends n.mm{constructor(ie){super(ie),this.document=Ze}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const zn=n.Ps`
    query CivicStats {
  timepointStats {
    assertions {
      ...TimepointCount
    }
    diseases {
      ...TimepointCount
    }
    therapies {
      ...TimepointCount
    }
    evidenceItems {
      ...TimepointCount
    }
    features {
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
    comments {
      ...TimepointCount
    }
    molecularProfiles {
      ...TimepointCount
    }
  }
}
    ${he}`;let Ln=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=zn}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const po=n.Ps`
    query BrowseSourceSuggestions($first: Int, $last: Int, $before: String, $after: String, $sortBy: SourceSuggestionsSort, $sourceType: SourceSource, $citationId: Int, $sourceId: Int, $molecularProfileName: String, $diseaseName: String, $comment: String, $submitter: String, $citation: String, $submitterId: Int, $status: SourceSuggestionStatus) {
  sourceSuggestions(
    first: $first
    last: $last
    before: $before
    after: $after
    sortBy: $sortBy
    sourceType: $sourceType
    citationId: $citationId
    sourceId: $sourceId
    molecularProfileName: $molecularProfileName
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
    ${ut}`;let ei=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=po}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();n.Ps`
    mutation UpdateSourceSuggestionStatus($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;const xo=n.Ps`
    query SourcePopover($sourceId: Int!) {
  sourcePopover(id: $sourceId) {
    ...sourcePopover
  }
}
    ${st}`;let si=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=xo}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const ni=n.Ps`
    query BrowseSources($first: Int, $last: Int, $before: String, $after: String, $sortBy: SourcesSort, $name: String, $year: Int, $sourceType: SourceSource, $citationId: Int, $author: String, $journal: String, $clinicalTrialId: Int, $openAccess: Boolean) {
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
    openAccess: $openAccess
  ) {
    pageInfo {
      endCursor
      hasNextPage
      startCursor
      hasPreviousPage
    }
    totalCount
    filteredCount
    lastUpdated
    pageCount
    edges {
      cursor
      node {
        ...BrowseSourceRowFields
      }
    }
  }
}
    ${Nt}`;let di=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=ni}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Ur=n.Ps`
    query TherapyPopover($therapyId: Int!) {
  therapyPopover(id: $therapyId) {
    id
    name
    therapyUrl
    ncitId
    therapyAliases
    assertionCount
    evidenceItemCount
    molecularProfileCount
    link
  }
}
    `;let hr=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Ur}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Yr=n.Ps`
    query TherapiesBrowse($first: Int, $last: Int, $before: String, $after: String, $name: String, $ncitId: String, $sortBy: TherapySort) {
  therapies(
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
        ...TherapyBrowseTableRowFields
      }
    }
  }
}
    ${An}`;let wr=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Yr}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Yi=n.Ps`
    query UserCommentsLeaderboard($window: TimeWindow, $first: Int, $last: Int, $before: String, $after: String) {
  userLeaderboards {
    commentsLeaderboard(
      first: $first
      last: $last
      before: $before
      after: $after
      window: $window
    ) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          ...LeaderboardUserFields
        }
      }
      nodes {
        ...LeaderboardUserFields
      }
    }
  }
}
    ${xn}`;let jr=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Yi}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Er=n.Ps`
    query UserRevisionsLeaderboard($window: TimeWindow, $first: Int, $last: Int, $before: String, $after: String) {
  userLeaderboards {
    revisionsLeaderboard(
      first: $first
      last: $last
      before: $before
      after: $after
      window: $window
    ) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          ...LeaderboardUserFields
        }
      }
      nodes {
        ...LeaderboardUserFields
      }
    }
  }
}
    ${xn}`;let xs=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Er}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const dl=n.Ps`
    query UserModerationLeaderboard($window: TimeWindow, $first: Int, $last: Int, $before: String, $after: String) {
  userLeaderboards {
    moderationLeaderboard(
      first: $first
      last: $last
      before: $before
      after: $after
      window: $window
    ) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          ...LeaderboardUserFields
        }
      }
      nodes {
        ...LeaderboardUserFields
      }
    }
  }
}
    ${xn}`;let Vs=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=dl}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const _i=n.Ps`
    query UserSubmissionsLeaderboard($window: TimeWindow, $first: Int, $last: Int, $before: String, $after: String) {
  userLeaderboards {
    submissionsLeaderboard(
      first: $first
      last: $last
      before: $before
      after: $after
      window: $window
    ) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          ...LeaderboardUserFields
        }
      }
      nodes {
        ...LeaderboardUserFields
      }
    }
  }
}
    ${xn}`;let ir=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=_i}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const _s=n.Ps`
    query UserPopover($userId: Int!) {
  user(id: $userId) {
    ...popoverUser
  }
}
    ${to}`;let qi=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=_s}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const za=n.Ps`
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
    ${Zn}`;let Bs=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=za}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Hs=n.Ps`
    query VariantGroupPopover($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...variantGroupPopoverFields
  }
}
    ${qo}`;let fr=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Hs}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Cc=n.Ps`
    query BrowseVariantGroups($first: Int, $last: Int, $before: String, $after: String, $sortBy: VariantGroupsSort, $name: String, $featureNames: String, $variantNames: String) {
  browseVariantGroups(
    first: $first
    last: $last
    before: $before
    after: $after
    sortBy: $sortBy
    name: $name
    featureNames: $featureNames
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
    lastUpdated
    edges {
      cursor
      node {
        ...BrowseVariantGroupRowFields
      }
    }
  }
}
    ${gi}`;let zc=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Cc}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Ta=n.Ps`
    query VariantTypePopover($variantTypeId: Int!) {
  variantTypePopover(id: $variantTypeId) {
    ...variantTypePopover
  }
}
    ${It}`;let mr=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Ta}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const ta=n.Ps`
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
    ${xt}`;let _u=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=ta}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Ma=n.Ps`
    query CoordinatesCard($variantId: Int!) {
  variant(id: $variantId) {
    ...CoordinatesCardFields
  }
}
    ${St}`;let Pr=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Ma}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const na=n.Ps`
    query VariantPopover($variantId: Int!) {
  variant(id: $variantId) {
    ...variantPopoverFields
  }
}
    ${bn}`;let rr=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=na}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const us=n.Ps`
    query VariantsMenu($featureId: Int, $variantName: String, $variantTypeIds: [Int!], $hasNoVariantType: Boolean, $first: Int, $last: Int, $before: String, $after: String, $sortBy: VariantMenuSort) {
  variants(
    featureId: $featureId
    name: $variantName
    variantTypeIds: $variantTypeIds
    hasNoVariantType: $hasNoVariantType
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
    ${yn}`;let pi=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=us}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const qr=n.Ps`
    query VariantTypesForFeature($featureId: Int) {
  variantTypes(featureId: $featureId, first: 50) {
    edges {
      node {
        ...menuVariantType
      }
    }
  }
}
    ${On}`;let Mo=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=qr}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const ba=n.Ps`
    query BrowseVariants($variantName: String, $featureName: String, $diseaseName: String, $therapyName: String, $variantAlias: String, $variantTypeId: Int, $variantGroupId: Int, $variantTypeName: String, $hasNoVariantType: Boolean, $sortBy: VariantsSort, $first: Int, $last: Int, $before: String, $after: String) {
  browseVariants(
    variantName: $variantName
    featureName: $featureName
    diseaseName: $diseaseName
    therapyName: $therapyName
    variantAlias: $variantAlias
    variantTypeId: $variantTypeId
    variantGroupId: $variantGroupId
    variantTypeName: $variantTypeName
    hasNoVariantType: $hasNoVariantType
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
        ...BrowseVariantsFields
      }
    }
    totalCount
    filteredCount
    pageCount
    lastUpdated
  }
}
    ${Rn}`;let Xr=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=ba}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Tc=n.Ps`
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
    `;let Od=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Tc}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Mc=n.Ps`
    query ViewerNotificationCount {
  notifications {
    unreadCount
  }
}
    `;let pl=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Mc}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Ea=n.Ps`
    mutation AddComment($input: AddCommentInput!) {
  addComment(input: $input) {
    clientMutationId
    comment {
      ...commentListNode
    }
  }
}
    ${Ie}`;let yu=(()=>{class m extends n.mm{constructor(ie){super(ie),this.document=Ea}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Cu=n.Ps`
    query previewComment($commentText: String!) {
  previewCommentText(commentText: $commentText) {
    ...parsedCommentFragment
  }
}
    ${Fn}`;let Sa=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Cu}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Ga=n.Ps`
    query userTypeahead($queryTerm: String!) {
  userTypeahead(queryTerm: $queryTerm) {
    username
  }
}
    `;let zu=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Ga}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const wn=n.Ps`
    query entityTypeahead($queryTerm: String!) {
  entityTypeahead(queryTerm: $queryTerm) {
    entityId
    tagType
    displayName
  }
}
    `;let oi=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=wn}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const xa=n.Ps`
    mutation DeprecateComplexMolecularProfile($molecularProfileId: Int!, $deprecationReason: MolecularProfileDeprecationReasonMutationInput!, $comment: String!, $organizationId: Int) {
  deprecateComplexMolecularProfile(
    input: {molecularProfileId: $molecularProfileId, deprecationReason: $deprecationReason, comment: $comment, organizationId: $organizationId}
  ) {
    molecularProfile {
      id
      name
    }
  }
}
    `;let Wa=(()=>{class m extends n.mm{constructor(ie){super(ie),this.document=xa}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Qo=n.Ps`
    query EvidenceCountsForMolecularProfile($molecularProfileId: Int!) {
  molecularProfile(id: $molecularProfileId) {
    id
    name
    link
    evidenceCountsByStatus {
      submittedCount
      acceptedCount
    }
  }
}
    `;let oa=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Qo}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();n.Ps`
    query LinkableGene($geneId: Int!) {
  gene(id: $geneId) {
    id
    name
    link
  }
}
    `,n.Ps`
    query LinkableVariant($variantId: Int!) {
  variant(id: $variantId) {
    id
    name
    link
  }
}
    `,n.Ps`
    query LinkableTherapy($therapyId: Int!) {
  therapy(id: $therapyId) {
    id
    name
    link
  }
}
    `;const hl=n.Ps`
    query LinkableFeature($featureId: Int!) {
  feature(id: $featureId) {
    id
    name
    link
  }
}
    `;let Xi=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=hl}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const ys=n.Ps`
    mutation FlagEntity($input: FlagEntityInput!) {
  flagEntity(input: $input) {
    flag {
      id
    }
  }
}
    `;let Ec=(()=>{class m extends n.mm{constructor(ie){super(ie),this.document=ys}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const A=n.Ps`
    mutation ResolveFlag($input: ResolveFlagInput!) {
  resolveFlag(input: $input) {
    flag {
      id
    }
  }
}
    `;let Z=(()=>{class m extends n.mm{constructor(ie){super(ie),this.document=A}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const F=n.Ps`
    mutation UpdateSourceSuggestion($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;let le=(()=>{class m extends n.mm{constructor(ie){super(ie),this.document=F}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const we=n.Ps`
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
    `;let tt=(()=>{class m extends n.mm{constructor(ie){super(ie),this.document=we}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Pt=n.Ps`
    mutation UpdateUserProfile($input: EditUserInput!) {
  editUser(input: $input) {
    user {
      id
    }
  }
}
    `;let fn=(()=>{class m extends n.mm{constructor(ie){super(ie),this.document=Pt}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const un=n.Ps`
    query Countries {
  countries {
    id
    name
  }
}
    `;let ro=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=un}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Ro=n.Ps`
    mutation DeprecateVariant($variantId: Int!, $deprecationReason: VariantDeprecationReason!, $comment: String!, $organizationId: Int) {
  deprecateVariant(
    input: {variantId: $variantId, deprecationReason: $deprecationReason, comment: $comment, organizationId: $organizationId}
  ) {
    newlyDeprecatedMolecularProfiles {
      id
    }
    variant {
      id
      name
    }
  }
}
    `;let jo=(()=>{class m extends n.mm{constructor(ie){super(ie),this.document=Ro}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Si=n.Ps`
    query MolecularProfilesForVariant($variantId: Int!) {
  molecularProfiles(variantId: $variantId, first: 50) {
    nodes {
      id
      name
      link
      evidenceCountsByStatus {
        submittedCount
        acceptedCount
      }
    }
  }
}
    `;let $s=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Si}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Ds=n.Ps`
    query AssertionRevisableFields($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...RevisableAssertionFields
  }
}
    ${mo}`;let Os=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Ds}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Ja=n.Ps`
    mutation SuggestAssertionRevision($input: SuggestAssertionRevisionInput!) {
  suggestAssertionRevision(input: $input) {
    clientMutationId
    assertion {
      id
    }
    results {
      newlyCreated
    }
  }
}
    `;let Cs=(()=>{class m extends n.mm{constructor(ie){super(ie),this.document=Ja}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const ra=n.Ps`
    mutation SubmitAssertion($input: SubmitAssertionInput!) {
  submitAssertion(input: $input) {
    clientMutationId
    assertion {
      id
    }
  }
}
    `;let cr=(()=>{class m extends n.mm{constructor(ie){super(ie),this.document=ra}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Us=n.Ps`
    query EvidenceItemRevisableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...RevisableEvidenceFields
  }
}
    ${fi}`;let xi=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Us}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const fl=n.Ps`
    mutation SuggestEvidenceItemRevision($input: SuggestEvidenceItemRevisionInput!) {
  suggestEvidenceItemRevision(input: $input) {
    clientMutationId
    evidenceItem {
      id
    }
    results {
      newlyCreated
    }
  }
}
    `;let Da=(()=>{class m extends n.mm{constructor(ie){super(ie),this.document=fl}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();n.Ps`
    query EvidenceFieldsFromSourceSuggestion($sourceId: Int, $molecularProfileId: Int, $diseaseId: Int) {
  sourceSuggestionValues(
    molecularProfileId: $molecularProfileId
    diseaseId: $diseaseId
    sourceId: $sourceId
  ) {
    molecularProfile {
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
      sourceType
      citationId
      citation
      link
    }
  }
}
    `,n.Ps`
    query EvidenceSubmittableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...SubmittableEvidenceFields
  }
}
    ${Xn}`;const Ka=n.Ps`
    mutation SubmitEvidenceItem($input: SubmitEvidenceItemInput!) {
  submitEvidence(input: $input) {
    clientMutationId
    evidenceItem {
      id
    }
  }
}
    `;let zs=(()=>{class m extends n.mm{constructor(ie){super(ie),this.document=Ka}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Tu=n.Ps`
    query ExistingEvidenceCount($molecularProfileId: Int!, $sourceId: Int!) {
  evidenceItems(molecularProfileId: $molecularProfileId, sourceId: $sourceId) {
    totalCount
  }
}
    `;let Sc=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Tu}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const ml=n.Ps`
    query FullyCuratedSource($sourceId: Int!) {
  source(id: $sourceId) {
    fullyCurated
  }
}
    `;let gl=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=ml}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Mu=n.Ps`
    query FactorRevisableFields($featureId: Int!) {
  feature(id: $featureId) {
    ...RevisableFactorFields
  }
}
    ${Io}`;let bu=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Mu}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Eu=n.Ps`
    mutation SuggestFactorRevision($input: SuggestFactorRevisionInput!) {
  suggestFactorRevision(input: $input) {
    clientMutationId
    results {
      newlyCreated
      id
      fieldName
    }
  }
}
    `;let xc=(()=>{class m extends n.mm{constructor(ie){super(ie),this.document=Eu}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const sa=n.Ps`
    query GeneRevisableFields($featureId: Int!) {
  feature(id: $featureId) {
    ...RevisableGeneFields
  }
}
    ${ln}`;let Oa=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=sa}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Su=n.Ps`
    mutation SuggestGeneRevision($input: SuggestGeneRevisionInput!) {
  suggestGeneRevision(input: $input) {
    clientMutationId
    results {
      newlyCreated
      id
      fieldName
    }
  }
}
    `;let Dc=(()=>{class m extends n.mm{constructor(ie){super(ie),this.document=Su}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const xu=n.Ps`
    query MolecularProfileRevisableFields($molecularProfileId: Int!) {
  molecularProfile(id: $molecularProfileId) {
    ...RevisableMolecularProfileFields
  }
}
    ${ko}`;let vl=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=xu}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Du=n.Ps`
    mutation SuggestMolecularProfileRevision($input: SuggestMolecularProfileRevisionInput!) {
  suggestMolecularProfileRevision(input: $input) {
    clientMutationId
    molecularProfile {
      id
    }
    results {
      newlyCreated
      id
      fieldName
    }
  }
}
    `;let Id=(()=>{class m extends n.mm{constructor(ie){super(ie),this.document=Du}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Ad=n.Ps`
    mutation SubmitSource($input: SuggestSourceInput!) {
  suggestSource(input: $input) {
    clientMutationId
    sourceSuggestion {
      id
    }
  }
}
    `;let Oc=(()=>{class m extends n.mm{constructor(ie){super(ie),this.document=Ad}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const wa=n.Ps`
    query SourceSuggestionChecks($sourceId: Int!) {
  source(id: $sourceId) {
    fullyCurated
  }
  sourceSuggestions(sourceId: $sourceId) {
    filteredCount
  }
}
    `;let Ou=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=wa}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Pa=n.Ps`
    query VariantRevisableFields($variantId: Int!) {
  variant(id: $variantId) {
    ...RevisableVariantFields
  }
}
    ${Go}`;let wc=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Pa}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const qa=n.Ps`
    mutation SuggestVariantRevision($input: SuggestVariantRevisionInput!) {
  suggestVariantRevision(input: $input) {
    clientMutationId
    variant {
      id
    }
    results {
      id
      fieldName
      newlyCreated
    }
  }
}
    `;let Fd=(()=>{class m extends n.mm{constructor(ie){super(ie),this.document=qa}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const _l=n.Ps`
    query VariantGroupRevisableFields($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupRevisableFields
  }
}
    ${Ci}`;let wu=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=_l}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Pu=n.Ps`
    mutation SuggestVariantGroupRevision($input: SuggestVariantGroupRevisionInput!) {
  suggestVariantGroupRevision(input: $input) {
    clientMutationId
    variantGroup {
      id
    }
    results {
      newlyCreated
      id
      fieldName
    }
  }
}
    `;let ds=(()=>{class m extends n.mm{constructor(ie){super(ie),this.document=Pu}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();n.Ps`
    query VariantGroupSubmittableFields($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...SubmittableVariantGroupFields
  }
}
    ${ci}`;const Ic=n.Ps`
    mutation SubmitVariantGroup($input: SubmitVariantGroupInput!) {
  submitVariantGroup(input: $input) {
    clientMutationId
    variantGroup {
      id
    }
  }
}
    `;let yl=(()=>{class m extends n.mm{constructor(ie){super(ie),this.document=Ic}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();n.Ps`
    query GeneAdvancedSearch($query: GeneSearchFilter!) {
  searchGenes(query: $query, createPermalink: true) {
    ...AdvancedSearchPermalink
  }
}
    ${wi}`;const Iu=n.Ps`
    query EntityTagsTest($molecularProfileId: Int!, $geneId: Int!, $variantId: Int!, $therapyId: Int!, $diseaseId: Int!, $eid: Int!) {
  evidenceItem(id: $eid) {
    id
    name
    link
  }
  molecularProfile(id: $molecularProfileId) {
    id
    name
    link
  }
  gene(id: $geneId) {
    id
    name
    link
  }
  variant(id: $variantId) {
    id
    name
    link
  }
  therapy(id: $therapyId) {
    id
    name
    link
  }
  disease(id: $diseaseId) {
    id
    name
    link
  }
}
    `;let zl=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Iu}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Tl=n.Ps`
    query AcmgCodeSelectTypeahead($code: String!) {
  acmgCodesTypeahead(queryTerm: $code) {
    ...AcmgCodeSelectTypeaheadFields
  }
}
    ${Ji}`;let Ml=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Tl}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const bl=n.Ps`
    query AcmgCodeSelectTag($id: Int!) {
  acmgCode(id: $id) {
    ...AcmgCodeSelectTypeaheadFields
  }
}
    ${Ji}`;let El=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=bl}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Xa=n.Ps`
    query ClingenCodeSelectTypeahead($code: String!) {
  clingenCodesTypeahead(queryTerm: $code) {
    ...ClingenCodeSelectTypeaheadFields
  }
}
    ${er}`;let Ys=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Xa}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Au=n.Ps`
    query ClingenCodeSelectTag($id: Int!) {
  clingenCode(id: $id) {
    ...ClingenCodeSelectTypeaheadFields
  }
}
    ${er}`;let Sl=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Au}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const xl=n.Ps`
    mutation QuickAddDisease($name: String!, $doid: String) {
  addDisease(input: {name: $name, doid: $doid}) {
    ...QuickAddDiseaseFields
  }
}
    ${ur}`;let aa=(()=>{class m extends n.mm{constructor(ie){super(ie),this.document=xl}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const js=n.Ps`
    query DiseaseSelectTypeahead($name: String!) {
  diseaseTypeahead(queryTerm: $name) {
    ...DiseaseSelectTypeaheadFields
  }
}
    ${qn}`;let Zi=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=js}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Fu=n.Ps`
    query DiseaseSelectTag($id: Int!) {
  disease(id: $id) {
    ...DiseaseSelectTypeaheadFields
  }
}
    ${qn}`;let Dl=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Fu}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Ia=n.Ps`
    query EvidenceManager($first: Int, $last: Int, $before: String, $after: String, $diseaseName: String, $therapyName: String, $id: Int, $description: String, $evidenceLevel: EvidenceLevel, $evidenceDirection: EvidenceDirection, $significance: EvidenceSignificance, $evidenceType: EvidenceType, $rating: Int, $variantOrigin: VariantOrigin, $variantId: Int, $molecularProfileId: Int, $assertionId: Int, $organizationId: Int, $userId: Int, $sortBy: EvidenceSort, $phenotypeId: Int, $diseaseId: Int, $therapyId: Int, $sourceId: Int, $clinicalTrialId: Int, $molecularProfileName: String, $status: EvidenceStatusFilter) {
  evidenceItems(
    first: $first
    last: $last
    before: $before
    after: $after
    diseaseName: $diseaseName
    therapyName: $therapyName
    id: $id
    description: $description
    evidenceLevel: $evidenceLevel
    evidenceDirection: $evidenceDirection
    significance: $significance
    evidenceType: $evidenceType
    evidenceRating: $rating
    variantOrigin: $variantOrigin
    variantId: $variantId
    molecularProfileId: $molecularProfileId
    assertionId: $assertionId
    organizationId: $organizationId
    userId: $userId
    phenotypeId: $phenotypeId
    diseaseId: $diseaseId
    therapyId: $therapyId
    sourceId: $sourceId
    clinicalTrialId: $clinicalTrialId
    molecularProfileName: $molecularProfileName
    status: $status
    sortBy: $sortBy
  ) {
    totalCount
    pageCount
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        ...EvidenceManagerFields
      }
    }
    nodes {
      ...EvidenceManagerFields
    }
  }
}
    ${li}`;let Nu=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Ia}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Ol=n.Ps`
    query EvidenceSelectTypeahead($eid: Int!) {
  evidenceItems(id: $eid) {
    nodes {
      ...EvidenceSelectTypeaheadFields
    }
  }
}
    ${Ho}`;let Fc=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Ol}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const ca=n.Ps`
    query EvidenceSelectTag($eid: Int!) {
  evidenceItem(id: $eid) {
    ...EvidenceSelectTypeaheadFields
  }
}
    ${Ho}`;let la=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=ca}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const ua=n.Ps`
    mutation QuickAddFeature($name: String!, $organizationId: Int, $featureType: CreateableFeatureTypes!) {
  createFeature(
    input: {name: $name, organizationId: $organizationId, featureType: $featureType}
  ) {
    ...QuickAddFeatureFields
  }
}
    ${Hn}`;let wl=(()=>{class m extends n.mm{constructor(ie){super(ie),this.document=ua}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Nc=n.Ps`
    query FeatureSelectTypeahead($queryTerm: String!, $featureType: FeatureInstanceTypes) {
  featureTypeahead(queryTerm: $queryTerm, featureType: $featureType) {
    ...FeatureSelectTypeaheadFields
  }
}
    ${lo}`;let da=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Nc}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Lu=n.Ps`
    query FeatureSelectTag($featureId: Int!) {
  feature(id: $featureId) {
    ...FeatureSelectTypeaheadFields
  }
}
    ${lo}`;let Pl=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Lu}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Il=n.Ps`
    query MolecularProfileSelectTypeahead($name: String!, $geneId: Int) {
  molecularProfiles(name: $name, geneId: $geneId, first: 25) {
    nodes {
      ...MolecularProfileSelectTypeaheadFields
    }
  }
}
    ${no}`;let ku=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Il}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Ld=n.Ps`
    query MolecularProfileSelectTag($molecularProfileId: Int!) {
  molecularProfile(id: $molecularProfileId) {
    ...MolecularProfileSelectTypeaheadFields
  }
}
    ${no}`;let kd=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Ld}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Aa=n.Ps`
    query PreviewMolecularProfileName2($mpStructure: MolecularProfileComponentInput) {
  previewMolecularProfileName(structure: $mpStructure) {
    existingMolecularProfile {
      id
      name
      link
    }
    segments {
      ...PreviewMpName2
    }
    deprecatedVariants {
      id
      name
      link
    }
  }
}
    ${Gi}`;let Rd=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Aa}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const pa=n.Ps`
    query MpExpressionEditorPrepopulate($mpId: Int!) {
  molecularProfile(id: $mpId) {
    id
    parsedName {
      ...MolecularProfileParsedName
    }
    rawName
  }
}
    ${it}`;let Al=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=pa}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Ru=n.Ps`
    mutation CreateMolecularProfile2($mpStructure: MolecularProfileComponentInput!, $organizationId: Int) {
  createMolecularProfile(
    input: {structure: $mpStructure, organizationId: $organizationId}
  ) {
    molecularProfile {
      id
      name
      link
    }
  }
}
    `;let Ni=(()=>{class m extends n.mm{constructor(ie){super(ie),this.document=Ru}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Fl=n.Ps`
    query NccnGuidelineSelectTypeahead($name: String!) {
  nccnGuidelinesTypeahead(queryTerm: $name) {
    ...NccnGuidelineSelectTypeaheadFields
  }
}
    ${Ai}`;let Fa=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Fl}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Vu=n.Ps`
    query NccnGuidelineSelectTag($id: Int!) {
  nccnGuideline(id: $id) {
    ...NccnGuidelineSelectTypeaheadFields
  }
}
    ${Ai}`;let xr=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Vu}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const ha=n.Ps`
    query PhenotypeSelectTypeahead($name: String!) {
  phenotypeTypeahead(queryTerm: $name) {
    ...PhenotypeSelectTypeaheadFields
  }
}
    ${Jn}`;let Lc=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=ha}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const ec=n.Ps`
    query PhenotypeSelectTag($id: Int!) {
  phenotype(id: $id) {
    ...PhenotypeSelectTypeaheadFields
  }
}
    ${Jn}`;let tc=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=ec}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const kc=n.Ps`
    query QuickAddSourceCheckCitation($sourceType: SourceSource!, $citationId: String!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;let Vd=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=kc}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Rc=n.Ps`
    mutation QuickAddSourceRemoteCitation($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      id
      citationId
      sourceType
    }
  }
}
    `;let Bd=(()=>{class m extends n.mm{constructor(ie){super(ie),this.document=Rc}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Ir=n.Ps`
    query SourceSelectTypeahead($partialCitationId: String!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceSelectTypeaheadFields
  }
}
    ${uo}`;let Vc=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Ir}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const fa=n.Ps`
    query SourceSelectTag($id: Int!) {
  source(id: $id) {
    ...SourceSelectTypeaheadFields
  }
}
    ${uo}`;let Hd=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=fa}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Nl=n.Ps`
    mutation QuickAddTherapy($name: String!, $ncitId: String) {
  addTherapy(input: {name: $name, ncitId: $ncitId}) {
    ...QuickAddTherapyFields
  }
}
    ${_r}`;let Bu=(()=>{class m extends n.mm{constructor(ie){super(ie),this.document=Nl}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Hu=n.Ps`
    query TherapySelectTypeahead($name: String!) {
  therapyTypeahead(queryTerm: $name) {
    ...TherapySelectTypeaheadFields
  }
}
    ${Po}`;let $d=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Hu}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const $u=n.Ps`
    query TherapySelectTag($id: Int!) {
  therapy(id: $id) {
    ...TherapySelectTypeaheadFields
  }
}
    ${Po}`;let Uu=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=$u}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Yu=n.Ps`
    query VariantManager($variantName: String, $featureName: String, $diseaseName: String, $therapyName: String, $variantAlias: String, $variantTypeId: Int, $variantGroupId: Int, $sortBy: VariantsSort, $first: Int, $last: Int, $before: String, $after: String) {
  browseVariants(
    variantName: $variantName
    featureName: $featureName
    diseaseName: $diseaseName
    therapyName: $therapyName
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
        ...BrowseVariantsFields
      }
    }
    totalCount
    filteredCount
    pageCount
  }
}
    ${Rn}`;let Bc=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Yu}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const nc=n.Ps`
    mutation QuickAddVariant($name: String!, $featureId: Int!, $organizationId: Int) {
  createVariant(
    input: {name: $name, featureId: $featureId, organizationId: $organizationId}
  ) {
    ...QuickAddVariantFields
  }
}
    ${X}`;let Hc=(()=>{class m extends n.mm{constructor(ie){super(ie),this.document=nc}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const oc=n.Ps`
    query VariantSelectTypeahead($name: String!, $featureId: Int) {
  variants(name: $name, featureId: $featureId, first: 50) {
    totalCount
    edges {
      node {
        ...VariantSelectTypeaheadFields
      }
    }
    nodes {
      ...VariantSelectTypeaheadFields
    }
  }
}
    ${Le}`;let ju=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=oc}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const ic=n.Ps`
    query VariantSelectTag($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantSelectTypeaheadFields
  }
}
    ${Le}`;let Qu=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=ic}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Ll=n.Ps`
    query VariantTypeSelectTypeahead($name: String!) {
  variantTypeTypeahead(queryTerm: $name) {
    ...VariantTypeSelectTypeaheadFields
  }
}
    ${Se}`;let kl=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Ll}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const rc=n.Ps`
    query VariantTypeSelectTag($id: Int!) {
  variantType(id: $id) {
    ...VariantTypeSelectTypeaheadFields
  }
}
    ${Se}`;let Rl=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=rc}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Vl=n.Ps`
    query AssertionDetail($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionDetailFields
  }
}
    ${Ct}`;let lr=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Vl}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Qs=n.Ps`
    query AssertionSummary($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionSummaryFields
  }
}
    ${Yt}`;let Na=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Qs}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Gu=n.Ps`
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
    `;let Bl=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Gu}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Hl=n.Ps`
    query ClinicalTrialSummary($clinicalTrialId: Int!) {
  clinicalTrial(id: $clinicalTrialId) {
    id
    name
    nctId
    description
    url
    link
  }
}
    `;let Wu=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Hl}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Zu=n.Ps`
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
    `;let $l=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Zu}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Ul=n.Ps`
    query DiseasesSummary($diseaseId: Int!) {
  disease(id: $diseaseId) {
    ...DiseasesSummaryFields
  }
}
    ${dn}`;let Yl=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Ul}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const ws=n.Ps`
    query EvidenceDetail($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceDetailFields
  }
}
    ${Mn}`;let $c=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=ws}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const sc=n.Ps`
    query EvidenceSummary($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceSummaryFields
  }
}
    ${Yn}`;let ac=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=sc}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const La=n.Ps`
    query FeatureDetail($featureId: Int!) {
  feature(id: $featureId) {
    ...FeatureDetailFields
  }
}
    ${Pn}`;let Ju=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=La}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const jl=n.Ps`
    query FeaturesSummary($featureId: Int!) {
  feature(id: $featureId) {
    ...FeatureSummaryFields
  }
}
    ${Vo}`;let Ql=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=jl}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const cc=n.Ps`
    query MolecularProfileDetail($mpId: Int!) {
  molecularProfile(id: $mpId) {
    ...MolecularProfileDetailFields
  }
}
    ${sn}`;let Ud=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=cc}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Uc=n.Ps`
    query MolecularProfileSummary($mpId: Int!) {
  molecularProfile(id: $mpId) {
    ...MolecularProfileSummaryFields
  }
}
    ${io}`;let Ku=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Uc}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Yc=n.Ps`
    query OrganizationDetail($organizationId: Int!) {
  organization(id: $organizationId) {
    ...OrganizationDetailFields
  }
}
    ${oo}`;let Gl=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Yc}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Wl=n.Ps`
    query OrganizationGroups($organizationId: Int!) {
  organization(id: $organizationId) {
    subGroups {
      ...OrganizationGroupsFields
    }
  }
}
    ${eo}`;let ps=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Wl}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const w1=n.Ps`
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
    ${co}`;let qu=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=w1}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const jc=n.Ps`
    query PhenotypeDetail($phenotypeId: Int!) {
  phenotype(id: $phenotypeId) {
    id
    name
    description
    hpoId
    url
    link
  }
}
    `;let Yd=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=jc}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Zl=n.Ps`
    query DataReleases {
  dataReleases {
    ...Release
  }
}
    ${Lo}`;let Jl=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Zl}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const hs=n.Ps`
    query SourceDetail($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceDetailFields
  }
}
    ${vo}`;let ka=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=hs}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Kl=n.Ps`
    query SourceSummary($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceSummaryFields
  }
}
    ${So}`;let jd=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Kl}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Xu=n.Ps`
    query TherapyDetail($therapyId: Int!) {
  therapy(id: $therapyId) {
    id
    name
    ncitId
    therapyUrl
    therapyAliases
    link
  }
}
    `;let Ra=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Xu}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Va=n.Ps`
    query TherapiesSummary($therapyId: Int!) {
  therapy(id: $therapyId) {
    ...TherapiesSummaryFields
  }
}
    ${Wo}`;let Qd=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Va}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Gd=n.Ps`
    query UserDetail($userId: Int!) {
  user(id: $userId) {
    ...UserDetailFields
  }
}
    ${Bo}`;let ed=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Gd}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Qc=n.Ps`
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
    ${Yo}
${vi}
${Do}
${Fi}`;let Wd=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Qc}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Gc=n.Ps`
    mutation UpdateNotificationStatus($input: UpdateNotificationStatusInput!) {
  updateNotificationStatus(input: $input) {
    notifications {
      ...notificationNode
    }
  }
}
    ${Fi}`;let td=(()=>{class m extends n.mm{constructor(ie){super(ie),this.document=Gc}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Gs=n.Ps`
    mutation Unsubscribe($input: UnsubscribeInput!) {
  unsubscribe(input: $input) {
    unsubscribedEntities {
      ...subscribable
    }
  }
}
    ${tr}`;let nd=(()=>{class m extends n.mm{constructor(ie){super(ie),this.document=Gs}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const od=n.Ps`
    mutation Subscribe($input: SubscribeInput!) {
  subscribe(input: $input) {
    subscriptions {
      id
    }
  }
}
    `;let Zd=(()=>{class m extends n.mm{constructor(ie){super(ie),this.document=od}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const id=n.Ps`
    query VariantGroupDetail($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupDetailFields
  }
}
    ${Mi}`;let Jd=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=id}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Kd=n.Ps`
    query VariantGroupsSummary($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupSummaryFields
  }
}
    ${Wi}`;let P1=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=Kd}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const rd=n.Ps`
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
    `;let sd=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=rd}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const es=n.Ps`
    query VariantDetail($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantDetailFields
  }
}
    ${Ki}`;let ql=(()=>{class m extends n.AE{constructor(ie){super(ie),this.document=es}}return m.\u0275fac=function(ie){return new(ie||m)(r.LFG(n._M))},m.\u0275prov=r.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})();const Ws=n.Ps`
    query VariantSummary($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantSummaryFields
  }
}