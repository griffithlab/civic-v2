"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[179],{4265:(It,be,a)=>{a.d(be,{T6:()=>k,VD:()=>U,WE:()=>j,Yt:()=>w,lC:()=>v,py:()=>L,rW:()=>i,s:()=>I,ve:()=>s,vq:()=>$});var t=a(6337);function i(M,e,R){return{r:255*(0,t.sh)(M,255),g:255*(0,t.sh)(e,255),b:255*(0,t.sh)(R,255)}}function v(M,e,R){M=(0,t.sh)(M,255),e=(0,t.sh)(e,255),R=(0,t.sh)(R,255);var pe=Math.max(M,e,R),me=Math.min(M,e,R),Z=0,A=0,V=(pe+me)/2;if(pe===me)A=0,Z=0;else{var O=pe-me;switch(A=V>.5?O/(2-pe-me):O/(pe+me),pe){case M:Z=(e-R)/O+(e<R?6:0);break;case e:Z=(R-M)/O+2;break;case R:Z=(M-e)/O+4}Z/=6}return{h:Z,s:A,l:V}}function d(M,e,R){return R<0&&(R+=1),R>1&&(R-=1),R<1/6?M+6*R*(e-M):R<.5?e:R<2/3?M+(e-M)*(2/3-R)*6:M}function s(M,e,R){var pe,me,Z;if(M=(0,t.sh)(M,360),e=(0,t.sh)(e,100),R=(0,t.sh)(R,100),0===e)me=R,Z=R,pe=R;else{var A=R<.5?R*(1+e):R+e-R*e,V=2*R-A;pe=d(V,A,M+1/3),me=d(V,A,M),Z=d(V,A,M-1/3)}return{r:255*pe,g:255*me,b:255*Z}}function L(M,e,R){M=(0,t.sh)(M,255),e=(0,t.sh)(e,255),R=(0,t.sh)(R,255);var pe=Math.max(M,e,R),me=Math.min(M,e,R),Z=0,A=pe,V=pe-me,O=0===pe?0:V/pe;if(pe===me)Z=0;else{switch(pe){case M:Z=(e-R)/V+(e<R?6:0);break;case e:Z=(R-M)/V+2;break;case R:Z=(M-e)/V+4}Z/=6}return{h:Z,s:O,v:A}}function j(M,e,R){M=6*(0,t.sh)(M,360),e=(0,t.sh)(e,100),R=(0,t.sh)(R,100);var pe=Math.floor(M),me=M-pe,Z=R*(1-e),A=R*(1-me*e),V=R*(1-(1-me)*e),O=pe%6;return{r:255*[R,A,Z,Z,V,R][O],g:255*[V,R,R,A,Z,Z][O],b:255*[Z,Z,V,R,R,A][O]}}function $(M,e,R,pe){var me=[(0,t.FZ)(Math.round(M).toString(16)),(0,t.FZ)(Math.round(e).toString(16)),(0,t.FZ)(Math.round(R).toString(16))];return pe&&me[0].startsWith(me[0].charAt(1))&&me[1].startsWith(me[1].charAt(1))&&me[2].startsWith(me[2].charAt(1))?me[0].charAt(0)+me[1].charAt(0)+me[2].charAt(0):me.join("")}function I(M,e,R,pe,me){var Z=[(0,t.FZ)(Math.round(M).toString(16)),(0,t.FZ)(Math.round(e).toString(16)),(0,t.FZ)(Math.round(R).toString(16)),(0,t.FZ)(F(pe))];return me&&Z[0].startsWith(Z[0].charAt(1))&&Z[1].startsWith(Z[1].charAt(1))&&Z[2].startsWith(Z[2].charAt(1))&&Z[3].startsWith(Z[3].charAt(1))?Z[0].charAt(0)+Z[1].charAt(0)+Z[2].charAt(0)+Z[3].charAt(0):Z.join("")}function F(M){return Math.round(255*parseFloat(M)).toString(16)}function k(M){return U(M)/255}function U(M){return parseInt(M,16)}function w(M){return{r:M>>16,g:(65280&M)>>8,b:255&M}}},1309:(It,be,a)=>{a.d(be,{R:()=>t});var t={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"}},6379:(It,be,a)=>{a.d(be,{uA:()=>d});var t=a(4265),i=a(1309),v=a(6337);function d(U){var w={r:0,g:0,b:0},M=1,e=null,R=null,pe=null,me=!1,Z=!1;return"string"==typeof U&&(U=function F(U){if(0===(U=U.trim().toLowerCase()).length)return!1;var w=!1;if(i.R[U])U=i.R[U],w=!0;else if("transparent"===U)return{r:0,g:0,b:0,a:0,format:"name"};var M=S.rgb.exec(U);return M?{r:M[1],g:M[2],b:M[3]}:(M=S.rgba.exec(U))?{r:M[1],g:M[2],b:M[3],a:M[4]}:(M=S.hsl.exec(U))?{h:M[1],s:M[2],l:M[3]}:(M=S.hsla.exec(U))?{h:M[1],s:M[2],l:M[3],a:M[4]}:(M=S.hsv.exec(U))?{h:M[1],s:M[2],v:M[3]}:(M=S.hsva.exec(U))?{h:M[1],s:M[2],v:M[3],a:M[4]}:(M=S.hex8.exec(U))?{r:(0,t.VD)(M[1]),g:(0,t.VD)(M[2]),b:(0,t.VD)(M[3]),a:(0,t.T6)(M[4]),format:w?"name":"hex8"}:(M=S.hex6.exec(U))?{r:(0,t.VD)(M[1]),g:(0,t.VD)(M[2]),b:(0,t.VD)(M[3]),format:w?"name":"hex"}:(M=S.hex4.exec(U))?{r:(0,t.VD)(M[1]+M[1]),g:(0,t.VD)(M[2]+M[2]),b:(0,t.VD)(M[3]+M[3]),a:(0,t.T6)(M[4]+M[4]),format:w?"name":"hex8"}:!!(M=S.hex3.exec(U))&&{r:(0,t.VD)(M[1]+M[1]),g:(0,t.VD)(M[2]+M[2]),b:(0,t.VD)(M[3]+M[3]),format:w?"name":"hex"}}(U)),"object"==typeof U&&(k(U.r)&&k(U.g)&&k(U.b)?(w=(0,t.rW)(U.r,U.g,U.b),me=!0,Z="%"===String(U.r).substr(-1)?"prgb":"rgb"):k(U.h)&&k(U.s)&&k(U.v)?(e=(0,v.JX)(U.s),R=(0,v.JX)(U.v),w=(0,t.WE)(U.h,e,R),me=!0,Z="hsv"):k(U.h)&&k(U.s)&&k(U.l)&&(e=(0,v.JX)(U.s),pe=(0,v.JX)(U.l),w=(0,t.ve)(U.h,e,pe),me=!0,Z="hsl"),Object.prototype.hasOwnProperty.call(U,"a")&&(M=U.a)),M=(0,v.Yq)(M),{ok:me,format:U.format||Z,r:Math.min(255,Math.max(w.r,0)),g:Math.min(255,Math.max(w.g,0)),b:Math.min(255,Math.max(w.b,0)),a:M}}var j="(?:".concat("[-\\+]?\\d*\\.\\d+%?",")|(?:").concat("[-\\+]?\\d+%?",")"),$="[\\s|\\(]+(".concat(j,")[,|\\s]+(").concat(j,")[,|\\s]+(").concat(j,")\\s*\\)?"),I="[\\s|\\(]+(".concat(j,")[,|\\s]+(").concat(j,")[,|\\s]+(").concat(j,")[,|\\s]+(").concat(j,")\\s*\\)?"),S={CSS_UNIT:new RegExp(j),rgb:new RegExp("rgb"+$),rgba:new RegExp("rgba"+I),hsl:new RegExp("hsl"+$),hsla:new RegExp("hsla"+I),hsv:new RegExp("hsv"+$),hsva:new RegExp("hsva"+I),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function k(U){return!!S.CSS_UNIT.exec(String(U))}},6337:(It,be,a)=>{function t($,I){(function v($){return"string"==typeof $&&-1!==$.indexOf(".")&&1===parseFloat($)})($)&&($="100%");var S=function d($){return"string"==typeof $&&-1!==$.indexOf("%")}($);return $=360===I?$:Math.min(I,Math.max(0,parseFloat($))),S&&($=parseInt(String($*I),10)/100),Math.abs($-I)<1e-6?1:$=360===I?($<0?$%I+I:$%I)/parseFloat(String(I)):$%I/parseFloat(String(I))}function i($){return Math.min(1,Math.max(0,$))}function s($){return $=parseFloat($),(isNaN($)||$<0||$>1)&&($=1),$}function L($){return $<=1?"".concat(100*Number($),"%"):$}function j($){return 1===$.length?"0"+$:String($)}a.d(be,{FZ:()=>j,JX:()=>L,V2:()=>i,Yq:()=>s,sh:()=>t})},3369:(It,be,a)=>{a.d(be,{G:()=>Q});var t=a(5879),i=a(6814),v=a(4190),d=a(551),s=a(5695),L=a(7417),j=a(5676),$=a(7398),I=a(2181),S=a(313),F=a(2962),k=a(8125),U=a(3317),w=a(8091),M=a(2616);function e(fe,ue){if(1&fe&&(t._UZ(0,"i",9),t.ALo(1,"entityColor"),t._uU(2)),2&fe){const ge=t.oxw().ngIf;t.Q6J("nzTwotoneColor",t.lcZ(1,2,"ClinicalTrial")),t.xp6(2),t.hij(" ",ge.nctId," ")}}function R(fe,ue){if(1&fe&&(t.TgZ(0,"cvc-link-tag",10),t._uU(1," View on clinicaltrials.gov "),t.qZA()),2&fe){const ge=t.oxw().ngIf;t.Q6J("href",ge.url)}}function pe(fe,ue){if(1&fe&&(t.ynx(0),t.TgZ(1,"nz-card",2),t.YNc(2,e,3,4,"ng-template",null,3,t.W1O),t.YNc(4,R,2,1,"ng-template",null,4,t.W1O),t.TgZ(6,"nz-descriptions",5)(7,"nz-descriptions-item",6),t._uU(8),t.qZA(),t.TgZ(9,"nz-descriptions-item",7),t._uU(10),t.qZA(),t.TgZ(11,"nz-descriptions-item",8),t._uU(12),t.qZA()()(),t.BQk()),2&fe){const ge=ue.ngIf,Se=t.MAs(3),ke=t.MAs(5);t.xp6(1),t.Q6J("nzTitle",Se)("nzExtra",ke),t.xp6(5),t.Q6J("nzColumn",2),t.xp6(2),t.hij(" ",ge.name," "),t.xp6(2),t.hij(" ",ge.sourceCount," "),t.xp6(2),t.hij(" ",ge.evidenceCount," ")}}let me=(()=>{class fe{constructor(ge){this.gql=ge}ngOnInit(){if(null==this.clinicalTrialId)throw new Error("cvc-clinical-trial-popover requires valid clinicalTrialId input.");this.clinicalTrial$=this.gql.watch({clinicalTrialId:this.clinicalTrialId}).valueChanges.pipe((0,$.U)(({data:ge})=>ge?.clinicalTrials.edges[0]?.node),(0,I.h)(j.ep))}}return fe.\u0275fac=function(ge){return new(ge||fe)(t.Y36(S.UIR))},fe.\u0275cmp=t.Xpm({type:fe,selectors:[["cvc-clinical-trial-popover"]],inputs:{clinicalTrialId:"clinicalTrialId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["linkout",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Name","nzSpan","2"],["nzTitle","Sources","nzSpan","2"],["nzTitle","Evidence","nzSpan","2"],["nz-icon","","nzTheme","twotone","nzType","civic-clinicaltrial",3,"nzTwotoneColor"],[3,"href"]],template:function(ge,Se){1&ge&&(t.TgZ(0,"div",0),t.YNc(1,pe,13,6,"ng-container",1),t.ALo(2,"ngrxPush"),t.qZA()),2&ge&&(t.xp6(1),t.Q6J("ngIf",t.lcZ(2,1,Se.clinicalTrial$)))},dependencies:[i.O5,F.bd,d.Ls,k.R7,k.uj,U.l,w.fM,M.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),fe})();function Z(fe,ue){}function A(fe,ue){if(1&fe&&(t.ynx(0),t.TgZ(1,"a",4),t.YNc(2,Z,0,0,"ng-template",5),t.qZA(),t.BQk()),2&fe){const ge=t.oxw(),Se=t.MAs(2);t.xp6(1),t.Q6J("routerLink",ge.clinicalTrial.link),t.xp6(1),t.Q6J("ngTemplateOutlet",Se)}}function V(fe,ue){}function O(fe,ue){if(1&fe&&t._UZ(0,"cvc-clinical-trial-popover",8),2&fe){const ge=t.oxw(2);t.Q6J("clinicalTrialId",ge.clinicalTrial.id)}}function P(fe,ue){if(1&fe&&(t.TgZ(0,"nz-tag",6),t.YNc(1,V,0,0,"ng-template",5),t.qZA(),t.YNc(2,O,1,1,"ng-template",null,7,t.W1O)),2&fe){const ge=t.MAs(3),Se=t.oxw(),ke=t.MAs(6);t.Q6J("nzPopoverMouseEnterDelay",.5)("nzPopoverContent",ge)("nzPopoverTrigger",Se.enablePopover?"hover":null),t.xp6(1),t.Q6J("ngTemplateOutlet",ke)}}function D(fe,ue){}function re(fe,ue){if(1&fe&&t.YNc(0,D,0,0,"ng-template",5),2&fe){t.oxw();const ge=t.MAs(2);t.Q6J("ngTemplateOutlet",ge)}}function ae(fe,ue){if(1&fe&&(t._UZ(0,"i",9),t.ALo(1,"entityColor"),t._uU(2)),2&fe){const ge=t.oxw();t.Q6J("nzTwotoneColor",t.lcZ(1,2,"ClinicalTrial")),t.xp6(2),t.hij(" ",ge.clinicalTrial.nctId,"\n")}}let Q=(()=>{class fe{set clinicalTrial(ge){if(!ge)throw new Error("clinical-trial-tag clinicalTrial Input requires LinkableClinicalTrial.");this._clinicalTrial=ge}get clinicalTrial(){return this._clinicalTrial}constructor(){this.linked=!0,this.enablePopover=!0}}return fe.\u0275fac=function(ge){return new(ge||fe)},fe.\u0275cmp=t.Xpm({type:fe,selectors:[["cvc-clinical-trial-tag"]],inputs:{clinicalTrial:"clinicalTrial",linked:"linked",enablePopover:"enablePopover"},decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger"],["clinicalTrialPopover",""],[3,"clinicalTrialId"],["nz-icon","","nzTheme","twotone","nzType","civic-clinicaltrial",3,"nzTwotoneColor"]],template:function(ge,Se){if(1&ge&&(t.YNc(0,A,3,2,"ng-container",0),t.YNc(1,P,4,4,"ng-template",null,1,t.W1O),t.YNc(3,re,1,1,"ng-template",null,2,t.W1O),t.YNc(5,ae,3,4,"ng-template",null,3,t.W1O)),2&ge){const ke=t.MAs(4);t.Q6J("ngIf",Se.linked)("ngIfElse",ke)}},dependencies:[i.O5,i.tP,v.rH,d.Ls,s.j,L.lU,me,M.a],styles:["[_nghost-%COMP%]{display:block}"]}),fe})()},4605:(It,be,a)=>{a.d(be,{N:()=>k});var t=a(6814),i=a(4190),v=a(5695),d=a(7417),s=a(6067),L=a(2524),j=a(2962),$=a(8125),I=a(551),S=a(5879);let F=(()=>{class U{}return U.\u0275fac=function(M){return new(M||U)},U.\u0275mod=S.oAB({type:U}),U.\u0275inj=S.cJS({imports:[t.ez,j.vh,I.PV,$.q6,s.X,L.s]}),U})(),k=(()=>{class U{}return U.\u0275fac=function(M){return new(M||U)},U.\u0275mod=S.oAB({type:U}),U.\u0275inj=S.cJS({imports:[t.ez,i.Bz,I.PV,v.X,d.$6,F,L.s]}),U})()},2851:(It,be,a)=>{a.d(be,{I:()=>A});var t=a(5676),i=a(7398),v=a(2181),d=a(5879),s=a(313),L=a(6814),j=a(2962),$=a(8125),I=a(551),S=a(2392),F=a(3317),k=a(8091),U=a(5869);function w(V,O){if(1&V&&(d._UZ(0,"i",12),d._uU(1),d.ALo(2,"truncate")),2&V){const P=d.oxw().ngIf;d.xp6(1),d.hij(" ",d.xi3(2,1,P.name,50)," ")}}function M(V,O){if(1&V&&(d.TgZ(0,"cvc-link-tag",14),d._uU(1),d.qZA()),2&V){const P=d.oxw(2).ngIf;d.Q6J("href",P.diseaseUrl),d.xp6(1),d.hij(" DOID: ",P.doid," ")}}function e(V,O){if(1&V&&d.YNc(0,M,2,2,"cvc-link-tag",13),2&V){const P=d.oxw().ngIf,D=d.MAs(7);d.Q6J("ngIf",P.doid)("ngIfElse",D)}}function R(V,O){1&V&&(d.TgZ(0,"span",15),d._uU(1,"No DOID"),d.qZA())}function pe(V,O){if(1&V&&(d.TgZ(0,"nz-descriptions-item",16),d._uU(1),d.qZA()),2&V){const P=d.oxw().ngIf;d.xp6(1),d.hij(" ",P.name," ")}}function me(V,O){if(1&V&&(d.TgZ(0,"nz-descriptions-item",17),d._uU(1),d.qZA()),2&V){const P=d.oxw().ngIf;d.xp6(1),d.hij(" ",P.diseaseAliases.join(", ")," ")}}function Z(V,O){if(1&V&&(d.ynx(0),d.TgZ(1,"nz-card",2),d.YNc(2,w,3,4,"ng-template",null,3,d.W1O),d.YNc(4,e,1,2,"ng-template",null,4,d.W1O),d.YNc(6,R,2,0,"ng-template",null,5,d.W1O),d.TgZ(8,"nz-descriptions",6),d.YNc(9,pe,2,1,"nz-descriptions-item",7),d.YNc(10,me,2,1,"nz-descriptions-item",8),d.TgZ(11,"nz-descriptions-item",9),d._uU(12),d.qZA(),d.TgZ(13,"nz-descriptions-item",10),d._uU(14),d.qZA(),d.TgZ(15,"nz-descriptions-item",11),d._uU(16),d.qZA()()(),d.BQk()),2&V){const P=O.ngIf,D=d.MAs(3),re=d.MAs(5);d.xp6(1),d.Q6J("nzTitle",D)("nzExtra",re),d.xp6(7),d.Q6J("nzColumn",1),d.xp6(1),d.Q6J("ngIf",P.name.length>50),d.xp6(1),d.Q6J("ngIf",P.diseaseAliases.length>0),d.xp6(2),d.hij(" ",P.assertionCount," "),d.xp6(2),d.hij(" ",P.evidenceItemCount," "),d.xp6(2),d.hij(" ",P.molecularProfileCount," ")}}let A=(()=>{class V{constructor(P){this.gql=P}ngOnInit(){if(null==this.diseaseId)throw new Error("cvc-disease-popover requires valid diseaseId input.");this.disease$=this.gql.watch({diseaseId:this.diseaseId}).valueChanges.pipe((0,i.U)(({data:P})=>P?.diseasePopover),(0,v.h)(t.ep))}}return V.\u0275fac=function(P){return new(P||V)(d.Y36(s.k7O))},V.\u0275cmp=d.Xpm({type:V,selectors:[["cvc-disease-popover"]],inputs:{diseaseId:"diseaseId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["linkout",""],["noDoid",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Name","nzSpan","2",4,"ngIf"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Assertions","nzSpan","1"],["nzTitle","Evidence","nzSpan","1"],["nzTitle","Molecular Profiles","nzSpan","1"],["nz-icon","","nzType","civic-disease","nzTheme","twotone","nzTwotoneColor","#E62F76"],["tooltip","View on disease-ontology.org",3,"href",4,"ngIf","ngIfElse"],["tooltip","View on disease-ontology.org",3,"href"],["nz-typography","","nzType","secondary"],["nzTitle","Name","nzSpan","2"],["nzTitle","Aliases","nzSpan","2"]],template:function(P,D){1&P&&(d.TgZ(0,"div",0),d.YNc(1,Z,17,8,"ng-container",1),d.ALo(2,"ngrxPush"),d.qZA()),2&P&&(d.xp6(1),d.Q6J("ngIf",d.lcZ(2,1,D.disease$)))},dependencies:[L.O5,j.bd,$.R7,$.uj,I.Ls,S.ZU,F.l,k.fM,U.W],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),V})()},5687:(It,be,a)=>{a.d(be,{t:()=>I});var t=a(6814),i=a(2962),v=a(8125),d=a(551),s=a(6067),L=a(2392),j=a(2524),$=a(5879);let I=(()=>{class S{}return S.\u0275fac=function(k){return new(k||S)},S.\u0275mod=$.oAB({type:S}),S.\u0275inj=$.cJS({imports:[t.ez,i.vh,v.q6,d.PV,L.ZJ,j.s,s.X]}),S})()},9775:(It,be,a)=>{a.d(be,{n:()=>Z});var t=a(8130),i=a(5879),v=a(6814),d=a(4190),s=a(5695),L=a(7417),j=a(551),$=a(2851),I=a(5869);function S(A,V){}function F(A,V){if(1&A&&(i.ynx(0),i.TgZ(1,"a",4),i.YNc(2,S,0,0,"ng-template",5),i.qZA(),i.BQk()),2&A){const O=i.oxw(),P=i.MAs(2);i.xp6(1),i.Q6J("routerLink",O.disease.link),i.xp6(1),i.Q6J("ngTemplateOutlet",P)}}function k(A,V){}function U(A,V){if(1&A&&i._UZ(0,"cvc-disease-popover",8),2&A){const O=i.oxw(2);i.Q6J("diseaseId",O.disease.id)}}function w(A,V){if(1&A){const O=i.EpF();i.TgZ(0,"nz-tag",6),i.NdJ("nzOnClose",function(D){i.CHM(O);const re=i.oxw();return i.KtG(re.itemClosed(D))}),i.YNc(1,k,0,0,"ng-template",5),i.qZA(),i.YNc(2,U,1,1,"ng-template",null,7,i.W1O)}if(2&A){const O=i.MAs(3),P=i.oxw(),D=i.MAs(6);i.Q6J("nzPopoverMouseEnterDelay",P.onCloseClicked?0:.5)("nzPopoverContent",O)("nzPopoverTrigger",P.enablePopover?"hover":null)("nzMode",P.onCloseClicked?"closeable":"default"),i.xp6(1),i.Q6J("ngTemplateOutlet",D)}}function M(A,V){}function e(A,V){if(1&A&&i.YNc(0,M,0,0,"ng-template",5),2&A){i.oxw();const O=i.MAs(2);i.Q6J("ngTemplateOutlet",O)}}function R(A,V){if(1&A&&(i.ynx(0),i._uU(1),i.ALo(2,"truncate"),i.BQk()),2&A){const O=i.oxw(2);i.xp6(1),i.hij(" ",i.xi3(2,1,O.disease.name,27)," ")}}function pe(A,V){if(1&A&&i._uU(0),2&A){const O=i.oxw(2);i.hij(" ",O.disease.name," ")}}function me(A,V){if(1&A&&(i._UZ(0,"i",9),i.YNc(1,R,3,4,"ng-container",0),i.YNc(2,pe,1,1,"ng-template",null,10,i.W1O)),2&A){const O=i.MAs(3),P=i.oxw();i.xp6(1),i.Q6J("ngIf",P.truncateLongName)("ngIfElse",O)}}let Z=(()=>{class A extends t.a{constructor(){super(...arguments),this.enablePopover=!0,this.truncateLongName=!1}set disease(O){if(!O)throw new Error("disease-tag disease Input requires LinkableDisease.");this._disease=O}get disease(){return this._disease}idFunction(){return this.disease.id}}return A.\u0275fac=function(){let V;return function(P){return(V||(V=i.n5z(A)))(P||A)}}(),A.\u0275cmp=i.Xpm({type:A,selectors:[["cvc-disease-tag"]],inputs:{disease:"disease",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[i.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["diseasePopover",""],[3,"diseaseId"],["nz-icon","","nzType","civic-disease","nzTheme","twotone","nzTwotoneColor","#E62F76"],["fullName",""]],template:function(O,P){if(1&O&&(i.YNc(0,F,3,2,"ng-container",0),i.YNc(1,w,4,5,"ng-template",null,1,i.W1O),i.YNc(3,e,1,1,"ng-template",null,2,i.W1O),i.YNc(5,me,4,2,"ng-template",null,3,i.W1O)),2&O){const D=i.MAs(4);i.Q6J("ngIf",P.linked)("ngIfElse",D)}},dependencies:[v.O5,v.tP,d.rH,s.j,L.lU,j.Ls,$.I,I.W],encapsulation:2,changeDetection:0}),A})()},3396:(It,be,a)=>{a.d(be,{Q:()=>I});var t=a(6814),i=a(4190),v=a(5695),d=a(7417),s=a(551),L=a(5687),j=a(2524),$=a(5879);let I=(()=>{class S{}return S.\u0275fac=function(k){return new(k||S)},S.\u0275mod=$.oAB({type:S}),S.\u0275inj=$.cJS({imports:[t.ez,i.Bz,v.X,d.$6,s.PV,j.s,L.t]}),S})()},8213:(It,be,a)=>{a.d(be,{_:()=>st});var t=a(7398),i=a(2181),v=a(5676),d=a(5879),s=a(313),L=a(6814),j=a(4190),$=a(551),I=a(2962),S=a(95),F=a(8125),k=a(5695),U=a(2574),w=a(2392),M=a(4770),e=a(9775),R=a(3897),pe=a(4138),me=a(2384),Z=a(2606),A=a(5095),V=a(8091),O=a(6967),P=a(2616);function D(Ze,Bt){if(1&Ze&&(d.ynx(0),d._UZ(1,"i",17),d.ALo(2,"entityColor"),d._uU(3),d.BQk()),2&Ze){const Jt=d.oxw(2).ngIf;d.xp6(1),d.Q6J("nzTwotoneColor",d.lcZ(2,2,"EvidenceItem")),d.xp6(2),d.hij(" ",Jt.name," ")}}function re(Ze,Bt){if(1&Ze&&d._UZ(0,"cvc-status-tag",18),2&Ze){const Jt=d.oxw(2).ngIf;d.Q6J("status",Jt.status)}}function ae(Ze,Bt){1&Ze&&(d.TgZ(0,"nz-space"),d.YNc(1,D,4,4,"ng-container",15),d.YNc(2,re,1,1,"cvc-status-tag",16),d.qZA())}function Q(Ze,Bt){if(1&Ze&&d._UZ(0,"cvc-molecular-profile-tag",19),2&Ze){const Jt=d.oxw().ngIf;d.Q6J("molecularProfile",Jt.molecularProfile)("enablePopover",!1)("truncateLongName",!0)}}function fe(Ze,Bt){if(1&Ze&&(d.ynx(0),d._uU(1),d.BQk()),2&Ze){const Jt=Bt.ngIf;d.xp6(1),d.hij(" ",Jt," ")}}function ue(Ze,Bt){if(1&Ze&&(d.TgZ(0,"nz-descriptions",20)(1,"nz-descriptions-item",21),d._UZ(2,"cvc-mp-tag-name",22),d.qZA(),d.TgZ(3,"nz-descriptions-item",23),d._UZ(4,"cvc-source-tag",24),d.qZA()()),2&Ze){const Jt=d.oxw().ngIf;d.Q6J("nzColumn",1),d.xp6(2),d.Q6J("nameSegments",Jt.molecularProfile.parsedName)("enablePopover",!1),d.xp6(2),d.Q6J("source",Jt.source)("enablePopover",!1)}}function ge(Ze,Bt){if(1&Ze&&(d.ynx(0),d._UZ(1,"cvc-disease-tag",35),d.BQk()),2&Ze){const Jt=d.oxw(2).ngIf;d.xp6(1),d.Q6J("enablePopover",!1)("disease",Jt.disease)("truncateLongName",!0)}}function Se(Ze,Bt){1&Ze&&d._uU(0," N/A ")}function ke(Ze,Bt){if(1&Ze&&(d.TgZ(0,"span"),d._UZ(1,"cvc-therapy-tag",38),d.qZA()),2&Ze){const Jt=Bt.$implicit;d.xp6(1),d.Q6J("enablePopover",!1)("therapy",Jt)("truncateLongName",!0)}}function Rt(Ze,Bt){if(1&Ze&&(d.ynx(0),d._uU(1),d.ALo(2,"titlecase"),d.BQk()),2&Ze){const Jt=d.oxw(3).ngIf;d.xp6(1),d.hij(" ",d.lcZ(2,1,Jt.therapyInteractionType)," ")}}function Ft(Ze,Bt){if(1&Ze&&(d.TgZ(0,"nz-descriptions-item",36),d.YNc(1,ke,2,3,"span",37),d.YNc(2,Rt,3,3,"ng-container",1),d.qZA()),2&Ze){const Jt=d.oxw(2).ngIf;d.xp6(1),d.Q6J("ngForOf",Jt.therapies),d.xp6(1),d.Q6J("ngIf",Jt.therapies.length>1)}}function Mt(Ze,Bt){if(1&Ze&&(d.TgZ(0,"span"),d._UZ(1,"cvc-phenotype-tag",40),d.qZA()),2&Ze){const Jt=Bt.$implicit;d.xp6(1),d.Q6J("enablePopover",!1)("phenotype",Jt)}}function yt(Ze,Bt){if(1&Ze&&(d.TgZ(0,"nz-descriptions-item",39),d.YNc(1,Mt,2,2,"span",37),d.qZA()),2&Ze){const Jt=d.oxw(2).ngIf;d.xp6(1),d.Q6J("ngForOf",Jt.phenotypes)}}function Ct(Ze,Bt){if(1&Ze&&(d.TgZ(0,"nz-descriptions",20)(1,"nz-descriptions-item",25),d._uU(2),d.qZA(),d.TgZ(3,"nz-descriptions-item",26),d._uU(4),d.ALo(5,"evidenceEnumDisplay"),d.qZA(),d.TgZ(6,"nz-descriptions-item",27),d._uU(7),d.ALo(8,"evidenceEnumDisplay"),d.qZA(),d.TgZ(9,"nz-descriptions-item",28),d._uU(10),d.ALo(11,"evidenceEnumDisplay"),d.qZA(),d.TgZ(12,"nz-descriptions-item",29),d._uU(13),d._UZ(14,"i",30),d.qZA(),d.TgZ(15,"nz-descriptions-item",31),d.YNc(16,ge,2,3,"ng-container",9),d.YNc(17,Se,1,0,"ng-template",null,32,d.W1O),d.qZA(),d.YNc(19,Ft,3,2,"nz-descriptions-item",33),d.YNc(20,yt,2,1,"nz-descriptions-item",34),d.qZA()),2&Ze){const Jt=d.MAs(18),_n=d.oxw().ngIf;d.Q6J("nzColumn",2),d.xp6(2),d.hij(" ",_n.evidenceLevel," "),d.xp6(2),d.hij(" ",d.lcZ(5,10,_n.evidenceType)," "),d.xp6(3),d.hij(" ",d.lcZ(8,12,_n.evidenceDirection)," "),d.xp6(3),d.hij(" ",d.lcZ(11,14,_n.significance)," "),d.xp6(3),d.hij(" ",_n.evidenceRating,""),d.xp6(3),d.Q6J("ngIf",_n.disease)("ngIfElse",Jt),d.xp6(3),d.Q6J("ngIf",_n.therapies.length>0),d.xp6(1),d.Q6J("ngIf",_n.phenotypes.length>0)}}function Lt(Ze,Bt){if(1&Ze&&(d.TgZ(0,"a",41)(1,"nz-tag",42),d._UZ(2,"i",43),d._uU(3),d.qZA()()),2&Ze){const Jt=d.oxw().ngIf;d.MGl("routerLink","/evidence/",Jt.id,"/flags"),d.xp6(3),d.hij(" Flags (",Jt.flags.totalCount,") ")}}function rn(Ze,Bt){if(1&Ze&&(d.TgZ(0,"a",41)(1,"nz-tag",44),d._UZ(2,"i",45),d._uU(3),d.qZA()()),2&Ze){const Jt=d.oxw().ngIf;d.MGl("routerLink","/evidence/",Jt.id,"/revisions"),d.xp6(3),d.hij(" Revisions (",Jt.revisions.totalCount,") ")}}function Sn(Ze,Bt){if(1&Ze&&(d.TgZ(0,"a",41)(1,"nz-tag",46),d._UZ(2,"i",47),d._uU(3),d.qZA()()),2&Ze){const Jt=d.oxw().ngIf;d.MGl("routerLink","/evidence/",Jt.id,"/comments"),d.xp6(3),d.hij(" Comments (",Jt.comments.totalCount,") ")}}function rt(Ze,Bt){if(1&Ze&&(d.ynx(0),d.TgZ(1,"nz-card",3),d.YNc(2,ae,3,0,"ng-template",null,4,d.W1O),d.YNc(4,Q,1,3,"ng-template",null,5,d.W1O),d.TgZ(6,"nz-row")(7,"nz-col",6)(8,"div",7)(9,"p",8),d.YNc(10,fe,2,1,"ng-container",9),d.qZA()()()(),d.TgZ(11,"nz-space",10),d.YNc(12,ue,5,5,"nz-descriptions",11),d.YNc(13,Ct,21,16,"nz-descriptions",11),d.qZA(),d.TgZ(14,"nz-row",12)(15,"nz-col",6)(16,"nz-space",13),d.YNc(17,Lt,4,2,"a",14),d.YNc(18,rn,4,2,"a",14),d.YNc(19,Sn,4,2,"a",14),d.qZA()()()(),d.BQk()),2&Ze){const Jt=Bt.ngIf,_n=d.MAs(3),On=d.MAs(5);d.oxw();const cn=d.MAs(4);d.xp6(1),d.Q6J("nzTitle",_n)("nzExtra",On),d.xp6(8),d.Q6J("nzEllipsisRows",4),d.xp6(1),d.Q6J("ngIf",Jt.description)("ngIfElse",cn)}}function Ye(Ze,Bt){1&Ze&&d._uU(0," Evidence item has not been provided a description.\n")}let st=(()=>{class Ze{constructor(Jt){this.gql=Jt}ngOnInit(){if(null==this.evidenceId)throw new Error("cvc-evidence-popover requires valid evidenceId input.");this.evidence$=this.gql.watch({evidenceId:this.evidenceId}).valueChanges.pipe((0,t.U)(({data:Jt})=>Jt?.evidenceItem),(0,i.h)(v.ep))}}return Ze.\u0275fac=function(Jt){return new(Jt||Ze)(d.Y36(s.Ybm))},Ze.\u0275cmp=d.Xpm({type:Ze,selectors:[["cvc-evidence-popover"]],inputs:{evidenceId:"evidenceId"},decls:5,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["noDescription",""],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["molecularProfile",""],["nzSpan","24"],[1,"popover-text"],["nz-typography","","nzEllipsis","","nzExpandable","",3,"nzEllipsisRows"],[4,"ngIf","ngIfElse"],["nzDirection","vertical","nzSize","small"],["nzSize","small","nzBordered","true",3,"nzColumn",4,"nzSpaceItem"],["id","entity-child-counts"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],[4,"nzSpaceItem"],["style","font-weight: normal",3,"status",4,"nzSpaceItem"],["nz-icon","","nzTheme","twotone","nzType","civic-evidence",3,"nzTwotoneColor"],[2,"font-weight","normal",3,"status"],[3,"molecularProfile","enablePopover","truncateLongName"],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","MP Expression"],[3,"nameSegments","enablePopover"],["nzTitle","Source","nzSpan","2"],[3,"source","enablePopover"],["nzTitle","Level"],["nzTitle","Type"],["nzTitle","Direction"],["nzTitle","Clinical Significance","nzSpan","2"],["nzTitle","Rating"],["nz-icon","","nzType","star","nzTheme","fill"],["nzTitle","Disease"],["noDisease",""],["nzTitle","Therapies","nzSpan","2",4,"ngIf"],["nzTitle","Phenotypes","nzSpan","2",4,"ngIf"],[3,"enablePopover","disease","truncateLongName"],["nzTitle","Therapies","nzSpan","2"],[4,"ngFor","ngForOf"],[3,"enablePopover","therapy","truncateLongName"],["nzTitle","Phenotypes","nzSpan","2"],[3,"enablePopover","phenotype"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(Jt,_n){1&Jt&&(d.TgZ(0,"div",0),d.YNc(1,rt,20,5,"ng-container",1),d.ALo(2,"ngrxPush"),d.qZA(),d.YNc(3,Ye,1,0,"ng-template",null,2,d.W1O)),2&Jt&&(d.xp6(1),d.Q6J("ngIf",d.lcZ(2,1,_n.evidence$)))},dependencies:[L.sg,L.O5,j.rH,$.Ls,I.bd,S.t3,S.SK,F.R7,F.uj,k.j,U.NU,U.$1,w.ZU,M.T,e.n,R.i,pe.T,me.h,Z.p,A.C,L.rS,V.fM,O.Do,P.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),Ze})()},1855:(It,be,a)=>{a.d(be,{f:()=>me});var t=a(6814),i=a(2962),v=a(95),d=a(8125),s=a(4190),L=a(5695),j=a(3396),$=a(3043),I=a(2574),S=a(551),F=a(2524),k=a(8641),U=a(2655),w=a(2392),M=a(9858),e=a(8527),R=a(6061),pe=a(5879);let me=(()=>{class Z{}return Z.\u0275fac=function(V){return new(V||Z)},Z.\u0275mod=pe.oAB({type:Z}),Z.\u0275inj=pe.cJS({imports:[t.ez,s.Bz,S.PV,i.vh,v.Jb,d.q6,L.X,I.zf,w.ZJ,F.s,R.N,j.Q,$.y,k.s,U.x,e.u,M.r]}),Z})()},1598:(It,be,a)=>{a.d(be,{Q:()=>O});var t=a(5676),i=a(7398),v=a(2181),d=a(5879),s=a(313),L=a(6814),j=a(4190),$=a(2962),I=a(95),S=a(8125),F=a(5695),k=a(551),U=a(2574),w=a(8091),M=a(2616);function e(P,D){if(1&P&&(d._UZ(0,"i",11),d.ALo(1,"entityColor"),d._uU(2)),2&P){const re=d.oxw().ngIf;d.Q6J("nzTwotoneColor",d.lcZ(1,2,"Gene")),d.xp6(2),d.hij(" ",re.officialName," ")}}function R(P,D){if(1&P&&(d.TgZ(0,"nz-tag"),d._uU(1),d.qZA()),2&P){const re=D.$implicit;d.xp6(1),d.Oqu(re)}}function pe(P,D){if(1&P&&(d.TgZ(0,"nz-descriptions-item",12),d.YNc(1,R,2,1,"nz-tag",13),d.qZA()),2&P){const re=d.oxw().ngIf;d.xp6(1),d.Q6J("ngForOf",re.geneAliases)}}function me(P,D){if(1&P&&(d.TgZ(0,"a",14)(1,"nz-tag",15),d._UZ(2,"i",16),d._uU(3),d.qZA()()),2&P){const re=d.oxw().ngIf;d.MGl("routerLink","/genes/",re.id,"/flags"),d.xp6(3),d.hij(" Flags (",re.flags.totalCount,") ")}}function Z(P,D){if(1&P&&(d.TgZ(0,"a",14)(1,"nz-tag",17),d._UZ(2,"i",18),d._uU(3),d.qZA()()),2&P){const re=d.oxw().ngIf;d.MGl("routerLink","/genes/",re.id,"/revisions"),d.xp6(3),d.hij(" Revisions (",re.revisions.totalCount,") ")}}function A(P,D){if(1&P&&(d.TgZ(0,"a",14)(1,"nz-tag",19),d._UZ(2,"i",20),d._uU(3),d.qZA()()),2&P){const re=d.oxw().ngIf;d.MGl("routerLink","/genes/",re.id,"/comments"),d.xp6(3),d.hij(" Comments (",re.comments.totalCount,") ")}}function V(P,D){if(1&P&&(d.ynx(0),d.TgZ(1,"nz-card",2),d.YNc(2,e,3,4,"ng-template",null,3,d.W1O),d.TgZ(4,"nz-descriptions",4),d.YNc(5,pe,2,1,"nz-descriptions-item",5),d.TgZ(6,"nz-descriptions-item",6),d._uU(7),d.qZA()(),d.TgZ(8,"nz-row",7)(9,"nz-col",8)(10,"nz-space",9),d.YNc(11,me,4,2,"a",10),d.YNc(12,Z,4,2,"a",10),d.YNc(13,A,4,2,"a",10),d.qZA()()()(),d.BQk()),2&P){const re=D.ngIf,ae=d.MAs(3);d.xp6(1),d.Q6J("nzTitle",ae),d.xp6(3),d.Q6J("nzColumn",2),d.xp6(1),d.Q6J("ngIf",re.geneAliases.length>0),d.xp6(2),d.hij(" ",re.variants.totalCount," ")}}let O=(()=>{class P{constructor(re){this.gql=re}ngOnInit(){if(null==this.geneId)throw new Error("cvc-gene-popover requires valid geneId input.");this.gene$=this.gql.watch({geneId:this.geneId}).valueChanges.pipe((0,i.U)(({data:re})=>re?.gene),(0,v.h)(t.ep))}}return P.\u0275fac=function(re){return new(re||P)(d.Y36(s.rJ8))},P.\u0275cmp=d.Xpm({type:P,selectors:[["cvc-gene-popover"]],inputs:{geneId:"geneId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle"],["cardTitle",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Variants"],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzTheme","twotone","nzType","civic-gene",3,"nzTwotoneColor"],["nzTitle","Aliases","nzSpan","2"],[4,"ngFor","ngForOf"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(re,ae){1&re&&(d.TgZ(0,"div",0),d.YNc(1,V,14,4,"ng-container",1),d.ALo(2,"ngrxPush"),d.qZA()),2&re&&(d.xp6(1),d.Q6J("ngIf",d.lcZ(2,1,ae.gene$)))},dependencies:[L.sg,L.O5,j.rH,$.bd,I.t3,I.SK,S.R7,S.uj,F.j,k.Ls,U.NU,U.$1,w.fM,M.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),P})()},9021:(It,be,a)=>{a.d(be,{w:()=>F});var t=a(6814),i=a(4190),v=a(2524),d=a(2962),s=a(8125),L=a(95),j=a(551),$=a(2574),I=a(5695),S=a(5879);let F=(()=>{class k{}return k.\u0275fac=function(w){return new(w||k)},k.\u0275mod=S.oAB({type:k}),k.\u0275inj=S.cJS({imports:[t.ez,i.Bz,d.vh,L.Jb,s.q6,I.X,j.PV,$.zf,v.s]}),k})()},4121:(It,be,a)=>{a.d(be,{H:()=>O});var t=a(8130),i=a(2023),v=a(5879),d=a(6814),s=a(4190),L=a(5695),j=a(7417),$=a(551),I=a(1598),S=a(3103),F=a(5869),k=a(2616);function U(P,D){}function w(P,D){if(1&P&&(v.ynx(0),v.TgZ(1,"a",4),v.YNc(2,U,0,0,"ng-template",5),v.qZA(),v.BQk()),2&P){const re=v.oxw(),ae=v.MAs(2);v.xp6(1),v.Q6J("routerLink",re.gene.link),v.xp6(1),v.Q6J("ngTemplateOutlet",ae)}}function M(P,D){}function e(P,D){if(1&P&&v._UZ(0,"cvc-gene-popover",8),2&P){const re=v.oxw(2);v.Q6J("geneId",re.gene.id)}}function R(P,D){if(1&P){const re=v.EpF();v.TgZ(0,"nz-tag",6),v.NdJ("nzOnClose",function(Q){v.CHM(re);const fe=v.oxw();return v.KtG(fe.itemClosed(Q))}),v.YNc(1,M,0,0,"ng-template",5),v.qZA(),v.YNc(2,e,1,1,"ng-template",null,7,v.W1O)}if(2&P){const re=v.MAs(3),ae=v.oxw(),Q=v.MAs(6);v.Q6J("nzPopoverMouseEnterDelay",ae.onCloseClicked?0:.5)("nzPopoverContent",re)("nzPopoverTrigger",ae.enablePopover?"hover":null)("nzMode",ae.onCloseClicked?"closeable":"default"),v.xp6(1),v.Q6J("ngTemplateOutlet",Q)}}function pe(P,D){}function me(P,D){if(1&P&&v.YNc(0,pe,0,0,"ng-template",5),2&P){v.oxw();const re=v.MAs(2);v.Q6J("ngTemplateOutlet",re)}}function Z(P,D){if(1&P&&(v.ynx(0),v._uU(1),v.ALo(2,"truncate"),v.BQk()),2&P){const re=v.oxw(2);v.xp6(1),v.hij(" ",v.xi3(2,1,re.gene.name,12)," ")}}function A(P,D){if(1&P&&v._uU(0),2&P){const re=v.oxw(2);v.hij(" ",re.gene.name," ")}}function V(P,D){if(1&P&&(v.TgZ(0,"cvc-icon-badges",9),v._UZ(1,"i",10),v.ALo(2,"entityColor"),v.qZA(),v.YNc(3,Z,3,4,"ng-container",0),v.YNc(4,A,1,1,"ng-template",null,11,v.W1O)),2&P){const re=v.MAs(5),ae=v.oxw();v.Q6J("flagged",ae.gene.flagged)("entityColor",ae.iconColor),v.xp6(1),v.Q6J("nzTwotoneColor",v.lcZ(2,5,"Gene")),v.xp6(2),v.Q6J("ngIf",ae.truncateLongName)("ngIfElse",re)}}let O=(()=>{class P extends t.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1,this.iconColor=(0,i.f)("Gene")}idFunction(){return this.gene.id}ngOnInit(){if(super.ngOnInit(),void 0===this.gene)throw new Error("cvc-gene-tag requires LinkableGene input, none supplied.")}}return P.\u0275fac=function(re){return new(re||P)},P.\u0275cmp=v.Xpm({type:P,selectors:[["cvc-gene-tag"]],inputs:{gene:"gene",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[v.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["genePopover",""],[3,"geneId"],[3,"flagged","entityColor"],["nz-icon","","nzType","civic-gene","nzTheme","twotone",3,"nzTwotoneColor"],["fullName",""]],template:function(re,ae){if(1&re&&(v.YNc(0,w,3,2,"ng-container",0),v.YNc(1,R,4,5,"ng-template",null,1,v.W1O),v.YNc(3,me,1,1,"ng-template",null,2,v.W1O),v.YNc(5,V,6,7,"ng-template",null,3,v.W1O)),2&re){const Q=v.MAs(4);v.Q6J("ngIf",ae.linked)("ngIfElse",Q)}},dependencies:[d.O5,d.tP,s.rH,L.j,j.lU,$.Ls,I.Q,S.b,F.W,k.a],encapsulation:2,changeDetection:0}),P})()},5956:(It,be,a)=>{a.d(be,{U:()=>F});var t=a(6814),i=a(4190),v=a(5695),d=a(551),s=a(7417),L=a(9021),j=a(2524),$=a(3640),I=a(3146),S=a(5879);let F=(()=>{class k{}return k.\u0275fac=function(w){return new(w||k)},k.\u0275mod=S.oAB({type:k}),k.\u0275inj=S.cJS({imports:[t.ez,i.Bz,v.X,s.$6,d.PV,$.mS,j.s,L.w,I.C]}),k})()},156:(It,be,a)=>{a.d(be,{_:()=>ae});var t=a(5676),i=a(7398),v=a(2181),d=a(5879),s=a(313),L=a(6814),j=a(4190),$=a(2962),I=a(95),S=a(8125),F=a(5695),k=a(551),U=a(2574),w=a(1887),M=a(5095),e=a(8091);function R(Q,fe){if(1&Q&&(d._UZ(0,"i",16),d._uU(1)),2&Q){const ue=d.oxw().ngIf;d.xp6(1),d.hij(" ",ue.name," ")}}function pe(Q,fe){if(1&Q&&(d.TgZ(0,"nz-descriptions-item",17),d._uU(1),d.qZA()),2&Q){const ue=d.oxw().ngIf;d.xp6(1),d.hij(" ",ue.evidenceItems.totalCount," ")}}function me(Q,fe){if(1&Q&&(d.TgZ(0,"nz-descriptions-item",18),d._uU(1),d.qZA()),2&Q){const ue=d.oxw().ngIf;d.xp6(1),d.hij(" ",ue.assertions.totalCount," ")}}function Z(Q,fe){if(1&Q&&(d.TgZ(0,"nz-tag"),d._uU(1),d.qZA()),2&Q){const ue=fe.$implicit;d.xp6(1),d.Oqu(ue)}}function A(Q,fe){if(1&Q&&(d.ynx(0),d.TgZ(1,"cvc-tag-list"),d.YNc(2,Z,2,1,"nz-tag",19),d.qZA(),d.BQk()),2&Q){const ue=d.oxw().ngIf;d.xp6(2),d.Q6J("ngForOf",ue.molecularProfileAliases)}}function V(Q,fe){1&Q&&(d.TgZ(0,"span",20),d._uU(1,"None specified"),d.qZA())}function O(Q,fe){if(1&Q&&(d.TgZ(0,"a",21)(1,"nz-tag",22),d._UZ(2,"i",23),d._uU(3),d.qZA()()),2&Q){const ue=d.oxw().ngIf;d.MGl("routerLink","/molecular-profiles/",ue.id,"/flags"),d.xp6(3),d.hij(" Flags (",ue.flags.totalCount,") ")}}function P(Q,fe){if(1&Q&&(d.TgZ(0,"a",21)(1,"nz-tag",24),d._UZ(2,"i",25),d._uU(3),d.qZA()()),2&Q){const ue=d.oxw().ngIf;d.MGl("routerLink","/molecular-profiles/",ue.id,"/revisions"),d.xp6(3),d.hij(" Revisions (",ue.revisions.totalCount,") ")}}function D(Q,fe){if(1&Q&&(d.TgZ(0,"a",21)(1,"nz-tag",26),d._UZ(2,"i",27),d._uU(3),d.qZA()()),2&Q){const ue=d.oxw().ngIf;d.MGl("routerLink","/molecular-profiles/",ue.id,"/comments"),d.xp6(3),d.hij(" Comments (",ue.comments.totalCount,") ")}}function re(Q,fe){if(1&Q&&(d.ynx(0),d.TgZ(1,"nz-card",2),d.YNc(2,R,2,1,"ng-template",null,3,d.W1O),d.TgZ(4,"nz-descriptions",4)(5,"nz-descriptions-item",5),d._UZ(6,"cvc-mp-tag-name",6),d.qZA(),d.YNc(7,pe,2,1,"nz-descriptions-item",7),d.YNc(8,me,2,1,"nz-descriptions-item",8),d.TgZ(9,"nz-descriptions-item",9),d.YNc(10,A,3,1,"ng-container",10),d.YNc(11,V,2,0,"ng-template",null,11,d.W1O),d.qZA()(),d.TgZ(13,"nz-row",12)(14,"nz-col",13)(15,"nz-space",14),d.YNc(16,O,4,2,"a",15),d.YNc(17,P,4,2,"a",15),d.YNc(18,D,4,2,"a",15),d.qZA()()()(),d.BQk()),2&Q){const ue=fe.ngIf,ge=d.MAs(3),Se=d.MAs(12);d.xp6(1),d.Q6J("nzTitle",ge),d.xp6(3),d.Q6J("nzColumn",2),d.xp6(2),d.Q6J("nameSegments",ue.parsedName)("enablePopover",!1),d.xp6(1),d.Q6J("ngIf",ue.evidenceItems.totalCount>0),d.xp6(1),d.Q6J("ngIf",ue.assertions.totalCount>0),d.xp6(2),d.Q6J("ngIf",ue.molecularProfileAliases.length>0)("ngIfElse",Se)}}let ae=(()=>{class Q{constructor(ue){this.gql=ue}ngOnInit(){if(void 0===this.molecularProfileId)throw new Error("Must pass a molecular profile ID into the molecular profile popover component.");this.molecularProfile$=this.gql.watch({molecularProfileId:this.molecularProfileId}).valueChanges.pipe((0,i.U)(({data:ue})=>ue?.molecularProfile),(0,v.h)(t.ep))}}return Q.\u0275fac=function(ue){return new(ue||Q)(d.Y36(s.DkJ))},Q.\u0275cmp=d.Xpm({type:Q,selectors:[["cvc-molecular-profile-popover"]],inputs:{molecularProfileId:"molecularProfileId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle"],["cardTitle",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","MP Expression","nzSpan","2"],[3,"nameSegments","enablePopover"],["nzTitle","Evidence Items","nzSpan","2",4,"ngIf"],["nzTitle","Assertions","nzSpan","2",4,"ngIf"],["nzTitle","Aliases"],[4,"ngIf","ngIfElse"],["noAliases",""],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzType","civic:molecularprofile"],["nzTitle","Evidence Items","nzSpan","2"],["nzTitle","Assertions","nzSpan","2"],[4,"ngFor","ngForOf"],["nz-typography","","nzType","secondary"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(ue,ge){1&ue&&(d.TgZ(0,"div",0),d.YNc(1,re,19,8,"ng-container",1),d.ALo(2,"ngrxPush"),d.qZA()),2&ue&&(d.xp6(1),d.Q6J("ngIf",d.lcZ(2,1,ge.molecularProfile$)))},dependencies:[L.sg,L.O5,j.rH,$.bd,I.t3,I.SK,S.R7,S.uj,F.j,k.Ls,U.NU,U.$1,w.$,M.C,e.fM],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),Q})()},2064:(It,be,a)=>{a.d(be,{_:()=>w});var t=a(6814),i=a(4190),v=a(2962),d=a(95),s=a(8125),L=a(5695),j=a(551),$=a(2574),I=a(5956),S=a(6067),F=a(9858),k=a(366),U=a(5879);let w=(()=>{class M{}return M.\u0275fac=function(R){return new(R||M)},M.\u0275mod=U.oAB({type:M}),M.\u0275inj=U.cJS({imports:[t.ez,i.Bz,v.vh,d.Jb,s.q6,L.X,j.PV,$.zf,I.U,S.X,k.$,F.r]}),M})()},5095:(It,be,a)=>{a.d(be,{C:()=>U});var t=a(5879),i=a(6814),v=a(9408),d=a(4121);const s=["*"];let L=(()=>{class w{constructor(){}}return w.\u0275fac=function(e){return new(e||w)},w.\u0275cmp=t.Xpm({type:w,selectors:[["cvc-tag-group"]],ngContentSelectors:s,decls:1,vars:0,template:function(e,R){1&e&&(t.F$t(),t.Hsn(0))},styles:["[_nghost-%COMP%]    >*:first-child   nz-tag{border-top-right-radius:0;border-bottom-right-radius:0;margin-right:0}[_nghost-%COMP%]    >*:last-child   nz-tag{border-top-left-radius:0;border-bottom-left-radius:0;margin-left:-1px;border-left-color:#e9e9e9}"]}),w})();function j(w,M){if(1&w&&t._UZ(0,"span",3),2&w){const e=t.oxw().$implicit;t.Q6J("innerHtml",e.text,t.oJD)}}function $(w,M){if(1&w&&t._UZ(0,"cvc-gene-tag",6),2&w){const e=t.oxw().$implicit,R=t.oxw(3);t.Q6J("gene",e)("enablePopover",R.enablePopover)}}function I(w,M){if(1&w&&(t.ynx(0),t.YNc(1,$,1,2,"cvc-gene-tag",5),t.BQk()),2&w){const e=M.$implicit;t.xp6(1),t.Q6J("ngIf","Gene"==e.__typename)}}const S=function(w){return[w]};function F(w,M){if(1&w&&(t.ynx(0),t.TgZ(1,"cvc-tag-group"),t.YNc(2,I,2,1,"ng-container",0),t._UZ(3,"cvc-variant-tag",4),t.qZA(),t.BQk()),2&w){const e=t.oxw(),R=e.index,pe=e.$implicit,me=t.oxw();t.xp6(2),t.Q6J("ngForOf",t.VKq(3,S,me.nameSegments[R-1])),t.xp6(1),t.Q6J("variant",pe)("enablePopover",me.enablePopover)}}function k(w,M){if(1&w&&(t.ynx(0),t.YNc(1,j,1,1,"span",1),t.YNc(2,F,4,5,"ng-container",2),t.BQk()),2&w){const e=M.$implicit;t.xp6(1),t.Q6J("ngIf","MolecularProfileTextSegment"==e.__typename),t.xp6(1),t.Q6J("ngIf","Variant"==e.__typename)}}let U=(()=>{class w{constructor(){this.enablePopover=!0}ngOnInit(){if(void 0===this.nameSegments)throw new Error("Must pass a list of molecular profile name segments into mp name component.")}}return w.\u0275fac=function(e){return new(e||w)},w.\u0275cmp=t.Xpm({type:w,selectors:[["cvc-mp-tag-name"]],inputs:{nameSegments:"nameSegments",enablePopover:"enablePopover"},decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],["class","text-segment",3,"innerHtml",4,"ngIf"],[4,"ngIf"],[1,"text-segment",3,"innerHtml"],[3,"variant","enablePopover"],[3,"gene","enablePopover",4,"ngIf"],[3,"gene","enablePopover"]],template:function(e,R){1&e&&t.YNc(0,k,3,2,"ng-container",0),2&e&&t.Q6J("ngForOf",R.nameSegments)},dependencies:[i.sg,i.O5,v.I,d.H,L],styles:[".text-segment[_ngcontent-%COMP%]{display:inline-block;margin-right:8px;font-weight:700;color:#0009;font-size:14px;line-height:12px}"]}),w})()},9858:(It,be,a)=>{a.d(be,{r:()=>$});var t=a(6814),i=a(7528),v=a(5956),d=a(5695),s=a(551),L=a(5879);let j=(()=>{class I{}return I.\u0275fac=function(F){return new(F||I)},I.\u0275mod=L.oAB({type:I}),I.\u0275inj=L.cJS({imports:[t.ez]}),I})(),$=(()=>{class I{}return I.\u0275fac=function(F){return new(F||I)},I.\u0275mod=L.oAB({type:I}),I.\u0275inj=L.cJS({imports:[t.ez,d.X,s.PV,i.Q,v.U,j]}),I})()},2606:(It,be,a)=>{a.d(be,{p:()=>re});var t=a(8130),i=a(2023),v=a(5879),d=a(6814),s=a(4190),L=a(5695),j=a(7417),$=a(551),I=a(156),S=a(5869);function F(ae,Q){}function k(ae,Q){if(1&ae&&(v.ynx(0),v.TgZ(1,"a",5),v.YNc(2,F,0,0,"ng-template",6),v.qZA(),v.BQk()),2&ae){const fe=v.oxw(),ue=v.MAs(2);v.xp6(1),v.Q6J("routerLink",fe.molecularProfile.link),v.xp6(1),v.Q6J("ngTemplateOutlet",ue)}}function U(ae,Q){}const w=function(ae){return{deprecated:ae}};function M(ae,Q){if(1&ae){const fe=v.EpF();v.TgZ(0,"nz-tag",9),v.NdJ("nzOnClose",function(ge){v.CHM(fe);const Se=v.oxw(2);return v.KtG(Se.itemClosed(ge))}),v.YNc(1,U,0,0,"ng-template",6),v.qZA()}if(2&ae){v.oxw();const fe=v.MAs(2),ue=v.oxw(),ge=v.MAs(8);v.Q6J("ngClass",v.VKq(5,w,ue.molecularProfile.deprecated))("nzPopoverMouseEnterDelay",ue.onCloseClicked?0:.5)("nzPopoverContent",fe)("nzMode",ue.onCloseClicked?"closeable":"default"),v.xp6(1),v.Q6J("ngTemplateOutlet",ge)}}function e(ae,Q){if(1&ae&&v._UZ(0,"cvc-molecular-profile-popover",11),2&ae){const fe=v.oxw(3);v.Q6J("molecularProfileId",fe.molecularProfile.id)}}function R(ae,Q){if(1&ae&&v.YNc(0,e,1,1,"cvc-molecular-profile-popover",10),2&ae){const fe=v.oxw(2);v.Q6J("ngIf",fe.enablePopover)}}function pe(ae,Q){if(1&ae&&(v.YNc(0,M,2,7,"nz-tag",7),v.YNc(1,R,1,1,"ng-template",null,8,v.W1O)),2&ae){const fe=v.oxw(),ue=v.MAs(4);v.Q6J("ngIf",fe.enablePopover)("ngIfElse",ue)}}function me(ae,Q){}function Z(ae,Q){if(1&ae){const fe=v.EpF();v.TgZ(0,"nz-tag",12),v.NdJ("nzOnClose",function(ge){v.CHM(fe);const Se=v.oxw();return v.KtG(Se.itemClosed(ge))}),v.YNc(1,me,0,0,"ng-template",6),v.qZA()}if(2&ae){const fe=v.oxw(),ue=v.MAs(8);v.Q6J("nzMode",fe.onCloseClicked?"closeable":"default")("ngClass",v.VKq(3,w,fe.molecularProfile.deprecated)),v.xp6(1),v.Q6J("ngTemplateOutlet",ue)}}function A(ae,Q){}function V(ae,Q){if(1&ae&&v.YNc(0,A,0,0,"ng-template",6),2&ae){v.oxw();const fe=v.MAs(2);v.Q6J("ngTemplateOutlet",fe)}}function O(ae,Q){if(1&ae&&(v.ynx(0),v._uU(1),v.ALo(2,"truncate"),v.BQk()),2&ae){const fe=v.oxw(2);v.xp6(1),v.hij(" ",v.xi3(2,1,fe.molecularProfile.name,fe.truncationLength)," ")}}function P(ae,Q){if(1&ae&&v._uU(0),2&ae){const fe=v.oxw(2);v.hij(" ",fe.molecularProfile.name," ")}}function D(ae,Q){if(1&ae&&(v._UZ(0,"i",13),v.YNc(1,O,3,4,"ng-container",0),v.YNc(2,P,1,1,"ng-template",null,14,v.W1O)),2&ae){const fe=v.MAs(3),ue=v.oxw();v.Q6J("nzTwotoneColor",ue.iconColor),v.xp6(1),v.Q6J("ngIf",ue.truncateLongName)("ngIfElse",fe)}}let re=(()=>{class ae extends t.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1,this.truncationLength=20,this.iconColor=(0,i.f)("MolecularProfile")}idFunction(){return this.molecularProfile.id}ngOnInit(){if(super.ngOnInit(),void 0===this.molecularProfile)throw new Error("cvc-molecular-profile-tag requires LinkableMolecularProfile input, none supplied.");"number"==typeof this.truncateLongName&&(this.truncationLength=this.truncateLongName),"segments"in this.molecularProfile&&(this.molecularProfile.name=this.molecularProfile.segments.map(fe=>"text"in fe?fe.text:fe.name).join(" "))}}return ae.\u0275fac=function(fe){return new(fe||ae)},ae.\u0275cmp=v.Xpm({type:ae,selectors:[["cvc-molecular-profile-tag"]],inputs:{molecularProfile:"molecularProfile",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[v.qOj],decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["noPopover",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverTrigger","hover",3,"ngClass","nzPopoverMouseEnterDelay","nzPopoverContent","nzMode","nzOnClose",4,"ngIf","ngIfElse"],["popoverContent",""],["nz-popover","","nzPopoverTrigger","hover",3,"ngClass","nzPopoverMouseEnterDelay","nzPopoverContent","nzMode","nzOnClose"],[3,"molecularProfileId",4,"ngIf"],[3,"molecularProfileId"],[3,"nzMode","ngClass","nzOnClose"],["nz-icon","","nzType","civic-molecularprofile","nzTheme","twotone",3,"nzTwotoneColor"],["fullName",""]],template:function(fe,ue){if(1&fe&&(v.YNc(0,k,3,2,"ng-container",0),v.YNc(1,pe,3,2,"ng-template",null,1,v.W1O),v.YNc(3,Z,2,5,"ng-template",null,2,v.W1O),v.YNc(5,V,1,1,"ng-template",null,3,v.W1O),v.YNc(7,D,4,3,"ng-template",null,4,v.W1O)),2&fe){const ge=v.MAs(6);v.Q6J("ngIf",ue.linked)("ngIfElse",ge)}},dependencies:[d.mk,d.O5,d.tP,s.rH,L.j,j.lU,$.Ls,I._,S.W],styles:["[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.submitted, [_nghost-%COMP%]     nz-tag.accepted, [_nghost-%COMP%]     nz-tag.deprecated{border-right-width:2px}[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.deprecated{border-color:#e6e6e6;background-color:#fff;color:#999999d9}[_nghost-%COMP%]     nz-tag.submitted{border-color:#ffe58f}[_nghost-%COMP%]     nz-tag.accepted{border-color:#b7eb8f}[_nghost-%COMP%]{display:inline-block}"],changeDetection:0}),ae})()},8527:(It,be,a)=>{a.d(be,{u:()=>I});var t=a(6814),i=a(4190),v=a(5695),d=a(551),s=a(7417),L=a(2524),j=a(2064),$=a(5879);let I=(()=>{class S{}return S.\u0275fac=function(k){return new(k||S)},S.\u0275mod=$.oAB({type:S}),S.\u0275inj=$.cJS({imports:[t.ez,i.Bz,v.X,s.$6,d.PV,L.s,j._]}),S})()},4402:(It,be,a)=>{a.d(be,{S:()=>M});var t=a(5676),i=a(7398),v=a(2181),d=a(5879),s=a(313),L=a(6814),j=a(551),$=a(2962),I=a(3317),S=a(8125),F=a(8091);function k(e,R){if(1&e&&(d._UZ(0,"i",9),d._uU(1)),2&e){const pe=d.oxw().ngIf;d.xp6(1),d.hij(" ",pe.name," ")}}function U(e,R){if(1&e&&(d.TgZ(0,"cvc-link-tag",10),d._uU(1),d.qZA()),2&e){const pe=d.oxw().ngIf;d.Q6J("href",pe.url),d.xp6(1),d.hij(" ",pe.hpoId," ")}}function w(e,R){if(1&e&&(d.ynx(0),d.TgZ(1,"nz-card",2),d.YNc(2,k,2,1,"ng-template",null,3,d.W1O),d.YNc(4,U,2,2,"ng-template",null,4,d.W1O),d.TgZ(6,"nz-descriptions",5)(7,"nz-descriptions-item",6),d._uU(8),d.qZA(),d.TgZ(9,"nz-descriptions-item",7),d._uU(10),d.qZA(),d.TgZ(11,"nz-descriptions-item",8),d._uU(12),d.qZA()()(),d.BQk()),2&e){const pe=R.ngIf,me=d.MAs(3),Z=d.MAs(5);d.xp6(1),d.Q6J("nzTitle",me)("nzExtra",Z),d.xp6(5),d.Q6J("nzColumn",2),d.xp6(2),d.hij(" ",pe.assertionCount," "),d.xp6(2),d.hij(" ",pe.evidenceItemCount," "),d.xp6(2),d.hij(" ",pe.molecularProfileCount," ")}}let M=(()=>{class e{constructor(pe){this.gql=pe}ngOnInit(){if(null==this.phenotypeId)throw new Error("cvc-phenotype-popover requires valid phenotypeId input.");this.phenotype$=this.gql.watch({phenotypeId:this.phenotypeId}).valueChanges.pipe((0,i.U)(({data:pe})=>pe?.phenotypePopover),(0,v.h)(t.ep))}}return e.\u0275fac=function(pe){return new(pe||e)(d.Y36(s.OHm))},e.\u0275cmp=d.Xpm({type:e,selectors:[["cvc-phenotype-popover"]],inputs:{phenotypeId:"phenotypeId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["linkout",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Assertions","nzSpan","2"],["nzTitle","Evidence","nzSpan","2"],["nzTitle","Molecular Profiles","nzSpan","2"],["nz-icon","","nzType","civic-phenotype","nzTheme","twotone","nzTwotoneColor","#2A63B6"],["tooltip","View in the Human Phenotype Ontology",3,"href"]],template:function(pe,me){1&pe&&(d.TgZ(0,"div",0),d.YNc(1,w,13,6,"ng-container",1),d.ALo(2,"ngrxPush"),d.qZA()),2&pe&&(d.xp6(1),d.Q6J("ngIf",d.lcZ(2,1,me.phenotype$)))},dependencies:[L.O5,j.Ls,$.bd,I.l,S.R7,S.uj,F.fM],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),e})()},1332:(It,be,a)=>{a.d(be,{I:()=>j});var t=a(6814),i=a(2962),v=a(6067),d=a(8125),s=a(551),L=a(5879);let j=(()=>{class ${}return $.\u0275fac=function(S){return new(S||$)},$.\u0275mod=L.oAB({type:$}),$.\u0275inj=L.cJS({imports:[t.ez,s.PV,i.vh,v.X,d.q6]}),$})()},3897:(It,be,a)=>{a.d(be,{i:()=>Z});var t=a(8130),i=a(5879),v=a(6814),d=a(4190),s=a(5695),L=a(7417),j=a(551),$=a(4402),I=a(2616);function S(A,V){}function F(A,V){if(1&A&&(i.ynx(0),i.TgZ(1,"a",5),i.YNc(2,S,0,0,"ng-template",6),i.qZA(),i.BQk()),2&A){const O=i.oxw(),P=i.MAs(2);i.xp6(1),i.Q6J("routerLink",O.phenotype.link),i.xp6(1),i.Q6J("ngTemplateOutlet",P)}}function k(A,V){}function U(A,V){if(1&A&&i._UZ(0,"cvc-phenotype-popover",9),2&A){const O=i.oxw(2);i.Q6J("phenotypeId",O.phenotype.id)}}function w(A,V){if(1&A){const O=i.EpF();i.TgZ(0,"nz-tag",7),i.NdJ("nzOnClose",function(D){i.CHM(O);const re=i.oxw();return i.KtG(re.itemClosed(D))}),i.YNc(1,k,0,0,"ng-template",6),i.qZA(),i.YNc(2,U,1,1,"ng-template",null,8,i.W1O)}if(2&A){const O=i.MAs(3),P=i.oxw(),D=i.MAs(8);i.Q6J("nzPopoverMouseEnterDelay",P.onCloseClicked?0:.5)("nzPopoverContent",O)("nzPopoverTrigger",P.enablePopover?"hover":null)("nzMode",P.onCloseClicked?"closeable":"default"),i.xp6(1),i.Q6J("ngTemplateOutlet",D)}}function M(A,V){}function e(A,V){if(1&A){const O=i.EpF();i.TgZ(0,"nz-tag",10),i.NdJ("nzOnClose",function(D){i.CHM(O);const re=i.oxw();return i.KtG(re.itemClosed(D))}),i.YNc(1,M,0,0,"ng-template",6),i.qZA()}if(2&A){const O=i.oxw(),P=i.MAs(8);i.Q6J("nzMode",O.onCloseClicked?"closeable":"default"),i.xp6(1),i.Q6J("ngTemplateOutlet",P)}}function R(A,V){}function pe(A,V){if(1&A&&i.YNc(0,R,0,0,"ng-template",6),2&A){i.oxw();const O=i.MAs(2);i.Q6J("ngTemplateOutlet",O)}}function me(A,V){if(1&A&&(i._UZ(0,"i",11),i.ALo(1,"entityColor"),i._uU(2)),2&A){const O=i.oxw();i.Q6J("nzTwotoneColor",i.lcZ(1,2,"Phenotype")),i.xp6(2),i.hij(" ",O.phenotype.name,"\n")}}let Z=(()=>{class A extends t.a{constructor(){super(...arguments),this.enablePopover=!0}set phenotype(O){if(!O)throw new Error("phenotype-tag phentype input requires LinkablePhenotype.");this._phenotype=O}get phenotype(){return this._phenotype}idFunction(){return this.phenotype.id}}return A.\u0275fac=function(){let V;return function(P){return(V||(V=i.n5z(A)))(P||A)}}(),A.\u0275cmp=i.Xpm({type:A,selectors:[["cvc-phenotype-tag"]],inputs:{phenotype:"phenotype",enablePopover:"enablePopover"},features:[i.qOj],decls:9,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["noPopover",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["phenotypePopover",""],[3,"phenotypeId"],[3,"nzMode","nzOnClose"],["nz-icon","","nzTheme","twotone","nzType","civic-phenotype",3,"nzTwotoneColor"]],template:function(O,P){if(1&O&&(i.YNc(0,F,3,2,"ng-container",0),i.YNc(1,w,4,5,"ng-template",null,1,i.W1O),i.YNc(3,e,2,2,"ng-template",null,2,i.W1O),i.YNc(5,pe,1,1,"ng-template",null,3,i.W1O),i.YNc(7,me,3,4,"ng-template",null,4,i.W1O)),2&O){const D=i.MAs(6);i.Q6J("ngIf",P.linked)("ngIfElse",D)}},dependencies:[v.O5,v.tP,d.rH,s.j,L.lU,j.Ls,$.S,I.a],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),A})()},3043:(It,be,a)=>{a.d(be,{y:()=>I});var t=a(6814),i=a(4190),v=a(2524),d=a(551),s=a(7417),L=a(5695),j=a(1332),$=a(5879);let I=(()=>{class S{}return S.\u0275fac=function(k){return new(k||S)},S.\u0275mod=$.oAB({type:S}),S.\u0275inj=$.cJS({imports:[t.ez,i.Bz,L.X,s.$6,d.PV,j.I,v.s]}),S})()},3103:(It,be,a)=>{a.d(be,{b:()=>I});var t=a(2023),i=a(5879),v=a(6814);const d=function(S){return{background:S}};function s(S,F){if(1&S&&i._UZ(0,"div",3),2&S){const k=i.oxw();i.Q6J("ngStyle",i.VKq(1,d,k.flagColor))}}function L(S,F){if(1&S&&i._UZ(0,"div",4),2&S){const k=i.oxw();i.Q6J("ngStyle",i.VKq(1,d,k.entityColor))}}function j(S,F){if(1&S&&i._UZ(0,"div",5),2&S){const k=i.oxw();i.Q6J("ngStyle",i.VKq(1,d,k.entityColor))}}const $=["*"];let I=(()=>{class S{constructor(){this.hasRevisions=!1,this.flagged=!1,this.hasComments=!1,this.entityColor="#AAA",this.flagColor=(0,t.f)("Flag")}}return S.\u0275fac=function(k){return new(k||S)},S.\u0275cmp=i.Xpm({type:S,selectors:[["cvc-icon-badges"]],inputs:{hasRevisions:"hasRevisions",flagged:"flagged",hasComments:"hasComments",entityColor:"entityColor"},ngContentSelectors:$,decls:4,vars:3,consts:[["class","cvc-badge badge-flags",3,"ngStyle",4,"ngIf"],["class","cvc-badge badge-revisions",3,"ngStyle",4,"ngIf"],["class","cvc-badge badge-comments",3,"ngStyle",4,"ngIf"],[1,"cvc-badge","badge-flags",3,"ngStyle"],[1,"cvc-badge","badge-revisions",3,"ngStyle"],[1,"cvc-badge","badge-comments",3,"ngStyle"]],template:function(k,U){1&k&&(i.F$t(),i.Hsn(0),i.YNc(1,s,1,3,"div",0),i.YNc(2,L,1,3,"div",1),i.YNc(3,j,1,3,"div",2)),2&k&&(i.xp6(1),i.Q6J("ngIf",U.flagged),i.xp6(1),i.Q6J("ngIf",U.hasRevisions),i.xp6(1),i.Q6J("ngIf",U.hasComments))},dependencies:[v.O5,v.PC],styles:["[_nghost-%COMP%]{display:inline-block;position:relative;line-height:1}.cvc-badge[_ngcontent-%COMP%]{position:absolute;z-index:auto;width:4px;min-width:4px;height:4px;border-radius:100%;box-shadow:0 0 0 1px #fff;background:#aaa}.cvc-badge.badge-revisions[_ngcontent-%COMP%]{top:.5px;right:.5px;transform:translate(50%,-50%)}.cvc-badge.badge-flags[_ngcontent-%COMP%]{top:.5px;left:.5px;transform:translate(-50%,-50%)}.cvc-badge.badge-comments[_ngcontent-%COMP%]{bottom:.5px;right:.5px;transform:translate(50%,50%)}"],changeDetection:0}),S})()},3146:(It,be,a)=>{a.d(be,{C:()=>d});var t=a(6814),i=a(2524),v=a(5879);let d=(()=>{class s{}return s.\u0275fac=function(j){return new(j||s)},s.\u0275mod=v.oAB({type:s}),s.\u0275inj=v.cJS({imports:[t.ez,i.s]}),s})()},3317:(It,be,a)=>{a.d(be,{l:()=>L});var t=a(5879),i=a(6109),v=a(5695),d=a(551);const s=["*"];let L=(()=>{class j{set href(I){if(!I)throw new Error("link-tag link Input requires string.");this._href=I}get href(){return this._href?this._href:""}}return j.\u0275fac=function(I){return new(I||j)},j.\u0275cmp=t.Xpm({type:j,selectors:[["cvc-link-tag"]],inputs:{href:"href",tooltip:"tooltip",iconName:"iconName"},ngContentSelectors:s,decls:4,vars:4,consts:[["target","_blank",3,"href"],["nzColor","default","nz-tooltip","",3,"nzTooltipTitle","nzTooltipTrigger"],["nz-icon","","nzTheme","outline",3,"nzType"]],template:function(I,S){1&I&&(t.F$t(),t.TgZ(0,"a",0)(1,"nz-tag",1),t._UZ(2,"i",2),t.Hsn(3),t.qZA()()),2&I&&(t.Q6J("href",S.href,t.LSH),t.xp6(1),t.Q6J("nzTooltipTitle",S.tooltip)("nzTooltipTrigger",S.tooltip?"hover":null),t.xp6(1),t.Q6J("nzType",S.iconName?S.iconName:"link"))},dependencies:[i.SY,v.j,d.Ls],encapsulation:2}),j})()},6067:(It,be,a)=>{a.d(be,{X:()=>L});var t=a(6814),i=a(6109),v=a(5695),d=a(551),s=a(5879);let L=(()=>{class j{}return j.\u0275fac=function(I){return new(I||j)},j.\u0275mod=s.oAB({type:j}),j.\u0275inj=s.cJS({imports:[t.ez,i.cg,v.X,d.PV]}),j})()},9154:(It,be,a)=>{a.d(be,{y:()=>s});var t=a(6814),i=a(551),v=a(5695),d=a(5879);let s=(()=>{class L{}return L.\u0275fac=function($){return new($||L)},L.\u0275mod=d.oAB({type:L}),L.\u0275inj=d.cJS({imports:[t.ez,v.X,i.PV]}),L})()},3489:(It,be,a)=>{a.d(be,{H:()=>S});var t=a(5619),i=a(1687),v=a(1374),d=a(5879),s=a(6814),L=a(5695),j=a(551),$=a(8091);function I(F,k){1&F&&(d.TgZ(0,"nz-tag",1),d._UZ(1,"i",2),d.TgZ(2,"span"),d._uU(3,"End of results reached"),d.qZA()())}let S=(()=>{class F{set cvcShowTag(U){void 0!==U&&U&&this.showTag()}constructor(U){this.cdr=U,this.showTag$=new t.X(!1)}showTag(){!1===this.showTag$.getValue()&&(this.showTag$.next(!0),(0,i.F)(3e3).pipe((0,v.P)()).subscribe(()=>{this.showTag$.next(!1),this.cdr.detectChanges()}))}}return F.\u0275fac=function(U){return new(U||F)(d.Y36(d.sBO))},F.\u0275cmp=d.Xpm({type:F,selectors:[["cvc-no-more-rows"]],inputs:{cvcShowTag:"cvcShowTag"},decls:2,vars:3,consts:[["nzColor","warning",4,"ngIf"],["nzColor","warning"],["nz-icon","","nzType","exclamation-circle"]],template:function(U,w){1&U&&(d.YNc(0,I,4,0,"nz-tag",0),d.ALo(1,"ngrxPush")),2&U&&d.Q6J("ngIf",d.lcZ(1,1,w.showTag$))},dependencies:[s.O5,L.j,j.Ls,$.fM],encapsulation:2,changeDetection:0}),F})()},2384:(It,be,a)=>{a.d(be,{h:()=>F});var t=a(5879),i=a(6814),v=a(5695),d=a(551);function s(k,U){1&k&&t._UZ(0,"i",7)}function L(k,U){1&k&&t._UZ(0,"i",8)}function j(k,U){1&k&&t._UZ(0,"i",9)}function $(k,U){1&k&&t._UZ(0,"i",10)}function I(k,U){1&k&&t._UZ(0,"i",10)}function S(k,U){if(1&k&&(t.TgZ(0,"nz-tag",1),t.ynx(1,2),t.YNc(2,s,1,0,"i",3),t.YNc(3,L,1,0,"i",4),t.YNc(4,j,1,0,"i",5),t.YNc(5,$,1,0,"i",6),t.YNc(6,I,1,0,"i",6),t.BQk(),t._uU(7),t.ALo(8,"titlecase"),t.qZA()),2&k){const w=t.oxw();t.Q6J("nzColor",w.tagStatus),t.xp6(1),t.Q6J("ngSwitch",w.tagStatus),t.xp6(1),t.Q6J("ngSwitchCase","success"),t.xp6(1),t.Q6J("ngSwitchCase","error"),t.xp6(1),t.Q6J("ngSwitchCase","warning"),t.xp6(1),t.Q6J("ngSwitchCase","processing"),t.xp6(1),t.Q6J("ngSwitchCase","default"),t.xp6(1),t.hij(" ",t.lcZ(8,8,w.status),"\n")}}let F=(()=>{class k{constructor(){this.statusColorMap={ACCEPTED:"success",REJECTED:"error",SUBMITTED:"warning",NEW:"processing",SUPERSEDED:"default",OPEN:"error",RESOLVED:"default"}}set status(w){this._status=w,w&&(this.tagStatus=this.statusColorMap[w])}get status(){return this._status}ngOnInit(){if(void 0===this.status)throw new Error("Must pass a valid EvidenceStatus or RevisionStatus to cvc-status-tag component")}}return k.\u0275fac=function(w){return new(w||k)},k.\u0275cmp=t.Xpm({type:k,selectors:[["cvc-status-tag"]],inputs:{status:"status"},decls:1,vars:1,consts:[[3,"nzColor",4,"ngIf"],[3,"nzColor"],[3,"ngSwitch"],["nz-icon","","nzType","check-circle",4,"ngSwitchCase"],["nz-icon","","nzType","close-circle",4,"ngSwitchCase"],["nz-icon","","nzType","exclamation-circle",4,"ngSwitchCase"],["nz-icon","",4,"ngSwitchCase"],["nz-icon","","nzType","check-circle"],["nz-icon","","nzType","close-circle"],["nz-icon","","nzType","exclamation-circle"],["nz-icon",""]],template:function(w,M){1&w&&t.YNc(0,S,9,10,"nz-tag",0),2&w&&t.Q6J("ngIf",M.tagStatus)},dependencies:[i.O5,i.RF,i.n9,v.j,d.Ls,i.rS],encapsulation:2}),k})()},2655:(It,be,a)=>{a.d(be,{x:()=>s});var t=a(6814),i=a(5695),v=a(551),d=a(5879);let s=(()=>{class L{}return L.\u0275fac=function($){return new($||L)},L.\u0275mod=d.oAB({type:L}),L.\u0275inj=d.cJS({imports:[t.ez,i.X,v.PV]}),L})()},1887:(It,be,a)=>{a.d(be,{$:()=>v});var t=a(5879);const i=["*"];let v=(()=>{class d{constructor(){}ngOnInit(){}}return d.\u0275fac=function(L){return new(L||d)},d.\u0275cmp=t.Xpm({type:d,selectors:[["cvc-tag-list"]],hostVars:4,hostBindings:function(L,j){2&L&&t.ekj("xs","xs"===j.size||!j.size)("sm","sm"===j.size)},inputs:{size:"size"},ngContentSelectors:i,decls:2,vars:0,consts:[[1,"tag-list"]],template:function(L,j){1&L&&(t.F$t(),t.TgZ(0,"div",0),t.Hsn(1),t.qZA())},styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .tag-list[_ngcontent-%COMP%]    >*{display:inline-block}[_nghost-%COMP%]   .tag-list[_ngcontent-%COMP%]    >*:last-child{margin-right:-8px}.xs[_nghost-%COMP%]{margin-bottom:-4px}.xs[_nghost-%COMP%]   .tag-list[_ngcontent-%COMP%]    >*{margin-bottom:4px}.sm[_nghost-%COMP%]{margin-bottom:-8px}.sm[_nghost-%COMP%]   .tag-list[_ngcontent-%COMP%]    >*{margin-bottom:8px}"],changeDetection:0}),d})()},366:(It,be,a)=>{a.d(be,{$:()=>v});var t=a(6814),i=a(5879);let v=(()=>{class d{}return d.\u0275fac=function(L){return new(L||d)},d.\u0275mod=i.oAB({type:d}),d.\u0275inj=i.cJS({imports:[t.ez]}),d})()},1813:(It,be,a)=>{a.d(be,{p:()=>Z});var t=a(5676),i=a(7398),v=a(2181),d=a(5879),s=a(313),L=a(6814),j=a(551),$=a(2962),I=a(8125),S=a(3317),F=a(1887),k=a(3369),U=a(8091);function w(A,V){if(1&A&&(d._UZ(0,"i",12),d._uU(1)),2&A){const O=d.oxw().ngIf;d.xp6(1),d.AsE(" ",O.displayType,":\xa0",O.citation," ")}}function M(A,V){if(1&A&&(d.TgZ(0,"cvc-link-tag",13),d._uU(1),d.qZA()),2&A){const O=d.oxw().ngIf;d.Q6J("href",O.sourceUrl)("tooltip","View on "+O.displayType),d.xp6(1),d.hij(" ",O.displayType+":"+O.citationId," ")}}function e(A,V){1&A&&d._UZ(0,"cvc-clinical-trial-tag",15),2&A&&d.Q6J("clinicalTrial",V.$implicit)("enablePopover",!1)}function R(A,V){if(1&A&&(d.ynx(0),d.TgZ(1,"cvc-tag-list"),d.YNc(2,e,1,2,"cvc-clinical-trial-tag",14),d.qZA(),d.BQk()),2&A){const O=d.oxw().ngIf;d.xp6(2),d.Q6J("ngForOf",O.clinicalTrials)}}function pe(A,V){1&A&&d._uU(0," -- ")}function me(A,V){if(1&A&&(d.ynx(0),d.TgZ(1,"nz-card",2),d.YNc(2,w,2,2,"ng-template",null,3,d.W1O),d.YNc(4,M,2,3,"ng-template",null,4,d.W1O),d.TgZ(6,"nz-descriptions",5)(7,"nz-descriptions-item",6),d._uU(8),d.qZA(),d.TgZ(9,"nz-descriptions-item",7),d._uU(10),d.qZA(),d.TgZ(11,"nz-descriptions-item",8),d._uU(12),d.qZA(),d.TgZ(13,"nz-descriptions-item",9),d.YNc(14,R,3,1,"ng-container",10),d.YNc(15,pe,1,0,"ng-template",null,11,d.W1O),d.qZA()()(),d.BQk()),2&A){const O=V.ngIf,P=d.MAs(3),D=d.MAs(5),re=d.MAs(16);d.xp6(1),d.Q6J("nzTitle",P)("nzExtra",D),d.xp6(5),d.Q6J("nzColumn",2),d.xp6(2),d.hij(" ",O.title," "),d.xp6(2),d.hij(" ",O.fullJournalTitle," "),d.xp6(2),d.hij(" ",O.evidenceItemCount," "),d.xp6(2),d.Q6J("ngIf",O.clinicalTrials&&O.clinicalTrials.length>0)("ngIfElse",re)}}let Z=(()=>{class A{constructor(O){this.gql=O}ngOnInit(){if(null==this.sourceId)throw new Error("cvc-source-popover requires valid sourceId input.");this.source$=this.gql.watch({sourceId:this.sourceId}).valueChanges.pipe((0,i.U)(({data:O})=>O?.sourcePopover),(0,v.h)(t.ep))}}return A.\u0275fac=function(O){return new(O||A)(d.Y36(s.TiL))},A.\u0275cmp=d.Xpm({type:A,selectors:[["cvc-source-popover"]],inputs:{sourceId:"sourceId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["linkout",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Title","nzSpan","2"],["nzTitle","Journal","nzSpan","2"],["nzTitle","Evidence","nzSpan","2"],["nzTitle","Clinical Trials:","nzSpan","2"],[4,"ngIf","ngIfElse"],["noTrials",""],["nz-icon","","nzType","civic-source","nzTheme","twotone","nzTwotoneColor","#F9BA45"],[3,"href","tooltip"],[3,"clinicalTrial","enablePopover",4,"ngFor","ngForOf"],[3,"clinicalTrial","enablePopover"]],template:function(O,P){1&O&&(d.TgZ(0,"div",0),d.YNc(1,me,17,8,"ng-container",1),d.ALo(2,"ngrxPush"),d.qZA()),2&O&&(d.xp6(1),d.Q6J("ngIf",d.lcZ(2,1,P.source$)))},dependencies:[L.sg,L.O5,j.Ls,$.bd,I.R7,I.uj,S.l,F.$,k.G,U.fM],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),A})()},6247:(It,be,a)=>{a.d(be,{n:()=>I});var t=a(6814),i=a(2962),v=a(6067),d=a(8125),s=a(366),L=a(4605),j=a(551),$=a(5879);let I=(()=>{class S{}return S.\u0275fac=function(k){return new(k||S)},S.\u0275mod=$.oAB({type:S}),S.\u0275inj=$.cJS({imports:[t.ez,j.PV,i.vh,d.q6,v.X,s.$,L.N]}),S})()},4138:(It,be,a)=>{a.d(be,{T:()=>P});var t=a(8130),i=a(5879),v=a(7023),d=a(6814),s=a(4190),L=a(551),j=a(7417),$=a(5695),I=a(1813),S=a(5869),F=a(2616);function k(D,re){}function U(D,re){if(1&D&&(i.ynx(0),i.TgZ(1,"a",4),i.YNc(2,k,0,0,"ng-template",5),i.qZA(),i.BQk()),2&D){const ae=i.oxw(),Q=i.MAs(2);i.xp6(1),i.Q6J("routerLink",ae.source.link),i.xp6(1),i.Q6J("ngTemplateOutlet",Q)}}function w(D,re){}function M(D,re){if(1&D&&i._UZ(0,"cvc-source-popover",8),2&D){const ae=i.oxw(2);i.Q6J("sourceId",ae.source.id)}}function e(D,re){if(1&D){const ae=i.EpF();i.TgZ(0,"nz-tag",6),i.NdJ("nzPopoverVisibleChange",function(fe){i.CHM(ae);const ue=i.oxw();return i.KtG(ue.popoverVisible=fe)})("nzOnClose",function(fe){i.CHM(ae);const ue=i.oxw();return i.KtG(ue.itemClosed(fe))}),i.YNc(1,w,0,0,"ng-template",5),i.qZA(),i.YNc(2,M,1,1,"ng-template",null,7,i.W1O)}if(2&D){const ae=i.MAs(3),Q=i.oxw(),fe=i.MAs(6);i.Q6J("nzPopoverMouseEnterDelay",Q.onCloseClicked?0:.5)("nzPopoverContent",ae)("nzPopoverTrigger",Q.enablePopover?"hover":null)("nzPopoverVisible",Q.popoverVisible)("nzMode",Q.onCloseClicked?"closeable":"default"),i.xp6(1),i.Q6J("ngTemplateOutlet",fe)}}function R(D,re){}function pe(D,re){if(1&D&&i.YNc(0,R,0,0,"ng-template",5),2&D){i.oxw();const ae=i.MAs(2);i.Q6J("ngTemplateOutlet",ae)}}function me(D,re){if(1&D&&(i.ynx(0),i._uU(1),i.ALo(2,"truncate"),i.BQk()),2&D){const ae=i.oxw(3);i.xp6(1),i.hij(" ",i.xi3(2,1,ae.displayName,50)," ")}}function Z(D,re){if(1&D&&(i.ynx(0),i._uU(1),i.BQk()),2&D){const ae=i.oxw(3);i.xp6(1),i.hij(" ",ae.displayName," ")}}function A(D,re){if(1&D&&(i.ynx(0),i.YNc(1,me,3,4,"ng-container",11),i.YNc(2,Z,2,1,"ng-container",11),i.BQk()),2&D){const ae=i.oxw(2);i.xp6(1),i.Q6J("ngIf",ae.truncateLongName),i.xp6(1),i.Q6J("ngIf",!ae.truncateLongName)}}function V(D,re){if(1&D&&i._uU(0),2&D){const ae=i.oxw(2);i.hij(" SID:",ae.source.id," ")}}function O(D,re){if(1&D&&(i._UZ(0,"i",9),i.ALo(1,"entityColor"),i.YNc(2,A,3,2,"ng-container",0),i.YNc(3,V,1,1,"ng-template",null,10,i.W1O)),2&D){const ae=i.MAs(4),Q=i.oxw();i.Q6J("nzTwotoneColor",i.lcZ(1,3,"Source")),i.xp6(2),i.Q6J("ngIf","normal"===Q.mode)("ngIfElse",ae)}}let P=(()=>{class D extends t.a{set source(ae){if(!ae)throw new Error("source-tag source input requires SourceWithDisplayName or SourceWithCitation.");this._source=ae,this.displayName="displayName"in this.source?this.source.displayName:this.sourceTypeDisplay.transform(this.source.sourceType)+": "+this.source.citation}get source(){return this._source}constructor(ae){super(),this.sourceTypeDisplay=ae,this.enablePopover=!0,this.linked=!0,this.mode="normal",this.truncateLongName=!1}idFunction(){return this.source.id}}return D.\u0275fac=function(ae){return new(ae||D)(i.Y36(v.l))},D.\u0275cmp=i.Xpm({type:D,selectors:[["cvc-source-tag"]],inputs:{source:"source",enablePopover:"enablePopover",linked:"linked",mode:"mode",truncateLongName:"truncateLongName"},features:[i.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzPopoverVisible","nzMode","nzPopoverVisibleChange","nzOnClose"],["sourcePopover",""],[3,"sourceId"],["nz-icon","","nzTheme","twotone","nzType","civic-source",3,"nzTwotoneColor"],["concise",""],[4,"ngIf"]],template:function(ae,Q){if(1&ae&&(i.YNc(0,U,3,2,"ng-container",0),i.YNc(1,e,4,6,"ng-template",null,1,i.W1O),i.YNc(3,pe,1,1,"ng-template",null,2,i.W1O),i.YNc(5,O,5,5,"ng-template",null,3,i.W1O)),2&ae){const fe=i.MAs(4);i.Q6J("ngIf",Q.linked)("ngIfElse",fe)}},dependencies:[d.O5,d.tP,s.rH,L.Ls,j.lU,$.j,I.p,S.W,F.a],styles:["[_nghost-%COMP%]{display:inline-block}"],changeDetection:0}),D})()},8641:(It,be,a)=>{a.d(be,{s:()=>I});var t=a(6814),i=a(7417),v=a(4190),d=a(6247),s=a(5695),L=a(551),j=a(2524),$=a(5879);let I=(()=>{class S{}return S.\u0275fac=function(k){return new(k||S)},S.\u0275mod=$.oAB({type:S}),S.\u0275inj=$.cJS({imports:[t.ez,v.Bz,L.PV,i.$6,s.X,d.n,j.s]}),S})()},96:(It,be,a)=>{a.d(be,{a:()=>P});var t=a(7398),i=a(2181),v=a(5676),d=a(5879),s=a(313),L=a(6814),j=a(2962),$=a(8125),I=a(551),S=a(2392),F=a(5695),k=a(6109),U=a(3317),w=a(8091),M=a(5869);function e(D,re){if(1&D&&(d._UZ(0,"i",12),d._uU(1),d.ALo(2,"truncate")),2&D){const ae=d.oxw().ngIf;d.xp6(1),d.hij(" ",d.xi3(2,1,ae.name,50)," ")}}function R(D,re){if(1&D&&(d.TgZ(0,"cvc-link-tag",14),d._uU(1),d.qZA()),2&D){const ae=d.oxw(2).ngIf;d.Q6J("href",ae.therapyUrl),d.xp6(1),d.hij(" ",ae.ncitId," ")}}function pe(D,re){if(1&D&&d.YNc(0,R,2,2,"cvc-link-tag",13),2&D){const ae=d.oxw().ngIf,Q=d.MAs(7);d.Q6J("ngIf",ae.ncitId)("ngIfElse",Q)}}function me(D,re){1&D&&(d.TgZ(0,"span",15),d._uU(1,"No NCIt ID"),d.qZA())}function Z(D,re){if(1&D&&(d.TgZ(0,"nz-descriptions-item",16),d._uU(1),d.qZA()),2&D){const ae=d.oxw().ngIf;d.xp6(1),d.hij(" ",ae.name," ")}}function A(D,re){if(1&D&&(d.TgZ(0,"nz-tag",19),d._uU(1),d.ALo(2,"truncate"),d.qZA()),2&D){const ae=re.$implicit;d.Q6J("nzTooltipTitle",ae),d.xp6(1),d.Oqu(d.lcZ(2,2,ae))}}function V(D,re){if(1&D&&(d.TgZ(0,"nz-descriptions-item",17),d.YNc(1,A,3,4,"nz-tag",18),d.qZA()),2&D){const ae=d.oxw().ngIf;d.xp6(1),d.Q6J("ngForOf",ae.therapyAliases)}}function O(D,re){if(1&D&&(d.ynx(0),d.TgZ(1,"nz-card",2),d.YNc(2,e,3,4,"ng-template",null,3,d.W1O),d.YNc(4,pe,1,2,"ng-template",null,4,d.W1O),d.YNc(6,me,2,0,"ng-template",null,5,d.W1O),d.TgZ(8,"nz-descriptions",6),d.YNc(9,Z,2,1,"nz-descriptions-item",7),d.YNc(10,V,2,1,"nz-descriptions-item",8),d.TgZ(11,"nz-descriptions-item",9),d._uU(12),d.qZA(),d.TgZ(13,"nz-descriptions-item",10),d._uU(14),d.qZA(),d.TgZ(15,"nz-descriptions-item",11),d._uU(16),d.qZA()()(),d.BQk()),2&D){const ae=re.ngIf,Q=d.MAs(3),fe=d.MAs(5);d.xp6(1),d.Q6J("nzTitle",Q)("nzExtra",fe),d.xp6(7),d.Q6J("nzColumn",2),d.xp6(1),d.Q6J("ngIf",ae.name.length>50),d.xp6(1),d.Q6J("ngIf",ae.therapyAliases.length>0),d.xp6(2),d.hij(" ",ae.assertionCount," "),d.xp6(2),d.hij(" ",ae.evidenceItemCount," "),d.xp6(2),d.hij(" ",ae.molecularProfileCount," ")}}let P=(()=>{class D{constructor(ae){this.gql=ae}ngOnInit(){if(null==this.therapyId)throw new Error("cvc-therapy-popover requires valid therapyId input.");this.therapy$=this.gql.watch({therapyId:this.therapyId}).valueChanges.pipe((0,t.U)(({data:ae})=>ae?.therapyPopover),(0,i.h)(v.ep))}}return D.\u0275fac=function(ae){return new(ae||D)(d.Y36(s.L8L))},D.\u0275cmp=d.Xpm({type:D,selectors:[["cvc-therapy-popover"]],inputs:{therapyId:"therapyId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["linkout",""],["noNcitId",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Name","nzSpan","2",4,"ngIf"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Assertions","nzSpan","2"],["nzTitle","Evidence","nzSpan","2"],["nzTitle","Molecular Profiles","nzSpan","2"],["nz-icon","","nzType","civic-therapy","nzTheme","twotone","nzTwotoneColor","#AC3996"],["tooltip","View on NCI Thesaurus",3,"href",4,"ngIf","ngIfElse"],["tooltip","View on NCI Thesaurus",3,"href"],["nz-typography","","nzType","secondary"],["nzTitle","Name","nzSpan","2"],["nzTitle","Aliases","nzSpan","2"],["nz-tooltip","",3,"nzTooltipTitle",4,"ngFor","ngForOf"],["nz-tooltip","",3,"nzTooltipTitle"]],template:function(ae,Q){1&ae&&(d.TgZ(0,"div",0),d.YNc(1,O,17,8,"ng-container",1),d.ALo(2,"ngrxPush"),d.qZA()),2&ae&&(d.xp6(1),d.Q6J("ngIf",d.lcZ(2,1,Q.therapy$)))},dependencies:[L.sg,L.O5,j.bd,$.R7,$.uj,I.Ls,S.ZU,F.j,k.SY,U.l,w.fM,M.W],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),D})()},1207:(It,be,a)=>{a.d(be,{s:()=>k});var t=a(6814),i=a(4190),v=a(2962),d=a(8125),s=a(6067),L=a(551),j=a(2392),$=a(2524),I=a(5695),S=a(6109),F=a(5879);let k=(()=>{class U{}return U.\u0275fac=function(M){return new(M||U)},U.\u0275mod=F.oAB({type:U}),U.\u0275inj=F.cJS({imports:[t.ez,i.Bz,v.vh,d.q6,L.PV,j.ZJ,I.X,S.cg,s.X,$.s]}),U})()},4770:(It,be,a)=>{a.d(be,{T:()=>Z});var t=a(8130),i=a(5879),v=a(6814),d=a(4190),s=a(5695),L=a(7417),j=a(551),$=a(96),I=a(5869);function S(A,V){}function F(A,V){if(1&A&&(i.ynx(0),i.TgZ(1,"a",4),i.YNc(2,S,0,0,"ng-template",5),i.qZA(),i.BQk()),2&A){const O=i.oxw(),P=i.MAs(2);i.xp6(1),i.Q6J("routerLink",O.therapy.link),i.xp6(1),i.Q6J("ngTemplateOutlet",P)}}function k(A,V){}function U(A,V){if(1&A&&i._UZ(0,"cvc-therapy-popover",8),2&A){const O=i.oxw(2);i.Q6J("therapyId",O.therapy.id)}}function w(A,V){if(1&A){const O=i.EpF();i.TgZ(0,"nz-tag",6),i.NdJ("nzOnClose",function(D){i.CHM(O);const re=i.oxw();return i.KtG(re.itemClosed(D))}),i.YNc(1,k,0,0,"ng-template",5),i.qZA(),i.YNc(2,U,1,1,"ng-template",null,7,i.W1O)}if(2&A){const O=i.MAs(3),P=i.oxw(),D=i.MAs(6);i.Q6J("nzPopoverMouseEnterDelay",P.onCloseClicked?0:.5)("nzPopoverContent",O)("nzPopoverTrigger",P.enablePopover?"hover":null)("nzMode",P.onCloseClicked?"closeable":"default"),i.xp6(1),i.Q6J("ngTemplateOutlet",D)}}function M(A,V){}function e(A,V){if(1&A&&i.YNc(0,M,0,0,"ng-template",5),2&A){i.oxw();const O=i.MAs(2);i.Q6J("ngTemplateOutlet",O)}}function R(A,V){if(1&A&&(i.ynx(0),i._uU(1),i.ALo(2,"truncate"),i.BQk()),2&A){const O=i.oxw(2);i.xp6(1),i.hij(" ",i.xi3(2,1,O.therapy.name,21)," ")}}function pe(A,V){if(1&A&&i._uU(0),2&A){const O=i.oxw(2);i.hij(" ",O.therapy.name," ")}}function me(A,V){if(1&A&&(i._UZ(0,"i",9),i.YNc(1,R,3,4,"ng-container",0),i.YNc(2,pe,1,1,"ng-template",null,10,i.W1O)),2&A){const O=i.MAs(3),P=i.oxw();i.xp6(1),i.Q6J("ngIf",P.truncateLongName)("ngIfElse",O)}}let Z=(()=>{class A extends t.a{constructor(){super(...arguments),this.enablePopover=!0,this.truncateLongName=!1}set therapy(O){if(!O)throw new Error("therapy-tag Input requires LinkableTherapy.");this._therapy=O}get therapy(){return this._therapy}idFunction(){return this.therapy.id}}return A.\u0275fac=function(){let V;return function(P){return(V||(V=i.n5z(A)))(P||A)}}(),A.\u0275cmp=i.Xpm({type:A,selectors:[["cvc-therapy-tag"]],inputs:{therapy:"therapy",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[i.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["therapyPopover",""],[3,"therapyId"],["nz-icon","","nzType","civic-therapy","nzTheme","twotone","nzTwotoneColor","#AC3996"],["fullName",""]],template:function(O,P){if(1&O&&(i.YNc(0,F,3,2,"ng-container",0),i.YNc(1,w,4,5,"ng-template",null,1,i.W1O),i.YNc(3,e,1,1,"ng-template",null,2,i.W1O),i.YNc(5,me,4,2,"ng-template",null,3,i.W1O)),2&O){const D=i.MAs(4);i.Q6J("ngIf",P.linked)("ngIfElse",D)}},dependencies:[v.O5,v.tP,d.rH,s.j,L.lU,j.Ls,$.a,I.W],encapsulation:2,changeDetection:0}),A})()},6061:(It,be,a)=>{a.d(be,{N:()=>I});var t=a(6814),i=a(4190),v=a(5695),d=a(7417),s=a(551),L=a(2524),j=a(1207),$=a(5879);let I=(()=>{class S{}return S.\u0275fac=function(k){return new(k||S)},S.\u0275mod=$.oAB({type:S}),S.\u0275inj=$.cJS({imports:[t.ez,i.Bz,v.X,d.$6,s.PV,L.s,j.s]}),S})()},8545:(It,be,a)=>{a.d(be,{m:()=>ae});var t=a(5676),i=a(7398),v=a(2181),d=a(5879),s=a(313),L=a(6814),j=a(4190),$=a(2962),I=a(95),S=a(8125),F=a(5695),k=a(551),U=a(2574),w=a(4121),M=a(3317),e=a(8091),R=a(2616);function pe(Q,fe){if(1&Q&&(d._UZ(0,"i",13),d.ALo(1,"entityColor"),d._uU(2)),2&Q){const ue=d.oxw().ngIf;d.Q6J("nzTwotoneColor",d.lcZ(1,2,"Variant")),d.xp6(2),d.hij(" ",ue.name," ")}}function me(Q,fe){if(1&Q&&d._UZ(0,"cvc-gene-tag",14),2&Q){const ue=d.oxw().ngIf;d.Q6J("enablePopover",!1)("gene",ue.gene)}}function Z(Q,fe){if(1&Q&&(d.TgZ(0,"nz-tag"),d._uU(1),d.qZA()),2&Q){const ue=fe.$implicit;d.xp6(1),d.Oqu(ue)}}function A(Q,fe){if(1&Q&&(d.TgZ(0,"nz-descriptions-item",15),d.YNc(1,Z,2,1,"nz-tag",16),d.qZA()),2&Q){const ue=d.oxw().ngIf;d.xp6(1),d.Q6J("ngForOf",ue.variantAliases)}}function V(Q,fe){if(1&Q&&(d.TgZ(0,"nz-descriptions-item",17)(1,"cvc-link-tag",18),d._uU(2),d.qZA()()),2&Q){const ue=d.oxw().ngIf;d.xp6(1),d.MGl("href","https://reg.genome.network/allele/",ue.alleleRegistryId,".html"),d.xp6(1),d.hij(" ",ue.alleleRegistryId," ")}}function O(Q,fe){if(1&Q&&(d.TgZ(0,"a",19)(1,"nz-tag",20),d._UZ(2,"i",21),d._uU(3),d.qZA()()),2&Q){const ue=d.oxw().ngIf;d.MGl("routerLink","/variants/",ue.id,"/flags"),d.xp6(3),d.hij(" Flags (",ue.flags.totalCount,") ")}}function P(Q,fe){if(1&Q&&(d.TgZ(0,"a",19)(1,"nz-tag",22),d._UZ(2,"i",23),d._uU(3),d.qZA()()),2&Q){const ue=d.oxw().ngIf;d.MGl("routerLink","/variants/",ue.id,"/revisions"),d.xp6(3),d.hij(" Revisions (",ue.revisions.totalCount,") ")}}function D(Q,fe){if(1&Q&&(d.TgZ(0,"a",19)(1,"nz-tag",24),d._UZ(2,"i",25),d._uU(3),d.qZA()()),2&Q){const ue=d.oxw().ngIf;d.MGl("routerLink","/variants/",ue.id,"/comments"),d.xp6(3),d.hij(" Comments (",ue.comments.totalCount,") ")}}function re(Q,fe){if(1&Q&&(d.ynx(0),d.TgZ(1,"nz-card",2),d.YNc(2,pe,3,4,"ng-template",null,3,d.W1O),d.YNc(4,me,1,2,"ng-template",null,4,d.W1O),d.TgZ(6,"nz-descriptions",5),d.YNc(7,A,2,1,"nz-descriptions-item",6),d.YNc(8,V,3,2,"nz-descriptions-item",7),d.TgZ(9,"nz-descriptions-item",8),d._uU(10),d.qZA()(),d.TgZ(11,"nz-row",9)(12,"nz-col",10)(13,"nz-space",11),d.YNc(14,O,4,2,"a",12),d.YNc(15,P,4,2,"a",12),d.YNc(16,D,4,2,"a",12),d.qZA()()()(),d.BQk()),2&Q){const ue=fe.ngIf,ge=d.MAs(3),Se=d.MAs(5);d.xp6(1),d.Q6J("nzTitle",ge)("nzExtra",Se),d.xp6(5),d.Q6J("nzColumn",2),d.xp6(1),d.Q6J("ngIf",ue.variantAliases.length>0),d.xp6(1),d.Q6J("ngIf",ue.alleleRegistryId&&"unregistered"!=ue.alleleRegistryId),d.xp6(2),d.hij(" ",ue.molecularProfiles.totalCount," ")}}let ae=(()=>{class Q{constructor(ue){this.gql=ue}ngOnInit(){if(void 0===this.variantId)throw new Error("Must pass a variant ID into the variant popover component.");this.variant$=this.gql.watch({variantId:this.variantId}).valueChanges.pipe((0,i.U)(({data:ue})=>ue?.variant),(0,v.h)(t.ep))}}return Q.\u0275fac=function(ue){return new(ue||Q)(d.Y36(s.ZYZ))},Q.\u0275cmp=d.Xpm({type:Q,selectors:[["cvc-variant-popover"]],inputs:{variantId:"variantId"},decls:3,vars:3,consts:[["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["cardTitle",""],["gene",""],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Allele Registry ID","nzSpan","2",4,"ngIf"],["nzTitle","Molecular Profiles","nzSpan","2"],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzTheme","twotone","nzType","civic-variant",3,"nzTwotoneColor"],[3,"enablePopover","gene"],["nzTitle","Aliases","nzSpan","2"],[4,"ngFor","ngForOf"],["nzTitle","Allele Registry ID","nzSpan","2"],["tooltip","View on the ClinGen Allele Registry",3,"href"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(ue,ge){1&ue&&(d.TgZ(0,"div",0),d.YNc(1,re,17,6,"ng-container",1),d.ALo(2,"ngrxPush"),d.qZA()),2&ue&&(d.xp6(1),d.Q6J("ngIf",d.lcZ(2,1,ge.variant$)))},dependencies:[L.sg,L.O5,j.rH,$.bd,I.t3,I.SK,S.R7,S.uj,F.j,k.Ls,U.NU,U.$1,w.H,M.l,e.fM,R.a],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]}),Q})()},6446:(It,be,a)=>{a.d(be,{k:()=>U});var t=a(6814),i=a(4190),v=a(2962),d=a(95),s=a(8125),L=a(5695),j=a(551),$=a(2574),I=a(5956),S=a(6067),F=a(2524),k=a(5879);let U=(()=>{class w{}return w.\u0275fac=function(e){return new(e||w)},w.\u0275mod=k.oAB({type:w}),w.\u0275inj=k.cJS({imports:[t.ez,i.Bz,v.vh,d.Jb,s.q6,L.X,j.PV,$.zf,F.s,I.U,S.X]}),w})()},9408:(It,be,a)=>{a.d(be,{I:()=>P});var t=a(8130),i=a(2023),v=a(5879),d=a(6814),s=a(4190),L=a(5695),j=a(7417),$=a(551),I=a(8545),S=a(3103),F=a(5869);function k(D,re){}function U(D,re){if(1&D&&(v.ynx(0),v.TgZ(1,"a",4),v.YNc(2,k,0,0,"ng-template",5),v.qZA(),v.BQk()),2&D){const ae=v.oxw(),Q=v.MAs(2);v.xp6(1),v.Q6J("routerLink",ae.variant.link),v.xp6(1),v.Q6J("ngTemplateOutlet",Q)}}function w(D,re){}function M(D,re){if(1&D&&v._UZ(0,"cvc-variant-popover",9),2&D){const ae=v.oxw(3);v.Q6J("variantId",ae.variant.id)}}function e(D,re){if(1&D&&v.YNc(0,M,1,1,"cvc-variant-popover",8),2&D){const ae=v.oxw(2);v.Q6J("ngIf",ae.enablePopover)}}const R=function(D){return{deprecated:D}};function pe(D,re){if(1&D){const ae=v.EpF();v.TgZ(0,"nz-tag",6),v.NdJ("nzOnClose",function(fe){v.CHM(ae);const ue=v.oxw();return v.KtG(ue.itemClosed(fe))}),v.YNc(1,w,0,0,"ng-template",5),v.qZA(),v.YNc(2,e,1,1,"ng-template",null,7,v.W1O)}if(2&D){const ae=v.MAs(3),Q=v.oxw(),fe=v.MAs(6);v.Q6J("ngClass",v.VKq(6,R,Q.variant.deprecated))("nzPopoverMouseEnterDelay",Q.onCloseClicked?0:.5)("nzPopoverContent",ae)("nzPopoverTrigger",Q.enablePopover?"hover":null)("nzMode",Q.onCloseClicked?"closeable":"default"),v.xp6(1),v.Q6J("ngTemplateOutlet",fe)}}function me(D,re){}function Z(D,re){if(1&D&&v.YNc(0,me,0,0,"ng-template",5),2&D){v.oxw();const ae=v.MAs(2);v.Q6J("ngTemplateOutlet",ae)}}function A(D,re){if(1&D&&(v.ynx(0),v._uU(1),v.ALo(2,"truncate"),v.BQk()),2&D){const ae=v.oxw(2);v.xp6(1),v.hij(" ",v.xi3(2,1,ae.variant.name,20)," ")}}function V(D,re){if(1&D&&v._uU(0),2&D){const ae=v.oxw(2);v.hij(" ",ae.variant.name," ")}}function O(D,re){if(1&D&&(v.TgZ(0,"cvc-icon-badges",10),v._UZ(1,"i",11),v.qZA(),v.YNc(2,A,3,4,"ng-container",0),v.YNc(3,V,1,1,"ng-template",null,12,v.W1O)),2&D){const ae=v.MAs(4),Q=v.oxw();v.Q6J("flagged",Q.variant.flagged)("entityColor",Q.iconColor),v.xp6(1),v.Q6J("nzTwotoneColor",Q.iconColor),v.xp6(1),v.Q6J("ngIf",Q.truncateLongName)("ngIfElse",ae)}}let P=(()=>{class D extends t.a{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1,this.iconColor=(0,i.f)("Variant")}idFunction(){return this.variant.id}ngOnInit(){if(super.ngOnInit(),void 0===this.variant)throw new Error("cvc-variant-tag requires LinkableVariant input, none supplied.")}}return D.\u0275fac=function(ae){return new(ae||D)},D.\u0275cmp=v.Xpm({type:D,selectors:[["cvc-variant-tag"]],inputs:{variant:"variant",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[v.qOj],decls:7,vars:2,consts:[[4,"ngIf","ngIfElse"],["tag",""],["unlinked",""],["tagContent",""],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","",3,"ngClass","nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode","nzOnClose"],["popoverContent",""],[3,"variantId",4,"ngIf"],[3,"variantId"],[3,"flagged","entityColor"],["nz-icon","","nzType","civic-variant","nzTheme","twotone",3,"nzTwotoneColor"],["fullName",""]],template:function(ae,Q){if(1&ae&&(v.YNc(0,U,3,2,"ng-container",0),v.YNc(1,pe,4,8,"ng-template",null,1,v.W1O),v.YNc(3,Z,1,1,"ng-template",null,2,v.W1O),v.YNc(5,O,5,5,"ng-template",null,3,v.W1O)),2&ae){const fe=v.MAs(4);v.Q6J("ngIf",Q.linked)("ngIfElse",fe)}},dependencies:[d.mk,d.O5,d.tP,s.rH,L.j,j.lU,$.Ls,I.m,S.b,F.W],styles:["[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.submitted, [_nghost-%COMP%]     nz-tag.accepted, [_nghost-%COMP%]     nz-tag.deprecated{border-right-width:2px}[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.deprecated{border-color:#e6e6e6;background-color:#fff;color:#999999d9}[_nghost-%COMP%]     nz-tag.submitted{border-color:#ffe58f}[_nghost-%COMP%]     nz-tag.accepted{border-color:#b7eb8f}[_nghost-%COMP%]{display:inline-block}"],changeDetection:0}),D})()},7528:(It,be,a)=>{a.d(be,{Q:()=>S});var t=a(6814),i=a(4190),v=a(5695),d=a(551),s=a(7417),L=a(6446),j=a(2524),$=a(3146),I=a(5879);let S=(()=>{class F{}return F.\u0275fac=function(U){return new(U||F)},F.\u0275mod=I.oAB({type:F}),F.\u0275inj=I.cJS({imports:[t.ez,i.Bz,v.X,s.$6,d.PV,j.s,L.k,$.C]}),F})()},3702:(It,be,a)=>{a.d(be,{t:()=>i});var t=a(5879);let i=(()=>{class v{transform(s,L){return s?"verbose"==L?"TIER_I_LEVEL_A"===s?"Tier I - Level A":"TIER_I_LEVEL_B"===s?"Tier I - Level B":"TIER_II_LEVEL_C"===s?"Tier II - Level C":"TIER_II_LEVEL_D"===s?"Tier II - Level D":"TIER_III"===s?"Tier III":"TIER_IV"===s?"Tier IV":"Not Applicable":s.toUpperCase().replace("TIER","").replace("LEVEL","").replace(/ /g,"").replace(/_/g,""):""}}return v.\u0275fac=function(s){return new(s||v)},v.\u0275pipe=t.Yjl({name:"formatAmp",type:v,pure:!0}),v})()},2616:(It,be,a)=>{a.d(be,{a:()=>v});var t=a(2023),i=a(5879);let v=(()=>{class d{transform(L){return(0,t.f)(L)}}return d.\u0275fac=function(L){return new(L||d)},d.\u0275pipe=i.Yjl({name:"entityColor",type:d,pure:!0}),d})()},6967:(It,be,a)=>{a.d(be,{Do:()=>L});var t=a(313),i=a(2),v=a(5879);const d=new Map([[t.Sx0.A,"Validated association"],[t.Sx0.B,"Clinical evidence"],[t.Sx0.C,"Case study"],[t.Sx0.D,"Preclinical evidence"],[t.Sx0.E,"Inferential association"]]),s=new Map([[1,"One Star"],[2,"Two Stars"],[3,"Three Stars"],[4,"Four Stars"],[5,"Five Stars"]]);let L=(()=>{class j{transform(I,S="display-string"){return null==I?"":"short-string"===S&&1===I.toString().length?"string"==typeof I?I:I.toString():"icon-name"===S?"number"==typeof I?`civic-rating${I}`:1===I.length?`civic-level${I.toLowerCase()}`:`civic-${I.replace(/_/g,"").toLowerCase()}`:"number"==typeof I?s.get(I)||I.toString():1===I.length?d.get(I)||I:(0,i.E)(I)}}return j.\u0275fac=function(I){return new(I||j)},j.\u0275pipe=v.Yjl({name:"evidenceEnumDisplay",type:j,pure:!0}),j})()},8004:(It,be,a)=>{a.d(be,{v:()=>L});var t=a(313);const i={evidenceType:{[t.kqt.Diagnostic]:"Evidence pertains to a variant's impact on patient diagnosis (cancer subtype)",[t.kqt.Functional]:"Evidence pertains to a variant that alters biological function from the reference state",[t.kqt.Oncogenic]:"Evidence pertains to a somatic variant's involvement in tumor pathogenesis as described by the Hallmarks of Cancer",[t.kqt.Predictive]:"Evidence pertains to a variant's effect on therapeutic response",[t.kqt.Predisposing]:"Evidence pertains to a germline variant's role in conferring susceptibility to disease (including pathogenicity evaluations)",[t.kqt.Prognostic]:"Evidence pertains to a variant's impact on disease progression, severity, or patient survival"},assertionType:{[t.uBv.Diagnostic]:"Assertion pertains to a variant's impact on patient diagnosis (cancer subtype)",[t.uBv.Predictive]:"Assertion pertains to a variant's effect on therapeutic response",[t.uBv.Predisposing]:"Assertion pertains to a germline variant's role in conferring susceptibility to disease (including pathogenicity evaluations)",[t.uBv.Prognostic]:"Assertion pertains to a variant's impact on disease progression, severity, or patient survival",[t.uBv.Oncogenic]:"Assertion pertains to a somatic variant's role in driving tumor formation, growth, and other processes related to the Hallmarks of Cancer"},variantOrigin:{[t.huM.Somatic]:"Variant is a mutation, found only in tumor cells, having arisen in a specific tissue (non-germ cell), and is not expected to be inherited or passed to offspring",[t.huM.RareGermline]:"Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in less than 1% of the population relevant to this evidence item",[t.huM.CommonGermline]:"Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in at least 1% of the population relevant to this evidence item",[t.huM.Unknown]:"The variant origin is uncertain based on the available evidence",[t.huM.Na]:"The variant type (e.g., expression) is not compatible (or easily classified) with the CIViC concept of variant origin",[t.huM.Combined]:"Variants in the Molecular Profile span multiple Origin types."},evidenceLevel:{[t.Sx0.A]:"Proven/consensus association in human medicine",[t.Sx0.B]:"Clinical trial or other primary patient data supports association",[t.Sx0.C]:"Individual case reports from clinical journals",[t.Sx0.D]:"In vivo or in vitro models support association",[t.Sx0.E]:"Indirect evidence"},evidenceLevelBrief:{[t.Sx0.A]:"Validated association",[t.Sx0.B]:"Clinical evidence",[t.Sx0.C]:"Case Study",[t.Sx0.D]:"Preclinical evidence",[t.Sx0.E]:"Inferential association"},therapyInteractionType:{[t.wkr.Combination]:"The therapies listed were used as part of a combination therapy approach",[t.wkr.Sequential]:"The therapies listed were used at separate timepoints in the same treatment plan",[t.wkr.Substitutes]:"The therapies listed are often considered to be of the same family, or behave similarly in a treatment setting"},evidenceRating:{1:"Poor - Claim is not supported well by experimental evidence. Results are not reproducible, or have very small sample size. No follow-up is done to validate novel claims",2:"Adequate - Evidence is not well supported by experimental data, and little follow-up data is available. Experiments may lack proper controls, have small sample size, or are not statistically convincing",3:"Average - Evidence is convincing, but not supported by a breadth of experiments. May be smaller scale projects, or novel results without many follow-up experiments. Discrepancies from expected results are explained and not concerning",4:"Strong - Well supported evidence. Experiments are well controlled, and results are convincing. Any discrepancies from expected results are well-explained and not concerning",5:"Excellent - Solid, well supported evidence from a lab or journal with respected academic standing. Experiments are well controlled, and results are clean and reproducible across multiple replicates. Evidence confirmed using separate methods"}},v={significance:{PREDICTIVE:{ADVERSE_RESPONSE:{EvidenceItem:"Associated with an adverse response to theraputic treatment",Assertion:"Associated with an adverse response to theraputic treatment"},REDUCED_SENSITIVITY:{EvidenceItem:"Response to treatment is lower than seen in other treatment contexts",Assertion:"Response to treatment is lower than seen in other treatment contexts"},RESISTANCE:{EvidenceItem:"Associated with clinical or preclinical resistance to treatment",Assertion:"Associated with clinical or preclinical resistance to treatment"},SENSITIVITYRESPONSE:{EvidenceItem:"Associated with clinical or preclinical response to treatment",Assertion:"Associated with a clinical or preclinical response to treatment"},NA:{EvidenceItem:"Clinical Significance is not applicable",Assertion:"Clinical Significance is not applicable"}},DIAGNOSTIC:{POSITIVE:{EvidenceItem:"Associated with diagnosis of disease or subtype",Assertion:"Associated with diagnosis of disease or subtype"},NEGATIVE:{EvidenceItem:"Associated with lack of disease or subtype",Assertion:"Associated with lack of disease or subtype"}},PROGNOSTIC:{BETTER_OUTCOME:{EvidenceItem:"Demonstrates better than expected clinical outcome",Assertion:"Demonstrates better than expected clinical outcome"},POOR_OUTCOME:{EvidenceItem:"Demonstrates worse than expected clinical outcome",Assertion:"Demonstrates worse than expected clinical outcome"},Na:{EvidenceItem:"Clinical Significance is not applicable",Assertion:"Clinical Significance is not applicable"}},PREDISPOSING:{PATHOGENIC:{Assertion:"Very strong evidence the variant is pathogenic"},LIKELY_PATHOGENIC:{Assertion:"Strong evidence (>90% certainty) the variant is pathogenic"},BENIGN:{Assertion:"Very strong evidence the variant is benign"},LIKELY_BENIGN:{Assertion:"Not expected to have a major effect on disease"},UNCERTAIN_SIGNIFICANCE:{Assertion:"Does not meet the ACMG/AMP criteria for pathogenic/benign, or the evidence is conflicting"},Na:{EvidenceItem:"Clinical Significance is not applicable"},PREDISPOSITION:{EvidenceItem:"Germline variant has predisposing potential for cancer, and may meet ACMG/AMP criteria supporting pathogenic or benign classification."},PROTECTIVENESS:{EvidenceItem:"Germline variant has properties that protect individuals from acquiring cancer."}},ONCOGENIC:{ONCOGENICITY:{EvidenceItem:"Somatic variant has oncogenic potential for driving cancer, and may meet ClinGen/CGC/VICC criteria supporting pathogenic or benign classification."},PROTECTIVENESS:{EvidenceItem:"Somatic variant has a protective role and minimizes co-occuring driver variants, tumor malignancy, or other oncogenic tumor properties."},ONCOGENIC:{Assertion:"Very strong evidence the variant is oncogenic."},LIKELY_ONCOGENIC:{Assertion:"Strong evidence the variant is oncogenic."},BENIGN:{Assertion:"Very strong evidence the variant does not have oncogenic properties."},LIKELY_BENIGN:{Assertion:"Strong evidence the variant does not have oncogenic properties."},UNCERTAIN_SIGNIFICANCE:{Assertion:"Does not meet guideline criteria for oncogenic/benign, or the evidence is conflicting."}}},evidenceDirection:{PREDICTIVE:{SUPPORTS:{EvidenceItem:"The experiment or study supports this variant's response to a therapy"},DOES_NOT_SUPPORT:{EvidenceItem:"The experiment or study does not support, or was inconclusive of an interaction between this variant and a therapy"}},DIAGNOSTIC:{SUPPORTS:{EvidenceItem:"The experiment or study supports this variant's impact on the diagnosis of disease or subtype"},DOES_NOT_SUPPORT:{EvidenceItem:"The experiment or study does not support this variant's impact on diagnosis of disease or subtype"}},PROGNOSTIC:{SUPPORTS:{EvidenceItem:"The experiment or study supports this variant's impact on prognostic outcome"},DOES_NOT_SUPPORT:{EvidenceItem:"The experiment or study does not support a prognostic association between variant and outcome"}},PREDISPOSING:{Na:{EvidenceItem:"Evidence Direction is not applicable"},SUPPORTS:{EvidenceItem:"The evidence supports a pathogenic or a protective role for a germline variant in cancer."},DOES_NOT_SUPPORT:{EvidenceItem:"The evidence supports a benign (if Clinical Significance is Predisposition) or lack or protective (if Clinical Significance is Protectiveness) role for a germline variant in cancer."}},FUNCTIONAL:{SUPPORTS:{EvidenceItem:"The experiment or study supports this variant causing alteration or non-alteration of the gene product function"},DOES_NOT_SUPPORT:{EvidenceItem:"The experiment or study does not support this variant causing alteration or non-alteration of the gene product function"}},ONCOGENIC:{NA:{EvidenceItem:"Evidence Direction is not applicable for Oncogenic Evidence Type"},SUPPORTS:{EvidenceItem:"The evidence supports an oncogenic or protective role for a somatic variant"},DOES_NOT_SUPPORT:{EvidenceItem:"The evidence does not support an oncogenic or protective role for a somatic variant"}}},assertionDirection:{PREDICTIVE:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support this variant's response to a therapy"},DOES_NOT_SUPPORT:{Assertion:"The Assertion and associated evidence does not support, or was inconclusive of an interaction between this variant and a therapy"}},DIAGNOSTIC:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support this variant's impact on the diagnosis of disease or subtype"},DOES_NOT_SUPPORT:{Assertion:"The Assertion and associated evidence does not support this variant's impact on diagnosis of disease or subtype"}},PROGNOSTIC:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support this variant's impact on prognostic outcome"},DOES_NOT_SUPPORT:{Assertion:"The Assertion and associated evidence does not support a prognostic association between variant and outcome"}},PREDISPOSING:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support a variant's impact on predisposing outcome"}},FUNCTIONAL:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support this variant causing alteration or non-alteration of the gene product function"},DOES_NOT_SUPPORT:{Assertion:"The Assertion and associated evidence does not support this variant causing alteration or non-alteration of the gene product function"}},ONCOGENIC:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support a variant's oncogenic, benign, or uncertain significance"}}}};var s=a(5879);let L=(()=>{class j{transform(I,S,F=void 0,k=void 0){return S&&I?function d(j,$,I,S){let F;return F=I&&S?v[j][I][$][S]:i[j][$],F||""}(S,I,F,k):""}}return j.\u0275fac=function(I){return new(I||j)},j.\u0275pipe=s.Yjl({name:"enumTooltip",type:j,pure:!0}),j})()},7334:(It,be,a)=>{a.d(be,{A:()=>v});var t=a(5879),i=a(6593);let v=(()=>{class d{constructor(L){this.sanitizer=L}transform(L,j){if(!j||""==j)return L;const $=new RegExp(j,"gi"),I=L.match($);if(!I)return L;let S=L.replace($,`<span class='typeahead-match'>${I[0]}</span>`);return this.sanitizer.bypassSecurityTrustHtml(S)}}return d.\u0275fac=function(L){return new(L||d)(t.Y36(i.H7,16))},d.\u0275pipe=t.Yjl({name:"highlightTypeahead",type:d,pure:!0}),d})()},2524:(It,be,a)=>{a.d(be,{s:()=>d});var t=a(6814),i=a(7023),v=a(5879);let d=(()=>{class s{}return s.\u0275fac=function(j){return new(j||s)},s.\u0275mod=v.oAB({type:s}),s.\u0275inj=v.cJS({providers:[i.l],imports:[t.ez]}),s})()},7023:(It,be,a)=>{a.d(be,{l:()=>v});var t=a(2666),i=a(5879);let v=(()=>{class d{transform(L){return L?(0,t.c)(L):""}}return d.\u0275fac=function(L){return new(L||d)},d.\u0275pipe=i.Yjl({name:"sourceTypeDisplay",type:d,pure:!0}),d})()},5869:(It,be,a)=>{a.d(be,{W:()=>i});var t=a(5879);let i=(()=>{class v{constructor(){}transform(s,L=25){if(s.length>L){let $=s.slice(0,L);var j=$.lastIndexOf(" ");return $.slice(0,j)+"\u2026"}return s}}return v.\u0275fac=function(s){return new(s||v)},v.\u0275pipe=t.Yjl({name:"truncate",type:v,pure:!0}),v})()},1201:(It,be,a)=>{a.d(be,{Z:()=>i});var t=a(5879);let i=(()=>{class v{transform(s){return s?`civic-${s.replace(/_/g,"").toLowerCase()}`:""}}return v.\u0275fac=function(s){return new(s||v)},v.\u0275pipe=t.Yjl({name:"typenameToIcon",type:v,pure:!0}),v})()},7473:(It,be,a)=>{a.d(be,{Y:()=>v});var t=a(5619),i=a(5879);let v=(()=>{class d{constructor(){this.networkError$=new t.X(void 0)}clearErrors(){this.networkError$.next(void 0)}}return d.\u0275fac=function(L){return new(L||d)},d.\u0275prov=i.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},951:(It,be,a)=>{a.d(be,{a:()=>F});var S,t=a(655),i=a(313),v=a(1791),d=a(7398),s=a(7921),L=a(7081),j=a(4223),$=a(5879),I=a(9862);let F=((S=class{constructor(U,w){function M(A){return!(!A||A.role!==i.i44.Admin)}function e(A){return!(!A||A.role!==i.i44.Editor&&A.role!==i.i44.Admin)}function R(A){return!(!A||A.role!==i.i44.Curator)}function pe(A){return!(!A||A.role!==i.i44.Curator&&A.role!==i.i44.Editor&&A.role!==i.i44.Admin)}function me(A){return!(!A||A.role!==i.i44.Editor&&A.role!==i.i44.Admin||!A.mostRecentConflictOfInterestStatement||A.mostRecentConflictOfInterestStatement?.coiStatus!=i.Mgx.Conflict&&A.mostRecentConflictOfInterestStatement?.coiStatus!=i.Mgx.Valid)}function Z(A){if(A.mostRecentOrganizationId)return A.organizations.find(V=>V.id===A.mostRecentOrganizationId)}this.viewerBaseGQL=U,this.http=w,this.initialViewer={mostRecentOrg:void 0,signedIn:!1,isAdmin:!1,isEditor:!1,isCurator:!1,canCurate:!1,canModerate:!1,invalidCoi:!0},this.queryRef=this.viewerBaseGQL.watch(void 0,{notifyOnNetworkStatusChange:!1}),this.viewer$=this.queryRef.valueChanges.pipe((0,j.j)("data","viewer"),(0,d.U)(A=>({...A,signedIn:null!=A,signedOut:null==A,canCurate:pe(A),canModerate:me(A),isAdmin:M(A),isEditor:e(A),isCurator:R(A),organizations:null==A?[]:A.organizations,mostRecentOrg:null==A?void 0:Z(A),invalidCoi:e(A)&&(!A.mostRecentConflictOfInterestStatement||A.mostRecentConflictOfInterestStatement.coiStatus===i.Mgx.Expired||A.mostRecentConflictOfInterestStatement.coiStatus===i.Mgx.Missing)})),(0,s.O)(this.initialViewer),(0,L.d)(1)),this.signedIn$=this.viewer$.pipe((0,d.U)(A=>A.signedIn)),this.signedOut$=this.viewer$.pipe((0,d.U)(A=>A.signedOut)),this.isAdmin$=this.viewer$.pipe((0,d.U)(A=>M(A))),this.isEditor$=this.viewer$.pipe((0,d.U)(A=>e(A))),this.isCurator$=this.viewer$.pipe((0,d.U)(A=>R(A))),this.canCurate$=this.viewer$.pipe((0,d.U)(A=>pe(A))),this.canModerate$=this.viewer$.pipe((0,d.U)(A=>me(A)))}signOut(){this.http.get("/api/sign_out").pipe((0,v.t)(this)).subscribe(()=>this.queryRef.refetch())}refetch(){this.queryRef.refetch()}}).\u0275fac=function(U){return new(U||S)($.LFG(i.Tt7),$.LFG(I.eN))},S.\u0275prov=$.Yz7({token:S,factory:S.\u0275fac,providedIn:"root"}),S);F=(0,t.gn)([(0,v.c)()],F)},8130:(It,be,a)=>{a.d(be,{a:()=>i});var t=a(5879);let i=(()=>{class v{constructor(){this.linked=!0,this.popoverVisible=!1}ngOnInit(){this.onCloseClicked&&(this.linked=!1)}itemClosed(s){this.popoverVisible=!1,this.onCloseClicked&&this.onCloseClicked(this.idFunction())}}return v.\u0275fac=function(s){return new(s||v)},v.\u0275cmp=t.Xpm({type:v,selectors:[["ng-component"]],inputs:{onCloseClicked:"onCloseClicked",linked:"linked"},decls:0,vars:0,template:function(s,L){},encapsulation:2}),v})()},2:(It,be,a)=>{function t(i){if("number"==typeof i||"boolean"==typeof i)return i;let v;if("NA"===i)v=["Not Applicable"];else if("SENSITIVITYRESPONSE"===i)v=["Sensitivity","/","Response"];else{v=i.toLowerCase().replace(/_/g," ").split(" ");for(var d=0;d<v.length;d++)v[d]=v[d].charAt(0).toUpperCase()+v[d].slice(1)}return v.join(" ")}a.d(be,{E:()=>t})},2666:(It,be,a)=>{function t(i){switch(i){case"ASCO":return"ASCO";case"PUBMED":return"PubMed";case"ASH":return"ASH";default:return i}}a.d(be,{c:()=>t})},2023:(It,be,a)=>{a.d(be,{f:()=>i});const t=new Map([["Assertion","#7243b5"],["ClinicalTrial","#ac3996"],["CoordinateSystem","#f68f37"],["Disease","#e62f76"],["Event","#1db8a9"],["EvidenceItem","#2a63b6"],["Gene","#07aff0"],["Therapy","#ac3996"],["MolecularProfile","#33b358"],["Phenotype","#1db8a9"],["Source","#f9ba45"],["Variant","#74d34c"],["VariantGroup","#74d34c"],["VariantType","#74d34c"],["Comment","#44d8ef"],["Event","#ffdb00"],["Flag","#e24759"],["Queue","#666699"],["Revision","#f0673a"],["Curator","#a0d8f5"],["Editor","#58a0c4"],["Admin","#58a0c4"],["Organization","#3d7b99"],["Rejected","#BBBBBB"],["Greyscale","#999999"]]);function i(v){let d="#AAAAAA";if(v){const s=t.get(v);s&&(d=s)}return d}},2024:(It,be,a)=>{a.d(be,{U:()=>s});var t=a(8645),i=a(5619),v=a(9773),d=a(4716);class s{constructor(j){this.networkErrorService=j}mutate(j,$,I,S){let F=new t.x,k={isSubmitting$:new i.X(!1),submitSuccess$:new i.X(!1),submitError$:new i.X([]),cleanup:()=>{F.next(),F.complete()}};return k.isSubmitting$.next(!0),j.mutate($,I).pipe((0,v.R)(F),(0,d.x)(()=>{k.isSubmitting$.next(!1)})).subscribe({next:U=>{U.data&&S&&S(U.data)},error:U=>{U.graphQLErrors.length>0?k.submitError$.next(U.graphQLErrors.map(w=>w.message)):U.networkError&&this.networkErrorService.networkError$.next(U.networkError),k.cleanup()},complete:()=>{k.submitError$.next([]),k.submitSuccess$.next(!0),this.networkErrorService.networkError$.next(void 0),k.cleanup()}}),k}}},9333:(It,be,a)=>{a.d(be,{h:()=>v});var t=a(6814),i=a(5879);let v=(()=>{class d{}return d.\u0275fac=function(L){return new(L||d)},d.\u0275mod=i.oAB({type:d}),d.\u0275inj=i.cJS({imports:[t.ez]}),d})()},8656:(It,be,a)=>{a.d(be,{P:()=>U});var t=a(5879),i=a(6814),v=a(6109);function d(w,M){1&w&&(t.ynx(0),t._uU(1," N/A "),t.BQk())}function s(w,M){1&w&&(t.ynx(0),t._uU(1," Not applicable "),t.BQk())}function L(w,M){if(1&w&&(t.TgZ(0,"span",4),t.ynx(1,0),t.YNc(2,d,2,0,"ng-container",5),t.YNc(3,s,2,0,"ng-container",6),t.BQk(),t.qZA()),2&w){const e=t.oxw();t.xp6(1),t.Q6J("ngSwitch",e.cvcDisplayMode),t.xp6(1),t.Q6J("ngSwitchCase","small")}}function j(w,M){1&w&&(t.ynx(0),t._uU(1," \u2013\xa0\u2013 "),t.BQk())}function $(w,M){1&w&&(t.ynx(0),t._uU(1,"Not specified"),t.BQk())}function I(w,M){if(1&w&&(t.TgZ(0,"span",7),t.ynx(1,0),t.YNc(2,j,2,0,"ng-container",5),t.YNc(3,$,2,0,"ng-container",6),t.BQk(),t.qZA()),2&w){const e=t.oxw();t.xp6(1),t.Q6J("ngSwitch",e.cvcDisplayMode),t.xp6(1),t.Q6J("ngSwitchCase","small")}}function S(w,M){1&w&&(t.ynx(0),t._uU(1,"!?"),t.BQk())}function F(w,M){1&w&&(t.ynx(0),t._uU(1,"Unspecified"),t.BQk())}function k(w,M){if(1&w&&(t.TgZ(0,"span",8),t.ynx(1,0),t.YNc(2,S,2,0,"ng-container",5),t.YNc(3,F,2,0,"ng-container",6),t.BQk(),t.qZA()),2&w){const e=t.oxw();t.xp6(1),t.Q6J("ngSwitch",e.cvcDisplayMode),t.xp6(1),t.Q6J("ngSwitchCase","small")}}let U=(()=>{class w{constructor(){this.cvcEmptyCategory="not-applicable",this.cvcDisplayMode="default"}}return w.\u0275fac=function(e){return new(e||w)},w.\u0275cmp=t.Xpm({type:w,selectors:[["cvc-empty-value"]],inputs:{cvcEmptyCategory:"cvcEmptyCategory",cvcDisplayMode:"cvcDisplayMode"},decls:4,vars:4,consts:[[3,"ngSwitch"],["class","empty-symbol not-applicable","nz-tooltip","","nzTooltipTitle","Value is not applicable",4,"ngSwitchCase"],["nz-tooltip","","nzTooltipTitle","Unspecified","class","empty-symbol unspecified","nz-tooltip","","nzTooltipTitle","Value is unspecified",4,"ngSwitchCase"],["nz-tooltip","","nzTooltipTitle","INVALID","class","empty-symbol invalid","nz-tooltip","","nzTooltipTitle","Error: value requires specification",4,"ngSwitchCase"],["nz-tooltip","","nzTooltipTitle","Value is not applicable",1,"empty-symbol","not-applicable"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["nz-tooltip","","nzTooltipTitle","Unspecified","nz-tooltip","","nzTooltipTitle","Value is unspecified",1,"empty-symbol","unspecified"],["nz-tooltip","","nzTooltipTitle","INVALID","nz-tooltip","","nzTooltipTitle","Error: value requires specification",1,"empty-symbol","invalid"]],template:function(e,R){1&e&&(t.ynx(0,0),t.YNc(1,L,4,2,"span",1),t.YNc(2,I,4,2,"span",2),t.YNc(3,k,4,2,"span",3),t.BQk()),2&e&&(t.Q6J("ngSwitch",R.cvcEmptyCategory),t.xp6(1),t.Q6J("ngSwitchCase","not-applicable"),t.xp6(1),t.Q6J("ngSwitchCase","unspecified"),t.xp6(1),t.Q6J("ngSwitchCase","invalid"))},dependencies:[i.RF,i.n9,i.ED,v.SY],styles:[".empty-symbol[_ngcontent-%COMP%]{font-style:oblique;display:inline-block;white-space:no-wrap}.empty-symbol.not-applicable[_ngcontent-%COMP%]{color:#ccc;font-weight:500}.empty-symbol.unspecified[_ngcontent-%COMP%]{display:inline-block;color:#ccc;font-weight:500;padding:0 3px}.empty-symbol.invalid[_ngcontent-%COMP%]{display:inline-block;color:#ff4d4f;font-weight:700}"]}),w})()},821:(It,be,a)=>{a.d(be,{M:()=>s});var t=a(6814),i=a(551),v=a(6109),d=a(5879);let s=(()=>{class L{}return L.\u0275fac=function($){return new($||L)},L.\u0275mod=d.oAB({type:L}),L.\u0275inj=d.cJS({imports:[t.ez,v.cg,i.PV]}),L})()},9835:(It,be,a)=>{a.d(be,{J:()=>He});var t=a(5879),i=a(9111),v=a(6814),d=a(156),s=a(2851),L=a(1813),j=a(96),$=a(4402),I=a(8213),S=a(1598),F=a(8545);function k(je,Ne){if(1&je&&t._UZ(0,"cvc-molecular-profile-popover",9),2&je){const De=t.oxw();t.Q6J("molecularProfileId",De.entity.entityId)}}function U(je,Ne){if(1&je&&t._UZ(0,"cvc-disease-popover",10),2&je){const De=t.oxw();t.Q6J("diseaseId",De.entity.entityId)}}function w(je,Ne){if(1&je&&t._UZ(0,"cvc-therapy-popover",11),2&je){const De=t.oxw();t.Q6J("therapyId",De.entity.entityId)}}function M(je,Ne){if(1&je&&t._UZ(0,"cvc-source-popover",12),2&je){const De=t.oxw();t.Q6J("sourceId",De.entity.entityId)}}function e(je,Ne){if(1&je&&t._UZ(0,"cvc-phenotype-popover",13),2&je){const De=t.oxw();t.Q6J("phenotypeId",De.entity.entityId)}}function R(je,Ne){if(1&je&&t._UZ(0,"cvc-evidence-popover",14),2&je){const De=t.oxw();t.Q6J("evidenceId",De.entity.entityId)}}function pe(je,Ne){if(1&je&&t._UZ(0,"cvc-gene-popover",15),2&je){const De=t.oxw();t.Q6J("geneId",De.entity.entityId)}}function me(je,Ne){if(1&je&&t._UZ(0,"cvc-variant-popover",16),2&je){const De=t.oxw();t.Q6J("variantId",De.entity.entityId)}}const Z=["MolecularProfile","Disease","Therapy","Phenotype","Source","Gene","Variant","EvidenceItem"];let A=(()=>{class je{ngOnInit(){if(null==this.entity)throw new Error("entity input is required for CvcEntityTagPopoverComponent")}}return je.\u0275fac=function(De){return new(De||je)},je.\u0275cmp=t.Xpm({type:je,selectors:[["cvc-entity-tag-popover"]],inputs:{entity:"entity"},decls:9,vars:9,consts:[[3,"ngSwitch"],[3,"molecularProfileId",4,"ngSwitchCase"],[3,"diseaseId",4,"ngSwitchCase"],[3,"therapyId",4,"ngSwitchCase"],[3,"sourceId",4,"ngSwitchCase"],[3,"phenotypeId",4,"ngSwitchCase"],[3,"evidenceId",4,"ngSwitchCase"],[3,"geneId",4,"ngSwitchCase"],[3,"variantId",4,"ngSwitchCase"],[3,"molecularProfileId"],[3,"diseaseId"],[3,"therapyId"],[3,"sourceId"],[3,"phenotypeId"],[3,"evidenceId"],[3,"geneId"],[3,"variantId"]],template:function(De,ie){1&De&&(t.ynx(0,0),t.YNc(1,k,1,1,"cvc-molecular-profile-popover",1),t.YNc(2,U,1,1,"cvc-disease-popover",2),t.YNc(3,w,1,1,"cvc-therapy-popover",3),t.YNc(4,M,1,1,"cvc-source-popover",4),t.YNc(5,e,1,1,"cvc-phenotype-popover",5),t.YNc(6,R,1,1,"cvc-evidence-popover",6),t.YNc(7,pe,1,1,"cvc-gene-popover",7),t.YNc(8,me,1,1,"cvc-variant-popover",8),t.BQk()),2&De&&(t.Q6J("ngSwitch",ie.entity.entityType),t.xp6(1),t.Q6J("ngSwitchCase","MolecularProfile"),t.xp6(1),t.Q6J("ngSwitchCase","Disease"),t.xp6(1),t.Q6J("ngSwitchCase","Therapy"),t.xp6(1),t.Q6J("ngSwitchCase","Source"),t.xp6(1),t.Q6J("ngSwitchCase","Phenotype"),t.xp6(1),t.Q6J("ngSwitchCase","EvidenceItem"),t.xp6(1),t.Q6J("ngSwitchCase","Gene"),t.xp6(1),t.Q6J("ngSwitchCase","Variant"))},dependencies:[v.RF,v.n9,d._,s.I,L.p,j.a,$.S,I._,S.Q,F.m],encapsulation:2,changeDetection:0}),je})();var V=a(4190),O=a(551),P=a(5695),D=a(6109),re=a(7417),ae=a(7334),Q=a(2616),fe=a(1201);function ue(je,Ne){}function ge(je,Ne){if(1&je){const De=t.EpF();t.TgZ(0,"span",6)(1,"nz-tag",7),t.NdJ("nzCheckedChange",function(){t.CHM(De);const Ce=t.oxw();return t.KtG(Ce.cvcTagCheckedChange)})("nzOnClose",function(Ce){t.CHM(De);const ve=t.oxw();return t.KtG(ve.cvcOnClose.next(Ce))}),t.TgZ(2,"span",8),t.YNc(3,ue,0,0,"ng-template",9),t.qZA()()()}if(2&je){const De=t.oxw(),ie=t.MAs(6),Ce=t.MAs(8);t.xp6(1),t.Q6J("nzMode",De.cvcMode)("nzChecked",De.cvcTagChecked),t.xp6(1),t.Q6J("nzPopoverContent",De.cvcShowPopover&&De.popoverInput?ie:void 0),t.xp6(1),t.Q6J("ngTemplateOutlet",Ce)}}function Se(je,Ne){}function ke(je,Ne){if(1&je&&(t.TgZ(0,"span",13),t.YNc(1,Se,0,0,"ng-template",9),t.qZA()),2&je){const De=t.oxw(2),ie=t.MAs(8);t.Q6J("nzTooltipTitle",De.entity.tooltip),t.xp6(1),t.Q6J("ngTemplateOutlet",ie)}}function Rt(je,Ne){if(1&je){const De=t.EpF();t.TgZ(0,"span",10)(1,"nz-tag",11),t.NdJ("nzOnClose",function(Ce){t.CHM(De);const ve=t.oxw();return t.KtG(ve.cvcOnClose.next(Ce))}),t.YNc(2,ke,2,2,"span",12),t.qZA()()}if(2&je){const De=t.oxw(),ie=t.MAs(4);t.xp6(1),t.Q6J("nzMode","closeable"),t.xp6(1),t.Q6J("ngIf",De.entity&&De.entity.tooltip)("ngIfElse",ie)}}function Ft(je,Ne){}function Mt(je,Ne){if(1&je&&(t.TgZ(0,"span",13),t.YNc(1,Ft,0,0,"ng-template",9),t.qZA()),2&je){const De=t.oxw(2),ie=t.MAs(8);t.Q6J("nzTooltipTitle",De.entity.tooltip),t.xp6(1),t.Q6J("ngTemplateOutlet",ie)}}function yt(je,Ne){if(1&je&&(t.TgZ(0,"span",14),t.YNc(1,Mt,2,2,"span",12),t.qZA()),2&je){const De=t.oxw(),ie=t.MAs(4);t.xp6(1),t.Q6J("ngIf",De.entity&&De.entity.tooltip)("ngIfElse",ie)}}function Ct(je,Ne){}function Lt(je,Ne){if(1&je&&(t.TgZ(0,"span",8),t.YNc(1,Ct,0,0,"ng-template",9),t.qZA()),2&je){const De=t.oxw(),ie=t.MAs(6),Ce=t.MAs(8);t.Q6J("nzPopoverContent",De.popoverInput?ie:void 0),t.xp6(1),t.Q6J("ngTemplateOutlet",Ce)}}function rn(je,Ne){if(1&je&&t._UZ(0,"cvc-entity-tag-popover",16),2&je){const De=t.oxw(2);t.Q6J("entity",De.popoverInput)}}function Sn(je,Ne){if(1&je&&t.YNc(0,rn,1,1,"cvc-entity-tag-popover",15),2&je){const De=t.oxw();t.Q6J("ngIf",De.popoverInput)}}function rt(je,Ne){if(1&je&&(t.TgZ(0,"span"),t.GkF(1,9),t.qZA()),2&je){t.oxw();const De=t.MAs(4);t.xp6(1),t.Q6J("ngTemplateOutlet",De)}}function Ye(je,Ne){if(1&je&&(t.TgZ(0,"a",23),t.GkF(1,9),t.qZA()),2&je){t.oxw();const De=t.MAs(4),ie=t.oxw(2);t.Q6J("routerLink",ie.entity.link),t.xp6(1),t.Q6J("ngTemplateOutlet",De)}}function st(je,Ne){if(1&je&&(t._UZ(0,"span",26),t.ALo(1,"typenameToIcon"),t.ALo(2,"entityColor")),2&je){const De=t.oxw(4);t.Q6J("nzType",t.lcZ(1,2,De.typename))("nzTwotoneColor",t.lcZ(2,4,De.typename))}}function Ze(je,Ne){if(1&je&&(t.YNc(0,st,3,6,"span",24),t._UZ(1,"span",25),t.ALo(2,"highlightTypeahead")),2&je){t.oxw(2);const De=t.MAs(4),ie=t.oxw();t.Q6J("ngIf",ie.typename)("ngIfElse",De),t.xp6(1),t.Q6J("innerHtml",t.xi3(2,3,ie.entity.name,ie.cvcEmphasize),t.oJD)}}function Bt(je,Ne){if(1&je&&(t.ynx(0),t.YNc(1,rt,2,1,"span",20),t.YNc(2,Ye,2,2,"a",21),t.YNc(3,Ze,3,6,"ng-template",null,22,t.W1O),t.BQk()),2&je){const De=t.oxw(2);t.xp6(1),t.Q6J("ngIf",De.cvcDisableLink),t.xp6(1),t.Q6J("ngIf",!De.cvcDisableLink)}}function Jt(je,Ne){}function _n(je,Ne){if(1&je&&(t.YNc(0,Jt,0,0,"ng-template",9),t._uU(1)),2&je){t.oxw();const De=t.MAs(4),ie=t.oxw();t.Q6J("ngTemplateOutlet",De),t.xp6(1),t.hij(" CACHE-MISS (",ie.cvcCacheId,") ")}}function On(je,Ne){1&je&&t._UZ(0,"span",27)}function cn(je,Ne){if(1&je&&(t.YNc(0,Bt,5,2,"ng-container",17),t.YNc(1,_n,2,2,"ng-template",null,18,t.W1O),t.YNc(3,On,1,0,"ng-template",null,19,t.W1O)),2&je){const De=t.MAs(2),ie=t.oxw();t.Q6J("ngIf",ie.entity)("ngIfElse",De)}}function wt(je,Ne){if(1&je&&t._UZ(0,"cvc-entity-tag-popover",16),2&je){const De=t.oxw(2);t.Q6J("entity",De.popoverInput)}}function Ve(je,Ne){if(1&je&&t.YNc(0,wt,1,1,"cvc-entity-tag-popover",15),2&je){const De=t.oxw();t.Q6J("ngIf",De.popoverInput)}}const Be=je=>void 0!==je&&je.__typename&&je.id&&void 0!==je.name;let He=(()=>{class je{set cvcLinkableEntity(De){De&&this.setLinkableEntity(De)}set cvcCacheId(De){De&&this.setCachedLinkableEntity(De)}constructor(De){this.apollo=De,this.cvcContext="default",this.cvcMode="default",this.cvcDisableLink=!0,this.cvcTagChecked=!1,this.cvcHasTooltip=!1,this.cvcFullWidth=!1,this.cvcShowPopover=!1,this.cvcTagCheckedChange=new t.vpe,this.cvcOnClose=new t.vpe}hasPopover(De){return Z.includes(De)}setLinkableEntity(De){Be(De)&&(this.typename=De.__typename,this.id=De.id,this.entity=De,this.setPopoverInput(De))}setCachedLinkableEntity(De){const[ie,Ce]=De.split(":");if(this.typename=ie,this.id=+Ce,!this.typename||!this.id)return void console.error(`entity-tag received an invalid cacheId: ${De}. Cache IDs must be in the format 'TYPENAME:ID'.`);let ve;ve=this.cvcDisableLink?this.cvcHasTooltip?{id:`${ie}:${Ce}`,fragment:i.Ps`
          fragment Linkable${ie}Entity on ${ie} {
            id
            name
            tooltip
          }
        `}:{id:`${ie}:${Ce}`,fragment:i.Ps`
          fragment Linkable${ie}Entity on ${ie} {
            id
            name
          }
        `}:{id:`${ie}:${Ce}`,fragment:i.Ps`
          fragment Linkable${ie}Entity on ${ie} {
            id
            name
            link
          }
        `};const qe=this.apollo.client.readFragment(ve);Be(qe)?(this.setPopoverInput(qe),this.entity=qe):console.error(`entity-tag could not find cached entity ${De}`)}setPopoverInput(De){Be(De)&&this.hasPopover(De.__typename)&&(this.popoverInput={entityId:De.id,entityType:De.__typename})}ngOnChanges(De){De.cvcMode&&"checkable"===De.cvcMode.currentValue&&(this.cvcDisableLink=!0),De.cvcContext&&"default"!==De.cvcContext.currentValue&&(this.cvcDisableLink=!0)}}return je.\u0275fac=function(De){return new(De||je)(t.Y36(i._M))},je.\u0275cmp=t.Xpm({type:je,selectors:[["cvc-entity-tag"]],hostVars:40,hostBindings:function(De,ie){2&De&&t.ekj("full-width",!0===ie.cvcFullWidth)("label-max",void 0!==ie.cvcTruncateLabel)("label-max-50","50px"===ie.cvcTruncateLabel)("label-max-75","75px"===ie.cvcTruncateLabel)("label-max-100","100px"===ie.cvcTruncateLabel)("label-max-125","125px"===ie.cvcTruncateLabel)("label-max-150","150px"===ie.cvcTruncateLabel)("label-max-175","175px"===ie.cvcTruncateLabel)("label-max-200","200px"===ie.cvcTruncateLabel)("label-max-250","250px"===ie.cvcTruncateLabel)("label-max-300","300px"===ie.cvcTruncateLabel)("label-max-350","350px"===ie.cvcTruncateLabel)("label-max-400","400px"===ie.cvcTruncateLabel)("label-max-450","450px"===ie.cvcTruncateLabel)("label-max-500","500px"===ie.cvcTruncateLabel)("rejected","REJECTED"===ie.cvcStatus)("accepted","ACCEPTED"===ie.cvcStatus)("submitted","SUBMITTED"===ie.cvcStatus)("new","NEW"===ie.cvcStatus)("superseded","SUPERSEDED"===ie.cvcStatus)},inputs:{cvcLinkableEntity:"cvcLinkableEntity",cvcCacheId:"cvcCacheId",cvcStatus:"cvcStatus",cvcContext:"cvcContext",cvcMode:"cvcMode",cvcEmphasize:"cvcEmphasize",cvcDisableLink:"cvcDisableLink",cvcTagChecked:"cvcTagChecked",cvcHasTooltip:"cvcHasTooltip",cvcFullWidth:"cvcFullWidth",cvcShowPopover:"cvcShowPopover",cvcTruncateLabel:"cvcTruncateLabel"},outputs:{cvcTagCheckedChange:"cvcTagCheckedChange",cvcOnClose:"cvcOnClose"},features:[t.TTD],decls:11,vars:3,consts:[["class","default",4,"ngIf"],["class","select-item",4,"ngIf"],["class","multi-select-item",4,"ngIf"],["noTooltip",""],["popoverContent",""],["tagContent",""],[1,"default"],[3,"nzMode","nzChecked","nzCheckedChange","nzOnClose"],["nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverContent"],[3,"ngTemplateOutlet"],[1,"select-item"],[3,"nzMode","nzOnClose"],["nz-tooltip","",3,"nzTooltipTitle",4,"ngIf","ngIfElse"],["nz-tooltip","",3,"nzTooltipTitle"],[1,"multi-select-item"],[3,"entity",4,"ngIf"],[3,"entity"],[4,"ngIf","ngIfElse"],["cacheMiss",""],["noIcon",""],[4,"ngIf"],[3,"routerLink",4,"ngIf"],["tagLabel",""],[3,"routerLink"],["nz-icon","","nzTheme","twotone","class","tag-icon",3,"nzType","nzTwotoneColor",4,"ngIf","ngIfElse"],[1,"tag-label",3,"innerHtml"],["nz-icon","","nzTheme","twotone",1,"tag-icon",3,"nzType","nzTwotoneColor"],["nz-icon","","nzType","question-circle","nzTheme","outline",1,"tag-icon"]],template:function(De,ie){1&De&&(t.YNc(0,ge,4,4,"span",0),t.YNc(1,Rt,3,3,"span",1),t.YNc(2,yt,2,2,"span",2),t.YNc(3,Lt,2,2,"ng-template",null,3,t.W1O),t.YNc(5,Sn,1,1,"ng-template",null,4,t.W1O),t.YNc(7,cn,5,2,"ng-template",null,5,t.W1O),t.YNc(9,Ve,1,1,"ng-template",null,4,t.W1O)),2&De&&(t.Q6J("ngIf","default"===ie.cvcContext),t.xp6(1),t.Q6J("ngIf","select-item"===ie.cvcContext),t.xp6(1),t.Q6J("ngIf","multi-select-item"===ie.cvcContext))},dependencies:[v.O5,v.tP,V.rH,O.Ls,P.j,D.SY,re.lU,A,ae.A,Q.a,fe.Z],styles:['.label-max-50[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:50px;overflow:hidden;text-overflow:ellipsis}.label-max-75[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:75px;overflow:hidden;text-overflow:ellipsis}.label-max-100[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:100px;overflow:hidden;text-overflow:ellipsis}.label-max-125[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:125px;overflow:hidden;text-overflow:ellipsis}.label-max-150[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:150px;overflow:hidden;text-overflow:ellipsis}.label-max-175[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:175px;overflow:hidden;text-overflow:ellipsis}.label-max-200[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:200px;overflow:hidden;text-overflow:ellipsis}.label-max-250[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:250px;overflow:hidden;text-overflow:ellipsis}.label-max-300[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:300px;overflow:hidden;text-overflow:ellipsis}.label-max-350[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:350px;overflow:hidden;text-overflow:ellipsis}.label-max-400[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:400px;overflow:hidden;text-overflow:ellipsis}.label-max-450[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:450px;overflow:hidden;text-overflow:ellipsis}.label-max-500[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:500px;overflow:hidden;text-overflow:ellipsis}.rejected[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%], .submitted[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%], .accepted[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%], .deprecated[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{border-right-width:2px}.rejected[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%], .deprecated[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{border-color:#e6e6e6;background-color:#fff;color:#999999d9}.submitted[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{border-color:#ffe58f}.accepted[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{border-color:#b7eb8f}.full-width[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{width:100%}.full-width[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{width:100%}nz-tag[_ngcontent-%COMP%]{margin-right:0;margin-inline-end:4px}  -checkable{background-color:transparent;cursor:pointer}  -checkable:not(  -checkable-checked):hover{color:#1890ff}  -checkable:active,   -checkable-checked{color:#fff}  -checkable-checked{background-color:#1890ff}  -checkable:active{background-color:#096dd9}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{display:inline-block;padding:3px 2px 3px 4px;margin:-3px 0}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;font-weight:400;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{display:inline-block;padding:3px 2px 3px 4px;margin:-3px 0}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;font-weight:400;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{padding-right:0}.multi-select-item[_ngcontent-%COMP%]{display:inline-block;margin-top:-3px;margin-bottom:-3px;margin-left:-4px;padding-left:4px}.multi-select-item[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]:after{content:" "}.typeahead-match[_ngcontent-%COMP%]{font-weight:700}a.disabled[_ngcontent-%COMP%]{pointer-events:none}'],changeDetection:0}),je})()},188:(It,be,a)=>{a.d(be,{x:()=>me});var t=a(6814),i=a(551),v=a(5695),d=a(2524),s=a(6109),L=a(4190),j=a(5879);let $=(()=>{class Z{}return Z.\u0275fac=function(V){return new(V||Z)},Z.\u0275mod=j.oAB({type:Z}),Z.\u0275inj=j.cJS({imports:[t.ez]}),Z})();var I=a(7417),S=a(5687),F=a(1855),k=a(9021),U=a(2064),w=a(1332),M=a(6247),e=a(1207),R=a(6446);let pe=(()=>{class Z{}return Z.\u0275fac=function(V){return new(V||Z)},Z.\u0275mod=j.oAB({type:Z}),Z.\u0275inj=j.cJS({imports:[t.ez,U._,S.t,M.n,e.s,w.I,F.f,k.w,R.k]}),Z})(),me=(()=>{class Z{}return Z.\u0275fac=function(V){return new(V||Z)},Z.\u0275mod=j.oAB({type:Z}),Z.\u0275inj=j.cJS({imports:[t.ez,L.Bz,i.PV,v.X,s.cg,I.$6,$,d.s,pe,$]}),Z})()},9928:(It,be,a)=>{a.d(be,{F:()=>R});var I,t=a(655),i=a(1791),v=a(5879),d=a(4190),s=a(6814),L=a(2669),j=a(3903),$=a(8091);function S(pe,me){if(1&pe&&v._UZ(0,"nz-alert",6),2&pe){v.oxw();const Z=v.MAs(3),A=v.oxw();v.MGl("nzMessage","Error Submitting ",A.entityType,""),v.Q6J("nzDescription",Z)}}function F(pe,me){if(1&pe&&(v.TgZ(0,"li"),v._uU(1),v.qZA()),2&pe){const Z=me.$implicit;v.xp6(1),v.hij(" ",Z," ")}}function k(pe,me){if(1&pe&&(v.TgZ(0,"ul"),v.YNc(1,F,2,1,"li",7),v.qZA()),2&pe){const Z=v.oxw().ngIf;v.xp6(1),v.Q6J("ngForOf",Z)}}function U(pe,me){if(1&pe&&(v.ynx(0),v.YNc(1,S,1,2,"nz-alert",4),v.YNc(2,k,2,1,"ng-template",null,5,v.W1O),v.BQk()),2&pe){const Z=me.ngIf;v.xp6(1),v.Q6J("ngIf",Z.length>0)}}function w(pe,me){if(1&pe&&(v.ynx(0),v._UZ(1,"nz-alert",8),v.BQk()),2&pe){const Z=v.oxw();v.xp6(1),v.MGl("nzMessage","",Z.entityType," Submitted"),v.Q6J("nzDescription",Z.successMessage?Z.successMessage:null)}}function M(pe,me){1&pe&&v.Hsn(0)}let R=((I=class{set mutationState(me){this._mutationState=me,this.currentTimer&&clearTimeout(this.currentTimer),me&&me.submitSuccess$.pipe((0,i.t)(this)).subscribe(Z=>{Z&&(this.currentTimer=setTimeout(()=>{this.redirectUrl&&this.router.navigateByUrl(this.redirectUrl)},2500))})}get mutationState(){return this._mutationState}constructor(me){this.router=me}ngOnInit(){}}).\u0275fac=function(me){return new(me||I)(v.Y36(d.F0))},I.\u0275cmp=v.Xpm({type:I,selectors:[["cvc-form-submission-status-display"]],inputs:{mutationState:"mutationState",entityType:"entityType",successMessage:"successMessage",redirectUrl:"redirectUrl"},ngContentSelectors:["*"],decls:8,vars:10,consts:[[3,"nzSpinning"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["form",""],["nzType","error","nzShowIcon","",3,"nzMessage","nzDescription",4,"ngIf"],["errorList",""],["nzType","error","nzShowIcon","",3,"nzMessage","nzDescription"],[4,"ngFor","ngForOf"],["nzType","success","nzShowIcon","",3,"nzMessage","nzDescription"]],template:function(me,Z){if(1&me&&(v.F$t(),v.TgZ(0,"nz-spin",0),v.ALo(1,"ngrxPush"),v.YNc(2,U,4,1,"ng-container",1),v.ALo(3,"ngrxPush"),v.YNc(4,w,2,2,"ng-container",2),v.ALo(5,"ngrxPush"),v.YNc(6,M,1,0,"ng-template",null,3,v.W1O),v.qZA()),2&me){const A=v.MAs(7);v.Q6J("nzSpinning",v.lcZ(1,4,null==Z.mutationState?null:Z.mutationState.isSubmitting$)),v.xp6(2),v.Q6J("ngIf",v.lcZ(3,6,null==Z.mutationState?null:Z.mutationState.submitError$)),v.xp6(2),v.Q6J("ngIf",v.lcZ(5,8,null==Z.mutationState?null:Z.mutationState.submitSuccess$))("ngIfElse",A)}},dependencies:[s.sg,s.O5,L.W,j.r,$.fM],encapsulation:2,changeDetection:0}),I);R=(0,t.gn)([(0,i.c)()],R)},1227:(It,be,a)=>{a.d(be,{g:()=>L});var t=a(6814),i=a(3903),v=a(2574),d=a(2669),s=a(5879);let L=(()=>{class j{}return j.\u0275fac=function(I){return new(I||j)},j.\u0275mod=s.oAB({type:j}),j.\u0275inj=s.cJS({imports:[t.ez,d.j,i.L,v.zf]}),j})()},706:(It,be,a)=>{a.d(be,{S:()=>P4});var t=a(6223),i=a(4190),v=a(5545),d=a(7459),s=a(3599),L=a(279),j=a(3997);function $(u,y){return(0,j.x)((c,m)=>y?y(c[u],m[u]):c[u]===m[u])}const I={paramKey:!0};class S{constructor(y){this.route=y}postPopulate(y){if(y.fieldGroup||y.fieldArray||!1===(y.props||{...I}).paramKey||(this.paramKey=this.getParamKey(y),!this.paramKey))return;const m=this.getRouteSub(this.route,y),G=y.hooks?.onDestroy;m&&G&&(y.hooks={...y.hooks,onDestroy:Ae=>{m.unsubscribe(),G(Ae)}})}getParamKey(y){const c=y.props;if("string"==typeof c.paramKey)return c.paramKey;if(y.key){if("string"==typeof y.key)return y.key;console.warn(`observe-query-param cannot use field key ${JSON.stringify(y.key)} of type ${typeof y.key} to observe a query param. Use prop.paramKey to specify a query param string, or define a string field.key.`)}}getRouteSub(y,c){const m=y.queryParams.pipe($(this.paramKey)).subscribe(G=>{const Ae=c.formControl,Dt=G[this.paramKey];if(!Dt)return void m.unsubscribe();let Mn;try{Mn=JSON.parse(Dt)}catch(kn){return console.warn(`observe-query-param failed to parse query param ${this.paramKey} for field ${c.id}: ${kn}`),console.warn("Note: Query values are parsed as JSON, therefore enum strings must be enclosed in double-quotes, and numeric entity IDs must be bare, unquoted."),void m.unsubscribe()}if(Mn){if(Object.keys(Mn).length>0&&Mn.constructor===Object)return console.warn(`observe-query-param may only set primitive types or arrays of primitive types, param ${this.paramKey} is an object: ${JSON.stringify(Mn)}`),void m.unsubscribe();Ae.setValue(Mn)}});return m}}function F(u){return{extensions:[{name:"observeQueryParam",extension:new S(u)}]}}const w={extras:{immutable:!1,lazyRender:!0},validationMessages:[{name:"required",message:"This field is required."},{name:"minLength",message:(u,y)=>`This field has a minimum length of ${y.templateOptions?.minLength}.`},{name:"maxLength",message:(u,y)=>`This field has a maximum length of ${y.templateOptions?.maxLength}.`},{name:"min",message:(u,y)=>`This field has a minimum value of ${y.templateOptions?.min}.`},{name:"max",message:(u,y)=>`This field has a maximum value of ${y.templateOptions?.max}.`},{name:"pattern",message:(u,y)=>`This field's value must fit the pattern ${y.templateOptions?.pattern}.`},{name:"integer",message:(u,y)=>"Value must be an integer."},{name:"nucleotide",message:(u,y)=>"Value must only contain A, C, T, G, and/or /."},{name:"clinvar",message:(u,y)=>"Value must be an integer."}],validators:[{name:"integer",validation:(u,y)=>""===u.value||null==u.value||/^\d+$/.test(u.value)?null:{integer:!0}},{name:"nucleotide",validation:(u,y)=>""===u.value||null==u.value||/^[ACTG\/]+$/.test(u.value)?null:{nucleotide:!0}},{name:"clinvar",validation:(u,y)=>{for(var c of u.value)if(""!==c&&null!=c&&!/^\d+$/.test(c))return{clinvar:!0};return null}}]};var M=a(6814),e=a(5879),R=a(8091),pe=a(95),me=a(2392);function Z(u,y){if(1&u&&(e.TgZ(0,"div",9),e.GkF(1,10),e.qZA()),2&u){e.oxw();const c=e.MAs(5);e.xp6(1),e.Q6J("ngTemplateOutlet",c)}}function A(u,y){if(1&u&&(e.TgZ(0,"div",11),e.GkF(1,10),e.qZA()),2&u){e.oxw();const c=e.MAs(9);e.xp6(1),e.Q6J("ngTemplateOutlet",c)}}function V(u,y){if(1&u&&(e.TgZ(0,"div",12),e.GkF(1,10),e.qZA()),2&u){e.oxw();const c=e.MAs(7);e.xp6(1),e.Q6J("ngTemplateOutlet",c)}}function O(u,y){if(1&u&&(e.TgZ(0,"nz-form-label",17),e._UZ(1,"span",18),e.qZA()),2&u){const c=y.ngrxLet,m=e.oxw(3);e.Q6J("nzRequired",m.props.required)("nzFor",m.id)("nzNoColon",!0)("nzTooltipTitle",m.props.tooltip)("nzSpan",c.span?c.span:null),e.xp6(1),e.Q6J("nzContent",m.props.label)}}function P(u,y){if(1&u&&(e.ynx(0),e.YNc(1,O,2,6,"nz-form-label",16),e.BQk()),2&u){const c=e.oxw(2);e.xp6(1),e.Q6J("ngrxLet",c.wrapper.layout.label)}}function D(u,y){if(1&u&&(e.TgZ(0,"nz-form-control",19),e.GkF(1,null,20),e.qZA()),2&u){const c=y.ngrxLet,m=e.oxw(2),G=e.MAs(11),Ae=e.MAs(13);e.Q6J("nzExtra",m.wrapper.showExtra&&!m.showError?G:void 0)("nzValidateStatus",m.errorState)("nzErrorTip",Ae)("nzSpan",m.props.hideLabel?24:c.span?c.span:null)}}const re=function(u,y,c,m){return{disabled:u,error:y,required:c,valid:m}};function ae(u,y){if(1&u&&(e.TgZ(0,"nz-form-item",13),e.YNc(1,P,2,1,"ng-container",14),e.YNc(2,D,3,4,"nz-form-control",15),e.qZA()),2&u){const c=e.oxw();e.Q6J("nzGutter",c.wrapper.layout.item.gutter)("ngClass",e.l5B(4,re,c.props.disabled,c.showError,c.props.required,"VALID"===c.field.formControl.status)),e.xp6(1),e.Q6J("ngIf",c.props.label&&!0!==c.props.hideLabel),e.xp6(1),e.Q6J("ngrxLet",c.wrapper.layout.control)}}const Q=function(u,y){return{disabled:u,error:y}};function fe(u,y){if(1&u&&(e.TgZ(0,"nz-form-label",24),e._UZ(1,"span",25),e.qZA()),2&u){const c=e.oxw(3);e.Q6J("ngClass",e.WLB(6,Q,c.props.disabled,c.showError))("nzRequired",c.props.required)("nzFor",c.id)("nzTooltipTitle",c.props.tooltip)("nzNoColon",!0),e.xp6(1),e.Q6J("nzContent",c.props.label)}}function ue(u,y){if(1&u&&(e.ynx(0),e.YNc(1,fe,2,9,"nz-form-label",23),e.BQk()),2&u){const c=e.oxw(2);e.xp6(1),e.Q6J("ngrxLet",c.wrapper.layout.label)}}function ge(u,y){if(1&u&&(e.TgZ(0,"nz-form-control",26),e.GkF(1,null,20),e.qZA()),2&u){const c=e.oxw(2),m=e.MAs(11),G=e.MAs(13);e.Q6J("nzExtra",c.wrapper.showExtra&&!c.showError?m:void 0)("nzValidateStatus",c.errorState)("nzErrorTip",G)}}function Se(u,y){if(1&u&&(e.TgZ(0,"nz-form-item",21),e.YNc(1,ue,2,1,"ng-container",14),e.YNc(2,ge,3,3,"nz-form-control",22),e.qZA()),2&u){const c=e.oxw();e.Q6J("ngClass",e.l5B(3,re,c.props.disabled,c.showError,c.props.required,"VALID"===c.field.formControl.status)),e.xp6(1),e.Q6J("ngIf",c.props.label&&!0!==c.props.hideLabel),e.xp6(1),e.Q6J("ngrxLet",c.wrapper.layout.control)}}function ke(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"nz-form-label",28),e._UZ(2,"span",25),e.qZA(),e.BQk()),2&u){const c=e.oxw(2);e.xp6(1),e.Q6J("nzRequired",c.props.required)("nzTooltipTitle",c.props.tooltip)("nzFor",c.id)("nzNoColon",!0),e.xp6(1),e.Q6J("nzContent",c.props.label)}}function Rt(u,y){if(1&u&&e._UZ(0,"formly-validation-message",29),2&u){const c=e.oxw(3);e.Q6J("field",c.field)}}function Ft(u,y){if(1&u&&(e.TgZ(0,"nz-form-control",26),e.GkF(1,null,20),e.YNc(3,Rt,1,1,"ng-template",null,8,e.W1O),e.qZA()),2&u){const c=e.MAs(4),m=e.oxw(2),G=e.MAs(11);e.Q6J("nzExtra",m.wrapper.showExtra&&!m.showError?G:void 0)("nzValidateStatus",m.errorState)("nzErrorTip",c)}}function Mt(u,y){if(1&u&&(e.TgZ(0,"nz-form-item",27),e.YNc(1,ke,3,5,"ng-container",14),e.YNc(2,Ft,5,3,"nz-form-control",22),e.qZA()),2&u){const c=e.oxw();e.Q6J("ngClass",e.l5B(3,re,c.props.disabled,c.showError,c.props.required,"VALID"===c.field.formControl.status)),e.xp6(1),e.Q6J("ngIf",c.props.label&&!0!==c.props.hideLabel),e.xp6(1),e.Q6J("ngrxLet",c.wrapper.layout.control)}}function yt(u,y){if(1&u&&e._UZ(0,"span",34),2&u){const c=e.oxw(2);e.Q6J("innerHTML",c.props.description,e.oJD)}}function Ct(u,y){if(1&u&&e._UZ(0,"span",35),2&u){const c=e.oxw(2);e.Q6J("innerHTML",c.props.description,e.oJD)}}function Lt(u,y){if(1&u&&e._UZ(0,"span",36),2&u){const c=e.oxw(2);e.Q6J("innerHTML",c.props.description,e.oJD)}}function rn(u,y){if(1&u&&(e.TgZ(0,"div",30),e.ynx(1,0),e.YNc(2,yt,1,1,"span",31),e.YNc(3,Ct,1,1,"span",32),e.YNc(4,Lt,1,1,"span",33),e.BQk(),e.qZA()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngSwitch",c.props.extraType),e.xp6(1),e.Q6J("ngSwitchCase","prompt"),e.xp6(1),e.Q6J("ngSwitchCase","description")}}function Sn(u,y){if(1&u&&(e.TgZ(0,"div",37),e._UZ(1,"formly-validation-message",29),e.qZA()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("field",c.field)}}let rt=(()=>{class u extends v.n2{get errorState(){return this.showError?"error":""}constructor(){super(),this.formLayout="vertical"}ngOnInit(){try{this.wrapper={layout:{item:{gutter:[6,12],...this.props.layout?.item?this.props.layout.item:void 0},label:{span:4,...this.props.layout?.label?this.props.layout.label:void 0},control:{span:20,...this.props.layout?.control?this.props.layout?.control:void 0}},showExtra:void 0===this.props.layout?.showExtra||this.props.layout.showExtra}}catch(c){console.error(c)}this.options.formState.formLayout&&(this.formLayout=this.options.formState.formLayout)}ngAfterViewInit(){this.options.formState.formLayout&&(this.formLayout=this.options.formState.formLayout)}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-form-field-wrapper"]],features:[e.qOj],decls:14,vars:4,consts:[[3,"ngSwitch"],["class","layout-horizontal",4,"ngSwitchCase"],["class","layout-inline",4,"ngSwitchCase"],["class","layout-vertical",4,"ngSwitchCase"],["horizontalFieldWrapper",""],["verticalFieldWrapper",""],["inlineFieldWrapper",""],["descriptionTpl",""],["errorTpl",""],[1,"layout-horizontal"],[3,"ngTemplateOutlet"],[1,"layout-inline"],[1,"layout-vertical"],[1,"layout-horizontal",3,"nzGutter","ngClass"],[4,"ngIf"],[3,"nzExtra","nzValidateStatus","nzErrorTip","nzSpan",4,"ngrxLet"],[3,"nzRequired","nzFor","nzNoColon","nzTooltipTitle","nzSpan",4,"ngrxLet"],[3,"nzRequired","nzFor","nzNoColon","nzTooltipTitle","nzSpan"],["nz-typography","","nzEllipsis","",3,"nzContent"],[3,"nzExtra","nzValidateStatus","nzErrorTip","nzSpan"],["fieldComponent",""],[1,"layout-vertical",3,"ngClass"],[3,"nzExtra","nzValidateStatus","nzErrorTip",4,"ngrxLet"],[3,"ngClass","nzRequired","nzFor","nzTooltipTitle","nzNoColon",4,"ngrxLet"],[3,"ngClass","nzRequired","nzFor","nzTooltipTitle","nzNoColon"],["nz-typography","","nzEllipsis","",1,"label",3,"nzContent"],[3,"nzExtra","nzValidateStatus","nzErrorTip"],[1,"layout-inline",3,"ngClass"],[3,"nzRequired","nzTooltipTitle","nzFor","nzNoColon"],[3,"field"],[1,"form-field-description"],["class","extra-prompt",3,"innerHTML",4,"ngSwitchCase"],["class","extra-description",3,"innerHTML",4,"ngSwitchCase"],[3,"innerHTML",4,"ngSwitchDefault"],[1,"extra-prompt",3,"innerHTML"],[1,"extra-description",3,"innerHTML"],[3,"innerHTML"],[1,"cvc-form-field-validation"]],template:function(c,m){1&c&&(e.ynx(0,0),e.YNc(1,Z,2,1,"div",1),e.YNc(2,A,2,1,"div",2),e.YNc(3,V,2,1,"div",3),e.BQk(),e.YNc(4,ae,3,9,"ng-template",null,4,e.W1O),e.YNc(6,Se,3,8,"ng-template",null,5,e.W1O),e.YNc(8,Mt,3,8,"ng-template",null,6,e.W1O),e.YNc(10,rn,5,3,"ng-template",null,7,e.W1O),e.YNc(12,Sn,2,1,"ng-template",null,8,e.W1O)),2&c&&(e.Q6J("ngSwitch",m.formLayout),e.xp6(1),e.Q6J("ngSwitchCase","horizontal"),e.xp6(1),e.Q6J("ngSwitchCase","inline"),e.xp6(1),e.Q6J("ngSwitchCase","vertical"))},dependencies:[M.mk,M.O5,M.tP,M.RF,M.n9,M.ED,R.eJ,pe.t3,pe.SK,s.Nx,s.iK,s.Fd,me.ZU,v.M2],styles:['.typeahead-match[_ngcontent-%COMP%]{font-weight:700}.layout-vertical[_ngcontent-%COMP%]     nz-form-item:first-of-type{flex-wrap:nowrap;flex-direction:column}.layout-horizontal[_ngcontent-%COMP%]     nz-form-item:first-of-type{flex-direction:inherit}.layout-horizontal[_ngcontent-%COMP%]     nz-form-item:first-of-type nz-form-label{text-align:right;line-height:28px;white-space:inherit;padding:inherit}.layout-inline[_ngcontent-%COMP%]     nz-form-item:first-of-type{flex-direction:inherit}.layout-inline[_ngcontent-%COMP%]     nz-form-item:first-of-type nz-form-label{height:28px;line-height:28px;white-space:inherit;padding:inherit}.cvc-form-field-validation[_ngcontent-%COMP%], .form-field-description[_ngcontent-%COMP%]{min-height:16px;line-height:1.2;margin-top:4px}.cvc-form-field-validation[_ngcontent-%COMP%]   .extra-prompt[_ngcontent-%COMP%], .form-field-description[_ngcontent-%COMP%]   .extra-prompt[_ngcontent-%COMP%]{font-weight:400}.cvc-form-field-validation[_ngcontent-%COMP%]   .extra-description[_ngcontent-%COMP%], .form-field-description[_ngcontent-%COMP%]   .extra-description[_ngcontent-%COMP%]{font-style:oblique}.cvc-form-field-validation[_ngcontent-%COMP%]{font-weight:600}nz-form-item.layout-horizontal[_ngcontent-%COMP%]     nz-form-label:first-of-type label.ant-form-item-required{font-weight:500}nz-form-item.layout-horizontal[_ngcontent-%COMP%]     nz-form-label:first-of-type label.ant-form-item-required:before{border:1px solid #ff4d4f;height:1em;content:""}nz-form-item.layout-horizontal[_ngcontent-%COMP%]     nz-form-label:first-of-type   span.label{padding-right:4px}nz-form-item.layout-horizontal[_ngcontent-%COMP%]     nz-form-label:first-of-type.disabled label   span.label{color:#00000073}nz-form-item.layout-horizontal[_ngcontent-%COMP%]     nz-form-label:first-of-type.error label   span.label{color:#ff4d4f}nz-form-item.layout-horizontal[_ngcontent-%COMP%]     nz-form-label:first-of-type.valid label   span.label{color:#ff4d4f}nz-form-item.layout-vertical[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #d9d9d9;padding:4px 8px;border-radius:6px;margin-bottom:16px}nz-form-item.layout-vertical.disabled[_ngcontent-%COMP%]{border:1px solid #f5f5f5;background-color:#f5f5f5}nz-form-item.layout-vertical[_ngcontent-%COMP%]     nz-form-label:first-of-type label.ant-form-item-required{font-weight:500}nz-form-item.layout-vertical[_ngcontent-%COMP%]     nz-form-label:first-of-type label.ant-form-item-required:before{border:1px solid #ff4d4f;height:1em;content:""}nz-form-item.layout-vertical[_ngcontent-%COMP%]     nz-form-label:first-of-type   span.label{padding-right:4px}nz-form-item.layout-vertical[_ngcontent-%COMP%]     nz-form-label:first-of-type.disabled label   span.label{color:#00000073}nz-form-item.layout-vertical[_ngcontent-%COMP%]     nz-form-label:first-of-type.error label   span.label{color:#ff4d4f}nz-form-item.layout-vertical[_ngcontent-%COMP%]     nz-form-label:first-of-type.valid label   span.label{color:#ff4d4f}nz-form-item.layout-inline[_ngcontent-%COMP%]     nz-form-label:first-of-type{text-align:right;margin-right:6px}nz-form-item.layout-inline[_ngcontent-%COMP%]     nz-form-label:first-of-type label.ant-form-item-required{font-weight:500}nz-form-item.layout-inline[_ngcontent-%COMP%]     nz-form-label:first-of-type label.ant-form-item-required:before{border:1px solid #ff4d4f;height:1em;content:""}nz-form-item.layout-inline[_ngcontent-%COMP%]     nz-form-label:first-of-type   span.label{padding-right:4px}nz-form-item.layout-inline[_ngcontent-%COMP%]     nz-form-label:first-of-type.disabled label   span.label{color:#00000073}nz-form-item.layout-inline[_ngcontent-%COMP%]     nz-form-label:first-of-type.error label   span.label{color:#ff4d4f}nz-form-item.layout-inline[_ngcontent-%COMP%]     nz-form-label:first-of-type.valid label   span.label{color:#ff4d4f}'],changeDetection:0}),u})();var Ye=a(6109),st=a(551);const Ze={wrappers:[{name:"form-field",component:rt}]};let Bt=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,s.U5,pe.Jb,st.PV,Ye.cg,me.ZJ,v.X0.forChild(Ze)]}),u})();var Jt=a(2612);const On={types:[{name:"checkbox",wrappers:["form-field"],component:(()=>{class u extends v.fS{constructor(){super(...arguments),this.defaultOptions={props:{indeterminate:!0,hideLabel:!0}}}ngAfterViewInit(){console.log(this.props)}}return u.\u0275fac=function(){let y;return function(m){return(y||(y=e.n5z(u)))(m||u)}}(),u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-checkbox"]],features:[e.qOj],decls:2,vars:4,consts:[["nz-checkbox","",3,"nzIndeterminate","formControl","formlyAttributes","ngModelChange"]],template:function(c,m){1&c&&(e.TgZ(0,"label",0),e.NdJ("ngModelChange",function(Ae){return m.props.change&&m.props.change(m.field,Ae)}),e._uU(1),e.qZA()),2&c&&(e.Q6J("nzIndeterminate",m.props.indeterminate&&null==m.formControl.value)("formControl",m.formControl)("formlyAttributes",m.field),e.xp6(1),e.hij(" ",m.props.label,"\n"))},dependencies:[t.JJ,t.oH,Jt.Ie,v.JD],changeDetection:0}),u})()}]};let cn=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,Jt.Wr,v.X0.forChild(On),Bt]}),u})();var wt=a(5695),Ve=a(2524);let Be=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,wt.X,st.PV,Ye.cg,Ve.s]}),u})();var He=a(7248),je=a(824),Ne=a(9691);let De=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(),He.F,st.PV,s.U5,Ne.LV,je.o7,Ve.s]}),u})();var ie=a(2),Ce=a(655),ve=a(1791),qe=a(2181),ct=a(5619),Zt=a(7398),Cn=a(4223);function at(){var u;let y=((u=class extends v.fS{configureBaseField(){this.field?.options?.fieldChanges?(this.onModelChange$=this.field.options.fieldChanges.pipe((0,qe.h)(m=>m.field.id===this.field.id),(0,Cn.j)("value")),this.onValueChange$=new ct.X(this.formControl.value?this.formControl.value:void 0),this.onModelChange$.pipe((0,ve.t)(this)).subscribe(m=>{this.onValueChange$.next(m)}),this.field.options?.formState&&this.field.options.formState.fields&&(this.state=this.field.options.formState,this.autoConfigureStateValueChanges())):console.error(`${this.field.id} could not find its fieldChanges Observable, ensure configureBaseField() is called in this field's AfterViewInit hook.`)}autoConfigureStateValueChanges(){!this.field.key&&"string"==typeof this.field.key&&console.warn(`${this.field.id} cannot auto-configure state value changes, as its field key is not a string. field.key: `,this.field.key);const m=`${this.field.key}$`;this.state&&this.state.fields[m]?(this.stateValueChange$=this.state.fields[m],this.onValueChange$.pipe((0,Zt.U)(G=>null===G?void 0:G),(0,ve.t)(this)).subscribe(G=>{this.stateValueChange$&&this.stateValueChange$.next(G)})):console.warn(`${this.field.id} could not find state field ${m} on form state. State: `,this.state)}}).\u0275fac=function(){let c;return function(G){return(c||(c=e.n5z(u)))(G||u)}}(),u.\u0275prov=e.Yz7({token:u,factory:u.\u0275fac}),u);return y=(0,Ce.gn)([(0,ve.c)()],y),y}var Xe=a(8645),it=a(2460);function Ot(){return function(y){return(()=>{class m extends y{configureEnumSelectField(Ae){this.selectOption$=new ct.X([]),this.onTagClose$=new Xe.x,this.optionEnum$=Ae.optionEnum$,this.changeDetectorRef=Ae.changeDetectorRef,this.optionTemplate$=Ae.optionTemplate$?Ae.optionTemplate$:new ct.X([]),this.optionTemplate$.pipe((0,it.M)(this.optionEnum$),(0,ve.t)(this)).subscribe(Dt=>{this.emitSelectOptions(Dt)}),this.onTagClose$.pipe((0,ve.t)(this)).subscribe(Dt=>{this.resetField()})}emitSelectOptions([Ae,Dt]){this.selectOption$.next(Dt.map((Mn,kn)=>({label:Ae[kn]||Mn,value:Mn}))),this.changeDetectorRef?this.changeDetectorRef.detectChanges():console.error(`${this.field.id}'s configureEnumTagField() requires valid ChangeDetectorRef option, none detected.`)}resetField(){this.formControl.setValue(this.props.isMultiSelect?[]:void 0)}}return m.\u0275fac=function(){let G;return function(Dt){return(G||(G=e.n5z(m)))(Dt||m)}}(),m.\u0275prov=e.Yz7({token:m,factory:m.\u0275fac}),m})()}}var Pt=a(836);const kt=function Wt(u){for(var y=arguments.length,c=new Array(y>1?y-1:0),m=1;m<y;m++)c[m-1]=arguments[m];return c.reduce(function(G,Ae){return Ae(G)},u)},Je=function(){return[]};let K=(()=>{class u{constructor(){this.cvcSelectMode="default",this.cvcPlaceholder="Select an option",this.cvcOptions=[],this.cvcShowError=!1,this.cvcDisabled=!1,this.cvcAllowClear=!0,this.cvcCustomTemplate=null,this.cvcOnFocus=new e.vpe}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-enum-select"]],inputs:{cvcFormControl:"cvcFormControl",cvcFormlyAttributes:"cvcFormlyAttributes",cvcSelectMode:"cvcSelectMode",cvcPlaceholder:"cvcPlaceholder",cvcOptions:"cvcOptions",cvcShowError:"cvcShowError",cvcDisabled:"cvcDisabled",cvcAllowClear:"cvcAllowClear",cvcModelChange:"cvcModelChange",cvcCustomTemplate:"cvcCustomTemplate"},outputs:{cvcOnFocus:"cvcOnFocus"},decls:1,vars:12,consts:[[3,"formControl","formlyAttributes","nzMode","nzPlaceHolder","nzOptions","nzCustomTemplate","nzOptionHeightPx","nzDisabled","nzAllowClear","nzFocus","ngModelChange"]],template:function(c,m){1&c&&(e.TgZ(0,"nz-select",0),e.NdJ("nzFocus",function(){return m.cvcOnFocus.next()})("ngModelChange",function(Ae){return m.cvcModelChange&&m.cvcModelChange(m.cvcFormlyAttributes,Ae)}),e.qZA()),2&c&&(e.ekj("ng-dirty",m.cvcShowError),e.Q6J("formControl",m.cvcFormControl)("formlyAttributes",m.cvcFormlyAttributes)("nzMode",m.cvcSelectMode)("nzPlaceHolder",m.cvcPlaceholder?m.cvcPlaceholder:"Select Value")("nzOptions",m.cvcOptions?m.cvcOptions:e.DdM(11,Je))("nzCustomTemplate",m.cvcCustomTemplate?m.cvcCustomTemplate:null)("nzOptionHeightPx",30)("nzDisabled",m.cvcDisabled)("nzAllowClear",m.cvcAllowClear))},dependencies:[t.JJ,t.oH,v.JD,Ne.Vq],changeDetection:0}),u})();var N=a(6967),J=a(7334);function Me(u,y){}function zt(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"span",5)(1,"nz-tag",6),e.NdJ("nzOnClose",function(G){e.CHM(c);const Ae=e.oxw();return e.KtG(Ae.cvcOnClose.next(G))}),e.YNc(2,Me,0,0,"ng-template",7),e.qZA()()}if(2&u){const c=e.oxw(),m=e.MAs(5);e.xp6(1),e.Q6J("nzMode",c.cvcMode)("nzTooltipTitle",c.cvcTooltip)("nzChecked",c.cvcChecked),e.xp6(1),e.Q6J("ngTemplateOutlet",m)}}function nt(u,y){}function We(u,y){if(1&u&&(e.TgZ(0,"span",8)(1,"nz-tag",9),e.YNc(2,nt,0,0,"ng-template",7),e.qZA()()),2&u){const c=e.oxw(),m=e.MAs(5);e.xp6(1),e.Q6J("nzMode","checkable")("nzChecked",c.cvcChecked),e.xp6(1),e.Q6J("ngTemplateOutlet",m)}}function ot(u,y){}function Vt(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"span",10)(1,"nz-tag",11),e.NdJ("nzOnClose",function(G){e.CHM(c);const Ae=e.oxw();return e.KtG(Ae.cvcOnClose.next(G))}),e.YNc(2,ot,0,0,"ng-template",7),e.qZA()()}if(2&u){e.oxw();const c=e.MAs(5);e.xp6(1),e.Q6J("nzMode","closeable"),e.xp6(1),e.Q6J("ngTemplateOutlet",c)}}function St(u,y){}function mn(u,y){if(1&u&&(e.TgZ(0,"span",12)(1,"nz-tag",13),e.YNc(2,St,0,0,"ng-template",7),e.qZA()()),2&u){const c=e.oxw(),m=e.MAs(5);e.xp6(1),e.Q6J("nzMode","default")("nzTooltipTitle",c.cvcTooltip),e.xp6(1),e.Q6J("ngTemplateOutlet",m)}}const Qe=function(u){return{"tag-icon-large":u}};function dt(u,y){if(1&u&&(e._UZ(0,"i",16),e.ALo(1,"evidenceEnumDisplay")),2&u){const c=e.oxw(2);e.Q6J("nzType",!0===c.cvcShowIcon?e.xi3(1,5,c.cvcAttrValue,"icon-name"):c.cvcShowIcon)("nzTwotoneColor",c.cvcIconColor)("nzTheme",c.cvcIconTheme)("ngClass",e.VKq(8,Qe,!0===c.cvcZoomIcon)),e.uIk("style","color: "+c.cvcIconColor,e.Ckj)}}function se(u,y){if(1&u&&(e._UZ(0,"span",17),e.ALo(1,"highlightTypeahead"),e.ALo(2,"evidenceEnumDisplay")),2&u){const c=e.oxw(2);e.Q6J("innerHtml",e.xi3(1,1,e.xi3(2,4,c.cvcAttrValue,"display-string"===c.cvcShowLabel?c.cvcShowLabel:"short-string"),c.cvcEmphasize),e.oJD)}}function ze(u,y){if(1&u&&(e.YNc(0,dt,2,10,"i",14),e.YNc(1,se,3,7,"span",15)),2&u){const c=e.oxw();e.Q6J("ngIf",c.cvcAttrValue&&c.cvcShowIcon),e.xp6(1),e.Q6J("ngIf",c.cvcShowLabel)}}let mt=(()=>{class u{constructor(){this.cvcShowLabel="display-string",this.cvcShowIcon=!0,this.cvcZoomIcon=!1,this.cvcContext="default",this.cvcMode="default",this.cvcChecked=!1,this.cvcIconColor="#797979",this.cvcLabelColor="#434343",this.cvcIconTheme="outline",this.cvcFullWidth=!1,this.cvcOnClose=new e.vpe}ngOnChanges(c){c.cvcContext&&"compact"===c.cvcContext.currentValue&&(this.cvcShowIcon=!0,this.cvcShowLabel=!1,this.cvcZoomIcon=!0)}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-attribute-tag"]],hostVars:2,hostBindings:function(c,m){2&c&&e.ekj("full-width",!0===m.cvcFullWidth)},inputs:{cvcAttrValue:"cvcAttrValue",cvcShowLabel:"cvcShowLabel",cvcShowIcon:"cvcShowIcon",cvcZoomIcon:"cvcZoomIcon",cvcTooltip:"cvcTooltip",cvcContext:"cvcContext",cvcMode:"cvcMode",cvcChecked:"cvcChecked",cvcEmphasize:"cvcEmphasize",cvcIconColor:"cvcIconColor",cvcLabelColor:"cvcLabelColor",cvcIconTheme:"cvcIconTheme",cvcFullWidth:"cvcFullWidth"},outputs:{cvcOnClose:"cvcOnClose"},features:[e.TTD],decls:6,vars:4,consts:[["class","default",4,"ngIf"],["class","menu-item",4,"ngIf"],["class","select-item",4,"ngIf"],["class","compact",4,"ngIf"],["tagContent",""],[1,"default"],["nz-tooltip","",3,"nzMode","nzTooltipTitle","nzChecked","nzOnClose"],[3,"ngTemplateOutlet"],[1,"menu-item"],[3,"nzMode","nzChecked"],[1,"select-item"],[3,"nzMode","nzOnClose"],[1,"compact"],["nz-tooltip","",3,"nzMode","nzTooltipTitle"],["nz-icon","","class","tag-icon",3,"nzType","nzTwotoneColor","nzTheme","ngClass",4,"ngIf"],["class","tag-label",3,"innerHtml",4,"ngIf"],["nz-icon","",1,"tag-icon",3,"nzType","nzTwotoneColor","nzTheme","ngClass"],[1,"tag-label",3,"innerHtml"]],template:function(c,m){1&c&&(e.YNc(0,zt,3,4,"span",0),e.YNc(1,We,3,3,"span",1),e.YNc(2,Vt,3,2,"span",2),e.YNc(3,mn,3,3,"span",3),e.YNc(4,ze,2,2,"ng-template",null,4,e.W1O)),2&c&&(e.Q6J("ngIf","default"===m.cvcContext),e.xp6(1),e.Q6J("ngIf","menu-item"===m.cvcContext),e.xp6(1),e.Q6J("ngIf","select-item"===m.cvcContext),e.xp6(1),e.Q6J("ngIf","compact"===m.cvcContext))},dependencies:[M.mk,M.O5,M.tP,wt.j,st.Ls,Ye.SY,N.Do,J.A],styles:['.full-width[_nghost-%COMP%]{width:100%}.full-width[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin-right:0;margin-inline-end:4px}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%], .default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{display:inline-block}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]     svg{transform:scale(1.25)}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%], .compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{display:inline-block}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]     svg{transform:scale(1.25)}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.menu-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{background-color:#fff}.menu-item[_ngcontent-%COMP%]   nz-tag.ant-tag-checkable[_ngcontent-%COMP%]{border:1px solid #d9d9d9}.menu-item[_ngcontent-%COMP%]   nz-tag.ant-tag-checkable[_ngcontent-%COMP%]:active{background-color:#e6f7ff}.menu-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]:not(.menu-item   nz-tag.ant-tag-checkable-checked)[_ngcontent-%COMP%]:hover{color:#000000d9;border-color:#1890ff}.menu-item[_ngcontent-%COMP%]   nz-tag.ant-tag-checkable-checked[_ngcontent-%COMP%]{border:transparent;background-color:#fff;color:#000000d9}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%], .select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{display:inline-block}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]     svg{transform:scale(1.25)}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{background:#f5f5f5;border:1px solid #f0f0f0}.multi-select-item[_ngcontent-%COMP%]{display:inline-block;margin-top:-3px;margin-bottom:-3px;margin-left:-4px;padding-left:4px}.multi-select-item[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]:after{content:" "}.typeahead-match[_ngcontent-%COMP%]{font-weight:700}'],changeDetection:0}),u})();const Pe=["optionTemplates"];function lt(u,y){if(1&u&&e._UZ(0,"cvc-attribute-tag",4),2&u){const c=e.oxw().$implicit;e.Q6J("cvcAttrValue",c)}}function Yt(u,y){1&u&&(e.ynx(0),e.YNc(1,lt,1,1,"ng-template",null,3,e.W1O),e.BQk())}function un(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",5)(1,"cvc-attribute-tag",6),e.NdJ("cvcOnClose",function(G){e.CHM(c);const Ae=e.oxw();return e.KtG(Ae.onTagClose$.next(G))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcAttrValue",c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}const Nt={Evidence:{PREDICTIVE:{SUPPORTS:"Experiment or study supports the variant's response to a drug",DOES_NOT_SUPPORT:"Experiment or study does not support, or was inconclusive of an interaction between the variant and a drug"},DIAGNOSTIC:{SUPPORTS:"Experiment or study supports the variant's impact on the diagnosis of disease or subtype",DOES_NOT_SUPPORT:"Experiment or study does not support the variant's impact on diagnosis of disease or subtype"},PROGNOSTIC:{SUPPORTS:"Experiment or study supports the variant's impact on prognostic outcome",DOES_NOT_SUPPORT:"Experiment or study does not support a prognostic association between variant and outcome"},PREDISPOSING:{SUPPORTS:"Suggests a pathogenic or a protective role for a germline variant in cancer",DOES_NOT_SUPPORT:"Supports a benign (for Predisposition) or lack of protective (for Protectiveness) role for a germline variant in cancer."},FUNCTIONAL:{SUPPORTS:"Experiment or study supports the variant causing alteration or non-alteration of the gene product function",DOES_NOT_SUPPORT:"Experiment or study does not support the variant causing alteration or non-alteration of the gene product function"},ONCOGENIC:{NA:"Not Applicable for Oncogenic Evidence Type.",SUPPORTS:"Supports an oncogenic or protective role for a somatic variant.",DOES_NOT_SUPPORT:"Supports a benign (for Oncogenicity) or lack of protective (for Protectiveness) role for a somatic variant in cancer."}},Assertion:{PREDICTIVE:{SUPPORTS:"Support the variant's response to a drug",DOES_NOT_SUPPORT:"Does not support, or was inconclusive of an interaction between the variant and a drug"},DIAGNOSTIC:{SUPPORTS:"Supports the variant's impact on the diagnosis of disease or subtype",DOES_NOT_SUPPORT:"Does not support the variant's impact on diagnosis of disease or subtype"},PROGNOSTIC:{SUPPORTS:"Supports the variant's impact on prognostic outcome",DOES_NOT_SUPPORT:"Does not support a prognostic association between variant and outcome"},PREDISPOSING:{SUPPORTS:"Suggests a pathogenic or a protective role for a germline variant in cancer",DOES_NOT_SUPPORT:"Does not support an association between the variant and disease causation"},FUNCTIONAL:{SUPPORTS:"Supports the variant causing alteration or non-alteration of the gene product function",DOES_NOT_SUPPORT:"Does not support the variant causing alteration or non-alteration of the gene product function"},ONCOGENIC:{SUPPORTS:"Supports an oncogenic or protective role for a somatic variant",DOES_NOT_SUPPORT:"Does not support an association between the variant and disease causation"}}},pt=kt(at(),Ot()),ee={types:[{name:"direction-select",wrappers:["form-field"],component:(()=>{class u extends pt{constructor(c){super(),this.cdr=c,this.defaultOptions={props:{label:"Direction",labelFn:m=>`${m} Direction`,required:!0,isMultiSelect:!1,placeholder:"Select Entity Direction",placeholderFn:(m,G)=>`Select ${G?G+" ":""}${m} Direction`,requireTypePromptFn:m=>`Select ${m} Type to select its Direction`,formMode:"add"}},this.directionEnum$=new ct.X([])}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.directionEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}configureStateConnections(){if(!this.state)return console.error(`${this.field.id} requires a form state to populate its options, none was found.`),void(this.placeholder$=new ct.X("ERROR: Form state not found"));if(this.props.label=this.props.labelFn(this.state.entityName),this.props.tooltip=`An indicator of whether the ${this.state.entityName} statement supports or refutes the clinical significance of an event.`,this.placeholder$=new ct.X(this.props.placeholderFn(this.state.entityName)),!this.state.enums.direction$)return void console.error(`${this.field.id} could not find form state's direction$ to populate select.`);this.state.enums.direction$.pipe((0,ve.t)(this)).subscribe(m=>{this.directionEnum$.next(m)}),this.optionTemplates||console.info(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,Zt.U)(m=>m.map(G=>G)));const c=`${this.state.entityName.toLowerCase()}Type$`;this.state.fields[c]?(this.onEntityType$=this.state.fields[c],this.onEntityType$.pipe((0,Pt.T)("add"===this.props.formMode?0:1),(0,ve.t)(this)).subscribe(m=>{m?(this.props.disabled=!1,this.props.description=void 0,this.props.extraType=void 0,this.placeholder$.next(this.props.placeholderFn(this.state.entityName,(0,ie.E)(m)))):(this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName),this.props.extraType="prompt"),this.formControl.value&&this.formControl.setValue(void 0)}),this.onValueChange$.pipe((0,it.M)(this.onEntityType$),(0,ve.t)(this)).subscribe(([m,G])=>{!G||!m||!this.state||(this.props.extraType="description",this.props.description=Nt[this.state.entityName][G][m])})):console.error(`${this.field.id} could not find form state's ${c} to populate Direction options.`)}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-direction-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(Pe,5,e.Rgc),2&c){let G;e.iGM(G=e.CRH())&&(m.optionTemplates=G)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcAttrValue","cvcContext","cvcMode","cvcOnClose"]],template:function(c,m){if(1&c&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,Yt,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,un,2,3,"ng-template",null,2,e.W1O)),2&c){const G=e.MAs(6);e.Q6J("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,m.placeholder$))("cvcCustomTemplate",G)("cvcOptions",e.lcZ(2,11,m.selectOption$))("cvcShowError",m.showError)("cvcDisabled",m.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,m.directionEnum$))}},dependencies:[M.sg,K,mt,R.fM],changeDetection:0}),u})()}]};let H=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(ee),Bt,De,Be]}),u})();var Te=a(5717),$e=a(188),Tt=a(2574),Xt=a(3903),qt=a(6987);let Un=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(),Xt.L,st.PV,Ne.LV,je.o7,s.U5,me.ZJ,Te.ic,Tt.zf,qt.S,$e.x,Ve.s]}),u})();var zn=a(1227),Vn=a(2840),vo=a(67),Xn=a(7417),Ao=a(7328),jo=a(5592),ei=a(2096),bo=a(4664),eo=a(9666),hi=a(2428),si=a(4911),Fo=a(9397),xo=a(5676),Do=a(2572);function Ri(...u){let y=u[0],c=u[1];if(0===y.length)return(0,ei.of)(c?c([]):[]);const m=y.slice();return c&&m.push((...G)=>c(G)),Do.a.apply(null,m)}function oi(){return function(y){return(()=>{class m extends y{configureEntitySelectField(Ae){if(this.typeaheadQuery=Ae.typeaheadQuery,this.tagQuery=Ae.tagQuery,this.getTypeaheadVars=Ae.getTypeaheadVarsFn,this.getTypeahedResults=Ae.getTypeaheadResultsFn,this.getTagQueryVars=Ae.getTagQueryVarsFn,this.getTagQueryResults=Ae.getTagQueryResultsFn,this.getSelectedItemOption=Ae.getSelectedItemOptionFn,this.getSelectOptions=Ae.getSelectOptionsFn,this.typeaheadParam$=Ae.typeaheadParam$,this.typeaheadParamName$=Ae.typeaheadParamName$,this.selectOpen$=Ae.selectOpen$||new Ao.t,this.selectComponent=Ae.selectComponent,this.minSearchStrLength=Ae.minSearchStrLength||0,this.cdr=Ae.changeDetectorRef,this.onSearch$=new ct.X(void 0),this.isLoading$=new jo.y,this.result$=new ct.X([]),this.onPopulate$=new Xe.x,this.onTagClose$=new Xe.x,this.onOpenChange$=new Xe.x,this.onCreate$=new Xe.x,this.selectOption$=new ct.X(void 0),this.response$=this.onSearch$.pipe((0,Pt.T)(1),(0,qe.h)(xo.ep),(0,qe.h)(Dt=>0===this.minSearchStrLength||Dt.length>=this.minSearchStrLength),(0,it.M)(void 0!==this.typeaheadParam$?this.typeaheadParam$:(0,ei.of)(void 0)),(0,bo.w)(([Dt,Mn])=>{const kn=this.getTypeaheadVars(Dt,Mn),$o=$i=>(this.queryRef=this.typeaheadQuery.watch($i),this.isLoading$=this.queryRef.valueChanges.pipe((0,Cn.j)("loading"),(0,j.x)()),this.queryRef.valueChanges),Wi=$i=>(0,eo.D)(this.queryRef.refetch($i));return(0,hi.s)(()=>void 0===this.queryRef,(0,si.P)(()=>$o(kn)),(0,si.P)(()=>Wi(kn)))})),this.onOpenChange$.subscribe(Dt=>{Dt&&this.onSearch$.next("")}),this.response$.pipe((0,qe.h)(Dt=>void 0!==Dt.data),(0,Zt.U)(Dt=>this.getTypeahedResults(Dt)),(0,ve.t)(this)).subscribe(Dt=>{this.result$.next(Dt),0===Dt.length&&this.selectOption$.next([]),this.cdr.detectChanges()}),this.optionTemplates?this.optionTemplates.changes.pipe((0,it.M)(this.result$),(0,ve.t)(this)).subscribe(([Dt,Mn])=>{const kn=this.getSelectOptions(Mn,Dt);this.selectOption$.next(kn),this.cdr.detectChanges()}):(console.warn(`${this.field.id} could not find reference to optionTemplates ViewChildren, options will only show entity name text.`),this.result$.pipe((0,ve.t)(this)).subscribe(Dt=>{this.selectOption$.next(Dt.map(Mn=>({label:Mn.name,value:Mn.id})))})),this.onPopulate$.pipe((0,qe.h)(xo.ep),(0,bo.w)(Dt=>Ri(this.getTagQueries(Dt))),(0,Zt.U)(Dt=>Dt.map(Mn=>this.getTagQueryResults(Mn))),(0,Fo.b)(Dt=>{this.result$.next(Dt)}),(0,ve.t)(this)).subscribe(Dt=>{let Mn;if(this.field.props&&this.field.props.isMultiSelect){const kn=[];Dt.forEach($o=>kn.push($o?.id||void 0)),Mn=kn}else Mn=Dt[0].id;this.formControl.setValue(Mn),this.selectOpen$.next(!1)}),this.formControl.value){const Dt=this.formControl.value;if(Object.keys(Dt).length>0&&Dt.constructor===Object)return void console.error(`${this.field.id} prepopulated value must be a primitive or array of primitives, value is an object:`,Dt);this.onPopulate$.next(Dt)}this.onTagClose$.pipe((0,ve.t)(this)).subscribe(Dt=>{this.resetField()})}getTagQueries(Ae){return"number"==typeof Ae&&(Ae=[Ae]),Ae.map(Mn=>this.tagQuery.fetch(this.getTagQueryVars(Mn),{fetchPolicy:"cache-first"}).pipe((0,qe.h)(kn=>!!kn.data)))}resetField(){this.formControl.setValue(void 0),this.result$&&this.result$.next([])}}return m.\u0275fac=function(){let G;return function(Dt){return(G||(G=e.n5z(m)))(Dt||m)}}(),m.\u0275prov=e.Yz7({token:m,factory:m.\u0275fac}),m})()}}var Ui,Ti=a(8180),Fn=a(313),Mi=a(8753),bi=a(6321),nr=a(7081);function Pr(u,y){1&u&&e._UZ(0,"span",5),2&u&&e.Q6J("nzType","loading")}function Oi(u,y){if(1&u&&(e.YNc(0,Pr,1,1,"span",4),e.ynx(1),e._uU(2),e.BQk()),2&u){const c=e.oxw().ngrxLet;e.Q6J("ngIf",c.showSpinner),e.xp6(2),e.hij(" ",c.message," ")}}const or=function(u,y,c){return{$implicit:u,createMsg:y,model:c}};function Xi(u,y){if(1&u&&(e._UZ(0,"nz-divider"),e.TgZ(1,"div",6),e.GkF(2,7),e.qZA()),2&u){const c=e.oxw().ngrxLet,m=e.oxw();e.xp6(2),e.Q6J("ngTemplateOutlet",m.cvcAddEntity)("ngTemplateOutletContext",e.kEZ(2,or,c.searchStr,c.message,m.cvcAddEntityModel))}}const pr=function(){return[]};function hr(u,y){if(1&u){const c=e.EpF();e.ynx(0),e.TgZ(1,"nz-select",1),e.NdJ("nzOpenChange",function(G){e.CHM(c);const Ae=e.oxw();return e.KtG(Ae.onOpenChange$.next(G))})("nzOnSearch",function(G){e.CHM(c);const Ae=e.oxw();return e.KtG(Ae.cvcOnSearch.next(G))})("ngModelChange",function(G){e.CHM(c);const Ae=e.oxw();return e.KtG(Ae.cvcOnModelChange.next(G))}),e.qZA(),e.YNc(2,Oi,3,2,"ng-template",null,2,e.W1O),e.YNc(4,Xi,3,6,"ng-template",null,3,e.W1O),e.BQk()}if(2&u){const c=y.ngrxLet,m=e.MAs(3),G=e.MAs(5),Ae=e.oxw();e.xp6(1),e.ekj("ng-dirty",Ae.cvcShowError),e.Q6J("nzDropdownMatchSelectWidth",!0)("formControl",Ae.cvcFormControl)("formlyAttributes",Ae.cvcFormlyAttributes)("nzMode",Ae.cvcSelectMode)("nzPlaceHolder",Ae.cvcPlaceholder||"Search "+Ae.cvcEntityName.plural)("nzCustomTemplate",Ae.cvcCustomTemplate||null)("nzOptionHeightPx",30)("nzDisabled",Ae.cvcDisabled)("nzLoading",Ae.cvcLoading)("nzAllowClear",Ae.cvcAllowClear)("nzBorderless",Ae.cvcBorderless)("nzSuffixIcon",Ae.cvcSuffixIcon)("nzShowArrow",Ae.cvcShowArrow)("nzAutoClearSearchValue",Ae.cvcAutoClearSearchValue)("nzOptions",Ae.cvcOptions||e.DdM(20,pr))("nzDropdownRender",c.showAddForm?G:null)("nzNotFoundContent",m)("nzOpen",Ae.cvcSelectOpen)}}const lo={search:(u,y,c)=>`Searching ${u} matching "${y}"...`,searchAll:(u,y,c)=>`Listing all ${u}...`,searchParam:(u,y,c)=>`Searching ${c} ${u} matching "${y}"...`,searchParamAll:(u,y,c)=>`Listing all ${c} ${u}...`,searchEnterQuery:(u,y,c,m)=>`Enter at least ${m} characters to search ${c} ${u}`,searchEnterQueryAll:(u,y,c,m)=>`Enter at least least ${m} characters to search ${u}`,empty:(u,y,c)=>`No ${u} found matching "${y}"`,emptyAll:(u,y,c)=>`No ${u} found.`,emptyParam:(u,y,c)=>`No ${c} ${u} found matching "${y}"`,emptyParamAll:(u,y,c)=>`No ${c} ${u} found`};let Oo=((Ui=class{constructor(){this.cvcEntityName={singular:"Entity",plural:"Entities"},this.cvcSelectMode="default",this.cvcLoading=!1,this.cvcOptions=void 0,this.cvcShowError=!1,this.cvcDisabled=!1,this.cvcAllowClear=!0,this.cvcBorderless=!1,this.cvcShowArrow=!1,this.cvcAutoClearSearchValue=!0,this.cvcSuffixIcon="search",this.cvcCustomTemplate=null,this.cvcAddEntity=null,this.cvcMinSearchStrLength=0,this.cvcAddEntityBehavior=(y,c)=>y.length>this.cvcMinSearchStrLength&&0===c.length,this.cvcOnOpenChange=new e.vpe,this.cvcOnSearch=(new e.vpe).pipe((0,Mi.p)(300,bi.z,{leading:!1,trailing:!0}),(0,nr.d)(1)),this.cvcOnModelChange=new e.vpe,this.cvcSelectComponent=new e.vpe,this.messageOptions=lo,this.onParamName$=new ct.X(void 0),this.onOption$=new ct.X([]),this.onOpenChange$=new ct.X(!1),this.onLoading$=new ct.X(!1),this.notFoundDisplay$=new ct.X({searchStr:"",showSpinner:!0,showAddForm:!1,message:`Searching ${this.cvcEntityName.plural}...`}),this.previousIsOpen=!1}ngAfterViewInit(){this.cvcSelectMessages&&(this.messageOptions={...this.messageOptions,...this.cvcSelectMessages}),this.nzSelectComponent?(this.cvcSelectComponent.next(this.nzSelectComponent),this.onOpenChange$.pipe((0,ve.t)(this)).subscribe(y=>{this.cvcOnOpenChange.next(y)}),(0,Do.a)([this.onOpenChange$,this.cvcOnSearch,this.onParamName$,this.onOption$,this.onLoading$.pipe((0,j.x)())]).pipe((0,Zt.U)(([y,c,m,G,Ae])=>{const Dt=this.cvcEntityName.plural,Mn=this.cvcMinSearchStrLength,kn=null!==this.cvcAddEntity,$o=!1===this.previousIsOpen&&!0===y;if(this.previousIsOpen=y,$o)return this.getSelectInitDisplay(Dt,Mn,m);if(Ae&&c.length>=Mn){const Wi=this.cvcAddEntityBehavior(c,this.cvcResults||[]);return this.getSelectSearchingDisplay(c,Dt,Mn,m,kn,Wi)}return y&&!Ae&&c.length>=Mn&&0===G.length?this.getSelectEmptyDisplay(c,Dt,m,kn):{searchStr:"",showSpinner:!1,showAddForm:kn&&this.cvcAddEntityBehavior(c,this.cvcResults||[]),message:""}}),(0,Fo.b)(y=>{this.notFoundDisplay$.next(y)}),(0,ve.t)(this)).subscribe()):console.error(`${this.cvcEntityName.singular} entity-select could not gain reference to its nzSelectComponent, aborting AfterViewInit()`)}getSelectInitDisplay(y,c,m){let G=this.messageOptions.searchAll,Ae=!1;return 0==c?(Ae=!0,G=void 0===m?this.messageOptions.searchAll:this.messageOptions.searchParamAll):c>0&&(Ae=!1,G=void 0===m?this.messageOptions.searchEnterQueryAll:this.messageOptions.searchEnterQuery),{message:G(y,"",m,c),showSpinner:Ae,showAddForm:!1,searchStr:""}}getSelectSearchingDisplay(y,c,m,G,Ae,Dt=!1){let Mn=this.messageOptions.searchAll;return Mn=void 0===G?y.length>0?this.messageOptions.search:this.messageOptions.searchAll:y.length>0?this.messageOptions.searchParam:this.messageOptions.searchParamAll,{message:Mn(c,y,G),showSpinner:!0,showAddForm:Ae&&Dt,searchStr:y}}getSelectEmptyDisplay(y,c,m,G){let Ae=this.messageOptions.empty;return Ae=void 0===m?y.length>0?this.messageOptions.empty:this.messageOptions.emptyAll:y.length>0?this.messageOptions.emptyParam:this.messageOptions.emptyParamAll,{message:Ae(c,y,m),showSpinner:!1,showAddForm:G,searchStr:y}}ngOnChanges(y){if(y.cvcParamName&&this.onParamName$.next(y.cvcParamName.currentValue),y.cvcOptions){const c=y.cvcOptions.currentValue;void 0!==c&&this.onOption$.next(c)}if(y.cvcLoading){const c=y.cvcLoading.currentValue;void 0!==c&&this.onLoading$.next(c)}}}).\u0275fac=function(y){return new(y||Ui)},Ui.\u0275cmp=e.Xpm({type:Ui,selectors:[["cvc-entity-select"]],viewQuery:function(y,c){if(1&y&&e.Gf(Ne.Vq,5),2&y){let m;e.iGM(m=e.CRH())&&(c.nzSelectComponent=m.first)}},inputs:{cvcFormControl:"cvcFormControl",cvcFormlyAttributes:"cvcFormlyAttributes",cvcEntityName:"cvcEntityName",cvcSelectMessages:"cvcSelectMessages",cvcSelectMode:"cvcSelectMode",cvcPlaceholder:"cvcPlaceholder",cvcLoading:"cvcLoading",cvcOptions:"cvcOptions",cvcResults:"cvcResults",cvcShowError:"cvcShowError",cvcDisabled:"cvcDisabled",cvcAllowClear:"cvcAllowClear",cvcBorderless:"cvcBorderless",cvcShowArrow:"cvcShowArrow",cvcAutoClearSearchValue:"cvcAutoClearSearchValue",cvcSuffixIcon:"cvcSuffixIcon",cvcCustomTemplate:"cvcCustomTemplate",cvcParamName:"cvcParamName",cvcAddEntity:"cvcAddEntity",cvcAddEntityModel:"cvcAddEntityModel",cvcMinSearchStrLength:"cvcMinSearchStrLength",cvcAddEntityBehavior:"cvcAddEntityBehavior",cvcSelectOpen:"cvcSelectOpen"},outputs:{cvcOnOpenChange:"cvcOnOpenChange",cvcOnSearch:"cvcOnSearch",cvcOnModelChange:"cvcOnModelChange",cvcSelectComponent:"cvcSelectComponent"},features:[e.TTD],decls:1,vars:1,consts:[[4,"ngrxLet"],["nzShowSearch","","nzServerSearch","","nzAllowClear","",3,"nzDropdownMatchSelectWidth","formControl","formlyAttributes","nzMode","nzPlaceHolder","nzCustomTemplate","nzOptionHeightPx","nzDisabled","nzLoading","nzAllowClear","nzBorderless","nzSuffixIcon","nzShowArrow","nzAutoClearSearchValue","nzOptions","nzDropdownRender","nzNotFoundContent","nzOpen","nzOpenChange","nzOnSearch","ngModelChange"],["searchMessages",""],["addForm",""],["nz-icon","",3,"nzType",4,"ngIf"],["nz-icon","",3,"nzType"],[1,"add-form-container"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(y,c){1&y&&e.YNc(0,hr,6,21,"ng-container",0),2&y&&e.Q6J("ngrxLet",c.notFoundDisplay$)},dependencies:[M.O5,M.tP,t.JJ,t.oH,R.eJ,v.JD,st.Ls,Ne.Vq,qt.g],styles:["nz-divider[_ngcontent-%COMP%]{margin:4px 0 0}.add-form-container[_ngcontent-%COMP%]{padding:4px 8px 8px}"],changeDetection:0}),Ui);Oo=(0,Ce.gn)([(0,ve.c)({arrayName:"stateSubscriptions"})],Oo);var ji,Po=a(9835),qo=a(2024),Vo=a(7473),Zo=a(855),Ko=a(1958),_i=a(9928);function Zi(u,y){if(1&u&&e._uU(0),2&u){const c=e.oxw();e.Oqu(c.successMessage)}}function Xo(u,y){if(1&u&&(e.ynx(0),e._uU(1),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.hij(' "',c.model.name,'" ')}}const jn=function(){return[0,0]};let so=((ji=class{set cvcSearchString(y){y&&this.searchString$.next(y)}constructor(y,c){this.query=y,this.errors=c,this.cvcOnCreate=new e.vpe,this.form=new t.nJ({}),this.model={name:""},this.formLayout="horizontal",this.options={formState:{formLayout:this.formLayout}},this.onSubmit$=new Xe.x,this.searchString$=new ct.X(void 0),this.addDiseaseMutator=new qo.U(this.errors),this.fields=[{key:"doid",type:"input",props:{label:"DOID",keydown:(m,G)=>{"Tab"===G.code&&G.stopPropagation()}}},{key:"name",props:{hidden:!0,required:!0}}],this.searchString$.pipe((0,ve.t)(this)).subscribe(m=>{m&&(this.model.name=m)}),this.onSubmit$.pipe((0,ve.t)(this)).subscribe(m=>{console.log("disease-quick-add form model submitted.",m),this.submitDisease(m)})}submitDisease(y){y.name?this.mutationState=this.addDiseaseMutator.mutate(this.query,this.model,{},c=>{console.log("disease-quick-add submit data callback",c),c.addDisease&&(this.successMessage=c.addDisease.new?`New Disease ${c.addDisease.disease.name} added.`:`Existing Disease ${c.addDisease.disease.name} with DOID ${c.addDisease.disease.doid} found. `,setTimeout(()=>{c&&c.addDisease&&this.cvcOnCreate.next(c.addDisease.disease.id)},1e3))}):console.error("disease-quick-add form submitDisease requires model with valid name.")}}).\u0275fac=function(y){return new(y||ji)(e.Y36(Fn.MPi),e.Y36(Vo.Y))},ji.\u0275cmp=e.Xpm({type:ji,selectors:[["cvc-disease-quick-add-form"]],inputs:{cvcSearchString:"cvcSearchString"},outputs:{cvcOnCreate:"cvcOnCreate"},decls:11,vars:11,consts:[["entityType","Disease",3,"mutationState","successMessage"],["success",""],["nz-form","","nzLayout","horizontal",3,"formGroup","ngSubmit"],[3,"nzGutter"],["nzSpan","24"],[3,"form","fields","model","options","modelChange"],["nz-button","","nzType","primary","nzBlock","",3,"disabled"],[4,"ngIf"]],template:function(y,c){if(1&y&&(e.TgZ(0,"cvc-form-submission-status-display",0),e.YNc(1,Zi,1,1,"ng-template",null,1,e.W1O),e.TgZ(3,"form",2),e.NdJ("ngSubmit",function(){return c.onSubmit$.next(c.model)}),e.TgZ(4,"nz-row",3)(5,"nz-col",4)(6,"formly-form",5),e.NdJ("modelChange",function(G){return c.model=G}),e.qZA()(),e.TgZ(7,"nz-col",4)(8,"button",6),e._uU(9," Add Disease\xa0 "),e.YNc(10,Xo,2,1,"ng-container",7),e.qZA()()()()()),2&y){const m=e.MAs(2);e.Q6J("mutationState",c.mutationState)("successMessage",m),e.xp6(3),e.Q6J("formGroup",c.form),e.xp6(1),e.Q6J("nzGutter",e.DdM(10,jn)),e.xp6(2),e.Q6J("form",c.form)("fields",c.fields)("model",c.model)("options",c.options),e.xp6(2),e.Q6J("disabled",!c.form.valid),e.xp6(2),e.Q6J("ngIf",c.model.name)}},dependencies:[M.O5,t._Y,t.JL,t.sg,v.T7,Vn.ix,Zo.w,Ko.dQ,pe.t3,pe.SK,s.Lr,_i.F],encapsulation:2,changeDetection:0}),ji);so=(0,Ce.gn)([(0,ve.c)()],so);const Ue=["addDisease"],oe=["optionTemplates"];function Oe(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"strong"),e._uU(2,"DOID:"),e.qZA(),e._UZ(3,"span",9),e.ALo(4,"highlightTypeahead"),e.BQk()),2&u){const c=e.oxw(2).$implicit,m=e.oxw().ngrxLet;e.xp6(3),e.Q6J("innerHtml",e.xi3(4,1,c.doid,m),e.oJD)}}function Ge(u,y){if(1&u&&(e.ynx(0),e._uU(1," \xa0 "),e.TgZ(2,"strong"),e._uU(3,"Aliases: "),e.qZA(),e.TgZ(4,"em"),e._UZ(5,"span",10),e.ALo(6,"highlightTypeahead"),e.qZA(),e.BQk()),2&u){const c=e.oxw(2).$implicit,m=e.oxw().ngrxLet;e.xp6(5),e.Q6J("nzTooltipTitle",c.diseaseAliases.join(", "))("innerHtml",e.xi3(6,2,c.diseaseAliases.join(", "),m),e.oJD)}}function bt(u,y){if(1&u&&(e._UZ(0,"cvc-entity-tag",6),e.TgZ(1,"span",7),e.YNc(2,Oe,5,4,"ng-container",8),e.YNc(3,Ge,7,5,"ng-container",8),e._uU(4),e.qZA()),2&u){const c=e.oxw().$implicit,m=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",c.__typename+":"+c.id)("cvcEmphasize",m),e.xp6(2),e.Q6J("ngIf",c.doid),e.xp6(1),e.Q6J("ngIf",c.diseaseAliases.length>0),e.xp6(1),e.hij(" ",m," ")}}function Ht(u,y){1&u&&(e.ynx(0),e.YNc(1,bt,5,6,"ng-template",null,5,e.W1O),e.BQk())}function nn(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Ht,3,0,"ng-container",4),e.ALo(2,"ngrxPush"),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function fn(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",11)(1,"cvc-entity-tag",12),e.NdJ("cvcOnClose",function(){const Ae=e.CHM(c).$implicit,Dt=e.oxw();return e.KtG(Dt.onTagClose$.next(Ae.nzValue))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Disease:"+c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}function en(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"cvc-disease-quick-add-form",13),e.NdJ("cvcOnCreate",function(G){e.CHM(c);const Ae=e.oxw();return e.KtG(Ae.onPopulate$.next(G))}),e.qZA()}2&u&&e.Q6J("cvcSearchString",y.$implicit)}const vn=kt(at(),oi());let Nn=(()=>{class u extends vn{constructor(c,m,G){super(),this.taq=c,this.tq=m,this.changeDetectorRef=G,this.defaultOptions={props:{entityName:{singular:"Disease",plural:"Diseases"},tooltip:"Cancer or cancer subtype that is a result of the described variant",isMultiSelect:!1,requireType:!0,placeholder:"Search Diseases",requireTypePromptFn:(Ae,Dt)=>`Select an ${Ae} Type to select an associated Disease${Dt?"(s)":""}`,addFormTitle:"Add a New Disease"}},this.placeholder$=new ct.X(void 0),this.selectOpen$=new Ao.t}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.state&&this.state.formReady$?this.state.formReady$.pipe((0,qe.h)(c=>c),(0,Ti.q)(1),(0,ve.t)(this)).subscribe(c=>{this.configureField()}):this.configureField(),this.addForm&&(this.field.props.addFormContent=this.addForm)}configureField(){this.placeholder$.next(this.props.placeholder),this.configureStateConnections()}configureStateConnections(){if(this.state){if(this.state.requires.requiresDisease$?this.onRequiresDisease$=this.state.requires.requiresDisease$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresDisease$ subject to attach.`),this.props.requireType){const c=`${this.state.entityName.toLowerCase()}Type$`;this.state.fields[c]?this.onEntityType$=this.state.fields[c]:console.error(`${this.field.id} requireType is true, however form state does not provide Subject ${c}.`)}!this.onRequiresDisease$||!this.onEntityType$||(0,Do.a)([this.onRequiresDisease$,this.onEntityType$,this.onValueChange$]).pipe((0,ve.t)(this)).subscribe(([c,m,G])=>{this.onStateUpdates(c,m,G)})}}onStateUpdates(c,m,G){!c&&m&&(this.props.required=!1,this.props.disabled=!0,this.props.description=`${(0,ie.E)(m)} ${this.state.entityName} does not include associated diseases`,this.props.extraType="prompt",this.cdr.markForCheck()),this.props.requireType&&!m&&(this.props.required=!1,this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName,this.props.isMultiSelect),this.props.extraType="prompt"),c&&(this.props.required=!0,this.props.disabled=!1,this.props.description=void 0,this.props.extraType=void 0),(!c&&void 0!==G||this.props.requireType&&!m&&this.formControl.value)&&this.resetField()}getTypeaheadVarsFn(c){return{name:c}}getTypeaheadResultsFn(c){return c.data.diseaseTypeahead}getTagQueryVarsFn(c){return{id:c}}getTagQueryResultsFn(c){return c.data.disease}getSelectedItemOptionFn(c){return{value:c.id,label:c.name}}getSelectOptionsFn(c,m){return c.map((G,Ae)=>({label:m.get(Ae)||G.name,value:G.id}))}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(Fn.RYL),e.Y36(Fn.QVn),e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-disease-select"]],viewQuery:function(c,m){if(1&c&&(e.Gf(Ue,7),e.Gf(oe,5,e.Rgc)),2&c){let G;e.iGM(G=e.CRH())&&(m.addForm=G.first),e.iGM(G=e.CRH())&&(m.optionTemplates=G)}},features:[e.qOj],decls:12,vars:26,consts:[[3,"cvcAddEntity","cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcSelectOpen","cvcOnSearch","cvcOnOpenChange","cvcSelectComponent","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],["addDisease",""],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf"],[3,"innerHtml"],["nz-typography","","nzType","secondary","nz-tooltip","",3,"nzTooltipTitle","innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"],[3,"cvcSearchString","cvcOnCreate"]],template:function(c,m){if(1&c&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(Ae){return m.onSearch$.next(Ae)})("cvcOnOpenChange",function(Ae){return m.onOpenChange$.next(Ae)})("cvcSelectComponent",function(Ae){return m.selectComponent=Ae})("cvcOnModelChange",function(Ae){return m.props.change&&m.props.change(m.field,Ae)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.qZA(),e.YNc(7,nn,3,3,"ng-container",1),e.YNc(8,fn,2,3,"ng-template",null,2,e.W1O),e.YNc(10,en,1,1,"ng-template",null,3,e.W1O)),2&c){const G=e.MAs(9),Ae=e.MAs(11);e.Q6J("cvcAddEntity",Ae)("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",G)("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcEntityName",m.props.entityName)("cvcPlaceholder",e.lcZ(1,14,m.placeholder$))("cvcResults",e.lcZ(2,16,m.result$))("cvcOptions",e.lcZ(3,18,m.selectOption$))("cvcShowError",m.showError)("cvcDisabled",m.onRequiresDisease$&&!e.lcZ(4,20,m.onRequiresDisease$))("cvcLoading",e.lcZ(5,22,m.isLoading$))("cvcSelectOpen",e.lcZ(6,24,m.selectOpen$)),e.xp6(7),e.Q6J("ngrxLet",m.onSearch$)}},dependencies:[M.sg,M.O5,R.eJ,Ye.SY,me.ZU,Oo,Po.J,so,R.fM,J.A],changeDetection:0}),u})();const bn={types:[{name:"disease-select",wrappers:["form-field"],component:Nn,defaultOptions:{props:{label:"Disease"}}},{name:"disease-multi-select",wrappers:["form-field"],component:Nn,defaultOptions:{props:{isMultiSelect:!0,label:"Diseases"}}}]};let dn=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(bn),Xt.L,Vn.sL,Ne.LV,Xn.$6,vo.Qp,st.PV,je.o7,pe.Jb,Ye.cg,Tt.zf,s.U5,Te.ic,me.ZJ,wt.X,zn.g,Bt,Un,Ve.s,$e.x]}),u})();var xn=a(9154);let Wn=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,me.ZJ]}),u})();var In=a(2962),Hn=a(2787),Gn=a(8373),Zn=a(3740),to=a(6699),yo=a(3620),_o=a(9111),Jn=a(9377),No=a(3019),To=a(3742);const ko={isSelectCol:u=>"select"===u.type,isEntityTagCol:u=>"entity-tag"===u.type,isEnumTagCol:u=>"enum-tag"===u.type,isTextTagCol:u=>"text-tag"===u.type},Ki=u=>void 0!==u.sort,ii=u=>void 0!==u.filter,Ii={description:Fn.Cp0.Description,disease:Fn.Cp0.DiseaseName,evidenceDirection:Fn.Cp0.EvidenceDirection,evidenceLevel:Fn.Cp0.EvidenceLevel,evidenceRating:Fn.Cp0.EvidenceRating,evidenceType:Fn.Cp0.EvidenceType,id:Fn.Cp0.Id,significance:Fn.Cp0.Significance,status:Fn.Cp0.Status,therapies:Fn.Cp0.TherapyName,variantOrigin:Fn.Cp0.VariantOrigin},Ji={molecularProfile:"molecularProfileName",disease:"diseaseName",therapies:"therapyName",evidenceItem:"id"},di=["selected","id"];class Le{constructor(){this.sortStreams=[],this.filterStreams=[],this.config=this.configureColumnStreams([{key:"selected",label:"Select",type:"select",width:"25px",align:"center",fixedLeft:!0,checkbox:{th:{showCheckbox:!1},td:{showCheckbox:!0}}},{hidden:!0,key:"id",label:"ID",type:"default",width:"30px"},{hidden:!0,key:"status",label:"Status",type:"default",width:"50px"},{key:"id",label:"Evidence",type:"entity-tag",width:"95px",context:"evidenceItem",fixedLeft:!0,showStatus:!0,tag:{fullWidth:!0},sort:{default:"ascend"},filter:{inputType:"default",options:[{key:"EID",value:null}],transform:y=>y?+y.toString().replace(/EID/i,""):null}},{key:"molecularProfile",label:"Molecular Profile",type:"entity-tag",width:"240px",sort:{},tag:{truncateLabel:"200px"},filter:{inputType:"default",typename:"MolecularProfile",options:[{key:"Filter Therapy Names",value:null}]}},{key:"disease",type:"entity-tag",label:"Disease",width:"240px",sort:{},tag:{truncateLabel:"200px"},filter:{inputType:"default",typename:"Disease",options:[{key:"Filter Disease Names",value:null}]}},{key:"therapies",label:"Therapies",type:"entity-tag",width:"275px",sort:{},tag:{maxTags:2,truncateLabel:"150px"},filter:{inputType:"default",typename:"Therapy",options:[{key:"Filter Therapy Names",value:null}]}},{key:"therapyInteractionType",label:"INT",tooltip:"Therapy Interaction Type",type:"enum-tag",width:"40px",align:"center",emptyValueCategory:"not-applicable",sort:{},filter:{options:this.getAttributeFilters((0,To.o6)(Fn.wkr))}},{key:"description",label:"DSC",tooltip:"Evidence Description",type:"text-tag",width:"40px",align:"center",fixedRight:!0,emptyValueCategory:"unspecified",sort:{},filter:{inputType:"default",options:[{key:"Search Descriptions",value:null}]}},{key:"evidenceType",label:"ET",tooltip:"Evidence Type",type:"enum-tag",width:"40px",align:"center",fixedRight:!0,sort:{},filter:{options:this.getAttributeFilters((0,To.o6)(Fn.kqt))}},{key:"evidenceLevel",label:"EL",tooltip:"Evidence Level",type:"enum-tag",width:"40px",align:"center",fixedRight:!0,sort:{},filter:{options:this.getAttributeFilters((0,To.o6)(Fn.Sx0))}},{key:"evidenceDirection",label:"ED",tooltip:"Evidence Direction",type:"enum-tag",width:"40px",align:"center",fixedRight:!0,sort:{},filter:{options:this.getAttributeFilters((0,To.o6)(Fn.tI1))}},{key:"significance",label:"SI",tooltip:"Significance",type:"enum-tag",align:"center",width:"40px",fixedRight:!0,sort:{},filter:{options:this.getAttributeFilters((0,To.o6)(Fn.y1h))}},{key:"evidenceRating",label:"ER",tooltip:"Evidence Rating",type:"enum-tag",width:"45px",align:"center",fixedRight:!0,tag:{showLabel:"short-string"},sort:{},filter:{options:[1,2,3,4,5].map(y=>({value:y,text:`${y} stars`}))}}])}get(){return this.config}getSortStreams(){return this.sortStreams}getFilterStreams(){return this.filterStreams}getAttributeFilters(y,c){return y.getValues().map(G=>({text:(0,ie.E)(G),value:G,byDefault:c===G}))}configureColumnStreams(y){return y.forEach(c=>{const m=c;if(Ki(m)&&(m.sort.changes=new ct.X({key:m.key,value:m.sort.default??null}),this.sortStreams.push(m.sort.changes)),ii(m)){const G=m.filter.options.find(Ae=>Ae.byDefault)?.value;m.filter.changes=new ct.X({key:m.key,value:G??null}),this.filterStreams.push(m.filter.changes)}}),y}}var W,Ut=a(8656);function Re(u,y){1&u&&e.GkF(0)}const jt=function(u,y,c){return{$implicit:u,config:y,emphasize:c}};function sn(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"span",1),e.YNc(2,Re,1,0,"ng-container",2),e.qZA(),e.BQk()),2&u){const c=y.$implicit,m=e.oxw();e.xp6(2),e.Q6J("ngTemplateOutlet",m.cvcTagTemplate)("ngTemplateOutletContext",e.kEZ(2,jt,c,m.config,null==m.config?null:m.config.emphasize))}}let Rn=((W=class{set cvcTagListConfig(y){!y||!y.tagList||!y.tag||(this.config=y,this.setEntities(y.tagList,y.tag))}constructor(){this.entities=[]}setEntities(y,c){this.entities=y&&0!==y.length&&0!==c.maxTags?y:[]}}).\u0275fac=function(y){return new(y||W)},W.\u0275cmp=e.Xpm({type:W,selectors:[["cvc-entity-tag-list"]],inputs:{cvcTagListConfig:"cvcTagListConfig",cvcTagTemplate:"cvcTagTemplate"},decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[1,"tag-container"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(y,c){1&y&&e.YNc(0,sn,3,6,"ng-container",0),2&y&&e.Q6J("ngForOf",c.entities)},dependencies:[M.sg,M.tP],styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}[_nghost-%COMP%]{display:inline-block;margin-bottom:-4px}.tag-container[_ngcontent-%COMP%]{display:inline-block;margin-bottom:4px}"],changeDetection:0}),W);Rn=(0,Ce.gn)([(0,ve.c)()],Rn);var ho=a(2616),fo=a(1201);function Uo(u,y){if(1&u&&(e._UZ(0,"span",6),e.ALo(1,"typenameToIcon"),e.ALo(2,"entityColor")),2&u){const c=y.$implicit;e.Q6J("nzType",e.lcZ(1,2,c.__typename))("nzTwotoneColor",e.lcZ(2,4,c.__typename))}}function ti(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Uo,3,6,"span",5),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",c.entities)}}function uo(u,y){if(1&u&&(e.TgZ(0,"span",7)(1,"strong"),e._uU(2),e.qZA()(),e._UZ(3,"span",6),e.ALo(4,"typenameToIcon"),e.ALo(5,"entityColor")),2&u){const c=e.oxw();e.xp6(2),e.Oqu(c.entities.length),e.xp6(1),e.Q6J("nzType",e.lcZ(4,3,c.entities[0].__typename))("nzTwotoneColor",e.lcZ(5,5,c.entities[0].__typename))}}const Vi=function(u,y,c,m,G){return{tagList:u,tag:y,showPopover:c,status:m,emphasize:G}};function Ai(u,y){if(1&u&&e._UZ(0,"cvc-entity-tag-list",11),2&u){const c=e.oxw(2);e.Q6J("cvcTagTemplate",c.cvcTagTemplate)("cvcTagListConfig",e.qbA(2,Vi,c.entities,c.config.tag,c.config.showPopover,c.config.status,c.config.emphasize))}}function Cr(u,y){1&u&&e._uU(0," Invalid config specified for entity-tag-list. ")}function ps(u,y){if(1&u&&(e.TgZ(0,"div",8),e.YNc(1,Ai,1,8,"cvc-entity-tag-list",9),e.qZA(),e.YNc(2,Cr,1,0,"ng-template",null,10,e.W1O)),2&u){const c=e.MAs(3),m=e.oxw();e.xp6(1),e.Q6J("ngIf",m.config)("ngIfElse",c)}}let Ee=(()=>{class u{set cvcCollectionTagConfig(c){!c||!c.tagList||!c.tag||(this.setConfig(c),this.setEntities(c.tagList))}constructor(){this.cvcShowMaxIcons=5,this.cvcShowFullLabels=!0,this.entities=[]}setConfig(c){this.config=this.cvcShowFullLabels?{...c,tag:{...c.tag,truncateLabel:void 0}}:c}setEntities(c){this.entities=c&&0!==c.length?c:[]}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-entity-collection-tag"]],inputs:{cvcCollectionTagConfig:"cvcCollectionTagConfig",cvcTagTemplate:"cvcTagTemplate",cvcShowMaxIcons:"cvcShowMaxIcons",cvcShowFullLabels:"cvcShowFullLabels"},decls:9,vars:3,consts:[["nz-popover","","nzPopoverPlacement","top","nzPopoverTrigger","hover",3,"nzPopoverContent"],["nz-typography","","nzType","secondary",1,"plus-sign"],[4,"ngIf","ngIfElse"],["showCount",""],["tagListPopover",""],["class","entity-icon","nz-icon","","nzTheme","twotone",3,"nzType","nzTwotoneColor",4,"ngFor","ngForOf"],["nz-icon","","nzTheme","twotone",1,"entity-icon",3,"nzType","nzTwotoneColor"],["nz-typography","","nzType","secondary",1,"entity-count"],[1,"popover-container"],[3,"cvcTagTemplate","cvcTagListConfig",4,"ngIf","ngIfElse"],["noConfig",""],[3,"cvcTagTemplate","cvcTagListConfig"]],template:function(c,m){if(1&c&&(e.TgZ(0,"nz-tag",0)(1,"span",1)(2,"strong"),e._uU(3,"+"),e.qZA()(),e.YNc(4,ti,2,1,"ng-container",2),e.YNc(5,uo,6,7,"ng-template",null,3,e.W1O),e.qZA(),e.YNc(7,ps,4,2,"ng-template",null,4,e.W1O)),2&c){const G=e.MAs(6),Ae=e.MAs(8);e.Q6J("nzPopoverContent",Ae),e.xp6(4),e.Q6J("ngIf",m.entities.length<=m.cvcShowMaxIcons)("ngIfElse",G)}},dependencies:[M.sg,M.O5,wt.j,me.ZU,Xn.lU,st.Ls,Rn,ho.a,fo.Z],styles:["[_nghost-%COMP%]{display:inline-block}.popover-container[_ngcontent-%COMP%]{max-width:300px}nz-tag[_ngcontent-%COMP%]{margin:0;padding:0;margin-inline-end:4px}nz-tag[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block}nz-tag[_ngcontent-%COMP%]   .plus-sign[_ngcontent-%COMP%]{padding:3px 3px 3px 4px;margin:-3px 0;line-height:1}nz-tag[_ngcontent-%COMP%]   .entity-icon[_ngcontent-%COMP%]:first-child{padding-left:2px}nz-tag[_ngcontent-%COMP%]   .entity-icon[_ngcontent-%COMP%]{margin:-3px 1px -4px -1px;padding:3px 0;line-height:1}nz-tag[_ngcontent-%COMP%]   .entity-icon[_ngcontent-%COMP%]:last-child{padding-right:3px}nz-tag[_ngcontent-%COMP%]   .entity-count[_ngcontent-%COMP%]{margin-left:-2px;padding-right:4px}"],changeDetection:0}),u})();var ye=a(3489);function de(u,y){if(1&u&&(e.TgZ(0,"span",1),e._uU(1),e.ALo(2,"number"),e.ALo(3,"number"),e.qZA()),2&u){const c=y.ngIf;e.xp6(1),e.AsE(" ",e.lcZ(2,2,c.edgeCount)," of ",e.lcZ(3,4,c.filteredCount)," displayed\n")}}let ut=(()=>{class u{ngOnInit(){this.tableCountsInfo$=this.cvcTableCountsConnection.pipe((0,qe.h)(c=>null!=c.totalCount||null!=c.filteredCount),(0,Zt.U)(c=>{const m=c.filteredCount,G=c.totalCount,Ae=c.edges;return null==m&&null==G&&console.log("Need to provide either filtered count or total count in the table counts component"),{edgeCount:Ae.length,filteredCount:m??G}}))}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-table-counts2"]],inputs:{cvcTableCountsConnection:"cvcTableCountsConnection"},decls:2,vars:3,consts:[["class","table-counts","nz-typography","","nzType","secondary",4,"ngIf"],["nz-typography","","nzType","secondary",1,"table-counts"]],template:function(c,m){1&c&&(e.YNc(0,de,4,6,"span",0),e.ALo(1,"ngrxPush")),2&c&&e.Q6J("ngIf",e.lcZ(1,1,m.tableCountsInfo$))},dependencies:[M.O5,me.ZU,M.JJ,R.fM],styles:[":[_nghost-%COMP%]{border:1px solid red}.table-counts[_ngcontent-%COMP%]{display:inline-block}"],changeDetection:0}),u})();var pi,yn=a(1374),Qn=a(9384);let ai=((pi=class{set cvcTableScrollerToIndex(y){void 0!==y&&this.scrollToIndex(y)}set cvcTableScrollerToOffset(y){void 0!==y&&this.scrollToIndex(y)}constructor(y){this.host=y,this.cvcTableScrollerOnScroll=new e.vpe,this.cvcTableScrollerOnFetch=new e.vpe,this.cvcTableScrollerTargetHeight=140,this.cvcTableScrollerFetchCount=50,this.onLoadThrottleTime=500,this.onScrollThrottleTime=250,this.onScrollDebounceTime=300}ngAfterViewInit(){if(!this.host||!this.host.cdkVirtualScrollViewport)throw new Error("cvcTableScroller directive could not obtain reference to host cdkVirtualScrollViewport.");this.viewport=this.host.cdkVirtualScrollViewport,this.scrolled$=this.viewport.elementScrolled(),this.rendered$=this.viewport.renderedRangeStream,this.rendered$.pipe((0,yn.P)()).subscribe(()=>this.viewport.checkViewportSize()),this.scrolled$.pipe((0,Mi.p)(this.onScrollThrottleTime,bi.z,{leading:!0,trailing:!0}),(0,Fo.b)(y=>this.cvcTableScrollerOnScroll.next("scroll")),(0,yo.b)(this.onScrollDebounceTime),(0,ve.t)(this)).subscribe(y=>{this.cvcTableScrollerOnScroll.next("stop")}),this.scrolled$.pipe((0,Zt.U)(y=>this.viewport.measureScrollOffset("bottom")),(0,Qn.G)(),(0,qe.h)(([y,c])=>c<y&&c<this.cvcTableScrollerTargetHeight),(0,Mi.p)(this.onLoadThrottleTime),(0,ve.t)(this)).subscribe(y=>{this.cvcTableScrollerOnScroll.next("bottom");try{this.loadMore(this.cvcTableScrollerPageInfo)}catch(c){console.error(c)}})}loadMore(y){const c=this.cvcTableScrollerQueryRef;if(!y&&c)throw new Error("table-scroll directive requires PageInfo to use provided QueryRef.");if(y&&!c)throw new Error("table-scroll directive requires valid QueryRef when PageInfo provided.");if(y&&c){const[m,G,Ae]=[this.cvcTableScrollerFetchCount,y.hasNextPage,y.endCursor];if(!m||!Ae)throw new Error("table-scroll PageInfo invalid.");if(!G)return;this.cvcTableScrollerOnFetch.next({first:m,after:Ae})}}scrollToIndex(y){const[c,m]=[this.host,this.host.cdkVirtualScrollViewport];if(!c||!m)throw new Error("table-scroll scrollToIndex() cannot find host viewport.");m.scrollToIndex(y)}scrollToOffset(y){const[c,m]=[this.host,this.host.cdkVirtualScrollViewport];if(!c||!m)throw new Error("table-scroll scrollToOffset() cannot find host viewport.");m.scrollToOffset(y)}}).\u0275fac=function(y){return new(y||pi)(e.Y36(Zn.N8))},pi.\u0275dir=e.lG2({type:pi,selectors:[["","cvcTableScroller",""]],inputs:{cvcTableScrollerTargetHeight:"cvcTableScrollerTargetHeight",cvcTableScrollerQueryRef:"cvcTableScrollerQueryRef",cvcTableScrollerPageInfo:"cvcTableScrollerPageInfo",cvcTableScrollerFetchCount:"cvcTableScrollerFetchCount",cvcTableScrollerToIndex:"cvcTableScrollerToIndex",cvcTableScrollerToOffset:"cvcTableScrollerToOffset"},outputs:{cvcTableScrollerOnScroll:"cvcTableScrollerOnScroll",cvcTableScrollerOnFetch:"cvcTableScrollerOnFetch"}}),pi);function Ir(u,y){1&u&&e._UZ(0,"span",8)}function xs(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"span",9),e.NdJ("click",function(){e.CHM(c),e.oxw(2);const G=e.MAs(3),Ae=e.oxw();return G.value="",e.KtG(Ae.cvcModelChange.next(null))}),e.qZA()}}function Ma(u,y){if(1&u&&(e.YNc(0,Ir,1,0,"span",6),e.YNc(1,xs,1,0,"span",7)),2&u){e.oxw();const c=e.MAs(3);e.Q6J("ngIf",!c.value),e.xp6(1),e.Q6J("ngIf",c.value)}}function js(u,y){if(1&u){const c=e.EpF();e.ynx(0),e.TgZ(1,"nz-input-group",2)(2,"input",3,4),e.NdJ("ngModelChange",function(G){e.CHM(c);const Ae=e.oxw();return e.KtG(Ae.cvcModelChange.next(G))}),e.qZA()(),e.YNc(4,Ma,2,2,"ng-template",null,5,e.W1O),e.BQk()}if(2&u){const c=e.MAs(5),m=e.oxw();e.xp6(1),e.Q6J("nzSuffix",c),e.xp6(1),e.Q6J("placeholder",m.cvcPlaceholder)("ngModel",m.cvcModel)}}function Gs(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"nz-input-number-group",10)(1,"nz-input-number",11,4),e.NdJ("ngModelChange",function(G){e.CHM(c);const Ae=e.oxw();return e.KtG(Ae.cvcModelChange.next(""===G?null:G))}),e.qZA()()}if(2&u){const c=e.oxw();let m;e.xp6(1),e.Q6J("nzPlaceHolder",null!==(m=c.cvcPlaceholder)&&void 0!==m?m:"")("ngModel",c.cvcModel)("nzMin",1)("nzStep",1)}}ai=(0,Ce.gn)([(0,ve.c)()],ai);let hs=(()=>{class u{constructor(){this.cvcModel=null,this.cvcModelChange=new e.vpe,this.cvcInputType="default"}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-table-filter-input"]],inputs:{cvcModel:"cvcModel",cvcInputType:"cvcInputType",cvcPlaceholder:"cvcPlaceholder"},outputs:{cvcModelChange:"cvcModelChange"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["numericInput",""],["nzSize","small",3,"nzSuffix"],["nz-input","",3,"placeholder","ngModel","ngModelChange"],["filterInput",""],["suffixIcon",""],["nz-icon","","nzType","search","style","color: #ddd",4,"ngIf"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzType","search",2,"color","#ddd"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],["nzSize","small"],[2,"width","100%",3,"nzPlaceHolder","ngModel","nzMin","nzStep","ngModelChange"]],template:function(c,m){if(1&c&&(e.YNc(0,js,6,3,"ng-container",0),e.YNc(1,Gs,3,4,"ng-template",null,1,e.W1O)),2&c){const G=e.MAs(2);e.Q6J("ngIf","default"===m.cvcInputType)("ngIfElse",G)}},dependencies:[M.O5,t.Fj,t.JJ,t.On,Zo.w,st.Ls,je.Zp,je.gB,je.ke,Gn._V,Gn.Rb],styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}  nz-input-group{border-color:#d9d9d9!important}"]}),u})();var Ds=a(3460);function Yr(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"li",5),e.NdJ("click",function(){const Ae=e.CHM(c).$implicit,Dt=e.oxw();return e.KtG(Dt.cvcOptionChange.next({key:Dt.cvcColumnKey,value:Ae.value}))}),e._UZ(1,"cvc-attribute-tag",6),e.qZA()}if(2&u){const c=y.$implicit,m=e.oxw();e.Q6J("nzSelected",(null==m.cvcOption?null:m.cvcOption.value)===c.value),e.xp6(1),e.Q6J("cvcFullWidth",!0)("cvcChecked",(null==m.cvcOption?null:m.cvcOption.value)===c.value)("cvcAttrValue",c.value)}}let $r=(()=>{class u{constructor(){this.cvcOptionChange=new e.vpe}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-enum-filter-menu"]],inputs:{cvcColumnKey:"cvcColumnKey",cvcFilterOptions:"cvcFilterOptions",cvcOption:"cvcOption"},outputs:{cvcOptionChange:"cvcOptionChange"},decls:6,vars:2,consts:[["nz-menu",""],["nz-menu-item","",3,"nzSelected","click",4,"ngFor","ngForOf"],[2,"padding","3px"],["nz-button","","nzType","default","nzBlock","","nzSize","small",3,"disabled","click"],["nz-icon","","nzType","retweet","nzTheme","outline"],["nz-menu-item","",3,"nzSelected","click"],["cvcContext","menu-item",3,"cvcFullWidth","cvcChecked","cvcAttrValue"]],template:function(c,m){1&c&&(e.TgZ(0,"ul",0),e.YNc(1,Yr,2,4,"li",1),e.TgZ(2,"li",2)(3,"button",3),e.NdJ("click",function(){return m.cvcOptionChange.next({key:m.cvcColumnKey,value:null})}),e._UZ(4,"span",4),e._uU(5," Reset "),e.qZA()()()),2&c&&(e.xp6(1),e.Q6J("ngForOf",m.cvcFilterOptions),e.xp6(2),e.Q6J("disabled",null===(null==m.cvcOption?null:m.cvcOption.value)))},dependencies:[M.sg,mt,Vn.ix,Zo.w,Ko.dQ,Ds.wO,Ds.r9,st.Ls],styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}[_nghost-%COMP%]     ul li:hover{background-color:#e6f7ff}[_nghost-%COMP%]     ul li.ant-dropdown-menu-item-selected{background-color:#1890ff}[_nghost-%COMP%]     ul li.ant-dropdown-menu-item-selected:active{background-color:#096dd9}"],changeDetection:0}),u})(),rr=(()=>{class u{transform(c){return null!=c&&Array.isArray(c)}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275pipe=e.Yjl({name:"isArray",type:u,pure:!0}),u})(),Ur=(()=>{class u{transform(c,m){return m(c)?c:void 0}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275pipe=e.Yjl({name:"guardType",type:u,pure:!0}),u})();var ri;function fr(u,y){if(1&u&&e._UZ(0,"th",14),2&u){const c=y.ngIf;let m;e.Q6J("nzShowCheckbox",c.checkbox.th.showCheckbox||!1)("nzWidth",c.width)("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)}}function Os(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"th",15),e.NdJ("nzSortOrderChange",function(G){const Dt=e.CHM(c).ngIf;return e.KtG(Dt.sort.changes.next({key:Dt.key,value:G}))}),e.ALo(1,"ngrxPush"),e.TgZ(2,"span",16),e._uU(3),e.qZA()()}if(2&u){const c=y.ngIf;let m,G;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzShowSort",void 0!==c.sort)("nzSortFn",!0)("nzSortOrder",(null==(G=e.lcZ(1,10,c.sort.changes))?null:G.value)||null),e.xp6(2),e.Q6J("nzTooltipTitle",c.tooltip),e.xp6(1),e.hij(" ",c.label," ")}}function Ar(u,y){if(1&u&&(e.TgZ(0,"th",17),e._uU(1),e.qZA()),2&u){const c=y.ngIf;let m;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzTooltipTitle",c.tooltip),e.xp6(1),e.hij(" ",c.label," ")}}function Sr(u,y){if(1&u&&(e.TgZ(0,"th",17),e._uU(1),e.qZA()),2&u){const c=y.ngIf;let m;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzTooltipTitle",c.tooltip),e.xp6(1),e.hij(" ",c.label," ")}}function jr(u,y){if(1&u&&(e.ynx(0),e.YNc(1,fr,1,5,"th",11),e.ALo(2,"guardType"),e.YNc(3,Os,4,12,"th",12),e.ALo(4,"guardType"),e.YNc(5,Ar,2,7,"th",13),e.ALo(6,"guardType"),e.YNc(7,Sr,2,7,"th",13),e.ALo(8,"guardType"),e.BQk()),2&u){const c=e.oxw().$implicit,m=e.oxw(2);e.xp6(1),e.Q6J("ngIf",e.xi3(2,4,c,m.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,7,c,m.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,10,c,m.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,13,c,m.colGuards.isTextTagCol))}}function Qs(u,y){if(1&u&&(e.ynx(0),e.YNc(1,jr,9,16,"ng-container",10),e.BQk()),2&u){const c=y.$implicit;e.xp6(1),e.Q6J("ngIf",!c.hidden)}}function Fr(u,y){if(1&u&&(e.TgZ(0,"th",22),e._uU(1," \xa0 "),e.qZA()),2&u){const c=y.ngIf;let m;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)}}function fs(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"cvc-table-filter-input",25),e.NdJ("cvcModelChange",function(G){const Dt=e.CHM(c).ngIf,Mn=e.oxw().ngIf;return e.KtG(Dt.changes.next(Dt.transform?{key:Mn.key,value:Dt.transform(G)}:{key:Mn.key,value:G}))}),e.qZA()}if(2&u){const c=e.oxw().ngIf;e.Q6J("cvcInputType",c.filter.inputType)("cvcPlaceholder",c.filter.options[0].key)("cvcModel",c.filter.options[0].value)}}function mr(u,y){if(1&u&&(e.TgZ(0,"th",23),e.YNc(1,fs,1,3,"cvc-table-filter-input",24),e.qZA()),2&u){const c=y.ngIf;let m;e.Q6J("nzColumnKey",c.key)("nzWidth",c.width)("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",c.filter)}}function Xa(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"th",26,27),e.NdJ("nzSortOrderChange",function(G){const Dt=e.CHM(c).ngIf;return e.KtG(Dt.sort.changes.next({key:Dt.key,value:G}))}),e.ALo(2,"ngrxPush"),e.TgZ(3,"nz-filter-trigger",28,29),e.ALo(5,"ngrxPush"),e._UZ(6,"span",30),e.qZA(),e.TgZ(7,"nz-dropdown-menu",null,31)(9,"cvc-enum-filter-menu",32),e.NdJ("cvcOptionChange",function(G){const Dt=e.CHM(c).ngIf,Mn=e.MAs(4);return Dt.filter.changes.next(G),e.KtG(Mn.nzVisible=!1)}),e.ALo(10,"ngrxPush"),e.qZA()()()}if(2&u){const c=y.ngIf,m=e.MAs(8);let G,Ae,Dt;e.Q6J("nzColumnKey",c.key)("nzWidth",c.width)("nzAlign",null!==(G=c.align)&&void 0!==G?G:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzShowSort",!0)("nzSortFn",!0)("nzSortOrder",(null==(Ae=e.lcZ(2,15,c.sort.changes))?null:Ae.value)||null)("nzShowFilter",void 0!==c.filter)("nzFilterFn",!0),e.xp6(3),e.Q6J("nzDropdownMenu",m)("nzActive",null!==(null==(Dt=e.lcZ(5,17,c.filter.changes))?null:Dt.value)),e.xp6(6),e.Q6J("cvcColumnKey",c.key)("cvcFilterOptions",c.filter.options)("cvcOption",e.lcZ(10,19,c.filter.changes))}}function Er(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"th",33,27)(2,"nz-filter-trigger",28),e.ALo(3,"ngrxPush"),e._UZ(4,"span",34),e.qZA(),e.TgZ(5,"nz-dropdown-menu",null,35)(7,"div",36)(8,"div",37)(9,"cvc-table-filter-input",38),e.NdJ("cvcModelChange",function(G){const Dt=e.CHM(c).ngIf;return e.KtG(Dt.filter.changes.next({key:Dt.key,value:G}))}),e.qZA()()()()()}if(2&u){const c=y.ngIf,m=e.MAs(6);let G,Ae;e.Q6J("nzColumnKey",c.key)("nzWidth",c.width)("nzAlign",null!==(G=c.align)&&void 0!==G?G:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzFilterFn",!0),e.xp6(2),e.Q6J("nzDropdownMenu",m)("nzActive",null!==(null==(Ae=e.lcZ(3,10,c.filter.changes))?null:Ae.value)),e.xp6(7),e.Q6J("cvcPlaceholder",c.filter.options[0].key)("cvcModel",c.filter.options[0].value)}}function ba(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Fr,2,5,"th",18),e.ALo(2,"guardType"),e.YNc(3,mr,2,6,"th",19),e.ALo(4,"guardType"),e.YNc(5,Xa,11,21,"th",20),e.ALo(6,"guardType"),e.YNc(7,Er,10,12,"th",21),e.ALo(8,"guardType"),e.BQk()),2&u){const c=e.oxw().$implicit,m=e.oxw(2);e.xp6(1),e.Q6J("ngIf",e.xi3(2,4,c,m.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,7,c,m.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,10,c,m.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,13,c,m.colGuards.isTextTagCol))}}function Qc(u,y){if(1&u&&(e.ynx(0),e.YNc(1,ba,9,16,"ng-container",10),e.BQk()),2&u){const c=y.$implicit;e.xp6(1),e.Q6J("ngIf",!c.hidden)}}function ec(u,y){if(1&u&&(e.TgZ(0,"thead")(1,"tr",7),e.YNc(2,Qs,2,1,"ng-container",8),e.qZA(),e.TgZ(3,"tr",9),e.YNc(4,Qc,2,1,"ng-container",8),e.qZA()()),2&u){const c=y.ngrxLet;e.xp6(2),e.Q6J("ngForOf",c),e.xp6(2),e.Q6J("ngForOf",c)}}function xr(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"td",43),e.NdJ("nzCheckedChange",function(G){e.CHM(c);const Ae=e.oxw(3).$implicit,Dt=e.oxw(2);return e.KtG(Dt.onRowSelected$.next({id:Ae.id,selected:G}))}),e.qZA()}if(2&u){const c=y.ngIf,m=e.oxw(3).$implicit;let G;e.Q6J("nzChecked",m.selected)("nzAlign",null!==(G=c.align)&&void 0!==G?G:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)}}function sr(u,y){1&u&&e.GkF(0)}const Xr=function(u,y,c){return{$implicit:u,config:y,emphasize:c}};function Nr(u,y){if(1&u&&(e.ynx(0),e.YNc(1,sr,1,0,"ng-container",49),e.ALo(2,"isArray"),e.ALo(3,"ngrxPush"),e.BQk()),2&u){const c=e.oxw().ngIf,m=e.oxw().ngIf,G=e.MAs(3),Ae=e.MAs(5),Dt=e.oxw(3).$implicit;let Mn;e.xp6(1),e.Q6J("ngTemplateOutlet",e.lcZ(2,2,Dt[c])?G:Ae)("ngTemplateOutletContext",e.kEZ(6,Xr,Dt[c],m,null==(Mn=e.lcZ(3,4,m.filter.changes))?null:Mn.value))}}function ws(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Nr,4,10,"ng-container",48),e.BQk()),2&u){const c=y.ngIf;e.oxw();const m=e.MAs(7),G=e.oxw(3).$implicit;e.xp6(1),e.Q6J("ngIf",G[c])("ngIfElse",m)}}const es=function(u,y,c,m,G){return{tagList:u,tag:y,showPopover:c,status:m,emphasize:G}};function Ws(u,y){if(1&u&&(e.ynx(0),e._UZ(1,"cvc-entity-collection-tag",51),e.BQk()),2&u){const c=e.oxw(2),m=c.config,G=c.$implicit,Ae=c.emphasize;e.oxw();const Dt=e.MAs(5),Mn=e.oxw(5);e.xp6(1),e.Q6J("cvcCollectionTagConfig",e.qbA(3,es,G.slice(m.tag.maxTags,G.length),m.tag,!Mn.isScrolling,!0===m.showStatus?G.status:void 0,Ae))("cvcTagTemplate",Dt)("cvcShowFullLabels",!0)}}function Ps(u,y){if(1&u&&(e.ynx(0),e._UZ(1,"cvc-entity-tag-list",50),e.YNc(2,Ws,2,9,"ng-container",10),e.BQk()),2&u){const c=e.oxw(),m=c.config,G=c.$implicit,Ae=c.emphasize;e.oxw();const Dt=e.MAs(5),Mn=e.oxw(5);e.xp6(1),e.Q6J("cvcTagTemplate",Dt)("cvcTagListConfig",e.qbA(3,es,G.slice(0,m.tag.maxTags),m.tag,!Mn.isScrolling,!0===m.showStatus?G.status:void 0,Ae)),e.xp6(1),e.Q6J("ngIf",G.slice(m.tag.maxTags,G.length).length>0)}}function Is(u,y){if(1&u&&e.YNc(0,Ps,3,9,"ng-container",48),2&u){const c=y.$implicit;e.oxw();const m=e.MAs(7);e.Q6J("ngIf",c.length>0)("ngIfElse",m)}}function Sa(u,y){if(1&u&&e._UZ(0,"cvc-entity-tag",52),2&u){const c=y.$implicit,m=y.config,G=y.emphasize,Ae=e.oxw(6);let Dt;e.Q6J("cvcTruncateLabel",null==m.tag?null:m.tag.truncateLabel)("cvcLinkableEntity",c)("cvcEmphasize",G)("cvcShowPopover",!Ae.isScrolling)("cvcStatus",!0===m.showStatus?c.status:void 0)("cvcFullWidth",null!==(Dt=null==m.tag?null:m.tag.fullWidth)&&void 0!==Dt&&Dt)}}function Zs(u,y){if(1&u&&e._UZ(0,"cvc-empty-value",53),2&u){const c=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",c.emptyValueCategory||"not-applicable")}}function Ks(u,y){if(1&u&&(e.TgZ(0,"td",44),e.YNc(1,ws,2,2,"ng-container",10),e.YNc(2,Is,1,2,"ng-template",null,45,e.W1O),e.YNc(4,Sa,1,6,"ng-template",null,46,e.W1O),e.YNc(6,Zs,1,1,"ng-template",null,47,e.W1O),e.qZA()),2&u){const c=y.ngIf;let m;e.Q6J("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",c.context||c.key)}}function Js(u,y){if(1&u&&(e._UZ(0,"cvc-attribute-tag",56),e.ALo(1,"evidenceEnumDisplay")),2&u){const c=e.oxw().ngIf,m=e.oxw(3).$implicit,G=e.oxw(2);e.Q6J("cvcFullWidth",!0)("cvcAttrValue",m[c.key])("cvcTooltip",e.lcZ(1,3,!G.isScrolling&&m[c.key]))}}function Gi(u,y){if(1&u&&e._UZ(0,"cvc-empty-value",57),2&u){const c=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",c.emptyValueCategory||"unspecified")}}function Fi(u,y){if(1&u&&(e.TgZ(0,"td",44),e.YNc(1,Js,2,5,"cvc-attribute-tag",54),e.YNc(2,Gi,1,1,"ng-template",null,55,e.W1O),e.qZA()),2&u){const c=y.ngIf,m=e.MAs(3),G=e.oxw(3).$implicit;let Ae;e.Q6J("nzAlign",null!==(Ae=c.align)&&void 0!==Ae?Ae:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",G[c.key])("ngIfElse",m)}}function qs(u,y){if(1&u&&(e.TgZ(0,"nz-tag",60),e._UZ(1,"span",61),e.qZA()),2&u){const c=e.oxw().ngIf,m=e.oxw(3).$implicit;e.Q6J("nzTooltipTitle",m[c.key])}}function ci(u,y){if(1&u&&e._UZ(0,"cvc-empty-value",53),2&u){const c=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",c.emptyValueCategory||"unspecified")}}function Lr(u,y){if(1&u&&(e.TgZ(0,"td",44),e.YNc(1,qs,2,1,"nz-tag",58),e.YNc(2,ci,1,1,"ng-template",null,59,e.W1O),e.qZA()),2&u){const c=y.ngIf,m=e.MAs(3),G=e.oxw(3).$implicit;let Ae;e.Q6J("nzAlign",null!==(Ae=c.align)&&void 0!==Ae?Ae:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",G[c.key])("ngIfElse",m)}}function ne(u,y){if(1&u&&(e.ynx(0),e.YNc(1,xr,1,4,"td",41),e.ALo(2,"guardType"),e.YNc(3,Ks,8,4,"td",42),e.ALo(4,"guardType"),e.YNc(5,Fi,4,5,"td",42),e.ALo(6,"guardType"),e.YNc(7,Lr,4,5,"td",42),e.ALo(8,"guardType"),e.BQk()),2&u){const c=e.oxw().$implicit,m=e.oxw(3);e.xp6(1),e.Q6J("ngIf",e.xi3(2,4,c,m.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,7,c,m.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,10,c,m.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,13,c,m.colGuards.isTextTagCol))}}function Fe(u,y){if(1&u&&(e.ynx(0),e.YNc(1,ne,9,16,"ng-container",10),e.BQk()),2&u){const c=y.$implicit;e.xp6(1),e.Q6J("ngIf",!c.hidden)}}function he(u,y){if(1&u&&(e.TgZ(0,"tr",40),e.YNc(1,Fe,2,1,"ng-container",8),e.qZA()),2&u){const c=e.oxw().ngrxLet;e.xp6(1),e.Q6J("ngForOf",c)}}function et(u,y){1&u&&(e.TgZ(0,"tbody"),e.YNc(1,he,2,1,"ng-template",39),e.qZA())}function At(u,y){1&u&&e._UZ(0,"span",69)}function pn(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"span",70),e.NdJ("click",function(){e.CHM(c),e.oxw(2);const G=e.MAs(3),Ae=e.oxw().filter;return G.value="",e.KtG(Ae.changes.next({key:Ae.key,value:null}))}),e.qZA()}}function Tn(u,y){if(1&u&&(e.YNc(0,At,1,0,"span",67),e.YNc(1,pn,1,0,"span",68)),2&u){e.oxw();const c=e.MAs(3);e.Q6J("ngIf",!c.value),e.xp6(1),e.Q6J("ngIf",c.value)}}function no(u,y){if(1&u){const c=e.EpF();e.ynx(0),e.TgZ(1,"nz-input-group",63)(2,"input",64,65),e.NdJ("nzFilterChange",function(G){e.CHM(c);const Ae=e.oxw().filter;return e.KtG(Ae.changes.next({key:Ae.key,value:G}))}),e.qZA()(),e.YNc(4,Tn,2,2,"ng-template",null,66,e.W1O),e.BQk()}if(2&u){const c=e.MAs(5),m=e.oxw().filter;e.xp6(1),e.Q6J("nzSuffix",c),e.xp6(1),e.Q6J("placeholder",m.placeholder)("ngModel",m.defaultValue)}}function Qo(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"nz-input-number-group",71)(1,"nz-input-number",72,65),e.NdJ("ngModelChange",function(G){e.CHM(c);const Ae=e.oxw().filter;return e.KtG(Ae.changes.next({key:Ae.key,value:G}))}),e.qZA()()}if(2&u){const c=e.oxw().filter;e.xp6(1),e.Q6J("nzPlaceHolder",c.placeholder)("ngModel",c.defaultValue)("nzMin",1)("nzStep",1)}}function mo(u,y){if(1&u&&(e.YNc(0,no,6,3,"ng-container",48),e.YNc(1,Qo,3,4,"ng-template",null,62,e.W1O)),2&u){const c=y.filter,m=e.MAs(2);e.Q6J("ngIf",void 0===c.inputType||"default"===c.inputType)("ngIfElse",m)}}const Bo=function(){return[6,6]};function wo(u,y){1&u&&(e.TgZ(0,"nz-row",73)(1,"nz-col")(2,"span"),e._uU(3,"Use checkboxes to select or deselect EIDs"),e.qZA()()()),2&u&&e.Q6J("nzGutter",e.DdM(1,Bo))}function gi(u,y){1&u&&(e.TgZ(0,"nz-tag",84),e._UZ(1,"i",85),e.TgZ(2,"span"),e._uU(3,"Loading\u2026"),e.qZA()())}const Wo=function(u){return{$implicit:u}};function Ci(u,y){if(1&u&&(e.TgZ(0,"nz-tag",88),e._UZ(1,"span",89),e.TgZ(2,"span",90),e._uU(3),e.qZA()()),2&u){e.oxw();const c=e.MAs(4),m=e.oxw().ngrxLet;e.xp6(2),e.Q6J("nzTooltipTitle",c)("nzTooltipTitleContext",e.VKq(3,Wo,m.query)),e.xp6(1),e.hij(" Query Error",m.query.length>1?"s":""," ")}}function zi(u,y){if(1&u&&(e.TgZ(0,"nz-tag",88)(1,"span",90)(2,"span",91)(3,"strong"),e._uU(4),e.qZA()()()()),2&u){e.oxw();const c=e.MAs(4),m=e.oxw().ngrxLet;e.xp6(1),e.Q6J("nzTooltipTitle",c)("nzTooltipTitleContext",e.VKq(3,Wo,m.network)),e.xp6(3),e.hij(" Network Error",m.query.length>1?"s":""," ")}}function co(u,y){if(1&u&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&u){const c=y.$implicit;e.xp6(1),e.hij(" ",c.message," ")}}function gr(u,y){1&u&&e.YNc(0,co,2,1,"div",8),2&u&&e.Q6J("ngForOf",y.$implicit)}function ar(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Ci,4,5,"nz-tag",86),e.YNc(2,zi,5,5,"nz-tag",86),e.YNc(3,gr,1,1,"ng-template",null,87,e.W1O),e.BQk()),2&u){const c=e.oxw().ngrxLet;e.xp6(1),e.Q6J("ngIf",c.query),e.xp6(1),e.Q6J("ngIf",c.network)}}function kr(u,y){if(1&u&&(e.ynx(0),e.YNc(1,ar,5,2,"ng-container",10),e.BQk()),2&u){const c=y.ngrxLet;e.xp6(1),e.Q6J("ngIf",c)}}function Dr(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",92)(1,"nz-checkbox-group",93),e.NdJ("ngModelChange",function(G){e.CHM(c);const Ae=e.oxw(2);return e.KtG(Ae.onPreferenceChange$.next(G))}),e.ALo(2,"ngrxPush"),e.qZA()()}if(2&u){const c=e.oxw(2);e.xp6(1),e.Q6J("ngModel",e.lcZ(2,1,c.setPreference$))}}function cr(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"nz-row",73)(1,"nz-col",74),e.YNc(2,gi,4,0,"nz-tag",75),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e._UZ(5,"cvc-no-more-rows",76),e.ALo(6,"ngrxPush"),e.qZA(),e.TgZ(7,"nz-col",74),e.YNc(8,kr,2,1,"ng-container",3),e.qZA(),e.TgZ(9,"nz-col",74),e._UZ(10,"cvc-table-counts2",77),e.qZA(),e.TgZ(11,"nz-col",78)(12,"nz-button-group")(13,"button",79),e.NdJ("click",function(){e.CHM(c);const G=e.oxw();return e.KtG(G.onResetFilter$.next())}),e._UZ(14,"span",80),e.qZA(),e.TgZ(15,"button",81),e._UZ(16,"span",82),e.qZA()(),e.YNc(17,Dr,3,3,"ng-template",null,83,e.W1O),e.qZA()()}if(2&u){const c=e.MAs(18),m=e.oxw();e.Q6J("nzGutter",8),e.xp6(2),e.Q6J("ngIf",e.lcZ(3,7,m.loading$)&&e.lcZ(4,9,m.isFetchMore$)),e.xp6(3),e.Q6J("cvcShowTag",e.lcZ(6,11,m.noMoreRows$)),e.xp6(3),e.Q6J("ngrxLet",m.queryError$),e.xp6(2),e.Q6J("cvcTableCountsConnection",m.connection$),e.xp6(5),e.Q6J("nzPopoverContent",c)("nzPopoverTrigger","click")}}const Ea=function(){return[]},Gr=function(){return{x:"800px",y:"200px"}};let Qr=((ri=class{constructor(y,c,m){this.queryGQL=y,this.apollo=c,this.cdr=m,this.cvcSelectedIdsChange=new e.vpe,this.isScrolling=!1,this.colGuards=ko,this.onFetchMore$=new Xe.x,this.onPreferenceChange$=new ct.X([]),this.onResetFilter$=new Xe.x,this.onRowSelected$=new Xe.x,this.onScroll$=new ct.X("stop"),this.onSetSelectedRow$=new ct.X(new Set),this.queryError$=new Xe.x,this.queryRequest$=new Xe.x,this.queryResult$=new Ao.t(1),this.isFetchMore$=new ct.X(!1),this.noMoreRows$=new ct.X(!1),this.scrollToIndex$=new Xe.x,this.tableConfig=new Le;const G=(0,Do.a)(this.tableConfig.getFilterStreams()),Ae=(0,Do.a)(this.tableConfig.getSortStreams()).pipe((0,qe.h)(Dt=>Dt.filter(Mn=>null!==Mn.value).length<=1));this.refetch$=(0,Do.a)([Ae,G]).pipe((0,Zt.U)(([Dt,Mn])=>({query:"refetch",sort:Dt,filter:Mn}))),this.fetchMore$=this.onFetchMore$.pipe((0,Zt.U)(Dt=>({query:"fetchMore",fetchMore:{...Dt}}))),(0,No.T)(this.refetch$,this.fetchMore$).pipe((0,yo.b)(50),(0,ve.t)(this)).subscribe(Dt=>{const Mn=this.getQueryVars(Dt);this.queryRef?(this.queryError$.next({}),"refetch"===Dt.query?(this.isFetchMore$.next(!1),this.queryRef.refetch(Mn).then(kn=>{(kn.error||kn.errors)&&this.queryError$.next(this.getRequestErrors(kn))}).then(()=>{this.scrollToIndex$.next(0)})):(this.isFetchMore$.next(!0),this.queryRef.fetchMore({variables:Mn}).then(kn=>{(kn.error||kn.errors)&&this.queryError$.next(this.getRequestErrors(kn))}))):(this.isFetchMore$.next(!1),this.queryError$.next({}),this.queryRef=this.queryGQL.watch(Mn),this.queryRef.valueChanges.pipe((0,ve.t)(this)).subscribe(kn=>{this.queryResult$.next(kn),(kn.error||kn.errors)&&this.queryError$.next(this.getRequestErrors(kn))}))}),this.loading$=this.queryResult$.pipe((0,Cn.j)("loading"),(0,j.x)()),this.connection$=this.queryResult$.pipe((0,Cn.j)("data","evidenceItems"),(0,qe.h)(xo.ep)),this.pageInfo$=this.connection$.pipe((0,Cn.j)("pageInfo"),(0,qe.h)(xo.ep)),this.row$=(0,Do.a)([this.connection$.pipe((0,Cn.j)("edges"),(0,qe.h)(xo.ep),(0,Zt.U)(Dt=>Dt.map(Mn=>Mn.node))),this.onSetSelectedRow$]).pipe((0,Zt.U)(([Dt,Mn])=>Dt.map(kn=>{if(kn)return{...kn,evidenceItem:{__typename:"EvidenceItem",id:kn.id,name:kn.name,link:kn.link,status:kn.status},selected:Mn.has(kn.id)}}))),this.col$=new ct.X(this.tableConfig.get()),this.setPreference$=this.col$.pipe((0,Zt.U)(Dt=>this.getColPrefsFromTableConfig(Dt))),this.onPreferenceChange$.pipe((0,it.M)(this.col$),(0,Zt.U)(([Dt,Mn])=>this.getTableConfigFromColPrefs(Dt,Mn)),(0,ve.t)(this)).subscribe(Dt=>{this.col$.next(Dt)}),this.onSetTableFilter$=new ct.X([]),this.onSetTableFilter$.pipe((0,ve.t)(this)).subscribe(Dt=>{const Mn=this.col$.getValue();Dt.forEach(kn=>{const $o=Mn.find(Wi=>Wi.key===kn.key);if(void 0!==$o.filter.inputType){const Wi=$o.filter.options[0];if(null===kn.value)return $o.filter.options=[{...Wi,value:null}],void $o.filter.changes.next(kn);if(Array.isArray(kn.value)&&0===kn.value.length)return $o.filter.options=[{...Wi,value:null}],void $o.filter.changes.next({...kn,value:null});let $i;Array.isArray(kn.value)?kn.value.length>0&&($i=kn.value[0]):$i=kn.value;const $s=$o.filter.typename;if(!$s||!$i)return void console.error(`evidence-manager requires column config '${$o.key}' provide a typename for cvcTablePrefs Input to set its filter`);const Us=this.getEntityName($s,$i);if(!Us)return;$o.filter.options=[{...Wi,value:Us}],$o.filter.changes.next({...kn,value:Us})}else ii($o)&&$o.filter.changes.next(kn)})}),this.onSetTablePref$=new ct.X([]),this.onSetTablePref$.pipe((0,it.M)(this.setPreference$),(0,Zt.U)(([Dt,Mn])=>{const kn=[];return Dt.forEach($o=>{let Wi=Mn.find($i=>$i.value===$o.value);Wi?kn.push({...Wi,...$o}):console.warn(`evidence-manager onSetTablePref$ received updated preferences for column '${$o.value}', but a column with that key could not be found.`)}),kn}),(0,ve.t)(this)).subscribe(Dt=>{this.onPreferenceChange$.next(Dt)}),this.onRowSelected$.pipe((0,it.M)(this.onSetSelectedRow$),(0,ve.t)(this)).subscribe(([Dt,Mn])=>{Dt.selected?Mn.add(Dt.id):Mn.delete(Dt.id),this.onSetSelectedRow$.next(Mn),this.cvcSelectedIdsChange.next(Array.from(Mn))}),this.onScroll$.pipe((0,Zt.U)(Dt=>"stop"!==Dt),(0,j.x)(),(0,ve.t)(this)).subscribe(Dt=>{this.isScrolling=Dt,this.cdr.detectChanges()}),this.onScroll$.pipe((0,qe.h)(Dt=>"bottom"===Dt),(0,it.M)(this.pageInfo$),(0,Zt.U)(([Dt,Mn])=>Mn),(0,ve.t)(this)).subscribe(Dt=>{Dt.hasNextPage||(this.noMoreRows$.next(!0),this.cdr.detectChanges(),setInterval(()=>this.noMoreRows$.next(!1)))})}ngAfterViewInit(){this.onResetFilter$.pipe((0,it.M)((0,ei.of)(this.tableConfig.get())),(0,ve.t)(this)).subscribe(([y,c])=>{const m=[];c.forEach(G=>{if(Ki(G)&&G.sort.changes&&G.sort.changes.next({key:G.key,value:G.sort.default??null}),ii(G)){const Ae=G.filter.options.find(Dt=>1==Dt.byDefault)?.value;G.filter.changes&&G.filter.changes.next({key:G.key,value:Ae||null})}m.push(G)}),this.col$.next(m)})}getQueryVars(y){const c=this.getQueryFilterParams(y);return{...this.getQuerySortParams(y),...c,...y.fetchMore}}getQuerySortParams(y){if(!y.sort)return;const m=y.sort.find(Ae=>null!==Ae.value);return m?{sortBy:{column:this.getSortColumnFromColKey(m.key),direction:"ascend"===m.value?Fn.SrV.Asc:Fn.SrV.Desc||void 0}}:void 0}getQueryFilterParams(y){let c={};return y.filter&&y.filter.forEach(m=>{c[Ji[m.key]||m.key]=null===m.value||""===m.value?void 0:m.value}),c}getRequestErrors(y){return{query:y.errors,network:y.error}}getTableConfigFromColPrefs(y,c){return c.forEach(m=>{if(di.find(Ae=>Ae===m.key))return;const G=y.find(Ae=>Ae.value===m.key);G&&(m.hidden=!G?.checked)}),[...c]}getColPrefsFromTableConfig(y){let c=[];return y.forEach(m=>{di.find(G=>G===m.key)||c.push({label:m.tooltip||m.label,value:m.key,checked:!m.hidden})}),c}getSortColumnFromColKey(y){return Ii[y]}getEntityName(y,c){const m={id:`${y}:${c}`,fragment:Jn.Ps`
                fragment Linkable${y}Entity on ${y} {
                  id
                  name
                  link
                }`},G=this.apollo.client.readFragment(m);if(G)return G.name;console.error(`evidence-manager onSetTableFilter$ could not find cached entity ${y}:${c} to populate input filter`)}trackByIndex(y,c){return c?.id}ngOnChanges(y){if(y.cvcTableSettings){const c=y.cvcTableSettings.currentValue;void 0!==c&&this.onSetTableFilter$.next(c.filters)}if(y.cvcSelectedIds){const c=y.cvcSelectedIds.currentValue,m=new Set;void 0!==c&&c.forEach(G=>m.add(G)),this.onSetSelectedRow$.next(m)}}}).\u0275fac=function(y){return new(y||ri)(e.Y36(Fn.EH_),e.Y36(_o._M),e.Y36(e.sBO))},ri.\u0275cmp=e.Xpm({type:ri,selectors:[["cvc-evidence-manager"]],inputs:{cvcTableSettings:"cvcTableSettings",cvcSelectedIds:"cvcSelectedIds"},outputs:{cvcSelectedIdsChange:"cvcSelectedIdsChange"},features:[e.TTD],decls:16,vars:27,consts:[["nzSize","small",3,"nzTitle","nzExtra"],["cvcTableScroller","",3,"nzData","cvcTableScrollerQueryRef","cvcTableScrollerPageInfo","cvcTableScrollerToIndex","nzScroll","nzVirtualForTrackBy","nzVirtualItemSize","nzSize","nzFrontPagination","nzShowPagination","nzLoading","cvcTableScrollerOnScroll","cvcTableScrollerOnFetch"],["virtualTable",""],[4,"ngrxLet"],["columnFilterInput",""],["cardTitle",""],["extraTemplate",""],[1,"col-header-row"],[4,"ngFor","ngForOf"],[1,"filter-row"],[4,"ngIf"],[3,"nzShowCheckbox","nzWidth","nzAlign","nzLeft","nzRight",4,"ngIf"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzSortOrderChange",4,"ngIf"],["nz-tooltip","",3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzTooltipTitle",4,"ngIf"],[3,"nzShowCheckbox","nzWidth","nzAlign","nzLeft","nzRight"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzSortOrderChange"],["nz-tooltip","",1,"col-header-label",3,"nzTooltipTitle"],["nz-tooltip","",3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzTooltipTitle"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight",4,"ngIf"],[3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight",4,"ngIf"],["class","attribute-filter","nzCustomFilter","",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzShowFilter","nzFilterFn","nzSortOrderChange",4,"ngIf"],["class","attribute-filter","nzCustomFilter","",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzFilterFn",4,"ngIf"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight"],[3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight"],[3,"cvcInputType","cvcPlaceholder","cvcModel","cvcModelChange",4,"ngIf"],[3,"cvcInputType","cvcPlaceholder","cvcModel","cvcModelChange"],["nzCustomFilter","",1,"attribute-filter",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzShowFilter","nzFilterFn","nzSortOrderChange"],["enumTableFilter",""],[3,"nzDropdownMenu","nzActive"],["enumTagFilterTrigger",""],["nz-icon","","nzType","filter","nzTheme","fill"],["enumFilterMenu","nzDropdownMenu"],[3,"cvcColumnKey","cvcFilterOptions","cvcOption","cvcOptionChange"],["nzCustomFilter","",1,"attribute-filter",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzFilterFn"],["nz-icon","","nzType","search"],["textTagFilterMenu","nzDropdownMenu"],[1,"ant-table-filter-dropdown"],[1,"custom-input-dropdown"],[3,"cvcPlaceholder","cvcModel","cvcModelChange"],["nz-virtual-scroll",""],[1,"data-row"],[3,"nzChecked","nzAlign","nzLeft","nzRight","nzCheckedChange",4,"ngIf"],[3,"nzAlign","nzLeft","nzRight",4,"ngIf"],[3,"nzChecked","nzAlign","nzLeft","nzRight","nzCheckedChange"],[3,"nzAlign","nzLeft","nzRight"],["entityTagList",""],["entityTag",""],["emptyEntityTagCell",""],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"cvcTagTemplate","cvcTagListConfig"],[3,"cvcCollectionTagConfig","cvcTagTemplate","cvcShowFullLabels"],[3,"cvcTruncateLabel","cvcLinkableEntity","cvcEmphasize","cvcShowPopover","cvcStatus","cvcFullWidth"],[3,"cvcEmptyCategory"],["cvcContext","compact",3,"cvcFullWidth","cvcAttrValue","cvcTooltip",4,"ngIf","ngIfElse"],["emptyEnumTagCell",""],["cvcContext","compact",3,"cvcFullWidth","cvcAttrValue","cvcTooltip"],["cvcDisplayMode","small",3,"cvcEmptyCategory"],["nz-tooltip","","style","width: 100%; cursor: help; color: #595959",3,"nzTooltipTitle",4,"ngIf","ngIfElse"],["emptyTextTagCell",""],["nz-tooltip","",2,"width","100%","cursor","help","color","#595959",3,"nzTooltipTitle"],["nz-icon","","nzType","align-left","nzTheme","outline"],["numericInput",""],["nzSize","small",3,"nzSuffix"],["nz-input","",3,"placeholder","ngModel","nzFilterChange"],["filterInput",""],["suffixIcon",""],["nz-icon","","nzType","search","style","color: #ddd",4,"ngIf"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzType","search",2,"color","#ddd"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],["nzSize","small"],[2,"width","100%",3,"nzPlaceHolder","ngModel","nzMin","nzStep","ngModelChange"],[3,"nzGutter"],["nzFlex","auto"],["nzColor","processing",4,"ngIf"],[3,"cvcShowTag"],[3,"cvcTableCountsConnection"],["nzFlex","35px"],["nz-button","","type","button","nzType","default","nzSize","small",3,"click"],["nz-icon","","nzType","retweet","nzTheme","outline"],["nz-button","","nz-popover","","nzPopoverTitle","Visible Columns","type","button","nzType","default","nzSize","small",3,"nzPopoverContent","nzPopoverTrigger"],["nz-icon","","nzType","setting","nzTheme","outline"],["prefsPopover",""],["nzColor","processing"],["nz-icon","","nzType","sync","nzSpin",""],["nzColor","error","style","margin-left: 12px",4,"ngIf"],["queryError",""],["nzColor","error",2,"margin-left","12px"],["nz-icon","","nzType","question-circle","nzTheme","outline"],["nz-tooltip","",2,"cursor","help",3,"nzTooltipTitle","nzTooltipTitleContext"],["nz-typography",""],[1,"prefs-popover"],[3,"ngModel","ngModelChange"]],template:function(y,c){if(1&y&&(e.TgZ(0,"nz-card",0)(1,"nz-table",1,2),e.NdJ("cvcTableScrollerOnScroll",function(G){return c.onScroll$.next(G)})("cvcTableScrollerOnFetch",function(G){return c.onFetchMore$.next(G)}),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.ALo(7,"ngrxPush"),e.YNc(8,ec,5,2,"thead",3),e.YNc(9,et,2,0,"tbody",3),e.qZA()(),e.YNc(10,mo,3,2,"ng-template",null,4,e.W1O),e.YNc(12,wo,4,2,"ng-template",null,5,e.W1O),e.YNc(14,cr,19,13,"ng-template",null,6,e.W1O)),2&y){const m=e.MAs(13),G=e.MAs(15);e.Q6J("nzTitle",m)("nzExtra",G),e.xp6(1),e.Q6J("nzData",e.lcZ(3,15,c.row$)||e.DdM(25,Ea))("cvcTableScrollerQueryRef",c.queryRef)("cvcTableScrollerPageInfo",e.lcZ(4,17,c.pageInfo$))("cvcTableScrollerToIndex",e.lcZ(5,19,c.scrollToIndex$))("nzScroll",e.DdM(26,Gr))("nzVirtualForTrackBy",c.trackByIndex)("nzVirtualItemSize",28)("nzSize","small")("nzFrontPagination",!1)("nzShowPagination",!1)("nzLoading",e.lcZ(6,21,c.loading$)&&!e.lcZ(7,23,c.isFetchMore$)),e.xp6(7),e.Q6J("ngrxLet",c.col$),e.xp6(1),e.Q6J("ngrxLet",c.col$)}},dependencies:[M.sg,M.O5,M.tP,mt,Ut.P,Ee,Rn,Po.J,ye.H,ut,t.Fj,t.JJ,t.On,R.eJ,Vn.ix,Vn.fY,Zo.w,Ko.dQ,In.bd,Jt.ub,Hn.RR,pe.t3,pe.SK,st.Ls,je.Zp,je.gB,je.ke,Gn._V,Gn.Rb,Xn.lU,Zn.N8,Zn.qD,Zn.Uo,Zn._C,Zn.h7,Zn.Om,Zn.p0,Zn.$Z,Zn.zu,Zn.qn,Zn.Ql,Zn.UX,Zn.g6,wt.j,Ye.SY,me.ZU,ai,hs,$r,rr,N.Do,Ur,R.fM],styles:["[_nghost-%COMP%]{display:block}nz-card[_ngcontent-%COMP%]:first-of-type     .ant-card-body{padding:0;margin-top:1px}.table-info[_ngcontent-%COMP%]{margin-left:.5rem}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell.align-right[_ngcontent-%COMP%]     .ant-table-column-title{text-align:right}tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{padding:3px 4px}tr.filter-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   nz-filter-trigger[_ngcontent-%COMP%]     span.ant-dropdown-trigger{margin-left:0;padding-right:12px}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .anticon.attribute-icon[_ngcontent-%COMP%]{color:#595959}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.overflow-ellipsis[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.button-cell[_ngcontent-%COMP%]{padding:0}tr.data-row[_ngcontent-%COMP%]   td.align-right[_ngcontent-%COMP%], tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%]{text-align:right}tr.data-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-of-type{padding-left:6px}tr.data-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-of-type   cvc-entity-tag[_ngcontent-%COMP%]{margin-left:6px}.ant-table-filter-dropdown[_ngcontent-%COMP%]{padding:8px}.prefs-popover[_ngcontent-%COMP%]     nz-checkbox-group:first-of-type label{display:block}.prefs-popover[_ngcontent-%COMP%]     nz-checkbox-group:first-of-type label span{display:inline-block}"],changeDetection:0}),ri);Qr=(0,Ce.gn)([(0,ve.c)()],Qr);const tc=["optionTemplates"];function $l(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"nz-col",9)(1,"cvc-evidence-manager",10),e.NdJ("cvcSelectedIdsChange",function(G){e.CHM(c);const Ae=e.oxw();return e.KtG(Ae.onPopulate$.next(G))}),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.qZA()()}if(2&u){const c=e.oxw();e.xp6(1),e.Q6J("cvcSelectedIds",e.lcZ(2,2,c.onEid$))("cvcTableSettings",e.lcZ(3,4,c.tableSettingsChange$))}}function nc(u,y){if(1&u&&e._UZ(0,"cvc-entity-tag",13),2&u){const c=e.oxw().$implicit,m=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",c.__typename+":"+c.id)("cvcEmphasize",m)}}function Rr(u,y){1&u&&(e.ynx(0),e.YNc(1,nc,1,3,"ng-template",null,12,e.W1O),e.BQk())}function wn(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Rr,3,0,"ng-container",11),e.ALo(2,"ngrxPush"),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function Ho(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",14)(1,"cvc-entity-tag",15),e.NdJ("cvcOnClose",function(){const Ae=e.CHM(c).$implicit,Dt=e.oxw();return e.KtG(Dt.onTagClose$.next(Ae.nzValue))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","EvidenceItem:"+c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}const Wc=function(){return[6,6]},Xs=function(u,y){return{show:u,hide:y}},Ei=kt(at(),oi());let ts=(()=>{class u extends Ei{constructor(c,m,G,Ae){super(),this.taq=c,this.tq=m,this.changeDetectorRef=G,this.apollo=Ae,this.synchronizedFields$=[],this.synchronizedRequired$=[],this.defaultOptions={props:{label:"Evidence Items",placeholder:"Select Evidence Items",isMultiSelect:!0,description:"Select Evidence by ID, or use the manager to select with filtering",entityName:{singular:"Evidence Item",plural:"Evidence Items"},minSearchStrLength:1}},this.synchronizedFieldToColMap=new Map([["molecularProfileId","molecularProfile"],["diseaseId","disease"],["therapyIds","therapies"]]),this.requiredFieldToColMap=new Map([["disease","requiresDisease$"],["therapies","requiresTherapy$"]]),this.onEid$=new Ao.t,this.onShowMgrClick$=new Xe.x,this.showMgr$=this.onShowMgrClick$.pipe((0,to.R)((Dt,Mn)=>!Dt,!1))}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.onEid$.pipe((0,ve.t)(this)).subscribe(),this.onEid$.next(this.formControl.value),this.onValueChange$.pipe((0,it.M)(this.onEid$),(0,ve.t)(this)).subscribe(([c,m])=>{Array.isArray(c)&&this.onEid$.next(c)})}configureStateConnections(){this.state&&(this.synchronizedFieldToColMap.forEach((c,m)=>{const G=this.state.fields[`${m}$`];G&&this.synchronizedFields$.push(G.pipe((0,Zt.U)(Ae=>({key:m,value:Ae??null}))))}),this.requiredFieldToColMap.forEach((c,m)=>{const G=this.state.requires[c];G&&this.synchronizedRequired$.push(G.pipe((0,Zt.U)(Ae=>({key:m,required:Ae}))))}),this.onFieldsChange$=(0,Do.a)(this.synchronizedFields$).pipe((0,Zt.U)(c=>{const m=[];return c.forEach(G=>{const Ae=this.synchronizedFieldToColMap.get(G.key);Ae&&m.push({key:Ae,value:G.value})}),m})),this.onRequiredChange$=(0,Do.a)(this.synchronizedRequired$).pipe((0,Zt.U)(c=>{const m=[];return c.forEach(G=>{m.push({value:G.key,checked:G.required})}),m})),this.tableSettingsChange$=(0,Do.a)([this.onFieldsChange$,this.onRequiredChange$]).pipe((0,Zt.U)(([c,m])=>({filters:c,preferences:m})),(0,yo.b)(100),(0,nr.d)(1)))}getTypeaheadVarsFn(c,m){return{eid:+c.replace(/EID/i,"")}}getTypeaheadResultsFn(c){return c.data.evidenceItems.nodes}getTagQueryVarsFn(c){return{eid:c}}getTagQueryResultsFn(c){return c.data.evidenceItem}getSelectedItemOptionFn(c){return{value:c.id,label:`EID${c.id}`}}getSelectOptionsFn(c,m){return c.map((G,Ae)=>({label:m.get(Ae)||`EID${G.id}`,value:G.id}))}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(Fn.olA),e.Y36(Fn.EFm),e.Y36(e.sBO),e.Y36(_o._M))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-evidence-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(tc,5,e.Rgc),2&c){let G;e.iGM(G=e.CRH())&&(m.optionTemplates=G)}},features:[e.qOj],decls:18,vars:36,consts:[[3,"nzGutter"],["nzFlex","auto"],[3,"cvcSelectMode","cvcMinSearchStrLength","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcSelectOpen","cvcOnSearch","cvcOnOpenChange","cvcSelectComponent","cvcOnModelChange"],["nzFlex","50px"],["type","button","nz-button","","nzBlock","",1,"manager-button",3,"click"],["nz-icon","",3,"ngClass","nzType"],["nzSpan","24","class","manager-drawer",4,"ngIf"],[4,"ngrxLet"],["selectedTemplate",""],["nzSpan","24",1,"manager-drawer"],[3,"cvcSelectedIds","cvcTableSettings","cvcSelectedIdsChange"],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(c,m){if(1&c&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1)(2,"cvc-entity-select",2),e.NdJ("cvcOnSearch",function(Ae){return m.onSearch$.next(Ae)})("cvcOnOpenChange",function(Ae){return m.onOpenChange$.next(Ae)})("cvcSelectComponent",function(Ae){return m.selectComponent=Ae})("cvcOnModelChange",function(Ae){return m.props.change&&m.props.change(m.field,Ae)}),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.qZA()(),e.TgZ(7,"nz-col",3)(8,"button",4),e.NdJ("click",function(){return m.onShowMgrClick$.next()}),e._UZ(9,"span",5),e.ALo(10,"ngrxPush"),e.ALo(11,"ngrxPush"),e._uU(12," Manager "),e.qZA()(),e.YNc(13,$l,4,6,"nz-col",6),e.ALo(14,"ngrxPush"),e.qZA(),e.YNc(15,wn,3,3,"ng-container",7),e.YNc(16,Ho,2,3,"ng-template",null,8,e.W1O)),2&c){const G=e.MAs(17);e.Q6J("nzGutter",e.DdM(32,Wc)),e.xp6(2),e.Q6J("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcMinSearchStrLength",m.props.minSearchStrLength)("cvcCustomTemplate",G)("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcEntityName",m.props.entityName)("cvcPlaceholder",m.props.placeholder)("cvcResults",e.lcZ(3,18,m.result$))("cvcOptions",e.lcZ(4,20,m.selectOption$))("cvcShowError",m.showError)("cvcDisabled",m.props.disabled)("cvcLoading",e.lcZ(5,22,m.isLoading$))("cvcSelectOpen",e.lcZ(6,24,m.selectOpen$)),e.xp6(7),e.Q6J("ngClass",e.WLB(33,Xs,e.lcZ(10,26,m.showMgr$),!e.lcZ(11,28,m.showMgr$)))("nzType","caret-right"),e.xp6(4),e.Q6J("ngIf",e.lcZ(14,30,m.showMgr$)),e.xp6(2),e.Q6J("ngrxLet",m.onSearch$)}},dependencies:[M.mk,M.sg,M.O5,Oo,Po.J,R.eJ,Vn.ix,Zo.w,Ko.dQ,pe.t3,pe.SK,st.Ls,Qr,R.fM],styles:[".manager-button[_ngcontent-%COMP%]   span.hide[_ngcontent-%COMP%]{transform:rotate(0);transition:transform .2s linear}.manager-button[_ngcontent-%COMP%]   span.show[_ngcontent-%COMP%]{transform:rotate(90deg);transition:transform .2s linear}"],changeDetection:0}),u})();var Vr=a(821);let lr=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,st.PV,wt.X,Ye.cg,me.ZJ,Ve.s,$e.x]}),u})(),ea=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,wt.X,me.ZJ,Xn.$6,st.PV,Ye.cg,Ve.s,lr]}),u})();const Zc={types:[{name:"evidence-select",wrappers:["form-field"],component:ts},{name:"evidence-multi-select",wrappers:["form-field"],component:ts,defaultOptions:{props:{label:"Evidence Items",isMultiSelect:!0}}}]};let ta=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,Be,Vr.M,ea,Un,lr,$e.x,xn.y,Ve.s,Wn,v.X0.forChild(Zc),t.u5,Vn.sL,In.vh,Jt.Wr,Hn.b1,s.U5,pe.Jb,st.PV,je.o7,Gn.Zf,Xn.$6,Zn.HQ,wt.X,Ye.cg,me.ZJ]}),u})();const Xu=["optionTemplates"];function Kc(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"em"),e._UZ(2,"span",9),e.ALo(3,"highlightTypeahead"),e.qZA(),e.BQk()),2&u){const c=e.oxw(2).$implicit,m=e.oxw().ngrxLet;e.xp6(2),e.Q6J("nzTooltipTitle",c.geneAliases.join(", "))("innerHtml",e.xi3(3,2,c.geneAliases.join(", "),m),e.oJD)}}function er(u,y){1&u&&e._uU(0,"--")}function Wr(u,y){if(1&u&&(e._UZ(0,"cvc-entity-tag",5),e.TgZ(1,"span",6),e.YNc(2,Kc,4,5,"ng-container",7),e.YNc(3,er,1,0,"ng-template",null,8,e.W1O),e.qZA()),2&u){const c=e.MAs(4),m=e.oxw().$implicit,G=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",m.__typename+":"+m.id)("cvcEmphasize",G),e.xp6(2),e.Q6J("ngIf",m.geneAliases.length>0)("ngIfElse",c)}}function na(u,y){1&u&&(e.ynx(0),e.YNc(1,Wr,5,5,"ng-template",null,4,e.W1O),e.BQk())}function As(u,y){if(1&u&&(e.ynx(0),e.YNc(1,na,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function Zr(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",10)(1,"cvc-entity-tag",11),e.NdJ("cvcOnClose",function(){const Ae=e.CHM(c).$implicit,Dt=e.oxw();return e.KtG(Dt.onTagClose$.next(Ae.nzValue))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Gene:"+c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}const Jc=kt(at(),oi());let xa=(()=>{class u extends Jc{constructor(c,m,G){super(),this.taq=c,this.tq=m,this.changeDetectorRef=G,this.defaultOptions={props:{label:"Gene",placeholder:"Search Genes",isMultiSelect:!1,entityName:{singular:"Gene",plural:"Genes"},description:"Entrez Gene Symbol"}}}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent})}getTypeaheadVarsFn(c){return{entrezSymbol:c}}getTypeaheadResultsFn(c){return c.data.geneTypeahead}getTagQueryVarsFn(c){return{geneId:c}}getTagQueryResultsFn(c){return c.data.gene}getSelectedItemOptionFn(c){return{value:c.id,label:c.name}}getSelectOptionsFn(c,m){return c.map((G,Ae)=>({label:m.get(Ae)||G.name,value:G.id}))}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(Fn.czh),e.Y36(Fn.HwR),e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-gene-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(Xu,5,e.Rgc),2&c){let G;e.iGM(G=e.CRH())&&(m.optionTemplates=G)}},features:[e.qOj],decls:7,vars:17,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcPlaceholder","cvcEntityName","cvcResults","cvcOptions","cvcShowError","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcSelectComponent","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf","ngIfElse"],["noAliases",""],["nz-typography","","nzType","secondary","nz-tooltip","",3,"nzTooltipTitle","innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(c,m){if(1&c&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(Ae){return m.onSearch$.next(Ae)})("cvcOnOpenChange",function(Ae){return m.onOpenChange$.next(Ae)})("cvcSelectComponent",function(Ae){return m.selectComponent=Ae})("cvcOnModelChange",function(Ae){return m.props.change&&m.props.change(m.field,Ae)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.qZA(),e.YNc(4,As,3,3,"ng-container",1),e.YNc(5,Zr,2,3,"ng-template",null,2,e.W1O)),2&c){const G=e.MAs(6);e.Q6J("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",G)("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcPlaceholder",m.props.placeholder)("cvcEntityName",m.props.entityName)("cvcResults",e.lcZ(1,11,m.result$))("cvcOptions",e.lcZ(2,13,m.selectOption$))("cvcShowError",m.showError)("cvcLoading",e.lcZ(3,15,m.isLoading$)),e.xp6(4),e.Q6J("ngrxLet",m.onSearch$)}},dependencies:[M.sg,M.O5,R.eJ,Ye.SY,me.ZU,Oo,Po.J,R.fM,J.A],changeDetection:0}),u})();const qc={types:[{name:"gene-select",wrappers:["form-field"],component:xa},{name:"gene-multi-select",wrappers:["form-field"],component:xa,defaultOptions:{props:{label:"Genes",isMultiSelect:!0}}}]};let Xc=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(qc),Xt.L,Vn.sL,Ne.LV,st.PV,je.o7,Ye.cg,s.U5,Te.ic,me.ZJ,wt.X,Bt,Un,Ve.s,$e.x]}),u})();const Da=["optionTemplates"];function Oa(u,y){if(1&u&&e._UZ(0,"cvc-attribute-tag",4),2&u){const c=e.oxw().$implicit;e.Q6J("cvcAttrValue",c)}}function wa(u,y){1&u&&(e.ynx(0),e.YNc(1,Oa,1,1,"ng-template",null,3,e.W1O),e.BQk())}function Pa(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",5)(1,"cvc-attribute-tag",6),e.NdJ("cvcOnClose",function(G){e.CHM(c);const Ae=e.oxw();return e.KtG(Ae.onTagClose$.next(G))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcAttrValue",c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}const oc={COMBINATION:"Therapies specified were used as part of a combination therapy approach",SEQUENTIAL:"Therapies specified were used at separate timepoints in the same treatment plan",SUBSTITUTES:"Therapies specified are often considered to be of the same family, or behave similarly in a treatment setting"},Ia=kt(at(),Ot()),Aa={types:[{name:"interaction-select",wrappers:["form-field"],component:(()=>{class u extends Ia{constructor(c){super(),this.cdr=c,this.defaultOptions={props:{label:"Therapy Interaction",placeholder:"Select Therapy Interaction",requireMultipleTherapies:!0,requireMultipleTherapiesPromptFn:()=>"A single associated therapy does not have an Interaction type",tooltip:"Characterizes the interaction of a multi-therapy treatment",extraType:"prompt"}},this.interactionEnum$=new ct.X([]),this.placeholder$=new ct.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.interactionEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}configureStateConnections(){if(!this.state)return console.error(`${this.field.id} requires a form state to populate its options, none was found.`),void this.placeholder$.next("ERROR: Form state not found");this.placeholder$.next(this.props.placeholder),this.state.enums.interaction$?(this.state.enums.interaction$.pipe((0,ve.t)(this)).subscribe(c=>{this.interactionEnum$.next(c)}),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,Zt.U)(c=>c.map(m=>m))),this.onTherapies$=this.state.fields.therapyIds$,this.optionTemplates||console.warn(`${this.field.id} could not find state's fields.therapyIds$ to handle its required & disabled states.`),this.onTherapies$.pipe((0,ve.t)(this)).subscribe(c=>{c&&0!=c.length?1==c.length?(this.props.description="A single associated therapy does not have an Interaction type",this.props.disabled=!0,this.props.required=!1,void 0!==this.formControl.value&&this.formControl.setValue(void 0)):(this.props.description="Select an Interaction Type",this.props.disabled=!1,this.props.required=!0):(this.props.disabled=!0,this.props.required=!1,this.props.description="Interaction type is not applicable when no therapies are selected.",void 0!==this.formControl.value&&this.formControl.setValue(void 0)),this.cdr.markForCheck()}),this.onValueChange$.pipe((0,ve.t)(this)).subscribe(c=>{c?(this.props.description=oc[c],this.props.extraType="description"):this.props.extraType="prompt"})):console.error(`${this.field.id} could not find form state's interaction$ to populate select.`)}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-interaction-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(Da,5,e.Rgc),2&c){let G;e.iGM(G=e.CRH())&&(m.optionTemplates=G)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcAttrValue","cvcContext","cvcMode","cvcOnClose"]],template:function(c,m){if(1&c&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,wa,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,Pa,2,3,"ng-template",null,2,e.W1O)),2&c){const G=e.MAs(6);e.Q6J("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,m.placeholder$))("cvcCustomTemplate",G)("cvcOptions",e.lcZ(2,11,m.selectOption$))("cvcShowError",m.showError)("cvcDisabled",m.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,m.interactionEnum$))}},dependencies:[M.sg,K,mt,R.fM]}),u})()}]};let tl=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(Aa),Bt,De,Be]}),u})();var nl=a(8004);const ol=["optionTemplates"];function ic(u,y){if(1&u&&(e.TgZ(0,"nz-tag")(1,"strong"),e._uU(2),e.qZA(),e._uU(3),e.ALo(4,"enumTooltip"),e.qZA()),2&u){const c=e.oxw().$implicit;e.xp6(2),e.Oqu(c),e.xp6(1),e.hij(" - ",e.xi3(4,2,c,"evidenceLevelBrief")," ")}}function B(u,y){1&u&&(e.ynx(0),e.YNc(1,ic,5,5,"ng-template",null,3,e.W1O),e.BQk())}function X(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"nz-tag",7),e.NdJ("nzOnClose",function(G){e.CHM(c);const Ae=e.oxw(2);return e.KtG(Ae.onTagClose$.next(G))}),e.TgZ(1,"strong"),e._uU(2),e.qZA(),e._uU(3),e.ALo(4,"enumTooltip"),e.qZA()}if(2&u){const c=e.oxw().$implicit;e.xp6(2),e.Oqu(c.nzValue),e.xp6(1),e.hij(" - ",e.xi3(4,2,c.nzValue,"evidenceLevelBrief")," ")}}function x(u,y){if(1&u&&(e.ynx(0),e._uU(1),e.ALo(2,"enumTooltip"),e.BQk()),2&u){const c=e.oxw().$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,c.nzValue,"evidenceLevelBrief")," ")}}function ce(u,y){if(1&u&&(e.TgZ(0,"div",4),e.YNc(1,X,5,5,"nz-tag",5),e.YNc(2,x,3,4,"ng-container",6),e.qZA()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngIf",!c.props.isMultiSelect),e.xp6(1),e.Q6J("ngIf",c.props.isMultiSelect)}}const Ie=new Map([[Fn.Sx0.A,"Evidence shows consensus association in human medicine"],[Fn.Sx0.B,"Evidence supports association using clinical trial or other primary patient data"],[Fn.Sx0.C,"Evidence supports association using individual case reports from clinical journals"],[Fn.Sx0.D,"Evidence supports association using in vivo or in vitro models"],[Fn.Sx0.E,"Evidential association is inferential or indirect"]]),ht=kt(at(),Ot());let _t=(()=>{class u extends ht{constructor(c){super(),this.cdr=c,this.defaultOptions={props:{label:"Evidence Level",required:!1,isMultiSelect:!1,placeholder:"Select Evidence Level"}},this.levelEnum$=new ct.X([])}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.levelEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}configureStateConnections(){this.props.tooltip="Type of study performed to produce the evidence statement",this.placeholder$=new ct.X(this.props.placeholder),this.levelEnum$.next((0,To.o6)(Fn.Sx0).map(c=>c)),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,Zt.U)(c=>c.map(m=>m))),this.onValueChange$.pipe((0,ve.t)(this)).subscribe(c=>{this.props.description=c?Ie.get(c):void 0})}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-level-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(ol,5,e.Rgc),2&c){let G;e.iGM(G=e.CRH())&&(m.optionTemplates=G)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[1,"ant-select-selection-item-content"],["nzMode","closeable",3,"nzOnClose",4,"ngIf"],[4,"ngIf"],["nzMode","closeable",3,"nzOnClose"]],template:function(c,m){if(1&c&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,B,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,ce,3,2,"ng-template",null,2,e.W1O)),2&c){const G=e.MAs(6);e.Q6J("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,m.placeholder$))("cvcCustomTemplate",G)("cvcOptions",e.lcZ(2,11,m.selectOption$))("cvcShowError",m.showError)("cvcDisabled",m.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,m.levelEnum$))}},dependencies:[M.sg,M.O5,wt.j,K,R.fM,nl.v]}),u})();const an={types:[{name:"level-select",wrappers:["form-field"],component:_t},{name:"level-multi-select",wrappers:["form-field"],component:_t,defaultOptions:{props:{label:"Levels",isMultiSelect:!0}}}]};let An=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(an),wt.X,Ve.s,Bt,De]}),u})();var ro,io=a(6928);let Yo=((ro=class{constructor(y){this.el=y,this.domChange=new e.vpe,this.changes=new MutationObserver(c=>{(0,eo.D)(c).pipe((0,Zt.U)(m=>{const G=m.target;return"class"===m.attributeName?{type:"class",change:G.classList.value,key:`${m.attributeName}:${G.classList.value}`}:"disabled"===m.attributeName?{type:"disabled",change:G.disabled,key:`${m.attributeName}:${G.disabled}`}:"hidden"===m.attributeName?{type:"hidden",change:G.hidden,key:`${m.attributeName}:${G.hidden}`}:{type:m.attributeName,change:"unknown change type",key:`${m.attributeName}:unknown-change-type`}}),$("key"),(0,ve.t)(this)).subscribe(m=>{this.domChange.emit(m)})}),this.changes.observe(this.el.nativeElement,{attributeFilter:["class","disabled","hidden"],attributes:!0,childList:!1,subtree:!1})}ngAfterViewInit(){this.initialClass=this.el.nativeElement.classList.value}ngOnDestroy(){this.changes.disconnect()}}).\u0275fac=function(y){return new(y||ro)(e.Y36(e.SBq))},ro.\u0275dir=e.lG2({type:ro,selectors:[["button","cvcOrgSubmitButton",""]],outputs:{domChange:"domChange"}}),ro);Yo=(0,Ce.gn)([(0,ve.c)()],Yo);var Kr,wi=a(951);function Br(u,y){if(1&u&&(e.TgZ(0,"button",2),e._uU(1),e.qZA()),2&u){const c=y.ngrxLet,m=e.oxw();e.Q6J("disabled",!m.form.valid)("nzTooltipTrigger",c?"hover":null)("nzTooltipTitle","For "+(null==c?null:c.name)),e.xp6(1),e.hij(" ",m.props.submitLabel,"\n")}}let zr=((Kr=class extends v.fS{constructor(y,c,m){super(),this.viewerService=y,this.cdr=c,this.apollo=m,this.menuSelection$=new Xe.x,this.baseButtonClass="org-dropdown-btn",this.defaultOptions={props:{submitLabel:"Submit"}},this.viewer$=this.viewerService.viewer$,this.organizations$=this.viewer$.pipe((0,Cn.j)("organizations")),this.mostRecentOrg$=this.viewer$.pipe((0,Cn.j)("mostRecentOrg")),this.isDisabled$=new Xe.x,this.isHidden$=new Xe.x,this.buttonClass$=new ct.X(this.baseButtonClass),this.subscriptions=[]}ngOnInit(){this.menuSelection$.pipe((0,it.M)(this.viewer$)).subscribe(([G,Ae])=>{const Dt={id:`User:${Ae.id}`,fragment:_o.Ps`
            fragment UserMostRecentOrgId on User {
              mostRecentOrganizationId
            }
          `,data:{mostRecentOrganizationId:G}};this.apollo.client.writeFragment(Dt)}),this.formUpdate$=new ct.X(this.form.status);const y=this.form.statusChanges.subscribe(G=>this.formUpdate$.next(G)),c=this.formUpdate$.subscribe(G=>this.cdr.detectChanges()),m=this.mostRecentOrg$.pipe((0,Cn.j)("id"),(0,qe.h)(xo.ep)).subscribe(G=>{this.formControl.setValue(G)});this.subscriptions=this.subscriptions.concat([y,c,m])}ngAfterViewInit(){if(this.button&&this.button.domChange){const y=this.button.domChange.subscribe(c=>{"class"===c.type&&"string"==typeof c.change?this.buttonClass$.next(`${this.baseButtonClass} ${c.change}`):"disabled"===c.type&&"boolean"==typeof c.change?this.isDisabled$.next(c.change):"hidden"===c.type&&"boolean"==typeof c.change&&this.isHidden$.next(c.change)});this.subscriptions.push(y)}}}).\u0275fac=function(y){return new(y||Kr)(e.Y36(wi.a),e.Y36(e.sBO),e.Y36(_o._M))},Kr.\u0275cmp=e.Xpm({type:Kr,selectors:[["cvc-org-submit-button"]],viewQuery:function(y,c){if(1&y&&e.Gf(Yo,5),2&y){let m;e.iGM(m=e.CRH())&&(c.button=m.first)}},features:[e.qOj],decls:2,vars:3,consts:[["type","hidden",3,"formControl","formlyAttributes"],["cvcOrgSubmitButton","","type","submit","nz-button","","nzType","primary","nz-tooltip","",3,"disabled","nzDanger","nzTooltipTrigger","nzTooltipTitle",4,"ngrxLet"],["cvcOrgSubmitButton","","type","submit","nz-button","","nzType","primary","nz-tooltip","",3,"disabled","nzDanger","nzTooltipTrigger","nzTooltipTitle"]],template:function(y,c){1&y&&(e._UZ(0,"input",0),e.YNc(1,Br,2,4,"button",1)),2&y&&(e.Q6J("formControl",c.formControl)("formlyAttributes",c.field),e.xp6(1),e.Q6J("ngrxLet",c.mostRecentOrg$))},dependencies:[t.Fj,t.JJ,t.oH,R.eJ,v.JD,Vn.ix,Zo.w,Ko.dQ,Ye.SY,Yo],styles:["[_nghost-%COMP%]{display:inline-block}[_nghost-%COMP%]     .ant-btn-dangerous.ant-btn-primary:first-child:not(:last-child){border-right-color:#ff4d4f}[_nghost-%COMP%]     .ant-btn-dangerous.ant-btn-primary:hover, [_nghost-%COMP%]     .ant-btn-dangerous.ant-btn-primary:focus{border-right-color:#fd7978}.org-dropdown-btn[_ngcontent-%COMP%]   nz-avatar[_ngcontent-%COMP%]{margin:-2px 6px 0;border:1px solid rgba(255,255,255,.3);background-color:#ffffffe6}.org-dropdown-btn.ant-btn-dangerous[_ngcontent-%COMP%]:last-child:not(:first-child), .org-dropdown-btn[_ngcontent-%COMP%]   .ant-btn-dangerous[_ngcontent-%COMP%] + .ant-btn-dangerous[_ngcontent-%COMP%]{border-left-color:#fd7978}"],changeDetection:0}),Kr);zr=(0,Ce.gn)([(0,ve.c)({arrayName:"subscriptions"})],zr);const Bi={types:[{name:"org-submit-button",component:zr}]};let Tr=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(Bi),st.PV,io.Rt,Vn.sL,Hn.b1,Ye.cg]}),u})();const Ul=["optionTemplates"];function jl(u,y){if(1&u&&e._UZ(0,"cvc-attribute-tag",4),2&u){const c=e.oxw().$implicit;e.Q6J("cvcAttrValue",c)}}function Gl(u,y){1&u&&(e.ynx(0),e.YNc(1,jl,1,1,"ng-template",null,3,e.W1O),e.BQk())}function oa(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",5)(1,"cvc-attribute-tag",6),e.NdJ("cvcOnClose",function(G){e.CHM(c);const Ae=e.oxw();return e.KtG(Ae.onTagClose$.next(G))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcAttrValue",c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}const Fs=new Map([[Fn.huM.Somatic,"Variant is a mutation, found only in tumor cells, having arisen in a specific tissue (non-germ cell), and is not expected to be inherited or passed to offspring."],[Fn.huM.RareGermline,"Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in less than 1% of the population relevant to this evidence item."],[Fn.huM.CommonGermline,"Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in at least 1% of the population relevant to this evidence item."],[Fn.huM.Combined," Variants in the corresponding Complex Molecular Profile have heterogeneous origins."],[Fn.huM.Unknown,"The variant origin is uncertain based on the available evidence."],[Fn.huM.Na,"The variant type (e.g., expression) is not compatible (or easily classified) with the CIViC concept of variant origin."]]),rc=kt(at(),Ot());let e1=(()=>{class u extends rc{constructor(c){super(),this.cdr=c,this.defaultOptions={props:{label:"Variant Origin",required:!1,isMultiSelect:!1,placeholder:"Select Variant Origin",tooltip:"Identifies whether the variant is inherited (germline mutation) or acquired (somatic mutation) in the context of the study"}},this.originEnum$=new ct.X([])}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.originEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr}),this.originEnum$.next(Array.from(Fs.keys()))}configureStateConnections(){this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,Zt.U)(c=>c.map(m=>m))),this.onValueChange$.pipe((0,ve.t)(this)).subscribe(c=>{this.props.description=c?Fs.get(c):void 0})}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-origin-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(Ul,5,e.Rgc),2&c){let G;e.iGM(G=e.CRH())&&(m.optionTemplates=G)}},features:[e.qOj],decls:6,vars:13,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcAttrValue","cvcContext","cvcMode","cvcOnClose"]],template:function(c,m){if(1&c&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.YNc(2,Gl,3,0,"ng-container",1),e.ALo(3,"ngrxPush"),e.YNc(4,oa,2,3,"ng-template",null,2,e.W1O)),2&c){const G=e.MAs(5);e.Q6J("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",m.props.placeholder)("cvcCustomTemplate",G)("cvcOptions",e.lcZ(1,9,m.selectOption$))("cvcShowError",m.showError)("cvcDisabled",m.props.disabled),e.xp6(2),e.Q6J("ngForOf",e.lcZ(3,11,m.originEnum$))}},dependencies:[M.sg,K,mt,R.fM]}),u})();const il={types:[{name:"origin-select",wrappers:["form-field"],component:e1},{name:"origin-multi-select",wrappers:["form-field"],component:e1,defaultOptions:{props:{label:"Variant Origins",isMultiSelect:!0}}}]};let Ql=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(il),Bt,De,Be]}),u})();const t1=["optionTemplates"];function rl(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"em"),e._UZ(2,"span",8),e.ALo(3,"highlightTypeahead"),e.qZA(),e.BQk()),2&u){const c=e.oxw(2).$implicit,m=e.oxw().ngrxLet;e.xp6(2),e.Q6J("innerHtml",e.xi3(3,1,c.hpoId,m),e.oJD)}}function pd(u,y){if(1&u&&(e._UZ(0,"cvc-entity-tag",5),e.TgZ(1,"span",6),e.YNc(2,rl,4,4,"ng-container",7),e.qZA()),2&u){const c=e.oxw().$implicit,m=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",c.__typename+":"+c.id)("cvcEmphasize",m),e.xp6(2),e.Q6J("ngIf",c.hpoId)}}function hd(u,y){1&u&&(e.ynx(0),e.YNc(1,pd,3,4,"ng-template",null,4,e.W1O),e.BQk())}function Wl(u,y){if(1&u&&(e.ynx(0),e.YNc(1,hd,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function sc(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",9)(1,"cvc-entity-tag",10),e.NdJ("cvcOnClose",function(){const Ae=e.CHM(c).$implicit,Dt=e.oxw();return e.KtG(Dt.onTagClose$.next(Ae.nzValue))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Phenotype:"+c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}const Zl=kt(at(),oi());let ms=(()=>{class u extends Zl{constructor(c,m,G){super(),this.taq=c,this.tq=m,this.changeDetectorRef=G,this.defaultOptions={props:{entityName:{singular:"Phenotype",plural:"Phenotypes"},isMultiSelect:!1,requireType:!0,tooltip:"Phenotype or phenotype combination which interacts with the specified variant",placeholders:{default:"Search Phenotypes",multiDefault:"Select Phenotype(s) (max MULTI_MAX)",requireTypePrompt:"Select an ENTITY_NAME Type to search Phenotypes"},description:'Please provide any <a href="https://hpo.jax.org/app/browse/term/HP:0000118" target="_blank">HPO phenotypes</a>, including <a href="https://hpo.jax.org/app/browse/term/HP:0003674" target="_blank">age of onset</a>.',extraType:"description"}},this.placeholder$=new ct.X(this.defaultOptions.props.placeholders.default)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.configurePlaceholders()}configureStateConnections(){}configurePlaceholders(){}getTypeaheadVarsFn(c){return{name:c}}getTypeaheadResultsFn(c){return c.data.phenotypeTypeahead}getTagQueryVarsFn(c){return{id:c}}getTagQueryResultsFn(c){return c.data.phenotype}getSelectedItemOptionFn(c){return{value:c.id,label:c.name}}getSelectOptionsFn(c,m){return c.map((G,Ae)=>({label:m.get(Ae)||G.name,value:G.id}))}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(Fn.zOE),e.Y36(Fn.z_7),e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-phenotype-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(t1,5,e.Rgc),2&c){let G;e.iGM(G=e.CRH())&&(m.optionTemplates=G)}},features:[e.qOj],decls:9,vars:22,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf"],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(c,m){if(1&c&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(Ae){return m.onSearch$.next(Ae)})("cvcOnOpenChange",function(Ae){return m.onOpenChange$.next(Ae)})("cvcOnModelChange",function(Ae){return m.props.change&&m.props.change(m.field,Ae)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.qZA(),e.YNc(6,Wl,3,3,"ng-container",1),e.YNc(7,sc,2,3,"ng-template",null,2,e.W1O)),2&c){const G=e.MAs(8);e.Q6J("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",G)("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcEntityName",m.props.entityName)("cvcPlaceholder",e.lcZ(1,12,m.placeholder$))("cvcResults",e.lcZ(2,14,m.result$))("cvcOptions",e.lcZ(3,16,m.selectOption$))("cvcShowError",m.showError)("cvcDisabled",m.onRequiresPhenotype$&&!e.lcZ(4,18,m.onRequiresPhenotype$))("cvcLoading",e.lcZ(5,20,m.isLoading$)),e.xp6(6),e.Q6J("ngrxLet",m.onSearch$)}},dependencies:[M.sg,M.O5,R.eJ,me.ZU,Oo,Po.J,R.fM,J.A],changeDetection:0}),u})();const ac={types:[{name:"phenotype-select",wrappers:["form-field"],component:ms,defaultOptions:{props:{label:"Phenotype"}}},{name:"phenotype-multi-select",wrappers:["form-field"],component:ms,defaultOptions:{props:{isMultiSelect:!0,label:"Phenotypes"}}}]};let cc=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(ac),Xt.L,Vn.sL,Ne.LV,Xn.$6,vo.Qp,st.PV,je.o7,pe.Jb,Ye.cg,Tt.zf,s.U5,Te.ic,me.ZJ,wt.X,Bt,Un,Ve.s,$e.x]}),u})();var Kl=a(6028),sl=a(2438),Fa=a(9773),Jl=a(874),Jr=a(9087),ia=a(7754),Na=a(9388);const lc=["nz-rate-item",""];function uc(u,y){}function dc(u,y){}function al(u,y){1&u&&e._UZ(0,"span",4)}const n1=function(u){return{$implicit:u}},o1=["ulElement"];function r1(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"li",3)(1,"div",4),e.NdJ("itemHover",function(G){const Dt=e.CHM(c).index,Mn=e.oxw();return e.KtG(Mn.onItemHover(Dt,G))})("itemClick",function(G){const Dt=e.CHM(c).index,Mn=e.oxw();return e.KtG(Mn.onItemClick(Dt,G))}),e.qZA()()}if(2&u){const c=y.index,m=e.oxw();e.Q6J("ngClass",m.starStyleArray[c]||"")("nzTooltipTitle",m.nzTooltips[c]),e.xp6(1),e.Q6J("allowHalf",m.nzAllowHalf)("character",m.nzCharacter)("index",c)}}let ql=(()=>{class u{constructor(){this.index=0,this.allowHalf=!1,this.itemHover=new e.vpe,this.itemClick=new e.vpe}hoverRate(c){this.itemHover.next(c&&this.allowHalf)}clickRate(c){this.itemClick.next(c&&this.allowHalf)}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["","nz-rate-item",""]],inputs:{character:"character",index:"index",allowHalf:"allowHalf"},outputs:{itemHover:"itemHover",itemClick:"itemClick"},exportAs:["nzRateItem"],attrs:lc,decls:6,vars:8,consts:[[1,"ant-rate-star-second",3,"mouseover","click"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"ant-rate-star-first",3,"mouseover","click"],["defaultCharacter",""],["nz-icon","","nzType","star","nzTheme","fill"]],template:function(c,m){if(1&c&&(e.TgZ(0,"div",0),e.NdJ("mouseover",function(Ae){return m.hoverRate(!1),Ae.stopPropagation()})("click",function(){return m.clickRate(!1)}),e.YNc(1,uc,0,0,"ng-template",1),e.qZA(),e.TgZ(2,"div",2),e.NdJ("mouseover",function(Ae){return m.hoverRate(!0),Ae.stopPropagation()})("click",function(){return m.clickRate(!0)}),e.YNc(3,dc,0,0,"ng-template",1),e.qZA(),e.YNc(4,al,1,0,"ng-template",null,3,e.W1O)),2&c){const G=e.MAs(5);e.xp6(1),e.Q6J("ngTemplateOutlet",m.character||G)("ngTemplateOutletContext",e.VKq(4,n1,m.index)),e.xp6(2),e.Q6J("ngTemplateOutlet",m.character||G)("ngTemplateOutletContext",e.VKq(6,n1,m.index))}},dependencies:[M.tP,st.Ls],encapsulation:2,changeDetection:0}),(0,Ce.gn)([(0,ia.yF)()],u.prototype,"allowHalf",void 0),u})(),pc=(()=>{class u{get nzValue(){return this._value}set nzValue(c){this._value!==c&&(this._value=c,this.hasHalf=!Number.isInteger(c),this.hoverValue=Math.ceil(c))}constructor(c,m,G,Ae,Dt,Mn){this.nzConfigService=c,this.ngZone=m,this.renderer=G,this.cdr=Ae,this.directionality=Dt,this.destroy$=Mn,this._nzModuleName="rate",this.nzAllowClear=!0,this.nzAllowHalf=!1,this.nzDisabled=!1,this.nzAutoFocus=!1,this.nzCount=5,this.nzTooltips=[],this.nzOnBlur=new e.vpe,this.nzOnFocus=new e.vpe,this.nzOnHoverChange=new e.vpe,this.nzOnKeyDown=new e.vpe,this.classMap={},this.starArray=[],this.starStyleArray=[],this.dir="ltr",this.hasHalf=!1,this.hoverValue=0,this.isFocused=!1,this._value=0,this.isNzDisableFirstChange=!0,this.onChange=()=>null,this.onTouched=()=>null}ngOnChanges(c){const{nzAutoFocus:m,nzCount:G,nzValue:Ae}=c;if(m&&!m.isFirstChange()){const Dt=this.ulElement.nativeElement;this.nzAutoFocus&&!this.nzDisabled?this.renderer.setAttribute(Dt,"autofocus","autofocus"):this.renderer.removeAttribute(Dt,"autofocus")}G&&this.updateStarArray(),Ae&&this.updateStarStyle()}ngOnInit(){this.nzConfigService.getConfigChangeEventForComponent("rate").pipe((0,Fa.R)(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),this.directionality.change.pipe((0,Fa.R)(this.destroy$)).subscribe(c=>{this.dir=c,this.cdr.detectChanges()}),this.dir=this.directionality.value,this.ngZone.runOutsideAngular(()=>{(0,sl.R)(this.ulElement.nativeElement,"focus").pipe((0,Fa.R)(this.destroy$)).subscribe(c=>{this.isFocused=!0,this.nzOnFocus.observers.length&&this.ngZone.run(()=>this.nzOnFocus.emit(c))}),(0,sl.R)(this.ulElement.nativeElement,"blur").pipe((0,Fa.R)(this.destroy$)).subscribe(c=>{this.isFocused=!1,this.nzOnBlur.observers.length&&this.ngZone.run(()=>this.nzOnBlur.emit(c))})})}onItemClick(c,m){if(this.nzDisabled)return;this.hoverValue=c+1;const G=m?c+.5:c+1;this.nzValue===G?this.nzAllowClear&&(this.nzValue=0,this.onChange(this.nzValue)):(this.nzValue=G,this.onChange(this.nzValue)),this.updateStarStyle()}onItemHover(c,m){this.nzDisabled||this.hoverValue===c+1&&m===this.hasHalf||(this.hoverValue=c+1,this.hasHalf=m,this.nzOnHoverChange.emit(this.hoverValue),this.updateStarStyle())}onRateLeave(){this.hasHalf=!Number.isInteger(this.nzValue),this.hoverValue=Math.ceil(this.nzValue),this.updateStarStyle()}focus(){this.ulElement.nativeElement.focus()}blur(){this.ulElement.nativeElement.blur()}onKeyDown(c){const m=this.nzValue;c.keyCode===Kl.SV&&this.nzValue<this.nzCount?this.nzValue+=this.nzAllowHalf?.5:1:c.keyCode===Kl.oh&&this.nzValue>0&&(this.nzValue-=this.nzAllowHalf?.5:1),m!==this.nzValue&&(this.onChange(this.nzValue),this.nzOnKeyDown.emit(c),this.updateStarStyle(),this.cdr.markForCheck())}updateStarArray(){this.starArray=Array(this.nzCount).fill(0).map((c,m)=>m),this.updateStarStyle()}updateStarStyle(){this.starStyleArray=this.starArray.map(c=>{const m="ant-rate-star",G=c+1;return{[`${m}-full`]:G<this.hoverValue||!this.hasHalf&&G===this.hoverValue,[`${m}-half`]:this.hasHalf&&G===this.hoverValue,[`${m}-active`]:this.hasHalf&&G===this.hoverValue,[`${m}-zero`]:G>this.hoverValue,[`${m}-focused`]:this.hasHalf&&G===this.hoverValue&&this.isFocused}})}writeValue(c){this.nzValue=c||0,this.updateStarArray(),this.cdr.markForCheck()}setDisabledState(c){this.nzDisabled=this.isNzDisableFirstChange&&this.nzDisabled||c,this.isNzDisableFirstChange=!1,this.cdr.markForCheck()}registerOnChange(c){this.onChange=c}registerOnTouched(c){this.onTouched=c}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(Jl.jY),e.Y36(e.R0b),e.Y36(e.Qsj),e.Y36(e.sBO),e.Y36(Na.Is,8),e.Y36(Jr.kn))},u.\u0275cmp=e.Xpm({type:u,selectors:[["nz-rate"]],viewQuery:function(c,m){if(1&c&&e.Gf(o1,7),2&c){let G;e.iGM(G=e.CRH())&&(m.ulElement=G.first)}},inputs:{nzAllowClear:"nzAllowClear",nzAllowHalf:"nzAllowHalf",nzDisabled:"nzDisabled",nzAutoFocus:"nzAutoFocus",nzCharacter:"nzCharacter",nzCount:"nzCount",nzTooltips:"nzTooltips"},outputs:{nzOnBlur:"nzOnBlur",nzOnFocus:"nzOnFocus",nzOnHoverChange:"nzOnHoverChange",nzOnKeyDown:"nzOnKeyDown"},exportAs:["nzRate"],features:[e._Bn([Jr.kn,{provide:t.JU,useExisting:(0,e.Gpc)(()=>u),multi:!0}]),e.TTD],decls:3,vars:7,consts:[[1,"ant-rate",3,"ngClass","tabindex","keydown","mouseleave"],["ulElement",""],["class","ant-rate-star","nz-tooltip","",3,"ngClass","nzTooltipTitle",4,"ngFor","ngForOf"],["nz-tooltip","",1,"ant-rate-star",3,"ngClass","nzTooltipTitle"],["nz-rate-item","",3,"allowHalf","character","index","itemHover","itemClick"]],template:function(c,m){1&c&&(e.TgZ(0,"ul",0,1),e.NdJ("keydown",function(Ae){return m.onKeyDown(Ae),Ae.preventDefault()})("mouseleave",function(Ae){return m.onRateLeave(),Ae.stopPropagation()}),e.YNc(2,r1,2,5,"li",2),e.qZA()),2&c&&(e.ekj("ant-rate-disabled",m.nzDisabled)("ant-rate-rtl","rtl"===m.dir),e.Q6J("ngClass",m.classMap)("tabindex",m.nzDisabled?-1:1),e.xp6(2),e.Q6J("ngForOf",m.starArray))},dependencies:[M.mk,M.sg,Ye.SY,ql],encapsulation:2,changeDetection:0}),(0,Ce.gn)([(0,Jl.oS)(),(0,ia.yF)()],u.prototype,"nzAllowClear",void 0),(0,Ce.gn)([(0,Jl.oS)(),(0,ia.yF)()],u.prototype,"nzAllowHalf",void 0),(0,Ce.gn)([(0,ia.yF)()],u.prototype,"nzDisabled",void 0),(0,Ce.gn)([(0,ia.yF)()],u.prototype,"nzAutoFocus",void 0),(0,Ce.gn)([(0,ia.Rn)()],u.prototype,"nzCount",void 0),u})(),La=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[Na.vT,M.ez,st.PV,Ye.cg]}),u})();const ns={1:"Poor - Claim is not supported well by experimental evidence. Results are not reproducible, or have very small sample size. No follow-up is done to validate novel claims.",2:"Adequate - Evidence is not well supported by experimental data, and little follow-up data is available. Experiments may lack proper controls, have small sample size, or are not statistically convincing.",3:"Average - Evidence is convincing, but not supported by a breadth of experiments. May be smaller scale projects, or novel results without many follow-up experiments. Discrepancies from expected results are explained and not concerning.",4:"Strong - Well supported evidence. Experiments are well controlled, and results are convincing. Any discrepancies from expected results are well-explained and not concerning.",5:"Excellent - Solid, well supported evidence from a lab or journal with respected academic standing. Experiments are well controlled, and results are clean and reproducible across multiple replicates. Evidence confirmed using separate methods."},Xl=kt(at(),Ot()),ll={types:[{name:"rating",wrappers:["form-field"],component:(()=>{class u extends Xl{constructor(){super(),this.defaultOptions={props:{label:"Evidence Rating",count:5,tooltip:"A representation of the curator's confidence in the quality of the summarized evidence",hoverText:[]}},this.rating$=new ct.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.formControl.value&&this.rating$.next(this.formControl.value),Object.entries(ns).map(([c,m])=>{this.props.hoverText.push(m)}),this.rating$.pipe((0,ve.t)(this)).subscribe(c=>{this.formControl.setValue(c)}),this.onValueChange$.pipe((0,ve.t)(this)).subscribe(c=>{this.props.description=c?ns[c]:void 0})}configureStateConnections(){}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-rating"]],features:[e.qOj],decls:2,vars:5,consts:[["type","hidden",3,"formControl","formlyAttributes"],[3,"ngModel","nzCount","nzTooltips","ngModelChange"]],template:function(c,m){1&c&&(e._UZ(0,"input",0),e.TgZ(1,"nz-rate",1),e.NdJ("ngModelChange",function(Ae){return m.rating$.next(Ae)}),e.qZA()),2&c&&(e.Q6J("formControl",m.formControl)("formlyAttributes",m.field),e.xp6(1),e.Q6J("ngModel",m.formControl.value)("nzCount",m.props.count)("nzTooltips",m.props.hoverText))},dependencies:[t.Fj,t.JJ,t.oH,t.On,v.JD,pc],styles:["[_nghost-%COMP%]     nz-rate .anticon{font-size:160%}"],changeDetection:0}),u})()}]};let Ns=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,t.u5,v.X0.forChild(ll),La,Ve.s,Bt,De]}),u})();const tu=["optionTemplates"];function ul(u,y){if(1&u&&e._UZ(0,"cvc-attribute-tag",4),2&u){const c=e.oxw().$implicit;e.Q6J("cvcAttrValue",c)}}function hc(u,y){1&u&&(e.ynx(0),e.YNc(1,ul,1,1,"ng-template",null,3,e.W1O),e.BQk())}function nu(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",5)(1,"cvc-attribute-tag",6),e.NdJ("cvcOnClose",function(G){e.CHM(c);const Ae=e.oxw();return e.KtG(Ae.onTagClose$.next(G))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcAttrValue",c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}const dl={Evidence:{PREDICTIVE:{SENSITIVITYRESPONSE:"Associated with a clinical or preclinical response to treatment",RESISTANCE:"Associated with clinical or preclinical resistance to treatment",ADVERSE_RESPONSE:"Associated with an adverse response to drug treatment",REDUCED_SENSITIVITY:"Response to treatment is lower than seen in other treatment contexts",NA:"Clinical Significance is not applicable."},DIAGNOSTIC:{POSITIVE:"Associated with diagnosis of disease or subtype",NEGATIVE:"Associated with lack of disease or subtype"},PROGNOSTIC:{BETTER_OUTCOME:"Demonstrates better than expected clinical outcome",POOR_OUTCOME:"Demonstrates worse than expected clinical outcome",NA:"Clinical Significance is not applicable."},PREDISPOSING:{PREDISPOSITION:"Germline variant has predisposing potential for cancer, and may meet select ACMG/AMP criteria supporting pathogenic or benign classification.",PROTECTIVENESS:"Germline variant has properties that protect individuals from acquiring cancer."},FUNCTIONAL:{GAIN_OF_FUNCTION:"Sequence variant confers an increase in normal gene function",LOSS_OF_FUNCTION:"Sequence variant confers a diminished or abolished function",UNALTERED_FUNCTION:"Gene product of sequence variant is unchanged",NEOMORPHIC:"Sequence variant creates a novel function",DOMINANT_NEGATIVE:"Sequence variant abrogates function of wildtype allele gene product",UNKNOWN:"Sequence variant that cannot be precisely defined by the other listed categories"},ONCOGENIC:{ONCOGENICITY:"Somatic variant has oncogenic potential for driving cancer, and may meet select ClinGen/CGC/VICC criteria supporting pathogenic or benign classification.",PROTECTIVENESS:"Somatic variant has a protective role against cancer."}},Assertion:{PREDICTIVE:{SENSITIVITYRESPONSE:"Associated with a clinical or preclinical response to treatment",RESISTANCE:"Associated with clinical or preclinical resistance to treatment",ADVERSE_RESPONSE:"Associated with an adverse response to drug treatment",REDUCED_SENSITIVITY:"Response to treatment is lower than seen in other treatment contexts",NA:"Clinical Significance is not applicable."},DIAGNOSTIC:{POSITIVE:"Associated with diagnosis of disease or subtype",NEGATIVE:"Associated with lack of disease or subtype"},PROGNOSTIC:{BETTER_OUTCOME:"Demonstrates better than expected clinical outcome",POOR_OUTCOME:"Demonstrates worse than expected clinical outcome",NA:"Clinical Significance is not applicable."},PREDISPOSING:{PATHOGENIC:"Very strong evidence the variant is pathogenic",LIKELY_PATHOGENIC:"Strong evidence (>90% certainty) the variant is pathogenic.",BENIGN:"Very strong evidence the variant is benign",LIKELY_BENIGN:"Not expected to have a major effect on disease",UNCERTAIN_SIGNIFICANCE:"Does not meet the ACMG/AMP criteria for pathogenic/benign, or the evidence is conflicting"},ONCOGENIC:{ONCOGENIC:"Very strong evidence the variant is oncogenic.",LIKELY_ONCOGENIC:"Strong evidence the variant is oncogenic.",BENIGN:"Very strong evidence the variant does not have oncogenic properties.",LIKELY_BENIGN:"Strong evidence the variant does not have oncogenic properties.",UNCERTAIN_SIGNIFICANCE:"Does not meet guideline criteria for oncogenic/benign, or the evidence is conflicting."}}},fc=kt(at(),Ot()),Ls={types:[{name:"significance-select",wrappers:["form-field"],component:(()=>{class u extends fc{constructor(c){super(),this.cdr=c,this.defaultOptions={props:{label:"Significance",required:!0,isMultiSelect:!1,placeholder:"Select Significance",placeholderFn:m=>`Select ${m?m+" ":""} Significance`,requireTypePromptFn:m=>`Select ${m} Type to select its Significance`,tooltip:"Clinical impact of the variant",formMode:"add"}},this.significanceEnum$=new ct.X([])}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.significanceEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}configureStateConnections(){if(!this.state)return console.error(`${this.field.id} requires a form state to populate its options, none was found.`),void(this.placeholder$=new ct.X("ERROR: Form state not found"));if(this.placeholder$=new ct.X(this.props.placeholderFn(this.state.entityName)),!this.state.enums.significance$)return void console.error(`${this.field.id} could not find form state's enums.significance$ to populate select.`);this.state.enums.significance$.pipe((0,ve.t)(this)).subscribe(m=>{this.significanceEnum$.next(m)}),this.optionTemplates||console.warn(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,Zt.U)(m=>m.map(G=>G)));const c=`${this.state.entityName.toLowerCase()}Type$`;this.state.fields[c]?(this.onTypeSelect$=this.state.fields[c],this.onTypeSelect$.pipe((0,Pt.T)("add"===this.props.formMode?0:1),(0,ve.t)(this)).subscribe(m=>{m?(this.props.disabled=!1,this.props.description=void 0,this.props.extraType=void 0,this.placeholder$.next(this.props.placeholderFn(this.state.entityName))):(this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName),this.props.extraType="prompt"),this.formControl.value&&this.formControl.setValue(void 0)}),this.onValueChange$.pipe((0,it.M)(this.onTypeSelect$),(0,ve.t)(this)).subscribe(([m,G])=>{!G||!m||!this.state||(this.props.description=void 0,this.props.extraType="description",this.props.description=dl[this.state.entityName][G][m])})):console.error(`${this.field.id} could not find form state's ${c} to populate Significance options.`)}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-significance-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(tu,5,e.Rgc),2&c){let G;e.iGM(G=e.CRH())&&(m.optionTemplates=G)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcAttrValue","cvcContext","cvcMode","cvcOnClose"]],template:function(c,m){if(1&c&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,hc,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,nu,2,3,"ng-template",null,2,e.W1O)),2&c){const G=e.MAs(6);e.Q6J("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,m.placeholder$))("cvcCustomTemplate",G)("cvcOptions",e.lcZ(2,11,m.selectOption$))("cvcShowError",m.showError)("cvcDisabled",m.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,m.significanceEnum$))}},dependencies:[M.sg,K,mt,R.fM]}),u})()}]};let ks=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(Ls),Bt,De,Be]}),u})();var aa,pl=a(7907),gs=a(2666),sa=a(7921);function ou(u,y){1&u&&e._UZ(0,"span",9),2&u&&e.Q6J("nzType","loading")}function s1(u,y){if(1&u&&(e.ynx(0),e.YNc(1,ou,1,1,"span",8),e._uU(2,"\xa0 "),e.TgZ(3,"span"),e._uU(4),e.qZA(),e.BQk()),2&u){const c=y.ngrxLet;e.xp6(1),e.Q6J("ngIf",c.showSpinner),e.xp6(3),e.Oqu(c.message)}}function a1(u,y){if(1&u&&e._uU(0),2&u){const c=e.oxw();e.Oqu(c.successMessage)}}function c1(u,y){1&u&&(e.TgZ(0,"button",10),e._uU(1," Add Source "),e.qZA()),2&u&&e.Q6J("disabled",null===y.ngrxLet.citation)}const l1=function(){return[0,0]};let hl=((aa=class{constructor(y,c,m,G,Ae){this.checkCitation=y,this.addRemoteCitation=c,this.errors=m,this.apollo=G,this.cdr=Ae,this.cvcOnCreate=new e.vpe,this.messageOptions={empty:(Dt,Mn)=>`No ${Mn} Source with a citation ID of "${Dt}"`,searchCitation:(Dt,Mn)=>`Searching ${Mn} for a citation ID of "${Dt}"`,foundCitation:(Dt,Mn,kn)=>`Found ${Mn} citation "${kn}" with ID ${Dt}`,noCitation:(Dt,Mn)=>`No ${Mn} Source with a citation ID of "${Dt}" was found`},this.form=new t.nJ({}),this.model={citationId:"",sourceType:Fn.yic.Pubmed},this.formLayout="horizontal",this.options={formState:{formLayout:this.formLayout}},this.onSubmit$=new Xe.x,this.citationId$=new ct.X(""),this.sourceType$=new ct.X(Fn.yic.Pubmed),this.addSourceStubMutator=new qo.U(this.errors),this.fields=[{key:"citationId",props:{hidden:!0}},{key:"sourceType",props:{hidden:!0}}],this.onSubmit$.pipe((0,ve.t)(this)).subscribe(Dt=>{console.log("disease-quick-add form model submitted.",Dt),this.submitSourceStub()})}ngOnInit(){void 0!==this.model.citationId&&void 0!==this.model.sourceType?(this.queryRef=this.checkCitation.watch({citationId:this.model.citationId,sourceType:this.model.sourceType}),this.checkResult$=this.queryRef.valueChanges.pipe((0,Zt.U)(y=>({loading:y.loading,citation:y.data?y.data.remoteCitation:null,model:this.model})),(0,Fo.b)(y=>{this.citationString=y.citation?y.citation:void 0})),this.citationId$.pipe((0,ve.t)(this)).subscribe(y=>{this.model.sourceType&&this.queryRef.refetch({citationId:y,sourceType:this.model.sourceType})}),this.formMessageDisplay$=this.checkResult$.pipe((0,Zt.U)(y=>{const c=y.loading,m=y.citation,G=y.model;return c?{message:this.messageOptions.searchCitation(G.citationId,G.sourceType),showSpinner:!0}:c||null===m?c||null!==m?{message:"UNHANDLED MESSAGE STATE",showSpinner:!1}:{message:this.messageOptions.noCitation(G.citationId,G.sourceType),showSpinner:!1}:{message:this.messageOptions.foundCitation(G.citationId,(0,gs.c)(G.sourceType),m),showSpinner:!1}}),(0,sa.O)({message:this.messageOptions.searchCitation(this.model.citationId,this.model.sourceType),showSpinner:!0}))):console.error("source-quick-add provided invalid initial model")}submitSourceStub(){void 0!==this.model.citationId&&void 0!==this.model.sourceType&&(this.mutationState=this.addSourceStubMutator.mutate(this.addRemoteCitation,{input:{citationId:this.model.citationId,sourceType:this.model.sourceType}},{},y=>{if(console.log("source-quick-add submit data callback",y),y.addRemoteCitation){this.successMessage=`New Source "${this.citationString}" added.`;const c=y.addRemoteCitation.newSource,m=(0,gs.c)(this.model.sourceType),G=this.citationString?this.citationString:"NO CITATION",Ae={query:_o.Ps`
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
              `,data:{source:{__typename:"Source",id:c.id,name:`${m}: ${G}`,link:`sources/${c.id}`,citation:G,citationId:this.model.citationId,sourceType:this.model.sourceType}},variables:{id:c.id}};this.apollo.client.cache.writeQuery(Ae)||console.error("source-quick-add.form Source writeQuery failed.",Ae),setTimeout(()=>{const Mn={id:`Source:${c.id}`,fragment:_o.Ps`
                  fragment LinkableSource on Source {
                    id
                    name
                    link
                  }
                `},kn=this.apollo.client.cache.readFragment(Mn);null!==kn&&this.cvcOnCreate.next(kn.id)},1e3)}}))}ngOnChanges(y){if(y.cvcSourceType){const c=y.cvcSourceType.currentValue;this.sourceType$.next(c),this.model={...this.model,sourceType:c}}if(y.cvcCitationId){const c=y.cvcCitationId.currentValue;this.citationId$.next(c),this.model={...this.model,citationId:c}}}}).\u0275fac=function(y){return new(y||aa)(e.Y36(Fn.qgP),e.Y36(Fn.LHC),e.Y36(Vo.Y),e.Y36(_o._M),e.Y36(e.sBO))},aa.\u0275cmp=e.Xpm({type:aa,selectors:[["cvc-source-quick-add"]],inputs:{cvcSourceType:"cvcSourceType",cvcCitationId:"cvcCitationId"},outputs:{cvcOnCreate:"cvcOnCreate"},features:[e.TTD],decls:10,vars:11,consts:[[4,"ngrxLet"],["entityType","Source",3,"mutationState","successMessage"],["success",""],["nz-form","","nzLayout","horizontal",3,"formGroup","ngSubmit"],[3,"nzGutter"],["nzSpan","24"],[3,"form","fields","model","options","modelChange"],["nz-button","","nzType","primary","nzBlock","",3,"disabled",4,"ngrxLet"],["nz-icon","",3,"nzType",4,"ngIf"],["nz-icon","",3,"nzType"],["nz-button","","nzType","primary","nzBlock","",3,"disabled"]],template:function(y,c){if(1&y&&(e.YNc(0,s1,5,2,"ng-container",0),e.TgZ(1,"cvc-form-submission-status-display",1),e.YNc(2,a1,1,1,"ng-template",null,2,e.W1O),e.TgZ(4,"form",3),e.NdJ("ngSubmit",function(){return c.onSubmit$.next(c.model)}),e.TgZ(5,"nz-row",4)(6,"nz-col",5)(7,"formly-form",6),e.NdJ("modelChange",function(G){return c.model=G}),e.qZA()(),e.TgZ(8,"nz-col",5),e.YNc(9,c1,2,1,"button",7),e.qZA()()()()),2&y){const m=e.MAs(3);e.Q6J("ngrxLet",c.formMessageDisplay$),e.xp6(1),e.Q6J("mutationState",c.mutationState)("successMessage",m),e.xp6(3),e.Q6J("formGroup",c.form),e.xp6(1),e.Q6J("nzGutter",e.DdM(10,l1)),e.xp6(2),e.Q6J("form",c.form)("fields",c.fields)("model",c.model)("options",c.options),e.xp6(2),e.Q6J("ngrxLet",c.checkResult$)}},dependencies:[M.O5,t._Y,t.JL,t.sg,R.eJ,v.T7,Vn.ix,Zo.w,Ko.dQ,st.Ls,pe.t3,pe.SK,s.Lr,_i.F],changeDetection:0}),aa);hl=(0,Ce.gn)([(0,ve.c)()],hl);const u1=["optionTemplates"];function ca(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"nz-col",9)(1,"nz-select",10),e.NdJ("ngModelChange",function(G){e.CHM(c);const Ae=e.oxw();return e.KtG(Ae.sourceType$.next(G))}),e.ALo(2,"ngrxPush"),e._UZ(3,"nz-option",11)(4,"nz-option",12)(5,"nz-option",13),e.qZA()()}if(2&u){const c=e.oxw();e.xp6(1),e.Q6J("nzOptionHeightPx",28)("ngModel",e.lcZ(2,2,c.sourceType$))}}function d1(u,y){1&u&&(e.TgZ(0,"div"),e._uU(1,"PMID:"),e.qZA())}function p1(u,y){1&u&&(e.TgZ(0,"div"),e._uU(1,"ID:"),e.qZA())}function Ni(u,y){1&u&&(e.TgZ(0,"div"),e._uU(1,"doi.org/"),e.qZA())}function fl(u,y){if(1&u&&(e.TgZ(0,"nz-col",14),e.ynx(1,15),e.ALo(2,"ngrxPush"),e.YNc(3,d1,2,0,"div",16),e.YNc(4,p1,2,0,"div",16),e.YNc(5,Ni,2,0,"div",16),e.BQk(),e.qZA()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngSwitch",e.lcZ(2,4,c.sourceType$)),e.xp6(2),e.Q6J("ngSwitchCase","PUBMED"),e.xp6(1),e.Q6J("ngSwitchCase","ASCO"),e.xp6(1),e.Q6J("ngSwitchCase","ASH")}}function la(u,y){if(1&u&&(e._UZ(0,"cvc-entity-tag",19),e.TgZ(1,"span",20),e._uU(2," ID: "),e._UZ(3,"span",21),e.ALo(4,"highlightTypeahead"),e.qZA()),2&u){const c=e.oxw().$implicit,m=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",c.__typename+":"+c.id)("cvcEmphasize",m),e.xp6(3),e.Q6J("innerHtml",e.xi3(4,4,c.citationId.toString(),m),e.oJD)}}function iu(u,y){1&u&&(e.ynx(0),e.YNc(1,la,5,7,"ng-template",null,18,e.W1O),e.BQk())}function Mr(u,y){if(1&u&&(e.ynx(0),e.YNc(1,iu,3,0,"ng-container",17),e.ALo(2,"ngrxPush"),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function ua(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",22)(1,"cvc-entity-tag",23),e.NdJ("cvcOnClose",function(){const Ae=e.CHM(c).$implicit,Dt=e.oxw();return e.KtG(Dt.onTagClose$.next(Ae.nzValue))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Source:"+c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}function ml(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"cvc-source-quick-add",24),e.NdJ("cvcOnCreate",function(G){e.CHM(c);const Ae=e.oxw();return e.KtG(Ae.onPopulate$.next(G))}),e.qZA()}if(2&u){const c=y.model;e.Q6J("cvcCitationId",c.citationId)("cvcSourceType",c.sourceType)}}function ka(u,y){1&u&&(e.TgZ(0,"button",25),e._uU(1,"Add a New Source"),e.qZA())}const da=function(){return[6,6]},f1=kt(at(),oi());let mc=(()=>{class u extends f1{constructor(c,m,G){super(),this.taq=c,this.tq=m,this.changeDetectorRef=G,this.onModel$=new jo.y,this.defaultSourceType=Fn.yic.Pubmed,this.defaultOptions={props:{entityName:{singular:"Source",plural:"Sources"},isMultiSelect:!1,minSearchStrLength:2,tooltip:"PubMed, ASCO, or ASH Abstract Source(s) that support items, statements or descriptions.",placeholders:{default:"Search PubMed, ASCO, and ASH Sources",contextualFn:Ae=>`Search ${Ae} Sources`},extraType:"prompt"}},this.sourceType$=new ct.X(this.defaultSourceType),this.sourceTypeName$=new ct.X((0,gs.c)(this.defaultSourceType)),this.placeholder$=new ct.X(this.defaultOptions.props.placeholders.contextualFn((0,gs.c)(this.defaultSourceType))),this.showTypeSelect$=new jo.y}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:this.sourceType$,typeaheadParamName$:this.sourceTypeName$||void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent,minSearchStrLength:this.field.props.minSearchStrLength}),this.showTypeSelect$=this.onValueChange$.pipe((0,Zt.U)(c=>!!(!c||c&&Array.isArray(c)))),this.sourceType$.pipe((0,ve.t)(this)).subscribe(c=>{const m=(0,gs.c)(c);this.sourceTypeName$.next(m),this.placeholder$.next(this.props.placeholders.contextualFn(m))}),this.onModel$=(0,Do.a)([this.sourceType$,this.onSearch$]).pipe((0,Zt.U)(([c,m])=>({citationId:m,sourceType:c})))}getTypeaheadVarsFn(c,m=Fn.yic.Pubmed){return{partialCitationId:c,sourceType:m}}getTypeaheadResultsFn(c){return c.data.sourceTypeahead}getTagQueryVarsFn(c){return{id:c}}getTagQueryResultsFn(c){return c.data.source}getSelectedItemOptionFn(c){return{value:c.id,label:c.name}}getSelectOptionsFn(c,m){return c.map((G,Ae)=>({label:m.get(Ae)||G.name,value:G.id}))}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(Fn.aC3),e.Y36(Fn.BYO),e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-source-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(u1,5,e.Rgc),2&c){let G;e.iGM(G=e.CRH())&&(m.optionTemplates=G)}},features:[e.qOj],decls:21,vars:39,consts:[[3,"nzGutter"],["nzFlex","80px",4,"ngIf"],["nzFlex","60px","class","prefix",4,"ngIf"],["nzFlex","auto"],[3,"cvcMinSearchStrLength","cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcParamName","cvcShowError","cvcDisabled","cvcLoading","cvcAddEntity","cvcAddEntityModel","cvcSelectOpen","cvcOnSearch","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],["addSource",""],["addSourceBtn",""],["nzFlex","80px"],["nzSize","default","nzBlock","",3,"nzOptionHeightPx","ngModel","ngModelChange"],["nzValue","PUBMED","nzLabel","PubMed"],["nzValue","ASCO","nzLabel","ASCO"],["nzValue","ASH","nzLabel","ASH"],["nzFlex","60px",1,"prefix"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"],[3,"cvcCitationId","cvcSourceType","cvcOnCreate"],["type","button"]],template:function(c,m){if(1&c&&(e.TgZ(0,"nz-row",0),e.YNc(1,ca,6,4,"nz-col",1),e.ALo(2,"ngrxPush"),e.YNc(3,fl,6,6,"nz-col",2),e.ALo(4,"ngrxPush"),e.TgZ(5,"nz-col",3)(6,"cvc-entity-select",4),e.NdJ("cvcOnSearch",function(Ae){return m.onSearch$.next(Ae)})("cvcOnModelChange",function(Ae){return m.props.change&&m.props.change(m.field,Ae)}),e.ALo(7,"ngrxPush"),e.ALo(8,"ngrxPush"),e.ALo(9,"ngrxPush"),e.ALo(10,"ngrxPush"),e.ALo(11,"ngrxPush"),e.ALo(12,"ngrxPush"),e.ALo(13,"ngrxPush"),e.qZA()()(),e.YNc(14,Mr,3,3,"ng-container",5),e.YNc(15,ua,2,3,"ng-template",null,6,e.W1O),e.YNc(17,ml,1,2,"ng-template",null,7,e.W1O),e.YNc(19,ka,2,0,"ng-template",null,8,e.W1O)),2&c){const G=e.MAs(16),Ae=e.MAs(18);e.Q6J("nzGutter",e.DdM(38,da)),e.xp6(1),e.Q6J("ngIf",e.lcZ(2,20,m.showTypeSelect$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(4,22,m.showTypeSelect$)),e.xp6(3),e.Q6J("cvcMinSearchStrLength",m.props.minSearchStrLength)("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",G)("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcEntityName",m.props.entityName)("cvcPlaceholder",e.lcZ(7,24,m.placeholder$))("cvcResults",e.lcZ(8,26,m.result$))("cvcOptions",e.lcZ(9,28,m.selectOption$))("cvcParamName",e.lcZ(10,30,m.sourceTypeName$))("cvcShowError",m.showError)("cvcDisabled",m.props.disabled)("cvcLoading",e.lcZ(11,32,m.isLoading$))("cvcAddEntity",Ae)("cvcAddEntityModel",e.lcZ(12,34,m.onModel$))("cvcSelectOpen",e.lcZ(13,36,m.selectOpen$)),e.xp6(8),e.Q6J("ngrxLet",m.onSearch$)}},dependencies:[M.sg,M.O5,M.RF,M.n9,t.JJ,t.On,R.eJ,Ne.Ip,Ne.Vq,pe.t3,pe.SK,me.ZU,Oo,Po.J,hl,R.fM,J.A],styles:[".prefix[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{text-align:right;line-height:28px;color:#999}"],changeDetection:0}),u})();const m1={types:[{name:"source-select",wrappers:["form-field"],component:mc,defaultOptions:{props:{label:"Source"}}},{name:"source-multi-select",wrappers:["form-field"],component:mc,defaultOptions:{props:{label:"Sources",isMultiSelect:!0}}}]};let vr=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.u5,t.UX,v.X0.forChild(m1),Xt.L,Vn.sL,pl.aF,Ne.LV,Xn.$6,vo.Qp,st.PV,je.o7,pe.Jb,Ye.cg,Tt.zf,s.U5,Te.ic,me.ZJ,qt.S,wt.X,zn.g,Bt,Un,Ve.s,$e.x]}),u})();function Ra(u){return(()=>{class c extends u{configureStringTagField(){this.onValueChange$?(this.tagLabel$=new Xe.x,this.onValueChange$.pipe((0,ve.t)(this)).subscribe(G=>{this.tagLabel$.next(G?G.toString():void 0)}),this.onTagClose$=new Xe.x,this.onTagClose$.pipe((0,ve.t)(this)).subscribe(G=>{this.formControl.setValue(void 0),this.tagLabel$.next(void 0)})):console.error(`${this.field.id} cannot find onValueChange$ Subject, ensure configureBaseField() has been called before configureDisplayStringTag in its AfterViewInit hook.`)}}return c.\u0275fac=function(){let m;return function(Ae){return(m||(m=e.n5z(c)))(Ae||c)}}(),c.\u0275prov=e.Yz7({token:c,factory:c.\u0275fac}),c})()}function vs(u,y){}function fd(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"span",4)(1,"nz-tag",5),e.NdJ("nzOnClose",function(G){e.CHM(c);const Ae=e.oxw();return e.KtG(Ae.cvcOnClose.next(G))}),e.YNc(2,vs,0,0,"ng-template",6),e.qZA()()}if(2&u){const c=e.oxw(),m=e.MAs(4);e.xp6(1),e.Q6J("nzMode",c.cvcMode),e.xp6(1),e.Q6J("ngTemplateOutlet",m)}}function gl(u,y){}function ru(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"span",7)(1,"nz-tag",5),e.NdJ("nzOnClose",function(G){e.CHM(c);const Ae=e.oxw();return e.KtG(Ae.cvcOnClose.next(G))}),e.YNc(2,gl,0,0,"ng-template",6),e.qZA()()}if(2&u){e.oxw();const c=e.MAs(4);e.xp6(1),e.Q6J("nzMode","closeable"),e.xp6(1),e.Q6J("ngTemplateOutlet",c)}}function su(u,y){}function au(u,y){if(1&u&&(e.TgZ(0,"span",8),e.YNc(1,su,0,0,"ng-template",6),e.qZA()),2&u){e.oxw();const c=e.MAs(4);e.xp6(1),e.Q6J("ngTemplateOutlet",c)}}function cu(u,y){1&u&&e._UZ(0,"i",11)}function lu(u,y){if(1&u&&(e.YNc(0,cu,1,0,"i",9),e._UZ(1,"span",10),e.ALo(2,"highlightTypeahead")),2&u){const c=e.oxw();e.Q6J("ngIf",!c.cvcLabel),e.xp6(1),e.Q6J("innerHtml",c.cvcLabel?e.xi3(2,2,c.cvcLabel,c.cvcEmphasize):"?STRING?",e.oJD)}}let vl=(()=>{class u{constructor(){this.cvcMode="default",this.cvcContext="default",this.cvcOnClose=new e.vpe}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-string-tag"]],inputs:{cvcLabel:"cvcLabel",cvcEmphasize:"cvcEmphasize",cvcMode:"cvcMode",cvcContext:"cvcContext"},outputs:{cvcOnClose:"cvcOnClose"},decls:5,vars:3,consts:[["class","default",4,"ngIf"],["class","select-item",4,"ngIf"],["class","multi-select-item",4,"ngIf"],["tagContent",""],[1,"default"],[3,"nzMode","nzOnClose"],[3,"ngTemplateOutlet"],[1,"select-item"],[1,"multi-select-item"],["nz-icon","","nzType","question-circle","nzTheme","outline",4,"ngIf"],[3,"innerHtml"],["nz-icon","","nzType","question-circle","nzTheme","outline"]],template:function(c,m){1&c&&(e.YNc(0,fd,3,2,"span",0),e.YNc(1,ru,3,2,"span",1),e.YNc(2,au,2,1,"span",2),e.YNc(3,lu,3,5,"ng-template",null,3,e.W1O)),2&c&&(e.Q6J("ngIf","default"===m.cvcContext),e.xp6(1),e.Q6J("ngIf","select-item"===m.cvcContext),e.xp6(1),e.Q6J("ngIf","multi-select-item"===m.cvcContext))},dependencies:[M.O5,M.tP,st.Ls,wt.j,J.A]}),u})();function gc(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"cvc-string-tag",3),e.NdJ("cvcOnClose",function(){const Ae=e.CHM(c).$implicit,Dt=e.oxw();return e.KtG(Dt.tagClosed(Ae))}),e.qZA()}if(2&u){const c=y.$implicit,m=e.oxw();e.Q6J("cvcMode",m.props.disabled?"default":"closeable")("cvcLabel",c)}}const Va=kt(at(),Ra);let vc=(()=>{class u extends Va{constructor(c){super(),this.cdr=c,this.defaultOptions={modelOptions:{updateOn:"blur"},props:{label:"Enter value",placeholder:"Enter value and hit Return"}},this.tags$=new Xe.x,this.values=new Set}onEnter(c){let m=c.target;m.value&&(this.values.add(m.value),m.value="");let G=Array.from(this.values);this.tags$.next(G),this.formControl.setValue(G)}tagClosed(c){this.values.delete(c);let m=Array.from(this.values);this.tags$.next(m),this.formControl.setValue(m),this.tags$.next(m)}ngAfterViewInit(){this.configureBaseField(),this.configureStringTagField(),this.formControl.value&&Array.isArray(this.formControl.value)&&(this.formControl.value.forEach(c=>this.values.add(c)),this.tags$.next(this.formControl.value),this.cdr.detectChanges())}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-tag-input"]],features:[e.qOj],decls:5,vars:7,consts:[[3,"cvcMode","cvcLabel","cvcOnClose",4,"ngFor","ngForOf"],["nz-input","",3,"disabled","placeholder","keydown.enter"],["hidden","","nz-input","",3,"formControl","formlyAttributes"],[3,"cvcMode","cvcLabel","cvcOnClose"]],template:function(c,m){1&c&&(e.TgZ(0,"div"),e.YNc(1,gc,1,2,"cvc-string-tag",0),e.ALo(2,"ngrxPush"),e.TgZ(3,"input",1),e.NdJ("keydown.enter",function(Ae){return m.onEnter(Ae)}),e.qZA()(),e._UZ(4,"input",2)),2&c&&(e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,5,m.tags$)),e.xp6(2),e.Q6J("disabled",m.props.disabled)("placeholder",m.props.placeholder),e.xp6(1),e.Q6J("formControl",m.formControl)("formlyAttributes",m.field))},dependencies:[M.sg,t.Fj,t.JJ,t.oH,v.JD,je.Zp,vl,R.fM],changeDetection:0}),u})(),os=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,st.PV,wt.X,Ve.s]}),u})();const uu={types:[{name:"tag-input",wrappers:["form-field"],component:vc},{name:"tag-multi-input",wrappers:["form-field"],component:vc,defaultOptions:{props:{isRepeatItem:!0}}}]};let Ba=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(uu),He.F,je.o7,s.U5,os]}),u})();const du=kt(at()),_c={types:[{name:"textarea",component:(()=>{class u extends du{constructor(){super(...arguments),this.defaultOptions={props:{label:"TEXTAREA!"}}}}return u.\u0275fac=function(){let y;return function(m){return(y||(y=e.n5z(u)))(m||u)}}(),u.\u0275cmp=e.Xpm({type:u,selectors:[["formly-field-nz-textarea"]],features:[e.qOj],decls:1,vars:3,consts:[["nz-input","",3,"rows","formControl","formlyAttributes"]],template:function(c,m){1&c&&e._UZ(0,"textarea",0),2&c&&e.Q6J("rows",m.props.rows?m.props.rows:2)("formControl",m.formControl)("formlyAttributes",m.field)},dependencies:[t.Fj,t.JJ,t.oH,v.JD,je.Zp],encapsulation:2,changeDetection:0}),u})(),wrappers:["form-field"]}]};let Ha=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(_c),je.o7,Bt]}),u})();var _s;function _l(u,y){1&u&&e._UZ(0,"span",7)}function hu(u,y){1&u&&e._UZ(0,"span",8)}const Rs=function(){return[0,0]},pa={name:void 0};let yc=((_s=class{set cvcSearchString(y){y&&this.searchString$.next(y)}constructor(y,c){this.query=y,this.errors=c,this.cvcOnCreate=new e.vpe,this.model=pa,this.form=new t.nJ({}),this.options={},this.onSubmit$=new Xe.x,this.searchString$=new ct.X(void 0),this.queryMutator=new qo.U(this.errors),this.isSubmitting$=new ct.X(!1),this.submitSuccess$=new ct.X(!1),this.submitError$=new ct.X([]),this.addTherapyMutator=new qo.U(this.errors),this.fields=[{key:"name",props:{hidden:!0,required:!0}}],this.searchString$.pipe((0,ve.t)(this)).subscribe(m=>{this.model.name=m}),this.onSubmit$.pipe((0,ve.t)(this)).subscribe(m=>{console.log("therapy-quick-add form model submitted.",m),this.submitTherapy(m)})}submitTherapy(y){if(!y.name)return void console.error("therapy-quick-add form submitTherapy requires model with valid name.");let c=this.addTherapyMutator.mutate(this.query,{name:y.name},{},m=>{console.log("therapy-quick-add submit data callback",m),m.addTherapy&&this.cvcOnCreate.next(m.addTherapy.therapy.id)});c.submitSuccess$.pipe((0,ve.t)(this)).subscribe(m=>{console.log("therapy-quick-add submitSuccess$",m),this.submitSuccess$.next(m)}),c.submitError$.pipe((0,ve.t)(this)).subscribe(m=>{console.log("therapy-quick-add submitError$",m),this.submitError$.next(m)}),c.isSubmitting$.pipe((0,ve.t)(this)).subscribe(m=>{this.isSubmitting$.next(m)})}}).\u0275fac=function(y){return new(y||_s)(e.Y36(Fn.Y_K),e.Y36(Vo.Y))},_s.\u0275cmp=e.Xpm({type:_s,selectors:[["cvc-therapy-quick-add-form"]],inputs:{cvcSearchString:"cvcSearchString"},outputs:{cvcOnCreate:"cvcOnCreate"},decls:14,vars:17,consts:[[3,"formGroup","ngSubmit"],[3,"nzGutter"],["nzSpan","24"],[3,"form","fields","model","options","modelChange"],["nz-button","","nzType","primary","nzBlock","",3,"disabled"],["nz-icon","","nzType","plus-circle","nzTheme","outline",4,"ngIf"],["nz-icon","","nzType","loading","nzTheme","outline",4,"ngIf"],["nz-icon","","nzType","plus-circle","nzTheme","outline"],["nz-icon","","nzType","loading","nzTheme","outline"]],template:function(y,c){1&y&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return c.onSubmit$.next(c.model)}),e.TgZ(1,"nz-row",1)(2,"nz-col",2)(3,"formly-form",3),e.NdJ("modelChange",function(G){return c.model=G}),e.qZA()(),e.TgZ(4,"nz-col",2)(5,"button",4),e.YNc(6,_l,1,0,"span",5),e.ALo(7,"ngrxPush"),e.YNc(8,hu,1,0,"span",6),e.ALo(9,"ngrxPush"),e._uU(10," Create Therapy\xa0"),e.TgZ(11,"i"),e._uU(12),e.ALo(13,"ngrxPush"),e.qZA()()()()()),2&y&&(e.Q6J("formGroup",c.form),e.xp6(1),e.Q6J("nzGutter",e.DdM(16,Rs)),e.xp6(2),e.Q6J("form",c.form)("fields",c.fields)("model",c.model)("options",c.options),e.xp6(2),e.Q6J("disabled",!c.form.valid),e.xp6(1),e.Q6J("ngIf",!e.lcZ(7,10,c.isSubmitting$)),e.xp6(2),e.Q6J("ngIf",e.lcZ(9,12,c.isSubmitting$)),e.xp6(4),e.Oqu(e.lcZ(13,14,c.searchString$)))},dependencies:[M.O5,t._Y,t.JL,t.sg,v.T7,Vn.ix,Zo.w,Ko.dQ,st.Ls,pe.t3,pe.SK,R.fM],encapsulation:2,changeDetection:0}),_s);yc=(0,Ce.gn)([(0,ve.c)()],yc);const g1=["optionTemplates"];function yl(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"strong"),e._uU(2,"NCIt ID:"),e.qZA(),e._UZ(3,"span",9),e.ALo(4,"highlightTypeahead"),e.BQk()),2&u){const c=e.oxw(2).$implicit,m=e.oxw().ngrxLet;e.xp6(3),e.Q6J("innerHtml",e.xi3(4,1,c.ncitId,m),e.oJD)}}function fu(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"strong"),e._uU(2,"Aliases: "),e.qZA(),e.TgZ(3,"em"),e._UZ(4,"span",10),e.ALo(5,"highlightTypeahead"),e.qZA(),e.BQk()),2&u){const c=e.oxw(2).$implicit,m=e.oxw().ngrxLet;e.xp6(4),e.Q6J("nzTooltipTitle",c.therapyAliases.join(", "))("innerHtml",e.xi3(5,2,c.therapyAliases.join(", "),m),e.oJD)}}function v1(u,y){if(1&u&&(e._UZ(0,"cvc-entity-tag",6),e.TgZ(1,"span",7),e.YNc(2,yl,5,4,"ng-container",8),e.YNc(3,fu,6,5,"ng-container",8),e.qZA()),2&u){const c=e.oxw().$implicit,m=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",c.__typename+":"+c.id)("cvcEmphasize",m),e.xp6(2),e.Q6J("ngIf",c.ncitId),e.xp6(1),e.Q6J("ngIf",c.therapyAliases.length>0)}}function mu(u,y){1&u&&(e.ynx(0),e.YNc(1,v1,4,5,"ng-template",null,5,e.W1O),e.BQk())}function gu(u,y){if(1&u&&(e.ynx(0),e.YNc(1,mu,3,0,"ng-container",4),e.ALo(2,"ngrxPush"),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function Cl(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",11)(1,"cvc-entity-tag",12),e.NdJ("cvcOnClose",function(){const Ae=e.CHM(c).$implicit,Dt=e.oxw();return e.KtG(Dt.onTagClose$.next(Ae.nzValue))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Therapy:"+c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}function Ya(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"cvc-therapy-quick-add-form",13),e.NdJ("cvcOnCreate",function(G){e.CHM(c);const Ae=e.oxw();return e.KtG(Ae.onPopulate$.next(G))}),e.qZA()}2&u&&e.Q6J("cvcSearchString",y.$implicit)}const zl=kt(at(),oi());let Tl=(()=>{class u extends zl{constructor(c,m,G){super(),this.taq=c,this.tq=m,this.changeDetectorRef=G,this.defaultOptions={props:{entityName:{singular:"Therapy",plural:"Therapies"},isMultiSelect:!1,requireType:!0,tooltip:"Therapy or therapy combination which interacts with the specified variant",placeholder:"Search Therapies",requireTypePromptFn:(Ae,Dt)=>`Select an ${Ae} Type to search associated Therapies`}},this.placeholder$=new ct.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.configurePlaceholders()}configureStateConnections(){if(this.state&&(this.stateEntityName=this.state.entityName,this.state.requires.requiresTherapy$?this.onRequiresTherapy$=this.state.requires.requiresTherapy$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresTherapy$ subject to attach.`),this.props.requireType)){const c=`${this.stateEntityName.toLowerCase()}Type$`;this.state.fields[c]?this.onEntityType$=this.state.fields[c]:console.error(`${this.field.id} requireType is true, however form state does not provide Subject ${c}.`)}}configurePlaceholders(){this.placeholder$.next(this.props.placeholder),this.onRequiresTherapy$&&this.onEntityType$&&(0,Do.a)([this.onRequiresTherapy$,this.onEntityType$]).pipe((0,j.x)(),(0,ve.t)(this)).subscribe(([c,m])=>{!c&&m?(this.props.required=!1,this.props.disabled=!0,this.props.description=`${(0,ie.E)(m)} ${this.state.entityName} does not include associated therapies`,this.props.extraType="prompt",this.resetField(),this.cdr.markForCheck()):this.props.requireType&&!m?(this.props.required=!1,this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName,this.props.isMultiSelect),this.props.extraType="prompt"):c?(this.props.required=!0,this.props.disabled=!1,this.props.description=void 0,this.props.extraType=void 0):(!c&&this.formControl.value||this.props.requireType&&!m&&this.formControl.value)&&(this.resetField(),console.log("HERE2"))})}getTypeaheadVarsFn(c){return{name:c}}getTypeaheadResultsFn(c){return c.data.therapyTypeahead}getTagQueryVarsFn(c){return{id:c}}getTagQueryResultsFn(c){return c.data.therapy}getSelectedItemOptionFn(c){return{value:c.id,label:c.name}}getSelectOptionsFn(c,m){return c.map((G,Ae)=>({label:m.get(Ae)||G.name,value:G.id}))}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(Fn.cIw),e.Y36(Fn.sjj),e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-therapy-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(g1,5,e.Rgc),2&c){let G;e.iGM(G=e.CRH())&&(m.optionTemplates=G)}},features:[e.qOj],decls:12,vars:26,consts:[[3,"cvcAddEntity","cvcCustomTemplate","cvcDisabled","cvcEntityName","cvcFormControl","cvcFormlyAttributes","cvcLoading","cvcOptions","cvcPlaceholder","cvcResults","cvcSelectMode","cvcShowError","cvcSelectOpen","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],["addTherapy",""],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf"],[3,"innerHtml"],["nz-typography","","nzType","secondary","nz-tooltip","",3,"nzTooltipTitle","innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"],[3,"cvcSearchString","cvcOnCreate"]],template:function(c,m){if(1&c&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(Ae){return m.onSearch$.next(Ae)})("cvcOnOpenChange",function(Ae){return m.onOpenChange$.next(Ae)})("cvcOnModelChange",function(Ae){return m.props.change&&m.props.change(m.field,Ae)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.qZA(),e.YNc(7,gu,3,3,"ng-container",1),e.YNc(8,Cl,2,3,"ng-template",null,2,e.W1O),e.YNc(10,Ya,1,1,"ng-template",null,3,e.W1O)),2&c){const G=e.MAs(9),Ae=e.MAs(11);e.Q6J("cvcAddEntity",Ae)("cvcCustomTemplate",G)("cvcDisabled",m.onRequiresTherapy$&&!e.lcZ(1,14,m.onRequiresTherapy$))("cvcEntityName",m.props.entityName)("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcLoading",e.lcZ(2,16,m.isLoading$))("cvcOptions",e.lcZ(3,18,m.selectOption$))("cvcPlaceholder",e.lcZ(4,20,m.placeholder$))("cvcResults",e.lcZ(5,22,m.result$))("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcShowError",m.showError)("cvcSelectOpen",e.lcZ(6,24,m.selectOpen$)),e.xp6(7),e.Q6J("ngrxLet",m.onSearch$)}},dependencies:[M.sg,M.O5,R.eJ,Ye.SY,me.ZU,Oo,Po.J,yc,R.fM,J.A],changeDetection:0}),u})();const Ml={types:[{name:"therapy-select",wrappers:["form-field"],component:Tl,defaultOptions:{props:{label:"Therapy"}}},{name:"therapy-multi-select",wrappers:["form-field"],component:Tl,defaultOptions:{props:{label:"Therapies",isMultiSelect:!0}}}]};let _1=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(Ml),Xt.L,Vn.sL,Ne.LV,Xn.$6,vo.Qp,st.PV,je.o7,pe.Jb,Ye.cg,Tt.zf,s.U5,Te.ic,me.ZJ,wt.X,Bt,Un,Ve.s,$e.x]}),u})();const bl=["optionTemplates"];function y1(u,y){if(1&u&&e._UZ(0,"cvc-attribute-tag",4),2&u){const c=e.oxw().$implicit;e.Q6J("cvcAttrValue",c)}}function vu(u,y){1&u&&(e.ynx(0),e.YNc(1,y1,1,1,"ng-template",null,3,e.W1O),e.BQk())}function _u(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",5)(1,"cvc-attribute-tag",6),e.NdJ("cvcOnClose",function(G){e.CHM(c);const Ae=e.oxw();return e.KtG(Ae.onTagClose$.next(G))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcAttrValue",c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}const Cc={DIAGNOSTIC:"Evidence pertains to a variant's impact on patient diagnosis (cancer subtype).",PREDICTIVE:"Evidence pertains to a variant's effect on therapeutic response.",PROGNOSTIC:"Evidence pertains to a variant's impact on disease progression, severity, or patient survival.",PREDISPOSING:"Evidence pertains to a germline variant's role in conferring susceptibility to disease (including pathogenicity evaluations).",ONCOGENIC:"Evidence pertains to a somatic variant's involvement in tumor pathogenesis as described by the Hallmarks of Cancer.",FUNCTIONAL:"Evidence pertains to a variant that alters biological function from the reference state."},C1=kt(at(),Ot()),zc={types:[{name:"type-select",wrappers:["form-field"],component:(()=>{class u extends C1{constructor(c){super(),this.cdr=c,this.defaultOptions={props:{label:"ENTITY_NAME Type",entityName:{singular:"Entity",plural:"Entities"},placeholder:"Select an ENTITY_NAME Type",isMultiSelect:!1}},this.typeEnums$=new ct.X([])}ngAfterViewInit(){this.configureBaseField(),this.state&&this.state.formReady$?this.state.formReady$.pipe((0,qe.h)(c=>c),(0,Ti.q)(1),(0,ve.t)(this)).subscribe(c=>{this.configureField()}):this.configureField()}configureField(){this.onValueChange$.pipe((0,ve.t)(this)).subscribe(c=>{c?(this.props.description=Cc[c],this.props.extraType="description"):(this.props.description=void 0,this.props.extraType=void 0)}),this.state?(this.props.placeholder=this.props.placeholder.replace("ENTITY_NAME",this.state.entityName),this.props.label=this.props.label.replace("ENTITY_NAME",this.state.entityName),this.props.tooltip=`Type of clinical outcome associated with the ${this.state.entityName} statement.`,this.state.enums.entityType$?(this.state.enums.entityType$.pipe((0,ve.t)(this)).subscribe(c=>{this.typeEnums$.next(c)}),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,Zt.U)(c=>c.map(m=>m))),this.configureEnumSelect()):console.error(`${this.field.id} could not find state's enums.inputEnum$ to populate its select options.`)):console.error(`${this.field.id} requires a form state to configure itself, none was found.`)}configureEnumSelect(){this.configureEnumSelectField({optionEnum$:this.typeEnums$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-type-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(bl,5,e.Rgc),2&c){let G;e.iGM(G=e.CRH())&&(m.optionTemplates=G)}},features:[e.qOj],decls:6,vars:13,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcAttrValue","cvcContext","cvcMode","cvcOnClose"]],template:function(c,m){if(1&c&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.YNc(2,vu,3,0,"ng-container",1),e.ALo(3,"ngrxPush"),e.YNc(4,_u,2,3,"ng-template",null,2,e.W1O)),2&c){const G=e.MAs(5);e.Q6J("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",m.props.placeholder)("cvcCustomTemplate",G)("cvcOptions",e.lcZ(1,9,m.selectOption$))("cvcShowError",m.showError)("cvcDisabled",m.props.disabled),e.xp6(2),e.Q6J("ngForOf",e.lcZ(3,11,m.typeEnums$))}},dependencies:[M.sg,mt,K,R.fM],changeDetection:0}),u})()}]};let z1=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(zc),Bt,Be,De]}),u})();var T1=a(6973);function yu(u,y){const c="object"==typeof y;return new Promise((m,G)=>{let Dt,Ae=!1;u.subscribe({next:Mn=>{Dt=Mn,Ae=!0},error:G,complete:()=>{Ae?m(Dt):c?m(y.defaultValue):G(new T1.K)}})})}const Sl={isDefaultCol:u=>"default"===u.type,isSelectCol:u=>"select"===u.type,isEntityTagCol:u=>"entity-tag"===u.type,isEnumTagCol:u=>"enum-tag"===u.type,isTextTagCol:u=>"text-tag"===u.type},bc=u=>void 0!==u.sort,is=u=>void 0!==u.filter,ha={diseases:Fn.pP7.DiseaseName,gene:Fn.pP7.EntrezSymbol,therapies:Fn.pP7.TherapyName,variant:Fn.pP7.VariantName},$a={diseases:"diseaseName",therapies:"therapyName",variant:"variantName",gene:"entrezSymbol",aliases:"variantAlias"},Or=["selected","id"];class Tu{constructor(){this.sortStreams=[],this.filterStreams=[],this.config=this.configureColumnStreams([{key:"selected",label:"Select",type:"select",width:"25px",align:"center",fixedLeft:!0,checkbox:{th:{showCheckbox:!1},td:{showCheckbox:!0}}},{key:"id",label:"ID",hidden:!0,type:"hidden",width:"0px"},{key:"variant",label:"Variant",type:"entity-tag",width:"215px",context:"variant",fixedLeft:!0,showStatus:!0,tag:{fullWidth:!0,truncateLabel:"200px"},sort:{default:"ascend"},filter:{inputType:"default",options:[{key:"Filter Variant Name",value:null}]}},{key:"aliases",label:"Aliases",type:"default",width:"150px",objectKey:"name",sort:{},filter:{inputType:"default",options:[{key:"Filter Aliases",value:null}]}},{key:"gene",label:"Gene",type:"entity-tag",width:"135px",tag:{truncateLabel:"125px"},sort:{},filter:{inputType:"default",options:[{key:"Filter Gene Name",value:null}]}},{key:"diseases",label:"Diseases",type:"entity-tag",width:"250px",sort:{},tag:{maxTags:1,truncateLabel:"175px"},filter:{inputType:"default",typename:"Therapy",options:[{key:"Filter Therapy Names",value:null}]}},{key:"therapies",label:"Therapies",type:"entity-tag",width:"275px",sort:{},tag:{maxTags:2,truncateLabel:"150px"},filter:{inputType:"default",typename:"Therapy",options:[{key:"Filter Therapy Names",value:null}]}}])}get(){return this.config}getSortStreams(){return this.sortStreams}getFilterStreams(){return this.filterStreams}getAttributeFilters(y,c){return y.getValues().map(G=>({text:(0,ie.E)(G),value:G,byDefault:c===G}))}configureColumnStreams(y){return y.forEach(c=>{const m=c;if(bc(m)&&(m.sort.changes=new ct.X({key:m.key,value:m.sort.default??null}),this.sortStreams.push(m.sort.changes)),is(m)){const G=m.filter.options.find(Ae=>Ae.byDefault)?.value;m.filter.changes=new ct.X({key:m.key,value:G??null}),this.filterStreams.push(m.filter.changes)}}),y}}var Vs;let Ec=((Vs=class{set cvcTableScrollerToIndex(y){void 0!==y&&this.scrollToIndex(y)}set cvcTableScrollerToOffset(y){void 0!==y&&this.scrollToIndex(y)}constructor(y){this.host=y,this.cvcTableScrollerOnScroll=new e.vpe,this.cvcTableScrollerOnFetch=new e.vpe,this.cvcTableScrollerTargetHeight=140,this.cvcTableScrollerFetchCount=50,this.onLoadThrottleTime=500,this.onScrollThrottleTime=250,this.onScrollDebounceTime=300}ngAfterViewInit(){if(!this.host||!this.host.cdkVirtualScrollViewport)throw new Error("cvcTableScroller directive could not obtain reference to host cdkVirtualScrollViewport.");this.viewport=this.host.cdkVirtualScrollViewport,this.scrolled$=this.viewport.elementScrolled(),this.rendered$=this.viewport.renderedRangeStream,this.rendered$.pipe((0,yn.P)()).subscribe(()=>this.viewport.checkViewportSize()),this.scrolled$.pipe((0,Mi.p)(this.onScrollThrottleTime,bi.z,{leading:!0,trailing:!0}),(0,Fo.b)(y=>this.cvcTableScrollerOnScroll.next("scroll")),(0,yo.b)(this.onScrollDebounceTime),(0,ve.t)(this)).subscribe(y=>{this.cvcTableScrollerOnScroll.next("stop")}),this.scrolled$.pipe((0,Zt.U)(y=>this.viewport.measureScrollOffset("bottom")),(0,Qn.G)(),(0,qe.h)(([y,c])=>c<y&&c<this.cvcTableScrollerTargetHeight),(0,Mi.p)(this.onLoadThrottleTime),(0,ve.t)(this)).subscribe(y=>{this.cvcTableScrollerOnScroll.next("bottom");try{this.loadMore(this.cvcTableScrollerPageInfo)}catch(c){console.error(c)}})}loadMore(y){const c=this.cvcTableScrollerQueryRef;if(!y&&c)throw new Error("table-scroll directive requires PageInfo to use provided QueryRef.");if(y&&!c)throw new Error("table-scroll directive requires valid QueryRef when PageInfo provided.");if(y&&c){const[m,G,Ae]=[this.cvcTableScrollerFetchCount,y.hasNextPage,y.endCursor];if(!m||!Ae)throw new Error("table-scroll PageInfo invalid.");if(!G)return;this.cvcTableScrollerOnFetch.next({first:m,after:Ae})}}scrollToIndex(y){const[c,m]=[this.host,this.host.cdkVirtualScrollViewport];if(!c||!m)throw new Error("table-scroll scrollToIndex() cannot find host viewport.");m.scrollToIndex(y)}scrollToOffset(y){const[c,m]=[this.host,this.host.cdkVirtualScrollViewport];if(!c||!m)throw new Error("table-scroll scrollToOffset() cannot find host viewport.");m.scrollToOffset(y)}}).\u0275fac=function(y){return new(y||Vs)(e.Y36(Zn.N8))},Vs.\u0275dir=e.lG2({type:Vs,selectors:[["","cvcTableScroller",""]],inputs:{cvcTableScrollerTargetHeight:"cvcTableScrollerTargetHeight",cvcTableScrollerQueryRef:"cvcTableScrollerQueryRef",cvcTableScrollerPageInfo:"cvcTableScrollerPageInfo",cvcTableScrollerFetchCount:"cvcTableScrollerFetchCount",cvcTableScrollerToIndex:"cvcTableScrollerToIndex",cvcTableScrollerToOffset:"cvcTableScrollerToOffset"},outputs:{cvcTableScrollerOnScroll:"cvcTableScrollerOnScroll",cvcTableScrollerOnFetch:"cvcTableScrollerOnFetch"}}),Vs);function El(u,y){1&u&&e._UZ(0,"span",8)}function xc(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"span",9),e.NdJ("click",function(){e.CHM(c),e.oxw(2);const G=e.MAs(3),Ae=e.oxw();return G.value="",e.KtG(Ae.cvcModelChange.next(null))}),e.qZA()}}function Mu(u,y){if(1&u&&(e.YNc(0,El,1,0,"span",6),e.YNc(1,xc,1,0,"span",7)),2&u){e.oxw();const c=e.MAs(3);e.Q6J("ngIf",!c.value),e.xp6(1),e.Q6J("ngIf",c.value)}}function bu(u,y){if(1&u){const c=e.EpF();e.ynx(0),e.TgZ(1,"nz-input-group",2)(2,"input",3,4),e.NdJ("ngModelChange",function(G){e.CHM(c);const Ae=e.oxw();return e.KtG(Ae.cvcModelChange.next(G))}),e.qZA()(),e.YNc(4,Mu,2,2,"ng-template",null,5,e.W1O),e.BQk()}if(2&u){const c=e.MAs(5),m=e.oxw();e.xp6(1),e.Q6J("nzSuffix",c),e.xp6(1),e.Q6J("placeholder",m.cvcPlaceholder)("ngModel",m.cvcModel)}}function Su(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"nz-input-number-group",10)(1,"nz-input-number",11,4),e.NdJ("ngModelChange",function(G){e.CHM(c);const Ae=e.oxw();return e.KtG(Ae.cvcModelChange.next(""===G?null:G))}),e.qZA()()}if(2&u){const c=e.oxw();let m;e.xp6(1),e.Q6J("nzPlaceHolder",null!==(m=c.cvcPlaceholder)&&void 0!==m?m:"")("ngModel",c.cvcModel)("nzMin",1)("nzStep",1)}}Ec=(0,Ce.gn)([(0,ve.c)()],Ec);let Eu=(()=>{class u{constructor(){this.cvcModel=null,this.cvcModelChange=new e.vpe,this.cvcInputType="default"}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-variant-table-filter-input"]],inputs:{cvcModel:"cvcModel",cvcInputType:"cvcInputType",cvcPlaceholder:"cvcPlaceholder"},outputs:{cvcModelChange:"cvcModelChange"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["numericInput",""],["nzSize","small",3,"nzSuffix"],["nz-input","",3,"placeholder","ngModel","ngModelChange"],["filterInput",""],["suffixIcon",""],["nz-icon","","nzType","search","style","color: #ddd",4,"ngIf"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzType","search",2,"color","#ddd"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],["nzSize","small"],[2,"width","100%",3,"nzPlaceHolder","ngModel","nzMin","nzStep","ngModelChange"]],template:function(c,m){if(1&c&&(e.YNc(0,bu,6,3,"ng-container",0),e.YNc(1,Su,3,4,"ng-template",null,1,e.W1O)),2&c){const G=e.MAs(2);e.Q6J("ngIf","default"===m.cvcInputType)("ngIfElse",G)}},dependencies:[M.O5,t.Fj,t.JJ,t.On,Zo.w,st.Ls,je.Zp,je.gB,je.ke,Gn._V,Gn.Rb]}),u})();function S1(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"li",5),e.NdJ("click",function(){const Ae=e.CHM(c).$implicit,Dt=e.oxw();return e.KtG(Dt.cvcOptionChange.next({key:Dt.cvcColumnKey,value:Ae.value}))}),e._UZ(1,"cvc-attribute-tag",6),e.qZA()}if(2&u){const c=y.$implicit,m=e.oxw();e.Q6J("nzSelected",(null==m.cvcOption?null:m.cvcOption.value)===c.value),e.xp6(1),e.Q6J("cvcFullWidth",!0)("cvcChecked",(null==m.cvcOption?null:m.cvcOption.value)===c.value)("cvcAttrValue",c.value)}}let xu=(()=>{class u{constructor(){this.cvcOptionChange=new e.vpe}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-variant-enum-filter-menu"]],inputs:{cvcColumnKey:"cvcColumnKey",cvcFilterOptions:"cvcFilterOptions",cvcOption:"cvcOption"},outputs:{cvcOptionChange:"cvcOptionChange"},decls:6,vars:2,consts:[["nz-menu",""],["nz-menu-item","",3,"nzSelected","click",4,"ngFor","ngForOf"],[2,"padding","3px"],["nz-button","","nzType","default","nzBlock","","nzSize","small",3,"disabled","click"],["nz-icon","","nzType","retweet","nzTheme","outline"],["nz-menu-item","",3,"nzSelected","click"],["cvcContext","menu-item",3,"cvcFullWidth","cvcChecked","cvcAttrValue"]],template:function(c,m){1&c&&(e.TgZ(0,"ul",0),e.YNc(1,S1,2,4,"li",1),e.TgZ(2,"li",2)(3,"button",3),e.NdJ("click",function(){return m.cvcOptionChange.next({key:m.cvcColumnKey,value:null})}),e._UZ(4,"span",4),e._uU(5," Reset "),e.qZA()()()),2&c&&(e.xp6(1),e.Q6J("ngForOf",m.cvcFilterOptions),e.xp6(2),e.Q6J("disabled",null===(null==m.cvcOption?null:m.cvcOption.value)))},dependencies:[M.sg,mt,Vn.ix,Zo.w,Ko.dQ,st.Ls,Ds.wO,Ds.r9],styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}[_nghost-%COMP%]     ul li:hover{background-color:#e6f7ff}[_nghost-%COMP%]     ul li.ant-dropdown-menu-item-selected{background-color:#1890ff}[_nghost-%COMP%]     ul li.ant-dropdown-menu-item-selected:active{background-color:#096dd9}"],changeDetection:0}),u})();var Pi;function Dc(u,y){if(1&u&&e._UZ(0,"th",14),2&u){const c=y.ngIf;let m;e.Q6J("nzShowCheckbox",c.checkbox.th.showCheckbox||!1)("nzWidth",c.width)("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)}}function xl(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"th",15),e.NdJ("nzSortOrderChange",function(G){const Dt=e.CHM(c).ngIf;return e.KtG(Dt.sort.changes.next({key:Dt.key,value:G}))}),e.ALo(1,"ngrxPush"),e.TgZ(2,"span",16),e._uU(3),e.qZA()()}if(2&u){const c=y.ngIf;let m,G;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzShowSort",void 0!==c.sort)("nzSortFn",!0)("nzSortOrder",(null==(G=e.lcZ(1,10,c.sort.changes))?null:G.value)||null),e.xp6(2),e.Q6J("nzTooltipTitle",c.tooltip),e.xp6(1),e.hij(" ",c.label," ")}}function Oc(u,y){if(1&u&&(e.TgZ(0,"th",17),e._uU(1),e.qZA()),2&u){const c=y.ngIf;let m;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzTooltipTitle",c.tooltip),e.xp6(1),e.hij(" ",c.label," ")}}function qi(u,y){if(1&u&&(e.TgZ(0,"th",17),e._uU(1),e.qZA()),2&u){const c=y.ngIf;let m;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzTooltipTitle",c.tooltip),e.xp6(1),e.hij(" ",c.label," ")}}function fa(u,y){if(1&u&&(e.TgZ(0,"th",17),e._uU(1),e.qZA()),2&u){const c=y.ngIf;let m;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzTooltipTitle",c.tooltip),e.xp6(1),e.hij(" ",c.label," ")}}function Dl(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Dc,1,5,"th",11),e.ALo(2,"guardType"),e.YNc(3,xl,4,12,"th",12),e.ALo(4,"guardType"),e.YNc(5,Oc,2,7,"th",13),e.ALo(6,"guardType"),e.YNc(7,qi,2,7,"th",13),e.ALo(8,"guardType"),e.YNc(9,fa,2,7,"th",13),e.ALo(10,"guardType"),e.BQk()),2&u){const c=e.oxw().$implicit,m=e.oxw(2);e.xp6(1),e.Q6J("ngIf",e.xi3(2,5,c,m.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,8,c,m.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,11,c,m.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,14,c,m.colGuards.isTextTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(10,17,c,m.colGuards.isDefaultCol))}}function C(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Dl,11,20,"ng-container",10),e.BQk()),2&u){const c=y.$implicit;e.xp6(1),e.Q6J("ngIf",!c.hidden)}}function vt(u,y){if(1&u&&(e.TgZ(0,"th",22),e._uU(1," \xa0 "),e.qZA()),2&u){const c=y.ngIf;let m;e.Q6J("nzColumnKey",c.key)("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzWidth",c.width)("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)}}function le(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"cvc-variant-table-filter-input",25),e.NdJ("cvcModelChange",function(G){const Dt=e.CHM(c).ngIf,Mn=e.oxw().ngIf;return e.KtG(Dt.changes.next({key:Mn.key,value:G}))}),e.qZA()}if(2&u){const c=e.oxw().ngIf;e.Q6J("cvcInputType",c.filter.inputType)("cvcPlaceholder",c.filter.options[0].key)("cvcModel",c.filter.options[0].value)}}function qp(u,y){if(1&u&&(e.TgZ(0,"th",23),e.YNc(1,le,1,3,"cvc-variant-table-filter-input",24),e.qZA()),2&u){const c=y.ngIf;let m;e.Q6J("nzColumnKey",c.key)("nzWidth",c.width)("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",c.filter)}}function vd(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"th",26,27),e.NdJ("nzSortOrderChange",function(G){const Dt=e.CHM(c).ngIf;return e.KtG(Dt.sort.changes.next({key:Dt.key,value:G}))}),e.ALo(2,"ngrxPush"),e.TgZ(3,"nz-filter-trigger",28,29),e.ALo(5,"ngrxPush"),e._UZ(6,"span",30),e.qZA(),e.TgZ(7,"nz-dropdown-menu",null,31)(9,"cvc-variant-enum-filter-menu",32),e.NdJ("cvcOptionChange",function(G){const Dt=e.CHM(c).ngIf,Mn=e.MAs(4);return Dt.filter.changes.next(G),e.KtG(Mn.nzVisible=!1)}),e.ALo(10,"ngrxPush"),e.qZA()()()}if(2&u){const c=y.ngIf,m=e.MAs(8);let G,Ae,Dt;e.Q6J("nzColumnKey",c.key)("nzWidth",c.width)("nzAlign",null!==(G=c.align)&&void 0!==G?G:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzShowSort",!0)("nzSortFn",!0)("nzSortOrder",(null==(Ae=e.lcZ(2,15,c.sort.changes))?null:Ae.value)||null)("nzShowFilter",void 0!==c.filter)("nzFilterFn",!0),e.xp6(3),e.Q6J("nzDropdownMenu",m)("nzActive",null!==(null==(Dt=e.lcZ(5,17,c.filter.changes))?null:Dt.value)),e.xp6(6),e.Q6J("cvcColumnKey",c.key)("cvcFilterOptions",c.filter.options)("cvcOption",e.lcZ(10,19,c.filter.changes))}}function qd(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"th",33,27)(2,"nz-filter-trigger",28),e.ALo(3,"ngrxPush"),e._UZ(4,"span",34),e.qZA(),e.TgZ(5,"nz-dropdown-menu",null,35)(7,"div",36)(8,"div",37)(9,"cvc-variant-table-filter-input",38),e.NdJ("cvcModelChange",function(G){const Dt=e.CHM(c).ngIf;return e.KtG(Dt.filter.changes.next({key:Dt.key,value:G}))}),e.qZA()()()()()}if(2&u){const c=y.ngIf,m=e.MAs(6);let G,Ae;e.Q6J("nzColumnKey",c.key)("nzWidth",c.width)("nzAlign",null!==(G=c.align)&&void 0!==G?G:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)("nzFilterFn",!0),e.xp6(2),e.Q6J("nzDropdownMenu",m)("nzActive",null!==(null==(Ae=e.lcZ(3,10,c.filter.changes))?null:Ae.value)),e.xp6(7),e.Q6J("cvcPlaceholder",c.filter.options[0].key)("cvcModel",c.filter.options[0].value)}}function _d(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"cvc-variant-table-filter-input",38),e.NdJ("cvcModelChange",function(G){const Dt=e.CHM(c).ngIf,Mn=e.oxw().ngIf;return e.KtG(Dt.changes.next({key:Mn.key,value:G}))}),e.qZA()}if(2&u){const c=e.oxw().ngIf;e.Q6J("cvcPlaceholder",c.filter.options[0].key)("cvcModel",c.filter.options[0].value)}}function Xp(u,y){if(1&u&&(e.TgZ(0,"th",23),e.YNc(1,_d,1,2,"cvc-variant-table-filter-input",39),e.qZA()),2&u){const c=y.ngIf;let m;e.Q6J("nzColumnKey",c.key)("nzWidth",c.width)("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",c.filter)}}function Xd(u,y){if(1&u&&(e.ynx(0),e.YNc(1,vt,2,5,"th",18),e.ALo(2,"guardType"),e.YNc(3,qp,2,6,"th",19),e.ALo(4,"guardType"),e.YNc(5,vd,11,21,"th",20),e.ALo(6,"guardType"),e.YNc(7,qd,10,12,"th",21),e.ALo(8,"guardType"),e.YNc(9,Xp,2,6,"th",19),e.ALo(10,"guardType"),e.BQk()),2&u){const c=e.oxw().$implicit,m=e.oxw(2);e.xp6(1),e.Q6J("ngIf",e.xi3(2,5,c,m.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,8,c,m.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,11,c,m.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,14,c,m.colGuards.isTextTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(10,17,c,m.colGuards.isDefaultCol))}}function E1(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Xd,11,20,"ng-container",10),e.BQk()),2&u){const c=y.$implicit;e.xp6(1),e.Q6J("ngIf",!c.hidden)}}function Du(u,y){if(1&u&&(e.TgZ(0,"thead")(1,"tr",7),e.YNc(2,C,2,1,"ng-container",8),e.qZA(),e.TgZ(3,"tr",9),e.YNc(4,E1,2,1,"ng-container",8),e.qZA()()),2&u){const c=y.ngrxLet;e.xp6(2),e.Q6J("ngForOf",c),e.xp6(2),e.Q6J("ngForOf",c)}}function ep(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"td",45),e.NdJ("nzCheckedChange",function(G){e.CHM(c);const Ae=e.oxw(3).$implicit,Dt=e.oxw(2);return e.KtG(Dt.onRowSelected$.next({id:Ae.id,selected:G}))}),e.qZA()}if(2&u){const c=y.ngIf,m=e.oxw(3).$implicit;let G;e.Q6J("nzChecked",m.selected)("nzAlign",null!==(G=c.align)&&void 0!==G?G:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1)}}function wc(u,y){1&u&&e.GkF(0)}const Ol=function(u,y,c){return{$implicit:u,config:y,emphasize:c}};function tp(u,y){if(1&u&&(e.ynx(0),e.YNc(1,wc,1,0,"ng-container",51),e.ALo(2,"isArray"),e.ALo(3,"ngrxPush"),e.BQk()),2&u){const c=e.oxw().ngIf,m=e.oxw().ngIf,G=e.MAs(3),Ae=e.MAs(5),Dt=e.oxw(3).$implicit;let Mn;e.xp6(1),e.Q6J("ngTemplateOutlet",e.lcZ(2,2,Dt[c])?G:Ae)("ngTemplateOutletContext",e.kEZ(6,Ol,Dt[c],m,null==(Mn=e.lcZ(3,4,m.filter.changes))?null:Mn.value))}}function yd(u,y){if(1&u&&(e.ynx(0),e.YNc(1,tp,4,10,"ng-container",50),e.BQk()),2&u){const c=y.ngIf;e.oxw();const m=e.MAs(7),G=e.oxw(3).$implicit;e.xp6(1),e.Q6J("ngIf",G[c])("ngIfElse",m)}}const x1=function(u,y,c,m,G){return{tagList:u,tag:y,showPopover:c,status:m,emphasize:G}};function D1(u,y){if(1&u&&(e.ynx(0),e._UZ(1,"cvc-entity-collection-tag",53),e.BQk()),2&u){const c=e.oxw(2),m=c.config,G=c.$implicit,Ae=c.emphasize;e.oxw();const Dt=e.MAs(5),Mn=e.oxw(5);e.xp6(1),e.Q6J("cvcCollectionTagConfig",e.qbA(3,x1,G.slice(m.tag.maxTags,G.length),m.tag,!Mn.isScrolling,!0===m.showStatus?G.status:void 0,Ae))("cvcTagTemplate",Dt)("cvcShowFullLabels",!0)}}function Ua(u,y){if(1&u&&(e.ynx(0),e._UZ(1,"cvc-entity-tag-list",52),e.YNc(2,D1,2,9,"ng-container",10),e.BQk()),2&u){const c=e.oxw(),m=c.config,G=c.$implicit,Ae=c.emphasize;e.oxw();const Dt=e.MAs(5),Mn=e.oxw(5);e.xp6(1),e.Q6J("cvcTagTemplate",Dt)("cvcTagListConfig",e.qbA(3,x1,G.slice(0,m.tag.maxTags),m.tag,!Mn.isScrolling,!0===m.showStatus?G.status:void 0,Ae)),e.xp6(1),e.Q6J("ngIf",G.slice(m.tag.maxTags,G.length).length>0)}}function Ou(u,y){if(1&u&&e.YNc(0,Ua,3,9,"ng-container",50),2&u){const c=y.$implicit;e.oxw();const m=e.MAs(7);e.Q6J("ngIf",c.length>0)("ngIfElse",m)}}function O1(u,y){if(1&u&&e._UZ(0,"cvc-entity-tag",54),2&u){const c=y.$implicit,m=y.config,G=y.emphasize,Ae=e.oxw(6);let Dt;e.Q6J("cvcTruncateLabel",null==m.tag?null:m.tag.truncateLabel)("cvcLinkableEntity",c)("cvcEmphasize",G)("cvcShowPopover",!Ae.isScrolling)("cvcStatus",!0===m.showStatus?c.status:void 0)("cvcFullWidth",null!==(Dt=null==m.tag?null:m.tag.fullWidth)&&void 0!==Dt&&Dt)}}function w1(u,y){if(1&u&&e._UZ(0,"cvc-empty-value",55),2&u){const c=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",c.emptyValueCategory||"unspecified")}}function wl(u,y){if(1&u&&(e.TgZ(0,"td",46),e.YNc(1,yd,2,2,"ng-container",10),e.YNc(2,Ou,1,2,"ng-template",null,47,e.W1O),e.YNc(4,O1,1,6,"ng-template",null,48,e.W1O),e.YNc(6,w1,1,1,"ng-template",null,49,e.W1O),e.qZA()),2&u){const c=y.ngIf;let m;e.Q6J("nzAlign",null!==(m=c.align)&&void 0!==m?m:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",c.context||c.key)}}function Cd(u,y){if(1&u&&(e._UZ(0,"cvc-attribute-tag",58),e.ALo(1,"evidenceEnumDisplay")),2&u){const c=e.oxw().ngIf,m=e.oxw(3).$implicit,G=e.oxw(2);e.Q6J("cvcFullWidth",!0)("cvcAttrValue",m[c.key])("cvcTooltip",e.lcZ(1,3,!G.isScrolling&&m[c.key]))}}function np(u,y){if(1&u&&e._UZ(0,"cvc-empty-value",55),2&u){const c=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",c.emptyValueCategory||"unspecified")}}function op(u,y){if(1&u&&(e.TgZ(0,"td",46),e.YNc(1,Cd,2,5,"cvc-attribute-tag",56),e.YNc(2,np,1,1,"ng-template",null,57,e.W1O),e.qZA()),2&u){const c=y.ngIf,m=e.MAs(3),G=e.oxw(3).$implicit;let Ae;e.Q6J("nzAlign",null!==(Ae=c.align)&&void 0!==Ae?Ae:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",G[c.key])("ngIfElse",m)}}function ip(u,y){if(1&u&&(e.TgZ(0,"nz-tag",61),e._UZ(1,"span",62),e.qZA()),2&u){const c=e.oxw().ngIf,m=e.oxw(3).$implicit;e.Q6J("nzTooltipTitle",m[c.key])}}function rp(u,y){if(1&u&&e._UZ(0,"cvc-empty-value",55),2&u){const c=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",c.emptyValueCategory||"unspecified")}}function sp(u,y){if(1&u&&(e.TgZ(0,"td",46),e.YNc(1,ip,2,1,"nz-tag",59),e.YNc(2,rp,1,1,"ng-template",null,60,e.W1O),e.qZA()),2&u){const c=y.ngIf,m=e.MAs(3),G=e.oxw(3).$implicit;let Ae;e.Q6J("nzAlign",null!==(Ae=c.align)&&void 0!==Ae?Ae:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",G[c.key])("ngIfElse",m)}}function zd(u,y){1&u&&e.GkF(0)}const wu=function(u,y){return{$implicit:u,emphasize:y}};function Td(u,y){if(1&u&&(e.ynx(0),e.YNc(1,zd,1,0,"ng-container",51),e.ALo(2,"isArray"),e.ALo(3,"ngrxPush"),e.BQk()),2&u){const c=y.ngIf,m=e.oxw().ngIf,G=e.MAs(3),Ae=e.MAs(5);let Dt;e.xp6(1),e.Q6J("ngTemplateOutlet",e.lcZ(2,2,c)?G:Ae)("ngTemplateOutletContext",e.WLB(6,wu,c,null==(Dt=e.lcZ(3,4,m.filter.changes))?null:Dt.value))}}function P1(u,y){1&u&&e.GkF(0)}function ap(u,y){1&u&&(e.ynx(0),e._uU(1,", "),e.BQk())}function cp(u,y){if(1&u&&(e.ynx(0),e.YNc(1,P1,1,0,"ng-container",51),e.YNc(2,ap,2,0,"ng-container",10),e.BQk()),2&u){const c=y.$implicit,m=y.last,G=e.oxw(2).emphasize;e.oxw();const Ae=e.MAs(5);e.xp6(1),e.Q6J("ngTemplateOutlet",Ae)("ngTemplateOutletContext",e.WLB(3,wu,c,G)),e.xp6(1),e.Q6J("ngIf",!m)}}function I1(u,y){if(1&u&&(e.ynx(0),e.YNc(1,cp,3,6,"ng-container",8),e.BQk()),2&u){const c=e.oxw().$implicit;e.xp6(1),e.Q6J("ngForOf",c)}}function Md(u,y){if(1&u&&e.YNc(0,I1,2,1,"ng-container",50),2&u){const c=y.$implicit;e.oxw();const m=e.MAs(7);e.Q6J("ngIf",c.length>0)("ngIfElse",m)}}function ja(u,y){if(1&u&&(e._UZ(0,"span",67),e.ALo(1,"highlightTypeahead")),2&u){const c=y.$implicit,m=y.emphasize,G=e.oxw().ngIf;e.Q6J("innerHtml",e.xi3(1,1,G.objectKey?c[G.objectKey]:c,m),e.oJD)}}function A1(u,y){if(1&u&&e._UZ(0,"cvc-empty-value",55),2&u){const c=e.oxw().ngIf;e.Q6J("cvcEmptyCategory",c.emptyValueCategory||"unspecified")}}function Kn(u,y){if(1&u&&(e.TgZ(0,"td",63),e.YNc(1,Td,4,9,"ng-container",50),e.YNc(2,Md,1,2,"ng-template",null,64,e.W1O),e.YNc(4,ja,2,4,"ng-template",null,65,e.W1O),e.YNc(6,A1,1,1,"ng-template",null,66,e.W1O),e.qZA()),2&u){const c=y.ngIf,m=e.MAs(7),G=e.oxw(3).$implicit;let Ae;e.Q6J("nzAlign",null!==(Ae=c.align)&&void 0!==Ae?Ae:"left")("nzLeft",c.fixedLeft||!1)("nzRight",c.fixedRight||!1),e.xp6(1),e.Q6J("ngIf",G[c.key])("ngIfElse",m)}}function Li(u,y){if(1&u&&(e.ynx(0),e.YNc(1,ep,1,4,"td",42),e.ALo(2,"guardType"),e.YNc(3,wl,8,4,"td",43),e.ALo(4,"guardType"),e.YNc(5,op,4,5,"td",43),e.ALo(6,"guardType"),e.YNc(7,sp,4,5,"td",43),e.ALo(8,"guardType"),e.YNc(9,Kn,8,5,"td",44),e.ALo(10,"guardType"),e.BQk()),2&u){const c=e.oxw().$implicit,m=e.oxw(3);e.xp6(1),e.Q6J("ngIf",e.xi3(2,5,c,m.colGuards.isSelectCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(4,8,c,m.colGuards.isEntityTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(6,11,c,m.colGuards.isEnumTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(8,14,c,m.colGuards.isTextTagCol)),e.xp6(2),e.Q6J("ngIf",e.xi3(10,17,c,m.colGuards.isDefaultCol))}}function Pu(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Li,11,20,"ng-container",10),e.BQk()),2&u){const c=y.$implicit;e.xp6(1),e.Q6J("ngIf",!c.hidden)}}function Ga(u,y){if(1&u&&(e.TgZ(0,"tr",41),e.YNc(1,Pu,2,1,"ng-container",8),e.qZA()),2&u){const c=e.oxw().ngrxLet;e.xp6(1),e.Q6J("ngForOf",c)}}function Iu(u,y){1&u&&(e.TgZ(0,"tbody"),e.YNc(1,Ga,2,1,"ng-template",40),e.qZA())}function bd(u,y){1&u&&e._UZ(0,"span",75)}function F1(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"span",76),e.NdJ("click",function(){e.CHM(c),e.oxw(2);const G=e.MAs(3),Ae=e.oxw().filter;return G.value="",e.KtG(Ae.changes.next({key:Ae.key,value:null}))}),e.qZA()}}function zo(u,y){if(1&u&&(e.YNc(0,bd,1,0,"span",73),e.YNc(1,F1,1,0,"span",74)),2&u){e.oxw();const c=e.MAs(3);e.Q6J("ngIf",!c.value),e.xp6(1),e.Q6J("ngIf",c.value)}}function Pl(u,y){if(1&u){const c=e.EpF();e.ynx(0),e.TgZ(1,"nz-input-group",69)(2,"input",70,71),e.NdJ("nzFilterChange",function(G){e.CHM(c);const Ae=e.oxw().filter;return e.KtG(Ae.changes.next({key:Ae.key,value:G}))}),e.qZA()(),e.YNc(4,zo,2,2,"ng-template",null,72,e.W1O),e.BQk()}if(2&u){const c=e.MAs(5),m=e.oxw().filter;e.xp6(1),e.Q6J("nzSuffix",c),e.xp6(1),e.Q6J("placeholder",m.placeholder)("ngModel",m.defaultValue)}}function N1(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"nz-input-number-group",77)(1,"nz-input-number",78,71),e.NdJ("ngModelChange",function(G){e.CHM(c);const Ae=e.oxw().filter;return e.KtG(Ae.changes.next({key:Ae.key,value:G}))}),e.qZA()()}if(2&u){const c=e.oxw().filter;e.xp6(1),e.Q6J("nzPlaceHolder",c.placeholder)("ngModel",c.defaultValue)("nzMin",1)("nzStep",1)}}function Pc(u,y){if(1&u&&(e.YNc(0,Pl,6,3,"ng-container",50),e.YNc(1,N1,3,4,"ng-template",null,68,e.W1O)),2&u){const c=y.filter,m=e.MAs(2);e.Q6J("ngIf",void 0===c.inputType||"default"===c.inputType)("ngIfElse",m)}}const Ic=function(){return[6,6]};function Qa(u,y){1&u&&(e.TgZ(0,"nz-row",79)(1,"nz-col")(2,"span"),e._uU(3,"Use checkboxes to select or deselect EIDs"),e.qZA()()()),2&u&&e.Q6J("nzGutter",e.DdM(1,Ic))}function ys(u,y){1&u&&(e.TgZ(0,"nz-tag",90),e._UZ(1,"i",91),e.TgZ(2,"span"),e._uU(3,"Loading\u2026"),e.qZA()())}const Wa=function(u){return{$implicit:u}};function rs(u,y){if(1&u&&(e.TgZ(0,"nz-tag",94),e._UZ(1,"span",95),e.TgZ(2,"span",96),e._uU(3),e.qZA()()),2&u){e.oxw();const c=e.MAs(4),m=e.oxw().ngrxLet;e.xp6(2),e.Q6J("nzTooltipTitle",c)("nzTooltipTitleContext",e.VKq(3,Wa,m.query)),e.xp6(1),e.hij(" Query Error",m.query.length>1?"s":""," ")}}function L1(u,y){if(1&u&&(e.TgZ(0,"nz-tag",94)(1,"span",96)(2,"span",97)(3,"strong"),e._uU(4),e.qZA()()()()),2&u){e.oxw();const c=e.MAs(4),m=e.oxw().ngrxLet;e.xp6(1),e.Q6J("nzTooltipTitle",c)("nzTooltipTitleContext",e.VKq(3,Wa,m.network)),e.xp6(3),e.hij(" Network Error",m.query.length>1?"s":""," ")}}function Il(u,y){if(1&u&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&u){const c=y.$implicit;e.xp6(1),e.hij(" ",c.message," ")}}function k1(u,y){1&u&&e.YNc(0,Il,2,1,"div",8),2&u&&e.Q6J("ngForOf",y.$implicit)}function Au(u,y){if(1&u&&(e.ynx(0),e.YNc(1,rs,4,5,"nz-tag",92),e.YNc(2,L1,5,5,"nz-tag",92),e.YNc(3,k1,1,1,"ng-template",null,93,e.W1O),e.BQk()),2&u){const c=e.oxw().ngrxLet;e.xp6(1),e.Q6J("ngIf",c.query),e.xp6(1),e.Q6J("ngIf",c.network)}}function ki(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Au,5,2,"ng-container",10),e.BQk()),2&u){const c=y.ngrxLet;e.xp6(1),e.Q6J("ngIf",c)}}function tr(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",98)(1,"nz-checkbox-group",99),e.NdJ("ngModelChange",function(G){e.CHM(c);const Ae=e.oxw(2);return e.KtG(Ae.onPreferenceChange$.next(G))}),e.ALo(2,"ngrxPush"),e.qZA()()}if(2&u){const c=e.oxw(2);e.xp6(1),e.Q6J("ngModel",e.lcZ(2,1,c.setPreference$))}}function Al(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"nz-row",79)(1,"nz-col",80),e.YNc(2,ys,4,0,"nz-tag",81),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e._UZ(5,"cvc-no-more-rows",82),e.ALo(6,"ngrxPush"),e.qZA(),e.TgZ(7,"nz-col",80),e.YNc(8,ki,2,1,"ng-container",3),e.qZA(),e.TgZ(9,"nz-col",80),e._UZ(10,"cvc-table-counts2",83),e.qZA(),e.TgZ(11,"nz-col",84)(12,"nz-button-group")(13,"button",85),e.NdJ("click",function(){e.CHM(c);const G=e.oxw();return e.KtG(G.onResetFilter$.next())}),e._UZ(14,"span",86),e.qZA(),e.TgZ(15,"button",87),e._UZ(16,"span",88),e.qZA()(),e.YNc(17,tr,3,3,"ng-template",null,89,e.W1O),e.qZA()()}if(2&u){const c=e.MAs(18),m=e.oxw();e.Q6J("nzGutter",8),e.xp6(2),e.Q6J("ngIf",e.lcZ(3,7,m.loading$)&&e.lcZ(4,9,m.isFetchMore$)),e.xp6(3),e.Q6J("cvcShowTag",e.lcZ(6,11,m.noMoreRows$)),e.xp6(3),e.Q6J("ngrxLet",m.queryError$),e.xp6(2),e.Q6J("cvcTableCountsConnection",m.connection$),e.xp6(5),e.Q6J("nzPopoverContent",c)("nzPopoverTrigger","click")}}const R1=function(){return[]},V1=function(){return{x:"800px",y:"200px"}};let Ac=((Pi=class{constructor(y,c,m){this.queryGQL=y,this.apollo=c,this.cdr=m,this.cvcSelectedIdsChange=new e.vpe,this.isScrolling=!1,this.colGuards=Sl,this.onFetchMore$=new Xe.x,this.onPreferenceChange$=new ct.X([]),this.onResetFilter$=new Xe.x,this.onRowSelected$=new Xe.x,this.onScroll$=new ct.X("stop"),this.onSetSelectedRow$=new ct.X(new Set),this.queryError$=new Xe.x,this.queryRequest$=new Xe.x,this.queryResult$=new Ao.t(1),this.isFetchMore$=new ct.X(!1),this.noMoreRows$=new ct.X(!1),this.scrollToIndex$=new Xe.x,this.tableConfig=new Tu;const G=(0,Do.a)(this.tableConfig.getFilterStreams()),Ae=(0,Do.a)(this.tableConfig.getSortStreams()).pipe((0,qe.h)(Dt=>Dt.filter(Mn=>null!==Mn.value).length<=1));this.refetch$=(0,Do.a)([Ae,G]).pipe((0,Zt.U)(([Dt,Mn])=>({query:"refetch",sort:Dt,filter:Mn}))),this.fetchMore$=this.onFetchMore$.pipe((0,Zt.U)(Dt=>({query:"fetchMore",fetchMore:{...Dt}}))),(0,No.T)(this.refetch$,this.fetchMore$).pipe((0,yo.b)(50),(0,ve.t)(this)).subscribe(Dt=>{const Mn=this.getQueryVars(Dt);this.queryRef?(this.queryError$.next({}),"refetch"===Dt.query?(this.isFetchMore$.next(!1),this.queryRef.refetch(Mn).then(kn=>{(kn.error||kn.errors)&&this.queryError$.next(this.getRequestErrors(kn))}).then(()=>{this.scrollToIndex$.next(0)})):(this.isFetchMore$.next(!0),this.queryRef.fetchMore({variables:Mn}).then(kn=>{(kn.error||kn.errors)&&this.queryError$.next(this.getRequestErrors(kn))}))):(this.isFetchMore$.next(!1),this.queryError$.next({}),this.queryRef=this.queryGQL.watch(Mn),this.queryRef.valueChanges.pipe((0,ve.t)(this)).subscribe(kn=>{this.queryResult$.next(kn),(kn.error||kn.errors)&&this.queryError$.next(this.getRequestErrors(kn))}))}),this.loading$=this.queryResult$.pipe((0,Cn.j)("loading"),(0,j.x)()),this.connection$=this.queryResult$.pipe((0,Cn.j)("data","browseVariants"),(0,qe.h)(xo.ep)),this.pageInfo$=this.connection$.pipe((0,Cn.j)("pageInfo"),(0,qe.h)(xo.ep)),this.row$=(0,Do.a)([this.connection$.pipe((0,Cn.j)("edges"),(0,qe.h)(xo.ep),(0,Zt.U)(Dt=>Dt.map(Mn=>Mn.node))),this.onSetSelectedRow$]).pipe((0,Zt.U)(([Dt,Mn])=>Dt.map(kn=>{if(kn)return{...kn,variant:{__typename:"Variant",id:kn.id,name:kn.name,link:kn.link},gene:{__typename:"Gene",id:kn.geneId,name:kn.geneName,link:kn.geneLink},selected:Mn.has(kn.id)}}))),this.col$=new ct.X(this.tableConfig.get()),this.setPreference$=this.col$.pipe((0,Zt.U)(Dt=>this.getColPrefsFromTableConfig(Dt))),this.onPreferenceChange$.pipe((0,it.M)(this.col$),(0,Zt.U)(([Dt,Mn])=>this.getTableConfigFromColPrefs(Dt,Mn)),(0,ve.t)(this)).subscribe(Dt=>{this.col$.next(Dt)}),this.onSetTableFilter$=new ct.X([]),this.onSetTableFilter$.pipe((0,ve.t)(this)).subscribe(Dt=>{const Mn=this.col$.getValue();Dt.forEach(kn=>{const $o=Mn.find(Wi=>Wi.key===kn.key);if(void 0!==$o.filter.inputType){const Wi=$o.filter.options[0];if(null===kn.value)return $o.filter.options=[{...Wi,value:null}],void $o.filter.changes.next(kn);if(Array.isArray(kn.value)&&0===kn.value.length)return $o.filter.options=[{...Wi,value:null}],void $o.filter.changes.next({...kn,value:null});let $i;Array.isArray(kn.value)?kn.value.length>0&&($i=kn.value[0]):$i=kn.value;const $s=$o.filter.typename;if(!$s||!$i)return void console.error(`variant-manager requires column config '${$o.key}' provide a typename for cvcTablePrefs Input to set its filter`);const Us=this.getEntityName($s,$i);if(!Us)return;$o.filter.options=[{...Wi,value:Us}],$o.filter.changes.next({...kn,value:Us})}else is($o)&&$o.filter.changes.next(kn)})}),this.onSetTablePref$=new ct.X([]),this.onSetTablePref$.pipe((0,it.M)(this.setPreference$),(0,Zt.U)(([Dt,Mn])=>{const kn=[];return Dt.forEach($o=>{let Wi=Mn.find($i=>$i.value===$o.value);Wi?kn.push({...Wi,...$o}):console.warn(`variant-manager onSetTablePref$ received updated preferences for column '${$o.value}', but a column with that key could not be found.`)}),kn}),(0,ve.t)(this)).subscribe(Dt=>{this.onPreferenceChange$.next(Dt)}),this.onRowSelected$.pipe((0,it.M)(this.onSetSelectedRow$),(0,ve.t)(this)).subscribe(([Dt,Mn])=>{Dt.selected?Mn.add(Dt.id):Mn.delete(Dt.id),this.onSetSelectedRow$.next(Mn),this.cvcSelectedIdsChange.next(Array.from(Mn))}),this.onScroll$.pipe((0,Zt.U)(Dt=>"stop"!==Dt),(0,j.x)(),(0,ve.t)(this)).subscribe(Dt=>{this.isScrolling=Dt,this.cdr.detectChanges()}),this.onScroll$.pipe((0,qe.h)(Dt=>"bottom"===Dt),(0,it.M)(this.pageInfo$),(0,Zt.U)(([Dt,Mn])=>Mn),(0,ve.t)(this)).subscribe(Dt=>{Dt.hasNextPage||(this.noMoreRows$.next(!0),this.cdr.detectChanges(),setInterval(()=>this.noMoreRows$.next(!1)))})}ngAfterViewInit(){this.onResetFilter$.pipe((0,it.M)((0,ei.of)(this.tableConfig.get())),(0,ve.t)(this)).subscribe(([y,c])=>{const m=[];c.forEach(G=>{if(bc(G)&&G.sort.changes&&G.sort.changes.next({key:G.key,value:G.sort.default??null}),is(G)){const Ae=G.filter.options.find(Dt=>1==Dt.byDefault)?.value;G.filter.changes&&G.filter.changes.next({key:G.key,value:Ae||null})}m.push(G)}),this.col$.next(m)})}getQueryVars(y){const c=this.getQueryFilterParams(y);return{...this.getQuerySortParams(y),...c,...y.fetchMore}}getQuerySortParams(y){if(!y.sort)return;const m=y.sort.find(Ae=>null!==Ae.value);return m?{sortBy:{column:this.getSortColumnFromColKey(m.key),direction:"ascend"===m.value?Fn.SrV.Asc:Fn.SrV.Desc||void 0}}:void 0}getQueryFilterParams(y){let c={};return y.filter&&y.filter.forEach(m=>{c[$a[m.key]||m.key]=null===m.value||""===m.value?void 0:m.value}),c}getRequestErrors(y){return{query:y.errors,network:y.error}}getTableConfigFromColPrefs(y,c){return c.forEach(m=>{if(Or.find(Ae=>Ae===m.key))return;const G=y.find(Ae=>Ae.value===m.key);G&&(m.hidden=!G?.checked)}),[...c]}getColPrefsFromTableConfig(y){let c=[];return y.forEach(m=>{Or.find(G=>G===m.key)||c.push({label:m.tooltip||m.label,value:m.key,checked:!m.hidden})}),c}getSortColumnFromColKey(y){return ha[y]}getEntityName(y,c){const m={id:`${y}:${c}`,fragment:Jn.Ps`
                fragment Linkable${y}Entity on ${y} {
                  id
                  name
                  link
                }`},G=this.apollo.client.readFragment(m);if(G)return G.name;console.error(`variant-manager onSetTableFilter$ could not find cached entity ${y}:${c} to populate input filter`)}trackByIndex(y,c){return c?.id}ngOnChanges(y){if(y.cvcTableSettings){const c=y.cvcTableSettings.currentValue;void 0!==c&&this.onSetTableFilter$.next(c.filters)}if(y.cvcSelectedIds){const c=y.cvcSelectedIds.currentValue,m=new Set;void 0!==c&&c.forEach(G=>m.add(G)),this.onSetSelectedRow$.next(m)}}}).\u0275fac=function(y){return new(y||Pi)(e.Y36(Fn.XQi),e.Y36(_o._M),e.Y36(e.sBO))},Pi.\u0275cmp=e.Xpm({type:Pi,selectors:[["cvc-variant-manager"]],inputs:{cvcTableSettings:"cvcTableSettings",cvcSelectedIds:"cvcSelectedIds"},outputs:{cvcSelectedIdsChange:"cvcSelectedIdsChange"},features:[e.TTD],decls:16,vars:27,consts:[["nzSize","small",3,"nzTitle","nzExtra"],["cvcTableScroller","",3,"nzData","cvcTableScrollerQueryRef","cvcTableScrollerPageInfo","cvcTableScrollerToIndex","nzScroll","nzVirtualForTrackBy","nzVirtualItemSize","nzSize","nzFrontPagination","nzShowPagination","nzLoading","cvcTableScrollerOnScroll","cvcTableScrollerOnFetch"],["virtualTable",""],[4,"ngrxLet"],["columnFilterInput",""],["cardTitle",""],["extraTemplate",""],[1,"col-header-row"],[4,"ngFor","ngForOf"],[1,"filter-row"],[4,"ngIf"],[3,"nzShowCheckbox","nzWidth","nzAlign","nzLeft","nzRight",4,"ngIf"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzSortOrderChange",4,"ngIf"],["nz-tooltip","",3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzTooltipTitle",4,"ngIf"],[3,"nzShowCheckbox","nzWidth","nzAlign","nzLeft","nzRight"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzSortOrderChange"],["nz-tooltip","",1,"col-header-label",3,"nzTooltipTitle"],["nz-tooltip","",3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzTooltipTitle"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight",4,"ngIf"],[3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight",4,"ngIf"],["class","attribute-filter","nzCustomFilter","",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzShowFilter","nzFilterFn","nzSortOrderChange",4,"ngIf"],["class","attribute-filter","nzCustomFilter","",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzFilterFn",4,"ngIf"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight"],[3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight"],[3,"cvcInputType","cvcPlaceholder","cvcModel","cvcModelChange",4,"ngIf"],[3,"cvcInputType","cvcPlaceholder","cvcModel","cvcModelChange"],["nzCustomFilter","",1,"attribute-filter",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzShowFilter","nzFilterFn","nzSortOrderChange"],["enumTableFilter",""],[3,"nzDropdownMenu","nzActive"],["enumTagFilterTrigger",""],["nz-icon","","nzType","filter","nzTheme","fill"],["enumFilterMenu","nzDropdownMenu"],[3,"cvcColumnKey","cvcFilterOptions","cvcOption","cvcOptionChange"],["nzCustomFilter","",1,"attribute-filter",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzFilterFn"],["nz-icon","","nzType","search"],["textTagFilterMenu","nzDropdownMenu"],[1,"ant-table-filter-dropdown"],[1,"custom-input-dropdown"],[3,"cvcPlaceholder","cvcModel","cvcModelChange"],[3,"cvcPlaceholder","cvcModel","cvcModelChange",4,"ngIf"],["nz-virtual-scroll",""],[1,"data-row"],[3,"nzChecked","nzAlign","nzLeft","nzRight","nzCheckedChange",4,"ngIf"],[3,"nzAlign","nzLeft","nzRight",4,"ngIf"],["class","default-col-type",3,"nzAlign","nzLeft","nzRight",4,"ngIf"],[3,"nzChecked","nzAlign","nzLeft","nzRight","nzCheckedChange"],[3,"nzAlign","nzLeft","nzRight"],["entityTagList",""],["entityTag",""],["emptyEntityTagCell",""],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"cvcTagTemplate","cvcTagListConfig"],[3,"cvcCollectionTagConfig","cvcTagTemplate","cvcShowFullLabels"],[3,"cvcTruncateLabel","cvcLinkableEntity","cvcEmphasize","cvcShowPopover","cvcStatus","cvcFullWidth"],[3,"cvcEmptyCategory"],["cvcContext","compact",3,"cvcFullWidth","cvcAttrValue","cvcTooltip",4,"ngIf","ngIfElse"],["emptyEnumTagCell",""],["cvcContext","compact",3,"cvcFullWidth","cvcAttrValue","cvcTooltip"],["nz-tooltip","","style","width: 100%; cursor: help; color: #595959",3,"nzTooltipTitle",4,"ngIf","ngIfElse"],["emptyTextTagCell",""],["nz-tooltip","",2,"width","100%","cursor","help","color","#595959",3,"nzTooltipTitle"],["nz-icon","","nzType","align-left","nzTheme","outline"],[1,"default-col-type",3,"nzAlign","nzLeft","nzRight"],["staticList",""],["staticValue",""],["emptyDefaultCell",""],[3,"innerHtml"],["numericInput",""],["nzSize","small",3,"nzSuffix"],["nz-input","",3,"placeholder","ngModel","nzFilterChange"],["filterInput",""],["suffixIcon",""],["nz-icon","","nzType","search","style","color: #ddd",4,"ngIf"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzType","search",2,"color","#ddd"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],["nzSize","small"],[2,"width","100%",3,"nzPlaceHolder","ngModel","nzMin","nzStep","ngModelChange"],[3,"nzGutter"],["nzFlex","auto"],["nzColor","processing",4,"ngIf"],[3,"cvcShowTag"],[3,"cvcTableCountsConnection"],["nzFlex","35px"],["nz-button","","type","button","nzType","default","nzSize","small",3,"click"],["nz-icon","","nzType","retweet","nzTheme","outline"],["nz-button","","nz-popover","","nzPopoverTitle","Visible Columns","type","button","nzType","default","nzSize","small",3,"nzPopoverContent","nzPopoverTrigger"],["nz-icon","","nzType","setting","nzTheme","outline"],["prefsPopover",""],["nzColor","processing"],["nz-icon","","nzType","sync","nzSpin",""],["nzColor","error","style","margin-left: 12px",4,"ngIf"],["queryError",""],["nzColor","error",2,"margin-left","12px"],["nz-icon","","nzType","question-circle","nzTheme","outline"],["nz-tooltip","",2,"cursor","help",3,"nzTooltipTitle","nzTooltipTitleContext"],["nz-typography",""],[1,"prefs-popover"],[3,"ngModel","ngModelChange"]],template:function(y,c){if(1&y&&(e.TgZ(0,"nz-card",0)(1,"nz-table",1,2),e.NdJ("cvcTableScrollerOnScroll",function(G){return c.onScroll$.next(G)})("cvcTableScrollerOnFetch",function(G){return c.onFetchMore$.next(G)}),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.ALo(7,"ngrxPush"),e.YNc(8,Du,5,2,"thead",3),e.YNc(9,Iu,2,0,"tbody",3),e.qZA()(),e.YNc(10,Pc,3,2,"ng-template",null,4,e.W1O),e.YNc(12,Qa,4,2,"ng-template",null,5,e.W1O),e.YNc(14,Al,19,13,"ng-template",null,6,e.W1O)),2&y){const m=e.MAs(13),G=e.MAs(15);e.Q6J("nzTitle",m)("nzExtra",G),e.xp6(1),e.Q6J("nzData",e.lcZ(3,15,c.row$)||e.DdM(25,R1))("cvcTableScrollerQueryRef",c.queryRef)("cvcTableScrollerPageInfo",e.lcZ(4,17,c.pageInfo$))("cvcTableScrollerToIndex",e.lcZ(5,19,c.scrollToIndex$))("nzScroll",e.DdM(26,V1))("nzVirtualForTrackBy",c.trackByIndex)("nzVirtualItemSize",28)("nzSize","small")("nzFrontPagination",!1)("nzShowPagination",!1)("nzLoading",e.lcZ(6,21,c.loading$)&&!e.lcZ(7,23,c.isFetchMore$)),e.xp6(7),e.Q6J("ngrxLet",c.col$),e.xp6(1),e.Q6J("ngrxLet",c.col$)}},dependencies:[M.sg,M.O5,M.tP,Po.J,ut,Rn,mt,Ee,Ut.P,ye.H,t.Fj,t.JJ,t.On,R.eJ,Vn.ix,Vn.fY,Zo.w,Ko.dQ,pe.t3,pe.SK,st.Ls,je.Zp,je.gB,je.ke,me.ZU,In.bd,Jt.ub,Hn.RR,Gn._V,Gn.Rb,Xn.lU,Zn.N8,Zn.qD,Zn.Uo,Zn._C,Zn.h7,Zn.Om,Zn.p0,Zn.$Z,Zn.zu,Zn.qn,Zn.Ql,Zn.UX,Zn.g6,wt.j,Ye.SY,Ec,Eu,xu,rr,N.Do,J.A,Ur,R.fM],styles:["[_nghost-%COMP%]{display:block}nz-card[_ngcontent-%COMP%]:first-of-type     .ant-card-body{padding:0;margin-top:1px}.table-info[_ngcontent-%COMP%]{margin-left:.5rem}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell.align-right[_ngcontent-%COMP%]     .ant-table-column-title{text-align:right}tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{padding:3px 4px}tr.filter-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   nz-filter-trigger[_ngcontent-%COMP%]     span.ant-dropdown-trigger{margin-left:0;padding-right:12px}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .anticon.attribute-icon[_ngcontent-%COMP%]{color:#595959}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.overflow-ellipsis[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.button-cell[_ngcontent-%COMP%]{padding:0}tr.data-row[_ngcontent-%COMP%]   td.align-right[_ngcontent-%COMP%], tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%]{text-align:right}tr.data-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-of-type{padding-left:6px}tr.data-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-of-type   cvc-entity-tag[_ngcontent-%COMP%]{margin-left:6px}td.default-col-type[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}.ant-table-filter-dropdown[_ngcontent-%COMP%]{padding:8px}.prefs-popover[_ngcontent-%COMP%]     nz-checkbox-group:first-of-type label{display:block}.prefs-popover[_ngcontent-%COMP%]     nz-checkbox-group:first-of-type label span{display:inline-block}"],changeDetection:0}),Pi);var Cs;function Fc(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"span"),e._uU(2),e.qZA(),e.BQk()),2&u){const c=y.ngrxLet;e.xp6(2),e.Oqu(c.message)}}function Sd(u,y){if(1&u&&e._uU(0),2&u){const c=e.oxw();e.Oqu(c.successMessage)}}Ac=(0,Ce.gn)([(0,ve.c)()],Ac);const ma=function(){return[0,0]};let Fu=((Cs=class{set cvcGeneId(y){y&&this.geneId$.next(y)}set cvcGeneName(y){y&&this.geneName$.next(y)}set cvcSearchString(y){y&&this.searchString$.next(y)}constructor(y,c){this.query=y,this.errors=c,this.cvcOnCreate=new e.vpe,this.form=new t.nJ({}),this.model={name:""},this.formLayout="horizontal",this.options={formState:{formLayout:this.formLayout}},this.onSubmit$=new Xe.x,this.searchString$=new ct.X(void 0),this.geneName$=new ct.X(void 0),this.geneId$=new ct.X(void 0),this.formMessageDisplay$=new ct.X({message:"Variant does not exist, create it?"}),this.queryMutator=new qo.U(this.errors),this.addVariantMutator=new qo.U(this.errors),this.minNameLength=3,this.fields=[{key:"geneId",hide:!0,props:{required:!0}},{key:"name",hide:!0,props:{minLength:this.minNameLength,required:!0}}],this.geneId$.pipe((0,ve.t)(this)).subscribe(m=>{this.model.geneId=m}),this.searchString$.pipe((0,ve.t)(this)).subscribe(m=>{this.model.name=m,this.formMessageDisplay$.next(void 0!==m&&m.length<this.minNameLength?{message:`New Variant name must be at least ${this.minNameLength} characters.`}:{message:`Variant '${m}' does not exist, create it?`})}),this.onSubmit$.pipe((0,ve.t)(this)).subscribe(m=>{console.log("variant-quick-add form model submitted.",m),this.submitVariant(m)})}submitVariant(y){y.name&&y.geneId?this.mutationState=this.addVariantMutator.mutate(this.query,{name:y.name,geneId:y.geneId},{},c=>{console.log("variant-quick-add submit data callback",c),c.addVariant&&(this.formMessageDisplay$.next({message:void 0}),setTimeout(()=>{c&&c.addVariant&&this.cvcOnCreate.next(c.addVariant.variant.id)},1e3))}):console.error("variant-quick-add form submitVariant requires model with valid name and geneId.")}ngOnChanges(y){if(y.cvcGeneId){const c=y.cvcGeneId.currentValue;this.geneId$.next(c),this.model={...this.model,geneId:c}}y.cvcGeneName&&this.geneName$.next(y.cvcGeneName.currentValue)}}).\u0275fac=function(y){return new(y||Cs)(e.Y36(Fn.MCG),e.Y36(Vo.Y))},Cs.\u0275cmp=e.Xpm({type:Cs,selectors:[["cvc-variant-quick-add-form"]],inputs:{cvcGeneId:"cvcGeneId",cvcGeneName:"cvcGeneName",cvcSearchString:"cvcSearchString"},outputs:{cvcOnCreate:"cvcOnCreate"},features:[e.TTD],decls:18,vars:17,consts:[[4,"ngrxLet"],["entityType","Variant",3,"mutationState","successMessage"],["success",""],[3,"formGroup","ngSubmit"],[3,"nzGutter"],["nzSpan","24"],[3,"form","fields","model","options","modelChange"],["nz-button","","nzType","primary","nzBlock","",3,"disabled"]],template:function(y,c){if(1&y&&(e.YNc(0,Fc,3,1,"ng-container",0),e.TgZ(1,"cvc-form-submission-status-display",1),e.YNc(2,Sd,1,1,"ng-template",null,2,e.W1O),e.TgZ(4,"form",3),e.NdJ("ngSubmit",function(){return c.onSubmit$.next(c.model)}),e.TgZ(5,"nz-row",4)(6,"nz-col",5)(7,"formly-form",6),e.NdJ("modelChange",function(G){return c.model=G}),e.qZA()(),e.TgZ(8,"nz-col",5)(9,"button",7),e._uU(10," Add\xa0 "),e.TgZ(11,"strong"),e._uU(12),e.ALo(13,"ngrxPush"),e.qZA(),e._uU(14," \xa0Variant\xa0"),e.TgZ(15,"i"),e._uU(16),e.ALo(17,"ngrxPush"),e.qZA()()()()()()),2&y){const m=e.MAs(3);e.Q6J("ngrxLet",c.formMessageDisplay$),e.xp6(1),e.Q6J("mutationState",c.mutationState)("successMessage",m),e.xp6(3),e.Q6J("formGroup",c.form),e.xp6(1),e.Q6J("nzGutter",e.DdM(16,ma)),e.xp6(2),e.Q6J("form",c.form)("fields",c.fields)("model",c.model)("options",c.options),e.xp6(2),e.Q6J("disabled",!c.form.valid),e.xp6(3),e.Oqu(e.lcZ(13,12,c.geneName$)),e.xp6(4),e.Oqu(e.lcZ(17,14,c.searchString$))}},dependencies:[_i.F,v.T7,t._Y,t.JL,R.eJ,Vn.ix,Zo.w,Ko.dQ,pe.t3,pe.SK,t.sg,R.fM],encapsulation:2,changeDetection:0}),Cs);Fu=(0,Ce.gn)([(0,ve.c)()],Fu);const Nc=["optionTemplates"],B1=function(u,y){return{show:u,hide:y}};function Ed(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"nz-col",9)(1,"button",10),e.NdJ("click",function(){e.CHM(c);const G=e.oxw();return e.KtG(G.onShowMgrClick$.next())}),e._UZ(2,"span",11),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e._uU(5," Manager "),e.qZA()()}if(2&u){const c=e.oxw();e.xp6(2),e.Q6J("ngClass",e.WLB(6,B1,e.lcZ(3,2,c.showMgr$),!e.lcZ(4,4,c.showMgr$)))("nzType","caret-right")}}function ga(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"nz-col",12)(1,"cvc-variant-manager",13),e.NdJ("cvcSelectedIdsChange",function(G){e.CHM(c);const Ae=e.oxw();return e.KtG(Ae.onPopulate$.next(G))}),e.ALo(2,"ngrxPush"),e.qZA()()}if(2&u){const c=e.oxw();e.xp6(1),e.Q6J("cvcSelectedIds",e.lcZ(2,1,c.onVid$))}}function Lc(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"em"),e._UZ(2,"span",20),e.ALo(3,"highlightTypeahead"),e.qZA(),e.BQk()),2&u){const c=e.oxw(2).$implicit,m=e.oxw().ngrxLet;e.xp6(2),e.Q6J("nzTooltipTitle",c.variantAliases.join(", "))("innerHtml",e.xi3(3,2,c.variantAliases.join(", "),m),e.oJD)}}function Nu(u,y){1&u&&e._uU(0,"--")}function kc(u,y){if(1&u&&(e._UZ(0,"cvc-entity-tag",16),e.TgZ(1,"span",17)(2,"strong"),e._uU(3,"Aliases:"),e.qZA(),e.YNc(4,Lc,4,5,"ng-container",18),e.YNc(5,Nu,1,0,"ng-template",null,19,e.W1O),e.qZA()),2&u){const c=e.MAs(6),m=e.oxw().$implicit,G=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",m.__typename+":"+m.id)("cvcEmphasize",G),e.xp6(4),e.Q6J("ngIf",m.variantAliases.length>0)("ngIfElse",c)}}function H1(u,y){1&u&&(e.ynx(0),e.YNc(1,kc,7,5,"ng-template",null,15,e.W1O),e.BQk())}function Lu(u,y){if(1&u&&(e.ynx(0),e.YNc(1,H1,3,0,"ng-container",14),e.ALo(2,"ngrxPush"),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function va(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",21)(1,"cvc-entity-tag",22),e.NdJ("cvcOnClose",function(){const Ae=e.CHM(c).$implicit,Dt=e.oxw();return e.KtG(Dt.onTagClose$.next(Ae.nzValue))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","Variant:"+c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}function _a(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"cvc-variant-quick-add-form",23),e.NdJ("cvcOnCreate",function(G){e.CHM(c);const Ae=e.oxw();return e.KtG(Ae.onPopulate$.next(G))}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.qZA()}if(2&u){const c=y.$implicit,m=e.oxw();e.Q6J("cvcSearchString",c)("cvcGeneId",e.lcZ(1,3,m.onGeneId$))("cvcGeneName",e.lcZ(2,5,m.onGeneName$))}}const lp=function(){return[6,6]},up=kt(at(),oi());let Rc=(()=>{class u extends up{constructor(c,m,G,Ae){super(),this.taq=c,this.tq=m,this.geneQuery=G,this.changeDetectorRef=Ae,this.onModel$=new jo.y,this.defaultOptions={props:{label:"Variant",placeholder:"Search Variants",requireGene:!0,requireGenePlaceholderFn:Dt=>`Search ${Dt} Variants`,requireGenePrompt:"Select a Gene to search its Variants",isMultiSelect:!1,entityName:{singular:"Variant",plural:"Variants"},showManagerBtn:!1,minSearchStrLength:0}},this.onGeneName$=new ct.X(void 0),this.onVid$=new Ao.t,this.onShowMgrClick$=new Xe.x,this.showMgr$=this.onShowMgrClick$.pipe((0,to.R)((Dt,Mn)=>!Dt,!1))}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent,minSearchStrLength:this.field.props.minSearchStrLength}),this.state&&this.state.formReady$?this.state.formReady$.pipe((0,qe.h)(c=>c),(0,Ti.q)(1),(0,ve.t)(this)).subscribe(c=>{this.configureField()}):this.configureField()}configureField(){this.configureStateConnections(),this.onVid$.pipe((0,ve.t)(this)).subscribe(),this.onVid$.next(this.formControl.value),this.onModel$=(0,Do.a)([this.onGeneId$,this.onSearch$]).pipe((0,Zt.U)(([c,m])=>({geneId:c,name:m}))),this.onValueChange$.pipe((0,it.M)(this.onVid$),(0,ve.t)(this)).subscribe(([c,m])=>{Array.isArray(c)&&this.onVid$.next(c)})}configureStateConnections(){if(this.state&&this.props.requireGene){if(!this.state?.fields.geneId$)return void console.error(`${this.field.id} requireGene is set, but no geneId$ subject found on state.`);this.onGeneId$=this.state.fields.geneId$,this.onGeneId$.pipe((0,ve.t)(this)).subscribe(c=>{this.onGeneId(c)})}}getTypeaheadVarsFn(c){return{name:c,geneId:this.selectedGeneId}}getTypeaheadResultsFn(c){return c.data.variants.nodes}getTagQueryVarsFn(c){return{variantId:c}}getTagQueryResultsFn(c){return c.data.variant}getSelectedItemOptionFn(c){return{value:c.id,label:c.name}}getSelectOptionsFn(c,m){return c.map((G,Ae)=>({label:m.get(Ae)||G.name,value:G.id}))}showAddBehavior(c,m){const G=c.toLowerCase();return c.length>=3&&!m.some(Ae=>Ae.name.toLowerCase()===G)}onGeneId(c){this.selectedGeneId=c,!c&&this.props.requireGene?(this.resetField(),this.props.description=this.props.requireGenePrompt,this.props.placeholder="Select a Variant",this.props.extraType="prompt",this.onGeneName$.next(void 0)):c&&(this.props.description=void 0,this.props.extraType=void 0,yu(this.geneQuery.fetch({geneId:c},{fetchPolicy:"cache-first"})).then(({data:m})=>{m?.gene?.name?(this.props.placeholder=this.props.requireGene?this.props.requireGenePlaceholderFn(m.gene.name):this.props.placeholder,this.onGeneName$.next(m.gene.name)):console.error(`${this.field.id} could not fetch gene name for Gene:${c}.`)}))}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(Fn.nSb),e.Y36(Fn.dDn),e.Y36(Fn.DzV),e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["ng-component"]],viewQuery:function(c,m){if(1&c&&e.Gf(Nc,5,e.Rgc),2&c){let G;e.iGM(G=e.CRH())&&(m.optionTemplates=G)}},features:[e.qOj],decls:20,vars:41,consts:[[3,"nzGutter"],["nzFlex","auto"],["nz-tooltip","","nzTooltipTitle","Select a Gene to enable field.",3,"nzTooltipTrigger"],[3,"cvcAddEntity","cvcAddEntityModel","cvcAddEntityBehavior","cvcMinSearchStrLength","cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcDisabled","cvcOptions","cvcSelectOpen","cvcShowError","cvcLoading","cvcParamName","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],["nzFlex","50px",4,"ngIf"],["nzSpan","24","class","manager-drawer",4,"ngIf"],[4,"ngrxLet"],["selectedTemplate",""],["addVariant",""],["nzFlex","50px"],["type","button","nz-button","","nzBlock","",1,"manager-button",3,"click"],["nz-icon","",3,"ngClass","nzType"],["nzSpan","24",1,"manager-drawer"],[3,"cvcSelectedIds","cvcSelectedIdsChange"],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf","ngIfElse"],["noAliases",""],["nz-typography","","nzType","secondary","nz-tooltip","",3,"nzTooltipTitle","innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"],[3,"cvcSearchString","cvcGeneId","cvcGeneName","cvcOnCreate"]],template:function(c,m){if(1&c&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1)(2,"span",2),e.ALo(3,"ngrxPush"),e.TgZ(4,"cvc-entity-select",3),e.NdJ("cvcOnSearch",function(Ae){return m.onSearch$.next(Ae)})("cvcOnOpenChange",function(Ae){return m.onOpenChange$.next(Ae)})("cvcOnModelChange",function(Ae){return m.props.change&&m.props.change(m.field,Ae)}),e.ALo(5,"ngrxPush"),e.ALo(6,"ngrxPush"),e.ALo(7,"ngrxPush"),e.ALo(8,"ngrxPush"),e.ALo(9,"ngrxPush"),e.ALo(10,"ngrxPush"),e.ALo(11,"ngrxPush"),e.qZA()()(),e.YNc(12,Ed,6,9,"nz-col",4),e.YNc(13,ga,3,3,"nz-col",5),e.ALo(14,"ngrxPush"),e.qZA(),e.YNc(15,Lu,3,3,"ng-container",6),e.YNc(16,va,2,3,"ng-template",null,7,e.W1O),e.YNc(18,_a,3,7,"ng-template",null,8,e.W1O)),2&c){const G=e.MAs(17),Ae=e.MAs(19);e.Q6J("nzGutter",e.DdM(40,lp)),e.xp6(2),e.Q6J("nzTooltipTrigger",m.props.requireGene&&!e.lcZ(3,22,m.onGeneId$)?"hover":null),e.xp6(2),e.Q6J("cvcAddEntity",Ae)("cvcAddEntityModel",e.lcZ(5,24,m.onModel$))("cvcAddEntityBehavior",m.showAddBehavior)("cvcMinSearchStrLength",m.props.minSearchStrLength)("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",G)("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcEntityName",m.props.entityName)("cvcPlaceholder",m.props.placeholder)("cvcResults",e.lcZ(6,26,m.result$))("cvcDisabled",m.props.requireGene&&!e.lcZ(7,28,m.onGeneId$))("cvcOptions",e.lcZ(8,30,m.selectOption$))("cvcSelectOpen",e.lcZ(9,32,m.selectOpen$))("cvcShowError",m.showError)("cvcLoading",e.lcZ(10,34,m.isLoading$))("cvcParamName",e.lcZ(11,36,m.onGeneName$)),e.xp6(8),e.Q6J("ngIf",m.props.showManagerBtn),e.xp6(1),e.Q6J("ngIf",e.lcZ(14,38,m.showMgr$)),e.xp6(2),e.Q6J("ngrxLet",m.onSearch$)}},dependencies:[M.mk,M.sg,M.O5,Oo,Po.J,R.eJ,Vn.ix,Zo.w,Ko.dQ,pe.t3,pe.SK,st.Ls,me.ZU,Ye.SY,Ac,Fu,J.A,R.fM],styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}  nz-input-group{border-color:#d9d9d9!important}"],changeDetection:0}),u})();const ya={types:[{name:"variant-select",wrappers:["form-field"],component:Rc},{name:"variant-multi-select",wrappers:["form-field"],component:Rc,defaultOptions:{props:{label:"Variants",isMultiSelect:!0}}}]};let zs=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,Un,$e.x,Bt,zn.g,Ve.s,Wn,lr,Be,ea,Vr.M,xn.y,v.X0.forChild(ya),t.u5,Xt.L,Te.ic,Vn.sL,s.U5,pe.Jb,st.PV,je.o7,vo.Qp,Ne.LV,me.ZJ,Vn.sL,In.vh,Jt.Wr,Hn.b1,s.U5,pe.Jb,st.PV,je.o7,Gn.Zf,Xn.$6,Zn.HQ,wt.X,Ye.cg,me.ZJ,t.UX]}),u})();var Vc=a(9858),_r=a(6976),xd=a(4194);const dp=/\(/g,pp=/\)/g,Dd=/AND|OR/i,Fl=/^(?<not>NOT\s)?\s*#VID(?<variantId>\d+)$/i,Y1=/\s+/,ku="EXPR";function $1(u){return U1(u.replace(dp," ( ").replace(pp," ) "))}function U1(u){let c,y=u.split(Y1),m=0,G=[],Ae=[],Dt=[];for(let Hr of y)if("("==Hr)0!=m&&G.push(Hr),m+=1;else if(")"==Hr)if(m-=1,0==m){let ls=U1(G.join(" "));if("errorMessage"in ls)return ls;Dt.push(ls),Ae.push(ku),G=[]}else G.push(Hr);else m>0?G.push(Hr):Ae.push(Hr);const Mn={errorType:"trailingBoolean",errorMessage:"Expressions may not end with AND / OR boolean operators."},kn={errorType:"initialBoolean",errorMessage:"Expressions may not start with AND / OR boolean operators."},$o={errorType:"multipleBoolean",errorMessage:"Multiple boolean operators found."},Wi={errorType:"incompleteExpression",errorMessage:"Ensure that parenthetical clauses are closed."};let $i=0;for(let Hr of Ae){let ls=Dd.test(Hr);if(ls&&0==$i)return kn;if(ls&&$i===y.length-1)return Mn;if(ls&&!c)c=Ru(Hr);else if(ls&&c&&Ru(Hr)!==c)return $o;$i++}let $s=[],Us=Ae.join(" ").split(Dd);for(let Hr of Us.map(ls=>ls.trim())){let ls=Fl.exec(Hr);if(null===ls){if(0===Hr.length)return Wi;if("NOT"===Hr||"NOT"===Hr.split(" ").pop())return{errorType:"incompleteNOT",errorMessage:"NOT operator must be followed by a valid #VID."};if(Hr!==ku)return{errorType:"invalidToken",errorMessage:`Token '${Hr}' does not match the expected format.`}}else $s.push({not:!!ls[1],variantId:parseInt(ls[2])})}return{booleanOperator:c,variantComponents:$s,complexComponents:Dt}}function Ru(u){return"AND"==u.toUpperCase()?Fn._Wm.And:Fn._Wm.Or}var Nl=a(5095);let ss=(()=>{class u{constructor(c){this.apollo=c,this.cvcOnSelect=new e.vpe,this.cvcOnVariantSelect=new e.vpe,this.modelChange$=new ct.X(void 0),this.layout="horizontal",this.finderState={formLayout:this.layout,fields:{geneId$:new ct.X(void 0),variantId$:new ct.X(void 0),variantMolecularProfile$:new ct.X(void 0)}},this.form=new t.nJ({}),this.model={geneId:void 0,variantId:void 0},this.options={formState:this.finderState},this.config=[{wrappers:["field-grid"],props:{grid:{cols:2}},fieldGroup:[{key:"geneId",type:"gene-select",props:{placeholder:"Select MP Gene",hideLabel:!0,layout:{showExtra:!1}}},{key:"variantId",type:"variant-select",props:{placeholder:"Select MP Variant",requireGene:!0,layout:{showExtra:!1},hideLabel:!0}}]}]}modelChange(c){if(!c?.variantId)return;const m=this.getSelectedVariant(c.variantId);m&&(this.model={geneId:void 0,variantId:void 0},this.cvcOnSelect.next(m.singleVariantMolecularProfile),this.cvcOnVariantSelect.next(m))}getSelectedVariant(c){if(!c)return;const m={id:`Variant:${c}`,fragment:_o.Ps`
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
      `};let G;try{G=this.apollo.client.readFragment(m)}catch(Ae){console.error(Ae)}if(G)return G;console.error("MpFinderForm could not resolve its Variant from the cache")}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(_o._M))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-mp-finder"]],outputs:{cvcOnSelect:"cvcOnSelect",cvcOnVariantSelect:"cvcOnVariantSelect"},decls:2,vars:6,consts:[["nz-form","",3,"nzLayout","formGroup"],[3,"form","fields","model","options","modelChange"]],template:function(c,m){1&c&&(e.TgZ(0,"form",0)(1,"formly-form",1),e.NdJ("modelChange",function(Ae){return m.modelChange(Ae)}),e.qZA()()),2&c&&(e.Q6J("nzLayout",m.layout)("formGroup",m.form),e.xp6(1),e.Q6J("form",m.form)("fields",m.config)("model",m.model)("options",m.options))},dependencies:[t._Y,t.JL,t.sg,v.T7,s.Lr],styles:["[_nghost-%COMP%]{display:block;width:100%}"],changeDetection:0}),u})();function Ts(u,y){1&u&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," The expression contains open parentheses. Please ensure that all parenthetical expressions are closed. "),e.qZA(),e.BQk())}function j1(u,y){1&u&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," Complete the expression by appending a "),e.TgZ(3,"strong"),e._uU(4,"#VID"),e.qZA(),e._uU(5," token to the incomplete boolean expression. "),e.qZA(),e.BQk())}function Vu(u,y){1&u&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," MP Expressions may not begin with an "),e.TgZ(3,"strong"),e._uU(4,"AND"),e.qZA(),e._uU(5," or "),e.TgZ(6,"strong"),e._uU(7,"OR"),e.qZA(),e._uU(8," boolean. Ensure the expression begins with a "),e.TgZ(9,"strong"),e._uU(10,"#VID"),e.qZA(),e._uU(11," or "),e.TgZ(12,"strong"),e._uU(13,"NOT #VID"),e.qZA(),e._uU(14," token. "),e.qZA(),e.BQk())}function Od(u,y){1&u&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," Molecular Profile expressions use a simple domain-specific language to specify complex MPs using boolean expressions to combine variants. These expressions may contain: "),e.qZA(),e.TgZ(3,"ul")(4,"li"),e._uU(5," Variant Tokens - "),e.TgZ(6,"strong"),e._uU(7,"#VID"),e.qZA(),e._uU(8," or "),e.TgZ(9,"strong"),e._uU(10,"NOT #VID"),e.qZA(),e._uU(11,'followed by a valid Variant ID, e.g. "#VID123" '),e.qZA(),e.TgZ(12,"li"),e._uU(13,"Boolean Tokens - "),e.TgZ(14,"strong"),e._uU(15,"AND"),e.qZA(),e._uU(16,", "),e.TgZ(17,"strong"),e._uU(18,"OR"),e.qZA()(),e.TgZ(19,"li"),e._uU(20," Parentheses - "),e.TgZ(21,"strong"),e._uU(22,"("),e.qZA(),e._uU(23," or "),e.TgZ(24,"strong"),e._uU(25,")"),e.qZA(),e._uU(26,", for grouping tokens into nested expressions "),e.qZA()(),e.TgZ(27,"p")(28,"strong"),e._uU(29,"Invalid Token"),e.qZA(),e._uU(30," errors occur if the parser encounters any text or token that does not match those listed above. "),e.qZA(),e.BQk())}function wd(u,y){1&u&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," A single expression may not include more than one "),e.TgZ(3,"strong"),e._uU(4,"AND"),e.qZA(),e._uU(5," or "),e.TgZ(6,"strong"),e._uU(7,"OR"),e.qZA(),e._uU(8," boolean operator. To construct complex expressions, use parentheses. "),e.qZA(),e.TgZ(9,"p"),e._uU(10," For example, the expression "),e.TgZ(11,"strong"),e._uU(12,"#VID12 AND #VID2220 OR #VID456"),e.qZA(),e._uU(13," is invalid, but the expression "),e.TgZ(14,"strong"),e._uU(15,"#VID12 AND (#VID2220 OR #VID456)"),e.qZA(),e._uU(16," is valid. The parentheses create a nested expression independent of the outer expression. "),e.qZA(),e.BQk())}function hp(u,y){1&u&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," Complete the expression by appending a "),e.TgZ(3,"strong"),e._uU(4,"#VID"),e.qZA(),e._uU(5," token to the incomplete boolean expression. "),e.qZA(),e.BQk())}function fp(u,y){1&u&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," The expression contains a Variant ID that cannot be matched to any Variant in the CIViC database. Please re-check the Variant ID, or create a new one by following these steps: "),e.qZA(),e.TgZ(3,"ol")(4,"li"),e._uU(5,"click the 'Variant' button,"),e.qZA(),e.TgZ(6,"li"),e._uU(7,"enter a Gene name, then select a Gene"),e.qZA(),e.TgZ(8,"li"),e._uU(9,"enter the Variant name"),e.qZA(),e.TgZ(10,"li"),e._uU(11," click the 'Create Variant' button that will appear if name does not match any CIViC Variants "),e.qZA()(),e.BQk())}function G1(u,y){1&u&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," An expression may not contain multiple instances of the same Variant. Either remove the variant or change the expression. For example, "),e.TgZ(3,"strong"),e._uU(4,"(#VID123 AND #VID456) OR (#VID123 AND #VID789)"),e.qZA(),e._uU(5,", which is invalid, is logically identical to the valid MP expression "),e.TgZ(6,"strong"),e._uU(7,"#VID123 AND (#VID456 OR #VID789)"),e.qZA(),e._uU(8,". "),e.qZA(),e.BQk())}function Bu(u,y){1&u&&(e.ynx(0),e.TgZ(1,"p"),e._uU(2," The Molecular Profile editor allows the selection or creation of complex Molecular Profiles by writing Molecular Profile Expressions. These expressions are composed with a simple language consisting of Variant tokens, boolean operators, and parentheses. For example: "),e.qZA(),e.TgZ(3,"blockquote")(4,"strong"),e._uU(5,"#VID12 AND #VID2220"),e.qZA(),e._UZ(6,"br"),e.TgZ(7,"strong"),e._uU(8,"#VID12 OR #VID2220"),e.qZA(),e._UZ(9,"br"),e.TgZ(10,"strong"),e._uU(11,"#VID12 AND NOT #VID2220"),e.qZA(),e._UZ(12,"br"),e.TgZ(13,"strong"),e._uU(14,"#VID12 AND #VID2220 AND (#VID456 OR #VID123)"),e.qZA(),e._UZ(15,"br"),e.TgZ(16,"strong"),e._uU(17,"#VID12 OR #VID2220 OR (NOT #VID456 AND #VID123)"),e.qZA(),e._UZ(18,"br"),e.qZA(),e.TgZ(19,"p")(20,"strong"),e._uU(21,"Variant Tokens"),e.qZA(),e._UZ(22,"br"),e._uU(23," Variant tokens are composed of a CIViC Variant ID prepended with "),e.TgZ(24,"strong"),e._uU(25,"#VID"),e.qZA(),e._uU(26,", and refer to specific CIViC Variants. For example, "),e.TgZ(27,"strong"),e._uU(28,"#VID12"),e.qZA(),e._uU(29," refers to "),e.TgZ(30,"strong"),e._uU(31,"BRAF V600E"),e.qZA(),e._uU(32,"; "),e.TgZ(33,"strong"),e._uU(34,"#VID2220"),e.qZA(),e._uU(35," refers to "),e.TgZ(36,"strong"),e._uU(37,"ALK FUSION"),e.qZA(),e._uU(38,". If you don\u2019t know the CIViC ID of a Variant, you can search for Variants by name using the \u2018Variant\u2019 or \u2018NOT Variant\u2019 buttons below. These interfaces can also be used to add a Variant that\u2019s not yet in CIViC. "),e.qZA(),e.TgZ(39,"p")(40,"strong"),e._uU(41,"Boolean Operators"),e.qZA(),e._UZ(42,"br"),e._uU(43," MP Expressions with more than a single variant must include boolean operators - "),e.TgZ(44,"strong"),e._uU(45,"AND"),e.qZA(),e._uU(46,", "),e.TgZ(47,"strong"),e._uU(48,"OR"),e.qZA(),e._uU(49,", and "),e.TgZ(50,"strong"),e._uU(51,"NOT"),e.qZA(),e._uU(52," - indicating their relationship. For example, the expression "),e.TgZ(53,"strong"),e._uU(54,"#VID12 AND #VID2220"),e.qZA(),e._uU(55," describes a MP that includes both "),e.TgZ(56,"strong"),e._uU(57,"BRAF V600E"),e.qZA(),e._uU(58," and "),e.TgZ(59,"strong"),e._uU(60,"ALK FUSION"),e.qZA(),e._uU(61,". "),e.qZA(),e.TgZ(62,"p")(63,"strong"),e._uU(64,"Parentheses"),e.qZA(),e._UZ(65,"br"),e._uU(66," Expressions cannot have both "),e.TgZ(67,"strong"),e._uU(68,"AND"),e.qZA(),e._uU(69," and "),e.TgZ(70,"strong"),e._uU(71,"OR"),e.qZA(),e._uU(72," operators within the same expression. To construct complex MPs that require multiple operators, one must use parentheses to create embedded expressions. "),e.qZA(),e.TgZ(73,"p")(74,"strong"),e._uU(75,"NOTE:"),e.qZA(),e._uU(76," Be sure to read the help text provided along with every alert message by hovering over 'Syntax Assistance'. "),e.qZA(),e.BQk())}let Q1=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-mp-editor-popover-help"]],inputs:{cvcErrorType:"cvcErrorType"},decls:11,vars:9,consts:[[1,"help-content"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"]],template:function(c,m){1&c&&(e.TgZ(0,"div",0),e.ynx(1,1),e.YNc(2,Ts,3,0,"ng-container",2),e.YNc(3,j1,6,0,"ng-container",2),e.YNc(4,Vu,15,0,"ng-container",2),e.YNc(5,Od,31,0,"ng-container",2),e.YNc(6,wd,17,0,"ng-container",2),e.YNc(7,hp,6,0,"ng-container",2),e.YNc(8,fp,12,0,"ng-container",2),e.YNc(9,G1,9,0,"ng-container",2),e.YNc(10,Bu,77,0,"ng-container",3),e.BQk(),e.qZA()),2&c&&(e.xp6(1),e.Q6J("ngSwitch",m.cvcErrorType),e.xp6(1),e.Q6J("ngSwitchCase","incompleteExpression"),e.xp6(1),e.Q6J("ngSwitchCase","incompleteNOT"),e.xp6(1),e.Q6J("ngSwitchCase","initialBoolean"),e.xp6(1),e.Q6J("ngSwitchCase","invalidToken"),e.xp6(1),e.Q6J("ngSwitchCase","multipleBoolean"),e.xp6(1),e.Q6J("ngSwitchCase","trailingBoolean"),e.xp6(1),e.Q6J("ngSwitchCase","unknownVariant"),e.xp6(1),e.Q6J("ngSwitchCase","identicalVariants"))},dependencies:[M.RF,M.n9,M.ED],styles:[".help-content[_ngcontent-%COMP%]{max-width:500px}blockquote[_ngcontent-%COMP%]{margin-left:1em}"]}),u})();var Bc;const Hu=["expressionEditor"];function mp(u,y){1&u&&e._uU(0,"Added new Molecular Profile")}function Pd(u,y){if(1&u&&e._UZ(0,"cvc-mp-tag-name",24),2&u){const c=e.oxw().ngrxLet;e.Q6J("nameSegments",c)}}function Id(u,y){1&u&&(e.TgZ(0,"span",25),e._uU(1," Valid Molecular Profile expressions will be previewed here. "),e.qZA())}function W1(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Pd,1,1,"cvc-mp-tag-name",22),e.YNc(2,Id,2,0,"span",23),e.BQk()),2&u){const c=y.ngrxLet;e.xp6(1),e.Q6J("ngIf",c),e.xp6(1),e.Q6J("ngIf",!c)}}function Ll(u,y){1&u&&e._UZ(0,"cvc-mp-editor-popover-help")}function kl(u,y){if(1&u&&(e.TgZ(0,"button",28),e._UZ(1,"span",29),e._uU(2," GETTING STARTED "),e.qZA(),e.YNc(3,Ll,1,0,"ng-template",null,30,e.W1O)),2&u){const c=e.MAs(4);e.Q6J("nzPopoverContent",c)}}function Z1(u,y){if(1&u&&(e.ynx(0),e._UZ(1,"nz-alert",26),e.YNc(2,kl,5,1,"ng-template",null,27,e.W1O),e.BQk()),2&u){const c=y.ngIf,m=e.MAs(3);e.xp6(1),e.Q6J("nzMessage",c)("nzAction",m)}}function K1(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"button",34),e.NdJ("click",function(){e.CHM(c);const G=e.oxw(3).ngrxLet,Ae=e.oxw();return e.KtG(Ae.cvcOnSelect.next(G))}),e._uU(1," Select this MP "),e.qZA()}}function gp(u,y){if(1&u&&(e._uU(0," Molecular Profile "),e.TgZ(1,"strong"),e._uU(2),e.qZA(),e._uU(3," found. ")),2&u){const c=e.oxw(3).ngrxLet;e.xp6(2),e.Oqu(c.name)}}function Qi(u,y){if(1&u&&(e.ynx(0),e._UZ(1,"nz-alert",31),e.YNc(2,K1,2,0,"ng-template",null,32,e.W1O),e.YNc(4,gp,4,1,"ng-template",null,33,e.W1O),e.BQk()),2&u){const c=e.MAs(3),m=e.MAs(5);e.xp6(1),e.Q6J("nzMessage",m)("nzAction",c)}}function Ad(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"button",37),e.NdJ("click",function(){e.CHM(c);const G=e.oxw(4);return e.KtG(G.onCreateNewMp$.next())}),e._uU(1," Create New MP "),e.qZA()}}function Yu(u,y){1&u&&e._uU(0," Molecular Profile not found, create it? ")}function Bs(u,y){if(1&u&&(e.ynx(0),e._UZ(1,"nz-alert",31),e.YNc(2,Ad,2,0,"ng-template",null,35,e.W1O),e.YNc(4,Yu,1,0,"ng-template",null,36,e.W1O),e.BQk()),2&u){const c=e.MAs(3),m=e.MAs(5);e.xp6(1),e.Q6J("nzMessage",m)("nzAction",c)}}function J1(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Qi,6,2,"ng-container",6),e.YNc(2,Bs,6,2,"ng-container",6),e.BQk()),2&u){const c=e.oxw().ngrxLet;e.xp6(1),e.Q6J("ngIf",void 0!==c),e.xp6(1),e.Q6J("ngIf",void 0===c)}}function vp(u,y){if(1&u&&(e.ynx(0),e.YNc(1,J1,3,2,"ng-container",6),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngIf",!e.lcZ(2,1,c.expressionError$)&&!e.lcZ(3,3,c.expressionMessage$))}}function Fd(u,y){if(1&u&&(e.TgZ(0,"button",40),e._UZ(1,"span",29),e._uU(2," SYNTAX ASSISTANCE "),e.qZA()),2&u){const c=e.oxw().helpContent;e.Q6J("nzPopoverContent",c)}}function Nd(u,y){if(1&u&&(e._UZ(0,"nz-alert",38),e.YNc(1,Fd,3,1,"ng-template",null,39,e.W1O)),2&u){const c=y.$implicit,m=e.MAs(2);e.Q6J("nzMessage",c.errorMessage)("nzAction",m)}}function Ca(u,y){1&u&&e.GkF(0)}function q1(u,y){1&u&&e._UZ(0,"cvc-mp-editor-popover-help",46)}const Hc=function(u,y){return{$implicit:u,helpContent:y}};function eh(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Ca,1,0,"ng-container",44),e.YNc(2,q1,1,0,"ng-template",null,45,e.W1O),e.BQk()),2&u){const c=e.MAs(3),m=e.oxw().ngIf;e.oxw();const G=e.MAs(14);e.xp6(1),e.Q6J("ngTemplateOutlet",G)("ngTemplateOutletContext",e.WLB(2,Hc,m,c))}}function za(u,y){1&u&&e.GkF(0)}function li(u,y){1&u&&e._UZ(0,"cvc-mp-editor-popover-help",48)}function $u(u,y){if(1&u&&(e.ynx(0),e.YNc(1,za,1,0,"ng-container",44),e.YNc(2,li,1,0,"ng-template",null,47,e.W1O),e.BQk()),2&u){const c=e.MAs(3),m=e.oxw().ngIf;e.oxw();const G=e.MAs(14);e.xp6(1),e.Q6J("ngTemplateOutlet",G)("ngTemplateOutletContext",e.WLB(2,Hc,m,c))}}function _p(u,y){1&u&&e.GkF(0)}function yp(u,y){1&u&&e._UZ(0,"cvc-mp-editor-popover-help",50)}function vi(u,y){if(1&u&&(e.ynx(0),e.YNc(1,_p,1,0,"ng-container",44),e.YNc(2,yp,1,0,"ng-template",null,49,e.W1O),e.BQk()),2&u){const c=e.MAs(3),m=e.oxw().ngIf;e.oxw();const G=e.MAs(14);e.xp6(1),e.Q6J("ngTemplateOutlet",G)("ngTemplateOutletContext",e.WLB(2,Hc,m,c))}}function Rl(u,y){1&u&&e.GkF(0)}function Cp(u,y){1&u&&e._UZ(0,"cvc-mp-editor-popover-help",52)}function Ld(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Rl,1,0,"ng-container",44),e.YNc(2,Cp,1,0,"ng-template",null,51,e.W1O),e.BQk()),2&u){const c=e.MAs(3),m=e.oxw().ngIf;e.oxw();const G=e.MAs(14);e.xp6(1),e.Q6J("ngTemplateOutlet",G)("ngTemplateOutletContext",e.WLB(2,Hc,m,c))}}function kd(u,y){1&u&&e.GkF(0)}function X1(u,y){1&u&&e._UZ(0,"cvc-mp-editor-popover-help",54)}function th(u,y){if(1&u&&(e.ynx(0),e.YNc(1,kd,1,0,"ng-container",44),e.YNc(2,X1,1,0,"ng-template",null,53,e.W1O),e.BQk()),2&u){const c=e.MAs(3),m=e.oxw().ngIf;e.oxw();const G=e.MAs(14);e.xp6(1),e.Q6J("ngTemplateOutlet",G)("ngTemplateOutletContext",e.WLB(2,Hc,m,c))}}function ed(u,y){1&u&&e.GkF(0)}function zp(u,y){1&u&&e._UZ(0,"cvc-mp-editor-popover-help",56)}function td(u,y){if(1&u&&(e.ynx(0),e.YNc(1,ed,1,0,"ng-container",44),e.YNc(2,zp,1,0,"ng-template",null,55,e.W1O),e.BQk()),2&u){const c=e.MAs(3),m=e.oxw().ngIf;e.oxw();const G=e.MAs(14);e.xp6(1),e.Q6J("ngTemplateOutlet",G)("ngTemplateOutletContext",e.WLB(2,Hc,m,c))}}function Rd(u,y){1&u&&e.GkF(0)}function Vd(u,y){1&u&&(e.ynx(0),e._UZ(1,"cvc-mp-editor-popover-help",58),e.BQk())}function Za(u,y){1&u&&(e.ynx(0),e._UZ(1,"cvc-mp-editor-popover-help",59),e.BQk())}function Tp(u,y){if(1&u&&(e.YNc(0,Vd,2,0,"ng-container",6),e.YNc(1,Za,2,0,"ng-container",6)),2&u){const c=e.oxw(2).ngIf;e.Q6J("ngIf",c.errorMessage.split(" ").includes("multiple")),e.xp6(1),e.Q6J("ngIf",c.errorMessage.split(" ").includes("found."))}}function nd(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Rd,1,0,"ng-container",44),e.YNc(2,Tp,2,2,"ng-template",null,57,e.W1O),e.BQk()),2&u){const c=e.MAs(3),m=e.oxw().ngIf;e.oxw();const G=e.MAs(14);e.xp6(1),e.Q6J("ngTemplateOutlet",G)("ngTemplateOutletContext",e.WLB(2,Hc,m,c))}}function Uu(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"pre"),e._uU(2),e.ALo(3,"json"),e.qZA(),e.BQk()),2&u){const c=e.oxw().ngIf;e.xp6(2),e.hij("              ",e.lcZ(3,1,c),"\n            ")}}function T(u,y){if(1&u&&(e.ynx(0)(1,41),e.YNc(2,eh,4,5,"ng-container",42),e.YNc(3,$u,4,5,"ng-container",42),e.YNc(4,vi,4,5,"ng-container",42),e.YNc(5,Ld,4,5,"ng-container",42),e.YNc(6,th,4,5,"ng-container",42),e.YNc(7,td,4,5,"ng-container",42),e.YNc(8,nd,4,5,"ng-container",42),e.YNc(9,Uu,4,3,"ng-container",43),e.BQk()()),2&u){const c=y.ngIf;e.xp6(1),e.Q6J("ngSwitch",c.errorType),e.xp6(1),e.Q6J("ngSwitchCase","invalidToken"),e.xp6(1),e.Q6J("ngSwitchCase","trailingBoolean"),e.xp6(1),e.Q6J("ngSwitchCase","initialBoolean"),e.xp6(1),e.Q6J("ngSwitchCase","multipleBoolean"),e.xp6(1),e.Q6J("ngSwitchCase","incompleteExpression"),e.xp6(1),e.Q6J("ngSwitchCase","incompleteNOT"),e.xp6(1),e.Q6J("ngSwitchCase","queryError")}}function p(u,y){1&u&&(e.TgZ(0,"span",25),e._uU(1," Append: "),e.qZA())}function h(u,y){if(1&u&&(e.TgZ(0,"button",60)(1,"strong"),e._uU(2,"Variant"),e.qZA()()),2&u){e.oxw();const c=e.MAs(37);e.Q6J("nzPopoverContent",c)}}function g(u,y){if(1&u&&(e.TgZ(0,"button",61)(1,"strong"),e._uU(2,"NOT Variant"),e.qZA()()),2&u){e.oxw();const c=e.MAs(39);e.Q6J("nzPopoverContent",c)}}function z(u,y){1&u&&(e.TgZ(0,"span",62),e._uU(1," | "),e.qZA())}function E(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"button",63),e.NdJ("click",function(){e.CHM(c);const G=e.oxw();return e.KtG(G.onAppendInput$.next("AND"))}),e.TgZ(1,"strong"),e._uU(2,"AND"),e.qZA()()}}function q(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"button",63),e.NdJ("click",function(){e.CHM(c);const G=e.oxw();return e.KtG(G.onAppendInput$.next("OR"))}),e.TgZ(1,"strong"),e._uU(2,"OR"),e.qZA()()}}function _e(u,y){1&u&&(e.TgZ(0,"span",62),e._uU(1," | "),e.qZA())}function xe(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"button",63),e.NdJ("click",function(){e.CHM(c);const G=e.oxw();return e.KtG(G.onAppendInput$.next("("))}),e.TgZ(1,"strong"),e._uU(2,"("),e.qZA()()}}function Ke(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"button",63),e.NdJ("click",function(){e.CHM(c);const G=e.oxw();return e.KtG(G.onAppendInput$.next(")"))}),e.TgZ(1,"strong"),e._uU(2,")"),e.qZA()()}}const ft=function(){return[6,8]};function xt(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",64)(1,"nz-row",2)(2,"nz-col",3)(3,"p",65),e._uU(4," Select a Gene and Variant to append its #VID. "),e.qZA()(),e.TgZ(5,"nz-col",3)(6,"cvc-mp-finder",66),e.NdJ("cvcOnVariantSelect",function(G){e.CHM(c);const Ae=e.oxw();return e.KtG(Ae.onVariantSelect$.next({variant:G,prependNot:!1}))}),e.qZA()()()()}2&u&&(e.xp6(1),e.Q6J("nzGutter",e.DdM(1,ft)))}function $t(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",64)(1,"nz-row",2)(2,"nz-col",3)(3,"p",65),e._uU(4," Select a Gene and Variant to append its #VID, prepended with NOT boolean. "),e.qZA()(),e.TgZ(5,"nz-col",3)(6,"cvc-mp-finder",66),e.NdJ("cvcOnVariantSelect",function(G){e.CHM(c);const Ae=e.oxw();return e.KtG(Ae.onVariantSelect$.next({variant:G,prependNot:!0}))}),e.qZA()()()()}2&u&&(e.xp6(1),e.Q6J("nzGutter",e.DdM(1,ft)))}function Gt(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"nz-list-item")(1,"nz-list-item-meta")(2,"nz-list-item-meta-title"),e._UZ(3,"cvc-entity-tag",70),e.qZA(),e.TgZ(4,"nz-list-item-meta-description"),e._uU(5),e.qZA()(),e.TgZ(6,"ul",71)(7,"nz-list-item-action")(8,"button",72),e.NdJ("click",function(){const Ae=e.CHM(c).$implicit,Dt=e.oxw(2);return e.KtG(Dt.onSelectExample$.next(Ae))}),e._uU(9," Select "),e.qZA()()()()}if(2&u){const c=y.$implicit;e.xp6(3),e.Q6J("cvcLinkableEntity",c.mp),e.xp6(2),e.hij(" ",c.description," ")}}function Kt(u,y){if(1&u&&(e.TgZ(0,"div",67)(1,"nz-list",68),e.YNc(2,Gt,10,2,"nz-list-item",69),e.qZA()()),2&u){const c=e.oxw();e.xp6(2),e.Q6J("ngForOf",c.exampleExpressions)}}const Qt=function(u){return{active:u}};let hn=((Bc=class{constructor(y,c,m,G){this.previewMpGql=y,this.createMolecularProfileGql=c,this.mpEditorPrepopulate=m,this.networkErrorService=G,this.cvcOnSelect=new e.vpe,this.expressionMessages={initial:"Use the editor below to construct a molecular profile."},this.exampleExpressions=[{mp:{__typename:"MolecularProfile",id:9999,name:"BRAF V600E AND EGFR L858R AND EGFR T790M"},expression:"#VID12 AND #VID33 AND #VID34",description:"BRAF V600E, EGFR L858R, and EGFR T790M must all be observed."},{mp:{__typename:"MolecularProfile",id:9999,name:"BRAF V600E AND NOT EGFR L858R"},expression:"#VID12 AND NOT #VID33",description:"BRAF V600E must be observed and EGFR L858R must be absent."},{mp:{__typename:"MolecularProfile",id:9999,name:"BRAF V600E OR EGFR L858R OR EGFR T790M"},expression:"#VID12 OR #VID33 OR #VID34",description:"Either BRAF V600E, or EGFR L858R, or EGFR T790M must be observed."},{mp:{__typename:"MolecularProfile",id:9999,name:"BRAF V600E AND (EGFR L858R OR EGFR T790M)"},expression:"#VID12 AND (#VID33 OR #VID34)",description:"BRAF V600E must be observed and either EGFR L858R or EGFR T790M must be observed."},{mp:{__typename:"MolecularProfile",id:9999,name:"NOT KIT D816V"},expression:"NOT #VID4353",description:"KIT D816V must be absent."}],this.createMolecularProfileMutator=new qo.U(this.networkErrorService),this.onInputChange$=new ct.X(void 0),this.onAppendInput$=new Xe.x,this.onVariantSelect$=new Xe.x,this.onCreateNewMp$=new Xe.x,this.onSelectExample$=new Xe.x,this.inputValue$=new ct.X(""),this.expressionError$=new ct.X(void 0),this.expressionHelp$=new ct.X(void 0),this.expressionMessage$=new ct.X(this.expressionMessages.initial),this.expressionSegment$=new Xe.x,this.existingMp$=new Xe.x}ngAfterViewInit(){this.onInputChange$.pipe((0,yo.b)(250),(0,Fo.b)(y=>{y||this.expressionSegment$.next(void 0)}),(0,qe.h)(xo.ep),(0,Fo.b)(y=>{0===y.length&&(this.expressionMessage$.next(this.expressionMessages.initial),this.expressionError$.next(void 0))}),(0,qe.h)(y=>y.length>0),(0,qe.h)(y=>" "!==y[y.length-1]),(0,Zt.U)(y=>{let c=$1(y);return"errorMessage"in c?c:this.previewQueryRef.refetch({mpStructure:c})}),(0,ve.t)(this)).subscribe(y=>{if(this.isMpParseError(y)){const c=y;this.expressionMessage$.next(void 0),this.expressionError$.next(c),this.expressionSegment$.next(void 0)}else y.then(({data:m,errors:G})=>{if(G)this.expressionMessage$.next(void 0),this.expressionError$.next({errorType:"queryError",errorMessage:G.map(Ae=>Ae.message).join("\n")}),this.expressionSegment$.next(void 0);else{this.expressionSegment$.next(m.previewMolecularProfileName.segments),this.expressionMessage$.next(void 0),this.expressionError$.next(void 0);this.existingMp$.next(m.previewMolecularProfileName.existingMolecularProfile||void 0)}})}),this.onAppendInput$.pipe((0,ve.t)(this)).subscribe(y=>{if(this.expressionEditor){const c=this.expressionEditor.nativeElement,G=`${c.value}${/\s+$/.test(y)?y:" "+y}`;c.value=G,this.inputValue$.next(G),this.onInputChange$.next(G)}}),this.onSelectExample$.pipe((0,ve.t)(this)).subscribe(y=>{this.expressionEditor&&(this.expressionEditor.nativeElement.value=y.expression,this.inputValue$.next(y.expression),this.onInputChange$.next(y.expression))}),this.onVariantSelect$.pipe((0,it.M)(this.onInputChange$),(0,Zt.U)(([y,c])=>{const m=`${y.prependNot?"NOT ":""}#VID${y.variant.id}`;return c&&0!=c.trim().length?`${c.trim()} ${m}`:m}),(0,ve.t)(this)).subscribe(y=>{this.inputValue$.next(y),this.onInputChange$.next(y)}),this.previewQueryRef=this.previewMpGql.watch({}),this.previewMpName$=this.previewQueryRef.valueChanges.pipe((0,Cn.j)("data","previewMolecularProfileName"),(0,qe.h)(xo.ep),(0,Zt.U)(y=>y.segments),(0,ve.t)(this)),this.previewMpAlreadyExists$=this.previewQueryRef.valueChanges.pipe((0,Cn.j)("data","previewMolecularProfileName"),(0,qe.h)(xo.ep),(0,Zt.U)(y=>y.existingMolecularProfile),(0,ve.t)(this)),this.previewDeprecatedVariants$=this.previewQueryRef.valueChanges.pipe((0,Cn.j)("data","previewMolecularProfileName"),(0,qe.h)(xo.ep),(0,Zt.U)(y=>y.deprecatedVariants),(0,ve.t)(this)),this.onCreateNewMp$.pipe((0,it.M)(this.onInputChange$),(0,ve.t)(this)).subscribe(([y,c])=>{if(!c||0===c.length)return;let m=$1(c);"errorMessage"in m||(this.state=this.createMolecularProfileMutator.mutate(this.createMolecularProfileGql,{mpStructure:m},{},G=>{setTimeout(()=>{G.createMolecularProfile&&this.cvcOnSelect.next(G.createMolecularProfile.molecularProfile)},1e3)}))})}isMpParseError(y){return void 0!==y.errorMessage}prepopulateMp(y){if(!y)return this.expressionSegment$.next(void 0),this.expressionMessage$.next(this.expressionMessages.initial),void this.inputValue$.next("");yu(this.mpEditorPrepopulate.fetch({mpId:y},{fetchPolicy:"cache-first"})).then(({data:c})=>{if(!c?.molecularProfile?.id)return void console.error(`MpExpressionEditor could not fetch MolecularProfile:${y} to prepolate editor fields.`);const m=c.molecularProfile.rawName.replace(/#GID(\d+)/g,"").trim();this.inputValue$.next(m),this.onInputChange$.next(m)})}ngOnChanges(y){y.cvcPrepopulateWithId&&this.prepopulateMp(y.cvcPrepopulateWithId.currentValue)}}).\u0275fac=function(y){return new(y||Bc)(e.Y36(Fn.mki),e.Y36(Fn.zpu),e.Y36(Fn.vjc),e.Y36(Vo.Y))},Bc.\u0275cmp=e.Xpm({type:Bc,selectors:[["cvc-mp-expression-editor"]],viewQuery:function(y,c){if(1&y&&e.Gf(Hu,5),2&y){let m;e.iGM(m=e.CRH())&&(c.expressionEditor=m.first)}},inputs:{cvcPrepopulateWithId:"cvcPrepopulateWithId"},outputs:{cvcOnSelect:"cvcOnSelect"},features:[e.TTD],decls:42,vars:23,consts:[["entityType","Molecular Profile",3,"mutationState","successMessage"],["success",""],[3,"nzGutter"],["nzSpan","24"],[1,"expression-preview",3,"ngClass"],[4,"ngrxLet"],[4,"ngIf"],["errorAlert",""],["nz-input","","rows","1","placeholder","Enter or edit a Molecular Expression here.",2,"width","100%",3,"ngModel","ngModelChange"],["expressionEditor",""],[1,"btn-row"],["nzFlex","80px"],["nzBlock","","nz-button","","nzType","primary","nzShape","round","nzSize","small","nz-popover","","nzPopoverTitle","Select a Profile to view its expression","nzPopoverTrigger","click","nzPopoverPlacement","bottomLeft",3,"nzPopoverContent"],["nzFlex","auto",2,"text-align","right"],["nz-typography","","nzType","secondary",4,"nzSpaceItem"],["type","button","nz-button","","nz-popover","","nzPopoverTitle","Append Variant #VID","nzPopoverTrigger","click","nzSize","small","nzShape","round","nzType","primary","nzPopoverPlacement","bottom",3,"nzPopoverContent",4,"nzSpaceItem"],["type","button","nz-button","","nz-popover","","nzPopoverTitle","Append Variant NOT #VID","nzPopoverTrigger","click","nzSize","small","nzShape","round","nzType","primary","nzPopoverPlacement","bottom",3,"nzPopoverContent",4,"nzSpaceItem"],["class","btn-divider",4,"nzSpaceItem"],["type","button","nz-button","","nzType","primary","nzSize","small","nzShape","round",3,"click",4,"nzSpaceItem"],["appendVariant",""],["appendNotVariant",""],["expressionExamples",""],[3,"nameSegments",4,"ngIf"],["nz-typography","","nzType","secondary",4,"ngIf"],[3,"nameSegments"],["nz-typography","","nzType","secondary"],["nzType","info","nzShowIcon","",3,"nzMessage","nzAction"],["messageAction",""],["type","button","nz-button","","nzType","dashed","nzSize","small","nzShape","round","nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverContent"],["nz-icon","","nzType","question-circle","nzTheme","fill"],["gettingStartedHelp",""],["nzType","success","nzShowIcon","",3,"nzMessage","nzAction"],["selectAction",""],["foundMessage",""],["type","button","nz-button","","nzType","primary","nzSize","small","nzBlock","",3,"click"],["createAction",""],["createMessage",""],["type","button","nz-button","","nzSize","small","nzType","primary","nzBlock","",3,"click"],["nzType","error","nzShowIcon","",3,"nzMessage","nzAction"],["errorAction",""],["nz-button","","nzDanger","","nzType","text","nzSize","small","nzShape","round","nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverContent"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["invalidTokenHelp",""],["cvcErrorType","invalidToken"],["trailingBooleanHelp",""],["cvcErrorType","trailingBoolean"],["initialBooleanHelp",""],["cvcErrorType","initialBoolean"],["multipleBooleanHelp",""],["cvcErrorType","multipleBoolean"],["incompleteExpressionHelp",""],["cvcErrorType","incompleteExpression"],["incompleteNOTHelp",""],["cvcErrorType","incompleteNOT"],["queryErrorHelp",""],["cvcErrorType","identicalVariants"],["cvcErrorType","unknownVariant"],["type","button","nz-button","","nz-popover","","nzPopoverTitle","Append Variant #VID","nzPopoverTrigger","click","nzSize","small","nzShape","round","nzType","primary","nzPopoverPlacement","bottom",3,"nzPopoverContent"],["type","button","nz-button","","nz-popover","","nzPopoverTitle","Append Variant NOT #VID","nzPopoverTrigger","click","nzSize","small","nzShape","round","nzType","primary","nzPopoverPlacement","bottom",3,"nzPopoverContent"],[1,"btn-divider"],["type","button","nz-button","","nzType","primary","nzSize","small","nzShape","round",3,"click"],[1,"append-popover-contents"],["nz-typography","","nzType","secondary",2,"margin","0","padding-bottom","2px"],[3,"cvcOnVariantSelect"],[2,"min-width","525px","margin","-8px -12px"],["nzSize","small","nzItemLayout","horizontal"],[4,"ngFor","ngForOf"],[3,"cvcLinkableEntity"],["nz-list-item-actions",""],["type","button","nz-button","","nzType","primary","nzSize","small",3,"click"]],template:function(y,c){if(1&y&&(e.TgZ(0,"cvc-form-submission-status-display",0),e.YNc(1,mp,1,0,"ng-template",null,1,e.W1O),e.TgZ(3,"nz-row",2)(4,"nz-col",3)(5,"div",4),e.ALo(6,"ngrxPush"),e.YNc(7,W1,3,2,"ng-container",5),e.ALo(8,"ngrxPush"),e.qZA()(),e.TgZ(9,"nz-col",3),e.YNc(10,Z1,4,2,"ng-container",6),e.ALo(11,"ngrxPush"),e.YNc(12,vp,4,5,"ng-container",5),e.YNc(13,Nd,3,2,"ng-template",null,7,e.W1O),e.YNc(15,T,10,8,"ng-container",6),e.ALo(16,"ngrxPush"),e.qZA(),e.TgZ(17,"nz-col",3)(18,"textarea",8,9),e.NdJ("ngModelChange",function(G){return c.onInputChange$.next(G)}),e.ALo(20,"ngrxPush"),e.qZA()()(),e.TgZ(21,"nz-row",10)(22,"nz-col",11)(23,"button",12),e._uU(24," Examples "),e.qZA()(),e.TgZ(25,"nz-col",13)(26,"nz-space"),e.YNc(27,p,2,0,"span",14),e.YNc(28,h,3,1,"button",15),e.YNc(29,g,3,1,"button",16),e.YNc(30,z,2,0,"span",17),e.YNc(31,E,3,0,"button",18),e.YNc(32,q,3,0,"button",18),e.YNc(33,_e,2,0,"span",17),e.YNc(34,xe,3,0,"button",18),e.YNc(35,Ke,3,0,"button",18),e.qZA()(),e.YNc(36,xt,7,2,"ng-template",null,19,e.W1O),e.YNc(38,$t,7,2,"ng-template",null,20,e.W1O),e.YNc(40,Kt,3,1,"ng-template",null,21,e.W1O),e.qZA()()),2&y){const m=e.MAs(2),G=e.MAs(41);e.Q6J("mutationState",c.state)("successMessage",m),e.xp6(3),e.Q6J("nzGutter",e.DdM(20,ft)),e.xp6(2),e.Q6J("ngClass",e.VKq(21,Qt,void 0!==e.lcZ(6,10,c.expressionSegment$))),e.xp6(2),e.Q6J("ngrxLet",e.lcZ(8,12,c.expressionSegment$)),e.xp6(3),e.Q6J("ngIf",e.lcZ(11,14,c.expressionMessage$)),e.xp6(2),e.Q6J("ngrxLet",c.existingMp$),e.xp6(3),e.Q6J("ngIf",e.lcZ(16,16,c.expressionError$)),e.xp6(3),e.Q6J("ngModel",e.lcZ(20,18,c.inputValue$)),e.xp6(5),e.Q6J("nzPopoverContent",G)}},dependencies:[M.mk,M.sg,M.O5,M.tP,M.RF,M.n9,M.ED,t.Fj,t.JJ,t.On,R.eJ,Xt.r,Vn.ix,Zo.w,Ko.dQ,st.Ls,je.Zp,pe.t3,pe.SK,Tt.NU,Tt.$1,me.ZU,Xn.lU,_r.n_,_r.AA,_r.yi,_r.IO,_r.Pb,_r.nk,_r.KC,_i.F,Nl.C,Po.J,ss,Q1,M.Ts,R.fM],styles:["[_nghost-%COMP%]{display:block;background-color:#f6f6f6;border:1px solid #dedede;border-radius:4px;padding:8px}.expression-preview[_ngcontent-%COMP%]{width:100%;padding:8px;border:1px solid #dedede;border-radius:4px}.expression-preview.active[_ngcontent-%COMP%]{background-color:#fff}.append-popover-contents[_ngcontent-%COMP%]{min-width:450px}.help-content[_ngcontent-%COMP%]{max-width:500px}.btn-row[_ngcontent-%COMP%]{margin-top:10px;flex-wrap:nowrap}.btn-row[_ngcontent-%COMP%]   .btn-divider[_ngcontent-%COMP%]{color:#aaa}"],changeDetection:0}),Bc);hn=(0,Ce.gn)([(0,ve.c)()],hn);const En=["optionTemplates"];function Yn(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"cvc-mp-finder",11),e.NdJ("cvcOnSelect",function(G){e.CHM(c);const Ae=e.oxw(2);return e.KtG(Ae.onMpSelect$.next(G))}),e.qZA()}}function on(u,y){1&u&&(e.TgZ(0,"div",12),e._uU(1," \xa0 "),e.TgZ(2,"span",13)(3,"i"),e._uU(4,"Select or create a Molecular Profile with the expression editor "),e.qZA()()())}function gn(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",14)(1,"cvc-entity-select",15),e.NdJ("cvcOnSearch",function(G){e.CHM(c);const Ae=e.oxw(2);return e.KtG(Ae.onSearch$.next(G))})("cvcOnModelChange",function(G){e.CHM(c);const Ae=e.oxw(2);return e.KtG(Ae.props.change&&Ae.props.change(Ae.field,G))}),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.qZA()()}if(2&u){const c=e.oxw(2),m=e.MAs(13);e.xp6(1),e.Q6J("cvcSelectMode",c.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",m)("cvcFormControl",c.formControl)("cvcFormlyAttributes",c.field)("cvcEntityName",c.props.entityName)("cvcPlaceholder",c.props.placeholder)("cvcResults",e.lcZ(2,15,c.result$))("cvcDisabled",c.props.disabled)("cvcAllowClear",!1)("cvcOptions",e.lcZ(3,17,c.selectOption$))("cvcShowError",c.showError)("cvcLoading",e.lcZ(4,19,c.isLoading$))("cvcBorderless",!0)("cvcSuffixIcon",null)("cvcShowArrow",!1)}}function $n(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Yn,1,0,"cvc-mp-finder",8),e.YNc(2,on,5,0,"div",9),e.YNc(3,gn,5,21,"div",10),e.BQk()),2&u){const c=y.ngrxLet,m=e.oxw();e.xp6(1),e.Q6J("ngIf",c.showFinder&&!m.editorOpen),e.xp6(1),e.Q6J("ngIf",m.editorOpen),e.xp6(1),e.Q6J("ngIf",c.showSelect&&!m.editorOpen)}}function Ln(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"nz-col",16)(1,"cvc-mp-expression-editor",17),e.NdJ("cvcOnSelect",function(G){e.CHM(c);const Ae=e.oxw();return e.KtG(Ae.onMpSelect$.next(G))}),e.ALo(2,"ngrxPush"),e.qZA()()}if(2&u){const c=e.oxw();e.xp6(1),e.Q6J("cvcPrepopulateWithId",e.lcZ(2,1,c.onMpId$))}}function ao(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"em"),e._UZ(2,"span",24),e.ALo(3,"highlightTypeahead"),e.qZA(),e.BQk()),2&u){const c=e.oxw(2).$implicit,m=e.oxw().ngrxLet;e.xp6(2),e.Q6J("innerHtml",e.xi3(3,1,c.molecularProfileAliases.join(", "),m),e.oJD)}}function So(u,y){1&u&&e._uU(0,"--")}function xi(u,y){if(1&u&&(e._UZ(0,"cvc-entity-tag",20),e.TgZ(1,"span",21),e._uU(2," Aliases: "),e.YNc(3,ao,4,4,"ng-container",22),e.YNc(4,So,1,0,"ng-template",null,23,e.W1O),e.qZA()),2&u){const c=e.MAs(5),m=e.oxw().$implicit,G=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",m.__typename+":"+m.id)("cvcEmphasize",G),e.xp6(3),e.Q6J("ngIf",m.molecularProfileAliases.length>0)("ngIfElse",c)}}function Si(u,y){1&u&&(e.ynx(0),e.YNc(1,xi,6,5,"ng-template",null,19,e.W1O),e.BQk())}function as(u,y){if(1&u&&(e.ynx(0),e.YNc(1,Si,3,0,"ng-container",18),e.ALo(2,"ngrxPush"),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function Hi(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",25)(1,"cvc-entity-tag",26),e.NdJ("cvcOnClose",function(){const Ae=e.CHM(c).$implicit,Dt=e.oxw();return e.KtG(Dt.onTagClose$.next(Ae.nzValue))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","MolecularProfile:"+c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}const yr=function(){return[8,12]},ju=function(u,y){return{show:u,hide:y}},Yc=kt(at(),oi());let oo=(()=>{class u extends Yc{constructor(c,m,G,Ae){super(),this.taq=c,this.tq=m,this.changeDetectorRef=G,this.apollo=Ae,this.editorOpen=!1,this.defaultOptions={props:{label:"Molecular Profile",placeholder:"Search Molecular Profiles",isMultiSelect:!1,description:"Select a Gene and Variant to specify a simple Molecular Profile.",extraType:"prompt",entityName:{singular:"Molecular Profile",plural:"Molecular Profiles"},minSearchStrLength:1}},this.onMpSelect$=new ct.X(void 0),this.onMpId$=new Ao.t,this.onShowExpClick$=new Xe.x,this.showExp$=this.onShowExpClick$.pipe((0,to.R)((Dt,Mn)=>!Dt,!1),(0,Fo.b)(Dt=>this.editorOpen=Dt)),this.selectDisplay$=new ct.X({showFinder:!0,showSelect:!1})}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.initialDescription=this.props.description,this.onValueChange$.pipe((0,ve.t)(this)).subscribe(c=>{const m=void 0!==c;this.selectDisplay$.next({showFinder:!m,showSelect:m}),this.onMpId$.next(c),this.props.description=c?void 0:this.initialDescription}),this.onMpSelect$.pipe((0,ve.t)(this)).subscribe(c=>{c?(this.selectOption$.next([{label:c.name,value:c.id}]),this.editorOpen&&this.onShowExpClick$.next(),this.cdr.detectChanges(),this.field.formControl.setValue(c.id)):this.selectDisplay$.next({showFinder:!0,showSelect:!1})})}configureStateConnections(){}getTypeaheadVarsFn(c,m){return{name:c,geneId:m}}getTypeaheadResultsFn(c){return c.data.molecularProfiles.nodes}getTagQueryVarsFn(c){return{molecularProfileId:c}}getTagQueryResultsFn(c){return c.data.molecularProfile}getSelectedItemOptionFn(c){return{value:c.id,label:c.name}}getSelectOptionsFn(c,m){return c.map((G,Ae)=>({label:m.get(Ae)||G.name,value:G.id}))}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(Fn.F4e),e.Y36(Fn.dGO),e.Y36(e.sBO),e.Y36(_o._M))},u.\u0275cmp=e.Xpm({type:u,selectors:[["ng-component"]],viewQuery:function(c,m){if(1&c&&e.Gf(En,5,e.Rgc),2&c){let G;e.iGM(G=e.CRH())&&(m.optionTemplates=G)}},features:[e.qOj],decls:14,vars:16,consts:[[3,"nzGutter"],["nzFlex","auto"],[4,"ngrxLet"],["nzFlex","50px"],["type","button","nz-button","","nzBlock","","nz-tooltip","","nzTooltipTitle","Add/Edit Complex MP Expression",1,"expression-button",3,"click"],["nz-icon","",3,"ngClass","nzType"],["nzSpan","24","class","editor-drawer",4,"ngIf"],["selectedTemplate",""],[3,"cvcOnSelect",4,"ngIf"],["class","editor-message",4,"ngIf"],["style","display: inline-block",4,"ngIf"],[3,"cvcOnSelect"],[1,"editor-message"],["nz-typography","","nzEllipsis","","nzType","secondary"],[2,"display","inline-block"],[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcDisabled","cvcAllowClear","cvcOptions","cvcShowError","cvcLoading","cvcBorderless","cvcSuffixIcon","cvcShowArrow","cvcOnSearch","cvcOnModelChange"],["nzSpan","24",1,"editor-drawer"],[3,"cvcPrepopulateWithId","cvcOnSelect"],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf","ngIfElse"],["noAliases",""],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(c,m){1&c&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1),e.YNc(2,$n,4,3,"ng-container",2),e.qZA(),e.TgZ(3,"nz-col",3)(4,"button",4),e.NdJ("click",function(){return m.onShowExpClick$.next()}),e._UZ(5,"span",5),e.ALo(6,"ngrxPush"),e.ALo(7,"ngrxPush"),e._uU(8,"Editor "),e.qZA()(),e.YNc(9,Ln,3,3,"nz-col",6),e.ALo(10,"ngrxPush"),e.qZA(),e.YNc(11,as,3,3,"ng-container",2),e.YNc(12,Hi,2,3,"ng-template",null,7,e.W1O)),2&c&&(e.Q6J("nzGutter",e.DdM(12,yr)),e.xp6(2),e.Q6J("ngrxLet",m.selectDisplay$),e.xp6(3),e.Q6J("ngClass",e.WLB(13,ju,e.lcZ(6,6,m.showExp$),!e.lcZ(7,8,m.showExp$)))("nzType","caret-right"),e.xp6(4),e.Q6J("ngIf",e.lcZ(10,10,m.showExp$)),e.xp6(2),e.Q6J("ngrxLet",m.onSearch$))},dependencies:[M.mk,M.sg,M.O5,R.eJ,Vn.ix,Zo.w,Ko.dQ,st.Ls,pe.t3,pe.SK,me.ZU,Ye.SY,Oo,Po.J,hn,ss,R.fM,J.A],styles:["form[_ngcontent-%COMP%]   span.hide[_ngcontent-%COMP%], .expression-button[_ngcontent-%COMP%]   span.hide[_ngcontent-%COMP%]{transform:rotate(0);transition:transform .2s linear}form[_ngcontent-%COMP%]   span.show[_ngcontent-%COMP%], .expression-button[_ngcontent-%COMP%]   span.show[_ngcontent-%COMP%]{transform:rotate(90deg);transition:transform .2s linear}.editor-message[_ngcontent-%COMP%]{padding:3px;background-color:#f5f5f5;cursor:default;border-radius:2px}"],data:{animation:[xd.mF,xd.MC]},changeDetection:0}),u})();const po={types:[{name:"molecular-profile-select",wrappers:["form-field"],component:oo},{name:"molecular-profile-multi-select",wrappers:["form-field"],component:oo,defaultOptions:{props:{label:"Molecular Profiles",isMultiSelect:!0}}}]};let Mo=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.u5,t.UX,v.X0.forChild(po),Xt.L,Vn.sL,Ne.LV,vo.Qp,st.PV,je.o7,pe.Jb,Tt.zf,s.U5,Te.ic,me.ZJ,Ye.cg,Xn.$6,Tt.zf,Jt.Wr,_r.Ph,zn.g,Vc.r,Bt,Un,Ve.s,$e.x]}),u})();var Jo=a(3702);const Yi=["optionTemplates"];function Hs(u,y){if(1&u&&(e.TgZ(0,"nz-tag")(1,"strong"),e._uU(2),e.ALo(3,"formatAmp"),e.qZA()(),e.TgZ(4,"span",4),e._uU(5),e.qZA()),2&u){const c=e.oxw().$implicit,m=e.oxw();e.xp6(2),e.Oqu(e.xi3(3,2,c,"verbose")),e.xp6(3),e.Oqu(m.descriptionForCategory(c))}}function br(u,y){1&u&&(e.ynx(0),e.YNc(1,Hs,6,5,"ng-template",null,3,e.W1O),e.BQk())}function Ms(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"nz-tag",8),e.NdJ("nzOnClose",function(G){e.CHM(c);const Ae=e.oxw(2);return e.KtG(Ae.onTagClose$.next(G))}),e.TgZ(1,"strong"),e._uU(2),e.ALo(3,"formatAmp"),e.qZA()()}if(2&u){const c=e.oxw().$implicit;e.xp6(2),e.Oqu(e.xi3(3,1,c.nzValue,"verbose"))}}function Di(u,y){if(1&u&&(e.ynx(0),e._uU(1),e.ALo(2,"formatAmp"),e.BQk()),2&u){const c=e.oxw().$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,c.nzValue,"verbose")," ")}}function Bd(u,y){if(1&u&&(e.TgZ(0,"div",5),e.YNc(1,Ms,4,4,"nz-tag",6),e.YNc(2,Di,3,4,"ng-container",7),e.qZA()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngIf",!c.props.isMultiSelect),e.xp6(1),e.Q6J("ngIf",c.props.isMultiSelect)}}const Hd=new Map([[Fn.iwm.Na,"Not Applicable"],[Fn.iwm.TierILevelA,"Biomarkers showing therapeutic response to FDA-approved therapy, or therapy included in professional guidelines."],[Fn.iwm.TierILevelB,"Biomarkers showing therapeutic response based on well-powered studies with consensus from experts in the field."],[Fn.iwm.TierIiLevelC,"FDA-approved therapies for different tumor types or investigational therapies, or multiple small published studies with some consensus."],[Fn.iwm.TierIiLevelD,"Biomarkers that show plausible therapeutic significance based on preclinical studies."],[Fn.iwm.TierIii,"Somatic variants in cancer genes reported in the same or different cancer types with unknown clinical significance and variants in cancer genes that have not been reported in any cancers."],[Fn.iwm.TierIv,"Benign or likely benign germline variants observed at significant allele frequencies in the general population or specific subpopulation."]]),ur=kt(at(),Ot());let Ys=(()=>{class u extends ur{constructor(c){super(),this.cdr=c,this.defaultOptions={props:{label:"AMP/ASCO/CAP Category",required:!1,isMultiSelect:!1,placeholder:"Select AMP/ASCO/CAP Category"}},this.ampCategoryEnum$=new ct.X([])}descriptionForCategory(c){return Hd.get(c)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.ampCategoryEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr}),this.configurePlaceholder()}configureStateConnections(){this.props.tooltip="If applicable, please provide the AMP/ASCO/CAP somatic variant classification.",this.ampCategoryEnum$.next((0,To.o6)(Fn.iwm).map(c=>c)),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,Zt.U)(c=>c.map(m=>m))),this.state&&(this.state.requires.requiresAmpLevel$?this.onRequiresAmpCategory$=this.state.requires.requiresAmpLevel$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresAmpLevel$ subject to attach.`),this.onValueChange$.pipe((0,ve.t)(this)).subscribe(c=>{c?(this.props.extraType=void 0,this.props.description=Hd.get(c)):this.props.description="Select an Assertion Type to select its AMP Category"}))}configurePlaceholder(){this.placeholder$=new ct.X(this.props.placeholder),this.onRequiresAmpCategory$&&this.onRequiresAmpCategory$.pipe((0,j.x)(),(0,ve.t)(this)).subscribe(c=>{this.props.extraType=void 0,c?(this.formControl.value||(this.props.extraType="description",this.props.description='Please provide the AMP/ASCO/CAP <a href="https://pubmed.ncbi.nlm.nih.gov/27993330/" target="_blank">somatic variant classification</a>.'),this.props.required=!0,this.props.disabled=!1):(this.props.required=!1,this.props.disabled=!0,this.resetField()),this.cdr.markForCheck()})}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-amp-category-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(Yi,5,e.Rgc),2&c){let G;e.iGM(G=e.CRH())&&(m.optionTemplates=G)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],["nz-typography","","nzType","secondary"],[1,"ant-select-selection-item-content"],["nzMode","closeable",3,"nzOnClose",4,"ngIf"],[4,"ngIf"],["nzMode","closeable",3,"nzOnClose"]],template:function(c,m){if(1&c&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,br,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,Bd,3,2,"ng-template",null,2,e.W1O)),2&c){const G=e.MAs(6);e.Q6J("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,m.placeholder$))("cvcCustomTemplate",G)("cvcOptions",e.lcZ(2,11,m.selectOption$))("cvcShowError",m.showError)("cvcDisabled",m.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,m.ampCategoryEnum$))}},dependencies:[M.sg,M.O5,wt.j,me.ZU,K,R.fM,Jo.t]}),u})();const qr={types:[{name:"amp-category-select",wrappers:["form-field"],component:Ys},{name:"amp-category-multi-select",wrappers:["form-field"],component:Ys,defaultOptions:{props:{label:"AMP/ASCO/CAP Categories",isMultiSelect:!0}}}]};let Gu=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(qr),wt.X,me.ZJ,Ve.s,Bt,De]}),u})();const Yd=["optionTemplates"];function Zh(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"em")(2,"span",6),e._uU(3),e.qZA()(),e.BQk()),2&u){const c=e.oxw(2).$implicit;e.xp6(3),e.Oqu(c.description)}}function Mp(u,y){if(1&u&&(e.TgZ(0,"nz-tag",5),e._uU(1),e.qZA(),e.TgZ(2,"span",6),e.YNc(3,Zh,4,1,"ng-container",7),e.qZA()),2&u){const c=e.oxw().$implicit;e.xp6(1),e.Oqu(c.code),e.xp6(2),e.Q6J("ngIf",c.description)}}function bp(u,y){1&u&&(e.ynx(0),e.YNc(1,Mp,4,2,"ng-template",null,4,e.W1O),e.BQk())}function Kh(u,y){if(1&u&&(e.ynx(0),e.YNc(1,bp,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function nh(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",8)(1,"cvc-entity-tag",9),e.NdJ("cvcOnClose",function(){const Ae=e.CHM(c).$implicit,Dt=e.oxw();return e.KtG(Dt.onTagClose$.next(Ae.nzValue))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcDisableLink",!0)("cvcHasTooltip",!0)("cvcCacheId","AcmgCode:"+c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}const Sp=kt(at(),oi());let od=(()=>{class u extends Sp{constructor(c,m,G){super(),this.taq=c,this.tq=m,this.changeDetectorRef=G,this.defaultOptions={props:{entityName:{singular:"ACMG/AMP Code",plural:"ACMG/AMP Codes"},isMultiSelect:!1,requireType:!0,tooltip:"If applicable, please provide evidence criteria from the standards and guidelines for interpretation of sequence variants from ACMG/AMP.",placeholder:"Search ACMG/AMP Codes",requireTypePromptFn:(Ae,Dt)=>`Select an ${Ae} Type to search associated ACMG Code(s)`}},this.placeholder$=new ct.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectComponent:this.selectComponent}),this.configurePlaceholders()}configureStateConnections(){if(this.state&&(this.stateEntityName=this.state.entityName,this.state.requires.requiresAcmgCodes$?this.onRequiresAcmgCode$=this.state.requires.requiresAcmgCodes$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresAcmgCodes$ subject to attach.`),this.props.requireType)){const c=`${this.stateEntityName.toLowerCase()}Type$`;this.state.fields[c]?this.onEntityType$=this.state.fields[c]:console.error(`${this.field.id} requireType is true, however form state does not provide Subject ${c}.`)}}configurePlaceholders(){this.placeholder$.next(this.props.placeholders),this.onRequiresAcmgCode$&&this.onEntityType$&&(0,Do.a)([this.onRequiresAcmgCode$,this.onEntityType$]).pipe((0,j.x)(),(0,ve.t)(this)).subscribe(([c,m])=>{!c&&m?(this.props.required=!1,this.props.disabled=!0,this.props.description=`${(0,ie.E)(m)} ${this.state.entityName} does not include associated ACMG/AMP Code(s)`,this.props.extraType="prompt",this.resetField(),this.cdr.markForCheck()):this.props.requireType&&!m?(this.props.required=!1,this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName,this.props.isMultiSelect),this.props.extraType="prompt"):c?(this.props.required=!0,this.props.disabled=!1,this.props.description='Please provide evidence criteria from the standards and guidelines for interpretation of sequence variants from ACMG/AMP in <a href="https://pubmed.ncbi.nlm.nih.gov/25741868/" target="_blank">Richards et. al. 2015</a>. Review all codes and select each one that applies. If a code is not applied, it is inferred to not be met.',this.props.extraType="description"):(!c&&this.formControl.value||this.props.requireType&&!m&&this.formControl.value)&&this.resetField()})}getTypeaheadVarsFn(c){return{code:c}}getTypeaheadResultsFn(c){return c.data.acmgCodesTypeahead}getTagQueryResultsFn(c){return c.data.acmgCode}getTagQueryVarsFn(c){return{id:c}}getSelectedItemOptionFn(c){return{value:c.id,label:c.code}}getSelectOptionsFn(c,m){return c.map((G,Ae)=>(console.log(G),{label:m.get(Ae)||G.code,value:G.id}))}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(Fn.O2u),e.Y36(Fn.AIY),e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-acmg-code-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(Yd,5,e.Rgc),2&c){let G;e.iGM(G=e.CRH())&&(m.optionTemplates=G)}},features:[e.qOj],decls:9,vars:22,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],["nz-tooltip",""],["nz-typography","","nzType","secondary"],[4,"ngIf"],[1,"ant-select-selection-item-content"],[3,"cvcDisableLink","cvcHasTooltip","cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(c,m){if(1&c&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(Ae){return m.onSearch$.next(Ae)})("cvcOnOpenChange",function(Ae){return m.onOpenChange$.next(Ae)})("cvcOnModelChange",function(Ae){return m.props.change&&m.props.change(m.field,Ae)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.qZA(),e.YNc(6,Kh,3,3,"ng-container",1),e.YNc(7,nh,2,5,"ng-template",null,2,e.W1O)),2&c){const G=e.MAs(8);e.Q6J("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",G)("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcEntityName",m.props.entityName)("cvcPlaceholder",e.lcZ(1,12,m.placeholder$))("cvcResults",e.lcZ(2,14,m.result$))("cvcOptions",e.lcZ(3,16,m.selectOption$))("cvcShowError",m.showError)("cvcDisabled",m.onRequiresAcmgCode$&&!e.lcZ(4,18,m.onRequiresAcmgCode$))("cvcLoading",e.lcZ(5,20,m.isLoading$)),e.xp6(6),e.Q6J("ngrxLet",m.onSearch$)}},dependencies:[M.sg,M.O5,R.eJ,Ye.SY,me.ZU,wt.j,Oo,Po.J,R.fM],changeDetection:0}),u})();const oh={types:[{name:"acmg-code-select",wrappers:["form-field"],component:od,defaultOptions:{props:{label:"ACMG/AMP Code"}}},{name:"acmg-code-multi-select",wrappers:["form-field"],component:od,defaultOptions:{props:{isMultiSelect:!0,label:"ACMG/AMP Code(s)"}}}]};let ih=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(oh),Xt.L,Vn.sL,Ne.LV,Xn.$6,vo.Qp,st.PV,je.o7,pe.Jb,Ye.cg,Tt.zf,s.U5,Te.ic,me.ZJ,wt.X,Bt,Un,Ve.s,$e.x,os]}),u})();const Jh=["optionTemplates"];function rh(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"em")(2,"span",6),e._uU(3),e.qZA()(),e.BQk()),2&u){const c=e.oxw(2).$implicit;e.xp6(3),e.Oqu(c.description)}}function a2(u,y){if(1&u&&(e.TgZ(0,"nz-tag",5),e._uU(1),e.qZA(),e.TgZ(2,"span",6),e.YNc(3,rh,4,1,"ng-container",7),e.qZA()),2&u){const c=e.oxw().$implicit;e.xp6(1),e.Oqu(c.code),e.xp6(2),e.Q6J("ngIf",c.description)}}function qh(u,y){1&u&&(e.ynx(0),e.YNc(1,a2,4,2,"ng-template",null,4,e.W1O),e.BQk())}function id(u,y){if(1&u&&(e.ynx(0),e.YNc(1,qh,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function Xh(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",8)(1,"cvc-entity-tag",9),e.NdJ("cvcOnClose",function(){const Ae=e.CHM(c).$implicit,Dt=e.oxw();return e.KtG(Dt.onTagClose$.next(Ae.nzValue))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcDisableLink",!0)("cvcHasTooltip",!0)("cvcCacheId","ClingenCode:"+c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}const Qu=kt(at(),oi());let Wu=(()=>{class u extends Qu{constructor(c,m,G){super(),this.taq=c,this.tq=m,this.changeDetectorRef=G,this.exclusiveCodes=new Set,this.exclusiveSelected=!1,this.defaultOptions={props:{entityName:{singular:"ClinGen/CGC/VICC Code",plural:"ClinGen/CGC/VICC Codes"},isMultiSelect:!1,requireType:!0,tooltip:"If applicable, please provide evidence classifications from the Standards for the classification of pathogenicity of somatic variants in cancer (oncogenicity).",placeholder:"Search ClinGen/CGC/VICC Codes",requireTypePromptFn:(Ae,Dt)=>`Select an ${Ae} Type to search associated ClinGen Code(s)`}},this.placeholder$=new ct.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectComponent:this.selectComponent}),this.configurePlaceholders(),this.onValueChange$.pipe((0,ve.t)(this)).subscribe(c=>{if(c&&Array.isArray(c)&&c.length>1){const m=c.find(G=>this.exclusiveCodes.has(G));m?(this.previousDescription=this.props.description,this.previousDescriptionType=this.props.extraType,this.props.description="You have selected N/A which precludes selecting any other codes. Please remove it if you wish to select additional codes.",this.exclusiveSelected=!0,this.formControl.setValue([m])):this.exclusiveSelected=!1}this.previousDescription&&!this.exclusiveSelected&&(this.props.description=this.previousDescription,this.props.extraType=this.previousDescriptionType),this.cdr.detectChanges()})}configureStateConnections(){if(this.state&&(this.stateEntityName=this.state.entityName,this.state.requires.requiresClingenCodes$?this.onRequiresClingenCode$=this.state.requires.requiresClingenCodes$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresClingenCodes$ subject to attach.`),this.props.requireType)){const c=`${this.stateEntityName.toLowerCase()}Type$`;this.state.fields[c]?this.onEntityType$=this.state.fields[c]:console.error(`${this.field.id} requireType is true, however form state does not provide Subject ${c}.`)}}configurePlaceholders(){this.placeholder$.next(this.props.placeholders),this.onRequiresClingenCode$&&this.onEntityType$&&(0,Do.a)([this.onRequiresClingenCode$,this.onEntityType$]).pipe((0,j.x)(),(0,ve.t)(this)).subscribe(([c,m])=>{!c&&m?(this.props.required=!1,this.props.disabled=!0,this.props.description=`${(0,ie.E)(m)} ${this.state.entityName} does not include associated ClinGen/CGC/VICC Code(s)`,this.props.extraType="prompt",this.resetField(),this.cdr.markForCheck()):this.props.requireType&&!m?(this.props.required=!1,this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName,this.props.isMultiSelect),this.props.extraType="prompt"):c?(this.props.required=!0,this.props.disabled=!1,this.props.description='Please provide the evidence classifications from the Standards for the classification of pathogenicity of somatic variants in cancer (oncogenicity) in <a href="https://pubmed.ncbi.nlm.nih.gov/25741868/" target="_blank">Horak et. al. 2022.</a>. Review all codes and select each one that applies. If a code is not applied, it is inferred to not be met.',this.props.extraType="description"):(!c&&this.formControl.value||this.props.requireType&&!m&&this.formControl.value)&&this.resetField()})}getTypeaheadVarsFn(c){return{code:c}}getTypeaheadResultsFn(c){return c.data.clingenCodesTypeahead.forEach(m=>{m.exclusive&&this.exclusiveCodes.add(m.id)}),c.data.clingenCodesTypeahead}getTagQueryResultsFn(c){return c.data.clingenCode}getTagQueryVarsFn(c){return{id:c}}getSelectedItemOptionFn(c){return{value:c.id,label:c.code}}getSelectOptionsFn(c,m){return c.map((G,Ae)=>({label:m.get(Ae)||G.code,value:G.id}))}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(Fn.E2B),e.Y36(Fn.R8F),e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-clingen-code-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(Jh,5,e.Rgc),2&c){let G;e.iGM(G=e.CRH())&&(m.optionTemplates=G)}},features:[e.qOj],decls:9,vars:22,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],["nz-tooltip",""],["nz-typography","","nzType","secondary"],[4,"ngIf"],[1,"ant-select-selection-item-content"],[3,"cvcDisableLink","cvcHasTooltip","cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(c,m){if(1&c&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(Ae){return m.onSearch$.next(Ae)})("cvcOnOpenChange",function(Ae){return m.onOpenChange$.next(Ae)})("cvcOnModelChange",function(Ae){return m.props.change&&m.props.change(m.field,Ae)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.ALo(5,"ngrxPush"),e.qZA(),e.YNc(6,id,3,3,"ng-container",1),e.YNc(7,Xh,2,5,"ng-template",null,2,e.W1O)),2&c){const G=e.MAs(8);e.Q6J("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",G)("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcEntityName",m.props.entityName)("cvcPlaceholder",e.lcZ(1,12,m.placeholder$))("cvcResults",e.lcZ(2,14,m.result$))("cvcOptions",e.lcZ(3,16,m.selectOption$))("cvcShowError",m.showError)("cvcDisabled",m.onRequiresClingenCode$&&!e.lcZ(4,18,m.onRequiresClingenCode$))("cvcLoading",e.lcZ(5,20,m.isLoading$)),e.xp6(6),e.Q6J("ngrxLet",m.onSearch$)}},dependencies:[M.sg,M.O5,R.eJ,Ye.SY,me.ZU,wt.j,Oo,Po.J,R.fM],changeDetection:0}),u})();const e4={types:[{name:"clingen-code-select",wrappers:["form-field"],component:Wu,defaultOptions:{props:{label:"ClinGen/CGC/VICC Code"}}},{name:"clingen-code-multi-select",wrappers:["form-field"],component:Wu,defaultOptions:{props:{isMultiSelect:!0,label:"ClinGen/CGC/VICC Code(s)"}}}]};let sh=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(e4),Xt.L,Vn.sL,Ne.LV,Xn.$6,vo.Qp,st.PV,je.o7,pe.Jb,Ye.cg,Tt.zf,s.U5,Te.ic,me.ZJ,wt.X,Bt,Un,Ve.s,$e.x,os]}),u})();const t4=["optionTemplates"];function n4(u,y){if(1&u&&(e.TgZ(0,"nz-tag",5),e._uU(1),e.qZA()),2&u){const c=e.oxw().$implicit;e.xp6(1),e.Oqu(c.name)}}function o4(u,y){1&u&&(e.ynx(0),e.YNc(1,n4,2,1,"ng-template",null,4,e.W1O),e.BQk())}function ah(u,y){if(1&u&&(e.ynx(0),e.YNc(1,o4,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function i4(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",6)(1,"cvc-entity-tag",7),e.NdJ("cvcOnClose",function(){const Ae=e.CHM(c).$implicit,Dt=e.oxw();return e.KtG(Dt.onTagClose$.next(Ae.nzValue))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcDisableLink",!0)("cvcCacheId","NccnGuideline:"+c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}const Ep=kt(at(),oi());let Zu=(()=>{class u extends Ep{constructor(c,m,G){super(),this.taq=c,this.tq=m,this.changeDetectorRef=G,this.defaultOptions={props:{entityName:{singular:"NCCN Guideline",plural:"NCCN Guidelines"},isMultiSelect:!1,requireType:!1,tooltip:"If applicable, please provide cancer (e.g., Breast Cancer) for the appropriate NCCN guideline.",placeholder:"Search NCCN Guidelines"}},this.placeholder$=new ct.X(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectComponent:this.selectComponent})}getTypeaheadVarsFn(c){return{name:c}}getTypeaheadResultsFn(c){return c.data.nccnGuidelinesTypeahead}getTagQueryResultsFn(c){return c.data.nccnGuideline}getTagQueryVarsFn(c){return{id:c}}getSelectedItemOptionFn(c){return{value:c.id,label:c.name}}getSelectOptionsFn(c,m){return c.map((G,Ae)=>({label:m.get(Ae)||G.name,value:G.id}))}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(Fn.sA8),e.Y36(Fn.N$2),e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-nccn-guideline-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(t4,5,e.Rgc),2&c){let G;e.iGM(G=e.CRH())&&(m.optionTemplates=G)}},features:[e.qOj],decls:8,vars:20,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],["nz-tooltip",""],[1,"ant-select-selection-item-content"],[3,"cvcDisableLink","cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(c,m){if(1&c&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(Ae){return m.onSearch$.next(Ae)})("cvcOnOpenChange",function(Ae){return m.onOpenChange$.next(Ae)})("cvcOnModelChange",function(Ae){return m.props.change&&m.props.change(m.field,Ae)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.qZA(),e.YNc(5,ah,3,3,"ng-container",1),e.YNc(6,i4,2,4,"ng-template",null,2,e.W1O)),2&c){const G=e.MAs(7);e.Q6J("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",G)("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcEntityName",m.props.entityName)("cvcPlaceholder",e.lcZ(1,12,m.placeholder$))("cvcResults",e.lcZ(2,14,m.result$))("cvcOptions",e.lcZ(3,16,m.selectOption$))("cvcShowError",m.showError)("cvcDisabled",!1)("cvcLoading",e.lcZ(4,18,m.isLoading$)),e.xp6(5),e.Q6J("ngrxLet",m.onSearch$)}},dependencies:[M.sg,R.eJ,Ye.SY,wt.j,Oo,Po.J,R.fM],changeDetection:0}),u})();const ch={types:[{name:"nccn-guideline-select",wrappers:["form-field"],component:Zu,defaultOptions:{props:{label:"NCCN Guideline"}}},{name:"nccn-guideline-multi-select",wrappers:["form-field"],component:Zu,defaultOptions:{props:{isMultiSelect:!0,label:"NCCN Guideline(s)"}}}]};let c2=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(ch),Xt.L,Vn.sL,Ne.LV,Xn.$6,vo.Qp,st.PV,je.o7,pe.Jb,Ye.cg,Tt.zf,s.U5,Te.ic,me.ZJ,wt.X,Bt,Un,Ve.s,$e.x,os]}),u})();const xp=kt(at()),$d={types:[{name:"nccn-guideline-version-input",component:(()=>{class u extends xp{constructor(c){super(),this.cdr=c,this.defaultDescription="Please enter the version of the NCCN guideline you're referencing in the format <strong>Version.Year</strong>",this.defaultOptions={validators:{nccnVersionNumber:{expression:m=>{if(m.value){if(/^\d{1,2}\.\d{4}$/.test(m.value)){let G=+m.value.split(".")[1];return G>=2e3&&G<=(new Date).getFullYear()+1}return!1}return!0},message:(m,G)=>`"${G.formControl?.value}" does not fit the format Version.Year`}},props:{label:"NCCN Guideline Version",extraType:"description",description:this.defaultDescription}}}ngAfterViewInit(){this.configureBaseField(),this.state&&this.state.formReady$?this.state.formReady$.pipe((0,qe.h)(c=>c),(0,Ti.q)(1),(0,ve.t)(this)).subscribe(c=>{this.configureField()}):this.configureField()}configureField(){this.state?.fields.nccnGuidelineId$.pipe((0,ve.t)(this)).subscribe(c=>{c?(this.props.disabled=!1,this.props.required=!0,this.props.extraType="description",this.props.description=this.defaultDescription):(this.props.disabled=!0,this.props.required=!1,this.props.extraType="prompt",this.props.description="NCCN Guideline Version is only required when NCCN Guideline is specified.",this.formControl.setValue(void 0))})}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-nccn-guideline-version-input"]],features:[e.qOj],decls:1,vars:2,consts:[["nz-input","","placeholder","ex: 1.2023",3,"formControl","formlyAttributes"]],template:function(c,m){1&c&&e._UZ(0,"input",0),2&c&&e.Q6J("formControl",m.formControl)("formlyAttributes",m.field)},dependencies:[t.Fj,t.JJ,t.oH,v.JD,je.Zp],encapsulation:2,changeDetection:0}),u})(),wrappers:["form-field"]}]};let lh=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild($d),je.o7,Bt]}),u})();const uh=kt(at()),r4={types:[{name:"fda-regulatory-approval-checkbox",wrappers:["form-field"],component:(()=>{class u extends uh{constructor(){super(...arguments),this.defaultDescription="Check this if the referenced therapy is approved for use by the FDA in the specific disease associated with the Assertion (as in a listing <a href='https://www.cancer.gov/about-cancer/treatment/drugs/cancer-type' target='_blank'>here</a>.)",this.defaultOptions={props:{hideLabel:!1,label:"FDA Regulatory Approval",description:this.defaultDescription}}}ngAfterViewInit(){this.configureBaseField(),this.state&&(this.state.formReady$?this.state.formReady$.pipe((0,qe.h)(c=>c),(0,Ti.q)(1),(0,ve.t)(this)).subscribe(c=>{this.configureField()}):this.configureField())}configureField(){this.state?.requires.allowsFdaApproval$.pipe((0,ve.t)(this)).subscribe(c=>{c?(this.props.disabled=!1,this.props.extraType="description",this.props.description=this.defaultDescription,void 0===this.formControl.value&&this.formControl.setValue(!1)):(this.props.disabled=!0,this.props.description="FDA Regulatory Approval does not apply to this Assertion Type",this.formControl.setValue(void 0))})}}return u.\u0275fac=function(){let y;return function(m){return(y||(y=e.n5z(u)))(m||u)}}(),u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-fda-regulatory-approval-checkbox"]],features:[e.qOj],decls:2,vars:4,consts:[["nz-checkbox","",3,"nzIndeterminate","formControl","formlyAttributes","ngModelChange"]],template:function(c,m){1&c&&(e.TgZ(0,"label",0),e.NdJ("ngModelChange",function(Ae){return m.props.change&&m.props.change(m.field,Ae)}),e._uU(1),e.qZA()),2&c&&(e.Q6J("nzIndeterminate",m.props.indeterminate&&null==m.formControl.value)("formControl",m.formControl)("formlyAttributes",m.field),e.xp6(1),e.hij(" ",m.props.label,"\n"))},dependencies:[t.JJ,t.oH,Jt.Ie,v.JD],changeDetection:0}),u})()}]};let s4=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,Jt.Wr,v.X0.forChild(r4),Bt]}),u})();const a4=kt(at()),l4={types:[{name:"fda-companion-test-checkbox",wrappers:["form-field"],component:(()=>{class u extends a4{constructor(){super(...arguments),this.defaultDescription='Select Yes if an FDA approved companion test exists for the variant and therapy associated with the Assertion (such as tests listed <a href="https://www.fda.gov/medical-devices/in-vitro-diagnostics/list-cleared-or-approved-companion-diagnostic-devices-in-vitro-and-imaging-tools" target="_blank">here</a>).',this.defaultOptions={props:{hideLabel:!1,label:"FDA Companion Test",description:this.defaultDescription}}}ngAfterViewInit(){this.configureBaseField(),this.state&&(this.state.formReady$?this.state.formReady$.pipe((0,qe.h)(c=>c),(0,Ti.q)(1),(0,ve.t)(this)).subscribe(c=>{this.configureField()}):this.configureField())}configureField(){this.state?.fields.fdaRegulatoryApproval$.pipe((0,ve.t)(this)).subscribe(c=>{c?(this.props.disabled=!1,this.props.extraType="description",this.props.description=this.defaultDescription,void 0===this.formControl.value&&this.formControl.setValue(!1)):(this.props.disabled=!0,this.props.description="FDA Companion Test only applies when Regulatory Approval is selected",this.formControl.setValue(void 0))})}}return u.\u0275fac=function(){let y;return function(m){return(y||(y=e.n5z(u)))(m||u)}}(),u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-fda-companion-test-checkbox"]],features:[e.qOj],decls:2,vars:4,consts:[["nz-checkbox","",3,"nzIndeterminate","formControl","formlyAttributes","ngModelChange"]],template:function(c,m){1&c&&(e.TgZ(0,"label",0),e.NdJ("ngModelChange",function(Ae){return m.props.change&&m.props.change(m.field,Ae)}),e._uU(1),e.qZA()),2&c&&(e.Q6J("nzIndeterminate",m.props.indeterminate&&null==m.formControl.value)("formControl",m.formControl)("formlyAttributes",m.field),e.xp6(1),e.hij(" ",m.props.label,"\n"))},dependencies:[t.JJ,t.oH,Jt.Ie,v.JD],changeDetection:0}),u})()}]};let Dp=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,Jt.Wr,v.X0.forChild(l4),Bt]}),u})();const Vl=["optionTemplates"];function Ka(u,y){if(1&u&&(e.TgZ(0,"nz-tag")(1,"strong"),e._uU(2),e.qZA()()),2&u){const c=e.oxw().$implicit;e.xp6(2),e.Oqu(c)}}function dh(u,y){1&u&&(e.ynx(0),e.YNc(1,Ka,3,1,"ng-template",null,3,e.W1O),e.BQk())}function u2(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"nz-tag",7),e.NdJ("nzOnClose",function(G){e.CHM(c);const Ae=e.oxw(2);return e.KtG(Ae.onTagClose$.next(G))}),e.TgZ(1,"strong"),e._uU(2),e.qZA()()}if(2&u){const c=e.oxw().$implicit;e.xp6(2),e.Oqu(c.nzValue)}}function u4(u,y){if(1&u&&(e.ynx(0),e._uU(1),e.BQk()),2&u){const c=e.oxw().$implicit;e.xp6(1),e.hij(" ",c.nzValue," ")}}function d2(u,y){if(1&u&&(e.TgZ(0,"div",4),e.YNc(1,u2,3,1,"nz-tag",5),e.YNc(2,u4,2,1,"ng-container",6),e.qZA()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngIf",!c.props.isMultiSelect),e.xp6(1),e.Q6J("ngIf",c.props.isMultiSelect)}}const p2=kt(at(),Ot());let Op=(()=>{class u extends p2{constructor(c){super(),this.cdr=c,this.defaultOptions={props:{label:"Reference Build",required:!1,isMultiSelect:!1,description:"Select the human genome reference sequence from which these coordinates are obtained",placeholder:"Select Reference Build"}},this.buildEnum$=new ct.X([])}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.buildEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}configureStateConnections(){this.placeholder$=new ct.X(this.props.placeholder),this.buildEnum$.next((0,To.o6)(Fn.JDX).map(c=>c)),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,Zt.U)(c=>c.map(m=>m)))}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-reference-build-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(Vl,5,e.Rgc),2&c){let G;e.iGM(G=e.CRH())&&(m.optionTemplates=G)}},features:[e.qOj],decls:7,vars:15,consts:[[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["selectedTemplate",""],["optionTemplates",""],[1,"ant-select-selection-item-content"],["nzMode","closeable",3,"nzOnClose",4,"ngIf"],[4,"ngIf"],["nzMode","closeable",3,"nzOnClose"]],template:function(c,m){if(1&c&&(e._UZ(0,"cvc-enum-select",0),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.YNc(3,dh,3,0,"ng-container",1),e.ALo(4,"ngrxPush"),e.YNc(5,d2,3,2,"ng-template",null,2,e.W1O)),2&c){const G=e.MAs(6);e.Q6J("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.lcZ(1,9,m.placeholder$))("cvcCustomTemplate",G)("cvcOptions",e.lcZ(2,11,m.selectOption$))("cvcShowError",m.showError)("cvcDisabled",m.props.disabled),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,13,m.buildEnum$))}},dependencies:[M.sg,M.O5,wt.j,K,R.fM]}),u})();const ph={types:[{name:"reference-build-select",wrappers:["form-field"],component:Op},{name:"reference-build-multi-select",wrappers:["form-field"],component:Op,defaultOptions:{props:{label:"Levels",isMultiSelect:!0}}}]};let h2=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(ph),wt.X,Ve.s,Bt,De]}),u})();const hh=["optionTemplates"];function sd(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"em"),e._UZ(2,"span",8),e.ALo(3,"highlightTypeahead"),e.qZA(),e.BQk()),2&u){const c=e.oxw(2).$implicit,m=e.oxw().ngrxLet;e.xp6(2),e.Q6J("innerHtml",e.xi3(3,1,c.soid,m),e.oJD)}}function fh(u,y){if(1&u&&(e._UZ(0,"cvc-entity-tag",5),e.TgZ(1,"span",6),e.YNc(2,sd,4,4,"ng-container",7),e.qZA()),2&u){const c=e.oxw().$implicit,m=e.oxw().ngrxLet;e.Q6J("cvcDisableLink",!0)("cvcCacheId",c.__typename+":"+c.id)("cvcEmphasize",m),e.xp6(2),e.Q6J("ngIf",c.soid)}}function mh(u,y){1&u&&(e.ynx(0),e.YNc(1,fh,3,4,"ng-template",null,4,e.W1O),e.BQk())}function gh(u,y){if(1&u&&(e.ynx(0),e.YNc(1,mh,3,0,"ng-container",3),e.ALo(2,"ngrxPush"),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,1,c.result$))}}function Lo(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div",9)(1,"cvc-entity-tag",10),e.NdJ("cvcOnClose",function(){const Ae=e.CHM(c).$implicit,Dt=e.oxw();return e.KtG(Dt.onTagClose$.next(Ae.nzValue))}),e.qZA()()}if(2&u){const c=y.$implicit,m=e.oxw();e.xp6(1),e.Q6J("cvcCacheId","VariantType:"+c.nzValue)("cvcContext",m.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",m.props.isMultiSelect?"default":"closeable")}}const vh=kt(at(),oi());let wp=(()=>{class u extends vh{constructor(c,m,G){super(),this.taq=c,this.tq=m,this.changeDetectorRef=G,this.defaultOptions={props:{entityName:{singular:"VariantType",plural:"VariantTypes"},isMultiSelect:!1,placeholders:{default:"Search Variant Types",multiDefault:"Select VariantType(s)"},description:'Add one or more variant types from the <a href="http://www.sequenceontology.org/browser/" target="_blank">Sequence Ontology</a> (e.g., missense, loss-of-function). Be specific as possible, avoid the addition of root concepts, and use the sequence_variant tree of the sequence ontology.',extraType:"prompt"}},this.placeholder$=new ct.X(this.defaultOptions.props.placeholders.default)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.configurePlaceholders()}configureStateConnections(){}configurePlaceholders(){}getTypeaheadVarsFn(c){return{name:c}}getTypeaheadResultsFn(c){return c.data.variantTypeTypeahead}getTagQueryVarsFn(c){return{id:c}}getTagQueryResultsFn(c){return c.data.variantType}getSelectedItemOptionFn(c){return{value:c.id,label:c.name}}getSelectOptionsFn(c,m){return c.map((G,Ae)=>({label:m.get(Ae)||G.name,value:G.id}))}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(Fn.jmY),e.Y36(Fn._nE),e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-variant-type-select"]],viewQuery:function(c,m){if(1&c&&e.Gf(hh,5,e.Rgc),2&c){let G;e.iGM(G=e.CRH())&&(m.optionTemplates=G)}},features:[e.qOj],decls:8,vars:19,consts:[[3,"cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcLoading","cvcOnSearch","cvcOnOpenChange","cvcOnModelChange"],[4,"ngrxLet"],["selectedTemplate",""],[4,"ngFor","ngForOf"],["optionTemplates",""],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf"],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcCacheId","cvcContext","cvcMode","cvcOnClose"]],template:function(c,m){if(1&c&&(e.TgZ(0,"cvc-entity-select",0),e.NdJ("cvcOnSearch",function(Ae){return m.onSearch$.next(Ae)})("cvcOnOpenChange",function(Ae){return m.onOpenChange$.next(Ae)})("cvcOnModelChange",function(Ae){return m.props.change&&m.props.change(m.field,Ae)}),e.ALo(1,"ngrxPush"),e.ALo(2,"ngrxPush"),e.ALo(3,"ngrxPush"),e.ALo(4,"ngrxPush"),e.qZA(),e.YNc(5,gh,3,3,"ng-container",1),e.YNc(6,Lo,2,3,"ng-template",null,2,e.W1O)),2&c){const G=e.MAs(7);e.Q6J("cvcSelectMode",m.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",G)("cvcFormControl",m.formControl)("cvcFormlyAttributes",m.field)("cvcEntityName",m.props.entityName)("cvcPlaceholder",e.lcZ(1,11,m.placeholder$))("cvcResults",e.lcZ(2,13,m.result$))("cvcOptions",e.lcZ(3,15,m.selectOption$))("cvcShowError",m.showError)("cvcLoading",e.lcZ(4,17,m.isLoading$)),e.xp6(5),e.Q6J("ngrxLet",m.onSearch$)}},dependencies:[M.sg,M.O5,R.eJ,me.ZU,Oo,Po.J,R.fM,J.A],changeDetection:0}),u})();const f2={types:[{name:"variant-type-select",wrappers:["form-field"],component:wp,defaultOptions:{props:{label:"Variant Type"}}},{name:"variant-type-multi-select",wrappers:["form-field"],component:wp,defaultOptions:{props:{isMultiSelect:!0,label:"Variant Types"}}}]};let d4=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(f2),Xt.L,Vn.sL,Ne.LV,Xn.$6,vo.Qp,st.PV,je.o7,pe.Jb,Ye.cg,Tt.zf,s.U5,Te.ic,me.ZJ,wt.X,Bt,Un,Ve.s,$e.x]}),u})();var Ta=a(1022);function p4(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"cvc-string-tag",5),e.NdJ("cvcOnClose",function(){const Ae=e.CHM(c).$implicit,Dt=e.oxw(2);return e.KtG(Dt.tagClosed(Ae))}),e.qZA()}if(2&u){const c=y.$implicit;e.Q6J("cvcMode","closeable")("cvcLabel",c)}}function h4(u,y){if(1&u){const c=e.EpF();e.TgZ(0,"div"),e.YNc(1,p4,1,2,"cvc-string-tag",3),e.ALo(2,"ngrxPush"),e.TgZ(3,"input",4),e.NdJ("keydown.enter",function(G){e.CHM(c);const Ae=e.oxw();return e.KtG(Ae.onEnter(G))}),e.qZA()()}if(2&u){const c=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.lcZ(2,2,c.clinvarIds$)),e.xp6(2),e.Q6J("placeholder",c.props.placeholder)}}const _h=kt(at(),Ra);let yh=(()=>{class u extends _h{constructor(c){super(),this.cdr=c,this.defaultOptions={modelOptions:{updateOn:"blur"},props:{label:"Enter value",placeholder:"Enter value and hit Return"}},this.clinvarIds$=new ct.X([]),this.values=new Set,this.showClinvarIdEntry$=new ct.X(!1),this.selectModel=void 0,this.selectOptions=[{value:Ta.li.NotApplicable,label:"Clinvar IDs not applicable for this variant"},{value:Ta.li.NoneFound,label:"Clinvar IDs do not exist for this variant"},{value:Ta.li.Found,label:"Clinvar IDs were found for this variant"},{value:void 0,label:""}]}optionSelected(c){const m=c;this.values.clear(),this.clinvarIds$.next([]),null!=m?m==Ta.li.Found?(this.showClinvarIdEntry$.next(!0),this.formControl.setValue([])):m==Ta.li.NoneFound?(this.showClinvarIdEntry$.next(!1),this.formControl.setValue(["NONE FOUND"])):m==Ta.li.NotApplicable&&(console.log("HERE"),this.showClinvarIdEntry$.next(!1),this.formControl.setValue(["NA"])):(this.showClinvarIdEntry$.next(!1),this.formControl.setValue([]),this.clinvarIds$.next([]))}onEnter(c){let m=c.target;m.value&&(this.values.add(m.value),m.value="");let G=Array.from(this.values);this.clinvarIds$.next(G),this.formControl.setValue(G)}tagClosed(c){this.values.delete(c);let m=Array.from(this.values);this.clinvarIds$.next(m),this.formControl.setValue(m),this.clinvarIds$.next(m)}ngAfterViewInit(){this.configureBaseField(),this.configureStringTagField();const c=this.formControl.value;c&&Array.isArray(c)&&("NONE FOUND"==c[0]?this.selectModel=Ta.li.NoneFound:"N/A"==c[0]?this.selectModel=Ta.li.NotApplicable:(this.selectModel=Ta.li.Found,c.forEach(m=>this.values.add(m)),this.showClinvarIdEntry$.next(!0)),this.clinvarIds$.next(c),this.cdr.detectChanges())}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(e.sBO))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-clinvar-input"]],features:[e.qOj],decls:4,vars:7,consts:[["nzAllowClear","",3,"nzOptions","ngModel","ngModelChange"],[4,"ngIf"],["hidden","","nz-input","",3,"formControl","formlyAttributes"],[3,"cvcMode","cvcLabel","cvcOnClose",4,"ngFor","ngForOf"],["nz-input","",3,"placeholder","keydown.enter"],[3,"cvcMode","cvcLabel","cvcOnClose"]],template:function(c,m){1&c&&(e.TgZ(0,"nz-select",0),e.NdJ("ngModelChange",function(Ae){return m.optionSelected(Ae)}),e.qZA(),e.YNc(1,h4,4,4,"div",1),e.ALo(2,"ngrxPush"),e._UZ(3,"input",2)),2&c&&(e.Q6J("nzOptions",m.selectOptions)("ngModel",m.selectModel),e.xp6(1),e.Q6J("ngIf",e.lcZ(2,5,m.showClinvarIdEntry$)),e.xp6(2),e.Q6J("formControl",m.formControl)("formlyAttributes",m.field))},dependencies:[M.sg,M.O5,t.Fj,t.JJ,t.oH,t.On,v.JD,je.Zp,Ne.Vq,vl,R.fM],changeDetection:0}),u})();const Ch={types:[{name:"clinvar-input",wrappers:["form-field"],component:yh},{name:"clinvar-multi-input",wrappers:["form-field"],component:yh,defaultOptions:{props:{isRepeatItem:!0}}}]};let f4=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,t.u5,v.X0.forChild(Ch),He.F,je.o7,s.U5,Ne.LV,os]}),u})();const g2={types:[{name:"cvc-cancel-button",component:(()=>{class u extends v.fS{constructor(c){super(),this.location=c}cancelClicked(){this.location.back()}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(M.Ye))},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-cancel-button"]],features:[e.qOj],decls:2,vars:0,consts:[["nz-button","","type","button","nzType","default","nzDanger","",1,"cancel-button",3,"click"]],template:function(c,m){1&c&&(e.TgZ(0,"button",0),e.NdJ("click",function(){return m.cancelClicked()}),e._uU(1," Cancel\n"),e.qZA())},dependencies:[Vn.ix,Zo.w,Ko.dQ],styles:[".cancel-button[_ngcontent-%COMP%]{margin-right:10px}"],changeDetection:0}),u})()}]};let zh=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,v.X0.forChild(g2),Vn.sL]}),u})(),Th=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,Tr,_1,z1,Xc,zs,ks,H,dn,tl,cn,An,Ns,Ql,vr,Ha,Ba,cc,Mo,ta,Gu,ih,sh,c2,lh,s4,Dp,h2,d4,f4,zh]}),u})();var cs;function Ku(u,y){if(1&u&&e._uU(0),2&u){const c=e.oxw();e.hij(" ",c.props.addFormTitle,"\n")}}const Mh=function(){return[6,6]};let Pp=((cs=class extends v.n2{constructor(){super(),this.contentTemplate$=new Ao.t}ngAfterViewInit(){this.field.props&&this.field.props.addFormContent?this.contentTemplate$.next(this.field.props.addFormContent):console.error(`${this.field.id} add-entity-form wrapper failed to find parent field's props.addFormContent TemplateRef.`)}}).\u0275fac=function(y){return new(y||cs)},cs.\u0275cmp=e.Xpm({type:cs,selectors:[["cvc-add-entity-form-wrapper"]],features:[e.qOj],decls:10,vars:7,consts:[[3,"nzGutter"],["nzFlex","auto"],["fieldComponent",""],["nzFlex","20px"],["type","button","nz-button","","nzType","primary","nzSize","default","nzShape","circle","nz-popover","",3,"disabled","nzPopoverTitle","nzPopoverContent"],["nz-icon","","nzType","plus-circle","nzTheme","outline"],["titleTemplate",""]],template:function(y,c){if(1&y&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1),e.GkF(2,null,2),e.qZA(),e.TgZ(4,"nz-col",3)(5,"button",4),e.ALo(6,"ngrxPush"),e._UZ(7,"span",5),e.qZA()()(),e.YNc(8,Ku,1,1,"ng-template",null,6,e.W1O)),2&y){const m=e.MAs(9);e.Q6J("nzGutter",e.DdM(6,Mh)),e.xp6(5),e.Q6J("disabled",null==c.field.props?null:c.field.props.disabled)("nzPopoverTitle",m)("nzPopoverContent",e.lcZ(6,4,c.contentTemplate$))}},dependencies:[Vn.ix,Zo.w,Ko.dQ,Xn.lU,st.Ls,pe.t3,pe.SK,R.fM],styles:[".add-button[_ngcontent-%COMP%]{font-size:24px;color:#cfcfdf}"],changeDetection:0}),cs);Pp=(0,Ce.gn)([(0,ve.c)()],Pp);const Ud={wrappers:[{name:"add-entity-form",component:Pp}]};let Ju=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,v.X0.forChild(Ud),Vn.sL,Xn.$6,st.PV,pe.Jb]}),u})();const ad={wrappers:[{name:"field-grid",component:(()=>{class u extends v.n2{get errorState(){return this.showError?"error":""}ngOnInit(){this.props.grid={cols:2,...this.props.grid?this.props.grid:void 0}}}return u.\u0275fac=function(){let y;return function(m){return(y||(y=e.n5z(u)))(m||u)}}(),u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-field-grid"]],features:[e.qOj],decls:3,vars:1,consts:[[1,"field-grid",3,"ngClass"],["fieldComponent",""]],template:function(c,m){1&c&&(e.TgZ(0,"div",0),e.GkF(1,null,1),e.qZA()),2&c&&e.Q6J("ngClass","cols-"+m.props.grid.cols)},dependencies:[M.mk],styles:[".field-grid.cols-2[_ngcontent-%COMP%]     formly-group:first-of-type{display:grid;grid-template-columns:repeat(2,1fr);gap:8px}.field-grid.cols-3[_ngcontent-%COMP%]     formly-group:first-of-type{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}.field-grid.cols-4[_ngcontent-%COMP%]     formly-group:first-of-type{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}"],changeDetection:0}),u})()}]};let Sh=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.UX,s.U5,pe.Jb,v.X0.forChild(ad)]}),u})();function Ip(u,y){if(1&u&&(e.TgZ(0,"nz-col",4),e._UZ(1,"formly-field",5),e.qZA()),2&u){const c=y.$implicit;e.Q6J("nzSpan",(null==c.props?null:c.props.colSpan)||12),e.xp6(1),e.Q6J("field",c)}}function jd(u,y){}const Gd=function(){return[6,6]},m4={wrappers:[{name:"form-card",component:(()=>{class u extends v.n2{get errorState(){return this.showError?"error":""}constructor(){super()}ngOnInit(){this.props.gutterHorizontal=this.props.gutterHorizontal||8,this.props.gutterVertical=this.props.gutterVertical||8}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-form-card"]],features:[e.qOj],decls:5,vars:5,consts:[[3,"nzTitle","nzExtra"],[3,"nzGutter"],[3,"nzSpan",4,"ngFor","ngForOf"],["cardExtra",""],[3,"nzSpan"],[3,"field"]],template:function(c,m){if(1&c&&(e.TgZ(0,"nz-card",0)(1,"nz-row",1),e.YNc(2,Ip,2,2,"nz-col",2),e.qZA()(),e.YNc(3,jd,0,0,"ng-template",null,3,e.W1O)),2&c){const G=e.MAs(4);e.Q6J("nzTitle",m.props.title)("nzExtra",G),e.xp6(1),e.Q6J("nzGutter",e.DdM(4,Gd)),e.xp6(1),e.Q6J("ngForOf",m.field.fieldGroup)}},dependencies:[M.sg,v.cw,pe.t3,pe.SK,In.bd]}),u})()}]};let g4=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,t.u5,v.X0.forChild(m4),pe.Jb,In.vh,Jt.Wr]}),u})();const _4={wrappers:[{name:"form-footer",component:(()=>{class u extends v.n2{ngOnInit(){}}return u.\u0275fac=function(){let y;return function(m){return(y||(y=e.n5z(u)))(m||u)}}(),u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-form-footer"]],features:[e.qOj],decls:4,vars:0,consts:[[1,"form-footer"],["nzSpan","24",1,"submit-col"],["fieldComponent",""]],template:function(c,m){1&c&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1),e.GkF(2,null,2),e.qZA()())},dependencies:[pe.t3,pe.SK],styles:[".form-footer[_ngcontent-%COMP%]{margin-top:1em;border-radius:8px;background-color:#f0f0f0;padding:1em}.submit-col[_ngcontent-%COMP%]{text-align:right}"],changeDetection:0}),u})()}]};let y4=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,pe.Jb,v.X0.forChild(_4)]}),u})();var C4=a(9333),Fp=a(8125),cd=a(9382);let xh=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,st.PV,pe.Jb,In.vh,cd.we,Fp.q6,_r.Ph,wt.X,me.ZJ,L.s]}),u})(),z4=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,Vn.sL,io.Rt,Hn.b1]}),u})();var _2=a(553);const bs={VALID:"success",INVALID:"error",PENDING:"processing",DISABLED:"default"};let T4=(()=>{class u{constructor(){this.tagColor="default"}set cvcFormControlStatus(c){this._status=c,this.tagColor=c?bs[c]:"default"}get cvcFormControlStatus(){return this._status}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-form-status-tag"]],inputs:{cvcFormControlStatus:"cvcFormControlStatus"},decls:3,vars:4,consts:[[3,"nzColor"]],template:function(c,m){1&c&&(e.TgZ(0,"nz-tag",0),e._uU(1),e.ALo(2,"lowercase"),e.qZA()),2&c&&(e.Q6J("nzColor",m.tagColor),e.xp6(1),e.hij(" ",m.cvcFormControlStatus?e.lcZ(2,2,m.cvcFormControlStatus):"UNKNOWN","\n"))},dependencies:[wt.j,M.i8]}),u})();function y2(u,y){if(1&u&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&u){const c=e.oxw(2).ctrl;e.xp6(1),e.hij(" ",c.value," ")}}function Y3(u,y){1&u&&(e.TgZ(0,"span",8),e._uU(1," undefined "),e.qZA())}function Dh(u,y){if(1&u&&(e.TgZ(0,"nz-list-item")(1,"nz-list-item-meta")(2,"nz-list-item-meta-title"),e._uU(3),e.qZA(),e.TgZ(4,"nz-list-item-meta-description"),e.YNc(5,y2,2,1,"span",5),e.YNc(6,Y3,2,0,"span",6),e.qZA()(),e.TgZ(7,"nz-list-item-extra"),e._UZ(8,"cvc-form-status-tag",7),e.qZA()()),2&u){const c=e.oxw(),m=c.key,G=c.ctrl;e.xp6(3),e.hij(" ",m," "),e.xp6(2),e.Q6J("ngIf",G.value),e.xp6(1),e.Q6J("ngIf",!G.value),e.xp6(2),e.Q6J("cvcFormControlStatus",G.status)}}function M4(u,y){}const b4=function(u,y){return{key:u,ctrl:y}};function C2(u,y){if(1&u&&e.YNc(0,M4,0,0,"ng-template",12),2&u){const c=y.$implicit;e.oxw(3);const m=e.MAs(3);e.Q6J("ngTemplateOutlet",m)("ngTemplateOutletContext",e.WLB(2,b4,c.key,c.value))}}function z2(u,y){if(1&u&&(e.TgZ(0,"strong"),e._uU(1),e.qZA()),2&u){const c=e.oxw(2).key;e.xp6(1),e.Oqu(c)}}function S4(u,y){if(1&u&&(e.TgZ(0,"nz-list-item")(1,"nz-card",9)(2,"nz-list",10),e.YNc(3,C2,1,5,null,4),e.ALo(4,"keyvalue"),e.qZA()(),e.YNc(5,z2,2,1,"ng-template",null,11,e.W1O),e.qZA()),2&u){const c=e.oxw(),m=c.key,G=c.ctrl;e.xp6(1),e.Q6J("nzTitle",m),e.xp6(2),e.Q6J("ngForOf",e.lcZ(4,2,G.controls))}}function T2(u,y){if(1&u&&(e.YNc(0,Dh,9,4,"nz-list-item",5),e.YNc(1,S4,7,4,"nz-list-item",5)),2&u){const c=y.ctrl;e.Q6J("ngIf",!c.controls),e.xp6(1),e.Q6J("ngIf",c.controls)}}function M2(u,y){}function Oh(u,y){if(1&u&&e.YNc(0,M2,0,0,"ng-template",12),2&u){const c=y.$implicit;e.oxw();const m=e.MAs(3);e.Q6J("ngTemplateOutlet",m)("ngTemplateOutletContext",e.WLB(2,b4,c.key,c.value))}}function b2(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"nz-list",2),e.YNc(2,T2,2,2,"ng-template",null,3,e.W1O),e.qZA(),e.YNc(4,Oh,1,5,null,4),e.ALo(5,"keyvalue"),e.BQk()),2&u){const c=y.ngIf;e.xp6(4),e.Q6J("ngForOf",e.lcZ(5,1,c.controls))}}function S2(u,y){1&u&&e._uU(0," No AbstractFormControl provided. ")}let E2=(()=>{class u{set cvcAbstractControl(c){if(!c)throw new Error("cvc-form-debug-field-list requires valid cvcFormControl Input.");this._cvcFormControl=c,this.formControl=c}get cvcFormControl(){return this._cvcFormControl}constructor(){}ngOnInit(){}}return u.\u0275fac=function(c){return new(c||u)},u.\u0275cmp=e.Xpm({type:u,selectors:[["cvc-form-debug-field-list"]],inputs:{cvcAbstractControl:"cvcAbstractControl"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["noFormControl",""],["nzSize","small"],["ctrlTemplateRef",""],[4,"ngFor","ngForOf"],[4,"ngIf"],["style","padding: 0px 4px; color: white; background-color: #ccc",4,"ngIf"],[3,"cvcFormControlStatus"],[2,"padding","0px 4px","color","white","background-color","#ccc"],["nzSize","small",2,"width","100%",3,"nzTitle"],["nzSize","small",2,"padding","0"],["cardExtra",""],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(c,m){if(1&c&&(e.YNc(0,b2,6,3,"ng-container",0),e.YNc(1,S2,1,0,"ng-template",null,1,e.W1O)),2&c){const G=e.MAs(2);e.Q6J("ngIf",m.formControl)("ngIfElse",G)}},dependencies:[M.sg,M.O5,M.tP,In.bd,_r.n_,_r.AA,_r.yi,_r.IO,_r.Pb,_r.yw,T4,M.Nd],styles:["[_nghost-%COMP%]     nz-card .ant-card-body{padding:6px 0}"]}),u})();var ld;function x2(u,y){if(1&u&&(e.ynx(0),e._UZ(1,"ngx-json-viewer",9),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("json",c.watchModel)}}function Ja(u,y){if(1&u&&(e.ynx(0),e.TgZ(1,"nz-descriptions",10)(2,"nz-descriptions-item",11),e._UZ(3,"cvc-form-status-tag",12),e.qZA(),e.TgZ(4,"nz-descriptions-item",13),e._uU(5),e.qZA(),e.TgZ(6,"nz-descriptions-item",14),e._uU(7),e.qZA(),e.TgZ(8,"nz-descriptions-item",15),e._uU(9),e.qZA(),e.TgZ(10,"nz-descriptions-item",16),e._uU(11),e.qZA(),e.TgZ(12,"nz-descriptions-item",17),e._uU(13),e.qZA()(),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("nzColumn",1),e.xp6(2),e.Q6J("cvcFormControlStatus",null==c.cvcForm?null:c.cvcForm.status),e.xp6(2),e.hij(" ",null==c.cvcForm?null:c.cvcForm.pending," "),e.xp6(2),e.hij(" ",null==c.cvcForm?null:c.cvcForm.touched," "),e.xp6(2),e.hij(" ",null==c.cvcForm?null:c.cvcForm.valid," "),e.xp6(2),e.hij(" ",null==c.cvcForm?null:c.cvcForm.dirty," "),e.xp6(2),e.hij(" ",null==c.cvcForm?null:c.cvcForm.enabled," ")}}function wh(u,y){if(1&u&&(e.ynx(0),e._UZ(1,"cvc-form-debug-field-list",18),e.BQk()),2&u){const c=e.oxw();e.xp6(1),e.Q6J("cvcAbstractControl",c.cvcForm)}}function D2(u,y){1&u&&(e.ynx(0),e._uU(1," State Content "),e.BQk())}function E4(u,y){if(1&u&&(e.TgZ(0,"nz-row")(1,"nz-col",19),e._uU(2," Form Details "),e.qZA(),e.TgZ(3,"nz-col",20),e._UZ(4,"cvc-form-status-tag",12),e.qZA()()),2&u){const c=e.oxw();e.xp6(4),e.Q6J("cvcFormControlStatus",null==c.cvcForm?null:c.cvcForm.status)}}let Ph=((ld=class{constructor(y){this.cdr=y,this.selectedIndex=0}ngOnInit(){if(!this.cvcForm)throw new Error("cvc-form-debug requires valid cvcForm Input.");this.valueChange$=new ct.X(this.cvcForm.value),this.statusChange$=new ct.X(this.cvcForm.status),this.formChange$=Ri([this.statusChange$,this.valueChange$]),this.watchModel=this.cvcModel,this.subscriptions=[this.cvcForm.valueChanges.subscribe(y=>{this.watchModel={...this.cvcModel},this.valueChange$.next(y)}),this.cvcForm.statusChanges.subscribe(y=>{this.statusChange$.next(y)}),this.formChange$.subscribe(y=>{this.cdr.detectChanges()})]}}).\u0275fac=function(y){return new(y||ld)(e.Y36(e.sBO))},ld.\u0275cmp=e.Xpm({type:ld,selectors:[["cvc-form-debug"]],inputs:{cvcForm:"cvcForm",cvcModel:"cvcModel"},decls:14,vars:7,consts:[["nzSize","small","nzBordered","true",3,"nzTitle"],["nzSize","small",3,"nzSelectedIndex","nzSelectedIndexChange"],["nzTitle","Model"],["nzTitle","Controls"],["nzTitle","State"],["nzTitle","Form Status"],[3,"ngSwitch"],[4,"ngSwitchCase"],["cardTitle",""],[3,"json"],["nzBordered","","nzSize","small",3,"nzColumn"],["nzTitle","status"],[3,"cvcFormControlStatus"],["nzTitle","pending"],["nzTitle","touched"],["nzTitle","valid"],["nzTitle","dirty"],["nzTitle","enabled"],[3,"cvcAbstractControl"],["nzFlex","2"],["nzFlex","3",1,"form-status-col"]],template:function(y,c){if(1&y&&(e.TgZ(0,"nz-card",0)(1,"nz-card-tab")(2,"nz-tabset",1),e.NdJ("nzSelectedIndexChange",function(G){return c.selectedIndex=G}),e._UZ(3,"nz-tab",2)(4,"nz-tab",3)(5,"nz-tab",4)(6,"nz-tab",5),e.qZA()(),e.ynx(7,6),e.YNc(8,x2,2,1,"ng-container",7),e.YNc(9,Ja,14,7,"ng-container",7),e.YNc(10,wh,2,1,"ng-container",7),e.YNc(11,D2,2,0,"ng-container",7),e.BQk(),e.qZA(),e.YNc(12,E4,5,1,"ng-template",null,8,e.W1O)),2&y){const m=e.MAs(13);e.Q6J("nzTitle",m),e.xp6(2),e.Q6J("nzSelectedIndex",c.selectedIndex),e.xp6(5),e.Q6J("ngSwitch",c.selectedIndex),e.xp6(1),e.Q6J("ngSwitchCase",0),e.xp6(1),e.Q6J("ngSwitchCase",3),e.xp6(1),e.Q6J("ngSwitchCase",1),e.xp6(1),e.Q6J("ngSwitchCase",2)}},dependencies:[M.RF,M.n9,pe.t3,pe.SK,In.bd,In._i,cd.xH,cd.xw,Fp.R7,Fp.uj,L.Y,E2,T4],styles:["[_nghost-%COMP%]{display:block}.form-status-col[_ngcontent-%COMP%]{text-align:right}.form-status-col[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]:last-child{margin-right:0}"],changeDetection:0}),ld);var qu;function x4(u,y){if(1&u&&(e.TgZ(0,"nz-col",4),e._UZ(1,"cvc-form-debug",5),e.qZA()),2&u){const c=e.oxw();e.Q6J("nzSpan",8),e.xp6(1),e.Q6J("cvcForm",c.form)("cvcModel",c.model)}}Ph=(0,Ce.gn)([(0,ve.c)({arrayName:"subscriptions"})],Ph);const Np=function(){return[8,8]};let D4=((qu=class extends v.n2{constructor(y){super()}get errorState(){return this.showError?"error":""}ngOnInit(){this.props.title=this.props.title||"Form Card",this.props.submitLabel=this.props.submitLabel||"Submit",this.props.showDevPanel=!_2.N.production&&(this.props.showDevPanel||false)}}).\u0275fac=function(y){return new(y||qu)(e.Y36(e.sBO))},qu.\u0275cmp=e.Xpm({type:qu,selectors:[["cvc-form-layout-wrapper"]],features:[e.qOj],decls:5,vars:4,consts:[[3,"nzGutter"],[1,"form-col",3,"nzSpan"],["fieldComponent",""],["class","status-col",3,"nzSpan",4,"ngIf"],[1,"status-col",3,"nzSpan"],[3,"cvcForm","cvcModel"]],template:function(y,c){1&y&&(e.TgZ(0,"nz-row",0)(1,"nz-col",1),e.GkF(2,null,2),e.qZA(),e.YNc(4,x4,2,3,"nz-col",3),e.qZA()),2&y&&(e.Q6J("nzGutter",e.DdM(3,Np)),e.xp6(1),e.Q6J("nzSpan",c.props.showDevPanel?16:24),e.xp6(3),e.Q6J("ngIf",c.props.showDevPanel))},dependencies:[M.O5,pe.t3,pe.SK,Ph],changeDetection:0}),qu);D4=(0,Ce.gn)([(0,ve.c)({arrayName:"subscriptions"})],D4);const O4={wrappers:[{name:"form-layout",component:D4}]};let w4=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,v.X0.forChild(O4),Vn.sL,In.vh,st.PV,wt.X,cd.we,Xn.$6,_r.Ph,pe.Jb,C4.h,z4,xh,L.s]}),u})(),Ih=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[M.ez,w4,g4,y4,Bt,Sh,Ju]}),u})(),P4=(()=>{class u{}return u.\u0275fac=function(c){return new(c||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({providers:[{provide:v.l7,multi:!0,useFactory:F,deps:[i.gz]}],imports:[v.X0.forRoot(w),t.UX,s.U5,d.u,Ih,L.s,t.UX,v.X0,d.u,s.U5,Ih,Th]}),u})()},1022:(It,be,a)=>{function t(I){let S={value:void 0,unset:void 0};return I&&I.trim().length>0?S.value=I.trim():S.unset=!0,S}function i(I){let S={value:void 0,unset:void 0};return void 0!==I?S.value=I:S.unset=!0,S}a.d(be,{aP:()=>$,li:()=>v,uP:()=>i,xt:()=>t});var v=(()=>((v=v||{})[v.NotApplicable=0]="NotApplicable",v[v.NoneFound=1]="NoneFound",v[v.Found=2]="Found",v))();const $=[{value:void 0,label:""},{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"},{value:"5",label:"5"},{value:"6",label:"6"},{value:"7",label:"7"},{value:"8",label:"8"},{value:"9",label:"9"},{value:"10",label:"10"},{value:"11",label:"11"},{value:"12",label:"12"},{value:"13",label:"13"},{value:"14",label:"14"},{value:"15",label:"15"},{value:"16",label:"16"},{value:"17",label:"17"},{value:"18",label:"18"},{value:"19",label:"19"},{value:"20",label:"20"},{value:"21",label:"21"},{value:"22",label:"22"},{value:"X",label:"X"},{value:"Y",label:"Y"},{value:"MT",label:"MT"}]},313:(It,be,a)=>{a.d(be,{A4J:()=>Qc,A94:()=>_c,AIY:()=>o1,AMF:()=>bl,AO2:()=>e,B0s:()=>xa,B97:()=>Ur,BQZ:()=>D,BTF:()=>Ji,BYO:()=>m1,Bk6:()=>Tc,Bo4:()=>Dl,Cp0:()=>A,D9L:()=>rc,Del:()=>z1,DkJ:()=>Cr,DzV:()=>er,E1C:()=>ic,E2B:()=>ql,E8d:()=>S,EFm:()=>fc,EH_:()=>ul,EwB:()=>Xc,F3s:()=>Sn,F4e:()=>sa,FB1:()=>Ve,FJi:()=>yt,FNv:()=>ge,FOU:()=>oa,Fvz:()=>ae,GYx:()=>Xu,Gbq:()=>Zn,Gnp:()=>Sc,HUC:()=>_n,Hmr:()=>Dr,HwR:()=>pl,IP1:()=>Pa,IRu:()=>wt,IZ6:()=>Js,JDX:()=>Mt,Kk:()=>yi,Kmw:()=>Xs,L5n:()=>mr,L8L:()=>Fi,LHC:()=>da,LLl:()=>ht,LiH:()=>Vs,Lr0:()=>md,MCG:()=>lu,MNv:()=>fu,MPi:()=>ns,MYm:()=>xr,Mgx:()=>F,MsG:()=>ue,N$2:()=>Ni,NQC:()=>Ft,O2u:()=>al,OHm:()=>$r,OIL:()=>Rn,OfU:()=>k,P_b:()=>To,Pm:()=>Ma,QVn:()=>Ns,Q_P:()=>an,Qtd:()=>Su,Qzn:()=>jr,R8F:()=>pc,R8w:()=>M,RTy:()=>V,RYL:()=>eu,Rdc:()=>Rr,S8C:()=>Wl,SAN:()=>At,SrV:()=>Lt,Sx0:()=>me,T1I:()=>t1,TNk:()=>zl,TbJ:()=>On,Tg0:()=>vu,TiL:()=>Zs,Tq1:()=>ii,Tt7:()=>Ho,UIR:()=>Jn,UWf:()=>ws,VGG:()=>he,VZq:()=>Ar,Vj7:()=>io,WFw:()=>zr,WGV:()=>yu,WOS:()=>Cc,WRV:()=>Ws,X5f:()=>Gs,XQi:()=>au,Xft:()=>ac,YMi:()=>ir,Y_K:()=>Ra,Ybm:()=>Le,ZYZ:()=>Ea,Zo2:()=>gi,_3P:()=>L,_Wm:()=>I,_jb:()=>Xr,_nE:()=>du,aC3:()=>f1,aw3:()=>Fa,bgg:()=>X,c$m:()=>ce,cCu:()=>Ml,cEv:()=>Qo,cIw:()=>fd,cMj:()=>hu,ce2:()=>ne,czh:()=>Ls,d4o:()=>Be,dDn:()=>vc,dGO:()=>ou,da2:()=>Tn,db2:()=>gd,eDl:()=>uc,eY8:()=>W,ejK:()=>_s,enw:()=>pi,fow:()=>Se,fwG:()=>ar,g0X:()=>Cu,ghc:()=>Vi,h01:()=>U,hVB:()=>bc,huM:()=>He,i44:()=>cn,iGM:()=>ts,iJT:()=>qi,iST:()=>Co,io:()=>Ds,iwm:()=>v,jMx:()=>Mu,jmY:()=>uu,jw9:()=>rt,k7O:()=>ko,kQf:()=>Er,kQl:()=>Ye,kqt:()=>P,l$X:()=>$l,l4w:()=>Aa,lYz:()=>Rt,lcA:()=>de,ld2:()=>yn,m$d:()=>El,m55:()=>O,mII:()=>lr,mdl:()=>s,mki:()=>a1,mpB:()=>Bt,nSb:()=>gc,nnL:()=>Zl,o71:()=>Ze,oRL:()=>fe,olA:()=>nu,otH:()=>Fr,pHu:()=>mu,pP7:()=>Ne,pR8:()=>il,q1D:()=>Pi,q2A:()=>Kl,q8c:()=>ti,q9q:()=>Ee,qf4:()=>Ci,qgP:()=>ml,rJ8:()=>fo,rZD:()=>Ct,rzy:()=>jt,s4d:()=>jl,sA8:()=>d1,sBY:()=>Cl,sLD:()=>ha,sfv:()=>re,sjj:()=>ru,tI$:()=>Ir,tI1:()=>pe,tJ6:()=>Bo,tWC:()=>pd,td:()=>yo,ti:()=>fr,tji:()=>Na,tw_:()=>co,u4i:()=>j,uBv:()=>$,ubO:()=>xl,vMt:()=>Zc,vjc:()=>l1,vv6:()=>nl,vxe:()=>Tr,vz2:()=>ci,wJ2:()=>R,wRZ:()=>Oa,wbP:()=>Ia,wg3:()=>g1,wkr:()=>Jt,wpb:()=>je,xlL:()=>ke,y1h:()=>Z,yic:()=>rn,yqR:()=>Or,z8D:()=>pa,zOE:()=>la,z_7:()=>Mr,zpu:()=>u1,zwS:()=>Qr});var t=a(9111),i=a(5879),v=(()=>((v=v||{}).Na="NA",v.TierIii="TIER_III",v.TierIiLevelC="TIER_II_LEVEL_C",v.TierIiLevelD="TIER_II_LEVEL_D",v.TierIv="TIER_IV",v.TierILevelA="TIER_I_LEVEL_A",v.TierILevelB="TIER_I_LEVEL_B",v))(),s=(()=>((s=s||{}).DoesNotSupport="DOES_NOT_SUPPORT",s.Supports="SUPPORTS",s))(),L=(()=>((L=L||{}).AdverseResponse="ADVERSE_RESPONSE",L.Benign="BENIGN",L.BetterOutcome="BETTER_OUTCOME",L.LikelyBenign="LIKELY_BENIGN",L.LikelyOncogenic="LIKELY_ONCOGENIC",L.LikelyPathogenic="LIKELY_PATHOGENIC",L.Na="NA",L.Negative="NEGATIVE",L.Oncogenic="ONCOGENIC",L.Pathogenic="PATHOGENIC",L.PoorOutcome="POOR_OUTCOME",L.Positive="POSITIVE",L.ReducedSensitivity="REDUCED_SENSITIVITY",L.Resistance="RESISTANCE",L.Sensitivityresponse="SENSITIVITYRESPONSE",L.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",L))(),j=(()=>((j=j||{}).AmpLevel="AMP_LEVEL",j.AssertionDirection="ASSERTION_DIRECTION",j.AssertionType="ASSERTION_TYPE",j.DiseaseName="DISEASE_NAME",j.EvidenceItemsCount="EVIDENCE_ITEMS_COUNT",j.Id="ID",j.Significance="SIGNIFICANCE",j.Status="STATUS",j.Summary="SUMMARY",j.TherapyName="THERAPY_NAME",j))(),$=(()=>(($=$||{}).Diagnostic="DIAGNOSTIC",$.Oncogenic="ONCOGENIC",$.Predictive="PREDICTIVE",$.Predisposing="PREDISPOSING",$.Prognostic="PROGNOSTIC",$))(),I=(()=>((I=I||{}).And="AND",I.Or="OR",I))(),S=(()=>((S=S||{}).EvidenceItemCount="EVIDENCE_ITEM_COUNT",S.Name="NAME",S.NctId="NCT_ID",S.SourceCount="SOURCE_COUNT",S))(),F=(()=>((F=F||{}).Conflict="CONFLICT",F.Expired="EXPIRED",F.Missing="MISSING",F.Valid="VALID",F))(),k=(()=>((k=k||{}).Assertion="ASSERTION",k.EvidenceItem="EVIDENCE_ITEM",k.Gene="GENE",k.MolecularProfile="MOLECULAR_PROFILE",k.Source="SOURCE",k.Variant="VARIANT",k.VariantGroup="VARIANT_GROUP",k))(),U=(()=>((U=U||{}).Created="CREATED",U.LastModified="LAST_MODIFIED",U))(),M=(()=>((M=M||{}).AssertionCount="ASSERTION_COUNT",M.Doid="DOID",M.EvidenceItemCount="EVIDENCE_ITEM_COUNT",M.GeneCount="GENE_COUNT",M.Name="NAME",M.VariantCount="VARIANT_COUNT",M))(),e=(()=>((e=e||{}).Accepted="ACCEPTED",e.AssertionAccepted="ASSERTION_ACCEPTED",e.AssertionRejected="ASSERTION_REJECTED",e.AssertionReverted="ASSERTION_REVERTED",e.AssertionSubmitted="ASSERTION_SUBMITTED",e.Commented="COMMENTED",e.CuratedSourceSuggestion="CURATED_SOURCE_SUGGESTION",e.DeprecatedMolecularProfile="DEPRECATED_MOLECULAR_PROFILE",e.DeprecatedVariant="DEPRECATED_VARIANT",e.Flagged="FLAGGED",e.FlagResolved="FLAG_RESOLVED",e.PublicationSuggested="PUBLICATION_SUGGESTED",e.Rejected="REJECTED",e.RejectedSourceSuggestion="REJECTED_SOURCE_SUGGESTION",e.RequeuedSourceSuggestion="REQUEUED_SOURCE_SUGGESTION",e.Reverted="REVERTED",e.RevisionAccepted="REVISION_ACCEPTED",e.RevisionRejected="REVISION_REJECTED",e.RevisionSuggested="REVISION_SUGGESTED",e.RevisionSuperseded="REVISION_SUPERSEDED",e.Submitted="SUBMITTED",e))(),R=(()=>((R=R||{}).Organization="ORGANIZATION",R.Subject="SUBJECT",R.Unscoped="UNSCOPED",R.User="USER",R))(),pe=(()=>((pe=pe||{}).DoesNotSupport="DOES_NOT_SUPPORT",pe.Na="NA",pe.Supports="SUPPORTS",pe))(),me=(()=>((me=me||{}).A="A",me.B="B",me.C="C",me.D="D",me.E="E",me))(),Z=(()=>((Z=Z||{}).AdverseResponse="ADVERSE_RESPONSE",Z.Benign="BENIGN",Z.BetterOutcome="BETTER_OUTCOME",Z.DominantNegative="DOMINANT_NEGATIVE",Z.GainOfFunction="GAIN_OF_FUNCTION",Z.LikelyBenign="LIKELY_BENIGN",Z.LikelyPathogenic="LIKELY_PATHOGENIC",Z.LossOfFunction="LOSS_OF_FUNCTION",Z.Na="NA",Z.Negative="NEGATIVE",Z.Neomorphic="NEOMORPHIC",Z.Oncogenicity="ONCOGENICITY",Z.Pathogenic="PATHOGENIC",Z.PoorOutcome="POOR_OUTCOME",Z.Positive="POSITIVE",Z.Predisposition="PREDISPOSITION",Z.Protectiveness="PROTECTIVENESS",Z.ReducedSensitivity="REDUCED_SENSITIVITY",Z.Resistance="RESISTANCE",Z.Sensitivityresponse="SENSITIVITYRESPONSE",Z.UnalteredFunction="UNALTERED_FUNCTION",Z.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",Z.Unknown="UNKNOWN",Z))(),A=(()=>((A=A||{}).Description="DESCRIPTION",A.DiseaseName="DISEASE_NAME",A.EvidenceDirection="EVIDENCE_DIRECTION",A.EvidenceLevel="EVIDENCE_LEVEL",A.EvidenceRating="EVIDENCE_RATING",A.EvidenceType="EVIDENCE_TYPE",A.Id="ID",A.Significance="SIGNIFICANCE",A.Status="STATUS",A.TherapyName="THERAPY_NAME",A.VariantOrigin="VARIANT_ORIGIN",A))(),V=(()=>((V=V||{}).Accepted="ACCEPTED",V.Rejected="REJECTED",V.Submitted="SUBMITTED",V))(),O=(()=>((O=O||{}).Accepted="ACCEPTED",O.All="ALL",O.Rejected="REJECTED",O.Submitted="SUBMITTED",O))(),P=(()=>((P=P||{}).Diagnostic="DIAGNOSTIC",P.Functional="FUNCTIONAL",P.Oncogenic="ONCOGENIC",P.Predictive="PREDICTIVE",P.Predisposing="PREDISPOSING",P.Prognostic="PROGNOSTIC",P))(),D=(()=>((D=D||{}).Open="OPEN",D.Resolved="RESOLVED",D))(),re=(()=>((re=re||{}).Assertion="ASSERTION",re.EvidenceItem="EVIDENCE_ITEM",re.Gene="GENE",re.MolecularProfile="MOLECULAR_PROFILE",re.Variant="VARIANT",re.VariantGroup="VARIANT_GROUP",re))(),ae=(()=>((ae=ae||{}).AssertionCount="assertionCount",ae.DiseaseName="diseaseName",ae.EntrezSymbol="entrezSymbol",ae.EvidenceItemCount="evidenceItemCount",ae.GeneAlias="geneAlias",ae.MolecularProfileCount="molecularProfileCount",ae.TherapyName="therapyName",ae.VariantCount="variantCount",ae))(),fe=(()=>((fe=fe||{}).Assertion="ASSERTION",fe.EvidenceItem="EVIDENCE_ITEM",fe.Gene="GENE",fe.MolecularProfile="MOLECULAR_PROFILE",fe.Variant="VARIANT",fe.VariantGroup="VARIANT_GROUP",fe))(),ue=(()=>((ue=ue||{}).All="ALL",ue.WithAccepted="WITH_ACCEPTED",ue.WithAcceptedOrSubmitted="WITH_ACCEPTED_OR_SUBMITTED",ue.WithSubmitted="WITH_SUBMITTED",ue))(),ge=(()=>((ge=ge||{}).AssertionCount="assertionCount",ge.EvidenceItemCount="evidenceItemCount",ge.MolecularProfileScore="molecularProfileScore",ge.VariantCount="variantCount",ge))(),Se=(()=>((Se=Se||{}).Mention="MENTION",Se.Subscription="SUBSCRIPTION",Se))(),ke=(()=>((ke=ke||{}).Id="ID",ke.Name="NAME",ke))(),Rt=(()=>((Rt=Rt||{}).AssertionCount="ASSERTION_COUNT",Rt.EvidenceItemCount="EVIDENCE_ITEM_COUNT",Rt.HpoId="HPO_ID",Rt.Name="NAME",Rt))(),Ft=(()=>((Ft=Ft||{}).Read="READ",Ft.Unread="UNREAD",Ft))(),Mt=(()=>((Mt=Mt||{}).Grch37="GRCH37",Mt.Grch38="GRCH38",Mt.Ncbi36="NCBI36",Mt))(),yt=(()=>((yt=yt||{}).Accepted="ACCEPTED",yt.New="NEW",yt.Rejected="REJECTED",yt.Superseded="SUPERSEDED",yt))(),Ct=(()=>((Ct=Ct||{}).Assertion="ASSERTION",Ct.EvidenceItem="EVIDENCE_ITEM",Ct.Gene="GENE",Ct.MolecularProfile="MOLECULAR_PROFILE",Ct.Revision="REVISION",Ct.Variant="VARIANT",Ct.VariantGroup="VARIANT_GROUP",Ct))(),Lt=(()=>((Lt=Lt||{}).Asc="ASC",Lt.Desc="DESC",Lt))(),rn=(()=>((rn=rn||{}).Asco="ASCO",rn.Ash="ASH",rn.Pubmed="PUBMED",rn))(),Sn=(()=>((Sn=Sn||{}).Curated="CURATED",Sn.New="NEW",Sn.Rejected="REJECTED",Sn))(),rt=(()=>((rt=rt||{}).Citation="CITATION",rt.CitationId="CITATION_ID",rt.CreatedAt="CREATED_AT",rt.DiseaseName="DISEASE_NAME",rt.SourceType="SOURCE_TYPE",rt.Submitter="SUBMITTER",rt))(),Ye=(()=>((Ye=Ye||{}).Authors="AUTHORS",Ye.CitationId="CITATION_ID",Ye.EvidenceCount="EVIDENCE_COUNT",Ye.Journal="JOURNAL",Ye.Name="NAME",Ye.SourceType="SOURCE_TYPE",Ye.SuggestionCount="SUGGESTION_COUNT",Ye.Year="YEAR",Ye))(),Ze=(()=>((Ze=Ze||{}).Assertion="ASSERTION",Ze.EvidenceItem="EVIDENCE_ITEM",Ze.Gene="GENE",Ze.MolecularProfile="MOLECULAR_PROFILE",Ze.Revision="REVISION",Ze.SourceSuggestion="SOURCE_SUGGESTION",Ze.Variant="VARIANT",Ze.VariantGroup="VARIANT_GROUP",Ze))(),Bt=(()=>((Bt=Bt||{}).Assertion="ASSERTION",Bt.EvidenceItem="EVIDENCE_ITEM",Bt.Gene="GENE",Bt.MolecularProfile="MOLECULAR_PROFILE",Bt.Revision="REVISION",Bt.Role="ROLE",Bt.Variant="VARIANT",Bt.VariantGroup="VARIANT_GROUP",Bt))(),Jt=(()=>((Jt=Jt||{}).Combination="COMBINATION",Jt.Sequential="SEQUENTIAL",Jt.Substitutes="SUBSTITUTES",Jt))(),_n=(()=>((_n=_n||{}).AssertionCount="ASSERTION_COUNT",_n.EvidenceItemCount="EVIDENCE_ITEM_COUNT",_n.Name="NAME",_n.NcitId="NCIT_ID",_n))(),On=(()=>((On=On||{}).AllTime="ALL_TIME",On.LastMonth="LAST_MONTH",On.LastWeek="LAST_WEEK",On.LastYear="LAST_YEAR",On))(),cn=(()=>((cn=cn||{}).Admin="ADMIN",cn.Curator="CURATOR",cn.Editor="EDITOR",cn))(),wt=(()=>((wt=wt||{}).Id="ID",wt.LastAction="LAST_ACTION",wt.Name="NAME",wt.Role="ROLE",wt))(),Ve=(()=>((Ve=Ve||{}).EvidenceItemCount="EVIDENCE_ITEM_COUNT",Ve.GeneNames="GENE_NAMES",Ve.Name="NAME",Ve.VariantCount="VARIANT_COUNT",Ve.VariantNames="VARIANT_NAMES",Ve))(),Be=(()=>((Be=Be||{}).CoordinateEnd="COORDINATE_END",Be.CoordinateStart="COORDINATE_START",Be.Name="NAME",Be))(),He=(()=>((He=He||{}).Combined="COMBINED",He.CommonGermline="COMMON_GERMLINE",He.Na="NA",He.RareGermline="RARE_GERMLINE",He.Somatic="SOMATIC",He.Unknown="UNKNOWN",He))(),je=(()=>((je=je||{}).Name="NAME",je.Soid="SOID",je.VariantCount="VARIANT_COUNT",je))(),Ne=(()=>((Ne=Ne||{}).DiseaseName="diseaseName",Ne.EntrezSymbol="entrezSymbol",Ne.TherapyName="therapyName",Ne.VariantName="variantName",Ne))();const De=t.Ps`
    fragment MolecularProfileParsedName on MolecularProfileSegment {
  __typename
  ... on MolecularProfileTextSegment {
    text
  }
  ... on Gene {
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
    `,ie=t.Ps`
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
    ${De}`,Ce=t.Ps`
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
    ${De}`,ve=t.Ps`
    fragment clinicalTrialPopover on BrowseClinicalTrial {
  id
  name
  nctId
  url
  sourceCount
  evidenceCount
}
    `,qe=t.Ps`
    fragment BrowseClinicalTrialsRowFields on BrowseClinicalTrial {
  id
  name
  nctId
  evidenceCount
  sourceCount
  link
}
    `,ct=t.Ps`
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
    __typename
  }
}
    `,Zt=t.Ps`
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
    `,Cn=t.Ps`
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
    `,at=t.Ps`
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
    ${Cn}`,Xe=t.Ps`
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
    ${De}`,it=t.Ps`
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
    ${De}`,Ot=t.Ps`
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
    `,Pt=t.Ps`
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
    ${Ot}`,Wt=t.Ps`
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
  }
  createdAt
  openComment {
    comment
  }
}
    `,kt=t.Ps`
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
    `,Je=t.Ps`
    fragment BrowseGenesFields on BrowseGene {
  id
  entrezId
  name
  link
  flagged
  geneAliases
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
}
    `,K=t.Ps`
    fragment QuicksearchResult on SearchResult {
  id
  resultType
  name
  matchingText
}
    `,N=t.Ps`
    fragment molecularProfilePopoverFields on MolecularProfile {
  id
  name
  parsedName {
    __typename
    ... on MolecularProfileTextSegment {
      text
    }
    ... on Gene {
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
    `,J=t.Ps`
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
  genes {
    id
    name
    link
  }
  variants {
    id
    name
    link
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
    `,Me=t.Ps`
    fragment menuMolecularProfile on MolecularProfile {
  id
  name
  link
  flagged
}
    `,zt=t.Ps`
    fragment LeaderboardOrganizationFields on LeaderboardOrganization {
  id
  name
  actionCount
  rank
  profileImagePath(size: 64)
}
    `,nt=t.Ps`
    fragment orgPopover on Organization {
  id
  profileImagePath(size: 64)
  name
  description
  url
}
    `,We=t.Ps`
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
  mostRecentEvent {
    createdAt
  }
}
    `,ot=t.Ps`
    fragment PhenotypeBrowseTableRowFields on BrowsePhenotype {
  id
  name
  hpoId
  url
  assertionCount
  evidenceCount
  link
}
    `,Vt=t.Ps`
    fragment validationError on FieldValidationError {
  fieldName
  error
}
    `,St=t.Ps`
    fragment revisionPopover on Revision {
  id
  name
  link
  status
  revisor {
    id
    displayName
    role
  }
  subject {
    id
    link
    name
  }
  createdAt
  linkoutData {
    name
  }
  creationComment {
    comment
  }
}
    `,mn=t.Ps`
    fragment revision on Revision {
  id
  revisionSetId
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
          deleted
        }
        addedObjects {
          id
          displayName
          displayType
          entityType
          link
          deleted
        }
        removedObjects {
          id
          displayName
          displayType
          entityType
          link
          deleted
        }
        keptObjects {
          id
          displayName
          displayType
          entityType
          link
          deleted
        }
        suggestedObjects {
          id
          displayName
          displayType
          entityType
          link
          deleted
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
    `,Qe=t.Ps`
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
    `,dt=t.Ps`
    fragment subscriptionId on Subscription {
  id
  __typename
}
    `,se=t.Ps`
    fragment TimepointCount on TimePointCounts {
  allTime
  newThisMonth
  newThisWeek
  newThisYear
}
    `,ze=t.Ps`
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
  initialComment
  status
  reason
  createdAt
}
    `,mt=t.Ps`
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
    `,Pe=t.Ps`
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
    `,lt=t.Ps`
    fragment TherapyBrowseTableRowFields on BrowseTherapy {
  id
  name
  ncitId
  therapyUrl
  assertionCount
  evidenceCount
  link
}
    `,Yt=t.Ps`
    fragment LeaderboardUserFields on LeaderboardUser {
  id
  name
  displayName
  actionCount
  role
  rank
  profileImagePath(size: 64)
}
    `,un=t.Ps`
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
    `,Nt=t.Ps`
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
  mostRecentActionTimestamp
}
    `,pt=t.Ps`
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
    `,gt=t.Ps`
    fragment BrowseVariantGroupRowFields on BrowseVariantGroup {
  id
  name
  link
  geneNames
  variantNames
  variantCount
  evidenceItemCount
}
    `,ee=t.Ps`
    fragment variantTypePopover on VariantTypePopover {
  id
  name
  url
  soid
  variantCount
}
    `,H=t.Ps`
    fragment VariantTypeBrowseTableRowFields on BrowseVariantType {
  id
  name
  soid
  url
  variantCount
  link
}
    `,Te=t.Ps`
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
    `,$e=t.Ps`
    fragment variantPopoverFields on Variant {
  id
  name
  variantAliases
  alleleRegistryId
  gene {
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
    `,Tt=t.Ps`
    fragment menuVariantType on BrowseVariantType {
  id
  name
  link
}
    `,Xt=t.Ps`
    fragment menuVariant on Variant {
  id
  name
  link
  flagged
}
    `,qt=t.Ps`
    fragment BrowseVariantsFields on BrowseVariant {
  id
  name
  link
  geneId
  geneName
  geneLink
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
    `,Un=t.Ps`
    fragment previewComment on CommentBodySegment {
  __typename
  ... on CommentTagSegment {
    entityId
    displayName
    tagType
    link
    status
    deprecated
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
    `,zn=t.Ps`
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
    `,Vn=t.Ps`
    fragment MolecularProfileSelectTypeaheadFields on MolecularProfile {
  id
  name
  link
  molecularProfileAliases
}
    `,vo=t.Ps`
    fragment DiseaseSelectTypeaheadFields on Disease {
  id
  name
  link
  displayName
  doid
  diseaseAliases
}
    `,Xn=t.Ps`
    fragment TherapySelectTypeaheadFields on Therapy {
  id
  name
  link
  ncitId
  therapyAliases
}
    `,Ao=t.Ps`
    fragment PhenotypeSelectTypeaheadFields on Phenotype {
  id
  name
  link
  hpoId
}
    `,jo=t.Ps`
    fragment SourceSelectTypeaheadFields on Source {
  id
  name
  link
  citation
  citationId
  sourceType
}
    `,ei=t.Ps`
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
    ${Vn}
${vo}
${Xn}
${Ao}
${jo}`,bo=t.Ps`
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
    `,eo=t.Ps`
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
    `,hi=t.Ps`
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
    `,si=t.Ps`
    fragment CoordinateFields on Coordinate {
  chromosome
  representativeTranscript
  start
  stop
}
    `,Fo=t.Ps`
    fragment RevisableVariantFields on Variant {
  id
  name
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
  primaryCoordinates {
    ...CoordinateFields
  }
  secondaryCoordinates {
    ...CoordinateFields
  }
  referenceBases
  variantBases
}
    ${si}`,xo=t.Ps`
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
    `,Do=t.Ps`
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
    `,Ri=t.Ps`
    fragment AcmgCodeSelectTypeaheadFields on AcmgCode {
  id
  code
  name
  description
  tooltip
}
    `,oi=t.Ps`
    fragment ClingenCodeSelectTypeaheadFields on ClingenCode {
  id
  code
  name
  description
  tooltip
  exclusive
}
    `,Ti=t.Ps`
    fragment QuickAddDiseaseFields on AddDiseasePayload {
  new
  disease {
    ...DiseaseSelectTypeaheadFields
  }
}
    ${vo}`,Fn=t.Ps`
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
    ${De}`,Mi=t.Ps`
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
    `,bi=t.Ps`
    fragment GeneSelectTypeaheadFields on Gene {
  id
  entrezId
  name
  geneAliases
  link
}
    `,nr=t.Ps`
    fragment PreviewMpName2 on MolecularProfileSegment {
  __typename
  ... on MolecularProfileTextSegment {
    text
  }
  ... on Gene {
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
    `,Ui=t.Ps`
    fragment NccnGuidelineSelectTypeaheadFields on NccnGuideline {
  id
  name
}
    `,Pr=t.Ps`
    fragment QuickAddTherapyFields on AddTherapyPayload {
  new
  therapy {
    ...TherapySelectTypeaheadFields
  }
}
    ${Xn}`,or=(t.Ps`
    fragment VariantManagerFields on BrowseVariant {
  id
  name
  link
  geneId
  geneName
  geneLink
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
    `,t.Ps`
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
    `),Xi=t.Ps`
    fragment QuickAddVariantFields on AddVariantPayload {
  clientMutationId
  new
  variant {
    ...VariantSelectTypeaheadFields
  }
}
    ${or}`,pr=t.Ps`
    fragment VariantTypeSelectTypeaheadFields on VariantType {
  id
  name
  link
  soid
}
    `,hr=t.Ps`
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
}
    `,lo=t.Ps`
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
    ${De}`,Oo=t.Ps`
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
    `,Po=t.Ps`
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
    ${Oo}`,qo=t.Ps`
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
}
    `,Vo=t.Ps`
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
    ${De}`,Zo=t.Ps`
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
    `,Ko=t.Ps`
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
    link
    sourceUrl
    displayType
    sourceType
  }
  variants {
    edges {
      node {
        id
        name
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
    `,_i=t.Ps`
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
      deprecated
      link
      revisionSetId
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
    `,ji=t.Ps`
    fragment MolecularProfileDetailFields on MolecularProfile {
  id
  name
  deprecated
  deprecatedVariants {
    deprecationReason
    deprecationComment {
      ...commentListNode
    }
    id
    deprecated
    name
    link
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
}
    ${_i}`,Zi=t.Ps`
    fragment VariantMolecularProfileCardFields on Variant {
  id
  name
  link
  gene {
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
    `,Xo=t.Ps`
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
}
    ${Zi}
${De}`,jn=t.Ps`
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
    `,so=t.Ps`
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
    `,Ue=t.Ps`
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
    `,oe=t.Ps`
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
    `,Oe=t.Ps`
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
    `,Ge=t.Ps`
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
    `,bt=t.Ps`
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
    `,Ht=t.Ps`
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
    ${bt}`,nn=t.Ps`
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
    `,fn=t.Ps`
    fragment notificationOrganization on Organization {
  id
  name
}
    `,en=t.Ps`
    fragment notificationOriginatingUsers on User {
  id
  displayName
}
    `,vn=t.Ps`
    fragment notificationFeedSubjects on EventSubjectWithCount {
  subject {
    id
    __typename
    name
  }
  occuranceCount
}
    `,Nn=t.Ps`
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
    ${Cn}`,bn=t.Ps`
    fragment subscribable on Subscribable {
  id
  entityType
  __typename
}
    `,dn=t.Ps`
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
    `,xn=t.Ps`
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
    `,Wn=t.Ps`
    fragment VariantDetailFields on Variant {
  id
  name
  deprecated
  deprecationReason
  deprecationComment {
    ...commentListNode
  }
  gene {
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
    ${_i}`,In=t.Ps`
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
    `,Hn=t.Ps`
    fragment VariantSummaryFields on Variant {
  id
  name
  gene {
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
}
    ${In}`,Gn=t.Ps`
    query AssertionPopover($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...assertionPopover
  }
}
    ${ie}`;let Zn=(()=>{class C extends t.AE{constructor(le){super(le),this.document=Gn}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const to=t.Ps`
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
    ${Ce}`;let yo=(()=>{class C extends t.AE{constructor(le){super(le),this.document=to}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const _o=t.Ps`
    query ClinicalTrialPopover($clinicalTrialId: Int!) {
  clinicalTrials(id: $clinicalTrialId) {
    edges {
      node {
        ...clinicalTrialPopover
      }
    }
  }
}
    ${ve}`;let Jn=(()=>{class C extends t.AE{constructor(le){super(le),this.document=_o}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const No=t.Ps`
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
    ${qe}`;let To=(()=>{class C extends t.AE{constructor(le){super(le),this.document=No}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Go=t.Ps`
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
    ${_i}`;let Co=(()=>{class C extends t.AE{constructor(le){super(le),this.document=Go}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const fi=t.Ps`
    query CommentPopover($commentId: Int!) {
  comment(id: $commentId) {
    ...commentPopover
  }
}
    ${ct}`;let yi=(()=>{class C extends t.AE{constructor(le){super(le),this.document=fi}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Io=t.Ps`
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
    `;let ko=(()=>{class C extends t.AE{constructor(le){super(le),this.document=Io}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Ki=t.Ps`
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
    ${Zt}`;let ii=(()=>{class C extends t.AE{constructor(le){super(le),this.document=Ki}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const mi=t.Ps`
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
    `;let ir=(()=>{class C extends t.AE{constructor(le){super(le),this.document=mi}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Ii=t.Ps`
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
    ${at}`;let Ji=(()=>{class C extends t.AE{constructor(le){super(le),this.document=Ii}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const di=t.Ps`
    query EvidencePopover($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...evidencePopover
  }
}
    ${Xe}`;let Le=(()=>{class C extends t.AE{constructor(le){super(le),this.document=di}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Ut=t.Ps`
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
    ${it}`;let W=(()=>{class C extends t.AE{constructor(le){super(le),this.document=Ut}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Re=t.Ps`
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
    ${Pt}`;let jt=(()=>{class C extends t.AE{constructor(le){super(le),this.document=Re}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const sn=t.Ps`
    query FlagPopover($flagId: Int!) {
  flag(id: $flagId) {
    ...flagPopover
  }
}
    ${Wt}`;let Rn=(()=>{class C extends t.AE{constructor(le){super(le),this.document=sn}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const ho=t.Ps`
    query GenePopover($geneId: Int!) {
  gene(id: $geneId) {
    ...genePopover
  }
}
    ${kt}`;let fo=(()=>{class C extends t.AE{constructor(le){super(le),this.document=ho}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Uo=t.Ps`
    query BrowseGenes($entrezSymbol: String, $therapyName: String, $geneAlias: String, $diseaseName: String, $sortBy: GenesSort, $first: Int, $last: Int, $before: String, $after: String) {
  browseGenes(
    entrezSymbol: $entrezSymbol
    therapyName: $therapyName
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
        ...BrowseGenesFields
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
    ${Je}`;let ti=(()=>{class C extends t.AE{constructor(le){super(le),this.document=Uo}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const uo=t.Ps`
    query Quicksearch($query: String!, $types: [SearchableEntities!], $highlightMatches: Boolean) {
  search(query: $query, types: $types, highlightMatches: $highlightMatches) {
    ...QuicksearchResult
  }
}
    ${K}`;let Vi=(()=>{class C extends t.AE{constructor(le){super(le),this.document=uo}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Ai=t.Ps`
    query MolecularProfilePopover($molecularProfileId: Int!) {
  molecularProfile(id: $molecularProfileId) {
    ...molecularProfilePopoverFields
  }
}
    ${N}`;let Cr=(()=>{class C extends t.AE{constructor(le){super(le),this.document=Ai}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const ps=t.Ps`
    query BrowseMolecularProfiles($molecularProfileName: String, $variantName: String, $variantId: Int, $entrezSymbol: String, $diseaseName: String, $therapyName: String, $molecularProfileAlias: String, $sortBy: MolecularProfilesSort, $first: Int, $last: Int, $before: String, $after: String) {
  browseMolecularProfiles(
    molecularProfileName: $molecularProfileName
    variantName: $variantName
    variantId: $variantId
    entrezSymbol: $entrezSymbol
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
    ${J}`;let Ee=(()=>{class C extends t.AE{constructor(le){super(le),this.document=ps}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const ye=t.Ps`
    query MolecularProfileMenu($geneId: Int, $mpName: String, $first: Int, $last: Int, $before: String, $after: String, $evidenceStatusFilter: MolecularProfileDisplayFilter) {
  molecularProfiles(
    geneId: $geneId
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
    ${Me}`;let de=(()=>{class C extends t.AE{constructor(le){super(le),this.document=ye}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const ut=t.Ps`
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
    ${zt}`;let yn=(()=>{class C extends t.AE{constructor(le){super(le),this.document=ut}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Qn=t.Ps`
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
    ${zt}`;let pi=(()=>{class C extends t.AE{constructor(le){super(le),this.document=Qn}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const ai=t.Ps`
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
    ${zt}`;let Ir=(()=>{class C extends t.AE{constructor(le){super(le),this.document=ai}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const xs=t.Ps`
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
    ${zt}`;let Ma=(()=>{class C extends t.AE{constructor(le){super(le),this.document=xs}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const js=t.Ps`
    query OrgPopover($orgId: Int!) {
  organization(id: $orgId) {
    ...orgPopover
  }
}
    ${nt}`;let Gs=(()=>{class C extends t.AE{constructor(le){super(le),this.document=js}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const hs=t.Ps`
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
    ${We}`;let Ds=(()=>{class C extends t.AE{constructor(le){super(le),this.document=hs}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Yr=t.Ps`
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
    `;let $r=(()=>{class C extends t.AE{constructor(le){super(le),this.document=Yr}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const rr=t.Ps`
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
    ${ot}`;let Ur=(()=>{class C extends t.AE{constructor(le){super(le),this.document=rr}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const ri=t.Ps`
    mutation AcceptRevision($input: AcceptRevisionsInput!) {
  acceptRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;let fr=(()=>{class C extends t.mm{constructor(le){super(le),this.document=ri}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Os=t.Ps`
    mutation RejectRevision($input: RejectRevisionsInput!) {
  rejectRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;let Ar=(()=>{class C extends t.mm{constructor(le){super(le),this.document=Os}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Sr=t.Ps`
    query ValidateRevisionsForAcceptance($ids: [Int!]!) {
  validateRevisionsForAcceptance(revisionIds: $ids) {
    genericErrors
    validationErrors {
      ...validationError
    }
  }
}
    ${Vt}`;let jr=(()=>{class C extends t.AE{constructor(le){super(le),this.document=Sr}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Qs=t.Ps`
    query RevisionPopover($revisionId: Int!) {
  revision(id: $revisionId) {
    ...revisionPopover
  }
}
    ${St}`;let Fr=(()=>{class C extends t.AE{constructor(le){super(le),this.document=Qs}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const fs=t.Ps`
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
    ${mn}`;let mr=(()=>{class C extends t.AE{constructor(le){super(le),this.document=fs}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Xa=t.Ps`
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
    ${Qe}`;let Er=(()=>{class C extends t.AE{constructor(le){super(le),this.document=Xa}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const ba=t.Ps`
    query SubscriptionForEntity($subscribable: SubscribableInput!) {
  subscriptionForEntity(subscribable: $subscribable) {
    ...subscriptionId
  }
}
    ${dt}`;let Qc=(()=>{class C extends t.AE{constructor(le){super(le),this.document=ba}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const ec=t.Ps`
    mutation ModerateEvidenceItem($input: ModerateEvidenceItemInput!) {
  moderateEvidenceItem(input: $input) {
    evidenceItem {
      id
    }
  }
}
    `;let xr=(()=>{class C extends t.mm{constructor(le){super(le),this.document=ec}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const sr=t.Ps`
    mutation ModerateAssertion($input: ModerateAssertionInput!) {
  moderateAssertion(input: $input) {
    assertion {
      id
    }
  }
}
    `;let Xr=(()=>{class C extends t.mm{constructor(le){super(le),this.document=sr}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Nr=t.Ps`
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
    comments {
      ...TimepointCount
    }
    molecularProfiles {
      ...TimepointCount
    }
  }
}
    ${se}`;let ws=(()=>{class C extends t.AE{constructor(le){super(le),this.document=Nr}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const es=t.Ps`
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
    ${ze}`;let Ws=(()=>{class C extends t.AE{constructor(le){super(le),this.document=es}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();t.Ps`
    mutation UpdateSourceSuggestionStatus($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;const Sa=t.Ps`
    query SourcePopover($sourceId: Int!) {
  sourcePopover(id: $sourceId) {
    ...sourcePopover
  }
}
    ${mt}`;let Zs=(()=>{class C extends t.AE{constructor(le){super(le),this.document=Sa}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Ks=t.Ps`
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
    ${Pe}`;let Js=(()=>{class C extends t.AE{constructor(le){super(le),this.document=Ks}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Gi=t.Ps`
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
    `;let Fi=(()=>{class C extends t.AE{constructor(le){super(le),this.document=Gi}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const qs=t.Ps`
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
    ${lt}`;let ci=(()=>{class C extends t.AE{constructor(le){super(le),this.document=qs}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Lr=t.Ps`
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
    ${Yt}`;let ne=(()=>{class C extends t.AE{constructor(le){super(le),this.document=Lr}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Fe=t.Ps`
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
    ${Yt}`;let he=(()=>{class C extends t.AE{constructor(le){super(le),this.document=Fe}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const et=t.Ps`
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
    ${Yt}`;let At=(()=>{class C extends t.AE{constructor(le){super(le),this.document=et}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const pn=t.Ps`
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
    ${Yt}`;let Tn=(()=>{class C extends t.AE{constructor(le){super(le),this.document=pn}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const no=t.Ps`
    query UserPopover($userId: Int!) {
  user(id: $userId) {
    ...popoverUser
  }
}
    ${un}`;let Qo=(()=>{class C extends t.AE{constructor(le){super(le),this.document=no}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const mo=t.Ps`
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
    ${Nt}`;let Bo=(()=>{class C extends t.AE{constructor(le){super(le),this.document=mo}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const wo=t.Ps`
    query VariantGroupPopover($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...variantGroupPopoverFields
  }
}
    ${pt}`;let gi=(()=>{class C extends t.AE{constructor(le){super(le),this.document=wo}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Wo=t.Ps`
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
    lastUpdated
    edges {
      cursor
      node {
        ...BrowseVariantGroupRowFields
      }
    }
  }
}
    ${gt}`;let Ci=(()=>{class C extends t.AE{constructor(le){super(le),this.document=Wo}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const zi=t.Ps`
    query VariantTypePopover($variantTypeId: Int!) {
  variantTypePopover(id: $variantTypeId) {
    ...variantTypePopover
  }
}
    ${ee}`;let co=(()=>{class C extends t.AE{constructor(le){super(le),this.document=zi}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const gr=t.Ps`
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
    ${H}`;let ar=(()=>{class C extends t.AE{constructor(le){super(le),this.document=gr}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const kr=t.Ps`
    query CoordinatesCard($variantId: Int!) {
  variant(id: $variantId) {
    ...CoordinatesCardFields
  }
}
    ${Te}`;let Dr=(()=>{class C extends t.AE{constructor(le){super(le),this.document=kr}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const cr=t.Ps`
    query VariantPopover($variantId: Int!) {
  variant(id: $variantId) {
    ...variantPopoverFields
  }
}
    ${$e}`;let Ea=(()=>{class C extends t.AE{constructor(le){super(le),this.document=cr}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Gr=t.Ps`
    query VariantsMenu($geneId: Int, $variantName: String, $variantTypeIds: [Int!], $hasNoVariantType: Boolean, $first: Int, $last: Int, $before: String, $after: String, $sortBy: VariantMenuSort) {
  variants(
    geneId: $geneId
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
    ${Xt}`;let Qr=(()=>{class C extends t.AE{constructor(le){super(le),this.document=Gr}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const tc=t.Ps`
    query VariantTypesForGene($geneId: Int) {
  variantTypes(geneId: $geneId, first: 50) {
    edges {
      node {
        ...menuVariantType
      }
    }
  }
}
    ${Tt}`;let $l=(()=>{class C extends t.AE{constructor(le){super(le),this.document=tc}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const nc=t.Ps`
    query BrowseVariants($variantName: String, $entrezSymbol: String, $diseaseName: String, $therapyName: String, $variantAlias: String, $variantTypeId: Int, $variantGroupId: Int, $variantTypeName: String, $hasNoVariantType: Boolean, $sortBy: VariantsSort, $first: Int, $last: Int, $before: String, $after: String) {
  browseVariants(
    variantName: $variantName
    entrezSymbol: $entrezSymbol
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
    ${qt}`;let Rr=(()=>{class C extends t.AE{constructor(le){super(le),this.document=nc}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const wn=t.Ps`
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
    `;let Ho=(()=>{class C extends t.AE{constructor(le){super(le),this.document=wn}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Wc=t.Ps`
    query ViewerNotificationCount {
  notifications {
    unreadCount
  }
}
    `;let Xs=(()=>{class C extends t.AE{constructor(le){super(le),this.document=Wc}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Ei=t.Ps`
    mutation AddComment($input: AddCommentInput!) {
  addComment(input: $input) {
    clientMutationId
    comment {
      ...commentListNode
    }
  }
}
    ${_i}`;let ts=(()=>{class C extends t.mm{constructor(le){super(le),this.document=Ei}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Vr=t.Ps`
    query previewComment($commentText: String!) {
  previewCommentText(commentText: $commentText) {
    ...previewComment
  }
}
    ${Un}`;let lr=(()=>{class C extends t.AE{constructor(le){super(le),this.document=Vr}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const ea=t.Ps`
    query userTypeahead($queryTerm: String!) {
  userTypeahead(queryTerm: $queryTerm) {
    username
  }
}
    `;let Zc=(()=>{class C extends t.AE{constructor(le){super(le),this.document=ea}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const ta=t.Ps`
    query entityTypeahead($queryTerm: String!) {
  entityTypeahead(queryTerm: $queryTerm) {
    entityId
    tagType
    displayName
  }
}
    `;let Xu=(()=>{class C extends t.AE{constructor(le){super(le),this.document=ta}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Kc=t.Ps`
    query LinkableGene($geneId: Int!) {
  gene(id: $geneId) {
    id
    name
    link
  }
}
    `;let er=(()=>{class C extends t.AE{constructor(le){super(le),this.document=Kc}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();t.Ps`
    query LinkableVariant($variantId: Int!) {
  variant(id: $variantId) {
    id
    name
    link
  }
}
    `,t.Ps`
    query LinkableTherapy($therapyId: Int!) {
  therapy(id: $therapyId) {
    id
    name
    link
  }
}
    `;const Jc=t.Ps`
    mutation FlagEntity($input: FlagEntityInput!) {
  flagEntity(input: $input) {
    flag {
      id
    }
  }
}
    `;let xa=(()=>{class C extends t.mm{constructor(le){super(le),this.document=Jc}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const qc=t.Ps`
    mutation ResolveFlag($input: ResolveFlagInput!) {
  resolveFlag(input: $input) {
    flag {
      id
    }
  }
}
    `;let Xc=(()=>{class C extends t.mm{constructor(le){super(le),this.document=qc}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Da=t.Ps`
    mutation UpdateSourceSuggestion($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;let Oa=(()=>{class C extends t.mm{constructor(le){super(le),this.document=Da}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const wa=t.Ps`
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
    `;let Pa=(()=>{class C extends t.mm{constructor(le){super(le),this.document=wa}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const oc=t.Ps`
    mutation UpdateUserProfile($input: EditUserInput!) {
  editUser(input: $input) {
    user {
      id
    }
  }
}
    `;let Ia=(()=>{class C extends t.mm{constructor(le){super(le),this.document=oc}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const el=t.Ps`
    query Countries {
  countries {
    id
    name
  }
}
    `;let Aa=(()=>{class C extends t.AE{constructor(le){super(le),this.document=el}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const tl=t.Ps`
    mutation DeprecateVariant($variantId: Int!, $deprecationReason: DeprecationReason!, $comment: String!, $organizationId: Int) {
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
    `;let nl=(()=>{class C extends t.mm{constructor(le){super(le),this.document=tl}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const ol=t.Ps`
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
    `;let ic=(()=>{class C extends t.AE{constructor(le){super(le),this.document=ol}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const B=t.Ps`
    query AssertionRevisableFields($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...RevisableAssertionFields
  }
}
    ${zn}`;let X=(()=>{class C extends t.AE{constructor(le){super(le),this.document=B}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const x=t.Ps`
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
    `;let ce=(()=>{class C extends t.mm{constructor(le){super(le),this.document=x}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Ie=t.Ps`
    mutation SubmitAssertion($input: SubmitAssertionInput!) {
  submitAssertion(input: $input) {
    clientMutationId
    assertion {
      id
    }
  }
}
    `;let ht=(()=>{class C extends t.mm{constructor(le){super(le),this.document=Ie}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const _t=t.Ps`
    query EvidenceItemRevisableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...RevisableEvidenceFields
  }
}
    ${ei}`;let an=(()=>{class C extends t.AE{constructor(le){super(le),this.document=_t}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const An=t.Ps`
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
    `;let io=(()=>{class C extends t.mm{constructor(le){super(le),this.document=An}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();t.Ps`
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
    `,t.Ps`
    query EvidenceSubmittableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...SubmittableEvidenceFields
  }
}
    ${bo}`;const Br=t.Ps`
    mutation SubmitEvidenceItem($input: SubmitEvidenceItemInput!) {
  submitEvidence(input: $input) {
    clientMutationId
    evidenceItem {
      id
    }
  }
}
    `;let zr=(()=>{class C extends t.mm{constructor(le){super(le),this.document=Br}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Bi=t.Ps`
    query ExistingEvidenceCount($molecularProfileId: Int!, $sourceId: Int!) {
  evidenceItems(molecularProfileId: $molecularProfileId, sourceId: $sourceId) {
    totalCount
  }
}
    `;let Tr=(()=>{class C extends t.AE{constructor(le){super(le),this.document=Bi}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Ul=t.Ps`
    query FullyCuratedSource($sourceId: Int!) {
  source(id: $sourceId) {
    fullyCurated
  }
}
    `;let jl=(()=>{class C extends t.AE{constructor(le){super(le),this.document=Ul}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Gl=t.Ps`
    query GeneRevisableFields($geneId: Int!) {
  gene(id: $geneId) {
    ...RevisableGeneFields
  }
}
    ${eo}`;let oa=(()=>{class C extends t.AE{constructor(le){super(le),this.document=Gl}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Fs=t.Ps`
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
    `;let rc=(()=>{class C extends t.mm{constructor(le){super(le),this.document=Fs}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const e1=t.Ps`
    query MolecularProfileRevisableFields($molecularProfileId: Int!) {
  molecularProfile(id: $molecularProfileId) {
    ...RevisableMolecularProfileFields
  }
}
    ${hi}`;let il=(()=>{class C extends t.AE{constructor(le){super(le),this.document=e1}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Ql=t.Ps`
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
    `;let t1=(()=>{class C extends t.mm{constructor(le){super(le),this.document=Ql}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const rl=t.Ps`
    mutation SubmitSource($input: SuggestSourceInput!) {
  suggestSource(input: $input) {
    clientMutationId
    sourceSuggestion {
      id
    }
  }
}
    `;let pd=(()=>{class C extends t.mm{constructor(le){super(le),this.document=rl}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const hd=t.Ps`
    query SourceSuggestionChecks($sourceId: Int!) {
  source(id: $sourceId) {
    fullyCurated
  }
  sourceSuggestions(sourceId: $sourceId) {
    filteredCount
  }
}
    `;let Wl=(()=>{class C extends t.AE{constructor(le){super(le),this.document=hd}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const sc=t.Ps`
    query VariantRevisableFields($variantId: Int!) {
  variant(id: $variantId) {
    ...RevisableVariantFields
  }
}
    ${Fo}`;let Zl=(()=>{class C extends t.AE{constructor(le){super(le),this.document=sc}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const ms=t.Ps`
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
    `;let ac=(()=>{class C extends t.mm{constructor(le){super(le),this.document=ms}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const cc=t.Ps`
    query VariantGroupRevisableFields($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupRevisableFields
  }
}
    ${xo}`;let Kl=(()=>{class C extends t.AE{constructor(le){super(le),this.document=cc}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const sl=t.Ps`
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
    `;let Fa=(()=>{class C extends t.mm{constructor(le){super(le),this.document=sl}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();t.Ps`
    query VariantGroupSubmittableFields($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...SubmittableVariantGroupFields
  }
}
    ${Do}`;const ia=t.Ps`
    mutation SubmitVariantGroup($input: SubmitVariantGroupInput!) {
  submitVariantGroup(input: $input) {
    clientMutationId
    variantGroup {
      id
    }
  }
}
    `;let Na=(()=>{class C extends t.mm{constructor(le){super(le),this.document=ia}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const lc=t.Ps`
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
    `;let uc=(()=>{class C extends t.AE{constructor(le){super(le),this.document=lc}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const dc=t.Ps`
    query AcmgCodeSelectTypeahead($code: String!) {
  acmgCodesTypeahead(queryTerm: $code) {
    ...AcmgCodeSelectTypeaheadFields
  }
}
    ${Ri}`;let al=(()=>{class C extends t.AE{constructor(le){super(le),this.document=dc}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const n1=t.Ps`
    query AcmgCodeSelectTag($id: Int!) {
  acmgCode(id: $id) {
    ...AcmgCodeSelectTypeaheadFields
  }
}
    ${Ri}`;let o1=(()=>{class C extends t.AE{constructor(le){super(le),this.document=n1}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const r1=t.Ps`
    query ClingenCodeSelectTypeahead($code: String!) {
  clingenCodesTypeahead(queryTerm: $code) {
    ...ClingenCodeSelectTypeaheadFields
  }
}
    ${oi}`;let ql=(()=>{class C extends t.AE{constructor(le){super(le),this.document=r1}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const cl=t.Ps`
    query ClingenCodeSelectTag($id: Int!) {
  clingenCode(id: $id) {
    ...ClingenCodeSelectTypeaheadFields
  }
}
    ${oi}`;let pc=(()=>{class C extends t.AE{constructor(le){super(le),this.document=cl}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const La=t.Ps`
    mutation QuickAddDisease($name: String!, $doid: String) {
  addDisease(input: {name: $name, doid: $doid}) {
    ...QuickAddDiseaseFields
  }
}
    ${Ti}`;let ns=(()=>{class C extends t.mm{constructor(le){super(le),this.document=La}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Xl=t.Ps`
    query DiseaseSelectTypeahead($name: String!) {
  diseaseTypeahead(queryTerm: $name) {
    ...DiseaseSelectTypeaheadFields
  }
}
    ${vo}`;let eu=(()=>{class C extends t.AE{constructor(le){super(le),this.document=Xl}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const ll=t.Ps`
    query DiseaseSelectTag($id: Int!) {
  disease(id: $id) {
    ...DiseaseSelectTypeaheadFields
  }
}
    ${vo}`;let Ns=(()=>{class C extends t.AE{constructor(le){super(le),this.document=ll}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const tu=t.Ps`
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
    ${Fn}`;let ul=(()=>{class C extends t.AE{constructor(le){super(le),this.document=tu}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const hc=t.Ps`
    query EvidenceSelectTypeahead($eid: Int!) {
  evidenceItems(id: $eid) {
    nodes {
      ...EvidenceSelectTypeaheadFields
    }
  }
}
    ${Mi}`;let nu=(()=>{class C extends t.AE{constructor(le){super(le),this.document=hc}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const dl=t.Ps`
    query EvidenceSelectTag($eid: Int!) {
  evidenceItem(id: $eid) {
    ...EvidenceSelectTypeaheadFields
  }
}
    ${Mi}`;let fc=(()=>{class C extends t.AE{constructor(le){super(le),this.document=dl}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const ra=t.Ps`
    query GeneSelectTypeahead($entrezSymbol: String!) {
  geneTypeahead(queryTerm: $entrezSymbol) {
    ...GeneSelectTypeaheadFields
  }
}
    ${bi}`;let Ls=(()=>{class C extends t.AE{constructor(le){super(le),this.document=ra}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const ks=t.Ps`
    query GeneSelectTag($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneSelectTypeaheadFields
  }
}
    ${bi}`;let pl=(()=>{class C extends t.AE{constructor(le){super(le),this.document=ks}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const gs=t.Ps`
    query MolecularProfileSelectTypeahead($name: String!, $geneId: Int) {
  molecularProfiles(name: $name, geneId: $geneId, first: 25) {
    nodes {
      ...MolecularProfileSelectTypeaheadFields
    }
  }
}
    ${Vn}`;let sa=(()=>{class C extends t.AE{constructor(le){super(le),this.document=gs}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const aa=t.Ps`
    query MolecularProfileSelectTag($molecularProfileId: Int!) {
  molecularProfile(id: $molecularProfileId) {
    ...MolecularProfileSelectTypeaheadFields
  }
}
    ${Vn}`;let ou=(()=>{class C extends t.AE{constructor(le){super(le),this.document=aa}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const s1=t.Ps`
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
    ${nr}`;let a1=(()=>{class C extends t.AE{constructor(le){super(le),this.document=s1}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const c1=t.Ps`
    query MpExpressionEditorPrepopulate($mpId: Int!) {
  molecularProfile(id: $mpId) {
    id
    parsedName {
      ...MolecularProfileParsedName
    }
    rawName
  }
}
    ${De}`;let l1=(()=>{class C extends t.AE{constructor(le){super(le),this.document=c1}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const hl=t.Ps`
    mutation CreateMolecularProfile2($mpStructure: MolecularProfileComponentInput!) {
  createMolecularProfile(input: {structure: $mpStructure}) {
    molecularProfile {
      id
      name
      link
    }
  }
}
    `;let u1=(()=>{class C extends t.mm{constructor(le){super(le),this.document=hl}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const ca=t.Ps`
    query NccnGuidelineSelectTypeahead($name: String!) {
  nccnGuidelinesTypeahead(queryTerm: $name) {
    ...NccnGuidelineSelectTypeaheadFields
  }
}
    ${Ui}`;let d1=(()=>{class C extends t.AE{constructor(le){super(le),this.document=ca}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const p1=t.Ps`
    query NccnGuidelineSelectTag($id: Int!) {
  nccnGuideline(id: $id) {
    ...NccnGuidelineSelectTypeaheadFields
  }
}
    ${Ui}`;let Ni=(()=>{class C extends t.AE{constructor(le){super(le),this.document=p1}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const fl=t.Ps`
    query PhenotypeSelectTypeahead($name: String!) {
  phenotypeTypeahead(queryTerm: $name) {
    ...PhenotypeSelectTypeaheadFields
  }
}
    ${Ao}`;let la=(()=>{class C extends t.AE{constructor(le){super(le),this.document=fl}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const iu=t.Ps`
    query PhenotypeSelectTag($id: Int!) {
  phenotype(id: $id) {
    ...PhenotypeSelectTypeaheadFields
  }
}
    ${Ao}`;let Mr=(()=>{class C extends t.AE{constructor(le){super(le),this.document=iu}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const ua=t.Ps`
    query QuickAddSourceCheckCitation($sourceType: SourceSource!, $citationId: String!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;let ml=(()=>{class C extends t.AE{constructor(le){super(le),this.document=ua}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const ka=t.Ps`
    mutation QuickAddSourceRemoteCitation($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      id
      citationId
      sourceType
    }
  }
}
    `;let da=(()=>{class C extends t.mm{constructor(le){super(le),this.document=ka}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const h1=t.Ps`
    query SourceSelectTypeahead($partialCitationId: String!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceSelectTypeaheadFields
  }
}
    ${jo}`;let f1=(()=>{class C extends t.AE{constructor(le){super(le),this.document=h1}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const mc=t.Ps`
    query SourceSelectTag($id: Int!) {
  source(id: $id) {
    ...SourceSelectTypeaheadFields
  }
}
    ${jo}`;let m1=(()=>{class C extends t.AE{constructor(le){super(le),this.document=mc}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const vr=t.Ps`
    mutation QuickAddTherapy($name: String!, $ncitId: String) {
  addTherapy(input: {name: $name, ncitId: $ncitId}) {
    ...QuickAddTherapyFields
  }
}
    ${Pr}`;let Ra=(()=>{class C extends t.mm{constructor(le){super(le),this.document=vr}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const vs=t.Ps`
    query TherapySelectTypeahead($name: String!) {
  therapyTypeahead(queryTerm: $name) {
    ...TherapySelectTypeaheadFields
  }
}
    ${Xn}`;let fd=(()=>{class C extends t.AE{constructor(le){super(le),this.document=vs}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const gl=t.Ps`
    query TherapySelectTag($id: Int!) {
  therapy(id: $id) {
    ...TherapySelectTypeaheadFields
  }
}
    ${Xn}`;let ru=(()=>{class C extends t.AE{constructor(le){super(le),this.document=gl}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const su=t.Ps`
    query VariantManager($variantName: String, $entrezSymbol: String, $diseaseName: String, $therapyName: String, $variantAlias: String, $variantTypeId: Int, $variantGroupId: Int, $sortBy: VariantsSort, $first: Int, $last: Int, $before: String, $after: String) {
  browseVariants(
    variantName: $variantName
    entrezSymbol: $entrezSymbol
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
    ${qt}`;let au=(()=>{class C extends t.AE{constructor(le){super(le),this.document=su}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const cu=t.Ps`
    mutation QuickAddVariant($name: String!, $geneId: Int!) {
  addVariant(input: {name: $name, geneId: $geneId}) {
    ...QuickAddVariantFields
  }
}
    ${Xi}`;let lu=(()=>{class C extends t.mm{constructor(le){super(le),this.document=cu}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const vl=t.Ps`
    query VariantSelectTypeahead($name: String!, $geneId: Int) {
  variants(name: $name, geneId: $geneId, first: 50) {
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
    ${or}`;let gc=(()=>{class C extends t.AE{constructor(le){super(le),this.document=vl}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Va=t.Ps`
    query VariantSelectTag($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantSelectTypeaheadFields
  }
}
    ${or}`;let vc=(()=>{class C extends t.AE{constructor(le){super(le),this.document=Va}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const os=t.Ps`
    query VariantTypeSelectTypeahead($name: String!) {
  variantTypeTypeahead(queryTerm: $name) {
    ...VariantTypeSelectTypeaheadFields
  }
}
    ${pr}`;let uu=(()=>{class C extends t.AE{constructor(le){super(le),this.document=os}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Ba=t.Ps`
    query VariantTypeSelectTag($id: Int!) {
  variantType(id: $id) {
    ...VariantTypeSelectTypeaheadFields
  }
}
    ${pr}`;let du=(()=>{class C extends t.AE{constructor(le){super(le),this.document=Ba}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const pu=t.Ps`
    query AssertionDetail($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionDetailFields
  }
}
    ${hr}`;let _c=(()=>{class C extends t.AE{constructor(le){super(le),this.document=pu}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Ha=t.Ps`
    query AssertionSummary($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionSummaryFields
  }
}
    ${lo}`;let _s=(()=>{class C extends t.AE{constructor(le){super(le),this.document=Ha}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const _l=t.Ps`
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
    `;let hu=(()=>{class C extends t.AE{constructor(le){super(le),this.document=_l}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Rs=t.Ps`
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
    `;let pa=(()=>{class C extends t.AE{constructor(le){super(le),this.document=Rs}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const yc=t.Ps`
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
    `;let g1=(()=>{class C extends t.AE{constructor(le){super(le),this.document=yc}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const yl=t.Ps`
    query DiseasesSummary($diseaseId: Int!) {
  disease(id: $diseaseId) {
    ...DiseasesSummaryFields
  }
}
    ${Po}`;let fu=(()=>{class C extends t.AE{constructor(le){super(le),this.document=yl}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const v1=t.Ps`
    query EvidenceDetail($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceDetailFields
  }
}
    ${qo}`;let mu=(()=>{class C extends t.AE{constructor(le){super(le),this.document=v1}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const gu=t.Ps`
    query EvidenceSummary($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceSummaryFields
  }
}
    ${Vo}`;let Cl=(()=>{class C extends t.AE{constructor(le){super(le),this.document=gu}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Ya=t.Ps`
    query GeneDetail($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneDetailFields
  }
}
    ${Zo}`;let zl=(()=>{class C extends t.AE{constructor(le){super(le),this.document=Ya}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Tl=t.Ps`
    query GenesSummary($geneId: Int!) {
  gene(id: $geneId) {
    ...GeneSummaryFields
  }
}
    ${Ko}`;let Ml=(()=>{class C extends t.AE{constructor(le){super(le),this.document=Tl}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const _1=t.Ps`
    query MolecularProfileDetail($mpId: Int!) {
  molecularProfile(id: $mpId) {
    ...MolecularProfileDetailFields
  }
}
    ${ji}`;let bl=(()=>{class C extends t.AE{constructor(le){super(le),this.document=_1}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const y1=t.Ps`
    query MolecularProfileSummary($mpId: Int!) {
  molecularProfile(id: $mpId) {
    ...MolecularProfileSummaryFields
  }
}
    ${Xo}`;let vu=(()=>{class C extends t.AE{constructor(le){super(le),this.document=y1}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const _u=t.Ps`
    query OrganizationDetail($organizationId: Int!) {
  organization(id: $organizationId) {
    ...OrganizationDetailFields
  }
}
    ${jn}`;let Cc=(()=>{class C extends t.AE{constructor(le){super(le),this.document=_u}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const C1=t.Ps`
    query OrganizationGroups($organizationId: Int!) {
  organization(id: $organizationId) {
    subGroups {
      ...OrganizationGroupsFields
    }
  }
}
    ${so}`;let md=(()=>{class C extends t.AE{constructor(le){super(le),this.document=C1}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const zc=t.Ps`
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
    ${Ue}`;let z1=(()=>{class C extends t.AE{constructor(le){super(le),this.document=zc}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const T1=t.Ps`
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
    `;let yu=(()=>{class C extends t.AE{constructor(le){super(le),this.document=T1}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const M1=t.Ps`
    query DataReleases {
  dataReleases {
    ...Release
  }
}
    ${oe}`;let gd=(()=>{class C extends t.AE{constructor(le){super(le),this.document=M1}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const b1=t.Ps`
    query SourceDetail($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceDetailFields
  }
}
    ${Oe}`;let Tc=(()=>{class C extends t.AE{constructor(le){super(le),this.document=b1}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Mc=t.Ps`
    query SourceSummary($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceSummaryFields
  }
}
    ${Ge}`;let Cu=(()=>{class C extends t.AE{constructor(le){super(le),this.document=Mc}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Sl=t.Ps`
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
    `;let bc=(()=>{class C extends t.AE{constructor(le){super(le),this.document=Sl}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const is=t.Ps`
    query TherapiesSummary($therapyId: Int!) {
  therapy(id: $therapyId) {
    ...TherapiesSummaryFields
  }
}
    ${Ht}`;let Sc=(()=>{class C extends t.AE{constructor(le){super(le),this.document=is}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const zu=t.Ps`
    query UserDetail($userId: Int!) {
  user(id: $userId) {
    ...UserDetailFields
  }
}
    ${nn}`;let ha=(()=>{class C extends t.AE{constructor(le){super(le),this.document=zu}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const $a=t.Ps`
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
    ${vn}
${en}
${fn}
${Nn}`;let Or=(()=>{class C extends t.AE{constructor(le){super(le),this.document=$a}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Tu=t.Ps`
    mutation UpdateNotificationStatus($input: UpdateNotificationStatusInput!) {
  updateNotificationStatus(input: $input) {
    notifications {
      ...notificationNode
    }
  }
}
    ${Nn}`;let Vs=(()=>{class C extends t.mm{constructor(le){super(le),this.document=Tu}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Ec=t.Ps`
    mutation Unsubscribe($input: UnsubscribeInput!) {
  unsubscribe(input: $input) {
    unsubscribedEntities {
      ...subscribable
    }
  }
}
    ${bn}`;let El=(()=>{class C extends t.mm{constructor(le){super(le),this.document=Ec}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const xc=t.Ps`
    mutation Subscribe($input: SubscribeInput!) {
  subscribe(input: $input) {
    subscriptions {
      id
    }
  }
}
    `;let Mu=(()=>{class C extends t.mm{constructor(le){super(le),this.document=xc}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const bu=t.Ps`
    query VariantGroupDetail($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupDetailFields
  }
}
    ${dn}`;let Su=(()=>{class C extends t.AE{constructor(le){super(le),this.document=bu}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();t.Ps`
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
          revisionSetId
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
    `;const xu=t.Ps`
    query VariantGroupsSummary($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupSummaryFields
  }
}
    ${xn}`;let Pi=(()=>{class C extends t.AE{constructor(le){super(le),this.document=xu}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Dc=t.Ps`
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
    `;let xl=(()=>{class C extends t.AE{constructor(le){super(le),this.document=Dc}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const Oc=t.Ps`
    query VariantDetail($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantDetailFields
  }
}
    ${Wn}`;let qi=(()=>{class C extends t.AE{constructor(le){super(le),this.document=Oc}}return C.\u0275fac=function(le){return new(le||C)(i.LFG(t._M))},C.\u0275prov=i.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})();const fa=t.Ps`
    query VariantSummary($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantSummaryFields
  }
}