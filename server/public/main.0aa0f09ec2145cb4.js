"use strict";(self.webpackChunkmain=self.webpackChunkmain||[]).push([[8792],{4709:(Rt,De,c)=>{c.d(De,{H:()=>A,K6:()=>g,Me:()=>L,Ob:()=>B,YL:()=>M,_:()=>r,g8:()=>X,n6:()=>F,oS:()=>V,wE:()=>G});var t=c(9785);function r(x,ne,J){return{r:255*(0,t.Cg)(x,255),g:255*(0,t.Cg)(ne,255),b:255*(0,t.Cg)(J,255)}}function g(x,ne,J){x=(0,t.Cg)(x,255),ne=(0,t.Cg)(ne,255),J=(0,t.Cg)(J,255);var be=Math.max(x,ne,J),Oe=Math.min(x,ne,J),he=0,we=0,me=(be+Oe)/2;if(be===Oe)we=0,he=0;else{var de=be-Oe;switch(we=me>.5?de/(2-be-Oe):de/(be+Oe),be){case x:he=(ne-J)/de+(ne<J?6:0);break;case ne:he=(J-x)/de+2;break;case J:he=(x-ne)/de+4}he/=6}return{h:he,s:we,l:me}}function e(x,ne,J){return J<0&&(J+=1),J>1&&(J-=1),J<1/6?x+6*J*(ne-x):J<.5?ne:J<2/3?x+(ne-x)*(2/3-J)*6:x}function M(x,ne,J){var be,Oe,he;if(x=(0,t.Cg)(x,360),ne=(0,t.Cg)(ne,100),J=(0,t.Cg)(J,100),0===ne)Oe=J,he=J,be=J;else{var we=J<.5?J*(1+ne):J+ne-J*ne,me=2*J-we;be=e(me,we,x+1/3),Oe=e(me,we,x),he=e(me,we,x-1/3)}return{r:255*be,g:255*Oe,b:255*he}}function G(x,ne,J){x=(0,t.Cg)(x,255),ne=(0,t.Cg)(ne,255),J=(0,t.Cg)(J,255);var be=Math.max(x,ne,J),Oe=Math.min(x,ne,J),he=0,we=be,me=be-Oe,de=0===be?0:me/be;if(be===Oe)he=0;else{switch(be){case x:he=(ne-J)/me+(ne<J?6:0);break;case ne:he=(J-x)/me+2;break;case J:he=(x-ne)/me+4}he/=6}return{h:he,s:de,v:we}}function L(x,ne,J){x=6*(0,t.Cg)(x,360),ne=(0,t.Cg)(ne,100),J=(0,t.Cg)(J,100);var be=Math.floor(x),Oe=x-be,he=J*(1-ne),we=J*(1-Oe*ne),me=J*(1-(1-Oe)*ne),de=be%6;return{r:255*[J,we,he,he,me,J][de],g:255*[me,J,J,we,he,he][de],b:255*[he,he,me,J,J,we][de]}}function B(x,ne,J,be){var Oe=[(0,t.wl)(Math.round(x).toString(16)),(0,t.wl)(Math.round(ne).toString(16)),(0,t.wl)(Math.round(J).toString(16))];return be&&Oe[0].startsWith(Oe[0].charAt(1))&&Oe[1].startsWith(Oe[1].charAt(1))&&Oe[2].startsWith(Oe[2].charAt(1))?Oe[0].charAt(0)+Oe[1].charAt(0)+Oe[2].charAt(0):Oe.join("")}function A(x,ne,J,be,Oe){var he=[(0,t.wl)(Math.round(x).toString(16)),(0,t.wl)(Math.round(ne).toString(16)),(0,t.wl)(Math.round(J).toString(16)),(0,t.wl)(I(be))];return Oe&&he[0].startsWith(he[0].charAt(1))&&he[1].startsWith(he[1].charAt(1))&&he[2].startsWith(he[2].charAt(1))&&he[3].startsWith(he[3].charAt(1))?he[0].charAt(0)+he[1].charAt(0)+he[2].charAt(0)+he[3].charAt(0):he.join("")}function I(x){return Math.round(255*parseFloat(x)).toString(16)}function F(x){return X(x)/255}function X(x){return parseInt(x,16)}function V(x){return{r:x>>16,g:(65280&x)>>8,b:255&x}}},6681:(Rt,De,c)=>{c.d(De,{D:()=>t});var t={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"}},4215:(Rt,De,c)=>{c.d(De,{RO:()=>e});var t=c(4709),r=c(6681),g=c(9785);function e(X){var V={r:0,g:0,b:0},x=1,ne=null,J=null,be=null,Oe=!1,he=!1;return"string"==typeof X&&(X=function I(X){if(0===(X=X.trim().toLowerCase()).length)return!1;var V=!1;if(r.D[X])X=r.D[X],V=!0;else if("transparent"===X)return{r:0,g:0,b:0,a:0,format:"name"};var x=w.rgb.exec(X);return x?{r:x[1],g:x[2],b:x[3]}:(x=w.rgba.exec(X))?{r:x[1],g:x[2],b:x[3],a:x[4]}:(x=w.hsl.exec(X))?{h:x[1],s:x[2],l:x[3]}:(x=w.hsla.exec(X))?{h:x[1],s:x[2],l:x[3],a:x[4]}:(x=w.hsv.exec(X))?{h:x[1],s:x[2],v:x[3]}:(x=w.hsva.exec(X))?{h:x[1],s:x[2],v:x[3],a:x[4]}:(x=w.hex8.exec(X))?{r:(0,t.g8)(x[1]),g:(0,t.g8)(x[2]),b:(0,t.g8)(x[3]),a:(0,t.n6)(x[4]),format:V?"name":"hex8"}:(x=w.hex6.exec(X))?{r:(0,t.g8)(x[1]),g:(0,t.g8)(x[2]),b:(0,t.g8)(x[3]),format:V?"name":"hex"}:(x=w.hex4.exec(X))?{r:(0,t.g8)(x[1]+x[1]),g:(0,t.g8)(x[2]+x[2]),b:(0,t.g8)(x[3]+x[3]),a:(0,t.n6)(x[4]+x[4]),format:V?"name":"hex8"}:!!(x=w.hex3.exec(X))&&{r:(0,t.g8)(x[1]+x[1]),g:(0,t.g8)(x[2]+x[2]),b:(0,t.g8)(x[3]+x[3]),format:V?"name":"hex"}}(X)),"object"==typeof X&&(F(X.r)&&F(X.g)&&F(X.b)?(V=(0,t._)(X.r,X.g,X.b),Oe=!0,he="%"===String(X.r).substr(-1)?"prgb":"rgb"):F(X.h)&&F(X.s)&&F(X.v)?(ne=(0,g.Px)(X.s),J=(0,g.Px)(X.v),V=(0,t.Me)(X.h,ne,J),Oe=!0,he="hsv"):F(X.h)&&F(X.s)&&F(X.l)&&(ne=(0,g.Px)(X.s),be=(0,g.Px)(X.l),V=(0,t.YL)(X.h,ne,be),Oe=!0,he="hsl"),Object.prototype.hasOwnProperty.call(X,"a")&&(x=X.a)),x=(0,g.TV)(x),{ok:Oe,format:X.format||he,r:Math.min(255,Math.max(V.r,0)),g:Math.min(255,Math.max(V.g,0)),b:Math.min(255,Math.max(V.b,0)),a:x}}var L="(?:".concat("[-\\+]?\\d*\\.\\d+%?",")|(?:").concat("[-\\+]?\\d+%?",")"),B="[\\s|\\(]+(".concat(L,")[,|\\s]+(").concat(L,")[,|\\s]+(").concat(L,")\\s*\\)?"),A="[\\s|\\(]+(".concat(L,")[,|\\s]+(").concat(L,")[,|\\s]+(").concat(L,")[,|\\s]+(").concat(L,")\\s*\\)?"),w={CSS_UNIT:new RegExp(L),rgb:new RegExp("rgb"+B),rgba:new RegExp("rgba"+A),hsl:new RegExp("hsl"+B),hsla:new RegExp("hsla"+A),hsv:new RegExp("hsv"+B),hsva:new RegExp("hsva"+A),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function F(X){return!!w.CSS_UNIT.exec(String(X))}},9785:(Rt,De,c)=>{function t(B,A){(function g(B){return"string"==typeof B&&-1!==B.indexOf(".")&&1===parseFloat(B)})(B)&&(B="100%");var w=function e(B){return"string"==typeof B&&-1!==B.indexOf("%")}(B);return B=360===A?B:Math.min(A,Math.max(0,parseFloat(B))),w&&(B=parseInt(String(B*A),10)/100),Math.abs(B-A)<1e-6?1:B=360===A?(B<0?B%A+A:B%A)/parseFloat(String(A)):B%A/parseFloat(String(A))}function r(B){return Math.min(1,Math.max(0,B))}function M(B){return B=parseFloat(B),(isNaN(B)||B<0||B>1)&&(B=1),B}function G(B){return B<=1?"".concat(100*Number(B),"%"):B}function L(B){return 1===B.length?"0"+B:String(B)}c.d(De,{Cg:()=>t,J$:()=>r,Px:()=>G,TV:()=>M,wl:()=>L})},6726:(Rt,De,c)=>{c.d(De,{X:()=>E});var t=c(3953),r=c(177),g=c(1188),e=c(5103),M=c(5699),G=c(1236),L=c(9199),B=c(6354),A=c(5964),w=c(9145),I=c(5703),F=c(2e3),X=c(7679),V=c(1774),x=c(3075);function ne(S,R){if(1&S&&(t.nrm(0,"i",9),t.nI1(1,"entityColor"),t.EFF(2)),2&S){const Y=t.XpG().ngIf;t.Y8G("nzTwotoneColor",t.bMT(1,2,"ClinicalTrial")),t.R7$(2),t.SpI(" ",Y.nctId," ")}}function J(S,R){if(1&S&&(t.j41(0,"cvc-link-tag",10),t.EFF(1," View on clinicaltrials.gov "),t.k0s()),2&S){const Y=t.XpG().ngIf;t.Y8G("href",Y.url)}}function be(S,R){if(1&S&&(t.qex(0),t.j41(1,"nz-card",4),t.DNE(2,ne,3,4,"ng-template",null,0,t.C5r)(4,J,2,1,"ng-template",null,1,t.C5r),t.j41(6,"nz-descriptions",5)(7,"nz-descriptions-item",6),t.EFF(8),t.k0s(),t.j41(9,"nz-descriptions-item",7),t.EFF(10),t.k0s(),t.j41(11,"nz-descriptions-item",8),t.EFF(12),t.k0s()()(),t.bVm()),2&S){const Y=R.ngIf,se=t.sdS(3),Be=t.sdS(5);t.R7$(),t.Y8G("nzTitle",se)("nzExtra",Be),t.R7$(5),t.Y8G("nzColumn",2),t.R7$(2),t.SpI(" ",Y.name," "),t.R7$(2),t.SpI(" ",Y.sourceCount," "),t.R7$(2),t.SpI(" ",Y.evidenceCount," ")}}let Oe=(()=>{class S{constructor(Y){this.gql=Y}ngOnInit(){if(null==this.clinicalTrialId)throw new Error("cvc-clinical-trial-popover requires valid clinicalTrialId input.");this.clinicalTrial$=this.gql.watch({clinicalTrialId:this.clinicalTrialId}).valueChanges.pipe((0,B.T)(({data:Y})=>Y?.clinicalTrials.edges[0]?.node),(0,A.p)(L.kP))}static#e=this.\u0275fac=function(se){return new(se||S)(t.rXU(w.hzv))};static#t=this.\u0275cmp=t.VBU({type:S,selectors:[["cvc-clinical-trial-popover"]],inputs:{clinicalTrialId:"clinicalTrialId"},decls:3,vars:3,consts:[["cardTitle",""],["linkout",""],["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Name","nzSpan","2"],["nzTitle","Sources","nzSpan","2"],["nzTitle","Evidence","nzSpan","2"],["nz-icon","","nzTheme","twotone","nzType","civic-clinicaltrial",3,"nzTwotoneColor"],[3,"href"]],template:function(se,Be){1&se&&(t.j41(0,"div",2),t.DNE(1,be,13,6,"ng-container",3),t.nI1(2,"ngrxPush"),t.k0s()),2&se&&(t.R7$(),t.Y8G("ngIf",t.bMT(2,1,Be.clinicalTrial$)))},dependencies:[r.bT,I.cK,e.Dn,F.xA,F.gr,X.a,V.L9,x.R],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]})}return S})();function he(S,R){}function we(S,R){if(1&S&&(t.qex(0),t.j41(1,"a",5),t.DNE(2,he,0,0,"ng-template",6),t.k0s(),t.bVm()),2&S){const Y=t.XpG(),se=t.sdS(2);t.R7$(),t.Y8G("routerLink",Y.clinicalTrial.link),t.R7$(),t.Y8G("ngTemplateOutlet",se)}}function me(S,R){}function de(S,R){if(1&S&&t.nrm(0,"cvc-clinical-trial-popover",8),2&S){const Y=t.XpG(2);t.Y8G("clinicalTrialId",Y.clinicalTrial.id)}}function H(S,R){if(1&S&&(t.j41(0,"nz-tag",7),t.DNE(1,me,0,0,"ng-template",6),t.k0s(),t.DNE(2,de,1,1,"ng-template",null,3,t.C5r)),2&S){const Y=t.sdS(3),se=t.XpG(),Be=t.sdS(6);t.Y8G("nzPopoverMouseEnterDelay",.5)("nzPopoverContent",Y)("nzPopoverTrigger",se.enablePopover?"hover":null),t.R7$(),t.Y8G("ngTemplateOutlet",Be)}}function z(S,R){}function Z(S,R){if(1&S&&t.DNE(0,z,0,0,"ng-template",6),2&S){t.XpG();const Y=t.sdS(2);t.Y8G("ngTemplateOutlet",Y)}}function pe(S,R){if(1&S&&(t.nrm(0,"i",9),t.nI1(1,"entityColor"),t.EFF(2)),2&S){const Y=t.XpG();t.Y8G("nzTwotoneColor",t.bMT(1,2,"ClinicalTrial")),t.R7$(2),t.SpI(" ",Y.clinicalTrial.nctId,"\n")}}let E=(()=>{class S{set clinicalTrial(Y){if(!Y)throw new Error("clinical-trial-tag clinicalTrial Input requires LinkableClinicalTrial.");this._clinicalTrial=Y}get clinicalTrial(){return this._clinicalTrial}constructor(){this.linked=!0,this.enablePopover=!0}static#e=this.\u0275fac=function(se){return new(se||S)};static#t=this.\u0275cmp=t.VBU({type:S,selectors:[["cvc-clinical-trial-tag"]],inputs:{clinicalTrial:"clinicalTrial",linked:"linked",enablePopover:"enablePopover"},decls:7,vars:2,consts:[["tag",""],["unlinked",""],["tagContent",""],["clinicalTrialPopover",""],[4,"ngIf","ngIfElse"],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger"],[3,"clinicalTrialId"],["nz-icon","","nzTheme","twotone","nzType","civic-clinicaltrial",3,"nzTwotoneColor"]],template:function(se,Be){if(1&se&&t.DNE(0,we,3,2,"ng-container",4)(1,H,4,4,"ng-template",null,0,t.C5r)(3,Z,1,1,"ng-template",null,1,t.C5r)(5,pe,3,4,"ng-template",null,2,t.C5r),2&se){const Pt=t.sdS(4);t.Y8G("ngIf",Be.linked)("ngIfElse",Pt)}},dependencies:[r.bT,r.T3,g.Wk,e.Dn,M.s,G.L_,Oe,x.R],styles:["[_nghost-%COMP%]{display:block}"]})}return S})()},9619:(Rt,De,c)=>{c.d(De,{u:()=>F});var t=c(177),r=c(1188),g=c(5699),e=c(1236),M=c(7054),G=c(4917),L=c(5703),B=c(2e3),A=c(5103),w=c(3953);let I=(()=>{class X{static#e=this.\u0275fac=function(ne){return new(ne||X)};static#t=this.\u0275mod=w.$C({type:X});static#n=this.\u0275inj=w.G2t({imports:[t.MD,L.Ti,A.Y3,B.WF,M.L,G.i]})}return X})(),F=(()=>{class X{static#e=this.\u0275fac=function(ne){return new(ne||X)};static#t=this.\u0275mod=w.$C({type:X});static#n=this.\u0275inj=w.G2t({imports:[t.MD,r.iI,A.Y3,g.T,e.MC,I,G.i]})}return X})()},1289:(Rt,De,c)=>{c.d(De,{R:()=>we});var t=c(9199),r=c(6354),g=c(5964),e=c(3953),M=c(9145),G=c(177),L=c(5703),B=c(2e3),A=c(5103),w=c(7391),I=c(7679),F=c(1774),X=c(2287);function V(me,de){if(1&me&&(e.nrm(0,"i",12),e.EFF(1),e.nI1(2,"truncate")),2&me){const H=e.XpG().ngIf;e.R7$(),e.SpI(" ",e.i5U(2,1,H.name,50)," ")}}function x(me,de){if(1&me&&(e.j41(0,"cvc-link-tag",14),e.EFF(1),e.k0s()),2&me){const H=e.XpG(2).ngIf;e.Y8G("href",H.diseaseUrl),e.R7$(),e.SpI(" DOID: ",H.doid," ")}}function ne(me,de){if(1&me&&e.DNE(0,x,2,2,"cvc-link-tag",13),2&me){const H=e.XpG().ngIf,z=e.sdS(7);e.Y8G("ngIf",H.doid)("ngIfElse",z)}}function J(me,de){1&me&&(e.j41(0,"span",15),e.EFF(1,"No DOID"),e.k0s())}function be(me,de){if(1&me&&(e.j41(0,"nz-descriptions-item",16),e.EFF(1),e.k0s()),2&me){const H=e.XpG().ngIf;e.R7$(),e.SpI(" ",H.name," ")}}function Oe(me,de){if(1&me&&(e.j41(0,"nz-descriptions-item",17),e.EFF(1),e.k0s()),2&me){const H=e.XpG().ngIf;e.R7$(),e.SpI(" ",H.diseaseAliases.join(", ")," ")}}function he(me,de){if(1&me&&(e.qex(0),e.j41(1,"nz-card",5),e.DNE(2,V,3,4,"ng-template",null,0,e.C5r)(4,ne,1,2,"ng-template",null,1,e.C5r)(6,J,2,0,"ng-template",null,2,e.C5r),e.j41(8,"nz-descriptions",6),e.DNE(9,be,2,1,"nz-descriptions-item",7)(10,Oe,2,1,"nz-descriptions-item",8),e.j41(11,"nz-descriptions-item",9),e.EFF(12),e.k0s(),e.j41(13,"nz-descriptions-item",10),e.EFF(14),e.k0s(),e.j41(15,"nz-descriptions-item",11),e.EFF(16),e.k0s()()(),e.bVm()),2&me){const H=de.ngIf,z=e.sdS(3),Z=e.sdS(5);e.R7$(),e.Y8G("nzTitle",z)("nzExtra",Z),e.R7$(7),e.Y8G("nzColumn",1),e.R7$(),e.Y8G("ngIf",H.name.length>50),e.R7$(),e.Y8G("ngIf",H.diseaseAliases.length>0),e.R7$(2),e.SpI(" ",H.assertionCount," "),e.R7$(2),e.SpI(" ",H.evidenceItemCount," "),e.R7$(2),e.SpI(" ",H.molecularProfileCount," ")}}let we=(()=>{class me{constructor(H){this.gql=H}ngOnInit(){if(null==this.diseaseId)throw new Error("cvc-disease-popover requires valid diseaseId input.");this.disease$=this.gql.watch({diseaseId:this.diseaseId}).valueChanges.pipe((0,r.T)(({data:H})=>H?.diseasePopover),(0,g.p)(t.kP))}static#e=this.\u0275fac=function(z){return new(z||me)(e.rXU(M.cs4))};static#t=this.\u0275cmp=e.VBU({type:me,selectors:[["cvc-disease-popover"]],inputs:{diseaseId:"diseaseId"},decls:3,vars:3,consts:[["cardTitle",""],["linkout",""],["noDoid",""],["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Name","nzSpan","2",4,"ngIf"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Assertions","nzSpan","1"],["nzTitle","Evidence","nzSpan","1"],["nzTitle","Molecular Profiles","nzSpan","1"],["nz-icon","","nzType","civic-disease","nzTheme","twotone","nzTwotoneColor","#E62F76"],["tooltip","View on disease-ontology.org",3,"href",4,"ngIf","ngIfElse"],["tooltip","View on disease-ontology.org",3,"href"],["nz-typography","","nzType","secondary"],["nzTitle","Name","nzSpan","2"],["nzTitle","Aliases","nzSpan","2"]],template:function(z,Z){1&z&&(e.j41(0,"div",3),e.DNE(1,he,17,8,"ng-container",4),e.nI1(2,"ngrxPush"),e.k0s()),2&z&&(e.R7$(),e.Y8G("ngIf",e.bMT(2,1,Z.disease$)))},dependencies:[G.bT,L.cK,B.xA,B.gr,A.Dn,w.Di,I.a,F.L9,X.H],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]})}return me})()},8156:(Rt,De,c)=>{c.d(De,{U:()=>A});var t=c(177),r=c(5703),g=c(2e3),e=c(5103),M=c(7054),G=c(7391),L=c(4917),B=c(3953);let A=(()=>{class w{static#e=this.\u0275fac=function(X){return new(X||w)};static#t=this.\u0275mod=B.$C({type:w});static#n=this.\u0275inj=B.G2t({imports:[t.MD,r.Ti,g.WF,e.Y3,G.kT,L.i,M.L]})}return w})()},9861:(Rt,De,c)=>{c.d(De,{Y:()=>we});var t=c(6514),r=c(3953),g=c(177),e=c(1188),M=c(5699),G=c(1236),L=c(5103),B=c(1289),A=c(2287);const w=me=>({deprecated:me});function I(me,de){}function F(me,de){if(1&me&&(r.qex(0),r.j41(1,"a",6),r.DNE(2,I,0,0,"ng-template",7),r.k0s(),r.bVm()),2&me){const H=r.XpG(),z=r.sdS(2);r.R7$(),r.Y8G("routerLink",H.disease.link),r.R7$(),r.Y8G("ngTemplateOutlet",z)}}function X(me,de){}function V(me,de){if(1&me&&r.nrm(0,"cvc-disease-popover",9),2&me){const H=r.XpG(2);r.Y8G("diseaseId",H.disease.id)}}function x(me,de){if(1&me){const H=r.RV6();r.j41(0,"nz-tag",8),r.bIt("nzOnClose",function(Z){r.eBV(H);const pe=r.XpG();return r.Njj(pe.itemClosed(Z))}),r.DNE(1,X,0,0,"ng-template",7),r.k0s(),r.DNE(2,V,1,1,"ng-template",null,3,r.C5r)}if(2&me){const H=r.sdS(3),z=r.XpG(),Z=r.sdS(6);r.Y8G("ngClass",r.eq3(6,w,z.disease.deprecated))("nzPopoverMouseEnterDelay",z.onCloseClicked?0:.5)("nzPopoverContent",H)("nzPopoverTrigger",z.enablePopover?"hover":null)("nzMode",z.onCloseClicked?"closeable":"default"),r.R7$(),r.Y8G("ngTemplateOutlet",Z)}}function ne(me,de){}function J(me,de){if(1&me&&r.DNE(0,ne,0,0,"ng-template",7),2&me){r.XpG();const H=r.sdS(2);r.Y8G("ngTemplateOutlet",H)}}function be(me,de){if(1&me&&(r.qex(0),r.EFF(1),r.nI1(2,"truncate"),r.bVm()),2&me){const H=r.XpG(2);r.R7$(),r.SpI(" ",r.i5U(2,1,H.disease.name,27)," ")}}function Oe(me,de){if(1&me&&r.EFF(0),2&me){const H=r.XpG(2);r.SpI(" ",H.disease.name," ")}}function he(me,de){if(1&me&&(r.nrm(0,"i",10),r.DNE(1,be,3,4,"ng-container",5)(2,Oe,1,1,"ng-template",null,4,r.C5r)),2&me){const H=r.sdS(3),z=r.XpG();r.R7$(),r.Y8G("ngIf",z.truncateLongName)("ngIfElse",H)}}let we=(()=>{class me extends t.s{constructor(){super(...arguments),this.enablePopover=!0,this.truncateLongName=!1}set disease(H){if(!H)throw new Error("disease-tag disease Input requires LinkableDisease.");this._disease=H}get disease(){return this._disease}idFunction(){return this.disease.id}static#e=this.\u0275fac=(()=>{let H;return function(Z){return(H||(H=r.xGo(me)))(Z||me)}})();static#t=this.\u0275cmp=r.VBU({type:me,selectors:[["cvc-disease-tag"]],inputs:{disease:"disease",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[r.Vt3],decls:7,vars:2,consts:[["tag",""],["unlinked",""],["tagContent",""],["diseasePopover",""],["fullName",""],[4,"ngIf","ngIfElse"],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzOnClose","ngClass","nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode"],[3,"diseaseId"],["nz-icon","","nzType","civic-disease","nzTheme","twotone","nzTwotoneColor","#E62F76"]],template:function(z,Z){if(1&z&&r.DNE(0,F,3,2,"ng-container",5)(1,x,4,8,"ng-template",null,0,r.C5r)(3,J,1,1,"ng-template",null,1,r.C5r)(5,he,4,2,"ng-template",null,2,r.C5r),2&z){const pe=r.sdS(4);r.Y8G("ngIf",Z.linked)("ngIfElse",pe)}},dependencies:[g.YU,g.bT,g.T3,e.Wk,M.s,G.L_,L.Dn,B.R,A.H],styles:["[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.submitted, [_nghost-%COMP%]     nz-tag.accepted, [_nghost-%COMP%]     nz-tag.deprecated{border-right-width:2px}[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.deprecated{border-color:#e6e6e6;background-color:#fff;color:#999999d9}[_nghost-%COMP%]     nz-tag.submitted{border-color:#ffe58f}[_nghost-%COMP%]     nz-tag.accepted{border-color:#b7eb8f}"],changeDetection:0})}return me})()},9192:(Rt,De,c)=>{c.d(De,{J:()=>A});var t=c(177),r=c(1188),g=c(5699),e=c(1236),M=c(5103),G=c(8156),L=c(4917),B=c(3953);let A=(()=>{class w{static#e=this.\u0275fac=function(X){return new(X||w)};static#t=this.\u0275mod=B.$C({type:w});static#n=this.\u0275inj=B.G2t({imports:[t.MD,r.iI,g.T,e.MC,M.Y3,L.i,G.U]})}return w})()},8011:(Rt,De,c)=>{c.d(De,{S:()=>en});var t=c(6354),r=c(5964),g=c(9199),e=c(3953),M=c(9145),G=c(177),L=c(1188),B=c(5103),A=c(5703),w=c(7529),I=c(2e3),F=c(5699),X=c(7685),V=c(7391),x=c(9563),ne=c(9861),J=c(7047),be=c(9062),Oe=c(311),he=c(5473),we=c(9973),me=c(1774),de=c(1677),H=c(3075);function z(jt,Vt){if(1&jt&&(e.qex(0),e.nrm(1,"i",18),e.nI1(2,"entityColor"),e.EFF(3),e.bVm()),2&jt){const fn=e.XpG(2).ngIf;e.R7$(),e.Y8G("nzTwotoneColor",e.bMT(2,2,"EvidenceItem")),e.R7$(2),e.SpI(" ",fn.name," ")}}function Z(jt,Vt){if(1&jt&&e.nrm(0,"cvc-status-tag",19),2&jt){const fn=e.XpG(2).ngIf;e.Y8G("status",fn.status)}}function pe(jt,Vt){1&jt&&(e.j41(0,"nz-space"),e.DNE(1,z,4,4,"ng-container",16)(2,Z,1,1,"cvc-status-tag",17),e.k0s())}function E(jt,Vt){if(1&jt&&e.nrm(0,"cvc-molecular-profile-tag",20),2&jt){const fn=e.XpG().ngIf;e.Y8G("molecularProfile",fn.molecularProfile)("enablePopover",!1)("truncateLongName",!0)}}function S(jt,Vt){if(1&jt&&(e.qex(0),e.EFF(1),e.bVm()),2&jt){const fn=Vt.ngIf;e.R7$(),e.SpI(" ",fn," ")}}function R(jt,Vt){if(1&jt&&(e.j41(0,"nz-descriptions",21)(1,"nz-descriptions-item",22),e.nrm(2,"cvc-mp-tag-name",23),e.k0s(),e.j41(3,"nz-descriptions-item",24),e.nrm(4,"cvc-source-tag",25),e.k0s()()),2&jt){const fn=e.XpG().ngIf;e.Y8G("nzColumn",1),e.R7$(2),e.Y8G("nameSegments",fn.molecularProfile.parsedName)("enablePopover",!1),e.R7$(2),e.Y8G("source",fn.source)("enablePopover",!1)}}function Y(jt,Vt){if(1&jt&&(e.qex(0),e.nrm(1,"cvc-disease-tag",35),e.bVm()),2&jt){const fn=e.XpG(2).ngIf;e.R7$(),e.Y8G("enablePopover",!1)("disease",fn.disease)("truncateLongName",!0)}}function se(jt,Vt){1&jt&&e.EFF(0," N/A ")}function Be(jt,Vt){if(1&jt&&(e.j41(0,"span"),e.nrm(1,"cvc-therapy-tag",38),e.k0s()),2&jt){const fn=Vt.$implicit;e.R7$(),e.Y8G("enablePopover",!1)("therapy",fn)("truncateLongName",!0)}}function Pt(jt,Vt){if(1&jt&&(e.qex(0),e.EFF(1),e.nI1(2,"titlecase"),e.bVm()),2&jt){const fn=e.XpG(3).ngIf;e.R7$(),e.SpI(" ",e.bMT(2,1,fn.therapyInteractionType)," ")}}function vt(jt,Vt){if(1&jt&&(e.j41(0,"nz-descriptions-item",36),e.DNE(1,Be,2,3,"span",37)(2,Pt,3,3,"ng-container",5),e.k0s()),2&jt){const fn=e.XpG(2).ngIf;e.R7$(),e.Y8G("ngForOf",fn.therapies),e.R7$(),e.Y8G("ngIf",fn.therapies.length>1)}}function wt(jt,Vt){if(1&jt&&(e.j41(0,"span"),e.nrm(1,"cvc-phenotype-tag",40),e.k0s()),2&jt){const fn=Vt.$implicit;e.R7$(),e.Y8G("enablePopover",!1)("phenotype",fn)}}function Le(jt,Vt){if(1&jt&&(e.j41(0,"nz-descriptions-item",39),e.DNE(1,wt,2,2,"span",37),e.k0s()),2&jt){const fn=e.XpG(2).ngIf;e.R7$(),e.Y8G("ngForOf",fn.phenotypes)}}function zt(jt,Vt){if(1&jt&&(e.j41(0,"nz-descriptions",21)(1,"nz-descriptions-item",26),e.EFF(2),e.k0s(),e.j41(3,"nz-descriptions-item",27),e.EFF(4),e.nI1(5,"evidenceEnumDisplay"),e.k0s(),e.j41(6,"nz-descriptions-item",28),e.EFF(7),e.nI1(8,"evidenceEnumDisplay"),e.k0s(),e.j41(9,"nz-descriptions-item",29),e.EFF(10),e.nI1(11,"evidenceEnumDisplay"),e.k0s(),e.j41(12,"nz-descriptions-item",30),e.EFF(13),e.nrm(14,"i",31),e.k0s(),e.j41(15,"nz-descriptions-item",32),e.DNE(16,Y,2,3,"ng-container",10)(17,se,1,0,"ng-template",null,3,e.C5r),e.k0s(),e.DNE(19,vt,3,2,"nz-descriptions-item",33)(20,Le,2,1,"nz-descriptions-item",34),e.k0s()),2&jt){const fn=e.sdS(18),Hn=e.XpG().ngIf;e.Y8G("nzColumn",2),e.R7$(2),e.SpI(" ",Hn.evidenceLevel," "),e.R7$(2),e.SpI(" ",e.bMT(5,10,Hn.evidenceType)," "),e.R7$(3),e.SpI(" ",e.bMT(8,12,Hn.evidenceDirection)," "),e.R7$(3),e.SpI(" ",e.bMT(11,14,Hn.significance)," "),e.R7$(3),e.SpI(" ",Hn.evidenceRating,""),e.R7$(3),e.Y8G("ngIf",Hn.disease)("ngIfElse",fn),e.R7$(3),e.Y8G("ngIf",Hn.therapies.length>0),e.R7$(),e.Y8G("ngIf",Hn.phenotypes.length>0)}}function xt(jt,Vt){if(1&jt&&(e.j41(0,"a",41)(1,"nz-tag",42),e.nrm(2,"i",43),e.EFF(3),e.k0s()()),2&jt){const fn=e.XpG().ngIf;e.Mz_("routerLink","/evidence/",fn.id,"/flags"),e.R7$(3),e.SpI(" Flags (",fn.flags.totalCount,") ")}}function st(jt,Vt){if(1&jt&&(e.j41(0,"a",41)(1,"nz-tag",44),e.nrm(2,"i",45),e.EFF(3),e.k0s()()),2&jt){const fn=e.XpG().ngIf;e.Mz_("routerLink","/evidence/",fn.id,"/revisions"),e.R7$(3),e.SpI(" Revisions (",fn.revisions.totalCount,") ")}}function Ct(jt,Vt){if(1&jt&&(e.j41(0,"a",41)(1,"nz-tag",46),e.nrm(2,"i",47),e.EFF(3),e.k0s()()),2&jt){const fn=e.XpG().ngIf;e.Mz_("routerLink","/evidence/",fn.id,"/comments"),e.R7$(3),e.SpI(" Comments (",fn.comments.totalCount,") ")}}function It(jt,Vt){if(1&jt&&(e.qex(0),e.j41(1,"nz-card",6),e.DNE(2,pe,3,0,"ng-template",null,1,e.C5r)(4,E,1,3,"ng-template",null,2,e.C5r),e.j41(6,"nz-row")(7,"nz-col",7)(8,"div",8)(9,"p",9),e.DNE(10,S,2,1,"ng-container",10),e.k0s()()()(),e.j41(11,"nz-space",11),e.DNE(12,R,5,5,"nz-descriptions",12)(13,zt,21,16,"nz-descriptions",12),e.k0s(),e.j41(14,"nz-row",13)(15,"nz-col",7)(16,"nz-space",14),e.DNE(17,xt,4,3,"a",15)(18,st,4,3,"a",15)(19,Ct,4,3,"a",15),e.k0s()()()(),e.bVm()),2&jt){const fn=Vt.ngIf,Hn=e.sdS(3),zn=e.sdS(5);e.XpG();const bt=e.sdS(4);e.R7$(),e.Y8G("nzTitle",Hn)("nzExtra",zn),e.R7$(8),e.Y8G("nzEllipsisRows",4),e.R7$(),e.Y8G("ngIf",fn.description)("ngIfElse",bt)}}function Tt(jt,Vt){1&jt&&e.EFF(0," Evidence item has not been provided a description.\n")}let en=(()=>{class jt{constructor(fn){this.gql=fn}ngOnInit(){if(null==this.evidenceId)throw new Error("cvc-evidence-popover requires valid evidenceId input.");this.evidence$=this.gql.watch({evidenceId:this.evidenceId}).valueChanges.pipe((0,t.T)(({data:fn})=>fn?.evidenceItem),(0,r.p)(g.kP))}static#e=this.\u0275fac=function(Hn){return new(Hn||jt)(e.rXU(M.XUB))};static#t=this.\u0275cmp=e.VBU({type:jt,selectors:[["cvc-evidence-popover"]],inputs:{evidenceId:"evidenceId"},decls:5,vars:3,consts:[["noDescription",""],["cardTitle",""],["molecularProfile",""],["noDisease",""],["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["nzSpan","24"],[1,"popover-text"],["nz-typography","","nzEllipsis","","nzExpandable","",3,"nzEllipsisRows"],[4,"ngIf","ngIfElse"],["nzDirection","vertical","nzSize","small"],["nzSize","small","nzBordered","true",3,"nzColumn",4,"nzSpaceItem"],["id","entity-child-counts"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],[4,"nzSpaceItem"],["style","font-weight: normal",3,"status",4,"nzSpaceItem"],["nz-icon","","nzTheme","twotone","nzType","civic-evidence",3,"nzTwotoneColor"],[2,"font-weight","normal",3,"status"],[3,"molecularProfile","enablePopover","truncateLongName"],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","MP Expression"],[3,"nameSegments","enablePopover"],["nzTitle","Source","nzSpan","2"],[3,"source","enablePopover"],["nzTitle","Level"],["nzTitle","Type"],["nzTitle","Direction"],["nzTitle","Clinical Significance","nzSpan","2"],["nzTitle","Rating"],["nz-icon","","nzType","star","nzTheme","fill"],["nzTitle","Disease"],["nzTitle","Therapies","nzSpan","2",4,"ngIf"],["nzTitle","Phenotypes","nzSpan","2",4,"ngIf"],[3,"enablePopover","disease","truncateLongName"],["nzTitle","Therapies","nzSpan","2"],[4,"ngFor","ngForOf"],[3,"enablePopover","therapy","truncateLongName"],["nzTitle","Phenotypes","nzSpan","2"],[3,"enablePopover","phenotype"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(Hn,zn){1&Hn&&(e.j41(0,"div",4),e.DNE(1,It,20,5,"ng-container",5),e.nI1(2,"ngrxPush"),e.k0s(),e.DNE(3,Tt,1,0,"ng-template",null,0,e.C5r)),2&Hn&&(e.R7$(),e.Y8G("ngIf",e.bMT(2,1,zn.evidence$)))},dependencies:[G.Sq,G.bT,L.Wk,B.Dn,A.cK,w.Uq,w.e,I.xA,I.gr,F.s,X.U5,X.Dq,V.Di,x.R,ne.Y,J.A,be.D,Oe.g,he.z,we.G,G.PV,me.L9,de.pW,H.R],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]})}return jt})()},4666:(Rt,De,c)=>{c.d(De,{v:()=>Oe});var t=c(177),r=c(5703),g=c(7529),e=c(2e3),M=c(1188),G=c(5699),L=c(9192),B=c(1542),A=c(7685),w=c(5103),I=c(4917),F=c(1209),X=c(9590),V=c(7391),x=c(1448),ne=c(996),J=c(9802),be=c(3953);let Oe=(()=>{class he{static#e=this.\u0275fac=function(de){return new(de||he)};static#t=this.\u0275mod=be.$C({type:he});static#n=this.\u0275inj=be.G2t({imports:[t.MD,M.iI,w.Y3,r.Ti,g.f3,e.WF,G.T,A.pc,V.kT,I.i,J._,L.J,B.X,F.k,X.R,ne.o,x.B]})}return he})()},1429:(Rt,De,c)=>{c.d(De,{X:()=>H});var t=c(9199),r=c(6354),g=c(5964),e=c(3953),M=c(9145),G=c(177),L=c(1188),B=c(5703),A=c(7529),w=c(2e3),I=c(5699),F=c(5103),X=c(7685),V=c(1774),x=c(3075);function ne(z,Z){if(1&z&&(e.nrm(0,"i",12),e.nI1(1,"entityColor"),e.EFF(2)),2&z){const pe=e.XpG().ngIf;e.Y8G("nzTwotoneColor",e.bMT(1,3,"Feature")),e.R7$(2),e.Lme(" ",pe.featureInstance.__typename," - ",pe.name," ")}}function J(z,Z){if(1&z&&(e.j41(0,"nz-descriptions-item",13),e.EFF(1),e.k0s()),2&z){const pe=e.XpG().ngIf;e.R7$(),e.SpI(" ",pe.fullName," ")}}function be(z,Z){if(1&z&&(e.j41(0,"nz-tag"),e.EFF(1),e.k0s()),2&z){const pe=Z.$implicit;e.R7$(),e.JRh(pe)}}function Oe(z,Z){if(1&z&&(e.j41(0,"nz-descriptions-item",14),e.DNE(1,be,2,1,"nz-tag",15),e.k0s()),2&z){const pe=e.XpG().ngIf;e.R7$(),e.Y8G("ngForOf",pe.featureAliases)}}function he(z,Z){if(1&z&&(e.j41(0,"a",16)(1,"nz-tag",17),e.nrm(2,"i",18),e.EFF(3),e.k0s()()),2&z){const pe=e.XpG().ngIf;e.Mz_("routerLink","/features/",pe.id,"/flags"),e.R7$(3),e.SpI(" Flags (",pe.flags.totalCount,") ")}}function we(z,Z){if(1&z&&(e.j41(0,"a",16)(1,"nz-tag",19),e.nrm(2,"i",20),e.EFF(3," Revisions "),e.k0s()()),2&z){const pe=e.XpG().ngIf;e.Mz_("routerLink","/features/",pe.id,"/revisions")}}function me(z,Z){if(1&z&&(e.j41(0,"a",16)(1,"nz-tag",21),e.nrm(2,"i",22),e.EFF(3," Comments "),e.k0s()()),2&z){const pe=e.XpG().ngIf;e.Mz_("routerLink","/features/",pe.id,"/comments")}}function de(z,Z){if(1&z&&(e.qex(0),e.j41(1,"nz-card",3),e.DNE(2,ne,3,5,"ng-template",null,0,e.C5r),e.j41(4,"nz-descriptions",4),e.DNE(5,J,2,1,"nz-descriptions-item",5)(6,Oe,2,1,"nz-descriptions-item",6),e.j41(7,"nz-descriptions-item",7),e.EFF(8),e.k0s()(),e.j41(9,"nz-row",8)(10,"nz-col",9)(11,"nz-space",10),e.DNE(12,he,4,3,"a",11)(13,we,4,2,"a",11)(14,me,4,2,"a",11),e.k0s()()()(),e.bVm()),2&z){const pe=Z.ngIf,E=e.sdS(3);e.R7$(),e.Y8G("nzTitle",E),e.R7$(3),e.Y8G("nzColumn",2),e.R7$(),e.Y8G("ngIf",pe.fullName),e.R7$(),e.Y8G("ngIf",pe.featureAliases.length>0),e.R7$(2),e.SpI(" ",pe.variants.totalCount," ")}}let H=(()=>{class z{constructor(pe){this.gql=pe}ngOnInit(){if(null==this.featureId)throw new Error("cvc-feature-popover requires valid featureId input.");this.feature$=this.gql.watch({featureId:this.featureId}).valueChanges.pipe((0,r.T)(({data:pe})=>pe?.feature),(0,g.p)(t.kP))}static#e=this.\u0275fac=function(E){return new(E||z)(e.rXU(M.AsH))};static#t=this.\u0275cmp=e.VBU({type:z,selectors:[["cvc-feature-popover"]],inputs:{featureId:"featureId"},decls:3,vars:3,consts:[["cardTitle",""],["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle"],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzSpan","2","nzTitle","Full Name",4,"ngIf"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Variants"],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzTheme","twotone","nzType","civic-feature",3,"nzTwotoneColor"],["nzSpan","2","nzTitle","Full Name"],["nzTitle","Aliases","nzSpan","2"],[4,"ngFor","ngForOf"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(E,S){1&E&&(e.j41(0,"div",1),e.DNE(1,de,15,5,"ng-container",2),e.nI1(2,"ngrxPush"),e.k0s()),2&E&&(e.R7$(),e.Y8G("ngIf",e.bMT(2,1,S.feature$)))},dependencies:[G.Sq,G.bT,L.Wk,B.cK,A.Uq,A.e,w.xA,w.gr,I.s,F.Dn,X.U5,X.Dq,V.L9,x.R],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]})}return z})()},5928:(Rt,De,c)=>{c.d(De,{o:()=>I});var t=c(177),r=c(1188),g=c(4917),e=c(5703),M=c(2e3),G=c(7529),L=c(5103),B=c(7685),A=c(5699),w=c(3953);let I=(()=>{class F{static#e=this.\u0275fac=function(x){return new(x||F)};static#t=this.\u0275mod=w.$C({type:F});static#n=this.\u0275inj=w.G2t({imports:[t.MD,r.iI,e.Ti,G.f3,M.WF,A.T,L.Y3,B.pc,g.i]})}return F})()},3245:(Rt,De,c)=>{c.d(De,{_:()=>H});var t=c(6514),r=c(505),g=c(3953),e=c(177),M=c(1188),G=c(5699),L=c(1236),B=c(5103),A=c(1429),w=c(2387),I=c(2287),F=c(3075);const X=z=>({deprecated:z});function V(z,Z){}function x(z,Z){if(1&z&&(g.qex(0),g.j41(1,"a",6),g.DNE(2,V,0,0,"ng-template",7),g.k0s(),g.bVm()),2&z){const pe=g.XpG(),E=g.sdS(2);g.R7$(),g.Y8G("routerLink",pe.feature.link),g.R7$(),g.Y8G("ngTemplateOutlet",E)}}function ne(z,Z){}function J(z,Z){if(1&z&&g.nrm(0,"cvc-feature-popover",9),2&z){const pe=g.XpG(2);g.Y8G("featureId",pe.feature.id)}}function be(z,Z){if(1&z){const pe=g.RV6();g.j41(0,"nz-tag",8),g.bIt("nzOnClose",function(S){g.eBV(pe);const R=g.XpG();return g.Njj(R.itemClosed(S))}),g.DNE(1,ne,0,0,"ng-template",7),g.k0s(),g.DNE(2,J,1,1,"ng-template",null,3,g.C5r)}if(2&z){const pe=g.sdS(3),E=g.XpG(),S=g.sdS(6);g.Y8G("ngClass",g.eq3(6,X,E.feature.deprecated))("nzPopoverMouseEnterDelay",E.onCloseClicked?0:.5)("nzPopoverContent",pe)("nzPopoverTrigger",E.enablePopover?"hover":null)("nzMode",E.onCloseClicked?"closeable":"default"),g.R7$(),g.Y8G("ngTemplateOutlet",S)}}function Oe(z,Z){}function he(z,Z){if(1&z&&g.DNE(0,Oe,0,0,"ng-template",7),2&z){g.XpG();const pe=g.sdS(2);g.Y8G("ngTemplateOutlet",pe)}}function we(z,Z){if(1&z&&(g.qex(0),g.EFF(1),g.nI1(2,"truncate"),g.bVm()),2&z){const pe=g.XpG(2);g.R7$(),g.SpI(" ",g.i5U(2,1,pe.feature.name,12)," ")}}function me(z,Z){if(1&z&&g.EFF(0),2&z){const pe=g.XpG(2);g.SpI(" ",pe.feature.name," ")}}function de(z,Z){if(1&z&&(g.j41(0,"cvc-icon-badges",10),g.nrm(1,"i",11),g.nI1(2,"entityColor"),g.k0s(),g.DNE(3,we,3,4,"ng-container",5)(4,me,1,1,"ng-template",null,4,g.C5r)),2&z){const pe=g.sdS(5),E=g.XpG();g.Y8G("flagged",E.feature.flagged)("entityColor",E.iconColor),g.R7$(),g.Y8G("nzTwotoneColor",g.bMT(2,5,"Feature")),g.R7$(2),g.Y8G("ngIf",E.truncateLongName)("ngIfElse",pe)}}let H=(()=>{class z extends t.s{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1,this.iconColor=(0,r.P)("Gene")}idFunction(){return this.feature.id}ngOnInit(){if(super.ngOnInit(),void 0===this.feature)throw new Error("cvc-feature-tag requires LinkableFeature input, none supplied.")}static#e=this.\u0275fac=function(E){return new(E||z)};static#t=this.\u0275cmp=g.VBU({type:z,selectors:[["cvc-feature-tag"]],inputs:{feature:"feature",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[g.Vt3],decls:7,vars:2,consts:[["tag",""],["unlinked",""],["tagContent",""],["featurePopover",""],["fullName",""],[4,"ngIf","ngIfElse"],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","",3,"nzOnClose","ngClass","nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode"],[3,"featureId"],[3,"flagged","entityColor"],["nz-icon","","nzType","civic-feature","nzTheme","twotone",3,"nzTwotoneColor"]],template:function(E,S){if(1&E&&g.DNE(0,x,3,2,"ng-container",5)(1,be,4,8,"ng-template",null,0,g.C5r)(3,he,1,1,"ng-template",null,1,g.C5r)(5,de,6,7,"ng-template",null,2,g.C5r),2&E){const R=g.sdS(4);g.Y8G("ngIf",S.linked)("ngIfElse",R)}},dependencies:[e.YU,e.bT,e.T3,M.Wk,G.s,L.L_,B.Dn,A.X,w.N,I.H,F.R],styles:["[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.submitted, [_nghost-%COMP%]     nz-tag.accepted, [_nghost-%COMP%]     nz-tag.deprecated{border-right-width:2px}[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.deprecated{border-color:#e6e6e6;background-color:#fff;color:#999999d9}[_nghost-%COMP%]     nz-tag.submitted{border-color:#ffe58f}[_nghost-%COMP%]     nz-tag.accepted{border-color:#b7eb8f}[_nghost-%COMP%]{display:inline-block}"],changeDetection:0})}return z})()},6912:(Rt,De,c)=>{c.d(De,{l:()=>I});var t=c(177),r=c(1188),g=c(5699),e=c(5103),M=c(1236),G=c(4917),L=c(3146),B=c(4994),A=c(5928),w=c(3953);let I=(()=>{class F{static#e=this.\u0275fac=function(x){return new(x||F)};static#t=this.\u0275mod=w.$C({type:F});static#n=this.\u0275inj=w.G2t({imports:[t.MD,r.iI,g.T,M.MC,e.Y3,L.W2,G.i,A.o,B.a]})}return F})()},5761:(Rt,De,c)=>{c.d(De,{q:()=>pe});var t=c(9199),r=c(6354),g=c(5964),e=c(3953),M=c(9145),G=c(177),L=c(1188),B=c(5703),A=c(7529),w=c(2e3),I=c(5699),F=c(5103),X=c(7685),V=c(7855),x=c(9973),ne=c(1774);function J(E,S){if(1&E&&(e.nrm(0,"i",16),e.EFF(1)),2&E){const R=e.XpG().ngIf;e.R7$(),e.SpI(" ",R.name," ")}}function be(E,S){if(1&E&&(e.j41(0,"nz-descriptions-item",17),e.EFF(1),e.k0s()),2&E){const R=e.XpG().ngIf;e.R7$(),e.SpI(" ",R.evidenceItems.totalCount," ")}}function Oe(E,S){if(1&E&&(e.j41(0,"nz-descriptions-item",18),e.EFF(1),e.k0s()),2&E){const R=e.XpG().ngIf;e.R7$(),e.SpI(" ",R.assertions.totalCount," ")}}function he(E,S){if(1&E&&(e.j41(0,"nz-tag"),e.EFF(1),e.k0s()),2&E){const R=S.$implicit;e.R7$(),e.JRh(R)}}function we(E,S){if(1&E&&(e.qex(0),e.j41(1,"cvc-tag-list"),e.DNE(2,he,2,1,"nz-tag",19),e.k0s(),e.bVm()),2&E){const R=e.XpG().ngIf;e.R7$(2),e.Y8G("ngForOf",R.molecularProfileAliases)}}function me(E,S){1&E&&(e.j41(0,"span",20),e.EFF(1,"None specified"),e.k0s())}function de(E,S){if(1&E&&(e.j41(0,"a",21)(1,"nz-tag",22),e.nrm(2,"i",23),e.EFF(3),e.k0s()()),2&E){const R=e.XpG().ngIf;e.Mz_("routerLink","/molecular-profiles/",R.id,"/flags"),e.R7$(3),e.SpI(" Flags (",R.flags.totalCount,") ")}}function H(E,S){if(1&E&&(e.j41(0,"a",21)(1,"nz-tag",24),e.nrm(2,"i",25),e.EFF(3),e.k0s()()),2&E){const R=e.XpG().ngIf;e.Mz_("routerLink","/molecular-profiles/",R.id,"/revisions"),e.R7$(3),e.SpI(" Revisions (",R.revisions.totalCount,") ")}}function z(E,S){if(1&E&&(e.j41(0,"a",21)(1,"nz-tag",26),e.nrm(2,"i",27),e.EFF(3),e.k0s()()),2&E){const R=e.XpG().ngIf;e.Mz_("routerLink","/molecular-profiles/",R.id,"/comments"),e.R7$(3),e.SpI(" Comments (",R.comments.totalCount,") ")}}function Z(E,S){if(1&E&&(e.qex(0),e.j41(1,"nz-card",4),e.DNE(2,J,2,1,"ng-template",null,0,e.C5r),e.j41(4,"nz-descriptions",5)(5,"nz-descriptions-item",6),e.nrm(6,"cvc-mp-tag-name",7),e.k0s(),e.DNE(7,be,2,1,"nz-descriptions-item",8)(8,Oe,2,1,"nz-descriptions-item",9),e.j41(9,"nz-descriptions-item",10),e.DNE(10,we,3,1,"ng-container",11)(11,me,2,0,"ng-template",null,1,e.C5r),e.k0s()(),e.j41(13,"nz-row",12)(14,"nz-col",13)(15,"nz-space",14),e.DNE(16,de,4,3,"a",15)(17,H,4,3,"a",15)(18,z,4,3,"a",15),e.k0s()()()(),e.bVm()),2&E){const R=S.ngIf,Y=e.sdS(3),se=e.sdS(12);e.R7$(),e.Y8G("nzTitle",Y),e.R7$(3),e.Y8G("nzColumn",2),e.R7$(2),e.Y8G("nameSegments",R.parsedName)("enablePopover",!1),e.R7$(),e.Y8G("ngIf",R.evidenceItems.totalCount>0),e.R7$(),e.Y8G("ngIf",R.assertions.totalCount>0),e.R7$(2),e.Y8G("ngIf",R.molecularProfileAliases.length>0)("ngIfElse",se)}}let pe=(()=>{class E{constructor(R){this.gql=R}ngOnInit(){if(void 0===this.molecularProfileId)throw new Error("Must pass a molecular profile ID into the molecular profile popover component.");this.molecularProfile$=this.gql.watch({molecularProfileId:this.molecularProfileId}).valueChanges.pipe((0,r.T)(({data:R})=>R?.molecularProfile),(0,g.p)(t.kP))}static#e=this.\u0275fac=function(Y){return new(Y||E)(e.rXU(M.fvu))};static#t=this.\u0275cmp=e.VBU({type:E,selectors:[["cvc-molecular-profile-popover"]],inputs:{molecularProfileId:"molecularProfileId"},decls:3,vars:3,consts:[["cardTitle",""],["noAliases",""],["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle"],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","MP Expression","nzSpan","2"],[3,"nameSegments","enablePopover"],["nzTitle","Evidence Items","nzSpan","2",4,"ngIf"],["nzTitle","Assertions","nzSpan","2",4,"ngIf"],["nzTitle","Aliases"],[4,"ngIf","ngIfElse"],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzType","civic:molecularprofile"],["nzTitle","Evidence Items","nzSpan","2"],["nzTitle","Assertions","nzSpan","2"],[4,"ngFor","ngForOf"],["nz-typography","","nzType","secondary"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(Y,se){1&Y&&(e.j41(0,"div",2),e.DNE(1,Z,19,8,"ng-container",3),e.nI1(2,"ngrxPush"),e.k0s()),2&Y&&(e.R7$(),e.Y8G("ngIf",e.bMT(2,1,se.molecularProfile$)))},dependencies:[G.Sq,G.bT,L.Wk,B.cK,A.Uq,A.e,w.xA,w.gr,I.s,F.Dn,X.U5,X.Dq,V.M,x.G,ne.L9],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]})}return E})()},8052:(Rt,De,c)=>{c.d(De,{b:()=>V});var t=c(177),r=c(1188),g=c(5703),e=c(7529),M=c(2e3),G=c(5699),L=c(5103),B=c(7685),A=c(7054),w=c(1448),I=c(2142),F=c(6912),X=c(3953);let V=(()=>{class x{static#e=this.\u0275fac=function(be){return new(be||x)};static#t=this.\u0275mod=X.$C({type:x});static#n=this.\u0275inj=X.G2t({imports:[t.MD,r.iI,g.Ti,e.f3,M.WF,G.T,L.Y3,B.pc,F.l,A.L,I.x,w.B]})}return x})()},9973:(Rt,De,c)=>{c.d(De,{G:()=>F});var t=c(3953),r=c(177),g=c(3100),e=c(3245),M=c(4247);const G=X=>[X];function L(X,V){if(1&X&&t.nrm(0,"span",3),2&X){const x=t.XpG().$implicit;t.Y8G("innerHtml",x.text,t.npT)}}function B(X,V){if(1&X&&t.nrm(0,"cvc-feature-tag",6),2&X){const x=t.XpG().$implicit,ne=t.XpG(3);t.Y8G("feature",x)("enablePopover",ne.enablePopover)}}function A(X,V){if(1&X&&(t.qex(0),t.DNE(1,B,1,2,"cvc-feature-tag",5),t.bVm()),2&X){const x=V.$implicit;t.R7$(),t.Y8G("ngIf","Feature"==x.__typename)}}function w(X,V){if(1&X&&(t.qex(0),t.j41(1,"cvc-tag-group"),t.DNE(2,A,2,1,"ng-container",0),t.nrm(3,"cvc-variant-tag",4),t.k0s(),t.bVm()),2&X){const x=t.XpG(),ne=x.$implicit,J=x.index,be=t.XpG();t.R7$(2),t.Y8G("ngForOf",t.eq3(3,G,be.nameSegments[J-1])),t.R7$(),t.Y8G("variant",ne)("enablePopover",be.enablePopover)}}function I(X,V){if(1&X&&(t.qex(0),t.DNE(1,L,1,1,"span",1)(2,w,4,5,"ng-container",2),t.bVm()),2&X){const x=V.$implicit;t.R7$(),t.Y8G("ngIf","MolecularProfileTextSegment"==x.__typename),t.R7$(),t.Y8G("ngIf","Variant"==x.__typename)}}let F=(()=>{class X{constructor(){this.enablePopover=!0}ngOnInit(){if(void 0===this.nameSegments)throw new Error("Must pass a list of molecular profile name segments into mp name component.")}static#e=this.\u0275fac=function(ne){return new(ne||X)};static#t=this.\u0275cmp=t.VBU({type:X,selectors:[["cvc-mp-tag-name"]],inputs:{nameSegments:"nameSegments",enablePopover:"enablePopover"},decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],["class","text-segment",3,"innerHtml",4,"ngIf"],[4,"ngIf"],[1,"text-segment",3,"innerHtml"],[3,"variant","enablePopover"],[3,"feature","enablePopover",4,"ngIf"],[3,"feature","enablePopover"]],template:function(ne,J){1&ne&&t.DNE(0,I,3,2,"ng-container",0),2&ne&&t.Y8G("ngForOf",J.nameSegments)},dependencies:[r.Sq,r.bT,g.V,e._,M.L],styles:[".text-segment[_ngcontent-%COMP%]{display:inline-block;margin-right:8px;font-weight:700;color:#0009;font-size:14px;line-height:12px}"]})}return X})()},1448:(Rt,De,c)=>{c.d(De,{B:()=>B});var t=c(177),r=c(7051),g=c(5699),e=c(5103),M=c(2502),G=c(6912),L=c(3953);let B=(()=>{class A{static#e=this.\u0275fac=function(F){return new(F||A)};static#t=this.\u0275mod=L.$C({type:A});static#n=this.\u0275inj=L.G2t({imports:[t.MD,g.T,e.Y3,r.U,G.l,M.u]})}return A})()},5473:(Rt,De,c)=>{c.d(De,{z:()=>E});var t=c(6514),r=c(505),g=c(3953),e=c(177),M=c(1188),G=c(5699),L=c(1236),B=c(5103),A=c(5761),w=c(2387),I=c(2287),F=c(3075);const X=S=>({deprecated:S});function V(S,R){}function x(S,R){if(1&S&&(g.qex(0),g.j41(1,"a",7),g.DNE(2,V,0,0,"ng-template",8),g.k0s(),g.bVm()),2&S){const Y=g.XpG(),se=g.sdS(2);g.R7$(),g.Y8G("routerLink",Y.molecularProfile.link),g.R7$(),g.Y8G("ngTemplateOutlet",se)}}function ne(S,R){}function J(S,R){if(1&S){const Y=g.RV6();g.j41(0,"nz-tag",10),g.bIt("nzOnClose",function(Be){g.eBV(Y);const Pt=g.XpG(2);return g.Njj(Pt.itemClosed(Be))}),g.DNE(1,ne,0,0,"ng-template",8),g.k0s()}if(2&S){g.XpG();const Y=g.sdS(2),se=g.XpG(),Be=g.sdS(8);g.Y8G("ngClass",g.eq3(5,X,se.molecularProfile.deprecated))("nzPopoverMouseEnterDelay",se.onCloseClicked?0:.5)("nzPopoverContent",Y)("nzMode",se.onCloseClicked?"closeable":"default"),g.R7$(),g.Y8G("ngTemplateOutlet",Be)}}function be(S,R){if(1&S&&g.nrm(0,"cvc-molecular-profile-popover",12),2&S){const Y=g.XpG(3);g.Y8G("molecularProfileId",Y.molecularProfile.id)}}function Oe(S,R){if(1&S&&g.DNE(0,be,1,1,"cvc-molecular-profile-popover",11),2&S){const Y=g.XpG(2);g.Y8G("ngIf",Y.enablePopover)}}function he(S,R){if(1&S&&g.DNE(0,J,2,7,"nz-tag",9)(1,Oe,1,1,"ng-template",null,4,g.C5r),2&S){const Y=g.XpG(),se=g.sdS(4);g.Y8G("ngIf",Y.enablePopover)("ngIfElse",se)}}function we(S,R){}function me(S,R){if(1&S){const Y=g.RV6();g.j41(0,"nz-tag",13),g.bIt("nzOnClose",function(Be){g.eBV(Y);const Pt=g.XpG();return g.Njj(Pt.itemClosed(Be))}),g.DNE(1,we,0,0,"ng-template",8),g.k0s()}if(2&S){const Y=g.XpG(),se=g.sdS(8);g.Y8G("nzMode",Y.onCloseClicked?"closeable":"default")("ngClass",g.eq3(3,X,Y.molecularProfile.deprecated)),g.R7$(),g.Y8G("ngTemplateOutlet",se)}}function de(S,R){}function H(S,R){if(1&S&&g.DNE(0,de,0,0,"ng-template",8),2&S){g.XpG();const Y=g.sdS(2);g.Y8G("ngTemplateOutlet",Y)}}function z(S,R){if(1&S&&(g.qex(0),g.EFF(1),g.nI1(2,"truncate"),g.bVm()),2&S){const Y=g.XpG(2);g.R7$(),g.SpI(" ",g.i5U(2,1,Y.molecularProfile.name,Y.truncationLength)," ")}}function Z(S,R){if(1&S&&g.EFF(0),2&S){const Y=g.XpG(2);g.SpI(" ",Y.molecularProfile.name," ")}}function pe(S,R){if(1&S&&(g.j41(0,"cvc-icon-badges",14),g.nrm(1,"i",15),g.nI1(2,"entityColor"),g.k0s(),g.DNE(3,z,3,4,"ng-container",6)(4,Z,1,1,"ng-template",null,5,g.C5r)),2&S){const Y=g.sdS(5),se=g.XpG();g.Y8G("flagged",se.molecularProfile.flagged)("entityColor",se.iconColor),g.R7$(),g.Y8G("nzTwotoneColor",g.bMT(2,5,"MolecularProfile")),g.R7$(2),g.Y8G("ngIf",se.truncateLongName)("ngIfElse",Y)}}let E=(()=>{class S extends t.s{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1,this.truncationLength=20,this.iconColor=(0,r.P)("MolecularProfile")}idFunction(){return this.molecularProfile.id}ngOnInit(){if(super.ngOnInit(),void 0===this.molecularProfile)throw new Error("cvc-molecular-profile-tag requires LinkableMolecularProfile input, none supplied.");"number"==typeof this.truncateLongName&&(this.truncationLength=this.truncateLongName),"segments"in this.molecularProfile&&(this.molecularProfile.name=this.molecularProfile.segments.map(Y=>"text"in Y?Y.text:Y.name).join(" "))}static#e=this.\u0275fac=function(se){return new(se||S)};static#t=this.\u0275cmp=g.VBU({type:S,selectors:[["cvc-molecular-profile-tag"]],inputs:{molecularProfile:"molecularProfile",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[g.Vt3],decls:9,vars:2,consts:[["tag",""],["noPopover",""],["unlinked",""],["tagContent",""],["popoverContent",""],["fullName",""],[4,"ngIf","ngIfElse"],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverTrigger","hover",3,"ngClass","nzPopoverMouseEnterDelay","nzPopoverContent","nzMode","nzOnClose",4,"ngIf","ngIfElse"],["nz-popover","","nzPopoverTrigger","hover",3,"nzOnClose","ngClass","nzPopoverMouseEnterDelay","nzPopoverContent","nzMode"],[3,"molecularProfileId",4,"ngIf"],[3,"molecularProfileId"],[3,"nzOnClose","nzMode","ngClass"],[3,"flagged","entityColor"],["nz-icon","","nzType","civic-molecularprofile","nzTheme","twotone",3,"nzTwotoneColor"]],template:function(se,Be){if(1&se&&g.DNE(0,x,3,2,"ng-container",6)(1,he,3,2,"ng-template",null,0,g.C5r)(3,me,2,5,"ng-template",null,1,g.C5r)(5,H,1,1,"ng-template",null,2,g.C5r)(7,pe,6,7,"ng-template",null,3,g.C5r),2&se){const Pt=g.sdS(6);g.Y8G("ngIf",Be.linked)("ngIfElse",Pt)}},dependencies:[e.YU,e.bT,e.T3,M.Wk,G.s,L.L_,B.Dn,A.q,w.N,I.H,F.R],styles:["[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.submitted, [_nghost-%COMP%]     nz-tag.accepted, [_nghost-%COMP%]     nz-tag.deprecated{border-right-width:2px}[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.deprecated{border-color:#e6e6e6;background-color:#fff;color:#999999d9}[_nghost-%COMP%]     nz-tag.submitted{border-color:#ffe58f}[_nghost-%COMP%]     nz-tag.accepted{border-color:#b7eb8f}[_nghost-%COMP%]{display:inline-block}"],changeDetection:0})}return S})()},996:(Rt,De,c)=>{c.d(De,{o:()=>w});var t=c(177),r=c(1188),g=c(5699),e=c(5103),M=c(1236),G=c(4917),L=c(8052),B=c(4994),A=c(3953);let w=(()=>{class I{static#e=this.\u0275fac=function(V){return new(V||I)};static#t=this.\u0275mod=A.$C({type:I});static#n=this.\u0275inj=A.G2t({imports:[t.MD,r.iI,g.T,M.MC,e.Y3,G.i,L.b,B.a]})}return I})()},6564:(Rt,De,c)=>{c.d(De,{F:()=>x});var t=c(9199),r=c(6354),g=c(5964),e=c(3953),M=c(9145),G=c(177),L=c(5103),B=c(5703),A=c(7679),w=c(2e3),I=c(1774);function F(ne,J){if(1&ne&&(e.nrm(0,"i",9),e.EFF(1)),2&ne){const be=e.XpG().ngIf;e.R7$(),e.SpI(" ",be.name," ")}}function X(ne,J){if(1&ne&&(e.j41(0,"cvc-link-tag",10),e.EFF(1),e.k0s()),2&ne){const be=e.XpG().ngIf;e.Y8G("href",be.url),e.R7$(),e.SpI(" ",be.hpoId," ")}}function V(ne,J){if(1&ne&&(e.qex(0),e.j41(1,"nz-card",4),e.DNE(2,F,2,1,"ng-template",null,0,e.C5r)(4,X,2,2,"ng-template",null,1,e.C5r),e.j41(6,"nz-descriptions",5)(7,"nz-descriptions-item",6),e.EFF(8),e.k0s(),e.j41(9,"nz-descriptions-item",7),e.EFF(10),e.k0s(),e.j41(11,"nz-descriptions-item",8),e.EFF(12),e.k0s()()(),e.bVm()),2&ne){const be=J.ngIf,Oe=e.sdS(3),he=e.sdS(5);e.R7$(),e.Y8G("nzTitle",Oe)("nzExtra",he),e.R7$(5),e.Y8G("nzColumn",2),e.R7$(2),e.SpI(" ",be.assertionCount," "),e.R7$(2),e.SpI(" ",be.evidenceItemCount," "),e.R7$(2),e.SpI(" ",be.molecularProfileCount," ")}}let x=(()=>{class ne{constructor(be){this.gql=be}ngOnInit(){if(null==this.phenotypeId)throw new Error("cvc-phenotype-popover requires valid phenotypeId input.");this.phenotype$=this.gql.watch({phenotypeId:this.phenotypeId}).valueChanges.pipe((0,r.T)(({data:be})=>be?.phenotypePopover),(0,g.p)(t.kP))}static#e=this.\u0275fac=function(Oe){return new(Oe||ne)(e.rXU(M.WeE))};static#t=this.\u0275cmp=e.VBU({type:ne,selectors:[["cvc-phenotype-popover"]],inputs:{phenotypeId:"phenotypeId"},decls:3,vars:3,consts:[["cardTitle",""],["linkout",""],["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Assertions","nzSpan","2"],["nzTitle","Evidence","nzSpan","2"],["nzTitle","Molecular Profiles","nzSpan","2"],["nz-icon","","nzType","civic-phenotype","nzTheme","twotone","nzTwotoneColor","#2A63B6"],["tooltip","View in the Human Phenotype Ontology",3,"href"]],template:function(Oe,he){1&Oe&&(e.j41(0,"div",2),e.DNE(1,V,13,6,"ng-container",3),e.nI1(2,"ngrxPush"),e.k0s()),2&Oe&&(e.R7$(),e.Y8G("ngIf",e.bMT(2,1,he.phenotype$)))},dependencies:[G.bT,L.Dn,B.cK,A.a,w.xA,w.gr,I.L9],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]})}return ne})()},2582:(Rt,De,c)=>{c.d(De,{y:()=>L});var t=c(177),r=c(5703),g=c(7054),e=c(2e3),M=c(5103),G=c(3953);let L=(()=>{class B{static#e=this.\u0275fac=function(I){return new(I||B)};static#t=this.\u0275mod=G.$C({type:B});static#n=this.\u0275inj=G.G2t({imports:[t.MD,M.Y3,r.Ti,g.L,e.WF]})}return B})()},7047:(Rt,De,c)=>{c.d(De,{A:()=>he});var t=c(6514),r=c(3953),g=c(177),e=c(1188),M=c(5699),G=c(1236),L=c(5103),B=c(6564),A=c(3075);function w(we,me){}function I(we,me){if(1&we&&(r.qex(0),r.j41(1,"a",6),r.DNE(2,w,0,0,"ng-template",7),r.k0s(),r.bVm()),2&we){const de=r.XpG(),H=r.sdS(2);r.R7$(),r.Y8G("routerLink",de.phenotype.link),r.R7$(),r.Y8G("ngTemplateOutlet",H)}}function F(we,me){}function X(we,me){if(1&we&&r.nrm(0,"cvc-phenotype-popover",9),2&we){const de=r.XpG(2);r.Y8G("phenotypeId",de.phenotype.id)}}function V(we,me){if(1&we){const de=r.RV6();r.j41(0,"nz-tag",8),r.bIt("nzOnClose",function(z){r.eBV(de);const Z=r.XpG();return r.Njj(Z.itemClosed(z))}),r.DNE(1,F,0,0,"ng-template",7),r.k0s(),r.DNE(2,X,1,1,"ng-template",null,4,r.C5r)}if(2&we){const de=r.sdS(3),H=r.XpG(),z=r.sdS(8);r.Y8G("nzPopoverMouseEnterDelay",H.onCloseClicked?0:.5)("nzPopoverContent",de)("nzPopoverTrigger",H.enablePopover?"hover":null)("nzMode",H.onCloseClicked?"closeable":"default"),r.R7$(),r.Y8G("ngTemplateOutlet",z)}}function x(we,me){}function ne(we,me){if(1&we){const de=r.RV6();r.j41(0,"nz-tag",10),r.bIt("nzOnClose",function(z){r.eBV(de);const Z=r.XpG();return r.Njj(Z.itemClosed(z))}),r.DNE(1,x,0,0,"ng-template",7),r.k0s()}if(2&we){const de=r.XpG(),H=r.sdS(8);r.Y8G("nzMode",de.onCloseClicked?"closeable":"default"),r.R7$(),r.Y8G("ngTemplateOutlet",H)}}function J(we,me){}function be(we,me){if(1&we&&r.DNE(0,J,0,0,"ng-template",7),2&we){r.XpG();const de=r.sdS(2);r.Y8G("ngTemplateOutlet",de)}}function Oe(we,me){if(1&we&&(r.nrm(0,"i",11),r.nI1(1,"entityColor"),r.EFF(2)),2&we){const de=r.XpG();r.Y8G("nzTwotoneColor",r.bMT(1,2,"Phenotype")),r.R7$(2),r.SpI(" ",de.phenotype.name,"\n")}}let he=(()=>{class we extends t.s{constructor(){super(...arguments),this.enablePopover=!0}set phenotype(de){if(!de)throw new Error("phenotype-tag phentype input requires LinkablePhenotype.");this._phenotype=de}get phenotype(){return this._phenotype}idFunction(){return this.phenotype.id}static#e=this.\u0275fac=(()=>{let de;return function(z){return(de||(de=r.xGo(we)))(z||we)}})();static#t=this.\u0275cmp=r.VBU({type:we,selectors:[["cvc-phenotype-tag"]],inputs:{phenotype:"phenotype",enablePopover:"enablePopover"},features:[r.Vt3],decls:9,vars:2,consts:[["tag",""],["noPopover",""],["unlinked",""],["tagContent",""],["phenotypePopover",""],[4,"ngIf","ngIfElse"],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzOnClose","nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode"],[3,"phenotypeId"],[3,"nzOnClose","nzMode"],["nz-icon","","nzTheme","twotone","nzType","civic-phenotype",3,"nzTwotoneColor"]],template:function(H,z){if(1&H&&r.DNE(0,I,3,2,"ng-container",5)(1,V,4,5,"ng-template",null,0,r.C5r)(3,ne,2,2,"ng-template",null,1,r.C5r)(5,be,1,1,"ng-template",null,2,r.C5r)(7,Oe,3,4,"ng-template",null,3,r.C5r),2&H){const Z=r.sdS(6);r.Y8G("ngIf",z.linked)("ngIfElse",Z)}},dependencies:[g.bT,g.T3,e.Wk,M.s,G.L_,L.Dn,B.F,A.R],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})}return we})()},1542:(Rt,De,c)=>{c.d(De,{X:()=>A});var t=c(177),r=c(1188),g=c(4917),e=c(5103),M=c(1236),G=c(5699),L=c(2582),B=c(3953);let A=(()=>{class w{static#e=this.\u0275fac=function(X){return new(X||w)};static#t=this.\u0275mod=B.$C({type:w});static#n=this.\u0275inj=B.G2t({imports:[t.MD,r.iI,G.T,M.MC,e.Y3,L.y,g.i]})}return w})()},2387:(Rt,De,c)=>{c.d(De,{N:()=>A});var t=c(505),r=c(3953),g=c(177);const e=["*"],M=w=>({background:w});function G(w,I){if(1&w&&r.nrm(0,"div",3),2&w){const F=r.XpG();r.Y8G("ngStyle",r.eq3(1,M,F.flagColor))}}function L(w,I){if(1&w&&r.nrm(0,"div",4),2&w){const F=r.XpG();r.Y8G("ngStyle",r.eq3(1,M,F.entityColor))}}function B(w,I){if(1&w&&r.nrm(0,"div",5),2&w){const F=r.XpG();r.Y8G("ngStyle",r.eq3(1,M,F.entityColor))}}let A=(()=>{class w{constructor(){this.hasRevisions=!1,this.flagged=!1,this.hasComments=!1,this.entityColor="#AAA",this.flagColor=(0,t.P)("Flag")}static#e=this.\u0275fac=function(X){return new(X||w)};static#t=this.\u0275cmp=r.VBU({type:w,selectors:[["cvc-icon-badges"]],inputs:{hasRevisions:"hasRevisions",flagged:"flagged",hasComments:"hasComments",entityColor:"entityColor"},ngContentSelectors:e,decls:4,vars:3,consts:[["class","cvc-badge badge-flags",3,"ngStyle",4,"ngIf"],["class","cvc-badge badge-revisions",3,"ngStyle",4,"ngIf"],["class","cvc-badge badge-comments",3,"ngStyle",4,"ngIf"],[1,"cvc-badge","badge-flags",3,"ngStyle"],[1,"cvc-badge","badge-revisions",3,"ngStyle"],[1,"cvc-badge","badge-comments",3,"ngStyle"]],template:function(X,V){1&X&&(r.NAR(),r.SdG(0),r.DNE(1,G,1,3,"div",0)(2,L,1,3,"div",1)(3,B,1,3,"div",2)),2&X&&(r.R7$(),r.Y8G("ngIf",V.flagged),r.R7$(),r.Y8G("ngIf",V.hasRevisions),r.R7$(),r.Y8G("ngIf",V.hasComments))},dependencies:[g.bT,g.B3],styles:["[_nghost-%COMP%]{display:inline-block;position:relative;line-height:1}.cvc-badge[_ngcontent-%COMP%]{position:absolute;z-index:auto;width:4px;min-width:4px;height:4px;border-radius:100%;box-shadow:0 0 0 1px #fff;background:#aaa}.cvc-badge.badge-revisions[_ngcontent-%COMP%]{top:.5px;right:.5px;transform:translate(50%,-50%)}.cvc-badge.badge-flags[_ngcontent-%COMP%]{top:.5px;left:.5px;transform:translate(-50%,-50%)}.cvc-badge.badge-comments[_ngcontent-%COMP%]{bottom:.5px;right:.5px;transform:translate(50%,50%)}"],changeDetection:0})}return w})()},4994:(Rt,De,c)=>{c.d(De,{a:()=>e});var t=c(177),r=c(4917),g=c(3953);let e=(()=>{class M{static#e=this.\u0275fac=function(B){return new(B||M)};static#t=this.\u0275mod=g.$C({type:M});static#n=this.\u0275inj=g.G2t({imports:[t.MD,r.i]})}return M})()},7679:(Rt,De,c)=>{c.d(De,{a:()=>G});var t=c(3953),r=c(5154),g=c(5699),e=c(5103);const M=["*"];let G=(()=>{class L{set href(A){if(!A)throw new Error("link-tag link Input requires string.");this._href=A}get href(){return this._href?this._href:""}static#e=this.\u0275fac=function(w){return new(w||L)};static#t=this.\u0275cmp=t.VBU({type:L,selectors:[["cvc-link-tag"]],inputs:{href:"href",tooltip:"tooltip",iconName:"iconName"},ngContentSelectors:M,decls:4,vars:4,consts:[["target","_blank",3,"href"],["nzColor","default","nz-tooltip","",3,"nzTooltipTitle","nzTooltipTrigger"],["nz-icon","","nzTheme","outline",3,"nzType"]],template:function(w,I){1&w&&(t.NAR(),t.j41(0,"a",0)(1,"nz-tag",1),t.nrm(2,"i",2),t.SdG(3),t.k0s()()),2&w&&(t.Y8G("href",I.href,t.B4B),t.R7$(),t.Y8G("nzTooltipTitle",I.tooltip)("nzTooltipTrigger",I.tooltip?"hover":null),t.R7$(),t.Y8G("nzType",I.iconName?I.iconName:"link"))},dependencies:[r.LH,g.s,e.Dn],encapsulation:2})}return L})()},7054:(Rt,De,c)=>{c.d(De,{L:()=>G});var t=c(177),r=c(5154),g=c(5699),e=c(5103),M=c(3953);let G=(()=>{class L{static#e=this.\u0275fac=function(w){return new(w||L)};static#t=this.\u0275mod=M.$C({type:L});static#n=this.\u0275inj=M.G2t({imports:[t.MD,r.Qt,g.T,e.Y3]})}return L})()},9214:(Rt,De,c)=>{c.d(De,{y:()=>M});var t=c(177),r=c(5103),g=c(5699),e=c(3953);let M=(()=>{class G{static#e=this.\u0275fac=function(A){return new(A||G)};static#t=this.\u0275mod=e.$C({type:G});static#n=this.\u0275inj=e.G2t({imports:[t.MD,g.T,r.Y3]})}return G})()},3296:(Rt,De,c)=>{c.d(De,{M:()=>w});var t=c(4412),r=c(605),g=c(1594),e=c(3953),M=c(177),G=c(5699),L=c(5103),B=c(1774);function A(I,F){1&I&&(e.j41(0,"nz-tag",1),e.nrm(1,"i",2),e.j41(2,"span"),e.EFF(3,"End of results reached"),e.k0s()())}let w=(()=>{class I{set cvcShowTag(X){void 0!==X&&X&&this.showTag()}constructor(X){this.cdr=X,this.showTag$=new t.t(!1)}showTag(){!1===this.showTag$.getValue()&&(this.showTag$.next(!0),(0,r.Y)(3e3).pipe((0,g.$)()).subscribe(()=>{this.showTag$.next(!1),this.cdr.detectChanges()}))}static#e=this.\u0275fac=function(V){return new(V||I)(e.rXU(e.gRc))};static#t=this.\u0275cmp=e.VBU({type:I,selectors:[["cvc-no-more-rows"]],inputs:{cvcShowTag:"cvcShowTag"},decls:2,vars:3,consts:[["nzColor","warning",4,"ngIf"],["nzColor","warning"],["nz-icon","","nzType","exclamation-circle"]],template:function(V,x){1&V&&(e.DNE(0,A,4,0,"nz-tag",0),e.nI1(1,"ngrxPush")),2&V&&e.Y8G("ngIf",e.bMT(1,1,x.showTag$))},dependencies:[M.bT,G.s,L.Dn,B.L9],encapsulation:2,changeDetection:0})}return I})()},2143:(Rt,De,c)=>{c.d(De,{n:()=>J});var t=c(3953),r=c(177),g=c(5699),e=c(5103),M=c(1236),G=c(2e3),L=c(2617),B=c(7679),A=c(8139);function w(be,Oe){1&be&&t.nrm(0,"i",5)}function I(be,Oe){1&be&&t.nrm(0,"i",6)}function F(be,Oe){if(1&be&&(t.j41(0,"nz-tag",2),t.nI1(1,"titlecase"),t.DNE(2,w,1,0,"i",3)(3,I,1,0,"i",4),t.EFF(4),t.nI1(5,"titlecase"),t.k0s()),2&be){const he=t.XpG(),we=t.sdS(2);t.Y8G("nzColor",he.tagStatus)("nzPopoverMouseEnterDelay",.5)("nzPopoverContent",we)("nzPopoverTitle","This Source has been identified by Retraction Watch as status: "+t.bMT(1,8,he.retractionNature))("nzPopoverTrigger",he.enablePopover?"hover":null),t.R7$(2),t.Y8G("ngIf","error"==he.tagStatus),t.R7$(),t.Y8G("ngIf","warning"==he.tagStatus),t.R7$(),t.SpI(" ",t.bMT(5,10,he.retractionNature),"\n")}}function X(be,Oe){if(1&be&&(t.j41(0,"nz-descriptions-item",13),t.EFF(1),t.nI1(2,"timeAgo"),t.k0s()),2&be){const he=t.XpG(2);t.R7$(),t.JRh(t.bMT(2,1,he.retractionDate))}}function V(be,Oe){if(1&be&&(t.j41(0,"nz-list-item"),t.EFF(1),t.k0s()),2&be){const he=Oe.$implicit;t.R7$(),t.SpI(" ",he.replace("+","")," ")}}function x(be,Oe){if(1&be&&(t.j41(0,"nz-descriptions-item",14)(1,"nz-list",15),t.DNE(2,V,2,1,"nz-list-item",16),t.k0s()()),2&be){const he=t.XpG(2);t.R7$(2),t.Y8G("ngForOf",he.retractionReasons.split(";"))}}function ne(be,Oe){if(1&be&&(t.j41(0,"nz-descriptions",7),t.DNE(1,X,3,3,"nz-descriptions-item",8)(2,x,3,1,"nz-descriptions-item",9),t.j41(3,"nz-descriptions-item",10)(4,"cvc-link-tag",11),t.EFF(5," Retraction Watch Homepage "),t.k0s(),t.j41(6,"cvc-link-tag",12),t.EFF(7," Retraction Watch Database "),t.k0s()()()),2&be){const he=t.XpG();t.Y8G("nzColumn",1),t.R7$(),t.Y8G("ngIf",he.retractionDate),t.R7$(),t.Y8G("ngIf",he.retractionReasons)}}let J=(()=>{class be{constructor(){this.enablePopover=!0}set retractionNature(he){this._retractionNature=he,he&&("Retraction"==he?(this.tagStatus="error",this.retracted=!0):(this.tagStatus="warning",this.retracted=!1))}get retractionNature(){return this._retractionNature}ngOnInit(){if(void 0===this.retractionNature)throw new Error("Must pass a valid retractionNature to cvc-status-tag component");if(void 0===this.retractionDate)throw new Error("Must pass a valid retractionDate to cvc-status-tag component");if(void 0===this.retractionReasons)throw new Error("Must pass a valid retractionReasons to cvc-status-tag component")}static#e=this.\u0275fac=function(we){return new(we||be)};static#t=this.\u0275cmp=t.VBU({type:be,selectors:[["cvc-retraction-status-tag"]],inputs:{retractionNature:"retractionNature",retractionDate:"retractionDate",retractionReasons:"retractionReasons",enablePopover:"enablePopover"},decls:3,vars:1,consts:[["retractionPopover",""],["nz-popover","","nzPopoverPlacement","left",3,"nzColor","nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTitle","nzPopoverTrigger",4,"ngIf"],["nz-popover","","nzPopoverPlacement","left",3,"nzColor","nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTitle","nzPopoverTrigger"],["nz-icon","","nzType","close-circle",4,"ngIf"],["nz-icon","","nzType","exclamation-circle",4,"ngIf"],["nz-icon","","nzType","close-circle"],["nz-icon","","nzType","exclamation-circle"],["nzBordered","","nzSize","small",3,"nzColumn"],["nzTitle","Date",4,"ngIf"],["nzTitle","Reasons",4,"ngIf"],["nzTitle","Links"],["href","https://retractionwatch.com/"],["href","http://retractiondatabase.org/RetractionSearch.aspx?"],["nzTitle","Date"],["nzTitle","Reasons"],["nzSize","small"],[4,"ngFor","ngForOf"]],template:function(we,me){1&we&&t.DNE(0,F,6,12,"nz-tag",1)(1,ne,8,3,"ng-template",null,0,t.C5r),2&we&&t.Y8G("ngIf",me.tagStatus)},dependencies:[r.Sq,r.bT,g.s,e.Dn,M.L_,G.xA,G.gr,L.eE,L.lQ,B.a,r.PV,A.N],styles:["[_nghost-%COMP%]     nz-descriptions[nzLayout=horizontal] .ant-descriptions-item-label{text-align:right}[_nghost-%COMP%]     nz-descriptions .ant-descriptions-item-label{font-weight:550}[_nghost-%COMP%]     nz-descriptions .ant-descriptions-header{margin-top:4px;margin-bottom:4px;padding-left:8px}[_nghost-%COMP%]     nz-descriptions .ant-descriptions-title{font-weight:500;color:#00000073;font-size:12px}[_nghost-%COMP%]     nz-descriptions .ant-descriptions-item-content p:last-of-type{margin-bottom:0}"]})}return be})()},174:(Rt,De,c)=>{c.d(De,{u:()=>w});var t=c(177),r=c(5699),g=c(5103),e=c(1236),M=c(2e3),G=c(2617),L=c(4917),B=c(7054),A=c(3953);let w=(()=>{class I{static#e=this.\u0275fac=function(V){return new(V||I)};static#t=this.\u0275mod=A.$C({type:I});static#n=this.\u0275inj=A.G2t({imports:[t.MD,r.T,g.Y3,e.MC,M.WF,G.rD,L.i,B.L]})}return I})()},311:(Rt,De,c)=>{c.d(De,{g:()=>I});var t=c(3953),r=c(177),g=c(5699),e=c(5103);function M(F,X){1&F&&t.nrm(0,"i",7)}function G(F,X){1&F&&t.nrm(0,"i",8)}function L(F,X){1&F&&t.nrm(0,"i",9)}function B(F,X){1&F&&t.nrm(0,"i",10)}function A(F,X){1&F&&t.nrm(0,"i",10)}function w(F,X){if(1&F&&(t.j41(0,"nz-tag",1),t.qex(1,2),t.DNE(2,M,1,0,"i",3)(3,G,1,0,"i",4)(4,L,1,0,"i",5)(5,B,1,0,"i",6)(6,A,1,0,"i",6),t.bVm(),t.EFF(7),t.nI1(8,"titlecase"),t.k0s()),2&F){const V=t.XpG();t.Y8G("nzColor",V.tagStatus),t.R7$(),t.Y8G("ngSwitch",V.tagStatus),t.R7$(),t.Y8G("ngSwitchCase","success"),t.R7$(),t.Y8G("ngSwitchCase","error"),t.R7$(),t.Y8G("ngSwitchCase","warning"),t.R7$(),t.Y8G("ngSwitchCase","processing"),t.R7$(),t.Y8G("ngSwitchCase","default"),t.R7$(),t.SpI(" ",t.bMT(8,8,V.status),"\n")}}let I=(()=>{class F{constructor(){this.statusColorMap={ACCEPTED:"success",REJECTED:"error",SUBMITTED:"warning",NEW:"processing",SUPERSEDED:"default",OPEN:"error",RESOLVED:"default"}}set status(V){this._status=V,V&&(this.tagStatus=this.statusColorMap[V])}get status(){return this._status}ngOnInit(){if(void 0===this.status)throw new Error("Must pass a valid EvidenceStatus, RevisionStatus, or FlagState to cvc-status-tag component")}static#e=this.\u0275fac=function(x){return new(x||F)};static#t=this.\u0275cmp=t.VBU({type:F,selectors:[["cvc-status-tag"]],inputs:{status:"status"},decls:1,vars:1,consts:[[3,"nzColor",4,"ngIf"],[3,"nzColor"],[3,"ngSwitch"],["nz-icon","","nzType","check-circle",4,"ngSwitchCase"],["nz-icon","","nzType","close-circle",4,"ngSwitchCase"],["nz-icon","","nzType","exclamation-circle",4,"ngSwitchCase"],["nz-icon","",4,"ngSwitchCase"],["nz-icon","","nzType","check-circle"],["nz-icon","","nzType","close-circle"],["nz-icon","","nzType","exclamation-circle"],["nz-icon",""]],template:function(x,ne){1&x&&t.DNE(0,w,9,10,"nz-tag",0),2&x&&t.Y8G("ngIf",ne.tagStatus)},dependencies:[r.bT,r.ux,r.e1,g.s,e.Dn,r.PV],encapsulation:2})}return F})()},9590:(Rt,De,c)=>{c.d(De,{R:()=>M});var t=c(177),r=c(5699),g=c(5103),e=c(3953);let M=(()=>{class G{static#e=this.\u0275fac=function(A){return new(A||G)};static#t=this.\u0275mod=e.$C({type:G});static#n=this.\u0275inj=e.G2t({imports:[t.MD,r.T,g.Y3]})}return G})()},4247:(Rt,De,c)=>{c.d(De,{L:()=>g});var t=c(3953);const r=["*"];let g=(()=>{class e{constructor(){}static#e=this.\u0275fac=function(L){return new(L||e)};static#t=this.\u0275cmp=t.VBU({type:e,selectors:[["cvc-tag-group"]],ngContentSelectors:r,decls:1,vars:0,template:function(L,B){1&L&&(t.NAR(),t.SdG(0))},styles:["[_nghost-%COMP%]    >*:first-child   nz-tag{border-top-right-radius:0;border-bottom-right-radius:0;margin-right:0}[_nghost-%COMP%]    >*:last-child   nz-tag{border-top-left-radius:0;border-bottom-left-radius:0;margin-left:-1px;border-left-color:#e9e9e9}"]})}return e})()},2502:(Rt,De,c)=>{c.d(De,{u:()=>g});var t=c(177),r=c(3953);let g=(()=>{class e{static#e=this.\u0275fac=function(L){return new(L||e)};static#t=this.\u0275mod=r.$C({type:e});static#n=this.\u0275inj=r.G2t({imports:[t.MD]})}return e})()},7855:(Rt,De,c)=>{c.d(De,{M:()=>g});var t=c(3953);const r=["*"];let g=(()=>{class e{constructor(){}ngOnInit(){}static#e=this.\u0275fac=function(L){return new(L||e)};static#t=this.\u0275cmp=t.VBU({type:e,selectors:[["cvc-tag-list"]],hostVars:4,hostBindings:function(L,B){2&L&&t.AVh("xs","xs"===B.size||!B.size)("sm","sm"===B.size)},inputs:{size:"size"},ngContentSelectors:r,decls:2,vars:0,consts:[[1,"tag-list"]],template:function(L,B){1&L&&(t.NAR(),t.j41(0,"div",0),t.SdG(1),t.k0s())},styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .tag-list[_ngcontent-%COMP%]    >*{display:inline-block}[_nghost-%COMP%]   .tag-list[_ngcontent-%COMP%]    >*:last-child{margin-right:-8px}.xs[_nghost-%COMP%]{margin-bottom:-4px}.xs[_nghost-%COMP%]   .tag-list[_ngcontent-%COMP%]    >*{margin-bottom:4px}.sm[_nghost-%COMP%]{margin-bottom:-8px}.sm[_nghost-%COMP%]   .tag-list[_ngcontent-%COMP%]    >*{margin-bottom:8px}"],changeDetection:0})}return e})()},2142:(Rt,De,c)=>{c.d(De,{x:()=>g});var t=c(177),r=c(3953);let g=(()=>{class e{static#e=this.\u0275fac=function(L){return new(L||e)};static#t=this.\u0275mod=r.$C({type:e});static#n=this.\u0275inj=r.G2t({imports:[t.MD]})}return e})()},5652:(Rt,De,c)=>{c.d(De,{u:()=>me});var t=c(9199),r=c(6354),g=c(5964),e=c(3953),M=c(9145),G=c(177),L=c(5103),B=c(5703),A=c(2e3),w=c(7679),I=c(7855),F=c(6726),X=c(2143),V=c(1774);function x(de,H){if(1&de&&(e.nrm(0,"i",12),e.EFF(1)),2&de){const z=e.XpG().ngIf;e.R7$(),e.Lme(" ",z.displayType,":\xa0",z.citation," ")}}function ne(de,H){if(1&de&&e.nrm(0,"cvc-retraction-status-tag",15),2&de){const z=e.XpG(2).ngIf;e.Y8G("retractionNature",z.retractionNature)("retractionDate",z.retractionDate)("retractionReasons",z.retractionReasons)("enablePopover",!1)}}function J(de,H){if(1&de&&(e.j41(0,"cvc-link-tag",13),e.EFF(1),e.k0s(),e.DNE(2,ne,1,4,"cvc-retraction-status-tag",14)),2&de){const z=e.XpG().ngIf;e.Y8G("href",z.sourceUrl)("tooltip","View on "+z.displayType),e.R7$(),e.SpI(" ",z.displayType+":"+z.citationId," "),e.R7$(),e.Y8G("ngIf",z.retractionNature&&z.retractionDate&&z.retractionReasons)}}function be(de,H){1&de&&e.nrm(0,"cvc-clinical-trial-tag",17),2&de&&e.Y8G("clinicalTrial",H.$implicit)("enablePopover",!1)}function Oe(de,H){if(1&de&&(e.qex(0),e.j41(1,"cvc-tag-list"),e.DNE(2,be,1,2,"cvc-clinical-trial-tag",16),e.k0s(),e.bVm()),2&de){const z=e.XpG().ngIf;e.R7$(2),e.Y8G("ngForOf",z.clinicalTrials)}}function he(de,H){1&de&&e.EFF(0," -- ")}function we(de,H){if(1&de&&(e.qex(0),e.j41(1,"nz-card",5),e.DNE(2,x,2,2,"ng-template",null,0,e.C5r)(4,J,3,4,"ng-template",null,1,e.C5r),e.j41(6,"nz-descriptions",6)(7,"nz-descriptions-item",7),e.EFF(8),e.k0s(),e.j41(9,"nz-descriptions-item",8),e.EFF(10),e.k0s(),e.j41(11,"nz-descriptions-item",9),e.EFF(12),e.k0s(),e.j41(13,"nz-descriptions-item",10),e.DNE(14,Oe,3,1,"ng-container",11)(15,he,1,0,"ng-template",null,2,e.C5r),e.k0s()()(),e.bVm()),2&de){const z=H.ngIf,Z=e.sdS(3),pe=e.sdS(5),E=e.sdS(16);e.R7$(),e.Y8G("nzTitle",Z)("nzExtra",pe),e.R7$(5),e.Y8G("nzColumn",2),e.R7$(2),e.SpI(" ",z.title," "),e.R7$(2),e.SpI(" ",z.fullJournalTitle," "),e.R7$(2),e.SpI(" ",z.evidenceItemCount," "),e.R7$(2),e.Y8G("ngIf",z.clinicalTrials&&z.clinicalTrials.length>0)("ngIfElse",E)}}let me=(()=>{class de{constructor(z){this.gql=z}ngOnInit(){if(null==this.sourceId)throw new Error("cvc-source-popover requires valid sourceId input.");this.source$=this.gql.watch({sourceId:this.sourceId}).valueChanges.pipe((0,r.T)(({data:z})=>z?.sourcePopover),(0,g.p)(t.kP))}static#e=this.\u0275fac=function(Z){return new(Z||de)(e.rXU(M.jme))};static#t=this.\u0275cmp=e.VBU({type:de,selectors:[["cvc-source-popover"]],inputs:{sourceId:"sourceId"},decls:3,vars:3,consts:[["cardTitle",""],["linkout",""],["noTrials",""],["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Title","nzSpan","2"],["nzTitle","Journal","nzSpan","2"],["nzTitle","Evidence","nzSpan","2"],["nzTitle","Clinical Trials:","nzSpan","2"],[4,"ngIf","ngIfElse"],["nz-icon","","nzType","civic-source","nzTheme","twotone","nzTwotoneColor","#F9BA45"],[3,"href","tooltip"],[3,"retractionNature","retractionDate","retractionReasons","enablePopover",4,"ngIf"],[3,"retractionNature","retractionDate","retractionReasons","enablePopover"],[3,"clinicalTrial","enablePopover",4,"ngFor","ngForOf"],[3,"clinicalTrial","enablePopover"]],template:function(Z,pe){1&Z&&(e.j41(0,"div",3),e.DNE(1,we,17,8,"ng-container",4),e.nI1(2,"ngrxPush"),e.k0s()),2&Z&&(e.R7$(),e.Y8G("ngIf",e.bMT(2,1,pe.source$)))},dependencies:[G.Sq,G.bT,L.Dn,B.cK,A.xA,A.gr,w.a,I.M,F.X,X.n,V.L9],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]})}return de})()},7683:(Rt,De,c)=>{c.d(De,{B:()=>w});var t=c(177),r=c(5703),g=c(7054),e=c(2e3),M=c(2142),G=c(9619),L=c(5103),B=c(174),A=c(3953);let w=(()=>{class I{static#e=this.\u0275fac=function(V){return new(V||I)};static#t=this.\u0275mod=A.$C({type:I});static#n=this.\u0275inj=A.G2t({imports:[t.MD,L.Y3,r.Ti,e.WF,g.L,M.x,G.u,B.u]})}return I})()},9062:(Rt,De,c)=>{c.d(De,{D:()=>z});var t=c(6514),r=c(3953),g=c(8335),e=c(177),M=c(1188),G=c(5103),L=c(1236),B=c(5699),A=c(5652),w=c(2287),I=c(3075);const F=Z=>({deprecated:Z});function X(Z,pe){}function V(Z,pe){if(1&Z&&(r.qex(0),r.j41(1,"a",6),r.DNE(2,X,0,0,"ng-template",7),r.k0s(),r.bVm()),2&Z){const E=r.XpG(),S=r.sdS(2);r.R7$(),r.Y8G("routerLink",E.source.link),r.R7$(),r.Y8G("ngTemplateOutlet",S)}}function x(Z,pe){}function ne(Z,pe){if(1&Z&&r.nrm(0,"cvc-source-popover",9),2&Z){const E=r.XpG(2);r.Y8G("sourceId",E.source.id)}}function J(Z,pe){if(1&Z){const E=r.RV6();r.j41(0,"nz-tag",8),r.mxI("nzPopoverVisibleChange",function(R){r.eBV(E);const Y=r.XpG();return r.DH7(Y.popoverVisible,R)||(Y.popoverVisible=R),r.Njj(R)}),r.bIt("nzOnClose",function(R){r.eBV(E);const Y=r.XpG();return r.Njj(Y.itemClosed(R))}),r.DNE(1,x,0,0,"ng-template",7),r.k0s(),r.DNE(2,ne,1,1,"ng-template",null,3,r.C5r)}if(2&Z){const E=r.sdS(3),S=r.XpG(),R=r.sdS(6);r.Y8G("ngClass",r.eq3(7,F,S.source.deprecated))("nzPopoverMouseEnterDelay",S.onCloseClicked?0:.5)("nzPopoverContent",E)("nzPopoverTrigger",S.enablePopover?"hover":null),r.R50("nzPopoverVisible",S.popoverVisible),r.Y8G("nzMode",S.onCloseClicked?"closeable":"default"),r.R7$(),r.Y8G("ngTemplateOutlet",R)}}function be(Z,pe){}function Oe(Z,pe){if(1&Z&&r.DNE(0,be,0,0,"ng-template",7),2&Z){r.XpG();const E=r.sdS(2);r.Y8G("ngTemplateOutlet",E)}}function he(Z,pe){if(1&Z&&(r.qex(0),r.EFF(1),r.nI1(2,"truncate"),r.bVm()),2&Z){const E=r.XpG(3);r.R7$(),r.SpI(" ",r.i5U(2,1,E.displayName,50)," ")}}function we(Z,pe){if(1&Z&&(r.qex(0),r.EFF(1),r.bVm()),2&Z){const E=r.XpG(3);r.R7$(),r.SpI(" ",E.displayName," ")}}function me(Z,pe){if(1&Z&&(r.qex(0),r.DNE(1,he,3,4,"ng-container",11)(2,we,2,1,"ng-container",11),r.bVm()),2&Z){const E=r.XpG(2);r.R7$(),r.Y8G("ngIf",E.truncateLongName),r.R7$(),r.Y8G("ngIf",!E.truncateLongName)}}function de(Z,pe){if(1&Z&&r.EFF(0),2&Z){const E=r.XpG(2);r.SpI(" SID:",E.source.id," ")}}function H(Z,pe){if(1&Z&&(r.nrm(0,"i",10),r.nI1(1,"entityColor"),r.DNE(2,me,3,2,"ng-container",5)(3,de,1,1,"ng-template",null,4,r.C5r)),2&Z){const E=r.sdS(4),S=r.XpG();r.Y8G("nzTwotoneColor",r.bMT(1,3,"Source")),r.R7$(2),r.Y8G("ngIf","normal"===S.mode)("ngIfElse",E)}}let z=(()=>{class Z extends t.s{set source(E){if(!E)throw new Error("source-tag source input requires SourceWithDisplayName or SourceWithCitation.");this._source=E,this.displayName="displayName"in this.source?this.source.displayName:this.sourceTypeDisplay.transform(this.source.sourceType)+": "+this.source.citation}get source(){return this._source}constructor(E){super(),this.sourceTypeDisplay=E,this.enablePopover=!0,this.linked=!0,this.mode="normal",this.truncateLongName=!1}idFunction(){return this.source.id}static#e=this.\u0275fac=function(S){return new(S||Z)(r.rXU(g.Q))};static#t=this.\u0275cmp=r.VBU({type:Z,selectors:[["cvc-source-tag"]],inputs:{source:"source",enablePopover:"enablePopover",linked:"linked",mode:"mode",truncateLongName:"truncateLongName"},features:[r.Vt3],decls:7,vars:2,consts:[["tag",""],["unlinked",""],["tagContent",""],["sourcePopover",""],["concise",""],[4,"ngIf","ngIfElse"],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzPopoverVisibleChange","nzOnClose","ngClass","nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzPopoverVisible","nzMode"],[3,"sourceId"],["nz-icon","","nzTheme","twotone","nzType","civic-source",3,"nzTwotoneColor"],[4,"ngIf"]],template:function(S,R){if(1&S&&r.DNE(0,V,3,2,"ng-container",5)(1,J,4,9,"ng-template",null,0,r.C5r)(3,Oe,1,1,"ng-template",null,1,r.C5r)(5,H,5,5,"ng-template",null,2,r.C5r),2&S){const Y=r.sdS(4);r.Y8G("ngIf",R.linked)("ngIfElse",Y)}},dependencies:[e.YU,e.bT,e.T3,M.Wk,G.Dn,L.L_,B.s,A.u,w.H,I.R],styles:["[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.submitted, [_nghost-%COMP%]     nz-tag.accepted, [_nghost-%COMP%]     nz-tag.deprecated{border-right-width:2px}[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.deprecated{border-color:#e6e6e6;background-color:#fff;color:#999999d9}[_nghost-%COMP%]     nz-tag.submitted{border-color:#ffe58f}[_nghost-%COMP%]     nz-tag.accepted{border-color:#b7eb8f}[_nghost-%COMP%]{display:inline-block}"],changeDetection:0})}return Z})()},1209:(Rt,De,c)=>{c.d(De,{k:()=>A});var t=c(177),r=c(1236),g=c(1188),e=c(7683),M=c(5699),G=c(5103),L=c(4917),B=c(3953);let A=(()=>{class w{static#e=this.\u0275fac=function(X){return new(X||w)};static#t=this.\u0275mod=B.$C({type:w});static#n=this.\u0275inj=B.G2t({imports:[t.MD,g.iI,G.Y3,r.MC,M.T,e.B,L.i]})}return w})()},3287:(Rt,De,c)=>{c.d(De,{a:()=>H});var t=c(6354),r=c(5964),g=c(9199),e=c(3953),M=c(9145),G=c(177),L=c(5703),B=c(2e3),A=c(5103),w=c(7391),I=c(5699),F=c(5154),X=c(7679),V=c(1774),x=c(2287);function ne(z,Z){if(1&z&&(e.nrm(0,"i",12),e.EFF(1),e.nI1(2,"truncate")),2&z){const pe=e.XpG().ngIf;e.R7$(),e.SpI(" ",e.i5U(2,1,pe.name,50)," ")}}function J(z,Z){if(1&z&&(e.j41(0,"cvc-link-tag",14),e.EFF(1),e.k0s()),2&z){const pe=e.XpG(2).ngIf;e.Y8G("href",pe.therapyUrl),e.R7$(),e.SpI(" ",pe.ncitId," ")}}function be(z,Z){if(1&z&&e.DNE(0,J,2,2,"cvc-link-tag",13),2&z){const pe=e.XpG().ngIf,E=e.sdS(7);e.Y8G("ngIf",pe.ncitId)("ngIfElse",E)}}function Oe(z,Z){1&z&&(e.j41(0,"span",15),e.EFF(1,"No NCIt ID"),e.k0s())}function he(z,Z){if(1&z&&(e.j41(0,"nz-descriptions-item",16),e.EFF(1),e.k0s()),2&z){const pe=e.XpG().ngIf;e.R7$(),e.SpI(" ",pe.name," ")}}function we(z,Z){if(1&z&&(e.j41(0,"nz-tag",19),e.EFF(1),e.nI1(2,"truncate"),e.k0s()),2&z){const pe=Z.$implicit;e.Y8G("nzTooltipTitle",pe),e.R7$(),e.JRh(e.bMT(2,2,pe))}}function me(z,Z){if(1&z&&(e.j41(0,"nz-descriptions-item",17),e.DNE(1,we,3,4,"nz-tag",18),e.k0s()),2&z){const pe=e.XpG().ngIf;e.R7$(),e.Y8G("ngForOf",pe.therapyAliases)}}function de(z,Z){if(1&z&&(e.qex(0),e.j41(1,"nz-card",5),e.DNE(2,ne,3,4,"ng-template",null,0,e.C5r)(4,be,1,2,"ng-template",null,1,e.C5r)(6,Oe,2,0,"ng-template",null,2,e.C5r),e.j41(8,"nz-descriptions",6),e.DNE(9,he,2,1,"nz-descriptions-item",7)(10,me,2,1,"nz-descriptions-item",8),e.j41(11,"nz-descriptions-item",9),e.EFF(12),e.k0s(),e.j41(13,"nz-descriptions-item",10),e.EFF(14),e.k0s(),e.j41(15,"nz-descriptions-item",11),e.EFF(16),e.k0s()()(),e.bVm()),2&z){const pe=Z.ngIf,E=e.sdS(3),S=e.sdS(5);e.R7$(),e.Y8G("nzTitle",E)("nzExtra",S),e.R7$(7),e.Y8G("nzColumn",2),e.R7$(),e.Y8G("ngIf",pe.name.length>50),e.R7$(),e.Y8G("ngIf",pe.therapyAliases.length>0),e.R7$(2),e.SpI(" ",pe.assertionCount," "),e.R7$(2),e.SpI(" ",pe.evidenceItemCount," "),e.R7$(2),e.SpI(" ",pe.molecularProfileCount," ")}}let H=(()=>{class z{constructor(pe){this.gql=pe}ngOnInit(){if(null==this.therapyId)throw new Error("cvc-therapy-popover requires valid therapyId input.");this.therapy$=this.gql.watch({therapyId:this.therapyId}).valueChanges.pipe((0,t.T)(({data:pe})=>pe?.therapyPopover),(0,r.p)(g.kP))}static#e=this.\u0275fac=function(E){return new(E||z)(e.rXU(M.RQS))};static#t=this.\u0275cmp=e.VBU({type:z,selectors:[["cvc-therapy-popover"]],inputs:{therapyId:"therapyId"},decls:3,vars:3,consts:[["cardTitle",""],["linkout",""],["noNcitId",""],["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Name","nzSpan","2",4,"ngIf"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Assertions","nzSpan","2"],["nzTitle","Evidence","nzSpan","2"],["nzTitle","Molecular Profiles","nzSpan","2"],["nz-icon","","nzType","civic-therapy","nzTheme","twotone","nzTwotoneColor","#AC3996"],["tooltip","View on NCI Thesaurus",3,"href",4,"ngIf","ngIfElse"],["tooltip","View on NCI Thesaurus",3,"href"],["nz-typography","","nzType","secondary"],["nzTitle","Name","nzSpan","2"],["nzTitle","Aliases","nzSpan","2"],["nz-tooltip","",3,"nzTooltipTitle",4,"ngFor","ngForOf"],["nz-tooltip","",3,"nzTooltipTitle"]],template:function(E,S){1&E&&(e.j41(0,"div",3),e.DNE(1,de,17,8,"ng-container",4),e.nI1(2,"ngrxPush"),e.k0s()),2&E&&(e.R7$(),e.Y8G("ngIf",e.bMT(2,1,S.therapy$)))},dependencies:[G.Sq,G.bT,L.cK,B.xA,B.gr,A.Dn,w.Di,I.s,F.LH,X.a,V.L9,x.H],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]})}return z})()},3126:(Rt,De,c)=>{c.d(De,{t:()=>F});var t=c(177),r=c(1188),g=c(5703),e=c(2e3),M=c(7054),G=c(5103),L=c(7391),B=c(4917),A=c(5699),w=c(5154),I=c(3953);let F=(()=>{class X{static#e=this.\u0275fac=function(ne){return new(ne||X)};static#t=this.\u0275mod=I.$C({type:X});static#n=this.\u0275inj=I.G2t({imports:[t.MD,r.iI,g.Ti,e.WF,G.Y3,L.kT,A.T,w.Qt,M.L,B.i]})}return X})()},9563:(Rt,De,c)=>{c.d(De,{R:()=>he});var t=c(6514),r=c(3953),g=c(177),e=c(1188),M=c(5699),G=c(1236),L=c(5103),B=c(3287),A=c(2287);function w(we,me){}function I(we,me){if(1&we&&(r.qex(0),r.j41(1,"a",6),r.DNE(2,w,0,0,"ng-template",7),r.k0s(),r.bVm()),2&we){const de=r.XpG(),H=r.sdS(2);r.R7$(),r.Y8G("routerLink",de.therapy.link),r.R7$(),r.Y8G("ngTemplateOutlet",H)}}function F(we,me){}function X(we,me){if(1&we&&r.nrm(0,"cvc-therapy-popover",9),2&we){const de=r.XpG(2);r.Y8G("therapyId",de.therapy.id)}}function V(we,me){if(1&we){const de=r.RV6();r.j41(0,"nz-tag",8),r.bIt("nzOnClose",function(z){r.eBV(de);const Z=r.XpG();return r.Njj(Z.itemClosed(z))}),r.DNE(1,F,0,0,"ng-template",7),r.k0s(),r.DNE(2,X,1,1,"ng-template",null,3,r.C5r)}if(2&we){const de=r.sdS(3),H=r.XpG(),z=r.sdS(6);r.Y8G("nzPopoverMouseEnterDelay",H.onCloseClicked?0:.5)("nzPopoverContent",de)("nzPopoverTrigger",H.enablePopover?"hover":null)("nzMode",H.onCloseClicked?"closeable":"default"),r.R7$(),r.Y8G("ngTemplateOutlet",z)}}function x(we,me){}function ne(we,me){if(1&we&&r.DNE(0,x,0,0,"ng-template",7),2&we){r.XpG();const de=r.sdS(2);r.Y8G("ngTemplateOutlet",de)}}function J(we,me){if(1&we&&(r.qex(0),r.EFF(1),r.nI1(2,"truncate"),r.bVm()),2&we){const de=r.XpG(2);r.R7$(),r.SpI(" ",r.i5U(2,1,de.therapy.name,21)," ")}}function be(we,me){if(1&we&&r.EFF(0),2&we){const de=r.XpG(2);r.SpI(" ",de.therapy.name," ")}}function Oe(we,me){if(1&we&&(r.nrm(0,"i",10),r.DNE(1,J,3,4,"ng-container",5)(2,be,1,1,"ng-template",null,4,r.C5r)),2&we){const de=r.sdS(3),H=r.XpG();r.R7$(),r.Y8G("ngIf",H.truncateLongName)("ngIfElse",de)}}let he=(()=>{class we extends t.s{constructor(){super(...arguments),this.enablePopover=!0,this.truncateLongName=!1}set therapy(de){if(!de)throw new Error("therapy-tag Input requires LinkableTherapy.");this._therapy=de}get therapy(){return this._therapy}idFunction(){return this.therapy.id}static#e=this.\u0275fac=(()=>{let de;return function(z){return(de||(de=r.xGo(we)))(z||we)}})();static#t=this.\u0275cmp=r.VBU({type:we,selectors:[["cvc-therapy-tag"]],inputs:{therapy:"therapy",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[r.Vt3],decls:7,vars:2,consts:[["tag",""],["unlinked",""],["tagContent",""],["therapyPopover",""],["fullName",""],[4,"ngIf","ngIfElse"],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","","nzPopoverPlacement","right",3,"nzOnClose","nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode"],[3,"therapyId"],["nz-icon","","nzType","civic-therapy","nzTheme","twotone","nzTwotoneColor","#AC3996"]],template:function(H,z){if(1&H&&r.DNE(0,I,3,2,"ng-container",5)(1,V,4,5,"ng-template",null,0,r.C5r)(3,ne,1,1,"ng-template",null,1,r.C5r)(5,Oe,4,2,"ng-template",null,2,r.C5r),2&H){const Z=r.sdS(4);r.Y8G("ngIf",z.linked)("ngIfElse",Z)}},dependencies:[g.bT,g.T3,e.Wk,M.s,G.L_,L.Dn,B.a,A.H],styles:["[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.submitted, [_nghost-%COMP%]     nz-tag.accepted, [_nghost-%COMP%]     nz-tag.deprecated{border-right-width:2px}[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.deprecated{border-color:#e6e6e6;background-color:#fff;color:#999999d9}[_nghost-%COMP%]     nz-tag.submitted{border-color:#ffe58f}[_nghost-%COMP%]     nz-tag.accepted{border-color:#b7eb8f}"],changeDetection:0})}return we})()},9802:(Rt,De,c)=>{c.d(De,{_:()=>A});var t=c(177),r=c(1188),g=c(5699),e=c(1236),M=c(5103),G=c(4917),L=c(3126),B=c(3953);let A=(()=>{class w{static#e=this.\u0275fac=function(X){return new(X||w)};static#t=this.\u0275mod=B.$C({type:w});static#n=this.\u0275inj=B.G2t({imports:[t.MD,r.iI,g.T,e.MC,M.Y3,G.i,L.t]})}return w})()},3548:(Rt,De,c)=>{c.d(De,{A:()=>pe});var t=c(9199),r=c(6354),g=c(5964),e=c(3953),M=c(9145),G=c(177),L=c(1188),B=c(5703),A=c(7529),w=c(2e3),I=c(5699),F=c(5103),X=c(7685),V=c(3245),x=c(7679),ne=c(1774),J=c(3075);function be(E,S){if(1&E&&(e.nrm(0,"i",13),e.nI1(1,"entityColor"),e.EFF(2)),2&E){const R=e.XpG().ngIf;e.Y8G("nzTwotoneColor",e.bMT(1,2,"Variant")),e.R7$(2),e.SpI(" ",R.name," ")}}function Oe(E,S){if(1&E&&e.nrm(0,"cvc-feature-tag",14),2&E){const R=e.XpG().ngIf;e.Y8G("enablePopover",!1)("feature",R.feature)}}function he(E,S){if(1&E&&(e.j41(0,"nz-tag"),e.EFF(1),e.k0s()),2&E){const R=S.$implicit;e.R7$(),e.JRh(R)}}function we(E,S){if(1&E&&(e.j41(0,"nz-descriptions-item",15),e.DNE(1,he,2,1,"nz-tag",16),e.k0s()),2&E){const R=e.XpG().ngIf;e.R7$(),e.Y8G("ngForOf",R.variantAliases)}}function me(E,S){if(1&E&&(e.j41(0,"nz-descriptions-item",17)(1,"cvc-link-tag",18),e.EFF(2),e.k0s()()),2&E){const R=e.XpG().ngIf;e.R7$(),e.Mz_("href","https://reg.genome.network/allele/",R.alleleRegistryId,".html"),e.R7$(),e.SpI(" ",R.alleleRegistryId," ")}}function de(E,S){if(1&E&&(e.j41(0,"a",19)(1,"nz-tag",20),e.nrm(2,"i",21),e.EFF(3),e.k0s()()),2&E){const R=e.XpG().ngIf;e.Mz_("routerLink","/variants/",R.id,"/flags"),e.R7$(3),e.SpI(" Flags (",R.flags.totalCount,") ")}}function H(E,S){if(1&E&&(e.j41(0,"a",19)(1,"nz-tag",22),e.nrm(2,"i",23),e.EFF(3),e.k0s()()),2&E){const R=e.XpG().ngIf;e.Mz_("routerLink","/variants/",R.id,"/revisions"),e.R7$(3),e.SpI(" Revisions (",R.revisions.totalCount,") ")}}function z(E,S){if(1&E&&(e.j41(0,"a",19)(1,"nz-tag",24),e.nrm(2,"i",25),e.EFF(3),e.k0s()()),2&E){const R=e.XpG().ngIf;e.Mz_("routerLink","/variants/",R.id,"/comments"),e.R7$(3),e.SpI(" Comments (",R.comments.totalCount,") ")}}function Z(E,S){if(1&E&&(e.qex(0),e.j41(1,"nz-card",4),e.DNE(2,be,3,4,"ng-template",null,0,e.C5r)(4,Oe,1,2,"ng-template",null,1,e.C5r),e.j41(6,"nz-descriptions",5),e.DNE(7,we,2,1,"nz-descriptions-item",6)(8,me,3,3,"nz-descriptions-item",7),e.j41(9,"nz-descriptions-item",8),e.EFF(10),e.k0s()(),e.j41(11,"nz-row",9)(12,"nz-col",10)(13,"nz-space",11),e.DNE(14,de,4,3,"a",12)(15,H,4,3,"a",12)(16,z,4,3,"a",12),e.k0s()()()(),e.bVm()),2&E){const R=S.ngIf,Y=e.sdS(3),se=e.sdS(5);e.R7$(),e.Y8G("nzTitle",Y)("nzExtra",se),e.R7$(5),e.Y8G("nzColumn",2),e.R7$(),e.Y8G("ngIf",R.variantAliases.length>0),e.R7$(),e.Y8G("ngIf","GeneVariant"==R.__typename&&R.alleleRegistryId&&"unregistered"!=R.alleleRegistryId),e.R7$(2),e.SpI(" ",R.molecularProfiles.totalCount," ")}}let pe=(()=>{class E{constructor(R){this.gql=R}ngOnInit(){if(void 0===this.variantId)throw new Error("Must pass a variant ID into the variant popover component.");this.variant$=this.gql.watch({variantId:this.variantId}).valueChanges.pipe((0,r.T)(({data:R})=>R?.variant),(0,g.p)(t.kP))}static#e=this.\u0275fac=function(Y){return new(Y||E)(e.rXU(M.l20))};static#t=this.\u0275cmp=e.VBU({type:E,selectors:[["cvc-variant-popover"]],inputs:{variantId:"variantId"},decls:3,vars:3,consts:[["cardTitle",""],["feature",""],["id","popover-content"],[4,"ngIf"],["nzBordered","false","id","card-content",3,"nzTitle","nzExtra"],["nzSize","small","nzBordered","true",3,"nzColumn"],["nzTitle","Aliases","nzSpan","2",4,"ngIf"],["nzTitle","Allele Registry ID","nzSpan","2",4,"ngIf"],["nzTitle","Molecular Profiles","nzSpan","2"],["id","entity-child-counts"],["nzSpan","24"],["nzSize","small"],[3,"routerLink",4,"nzSpaceItem"],["nz-icon","","nzTheme","twotone","nzType","civic-variant",3,"nzTwotoneColor"],[3,"enablePopover","feature"],["nzTitle","Aliases","nzSpan","2"],[4,"ngFor","ngForOf"],["nzTitle","Allele Registry ID","nzSpan","2"],["tooltip","View on the ClinGen Allele Registry",3,"href"],[3,"routerLink"],["nzColor","red"],["nz-icon","","nzType","civic-flag"],["nzColor","orange"],["nz-icon","","nzType","civic-revision"],["nzColor","blue"],["nz-icon","","nzType","civic-comment"]],template:function(Y,se){1&Y&&(e.j41(0,"div",2),e.DNE(1,Z,17,6,"ng-container",3),e.nI1(2,"ngrxPush"),e.k0s()),2&Y&&(e.R7$(),e.Y8G("ngIf",e.bMT(2,1,se.variant$)))},dependencies:[G.Sq,G.bT,L.Wk,B.cK,A.Uq,A.e,w.xA,w.gr,I.s,F.Dn,X.U5,X.Dq,V._,x.a,ne.L9,J.R],styles:["[_nghost-%COMP%]{display:block;margin:-8px -12px}[_nghost-%COMP%]     .ant-card-body{padding:0;margin-top:1px}[_nghost-%COMP%]     .ant-descriptions-view{border:none}[_nghost-%COMP%]     #entity-child-counts{border-top:1px solid #f0f0f0;padding:8px}[_nghost-%COMP%]     #entity-child-counts nz-space{width:100%}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child{margin-right:0!important}[_nghost-%COMP%]     #entity-child-counts nz-space-item:last-child nz-tag{margin-right:0}.popover-text[_ngcontent-%COMP%]{width:100%;padding:8px;border-bottom:1px solid #f0f0f0}#popover-content[_ngcontent-%COMP%]{min-width:350px;max-width:500px;min-height:125px}"]})}return E})()},6075:(Rt,De,c)=>{c.d(De,{$:()=>X});var t=c(177),r=c(1188),g=c(5703),e=c(7529),M=c(2e3),G=c(5699),L=c(5103),B=c(7685),A=c(7054),w=c(4917),I=c(6912),F=c(3953);let X=(()=>{class V{static#e=this.\u0275fac=function(J){return new(J||V)};static#t=this.\u0275mod=F.$C({type:V});static#n=this.\u0275inj=F.G2t({imports:[t.MD,r.iI,g.Ti,e.f3,M.WF,G.T,L.Y3,B.pc,w.i,I.l,A.L]})}return V})()},3100:(Rt,De,c)=>{c.d(De,{V:()=>H});var t=c(6514),r=c(505),g=c(3953),e=c(177),M=c(1188),G=c(5699),L=c(1236),B=c(5103),A=c(3548),w=c(2387),I=c(2287);const F=z=>({deprecated:z});function X(z,Z){}function V(z,Z){if(1&z&&(g.qex(0),g.j41(1,"a",6),g.DNE(2,X,0,0,"ng-template",7),g.k0s(),g.bVm()),2&z){const pe=g.XpG(),E=g.sdS(2);g.R7$(),g.Y8G("routerLink",pe.variant.link),g.R7$(),g.Y8G("ngTemplateOutlet",E)}}function x(z,Z){}function ne(z,Z){if(1&z&&g.nrm(0,"cvc-variant-popover",10),2&z){const pe=g.XpG(3);g.Y8G("variantId",pe.variant.id)}}function J(z,Z){if(1&z&&g.DNE(0,ne,1,1,"cvc-variant-popover",9),2&z){const pe=g.XpG(2);g.Y8G("ngIf",pe.enablePopover)}}function be(z,Z){if(1&z){const pe=g.RV6();g.j41(0,"nz-tag",8),g.bIt("nzOnClose",function(S){g.eBV(pe);const R=g.XpG();return g.Njj(R.itemClosed(S))}),g.DNE(1,x,0,0,"ng-template",7),g.k0s(),g.DNE(2,J,1,1,"ng-template",null,3,g.C5r)}if(2&z){const pe=g.sdS(3),E=g.XpG(),S=g.sdS(6);g.Y8G("ngClass",g.eq3(6,F,E.variant.deprecated))("nzPopoverMouseEnterDelay",E.onCloseClicked?0:.5)("nzPopoverContent",pe)("nzPopoverTrigger",E.enablePopover?"hover":null)("nzMode",E.onCloseClicked?"closeable":"default"),g.R7$(),g.Y8G("ngTemplateOutlet",S)}}function Oe(z,Z){}function he(z,Z){if(1&z&&g.DNE(0,Oe,0,0,"ng-template",7),2&z){g.XpG();const pe=g.sdS(2);g.Y8G("ngTemplateOutlet",pe)}}function we(z,Z){if(1&z&&(g.qex(0),g.EFF(1),g.nI1(2,"truncate"),g.bVm()),2&z){const pe=g.XpG(2);g.R7$(),g.SpI(" ",g.i5U(2,1,pe.variant.name,20)," ")}}function me(z,Z){if(1&z&&g.EFF(0),2&z){const pe=g.XpG(2);g.SpI(" ",pe.variant.name," ")}}function de(z,Z){if(1&z&&(g.j41(0,"cvc-icon-badges",11),g.nrm(1,"i",12),g.k0s(),g.DNE(2,we,3,4,"ng-container",5)(3,me,1,1,"ng-template",null,4,g.C5r)),2&z){const pe=g.sdS(4),E=g.XpG();g.Y8G("flagged",E.variant.flagged)("entityColor",E.iconColor),g.R7$(),g.Y8G("nzTwotoneColor",E.iconColor),g.R7$(),g.Y8G("ngIf",E.truncateLongName)("ngIfElse",pe)}}let H=(()=>{class z extends t.s{constructor(){super(),this.enablePopover=!0,this.truncateLongName=!1,this.iconColor=(0,r.P)("Variant")}idFunction(){return this.variant.id}ngOnInit(){if(super.ngOnInit(),void 0===this.variant)throw new Error("cvc-variant-tag requires LinkableVariant input, none supplied.")}static#e=this.\u0275fac=function(E){return new(E||z)};static#t=this.\u0275cmp=g.VBU({type:z,selectors:[["cvc-variant-tag"]],inputs:{variant:"variant",enablePopover:"enablePopover",truncateLongName:"truncateLongName"},features:[g.Vt3],decls:7,vars:2,consts:[["tag",""],["unlinked",""],["tagContent",""],["popoverContent",""],["fullName",""],[4,"ngIf","ngIfElse"],[3,"routerLink"],[3,"ngTemplateOutlet"],["nz-popover","",3,"nzOnClose","ngClass","nzPopoverMouseEnterDelay","nzPopoverContent","nzPopoverTrigger","nzMode"],[3,"variantId",4,"ngIf"],[3,"variantId"],[3,"flagged","entityColor"],["nz-icon","","nzType","civic-variant","nzTheme","twotone",3,"nzTwotoneColor"]],template:function(E,S){if(1&E&&g.DNE(0,V,3,2,"ng-container",5)(1,be,4,8,"ng-template",null,0,g.C5r)(3,he,1,1,"ng-template",null,1,g.C5r)(5,de,5,5,"ng-template",null,2,g.C5r),2&E){const R=g.sdS(4);g.Y8G("ngIf",S.linked)("ngIfElse",R)}},dependencies:[e.YU,e.bT,e.T3,M.Wk,G.s,L.L_,B.Dn,A.A,w.N,I.H],styles:["[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.submitted, [_nghost-%COMP%]     nz-tag.accepted, [_nghost-%COMP%]     nz-tag.deprecated{border-right-width:2px}[_nghost-%COMP%]     nz-tag.rejected, [_nghost-%COMP%]     nz-tag.deprecated{border-color:#e6e6e6;background-color:#fff;color:#999999d9}[_nghost-%COMP%]     nz-tag.submitted{border-color:#ffe58f}[_nghost-%COMP%]     nz-tag.accepted{border-color:#b7eb8f}[_nghost-%COMP%]{display:inline-block}"],changeDetection:0})}return z})()},7051:(Rt,De,c)=>{c.d(De,{U:()=>w});var t=c(177),r=c(1188),g=c(5699),e=c(5103),M=c(1236),G=c(6075),L=c(4917),B=c(4994),A=c(3953);let w=(()=>{class I{static#e=this.\u0275fac=function(V){return new(V||I)};static#t=this.\u0275mod=A.$C({type:I});static#n=this.\u0275inj=A.G2t({imports:[t.MD,r.iI,g.T,M.MC,e.Y3,L.i,G.$,B.a]})}return I})()},463:(Rt,De,c)=>{c.d(De,{E:()=>r});var t=c(3953);let r=(()=>{class g{transform(M,G){return M?"verbose"==G?"TIER_I_LEVEL_A"===M?"Tier I - Level A":"TIER_I_LEVEL_B"===M?"Tier I - Level B":"TIER_II_LEVEL_C"===M?"Tier II - Level C":"TIER_II_LEVEL_D"===M?"Tier II - Level D":"TIER_III"===M?"Tier III":"TIER_IV"===M?"Tier IV":"Not Applicable":M.toUpperCase().replace("TIER","").replace("LEVEL","").replace(/ /g,"").replace(/_/g,""):""}static#e=this.\u0275fac=function(G){return new(G||g)};static#t=this.\u0275pipe=t.EJ8({name:"formatAmp",type:g,pure:!0})}return g})()},3075:(Rt,De,c)=>{c.d(De,{R:()=>g});var t=c(505),r=c(3953);let g=(()=>{class e{transform(G){return(0,t.P)(G)}static#e=this.\u0275fac=function(L){return new(L||e)};static#t=this.\u0275pipe=r.EJ8({name:"entityColor",type:e,pure:!0})}return e})()},1845:(Rt,De,c)=>{c.d(De,{f:()=>r});var t=c(3953);let r=(()=>{class g{transform(M){if(M){if("POSITIVE"===M)return"+";if("NEGATIVE"===M)return"-";let L=M.toLowerCase().replace(/_/g," ").split(" ");for(var G=0;G<L.length;G++)L[G]=L[G].charAt(0).toUpperCase()+L[G].slice(1);return L.join(" ")}return""}static#e=this.\u0275fac=function(G){return new(G||g)};static#t=this.\u0275pipe=t.EJ8({name:"enumToTitle",type:g,pure:!0})}return g})()},1677:(Rt,De,c)=>{c.d(De,{pW:()=>G});var t=c(9145),r=c(896),g=c(3953);const e=new Map([[t.iHU.A,"Validated association"],[t.iHU.B,"Clinical evidence"],[t.iHU.C,"Case study"],[t.iHU.D,"Preclinical evidence"],[t.iHU.E,"Inferential association"]]),M=new Map([[1,"One Star"],[2,"Two Stars"],[3,"Three Stars"],[4,"Four Stars"],[5,"Five Stars"]]);let G=(()=>{class L{transform(A,w="display-string"){return null==A?"":"short-string"===w&&1===A.toString().length?"string"==typeof A?A:A.toString():"icon-name"===w?"number"==typeof A?`civic-rating${A}`:1===A.length?`civic-level${A.toLowerCase()}`:`civic-${A.replace(/_/g,"").toLowerCase()}`:"number"==typeof A?M.get(A)||A.toString():1===A.length?e.get(A)||A:(0,r.u)(A)}static#e=this.\u0275fac=function(w){return new(w||L)};static#t=this.\u0275pipe=g.EJ8({name:"evidenceEnumDisplay",type:L,pure:!0})}return L})()},8763:(Rt,De,c)=>{c.d(De,{k:()=>G});var t=c(9145);const r={evidenceType:{[t.M1P.Diagnostic]:"Evidence pertains to a variant's impact on patient diagnosis (cancer subtype)",[t.M1P.Functional]:"Evidence pertains to a variant that alters biological function from the reference state",[t.M1P.Oncogenic]:"Evidence pertains to a somatic variant's involvement in tumor pathogenesis as described by the Hallmarks of Cancer",[t.M1P.Predictive]:"Evidence pertains to a variant's effect on therapeutic response",[t.M1P.Predisposing]:"Evidence pertains to a germline variant's role in conferring susceptibility to disease (including pathogenicity evaluations)",[t.M1P.Prognostic]:"Evidence pertains to a variant's impact on disease progression, severity, or patient survival"},assertionType:{[t.XEW.Diagnostic]:"Assertion pertains to a variant's impact on patient diagnosis (cancer subtype)",[t.XEW.Predictive]:"Assertion pertains to a variant's effect on therapeutic response",[t.XEW.Predisposing]:"Assertion pertains to a germline variant's role in conferring susceptibility to disease (including pathogenicity evaluations)",[t.XEW.Prognostic]:"Assertion pertains to a variant's impact on disease progression, severity, or patient survival",[t.XEW.Oncogenic]:"Assertion pertains to a somatic variant's role in driving tumor formation, growth, and other processes related to the Hallmarks of Cancer"},variantOrigin:{[t.Kkj.Somatic]:"Variant is a mutation, found only in tumor cells, having arisen in a specific tissue (non-germ cell), and is not expected to be inherited or passed to offspring",[t.Kkj.RareGermline]:"Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in less than 1% of the population relevant to this evidence item",[t.Kkj.CommonGermline]:"Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in at least 1% of the population relevant to this evidence item",[t.Kkj.Unknown]:"The variant origin is uncertain based on the available evidence",[t.Kkj.Na]:"The variant type (e.g., expression) is not compatible (or easily classified) with the CIViC concept of variant origin",[t.Kkj.Combined]:"Variants in the Molecular Profile span multiple Origin types."},evidenceLevel:{[t.iHU.A]:"Proven/consensus association in human medicine",[t.iHU.B]:"Clinical trial or other primary patient data supports association",[t.iHU.C]:"Individual case reports from clinical journals",[t.iHU.D]:"In vivo or in vitro models support association",[t.iHU.E]:"Indirect evidence"},evidenceLevelBrief:{[t.iHU.A]:"Validated association",[t.iHU.B]:"Clinical evidence",[t.iHU.C]:"Case Study",[t.iHU.D]:"Preclinical evidence",[t.iHU.E]:"Inferential association"},therapyInteractionType:{[t.qld.Combination]:"The therapies listed were used as part of a combination therapy approach",[t.qld.Sequential]:"The therapies listed were used at separate timepoints in the same treatment plan",[t.qld.Substitutes]:"The therapies listed are often considered to be of the same family, or behave similarly in a treatment setting"},evidenceRating:{1:"Poor - Claim is not supported well by experimental evidence. Results are not reproducible, or have very small sample size. No follow-up is done to validate novel claims",2:"Adequate - Evidence is not well supported by experimental data, and little follow-up data is available. Experiments may lack proper controls, have small sample size, or are not statistically convincing",3:"Average - Evidence is convincing, but not supported by a breadth of experiments. May be smaller scale projects, or novel results without many follow-up experiments. Discrepancies from expected results are explained and not concerning",4:"Strong - Well supported evidence. Experiments are well controlled, and results are convincing. Any discrepancies from expected results are well-explained and not concerning",5:"Excellent - Solid, well supported evidence from a lab or journal with respected academic standing. Experiments are well controlled, and results are clean and reproducible across multiple replicates. Evidence confirmed using separate methods"}},g={significance:{PREDICTIVE:{ADVERSE_RESPONSE:{EvidenceItem:"Associated with an adverse response to theraputic treatment",Assertion:"Associated with an adverse response to theraputic treatment"},REDUCED_SENSITIVITY:{EvidenceItem:"Response to treatment is lower than seen in other treatment contexts",Assertion:"Response to treatment is lower than seen in other treatment contexts"},RESISTANCE:{EvidenceItem:"Associated with clinical or preclinical resistance to treatment",Assertion:"Associated with clinical or preclinical resistance to treatment"},SENSITIVITYRESPONSE:{EvidenceItem:"Associated with clinical or preclinical response to treatment",Assertion:"Associated with a clinical or preclinical response to treatment"},NA:{EvidenceItem:"Clinical Significance is not applicable",Assertion:"Clinical Significance is not applicable"}},DIAGNOSTIC:{POSITIVE:{EvidenceItem:"Associated with diagnosis of disease or subtype",Assertion:"Associated with diagnosis of disease or subtype"},NEGATIVE:{EvidenceItem:"Associated with lack of disease or subtype",Assertion:"Associated with lack of disease or subtype"}},PROGNOSTIC:{BETTER_OUTCOME:{EvidenceItem:"Demonstrates better than expected clinical outcome",Assertion:"Demonstrates better than expected clinical outcome"},POOR_OUTCOME:{EvidenceItem:"Demonstrates worse than expected clinical outcome",Assertion:"Demonstrates worse than expected clinical outcome"},Na:{EvidenceItem:"Clinical Significance is not applicable",Assertion:"Clinical Significance is not applicable"}},PREDISPOSING:{PATHOGENIC:{Assertion:"Very strong evidence the variant is pathogenic"},LIKELY_PATHOGENIC:{Assertion:"Strong evidence (>90% certainty) the variant is pathogenic"},BENIGN:{Assertion:"Very strong evidence the variant is benign"},LIKELY_BENIGN:{Assertion:"Not expected to have a major effect on disease"},UNCERTAIN_SIGNIFICANCE:{Assertion:"Does not meet the ACMG/AMP criteria for pathogenic/benign, or the evidence is conflicting"},Na:{EvidenceItem:"Clinical Significance is not applicable"},PREDISPOSITION:{EvidenceItem:"Germline variant has predisposing potential for cancer, and may meet ACMG/AMP criteria supporting pathogenic or benign classification."},PROTECTIVENESS:{EvidenceItem:"Germline variant has properties that protect individuals from acquiring cancer."}},ONCOGENIC:{ONCOGENICITY:{EvidenceItem:"Somatic variant has oncogenic potential for driving cancer, and may meet ClinGen/CGC/VICC criteria supporting pathogenic or benign classification."},PROTECTIVENESS:{EvidenceItem:"Somatic variant has a protective role and minimizes co-occuring driver variants, tumor malignancy, or other oncogenic tumor properties."},ONCOGENIC:{Assertion:"Very strong evidence the variant is oncogenic."},LIKELY_ONCOGENIC:{Assertion:"Strong evidence the variant is oncogenic."},BENIGN:{Assertion:"Very strong evidence the variant does not have oncogenic properties."},LIKELY_BENIGN:{Assertion:"Strong evidence the variant does not have oncogenic properties."},UNCERTAIN_SIGNIFICANCE:{Assertion:"Does not meet guideline criteria for oncogenic/benign, or the evidence is conflicting."}}},evidenceDirection:{PREDICTIVE:{SUPPORTS:{EvidenceItem:"The experiment or study supports this variant's response to a therapy"},DOES_NOT_SUPPORT:{EvidenceItem:"The experiment or study does not support, or was inconclusive of an interaction between this variant and a therapy"}},DIAGNOSTIC:{SUPPORTS:{EvidenceItem:"The experiment or study supports this variant's impact on the diagnosis of disease or subtype"},DOES_NOT_SUPPORT:{EvidenceItem:"The experiment or study does not support this variant's impact on diagnosis of disease or subtype"}},PROGNOSTIC:{SUPPORTS:{EvidenceItem:"The experiment or study supports this variant's impact on prognostic outcome"},DOES_NOT_SUPPORT:{EvidenceItem:"The experiment or study does not support a prognostic association between variant and outcome"}},PREDISPOSING:{Na:{EvidenceItem:"Evidence Direction is not applicable"},SUPPORTS:{EvidenceItem:"The evidence supports a pathogenic or a protective role for a germline variant in cancer."},DOES_NOT_SUPPORT:{EvidenceItem:"The evidence supports a benign (if Clinical Significance is Predisposition) or lack or protective (if Clinical Significance is Protectiveness) role for a germline variant in cancer."}},FUNCTIONAL:{SUPPORTS:{EvidenceItem:"The experiment or study supports this variant causing alteration or non-alteration of the gene product function"},DOES_NOT_SUPPORT:{EvidenceItem:"The experiment or study does not support this variant causing alteration or non-alteration of the gene product function"}},ONCOGENIC:{NA:{EvidenceItem:"Evidence Direction is not applicable for Oncogenic Evidence Type"},SUPPORTS:{EvidenceItem:"The evidence supports an oncogenic or protective role for a somatic variant"},DOES_NOT_SUPPORT:{EvidenceItem:"The evidence does not support an oncogenic or protective role for a somatic variant"}}},assertionDirection:{PREDICTIVE:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support this variant's response to a therapy"},DOES_NOT_SUPPORT:{Assertion:"The Assertion and associated evidence does not support, or was inconclusive of an interaction between this variant and a therapy"}},DIAGNOSTIC:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support this variant's impact on the diagnosis of disease or subtype"},DOES_NOT_SUPPORT:{Assertion:"The Assertion and associated evidence does not support this variant's impact on diagnosis of disease or subtype"}},PROGNOSTIC:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support this variant's impact on prognostic outcome"},DOES_NOT_SUPPORT:{Assertion:"The Assertion and associated evidence does not support a prognostic association between variant and outcome"}},PREDISPOSING:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support a variant's impact on predisposing outcome"}},FUNCTIONAL:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support this variant causing alteration or non-alteration of the gene product function"},DOES_NOT_SUPPORT:{Assertion:"The Assertion and associated evidence does not support this variant causing alteration or non-alteration of the gene product function"}},ONCOGENIC:{SUPPORTS:{Assertion:"The Assertion and associated Evidence Items support a variant's oncogenic, benign, or uncertain significance"}}}};var M=c(3953);let G=(()=>{class L{transform(A,w,I=void 0,F=void 0){return w&&A?function e(L,B,A,w){let I;return I=A&&w?g[L][A][B][w]:r[L][B],I||""}(w,A,I,F):""}static#e=this.\u0275fac=function(w){return new(w||L)};static#t=this.\u0275pipe=M.EJ8({name:"enumTooltip",type:L,pure:!0})}return L})()},1555:(Rt,De,c)=>{c.d(De,{M:()=>g});var t=c(3953),r=c(345);let g=(()=>{class e{constructor(G){this.sanitizer=G}transform(G,L){if(!L||""==L)return G;const B=new RegExp(L,"gi"),A=G.match(B);if(!A)return G;let w=G.replace(B,`<span class='typeahead-match'>${A[0]}</span>`);return this.sanitizer.bypassSecurityTrustHtml(w)}static#e=this.\u0275fac=function(L){return new(L||e)(t.rXU(r.up,16))};static#t=this.\u0275pipe=t.EJ8({name:"highlightTypeahead",type:e,pure:!0})}return e})()},4917:(Rt,De,c)=>{c.d(De,{i:()=>e});var t=c(177),r=c(8335),g=c(3953);let e=(()=>{class M{static#e=this.\u0275fac=function(B){return new(B||M)};static#t=this.\u0275mod=g.$C({type:M});static#n=this.\u0275inj=g.G2t({providers:[r.Q],imports:[t.MD]})}return M})()},8335:(Rt,De,c)=>{c.d(De,{Q:()=>g});var t=c(1427),r=c(3953);let g=(()=>{class e{transform(G){return G?(0,t.A)(G):""}static#e=this.\u0275fac=function(L){return new(L||e)};static#t=this.\u0275pipe=r.EJ8({name:"sourceTypeDisplay",type:e,pure:!0})}return e})()},8139:(Rt,De,c)=>{c.d(De,{N:()=>I});var t=c(3953);const g=3600,e=24*g,G=365*e,B=new Intl.DateTimeFormat("en-US",{weekday:void 0,year:void 0,month:"short",day:"numeric"}),w=new Intl.DateTimeFormat("en-US",{weekday:void 0,year:"numeric",month:"short",day:"numeric"});let I=(()=>{class F{transform(V){if(!V)return"--";let x;x="number"==typeof V?V:Date.parse(V);const ne=Date.now(),J=Math.round(Math.abs(ne-x)/1e3);if(J>=2592e3&&J<G){let we=new Date(x);return B.format(we)}if(J>=G){let we=new Date(x);return w.format(we)}let be,Oe;return J<60?(be=Math.round(J),Oe="second"):J<g?(be=Math.round(J/60),Oe="minute"):J<e?(be=Math.round(J/g),Oe="hour"):(be=Math.round(J/e),Oe="day"),`${be} ${Oe}${be>1?"s":""} ago`}static#e=this.\u0275fac=function(x){return new(x||F)};static#t=this.\u0275pipe=t.EJ8({name:"timeAgo",type:F,pure:!0})}return F})()},2287:(Rt,De,c)=>{c.d(De,{H:()=>r});var t=c(3953);let r=(()=>{class g{constructor(){}transform(M,G=25){if(M.length>G){let B=M.slice(0,G);var L=B.lastIndexOf(" ");return B.slice(0,L)+"\u2026"}return M}static#e=this.\u0275fac=function(G){return new(G||g)};static#t=this.\u0275pipe=t.EJ8({name:"truncate",type:g,pure:!0})}return g})()},4137:(Rt,De,c)=>{c.d(De,{o:()=>r});var t=c(3953);let r=(()=>{class g{transform(M){return M?M.endsWith("Variant")?"civic-variant":`civic-${M.replace(/_/g,"").toLowerCase()}`:""}static#e=this.\u0275fac=function(G){return new(G||g)};static#t=this.\u0275pipe=t.EJ8({name:"typenameToIcon",type:g,pure:!0})}return g})()},4222:(Rt,De,c)=>{c.d(De,{N:()=>g});var t=c(4412),r=c(3953);let g=(()=>{class e{constructor(){this.networkError$=new t.t(void 0)}clearErrors(){this.networkError$.next(void 0)}static#e=this.\u0275fac=function(L){return new(L||e)};static#t=this.\u0275prov=r.jDH({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})()},1305:(Rt,De,c)=>{c.d(De,{q:()=>w});var t=c(1635),r=c(9145),g=c(9894),e=c(6354),M=c(9172),G=c(4668),L=c(4608),B=c(3953),A=c(1626);let w=class jf{constructor(F,X){function V(he){return!(!he||he.role!==r.gG1.Admin)}function x(he){return!(!he||he.role!==r.gG1.Editor&&he.role!==r.gG1.Admin)}function ne(he){return!(!he||he.role!==r.gG1.Curator)}function J(he){return!(!he||he.role!==r.gG1.Curator&&he.role!==r.gG1.Editor&&he.role!==r.gG1.Admin)}function be(he){return!(!he||he.role!==r.gG1.Editor&&he.role!==r.gG1.Admin||!he.mostRecentConflictOfInterestStatement||he.mostRecentConflictOfInterestStatement?.coiStatus!=r.shk.Conflict&&he.mostRecentConflictOfInterestStatement?.coiStatus!=r.shk.Valid)}function Oe(he){if(he.mostRecentOrganizationId)return he.organizations.find(we=>we.id===he.mostRecentOrganizationId)}this.viewerBaseGQL=F,this.http=X,this.initialViewer={mostRecentOrg:void 0,signedIn:!1,isAdmin:!1,isEditor:!1,isCurator:!1,canCurate:!1,canModerate:!1,invalidCoi:!0},this.queryRef=this.viewerBaseGQL.watch(void 0,{notifyOnNetworkStatusChange:!1}),this.viewer$=this.queryRef.valueChanges.pipe((0,L.E)("data","viewer"),(0,e.T)(he=>({...he,signedIn:null!=he,signedOut:null==he,canCurate:J(he),canModerate:be(he),isAdmin:V(he),isEditor:x(he),isCurator:ne(he),organizations:null==he?[]:he.organizations,mostRecentOrg:null==he?void 0:Oe(he),invalidCoi:x(he)&&(!he.mostRecentConflictOfInterestStatement||he.mostRecentConflictOfInterestStatement.coiStatus===r.shk.Expired||he.mostRecentConflictOfInterestStatement.coiStatus===r.shk.Missing)})),(0,M.Z)(this.initialViewer),(0,G.t)(1)),this.signedIn$=this.viewer$.pipe((0,e.T)(he=>he.signedIn)),this.signedOut$=this.viewer$.pipe((0,e.T)(he=>he.signedOut)),this.isAdmin$=this.viewer$.pipe((0,e.T)(he=>V(he))),this.isEditor$=this.viewer$.pipe((0,e.T)(he=>x(he))),this.isCurator$=this.viewer$.pipe((0,e.T)(he=>ne(he))),this.canCurate$=this.viewer$.pipe((0,e.T)(he=>J(he))),this.canModerate$=this.viewer$.pipe((0,e.T)(he=>be(he)))}signOut(){this.http.get("/api/sign_out").pipe((0,g.s)(this)).subscribe(()=>this.queryRef.refetch())}refetch(){this.queryRef.refetch()}static#e=this.\u0275fac=function(X){return new(X||jf)(B.KVO(r.arH),B.KVO(A.Qq))};static#t=this.\u0275prov=B.jDH({token:jf,factory:jf.\u0275fac,providedIn:"root"})};w=(0,t.Cg)([(0,g.d)()],w)},6514:(Rt,De,c)=>{c.d(De,{s:()=>r});var t=c(3953);let r=(()=>{class g{constructor(){this.linked=!0,this.popoverVisible=!1}ngOnInit(){this.onCloseClicked&&(this.linked=!1)}itemClosed(M){this.popoverVisible=!1,this.onCloseClicked&&this.onCloseClicked(this.idFunction())}static#e=this.\u0275fac=function(G){return new(G||g)};static#t=this.\u0275cmp=t.VBU({type:g,selectors:[["ng-component"]],inputs:{onCloseClicked:"onCloseClicked",linked:"linked"},decls:0,vars:0,template:function(G,L){},encapsulation:2})}return g})()},896:(Rt,De,c)=>{function t(r){if("number"==typeof r||"boolean"==typeof r)return r;let g;if("NA"===r)g=["Not Applicable"];else if("SENSITIVITYRESPONSE"===r)g=["Sensitivity","/","Response"];else{g=r.toLowerCase().replace(/_/g," ").split(" ");for(var e=0;e<g.length;e++)g[e]=g[e].charAt(0).toUpperCase()+g[e].slice(1)}return g.join(" ")}c.d(De,{u:()=>t})},1427:(Rt,De,c)=>{function t(r){switch(r){case"ASCO":return"ASCO";case"PUBMED":return"PubMed";case"ASH":return"ASH";default:return r}}c.d(De,{A:()=>t})},505:(Rt,De,c)=>{c.d(De,{P:()=>r});const t=new Map([["Assertion","#7243b5"],["ClinicalTrial","#ac3996"],["CoordinateSystem","#f68f37"],["Disease","#e62f76"],["Event","#1db8a9"],["EvidenceItem","#2a63b6"],["Feature","#07aff0"],["MolecularProfile","#33b358"],["NccnGuideline","#49566D"],["Phenotype","#1db8a9"],["Source","#f9ba45"],["Therapy","#ac3996"],["Variant","#74d34c"],["GeneVariant","#74d34c"],["FactorVariant","#74d34c"],["FusionVariant","#74d34c"],["VariantGroup","#74d34c"],["VariantType","#74d34c"],["Comment","#44d8ef"],["Event","#ffdb00"],["Flag","#e24759"],["Queue","#666699"],["Revision","#f0673a"],["Curator","#a0d8f5"],["Editor","#58a0c4"],["Admin","#58a0c4"],["Organization","#3d7b99"],["Rejected","#BBBBBB"],["Greyscale","#999999"]]);function r(g){let e="#AAAAAA";if(g){const M=t.get(g);M&&(e=M)}return e}},1226:(Rt,De,c)=>{c.d(De,{E:()=>M});var t=c(1413),r=c(4412),g=c(6977),e=c(980);class M{constructor(L){this.networkErrorService=L}mutate(L,B,A,w){let I=new t.B,F={isSubmitting$:new r.t(!1),submitSuccess$:new r.t(!1),submitError$:new r.t([]),cleanup:()=>{I.next(),I.complete()}};return F.isSubmitting$.next(!0),L.mutate(B,A).pipe((0,g.Q)(I),(0,e.j)(()=>{F.isSubmitting$.next(!1)})).subscribe({next:X=>{X.data&&w&&w(X.data)},error:X=>{X.graphQLErrors.length>0?F.submitError$.next(X.graphQLErrors.map(V=>V.message)):X.networkError&&this.networkErrorService.networkError$.next(X.networkError),F.cleanup()},complete:()=>{F.submitError$.next([]),F.submitSuccess$.next(!0),this.networkErrorService.networkError$.next(void 0),F.cleanup()}}),F}}},2242:(Rt,De,c)=>{c.d(De,{i:()=>g});var t=c(177),r=c(3953);let g=(()=>{class e{static#e=this.\u0275fac=function(L){return new(L||e)};static#t=this.\u0275mod=r.$C({type:e});static#n=this.\u0275inj=r.G2t({imports:[t.MD]})}return e})()},2033:(Rt,De,c)=>{c.d(De,{o:()=>X});var t=c(3953),r=c(177),g=c(5154);function e(V,x){1&V&&(t.qex(0),t.EFF(1," N/A "),t.bVm())}function M(V,x){1&V&&(t.qex(0),t.EFF(1," Not applicable "),t.bVm())}function G(V,x){if(1&V&&(t.j41(0,"span",4),t.qex(1,0),t.DNE(2,e,2,0,"ng-container",5)(3,M,2,0,"ng-container",6),t.bVm(),t.k0s()),2&V){const ne=t.XpG();t.R7$(),t.Y8G("ngSwitch",ne.cvcDisplayMode),t.R7$(),t.Y8G("ngSwitchCase","small")}}function L(V,x){1&V&&(t.qex(0),t.EFF(1," \u2013\xa0\u2013 "),t.bVm())}function B(V,x){1&V&&(t.qex(0),t.EFF(1,"Not specified"),t.bVm())}function A(V,x){if(1&V&&(t.j41(0,"span",7),t.qex(1,0),t.DNE(2,L,2,0,"ng-container",5)(3,B,2,0,"ng-container",6),t.bVm(),t.k0s()),2&V){const ne=t.XpG();t.R7$(),t.Y8G("ngSwitch",ne.cvcDisplayMode),t.R7$(),t.Y8G("ngSwitchCase","small")}}function w(V,x){1&V&&(t.qex(0),t.EFF(1,"!?"),t.bVm())}function I(V,x){1&V&&(t.qex(0),t.EFF(1,"Unspecified"),t.bVm())}function F(V,x){if(1&V&&(t.j41(0,"span",8),t.qex(1,0),t.DNE(2,w,2,0,"ng-container",5)(3,I,2,0,"ng-container",6),t.bVm(),t.k0s()),2&V){const ne=t.XpG();t.R7$(),t.Y8G("ngSwitch",ne.cvcDisplayMode),t.R7$(),t.Y8G("ngSwitchCase","small")}}let X=(()=>{class V{constructor(){this.cvcEmptyCategory="not-applicable",this.cvcDisplayMode="default"}static#e=this.\u0275fac=function(J){return new(J||V)};static#t=this.\u0275cmp=t.VBU({type:V,selectors:[["cvc-empty-value"]],inputs:{cvcEmptyCategory:"cvcEmptyCategory",cvcDisplayMode:"cvcDisplayMode"},decls:4,vars:4,consts:[[3,"ngSwitch"],["class","empty-symbol not-applicable","nz-tooltip","","nzTooltipTitle","Value is not applicable",4,"ngSwitchCase"],["nz-tooltip","","nzTooltipTitle","Unspecified","class","empty-symbol unspecified","nz-tooltip","","nzTooltipTitle","Value is unspecified",4,"ngSwitchCase"],["nz-tooltip","","nzTooltipTitle","INVALID","class","empty-symbol invalid","nz-tooltip","","nzTooltipTitle","Error: value requires specification",4,"ngSwitchCase"],["nz-tooltip","","nzTooltipTitle","Value is not applicable",1,"empty-symbol","not-applicable"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["nz-tooltip","","nzTooltipTitle","Unspecified","nz-tooltip","","nzTooltipTitle","Value is unspecified",1,"empty-symbol","unspecified"],["nz-tooltip","","nzTooltipTitle","INVALID","nz-tooltip","","nzTooltipTitle","Error: value requires specification",1,"empty-symbol","invalid"]],template:function(J,be){1&J&&(t.qex(0,0),t.DNE(1,G,4,2,"span",1)(2,A,4,2,"span",2)(3,F,4,2,"span",3),t.bVm()),2&J&&(t.Y8G("ngSwitch",be.cvcEmptyCategory),t.R7$(),t.Y8G("ngSwitchCase","not-applicable"),t.R7$(),t.Y8G("ngSwitchCase","unspecified"),t.R7$(),t.Y8G("ngSwitchCase","invalid"))},dependencies:[r.ux,r.e1,r.fG,g.LH],styles:[".empty-symbol[_ngcontent-%COMP%]{font-style:oblique;display:inline-block;white-space:no-wrap}.empty-symbol.not-applicable[_ngcontent-%COMP%]{color:#ccc;font-weight:500}.empty-symbol.unspecified[_ngcontent-%COMP%]{display:inline-block;color:#ccc;font-weight:500;padding:0 3px}.empty-symbol.invalid[_ngcontent-%COMP%]{display:inline-block;color:#ff4d4f;font-weight:700}"]})}return V})()},7556:(Rt,De,c)=>{c.d(De,{F:()=>M});var t=c(177),r=c(5103),g=c(5154),e=c(3953);let M=(()=>{class G{static#e=this.\u0275fac=function(A){return new(A||G)};static#t=this.\u0275mod=e.$C({type:G});static#n=this.\u0275inj=e.G2t({imports:[t.MD,g.Qt,r.Y3]})}return G})()},2688:(Rt,De,c)=>{c.d(De,{b:()=>Yt});var t=c(3953),r=c(1661),g=c(177),e=c(5761),M=c(1289),G=c(5652),L=c(3287),B=c(6564),A=c(8011),w=c(1429),I=c(3548);function F(Ue,Ae){if(1&Ue&&t.nrm(0,"cvc-molecular-profile-popover",9),2&Ue){const ie=t.XpG();t.Y8G("molecularProfileId",ie.entity.entityId)}}function X(Ue,Ae){if(1&Ue&&t.nrm(0,"cvc-disease-popover",10),2&Ue){const ie=t.XpG();t.Y8G("diseaseId",ie.entity.entityId)}}function V(Ue,Ae){if(1&Ue&&t.nrm(0,"cvc-therapy-popover",11),2&Ue){const ie=t.XpG();t.Y8G("therapyId",ie.entity.entityId)}}function x(Ue,Ae){if(1&Ue&&t.nrm(0,"cvc-source-popover",12),2&Ue){const ie=t.XpG();t.Y8G("sourceId",ie.entity.entityId)}}function ne(Ue,Ae){if(1&Ue&&t.nrm(0,"cvc-phenotype-popover",13),2&Ue){const ie=t.XpG();t.Y8G("phenotypeId",ie.entity.entityId)}}function J(Ue,Ae){if(1&Ue&&t.nrm(0,"cvc-evidence-popover",14),2&Ue){const ie=t.XpG();t.Y8G("evidenceId",ie.entity.entityId)}}function be(Ue,Ae){if(1&Ue&&t.nrm(0,"cvc-feature-popover",15),2&Ue){const ie=t.XpG();t.Y8G("featureId",ie.entity.entityId)}}function Oe(Ue,Ae){if(1&Ue&&t.nrm(0,"cvc-variant-popover",16),2&Ue){const ie=t.XpG();t.Y8G("variantId",ie.entity.entityId)}}const he=["MolecularProfile","Disease","Therapy","Phenotype","Source","Gene","Variant","EvidenceItem"];let we=(()=>{class Ue{ngOnInit(){if(null==this.entity)throw new Error("entity input is required for CvcEntityTagPopoverComponent")}static#e=this.\u0275fac=function(_e){return new(_e||Ue)};static#t=this.\u0275cmp=t.VBU({type:Ue,selectors:[["cvc-entity-tag-popover"]],inputs:{entity:"entity"},decls:9,vars:9,consts:[[3,"ngSwitch"],[3,"molecularProfileId",4,"ngSwitchCase"],[3,"diseaseId",4,"ngSwitchCase"],[3,"therapyId",4,"ngSwitchCase"],[3,"sourceId",4,"ngSwitchCase"],[3,"phenotypeId",4,"ngSwitchCase"],[3,"evidenceId",4,"ngSwitchCase"],[3,"featureId",4,"ngSwitchCase"],[3,"variantId",4,"ngSwitchCase"],[3,"molecularProfileId"],[3,"diseaseId"],[3,"therapyId"],[3,"sourceId"],[3,"phenotypeId"],[3,"evidenceId"],[3,"featureId"],[3,"variantId"]],template:function(_e,oe){1&_e&&(t.qex(0,0),t.DNE(1,F,1,1,"cvc-molecular-profile-popover",1)(2,X,1,1,"cvc-disease-popover",2)(3,V,1,1,"cvc-therapy-popover",3)(4,x,1,1,"cvc-source-popover",4)(5,ne,1,1,"cvc-phenotype-popover",5)(6,J,1,1,"cvc-evidence-popover",6)(7,be,1,1,"cvc-feature-popover",7)(8,Oe,1,1,"cvc-variant-popover",8),t.bVm()),2&_e&&(t.Y8G("ngSwitch",oe.entity.entityType),t.R7$(),t.Y8G("ngSwitchCase","MolecularProfile"),t.R7$(),t.Y8G("ngSwitchCase","Disease"),t.R7$(),t.Y8G("ngSwitchCase","Therapy"),t.R7$(),t.Y8G("ngSwitchCase","Source"),t.R7$(),t.Y8G("ngSwitchCase","Phenotype"),t.R7$(),t.Y8G("ngSwitchCase","EvidenceItem"),t.R7$(),t.Y8G("ngSwitchCase","Feature"),t.R7$(),t.Y8G("ngSwitchCase","Variant"))},dependencies:[g.ux,g.e1,e.q,M.R,G.u,L.a,B.F,A.S,w.X,I.A],encapsulation:2,changeDetection:0})}return Ue})();var me=c(1188),de=c(5103),H=c(5699),z=c(5154),Z=c(1236),pe=c(1555),E=c(3075),S=c(4137);function R(Ue,Ae){}function Y(Ue,Ae){if(1&Ue){const ie=t.RV6();t.j41(0,"span",9)(1,"nz-tag",10),t.bIt("nzCheckedChange",function(){t.eBV(ie);const oe=t.XpG();return t.Njj(oe.cvcTagCheckedChange)})("nzOnClose",function(oe){t.eBV(ie);const Fe=t.XpG();return t.Njj(Fe.cvcOnClose.next(oe))}),t.j41(2,"span",11),t.DNE(3,R,0,0,"ng-template",12),t.k0s()()()}if(2&Ue){const ie=t.XpG(),_e=t.sdS(6),oe=t.sdS(8);t.R7$(),t.Y8G("nzMode",ie.cvcMode)("nzChecked",ie.cvcTagChecked),t.R7$(),t.Y8G("nzPopoverContent",ie.cvcShowPopover&&ie.popoverInput?_e:void 0),t.R7$(),t.Y8G("ngTemplateOutlet",oe)}}function se(Ue,Ae){}function Be(Ue,Ae){if(1&Ue&&(t.j41(0,"span",16),t.DNE(1,se,0,0,"ng-template",12),t.k0s()),2&Ue){const ie=t.XpG(2),_e=t.sdS(8);t.Y8G("nzTooltipTitle",ie.entity.tooltip),t.R7$(),t.Y8G("ngTemplateOutlet",_e)}}function Pt(Ue,Ae){if(1&Ue){const ie=t.RV6();t.j41(0,"span",13)(1,"nz-tag",14),t.bIt("nzOnClose",function(oe){t.eBV(ie);const Fe=t.XpG();return t.Njj(Fe.cvcOnClose.next(oe))}),t.DNE(2,Be,2,2,"span",15),t.k0s()()}if(2&Ue){const ie=t.XpG(),_e=t.sdS(4);t.R7$(),t.Y8G("nzMode","closeable"),t.R7$(),t.Y8G("ngIf",ie.entity&&ie.entity.tooltip)("ngIfElse",_e)}}function vt(Ue,Ae){}function wt(Ue,Ae){if(1&Ue&&(t.j41(0,"span",16),t.DNE(1,vt,0,0,"ng-template",12),t.k0s()),2&Ue){const ie=t.XpG(2),_e=t.sdS(8);t.Y8G("nzTooltipTitle",ie.entity.tooltip),t.R7$(),t.Y8G("ngTemplateOutlet",_e)}}function Le(Ue,Ae){if(1&Ue&&(t.j41(0,"span",17),t.DNE(1,wt,2,2,"span",15),t.k0s()),2&Ue){const ie=t.XpG(),_e=t.sdS(4);t.R7$(),t.Y8G("ngIf",ie.entity&&ie.entity.tooltip)("ngIfElse",_e)}}function zt(Ue,Ae){}function xt(Ue,Ae){if(1&Ue&&(t.j41(0,"span",11),t.DNE(1,zt,0,0,"ng-template",12),t.k0s()),2&Ue){const ie=t.XpG(),_e=t.sdS(6),oe=t.sdS(8);t.Y8G("nzPopoverContent",ie.popoverInput?_e:void 0),t.R7$(),t.Y8G("ngTemplateOutlet",oe)}}function st(Ue,Ae){if(1&Ue&&t.nrm(0,"cvc-entity-tag-popover",19),2&Ue){const ie=t.XpG(2);t.Y8G("entity",ie.popoverInput)}}function Ct(Ue,Ae){if(1&Ue&&t.DNE(0,st,1,1,"cvc-entity-tag-popover",18),2&Ue){const ie=t.XpG();t.Y8G("ngIf",ie.popoverInput)}}function It(Ue,Ae){if(1&Ue&&(t.j41(0,"span"),t.eu8(1,12),t.k0s()),2&Ue){t.XpG();const ie=t.sdS(4);t.R7$(),t.Y8G("ngTemplateOutlet",ie)}}function Tt(Ue,Ae){if(1&Ue&&(t.j41(0,"a",23),t.eu8(1,12),t.k0s()),2&Ue){t.XpG();const ie=t.sdS(4),_e=t.XpG(2);t.Y8G("routerLink",_e.entity.link),t.R7$(),t.Y8G("ngTemplateOutlet",ie)}}function en(Ue,Ae){if(1&Ue&&(t.nrm(0,"span",26),t.nI1(1,"typenameToIcon"),t.nI1(2,"entityColor")),2&Ue){const ie=t.XpG(4);t.Y8G("nzType",t.bMT(1,2,ie.typename))("nzTwotoneColor",t.bMT(2,4,ie.typename))}}function jt(Ue,Ae){if(1&Ue&&(t.DNE(0,en,3,6,"span",24),t.nrm(1,"span",25),t.nI1(2,"highlightTypeahead")),2&Ue){t.XpG(2);const ie=t.sdS(4),_e=t.XpG();t.Y8G("ngIf",_e.typename&&_e.cvcShowIcon)("ngIfElse",ie),t.R7$(),t.Y8G("innerHtml",t.i5U(2,3,_e.entity.name,_e.cvcEmphasize),t.npT)}}function Vt(Ue,Ae){if(1&Ue&&(t.qex(0),t.DNE(1,It,2,1,"span",21)(2,Tt,2,2,"a",22)(3,jt,3,6,"ng-template",null,5,t.C5r),t.bVm()),2&Ue){const ie=t.XpG(2);t.R7$(),t.Y8G("ngIf",ie.cvcDisableLink),t.R7$(),t.Y8G("ngIf",!ie.cvcDisableLink)}}function fn(Ue,Ae){}function Hn(Ue,Ae){if(1&Ue&&(t.DNE(0,fn,0,0,"ng-template",12),t.EFF(1)),2&Ue){t.XpG();const ie=t.sdS(4),_e=t.XpG();t.Y8G("ngTemplateOutlet",ie),t.R7$(),t.SpI(" CACHE-MISS (",_e.cvcCacheId,") ")}}function zn(Ue,Ae){1&Ue&&t.nrm(0,"span",27)}function bt(Ue,Ae){if(1&Ue&&t.DNE(0,Vt,5,2,"ng-container",20)(1,Hn,2,2,"ng-template",null,3,t.C5r)(3,zn,1,0,"ng-template",null,4,t.C5r),2&Ue){const ie=t.sdS(2),_e=t.XpG();t.Y8G("ngIf",_e.entity)("ngIfElse",ie)}}function At(Ue,Ae){if(1&Ue&&t.nrm(0,"cvc-entity-tag-popover",19),2&Ue){const ie=t.XpG(2);t.Y8G("entity",ie.popoverInput)}}function Et(Ue,Ae){if(1&Ue&&t.DNE(0,At,1,1,"cvc-entity-tag-popover",18),2&Ue){const ie=t.XpG();t.Y8G("ngIf",ie.popoverInput)}}const Ot=Ue=>void 0!==Ue&&Ue.__typename&&Ue.id&&void 0!==Ue.name;let Yt=(()=>{class Ue{set cvcLinkableEntity(ie){ie&&this.setLinkableEntity(ie)}set cvcCacheId(ie){ie&&this.setCachedLinkableEntity(ie)}constructor(ie){this.apollo=ie,this.cvcContext="default",this.cvcMode="default",this.cvcDisableLink=!0,this.cvcTagChecked=!1,this.cvcHasTooltip=!1,this.cvcFullWidth=!1,this.cvcShowPopover=!1,this.cvcShowIcon=!0,this.cvcTagCheckedChange=new t.bkB,this.cvcOnClose=new t.bkB}hasPopover(ie){return he.includes(ie)}setLinkableEntity(ie){Ot(ie)&&(this.typename=ie.__typename,this.id=ie.id,this.entity=ie,this.setPopoverInput(ie))}setCachedLinkableEntity(ie){const[_e,oe]=ie.split(":");if(this.typename=_e,this.id=+oe,!this.typename||!this.id)return void console.error(`entity-tag received an invalid cacheId: ${ie}. Cache IDs must be in the format 'TYPENAME:ID'.`);let Fe;Fe=this.cvcDisableLink?this.cvcHasTooltip?{id:`${_e}:${oe}`,fragment:r.J1`
          fragment Linkable${_e}Entity on ${_e} {
            id
            name
            tooltip
          }
        `}:{id:`${_e}:${oe}`,fragment:r.J1`
          fragment Linkable${_e}Entity on ${_e} {
            id
            name
          }
        `}:{id:`${_e}:${oe}`,fragment:r.J1`
          fragment Linkable${_e}Entity on ${_e} {
            id
            name
            link
          }
        `};const et=this.apollo.client.readFragment(Fe);Ot(et)?(this.setPopoverInput(et),this.entity=et):console.error(`entity-tag could not find cached entity ${ie}`)}setPopoverInput(ie){Ot(ie)&&this.hasPopover(ie.__typename)&&(this.popoverInput={entityId:ie.id,entityType:ie.__typename})}ngOnChanges(ie){ie.cvcMode&&"checkable"===ie.cvcMode.currentValue&&(this.cvcDisableLink=!0),ie.cvcContext&&"default"!==ie.cvcContext.currentValue&&(this.cvcDisableLink=!0)}static#e=this.\u0275fac=function(_e){return new(_e||Ue)(t.rXU(r.Ic))};static#t=this.\u0275cmp=t.VBU({type:Ue,selectors:[["cvc-entity-tag"]],hostVars:40,hostBindings:function(_e,oe){2&_e&&t.AVh("full-width",!0===oe.cvcFullWidth)("label-max",void 0!==oe.cvcTruncateLabel)("label-max-50","50px"===oe.cvcTruncateLabel)("label-max-75","75px"===oe.cvcTruncateLabel)("label-max-100","100px"===oe.cvcTruncateLabel)("label-max-125","125px"===oe.cvcTruncateLabel)("label-max-150","150px"===oe.cvcTruncateLabel)("label-max-175","175px"===oe.cvcTruncateLabel)("label-max-200","200px"===oe.cvcTruncateLabel)("label-max-250","250px"===oe.cvcTruncateLabel)("label-max-300","300px"===oe.cvcTruncateLabel)("label-max-350","350px"===oe.cvcTruncateLabel)("label-max-400","400px"===oe.cvcTruncateLabel)("label-max-450","450px"===oe.cvcTruncateLabel)("label-max-500","500px"===oe.cvcTruncateLabel)("rejected","REJECTED"===oe.cvcStatus)("accepted","ACCEPTED"===oe.cvcStatus)("submitted","SUBMITTED"===oe.cvcStatus)("new","NEW"===oe.cvcStatus)("superseded","SUPERSEDED"===oe.cvcStatus)},inputs:{cvcLinkableEntity:"cvcLinkableEntity",cvcCacheId:"cvcCacheId",cvcStatus:"cvcStatus",cvcContext:"cvcContext",cvcMode:"cvcMode",cvcEmphasize:"cvcEmphasize",cvcDisableLink:"cvcDisableLink",cvcTagChecked:"cvcTagChecked",cvcHasTooltip:"cvcHasTooltip",cvcFullWidth:"cvcFullWidth",cvcShowPopover:"cvcShowPopover",cvcShowIcon:"cvcShowIcon",cvcTruncateLabel:"cvcTruncateLabel"},outputs:{cvcTagCheckedChange:"cvcTagCheckedChange",cvcOnClose:"cvcOnClose"},features:[t.OA$],decls:11,vars:3,consts:[["noTooltip",""],["popoverContent",""],["tagContent",""],["cacheMiss",""],["noIcon",""],["tagLabel",""],["class","default",4,"ngIf"],["class","select-item",4,"ngIf"],["class","multi-select-item",4,"ngIf"],[1,"default"],[3,"nzCheckedChange","nzOnClose","nzMode","nzChecked"],["nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverContent"],[3,"ngTemplateOutlet"],[1,"select-item"],[3,"nzOnClose","nzMode"],["nz-tooltip","",3,"nzTooltipTitle",4,"ngIf","ngIfElse"],["nz-tooltip","",3,"nzTooltipTitle"],[1,"multi-select-item"],[3,"entity",4,"ngIf"],[3,"entity"],[4,"ngIf","ngIfElse"],[4,"ngIf"],[3,"routerLink",4,"ngIf"],[3,"routerLink"],["nz-icon","","nzTheme","twotone","class","tag-icon",3,"nzType","nzTwotoneColor",4,"ngIf","ngIfElse"],[1,"tag-label",3,"innerHtml"],["nz-icon","","nzTheme","twotone",1,"tag-icon",3,"nzType","nzTwotoneColor"],[1,"tag-no-icon"]],template:function(_e,oe){1&_e&&t.DNE(0,Y,4,4,"span",6)(1,Pt,3,3,"span",7)(2,Le,2,2,"span",8)(3,xt,2,2,"ng-template",null,0,t.C5r)(5,Ct,1,1,"ng-template",null,1,t.C5r)(7,bt,5,2,"ng-template",null,2,t.C5r)(9,Et,1,1,"ng-template",null,1,t.C5r),2&_e&&(t.Y8G("ngIf","default"===oe.cvcContext),t.R7$(),t.Y8G("ngIf","select-item"===oe.cvcContext),t.R7$(),t.Y8G("ngIf","multi-select-item"===oe.cvcContext))},dependencies:[g.bT,g.T3,me.Wk,de.Dn,H.s,z.LH,Z.L_,we,pe.M,E.R,S.o],styles:['.hide-dropdown[_ngcontent-%COMP%]{display:none}.label-max-50[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:50px;overflow:hidden;text-overflow:ellipsis}.label-max-75[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:75px;overflow:hidden;text-overflow:ellipsis}.label-max-100[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:100px;overflow:hidden;text-overflow:ellipsis}.label-max-125[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:125px;overflow:hidden;text-overflow:ellipsis}.label-max-150[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:150px;overflow:hidden;text-overflow:ellipsis}.label-max-175[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:175px;overflow:hidden;text-overflow:ellipsis}.label-max-200[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:200px;overflow:hidden;text-overflow:ellipsis}.label-max-250[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:250px;overflow:hidden;text-overflow:ellipsis}.label-max-300[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:300px;overflow:hidden;text-overflow:ellipsis}.label-max-350[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:350px;overflow:hidden;text-overflow:ellipsis}.label-max-400[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:400px;overflow:hidden;text-overflow:ellipsis}.label-max-450[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:450px;overflow:hidden;text-overflow:ellipsis}.label-max-500[_nghost-%COMP%]   .tag-label[_ngcontent-%COMP%]{max-width:500px;overflow:hidden;text-overflow:ellipsis}.rejected[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%], .submitted[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%], .accepted[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%], .deprecated[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{border-right-width:2px}.rejected[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%], .deprecated[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{border-color:#e6e6e6;background-color:#fff;color:#999999d9}.submitted[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{border-color:#ffe58f}.accepted[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{border-color:#b7eb8f}.full-width[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{width:100%}.full-width[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{width:100%}nz-tag[_ngcontent-%COMP%]{margin-right:0;margin-inline-end:4px}  -checkable{background-color:transparent;cursor:pointer}  -checkable:not(  -checkable-checked):hover{color:#1890ff}  -checkable:active,   -checkable-checked{color:#fff}  -checkable-checked{background-color:#1890ff}  -checkable:active{background-color:#096dd9}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{display:inline-block;padding:3px 2px 3px 4px;margin:-3px 0}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-no-icon[_ngcontent-%COMP%]{display:inline-block;width:4px}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;font-weight:400;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{display:inline-block;padding:3px 2px 3px 4px;margin:-3px 0}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-no-icon[_ngcontent-%COMP%]{display:inline-block;width:4px}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;font-weight:400;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{padding-right:0}.multi-select-item[_ngcontent-%COMP%]{display:inline-block;margin-top:-3px;margin-bottom:-3px;margin-left:-4px;padding-left:4px}.multi-select-item[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]:after{content:" "}.typeahead-match[_ngcontent-%COMP%]{font-weight:700}a.disabled[_ngcontent-%COMP%]{pointer-events:none}'],changeDetection:0})}return Ue})()},181:(Rt,De,c)=>{c.d(De,{_:()=>Oe});var t=c(177),r=c(5103),g=c(5699),e=c(4917),M=c(5154),G=c(1188),L=c(3953);let B=(()=>{class he{static#e=this.\u0275fac=function(de){return new(de||he)};static#t=this.\u0275mod=L.$C({type:he});static#n=this.\u0275inj=L.G2t({imports:[t.MD]})}return he})();var A=c(1236),w=c(8156),I=c(4666),F=c(5928),X=c(8052),V=c(2582),x=c(7683),ne=c(3126),J=c(6075);let be=(()=>{class he{static#e=this.\u0275fac=function(de){return new(de||he)};static#t=this.\u0275mod=L.$C({type:he});static#n=this.\u0275inj=L.G2t({imports:[t.MD,X.b,w.U,x.B,ne.t,V.y,I.v,F.o,J.$]})}return he})(),Oe=(()=>{class he{static#e=this.\u0275fac=function(de){return new(de||he)};static#t=this.\u0275mod=L.$C({type:he});static#n=this.\u0275inj=L.G2t({imports:[t.MD,G.iI,r.Y3,g.T,M.Qt,A.MC,B,e.i,be,B]})}return he})()},8721:(Rt,De,c)=>{c.d(De,{G:()=>ne});var t=c(1635),r=c(9894),g=c(3953),e=c(1188),M=c(177),G=c(2983),L=c(3617),B=c(1774);const A=["*"];function w(J,be){if(1&J&&g.nrm(0,"nz-alert",6),2&J){g.XpG();const Oe=g.sdS(3),he=g.XpG();g.Mz_("nzMessage","Error Submitting ",he.entityType,""),g.Y8G("nzDescription",Oe)}}function I(J,be){if(1&J&&(g.j41(0,"li"),g.EFF(1),g.k0s()),2&J){const Oe=be.$implicit;g.R7$(),g.SpI(" ",Oe," ")}}function F(J,be){if(1&J&&(g.j41(0,"ul"),g.DNE(1,I,2,1,"li",7),g.k0s()),2&J){const Oe=g.XpG().ngIf;g.R7$(),g.Y8G("ngForOf",Oe)}}function X(J,be){if(1&J&&(g.qex(0),g.DNE(1,w,1,3,"nz-alert",5)(2,F,2,1,"ng-template",null,1,g.C5r),g.bVm()),2&J){const Oe=be.ngIf;g.R7$(),g.Y8G("ngIf",Oe.length>0)}}function V(J,be){if(1&J&&(g.qex(0),g.nrm(1,"nz-alert",8),g.bVm()),2&J){const Oe=g.XpG();g.R7$(),g.Mz_("nzMessage","",Oe.entityType," Submitted"),g.Y8G("nzDescription",Oe.successMessage?Oe.successMessage:null)}}function x(J,be){1&J&&g.SdG(0)}let ne=class D8{set mutationState(be){this._mutationState=be,this.currentTimer&&clearTimeout(this.currentTimer),be&&be.submitSuccess$.pipe((0,r.s)(this)).subscribe(Oe=>{Oe&&(this.currentTimer=setTimeout(()=>{this.redirectUrl&&this.router.navigateByUrl(this.redirectUrl)},2500))})}get mutationState(){return this._mutationState}constructor(be){this.router=be}ngOnInit(){}static#e=this.\u0275fac=function(Oe){return new(Oe||D8)(g.rXU(e.Ix))};static#t=this.\u0275cmp=g.VBU({type:D8,selectors:[["cvc-form-submission-status-display"]],inputs:{mutationState:"mutationState",entityType:"entityType",successMessage:"successMessage",redirectUrl:"redirectUrl"},ngContentSelectors:A,decls:8,vars:10,consts:[["form",""],["errorList",""],[3,"nzSpinning"],[4,"ngIf"],[4,"ngIf","ngIfElse"],["nzType","error","nzShowIcon","",3,"nzMessage","nzDescription",4,"ngIf"],["nzType","error","nzShowIcon","",3,"nzMessage","nzDescription"],[4,"ngFor","ngForOf"],["nzType","success","nzShowIcon","",3,"nzMessage","nzDescription"]],template:function(Oe,he){if(1&Oe&&(g.NAR(),g.j41(0,"nz-spin",2),g.nI1(1,"ngrxPush"),g.DNE(2,X,4,1,"ng-container",3),g.nI1(3,"ngrxPush"),g.DNE(4,V,2,3,"ng-container",4),g.nI1(5,"ngrxPush"),g.DNE(6,x,1,0,"ng-template",null,0,g.C5r),g.k0s()),2&Oe){const we=g.sdS(7);g.Y8G("nzSpinning",g.bMT(1,4,null==he.mutationState?null:he.mutationState.isSubmitting$)),g.R7$(2),g.Y8G("ngIf",g.bMT(3,6,null==he.mutationState?null:he.mutationState.submitError$)),g.R7$(2),g.Y8G("ngIf",g.bMT(5,8,null==he.mutationState?null:he.mutationState.submitSuccess$))("ngIfElse",we)}},dependencies:[M.Sq,M.bT,G.a,L.Y,B.L9],encapsulation:2,changeDetection:0})};ne=(0,t.Cg)([(0,r.d)()],ne)},5316:(Rt,De,c)=>{c.d(De,{P:()=>G});var t=c(177),r=c(3617),g=c(7685),e=c(2983),M=c(3953);let G=(()=>{class L{static#e=this.\u0275fac=function(w){return new(w||L)};static#t=this.\u0275mod=M.$C({type:L});static#n=this.\u0275inj=M.G2t({imports:[t.MD,e.V,r.$,g.pc]})}return L})()},8168:(Rt,De,c)=>{c.d(De,{m:()=>Gd});var t=c(9417),r=c(1188),g=c(8524),e=c(3953),M=c(177),G=c(8927),L=c(7529);function B(u,b){if(1&u&&(e.qex(0),e.j41(1,"nz-form-label",4),e.EFF(2),e.k0s(),e.bVm()),2&u){const a=e.XpG();e.R7$(),e.Y8G("nzRequired",a.props.required&&!0!==a.props.hideRequiredMarker)("nzFor",a.id),e.R7$(),e.SpI(" ",a.props.label," ")}}function A(u,b){if(1&u&&e.nrm(0,"formly-validation-message",5),2&u){const a=e.XpG();e.Y8G("field",a.field)}}let w=(()=>{class u extends g.cm{get errorState(){return this.showError?"error":""}}return u.\u0275fac=(()=>{let b;return function(h){return(b||(b=e.xGo(u)))(h||u)}})(),u.\u0275cmp=e.VBU({type:u,selectors:[["formly-wrapper-nz-form-field"]],features:[e.Vt3],decls:7,vars:4,consts:[["fieldComponent",""],["errorTpl",""],[4,"ngIf"],[3,"nzValidateStatus","nzErrorTip","nzExtra"],[3,"nzRequired","nzFor"],[3,"field"]],template:function(a,h){if(1&a&&(e.j41(0,"nz-form-item"),e.DNE(1,B,3,3,"ng-container",2),e.j41(2,"nz-form-control",3),e.eu8(3,null,0),e.DNE(5,A,1,1,"ng-template",null,1,e.C5r),e.k0s()()),2&a){const _=e.sdS(6);e.R7$(),e.Y8G("ngIf",h.props.label&&!0!==h.props.hideLabel),e.R7$(),e.Y8G("nzValidateStatus",h.errorState)("nzErrorTip",_)("nzExtra",h.props.description)}},dependencies:[G.Ls,G.Mo,G.zS,g.Nc,L.e,M.bT,L.Uq],encapsulation:2}),u})(),I=(()=>{class u{}return u.\u0275fac=function(a){return new(a||u)},u.\u0275mod=e.$C({type:u}),u.\u0275inj=e.G2t({imports:[[M.MD,t.X1,G.PQ,g.qy.forChild({wrappers:[{name:"form-field",component:w}]})]]}),u})();var F=c(1011),X=c(7336),V=c(1413),x=c(3726),ne=c(7786),J=c(3294),be=c(6977),Oe=c(9172),he=c(5558),we=c(1397),me=c(6354),de=c(7891),H=c(1025),z=c(317),Z=c(5103),pe=c(851),E=c(8203),S=c(7806);const R=["upHandler"],Y=["downHandler"],se=["inputElement"];function Be(u,b){if(1&u&&e.nrm(0,"nz-form-item-feedback-icon",10),2&u){const a=e.XpG();e.Y8G("status",a.status)}}const Pt=["nz-input-number-group-slot",""],vt=["*"];function wt(u,b){if(1&u&&e.nrm(0,"span",0),2&u){const a=e.XpG();e.Y8G("nzType",a.icon)}}function Le(u,b){if(1&u&&(e.qex(0),e.EFF(1),e.bVm()),2&u){const a=e.XpG();e.R7$(),e.JRh(a.template)}}function zt(u,b){if(1&u&&e.nrm(0,"div",3),2&u){const a=e.XpG(2);e.Y8G("icon",a.nzAddOnBeforeIcon)("template",a.nzAddOnBefore)}}function xt(u,b){}function st(u,b){if(1&u&&(e.j41(0,"div",6),e.DNE(1,xt,0,0,"ng-template",5),e.k0s()),2&u){const a=e.XpG(2),h=e.sdS(3);e.AVh("ant-input-number-affix-wrapper-disabled",a.disabled)("ant-input-number-affix-wrapper-sm",a.isSmall)("ant-input-number-affix-wrapper-lg",a.isLarge)("ant-input-number-affix-wrapper-focused",a.focused),e.Y8G("ngClass",a.affixInGroupStatusCls),e.R7$(),e.Y8G("ngTemplateOutlet",h)}}function Ct(u,b){}function It(u,b){if(1&u&&e.DNE(0,Ct,0,0,"ng-template",5),2&u){e.XpG(2);const a=e.sdS(5);e.Y8G("ngTemplateOutlet",a)}}function Tt(u,b){if(1&u&&e.nrm(0,"span",3),2&u){const a=e.XpG(2);e.Y8G("icon",a.nzAddOnAfterIcon)("template",a.nzAddOnAfter)}}function en(u,b){if(1&u&&(e.j41(0,"span",2),e.DNE(1,zt,1,2,"div",3)(2,st,2,10,"div",4)(3,It,1,1,null,5)(4,Tt,1,2,"span",3),e.k0s()),2&u){const a=e.XpG();e.R7$(),e.vxM(a.nzAddOnBefore||a.nzAddOnBeforeIcon?1:-1),e.R7$(),e.vxM(a.isAffix||a.hasFeedback?2:3),e.R7$(2),e.vxM(a.nzAddOnAfter||a.nzAddOnAfterIcon?4:-1)}}function jt(u,b){}function Vt(u,b){if(1&u&&e.DNE(0,jt,0,0,"ng-template",5),2&u){e.XpG(2);const a=e.sdS(3);e.Y8G("ngTemplateOutlet",a)}}function fn(u,b){}function Hn(u,b){if(1&u&&e.DNE(0,fn,0,0,"ng-template",5),2&u){e.XpG(2);const a=e.sdS(5);e.Y8G("ngTemplateOutlet",a)}}function zn(u,b){if(1&u&&e.DNE(0,Vt,1,1,null,5)(1,Hn,1,1,null,5),2&u){const a=e.XpG();e.vxM(a.isAffix?0:1)}}function bt(u,b){if(1&u&&e.nrm(0,"span",7),2&u){const a=e.XpG(2);e.Y8G("icon",a.nzPrefixIcon)("template",a.nzPrefix)}}function At(u,b){}function Et(u,b){if(1&u&&e.nrm(0,"nz-form-item-feedback-icon",9),2&u){const a=e.XpG(3);e.Y8G("status",a.status)}}function Ot(u,b){if(1&u&&(e.j41(0,"span",8),e.DNE(1,Et,1,1,"nz-form-item-feedback-icon",9),e.k0s()),2&u){const a=e.XpG(2);e.Y8G("icon",a.nzSuffixIcon)("template",a.nzSuffix),e.R7$(),e.vxM(a.isFeedback?1:-1)}}function Yt(u,b){if(1&u&&e.DNE(0,bt,1,2,"span",7)(1,At,0,0,"ng-template",5)(2,Ot,2,3,"span",8),2&u){const a=e.XpG(),h=e.sdS(5);e.vxM(a.nzPrefix||a.nzPrefixIcon?0:-1),e.R7$(),e.Y8G("ngTemplateOutlet",h),e.R7$(),e.vxM(a.nzSuffix||a.nzSuffixIcon||a.isFeedback?2:-1)}}function Ue(u,b){if(1&u&&e.nrm(0,"nz-form-item-feedback-icon",9),2&u){const a=e.XpG(3);e.Y8G("status",a.status)}}function Ae(u,b){if(1&u&&(e.j41(0,"span",10),e.DNE(1,Ue,1,1,"nz-form-item-feedback-icon",9),e.k0s()),2&u){const a=e.XpG(2);e.R7$(),e.vxM(a.isFeedback?1:-1)}}function ie(u,b){if(1&u&&(e.SdG(0),e.DNE(1,Ae,2,1,"span",10)),2&u){const a=e.XpG();e.R7$(),e.vxM(a.isAddOn||a.isAffix||!a.isFeedback?-1:1)}}let _e=(()=>{class u{onModelChange(a){this.parsedValue=this.nzParser(a),this.inputElement.nativeElement.value=`${this.parsedValue}`;const h=this.getCurrentValidValue(this.parsedValue);this.setValue(h)}getCurrentValidValue(a){let h=a;return h=""===h?"":this.isNotCompleteNumber(h)?this.value:`${this.getValidValue(h)}`,this.toNumber(h)}isNotCompleteNumber(a){return isNaN(a)||""===a||null===a||!(!a||a.toString().indexOf(".")!==a.toString().length-1)}getValidValue(a){let h=parseFloat(a);return isNaN(h)?a:(h<this.nzMin&&(h=this.nzMin),h>this.nzMax&&(h=this.nzMax),h)}toNumber(a){if(this.isNotCompleteNumber(a))return a;const h=String(a);if(h.indexOf(".")>=0&&(0,z.n9)(this.nzPrecision)){if("function"==typeof this.nzPrecisionMode)return this.nzPrecisionMode(a,this.nzPrecision);if("cut"===this.nzPrecisionMode){const _=h.split(".");return _[1]=_[1].slice(0,this.nzPrecision),Number(_.join("."))}return Number(Number(a).toFixed(this.nzPrecision))}return Number(a)}getRatio(a){let h=1;return a.metaKey||a.ctrlKey?h=.1:a.shiftKey&&(h=10),h}down(a,h){this.isFocused||this.focus(),this.step("down",a,h)}up(a,h){this.isFocused||this.focus(),this.step("up",a,h)}getPrecision(a){const h=a.toString();if(h.indexOf("e-")>=0)return parseInt(h.slice(h.indexOf("e-")+2),10);let _=0;return h.indexOf(".")>=0&&(_=h.length-h.indexOf(".")-1),_}getMaxPrecision(a,h){if((0,z.n9)(this.nzPrecision))return this.nzPrecision;const _=this.getPrecision(h),ee=this.getPrecision(this.nzStep),ft=this.getPrecision(a);return a?Math.max(ft,_+ee):_+ee}getPrecisionFactor(a,h){const _=this.getMaxPrecision(a,h);return Math.pow(10,_)}upStep(a,h){const _=this.getPrecisionFactor(a,h),ee=Math.abs(this.getMaxPrecision(a,h));let ft;return ft="number"==typeof a?((_*a+_*this.nzStep*h)/_).toFixed(ee):this.nzMin===-1/0?this.nzStep:this.nzMin,this.toNumber(ft)}downStep(a,h){const _=this.getPrecisionFactor(a,h),ee=Math.abs(this.getMaxPrecision(a,h));let ft;return ft="number"==typeof a?((_*a-_*this.nzStep*h)/_).toFixed(ee):this.nzMin===-1/0?-this.nzStep:this.nzMin,this.toNumber(ft)}step(a,h,_=1){if(this.stop(),h.preventDefault(),this.nzDisabled)return;const ee=this.getCurrentValidValue(this.parsedValue)||0;let ft=0;"up"===a?ft=this.upStep(ee,_):"down"===a&&(ft=this.downStep(ee,_));const nn=ft>this.nzMax||ft<this.nzMin;ft>this.nzMax?ft=this.nzMax:ft<this.nzMin&&(ft=this.nzMin),this.setValue(ft),this.updateDisplayValue(ft),this.isFocused=!0,!nn&&(this.autoStepTimer=setTimeout(()=>{this[a](h,_)},300))}stop(){this.autoStepTimer&&clearTimeout(this.autoStepTimer)}setValue(a){if(`${this.value}`!=`${a}`&&this.onChange(a),this.value=a,this.parsedValue=a,this.disabledUp=this.disabledDown=!1,a||0===a){const h=Number(a);h>=this.nzMax&&(this.disabledUp=!0),h<=this.nzMin&&(this.disabledDown=!0)}}updateDisplayValue(a){const h=(0,z.n9)(this.nzFormatter(a))?this.nzFormatter(a):"";this.displayValue=h,this.inputElement.nativeElement.value=`${h}`}writeValue(a){this.value=a,this.setValue(a),this.updateDisplayValue(a),this.cdr.markForCheck()}registerOnChange(a){this.onChange=a}registerOnTouched(a){this.onTouched=a}setDisabledState(a){this.nzDisabled=this.isNzDisableFirstChange&&this.nzDisabled||a,this.isNzDisableFirstChange=!1,this.disabled$.next(this.nzDisabled),this.cdr.markForCheck()}focus(){this.focusMonitor.focusVia(this.inputElement,"keyboard")}blur(){this.inputElement.nativeElement.blur()}constructor(a,h,_,ee,ft,nn,Rn,xi,Co){this.ngZone=a,this.elementRef=h,this.cdr=_,this.focusMonitor=ee,this.renderer=ft,this.directionality=nn,this.destroy$=Rn,this.nzFormStatusService=xi,this.nzFormNoStatusService=Co,this.isNzDisableFirstChange=!0,this.isFocused=!1,this.disabled$=new V.B,this.disabledUp=!1,this.disabledDown=!1,this.dir="ltr",this.prefixCls="ant-input-number",this.status="",this.statusCls={},this.hasFeedback=!1,this.onChange=()=>{},this.onTouched=()=>{},this.nzBlur=new e.bkB,this.nzFocus=new e.bkB,this.nzSize="default",this.nzMin=-1/0,this.nzMax=1/0,this.nzParser=jo=>jo.trim().replace(/\u3002/g,".").replace(/[^\w\.-]+/g,""),this.nzPrecisionMode="toFixed",this.nzPlaceHolder="",this.nzStatus="",this.nzStep=1,this.nzInputMode="decimal",this.nzId=null,this.nzDisabled=!1,this.nzReadOnly=!1,this.nzAutoFocus=!1,this.nzBorderless=!1,this.nzFormatter=jo=>jo}ngOnInit(){this.nzFormStatusService?.formStatusChanges.pipe((0,J.F)((a,h)=>a.status===h.status&&a.hasFeedback===h.hasFeedback),(0,be.Q)(this.destroy$)).subscribe(({status:a,hasFeedback:h})=>{this.setStatusStyles(a,h)}),this.focusMonitor.monitor(this.elementRef,!0).pipe((0,be.Q)(this.destroy$)).subscribe(a=>{a?(this.isFocused=!0,this.nzFocus.emit()):(this.isFocused=!1,this.updateDisplayValue(this.value),this.nzBlur.emit(),Promise.resolve().then(()=>this.onTouched()))}),this.dir=this.directionality.value,this.directionality.change.pipe((0,be.Q)(this.destroy$)).subscribe(a=>{this.dir=a}),this.setupHandlersListeners(),this.ngZone.runOutsideAngular(()=>{(0,x.R)(this.inputElement.nativeElement,"keyup").pipe((0,be.Q)(this.destroy$)).subscribe(()=>this.stop()),(0,x.R)(this.inputElement.nativeElement,"keydown").pipe((0,be.Q)(this.destroy$)).subscribe(a=>{const{keyCode:h}=a;h!==X.i7&&h!==X.n6&&h!==X.Fm||this.ngZone.run(()=>{if(h===X.i7){const _=this.getRatio(a);this.up(a,_),this.stop()}else if(h===X.n6){const _=this.getRatio(a);this.down(a,_),this.stop()}else this.updateDisplayValue(this.value);this.cdr.markForCheck()})})})}ngOnChanges(a){const{nzStatus:h,nzDisabled:_}=a;if(a.nzFormatter&&!a.nzFormatter.isFirstChange()){const ee=this.getCurrentValidValue(this.parsedValue);this.setValue(ee),this.updateDisplayValue(ee)}_&&this.disabled$.next(this.nzDisabled),h&&this.setStatusStyles(this.nzStatus,this.hasFeedback)}ngAfterViewInit(){this.nzAutoFocus&&this.focus()}ngOnDestroy(){this.focusMonitor.stopMonitoring(this.elementRef)}setupHandlersListeners(){this.ngZone.runOutsideAngular(()=>{(0,ne.h)((0,x.R)(this.upHandler.nativeElement,"mouseup"),(0,x.R)(this.upHandler.nativeElement,"mouseleave"),(0,x.R)(this.downHandler.nativeElement,"mouseup"),(0,x.R)(this.downHandler.nativeElement,"mouseleave")).pipe((0,be.Q)(this.destroy$)).subscribe(()=>this.stop())})}setStatusStyles(a,h){this.status=a,this.hasFeedback=h,this.cdr.markForCheck(),this.statusCls=(0,z.LP)(this.prefixCls,a,h),Object.keys(this.statusCls).forEach(_=>{this.statusCls[_]?this.renderer.addClass(this.elementRef.nativeElement,_):this.renderer.removeClass(this.elementRef.nativeElement,_)})}static#e=this.\u0275fac=function(h){return new(h||u)(e.rXU(e.SKi),e.rXU(e.aKT),e.rXU(e.gRc),e.rXU(pe.FN),e.rXU(e.sFG),e.rXU(E.dS,8),e.rXU(H.y4),e.rXU(de.is,8),e.rXU(de.n1,8))};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["nz-input-number"]],viewQuery:function(h,_){if(1&h&&(e.GBs(R,7),e.GBs(Y,7),e.GBs(se,7)),2&h){let ee;e.mGM(ee=e.lsd())&&(_.upHandler=ee.first),e.mGM(ee=e.lsd())&&(_.downHandler=ee.first),e.mGM(ee=e.lsd())&&(_.inputElement=ee.first)}},hostAttrs:[1,"ant-input-number"],hostVars:16,hostBindings:function(h,_){2&h&&e.AVh("ant-input-number-in-form-item",!!_.nzFormStatusService)("ant-input-number-focused",_.isFocused)("ant-input-number-lg","large"===_.nzSize)("ant-input-number-sm","small"===_.nzSize)("ant-input-number-disabled",_.nzDisabled)("ant-input-number-readonly",_.nzReadOnly)("ant-input-number-rtl","rtl"===_.dir)("ant-input-number-borderless",_.nzBorderless)},inputs:{nzSize:"nzSize",nzMin:[2,"nzMin","nzMin",e.Udg],nzMax:[2,"nzMax","nzMax",e.Udg],nzParser:"nzParser",nzPrecision:"nzPrecision",nzPrecisionMode:"nzPrecisionMode",nzPlaceHolder:"nzPlaceHolder",nzStatus:"nzStatus",nzStep:[2,"nzStep","nzStep",e.Udg],nzInputMode:"nzInputMode",nzId:"nzId",nzDisabled:[2,"nzDisabled","nzDisabled",e.L39],nzReadOnly:[2,"nzReadOnly","nzReadOnly",e.L39],nzAutoFocus:[2,"nzAutoFocus","nzAutoFocus",e.L39],nzBorderless:[2,"nzBorderless","nzBorderless",e.L39],nzFormatter:"nzFormatter"},outputs:{nzBlur:"nzBlur",nzFocus:"nzFocus"},exportAs:["nzInputNumber"],standalone:!0,features:[e.Jv_([{provide:t.kq,useExisting:(0,e.Rfq)(()=>u),multi:!0},H.y4]),e.GFd,e.OA$,e.aNF],decls:11,vars:15,consts:[["upHandler",""],["downHandler",""],["inputElement",""],[1,"ant-input-number-handler-wrap"],["unselectable","unselectable",1,"ant-input-number-handler","ant-input-number-handler-up",3,"mousedown"],["nz-icon","","nzType","up",1,"ant-input-number-handler-up-inner"],["unselectable","unselectable",1,"ant-input-number-handler","ant-input-number-handler-down",3,"mousedown"],["nz-icon","","nzType","down",1,"ant-input-number-handler-down-inner"],[1,"ant-input-number-input-wrap"],["autocomplete","off",1,"ant-input-number-input",3,"ngModelChange","disabled","placeholder","readOnly","ngModel"],[1,"ant-input-number-suffix",3,"status"]],template:function(h,_){if(1&h){const ee=e.RV6();e.j41(0,"div",3)(1,"span",4,0),e.bIt("mousedown",function(nn){return e.eBV(ee),e.Njj(_.up(nn))}),e.nrm(3,"span",5),e.k0s(),e.j41(4,"span",6,1),e.bIt("mousedown",function(nn){return e.eBV(ee),e.Njj(_.down(nn))}),e.nrm(6,"span",7),e.k0s()(),e.j41(7,"div",8)(8,"input",9,2),e.bIt("ngModelChange",function(nn){return e.eBV(ee),e.Njj(_.onModelChange(nn))}),e.k0s()(),e.DNE(10,Be,1,1,"nz-form-item-feedback-icon",10)}2&h&&(e.R7$(),e.AVh("ant-input-number-handler-up-disabled",_.disabledUp),e.R7$(3),e.AVh("ant-input-number-handler-down-disabled",_.disabledDown),e.R7$(4),e.Y8G("disabled",_.nzDisabled)("placeholder",_.nzPlaceHolder)("readOnly",_.nzReadOnly)("ngModel",_.displayValue),e.BMQ("id",_.nzId)("autofocus",_.nzAutoFocus?"autofocus":null)("min",_.nzMin)("max",_.nzMax)("step",_.nzStep)("inputmode",_.nzInputMode),e.R7$(2),e.vxM(_.hasFeedback&&_.status&&!_.nzFormNoStatusService?10:-1))},dependencies:[Z.Y3,Z.Dn,t.YN,t.me,t.BC,t.vS,de.J1,de.Xd],encapsulation:2,changeDetection:0})}return u})(),oe=(()=>{class u{constructor(){this.icon=null,this.type=null,this.template=null}static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["","nz-input-number-group-slot",""]],hostVars:6,hostBindings:function(h,_){2&h&&e.AVh("ant-input-number-group-addon","addon"===_.type)("ant-input-number-prefix","prefix"===_.type)("ant-input-number-suffix","suffix"===_.type)},inputs:{icon:"icon",type:"type",template:"template"},standalone:!0,features:[e.aNF],attrs:Pt,ngContentSelectors:vt,decls:3,vars:2,consts:[["nz-icon","",3,"nzType"],[4,"nzStringTemplateOutlet"]],template:function(h,_){1&h&&(e.NAR(),e.DNE(0,wt,1,1,"span",0)(1,Le,2,1,"ng-container",1),e.SdG(2)),2&h&&(e.vxM(_.icon?0:-1),e.R7$(),e.Y8G("nzStringTemplateOutlet",_.template))},dependencies:[Z.Y3,Z.Dn,S.C,S.m],encapsulation:2,changeDetection:0})}return u})(),et=(()=>{class u{constructor(a,h,_,ee,ft,nn,Rn){this.focusMonitor=a,this.elementRef=h,this.renderer=_,this.cdr=ee,this.directionality=ft,this.nzFormStatusService=nn,this.nzFormNoStatusService=Rn,this.nzAddOnBeforeIcon=null,this.nzAddOnAfterIcon=null,this.nzPrefixIcon=null,this.nzSuffixIcon=null,this.nzStatus="",this.nzSize="default",this.nzCompact=!1,this.isLarge=!1,this.isSmall=!1,this.isAffix=!1,this.isAddOn=!1,this.isFeedback=!1,this.focused=!1,this.disabled=!1,this.dir="ltr",this.prefixCls="ant-input-number",this.affixStatusCls={},this.groupStatusCls={},this.affixInGroupStatusCls={},this.status="",this.hasFeedback=!1,this.destroy$=new V.B}updateChildrenInputSize(){this.listOfNzInputNumberComponent&&this.listOfNzInputNumberComponent.forEach(a=>a.nzSize=this.nzSize)}ngOnInit(){this.nzFormStatusService?.formStatusChanges.pipe((0,J.F)((a,h)=>a.status===h.status&&a.hasFeedback===h.hasFeedback),(0,be.Q)(this.destroy$)).subscribe(({status:a,hasFeedback:h})=>{this.setStatusStyles(a,h)}),this.focusMonitor.monitor(this.elementRef,!0).pipe((0,be.Q)(this.destroy$)).subscribe(a=>{this.focused=!!a,this.cdr.markForCheck()}),this.dir=this.directionality.value,this.directionality.change?.pipe((0,be.Q)(this.destroy$)).subscribe(a=>{this.dir=a})}ngAfterContentInit(){this.updateChildrenInputSize();const a=this.listOfNzInputNumberComponent.changes.pipe((0,Oe.Z)(this.listOfNzInputNumberComponent));a.pipe((0,he.n)(h=>(0,ne.h)(a,...h.map(_=>_.disabled$))),(0,we.Z)(()=>a),(0,me.T)(h=>h.some(_=>_.nzDisabled)),(0,be.Q)(this.destroy$)).subscribe(h=>{this.disabled=h,this.cdr.markForCheck()})}ngOnChanges(a){const{nzSize:h,nzSuffix:_,nzPrefix:ee,nzPrefixIcon:ft,nzSuffixIcon:nn,nzAddOnAfter:Rn,nzAddOnBefore:xi,nzAddOnAfterIcon:Co,nzAddOnBeforeIcon:jo,nzStatus:Ra}=a;h&&(this.updateChildrenInputSize(),this.isLarge="large"===this.nzSize,this.isSmall="small"===this.nzSize),(_||ee||ft||nn)&&(this.isAffix=!!(this.nzSuffix||this.nzPrefix||this.nzPrefixIcon||this.nzSuffixIcon)),(Rn||xi||Co||jo)&&(this.isAddOn=!!(this.nzAddOnAfter||this.nzAddOnBefore||this.nzAddOnAfterIcon||this.nzAddOnBeforeIcon),this.nzFormNoStatusService?.noFormStatus?.next(this.isAddOn)),Ra&&this.setStatusStyles(this.nzStatus,this.hasFeedback)}ngOnDestroy(){this.focusMonitor.stopMonitoring(this.elementRef),this.destroy$.next(),this.destroy$.complete()}setStatusStyles(a,h){this.status=a,this.hasFeedback=h,this.isFeedback=!!a&&h,this.isAffix=!!(this.nzSuffix||this.nzPrefix||this.nzPrefixIcon||this.nzSuffixIcon)||!this.isAddOn&&h,this.affixInGroupStatusCls=this.isAffix||this.isFeedback?this.affixStatusCls=(0,z.LP)(`${this.prefixCls}-affix-wrapper`,a,h):{},this.cdr.markForCheck(),this.affixStatusCls=(0,z.LP)(`${this.prefixCls}-affix-wrapper`,this.isAddOn?"":a,!this.isAddOn&&h),this.groupStatusCls=(0,z.LP)(`${this.prefixCls}-group-wrapper`,this.isAddOn?a:"",!!this.isAddOn&&h);const ee={...this.affixStatusCls,...this.groupStatusCls};Object.keys(ee).forEach(ft=>{ee[ft]?this.renderer.addClass(this.elementRef.nativeElement,ft):this.renderer.removeClass(this.elementRef.nativeElement,ft)})}static#e=this.\u0275fac=function(h){return new(h||u)(e.rXU(pe.FN),e.rXU(e.aKT),e.rXU(e.sFG),e.rXU(e.gRc),e.rXU(E.dS,8),e.rXU(de.is,8),e.rXU(de.n1,8))};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["nz-input-number-group"]],contentQueries:function(h,_,ee){if(1&h&&e.wni(ee,_e,5),2&h){let ft;e.mGM(ft=e.lsd())&&(_.listOfNzInputNumberComponent=ft)}},hostVars:24,hostBindings:function(h,_){2&h&&e.AVh("ant-input-number-group",_.nzCompact)("ant-input-number-group-compact",_.nzCompact)("ant-input-number-group-wrapper",_.isAddOn)("ant-input-number-group-wrapper-rtl",_.isAddOn&&"rtl"===_.dir)("ant-input-number-group-wrapper-lg",_.isAddOn&&_.isLarge)("ant-input-number-group-wrapper-sm",_.isAddOn&&_.isSmall)("ant-input-number-affix-wrapper",!_.isAddOn&&_.isAffix)("ant-input-number-affix-wrapper-rtl",!_.isAddOn&&"rtl"===_.dir)("ant-input-number-affix-wrapper-focused",!_.isAddOn&&_.isAffix&&_.focused)("ant-input-number-affix-wrapper-disabled",!_.isAddOn&&_.isAffix&&_.disabled)("ant-input-number-affix-wrapper-lg",!_.isAddOn&&_.isAffix&&_.isLarge)("ant-input-number-affix-wrapper-sm",!_.isAddOn&&_.isAffix&&_.isSmall)},inputs:{nzAddOnBeforeIcon:"nzAddOnBeforeIcon",nzAddOnAfterIcon:"nzAddOnAfterIcon",nzPrefixIcon:"nzPrefixIcon",nzSuffixIcon:"nzSuffixIcon",nzAddOnBefore:"nzAddOnBefore",nzAddOnAfter:"nzAddOnAfter",nzPrefix:"nzPrefix",nzStatus:"nzStatus",nzSuffix:"nzSuffix",nzSize:"nzSize",nzCompact:[2,"nzCompact","nzCompact",e.L39]},exportAs:["nzInputNumberGroup"],standalone:!0,features:[e.Jv_([de.n1]),e.GFd,e.OA$,e.aNF],ngContentSelectors:vt,decls:6,vars:1,consts:[["affixTemplate",""],["contentTemplate",""],[1,"ant-input-number-wrapper","ant-input-number-group"],["nz-input-number-group-slot","","type","addon",3,"icon","template"],[1,"ant-input-number-affix-wrapper",3,"ant-input-number-affix-wrapper-disabled","ant-input-number-affix-wrapper-sm","ant-input-number-affix-wrapper-lg","ant-input-number-affix-wrapper-focused","ngClass"],[3,"ngTemplateOutlet"],[1,"ant-input-number-affix-wrapper",3,"ngClass"],["nz-input-number-group-slot","","type","prefix",3,"icon","template"],["nz-input-number-group-slot","","type","suffix",3,"icon","template"],[3,"status"],["nz-input-number-group-slot","","type","suffix"]],template:function(h,_){1&h&&(e.NAR(),e.DNE(0,en,5,3,"span",2)(1,zn,2,1)(2,Yt,3,3,"ng-template",null,0,e.C5r)(4,ie,2,1,"ng-template",null,1,e.C5r)),2&h&&e.vxM(_.isAddOn?0:1)},dependencies:[oe,M.YU,M.T3,de.J1,de.Xd],encapsulation:2,changeDetection:0})}return u})(),ut=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[_e,et,oe]})}return u})();function Kt(u,b){if(1&u&&e.nrm(0,"input",2),2&u){const a=e.XpG();e.Y8G("formControl",a.formControl)("type",a.props.type||"text")("formlyAttributes",a.field)}}function cn(u,b){if(1&u&&e.nrm(0,"nz-input-number",3),2&u){const a=e.XpG();e.Y8G("formControl",a.formControl)("formlyAttributes",a.field)}}let Tn=(()=>{class u extends g.PU{}return u.\u0275fac=(()=>{let b;return function(h){return(b||(b=e.xGo(u)))(h||u)}})(),u.\u0275cmp=e.VBU({type:u,selectors:[["formly-field-nz-input"]],features:[e.Vt3],decls:3,vars:2,consts:[["numberTmp",""],["nz-input","",3,"formControl","type","formlyAttributes",4,"ngIf","ngIfElse"],["nz-input","",3,"formControl","type","formlyAttributes"],[3,"formControl","formlyAttributes"]],template:function(a,h){if(1&a&&e.DNE(0,Kt,1,3,"input",1)(1,cn,1,2,"ng-template",null,0,e.C5r),2&a){const _=e.sdS(2);e.Y8G("ngIf","number"!==h.props.type)("ngIfElse",_)}},dependencies:[_e,M.bT,F.Sy,t.me,t.BC,t.l_,g.ch],encapsulation:2,changeDetection:0}),u})(),Wn=(()=>{class u{}return u.\u0275fac=function(a){return new(a||u)},u.\u0275mod=e.$C({type:u}),u.\u0275inj=e.G2t({imports:[[M.MD,t.X1,F.j,ut,I,g.qy.forChild({types:[{name:"input",component:Tn,wrappers:["form-field"]},{name:"string",extends:"input"},{name:"number",extends:"input",defaultOptions:{props:{type:"number"}}},{name:"integer",extends:"input",defaultOptions:{props:{type:"number"}}}]})]]}),u})(),kn=(()=>{class u extends g.PU{}return u.\u0275fac=(()=>{let b;return function(h){return(b||(b=e.xGo(u)))(h||u)}})(),u.\u0275cmp=e.VBU({type:u,selectors:[["formly-field-nz-textarea"]],features:[e.Vt3],decls:1,vars:2,consts:[["nz-input","",3,"formControl","formlyAttributes"]],template:function(a,h){1&a&&e.nrm(0,"textarea",0),2&a&&e.Y8G("formControl",h.formControl)("formlyAttributes",h.field)},dependencies:[F.Sy,t.me,t.BC,t.l_,g.ch],encapsulation:2,changeDetection:0}),u})(),Vn=(()=>{class u{}return u.\u0275fac=function(a){return new(a||u)},u.\u0275mod=e.$C({type:u}),u.\u0275inj=e.G2t({imports:[[M.MD,t.X1,F.j,I,g.qy.forChild({types:[{name:"textarea",component:kn,wrappers:["form-field"]}]})]]}),u})();var Un=c(1985),dn=c(4412),qt=c(5964),On=c(8141);let Ut=(()=>{class u{transform(a,h){return a instanceof Un.c?this.dispose():a=this.observableOf(a,h),a.pipe((0,me.T)(_=>this.transformOptions(_,h)))}ngOnDestroy(){this.dispose()}transformOptions(a,h){const _=this.transformSelectProps(h),ee=[],ft={};return a?.forEach(nn=>{const Rn=this.transformOption(nn,_);if(Rn.group){const xi=ft[Rn.label];void 0===xi?ft[Rn.label]=ee.push(Rn)-1:Rn.group.forEach(Co=>ee[xi].group.push(Co))}else ee.push(Rn)}),ee}transformOption(a,h){const _=h.groupProp(a);return Array.isArray(_)?{label:h.labelProp(a),group:_.map(ee=>this.transformOption(ee,h))}:(a={label:h.labelProp(a),value:h.valueProp(a),disabled:!!h.disabledProp(a)},_?{label:_,group:[a]}:a)}transformSelectProps(a){const h=a?.props||a?.templateOptions||{},_=ee=>"function"==typeof ee?ee:ft=>ft[ee];return{groupProp:_(h.groupProp||"group"),labelProp:_(h.labelProp||"label"),valueProp:_(h.valueProp||"value"),disabledProp:_(h.disabledProp||"disabled")}}dispose(){this._options&&(this._options.complete(),this._options=null),this._subscription&&(this._subscription.unsubscribe(),this._subscription=null)}observableOf(a,h){return this.dispose(),h&&h.options&&h.options.fieldChanges&&(this._subscription=h.options.fieldChanges.pipe((0,qt.p)(({property:_,type:ee,field:ft})=>"expressionChanges"===ee&&(0===_.indexOf("templateOptions.options")||0===_.indexOf("props.options"))&&ft===h&&Array.isArray(ft.props.options)&&!!this._options),(0,On.M)(()=>this._options.next(h.props.options))).subscribe()),this._options=new dn.t(a),this._options.asObservable()}}return u.\u0275fac=function(a){return new(a||u)},u.\u0275pipe=e.EJ8({name:"formlySelectOptions",type:u,pure:!0}),u})(),Ye=(()=>{class u{}return u.\u0275fac=function(a){return new(a||u)},u.\u0275mod=e.$C({type:u}),u.\u0275inj=e.G2t({}),u})();var ue=c(3190);function te(u,b){if(1&u&&(e.j41(0,"label",2),e.EFF(1),e.k0s()),2&u){const a=b.$implicit;e.Y8G("nzValue",a.value)("nzDisabled",a.disabled),e.R7$(),e.SpI(" ",a.label," ")}}let q=(()=>{class u extends g.PU{}return u.\u0275fac=(()=>{let b;return function(h){return(b||(b=e.xGo(u)))(h||u)}})(),u.\u0275cmp=e.VBU({type:u,selectors:[["formly-field-nz-radio"]],features:[e.Vt3],decls:4,vars:7,consts:[[3,"ngModelChange","formControl"],["nz-radio","",3,"nzValue","nzDisabled",4,"ngFor","ngForOf"],["nz-radio","",3,"nzValue","nzDisabled"]],template:function(a,h){1&a&&(e.j41(0,"nz-radio-group",0),e.bIt("ngModelChange",function(ee){return h.props.change&&h.props.change(h.field,ee)}),e.DNE(1,te,2,3,"label",1),e.nI1(2,"formlySelectOptions"),e.nI1(3,"async"),e.k0s()),2&a&&(e.Y8G("formControl",h.formControl),e.R7$(),e.Y8G("ngForOf",e.bMT(3,5,e.i5U(2,2,h.props.options,h.field))))},dependencies:[ue.i3,ue.lx,t.BC,t.l_,M.Sq,M.Jj,Ut],encapsulation:2,changeDetection:0}),u})(),Xe=(()=>{class u{}return u.\u0275fac=function(a){return new(a||u)},u.\u0275mod=e.$C({type:u}),u.\u0275inj=e.G2t({imports:[[M.MD,t.X1,ue.Sw,I,Ye,g.qy.forChild({types:[{name:"radio",component:q,wrappers:["form-field"]}]})]]}),u})();var dt=c(2986);let at=(()=>{class u extends g.PU{constructor(){super(...arguments),this.defaultOptions={props:{indeterminate:!0,hideLabel:!0}}}}return u.\u0275fac=(()=>{let b;return function(h){return(b||(b=e.xGo(u)))(h||u)}})(),u.\u0275cmp=e.VBU({type:u,selectors:[["formly-field-nz-checkbox"]],features:[e.Vt3],decls:2,vars:4,consts:[["nz-checkbox","",3,"ngModelChange","nzIndeterminate","formControl","formlyAttributes"]],template:function(a,h){1&a&&(e.j41(0,"label",0),e.bIt("ngModelChange",function(ee){return h.props.change&&h.props.change(h.field,ee)}),e.EFF(1),e.k0s()),2&a&&(e.Y8G("nzIndeterminate",h.props.indeterminate&&null==h.formControl.value)("formControl",h.formControl)("formlyAttributes",h.field),e.R7$(),e.SpI(" ",h.props.label," "))},dependencies:[dt.$g,t.BC,t.l_,g.ch],encapsulation:2,changeDetection:0}),u})(),St=(()=>{class u{}return u.\u0275fac=function(a){return new(a||u)},u.\u0275mod=e.$C({type:u}),u.\u0275inj=e.G2t({imports:[[M.MD,t.X1,dt.IJ,I,g.qy.forChild({types:[{name:"checkbox",component:at,wrappers:["form-field"]},{name:"boolean",extends:"checkbox"}]})]]}),u})();var Qe=c(1997);function Ee(u,b){if(1&u&&e.nrm(0,"nz-option",6),2&u){const a=b.$implicit;e.Y8G("nzValue",a.value)("nzDisabled",a.disabled)("nzLabel",a.label)}}function Je(u,b){if(1&u&&(e.j41(0,"nz-option-group",4),e.DNE(1,Ee,1,3,"nz-option",5),e.k0s()),2&u){const a=e.XpG().$implicit;e.Y8G("nzLabel",a.label),e.R7$(),e.Y8G("ngForOf",a.group)}}function re(u,b){if(1&u&&e.nrm(0,"nz-option",6),2&u){const a=e.XpG().$implicit;e.Y8G("nzValue",a.value)("nzDisabled",a.disabled)("nzLabel",a.label)}}function ze(u,b){if(1&u&&(e.qex(0),e.DNE(1,Je,2,2,"nz-option-group",2)(2,re,1,3,"nz-option",3),e.bVm()),2&u){const a=b.$implicit;e.R7$(),e.Y8G("ngIf",a.group),e.R7$(),e.Y8G("ngIf",!a.group)}}let gt=(()=>{class u extends g.PU{}return u.\u0275fac=(()=>{let b;return function(h){return(b||(b=e.xGo(u)))(h||u)}})(),u.\u0275cmp=e.VBU({type:u,selectors:[["formly-field-nz-select"]],features:[e.Vt3],decls:4,vars:12,consts:[[3,"ngModelChange","nzPlaceHolder","formControl","formlyAttributes","nzMode"],[4,"ngFor","ngForOf"],[3,"nzLabel",4,"ngIf"],[3,"nzValue","nzDisabled","nzLabel",4,"ngIf"],[3,"nzLabel"],[3,"nzValue","nzDisabled","nzLabel",4,"ngFor","ngForOf"],[3,"nzValue","nzDisabled","nzLabel"]],template:function(a,h){1&a&&(e.j41(0,"nz-select",0),e.bIt("ngModelChange",function(ee){return h.props.change&&h.props.change(h.field,ee)}),e.DNE(1,ze,3,2,"ng-container",1),e.nI1(2,"formlySelectOptions"),e.nI1(3,"async"),e.k0s()),2&a&&(e.AVh("ng-dirty",h.showError),e.Y8G("nzPlaceHolder",h.props.placeholder)("formControl",h.formControl)("formlyAttributes",h.field)("nzMode",h.props.multiple?"multiple":"default"),e.R7$(),e.Y8G("ngForOf",e.bMT(3,10,e.i5U(2,7,h.props.options,h.field))))},dependencies:[Qe.WI,Qe.uX,Qe.ld,t.BC,t.l_,g.ch,M.Sq,M.bT,M.Jj,Ut],encapsulation:2,changeDetection:0}),u})(),Ke=(()=>{class u{}return u.\u0275fac=function(a){return new(a||u)},u.\u0275mod=e.$C({type:u}),u.\u0275inj=e.G2t({imports:[[M.MD,t.X1,Qe.DH,I,Ye,g.qy.forChild({types:[{name:"select",component:gt,wrappers:["form-field"]},{name:"enum",extends:"select"}]})]]}),u})(),Pe=(()=>{class u{}return u.\u0275fac=function(a){return new(a||u)},u.\u0275mod=e.$C({type:u}),u.\u0275inj=e.G2t({imports:[[I,Wn,Vn,Xe,St,Ke]]}),u})();var Re=c(776);function $(u,b){return(0,J.F)((a,h)=>b?b(a[u],h[u]):a[u]===h[u])}const ce={paramKey:!0};class N{constructor(b){this.route=b,this.unSub$=new V.B}postPopulate(b){if(b.fieldGroup||b.fieldArray||!1===(b.props||{...ce}).paramKey||(this.paramKey=this.getParamKey(b),!this.paramKey))return;const h=this.getRouteSub(this.route,b),_=b.hooks?.onDestroy;h&&_&&(b.hooks={...b.hooks,onDestroy:ee=>{h.unsubscribe(),_(ee)}})}getParamKey(b){const a=b.props;if("string"==typeof a.paramKey)return a.paramKey;if(b.key){if("string"==typeof b.key)return b.key;console.warn(`observe-query-param cannot use field key ${JSON.stringify(b.key)} of type ${typeof b.key} to observe a query param. Use prop.paramKey to specify a query param string, or define a string field.key.`)}}getRouteSub(b,a){return b.queryParams.pipe($(this.paramKey),(0,be.Q)(this.unSub$)).subscribe(h=>{const _=a.formControl,ee=h[this.paramKey];if(!ee)return void this.unSub$.next();let ft;try{ft=JSON.parse(ee)}catch(nn){return console.warn(`observe-query-param failed to parse query param ${this.paramKey} for field ${a.id}: ${nn}`),console.warn("Note: Query values are parsed as JSON, therefore enum strings must be enclosed in double-quotes, and numeric entity IDs must be bare, unquoted."),void this.unSub$.next()}if(ft)return Object.keys(ft).length>0&&ft.constructor===Object?(console.warn(`observe-query-param may only set primitive types or arrays of primitive types, param ${this.paramKey} is an object: ${JSON.stringify(ft)}`),void this.unSub$.next()):void _.setValue(ft);this.unSub$.next()})}}function ke(u){return{extensions:[{name:"observeQueryParam",extension:new N(u)}]}}const U={extras:{immutable:!1,lazyRender:!0},validationMessages:[{name:"required",message:"This field is required."},{name:"minLength",message:(u,b)=>`This field has a minimum length of ${b.templateOptions?.minLength}.`},{name:"maxLength",message:(u,b)=>`This field has a maximum length of ${b.templateOptions?.maxLength}.`},{name:"min",message:(u,b)=>`This field has a minimum value of ${b.templateOptions?.min}.`},{name:"max",message:(u,b)=>`This field has a maximum value of ${b.templateOptions?.max}.`},{name:"pattern",message:(u,b)=>`This field's value must fit the pattern ${b.templateOptions?.pattern}.`},{name:"integer",message:(u,b)=>"Value must be an integer."},{name:"nucleotide",message:(u,b)=>"Value must only contain A, C, T, G, and/or /."},{name:"clinvar",message:(u,b)=>"Value must be an integer."}],validators:[{name:"integer",validation:(u,b)=>""===u.value||null==u.value||/^\d+$/.test(u.value)?null:{integer:!0}},{name:"nucleotide",validation:(u,b)=>""===u.value||null==u.value||/^[ACTG\/]+$/.test(u.value)?null:{nucleotide:!0}},{name:"clinvar",validation:(u,b)=>{for(var a of u.value)if(""!==a&&null!=a&&!/^\d+$/.test(a))return{clinvar:!0};return null}}]};var ge=c(4917),qe=c(7391),rt=c(8928),Ft=c(181),on=c(7685),Cn=c(3617),Zn=c(9448);let jn=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,t.X1,g.qy.forChild(),Cn.$,Z.Y3,Qe.DH,F.j,G.PQ,qe.kT,rt.jl,on.pc,Zn.g,Ft._,ge.i]})}return u})();var Gn=c(5699);let zi=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,Z.Y3,Gn.T,ge.i]})}return u})();const Oi=(u,b,a,h)=>({disabled:u,error:b,required:a,valid:h}),lo=(u,b)=>({disabled:u,error:b});function Zi(u,b){if(1&u&&(e.qex(0),e.j41(1,"nz-form-label",6),e.nrm(2,"span",7),e.k0s(),e.bVm()),2&u){const a=e.XpG();e.R7$(),e.Y8G("ngClass",e.l_i(6,lo,a.props.disabled,a.showError))("nzRequired",a.props.required)("nzFor",a.id)("nzTooltipTitle",a.props.tooltip)("nzNoColon",!0),e.R7$(),e.Y8G("nzContent",a.props.label)}}function Bo(u,b){if(1&u&&e.nrm(0,"span",13),2&u){const a=e.XpG(2);e.Y8G("innerHTML",a.props.description,e.npT)}}function bo(u,b){if(1&u&&e.nrm(0,"span",14),2&u){const a=e.XpG(2);e.Y8G("innerHTML",a.props.description,e.npT)}}function Mr(u,b){if(1&u&&e.nrm(0,"span",15),2&u){const a=e.XpG(2);e.Y8G("innerHTML",a.props.description,e.npT)}}function rr(u,b){if(1&u&&(e.j41(0,"div",8),e.qex(1,9),e.DNE(2,Bo,1,1,"span",10)(3,bo,1,1,"span",11)(4,Mr,1,1,"span",12),e.bVm(),e.k0s()),2&u){const a=e.XpG();e.R7$(),e.Y8G("ngSwitch",a.props.extraType),e.R7$(),e.Y8G("ngSwitchCase","prompt"),e.R7$(),e.Y8G("ngSwitchCase","description")}}function lt(u,b){if(1&u&&e.nrm(0,"formly-validation-message",18),2&u){const a=e.XpG(2);e.Y8G("field",a.field)}}function Lt(u,b){if(1&u&&(e.j41(0,"div",16),e.DNE(1,lt,1,1,"formly-validation-message",17),e.k0s()),2&u){const a=e.XpG();e.R7$(),e.Y8G("ngIf",a.props.showErrorTip)}}const $t={};let mn=(()=>{class u extends g.cm{get errorState(){return this.showError?"error":""}constructor(a){super(),this.cdr=a,this.formLayout="vertical",this.wrapperOptions={...$t}}ngOnInit(){this.props.showExtra=this.props.showExtra??!0,this.props.extraType=this.props.extraType??"prompt",this.props.showErrorTip=this.props.showErrorTip??!0,this.props.formFieldOptions&&(this.wrapperOptions={...this.wrapperOptions,...this.props.formFieldOptions}),this.options.formState.formLayout&&(this.formLayout=this.options.formState.formLayout)}ngAfterViewInit(){this.cdr.detectChanges()}static#e=this.\u0275fac=function(h){return new(h||u)(e.rXU(e.gRc))};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["cvc-form-field-wrapper"]],hostVars:6,hostBindings:function(h,_){2&h&&e.AVh("layout-horizontal","horizontal"===_.formLayout)("layout-vertical","vertical"===_.formLayout)("layout-inline","inline"===_.formLayout)},features:[e.Vt3],decls:9,vars:10,consts:[["fieldComponent",""],["descriptionTpl",""],["errorTpl",""],[3,"ngClass"],[4,"ngIf"],[3,"nzExtra","nzValidateStatus","nzErrorTip"],[3,"ngClass","nzRequired","nzFor","nzTooltipTitle","nzNoColon"],["nz-typography","","nzEllipsis","",1,"label",3,"nzContent"],[1,"form-field-description"],[3,"ngSwitch"],["class","extra-prompt",3,"innerHTML",4,"ngSwitchCase"],["class","extra-description",3,"innerHTML",4,"ngSwitchCase"],[3,"innerHTML",4,"ngSwitchDefault"],[1,"extra-prompt",3,"innerHTML"],[1,"extra-description",3,"innerHTML"],[3,"innerHTML"],[1,"cvc-form-field-validation"],[3,"field",4,"ngIf"],[3,"field"]],template:function(h,_){if(1&h&&(e.j41(0,"nz-form-item",3),e.DNE(1,Zi,3,9,"ng-container",4),e.j41(2,"nz-form-control",5),e.eu8(3,null,0),e.k0s()(),e.DNE(5,rr,5,3,"ng-template",null,1,e.C5r)(7,Lt,2,1,"ng-template",null,2,e.C5r)),2&h){const ee=e.sdS(6),ft=e.sdS(8);e.Y8G("ngClass",e.ziG(5,Oi,_.props.disabled,_.showError,_.props.required,"VALID"===_.field.formControl.status&&!0===_.field.formControl.touched)),e.R7$(),e.Y8G("ngIf",_.props.label&&!0!==_.props.hideLabel),e.R7$(),e.Y8G("nzExtra",_.props.showExtra&&!_.showError?ee:void 0)("nzValidateStatus",_.errorState)("nzErrorTip",ft)}},dependencies:[M.YU,M.bT,M.ux,M.e1,M.fG,L.Uq,L.e,G.Ls,G.Mo,G.zS,qe.Di,g.Nc],styles:['.typeahead-match[_ngcontent-%COMP%]{font-weight:700}.hide-dropdown[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%] > nz-form-item[_ngcontent-%COMP%]{border-radius:4px;margin-top:8px;margin-bottom:0}[_nghost-%COMP%] > nz-form-item[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]   span.label[_ngcontent-%COMP%]{color:#096dd9}[_nghost-%COMP%] > nz-form-item[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     span.anticon{margin-left:.25em}[_nghost-%COMP%] > nz-form-item[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     span.anticon path{color:#69c0ff}[_nghost-%COMP%] > nz-form-item[_ngcontent-%COMP%]   .form-row-wrapped[_nghost-%COMP%] > nz-form-item[_ngcontent-%COMP%], .form-row-wrapped   [_nghost-%COMP%] > nz-form-item[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0}[_nghost-%COMP%] > nz-form-item.required[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label:before{border:1px solid #096dd9;height:1em;content:""}[_nghost-%COMP%] > nz-form-item.required[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label span.label{color:#096dd9;font-weight:600}[_nghost-%COMP%] > nz-form-item.required[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label   span.anticon path{color:#40a9ff}[_nghost-%COMP%] > nz-form-item.error[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label:before{border-color:#cf1322}[_nghost-%COMP%] > nz-form-item.error[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label span.label{color:#cf1322}[_nghost-%COMP%] > nz-form-item.error[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label   span.anticon path{color:#ff4d4f}[_nghost-%COMP%] > nz-form-item.valid[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label:before{border-color:#389e0d}[_nghost-%COMP%] > nz-form-item.valid[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label span.label{color:#389e0d}[_nghost-%COMP%] > nz-form-item.valid[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label   span.anticon path{color:#73d13d}[_nghost-%COMP%] > nz-form-item.disabled[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label:before{border-color:#00000073}[_nghost-%COMP%] > nz-form-item.disabled[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label span.label{color:#00000073}[_nghost-%COMP%] > nz-form-item.disabled[_ngcontent-%COMP%] > nz-form-label[_ngcontent-%COMP%]     label   span.anticon path{color:#d9d9d9}.layout-vertical[_nghost-%COMP%] > nz-form-item[_ngcontent-%COMP%]{background-color:#e6f7ff;border:1px solid #e6f7ff;padding:4px 8px}.layout-vertical[_nghost-%COMP%] > nz-form-item.required[_ngcontent-%COMP%]{background-color:#e6f7ff;border:1px solid #69c0ff}.layout-vertical[_nghost-%COMP%] > nz-form-item.error[_ngcontent-%COMP%]{background-color:#fff1f0;border:1px solid #ff7875}.layout-vertical[_nghost-%COMP%] > nz-form-item.valid[_ngcontent-%COMP%]{background-color:#f6ffed;border:1px solid #95de64}.layout-vertical[_nghost-%COMP%] > nz-form-item.disabled[_ngcontent-%COMP%]{background-color:#f5f5f5;border:1px solid #f5f5f5}.cvc-form-field-validation[_ngcontent-%COMP%], .form-field-description[_ngcontent-%COMP%]{min-height:16px;line-height:1.2;margin-top:4px}.cvc-form-field-validation[_ngcontent-%COMP%]   .extra-prompt[_ngcontent-%COMP%], .form-field-description[_ngcontent-%COMP%]   .extra-prompt[_ngcontent-%COMP%]{font-weight:400}.cvc-form-field-validation[_ngcontent-%COMP%]   .extra-description[_ngcontent-%COMP%], .form-field-description[_ngcontent-%COMP%]   .extra-description[_ngcontent-%COMP%]{font-style:oblique}.cvc-form-field-validation[_ngcontent-%COMP%]{font-weight:600}'],changeDetection:0})}return u})();var hn=c(5154);const Yn={wrappers:[{name:"form-field",component:mn}]};let En=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,t.X1,G.PQ,hn.Qt,qe.kT,g.qy.forChild(Yn)]})}return u})();var Kn=c(513),oi=c(2096),gi=c(1236),ro=c(896),vi=c(1635),pn=c(9894),$i=c(4608);function Mi(){let u=class w4 extends g.PU{configureBaseField(){this.field?.options?.fieldChanges?(this.onModelChange$=this.field.options.fieldChanges.pipe((0,qt.p)(a=>a.field.id===this.field.id),(0,$i.E)("value")),this.formControl.value?(this.onValueChange$=new dn.t(this.formControl.value),Array.isArray(this.formControl.value)?this.field.formControl.value.length>0&&this.formControl.markAsTouched():this.formControl.markAsTouched()):this.onValueChange$=new dn.t(void 0),this.onModelChange$.pipe((0,pn.s)(this)).subscribe(a=>{this.onValueChange$.next(a)}),this.field.options?.formState&&this.field.options.formState.fields&&(this.state=this.field.options.formState,this.autoConfigureStateValueChanges())):console.error(`${this.field.id} could not find its fieldChanges Observable, ensure configureBaseField() is called in this field's AfterViewInit hook.`)}autoConfigureStateValueChanges(){!this.field.key&&"string"==typeof this.field.key&&console.warn(`${this.field.id} cannot auto-configure state value changes, as its field key is not a string. field.key: `,this.field.key);const a=`${this.field.key}$`;this.state&&this.state.fields[a]?(this.stateValueChange$=this.state.fields[a],this.onValueChange$.pipe((0,me.T)(h=>null===h?void 0:h),(0,pn.s)(this)).subscribe(h=>{this.stateValueChange$&&this.stateValueChange$.next(h)})):console.warn(`${this.field.id} could not find state field ${a} on form state. State: `,this.state)}static#e=this.\u0275fac=(()=>{let a;return function(_){return(a||(a=e.xGo(w4)))(_||w4)}})();static#t=this.\u0275prov=e.jDH({token:w4,factory:w4.\u0275fac})};return u=(0,vi.Cg)([(0,pn.d)()],u),u}var Ni=c(2771),so=c(5245),Yi=c(3993),Xo=c(7673),Ki=c(2806),Zo=c(3226),pr=c(9030),fo=c(9199),po=c(4572);function fr(...u){let b=u[0],a=u[1];if(0===b.length)return(0,Xo.of)(a?a([]):[]);const h=b.slice();return a&&h.push((..._)=>a(_)),po.z.apply(null,h)}function $o(){return function(b){return(()=>{class h extends b{configureEntitySelectField(ee){if(this.typeaheadQuery=ee.typeaheadQuery,this.tagQuery=ee.tagQuery,this.getTypeaheadVars=ee.getTypeaheadVarsFn,this.getTypeahedResults=ee.getTypeaheadResultsFn,this.getTagQueryVars=ee.getTagQueryVarsFn,this.getTagQueryResults=ee.getTagQueryResultsFn,this.getSelectedItemOption=ee.getSelectedItemOptionFn,this.getSelectOptions=ee.getSelectOptionsFn,this.typeaheadParam$=ee.typeaheadParam$,this.typeaheadParamName$=ee.typeaheadParamName$,this.selectOpen$=ee.selectOpen$||new Ni.m,this.selectComponent=ee.selectComponent,this.minSearchStrLength=ee.minSearchStrLength||0,this.cdr=ee.changeDetectorRef,this.onSearch$=new dn.t(void 0),this.isLoading$=new Un.c,this.result$=new dn.t([]),this.onPopulate$=new V.B,this.onTagClose$=new V.B,this.onOpenChange$=new V.B,this.onCreate$=new V.B,this.selectOption$=new dn.t(void 0),this.response$=this.onSearch$.pipe((0,so.i)(1),(0,qt.p)(fo.kP),(0,qt.p)(ft=>0===this.minSearchStrLength||ft.length>=this.minSearchStrLength),(0,Yi.E)(void 0!==this.typeaheadParam$?this.typeaheadParam$:(0,Xo.of)(void 0)),(0,he.n)(([ft,nn])=>{const Rn=this.getTypeaheadVars(ft,nn),xi=jo=>(this.queryRef=this.typeaheadQuery.watch(jo),this.isLoading$=this.queryRef.valueChanges.pipe((0,$i.E)("loading"),(0,J.F)()),this.queryRef.valueChanges),Co=jo=>(0,Ki.H)(this.queryRef.refetch(jo));return(0,Zo.T)(()=>void 0===this.queryRef,(0,pr.v)(()=>xi(Rn)),(0,pr.v)(()=>Co(Rn)))})),this.onOpenChange$.subscribe(ft=>{ft&&this.onSearch$.next("")}),this.response$.pipe((0,qt.p)(ft=>void 0!==ft.data),(0,me.T)(ft=>this.getTypeahedResults(ft)),(0,pn.s)(this)).subscribe(ft=>{this.result$.next(ft),0===ft.length&&this.selectOption$.next([]),this.cdr.detectChanges()}),this.optionTemplates?this.optionTemplates.changes.pipe((0,Yi.E)(this.result$),(0,pn.s)(this)).subscribe(([ft,nn])=>{const Rn=this.getSelectOptions(nn,ft);this.selectOption$.next(Rn),this.cdr.detectChanges()}):(console.warn(`${this.field.id} could not find reference to optionTemplates ViewChildren, options will only show entity name text.`),this.result$.pipe((0,pn.s)(this)).subscribe(ft=>{this.selectOption$.next(ft.map(nn=>({label:nn.name,value:nn.id})))})),this.onPopulate$.pipe((0,qt.p)(fo.kP),(0,he.n)(ft=>fr(this.getTagQueries(ft))),(0,me.T)(ft=>ft.map(nn=>this.getTagQueryResults(nn))),(0,On.M)(ft=>{this.result$.next(ft)}),(0,pn.s)(this)).subscribe(ft=>{let nn;if(this.field.props&&this.field.props.isMultiSelect){const Rn=[];ft.forEach(xi=>Rn.push(xi?.id||void 0)),nn=Rn}else nn=ft[0].id;this.formControl.setValue(nn),this.selectOpen$.next(!1)}),this.formControl.value){const ft=this.formControl.value;if(Object.keys(ft).length>0&&ft.constructor===Object)return void console.error(`${this.field.id} prepopulated value must be a primitive or array of primitives, value is an object:`,ft);this.onPopulate$.next(ft)}this.onTagClose$.pipe((0,pn.s)(this)).subscribe(ft=>{this.resetField()})}getTagQueries(ee){return"number"==typeof ee&&(ee=[ee]),ee.map(nn=>this.tagQuery.fetch(this.getTagQueryVars(nn),{fetchPolicy:"cache-first"}).pipe((0,qt.p)(Rn=>!!Rn.data)))}resetField(){this.formControl.setValue(void 0),this.result$&&this.result$.next([])}static#e=this.\u0275fac=(()=>{let ee;return function(nn){return(ee||(ee=e.xGo(h)))(nn||h)}})();static#t=this.\u0275prov=e.jDH({token:h,factory:h.\u0275fac})}return h})()}}const qi=function Lr(u){for(var b=arguments.length,a=new Array(b>1?b-1:0),h=1;h<b;h++)a[h-1]=arguments[h];return a.reduce(function(_,ee){return ee(_)},u)};var xn=c(9145),Ci=c(1774),Sr=c(3386),es=c(3236),us=c(4668);const qo=()=>[],Gs=(u,b,a)=>({$implicit:u,createMsg:b,model:a});function tt(u,b){1&u&&e.nrm(0,"span",5),2&u&&e.Y8G("nzType","loading")}function Ce(u,b){if(1&u&&(e.DNE(0,tt,1,1,"span",4),e.qex(1),e.EFF(2),e.bVm()),2&u){const a=e.XpG().ngrxLet;e.Y8G("ngIf",a.showSpinner),e.R7$(2),e.SpI(" ",a.message," ")}}function Ve(u,b){if(1&u&&(e.nrm(0,"nz-divider"),e.j41(1,"div",6),e.eu8(2,7),e.k0s()),2&u){const a=e.XpG().ngrxLet,h=e.XpG();e.R7$(2),e.Y8G("ngTemplateOutlet",h.cvcAddEntity)("ngTemplateOutletContext",e.sMw(2,Gs,a.searchStr,a.message,h.cvcAddEntityModel))}}function nt(u,b){if(1&u){const a=e.RV6();e.qex(0),e.j41(1,"nz-select",3),e.bIt("nzOpenChange",function(_){e.eBV(a);const ee=e.XpG();return e.Njj(ee.onOpenChange$.next(_))})("nzOnSearch",function(_){e.eBV(a);const ee=e.XpG();return e.Njj(ee.cvcOnSearch.next(_))})("ngModelChange",function(_){e.eBV(a);const ee=e.XpG();return e.Njj(ee.cvcOnModelChange.next(_))}),e.k0s(),e.DNE(2,Ce,3,2,"ng-template",null,0,e.C5r)(4,Ve,3,6,"ng-template",null,1,e.C5r),e.bVm()}if(2&u){const a=b.ngrxLet,h=e.sdS(3),_=e.sdS(5),ee=e.XpG();e.R7$(),e.AVh("ng-dirty",ee.cvcShowError),e.Y8G("nzDropdownMatchSelectWidth",!0)("formControl",ee.cvcFormControl)("formlyAttributes",ee.cvcFormlyAttributes)("nzMode",ee.cvcSelectMode)("nzPlaceHolder",ee.cvcPlaceholder||"Search "+ee.cvcEntityName.plural)("nzCustomTemplate",ee.cvcCustomTemplate||null)("nzOptionHeightPx",30)("nzDisabled",ee.cvcDisabled)("nzLoading",ee.cvcLoading)("nzAllowClear",ee.cvcAllowClear)("nzBorderless",ee.cvcBorderless)("nzSuffixIcon",ee.cvcSuffixIcon)("nzShowArrow",ee.cvcShowArrow)("nzAutoClearSearchValue",ee.cvcAutoClearSearchValue)("nzOptions",ee.cvcOptions||e.lJ4(20,qo))("nzDropdownRender",a.showAddForm?_:null)("nzNotFoundContent",h)("nzOpen",ee.cvcSelectOpen)}}const Mt={search:(u,b,a)=>`Searching ${u} matching "${b}"...`,searchAll:(u,b,a)=>`Listing all ${u}...`,searchParam:(u,b,a)=>`Searching ${a} ${u} matching "${b}"...`,searchParamAll:(u,b,a)=>`Listing all ${a} ${u}...`,searchEnterQuery:(u,b,a,h)=>`Enter at least ${h} characters to search ${a} ${u}`,searchEnterQueryAll:(u,b,a,h)=>`Enter at least least ${h} characters to search ${u}`,empty:(u,b,a)=>`No ${u} found matching "${b}"`,emptyAll:(u,b,a)=>`No ${u} found.`,emptyParam:(u,b,a)=>`No ${a} ${u} found matching "${b}"`,emptyParamAll:(u,b,a)=>`No ${a} ${u} found`};let Wt=class O8{constructor(){this.cvcEntityName={singular:"Entity",plural:"Entities"},this.cvcSelectMode="default",this.cvcLoading=!1,this.cvcOptions=void 0,this.cvcShowError=!1,this.cvcDisabled=!1,this.cvcAllowClear=!0,this.cvcBorderless=!1,this.cvcShowArrow=!1,this.cvcAutoClearSearchValue=!0,this.cvcSuffixIcon="search",this.cvcCustomTemplate=null,this.cvcAddEntity=null,this.cvcMinSearchStrLength=0,this.cvcAddEntityBehavior=(b,a)=>b.length>this.cvcMinSearchStrLength&&0===a.length,this.cvcOnOpenChange=new e.bkB,this.cvcOnSearch=(new e.bkB).pipe((0,Sr.c)(300,es.E,{leading:!1,trailing:!0}),(0,us.t)(1)),this.cvcOnModelChange=new e.bkB,this.cvcSelectComponent=new e.bkB,this.messageOptions=Mt,this.onParamName$=new dn.t(void 0),this.onOption$=new dn.t([]),this.onOpenChange$=new dn.t(!1),this.onLoading$=new dn.t(!1),this.notFoundDisplay$=new dn.t({searchStr:"",showSpinner:!0,showAddForm:!1,message:`Searching ${this.cvcEntityName.plural}...`}),this.previousIsOpen=!1}ngAfterViewInit(){this.cvcSelectMessages&&(this.messageOptions={...this.messageOptions,...this.cvcSelectMessages}),this.nzSelectComponent?(this.cvcSelectComponent.next(this.nzSelectComponent),this.onOpenChange$.pipe((0,pn.s)(this)).subscribe(b=>{this.cvcOnOpenChange.next(b)}),(0,po.z)([this.onOpenChange$,this.cvcOnSearch,this.onParamName$,this.onOption$,this.onLoading$.pipe((0,J.F)())]).pipe((0,me.T)(([b,a,h,_,ee])=>{const ft=this.cvcEntityName.plural,nn=this.cvcMinSearchStrLength,Rn=null!==this.cvcAddEntity,xi=!1===this.previousIsOpen&&!0===b;if(this.previousIsOpen=b,xi)return this.getSelectInitDisplay(ft,nn,h);if(ee&&a.length>=nn){const Co=this.cvcAddEntityBehavior(a,this.cvcResults||[]);return this.getSelectSearchingDisplay(a,ft,nn,h,Rn,Co)}return b&&!ee&&a.length>=nn&&0===_.length?this.getSelectEmptyDisplay(a,ft,h,Rn):{searchStr:"",showSpinner:!1,showAddForm:Rn&&this.cvcAddEntityBehavior(a,this.cvcResults||[]),message:""}}),(0,On.M)(b=>{this.notFoundDisplay$.next(b)}),(0,pn.s)(this)).subscribe()):console.error(`${this.cvcEntityName.singular} entity-select could not gain reference to its nzSelectComponent, aborting AfterViewInit()`)}getSelectInitDisplay(b,a,h){let _=this.messageOptions.searchAll,ee=!1;return 0==a?(ee=!0,_=void 0===h?this.messageOptions.searchAll:this.messageOptions.searchParamAll):a>0&&(ee=!1,_=void 0===h?this.messageOptions.searchEnterQueryAll:this.messageOptions.searchEnterQuery),{message:_(b,"",h,a),showSpinner:ee,showAddForm:!1,searchStr:""}}getSelectSearchingDisplay(b,a,h,_,ee,ft=!1){let nn=this.messageOptions.searchAll;return nn=void 0===_?b.length>0?this.messageOptions.search:this.messageOptions.searchAll:b.length>0?this.messageOptions.searchParam:this.messageOptions.searchParamAll,{message:nn(a,b,_),showSpinner:!0,showAddForm:ee&&ft,searchStr:b}}getSelectEmptyDisplay(b,a,h,_){let ee=this.messageOptions.empty;return ee=void 0===h?b.length>0?this.messageOptions.empty:this.messageOptions.emptyAll:b.length>0?this.messageOptions.emptyParam:this.messageOptions.emptyParamAll,{message:ee(a,b,h),showSpinner:!1,showAddForm:_,searchStr:b}}ngOnChanges(b){if(b.cvcParamName&&this.onParamName$.next(b.cvcParamName.currentValue),b.cvcOptions){const a=b.cvcOptions.currentValue;void 0!==a&&this.onOption$.next(a)}if(b.cvcLoading){const a=b.cvcLoading.currentValue;void 0!==a&&this.onLoading$.next(a)}}static#e=this.\u0275fac=function(a){return new(a||O8)};static#t=this.\u0275cmp=e.VBU({type:O8,selectors:[["cvc-entity-select"]],viewQuery:function(a,h){if(1&a&&e.GBs(Qe.WI,5),2&a){let _;e.mGM(_=e.lsd())&&(h.nzSelectComponent=_.first)}},inputs:{cvcFormControl:"cvcFormControl",cvcFormlyAttributes:"cvcFormlyAttributes",cvcEntityName:"cvcEntityName",cvcSelectMessages:"cvcSelectMessages",cvcSelectMode:"cvcSelectMode",cvcPlaceholder:"cvcPlaceholder",cvcLoading:"cvcLoading",cvcOptions:"cvcOptions",cvcResults:"cvcResults",cvcShowError:"cvcShowError",cvcDisabled:"cvcDisabled",cvcAllowClear:"cvcAllowClear",cvcBorderless:"cvcBorderless",cvcShowArrow:"cvcShowArrow",cvcAutoClearSearchValue:"cvcAutoClearSearchValue",cvcSuffixIcon:"cvcSuffixIcon",cvcCustomTemplate:"cvcCustomTemplate",cvcParamName:"cvcParamName",cvcAddEntity:"cvcAddEntity",cvcAddEntityModel:"cvcAddEntityModel",cvcMinSearchStrLength:"cvcMinSearchStrLength",cvcAddEntityBehavior:"cvcAddEntityBehavior",cvcSelectOpen:"cvcSelectOpen"},outputs:{cvcOnOpenChange:"cvcOnOpenChange",cvcOnSearch:"cvcOnSearch",cvcOnModelChange:"cvcOnModelChange",cvcSelectComponent:"cvcSelectComponent"},features:[e.OA$],decls:1,vars:1,consts:[["searchMessages",""],["addForm",""],[4,"ngrxLet"],["nzShowSearch","","nzServerSearch","","nzAllowClear","",3,"nzOpenChange","nzOnSearch","ngModelChange","nzDropdownMatchSelectWidth","formControl","formlyAttributes","nzMode","nzPlaceHolder","nzCustomTemplate","nzOptionHeightPx","nzDisabled","nzLoading","nzAllowClear","nzBorderless","nzSuffixIcon","nzShowArrow","nzAutoClearSearchValue","nzOptions","nzDropdownRender","nzNotFoundContent","nzOpen"],["nz-icon","",3,"nzType",4,"ngIf"],["nz-icon","",3,"nzType"],[1,"add-form-container"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(a,h){1&a&&e.DNE(0,nt,6,21,"ng-container",2),2&a&&e.Y8G("ngrxLet",h.notFoundDisplay$)},dependencies:[M.bT,M.T3,t.BC,t.l_,Ci.Nj,g.ch,Z.Dn,Qe.WI,Zn.j],styles:["nz-divider[_ngcontent-%COMP%]{margin:4px 0 0}.add-form-container[_ngcontent-%COMP%]{padding:4px 8px 8px}"],changeDetection:0})};Wt=(0,vi.Cg)([(0,pn.d)({arrayName:"stateSubscriptions"})],Wt);var tn=c(2688);const rn=["optionTemplates"];function bn(u,b){if(1&u&&(e.qex(0),e.j41(1,"em")(2,"span",6),e.EFF(3),e.k0s()(),e.bVm()),2&u){const a=e.XpG(2).$implicit;e.R7$(3),e.JRh(a.description)}}function Mn(u,b){if(1&u&&(e.j41(0,"nz-tag",5),e.EFF(1),e.k0s(),e.j41(2,"span",6),e.DNE(3,bn,4,1,"ng-container",7),e.k0s()),2&u){const a=e.XpG().$implicit;e.R7$(),e.JRh(a.code),e.R7$(2),e.Y8G("ngIf",a.description)}}function Ln(u,b){1&u&&(e.qex(0),e.DNE(1,Mn,4,2,"ng-template",null,1,e.C5r),e.bVm())}function wn(u,b){if(1&u&&(e.qex(0),e.DNE(1,Ln,3,0,"ng-container",4),e.nI1(2,"ngrxPush"),e.bVm()),2&u){const a=e.XpG();e.R7$(),e.Y8G("ngForOf",e.bMT(2,1,a.result$))}}function Qn(u,b){if(1&u){const a=e.RV6();e.j41(0,"div",8)(1,"cvc-entity-tag",9),e.bIt("cvcOnClose",function(){const _=e.eBV(a).$implicit,ee=e.XpG();return e.Njj(ee.onTagClose$.next(_.nzValue))}),e.k0s()()}if(2&u){const a=b.$implicit,h=e.XpG();e.R7$(),e.Y8G("cvcDisableLink",!0)("cvcHasTooltip",!0)("cvcCacheId","AcmgCode:"+a.nzValue)("cvcContext",h.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",h.props.isMultiSelect?"default":"closeable")}}const qn=qi(Mi(),$o());let pi=(()=>{class u extends qn{constructor(a,h,_){super(),this.taq=a,this.tq=h,this.changeDetectorRef=_,this.defaultOptions={props:{entityName:{singular:"ACMG/AMP Code",plural:"ACMG/AMP Codes"},isMultiSelect:!1,requireType:!0,tooltip:"If applicable, please provide evidence criteria from the standards and guidelines for interpretation of sequence variants from ACMG/AMP.",placeholder:"Search ACMG/AMP Codes",requireTypePromptFn:(ee,ft)=>`Select an ${ee} Type to search associated ACMG Code(s)`}},this.placeholder$=new dn.t(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectComponent:this.selectComponent}),this.configurePlaceholders()}configureStateConnections(){if(this.state&&(this.stateEntityName=this.state.entityName,this.state.requires.requiresAcmgCodes$?this.onRequiresAcmgCode$=this.state.requires.requiresAcmgCodes$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresAcmgCodes$ subject to attach.`),this.props.requireType)){const a=`${this.stateEntityName.toLowerCase()}Type$`;this.state.fields[a]?this.onEntityType$=this.state.fields[a]:console.error(`${this.field.id} requireType is true, however form state does not provide Subject ${a}.`)}}configurePlaceholders(){this.placeholder$.next(this.props.placeholders),this.onRequiresAcmgCode$&&this.onEntityType$&&(0,po.z)([this.onRequiresAcmgCode$,this.onEntityType$]).pipe((0,J.F)(),(0,pn.s)(this)).subscribe(([a,h])=>{!a&&h?(this.props.required=!1,this.props.disabled=!0,this.props.description=`${(0,ro.u)(h)} ${this.state.entityName} does not include associated ACMG/AMP Code(s)`,this.props.extraType="prompt",this.resetField(),this.cdr.markForCheck()):this.props.requireType&&!h?(this.props.required=!1,this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName,this.props.isMultiSelect),this.props.extraType="prompt"):a?(this.props.required=!0,this.props.disabled=!1,this.props.description='Please provide evidence criteria from the standards and guidelines for interpretation of sequence variants from ACMG/AMP in <a href="https://pubmed.ncbi.nlm.nih.gov/25741868/" target="_blank">Richards et. al. 2015</a>. Review all codes and select each one that applies. If a code is not applied, it is inferred to not be met.',this.props.extraType="description"):(!a&&this.formControl.value||this.props.requireType&&!h&&this.formControl.value)&&this.resetField()})}getTypeaheadVarsFn(a){return{code:a}}getTypeaheadResultsFn(a){return a.data.acmgCodesTypeahead}getTagQueryResultsFn(a){return a.data.acmgCode}getTagQueryVarsFn(a){return{id:a}}getSelectedItemOptionFn(a){return{value:a.id,label:a.code}}getSelectOptionsFn(a,h){return a.map((_,ee)=>(console.log(_),{label:h.get(ee)||_.code,value:_.id}))}static#e=this.\u0275fac=function(h){return new(h||u)(e.rXU(xn.Fd4),e.rXU(xn.Mvn),e.rXU(e.gRc))};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["cvc-acmg-code-select"]],viewQuery:function(h,_){if(1&h&&e.GBs(rn,5,e.C4Q),2&h){let ee;e.mGM(ee=e.lsd())&&(_.optionTemplates=ee)}},features:[e.Vt3],decls:9,vars:22,consts:[["selectedTemplate",""],["optionTemplates",""],[3,"cvcOnSearch","cvcOnOpenChange","cvcOnModelChange","cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading"],[4,"ngrxLet"],[4,"ngFor","ngForOf"],["nz-tooltip",""],["nz-typography","","nzType","secondary"],[4,"ngIf"],[1,"ant-select-selection-item-content"],[3,"cvcOnClose","cvcDisableLink","cvcHasTooltip","cvcCacheId","cvcContext","cvcMode"]],template:function(h,_){if(1&h){const ee=e.RV6();e.j41(0,"cvc-entity-select",2),e.nI1(1,"ngrxPush"),e.nI1(2,"ngrxPush"),e.nI1(3,"ngrxPush"),e.nI1(4,"ngrxPush"),e.nI1(5,"ngrxPush"),e.bIt("cvcOnSearch",function(nn){return e.eBV(ee),e.Njj(_.onSearch$.next(nn))})("cvcOnOpenChange",function(nn){return e.eBV(ee),e.Njj(_.onOpenChange$?_.onOpenChange$.next(nn):null)})("cvcOnModelChange",function(nn){return e.eBV(ee),e.Njj(_.props.change&&_.props.change(_.field,nn))}),e.k0s(),e.DNE(6,wn,3,3,"ng-container",3)(7,Qn,2,5,"ng-template",null,0,e.C5r)}if(2&h){const ee=e.sdS(8);e.Y8G("cvcSelectMode",_.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",ee)("cvcFormControl",_.formControl)("cvcFormlyAttributes",_.field)("cvcEntityName",_.props.entityName)("cvcPlaceholder",e.bMT(1,12,_.placeholder$))("cvcResults",e.bMT(2,14,_.result$))("cvcOptions",e.bMT(3,16,_.selectOption$))("cvcShowError",_.showError)("cvcDisabled",_.onRequiresAcmgCode$&&!e.bMT(4,18,_.onRequiresAcmgCode$))("cvcLoading",e.bMT(5,20,_.isLoading$)),e.R7$(6),e.Y8G("ngrxLet",_.onSearch$)}},dependencies:[M.Sq,M.bT,Ci.Nj,hn.LH,qe.Di,Gn.s,Wt,tn.b,Ci.L9],changeDetection:0})}return u})();const ei={types:[{name:"acmg-code-select",wrappers:["form-field"],component:pi,defaultOptions:{props:{label:"ACMG/AMP Code"}}},{name:"acmg-code-multi-select",wrappers:["form-field"],component:pi,defaultOptions:{props:{isMultiSelect:!0,label:"ACMG/AMP Code(s)"}}}]};let li=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,t.X1,g.qy.forChild(ei),Cn.$,Kn.Zw,Qe.DH,gi.MC,oi.U6,Z.Y3,F.j,L.f3,hn.Qt,on.pc,G.PQ,rt.jl,qe.kT,Gn.T,En,jn,ge.i,Ft._,zi]})}return u})(),ci=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,t.X1,g.qy.forChild(),Z.Y3,G.PQ,Qe.DH,F.j,ge.i]})}return u})();function mi(){return function(b){return(()=>{class h extends b{configureEnumSelectField(ee){this.selectOption$=new dn.t([]),this.onTagClose$=new V.B,this.optionEnum$=ee.optionEnum$,this.changeDetectorRef=ee.changeDetectorRef,this.optionTemplate$=ee.optionTemplate$?ee.optionTemplate$:new dn.t([]),this.optionTemplate$.pipe((0,Yi.E)(this.optionEnum$),(0,pn.s)(this)).subscribe(ft=>{this.emitSelectOptions(ft)}),this.onTagClose$.pipe((0,pn.s)(this)).subscribe(ft=>{this.resetField()})}emitSelectOptions([ee,ft]){this.selectOption$.next(ft.map((nn,Rn)=>({label:ee[Rn]||nn,value:nn}))),this.changeDetectorRef?this.changeDetectorRef.detectChanges():console.error(`${this.field.id}'s configureEnumTagField() requires valid ChangeDetectorRef option, none detected.`)}resetField(){this.formControl.setValue(this.props.isMultiSelect?[]:void 0)}static#e=this.\u0275fac=(()=>{let ee;return function(nn){return(ee||(ee=e.xGo(h)))(nn||h)}})();static#t=this.\u0275prov=e.jDH({token:h,factory:h.\u0275fac})}return h})()}}var Ei=c(1018);const Xi=()=>[];let Si=(()=>{class u{constructor(){this.cvcSelectMode="default",this.cvcPlaceholder="Select an option",this.cvcOptions=[],this.cvcShowError=!1,this.cvcDisabled=!1,this.cvcAllowClear=!0,this.cvcCustomTemplate=null,this.cvcOnFocus=new e.bkB}static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["cvc-enum-select"]],inputs:{cvcFormControl:"cvcFormControl",cvcFormlyAttributes:"cvcFormlyAttributes",cvcSelectMode:"cvcSelectMode",cvcPlaceholder:"cvcPlaceholder",cvcOptions:"cvcOptions",cvcShowError:"cvcShowError",cvcDisabled:"cvcDisabled",cvcAllowClear:"cvcAllowClear",cvcModelChange:"cvcModelChange",cvcCustomTemplate:"cvcCustomTemplate"},outputs:{cvcOnFocus:"cvcOnFocus"},decls:1,vars:12,consts:[[3,"nzFocus","ngModelChange","formControl","formlyAttributes","nzMode","nzPlaceHolder","nzOptions","nzCustomTemplate","nzOptionHeightPx","nzDisabled","nzAllowClear"]],template:function(h,_){1&h&&(e.j41(0,"nz-select",0),e.bIt("nzFocus",function(){return _.cvcOnFocus.next()})("ngModelChange",function(ft){return _.cvcModelChange&&_.cvcModelChange(_.cvcFormlyAttributes,ft)}),e.k0s()),2&h&&(e.AVh("ng-dirty",_.cvcShowError),e.Y8G("formControl",_.cvcFormControl)("formlyAttributes",_.cvcFormlyAttributes)("nzMode",_.cvcSelectMode)("nzPlaceHolder",_.cvcPlaceholder?_.cvcPlaceholder:"Select Value")("nzOptions",_.cvcOptions?_.cvcOptions:e.lJ4(11,Xi))("nzCustomTemplate",_.cvcCustomTemplate?_.cvcCustomTemplate:null)("nzOptionHeightPx",30)("nzDisabled",_.cvcDisabled)("nzAllowClear",_.cvcAllowClear))},dependencies:[t.BC,t.l_,g.ch,Qe.WI],changeDetection:0})}return u})();var eo=c(463);const ao=["optionTemplates"];function io(u,b){if(1&u&&(e.j41(0,"nz-tag")(1,"strong"),e.EFF(2),e.nI1(3,"formatAmp"),e.k0s()(),e.j41(4,"span",4),e.EFF(5),e.k0s()),2&u){const a=e.XpG().$implicit,h=e.XpG();e.R7$(2),e.JRh(e.i5U(3,2,a,"verbose")),e.R7$(3),e.JRh(h.descriptionForCategory(a))}}function An(u,b){1&u&&(e.qex(0),e.DNE(1,io,6,5,"ng-template",null,1,e.C5r),e.bVm())}function _o(u,b){if(1&u){const a=e.RV6();e.j41(0,"nz-tag",8),e.bIt("nzOnClose",function(_){e.eBV(a);const ee=e.XpG(2);return e.Njj(ee.onTagClose$.next(_))}),e.j41(1,"strong"),e.EFF(2),e.nI1(3,"formatAmp"),e.k0s()()}if(2&u){const a=e.XpG().$implicit;e.R7$(2),e.JRh(e.i5U(3,1,a.nzValue,"verbose"))}}function ir(u,b){if(1&u&&(e.qex(0),e.EFF(1),e.nI1(2,"formatAmp"),e.bVm()),2&u){const a=e.XpG().$implicit;e.R7$(),e.SpI(" ",e.i5U(2,1,a.nzValue,"verbose")," ")}}function Ur(u,b){if(1&u&&(e.j41(0,"div",5),e.DNE(1,_o,4,4,"nz-tag",6)(2,ir,3,4,"ng-container",7),e.k0s()),2&u){const a=e.XpG();e.R7$(),e.Y8G("ngIf",!a.props.isMultiSelect),e.R7$(),e.Y8G("ngIf",a.props.isMultiSelect)}}const Do=new Map([[xn.XJ.Na,"Not Applicable"],[xn.XJ.TierILevelA,"Biomarkers showing therapeutic response to FDA-approved therapy, or therapy included in professional guidelines."],[xn.XJ.TierILevelB,"Biomarkers showing therapeutic response based on well-powered studies with consensus from experts in the field."],[xn.XJ.TierIiLevelC,"FDA-approved therapies for different tumor types or investigational therapies, or multiple small published studies with some consensus."],[xn.XJ.TierIiLevelD,"Biomarkers that show plausible therapeutic significance based on preclinical studies."],[xn.XJ.TierIii,"Somatic variants in cancer genes reported in the same or different cancer types with unknown clinical significance and variants in cancer genes that have not been reported in any cancers."],[xn.XJ.TierIv,"Benign or likely benign germline variants observed at significant allele frequencies in the general population or specific subpopulation."]]),Qo=qi(Mi(),mi());let Dr=(()=>{class u extends Qo{constructor(a){super(),this.cdr=a,this.defaultOptions={props:{label:"AMP/ASCO/CAP Category",required:!1,isMultiSelect:!1,placeholder:"Select AMP/ASCO/CAP Category"}},this.ampCategoryEnum$=new dn.t([])}descriptionForCategory(a){return Do.get(a)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.ampCategoryEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr}),this.configurePlaceholder()}configureStateConnections(){this.props.tooltip="If applicable, please provide the AMP/ASCO/CAP somatic variant classification.",this.ampCategoryEnum$.next((0,Ei.KF)(xn.XJ).map(a=>a)),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,me.T)(a=>a.map(h=>h))),this.state&&(this.state.requires.requiresAmpLevel$?this.onRequiresAmpCategory$=this.state.requires.requiresAmpLevel$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresAmpLevel$ subject to attach.`),this.onValueChange$.pipe((0,pn.s)(this)).subscribe(a=>{a?(this.props.extraType=void 0,this.props.description=Do.get(a)):this.props.description="Select an Assertion Type to select its AMP Category"}))}configurePlaceholder(){this.placeholder$=new dn.t(this.props.placeholder),this.onRequiresAmpCategory$&&this.onRequiresAmpCategory$.pipe((0,J.F)(),(0,pn.s)(this)).subscribe(a=>{this.props.extraType=void 0,a?(this.formControl.value||(this.props.extraType="description",this.props.description='Please provide the AMP/ASCO/CAP <a href="https://pubmed.ncbi.nlm.nih.gov/27993330/" target="_blank">somatic variant classification</a>.'),this.props.required=!0,this.props.disabled=!1):(this.props.required=!1,this.props.disabled=!0,this.resetField()),this.cdr.markForCheck()})}static#e=this.\u0275fac=function(h){return new(h||u)(e.rXU(e.gRc))};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["cvc-amp-category-select"]],viewQuery:function(h,_){if(1&h&&e.GBs(ao,5,e.C4Q),2&h){let ee;e.mGM(ee=e.lsd())&&(_.optionTemplates=ee)}},features:[e.Vt3],decls:7,vars:15,consts:[["selectedTemplate",""],["optionTemplates",""],[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],["nz-typography","","nzType","secondary"],[1,"ant-select-selection-item-content"],["nzMode","closeable",3,"nzOnClose",4,"ngIf"],[4,"ngIf"],["nzMode","closeable",3,"nzOnClose"]],template:function(h,_){if(1&h&&(e.nrm(0,"cvc-enum-select",2),e.nI1(1,"ngrxPush"),e.nI1(2,"ngrxPush"),e.DNE(3,An,3,0,"ng-container",3),e.nI1(4,"ngrxPush"),e.DNE(5,Ur,3,2,"ng-template",null,0,e.C5r)),2&h){const ee=e.sdS(6);e.Y8G("cvcFormControl",_.formControl)("cvcFormlyAttributes",_.field)("cvcSelectMode",_.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.bMT(1,9,_.placeholder$))("cvcCustomTemplate",ee)("cvcOptions",e.bMT(2,11,_.selectOption$))("cvcShowError",_.showError)("cvcDisabled",_.props.disabled),e.R7$(3),e.Y8G("ngForOf",e.bMT(4,13,_.ampCategoryEnum$))}},dependencies:[M.Sq,M.bT,Gn.s,qe.Di,Si,Ci.L9,eo.E]})}return u})();const _r={types:[{name:"amp-category-select",wrappers:["form-field"],component:Dr},{name:"amp-category-multi-select",wrappers:["form-field"],component:Dr,defaultOptions:{props:{label:"AMP/ASCO/CAP Categories",isMultiSelect:!0}}}]};let yr=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,t.X1,g.qy.forChild(_r),Gn.T,qe.kT,ge.i,En,ci]})}return u})();const sr=qi(Mi()),Ms={types:[{name:"checkbox",wrappers:["form-field"],component:(()=>{class u extends sr{constructor(){super(...arguments),this.defaultOptions={props:{indeterminate:!0,hideLabel:!0}}}ngAfterViewInit(){console.log(this.props)}static#e=this.\u0275fac=(()=>{let a;return function(_){return(a||(a=e.xGo(u)))(_||u)}})();static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["cvc-checkbox"]],features:[e.Vt3],decls:2,vars:4,consts:[["nz-checkbox","",3,"ngModelChange","nzIndeterminate","formControl","formlyAttributes"]],template:function(h,_){1&h&&(e.j41(0,"label",0),e.bIt("ngModelChange",function(ft){return _.props.change&&_.props.change(_.field,ft)}),e.EFF(1),e.k0s()),2&h&&(e.Y8G("nzIndeterminate",_.props.indeterminate&&null==_.formControl.value)("formControl",_.formControl)("formlyAttributes",_.field),e.R7$(),e.SpI(" ",_.props.label,"\n"))},dependencies:[t.BC,t.l_,dt.$g,g.ch],changeDetection:0})}return u})()}]};let Fr=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,t.X1,dt.IJ,g.qy.forChild(Ms),En]})}return u})();function Uo(u,b){if(1&u){const a=e.RV6();e.j41(0,"input",2),e.bIt("ngModelChange",function(_){e.eBV(a);const ee=e.XpG();return e.Njj(ee.onValueChange$.next(_))}),e.k0s()}if(2&u){const a=e.XpG();e.Y8G("formControl",a.formControl)("type",a.props.type||"text")("formlyAttributes",a.field)}}function Gr(u,b){if(1&u){const a=e.RV6();e.j41(0,"nz-input-number",3),e.bIt("ngModelChange",function(_){e.eBV(a);const ee=e.XpG();return e.Njj(ee.onValueChange$.next(_))}),e.k0s()}if(2&u){const a=e.XpG();e.Y8G("formControl",a.formControl)("formlyAttributes",a.field)}}const Mo=qi(Mi());let Ss=(()=>{class u extends Mo{constructor(){super()}ngAfterViewInit(){this.configureBaseField()}static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["cvc-base-input"]],features:[e.Vt3],decls:3,vars:2,consts:[["numberTmp",""],["nz-input","",3,"formControl","type","formlyAttributes","ngModelChange",4,"ngIf","ngIfElse"],["nz-input","",3,"ngModelChange","formControl","type","formlyAttributes"],[3,"ngModelChange","formControl","formlyAttributes"]],template:function(h,_){if(1&h&&e.DNE(0,Uo,1,3,"input",1)(1,Gr,1,2,"ng-template",null,0,e.C5r),2&h){const ee=e.sdS(2);e.Y8G("ngIf","number"!==_.props.type)("ngIfElse",ee)}},dependencies:[M.bT,t.me,t.BC,t.l_,F.Sy,_e,g.ch],encapsulation:2,changeDetection:0})}return u})(),ds=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,t.X1,F.j,ut,g.qy.forChild({types:[{name:"base-input",component:Ss,wrappers:["form-field"]},{name:"base-string",extends:"base-input"},{name:"base-number",extends:"base-input",defaultOptions:{props:{type:"number"}}},{name:"base-integer",extends:"base-input",defaultOptions:{props:{type:"number"}}}]})]})}return u})();function Ze(u,b){if(1&u&&e.nrm(0,"nz-option",6),2&u){const a=b.$implicit;e.Y8G("nzValue",a.value)("nzDisabled",a.disabled)("nzLabel",a.label)}}function Fn(u,b){if(1&u&&(e.j41(0,"nz-option-group",4),e.DNE(1,Ze,1,3,"nz-option",5),e.k0s()),2&u){const a=e.XpG().$implicit;e.Y8G("nzLabel",a.label),e.R7$(),e.Y8G("ngForOf",a.group)}}function fe(u,b){if(1&u&&e.nrm(0,"nz-option",6),2&u){const a=e.XpG().$implicit;e.Y8G("nzValue",a.value)("nzDisabled",a.disabled)("nzLabel",a.label)}}function We(u,b){if(1&u&&(e.qex(0),e.DNE(1,Fn,2,2,"nz-option-group",2)(2,fe,1,3,"nz-option",3),e.bVm()),2&u){const a=b.$implicit;e.R7$(),e.Y8G("ngIf",a.group),e.R7$(),e.Y8G("ngIf",!a.group)}}const ct=qi(Mi());let sn=(()=>{class u extends ct{constructor(){super(),this.defaultOptions={props:{isMultiSelect:!1}}}ngAfterViewInit(){this.configureBaseField()}static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["cvc-base-select"]],features:[e.Vt3],decls:4,vars:12,consts:[[3,"ngModelChange","nzPlaceHolder","formControl","formlyAttributes","nzMode"],[4,"ngFor","ngForOf"],[3,"nzLabel",4,"ngIf"],[3,"nzValue","nzDisabled","nzLabel",4,"ngIf"],[3,"nzLabel"],[3,"nzValue","nzDisabled","nzLabel",4,"ngFor","ngForOf"],[3,"nzValue","nzDisabled","nzLabel"]],template:function(h,_){1&h&&(e.j41(0,"nz-select",0),e.bIt("ngModelChange",function(ft){return _.props.change&&_.props.change(_.field,ft)}),e.DNE(1,We,3,2,"ng-container",1),e.nI1(2,"formlySelectOptions"),e.nI1(3,"async"),e.k0s()),2&h&&(e.AVh("ng-dirty",_.showError),e.Y8G("nzPlaceHolder",void 0!==_.props.placeholder?_.props.placeholder:null)("formControl",_.formControl)("formlyAttributes",_.field)("nzMode",_.props.isMultiSelect?"multiple":"default"),e.R7$(),e.Y8G("ngForOf",e.bMT(3,10,e.i5U(2,7,_.props.options,_.field))))},dependencies:[M.Sq,M.bT,t.BC,t.l_,Qe.ld,Qe.WI,Qe.uX,g.ch,M.Jj,Ut],encapsulation:2,changeDetection:0})}return u})(),$n=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,t.X1,Qe.DH,I,Ye,g.qy.forChild({types:[{name:"base-select",component:sn,wrappers:["form-field"]},{name:"enum",extends:"select"},{name:"base-multi-select",extends:"level-select",defaultOptions:{props:{isMultiSelect:!0}}}]})]})}return u})();const Bn=qi(Mi()),ki={types:[{name:"base-textarea",component:(()=>{class u extends Bn{constructor(){super(),this.defaultOptions={props:{autosize:!1}}}ngAfterViewInit(){this.configureBaseField()}static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["formly-field-nz-textarea"]],features:[e.Vt3],decls:1,vars:5,consts:[["nz-input","",3,"nzAutosize","rows","formControl","placeholder","formlyAttributes"]],template:function(h,_){1&h&&e.nrm(0,"textarea",0),2&h&&e.Y8G("nzAutosize",_.props.autosize)("rows",_.props.rows?_.props.rows:2)("formControl",_.formControl)("placeholder",_.props.placeholder)("formlyAttributes",_.field)},dependencies:[t.me,t.BC,t.l_,g.ch,F.Sy,F.c9],encapsulation:2,changeDetection:0})}return u})(),wrappers:["form-field"]}]};let Eo=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,t.X1,g.qy.forChild(ki),F.j,En]})}return u})();var di=c(6389),ho=c(5930);const ts={types:[{name:"cvc-cancel-button",component:(()=>{class u extends g.PU{constructor(a){super(),this.location=a}cancelClicked(){this.location.back()}static#e=this.\u0275fac=function(h){return new(h||u)(e.rXU(M.aZ))};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["cvc-cancel-button"]],features:[e.Vt3],decls:2,vars:0,consts:[["nz-button","","type","button","nzType","default","nzDanger","",1,"cancel-button",3,"click"]],template:function(h,_){1&h&&(e.j41(0,"button",0),e.bIt("click",function(){return _.cancelClicked()}),e.EFF(1," Cancel\n"),e.k0s())},dependencies:[Kn.aO,di.c,ho.p],styles:[".cancel-button[_ngcontent-%COMP%]{margin-right:10px}"],changeDetection:0})}return u})()}]};let Ne=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,t.X1,g.qy.forChild(ts),Kn.Zw]})}return u})();const je=["optionTemplates"];function ye(u,b){if(1&u&&(e.qex(0),e.j41(1,"em")(2,"span",6),e.EFF(3),e.k0s()(),e.bVm()),2&u){const a=e.XpG(2).$implicit;e.R7$(3),e.JRh(a.description)}}function ht(u,b){if(1&u&&(e.j41(0,"nz-tag",5),e.EFF(1),e.k0s(),e.j41(2,"span",6),e.DNE(3,ye,4,1,"ng-container",7),e.k0s()),2&u){const a=e.XpG().$implicit;e.R7$(),e.JRh(a.code),e.R7$(2),e.Y8G("ngIf",a.description)}}function Jt(u,b){1&u&&(e.qex(0),e.DNE(1,ht,4,2,"ng-template",null,1,e.C5r),e.bVm())}function Ii(u,b){if(1&u&&(e.qex(0),e.DNE(1,Jt,3,0,"ng-container",4),e.nI1(2,"ngrxPush"),e.bVm()),2&u){const a=e.XpG();e.R7$(),e.Y8G("ngForOf",e.bMT(2,1,a.result$))}}function Qi(u,b){if(1&u){const a=e.RV6();e.j41(0,"div",8)(1,"cvc-entity-tag",9),e.bIt("cvcOnClose",function(){const _=e.eBV(a).$implicit,ee=e.XpG();return e.Njj(ee.onTagClose$.next(_.nzValue))}),e.k0s()()}if(2&u){const a=b.$implicit,h=e.XpG();e.R7$(),e.Y8G("cvcDisableLink",!0)("cvcHasTooltip",!0)("cvcCacheId","ClingenCode:"+a.nzValue)("cvcContext",h.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",h.props.isMultiSelect?"default":"closeable")}}const wo=qi(Mi(),$o());let yi=(()=>{class u extends wo{constructor(a,h,_){super(),this.taq=a,this.tq=h,this.changeDetectorRef=_,this.exclusiveCodes=new Set,this.exclusiveSelected=!1,this.defaultOptions={props:{entityName:{singular:"ClinGen/CGC/VICC Code",plural:"ClinGen/CGC/VICC Codes"},isMultiSelect:!1,requireType:!0,tooltip:"If applicable, please provide evidence classifications from the Standards for the classification of pathogenicity of somatic variants in cancer (oncogenicity).",placeholder:"Search ClinGen/CGC/VICC Codes",requireTypePromptFn:(ee,ft)=>`Select an ${ee} Type to search associated ClinGen Code(s)`}},this.placeholder$=new dn.t(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectComponent:this.selectComponent}),this.configurePlaceholders(),this.onValueChange$.pipe((0,pn.s)(this)).subscribe(a=>{if(a&&Array.isArray(a)&&a.length>1){const h=a.find(_=>this.exclusiveCodes.has(_));h?(this.previousDescription=this.props.description,this.previousDescriptionType=this.props.extraType,this.props.description="You have selected N/A which precludes selecting any other codes. Please remove it if you wish to select additional codes.",this.exclusiveSelected=!0,this.formControl.setValue([h])):this.exclusiveSelected=!1}this.previousDescription&&!this.exclusiveSelected&&(this.props.description=this.previousDescription,this.props.extraType=this.previousDescriptionType),this.cdr.detectChanges()})}configureStateConnections(){if(this.state&&(this.stateEntityName=this.state.entityName,this.state.requires.requiresClingenCodes$?this.onRequiresClingenCode$=this.state.requires.requiresClingenCodes$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresClingenCodes$ subject to attach.`),this.props.requireType)){const a=`${this.stateEntityName.toLowerCase()}Type$`;this.state.fields[a]?this.onEntityType$=this.state.fields[a]:console.error(`${this.field.id} requireType is true, however form state does not provide Subject ${a}.`)}}configurePlaceholders(){this.placeholder$.next(this.props.placeholders),this.onRequiresClingenCode$&&this.onEntityType$&&(0,po.z)([this.onRequiresClingenCode$,this.onEntityType$]).pipe((0,J.F)(),(0,pn.s)(this)).subscribe(([a,h])=>{!a&&h?(this.props.required=!1,this.props.disabled=!0,this.props.description=`${(0,ro.u)(h)} ${this.state.entityName} does not include associated ClinGen/CGC/VICC Code(s)`,this.props.extraType="prompt",this.resetField(),this.cdr.markForCheck()):this.props.requireType&&!h?(this.props.required=!1,this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName,this.props.isMultiSelect),this.props.extraType="prompt"):a?(this.props.required=!0,this.props.disabled=!1,this.props.description='Please provide the evidence classifications from the Standards for the classification of pathogenicity of somatic variants in cancer (oncogenicity) in <a href="https://pubmed.ncbi.nlm.nih.gov/25741868/" target="_blank">Horak et. al. 2022.</a>. Review all codes and select each one that applies. If a code is not applied, it is inferred to not be met.',this.props.extraType="description"):(!a&&this.formControl.value||this.props.requireType&&!h&&this.formControl.value)&&this.resetField()})}getTypeaheadVarsFn(a){return{code:a}}getTypeaheadResultsFn(a){return a.data.clingenCodesTypeahead.forEach(h=>{h.exclusive&&this.exclusiveCodes.add(h.id)}),a.data.clingenCodesTypeahead}getTagQueryResultsFn(a){return a.data.clingenCode}getTagQueryVarsFn(a){return{id:a}}getSelectedItemOptionFn(a){return{value:a.id,label:a.code}}getSelectOptionsFn(a,h){return a.map((_,ee)=>({label:h.get(ee)||_.code,value:_.id}))}static#e=this.\u0275fac=function(h){return new(h||u)(e.rXU(xn.FZ_),e.rXU(xn.kp0),e.rXU(e.gRc))};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["cvc-clingen-code-select"]],viewQuery:function(h,_){if(1&h&&e.GBs(je,5,e.C4Q),2&h){let ee;e.mGM(ee=e.lsd())&&(_.optionTemplates=ee)}},features:[e.Vt3],decls:9,vars:22,consts:[["selectedTemplate",""],["optionTemplates",""],[3,"cvcOnSearch","cvcOnOpenChange","cvcOnModelChange","cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading"],[4,"ngrxLet"],[4,"ngFor","ngForOf"],["nz-tooltip",""],["nz-typography","","nzType","secondary"],[4,"ngIf"],[1,"ant-select-selection-item-content"],[3,"cvcOnClose","cvcDisableLink","cvcHasTooltip","cvcCacheId","cvcContext","cvcMode"]],template:function(h,_){if(1&h){const ee=e.RV6();e.j41(0,"cvc-entity-select",2),e.nI1(1,"ngrxPush"),e.nI1(2,"ngrxPush"),e.nI1(3,"ngrxPush"),e.nI1(4,"ngrxPush"),e.nI1(5,"ngrxPush"),e.bIt("cvcOnSearch",function(nn){return e.eBV(ee),e.Njj(_.onSearch$.next(nn))})("cvcOnOpenChange",function(nn){return e.eBV(ee),e.Njj(_.onOpenChange$?_.onOpenChange$.next(nn):null)})("cvcOnModelChange",function(nn){return e.eBV(ee),e.Njj(_.props.change&&_.props.change(_.field,nn))}),e.k0s(),e.DNE(6,Ii,3,3,"ng-container",3)(7,Qi,2,5,"ng-template",null,0,e.C5r)}if(2&h){const ee=e.sdS(8);e.Y8G("cvcSelectMode",_.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",ee)("cvcFormControl",_.formControl)("cvcFormlyAttributes",_.field)("cvcEntityName",_.props.entityName)("cvcPlaceholder",e.bMT(1,12,_.placeholder$))("cvcResults",e.bMT(2,14,_.result$))("cvcOptions",e.bMT(3,16,_.selectOption$))("cvcShowError",_.showError)("cvcDisabled",_.onRequiresClingenCode$&&!e.bMT(4,18,_.onRequiresClingenCode$))("cvcLoading",e.bMT(5,20,_.isLoading$)),e.R7$(6),e.Y8G("ngrxLet",_.onSearch$)}},dependencies:[M.Sq,M.bT,Ci.Nj,hn.LH,qe.Di,Gn.s,Wt,tn.b,Ci.L9],changeDetection:0})}return u})();const La={types:[{name:"clingen-code-select",wrappers:["form-field"],component:yi,defaultOptions:{props:{label:"ClinGen/CGC/VICC Code"}}},{name:"clingen-code-multi-select",wrappers:["form-field"],component:yi,defaultOptions:{props:{isMultiSelect:!0,label:"ClinGen/CGC/VICC Code(s)"}}}]};let Hc=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,t.X1,g.qy.forChild(La),Cn.$,Kn.Zw,Qe.DH,gi.MC,oi.U6,Z.Y3,F.j,L.f3,hn.Qt,on.pc,G.PQ,rt.jl,qe.kT,Gn.T,En,jn,ge.i,Ft._,zi]})}return u})();function ba(u){return(()=>{class a extends u{configureStringTagField(){this.tagLabel$=new V.B,this.onTagClose$=new V.B,this.onTagClose$.pipe((0,pn.s)(this)).subscribe(_=>{this.formControl.setValue(void 0),this.tagLabel$.next(void 0)})}static#e=this.\u0275fac=(()=>{let _;return function(ft){return(_||(_=e.xGo(a)))(ft||a)}})();static#t=this.\u0275prov=e.jDH({token:a,factory:a.\u0275fac})}return a})()}var Cr=c(5741);const gc=()=>[8,8];function mo(u,b){if(1&u&&(e.j41(0,"label",5),e.EFF(1),e.k0s()),2&u){const a=b.$implicit;e.Y8G("nzValue",a.value)("nzTooltipTitle",a.tooltip),e.R7$(),e.SpI(" ",a.label," ")}}function ua(u,b){if(1&u){const a=e.RV6();e.j41(0,"nz-col",2)(1,"nz-radio-group",3),e.nI1(2,"ngrxPush"),e.bIt("ngModelChange",function(_){e.eBV(a);const ee=e.XpG();return e.Njj(ee.existenceChange$.next(_))}),e.DNE(3,mo,2,3,"label",4),e.k0s()()}if(2&u){const a=e.XpG();e.R7$(),e.Y8G("ngModel",e.bMT(2,2,a.existenceModel$)),e.R7$(2),e.Y8G("ngForOf",a.selectOptions)}}function Yr(u,b){if(1&u&&e.nrm(0,"nz-option",8),2&u){const a=b.$implicit;e.Y8G("nzLabel",a)("nzValue",a)("nzHide",!0)}}function ta(u,b){if(1&u){const a=e.RV6();e.j41(0,"nz-col",2)(1,"nz-select",6),e.bIt("ngModelChange",function(_){e.eBV(a);const ee=e.XpG();return e.Njj(ee.onValueChange$.next(_))}),e.DNE(2,Yr,1,3,"nz-option",7),e.k0s()()}if(2&u){const a=e.XpG();e.R7$(),e.Y8G("formControl",a.formControl)("formlyAttributes",a.field),e.R7$(),e.Y8G("ngForOf",a.formControl.value)}}const Ba=qi(Mi(),ba);let mr=class I8 extends Ba{constructor(b){super(),this.cdr=b,this.defaultOptions={modelOptions:{updateOn:"blur"},props:{label:"Enter value",placeholder:"Enter value and hit Return",description:"Specify if Clinvar IDs exist, or if they are not applicable for this variant."}},this.clinvarIds$=new dn.t([]),this.values=new Set,this.showClinvarIdEntry$=new dn.t(!1),this.selectModel=void 0,this.selectOptions=[{value:void 0,label:"Unspecified",tooltip:"Existence of ClinVar IDs for this variant is unspecified."},{value:Cr.cD.NotApplicable,label:"Not Applicable",tooltip:"ClinVar IDs are not applicable to this variant."},{value:Cr.cD.NoneFound,label:"Were Not Found",tooltip:"A search was performed, and no ClinVar IDs were found."},{value:Cr.cD.Found,label:"Were Found",tooltip:"A search was performed, and ClinVar IDs were found (enter IDs below)."}],this.existenceChange$=new V.B,this.existenceModel$=new dn.t(void 0),this.showTagSelect$=new dn.t(!1)}ngAfterViewInit(){this.configureBaseField(),this.configureStringTagField(),this.onValueChange$.pipe((0,pn.s)(this)).subscribe(b=>{void 0===b?(this.existenceModel$.next(void 0),this.showTagSelect$.next(!1)):b.includes("NONE FOUND")||b.includes("NA")?(b.includes("NONE FOUND")?this.existenceModel$.next(Cr.cD.NoneFound):b.includes("NA")&&this.existenceModel$.next(Cr.cD.NotApplicable),this.showTagSelect$.next(!1)):(this.existenceModel$.next(Cr.cD.Found),this.showTagSelect$.next(!0))}),this.existenceChange$.pipe((0,me.T)(b=>{const a=this.formControl.value;void 0===b&&void 0!==this.formControl.value?this.formControl.setValue(void 0):b!==Cr.cD.NoneFound||a.includes("NONE FOUND")?b!==Cr.cD.NotApplicable||a.includes("NA")?b===Cr.cD.Found&&(void 0===a||a.includes("NONE FOUND")||a.includes("NA"))&&this.formControl.setValue([]):this.formControl.setValue(["NA"]):this.formControl.setValue(["NONE FOUND"])}),(0,pn.s)(this)).subscribe()}static#e=this.\u0275fac=function(a){return new(a||I8)(e.rXU(e.gRc))};static#t=this.\u0275cmp=e.VBU({type:I8,selectors:[["cvc-clinvar-input"]],features:[e.Vt3],decls:4,vars:6,consts:[[3,"nzGutter"],["nzSpan","24",4,"ngIf"],["nzSpan","24"],["nzName","existence",3,"ngModelChange","ngModel"],["nz-radio-button","","nz-tooltip","",3,"nzValue","nzTooltipTitle",4,"ngFor","ngForOf"],["nz-radio-button","","nz-tooltip","",3,"nzValue","nzTooltipTitle"],["nzMode","tags","nzPlaceHolder","Enter ClinVar IDs","nzAllowClear","","nzDropdownClassName","hide-dropdown",3,"ngModelChange","formControl","formlyAttributes"],[3,"nzLabel","nzValue","nzHide",4,"ngFor","ngForOf"],[3,"nzLabel","nzValue","nzHide"]],template:function(a,h){1&a&&(e.j41(0,"nz-row",0),e.DNE(1,ua,4,4,"nz-col",1)(2,ta,3,3,"nz-col",1),e.nI1(3,"ngrxPush"),e.k0s()),2&a&&(e.Y8G("nzGutter",e.lJ4(5,gc)),e.R7$(),e.Y8G("ngIf",h.props.showExistenceOptions),e.R7$(),e.Y8G("ngIf",e.bMT(3,3,h.showTagSelect$)))},dependencies:[M.Sq,M.bT,t.BC,t.vS,t.l_,g.ch,L.Uq,L.e,ue.lx,ue.i3,Qe.ld,Qe.WI,hn.LH,Ci.L9],changeDetection:0})};mr=(0,vi.Cg)([(0,pn.d)()],mr);const Ea={types:[{name:"clinvar-input",wrappers:["form-field"],component:mr,defaultOptions:{props:{isRepeatItem:!1,showExistenceOptions:!1}}},{name:"clinvar-multi-input",wrappers:["form-field"],component:mr,defaultOptions:{props:{isRepeatItem:!0,showExistenceOptions:!0}}}]};let Ys=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,t.YN,t.X1,g.qy.forChild(Ea),G.PQ,L.f3,F.j,ue.Sw,Qe.DH,hn.Qt,ge.i]})}return u})();var hs=c(6697);const vc=qi(Mi()),Wr={types:[{name:"fda-companion-test-checkbox",wrappers:["form-field"],component:(()=>{class u extends vc{constructor(){super(...arguments),this.defaultDescription='Select Yes if an FDA approved companion test exists for the variant and therapy associated with the Assertion (such as tests listed <a href="https://www.fda.gov/medical-devices/in-vitro-diagnostics/list-cleared-or-approved-companion-diagnostic-devices-in-vitro-and-imaging-tools" target="_blank">here</a>).',this.defaultOptions={props:{hideLabel:!1,label:"FDA Companion Test",description:this.defaultDescription}}}ngAfterViewInit(){this.configureBaseField(),this.state&&(this.state.formReady$?this.state.formReady$.pipe((0,qt.p)(a=>a),(0,hs.s)(1),(0,pn.s)(this)).subscribe(a=>{this.configureField()}):this.configureField())}configureField(){this.state?.fields.fdaRegulatoryApproval$.pipe((0,pn.s)(this)).subscribe(a=>{a?(this.props.disabled=!1,this.props.extraType="description",this.props.description=this.defaultDescription,void 0===this.formControl.value&&this.formControl.setValue(!1)):(this.props.disabled=!0,this.props.description="FDA Companion Test only applies when Regulatory Approval is selected",this.formControl.setValue(void 0))})}static#e=this.\u0275fac=(()=>{let a;return function(_){return(a||(a=e.xGo(u)))(_||u)}})();static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["cvc-fda-companion-test-checkbox"]],features:[e.Vt3],decls:2,vars:4,consts:[["nz-checkbox","",3,"ngModelChange","nzIndeterminate","formControl","formlyAttributes"]],template:function(h,_){1&h&&(e.j41(0,"label",0),e.bIt("ngModelChange",function(ft){return _.props.change&&_.props.change(_.field,ft)}),e.EFF(1),e.k0s()),2&h&&(e.Y8G("nzIndeterminate",_.props.indeterminate&&null==_.formControl.value)("formControl",_.formControl)("formlyAttributes",_.field),e.R7$(),e.SpI(" ",_.props.label,"\n"))},dependencies:[t.BC,t.l_,dt.$g,g.ch],changeDetection:0})}return u})()}]};let wi=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,t.X1,dt.IJ,g.qy.forChild(Wr),En]})}return u})();const Ws=qi(Mi()),ps={types:[{name:"fda-regulatory-approval-checkbox",wrappers:["form-field"],component:(()=>{class u extends Ws{constructor(){super(...arguments),this.defaultDescription="Check this if the referenced therapy is approved for use by the FDA in the specific disease associated with the Assertion (as in a listing <a href='https://www.cancer.gov/about-cancer/treatment/drugs/cancer-type' target='_blank'>here</a>.)",this.defaultOptions={props:{hideLabel:!1,label:"FDA Regulatory Approval",description:this.defaultDescription}}}ngAfterViewInit(){this.configureBaseField(),this.state&&(this.state.formReady$?this.state.formReady$.pipe((0,qt.p)(a=>a),(0,hs.s)(1),(0,pn.s)(this)).subscribe(a=>{this.configureField()}):this.configureField())}configureField(){this.state?.requires.allowsFdaApproval$.pipe((0,pn.s)(this)).subscribe(a=>{a?(this.props.disabled=!1,this.props.extraType="description",this.props.description=this.defaultDescription,void 0===this.formControl.value&&this.formControl.setValue(!1)):(this.props.disabled=!0,this.props.description="FDA Regulatory Approval does not apply to this Assertion Type",this.formControl.setValue(void 0))})}static#e=this.\u0275fac=(()=>{let a;return function(_){return(a||(a=e.xGo(u)))(_||u)}})();static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["cvc-fda-regulatory-approval-checkbox"]],features:[e.Vt3],decls:2,vars:4,consts:[["nz-checkbox","",3,"ngModelChange","nzIndeterminate","formControl","formlyAttributes"]],template:function(h,_){1&h&&(e.j41(0,"label",0),e.bIt("ngModelChange",function(ft){return _.props.change&&_.props.change(_.field,ft)}),e.EFF(1),e.k0s()),2&h&&(e.Y8G("nzIndeterminate",_.props.indeterminate&&null==_.formControl.value)("formControl",_.formControl)("formlyAttributes",_.field),e.R7$(),e.SpI(" ",_.props.label,"\n"))},dependencies:[t.BC,t.l_,dt.$g,g.ch],changeDetection:0})}return u})()}]};let Ha=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,t.X1,dt.IJ,g.qy.forChild(ps),En]})}return u})(),Kr=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,Gn.T,Z.Y3,hn.Qt,ge.i]})}return u})();var Ta=c(1677),Xr=c(1555);const ju=u=>({"tag-icon-large":u});function _l(u,b){}function Uu(u,b){if(1&u){const a=e.RV6();e.j41(0,"span",5)(1,"nz-tag",6),e.bIt("nzOnClose",function(_){e.eBV(a);const ee=e.XpG();return e.Njj(ee.cvcOnClose.next(_))}),e.DNE(2,_l,0,0,"ng-template",7),e.k0s()()}if(2&u){const a=e.XpG(),h=e.sdS(5);e.R7$(),e.Y8G("nzMode",a.cvcMode)("nzTooltipTitle",a.cvcTooltip)("nzChecked",a.cvcChecked),e.R7$(),e.Y8G("ngTemplateOutlet",h)}}function br(u,b){}function Ds(u,b){if(1&u&&(e.j41(0,"span",8)(1,"nz-tag",9),e.DNE(2,br,0,0,"ng-template",7),e.k0s()()),2&u){const a=e.XpG(),h=e.sdS(5);e.R7$(),e.Y8G("nzMode","checkable")("nzChecked",a.cvcChecked),e.R7$(),e.Y8G("ngTemplateOutlet",h)}}function ja(u,b){}function ha(u,b){if(1&u){const a=e.RV6();e.j41(0,"span",10)(1,"nz-tag",11),e.bIt("nzOnClose",function(_){e.eBV(a);const ee=e.XpG();return e.Njj(ee.cvcOnClose.next(_))}),e.DNE(2,ja,0,0,"ng-template",7),e.k0s()()}if(2&u){e.XpG();const a=e.sdS(5);e.R7$(),e.Y8G("nzMode","closeable"),e.R7$(),e.Y8G("ngTemplateOutlet",a)}}function jc(u,b){}function Os(u,b){if(1&u&&(e.j41(0,"span",12)(1,"nz-tag",13),e.DNE(2,jc,0,0,"ng-template",7),e.k0s()()),2&u){const a=e.XpG(),h=e.sdS(5);e.R7$(),e.Y8G("nzMode","default")("nzTooltipTitle",a.cvcTooltip),e.R7$(),e.Y8G("ngTemplateOutlet",h)}}function Ua(u,b){if(1&u&&(e.nrm(0,"i",16),e.nI1(1,"evidenceEnumDisplay")),2&u){const a=e.XpG(2);e.Y8G("nzType",!0===a.cvcShowIcon?e.i5U(1,5,a.cvcAttrValue,"icon-name"):a.cvcShowIcon)("nzTwotoneColor",a.cvcIconColor)("nzTheme",a.cvcIconTheme)("ngClass",e.eq3(8,ju,!0===a.cvcZoomIcon)),e.BMQ("style","color: "+a.cvcIconColor,e.$dS)}}function _c(u,b){if(1&u&&(e.nrm(0,"span",17),e.nI1(1,"evidenceEnumDisplay"),e.nI1(2,"highlightTypeahead")),2&u){const a=e.XpG(2);e.Y8G("innerHtml",e.i5U(2,4,e.i5U(1,1,a.cvcAttrValue,"display-string"===a.cvcShowLabel?a.cvcShowLabel:"short-string"),a.cvcEmphasize),e.npT)}}function Vi(u,b){if(1&u&&e.DNE(0,Ua,2,10,"i",14)(1,_c,3,7,"span",15),2&u){const a=e.XpG();e.Y8G("ngIf",a.cvcAttrValue&&a.cvcShowIcon),e.R7$(),e.Y8G("ngIf",a.cvcShowLabel)}}let to=(()=>{class u{constructor(){this.cvcShowLabel="display-string",this.cvcShowIcon=!0,this.cvcZoomIcon=!1,this.cvcContext="default",this.cvcMode="default",this.cvcChecked=!1,this.cvcIconColor="#797979",this.cvcLabelColor="#434343",this.cvcIconTheme="outline",this.cvcFullWidth=!1,this.cvcOnClose=new e.bkB}ngOnChanges(a){a.cvcContext&&"compact"===a.cvcContext.currentValue&&(this.cvcShowIcon=!0,this.cvcShowLabel=!1,this.cvcZoomIcon=!0)}static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["cvc-attribute-tag"]],hostVars:2,hostBindings:function(h,_){2&h&&e.AVh("full-width",!0===_.cvcFullWidth)},inputs:{cvcAttrValue:"cvcAttrValue",cvcShowLabel:"cvcShowLabel",cvcShowIcon:"cvcShowIcon",cvcZoomIcon:"cvcZoomIcon",cvcTooltip:"cvcTooltip",cvcContext:"cvcContext",cvcMode:"cvcMode",cvcChecked:"cvcChecked",cvcEmphasize:"cvcEmphasize",cvcIconColor:"cvcIconColor",cvcLabelColor:"cvcLabelColor",cvcIconTheme:"cvcIconTheme",cvcFullWidth:"cvcFullWidth"},outputs:{cvcOnClose:"cvcOnClose"},features:[e.OA$],decls:6,vars:4,consts:[["tagContent",""],["class","default",4,"ngIf"],["class","menu-item",4,"ngIf"],["class","select-item",4,"ngIf"],["class","compact",4,"ngIf"],[1,"default"],["nz-tooltip","",3,"nzOnClose","nzMode","nzTooltipTitle","nzChecked"],[3,"ngTemplateOutlet"],[1,"menu-item"],[3,"nzMode","nzChecked"],[1,"select-item"],[3,"nzOnClose","nzMode"],[1,"compact"],["nz-tooltip","",3,"nzMode","nzTooltipTitle"],["nz-icon","","class","tag-icon",3,"nzType","nzTwotoneColor","nzTheme","ngClass",4,"ngIf"],["class","tag-label",3,"innerHtml",4,"ngIf"],["nz-icon","",1,"tag-icon",3,"nzType","nzTwotoneColor","nzTheme","ngClass"],[1,"tag-label",3,"innerHtml"]],template:function(h,_){1&h&&e.DNE(0,Uu,3,4,"span",1)(1,Ds,3,3,"span",2)(2,ha,3,2,"span",3)(3,Os,3,3,"span",4)(4,Vi,2,2,"ng-template",null,0,e.C5r),2&h&&(e.Y8G("ngIf","default"===_.cvcContext),e.R7$(),e.Y8G("ngIf","menu-item"===_.cvcContext),e.R7$(),e.Y8G("ngIf","select-item"===_.cvcContext),e.R7$(),e.Y8G("ngIf","compact"===_.cvcContext))},dependencies:[M.YU,M.bT,M.T3,Gn.s,Z.Dn,hn.LH,Ta.pW,Xr.M],styles:['.hide-dropdown[_ngcontent-%COMP%]{display:none}.full-width[_nghost-%COMP%]{width:100%}.full-width[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin-right:0;margin-inline-end:4px}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%], .default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{display:inline-block}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]     svg{transform:scale(1.25)}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.default[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%], .compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{display:inline-block}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]     svg{transform:scale(1.25)}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.compact[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.menu-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{background-color:#fff}.menu-item[_ngcontent-%COMP%]   nz-tag.ant-tag-checkable[_ngcontent-%COMP%]{border:1px solid #d9d9d9}.menu-item[_ngcontent-%COMP%]   nz-tag.ant-tag-checkable[_ngcontent-%COMP%]:active{background-color:#e6f7ff}.menu-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]:not(.menu-item   nz-tag.ant-tag-checkable-checked)[_ngcontent-%COMP%]:hover{color:#000000d9;border-color:#1890ff}.menu-item[_ngcontent-%COMP%]   nz-tag.ant-tag-checkable-checked[_ngcontent-%COMP%]{border:transparent;background-color:#fff;color:#000000d9}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{margin:0;padding:0 2px 0 0;margin-inline-end:4px;max-width:100%}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%], .select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{display:inline-block}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]{padding:3px 2px 3px 4px;margin:-3px 0}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-icon-large[_ngcontent-%COMP%]     svg{transform:scale(1.25)}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]   .tag-label[_ngcontent-%COMP%]{display:inline-block;margin:-3px 0 -4px;padding:3px 3px 3px 2px;line-height:1}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]     i.ant-tag-close-icon.anticon-close{transition:none;margin-left:3px}.select-item[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]{background:#f5f5f5;border:1px solid #f0f0f0}.multi-select-item[_ngcontent-%COMP%]{display:inline-block;margin-top:-3px;margin-bottom:-3px;margin-left:-4px;padding-left:4px}.multi-select-item[_ngcontent-%COMP%]   .tag-icon[_ngcontent-%COMP%]:after{content:" "}.typeahead-match[_ngcontent-%COMP%]{font-weight:700}'],changeDetection:0})}return u})();const yc=["optionTemplates"];function pa(u,b){if(1&u&&e.nrm(0,"cvc-attribute-tag",4),2&u){const a=e.XpG().$implicit;e.Y8G("cvcAttrValue",a)}}function Uc(u,b){1&u&&(e.qex(0),e.DNE(1,pa,1,1,"ng-template",null,1,e.C5r),e.bVm())}function Gc(u,b){if(1&u){const a=e.RV6();e.j41(0,"div",5)(1,"cvc-attribute-tag",6),e.bIt("cvcOnClose",function(_){e.eBV(a);const ee=e.XpG();return e.Njj(ee.onTagClose$.next(_))}),e.k0s()()}if(2&u){const a=b.$implicit,h=e.XpG();e.R7$(),e.Y8G("cvcAttrValue",a.nzValue)("cvcContext",h.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",h.props.isMultiSelect?"default":"closeable")}}const Is={Evidence:{PREDICTIVE:{SUPPORTS:"Experiment or study supports the variant's response to a drug",DOES_NOT_SUPPORT:"Experiment or study does not support, or was inconclusive of an interaction between the variant and a drug"},DIAGNOSTIC:{SUPPORTS:"Experiment or study supports the variant's impact on the diagnosis of disease or subtype",DOES_NOT_SUPPORT:"Experiment or study does not support the variant's impact on diagnosis of disease or subtype"},PROGNOSTIC:{SUPPORTS:"Experiment or study supports the variant's impact on prognostic outcome",DOES_NOT_SUPPORT:"Experiment or study does not support a prognostic association between variant and outcome"},PREDISPOSING:{SUPPORTS:"Suggests a pathogenic or a protective role for a germline variant in cancer",DOES_NOT_SUPPORT:"Supports a benign (for Predisposition) or lack of protective (for Protectiveness) role for a germline variant in cancer."},FUNCTIONAL:{SUPPORTS:"Experiment or study supports the variant causing alteration or non-alteration of the gene product function",DOES_NOT_SUPPORT:"Experiment or study does not support the variant causing alteration or non-alteration of the gene product function"},ONCOGENIC:{NA:"Not Applicable for Oncogenic Evidence Type.",SUPPORTS:"Supports an oncogenic or protective role for a somatic variant.",DOES_NOT_SUPPORT:"Supports a benign (for Oncogenicity) or lack of protective (for Protectiveness) role for a somatic variant in cancer."}},Assertion:{PREDICTIVE:{SUPPORTS:"Supports the variant's response to a drug",DOES_NOT_SUPPORT:"Does not support, or was inconclusive of an interaction between the variant and a drug"},DIAGNOSTIC:{SUPPORTS:"Supports the variant's impact on the diagnosis of disease or subtype",DOES_NOT_SUPPORT:"Does not support the variant's impact on diagnosis of disease or subtype"},PROGNOSTIC:{SUPPORTS:"Supports the variant's impact on prognostic outcome",DOES_NOT_SUPPORT:"Does not support a prognostic association between variant and outcome"},PREDISPOSING:{SUPPORTS:"Suggests a pathogenic or a protective role for a germline variant in cancer",DOES_NOT_SUPPORT:"Does not support an association between the variant and disease causation"},FUNCTIONAL:{SUPPORTS:"Supports the variant causing alteration or non-alteration of the gene product function",DOES_NOT_SUPPORT:"Does not support the variant causing alteration or non-alteration of the gene product function"},ONCOGENIC:{SUPPORTS:"Supports an oncogenic or protective role for a somatic variant",DOES_NOT_SUPPORT:"Does not support an association between the variant and disease causation"}}},Ks=qi(Mi(),mi()),Ga={types:[{name:"direction-select",wrappers:["form-field"],component:(()=>{class u extends Ks{constructor(a){super(),this.cdr=a,this.defaultOptions={props:{label:"Direction",labelFn:h=>`${h} Direction`,required:!0,isMultiSelect:!1,placeholder:"Select Entity Direction",placeholderFn:(h,_)=>`Select ${_?_+" ":""}${h} Direction`,requireTypePromptFn:h=>`Select ${h} Type to select its Direction`}},this.directionEnum$=new dn.t([])}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.directionEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}configureStateConnections(){if(!this.state)return console.error(`${this.field.id} requires a form state to populate its options, none was found.`),void(this.placeholder$=new dn.t("ERROR: Form state not found"));if(this.props.label=this.props.labelFn(this.state.entityName),this.props.tooltip=`An indicator of whether the ${this.state.entityName} statement supports or refutes the clinical significance of an event.`,this.placeholder$=new dn.t(this.props.placeholderFn(this.state.entityName)),!this.state.enums.direction$)return void console.error(`${this.field.id} could not find form state's direction$ to populate select.`);this.state.enums.direction$.pipe((0,pn.s)(this)).subscribe(h=>{this.directionEnum$.next(h)}),this.optionTemplates||console.info(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,me.T)(h=>h.map(_=>_)));const a=`${this.state.entityName.toLowerCase()}Type$`;this.state.fields[a]?(this.onEntityType$=this.state.fields[a],this.onEntityType$.pipe((0,so.i)("add"===this.options.formState.formMode?0:1),(0,pn.s)(this)).subscribe(h=>{h?(this.props.disabled=!1,this.props.description=void 0,this.props.extraType=void 0,this.placeholder$.next(this.props.placeholderFn(this.state.entityName,(0,ro.u)(h)))):(this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName),this.props.extraType="prompt"),this.formControl.value&&this.formControl.setValue(void 0)}),this.onValueChange$.pipe((0,Yi.E)(this.onEntityType$),(0,pn.s)(this)).subscribe(([h,_])=>{!_||!h||!this.state||(this.props.extraType="description",this.props.description=Is[this.state.entityName][_][h],this.field.formControl.markAsTouched())})):console.error(`${this.field.id} could not find form state's ${a} to populate Direction options.`)}static#e=this.\u0275fac=function(h){return new(h||u)(e.rXU(e.gRc))};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["cvc-direction-select"]],viewQuery:function(h,_){if(1&h&&e.GBs(yc,5,e.C4Q),2&h){let ee;e.mGM(ee=e.lsd())&&(_.optionTemplates=ee)}},features:[e.Vt3],decls:7,vars:15,consts:[["selectedTemplate",""],["optionTemplates",""],[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcOnClose","cvcAttrValue","cvcContext","cvcMode"]],template:function(h,_){if(1&h&&(e.nrm(0,"cvc-enum-select",2),e.nI1(1,"ngrxPush"),e.nI1(2,"ngrxPush"),e.DNE(3,Uc,3,0,"ng-container",3),e.nI1(4,"ngrxPush"),e.DNE(5,Gc,2,3,"ng-template",null,0,e.C5r)),2&h){const ee=e.sdS(6);e.Y8G("cvcFormControl",_.formControl)("cvcFormlyAttributes",_.field)("cvcSelectMode",_.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.bMT(1,9,_.placeholder$))("cvcCustomTemplate",ee)("cvcOptions",e.bMT(2,11,_.selectOption$))("cvcShowError",_.showError)("cvcDisabled",_.props.disabled),e.R7$(3),e.Y8G("ngForOf",e.bMT(4,13,_.directionEnum$))}},dependencies:[M.Sq,Si,to,Ci.L9],changeDetection:0})}return u})()}]};let Cc=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,t.X1,g.qy.forChild(Ga),En,ci,Kr]})}return u})();var Go=c(5316),Ar=c(1226),na=c(4222),fs=c(8721);const za=()=>[0,0];function bc(u,b){if(1&u&&e.EFF(0),2&u){const a=e.XpG();e.JRh(a.successMessage)}}function W(u,b){if(1&u&&(e.qex(0),e.EFF(1),e.bVm()),2&u){const a=e.XpG();e.R7$(),e.SpI(' "',a.model.name,'" ')}}let it=class w8{set cvcSearchString(b){b&&this.searchString$.next(b)}constructor(b,a){this.query=b,this.errors=a,this.cvcOnCreate=new e.bkB,this.form=new t.J3({}),this.model={name:""},this.formLayout="horizontal",this.options={formState:{formLayout:this.formLayout}},this.onSubmit$=new V.B,this.searchString$=new dn.t(void 0),this.addDiseaseMutator=new Ar.E(this.errors),this.fields=[{key:"doid",type:"base-input",props:{label:"DOID",keydown:(h,_)=>{"Tab"===_.code&&_.stopPropagation()}}},{key:"name",props:{hidden:!0,required:!0}}],this.searchString$.pipe((0,pn.s)(this)).subscribe(h=>{h&&(this.model.name=h)}),this.onSubmit$.pipe((0,pn.s)(this)).subscribe(h=>{console.log("disease-quick-add form model submitted.",h),this.submitDisease(h)})}submitDisease(b){b.name?this.mutationState=this.addDiseaseMutator.mutate(this.query,this.model,{},a=>{console.log("disease-quick-add submit data callback",a),a.addDisease&&(this.successMessage=a.addDisease.new?`New Disease ${a.addDisease.disease.name} added.`:`Existing Disease ${a.addDisease.disease.name} with DOID ${a.addDisease.disease.doid} found. `,setTimeout(()=>{a&&a.addDisease&&this.cvcOnCreate.next(a.addDisease.disease.id)},1e3))}):console.error("disease-quick-add form submitDisease requires model with valid name.")}static#e=this.\u0275fac=function(a){return new(a||w8)(e.rXU(xn.tas),e.rXU(na.N))};static#t=this.\u0275cmp=e.VBU({type:w8,selectors:[["cvc-disease-quick-add-form"]],inputs:{cvcSearchString:"cvcSearchString"},outputs:{cvcOnCreate:"cvcOnCreate"},decls:11,vars:11,consts:[["success",""],["entityType","Disease",3,"mutationState","successMessage"],["nz-form","","nzLayout","horizontal",3,"ngSubmit","formGroup"],[3,"nzGutter"],["nzSpan","24"],[3,"modelChange","form","fields","model","options"],["nz-button","","nzType","primary","nzBlock","",3,"disabled"],[4,"ngIf"]],template:function(a,h){if(1&a){const _=e.RV6();e.j41(0,"cvc-form-submission-status-display",1),e.DNE(1,bc,1,1,"ng-template",null,0,e.C5r),e.j41(3,"form",2),e.bIt("ngSubmit",function(){return e.eBV(_),e.Njj(h.onSubmit$.next(h.model))}),e.j41(4,"nz-row",3)(5,"nz-col",4)(6,"formly-form",5),e.bIt("modelChange",function(ft){return e.eBV(_),e.Njj(h.model=ft)}),e.k0s()(),e.j41(7,"nz-col",4)(8,"button",6),e.EFF(9," Add Disease\xa0 "),e.DNE(10,W,2,1,"ng-container",7),e.k0s()()()()()}if(2&a){const _=e.sdS(2);e.Y8G("mutationState",h.mutationState)("successMessage",_),e.R7$(3),e.Y8G("formGroup",h.form),e.R7$(),e.Y8G("nzGutter",e.lJ4(10,za)),e.R7$(2),e.Y8G("form",h.form)("fields",h.fields)("model",h.model)("options",h.options),e.R7$(2),e.Y8G("disabled",!h.form.valid),e.R7$(2),e.Y8G("ngIf",h.model.name)}},dependencies:[M.bT,t.qT,t.cb,t.j4,g.aF,Kn.aO,di.c,ho.p,L.Uq,L.e,G.CA,fs.G],encapsulation:2,changeDetection:0})};it=(0,vi.Cg)([(0,pn.d)()],it);const Te=["optionTemplates"];function Ge(u,b){if(1&u&&(e.qex(0),e.j41(1,"strong"),e.EFF(2,"DOID:"),e.k0s(),e.nrm(3,"span",9),e.nI1(4,"highlightTypeahead"),e.bVm()),2&u){const a=e.XpG(2).$implicit,h=e.XpG().ngrxLet;e.R7$(3),e.Y8G("innerHtml",e.i5U(4,1,a.doid,h),e.npT)}}function Nt(u,b){if(1&u&&(e.qex(0),e.EFF(1," \xa0 "),e.j41(2,"strong"),e.EFF(3,"Aliases: "),e.k0s(),e.j41(4,"em"),e.nrm(5,"span",10),e.nI1(6,"highlightTypeahead"),e.k0s(),e.bVm()),2&u){const a=e.XpG(2).$implicit,h=e.XpG().ngrxLet;e.R7$(5),e.Y8G("nzTooltipTitle",a.diseaseAliases.join(", "))("innerHtml",e.i5U(6,2,a.diseaseAliases.join(", "),h),e.npT)}}function gn(u,b){if(1&u&&(e.nrm(0,"cvc-entity-tag",6),e.j41(1,"span",7),e.DNE(2,Ge,5,4,"ng-container",8)(3,Nt,7,5,"ng-container",8),e.EFF(4),e.k0s()),2&u){const a=e.XpG().$implicit,h=e.XpG().ngrxLet;e.Y8G("cvcDisableLink",!0)("cvcCacheId",a.__typename+":"+a.id)("cvcEmphasize",h),e.R7$(2),e.Y8G("ngIf",a.doid),e.R7$(),e.Y8G("ngIf",a.diseaseAliases.length>0),e.R7$(),e.SpI(" ",h," ")}}function Pn(u,b){1&u&&(e.qex(0),e.DNE(1,gn,5,6,"ng-template",null,2,e.C5r),e.bVm())}function hi(u,b){if(1&u&&(e.qex(0),e.DNE(1,Pn,3,0,"ng-container",5),e.nI1(2,"ngrxPush"),e.bVm()),2&u){const a=e.XpG();e.R7$(),e.Y8G("ngForOf",e.bMT(2,1,a.result$))}}function yo(u,b){if(1&u){const a=e.RV6();e.j41(0,"div",11)(1,"cvc-entity-tag",12),e.bIt("cvcOnClose",function(){const _=e.eBV(a).$implicit,ee=e.XpG();return e.Njj(ee.onTagClose$.next(_.nzValue))}),e.k0s()()}if(2&u){const a=b.$implicit,h=e.XpG();e.R7$(),e.Y8G("cvcCacheId","Disease:"+a.nzValue)("cvcContext",h.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",h.props.isMultiSelect?"default":"closeable")}}function Gi(u,b){if(1&u){const a=e.RV6();e.j41(0,"cvc-disease-quick-add-form",13),e.bIt("cvcOnCreate",function(_){e.eBV(a);const ee=e.XpG();return e.Njj(ee.onPopulate$.next(_))}),e.k0s()}2&u&&e.Y8G("cvcSearchString",b.$implicit)}const To=qi(Mi(),$o());let Xn=(()=>{class u extends To{constructor(a,h,_){super(),this.taq=a,this.tq=h,this.changeDetectorRef=_,this.defaultOptions={props:{entityName:{singular:"Disease",plural:"Diseases"},tooltip:"Cancer or cancer subtype that is a result of the described variant",isMultiSelect:!1,requireType:!0,placeholder:"Search Diseases",requireTypePromptFn:(ee,ft)=>`Select an ${ee} Type to select an associated Disease${ft?"(s)":""}`,addFormTitle:"Add a New Disease"}},this.placeholder$=new dn.t(void 0),this.selectOpen$=new Ni.m}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.state&&this.state.formReady$?this.state.formReady$.pipe((0,qt.p)(a=>a),(0,hs.s)(1),(0,pn.s)(this)).subscribe(a=>{this.configureField()}):this.configureField()}configureField(){this.placeholder$.next(this.props.placeholder),this.configureStateConnections()}configureStateConnections(){if(this.state){if(this.state.requires.requiresDisease$?this.onRequiresDisease$=this.state.requires.requiresDisease$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresDisease$ subject to attach.`),this.props.requireType){const a=`${this.state.entityName.toLowerCase()}Type$`;this.state.fields[a]?this.onEntityType$=this.state.fields[a]:console.error(`${this.field.id} requireType is true, however form state does not provide Subject ${a}.`)}!this.onRequiresDisease$||!this.onEntityType$||(0,po.z)([this.onRequiresDisease$,this.onEntityType$,this.onValueChange$]).pipe((0,pn.s)(this)).subscribe(([a,h,_])=>{this.onStateUpdates(a,h,_)})}}onStateUpdates(a,h,_){!a&&h&&(this.props.required=!1,this.props.disabled=!0,this.props.description=`${(0,ro.u)(h)} ${this.state.entityName} does not include associated diseases`,this.props.extraType="prompt",this.cdr.markForCheck()),this.props.requireType&&!h&&(this.props.required=!1,this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName,this.props.isMultiSelect),this.props.extraType="prompt"),a&&(this.props.required=!0,this.props.disabled=!1,this.props.description=void 0,this.props.extraType=void 0),(!a&&void 0!==_||this.props.requireType&&!h&&this.formControl.value)&&this.resetField()}getTypeaheadVarsFn(a){return{name:a}}getTypeaheadResultsFn(a){return a.data.diseaseTypeahead}getTagQueryVarsFn(a){return{id:a}}getTagQueryResultsFn(a){return a.data.disease}getSelectedItemOptionFn(a){return{value:a.id,label:a.name}}getSelectOptionsFn(a,h){return a.map((_,ee)=>({label:h.get(ee)||_.name,value:_.id}))}static#e=this.\u0275fac=function(h){return new(h||u)(e.rXU(xn.O3Q),e.rXU(xn.BOs),e.rXU(e.gRc))};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["cvc-disease-select"]],viewQuery:function(h,_){if(1&h&&e.GBs(Te,5,e.C4Q),2&h){let ee;e.mGM(ee=e.lsd())&&(_.optionTemplates=ee)}},features:[e.Vt3],decls:12,vars:26,consts:[["selectedTemplate",""],["addDisease",""],["optionTemplates",""],[3,"cvcOnSearch","cvcOnOpenChange","cvcSelectComponent","cvcOnModelChange","cvcAddEntity","cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcSelectOpen"],[4,"ngrxLet"],[4,"ngFor","ngForOf"],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf"],[3,"innerHtml"],["nz-typography","","nzType","secondary","nz-tooltip","",3,"nzTooltipTitle","innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcOnClose","cvcCacheId","cvcContext","cvcMode"],[3,"cvcOnCreate","cvcSearchString"]],template:function(h,_){if(1&h){const ee=e.RV6();e.j41(0,"cvc-entity-select",3),e.nI1(1,"ngrxPush"),e.nI1(2,"ngrxPush"),e.nI1(3,"ngrxPush"),e.nI1(4,"ngrxPush"),e.nI1(5,"ngrxPush"),e.nI1(6,"ngrxPush"),e.bIt("cvcOnSearch",function(nn){return e.eBV(ee),e.Njj(_.onSearch$.next(nn))})("cvcOnOpenChange",function(nn){return e.eBV(ee),e.Njj(_.onOpenChange$?_.onOpenChange$.next(nn):null)})("cvcSelectComponent",function(nn){return e.eBV(ee),e.Njj(_.selectComponent=nn)})("cvcOnModelChange",function(nn){return e.eBV(ee),e.Njj(_.props.change&&_.props.change(_.field,nn))}),e.k0s(),e.DNE(7,hi,3,3,"ng-container",4)(8,yo,2,3,"ng-template",null,0,e.C5r)(10,Gi,1,1,"ng-template",null,1,e.C5r)}if(2&h){const ee=e.sdS(9),ft=e.sdS(11);e.Y8G("cvcAddEntity",ft)("cvcSelectMode",_.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",ee)("cvcFormControl",_.formControl)("cvcFormlyAttributes",_.field)("cvcEntityName",_.props.entityName)("cvcPlaceholder",e.bMT(1,14,_.placeholder$))("cvcResults",e.bMT(2,16,_.result$))("cvcOptions",e.bMT(3,18,_.selectOption$))("cvcShowError",_.showError)("cvcDisabled",_.onRequiresDisease$&&!e.bMT(4,20,_.onRequiresDisease$))("cvcLoading",e.bMT(5,22,_.isLoading$))("cvcSelectOpen",e.bMT(6,24,_.selectOpen$)),e.R7$(7),e.Y8G("ngrxLet",_.onSearch$)}},dependencies:[M.Sq,M.bT,Ci.Nj,hn.LH,qe.Di,Wt,tn.b,it,Ci.L9,Xr.M],changeDetection:0})}return u})();const xo={types:[{name:"disease-select",wrappers:["form-field"],component:Xn,defaultOptions:{props:{label:"Disease"}}},{name:"disease-multi-select",wrappers:["form-field"],component:Xn,defaultOptions:{props:{isMultiSelect:!0,label:"Diseases"}}}]};let Wi=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,t.X1,g.qy.forChild(xo),Cn.$,Kn.Zw,Qe.DH,gi.MC,oi.U6,Z.Y3,F.j,L.f3,hn.Qt,on.pc,G.PQ,rt.jl,qe.kT,Gn.T,Go.P,En,jn,ge.i,Ft._]})}return u})();const Po=["optionTemplates"];function Qr(u,b){if(1&u&&e.nrm(0,"cvc-attribute-tag",4),2&u){const a=e.XpG().$implicit;e.Y8G("cvcAttrValue",a)}}function Rr(u,b){1&u&&(e.qex(0),e.DNE(1,Qr,1,1,"ng-template",null,1,e.C5r),e.bVm())}function ws(u,b){if(1&u){const a=e.RV6();e.j41(0,"div",5)(1,"cvc-attribute-tag",6),e.bIt("cvcOnClose",function(_){e.eBV(a);const ee=e.XpG();return e.Njj(ee.onTagClose$.next(_))}),e.k0s()()}if(2&u){const a=b.$implicit,h=e.XpG();e.R7$(),e.Y8G("cvcAttrValue",a.nzValue)("cvcContext",h.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",h.props.isMultiSelect?"default":"closeable")}}const ms={DIAGNOSTIC:"Evidence pertains to a variant's impact on patient diagnosis (cancer subtype).",PREDICTIVE:"Evidence pertains to a variant's effect on therapeutic response.",PROGNOSTIC:"Evidence pertains to a variant's impact on disease progression, severity, or patient survival.",PREDISPOSING:"Evidence pertains to a germline variant's role in conferring susceptibility to disease (including pathogenicity evaluations).",ONCOGENIC:"Evidence pertains to a somatic variant's involvement in tumor pathogenesis as described by the Hallmarks of Cancer.",FUNCTIONAL:"Evidence pertains to a variant that alters biological function from the reference state."},Br=qi(Mi(),mi()),vs={types:[{name:"type-select",wrappers:["form-field"],component:(()=>{class u extends Br{constructor(a){super(),this.cdr=a,this.defaultOptions={props:{label:"ENTITY_NAME Type",entityName:{singular:"Entity",plural:"Entities"},placeholder:"Select an ENTITY_NAME Type",isMultiSelect:!1}},this.typeEnums$=new dn.t([])}ngAfterViewInit(){this.configureBaseField(),this.state&&this.state.formReady$?this.state.formReady$.pipe((0,qt.p)(a=>a),(0,hs.s)(1),(0,pn.s)(this)).subscribe(a=>{this.configureField()}):this.configureField()}configureField(){this.onValueChange$.pipe((0,pn.s)(this)).subscribe(a=>{a?(this.props.description=ms[a],this.props.extraType="description",this.field.formControl.markAsTouched()):(this.props.description=void 0,this.props.extraType=void 0)}),this.state?(this.props.placeholder=this.props.placeholder.replace("ENTITY_NAME",this.state.entityName),this.props.label=this.props.label.replace("ENTITY_NAME",this.state.entityName),this.props.tooltip=`Type of clinical outcome associated with the ${this.state.entityName} statement.`,this.state.enums.entityType$?(this.state.enums.entityType$.pipe((0,pn.s)(this)).subscribe(a=>{this.typeEnums$.next(a)}),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,me.T)(a=>a.map(h=>h))),this.configureEnumSelect()):console.error(`${this.field.id} could not find state's enums.inputEnum$ to populate its select options.`)):console.error(`${this.field.id} requires a form state to configure itself, none was found.`)}configureEnumSelect(){this.configureEnumSelectField({optionEnum$:this.typeEnums$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}static#e=this.\u0275fac=function(h){return new(h||u)(e.rXU(e.gRc))};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["cvc-type-select"]],viewQuery:function(h,_){if(1&h&&e.GBs(Po,5,e.C4Q),2&h){let ee;e.mGM(ee=e.lsd())&&(_.optionTemplates=ee)}},features:[e.Vt3],decls:6,vars:13,consts:[["selectedTemplate",""],["optionTemplates",""],[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcOnClose","cvcAttrValue","cvcContext","cvcMode"]],template:function(h,_){if(1&h&&(e.nrm(0,"cvc-enum-select",2),e.nI1(1,"ngrxPush"),e.DNE(2,Rr,3,0,"ng-container",3),e.nI1(3,"ngrxPush"),e.DNE(4,ws,2,3,"ng-template",null,0,e.C5r)),2&h){const ee=e.sdS(5);e.Y8G("cvcFormControl",_.formControl)("cvcFormlyAttributes",_.field)("cvcSelectMode",_.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",_.props.placeholder)("cvcCustomTemplate",ee)("cvcOptions",e.bMT(1,9,_.selectOption$))("cvcShowError",_.showError)("cvcDisabled",_.props.disabled),e.R7$(2),e.Y8G("ngForOf",e.bMT(3,11,_.typeEnums$))}},dependencies:[M.Sq,to,Si,Ci.L9],changeDetection:0})}return u})()}]};let Ec=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,t.X1,g.qy.forChild(vs),En,Kr,ci]})}return u})();var xs=c(9214);let Tc=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,qe.kT]})}return u})();var Yo=c(5703),ns=c(2602),no=c(9247),Ma=c(2816),Ps=c(152),is=c(1661),Gu=c(9869);const H1={isSelectCol:u=>"select"===u.type,isEntityTagCol:u=>"entity-tag"===u.type,isEnumTagCol:u=>"enum-tag"===u.type,isTextTagCol:u=>"text-tag"===u.type},zc=u=>void 0!==u.sort,Jr=u=>void 0!==u.filter,Wc={description:xn.NVO.Description,disease:xn.NVO.DiseaseName,evidenceDirection:xn.NVO.EvidenceDirection,evidenceLevel:xn.NVO.EvidenceLevel,evidenceRating:xn.NVO.EvidenceRating,evidenceType:xn.NVO.EvidenceType,id:xn.NVO.Id,significance:xn.NVO.Significance,status:xn.NVO.Status,variantOrigin:xn.NVO.VariantOrigin},fa={molecularProfile:"molecularProfileName",disease:"diseaseName",therapies:"therapyName",evidenceItem:"id"},ma=["selected","id"];class Kc{constructor(){this.sortStreams=[],this.filterStreams=[],this.config=this.configureColumnStreams([{key:"selected",label:"Select",type:"select",width:"25px",align:"center",fixedLeft:!0,checkbox:{th:{showCheckbox:!1},td:{showCheckbox:!0}}},{hidden:!0,key:"id",label:"ID",type:"default",width:"30px"},{hidden:!0,key:"status",label:"Status",type:"default",width:"50px"},{key:"id",label:"Evidence",type:"entity-tag",width:"95px",context:"evidenceItem",fixedLeft:!0,showStatus:!0,tag:{fullWidth:!0},sort:{default:"ascend"},filter:{inputType:"default",options:[{key:"EID",value:null}],transform:b=>b?+b.toString().replace(/EID/i,""):null}},{key:"molecularProfile",label:"Molecular Profile",type:"entity-tag",width:"240px",sort:{},tag:{truncateLabel:"200px"},filter:{inputType:"default",typename:"MolecularProfile",options:[{key:"Filter Therapy Names",value:null}]}},{key:"disease",type:"entity-tag",label:"Disease",width:"240px",sort:{},tag:{truncateLabel:"200px"},filter:{inputType:"default",typename:"Disease",options:[{key:"Filter Disease Names",value:null}]}},{key:"therapies",label:"Therapies",type:"entity-tag",width:"275px",sort:{disabled:!0},tag:{maxTags:2,truncateLabel:"150px"},filter:{inputType:"default",typename:"Therapy",options:[{key:"Filter Therapy Names",value:null}]}},{key:"therapyInteractionType",label:"INT",tooltip:"Therapy Interaction Type",type:"enum-tag",width:"40px",align:"center",emptyValueCategory:"not-applicable",sort:{},filter:{options:this.getAttributeFilters((0,Ei.KF)(xn.qld))}},{key:"description",label:"DSC",tooltip:"Evidence Description",type:"text-tag",width:"40px",align:"center",fixedRight:!0,emptyValueCategory:"unspecified",sort:{},filter:{inputType:"default",options:[{key:"Search Descriptions",value:null}]}},{key:"evidenceType",label:"ET",tooltip:"Evidence Type",type:"enum-tag",width:"40px",align:"center",fixedRight:!0,sort:{},filter:{options:this.getAttributeFilters((0,Ei.KF)(xn.M1P))}},{key:"evidenceLevel",label:"EL",tooltip:"Evidence Level",type:"enum-tag",width:"40px",align:"center",fixedRight:!0,sort:{},filter:{options:this.getAttributeFilters((0,Ei.KF)(xn.iHU))}},{key:"evidenceDirection",label:"ED",tooltip:"Evidence Direction",type:"enum-tag",width:"40px",align:"center",fixedRight:!0,sort:{},filter:{options:this.getAttributeFilters((0,Ei.KF)(xn.$Ni))}},{key:"significance",label:"SI",tooltip:"Significance",type:"enum-tag",align:"center",width:"40px",fixedRight:!0,sort:{},filter:{options:this.getAttributeFilters((0,Ei.KF)(xn.Vue))}},{key:"evidenceRating",label:"ER",tooltip:"Evidence Rating",type:"enum-tag",width:"45px",align:"center",fixedRight:!0,tag:{showLabel:"short-string"},sort:{},filter:{options:[1,2,3,4,5].map(b=>({value:b,text:`${b} stars`}))}}])}get(){return this.config}getSortStreams(){return this.sortStreams}getFilterStreams(){return this.filterStreams}getAttributeFilters(b,a){return b.getValues().map(_=>({text:(0,ro.u)(_),value:_,byDefault:a===_}))}configureColumnStreams(b){return b.forEach(a=>{const h=a;if(zc(h)&&(h.sort.changes=new dn.t({key:h.key,value:h.sort.default??null}),this.sortStreams.push(h.sort.changes)),Jr(h)){const _=h.filter.options.find(ee=>ee.byDefault)?.value;h.filter.changes=new dn.t({key:h.key,value:_??null}),this.filterStreams.push(h.filter.changes)}}),b}}var Fs=c(2033);const As=(u,b,a)=>({$implicit:u,config:b,emphasize:a});function su(u,b){1&u&&e.eu8(0)}function Xc(u,b){if(1&u&&(e.qex(0),e.j41(1,"span",1),e.DNE(2,su,1,0,"ng-container",2),e.k0s(),e.bVm()),2&u){const a=b.$implicit,h=e.XpG();e.R7$(2),e.Y8G("ngTemplateOutlet",h.cvcTagTemplate)("ngTemplateOutletContext",e.sMw(2,As,a,h.config,null==h.config?null:h.config.emphasize))}}let Xs=class x8{set cvcTagListConfig(b){!b||!b.tagList||!b.tag||(this.config=b,this.setEntities(b.tagList,b.tag))}constructor(){this.entities=[]}setEntities(b,a){this.entities=b&&0!==b.length&&0!==a.maxTags?b:[]}static#e=this.\u0275fac=function(a){return new(a||x8)};static#t=this.\u0275cmp=e.VBU({type:x8,selectors:[["cvc-entity-tag-list"]],inputs:{cvcTagListConfig:"cvcTagListConfig",cvcTagTemplate:"cvcTagTemplate"},decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[1,"tag-container"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(a,h){1&a&&e.DNE(0,Xc,3,6,"ng-container",0),2&a&&e.Y8G("ngForOf",h.entities)},dependencies:[M.Sq,M.T3],styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}.hide-dropdown[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]{display:inline-block;margin-bottom:-4px}.tag-container[_ngcontent-%COMP%]{display:inline-block;margin-bottom:4px}"],changeDetection:0})};Xs=(0,vi.Cg)([(0,pn.d)()],Xs);var Cl=c(3075),Sa=c(4137);const Qc=(u,b,a,h,_)=>({tagList:u,tag:b,showPopover:a,status:h,emphasize:_});function Mc(u,b){if(1&u&&(e.nrm(0,"span",7),e.nI1(1,"typenameToIcon"),e.nI1(2,"entityColor")),2&u){const a=b.$implicit;e.Y8G("nzType",e.bMT(1,2,a.__typename))("nzTwotoneColor",e.bMT(2,4,a.__typename))}}function os(u,b){if(1&u&&(e.qex(0),e.DNE(1,Mc,3,6,"span",6),e.bVm()),2&u){const a=e.XpG();e.R7$(),e.Y8G("ngForOf",a.entities)}}function ga(u,b){if(1&u&&(e.j41(0,"span",8)(1,"strong"),e.EFF(2),e.k0s()(),e.nrm(3,"span",7),e.nI1(4,"typenameToIcon"),e.nI1(5,"entityColor")),2&u){const a=e.XpG();e.R7$(2),e.JRh(a.entities.length),e.R7$(),e.Y8G("nzType",e.bMT(4,3,a.entities[0].__typename))("nzTwotoneColor",e.bMT(5,5,a.entities[0].__typename))}}function au(u,b){if(1&u&&e.nrm(0,"cvc-entity-tag-list",11),2&u){const a=e.XpG(2);e.Y8G("cvcTagTemplate",a.cvcTagTemplate)("cvcTagListConfig",e.s1E(2,Qc,a.entities,a.config.tag,a.config.showPopover,a.config.status,a.config.emphasize))}}function Wu(u,b){1&u&&e.EFF(0," Invalid config specified for entity-tag-list. ")}function _s(u,b){if(1&u&&(e.j41(0,"div",9),e.DNE(1,au,1,8,"cvc-entity-tag-list",10),e.k0s(),e.DNE(2,Wu,1,0,"ng-template",null,2,e.C5r)),2&u){const a=e.sdS(3),h=e.XpG();e.R7$(),e.Y8G("ngIf",h.config)("ngIfElse",a)}}let cu=(()=>{class u{set cvcCollectionTagConfig(a){!a||!a.tagList||!a.tag||(this.setConfig(a),this.setEntities(a.tagList))}constructor(){this.cvcShowMaxIcons=5,this.cvcShowFullLabels=!0,this.entities=[]}setConfig(a){this.config=this.cvcShowFullLabels?{...a,tag:{...a.tag,truncateLabel:void 0}}:a}setEntities(a){this.entities=a&&0!==a.length?a:[]}static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["cvc-entity-collection-tag"]],inputs:{cvcCollectionTagConfig:"cvcCollectionTagConfig",cvcTagTemplate:"cvcTagTemplate",cvcShowMaxIcons:"cvcShowMaxIcons",cvcShowFullLabels:"cvcShowFullLabels"},decls:9,vars:3,consts:[["showCount",""],["tagListPopover",""],["noConfig",""],["nz-popover","","nzPopoverPlacement","top","nzPopoverTrigger","hover",3,"nzPopoverContent"],["nz-typography","","nzType","secondary",1,"plus-sign"],[4,"ngIf","ngIfElse"],["class","entity-icon","nz-icon","","nzTheme","twotone",3,"nzType","nzTwotoneColor",4,"ngFor","ngForOf"],["nz-icon","","nzTheme","twotone",1,"entity-icon",3,"nzType","nzTwotoneColor"],["nz-typography","","nzType","secondary",1,"entity-count"],[1,"popover-container"],[3,"cvcTagTemplate","cvcTagListConfig",4,"ngIf","ngIfElse"],[3,"cvcTagTemplate","cvcTagListConfig"]],template:function(h,_){if(1&h&&(e.j41(0,"nz-tag",3)(1,"span",4)(2,"strong"),e.EFF(3,"+"),e.k0s()(),e.DNE(4,os,2,1,"ng-container",5)(5,ga,6,7,"ng-template",null,0,e.C5r),e.k0s(),e.DNE(7,_s,4,2,"ng-template",null,1,e.C5r)),2&h){const ee=e.sdS(6),ft=e.sdS(8);e.Y8G("nzPopoverContent",ft),e.R7$(4),e.Y8G("ngIf",_.entities.length<=_.cvcShowMaxIcons)("ngIfElse",ee)}},dependencies:[M.Sq,M.bT,Gn.s,qe.Di,gi.L_,Z.Dn,Xs,Cl.R,Sa.o],styles:["[_nghost-%COMP%]{display:inline-block}.popover-container[_ngcontent-%COMP%]{max-width:300px}nz-tag[_ngcontent-%COMP%]{margin:0;padding:0;margin-inline-end:4px}nz-tag[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block}nz-tag[_ngcontent-%COMP%]   .plus-sign[_ngcontent-%COMP%]{padding:3px 3px 3px 4px;margin:-3px 0;line-height:1}nz-tag[_ngcontent-%COMP%]   .entity-icon[_ngcontent-%COMP%]:first-child{padding-left:2px}nz-tag[_ngcontent-%COMP%]   .entity-icon[_ngcontent-%COMP%]{margin:-3px 1px -4px -1px;padding:3px 0;line-height:1}nz-tag[_ngcontent-%COMP%]   .entity-icon[_ngcontent-%COMP%]:last-child{padding-right:3px}nz-tag[_ngcontent-%COMP%]   .entity-count[_ngcontent-%COMP%]{margin-left:-2px;padding-right:4px}"],changeDetection:0})}return u})();var Jc=c(3296);function P(u,b){if(1&u&&(e.j41(0,"span",1),e.EFF(1),e.nI1(2,"number"),e.nI1(3,"number"),e.k0s()),2&u){const a=b.ngIf;e.R7$(),e.Lme(" ",e.bMT(2,2,a.edgeCount)," of ",e.bMT(3,4,a.filteredCount)," displayed\n")}}let ae=(()=>{class u{ngOnInit(){this.tableCountsInfo$=this.cvcTableCountsConnection.pipe((0,qt.p)(a=>null!=a.totalCount||null!=a.filteredCount),(0,me.T)(a=>{const h=a.filteredCount,_=a.totalCount,ee=a.edges;return null==h&&null==_&&console.log("Need to provide either filtered count or total count in the table counts component"),{edgeCount:ee.length,filteredCount:h??_}}))}static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["cvc-table-counts2"]],inputs:{cvcTableCountsConnection:"cvcTableCountsConnection"},decls:2,vars:3,consts:[["class","table-counts","nz-typography","","nzType","secondary",4,"ngIf"],["nz-typography","","nzType","secondary",1,"table-counts"]],template:function(h,_){1&h&&(e.DNE(0,P,4,6,"span",0),e.nI1(1,"ngrxPush")),2&h&&e.Y8G("ngIf",e.bMT(1,1,_.tableCountsInfo$))},dependencies:[M.bT,qe.Di,M.QX,Ci.L9],styles:[":[_nghost-%COMP%]{border:1px solid red}.table-counts[_ngcontent-%COMP%]{display:inline-block}"],changeDetection:0})}return u})();var k=c(1594),le=c(3946);let $e=class P8{set cvcTableScrollerToIndex(b){void 0!==b&&this.scrollToIndex(b)}set cvcTableScrollerToOffset(b){void 0!==b&&this.scrollToIndex(b)}constructor(b){this.host=b,this.cvcTableScrollerOnScroll=new e.bkB,this.cvcTableScrollerOnFetch=new e.bkB,this.cvcTableScrollerTargetHeight=140,this.cvcTableScrollerFetchCount=50,this.onLoadThrottleTime=500,this.onScrollThrottleTime=250,this.onScrollDebounceTime=300}ngAfterViewInit(){if(!this.host||!this.host.cdkVirtualScrollViewport)throw new Error("cvcTableScroller directive could not obtain reference to host cdkVirtualScrollViewport.");this.viewport=this.host.cdkVirtualScrollViewport,this.scrolled$=this.viewport.elementScrolled(),this.rendered$=this.viewport.renderedRangeStream,this.rendered$.pipe((0,k.$)()).subscribe(()=>this.viewport.checkViewportSize()),this.scrolled$.pipe((0,Sr.c)(this.onScrollThrottleTime,es.E,{leading:!0,trailing:!0}),(0,On.M)(b=>this.cvcTableScrollerOnScroll.next("scroll")),(0,Ps.B)(this.onScrollDebounceTime),(0,pn.s)(this)).subscribe(b=>{this.cvcTableScrollerOnScroll.next("stop")}),this.scrolled$.pipe((0,me.T)(b=>this.viewport.measureScrollOffset("bottom")),(0,le.J)(),(0,qt.p)(([b,a])=>a<b&&a<this.cvcTableScrollerTargetHeight),(0,Sr.c)(this.onLoadThrottleTime),(0,pn.s)(this)).subscribe(b=>{this.cvcTableScrollerOnScroll.next("bottom");try{this.loadMore(this.cvcTableScrollerPageInfo)}catch(a){console.error(a)}})}loadMore(b){const a=this.cvcTableScrollerQueryRef;if(!b&&a)throw new Error("table-scroll directive requires PageInfo to use provided QueryRef.");if(b&&!a)throw new Error("table-scroll directive requires valid QueryRef when PageInfo provided.");if(b&&a){const[h,_,ee]=[this.cvcTableScrollerFetchCount,b.hasNextPage,b.endCursor];if(!h||!ee)throw new Error("table-scroll PageInfo invalid.");if(!_)return;this.cvcTableScrollerOnFetch.next({first:h,after:ee})}}scrollToIndex(b){const[a,h]=[this.host,this.host.cdkVirtualScrollViewport];if(!a||!h)throw new Error("table-scroll scrollToIndex() cannot find host viewport.");h.scrollToIndex(b)}scrollToOffset(b){const[a,h]=[this.host,this.host.cdkVirtualScrollViewport];if(!a||!h)throw new Error("table-scroll scrollToOffset() cannot find host viewport.");h.scrollToOffset(b)}static#e=this.\u0275fac=function(a){return new(a||P8)(e.rXU(no.CP))};static#t=this.\u0275dir=e.FsC({type:P8,selectors:[["","cvcTableScroller",""]],inputs:{cvcTableScrollerTargetHeight:"cvcTableScrollerTargetHeight",cvcTableScrollerQueryRef:"cvcTableScrollerQueryRef",cvcTableScrollerPageInfo:"cvcTableScrollerPageInfo",cvcTableScrollerFetchCount:"cvcTableScrollerFetchCount",cvcTableScrollerToIndex:"cvcTableScrollerToIndex",cvcTableScrollerToOffset:"cvcTableScrollerToOffset"},outputs:{cvcTableScrollerOnScroll:"cvcTableScrollerOnScroll",cvcTableScrollerOnFetch:"cvcTableScrollerOnFetch"}})};function mt(u,b){1&u&&e.nrm(0,"span",8)}function kt(u,b){if(1&u){const a=e.RV6();e.j41(0,"span",9),e.bIt("click",function(){e.eBV(a),e.XpG(2);const _=e.sdS(3),ee=e.XpG();return _.value="",e.Njj(ee.cvcModelChange.next(null))}),e.k0s()}}function yn(u,b){if(1&u&&e.DNE(0,mt,1,0,"span",6)(1,kt,1,0,"span",7),2&u){e.XpG();const a=e.sdS(3);e.Y8G("ngIf",!a.value),e.R7$(),e.Y8G("ngIf",a.value)}}function ln(u,b){if(1&u){const a=e.RV6();e.qex(0),e.j41(1,"nz-input-group",4)(2,"input",5,1),e.bIt("ngModelChange",function(_){e.eBV(a);const ee=e.XpG();return e.Njj(ee.cvcModelChange.next(_))}),e.k0s()(),e.DNE(4,yn,2,2,"ng-template",null,2,e.C5r),e.bVm()}if(2&u){const a=e.sdS(5),h=e.XpG();e.R7$(),e.Y8G("nzSuffix",a),e.R7$(),e.Y8G("placeholder",h.cvcPlaceholder)("ngModel",h.cvcModel)}}function si(u,b){if(1&u){const a=e.RV6();e.j41(0,"nz-input-number-group",10)(1,"nz-input-number",11,1),e.bIt("ngModelChange",function(_){e.eBV(a);const ee=e.XpG();return e.Njj(ee.cvcModelChange.next(""===_?null:_))}),e.k0s()()}if(2&u){let a;const h=e.XpG();e.R7$(),e.Y8G("nzPlaceHolder",null!==(a=h.cvcPlaceholder)&&void 0!==a?a:"")("ngModel",h.cvcModel)("nzMin",1)("nzStep",1)}}$e=(0,vi.Cg)([(0,pn.d)()],$e);let Fi=(()=>{class u{constructor(){this.cvcModel=null,this.cvcModelChange=new e.bkB,this.cvcInputType="default"}static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["cvc-table-filter-input"]],inputs:{cvcModel:"cvcModel",cvcInputType:"cvcInputType",cvcPlaceholder:"cvcPlaceholder"},outputs:{cvcModelChange:"cvcModelChange"},decls:3,vars:2,consts:[["numericInput",""],["filterInput",""],["suffixIcon",""],[4,"ngIf","ngIfElse"],["nzSize","small",3,"nzSuffix"],["nz-input","",3,"ngModelChange","placeholder","ngModel"],["nz-icon","","nzType","search","style","color: #ddd",4,"ngIf"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzType","search",2,"color","#ddd"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],["nzSize","small"],[2,"width","100%",3,"ngModelChange","nzPlaceHolder","ngModel","nzMin","nzStep"]],template:function(h,_){if(1&h&&e.DNE(0,ln,6,3,"ng-container",3)(1,si,3,4,"ng-template",null,0,e.C5r),2&h){const ee=e.sdS(2);e.Y8G("ngIf","default"===_.cvcInputType)("ngIfElse",ee)}},dependencies:[M.bT,t.me,t.BC,t.vS,di.c,Z.Dn,F.Sy,F.tg,F.vN,_e,et],styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}.hide-dropdown[_ngcontent-%COMP%]{display:none}  nz-input-group{border-color:#d9d9d9!important}"]})}return u})();var Ai=c(1868);function Ro(u,b){if(1&u){const a=e.RV6();e.j41(0,"li",5),e.bIt("click",function(){const _=e.eBV(a).$implicit,ee=e.XpG();return e.Njj(ee.cvcOptionChange.next({key:ee.cvcColumnKey,value:_.value}))}),e.nrm(1,"cvc-attribute-tag",6),e.k0s()}if(2&u){const a=b.$implicit,h=e.XpG();e.Y8G("nzSelected",(null==h.cvcOption?null:h.cvcOption.value)===a.value),e.R7$(),e.Y8G("cvcFullWidth",!0)("cvcChecked",(null==h.cvcOption?null:h.cvcOption.value)===a.value)("cvcAttrValue",a.value)}}let ys=(()=>{class u{constructor(){this.cvcOptionChange=new e.bkB}static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["cvc-enum-filter-menu"]],inputs:{cvcColumnKey:"cvcColumnKey",cvcFilterOptions:"cvcFilterOptions",cvcOption:"cvcOption"},outputs:{cvcOptionChange:"cvcOptionChange"},decls:6,vars:2,consts:[["nz-menu",""],["nz-menu-item","",3,"nzSelected","click",4,"ngFor","ngForOf"],[2,"padding","3px"],["nz-button","","nzType","default","nzBlock","","nzSize","small",3,"click","disabled"],["nz-icon","","nzType","retweet","nzTheme","outline"],["nz-menu-item","",3,"click","nzSelected"],["cvcContext","menu-item",3,"cvcFullWidth","cvcChecked","cvcAttrValue"]],template:function(h,_){1&h&&(e.j41(0,"ul",0),e.DNE(1,Ro,2,4,"li",1),e.j41(2,"li",2)(3,"button",3),e.bIt("click",function(){return _.cvcOptionChange.next({key:_.cvcColumnKey,value:null})}),e.nrm(4,"span",4),e.EFF(5," Reset "),e.k0s()()()),2&h&&(e.R7$(),e.Y8G("ngForOf",_.cvcFilterOptions),e.R7$(2),e.Y8G("disabled",null===(null==_.cvcOption?null:_.cvcOption.value)))},dependencies:[M.Sq,to,Kn.aO,di.c,ho.p,Ai.jS,Ai.CU,Z.Dn],styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}.hide-dropdown[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]     ul li:hover{background-color:#e6f7ff}[_nghost-%COMP%]     ul li.ant-dropdown-menu-item-selected{background-color:#1890ff}[_nghost-%COMP%]     ul li.ant-dropdown-menu-item-selected:active{background-color:#096dd9}"],changeDetection:0})}return u})(),Er=(()=>{class u{transform(a){return null!=a&&Array.isArray(a)}static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275pipe=e.EJ8({name:"isArray",type:u,pure:!0})}return u})(),Hi=(()=>{class u{transform(a,h){return h(a)?a:void 0}static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275pipe=e.EJ8({name:"guardType",type:u,pure:!0})}return u})();const So=()=>[],er=()=>({x:"800px",y:"200px"}),ia=(u,b,a)=>({$implicit:u,config:b,emphasize:a}),tr=(u,b,a,h,_)=>({tagList:u,tag:b,showPopover:a,status:h,emphasize:_}),bl=()=>[6,6],El=u=>({$implicit:u});function Tl(u,b){if(1&u&&e.nrm(0,"th",28),2&u){let a;const h=b.ngIf;e.Y8G("nzShowCheckbox",h.checkbox.th.showCheckbox||!1)("nzWidth",h.width)("nzAlign",null!==(a=h.align)&&void 0!==a?a:"left")("nzLeft",h.fixedLeft||!1)("nzRight",h.fixedRight||!1)}}function Jd(u,b){if(1&u){const a=e.RV6();e.j41(0,"th",29),e.nI1(1,"ngrxPush"),e.bIt("nzSortOrderChange",function(_){const ee=e.eBV(a).ngIf;return e.Njj(ee.sort.changes.next({key:ee.key,value:_}))}),e.j41(2,"span",30),e.EFF(3),e.k0s()()}if(2&u){let a,h;const _=b.ngIf;e.Y8G("nzColumnKey",_.key)("nzAlign",null!==(a=_.align)&&void 0!==a?a:"left")("nzWidth",_.width)("nzLeft",_.fixedLeft||!1)("nzRight",_.fixedRight||!1)("nzShowSort",void 0!==_.sort&&!_.sort.disabled)("nzSortFn",!_.sort.disabled)("nzSortOrder",(null==(h=e.bMT(1,10,_.sort.changes))?null:h.value)||null),e.R7$(2),e.Y8G("nzTooltipTitle",_.tooltip),e.R7$(),e.SpI(" ",_.label," ")}}function Zd(u,b){if(1&u&&(e.j41(0,"th",31),e.EFF(1),e.k0s()),2&u){let a;const h=b.ngIf;e.Y8G("nzColumnKey",h.key)("nzAlign",null!==(a=h.align)&&void 0!==a?a:"left")("nzWidth",h.width)("nzLeft",h.fixedLeft||!1)("nzRight",h.fixedRight||!1)("nzTooltipTitle",h.tooltip),e.R7$(),e.SpI(" ",h.label," ")}}function zl(u,b){if(1&u&&(e.j41(0,"th",31),e.EFF(1),e.k0s()),2&u){let a;const h=b.ngIf;e.Y8G("nzColumnKey",h.key)("nzAlign",null!==(a=h.align)&&void 0!==a?a:"left")("nzWidth",h.width)("nzLeft",h.fixedLeft||!1)("nzRight",h.fixedRight||!1)("nzTooltipTitle",h.tooltip),e.R7$(),e.SpI(" ",h.label," ")}}function j1(u,b){if(1&u&&(e.qex(0),e.DNE(1,Tl,1,5,"th",25),e.nI1(2,"guardType"),e.DNE(3,Jd,4,12,"th",26),e.nI1(4,"guardType"),e.DNE(5,Zd,2,7,"th",27),e.nI1(6,"guardType"),e.DNE(7,zl,2,7,"th",27),e.nI1(8,"guardType"),e.bVm()),2&u){const a=e.XpG().$implicit,h=e.XpG(2);e.R7$(),e.Y8G("ngIf",e.i5U(2,4,a,h.colGuards.isSelectCol)),e.R7$(2),e.Y8G("ngIf",e.i5U(4,7,a,h.colGuards.isEntityTagCol)),e.R7$(2),e.Y8G("ngIf",e.i5U(6,10,a,h.colGuards.isEnumTagCol)),e.R7$(2),e.Y8G("ngIf",e.i5U(8,13,a,h.colGuards.isTextTagCol))}}function Sc(u,b){if(1&u&&(e.qex(0),e.DNE(1,j1,9,16,"ng-container",24),e.bVm()),2&u){const a=b.$implicit;e.R7$(),e.Y8G("ngIf",!a.hidden)}}function lu(u,b){if(1&u&&(e.j41(0,"th",36),e.EFF(1," \xa0 "),e.k0s()),2&u){let a;const h=b.ngIf;e.Y8G("nzColumnKey",h.key)("nzAlign",null!==(a=h.align)&&void 0!==a?a:"left")("nzWidth",h.width)("nzLeft",h.fixedLeft||!1)("nzRight",h.fixedRight||!1)}}function Zc(u,b){if(1&u){const a=e.RV6();e.j41(0,"cvc-table-filter-input",39),e.bIt("cvcModelChange",function(_){const ee=e.eBV(a).ngIf,ft=e.XpG().ngIf;return e.Njj(ee.changes.next(ee.transform?{key:ft.key,value:ee.transform(_)}:{key:ft.key,value:_}))}),e.k0s()}if(2&u){const a=e.XpG().ngIf;e.Y8G("cvcInputType",a.filter.inputType)("cvcPlaceholder",a.filter.options[0].key)("cvcModel",a.filter.options[0].value)}}function U1(u,b){if(1&u&&(e.j41(0,"th",37),e.DNE(1,Zc,1,3,"cvc-table-filter-input",38),e.k0s()),2&u){let a;const h=b.ngIf;e.Y8G("nzColumnKey",h.key)("nzWidth",h.width)("nzAlign",null!==(a=h.align)&&void 0!==a?a:"left")("nzLeft",h.fixedLeft||!1)("nzRight",h.fixedRight||!1),e.R7$(),e.Y8G("ngIf",h.filter)}}function Ml(u,b){if(1&u){const a=e.RV6();e.j41(0,"th",40,4),e.nI1(2,"ngrxPush"),e.bIt("nzSortOrderChange",function(_){const ee=e.eBV(a).ngIf;return e.Njj(ee.sort.changes.next({key:ee.key,value:_}))}),e.j41(3,"nz-filter-trigger",41,5),e.nI1(5,"ngrxPush"),e.nrm(6,"span",42),e.k0s(),e.j41(7,"nz-dropdown-menu",null,6)(9,"cvc-enum-filter-menu",43),e.nI1(10,"ngrxPush"),e.bIt("cvcOptionChange",function(_){const ee=e.eBV(a).ngIf,ft=e.sdS(4);return ee.filter.changes.next(_),e.Njj(ft.nzVisible=!1)}),e.k0s()()()}if(2&u){let a,h,_;const ee=b.ngIf,ft=e.sdS(8);e.Y8G("nzColumnKey",ee.key)("nzWidth",ee.width)("nzAlign",null!==(a=ee.align)&&void 0!==a?a:"left")("nzLeft",ee.fixedLeft||!1)("nzRight",ee.fixedRight||!1)("nzShowSort",!ee.sort.disabled)("nzSortFn",!ee.sort.disabled)("nzSortOrder",(null==(h=e.bMT(2,15,ee.sort.changes))?null:h.value)||null)("nzShowFilter",void 0!==ee.filter)("nzFilterFn",!0),e.R7$(3),e.Y8G("nzDropdownMenu",ft)("nzActive",null!==(null==(_=e.bMT(5,17,ee.filter.changes))?null:_.value)),e.R7$(6),e.Y8G("cvcColumnKey",ee.key)("cvcFilterOptions",ee.filter.options)("cvcOption",e.bMT(10,19,ee.filter.changes))}}function Ku(u,b){if(1&u){const a=e.RV6();e.j41(0,"th",44,4)(2,"nz-filter-trigger",41),e.nI1(3,"ngrxPush"),e.nrm(4,"span",45),e.k0s(),e.j41(5,"nz-dropdown-menu",null,7)(7,"div",46)(8,"div",47)(9,"cvc-table-filter-input",48),e.bIt("cvcModelChange",function(_){const ee=e.eBV(a).ngIf;return e.Njj(ee.filter.changes.next({key:ee.key,value:_}))}),e.k0s()()()()()}if(2&u){let a,h;const _=b.ngIf,ee=e.sdS(6);e.Y8G("nzColumnKey",_.key)("nzWidth",_.width)("nzAlign",null!==(a=_.align)&&void 0!==a?a:"left")("nzLeft",_.fixedLeft||!1)("nzRight",_.fixedRight||!1)("nzFilterFn",!0),e.R7$(2),e.Y8G("nzDropdownMenu",ee)("nzActive",null!==(null==(h=e.bMT(3,10,_.filter.changes))?null:h.value)),e.R7$(7),e.Y8G("cvcPlaceholder",_.filter.options[0].key)("cvcModel",_.filter.options[0].value)}}function Sl(u,b){if(1&u&&(e.qex(0),e.DNE(1,lu,2,5,"th",32),e.nI1(2,"guardType"),e.DNE(3,U1,2,6,"th",33),e.nI1(4,"guardType"),e.DNE(5,Ml,11,21,"th",34),e.nI1(6,"guardType"),e.DNE(7,Ku,10,12,"th",35),e.nI1(8,"guardType"),e.bVm()),2&u){const a=e.XpG().$implicit,h=e.XpG(2);e.R7$(),e.Y8G("ngIf",e.i5U(2,4,a,h.colGuards.isSelectCol)),e.R7$(2),e.Y8G("ngIf",e.i5U(4,7,a,h.colGuards.isEntityTagCol)),e.R7$(2),e.Y8G("ngIf",e.i5U(6,10,a,h.colGuards.isEnumTagCol)),e.R7$(2),e.Y8G("ngIf",e.i5U(8,13,a,h.colGuards.isTextTagCol))}}function uu(u,b){if(1&u&&(e.qex(0),e.DNE(1,Sl,9,16,"ng-container",24),e.bVm()),2&u){const a=b.$implicit;e.R7$(),e.Y8G("ngIf",!a.hidden)}}function du(u,b){if(1&u&&(e.j41(0,"thead")(1,"tr",21),e.DNE(2,Sc,2,1,"ng-container",22),e.k0s(),e.j41(3,"tr",23),e.DNE(4,uu,2,1,"ng-container",22),e.k0s()()),2&u){const a=b.ngrxLet;e.R7$(2),e.Y8G("ngForOf",a),e.R7$(2),e.Y8G("ngForOf",a)}}function Da(u,b){if(1&u){const a=e.RV6();e.j41(0,"td",53),e.bIt("nzCheckedChange",function(_){e.eBV(a);const ee=e.XpG(3).$implicit,ft=e.XpG(2);return e.Njj(ft.onRowSelected$.next({id:ee.id,selected:_}))}),e.k0s()}if(2&u){let a;const h=b.ngIf,_=e.XpG(3).$implicit;e.Y8G("nzChecked",_.selected)("nzAlign",null!==(a=h.align)&&void 0!==a?a:"left")("nzLeft",h.fixedLeft||!1)("nzRight",h.fixedRight||!1)}}function Xu(u,b){1&u&&e.eu8(0)}function Dl(u,b){if(1&u&&(e.qex(0),e.DNE(1,Xu,1,0,"ng-container",56),e.nI1(2,"isArray"),e.nI1(3,"ngrxPush"),e.bVm()),2&u){let a;const h=e.XpG().ngIf,_=e.XpG().ngIf,ee=e.sdS(3),ft=e.sdS(5),nn=e.XpG(3).$implicit;e.R7$(),e.Y8G("ngTemplateOutlet",e.bMT(2,2,nn[h])?ee:ft)("ngTemplateOutletContext",e.sMw(6,ia,nn[h],_,null==(a=e.bMT(3,4,_.filter.changes))?null:a.value))}}function qc(u,b){if(1&u&&(e.qex(0),e.DNE(1,Dl,4,10,"ng-container",55),e.bVm()),2&u){const a=b.ngIf;e.XpG();const h=e.sdS(7),_=e.XpG(3).$implicit;e.R7$(),e.Y8G("ngIf",_[a])("ngIfElse",h)}}function Qu(u,b){if(1&u&&(e.qex(0),e.nrm(1,"cvc-entity-collection-tag",58),e.bVm()),2&u){const a=e.XpG(2),h=a.$implicit,_=a.config,ee=a.emphasize;e.XpG();const ft=e.sdS(5),nn=e.XpG(5);e.R7$(),e.Y8G("cvcCollectionTagConfig",e.s1E(3,tr,h.slice(_.tag.maxTags,h.length),_.tag,!nn.isScrolling,!0===_.showStatus?h.status:void 0,ee))("cvcTagTemplate",ft)("cvcShowFullLabels",!0)}}function Ol(u,b){if(1&u&&(e.qex(0),e.nrm(1,"cvc-entity-tag-list",57),e.DNE(2,Qu,2,9,"ng-container",24),e.bVm()),2&u){const a=e.XpG(),h=a.$implicit,_=a.config,ee=a.emphasize;e.XpG();const ft=e.sdS(5),nn=e.XpG(5);e.R7$(),e.Y8G("cvcTagTemplate",ft)("cvcTagListConfig",e.s1E(3,tr,h.slice(0,_.tag.maxTags),_.tag,!nn.isScrolling,!0===_.showStatus?h.status:void 0,ee)),e.R7$(),e.Y8G("ngIf",h.slice(_.tag.maxTags,h.length).length>0)}}function el(u,b){if(1&u&&e.DNE(0,Ol,3,9,"ng-container",55),2&u){const a=b.$implicit;e.XpG();const h=e.sdS(7);e.Y8G("ngIf",a.length>0)("ngIfElse",h)}}function Cs(u,b){if(1&u&&e.nrm(0,"cvc-entity-tag",59),2&u){let a;const h=b.$implicit,_=b.config,ee=b.emphasize,ft=e.XpG(6);e.Y8G("cvcTruncateLabel",null==_.tag?null:_.tag.truncateLabel)("cvcLinkableEntity",h)("cvcEmphasize",ee)("cvcShowPopover",!ft.isScrolling)("cvcStatus",!0===_.showStatus?h.status:void 0)("cvcFullWidth",null!==(a=null==_.tag?null:_.tag.fullWidth)&&void 0!==a&&a)}}function Dc(u,b){if(1&u&&e.nrm(0,"cvc-empty-value",60),2&u){const a=e.XpG().ngIf;e.Y8G("cvcEmptyCategory",a.emptyValueCategory||"not-applicable")}}function Ju(u,b){if(1&u&&(e.j41(0,"td",54),e.DNE(1,qc,2,2,"ng-container",24)(2,el,1,2,"ng-template",null,8,e.C5r)(4,Cs,1,6,"ng-template",null,9,e.C5r)(6,Dc,1,1,"ng-template",null,10,e.C5r),e.k0s()),2&u){let a;const h=b.ngIf;e.Y8G("nzAlign",null!==(a=h.align)&&void 0!==a?a:"left")("nzLeft",h.fixedLeft||!1)("nzRight",h.fixedRight||!1),e.R7$(),e.Y8G("ngIf",h.context||h.key)}}function G1(u,b){if(1&u&&(e.nrm(0,"cvc-attribute-tag",62),e.nI1(1,"evidenceEnumDisplay")),2&u){const a=e.XpG().ngIf,h=e.XpG(3).$implicit,_=e.XpG(2);e.Y8G("cvcFullWidth",!0)("cvcAttrValue",h[a.key])("cvcTooltip",e.bMT(1,3,!_.isScrolling&&h[a.key]))}}function Y1(u,b){if(1&u&&e.nrm(0,"cvc-empty-value",63),2&u){const a=e.XpG().ngIf;e.Y8G("cvcEmptyCategory",a.emptyValueCategory||"unspecified")}}function hu(u,b){if(1&u&&(e.j41(0,"td",54),e.DNE(1,G1,2,5,"cvc-attribute-tag",61)(2,Y1,1,1,"ng-template",null,11,e.C5r),e.k0s()),2&u){let a;const h=b.ngIf,_=e.sdS(3),ee=e.XpG(3).$implicit;e.Y8G("nzAlign",null!==(a=h.align)&&void 0!==a?a:"left")("nzLeft",h.fixedLeft||!1)("nzRight",h.fixedRight||!1),e.R7$(),e.Y8G("ngIf",ee[h.key])("ngIfElse",_)}}function Wa(u,b){if(1&u&&(e.j41(0,"nz-tag",65),e.nrm(1,"span",66),e.k0s()),2&u){const a=e.XpG().ngIf,h=e.XpG(3).$implicit;e.Y8G("nzTooltipTitle",h[a.key])}}function Zu(u,b){if(1&u&&e.nrm(0,"cvc-empty-value",60),2&u){const a=e.XpG().ngIf;e.Y8G("cvcEmptyCategory",a.emptyValueCategory||"unspecified")}}function qu(u,b){if(1&u&&(e.j41(0,"td",54),e.DNE(1,Wa,2,1,"nz-tag",64)(2,Zu,1,1,"ng-template",null,12,e.C5r),e.k0s()),2&u){let a;const h=b.ngIf,_=e.sdS(3),ee=e.XpG(3).$implicit;e.Y8G("nzAlign",null!==(a=h.align)&&void 0!==a?a:"left")("nzLeft",h.fixedLeft||!1)("nzRight",h.fixedRight||!1),e.R7$(),e.Y8G("ngIf",ee[h.key])("ngIfElse",_)}}function e1(u,b){if(1&u&&(e.qex(0),e.DNE(1,Da,1,4,"td",51),e.nI1(2,"guardType"),e.DNE(3,Ju,8,4,"td",52),e.nI1(4,"guardType"),e.DNE(5,hu,4,5,"td",52),e.nI1(6,"guardType"),e.DNE(7,qu,4,5,"td",52),e.nI1(8,"guardType"),e.bVm()),2&u){const a=e.XpG().$implicit,h=e.XpG(3);e.R7$(),e.Y8G("ngIf",e.i5U(2,4,a,h.colGuards.isSelectCol)),e.R7$(2),e.Y8G("ngIf",e.i5U(4,7,a,h.colGuards.isEntityTagCol)),e.R7$(2),e.Y8G("ngIf",e.i5U(6,10,a,h.colGuards.isEnumTagCol)),e.R7$(2),e.Y8G("ngIf",e.i5U(8,13,a,h.colGuards.isTextTagCol))}}function Il(u,b){if(1&u&&(e.qex(0),e.DNE(1,e1,9,16,"ng-container",24),e.bVm()),2&u){const a=b.$implicit;e.R7$(),e.Y8G("ngIf",!a.hidden)}}function pu(u,b){if(1&u&&(e.j41(0,"tr",50),e.DNE(1,Il,2,1,"ng-container",22),e.k0s()),2&u){const a=e.XpG().ngrxLet;e.R7$(),e.Y8G("ngForOf",a)}}function fu(u,b){1&u&&(e.j41(0,"tbody"),e.DNE(1,pu,2,1,"ng-template",49),e.k0s())}function tl(u,b){1&u&&e.nrm(0,"span",71)}function Ka(u,b){if(1&u){const a=e.RV6();e.j41(0,"span",72),e.bIt("click",function(){e.eBV(a),e.XpG(2);const _=e.sdS(3),ee=e.XpG().filter;return _.value="",e.Njj(ee.changes.next({key:ee.key,value:null}))}),e.k0s()}}function t1(u,b){if(1&u&&e.DNE(0,tl,1,0,"span",69)(1,Ka,1,0,"span",70),2&u){e.XpG();const a=e.sdS(3);e.Y8G("ngIf",!a.value),e.R7$(),e.Y8G("ngIf",a.value)}}function n1(u,b){if(1&u){const a=e.RV6();e.qex(0),e.j41(1,"nz-input-group",67)(2,"input",68,14),e.bIt("nzFilterChange",function(_){e.eBV(a);const ee=e.XpG().filter;return e.Njj(ee.changes.next({key:ee.key,value:_}))}),e.k0s()(),e.DNE(4,t1,2,2,"ng-template",null,15,e.C5r),e.bVm()}if(2&u){const a=e.sdS(5),h=e.XpG().filter;e.R7$(),e.Y8G("nzSuffix",a),e.R7$(),e.Y8G("placeholder",h.placeholder)("ngModel",h.defaultValue)}}function gr(u,b){if(1&u){const a=e.RV6();e.j41(0,"nz-input-number-group",73)(1,"nz-input-number",74,14),e.bIt("ngModelChange",function(_){e.eBV(a);const ee=e.XpG().filter;return e.Njj(ee.changes.next({key:ee.key,value:_}))}),e.k0s()()}if(2&u){const a=e.XpG().filter;e.R7$(),e.Y8G("nzPlaceHolder",a.placeholder)("ngModel",a.defaultValue)("nzMin",1)("nzStep",1)}}function mu(u,b){if(1&u&&e.DNE(0,n1,6,3,"ng-container",55)(1,gr,3,4,"ng-template",null,13,e.C5r),2&u){const a=b.filter,h=e.sdS(2);e.Y8G("ngIf",void 0===a.inputType||"default"===a.inputType)("ngIfElse",h)}}function gu(u,b){1&u&&(e.j41(0,"nz-row",75)(1,"nz-col")(2,"span"),e.EFF(3,"Use checkboxes to select or deselect EIDs"),e.k0s()()()),2&u&&e.Y8G("nzGutter",e.lJ4(1,bl))}function Oc(u,b){1&u&&(e.j41(0,"nz-tag",85),e.nrm(1,"i",86),e.j41(2,"span"),e.EFF(3,"Loading\u2026"),e.k0s()())}function o1(u,b){if(1&u&&(e.j41(0,"nz-tag",88),e.nrm(1,"span",89),e.j41(2,"span",90),e.EFF(3),e.k0s()()),2&u){e.XpG();const a=e.sdS(4),h=e.XpG().ngrxLet;e.R7$(2),e.Y8G("nzTooltipTitle",a)("nzTooltipTitleContext",e.eq3(3,El,h.query)),e.R7$(),e.SpI(" Query Error",h.query.length>1?"s":""," ")}}function r1(u,b){if(1&u&&(e.j41(0,"nz-tag",88)(1,"span",90)(2,"span",91)(3,"strong"),e.EFF(4),e.k0s()()()()),2&u){e.XpG();const a=e.sdS(4),h=e.XpG().ngrxLet;e.R7$(),e.Y8G("nzTooltipTitle",a)("nzTooltipTitleContext",e.eq3(3,El,h.network)),e.R7$(3),e.SpI(" Network Error",h.query.length>1?"s":""," ")}}function s1(u,b){if(1&u&&(e.j41(0,"div"),e.EFF(1),e.k0s()),2&u){const a=b.$implicit;e.R7$(),e.SpI(" ",a.message," ")}}function a1(u,b){1&u&&e.DNE(0,s1,2,1,"div",22),2&u&&e.Y8G("ngForOf",b.$implicit)}function c1(u,b){if(1&u&&(e.qex(0),e.DNE(1,o1,4,5,"nz-tag",87)(2,r1,5,5,"nz-tag",87)(3,a1,1,1,"ng-template",null,17,e.C5r),e.bVm()),2&u){const a=e.XpG().ngrxLet;e.R7$(),e.Y8G("ngIf",a.query),e.R7$(),e.Y8G("ngIf",a.network)}}function l1(u,b){if(1&u&&(e.qex(0),e.DNE(1,c1,5,2,"ng-container",24),e.bVm()),2&u){const a=b.ngrxLet;e.R7$(),e.Y8G("ngIf",a)}}function wl(u,b){if(1&u){const a=e.RV6();e.j41(0,"div",92)(1,"nz-checkbox-group",93),e.nI1(2,"ngrxPush"),e.bIt("ngModelChange",function(_){e.eBV(a);const ee=e.XpG(2);return e.Njj(ee.onPreferenceChange$.next(_))}),e.k0s()()}if(2&u){const a=e.XpG(2);e.R7$(),e.Y8G("ngModel",e.bMT(2,1,a.setPreference$))}}function nl(u,b){if(1&u){const a=e.RV6();e.j41(0,"nz-row",75)(1,"nz-col",76),e.DNE(2,Oc,4,0,"nz-tag",77),e.nI1(3,"ngrxPush"),e.nI1(4,"ngrxPush"),e.nrm(5,"cvc-no-more-rows",78),e.nI1(6,"ngrxPush"),e.k0s(),e.j41(7,"nz-col",76),e.DNE(8,l1,2,1,"ng-container",20),e.k0s(),e.j41(9,"nz-col",76),e.nrm(10,"cvc-table-counts2",79),e.k0s(),e.j41(11,"nz-col",80)(12,"nz-button-group")(13,"button",81),e.bIt("click",function(){e.eBV(a);const _=e.XpG();return e.Njj(_.onResetFilter$.next())}),e.nrm(14,"span",82),e.k0s(),e.j41(15,"button",83),e.nrm(16,"span",84),e.k0s()(),e.DNE(17,wl,3,3,"ng-template",null,16,e.C5r),e.k0s()()}if(2&u){const a=e.sdS(18),h=e.XpG();e.Y8G("nzGutter",8),e.R7$(2),e.Y8G("ngIf",e.bMT(3,7,h.loading$)&&e.bMT(4,9,h.isFetchMore$)),e.R7$(3),e.Y8G("cvcShowTag",e.bMT(6,11,h.noMoreRows$)),e.R7$(3),e.Y8G("ngrxLet",h.queryError$),e.R7$(2),e.Y8G("cvcTableCountsConnection",h.connection$),e.R7$(5),e.Y8G("nzPopoverContent",a)("nzPopoverTrigger","click")}}let No=class F8{constructor(b,a,h){this.queryGQL=b,this.apollo=a,this.cdr=h,this.cvcSelectedIdsChange=new e.bkB,this.isScrolling=!1,this.colGuards=H1,this.onFetchMore$=new V.B,this.onPreferenceChange$=new dn.t([]),this.onResetFilter$=new V.B,this.onRowSelected$=new V.B,this.onScroll$=new dn.t("stop"),this.onSetSelectedRow$=new dn.t(new Set),this.queryError$=new V.B,this.queryRequest$=new V.B,this.queryResult$=new Ni.m(1),this.isFetchMore$=new dn.t(!1),this.noMoreRows$=new dn.t(!1),this.scrollToIndex$=new V.B,this.tableConfig=new Kc;const _=(0,po.z)(this.tableConfig.getFilterStreams()),ee=(0,po.z)(this.tableConfig.getSortStreams()).pipe((0,qt.p)(ft=>ft.filter(nn=>null!==nn.value).length<=1));this.refetch$=(0,po.z)([ee,_]).pipe((0,me.T)(([ft,nn])=>({query:"refetch",sort:ft,filter:nn}))),this.fetchMore$=this.onFetchMore$.pipe((0,me.T)(ft=>({query:"fetchMore",fetchMore:{...ft}}))),(0,ne.h)(this.refetch$,this.fetchMore$).pipe((0,Ps.B)(50),(0,pn.s)(this)).subscribe(ft=>{const nn=this.getQueryVars(ft);this.queryRef?(this.queryError$.next({}),"refetch"===ft.query?(this.isFetchMore$.next(!1),this.queryRef.refetch(nn).then(Rn=>{(Rn.error||Rn.errors)&&this.queryError$.next(this.getRequestErrors(Rn))}).then(()=>{this.scrollToIndex$.next(0)})):(this.isFetchMore$.next(!0),this.queryRef.fetchMore({variables:nn}).then(Rn=>{(Rn.error||Rn.errors)&&this.queryError$.next(this.getRequestErrors(Rn))}))):(this.isFetchMore$.next(!1),this.queryError$.next({}),this.queryRef=this.queryGQL.watch(nn),this.queryRef.valueChanges.pipe((0,pn.s)(this)).subscribe(Rn=>{this.queryResult$.next(Rn),(Rn.error||Rn.errors)&&this.queryError$.next(this.getRequestErrors(Rn))}))}),this.loading$=this.queryResult$.pipe((0,$i.E)("loading"),(0,J.F)()),this.connection$=this.queryResult$.pipe((0,$i.E)("data","evidenceItems"),(0,qt.p)(fo.kP)),this.pageInfo$=this.connection$.pipe((0,$i.E)("pageInfo"),(0,qt.p)(fo.kP)),this.row$=(0,po.z)([this.connection$.pipe((0,$i.E)("edges"),(0,qt.p)(fo.kP),(0,me.T)(ft=>ft.map(nn=>nn.node))),this.onSetSelectedRow$]).pipe((0,me.T)(([ft,nn])=>ft.map(Rn=>{if(Rn)return{...Rn,evidenceItem:{__typename:"EvidenceItem",id:Rn.id,name:Rn.name,link:Rn.link,status:Rn.status},selected:nn.has(Rn.id)}}))),this.col$=new dn.t(this.tableConfig.get()),this.setPreference$=this.col$.pipe((0,me.T)(ft=>this.getColPrefsFromTableConfig(ft))),this.onPreferenceChange$.pipe((0,Yi.E)(this.col$),(0,me.T)(([ft,nn])=>this.getTableConfigFromColPrefs(ft,nn)),(0,pn.s)(this)).subscribe(ft=>{this.col$.next(ft)}),this.onSetTableFilter$=new dn.t([]),this.onSetTableFilter$.pipe((0,pn.s)(this)).subscribe(ft=>{const nn=this.col$.getValue();ft.forEach(Rn=>{const xi=nn.find(Co=>Co.key===Rn.key);if(void 0!==xi.filter.inputType){const Co=xi.filter.options[0];if(null===Rn.value)return xi.filter.options=[{...Co,value:null}],void xi.filter.changes.next(Rn);if(Array.isArray(Rn.value)&&0===Rn.value.length)return xi.filter.options=[{...Co,value:null}],void xi.filter.changes.next({...Rn,value:null});let jo;Array.isArray(Rn.value)?Rn.value.length>0&&(jo=Rn.value[0]):jo=Rn.value;const Ra=xi.filter.typename;if(!Ra||!jo)return void console.error(`evidence-manager requires column config '${xi.key}' provide a typename for cvcTablePrefs Input to set its filter`);const Bc=this.getEntityName(Ra,jo);if(!Bc)return;xi.filter.options=[{...Co,value:Bc}],xi.filter.changes.next({...Rn,value:Bc})}else Jr(xi)&&xi.filter.changes.next(Rn)})}),this.onSetTablePref$=new dn.t([]),this.onSetTablePref$.pipe((0,Yi.E)(this.setPreference$),(0,me.T)(([ft,nn])=>{const Rn=[];return ft.forEach(xi=>{let Co=nn.find(jo=>jo.value===xi.value);Co?Rn.push({...Co,...xi}):console.warn(`evidence-manager onSetTablePref$ received updated preferences for column '${xi.value}', but a column with that key could not be found.`)}),Rn}),(0,pn.s)(this)).subscribe(ft=>{this.onPreferenceChange$.next(ft)}),this.onRowSelected$.pipe((0,Yi.E)(this.onSetSelectedRow$),(0,pn.s)(this)).subscribe(([ft,nn])=>{ft.selected?nn.add(ft.id):nn.delete(ft.id),this.onSetSelectedRow$.next(nn),this.cvcSelectedIdsChange.next(Array.from(nn))}),this.onScroll$.pipe((0,me.T)(ft=>"stop"!==ft),(0,J.F)(),(0,pn.s)(this)).subscribe(ft=>{this.isScrolling=ft,this.cdr.markForCheck()}),this.onScroll$.pipe((0,qt.p)(ft=>"bottom"===ft),(0,Yi.E)(this.pageInfo$),(0,me.T)(([ft,nn])=>nn),(0,pn.s)(this)).subscribe(ft=>{ft.hasNextPage||(this.noMoreRows$.next(!0),this.cdr.detectChanges(),setInterval(()=>this.noMoreRows$.next(!1)))})}ngAfterViewInit(){this.onResetFilter$.pipe((0,Yi.E)((0,Xo.of)(this.tableConfig.get())),(0,pn.s)(this)).subscribe(([b,a])=>{const h=[];a.forEach(_=>{if(zc(_)&&_.sort.changes&&_.sort.changes.next({key:_.key,value:_.sort.default??null}),Jr(_)){const ee=_.filter.options.find(ft=>1==ft.byDefault)?.value;_.filter.changes&&_.filter.changes.next({key:_.key,value:ee||null})}h.push(_)}),this.col$.next(h)})}getQueryVars(b){const a=this.getQueryFilterParams(b);return{...this.getQuerySortParams(b),...a,...b.fetchMore}}getQuerySortParams(b){if(!b.sort)return;const h=b.sort.find(ee=>null!==ee.value);return h?{sortBy:{column:this.getSortColumnFromColKey(h.key),direction:"ascend"===h.value?xn.UEL.Asc:xn.UEL.Desc||void 0}}:void 0}getQueryFilterParams(b){let a={};return b.filter&&b.filter.forEach(h=>{a[fa[h.key]||h.key]=null===h.value||""===h.value?void 0:h.value}),a}getRequestErrors(b){return{query:b.errors,network:b.error}}getTableConfigFromColPrefs(b,a){return a.forEach(h=>{if(ma.find(ee=>ee===h.key))return;const _=b.find(ee=>ee.value===h.key);_&&(h.hidden=!_?.checked)}),[...a]}getColPrefsFromTableConfig(b){let a=[];return b.forEach(h=>{ma.find(_=>_===h.key)||a.push({label:h.tooltip||h.label,value:h.key,checked:!h.hidden})}),a}getSortColumnFromColKey(b){return Wc[b]}getEntityName(b,a){const h={id:`${b}:${a}`,fragment:Gu.J1`
                fragment Linkable${b}Entity on ${b} {
                  id
                  name
                  link
                }`},_=this.apollo.client.readFragment(h);if(_)return _.name;console.error(`evidence-manager onSetTableFilter$ could not find cached entity ${b}:${a} to populate input filter`)}trackByIndex(b,a){return a?.id}ngOnChanges(b){if(b.cvcTableSettings){const a=b.cvcTableSettings.currentValue;void 0!==a&&this.onSetTableFilter$.next(a.filters)}if(b.cvcSelectedIds){const a=b.cvcSelectedIds.currentValue,h=new Set;void 0!==a&&a.forEach(_=>h.add(_)),this.onSetSelectedRow$.next(h)}}static#e=this.\u0275fac=function(a){return new(a||F8)(e.rXU(xn.BaG),e.rXU(is.Ic),e.rXU(e.gRc))};static#t=this.\u0275cmp=e.VBU({type:F8,selectors:[["cvc-evidence-manager"]],inputs:{cvcTableSettings:"cvcTableSettings",cvcSelectedIds:"cvcSelectedIds"},outputs:{cvcSelectedIdsChange:"cvcSelectedIdsChange"},features:[e.OA$],decls:16,vars:27,consts:[["virtualTable",""],["columnFilterInput",""],["cardTitle",""],["extraTemplate",""],["enumTableFilter",""],["enumTagFilterTrigger",""],["enumFilterMenu","nzDropdownMenu"],["textTagFilterMenu","nzDropdownMenu"],["entityTagList",""],["entityTag",""],["emptyEntityTagCell",""],["emptyEnumTagCell",""],["emptyTextTagCell",""],["numericInput",""],["filterInput",""],["suffixIcon",""],["prefsPopover",""],["queryError",""],["nzSize","small",3,"nzTitle","nzExtra"],["cvcTableScroller","",3,"cvcTableScrollerOnScroll","cvcTableScrollerOnFetch","nzData","cvcTableScrollerQueryRef","cvcTableScrollerPageInfo","cvcTableScrollerToIndex","nzScroll","nzVirtualForTrackBy","nzVirtualItemSize","nzSize","nzFrontPagination","nzShowPagination","nzLoading"],[4,"ngrxLet"],[1,"col-header-row"],[4,"ngFor","ngForOf"],[1,"filter-row"],[4,"ngIf"],[3,"nzShowCheckbox","nzWidth","nzAlign","nzLeft","nzRight",4,"ngIf"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzSortOrderChange",4,"ngIf"],["nz-tooltip","",3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzTooltipTitle",4,"ngIf"],[3,"nzShowCheckbox","nzWidth","nzAlign","nzLeft","nzRight"],[3,"nzSortOrderChange","nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder"],["nz-tooltip","",1,"col-header-label",3,"nzTooltipTitle"],["nz-tooltip","",3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzTooltipTitle"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight",4,"ngIf"],[3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight",4,"ngIf"],["class","attribute-filter","nzCustomFilter","",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzShowFilter","nzFilterFn","nzSortOrderChange",4,"ngIf"],["class","attribute-filter","nzCustomFilter","",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzFilterFn",4,"ngIf"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight"],[3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight"],[3,"cvcInputType","cvcPlaceholder","cvcModel","cvcModelChange",4,"ngIf"],[3,"cvcModelChange","cvcInputType","cvcPlaceholder","cvcModel"],["nzCustomFilter","",1,"attribute-filter",3,"nzSortOrderChange","nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzShowFilter","nzFilterFn"],[3,"nzDropdownMenu","nzActive"],["nz-icon","","nzType","filter","nzTheme","fill"],[3,"cvcOptionChange","cvcColumnKey","cvcFilterOptions","cvcOption"],["nzCustomFilter","",1,"attribute-filter",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzFilterFn"],["nz-icon","","nzType","search"],[1,"ant-table-filter-dropdown"],[1,"custom-input-dropdown"],[3,"cvcModelChange","cvcPlaceholder","cvcModel"],["nz-virtual-scroll",""],[1,"data-row"],[3,"nzChecked","nzAlign","nzLeft","nzRight","nzCheckedChange",4,"ngIf"],[3,"nzAlign","nzLeft","nzRight",4,"ngIf"],[3,"nzCheckedChange","nzChecked","nzAlign","nzLeft","nzRight"],[3,"nzAlign","nzLeft","nzRight"],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"cvcTagTemplate","cvcTagListConfig"],[3,"cvcCollectionTagConfig","cvcTagTemplate","cvcShowFullLabels"],[3,"cvcTruncateLabel","cvcLinkableEntity","cvcEmphasize","cvcShowPopover","cvcStatus","cvcFullWidth"],[3,"cvcEmptyCategory"],["cvcContext","compact",3,"cvcFullWidth","cvcAttrValue","cvcTooltip",4,"ngIf","ngIfElse"],["cvcContext","compact",3,"cvcFullWidth","cvcAttrValue","cvcTooltip"],["cvcDisplayMode","small",3,"cvcEmptyCategory"],["nz-tooltip","","style","width: 100%; cursor: help; color: #595959",3,"nzTooltipTitle",4,"ngIf","ngIfElse"],["nz-tooltip","",2,"width","100%","cursor","help","color","#595959",3,"nzTooltipTitle"],["nz-icon","","nzType","align-left","nzTheme","outline"],["nzSize","small",3,"nzSuffix"],["nz-input","",3,"nzFilterChange","placeholder","ngModel"],["nz-icon","","nzType","search","style","color: #ddd",4,"ngIf"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzType","search",2,"color","#ddd"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],["nzSize","small"],[2,"width","100%",3,"ngModelChange","nzPlaceHolder","ngModel","nzMin","nzStep"],[3,"nzGutter"],["nzFlex","auto"],["nzColor","processing",4,"ngIf"],[3,"cvcShowTag"],[3,"cvcTableCountsConnection"],["nzFlex","35px"],["nz-button","","type","button","nzType","default","nzSize","small",3,"click"],["nz-icon","","nzType","retweet","nzTheme","outline"],["nz-button","","nz-popover","","nzPopoverTitle","Visible Columns","type","button","nzType","default","nzSize","small",3,"nzPopoverContent","nzPopoverTrigger"],["nz-icon","","nzType","setting","nzTheme","outline"],["nzColor","processing"],["nz-icon","","nzType","sync","nzSpin",""],["nzColor","error","style","margin-left: 12px",4,"ngIf"],["nzColor","error",2,"margin-left","12px"],["nz-icon","","nzType","question-circle","nzTheme","outline"],["nz-tooltip","",2,"cursor","help",3,"nzTooltipTitle","nzTooltipTitleContext"],["nz-typography",""],[1,"prefs-popover"],[3,"ngModelChange","ngModel"]],template:function(a,h){if(1&a){const _=e.RV6();e.j41(0,"nz-card",18)(1,"nz-table",19,0),e.nI1(3,"ngrxPush"),e.nI1(4,"ngrxPush"),e.nI1(5,"ngrxPush"),e.nI1(6,"ngrxPush"),e.nI1(7,"ngrxPush"),e.bIt("cvcTableScrollerOnScroll",function(ft){return e.eBV(_),e.Njj(h.onScroll$.next(ft))})("cvcTableScrollerOnFetch",function(ft){return e.eBV(_),e.Njj(h.onFetchMore$.next(ft))}),e.DNE(8,du,5,2,"thead",20)(9,fu,2,0,"tbody",20),e.k0s()(),e.DNE(10,mu,3,2,"ng-template",null,1,e.C5r)(12,gu,4,2,"ng-template",null,2,e.C5r)(14,nl,19,13,"ng-template",null,3,e.C5r)}if(2&a){const _=e.sdS(13),ee=e.sdS(15);e.Y8G("nzTitle",_)("nzExtra",ee),e.R7$(),e.Y8G("nzData",e.bMT(3,15,h.row$)||e.lJ4(25,So))("cvcTableScrollerQueryRef",h.queryRef)("cvcTableScrollerPageInfo",e.bMT(4,17,h.pageInfo$))("cvcTableScrollerToIndex",e.bMT(5,19,h.scrollToIndex$))("nzScroll",e.lJ4(26,er))("nzVirtualForTrackBy",h.trackByIndex)("nzVirtualItemSize",28)("nzSize","small")("nzFrontPagination",!1)("nzShowPagination",!1)("nzLoading",e.bMT(6,21,h.loading$)&&!e.bMT(7,23,h.isFetchMore$)),e.R7$(7),e.Y8G("ngrxLet",h.col$),e.R7$(),e.Y8G("ngrxLet",h.col$)}},dependencies:[M.Sq,M.bT,M.T3,to,Fs.o,cu,Xs,tn.b,Jc.M,ae,t.me,t.BC,t.vS,Ci.Nj,Kn.aO,Kn.dn,di.c,ho.p,Yo.cK,dt.Ov,ns.wQ,L.Uq,L.e,Z.Dn,F.Sy,F.tg,F.vN,_e,et,gi.L_,no.CP,no.Cc,no.SO,no._4,no.GM,no.IL,no.aj,no.kt,no.CC,no.OL,no.Kg,no.jc,no.oZ,Gn.s,hn.LH,qe.Di,$e,Fi,ys,Er,Ta.pW,Hi,Ci.L9],styles:["[_nghost-%COMP%]{display:block}nz-card[_ngcontent-%COMP%]:first-of-type     .ant-card-body{padding:0;margin-top:1px}.table-info[_ngcontent-%COMP%]{margin-left:.5rem}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell.align-right[_ngcontent-%COMP%]     .ant-table-column-title{text-align:right}tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{padding:3px 4px}tr.filter-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   nz-filter-trigger[_ngcontent-%COMP%]     span.ant-dropdown-trigger{margin-left:0;padding-right:12px}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .anticon.attribute-icon[_ngcontent-%COMP%]{color:#595959}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.overflow-ellipsis[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.button-cell[_ngcontent-%COMP%]{padding:0}tr.data-row[_ngcontent-%COMP%]   td.align-right[_ngcontent-%COMP%], tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%]{text-align:right}tr.data-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-of-type{padding-left:6px}tr.data-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-of-type   cvc-entity-tag[_ngcontent-%COMP%]{margin-left:6px}.ant-table-filter-dropdown[_ngcontent-%COMP%]{padding:8px}.prefs-popover[_ngcontent-%COMP%]     nz-checkbox-group:first-of-type label{display:block}.prefs-popover[_ngcontent-%COMP%]     nz-checkbox-group:first-of-type label span{display:inline-block}"],changeDetection:0})};No=(0,vi.Cg)([(0,pn.d)()],No);const ni=["optionTemplates"],Pi=()=>[6,6],cr=(u,b)=>({show:u,hide:b});function Rs(u,b){if(1&u){const a=e.RV6();e.j41(0,"nz-col",10)(1,"cvc-evidence-manager",11),e.nI1(2,"ngrxPush"),e.nI1(3,"ngrxPush"),e.bIt("cvcSelectedIdsChange",function(_){e.eBV(a);const ee=e.XpG();return e.Njj(ee.onPopulate$.next(_))}),e.k0s()()}if(2&u){const a=e.XpG();e.R7$(),e.Y8G("cvcSelectedIds",e.bMT(2,2,a.onEid$))("cvcTableSettings",e.bMT(3,4,a.tableSettingsChange$))}}function Ir(u,b){if(1&u&&e.nrm(0,"cvc-entity-tag",13),2&u){const a=e.XpG().$implicit,h=e.XpG().ngrxLet;e.Y8G("cvcDisableLink",!0)("cvcCacheId",a.__typename+":"+a.id)("cvcEmphasize",h)}}function $r(u,b){1&u&&(e.qex(0),e.DNE(1,Ir,1,3,"ng-template",null,1,e.C5r),e.bVm())}function Xa(u,b){if(1&u&&(e.qex(0),e.DNE(1,$r,3,0,"ng-container",12),e.nI1(2,"ngrxPush"),e.bVm()),2&u){const a=e.XpG();e.R7$(),e.Y8G("ngForOf",e.bMT(2,1,a.result$))}}function ko(u,b){if(1&u){const a=e.RV6();e.j41(0,"div",14)(1,"cvc-entity-tag",15),e.bIt("cvcOnClose",function(){const _=e.eBV(a).$implicit,ee=e.XpG();return e.Njj(ee.onTagClose$.next(_.nzValue))}),e.k0s()()}if(2&u){const a=b.$implicit,h=e.XpG();e.R7$(),e.Y8G("cvcCacheId","EvidenceItem:"+a.nzValue)("cvcContext",h.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",h.props.isMultiSelect?"default":"closeable")}}const lr=qi(Mi(),$o());let Ns=(()=>{class u extends lr{constructor(a,h,_,ee){super(),this.taq=a,this.tq=h,this.changeDetectorRef=_,this.apollo=ee,this.synchronizedFields$=[],this.synchronizedRequired$=[],this.defaultOptions={props:{label:"Evidence Items",placeholder:"Select Evidence Items",isMultiSelect:!0,description:"Select Evidence by ID, or use the manager to select with filtering",entityName:{singular:"Evidence Item",plural:"Evidence Items"},minSearchStrLength:1}},this.synchronizedFieldToColMap=new Map([["molecularProfileId","molecularProfile"],["diseaseId","disease"],["therapyIds","therapies"]]),this.requiredFieldToColMap=new Map([["disease","requiresDisease$"],["therapies","requiresTherapy$"]]),this.onEid$=new Ni.m,this.onShowMgrClick$=new V.B,this.showMgr$=this.onShowMgrClick$.pipe((0,Ma.S)((ft,nn)=>!ft,!1))}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),void 0!==this.formControl.value&&0!==this.formControl.value.length&&this.onEid$.next(this.formControl.value),this.onValueChange$.pipe((0,Yi.E)(this.onEid$),(0,pn.s)(this)).subscribe(([a,h])=>{Array.isArray(a)&&this.onEid$.next(a)})}configureStateConnections(){this.state&&(this.synchronizedFieldToColMap.forEach((a,h)=>{const _=this.state.fields[`${h}$`];_&&this.synchronizedFields$.push(_.pipe((0,me.T)(ee=>({key:h,value:ee??null}))))}),this.requiredFieldToColMap.forEach((a,h)=>{const _=this.state.requires[a];_&&this.synchronizedRequired$.push(_.pipe((0,me.T)(ee=>({key:h,required:ee}))))}),this.onFieldsChange$=(0,po.z)(this.synchronizedFields$).pipe((0,me.T)(a=>{const h=[];return a.forEach(_=>{const ee=this.synchronizedFieldToColMap.get(_.key);ee&&h.push({key:ee,value:_.value})}),h})),this.onRequiredChange$=(0,po.z)(this.synchronizedRequired$).pipe((0,me.T)(a=>{const h=[];return a.forEach(_=>{h.push({value:_.key,checked:_.required})}),h})),this.tableSettingsChange$=(0,po.z)([this.onFieldsChange$,this.onRequiredChange$]).pipe((0,me.T)(([a,h])=>({filters:a,preferences:h})),(0,Ps.B)(100),(0,us.t)(1)))}getTypeaheadVarsFn(a,h){return{eid:+a.replace(/EID/i,"")}}getTypeaheadResultsFn(a){return a.data.evidenceItems.nodes}getTagQueryVarsFn(a){return{eid:a}}getTagQueryResultsFn(a){return a.data.evidenceItem}getSelectedItemOptionFn(a){return{value:a.id,label:`EID${a.id}`}}getSelectOptionsFn(a,h){return a.map((_,ee)=>({label:h.get(ee)||`EID${_.id}`,value:_.id}))}static#e=this.\u0275fac=function(h){return new(h||u)(e.rXU(xn.ZLN),e.rXU(xn.sZm),e.rXU(e.gRc),e.rXU(is.Ic))};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["cvc-evidence-select"]],viewQuery:function(h,_){if(1&h&&e.GBs(ni,5,e.C4Q),2&h){let ee;e.mGM(ee=e.lsd())&&(_.optionTemplates=ee)}},features:[e.Vt3],decls:18,vars:36,consts:[["selectedTemplate",""],["optionTemplates",""],[3,"nzGutter"],["nzFlex","auto"],[3,"cvcOnSearch","cvcOnOpenChange","cvcSelectComponent","cvcOnModelChange","cvcSelectMode","cvcMinSearchStrLength","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading","cvcSelectOpen"],["nzFlex","50px"],["type","button","nz-button","","nzBlock","",1,"manager-button",3,"click"],["nz-icon","",3,"ngClass","nzType"],["nzSpan","24","class","manager-drawer",4,"ngIf"],[4,"ngrxLet"],["nzSpan","24",1,"manager-drawer"],[3,"cvcSelectedIdsChange","cvcSelectedIds","cvcTableSettings"],[4,"ngFor","ngForOf"],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],[1,"ant-select-selection-item-content"],[3,"cvcOnClose","cvcCacheId","cvcContext","cvcMode"]],template:function(h,_){if(1&h){const ee=e.RV6();e.j41(0,"nz-row",2)(1,"nz-col",3)(2,"cvc-entity-select",4),e.nI1(3,"ngrxPush"),e.nI1(4,"ngrxPush"),e.nI1(5,"ngrxPush"),e.nI1(6,"ngrxPush"),e.bIt("cvcOnSearch",function(nn){return e.eBV(ee),e.Njj(_.onSearch$.next(nn))})("cvcOnOpenChange",function(nn){return e.eBV(ee),e.Njj(_.onOpenChange$?_.onOpenChange$.next(nn):null)})("cvcSelectComponent",function(nn){return e.eBV(ee),e.Njj(_.selectComponent=nn)})("cvcOnModelChange",function(nn){return e.eBV(ee),e.Njj(_.props.change&&_.props.change(_.field,nn))}),e.k0s()(),e.j41(7,"nz-col",5)(8,"button",6),e.bIt("click",function(){return e.eBV(ee),e.Njj(_.onShowMgrClick$.next())}),e.nrm(9,"span",7),e.nI1(10,"ngrxPush"),e.nI1(11,"ngrxPush"),e.EFF(12," Manager "),e.k0s()(),e.DNE(13,Rs,4,6,"nz-col",8),e.nI1(14,"ngrxPush"),e.k0s(),e.DNE(15,Xa,3,3,"ng-container",9)(16,ko,2,3,"ng-template",null,0,e.C5r)}if(2&h){const ee=e.sdS(17);e.Y8G("nzGutter",e.lJ4(32,Pi)),e.R7$(2),e.Y8G("cvcSelectMode",_.props.isMultiSelect?"multiple":"default")("cvcMinSearchStrLength",_.props.minSearchStrLength)("cvcCustomTemplate",ee)("cvcFormControl",_.formControl)("cvcFormlyAttributes",_.field)("cvcEntityName",_.props.entityName)("cvcPlaceholder",_.props.placeholder)("cvcResults",e.bMT(3,18,_.result$))("cvcOptions",e.bMT(4,20,_.selectOption$))("cvcShowError",_.showError)("cvcDisabled",_.props.disabled)("cvcLoading",e.bMT(5,22,_.isLoading$))("cvcSelectOpen",e.bMT(6,24,_.selectOpen$)),e.R7$(7),e.Y8G("ngClass",e.l_i(33,cr,e.bMT(10,26,_.showMgr$),!e.bMT(11,28,_.showMgr$)))("nzType","caret-right"),e.R7$(4),e.Y8G("ngIf",e.bMT(14,30,_.showMgr$)),e.R7$(2),e.Y8G("ngrxLet",_.onSearch$)}},dependencies:[M.YU,M.Sq,M.bT,Wt,tn.b,Ci.Nj,Kn.aO,di.c,ho.p,L.Uq,L.e,Z.Dn,No,Ci.L9],styles:[".manager-button[_ngcontent-%COMP%]   span.hide[_ngcontent-%COMP%]{transform:rotate(0);transition:transform .2s linear}.manager-button[_ngcontent-%COMP%]   span.show[_ngcontent-%COMP%]{transform:rotate(90deg);transition:transform .2s linear}"],changeDetection:0})}return u})();var Ri=c(7556);let Oa=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,Z.Y3,Gn.T,hn.Qt,qe.kT,ge.i,Ft._]})}return u})(),xl=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,Gn.T,qe.kT,gi.MC,Z.Y3,hn.Qt,ge.i,Oa]})}return u})();const Qa={types:[{name:"evidence-select",wrappers:["form-field"],component:Ns},{name:"evidence-multi-select",wrappers:["form-field"],component:Ns,defaultOptions:{props:{label:"Evidence Items",isMultiSelect:!0}}}]};let Wo=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,Kr,Ri.F,xl,jn,Oa,Ft._,xs.y,ge.i,Tc,g.qy.forChild(Qa),t.YN,Kn.Zw,Yo.Ti,dt.IJ,ns.Cu,G.PQ,L.f3,Z.Y3,F.j,ut,gi.MC,no.$G,Gn.T,hn.Qt,qe.kT]})}return u})(),Qs=class A8{#e;constructor(b,a){this.query=b,this.errors=a,this.onFusionSelected=new e.bkB,this.#e=(0,e.WQX)(oi.J9),this.nzModalData=(0,e.WQX)(oi.or),this.layout="vertical",this.selectOrCreateFusionMutator=new Ar.E(a),this.form=new t.J3({}),this.model={fivePrimeGeneId:void 0,threePrimeGeneId:void 0,fivePrimePartnerStatus:xn.hBv.Known,threePrimePartnerStatus:xn.hBv.Known},this.options={};const h=[{label:"Known",value:xn.hBv.Known},{label:"Unknown",value:xn.hBv.Unknown},{label:"Multiple",value:xn.hBv.Multiple}];this.config=[{wrappers:["form-layout"],props:{showDevPanel:!1},validators:{partnerStatus:{message:"At least one of 5' or 3' partner status must be Known",expression:_=>{const ee=_.value;return!(!ee||ee.fivePrimePartnerStatus!=xn.hBv.Known&&ee.threePrimePartnerStatus!=xn.hBv.Known)},errorPath:"fivePrimePartnerStatus"},sameGene:{message:"5' and 3' Genes must be different",expression:_=>{const ee=_.value;return!(ee&&ee.fivePrimeGeneId&&ee.threePrimeGeneId&&ee.fivePrimeGeneId==ee.threePrimeGeneId)},errorPath:"fivePrimeGeneId"}},fieldGroup:[{wrappers:["form-card"],props:{formCardOptions:{title:"New Fusion Feature"}},fieldGroup:[{wrappers:["form-row"],props:{formRowOptions:{span:12}},fieldGroup:[{key:"fivePrimePartnerStatus",type:"base-select",props:{label:"5' Partner Status",tooltip:"Select Known if the specific 5' Gene partner is known, Unknown if not. Select Multiple if there are multiple potential 5' Gene partners",required:!0,placeholder:"5' Partner Status",options:h,multiple:!1}},{key:"fivePrimeGeneId",type:"feature-select",props:{label:"5' Fusion Partner",placeholder:"Select Gene",tooltip:"Select the 5' Gene partner in the Fusion",canChangeFeatureType:!1,hideFeatureTypeSelect:!0,featureType:xn.Xiu.Gene},expressions:{"props.disabled":_=>_.model.fivePrimePartnerStatus!=xn.hBv.Known,"props.required":_=>_.model.fivePrimePartnerStatus==xn.hBv.Known}}]},{wrappers:["form-row"],props:{formRowOptions:{span:12}},fieldGroup:[{key:"threePrimePartnerStatus",type:"base-select",props:{required:!0,placeholder:"3' Partner Status",label:"3' Partner Status",tooltip:"Select Known if the specific 3' Gene partner is known, Unknown if not. Select Multiple if there are multiple potential 3' Gene partners",options:h,multiple:!1}},{key:"threePrimeGeneId",type:"feature-select",props:{label:"3' Fusion Partner",placeholder:"Select Gene",tooltip:"Select the 3' Gene partner in the Fusion",canChangeFeatureType:!1,hideFeatureTypeSelect:!0,featureType:xn.Xiu.Gene},expressions:{"props.disabled":_=>_.model.threePrimePartnerStatus!=xn.hBv.Known,"props.required":_=>_.model.threePrimePartnerStatus==xn.hBv.Known}}]},{wrappers:["form-row"],props:{formRowOptions:{span:24}},fieldGroup:[{key:"organizationId",type:"org-submit-button",props:{submitLabel:"Create Fusion",align:"right"}}]}]}]}]}modelChange(b){b&&(this.model.fivePrimePartnerStatus!=xn.hBv.Known&&(this.model={...this.model,fivePrimeGeneId:void 0}),this.model.threePrimePartnerStatus!=xn.hBv.Known&&(this.model={...this.model,threePrimeGeneId:void 0}))}submitFusion(b){this.mutationState=this.selectOrCreateFusionMutator.mutate(this.query,b,{},a=>{if(a.createFusionFeature?.feature.id){const h=a.createFusionFeature.feature.id;this.onFusionSelected.next(h),this.#e&&this.#e.destroy({featureId:h})}})}static#t=this.\u0275fac=function(a){return new(a||A8)(e.rXU(xn.Yd3),e.rXU(na.N))};static#n=this.\u0275cmp=e.VBU({type:A8,selectors:[["cvc-fusion-select-form"]],outputs:{onFusionSelected:"onFusionSelected"},standalone:!0,features:[e.aNF],decls:2,vars:6,consts:[["nz-form","",3,"ngSubmit","nzLayout","formGroup"],[3,"modelChange","form","fields","model","options"]],template:function(a,h){1&a&&(e.j41(0,"form",0),e.bIt("ngSubmit",function(){return h.submitFusion(h.model)}),e.j41(1,"formly-form",1),e.bIt("modelChange",function(ee){return h.modelChange(ee)}),e.k0s()()),2&a&&(e.Y8G("nzLayout",h.layout)("formGroup",h.form),e.R7$(),e.Y8G("form",h.form)("fields",h.config)("model",h.model)("options",h.options))},dependencies:[M.MD,t.X1,t.qT,t.cb,t.j4,G.PQ,G.CA,Kn.Zw,Cn.$,oi.U6,r.iI,g.qy,g.aF],styles:["[_nghost-%COMP%]{display:block;width:100%}"],changeDetection:0})};Qs=(0,vi.Cg)([(0,pn.d)()],Qs);const Ja=()=>[0,0];function oa(u,b){if(1&u&&(e.qex(0),e.j41(1,"span"),e.EFF(2),e.k0s(),e.bVm()),2&u){const a=b.ngrxLet;e.R7$(2),e.JRh(a.message)}}function Ic(u,b){if(1&u&&e.EFF(0),2&u){const a=e.XpG(2);e.JRh(a.successMessage)}}function vu(u,b){if(1&u){const a=e.RV6();e.qex(0),e.DNE(1,oa,3,1,"ng-container",2),e.j41(2,"cvc-form-submission-status-display",3),e.DNE(3,Ic,1,1,"ng-template",null,0,e.C5r),e.j41(5,"form",4),e.bIt("ngSubmit",function(){e.eBV(a);const _=e.XpG();return e.Njj(_.onSubmit$.next(_.model))}),e.j41(6,"nz-row",5)(7,"nz-col",6)(8,"formly-form",7),e.bIt("modelChange",function(_){e.eBV(a);const ee=e.XpG();return e.Njj(ee.model=_)}),e.k0s()()()()(),e.bVm()}if(2&u){const a=e.sdS(4),h=e.XpG();e.R7$(),e.Y8G("ngrxLet",h.formMessageDisplay$),e.R7$(),e.Y8G("mutationState",h.mutationState)("successMessage",a),e.R7$(3),e.Y8G("formGroup",h.form),e.R7$(),e.Y8G("nzGutter",e.lJ4(9,Ja)),e.R7$(2),e.Y8G("form",h.form)("fields",h.fields)("model",h.model)("options",h.options)}}let ks=class R8{set cvcFeatureType(b){b&&this.featureType$.next(b)}set cvcSearchString(b){b&&this.searchString$.next(b)}constructor(b,a){this.query=b,this.errors=a,this.cvcOnCreate=new e.bkB,this.showForm$=new dn.t(!1),this.form=new t.J3({}),this.model={name:""},this.formLayout="horizontal",this.options={formState:{formLayout:this.formLayout}},this.onSubmit$=new V.B,this.searchString$=new dn.t(void 0),this.featureType$=new dn.t(void 0),this.formMessageDisplay$=new dn.t({message:"Feature does not exist, create it?"}),this.addFeatureMutator=new Ar.E(this.errors),this.minNameLength=3,this.fields=[{key:"featureType",hide:!0,props:{required:!0}},{key:"name",hide:!0,props:{minLength:this.minNameLength,required:!0}},{key:"organizationId",type:"org-submit-button",props:{submitLabel:"Add Feature"}}],this.featureType$.pipe((0,pn.s)(this)).subscribe(h=>{Object.values(xn.iby).includes(h)?(this.model.featureType=h,this.showForm$.next(!0)):this.showForm$.next(!1)}),this.searchString$.pipe((0,pn.s)(this)).subscribe(h=>{this.model.name=h,this.formMessageDisplay$.next(void 0===h||void 0!==h&&h.length<this.minNameLength?{message:`New Feature name must be at least ${this.minNameLength} characters.`}:{message:`Feature '${h}' does not exist, create it?`})}),this.onSubmit$.pipe((0,pn.s)(this)).subscribe(h=>{console.log("feature-quick-add form model submitted.",h),this.submitFeature(h)})}submitFeature(b){b.name&&b.featureType?this.mutationState=this.addFeatureMutator.mutate(this.query,{name:b.name,featureType:b.featureType,organizationId:b.organizationId},{},a=>{console.log("feature-quick-add submit data callback",a),a.createFeature&&(this.formMessageDisplay$.next({message:void 0}),setTimeout(()=>{a&&a.createFeature&&this.cvcOnCreate.next({id:a.createFeature.feature.id,new:a.createFeature.new})},1e3))}):console.error("feature-quick-add form submitFeature requires model with valid name and featureType.")}ngOnChanges(b){if(b.cvcFeatureType){const a=b.cvcFeatureType.currentValue;this.featureType$.next(a),this.model={...this.model,featureType:a}}}static#e=this.\u0275fac=function(a){return new(a||R8)(e.rXU(xn.r$P),e.rXU(na.N))};static#t=this.\u0275cmp=e.VBU({type:R8,selectors:[["cvc-feature-quick-add-form"]],inputs:{cvcFeatureType:"cvcFeatureType",cvcSearchString:"cvcSearchString"},outputs:{cvcOnCreate:"cvcOnCreate"},standalone:!0,features:[e.OA$,e.aNF],decls:2,vars:3,consts:[["success",""],[4,"ngIf"],[4,"ngrxLet"],["entityType","Feature",3,"mutationState","successMessage"],[3,"ngSubmit","formGroup"],[3,"nzGutter"],["nzSpan","24"],[3,"modelChange","form","fields","model","options"]],template:function(a,h){1&a&&(e.DNE(0,vu,9,10,"ng-container",1),e.nI1(1,"ngrxPush")),2&a&&e.Y8G("ngIf",e.bMT(1,1,h.showForm$))},dependencies:[M.MD,M.bT,t.X1,t.qT,t.cb,t.j4,Go.P,fs.G,Ci.Nj,Ci.L9,g.qy,g.aF,L.f3,L.Uq,L.e],encapsulation:2,changeDetection:0})};ks=(0,vi.Cg)([(0,pn.d)()],ks);const il=["optionTemplates"],bs=()=>[6,6];function Ti(u,b){if(1&u){const a=e.RV6();e.j41(0,"nz-col",9)(1,"nz-select",10),e.mxI("ngModelChange",function(_){e.eBV(a);const ee=e.XpG();return e.DH7(ee.selectedFeatureType,_)||(ee.selectedFeatureType=_),e.Njj(_)}),e.bIt("ngModelChange",function(_){e.eBV(a);const ee=e.XpG();return ee.onFeatureType$.next(_),e.Njj(ee.formControl.setValue(void 0))}),e.nrm(2,"nz-option",11)(3,"nz-option",12)(4,"nz-option",13),e.k0s()()}if(2&u){const a=e.XpG();e.R7$(),e.Y8G("disabled",!a.props.canChangeFeatureType),e.R50("ngModel",a.selectedFeatureType)}}function Pl(u,b){if(1&u&&(e.qex(0),e.j41(1,"em"),e.nrm(2,"span",18),e.nI1(3,"highlightTypeahead"),e.k0s(),e.bVm()),2&u){const a=e.XpG(2).$implicit,h=e.XpG().ngrxLet;e.R7$(2),e.Y8G("nzTooltipTitle",a.featureAliases.join(", "))("innerHtml",e.i5U(3,2,a.featureAliases.join(", "),h),e.npT)}}function wc(u,b){1&u&&e.EFF(0,"--")}function Js(u,b){if(1&u&&(e.nrm(0,"cvc-entity-tag",15),e.j41(1,"span",16),e.DNE(2,Pl,4,5,"ng-container",17)(3,wc,1,0,"ng-template",null,3,e.C5r),e.k0s()),2&u){const a=e.sdS(4),h=e.XpG().$implicit,_=e.XpG().ngrxLet;e.Y8G("cvcDisableLink",!0)("cvcCacheId",h.__typename+":"+h.id)("cvcEmphasize",_),e.R7$(2),e.Y8G("ngIf",h.featureAliases.length>0)("ngIfElse",a)}}function ol(u,b){1&u&&(e.qex(0),e.DNE(1,Js,5,5,"ng-template",null,2,e.C5r),e.bVm())}function Za(u,b){if(1&u&&(e.qex(0),e.DNE(1,ol,3,0,"ng-container",14),e.nI1(2,"ngrxPush"),e.bVm()),2&u){const a=e.XpG();e.R7$(),e.Y8G("ngForOf",e.bMT(2,1,a.result$))}}function or(u,b){if(1&u){const a=e.RV6();e.j41(0,"div",19)(1,"cvc-entity-tag",20),e.bIt("cvcOnClose",function(){const _=e.eBV(a).$implicit,ee=e.XpG();return e.Njj(ee.onTagClose$.next(_.nzValue))}),e.k0s()()}if(2&u){const a=b.$implicit,h=e.XpG();e.R7$(),e.Y8G("cvcCacheId","Feature:"+a.nzValue)("cvcContext",h.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",h.props.isMultiSelect?"default":"closeable")}}function rl(u,b){if(1&u&&(e.j41(0,"span",25),e.EFF(1),e.k0s()),2&u){const a=e.XpG(2).$implicit;e.R7$(),e.SpI("",a," does not match any existing Fusions")}}function Tr(u,b){if(1&u){const a=e.RV6();e.j41(0,"button",26),e.bIt("click",function(){e.eBV(a);const _=e.XpG(3);return e.Njj(_.createFusionModal())}),e.EFF(1," Open Fusion Builder "),e.k0s()}}function Nr(u,b){1&u&&(e.j41(0,"nz-space",21),e.DNE(1,rl,2,1,"span",23)(2,Tr,2,0,"button",24),e.k0s())}function Fl(u,b){if(1&u){const a=e.RV6();e.j41(0,"cvc-feature-quick-add-form",27),e.nI1(1,"ngrxPush"),e.bIt("cvcOnCreate",function(_){e.eBV(a);const ee=e.XpG(2);return e.Njj(ee.onSelectOrCreate(_))}),e.k0s()}if(2&u){const a=e.XpG().$implicit,h=e.XpG();e.Y8G("cvcSearchString",a)("cvcFeatureType",e.bMT(1,2,h.onFeatureType$))}}function Ia(u,b){if(1&u&&e.DNE(0,Nr,3,0,"nz-space",21)(1,Fl,2,4,"cvc-feature-quick-add-form",22),2&u){const a=e.XpG();e.vxM("FUSION"==a.selectedFeatureType?0:1)}}const sl=qi(Mi(),$o());let Zr=class N8 extends sl{constructor(b,a,h,_){super(),this.taq=b,this.tq=a,this.changeDetectorRef=h,this.modal=_,this.defaultOptions={props:{label:"Feature",placeholder:"Search Features",isMultiSelect:!1,entityName:{singular:"Feature",plural:"Features"},description:"",featureType:xn.Xiu.Gene,canChangeFeatureType:!0,hideFeatureTypeSelect:!1}},this.selectedFeatureType=this.props.featureType,this.onFeatureType$=new dn.t(void 0),this.instanceTypes=xn.Xiu}ngAfterViewInit(){this.selectedFeatureType=this.props.featureType,this.props.featureTypeCallback&&(this.onFeatureType$.pipe((0,pn.s)(this)).subscribe(b=>this.props.featureTypeCallback(b)),this.onFeatureType$.next(this.selectedFeatureType)),this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent})}getTypeaheadVarsFn(b){return{queryTerm:b,featureType:this.selectedFeatureType}}getTypeaheadResultsFn(b){return b.data.featureTypeahead}getTagQueryVarsFn(b){return{featureId:b}}getTagQueryResultsFn(b){return b.data.feature}getSelectedItemOptionFn(b){return{value:b.id,label:b.name}}getSelectOptionsFn(b,a){return b.map((h,_)=>({label:a.get(_)||h.name,value:h.id}))}showAddBehavior(b,a){const h=b.toLowerCase();return b.length>=3&&!a.some(_=>_.name.toLowerCase()===h)}onSelectOrCreate(b){this.onPopulate$.next(b.id),this.props.isNewlyCreatedCallback&&this.props.isNewlyCreatedCallback(b.new)}onFusionSelected(b){this.onPopulate$.next(b),this.formControl.setValue(b)}createFusionModal(){const b=this.modal.create({nzTitle:"Add New Fusion Feature",nzContent:Qs,nzData:{},nzFooter:null});b.getContentComponent(),b.afterClose.pipe((0,pn.s)(this)).subscribe(a=>{a.featureId&&this.onFusionSelected(a.featureId)})}static#e=this.\u0275fac=function(a){return new(a||N8)(e.rXU(xn.kq4),e.rXU(xn.$TJ),e.rXU(e.gRc),e.rXU(oi.N_))};static#t=this.\u0275cmp=e.VBU({type:N8,selectors:[["cvc-feature-select"]],viewQuery:function(a,h){if(1&a&&e.GBs(il,5,e.C4Q),2&a){let _;e.mGM(_=e.lsd())&&(h.optionTemplates=_)}},features:[e.Vt3],decls:12,vars:22,consts:[["selectedTemplate",""],["addFeature",""],["optionTemplates",""],["noAliases",""],[3,"nzGutter"],["nzFlex","100px",4,"ngIf"],["nzFlex","auto"],[3,"cvcOnSearch","cvcOnOpenChange","cvcSelectComponent","cvcOnModelChange","cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcPlaceholder","cvcEntityName","cvcAddEntity","cvcAddEntityBehavior","cvcResults","cvcOptions","cvcShowError","cvcLoading"],[4,"ngrxLet"],["nzFlex","100px"],[3,"ngModelChange","disabled","ngModel"],["nzValue","GENE","nzLabel","Gene"],["nzValue","FACTOR","nzLabel","Factor"],["nzValue","FUSION","nzLabel","Fusion"],[4,"ngFor","ngForOf"],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf","ngIfElse"],["nz-typography","","nzType","secondary","nz-tooltip","",3,"nzTooltipTitle","innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcOnClose","cvcCacheId","cvcContext","cvcMode"],["nzDirection","vertical"],[3,"cvcSearchString","cvcFeatureType"],["nz-typography","",4,"nzSpaceItem"],["nz-button","","nzType","primary",3,"click",4,"nzSpaceItem"],["nz-typography",""],["nz-button","","nzType","primary",3,"click"],[3,"cvcOnCreate","cvcSearchString","cvcFeatureType"]],template:function(a,h){if(1&a){const _=e.RV6();e.j41(0,"nz-row",4),e.DNE(1,Ti,5,2,"nz-col",5),e.j41(2,"nz-col",6)(3,"cvc-entity-select",7),e.nI1(4,"ngrxPush"),e.nI1(5,"ngrxPush"),e.nI1(6,"ngrxPush"),e.bIt("cvcOnSearch",function(ft){return e.eBV(_),e.Njj(h.onSearch$.next(ft))})("cvcOnOpenChange",function(ft){return e.eBV(_),e.Njj(h.onOpenChange$?h.onOpenChange$.next(ft):null)})("cvcSelectComponent",function(ft){return e.eBV(_),e.Njj(h.selectComponent=ft)})("cvcOnModelChange",function(ft){return e.eBV(_),e.Njj(h.props.change&&h.props.change(h.field,ft))}),e.k0s()()(),e.DNE(7,Za,3,3,"ng-container",8)(8,or,2,3,"ng-template",null,0,e.C5r)(10,Ia,2,1,"ng-template",null,1,e.C5r)}if(2&a){const _=e.sdS(9),ee=e.sdS(11);e.Y8G("nzGutter",e.lJ4(21,bs)),e.R7$(),e.Y8G("ngIf",!h.props.hideFeatureTypeSelect),e.R7$(2),e.Y8G("cvcSelectMode",h.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",_)("cvcFormControl",h.formControl)("cvcFormlyAttributes",h.field)("cvcPlaceholder",h.props.placeholder)("cvcEntityName",h.props.entityName)("cvcAddEntity",ee)("cvcAddEntityBehavior",h.showAddBehavior)("cvcResults",e.bMT(4,15,h.result$))("cvcOptions",e.bMT(5,17,h.selectOption$))("cvcShowError",h.showError)("cvcLoading",e.bMT(6,19,h.isLoading$)),e.R7$(4),e.Y8G("ngrxLet",h.onSearch$)}},dependencies:[M.Sq,M.bT,t.BC,t.vS,Ci.Nj,Kn.aO,di.c,ho.p,Qe.ld,Qe.WI,hn.LH,L.Uq,L.e,qe.Di,on.U5,on.Dq,Wt,tn.b,ks,Ci.L9,Xr.M],changeDetection:0})};Zr=(0,vi.Cg)([(0,pn.d)()],Zr);const xc={types:[{name:"feature-select",wrappers:["form-field"],component:Zr},{name:"feature-multi-select",wrappers:["form-field"],component:Zr,defaultOptions:{props:{label:"Features",isMultiSelect:!0}}}]};let u1=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,t.X1,t.YN,g.qy.forChild(xc),Cn.$,Kn.Zw,Qe.DH,Z.Y3,F.j,hn.Qt,G.PQ,rt.jl,qe.kT,Gn.T,on.pc,oi.U6,En,jn,ge.i,Ft._,ks,Qs]})}return u})();const d1=["optionTemplates"];function Al(u,b){if(1&u&&e.nrm(0,"cvc-attribute-tag",4),2&u){const a=e.XpG().$implicit;e.Y8G("cvcAttrValue",a)}}function _u(u,b){1&u&&(e.qex(0),e.DNE(1,Al,1,1,"ng-template",null,1,e.C5r),e.bVm())}function h1(u,b){if(1&u){const a=e.RV6();e.j41(0,"div",5)(1,"cvc-attribute-tag",6),e.bIt("cvcOnClose",function(_){e.eBV(a);const ee=e.XpG();return e.Njj(ee.onTagClose$.next(_))}),e.k0s()()}if(2&u){const a=b.$implicit,h=e.XpG();e.R7$(),e.Y8G("cvcAttrValue",a.nzValue)("cvcContext",h.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",h.props.isMultiSelect?"default":"closeable")}}const al={COMBINATION:"Therapies specified were used as part of a combination therapy approach",SEQUENTIAL:"Therapies specified were used at separate timepoints in the same treatment plan",SUBSTITUTES:"Therapies specified are often considered to be of the same family, or behave similarly in a treatment setting"},W1=qi(Mi(),mi()),K1={types:[{name:"interaction-select",wrappers:["form-field"],component:(()=>{class u extends W1{constructor(a){super(),this.cdr=a,this.defaultOptions={props:{label:"Therapy Interaction",placeholder:"Select Therapy Interaction",requireMultipleTherapies:!0,requireMultipleTherapiesPromptFn:()=>"A single associated therapy does not have an Interaction type",tooltip:"Characterizes the interaction of a multi-therapy treatment"}},this.interactionEnum$=new dn.t([]),this.placeholder$=new dn.t(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.interactionEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}configureStateConnections(){if(!this.state)return console.error(`${this.field.id} requires a form state to populate its options, none was found.`),void this.placeholder$.next("ERROR: Form state not found");this.placeholder$.next(this.props.placeholder),this.state.enums.interaction$?(this.state.enums.interaction$.pipe((0,pn.s)(this)).subscribe(a=>{this.interactionEnum$.next(a)}),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,me.T)(a=>a.map(h=>h))),this.onTherapies$=this.state.fields.therapyIds$,this.optionTemplates||console.warn(`${this.field.id} could not find state's fields.therapyIds$ to handle its required & disabled states.`),this.onTherapies$.pipe((0,pn.s)(this)).subscribe(a=>{a&&0!=a.length?1==a.length?(this.props.description="A single associated therapy does not have an Interaction type",this.props.disabled=!0,this.props.required=!1,void 0!==this.formControl.value&&this.formControl.setValue(void 0)):(this.props.description="Select an Interaction Type",this.props.disabled=!1,this.props.required=!0):(this.props.disabled=!0,this.props.required=!1,this.props.description="Interaction type is not applicable when no therapies are selected.",void 0!==this.formControl.value&&this.formControl.setValue(void 0)),this.cdr.markForCheck()}),this.onValueChange$.pipe((0,pn.s)(this)).subscribe(a=>{a?(this.props.description=al[a],this.props.extraType="description"):(this.props.extraType="prompt",this.field.formControl.markAsTouched())})):console.error(`${this.field.id} could not find form state's interaction$ to populate select.`)}static#e=this.\u0275fac=function(h){return new(h||u)(e.rXU(e.gRc))};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["cvc-interaction-select"]],viewQuery:function(h,_){if(1&h&&e.GBs(d1,5,e.C4Q),2&h){let ee;e.mGM(ee=e.lsd())&&(_.optionTemplates=ee)}},features:[e.Vt3],decls:7,vars:15,consts:[["selectedTemplate",""],["optionTemplates",""],[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcOnClose","cvcAttrValue","cvcContext","cvcMode"]],template:function(h,_){if(1&h&&(e.nrm(0,"cvc-enum-select",2),e.nI1(1,"ngrxPush"),e.nI1(2,"ngrxPush"),e.DNE(3,_u,3,0,"ng-container",3),e.nI1(4,"ngrxPush"),e.DNE(5,h1,2,3,"ng-template",null,0,e.C5r)),2&h){const ee=e.sdS(6);e.Y8G("cvcFormControl",_.formControl)("cvcFormlyAttributes",_.field)("cvcSelectMode",_.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.bMT(1,9,_.placeholder$))("cvcCustomTemplate",ee)("cvcOptions",e.bMT(2,11,_.selectOption$))("cvcShowError",_.showError)("cvcDisabled",_.props.disabled),e.R7$(3),e.Y8G("ngForOf",e.bMT(4,13,_.interactionEnum$))}},dependencies:[M.Sq,Si,to,Ci.L9]})}return u})()}]};let X1=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,t.X1,g.qy.forChild(K1),En,ci,Kr]})}return u})();var Q1=c(8763);const J1=["optionTemplates"];function Z1(u,b){if(1&u&&(e.j41(0,"nz-tag")(1,"strong"),e.EFF(2),e.k0s(),e.EFF(3),e.nI1(4,"enumTooltip"),e.k0s()),2&u){const a=e.XpG().$implicit;e.R7$(2),e.JRh(a),e.R7$(),e.SpI(" - ",e.i5U(4,2,a,"evidenceLevelBrief")," ")}}function q1(u,b){1&u&&(e.qex(0),e.DNE(1,Z1,5,5,"ng-template",null,1,e.C5r),e.bVm())}function ed(u,b){if(1&u){const a=e.RV6();e.j41(0,"nz-tag",7),e.bIt("nzOnClose",function(_){e.eBV(a);const ee=e.XpG(2);return e.Njj(ee.onTagClose$.next(_))}),e.j41(1,"strong"),e.EFF(2),e.k0s(),e.EFF(3),e.nI1(4,"enumTooltip"),e.k0s()}if(2&u){const a=e.XpG().$implicit;e.R7$(2),e.JRh(a.nzValue),e.R7$(),e.SpI(" - ",e.i5U(4,2,a.nzValue,"evidenceLevelBrief")," ")}}function td(u,b){if(1&u&&(e.qex(0),e.j41(1,"strong"),e.EFF(2),e.k0s(),e.EFF(3),e.nI1(4,"enumTooltip"),e.bVm()),2&u){const a=e.XpG().$implicit;e.R7$(2),e.JRh(a.nzValue),e.R7$(),e.SpI(" - ",e.i5U(4,2,a.nzValue,"evidenceLevelBrief")," ")}}function nd(u,b){if(1&u&&(e.j41(0,"div",4),e.DNE(1,ed,5,5,"nz-tag",5)(2,td,5,5,"ng-container",6),e.k0s()),2&u){const a=e.XpG();e.R7$(),e.Y8G("ngIf",!a.props.isMultiSelect),e.R7$(),e.Y8G("ngIf",a.props.isMultiSelect)}}const id=new Map([[xn.iHU.A,"Evidence shows consensus association in human medicine"],[xn.iHU.B,"Evidence supports association using clinical trial or other primary patient data"],[xn.iHU.C,"Evidence supports association using individual case reports from clinical journals"],[xn.iHU.D,"Evidence supports association using in vivo or in vitro models"],[xn.iHU.E,"Evidential association is inferential or indirect"]]),yu=qi(Mi(),mi()),od={types:[{name:"level-select",wrappers:["form-field"],component:(()=>{class u extends yu{constructor(a){super(),this.cdr=a,this.defaultOptions={props:{label:"Evidence Level",required:!1,isMultiSelect:!1,placeholder:"Select Evidence Level",extraType:"description"}},this.levelEnum$=new dn.t([])}ngAfterViewInit(){this.configureBaseField(),this.state&&this.state.formReady$?this.state.formReady$.pipe((0,qt.p)(a=>a),(0,hs.s)(1),(0,pn.s)(this)).subscribe(a=>{this.configureField()}):this.configureField()}configureField(){this.props.tooltip="Type of study performed to produce the evidence statement",this.levelEnum$.next((0,Ei.KF)(xn.iHU).map(a=>a)),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,me.T)(a=>a.map(h=>h))),this.onValueChange$.pipe((0,pn.s)(this)).subscribe(a=>{a?(this.props.description=id.get(a),this.field.formControl.markAsTouched()):this.props.description=void 0}),this.configureEnumSelectField({optionEnum$:this.levelEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}static#e=this.\u0275fac=function(h){return new(h||u)(e.rXU(e.gRc))};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["cvc-level-select"]],viewQuery:function(h,_){if(1&h&&e.GBs(J1,5,e.C4Q),2&h){let ee;e.mGM(ee=e.lsd())&&(_.optionTemplates=ee)}},features:[e.Vt3],decls:6,vars:13,consts:[["selectedTemplate",""],["optionTemplates",""],[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],[1,"ant-select-selection-item-content"],["nzMode","closeable",3,"nzOnClose",4,"ngIf"],[4,"ngIf"],["nzMode","closeable",3,"nzOnClose"]],template:function(h,_){if(1&h&&(e.nrm(0,"cvc-enum-select",2),e.nI1(1,"ngrxPush"),e.DNE(2,q1,3,0,"ng-container",3),e.nI1(3,"ngrxPush"),e.DNE(4,nd,3,2,"ng-template",null,0,e.C5r)),2&h){const ee=e.sdS(5);e.Y8G("cvcFormControl",_.formControl)("cvcFormlyAttributes",_.field)("cvcSelectMode",_.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",_.props.placeholder)("cvcCustomTemplate",ee)("cvcOptions",e.bMT(1,9,_.selectOption$))("cvcShowError",_.showError)("cvcDisabled",_.props.disabled),e.R7$(2),e.Y8G("ngForOf",e.bMT(3,11,_.levelEnum$))}},dependencies:[M.Sq,M.bT,Gn.s,Si,Ci.L9,Q1.k],changeDetection:0})}return u})()},{name:"level-multi-select",extends:"level-select",defaultOptions:{props:{label:"Levels",isMultiSelect:!0}}}]};let rd=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,t.X1,g.qy.forChild(od),Gn.T,ge.i,En,ci]})}return u})();var sd=c(1448),Hr=c(2617),Rl=c(713);const Cu=/\(/g,Nl=/\)/g,kl=/AND|OR/i,f1=/^(?<not>NOT\s)?\s*#VID(?<variantId>\d+)$/i,m1=/\s+/,Vl="EXPR";function Ll(u){return bu(u.replace(Cu," ( ").replace(Nl," ) "))}function bu(u){let a,b=u.split(m1),h=0,_=[],ee=[],ft=[];for(let $s of b)if("("==$s)0!=h&&_.push($s),h+=1;else if(")"==$s)if(h-=1,0==h){let Ca=bu(_.join(" "));if("errorMessage"in Ca)return Ca;ft.push(Ca),ee.push(Vl),_=[]}else _.push($s);else h>0?_.push($s):ee.push($s);const nn={errorType:"trailingBoolean",errorMessage:"Expressions may not end with AND / OR boolean operators."},Rn={errorType:"initialBoolean",errorMessage:"Expressions may not start with AND / OR boolean operators."},xi={errorType:"multipleBoolean",errorMessage:"Multiple boolean operators found."},Co={errorType:"incompleteExpression",errorMessage:"Ensure that parenthetical clauses are closed."};let jo=0;for(let $s of ee){let Ca=kl.test($s);if(Ca&&0==jo)return Rn;if(Ca&&jo===b.length-1)return nn;if(Ca&&!a)a=Pc($s);else if(Ca&&a&&Pc($s)!==a)return xi;jo++}let Ra=[],Bc=ee.join(" ").split(kl);for(let $s of Bc.map(Ca=>Ca.trim())){let Ca=f1.exec($s);if(null===Ca){if(0===$s.length)return Co;if("NOT"===$s||"NOT"===$s.split(" ").pop())return{errorType:"incompleteNOT",errorMessage:"NOT operator must be followed by a valid #VID."};if($s!==Vl)return{errorType:"invalidToken",errorMessage:`Token '${$s}' does not match the expected format.`}}else Ra.push({not:!!Ca[1],variantId:parseInt(Ca[2])})}return{booleanOperator:a,variantComponents:Ra,complexComponents:ft}}function Pc(u){return"AND"==u.toUpperCase()?xn.l76.And:xn.l76.Or}var g1=c(9350);function Vs(u,b){const a="object"==typeof b;return new Promise((h,_)=>{let ft,ee=!1;u.subscribe({next:nn=>{ft=nn,ee=!0},error:_,complete:()=>{ee?h(ft):a?h(b.defaultValue):_(new g1.G)}})})}var Bl=c(1305),$l=c(9973),vo=c(1845);let cl=(()=>{class u{constructor(a){this.apollo=a,this.cvcOnSelect=new e.bkB,this.cvcOnVariantSelect=new e.bkB,this.modelChange$=new dn.t(void 0),this.finderState={formLayout:"horizontal",fields:{featureId$:new dn.t(void 0),variantId$:new dn.t(void 0),variantMolecularProfile$:new dn.t(void 0)}},this.form=new t.J3({}),this.model={featureId:void 0,variantId:void 0},this.options={formState:this.finderState},this.config=[{wrappers:["form-row"],props:{formRowOptions:{gutter:[8,0],span:12}},fieldGroup:[{key:"featureId",type:"feature-select",props:{placeholder:"Select MP Feature",hideLabel:!0,showExtra:!1,showErrorTip:!1,required:!0,featureTypeCallback:h=>{this.featureType=h}}},{key:"variantId",type:"variant-select",props:{placeholder:"Select MP Variant",hideLabel:!0,required:!0,showExtra:!1,showErrorTip:!1,requireFeature:!0}}]}]}modelChange(a){if(!a?.variantId)return;const h=this.getSelectedVariant(a.variantId);h&&(this.model={featureId:void 0,variantId:void 0},console.log(h),this.cvcOnSelect.next(h.singleVariantMolecularProfile),this.cvcOnVariantSelect.next(h))}getFragment(a,h){return{id:`${a}Variant:${h}`,fragment:is.J1`
        fragment ${a}VariantSelectQuery on ${a}Variant {
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
      `}}getSelectedVariant(a){if(!a)return;const h=(new vo.f).transform(this.featureType);let _;const ee=this.getFragment(h,a);try{_=this.apollo.client.readFragment(ee)}catch(nn){console.error(nn)}if(_)return _;const ft=this.getFragment("",a);try{_=this.apollo.client.readFragment(ft)}catch(nn){console.error(nn)}if(_)return _;console.error("MpFinderForm could not resolve its Variant from the cache")}static#e=this.\u0275fac=function(h){return new(h||u)(e.rXU(is.Ic))};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["cvc-mp-finder"]],outputs:{cvcOnSelect:"cvcOnSelect",cvcOnVariantSelect:"cvcOnVariantSelect"},decls:2,vars:6,consts:[["nz-form","",3,"formGroup","nzLayout"],[3,"modelChange","form","fields","model","options"]],template:function(h,_){1&h&&(e.j41(0,"form",0)(1,"formly-form",1),e.bIt("modelChange",function(ft){return _.modelChange(ft)}),e.k0s()()),2&h&&(e.Y8G("formGroup",_.form)("nzLayout",_.finderState.formLayout),e.R7$(),e.Y8G("form",_.form)("fields",_.config)("model",_.model)("options",_.options))},dependencies:[t.qT,t.cb,t.j4,g.aF,G.CA],styles:["[_nghost-%COMP%]{display:block;width:100%}"],changeDetection:0})}return u})();function qa(u,b){1&u&&(e.qex(0),e.j41(1,"p"),e.EFF(2," The expression contains open parentheses. Please ensure that all parenthetical expressions are closed. "),e.k0s(),e.bVm())}function jr(u,b){1&u&&(e.qex(0),e.j41(1,"p"),e.EFF(2," Complete the expression by appending a "),e.j41(3,"strong"),e.EFF(4,"#VID"),e.k0s(),e.EFF(5," token to the incomplete boolean expression. "),e.k0s(),e.bVm())}function eh(u,b){1&u&&(e.qex(0),e.j41(1,"p"),e.EFF(2," MP Expressions may not begin with an "),e.j41(3,"strong"),e.EFF(4,"AND"),e.k0s(),e.EFF(5," or "),e.j41(6,"strong"),e.EFF(7,"OR"),e.k0s(),e.EFF(8," boolean. Ensure the expression begins with a "),e.j41(9,"strong"),e.EFF(10,"#VID"),e.k0s(),e.EFF(11," or "),e.j41(12,"strong"),e.EFF(13,"NOT #VID"),e.k0s(),e.EFF(14," token. "),e.k0s(),e.bVm())}function Hl(u,b){1&u&&(e.qex(0),e.j41(1,"p"),e.EFF(2," Molecular Profile expressions use a simple domain-specific language to specify complex MPs using boolean expressions to combine variants. These expressions may contain: "),e.k0s(),e.j41(3,"ul")(4,"li"),e.EFF(5," Variant Tokens - "),e.j41(6,"strong"),e.EFF(7,"#VID"),e.k0s(),e.EFF(8," or "),e.j41(9,"strong"),e.EFF(10,"NOT #VID"),e.k0s(),e.EFF(11,'followed by a valid Variant ID, e.g. "#VID123" '),e.k0s(),e.j41(12,"li"),e.EFF(13,"Boolean Tokens - "),e.j41(14,"strong"),e.EFF(15,"AND"),e.k0s(),e.EFF(16,", "),e.j41(17,"strong"),e.EFF(18,"OR"),e.k0s()(),e.j41(19,"li"),e.EFF(20," Parentheses - "),e.j41(21,"strong"),e.EFF(22,"("),e.k0s(),e.EFF(23," or "),e.j41(24,"strong"),e.EFF(25,")"),e.k0s(),e.EFF(26,", for grouping tokens into nested expressions "),e.k0s()(),e.j41(27,"p")(28,"strong"),e.EFF(29,"Invalid Token"),e.k0s(),e.EFF(30," errors occur if the parser encounters any text or token that does not match those listed above. "),e.k0s(),e.bVm())}function Fc(u,b){1&u&&(e.qex(0),e.j41(1,"p"),e.EFF(2," A single expression may not include more than one "),e.j41(3,"strong"),e.EFF(4,"AND"),e.k0s(),e.EFF(5," or "),e.j41(6,"strong"),e.EFF(7,"OR"),e.k0s(),e.EFF(8," boolean operator. To construct complex expressions, use parentheses. "),e.k0s(),e.j41(9,"p"),e.EFF(10," For example, the expression "),e.j41(11,"strong"),e.EFF(12,"#VID12 AND #VID2220 OR #VID456"),e.k0s(),e.EFF(13," is invalid, but the expression "),e.j41(14,"strong"),e.EFF(15,"#VID12 AND (#VID2220 OR #VID456)"),e.k0s(),e.EFF(16," is valid. The parentheses create a nested expression independent of the outer expression. "),e.k0s(),e.bVm())}function Es(u,b){1&u&&(e.qex(0),e.j41(1,"p"),e.EFF(2," Complete the expression by appending a "),e.j41(3,"strong"),e.EFF(4,"#VID"),e.k0s(),e.EFF(5," token to the incomplete boolean expression. "),e.k0s(),e.bVm())}function ad(u,b){1&u&&(e.qex(0),e.j41(1,"p"),e.EFF(2," The expression contains a Variant ID that cannot be matched to any Variant in the CIViC database. Please re-check the Variant ID, or create a new one by following these steps: "),e.k0s(),e.j41(3,"ol")(4,"li"),e.EFF(5,"click the 'Variant' button,"),e.k0s(),e.j41(6,"li"),e.EFF(7,"enter a Gene name, then select a Gene"),e.k0s(),e.j41(8,"li"),e.EFF(9,"enter the Variant name"),e.k0s(),e.j41(10,"li"),e.EFF(11," click the 'Create Variant' button that will appear if name does not match any CIViC Variants "),e.k0s()(),e.bVm())}function Eu(u,b){1&u&&(e.qex(0),e.j41(1,"p"),e.EFF(2," An expression may not contain multiple instances of the same Variant. Either remove the variant or change the expression. For example, "),e.j41(3,"strong"),e.EFF(4,"(#VID123 AND #VID456) OR (#VID123 AND #VID789)"),e.k0s(),e.EFF(5,", which is invalid, is logically identical to the valid MP expression "),e.j41(6,"strong"),e.EFF(7,"#VID123 AND (#VID456 OR #VID789)"),e.k0s(),e.EFF(8,". "),e.k0s(),e.bVm())}function th(u,b){1&u&&(e.qex(0),e.j41(1,"p"),e.EFF(2," The Molecular Profile editor allows the selection or creation of complex Molecular Profiles by writing Molecular Profile Expressions. These expressions are composed with a simple language consisting of Variant tokens, boolean operators, and parentheses. For example: "),e.k0s(),e.j41(3,"blockquote")(4,"strong"),e.EFF(5,"#VID12 AND #VID2220"),e.k0s(),e.nrm(6,"br"),e.j41(7,"strong"),e.EFF(8,"#VID12 OR #VID2220"),e.k0s(),e.nrm(9,"br"),e.j41(10,"strong"),e.EFF(11,"#VID12 AND NOT #VID2220"),e.k0s(),e.nrm(12,"br"),e.j41(13,"strong"),e.EFF(14,"#VID12 AND #VID2220 AND (#VID456 OR #VID123)"),e.k0s(),e.nrm(15,"br"),e.j41(16,"strong"),e.EFF(17,"#VID12 OR #VID2220 OR (NOT #VID456 AND #VID123)"),e.k0s(),e.nrm(18,"br"),e.k0s(),e.j41(19,"p")(20,"strong"),e.EFF(21,"Variant Tokens"),e.k0s(),e.nrm(22,"br"),e.EFF(23," Variant tokens are composed of a CIViC Variant ID prepended with "),e.j41(24,"strong"),e.EFF(25,"#VID"),e.k0s(),e.EFF(26,", and refer to specific CIViC Variants. For example, "),e.j41(27,"strong"),e.EFF(28,"#VID12"),e.k0s(),e.EFF(29," refers to "),e.j41(30,"strong"),e.EFF(31,"BRAF V600E"),e.k0s(),e.EFF(32,"; "),e.j41(33,"strong"),e.EFF(34,"#VID2220"),e.k0s(),e.EFF(35," refers to "),e.j41(36,"strong"),e.EFF(37,"ALK FUSION"),e.k0s(),e.EFF(38,". If you don\u2019t know the CIViC ID of a Variant, you can search for Variants by name using the \u2018Variant\u2019 or \u2018NOT Variant\u2019 buttons below. These interfaces can also be used to add a Variant that\u2019s not yet in CIViC. "),e.k0s(),e.j41(39,"p")(40,"strong"),e.EFF(41,"Boolean Operators"),e.k0s(),e.nrm(42,"br"),e.EFF(43," MP Expressions with more than a single variant must include boolean operators - "),e.j41(44,"strong"),e.EFF(45,"AND"),e.k0s(),e.EFF(46,", "),e.j41(47,"strong"),e.EFF(48,"OR"),e.k0s(),e.EFF(49,", and "),e.j41(50,"strong"),e.EFF(51,"NOT"),e.k0s(),e.EFF(52," - indicating their relationship. For example, the expression "),e.j41(53,"strong"),e.EFF(54,"#VID12 AND #VID2220"),e.k0s(),e.EFF(55," describes a MP that includes both "),e.j41(56,"strong"),e.EFF(57,"BRAF V600E"),e.k0s(),e.EFF(58," and "),e.j41(59,"strong"),e.EFF(60,"ALK FUSION"),e.k0s(),e.EFF(61,". "),e.k0s(),e.j41(62,"p")(63,"strong"),e.EFF(64,"Parentheses"),e.k0s(),e.nrm(65,"br"),e.EFF(66," Expressions cannot have both "),e.j41(67,"strong"),e.EFF(68,"AND"),e.k0s(),e.EFF(69," and "),e.j41(70,"strong"),e.EFF(71,"OR"),e.k0s(),e.EFF(72," operators within the same expression. To construct complex MPs that require multiple operators, one must use parentheses to create embedded expressions. "),e.k0s(),e.j41(73,"p")(74,"strong"),e.EFF(75,"NOTE:"),e.k0s(),e.EFF(76," Be sure to read the help text provided along with every alert message by hovering over 'Syntax Assistance'. "),e.k0s(),e.bVm())}let Ls=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["cvc-mp-editor-popover-help"]],inputs:{cvcErrorType:"cvcErrorType"},decls:11,vars:9,consts:[[1,"help-content"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"]],template:function(h,_){1&h&&(e.j41(0,"div",0),e.qex(1,1),e.DNE(2,qa,3,0,"ng-container",2)(3,jr,6,0,"ng-container",2)(4,eh,15,0,"ng-container",2)(5,Hl,31,0,"ng-container",2)(6,Fc,17,0,"ng-container",2)(7,Es,6,0,"ng-container",2)(8,ad,12,0,"ng-container",2)(9,Eu,9,0,"ng-container",2)(10,th,77,0,"ng-container",3),e.bVm(),e.k0s()),2&h&&(e.R7$(),e.Y8G("ngSwitch",_.cvcErrorType),e.R7$(),e.Y8G("ngSwitchCase","incompleteExpression"),e.R7$(),e.Y8G("ngSwitchCase","incompleteNOT"),e.R7$(),e.Y8G("ngSwitchCase","initialBoolean"),e.R7$(),e.Y8G("ngSwitchCase","invalidToken"),e.R7$(),e.Y8G("ngSwitchCase","multipleBoolean"),e.R7$(),e.Y8G("ngSwitchCase","trailingBoolean"),e.R7$(),e.Y8G("ngSwitchCase","unknownVariant"),e.R7$(),e.Y8G("ngSwitchCase","identicalVariants"))},dependencies:[M.ux,M.e1,M.fG],styles:[".help-content[_ngcontent-%COMP%]{max-width:500px}blockquote[_ngcontent-%COMP%]{margin-left:1em}"]})}return u})();const v1=["expressionEditor"],jl=()=>[6,8],_1=u=>({active:u}),Bs=(u,b)=>({$implicit:u,helpContent:b});function ec(u,b){1&u&&e.EFF(0,"Added new Molecular Profile")}function Ul(u,b){if(1&u&&e.nrm(0,"cvc-mp-tag-name",38),2&u){const a=e.XpG().ngrxLet;e.Y8G("nameSegments",a)}}function Gl(u,b){1&u&&(e.j41(0,"span",39),e.EFF(1," Valid Molecular Profile expressions will be previewed here. "),e.k0s())}function Tu(u,b){if(1&u&&(e.qex(0),e.DNE(1,Ul,1,1,"cvc-mp-tag-name",36)(2,Gl,2,0,"span",37),e.bVm()),2&u){const a=b.ngrxLet;e.R7$(),e.Y8G("ngIf",a),e.R7$(),e.Y8G("ngIf",!a)}}function Zs(u,b){1&u&&e.nrm(0,"cvc-mp-editor-popover-help")}function ji(u,b){if(1&u&&(e.j41(0,"button",41),e.nrm(1,"span",42),e.EFF(2," GETTING STARTED "),e.k0s(),e.DNE(3,Zs,1,0,"ng-template",null,7,e.C5r)),2&u){const a=e.sdS(4);e.Y8G("nzPopoverContent",a)}}function Yl(u,b){if(1&u&&(e.qex(0),e.nrm(1,"nz-alert",40),e.DNE(2,ji,5,1,"ng-template",null,6,e.C5r),e.bVm()),2&u){const a=b.ngIf,h=e.sdS(3);e.R7$(),e.Y8G("nzMessage",a)("nzAction",h)}}function Wl(u,b){if(1&u){const a=e.RV6();e.j41(0,"button",44),e.bIt("click",function(){e.eBV(a);const _=e.XpG(3).ngrxLet,ee=e.XpG();return e.Njj(ee.cvcOnSelect.next(_))}),e.EFF(1," Select this MP "),e.k0s()}}function y1(u,b){if(1&u&&(e.EFF(0," Molecular Profile "),e.j41(1,"strong"),e.EFF(2),e.k0s(),e.EFF(3," found. ")),2&u){const a=e.XpG(3).ngrxLet;e.R7$(2),e.JRh(a.name)}}function cd(u,b){if(1&u&&(e.qex(0),e.nrm(1,"nz-alert",43),e.DNE(2,Wl,2,0,"ng-template",null,8,e.C5r)(4,y1,4,1,"ng-template",null,9,e.C5r),e.bVm()),2&u){const a=e.sdS(3),h=e.sdS(5);e.R7$(),e.Y8G("nzMessage",h)("nzAction",a)}}function C1(u,b){if(1&u){const a=e.RV6();e.j41(0,"button",45),e.bIt("click",function(){e.eBV(a);const _=e.XpG(4);return e.Njj(_.onCreateNewMp$.next())}),e.EFF(1," Create New MP "),e.k0s()}}function ld(u,b){1&u&&e.EFF(0," Molecular Profile not found, create it? ")}function ud(u,b){if(1&u&&(e.qex(0),e.nrm(1,"nz-alert",43),e.DNE(2,C1,2,0,"ng-template",null,10,e.C5r)(4,ld,1,0,"ng-template",null,11,e.C5r),e.bVm()),2&u){const a=e.sdS(3),h=e.sdS(5);e.R7$(),e.Y8G("nzMessage",h)("nzAction",a)}}function b1(u,b){if(1&u&&(e.qex(0),e.DNE(1,cd,6,2,"ng-container",25)(2,ud,6,2,"ng-container",25),e.bVm()),2&u){const a=e.XpG().ngrxLet;e.R7$(),e.Y8G("ngIf",void 0!==a),e.R7$(),e.Y8G("ngIf",void 0===a)}}function tc(u,b){if(1&u&&(e.qex(0),e.DNE(1,b1,3,2,"ng-container",25),e.nI1(2,"ngrxPush"),e.nI1(3,"ngrxPush"),e.bVm()),2&u){const a=e.XpG();e.R7$(),e.Y8G("ngIf",!e.bMT(2,1,a.expressionError$)&&!e.bMT(3,3,a.expressionMessage$))}}function dd(u,b){if(1&u&&(e.j41(0,"button",47),e.nrm(1,"span",42),e.EFF(2," SYNTAX ASSISTANCE "),e.k0s()),2&u){const a=e.XpG().helpContent;e.Y8G("nzPopoverContent",a)}}function hd(u,b){if(1&u&&(e.nrm(0,"nz-alert",46),e.DNE(1,dd,3,1,"ng-template",null,12,e.C5r)),2&u){const a=b.$implicit,h=e.sdS(2);e.Y8G("nzMessage",a.errorMessage)("nzAction",h)}}function pd(u,b){1&u&&e.eu8(0)}function fd(u,b){1&u&&e.nrm(0,"cvc-mp-editor-popover-help",52)}function md(u,b){if(1&u&&(e.qex(0),e.DNE(1,pd,1,0,"ng-container",51)(2,fd,1,0,"ng-template",null,13,e.C5r),e.bVm()),2&u){const a=e.sdS(3),h=e.XpG().ngIf;e.XpG();const _=e.sdS(14);e.R7$(),e.Y8G("ngTemplateOutlet",_)("ngTemplateOutletContext",e.l_i(2,Bs,h,a))}}function Dn(u,b){1&u&&e.eu8(0)}function oo(u,b){1&u&&e.nrm(0,"cvc-mp-editor-popover-help",53)}function E1(u,b){if(1&u&&(e.qex(0),e.DNE(1,Dn,1,0,"ng-container",51)(2,oo,1,0,"ng-template",null,14,e.C5r),e.bVm()),2&u){const a=e.sdS(3),h=e.XpG().ngIf;e.XpG();const _=e.sdS(14);e.R7$(),e.Y8G("ngTemplateOutlet",_)("ngTemplateOutletContext",e.l_i(2,Bs,h,a))}}function T1(u,b){1&u&&e.eu8(0)}function Io(u,b){1&u&&e.nrm(0,"cvc-mp-editor-popover-help",54)}function ll(u,b){if(1&u&&(e.qex(0),e.DNE(1,T1,1,0,"ng-container",51)(2,Io,1,0,"ng-template",null,15,e.C5r),e.bVm()),2&u){const a=e.sdS(3),h=e.XpG().ngIf;e.XpG();const _=e.sdS(14);e.R7$(),e.Y8G("ngTemplateOutlet",_)("ngTemplateOutletContext",e.l_i(2,Bs,h,a))}}function ri(u,b){1&u&&e.eu8(0)}function Ho(u,b){1&u&&e.nrm(0,"cvc-mp-editor-popover-help",55)}function nc(u,b){if(1&u&&(e.qex(0),e.DNE(1,ri,1,0,"ng-container",51)(2,Ho,1,0,"ng-template",null,16,e.C5r),e.bVm()),2&u){const a=e.sdS(3),h=e.XpG().ngIf;e.XpG();const _=e.sdS(14);e.R7$(),e.Y8G("ngTemplateOutlet",_)("ngTemplateOutletContext",e.l_i(2,Bs,h,a))}}function Ac(u,b){1&u&&e.eu8(0)}function ul(u,b){1&u&&e.nrm(0,"cvc-mp-editor-popover-help",56)}function zu(u,b){if(1&u&&(e.qex(0),e.DNE(1,Ac,1,0,"ng-container",51)(2,ul,1,0,"ng-template",null,17,e.C5r),e.bVm()),2&u){const a=e.sdS(3),h=e.XpG().ngIf;e.XpG();const _=e.sdS(14);e.R7$(),e.Y8G("ngTemplateOutlet",_)("ngTemplateOutletContext",e.l_i(2,Bs,h,a))}}function Kl(u,b){1&u&&e.eu8(0)}function ra(u,b){1&u&&e.nrm(0,"cvc-mp-editor-popover-help",57)}function z1(u,b){if(1&u&&(e.qex(0),e.DNE(1,Kl,1,0,"ng-container",51)(2,ra,1,0,"ng-template",null,18,e.C5r),e.bVm()),2&u){const a=e.sdS(3),h=e.XpG().ngIf;e.XpG();const _=e.sdS(14);e.R7$(),e.Y8G("ngTemplateOutlet",_)("ngTemplateOutletContext",e.l_i(2,Bs,h,a))}}function Mu(u,b){1&u&&e.eu8(0)}function qr(u,b){1&u&&(e.qex(0),e.nrm(1,"cvc-mp-editor-popover-help",58),e.bVm())}function sa(u,b){1&u&&(e.qex(0),e.nrm(1,"cvc-mp-editor-popover-help",59),e.bVm())}function Su(u,b){if(1&u&&e.DNE(0,qr,2,0,"ng-container",25)(1,sa,2,0,"ng-container",25),2&u){const a=e.XpG(2).ngIf;e.Y8G("ngIf",a.errorMessage.split(" ").includes("multiple")),e.R7$(),e.Y8G("ngIf",a.errorMessage.split(" ").includes("found."))}}function qs(u,b){if(1&u&&(e.qex(0),e.DNE(1,Mu,1,0,"ng-container",51)(2,Su,2,2,"ng-template",null,19,e.C5r),e.bVm()),2&u){const a=e.sdS(3),h=e.XpG().ngIf;e.XpG();const _=e.sdS(14);e.R7$(),e.Y8G("ngTemplateOutlet",_)("ngTemplateOutletContext",e.l_i(2,Bs,h,a))}}function ea(u,b){if(1&u&&(e.qex(0),e.j41(1,"pre"),e.EFF(2),e.nI1(3,"json"),e.k0s(),e.bVm()),2&u){const a=e.XpG().ngIf;e.R7$(2),e.SpI("              ",e.bMT(3,1,a),"\n            ")}}function dl(u,b){if(1&u&&(e.qex(0)(1,48),e.DNE(2,md,4,5,"ng-container",49)(3,E1,4,5,"ng-container",49)(4,ll,4,5,"ng-container",49)(5,nc,4,5,"ng-container",49)(6,zu,4,5,"ng-container",49)(7,z1,4,5,"ng-container",49)(8,qs,4,5,"ng-container",49)(9,ea,4,3,"ng-container",50),e.bVm()()),2&u){const a=b.ngIf;e.R7$(),e.Y8G("ngSwitch",a.errorType),e.R7$(),e.Y8G("ngSwitchCase","invalidToken"),e.R7$(),e.Y8G("ngSwitchCase","trailingBoolean"),e.R7$(),e.Y8G("ngSwitchCase","initialBoolean"),e.R7$(),e.Y8G("ngSwitchCase","multipleBoolean"),e.R7$(),e.Y8G("ngSwitchCase","incompleteExpression"),e.R7$(),e.Y8G("ngSwitchCase","incompleteNOT"),e.R7$(),e.Y8G("ngSwitchCase","queryError")}}function M1(u,b){1&u&&(e.j41(0,"span",39),e.EFF(1," Append: "),e.k0s())}function Li(u,b){if(1&u&&(e.j41(0,"button",60)(1,"strong"),e.EFF(2,"Variant"),e.k0s()()),2&u){e.XpG();const a=e.sdS(37);e.Y8G("nzPopoverContent",a)}}function S1(u,b){if(1&u&&(e.j41(0,"button",61)(1,"strong"),e.EFF(2,"NOT Variant"),e.k0s()()),2&u){e.XpG();const a=e.sdS(39);e.Y8G("nzPopoverContent",a)}}function ic(u,b){1&u&&(e.j41(0,"span",62),e.EFF(1," | "),e.k0s())}function Xl(u,b){if(1&u){const a=e.RV6();e.j41(0,"button",63),e.bIt("click",function(){e.eBV(a);const _=e.XpG();return e.Njj(_.onAppendInput$.next("AND"))}),e.j41(1,"strong"),e.EFF(2,"AND"),e.k0s()()}}function wa(u,b){if(1&u){const a=e.RV6();e.j41(0,"button",63),e.bIt("click",function(){e.eBV(a);const _=e.XpG();return e.Njj(_.onAppendInput$.next("OR"))}),e.j41(1,"strong"),e.EFF(2,"OR"),e.k0s()()}}function Rc(u,b){1&u&&(e.j41(0,"span",62),e.EFF(1," | "),e.k0s())}function rs(u,b){if(1&u){const a=e.RV6();e.j41(0,"button",63),e.bIt("click",function(){e.eBV(a);const _=e.XpG();return e.Njj(_.onAppendInput$.next("("))}),e.j41(1,"strong"),e.EFF(2,"("),e.k0s()()}}function D1(u,b){if(1&u){const a=e.RV6();e.j41(0,"button",63),e.bIt("click",function(){e.eBV(a);const _=e.XpG();return e.Njj(_.onAppendInput$.next(")"))}),e.j41(1,"strong"),e.EFF(2,")"),e.k0s()()}}function Du(u,b){if(1&u){const a=e.RV6();e.j41(0,"div",64)(1,"nz-row",21)(2,"nz-col",22)(3,"p",65),e.EFF(4," Select a Gene and Variant to append its #VID. "),e.k0s()(),e.j41(5,"nz-col",22)(6,"cvc-mp-finder",66),e.bIt("cvcOnVariantSelect",function(_){e.eBV(a);const ee=e.XpG();return e.Njj(ee.onVariantSelect$.next({variant:_,prependNot:!1}))}),e.k0s()()()()}2&u&&(e.R7$(),e.Y8G("nzGutter",e.lJ4(1,jl)))}function Ql(u,b){if(1&u){const a=e.RV6();e.j41(0,"div",64)(1,"nz-row",21)(2,"nz-col",22)(3,"p",65),e.EFF(4," Select a Gene and Variant to append its #VID, prepended with NOT boolean. "),e.k0s()(),e.j41(5,"nz-col",22)(6,"cvc-mp-finder",66),e.bIt("cvcOnVariantSelect",function(_){e.eBV(a);const ee=e.XpG();return e.Njj(ee.onVariantSelect$.next({variant:_,prependNot:!0}))}),e.k0s()()()()}2&u&&(e.R7$(),e.Y8G("nzGutter",e.lJ4(1,jl)))}function hl(u,b){if(1&u){const a=e.RV6();e.j41(0,"nz-list-item")(1,"nz-list-item-meta")(2,"nz-list-item-meta-title"),e.nrm(3,"cvc-entity-tag",70),e.k0s(),e.j41(4,"nz-list-item-meta-description"),e.EFF(5),e.k0s()(),e.j41(6,"ul",71)(7,"nz-list-item-action")(8,"button",72),e.bIt("click",function(){const _=e.eBV(a).$implicit,ee=e.XpG(2);return e.Njj(ee.onSelectExample$.next(_))}),e.EFF(9," Select "),e.k0s()()()()}if(2&u){const a=b.$implicit;e.R7$(3),e.Y8G("cvcLinkableEntity",a.mp),e.R7$(2),e.SpI(" ",a.description," ")}}function Jo(u,b){if(1&u&&(e.j41(0,"div",67)(1,"nz-list",68),e.DNE(2,hl,10,2,"nz-list-item",69),e.k0s()()),2&u){const a=e.XpG();e.R7$(2),e.Y8G("ngForOf",a.exampleExpressions)}}let ur=class k8{constructor(b,a,h,_,ee){this.previewMpGql=b,this.createMolecularProfileGql=a,this.mpEditorPrepopulate=h,this.networkErrorService=_,this.viewerService=ee,this.cvcOnSelect=new e.bkB,this.expressionMessages={initial:"Use the editor below to construct a molecular profile."},this.exampleExpressions=[{mp:{__typename:"MolecularProfile",id:9999,name:"BRAF V600E AND EGFR L858R AND EGFR T790M"},expression:"#VID12 AND #VID33 AND #VID34",description:"BRAF V600E, EGFR L858R, and EGFR T790M must all be observed."},{mp:{__typename:"MolecularProfile",id:9999,name:"BRAF V600E AND NOT EGFR L858R"},expression:"#VID12 AND NOT #VID33",description:"BRAF V600E must be observed and EGFR L858R must be absent."},{mp:{__typename:"MolecularProfile",id:9999,name:"BRAF V600E OR EGFR L858R OR EGFR T790M"},expression:"#VID12 OR #VID33 OR #VID34",description:"Either BRAF V600E, or EGFR L858R, or EGFR T790M must be observed."},{mp:{__typename:"MolecularProfile",id:9999,name:"BRAF V600E AND (EGFR L858R OR EGFR T790M)"},expression:"#VID12 AND (#VID33 OR #VID34)",description:"BRAF V600E must be observed and either EGFR L858R or EGFR T790M must be observed."},{mp:{__typename:"MolecularProfile",id:9999,name:"NOT KIT D816V"},expression:"NOT #VID4353",description:"KIT D816V must be absent."}],this.createMolecularProfileMutator=new Ar.E(this.networkErrorService),this.onInputChange$=new dn.t(void 0),this.onAppendInput$=new V.B,this.onVariantSelect$=new V.B,this.onCreateNewMp$=new V.B,this.onSelectExample$=new V.B,this.inputValue$=new dn.t(""),this.expressionError$=new dn.t(void 0),this.expressionHelp$=new dn.t(void 0),this.expressionMessage$=new dn.t(this.expressionMessages.initial),this.expressionSegment$=new V.B,this.existingMp$=new V.B,this.viewer$=this.viewerService.viewer$,this.mostRecentOrg$=this.viewer$.pipe((0,$i.E)("mostRecentOrg"))}ngAfterViewInit(){this.mostRecentOrg$.pipe((0,pn.s)(this)).subscribe(b=>{this.mostRecentOrgId=b?.id}),this.onInputChange$.pipe((0,Ps.B)(250),(0,On.M)(b=>{b||this.expressionSegment$.next(void 0)}),(0,qt.p)(fo.kP),(0,On.M)(b=>{0===b.length&&(this.expressionMessage$.next(this.expressionMessages.initial),this.expressionError$.next(void 0))}),(0,qt.p)(b=>b.length>0),(0,qt.p)(b=>" "!==b[b.length-1]),(0,me.T)(b=>{let a=Ll(b);return"errorMessage"in a?a:this.previewQueryRef.refetch({mpStructure:a})}),(0,pn.s)(this)).subscribe(b=>{if(this.isMpParseError(b)){const a=b;this.expressionMessage$.next(void 0),this.expressionError$.next(a),this.expressionSegment$.next(void 0)}else b.then(({data:h,errors:_})=>{if(_)this.expressionMessage$.next(void 0),this.expressionError$.next({errorType:"queryError",errorMessage:_.map(ee=>ee.message).join("\n")}),this.expressionSegment$.next(void 0);else{this.expressionSegment$.next(h.previewMolecularProfileName.segments),this.expressionMessage$.next(void 0),this.expressionError$.next(void 0);this.existingMp$.next(h.previewMolecularProfileName.existingMolecularProfile||void 0)}})}),this.onAppendInput$.pipe((0,pn.s)(this)).subscribe(b=>{if(this.expressionEditor){const a=this.expressionEditor.nativeElement,_=`${a.value}${/\s+$/.test(b)?b:" "+b}`;a.value=_,this.inputValue$.next(_),this.onInputChange$.next(_)}}),this.onSelectExample$.pipe((0,pn.s)(this)).subscribe(b=>{this.expressionEditor&&(this.expressionEditor.nativeElement.value=b.expression,this.inputValue$.next(b.expression),this.onInputChange$.next(b.expression))}),this.onVariantSelect$.pipe((0,Yi.E)(this.onInputChange$),(0,me.T)(([b,a])=>{const h=`${b.prependNot?"NOT ":""}#VID${b.variant.id}`;return a&&0!=a.trim().length?`${a.trim()} ${h}`:h}),(0,pn.s)(this)).subscribe(b=>{this.inputValue$.next(b),this.onInputChange$.next(b)}),this.previewQueryRef=this.previewMpGql.watch({}),this.previewMpName$=this.previewQueryRef.valueChanges.pipe((0,$i.E)("data","previewMolecularProfileName"),(0,qt.p)(fo.kP),(0,me.T)(b=>b.segments),(0,pn.s)(this)),this.previewMpAlreadyExists$=this.previewQueryRef.valueChanges.pipe((0,$i.E)("data","previewMolecularProfileName"),(0,qt.p)(fo.kP),(0,me.T)(b=>b.existingMolecularProfile),(0,pn.s)(this)),this.previewDeprecatedVariants$=this.previewQueryRef.valueChanges.pipe((0,$i.E)("data","previewMolecularProfileName"),(0,qt.p)(fo.kP),(0,me.T)(b=>b.deprecatedVariants),(0,pn.s)(this)),this.onCreateNewMp$.pipe((0,Yi.E)(this.onInputChange$),(0,pn.s)(this)).subscribe(([b,a])=>{if(!a||0===a.length)return;let h=Ll(a);"errorMessage"in h||(this.state=this.createMolecularProfileMutator.mutate(this.createMolecularProfileGql,{mpStructure:h,organizationId:this.mostRecentOrgId},{},_=>{setTimeout(()=>{_.createMolecularProfile&&this.cvcOnSelect.next(_.createMolecularProfile.molecularProfile)},1e3)}))})}isMpParseError(b){return void 0!==b.errorMessage}prepopulateMp(b){if(!b)return this.expressionSegment$.next(void 0),this.expressionMessage$.next(this.expressionMessages.initial),void this.inputValue$.next("");Vs(this.mpEditorPrepopulate.fetch({mpId:b},{fetchPolicy:"cache-first"})).then(({data:a})=>{if(!a?.molecularProfile?.id)return void console.error(`MpExpressionEditor could not fetch MolecularProfile:${b} to prepolate editor fields.`);const h=a.molecularProfile.rawName.replace(/#GID(\d+)/g,"").trim();this.inputValue$.next(h),this.onInputChange$.next(h)})}ngOnChanges(b){b.cvcPrepopulateWithId&&this.prepopulateMp(b.cvcPrepopulateWithId.currentValue)}static#e=this.\u0275fac=function(a){return new(a||k8)(e.rXU(xn.xKZ),e.rXU(xn.Avr),e.rXU(xn.uXu),e.rXU(na.N),e.rXU(Bl.q))};static#t=this.\u0275cmp=e.VBU({type:k8,selectors:[["cvc-mp-expression-editor"]],viewQuery:function(a,h){if(1&a&&e.GBs(v1,5),2&a){let _;e.mGM(_=e.lsd())&&(h.expressionEditor=_.first)}},inputs:{cvcPrepopulateWithId:"cvcPrepopulateWithId"},outputs:{cvcOnSelect:"cvcOnSelect"},features:[e.OA$],decls:42,vars:23,consts:[["success",""],["errorAlert",""],["expressionEditor",""],["appendVariant",""],["appendNotVariant",""],["expressionExamples",""],["messageAction",""],["gettingStartedHelp",""],["selectAction",""],["foundMessage",""],["createAction",""],["createMessage",""],["errorAction",""],["invalidTokenHelp",""],["trailingBooleanHelp",""],["initialBooleanHelp",""],["multipleBooleanHelp",""],["incompleteExpressionHelp",""],["incompleteNOTHelp",""],["queryErrorHelp",""],["entityType","Molecular Profile",3,"mutationState","successMessage"],[3,"nzGutter"],["nzSpan","24"],[1,"expression-preview",3,"ngClass"],[4,"ngrxLet"],[4,"ngIf"],["nz-input","","rows","1","placeholder","Enter or edit a Molecular Expression here.",2,"width","100%",3,"ngModelChange","ngModel"],[1,"btn-row"],["nzFlex","80px"],["nzBlock","","nz-button","","nzType","primary","nzShape","round","nzSize","small","nz-popover","","nzPopoverTitle","Select a Profile to view its expression","nzPopoverTrigger","click","nzPopoverPlacement","bottomLeft",3,"nzPopoverContent"],["nzFlex","auto",2,"text-align","right"],["nz-typography","","nzType","secondary",4,"nzSpaceItem"],["type","button","nz-button","","nz-popover","","nzPopoverTitle","Append Variant #VID","nzPopoverTrigger","click","nzSize","small","nzShape","round","nzType","primary","nzPopoverPlacement","bottom",3,"nzPopoverContent",4,"nzSpaceItem"],["type","button","nz-button","","nz-popover","","nzPopoverTitle","Append Variant NOT #VID","nzPopoverTrigger","click","nzSize","small","nzShape","round","nzType","primary","nzPopoverPlacement","bottom",3,"nzPopoverContent",4,"nzSpaceItem"],["class","btn-divider",4,"nzSpaceItem"],["type","button","nz-button","","nzType","primary","nzSize","small","nzShape","round",3,"click",4,"nzSpaceItem"],[3,"nameSegments",4,"ngIf"],["nz-typography","","nzType","secondary",4,"ngIf"],[3,"nameSegments"],["nz-typography","","nzType","secondary"],["nzType","info","nzShowIcon","",3,"nzMessage","nzAction"],["type","button","nz-button","","nzType","dashed","nzSize","small","nzShape","round","nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverContent"],["nz-icon","","nzType","question-circle","nzTheme","fill"],["nzType","success","nzShowIcon","",3,"nzMessage","nzAction"],["type","button","nz-button","","nzType","primary","nzSize","small","nzBlock","",3,"click"],["type","button","nz-button","","nzSize","small","nzType","primary","nzBlock","",3,"click"],["nzType","error","nzShowIcon","",3,"nzMessage","nzAction"],["nz-button","","nzDanger","","nzType","text","nzSize","small","nzShape","round","nz-popover","","nzPopoverTrigger","hover",3,"nzPopoverContent"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["cvcErrorType","invalidToken"],["cvcErrorType","trailingBoolean"],["cvcErrorType","initialBoolean"],["cvcErrorType","multipleBoolean"],["cvcErrorType","incompleteExpression"],["cvcErrorType","incompleteNOT"],["cvcErrorType","identicalVariants"],["cvcErrorType","unknownVariant"],["type","button","nz-button","","nz-popover","","nzPopoverTitle","Append Variant #VID","nzPopoverTrigger","click","nzSize","small","nzShape","round","nzType","primary","nzPopoverPlacement","bottom",3,"nzPopoverContent"],["type","button","nz-button","","nz-popover","","nzPopoverTitle","Append Variant NOT #VID","nzPopoverTrigger","click","nzSize","small","nzShape","round","nzType","primary","nzPopoverPlacement","bottom",3,"nzPopoverContent"],[1,"btn-divider"],["type","button","nz-button","","nzType","primary","nzSize","small","nzShape","round",3,"click"],[1,"append-popover-contents"],["nz-typography","","nzType","secondary",2,"margin","0","padding-bottom","2px"],[3,"cvcOnVariantSelect"],[2,"min-width","525px","margin","-8px -12px"],["nzSize","small","nzItemLayout","horizontal"],[4,"ngFor","ngForOf"],[3,"cvcLinkableEntity"],["nz-list-item-actions",""],["type","button","nz-button","","nzType","primary","nzSize","small",3,"click"]],template:function(a,h){if(1&a){const _=e.RV6();e.j41(0,"cvc-form-submission-status-display",20),e.DNE(1,ec,1,0,"ng-template",null,0,e.C5r),e.j41(3,"nz-row",21)(4,"nz-col",22)(5,"div",23),e.nI1(6,"ngrxPush"),e.DNE(7,Tu,3,2,"ng-container",24),e.nI1(8,"ngrxPush"),e.k0s()(),e.j41(9,"nz-col",22),e.DNE(10,Yl,4,2,"ng-container",25),e.nI1(11,"ngrxPush"),e.DNE(12,tc,4,5,"ng-container",24)(13,hd,3,2,"ng-template",null,1,e.C5r)(15,dl,10,8,"ng-container",25),e.nI1(16,"ngrxPush"),e.k0s(),e.j41(17,"nz-col",22)(18,"textarea",26,2),e.nI1(20,"ngrxPush"),e.bIt("ngModelChange",function(ft){return e.eBV(_),e.Njj(h.onInputChange$.next(ft))}),e.k0s()()(),e.j41(21,"nz-row",27)(22,"nz-col",28)(23,"button",29),e.EFF(24," Examples "),e.k0s()(),e.j41(25,"nz-col",30)(26,"nz-space"),e.DNE(27,M1,2,0,"span",31)(28,Li,3,1,"button",32)(29,S1,3,1,"button",33)(30,ic,2,0,"span",34)(31,Xl,3,0,"button",35)(32,wa,3,0,"button",35)(33,Rc,2,0,"span",34)(34,rs,3,0,"button",35)(35,D1,3,0,"button",35),e.k0s()(),e.DNE(36,Du,7,2,"ng-template",null,3,e.C5r)(38,Ql,7,2,"ng-template",null,4,e.C5r)(40,Jo,3,1,"ng-template",null,5,e.C5r),e.k0s()()}if(2&a){const _=e.sdS(2),ee=e.sdS(41);e.Y8G("mutationState",h.state)("successMessage",_),e.R7$(3),e.Y8G("nzGutter",e.lJ4(20,jl)),e.R7$(2),e.Y8G("ngClass",e.eq3(21,_1,void 0!==e.bMT(6,10,h.expressionSegment$))),e.R7$(2),e.Y8G("ngrxLet",e.bMT(8,12,h.expressionSegment$)),e.R7$(3),e.Y8G("ngIf",e.bMT(11,14,h.expressionMessage$)),e.R7$(2),e.Y8G("ngrxLet",h.existingMp$),e.R7$(3),e.Y8G("ngIf",e.bMT(16,16,h.expressionError$)),e.R7$(3),e.Y8G("ngModel",e.bMT(20,18,h.inputValue$)),e.R7$(5),e.Y8G("nzPopoverContent",ee)}},dependencies:[M.YU,M.Sq,M.bT,M.T3,M.ux,M.e1,M.fG,t.me,t.BC,t.vS,Ci.Nj,Cn.Y,Kn.aO,di.c,ho.p,Z.Dn,F.Sy,L.Uq,L.e,on.U5,on.Dq,qe.Di,gi.L_,Hr.eE,Hr.lQ,Hr.qx,Hr.mf,Hr.YU,Hr.MV,Hr.Tc,fs.G,$l.G,tn.b,cl,Ls,M.TG,Ci.L9],styles:["[_nghost-%COMP%]{display:block;background-color:#f6f6f6;border:1px solid #dedede;border-radius:4px;padding:8px}.expression-preview[_ngcontent-%COMP%]{width:100%;padding:8px;border:1px solid #dedede;border-radius:4px}.expression-preview.active[_ngcontent-%COMP%]{background-color:#fff}.append-popover-contents[_ngcontent-%COMP%]{min-width:450px}.help-content[_ngcontent-%COMP%]{max-width:500px}.btn-row[_ngcontent-%COMP%]{margin-top:10px;flex-wrap:nowrap}.btn-row[_ngcontent-%COMP%]   .btn-divider[_ngcontent-%COMP%]{color:#aaa}"],changeDetection:0})};ur=(0,vi.Cg)([(0,pn.d)()],ur);const oc=["optionTemplates"],O1=()=>[8,12],wr=(u,b)=>({show:u,hide:b});function rc(u,b){if(1&u){const a=e.RV6();e.j41(0,"cvc-mp-finder",13),e.bIt("cvcOnSelect",function(_){e.eBV(a);const ee=e.XpG(2);return e.Njj(ee.onMpSelect$.next(_))}),e.k0s()}}function Vo(u,b){1&u&&(e.j41(0,"div",14),e.EFF(1," \xa0 "),e.j41(2,"span",15)(3,"i"),e.EFF(4,"Select or create a Molecular Profile with the expression editor "),e.k0s()()())}function I1(u,b){if(1&u){const a=e.RV6();e.j41(0,"div",16)(1,"div",17)(2,"cvc-entity-select",18),e.nI1(3,"ngrxPush"),e.nI1(4,"ngrxPush"),e.nI1(5,"ngrxPush"),e.bIt("cvcOnSearch",function(_){e.eBV(a);const ee=e.XpG(2);return e.Njj(ee.onSearch$.next(_))})("cvcOnModelChange",function(_){e.eBV(a);const ee=e.XpG(2);return e.Njj(ee.props.change&&ee.props.change(ee.field,_))}),e.k0s()()()}if(2&u){const a=e.XpG(2),h=e.sdS(13);e.R7$(2),e.Y8G("cvcSelectMode",a.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",h)("cvcFormControl",a.formControl)("cvcFormlyAttributes",a.field)("cvcEntityName",a.props.entityName)("cvcPlaceholder",a.props.placeholder)("cvcResults",e.bMT(3,15,a.result$))("cvcDisabled",a.props.disabled)("cvcAllowClear",!1)("cvcOptions",e.bMT(4,17,a.selectOption$))("cvcShowError",a.showError)("cvcLoading",e.bMT(5,19,a.isLoading$))("cvcBorderless",!0)("cvcSuffixIcon",null)("cvcShowArrow",!1)}}function w1(u,b){if(1&u&&(e.qex(0),e.DNE(1,rc,1,0,"cvc-mp-finder",10)(2,Vo,5,0,"div",11)(3,I1,6,21,"div",12),e.bVm()),2&u){const a=b.ngrxLet,h=e.XpG();e.R7$(),e.Y8G("ngIf",a.showFinder&&!h.editorOpen),e.R7$(),e.Y8G("ngIf",h.editorOpen),e.R7$(),e.Y8G("ngIf",a.showSelect&&!h.editorOpen)}}function xa(u,b){if(1&u){const a=e.RV6();e.j41(0,"nz-col",19)(1,"cvc-mp-expression-editor",20),e.nI1(2,"ngrxPush"),e.bIt("cvcOnSelect",function(_){e.eBV(a);const ee=e.XpG();return e.Njj(ee.onMpSelect$.next(_))}),e.k0s()()}if(2&u){const a=e.XpG();e.R7$(),e.Y8G("cvcPrepopulateWithId",e.bMT(2,1,a.onMpId$))}}function Ou(u,b){if(1&u&&(e.qex(0),e.j41(1,"em"),e.nrm(2,"span",25),e.nI1(3,"highlightTypeahead"),e.k0s(),e.bVm()),2&u){const a=e.XpG(2).$implicit,h=e.XpG().ngrxLet;e.R7$(2),e.Y8G("innerHtml",e.i5U(3,1,a.molecularProfileAliases.join(", "),h),e.npT)}}function sc(u,b){1&u&&e.EFF(0,"--")}function x1(u,b){if(1&u&&(e.nrm(0,"cvc-entity-tag",22),e.j41(1,"span",23),e.EFF(2," Aliases: "),e.DNE(3,Ou,4,4,"ng-container",24)(4,sc,1,0,"ng-template",null,2,e.C5r),e.k0s()),2&u){const a=e.sdS(5),h=e.XpG().$implicit,_=e.XpG().ngrxLet;e.Y8G("cvcDisableLink",!0)("cvcCacheId",h.__typename+":"+h.id)("cvcEmphasize",_),e.R7$(3),e.Y8G("ngIf",h.molecularProfileAliases.length>0)("ngIfElse",a)}}function Nc(u,b){1&u&&(e.qex(0),e.DNE(1,x1,6,5,"ng-template",null,1,e.C5r),e.bVm())}function Ts(u,b){if(1&u&&(e.qex(0),e.DNE(1,Nc,3,0,"ng-container",21),e.nI1(2,"ngrxPush"),e.bVm()),2&u){const a=e.XpG();e.R7$(),e.Y8G("ngForOf",e.bMT(2,1,a.result$))}}function m(u,b){if(1&u){const a=e.RV6();e.j41(0,"div",26)(1,"cvc-entity-tag",27),e.bIt("cvcOnClose",function(){const _=e.eBV(a).$implicit,ee=e.XpG();return e.Njj(ee.onTagClose$.next(_.nzValue))}),e.k0s()()}if(2&u){const a=b.$implicit,h=e.XpG();e.R7$(),e.Y8G("cvcCacheId","MolecularProfile:"+a.nzValue)("cvcContext",h.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",h.props.isMultiSelect?"default":"closeable")}}const zs=qi(Mi(),$o());let Ie=(()=>{class u extends zs{constructor(a,h,_,ee){super(),this.taq=a,this.tq=h,this.changeDetectorRef=_,this.apollo=ee,this.editorOpen=!1,this.defaultOptions={props:{label:"Molecular Profile",placeholder:"Search Molecular Profiles",tooltip:"A single variant (Simple Molecular Profile) or a combination of variants (Complex Molecular Profile) relevant to the curated assertion.",isMultiSelect:!1,description:"Select a Feature and Variant to specify a simple Molecular Profile.",entityName:{singular:"Molecular Profile",plural:"Molecular Profiles"},minSearchStrLength:1}},this.onMpSelect$=new dn.t(void 0),this.onMpId$=new Ni.m,this.onShowExpClick$=new V.B,this.showExp$=this.onShowExpClick$.pipe((0,Ma.S)((ft,nn)=>!ft,!1),(0,On.M)(ft=>this.editorOpen=ft)),this.selectDisplay$=new dn.t({showFinder:!0,showSelect:!1})}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.initialDescription=this.props.description,this.onValueChange$.pipe((0,pn.s)(this)).subscribe(a=>{const h=void 0!==a;this.selectDisplay$.next({showFinder:!h,showSelect:h}),this.onMpId$.next(a),this.props.description=a?void 0:this.initialDescription}),this.onMpSelect$.pipe((0,pn.s)(this)).subscribe(a=>{a?(this.selectOption$.next([{label:a.name,value:a.id}]),this.editorOpen&&this.onShowExpClick$.next(),this.cdr.detectChanges(),this.field.formControl.setValue(a.id),this.field.formControl.markAsTouched()):this.selectDisplay$.next({showFinder:!0,showSelect:!1})})}configureStateConnections(){}getTypeaheadVarsFn(a,h){return{name:a,geneId:h}}getTypeaheadResultsFn(a){return a.data.molecularProfiles.nodes}getTagQueryVarsFn(a){return{molecularProfileId:a}}getTagQueryResultsFn(a){return a.data.molecularProfile}getSelectedItemOptionFn(a){return{value:a.id,label:a.name}}getSelectOptionsFn(a,h){return a.map((_,ee)=>({label:h.get(ee)||_.name,value:_.id}))}static#e=this.\u0275fac=function(h){return new(h||u)(e.rXU(xn.nRJ),e.rXU(xn.OLK),e.rXU(e.gRc),e.rXU(is.Ic))};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["ng-component"]],viewQuery:function(h,_){if(1&h&&e.GBs(oc,5,e.C4Q),2&h){let ee;e.mGM(ee=e.lsd())&&(_.optionTemplates=ee)}},features:[e.Vt3],decls:14,vars:16,consts:[["selectedTemplate",""],["optionTemplates",""],["noAliases",""],[3,"nzGutter"],["nzFlex","auto"],[4,"ngrxLet"],["nzFlex","50px"],["type","button","nz-button","","nzBlock","","nz-tooltip","","nzTooltipTitle","Add/Edit Complex MP Expression",1,"expression-button",3,"click"],["nz-icon","",3,"ngClass","nzType"],["nzSpan","24","class","editor-drawer",4,"ngIf"],[3,"cvcOnSelect",4,"ngIf"],["class","editor-message",4,"ngIf"],["class","select-container",4,"ngIf"],[3,"cvcOnSelect"],[1,"editor-message"],["nz-typography","","nzEllipsis","","nzType","secondary"],[1,"select-container"],[1,"limit-select-width"],[3,"cvcOnSearch","cvcOnModelChange","cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcDisabled","cvcAllowClear","cvcOptions","cvcShowError","cvcLoading","cvcBorderless","cvcSuffixIcon","cvcShowArrow"],["nzSpan","24",1,"editor-drawer"],[3,"cvcOnSelect","cvcPrepopulateWithId"],[4,"ngFor","ngForOf"],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf","ngIfElse"],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcOnClose","cvcCacheId","cvcContext","cvcMode"]],template:function(h,_){if(1&h){const ee=e.RV6();e.j41(0,"nz-row",3)(1,"nz-col",4),e.DNE(2,w1,4,3,"ng-container",5),e.k0s(),e.j41(3,"nz-col",6)(4,"button",7),e.bIt("click",function(){return e.eBV(ee),e.Njj(_.onShowExpClick$.next())}),e.nrm(5,"span",8),e.nI1(6,"ngrxPush"),e.nI1(7,"ngrxPush"),e.EFF(8,"Editor "),e.k0s()(),e.DNE(9,xa,3,3,"nz-col",9),e.nI1(10,"ngrxPush"),e.k0s(),e.DNE(11,Ts,3,3,"ng-container",5)(12,m,2,3,"ng-template",null,0,e.C5r)}2&h&&(e.Y8G("nzGutter",e.lJ4(12,O1)),e.R7$(2),e.Y8G("ngrxLet",_.selectDisplay$),e.R7$(3),e.Y8G("ngClass",e.l_i(13,wr,e.bMT(6,6,_.showExp$),!e.bMT(7,8,_.showExp$)))("nzType","caret-right"),e.R7$(4),e.Y8G("ngIf",e.bMT(10,10,_.showExp$)),e.R7$(2),e.Y8G("ngrxLet",_.onSearch$))},dependencies:[M.YU,M.Sq,M.bT,Ci.Nj,Kn.aO,di.c,ho.p,Z.Dn,L.Uq,L.e,qe.Di,hn.LH,Wt,tn.b,ur,cl,Ci.L9,Xr.M],styles:["form[_ngcontent-%COMP%]   span.hide[_ngcontent-%COMP%], .expression-button[_ngcontent-%COMP%]   span.hide[_ngcontent-%COMP%]{transform:rotate(0);transition:transform .2s linear}form[_ngcontent-%COMP%]   span.show[_ngcontent-%COMP%], .expression-button[_ngcontent-%COMP%]   span.show[_ngcontent-%COMP%]{transform:rotate(90deg);transition:transform .2s linear}.editor-message[_ngcontent-%COMP%]{padding:3px;background-color:#f5f5f5;cursor:default;border-radius:2px}.select-container[_ngcontent-%COMP%]{padding:0;background-color:#fff;cursor:default;border-radius:2px;border:1px solid #d9d9d9}.select-container[_ngcontent-%COMP%]   .limit-select-width[_ngcontent-%COMP%]{display:inline-block;margin-top:-1px;margin-bottom:-1px}"],data:{animation:[Rl.U1,Rl.LD]},changeDetection:0})}return u})();const pt={types:[{name:"molecular-profile-select",wrappers:["form-field"],component:Ie},{name:"molecular-profile-multi-select",wrappers:["form-field"],component:Ie,defaultOptions:{props:{label:"Molecular Profiles",isMultiSelect:!0}}}]};let Iu=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,t.YN,t.X1,g.qy.forChild(pt),Cn.$,Kn.Zw,Qe.DH,oi.U6,Z.Y3,F.j,L.f3,on.pc,G.PQ,rt.jl,qe.kT,hn.Qt,gi.MC,on.pc,dt.IJ,Hr.rD,Go.P,sd.B,En,jn,ge.i,Ft._]})}return u})();const gd=["optionTemplates"];function ac(u,b){if(1&u&&(e.j41(0,"nz-tag",5),e.EFF(1),e.k0s()),2&u){const a=e.XpG().$implicit;e.R7$(),e.JRh(a.name)}}function Vh(u,b){1&u&&(e.qex(0),e.DNE(1,ac,2,1,"ng-template",null,1,e.C5r),e.bVm())}function Jl(u,b){if(1&u&&(e.qex(0),e.DNE(1,Vh,3,0,"ng-container",4),e.nI1(2,"ngrxPush"),e.bVm()),2&u){const a=e.XpG();e.R7$(),e.Y8G("ngForOf",e.bMT(2,1,a.result$))}}function cc(u,b){if(1&u){const a=e.RV6();e.j41(0,"div",6)(1,"cvc-entity-tag",7),e.bIt("cvcOnClose",function(){const _=e.eBV(a).$implicit,ee=e.XpG();return e.Njj(ee.onTagClose$.next(_.nzValue))}),e.k0s()()}if(2&u){const a=b.$implicit,h=e.XpG();e.R7$(),e.Y8G("cvcDisableLink",!0)("cvcCacheId","NccnGuideline:"+a.nzValue)("cvcContext",h.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",h.props.isMultiSelect?"default":"closeable")("cvcShowIcon",!1)}}const Lh=qi(Mi(),$o());let wu=(()=>{class u extends Lh{constructor(a,h,_){super(),this.taq=a,this.tq=h,this.changeDetectorRef=_,this.defaultOptions={props:{entityName:{singular:"NCCN Guideline",plural:"NCCN Guidelines"},isMultiSelect:!1,requireType:!1,tooltip:"If applicable, please provide cancer (e.g., Breast Cancer) for the appropriate NCCN guideline.",placeholder:"Search NCCN Guidelines"}},this.placeholder$=new dn.t(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectComponent:this.selectComponent})}getTypeaheadVarsFn(a){return{name:a}}getTypeaheadResultsFn(a){return a.data.nccnGuidelinesTypeahead}getTagQueryResultsFn(a){return a.data.nccnGuideline}getTagQueryVarsFn(a){return{id:a}}getSelectedItemOptionFn(a){return{value:a.id,label:a.name}}getSelectOptionsFn(a,h){return a.map((_,ee)=>({label:h.get(ee)||_.name,value:_.id}))}static#e=this.\u0275fac=function(h){return new(h||u)(e.rXU(xn.qKP),e.rXU(xn.ZVN),e.rXU(e.gRc))};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["cvc-nccn-guideline-select"]],viewQuery:function(h,_){if(1&h&&e.GBs(gd,5,e.C4Q),2&h){let ee;e.mGM(ee=e.lsd())&&(_.optionTemplates=ee)}},features:[e.Vt3],decls:8,vars:20,consts:[["selectedTemplate",""],["optionTemplates",""],[3,"cvcOnSearch","cvcOnOpenChange","cvcOnModelChange","cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading"],[4,"ngrxLet"],[4,"ngFor","ngForOf"],["nz-tooltip",""],[1,"ant-select-selection-item-content"],[3,"cvcOnClose","cvcDisableLink","cvcCacheId","cvcContext","cvcMode","cvcShowIcon"]],template:function(h,_){if(1&h){const ee=e.RV6();e.j41(0,"cvc-entity-select",2),e.nI1(1,"ngrxPush"),e.nI1(2,"ngrxPush"),e.nI1(3,"ngrxPush"),e.nI1(4,"ngrxPush"),e.bIt("cvcOnSearch",function(nn){return e.eBV(ee),e.Njj(_.onSearch$.next(nn))})("cvcOnOpenChange",function(nn){return e.eBV(ee),e.Njj(_.onOpenChange$?_.onOpenChange$.next(nn):null)})("cvcOnModelChange",function(nn){return e.eBV(ee),e.Njj(_.props.change&&_.props.change(_.field,nn))}),e.k0s(),e.DNE(5,Jl,3,3,"ng-container",3)(6,cc,2,5,"ng-template",null,0,e.C5r)}if(2&h){const ee=e.sdS(7);e.Y8G("cvcSelectMode",_.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",ee)("cvcFormControl",_.formControl)("cvcFormlyAttributes",_.field)("cvcEntityName",_.props.entityName)("cvcPlaceholder",e.bMT(1,12,_.placeholder$))("cvcResults",e.bMT(2,14,_.result$))("cvcOptions",e.bMT(3,16,_.selectOption$))("cvcShowError",_.showError)("cvcDisabled",!1)("cvcLoading",e.bMT(4,18,_.isLoading$)),e.R7$(5),e.Y8G("ngrxLet",_.onSearch$)}},dependencies:[M.Sq,Ci.Nj,hn.LH,Gn.s,Wt,tn.b,Ci.L9],changeDetection:0})}return u})();const vd={types:[{name:"nccn-guideline-select",wrappers:["form-field"],component:wu,defaultOptions:{props:{label:"NCCN Guideline"}}},{name:"nccn-guideline-multi-select",wrappers:["form-field"],component:wu,defaultOptions:{props:{isMultiSelect:!0,label:"NCCN Guideline(s)"}}}]};let Bh=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,t.X1,g.qy.forChild(vd),Cn.$,Kn.Zw,Qe.DH,gi.MC,oi.U6,Z.Y3,F.j,L.f3,hn.Qt,on.pc,G.PQ,rt.jl,qe.kT,Gn.T,En,jn,ge.i,Ft._,zi]})}return u})();const $h=qi(Mi()),Z2={types:[{name:"nccn-guideline-version-input",component:(()=>{class u extends $h{constructor(a){super(),this.cdr=a,this.defaultDescription="Please enter the version of the NCCN guideline you're referencing in the format <strong>Version.Year</strong>",this.defaultOptions={validators:{nccnVersionNumber:{expression:h=>{if(h.value){if(/^\d{1,2}\.\d{4}$/.test(h.value)){let _=+h.value.split(".")[1];return _>=2e3&&_<=(new Date).getFullYear()+1}return!1}return!0},message:(h,_)=>`"${_.formControl?.value}" does not fit the format Version.Year`}},props:{label:"NCCN Guideline Version",extraType:"description",description:this.defaultDescription}}}ngAfterViewInit(){this.configureBaseField(),this.state&&this.state.formReady$?this.state.formReady$.pipe((0,qt.p)(a=>a),(0,hs.s)(1),(0,pn.s)(this)).subscribe(a=>{this.configureField()}):this.configureField()}configureField(){this.state?.fields.nccnGuidelineId$.pipe((0,pn.s)(this)).subscribe(a=>{a?(this.props.disabled=!1,this.props.required=!0,this.props.extraType="description",this.props.description=this.defaultDescription):(this.props.disabled=!0,this.props.required=!1,this.props.extraType="prompt",this.props.description="NCCN Guideline Version is only required when NCCN Guideline is specified.",this.formControl.setValue(void 0))})}static#e=this.\u0275fac=function(h){return new(h||u)(e.rXU(e.gRc))};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["cvc-nccn-guideline-version-input"]],features:[e.Vt3],decls:1,vars:2,consts:[["nz-input","","placeholder","ex: 1.2023",3,"formControl","formlyAttributes"]],template:function(h,_){1&h&&e.nrm(0,"input",0),2&h&&e.Y8G("formControl",_.formControl)("formlyAttributes",_.field)},dependencies:[t.me,t.BC,t.l_,g.ch,F.Sy],encapsulation:2,changeDetection:0})}return u})(),wrappers:["form-field"]}]};let _d=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,t.X1,g.qy.forChild(Z2),F.j,En]})}return u})();var aa=c(9438);let pl=class V8{constructor(b){this.el=b,this.domChange=new e.bkB,this.changes=new MutationObserver(a=>{(0,Ki.H)(a).pipe((0,me.T)(h=>{const _=h.target;return"class"===h.attributeName?{type:"class",change:_.classList.value,key:`${h.attributeName}:${_.classList.value}`}:"disabled"===h.attributeName?{type:"disabled",change:_.disabled,key:`${h.attributeName}:${_.disabled}`}:"hidden"===h.attributeName?{type:"hidden",change:_.hidden,key:`${h.attributeName}:${_.hidden}`}:{type:h.attributeName,change:"unknown change type",key:`${h.attributeName}:unknown-change-type`}}),$("key"),(0,pn.s)(this)).subscribe(h=>{this.domChange.emit(h)})}),this.changes.observe(this.el.nativeElement,{attributeFilter:["class","disabled","hidden"],attributes:!0,childList:!1,subtree:!1})}ngAfterViewInit(){this.initialClass=this.el.nativeElement.classList.value}ngOnDestroy(){this.changes.disconnect()}static#e=this.\u0275fac=function(a){return new(a||V8)(e.rXU(e.aKT))};static#t=this.\u0275dir=e.FsC({type:V8,selectors:[["button","cvcOrgSubmitButton",""]],outputs:{domChange:"domChange"}})};pl=(0,vi.Cg)([(0,pn.d)()],pl);const kc=(u,b,a)=>({"btn-right":u,"btn-left":b,"btn-center":a});function nh(u,b){if(1&u&&(e.j41(0,"button",3),e.EFF(1),e.k0s()),2&u){const a=b.ngrxLet,h=e.XpG();e.Y8G("disabled",!h.form.valid)("nzTooltipTrigger",a?"hover":null)("nzTooltipTitle","For "+(null==a?null:a.name)),e.R7$(),e.SpI(" ",h.props.submitLabel," ")}}let Vc=class L8 extends g.PU{constructor(b,a,h){super(),this.viewerService=b,this.cdr=a,this.apollo=h,this.menuSelection$=new V.B,this.baseButtonClass="org-dropdown-btn",this.defaultOptions={props:{submitLabel:"Submit"}},this.viewer$=this.viewerService.viewer$,this.organizations$=this.viewer$.pipe((0,$i.E)("organizations")),this.mostRecentOrg$=this.viewer$.pipe((0,$i.E)("mostRecentOrg")),this.isDisabled$=new V.B,this.isHidden$=new V.B,this.buttonClass$=new dn.t(this.baseButtonClass),this.subscriptions=[]}ngOnInit(){this.menuSelection$.pipe((0,Yi.E)(this.viewer$)).subscribe(([_,ee])=>{const ft={id:`User:${ee.id}`,fragment:is.J1`
            fragment UserMostRecentOrgId on User {
              mostRecentOrganizationId
            }
          `,data:{mostRecentOrganizationId:_}};this.apollo.client.writeFragment(ft)}),this.formUpdate$=new dn.t(this.form.status);const b=this.form.statusChanges.subscribe(_=>this.formUpdate$.next(_)),a=this.formUpdate$.subscribe(_=>this.cdr.detectChanges()),h=this.mostRecentOrg$.pipe((0,$i.E)("id"),(0,qt.p)(fo.kP)).subscribe(_=>{this.formControl.setValue(_)});this.subscriptions=this.subscriptions.concat([b,a,h])}ngAfterViewInit(){if(this.button&&this.button.domChange){const b=this.button.domChange.subscribe(a=>{"class"===a.type&&"string"==typeof a.change?this.buttonClass$.next(`${this.baseButtonClass} ${a.change}`):"disabled"===a.type&&"boolean"==typeof a.change?this.isDisabled$.next(a.change):"hidden"===a.type&&"boolean"==typeof a.change&&this.isHidden$.next(a.change)});this.subscriptions.push(b)}}static#e=this.\u0275fac=function(a){return new(a||L8)(e.rXU(Bl.q),e.rXU(e.gRc),e.rXU(is.Ic))};static#t=this.\u0275cmp=e.VBU({type:L8,selectors:[["cvc-org-submit-button"]],viewQuery:function(a,h){if(1&a&&e.GBs(pl,5),2&a){let _;e.mGM(_=e.lsd())&&(h.button=_.first)}},features:[e.Vt3],decls:3,vars:8,consts:[["type","hidden",3,"formControl","formlyAttributes"],[1,"btn-aligner",3,"ngClass"],["cvcOrgSubmitButton","","type","submit","nz-button","","nzType","primary","nz-tooltip","",3,"disabled","nzDanger","nzTooltipTrigger","nzTooltipTitle",4,"ngrxLet"],["cvcOrgSubmitButton","","type","submit","nz-button","","nzType","primary","nz-tooltip","",3,"disabled","nzDanger","nzTooltipTrigger","nzTooltipTitle"]],template:function(a,h){1&a&&(e.nrm(0,"input",0),e.j41(1,"div",1),e.DNE(2,nh,2,4,"button",2),e.k0s()),2&a&&(e.Y8G("formControl",h.formControl)("formlyAttributes",h.field),e.R7$(),e.Y8G("ngClass",e.sMw(4,kc,"right"===h.props.align,"left"===h.props.align,"center"===h.props.align)),e.R7$(),e.Y8G("ngrxLet",h.mostRecentOrg$))},dependencies:[M.YU,t.me,t.BC,t.l_,Ci.Nj,g.ch,Kn.aO,di.c,ho.p,hn.LH,pl],styles:[".btn-aligner[_ngcontent-%COMP%]{width:100%}.btn-aligner.btn-right[_ngcontent-%COMP%]{text-align:right}.btn-aligner.btn-left[_ngcontent-%COMP%]{text-align:left}.btn-aligner.btn-center[_ngcontent-%COMP%]{text-align:center}"],changeDetection:0})};Vc=(0,vi.Cg)([(0,pn.d)({arrayName:"subscriptions"})],Vc);const yd={types:[{name:"org-submit-button",component:Vc}]};let P1=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,t.X1,g.qy.forChild(yd),Z.Y3,aa.Yb,Kn.Zw,ns.Cu,hn.Qt]})}return u})();const xu=["optionTemplates"];function Pu(u,b){if(1&u&&e.nrm(0,"cvc-attribute-tag",4),2&u){const a=e.XpG().$implicit;e.Y8G("cvcAttrValue",a)}}function Cd(u,b){1&u&&(e.qex(0),e.DNE(1,Pu,1,1,"ng-template",null,1,e.C5r),e.bVm())}function F1(u,b){if(1&u){const a=e.RV6();e.j41(0,"div",5)(1,"cvc-attribute-tag",6),e.bIt("cvcOnClose",function(_){e.eBV(a);const ee=e.XpG();return e.Njj(ee.onTagClose$.next(_))}),e.k0s()()}if(2&u){const a=b.$implicit,h=e.XpG();e.R7$(),e.Y8G("cvcAttrValue",a.nzValue)("cvcContext",h.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",h.props.isMultiSelect?"default":"closeable")}}const ih=new Map([[xn.Kkj.Somatic,"Variant is a mutation, found only in tumor cells, having arisen in a specific tissue (non-germ cell), and is not expected to be inherited or passed to offspring."],[xn.Kkj.RareGermline,"Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in less than 1% of the population relevant to this evidence item."],[xn.Kkj.CommonGermline,"Variant is found in every cell (not restricted to tumor/diseased cells) and is thought to exist in at least 1% of the population relevant to this evidence item."],[xn.Kkj.Combined," Variants in the corresponding Complex Molecular Profile have heterogeneous origins."],[xn.Kkj.Unknown,"The variant origin is uncertain based on the available evidence."],[xn.Kkj.Na,"The variant type (e.g., expression) is not compatible (or easily classified) with the CIViC concept of variant origin."]]),va=qi(Mi(),mi());let bd=(()=>{class u extends va{constructor(a){super(),this.cdr=a,this.defaultOptions={props:{label:"Variant Origin",required:!1,isMultiSelect:!1,placeholder:"Select Variant Origin",tooltip:"Identifies whether the variant is inherited (germline mutation) or acquired (somatic mutation) in the context of the study"}},this.originEnum$=new dn.t([])}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.originEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr}),this.originEnum$.next(Array.from(ih.keys()))}configureStateConnections(){this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,me.T)(a=>a.map(h=>h))),this.onValueChange$.pipe((0,pn.s)(this)).subscribe(a=>{a?(this.props.description=ih.get(a),this.props.extraType="description"):(this.props.description=void 0,this.props.extraType="prompt")})}static#e=this.\u0275fac=function(h){return new(h||u)(e.rXU(e.gRc))};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["cvc-origin-select"]],viewQuery:function(h,_){if(1&h&&e.GBs(xu,5,e.C4Q),2&h){let ee;e.mGM(ee=e.lsd())&&(_.optionTemplates=ee)}},features:[e.Vt3],decls:6,vars:13,consts:[["selectedTemplate",""],["optionTemplates",""],[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcOnClose","cvcAttrValue","cvcContext","cvcMode"]],template:function(h,_){if(1&h&&(e.nrm(0,"cvc-enum-select",2),e.nI1(1,"ngrxPush"),e.DNE(2,Cd,3,0,"ng-container",3),e.nI1(3,"ngrxPush"),e.DNE(4,F1,2,3,"ng-template",null,0,e.C5r)),2&h){const ee=e.sdS(5);e.Y8G("cvcFormControl",_.formControl)("cvcFormlyAttributes",_.field)("cvcSelectMode",_.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",_.props.placeholder)("cvcCustomTemplate",ee)("cvcOptions",e.bMT(1,9,_.selectOption$))("cvcShowError",_.showError)("cvcDisabled",_.props.disabled),e.R7$(2),e.Y8G("ngForOf",e.bMT(3,11,_.originEnum$))}},dependencies:[M.Sq,Si,to,Ci.L9]})}return u})();const Fu={types:[{name:"origin-select",wrappers:["form-field"],component:bd},{name:"origin-multi-select",wrappers:["form-field"],component:bd,defaultOptions:{props:{label:"Variant Origins",isMultiSelect:!0}}}]};let Ed=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,t.X1,g.qy.forChild(Fu),En,ci,Kr]})}return u})();const Td=["optionTemplates"];function Zl(u,b){if(1&u&&(e.qex(0),e.j41(1,"em"),e.nrm(2,"span",8),e.nI1(3,"highlightTypeahead"),e.k0s(),e.bVm()),2&u){const a=e.XpG(2).$implicit,h=e.XpG().ngrxLet;e.R7$(2),e.Y8G("innerHtml",e.i5U(3,1,a.hpoId,h),e.npT)}}function A1(u,b){if(1&u&&(e.nrm(0,"cvc-entity-tag",5),e.j41(1,"span",6),e.DNE(2,Zl,4,4,"ng-container",7),e.k0s()),2&u){const a=e.XpG().$implicit,h=e.XpG().ngrxLet;e.Y8G("cvcDisableLink",!0)("cvcCacheId",a.__typename+":"+a.id)("cvcEmphasize",h),e.R7$(2),e.Y8G("ngIf",a.hpoId)}}function zd(u,b){1&u&&(e.qex(0),e.DNE(1,A1,3,4,"ng-template",null,1,e.C5r),e.bVm())}function oh(u,b){if(1&u&&(e.qex(0),e.DNE(1,zd,3,0,"ng-container",4),e.nI1(2,"ngrxPush"),e.bVm()),2&u){const a=e.XpG();e.R7$(),e.Y8G("ngForOf",e.bMT(2,1,a.result$))}}function Md(u,b){if(1&u){const a=e.RV6();e.j41(0,"div",9)(1,"cvc-entity-tag",10),e.bIt("cvcOnClose",function(){const _=e.eBV(a).$implicit,ee=e.XpG();return e.Njj(ee.onTagClose$.next(_.nzValue))}),e.k0s()()}if(2&u){const a=b.$implicit,h=e.XpG();e.R7$(),e.Y8G("cvcCacheId","Phenotype:"+a.nzValue)("cvcContext",h.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",h.props.isMultiSelect?"default":"closeable")}}const Sd=qi(Mi(),$o());let Au=(()=>{class u extends Sd{constructor(a,h,_){super(),this.taq=a,this.tq=h,this.changeDetectorRef=_,this.defaultOptions={props:{entityName:{singular:"Phenotype",plural:"Phenotypes"},isMultiSelect:!1,requireType:!0,tooltip:"Phenotype or phenotype combination which interacts with the specified variant",placeholders:{default:"Search Phenotypes",multiDefault:"Select Phenotype(s) (max MULTI_MAX)",requireTypePrompt:"Select an ENTITY_NAME Type to search Phenotypes"},description:'Please provide any <a href="https://hpo.jax.org/app/browse/term/HP:0000118" target="_blank">HPO phenotypes</a>, including <a href="https://hpo.jax.org/app/browse/term/HP:0003674" target="_blank">age of onset</a>.',extraType:"prompt"}},this.placeholder$=new dn.t(this.defaultOptions.props.placeholders.default)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.configurePlaceholders()}configureStateConnections(){}configurePlaceholders(){}getTypeaheadVarsFn(a){return{name:a}}getTypeaheadResultsFn(a){return a.data.phenotypeTypeahead}getTagQueryVarsFn(a){return{id:a}}getTagQueryResultsFn(a){return a.data.phenotype}getSelectedItemOptionFn(a){return{value:a.id,label:a.name}}getSelectOptionsFn(a,h){return a.map((_,ee)=>({label:h.get(ee)||_.name,value:_.id}))}static#e=this.\u0275fac=function(h){return new(h||u)(e.rXU(xn.Osm),e.rXU(xn.$UJ),e.rXU(e.gRc))};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["cvc-phenotype-select"]],viewQuery:function(h,_){if(1&h&&e.GBs(Td,5,e.C4Q),2&h){let ee;e.mGM(ee=e.lsd())&&(_.optionTemplates=ee)}},features:[e.Vt3],decls:9,vars:22,consts:[["selectedTemplate",""],["optionTemplates",""],[3,"cvcOnSearch","cvcOnOpenChange","cvcOnModelChange","cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcDisabled","cvcLoading"],[4,"ngrxLet"],[4,"ngFor","ngForOf"],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf"],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcOnClose","cvcCacheId","cvcContext","cvcMode"]],template:function(h,_){if(1&h){const ee=e.RV6();e.j41(0,"cvc-entity-select",2),e.nI1(1,"ngrxPush"),e.nI1(2,"ngrxPush"),e.nI1(3,"ngrxPush"),e.nI1(4,"ngrxPush"),e.nI1(5,"ngrxPush"),e.bIt("cvcOnSearch",function(nn){return e.eBV(ee),e.Njj(_.onSearch$.next(nn))})("cvcOnOpenChange",function(nn){return e.eBV(ee),e.Njj(_.onOpenChange$?_.onOpenChange$.next(nn):null)})("cvcOnModelChange",function(nn){return e.eBV(ee),e.Njj(_.props.change&&_.props.change(_.field,nn))}),e.k0s(),e.DNE(6,oh,3,3,"ng-container",3)(7,Md,2,3,"ng-template",null,0,e.C5r)}if(2&h){const ee=e.sdS(8);e.Y8G("cvcSelectMode",_.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",ee)("cvcFormControl",_.formControl)("cvcFormlyAttributes",_.field)("cvcEntityName",_.props.entityName)("cvcPlaceholder",e.bMT(1,12,_.placeholder$))("cvcResults",e.bMT(2,14,_.result$))("cvcOptions",e.bMT(3,16,_.selectOption$))("cvcShowError",_.showError)("cvcDisabled",_.onRequiresPhenotype$&&!e.bMT(4,18,_.onRequiresPhenotype$))("cvcLoading",e.bMT(5,20,_.isLoading$)),e.R7$(6),e.Y8G("ngrxLet",_.onSearch$)}},dependencies:[M.Sq,M.bT,Ci.Nj,qe.Di,Wt,tn.b,Ci.L9,Xr.M],changeDetection:0})}return u})();const R1={types:[{name:"phenotype-select",wrappers:["form-field"],component:Au,defaultOptions:{props:{label:"Phenotype"}}},{name:"phenotype-multi-select",wrappers:["form-field"],component:Au,defaultOptions:{props:{isMultiSelect:!0,label:"Phenotypes"}}}]};let Ru=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,t.X1,g.qy.forChild(R1),Cn.$,Kn.Zw,Qe.DH,gi.MC,oi.U6,Z.Y3,F.j,L.f3,hn.Qt,on.pc,G.PQ,rt.jl,qe.kT,Gn.T,En,jn,ge.i,Ft._]})}return u})();var lc=c(4707),Dd=c(6042);const Od=["nz-rate-item",""],rh=u=>({$implicit:u});function ql(u,b){}function Lc(u,b){}function xr(u,b){1&u&&e.nrm(0,"span",4)}const Hh=["ulElement"];function sh(u,b){if(1&u){const a=e.RV6();e.j41(0,"li",2)(1,"div",3),e.bIt("itemHover",function(_){const ee=e.eBV(a).$index,ft=e.XpG();return e.Njj(ft.onItemHover(ee,_))})("itemClick",function(_){const ee=e.eBV(a).$index,ft=e.XpG();return e.Njj(ft.onItemClick(ee,_))}),e.k0s()()}if(2&u){const a=b.$index,h=e.XpG();e.Y8G("ngClass",h.starStyleArray[a]||"")("nzTooltipTitle",h.nzTooltips[a]),e.R7$(),e.Y8G("allowHalf",h.nzAllowHalf)("character",h.nzCharacter)("index",a)}}let Nu=(()=>{class u{constructor(){this.index=0,this.allowHalf=!1,this.itemHover=new e.bkB,this.itemClick=new e.bkB}hoverRate(a){this.itemHover.next(a&&this.allowHalf)}clickRate(a){this.itemClick.next(a&&this.allowHalf)}static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["","nz-rate-item",""]],inputs:{character:"character",index:"index",allowHalf:[2,"allowHalf","allowHalf",e.L39]},outputs:{itemHover:"itemHover",itemClick:"itemClick"},exportAs:["nzRateItem"],standalone:!0,features:[e.GFd,e.aNF],attrs:Od,decls:6,vars:8,consts:[["defaultCharacter",""],[1,"ant-rate-star-second",3,"mouseover","click"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"ant-rate-star-first",3,"mouseover","click"],["nz-icon","","nzType","star","nzTheme","fill"]],template:function(h,_){if(1&h){const ee=e.RV6();e.j41(0,"div",1),e.bIt("mouseover",function(nn){return e.eBV(ee),_.hoverRate(!1),e.Njj(nn.stopPropagation())})("click",function(){return e.eBV(ee),e.Njj(_.clickRate(!1))}),e.DNE(1,ql,0,0,"ng-template",2),e.k0s(),e.j41(2,"div",3),e.bIt("mouseover",function(nn){return e.eBV(ee),_.hoverRate(!0),e.Njj(nn.stopPropagation())})("click",function(){return e.eBV(ee),e.Njj(_.clickRate(!0))}),e.DNE(3,Lc,0,0,"ng-template",2),e.k0s(),e.DNE(4,xr,1,0,"ng-template",null,0,e.C5r)}if(2&h){const ee=e.sdS(5);e.R7$(),e.Y8G("ngTemplateOutlet",_.character||ee)("ngTemplateOutletContext",e.eq3(4,rh,_.index)),e.R7$(2),e.Y8G("ngTemplateOutlet",_.character||ee)("ngTemplateOutletContext",e.eq3(6,rh,_.index))}},dependencies:[M.T3,Z.Y3,Z.Dn],encapsulation:2,changeDetection:0})}return u})(),eu=(()=>{class u{get nzValue(){return this._value}set nzValue(a){this._value!==a&&(this._value=a,this.hasHalf=!Number.isInteger(a)&&this.nzAllowHalf,this.hoverValue=Math.ceil(a))}constructor(a,h,_,ee,ft,nn){this.nzConfigService=a,this.ngZone=h,this.renderer=_,this.cdr=ee,this.directionality=ft,this.destroy$=nn,this._nzModuleName="rate",this.nzAllowClear=!0,this.nzAllowHalf=!1,this.nzDisabled=!1,this.nzAutoFocus=!1,this.nzCount=5,this.nzTooltips=[],this.nzOnBlur=new e.bkB,this.nzOnFocus=new e.bkB,this.nzOnHoverChange=new e.bkB,this.nzOnKeyDown=new e.bkB,this.classMap={},this.starArray=[],this.starStyleArray=[],this.dir="ltr",this.hasHalf=!1,this.hoverValue=0,this.isFocused=!1,this._value=0,this.isNzDisableFirstChange=!0,this.onChange=()=>null,this.onTouched=()=>null}ngOnChanges(a){const{nzAutoFocus:h,nzCount:_,nzValue:ee}=a;if(h&&!h.isFirstChange()){const ft=this.ulElement.nativeElement;this.nzAutoFocus&&!this.nzDisabled?this.renderer.setAttribute(ft,"autofocus","autofocus"):this.renderer.removeAttribute(ft,"autofocus")}_&&this.updateStarArray(),ee&&this.updateStarStyle()}ngOnInit(){this.nzConfigService.getConfigChangeEventForComponent("rate").pipe((0,be.Q)(this.destroy$)).subscribe(()=>this.cdr.markForCheck()),this.directionality.change.pipe((0,be.Q)(this.destroy$)).subscribe(a=>{this.dir=a,this.cdr.detectChanges()}),this.dir=this.directionality.value,this.ngZone.runOutsideAngular(()=>{(0,x.R)(this.ulElement.nativeElement,"focus").pipe((0,be.Q)(this.destroy$)).subscribe(a=>{this.isFocused=!0,this.nzOnFocus.observers.length&&this.ngZone.run(()=>this.nzOnFocus.emit(a))}),(0,x.R)(this.ulElement.nativeElement,"blur").pipe((0,be.Q)(this.destroy$)).subscribe(a=>{this.isFocused=!1,this.nzOnBlur.observers.length&&this.ngZone.run(()=>this.nzOnBlur.emit(a))})})}onItemClick(a,h){if(this.nzDisabled)return;this.hoverValue=a+1;const _=h?a+.5:a+1;this.nzValue===_?this.nzAllowClear&&(this.nzValue=0,this.onChange(this.nzValue)):(this.nzValue=_,this.onChange(this.nzValue)),this.updateStarStyle()}onItemHover(a,h){this.nzDisabled||((this.hoverValue!==a+1||h!==this.hasHalf)&&(this.hoverValue=a+1,this.hasHalf=h,this.updateStarStyle()),this.nzOnHoverChange.emit(this.hoverValue))}onRateLeave(){this.hasHalf=!Number.isInteger(this.nzValue),this.hoverValue=Math.ceil(this.nzValue),this.nzOnHoverChange.emit(this.hoverValue),this.updateStarStyle()}focus(){this.ulElement.nativeElement.focus()}blur(){this.ulElement.nativeElement.blur()}onKeyDown(a){const h=this.nzValue;a.keyCode===X.LE&&this.nzValue<this.nzCount?this.nzValue+=this.nzAllowHalf?.5:1:a.keyCode===X.UQ&&this.nzValue>0&&(this.nzValue-=this.nzAllowHalf?.5:1),h!==this.nzValue&&(this.onChange(this.nzValue),this.nzOnKeyDown.emit(a),this.updateStarStyle(),this.cdr.markForCheck())}updateStarArray(){this.starArray=Array(this.nzCount).fill(0).map((a,h)=>h),this.updateStarStyle()}updateStarStyle(){this.starStyleArray=this.starArray.map(a=>{const h="ant-rate-star",_=a+1;return{[`${h}-full`]:_<this.hoverValue||!this.hasHalf&&_===this.hoverValue,[`${h}-half`]:this.hasHalf&&_===this.hoverValue,[`${h}-active`]:this.hasHalf&&_===this.hoverValue,[`${h}-zero`]:_>this.hoverValue,[`${h}-focused`]:this.hasHalf&&_===this.hoverValue&&this.isFocused}})}writeValue(a){this.nzValue=a||0,this.updateStarArray(),this.cdr.markForCheck()}setDisabledState(a){this.nzDisabled=this.isNzDisableFirstChange&&this.nzDisabled||a,this.isNzDisableFirstChange=!1,this.cdr.markForCheck()}registerOnChange(a){this.onChange=a}registerOnTouched(a){this.onTouched=a}static#e=this.\u0275fac=function(h){return new(h||u)(e.rXU(Dd.yx),e.rXU(e.SKi),e.rXU(e.sFG),e.rXU(e.gRc),e.rXU(E.dS,8),e.rXU(H.y4))};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["nz-rate"]],viewQuery:function(h,_){if(1&h&&e.GBs(Hh,7),2&h){let ee;e.mGM(ee=e.lsd())&&(_.ulElement=ee.first)}},inputs:{nzAllowClear:[2,"nzAllowClear","nzAllowClear",e.L39],nzAllowHalf:[2,"nzAllowHalf","nzAllowHalf",e.L39],nzDisabled:[2,"nzDisabled","nzDisabled",e.L39],nzAutoFocus:[2,"nzAutoFocus","nzAutoFocus",e.L39],nzCharacter:"nzCharacter",nzCount:[2,"nzCount","nzCount",e.Udg],nzTooltips:"nzTooltips"},outputs:{nzOnBlur:"nzOnBlur",nzOnFocus:"nzOnFocus",nzOnHoverChange:"nzOnHoverChange",nzOnKeyDown:"nzOnKeyDown"},exportAs:["nzRate"],standalone:!0,features:[e.Jv_([H.y4,{provide:t.kq,useExisting:(0,e.Rfq)(()=>u),multi:!0}]),e.GFd,e.OA$,e.aNF],decls:4,vars:6,consts:[["ulElement",""],[1,"ant-rate",3,"keydown","mouseleave","ngClass","tabindex"],["nz-tooltip","",1,"ant-rate-star",3,"ngClass","nzTooltipTitle"],["nz-rate-item","",3,"itemHover","itemClick","allowHalf","character","index"]],template:function(h,_){if(1&h){const ee=e.RV6();e.j41(0,"ul",1,0),e.bIt("keydown",function(nn){return e.eBV(ee),_.onKeyDown(nn),e.Njj(nn.preventDefault())})("mouseleave",function(nn){return e.eBV(ee),_.onRateLeave(),e.Njj(nn.stopPropagation())}),e.Z7z(2,sh,2,5,"li",2,e.fX1),e.k0s()}2&h&&(e.AVh("ant-rate-disabled",_.nzDisabled)("ant-rate-rtl","rtl"===_.dir),e.Y8G("ngClass",_.classMap)("tabindex",_.nzDisabled?-1:1),e.R7$(2),e.Dyx(_.starArray))},dependencies:[M.YU,hn.Qt,hn.LH,Nu],encapsulation:2,changeDetection:0})}return(0,lc.Cg)([(0,Dd.H4)()],u.prototype,"nzAllowClear",void 0),(0,lc.Cg)([(0,Dd.H4)()],u.prototype,"nzAllowHalf",void 0),u})(),ku=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[eu,Nu]})}return u})();const Vu={1:"Poor - Claim is not supported well by experimental evidence. Results are not reproducible, or have very small sample size. No follow-up is done to validate novel claims.",2:"Adequate - Evidence is not well supported by experimental data, and little follow-up data is available. Experiments may lack proper controls, have small sample size, or are not statistically convincing.",3:"Average - Evidence is convincing, but not supported by a breadth of experiments. May be smaller scale projects, or novel results without many follow-up experiments. Discrepancies from expected results are explained and not concerning.",4:"Strong - Well supported evidence. Experiments are well controlled, and results are convincing. Any discrepancies from expected results are well-explained and not concerning.",5:"Excellent - Solid, well supported evidence from a lab or journal with respected academic standing. Experiments are well controlled, and results are clean and reproducible across multiple replicates. Evidence confirmed using separate methods."},Pa=qi(Mi(),mi()),N1={types:[{name:"rating",wrappers:["form-field"],component:(()=>{class u extends Pa{constructor(){super(),this.defaultOptions={props:{label:"Evidence Rating",count:5,tooltip:"A representation of the curator's confidence in the quality of the summarized evidence",hoverText:[]}},this.rating$=new dn.t(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.formControl.value&&this.rating$.next(this.formControl.value),Object.entries(Vu).map(([a,h])=>{this.props.hoverText.push(h)}),this.rating$.pipe((0,pn.s)(this)).subscribe(a=>{this.formControl.setValue(a)}),this.onValueChange$.pipe((0,pn.s)(this)).subscribe(a=>{a&&0!==a?(this.props.description=Vu[a],this.props.extraType="description"):(this.formControl.setValue(void 0),this.props.description=void 0,this.props.extraType="prompt")})}configureStateConnections(){}static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["cvc-rating"]],features:[e.Vt3],decls:3,vars:5,consts:[["type","hidden",3,"formControl","formlyAttributes"],[1,"rate-block"],[3,"ngModelChange","ngModel","nzCount","nzTooltips"]],template:function(h,_){1&h&&(e.nrm(0,"input",0),e.j41(1,"div",1)(2,"nz-rate",2),e.bIt("ngModelChange",function(ft){return _.rating$.next(ft)}),e.k0s()()),2&h&&(e.Y8G("formControl",_.formControl)("formlyAttributes",_.field),e.R7$(2),e.Y8G("ngModel",_.formControl.value)("nzCount",_.props.count)("nzTooltips",_.props.hoverText))},dependencies:[t.me,t.BC,t.l_,t.vS,g.ch,eu],styles:["[_nghost-%COMP%]   .rate-block[_ngcontent-%COMP%]{display:inline-block;background-color:#fff;border-radius:2px;padding:2px 4px;margin-top:-4px}[_nghost-%COMP%]     nz-rate .anticon{font-size:160%}"],changeDetection:0})}return u})()}]};let ah=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,t.X1,t.YN,g.qy.forChild(N1),ku,ge.i,En,ci]})}return u})();const Uh=["optionTemplates"];function q2(u,b){if(1&u&&(e.j41(0,"nz-tag")(1,"strong"),e.EFF(2),e.k0s()()),2&u){const a=e.XpG().$implicit;e.R7$(2),e.JRh(a)}}function ep(u,b){1&u&&(e.qex(0),e.DNE(1,q2,3,1,"ng-template",null,1,e.C5r),e.bVm())}function Ko(u,b){if(1&u){const a=e.RV6();e.j41(0,"nz-tag",7),e.bIt("nzOnClose",function(_){e.eBV(a);const ee=e.XpG(2);return e.Njj(ee.onTagClose$.next(_))}),e.j41(1,"strong"),e.EFF(2),e.k0s()()}if(2&u){const a=e.XpG().$implicit;e.R7$(2),e.JRh(a.nzValue)}}function wd(u,b){if(1&u&&(e.qex(0),e.EFF(1),e.bVm()),2&u){const a=e.XpG().$implicit;e.R7$(),e.SpI(" ",a.nzValue," ")}}function ch(u,b){if(1&u&&(e.j41(0,"div",4),e.DNE(1,Ko,3,1,"nz-tag",5)(2,wd,2,1,"ng-container",6),e.k0s()),2&u){const a=e.XpG();e.R7$(),e.Y8G("ngIf",!a.props.isMultiSelect),e.R7$(),e.Y8G("ngIf",a.props.isMultiSelect)}}const Gh=qi(Mi(),mi());let lh=(()=>{class u extends Gh{constructor(a){super(),this.cdr=a,this.defaultOptions={props:{label:"Reference Build",required:!1,isMultiSelect:!1,description:"Select the human genome reference sequence from which these coordinates are obtained",placeholder:"Select Reference Build"}},this.buildEnum$=new dn.t([])}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.buildEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}configureStateConnections(){this.placeholder$=new dn.t(this.props.placeholder),this.buildEnum$.next((0,Ei.KF)(xn.KRr).map(a=>a)),this.optionTemplates||console.error(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,me.T)(a=>a.map(h=>h)))}static#e=this.\u0275fac=function(h){return new(h||u)(e.rXU(e.gRc))};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["cvc-reference-build-select"]],viewQuery:function(h,_){if(1&h&&e.GBs(Uh,5,e.C4Q),2&h){let ee;e.mGM(ee=e.lsd())&&(_.optionTemplates=ee)}},features:[e.Vt3],decls:7,vars:15,consts:[["selectedTemplate",""],["optionTemplates",""],[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],[1,"ant-select-selection-item-content"],["nzMode","closeable",3,"nzOnClose",4,"ngIf"],[4,"ngIf"],["nzMode","closeable",3,"nzOnClose"]],template:function(h,_){if(1&h&&(e.nrm(0,"cvc-enum-select",2),e.nI1(1,"ngrxPush"),e.nI1(2,"ngrxPush"),e.DNE(3,ep,3,0,"ng-container",3),e.nI1(4,"ngrxPush"),e.DNE(5,ch,3,2,"ng-template",null,0,e.C5r)),2&h){const ee=e.sdS(6);e.Y8G("cvcFormControl",_.formControl)("cvcFormlyAttributes",_.field)("cvcSelectMode",_.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.bMT(1,9,_.placeholder$))("cvcCustomTemplate",ee)("cvcOptions",e.bMT(2,11,_.selectOption$))("cvcShowError",_.showError)("cvcDisabled",_.props.disabled),e.R7$(3),e.Y8G("ngForOf",e.bMT(4,13,_.buildEnum$))}},dependencies:[M.Sq,M.bT,Gn.s,Si,Ci.L9]})}return u})();const tp={types:[{name:"reference-build-select",wrappers:["form-field"],component:lh},{name:"reference-build-multi-select",wrappers:["form-field"],component:lh,defaultOptions:{props:{label:"Levels",isMultiSelect:!0}}}]};let uh=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,t.X1,g.qy.forChild(tp),Gn.T,ge.i,En,ci]})}return u})();const dh=["optionTemplates"];function kr(u,b){if(1&u&&e.nrm(0,"cvc-attribute-tag",4),2&u){const a=e.XpG().$implicit;e.Y8G("cvcAttrValue",a)}}function np(u,b){1&u&&(e.qex(0),e.DNE(1,kr,1,1,"ng-template",null,1,e.C5r),e.bVm())}function Yh(u,b){if(1&u){const a=e.RV6();e.j41(0,"div",5)(1,"cvc-attribute-tag",6),e.bIt("cvcOnClose",function(_){e.eBV(a);const ee=e.XpG();return e.Njj(ee.onTagClose$.next(_))}),e.k0s()()}if(2&u){const a=b.$implicit,h=e.XpG();e.R7$(),e.Y8G("cvcAttrValue",a.nzValue)("cvcContext",h.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",h.props.isMultiSelect?"default":"closeable")}}const ip={Evidence:{PREDICTIVE:{SENSITIVITYRESPONSE:"Associated with a clinical or preclinical response to treatment",RESISTANCE:"Associated with clinical or preclinical resistance to treatment",ADVERSE_RESPONSE:"Associated with an adverse response to drug treatment",REDUCED_SENSITIVITY:"Response to treatment is lower than seen in other treatment contexts",NA:"Clinical Significance is not applicable."},DIAGNOSTIC:{POSITIVE:"Associated with diagnosis of disease or subtype",NEGATIVE:"Associated with lack of disease or subtype"},PROGNOSTIC:{BETTER_OUTCOME:"Demonstrates better than expected clinical outcome",POOR_OUTCOME:"Demonstrates worse than expected clinical outcome",NA:"Clinical Significance is not applicable."},PREDISPOSING:{PREDISPOSITION:"Germline variant has predisposing potential for cancer, and may meet select ACMG/AMP criteria supporting pathogenic or benign classification.",PROTECTIVENESS:"Germline variant has properties that protect individuals from acquiring cancer."},FUNCTIONAL:{GAIN_OF_FUNCTION:"Sequence variant confers an increase in normal gene function",LOSS_OF_FUNCTION:"Sequence variant confers a diminished or abolished function",UNALTERED_FUNCTION:"Gene product of sequence variant is unchanged",NEOMORPHIC:"Sequence variant creates a novel function",DOMINANT_NEGATIVE:"Sequence variant abrogates function of wildtype allele gene product",UNKNOWN:"Sequence variant that cannot be precisely defined by the other listed categories"},ONCOGENIC:{ONCOGENICITY:"Somatic variant has oncogenic potential for driving cancer, and may meet select ClinGen/CGC/VICC criteria supporting pathogenic or benign classification.",PROTECTIVENESS:"Somatic variant has a protective role against cancer."}},Assertion:{PREDICTIVE:{SENSITIVITYRESPONSE:"Associated with a clinical or preclinical response to treatment",RESISTANCE:"Associated with clinical or preclinical resistance to treatment",ADVERSE_RESPONSE:"Associated with an adverse response to drug treatment",REDUCED_SENSITIVITY:"Response to treatment is lower than seen in other treatment contexts",NA:"Clinical Significance is not applicable."},DIAGNOSTIC:{POSITIVE:"Associated with diagnosis of disease or subtype",NEGATIVE:"Associated with lack of disease or subtype"},PROGNOSTIC:{BETTER_OUTCOME:"Demonstrates better than expected clinical outcome",POOR_OUTCOME:"Demonstrates worse than expected clinical outcome",NA:"Clinical Significance is not applicable."},PREDISPOSING:{PATHOGENIC:"Very strong evidence the variant is pathogenic",LIKELY_PATHOGENIC:"Strong evidence (>90% certainty) the variant is pathogenic.",BENIGN:"Very strong evidence the variant is benign",LIKELY_BENIGN:"Not expected to have a major effect on disease",UNCERTAIN_SIGNIFICANCE:"Does not meet the ACMG/AMP criteria for pathogenic/benign, or the evidence is conflicting"},ONCOGENIC:{ONCOGENIC:"Very strong evidence the variant is oncogenic.",LIKELY_ONCOGENIC:"Strong evidence the variant is oncogenic.",BENIGN:"Very strong evidence the variant does not have oncogenic properties.",LIKELY_BENIGN:"Strong evidence the variant does not have oncogenic properties.",UNCERTAIN_SIGNIFICANCE:"Does not meet guideline criteria for oncogenic/benign, or the evidence is conflicting."}}},hh=qi(Mi(),mi()),xd={types:[{name:"significance-select",wrappers:["form-field"],component:(()=>{class u extends hh{constructor(a){super(),this.cdr=a,this.defaultOptions={props:{label:"Significance",required:!0,isMultiSelect:!1,placeholder:"Select Significance",placeholderFn:h=>`Select ${h?h+" ":""} Significance`,requireTypePromptFn:h=>`Select ${h} Type to select its Significance`,tooltip:"Clinical impact of the variant"}},this.significanceEnum$=new dn.t([])}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEnumSelectField({optionEnum$:this.significanceEnum$,optionTemplate$:this.optionTemplate$,changeDetectorRef:this.cdr})}configureStateConnections(){if(!this.state)return console.error(`${this.field.id} requires a form state to populate its options, none was found.`),void(this.placeholder$=new dn.t("ERROR: Form state not found"));if(this.placeholder$=new dn.t(this.props.placeholderFn(this.state.entityName)),!this.state.enums.significance$)return void console.error(`${this.field.id} could not find form state's enums.significance$ to populate select.`);this.state.enums.significance$.pipe((0,pn.s)(this)).subscribe(h=>{this.significanceEnum$.next(h)}),this.optionTemplates||console.warn(`${this.field.id} could not find its optionTemplates QueryList to populate its select options, so simple text labels will be displayed.`),this.optionTemplate$=this.optionTemplates?.changes.pipe((0,me.T)(h=>h.map(_=>_)));const a=`${this.state.entityName.toLowerCase()}Type$`;this.state.fields[a]?(this.onTypeSelect$=this.state.fields[a],this.onTypeSelect$.pipe((0,so.i)("add"===this.options.formState.formMode?0:1),(0,pn.s)(this)).subscribe(h=>{h?(this.props.disabled=!1,this.props.description=void 0,this.props.extraType=void 0,this.placeholder$.next(this.props.placeholderFn(this.state.entityName))):(this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName),this.props.extraType="prompt"),this.formControl.value&&this.formControl.setValue(void 0)}),this.onValueChange$.pipe((0,Yi.E)(this.onTypeSelect$),(0,pn.s)(this)).subscribe(([h,_])=>{!_||!h||!this.state||(this.props.description=void 0,this.props.extraType="description",this.props.description=ip[this.state.entityName][_][h],this.field.formControl.markAsTouched())})):console.error(`${this.field.id} could not find form state's ${a} to populate Significance options.`)}static#e=this.\u0275fac=function(h){return new(h||u)(e.rXU(e.gRc))};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["cvc-significance-select"]],viewQuery:function(h,_){if(1&h&&e.GBs(dh,5,e.C4Q),2&h){let ee;e.mGM(ee=e.lsd())&&(_.optionTemplates=ee)}},features:[e.Vt3],decls:7,vars:15,consts:[["selectedTemplate",""],["optionTemplates",""],[3,"cvcFormControl","cvcFormlyAttributes","cvcSelectMode","cvcPlaceholder","cvcCustomTemplate","cvcOptions","cvcShowError","cvcDisabled"],[4,"ngFor","ngForOf"],[3,"cvcAttrValue"],[1,"ant-select-selection-item-content"],[3,"cvcOnClose","cvcAttrValue","cvcContext","cvcMode"]],template:function(h,_){if(1&h&&(e.nrm(0,"cvc-enum-select",2),e.nI1(1,"ngrxPush"),e.nI1(2,"ngrxPush"),e.DNE(3,np,3,0,"ng-container",3),e.nI1(4,"ngrxPush"),e.DNE(5,Yh,2,3,"ng-template",null,0,e.C5r)),2&h){const ee=e.sdS(6);e.Y8G("cvcFormControl",_.formControl)("cvcFormlyAttributes",_.field)("cvcSelectMode",_.props.isMultiSelect?"multiple":"default")("cvcPlaceholder",e.bMT(1,9,_.placeholder$))("cvcCustomTemplate",ee)("cvcOptions",e.bMT(2,11,_.selectOption$))("cvcShowError",_.showError)("cvcDisabled",_.props.disabled),e.R7$(3),e.Y8G("ngForOf",e.bMT(4,13,_.significanceEnum$))}},dependencies:[M.Sq,Si,to,Ci.L9]})}return u})()}]};let _a=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,t.X1,g.qy.forChild(xd),En,ci,Kr]})}return u})();var T=c(1427);const d=()=>[0,0];function p(u,b){1&u&&e.nrm(0,"span",9),2&u&&e.Y8G("nzType","loading")}function v(u,b){if(1&u&&(e.qex(0),e.DNE(1,p,1,1,"span",8),e.EFF(2,"\xa0 "),e.j41(3,"span"),e.EFF(4),e.k0s(),e.bVm()),2&u){const a=b.ngrxLet;e.R7$(),e.Y8G("ngIf",a.showSpinner),e.R7$(3),e.JRh(a.message)}}function C(u,b){if(1&u&&e.EFF(0),2&u){const a=e.XpG();e.JRh(a.successMessage)}}function O(u,b){1&u&&(e.j41(0,"button",10),e.EFF(1," Add Source "),e.k0s()),2&u&&e.Y8G("disabled",null===b.ngrxLet.citation)}let Q=class B8{constructor(b,a,h,_,ee){this.checkCitation=b,this.addRemoteCitation=a,this.errors=h,this.apollo=_,this.cdr=ee,this.cvcOnCreate=new e.bkB,this.messageOptions={empty:(ft,nn)=>`No ${nn} Source with a citation ID of "${ft}"`,searchCitation:(ft,nn)=>`Searching ${nn} for a citation ID of "${ft}"`,foundCitation:(ft,nn,Rn)=>`Found ${nn} citation "${Rn}" with ID ${ft}`,noCitation:(ft,nn)=>`No ${nn} Source with a citation ID of "${ft}" was found`},this.form=new t.J3({}),this.model={citationId:"",sourceType:xn.tUL.Pubmed},this.formLayout="horizontal",this.options={formState:{formLayout:this.formLayout}},this.onSubmit$=new V.B,this.citationId$=new dn.t(""),this.sourceType$=new dn.t(xn.tUL.Pubmed),this.addSourceStubMutator=new Ar.E(this.errors),this.fields=[{key:"citationId",props:{hidden:!0}},{key:"sourceType",props:{hidden:!0}}],this.onSubmit$.pipe((0,pn.s)(this)).subscribe(ft=>{console.log("disease-quick-add form model submitted.",ft),this.submitSourceStub()})}ngOnInit(){void 0!==this.model.citationId&&void 0!==this.model.sourceType?(this.queryRef=this.checkCitation.watch({citationId:this.model.citationId,sourceType:this.model.sourceType}),this.checkResult$=this.queryRef.valueChanges.pipe((0,me.T)(b=>({loading:b.loading,citation:b.data?b.data.remoteCitation:null,model:this.model})),(0,On.M)(b=>{this.citationString=b.citation?b.citation:void 0})),this.citationId$.pipe((0,pn.s)(this)).subscribe(b=>{this.model.sourceType&&this.queryRef.refetch({citationId:b,sourceType:this.model.sourceType})}),this.formMessageDisplay$=this.checkResult$.pipe((0,me.T)(b=>{const a=b.loading,h=b.citation,_=b.model;return a?{message:this.messageOptions.searchCitation(_.citationId,_.sourceType),showSpinner:!0}:a||null===h?a||null!==h?{message:"UNHANDLED MESSAGE STATE",showSpinner:!1}:{message:this.messageOptions.noCitation(_.citationId,_.sourceType),showSpinner:!1}:{message:this.messageOptions.foundCitation(_.citationId,(0,T.A)(_.sourceType),h),showSpinner:!1}}),(0,Oe.Z)({message:this.messageOptions.searchCitation(this.model.citationId,this.model.sourceType),showSpinner:!0}))):console.error("source-quick-add provided invalid initial model")}submitSourceStub(){void 0!==this.model.citationId&&void 0!==this.model.sourceType&&(this.mutationState=this.addSourceStubMutator.mutate(this.addRemoteCitation,{input:{citationId:this.model.citationId,sourceType:this.model.sourceType}},{},b=>{if(console.log("source-quick-add submit data callback",b),b.addRemoteCitation){this.successMessage=`New Source "${this.citationString}" added.`;const a=b.addRemoteCitation.newSource,h=(0,T.A)(this.model.sourceType),_=this.citationString?this.citationString:"NO CITATION",ee={query:is.J1`
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
              `,data:{source:{__typename:"Source",id:a.id,name:`${h}: ${_}`,link:`sources/${a.id}`,citation:_,citationId:this.model.citationId,sourceType:this.model.sourceType}},variables:{id:a.id}};this.apollo.client.cache.writeQuery(ee)||console.error("source-quick-add.form Source writeQuery failed.",ee),setTimeout(()=>{const nn={id:`Source:${a.id}`,fragment:is.J1`
                  fragment LinkableSource on Source {
                    id
                    name
                    link
                  }
                `},Rn=this.apollo.client.cache.readFragment(nn);null!==Rn&&this.cvcOnCreate.next(Rn.id)},1e3)}}))}ngOnChanges(b){if(b.cvcSourceType){const a=b.cvcSourceType.currentValue;this.sourceType$.next(a),this.model={...this.model,sourceType:a}}if(b.cvcCitationId){const a=b.cvcCitationId.currentValue;this.citationId$.next(a),this.model={...this.model,citationId:a}}}static#e=this.\u0275fac=function(a){return new(a||B8)(e.rXU(xn.RMT),e.rXU(xn.Z3e),e.rXU(na.N),e.rXU(is.Ic),e.rXU(e.gRc))};static#t=this.\u0275cmp=e.VBU({type:B8,selectors:[["cvc-source-quick-add"]],inputs:{cvcSourceType:"cvcSourceType",cvcCitationId:"cvcCitationId"},outputs:{cvcOnCreate:"cvcOnCreate"},features:[e.OA$],decls:10,vars:11,consts:[["success",""],[4,"ngrxLet"],["entityType","Source",3,"mutationState","successMessage"],["nz-form","","nzLayout","horizontal",3,"ngSubmit","formGroup"],[3,"nzGutter"],["nzSpan","24"],[3,"modelChange","form","fields","model","options"],["nz-button","","nzType","primary","nzBlock","",3,"disabled",4,"ngrxLet"],["nz-icon","",3,"nzType",4,"ngIf"],["nz-icon","",3,"nzType"],["nz-button","","nzType","primary","nzBlock","",3,"disabled"]],template:function(a,h){if(1&a){const _=e.RV6();e.DNE(0,v,5,2,"ng-container",1),e.j41(1,"cvc-form-submission-status-display",2),e.DNE(2,C,1,1,"ng-template",null,0,e.C5r),e.j41(4,"form",3),e.bIt("ngSubmit",function(){return e.eBV(_),e.Njj(h.onSubmit$.next(h.model))}),e.j41(5,"nz-row",4)(6,"nz-col",5)(7,"formly-form",6),e.bIt("modelChange",function(ft){return e.eBV(_),e.Njj(h.model=ft)}),e.k0s()(),e.j41(8,"nz-col",5),e.DNE(9,O,2,1,"button",7),e.k0s()()()()}if(2&a){const _=e.sdS(3);e.Y8G("ngrxLet",h.formMessageDisplay$),e.R7$(),e.Y8G("mutationState",h.mutationState)("successMessage",_),e.R7$(3),e.Y8G("formGroup",h.form),e.R7$(),e.Y8G("nzGutter",e.lJ4(10,d)),e.R7$(2),e.Y8G("form",h.form)("fields",h.fields)("model",h.model)("options",h.options),e.R7$(2),e.Y8G("ngrxLet",h.checkResult$)}},dependencies:[M.bT,t.qT,t.cb,t.j4,Ci.Nj,g.aF,Kn.aO,di.c,ho.p,Z.Dn,L.Uq,L.e,G.CA,fs.G],changeDetection:0})};Q=(0,vi.Cg)([(0,pn.d)()],Q);const Me=["optionTemplates"],xe=()=>[6,6];function ot(u,b){if(1&u){const a=e.RV6();e.j41(0,"nz-col",10)(1,"nz-select",11),e.nI1(2,"ngrxPush"),e.bIt("ngModelChange",function(_){e.eBV(a);const ee=e.XpG();return e.Njj(ee.sourceType$.next(_))}),e.nrm(3,"nz-option",12)(4,"nz-option",13)(5,"nz-option",14),e.k0s()()}if(2&u){const a=e.XpG();e.R7$(),e.Y8G("nzOptionHeightPx",28)("ngModel",e.bMT(2,2,a.sourceType$))}}function yt(u,b){1&u&&(e.j41(0,"div"),e.EFF(1,"PMID:"),e.k0s())}function Dt(u,b){1&u&&(e.j41(0,"div"),e.EFF(1,"ID:"),e.k0s())}function Bt(u,b){1&u&&(e.j41(0,"div"),e.EFF(1,"doi.org/"),e.k0s())}function Ht(u,b){if(1&u&&(e.j41(0,"nz-col",15),e.qex(1,16),e.nI1(2,"ngrxPush"),e.DNE(3,yt,2,0,"div",17)(4,Dt,2,0,"div",17)(5,Bt,2,0,"div",17),e.bVm(),e.k0s()),2&u){const a=e.XpG();e.R7$(),e.Y8G("ngSwitch",e.bMT(2,4,a.sourceType$)),e.R7$(2),e.Y8G("ngSwitchCase","PUBMED"),e.R7$(),e.Y8G("ngSwitchCase","ASCO"),e.R7$(),e.Y8G("ngSwitchCase","ASH")}}function Xt(u,b){if(1&u&&(e.nrm(0,"cvc-entity-tag",19),e.j41(1,"span",20),e.EFF(2," ID: "),e.nrm(3,"span",21),e.nI1(4,"highlightTypeahead"),e.k0s()),2&u){const a=e.XpG().$implicit,h=e.XpG().ngrxLet;e.Y8G("cvcDisableLink",!0)("cvcCacheId",a.__typename+":"+a.id)("cvcEmphasize",h),e.R7$(3),e.Y8G("innerHtml",e.i5U(4,4,a.citationId.toString(),h),e.npT)}}function Zt(u,b){1&u&&(e.qex(0),e.DNE(1,Xt,5,7,"ng-template",null,3,e.C5r),e.bVm())}function vn(u,b){if(1&u&&(e.qex(0),e.DNE(1,Zt,3,0,"ng-container",18),e.nI1(2,"ngrxPush"),e.bVm()),2&u){const a=e.XpG();e.R7$(),e.Y8G("ngForOf",e.bMT(2,1,a.result$))}}function Sn(u,b){if(1&u){const a=e.RV6();e.j41(0,"div",22)(1,"cvc-entity-tag",23),e.bIt("cvcOnClose",function(){const _=e.eBV(a).$implicit,ee=e.XpG();return e.Njj(ee.onTagClose$.next(_.nzValue))}),e.k0s()()}if(2&u){const a=b.$implicit,h=e.XpG();e.R7$(),e.Y8G("cvcCacheId","Source:"+a.nzValue)("cvcContext",h.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",h.props.isMultiSelect?"default":"closeable")}}function ai(u,b){if(1&u){const a=e.RV6();e.j41(0,"cvc-source-quick-add",24),e.bIt("cvcOnCreate",function(_){e.eBV(a);const ee=e.XpG();return e.Njj(ee.onPopulate$.next(_))}),e.k0s()}if(2&u){const a=b.model;e.Y8G("cvcCitationId",a.citationId)("cvcSourceType",a.sourceType)}}function an(u,b){1&u&&(e.j41(0,"button",25),e.EFF(1,"Add a New Source"),e.k0s())}const ti=qi(Mi(),$o());let Jn=(()=>{class u extends ti{constructor(a,h,_){super(),this.taq=a,this.tq=h,this.changeDetectorRef=_,this.onModel$=new Un.c,this.defaultSourceType=xn.tUL.Pubmed,this.defaultOptions={props:{entityName:{singular:"Source",plural:"Sources"},isMultiSelect:!1,minSearchStrLength:2,tooltip:"PubMed, ASCO, or ASH Abstract Source(s) that support items, statements or descriptions.",placeholders:{default:"Search PubMed, ASCO, and ASH Sources",contextualFn:ee=>`Search ${ee} Sources`},description:"Select Source type, then enter its ID to search Sources"}},this.sourceType$=new dn.t(this.defaultSourceType),this.sourceTypeName$=new dn.t((0,T.A)(this.defaultSourceType)),this.placeholder$=new dn.t(this.defaultOptions.props.placeholders.contextualFn((0,T.A)(this.defaultSourceType))),this.showTypeSelect$=new Un.c}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:this.sourceType$,typeaheadParamName$:this.sourceTypeName$||void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent,minSearchStrLength:this.field.props.minSearchStrLength}),this.initialDescription=this.props.description,this.showTypeSelect$=this.onValueChange$.pipe((0,me.T)(a=>!!(!a||a&&Array.isArray(a)))),this.sourceType$.pipe((0,pn.s)(this)).subscribe(a=>{const h=(0,T.A)(a);this.sourceTypeName$.next(h),this.placeholder$.next(this.props.placeholders.contextualFn(h))}),this.onModel$=(0,po.z)([this.sourceType$,this.onSearch$]).pipe((0,me.T)(([a,h])=>({citationId:h,sourceType:a}))),this.onValueChange$.pipe((0,pn.s)(this)).subscribe(a=>{this.props.description=a?void 0:this.initialDescription})}getTypeaheadVarsFn(a,h=xn.tUL.Pubmed){return{partialCitationId:a,sourceType:h}}getTypeaheadResultsFn(a){return a.data.sourceTypeahead}getTagQueryVarsFn(a){return{id:a}}getTagQueryResultsFn(a){return a.data.source}getSelectedItemOptionFn(a){return{value:a.id,label:a.name}}getSelectOptionsFn(a,h){return a.map((_,ee)=>({label:h.get(ee)||_.name,value:_.id}))}static#e=this.\u0275fac=function(h){return new(h||u)(e.rXU(xn.txm),e.rXU(xn.mww),e.rXU(e.gRc))};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["cvc-source-select"]],viewQuery:function(h,_){if(1&h&&e.GBs(Me,5,e.C4Q),2&h){let ee;e.mGM(ee=e.lsd())&&(_.optionTemplates=ee)}},features:[e.Vt3],decls:21,vars:39,consts:[["selectedTemplate",""],["addSource",""],["addSourceBtn",""],["optionTemplates",""],[1,"select-layout",3,"nzGutter"],["nzFlex","80px",4,"ngIf"],["nzFlex","60px","class","prefix",4,"ngIf"],["nzFlex","auto"],[3,"cvcOnSearch","cvcOnModelChange","cvcMinSearchStrLength","cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcParamName","cvcShowError","cvcDisabled","cvcLoading","cvcAddEntity","cvcAddEntityModel","cvcSelectOpen"],[4,"ngrxLet"],["nzFlex","80px"],["nzSize","default","nzBlock","",3,"ngModelChange","nzOptionHeightPx","ngModel"],["nzValue","PUBMED","nzLabel","PubMed"],["nzValue","ASCO","nzLabel","ASCO"],["nzValue","ASH","nzLabel","ASH"],["nzFlex","60px",1,"prefix"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngFor","ngForOf"],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcOnClose","cvcCacheId","cvcContext","cvcMode"],[3,"cvcOnCreate","cvcCitationId","cvcSourceType"],["type","button"]],template:function(h,_){if(1&h){const ee=e.RV6();e.j41(0,"nz-row",4),e.DNE(1,ot,6,4,"nz-col",5),e.nI1(2,"ngrxPush"),e.DNE(3,Ht,6,6,"nz-col",6),e.nI1(4,"ngrxPush"),e.j41(5,"nz-col",7)(6,"cvc-entity-select",8),e.nI1(7,"ngrxPush"),e.nI1(8,"ngrxPush"),e.nI1(9,"ngrxPush"),e.nI1(10,"ngrxPush"),e.nI1(11,"ngrxPush"),e.nI1(12,"ngrxPush"),e.nI1(13,"ngrxPush"),e.bIt("cvcOnSearch",function(nn){return e.eBV(ee),e.Njj(_.onSearch$.next(nn))})("cvcOnModelChange",function(nn){return e.eBV(ee),e.Njj(_.props.change&&_.props.change(_.field,nn))}),e.k0s()()(),e.DNE(14,vn,3,3,"ng-container",9)(15,Sn,2,3,"ng-template",null,0,e.C5r)(17,ai,1,2,"ng-template",null,1,e.C5r)(19,an,2,0,"ng-template",null,2,e.C5r)}if(2&h){const ee=e.sdS(16),ft=e.sdS(18);e.Y8G("nzGutter",e.lJ4(38,xe)),e.R7$(),e.Y8G("ngIf",e.bMT(2,20,_.showTypeSelect$)),e.R7$(2),e.Y8G("ngIf",e.bMT(4,22,_.showTypeSelect$)),e.R7$(3),e.Y8G("cvcMinSearchStrLength",_.props.minSearchStrLength)("cvcSelectMode",_.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",ee)("cvcFormControl",_.formControl)("cvcFormlyAttributes",_.field)("cvcEntityName",_.props.entityName)("cvcPlaceholder",e.bMT(7,24,_.placeholder$))("cvcResults",e.bMT(8,26,_.result$))("cvcOptions",e.bMT(9,28,_.selectOption$))("cvcParamName",e.bMT(10,30,_.sourceTypeName$))("cvcShowError",_.showError)("cvcDisabled",_.props.disabled)("cvcLoading",e.bMT(11,32,_.isLoading$))("cvcAddEntity",ft)("cvcAddEntityModel",e.bMT(12,34,_.onModel$))("cvcSelectOpen",e.bMT(13,36,_.selectOpen$)),e.R7$(8),e.Y8G("ngrxLet",_.onSearch$)}},dependencies:[M.Sq,M.bT,M.ux,M.e1,t.BC,t.vS,Ci.Nj,Qe.ld,Qe.WI,L.Uq,L.e,qe.Di,Wt,tn.b,Q,Ci.L9,Xr.M],styles:[".prefix[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{text-align:right;line-height:28px;color:#999}.select-layout[_ngcontent-%COMP%]{flex-wrap:nowrap}"],changeDetection:0})}return u})();const bi={types:[{name:"source-select",wrappers:["form-field"],component:Jn,defaultOptions:{props:{label:"Source"}}},{name:"source-multi-select",wrappers:["form-field"],component:Jn,defaultOptions:{props:{label:"Sources",isMultiSelect:!0}}}]};let Bi=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,t.YN,t.X1,g.qy.forChild(bi),Cn.$,Kn.Zw,ue.Sw,Qe.DH,gi.MC,oi.U6,Z.Y3,F.j,L.f3,hn.Qt,on.pc,G.PQ,rt.jl,qe.kT,Zn.g,Gn.T,Go.P,En,jn,ge.i,Ft._]})}return u})();function nr(u,b){if(1&u&&e.nrm(0,"nz-option",7),2&u){const a=b.$implicit;e.Y8G("nzLabel",a)("nzValue",a)("nzHide",!0)}}function vr(u,b){if(1&u){const a=e.RV6();e.qex(0),e.j41(1,"nz-select",5),e.bIt("ngModelChange",function(_){e.eBV(a);const ee=e.XpG();return e.Njj(ee.onValueChange$.next(_))}),e.DNE(2,nr,1,3,"nz-option",6),e.k0s(),e.bVm()}if(2&u){const a=e.XpG();e.R7$(),e.Y8G("formControl",a.formControl)("formlyAttributes",a.field),e.R7$(),e.Y8G("ngForOf",a.formControl.value)}}function uc(u,b){if(1&u){const a=e.RV6();e.j41(0,"nz-tag",10),e.bIt("nzOnClose",function(_){e.eBV(a);const ee=e.XpG(2);return e.Njj(ee.onTagClose$.next(_))}),e.EFF(1),e.k0s()}if(2&u){const a=b.ngIf;e.Y8G("nzMode","closeable"),e.R7$(),e.SpI(" ",a," ")}}function Vr(u,b){if(1&u){const a=e.RV6();e.j41(0,"input",12,2),e.bIt("keydown.enter",function(){e.eBV(a);const _=e.sdS(1);return e.Njj(_.blur())}),e.k0s()}if(2&u){const a=e.XpG(3);e.Y8G("formControl",a.formControl)("type",a.props.type||"text")("formlyAttributes",a.field)}}function Fa(u,b){if(1&u){const a=e.RV6();e.j41(0,"nz-input-number",13,3),e.bIt("keydown.enter",function(){e.eBV(a);const _=e.sdS(1);return e.Njj(_.blur())}),e.k0s()}if(2&u){const a=e.XpG(3);e.Y8G("formControl",a.formControl)("formlyAttributes",a.field)}}function Pd(u,b){if(1&u&&(e.qex(0),e.DNE(1,Vr,2,3,"input",11)(2,Fa,2,2,"ng-template",null,1,e.C5r),e.bVm()),2&u){const a=e.sdS(3),h=e.XpG(2);e.R7$(),e.Y8G("ngIf","number"!==h.props.type)("ngIfElse",a)}}function ph(u,b){if(1&u&&(e.DNE(0,uc,2,2,"nz-tag",8),e.nI1(1,"ngrxPush"),e.DNE(2,Pd,4,2,"ng-container",9),e.nI1(3,"ngrxPush")),2&u){const a=e.XpG();e.Y8G("ngIf",e.bMT(1,2,a.tagLabel$)),e.R7$(2),e.Y8G("ngIf",!e.bMT(3,4,a.tagLabel$))}}const Di=qi(Mi(),ba);let _i=(()=>{class u extends Di{constructor(){super(),this.defaultOptions={props:{label:"Enter value"}}}ngAfterViewInit(){this.configureBaseField(),this.configureStringTagField()}static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["cvc-tag-input"]],features:[e.Vt3],decls:3,vars:2,consts:[["singleInputField",""],["numberTmp",""],["baseInputTxt",""],["baseInputNum",""],[4,"ngIf","ngIfElse"],["nzMode","tags","nzPlaceHolder","Please select","nzAllowClear","","nzDropdownClassName","hide-dropdown",3,"ngModelChange","formControl","formlyAttributes"],[3,"nzLabel","nzValue","nzHide",4,"ngFor","ngForOf"],[3,"nzLabel","nzValue","nzHide"],[3,"nzMode","nzOnClose",4,"ngIf"],[4,"ngIf"],[3,"nzOnClose","nzMode"],["nz-input","",3,"formControl","type","formlyAttributes","keydown.enter",4,"ngIf","ngIfElse"],["nz-input","",3,"keydown.enter","formControl","type","formlyAttributes"],[3,"keydown.enter","formControl","formlyAttributes"]],template:function(h,_){if(1&h&&e.DNE(0,vr,3,3,"ng-container",4)(1,ph,4,6,"ng-template",null,0,e.C5r),2&h){const ee=e.sdS(2);e.Y8G("ngIf",_.props.isMultiInput)("ngIfElse",ee)}},dependencies:[M.Sq,M.bT,t.me,t.BC,t.l_,g.ch,F.Sy,Qe.ld,Qe.WI,Gn.s,Ci.L9],changeDetection:0})}return u})();const Ui={types:[{name:"tag-input",wrappers:["form-field"],component:_i,defaultOptions:{modelOptions:{updateOn:"blur"}}},{name:"tag-multi-input",wrappers:["form-field"],component:_i,defaultOptions:{props:{isMultiInput:!0}}}]};let zo=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,t.X1,g.qy.forChild(Ui),G.PQ,F.j,Qe.DH,Gn.T,zi]})}return u})();const zr=()=>[0,0];function dc(u,b){1&u&&e.nrm(0,"span",7)}function ca(u,b){1&u&&e.nrm(0,"span",8)}const dr={name:void 0};let Fo=class $8{set cvcSearchString(b){b&&this.searchString$.next(b)}constructor(b,a){this.query=b,this.errors=a,this.cvcOnCreate=new e.bkB,this.model=dr,this.form=new t.J3({}),this.options={},this.onSubmit$=new V.B,this.searchString$=new dn.t(void 0),this.queryMutator=new Ar.E(this.errors),this.isSubmitting$=new dn.t(!1),this.submitSuccess$=new dn.t(!1),this.submitError$=new dn.t([]),this.addTherapyMutator=new Ar.E(this.errors),this.fields=[{key:"name",props:{hidden:!0,required:!0}}],this.searchString$.pipe((0,pn.s)(this)).subscribe(h=>{this.model.name=h}),this.onSubmit$.pipe((0,pn.s)(this)).subscribe(h=>{this.submitTherapy(h)})}submitTherapy(b){if(!b.name)return void console.error("therapy-quick-add form submitTherapy requires model with valid name.");let a=this.addTherapyMutator.mutate(this.query,{name:b.name},{},h=>{console.log("therapy-quick-add submit data callback",h),h.addTherapy&&this.cvcOnCreate.next(h.addTherapy.therapy.id)});a.submitSuccess$.pipe((0,pn.s)(this)).subscribe(h=>{console.log("therapy-quick-add submitSuccess$",h),this.submitSuccess$.next(h)}),a.submitError$.pipe((0,pn.s)(this)).subscribe(h=>{console.log("therapy-quick-add submitError$",h),this.submitError$.next(h)}),a.isSubmitting$.pipe((0,pn.s)(this)).subscribe(h=>{this.isSubmitting$.next(h)})}static#e=this.\u0275fac=function(a){return new(a||$8)(e.rXU(xn.G4Q),e.rXU(na.N))};static#t=this.\u0275cmp=e.VBU({type:$8,selectors:[["cvc-therapy-quick-add-form"]],inputs:{cvcSearchString:"cvcSearchString"},outputs:{cvcOnCreate:"cvcOnCreate"},decls:14,vars:17,consts:[[3,"ngSubmit","formGroup"],[3,"nzGutter"],["nzSpan","24"],[3,"modelChange","form","fields","model","options"],["nz-button","","nzType","primary","nzBlock","",3,"disabled"],["nz-icon","","nzType","plus-circle","nzTheme","outline",4,"ngIf"],["nz-icon","","nzType","loading","nzTheme","outline",4,"ngIf"],["nz-icon","","nzType","plus-circle","nzTheme","outline"],["nz-icon","","nzType","loading","nzTheme","outline"]],template:function(a,h){1&a&&(e.j41(0,"form",0),e.bIt("ngSubmit",function(){return h.onSubmit$.next(h.model)}),e.j41(1,"nz-row",1)(2,"nz-col",2)(3,"formly-form",3),e.bIt("modelChange",function(ee){return h.model=ee}),e.k0s()(),e.j41(4,"nz-col",2)(5,"button",4),e.DNE(6,dc,1,0,"span",5),e.nI1(7,"ngrxPush"),e.DNE(8,ca,1,0,"span",6),e.nI1(9,"ngrxPush"),e.EFF(10," Create Therapy\xa0"),e.j41(11,"i"),e.EFF(12),e.nI1(13,"ngrxPush"),e.k0s()()()()()),2&a&&(e.Y8G("formGroup",h.form),e.R7$(),e.Y8G("nzGutter",e.lJ4(16,zr)),e.R7$(2),e.Y8G("form",h.form)("fields",h.fields)("model",h.model)("options",h.options),e.R7$(2),e.Y8G("disabled",!h.form.valid),e.R7$(),e.Y8G("ngIf",!e.bMT(7,10,h.isSubmitting$)),e.R7$(2),e.Y8G("ngIf",e.bMT(9,12,h.isSubmitting$)),e.R7$(4),e.JRh(e.bMT(13,14,h.searchString$)))},dependencies:[M.bT,t.qT,t.cb,t.j4,g.aF,Kn.aO,di.c,ho.p,Z.Dn,L.Uq,L.e,Ci.L9],encapsulation:2,changeDetection:0})};Fo=(0,vi.Cg)([(0,pn.d)()],Fo);const Fd=["optionTemplates"];function fh(u,b){if(1&u&&(e.qex(0),e.j41(1,"strong"),e.EFF(2,"NCIt Code: "),e.k0s(),e.nrm(3,"span",9),e.nI1(4,"highlightTypeahead"),e.EFF(5,"\xa0 "),e.bVm()),2&u){const a=e.XpG(2).$implicit,h=e.XpG().ngrxLet;e.R7$(3),e.Y8G("innerHtml",e.i5U(4,1,a.ncitId,h),e.npT)}}function ss(u,b){if(1&u&&(e.qex(0),e.j41(1,"strong"),e.EFF(2,"Aliases: "),e.k0s(),e.j41(3,"em"),e.nrm(4,"span",10),e.nI1(5,"highlightTypeahead"),e.k0s(),e.bVm()),2&u){const a=e.XpG(2).$implicit,h=e.XpG().ngrxLet;e.R7$(4),e.Y8G("nzTooltipTitle",a.therapyAliases.join(", "))("innerHtml",e.i5U(5,2,a.therapyAliases.join(", "),h),e.npT)}}function hc(u,b){if(1&u&&(e.nrm(0,"cvc-entity-tag",6),e.j41(1,"span",7),e.DNE(2,fh,6,4,"ng-container",8)(3,ss,6,5,"ng-container",8),e.k0s()),2&u){const a=e.XpG().$implicit,h=e.XpG().ngrxLet;e.Y8G("cvcDisableLink",!0)("cvcCacheId",a.__typename+":"+a.id)("cvcEmphasize",h),e.R7$(2),e.Y8G("ngIf",a.ncitId),e.R7$(),e.Y8G("ngIf",a.therapyAliases.length>0)}}function la(u,b){1&u&&(e.qex(0),e.DNE(1,hc,4,5,"ng-template",null,2,e.C5r),e.bVm())}function Lu(u,b){if(1&u&&(e.qex(0),e.DNE(1,la,3,0,"ng-container",5),e.nI1(2,"ngrxPush"),e.bVm()),2&u){const a=e.XpG();e.R7$(),e.Y8G("ngForOf",e.bMT(2,1,a.result$))}}function Ad(u,b){if(1&u){const a=e.RV6();e.j41(0,"div",11)(1,"cvc-entity-tag",12),e.bIt("cvcOnClose",function(){const _=e.eBV(a).$implicit,ee=e.XpG();return e.Njj(ee.onTagClose$.next(_.nzValue))}),e.k0s()()}if(2&u){const a=b.$implicit,h=e.XpG();e.R7$(),e.Y8G("cvcCacheId","Therapy:"+a.nzValue)("cvcContext",h.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",h.props.isMultiSelect?"default":"closeable")}}function op(u,b){if(1&u){const a=e.RV6();e.j41(0,"cvc-therapy-quick-add-form",13),e.bIt("cvcOnCreate",function(_){e.eBV(a);const ee=e.XpG();return e.Njj(ee.onPopulate$.next(_))}),e.k0s()}2&u&&e.Y8G("cvcSearchString",b.$implicit)}const F4=qi(Mi(),$o());let rp=(()=>{class u extends F4{constructor(a,h,_){super(),this.taq=a,this.tq=h,this.changeDetectorRef=_,this.defaultOptions={props:{entityName:{singular:"Therapy",plural:"Therapies"},isMultiSelect:!1,requireType:!0,tooltip:"Therapy or therapy combination which interacts with the specified variant",placeholder:"Search Therapies",requireTypePromptFn:(ee,ft)=>`Select an ${ee} Type to search associated Therapies`}},this.placeholder$=new dn.t(void 0)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.configurePlaceholders()}configureStateConnections(){if(this.state&&(this.stateEntityName=this.state.entityName,this.state.requires.requiresTherapy$?this.onRequiresTherapy$=this.state.requires.requiresTherapy$:console.warn(`${this.field.id} field's form provides a state, but could not find requiresTherapy$ subject to attach.`),this.props.requireType)){const a=`${this.stateEntityName.toLowerCase()}Type$`;this.state.fields[a]?this.onEntityType$=this.state.fields[a]:console.error(`${this.field.id} requireType is true, however form state does not provide Subject ${a}.`)}}configurePlaceholders(){this.placeholder$.next(this.props.placeholder),this.onRequiresTherapy$&&this.onEntityType$&&(0,po.z)([this.onRequiresTherapy$,this.onEntityType$]).pipe((0,J.F)(),(0,pn.s)(this)).subscribe(([a,h])=>{!a&&h?(this.props.required=!1,this.props.disabled=!0,this.props.description=`${(0,ro.u)(h)} ${this.state.entityName} does not include associated therapies`,this.props.extraType="prompt",this.resetField(),this.cdr.markForCheck()):this.props.requireType&&!h?(this.props.required=!1,this.props.disabled=!0,this.props.description=this.props.requireTypePromptFn(this.state.entityName,this.props.isMultiSelect),this.props.extraType="prompt"):a?(this.props.required=!0,this.props.disabled=!1,this.props.description=void 0,this.props.extraType=void 0):(!a&&this.formControl.value||this.props.requireType&&!h&&this.formControl.value)&&(this.resetField(),console.log("HERE2"))})}getTypeaheadVarsFn(a){return{name:a}}getTypeaheadResultsFn(a){return a.data.therapyTypeahead}getTagQueryVarsFn(a){return{id:a}}getTagQueryResultsFn(a){return a.data.therapy}getSelectedItemOptionFn(a){return{value:a.id,label:a.name}}getSelectOptionsFn(a,h){return a.map((_,ee)=>({label:h.get(ee)||_.name,value:_.id}))}static#e=this.\u0275fac=function(h){return new(h||u)(e.rXU(xn.f9r),e.rXU(xn.a3n),e.rXU(e.gRc))};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["cvc-therapy-select"]],viewQuery:function(h,_){if(1&h&&e.GBs(Fd,5,e.C4Q),2&h){let ee;e.mGM(ee=e.lsd())&&(_.optionTemplates=ee)}},features:[e.Vt3],decls:12,vars:26,consts:[["selectedTemplate",""],["addTherapy",""],["optionTemplates",""],[3,"cvcOnSearch","cvcOnOpenChange","cvcOnModelChange","cvcAddEntity","cvcCustomTemplate","cvcDisabled","cvcEntityName","cvcFormControl","cvcFormlyAttributes","cvcLoading","cvcOptions","cvcPlaceholder","cvcResults","cvcSelectMode","cvcShowError","cvcSelectOpen"],[4,"ngrxLet"],[4,"ngFor","ngForOf"],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf"],[3,"innerHtml"],["nz-typography","","nzType","secondary","nz-tooltip","",3,"nzTooltipTitle","innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcOnClose","cvcCacheId","cvcContext","cvcMode"],[3,"cvcOnCreate","cvcSearchString"]],template:function(h,_){if(1&h){const ee=e.RV6();e.j41(0,"cvc-entity-select",3),e.nI1(1,"ngrxPush"),e.nI1(2,"ngrxPush"),e.nI1(3,"ngrxPush"),e.nI1(4,"ngrxPush"),e.nI1(5,"ngrxPush"),e.nI1(6,"ngrxPush"),e.bIt("cvcOnSearch",function(nn){return e.eBV(ee),e.Njj(_.onSearch$.next(nn))})("cvcOnOpenChange",function(nn){return e.eBV(ee),e.Njj(_.onOpenChange$?_.onOpenChange$.next(nn):null)})("cvcOnModelChange",function(nn){return e.eBV(ee),e.Njj(_.props.change&&_.props.change(_.field,nn))}),e.k0s(),e.DNE(7,Lu,3,3,"ng-container",4)(8,Ad,2,3,"ng-template",null,0,e.C5r)(10,op,1,1,"ng-template",null,1,e.C5r)}if(2&h){const ee=e.sdS(9),ft=e.sdS(11);e.Y8G("cvcAddEntity",ft)("cvcCustomTemplate",ee)("cvcDisabled",_.onRequiresTherapy$&&!e.bMT(1,14,_.onRequiresTherapy$))("cvcEntityName",_.props.entityName)("cvcFormControl",_.formControl)("cvcFormlyAttributes",_.field)("cvcLoading",e.bMT(2,16,_.isLoading$))("cvcOptions",e.bMT(3,18,_.selectOption$))("cvcPlaceholder",e.bMT(4,20,_.placeholder$))("cvcResults",e.bMT(5,22,_.result$))("cvcSelectMode",_.props.isMultiSelect?"multiple":"default")("cvcShowError",_.showError)("cvcSelectOpen",e.bMT(6,24,_.selectOpen$)),e.R7$(7),e.Y8G("ngrxLet",_.onSearch$)}},dependencies:[M.Sq,M.bT,Ci.Nj,hn.LH,qe.Di,Wt,tn.b,Fo,Ci.L9,Xr.M],changeDetection:0})}return u})();const A4={types:[{name:"therapy-select",wrappers:["form-field"],component:rp,defaultOptions:{props:{label:"Therapy"}}},{name:"therapy-multi-select",wrappers:["form-field"],component:rp,defaultOptions:{props:{label:"Therapies",isMultiSelect:!0}}}]};let R4=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,t.X1,g.qy.forChild(A4),Cn.$,Kn.Zw,Qe.DH,gi.MC,oi.U6,Z.Y3,F.j,L.f3,hn.Qt,on.pc,G.PQ,rt.jl,qe.kT,Gn.T,En,jn,ge.i,Ft._]})}return u})();const ap={isDefaultCol:u=>"default"===u.type,isSelectCol:u=>"select"===u.type,isEntityTagCol:u=>"entity-tag"===u.type,isEnumTagCol:u=>"enum-tag"===u.type,isTextTagCol:u=>"text-tag"===u.type},Kh=u=>void 0!==u.sort,Xh=u=>void 0!==u.filter,$4={diseases:xn.wOP.DiseaseName,feature:xn.wOP.FeatureName,therapies:xn.wOP.TherapyName,variant:xn.wOP.VariantName},lp={diseases:"diseaseName",therapies:"therapyName",variant:"variantName",feature:"featureName",aliases:"variantAlias"},H4=["selected","id"];class up{constructor(){this.sortStreams=[],this.filterStreams=[],this.config=this.configureColumnStreams([{key:"selected",label:"Select",type:"select",width:"25px",align:"center",fixedLeft:!0,checkbox:{th:{showCheckbox:!1},td:{showCheckbox:!0}}},{key:"id",label:"ID",hidden:!0,type:"hidden",width:"0px"},{key:"variant",label:"Variant",type:"entity-tag",width:"215px",context:"variant",fixedLeft:!0,showStatus:!0,tag:{fullWidth:!0,truncateLabel:"200px"},sort:{default:"ascend"},filter:{inputType:"default",options:[{key:"Filter Variant Name",value:null}]}},{key:"aliases",label:"Aliases",type:"default",width:"150px",objectKey:"name",sort:{},filter:{inputType:"default",options:[{key:"Filter Aliases",value:null}]}},{key:"feature",label:"Feature",type:"entity-tag",width:"135px",tag:{truncateLabel:"125px"},sort:{},filter:{inputType:"default",options:[{key:"Filter Feature Name",value:null}]}},{key:"diseases",label:"Diseases",type:"entity-tag",width:"250px",sort:{},tag:{maxTags:1,truncateLabel:"175px"},filter:{inputType:"default",typename:"Therapy",options:[{key:"Filter Therapy Names",value:null}]}},{key:"therapies",label:"Therapies",type:"entity-tag",width:"275px",sort:{},tag:{maxTags:2,truncateLabel:"150px"},filter:{inputType:"default",typename:"Therapy",options:[{key:"Filter Therapy Names",value:null}]}}])}get(){return this.config}getSortStreams(){return this.sortStreams}getFilterStreams(){return this.filterStreams}getAttributeFilters(b,a){return b.getValues().map(_=>({text:(0,ro.u)(_),value:_,byDefault:a===_}))}configureColumnStreams(b){return b.forEach(a=>{const h=a;if(Kh(h)&&(h.sort.changes=new dn.t({key:h.key,value:h.sort.default??null}),this.sortStreams.push(h.sort.changes)),Xh(h)){const _=h.filter.options.find(ee=>ee.byDefault)?.value;h.filter.changes=new dn.t({key:h.key,value:_??null}),this.filterStreams.push(h.filter.changes)}}),b}}let Qh=class H8{set cvcTableScrollerToIndex(b){void 0!==b&&this.scrollToIndex(b)}set cvcTableScrollerToOffset(b){void 0!==b&&this.scrollToIndex(b)}constructor(b){this.host=b,this.cvcTableScrollerOnScroll=new e.bkB,this.cvcTableScrollerOnFetch=new e.bkB,this.cvcTableScrollerTargetHeight=140,this.cvcTableScrollerFetchCount=50,this.onLoadThrottleTime=500,this.onScrollThrottleTime=250,this.onScrollDebounceTime=300}ngAfterViewInit(){if(!this.host||!this.host.cdkVirtualScrollViewport)throw new Error("cvcTableScroller directive could not obtain reference to host cdkVirtualScrollViewport.");this.viewport=this.host.cdkVirtualScrollViewport,this.scrolled$=this.viewport.elementScrolled(),this.rendered$=this.viewport.renderedRangeStream,this.rendered$.pipe((0,k.$)()).subscribe(()=>this.viewport.checkViewportSize()),this.scrolled$.pipe((0,Sr.c)(this.onScrollThrottleTime,es.E,{leading:!0,trailing:!0}),(0,On.M)(b=>this.cvcTableScrollerOnScroll.next("scroll")),(0,Ps.B)(this.onScrollDebounceTime),(0,pn.s)(this)).subscribe(b=>{this.cvcTableScrollerOnScroll.next("stop")}),this.scrolled$.pipe((0,me.T)(b=>this.viewport.measureScrollOffset("bottom")),(0,le.J)(),(0,qt.p)(([b,a])=>a<b&&a<this.cvcTableScrollerTargetHeight),(0,Sr.c)(this.onLoadThrottleTime),(0,pn.s)(this)).subscribe(b=>{this.cvcTableScrollerOnScroll.next("bottom");try{this.loadMore(this.cvcTableScrollerPageInfo)}catch(a){console.error(a)}})}loadMore(b){const a=this.cvcTableScrollerQueryRef;if(!b&&a)throw new Error("table-scroll directive requires PageInfo to use provided QueryRef.");if(b&&!a)throw new Error("table-scroll directive requires valid QueryRef when PageInfo provided.");if(b&&a){const[h,_,ee]=[this.cvcTableScrollerFetchCount,b.hasNextPage,b.endCursor];if(!h||!ee)throw new Error("table-scroll PageInfo invalid.");if(!_)return;this.cvcTableScrollerOnFetch.next({first:h,after:ee})}}scrollToIndex(b){const[a,h]=[this.host,this.host.cdkVirtualScrollViewport];if(!a||!h)throw new Error("table-scroll scrollToIndex() cannot find host viewport.");h.scrollToIndex(b)}scrollToOffset(b){const[a,h]=[this.host,this.host.cdkVirtualScrollViewport];if(!a||!h)throw new Error("table-scroll scrollToOffset() cannot find host viewport.");h.scrollToOffset(b)}static#e=this.\u0275fac=function(a){return new(a||H8)(e.rXU(no.CP))};static#t=this.\u0275dir=e.FsC({type:H8,selectors:[["","cvcTableScroller",""]],inputs:{cvcTableScrollerTargetHeight:"cvcTableScrollerTargetHeight",cvcTableScrollerQueryRef:"cvcTableScrollerQueryRef",cvcTableScrollerPageInfo:"cvcTableScrollerPageInfo",cvcTableScrollerFetchCount:"cvcTableScrollerFetchCount",cvcTableScrollerToIndex:"cvcTableScrollerToIndex",cvcTableScrollerToOffset:"cvcTableScrollerToOffset"},outputs:{cvcTableScrollerOnScroll:"cvcTableScrollerOnScroll",cvcTableScrollerOnFetch:"cvcTableScrollerOnFetch"}})};function j4(u,b){1&u&&e.nrm(0,"span",8)}function Uf(u,b){if(1&u){const a=e.RV6();e.j41(0,"span",9),e.bIt("click",function(){e.eBV(a),e.XpG(2);const _=e.sdS(3),ee=e.XpG();return _.value="",e.Njj(ee.cvcModelChange.next(null))}),e.k0s()}}function U4(u,b){if(1&u&&e.DNE(0,j4,1,0,"span",6)(1,Uf,1,0,"span",7),2&u){e.XpG();const a=e.sdS(3);e.Y8G("ngIf",!a.value),e.R7$(),e.Y8G("ngIf",a.value)}}function dp(u,b){if(1&u){const a=e.RV6();e.qex(0),e.j41(1,"nz-input-group",4)(2,"input",5,1),e.bIt("ngModelChange",function(_){e.eBV(a);const ee=e.XpG();return e.Njj(ee.cvcModelChange.next(_))}),e.k0s()(),e.DNE(4,U4,2,2,"ng-template",null,2,e.C5r),e.bVm()}if(2&u){const a=e.sdS(5),h=e.XpG();e.R7$(),e.Y8G("nzSuffix",a),e.R7$(),e.Y8G("placeholder",h.cvcPlaceholder)("ngModel",h.cvcModel)}}function Jh(u,b){if(1&u){const a=e.RV6();e.j41(0,"nz-input-number-group",10)(1,"nz-input-number",11,1),e.bIt("ngModelChange",function(_){e.eBV(a);const ee=e.XpG();return e.Njj(ee.cvcModelChange.next(""===_?null:_))}),e.k0s()()}if(2&u){let a;const h=e.XpG();e.R7$(),e.Y8G("nzPlaceHolder",null!==(a=h.cvcPlaceholder)&&void 0!==a?a:"")("ngModel",h.cvcModel)("nzMin",1)("nzStep",1)}}Qh=(0,vi.Cg)([(0,pn.d)()],Qh);let G4=(()=>{class u{constructor(){this.cvcModel=null,this.cvcModelChange=new e.bkB,this.cvcInputType="default"}static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["cvc-variant-table-filter-input"]],inputs:{cvcModel:"cvcModel",cvcInputType:"cvcInputType",cvcPlaceholder:"cvcPlaceholder"},outputs:{cvcModelChange:"cvcModelChange"},decls:3,vars:2,consts:[["numericInput",""],["filterInput",""],["suffixIcon",""],[4,"ngIf","ngIfElse"],["nzSize","small",3,"nzSuffix"],["nz-input","",3,"ngModelChange","placeholder","ngModel"],["nz-icon","","nzType","search","style","color: #ddd",4,"ngIf"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzType","search",2,"color","#ddd"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],["nzSize","small"],[2,"width","100%",3,"ngModelChange","nzPlaceHolder","ngModel","nzMin","nzStep"]],template:function(h,_){if(1&h&&e.DNE(0,dp,6,3,"ng-container",3)(1,Jh,3,4,"ng-template",null,0,e.C5r),2&h){const ee=e.sdS(2);e.Y8G("ngIf","default"===_.cvcInputType)("ngIfElse",ee)}},dependencies:[M.bT,t.me,t.BC,t.vS,di.c,Z.Dn,F.Sy,F.tg,F.vN,_e,et]})}return u})();function tu(u,b){if(1&u){const a=e.RV6();e.j41(0,"li",5),e.bIt("click",function(){const _=e.eBV(a).$implicit,ee=e.XpG();return e.Njj(ee.cvcOptionChange.next({key:ee.cvcColumnKey,value:_.value}))}),e.nrm(1,"cvc-attribute-tag",6),e.k0s()}if(2&u){const a=b.$implicit,h=e.XpG();e.Y8G("nzSelected",(null==h.cvcOption?null:h.cvcOption.value)===a.value),e.R7$(),e.Y8G("cvcFullWidth",!0)("cvcChecked",(null==h.cvcOption?null:h.cvcOption.value)===a.value)("cvcAttrValue",a.value)}}let mh=(()=>{class u{constructor(){this.cvcOptionChange=new e.bkB}static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["cvc-variant-enum-filter-menu"]],inputs:{cvcColumnKey:"cvcColumnKey",cvcFilterOptions:"cvcFilterOptions",cvcOption:"cvcOption"},outputs:{cvcOptionChange:"cvcOptionChange"},decls:6,vars:2,consts:[["nz-menu",""],["nz-menu-item","",3,"nzSelected","click",4,"ngFor","ngForOf"],[2,"padding","3px"],["nz-button","","nzType","default","nzBlock","","nzSize","small",3,"click","disabled"],["nz-icon","","nzType","retweet","nzTheme","outline"],["nz-menu-item","",3,"click","nzSelected"],["cvcContext","menu-item",3,"cvcFullWidth","cvcChecked","cvcAttrValue"]],template:function(h,_){1&h&&(e.j41(0,"ul",0),e.DNE(1,tu,2,4,"li",1),e.j41(2,"li",2)(3,"button",3),e.bIt("click",function(){return _.cvcOptionChange.next({key:_.cvcColumnKey,value:null})}),e.nrm(4,"span",4),e.EFF(5," Reset "),e.k0s()()()),2&h&&(e.R7$(),e.Y8G("ngForOf",_.cvcFilterOptions),e.R7$(2),e.Y8G("disabled",null===(null==_.cvcOption?null:_.cvcOption.value)))},dependencies:[M.Sq,to,Kn.aO,di.c,ho.p,Z.Dn,Ai.jS,Ai.CU],styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}.hide-dropdown[_ngcontent-%COMP%]{display:none}[_nghost-%COMP%]     ul li:hover{background-color:#e6f7ff}[_nghost-%COMP%]     ul li.ant-dropdown-menu-item-selected{background-color:#1890ff}[_nghost-%COMP%]     ul li.ant-dropdown-menu-item-selected:active{background-color:#096dd9}"],changeDetection:0})}return u})();const Y4=()=>[],hp=()=>({x:"800px",y:"200px"}),Zh=(u,b,a)=>({$implicit:u,config:b,emphasize:a}),W4=(u,b,a,h,_)=>({tagList:u,tag:b,showPopover:a,status:h,emphasize:_}),pp=(u,b)=>({$implicit:u,emphasize:b}),K4=()=>[6,6],fp=u=>({$implicit:u});function X4(u,b){if(1&u&&e.nrm(0,"th",31),2&u){let a;const h=b.ngIf;e.Y8G("nzShowCheckbox",h.checkbox.th.showCheckbox||!1)("nzWidth",h.width)("nzAlign",null!==(a=h.align)&&void 0!==a?a:"left")("nzLeft",h.fixedLeft||!1)("nzRight",h.fixedRight||!1)}}function Gf(u,b){if(1&u){const a=e.RV6();e.j41(0,"th",32),e.nI1(1,"ngrxPush"),e.bIt("nzSortOrderChange",function(_){const ee=e.eBV(a).ngIf;return e.Njj(ee.sort.changes.next({key:ee.key,value:_}))}),e.j41(2,"span",33),e.EFF(3),e.k0s()()}if(2&u){let a,h;const _=b.ngIf;e.Y8G("nzColumnKey",_.key)("nzAlign",null!==(a=_.align)&&void 0!==a?a:"left")("nzWidth",_.width)("nzLeft",_.fixedLeft||!1)("nzRight",_.fixedRight||!1)("nzShowSort",void 0!==_.sort)("nzSortFn",!0)("nzSortOrder",(null==(h=e.bMT(1,10,_.sort.changes))?null:h.value)||null),e.R7$(2),e.Y8G("nzTooltipTitle",_.tooltip),e.R7$(),e.SpI(" ",_.label," ")}}function Yf(u,b){if(1&u&&(e.j41(0,"th",34),e.EFF(1),e.k0s()),2&u){let a;const h=b.ngIf;e.Y8G("nzColumnKey",h.key)("nzAlign",null!==(a=h.align)&&void 0!==a?a:"left")("nzWidth",h.width)("nzLeft",h.fixedLeft||!1)("nzRight",h.fixedRight||!1)("nzTooltipTitle",h.tooltip),e.R7$(),e.SpI(" ",h.label," ")}}function gh(u,b){if(1&u&&(e.j41(0,"th",34),e.EFF(1),e.k0s()),2&u){let a;const h=b.ngIf;e.Y8G("nzColumnKey",h.key)("nzAlign",null!==(a=h.align)&&void 0!==a?a:"left")("nzWidth",h.width)("nzLeft",h.fixedLeft||!1)("nzRight",h.fixedRight||!1)("nzTooltipTitle",h.tooltip),e.R7$(),e.SpI(" ",h.label," ")}}function Q4(u,b){if(1&u&&(e.j41(0,"th",34),e.EFF(1),e.k0s()),2&u){let a;const h=b.ngIf;e.Y8G("nzColumnKey",h.key)("nzAlign",null!==(a=h.align)&&void 0!==a?a:"left")("nzWidth",h.width)("nzLeft",h.fixedLeft||!1)("nzRight",h.fixedRight||!1)("nzTooltipTitle",h.tooltip),e.R7$(),e.SpI(" ",h.label," ")}}function qh(u,b){if(1&u&&(e.qex(0),e.DNE(1,X4,1,5,"th",28),e.nI1(2,"guardType"),e.DNE(3,Gf,4,12,"th",29),e.nI1(4,"guardType"),e.DNE(5,Yf,2,7,"th",30),e.nI1(6,"guardType"),e.DNE(7,gh,2,7,"th",30),e.nI1(8,"guardType"),e.DNE(9,Q4,2,7,"th",30),e.nI1(10,"guardType"),e.bVm()),2&u){const a=e.XpG().$implicit,h=e.XpG(2);e.R7$(),e.Y8G("ngIf",e.i5U(2,5,a,h.colGuards.isSelectCol)),e.R7$(2),e.Y8G("ngIf",e.i5U(4,8,a,h.colGuards.isEntityTagCol)),e.R7$(2),e.Y8G("ngIf",e.i5U(6,11,a,h.colGuards.isEnumTagCol)),e.R7$(2),e.Y8G("ngIf",e.i5U(8,14,a,h.colGuards.isTextTagCol)),e.R7$(2),e.Y8G("ngIf",e.i5U(10,17,a,h.colGuards.isDefaultCol))}}function e2(u,b){if(1&u&&(e.qex(0),e.DNE(1,qh,11,20,"ng-container",27),e.bVm()),2&u){const a=b.$implicit;e.R7$(),e.Y8G("ngIf",!a.hidden)}}function k1(u,b){if(1&u&&(e.j41(0,"th",39),e.EFF(1," \xa0 "),e.k0s()),2&u){let a;const h=b.ngIf;e.Y8G("nzColumnKey",h.key)("nzAlign",null!==(a=h.align)&&void 0!==a?a:"left")("nzWidth",h.width)("nzLeft",h.fixedLeft||!1)("nzRight",h.fixedRight||!1)}}function vh(u,b){if(1&u){const a=e.RV6();e.j41(0,"cvc-variant-table-filter-input",42),e.bIt("cvcModelChange",function(_){const ee=e.eBV(a).ngIf,ft=e.XpG().ngIf;return e.Njj(ee.changes.next({key:ft.key,value:_}))}),e.k0s()}if(2&u){const a=e.XpG().ngIf;e.Y8G("cvcInputType",a.filter.inputType)("cvcPlaceholder",a.filter.options[0].key)("cvcModel",a.filter.options[0].value)}}function t2(u,b){if(1&u&&(e.j41(0,"th",40),e.DNE(1,vh,1,3,"cvc-variant-table-filter-input",41),e.k0s()),2&u){let a;const h=b.ngIf;e.Y8G("nzColumnKey",h.key)("nzWidth",h.width)("nzAlign",null!==(a=h.align)&&void 0!==a?a:"left")("nzLeft",h.fixedLeft||!1)("nzRight",h.fixedRight||!1),e.R7$(),e.Y8G("ngIf",h.filter)}}function Rd(u,b){if(1&u){const a=e.RV6();e.j41(0,"th",43,4),e.nI1(2,"ngrxPush"),e.bIt("nzSortOrderChange",function(_){const ee=e.eBV(a).ngIf;return e.Njj(ee.sort.changes.next({key:ee.key,value:_}))}),e.j41(3,"nz-filter-trigger",44,5),e.nI1(5,"ngrxPush"),e.nrm(6,"span",45),e.k0s(),e.j41(7,"nz-dropdown-menu",null,6)(9,"cvc-variant-enum-filter-menu",46),e.nI1(10,"ngrxPush"),e.bIt("cvcOptionChange",function(_){const ee=e.eBV(a).ngIf,ft=e.sdS(4);return ee.filter.changes.next(_),e.Njj(ft.nzVisible=!1)}),e.k0s()()()}if(2&u){let a,h,_;const ee=b.ngIf,ft=e.sdS(8);e.Y8G("nzColumnKey",ee.key)("nzWidth",ee.width)("nzAlign",null!==(a=ee.align)&&void 0!==a?a:"left")("nzLeft",ee.fixedLeft||!1)("nzRight",ee.fixedRight||!1)("nzShowSort",!0)("nzSortFn",!0)("nzSortOrder",(null==(h=e.bMT(2,15,ee.sort.changes))?null:h.value)||null)("nzShowFilter",void 0!==ee.filter)("nzFilterFn",!0),e.R7$(3),e.Y8G("nzDropdownMenu",ft)("nzActive",null!==(null==(_=e.bMT(5,17,ee.filter.changes))?null:_.value)),e.R7$(6),e.Y8G("cvcColumnKey",ee.key)("cvcFilterOptions",ee.filter.options)("cvcOption",e.bMT(10,19,ee.filter.changes))}}function _h(u,b){if(1&u){const a=e.RV6();e.j41(0,"th",47,4)(2,"nz-filter-trigger",44),e.nI1(3,"ngrxPush"),e.nrm(4,"span",48),e.k0s(),e.j41(5,"nz-dropdown-menu",null,7)(7,"div",49)(8,"div",50)(9,"cvc-variant-table-filter-input",51),e.bIt("cvcModelChange",function(_){const ee=e.eBV(a).ngIf;return e.Njj(ee.filter.changes.next({key:ee.key,value:_}))}),e.k0s()()()()()}if(2&u){let a,h;const _=b.ngIf,ee=e.sdS(6);e.Y8G("nzColumnKey",_.key)("nzWidth",_.width)("nzAlign",null!==(a=_.align)&&void 0!==a?a:"left")("nzLeft",_.fixedLeft||!1)("nzRight",_.fixedRight||!1)("nzFilterFn",!0),e.R7$(2),e.Y8G("nzDropdownMenu",ee)("nzActive",null!==(null==(h=e.bMT(3,10,_.filter.changes))?null:h.value)),e.R7$(7),e.Y8G("cvcPlaceholder",_.filter.options[0].key)("cvcModel",_.filter.options[0].value)}}function V1(u,b){if(1&u){const a=e.RV6();e.j41(0,"cvc-variant-table-filter-input",51),e.bIt("cvcModelChange",function(_){const ee=e.eBV(a).ngIf,ft=e.XpG().ngIf;return e.Njj(ee.changes.next({key:ft.key,value:_}))}),e.k0s()}if(2&u){const a=e.XpG().ngIf;e.Y8G("cvcPlaceholder",a.filter.options[0].key)("cvcModel",a.filter.options[0].value)}}function n2(u,b){if(1&u&&(e.j41(0,"th",40),e.DNE(1,V1,1,2,"cvc-variant-table-filter-input",52),e.k0s()),2&u){let a;const h=b.ngIf;e.Y8G("nzColumnKey",h.key)("nzWidth",h.width)("nzAlign",null!==(a=h.align)&&void 0!==a?a:"left")("nzLeft",h.fixedLeft||!1)("nzRight",h.fixedRight||!1),e.R7$(),e.Y8G("ngIf",h.filter)}}function yh(u,b){if(1&u&&(e.qex(0),e.DNE(1,k1,2,5,"th",35),e.nI1(2,"guardType"),e.DNE(3,t2,2,6,"th",36),e.nI1(4,"guardType"),e.DNE(5,Rd,11,21,"th",37),e.nI1(6,"guardType"),e.DNE(7,_h,10,12,"th",38),e.nI1(8,"guardType"),e.DNE(9,n2,2,6,"th",36),e.nI1(10,"guardType"),e.bVm()),2&u){const a=e.XpG().$implicit,h=e.XpG(2);e.R7$(),e.Y8G("ngIf",e.i5U(2,5,a,h.colGuards.isSelectCol)),e.R7$(2),e.Y8G("ngIf",e.i5U(4,8,a,h.colGuards.isEntityTagCol)),e.R7$(2),e.Y8G("ngIf",e.i5U(6,11,a,h.colGuards.isEnumTagCol)),e.R7$(2),e.Y8G("ngIf",e.i5U(8,14,a,h.colGuards.isTextTagCol)),e.R7$(2),e.Y8G("ngIf",e.i5U(10,17,a,h.colGuards.isDefaultCol))}}function Nd(u,b){if(1&u&&(e.qex(0),e.DNE(1,yh,11,20,"ng-container",27),e.bVm()),2&u){const a=b.$implicit;e.R7$(),e.Y8G("ngIf",!a.hidden)}}function o2(u,b){if(1&u&&(e.j41(0,"thead")(1,"tr",24),e.DNE(2,e2,2,1,"ng-container",25),e.k0s(),e.j41(3,"tr",26),e.DNE(4,Nd,2,1,"ng-container",25),e.k0s()()),2&u){const a=b.ngrxLet;e.R7$(2),e.Y8G("ngForOf",a),e.R7$(2),e.Y8G("ngForOf",a)}}function Wf(u,b){if(1&u){const a=e.RV6();e.j41(0,"td",58),e.bIt("nzCheckedChange",function(_){e.eBV(a);const ee=e.XpG(3).$implicit,ft=e.XpG(2);return e.Njj(ft.onRowSelected$.next({id:ee.id,selected:_}))}),e.k0s()}if(2&u){let a;const h=b.ngIf,_=e.XpG(3).$implicit;e.Y8G("nzChecked",_.selected)("nzAlign",null!==(a=h.align)&&void 0!==a?a:"left")("nzLeft",h.fixedLeft||!1)("nzRight",h.fixedRight||!1)}}function r2(u,b){1&u&&e.eu8(0)}function kd(u,b){if(1&u&&(e.qex(0),e.DNE(1,r2,1,0,"ng-container",61),e.nI1(2,"isArray"),e.nI1(3,"ngrxPush"),e.bVm()),2&u){let a;const h=e.XpG().ngIf,_=e.XpG().ngIf,ee=e.sdS(3),ft=e.sdS(5),nn=e.XpG(3).$implicit;e.R7$(),e.Y8G("ngTemplateOutlet",e.bMT(2,2,nn[h])?ee:ft)("ngTemplateOutletContext",e.sMw(6,Zh,nn[h],_,null==(a=e.bMT(3,4,_.filter.changes))?null:a.value))}}function J4(u,b){if(1&u&&(e.qex(0),e.DNE(1,kd,4,10,"ng-container",60),e.bVm()),2&u){const a=b.ngIf;e.XpG();const h=e.sdS(7),_=e.XpG(3).$implicit;e.R7$(),e.Y8G("ngIf",_[a])("ngIfElse",h)}}function mp(u,b){if(1&u&&(e.qex(0),e.nrm(1,"cvc-entity-collection-tag",63),e.bVm()),2&u){const a=e.XpG(2),h=a.$implicit,_=a.config,ee=a.emphasize;e.XpG();const ft=e.sdS(5),nn=e.XpG(5);e.R7$(),e.Y8G("cvcCollectionTagConfig",e.s1E(3,W4,h.slice(_.tag.maxTags,h.length),_.tag,!nn.isScrolling,!0===_.showStatus?h.status:void 0,ee))("cvcTagTemplate",ft)("cvcShowFullLabels",!0)}}function Z4(u,b){if(1&u&&(e.qex(0),e.nrm(1,"cvc-entity-tag-list",62),e.DNE(2,mp,2,9,"ng-container",27),e.bVm()),2&u){const a=e.XpG(),h=a.$implicit,_=a.config,ee=a.emphasize;e.XpG();const ft=e.sdS(5),nn=e.XpG(5);e.R7$(),e.Y8G("cvcTagTemplate",ft)("cvcTagListConfig",e.s1E(3,W4,h.slice(0,_.tag.maxTags),_.tag,!nn.isScrolling,!0===_.showStatus?h.status:void 0,ee)),e.R7$(),e.Y8G("ngIf",h.slice(_.tag.maxTags,h.length).length>0)}}function q4(u,b){if(1&u&&e.DNE(0,Z4,3,9,"ng-container",60),2&u){const a=b.$implicit;e.XpG();const h=e.sdS(7);e.Y8G("ngIf",a.length>0)("ngIfElse",h)}}function s2(u,b){if(1&u&&e.nrm(0,"cvc-entity-tag",64),2&u){let a;const h=b.$implicit,_=b.config,ee=b.emphasize,ft=e.XpG(6);e.Y8G("cvcTruncateLabel",null==_.tag?null:_.tag.truncateLabel)("cvcLinkableEntity",h)("cvcEmphasize",ee)("cvcShowPopover",!ft.isScrolling)("cvcStatus",!0===_.showStatus?h.status:void 0)("cvcFullWidth",null!==(a=null==_.tag?null:_.tag.fullWidth)&&void 0!==a&&a)}}function gp(u,b){if(1&u&&e.nrm(0,"cvc-empty-value",65),2&u){const a=e.XpG().ngIf;e.Y8G("cvcEmptyCategory",a.emptyValueCategory||"unspecified")}}function e0(u,b){if(1&u&&(e.j41(0,"td",59),e.DNE(1,J4,2,2,"ng-container",27)(2,q4,1,2,"ng-template",null,8,e.C5r)(4,s2,1,6,"ng-template",null,9,e.C5r)(6,gp,1,1,"ng-template",null,10,e.C5r),e.k0s()),2&u){let a;const h=b.ngIf;e.Y8G("nzAlign",null!==(a=h.align)&&void 0!==a?a:"left")("nzLeft",h.fixedLeft||!1)("nzRight",h.fixedRight||!1),e.R7$(),e.Y8G("ngIf",h.context||h.key)}}function t0(u,b){if(1&u&&(e.nrm(0,"cvc-attribute-tag",67),e.nI1(1,"evidenceEnumDisplay")),2&u){const a=e.XpG().ngIf,h=e.XpG(3).$implicit,_=e.XpG(2);e.Y8G("cvcFullWidth",!0)("cvcAttrValue",h[a.key])("cvcTooltip",e.bMT(1,3,!_.isScrolling&&h[a.key]))}}function Vd(u,b){if(1&u&&e.nrm(0,"cvc-empty-value",65),2&u){const a=e.XpG().ngIf;e.Y8G("cvcEmptyCategory",a.emptyValueCategory||"unspecified")}}function vp(u,b){if(1&u&&(e.j41(0,"td",59),e.DNE(1,t0,2,5,"cvc-attribute-tag",66)(2,Vd,1,1,"ng-template",null,11,e.C5r),e.k0s()),2&u){let a;const h=b.ngIf,_=e.sdS(3),ee=e.XpG(3).$implicit;e.Y8G("nzAlign",null!==(a=h.align)&&void 0!==a?a:"left")("nzLeft",h.fixedLeft||!1)("nzRight",h.fixedRight||!1),e.R7$(),e.Y8G("ngIf",ee[h.key])("ngIfElse",_)}}function a2(u,b){if(1&u&&(e.j41(0,"nz-tag",69),e.nrm(1,"span",70),e.k0s()),2&u){const a=e.XpG().ngIf,h=e.XpG(3).$implicit;e.Y8G("nzTooltipTitle",h[a.key])}}function n0(u,b){if(1&u&&e.nrm(0,"cvc-empty-value",65),2&u){const a=e.XpG().ngIf;e.Y8G("cvcEmptyCategory",a.emptyValueCategory||"unspecified")}}function o0(u,b){if(1&u&&(e.j41(0,"td",59),e.DNE(1,a2,2,1,"nz-tag",68)(2,n0,1,1,"ng-template",null,12,e.C5r),e.k0s()),2&u){let a;const h=b.ngIf,_=e.sdS(3),ee=e.XpG(3).$implicit;e.Y8G("nzAlign",null!==(a=h.align)&&void 0!==a?a:"left")("nzLeft",h.fixedLeft||!1)("nzRight",h.fixedRight||!1),e.R7$(),e.Y8G("ngIf",ee[h.key])("ngIfElse",_)}}function Kf(u,b){1&u&&e.eu8(0)}function Ld(u,b){if(1&u&&(e.qex(0),e.DNE(1,Kf,1,0,"ng-container",61),e.nI1(2,"isArray"),e.nI1(3,"ngrxPush"),e.bVm()),2&u){let a;const h=b.ngIf,_=e.XpG().ngIf,ee=e.sdS(3),ft=e.sdS(5);e.R7$(),e.Y8G("ngTemplateOutlet",e.bMT(2,2,h)?ee:ft)("ngTemplateOutletContext",e.l_i(6,pp,h,null==(a=e.bMT(3,4,_.filter.changes))?null:a.value))}}function r0(u,b){1&u&&e.eu8(0)}function Ch(u,b){1&u&&(e.qex(0),e.EFF(1,", "),e.bVm())}function c2(u,b){if(1&u&&(e.qex(0),e.DNE(1,r0,1,0,"ng-container",61)(2,Ch,2,0,"ng-container",27),e.bVm()),2&u){const a=b.$implicit,h=b.last,_=e.XpG(2).emphasize;e.XpG();const ee=e.sdS(5);e.R7$(),e.Y8G("ngTemplateOutlet",ee)("ngTemplateOutletContext",e.l_i(3,pp,a,_)),e.R7$(),e.Y8G("ngIf",!h)}}function _p(u,b){if(1&u&&(e.qex(0),e.DNE(1,c2,3,6,"ng-container",25),e.bVm()),2&u){const a=e.XpG().$implicit;e.R7$(),e.Y8G("ngForOf",a)}}function s0(u,b){if(1&u&&e.DNE(0,_p,2,1,"ng-container",60),2&u){const a=b.$implicit;e.XpG();const h=e.sdS(7);e.Y8G("ngIf",a.length>0)("ngIfElse",h)}}function yp(u,b){if(1&u&&(e.nrm(0,"span",72),e.nI1(1,"highlightTypeahead")),2&u){const a=b.$implicit,h=b.emphasize,_=e.XpG().ngIf;e.Y8G("innerHtml",e.i5U(1,1,_.objectKey?a[_.objectKey]:a,h),e.npT)}}function l2(u,b){if(1&u&&e.nrm(0,"cvc-empty-value",65),2&u){const a=e.XpG().ngIf;e.Y8G("cvcEmptyCategory",a.emptyValueCategory||"unspecified")}}function Cp(u,b){if(1&u&&(e.j41(0,"td",71),e.DNE(1,Ld,4,9,"ng-container",60)(2,s0,1,2,"ng-template",null,13,e.C5r)(4,yp,2,4,"ng-template",null,14,e.C5r)(6,l2,1,1,"ng-template",null,15,e.C5r),e.k0s()),2&u){let a;const h=b.ngIf,_=e.sdS(7),ee=e.XpG(3).$implicit;e.Y8G("nzAlign",null!==(a=h.align)&&void 0!==a?a:"left")("nzLeft",h.fixedLeft||!1)("nzRight",h.fixedRight||!1),e.R7$(),e.Y8G("ngIf",ee[h.key])("ngIfElse",_)}}function Bd(u,b){if(1&u&&(e.qex(0),e.DNE(1,Wf,1,4,"td",55),e.nI1(2,"guardType"),e.DNE(3,e0,8,4,"td",56),e.nI1(4,"guardType"),e.DNE(5,vp,4,5,"td",56),e.nI1(6,"guardType"),e.DNE(7,o0,4,5,"td",56),e.nI1(8,"guardType"),e.DNE(9,Cp,8,5,"td",57),e.nI1(10,"guardType"),e.bVm()),2&u){const a=e.XpG().$implicit,h=e.XpG(3);e.R7$(),e.Y8G("ngIf",e.i5U(2,5,a,h.colGuards.isSelectCol)),e.R7$(2),e.Y8G("ngIf",e.i5U(4,8,a,h.colGuards.isEntityTagCol)),e.R7$(2),e.Y8G("ngIf",e.i5U(6,11,a,h.colGuards.isEnumTagCol)),e.R7$(2),e.Y8G("ngIf",e.i5U(8,14,a,h.colGuards.isTextTagCol)),e.R7$(2),e.Y8G("ngIf",e.i5U(10,17,a,h.colGuards.isDefaultCol))}}function bp(u,b){if(1&u&&(e.qex(0),e.DNE(1,Bd,11,20,"ng-container",27),e.bVm()),2&u){const a=b.$implicit;e.R7$(),e.Y8G("ngIf",!a.hidden)}}function bh(u,b){if(1&u&&(e.j41(0,"tr",54),e.DNE(1,bp,2,1,"ng-container",25),e.k0s()),2&u){const a=e.XpG().ngrxLet;e.R7$(),e.Y8G("ngForOf",a)}}function Ep(u,b){1&u&&(e.j41(0,"tbody"),e.DNE(1,bh,2,1,"ng-template",53),e.k0s())}function Tp(u,b){1&u&&e.nrm(0,"span",77)}function zp(u,b){if(1&u){const a=e.RV6();e.j41(0,"span",78),e.bIt("click",function(){e.eBV(a),e.XpG(2);const _=e.sdS(3),ee=e.XpG().filter;return _.value="",e.Njj(ee.changes.next({key:ee.key,value:null}))}),e.k0s()}}function Eh(u,b){if(1&u&&e.DNE(0,Tp,1,0,"span",75)(1,zp,1,0,"span",76),2&u){e.XpG();const a=e.sdS(3);e.Y8G("ngIf",!a.value),e.R7$(),e.Y8G("ngIf",a.value)}}function u2(u,b){if(1&u){const a=e.RV6();e.qex(0),e.j41(1,"nz-input-group",73)(2,"input",74,17),e.bIt("nzFilterChange",function(_){e.eBV(a);const ee=e.XpG().filter;return e.Njj(ee.changes.next({key:ee.key,value:_}))}),e.k0s()(),e.DNE(4,Eh,2,2,"ng-template",null,18,e.C5r),e.bVm()}if(2&u){const a=e.sdS(5),h=e.XpG().filter;e.R7$(),e.Y8G("nzSuffix",a),e.R7$(),e.Y8G("placeholder",h.placeholder)("ngModel",h.defaultValue)}}function Mp(u,b){if(1&u){const a=e.RV6();e.j41(0,"nz-input-number-group",79)(1,"nz-input-number",80,17),e.bIt("ngModelChange",function(_){e.eBV(a);const ee=e.XpG().filter;return e.Njj(ee.changes.next({key:ee.key,value:_}))}),e.k0s()()}if(2&u){const a=e.XpG().filter;e.R7$(),e.Y8G("nzPlaceHolder",a.placeholder)("ngModel",a.defaultValue)("nzMin",1)("nzStep",1)}}function Th(u,b){if(1&u&&e.DNE(0,u2,6,3,"ng-container",60)(1,Mp,3,4,"ng-template",null,16,e.C5r),2&u){const a=b.filter,h=e.sdS(2);e.Y8G("ngIf",void 0===a.inputType||"default"===a.inputType)("ngIfElse",h)}}function d2(u,b){1&u&&(e.j41(0,"nz-row",81)(1,"nz-col")(2,"span"),e.EFF(3,"Use checkboxes to select or deselect Variants"),e.k0s()()()),2&u&&e.Y8G("nzGutter",e.lJ4(1,K4))}function L1(u,b){1&u&&(e.j41(0,"nz-tag",91),e.nrm(1,"i",92),e.j41(2,"span"),e.EFF(3,"Loading\u2026"),e.k0s()())}function a0(u,b){if(1&u&&(e.j41(0,"nz-tag",94),e.nrm(1,"span",95),e.j41(2,"span",96),e.EFF(3),e.k0s()()),2&u){e.XpG();const a=e.sdS(4),h=e.XpG().ngrxLet;e.R7$(2),e.Y8G("nzTooltipTitle",a)("nzTooltipTitleContext",e.eq3(3,fp,h.query)),e.R7$(),e.SpI(" Query Error",h.query.length>1?"s":""," ")}}function Sp(u,b){if(1&u&&(e.j41(0,"nz-tag",94)(1,"span",96)(2,"span",97)(3,"strong"),e.EFF(4),e.k0s()()()()),2&u){e.XpG();const a=e.sdS(4),h=e.XpG().ngrxLet;e.R7$(),e.Y8G("nzTooltipTitle",a)("nzTooltipTitleContext",e.eq3(3,fp,h.network)),e.R7$(3),e.SpI(" Network Error",h.query.length>1?"s":""," ")}}function Xf(u,b){if(1&u&&(e.j41(0,"div"),e.EFF(1),e.k0s()),2&u){const a=b.$implicit;e.R7$(),e.SpI(" ",a.message," ")}}function zh(u,b){1&u&&e.DNE(0,Xf,2,1,"div",25),2&u&&e.Y8G("ngForOf",b.$implicit)}function h2(u,b){if(1&u&&(e.qex(0),e.DNE(1,a0,4,5,"nz-tag",93)(2,Sp,5,5,"nz-tag",93)(3,zh,1,1,"ng-template",null,20,e.C5r),e.bVm()),2&u){const a=e.XpG().ngrxLet;e.R7$(),e.Y8G("ngIf",a.query),e.R7$(),e.Y8G("ngIf",a.network)}}function Dp(u,b){if(1&u&&(e.qex(0),e.DNE(1,h2,5,2,"ng-container",27),e.bVm()),2&u){const a=b.ngrxLet;e.R7$(),e.Y8G("ngIf",a)}}function Op(u,b){if(1&u){const a=e.RV6();e.j41(0,"div",98)(1,"nz-checkbox-group",99),e.nI1(2,"ngrxPush"),e.bIt("ngModelChange",function(_){e.eBV(a);const ee=e.XpG(2);return e.Njj(ee.onPreferenceChange$.next(_))}),e.k0s()()}if(2&u){const a=e.XpG(2);e.R7$(),e.Y8G("ngModel",e.bMT(2,1,a.setPreference$))}}function Ip(u,b){if(1&u){const a=e.RV6();e.j41(0,"nz-row",81)(1,"nz-col",82),e.DNE(2,L1,4,0,"nz-tag",83),e.nI1(3,"ngrxPush"),e.nI1(4,"ngrxPush"),e.nrm(5,"cvc-no-more-rows",84),e.nI1(6,"ngrxPush"),e.k0s(),e.j41(7,"nz-col",82),e.DNE(8,Dp,2,1,"ng-container",23),e.k0s(),e.j41(9,"nz-col",82),e.nrm(10,"cvc-table-counts2",85),e.k0s(),e.j41(11,"nz-col",86)(12,"nz-button-group")(13,"button",87),e.bIt("click",function(){e.eBV(a);const _=e.XpG();return e.Njj(_.onResetFilter$.next())}),e.nrm(14,"span",88),e.k0s(),e.j41(15,"button",89),e.nrm(16,"span",90),e.k0s()(),e.DNE(17,Op,3,3,"ng-template",null,19,e.C5r),e.k0s()()}if(2&u){const a=e.sdS(18),h=e.XpG();e.Y8G("nzGutter",8),e.R7$(2),e.Y8G("ngIf",e.bMT(3,7,h.loading$)&&e.bMT(4,9,h.isFetchMore$)),e.R7$(3),e.Y8G("cvcShowTag",e.bMT(6,11,h.noMoreRows$)),e.R7$(3),e.Y8G("ngrxLet",h.queryError$),e.R7$(2),e.Y8G("cvcTableCountsConnection",h.connection$),e.R7$(5),e.Y8G("nzPopoverContent",a)("nzPopoverTrigger","click")}}let fl=class j8{constructor(b,a,h){this.queryGQL=b,this.apollo=a,this.cdr=h,this.cvcSelectedIdsChange=new e.bkB,this.isScrolling=!1,this.colGuards=ap,this.onFetchMore$=new V.B,this.onPreferenceChange$=new dn.t([]),this.onResetFilter$=new V.B,this.onRowSelected$=new V.B,this.onScroll$=new dn.t("stop"),this.onSetSelectedRow$=new dn.t(new Set),this.queryError$=new V.B,this.queryRequest$=new V.B,this.queryResult$=new Ni.m(1),this.isFetchMore$=new dn.t(!1),this.noMoreRows$=new dn.t(!1),this.scrollToIndex$=new V.B,this.tableConfig=new up;const _=(0,po.z)(this.tableConfig.getFilterStreams()),ee=(0,po.z)(this.tableConfig.getSortStreams()).pipe((0,qt.p)(ft=>ft.filter(nn=>null!==nn.value).length<=1));this.refetch$=(0,po.z)([ee,_]).pipe((0,me.T)(([ft,nn])=>({query:"refetch",sort:ft,filter:nn}))),this.fetchMore$=this.onFetchMore$.pipe((0,me.T)(ft=>({query:"fetchMore",fetchMore:{...ft}}))),(0,ne.h)(this.refetch$,this.fetchMore$).pipe((0,Ps.B)(50),(0,pn.s)(this)).subscribe(ft=>{const nn=this.getQueryVars(ft);this.queryRef?(this.queryError$.next({}),"refetch"===ft.query?(this.isFetchMore$.next(!1),this.queryRef.refetch(nn).then(Rn=>{(Rn.error||Rn.errors)&&this.queryError$.next(this.getRequestErrors(Rn))}).then(()=>{this.scrollToIndex$.next(0)})):(this.isFetchMore$.next(!0),this.queryRef.fetchMore({variables:nn}).then(Rn=>{(Rn.error||Rn.errors)&&this.queryError$.next(this.getRequestErrors(Rn))}))):(this.isFetchMore$.next(!1),this.queryError$.next({}),this.queryRef=this.queryGQL.watch(nn),this.queryRef.valueChanges.pipe((0,pn.s)(this)).subscribe(Rn=>{this.queryResult$.next(Rn),(Rn.error||Rn.errors)&&this.queryError$.next(this.getRequestErrors(Rn))}))}),this.loading$=this.queryResult$.pipe((0,$i.E)("loading"),(0,J.F)()),this.connection$=this.queryResult$.pipe((0,$i.E)("data","browseVariants"),(0,qt.p)(fo.kP)),this.pageInfo$=this.connection$.pipe((0,$i.E)("pageInfo"),(0,qt.p)(fo.kP)),this.row$=(0,po.z)([this.connection$.pipe((0,$i.E)("edges"),(0,qt.p)(fo.kP),(0,me.T)(ft=>ft.map(nn=>nn.node))),this.onSetSelectedRow$]).pipe((0,me.T)(([ft,nn])=>ft.map(Rn=>{if(Rn)return{...Rn,variant:{__typename:"Variant",id:Rn.id,name:Rn.name,link:Rn.link},feature:{__typename:"Feature",id:Rn.featureId,name:Rn.featureName,link:Rn.featureLink},selected:nn.has(Rn.id)}}))),this.col$=new dn.t(this.tableConfig.get()),this.setPreference$=this.col$.pipe((0,me.T)(ft=>this.getColPrefsFromTableConfig(ft))),this.onPreferenceChange$.pipe((0,Yi.E)(this.col$),(0,me.T)(([ft,nn])=>this.getTableConfigFromColPrefs(ft,nn)),(0,pn.s)(this)).subscribe(ft=>{this.col$.next(ft)}),this.onSetTableFilter$=new dn.t([]),this.onSetTableFilter$.pipe((0,pn.s)(this)).subscribe(ft=>{const nn=this.col$.getValue();ft.forEach(Rn=>{const xi=nn.find(Co=>Co.key===Rn.key);if(void 0!==xi.filter.inputType){const Co=xi.filter.options[0];if(null===Rn.value)return xi.filter.options=[{...Co,value:null}],void xi.filter.changes.next(Rn);if(Array.isArray(Rn.value)&&0===Rn.value.length)return xi.filter.options=[{...Co,value:null}],void xi.filter.changes.next({...Rn,value:null});let jo;Array.isArray(Rn.value)?Rn.value.length>0&&(jo=Rn.value[0]):jo=Rn.value;const Ra=xi.filter.typename;if(!Ra||!jo)return void console.error(`variant-manager requires column config '${xi.key}' provide a typename for cvcTablePrefs Input to set its filter`);const Bc=this.getEntityName(Ra,jo);if(!Bc)return;xi.filter.options=[{...Co,value:Bc}],xi.filter.changes.next({...Rn,value:Bc})}else Xh(xi)&&xi.filter.changes.next(Rn)})}),this.onSetTablePref$=new dn.t([]),this.onSetTablePref$.pipe((0,Yi.E)(this.setPreference$),(0,me.T)(([ft,nn])=>{const Rn=[];return ft.forEach(xi=>{let Co=nn.find(jo=>jo.value===xi.value);Co?Rn.push({...Co,...xi}):console.warn(`variant-manager onSetTablePref$ received updated preferences for column '${xi.value}', but a column with that key could not be found.`)}),Rn}),(0,pn.s)(this)).subscribe(ft=>{this.onPreferenceChange$.next(ft)}),this.onRowSelected$.pipe((0,Yi.E)(this.onSetSelectedRow$),(0,pn.s)(this)).subscribe(([ft,nn])=>{ft.selected?nn.add(ft.id):nn.delete(ft.id),this.onSetSelectedRow$.next(nn),this.cvcSelectedIdsChange.next(Array.from(nn))}),this.onScroll$.pipe((0,me.T)(ft=>"stop"!==ft),(0,J.F)(),(0,pn.s)(this)).subscribe(ft=>{this.isScrolling=ft,this.cdr.detectChanges()}),this.onScroll$.pipe((0,qt.p)(ft=>"bottom"===ft),(0,Yi.E)(this.pageInfo$),(0,me.T)(([ft,nn])=>nn),(0,pn.s)(this)).subscribe(ft=>{ft.hasNextPage||(this.noMoreRows$.next(!0),this.cdr.detectChanges(),setInterval(()=>this.noMoreRows$.next(!1)))})}ngAfterViewInit(){this.onResetFilter$.pipe((0,Yi.E)((0,Xo.of)(this.tableConfig.get())),(0,pn.s)(this)).subscribe(([b,a])=>{const h=[];a.forEach(_=>{if(Kh(_)&&_.sort.changes&&_.sort.changes.next({key:_.key,value:_.sort.default??null}),Xh(_)){const ee=_.filter.options.find(ft=>1==ft.byDefault)?.value;_.filter.changes&&_.filter.changes.next({key:_.key,value:ee||null})}h.push(_)}),this.col$.next(h)})}getQueryVars(b){const a=this.getQueryFilterParams(b);return{...this.getQuerySortParams(b),...a,...b.fetchMore}}getQuerySortParams(b){if(!b.sort)return;const h=b.sort.find(ee=>null!==ee.value);return h?{sortBy:{column:this.getSortColumnFromColKey(h.key),direction:"ascend"===h.value?xn.UEL.Asc:xn.UEL.Desc||void 0}}:void 0}getQueryFilterParams(b){let a={};return b.filter&&b.filter.forEach(h=>{a[lp[h.key]||h.key]=null===h.value||""===h.value?void 0:h.value}),a}getRequestErrors(b){return{query:b.errors,network:b.error}}getTableConfigFromColPrefs(b,a){return a.forEach(h=>{if(H4.find(ee=>ee===h.key))return;const _=b.find(ee=>ee.value===h.key);_&&(h.hidden=!_?.checked)}),[...a]}getColPrefsFromTableConfig(b){let a=[];return b.forEach(h=>{H4.find(_=>_===h.key)||a.push({label:h.tooltip||h.label,value:h.key,checked:!h.hidden})}),a}getSortColumnFromColKey(b){return $4[b]}getEntityName(b,a){const h={id:`${b}:${a}`,fragment:Gu.J1`
                fragment Linkable${b}Entity on ${b} {
                  id
                  name
                  link
                }`},_=this.apollo.client.readFragment(h);if(_)return _.name;console.error(`variant-manager onSetTableFilter$ could not find cached entity ${b}:${a} to populate input filter`)}trackByIndex(b,a){return a?.id}ngOnChanges(b){if(b.cvcTableSettings){const a=b.cvcTableSettings.currentValue;void 0!==a&&this.onSetTableFilter$.next(a.filters)}if(b.cvcSelectedIds){const a=b.cvcSelectedIds.currentValue,h=new Set;void 0!==a&&a.forEach(_=>h.add(_)),this.onSetSelectedRow$.next(h)}}static#e=this.\u0275fac=function(a){return new(a||j8)(e.rXU(xn.ngC),e.rXU(is.Ic),e.rXU(e.gRc))};static#t=this.\u0275cmp=e.VBU({type:j8,selectors:[["cvc-variant-manager"]],inputs:{cvcTableSettings:"cvcTableSettings",cvcSelectedIds:"cvcSelectedIds"},outputs:{cvcSelectedIdsChange:"cvcSelectedIdsChange"},features:[e.OA$],decls:16,vars:27,consts:[["virtualTable",""],["columnFilterInput",""],["cardTitle",""],["extraTemplate",""],["enumTableFilter",""],["enumTagFilterTrigger",""],["enumFilterMenu","nzDropdownMenu"],["textTagFilterMenu","nzDropdownMenu"],["entityTagList",""],["entityTag",""],["emptyEntityTagCell",""],["emptyEnumTagCell",""],["emptyTextTagCell",""],["staticList",""],["staticValue",""],["emptyDefaultCell",""],["numericInput",""],["filterInput",""],["suffixIcon",""],["prefsPopover",""],["queryError",""],["nzSize","small",3,"nzTitle","nzExtra"],["cvcTableScroller","",3,"cvcTableScrollerOnScroll","cvcTableScrollerOnFetch","nzData","cvcTableScrollerQueryRef","cvcTableScrollerPageInfo","cvcTableScrollerToIndex","nzScroll","nzVirtualForTrackBy","nzVirtualItemSize","nzSize","nzFrontPagination","nzShowPagination","nzLoading"],[4,"ngrxLet"],[1,"col-header-row"],[4,"ngFor","ngForOf"],[1,"filter-row"],[4,"ngIf"],[3,"nzShowCheckbox","nzWidth","nzAlign","nzLeft","nzRight",4,"ngIf"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzSortOrderChange",4,"ngIf"],["nz-tooltip","",3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzTooltipTitle",4,"ngIf"],[3,"nzShowCheckbox","nzWidth","nzAlign","nzLeft","nzRight"],[3,"nzSortOrderChange","nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder"],["nz-tooltip","",1,"col-header-label",3,"nzTooltipTitle"],["nz-tooltip","",3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight","nzTooltipTitle"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight",4,"ngIf"],[3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight",4,"ngIf"],["class","attribute-filter","nzCustomFilter","",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzShowFilter","nzFilterFn","nzSortOrderChange",4,"ngIf"],["class","attribute-filter","nzCustomFilter","",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzFilterFn",4,"ngIf"],[3,"nzColumnKey","nzAlign","nzWidth","nzLeft","nzRight"],[3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight"],[3,"cvcInputType","cvcPlaceholder","cvcModel","cvcModelChange",4,"ngIf"],[3,"cvcModelChange","cvcInputType","cvcPlaceholder","cvcModel"],["nzCustomFilter","",1,"attribute-filter",3,"nzSortOrderChange","nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzShowSort","nzSortFn","nzSortOrder","nzShowFilter","nzFilterFn"],[3,"nzDropdownMenu","nzActive"],["nz-icon","","nzType","filter","nzTheme","fill"],[3,"cvcOptionChange","cvcColumnKey","cvcFilterOptions","cvcOption"],["nzCustomFilter","",1,"attribute-filter",3,"nzColumnKey","nzWidth","nzAlign","nzLeft","nzRight","nzFilterFn"],["nz-icon","","nzType","search"],[1,"ant-table-filter-dropdown"],[1,"custom-input-dropdown"],[3,"cvcModelChange","cvcPlaceholder","cvcModel"],[3,"cvcPlaceholder","cvcModel","cvcModelChange",4,"ngIf"],["nz-virtual-scroll",""],[1,"data-row"],[3,"nzChecked","nzAlign","nzLeft","nzRight","nzCheckedChange",4,"ngIf"],[3,"nzAlign","nzLeft","nzRight",4,"ngIf"],["class","default-col-type",3,"nzAlign","nzLeft","nzRight",4,"ngIf"],[3,"nzCheckedChange","nzChecked","nzAlign","nzLeft","nzRight"],[3,"nzAlign","nzLeft","nzRight"],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"cvcTagTemplate","cvcTagListConfig"],[3,"cvcCollectionTagConfig","cvcTagTemplate","cvcShowFullLabels"],[3,"cvcTruncateLabel","cvcLinkableEntity","cvcEmphasize","cvcShowPopover","cvcStatus","cvcFullWidth"],[3,"cvcEmptyCategory"],["cvcContext","compact",3,"cvcFullWidth","cvcAttrValue","cvcTooltip",4,"ngIf","ngIfElse"],["cvcContext","compact",3,"cvcFullWidth","cvcAttrValue","cvcTooltip"],["nz-tooltip","","style","width: 100%; cursor: help; color: #595959",3,"nzTooltipTitle",4,"ngIf","ngIfElse"],["nz-tooltip","",2,"width","100%","cursor","help","color","#595959",3,"nzTooltipTitle"],["nz-icon","","nzType","align-left","nzTheme","outline"],[1,"default-col-type",3,"nzAlign","nzLeft","nzRight"],[3,"innerHtml"],["nzSize","small",3,"nzSuffix"],["nz-input","",3,"nzFilterChange","placeholder","ngModel"],["nz-icon","","nzType","search","style","color: #ddd",4,"ngIf"],["nz-icon","","class","ant-input-clear-icon","nzTheme","fill","nzType","close-circle",3,"click",4,"ngIf"],["nz-icon","","nzType","search",2,"color","#ddd"],["nz-icon","","nzTheme","fill","nzType","close-circle",1,"ant-input-clear-icon",3,"click"],["nzSize","small"],[2,"width","100%",3,"ngModelChange","nzPlaceHolder","ngModel","nzMin","nzStep"],[3,"nzGutter"],["nzFlex","auto"],["nzColor","processing",4,"ngIf"],[3,"cvcShowTag"],[3,"cvcTableCountsConnection"],["nzFlex","35px"],["nz-button","","type","button","nzType","default","nzSize","small",3,"click"],["nz-icon","","nzType","retweet","nzTheme","outline"],["nz-button","","nz-popover","","nzPopoverTitle","Visible Columns","type","button","nzType","default","nzSize","small",3,"nzPopoverContent","nzPopoverTrigger"],["nz-icon","","nzType","setting","nzTheme","outline"],["nzColor","processing"],["nz-icon","","nzType","sync","nzSpin",""],["nzColor","error","style","margin-left: 12px",4,"ngIf"],["nzColor","error",2,"margin-left","12px"],["nz-icon","","nzType","question-circle","nzTheme","outline"],["nz-tooltip","",2,"cursor","help",3,"nzTooltipTitle","nzTooltipTitleContext"],["nz-typography",""],[1,"prefs-popover"],[3,"ngModelChange","ngModel"]],template:function(a,h){if(1&a){const _=e.RV6();e.j41(0,"nz-card",21)(1,"nz-table",22,0),e.nI1(3,"ngrxPush"),e.nI1(4,"ngrxPush"),e.nI1(5,"ngrxPush"),e.nI1(6,"ngrxPush"),e.nI1(7,"ngrxPush"),e.bIt("cvcTableScrollerOnScroll",function(ft){return e.eBV(_),e.Njj(h.onScroll$.next(ft))})("cvcTableScrollerOnFetch",function(ft){return e.eBV(_),e.Njj(h.onFetchMore$.next(ft))}),e.DNE(8,o2,5,2,"thead",23)(9,Ep,2,0,"tbody",23),e.k0s()(),e.DNE(10,Th,3,2,"ng-template",null,1,e.C5r)(12,d2,4,2,"ng-template",null,2,e.C5r)(14,Ip,19,13,"ng-template",null,3,e.C5r)}if(2&a){const _=e.sdS(13),ee=e.sdS(15);e.Y8G("nzTitle",_)("nzExtra",ee),e.R7$(),e.Y8G("nzData",e.bMT(3,15,h.row$)||e.lJ4(25,Y4))("cvcTableScrollerQueryRef",h.queryRef)("cvcTableScrollerPageInfo",e.bMT(4,17,h.pageInfo$))("cvcTableScrollerToIndex",e.bMT(5,19,h.scrollToIndex$))("nzScroll",e.lJ4(26,hp))("nzVirtualForTrackBy",h.trackByIndex)("nzVirtualItemSize",28)("nzSize","small")("nzFrontPagination",!1)("nzShowPagination",!1)("nzLoading",e.bMT(6,21,h.loading$)&&!e.bMT(7,23,h.isFetchMore$)),e.R7$(7),e.Y8G("ngrxLet",h.col$),e.R7$(),e.Y8G("ngrxLet",h.col$)}},dependencies:[M.Sq,M.bT,M.T3,tn.b,ae,Xs,to,cu,Fs.o,Jc.M,t.me,t.BC,t.vS,Ci.Nj,Kn.aO,Kn.dn,di.c,ho.p,L.Uq,L.e,Z.Dn,F.Sy,F.tg,F.vN,qe.Di,Yo.cK,dt.Ov,ns.wQ,_e,et,gi.L_,no.CP,no.Cc,no.SO,no._4,no.GM,no.IL,no.aj,no.kt,no.CC,no.OL,no.Kg,no.jc,no.oZ,Gn.s,hn.LH,Qh,G4,mh,Er,Ta.pW,Xr.M,Hi,Ci.L9],styles:["[_nghost-%COMP%]{display:block}nz-card[_ngcontent-%COMP%]:first-of-type     .ant-card-body{padding:0;margin-top:1px}.table-info[_ngcontent-%COMP%]{margin-left:.5rem}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell.align-right[_ngcontent-%COMP%]     .ant-table-column-title{text-align:right}tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]{padding:3px 4px}tr.filter-row[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   nz-filter-trigger[_ngcontent-%COMP%]     span.ant-dropdown-trigger{margin-left:0;padding-right:12px}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]{white-space:nowrap}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .anticon.attribute-icon[_ngcontent-%COMP%]{color:#595959}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.overflow-ellipsis[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell.button-cell[_ngcontent-%COMP%]{padding:0}tr.data-row[_ngcontent-%COMP%]   td.align-right[_ngcontent-%COMP%], tr.col-header-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.data-row[_ngcontent-%COMP%]   td.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%], tr.filter-row[_ngcontent-%COMP%]   th.ant-table-cell[_ngcontent-%COMP%]   .align-right[_ngcontent-%COMP%]{text-align:right}tr.data-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-of-type{padding-left:6px}tr.data-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-of-type   cvc-entity-tag[_ngcontent-%COMP%]{margin-left:6px}td.default-col-type[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}.ant-table-filter-dropdown[_ngcontent-%COMP%]{padding:8px}.prefs-popover[_ngcontent-%COMP%]     nz-checkbox-group:first-of-type label{display:block}.prefs-popover[_ngcontent-%COMP%]     nz-checkbox-group:first-of-type label span{display:inline-block}"],changeDetection:0})};fl=(0,vi.Cg)([(0,pn.d)()],fl);const c0=()=>[0,0];function l0(u,b){if(1&u&&(e.qex(0),e.j41(1,"span"),e.EFF(2),e.k0s(),e.bVm()),2&u){const a=b.ngrxLet;e.R7$(2),e.JRh(a.message)}}function wp(u,b){if(1&u&&e.EFF(0),2&u){const a=e.XpG();e.JRh(a.successMessage)}}let p2=class U8{set cvcFeatureId(b){b&&this.featureId$.next(b)}set cvcFeatureName(b){b&&this.featureName$.next(b)}set cvcSearchString(b){b&&this.searchString$.next(b)}constructor(b,a){this.query=b,this.errors=a,this.cvcOnCreate=new e.bkB,this.form=new t.J3({}),this.model={name:""},this.formLayout="horizontal",this.options={formState:{formLayout:this.formLayout}},this.onSubmit$=new V.B,this.searchString$=new dn.t(void 0),this.featureName$=new dn.t(void 0),this.featureId$=new dn.t(void 0),this.formMessageDisplay$=new dn.t({message:"Variant does not exist, create it?"}),this.queryMutator=new Ar.E(this.errors),this.addVariantMutator=new Ar.E(this.errors),this.minNameLength=3,this.fields=[{key:"featureId",hide:!0,props:{required:!0}},{key:"name",hide:!0,props:{minLength:this.minNameLength,required:!0}},{key:"organizationId",type:"org-submit-button",props:{submitLabel:"Add Variant"}}],this.featureId$.pipe((0,pn.s)(this)).subscribe(h=>{this.model.featureId=h}),this.searchString$.pipe((0,pn.s)(this)).subscribe(h=>{this.model.name=h,this.formMessageDisplay$.next(void 0===h||void 0!==h&&h.length<this.minNameLength?{message:`New Variant name must be at least ${this.minNameLength} characters.`}:{message:`Variant '${h}' does not exist, create it?`})}),this.onSubmit$.pipe((0,pn.s)(this)).subscribe(h=>{console.log("variant-quick-add form model submitted.",h),this.submitVariant(h)})}submitVariant(b){b.name&&b.featureId?this.mutationState=this.addVariantMutator.mutate(this.query,{name:b.name,featureId:b.featureId,organizationId:b.organizationId},{},a=>{console.log("variant-quick-add submit data callback",a),a.createVariant&&(this.formMessageDisplay$.next({message:void 0}),setTimeout(()=>{a&&a.createVariant&&this.cvcOnCreate.next({id:a.createVariant.variant.id,new:a.createVariant.new})},1e3))}):console.error("variant-quick-add form submitVariant requires model with valid name and featureId.")}ngOnChanges(b){if(b.cvcFeatureId){const a=b.cvcFeatureId.currentValue;this.featureId$.next(a),this.model={...this.model,featureId:a}}b.cvcFeatureName&&this.featureName$.next(b.cvcFeatureName.currentValue)}static#e=this.\u0275fac=function(a){return new(a||U8)(e.rXU(xn.wdL),e.rXU(na.N))};static#t=this.\u0275cmp=e.VBU({type:U8,selectors:[["cvc-variant-quick-add-form"]],inputs:{cvcFeatureId:"cvcFeatureId",cvcFeatureName:"cvcFeatureName",cvcSearchString:"cvcSearchString"},outputs:{cvcOnCreate:"cvcOnCreate"},features:[e.OA$],decls:8,vars:10,consts:[["success",""],[4,"ngrxLet"],["entityType","Variant",3,"mutationState","successMessage"],[3,"ngSubmit","formGroup"],[3,"nzGutter"],["nzSpan","24"],[3,"modelChange","form","fields","model","options"]],template:function(a,h){if(1&a){const _=e.RV6();e.DNE(0,l0,3,1,"ng-container",1),e.j41(1,"cvc-form-submission-status-display",2),e.DNE(2,wp,1,1,"ng-template",null,0,e.C5r),e.j41(4,"form",3),e.bIt("ngSubmit",function(){return e.eBV(_),e.Njj(h.onSubmit$.next(h.model))}),e.j41(5,"nz-row",4)(6,"nz-col",5)(7,"formly-form",6),e.bIt("modelChange",function(ft){return e.eBV(_),e.Njj(h.model=ft)}),e.k0s()()()()()}if(2&a){const _=e.sdS(3);e.Y8G("ngrxLet",h.formMessageDisplay$),e.R7$(),e.Y8G("mutationState",h.mutationState)("successMessage",_),e.R7$(3),e.Y8G("formGroup",h.form),e.R7$(),e.Y8G("nzGutter",e.lJ4(9,c0)),e.R7$(2),e.Y8G("form",h.form)("fields",h.fields)("model",h.model)("options",h.options)}},dependencies:[fs.G,g.aF,t.qT,t.cb,Ci.Nj,L.Uq,L.e,t.j4],encapsulation:2,changeDetection:0})};p2=(0,vi.Cg)([(0,pn.d)()],p2);var u0=c(5676);const ml=["optionTemplates"],B1=()=>[6,6],d0=(u,b)=>({show:u,hide:b});function h0(u,b){if(1&u){const a=e.RV6();e.j41(0,"nz-col",11)(1,"button",12),e.bIt("click",function(){e.eBV(a);const _=e.XpG();return e.Njj(_.onShowMgrClick$.next())}),e.nrm(2,"span",13),e.nI1(3,"ngrxPush"),e.nI1(4,"ngrxPush"),e.EFF(5," Manager "),e.k0s()()}if(2&u){const a=e.XpG();e.R7$(2),e.Y8G("ngClass",e.l_i(6,d0,e.bMT(3,2,a.showMgr$),!e.bMT(4,4,a.showMgr$)))("nzType","caret-right")}}function p0(u,b){if(1&u){const a=e.RV6();e.j41(0,"nz-col",14)(1,"cvc-variant-manager",15),e.nI1(2,"ngrxPush"),e.bIt("cvcSelectedIdsChange",function(_){e.eBV(a);const ee=e.XpG();return e.Njj(ee.onPopulate$.next(_))}),e.k0s()()}if(2&u){const a=e.XpG();e.R7$(),e.Y8G("cvcSelectedIds",e.bMT(2,1,a.onVid$))}}function f0(u,b){if(1&u&&(e.qex(0),e.j41(1,"em"),e.nrm(2,"span",20),e.nI1(3,"highlightTypeahead"),e.k0s(),e.bVm()),2&u){const a=e.XpG(2).$implicit,h=e.XpG().ngrxLet;e.R7$(2),e.Y8G("nzTooltipTitle",a.variantAliases.join(", "))("innerHtml",e.i5U(3,2,a.variantAliases.join(", "),h),e.npT)}}function m0(u,b){1&u&&e.EFF(0,"--")}function g0(u,b){if(1&u&&(e.nrm(0,"cvc-entity-tag",17),e.j41(1,"span",18)(2,"strong"),e.EFF(3,"Aliases:"),e.k0s(),e.DNE(4,f0,4,5,"ng-container",19)(5,m0,1,0,"ng-template",null,3,e.C5r),e.k0s()),2&u){const a=e.sdS(6),h=e.XpG().$implicit,_=e.XpG().ngrxLet;e.Y8G("cvcDisableLink",!0)("cvcCacheId",h.__typename+":"+h.id)("cvcEmphasize",_),e.R7$(4),e.Y8G("ngIf",h.variantAliases.length>0)("ngIfElse",a)}}function xp(u,b){1&u&&(e.qex(0),e.DNE(1,g0,7,5,"ng-template",null,2,e.C5r),e.bVm())}function v0(u,b){if(1&u&&(e.qex(0),e.DNE(1,xp,3,0,"ng-container",16),e.nI1(2,"ngrxPush"),e.bVm()),2&u){const a=e.XpG();e.R7$(),e.Y8G("ngForOf",e.bMT(2,1,a.result$))}}function _0(u,b){if(1&u){const a=e.RV6();e.j41(0,"div",21)(1,"cvc-entity-tag",22),e.bIt("cvcOnClose",function(){const _=e.eBV(a).$implicit,ee=e.XpG();return e.Njj(ee.onTagClose$.next(_.nzValue))}),e.k0s()()}if(2&u){const a=b.$implicit,h=e.XpG();e.R7$(),e.Y8G("cvcCacheId","Variant:"+a.nzValue)("cvcContext",h.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",h.props.isMultiSelect?"default":"closeable")}}function y0(u,b){if(1&u&&(e.j41(0,"span",27),e.EFF(1),e.k0s()),2&u){const a=e.XpG(2).$implicit;e.R7$(),e.SpI(" ",a," does not match any existing Variants")}}function C0(u,b){if(1&u){const a=e.RV6();e.j41(0,"button",28),e.bIt("click",function(){e.eBV(a);const _=e.XpG(3);return e.Njj(_.createFusionVariantModal())}),e.EFF(1," Open Fusion Variant Builder "),e.k0s()}}function Mh(u,b){1&u&&(e.j41(0,"nz-space",23),e.DNE(1,y0,2,1,"span",25)(2,C0,2,0,"button",26),e.k0s())}function gl(u,b){if(1&u){const a=e.RV6();e.j41(0,"cvc-variant-quick-add-form",29),e.nI1(1,"ngrxPush"),e.nI1(2,"ngrxPush"),e.bIt("cvcOnCreate",function(_){e.eBV(a);const ee=e.XpG(2);return e.Njj(ee.onSelectOrCreate(_))}),e.k0s()}if(2&u){const a=e.XpG().$implicit,h=e.XpG();e.Y8G("cvcSearchString",a)("cvcFeatureId",e.bMT(1,3,h.onFeatureId$))("cvcFeatureName",e.bMT(2,5,h.onFeatureName$))}}function $d(u,b){if(1&u&&e.DNE(0,Mh,3,0,"nz-space",23)(1,gl,3,7,"cvc-variant-quick-add-form",24),2&u){const a=e.XpG();e.vxM("FUSION"==a.selectedFeatureType?0:1)}}const Pp=qi(Mi(),$o());let Sh=(()=>{class u extends Pp{constructor(a,h,_,ee,ft){super(),this.taq=a,this.tq=h,this.featureQuery=_,this.changeDetectorRef=ee,this.modal=ft,this.onModel$=new Un.c,this.defaultOptions={props:{label:"Variant",placeholder:"Search Variants",requireFeature:!0,requireFeaturePlaceholderFn:nn=>`Search ${nn} Variants`,requireFeaturePrompt:"Select a Feature to search its Variants",isMultiSelect:!1,entityName:{singular:"Variant",plural:"Variants"},showManagerBtn:!1,minSearchStrLength:0}},this.onFeatureName$=new dn.t(void 0),this.onVid$=new Ni.m,this.onShowMgrClick$=new V.B,this.showMgr$=this.onShowMgrClick$.pipe((0,Ma.S)((nn,Rn)=>!nn,!1))}ngAfterViewInit(){this.configureBaseField(),this.configureEntitySelectField({typeaheadQuery:this.taq,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent,minSearchStrLength:this.field.props.minSearchStrLength}),this.state&&this.state.formReady$?this.state.formReady$.pipe((0,qt.p)(a=>a),(0,hs.s)(1),(0,pn.s)(this)).subscribe(a=>{this.configureField()}):this.configureField()}configureField(){this.configureStateConnections(),this.onVid$.pipe((0,pn.s)(this)).subscribe(),this.onVid$.next(this.formControl.value),this.onModel$=(0,po.z)([this.onFeatureId$,this.onSearch$]).pipe((0,me.T)(([a,h])=>({featureId:a,name:h}))),this.onValueChange$.pipe((0,Yi.E)(this.onVid$),(0,pn.s)(this)).subscribe(([a,h])=>{Array.isArray(a)&&this.onVid$.next(a)})}configureStateConnections(){if(this.state&&this.props.requireFeature){if(!this.state?.fields.featureId$)return void console.error(`${this.field.id} requireFeature is set, but no featureId$ subject found on state.`);this.onFeatureId$=this.state.fields.featureId$,this.onFeatureId$.pipe((0,pn.s)(this)).subscribe(a=>{this.onFeatureId(a)})}}getTypeaheadVarsFn(a){return{name:a,featureId:this.selectedFeatureId}}getTypeaheadResultsFn(a){return a.data.variantsTypeahead}getTagQueryVarsFn(a){return{variantId:a}}getTagQueryResultsFn(a){return a.data.variant}getSelectedItemOptionFn(a){return{value:a.id,label:a.name}}getSelectOptionsFn(a,h){return a.map((_,ee)=>({label:h.get(ee)||_.name,value:_.id}))}showAddBehavior(a,h){const _=a.toLowerCase();return a.length>=3&&!h.some(ee=>ee.name.toLowerCase()===_)}onSelectOrCreate(a){this.onPopulate$.next(a.id),this.formControl.setValue(a.id),this.props.isNewlyCreatedCallback&&this.props.isNewlyCreatedCallback(a.new)}onFeatureId(a){this.selectedFeatureId=a,!a&&this.props.requireFeature?(this.resetField(),this.props.description=this.props.requireFeaturePrompt,this.props.placeholder="Select a Variant",this.props.extraType="prompt",this.onFeatureName$.next(void 0)):a&&(this.props.description=void 0,this.props.extraType=void 0,Vs(this.featureQuery.fetch({featureId:a},{fetchPolicy:"cache-first"})).then(({data:h})=>{h?.feature?.name?(this.selectedFeatureType=h.feature.featureType,this.selectedFeature=h.feature,this.props.placeholder=this.props.requireFeature?this.props.requireFeaturePlaceholderFn(h.feature.name):this.props.placeholder,this.onFeatureName$.next(h.feature.name)):console.error(`${this.field.id} could not fetch feature name for Feature:${a}.`)}))}createFusionVariantModal(){const a=this.modal.create({nzTitle:"Add New Fusion Variant",nzContent:u0.aS,nzData:{feature:this.selectedFeature},nzFooter:null,nzWidth:"60%"});a.getContentComponent(),a.afterClose.pipe((0,pn.s)(this)).subscribe(h=>{h.variantId&&(this.onSelectOrCreate({id:h.variantId,new:!0}),this.onVid$.next(h.variantId))})}static#e=this.\u0275fac=function(h){return new(h||u)(e.rXU(xn.duD),e.rXU(xn.y3W),e.rXU(xn.$TJ),e.rXU(e.gRc),e.rXU(oi.N_))};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["ng-component"]],viewQuery:function(h,_){if(1&h&&e.GBs(ml,5,e.C4Q),2&h){let ee;e.mGM(ee=e.lsd())&&(_.optionTemplates=ee)}},features:[e.Vt3],decls:20,vars:41,consts:[["selectedTemplate",""],["addVariant",""],["optionTemplates",""],["noAliases",""],[3,"nzGutter"],["nzFlex","auto"],["nz-tooltip","","nzTooltipTitle","Select a Feature to enable field.",3,"nzTooltipTrigger"],[3,"cvcOnSearch","cvcOnOpenChange","cvcOnModelChange","cvcAddEntity","cvcAddEntityModel","cvcAddEntityBehavior","cvcMinSearchStrLength","cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcDisabled","cvcOptions","cvcSelectOpen","cvcShowError","cvcLoading","cvcParamName"],["nzFlex","50px",4,"ngIf"],["nzSpan","24","class","manager-drawer",4,"ngIf"],[4,"ngrxLet"],["nzFlex","50px"],["type","button","nz-button","","nzBlock","",1,"manager-button",3,"click"],["nz-icon","",3,"ngClass","nzType"],["nzSpan","24",1,"manager-drawer"],[3,"cvcSelectedIdsChange","cvcSelectedIds"],[4,"ngFor","ngForOf"],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf","ngIfElse"],["nz-typography","","nzType","secondary","nz-tooltip","",3,"nzTooltipTitle","innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcOnClose","cvcCacheId","cvcContext","cvcMode"],["nzDirection","vertical"],[3,"cvcSearchString","cvcFeatureId","cvcFeatureName"],["nz-typography","",4,"nzSpaceItem"],["nz-button","","nzType","primary",3,"click",4,"nzSpaceItem"],["nz-typography",""],["nz-button","","nzType","primary",3,"click"],[3,"cvcOnCreate","cvcSearchString","cvcFeatureId","cvcFeatureName"]],template:function(h,_){if(1&h){const ee=e.RV6();e.j41(0,"nz-row",4)(1,"nz-col",5)(2,"span",6),e.nI1(3,"ngrxPush"),e.j41(4,"cvc-entity-select",7),e.nI1(5,"ngrxPush"),e.nI1(6,"ngrxPush"),e.nI1(7,"ngrxPush"),e.nI1(8,"ngrxPush"),e.nI1(9,"ngrxPush"),e.nI1(10,"ngrxPush"),e.nI1(11,"ngrxPush"),e.bIt("cvcOnSearch",function(nn){return e.eBV(ee),e.Njj(_.onSearch$.next(nn))})("cvcOnOpenChange",function(nn){return e.eBV(ee),e.Njj(_.onOpenChange$?_.onOpenChange$.next(nn):null)})("cvcOnModelChange",function(nn){return e.eBV(ee),e.Njj(_.props.change&&_.props.change(_.field,nn))}),e.k0s()()(),e.DNE(12,h0,6,9,"nz-col",8)(13,p0,3,3,"nz-col",9),e.nI1(14,"ngrxPush"),e.k0s(),e.DNE(15,v0,3,3,"ng-container",10)(16,_0,2,3,"ng-template",null,0,e.C5r)(18,$d,2,1,"ng-template",null,1,e.C5r)}if(2&h){const ee=e.sdS(17),ft=e.sdS(19);e.Y8G("nzGutter",e.lJ4(40,B1)),e.R7$(2),e.Y8G("nzTooltipTrigger",_.props.requireFeature&&!e.bMT(3,22,_.onFeatureId$)?"hover":null),e.R7$(2),e.Y8G("cvcAddEntity",ft)("cvcAddEntityModel",e.bMT(5,24,_.onModel$))("cvcAddEntityBehavior",_.showAddBehavior)("cvcMinSearchStrLength",_.props.minSearchStrLength)("cvcSelectMode",_.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",ee)("cvcFormControl",_.formControl)("cvcFormlyAttributes",_.field)("cvcEntityName",_.props.entityName)("cvcPlaceholder",_.props.placeholder)("cvcResults",e.bMT(6,26,_.result$))("cvcDisabled",_.props.requireFeature&&!e.bMT(7,28,_.onFeatureId$))("cvcOptions",e.bMT(8,30,_.selectOption$))("cvcSelectOpen",e.bMT(9,32,_.selectOpen$))("cvcShowError",_.showError)("cvcLoading",e.bMT(10,34,_.isLoading$))("cvcParamName",e.bMT(11,36,_.onFeatureName$)),e.R7$(8),e.Y8G("ngIf",_.props.showManagerBtn),e.R7$(),e.Y8G("ngIf",e.bMT(14,38,_.showMgr$)),e.R7$(2),e.Y8G("ngrxLet",_.onSearch$)}},styles:[".typeahead-match[_ngcontent-%COMP%]{font-weight:700}.hide-dropdown[_ngcontent-%COMP%]{display:none}  nz-input-group{border-color:#d9d9d9!important}"],changeDetection:0})}return u})();const Fp={types:[{name:"variant-select",wrappers:["form-field"],component:Sh},{name:"variant-multi-select",wrappers:["form-field"],component:Sh,defaultOptions:{props:{label:"Variants",isMultiSelect:!0}}}]};let Qf=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,jn,Ft._,En,Go.P,ge.i,Tc,Oa,Kr,xl,Ri.F,xs.y,g.qy.forChild(Fp),t.YN,Cn.$,rt.jl,Kn.Zw,G.PQ,L.f3,Z.Y3,F.j,oi.U6,Qe.DH,qe.kT,Kn.Zw,Yo.Ti,dt.IJ,ns.Cu,G.PQ,L.f3,Z.Y3,F.j,ut,gi.MC,no.$G,Gn.T,hn.Qt,qe.kT,oi.U6,on.pc,t.X1]})}return u})();e.wjB(Sh,function(){return[M.YU,M.Sq,M.bT,Wt,tn.b,Ci.Nj,Kn.aO,di.c,ho.p,L.Uq,L.e,Z.Dn,qe.Di,hn.LH,on.U5,on.Dq,fl,p2]},function(){return[Xr.M,Ci.L9]});const b0=["optionTemplates"];function Jf(u,b){if(1&u&&(e.qex(0),e.j41(1,"em"),e.nrm(2,"span",8),e.nI1(3,"highlightTypeahead"),e.k0s(),e.bVm()),2&u){const a=e.XpG(2).$implicit,h=e.XpG().ngrxLet;e.R7$(2),e.Y8G("innerHtml",e.i5U(3,1,a.soid,h),e.npT)}}function f2(u,b){if(1&u&&(e.nrm(0,"cvc-entity-tag",5),e.j41(1,"span",6),e.DNE(2,Jf,4,4,"ng-container",7),e.k0s()),2&u){const a=e.XpG().$implicit,h=e.XpG().ngrxLet;e.Y8G("cvcDisableLink",!0)("cvcCacheId",a.__typename+":"+a.id)("cvcEmphasize",h),e.R7$(2),e.Y8G("ngIf",a.soid)}}function m2(u,b){1&u&&(e.qex(0),e.DNE(1,f2,3,4,"ng-template",null,1,e.C5r),e.bVm())}function Zf(u,b){if(1&u&&(e.qex(0),e.DNE(1,m2,3,0,"ng-container",4),e.nI1(2,"ngrxPush"),e.bVm()),2&u){const a=e.XpG();e.R7$(),e.Y8G("ngForOf",e.bMT(2,1,a.result$))}}function qf(u,b){if(1&u){const a=e.RV6();e.j41(0,"div",9)(1,"cvc-entity-tag",10),e.bIt("cvcOnClose",function(){const _=e.eBV(a).$implicit,ee=e.XpG();return e.Njj(ee.onTagClose$.next(_.nzValue))}),e.k0s()()}if(2&u){const a=b.$implicit,h=e.XpG();e.R7$(),e.Y8G("cvcCacheId","VariantType:"+a.nzValue)("cvcContext",h.props.isMultiSelect?"multi-select-item":"select-item")("cvcMode",h.props.isMultiSelect?"default":"closeable")}}const Ap=qi(Mi(),$o());let Rp=(()=>{class u extends Ap{constructor(a,h,_){super(),this.taq=a,this.tq=h,this.changeDetectorRef=_,this.defaultOptions={props:{entityName:{singular:"VariantType",plural:"VariantTypes"},isMultiSelect:!1,placeholders:{default:"Search Variant Types",multiDefault:"Select VariantType(s)"},description:'Add one or more variant types from the <a href="http://www.sequenceontology.org/browser/" target="_blank">Sequence Ontology</a> (e.g., missense, loss-of-function). Be specific as possible, avoid the addition of root concepts, and use the sequence_variant tree of the sequence ontology.'}},this.placeholder$=new dn.t(this.defaultOptions.props.placeholders.default)}ngAfterViewInit(){this.configureBaseField(),this.configureStateConnections(),this.configureEntitySelectField({typeaheadQuery:this.taq,typeaheadParam$:void 0,tagQuery:this.tq,getTypeaheadVarsFn:this.getTypeaheadVarsFn,getTypeaheadResultsFn:this.getTypeaheadResultsFn,getTagQueryVarsFn:this.getTagQueryVarsFn,getTagQueryResultsFn:this.getTagQueryResultsFn,getSelectedItemOptionFn:this.getSelectedItemOptionFn,getSelectOptionsFn:this.getSelectOptionsFn,changeDetectorRef:this.changeDetectorRef,selectOpen$:this.selectOpen$,selectComponent:this.selectComponent}),this.configurePlaceholders()}configureStateConnections(){}configurePlaceholders(){}getTypeaheadVarsFn(a){return{name:a}}getTypeaheadResultsFn(a){return a.data.variantTypeTypeahead}getTagQueryVarsFn(a){return{id:a}}getTagQueryResultsFn(a){return a.data.variantType}getSelectedItemOptionFn(a){return{value:a.id,label:a.name}}getSelectOptionsFn(a,h){return a.map((_,ee)=>({label:h.get(ee)||_.name,value:_.id}))}static#e=this.\u0275fac=function(h){return new(h||u)(e.rXU(xn.Rqb),e.rXU(xn.q7o),e.rXU(e.gRc))};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["cvc-variant-type-select"]],viewQuery:function(h,_){if(1&h&&e.GBs(b0,5,e.C4Q),2&h){let ee;e.mGM(ee=e.lsd())&&(_.optionTemplates=ee)}},features:[e.Vt3],decls:8,vars:19,consts:[["selectedTemplate",""],["optionTemplates",""],[3,"cvcOnSearch","cvcOnOpenChange","cvcOnModelChange","cvcSelectMode","cvcCustomTemplate","cvcFormControl","cvcFormlyAttributes","cvcEntityName","cvcPlaceholder","cvcResults","cvcOptions","cvcShowError","cvcLoading"],[4,"ngrxLet"],[4,"ngFor","ngForOf"],[3,"cvcDisableLink","cvcCacheId","cvcEmphasize"],["nz-typography","","nzType","secondary"],[4,"ngIf"],["nz-typography","","nzType","secondary",3,"innerHtml"],[1,"ant-select-selection-item-content"],[3,"cvcOnClose","cvcCacheId","cvcContext","cvcMode"]],template:function(h,_){if(1&h){const ee=e.RV6();e.j41(0,"cvc-entity-select",2),e.nI1(1,"ngrxPush"),e.nI1(2,"ngrxPush"),e.nI1(3,"ngrxPush"),e.nI1(4,"ngrxPush"),e.bIt("cvcOnSearch",function(nn){return e.eBV(ee),e.Njj(_.onSearch$.next(nn))})("cvcOnOpenChange",function(nn){return e.eBV(ee),e.Njj(_.onOpenChange$?_.onOpenChange$.next(nn):null)})("cvcOnModelChange",function(nn){return e.eBV(ee),e.Njj(_.props.change&&_.props.change(_.field,nn))}),e.k0s(),e.DNE(5,Zf,3,3,"ng-container",3)(6,qf,2,3,"ng-template",null,0,e.C5r)}if(2&h){const ee=e.sdS(7);e.Y8G("cvcSelectMode",_.props.isMultiSelect?"multiple":"default")("cvcCustomTemplate",ee)("cvcFormControl",_.formControl)("cvcFormlyAttributes",_.field)("cvcEntityName",_.props.entityName)("cvcPlaceholder",e.bMT(1,11,_.placeholder$))("cvcResults",e.bMT(2,13,_.result$))("cvcOptions",e.bMT(3,15,_.selectOption$))("cvcShowError",_.showError)("cvcLoading",e.bMT(4,17,_.isLoading$)),e.R7$(5),e.Y8G("ngrxLet",_.onSearch$)}},dependencies:[M.Sq,M.bT,Ci.Nj,qe.Di,Wt,tn.b,Ci.L9,Xr.M],changeDetection:0})}return u})();const E0={types:[{name:"variant-type-select",wrappers:["form-field"],component:Rp,defaultOptions:{props:{label:"Variant Type"}}},{name:"variant-type-multi-select",wrappers:["form-field"],component:Rp,defaultOptions:{props:{isMultiSelect:!0,label:"Variant Types"}}}]};let T0=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,t.X1,g.qy.forChild(E0),Cn.$,Kn.Zw,Qe.DH,gi.MC,oi.U6,Z.Y3,F.j,L.f3,hn.Qt,on.pc,G.PQ,rt.jl,qe.kT,Gn.T,En,jn,ge.i,Ft._]})}return u})(),Np=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,li,yr,Fr,ds,$n,Eo,Ne,Hc,Ys,wi,Ha,Cc,Wi,Ec,Wo,u1,X1,rd,Iu,Bh,_d,P1,Ed,Ru,ah,uh,_a,Bi,zo,R4,Qf,T0]})}return u})();const kp=()=>[6,6];function z0(u,b){if(1&u&&e.EFF(0),2&u){const a=e.XpG();e.SpI(" ",a.props.addFormTitle,"\n")}}let g2=class G8 extends g.cm{constructor(){super(),this.contentTemplate$=new Ni.m}ngAfterViewInit(){this.field.props&&this.field.props.addFormContent?this.contentTemplate$.next(this.field.props.addFormContent):console.error(`${this.field.id} add-entity-form wrapper failed to find parent field's props.addFormContent TemplateRef.`)}static#e=this.\u0275fac=function(a){return new(a||G8)};static#t=this.\u0275cmp=e.VBU({type:G8,selectors:[["cvc-add-entity-form-wrapper"]],features:[e.Vt3],decls:10,vars:7,consts:[["fieldComponent",""],["titleTemplate",""],[3,"nzGutter"],["nzFlex","auto"],["nzFlex","20px"],["type","button","nz-button","","nzType","primary","nzSize","default","nzShape","circle","nz-popover","",3,"disabled","nzPopoverTitle","nzPopoverContent"],["nz-icon","","nzType","plus-circle","nzTheme","outline"]],template:function(a,h){if(1&a&&(e.j41(0,"nz-row",2)(1,"nz-col",3),e.eu8(2,null,0),e.k0s(),e.j41(4,"nz-col",4)(5,"button",5),e.nI1(6,"ngrxPush"),e.nrm(7,"span",6),e.k0s()()(),e.DNE(8,z0,1,1,"ng-template",null,1,e.C5r)),2&a){const _=e.sdS(9);e.Y8G("nzGutter",e.lJ4(6,kp)),e.R7$(5),e.Y8G("disabled",null==h.field.props?null:h.field.props.disabled)("nzPopoverTitle",_)("nzPopoverContent",e.bMT(6,4,h.contentTemplate$))}},dependencies:[Kn.aO,di.c,ho.p,gi.L_,Z.Dn,L.Uq,L.e,Ci.L9],styles:[".add-button[_ngcontent-%COMP%]{font-size:24px;color:#cfcfdf}"],changeDetection:0})};g2=(0,vi.Cg)([(0,pn.d)()],g2);const e3={wrappers:[{name:"add-entity-form",component:g2}]};let t3=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,g.qy.forChild(e3),Kn.Zw,gi.MC,Z.Y3,L.f3]})}return u})();function M0(u,b){1&u&&e.nrm(0,"formly-field",2),2&u&&e.Y8G("field",b.$implicit)}const v2={size:"default"},Vp={wrappers:[{name:"form-card",component:(()=>{class u extends g.cm{get errorState(){return this.showError?"error":""}constructor(){super(),this.wrapperOptions={...v2}}ngOnInit(){this.props.formCardOptions&&(this.wrapperOptions={...this.wrapperOptions,...this.props.formCardOptions})}static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["cvc-form-card"]],features:[e.Vt3],decls:2,vars:3,consts:[[3,"nzTitle","nzSize"],[3,"field",4,"ngFor","ngForOf"],[3,"field"]],template:function(h,_){if(1&h&&(e.j41(0,"nz-card",0),e.DNE(1,M0,1,1,"formly-field",1),e.k0s()),2&h){let ee;e.Y8G("nzTitle",_.wrapperOptions.title)("nzSize",null!==(ee=_.wrapperOptions.size)&&void 0!==ee?ee:"default"),e.R7$(),e.Y8G("ngForOf",_.field.fieldGroup)}},dependencies:[M.Sq,g.ac,Yo.cK]})}return u})()}]};let i3=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,t.YN,g.qy.forChild(Vp),L.f3,Yo.Ti,dt.IJ]})}return u})();const S0={wrappers:[{name:"form-footer",component:(()=>{class u extends g.cm{ngOnInit(){}static#e=this.\u0275fac=(()=>{let a;return function(_){return(a||(a=e.xGo(u)))(_||u)}})();static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["cvc-form-footer"]],features:[e.Vt3],decls:4,vars:0,consts:[["fieldComponent",""],[1,"form-footer"],["nzSpan","24",1,"submit-col"]],template:function(h,_){1&h&&(e.j41(0,"nz-row",1)(1,"nz-col",2),e.eu8(2,null,0),e.k0s()())},dependencies:[L.Uq,L.e],styles:[".form-footer[_ngcontent-%COMP%]{margin-top:1em;border-radius:8px;background-color:#f0f0f0;padding:1em}.submit-col[_ngcontent-%COMP%]{text-align:right}"],changeDetection:0})}return u})()}]};let Lp=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,L.f3,g.qy.forChild(S0)]})}return u})();var D0=c(2242),Bp=c(2e3),_2=c(9541);let r3=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,Z.Y3,L.f3,Yo.Ti,_2.hM,Bp.WF,Hr.rD,Gn.T,qe.kT,Re.s]})}return u})(),s3=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,Kn.Zw,aa.Yb,ns.Cu]})}return u})();var O0=c(5312);const X8={VALID:"success",INVALID:"error",PENDING:"processing",DISABLED:"default"};let a3=(()=>{class u{constructor(){this.tagColor="default"}set cvcFormControlStatus(a){this._status=a,this.tagColor=a?X8[a]:"default"}get cvcFormControlStatus(){return this._status}static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["cvc-form-status-tag"]],inputs:{cvcFormControlStatus:"cvcFormControlStatus"},decls:3,vars:4,consts:[[3,"nzColor"]],template:function(h,_){1&h&&(e.j41(0,"nz-tag",0),e.EFF(1),e.nI1(2,"lowercase"),e.k0s()),2&h&&(e.Y8G("nzColor",_.tagColor),e.R7$(),e.SpI(" ",_.cvcFormControlStatus?e.bMT(2,2,_.cvcFormControlStatus):"UNKNOWN","\n"))},dependencies:[Gn.s,M.GH]})}return u})();const jd=(u,b)=>({key:u,ctrl:b});function c3(u,b){if(1&u&&(e.j41(0,"span"),e.EFF(1),e.k0s()),2&u){const a=e.XpG(2).ctrl;e.R7$(),e.SpI(" ",a.value," ")}}function l3(u,b){1&u&&(e.j41(0,"span",9),e.EFF(1," undefined "),e.k0s())}function u3(u,b){if(1&u&&(e.j41(0,"nz-list-item")(1,"nz-list-item-meta")(2,"nz-list-item-meta-title"),e.EFF(3),e.k0s(),e.j41(4,"nz-list-item-meta-description"),e.DNE(5,c3,2,1,"span",6)(6,l3,2,0,"span",7),e.k0s()(),e.j41(7,"nz-list-item-extra"),e.nrm(8,"cvc-form-status-tag",8),e.k0s()()),2&u){const a=e.XpG(),h=a.ctrl,_=a.key;e.R7$(3),e.SpI(" ",_," "),e.R7$(2),e.Y8G("ngIf",h.value),e.R7$(),e.Y8G("ngIf",!h.value),e.R7$(2),e.Y8G("cvcFormControlStatus",h.status)}}function I0(u,b){}function d3(u,b){if(1&u&&e.DNE(0,I0,0,0,"ng-template",12),2&u){const a=b.$implicit;e.XpG(3);const h=e.sdS(3);e.Y8G("ngTemplateOutlet",h)("ngTemplateOutletContext",e.l_i(2,jd,a.key,a.value))}}function h3(u,b){if(1&u&&(e.j41(0,"strong"),e.EFF(1),e.k0s()),2&u){const a=e.XpG(2).key;e.R7$(),e.JRh(a)}}function p3(u,b){if(1&u&&(e.j41(0,"nz-list-item")(1,"nz-card",10)(2,"nz-list",11),e.DNE(3,d3,1,5,null,5),e.nI1(4,"keyvalue"),e.k0s()(),e.DNE(5,h3,2,1,"ng-template",null,2,e.C5r),e.k0s()),2&u){const a=e.XpG(),h=a.ctrl,_=a.key;e.R7$(),e.Y8G("nzTitle",_),e.R7$(2),e.Y8G("ngForOf",e.bMT(4,2,h.controls))}}function f3(u,b){if(1&u&&e.DNE(0,u3,9,4,"nz-list-item",6)(1,p3,7,4,"nz-list-item",6),2&u){const a=b.ctrl;e.Y8G("ngIf",!a.controls),e.R7$(),e.Y8G("ngIf",a.controls)}}function m3(u,b){}function g3(u,b){if(1&u&&e.DNE(0,m3,0,0,"ng-template",12),2&u){const a=b.$implicit;e.XpG();const h=e.sdS(3);e.Y8G("ngTemplateOutlet",h)("ngTemplateOutletContext",e.l_i(2,jd,a.key,a.value))}}function $p(u,b){if(1&u&&(e.qex(0),e.j41(1,"nz-list",4),e.DNE(2,f3,2,2,"ng-template",null,1,e.C5r),e.k0s(),e.DNE(4,g3,1,5,null,5),e.nI1(5,"keyvalue"),e.bVm()),2&u){const a=b.ngIf;e.R7$(4),e.Y8G("ngForOf",e.bMT(5,1,a.controls))}}function Q8(u,b){1&u&&e.EFF(0," No AbstractFormControl provided. ")}let J8=(()=>{class u{set cvcAbstractControl(a){if(!a)throw new Error("cvc-form-debug-field-list requires valid cvcFormControl Input.");this._cvcFormControl=a,this.formControl=a}get cvcFormControl(){return this._cvcFormControl}constructor(){}ngOnInit(){}static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["cvc-form-debug-field-list"]],inputs:{cvcAbstractControl:"cvcAbstractControl"},decls:3,vars:2,consts:[["noFormControl",""],["ctrlTemplateRef",""],["cardExtra",""],[4,"ngIf","ngIfElse"],["nzSize","small"],[4,"ngFor","ngForOf"],[4,"ngIf"],["style","padding: 0px 4px; color: white; background-color: #ccc",4,"ngIf"],[3,"cvcFormControlStatus"],[2,"padding","0px 4px","color","white","background-color","#ccc"],["nzSize","small",2,"width","100%",3,"nzTitle"],["nzSize","small",2,"padding","0"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(h,_){if(1&h&&e.DNE(0,$p,6,3,"ng-container",3)(1,Q8,1,0,"ng-template",null,0,e.C5r),2&h){const ee=e.sdS(2);e.Y8G("ngIf",_.formControl)("ngIfElse",ee)}},dependencies:[M.Sq,M.bT,M.T3,Yo.cK,Hr.eE,Hr.lQ,Hr.qx,Hr.mf,Hr.YU,Hr.$2,a3,M.lG],styles:["[_nghost-%COMP%]     nz-card .ant-card-body{padding:6px 0}"]})}return u})();function Hp(u,b){if(1&u&&(e.qex(0),e.nrm(1,"ngx-json-viewer",9),e.bVm()),2&u){const a=e.XpG();e.R7$(),e.Y8G("json",a.watchModel)}}function Z8(u,b){if(1&u&&(e.qex(0),e.j41(1,"nz-descriptions",10)(2,"nz-descriptions-item",11),e.nrm(3,"cvc-form-status-tag",12),e.k0s(),e.j41(4,"nz-descriptions-item",13),e.EFF(5),e.k0s(),e.j41(6,"nz-descriptions-item",14),e.EFF(7),e.k0s(),e.j41(8,"nz-descriptions-item",15),e.EFF(9),e.k0s(),e.j41(10,"nz-descriptions-item",16),e.EFF(11),e.k0s(),e.j41(12,"nz-descriptions-item",17),e.EFF(13),e.k0s()(),e.bVm()),2&u){const a=e.XpG();e.R7$(),e.Y8G("nzColumn",1),e.R7$(2),e.Y8G("cvcFormControlStatus",null==a.cvcForm?null:a.cvcForm.status),e.R7$(2),e.SpI(" ",null==a.cvcForm?null:a.cvcForm.pending," "),e.R7$(2),e.SpI(" ",null==a.cvcForm?null:a.cvcForm.touched," "),e.R7$(2),e.SpI(" ",null==a.cvcForm?null:a.cvcForm.valid," "),e.R7$(2),e.SpI(" ",null==a.cvcForm?null:a.cvcForm.dirty," "),e.R7$(2),e.SpI(" ",null==a.cvcForm?null:a.cvcForm.enabled," ")}}function q8(u,b){if(1&u&&(e.qex(0),e.nrm(1,"cvc-form-debug-field-list",18),e.bVm()),2&u){const a=e.XpG();e.R7$(),e.Y8G("cvcAbstractControl",a.cvcForm)}}function em(u,b){1&u&&(e.qex(0),e.EFF(1," State Content "),e.bVm())}function tm(u,b){if(1&u&&(e.j41(0,"nz-row")(1,"nz-col",19),e.EFF(2," Form Details "),e.k0s(),e.j41(3,"nz-col",20),e.nrm(4,"cvc-form-status-tag",12),e.k0s()()),2&u){const a=e.XpG();e.R7$(4),e.Y8G("cvcFormControlStatus",null==a.cvcForm?null:a.cvcForm.status)}}let w0=class Y8{constructor(b){this.cdr=b,this.selectedIndex=0}ngOnInit(){if(!this.cvcForm)throw new Error("cvc-form-debug requires valid cvcForm Input.");this.valueChange$=new dn.t(this.cvcForm.value),this.statusChange$=new dn.t(this.cvcForm.status),this.formChange$=fr([this.statusChange$,this.valueChange$]),this.watchModel=this.cvcModel,this.subscriptions=[this.cvcForm.valueChanges.subscribe(b=>{this.watchModel={...this.cvcModel},this.valueChange$.next(b)}),this.cvcForm.statusChanges.subscribe(b=>{this.statusChange$.next(b)}),this.formChange$.subscribe(b=>{this.cdr.detectChanges()})]}static#e=this.\u0275fac=function(a){return new(a||Y8)(e.rXU(e.gRc))};static#t=this.\u0275cmp=e.VBU({type:Y8,selectors:[["cvc-form-debug"]],inputs:{cvcForm:"cvcForm",cvcModel:"cvcModel"},decls:14,vars:7,consts:[["cardTitle",""],["nzSize","small","nzBordered","true",3,"nzTitle"],["nzSize","small",3,"nzSelectedIndexChange","nzSelectedIndex"],["nzTitle","Model"],["nzTitle","Controls"],["nzTitle","State"],["nzTitle","Form Status"],[3,"ngSwitch"],[4,"ngSwitchCase"],[3,"json"],["nzBordered","","nzSize","small",3,"nzColumn"],["nzTitle","status"],[3,"cvcFormControlStatus"],["nzTitle","pending"],["nzTitle","touched"],["nzTitle","valid"],["nzTitle","dirty"],["nzTitle","enabled"],[3,"cvcAbstractControl"],["nzFlex","2"],["nzFlex","3",1,"form-status-col"]],template:function(a,h){if(1&a){const _=e.RV6();e.j41(0,"nz-card",1)(1,"nz-card-tab")(2,"nz-tabset",2),e.mxI("nzSelectedIndexChange",function(ft){return e.eBV(_),e.DH7(h.selectedIndex,ft)||(h.selectedIndex=ft),e.Njj(ft)}),e.nrm(3,"nz-tab",3)(4,"nz-tab",4)(5,"nz-tab",5)(6,"nz-tab",6),e.k0s()(),e.qex(7,7),e.DNE(8,Hp,2,1,"ng-container",8)(9,Z8,14,7,"ng-container",8)(10,q8,2,1,"ng-container",8)(11,em,2,0,"ng-container",8),e.bVm(),e.k0s(),e.DNE(12,tm,5,1,"ng-template",null,0,e.C5r)}if(2&a){const _=e.sdS(13);e.Y8G("nzTitle",_),e.R7$(2),e.R50("nzSelectedIndex",h.selectedIndex),e.R7$(5),e.Y8G("ngSwitch",h.selectedIndex),e.R7$(),e.Y8G("ngSwitchCase",0),e.R7$(),e.Y8G("ngSwitchCase",3),e.R7$(),e.Y8G("ngSwitchCase",1),e.R7$(),e.Y8G("ngSwitchCase",2)}},dependencies:[M.ux,M.e1,L.Uq,L.e,Yo.cK,Yo.RO,_2.JZ,_2.rE,Bp.xA,Bp.gr,Re.J,J8,a3],styles:["[_nghost-%COMP%]{display:block}.form-status-col[_ngcontent-%COMP%]{text-align:right}.form-status-col[_ngcontent-%COMP%]   nz-tag[_ngcontent-%COMP%]:last-child{margin-right:0}"],changeDetection:0})};w0=(0,vi.Cg)([(0,pn.d)({arrayName:"subscriptions"})],w0);const v3=()=>[8,8];function y2(u,b){if(1&u&&(e.j41(0,"nz-col",4),e.nrm(1,"cvc-form-debug",5),e.k0s()),2&u){const a=e.XpG();e.Y8G("nzSpan",8),e.R7$(),e.Y8G("cvcForm",a.form)("cvcModel",a.model)}}let b2=class W8 extends g.cm{constructor(){super()}get errorState(){return this.showError?"error":""}ngOnInit(){this.props.showDevPanel=!O0.c.production&&(this.props.showDevPanel||false)}static#e=this.\u0275fac=function(a){return new(a||W8)};static#t=this.\u0275cmp=e.VBU({type:W8,selectors:[["cvc-form-layout-wrapper"]],features:[e.Vt3],decls:5,vars:4,consts:[["fieldComponent",""],[3,"nzGutter"],[1,"form-col",3,"nzSpan"],["class","status-col",3,"nzSpan",4,"ngIf"],[1,"status-col",3,"nzSpan"],[3,"cvcForm","cvcModel"]],template:function(a,h){1&a&&(e.j41(0,"nz-row",1)(1,"nz-col",2),e.eu8(2,null,0),e.k0s(),e.DNE(4,y2,2,3,"nz-col",3),e.k0s()),2&a&&(e.Y8G("nzGutter",e.lJ4(3,v3)),e.R7$(),e.Y8G("nzSpan",h.props.showDevPanel?16:24),e.R7$(3),e.Y8G("ngIf",h.props.showDevPanel))},dependencies:[M.bT,L.Uq,L.e,w0],changeDetection:0})};b2=(0,vi.Cg)([(0,pn.d)({arrayName:"subscriptions"})],b2);const x0={wrappers:[{name:"form-layout",component:b2}]};let P0=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,g.qy.forChild(x0),Kn.Zw,Yo.Ti,Z.Y3,Gn.T,_2.hM,gi.MC,Hr.rD,L.f3,D0.i,s3,r3,Re.s]})}return u})();function F0(u,b){if(1&u&&(e.j41(0,"nz-col",4),e.nrm(1,"formly-field",5),e.k0s()),2&u){let a;const h=b.$implicit,_=e.XpG(2);e.Y8G("nzSpan",null!==(a=_.wrapperOptions.span)&&void 0!==a?a:null),e.R7$(),e.Y8G("field",h)}}function _3(u,b){if(1&u&&e.DNE(0,F0,2,2,"nz-col",3),2&u){const a=e.XpG();e.Y8G("ngForOf",a.field.fieldGroup)}}function A0(u,b){if(1&u&&(e.j41(0,"nz-col",8),e.nrm(1,"formly-field",5),e.k0s()),2&u){const a=b.$implicit,h=e.XpG(3);e.Y8G("nzFlex",h.wrapperOptions.flex),e.R7$(),e.Y8G("field",a)}}function Ud(u,b){if(1&u&&(e.qex(0),e.DNE(1,A0,2,2,"nz-col",7),e.bVm()),2&u){const a=e.XpG(2);e.R7$(),e.Y8G("ngForOf",a.field.fieldGroup)}}function Aa(u,b){if(1&u&&(e.j41(0,"nz-col",10),e.nrm(1,"formly-field",5),e.k0s()),2&u){let a,h,_,ee,ft,nn;const Rn=b.$implicit,xi=e.XpG(3);e.Y8G("nzXs",null!==(a=xi.wrapperOptions.responsive.xs)&&void 0!==a?a:null)("nzSm",null!==(h=xi.wrapperOptions.responsive.sm)&&void 0!==h?h:null)("nzMd",null!==(_=xi.wrapperOptions.responsive.md)&&void 0!==_?_:null)("nzLg",null!==(ee=xi.wrapperOptions.responsive.lg)&&void 0!==ee?ee:null)("nzXl",null!==(ft=xi.wrapperOptions.responsive.xl)&&void 0!==ft?ft:null)("nzXXl",null!==(nn=xi.wrapperOptions.responsive.xxl)&&void 0!==nn?nn:null),e.R7$(),e.Y8G("field",Rn)}}function ya(u,b){if(1&u&&(e.qex(0),e.DNE(1,Aa,2,7,"nz-col",9),e.bVm()),2&u){const a=e.XpG(2);e.R7$(),e.Y8G("ngForOf",a.field.fieldGroup)}}function R0(u,b){if(1&u&&(e.j41(0,"nz-col",4),e.nrm(1,"formly-field",5),e.k0s()),2&u){const a=b.$implicit,h=b.index,_=e.XpG(3);e.Y8G("nzSpan",_.wrapperOptions.spanIndexed[h]),e.R7$(),e.Y8G("field",a)}}function nm(u,b){if(1&u&&(e.qex(0),e.DNE(1,R0,2,2,"nz-col",3),e.bVm()),2&u){const a=e.XpG(2);e.R7$(),e.Y8G("ngForOf",a.field.fieldGroup)}}function y3(u,b){if(1&u&&(e.j41(0,"nz-col",10),e.nrm(1,"formly-field",5),e.k0s()),2&u){let a,h,_,ee,ft,nn;const Rn=b.$implicit,xi=b.index,Co=e.XpG(3);e.Y8G("nzXs",null!==(a=Co.wrapperOptions.responsiveIndexed[xi].xs)&&void 0!==a?a:null)("nzSm",null!==(h=Co.wrapperOptions.responsiveIndexed[xi].sm)&&void 0!==h?h:null)("nzMd",null!==(_=Co.wrapperOptions.responsiveIndexed[xi].md)&&void 0!==_?_:null)("nzLg",null!==(ee=Co.wrapperOptions.responsiveIndexed[xi].lg)&&void 0!==ee?ee:null)("nzXl",null!==(ft=Co.wrapperOptions.responsiveIndexed[xi].xl)&&void 0!==ft?ft:null)("nzXXl",null!==(nn=Co.wrapperOptions.responsiveIndexed[xi].xxl)&&void 0!==nn?nn:null),e.R7$(),e.Y8G("field",Rn)}}function im(u,b){if(1&u&&(e.qex(0),e.DNE(1,y3,2,7,"nz-col",9),e.bVm()),2&u){const a=e.XpG(2);e.R7$(),e.Y8G("ngForOf",a.field.fieldGroup)}}function om(u,b){if(1&u&&(e.j41(0,"nz-col",8),e.nrm(1,"formly-field",5),e.k0s()),2&u){const a=b.$implicit,h=b.index,_=e.XpG(3);e.Y8G("nzFlex",_.wrapperOptions.flexIndexed[h]),e.R7$(),e.Y8G("field",a)}}function N0(u,b){if(1&u&&(e.qex(0),e.DNE(1,om,2,2,"nz-col",7),e.bVm()),2&u){const a=e.XpG(2);e.R7$(),e.Y8G("ngForOf",a.field.fieldGroup)}}function k0(u,b){if(1&u&&(e.qex(0),e.DNE(1,Ud,2,1,"ng-container",6)(2,ya,2,1,"ng-container",6)(3,nm,2,1,"ng-container",6)(4,im,2,1,"ng-container",6)(5,N0,2,1,"ng-container",6),e.bVm()),2&u){const a=e.XpG();e.R7$(),e.Y8G("ngIf",a.wrapperOptions.flex),e.R7$(),e.Y8G("ngIf",a.wrapperOptions.responsive),e.R7$(),e.Y8G("ngIf",a.wrapperOptions.spanIndexed),e.R7$(),e.Y8G("ngIf",a.wrapperOptions.responsiveIndexed),e.R7$(),e.Y8G("ngIf",a.wrapperOptions.flexIndexed)}}const rm={gutter:[8,8],span:24},Up={wrappers:[{name:"form-row",component:(()=>{class u extends g.cm{constructor(){super(),this.wrapperOptions={...rm},this.topMargin="0"}ngOnInit(){this.props.formRowOptions&&(this.wrapperOptions={...this.wrapperOptions,...this.props.formRowOptions}),this.topMargin=Array.isArray(this.wrapperOptions.gutter)?this.wrapperOptions.gutter[1]>0?this.wrapperOptions.gutter[1]/2+"px":"0":this.wrapperOptions.gutter&&this.wrapperOptions.gutter>0?this.wrapperOptions.gutter+"px":"0"}static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275cmp=e.VBU({type:u,selectors:[["cvc-form-row"]],features:[e.Vt3],decls:5,vars:4,consts:[["defaultCol",""],[1,"form-row-wrapped",3,"nzGutter"],[4,"ngIf","ngIfElse"],[3,"nzSpan",4,"ngFor","ngForOf"],[3,"nzSpan"],[3,"field"],[4,"ngIf"],[3,"nzFlex",4,"ngFor","ngForOf"],[3,"nzFlex"],[3,"nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl",4,"ngFor","ngForOf"],[3,"nzXs","nzSm","nzMd","nzLg","nzXl","nzXXl"]],template:function(h,_){if(1&h&&(e.j41(0,"div")(1,"nz-row",1),e.DNE(2,_3,1,1,"ng-template",null,0,e.C5r)(4,k0,6,5,"ng-container",2),e.k0s()()),2&h){let ee;const ft=e.sdS(3);e.BMQ("style","margin-top: "+_.topMargin,e.$dS),e.R7$(),e.Y8G("nzGutter",null!==(ee=_.wrapperOptions.gutter)&&void 0!==ee?ee:null),e.R7$(3),e.Y8G("ngIf",_.wrapperOptions.flex||_.wrapperOptions.flexIndexed||_.wrapperOptions.spanIndexed||_.wrapperOptions.responsive||_.wrapperOptions.responsiveIndexed)("ngIfElse",ft)}},dependencies:[M.Sq,M.bT,L.Uq,L.e,g.ac],changeDetection:0})}return u})()}]};let Gp=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,t.X1,G.PQ,L.f3,g.qy.forChild(Up)]})}return u})(),V0=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({imports:[M.MD,P0,i3,Lp,En,Gp,t3]})}return u})(),Gd=(()=>{class u{static#e=this.\u0275fac=function(h){return new(h||u)};static#t=this.\u0275mod=e.$C({type:u});static#n=this.\u0275inj=e.G2t({providers:[{provide:g.hL,multi:!0,useFactory:ke,deps:[r.nX]}],imports:[g.qy.forRoot(U),t.X1,G.PQ,Pe,V0,Re.s,t.X1,g.qy,Pe,G.PQ,V0,Np]})}return u})()},5676:(Rt,De,c)=>{c.d(De,{UH:()=>ne,aS:()=>Oe,kf:()=>J,t_:()=>be});var t=c(1635),r=c(3953),g=c(9417),e=c(9145),M=c(8524),G=c(177),L=c(8927),B=c(513),A=c(1188),w=c(3617),I=c(9894),F=c(1226),X=c(2096),V=c(6912),x=c(4222);const ne=[{label:"+",value:e.OP3.Positive},{label:"-",value:e.OP3.Negative}],J=he=>!he.value||/^\d+$/.test(he.value),be=he=>!he.value||/ENST\d{11}\.\d{1,2}/.test(he.value);let Oe=class K8{#e;constructor(we,me){this.query=we,this.onVariantSelected=new r.bkB,this.#e=(0,r.WQX)(X.J9),this.nzModalData=(0,r.WQX)(X.or),this.layout="vertical",this.selectOrCreateFusionMutator=new F.E(me),this.form=new g.J3({}),this.model={fivePrimeTranscript:void 0,fivePrimeExonEnd:void 0,fivePrimeOffset:void 0,fivePrimeOffsetDirection:void 0,threePrimeTranscript:void 0,threePrimeExonStart:void 0,threePrimeOffsetDirection:void 0,ensemblVersion:void 0,referenceBuild:void 0,organizationId:void 0},this.options={};let de=!1,H=!1;if("Fusion"==this.nzModalData.feature?.featureInstance.__typename){const z=this.nzModalData.feature.featureInstance;de=z.fivePrimePartnerStatus!=e.hBv.Known,H=z.threePrimePartnerStatus!=e.hBv.Known}this.config=[{wrappers:["form-layout"],props:{showDevPanel:!1},fieldGroup:[{wrappers:["form-card"],props:{formCardOptions:{title:`New Fusion Variant for ${this.nzModalData.feature?.name}`}},fieldGroup:[{wrappers:["form-row"],props:{formRowOptions:{span:12}},fieldGroup:[{key:"referenceBuild",type:"reference-build-select",props:{required:!0}},{key:"ensemblVersion",type:"base-input",validators:{nccnVersionNumber:{expression:z=>!z.value||/^\d{2,3}$/.test(z.value),message:(z,Z)=>`"${Z.formControl?.value}" does not appear to be an Ensembl version number`}},props:{label:"Ensembl Version",description:"Enter a valid Ensembl database version (e.g. 75)",required:!0}}]},{wrappers:["form-row"],props:{formRowOptions:{span:6}},fieldGroup:[{key:"fivePrimeTranscript",type:"base-input",props:{label:"5' Transcript",required:!de,disabled:de,tooltip:"Specify a transcript ID, including version number (e.g. ENST00000348159.4) for the 5' exon you have selected"},validators:{isTranscriptId:{expression:be,message:"5' Transcript must be a valid, human, versioned, Ensembl transcript ID"}}},{key:"fivePrimeExonEnd",type:"base-input",validators:{isNumeric:{expression:J,message:"5' exon must be numeric"}},props:{label:"5' End Exon",required:!de,disabled:de,tooltip:"The exon number counted from the 5\u2019 end of the transcript."}},{key:"fivePrimeOffset",type:"base-input",validators:{isNumeric:{expression:J,message:"5' exon offset must be numeric"}},props:{label:"5' Exon Offset",tooltip:"A value representing the offset from the segment boundary.",required:!1,disabled:de}},{key:"fivePrimeOffsetDirection",type:"base-select",props:{label:"5' Exon Offset Direction",tooltip:"Negative values offset towards the 5\u2019 end of the transcript and positive values offset towards the 3\u2019 end of the transcript.",required:!0,placeholder:"5' Offset Direction",options:ne,multiple:!1},expressions:{"props.disabled":z=>!z.model.fivePrimeOffset,"props.required":z=>!!z.model.fivePrimeOffset}}]},{wrappers:["form-row"],props:{formRowOptions:{span:6}},fieldGroup:[{key:"threePrimeTranscript",type:"base-input",props:{required:!H,disabled:H,label:"3' Transcript",tooltip:"Specify a transcript ID, including version number (e.g. ENST00000348159.4) for the 3' exon you have selected"},validators:{isTranscriptId:{expression:be,message:"5' Transcript must be a valid, human, versioned, Ensembl transcript ID"}}},{key:"threePrimeExonStart",type:"base-input",validators:{isNumeric:{expression:J,message:"3' exon must be numeric"}},props:{label:"3' Start Exon",tooltip:"The exon number counted from the 3\u2019 end of the transcript.",required:!H,disabled:H}},{key:"threePrimeOffset",type:"base-input",validators:{isNumeric:{expression:J,message:"3' exon must be numeric"}},props:{label:"3' Exon Offset",disabled:H,required:!1,tooltip:"A value representing the offset from the segment boundary."}},{key:"threePrimeOffsetDirection",type:"base-select",props:{label:"3' Exon Offset Direction",tooltip:"Negative values offset towards the 5\u2019 end of the transcript and positive values offset towards the 3\u2019 end of the transcript.",required:!0,placeholder:"3' Offset Direction",options:ne,multiple:!1},expressions:{"props.disabled":z=>!z.model.threePrimeOffset,"props.required":z=>!!z.model.threePrimeOffset}}]},{wrappers:["form-row"],props:{formRowOptions:{span:24}},fieldGroup:[{key:"organizationId",type:"org-submit-button",props:{submitLabel:"Create Fusion Variant",align:"right"}}]}]}]}]}modelChange(we){we&&(this.model.fivePrimeOffset||(this.model={...this.model,fivePrimeOffsetDirection:void 0}),this.model.threePrimeOffset||(this.model={...this.model,threePrimeOffsetDirection:void 0}))}submitFusion(we){const me=H=>{if(H)return+H},de=this.nzModalData.feature?.id;if(we&&de){const H={fivePrimeTranscript:we.fivePrimeTranscript,fivePrimeExonEnd:me(we.fivePrimeExonEnd),fivePrimeOffset:me(we.fivePrimeOffset),fivePrimeOffsetDirection:we.fivePrimeOffsetDirection,threePrimeTranscript:we.threePrimeTranscript,threePrimeExonStart:me(we.threePrimeExonStart),threePrimeOffset:me(we.threePrimeOffset),threePrimeOffsetDirection:we.threePrimeOffsetDirection,referenceBuild:we.referenceBuild,ensemblVersion:+we.ensemblVersion};this.mutationState=this.selectOrCreateFusionMutator.mutate(this.query,{organizationId:we.organizationId,featureId:de,coordinates:H},{},z=>{if(z.createFusionVariant?.variant.id){const Z=z.createFusionVariant.variant.id;this.onVariantSelected.next(Z),this.#e&&this.#e.destroy({variantId:Z})}})}}static#t=this.\u0275fac=function(me){return new(me||K8)(r.rXU(e.j8M),r.rXU(x.N))};static#n=this.\u0275cmp=r.VBU({type:K8,selectors:[["cvc-fusion-variant-select-form"]],outputs:{onVariantSelected:"onVariantSelected"},standalone:!0,features:[r.aNF],decls:2,vars:6,consts:[["nz-form","",3,"ngSubmit","nzLayout","formGroup"],[3,"modelChange","form","fields","model","options"]],template:function(me,de){1&me&&(r.j41(0,"form",0),r.bIt("ngSubmit",function(){return de.submitFusion(de.model)}),r.j41(1,"formly-form",1),r.bIt("modelChange",function(z){return de.modelChange(z)}),r.k0s()()),2&me&&(r.Y8G("nzLayout",de.layout)("formGroup",de.form),r.R7$(),r.Y8G("form",de.form)("fields",de.config)("model",de.model)("options",de.options))},dependencies:[G.MD,g.X1,g.qT,g.cb,g.j4,L.PQ,L.CA,B.Zw,w.$,X.U6,A.iI,M.qy,M.aF,V.l],styles:["[_nghost-%COMP%]{display:block;width:100%}"],changeDetection:0})};Oe=(0,t.Cg)([(0,I.d)()],Oe)},5741:(Rt,De,c)=>{function t(B){let A={value:void 0,unset:void 0};return B&&B.trim().length>0?A.value=B.trim():A.unset=!0,A}function r(B){let A={value:void 0,unset:void 0};return void 0!==B?A.value=B:A.unset=!0,A}function g(B){return B?+B:void 0}c.d(De,{Kd:()=>L,cD:()=>e,pz:()=>r,q2:()=>t,tV:()=>g});var e=function(B){return B[B.NotApplicable=0]="NotApplicable",B[B.NoneFound=1]="NoneFound",B[B.Found=2]="Found",B}(e||{});const L=[{value:void 0,label:""},{value:"1",label:"1"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"},{value:"5",label:"5"},{value:"6",label:"6"},{value:"7",label:"7"},{value:"8",label:"8"},{value:"9",label:"9"},{value:"10",label:"10"},{value:"11",label:"11"},{value:"12",label:"12"},{value:"13",label:"13"},{value:"14",label:"14"},{value:"15",label:"15"},{value:"16",label:"16"},{value:"17",label:"17"},{value:"18",label:"18"},{value:"19",label:"19"},{value:"20",label:"20"},{value:"21",label:"21"},{value:"22",label:"22"},{value:"X",label:"X"},{value:"Y",label:"Y"},{value:"MT",label:"MT"}]},9145:(Rt,De,c)=>{c.d(De,{$Ni:()=>we,$Pl:()=>cr,$TJ:()=>Q1,$UJ:()=>Vl,$Vg:()=>S1,$pU:()=>ja,$qW:()=>ks,$rM:()=>lr,AsH:()=>mr,Avr:()=>sd,BMV:()=>Cc,BOs:()=>Zr,B_h:()=>qc,BaG:()=>u1,BlQ:()=>wt,CFE:()=>Xl,Ei5:()=>ba,En6:()=>Et,FEq:()=>Wo,FMZ:()=>ws,FP9:()=>Ml,FZ_:()=>Za,Fd4:()=>Pl,Fll:()=>ni,Fq8:()=>ts,G4Q:()=>qa,GOU:()=>tr,GUs:()=>Tn,GXf:()=>Ct,G_G:()=>ne,H1z:()=>Oe,HAY:()=>Yu,HKj:()=>C1,HLX:()=>le,HnF:()=>vc,I8L:()=>Vi,INr:()=>vs,IbX:()=>wr,IxG:()=>Ja,J9f:()=>_l,JCx:()=>be,JTF:()=>n1,Jmn:()=>x1,KRr:()=>jt,KiN:()=>ud,Kkj:()=>Wn,LJ9:()=>li,LXB:()=>Wa,M1P:()=>pe,M5K:()=>er,MAo:()=>Fe,Mvn:()=>Js,N47:()=>Ou,NMX:()=>xs,NVO:()=>H,Nac:()=>Su,Nel:()=>cn,O3Q:()=>Ia,OLK:()=>nd,OP3:()=>J,OWv:()=>Z,Osm:()=>f1,Phy:()=>Y,Psd:()=>ea,Pw8:()=>Cl,QVS:()=>Ir,QWP:()=>qr,QZR:()=>co,Qa$:()=>Eo,QcR:()=>Ws,Qfy:()=>se,Qt1:()=>he,RA2:()=>bs,RJ$:()=>en,RKe:()=>It,RMT:()=>bu,RQS:()=>Br,RSu:()=>Rc,RSy:()=>oc,Rqb:()=>Gl,SPr:()=>nc,T31:()=>V,Thk:()=>kn,Tj8:()=>ri,ToY:()=>ar,UEL:()=>Hn,UK$:()=>Xa,ULh:()=>E1,UN$:()=>Ys,V1_:()=>Ol,V3k:()=>no,V9U:()=>Yt,VV8:()=>du,Vl8:()=>z1,Vue:()=>de,W14:()=>Vt,WAS:()=>mt,WGp:()=>_s,WSr:()=>H1,WeE:()=>Uc,WgR:()=>nl,XEW:()=>w,XJ:()=>M,XUB:()=>ua,XWi:()=>fs,Xiu:()=>R,XxZ:()=>gc,YQp:()=>Tt,YSN:()=>z,YW4:()=>B,Yd3:()=>Z1,Ye0:()=>mu,Ype:()=>Dn,Z3e:()=>g1,ZC5:()=>ul,ZFx:()=>Ar,ZLN:()=>Al,ZVN:()=>Nl,_f:()=>bt,a3n:()=>Fc,a4s:()=>r1,aUH:()=>Ge,aX5:()=>Il,aZy:()=>fu,arH:()=>Qc,bOY:()=>xl,bPL:()=>Jc,bz7:()=>Xn,c1P:()=>ut,cO8:()=>fn,cQZ:()=>Ua,cs4:()=>wo,d2V:()=>Ii,d52:()=>F,dYH:()=>Oc,dbG:()=>Ql,duD:()=>_1,eHp:()=>ta,eJL:()=>Ps,eTd:()=>hd,f9r:()=>eh,fQd:()=>fd,fh2:()=>ie,fqJ:()=>y1,fvu:()=>Kr,g1E:()=>tc,gG1:()=>oe,gUZ:()=>Io,gtA:()=>Ri,gwr:()=>yl,hBv:()=>Pt,hGs:()=>je,hj:()=>au,hzv:()=>ho,iHU:()=>me,iSS:()=>La,iby:()=>x,iyz:()=>Sc,j8M:()=>ad,jaV:()=>Zc,jme:()=>Qr,k1Y:()=>qu,kBo:()=>Xc,kHr:()=>ps,kKs:()=>Yl,kWO:()=>fa,kp0:()=>rl,kq4:()=>K1,krZ:()=>As,kut:()=>st,l20:()=>Kc,l76:()=>I,lBA:()=>Ue,lD4:()=>Be,lEz:()=>Ka,l_P:()=>Jr,m7j:()=>Cs,m9R:()=>gn,mDT:()=>D1,mRx:()=>Kl,mqi:()=>hi,mww:()=>vo,nRJ:()=>ed,ngC:()=>th,npr:()=>Yo,oGI:()=>xt,oJ_:()=>fi,oKj:()=>A,owd:()=>Is,pCs:()=>Sl,paL:()=>ae,pi3:()=>os,q3K:()=>a1,q7o:()=>Zs,qKP:()=>Rl,qld:()=>Ae,r$P:()=>W1,rCZ:()=>Xr,rR2:()=>br,rUT:()=>yc,reo:()=>El,s91:()=>M1,sAe:()=>Vo,sZm:()=>h1,shk:()=>X,tDA:()=>zl,tUL:()=>zn,tas:()=>Nr,twV:()=>l1,txm:()=>Bl,uXu:()=>od,v8x:()=>Jd,w7w:()=>L,wBW:()=>it,wJE:()=>Wr,wJP:()=>_e,wOP:()=>Vn,wVR:()=>At,wdL:()=>v1,wkS:()=>Xu,xKZ:()=>yu,xNz:()=>jc,xPr:()=>bc,y3W:()=>ec,y5X:()=>ht,yLZ:()=>Ts,yR6:()=>Hi,yo9:()=>wn,yoY:()=>Gi,ypY:()=>et,ytN:()=>Jo,zNY:()=>Gu,zf1:()=>w1});var t=c(1661),r=c(3953),M=function(m){return m.Na="NA",m.TierIii="TIER_III",m.TierIiLevelC="TIER_II_LEVEL_C",m.TierIiLevelD="TIER_II_LEVEL_D",m.TierIv="TIER_IV",m.TierILevelA="TIER_I_LEVEL_A",m.TierILevelB="TIER_I_LEVEL_B",m}(M||{}),L=function(m){return m.DoesNotSupport="DOES_NOT_SUPPORT",m.Supports="SUPPORTS",m}(L||{}),B=function(m){return m.AdverseResponse="ADVERSE_RESPONSE",m.Benign="BENIGN",m.BetterOutcome="BETTER_OUTCOME",m.LikelyBenign="LIKELY_BENIGN",m.LikelyOncogenic="LIKELY_ONCOGENIC",m.LikelyPathogenic="LIKELY_PATHOGENIC",m.Na="NA",m.Negative="NEGATIVE",m.Oncogenic="ONCOGENIC",m.Pathogenic="PATHOGENIC",m.PoorOutcome="POOR_OUTCOME",m.Positive="POSITIVE",m.ReducedSensitivity="REDUCED_SENSITIVITY",m.Resistance="RESISTANCE",m.Sensitivityresponse="SENSITIVITYRESPONSE",m.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",m}(B||{}),A=function(m){return m.AmpLevel="AMP_LEVEL",m.AssertionDirection="ASSERTION_DIRECTION",m.AssertionType="ASSERTION_TYPE",m.DiseaseName="DISEASE_NAME",m.EvidenceItemsCount="EVIDENCE_ITEMS_COUNT",m.Id="ID",m.Significance="SIGNIFICANCE",m.Status="STATUS",m.Summary="SUMMARY",m}(A||{}),w=function(m){return m.Diagnostic="DIAGNOSTIC",m.Oncogenic="ONCOGENIC",m.Predictive="PREDICTIVE",m.Predisposing="PREDISPOSING",m.Prognostic="PROGNOSTIC",m}(w||{}),I=function(m){return m.And="AND",m.Or="OR",m}(I||{}),F=function(m){return m.EvidenceItemCount="EVIDENCE_ITEM_COUNT",m.Name="NAME",m.NctId="NCT_ID",m.SourceCount="SOURCE_COUNT",m}(F||{}),X=function(m){return m.Conflict="CONFLICT",m.Expired="EXPIRED",m.Missing="MISSING",m.Valid="VALID",m}(X||{}),V=function(m){return m.Assertion="ASSERTION",m.EvidenceItem="EVIDENCE_ITEM",m.Feature="FEATURE",m.MolecularProfile="MOLECULAR_PROFILE",m.Source="SOURCE",m.Variant="VARIANT",m.VariantGroup="VARIANT_GROUP",m}(V||{}),x=function(m){return m.Factor="FACTOR",m}(x||{}),ne=function(m){return m.Created="CREATED",m.LastModified="LAST_MODIFIED",m}(ne||{}),J=function(m){return m.Negative="NEGATIVE",m.Positive="POSITIVE",m}(J||{}),be=function(m){return m.AssertionCount="ASSERTION_COUNT",m.Doid="DOID",m.EvidenceItemCount="EVIDENCE_ITEM_COUNT",m.FeatureCount="FEATURE_COUNT",m.Name="NAME",m.VariantCount="VARIANT_COUNT",m}(be||{}),Oe=function(m){return m.Accepted="ACCEPTED",m.AssertionAccepted="ASSERTION_ACCEPTED",m.AssertionRejected="ASSERTION_REJECTED",m.AssertionReverted="ASSERTION_REVERTED",m.AssertionSubmitted="ASSERTION_SUBMITTED",m.Commented="COMMENTED",m.CommentDeleted="COMMENT_DELETED",m.ComplexMolecularProfileCreated="COMPLEX_MOLECULAR_PROFILE_CREATED",m.CuratedSourceSuggestion="CURATED_SOURCE_SUGGESTION",m.DeprecatedFeature="DEPRECATED_FEATURE",m.DeprecatedMolecularProfile="DEPRECATED_MOLECULAR_PROFILE",m.DeprecatedVariant="DEPRECATED_VARIANT",m.FeatureCreated="FEATURE_CREATED",m.Flagged="FLAGGED",m.FlagResolved="FLAG_RESOLVED",m.PublicationSuggested="PUBLICATION_SUGGESTED",m.Rejected="REJECTED",m.RejectedSourceSuggestion="REJECTED_SOURCE_SUGGESTION",m.RequeuedSourceSuggestion="REQUEUED_SOURCE_SUGGESTION",m.Reverted="REVERTED",m.RevisionAccepted="REVISION_ACCEPTED",m.RevisionRejected="REVISION_REJECTED",m.RevisionSuggested="REVISION_SUGGESTED",m.RevisionSuperseded="REVISION_SUPERSEDED",m.Submitted="SUBMITTED",m.VariantCreated="VARIANT_CREATED",m}(Oe||{}),he=function(m){return m.Organization="ORGANIZATION",m.Subject="SUBJECT",m.Unscoped="UNSCOPED",m.User="USER",m}(he||{}),we=function(m){return m.DoesNotSupport="DOES_NOT_SUPPORT",m.Na="NA",m.Supports="SUPPORTS",m}(we||{}),me=function(m){return m.A="A",m.B="B",m.C="C",m.D="D",m.E="E",m}(me||{}),de=function(m){return m.AdverseResponse="ADVERSE_RESPONSE",m.Benign="BENIGN",m.BetterOutcome="BETTER_OUTCOME",m.DominantNegative="DOMINANT_NEGATIVE",m.GainOfFunction="GAIN_OF_FUNCTION",m.LikelyBenign="LIKELY_BENIGN",m.LikelyPathogenic="LIKELY_PATHOGENIC",m.LossOfFunction="LOSS_OF_FUNCTION",m.Na="NA",m.Negative="NEGATIVE",m.Neomorphic="NEOMORPHIC",m.Oncogenicity="ONCOGENICITY",m.Pathogenic="PATHOGENIC",m.PoorOutcome="POOR_OUTCOME",m.Positive="POSITIVE",m.Predisposition="PREDISPOSITION",m.Protectiveness="PROTECTIVENESS",m.ReducedSensitivity="REDUCED_SENSITIVITY",m.Resistance="RESISTANCE",m.Sensitivityresponse="SENSITIVITYRESPONSE",m.UnalteredFunction="UNALTERED_FUNCTION",m.UncertainSignificance="UNCERTAIN_SIGNIFICANCE",m.Unknown="UNKNOWN",m}(de||{}),H=function(m){return m.Description="DESCRIPTION",m.DiseaseName="DISEASE_NAME",m.EvidenceDirection="EVIDENCE_DIRECTION",m.EvidenceLevel="EVIDENCE_LEVEL",m.EvidenceRating="EVIDENCE_RATING",m.EvidenceType="EVIDENCE_TYPE",m.Id="ID",m.Significance="SIGNIFICANCE",m.Status="STATUS",m.VariantOrigin="VARIANT_ORIGIN",m}(H||{}),z=function(m){return m.Accepted="ACCEPTED",m.Rejected="REJECTED",m.Submitted="SUBMITTED",m}(z||{}),Z=function(m){return m.Accepted="ACCEPTED",m.All="ALL",m.NonRejected="NON_REJECTED",m.Rejected="REJECTED",m.Submitted="SUBMITTED",m}(Z||{}),pe=function(m){return m.Diagnostic="DIAGNOSTIC",m.Functional="FUNCTIONAL",m.Oncogenic="ONCOGENIC",m.Predictive="PREDICTIVE",m.Predisposing="PREDISPOSING",m.Prognostic="PROGNOSTIC",m}(pe||{}),R=function(m){return m.Factor="FACTOR",m.Fusion="FUSION",m.Gene="GENE",m}(R||{}),Y=function(m){return m.AssertionCount="assertionCount",m.DiseaseName="diseaseName",m.EvidenceItemCount="evidenceItemCount",m.FeatureAlias="featureAlias",m.FeatureFullName="featureFullName",m.FeatureName="featureName",m.MolecularProfileCount="molecularProfileCount",m.TherapyName="therapyName",m.VariantCount="variantCount",m}(Y||{}),se=function(m){return m.Open="OPEN",m.Resolved="RESOLVED",m}(se||{}),Be=function(m){return m.Assertion="ASSERTION",m.EvidenceItem="EVIDENCE_ITEM",m.Feature="FEATURE",m.MolecularProfile="MOLECULAR_PROFILE",m.Variant="VARIANT",m.VariantGroup="VARIANT_GROUP",m}(Be||{}),Pt=function(m){return m.Known="KNOWN",m.Multiple="MULTIPLE",m.Unknown="UNKNOWN",m}(Pt||{}),wt=function(m){return m.Assertion="ASSERTION",m.EvidenceItem="EVIDENCE_ITEM",m.ExonCoordinates="EXON_COORDINATES",m.Feature="FEATURE",m.MolecularProfile="MOLECULAR_PROFILE",m.Variant="VARIANT",m.VariantCoordinates="VARIANT_COORDINATES",m.VariantGroup="VARIANT_GROUP",m}(wt||{}),xt=function(m){return m.All="ALL",m.WithAccepted="WITH_ACCEPTED",m.WithAcceptedOrSubmitted="WITH_ACCEPTED_OR_SUBMITTED",m.WithSubmitted="WITH_SUBMITTED",m}(xt||{}),st=function(m){return m.AssertionCount="assertionCount",m.EvidenceItemCount="evidenceItemCount",m.MolecularProfileScore="molecularProfileScore",m.VariantCount="variantCount",m}(st||{}),Ct=function(m){return m.Mention="MENTION",m.Subscription="SUBSCRIPTION",m}(Ct||{}),It=function(m){return m.ActivityCount="ACTIVITY_COUNT",m.Id="ID",m.MemberCount="MEMBER_COUNT",m.MostRecentActivityTimestamp="MOST_RECENT_ACTIVITY_TIMESTAMP",m.Name="NAME",m}(It||{}),Tt=function(m){return m.AssertionCount="ASSERTION_COUNT",m.EvidenceItemCount="EVIDENCE_ITEM_COUNT",m.HpoId="HPO_ID",m.Name="NAME",m}(Tt||{}),en=function(m){return m.Read="READ",m.Unread="UNREAD",m}(en||{}),jt=function(m){return m.Grch37="GRCH37",m.Grch38="GRCH38",m.Ncbi36="NCBI36",m}(jt||{}),Vt=function(m){return m.Accepted="ACCEPTED",m.New="NEW",m.Rejected="REJECTED",m.Superseded="SUPERSEDED",m}(Vt||{}),fn=function(m){return m.Assertion="ASSERTION",m.Disease="DISEASE",m.EvidenceItem="EVIDENCE_ITEM",m.Feature="FEATURE",m.MolecularProfile="MOLECULAR_PROFILE",m.Revision="REVISION",m.Therapy="THERAPY",m.Variant="VARIANT",m.VariantGroup="VARIANT_GROUP",m}(fn||{}),Hn=function(m){return m.Asc="ASC",m.Desc="DESC",m}(Hn||{}),zn=function(m){return m.Asco="ASCO",m.Ash="ASH",m.Pubmed="PUBMED",m}(zn||{}),bt=function(m){return m.Curated="CURATED",m.New="NEW",m.Rejected="REJECTED",m}(bt||{}),At=function(m){return m.Citation="CITATION",m.CitationId="CITATION_ID",m.CreatedAt="CREATED_AT",m.DiseaseName="DISEASE_NAME",m.SourceType="SOURCE_TYPE",m.Submitter="SUBMITTER",m}(At||{}),Et=function(m){return m.Authors="AUTHORS",m.CitationId="CITATION_ID",m.EvidenceCount="EVIDENCE_COUNT",m.Journal="JOURNAL",m.Name="NAME",m.SourceType="SOURCE_TYPE",m.SuggestionCount="SUGGESTION_COUNT",m.Year="YEAR",m}(Et||{}),Yt=function(m){return m.Assertion="ASSERTION",m.EvidenceItem="EVIDENCE_ITEM",m.Feature="FEATURE",m.MolecularProfile="MOLECULAR_PROFILE",m.Revision="REVISION",m.SourceSuggestion="SOURCE_SUGGESTION",m.Variant="VARIANT",m.VariantGroup="VARIANT_GROUP",m}(Yt||{}),Ue=function(m){return m.Assertion="ASSERTION",m.EvidenceItem="EVIDENCE_ITEM",m.Feature="FEATURE",m.MolecularProfile="MOLECULAR_PROFILE",m.Revision="REVISION",m.Role="ROLE",m.Variant="VARIANT",m.VariantGroup="VARIANT_GROUP",m}(Ue||{}),Ae=function(m){return m.Combination="COMBINATION",m.Sequential="SEQUENTIAL",m.Substitutes="SUBSTITUTES",m}(Ae||{}),ie=function(m){return m.AssertionCount="ASSERTION_COUNT",m.EvidenceItemCount="EVIDENCE_ITEM_COUNT",m.Name="NAME",m.NcitId="NCIT_ID",m}(ie||{}),_e=function(m){return m.AllTime="ALL_TIME",m.LastMonth="LAST_MONTH",m.LastWeek="LAST_WEEK",m.LastYear="LAST_YEAR",m}(_e||{}),oe=function(m){return m.Admin="ADMIN",m.Curator="CURATOR",m.Editor="EDITOR",m}(oe||{}),Fe=function(m){return m.EvidenceCount="EVIDENCE_COUNT",m.Id="ID",m.LastAction="LAST_ACTION",m.Name="NAME",m.RevisionCount="REVISION_COUNT",m.Role="ROLE",m}(Fe||{}),et=function(m){return m.Factor="FACTOR",m.Fusion="FUSION",m.Gene="GENE",m}(et||{}),ut=function(m){return m.FivePrimeFusionCoordinate="FIVE_PRIME_FUSION_COORDINATE",m.GeneVariantCoordinate="GENE_VARIANT_COORDINATE",m.ThreePrimeFusionCoordinate="THREE_PRIME_FUSION_COORDINATE",m}(ut||{}),cn=function(m){return m.EvidenceItemCount="EVIDENCE_ITEM_COUNT",m.GeneNames="GENE_NAMES",m.Name="NAME",m.VariantCount="VARIANT_COUNT",m.VariantNames="VARIANT_NAMES",m}(cn||{}),Tn=function(m){return m.CoordinateEnd="COORDINATE_END",m.CoordinateStart="COORDINATE_START",m.Name="NAME",m}(Tn||{}),Wn=function(m){return m.Combined="COMBINED",m.CommonGermline="COMMON_GERMLINE",m.Na="NA",m.RareGermline="RARE_GERMLINE",m.Somatic="SOMATIC",m.Unknown="UNKNOWN",m}(Wn||{}),kn=function(m){return m.Name="NAME",m.Soid="SOID",m.VariantCount="VARIANT_COUNT",m}(kn||{}),Vn=function(m){return m.DiseaseName="diseaseName",m.FeatureName="featureName",m.TherapyName="therapyName",m.VariantName="variantName",m}(Vn||{});const Un=t.J1`
    fragment ActivityCard on ActivityInterface {
  id
  verbiage
}
    `,dn=t.J1`
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
      flagged
    }
    ... on Assertion {
      status
      flagged
    }
    ... on Revision {
      revisionSetId
    }
    ... on VariantInterface {
      deprecated
      flagged
      feature {
        id
        name
        link
        deprecated
        flagged
      }
    }
    ... on MolecularProfile {
      deprecated
      flagged
    }
    ... on Feature {
      deprecated
      flagged
    }
    ... on VariantGroup {
      flagged
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
    `,qt=t.J1`
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
    ${dn}`,On=t.J1`
    fragment MolecularProfileParsedName on MolecularProfileSegment {
  __typename
  ... on MolecularProfileTextSegment {
    text
  }
  ... on Feature {
    id
    name
    link
    deprecated
    flagged
  }
  ... on Variant {
    id
    name
    link
    deprecated
    flagged
  }
}
    `,Ut=t.J1`
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
    deprecated
  }
  therapyInteractionType
  disease {
    id
    name
    link
    deprecated
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
    deprecated
    flagged
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
    ${On}`,Ye=t.J1`
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
    deprecated
  }
  disease {
    id
    name
    link
    deprecated
  }
  therapies {
    id
    name
    link
    deprecated
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
    ${On}`,ue=t.J1`
    fragment clinicalTrialPopover on BrowseClinicalTrial {
  id
  name
  nctId
  url
  sourceCount
  evidenceCount
}
    `,te=t.J1`
    fragment BrowseClinicalTrialsRowFields on BrowseClinicalTrial {
  id
  name
  nctId
  evidenceCount
  sourceCount
  link
}
    `,q=t.J1`
    fragment parsedCommentFragment on CommentBodySegment {
  __typename
  ... on CommentTagSegment {
    entityId
    displayName
    tagType
    link
    revisionSetId
    feature {
      id
      name
      link
      deprecated
      flagged
    }
    __typename
  }
  ... on CommentTagSegmentFlagged {
    entityId
    displayName
    tagType
    flagged
    link
    revisionSetId
    feature {
      id
      name
      link
      deprecated
      flagged
    }
    __typename
  }
  ... on CommentTagSegmentFlaggedAndWithStatus {
    entityId
    displayName
    tagType
    status
    flagged
    link
    revisionSetId
    feature {
      id
      name
      link
      deprecated
      flagged
    }
    __typename
  }
  ... on CommentTagSegmentFlaggedAndDeprecated {
    entityId
    displayName
    tagType
    flagged
    deprecated
    link
    revisionSetId
    feature {
      id
      name
      link
      deprecated
      flagged
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
    `,Xe=t.J1`
    fragment commentListNode on Comment {
  id
  title
  comment
  createdAt
  deleted
  deletedAt
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
    ${q}`,dt=t.J1`
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
        deprecated
        flagged
      }
      flagged
    }
    ... on Feature {
      deprecated
      flagged
    }
    ... on Source {
      deprecated
      sourceType
    }
    ... on Assertion {
      flagged
      status
    }
    ... on EvidenceItem {
      flagged
      status
    }
    __typename
  }
}
    `,at=t.J1`
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
  deprecated
  diseaseAliases
}
    `,St=t.J1`
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
      deprecated
    }
    ... on EvidenceItem {
      status
      flagged
    }
    ... on Assertion {
      status
      flagged
    }
    ... on Revision {
      revisionSetId
    }
    ... on VariantInterface {
      deprecated
      flagged
      feature {
        id
        link
        name
        deprecated
        flagged
      }
    }
    ... on Feature {
      deprecated
      flagged
      id
      link
      name
    }
    ... on MolecularProfile {
      deprecated
      flagged
    }
    ... on VariantGroup {
      flagged
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
    `,Qe=t.J1`
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
    ${St}`,Ee=t.J1`
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
    deprecated
  }
  therapyInteractionType
  disease {
    id
    name
    link
    deprecated
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
    flagged
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
    deprecated
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
    ${On}`,Je=t.J1`
    fragment EvidenceGridFields on EvidenceItem {
  id
  name
  link
  disease {
    id
    name
    link
    deprecated
  }
  therapies {
    id
    name
    link
    deprecated
  }
  molecularProfile {
    id
    name
    link
    parsedName {
      ...MolecularProfileParsedName
    }
    deprecated
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
    ${On}`,re=t.J1`
    fragment featurePopover on Feature {
  id
  name
  fullName
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
    `,ze=t.J1`
    fragment BrowseFeaturesFields on BrowseFeature {
  id
  name
  fullName
  link
  deprecated
  flagged
  featureAliases
  diseases {
    name
    id
    link
    deprecated
  }
  therapies {
    name
    id
    link
    deprecated
  }
  variantCount
  evidenceItemCount
  assertionCount
  molecularProfileCount
  featureInstanceType
}
    `,gt=t.J1`
    fragment flag on Flag {
  id
  state
  flaggable {
    id
    name
    link
    ... on Variant {
      deprecated
    }
    ... on Feature {
      deprecated
    }
    ... on MolecularProfile {
      deprecated
    }
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
    ${q}`,Ke=t.J1`
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
    ${gt}`,Pe=t.J1`
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
    ... on VariantInterface {
      deprecated
      feature {
        id
        name
        link
        deprecated
        flagged
      }
    }
    ... on Feature {
      deprecated
    }
    ... on EvidenceItem {
      status
    }
    ... on Assertion {
      status
    }
    flagged
  }
  createdAt
  openActivity {
    parsedNote {
      ...parsedCommentFragment
    }
  }
}
    ${q}`,Re=t.J1`
    fragment menuFusion on Fusion {
  id
  name
  link
  flagged
  deprecated
}
    `,$=t.J1`
    fragment QuicksearchResult on SearchResult {
  id
  resultType
  name
  matchingText
}
    `,ce=t.J1`
    fragment molecularProfilePopoverFields on MolecularProfile {
  id
  name
  parsedName {
    ...MolecularProfileParsedName
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
    ${On}`,N=t.J1`
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
    deprecated
  }
  diseases {
    id
    name
    link
    deprecated
  }
  link
  deprecated
}
    `,ke=t.J1`
    fragment menuMolecularProfile on MolecularProfile {
  id
  name
  link
  flagged
  deprecated
}
    `,ve=t.J1`
    fragment LeaderboardOrganizationFields on LeaderboardOrganization {
  id
  name
  actionCount
  rank
  profileImagePath(size: 64)
}
    `,K=t.J1`
    fragment orgPopover on Organization {
  id
  profileImagePath(size: 64)
  name
  description
  url
}
    `,U=t.J1`
    fragment OrganizationBrowseTableRowFields on BrowseOrganization {
  id
  name
  description
  url
  memberCount
  activityCount
  mostRecentActivityTimestamp
  childOrganizations {
    id
    name
  }
}
    `,ge=t.J1`
    fragment PhenotypeBrowseTableRowFields on BrowsePhenotype {
  id
  name
  hpoId
  url
  assertionCount
  evidenceCount
  link
}
    `,qe=t.J1`
    fragment validationError on FieldValidationError {
  fieldName
  error
}
    `,rt=t.J1`
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
    ... on VariantInterface {
      deprecated
      flagged
      feature {
        id
        name
        link
        deprecated
        flagged
      }
    }
    ... on Feature {
      deprecated
      flagged
    }
    ... on Assertion {
      flagged
      status
    }
    ... on EvidenceItem {
      flagged
      status
    }
    ... on VariantGroup {
      flagged
    }
  }
  createdAt
  linkoutData {
    name
  }
}
    ${q}`,Ft=t.J1`
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
          flagged
          feature {
            link
            id
            name
            deprecated
            flagged
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
          flagged
          feature {
            link
            id
            name
            deprecated
            flagged
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
          flagged
          feature {
            link
            id
            name
            deprecated
            flagged
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
          flagged
          feature {
            link
            id
            name
            deprecated
            flagged
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
          flagged
          feature {
            link
            id
            name
            deprecated
            flagged
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
    organization {
      id
      name
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
    ${q}`,on=t.J1`
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
    `,Cn=t.J1`
    fragment subscriptionId on Subscription {
  id
  __typename
}
    `,Zn=t.J1`
    fragment TimepointCount on TimePointCounts {
  allTime
  newThisMonth
  newThisWeek
  newThisYear
}
    `,jn=t.J1`
    fragment BrowseSourceSuggestionRowFields on SourceSuggestion {
  id
  molecularProfile {
    id
    name
    link
    deprecated
  }
  disease {
    id
    name
    link
    deprecated
  }
  source {
    link
    id
    citation
    citationId
    sourceType
    sourceUrl
    displayType
    deprecated
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
    ${q}`,Gn=t.J1`
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
  retractionDate
  retractionReasons
  retractionNature
}
    `,zi=t.J1`
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
  deprecated
}
    `,Oi=t.J1`
    fragment TherapyBrowseTableRowFields on BrowseTherapy {
  id
  name
  ncitId
  therapyUrl
  assertionCount
  evidenceCount
  link
  deprecated
  therapyAliases
}
    `,lo=t.J1`
    fragment LeaderboardUserFields on LeaderboardUser {
  id
  name
  displayName
  actionCount
  role
  rank
  profileImagePath(size: 64)
}
    `,Zi=t.J1`
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
    `,Bo=t.J1`
    fragment UserBrowseTableRowFields on BrowseUser {
  id
  name
  displayName
  username
  organizations {
    id
    name
  }
  role
  evidenceCount
  revisionCount
  profileImagePath(size: 64)
  mostRecentActivityTimestamp
}
    `,bo=t.J1`
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
        flagged
        feature {
          id
          name
          link
          deprecated
          flagged
        }
      }
    }
  }
  sources {
    id
    citation
    sourceType
    link
    deprecated
  }
}
    `,Mr=t.J1`
    fragment BrowseVariantGroupRowFields on BrowseVariantGroup {
  id
  name
  link
  featureNames
  variantNames
  variantCount
  evidenceItemCount
}
    `,rr=t.J1`
    fragment variantTypePopover on VariantTypePopover {
  id
  name
  url
  soid
  variantCount
}
    `,lt=t.J1`
    fragment VariantTypeBrowseTableRowFields on BrowseVariantType {
  id
  name
  soid
  url
  variantCount
  link
}
    `,Lt=t.J1`
    fragment CoordinateFields on VariantCoordinate {
  referenceBuild
  ensemblVersion
  chromosome
  representativeTranscript
  start
  stop
  referenceBases
  variantBases
  coordinateType
}
    `,$t=t.J1`
    fragment ExonCoordinateFields on ExonCoordinate {
  referenceBuild
  ensemblVersion
  chromosome
  representativeTranscript
  start
  stop
  exon
  exonOffset
  exonOffsetDirection
  ensemblId
  strand
  coordinateType
}
    `,mn=t.J1`
    fragment CoordinatesCardFields on VariantInterface {
  id
  name
  ... on GeneVariant {
    coordinates {
      ...CoordinateFields
    }
  }
  ... on FusionVariant {
    fivePrimeCoordinates {
      ...CoordinateFields
    }
    threePrimeCoordinates {
      ...CoordinateFields
    }
    fivePrimeStartExonCoordinates {
      ...ExonCoordinateFields
    }
    fivePrimeEndExonCoordinates {
      ...ExonCoordinateFields
    }
    threePrimeStartExonCoordinates {
      ...ExonCoordinateFields
    }
    threePrimeEndExonCoordinates {
      ...ExonCoordinateFields
    }
  }
}
    ${Lt}
${$t}`,hn=t.J1`
    fragment variantPopoverFields on VariantInterface {
  id
  name
  variantAliases
  ... on GeneVariant {
    alleleRegistryId
  }
  feature {
    id
    name
    link
    deprecated
    flagged
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
    `,Yn=t.J1`
    fragment menuVariantType on BrowseVariantType {
  id
  name
  link
}
    `,En=t.J1`
    fragment menuVariant on VariantInterface {
  id
  name
  link
  flagged
  deprecated
}
    `,Kn=t.J1`
    fragment BrowseVariantsFields on BrowseVariant {
  id
  name
  link
  featureId
  featureName
  featureLink
  category
  featureDeprecated
  featureFlagged
  diseases {
    id
    name
    link
    deprecated
  }
  therapies {
    id
    name
    link
    deprecated
  }
  aliases {
    name
  }
  variantTypes {
    id
    name
    link
  }
  deprecated
  flagged
}
    `,oi=t.J1`
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
    `,gi=t.J1`
    fragment MolecularProfileSelectTypeaheadFields on MolecularProfile {
  id
  name
  link
  molecularProfileAliases
  deprecated
  flagged
}
    `,ro=t.J1`
    fragment DiseaseSelectTypeaheadFields on Disease {
  id
  name
  link
  displayName
  doid
  diseaseAliases
}
    `,vi=t.J1`
    fragment TherapySelectTypeaheadFields on Therapy {
  id
  name
  link
  ncitId
  therapyAliases
}
    `,pn=t.J1`
    fragment PhenotypeSelectTypeaheadFields on Phenotype {
  id
  name
  link
  hpoId
}
    `,$i=t.J1`
    fragment SourceSelectTypeaheadFields on Source {
  id
  name
  link
  citation
  citationId
  sourceType
  deprecated
}
    `,Mi=t.J1`
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
    ${gi}
${ro}
${vi}
${pn}
${$i}`,Ni=t.J1`
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
    deprecated
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
    `,so=t.J1`
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
    `,Yi=t.J1`
    fragment RevisableFactorVariantFields on FactorVariant {
  name
  feature {
    id
    name
  }
  variantAliases
  variantTypes {
    id
    name
    soid
  }
  ncitId
}
    `,Xo=t.J1`
    fragment RevisableFusionFields on Feature {
  id
  description
  sources {
    id
    sourceType
    citation
    citationId
  }
  featureAliases
  featureInstance {
    __typename
  }
}
    `,Ki=t.J1`
    fragment RevisableFusionVariantFields on FusionVariant {
  name
  feature {
    id
    name
    link
    deprecated
    flagged
    featureInstance {
      ... on Fusion {
        fivePrimePartnerStatus
        threePrimePartnerStatus
      }
    }
  }
  variantAliases
  variantTypes {
    id
    name
    soid
  }
  fivePrimeEndExonCoordinates {
    ...ExonCoordinateFields
  }
  threePrimeStartExonCoordinates {
    ...ExonCoordinateFields
  }
}
    ${$t}`,Zo=t.J1`
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
    `,pr=t.J1`
    fragment RevisableGeneVariantFields on GeneVariant {
  name
  feature {
    id
    name
  }
  variantAliases
  alleleRegistryId
  clinvarIds
  hgvsDescriptions
  variantTypes {
    id
    name
    soid
  }
  coordinates {
    ...CoordinateFields
  }
}
    ${Lt}`,fo=t.J1`
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
    `,po=t.J1`
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
    `,fr=t.J1`
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
    `,$o=t.J1`
    fragment AcmgCodeSelectTypeaheadFields on AcmgCode {
  id
  code
  name
  description
  tooltip
}
    `,Lr=t.J1`
    fragment ClingenCodeSelectTypeaheadFields on ClingenCode {
  id
  code
  name
  description
  tooltip
  exclusive
}
    `,qi=t.J1`
    fragment QuickAddDiseaseFields on AddDiseasePayload {
  new
  disease {
    ...DiseaseSelectTypeaheadFields
  }
}
    ${ro}`,xn=t.J1`
    fragment EvidenceManagerFields on EvidenceItem {
  id
  name
  link
  disease {
    id
    name
    link
    deprecated
  }
  therapies {
    id
    name
    link
    deprecated
  }
  molecularProfile {
    id
    name
    link
    parsedName {
      ...MolecularProfileParsedName
    }
    deprecated
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
    ${On}`,Ci=t.J1`
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
    `,Sr=t.J1`
    fragment GeneBaseFields on Gene {
  id
  description
  featureAliases
  entrezId
  deprecated
  flagged
  name
  link
  sources {
    id
    citation
    link
    sourceUrl
    displayType
    sourceType
    deprecated
  }
}
    `,es=t.J1`
    fragment GeneSummaryFields on Gene {
  ...GeneBaseFields
  myGeneInfoDetails
}
    ${Sr}`,us=t.J1`
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
    `,qo=t.J1`
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
    deprecated
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
    ${us}`,Gs=t.J1`
    fragment FusionSummaryFields on Fusion {
  id
  description
  featureAliases
  name
  sources {
    id
    citation
    link
    sourceUrl
    displayType
    sourceType
    deprecated
  }
  fivePrimeGene {
    ...GeneBaseFields
  }
  threePrimeGene {
    ...GeneBaseFields
  }
  fivePrimePartnerStatus
  threePrimePartnerStatus
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
    ${Sr}`,tt=t.J1`
    fragment FeatureSummaryFields on Feature {
  id
  name
  fullName
  link
  deprecated
  flagged
  featureInstance {
    __typename
    ... on Gene {
      ...GeneSummaryFields
    }
    ... on Factor {
      ...FactorSummaryFields
    }
    ... on Fusion {
      ...FusionSummaryFields
    }
  }
}
    ${es}
${qo}
${Gs}`,Ce=t.J1`
    fragment QuickAddFeatureFields on CreateFeaturePayload {
  clientMutationId
  new
  feature {
    ...FeatureSummaryFields
  }
}
    ${tt}`,Ve=t.J1`
    fragment FeatureSelectTypeaheadFields on Feature {
  id
  name
  featureAliases
  link
  featureType
  featureInstance {
    __typename
    ... on Gene {
      entrezId
    }
    ... on Factor {
      ncitId
    }
    ... on Fusion {
      fivePrimePartnerStatus
      threePrimePartnerStatus
    }
  }
}
    `,nt=t.J1`
    fragment PreviewMpName2 on MolecularProfileSegment {
  __typename
  ... on MolecularProfileTextSegment {
    text
  }
  ... on Feature {
    id
    name
    link
    deprecated
    flagged
  }
  ... on Variant {
    id
    name
    link
    deprecated
    flagged
  }
}
    `,Mt=t.J1`
    fragment NccnGuidelineSelectTypeaheadFields on NccnGuideline {
  id
  name
}
    `,Wt=t.J1`
    fragment QuickAddTherapyFields on AddTherapyPayload {
  new
  therapy {
    ...TherapySelectTypeaheadFields
  }
}
    ${vi}`,tn=t.J1`
    fragment VariantSelectTypeaheadFields on VariantInterface {
  id
  name
  link
  deprecated
  variantAliases
  singleVariantMolecularProfileId
  singleVariantMolecularProfile {
    id
    name
    link
    molecularProfileAliases
  }
}
    `,rn=t.J1`
    fragment CreateFusionVariantFields on CreateFusionVariantPayload {
  clientMutationId
  new
  variant {
    ...VariantSelectTypeaheadFields
  }
}
    ${tn}`,Mn=(t.J1`
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
    deprecated
  }
  therapies {
    id
    name
    link
    deprecated
  }
  aliases {
    name
  }
}
    `,t.J1`
    fragment QuickAddVariantFields on CreateVariantPayload {
  clientMutationId
  new
  variant {
    ...VariantSelectTypeaheadFields
  }
}
    ${tn}`),Ln=t.J1`
    fragment VariantTypeSelectTypeaheadFields on VariantType {
  id
  name
  link
  soid
}
    `,wn=t.J1`
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
    ${q}`,Qn=t.J1`
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
    deprecated
    flagged
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
    ${wn}`,qn=t.J1`
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
    deprecated
  }
  molecularProfile {
    id
    name
    link
    parsedName {
      ...MolecularProfileParsedName
    }
    deprecated
    flagged
  }
  assertionType
  assertionDirection
  significance
  therapies {
    ncitId
    name
    link
    id
    deprecated
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
    ${On}
${wn}`,pi=t.J1`
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
  mondoId
}
    `,ei=t.J1`
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
  deprecated
}
    ${pi}`,li=t.J1`
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
    ${q}`,ci=t.J1`
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
    deprecated
    flagged
  }
  assertions {
    id
    name
    link
    flagged
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
    ${li}`,mi=t.J1`
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
    deprecated
  }
  therapyInteractionType
  disease {
    id
    name
    link
    deprecated
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
    retractionNature
    deprecated
  }
  evidenceRating
  molecularProfile {
    id
    name
    link
    parsedName {
      ...MolecularProfileParsedName
    }
    deprecated
    flagged
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
    ${On}
${q}`,Ei=t.J1`
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
    ${q}`,Xi=t.J1`
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
    flagged
    name
    link
    feature {
      id
      name
      link
      deprecated
      flagged
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
    ${q}`,Si=t.J1`
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
    `,eo=t.J1`
    fragment GeneVariantSummaryFields on GeneVariant {
  alleleRegistryId
  openCravatUrl
  maneSelectTranscript
  hgvsDescriptions
  clinvarIds
  coordinates {
    ...CoordinateFields
  }
  myVariantInfo {
    ...MyVariantInfoFields
  }
}
    ${Lt}
${Si}`,ao=t.J1`
    fragment FactorVariantSummaryFields on FactorVariant {
  ncitId
  ncitDetails {
    ...NcitDetails
  }
}
    ${us}`,io=t.J1`
    fragment FusionVariantSummaryFields on FusionVariant {
  viccCompliantName
  fusion {
    fivePrimePartnerStatus
    fivePrimeGene {
      id
      name
      link
      deprecated
      flagged
    }
    threePrimePartnerStatus
    threePrimeGene {
      id
      name
      link
      deprecated
      flagged
    }
  }
  fivePrimeCoordinates {
    ...CoordinateFields
  }
  threePrimeCoordinates {
    ...CoordinateFields
  }
  fivePrimeStartExonCoordinates {
    ...ExonCoordinateFields
  }
  fivePrimeEndExonCoordinates {
    ...ExonCoordinateFields
  }
  threePrimeStartExonCoordinates {
    ...ExonCoordinateFields
  }
  threePrimeEndExonCoordinates {
    ...ExonCoordinateFields
  }
}
    ${Lt}
${$t}`,An=t.J1`
    fragment VariantMolecularProfileCardFields on VariantInterface {
  id
  name
  link
  deprecated
  flagged
  feature {
    id
    name
    link
    deprecated
    flagged
  }
  molecularProfiles(first: 3) {
    totalCount
    nodes {
      id
      link
      name
      deprecated
      flagged
    }
  }
  ... on GeneVariant {
    ...GeneVariantSummaryFields
  }
  ... on FactorVariant {
    ...FactorVariantSummaryFields
  }
  ... on FusionVariant {
    ...FusionVariantSummaryFields
  }
  variantAliases
  variantTypes {
    id
    link
    soid
    name
  }
}
    ${eo}
${ao}
${io}`,_o=t.J1`
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
    deprecated
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
    ${An}
${On}`,ir=t.J1`
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
    `,Ur=t.J1`
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
    `,Do=t.J1`
    fragment OrganizationMembersFields on BrowseUser {
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
    `,Qo=t.J1`
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
    `,Dr=t.J1`
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
    `,_r=t.J1`
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
  retracted
  retractionNature
  retractionDate
  retractionReasons
  deprecated
}
    `,yr=t.J1`
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
    `,sr=t.J1`
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
    ${yr}`,Ao=t.J1`
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
    `,Ms=t.J1`
    fragment notificationOrganization on Organization {
  id
  name
}
    `,Fr=t.J1`
    fragment notificationOriginatingUsers on User {
  id
  displayName
}
    `,Uo=t.J1`
    fragment notificationFeedSubjects on EventSubjectWithCount {
  subject {
    id
    __typename
    name
  }
  occuranceCount
}
    `,Gr=t.J1`
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
    ${St}`,Mo=t.J1`
    fragment subscribable on Subscribable {
  id
  entityType
  __typename
}
    `,Ss=t.J1`
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
    `,ds=t.J1`
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
    deprecated
  }
}
    `,Ze=t.J1`
    fragment VariantDetailFields on VariantInterface {
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
    deprecated
    flagged
  }
  variantAliases
  flags(state: OPEN) {
    totalCount
  }
  openRevisionCount
  comments {
    totalCount
  }
}
    ${q}`,Fn=t.J1`
    fragment VariantCoordinateIds on VariantInterface {
  __typename
  openRevisionCount
  ... on GeneVariant {
    coordinates {
      openRevisionCount
      id
    }
  }
  ... on FusionVariant {
    fivePrimeEndExonCoordinates {
      openRevisionCount
      id
    }
    threePrimeStartExonCoordinates {
      openRevisionCount
      id
    }
  }
}
    `,fe=t.J1`
    fragment VariantSummaryFields on VariantInterface {
  id
  name
  feature {
    __typename
    id
    name
    link
    deprecated
    flagged
  }
  variantAliases
  variantTypes {
    id
    link
    soid
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
  ... on GeneVariant {
    ...GeneVariantSummaryFields
  }
  ... on FactorVariant {
    ...FactorVariantSummaryFields
  }
  ... on FusionVariant {
    ...FusionVariantSummaryFields
  }
}
    ${eo}
${ao}
${io}`;t.J1`
    query ActivityCard($activityId: Int!) {
  activity(id: $activityId) {
    ...ActivityCard
  }
}
    ${Un}`,t.J1`
    query ActivityFeed($first: Int, $last: Int, $before: String, $after: String, $userId: [Int!]) {
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
    ${qt}`;const Bn=t.J1`
    query AssertionPopover($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...assertionPopover
  }
}
    ${Ut}`;let fi=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Bn}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const ki=t.J1`
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
    ${Ye}`;let Eo=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=ki}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const di=t.J1`
    query ClinicalTrialPopover($clinicalTrialId: Int!) {
  clinicalTrials(id: $clinicalTrialId) {
    edges {
      node {
        ...clinicalTrialPopover
      }
    }
  }
}
    ${ue}`;let ho=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=di}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Oo=t.J1`
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
    ${te}`;let ts=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Oo}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Ne=t.J1`
    mutation DeleteComment($input: DeleteCommentInput!) {
  deleteComment(input: $input) {
    comment {
      ...commentListNode
    }
  }
}
    ${Xe}`;let je=(()=>{class m extends t.sM{constructor(Ie){super(Ie),this.document=Ne}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const ye=t.J1`
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
    ${Xe}`;let ht=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=ye}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Jt=t.J1`
    query CommentPopover($commentId: Int!) {
  comment(id: $commentId) {
    ...commentPopover
  }
}
    ${dt}`;let Ii=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Jt}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Qi=t.J1`
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
    deprecated
  }
}
    `;let wo=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Qi}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const yi=t.J1`
    query BrowseDiseases($first: Int, $last: Int, $before: String, $after: String, $sortBy: DiseasesSort, $name: String, $doid: String, $diseaseAlias: String, $featureName: String) {
  browseDiseases(
    first: $first
    last: $last
    before: $before
    after: $after
    sortBy: $sortBy
    name: $name
    doid: $doid
    diseaseAlias: $diseaseAlias
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
    ${at}`;let La=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=yi}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Hc=t.J1`
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
    `;let ba=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Hc}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Cr=t.J1`
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
    ${Qe}`;let gc=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Cr}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const mo=t.J1`
    query EvidencePopover($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...evidencePopover
  }
}
    ${Ee}`;let ua=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=mo}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Yr=t.J1`
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
    ${Je}`;let ta=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Yr}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Ba=t.J1`
    query FeaturePopover($featureId: Int!) {
  feature(id: $featureId) {
    ...featurePopover
  }
}
    ${re}`;let mr=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Ba}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Ea=t.J1`
    query BrowseFeatures($featureName: String, $featureFullName: String, $therapyName: String, $featureAlias: String, $diseaseName: String, $featureType: FeatureInstanceTypes, $sortBy: FeaturesSort, $first: Int, $last: Int, $before: String, $after: String) {
  browseFeatures(
    featureName: $featureName
    featureFullName: $featureFullName
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
    ${ze}`;let Ys=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Ea}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const hs=t.J1`
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
    ${Ke}`;let vc=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=hs}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const da=t.J1`
    query FlagPopover($flagId: Int!) {
  flag(id: $flagId) {
    ...flagPopover
  }
}
    ${Pe}`;let Wr=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=da}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const wi=t.J1`
    query FusionMenu($genePartnerId: Int, $first: Int, $last: Int, $before: String, $after: String) {
  fusions(
    genePartnerId: $genePartnerId
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
        ...menuFusion
      }
    }
  }
}
    ${Re}`;let Ws=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=wi}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const $a=t.J1`
    query Quicksearch($query: String!, $types: [SearchableEntities!], $highlightMatches: Boolean) {
  search(query: $query, types: $types, highlightMatches: $highlightMatches) {
    ...QuicksearchResult
  }
}
    ${$}`;let ps=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=$a}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Ha=t.J1`
    query MolecularProfilePopover($molecularProfileId: Int!) {
  molecularProfile(id: $molecularProfileId) {
    ...molecularProfilePopoverFields
  }
}
    ${ce}`;let Kr=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Ha}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Ta=t.J1`
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
    ${N}`;let Xr=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Ta}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const ju=t.J1`
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
    ${ke}`;let _l=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=ju}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Uu=t.J1`
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
    ${ve}`;let br=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Uu}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Ds=t.J1`
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
    ${ve}`;let ja=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Ds}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const ha=t.J1`
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
    ${ve}`;let jc=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=ha}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Os=t.J1`
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
    ${ve}`;let Ua=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Os}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const _c=t.J1`
    query OrgPopover($orgId: Int!) {
  organization(id: $orgId) {
    ...orgPopover
  }
}
    ${K}`;let Vi=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=_c}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const to=t.J1`
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
    ${U}`;let yc=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=to}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const pa=t.J1`
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
    `;let Uc=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=pa}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Gc=t.J1`
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
    ${ge}`;let Is=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Gc}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Ks=t.J1`
    mutation AcceptRevision($input: AcceptRevisionsInput!) {
  acceptRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;let co=(()=>{class m extends t.sM{constructor(Ie){super(Ie),this.document=Ks}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Ga=t.J1`
    mutation RejectRevision($input: RejectRevisionsInput!) {
  rejectRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;let Cc=(()=>{class m extends t.sM{constructor(Ie){super(Ie),this.document=Ga}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Go=t.J1`
    query ValidateRevisionsForAcceptance($ids: [Int!]!) {
  validateRevisionsForAcceptance(revisionIds: $ids) {
    genericErrors
    validationErrors {
      ...validationError
    }
  }
}
    ${qe}`;let Ar=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Go}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const na=t.J1`
    query RevisionPopover($revisionId: Int!) {
  revision(id: $revisionId) {
    ...revisionPopover
  }
}
    ${rt}`;let fs=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=na}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const za=t.J1`
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
    ${Ft}`;let bc=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=za}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const W=t.J1`
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
    ${on}`;let it=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=W}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Te=t.J1`
    query SubscriptionForEntity($subscribable: SubscribableInput!) {
  subscriptionForEntity(subscribable: $subscribable) {
    ...subscriptionId
  }
}
    ${Cn}`;let Ge=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Te}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Nt=t.J1`
    mutation ModerateEvidenceItem($input: ModerateEvidenceItemInput!) {
  moderateEvidenceItem(input: $input) {
    evidenceItem {
      id
    }
  }
}
    `;let gn=(()=>{class m extends t.sM{constructor(Ie){super(Ie),this.document=Nt}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Pn=t.J1`
    mutation ModerateAssertion($input: ModerateAssertionInput!) {
  moderateAssertion(input: $input) {
    assertion {
      id
    }
  }
}
    `;let hi=(()=>{class m extends t.sM{constructor(Ie){super(Ie),this.document=Pn}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const yo=t.J1`
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
    ${Zn}`;let Gi=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=yo}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const To=t.J1`
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
    ${jn}`;let Xn=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=To}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();t.J1`
    mutation UpdateSourceSuggestionStatus($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;const Po=t.J1`
    query SourcePopover($sourceId: Int!) {
  sourcePopover(id: $sourceId) {
    ...sourcePopover
  }
}
    ${Gn}`;let Qr=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Po}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Rr=t.J1`
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
    ${zi}`;let ws=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Rr}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const ms=t.J1`
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
    deprecated
  }
}
    `;let Br=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=ms}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const gs=t.J1`
    query TherapiesBrowse($first: Int, $last: Int, $before: String, $after: String, $name: String, $ncitId: String, $therapyAlias: String, $sortBy: TherapySort) {
  therapies(
    first: $first
    last: $last
    before: $before
    after: $after
    name: $name
    ncitId: $ncitId
    therapyAlias: $therapyAlias
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
    ${Oi}`;let vs=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=gs}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Ec=t.J1`
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
    ${lo}`;let xs=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Ec}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Tc=t.J1`
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
    ${lo}`;let Yo=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Tc}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const ns=t.J1`
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
    ${lo}`;let no=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=ns}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Ma=t.J1`
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
    ${lo}`;let Ps=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Ma}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const is=t.J1`
    query UserPopover($userId: Int!) {
  user(id: $userId) {
    ...popoverUser
  }
}
    ${Zi}`;let Gu=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=is}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Yc=t.J1`
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
    ${Bo}`;let Yu=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Yc}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Or=t.J1`
    query VariantGroupPopover($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...variantGroupPopoverFields
  }
}
    ${bo}`;let yl=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Or}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Ya=t.J1`
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
    ${Mr}`;let H1=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Ya}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const zc=t.J1`
    query VariantTypePopover($variantTypeId: Int!) {
  variantTypePopover(id: $variantTypeId) {
    ...variantTypePopover
  }
}
    ${rr}`;let Jr=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=zc}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const go=t.J1`
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
    ${lt}`;let ar=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=go}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Wc=t.J1`
    query CoordinatesCard($variantId: Int!) {
  variant(id: $variantId) {
    ...CoordinatesCardFields
  }
}
    ${mn}`;let fa=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Wc}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const ma=t.J1`
    query VariantPopover($variantId: Int!) {
  variant(id: $variantId) {
    ...variantPopoverFields
  }
}
    ${hn}`;let Kc=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=ma}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Fs=t.J1`
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
    ${En}`;let As=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Fs}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const su=t.J1`
    query VariantTypesForFeature($featureId: Int) {
  variantTypes(featureId: $featureId, first: 50) {
    edges {
      node {
        ...menuVariantType
      }
    }
  }
}
    ${Yn}`;let Xc=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=su}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Xs=t.J1`
    query BrowseVariants($variantName: String, $featureName: String, $diseaseName: String, $therapyName: String, $variantAlias: String, $variantTypeId: Int, $variantGroupId: Int, $variantTypeName: String, $hasNoVariantType: Boolean, $variantCategory: VariantCategories, $sortBy: VariantsSort, $first: Int, $last: Int, $before: String, $after: String) {
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
    category: $variantCategory
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
    ${Kn}`;let Cl=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Xs}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Sa=t.J1`
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
    `;let Qc=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Sa}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Mc=t.J1`
    query ViewerNotificationCount {
  notifications {
    unreadCount
  }
}
    `;let os=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Mc}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const ga=t.J1`
    mutation AddComment($input: AddCommentInput!) {
  addComment(input: $input) {
    clientMutationId
    comment {
      ...commentListNode
    }
  }
}
    ${Xe}`;let au=(()=>{class m extends t.sM{constructor(Ie){super(Ie),this.document=ga}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Wu=t.J1`
    query previewComment($commentText: String!) {
  previewCommentText(commentText: $commentText) {
    ...parsedCommentFragment
  }
}
    ${q}`;let _s=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Wu}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const cu=t.J1`
    query userTypeahead($queryTerm: String!) {
  userTypeahead(queryTerm: $queryTerm) {
    username
  }
}
    `;let Jc=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=cu}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const P=t.J1`
    query entityTypeahead($queryTerm: String!) {
  entityTypeahead(queryTerm: $queryTerm) {
    entityId
    tagType
    displayName
  }
}
    `;let ae=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=P}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const k=t.J1`
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
    `;let le=(()=>{class m extends t.sM{constructor(Ie){super(Ie),this.document=k}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const $e=t.J1`
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
    `;let mt=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=$e}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();t.J1`
    query LinkableGene($geneId: Int!) {
  gene(id: $geneId) {
    id
    name
    link
  }
}
    `,t.J1`
    query LinkableVariant($variantId: Int!) {
  variant(id: $variantId) {
    id
    name
    link
  }
}
    `,t.J1`
    query LinkableTherapy($therapyId: Int!) {
  therapy(id: $therapyId) {
    id
    name
    link
  }
}
    `,t.J1`
    query LinkableFeature($featureId: Int!) {
  feature(id: $featureId) {
    id
    name
    link
    featureType
  }
}
    `;const Er=t.J1`
    mutation DeprecateFeature($featureId: Int!, $deprecationReason: FeatureDeprecationReason!, $comment: String!, $organizationId: Int) {
  deprecateFeature(
    input: {featureId: $featureId, deprecationReason: $deprecationReason, comment: $comment, organizationId: $organizationId}
  ) {
    feature {
      id
      name
    }
  }
}
    `;let Hi=(()=>{class m extends t.sM{constructor(Ie){super(Ie),this.document=Er}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const So=t.J1`
    query VariantsForFeature($featureId: Int!) {
  variants(featureId: $featureId, first: 50) {
    nodes {
      id
      name
      link
      deprecated
      flagged
    }
  }
}
    `;let er=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=So}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const ia=t.J1`
    mutation FlagEntity($input: FlagEntityInput!) {
  flagEntity(input: $input) {
    flag {
      id
    }
  }
}
    `;let tr=(()=>{class m extends t.sM{constructor(Ie){super(Ie),this.document=ia}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const bl=t.J1`
    mutation ResolveFlag($input: ResolveFlagInput!) {
  resolveFlag(input: $input) {
    flag {
      id
    }
  }
}
    `;let El=(()=>{class m extends t.sM{constructor(Ie){super(Ie),this.document=bl}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Tl=t.J1`
    mutation UpdateSourceSuggestion($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;let Jd=(()=>{class m extends t.sM{constructor(Ie){super(Ie),this.document=Tl}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Zd=t.J1`
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
    `;let zl=(()=>{class m extends t.sM{constructor(Ie){super(Ie),this.document=Zd}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const j1=t.J1`
    mutation UpdateUserProfile($input: EditUserInput!) {
  editUser(input: $input) {
    user {
      id
    }
  }
}
    `;let Sc=(()=>{class m extends t.sM{constructor(Ie){super(Ie),this.document=j1}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const lu=t.J1`
    query Countries {
  countries {
    id
    name
  }
}
    `;let Zc=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=lu}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const U1=t.J1`
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
    `;let Ml=(()=>{class m extends t.sM{constructor(Ie){super(Ie),this.document=U1}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Ku=t.J1`
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
      deprecated
      flagged
    }
  }
}
    `;let Sl=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Ku}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const uu=t.J1`
    query AssertionRevisableFields($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...RevisableAssertionFields
  }
}
    ${oi}`;let du=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=uu}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Da=t.J1`
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
    `;let Xu=(()=>{class m extends t.sM{constructor(Ie){super(Ie),this.document=Da}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Dl=t.J1`
    mutation SubmitAssertion($input: SubmitAssertionInput!) {
  submitAssertion(input: $input) {
    clientMutationId
    assertion {
      id
    }
  }
}
    `;let qc=(()=>{class m extends t.sM{constructor(Ie){super(Ie),this.document=Dl}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Qu=t.J1`
    query EvidenceItemRevisableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...RevisableEvidenceFields
  }
}
    ${Mi}`;let Ol=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Qu}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const el=t.J1`
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
    `;let Cs=(()=>{class m extends t.sM{constructor(Ie){super(Ie),this.document=el}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();t.J1`
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
      deprecated
    }
  }
}
    `,t.J1`
    query EvidenceSubmittableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...SubmittableEvidenceFields
  }
}
    ${Ni}`;const hu=t.J1`
    mutation SubmitEvidenceItem($input: SubmitEvidenceItemInput!) {
  submitEvidence(input: $input) {
    clientMutationId
    evidenceItem {
      id
    }
  }
}
    `;let Wa=(()=>{class m extends t.sM{constructor(Ie){super(Ie),this.document=hu}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Zu=t.J1`
    query ExistingEvidenceCount($molecularProfileId: Int!, $sourceId: Int!) {
  evidenceItems(molecularProfileId: $molecularProfileId, sourceId: $sourceId) {
    totalCount
  }
}
    `;let qu=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Zu}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const e1=t.J1`
    query FullyCuratedSource($sourceId: Int!) {
  source(id: $sourceId) {
    fullyCurated
  }
}
    `;let Il=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=e1}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const pu=t.J1`
    query FactorRevisableFields($featureId: Int!) {
  feature(id: $featureId) {
    ...RevisableFactorFields
  }
}
    ${so}`;let fu=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=pu}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const tl=t.J1`
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
    `;let Ka=(()=>{class m extends t.sM{constructor(Ie){super(Ie),this.document=tl}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const t1=t.J1`
    query FactorVariantRevisableFields($variantId: Int!) {
  variant(id: $variantId) {
    id
    ... on FactorVariant {
      ...RevisableFactorVariantFields
    }
  }
}
    ${Yi}`;let n1=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=t1}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const gr=t.J1`
    mutation SuggestFactorVariantRevision($input: SuggestFactorVariantRevisionInput!) {
  suggestFactorVariantRevision(input: $input) {
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
    `;let mu=(()=>{class m extends t.sM{constructor(Ie){super(Ie),this.document=gr}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const gu=t.J1`
    query FusionRevisableFields($featureId: Int!) {
  feature(id: $featureId) {
    ...RevisableFusionFields
  }
}
    ${Xo}`;let Oc=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=gu}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const o1=t.J1`
    mutation SuggestFusionRevision($input: SuggestFusionRevisionInput!) {
  suggestFusionRevision(input: $input) {
    clientMutationId
    results {
      newlyCreated
      id
      fieldName
    }
  }
}
    `;let r1=(()=>{class m extends t.sM{constructor(Ie){super(Ie),this.document=o1}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const s1=t.J1`
    query FusionVariantRevisableFields($variantId: Int!) {
  variant(id: $variantId) {
    id
    ... on FusionVariant {
      ...RevisableFusionVariantFields
    }
  }
}
    ${Ki}`;let a1=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=s1}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const c1=t.J1`
    mutation SuggestFusionVariantRevision($input: SuggestFusionVariantRevisionInput!) {
  suggestFusionVariantRevision(input: $input) {
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
    `;let l1=(()=>{class m extends t.sM{constructor(Ie){super(Ie),this.document=c1}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const wl=t.J1`
    query GeneRevisableFields($featureId: Int!) {
  feature(id: $featureId) {
    ...RevisableGeneFields
  }
}
    ${Zo}`;let nl=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=wl}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const No=t.J1`
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
    `;let ni=(()=>{class m extends t.sM{constructor(Ie){super(Ie),this.document=No}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Pi=t.J1`
    query GeneVariantRevisableFields($variantId: Int!) {
  variant(id: $variantId) {
    id
    ... on GeneVariant {
      ...RevisableGeneVariantFields
    }
  }
}
    ${pr}`;let cr=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Pi}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Rs=t.J1`
    mutation SuggestGeneVariantRevision($input: SuggestGeneVariantRevisionInput!) {
  suggestGeneVariantRevision(input: $input) {
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
    `;let Ir=(()=>{class m extends t.sM{constructor(Ie){super(Ie),this.document=Rs}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const $r=t.J1`
    query MolecularProfileRevisableFields($molecularProfileId: Int!) {
  molecularProfile(id: $molecularProfileId) {
    ...RevisableMolecularProfileFields
  }
}
    ${fo}`;let Xa=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=$r}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const ko=t.J1`
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
    `;let lr=(()=>{class m extends t.sM{constructor(Ie){super(Ie),this.document=ko}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Ns=t.J1`
    mutation SubmitSource($input: SuggestSourceInput!) {
  suggestSource(input: $input) {
    clientMutationId
    sourceSuggestion {
      id
    }
  }
}
    `;let Ri=(()=>{class m extends t.sM{constructor(Ie){super(Ie),this.document=Ns}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Oa=t.J1`
    query SourceSuggestionChecks($sourceId: Int!) {
  source(id: $sourceId) {
    fullyCurated
  }
  sourceSuggestions(sourceId: $sourceId) {
    filteredCount
  }
}
    `;let xl=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Oa}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Qa=t.J1`
    query VariantGroupRevisableFields($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupRevisableFields
  }
}
    ${po}`;let Wo=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Qa}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Qs=t.J1`
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
    `;let Ja=(()=>{class m extends t.sM{constructor(Ie){super(Ie),this.document=Qs}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();t.J1`
    query VariantGroupSubmittableFields($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...SubmittableVariantGroupFields
  }
}
    ${fr}`;const vu=t.J1`
    mutation SubmitVariantGroup($input: SubmitVariantGroupInput!) {
  submitVariantGroup(input: $input) {
    clientMutationId
    variantGroup {
      id
    }
  }
}
    `;let ks=(()=>{class m extends t.sM{constructor(Ie){super(Ie),this.document=vu}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const il=t.J1`
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
    `;let bs=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=il}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Ti=t.J1`
    query AcmgCodeSelectTypeahead($code: String!) {
  acmgCodesTypeahead(queryTerm: $code) {
    ...AcmgCodeSelectTypeaheadFields
  }
}
    ${$o}`;let Pl=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Ti}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const wc=t.J1`
    query AcmgCodeSelectTag($id: Int!) {
  acmgCode(id: $id) {
    ...AcmgCodeSelectTypeaheadFields
  }
}
    ${$o}`;let Js=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=wc}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const ol=t.J1`
    query ClingenCodeSelectTypeahead($code: String!) {
  clingenCodesTypeahead(queryTerm: $code) {
    ...ClingenCodeSelectTypeaheadFields
  }
}
    ${Lr}`;let Za=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=ol}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const or=t.J1`
    query ClingenCodeSelectTag($id: Int!) {
  clingenCode(id: $id) {
    ...ClingenCodeSelectTypeaheadFields
  }
}
    ${Lr}`;let rl=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=or}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Tr=t.J1`
    mutation QuickAddDisease($name: String!, $doid: String) {
  addDisease(input: {name: $name, doid: $doid}) {
    ...QuickAddDiseaseFields
  }
}
    ${qi}`;let Nr=(()=>{class m extends t.sM{constructor(Ie){super(Ie),this.document=Tr}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Fl=t.J1`
    query DiseaseSelectTypeahead($name: String!) {
  diseaseTypeahead(queryTerm: $name) {
    ...DiseaseSelectTypeaheadFields
  }
}
    ${ro}`;let Ia=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Fl}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const sl=t.J1`
    query DiseaseSelectTag($id: Int!) {
  disease(id: $id) {
    ...DiseaseSelectTypeaheadFields
  }
}
    ${ro}`;let Zr=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=sl}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const xc=t.J1`
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
    ${xn}`;let u1=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=xc}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const d1=t.J1`
    query EvidenceSelectTypeahead($eid: Int!) {
  evidenceItems(id: $eid) {
    nodes {
      ...EvidenceSelectTypeaheadFields
    }
  }
}
    ${Ci}`;let Al=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=d1}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const _u=t.J1`
    query EvidenceSelectTag($eid: Int!) {
  evidenceItem(id: $eid) {
    ...EvidenceSelectTypeaheadFields
  }
}
    ${Ci}`;let h1=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=_u}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const al=t.J1`
    mutation QuickAddFeature($name: String!, $organizationId: Int, $featureType: CreateableFeatureTypes!) {
  createFeature(
    input: {name: $name, organizationId: $organizationId, featureType: $featureType}
  ) {
    ...QuickAddFeatureFields
  }
}
    ${Ce}`;let W1=(()=>{class m extends t.sM{constructor(Ie){super(Ie),this.document=al}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const qd=t.J1`
    query FeatureSelectTypeahead($queryTerm: String!, $featureType: FeatureInstanceTypes) {
  featureTypeahead(queryTerm: $queryTerm, featureType: $featureType) {
    ...FeatureSelectTypeaheadFields
  }
}
    ${Ve}`;let K1=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=qd}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const X1=t.J1`
    query FeatureSelectTag($featureId: Int!) {
  feature(id: $featureId) {
    ...FeatureSelectTypeaheadFields
  }
}
    ${Ve}`;let Q1=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=X1}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const J1=t.J1`
    mutation SelectOrCreateFusion($organizationId: Int, $fivePrimeGeneId: Int, $fivePrimePartnerStatus: FusionPartnerStatus!, $threePrimeGeneId: Int, $threePrimePartnerStatus: FusionPartnerStatus!) {
  createFusionFeature(
    input: {organizationId: $organizationId, fivePrimeGene: {geneId: $fivePrimeGeneId, partnerStatus: $fivePrimePartnerStatus}, threePrimeGene: {geneId: $threePrimeGeneId, partnerStatus: $threePrimePartnerStatus}}
  ) {
    new
    feature {
      ...FeatureSummaryFields
    }
  }
}
    ${tt}`;let Z1=(()=>{class m extends t.sM{constructor(Ie){super(Ie),this.document=J1}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const q1=t.J1`
    query MolecularProfileSelectTypeahead($name: String!, $geneId: Int) {
  molecularProfiles(name: $name, geneId: $geneId, first: 25) {
    nodes {
      ...MolecularProfileSelectTypeaheadFields
    }
  }
}
    ${gi}`;let ed=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=q1}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const td=t.J1`
    query MolecularProfileSelectTag($molecularProfileId: Int!) {
  molecularProfile(id: $molecularProfileId) {
    ...MolecularProfileSelectTypeaheadFields
  }
}
    ${gi}`;let nd=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=td}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const id=t.J1`
    query PreviewMolecularProfileName2($mpStructure: MolecularProfileComponentInput) {
  previewMolecularProfileName(structure: $mpStructure) {
    existingMolecularProfile {
      id
      name
      link
      deprecated
      flagged
    }
    segments {
      ...PreviewMpName2
    }
    deprecatedVariants {
      id
      name
      link
      deprecated
      flagged
    }
  }
}
    ${nt}`;let yu=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=id}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const p1=t.J1`
    query MpExpressionEditorPrepopulate($mpId: Int!) {
  molecularProfile(id: $mpId) {
    id
    parsedName {
      ...MolecularProfileParsedName
    }
    rawName
    deprecated
    flagged
  }
}
    ${On}`;let od=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=p1}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const rd=t.J1`
    mutation CreateMolecularProfile2($mpStructure: MolecularProfileComponentInput!, $organizationId: Int) {
  createMolecularProfile(
    input: {structure: $mpStructure, organizationId: $organizationId}
  ) {
    molecularProfile {
      id
      name
      link
      deprecated
      flagged
    }
  }
}
    `;let sd=(()=>{class m extends t.sM{constructor(Ie){super(Ie),this.document=rd}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Hr=t.J1`
    query NccnGuidelineSelectTypeahead($name: String!) {
  nccnGuidelinesTypeahead(queryTerm: $name) {
    ...NccnGuidelineSelectTypeaheadFields
  }
}
    ${Mt}`;let Rl=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Hr}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Cu=t.J1`
    query NccnGuidelineSelectTag($id: Int!) {
  nccnGuideline(id: $id) {
    ...NccnGuidelineSelectTypeaheadFields
  }
}
    ${Mt}`;let Nl=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Cu}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const kl=t.J1`
    query PhenotypeSelectTypeahead($name: String!) {
  phenotypeTypeahead(queryTerm: $name) {
    ...PhenotypeSelectTypeaheadFields
  }
}
    ${pn}`;let f1=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=kl}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const m1=t.J1`
    query PhenotypeSelectTag($id: Int!) {
  phenotype(id: $id) {
    ...PhenotypeSelectTypeaheadFields
  }
}
    ${pn}`;let Vl=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=m1}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Ll=t.J1`
    query QuickAddSourceCheckCitation($sourceType: SourceSource!, $citationId: String!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;let bu=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Ll}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Pc=t.J1`
    mutation QuickAddSourceRemoteCitation($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      id
      citationId
      sourceType
    }
  }
}
    `;let g1=(()=>{class m extends t.sM{constructor(Ie){super(Ie),this.document=Pc}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Vs=t.J1`
    query SourceSelectTypeahead($partialCitationId: String!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceSelectTypeaheadFields
  }
}
    ${$i}`;let Bl=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Vs}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const $l=t.J1`
    query SourceSelectTag($id: Int!) {
  source(id: $id) {
    ...SourceSelectTypeaheadFields
  }
}
    ${$i}`;let vo=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=$l}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const cl=t.J1`
    mutation QuickAddTherapy($name: String!, $ncitId: String) {
  addTherapy(input: {name: $name, ncitId: $ncitId}) {
    ...QuickAddTherapyFields
  }
}
    ${Wt}`;let qa=(()=>{class m extends t.sM{constructor(Ie){super(Ie),this.document=cl}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const jr=t.J1`
    query TherapySelectTypeahead($name: String!) {
  therapyTypeahead(queryTerm: $name) {
    ...TherapySelectTypeaheadFields
  }
}
    ${vi}`;let eh=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=jr}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Hl=t.J1`
    query TherapySelectTag($id: Int!) {
  therapy(id: $id) {
    ...TherapySelectTypeaheadFields
  }
}
    ${vi}`;let Fc=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Hl}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Es=t.J1`
    mutation SelectOrCreateFusionVariant($organizationId: Int, $featureId: Int!, $coordinates: FusionVariantInput!) {
  createFusionVariant(
    input: {organizationId: $organizationId, featureId: $featureId, coordinates: $coordinates}
  ) {
    ...CreateFusionVariantFields
  }
}
    ${rn}`;let ad=(()=>{class m extends t.sM{constructor(Ie){super(Ie),this.document=Es}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Eu=t.J1`
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
    ${Kn}`;let th=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Eu}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Ls=t.J1`
    mutation QuickAddVariant($name: String!, $featureId: Int!, $organizationId: Int) {
  createVariant(
    input: {name: $name, featureId: $featureId, organizationId: $organizationId}
  ) {
    ...QuickAddVariantFields
  }
}
    ${Mn}`;let v1=(()=>{class m extends t.sM{constructor(Ie){super(Ie),this.document=Ls}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const jl=t.J1`
    query VariantSelectTypeahead($name: String!, $featureId: Int) {
  variantsTypeahead(queryTerm: $name, featureId: $featureId) {
    ...VariantSelectTypeaheadFields
  }
}
    ${tn}`;let _1=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=jl}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Bs=t.J1`
    query VariantSelectTag($variantId: Int!) {
  variant(id: $variantId) {
    ... on Variant {
      ...VariantSelectTypeaheadFields
    }
    ... on GeneVariant {
      ...VariantSelectTypeaheadFields
    }
    ... on FactorVariant {
      ...VariantSelectTypeaheadFields
    }
    ... on FusionVariant {
      ...VariantSelectTypeaheadFields
    }
  }
}
    ${tn}`;let ec=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Bs}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Ul=t.J1`
    query VariantTypeSelectTypeahead($name: String!) {
  variantTypeTypeahead(queryTerm: $name) {
    ...VariantTypeSelectTypeaheadFields
  }
}
    ${Ln}`;let Gl=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Ul}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Tu=t.J1`
    query VariantTypeSelectTag($id: Int!) {
  variantType(id: $id) {
    ...VariantTypeSelectTypeaheadFields
  }
}
    ${Ln}`;let Zs=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Tu}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const ji=t.J1`
    query AssertionDetail($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionDetailFields
  }
}
    ${Qn}`;let Yl=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=ji}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Wl=t.J1`
    query AssertionSummary($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionSummaryFields
  }
}
    ${qn}`;let y1=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Wl}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const cd=t.J1`
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
    `;let C1=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=cd}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const ld=t.J1`
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
    `;let ud=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=ld}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const b1=t.J1`
    query DiseaseDetail($diseaseId: Int!) {
  disease(id: $diseaseId) {
    id
    name
    doid
    diseaseUrl
    displayName
    diseaseAliases
    link
    deprecated
  }
}
    `;let tc=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=b1}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const dd=t.J1`
    query DiseasesSummary($diseaseId: Int!) {
  disease(id: $diseaseId) {
    ...DiseasesSummaryFields
  }
}
    ${ei}`;let hd=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=dd}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const pd=t.J1`
    query EvidenceDetail($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceDetailFields
  }
}
    ${ci}`;let fd=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=pd}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const md=t.J1`
    query EvidenceSummary($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...EvidenceSummaryFields
  }
}
    ${mi}`;let Dn=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=md}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const oo=t.J1`
    query FeatureDetail($featureId: Int!) {
  feature(id: $featureId) {
    ...FeatureDetailFields
  }
}
    ${Ei}`;let E1=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=oo}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const T1=t.J1`
    query FeaturesSummary($featureId: Int!) {
  feature(id: $featureId) {
    ...FeatureSummaryFields
  }
}
    ${tt}`;let Io=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=T1}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const ll=t.J1`
    query MolecularProfileDetail($mpId: Int!) {
  molecularProfile(id: $mpId) {
    ...MolecularProfileDetailFields
  }
}
    ${Xi}`;let ri=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=ll}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Ho=t.J1`
    query MolecularProfileSummary($mpId: Int!) {
  molecularProfile(id: $mpId) {
    ...MolecularProfileSummaryFields
  }
}
    ${_o}`;let nc=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Ho}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Ac=t.J1`
    query OrganizationDetail($organizationId: Int!) {
  organization(id: $organizationId) {
    ...OrganizationDetailFields
  }
}
    ${ir}`;let ul=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Ac}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const zu=t.J1`
    query OrganizationGroups($organizationId: Int!) {
  organization(id: $organizationId) {
    subGroups {
      ...OrganizationGroupsFields
    }
  }
}
    ${Ur}`;let Kl=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=zu}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const ra=t.J1`
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
    ${Do}`;let z1=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=ra}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Mu=t.J1`
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
    `;let qr=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Mu}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const sa=t.J1`
    query DataReleases {
  dataReleases {
    ...Release
  }
}
    ${Qo}`;let Su=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=sa}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const qs=t.J1`
    query SourceDetail($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceDetailFields
  }
}
    ${Dr}`;let ea=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=qs}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const dl=t.J1`
    query SourceSummary($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceSummaryFields
  }
}
    ${_r}`;let M1=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=dl}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Li=t.J1`
    query TherapyDetail($therapyId: Int!) {
  therapy(id: $therapyId) {
    id
    name
    ncitId
    therapyUrl
    therapyAliases
    link
    deprecated
  }
}
    `;let S1=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=Li}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const ic=t.J1`
    query TherapiesSummary($therapyId: Int!) {
  therapy(id: $therapyId) {
    ...TherapiesSummaryFields
  }
}
    ${sr}`;let Xl=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=ic}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const wa=t.J1`
    query UserDetail($userId: Int!) {
  user(id: $userId) {
    ...UserDetailFields
  }
}
    ${Ao}`;let Rc=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=wa}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const rs=t.J1`
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
    ${Uo}
${Fr}
${Ms}
${Gr}`;let D1=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=rs}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Du=t.J1`
    mutation UpdateNotificationStatus($input: UpdateNotificationStatusInput!) {
  updateNotificationStatus(input: $input) {
    notifications {
      ...notificationNode
    }
  }
}
    ${Gr}`;let Ql=(()=>{class m extends t.sM{constructor(Ie){super(Ie),this.document=Du}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const hl=t.J1`
    mutation Unsubscribe($input: UnsubscribeInput!) {
  unsubscribe(input: $input) {
    unsubscribedEntities {
      ...subscribable
    }
  }
}
    ${Mo}`;let Jo=(()=>{class m extends t.sM{constructor(Ie){super(Ie),this.document=hl}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const ur=t.J1`
    mutation Subscribe($input: SubscribeInput!) {
  subscribe(input: $input) {
    subscriptions {
      id
    }
  }
}
    `;let oc=(()=>{class m extends t.sM{constructor(Ie){super(Ie),this.document=ur}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const O1=t.J1`
    query VariantGroupDetail($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupDetailFields
  }
}
    ${Ss}`;let wr=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=O1}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const rc=t.J1`
    query VariantGroupsSummary($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupSummaryFields
  }
}
    ${ds}`;let Vo=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=rc}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const I1=t.J1`
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
    `;let w1=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=I1}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const xa=t.J1`
    query VariantDetail($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantDetailFields
  }
}
    ${Ze}`;let Ou=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=xa}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const sc=t.J1`
    query CoordinateIdsForVariant($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantCoordinateIds
  }
}
    ${Fn}`;let x1=(()=>{class m extends t.XK{constructor(Ie){super(Ie),this.document=sc}static#e=this.\u0275fac=function(pt){return new(pt||m)(r.KVO(t.Ic))};static#t=this.\u0275prov=r.jDH({token:m,factory:m.\u0275fac,providedIn:"root"})}return m})();const Nc=t.J1`
    query VariantSummary($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantSummaryFields
  }
}