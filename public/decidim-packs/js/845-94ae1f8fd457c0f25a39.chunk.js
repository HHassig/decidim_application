"use strict";(self.webpackChunkdecidim_application=self.webpackChunkdecidim_application||[]).push([[845],{60845:function(e,t,n){n.r(t),n.d(t,{c:function(){return l}});var r=n(97480),i=Object.defineProperty,a=(e,t)=>i(e,"name",{value:t,configurable:!0});function o(e,t){return t.forEach((function(t){t&&"string"!==typeof t&&!Array.isArray(t)&&Object.keys(t).forEach((function(n){if("default"!==n&&!(n in e)){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})}}))})),Object.freeze(e)}a(o,"_mergeNamespaces");var s={exports:{}};!function(e){var t={pairs:"()[]{}''\"\"",closeBefore:")]}'\":;>",triples:"",explode:"[]{}"},n=e.Pos;function r(e,n){return"pairs"==n&&"string"==typeof e?e:"object"==typeof e&&null!=e[n]?e[n]:t[n]}e.defineOption("autoCloseBrackets",!1,(function(t,n,a){a&&a!=e.Init&&(t.removeKeyMap(i),t.state.closeBrackets=null),n&&(o(r(n,"pairs")),t.state.closeBrackets=n,t.addKeyMap(i))})),a(r,"getOption");var i={Backspace:l,Enter:u};function o(e){for(var t=0;t<e.length;t++){var n=e.charAt(t),r="'"+n+"'";i[r]||(i[r]=s(n))}}function s(e){return function(t){return p(t,e)}}function c(e){var t=e.state.closeBrackets;return!t||t.override?t:e.getModeAt(e.getCursor()).closeBrackets||t}function l(t){var i=c(t);if(!i||t.getOption("disableInput"))return e.Pass;for(var a=r(i,"pairs"),o=t.listSelections(),s=0;s<o.length;s++){if(!o[s].empty())return e.Pass;var l=d(t,o[s].head);if(!l||a.indexOf(l)%2!=0)return e.Pass}for(s=o.length-1;s>=0;s--){var u=o[s].head;t.replaceRange("",n(u.line,u.ch-1),n(u.line,u.ch+1),"+delete")}}function u(t){var n=c(t),i=n&&r(n,"explode");if(!i||t.getOption("disableInput"))return e.Pass;for(var a=t.listSelections(),o=0;o<a.length;o++){if(!a[o].empty())return e.Pass;var s=d(t,a[o].head);if(!s||i.indexOf(s)%2!=0)return e.Pass}t.operation((function(){var e=t.lineSeparator()||"\n";t.replaceSelection(e+e,null),f(t,-1),a=t.listSelections();for(var n=0;n<a.length;n++){var r=a[n].head.line;t.indentLine(r,null,!0),t.indentLine(r+1,null,!0)}}))}function f(e,t){for(var n=[],r=e.listSelections(),i=0,a=0;a<r.length;a++){var o=r[a];o.head==e.getCursor()&&(i=a);var s=o.head.ch||t>0?{line:o.head.line,ch:o.head.ch+t}:{line:o.head.line-1};n.push({anchor:s,head:s})}e.setSelections(n,i)}function h(t){var r=e.cmpPos(t.anchor,t.head)>0;return{anchor:new n(t.anchor.line,t.anchor.ch+(r?-1:1)),head:new n(t.head.line,t.head.ch+(r?1:-1))}}function p(t,i){var a=c(t);if(!a||t.getOption("disableInput"))return e.Pass;var o=r(a,"pairs"),s=o.indexOf(i);if(-1==s)return e.Pass;for(var l,u=r(a,"closeBefore"),p=r(a,"triples"),d=o.charAt(s+1)==i,v=t.listSelections(),b=s%2==0,k=0;k<v.length;k++){var S,y=v[k],O=y.head,P=t.getRange(O,n(O.line,O.ch+1));if(b&&!y.empty())S="surround";else if(!d&&b||P!=i)if(d&&O.ch>1&&p.indexOf(i)>=0&&t.getRange(n(O.line,O.ch-2),O)==i+i){if(O.ch>2&&/\bstring/.test(t.getTokenTypeAt(n(O.line,O.ch-2))))return e.Pass;S="addFour"}else if(d){var m=0==O.ch?" ":t.getRange(n(O.line,O.ch-1),O);if(e.isWordChar(P)||m==i||e.isWordChar(m))return e.Pass;S="both"}else{if(!b||!(0===P.length||/\s/.test(P)||u.indexOf(P)>-1))return e.Pass;S="both"}else S=d&&g(t,O)?"both":p.indexOf(i)>=0&&t.getRange(O,n(O.line,O.ch+3))==i+i+i?"skipThree":"skip";if(l){if(l!=S)return e.Pass}else l=S}var x=s%2?o.charAt(s-1):i,A=s%2?i:o.charAt(s+1);t.operation((function(){if("skip"==l)f(t,1);else if("skipThree"==l)f(t,3);else if("surround"==l){for(var e=t.getSelections(),n=0;n<e.length;n++)e[n]=x+e[n]+A;for(t.replaceSelections(e,"around"),e=t.listSelections().slice(),n=0;n<e.length;n++)e[n]=h(e[n]);t.setSelections(e)}else"both"==l?(t.replaceSelection(x+A,null),t.triggerElectric(x+A),f(t,-1)):"addFour"==l&&(t.replaceSelection(x+x+x+x,"before"),f(t,1))}))}function d(e,t){var r=e.getRange(n(t.line,t.ch-1),n(t.line,t.ch+1));return 2==r.length?r:null}function g(e,t){var r=e.getTokenAt(n(t.line,t.ch+1));return/\bstring/.test(r.type)&&r.start==t.ch&&(0==t.ch||!/\bstring/.test(e.getTokenTypeAt(t)))}a(o,"ensureBound"),o(t.pairs+"`"),a(s,"handler"),a(c,"getConfig"),a(l,"handleBackspace"),a(u,"handleEnter"),a(f,"moveSel"),a(h,"contractSelection"),a(p,"handleChar"),a(d,"charsAround"),a(g,"stringStartsAfter")}(r.a.exports);var c=s.exports,l=Object.freeze(o({__proto__:null,[Symbol.toStringTag]:"Module",default:c},[s.exports]))}}]);
//# sourceMappingURL=845-94ae1f8fd457c0f25a39.chunk.js.map