"use strict";(self.webpackChunkdecidim_application=self.webpackChunkdecidim_application||[]).push([[5092],{45092:function(e,n,t){t.r(n),t.d(n,{c:function(){return m}});var i=t(97480),l=Object.defineProperty,o=(e,n)=>l(e,"name",{value:n,configurable:!0});function r(e,n){return n.forEach((function(n){n&&"string"!==typeof n&&!Array.isArray(n)&&Object.keys(n).forEach((function(t){if("default"!==t&&!(t in e)){var i=Object.getOwnPropertyDescriptor(n,t);Object.defineProperty(e,t,i.get?i:{enumerable:!0,get:function(){return n[t]}})}}))})),Object.freeze(e)}o(r,"_mergeNamespaces");var a={exports:{}};!function(e){var n={},t=/[^\s\u00a0]/,i=e.Pos,l=e.cmpPos;function r(e){var n=e.search(t);return-1==n?0:n}function a(e,n,t){return/\bstring\b/.test(e.getTokenTypeAt(i(n.line,0)))&&!/^[\'\"\`]/.test(t)}function c(e,n){var t=e.getMode();return!1!==t.useInnerComments&&t.innerMode?e.getModeAt(n):t}o(r,"firstNonWS"),e.commands.toggleComment=function(e){e.toggleComment()},e.defineExtension("toggleComment",(function(e){e||(e=n);for(var t=this,l=1/0,o=this.listSelections(),r=null,a=o.length-1;a>=0;a--){var c=o[a].from(),m=o[a].to();c.line>=l||(m.line>=l&&(m=i(l,0)),l=c.line,null==r?t.uncomment(c,m,e)?r="un":(t.lineComment(c,m,e),r="line"):"un"==r?t.uncomment(c,m,e):t.lineComment(c,m,e))}})),o(a,"probablyInsideString"),o(c,"getMode"),e.defineExtension("lineComment",(function(e,l,o){o||(o=n);var m=this,f=c(m,e),s=m.getLine(e.line);if(null!=s&&!a(m,e,s)){var g=o.lineComment||f.lineComment;if(g){var u=Math.min(0!=l.ch||l.line==e.line?l.line+1:l.line,m.lastLine()+1),d=null==o.padding?" ":o.padding,h=o.commentBlankLines||e.line==l.line;m.operation((function(){if(o.indent){for(var n=null,l=e.line;l<u;++l){var a=(c=m.getLine(l)).slice(0,r(c));(null==n||n.length>a.length)&&(n=a)}for(l=e.line;l<u;++l){var c=m.getLine(l),f=n.length;(h||t.test(c))&&(c.slice(0,f)!=n&&(f=r(c)),m.replaceRange(n+g+d,i(l,0),i(l,f)))}}else for(l=e.line;l<u;++l)(h||t.test(m.getLine(l)))&&m.replaceRange(g+d,i(l,0))}))}else(o.blockCommentStart||f.blockCommentStart)&&(o.fullLines=!0,m.blockComment(e,l,o))}})),e.defineExtension("blockComment",(function(e,o,r){r||(r=n);var a=this,m=c(a,e),f=r.blockCommentStart||m.blockCommentStart,s=r.blockCommentEnd||m.blockCommentEnd;if(f&&s){if(!/\bcomment\b/.test(a.getTokenTypeAt(i(e.line,0)))){var g=Math.min(o.line,a.lastLine());g!=e.line&&0==o.ch&&t.test(a.getLine(g))&&--g;var u=null==r.padding?" ":r.padding;e.line>g||a.operation((function(){if(0!=r.fullLines){var n=t.test(a.getLine(g));a.replaceRange(u+s,i(g)),a.replaceRange(f+u,i(e.line,0));var c=r.blockCommentLead||m.blockCommentLead;if(null!=c)for(var d=e.line+1;d<=g;++d)(d!=g||n)&&a.replaceRange(c+u,i(d,0))}else{var h=0==l(a.getCursor("to"),o),p=!a.somethingSelected();a.replaceRange(s,o),h&&a.setSelection(p?o:a.getCursor("from"),o),a.replaceRange(f,e)}}))}}else(r.lineComment||m.lineComment)&&0!=r.fullLines&&a.lineComment(e,o,r)})),e.defineExtension("uncomment",(function(e,l,o){o||(o=n);var r,a=this,m=c(a,e),f=Math.min(0!=l.ch||l.line==e.line?l.line:l.line-1,a.lastLine()),s=Math.min(e.line,f),g=o.lineComment||m.lineComment,u=[],d=null==o.padding?" ":o.padding;e:if(g){for(var h=s;h<=f;++h){var p=a.getLine(h),v=p.indexOf(g);if(v>-1&&!/comment/.test(a.getTokenTypeAt(i(h,v+1)))&&(v=-1),-1==v&&t.test(p))break e;if(v>-1&&t.test(p.slice(0,v)))break e;u.push(p)}if(a.operation((function(){for(var e=s;e<=f;++e){var n=u[e-s],t=n.indexOf(g),l=t+g.length;t<0||(n.slice(l,l+d.length)==d&&(l+=d.length),r=!0,a.replaceRange("",i(e,t),i(e,l)))}})),r)return!0}var b=o.blockCommentStart||m.blockCommentStart,C=o.blockCommentEnd||m.blockCommentEnd;if(!b||!C)return!1;var k=o.blockCommentLead||m.blockCommentLead,L=a.getLine(s),x=L.indexOf(b);if(-1==x)return!1;var O=f==s?L:a.getLine(f),y=O.indexOf(C,f==s?x+b.length:0),S=i(s,x+1),R=i(f,y+1);if(-1==y||!/comment/.test(a.getTokenTypeAt(S))||!/comment/.test(a.getTokenTypeAt(R))||a.getRange(S,R,"\n").indexOf(C)>-1)return!1;var T=L.lastIndexOf(b,e.ch),E=-1==T?-1:L.slice(0,e.ch).indexOf(C,T+b.length);if(-1!=T&&-1!=E&&E+C.length!=e.ch)return!1;E=O.indexOf(C,l.ch);var M=O.slice(l.ch).lastIndexOf(b,E-l.ch);return T=-1==E||-1==M?-1:l.ch+M,(-1==E||-1==T||T==l.ch)&&(a.operation((function(){a.replaceRange("",i(f,y-(d&&O.slice(y-d.length,y)==d?d.length:0)),i(f,y+C.length));var e=x+b.length;if(d&&L.slice(e,e+d.length)==d&&(e+=d.length),a.replaceRange("",i(s,x),i(s,e)),k)for(var n=s+1;n<=f;++n){var l=a.getLine(n),o=l.indexOf(k);if(-1!=o&&!t.test(l.slice(0,o))){var r=o+k.length;d&&l.slice(r,r+d.length)==d&&(r+=d.length),a.replaceRange("",i(n,o),i(n,r))}}})),!0)}))}(i.a.exports);var c=a.exports,m=Object.freeze(r({__proto__:null,[Symbol.toStringTag]:"Module",default:c},[a.exports]))}}]);
//# sourceMappingURL=5092-a0c8734637eee297cc79.chunk.js.map