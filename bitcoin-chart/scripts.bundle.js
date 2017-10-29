
/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});

!function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e(require,exports,module):t.Tether=e()}(this,function(t,e,o){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t){var e=t.getBoundingClientRect(),o={};for(var i in e)o[i]=e[i];if(t.ownerDocument!==document){var r=t.ownerDocument.defaultView.frameElement;if(r){var s=n(r);o.top+=s.top,o.bottom+=s.top,o.left+=s.left,o.right+=s.left}}return o}function r(t){var e=getComputedStyle(t)||{},o=e.position,i=[];if("fixed"===o)return[t];for(var n=t;(n=n.parentNode)&&n&&1===n.nodeType;){var r=void 0;try{r=getComputedStyle(n)}catch(s){}if("undefined"==typeof r||null===r)return i.push(n),i;var a=r,f=a.overflow,l=a.overflowX,h=a.overflowY;/(auto|scroll)/.test(f+h+l)&&("absolute"!==o||["relative","absolute","fixed"].indexOf(r.position)>=0)&&i.push(n)}return i.push(t.ownerDocument.body),t.ownerDocument!==document&&i.push(t.ownerDocument.defaultView),i}function s(){A&&document.body.removeChild(A),A=null}function a(t){var e=void 0;t===document?(e=document,t=document.documentElement):e=t.ownerDocument;var o=e.documentElement,i=n(t),r=P();return i.top-=r.top,i.left-=r.left,"undefined"==typeof i.width&&(i.width=document.body.scrollWidth-i.left-i.right),"undefined"==typeof i.height&&(i.height=document.body.scrollHeight-i.top-i.bottom),i.top=i.top-o.clientTop,i.left=i.left-o.clientLeft,i.right=e.body.clientWidth-i.width-i.left,i.bottom=e.body.clientHeight-i.height-i.top,i}function f(t){return t.offsetParent||document.documentElement}function l(){if(M)return M;var t=document.createElement("div");t.style.width="100%",t.style.height="200px";var e=document.createElement("div");h(e.style,{position:"absolute",top:0,left:0,pointerEvents:"none",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),e.appendChild(t),document.body.appendChild(e);var o=t.offsetWidth;e.style.overflow="scroll";var i=t.offsetWidth;o===i&&(i=e.clientWidth),document.body.removeChild(e);var n=o-i;return M={width:n,height:n}}function h(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=[];return Array.prototype.push.apply(e,arguments),e.slice(1).forEach(function(e){if(e)for(var o in e)({}).hasOwnProperty.call(e,o)&&(t[o]=e[o])}),t}function d(t,e){if("undefined"!=typeof t.classList)e.split(" ").forEach(function(e){e.trim()&&t.classList.remove(e)});else{var o=new RegExp("(^| )"+e.split(" ").join("|")+"( |$)","gi"),i=c(t).replace(o," ");g(t,i)}}function p(t,e){if("undefined"!=typeof t.classList)e.split(" ").forEach(function(e){e.trim()&&t.classList.add(e)});else{d(t,e);var o=c(t)+(" "+e);g(t,o)}}function u(t,e){if("undefined"!=typeof t.classList)return t.classList.contains(e);var o=c(t);return new RegExp("(^| )"+e+"( |$)","gi").test(o)}function c(t){return t.className instanceof t.ownerDocument.defaultView.SVGAnimatedString?t.className.baseVal:t.className}function g(t,e){t.setAttribute("class",e)}function m(t,e,o){o.forEach(function(o){e.indexOf(o)===-1&&u(t,o)&&d(t,o)}),e.forEach(function(e){u(t,e)||p(t,e)})}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function y(t,e){var o=arguments.length<=2||void 0===arguments[2]?1:arguments[2];return t+o>=e&&e>=t-o}function b(){return"undefined"!=typeof performance&&"undefined"!=typeof performance.now?performance.now():+new Date}function w(){for(var t={top:0,left:0},e=arguments.length,o=Array(e),i=0;i<e;i++)o[i]=arguments[i];return o.forEach(function(e){var o=e.top,i=e.left;"string"==typeof o&&(o=parseFloat(o,10)),"string"==typeof i&&(i=parseFloat(i,10)),t.top+=o,t.left+=i}),t}function C(t,e){return"string"==typeof t.left&&t.left.indexOf("%")!==-1&&(t.left=parseFloat(t.left,10)/100*e.width),"string"==typeof t.top&&t.top.indexOf("%")!==-1&&(t.top=parseFloat(t.top,10)/100*e.height),t}function O(t,e){return"scrollParent"===e?e=t.scrollParents[0]:"window"===e&&(e=[pageXOffset,pageYOffset,innerWidth+pageXOffset,innerHeight+pageYOffset]),e===document&&(e=e.documentElement),"undefined"!=typeof e.nodeType&&!function(){var t=e,o=a(e),i=o,n=getComputedStyle(e);if(e=[i.left,i.top,o.width+i.left,o.height+i.top],t.ownerDocument!==document){var r=t.ownerDocument.defaultView;e[0]+=r.pageXOffset,e[1]+=r.pageYOffset,e[2]+=r.pageXOffset,e[3]+=r.pageYOffset}G.forEach(function(t,o){t=t[0].toUpperCase()+t.substr(1),"Top"===t||"Left"===t?e[o]+=parseFloat(n["border"+t+"Width"]):e[o]-=parseFloat(n["border"+t+"Width"])})}(),e}var E=function(){function t(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,o,i){return o&&t(e.prototype,o),i&&t(e,i),e}}(),x=void 0;"undefined"==typeof x&&(x={modules:[]});var A=null,T=function(){var t=0;return function(){return++t}}(),S={},P=function(){var t=A;t&&document.body.contains(t)||(t=document.createElement("div"),t.setAttribute("data-tether-id",T()),h(t.style,{top:0,left:0,position:"absolute"}),document.body.appendChild(t),A=t);var e=t.getAttribute("data-tether-id");return"undefined"==typeof S[e]&&(S[e]=n(t),k(function(){delete S[e]})),S[e]},M=null,W=[],k=function(t){W.push(t)},_=function(){for(var t=void 0;t=W.pop();)t()},B=function(){function t(){i(this,t)}return E(t,[{key:"on",value:function(t,e,o){var i=!(arguments.length<=3||void 0===arguments[3])&&arguments[3];"undefined"==typeof this.bindings&&(this.bindings={}),"undefined"==typeof this.bindings[t]&&(this.bindings[t]=[]),this.bindings[t].push({handler:e,ctx:o,once:i})}},{key:"once",value:function(t,e,o){this.on(t,e,o,!0)}},{key:"off",value:function(t,e){if("undefined"!=typeof this.bindings&&"undefined"!=typeof this.bindings[t])if("undefined"==typeof e)delete this.bindings[t];else for(var o=0;o<this.bindings[t].length;)this.bindings[t][o].handler===e?this.bindings[t].splice(o,1):++o}},{key:"trigger",value:function(t){if("undefined"!=typeof this.bindings&&this.bindings[t]){for(var e=0,o=arguments.length,i=Array(o>1?o-1:0),n=1;n<o;n++)i[n-1]=arguments[n];for(;e<this.bindings[t].length;){var r=this.bindings[t][e],s=r.handler,a=r.ctx,f=r.once,l=a;"undefined"==typeof l&&(l=this),s.apply(l,i),f?this.bindings[t].splice(e,1):++e}}}}]),t}();x.Utils={getActualBoundingClientRect:n,getScrollParents:r,getBounds:a,getOffsetParent:f,extend:h,addClass:p,removeClass:d,hasClass:u,updateClasses:m,defer:k,flush:_,uniqueId:T,Evented:B,getScrollBarSize:l,removeUtilElements:s};var z=function(){function t(t,e){var o=[],i=!0,n=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);i=!0);}catch(f){n=!0,r=f}finally{try{!i&&a["return"]&&a["return"]()}finally{if(n)throw r}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),E=function(){function t(t,e){for(var o=0;o<e.length;o++){var i=e[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,o,i){return o&&t(e.prototype,o),i&&t(e,i),e}}(),j=function(t,e,o){for(var i=!0;i;){var n=t,r=e,s=o;i=!1,null===n&&(n=Function.prototype);var a=Object.getOwnPropertyDescriptor(n,r);if(void 0!==a){if("value"in a)return a.value;var f=a.get;if(void 0===f)return;return f.call(s)}var l=Object.getPrototypeOf(n);if(null===l)return;t=l,e=r,o=s,i=!0,a=l=void 0}};if("undefined"==typeof x)throw new Error("You must include the utils.js file before tether.js");var Y=x.Utils,r=Y.getScrollParents,a=Y.getBounds,f=Y.getOffsetParent,h=Y.extend,p=Y.addClass,d=Y.removeClass,m=Y.updateClasses,k=Y.defer,_=Y.flush,l=Y.getScrollBarSize,s=Y.removeUtilElements,L=function(){if("undefined"==typeof document)return"";for(var t=document.createElement("div"),e=["transform","WebkitTransform","OTransform","MozTransform","msTransform"],o=0;o<e.length;++o){var i=e[o];if(void 0!==t.style[i])return i}}(),D=[],X=function(){D.forEach(function(t){t.position(!1)}),_()};!function(){var t=null,e=null,o=null,i=function n(){return"undefined"!=typeof e&&e>16?(e=Math.min(e-16,250),void(o=setTimeout(n,250))):void("undefined"!=typeof t&&b()-t<10||(null!=o&&(clearTimeout(o),o=null),t=b(),X(),e=b()-t))};"undefined"!=typeof window&&"undefined"!=typeof window.addEventListener&&["resize","scroll","touchmove"].forEach(function(t){window.addEventListener(t,i)})}();var F={center:"center",left:"right",right:"left"},H={middle:"middle",top:"bottom",bottom:"top"},N={top:0,left:0,middle:"50%",center:"50%",bottom:"100%",right:"100%"},U=function(t,e){var o=t.left,i=t.top;return"auto"===o&&(o=F[e.left]),"auto"===i&&(i=H[e.top]),{left:o,top:i}},V=function(t){var e=t.left,o=t.top;return"undefined"!=typeof N[t.left]&&(e=N[t.left]),"undefined"!=typeof N[t.top]&&(o=N[t.top]),{left:e,top:o}},R=function(t){var e=t.split(" "),o=z(e,2),i=o[0],n=o[1];return{top:i,left:n}},q=R,I=function(t){function e(t){var o=this;i(this,e),j(Object.getPrototypeOf(e.prototype),"constructor",this).call(this),this.position=this.position.bind(this),D.push(this),this.history=[],this.setOptions(t,!1),x.modules.forEach(function(t){"undefined"!=typeof t.initialize&&t.initialize.call(o)}),this.position()}return v(e,t),E(e,[{key:"getClass",value:function(){var t=arguments.length<=0||void 0===arguments[0]?"":arguments[0],e=this.options.classes;return"undefined"!=typeof e&&e[t]?this.options.classes[t]:this.options.classPrefix?this.options.classPrefix+"-"+t:t}},{key:"setOptions",value:function(t){var e=this,o=arguments.length<=1||void 0===arguments[1]||arguments[1],i={offset:"0 0",targetOffset:"0 0",targetAttachment:"auto auto",classPrefix:"tether"};this.options=h(i,t);var n=this.options,s=n.element,a=n.target,f=n.targetModifier;if(this.element=s,this.target=a,this.targetModifier=f,"viewport"===this.target?(this.target=document.body,this.targetModifier="visible"):"scroll-handle"===this.target&&(this.target=document.body,this.targetModifier="scroll-handle"),["element","target"].forEach(function(t){if("undefined"==typeof e[t])throw new Error("Tether Error: Both element and target must be defined");"undefined"!=typeof e[t].jquery?e[t]=e[t][0]:"string"==typeof e[t]&&(e[t]=document.querySelector(e[t]))}),p(this.element,this.getClass("element")),this.options.addTargetClasses!==!1&&p(this.target,this.getClass("target")),!this.options.attachment)throw new Error("Tether Error: You must provide an attachment");this.targetAttachment=q(this.options.targetAttachment),this.attachment=q(this.options.attachment),this.offset=R(this.options.offset),this.targetOffset=R(this.options.targetOffset),"undefined"!=typeof this.scrollParents&&this.disable(),"scroll-handle"===this.targetModifier?this.scrollParents=[this.target]:this.scrollParents=r(this.target),this.options.enabled!==!1&&this.enable(o)}},{key:"getTargetBounds",value:function(){if("undefined"==typeof this.targetModifier)return a(this.target);if("visible"===this.targetModifier){if(this.target===document.body)return{top:pageYOffset,left:pageXOffset,height:innerHeight,width:innerWidth};var t=a(this.target),e={height:t.height,width:t.width,top:t.top,left:t.left};return e.height=Math.min(e.height,t.height-(pageYOffset-t.top)),e.height=Math.min(e.height,t.height-(t.top+t.height-(pageYOffset+innerHeight))),e.height=Math.min(innerHeight,e.height),e.height-=2,e.width=Math.min(e.width,t.width-(pageXOffset-t.left)),e.width=Math.min(e.width,t.width-(t.left+t.width-(pageXOffset+innerWidth))),e.width=Math.min(innerWidth,e.width),e.width-=2,e.top<pageYOffset&&(e.top=pageYOffset),e.left<pageXOffset&&(e.left=pageXOffset),e}if("scroll-handle"===this.targetModifier){var t=void 0,o=this.target;o===document.body?(o=document.documentElement,t={left:pageXOffset,top:pageYOffset,height:innerHeight,width:innerWidth}):t=a(o);var i=getComputedStyle(o),n=o.scrollWidth>o.clientWidth||[i.overflow,i.overflowX].indexOf("scroll")>=0||this.target!==document.body,r=0;n&&(r=15);var s=t.height-parseFloat(i.borderTopWidth)-parseFloat(i.borderBottomWidth)-r,e={width:15,height:.975*s*(s/o.scrollHeight),left:t.left+t.width-parseFloat(i.borderLeftWidth)-15},f=0;s<408&&this.target===document.body&&(f=-11e-5*Math.pow(s,2)-.00727*s+22.58),this.target!==document.body&&(e.height=Math.max(e.height,24));var l=this.target.scrollTop/(o.scrollHeight-s);return e.top=l*(s-e.height-f)+t.top+parseFloat(i.borderTopWidth),this.target===document.body&&(e.height=Math.max(e.height,24)),e}}},{key:"clearCache",value:function(){this._cache={}}},{key:"cache",value:function(t,e){return"undefined"==typeof this._cache&&(this._cache={}),"undefined"==typeof this._cache[t]&&(this._cache[t]=e.call(this)),this._cache[t]}},{key:"enable",value:function(){var t=this,e=arguments.length<=0||void 0===arguments[0]||arguments[0];this.options.addTargetClasses!==!1&&p(this.target,this.getClass("enabled")),p(this.element,this.getClass("enabled")),this.enabled=!0,this.scrollParents.forEach(function(e){e!==t.target.ownerDocument&&e.addEventListener("scroll",t.position)}),e&&this.position()}},{key:"disable",value:function(){var t=this;d(this.target,this.getClass("enabled")),d(this.element,this.getClass("enabled")),this.enabled=!1,"undefined"!=typeof this.scrollParents&&this.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.position)})}},{key:"destroy",value:function(){var t=this;this.disable(),D.forEach(function(e,o){e===t&&D.splice(o,1)}),0===D.length&&s()}},{key:"updateAttachClasses",value:function(t,e){var o=this;t=t||this.attachment,e=e||this.targetAttachment;var i=["left","top","bottom","right","middle","center"];"undefined"!=typeof this._addAttachClasses&&this._addAttachClasses.length&&this._addAttachClasses.splice(0,this._addAttachClasses.length),"undefined"==typeof this._addAttachClasses&&(this._addAttachClasses=[]);var n=this._addAttachClasses;t.top&&n.push(this.getClass("element-attached")+"-"+t.top),t.left&&n.push(this.getClass("element-attached")+"-"+t.left),e.top&&n.push(this.getClass("target-attached")+"-"+e.top),e.left&&n.push(this.getClass("target-attached")+"-"+e.left);var r=[];i.forEach(function(t){r.push(o.getClass("element-attached")+"-"+t),r.push(o.getClass("target-attached")+"-"+t)}),k(function(){"undefined"!=typeof o._addAttachClasses&&(m(o.element,o._addAttachClasses,r),o.options.addTargetClasses!==!1&&m(o.target,o._addAttachClasses,r),delete o._addAttachClasses)})}},{key:"position",value:function(){var t=this,e=arguments.length<=0||void 0===arguments[0]||arguments[0];if(this.enabled){this.clearCache();var o=U(this.targetAttachment,this.attachment);this.updateAttachClasses(this.attachment,o);var i=this.cache("element-bounds",function(){return a(t.element)}),n=i.width,r=i.height;if(0===n&&0===r&&"undefined"!=typeof this.lastSize){var s=this.lastSize;n=s.width,r=s.height}else this.lastSize={width:n,height:r};var h=this.cache("target-bounds",function(){return t.getTargetBounds()}),d=h,p=C(V(this.attachment),{width:n,height:r}),u=C(V(o),d),c=C(this.offset,{width:n,height:r}),g=C(this.targetOffset,d);p=w(p,c),u=w(u,g);for(var m=h.left+u.left-p.left,v=h.top+u.top-p.top,y=0;y<x.modules.length;++y){var b=x.modules[y],O=b.position.call(this,{left:m,top:v,targetAttachment:o,targetPos:h,elementPos:i,offset:p,targetOffset:u,manualOffset:c,manualTargetOffset:g,scrollbarSize:S,attachment:this.attachment});if(O===!1)return!1;"undefined"!=typeof O&&"object"==typeof O&&(v=O.top,m=O.left)}var E={page:{top:v,left:m},viewport:{top:v-pageYOffset,bottom:pageYOffset-v-r+innerHeight,left:m-pageXOffset,right:pageXOffset-m-n+innerWidth}},A=this.target.ownerDocument,T=A.defaultView,S=void 0;return T.innerHeight>A.documentElement.clientHeight&&(S=this.cache("scrollbar-size",l),E.viewport.bottom-=S.height),T.innerWidth>A.documentElement.clientWidth&&(S=this.cache("scrollbar-size",l),E.viewport.right-=S.width),["","static"].indexOf(A.body.style.position)!==-1&&["","static"].indexOf(A.body.parentElement.style.position)!==-1||(E.page.bottom=A.body.scrollHeight-v-r,E.page.right=A.body.scrollWidth-m-n),"undefined"!=typeof this.options.optimizations&&this.options.optimizations.moveElement!==!1&&"undefined"==typeof this.targetModifier&&!function(){var e=t.cache("target-offsetparent",function(){return f(t.target)}),o=t.cache("target-offsetparent-bounds",function(){return a(e)}),i=getComputedStyle(e),n=o,r={};if(["Top","Left","Bottom","Right"].forEach(function(t){r[t.toLowerCase()]=parseFloat(i["border"+t+"Width"])}),o.right=A.body.scrollWidth-o.left-n.width+r.right,o.bottom=A.body.scrollHeight-o.top-n.height+r.bottom,E.page.top>=o.top+r.top&&E.page.bottom>=o.bottom&&E.page.left>=o.left+r.left&&E.page.right>=o.right){var s=e.scrollTop,l=e.scrollLeft;E.offset={top:E.page.top-o.top+s-r.top,left:E.page.left-o.left+l-r.left}}}(),this.move(E),this.history.unshift(E),this.history.length>3&&this.history.pop(),e&&_(),!0}}},{key:"move",value:function(t){var e=this;if("undefined"!=typeof this.element.parentNode){var o={};for(var i in t){o[i]={};for(var n in t[i]){for(var r=!1,s=0;s<this.history.length;++s){var a=this.history[s];if("undefined"!=typeof a[i]&&!y(a[i][n],t[i][n])){r=!0;break}}r||(o[i][n]=!0)}}var l={top:"",left:"",right:"",bottom:""},d=function(t,o){var i="undefined"!=typeof e.options.optimizations,n=i?e.options.optimizations.gpu:null;if(n!==!1){var r=void 0,s=void 0;if(t.top?(l.top=0,r=o.top):(l.bottom=0,r=-o.bottom),t.left?(l.left=0,s=o.left):(l.right=0,s=-o.right),window.matchMedia){var a=window.matchMedia("only screen and (min-resolution: 1.3dppx)").matches||window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3)").matches;a||(s=Math.round(s),r=Math.round(r))}l[L]="translateX("+s+"px) translateY("+r+"px)","msTransform"!==L&&(l[L]+=" translateZ(0)")}else t.top?l.top=o.top+"px":l.bottom=o.bottom+"px",t.left?l.left=o.left+"px":l.right=o.right+"px"},p=!1;if((o.page.top||o.page.bottom)&&(o.page.left||o.page.right)?(l.position="absolute",d(o.page,t.page)):(o.viewport.top||o.viewport.bottom)&&(o.viewport.left||o.viewport.right)?(l.position="fixed",d(o.viewport,t.viewport)):"undefined"!=typeof o.offset&&o.offset.top&&o.offset.left?!function(){l.position="absolute";var i=e.cache("target-offsetparent",function(){return f(e.target)});f(e.element)!==i&&k(function(){e.element.parentNode.removeChild(e.element),i.appendChild(e.element)}),d(o.offset,t.offset),p=!0}():(l.position="absolute",d({top:!0,left:!0},t.page)),!p)if(this.options.bodyElement)this.options.bodyElement.appendChild(this.element);else{for(var u=!0,c=this.element.parentNode;c&&1===c.nodeType&&"BODY"!==c.tagName;){if("static"!==getComputedStyle(c).position){u=!1;break}c=c.parentNode}u||(this.element.parentNode.removeChild(this.element),this.element.ownerDocument.body.appendChild(this.element))}var g={},m=!1;for(var n in l){var v=l[n],b=this.element.style[n];b!==v&&(m=!0,g[n]=v)}m&&k(function(){h(e.element.style,g),e.trigger("repositioned")})}}}]),e}(B);I.modules=[],x.position=X;var $=h(I,x),z=function(){function t(t,e){var o=[],i=!0,n=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);i=!0);}catch(f){n=!0,r=f}finally{try{!i&&a["return"]&&a["return"]()}finally{if(n)throw r}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),Y=x.Utils,a=Y.getBounds,h=Y.extend,m=Y.updateClasses,k=Y.defer,G=["left","top","right","bottom"];x.modules.push({position:function(t){var e=this,o=t.top,i=t.left,n=t.targetAttachment;if(!this.options.constraints)return!0;var r=this.cache("element-bounds",function(){return a(e.element)}),s=r.height,f=r.width;if(0===f&&0===s&&"undefined"!=typeof this.lastSize){var l=this.lastSize;f=l.width,s=l.height}var d=this.cache("target-bounds",function(){return e.getTargetBounds()}),p=d.height,u=d.width,c=[this.getClass("pinned"),this.getClass("out-of-bounds")];this.options.constraints.forEach(function(t){var e=t.outOfBoundsClass,o=t.pinnedClass;e&&c.push(e),o&&c.push(o)}),c.forEach(function(t){["left","top","right","bottom"].forEach(function(e){c.push(t+"-"+e)})});var g=[],v=h({},n),y=h({},this.attachment);return this.options.constraints.forEach(function(t){var r=t.to,a=t.attachment,l=t.pin;"undefined"==typeof a&&(a="");var h=void 0,d=void 0;if(a.indexOf(" ")>=0){var c=a.split(" "),m=z(c,2);d=m[0],h=m[1]}else h=d=a;var b=O(e,r);"target"!==d&&"both"!==d||(o<b[1]&&"top"===v.top&&(o+=p,v.top="bottom"),o+s>b[3]&&"bottom"===v.top&&(o-=p,v.top="top")),"together"===d&&("top"===v.top&&("bottom"===y.top&&o<b[1]?(o+=p,v.top="bottom",o+=s,y.top="top"):"top"===y.top&&o+s>b[3]&&o-(s-p)>=b[1]&&(o-=s-p,v.top="bottom",y.top="bottom")),"bottom"===v.top&&("top"===y.top&&o+s>b[3]?(o-=p,v.top="top",o-=s,y.top="bottom"):"bottom"===y.top&&o<b[1]&&o+(2*s-p)<=b[3]&&(o+=s-p,v.top="top",y.top="top")),"middle"===v.top&&(o+s>b[3]&&"top"===y.top?(o-=s,y.top="bottom"):o<b[1]&&"bottom"===y.top&&(o+=s,y.top="top"))),"target"!==h&&"both"!==h||(i<b[0]&&"left"===v.left&&(i+=u,v.left="right"),i+f>b[2]&&"right"===v.left&&(i-=u,v.left="left")),"together"===h&&(i<b[0]&&"left"===v.left?"right"===y.left?(i+=u,v.left="right",i+=f,y.left="left"):"left"===y.left&&(i+=u,v.left="right",i-=f,y.left="right"):i+f>b[2]&&"right"===v.left?"left"===y.left?(i-=u,v.left="left",i-=f,y.left="right"):"right"===y.left&&(i-=u,v.left="left",i+=f,y.left="left"):"center"===v.left&&(i+f>b[2]&&"left"===y.left?(i-=f,y.left="right"):i<b[0]&&"right"===y.left&&(i+=f,y.left="left"))),"element"!==d&&"both"!==d||(o<b[1]&&"bottom"===y.top&&(o+=s,y.top="top"),o+s>b[3]&&"top"===y.top&&(o-=s,y.top="bottom")),"element"!==h&&"both"!==h||(i<b[0]&&("right"===y.left?(i+=f,y.left="left"):"center"===y.left&&(i+=f/2,y.left="left")),i+f>b[2]&&("left"===y.left?(i-=f,y.left="right"):"center"===y.left&&(i-=f/2,y.left="right"))),"string"==typeof l?l=l.split(",").map(function(t){return t.trim()}):l===!0&&(l=["top","left","right","bottom"]),l=l||[];var w=[],C=[];o<b[1]&&(l.indexOf("top")>=0?(o=b[1],w.push("top")):C.push("top")),o+s>b[3]&&(l.indexOf("bottom")>=0?(o=b[3]-s,w.push("bottom")):C.push("bottom")),i<b[0]&&(l.indexOf("left")>=0?(i=b[0],w.push("left")):C.push("left")),i+f>b[2]&&(l.indexOf("right")>=0?(i=b[2]-f,w.push("right")):C.push("right")),w.length&&!function(){var t=void 0;t="undefined"!=typeof e.options.pinnedClass?e.options.pinnedClass:e.getClass("pinned"),g.push(t),w.forEach(function(e){g.push(t+"-"+e)})}(),C.length&&!function(){var t=void 0;t="undefined"!=typeof e.options.outOfBoundsClass?e.options.outOfBoundsClass:e.getClass("out-of-bounds"),g.push(t),C.forEach(function(e){g.push(t+"-"+e)})}(),(w.indexOf("left")>=0||w.indexOf("right")>=0)&&(y.left=v.left=!1),(w.indexOf("top")>=0||w.indexOf("bottom")>=0)&&(y.top=v.top=!1),v.top===n.top&&v.left===n.left&&y.top===e.attachment.top&&y.left===e.attachment.left||(e.updateAttachClasses(y,v),e.trigger("update",{attachment:y,targetAttachment:v}))}),k(function(){e.options.addTargetClasses!==!1&&m(e.target,g,c),m(e.element,g,c)}),{top:o,left:i}}});var Y=x.Utils,a=Y.getBounds,m=Y.updateClasses,k=Y.defer;x.modules.push({position:function(t){var e=this,o=t.top,i=t.left,n=this.cache("element-bounds",function(){return a(e.element)}),r=n.height,s=n.width,f=this.getTargetBounds(),l=o+r,h=i+s,d=[];o<=f.bottom&&l>=f.top&&["left","right"].forEach(function(t){var e=f[t];e!==i&&e!==h||d.push(t)}),i<=f.right&&h>=f.left&&["top","bottom"].forEach(function(t){var e=f[t];e!==o&&e!==l||d.push(t)});var p=[],u=[],c=["left","top","right","bottom"];return p.push(this.getClass("abutted")),c.forEach(function(t){p.push(e.getClass("abutted")+"-"+t)}),d.length&&u.push(this.getClass("abutted")),d.forEach(function(t){u.push(e.getClass("abutted")+"-"+t)}),k(function(){e.options.addTargetClasses!==!1&&m(e.target,u,p),m(e.element,u,p)}),!0}});var z=function(){function t(t,e){var o=[],i=!0,n=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(o.push(s.value),!e||o.length!==e);i=!0);}catch(f){n=!0,r=f}finally{try{!i&&a["return"]&&a["return"]()}finally{if(n)throw r}}return o}return function(e,o){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,o);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();return x.modules.push({position:function(t){var e=t.top,o=t.left;if(this.options.shift){var i=this.options.shift;"function"==typeof this.options.shift&&(i=this.options.shift.call(this,{top:e,left:o}));var n=void 0,r=void 0;if("string"==typeof i){i=i.split(" "),i[1]=i[1]||i[0];var s=i,a=z(s,2);n=a[0],r=a[1],n=parseFloat(n,10),r=parseFloat(r,10)}else n=i.top,r=i.left;return e+=n,o+=r,{top:e,left:o}}}}),$});
/*!
  * Bootstrap v4.0.0-beta.2 (https://getbootstrap.com)
  * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
var bootstrap=function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}e=e&&e.hasOwnProperty("default")?e.default:e,n=n&&n.hasOwnProperty("default")?n.default:n;var s=function(){function t(t){return{}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function n(){return{bindType:r.end,delegateType:r.end,handle:function(t){if(e(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}}}function i(){if(window.QUnit)return!1;var t=document.createElement("bootstrap");for(var e in o)if("undefined"!=typeof t.style[e])return{end:o[e]};return!1}function s(t){var n=this,i=!1;return e(this).one(a.TRANSITION_END,function(){i=!0}),setTimeout(function(){i||a.triggerTransitionEnd(n)},t),this}var r=!1,o={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},a={TRANSITION_END:"bsTransitionEnd",getUID:function(t){do{t+=~~(1e6*Math.random())}while(document.getElementById(t));return t},getSelectorFromElement:function(t){var n=t.getAttribute("data-target");n&&"#"!==n||(n=t.getAttribute("href")||"");try{return e(document).find(n).length>0?n:null}catch(t){return null}},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){e(t).trigger(r.end)},supportsTransitionEnd:function(){return Boolean(r)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(e,n,i){for(var s in i)if(Object.prototype.hasOwnProperty.call(i,s)){var r=i[s],o=n[s],l=o&&a.isElement(o)?"element":t(o);if(!new RegExp(r).test(l))throw new Error(e.toUpperCase()+': Option "'+s+'" provided type "'+l+'" but expected type "'+r+'".')}}};return r=i(),e.fn.emulateTransitionEnd=s,a.supportsTransitionEnd()&&(e.event.special[a.TRANSITION_END]=n()),a}(),r=function(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t},o=function(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e},a=function(){var t="alert",n=e.fn[t],i={CLOSE:"close.bs.alert",CLOSED:"closed.bs.alert",CLICK_DATA_API:"click.bs.alert.data-api"},o={ALERT:"alert",FADE:"fade",SHOW:"show"},a=function(){function t(t){this._element=t}var n=t.prototype;return n.close=function(t){t=t||this._element;var e=this._getRootElement(t);this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},n.dispose=function(){e.removeData(this._element,"bs.alert"),this._element=null},n._getRootElement=function(t){var n=s.getSelectorFromElement(t),i=!1;return n&&(i=e(n)[0]),i||(i=e(t).closest("."+o.ALERT)[0]),i},n._triggerCloseEvent=function(t){var n=e.Event(i.CLOSE);return e(t).trigger(n),n},n._removeElement=function(t){var n=this;e(t).removeClass(o.SHOW),s.supportsTransitionEnd()&&e(t).hasClass(o.FADE)?e(t).one(s.TRANSITION_END,function(e){return n._destroyElement(t,e)}).emulateTransitionEnd(150):this._destroyElement(t)},n._destroyElement=function(t){e(t).detach().trigger(i.CLOSED).remove()},t._jQueryInterface=function(n){return this.each(function(){var i=e(this),s=i.data("bs.alert");s||(s=new t(this),i.data("bs.alert",s)),"close"===n&&s[n](this)})},t._handleDismiss=function(t){return function(e){e&&e.preventDefault(),t.close(this)}},r(t,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}}]),t}();return e(document).on(i.CLICK_DATA_API,{DISMISS:'[data-dismiss="alert"]'}.DISMISS,a._handleDismiss(new a)),e.fn[t]=a._jQueryInterface,e.fn[t].Constructor=a,e.fn[t].noConflict=function(){return e.fn[t]=n,a._jQueryInterface},a}(),l=function(){var t="button",n=e.fn[t],i={ACTIVE:"active",BUTTON:"btn",FOCUS:"focus"},s={DATA_TOGGLE_CARROT:'[data-toggle^="button"]',DATA_TOGGLE:'[data-toggle="buttons"]',INPUT:"input",ACTIVE:".active",BUTTON:".btn"},o={CLICK_DATA_API:"click.bs.button.data-api",FOCUS_BLUR_DATA_API:"focus.bs.button.data-api blur.bs.button.data-api"},a=function(){function t(t){this._element=t}var n=t.prototype;return n.toggle=function(){var t=!0,n=!0,r=e(this._element).closest(s.DATA_TOGGLE)[0];if(r){var o=e(this._element).find(s.INPUT)[0];if(o){if("radio"===o.type)if(o.checked&&e(this._element).hasClass(i.ACTIVE))t=!1;else{var a=e(r).find(s.ACTIVE)[0];a&&e(a).removeClass(i.ACTIVE)}if(t){if(o.hasAttribute("disabled")||r.hasAttribute("disabled")||o.classList.contains("disabled")||r.classList.contains("disabled"))return;o.checked=!e(this._element).hasClass(i.ACTIVE),e(o).trigger("change")}o.focus(),n=!1}}n&&this._element.setAttribute("aria-pressed",!e(this._element).hasClass(i.ACTIVE)),t&&e(this._element).toggleClass(i.ACTIVE)},n.dispose=function(){e.removeData(this._element,"bs.button"),this._element=null},t._jQueryInterface=function(n){return this.each(function(){var i=e(this).data("bs.button");i||(i=new t(this),e(this).data("bs.button",i)),"toggle"===n&&i[n]()})},r(t,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}}]),t}();return e(document).on(o.CLICK_DATA_API,s.DATA_TOGGLE_CARROT,function(t){t.preventDefault();var n=t.target;e(n).hasClass(i.BUTTON)||(n=e(n).closest(s.BUTTON)),a._jQueryInterface.call(e(n),"toggle")}).on(o.FOCUS_BLUR_DATA_API,s.DATA_TOGGLE_CARROT,function(t){var n=e(t.target).closest(s.BUTTON)[0];e(n).toggleClass(i.FOCUS,/^focus(in)?$/.test(t.type))}),e.fn[t]=a._jQueryInterface,e.fn[t].Constructor=a,e.fn[t].noConflict=function(){return e.fn[t]=n,a._jQueryInterface},a}(),h=function(){var t="carousel",n="bs.carousel",i="."+n,o=e.fn[t],a={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},l={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},h={NEXT:"next",PREV:"prev",LEFT:"left",RIGHT:"right"},c={SLIDE:"slide"+i,SLID:"slid"+i,KEYDOWN:"keydown"+i,MOUSEENTER:"mouseenter"+i,MOUSELEAVE:"mouseleave"+i,TOUCHEND:"touchend"+i,LOAD_DATA_API:"load.bs.carousel.data-api",CLICK_DATA_API:"click.bs.carousel.data-api"},u={CAROUSEL:"carousel",ACTIVE:"active",SLIDE:"slide",RIGHT:"carousel-item-right",LEFT:"carousel-item-left",NEXT:"carousel-item-next",PREV:"carousel-item-prev",ITEM:"carousel-item"},d={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},f=function(){function o(t,n){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(n),this._element=e(t)[0],this._indicatorsElement=e(this._element).find(d.INDICATORS)[0],this._addEventListeners()}var f=o.prototype;return f.next=function(){this._isSliding||this._slide(h.NEXT)},f.nextWhenVisible=function(){!document.hidden&&e(this._element).is(":visible")&&"hidden"!==e(this._element).css("visibility")&&this.next()},f.prev=function(){this._isSliding||this._slide(h.PREV)},f.pause=function(t){t||(this._isPaused=!0),e(this._element).find(d.NEXT_PREV)[0]&&s.supportsTransitionEnd()&&(s.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},f.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},f.to=function(t){var n=this;this._activeElement=e(this._element).find(d.ACTIVE_ITEM)[0];var i=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)e(this._element).one(c.SLID,function(){return n.to(t)});else{if(i===t)return this.pause(),void this.cycle();var s=t>i?h.NEXT:h.PREV;this._slide(s,this._items[t])}},f.dispose=function(){e(this._element).off(i),e.removeData(this._element,n),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},f._getConfig=function(n){return n=e.extend({},a,n),s.typeCheckConfig(t,n,l),n},f._addEventListeners=function(){var t=this;this._config.keyboard&&e(this._element).on(c.KEYDOWN,function(e){return t._keydown(e)}),"hover"===this._config.pause&&(e(this._element).on(c.MOUSEENTER,function(e){return t.pause(e)}).on(c.MOUSELEAVE,function(e){return t.cycle(e)}),"ontouchstart"in document.documentElement&&e(this._element).on(c.TOUCHEND,function(){t.pause(),t.touchTimeout&&clearTimeout(t.touchTimeout),t.touchTimeout=setTimeout(function(e){return t.cycle(e)},500+t._config.interval)}))},f._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next();break;default:return}},f._getItemIndex=function(t){return this._items=e.makeArray(e(t).parent().find(d.ITEM)),this._items.indexOf(t)},f._getItemByDirection=function(t,e){var n=t===h.NEXT,i=t===h.PREV,s=this._getItemIndex(e),r=this._items.length-1;if((i&&0===s||n&&s===r)&&!this._config.wrap)return e;var o=(s+(t===h.PREV?-1:1))%this._items.length;return-1===o?this._items[this._items.length-1]:this._items[o]},f._triggerSlideEvent=function(t,n){var i=this._getItemIndex(t),s=this._getItemIndex(e(this._element).find(d.ACTIVE_ITEM)[0]),r=e.Event(c.SLIDE,{relatedTarget:t,direction:n,from:s,to:i});return e(this._element).trigger(r),r},f._setActiveIndicatorElement=function(t){if(this._indicatorsElement){e(this._indicatorsElement).find(d.ACTIVE).removeClass(u.ACTIVE);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&e(n).addClass(u.ACTIVE)}},f._slide=function(t,n){var i,r,o,a=this,l=e(this._element).find(d.ACTIVE_ITEM)[0],f=this._getItemIndex(l),_=n||l&&this._getItemByDirection(t,l),g=this._getItemIndex(_),m=Boolean(this._interval);if(t===h.NEXT?(i=u.LEFT,r=u.NEXT,o=h.LEFT):(i=u.RIGHT,r=u.PREV,o=h.RIGHT),_&&e(_).hasClass(u.ACTIVE))this._isSliding=!1;else if(!this._triggerSlideEvent(_,o).isDefaultPrevented()&&l&&_){this._isSliding=!0,m&&this.pause(),this._setActiveIndicatorElement(_);var p=e.Event(c.SLID,{relatedTarget:_,direction:o,from:f,to:g});s.supportsTransitionEnd()&&e(this._element).hasClass(u.SLIDE)?(e(_).addClass(r),s.reflow(_),e(l).addClass(i),e(_).addClass(i),e(l).one(s.TRANSITION_END,function(){e(_).removeClass(i+" "+r).addClass(u.ACTIVE),e(l).removeClass(u.ACTIVE+" "+r+" "+i),a._isSliding=!1,setTimeout(function(){return e(a._element).trigger(p)},0)}).emulateTransitionEnd(600)):(e(l).removeClass(u.ACTIVE),e(_).addClass(u.ACTIVE),this._isSliding=!1,e(this._element).trigger(p)),m&&this.cycle()}},o._jQueryInterface=function(t){return this.each(function(){var i=e(this).data(n),s=e.extend({},a,e(this).data());"object"==typeof t&&e.extend(s,t);var r="string"==typeof t?t:s.slide;if(i||(i=new o(this,s),e(this).data(n,i)),"number"==typeof t)i.to(t);else if("string"==typeof r){if("undefined"==typeof i[r])throw new Error('No method named "'+r+'"');i[r]()}else s.interval&&(i.pause(),i.cycle())})},o._dataApiClickHandler=function(t){var i=s.getSelectorFromElement(this);if(i){var r=e(i)[0];if(r&&e(r).hasClass(u.CAROUSEL)){var a=e.extend({},e(r).data(),e(this).data()),l=this.getAttribute("data-slide-to");l&&(a.interval=!1),o._jQueryInterface.call(e(r),a),l&&e(r).data(n).to(l),t.preventDefault()}}},r(o,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}},{key:"Default",get:function(){return a}}]),o}();return e(document).on(c.CLICK_DATA_API,d.DATA_SLIDE,f._dataApiClickHandler),e(window).on(c.LOAD_DATA_API,function(){e(d.DATA_RIDE).each(function(){var t=e(this);f._jQueryInterface.call(t,t.data())})}),e.fn[t]=f._jQueryInterface,e.fn[t].Constructor=f,e.fn[t].noConflict=function(){return e.fn[t]=o,f._jQueryInterface},f}(),c=function(){var t="collapse",n="bs.collapse",i=e.fn[t],o={toggle:!0,parent:""},a={toggle:"boolean",parent:"(string|element)"},l={SHOW:"show.bs.collapse",SHOWN:"shown.bs.collapse",HIDE:"hide.bs.collapse",HIDDEN:"hidden.bs.collapse",CLICK_DATA_API:"click.bs.collapse.data-api"},h={SHOW:"show",COLLAPSE:"collapse",COLLAPSING:"collapsing",COLLAPSED:"collapsed"},c={WIDTH:"width",HEIGHT:"height"},u={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},d=function(){function i(t,n){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(n),this._triggerArray=e.makeArray(e('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var i=e(u.DATA_TOGGLE),r=0;r<i.length;r++){var o=i[r],a=s.getSelectorFromElement(o);null!==a&&e(a).filter(t).length>0&&this._triggerArray.push(o)}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var d=i.prototype;return d.toggle=function(){e(this._element).hasClass(h.SHOW)?this.hide():this.show()},d.show=function(){var t=this;if(!this._isTransitioning&&!e(this._element).hasClass(h.SHOW)){var r,o;if(this._parent&&((r=e.makeArray(e(this._parent).children().children(u.ACTIVES))).length||(r=null)),!(r&&(o=e(r).data(n))&&o._isTransitioning)){var a=e.Event(l.SHOW);if(e(this._element).trigger(a),!a.isDefaultPrevented()){r&&(i._jQueryInterface.call(e(r),"hide"),o||e(r).data(n,null));var c=this._getDimension();e(this._element).removeClass(h.COLLAPSE).addClass(h.COLLAPSING),this._element.style[c]=0,this._triggerArray.length&&e(this._triggerArray).removeClass(h.COLLAPSED).attr("aria-expanded",!0),this.setTransitioning(!0);var d=function(){e(t._element).removeClass(h.COLLAPSING).addClass(h.COLLAPSE).addClass(h.SHOW),t._element.style[c]="",t.setTransitioning(!1),e(t._element).trigger(l.SHOWN)};if(s.supportsTransitionEnd()){var f="scroll"+(c[0].toUpperCase()+c.slice(1));e(this._element).one(s.TRANSITION_END,d).emulateTransitionEnd(600),this._element.style[c]=this._element[f]+"px"}else d()}}}},d.hide=function(){var t=this;if(!this._isTransitioning&&e(this._element).hasClass(h.SHOW)){var n=e.Event(l.HIDE);if(e(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension();if(this._element.style[i]=this._element.getBoundingClientRect()[i]+"px",s.reflow(this._element),e(this._element).addClass(h.COLLAPSING).removeClass(h.COLLAPSE).removeClass(h.SHOW),this._triggerArray.length)for(var r=0;r<this._triggerArray.length;r++){var o=this._triggerArray[r],a=s.getSelectorFromElement(o);null!==a&&(e(a).hasClass(h.SHOW)||e(o).addClass(h.COLLAPSED).attr("aria-expanded",!1))}this.setTransitioning(!0);var c=function(){t.setTransitioning(!1),e(t._element).removeClass(h.COLLAPSING).addClass(h.COLLAPSE).trigger(l.HIDDEN)};this._element.style[i]="",s.supportsTransitionEnd()?e(this._element).one(s.TRANSITION_END,c).emulateTransitionEnd(600):c()}}},d.setTransitioning=function(t){this._isTransitioning=t},d.dispose=function(){e.removeData(this._element,n),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},d._getConfig=function(n){return n=e.extend({},o,n),n.toggle=Boolean(n.toggle),s.typeCheckConfig(t,n,a),n},d._getDimension=function(){return e(this._element).hasClass(c.WIDTH)?c.WIDTH:c.HEIGHT},d._getParent=function(){var t=this,n=null;s.isElement(this._config.parent)?(n=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(n=this._config.parent[0])):n=e(this._config.parent)[0];var r='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return e(n).find(r).each(function(e,n){t._addAriaAndCollapsedClass(i._getTargetFromElement(n),[n])}),n},d._addAriaAndCollapsedClass=function(t,n){if(t){var i=e(t).hasClass(h.SHOW);n.length&&e(n).toggleClass(h.COLLAPSED,!i).attr("aria-expanded",i)}},i._getTargetFromElement=function(t){var n=s.getSelectorFromElement(t);return n?e(n)[0]:null},i._jQueryInterface=function(t){return this.each(function(){var s=e(this),r=s.data(n),a=e.extend({},o,s.data(),"object"==typeof t&&t);if(!r&&a.toggle&&/show|hide/.test(t)&&(a.toggle=!1),r||(r=new i(this,a),s.data(n,r)),"string"==typeof t){if("undefined"==typeof r[t])throw new Error('No method named "'+t+'"');r[t]()}})},r(i,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}},{key:"Default",get:function(){return o}}]),i}();return e(document).on(l.CLICK_DATA_API,u.DATA_TOGGLE,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var i=e(this),r=s.getSelectorFromElement(this);e(r).each(function(){var t=e(this),s=t.data(n)?"toggle":i.data();d._jQueryInterface.call(t,s)})}),e.fn[t]=d._jQueryInterface,e.fn[t].Constructor=d,e.fn[t].noConflict=function(){return e.fn[t]=i,d._jQueryInterface},d}(),u=function(){if("undefined"==typeof n)throw new Error("Bootstrap dropdown require Popper.js (https://popper.js.org)");var t="dropdown",i="bs.dropdown",o="."+i,a=e.fn[t],l=new RegExp("38|40|27"),h={HIDE:"hide"+o,HIDDEN:"hidden"+o,SHOW:"show"+o,SHOWN:"shown"+o,CLICK:"click"+o,CLICK_DATA_API:"click.bs.dropdown.data-api",KEYDOWN_DATA_API:"keydown.bs.dropdown.data-api",KEYUP_DATA_API:"keyup.bs.dropdown.data-api"},c={DISABLED:"disabled",SHOW:"show",DROPUP:"dropup",MENURIGHT:"dropdown-menu-right",MENULEFT:"dropdown-menu-left"},u={DATA_TOGGLE:'[data-toggle="dropdown"]',FORM_CHILD:".dropdown form",MENU:".dropdown-menu",NAVBAR_NAV:".navbar-nav",VISIBLE_ITEMS:".dropdown-menu .dropdown-item:not(.disabled)"},d={TOP:"top-start",TOPEND:"top-end",BOTTOM:"bottom-start",BOTTOMEND:"bottom-end"},f={offset:0,flip:!0},_={offset:"(number|string|function)",flip:"boolean"},g=function(){function a(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var g=a.prototype;return g.toggle=function(){if(!this._element.disabled&&!e(this._element).hasClass(c.DISABLED)){var t=a._getParentFromElement(this._element),i=e(this._menu).hasClass(c.SHOW);if(a._clearMenus(),!i){var s={relatedTarget:this._element},r=e.Event(h.SHOW,s);if(e(t).trigger(r),!r.isDefaultPrevented()){var o=this._element;e(t).hasClass(c.DROPUP)&&(e(this._menu).hasClass(c.MENULEFT)||e(this._menu).hasClass(c.MENURIGHT))&&(o=t),this._popper=new n(o,this._menu,this._getPopperConfig()),"ontouchstart"in document.documentElement&&!e(t).closest(u.NAVBAR_NAV).length&&e("body").children().on("mouseover",null,e.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),e(this._menu).toggleClass(c.SHOW),e(t).toggleClass(c.SHOW).trigger(e.Event(h.SHOWN,s))}}}},g.dispose=function(){e.removeData(this._element,i),e(this._element).off(o),this._element=null,this._menu=null,null!==this._popper&&this._popper.destroy(),this._popper=null},g.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},g._addEventListeners=function(){var t=this;e(this._element).on(h.CLICK,function(e){e.preventDefault(),e.stopPropagation(),t.toggle()})},g._getConfig=function(n){return n=e.extend({},this.constructor.Default,e(this._element).data(),n),s.typeCheckConfig(t,n,this.constructor.DefaultType),n},g._getMenuElement=function(){if(!this._menu){var t=a._getParentFromElement(this._element);this._menu=e(t).find(u.MENU)[0]}return this._menu},g._getPlacement=function(){var t=e(this._element).parent(),n=d.BOTTOM;return t.hasClass(c.DROPUP)?(n=d.TOP,e(this._menu).hasClass(c.MENURIGHT)&&(n=d.TOPEND)):e(this._menu).hasClass(c.MENURIGHT)&&(n=d.BOTTOMEND),n},g._detectNavbar=function(){return e(this._element).closest(".navbar").length>0},g._getPopperConfig=function(){var t=this,n={};"function"==typeof this._config.offset?n.fn=function(n){return n.offsets=e.extend({},n.offsets,t._config.offset(n.offsets)||{}),n}:n.offset=this._config.offset;var i={placement:this._getPlacement(),modifiers:{offset:n,flip:{enabled:this._config.flip}}};return this._inNavbar&&(i.modifiers.applyStyle={enabled:!this._inNavbar}),i},a._jQueryInterface=function(t){return this.each(function(){var n=e(this).data(i),s="object"==typeof t?t:null;if(n||(n=new a(this,s),e(this).data(i,n)),"string"==typeof t){if("undefined"==typeof n[t])throw new Error('No method named "'+t+'"');n[t]()}})},a._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var n=e.makeArray(e(u.DATA_TOGGLE)),s=0;s<n.length;s++){var r=a._getParentFromElement(n[s]),o=e(n[s]).data(i),l={relatedTarget:n[s]};if(o){var d=o._menu;if(e(r).hasClass(c.SHOW)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&e.contains(r,t.target))){var f=e.Event(h.HIDE,l);e(r).trigger(f),f.isDefaultPrevented()||("ontouchstart"in document.documentElement&&e("body").children().off("mouseover",null,e.noop),n[s].setAttribute("aria-expanded","false"),e(d).removeClass(c.SHOW),e(r).removeClass(c.SHOW).trigger(e.Event(h.HIDDEN,l)))}}}},a._getParentFromElement=function(t){var n,i=s.getSelectorFromElement(t);return i&&(n=e(i)[0]),n||t.parentNode},a._dataApiKeydownHandler=function(t){if(!(!l.test(t.which)||/button/i.test(t.target.tagName)&&32===t.which||/input|textarea/i.test(t.target.tagName)||(t.preventDefault(),t.stopPropagation(),this.disabled||e(this).hasClass(c.DISABLED)))){var n=a._getParentFromElement(this),i=e(n).hasClass(c.SHOW);if((i||27===t.which&&32===t.which)&&(!i||27!==t.which&&32!==t.which)){var s=e(n).find(u.VISIBLE_ITEMS).get();if(s.length){var r=s.indexOf(t.target);38===t.which&&r>0&&r--,40===t.which&&r<s.length-1&&r++,r<0&&(r=0),s[r].focus()}}else{if(27===t.which){var o=e(n).find(u.DATA_TOGGLE)[0];e(o).trigger("focus")}e(this).trigger("click")}}},r(a,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}},{key:"Default",get:function(){return f}},{key:"DefaultType",get:function(){return _}}]),a}();return e(document).on(h.KEYDOWN_DATA_API,u.DATA_TOGGLE,g._dataApiKeydownHandler).on(h.KEYDOWN_DATA_API,u.MENU,g._dataApiKeydownHandler).on(h.CLICK_DATA_API+" "+h.KEYUP_DATA_API,g._clearMenus).on(h.CLICK_DATA_API,u.DATA_TOGGLE,function(t){t.preventDefault(),t.stopPropagation(),g._jQueryInterface.call(e(this),"toggle")}).on(h.CLICK_DATA_API,u.FORM_CHILD,function(t){t.stopPropagation()}),e.fn[t]=g._jQueryInterface,e.fn[t].Constructor=g,e.fn[t].noConflict=function(){return e.fn[t]=a,g._jQueryInterface},g}(),d=function(){var t="modal",n=".bs.modal",i=e.fn[t],o={backdrop:!0,keyboard:!0,focus:!0,show:!0},a={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},l={HIDE:"hide.bs.modal",HIDDEN:"hidden.bs.modal",SHOW:"show.bs.modal",SHOWN:"shown.bs.modal",FOCUSIN:"focusin.bs.modal",RESIZE:"resize.bs.modal",CLICK_DISMISS:"click.dismiss.bs.modal",KEYDOWN_DISMISS:"keydown.dismiss.bs.modal",MOUSEUP_DISMISS:"mouseup.dismiss.bs.modal",MOUSEDOWN_DISMISS:"mousedown.dismiss.bs.modal",CLICK_DATA_API:"click.bs.modal.data-api"},h={SCROLLBAR_MEASURER:"modal-scrollbar-measure",BACKDROP:"modal-backdrop",OPEN:"modal-open",FADE:"fade",SHOW:"show"},c={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},u=function(){function i(t,n){this._config=this._getConfig(n),this._element=t,this._dialog=e(t).find(c.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}var u=i.prototype;return u.toggle=function(t){return this._isShown?this.hide():this.show(t)},u.show=function(t){var n=this;if(!this._isTransitioning&&!this._isShown){s.supportsTransitionEnd()&&e(this._element).hasClass(h.FADE)&&(this._isTransitioning=!0);var i=e.Event(l.SHOW,{relatedTarget:t});e(this._element).trigger(i),this._isShown||i.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),e(document.body).addClass(h.OPEN),this._setEscapeEvent(),this._setResizeEvent(),e(this._element).on(l.CLICK_DISMISS,c.DATA_DISMISS,function(t){return n.hide(t)}),e(this._dialog).on(l.MOUSEDOWN_DISMISS,function(){e(n._element).one(l.MOUSEUP_DISMISS,function(t){e(t.target).is(n._element)&&(n._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return n._showElement(t)}))}},u.hide=function(t){var n=this;if(t&&t.preventDefault(),!this._isTransitioning&&this._isShown){var i=e.Event(l.HIDE);if(e(this._element).trigger(i),this._isShown&&!i.isDefaultPrevented()){this._isShown=!1;var r=s.supportsTransitionEnd()&&e(this._element).hasClass(h.FADE);r&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),e(document).off(l.FOCUSIN),e(this._element).removeClass(h.SHOW),e(this._element).off(l.CLICK_DISMISS),e(this._dialog).off(l.MOUSEDOWN_DISMISS),r?e(this._element).one(s.TRANSITION_END,function(t){return n._hideModal(t)}).emulateTransitionEnd(300):this._hideModal()}}},u.dispose=function(){e.removeData(this._element,"bs.modal"),e(window,document,this._element,this._backdrop).off(n),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},u.handleUpdate=function(){this._adjustDialog()},u._getConfig=function(n){return n=e.extend({},o,n),s.typeCheckConfig(t,n,a),n},u._showElement=function(t){var n=this,i=s.supportsTransitionEnd()&&e(this._element).hasClass(h.FADE);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,i&&s.reflow(this._element),e(this._element).addClass(h.SHOW),this._config.focus&&this._enforceFocus();var r=e.Event(l.SHOWN,{relatedTarget:t}),o=function(){n._config.focus&&n._element.focus(),n._isTransitioning=!1,e(n._element).trigger(r)};i?e(this._dialog).one(s.TRANSITION_END,o).emulateTransitionEnd(300):o()},u._enforceFocus=function(){var t=this;e(document).off(l.FOCUSIN).on(l.FOCUSIN,function(n){document===n.target||t._element===n.target||e(t._element).has(n.target).length||t._element.focus()})},u._setEscapeEvent=function(){var t=this;this._isShown&&this._config.keyboard?e(this._element).on(l.KEYDOWN_DISMISS,function(e){27===e.which&&(e.preventDefault(),t.hide())}):this._isShown||e(this._element).off(l.KEYDOWN_DISMISS)},u._setResizeEvent=function(){var t=this;this._isShown?e(window).on(l.RESIZE,function(e){return t.handleUpdate(e)}):e(window).off(l.RESIZE)},u._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){e(document.body).removeClass(h.OPEN),t._resetAdjustments(),t._resetScrollbar(),e(t._element).trigger(l.HIDDEN)})},u._removeBackdrop=function(){this._backdrop&&(e(this._backdrop).remove(),this._backdrop=null)},u._showBackdrop=function(t){var n=this,i=e(this._element).hasClass(h.FADE)?h.FADE:"";if(this._isShown&&this._config.backdrop){var r=s.supportsTransitionEnd()&&i;if(this._backdrop=document.createElement("div"),this._backdrop.className=h.BACKDROP,i&&e(this._backdrop).addClass(i),e(this._backdrop).appendTo(document.body),e(this._element).on(l.CLICK_DISMISS,function(t){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===n._config.backdrop?n._element.focus():n.hide())}),r&&s.reflow(this._backdrop),e(this._backdrop).addClass(h.SHOW),!t)return;if(!r)return void t();e(this._backdrop).one(s.TRANSITION_END,t).emulateTransitionEnd(150)}else if(!this._isShown&&this._backdrop){e(this._backdrop).removeClass(h.SHOW);var o=function(){n._removeBackdrop(),t&&t()};s.supportsTransitionEnd()&&e(this._element).hasClass(h.FADE)?e(this._backdrop).one(s.TRANSITION_END,o).emulateTransitionEnd(150):o()}else t&&t()},u._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},u._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},u._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},u._setScrollbar=function(){var t=this;if(this._isBodyOverflowing){e(c.FIXED_CONTENT).each(function(n,i){var s=e(i)[0].style.paddingRight,r=e(i).css("padding-right");e(i).data("padding-right",s).css("padding-right",parseFloat(r)+t._scrollbarWidth+"px")}),e(c.STICKY_CONTENT).each(function(n,i){var s=e(i)[0].style.marginRight,r=e(i).css("margin-right");e(i).data("margin-right",s).css("margin-right",parseFloat(r)-t._scrollbarWidth+"px")}),e(c.NAVBAR_TOGGLER).each(function(n,i){var s=e(i)[0].style.marginRight,r=e(i).css("margin-right");e(i).data("margin-right",s).css("margin-right",parseFloat(r)+t._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=e("body").css("padding-right");e("body").data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}},u._resetScrollbar=function(){e(c.FIXED_CONTENT).each(function(t,n){var i=e(n).data("padding-right");"undefined"!=typeof i&&e(n).css("padding-right",i).removeData("padding-right")}),e(c.STICKY_CONTENT+", "+c.NAVBAR_TOGGLER).each(function(t,n){var i=e(n).data("margin-right");"undefined"!=typeof i&&e(n).css("margin-right",i).removeData("margin-right")});var t=e("body").data("padding-right");"undefined"!=typeof t&&e("body").css("padding-right",t).removeData("padding-right")},u._getScrollbarWidth=function(){var t=document.createElement("div");t.className=h.SCROLLBAR_MEASURER,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},i._jQueryInterface=function(t,n){return this.each(function(){var s=e(this).data("bs.modal"),r=e.extend({},i.Default,e(this).data(),"object"==typeof t&&t);if(s||(s=new i(this,r),e(this).data("bs.modal",s)),"string"==typeof t){if("undefined"==typeof s[t])throw new Error('No method named "'+t+'"');s[t](n)}else r.show&&s.show(n)})},r(i,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}},{key:"Default",get:function(){return o}}]),i}();return e(document).on(l.CLICK_DATA_API,c.DATA_TOGGLE,function(t){var n,i=this,r=s.getSelectorFromElement(this);r&&(n=e(r)[0]);var o=e(n).data("bs.modal")?"toggle":e.extend({},e(n).data(),e(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var a=e(n).one(l.SHOW,function(t){t.isDefaultPrevented()||a.one(l.HIDDEN,function(){e(i).is(":visible")&&i.focus()})});u._jQueryInterface.call(e(n),o,this)}),e.fn[t]=u._jQueryInterface,e.fn[t].Constructor=u,e.fn[t].noConflict=function(){return e.fn[t]=i,u._jQueryInterface},u}(),f=function(){if("undefined"==typeof n)throw new Error("Bootstrap tooltips require Popper.js (https://popper.js.org)");var t="tooltip",i=".bs.tooltip",o=e.fn[t],a=new RegExp("(^|\\s)bs-tooltip\\S+","g"),l={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)"},h={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},c={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip"},u={SHOW:"show",OUT:"out"},d={HIDE:"hide"+i,HIDDEN:"hidden"+i,SHOW:"show"+i,SHOWN:"shown"+i,INSERTED:"inserted"+i,CLICK:"click"+i,FOCUSIN:"focusin"+i,FOCUSOUT:"focusout"+i,MOUSEENTER:"mouseenter"+i,MOUSELEAVE:"mouseleave"+i},f={FADE:"fade",SHOW:"show"},_={TOOLTIP:".tooltip",TOOLTIP_INNER:".tooltip-inner",ARROW:".arrow"},g={HOVER:"hover",FOCUS:"focus",CLICK:"click",MANUAL:"manual"},m=function(){function o(t,e){this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var m=o.prototype;return m.enable=function(){this._isEnabled=!0},m.disable=function(){this._isEnabled=!1},m.toggleEnabled=function(){this._isEnabled=!this._isEnabled},m.toggle=function(t){if(this._isEnabled)if(t){var n=this.constructor.DATA_KEY,i=e(t.currentTarget).data(n);i||(i=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(n,i)),i._activeTrigger.click=!i._activeTrigger.click,i._isWithActiveTrigger()?i._enter(null,i):i._leave(null,i)}else{if(e(this.getTipElement()).hasClass(f.SHOW))return void this._leave(null,this);this._enter(null,this)}},m.dispose=function(){clearTimeout(this._timeout),e.removeData(this.element,this.constructor.DATA_KEY),e(this.element).off(this.constructor.EVENT_KEY),e(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&e(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,null!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},m.show=function(){var t=this;if("none"===e(this.element).css("display"))throw new Error("Please use show on visible elements");var i=e.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){e(this.element).trigger(i);var r=e.contains(this.element.ownerDocument.documentElement,this.element);if(i.isDefaultPrevented()||!r)return;var a=this.getTipElement(),l=s.getUID(this.constructor.NAME);a.setAttribute("id",l),this.element.setAttribute("aria-describedby",l),this.setContent(),this.config.animation&&e(a).addClass(f.FADE);var h="function"==typeof this.config.placement?this.config.placement.call(this,a,this.element):this.config.placement,c=this._getAttachment(h);this.addAttachmentClass(c);var d=!1===this.config.container?document.body:e(this.config.container);e(a).data(this.constructor.DATA_KEY,this),e.contains(this.element.ownerDocument.documentElement,this.tip)||e(a).appendTo(d),e(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new n(this.element,a,{placement:c,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:_.ARROW}},onCreate:function(e){e.originalPlacement!==e.placement&&t._handlePopperPlacementChange(e)},onUpdate:function(e){t._handlePopperPlacementChange(e)}}),e(a).addClass(f.SHOW),"ontouchstart"in document.documentElement&&e("body").children().on("mouseover",null,e.noop);var g=function(){t.config.animation&&t._fixTransition();var n=t._hoverState;t._hoverState=null,e(t.element).trigger(t.constructor.Event.SHOWN),n===u.OUT&&t._leave(null,t)};s.supportsTransitionEnd()&&e(this.tip).hasClass(f.FADE)?e(this.tip).one(s.TRANSITION_END,g).emulateTransitionEnd(o._TRANSITION_DURATION):g()}},m.hide=function(t){var n=this,i=this.getTipElement(),r=e.Event(this.constructor.Event.HIDE),o=function(){n._hoverState!==u.SHOW&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),e(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),t&&t()};e(this.element).trigger(r),r.isDefaultPrevented()||(e(i).removeClass(f.SHOW),"ontouchstart"in document.documentElement&&e("body").children().off("mouseover",null,e.noop),this._activeTrigger[g.CLICK]=!1,this._activeTrigger[g.FOCUS]=!1,this._activeTrigger[g.HOVER]=!1,s.supportsTransitionEnd()&&e(this.tip).hasClass(f.FADE)?e(i).one(s.TRANSITION_END,o).emulateTransitionEnd(150):o(),this._hoverState="")},m.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},m.isWithContent=function(){return Boolean(this.getTitle())},m.addAttachmentClass=function(t){e(this.getTipElement()).addClass("bs-tooltip-"+t)},m.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},m.setContent=function(){var t=e(this.getTipElement());this.setElementContent(t.find(_.TOOLTIP_INNER),this.getTitle()),t.removeClass(f.FADE+" "+f.SHOW)},m.setElementContent=function(t,n){var i=this.config.html;"object"==typeof n&&(n.nodeType||n.jquery)?i?e(n).parent().is(t)||t.empty().append(n):t.text(e(n).text()):t[i?"html":"text"](n)},m.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},m._getAttachment=function(t){return h[t.toUpperCase()]},m._setListeners=function(){var t=this;this.config.trigger.split(" ").forEach(function(n){if("click"===n)e(t.element).on(t.constructor.Event.CLICK,t.config.selector,function(e){return t.toggle(e)});else if(n!==g.MANUAL){var i=n===g.HOVER?t.constructor.Event.MOUSEENTER:t.constructor.Event.FOCUSIN,s=n===g.HOVER?t.constructor.Event.MOUSELEAVE:t.constructor.Event.FOCUSOUT;e(t.element).on(i,t.config.selector,function(e){return t._enter(e)}).on(s,t.config.selector,function(e){return t._leave(e)})}e(t.element).closest(".modal").on("hide.bs.modal",function(){return t.hide()})}),this.config.selector?this.config=e.extend({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},m._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},m._enter=function(t,n){var i=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(i))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(i,n)),t&&(n._activeTrigger["focusin"===t.type?g.FOCUS:g.HOVER]=!0),e(n.getTipElement()).hasClass(f.SHOW)||n._hoverState===u.SHOW?n._hoverState=u.SHOW:(clearTimeout(n._timeout),n._hoverState=u.SHOW,n.config.delay&&n.config.delay.show?n._timeout=setTimeout(function(){n._hoverState===u.SHOW&&n.show()},n.config.delay.show):n.show())},m._leave=function(t,n){var i=this.constructor.DATA_KEY;(n=n||e(t.currentTarget).data(i))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),e(t.currentTarget).data(i,n)),t&&(n._activeTrigger["focusout"===t.type?g.FOCUS:g.HOVER]=!1),n._isWithActiveTrigger()||(clearTimeout(n._timeout),n._hoverState=u.OUT,n.config.delay&&n.config.delay.hide?n._timeout=setTimeout(function(){n._hoverState===u.OUT&&n.hide()},n.config.delay.hide):n.hide())},m._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},m._getConfig=function(n){return"number"==typeof(n=e.extend({},this.constructor.Default,e(this.element).data(),n)).delay&&(n.delay={show:n.delay,hide:n.delay}),"number"==typeof n.title&&(n.title=n.title.toString()),"number"==typeof n.content&&(n.content=n.content.toString()),s.typeCheckConfig(t,n,this.constructor.DefaultType),n},m._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},m._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(a);null!==n&&n.length>0&&t.removeClass(n.join(""))},m._handlePopperPlacementChange=function(t){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},m._fixTransition=function(){var t=this.getTipElement(),n=this.config.animation;null===t.getAttribute("x-placement")&&(e(t).removeClass(f.FADE),this.config.animation=!1,this.hide(),this.show(),this.config.animation=n)},o._jQueryInterface=function(t){return this.each(function(){var n=e(this).data("bs.tooltip"),i="object"==typeof t&&t;if((n||!/dispose|hide/.test(t))&&(n||(n=new o(this,i),e(this).data("bs.tooltip",n)),"string"==typeof t)){if("undefined"==typeof n[t])throw new Error('No method named "'+t+'"');n[t]()}})},r(o,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}},{key:"Default",get:function(){return c}},{key:"NAME",get:function(){return t}},{key:"DATA_KEY",get:function(){return"bs.tooltip"}},{key:"Event",get:function(){return d}},{key:"EVENT_KEY",get:function(){return i}},{key:"DefaultType",get:function(){return l}}]),o}();return e.fn[t]=m._jQueryInterface,e.fn[t].Constructor=m,e.fn[t].noConflict=function(){return e.fn[t]=o,m._jQueryInterface},m}(),_=function(){var t="popover",n=".bs.popover",i=e.fn[t],s=new RegExp("(^|\\s)bs-popover\\S+","g"),a=e.extend({},f.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),l=e.extend({},f.DefaultType,{content:"(string|element|function)"}),h={FADE:"fade",SHOW:"show"},c={TITLE:".popover-header",CONTENT:".popover-body"},u={HIDE:"hide"+n,HIDDEN:"hidden"+n,SHOW:"show"+n,SHOWN:"shown"+n,INSERTED:"inserted"+n,CLICK:"click"+n,FOCUSIN:"focusin"+n,FOCUSOUT:"focusout"+n,MOUSEENTER:"mouseenter"+n,MOUSELEAVE:"mouseleave"+n},d=function(i){function d(){return i.apply(this,arguments)||this}o(d,i);var f=d.prototype;return f.isWithContent=function(){return this.getTitle()||this._getContent()},f.addAttachmentClass=function(t){e(this.getTipElement()).addClass("bs-popover-"+t)},f.getTipElement=function(){return this.tip=this.tip||e(this.config.template)[0],this.tip},f.setContent=function(){var t=e(this.getTipElement());this.setElementContent(t.find(c.TITLE),this.getTitle()),this.setElementContent(t.find(c.CONTENT),this._getContent()),t.removeClass(h.FADE+" "+h.SHOW)},f._getContent=function(){return this.element.getAttribute("data-content")||("function"==typeof this.config.content?this.config.content.call(this.element):this.config.content)},f._cleanTipClass=function(){var t=e(this.getTipElement()),n=t.attr("class").match(s);null!==n&&n.length>0&&t.removeClass(n.join(""))},d._jQueryInterface=function(t){return this.each(function(){var n=e(this).data("bs.popover"),i="object"==typeof t?t:null;if((n||!/destroy|hide/.test(t))&&(n||(n=new d(this,i),e(this).data("bs.popover",n)),"string"==typeof t)){if("undefined"==typeof n[t])throw new Error('No method named "'+t+'"');n[t]()}})},r(d,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}},{key:"Default",get:function(){return a}},{key:"NAME",get:function(){return t}},{key:"DATA_KEY",get:function(){return"bs.popover"}},{key:"Event",get:function(){return u}},{key:"EVENT_KEY",get:function(){return n}},{key:"DefaultType",get:function(){return l}}]),d}(f);return e.fn[t]=d._jQueryInterface,e.fn[t].Constructor=d,e.fn[t].noConflict=function(){return e.fn[t]=i,d._jQueryInterface},d}(),g=function(){var t="scrollspy",n=e.fn[t],i={offset:10,method:"auto",target:""},o={offset:"number",method:"string",target:"(string|element)"},a={ACTIVATE:"activate.bs.scrollspy",SCROLL:"scroll.bs.scrollspy",LOAD_DATA_API:"load.bs.scrollspy.data-api"},l={DROPDOWN_ITEM:"dropdown-item",DROPDOWN_MENU:"dropdown-menu",ACTIVE:"active"},h={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},c={OFFSET:"offset",POSITION:"position"},u=function(){function n(t,n){var i=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(n),this._selector=this._config.target+" "+h.NAV_LINKS+","+this._config.target+" "+h.LIST_ITEMS+","+this._config.target+" "+h.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,e(this._scrollElement).on(a.SCROLL,function(t){return i._process(t)}),this.refresh(),this._process()}var u=n.prototype;return u.refresh=function(){var t=this,n=this._scrollElement!==this._scrollElement.window?c.POSITION:c.OFFSET,i="auto"===this._config.method?n:this._config.method,r=i===c.POSITION?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),e.makeArray(e(this._selector)).map(function(t){var n,o=s.getSelectorFromElement(t);if(o&&(n=e(o)[0]),n){var a=n.getBoundingClientRect();if(a.width||a.height)return[e(n)[i]().top+r,o]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(e){t._offsets.push(e[0]),t._targets.push(e[1])})},u.dispose=function(){e.removeData(this._element,"bs.scrollspy"),e(this._scrollElement).off(".bs.scrollspy"),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},u._getConfig=function(n){if("string"!=typeof(n=e.extend({},i,n)).target){var r=e(n.target).attr("id");r||(r=s.getUID(t),e(n.target).attr("id",r)),n.target="#"+r}return s.typeCheckConfig(t,n,o),n},u._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},u._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},u._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},u._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=n){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(var s=this._offsets.length;s--;)this._activeTarget!==this._targets[s]&&t>=this._offsets[s]&&("undefined"==typeof this._offsets[s+1]||t<this._offsets[s+1])&&this._activate(this._targets[s])}},u._activate=function(t){this._activeTarget=t,this._clear();var n=this._selector.split(",");n=n.map(function(e){return e+'[data-target="'+t+'"],'+e+'[href="'+t+'"]'});var i=e(n.join(","));i.hasClass(l.DROPDOWN_ITEM)?(i.closest(h.DROPDOWN).find(h.DROPDOWN_TOGGLE).addClass(l.ACTIVE),i.addClass(l.ACTIVE)):(i.addClass(l.ACTIVE),i.parents(h.NAV_LIST_GROUP).prev(h.NAV_LINKS+", "+h.LIST_ITEMS).addClass(l.ACTIVE),i.parents(h.NAV_LIST_GROUP).prev(h.NAV_ITEMS).children(h.NAV_LINKS).addClass(l.ACTIVE)),e(this._scrollElement).trigger(a.ACTIVATE,{relatedTarget:t})},u._clear=function(){e(this._selector).filter(h.ACTIVE).removeClass(l.ACTIVE)},n._jQueryInterface=function(t){return this.each(function(){var i=e(this).data("bs.scrollspy"),s="object"==typeof t&&t;if(i||(i=new n(this,s),e(this).data("bs.scrollspy",i)),"string"==typeof t){if("undefined"==typeof i[t])throw new Error('No method named "'+t+'"');i[t]()}})},r(n,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}},{key:"Default",get:function(){return i}}]),n}();return e(window).on(a.LOAD_DATA_API,function(){for(var t=e.makeArray(e(h.DATA_SPY)),n=t.length;n--;){var i=e(t[n]);u._jQueryInterface.call(i,i.data())}}),e.fn[t]=u._jQueryInterface,e.fn[t].Constructor=u,e.fn[t].noConflict=function(){return e.fn[t]=n,u._jQueryInterface},u}(),m=function(){var t=e.fn.tab,n={HIDE:"hide.bs.tab",HIDDEN:"hidden.bs.tab",SHOW:"show.bs.tab",SHOWN:"shown.bs.tab",CLICK_DATA_API:"click.bs.tab.data-api"},i={DROPDOWN_MENU:"dropdown-menu",ACTIVE:"active",DISABLED:"disabled",FADE:"fade",SHOW:"show"},o={DROPDOWN:".dropdown",NAV_LIST_GROUP:".nav, .list-group",ACTIVE:".active",ACTIVE_UL:"> li > .active",DATA_TOGGLE:'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',DROPDOWN_TOGGLE:".dropdown-toggle",DROPDOWN_ACTIVE_CHILD:"> .dropdown-menu .active"},a=function(){function t(t){this._element=t}var a=t.prototype;return a.show=function(){var t=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&e(this._element).hasClass(i.ACTIVE)||e(this._element).hasClass(i.DISABLED))){var r,a,l=e(this._element).closest(o.NAV_LIST_GROUP)[0],h=s.getSelectorFromElement(this._element);if(l){var c="UL"===l.nodeName?o.ACTIVE_UL:o.ACTIVE;a=e.makeArray(e(l).find(c)),a=a[a.length-1]}var u=e.Event(n.HIDE,{relatedTarget:this._element}),d=e.Event(n.SHOW,{relatedTarget:a});if(a&&e(a).trigger(u),e(this._element).trigger(d),!d.isDefaultPrevented()&&!u.isDefaultPrevented()){h&&(r=e(h)[0]),this._activate(this._element,l);var f=function(){var i=e.Event(n.HIDDEN,{relatedTarget:t._element}),s=e.Event(n.SHOWN,{relatedTarget:a});e(a).trigger(i),e(t._element).trigger(s)};r?this._activate(r,r.parentNode,f):f()}}},a.dispose=function(){e.removeData(this._element,"bs.tab"),this._element=null},a._activate=function(t,n,r){var a,l=this,h=(a="UL"===n.nodeName?e(n).find(o.ACTIVE_UL):e(n).children(o.ACTIVE))[0],c=r&&s.supportsTransitionEnd()&&h&&e(h).hasClass(i.FADE),u=function(){return l._transitionComplete(t,h,c,r)};h&&c?e(h).one(s.TRANSITION_END,u).emulateTransitionEnd(150):u(),h&&e(h).removeClass(i.SHOW)},a._transitionComplete=function(t,n,r,a){if(n){e(n).removeClass(i.ACTIVE);var l=e(n.parentNode).find(o.DROPDOWN_ACTIVE_CHILD)[0];l&&e(l).removeClass(i.ACTIVE),"tab"===n.getAttribute("role")&&n.setAttribute("aria-selected",!1)}if(e(t).addClass(i.ACTIVE),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),r?(s.reflow(t),e(t).addClass(i.SHOW)):e(t).removeClass(i.FADE),t.parentNode&&e(t.parentNode).hasClass(i.DROPDOWN_MENU)){var h=e(t).closest(o.DROPDOWN)[0];h&&e(h).find(o.DROPDOWN_TOGGLE).addClass(i.ACTIVE),t.setAttribute("aria-expanded",!0)}a&&a()},t._jQueryInterface=function(n){return this.each(function(){var i=e(this),s=i.data("bs.tab");if(s||(s=new t(this),i.data("bs.tab",s)),"string"==typeof n){if("undefined"==typeof s[n])throw new Error('No method named "'+n+'"');s[n]()}})},r(t,null,[{key:"VERSION",get:function(){return"4.0.0-beta.2"}}]),t}();return e(document).on(n.CLICK_DATA_API,o.DATA_TOGGLE,function(t){t.preventDefault(),a._jQueryInterface.call(e(this),"show")}),e.fn.tab=a._jQueryInterface,e.fn.tab.Constructor=a,e.fn.tab.noConflict=function(){return e.fn.tab=t,a._jQueryInterface},a}();return function(){if("undefined"==typeof e)throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=e.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||t[0]>=4)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(),t.Util=s,t.Alert=a,t.Button=l,t.Carousel=h,t.Collapse=c,t.Dropdown=u,t.Modal=d,t.Popover=_,t.Scrollspy=g,t.Tab=m,t.Tooltip=f,t}({},$,Popper);
//# sourceMappingURL=bootstrap.min.js.map
/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 2.7.1
 *
 * Copyright 2017 Nick Downie
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Chart = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
/* MIT license */
var colorNames = require(6);

module.exports = {
   getRgba: getRgba,
   getHsla: getHsla,
   getRgb: getRgb,
   getHsl: getHsl,
   getHwb: getHwb,
   getAlpha: getAlpha,

   hexString: hexString,
   rgbString: rgbString,
   rgbaString: rgbaString,
   percentString: percentString,
   percentaString: percentaString,
   hslString: hslString,
   hslaString: hslaString,
   hwbString: hwbString,
   keyword: keyword
}

function getRgba(string) {
   if (!string) {
      return;
   }
   var abbr =  /^#([a-fA-F0-9]{3})$/i,
       hex =  /^#([a-fA-F0-9]{6})$/i,
       rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
       per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
       keyword = /(\w+)/;

   var rgb = [0, 0, 0],
       a = 1,
       match = string.match(abbr);
   if (match) {
      match = match[1];
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match[i] + match[i], 16);
      }
   }
   else if (match = string.match(hex)) {
      match = match[1];
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match.slice(i * 2, i * 2 + 2), 16);
      }
   }
   else if (match = string.match(rgba)) {
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match[i + 1]);
      }
      a = parseFloat(match[4]);
   }
   else if (match = string.match(per)) {
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
      }
      a = parseFloat(match[4]);
   }
   else if (match = string.match(keyword)) {
      if (match[1] == "transparent") {
         return [0, 0, 0, 0];
      }
      rgb = colorNames[match[1]];
      if (!rgb) {
         return;
      }
   }

   for (var i = 0; i < rgb.length; i++) {
      rgb[i] = scale(rgb[i], 0, 255);
   }
   if (!a && a != 0) {
      a = 1;
   }
   else {
      a = scale(a, 0, 1);
   }
   rgb[3] = a;
   return rgb;
}

function getHsla(string) {
   if (!string) {
      return;
   }
   var hsl = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
   var match = string.match(hsl);
   if (match) {
      var alpha = parseFloat(match[4]);
      var h = scale(parseInt(match[1]), 0, 360),
          s = scale(parseFloat(match[2]), 0, 100),
          l = scale(parseFloat(match[3]), 0, 100),
          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, s, l, a];
   }
}

function getHwb(string) {
   if (!string) {
      return;
   }
   var hwb = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
   var match = string.match(hwb);
   if (match) {
    var alpha = parseFloat(match[4]);
      var h = scale(parseInt(match[1]), 0, 360),
          w = scale(parseFloat(match[2]), 0, 100),
          b = scale(parseFloat(match[3]), 0, 100),
          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, w, b, a];
   }
}

function getRgb(string) {
   var rgba = getRgba(string);
   return rgba && rgba.slice(0, 3);
}

function getHsl(string) {
  var hsla = getHsla(string);
  return hsla && hsla.slice(0, 3);
}

function getAlpha(string) {
   var vals = getRgba(string);
   if (vals) {
      return vals[3];
   }
   else if (vals = getHsla(string)) {
      return vals[3];
   }
   else if (vals = getHwb(string)) {
      return vals[3];
   }
}

// generators
function hexString(rgb) {
   return "#" + hexDouble(rgb[0]) + hexDouble(rgb[1])
              + hexDouble(rgb[2]);
}

function rgbString(rgba, alpha) {
   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
      return rgbaString(rgba, alpha);
   }
   return "rgb(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ")";
}

function rgbaString(rgba, alpha) {
   if (alpha === undefined) {
      alpha = (rgba[3] !== undefined ? rgba[3] : 1);
   }
   return "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2]
           + ", " + alpha + ")";
}

function percentString(rgba, alpha) {
   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
      return percentaString(rgba, alpha);
   }
   var r = Math.round(rgba[0]/255 * 100),
       g = Math.round(rgba[1]/255 * 100),
       b = Math.round(rgba[2]/255 * 100);

   return "rgb(" + r + "%, " + g + "%, " + b + "%)";
}

function percentaString(rgba, alpha) {
   var r = Math.round(rgba[0]/255 * 100),
       g = Math.round(rgba[1]/255 * 100),
       b = Math.round(rgba[2]/255 * 100);
   return "rgba(" + r + "%, " + g + "%, " + b + "%, " + (alpha || rgba[3] || 1) + ")";
}

function hslString(hsla, alpha) {
   if (alpha < 1 || (hsla[3] && hsla[3] < 1)) {
      return hslaString(hsla, alpha);
   }
   return "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)";
}

function hslaString(hsla, alpha) {
   if (alpha === undefined) {
      alpha = (hsla[3] !== undefined ? hsla[3] : 1);
   }
   return "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, "
           + alpha + ")";
}

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
function hwbString(hwb, alpha) {
   if (alpha === undefined) {
      alpha = (hwb[3] !== undefined ? hwb[3] : 1);
   }
   return "hwb(" + hwb[0] + ", " + hwb[1] + "%, " + hwb[2] + "%"
           + (alpha !== undefined && alpha !== 1 ? ", " + alpha : "") + ")";
}

function keyword(rgb) {
  return reverseNames[rgb.slice(0, 3)];
}

// helpers
function scale(num, min, max) {
   return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
  var str = num.toString(16).toUpperCase();
  return (str.length < 2) ? "0" + str : str;
}


//create a list of reverse color names
var reverseNames = {};
for (var name in colorNames) {
   reverseNames[colorNames[name]] = name;
}

},{"6":6}],3:[function(require,module,exports){
/* MIT license */
var convert = require(5);
var string = require(2);

var Color = function (obj) {
	if (obj instanceof Color) {
		return obj;
	}
	if (!(this instanceof Color)) {
		return new Color(obj);
	}

	this.valid = false;
	this.values = {
		rgb: [0, 0, 0],
		hsl: [0, 0, 0],
		hsv: [0, 0, 0],
		hwb: [0, 0, 0],
		cmyk: [0, 0, 0, 0],
		alpha: 1
	};

	// parse Color() argument
	var vals;
	if (typeof obj === 'string') {
		vals = string.getRgba(obj);
		if (vals) {
			this.setValues('rgb', vals);
		} else if (vals = string.getHsla(obj)) {
			this.setValues('hsl', vals);
		} else if (vals = string.getHwb(obj)) {
			this.setValues('hwb', vals);
		}
	} else if (typeof obj === 'object') {
		vals = obj;
		if (vals.r !== undefined || vals.red !== undefined) {
			this.setValues('rgb', vals);
		} else if (vals.l !== undefined || vals.lightness !== undefined) {
			this.setValues('hsl', vals);
		} else if (vals.v !== undefined || vals.value !== undefined) {
			this.setValues('hsv', vals);
		} else if (vals.w !== undefined || vals.whiteness !== undefined) {
			this.setValues('hwb', vals);
		} else if (vals.c !== undefined || vals.cyan !== undefined) {
			this.setValues('cmyk', vals);
		}
	}
};

Color.prototype = {
	isValid: function () {
		return this.valid;
	},
	rgb: function () {
		return this.setSpace('rgb', arguments);
	},
	hsl: function () {
		return this.setSpace('hsl', arguments);
	},
	hsv: function () {
		return this.setSpace('hsv', arguments);
	},
	hwb: function () {
		return this.setSpace('hwb', arguments);
	},
	cmyk: function () {
		return this.setSpace('cmyk', arguments);
	},

	rgbArray: function () {
		return this.values.rgb;
	},
	hslArray: function () {
		return this.values.hsl;
	},
	hsvArray: function () {
		return this.values.hsv;
	},
	hwbArray: function () {
		var values = this.values;
		if (values.alpha !== 1) {
			return values.hwb.concat([values.alpha]);
		}
		return values.hwb;
	},
	cmykArray: function () {
		return this.values.cmyk;
	},
	rgbaArray: function () {
		var values = this.values;
		return values.rgb.concat([values.alpha]);
	},
	hslaArray: function () {
		var values = this.values;
		return values.hsl.concat([values.alpha]);
	},
	alpha: function (val) {
		if (val === undefined) {
			return this.values.alpha;
		}
		this.setValues('alpha', val);
		return this;
	},

	red: function (val) {
		return this.setChannel('rgb', 0, val);
	},
	green: function (val) {
		return this.setChannel('rgb', 1, val);
	},
	blue: function (val) {
		return this.setChannel('rgb', 2, val);
	},
	hue: function (val) {
		if (val) {
			val %= 360;
			val = val < 0 ? 360 + val : val;
		}
		return this.setChannel('hsl', 0, val);
	},
	saturation: function (val) {
		return this.setChannel('hsl', 1, val);
	},
	lightness: function (val) {
		return this.setChannel('hsl', 2, val);
	},
	saturationv: function (val) {
		return this.setChannel('hsv', 1, val);
	},
	whiteness: function (val) {
		return this.setChannel('hwb', 1, val);
	},
	blackness: function (val) {
		return this.setChannel('hwb', 2, val);
	},
	value: function (val) {
		return this.setChannel('hsv', 2, val);
	},
	cyan: function (val) {
		return this.setChannel('cmyk', 0, val);
	},
	magenta: function (val) {
		return this.setChannel('cmyk', 1, val);
	},
	yellow: function (val) {
		return this.setChannel('cmyk', 2, val);
	},
	black: function (val) {
		return this.setChannel('cmyk', 3, val);
	},

	hexString: function () {
		return string.hexString(this.values.rgb);
	},
	rgbString: function () {
		return string.rgbString(this.values.rgb, this.values.alpha);
	},
	rgbaString: function () {
		return string.rgbaString(this.values.rgb, this.values.alpha);
	},
	percentString: function () {
		return string.percentString(this.values.rgb, this.values.alpha);
	},
	hslString: function () {
		return string.hslString(this.values.hsl, this.values.alpha);
	},
	hslaString: function () {
		return string.hslaString(this.values.hsl, this.values.alpha);
	},
	hwbString: function () {
		return string.hwbString(this.values.hwb, this.values.alpha);
	},
	keyword: function () {
		return string.keyword(this.values.rgb, this.values.alpha);
	},

	rgbNumber: function () {
		var rgb = this.values.rgb;
		return (rgb[0] << 16) | (rgb[1] << 8) | rgb[2];
	},

	luminosity: function () {
		// http://www.w3.org/TR/WCAG20/#relativeluminancedef
		var rgb = this.values.rgb;
		var lum = [];
		for (var i = 0; i < rgb.length; i++) {
			var chan = rgb[i] / 255;
			lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
		}
		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},

	contrast: function (color2) {
		// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
		var lum1 = this.luminosity();
		var lum2 = color2.luminosity();
		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}
		return (lum2 + 0.05) / (lum1 + 0.05);
	},

	level: function (color2) {
		var contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7.1) {
			return 'AAA';
		}

		return (contrastRatio >= 4.5) ? 'AA' : '';
	},

	dark: function () {
		// YIQ equation from http://24ways.org/2010/calculating-color-contrast
		var rgb = this.values.rgb;
		var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
		return yiq < 128;
	},

	light: function () {
		return !this.dark();
	},

	negate: function () {
		var rgb = [];
		for (var i = 0; i < 3; i++) {
			rgb[i] = 255 - this.values.rgb[i];
		}
		this.setValues('rgb', rgb);
		return this;
	},

	lighten: function (ratio) {
		var hsl = this.values.hsl;
		hsl[2] += hsl[2] * ratio;
		this.setValues('hsl', hsl);
		return this;
	},

	darken: function (ratio) {
		var hsl = this.values.hsl;
		hsl[2] -= hsl[2] * ratio;
		this.setValues('hsl', hsl);
		return this;
	},

	saturate: function (ratio) {
		var hsl = this.values.hsl;
		hsl[1] += hsl[1] * ratio;
		this.setValues('hsl', hsl);
		return this;
	},

	desaturate: function (ratio) {
		var hsl = this.values.hsl;
		hsl[1] -= hsl[1] * ratio;
		this.setValues('hsl', hsl);
		return this;
	},

	whiten: function (ratio) {
		var hwb = this.values.hwb;
		hwb[1] += hwb[1] * ratio;
		this.setValues('hwb', hwb);
		return this;
	},

	blacken: function (ratio) {
		var hwb = this.values.hwb;
		hwb[2] += hwb[2] * ratio;
		this.setValues('hwb', hwb);
		return this;
	},

	greyscale: function () {
		var rgb = this.values.rgb;
		// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
		var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		this.setValues('rgb', [val, val, val]);
		return this;
	},

	clearer: function (ratio) {
		var alpha = this.values.alpha;
		this.setValues('alpha', alpha - (alpha * ratio));
		return this;
	},

	opaquer: function (ratio) {
		var alpha = this.values.alpha;
		this.setValues('alpha', alpha + (alpha * ratio));
		return this;
	},

	rotate: function (degrees) {
		var hsl = this.values.hsl;
		var hue = (hsl[0] + degrees) % 360;
		hsl[0] = hue < 0 ? 360 + hue : hue;
		this.setValues('hsl', hsl);
		return this;
	},

	/**
	 * Ported from sass implementation in C
	 * https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
	 */
	mix: function (mixinColor, weight) {
		var color1 = this;
		var color2 = mixinColor;
		var p = weight === undefined ? 0.5 : weight;

		var w = 2 * p - 1;
		var a = color1.alpha() - color2.alpha();

		var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
		var w2 = 1 - w1;

		return this
			.rgb(
				w1 * color1.red() + w2 * color2.red(),
				w1 * color1.green() + w2 * color2.green(),
				w1 * color1.blue() + w2 * color2.blue()
			)
			.alpha(color1.alpha() * p + color2.alpha() * (1 - p));
	},

	toJSON: function () {
		return this.rgb();
	},

	clone: function () {
		// NOTE(SB): using node-clone creates a dependency to Buffer when using browserify,
		// making the final build way to big to embed in Chart.js. So let's do it manually,
		// assuming that values to clone are 1 dimension arrays containing only numbers,
		// except 'alpha' which is a number.
		var result = new Color();
		var source = this.values;
		var target = result.values;
		var value, type;

		for (var prop in source) {
			if (source.hasOwnProperty(prop)) {
				value = source[prop];
				type = ({}).toString.call(value);
				if (type === '[object Array]') {
					target[prop] = value.slice(0);
				} else if (type === '[object Number]') {
					target[prop] = value;
				} else {
					console.error('unexpected color value:', value);
				}
			}
		}

		return result;
	}
};

Color.prototype.spaces = {
	rgb: ['red', 'green', 'blue'],
	hsl: ['hue', 'saturation', 'lightness'],
	hsv: ['hue', 'saturation', 'value'],
	hwb: ['hue', 'whiteness', 'blackness'],
	cmyk: ['cyan', 'magenta', 'yellow', 'black']
};

Color.prototype.maxes = {
	rgb: [255, 255, 255],
	hsl: [360, 100, 100],
	hsv: [360, 100, 100],
	hwb: [360, 100, 100],
	cmyk: [100, 100, 100, 100]
};

Color.prototype.getValues = function (space) {
	var values = this.values;
	var vals = {};

	for (var i = 0; i < space.length; i++) {
		vals[space.charAt(i)] = values[space][i];
	}

	if (values.alpha !== 1) {
		vals.a = values.alpha;
	}

	// {r: 255, g: 255, b: 255, a: 0.4}
	return vals;
};

Color.prototype.setValues = function (space, vals) {
	var values = this.values;
	var spaces = this.spaces;
	var maxes = this.maxes;
	var alpha = 1;
	var i;

	this.valid = true;

	if (space === 'alpha') {
		alpha = vals;
	} else if (vals.length) {
		// [10, 10, 10]
		values[space] = vals.slice(0, space.length);
		alpha = vals[space.length];
	} else if (vals[space.charAt(0)] !== undefined) {
		// {r: 10, g: 10, b: 10}
		for (i = 0; i < space.length; i++) {
			values[space][i] = vals[space.charAt(i)];
		}

		alpha = vals.a;
	} else if (vals[spaces[space][0]] !== undefined) {
		// {red: 10, green: 10, blue: 10}
		var chans = spaces[space];

		for (i = 0; i < space.length; i++) {
			values[space][i] = vals[chans[i]];
		}

		alpha = vals.alpha;
	}

	values.alpha = Math.max(0, Math.min(1, (alpha === undefined ? values.alpha : alpha)));

	if (space === 'alpha') {
		return false;
	}

	var capped;

	// cap values of the space prior converting all values
	for (i = 0; i < space.length; i++) {
		capped = Math.max(0, Math.min(maxes[space][i], values[space][i]));
		values[space][i] = Math.round(capped);
	}

	// convert to all the other color spaces
	for (var sname in spaces) {
		if (sname !== space) {
			values[sname] = convert[space][sname](values[space]);
		}
	}

	return true;
};

Color.prototype.setSpace = function (space, args) {
	var vals = args[0];

	if (vals === undefined) {
		// color.rgb()
		return this.getValues(space);
	}

	// color.rgb(10, 10, 10)
	if (typeof vals === 'number') {
		vals = Array.prototype.slice.call(args);
	}

	this.setValues(space, vals);
	return this;
};

Color.prototype.setChannel = function (space, index, val) {
	var svalues = this.values[space];
	if (val === undefined) {
		// color.red()
		return svalues[index];
	} else if (val === svalues[index]) {
		// color.red(color.red())
		return this;
	}

	// color.red(100)
	svalues[index] = val;
	this.setValues(space, svalues);

	return this;
};

if (typeof window !== 'undefined') {
	window.Color = Color;
}

module.exports = Color;

},{"2":2,"5":5}],4:[function(require,module,exports){
/* MIT license */

module.exports = {
  rgb2hsl: rgb2hsl,
  rgb2hsv: rgb2hsv,
  rgb2hwb: rgb2hwb,
  rgb2cmyk: rgb2cmyk,
  rgb2keyword: rgb2keyword,
  rgb2xyz: rgb2xyz,
  rgb2lab: rgb2lab,
  rgb2lch: rgb2lch,

  hsl2rgb: hsl2rgb,
  hsl2hsv: hsl2hsv,
  hsl2hwb: hsl2hwb,
  hsl2cmyk: hsl2cmyk,
  hsl2keyword: hsl2keyword,

  hsv2rgb: hsv2rgb,
  hsv2hsl: hsv2hsl,
  hsv2hwb: hsv2hwb,
  hsv2cmyk: hsv2cmyk,
  hsv2keyword: hsv2keyword,

  hwb2rgb: hwb2rgb,
  hwb2hsl: hwb2hsl,
  hwb2hsv: hwb2hsv,
  hwb2cmyk: hwb2cmyk,
  hwb2keyword: hwb2keyword,

  cmyk2rgb: cmyk2rgb,
  cmyk2hsl: cmyk2hsl,
  cmyk2hsv: cmyk2hsv,
  cmyk2hwb: cmyk2hwb,
  cmyk2keyword: cmyk2keyword,

  keyword2rgb: keyword2rgb,
  keyword2hsl: keyword2hsl,
  keyword2hsv: keyword2hsv,
  keyword2hwb: keyword2hwb,
  keyword2cmyk: keyword2cmyk,
  keyword2lab: keyword2lab,
  keyword2xyz: keyword2xyz,

  xyz2rgb: xyz2rgb,
  xyz2lab: xyz2lab,
  xyz2lch: xyz2lch,

  lab2xyz: lab2xyz,
  lab2rgb: lab2rgb,
  lab2lch: lab2lch,

  lch2lab: lch2lab,
  lch2xyz: lch2xyz,
  lch2rgb: lch2rgb
}


function rgb2hsl(rgb) {
  var r = rgb[0]/255,
      g = rgb[1]/255,
      b = rgb[2]/255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      delta = max - min,
      h, s, l;

  if (max == min)
    h = 0;
  else if (r == max)
    h = (g - b) / delta;
  else if (g == max)
    h = 2 + (b - r) / delta;
  else if (b == max)
    h = 4 + (r - g)/ delta;

  h = Math.min(h * 60, 360);

  if (h < 0)
    h += 360;

  l = (min + max) / 2;

  if (max == min)
    s = 0;
  else if (l <= 0.5)
    s = delta / (max + min);
  else
    s = delta / (2 - max - min);

  return [h, s * 100, l * 100];
}

function rgb2hsv(rgb) {
  var r = rgb[0],
      g = rgb[1],
      b = rgb[2],
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      delta = max - min,
      h, s, v;

  if (max == 0)
    s = 0;
  else
    s = (delta/max * 1000)/10;

  if (max == min)
    h = 0;
  else if (r == max)
    h = (g - b) / delta;
  else if (g == max)
    h = 2 + (b - r) / delta;
  else if (b == max)
    h = 4 + (r - g) / delta;

  h = Math.min(h * 60, 360);

  if (h < 0)
    h += 360;

  v = ((max / 255) * 1000) / 10;

  return [h, s, v];
}

function rgb2hwb(rgb) {
  var r = rgb[0],
      g = rgb[1],
      b = rgb[2],
      h = rgb2hsl(rgb)[0],
      w = 1/255 * Math.min(r, Math.min(g, b)),
      b = 1 - 1/255 * Math.max(r, Math.max(g, b));

  return [h, w * 100, b * 100];
}

function rgb2cmyk(rgb) {
  var r = rgb[0] / 255,
      g = rgb[1] / 255,
      b = rgb[2] / 255,
      c, m, y, k;

  k = Math.min(1 - r, 1 - g, 1 - b);
  c = (1 - r - k) / (1 - k) || 0;
  m = (1 - g - k) / (1 - k) || 0;
  y = (1 - b - k) / (1 - k) || 0;
  return [c * 100, m * 100, y * 100, k * 100];
}

function rgb2keyword(rgb) {
  return reverseKeywords[JSON.stringify(rgb)];
}

function rgb2xyz(rgb) {
  var r = rgb[0] / 255,
      g = rgb[1] / 255,
      b = rgb[2] / 255;

  // assume sRGB
  r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
  g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
  b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

  var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
  var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
  var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

  return [x * 100, y *100, z * 100];
}

function rgb2lab(rgb) {
  var xyz = rgb2xyz(rgb),
        x = xyz[0],
        y = xyz[1],
        z = xyz[2],
        l, a, b;

  x /= 95.047;
  y /= 100;
  z /= 108.883;

  x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x) + (16 / 116);
  y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y) + (16 / 116);
  z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z) + (16 / 116);

  l = (116 * y) - 16;
  a = 500 * (x - y);
  b = 200 * (y - z);

  return [l, a, b];
}

function rgb2lch(args) {
  return lab2lch(rgb2lab(args));
}

function hsl2rgb(hsl) {
  var h = hsl[0] / 360,
      s = hsl[1] / 100,
      l = hsl[2] / 100,
      t1, t2, t3, rgb, val;

  if (s == 0) {
    val = l * 255;
    return [val, val, val];
  }

  if (l < 0.5)
    t2 = l * (1 + s);
  else
    t2 = l + s - l * s;
  t1 = 2 * l - t2;

  rgb = [0, 0, 0];
  for (var i = 0; i < 3; i++) {
    t3 = h + 1 / 3 * - (i - 1);
    t3 < 0 && t3++;
    t3 > 1 && t3--;

    if (6 * t3 < 1)
      val = t1 + (t2 - t1) * 6 * t3;
    else if (2 * t3 < 1)
      val = t2;
    else if (3 * t3 < 2)
      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
    else
      val = t1;

    rgb[i] = val * 255;
  }

  return rgb;
}

function hsl2hsv(hsl) {
  var h = hsl[0],
      s = hsl[1] / 100,
      l = hsl[2] / 100,
      sv, v;

  if(l === 0) {
      // no need to do calc on black
      // also avoids divide by 0 error
      return [0, 0, 0];
  }

  l *= 2;
  s *= (l <= 1) ? l : 2 - l;
  v = (l + s) / 2;
  sv = (2 * s) / (l + s);
  return [h, sv * 100, v * 100];
}

function hsl2hwb(args) {
  return rgb2hwb(hsl2rgb(args));
}

function hsl2cmyk(args) {
  return rgb2cmyk(hsl2rgb(args));
}

function hsl2keyword(args) {
  return rgb2keyword(hsl2rgb(args));
}


function hsv2rgb(hsv) {
  var h = hsv[0] / 60,
      s = hsv[1] / 100,
      v = hsv[2] / 100,
      hi = Math.floor(h) % 6;

  var f = h - Math.floor(h),
      p = 255 * v * (1 - s),
      q = 255 * v * (1 - (s * f)),
      t = 255 * v * (1 - (s * (1 - f))),
      v = 255 * v;

  switch(hi) {
    case 0:
      return [v, t, p];
    case 1:
      return [q, v, p];
    case 2:
      return [p, v, t];
    case 3:
      return [p, q, v];
    case 4:
      return [t, p, v];
    case 5:
      return [v, p, q];
  }
}

function hsv2hsl(hsv) {
  var h = hsv[0],
      s = hsv[1] / 100,
      v = hsv[2] / 100,
      sl, l;

  l = (2 - s) * v;
  sl = s * v;
  sl /= (l <= 1) ? l : 2 - l;
  sl = sl || 0;
  l /= 2;
  return [h, sl * 100, l * 100];
}

function hsv2hwb(args) {
  return rgb2hwb(hsv2rgb(args))
}

function hsv2cmyk(args) {
  return rgb2cmyk(hsv2rgb(args));
}

function hsv2keyword(args) {
  return rgb2keyword(hsv2rgb(args));
}

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
function hwb2rgb(hwb) {
  var h = hwb[0] / 360,
      wh = hwb[1] / 100,
      bl = hwb[2] / 100,
      ratio = wh + bl,
      i, v, f, n;

  // wh + bl cant be > 1
  if (ratio > 1) {
    wh /= ratio;
    bl /= ratio;
  }

  i = Math.floor(6 * h);
  v = 1 - bl;
  f = 6 * h - i;
  if ((i & 0x01) != 0) {
    f = 1 - f;
  }
  n = wh + f * (v - wh);  // linear interpolation

  switch (i) {
    default:
    case 6:
    case 0: r = v; g = n; b = wh; break;
    case 1: r = n; g = v; b = wh; break;
    case 2: r = wh; g = v; b = n; break;
    case 3: r = wh; g = n; b = v; break;
    case 4: r = n; g = wh; b = v; break;
    case 5: r = v; g = wh; b = n; break;
  }

  return [r * 255, g * 255, b * 255];
}

function hwb2hsl(args) {
  return rgb2hsl(hwb2rgb(args));
}

function hwb2hsv(args) {
  return rgb2hsv(hwb2rgb(args));
}

function hwb2cmyk(args) {
  return rgb2cmyk(hwb2rgb(args));
}

function hwb2keyword(args) {
  return rgb2keyword(hwb2rgb(args));
}

function cmyk2rgb(cmyk) {
  var c = cmyk[0] / 100,
      m = cmyk[1] / 100,
      y = cmyk[2] / 100,
      k = cmyk[3] / 100,
      r, g, b;

  r = 1 - Math.min(1, c * (1 - k) + k);
  g = 1 - Math.min(1, m * (1 - k) + k);
  b = 1 - Math.min(1, y * (1 - k) + k);
  return [r * 255, g * 255, b * 255];
}

function cmyk2hsl(args) {
  return rgb2hsl(cmyk2rgb(args));
}

function cmyk2hsv(args) {
  return rgb2hsv(cmyk2rgb(args));
}

function cmyk2hwb(args) {
  return rgb2hwb(cmyk2rgb(args));
}

function cmyk2keyword(args) {
  return rgb2keyword(cmyk2rgb(args));
}


function xyz2rgb(xyz) {
  var x = xyz[0] / 100,
      y = xyz[1] / 100,
      z = xyz[2] / 100,
      r, g, b;

  r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
  g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
  b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

  // assume sRGB
  r = r > 0.0031308 ? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
    : r = (r * 12.92);

  g = g > 0.0031308 ? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
    : g = (g * 12.92);

  b = b > 0.0031308 ? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
    : b = (b * 12.92);

  r = Math.min(Math.max(0, r), 1);
  g = Math.min(Math.max(0, g), 1);
  b = Math.min(Math.max(0, b), 1);

  return [r * 255, g * 255, b * 255];
}

function xyz2lab(xyz) {
  var x = xyz[0],
      y = xyz[1],
      z = xyz[2],
      l, a, b;

  x /= 95.047;
  y /= 100;
  z /= 108.883;

  x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x) + (16 / 116);
  y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y) + (16 / 116);
  z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z) + (16 / 116);

  l = (116 * y) - 16;
  a = 500 * (x - y);
  b = 200 * (y - z);

  return [l, a, b];
}

function xyz2lch(args) {
  return lab2lch(xyz2lab(args));
}

function lab2xyz(lab) {
  var l = lab[0],
      a = lab[1],
      b = lab[2],
      x, y, z, y2;

  if (l <= 8) {
    y = (l * 100) / 903.3;
    y2 = (7.787 * (y / 100)) + (16 / 116);
  } else {
    y = 100 * Math.pow((l + 16) / 116, 3);
    y2 = Math.pow(y / 100, 1/3);
  }

  x = x / 95.047 <= 0.008856 ? x = (95.047 * ((a / 500) + y2 - (16 / 116))) / 7.787 : 95.047 * Math.pow((a / 500) + y2, 3);

  z = z / 108.883 <= 0.008859 ? z = (108.883 * (y2 - (b / 200) - (16 / 116))) / 7.787 : 108.883 * Math.pow(y2 - (b / 200), 3);

  return [x, y, z];
}

function lab2lch(lab) {
  var l = lab[0],
      a = lab[1],
      b = lab[2],
      hr, h, c;

  hr = Math.atan2(b, a);
  h = hr * 360 / 2 / Math.PI;
  if (h < 0) {
    h += 360;
  }
  c = Math.sqrt(a * a + b * b);
  return [l, c, h];
}

function lab2rgb(args) {
  return xyz2rgb(lab2xyz(args));
}

function lch2lab(lch) {
  var l = lch[0],
      c = lch[1],
      h = lch[2],
      a, b, hr;

  hr = h / 360 * 2 * Math.PI;
  a = c * Math.cos(hr);
  b = c * Math.sin(hr);
  return [l, a, b];
}

function lch2xyz(args) {
  return lab2xyz(lch2lab(args));
}

function lch2rgb(args) {
  return lab2rgb(lch2lab(args));
}

function keyword2rgb(keyword) {
  return cssKeywords[keyword];
}

function keyword2hsl(args) {
  return rgb2hsl(keyword2rgb(args));
}

function keyword2hsv(args) {
  return rgb2hsv(keyword2rgb(args));
}

function keyword2hwb(args) {
  return rgb2hwb(keyword2rgb(args));
}

function keyword2cmyk(args) {
  return rgb2cmyk(keyword2rgb(args));
}

function keyword2lab(args) {
  return rgb2lab(keyword2rgb(args));
}

function keyword2xyz(args) {
  return rgb2xyz(keyword2rgb(args));
}

var cssKeywords = {
  aliceblue:  [240,248,255],
  antiquewhite: [250,235,215],
  aqua: [0,255,255],
  aquamarine: [127,255,212],
  azure:  [240,255,255],
  beige:  [245,245,220],
  bisque: [255,228,196],
  black:  [0,0,0],
  blanchedalmond: [255,235,205],
  blue: [0,0,255],
  blueviolet: [138,43,226],
  brown:  [165,42,42],
  burlywood:  [222,184,135],
  cadetblue:  [95,158,160],
  chartreuse: [127,255,0],
  chocolate:  [210,105,30],
  coral:  [255,127,80],
  cornflowerblue: [100,149,237],
  cornsilk: [255,248,220],
  crimson:  [220,20,60],
  cyan: [0,255,255],
  darkblue: [0,0,139],
  darkcyan: [0,139,139],
  darkgoldenrod:  [184,134,11],
  darkgray: [169,169,169],
  darkgreen:  [0,100,0],
  darkgrey: [169,169,169],
  darkkhaki:  [189,183,107],
  darkmagenta:  [139,0,139],
  darkolivegreen: [85,107,47],
  darkorange: [255,140,0],
  darkorchid: [153,50,204],
  darkred:  [139,0,0],
  darksalmon: [233,150,122],
  darkseagreen: [143,188,143],
  darkslateblue:  [72,61,139],
  darkslategray:  [47,79,79],
  darkslategrey:  [47,79,79],
  darkturquoise:  [0,206,209],
  darkviolet: [148,0,211],
  deeppink: [255,20,147],
  deepskyblue:  [0,191,255],
  dimgray:  [105,105,105],
  dimgrey:  [105,105,105],
  dodgerblue: [30,144,255],
  firebrick:  [178,34,34],
  floralwhite:  [255,250,240],
  forestgreen:  [34,139,34],
  fuchsia:  [255,0,255],
  gainsboro:  [220,220,220],
  ghostwhite: [248,248,255],
  gold: [255,215,0],
  goldenrod:  [218,165,32],
  gray: [128,128,128],
  green:  [0,128,0],
  greenyellow:  [173,255,47],
  grey: [128,128,128],
  honeydew: [240,255,240],
  hotpink:  [255,105,180],
  indianred:  [205,92,92],
  indigo: [75,0,130],
  ivory:  [255,255,240],
  khaki:  [240,230,140],
  lavender: [230,230,250],
  lavenderblush:  [255,240,245],
  lawngreen:  [124,252,0],
  lemonchiffon: [255,250,205],
  lightblue:  [173,216,230],
  lightcoral: [240,128,128],
  lightcyan:  [224,255,255],
  lightgoldenrodyellow: [250,250,210],
  lightgray:  [211,211,211],
  lightgreen: [144,238,144],
  lightgrey:  [211,211,211],
  lightpink:  [255,182,193],
  lightsalmon:  [255,160,122],
  lightseagreen:  [32,178,170],
  lightskyblue: [135,206,250],
  lightslategray: [119,136,153],
  lightslategrey: [119,136,153],
  lightsteelblue: [176,196,222],
  lightyellow:  [255,255,224],
  lime: [0,255,0],
  limegreen:  [50,205,50],
  linen:  [250,240,230],
  magenta:  [255,0,255],
  maroon: [128,0,0],
  mediumaquamarine: [102,205,170],
  mediumblue: [0,0,205],
  mediumorchid: [186,85,211],
  mediumpurple: [147,112,219],
  mediumseagreen: [60,179,113],
  mediumslateblue:  [123,104,238],
  mediumspringgreen:  [0,250,154],
  mediumturquoise:  [72,209,204],
  mediumvioletred:  [199,21,133],
  midnightblue: [25,25,112],
  mintcream:  [245,255,250],
  mistyrose:  [255,228,225],
  moccasin: [255,228,181],
  navajowhite:  [255,222,173],
  navy: [0,0,128],
  oldlace:  [253,245,230],
  olive:  [128,128,0],
  olivedrab:  [107,142,35],
  orange: [255,165,0],
  orangered:  [255,69,0],
  orchid: [218,112,214],
  palegoldenrod:  [238,232,170],
  palegreen:  [152,251,152],
  paleturquoise:  [175,238,238],
  palevioletred:  [219,112,147],
  papayawhip: [255,239,213],
  peachpuff:  [255,218,185],
  peru: [205,133,63],
  pink: [255,192,203],
  plum: [221,160,221],
  powderblue: [176,224,230],
  purple: [128,0,128],
  rebeccapurple: [102, 51, 153],
  red:  [255,0,0],
  rosybrown:  [188,143,143],
  royalblue:  [65,105,225],
  saddlebrown:  [139,69,19],
  salmon: [250,128,114],
  sandybrown: [244,164,96],
  seagreen: [46,139,87],
  seashell: [255,245,238],
  sienna: [160,82,45],
  silver: [192,192,192],
  skyblue:  [135,206,235],
  slateblue:  [106,90,205],
  slategray:  [112,128,144],
  slategrey:  [112,128,144],
  snow: [255,250,250],
  springgreen:  [0,255,127],
  steelblue:  [70,130,180],
  tan:  [210,180,140],
  teal: [0,128,128],
  thistle:  [216,191,216],
  tomato: [255,99,71],
  turquoise:  [64,224,208],
  violet: [238,130,238],
  wheat:  [245,222,179],
  white:  [255,255,255],
  whitesmoke: [245,245,245],
  yellow: [255,255,0],
  yellowgreen:  [154,205,50]
};

var reverseKeywords = {};
for (var key in cssKeywords) {
  reverseKeywords[JSON.stringify(cssKeywords[key])] = key;
}

},{}],5:[function(require,module,exports){
var conversions = require(4);

var convert = function() {
   return new Converter();
}

for (var func in conversions) {
  // export Raw versions
  convert[func + "Raw"] =  (function(func) {
    // accept array or plain args
    return function(arg) {
      if (typeof arg == "number")
        arg = Array.prototype.slice.call(arguments);
      return conversions[func](arg);
    }
  })(func);

  var pair = /(\w+)2(\w+)/.exec(func),
      from = pair[1],
      to = pair[2];

  // export rgb2hsl and ["rgb"]["hsl"]
  convert[from] = convert[from] || {};

  convert[from][to] = convert[func] = (function(func) { 
    return function(arg) {
      if (typeof arg == "number")
        arg = Array.prototype.slice.call(arguments);
      
      var val = conversions[func](arg);
      if (typeof val == "string" || val === undefined)
        return val; // keyword

      for (var i = 0; i < val.length; i++)
        val[i] = Math.round(val[i]);
      return val;
    }
  })(func);
}


/* Converter does lazy conversion and caching */
var Converter = function() {
   this.convs = {};
};

/* Either get the values for a space or
  set the values for a space, depending on args */
Converter.prototype.routeSpace = function(space, args) {
   var values = args[0];
   if (values === undefined) {
      // color.rgb()
      return this.getValues(space);
   }
   // color.rgb(10, 10, 10)
   if (typeof values == "number") {
      values = Array.prototype.slice.call(args);        
   }

   return this.setValues(space, values);
};
  
/* Set the values for a space, invalidating cache */
Converter.prototype.setValues = function(space, values) {
   this.space = space;
   this.convs = {};
   this.convs[space] = values;
   return this;
};

/* Get the values for a space. If there's already
  a conversion for the space, fetch it, otherwise
  compute it */
Converter.prototype.getValues = function(space) {
   var vals = this.convs[space];
   if (!vals) {
      var fspace = this.space,
          from = this.convs[fspace];
      vals = convert[fspace][space](from);

      this.convs[space] = vals;
   }
  return vals;
};

["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(space) {
   Converter.prototype[space] = function(vals) {
      return this.routeSpace(space, arguments);
   }
});

module.exports = convert;
},{"4":4}],6:[function(require,module,exports){
'use strict'

module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};

},{}],7:[function(require,module,exports){
/**
 * @namespace Chart
 */
var Chart = require(29)();

Chart.helpers = require(45);

// @todo dispatch these helpers into appropriated helpers/helpers.* file and write unit tests!
require(27)(Chart);

Chart.defaults = require(25);
Chart.Element = require(26);
Chart.elements = require(40);
Chart.Interaction = require(28);
Chart.platform = require(48);

require(31)(Chart);
require(22)(Chart);
require(23)(Chart);
require(24)(Chart);
require(30)(Chart);
require(33)(Chart);
require(32)(Chart);
require(35)(Chart);

require(54)(Chart);
require(52)(Chart);
require(53)(Chart);
require(55)(Chart);
require(56)(Chart);
require(57)(Chart);

// Controllers must be loaded after elements
// See Chart.core.datasetController.dataElementType
require(15)(Chart);
require(16)(Chart);
require(17)(Chart);
require(18)(Chart);
require(19)(Chart);
require(20)(Chart);
require(21)(Chart);

require(8)(Chart);
require(9)(Chart);
require(10)(Chart);
require(11)(Chart);
require(12)(Chart);
require(13)(Chart);
require(14)(Chart);

// Loading built-it plugins
var plugins = [];

plugins.push(
	require(49)(Chart),
	require(50)(Chart),
	require(51)(Chart)
);

Chart.plugins.register(plugins);

Chart.platform.initialize();

module.exports = Chart;
if (typeof window !== 'undefined') {
	window.Chart = Chart;
}

// DEPRECATIONS

/**
 * Provided for backward compatibility, use Chart.helpers.canvas instead.
 * @namespace Chart.canvasHelpers
 * @deprecated since version 2.6.0
 * @todo remove at version 3
 * @private
 */
Chart.canvasHelpers = Chart.helpers.canvas;

},{"10":10,"11":11,"12":12,"13":13,"14":14,"15":15,"16":16,"17":17,"18":18,"19":19,"20":20,"21":21,"22":22,"23":23,"24":24,"25":25,"26":26,"27":27,"28":28,"29":29,"30":30,"31":31,"32":32,"33":33,"35":35,"40":40,"45":45,"48":48,"49":49,"50":50,"51":51,"52":52,"53":53,"54":54,"55":55,"56":56,"57":57,"8":8,"9":9}],8:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	Chart.Bar = function(context, config) {
		config.type = 'bar';

		return new Chart(context, config);
	};

};

},{}],9:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	Chart.Bubble = function(context, config) {
		config.type = 'bubble';
		return new Chart(context, config);
	};

};

},{}],10:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	Chart.Doughnut = function(context, config) {
		config.type = 'doughnut';

		return new Chart(context, config);
	};

};

},{}],11:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	Chart.Line = function(context, config) {
		config.type = 'line';

		return new Chart(context, config);
	};

};

},{}],12:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	Chart.PolarArea = function(context, config) {
		config.type = 'polarArea';

		return new Chart(context, config);
	};

};

},{}],13:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	Chart.Radar = function(context, config) {
		config.type = 'radar';

		return new Chart(context, config);
	};

};

},{}],14:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {
	Chart.Scatter = function(context, config) {
		config.type = 'scatter';
		return new Chart(context, config);
	};
};

},{}],15:[function(require,module,exports){
'use strict';

var defaults = require(25);
var elements = require(40);
var helpers = require(45);

defaults._set('bar', {
	hover: {
		mode: 'label'
	},

	scales: {
		xAxes: [{
			type: 'category',

			// Specific to Bar Controller
			categoryPercentage: 0.8,
			barPercentage: 0.9,

			// offset settings
			offset: true,

			// grid line settings
			gridLines: {
				offsetGridLines: true
			}
		}],

		yAxes: [{
			type: 'linear'
		}]
	}
});

defaults._set('horizontalBar', {
	hover: {
		mode: 'index',
		axis: 'y'
	},

	scales: {
		xAxes: [{
			type: 'linear',
			position: 'bottom'
		}],

		yAxes: [{
			position: 'left',
			type: 'category',

			// Specific to Horizontal Bar Controller
			categoryPercentage: 0.8,
			barPercentage: 0.9,

			// offset settings
			offset: true,

			// grid line settings
			gridLines: {
				offsetGridLines: true
			}
		}]
	},

	elements: {
		rectangle: {
			borderSkipped: 'left'
		}
	},

	tooltips: {
		callbacks: {
			title: function(item, data) {
				// Pick first xLabel for now
				var title = '';

				if (item.length > 0) {
					if (item[0].yLabel) {
						title = item[0].yLabel;
					} else if (data.labels.length > 0 && item[0].index < data.labels.length) {
						title = data.labels[item[0].index];
					}
				}

				return title;
			},

			label: function(item, data) {
				var datasetLabel = data.datasets[item.datasetIndex].label || '';
				return datasetLabel + ': ' + item.xLabel;
			}
		},
		mode: 'index',
		axis: 'y'
	}
});

module.exports = function(Chart) {

	Chart.controllers.bar = Chart.DatasetController.extend({

		dataElementType: elements.Rectangle,

		initialize: function() {
			var me = this;
			var meta;

			Chart.DatasetController.prototype.initialize.apply(me, arguments);

			meta = me.getMeta();
			meta.stack = me.getDataset().stack;
			meta.bar = true;
		},

		update: function(reset) {
			var me = this;
			var rects = me.getMeta().data;
			var i, ilen;

			me._ruler = me.getRuler();

			for (i = 0, ilen = rects.length; i < ilen; ++i) {
				me.updateElement(rects[i], i, reset);
			}
		},

		updateElement: function(rectangle, index, reset) {
			var me = this;
			var chart = me.chart;
			var meta = me.getMeta();
			var dataset = me.getDataset();
			var custom = rectangle.custom || {};
			var rectangleOptions = chart.options.elements.rectangle;

			rectangle._xScale = me.getScaleForId(meta.xAxisID);
			rectangle._yScale = me.getScaleForId(meta.yAxisID);
			rectangle._datasetIndex = me.index;
			rectangle._index = index;

			rectangle._model = {
				datasetLabel: dataset.label,
				label: chart.data.labels[index],
				borderSkipped: custom.borderSkipped ? custom.borderSkipped : rectangleOptions.borderSkipped,
				backgroundColor: custom.backgroundColor ? custom.backgroundColor : helpers.valueAtIndexOrDefault(dataset.backgroundColor, index, rectangleOptions.backgroundColor),
				borderColor: custom.borderColor ? custom.borderColor : helpers.valueAtIndexOrDefault(dataset.borderColor, index, rectangleOptions.borderColor),
				borderWidth: custom.borderWidth ? custom.borderWidth : helpers.valueAtIndexOrDefault(dataset.borderWidth, index, rectangleOptions.borderWidth)
			};

			me.updateElementGeometry(rectangle, index, reset);

			rectangle.pivot();
		},

		/**
		 * @private
		 */
		updateElementGeometry: function(rectangle, index, reset) {
			var me = this;
			var model = rectangle._model;
			var vscale = me.getValueScale();
			var base = vscale.getBasePixel();
			var horizontal = vscale.isHorizontal();
			var ruler = me._ruler || me.getRuler();
			var vpixels = me.calculateBarValuePixels(me.index, index);
			var ipixels = me.calculateBarIndexPixels(me.index, index, ruler);

			model.horizontal = horizontal;
			model.base = reset ? base : vpixels.base;
			model.x = horizontal ? reset ? base : vpixels.head : ipixels.center;
			model.y = horizontal ? ipixels.center : reset ? base : vpixels.head;
			model.height = horizontal ? ipixels.size : undefined;
			model.width = horizontal ? undefined : ipixels.size;
		},

		/**
		 * @private
		 */
		getValueScaleId: function() {
			return this.getMeta().yAxisID;
		},

		/**
		 * @private
		 */
		getIndexScaleId: function() {
			return this.getMeta().xAxisID;
		},

		/**
		 * @private
		 */
		getValueScale: function() {
			return this.getScaleForId(this.getValueScaleId());
		},

		/**
		 * @private
		 */
		getIndexScale: function() {
			return this.getScaleForId(this.getIndexScaleId());
		},

		/**
		 * Returns the effective number of stacks based on groups and bar visibility.
		 * @private
		 */
		getStackCount: function(last) {
			var me = this;
			var chart = me.chart;
			var scale = me.getIndexScale();
			var stacked = scale.options.stacked;
			var ilen = last === undefined ? chart.data.datasets.length : last + 1;
			var stacks = [];
			var i, meta;

			for (i = 0; i < ilen; ++i) {
				meta = chart.getDatasetMeta(i);
				if (meta.bar && chart.isDatasetVisible(i) &&
					(stacked === false ||
					(stacked === true && stacks.indexOf(meta.stack) === -1) ||
					(stacked === undefined && (meta.stack === undefined || stacks.indexOf(meta.stack) === -1)))) {
					stacks.push(meta.stack);
				}
			}

			return stacks.length;
		},

		/**
		 * Returns the stack index for the given dataset based on groups and bar visibility.
		 * @private
		 */
		getStackIndex: function(datasetIndex) {
			return this.getStackCount(datasetIndex) - 1;
		},

		/**
		 * @private
		 */
		getRuler: function() {
			var me = this;
			var scale = me.getIndexScale();
			var stackCount = me.getStackCount();
			var datasetIndex = me.index;
			var pixels = [];
			var isHorizontal = scale.isHorizontal();
			var start = isHorizontal ? scale.left : scale.top;
			var end = start + (isHorizontal ? scale.width : scale.height);
			var i, ilen;

			for (i = 0, ilen = me.getMeta().data.length; i < ilen; ++i) {
				pixels.push(scale.getPixelForValue(null, i, datasetIndex));
			}

			return {
				pixels: pixels,
				start: start,
				end: end,
				stackCount: stackCount,
				scale: scale
			};
		},

		/**
		 * Note: pixel values are not clamped to the scale area.
		 * @private
		 */
		calculateBarValuePixels: function(datasetIndex, index) {
			var me = this;
			var chart = me.chart;
			var meta = me.getMeta();
			var scale = me.getValueScale();
			var datasets = chart.data.datasets;
			var value = scale.getRightValue(datasets[datasetIndex].data[index]);
			var stacked = scale.options.stacked;
			var stack = meta.stack;
			var start = 0;
			var i, imeta, ivalue, base, head, size;

			if (stacked || (stacked === undefined && stack !== undefined)) {
				for (i = 0; i < datasetIndex; ++i) {
					imeta = chart.getDatasetMeta(i);

					if (imeta.bar &&
						imeta.stack === stack &&
						imeta.controller.getValueScaleId() === scale.id &&
						chart.isDatasetVisible(i)) {

						ivalue = scale.getRightValue(datasets[i].data[index]);
						if ((value < 0 && ivalue < 0) || (value >= 0 && ivalue > 0)) {
							start += ivalue;
						}
					}
				}
			}

			base = scale.getPixelForValue(start);
			head = scale.getPixelForValue(start + value);
			size = (head - base) / 2;

			return {
				size: size,
				base: base,
				head: head,
				center: head + size / 2
			};
		},

		/**
		 * @private
		 */
		calculateBarIndexPixels: function(datasetIndex, index, ruler) {
			var me = this;
			var options = ruler.scale.options;
			var stackIndex = me.getStackIndex(datasetIndex);
			var pixels = ruler.pixels;
			var base = pixels[index];
			var length = pixels.length;
			var start = ruler.start;
			var end = ruler.end;
			var leftSampleSize, rightSampleSize, leftCategorySize, rightCategorySize, fullBarSize, size;

			if (length === 1) {
				leftSampleSize = base > start ? base - start : end - base;
				rightSampleSize = base < end ? end - base : base - start;
			} else {
				if (index > 0) {
					leftSampleSize = (base - pixels[index - 1]) / 2;
					if (index === length - 1) {
						rightSampleSize = leftSampleSize;
					}
				}
				if (index < length - 1) {
					rightSampleSize = (pixels[index + 1] - base) / 2;
					if (index === 0) {
						leftSampleSize = rightSampleSize;
					}
				}
			}

			leftCategorySize = leftSampleSize * options.categoryPercentage;
			rightCategorySize = rightSampleSize * options.categoryPercentage;
			fullBarSize = (leftCategorySize + rightCategorySize) / ruler.stackCount;
			size = fullBarSize * options.barPercentage;

			size = Math.min(
				helpers.valueOrDefault(options.barThickness, size),
				helpers.valueOrDefault(options.maxBarThickness, Infinity));

			base -= leftCategorySize;
			base += fullBarSize * stackIndex;
			base += (fullBarSize - size) / 2;

			return {
				size: size,
				base: base,
				head: base + size,
				center: base + size / 2
			};
		},

		draw: function() {
			var me = this;
			var chart = me.chart;
			var scale = me.getValueScale();
			var rects = me.getMeta().data;
			var dataset = me.getDataset();
			var ilen = rects.length;
			var i = 0;

			helpers.canvas.clipArea(chart.ctx, chart.chartArea);

			for (; i < ilen; ++i) {
				if (!isNaN(scale.getRightValue(dataset.data[i]))) {
					rects[i].draw();
				}
			}

			helpers.canvas.unclipArea(chart.ctx);
		},

		setHoverStyle: function(rectangle) {
			var dataset = this.chart.data.datasets[rectangle._datasetIndex];
			var index = rectangle._index;
			var custom = rectangle.custom || {};
			var model = rectangle._model;

			model.backgroundColor = custom.hoverBackgroundColor ? custom.hoverBackgroundColor : helpers.valueAtIndexOrDefault(dataset.hoverBackgroundColor, index, helpers.getHoverColor(model.backgroundColor));
			model.borderColor = custom.hoverBorderColor ? custom.hoverBorderColor : helpers.valueAtIndexOrDefault(dataset.hoverBorderColor, index, helpers.getHoverColor(model.borderColor));
			model.borderWidth = custom.hoverBorderWidth ? custom.hoverBorderWidth : helpers.valueAtIndexOrDefault(dataset.hoverBorderWidth, index, model.borderWidth);
		},

		removeHoverStyle: function(rectangle) {
			var dataset = this.chart.data.datasets[rectangle._datasetIndex];
			var index = rectangle._index;
			var custom = rectangle.custom || {};
			var model = rectangle._model;
			var rectangleElementOptions = this.chart.options.elements.rectangle;

			model.backgroundColor = custom.backgroundColor ? custom.backgroundColor : helpers.valueAtIndexOrDefault(dataset.backgroundColor, index, rectangleElementOptions.backgroundColor);
			model.borderColor = custom.borderColor ? custom.borderColor : helpers.valueAtIndexOrDefault(dataset.borderColor, index, rectangleElementOptions.borderColor);
			model.borderWidth = custom.borderWidth ? custom.borderWidth : helpers.valueAtIndexOrDefault(dataset.borderWidth, index, rectangleElementOptions.borderWidth);
		}
	});

	Chart.controllers.horizontalBar = Chart.controllers.bar.extend({
		/**
		 * @private
		 */
		getValueScaleId: function() {
			return this.getMeta().xAxisID;
		},

		/**
		 * @private
		 */
		getIndexScaleId: function() {
			return this.getMeta().yAxisID;
		}
	});
};

},{"25":25,"40":40,"45":45}],16:[function(require,module,exports){
'use strict';

var defaults = require(25);
var elements = require(40);
var helpers = require(45);

defaults._set('bubble', {
	hover: {
		mode: 'single'
	},

	scales: {
		xAxes: [{
			type: 'linear', // bubble should probably use a linear scale by default
			position: 'bottom',
			id: 'x-axis-0' // need an ID so datasets can reference the scale
		}],
		yAxes: [{
			type: 'linear',
			position: 'left',
			id: 'y-axis-0'
		}]
	},

	tooltips: {
		callbacks: {
			title: function() {
				// Title doesn't make sense for scatter since we format the data as a point
				return '';
			},
			label: function(item, data) {
				var datasetLabel = data.datasets[item.datasetIndex].label || '';
				var dataPoint = data.datasets[item.datasetIndex].data[item.index];
				return datasetLabel + ': (' + item.xLabel + ', ' + item.yLabel + ', ' + dataPoint.r + ')';
			}
		}
	}
});


module.exports = function(Chart) {

	Chart.controllers.bubble = Chart.DatasetController.extend({
		/**
		 * @protected
		 */
		dataElementType: elements.Point,

		/**
		 * @protected
		 */
		update: function(reset) {
			var me = this;
			var meta = me.getMeta();
			var points = meta.data;

			// Update Points
			helpers.each(points, function(point, index) {
				me.updateElement(point, index, reset);
			});
		},

		/**
		 * @protected
		 */
		updateElement: function(point, index, reset) {
			var me = this;
			var meta = me.getMeta();
			var custom = point.custom || {};
			var xScale = me.getScaleForId(meta.xAxisID);
			var yScale = me.getScaleForId(meta.yAxisID);
			var options = me._resolveElementOptions(point, index);
			var data = me.getDataset().data[index];
			var dsIndex = me.index;

			var x = reset ? xScale.getPixelForDecimal(0.5) : xScale.getPixelForValue(typeof data === 'object' ? data : NaN, index, dsIndex);
			var y = reset ? yScale.getBasePixel() : yScale.getPixelForValue(data, index, dsIndex);

			point._xScale = xScale;
			point._yScale = yScale;
			point._options = options;
			point._datasetIndex = dsIndex;
			point._index = index;
			point._model = {
				backgroundColor: options.backgroundColor,
				borderColor: options.borderColor,
				borderWidth: options.borderWidth,
				hitRadius: options.hitRadius,
				pointStyle: options.pointStyle,
				radius: reset ? 0 : options.radius,
				skip: custom.skip || isNaN(x) || isNaN(y),
				x: x,
				y: y,
			};

			point.pivot();
		},

		/**
		 * @protected
		 */
		setHoverStyle: function(point) {
			var model = point._model;
			var options = point._options;

			model.backgroundColor = helpers.valueOrDefault(options.hoverBackgroundColor, helpers.getHoverColor(options.backgroundColor));
			model.borderColor = helpers.valueOrDefault(options.hoverBorderColor, helpers.getHoverColor(options.borderColor));
			model.borderWidth = helpers.valueOrDefault(options.hoverBorderWidth, options.borderWidth);
			model.radius = options.radius + options.hoverRadius;
		},

		/**
		 * @protected
		 */
		removeHoverStyle: function(point) {
			var model = point._model;
			var options = point._options;

			model.backgroundColor = options.backgroundColor;
			model.borderColor = options.borderColor;
			model.borderWidth = options.borderWidth;
			model.radius = options.radius;
		},

		/**
		 * @private
		 */
		_resolveElementOptions: function(point, index) {
			var me = this;
			var chart = me.chart;
			var datasets = chart.data.datasets;
			var dataset = datasets[me.index];
			var custom = point.custom || {};
			var options = chart.options.elements.point;
			var resolve = helpers.options.resolve;
			var data = dataset.data[index];
			var values = {};
			var i, ilen, key;

			// Scriptable options
			var context = {
				chart: chart,
				dataIndex: index,
				dataset: dataset,
				datasetIndex: me.index
			};

			var keys = [
				'backgroundColor',
				'borderColor',
				'borderWidth',
				'hoverBackgroundColor',
				'hoverBorderColor',
				'hoverBorderWidth',
				'hoverRadius',
				'hitRadius',
				'pointStyle'
			];

			for (i = 0, ilen = keys.length; i < ilen; ++i) {
				key = keys[i];
				values[key] = resolve([
					custom[key],
					dataset[key],
					options[key]
				], context, index);
			}

			// Custom radius resolution
			values.radius = resolve([
				custom.radius,
				data ? data.r : undefined,
				dataset.radius,
				options.radius
			], context, index);

			return values;
		}
	});
};

},{"25":25,"40":40,"45":45}],17:[function(require,module,exports){
'use strict';

var defaults = require(25);
var elements = require(40);
var helpers = require(45);

defaults._set('doughnut', {
	animation: {
		// Boolean - Whether we animate the rotation of the Doughnut
		animateRotate: true,
		// Boolean - Whether we animate scaling the Doughnut from the centre
		animateScale: false
	},
	hover: {
		mode: 'single'
	},
	legendCallback: function(chart) {
		var text = [];
		text.push('<ul class="' + chart.id + '-legend">');

		var data = chart.data;
		var datasets = data.datasets;
		var labels = data.labels;

		if (datasets.length) {
			for (var i = 0; i < datasets[0].data.length; ++i) {
				text.push('<li><span style="background-color:' + datasets[0].backgroundColor[i] + '"></span>');
				if (labels[i]) {
					text.push(labels[i]);
				}
				text.push('</li>');
			}
		}

		text.push('</ul>');
		return text.join('');
	},
	legend: {
		labels: {
			generateLabels: function(chart) {
				var data = chart.data;
				if (data.labels.length && data.datasets.length) {
					return data.labels.map(function(label, i) {
						var meta = chart.getDatasetMeta(0);
						var ds = data.datasets[0];
						var arc = meta.data[i];
						var custom = arc && arc.custom || {};
						var valueAtIndexOrDefault = helpers.valueAtIndexOrDefault;
						var arcOpts = chart.options.elements.arc;
						var fill = custom.backgroundColor ? custom.backgroundColor : valueAtIndexOrDefault(ds.backgroundColor, i, arcOpts.backgroundColor);
						var stroke = custom.borderColor ? custom.borderColor : valueAtIndexOrDefault(ds.borderColor, i, arcOpts.borderColor);
						var bw = custom.borderWidth ? custom.borderWidth : valueAtIndexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);

						return {
							text: label,
							fillStyle: fill,
							strokeStyle: stroke,
							lineWidth: bw,
							hidden: isNaN(ds.data[i]) || meta.data[i].hidden,

							// Extra data used for toggling the correct item
							index: i
						};
					});
				}
				return [];
			}
		},

		onClick: function(e, legendItem) {
			var index = legendItem.index;
			var chart = this.chart;
			var i, ilen, meta;

			for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
				meta = chart.getDatasetMeta(i);
				// toggle visibility of index if exists
				if (meta.data[index]) {
					meta.data[index].hidden = !meta.data[index].hidden;
				}
			}

			chart.update();
		}
	},

	// The percentage of the chart that we cut out of the middle.
	cutoutPercentage: 50,

	// The rotation of the chart, where the first data arc begins.
	rotation: Math.PI * -0.5,

	// The total circumference of the chart.
	circumference: Math.PI * 2.0,

	// Need to override these to give a nice default
	tooltips: {
		callbacks: {
			title: function() {
				return '';
			},
			label: function(tooltipItem, data) {
				var dataLabel = data.labels[tooltipItem.index];
				var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];

				if (helpers.isArray(dataLabel)) {
					// show value on first line of multiline label
					// need to clone because we are changing the value
					dataLabel = dataLabel.slice();
					dataLabel[0] += value;
				} else {
					dataLabel += value;
				}

				return dataLabel;
			}
		}
	}
});

defaults._set('pie', helpers.clone(defaults.doughnut));
defaults._set('pie', {
	cutoutPercentage: 0
});

module.exports = function(Chart) {

	Chart.controllers.doughnut = Chart.controllers.pie = Chart.DatasetController.extend({

		dataElementType: elements.Arc,

		linkScales: helpers.noop,

		// Get index of the dataset in relation to the visible datasets. This allows determining the inner and outer radius correctly
		getRingIndex: function(datasetIndex) {
			var ringIndex = 0;

			for (var j = 0; j < datasetIndex; ++j) {
				if (this.chart.isDatasetVisible(j)) {
					++ringIndex;
				}
			}

			return ringIndex;
		},

		update: function(reset) {
			var me = this;
			var chart = me.chart;
			var chartArea = chart.chartArea;
			var opts = chart.options;
			var arcOpts = opts.elements.arc;
			var availableWidth = chartArea.right - chartArea.left - arcOpts.borderWidth;
			var availableHeight = chartArea.bottom - chartArea.top - arcOpts.borderWidth;
			var minSize = Math.min(availableWidth, availableHeight);
			var offset = {x: 0, y: 0};
			var meta = me.getMeta();
			var cutoutPercentage = opts.cutoutPercentage;
			var circumference = opts.circumference;

			// If the chart's circumference isn't a full circle, calculate minSize as a ratio of the width/height of the arc
			if (circumference < Math.PI * 2.0) {
				var startAngle = opts.rotation % (Math.PI * 2.0);
				startAngle += Math.PI * 2.0 * (startAngle >= Math.PI ? -1 : startAngle < -Math.PI ? 1 : 0);
				var endAngle = startAngle + circumference;
				var start = {x: Math.cos(startAngle), y: Math.sin(startAngle)};
				var end = {x: Math.cos(endAngle), y: Math.sin(endAngle)};
				var contains0 = (startAngle <= 0 && endAngle >= 0) || (startAngle <= Math.PI * 2.0 && Math.PI * 2.0 <= endAngle);
				var contains90 = (startAngle <= Math.PI * 0.5 && Math.PI * 0.5 <= endAngle) || (startAngle <= Math.PI * 2.5 && Math.PI * 2.5 <= endAngle);
				var contains180 = (startAngle <= -Math.PI && -Math.PI <= endAngle) || (startAngle <= Math.PI && Math.PI <= endAngle);
				var contains270 = (startAngle <= -Math.PI * 0.5 && -Math.PI * 0.5 <= endAngle) || (startAngle <= Math.PI * 1.5 && Math.PI * 1.5 <= endAngle);
				var cutout = cutoutPercentage / 100.0;
				var min = {x: contains180 ? -1 : Math.min(start.x * (start.x < 0 ? 1 : cutout), end.x * (end.x < 0 ? 1 : cutout)), y: contains270 ? -1 : Math.min(start.y * (start.y < 0 ? 1 : cutout), end.y * (end.y < 0 ? 1 : cutout))};
				var max = {x: contains0 ? 1 : Math.max(start.x * (start.x > 0 ? 1 : cutout), end.x * (end.x > 0 ? 1 : cutout)), y: contains90 ? 1 : Math.max(start.y * (start.y > 0 ? 1 : cutout), end.y * (end.y > 0 ? 1 : cutout))};
				var size = {width: (max.x - min.x) * 0.5, height: (max.y - min.y) * 0.5};
				minSize = Math.min(availableWidth / size.width, availableHeight / size.height);
				offset = {x: (max.x + min.x) * -0.5, y: (max.y + min.y) * -0.5};
			}

			chart.borderWidth = me.getMaxBorderWidth(meta.data);
			chart.outerRadius = Math.max((minSize - chart.borderWidth) / 2, 0);
			chart.innerRadius = Math.max(cutoutPercentage ? (chart.outerRadius / 100) * (cutoutPercentage) : 0, 0);
			chart.radiusLength = (chart.outerRadius - chart.innerRadius) / chart.getVisibleDatasetCount();
			chart.offsetX = offset.x * chart.outerRadius;
			chart.offsetY = offset.y * chart.outerRadius;

			meta.total = me.calculateTotal();

			me.outerRadius = chart.outerRadius - (chart.radiusLength * me.getRingIndex(me.index));
			me.innerRadius = Math.max(me.outerRadius - chart.radiusLength, 0);

			helpers.each(meta.data, function(arc, index) {
				me.updateElement(arc, index, reset);
			});
		},

		updateElement: function(arc, index, reset) {
			var me = this;
			var chart = me.chart;
			var chartArea = chart.chartArea;
			var opts = chart.options;
			var animationOpts = opts.animation;
			var centerX = (chartArea.left + chartArea.right) / 2;
			var centerY = (chartArea.top + chartArea.bottom) / 2;
			var startAngle = opts.rotation; // non reset case handled later
			var endAngle = opts.rotation; // non reset case handled later
			var dataset = me.getDataset();
			var circumference = reset && animationOpts.animateRotate ? 0 : arc.hidden ? 0 : me.calculateCircumference(dataset.data[index]) * (opts.circumference / (2.0 * Math.PI));
			var innerRadius = reset && animationOpts.animateScale ? 0 : me.innerRadius;
			var outerRadius = reset && animationOpts.animateScale ? 0 : me.outerRadius;
			var valueAtIndexOrDefault = helpers.valueAtIndexOrDefault;

			helpers.extend(arc, {
				// Utility
				_datasetIndex: me.index,
				_index: index,

				// Desired view properties
				_model: {
					x: centerX + chart.offsetX,
					y: centerY + chart.offsetY,
					startAngle: startAngle,
					endAngle: endAngle,
					circumference: circumference,
					outerRadius: outerRadius,
					innerRadius: innerRadius,
					label: valueAtIndexOrDefault(dataset.label, index, chart.data.labels[index])
				}
			});

			var model = arc._model;
			// Resets the visual styles
			this.removeHoverStyle(arc);

			// Set correct angles if not resetting
			if (!reset || !animationOpts.animateRotate) {
				if (index === 0) {
					model.startAngle = opts.rotation;
				} else {
					model.startAngle = me.getMeta().data[index - 1]._model.endAngle;
				}

				model.endAngle = model.startAngle + model.circumference;
			}

			arc.pivot();
		},

		removeHoverStyle: function(arc) {
			Chart.DatasetController.prototype.removeHoverStyle.call(this, arc, this.chart.options.elements.arc);
		},

		calculateTotal: function() {
			var dataset = this.getDataset();
			var meta = this.getMeta();
			var total = 0;
			var value;

			helpers.each(meta.data, function(element, index) {
				value = dataset.data[index];
				if (!isNaN(value) && !element.hidden) {
					total += Math.abs(value);
				}
			});

			/* if (total === 0) {
				total = NaN;
			}*/

			return total;
		},

		calculateCircumference: function(value) {
			var total = this.getMeta().total;
			if (total > 0 && !isNaN(value)) {
				return (Math.PI * 2.0) * (value / total);
			}
			return 0;
		},

		// gets the max border or hover width to properly scale pie charts
		getMaxBorderWidth: function(arcs) {
			var max = 0;
			var index = this.index;
			var length = arcs.length;
			var borderWidth;
			var hoverWidth;

			for (var i = 0; i < length; i++) {
				borderWidth = arcs[i]._model ? arcs[i]._model.borderWidth : 0;
				hoverWidth = arcs[i]._chart ? arcs[i]._chart.config.data.datasets[index].hoverBorderWidth : 0;

				max = borderWidth > max ? borderWidth : max;
				max = hoverWidth > max ? hoverWidth : max;
			}
			return max;
		}
	});
};

},{"25":25,"40":40,"45":45}],18:[function(require,module,exports){
'use strict';

var defaults = require(25);
var elements = require(40);
var helpers = require(45);

defaults._set('line', {
	showLines: true,
	spanGaps: false,

	hover: {
		mode: 'label'
	},

	scales: {
		xAxes: [{
			type: 'category',
			id: 'x-axis-0'
		}],
		yAxes: [{
			type: 'linear',
			id: 'y-axis-0'
		}]
	}
});

module.exports = function(Chart) {

	function lineEnabled(dataset, options) {
		return helpers.valueOrDefault(dataset.showLine, options.showLines);
	}

	Chart.controllers.line = Chart.DatasetController.extend({

		datasetElementType: elements.Line,

		dataElementType: elements.Point,

		update: function(reset) {
			var me = this;
			var meta = me.getMeta();
			var line = meta.dataset;
			var points = meta.data || [];
			var options = me.chart.options;
			var lineElementOptions = options.elements.line;
			var scale = me.getScaleForId(meta.yAxisID);
			var i, ilen, custom;
			var dataset = me.getDataset();
			var showLine = lineEnabled(dataset, options);

			// Update Line
			if (showLine) {
				custom = line.custom || {};

				// Compatibility: If the properties are defined with only the old name, use those values
				if ((dataset.tension !== undefined) && (dataset.lineTension === undefined)) {
					dataset.lineTension = dataset.tension;
				}

				// Utility
				line._scale = scale;
				line._datasetIndex = me.index;
				// Data
				line._children = points;
				// Model
				line._model = {
					// Appearance
					// The default behavior of lines is to break at null values, according
					// to https://github.com/chartjs/Chart.js/issues/2435#issuecomment-216718158
					// This option gives lines the ability to span gaps
					spanGaps: dataset.spanGaps ? dataset.spanGaps : options.spanGaps,
					tension: custom.tension ? custom.tension : helpers.valueOrDefault(dataset.lineTension, lineElementOptions.tension),
					backgroundColor: custom.backgroundColor ? custom.backgroundColor : (dataset.backgroundColor || lineElementOptions.backgroundColor),
					borderWidth: custom.borderWidth ? custom.borderWidth : (dataset.borderWidth || lineElementOptions.borderWidth),
					borderColor: custom.borderColor ? custom.borderColor : (dataset.borderColor || lineElementOptions.borderColor),
					borderCapStyle: custom.borderCapStyle ? custom.borderCapStyle : (dataset.borderCapStyle || lineElementOptions.borderCapStyle),
					borderDash: custom.borderDash ? custom.borderDash : (dataset.borderDash || lineElementOptions.borderDash),
					borderDashOffset: custom.borderDashOffset ? custom.borderDashOffset : (dataset.borderDashOffset || lineElementOptions.borderDashOffset),
					borderJoinStyle: custom.borderJoinStyle ? custom.borderJoinStyle : (dataset.borderJoinStyle || lineElementOptions.borderJoinStyle),
					fill: custom.fill ? custom.fill : (dataset.fill !== undefined ? dataset.fill : lineElementOptions.fill),
					steppedLine: custom.steppedLine ? custom.steppedLine : helpers.valueOrDefault(dataset.steppedLine, lineElementOptions.stepped),
					cubicInterpolationMode: custom.cubicInterpolationMode ? custom.cubicInterpolationMode : helpers.valueOrDefault(dataset.cubicInterpolationMode, lineElementOptions.cubicInterpolationMode),
				};

				line.pivot();
			}

			// Update Points
			for (i = 0, ilen = points.length; i < ilen; ++i) {
				me.updateElement(points[i], i, reset);
			}

			if (showLine && line._model.tension !== 0) {
				me.updateBezierControlPoints();
			}

			// Now pivot the point for animation
			for (i = 0, ilen = points.length; i < ilen; ++i) {
				points[i].pivot();
			}
		},

		getPointBackgroundColor: function(point, index) {
			var backgroundColor = this.chart.options.elements.point.backgroundColor;
			var dataset = this.getDataset();
			var custom = point.custom || {};

			if (custom.backgroundColor) {
				backgroundColor = custom.backgroundColor;
			} else if (dataset.pointBackgroundColor) {
				backgroundColor = helpers.valueAtIndexOrDefault(dataset.pointBackgroundColor, index, backgroundColor);
			} else if (dataset.backgroundColor) {
				backgroundColor = dataset.backgroundColor;
			}

			return backgroundColor;
		},

		getPointBorderColor: function(point, index) {
			var borderColor = this.chart.options.elements.point.borderColor;
			var dataset = this.getDataset();
			var custom = point.custom || {};

			if (custom.borderColor) {
				borderColor = custom.borderColor;
			} else if (dataset.pointBorderColor) {
				borderColor = helpers.valueAtIndexOrDefault(dataset.pointBorderColor, index, borderColor);
			} else if (dataset.borderColor) {
				borderColor = dataset.borderColor;
			}

			return borderColor;
		},

		getPointBorderWidth: function(point, index) {
			var borderWidth = this.chart.options.elements.point.borderWidth;
			var dataset = this.getDataset();
			var custom = point.custom || {};

			if (!isNaN(custom.borderWidth)) {
				borderWidth = custom.borderWidth;
			} else if (!isNaN(dataset.pointBorderWidth) || helpers.isArray(dataset.pointBorderWidth)) {
				borderWidth = helpers.valueAtIndexOrDefault(dataset.pointBorderWidth, index, borderWidth);
			} else if (!isNaN(dataset.borderWidth)) {
				borderWidth = dataset.borderWidth;
			}

			return borderWidth;
		},

		updateElement: function(point, index, reset) {
			var me = this;
			var meta = me.getMeta();
			var custom = point.custom || {};
			var dataset = me.getDataset();
			var datasetIndex = me.index;
			var value = dataset.data[index];
			var yScale = me.getScaleForId(meta.yAxisID);
			var xScale = me.getScaleForId(meta.xAxisID);
			var pointOptions = me.chart.options.elements.point;
			var x, y;

			// Compatibility: If the properties are defined with only the old name, use those values
			if ((dataset.radius !== undefined) && (dataset.pointRadius === undefined)) {
				dataset.pointRadius = dataset.radius;
			}
			if ((dataset.hitRadius !== undefined) && (dataset.pointHitRadius === undefined)) {
				dataset.pointHitRadius = dataset.hitRadius;
			}

			x = xScale.getPixelForValue(typeof value === 'object' ? value : NaN, index, datasetIndex);
			y = reset ? yScale.getBasePixel() : me.calculatePointY(value, index, datasetIndex);

			// Utility
			point._xScale = xScale;
			point._yScale = yScale;
			point._datasetIndex = datasetIndex;
			point._index = index;

			// Desired view properties
			point._model = {
				x: x,
				y: y,
				skip: custom.skip || isNaN(x) || isNaN(y),
				// Appearance
				radius: custom.radius || helpers.valueAtIndexOrDefault(dataset.pointRadius, index, pointOptions.radius),
				pointStyle: custom.pointStyle || helpers.valueAtIndexOrDefault(dataset.pointStyle, index, pointOptions.pointStyle),
				backgroundColor: me.getPointBackgroundColor(point, index),
				borderColor: me.getPointBorderColor(point, index),
				borderWidth: me.getPointBorderWidth(point, index),
				tension: meta.dataset._model ? meta.dataset._model.tension : 0,
				steppedLine: meta.dataset._model ? meta.dataset._model.steppedLine : false,
				// Tooltip
				hitRadius: custom.hitRadius || helpers.valueAtIndexOrDefault(dataset.pointHitRadius, index, pointOptions.hitRadius)
			};
		},

		calculatePointY: function(value, index, datasetIndex) {
			var me = this;
			var chart = me.chart;
			var meta = me.getMeta();
			var yScale = me.getScaleForId(meta.yAxisID);
			var sumPos = 0;
			var sumNeg = 0;
			var i, ds, dsMeta;

			if (yScale.options.stacked) {
				for (i = 0; i < datasetIndex; i++) {
					ds = chart.data.datasets[i];
					dsMeta = chart.getDatasetMeta(i);
					if (dsMeta.type === 'line' && dsMeta.yAxisID === yScale.id && chart.isDatasetVisible(i)) {
						var stackedRightValue = Number(yScale.getRightValue(ds.data[index]));
						if (stackedRightValue < 0) {
							sumNeg += stackedRightValue || 0;
						} else {
							sumPos += stackedRightValue || 0;
						}
					}
				}

				var rightValue = Number(yScale.getRightValue(value));
				if (rightValue < 0) {
					return yScale.getPixelForValue(sumNeg + rightValue);
				}
				return yScale.getPixelForValue(sumPos + rightValue);
			}

			return yScale.getPixelForValue(value);
		},

		updateBezierControlPoints: function() {
			var me = this;
			var meta = me.getMeta();
			var area = me.chart.chartArea;
			var points = (meta.data || []);
			var i, ilen, point, model, controlPoints;

			// Only consider points that are drawn in case the spanGaps option is used
			if (meta.dataset._model.spanGaps) {
				points = points.filter(function(pt) {
					return !pt._model.skip;
				});
			}

			function capControlPoint(pt, min, max) {
				return Math.max(Math.min(pt, max), min);
			}

			if (meta.dataset._model.cubicInterpolationMode === 'monotone') {
				helpers.splineCurveMonotone(points);
			} else {
				for (i = 0, ilen = points.length; i < ilen; ++i) {
					point = points[i];
					model = point._model;
					controlPoints = helpers.splineCurve(
						helpers.previousItem(points, i)._model,
						model,
						helpers.nextItem(points, i)._model,
						meta.dataset._model.tension
					);
					model.controlPointPreviousX = controlPoints.previous.x;
					model.controlPointPreviousY = controlPoints.previous.y;
					model.controlPointNextX = controlPoints.next.x;
					model.controlPointNextY = controlPoints.next.y;
				}
			}

			if (me.chart.options.elements.line.capBezierPoints) {
				for (i = 0, ilen = points.length; i < ilen; ++i) {
					model = points[i]._model;
					model.controlPointPreviousX = capControlPoint(model.controlPointPreviousX, area.left, area.right);
					model.controlPointPreviousY = capControlPoint(model.controlPointPreviousY, area.top, area.bottom);
					model.controlPointNextX = capControlPoint(model.controlPointNextX, area.left, area.right);
					model.controlPointNextY = capControlPoint(model.controlPointNextY, area.top, area.bottom);
				}
			}
		},

		draw: function() {
			var me = this;
			var chart = me.chart;
			var meta = me.getMeta();
			var points = meta.data || [];
			var area = chart.chartArea;
			var ilen = points.length;
			var i = 0;

			helpers.canvas.clipArea(chart.ctx, area);

			if (lineEnabled(me.getDataset(), chart.options)) {
				meta.dataset.draw();
			}

			helpers.canvas.unclipArea(chart.ctx);

			// Draw the points
			for (; i < ilen; ++i) {
				points[i].draw(area);
			}
		},

		setHoverStyle: function(point) {
			// Point
			var dataset = this.chart.data.datasets[point._datasetIndex];
			var index = point._index;
			var custom = point.custom || {};
			var model = point._model;

			model.radius = custom.hoverRadius || helpers.valueAtIndexOrDefault(dataset.pointHoverRadius, index, this.chart.options.elements.point.hoverRadius);
			model.backgroundColor = custom.hoverBackgroundColor || helpers.valueAtIndexOrDefault(dataset.pointHoverBackgroundColor, index, helpers.getHoverColor(model.backgroundColor));
			model.borderColor = custom.hoverBorderColor || helpers.valueAtIndexOrDefault(dataset.pointHoverBorderColor, index, helpers.getHoverColor(model.borderColor));
			model.borderWidth = custom.hoverBorderWidth || helpers.valueAtIndexOrDefault(dataset.pointHoverBorderWidth, index, model.borderWidth);
		},

		removeHoverStyle: function(point) {
			var me = this;
			var dataset = me.chart.data.datasets[point._datasetIndex];
			var index = point._index;
			var custom = point.custom || {};
			var model = point._model;

			// Compatibility: If the properties are defined with only the old name, use those values
			if ((dataset.radius !== undefined) && (dataset.pointRadius === undefined)) {
				dataset.pointRadius = dataset.radius;
			}

			model.radius = custom.radius || helpers.valueAtIndexOrDefault(dataset.pointRadius, index, me.chart.options.elements.point.radius);
			model.backgroundColor = me.getPointBackgroundColor(point, index);
			model.borderColor = me.getPointBorderColor(point, index);
			model.borderWidth = me.getPointBorderWidth(point, index);
		}
	});
};

},{"25":25,"40":40,"45":45}],19:[function(require,module,exports){
'use strict';

var defaults = require(25);
var elements = require(40);
var helpers = require(45);

defaults._set('polarArea', {
	scale: {
		type: 'radialLinear',
		angleLines: {
			display: false
		},
		gridLines: {
			circular: true
		},
		pointLabels: {
			display: false
		},
		ticks: {
			beginAtZero: true
		}
	},

	// Boolean - Whether to animate the rotation of the chart
	animation: {
		animateRotate: true,
		animateScale: true
	},

	startAngle: -0.5 * Math.PI,
	legendCallback: function(chart) {
		var text = [];
		text.push('<ul class="' + chart.id + '-legend">');

		var data = chart.data;
		var datasets = data.datasets;
		var labels = data.labels;

		if (datasets.length) {
			for (var i = 0; i < datasets[0].data.length; ++i) {
				text.push('<li><span style="background-color:' + datasets[0].backgroundColor[i] + '"></span>');
				if (labels[i]) {
					text.push(labels[i]);
				}
				text.push('</li>');
			}
		}

		text.push('</ul>');
		return text.join('');
	},
	legend: {
		labels: {
			generateLabels: function(chart) {
				var data = chart.data;
				if (data.labels.length && data.datasets.length) {
					return data.labels.map(function(label, i) {
						var meta = chart.getDatasetMeta(0);
						var ds = data.datasets[0];
						var arc = meta.data[i];
						var custom = arc.custom || {};
						var valueAtIndexOrDefault = helpers.valueAtIndexOrDefault;
						var arcOpts = chart.options.elements.arc;
						var fill = custom.backgroundColor ? custom.backgroundColor : valueAtIndexOrDefault(ds.backgroundColor, i, arcOpts.backgroundColor);
						var stroke = custom.borderColor ? custom.borderColor : valueAtIndexOrDefault(ds.borderColor, i, arcOpts.borderColor);
						var bw = custom.borderWidth ? custom.borderWidth : valueAtIndexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);

						return {
							text: label,
							fillStyle: fill,
							strokeStyle: stroke,
							lineWidth: bw,
							hidden: isNaN(ds.data[i]) || meta.data[i].hidden,

							// Extra data used for toggling the correct item
							index: i
						};
					});
				}
				return [];
			}
		},

		onClick: function(e, legendItem) {
			var index = legendItem.index;
			var chart = this.chart;
			var i, ilen, meta;

			for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
				meta = chart.getDatasetMeta(i);
				meta.data[index].hidden = !meta.data[index].hidden;
			}

			chart.update();
		}
	},

	// Need to override these to give a nice default
	tooltips: {
		callbacks: {
			title: function() {
				return '';
			},
			label: function(item, data) {
				return data.labels[item.index] + ': ' + item.yLabel;
			}
		}
	}
});

module.exports = function(Chart) {

	Chart.controllers.polarArea = Chart.DatasetController.extend({

		dataElementType: elements.Arc,

		linkScales: helpers.noop,

		update: function(reset) {
			var me = this;
			var chart = me.chart;
			var chartArea = chart.chartArea;
			var meta = me.getMeta();
			var opts = chart.options;
			var arcOpts = opts.elements.arc;
			var minSize = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
			chart.outerRadius = Math.max((minSize - arcOpts.borderWidth / 2) / 2, 0);
			chart.innerRadius = Math.max(opts.cutoutPercentage ? (chart.outerRadius / 100) * (opts.cutoutPercentage) : 1, 0);
			chart.radiusLength = (chart.outerRadius - chart.innerRadius) / chart.getVisibleDatasetCount();

			me.outerRadius = chart.outerRadius - (chart.radiusLength * me.index);
			me.innerRadius = me.outerRadius - chart.radiusLength;

			meta.count = me.countVisibleElements();

			helpers.each(meta.data, function(arc, index) {
				me.updateElement(arc, index, reset);
			});
		},

		updateElement: function(arc, index, reset) {
			var me = this;
			var chart = me.chart;
			var dataset = me.getDataset();
			var opts = chart.options;
			var animationOpts = opts.animation;
			var scale = chart.scale;
			var labels = chart.data.labels;

			var circumference = me.calculateCircumference(dataset.data[index]);
			var centerX = scale.xCenter;
			var centerY = scale.yCenter;

			// If there is NaN data before us, we need to calculate the starting angle correctly.
			// We could be way more efficient here, but its unlikely that the polar area chart will have a lot of data
			var visibleCount = 0;
			var meta = me.getMeta();
			for (var i = 0; i < index; ++i) {
				if (!isNaN(dataset.data[i]) && !meta.data[i].hidden) {
					++visibleCount;
				}
			}

			// var negHalfPI = -0.5 * Math.PI;
			var datasetStartAngle = opts.startAngle;
			var distance = arc.hidden ? 0 : scale.getDistanceFromCenterForValue(dataset.data[index]);
			var startAngle = datasetStartAngle + (circumference * visibleCount);
			var endAngle = startAngle + (arc.hidden ? 0 : circumference);

			var resetRadius = animationOpts.animateScale ? 0 : scale.getDistanceFromCenterForValue(dataset.data[index]);

			helpers.extend(arc, {
				// Utility
				_datasetIndex: me.index,
				_index: index,
				_scale: scale,

				// Desired view properties
				_model: {
					x: centerX,
					y: centerY,
					innerRadius: 0,
					outerRadius: reset ? resetRadius : distance,
					startAngle: reset && animationOpts.animateRotate ? datasetStartAngle : startAngle,
					endAngle: reset && animationOpts.animateRotate ? datasetStartAngle : endAngle,
					label: helpers.valueAtIndexOrDefault(labels, index, labels[index])
				}
			});

			// Apply border and fill style
			me.removeHoverStyle(arc);

			arc.pivot();
		},

		removeHoverStyle: function(arc) {
			Chart.DatasetController.prototype.removeHoverStyle.call(this, arc, this.chart.options.elements.arc);
		},

		countVisibleElements: function() {
			var dataset = this.getDataset();
			var meta = this.getMeta();
			var count = 0;

			helpers.each(meta.data, function(element, index) {
				if (!isNaN(dataset.data[index]) && !element.hidden) {
					count++;
				}
			});

			return count;
		},

		calculateCircumference: function(value) {
			var count = this.getMeta().count;
			if (count > 0 && !isNaN(value)) {
				return (2 * Math.PI) / count;
			}
			return 0;
		}
	});
};

},{"25":25,"40":40,"45":45}],20:[function(require,module,exports){
'use strict';

var defaults = require(25);
var elements = require(40);
var helpers = require(45);

defaults._set('radar', {
	scale: {
		type: 'radialLinear'
	},
	elements: {
		line: {
			tension: 0 // no bezier in radar
		}
	}
});

module.exports = function(Chart) {

	Chart.controllers.radar = Chart.DatasetController.extend({

		datasetElementType: elements.Line,

		dataElementType: elements.Point,

		linkScales: helpers.noop,

		update: function(reset) {
			var me = this;
			var meta = me.getMeta();
			var line = meta.dataset;
			var points = meta.data;
			var custom = line.custom || {};
			var dataset = me.getDataset();
			var lineElementOptions = me.chart.options.elements.line;
			var scale = me.chart.scale;

			// Compatibility: If the properties are defined with only the old name, use those values
			if ((dataset.tension !== undefined) && (dataset.lineTension === undefined)) {
				dataset.lineTension = dataset.tension;
			}

			helpers.extend(meta.dataset, {
				// Utility
				_datasetIndex: me.index,
				_scale: scale,
				// Data
				_children: points,
				_loop: true,
				// Model
				_model: {
					// Appearance
					tension: custom.tension ? custom.tension : helpers.valueOrDefault(dataset.lineTension, lineElementOptions.tension),
					backgroundColor: custom.backgroundColor ? custom.backgroundColor : (dataset.backgroundColor || lineElementOptions.backgroundColor),
					borderWidth: custom.borderWidth ? custom.borderWidth : (dataset.borderWidth || lineElementOptions.borderWidth),
					borderColor: custom.borderColor ? custom.borderColor : (dataset.borderColor || lineElementOptions.borderColor),
					fill: custom.fill ? custom.fill : (dataset.fill !== undefined ? dataset.fill : lineElementOptions.fill),
					borderCapStyle: custom.borderCapStyle ? custom.borderCapStyle : (dataset.borderCapStyle || lineElementOptions.borderCapStyle),
					borderDash: custom.borderDash ? custom.borderDash : (dataset.borderDash || lineElementOptions.borderDash),
					borderDashOffset: custom.borderDashOffset ? custom.borderDashOffset : (dataset.borderDashOffset || lineElementOptions.borderDashOffset),
					borderJoinStyle: custom.borderJoinStyle ? custom.borderJoinStyle : (dataset.borderJoinStyle || lineElementOptions.borderJoinStyle),
				}
			});

			meta.dataset.pivot();

			// Update Points
			helpers.each(points, function(point, index) {
				me.updateElement(point, index, reset);
			}, me);

			// Update bezier control points
			me.updateBezierControlPoints();
		},
		updateElement: function(point, index, reset) {
			var me = this;
			var custom = point.custom || {};
			var dataset = me.getDataset();
			var scale = me.chart.scale;
			var pointElementOptions = me.chart.options.elements.point;
			var pointPosition = scale.getPointPositionForValue(index, dataset.data[index]);

			// Compatibility: If the properties are defined with only the old name, use those values
			if ((dataset.radius !== undefined) && (dataset.pointRadius === undefined)) {
				dataset.pointRadius = dataset.radius;
			}
			if ((dataset.hitRadius !== undefined) && (dataset.pointHitRadius === undefined)) {
				dataset.pointHitRadius = dataset.hitRadius;
			}

			helpers.extend(point, {
				// Utility
				_datasetIndex: me.index,
				_index: index,
				_scale: scale,

				// Desired view properties
				_model: {
					x: reset ? scale.xCenter : pointPosition.x, // value not used in dataset scale, but we want a consistent API between scales
					y: reset ? scale.yCenter : pointPosition.y,

					// Appearance
					tension: custom.tension ? custom.tension : helpers.valueOrDefault(dataset.lineTension, me.chart.options.elements.line.tension),
					radius: custom.radius ? custom.radius : helpers.valueAtIndexOrDefault(dataset.pointRadius, index, pointElementOptions.radius),
					backgroundColor: custom.backgroundColor ? custom.backgroundColor : helpers.valueAtIndexOrDefault(dataset.pointBackgroundColor, index, pointElementOptions.backgroundColor),
					borderColor: custom.borderColor ? custom.borderColor : helpers.valueAtIndexOrDefault(dataset.pointBorderColor, index, pointElementOptions.borderColor),
					borderWidth: custom.borderWidth ? custom.borderWidth : helpers.valueAtIndexOrDefault(dataset.pointBorderWidth, index, pointElementOptions.borderWidth),
					pointStyle: custom.pointStyle ? custom.pointStyle : helpers.valueAtIndexOrDefault(dataset.pointStyle, index, pointElementOptions.pointStyle),

					// Tooltip
					hitRadius: custom.hitRadius ? custom.hitRadius : helpers.valueAtIndexOrDefault(dataset.pointHitRadius, index, pointElementOptions.hitRadius)
				}
			});

			point._model.skip = custom.skip ? custom.skip : (isNaN(point._model.x) || isNaN(point._model.y));
		},
		updateBezierControlPoints: function() {
			var chartArea = this.chart.chartArea;
			var meta = this.getMeta();

			helpers.each(meta.data, function(point, index) {
				var model = point._model;
				var controlPoints = helpers.splineCurve(
					helpers.previousItem(meta.data, index, true)._model,
					model,
					helpers.nextItem(meta.data, index, true)._model,
					model.tension
				);

				// Prevent the bezier going outside of the bounds of the graph
				model.controlPointPreviousX = Math.max(Math.min(controlPoints.previous.x, chartArea.right), chartArea.left);
				model.controlPointPreviousY = Math.max(Math.min(controlPoints.previous.y, chartArea.bottom), chartArea.top);

				model.controlPointNextX = Math.max(Math.min(controlPoints.next.x, chartArea.right), chartArea.left);
				model.controlPointNextY = Math.max(Math.min(controlPoints.next.y, chartArea.bottom), chartArea.top);

				// Now pivot the point for animation
				point.pivot();
			});
		},

		setHoverStyle: function(point) {
			// Point
			var dataset = this.chart.data.datasets[point._datasetIndex];
			var custom = point.custom || {};
			var index = point._index;
			var model = point._model;

			model.radius = custom.hoverRadius ? custom.hoverRadius : helpers.valueAtIndexOrDefault(dataset.pointHoverRadius, index, this.chart.options.elements.point.hoverRadius);
			model.backgroundColor = custom.hoverBackgroundColor ? custom.hoverBackgroundColor : helpers.valueAtIndexOrDefault(dataset.pointHoverBackgroundColor, index, helpers.getHoverColor(model.backgroundColor));
			model.borderColor = custom.hoverBorderColor ? custom.hoverBorderColor : helpers.valueAtIndexOrDefault(dataset.pointHoverBorderColor, index, helpers.getHoverColor(model.borderColor));
			model.borderWidth = custom.hoverBorderWidth ? custom.hoverBorderWidth : helpers.valueAtIndexOrDefault(dataset.pointHoverBorderWidth, index, model.borderWidth);
		},

		removeHoverStyle: function(point) {
			var dataset = this.chart.data.datasets[point._datasetIndex];
			var custom = point.custom || {};
			var index = point._index;
			var model = point._model;
			var pointElementOptions = this.chart.options.elements.point;

			model.radius = custom.radius ? custom.radius : helpers.valueAtIndexOrDefault(dataset.pointRadius, index, pointElementOptions.radius);
			model.backgroundColor = custom.backgroundColor ? custom.backgroundColor : helpers.valueAtIndexOrDefault(dataset.pointBackgroundColor, index, pointElementOptions.backgroundColor);
			model.borderColor = custom.borderColor ? custom.borderColor : helpers.valueAtIndexOrDefault(dataset.pointBorderColor, index, pointElementOptions.borderColor);
			model.borderWidth = custom.borderWidth ? custom.borderWidth : helpers.valueAtIndexOrDefault(dataset.pointBorderWidth, index, pointElementOptions.borderWidth);
		}
	});
};

},{"25":25,"40":40,"45":45}],21:[function(require,module,exports){
'use strict';

var defaults = require(25);

defaults._set('scatter', {
	hover: {
		mode: 'single'
	},

	scales: {
		xAxes: [{
			id: 'x-axis-1',    // need an ID so datasets can reference the scale
			type: 'linear',    // scatter should not use a category axis
			position: 'bottom'
		}],
		yAxes: [{
			id: 'y-axis-1',
			type: 'linear',
			position: 'left'
		}]
	},

	showLines: false,

	tooltips: {
		callbacks: {
			title: function() {
				return '';     // doesn't make sense for scatter since data are formatted as a point
			},
			label: function(item) {
				return '(' + item.xLabel + ', ' + item.yLabel + ')';
			}
		}
	}
});

module.exports = function(Chart) {

	// Scatter charts use line controllers
	Chart.controllers.scatter = Chart.controllers.line;

};

},{"25":25}],22:[function(require,module,exports){
/* global window: false */
'use strict';

var defaults = require(25);
var Element = require(26);
var helpers = require(45);

defaults._set('global', {
	animation: {
		duration: 1000,
		easing: 'easeOutQuart',
		onProgress: helpers.noop,
		onComplete: helpers.noop
	}
});

module.exports = function(Chart) {

	Chart.Animation = Element.extend({
		chart: null, // the animation associated chart instance
		currentStep: 0, // the current animation step
		numSteps: 60, // default number of steps
		easing: '', // the easing to use for this animation
		render: null, // render function used by the animation service

		onAnimationProgress: null, // user specified callback to fire on each step of the animation
		onAnimationComplete: null, // user specified callback to fire when the animation finishes
	});

	Chart.animationService = {
		frameDuration: 17,
		animations: [],
		dropFrames: 0,
		request: null,

		/**
		 * @param {Chart} chart - The chart to animate.
		 * @param {Chart.Animation} animation - The animation that we will animate.
		 * @param {Number} duration - The animation duration in ms.
		 * @param {Boolean} lazy - if true, the chart is not marked as animating to enable more responsive interactions
		 */
		addAnimation: function(chart, animation, duration, lazy) {
			var animations = this.animations;
			var i, ilen;

			animation.chart = chart;

			if (!lazy) {
				chart.animating = true;
			}

			for (i = 0, ilen = animations.length; i < ilen; ++i) {
				if (animations[i].chart === chart) {
					animations[i] = animation;
					return;
				}
			}

			animations.push(animation);

			// If there are no animations queued, manually kickstart a digest, for lack of a better word
			if (animations.length === 1) {
				this.requestAnimationFrame();
			}
		},

		cancelAnimation: function(chart) {
			var index = helpers.findIndex(this.animations, function(animation) {
				return animation.chart === chart;
			});

			if (index !== -1) {
				this.animations.splice(index, 1);
				chart.animating = false;
			}
		},

		requestAnimationFrame: function() {
			var me = this;
			if (me.request === null) {
				// Skip animation frame requests until the active one is executed.
				// This can happen when processing mouse events, e.g. 'mousemove'
				// and 'mouseout' events will trigger multiple renders.
				me.request = helpers.requestAnimFrame.call(window, function() {
					me.request = null;
					me.startDigest();
				});
			}
		},

		/**
		 * @private
		 */
		startDigest: function() {
			var me = this;
			var startTime = Date.now();
			var framesToDrop = 0;

			if (me.dropFrames > 1) {
				framesToDrop = Math.floor(me.dropFrames);
				me.dropFrames = me.dropFrames % 1;
			}

			me.advance(1 + framesToDrop);

			var endTime = Date.now();

			me.dropFrames += (endTime - startTime) / me.frameDuration;

			// Do we have more stuff to animate?
			if (me.animations.length > 0) {
				me.requestAnimationFrame();
			}
		},

		/**
		 * @private
		 */
		advance: function(count) {
			var animations = this.animations;
			var animation, chart;
			var i = 0;

			while (i < animations.length) {
				animation = animations[i];
				chart = animation.chart;

				animation.currentStep = (animation.currentStep || 0) + count;
				animation.currentStep = Math.min(animation.currentStep, animation.numSteps);

				helpers.callback(animation.render, [chart, animation], chart);
				helpers.callback(animation.onAnimationProgress, [animation], chart);

				if (animation.currentStep >= animation.numSteps) {
					helpers.callback(animation.onAnimationComplete, [animation], chart);
					chart.animating = false;
					animations.splice(i, 1);
				} else {
					++i;
				}
			}
		}
	};

	/**
	 * Provided for backward compatibility, use Chart.Animation instead
	 * @prop Chart.Animation#animationObject
	 * @deprecated since version 2.6.0
	 * @todo remove at version 3
	 */
	Object.defineProperty(Chart.Animation.prototype, 'animationObject', {
		get: function() {
			return this;
		}
	});

	/**
	 * Provided for backward compatibility, use Chart.Animation#chart instead
	 * @prop Chart.Animation#chartInstance
	 * @deprecated since version 2.6.0
	 * @todo remove at version 3
	 */
	Object.defineProperty(Chart.Animation.prototype, 'chartInstance', {
		get: function() {
			return this.chart;
		},
		set: function(value) {
			this.chart = value;
		}
	});

};

},{"25":25,"26":26,"45":45}],23:[function(require,module,exports){
'use strict';

var defaults = require(25);
var helpers = require(45);
var Interaction = require(28);
var platform = require(48);

module.exports = function(Chart) {
	var plugins = Chart.plugins;

	// Create a dictionary of chart types, to allow for extension of existing types
	Chart.types = {};

	// Store a reference to each instance - allowing us to globally resize chart instances on window resize.
	// Destroy method on the chart will remove the instance of the chart from this reference.
	Chart.instances = {};

	// Controllers available for dataset visualization eg. bar, line, slice, etc.
	Chart.controllers = {};

	/**
	 * Initializes the given config with global and chart default values.
	 */
	function initConfig(config) {
		config = config || {};

		// Do NOT use configMerge() for the data object because this method merges arrays
		// and so would change references to labels and datasets, preventing data updates.
		var data = config.data = config.data || {};
		data.datasets = data.datasets || [];
		data.labels = data.labels || [];

		config.options = helpers.configMerge(
			defaults.global,
			defaults[config.type],
			config.options || {});

		return config;
	}

	/**
	 * Updates the config of the chart
	 * @param chart {Chart} chart to update the options for
	 */
	function updateConfig(chart) {
		var newOptions = chart.options;

		// Update Scale(s) with options
		if (newOptions.scale) {
			chart.scale.options = newOptions.scale;
		} else if (newOptions.scales) {
			newOptions.scales.xAxes.concat(newOptions.scales.yAxes).forEach(function(scaleOptions) {
				chart.scales[scaleOptions.id].options = scaleOptions;
			});
		}

		// Tooltip
		chart.tooltip._options = newOptions.tooltips;
	}

	function positionIsHorizontal(position) {
		return position === 'top' || position === 'bottom';
	}

	helpers.extend(Chart.prototype, /** @lends Chart */ {
		/**
		 * @private
		 */
		construct: function(item, config) {
			var me = this;

			config = initConfig(config);

			var context = platform.acquireContext(item, config);
			var canvas = context && context.canvas;
			var height = canvas && canvas.height;
			var width = canvas && canvas.width;

			me.id = helpers.uid();
			me.ctx = context;
			me.canvas = canvas;
			me.config = config;
			me.width = width;
			me.height = height;
			me.aspectRatio = height ? width / height : null;
			me.options = config.options;
			me._bufferedRender = false;

			/**
			 * Provided for backward compatibility, Chart and Chart.Controller have been merged,
			 * the "instance" still need to be defined since it might be called from plugins.
			 * @prop Chart#chart
			 * @deprecated since version 2.6.0
			 * @todo remove at version 3
			 * @private
			 */
			me.chart = me;
			me.controller = me; // chart.chart.controller #inception

			// Add the chart instance to the global namespace
			Chart.instances[me.id] = me;

			// Define alias to the config data: `chart.data === chart.config.data`
			Object.defineProperty(me, 'data', {
				get: function() {
					return me.config.data;
				},
				set: function(value) {
					me.config.data = value;
				}
			});

			if (!context || !canvas) {
				// The given item is not a compatible context2d element, let's return before finalizing
				// the chart initialization but after setting basic chart / controller properties that
				// can help to figure out that the chart is not valid (e.g chart.canvas !== null);
				// https://github.com/chartjs/Chart.js/issues/2807
				console.error("Failed to create chart: can't acquire context from the given item");
				return;
			}

			me.initialize();
			me.update();
		},

		/**
		 * @private
		 */
		initialize: function() {
			var me = this;

			// Before init plugin notification
			plugins.notify(me, 'beforeInit');

			helpers.retinaScale(me, me.options.devicePixelRatio);

			me.bindEvents();

			if (me.options.responsive) {
				// Initial resize before chart draws (must be silent to preserve initial animations).
				me.resize(true);
			}

			// Make sure scales have IDs and are built before we build any controllers.
			me.ensureScalesHaveIDs();
			me.buildScales();
			me.initToolTip();

			// After init plugin notification
			plugins.notify(me, 'afterInit');

			return me;
		},

		clear: function() {
			helpers.canvas.clear(this);
			return this;
		},

		stop: function() {
			// Stops any current animation loop occurring
			Chart.animationService.cancelAnimation(this);
			return this;
		},

		resize: function(silent) {
			var me = this;
			var options = me.options;
			var canvas = me.canvas;
			var aspectRatio = (options.maintainAspectRatio && me.aspectRatio) || null;

			// the canvas render width and height will be casted to integers so make sure that
			// the canvas display style uses the same integer values to avoid blurring effect.

			// Set to 0 instead of canvas.size because the size defaults to 300x150 if the element is collased
			var newWidth = Math.max(0, Math.floor(helpers.getMaximumWidth(canvas)));
			var newHeight = Math.max(0, Math.floor(aspectRatio ? newWidth / aspectRatio : helpers.getMaximumHeight(canvas)));

			if (me.width === newWidth && me.height === newHeight) {
				return;
			}

			canvas.width = me.width = newWidth;
			canvas.height = me.height = newHeight;
			canvas.style.width = newWidth + 'px';
			canvas.style.height = newHeight + 'px';

			helpers.retinaScale(me, options.devicePixelRatio);

			if (!silent) {
				// Notify any plugins about the resize
				var newSize = {width: newWidth, height: newHeight};
				plugins.notify(me, 'resize', [newSize]);

				// Notify of resize
				if (me.options.onResize) {
					me.options.onResize(me, newSize);
				}

				me.stop();
				me.update(me.options.responsiveAnimationDuration);
			}
		},

		ensureScalesHaveIDs: function() {
			var options = this.options;
			var scalesOptions = options.scales || {};
			var scaleOptions = options.scale;

			helpers.each(scalesOptions.xAxes, function(xAxisOptions, index) {
				xAxisOptions.id = xAxisOptions.id || ('x-axis-' + index);
			});

			helpers.each(scalesOptions.yAxes, function(yAxisOptions, index) {
				yAxisOptions.id = yAxisOptions.id || ('y-axis-' + index);
			});

			if (scaleOptions) {
				scaleOptions.id = scaleOptions.id || 'scale';
			}
		},

		/**
		 * Builds a map of scale ID to scale object for future lookup.
		 */
		buildScales: function() {
			var me = this;
			var options = me.options;
			var scales = me.scales = {};
			var items = [];

			if (options.scales) {
				items = items.concat(
					(options.scales.xAxes || []).map(function(xAxisOptions) {
						return {options: xAxisOptions, dtype: 'category', dposition: 'bottom'};
					}),
					(options.scales.yAxes || []).map(function(yAxisOptions) {
						return {options: yAxisOptions, dtype: 'linear', dposition: 'left'};
					})
				);
			}

			if (options.scale) {
				items.push({
					options: options.scale,
					dtype: 'radialLinear',
					isDefault: true,
					dposition: 'chartArea'
				});
			}

			helpers.each(items, function(item) {
				var scaleOptions = item.options;
				var scaleType = helpers.valueOrDefault(scaleOptions.type, item.dtype);
				var scaleClass = Chart.scaleService.getScaleConstructor(scaleType);
				if (!scaleClass) {
					return;
				}

				if (positionIsHorizontal(scaleOptions.position) !== positionIsHorizontal(item.dposition)) {
					scaleOptions.position = item.dposition;
				}

				var scale = new scaleClass({
					id: scaleOptions.id,
					options: scaleOptions,
					ctx: me.ctx,
					chart: me
				});

				scales[scale.id] = scale;
				scale.mergeTicksOptions();

				// TODO(SB): I think we should be able to remove this custom case (options.scale)
				// and consider it as a regular scale part of the "scales"" map only! This would
				// make the logic easier and remove some useless? custom code.
				if (item.isDefault) {
					me.scale = scale;
				}
			});

			Chart.scaleService.addScalesToLayout(this);
		},

		buildOrUpdateControllers: function() {
			var me = this;
			var types = [];
			var newControllers = [];

			helpers.each(me.data.datasets, function(dataset, datasetIndex) {
				var meta = me.getDatasetMeta(datasetIndex);
				var type = dataset.type || me.config.type;

				if (meta.type && meta.type !== type) {
					me.destroyDatasetMeta(datasetIndex);
					meta = me.getDatasetMeta(datasetIndex);
				}
				meta.type = type;

				types.push(meta.type);

				if (meta.controller) {
					meta.controller.updateIndex(datasetIndex);
				} else {
					var ControllerClass = Chart.controllers[meta.type];
					if (ControllerClass === undefined) {
						throw new Error('"' + meta.type + '" is not a chart type.');
					}

					meta.controller = new ControllerClass(me, datasetIndex);
					newControllers.push(meta.controller);
				}
			}, me);

			return newControllers;
		},

		/**
		 * Reset the elements of all datasets
		 * @private
		 */
		resetElements: function() {
			var me = this;
			helpers.each(me.data.datasets, function(dataset, datasetIndex) {
				me.getDatasetMeta(datasetIndex).controller.reset();
			}, me);
		},

		/**
		* Resets the chart back to it's state before the initial animation
		*/
		reset: function() {
			this.resetElements();
			this.tooltip.initialize();
		},

		update: function(config) {
			var me = this;

			if (!config || typeof config !== 'object') {
				// backwards compatibility
				config = {
					duration: config,
					lazy: arguments[1]
				};
			}

			updateConfig(me);

			if (plugins.notify(me, 'beforeUpdate') === false) {
				return;
			}

			// In case the entire data object changed
			me.tooltip._data = me.data;

			// Make sure dataset controllers are updated and new controllers are reset
			var newControllers = me.buildOrUpdateControllers();

			// Make sure all dataset controllers have correct meta data counts
			helpers.each(me.data.datasets, function(dataset, datasetIndex) {
				me.getDatasetMeta(datasetIndex).controller.buildOrUpdateElements();
			}, me);

			me.updateLayout();

			// Can only reset the new controllers after the scales have been updated
			helpers.each(newControllers, function(controller) {
				controller.reset();
			});

			me.updateDatasets();

			// Need to reset tooltip in case it is displayed with elements that are removed
			// after update.
			me.tooltip.initialize();

			// Last active contains items that were previously in the tooltip.
			// When we reset the tooltip, we need to clear it
			me.lastActive = [];

			// Do this before render so that any plugins that need final scale updates can use it
			plugins.notify(me, 'afterUpdate');

			if (me._bufferedRender) {
				me._bufferedRequest = {
					duration: config.duration,
					easing: config.easing,
					lazy: config.lazy
				};
			} else {
				me.render(config);
			}
		},

		/**
		 * Updates the chart layout unless a plugin returns `false` to the `beforeLayout`
		 * hook, in which case, plugins will not be called on `afterLayout`.
		 * @private
		 */
		updateLayout: function() {
			var me = this;

			if (plugins.notify(me, 'beforeLayout') === false) {
				return;
			}

			Chart.layoutService.update(this, this.width, this.height);

			/**
			 * Provided for backward compatibility, use `afterLayout` instead.
			 * @method IPlugin#afterScaleUpdate
			 * @deprecated since version 2.5.0
			 * @todo remove at version 3
			 * @private
			 */
			plugins.notify(me, 'afterScaleUpdate');
			plugins.notify(me, 'afterLayout');
		},

		/**
		 * Updates all datasets unless a plugin returns `false` to the `beforeDatasetsUpdate`
		 * hook, in which case, plugins will not be called on `afterDatasetsUpdate`.
		 * @private
		 */
		updateDatasets: function() {
			var me = this;

			if (plugins.notify(me, 'beforeDatasetsUpdate') === false) {
				return;
			}

			for (var i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
				me.updateDataset(i);
			}

			plugins.notify(me, 'afterDatasetsUpdate');
		},

		/**
		 * Updates dataset at index unless a plugin returns `false` to the `beforeDatasetUpdate`
		 * hook, in which case, plugins will not be called on `afterDatasetUpdate`.
		 * @private
		 */
		updateDataset: function(index) {
			var me = this;
			var meta = me.getDatasetMeta(index);
			var args = {
				meta: meta,
				index: index
			};

			if (plugins.notify(me, 'beforeDatasetUpdate', [args]) === false) {
				return;
			}

			meta.controller.update();

			plugins.notify(me, 'afterDatasetUpdate', [args]);
		},

		render: function(config) {
			var me = this;

			if (!config || typeof config !== 'object') {
				// backwards compatibility
				config = {
					duration: config,
					lazy: arguments[1]
				};
			}

			var duration = config.duration;
			var lazy = config.lazy;

			if (plugins.notify(me, 'beforeRender') === false) {
				return;
			}

			var animationOptions = me.options.animation;
			var onComplete = function(animation) {
				plugins.notify(me, 'afterRender');
				helpers.callback(animationOptions && animationOptions.onComplete, [animation], me);
			};

			if (animationOptions && ((typeof duration !== 'undefined' && duration !== 0) || (typeof duration === 'undefined' && animationOptions.duration !== 0))) {
				var animation = new Chart.Animation({
					numSteps: (duration || animationOptions.duration) / 16.66, // 60 fps
					easing: config.easing || animationOptions.easing,

					render: function(chart, animationObject) {
						var easingFunction = helpers.easing.effects[animationObject.easing];
						var currentStep = animationObject.currentStep;
						var stepDecimal = currentStep / animationObject.numSteps;

						chart.draw(easingFunction(stepDecimal), stepDecimal, currentStep);
					},

					onAnimationProgress: animationOptions.onProgress,
					onAnimationComplete: onComplete
				});

				Chart.animationService.addAnimation(me, animation, duration, lazy);
			} else {
				me.draw();

				// See https://github.com/chartjs/Chart.js/issues/3781
				onComplete(new Chart.Animation({numSteps: 0, chart: me}));
			}

			return me;
		},

		draw: function(easingValue) {
			var me = this;

			me.clear();

			if (helpers.isNullOrUndef(easingValue)) {
				easingValue = 1;
			}

			me.transition(easingValue);

			if (plugins.notify(me, 'beforeDraw', [easingValue]) === false) {
				return;
			}

			// Draw all the scales
			helpers.each(me.boxes, function(box) {
				box.draw(me.chartArea);
			}, me);

			if (me.scale) {
				me.scale.draw();
			}

			me.drawDatasets(easingValue);
			me._drawTooltip(easingValue);

			plugins.notify(me, 'afterDraw', [easingValue]);
		},

		/**
		 * @private
		 */
		transition: function(easingValue) {
			var me = this;

			for (var i = 0, ilen = (me.data.datasets || []).length; i < ilen; ++i) {
				if (me.isDatasetVisible(i)) {
					me.getDatasetMeta(i).controller.transition(easingValue);
				}
			}

			me.tooltip.transition(easingValue);
		},

		/**
		 * Draws all datasets unless a plugin returns `false` to the `beforeDatasetsDraw`
		 * hook, in which case, plugins will not be called on `afterDatasetsDraw`.
		 * @private
		 */
		drawDatasets: function(easingValue) {
			var me = this;

			if (plugins.notify(me, 'beforeDatasetsDraw', [easingValue]) === false) {
				return;
			}

			// Draw datasets reversed to support proper line stacking
			for (var i = (me.data.datasets || []).length - 1; i >= 0; --i) {
				if (me.isDatasetVisible(i)) {
					me.drawDataset(i, easingValue);
				}
			}

			plugins.notify(me, 'afterDatasetsDraw', [easingValue]);
		},

		/**
		 * Draws dataset at index unless a plugin returns `false` to the `beforeDatasetDraw`
		 * hook, in which case, plugins will not be called on `afterDatasetDraw`.
		 * @private
		 */
		drawDataset: function(index, easingValue) {
			var me = this;
			var meta = me.getDatasetMeta(index);
			var args = {
				meta: meta,
				index: index,
				easingValue: easingValue
			};

			if (plugins.notify(me, 'beforeDatasetDraw', [args]) === false) {
				return;
			}

			meta.controller.draw(easingValue);

			plugins.notify(me, 'afterDatasetDraw', [args]);
		},

		/**
		 * Draws tooltip unless a plugin returns `false` to the `beforeTooltipDraw`
		 * hook, in which case, plugins will not be called on `afterTooltipDraw`.
		 * @private
		 */
		_drawTooltip: function(easingValue) {
			var me = this;
			var tooltip = me.tooltip;
			var args = {
				tooltip: tooltip,
				easingValue: easingValue
			};

			if (plugins.notify(me, 'beforeTooltipDraw', [args]) === false) {
				return;
			}

			tooltip.draw();

			plugins.notify(me, 'afterTooltipDraw', [args]);
		},

		// Get the single element that was clicked on
		// @return : An object containing the dataset index and element index of the matching element. Also contains the rectangle that was draw
		getElementAtEvent: function(e) {
			return Interaction.modes.single(this, e);
		},

		getElementsAtEvent: function(e) {
			return Interaction.modes.label(this, e, {intersect: true});
		},

		getElementsAtXAxis: function(e) {
			return Interaction.modes['x-axis'](this, e, {intersect: true});
		},

		getElementsAtEventForMode: function(e, mode, options) {
			var method = Interaction.modes[mode];
			if (typeof method === 'function') {
				return method(this, e, options);
			}

			return [];
		},

		getDatasetAtEvent: function(e) {
			return Interaction.modes.dataset(this, e, {intersect: true});
		},

		getDatasetMeta: function(datasetIndex) {
			var me = this;
			var dataset = me.data.datasets[datasetIndex];
			if (!dataset._meta) {
				dataset._meta = {};
			}

			var meta = dataset._meta[me.id];
			if (!meta) {
				meta = dataset._meta[me.id] = {
					type: null,
					data: [],
					dataset: null,
					controller: null,
					hidden: null,			// See isDatasetVisible() comment
					xAxisID: null,
					yAxisID: null
				};
			}

			return meta;
		},

		getVisibleDatasetCount: function() {
			var count = 0;
			for (var i = 0, ilen = this.data.datasets.length; i < ilen; ++i) {
				if (this.isDatasetVisible(i)) {
					count++;
				}
			}
			return count;
		},

		isDatasetVisible: function(datasetIndex) {
			var meta = this.getDatasetMeta(datasetIndex);

			// meta.hidden is a per chart dataset hidden flag override with 3 states: if true or false,
			// the dataset.hidden value is ignored, else if null, the dataset hidden state is returned.
			return typeof meta.hidden === 'boolean' ? !meta.hidden : !this.data.datasets[datasetIndex].hidden;
		},

		generateLegend: function() {
			return this.options.legendCallback(this);
		},

		/**
		 * @private
		 */
		destroyDatasetMeta: function(datasetIndex) {
			var id = this.id;
			var dataset = this.data.datasets[datasetIndex];
			var meta = dataset._meta && dataset._meta[id];

			if (meta) {
				meta.controller.destroy();
				delete dataset._meta[id];
			}
		},

		destroy: function() {
			var me = this;
			var canvas = me.canvas;
			var i, ilen;

			me.stop();

			// dataset controllers need to cleanup associated data
			for (i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
				me.destroyDatasetMeta(i);
			}

			if (canvas) {
				me.unbindEvents();
				helpers.canvas.clear(me);
				platform.releaseContext(me.ctx);
				me.canvas = null;
				me.ctx = null;
			}

			plugins.notify(me, 'destroy');

			delete Chart.instances[me.id];
		},

		toBase64Image: function() {
			return this.canvas.toDataURL.apply(this.canvas, arguments);
		},

		initToolTip: function() {
			var me = this;
			me.tooltip = new Chart.Tooltip({
				_chart: me,
				_chartInstance: me, // deprecated, backward compatibility
				_data: me.data,
				_options: me.options.tooltips
			}, me);
		},

		/**
		 * @private
		 */
		bindEvents: function() {
			var me = this;
			var listeners = me._listeners = {};
			var listener = function() {
				me.eventHandler.apply(me, arguments);
			};

			helpers.each(me.options.events, function(type) {
				platform.addEventListener(me, type, listener);
				listeners[type] = listener;
			});

			// Elements used to detect size change should not be injected for non responsive charts.
			// See https://github.com/chartjs/Chart.js/issues/2210
			if (me.options.responsive) {
				listener = function() {
					me.resize();
				};

				platform.addEventListener(me, 'resize', listener);
				listeners.resize = listener;
			}
		},

		/**
		 * @private
		 */
		unbindEvents: function() {
			var me = this;
			var listeners = me._listeners;
			if (!listeners) {
				return;
			}

			delete me._listeners;
			helpers.each(listeners, function(listener, type) {
				platform.removeEventListener(me, type, listener);
			});
		},

		updateHoverStyle: function(elements, mode, enabled) {
			var method = enabled ? 'setHoverStyle' : 'removeHoverStyle';
			var element, i, ilen;

			for (i = 0, ilen = elements.length; i < ilen; ++i) {
				element = elements[i];
				if (element) {
					this.getDatasetMeta(element._datasetIndex).controller[method](element);
				}
			}
		},

		/**
		 * @private
		 */
		eventHandler: function(e) {
			var me = this;
			var tooltip = me.tooltip;

			if (plugins.notify(me, 'beforeEvent', [e]) === false) {
				return;
			}

			// Buffer any update calls so that renders do not occur
			me._bufferedRender = true;
			me._bufferedRequest = null;

			var changed = me.handleEvent(e);
			changed |= tooltip && tooltip.handleEvent(e);

			plugins.notify(me, 'afterEvent', [e]);

			var bufferedRequest = me._bufferedRequest;
			if (bufferedRequest) {
				// If we have an update that was triggered, we need to do a normal render
				me.render(bufferedRequest);
			} else if (changed && !me.animating) {
				// If entering, leaving, or changing elements, animate the change via pivot
				me.stop();

				// We only need to render at this point. Updating will cause scales to be
				// recomputed generating flicker & using more memory than necessary.
				me.render(me.options.hover.animationDuration, true);
			}

			me._bufferedRender = false;
			me._bufferedRequest = null;

			return me;
		},

		/**
		 * Handle an event
		 * @private
		 * @param {IEvent} event the event to handle
		 * @return {Boolean} true if the chart needs to re-render
		 */
		handleEvent: function(e) {
			var me = this;
			var options = me.options || {};
			var hoverOptions = options.hover;
			var changed = false;

			me.lastActive = me.lastActive || [];

			// Find Active Elements for hover and tooltips
			if (e.type === 'mouseout') {
				me.active = [];
			} else {
				me.active = me.getElementsAtEventForMode(e, hoverOptions.mode, hoverOptions);
			}

			// Invoke onHover hook
			// Need to call with native event here to not break backwards compatibility
			helpers.callback(options.onHover || options.hover.onHover, [e.native, me.active], me);

			if (e.type === 'mouseup' || e.type === 'click') {
				if (options.onClick) {
					// Use e.native here for backwards compatibility
					options.onClick.call(me, e.native, me.active);
				}
			}

			// Remove styling for last active (even if it may still be active)
			if (me.lastActive.length) {
				me.updateHoverStyle(me.lastActive, hoverOptions.mode, false);
			}

			// Built in hover styling
			if (me.active.length && hoverOptions.mode) {
				me.updateHoverStyle(me.active, hoverOptions.mode, true);
			}

			changed = !helpers.arrayEquals(me.active, me.lastActive);

			// Remember Last Actives
			me.lastActive = me.active;

			return changed;
		}
	});

	/**
	 * Provided for backward compatibility, use Chart instead.
	 * @class Chart.Controller
	 * @deprecated since version 2.6.0
	 * @todo remove at version 3
	 * @private
	 */
	Chart.Controller = Chart;
};

},{"25":25,"28":28,"45":45,"48":48}],24:[function(require,module,exports){
'use strict';

var helpers = require(45);

module.exports = function(Chart) {

	var arrayEvents = ['push', 'pop', 'shift', 'splice', 'unshift'];

	/**
	 * Hooks the array methods that add or remove values ('push', pop', 'shift', 'splice',
	 * 'unshift') and notify the listener AFTER the array has been altered. Listeners are
	 * called on the 'onData*' callbacks (e.g. onDataPush, etc.) with same arguments.
	 */
	function listenArrayEvents(array, listener) {
		if (array._chartjs) {
			array._chartjs.listeners.push(listener);
			return;
		}

		Object.defineProperty(array, '_chartjs', {
			configurable: true,
			enumerable: false,
			value: {
				listeners: [listener]
			}
		});

		arrayEvents.forEach(function(key) {
			var method = 'onData' + key.charAt(0).toUpperCase() + key.slice(1);
			var base = array[key];

			Object.defineProperty(array, key, {
				configurable: true,
				enumerable: false,
				value: function() {
					var args = Array.prototype.slice.call(arguments);
					var res = base.apply(this, args);

					helpers.each(array._chartjs.listeners, function(object) {
						if (typeof object[method] === 'function') {
							object[method].apply(object, args);
						}
					});

					return res;
				}
			});
		});
	}

	/**
	 * Removes the given array event listener and cleanup extra attached properties (such as
	 * the _chartjs stub and overridden methods) if array doesn't have any more listeners.
	 */
	function unlistenArrayEvents(array, listener) {
		var stub = array._chartjs;
		if (!stub) {
			return;
		}

		var listeners = stub.listeners;
		var index = listeners.indexOf(listener);
		if (index !== -1) {
			listeners.splice(index, 1);
		}

		if (listeners.length > 0) {
			return;
		}

		arrayEvents.forEach(function(key) {
			delete array[key];
		});

		delete array._chartjs;
	}

	// Base class for all dataset controllers (line, bar, etc)
	Chart.DatasetController = function(chart, datasetIndex) {
		this.initialize(chart, datasetIndex);
	};

	helpers.extend(Chart.DatasetController.prototype, {

		/**
		 * Element type used to generate a meta dataset (e.g. Chart.element.Line).
		 * @type {Chart.core.element}
		 */
		datasetElementType: null,

		/**
		 * Element type used to generate a meta data (e.g. Chart.element.Point).
		 * @type {Chart.core.element}
		 */
		dataElementType: null,

		initialize: function(chart, datasetIndex) {
			var me = this;
			me.chart = chart;
			me.index = datasetIndex;
			me.linkScales();
			me.addElements();
		},

		updateIndex: function(datasetIndex) {
			this.index = datasetIndex;
		},

		linkScales: function() {
			var me = this;
			var meta = me.getMeta();
			var dataset = me.getDataset();

			if (meta.xAxisID === null) {
				meta.xAxisID = dataset.xAxisID || me.chart.options.scales.xAxes[0].id;
			}
			if (meta.yAxisID === null) {
				meta.yAxisID = dataset.yAxisID || me.chart.options.scales.yAxes[0].id;
			}
		},

		getDataset: function() {
			return this.chart.data.datasets[this.index];
		},

		getMeta: function() {
			return this.chart.getDatasetMeta(this.index);
		},

		getScaleForId: function(scaleID) {
			return this.chart.scales[scaleID];
		},

		reset: function() {
			this.update(true);
		},

		/**
		 * @private
		 */
		destroy: function() {
			if (this._data) {
				unlistenArrayEvents(this._data, this);
			}
		},

		createMetaDataset: function() {
			var me = this;
			var type = me.datasetElementType;
			return type && new type({
				_chart: me.chart,
				_datasetIndex: me.index
			});
		},

		createMetaData: function(index) {
			var me = this;
			var type = me.dataElementType;
			return type && new type({
				_chart: me.chart,
				_datasetIndex: me.index,
				_index: index
			});
		},

		addElements: function() {
			var me = this;
			var meta = me.getMeta();
			var data = me.getDataset().data || [];
			var metaData = meta.data;
			var i, ilen;

			for (i = 0, ilen = data.length; i < ilen; ++i) {
				metaData[i] = metaData[i] || me.createMetaData(i);
			}

			meta.dataset = meta.dataset || me.createMetaDataset();
		},

		addElementAndReset: function(index) {
			var element = this.createMetaData(index);
			this.getMeta().data.splice(index, 0, element);
			this.updateElement(element, index, true);
		},

		buildOrUpdateElements: function() {
			var me = this;
			var dataset = me.getDataset();
			var data = dataset.data || (dataset.data = []);

			// In order to correctly handle data addition/deletion animation (an thus simulate
			// real-time charts), we need to monitor these data modifications and synchronize
			// the internal meta data accordingly.
			if (me._data !== data) {
				if (me._data) {
					// This case happens when the user replaced the data array instance.
					unlistenArrayEvents(me._data, me);
				}

				listenArrayEvents(data, me);
				me._data = data;
			}

			// Re-sync meta data in case the user replaced the data array or if we missed
			// any updates and so make sure that we handle number of datapoints changing.
			me.resyncElements();
		},

		update: helpers.noop,

		transition: function(easingValue) {
			var meta = this.getMeta();
			var elements = meta.data || [];
			var ilen = elements.length;
			var i = 0;

			for (; i < ilen; ++i) {
				elements[i].transition(easingValue);
			}

			if (meta.dataset) {
				meta.dataset.transition(easingValue);
			}
		},

		draw: function() {
			var meta = this.getMeta();
			var elements = meta.data || [];
			var ilen = elements.length;
			var i = 0;

			if (meta.dataset) {
				meta.dataset.draw();
			}

			for (; i < ilen; ++i) {
				elements[i].draw();
			}
		},

		removeHoverStyle: function(element, elementOpts) {
			var dataset = this.chart.data.datasets[element._datasetIndex];
			var index = element._index;
			var custom = element.custom || {};
			var valueOrDefault = helpers.valueAtIndexOrDefault;
			var model = element._model;

			model.backgroundColor = custom.backgroundColor ? custom.backgroundColor : valueOrDefault(dataset.backgroundColor, index, elementOpts.backgroundColor);
			model.borderColor = custom.borderColor ? custom.borderColor : valueOrDefault(dataset.borderColor, index, elementOpts.borderColor);
			model.borderWidth = custom.borderWidth ? custom.borderWidth : valueOrDefault(dataset.borderWidth, index, elementOpts.borderWidth);
		},

		setHoverStyle: function(element) {
			var dataset = this.chart.data.datasets[element._datasetIndex];
			var index = element._index;
			var custom = element.custom || {};
			var valueOrDefault = helpers.valueAtIndexOrDefault;
			var getHoverColor = helpers.getHoverColor;
			var model = element._model;

			model.backgroundColor = custom.hoverBackgroundColor ? custom.hoverBackgroundColor : valueOrDefault(dataset.hoverBackgroundColor, index, getHoverColor(model.backgroundColor));
			model.borderColor = custom.hoverBorderColor ? custom.hoverBorderColor : valueOrDefault(dataset.hoverBorderColor, index, getHoverColor(model.borderColor));
			model.borderWidth = custom.hoverBorderWidth ? custom.hoverBorderWidth : valueOrDefault(dataset.hoverBorderWidth, index, model.borderWidth);
		},

		/**
		 * @private
		 */
		resyncElements: function() {
			var me = this;
			var meta = me.getMeta();
			var data = me.getDataset().data;
			var numMeta = meta.data.length;
			var numData = data.length;

			if (numData < numMeta) {
				meta.data.splice(numData, numMeta - numData);
			} else if (numData > numMeta) {
				me.insertElements(numMeta, numData - numMeta);
			}
		},

		/**
		 * @private
		 */
		insertElements: function(start, count) {
			for (var i = 0; i < count; ++i) {
				this.addElementAndReset(start + i);
			}
		},

		/**
		 * @private
		 */
		onDataPush: function() {
			this.insertElements(this.getDataset().data.length - 1, arguments.length);
		},

		/**
		 * @private
		 */
		onDataPop: function() {
			this.getMeta().data.pop();
		},

		/**
		 * @private
		 */
		onDataShift: function() {
			this.getMeta().data.shift();
		},

		/**
		 * @private
		 */
		onDataSplice: function(start, count) {
			this.getMeta().data.splice(start, count);
			this.insertElements(start, arguments.length - 2);
		},

		/**
		 * @private
		 */
		onDataUnshift: function() {
			this.insertElements(0, arguments.length);
		}
	});

	Chart.DatasetController.extend = helpers.inherits;
};

},{"45":45}],25:[function(require,module,exports){
'use strict';

var helpers = require(45);

module.exports = {
	/**
	 * @private
	 */
	_set: function(scope, values) {
		return helpers.merge(this[scope] || (this[scope] = {}), values);
	}
};

},{"45":45}],26:[function(require,module,exports){
'use strict';

var color = require(3);
var helpers = require(45);

function interpolate(start, view, model, ease) {
	var keys = Object.keys(model);
	var i, ilen, key, actual, origin, target, type, c0, c1;

	for (i = 0, ilen = keys.length; i < ilen; ++i) {
		key = keys[i];

		target = model[key];

		// if a value is added to the model after pivot() has been called, the view
		// doesn't contain it, so let's initialize the view to the target value.
		if (!view.hasOwnProperty(key)) {
			view[key] = target;
		}

		actual = view[key];

		if (actual === target || key[0] === '_') {
			continue;
		}

		if (!start.hasOwnProperty(key)) {
			start[key] = actual;
		}

		origin = start[key];

		type = typeof target;

		if (type === typeof origin) {
			if (type === 'string') {
				c0 = color(origin);
				if (c0.valid) {
					c1 = color(target);
					if (c1.valid) {
						view[key] = c1.mix(c0, ease).rgbString();
						continue;
					}
				}
			} else if (type === 'number' && isFinite(origin) && isFinite(target)) {
				view[key] = origin + (target - origin) * ease;
				continue;
			}
		}

		view[key] = target;
	}
}

var Element = function(configuration) {
	helpers.extend(this, configuration);
	this.initialize.apply(this, arguments);
};

helpers.extend(Element.prototype, {

	initialize: function() {
		this.hidden = false;
	},

	pivot: function() {
		var me = this;
		if (!me._view) {
			me._view = helpers.clone(me._model);
		}
		me._start = {};
		return me;
	},

	transition: function(ease) {
		var me = this;
		var model = me._model;
		var start = me._start;
		var view = me._view;

		// No animation -> No Transition
		if (!model || ease === 1) {
			me._view = model;
			me._start = null;
			return me;
		}

		if (!view) {
			view = me._view = {};
		}

		if (!start) {
			start = me._start = {};
		}

		interpolate(start, view, model, ease);

		return me;
	},

	tooltipPosition: function() {
		return {
			x: this._model.x,
			y: this._model.y
		};
	},

	hasValue: function() {
		return helpers.isNumber(this._model.x) && helpers.isNumber(this._model.y);
	}
});

Element.extend = helpers.inherits;

module.exports = Element;

},{"3":3,"45":45}],27:[function(require,module,exports){
/* global window: false */
/* global document: false */
'use strict';

var color = require(3);
var defaults = require(25);
var helpers = require(45);

module.exports = function(Chart) {

	// -- Basic js utility methods

	helpers.configMerge = function(/* objects ... */) {
		return helpers.merge(helpers.clone(arguments[0]), [].slice.call(arguments, 1), {
			merger: function(key, target, source, options) {
				var tval = target[key] || {};
				var sval = source[key];

				if (key === 'scales') {
					// scale config merging is complex. Add our own function here for that
					target[key] = helpers.scaleMerge(tval, sval);
				} else if (key === 'scale') {
					// used in polar area & radar charts since there is only one scale
					target[key] = helpers.merge(tval, [Chart.scaleService.getScaleDefaults(sval.type), sval]);
				} else {
					helpers._merger(key, target, source, options);
				}
			}
		});
	};

	helpers.scaleMerge = function(/* objects ... */) {
		return helpers.merge(helpers.clone(arguments[0]), [].slice.call(arguments, 1), {
			merger: function(key, target, source, options) {
				if (key === 'xAxes' || key === 'yAxes') {
					var slen = source[key].length;
					var i, type, scale;

					if (!target[key]) {
						target[key] = [];
					}

					for (i = 0; i < slen; ++i) {
						scale = source[key][i];
						type = helpers.valueOrDefault(scale.type, key === 'xAxes' ? 'category' : 'linear');

						if (i >= target[key].length) {
							target[key].push({});
						}

						if (!target[key][i].type || (scale.type && scale.type !== target[key][i].type)) {
							// new/untyped scale or type changed: let's apply the new defaults
							// then merge source scale to correctly overwrite the defaults.
							helpers.merge(target[key][i], [Chart.scaleService.getScaleDefaults(type), scale]);
						} else {
							// scales type are the same
							helpers.merge(target[key][i], scale);
						}
					}
				} else {
					helpers._merger(key, target, source, options);
				}
			}
		});
	};

	helpers.where = function(collection, filterCallback) {
		if (helpers.isArray(collection) && Array.prototype.filter) {
			return collection.filter(filterCallback);
		}
		var filtered = [];

		helpers.each(collection, function(item) {
			if (filterCallback(item)) {
				filtered.push(item);
			}
		});

		return filtered;
	};
	helpers.findIndex = Array.prototype.findIndex ?
		function(array, callback, scope) {
			return array.findIndex(callback, scope);
		} :
		function(array, callback, scope) {
			scope = scope === undefined ? array : scope;
			for (var i = 0, ilen = array.length; i < ilen; ++i) {
				if (callback.call(scope, array[i], i, array)) {
					return i;
				}
			}
			return -1;
		};
	helpers.findNextWhere = function(arrayToSearch, filterCallback, startIndex) {
		// Default to start of the array
		if (helpers.isNullOrUndef(startIndex)) {
			startIndex = -1;
		}
		for (var i = startIndex + 1; i < arrayToSearch.length; i++) {
			var currentItem = arrayToSearch[i];
			if (filterCallback(currentItem)) {
				return currentItem;
			}
		}
	};
	helpers.findPreviousWhere = function(arrayToSearch, filterCallback, startIndex) {
		// Default to end of the array
		if (helpers.isNullOrUndef(startIndex)) {
			startIndex = arrayToSearch.length;
		}
		for (var i = startIndex - 1; i >= 0; i--) {
			var currentItem = arrayToSearch[i];
			if (filterCallback(currentItem)) {
				return currentItem;
			}
		}
	};

	// -- Math methods
	helpers.isNumber = function(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	};
	helpers.almostEquals = function(x, y, epsilon) {
		return Math.abs(x - y) < epsilon;
	};
	helpers.almostWhole = function(x, epsilon) {
		var rounded = Math.round(x);
		return (((rounded - epsilon) < x) && ((rounded + epsilon) > x));
	};
	helpers.max = function(array) {
		return array.reduce(function(max, value) {
			if (!isNaN(value)) {
				return Math.max(max, value);
			}
			return max;
		}, Number.NEGATIVE_INFINITY);
	};
	helpers.min = function(array) {
		return array.reduce(function(min, value) {
			if (!isNaN(value)) {
				return Math.min(min, value);
			}
			return min;
		}, Number.POSITIVE_INFINITY);
	};
	helpers.sign = Math.sign ?
		function(x) {
			return Math.sign(x);
		} :
		function(x) {
			x = +x; // convert to a number
			if (x === 0 || isNaN(x)) {
				return x;
			}
			return x > 0 ? 1 : -1;
		};
	helpers.log10 = Math.log10 ?
		function(x) {
			return Math.log10(x);
		} :
		function(x) {
			return Math.log(x) / Math.LN10;
		};
	helpers.toRadians = function(degrees) {
		return degrees * (Math.PI / 180);
	};
	helpers.toDegrees = function(radians) {
		return radians * (180 / Math.PI);
	};
	// Gets the angle from vertical upright to the point about a centre.
	helpers.getAngleFromPoint = function(centrePoint, anglePoint) {
		var distanceFromXCenter = anglePoint.x - centrePoint.x;
		var distanceFromYCenter = anglePoint.y - centrePoint.y;
		var radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);

		var angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);

		if (angle < (-0.5 * Math.PI)) {
			angle += 2.0 * Math.PI; // make sure the returned angle is in the range of (-PI/2, 3PI/2]
		}

		return {
			angle: angle,
			distance: radialDistanceFromCenter
		};
	};
	helpers.distanceBetweenPoints = function(pt1, pt2) {
		return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
	};
	helpers.aliasPixel = function(pixelWidth) {
		return (pixelWidth % 2 === 0) ? 0 : 0.5;
	};
	helpers.splineCurve = function(firstPoint, middlePoint, afterPoint, t) {
		// Props to Rob Spencer at scaled innovation for his post on splining between points
		// http://scaledinnovation.com/analytics/splines/aboutSplines.html

		// This function must also respect "skipped" points

		var previous = firstPoint.skip ? middlePoint : firstPoint;
		var current = middlePoint;
		var next = afterPoint.skip ? middlePoint : afterPoint;

		var d01 = Math.sqrt(Math.pow(current.x - previous.x, 2) + Math.pow(current.y - previous.y, 2));
		var d12 = Math.sqrt(Math.pow(next.x - current.x, 2) + Math.pow(next.y - current.y, 2));

		var s01 = d01 / (d01 + d12);
		var s12 = d12 / (d01 + d12);

		// If all points are the same, s01 & s02 will be inf
		s01 = isNaN(s01) ? 0 : s01;
		s12 = isNaN(s12) ? 0 : s12;

		var fa = t * s01; // scaling factor for triangle Ta
		var fb = t * s12;

		return {
			previous: {
				x: current.x - fa * (next.x - previous.x),
				y: current.y - fa * (next.y - previous.y)
			},
			next: {
				x: current.x + fb * (next.x - previous.x),
				y: current.y + fb * (next.y - previous.y)
			}
		};
	};
	helpers.EPSILON = Number.EPSILON || 1e-14;
	helpers.splineCurveMonotone = function(points) {
		// This function calculates Bézier control points in a similar way than |splineCurve|,
		// but preserves monotonicity of the provided data and ensures no local extremums are added
		// between the dataset discrete points due to the interpolation.
		// See : https://en.wikipedia.org/wiki/Monotone_cubic_interpolation

		var pointsWithTangents = (points || []).map(function(point) {
			return {
				model: point._model,
				deltaK: 0,
				mK: 0
			};
		});

		// Calculate slopes (deltaK) and initialize tangents (mK)
		var pointsLen = pointsWithTangents.length;
		var i, pointBefore, pointCurrent, pointAfter;
		for (i = 0; i < pointsLen; ++i) {
			pointCurrent = pointsWithTangents[i];
			if (pointCurrent.model.skip) {
				continue;
			}

			pointBefore = i > 0 ? pointsWithTangents[i - 1] : null;
			pointAfter = i < pointsLen - 1 ? pointsWithTangents[i + 1] : null;
			if (pointAfter && !pointAfter.model.skip) {
				var slopeDeltaX = (pointAfter.model.x - pointCurrent.model.x);

				// In the case of two points that appear at the same x pixel, slopeDeltaX is 0
				pointCurrent.deltaK = slopeDeltaX !== 0 ? (pointAfter.model.y - pointCurrent.model.y) / slopeDeltaX : 0;
			}

			if (!pointBefore || pointBefore.model.skip) {
				pointCurrent.mK = pointCurrent.deltaK;
			} else if (!pointAfter || pointAfter.model.skip) {
				pointCurrent.mK = pointBefore.deltaK;
			} else if (this.sign(pointBefore.deltaK) !== this.sign(pointCurrent.deltaK)) {
				pointCurrent.mK = 0;
			} else {
				pointCurrent.mK = (pointBefore.deltaK + pointCurrent.deltaK) / 2;
			}
		}

		// Adjust tangents to ensure monotonic properties
		var alphaK, betaK, tauK, squaredMagnitude;
		for (i = 0; i < pointsLen - 1; ++i) {
			pointCurrent = pointsWithTangents[i];
			pointAfter = pointsWithTangents[i + 1];
			if (pointCurrent.model.skip || pointAfter.model.skip) {
				continue;
			}

			if (helpers.almostEquals(pointCurrent.deltaK, 0, this.EPSILON)) {
				pointCurrent.mK = pointAfter.mK = 0;
				continue;
			}

			alphaK = pointCurrent.mK / pointCurrent.deltaK;
			betaK = pointAfter.mK / pointCurrent.deltaK;
			squaredMagnitude = Math.pow(alphaK, 2) + Math.pow(betaK, 2);
			if (squaredMagnitude <= 9) {
				continue;
			}

			tauK = 3 / Math.sqrt(squaredMagnitude);
			pointCurrent.mK = alphaK * tauK * pointCurrent.deltaK;
			pointAfter.mK = betaK * tauK * pointCurrent.deltaK;
		}

		// Compute control points
		var deltaX;
		for (i = 0; i < pointsLen; ++i) {
			pointCurrent = pointsWithTangents[i];
			if (pointCurrent.model.skip) {
				continue;
			}

			pointBefore = i > 0 ? pointsWithTangents[i - 1] : null;
			pointAfter = i < pointsLen - 1 ? pointsWithTangents[i + 1] : null;
			if (pointBefore && !pointBefore.model.skip) {
				deltaX = (pointCurrent.model.x - pointBefore.model.x) / 3;
				pointCurrent.model.controlPointPreviousX = pointCurrent.model.x - deltaX;
				pointCurrent.model.controlPointPreviousY = pointCurrent.model.y - deltaX * pointCurrent.mK;
			}
			if (pointAfter && !pointAfter.model.skip) {
				deltaX = (pointAfter.model.x - pointCurrent.model.x) / 3;
				pointCurrent.model.controlPointNextX = pointCurrent.model.x + deltaX;
				pointCurrent.model.controlPointNextY = pointCurrent.model.y + deltaX * pointCurrent.mK;
			}
		}
	};
	helpers.nextItem = function(collection, index, loop) {
		if (loop) {
			return index >= collection.length - 1 ? collection[0] : collection[index + 1];
		}
		return index >= collection.length - 1 ? collection[collection.length - 1] : collection[index + 1];
	};
	helpers.previousItem = function(collection, index, loop) {
		if (loop) {
			return index <= 0 ? collection[collection.length - 1] : collection[index - 1];
		}
		return index <= 0 ? collection[0] : collection[index - 1];
	};
	// Implementation of the nice number algorithm used in determining where axis labels will go
	helpers.niceNum = function(range, round) {
		var exponent = Math.floor(helpers.log10(range));
		var fraction = range / Math.pow(10, exponent);
		var niceFraction;

		if (round) {
			if (fraction < 1.5) {
				niceFraction = 1;
			} else if (fraction < 3) {
				niceFraction = 2;
			} else if (fraction < 7) {
				niceFraction = 5;
			} else {
				niceFraction = 10;
			}
		} else if (fraction <= 1.0) {
			niceFraction = 1;
		} else if (fraction <= 2) {
			niceFraction = 2;
		} else if (fraction <= 5) {
			niceFraction = 5;
		} else {
			niceFraction = 10;
		}

		return niceFraction * Math.pow(10, exponent);
	};
	// Request animation polyfill - http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
	helpers.requestAnimFrame = (function() {
		if (typeof window === 'undefined') {
			return function(callback) {
				callback();
			};
		}
		return window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function(callback) {
				return window.setTimeout(callback, 1000 / 60);
			};
	}());
	// -- DOM methods
	helpers.getRelativePosition = function(evt, chart) {
		var mouseX, mouseY;
		var e = evt.originalEvent || evt;
		var canvas = evt.currentTarget || evt.srcElement;
		var boundingRect = canvas.getBoundingClientRect();

		var touches = e.touches;
		if (touches && touches.length > 0) {
			mouseX = touches[0].clientX;
			mouseY = touches[0].clientY;

		} else {
			mouseX = e.clientX;
			mouseY = e.clientY;
		}

		// Scale mouse coordinates into canvas coordinates
		// by following the pattern laid out by 'jerryj' in the comments of
		// http://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/
		var paddingLeft = parseFloat(helpers.getStyle(canvas, 'padding-left'));
		var paddingTop = parseFloat(helpers.getStyle(canvas, 'padding-top'));
		var paddingRight = parseFloat(helpers.getStyle(canvas, 'padding-right'));
		var paddingBottom = parseFloat(helpers.getStyle(canvas, 'padding-bottom'));
		var width = boundingRect.right - boundingRect.left - paddingLeft - paddingRight;
		var height = boundingRect.bottom - boundingRect.top - paddingTop - paddingBottom;

		// We divide by the current device pixel ratio, because the canvas is scaled up by that amount in each direction. However
		// the backend model is in unscaled coordinates. Since we are going to deal with our model coordinates, we go back here
		mouseX = Math.round((mouseX - boundingRect.left - paddingLeft) / (width) * canvas.width / chart.currentDevicePixelRatio);
		mouseY = Math.round((mouseY - boundingRect.top - paddingTop) / (height) * canvas.height / chart.currentDevicePixelRatio);

		return {
			x: mouseX,
			y: mouseY
		};

	};

	// Private helper function to convert max-width/max-height values that may be percentages into a number
	function parseMaxStyle(styleValue, node, parentProperty) {
		var valueInPixels;
		if (typeof styleValue === 'string') {
			valueInPixels = parseInt(styleValue, 10);

			if (styleValue.indexOf('%') !== -1) {
				// percentage * size in dimension
				valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
			}
		} else {
			valueInPixels = styleValue;
		}

		return valueInPixels;
	}

	/**
	 * Returns if the given value contains an effective constraint.
	 * @private
	 */
	function isConstrainedValue(value) {
		return value !== undefined && value !== null && value !== 'none';
	}

	// Private helper to get a constraint dimension
	// @param domNode : the node to check the constraint on
	// @param maxStyle : the style that defines the maximum for the direction we are using (maxWidth / maxHeight)
	// @param percentageProperty : property of parent to use when calculating width as a percentage
	// @see http://www.nathanaeljones.com/blog/2013/reading-max-width-cross-browser
	function getConstraintDimension(domNode, maxStyle, percentageProperty) {
		var view = document.defaultView;
		var parentNode = domNode.parentNode;
		var constrainedNode = view.getComputedStyle(domNode)[maxStyle];
		var constrainedContainer = view.getComputedStyle(parentNode)[maxStyle];
		var hasCNode = isConstrainedValue(constrainedNode);
		var hasCContainer = isConstrainedValue(constrainedContainer);
		var infinity = Number.POSITIVE_INFINITY;

		if (hasCNode || hasCContainer) {
			return Math.min(
				hasCNode ? parseMaxStyle(constrainedNode, domNode, percentageProperty) : infinity,
				hasCContainer ? parseMaxStyle(constrainedContainer, parentNode, percentageProperty) : infinity);
		}

		return 'none';
	}
	// returns Number or undefined if no constraint
	helpers.getConstraintWidth = function(domNode) {
		return getConstraintDimension(domNode, 'max-width', 'clientWidth');
	};
	// returns Number or undefined if no constraint
	helpers.getConstraintHeight = function(domNode) {
		return getConstraintDimension(domNode, 'max-height', 'clientHeight');
	};
	helpers.getMaximumWidth = function(domNode) {
		var container = domNode.parentNode;
		if (!container) {
			return domNode.clientWidth;
		}

		var paddingLeft = parseInt(helpers.getStyle(container, 'padding-left'), 10);
		var paddingRight = parseInt(helpers.getStyle(container, 'padding-right'), 10);
		var w = container.clientWidth - paddingLeft - paddingRight;
		var cw = helpers.getConstraintWidth(domNode);
		return isNaN(cw) ? w : Math.min(w, cw);
	};
	helpers.getMaximumHeight = function(domNode) {
		var container = domNode.parentNode;
		if (!container) {
			return domNode.clientHeight;
		}

		var paddingTop = parseInt(helpers.getStyle(container, 'padding-top'), 10);
		var paddingBottom = parseInt(helpers.getStyle(container, 'padding-bottom'), 10);
		var h = container.clientHeight - paddingTop - paddingBottom;
		var ch = helpers.getConstraintHeight(domNode);
		return isNaN(ch) ? h : Math.min(h, ch);
	};
	helpers.getStyle = function(el, property) {
		return el.currentStyle ?
			el.currentStyle[property] :
			document.defaultView.getComputedStyle(el, null).getPropertyValue(property);
	};
	helpers.retinaScale = function(chart, forceRatio) {
		var pixelRatio = chart.currentDevicePixelRatio = forceRatio || window.devicePixelRatio || 1;
		if (pixelRatio === 1) {
			return;
		}

		var canvas = chart.canvas;
		var height = chart.height;
		var width = chart.width;

		canvas.height = height * pixelRatio;
		canvas.width = width * pixelRatio;
		chart.ctx.scale(pixelRatio, pixelRatio);

		// If no style has been set on the canvas, the render size is used as display size,
		// making the chart visually bigger, so let's enforce it to the "correct" values.
		// See https://github.com/chartjs/Chart.js/issues/3575
		canvas.style.height = height + 'px';
		canvas.style.width = width + 'px';
	};
	// -- Canvas methods
	helpers.fontString = function(pixelSize, fontStyle, fontFamily) {
		return fontStyle + ' ' + pixelSize + 'px ' + fontFamily;
	};
	helpers.longestText = function(ctx, font, arrayOfThings, cache) {
		cache = cache || {};
		var data = cache.data = cache.data || {};
		var gc = cache.garbageCollect = cache.garbageCollect || [];

		if (cache.font !== font) {
			data = cache.data = {};
			gc = cache.garbageCollect = [];
			cache.font = font;
		}

		ctx.font = font;
		var longest = 0;
		helpers.each(arrayOfThings, function(thing) {
			// Undefined strings and arrays should not be measured
			if (thing !== undefined && thing !== null && helpers.isArray(thing) !== true) {
				longest = helpers.measureText(ctx, data, gc, longest, thing);
			} else if (helpers.isArray(thing)) {
				// if it is an array lets measure each element
				// to do maybe simplify this function a bit so we can do this more recursively?
				helpers.each(thing, function(nestedThing) {
					// Undefined strings and arrays should not be measured
					if (nestedThing !== undefined && nestedThing !== null && !helpers.isArray(nestedThing)) {
						longest = helpers.measureText(ctx, data, gc, longest, nestedThing);
					}
				});
			}
		});

		var gcLen = gc.length / 2;
		if (gcLen > arrayOfThings.length) {
			for (var i = 0; i < gcLen; i++) {
				delete data[gc[i]];
			}
			gc.splice(0, gcLen);
		}
		return longest;
	};
	helpers.measureText = function(ctx, data, gc, longest, string) {
		var textWidth = data[string];
		if (!textWidth) {
			textWidth = data[string] = ctx.measureText(string).width;
			gc.push(string);
		}
		if (textWidth > longest) {
			longest = textWidth;
		}
		return longest;
	};
	helpers.numberOfLabelLines = function(arrayOfThings) {
		var numberOfLines = 1;
		helpers.each(arrayOfThings, function(thing) {
			if (helpers.isArray(thing)) {
				if (thing.length > numberOfLines) {
					numberOfLines = thing.length;
				}
			}
		});
		return numberOfLines;
	};

	helpers.color = !color ?
		function(value) {
			console.error('Color.js not found!');
			return value;
		} :
		function(value) {
			/* global CanvasGradient */
			if (value instanceof CanvasGradient) {
				value = defaults.global.defaultColor;
			}

			return color(value);
		};

	helpers.getHoverColor = function(colorValue) {
		/* global CanvasPattern */
		return (colorValue instanceof CanvasPattern) ?
			colorValue :
			helpers.color(colorValue).saturate(0.5).darken(0.1).rgbString();
	};
};

},{"25":25,"3":3,"45":45}],28:[function(require,module,exports){
'use strict';

var helpers = require(45);

/**
 * Helper function to get relative position for an event
 * @param {Event|IEvent} event - The event to get the position for
 * @param {Chart} chart - The chart
 * @returns {Point} the event position
 */
function getRelativePosition(e, chart) {
	if (e.native) {
		return {
			x: e.x,
			y: e.y
		};
	}

	return helpers.getRelativePosition(e, chart);
}

/**
 * Helper function to traverse all of the visible elements in the chart
 * @param chart {chart} the chart
 * @param handler {Function} the callback to execute for each visible item
 */
function parseVisibleItems(chart, handler) {
	var datasets = chart.data.datasets;
	var meta, i, j, ilen, jlen;

	for (i = 0, ilen = datasets.length; i < ilen; ++i) {
		if (!chart.isDatasetVisible(i)) {
			continue;
		}

		meta = chart.getDatasetMeta(i);
		for (j = 0, jlen = meta.data.length; j < jlen; ++j) {
			var element = meta.data[j];
			if (!element._view.skip) {
				handler(element);
			}
		}
	}
}

/**
 * Helper function to get the items that intersect the event position
 * @param items {ChartElement[]} elements to filter
 * @param position {Point} the point to be nearest to
 * @return {ChartElement[]} the nearest items
 */
function getIntersectItems(chart, position) {
	var elements = [];

	parseVisibleItems(chart, function(element) {
		if (element.inRange(position.x, position.y)) {
			elements.push(element);
		}
	});

	return elements;
}

/**
 * Helper function to get the items nearest to the event position considering all visible items in teh chart
 * @param chart {Chart} the chart to look at elements from
 * @param position {Point} the point to be nearest to
 * @param intersect {Boolean} if true, only consider items that intersect the position
 * @param distanceMetric {Function} function to provide the distance between points
 * @return {ChartElement[]} the nearest items
 */
function getNearestItems(chart, position, intersect, distanceMetric) {
	var minDistance = Number.POSITIVE_INFINITY;
	var nearestItems = [];

	parseVisibleItems(chart, function(element) {
		if (intersect && !element.inRange(position.x, position.y)) {
			return;
		}

		var center = element.getCenterPoint();
		var distance = distanceMetric(position, center);

		if (distance < minDistance) {
			nearestItems = [element];
			minDistance = distance;
		} else if (distance === minDistance) {
			// Can have multiple items at the same distance in which case we sort by size
			nearestItems.push(element);
		}
	});

	return nearestItems;
}

/**
 * Get a distance metric function for two points based on the
 * axis mode setting
 * @param {String} axis the axis mode. x|y|xy
 */
function getDistanceMetricForAxis(axis) {
	var useX = axis.indexOf('x') !== -1;
	var useY = axis.indexOf('y') !== -1;

	return function(pt1, pt2) {
		var deltaX = useX ? Math.abs(pt1.x - pt2.x) : 0;
		var deltaY = useY ? Math.abs(pt1.y - pt2.y) : 0;
		return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
	};
}

function indexMode(chart, e, options) {
	var position = getRelativePosition(e, chart);
	// Default axis for index mode is 'x' to match old behaviour
	options.axis = options.axis || 'x';
	var distanceMetric = getDistanceMetricForAxis(options.axis);
	var items = options.intersect ? getIntersectItems(chart, position) : getNearestItems(chart, position, false, distanceMetric);
	var elements = [];

	if (!items.length) {
		return [];
	}

	chart.data.datasets.forEach(function(dataset, datasetIndex) {
		if (chart.isDatasetVisible(datasetIndex)) {
			var meta = chart.getDatasetMeta(datasetIndex);
			var element = meta.data[items[0]._index];

			// don't count items that are skipped (null data)
			if (element && !element._view.skip) {
				elements.push(element);
			}
		}
	});

	return elements;
}

/**
 * @interface IInteractionOptions
 */
/**
 * If true, only consider items that intersect the point
 * @name IInterfaceOptions#boolean
 * @type Boolean
 */

/**
 * Contains interaction related functions
 * @namespace Chart.Interaction
 */
module.exports = {
	// Helper function for different modes
	modes: {
		single: function(chart, e) {
			var position = getRelativePosition(e, chart);
			var elements = [];

			parseVisibleItems(chart, function(element) {
				if (element.inRange(position.x, position.y)) {
					elements.push(element);
					return elements;
				}
			});

			return elements.slice(0, 1);
		},

		/**
		 * @function Chart.Interaction.modes.label
		 * @deprecated since version 2.4.0
		 * @todo remove at version 3
		 * @private
		 */
		label: indexMode,

		/**
		 * Returns items at the same index. If the options.intersect parameter is true, we only return items if we intersect something
		 * If the options.intersect mode is false, we find the nearest item and return the items at the same index as that item
		 * @function Chart.Interaction.modes.index
		 * @since v2.4.0
		 * @param chart {chart} the chart we are returning items from
		 * @param e {Event} the event we are find things at
		 * @param options {IInteractionOptions} options to use during interaction
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
		index: indexMode,

		/**
		 * Returns items in the same dataset. If the options.intersect parameter is true, we only return items if we intersect something
		 * If the options.intersect is false, we find the nearest item and return the items in that dataset
		 * @function Chart.Interaction.modes.dataset
		 * @param chart {chart} the chart we are returning items from
		 * @param e {Event} the event we are find things at
		 * @param options {IInteractionOptions} options to use during interaction
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
		dataset: function(chart, e, options) {
			var position = getRelativePosition(e, chart);
			options.axis = options.axis || 'xy';
			var distanceMetric = getDistanceMetricForAxis(options.axis);
			var items = options.intersect ? getIntersectItems(chart, position) : getNearestItems(chart, position, false, distanceMetric);

			if (items.length > 0) {
				items = chart.getDatasetMeta(items[0]._datasetIndex).data;
			}

			return items;
		},

		/**
		 * @function Chart.Interaction.modes.x-axis
		 * @deprecated since version 2.4.0. Use index mode and intersect == true
		 * @todo remove at version 3
		 * @private
		 */
		'x-axis': function(chart, e) {
			return indexMode(chart, e, {intersect: false});
		},

		/**
		 * Point mode returns all elements that hit test based on the event position
		 * of the event
		 * @function Chart.Interaction.modes.intersect
		 * @param chart {chart} the chart we are returning items from
		 * @param e {Event} the event we are find things at
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
		point: function(chart, e) {
			var position = getRelativePosition(e, chart);
			return getIntersectItems(chart, position);
		},

		/**
		 * nearest mode returns the element closest to the point
		 * @function Chart.Interaction.modes.intersect
		 * @param chart {chart} the chart we are returning items from
		 * @param e {Event} the event we are find things at
		 * @param options {IInteractionOptions} options to use
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
		nearest: function(chart, e, options) {
			var position = getRelativePosition(e, chart);
			options.axis = options.axis || 'xy';
			var distanceMetric = getDistanceMetricForAxis(options.axis);
			var nearestItems = getNearestItems(chart, position, options.intersect, distanceMetric);

			// We have multiple items at the same distance from the event. Now sort by smallest
			if (nearestItems.length > 1) {
				nearestItems.sort(function(a, b) {
					var sizeA = a.getArea();
					var sizeB = b.getArea();
					var ret = sizeA - sizeB;

					if (ret === 0) {
						// if equal sort by dataset index
						ret = a._datasetIndex - b._datasetIndex;
					}

					return ret;
				});
			}

			// Return only 1 item
			return nearestItems.slice(0, 1);
		},

		/**
		 * x mode returns the elements that hit-test at the current x coordinate
		 * @function Chart.Interaction.modes.x
		 * @param chart {chart} the chart we are returning items from
		 * @param e {Event} the event we are find things at
		 * @param options {IInteractionOptions} options to use
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
		x: function(chart, e, options) {
			var position = getRelativePosition(e, chart);
			var items = [];
			var intersectsItem = false;

			parseVisibleItems(chart, function(element) {
				if (element.inXRange(position.x)) {
					items.push(element);
				}

				if (element.inRange(position.x, position.y)) {
					intersectsItem = true;
				}
			});

			// If we want to trigger on an intersect and we don't have any items
			// that intersect the position, return nothing
			if (options.intersect && !intersectsItem) {
				items = [];
			}
			return items;
		},

		/**
		 * y mode returns the elements that hit-test at the current y coordinate
		 * @function Chart.Interaction.modes.y
		 * @param chart {chart} the chart we are returning items from
		 * @param e {Event} the event we are find things at
		 * @param options {IInteractionOptions} options to use
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
		y: function(chart, e, options) {
			var position = getRelativePosition(e, chart);
			var items = [];
			var intersectsItem = false;

			parseVisibleItems(chart, function(element) {
				if (element.inYRange(position.y)) {
					items.push(element);
				}

				if (element.inRange(position.x, position.y)) {
					intersectsItem = true;
				}
			});

			// If we want to trigger on an intersect and we don't have any items
			// that intersect the position, return nothing
			if (options.intersect && !intersectsItem) {
				items = [];
			}
			return items;
		}
	}
};

},{"45":45}],29:[function(require,module,exports){
'use strict';

var defaults = require(25);

defaults._set('global', {
	responsive: true,
	responsiveAnimationDuration: 0,
	maintainAspectRatio: true,
	events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
	hover: {
		onHover: null,
		mode: 'nearest',
		intersect: true,
		animationDuration: 400
	},
	onClick: null,
	defaultColor: 'rgba(0,0,0,0.1)',
	defaultFontColor: '#666',
	defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
	defaultFontSize: 12,
	defaultFontStyle: 'normal',
	showLines: true,

	// Element defaults defined in element extensions
	elements: {},

	// Layout options such as padding
	layout: {
		padding: {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0
		}
	}
});

module.exports = function() {

	// Occupy the global variable of Chart, and create a simple base class
	var Chart = function(item, config) {
		this.construct(item, config);
		return this;
	};

	Chart.Chart = Chart;

	return Chart;
};

},{"25":25}],30:[function(require,module,exports){
'use strict';

var helpers = require(45);

module.exports = function(Chart) {

	function filterByPosition(array, position) {
		return helpers.where(array, function(v) {
			return v.position === position;
		});
	}

	function sortByWeight(array, reverse) {
		array.forEach(function(v, i) {
			v._tmpIndex_ = i;
			return v;
		});
		array.sort(function(a, b) {
			var v0 = reverse ? b : a;
			var v1 = reverse ? a : b;
			return v0.weight === v1.weight ?
				v0._tmpIndex_ - v1._tmpIndex_ :
				v0.weight - v1.weight;
		});
		array.forEach(function(v) {
			delete v._tmpIndex_;
		});
	}

	/**
	 * @interface ILayoutItem
	 * @prop {String} position - The position of the item in the chart layout. Possible values are
	 * 'left', 'top', 'right', 'bottom', and 'chartArea'
	 * @prop {Number} weight - The weight used to sort the item. Higher weights are further away from the chart area
	 * @prop {Boolean} fullWidth - if true, and the item is horizontal, then push vertical boxes down
	 * @prop {Function} isHorizontal - returns true if the layout item is horizontal (ie. top or bottom)
	 * @prop {Function} update - Takes two parameters: width and height. Returns size of item
	 * @prop {Function} getPadding -  Returns an object with padding on the edges
	 * @prop {Number} width - Width of item. Must be valid after update()
	 * @prop {Number} height - Height of item. Must be valid after update()
	 * @prop {Number} left - Left edge of the item. Set by layout system and cannot be used in update
	 * @prop {Number} top - Top edge of the item. Set by layout system and cannot be used in update
	 * @prop {Number} right - Right edge of the item. Set by layout system and cannot be used in update
	 * @prop {Number} bottom - Bottom edge of the item. Set by layout system and cannot be used in update
	 */

	// The layout service is very self explanatory.  It's responsible for the layout within a chart.
	// Scales, Legends and Plugins all rely on the layout service and can easily register to be placed anywhere they need
	// It is this service's responsibility of carrying out that layout.
	Chart.layoutService = {
		defaults: {},

		/**
		 * Register a box to a chart.
		 * A box is simply a reference to an object that requires layout. eg. Scales, Legend, Title.
		 * @param {Chart} chart - the chart to use
		 * @param {ILayoutItem} item - the item to add to be layed out
		 */
		addBox: function(chart, item) {
			if (!chart.boxes) {
				chart.boxes = [];
			}

			// initialize item with default values
			item.fullWidth = item.fullWidth || false;
			item.position = item.position || 'top';
			item.weight = item.weight || 0;

			chart.boxes.push(item);
		},

		/**
		 * Remove a layoutItem from a chart
		 * @param {Chart} chart - the chart to remove the box from
		 * @param {Object} layoutItem - the item to remove from the layout
		 */
		removeBox: function(chart, layoutItem) {
			var index = chart.boxes ? chart.boxes.indexOf(layoutItem) : -1;
			if (index !== -1) {
				chart.boxes.splice(index, 1);
			}
		},

		/**
		 * Sets (or updates) options on the given `item`.
		 * @param {Chart} chart - the chart in which the item lives (or will be added to)
		 * @param {Object} item - the item to configure with the given options
		 * @param {Object} options - the new item options.
		 */
		configure: function(chart, item, options) {
			var props = ['fullWidth', 'position', 'weight'];
			var ilen = props.length;
			var i = 0;
			var prop;

			for (; i < ilen; ++i) {
				prop = props[i];
				if (options.hasOwnProperty(prop)) {
					item[prop] = options[prop];
				}
			}
		},

		/**
		 * Fits boxes of the given chart into the given size by having each box measure itself
		 * then running a fitting algorithm
		 * @param {Chart} chart - the chart
		 * @param {Number} width - the width to fit into
		 * @param {Number} height - the height to fit into
		 */
		update: function(chart, width, height) {
			if (!chart) {
				return;
			}

			var layoutOptions = chart.options.layout || {};
			var padding = helpers.options.toPadding(layoutOptions.padding);
			var leftPadding = padding.left;
			var rightPadding = padding.right;
			var topPadding = padding.top;
			var bottomPadding = padding.bottom;

			var leftBoxes = filterByPosition(chart.boxes, 'left');
			var rightBoxes = filterByPosition(chart.boxes, 'right');
			var topBoxes = filterByPosition(chart.boxes, 'top');
			var bottomBoxes = filterByPosition(chart.boxes, 'bottom');
			var chartAreaBoxes = filterByPosition(chart.boxes, 'chartArea');

			// Sort boxes by weight. A higher weight is further away from the chart area
			sortByWeight(leftBoxes, true);
			sortByWeight(rightBoxes, false);
			sortByWeight(topBoxes, true);
			sortByWeight(bottomBoxes, false);

			// Essentially we now have any number of boxes on each of the 4 sides.
			// Our canvas looks like the following.
			// The areas L1 and L2 are the left axes. R1 is the right axis, T1 is the top axis and
			// B1 is the bottom axis
			// There are also 4 quadrant-like locations (left to right instead of clockwise) reserved for chart overlays
			// These locations are single-box locations only, when trying to register a chartArea location that is already taken,
			// an error will be thrown.
			//
			// |----------------------------------------------------|
			// |                  T1 (Full Width)                   |
			// |----------------------------------------------------|
			// |    |    |                 T2                  |    |
			// |    |----|-------------------------------------|----|
			// |    |    | C1 |                           | C2 |    |
			// |    |    |----|                           |----|    |
			// |    |    |                                     |    |
			// | L1 | L2 |           ChartArea (C0)            | R1 |
			// |    |    |                                     |    |
			// |    |    |----|                           |----|    |
			// |    |    | C3 |                           | C4 |    |
			// |    |----|-------------------------------------|----|
			// |    |    |                 B1                  |    |
			// |----------------------------------------------------|
			// |                  B2 (Full Width)                   |
			// |----------------------------------------------------|
			//
			// What we do to find the best sizing, we do the following
			// 1. Determine the minimum size of the chart area.
			// 2. Split the remaining width equally between each vertical axis
			// 3. Split the remaining height equally between each horizontal axis
			// 4. Give each layout the maximum size it can be. The layout will return it's minimum size
			// 5. Adjust the sizes of each axis based on it's minimum reported size.
			// 6. Refit each axis
			// 7. Position each axis in the final location
			// 8. Tell the chart the final location of the chart area
			// 9. Tell any axes that overlay the chart area the positions of the chart area

			// Step 1
			var chartWidth = width - leftPadding - rightPadding;
			var chartHeight = height - topPadding - bottomPadding;
			var chartAreaWidth = chartWidth / 2; // min 50%
			var chartAreaHeight = chartHeight / 2; // min 50%

			// Step 2
			var verticalBoxWidth = (width - chartAreaWidth) / (leftBoxes.length + rightBoxes.length);

			// Step 3
			var horizontalBoxHeight = (height - chartAreaHeight) / (topBoxes.length + bottomBoxes.length);

			// Step 4
			var maxChartAreaWidth = chartWidth;
			var maxChartAreaHeight = chartHeight;
			var minBoxSizes = [];

			function getMinimumBoxSize(box) {
				var minSize;
				var isHorizontal = box.isHorizontal();

				if (isHorizontal) {
					minSize = box.update(box.fullWidth ? chartWidth : maxChartAreaWidth, horizontalBoxHeight);
					maxChartAreaHeight -= minSize.height;
				} else {
					minSize = box.update(verticalBoxWidth, chartAreaHeight);
					maxChartAreaWidth -= minSize.width;
				}

				minBoxSizes.push({
					horizontal: isHorizontal,
					minSize: minSize,
					box: box,
				});
			}

			helpers.each(leftBoxes.concat(rightBoxes, topBoxes, bottomBoxes), getMinimumBoxSize);

			// If a horizontal box has padding, we move the left boxes over to avoid ugly charts (see issue #2478)
			var maxHorizontalLeftPadding = 0;
			var maxHorizontalRightPadding = 0;
			var maxVerticalTopPadding = 0;
			var maxVerticalBottomPadding = 0;

			helpers.each(topBoxes.concat(bottomBoxes), function(horizontalBox) {
				if (horizontalBox.getPadding) {
					var boxPadding = horizontalBox.getPadding();
					maxHorizontalLeftPadding = Math.max(maxHorizontalLeftPadding, boxPadding.left);
					maxHorizontalRightPadding = Math.max(maxHorizontalRightPadding, boxPadding.right);
				}
			});

			helpers.each(leftBoxes.concat(rightBoxes), function(verticalBox) {
				if (verticalBox.getPadding) {
					var boxPadding = verticalBox.getPadding();
					maxVerticalTopPadding = Math.max(maxVerticalTopPadding, boxPadding.top);
					maxVerticalBottomPadding = Math.max(maxVerticalBottomPadding, boxPadding.bottom);
				}
			});

			// At this point, maxChartAreaHeight and maxChartAreaWidth are the size the chart area could
			// be if the axes are drawn at their minimum sizes.
			// Steps 5 & 6
			var totalLeftBoxesWidth = leftPadding;
			var totalRightBoxesWidth = rightPadding;
			var totalTopBoxesHeight = topPadding;
			var totalBottomBoxesHeight = bottomPadding;

			// Function to fit a box
			function fitBox(box) {
				var minBoxSize = helpers.findNextWhere(minBoxSizes, function(minBox) {
					return minBox.box === box;
				});

				if (minBoxSize) {
					if (box.isHorizontal()) {
						var scaleMargin = {
							left: Math.max(totalLeftBoxesWidth, maxHorizontalLeftPadding),
							right: Math.max(totalRightBoxesWidth, maxHorizontalRightPadding),
							top: 0,
							bottom: 0
						};

						// Don't use min size here because of label rotation. When the labels are rotated, their rotation highly depends
						// on the margin. Sometimes they need to increase in size slightly
						box.update(box.fullWidth ? chartWidth : maxChartAreaWidth, chartHeight / 2, scaleMargin);
					} else {
						box.update(minBoxSize.minSize.width, maxChartAreaHeight);
					}
				}
			}

			// Update, and calculate the left and right margins for the horizontal boxes
			helpers.each(leftBoxes.concat(rightBoxes), fitBox);

			helpers.each(leftBoxes, function(box) {
				totalLeftBoxesWidth += box.width;
			});

			helpers.each(rightBoxes, function(box) {
				totalRightBoxesWidth += box.width;
			});

			// Set the Left and Right margins for the horizontal boxes
			helpers.each(topBoxes.concat(bottomBoxes), fitBox);

			// Figure out how much margin is on the top and bottom of the vertical boxes
			helpers.each(topBoxes, function(box) {
				totalTopBoxesHeight += box.height;
			});

			helpers.each(bottomBoxes, function(box) {
				totalBottomBoxesHeight += box.height;
			});

			function finalFitVerticalBox(box) {
				var minBoxSize = helpers.findNextWhere(minBoxSizes, function(minSize) {
					return minSize.box === box;
				});

				var scaleMargin = {
					left: 0,
					right: 0,
					top: totalTopBoxesHeight,
					bottom: totalBottomBoxesHeight
				};

				if (minBoxSize) {
					box.update(minBoxSize.minSize.width, maxChartAreaHeight, scaleMargin);
				}
			}

			// Let the left layout know the final margin
			helpers.each(leftBoxes.concat(rightBoxes), finalFitVerticalBox);

			// Recalculate because the size of each layout might have changed slightly due to the margins (label rotation for instance)
			totalLeftBoxesWidth = leftPadding;
			totalRightBoxesWidth = rightPadding;
			totalTopBoxesHeight = topPadding;
			totalBottomBoxesHeight = bottomPadding;

			helpers.each(leftBoxes, function(box) {
				totalLeftBoxesWidth += box.width;
			});

			helpers.each(rightBoxes, function(box) {
				totalRightBoxesWidth += box.width;
			});

			helpers.each(topBoxes, function(box) {
				totalTopBoxesHeight += box.height;
			});
			helpers.each(bottomBoxes, function(box) {
				totalBottomBoxesHeight += box.height;
			});

			// We may be adding some padding to account for rotated x axis labels
			var leftPaddingAddition = Math.max(maxHorizontalLeftPadding - totalLeftBoxesWidth, 0);
			totalLeftBoxesWidth += leftPaddingAddition;
			totalRightBoxesWidth += Math.max(maxHorizontalRightPadding - totalRightBoxesWidth, 0);

			var topPaddingAddition = Math.max(maxVerticalTopPadding - totalTopBoxesHeight, 0);
			totalTopBoxesHeight += topPaddingAddition;
			totalBottomBoxesHeight += Math.max(maxVerticalBottomPadding - totalBottomBoxesHeight, 0);

			// Figure out if our chart area changed. This would occur if the dataset layout label rotation
			// changed due to the application of the margins in step 6. Since we can only get bigger, this is safe to do
			// without calling `fit` again
			var newMaxChartAreaHeight = height - totalTopBoxesHeight - totalBottomBoxesHeight;
			var newMaxChartAreaWidth = width - totalLeftBoxesWidth - totalRightBoxesWidth;

			if (newMaxChartAreaWidth !== maxChartAreaWidth || newMaxChartAreaHeight !== maxChartAreaHeight) {
				helpers.each(leftBoxes, function(box) {
					box.height = newMaxChartAreaHeight;
				});

				helpers.each(rightBoxes, function(box) {
					box.height = newMaxChartAreaHeight;
				});

				helpers.each(topBoxes, function(box) {
					if (!box.fullWidth) {
						box.width = newMaxChartAreaWidth;
					}
				});

				helpers.each(bottomBoxes, function(box) {
					if (!box.fullWidth) {
						box.width = newMaxChartAreaWidth;
					}
				});

				maxChartAreaHeight = newMaxChartAreaHeight;
				maxChartAreaWidth = newMaxChartAreaWidth;
			}

			// Step 7 - Position the boxes
			var left = leftPadding + leftPaddingAddition;
			var top = topPadding + topPaddingAddition;

			function placeBox(box) {
				if (box.isHorizontal()) {
					box.left = box.fullWidth ? leftPadding : totalLeftBoxesWidth;
					box.right = box.fullWidth ? width - rightPadding : totalLeftBoxesWidth + maxChartAreaWidth;
					box.top = top;
					box.bottom = top + box.height;

					// Move to next point
					top = box.bottom;

				} else {

					box.left = left;
					box.right = left + box.width;
					box.top = totalTopBoxesHeight;
					box.bottom = totalTopBoxesHeight + maxChartAreaHeight;

					// Move to next point
					left = box.right;
				}
			}

			helpers.each(leftBoxes.concat(topBoxes), placeBox);

			// Account for chart width and height
			left += maxChartAreaWidth;
			top += maxChartAreaHeight;

			helpers.each(rightBoxes, placeBox);
			helpers.each(bottomBoxes, placeBox);

			// Step 8
			chart.chartArea = {
				left: totalLeftBoxesWidth,
				top: totalTopBoxesHeight,
				right: totalLeftBoxesWidth + maxChartAreaWidth,
				bottom: totalTopBoxesHeight + maxChartAreaHeight
			};

			// Step 9
			helpers.each(chartAreaBoxes, function(box) {
				box.left = chart.chartArea.left;
				box.top = chart.chartArea.top;
				box.right = chart.chartArea.right;
				box.bottom = chart.chartArea.bottom;

				box.update(maxChartAreaWidth, maxChartAreaHeight);
			});
		}
	};
};

},{"45":45}],31:[function(require,module,exports){
'use strict';

var defaults = require(25);
var Element = require(26);
var helpers = require(45);

defaults._set('global', {
	plugins: {}
});

module.exports = function(Chart) {

	/**
	 * The plugin service singleton
	 * @namespace Chart.plugins
	 * @since 2.1.0
	 */
	Chart.plugins = {
		/**
		 * Globally registered plugins.
		 * @private
		 */
		_plugins: [],

		/**
		 * This identifier is used to invalidate the descriptors cache attached to each chart
		 * when a global plugin is registered or unregistered. In this case, the cache ID is
		 * incremented and descriptors are regenerated during following API calls.
		 * @private
		 */
		_cacheId: 0,

		/**
		 * Registers the given plugin(s) if not already registered.
		 * @param {Array|Object} plugins plugin instance(s).
		 */
		register: function(plugins) {
			var p = this._plugins;
			([]).concat(plugins).forEach(function(plugin) {
				if (p.indexOf(plugin) === -1) {
					p.push(plugin);
				}
			});

			this._cacheId++;
		},

		/**
		 * Unregisters the given plugin(s) only if registered.
		 * @param {Array|Object} plugins plugin instance(s).
		 */
		unregister: function(plugins) {
			var p = this._plugins;
			([]).concat(plugins).forEach(function(plugin) {
				var idx = p.indexOf(plugin);
				if (idx !== -1) {
					p.splice(idx, 1);
				}
			});

			this._cacheId++;
		},

		/**
		 * Remove all registered plugins.
		 * @since 2.1.5
		 */
		clear: function() {
			this._plugins = [];
			this._cacheId++;
		},

		/**
		 * Returns the number of registered plugins?
		 * @returns {Number}
		 * @since 2.1.5
		 */
		count: function() {
			return this._plugins.length;
		},

		/**
		 * Returns all registered plugin instances.
		 * @returns {Array} array of plugin objects.
		 * @since 2.1.5
		 */
		getAll: function() {
			return this._plugins;
		},

		/**
		 * Calls enabled plugins for `chart` on the specified hook and with the given args.
		 * This method immediately returns as soon as a plugin explicitly returns false. The
		 * returned value can be used, for instance, to interrupt the current action.
		 * @param {Object} chart - The chart instance for which plugins should be called.
		 * @param {String} hook - The name of the plugin method to call (e.g. 'beforeUpdate').
		 * @param {Array} [args] - Extra arguments to apply to the hook call.
		 * @returns {Boolean} false if any of the plugins return false, else returns true.
		 */
		notify: function(chart, hook, args) {
			var descriptors = this.descriptors(chart);
			var ilen = descriptors.length;
			var i, descriptor, plugin, params, method;

			for (i = 0; i < ilen; ++i) {
				descriptor = descriptors[i];
				plugin = descriptor.plugin;
				method = plugin[hook];
				if (typeof method === 'function') {
					params = [chart].concat(args || []);
					params.push(descriptor.options);
					if (method.apply(plugin, params) === false) {
						return false;
					}
				}
			}

			return true;
		},

		/**
		 * Returns descriptors of enabled plugins for the given chart.
		 * @returns {Array} [{ plugin, options }]
		 * @private
		 */
		descriptors: function(chart) {
			var cache = chart._plugins || (chart._plugins = {});
			if (cache.id === this._cacheId) {
				return cache.descriptors;
			}

			var plugins = [];
			var descriptors = [];
			var config = (chart && chart.config) || {};
			var options = (config.options && config.options.plugins) || {};

			this._plugins.concat(config.plugins || []).forEach(function(plugin) {
				var idx = plugins.indexOf(plugin);
				if (idx !== -1) {
					return;
				}

				var id = plugin.id;
				var opts = options[id];
				if (opts === false) {
					return;
				}

				if (opts === true) {
					opts = helpers.clone(defaults.global.plugins[id]);
				}

				plugins.push(plugin);
				descriptors.push({
					plugin: plugin,
					options: opts || {}
				});
			});

			cache.descriptors = descriptors;
			cache.id = this._cacheId;
			return descriptors;
		}
	};

	/**
	 * Plugin extension hooks.
	 * @interface IPlugin
	 * @since 2.1.0
	 */
	/**
	 * @method IPlugin#beforeInit
	 * @desc Called before initializing `chart`.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 */
	/**
	 * @method IPlugin#afterInit
	 * @desc Called after `chart` has been initialized and before the first update.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 */
	/**
	 * @method IPlugin#beforeUpdate
	 * @desc Called before updating `chart`. If any plugin returns `false`, the update
	 * is cancelled (and thus subsequent render(s)) until another `update` is triggered.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 * @returns {Boolean} `false` to cancel the chart update.
	 */
	/**
	 * @method IPlugin#afterUpdate
	 * @desc Called after `chart` has been updated and before rendering. Note that this
	 * hook will not be called if the chart update has been previously cancelled.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 */
	/**
	 * @method IPlugin#beforeDatasetsUpdate
 	 * @desc Called before updating the `chart` datasets. If any plugin returns `false`,
	 * the datasets update is cancelled until another `update` is triggered.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 * @returns {Boolean} false to cancel the datasets update.
	 * @since version 2.1.5
	 */
	/**
	 * @method IPlugin#afterDatasetsUpdate
	 * @desc Called after the `chart` datasets have been updated. Note that this hook
	 * will not be called if the datasets update has been previously cancelled.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 * @since version 2.1.5
	 */
	/**
	 * @method IPlugin#beforeDatasetUpdate
 	 * @desc Called before updating the `chart` dataset at the given `args.index`. If any plugin
	 * returns `false`, the datasets update is cancelled until another `update` is triggered.
	 * @param {Chart} chart - The chart instance.
	 * @param {Object} args - The call arguments.
	 * @param {Number} args.index - The dataset index.
	 * @param {Object} args.meta - The dataset metadata.
	 * @param {Object} options - The plugin options.
	 * @returns {Boolean} `false` to cancel the chart datasets drawing.
	 */
	/**
	 * @method IPlugin#afterDatasetUpdate
 	 * @desc Called after the `chart` datasets at the given `args.index` has been updated. Note
	 * that this hook will not be called if the datasets update has been previously cancelled.
	 * @param {Chart} chart - The chart instance.
	 * @param {Object} args - The call arguments.
	 * @param {Number} args.index - The dataset index.
	 * @param {Object} args.meta - The dataset metadata.
	 * @param {Object} options - The plugin options.
	 */
	/**
	 * @method IPlugin#beforeLayout
	 * @desc Called before laying out `chart`. If any plugin returns `false`,
	 * the layout update is cancelled until another `update` is triggered.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 * @returns {Boolean} `false` to cancel the chart layout.
	 */
	/**
	 * @method IPlugin#afterLayout
	 * @desc Called after the `chart` has been layed out. Note that this hook will not
	 * be called if the layout update has been previously cancelled.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 */
	/**
	 * @method IPlugin#beforeRender
	 * @desc Called before rendering `chart`. If any plugin returns `false`,
	 * the rendering is cancelled until another `render` is triggered.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 * @returns {Boolean} `false` to cancel the chart rendering.
	 */
	/**
	 * @method IPlugin#afterRender
	 * @desc Called after the `chart` has been fully rendered (and animation completed). Note
	 * that this hook will not be called if the rendering has been previously cancelled.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 */
	/**
	 * @method IPlugin#beforeDraw
	 * @desc Called before drawing `chart` at every animation frame specified by the given
	 * easing value. If any plugin returns `false`, the frame drawing is cancelled until
	 * another `render` is triggered.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Number} easingValue - The current animation value, between 0.0 and 1.0.
	 * @param {Object} options - The plugin options.
	 * @returns {Boolean} `false` to cancel the chart drawing.
	 */
	/**
	 * @method IPlugin#afterDraw
	 * @desc Called after the `chart` has been drawn for the specific easing value. Note
	 * that this hook will not be called if the drawing has been previously cancelled.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Number} easingValue - The current animation value, between 0.0 and 1.0.
	 * @param {Object} options - The plugin options.
	 */
	/**
	 * @method IPlugin#beforeDatasetsDraw
 	 * @desc Called before drawing the `chart` datasets. If any plugin returns `false`,
	 * the datasets drawing is cancelled until another `render` is triggered.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Number} easingValue - The current animation value, between 0.0 and 1.0.
	 * @param {Object} options - The plugin options.
	 * @returns {Boolean} `false` to cancel the chart datasets drawing.
	 */
	/**
	 * @method IPlugin#afterDatasetsDraw
	 * @desc Called after the `chart` datasets have been drawn. Note that this hook
	 * will not be called if the datasets drawing has been previously cancelled.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Number} easingValue - The current animation value, between 0.0 and 1.0.
	 * @param {Object} options - The plugin options.
	 */
	/**
	 * @method IPlugin#beforeDatasetDraw
 	 * @desc Called before drawing the `chart` dataset at the given `args.index` (datasets
	 * are drawn in the reverse order). If any plugin returns `false`, the datasets drawing
	 * is cancelled until another `render` is triggered.
	 * @param {Chart} chart - The chart instance.
	 * @param {Object} args - The call arguments.
	 * @param {Number} args.index - The dataset index.
	 * @param {Object} args.meta - The dataset metadata.
	 * @param {Number} args.easingValue - The current animation value, between 0.0 and 1.0.
	 * @param {Object} options - The plugin options.
	 * @returns {Boolean} `false` to cancel the chart datasets drawing.
	 */
	/**
	 * @method IPlugin#afterDatasetDraw
 	 * @desc Called after the `chart` datasets at the given `args.index` have been drawn
	 * (datasets are drawn in the reverse order). Note that this hook will not be called
	 * if the datasets drawing has been previously cancelled.
	 * @param {Chart} chart - The chart instance.
	 * @param {Object} args - The call arguments.
	 * @param {Number} args.index - The dataset index.
	 * @param {Object} args.meta - The dataset metadata.
	 * @param {Number} args.easingValue - The current animation value, between 0.0 and 1.0.
	 * @param {Object} options - The plugin options.
	 */
	/**
  	 * @method IPlugin#beforeTooltipDraw
	 * @desc Called before drawing the `tooltip`. If any plugin returns `false`,
	 * the tooltip drawing is cancelled until another `render` is triggered.
	 * @param {Chart} chart - The chart instance.
	 * @param {Object} args - The call arguments.
	 * @param {Object} args.tooltip - The tooltip.
	 * @param {Number} args.easingValue - The current animation value, between 0.0 and 1.0.
	 * @param {Object} options - The plugin options.
	 * @returns {Boolean} `false` to cancel the chart tooltip drawing.
  	 */
	/**
 	 * @method IPlugin#afterTooltipDraw
  	 * @desc Called after drawing the `tooltip`. Note that this hook will not
 	 * be called if the tooltip drawing has been previously cancelled.
 	 * @param {Chart} chart - The chart instance.
 	 * @param {Object} args - The call arguments.
 	 * @param {Object} args.tooltip - The tooltip.
	 * @param {Number} args.easingValue - The current animation value, between 0.0 and 1.0.
 	 * @param {Object} options - The plugin options.
 	 */
	/**
	 * @method IPlugin#beforeEvent
 	 * @desc Called before processing the specified `event`. If any plugin returns `false`,
	 * the event will be discarded.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {IEvent} event - The event object.
	 * @param {Object} options - The plugin options.
	 */
	/**
	 * @method IPlugin#afterEvent
	 * @desc Called after the `event` has been consumed. Note that this hook
	 * will not be called if the `event` has been previously discarded.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {IEvent} event - The event object.
	 * @param {Object} options - The plugin options.
	 */
	/**
	 * @method IPlugin#resize
	 * @desc Called after the chart as been resized.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Number} size - The new canvas display size (eq. canvas.style width & height).
	 * @param {Object} options - The plugin options.
	 */
	/**
	 * @method IPlugin#destroy
	 * @desc Called after the chart as been destroyed.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 */

	/**
	 * Provided for backward compatibility, use Chart.plugins instead
	 * @namespace Chart.pluginService
	 * @deprecated since version 2.1.5
	 * @todo remove at version 3
	 * @private
	 */
	Chart.pluginService = Chart.plugins;

	/**
	 * Provided for backward compatibility, inheriting from Chart.PlugingBase has no
	 * effect, instead simply create/register plugins via plain JavaScript objects.
	 * @interface Chart.PluginBase
	 * @deprecated since version 2.5.0
	 * @todo remove at version 3
	 * @private
	 */
	Chart.PluginBase = Element.extend({});
};

},{"25":25,"26":26,"45":45}],32:[function(require,module,exports){
'use strict';

var defaults = require(25);
var Element = require(26);
var helpers = require(45);
var Ticks = require(34);

defaults._set('scale', {
	display: true,
	position: 'left',
	offset: false,

	// grid line settings
	gridLines: {
		display: true,
		color: 'rgba(0, 0, 0, 0.1)',
		lineWidth: 1,
		drawBorder: true,
		drawOnChartArea: true,
		drawTicks: true,
		tickMarkLength: 10,
		zeroLineWidth: 1,
		zeroLineColor: 'rgba(0,0,0,0.25)',
		zeroLineBorderDash: [],
		zeroLineBorderDashOffset: 0.0,
		offsetGridLines: false,
		borderDash: [],
		borderDashOffset: 0.0
	},

	// scale label
	scaleLabel: {
		// display property
		display: false,

		// actual label
		labelString: '',

		// line height
		lineHeight: 1.2,

		// top/bottom padding
		padding: {
			top: 4,
			bottom: 4
		}
	},

	// label settings
	ticks: {
		beginAtZero: false,
		minRotation: 0,
		maxRotation: 50,
		mirror: false,
		padding: 0,
		reverse: false,
		display: true,
		autoSkip: true,
		autoSkipPadding: 0,
		labelOffset: 0,
		// We pass through arrays to be rendered as multiline labels, we convert Others to strings here.
		callback: Ticks.formatters.values,
		minor: {},
		major: {}
	}
});

function labelsFromTicks(ticks) {
	var labels = [];
	var i, ilen;

	for (i = 0, ilen = ticks.length; i < ilen; ++i) {
		labels.push(ticks[i].label);
	}

	return labels;
}

function getLineValue(scale, index, offsetGridLines) {
	var lineValue = scale.getPixelForTick(index);

	if (offsetGridLines) {
		if (index === 0) {
			lineValue -= (scale.getPixelForTick(1) - lineValue) / 2;
		} else {
			lineValue -= (lineValue - scale.getPixelForTick(index - 1)) / 2;
		}
	}
	return lineValue;
}

module.exports = function(Chart) {

	function computeTextSize(context, tick, font) {
		return helpers.isArray(tick) ?
			helpers.longestText(context, font, tick) :
			context.measureText(tick).width;
	}

	function parseFontOptions(options) {
		var valueOrDefault = helpers.valueOrDefault;
		var globalDefaults = defaults.global;
		var size = valueOrDefault(options.fontSize, globalDefaults.defaultFontSize);
		var style = valueOrDefault(options.fontStyle, globalDefaults.defaultFontStyle);
		var family = valueOrDefault(options.fontFamily, globalDefaults.defaultFontFamily);

		return {
			size: size,
			style: style,
			family: family,
			font: helpers.fontString(size, style, family)
		};
	}

	function parseLineHeight(options) {
		return helpers.options.toLineHeight(
			helpers.valueOrDefault(options.lineHeight, 1.2),
			helpers.valueOrDefault(options.fontSize, defaults.global.defaultFontSize));
	}

	Chart.Scale = Element.extend({
		/**
		 * Get the padding needed for the scale
		 * @method getPadding
		 * @private
		 * @returns {Padding} the necessary padding
		 */
		getPadding: function() {
			var me = this;
			return {
				left: me.paddingLeft || 0,
				top: me.paddingTop || 0,
				right: me.paddingRight || 0,
				bottom: me.paddingBottom || 0
			};
		},

		/**
		 * Returns the scale tick objects ({label, major})
		 * @since 2.7
		 */
		getTicks: function() {
			return this._ticks;
		},

		// These methods are ordered by lifecyle. Utilities then follow.
		// Any function defined here is inherited by all scale types.
		// Any function can be extended by the scale type

		mergeTicksOptions: function() {
			var ticks = this.options.ticks;
			if (ticks.minor === false) {
				ticks.minor = {
					display: false
				};
			}
			if (ticks.major === false) {
				ticks.major = {
					display: false
				};
			}
			for (var key in ticks) {
				if (key !== 'major' && key !== 'minor') {
					if (typeof ticks.minor[key] === 'undefined') {
						ticks.minor[key] = ticks[key];
					}
					if (typeof ticks.major[key] === 'undefined') {
						ticks.major[key] = ticks[key];
					}
				}
			}
		},
		beforeUpdate: function() {
			helpers.callback(this.options.beforeUpdate, [this]);
		},
		update: function(maxWidth, maxHeight, margins) {
			var me = this;
			var i, ilen, labels, label, ticks, tick;

			// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
			me.beforeUpdate();

			// Absorb the master measurements
			me.maxWidth = maxWidth;
			me.maxHeight = maxHeight;
			me.margins = helpers.extend({
				left: 0,
				right: 0,
				top: 0,
				bottom: 0
			}, margins);
			me.longestTextCache = me.longestTextCache || {};

			// Dimensions
			me.beforeSetDimensions();
			me.setDimensions();
			me.afterSetDimensions();

			// Data min/max
			me.beforeDataLimits();
			me.determineDataLimits();
			me.afterDataLimits();

			// Ticks - `this.ticks` is now DEPRECATED!
			// Internal ticks are now stored as objects in the PRIVATE `this._ticks` member
			// and must not be accessed directly from outside this class. `this.ticks` being
			// around for long time and not marked as private, we can't change its structure
			// without unexpected breaking changes. If you need to access the scale ticks,
			// use scale.getTicks() instead.

			me.beforeBuildTicks();

			// New implementations should return an array of objects but for BACKWARD COMPAT,
			// we still support no return (`this.ticks` internally set by calling this method).
			ticks = me.buildTicks() || [];

			me.afterBuildTicks();

			me.beforeTickToLabelConversion();

			// New implementations should return the formatted tick labels but for BACKWARD
			// COMPAT, we still support no return (`this.ticks` internally changed by calling
			// this method and supposed to contain only string values).
			labels = me.convertTicksToLabels(ticks) || me.ticks;

			me.afterTickToLabelConversion();

			me.ticks = labels;   // BACKWARD COMPATIBILITY

			// IMPORTANT: from this point, we consider that `this.ticks` will NEVER change!

			// BACKWARD COMPAT: synchronize `_ticks` with labels (so potentially `this.ticks`)
			for (i = 0, ilen = labels.length; i < ilen; ++i) {
				label = labels[i];
				tick = ticks[i];
				if (!tick) {
					ticks.push(tick = {
						label: label,
						major: false
					});
				} else {
					tick.label = label;
				}
			}

			me._ticks = ticks;

			// Tick Rotation
			me.beforeCalculateTickRotation();
			me.calculateTickRotation();
			me.afterCalculateTickRotation();
			// Fit
			me.beforeFit();
			me.fit();
			me.afterFit();
			//
			me.afterUpdate();

			return me.minSize;

		},
		afterUpdate: function() {
			helpers.callback(this.options.afterUpdate, [this]);
		},

		//

		beforeSetDimensions: function() {
			helpers.callback(this.options.beforeSetDimensions, [this]);
		},
		setDimensions: function() {
			var me = this;
			// Set the unconstrained dimension before label rotation
			if (me.isHorizontal()) {
				// Reset position before calculating rotation
				me.width = me.maxWidth;
				me.left = 0;
				me.right = me.width;
			} else {
				me.height = me.maxHeight;

				// Reset position before calculating rotation
				me.top = 0;
				me.bottom = me.height;
			}

			// Reset padding
			me.paddingLeft = 0;
			me.paddingTop = 0;
			me.paddingRight = 0;
			me.paddingBottom = 0;
		},
		afterSetDimensions: function() {
			helpers.callback(this.options.afterSetDimensions, [this]);
		},

		// Data limits
		beforeDataLimits: function() {
			helpers.callback(this.options.beforeDataLimits, [this]);
		},
		determineDataLimits: helpers.noop,
		afterDataLimits: function() {
			helpers.callback(this.options.afterDataLimits, [this]);
		},

		//
		beforeBuildTicks: function() {
			helpers.callback(this.options.beforeBuildTicks, [this]);
		},
		buildTicks: helpers.noop,
		afterBuildTicks: function() {
			helpers.callback(this.options.afterBuildTicks, [this]);
		},

		beforeTickToLabelConversion: function() {
			helpers.callback(this.options.beforeTickToLabelConversion, [this]);
		},
		convertTicksToLabels: function() {
			var me = this;
			// Convert ticks to strings
			var tickOpts = me.options.ticks;
			me.ticks = me.ticks.map(tickOpts.userCallback || tickOpts.callback, this);
		},
		afterTickToLabelConversion: function() {
			helpers.callback(this.options.afterTickToLabelConversion, [this]);
		},

		//

		beforeCalculateTickRotation: function() {
			helpers.callback(this.options.beforeCalculateTickRotation, [this]);
		},
		calculateTickRotation: function() {
			var me = this;
			var context = me.ctx;
			var tickOpts = me.options.ticks;
			var labels = labelsFromTicks(me._ticks);

			// Get the width of each grid by calculating the difference
			// between x offsets between 0 and 1.
			var tickFont = parseFontOptions(tickOpts);
			context.font = tickFont.font;

			var labelRotation = tickOpts.minRotation || 0;

			if (labels.length && me.options.display && me.isHorizontal()) {
				var originalLabelWidth = helpers.longestText(context, tickFont.font, labels, me.longestTextCache);
				var labelWidth = originalLabelWidth;
				var cosRotation, sinRotation;

				// Allow 3 pixels x2 padding either side for label readability
				var tickWidth = me.getPixelForTick(1) - me.getPixelForTick(0) - 6;

				// Max label rotation can be set or default to 90 - also act as a loop counter
				while (labelWidth > tickWidth && labelRotation < tickOpts.maxRotation) {
					var angleRadians = helpers.toRadians(labelRotation);
					cosRotation = Math.cos(angleRadians);
					sinRotation = Math.sin(angleRadians);

					if (sinRotation * originalLabelWidth > me.maxHeight) {
						// go back one step
						labelRotation--;
						break;
					}

					labelRotation++;
					labelWidth = cosRotation * originalLabelWidth;
				}
			}

			me.labelRotation = labelRotation;
		},
		afterCalculateTickRotation: function() {
			helpers.callback(this.options.afterCalculateTickRotation, [this]);
		},

		//

		beforeFit: function() {
			helpers.callback(this.options.beforeFit, [this]);
		},
		fit: function() {
			var me = this;
			// Reset
			var minSize = me.minSize = {
				width: 0,
				height: 0
			};

			var labels = labelsFromTicks(me._ticks);

			var opts = me.options;
			var tickOpts = opts.ticks;
			var scaleLabelOpts = opts.scaleLabel;
			var gridLineOpts = opts.gridLines;
			var display = opts.display;
			var isHorizontal = me.isHorizontal();

			var tickFont = parseFontOptions(tickOpts);
			var tickMarkLength = opts.gridLines.tickMarkLength;

			// Width
			if (isHorizontal) {
				// subtract the margins to line up with the chartArea if we are a full width scale
				minSize.width = me.isFullWidth() ? me.maxWidth - me.margins.left - me.margins.right : me.maxWidth;
			} else {
				minSize.width = display && gridLineOpts.drawTicks ? tickMarkLength : 0;
			}

			// height
			if (isHorizontal) {
				minSize.height = display && gridLineOpts.drawTicks ? tickMarkLength : 0;
			} else {
				minSize.height = me.maxHeight; // fill all the height
			}

			// Are we showing a title for the scale?
			if (scaleLabelOpts.display && display) {
				var scaleLabelLineHeight = parseLineHeight(scaleLabelOpts);
				var scaleLabelPadding = helpers.options.toPadding(scaleLabelOpts.padding);
				var deltaHeight = scaleLabelLineHeight + scaleLabelPadding.height;

				if (isHorizontal) {
					minSize.height += deltaHeight;
				} else {
					minSize.width += deltaHeight;
				}
			}

			// Don't bother fitting the ticks if we are not showing them
			if (tickOpts.display && display) {
				var largestTextWidth = helpers.longestText(me.ctx, tickFont.font, labels, me.longestTextCache);
				var tallestLabelHeightInLines = helpers.numberOfLabelLines(labels);
				var lineSpace = tickFont.size * 0.5;
				var tickPadding = me.options.ticks.padding;

				if (isHorizontal) {
					// A horizontal axis is more constrained by the height.
					me.longestLabelWidth = largestTextWidth;

					var angleRadians = helpers.toRadians(me.labelRotation);
					var cosRotation = Math.cos(angleRadians);
					var sinRotation = Math.sin(angleRadians);

					// TODO - improve this calculation
					var labelHeight = (sinRotation * largestTextWidth)
						+ (tickFont.size * tallestLabelHeightInLines)
						+ (lineSpace * (tallestLabelHeightInLines - 1))
						+ lineSpace; // padding

					minSize.height = Math.min(me.maxHeight, minSize.height + labelHeight + tickPadding);

					me.ctx.font = tickFont.font;
					var firstLabelWidth = computeTextSize(me.ctx, labels[0], tickFont.font);
					var lastLabelWidth = computeTextSize(me.ctx, labels[labels.length - 1], tickFont.font);

					// Ensure that our ticks are always inside the canvas. When rotated, ticks are right aligned
					// which means that the right padding is dominated by the font height
					if (me.labelRotation !== 0) {
						me.paddingLeft = opts.position === 'bottom' ? (cosRotation * firstLabelWidth) + 3 : (cosRotation * lineSpace) + 3; // add 3 px to move away from canvas edges
						me.paddingRight = opts.position === 'bottom' ? (cosRotation * lineSpace) + 3 : (cosRotation * lastLabelWidth) + 3;
					} else {
						me.paddingLeft = firstLabelWidth / 2 + 3; // add 3 px to move away from canvas edges
						me.paddingRight = lastLabelWidth / 2 + 3;
					}
				} else {
					// A vertical axis is more constrained by the width. Labels are the
					// dominant factor here, so get that length first and account for padding
					if (tickOpts.mirror) {
						largestTextWidth = 0;
					} else {
						// use lineSpace for consistency with horizontal axis
						// tickPadding is not implemented for horizontal
						largestTextWidth += tickPadding + lineSpace;
					}

					minSize.width = Math.min(me.maxWidth, minSize.width + largestTextWidth);

					me.paddingTop = tickFont.size / 2;
					me.paddingBottom = tickFont.size / 2;
				}
			}

			me.handleMargins();

			me.width = minSize.width;
			me.height = minSize.height;
		},

		/**
		 * Handle margins and padding interactions
		 * @private
		 */
		handleMargins: function() {
			var me = this;
			if (me.margins) {
				me.paddingLeft = Math.max(me.paddingLeft - me.margins.left, 0);
				me.paddingTop = Math.max(me.paddingTop - me.margins.top, 0);
				me.paddingRight = Math.max(me.paddingRight - me.margins.right, 0);
				me.paddingBottom = Math.max(me.paddingBottom - me.margins.bottom, 0);
			}
		},

		afterFit: function() {
			helpers.callback(this.options.afterFit, [this]);
		},

		// Shared Methods
		isHorizontal: function() {
			return this.options.position === 'top' || this.options.position === 'bottom';
		},
		isFullWidth: function() {
			return (this.options.fullWidth);
		},

		// Get the correct value. NaN bad inputs, If the value type is object get the x or y based on whether we are horizontal or not
		getRightValue: function(rawValue) {
			// Null and undefined values first
			if (helpers.isNullOrUndef(rawValue)) {
				return NaN;
			}
			// isNaN(object) returns true, so make sure NaN is checking for a number; Discard Infinite values
			if (typeof rawValue === 'number' && !isFinite(rawValue)) {
				return NaN;
			}
			// If it is in fact an object, dive in one more level
			if (rawValue) {
				if (this.isHorizontal()) {
					if (rawValue.x !== undefined) {
						return this.getRightValue(rawValue.x);
					}
				} else if (rawValue.y !== undefined) {
					return this.getRightValue(rawValue.y);
				}
			}

			// Value is good, return it
			return rawValue;
		},

		/**
		 * Used to get the value to display in the tooltip for the data at the given index
		 * @param index
		 * @param datasetIndex
		 */
		getLabelForIndex: helpers.noop,

		/**
		 * Returns the location of the given data point. Value can either be an index or a numerical value
		 * The coordinate (0, 0) is at the upper-left corner of the canvas
		 * @param value
		 * @param index
		 * @param datasetIndex
		 */
		getPixelForValue: helpers.noop,

		/**
		 * Used to get the data value from a given pixel. This is the inverse of getPixelForValue
		 * The coordinate (0, 0) is at the upper-left corner of the canvas
		 * @param pixel
		 */
		getValueForPixel: helpers.noop,

		/**
		 * Returns the location of the tick at the given index
		 * The coordinate (0, 0) is at the upper-left corner of the canvas
		 */
		getPixelForTick: function(index) {
			var me = this;
			var offset = me.options.offset;
			if (me.isHorizontal()) {
				var innerWidth = me.width - (me.paddingLeft + me.paddingRight);
				var tickWidth = innerWidth / Math.max((me._ticks.length - (offset ? 0 : 1)), 1);
				var pixel = (tickWidth * index) + me.paddingLeft;

				if (offset) {
					pixel += tickWidth / 2;
				}

				var finalVal = me.left + Math.round(pixel);
				finalVal += me.isFullWidth() ? me.margins.left : 0;
				return finalVal;
			}
			var innerHeight = me.height - (me.paddingTop + me.paddingBottom);
			return me.top + (index * (innerHeight / (me._ticks.length - 1)));
		},

		/**
		 * Utility for getting the pixel location of a percentage of scale
		 * The coordinate (0, 0) is at the upper-left corner of the canvas
		 */
		getPixelForDecimal: function(decimal) {
			var me = this;
			if (me.isHorizontal()) {
				var innerWidth = me.width - (me.paddingLeft + me.paddingRight);
				var valueOffset = (innerWidth * decimal) + me.paddingLeft;

				var finalVal = me.left + Math.round(valueOffset);
				finalVal += me.isFullWidth() ? me.margins.left : 0;
				return finalVal;
			}
			return me.top + (decimal * me.height);
		},

		/**
		 * Returns the pixel for the minimum chart value
		 * The coordinate (0, 0) is at the upper-left corner of the canvas
		 */
		getBasePixel: function() {
			return this.getPixelForValue(this.getBaseValue());
		},

		getBaseValue: function() {
			var me = this;
			var min = me.min;
			var max = me.max;

			return me.beginAtZero ? 0 :
				min < 0 && max < 0 ? max :
				min > 0 && max > 0 ? min :
				0;
		},

		/**
		 * Returns a subset of ticks to be plotted to avoid overlapping labels.
		 * @private
		 */
		_autoSkip: function(ticks) {
			var skipRatio;
			var me = this;
			var isHorizontal = me.isHorizontal();
			var optionTicks = me.options.ticks.minor;
			var tickCount = ticks.length;
			var labelRotationRadians = helpers.toRadians(me.labelRotation);
			var cosRotation = Math.cos(labelRotationRadians);
			var longestRotatedLabel = me.longestLabelWidth * cosRotation;
			var result = [];
			var i, tick, shouldSkip;

			// figure out the maximum number of gridlines to show
			var maxTicks;
			if (optionTicks.maxTicksLimit) {
				maxTicks = optionTicks.maxTicksLimit;
			}

			if (isHorizontal) {
				skipRatio = false;

				if ((longestRotatedLabel + optionTicks.autoSkipPadding) * tickCount > (me.width - (me.paddingLeft + me.paddingRight))) {
					skipRatio = 1 + Math.floor(((longestRotatedLabel + optionTicks.autoSkipPadding) * tickCount) / (me.width - (me.paddingLeft + me.paddingRight)));
				}

				// if they defined a max number of optionTicks,
				// increase skipRatio until that number is met
				if (maxTicks && tickCount > maxTicks) {
					skipRatio = Math.max(skipRatio, Math.floor(tickCount / maxTicks));
				}
			}

			for (i = 0; i < tickCount; i++) {
				tick = ticks[i];

				// Since we always show the last tick,we need may need to hide the last shown one before
				shouldSkip = (skipRatio > 1 && i % skipRatio > 0) || (i % skipRatio === 0 && i + skipRatio >= tickCount);
				if (shouldSkip && i !== tickCount - 1) {
					// leave tick in place but make sure it's not displayed (#4635)
					delete tick.label;
				}
				result.push(tick);
			}
			return result;
		},

		// Actually draw the scale on the canvas
		// @param {rectangle} chartArea : the area of the chart to draw full grid lines on
		draw: function(chartArea) {
			var me = this;
			var options = me.options;
			if (!options.display) {
				return;
			}

			var context = me.ctx;
			var globalDefaults = defaults.global;
			var optionTicks = options.ticks.minor;
			var optionMajorTicks = options.ticks.major || optionTicks;
			var gridLines = options.gridLines;
			var scaleLabel = options.scaleLabel;

			var isRotated = me.labelRotation !== 0;
			var isHorizontal = me.isHorizontal();

			var ticks = optionTicks.autoSkip ? me._autoSkip(me.getTicks()) : me.getTicks();
			var tickFontColor = helpers.valueOrDefault(optionTicks.fontColor, globalDefaults.defaultFontColor);
			var tickFont = parseFontOptions(optionTicks);
			var majorTickFontColor = helpers.valueOrDefault(optionMajorTicks.fontColor, globalDefaults.defaultFontColor);
			var majorTickFont = parseFontOptions(optionMajorTicks);

			var tl = gridLines.drawTicks ? gridLines.tickMarkLength : 0;

			var scaleLabelFontColor = helpers.valueOrDefault(scaleLabel.fontColor, globalDefaults.defaultFontColor);
			var scaleLabelFont = parseFontOptions(scaleLabel);
			var scaleLabelPadding = helpers.options.toPadding(scaleLabel.padding);
			var labelRotationRadians = helpers.toRadians(me.labelRotation);

			var itemsToDraw = [];

			var xTickStart = options.position === 'right' ? me.left : me.right - tl;
			var xTickEnd = options.position === 'right' ? me.left + tl : me.right;
			var yTickStart = options.position === 'bottom' ? me.top : me.bottom - tl;
			var yTickEnd = options.position === 'bottom' ? me.top + tl : me.bottom;

			helpers.each(ticks, function(tick, index) {
				// autoskipper skipped this tick (#4635)
				if (helpers.isNullOrUndef(tick.label)) {
					return;
				}

				var label = tick.label;
				var lineWidth, lineColor, borderDash, borderDashOffset;
				if (index === me.zeroLineIndex && options.offset === gridLines.offsetGridLines) {
					// Draw the first index specially
					lineWidth = gridLines.zeroLineWidth;
					lineColor = gridLines.zeroLineColor;
					borderDash = gridLines.zeroLineBorderDash;
					borderDashOffset = gridLines.zeroLineBorderDashOffset;
				} else {
					lineWidth = helpers.valueAtIndexOrDefault(gridLines.lineWidth, index);
					lineColor = helpers.valueAtIndexOrDefault(gridLines.color, index);
					borderDash = helpers.valueOrDefault(gridLines.borderDash, globalDefaults.borderDash);
					borderDashOffset = helpers.valueOrDefault(gridLines.borderDashOffset, globalDefaults.borderDashOffset);
				}

				// Common properties
				var tx1, ty1, tx2, ty2, x1, y1, x2, y2, labelX, labelY;
				var textAlign = 'middle';
				var textBaseline = 'middle';
				var tickPadding = optionTicks.padding;

				if (isHorizontal) {
					var labelYOffset = tl + tickPadding;

					if (options.position === 'bottom') {
						// bottom
						textBaseline = !isRotated ? 'top' : 'middle';
						textAlign = !isRotated ? 'center' : 'right';
						labelY = me.top + labelYOffset;
					} else {
						// top
						textBaseline = !isRotated ? 'bottom' : 'middle';
						textAlign = !isRotated ? 'center' : 'left';
						labelY = me.bottom - labelYOffset;
					}

					var xLineValue = getLineValue(me, index, gridLines.offsetGridLines && ticks.length > 1);
					if (xLineValue < me.left) {
						lineColor = 'rgba(0,0,0,0)';
					}
					xLineValue += helpers.aliasPixel(lineWidth);

					labelX = me.getPixelForTick(index) + optionTicks.labelOffset; // x values for optionTicks (need to consider offsetLabel option)

					tx1 = tx2 = x1 = x2 = xLineValue;
					ty1 = yTickStart;
					ty2 = yTickEnd;
					y1 = chartArea.top;
					y2 = chartArea.bottom;
				} else {
					var isLeft = options.position === 'left';
					var labelXOffset;

					if (optionTicks.mirror) {
						textAlign = isLeft ? 'left' : 'right';
						labelXOffset = tickPadding;
					} else {
						textAlign = isLeft ? 'right' : 'left';
						labelXOffset = tl + tickPadding;
					}

					labelX = isLeft ? me.right - labelXOffset : me.left + labelXOffset;

					var yLineValue = getLineValue(me, index, gridLines.offsetGridLines && ticks.length > 1);
					if (yLineValue < me.top) {
						lineColor = 'rgba(0,0,0,0)';
					}
					yLineValue += helpers.aliasPixel(lineWidth);

					labelY = me.getPixelForTick(index) + optionTicks.labelOffset;

					tx1 = xTickStart;
					tx2 = xTickEnd;
					x1 = chartArea.left;
					x2 = chartArea.right;
					ty1 = ty2 = y1 = y2 = yLineValue;
				}

				itemsToDraw.push({
					tx1: tx1,
					ty1: ty1,
					tx2: tx2,
					ty2: ty2,
					x1: x1,
					y1: y1,
					x2: x2,
					y2: y2,
					labelX: labelX,
					labelY: labelY,
					glWidth: lineWidth,
					glColor: lineColor,
					glBorderDash: borderDash,
					glBorderDashOffset: borderDashOffset,
					rotation: -1 * labelRotationRadians,
					label: label,
					major: tick.major,
					textBaseline: textBaseline,
					textAlign: textAlign
				});
			});

			// Draw all of the tick labels, tick marks, and grid lines at the correct places
			helpers.each(itemsToDraw, function(itemToDraw) {
				if (gridLines.display) {
					context.save();
					context.lineWidth = itemToDraw.glWidth;
					context.strokeStyle = itemToDraw.glColor;
					if (context.setLineDash) {
						context.setLineDash(itemToDraw.glBorderDash);
						context.lineDashOffset = itemToDraw.glBorderDashOffset;
					}

					context.beginPath();

					if (gridLines.drawTicks) {
						context.moveTo(itemToDraw.tx1, itemToDraw.ty1);
						context.lineTo(itemToDraw.tx2, itemToDraw.ty2);
					}

					if (gridLines.drawOnChartArea) {
						context.moveTo(itemToDraw.x1, itemToDraw.y1);
						context.lineTo(itemToDraw.x2, itemToDraw.y2);
					}

					context.stroke();
					context.restore();
				}

				if (optionTicks.display) {
					// Make sure we draw text in the correct color and font
					context.save();
					context.translate(itemToDraw.labelX, itemToDraw.labelY);
					context.rotate(itemToDraw.rotation);
					context.font = itemToDraw.major ? majorTickFont.font : tickFont.font;
					context.fillStyle = itemToDraw.major ? majorTickFontColor : tickFontColor;
					context.textBaseline = itemToDraw.textBaseline;
					context.textAlign = itemToDraw.textAlign;

					var label = itemToDraw.label;
					if (helpers.isArray(label)) {
						for (var i = 0, y = 0; i < label.length; ++i) {
							// We just make sure the multiline element is a string here..
							context.fillText('' + label[i], 0, y);
							// apply same lineSpacing as calculated @ L#320
							y += (tickFont.size * 1.5);
						}
					} else {
						context.fillText(label, 0, 0);
					}
					context.restore();
				}
			});

			if (scaleLabel.display) {
				// Draw the scale label
				var scaleLabelX;
				var scaleLabelY;
				var rotation = 0;
				var halfLineHeight = parseLineHeight(scaleLabel) / 2;

				if (isHorizontal) {
					scaleLabelX = me.left + ((me.right - me.left) / 2); // midpoint of the width
					scaleLabelY = options.position === 'bottom'
						? me.bottom - halfLineHeight - scaleLabelPadding.bottom
						: me.top + halfLineHeight + scaleLabelPadding.top;
				} else {
					var isLeft = options.position === 'left';
					scaleLabelX = isLeft
						? me.left + halfLineHeight + scaleLabelPadding.top
						: me.right - halfLineHeight - scaleLabelPadding.top;
					scaleLabelY = me.top + ((me.bottom - me.top) / 2);
					rotation = isLeft ? -0.5 * Math.PI : 0.5 * Math.PI;
				}

				context.save();
				context.translate(scaleLabelX, scaleLabelY);
				context.rotate(rotation);
				context.textAlign = 'center';
				context.textBaseline = 'middle';
				context.fillStyle = scaleLabelFontColor; // render in correct colour
				context.font = scaleLabelFont.font;
				context.fillText(scaleLabel.labelString, 0, 0);
				context.restore();
			}

			if (gridLines.drawBorder) {
				// Draw the line at the edge of the axis
				context.lineWidth = helpers.valueAtIndexOrDefault(gridLines.lineWidth, 0);
				context.strokeStyle = helpers.valueAtIndexOrDefault(gridLines.color, 0);
				var x1 = me.left;
				var x2 = me.right;
				var y1 = me.top;
				var y2 = me.bottom;

				var aliasPixel = helpers.aliasPixel(context.lineWidth);
				if (isHorizontal) {
					y1 = y2 = options.position === 'top' ? me.bottom : me.top;
					y1 += aliasPixel;
					y2 += aliasPixel;
				} else {
					x1 = x2 = options.position === 'left' ? me.right : me.left;
					x1 += aliasPixel;
					x2 += aliasPixel;
				}

				context.beginPath();
				context.moveTo(x1, y1);
				context.lineTo(x2, y2);
				context.stroke();
			}
		}
	});
};

},{"25":25,"26":26,"34":34,"45":45}],33:[function(require,module,exports){
'use strict';

var defaults = require(25);
var helpers = require(45);

module.exports = function(Chart) {

	Chart.scaleService = {
		// Scale registration object. Extensions can register new scale types (such as log or DB scales) and then
		// use the new chart options to grab the correct scale
		constructors: {},
		// Use a registration function so that we can move to an ES6 map when we no longer need to support
		// old browsers

		// Scale config defaults
		defaults: {},
		registerScaleType: function(type, scaleConstructor, scaleDefaults) {
			this.constructors[type] = scaleConstructor;
			this.defaults[type] = helpers.clone(scaleDefaults);
		},
		getScaleConstructor: function(type) {
			return this.constructors.hasOwnProperty(type) ? this.constructors[type] : undefined;
		},
		getScaleDefaults: function(type) {
			// Return the scale defaults merged with the global settings so that we always use the latest ones
			return this.defaults.hasOwnProperty(type) ? helpers.merge({}, [defaults.scale, this.defaults[type]]) : {};
		},
		updateScaleDefaults: function(type, additions) {
			var me = this;
			if (me.defaults.hasOwnProperty(type)) {
				me.defaults[type] = helpers.extend(me.defaults[type], additions);
			}
		},
		addScalesToLayout: function(chart) {
			// Adds each scale to the chart.boxes array to be sized accordingly
			helpers.each(chart.scales, function(scale) {
				// Set ILayoutItem parameters for backwards compatibility
				scale.fullWidth = scale.options.fullWidth;
				scale.position = scale.options.position;
				scale.weight = scale.options.weight;
				Chart.layoutService.addBox(chart, scale);
			});
		}
	};
};

},{"25":25,"45":45}],34:[function(require,module,exports){
'use strict';

var helpers = require(45);

/**
 * Namespace to hold static tick generation functions
 * @namespace Chart.Ticks
 */
module.exports = {
	/**
	 * Namespace to hold generators for different types of ticks
	 * @namespace Chart.Ticks.generators
	 */
	generators: {
		/**
		 * Interface for the options provided to the numeric tick generator
		 * @interface INumericTickGenerationOptions
		 */
		/**
		 * The maximum number of ticks to display
		 * @name INumericTickGenerationOptions#maxTicks
		 * @type Number
		 */
		/**
		 * The distance between each tick.
		 * @name INumericTickGenerationOptions#stepSize
		 * @type Number
		 * @optional
		 */
		/**
		 * Forced minimum for the ticks. If not specified, the minimum of the data range is used to calculate the tick minimum
		 * @name INumericTickGenerationOptions#min
		 * @type Number
		 * @optional
		 */
		/**
		 * The maximum value of the ticks. If not specified, the maximum of the data range is used to calculate the tick maximum
		 * @name INumericTickGenerationOptions#max
		 * @type Number
		 * @optional
		 */

		/**
		 * Generate a set of linear ticks
		 * @method Chart.Ticks.generators.linear
		 * @param generationOptions {INumericTickGenerationOptions} the options used to generate the ticks
		 * @param dataRange {IRange} the range of the data
		 * @returns {Array<Number>} array of tick values
		 */
		linear: function(generationOptions, dataRange) {
			var ticks = [];
			// To get a "nice" value for the tick spacing, we will use the appropriately named
			// "nice number" algorithm. See http://stackoverflow.com/questions/8506881/nice-label-algorithm-for-charts-with-minimum-ticks
			// for details.

			var spacing;
			if (generationOptions.stepSize && generationOptions.stepSize > 0) {
				spacing = generationOptions.stepSize;
			} else {
				var niceRange = helpers.niceNum(dataRange.max - dataRange.min, false);
				spacing = helpers.niceNum(niceRange / (generationOptions.maxTicks - 1), true);
			}
			var niceMin = Math.floor(dataRange.min / spacing) * spacing;
			var niceMax = Math.ceil(dataRange.max / spacing) * spacing;

			// If min, max and stepSize is set and they make an evenly spaced scale use it.
			if (generationOptions.min && generationOptions.max && generationOptions.stepSize) {
				// If very close to our whole number, use it.
				if (helpers.almostWhole((generationOptions.max - generationOptions.min) / generationOptions.stepSize, spacing / 1000)) {
					niceMin = generationOptions.min;
					niceMax = generationOptions.max;
				}
			}

			var numSpaces = (niceMax - niceMin) / spacing;
			// If very close to our rounded value, use it.
			if (helpers.almostEquals(numSpaces, Math.round(numSpaces), spacing / 1000)) {
				numSpaces = Math.round(numSpaces);
			} else {
				numSpaces = Math.ceil(numSpaces);
			}

			// Put the values into the ticks array
			ticks.push(generationOptions.min !== undefined ? generationOptions.min : niceMin);
			for (var j = 1; j < numSpaces; ++j) {
				ticks.push(niceMin + (j * spacing));
			}
			ticks.push(generationOptions.max !== undefined ? generationOptions.max : niceMax);

			return ticks;
		},

		/**
		 * Generate a set of logarithmic ticks
		 * @method Chart.Ticks.generators.logarithmic
		 * @param generationOptions {INumericTickGenerationOptions} the options used to generate the ticks
		 * @param dataRange {IRange} the range of the data
		 * @returns {Array<Number>} array of tick values
		 */
		logarithmic: function(generationOptions, dataRange) {
			var ticks = [];
			var valueOrDefault = helpers.valueOrDefault;

			// Figure out what the max number of ticks we can support it is based on the size of
			// the axis area. For now, we say that the minimum tick spacing in pixels must be 50
			// We also limit the maximum number of ticks to 11 which gives a nice 10 squares on
			// the graph
			var tickVal = valueOrDefault(generationOptions.min, Math.pow(10, Math.floor(helpers.log10(dataRange.min))));

			var endExp = Math.floor(helpers.log10(dataRange.max));
			var endSignificand = Math.ceil(dataRange.max / Math.pow(10, endExp));
			var exp, significand;

			if (tickVal === 0) {
				exp = Math.floor(helpers.log10(dataRange.minNotZero));
				significand = Math.floor(dataRange.minNotZero / Math.pow(10, exp));

				ticks.push(tickVal);
				tickVal = significand * Math.pow(10, exp);
			} else {
				exp = Math.floor(helpers.log10(tickVal));
				significand = Math.floor(tickVal / Math.pow(10, exp));
			}

			do {
				ticks.push(tickVal);

				++significand;
				if (significand === 10) {
					significand = 1;
					++exp;
				}

				tickVal = significand * Math.pow(10, exp);
			} while (exp < endExp || (exp === endExp && significand < endSignificand));

			var lastTick = valueOrDefault(generationOptions.max, tickVal);
			ticks.push(lastTick);

			return ticks;
		}
	},

	/**
	 * Namespace to hold formatters for different types of ticks
	 * @namespace Chart.Ticks.formatters
	 */
	formatters: {
		/**
		 * Formatter for value labels
		 * @method Chart.Ticks.formatters.values
		 * @param value the value to display
		 * @return {String|Array} the label to display
		 */
		values: function(value) {
			return helpers.isArray(value) ? value : '' + value;
		},

		/**
		 * Formatter for linear numeric ticks
		 * @method Chart.Ticks.formatters.linear
		 * @param tickValue {Number} the value to be formatted
		 * @param index {Number} the position of the tickValue parameter in the ticks array
		 * @param ticks {Array<Number>} the list of ticks being converted
		 * @return {String} string representation of the tickValue parameter
		 */
		linear: function(tickValue, index, ticks) {
			// If we have lots of ticks, don't use the ones
			var delta = ticks.length > 3 ? ticks[2] - ticks[1] : ticks[1] - ticks[0];

			// If we have a number like 2.5 as the delta, figure out how many decimal places we need
			if (Math.abs(delta) > 1) {
				if (tickValue !== Math.floor(tickValue)) {
					// not an integer
					delta = tickValue - Math.floor(tickValue);
				}
			}

			var logDelta = helpers.log10(Math.abs(delta));
			var tickString = '';

			if (tickValue !== 0) {
				var numDecimal = -1 * Math.floor(logDelta);
				numDecimal = Math.max(Math.min(numDecimal, 20), 0); // toFixed has a max of 20 decimal places
				tickString = tickValue.toFixed(numDecimal);
			} else {
				tickString = '0'; // never show decimal places for 0
			}

			return tickString;
		},

		logarithmic: function(tickValue, index, ticks) {
			var remain = tickValue / (Math.pow(10, Math.floor(helpers.log10(tickValue))));

			if (tickValue === 0) {
				return '0';
			} else if (remain === 1 || remain === 2 || remain === 5 || index === 0 || index === ticks.length - 1) {
				return tickValue.toExponential();
			}
			return '';
		}
	}
};

},{"45":45}],35:[function(require,module,exports){
'use strict';

var defaults = require(25);
var Element = require(26);
var helpers = require(45);

defaults._set('global', {
	tooltips: {
		enabled: true,
		custom: null,
		mode: 'nearest',
		position: 'average',
		intersect: true,
		backgroundColor: 'rgba(0,0,0,0.8)',
		titleFontStyle: 'bold',
		titleSpacing: 2,
		titleMarginBottom: 6,
		titleFontColor: '#fff',
		titleAlign: 'left',
		bodySpacing: 2,
		bodyFontColor: '#fff',
		bodyAlign: 'left',
		footerFontStyle: 'bold',
		footerSpacing: 2,
		footerMarginTop: 6,
		footerFontColor: '#fff',
		footerAlign: 'left',
		yPadding: 6,
		xPadding: 6,
		caretPadding: 2,
		caretSize: 5,
		cornerRadius: 6,
		multiKeyBackground: '#fff',
		displayColors: true,
		borderColor: 'rgba(0,0,0,0)',
		borderWidth: 0,
		callbacks: {
			// Args are: (tooltipItems, data)
			beforeTitle: helpers.noop,
			title: function(tooltipItems, data) {
				// Pick first xLabel for now
				var title = '';
				var labels = data.labels;
				var labelCount = labels ? labels.length : 0;

				if (tooltipItems.length > 0) {
					var item = tooltipItems[0];

					if (item.xLabel) {
						title = item.xLabel;
					} else if (labelCount > 0 && item.index < labelCount) {
						title = labels[item.index];
					}
				}

				return title;
			},
			afterTitle: helpers.noop,

			// Args are: (tooltipItems, data)
			beforeBody: helpers.noop,

			// Args are: (tooltipItem, data)
			beforeLabel: helpers.noop,
			label: function(tooltipItem, data) {
				var label = data.datasets[tooltipItem.datasetIndex].label || '';

				if (label) {
					label += ': ';
				}
				label += tooltipItem.yLabel;
				return label;
			},
			labelColor: function(tooltipItem, chart) {
				var meta = chart.getDatasetMeta(tooltipItem.datasetIndex);
				var activeElement = meta.data[tooltipItem.index];
				var view = activeElement._view;
				return {
					borderColor: view.borderColor,
					backgroundColor: view.backgroundColor
				};
			},
			labelTextColor: function() {
				return this._options.bodyFontColor;
			},
			afterLabel: helpers.noop,

			// Args are: (tooltipItems, data)
			afterBody: helpers.noop,

			// Args are: (tooltipItems, data)
			beforeFooter: helpers.noop,
			footer: helpers.noop,
			afterFooter: helpers.noop
		}
	}
});

module.exports = function(Chart) {

	/**
 	 * Helper method to merge the opacity into a color
 	 */
	function mergeOpacity(colorString, opacity) {
		var color = helpers.color(colorString);
		return color.alpha(opacity * color.alpha()).rgbaString();
	}

	// Helper to push or concat based on if the 2nd parameter is an array or not
	function pushOrConcat(base, toPush) {
		if (toPush) {
			if (helpers.isArray(toPush)) {
				// base = base.concat(toPush);
				Array.prototype.push.apply(base, toPush);
			} else {
				base.push(toPush);
			}
		}

		return base;
	}

	// Private helper to create a tooltip item model
	// @param element : the chart element (point, arc, bar) to create the tooltip item for
	// @return : new tooltip item
	function createTooltipItem(element) {
		var xScale = element._xScale;
		var yScale = element._yScale || element._scale; // handle radar || polarArea charts
		var index = element._index;
		var datasetIndex = element._datasetIndex;

		return {
			xLabel: xScale ? xScale.getLabelForIndex(index, datasetIndex) : '',
			yLabel: yScale ? yScale.getLabelForIndex(index, datasetIndex) : '',
			index: index,
			datasetIndex: datasetIndex,
			x: element._model.x,
			y: element._model.y
		};
	}

	/**
	 * Helper to get the reset model for the tooltip
	 * @param tooltipOpts {Object} the tooltip options
	 */
	function getBaseModel(tooltipOpts) {
		var globalDefaults = defaults.global;
		var valueOrDefault = helpers.valueOrDefault;

		return {
			// Positioning
			xPadding: tooltipOpts.xPadding,
			yPadding: tooltipOpts.yPadding,
			xAlign: tooltipOpts.xAlign,
			yAlign: tooltipOpts.yAlign,

			// Body
			bodyFontColor: tooltipOpts.bodyFontColor,
			_bodyFontFamily: valueOrDefault(tooltipOpts.bodyFontFamily, globalDefaults.defaultFontFamily),
			_bodyFontStyle: valueOrDefault(tooltipOpts.bodyFontStyle, globalDefaults.defaultFontStyle),
			_bodyAlign: tooltipOpts.bodyAlign,
			bodyFontSize: valueOrDefault(tooltipOpts.bodyFontSize, globalDefaults.defaultFontSize),
			bodySpacing: tooltipOpts.bodySpacing,

			// Title
			titleFontColor: tooltipOpts.titleFontColor,
			_titleFontFamily: valueOrDefault(tooltipOpts.titleFontFamily, globalDefaults.defaultFontFamily),
			_titleFontStyle: valueOrDefault(tooltipOpts.titleFontStyle, globalDefaults.defaultFontStyle),
			titleFontSize: valueOrDefault(tooltipOpts.titleFontSize, globalDefaults.defaultFontSize),
			_titleAlign: tooltipOpts.titleAlign,
			titleSpacing: tooltipOpts.titleSpacing,
			titleMarginBottom: tooltipOpts.titleMarginBottom,

			// Footer
			footerFontColor: tooltipOpts.footerFontColor,
			_footerFontFamily: valueOrDefault(tooltipOpts.footerFontFamily, globalDefaults.defaultFontFamily),
			_footerFontStyle: valueOrDefault(tooltipOpts.footerFontStyle, globalDefaults.defaultFontStyle),
			footerFontSize: valueOrDefault(tooltipOpts.footerFontSize, globalDefaults.defaultFontSize),
			_footerAlign: tooltipOpts.footerAlign,
			footerSpacing: tooltipOpts.footerSpacing,
			footerMarginTop: tooltipOpts.footerMarginTop,

			// Appearance
			caretSize: tooltipOpts.caretSize,
			cornerRadius: tooltipOpts.cornerRadius,
			backgroundColor: tooltipOpts.backgroundColor,
			opacity: 0,
			legendColorBackground: tooltipOpts.multiKeyBackground,
			displayColors: tooltipOpts.displayColors,
			borderColor: tooltipOpts.borderColor,
			borderWidth: tooltipOpts.borderWidth
		};
	}

	/**
	 * Get the size of the tooltip
	 */
	function getTooltipSize(tooltip, model) {
		var ctx = tooltip._chart.ctx;

		var height = model.yPadding * 2; // Tooltip Padding
		var width = 0;

		// Count of all lines in the body
		var body = model.body;
		var combinedBodyLength = body.reduce(function(count, bodyItem) {
			return count + bodyItem.before.length + bodyItem.lines.length + bodyItem.after.length;
		}, 0);
		combinedBodyLength += model.beforeBody.length + model.afterBody.length;

		var titleLineCount = model.title.length;
		var footerLineCount = model.footer.length;
		var titleFontSize = model.titleFontSize;
		var bodyFontSize = model.bodyFontSize;
		var footerFontSize = model.footerFontSize;

		height += titleLineCount * titleFontSize; // Title Lines
		height += titleLineCount ? (titleLineCount - 1) * model.titleSpacing : 0; // Title Line Spacing
		height += titleLineCount ? model.titleMarginBottom : 0; // Title's bottom Margin
		height += combinedBodyLength * bodyFontSize; // Body Lines
		height += combinedBodyLength ? (combinedBodyLength - 1) * model.bodySpacing : 0; // Body Line Spacing
		height += footerLineCount ? model.footerMarginTop : 0; // Footer Margin
		height += footerLineCount * (footerFontSize); // Footer Lines
		height += footerLineCount ? (footerLineCount - 1) * model.footerSpacing : 0; // Footer Line Spacing

		// Title width
		var widthPadding = 0;
		var maxLineWidth = function(line) {
			width = Math.max(width, ctx.measureText(line).width + widthPadding);
		};

		ctx.font = helpers.fontString(titleFontSize, model._titleFontStyle, model._titleFontFamily);
		helpers.each(model.title, maxLineWidth);

		// Body width
		ctx.font = helpers.fontString(bodyFontSize, model._bodyFontStyle, model._bodyFontFamily);
		helpers.each(model.beforeBody.concat(model.afterBody), maxLineWidth);

		// Body lines may include some extra width due to the color box
		widthPadding = model.displayColors ? (bodyFontSize + 2) : 0;
		helpers.each(body, function(bodyItem) {
			helpers.each(bodyItem.before, maxLineWidth);
			helpers.each(bodyItem.lines, maxLineWidth);
			helpers.each(bodyItem.after, maxLineWidth);
		});

		// Reset back to 0
		widthPadding = 0;

		// Footer width
		ctx.font = helpers.fontString(footerFontSize, model._footerFontStyle, model._footerFontFamily);
		helpers.each(model.footer, maxLineWidth);

		// Add padding
		width += 2 * model.xPadding;

		return {
			width: width,
			height: height
		};
	}

	/**
	 * Helper to get the alignment of a tooltip given the size
	 */
	function determineAlignment(tooltip, size) {
		var model = tooltip._model;
		var chart = tooltip._chart;
		var chartArea = tooltip._chart.chartArea;
		var xAlign = 'center';
		var yAlign = 'center';

		if (model.y < size.height) {
			yAlign = 'top';
		} else if (model.y > (chart.height - size.height)) {
			yAlign = 'bottom';
		}

		var lf, rf; // functions to determine left, right alignment
		var olf, orf; // functions to determine if left/right alignment causes tooltip to go outside chart
		var yf; // function to get the y alignment if the tooltip goes outside of the left or right edges
		var midX = (chartArea.left + chartArea.right) / 2;
		var midY = (chartArea.top + chartArea.bottom) / 2;

		if (yAlign === 'center') {
			lf = function(x) {
				return x <= midX;
			};
			rf = function(x) {
				return x > midX;
			};
		} else {
			lf = function(x) {
				return x <= (size.width / 2);
			};
			rf = function(x) {
				return x >= (chart.width - (size.width / 2));
			};
		}

		olf = function(x) {
			return x + size.width > chart.width;
		};
		orf = function(x) {
			return x - size.width < 0;
		};
		yf = function(y) {
			return y <= midY ? 'top' : 'bottom';
		};

		if (lf(model.x)) {
			xAlign = 'left';

			// Is tooltip too wide and goes over the right side of the chart.?
			if (olf(model.x)) {
				xAlign = 'center';
				yAlign = yf(model.y);
			}
		} else if (rf(model.x)) {
			xAlign = 'right';

			// Is tooltip too wide and goes outside left edge of canvas?
			if (orf(model.x)) {
				xAlign = 'center';
				yAlign = yf(model.y);
			}
		}

		var opts = tooltip._options;
		return {
			xAlign: opts.xAlign ? opts.xAlign : xAlign,
			yAlign: opts.yAlign ? opts.yAlign : yAlign
		};
	}

	/**
	 * @Helper to get the location a tooltip needs to be placed at given the initial position (via the vm) and the size and alignment
	 */
	function getBackgroundPoint(vm, size, alignment) {
		// Background Position
		var x = vm.x;
		var y = vm.y;

		var caretSize = vm.caretSize;
		var caretPadding = vm.caretPadding;
		var cornerRadius = vm.cornerRadius;
		var xAlign = alignment.xAlign;
		var yAlign = alignment.yAlign;
		var paddingAndSize = caretSize + caretPadding;
		var radiusAndPadding = cornerRadius + caretPadding;

		if (xAlign === 'right') {
			x -= size.width;
		} else if (xAlign === 'center') {
			x -= (size.width / 2);
		}

		if (yAlign === 'top') {
			y += paddingAndSize;
		} else if (yAlign === 'bottom') {
			y -= size.height + paddingAndSize;
		} else {
			y -= (size.height / 2);
		}

		if (yAlign === 'center') {
			if (xAlign === 'left') {
				x += paddingAndSize;
			} else if (xAlign === 'right') {
				x -= paddingAndSize;
			}
		} else if (xAlign === 'left') {
			x -= radiusAndPadding;
		} else if (xAlign === 'right') {
			x += radiusAndPadding;
		}

		return {
			x: x,
			y: y
		};
	}

	Chart.Tooltip = Element.extend({
		initialize: function() {
			this._model = getBaseModel(this._options);
			this._lastActive = [];
		},

		// Get the title
		// Args are: (tooltipItem, data)
		getTitle: function() {
			var me = this;
			var opts = me._options;
			var callbacks = opts.callbacks;

			var beforeTitle = callbacks.beforeTitle.apply(me, arguments);
			var title = callbacks.title.apply(me, arguments);
			var afterTitle = callbacks.afterTitle.apply(me, arguments);

			var lines = [];
			lines = pushOrConcat(lines, beforeTitle);
			lines = pushOrConcat(lines, title);
			lines = pushOrConcat(lines, afterTitle);

			return lines;
		},

		// Args are: (tooltipItem, data)
		getBeforeBody: function() {
			var lines = this._options.callbacks.beforeBody.apply(this, arguments);
			return helpers.isArray(lines) ? lines : lines !== undefined ? [lines] : [];
		},

		// Args are: (tooltipItem, data)
		getBody: function(tooltipItems, data) {
			var me = this;
			var callbacks = me._options.callbacks;
			var bodyItems = [];

			helpers.each(tooltipItems, function(tooltipItem) {
				var bodyItem = {
					before: [],
					lines: [],
					after: []
				};
				pushOrConcat(bodyItem.before, callbacks.beforeLabel.call(me, tooltipItem, data));
				pushOrConcat(bodyItem.lines, callbacks.label.call(me, tooltipItem, data));
				pushOrConcat(bodyItem.after, callbacks.afterLabel.call(me, tooltipItem, data));

				bodyItems.push(bodyItem);
			});

			return bodyItems;
		},

		// Args are: (tooltipItem, data)
		getAfterBody: function() {
			var lines = this._options.callbacks.afterBody.apply(this, arguments);
			return helpers.isArray(lines) ? lines : lines !== undefined ? [lines] : [];
		},

		// Get the footer and beforeFooter and afterFooter lines
		// Args are: (tooltipItem, data)
		getFooter: function() {
			var me = this;
			var callbacks = me._options.callbacks;

			var beforeFooter = callbacks.beforeFooter.apply(me, arguments);
			var footer = callbacks.footer.apply(me, arguments);
			var afterFooter = callbacks.afterFooter.apply(me, arguments);

			var lines = [];
			lines = pushOrConcat(lines, beforeFooter);
			lines = pushOrConcat(lines, footer);
			lines = pushOrConcat(lines, afterFooter);

			return lines;
		},

		update: function(changed) {
			var me = this;
			var opts = me._options;

			// Need to regenerate the model because its faster than using extend and it is necessary due to the optimization in Chart.Element.transition
			// that does _view = _model if ease === 1. This causes the 2nd tooltip update to set properties in both the view and model at the same time
			// which breaks any animations.
			var existingModel = me._model;
			var model = me._model = getBaseModel(opts);
			var active = me._active;

			var data = me._data;

			// In the case where active.length === 0 we need to keep these at existing values for good animations
			var alignment = {
				xAlign: existingModel.xAlign,
				yAlign: existingModel.yAlign
			};
			var backgroundPoint = {
				x: existingModel.x,
				y: existingModel.y
			};
			var tooltipSize = {
				width: existingModel.width,
				height: existingModel.height
			};
			var tooltipPosition = {
				x: existingModel.caretX,
				y: existingModel.caretY
			};

			var i, len;

			if (active.length) {
				model.opacity = 1;

				var labelColors = [];
				var labelTextColors = [];
				tooltipPosition = Chart.Tooltip.positioners[opts.position].call(me, active, me._eventPosition);

				var tooltipItems = [];
				for (i = 0, len = active.length; i < len; ++i) {
					tooltipItems.push(createTooltipItem(active[i]));
				}

				// If the user provided a filter function, use it to modify the tooltip items
				if (opts.filter) {
					tooltipItems = tooltipItems.filter(function(a) {
						return opts.filter(a, data);
					});
				}

				// If the user provided a sorting function, use it to modify the tooltip items
				if (opts.itemSort) {
					tooltipItems = tooltipItems.sort(function(a, b) {
						return opts.itemSort(a, b, data);
					});
				}

				// Determine colors for boxes
				helpers.each(tooltipItems, function(tooltipItem) {
					labelColors.push(opts.callbacks.labelColor.call(me, tooltipItem, me._chart));
					labelTextColors.push(opts.callbacks.labelTextColor.call(me, tooltipItem, me._chart));
				});


				// Build the Text Lines
				model.title = me.getTitle(tooltipItems, data);
				model.beforeBody = me.getBeforeBody(tooltipItems, data);
				model.body = me.getBody(tooltipItems, data);
				model.afterBody = me.getAfterBody(tooltipItems, data);
				model.footer = me.getFooter(tooltipItems, data);

				// Initial positioning and colors
				model.x = Math.round(tooltipPosition.x);
				model.y = Math.round(tooltipPosition.y);
				model.caretPadding = opts.caretPadding;
				model.labelColors = labelColors;
				model.labelTextColors = labelTextColors;

				// data points
				model.dataPoints = tooltipItems;

				// We need to determine alignment of the tooltip
				tooltipSize = getTooltipSize(this, model);
				alignment = determineAlignment(this, tooltipSize);
				// Final Size and Position
				backgroundPoint = getBackgroundPoint(model, tooltipSize, alignment);
			} else {
				model.opacity = 0;
			}

			model.xAlign = alignment.xAlign;
			model.yAlign = alignment.yAlign;
			model.x = backgroundPoint.x;
			model.y = backgroundPoint.y;
			model.width = tooltipSize.width;
			model.height = tooltipSize.height;

			// Point where the caret on the tooltip points to
			model.caretX = tooltipPosition.x;
			model.caretY = tooltipPosition.y;

			me._model = model;

			if (changed && opts.custom) {
				opts.custom.call(me, model);
			}

			return me;
		},
		drawCaret: function(tooltipPoint, size) {
			var ctx = this._chart.ctx;
			var vm = this._view;
			var caretPosition = this.getCaretPosition(tooltipPoint, size, vm);

			ctx.lineTo(caretPosition.x1, caretPosition.y1);
			ctx.lineTo(caretPosition.x2, caretPosition.y2);
			ctx.lineTo(caretPosition.x3, caretPosition.y3);
		},
		getCaretPosition: function(tooltipPoint, size, vm) {
			var x1, x2, x3, y1, y2, y3;
			var caretSize = vm.caretSize;
			var cornerRadius = vm.cornerRadius;
			var xAlign = vm.xAlign;
			var yAlign = vm.yAlign;
			var ptX = tooltipPoint.x;
			var ptY = tooltipPoint.y;
			var width = size.width;
			var height = size.height;

			if (yAlign === 'center') {
				y2 = ptY + (height / 2);

				if (xAlign === 'left') {
					x1 = ptX;
					x2 = x1 - caretSize;
					x3 = x1;

					y1 = y2 + caretSize;
					y3 = y2 - caretSize;
				} else {
					x1 = ptX + width;
					x2 = x1 + caretSize;
					x3 = x1;

					y1 = y2 - caretSize;
					y3 = y2 + caretSize;
				}
			} else {
				if (xAlign === 'left') {
					x2 = ptX + cornerRadius + (caretSize);
					x1 = x2 - caretSize;
					x3 = x2 + caretSize;
				} else if (xAlign === 'right') {
					x2 = ptX + width - cornerRadius - caretSize;
					x1 = x2 - caretSize;
					x3 = x2 + caretSize;
				} else {
					x2 = ptX + (width / 2);
					x1 = x2 - caretSize;
					x3 = x2 + caretSize;
				}
				if (yAlign === 'top') {
					y1 = ptY;
					y2 = y1 - caretSize;
					y3 = y1;
				} else {
					y1 = ptY + height;
					y2 = y1 + caretSize;
					y3 = y1;
					// invert drawing order
					var tmp = x3;
					x3 = x1;
					x1 = tmp;
				}
			}
			return {x1: x1, x2: x2, x3: x3, y1: y1, y2: y2, y3: y3};
		},
		drawTitle: function(pt, vm, ctx, opacity) {
			var title = vm.title;

			if (title.length) {
				ctx.textAlign = vm._titleAlign;
				ctx.textBaseline = 'top';

				var titleFontSize = vm.titleFontSize;
				var titleSpacing = vm.titleSpacing;

				ctx.fillStyle = mergeOpacity(vm.titleFontColor, opacity);
				ctx.font = helpers.fontString(titleFontSize, vm._titleFontStyle, vm._titleFontFamily);

				var i, len;
				for (i = 0, len = title.length; i < len; ++i) {
					ctx.fillText(title[i], pt.x, pt.y);
					pt.y += titleFontSize + titleSpacing; // Line Height and spacing

					if (i + 1 === title.length) {
						pt.y += vm.titleMarginBottom - titleSpacing; // If Last, add margin, remove spacing
					}
				}
			}
		},
		drawBody: function(pt, vm, ctx, opacity) {
			var bodyFontSize = vm.bodyFontSize;
			var bodySpacing = vm.bodySpacing;
			var body = vm.body;

			ctx.textAlign = vm._bodyAlign;
			ctx.textBaseline = 'top';
			ctx.font = helpers.fontString(bodyFontSize, vm._bodyFontStyle, vm._bodyFontFamily);

			// Before Body
			var xLinePadding = 0;
			var fillLineOfText = function(line) {
				ctx.fillText(line, pt.x + xLinePadding, pt.y);
				pt.y += bodyFontSize + bodySpacing;
			};

			// Before body lines
			ctx.fillStyle = mergeOpacity(vm.bodyFontColor, opacity);
			helpers.each(vm.beforeBody, fillLineOfText);

			var drawColorBoxes = vm.displayColors;
			xLinePadding = drawColorBoxes ? (bodyFontSize + 2) : 0;

			// Draw body lines now
			helpers.each(body, function(bodyItem, i) {
				var textColor = mergeOpacity(vm.labelTextColors[i], opacity);
				ctx.fillStyle = textColor;
				helpers.each(bodyItem.before, fillLineOfText);

				helpers.each(bodyItem.lines, function(line) {
					// Draw Legend-like boxes if needed
					if (drawColorBoxes) {
						// Fill a white rect so that colours merge nicely if the opacity is < 1
						ctx.fillStyle = mergeOpacity(vm.legendColorBackground, opacity);
						ctx.fillRect(pt.x, pt.y, bodyFontSize, bodyFontSize);

						// Border
						ctx.lineWidth = 1;
						ctx.strokeStyle = mergeOpacity(vm.labelColors[i].borderColor, opacity);
						ctx.strokeRect(pt.x, pt.y, bodyFontSize, bodyFontSize);

						// Inner square
						ctx.fillStyle = mergeOpacity(vm.labelColors[i].backgroundColor, opacity);
						ctx.fillRect(pt.x + 1, pt.y + 1, bodyFontSize - 2, bodyFontSize - 2);
						ctx.fillStyle = textColor;
					}

					fillLineOfText(line);
				});

				helpers.each(bodyItem.after, fillLineOfText);
			});

			// Reset back to 0 for after body
			xLinePadding = 0;

			// After body lines
			helpers.each(vm.afterBody, fillLineOfText);
			pt.y -= bodySpacing; // Remove last body spacing
		},
		drawFooter: function(pt, vm, ctx, opacity) {
			var footer = vm.footer;

			if (footer.length) {
				pt.y += vm.footerMarginTop;

				ctx.textAlign = vm._footerAlign;
				ctx.textBaseline = 'top';

				ctx.fillStyle = mergeOpacity(vm.footerFontColor, opacity);
				ctx.font = helpers.fontString(vm.footerFontSize, vm._footerFontStyle, vm._footerFontFamily);

				helpers.each(footer, function(line) {
					ctx.fillText(line, pt.x, pt.y);
					pt.y += vm.footerFontSize + vm.footerSpacing;
				});
			}
		},
		drawBackground: function(pt, vm, ctx, tooltipSize, opacity) {
			ctx.fillStyle = mergeOpacity(vm.backgroundColor, opacity);
			ctx.strokeStyle = mergeOpacity(vm.borderColor, opacity);
			ctx.lineWidth = vm.borderWidth;
			var xAlign = vm.xAlign;
			var yAlign = vm.yAlign;
			var x = pt.x;
			var y = pt.y;
			var width = tooltipSize.width;
			var height = tooltipSize.height;
			var radius = vm.cornerRadius;

			ctx.beginPath();
			ctx.moveTo(x + radius, y);
			if (yAlign === 'top') {
				this.drawCaret(pt, tooltipSize);
			}
			ctx.lineTo(x + width - radius, y);
			ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
			if (yAlign === 'center' && xAlign === 'right') {
				this.drawCaret(pt, tooltipSize);
			}
			ctx.lineTo(x + width, y + height - radius);
			ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
			if (yAlign === 'bottom') {
				this.drawCaret(pt, tooltipSize);
			}
			ctx.lineTo(x + radius, y + height);
			ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
			if (yAlign === 'center' && xAlign === 'left') {
				this.drawCaret(pt, tooltipSize);
			}
			ctx.lineTo(x, y + radius);
			ctx.quadraticCurveTo(x, y, x + radius, y);
			ctx.closePath();

			ctx.fill();

			if (vm.borderWidth > 0) {
				ctx.stroke();
			}
		},
		draw: function() {
			var ctx = this._chart.ctx;
			var vm = this._view;

			if (vm.opacity === 0) {
				return;
			}

			var tooltipSize = {
				width: vm.width,
				height: vm.height
			};
			var pt = {
				x: vm.x,
				y: vm.y
			};

			// IE11/Edge does not like very small opacities, so snap to 0
			var opacity = Math.abs(vm.opacity < 1e-3) ? 0 : vm.opacity;

			// Truthy/falsey value for empty tooltip
			var hasTooltipContent = vm.title.length || vm.beforeBody.length || vm.body.length || vm.afterBody.length || vm.footer.length;

			if (this._options.enabled && hasTooltipContent) {
				// Draw Background
				this.drawBackground(pt, vm, ctx, tooltipSize, opacity);

				// Draw Title, Body, and Footer
				pt.x += vm.xPadding;
				pt.y += vm.yPadding;

				// Titles
				this.drawTitle(pt, vm, ctx, opacity);

				// Body
				this.drawBody(pt, vm, ctx, opacity);

				// Footer
				this.drawFooter(pt, vm, ctx, opacity);
			}
		},

		/**
		 * Handle an event
		 * @private
		 * @param {IEvent} event - The event to handle
		 * @returns {Boolean} true if the tooltip changed
		 */
		handleEvent: function(e) {
			var me = this;
			var options = me._options;
			var changed = false;

			me._lastActive = me._lastActive || [];

			// Find Active Elements for tooltips
			if (e.type === 'mouseout') {
				me._active = [];
			} else {
				me._active = me._chart.getElementsAtEventForMode(e, options.mode, options);
			}

			// Remember Last Actives
			changed = !helpers.arrayEquals(me._active, me._lastActive);

			// If tooltip didn't change, do not handle the target event
			if (!changed) {
				return false;
			}

			me._lastActive = me._active;

			if (options.enabled || options.custom) {
				me._eventPosition = {
					x: e.x,
					y: e.y
				};

				var model = me._model;
				me.update(true);
				me.pivot();

				// See if our tooltip position changed
				changed |= (model.x !== me._model.x) || (model.y !== me._model.y);
			}

			return changed;
		}
	});

	/**
	 * @namespace Chart.Tooltip.positioners
	 */
	Chart.Tooltip.positioners = {
		/**
		 * Average mode places the tooltip at the average position of the elements shown
		 * @function Chart.Tooltip.positioners.average
		 * @param elements {ChartElement[]} the elements being displayed in the tooltip
		 * @returns {Point} tooltip position
		 */
		average: function(elements) {
			if (!elements.length) {
				return false;
			}

			var i, len;
			var x = 0;
			var y = 0;
			var count = 0;

			for (i = 0, len = elements.length; i < len; ++i) {
				var el = elements[i];
				if (el && el.hasValue()) {
					var pos = el.tooltipPosition();
					x += pos.x;
					y += pos.y;
					++count;
				}
			}

			return {
				x: Math.round(x / count),
				y: Math.round(y / count)
			};
		},

		/**
		 * Gets the tooltip position nearest of the item nearest to the event position
		 * @function Chart.Tooltip.positioners.nearest
		 * @param elements {Chart.Element[]} the tooltip elements
		 * @param eventPosition {Point} the position of the event in canvas coordinates
		 * @returns {Point} the tooltip position
		 */
		nearest: function(elements, eventPosition) {
			var x = eventPosition.x;
			var y = eventPosition.y;
			var minDistance = Number.POSITIVE_INFINITY;
			var i, len, nearestElement;

			for (i = 0, len = elements.length; i < len; ++i) {
				var el = elements[i];
				if (el && el.hasValue()) {
					var center = el.getCenterPoint();
					var d = helpers.distanceBetweenPoints(eventPosition, center);

					if (d < minDistance) {
						minDistance = d;
						nearestElement = el;
					}
				}
			}

			if (nearestElement) {
				var tp = nearestElement.tooltipPosition();
				x = tp.x;
				y = tp.y;
			}

			return {
				x: x,
				y: y
			};
		}
	};
};

},{"25":25,"26":26,"45":45}],36:[function(require,module,exports){
'use strict';

var defaults = require(25);
var Element = require(26);
var helpers = require(45);

defaults._set('global', {
	elements: {
		arc: {
			backgroundColor: defaults.global.defaultColor,
			borderColor: '#fff',
			borderWidth: 2
		}
	}
});

module.exports = Element.extend({
	inLabelRange: function(mouseX) {
		var vm = this._view;

		if (vm) {
			return (Math.pow(mouseX - vm.x, 2) < Math.pow(vm.radius + vm.hoverRadius, 2));
		}
		return false;
	},

	inRange: function(chartX, chartY) {
		var vm = this._view;

		if (vm) {
			var pointRelativePosition = helpers.getAngleFromPoint(vm, {x: chartX, y: chartY});
			var	angle = pointRelativePosition.angle;
			var distance = pointRelativePosition.distance;

			// Sanitise angle range
			var startAngle = vm.startAngle;
			var endAngle = vm.endAngle;
			while (endAngle < startAngle) {
				endAngle += 2.0 * Math.PI;
			}
			while (angle > endAngle) {
				angle -= 2.0 * Math.PI;
			}
			while (angle < startAngle) {
				angle += 2.0 * Math.PI;
			}

			// Check if within the range of the open/close angle
			var betweenAngles = (angle >= startAngle && angle <= endAngle);
			var withinRadius = (distance >= vm.innerRadius && distance <= vm.outerRadius);

			return (betweenAngles && withinRadius);
		}
		return false;
	},

	getCenterPoint: function() {
		var vm = this._view;
		var halfAngle = (vm.startAngle + vm.endAngle) / 2;
		var halfRadius = (vm.innerRadius + vm.outerRadius) / 2;
		return {
			x: vm.x + Math.cos(halfAngle) * halfRadius,
			y: vm.y + Math.sin(halfAngle) * halfRadius
		};
	},

	getArea: function() {
		var vm = this._view;
		return Math.PI * ((vm.endAngle - vm.startAngle) / (2 * Math.PI)) * (Math.pow(vm.outerRadius, 2) - Math.pow(vm.innerRadius, 2));
	},

	tooltipPosition: function() {
		var vm = this._view;
		var centreAngle = vm.startAngle + ((vm.endAngle - vm.startAngle) / 2);
		var rangeFromCentre = (vm.outerRadius - vm.innerRadius) / 2 + vm.innerRadius;

		return {
			x: vm.x + (Math.cos(centreAngle) * rangeFromCentre),
			y: vm.y + (Math.sin(centreAngle) * rangeFromCentre)
		};
	},

	draw: function() {
		var ctx = this._chart.ctx;
		var vm = this._view;
		var sA = vm.startAngle;
		var eA = vm.endAngle;

		ctx.beginPath();

		ctx.arc(vm.x, vm.y, vm.outerRadius, sA, eA);
		ctx.arc(vm.x, vm.y, vm.innerRadius, eA, sA, true);

		ctx.closePath();
		ctx.strokeStyle = vm.borderColor;
		ctx.lineWidth = vm.borderWidth;

		ctx.fillStyle = vm.backgroundColor;

		ctx.fill();
		ctx.lineJoin = 'bevel';

		if (vm.borderWidth) {
			ctx.stroke();
		}
	}
});

},{"25":25,"26":26,"45":45}],37:[function(require,module,exports){
'use strict';

var defaults = require(25);
var Element = require(26);
var helpers = require(45);

var globalDefaults = defaults.global;

defaults._set('global', {
	elements: {
		line: {
			tension: 0.4,
			backgroundColor: globalDefaults.defaultColor,
			borderWidth: 3,
			borderColor: globalDefaults.defaultColor,
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			capBezierPoints: true,
			fill: true, // do we fill in the area between the line and its base axis
		}
	}
});

module.exports = Element.extend({
	draw: function() {
		var me = this;
		var vm = me._view;
		var ctx = me._chart.ctx;
		var spanGaps = vm.spanGaps;
		var points = me._children.slice(); // clone array
		var globalOptionLineElements = globalDefaults.elements.line;
		var lastDrawnIndex = -1;
		var index, current, previous, currentVM;

		// If we are looping, adding the first point again
		if (me._loop && points.length) {
			points.push(points[0]);
		}

		ctx.save();

		// Stroke Line Options
		ctx.lineCap = vm.borderCapStyle || globalOptionLineElements.borderCapStyle;

		// IE 9 and 10 do not support line dash
		if (ctx.setLineDash) {
			ctx.setLineDash(vm.borderDash || globalOptionLineElements.borderDash);
		}

		ctx.lineDashOffset = vm.borderDashOffset || globalOptionLineElements.borderDashOffset;
		ctx.lineJoin = vm.borderJoinStyle || globalOptionLineElements.borderJoinStyle;
		ctx.lineWidth = vm.borderWidth || globalOptionLineElements.borderWidth;
		ctx.strokeStyle = vm.borderColor || globalDefaults.defaultColor;

		// Stroke Line
		ctx.beginPath();
		lastDrawnIndex = -1;

		for (index = 0; index < points.length; ++index) {
			current = points[index];
			previous = helpers.previousItem(points, index);
			currentVM = current._view;

			// First point moves to it's starting position no matter what
			if (index === 0) {
				if (!currentVM.skip) {
					ctx.moveTo(currentVM.x, currentVM.y);
					lastDrawnIndex = index;
				}
			} else {
				previous = lastDrawnIndex === -1 ? previous : points[lastDrawnIndex];

				if (!currentVM.skip) {
					if ((lastDrawnIndex !== (index - 1) && !spanGaps) || lastDrawnIndex === -1) {
						// There was a gap and this is the first point after the gap
						ctx.moveTo(currentVM.x, currentVM.y);
					} else {
						// Line to next point
						helpers.canvas.lineTo(ctx, previous._view, current._view);
					}
					lastDrawnIndex = index;
				}
			}
		}

		ctx.stroke();
		ctx.restore();
	}
});

},{"25":25,"26":26,"45":45}],38:[function(require,module,exports){
'use strict';

var defaults = require(25);
var Element = require(26);
var helpers = require(45);

var defaultColor = defaults.global.defaultColor;

defaults._set('global', {
	elements: {
		point: {
			radius: 3,
			pointStyle: 'circle',
			backgroundColor: defaultColor,
			borderColor: defaultColor,
			borderWidth: 1,
			// Hover
			hitRadius: 1,
			hoverRadius: 4,
			hoverBorderWidth: 1
		}
	}
});

function xRange(mouseX) {
	var vm = this._view;
	return vm ? (Math.pow(mouseX - vm.x, 2) < Math.pow(vm.radius + vm.hitRadius, 2)) : false;
}

function yRange(mouseY) {
	var vm = this._view;
	return vm ? (Math.pow(mouseY - vm.y, 2) < Math.pow(vm.radius + vm.hitRadius, 2)) : false;
}

module.exports = Element.extend({
	inRange: function(mouseX, mouseY) {
		var vm = this._view;
		return vm ? ((Math.pow(mouseX - vm.x, 2) + Math.pow(mouseY - vm.y, 2)) < Math.pow(vm.hitRadius + vm.radius, 2)) : false;
	},

	inLabelRange: xRange,
	inXRange: xRange,
	inYRange: yRange,

	getCenterPoint: function() {
		var vm = this._view;
		return {
			x: vm.x,
			y: vm.y
		};
	},

	getArea: function() {
		return Math.PI * Math.pow(this._view.radius, 2);
	},

	tooltipPosition: function() {
		var vm = this._view;
		return {
			x: vm.x,
			y: vm.y,
			padding: vm.radius + vm.borderWidth
		};
	},

	draw: function(chartArea) {
		var vm = this._view;
		var model = this._model;
		var ctx = this._chart.ctx;
		var pointStyle = vm.pointStyle;
		var radius = vm.radius;
		var x = vm.x;
		var y = vm.y;
		var color = helpers.color;
		var errMargin = 1.01; // 1.01 is margin for Accumulated error. (Especially Edge, IE.)
		var ratio = 0;

		if (vm.skip) {
			return;
		}

		ctx.strokeStyle = vm.borderColor || defaultColor;
		ctx.lineWidth = helpers.valueOrDefault(vm.borderWidth, defaults.global.elements.point.borderWidth);
		ctx.fillStyle = vm.backgroundColor || defaultColor;

		// Cliping for Points.
		// going out from inner charArea?
		if ((chartArea !== undefined) && ((model.x < chartArea.left) || (chartArea.right * errMargin < model.x) || (model.y < chartArea.top) || (chartArea.bottom * errMargin < model.y))) {
			// Point fade out
			if (model.x < chartArea.left) {
				ratio = (x - model.x) / (chartArea.left - model.x);
			} else if (chartArea.right * errMargin < model.x) {
				ratio = (model.x - x) / (model.x - chartArea.right);
			} else if (model.y < chartArea.top) {
				ratio = (y - model.y) / (chartArea.top - model.y);
			} else if (chartArea.bottom * errMargin < model.y) {
				ratio = (model.y - y) / (model.y - chartArea.bottom);
			}
			ratio = Math.round(ratio * 100) / 100;
			ctx.strokeStyle = color(ctx.strokeStyle).alpha(ratio).rgbString();
			ctx.fillStyle = color(ctx.fillStyle).alpha(ratio).rgbString();
		}

		helpers.canvas.drawPoint(ctx, pointStyle, radius, x, y);
	}
});

},{"25":25,"26":26,"45":45}],39:[function(require,module,exports){
'use strict';

var defaults = require(25);
var Element = require(26);

defaults._set('global', {
	elements: {
		rectangle: {
			backgroundColor: defaults.global.defaultColor,
			borderColor: defaults.global.defaultColor,
			borderSkipped: 'bottom',
			borderWidth: 0
		}
	}
});

function isVertical(bar) {
	return bar._view.width !== undefined;
}

/**
 * Helper function to get the bounds of the bar regardless of the orientation
 * @param bar {Chart.Element.Rectangle} the bar
 * @return {Bounds} bounds of the bar
 * @private
 */
function getBarBounds(bar) {
	var vm = bar._view;
	var x1, x2, y1, y2;

	if (isVertical(bar)) {
		// vertical
		var halfWidth = vm.width / 2;
		x1 = vm.x - halfWidth;
		x2 = vm.x + halfWidth;
		y1 = Math.min(vm.y, vm.base);
		y2 = Math.max(vm.y, vm.base);
	} else {
		// horizontal bar
		var halfHeight = vm.height / 2;
		x1 = Math.min(vm.x, vm.base);
		x2 = Math.max(vm.x, vm.base);
		y1 = vm.y - halfHeight;
		y2 = vm.y + halfHeight;
	}

	return {
		left: x1,
		top: y1,
		right: x2,
		bottom: y2
	};
}

module.exports = Element.extend({
	draw: function() {
		var ctx = this._chart.ctx;
		var vm = this._view;
		var left, right, top, bottom, signX, signY, borderSkipped;
		var borderWidth = vm.borderWidth;

		if (!vm.horizontal) {
			// bar
			left = vm.x - vm.width / 2;
			right = vm.x + vm.width / 2;
			top = vm.y;
			bottom = vm.base;
			signX = 1;
			signY = bottom > top ? 1 : -1;
			borderSkipped = vm.borderSkipped || 'bottom';
		} else {
			// horizontal bar
			left = vm.base;
			right = vm.x;
			top = vm.y - vm.height / 2;
			bottom = vm.y + vm.height / 2;
			signX = right > left ? 1 : -1;
			signY = 1;
			borderSkipped = vm.borderSkipped || 'left';
		}

		// Canvas doesn't allow us to stroke inside the width so we can
		// adjust the sizes to fit if we're setting a stroke on the line
		if (borderWidth) {
			// borderWidth shold be less than bar width and bar height.
			var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
			borderWidth = borderWidth > barSize ? barSize : borderWidth;
			var halfStroke = borderWidth / 2;
			// Adjust borderWidth when bar top position is near vm.base(zero).
			var borderLeft = left + (borderSkipped !== 'left' ? halfStroke * signX : 0);
			var borderRight = right + (borderSkipped !== 'right' ? -halfStroke * signX : 0);
			var borderTop = top + (borderSkipped !== 'top' ? halfStroke * signY : 0);
			var borderBottom = bottom + (borderSkipped !== 'bottom' ? -halfStroke * signY : 0);
			// not become a vertical line?
			if (borderLeft !== borderRight) {
				top = borderTop;
				bottom = borderBottom;
			}
			// not become a horizontal line?
			if (borderTop !== borderBottom) {
				left = borderLeft;
				right = borderRight;
			}
		}

		ctx.beginPath();
		ctx.fillStyle = vm.backgroundColor;
		ctx.strokeStyle = vm.borderColor;
		ctx.lineWidth = borderWidth;

		// Corner points, from bottom-left to bottom-right clockwise
		// | 1 2 |
		// | 0 3 |
		var corners = [
			[left, bottom],
			[left, top],
			[right, top],
			[right, bottom]
		];

		// Find first (starting) corner with fallback to 'bottom'
		var borders = ['bottom', 'left', 'top', 'right'];
		var startCorner = borders.indexOf(borderSkipped, 0);
		if (startCorner === -1) {
			startCorner = 0;
		}

		function cornerAt(index) {
			return corners[(startCorner + index) % 4];
		}

		// Draw rectangle from 'startCorner'
		var corner = cornerAt(0);
		ctx.moveTo(corner[0], corner[1]);

		for (var i = 1; i < 4; i++) {
			corner = cornerAt(i);
			ctx.lineTo(corner[0], corner[1]);
		}

		ctx.fill();
		if (borderWidth) {
			ctx.stroke();
		}
	},

	height: function() {
		var vm = this._view;
		return vm.base - vm.y;
	},

	inRange: function(mouseX, mouseY) {
		var inRange = false;

		if (this._view) {
			var bounds = getBarBounds(this);
			inRange = mouseX >= bounds.left && mouseX <= bounds.right && mouseY >= bounds.top && mouseY <= bounds.bottom;
		}

		return inRange;
	},

	inLabelRange: function(mouseX, mouseY) {
		var me = this;
		if (!me._view) {
			return false;
		}

		var inRange = false;
		var bounds = getBarBounds(me);

		if (isVertical(me)) {
			inRange = mouseX >= bounds.left && mouseX <= bounds.right;
		} else {
			inRange = mouseY >= bounds.top && mouseY <= bounds.bottom;
		}

		return inRange;
	},

	inXRange: function(mouseX) {
		var bounds = getBarBounds(this);
		return mouseX >= bounds.left && mouseX <= bounds.right;
	},

	inYRange: function(mouseY) {
		var bounds = getBarBounds(this);
		return mouseY >= bounds.top && mouseY <= bounds.bottom;
	},

	getCenterPoint: function() {
		var vm = this._view;
		var x, y;
		if (isVertical(this)) {
			x = vm.x;
			y = (vm.y + vm.base) / 2;
		} else {
			x = (vm.x + vm.base) / 2;
			y = vm.y;
		}

		return {x: x, y: y};
	},

	getArea: function() {
		var vm = this._view;
		return vm.width * Math.abs(vm.y - vm.base);
	},

	tooltipPosition: function() {
		var vm = this._view;
		return {
			x: vm.x,
			y: vm.y
		};
	}
});

},{"25":25,"26":26}],40:[function(require,module,exports){
'use strict';

module.exports = {};
module.exports.Arc = require(36);
module.exports.Line = require(37);
module.exports.Point = require(38);
module.exports.Rectangle = require(39);

},{"36":36,"37":37,"38":38,"39":39}],41:[function(require,module,exports){
'use strict';

var helpers = require(42);

/**
 * @namespace Chart.helpers.canvas
 */
var exports = module.exports = {
	/**
	 * Clears the entire canvas associated to the given `chart`.
	 * @param {Chart} chart - The chart for which to clear the canvas.
	 */
	clear: function(chart) {
		chart.ctx.clearRect(0, 0, chart.width, chart.height);
	},

	/**
	 * Creates a "path" for a rectangle with rounded corners at position (x, y) with a
	 * given size (width, height) and the same `radius` for all corners.
	 * @param {CanvasRenderingContext2D} ctx - The canvas 2D Context.
	 * @param {Number} x - The x axis of the coordinate for the rectangle starting point.
	 * @param {Number} y - The y axis of the coordinate for the rectangle starting point.
	 * @param {Number} width - The rectangle's width.
	 * @param {Number} height - The rectangle's height.
	 * @param {Number} radius - The rounded amount (in pixels) for the four corners.
	 * @todo handle `radius` as top-left, top-right, bottom-right, bottom-left array/object?
	 */
	roundedRect: function(ctx, x, y, width, height, radius) {
		if (radius) {
			var rx = Math.min(radius, width / 2);
			var ry = Math.min(radius, height / 2);

			ctx.moveTo(x + rx, y);
			ctx.lineTo(x + width - rx, y);
			ctx.quadraticCurveTo(x + width, y, x + width, y + ry);
			ctx.lineTo(x + width, y + height - ry);
			ctx.quadraticCurveTo(x + width, y + height, x + width - rx, y + height);
			ctx.lineTo(x + rx, y + height);
			ctx.quadraticCurveTo(x, y + height, x, y + height - ry);
			ctx.lineTo(x, y + ry);
			ctx.quadraticCurveTo(x, y, x + rx, y);
		} else {
			ctx.rect(x, y, width, height);
		}
	},

	drawPoint: function(ctx, style, radius, x, y) {
		var type, edgeLength, xOffset, yOffset, height, size;

		if (style && typeof style === 'object') {
			type = style.toString();
			if (type === '[object HTMLImageElement]' || type === '[object HTMLCanvasElement]') {
				ctx.drawImage(style, x - style.width / 2, y - style.height / 2, style.width, style.height);
				return;
			}
		}

		if (isNaN(radius) || radius <= 0) {
			return;
		}

		switch (style) {
		// Default includes circle
		default:
			ctx.beginPath();
			ctx.arc(x, y, radius, 0, Math.PI * 2);
			ctx.closePath();
			ctx.fill();
			break;
		case 'triangle':
			ctx.beginPath();
			edgeLength = 3 * radius / Math.sqrt(3);
			height = edgeLength * Math.sqrt(3) / 2;
			ctx.moveTo(x - edgeLength / 2, y + height / 3);
			ctx.lineTo(x + edgeLength / 2, y + height / 3);
			ctx.lineTo(x, y - 2 * height / 3);
			ctx.closePath();
			ctx.fill();
			break;
		case 'rect':
			size = 1 / Math.SQRT2 * radius;
			ctx.beginPath();
			ctx.fillRect(x - size, y - size, 2 * size, 2 * size);
			ctx.strokeRect(x - size, y - size, 2 * size, 2 * size);
			break;
		case 'rectRounded':
			var offset = radius / Math.SQRT2;
			var leftX = x - offset;
			var topY = y - offset;
			var sideSize = Math.SQRT2 * radius;
			ctx.beginPath();
			this.roundedRect(ctx, leftX, topY, sideSize, sideSize, radius / 2);
			ctx.closePath();
			ctx.fill();
			break;
		case 'rectRot':
			size = 1 / Math.SQRT2 * radius;
			ctx.beginPath();
			ctx.moveTo(x - size, y);
			ctx.lineTo(x, y + size);
			ctx.lineTo(x + size, y);
			ctx.lineTo(x, y - size);
			ctx.closePath();
			ctx.fill();
			break;
		case 'cross':
			ctx.beginPath();
			ctx.moveTo(x, y + radius);
			ctx.lineTo(x, y - radius);
			ctx.moveTo(x - radius, y);
			ctx.lineTo(x + radius, y);
			ctx.closePath();
			break;
		case 'crossRot':
			ctx.beginPath();
			xOffset = Math.cos(Math.PI / 4) * radius;
			yOffset = Math.sin(Math.PI / 4) * radius;
			ctx.moveTo(x - xOffset, y - yOffset);
			ctx.lineTo(x + xOffset, y + yOffset);
			ctx.moveTo(x - xOffset, y + yOffset);
			ctx.lineTo(x + xOffset, y - yOffset);
			ctx.closePath();
			break;
		case 'star':
			ctx.beginPath();
			ctx.moveTo(x, y + radius);
			ctx.lineTo(x, y - radius);
			ctx.moveTo(x - radius, y);
			ctx.lineTo(x + radius, y);
			xOffset = Math.cos(Math.PI / 4) * radius;
			yOffset = Math.sin(Math.PI / 4) * radius;
			ctx.moveTo(x - xOffset, y - yOffset);
			ctx.lineTo(x + xOffset, y + yOffset);
			ctx.moveTo(x - xOffset, y + yOffset);
			ctx.lineTo(x + xOffset, y - yOffset);
			ctx.closePath();
			break;
		case 'line':
			ctx.beginPath();
			ctx.moveTo(x - radius, y);
			ctx.lineTo(x + radius, y);
			ctx.closePath();
			break;
		case 'dash':
			ctx.beginPath();
			ctx.moveTo(x, y);
			ctx.lineTo(x + radius, y);
			ctx.closePath();
			break;
		}

		ctx.stroke();
	},

	clipArea: function(ctx, area) {
		ctx.save();
		ctx.beginPath();
		ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
		ctx.clip();
	},

	unclipArea: function(ctx) {
		ctx.restore();
	},

	lineTo: function(ctx, previous, target, flip) {
		if (target.steppedLine) {
			if ((target.steppedLine === 'after' && !flip) || (target.steppedLine !== 'after' && flip)) {
				ctx.lineTo(previous.x, target.y);
			} else {
				ctx.lineTo(target.x, previous.y);
			}
			ctx.lineTo(target.x, target.y);
			return;
		}

		if (!target.tension) {
			ctx.lineTo(target.x, target.y);
			return;
		}

		ctx.bezierCurveTo(
			flip ? previous.controlPointPreviousX : previous.controlPointNextX,
			flip ? previous.controlPointPreviousY : previous.controlPointNextY,
			flip ? target.controlPointNextX : target.controlPointPreviousX,
			flip ? target.controlPointNextY : target.controlPointPreviousY,
			target.x,
			target.y);
	}
};

// DEPRECATIONS

/**
 * Provided for backward compatibility, use Chart.helpers.canvas.clear instead.
 * @namespace Chart.helpers.clear
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers.clear = exports.clear;

/**
 * Provided for backward compatibility, use Chart.helpers.canvas.roundedRect instead.
 * @namespace Chart.helpers.drawRoundedRectangle
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers.drawRoundedRectangle = function(ctx) {
	ctx.beginPath();
	exports.roundedRect.apply(exports, arguments);
	ctx.closePath();
};

},{"42":42}],42:[function(require,module,exports){
'use strict';

/**
 * @namespace Chart.helpers
 */
var helpers = {
	/**
	 * An empty function that can be used, for example, for optional callback.
	 */
	noop: function() {},

	/**
	 * Returns a unique id, sequentially generated from a global variable.
	 * @returns {Number}
	 * @function
	 */
	uid: (function() {
		var id = 0;
		return function() {
			return id++;
		};
	}()),

	/**
	 * Returns true if `value` is neither null nor undefined, else returns false.
	 * @param {*} value - The value to test.
	 * @returns {Boolean}
	 * @since 2.7.0
	 */
	isNullOrUndef: function(value) {
		return value === null || typeof value === 'undefined';
	},

	/**
	 * Returns true if `value` is an array, else returns false.
	 * @param {*} value - The value to test.
	 * @returns {Boolean}
	 * @function
	 */
	isArray: Array.isArray ? Array.isArray : function(value) {
		return Object.prototype.toString.call(value) === '[object Array]';
	},

	/**
	 * Returns true if `value` is an object (excluding null), else returns false.
	 * @param {*} value - The value to test.
	 * @returns {Boolean}
	 * @since 2.7.0
	 */
	isObject: function(value) {
		return value !== null && Object.prototype.toString.call(value) === '[object Object]';
	},

	/**
	 * Returns `value` if defined, else returns `defaultValue`.
	 * @param {*} value - The value to return if defined.
	 * @param {*} defaultValue - The value to return if `value` is undefined.
	 * @returns {*}
	 */
	valueOrDefault: function(value, defaultValue) {
		return typeof value === 'undefined' ? defaultValue : value;
	},

	/**
	 * Returns value at the given `index` in array if defined, else returns `defaultValue`.
	 * @param {Array} value - The array to lookup for value at `index`.
	 * @param {Number} index - The index in `value` to lookup for value.
	 * @param {*} defaultValue - The value to return if `value[index]` is undefined.
	 * @returns {*}
	 */
	valueAtIndexOrDefault: function(value, index, defaultValue) {
		return helpers.valueOrDefault(helpers.isArray(value) ? value[index] : value, defaultValue);
	},

	/**
	 * Calls `fn` with the given `args` in the scope defined by `thisArg` and returns the
	 * value returned by `fn`. If `fn` is not a function, this method returns undefined.
	 * @param {Function} fn - The function to call.
	 * @param {Array|undefined|null} args - The arguments with which `fn` should be called.
	 * @param {Object} [thisArg] - The value of `this` provided for the call to `fn`.
	 * @returns {*}
	 */
	callback: function(fn, args, thisArg) {
		if (fn && typeof fn.call === 'function') {
			return fn.apply(thisArg, args);
		}
	},

	/**
	 * Note(SB) for performance sake, this method should only be used when loopable type
	 * is unknown or in none intensive code (not called often and small loopable). Else
	 * it's preferable to use a regular for() loop and save extra function calls.
	 * @param {Object|Array} loopable - The object or array to be iterated.
	 * @param {Function} fn - The function to call for each item.
	 * @param {Object} [thisArg] - The value of `this` provided for the call to `fn`.
	 * @param {Boolean} [reverse] - If true, iterates backward on the loopable.
	 */
	each: function(loopable, fn, thisArg, reverse) {
		var i, len, keys;
		if (helpers.isArray(loopable)) {
			len = loopable.length;
			if (reverse) {
				for (i = len - 1; i >= 0; i--) {
					fn.call(thisArg, loopable[i], i);
				}
			} else {
				for (i = 0; i < len; i++) {
					fn.call(thisArg, loopable[i], i);
				}
			}
		} else if (helpers.isObject(loopable)) {
			keys = Object.keys(loopable);
			len = keys.length;
			for (i = 0; i < len; i++) {
				fn.call(thisArg, loopable[keys[i]], keys[i]);
			}
		}
	},

	/**
	 * Returns true if the `a0` and `a1` arrays have the same content, else returns false.
	 * @see http://stackoverflow.com/a/14853974
	 * @param {Array} a0 - The array to compare
	 * @param {Array} a1 - The array to compare
	 * @returns {Boolean}
	 */
	arrayEquals: function(a0, a1) {
		var i, ilen, v0, v1;

		if (!a0 || !a1 || a0.length !== a1.length) {
			return false;
		}

		for (i = 0, ilen = a0.length; i < ilen; ++i) {
			v0 = a0[i];
			v1 = a1[i];

			if (v0 instanceof Array && v1 instanceof Array) {
				if (!helpers.arrayEquals(v0, v1)) {
					return false;
				}
			} else if (v0 !== v1) {
				// NOTE: two different object instances will never be equal: {x:20} != {x:20}
				return false;
			}
		}

		return true;
	},

	/**
	 * Returns a deep copy of `source` without keeping references on objects and arrays.
	 * @param {*} source - The value to clone.
	 * @returns {*}
	 */
	clone: function(source) {
		if (helpers.isArray(source)) {
			return source.map(helpers.clone);
		}

		if (helpers.isObject(source)) {
			var target = {};
			var keys = Object.keys(source);
			var klen = keys.length;
			var k = 0;

			for (; k < klen; ++k) {
				target[keys[k]] = helpers.clone(source[keys[k]]);
			}

			return target;
		}

		return source;
	},

	/**
	 * The default merger when Chart.helpers.merge is called without merger option.
	 * Note(SB): this method is also used by configMerge and scaleMerge as fallback.
	 * @private
	 */
	_merger: function(key, target, source, options) {
		var tval = target[key];
		var sval = source[key];

		if (helpers.isObject(tval) && helpers.isObject(sval)) {
			helpers.merge(tval, sval, options);
		} else {
			target[key] = helpers.clone(sval);
		}
	},

	/**
	 * Merges source[key] in target[key] only if target[key] is undefined.
	 * @private
	 */
	_mergerIf: function(key, target, source) {
		var tval = target[key];
		var sval = source[key];

		if (helpers.isObject(tval) && helpers.isObject(sval)) {
			helpers.mergeIf(tval, sval);
		} else if (!target.hasOwnProperty(key)) {
			target[key] = helpers.clone(sval);
		}
	},

	/**
	 * Recursively deep copies `source` properties into `target` with the given `options`.
	 * IMPORTANT: `target` is not cloned and will be updated with `source` properties.
	 * @param {Object} target - The target object in which all sources are merged into.
	 * @param {Object|Array(Object)} source - Object(s) to merge into `target`.
	 * @param {Object} [options] - Merging options:
	 * @param {Function} [options.merger] - The merge method (key, target, source, options)
	 * @returns {Object} The `target` object.
	 */
	merge: function(target, source, options) {
		var sources = helpers.isArray(source) ? source : [source];
		var ilen = sources.length;
		var merge, i, keys, klen, k;

		if (!helpers.isObject(target)) {
			return target;
		}

		options = options || {};
		merge = options.merger || helpers._merger;

		for (i = 0; i < ilen; ++i) {
			source = sources[i];
			if (!helpers.isObject(source)) {
				continue;
			}

			keys = Object.keys(source);
			for (k = 0, klen = keys.length; k < klen; ++k) {
				merge(keys[k], target, source, options);
			}
		}

		return target;
	},

	/**
	 * Recursively deep copies `source` properties into `target` *only* if not defined in target.
	 * IMPORTANT: `target` is not cloned and will be updated with `source` properties.
	 * @param {Object} target - The target object in which all sources are merged into.
	 * @param {Object|Array(Object)} source - Object(s) to merge into `target`.
	 * @returns {Object} The `target` object.
	 */
	mergeIf: function(target, source) {
		return helpers.merge(target, source, {merger: helpers._mergerIf});
	},

	/**
	 * Applies the contents of two or more objects together into the first object.
	 * @param {Object} target - The target object in which all objects are merged into.
	 * @param {Object} arg1 - Object containing additional properties to merge in target.
	 * @param {Object} argN - Additional objects containing properties to merge in target.
	 * @returns {Object} The `target` object.
	 */
	extend: function(target) {
		var setFn = function(value, key) {
			target[key] = value;
		};
		for (var i = 1, ilen = arguments.length; i < ilen; ++i) {
			helpers.each(arguments[i], setFn);
		}
		return target;
	},

	/**
	 * Basic javascript inheritance based on the model created in Backbone.js
	 */
	inherits: function(extensions) {
		var me = this;
		var ChartElement = (extensions && extensions.hasOwnProperty('constructor')) ? extensions.constructor : function() {
			return me.apply(this, arguments);
		};

		var Surrogate = function() {
			this.constructor = ChartElement;
		};

		Surrogate.prototype = me.prototype;
		ChartElement.prototype = new Surrogate();
		ChartElement.extend = helpers.inherits;

		if (extensions) {
			helpers.extend(ChartElement.prototype, extensions);
		}

		ChartElement.__super__ = me.prototype;
		return ChartElement;
	}
};

module.exports = helpers;

// DEPRECATIONS

/**
 * Provided for backward compatibility, use Chart.helpers.callback instead.
 * @function Chart.helpers.callCallback
 * @deprecated since version 2.6.0
 * @todo remove at version 3
 * @private
 */
helpers.callCallback = helpers.callback;

/**
 * Provided for backward compatibility, use Array.prototype.indexOf instead.
 * Array.prototype.indexOf compatibility: Chrome, Opera, Safari, FF1.5+, IE9+
 * @function Chart.helpers.indexOf
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers.indexOf = function(array, item, fromIndex) {
	return Array.prototype.indexOf.call(array, item, fromIndex);
};

/**
 * Provided for backward compatibility, use Chart.helpers.valueOrDefault instead.
 * @function Chart.helpers.getValueOrDefault
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers.getValueOrDefault = helpers.valueOrDefault;

/**
 * Provided for backward compatibility, use Chart.helpers.valueAtIndexOrDefault instead.
 * @function Chart.helpers.getValueAtIndexOrDefault
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers.getValueAtIndexOrDefault = helpers.valueAtIndexOrDefault;

},{}],43:[function(require,module,exports){
'use strict';

var helpers = require(42);

/**
 * Easing functions adapted from Robert Penner's easing equations.
 * @namespace Chart.helpers.easingEffects
 * @see http://www.robertpenner.com/easing/
 */
var effects = {
	linear: function(t) {
		return t;
	},

	easeInQuad: function(t) {
		return t * t;
	},

	easeOutQuad: function(t) {
		return -t * (t - 2);
	},

	easeInOutQuad: function(t) {
		if ((t /= 0.5) < 1) {
			return 0.5 * t * t;
		}
		return -0.5 * ((--t) * (t - 2) - 1);
	},

	easeInCubic: function(t) {
		return t * t * t;
	},

	easeOutCubic: function(t) {
		return (t = t - 1) * t * t + 1;
	},

	easeInOutCubic: function(t) {
		if ((t /= 0.5) < 1) {
			return 0.5 * t * t * t;
		}
		return 0.5 * ((t -= 2) * t * t + 2);
	},

	easeInQuart: function(t) {
		return t * t * t * t;
	},

	easeOutQuart: function(t) {
		return -((t = t - 1) * t * t * t - 1);
	},

	easeInOutQuart: function(t) {
		if ((t /= 0.5) < 1) {
			return 0.5 * t * t * t * t;
		}
		return -0.5 * ((t -= 2) * t * t * t - 2);
	},

	easeInQuint: function(t) {
		return t * t * t * t * t;
	},

	easeOutQuint: function(t) {
		return (t = t - 1) * t * t * t * t + 1;
	},

	easeInOutQuint: function(t) {
		if ((t /= 0.5) < 1) {
			return 0.5 * t * t * t * t * t;
		}
		return 0.5 * ((t -= 2) * t * t * t * t + 2);
	},

	easeInSine: function(t) {
		return -Math.cos(t * (Math.PI / 2)) + 1;
	},

	easeOutSine: function(t) {
		return Math.sin(t * (Math.PI / 2));
	},

	easeInOutSine: function(t) {
		return -0.5 * (Math.cos(Math.PI * t) - 1);
	},

	easeInExpo: function(t) {
		return (t === 0) ? 0 : Math.pow(2, 10 * (t - 1));
	},

	easeOutExpo: function(t) {
		return (t === 1) ? 1 : -Math.pow(2, -10 * t) + 1;
	},

	easeInOutExpo: function(t) {
		if (t === 0) {
			return 0;
		}
		if (t === 1) {
			return 1;
		}
		if ((t /= 0.5) < 1) {
			return 0.5 * Math.pow(2, 10 * (t - 1));
		}
		return 0.5 * (-Math.pow(2, -10 * --t) + 2);
	},

	easeInCirc: function(t) {
		if (t >= 1) {
			return t;
		}
		return -(Math.sqrt(1 - t * t) - 1);
	},

	easeOutCirc: function(t) {
		return Math.sqrt(1 - (t = t - 1) * t);
	},

	easeInOutCirc: function(t) {
		if ((t /= 0.5) < 1) {
			return -0.5 * (Math.sqrt(1 - t * t) - 1);
		}
		return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
	},

	easeInElastic: function(t) {
		var s = 1.70158;
		var p = 0;
		var a = 1;
		if (t === 0) {
			return 0;
		}
		if (t === 1) {
			return 1;
		}
		if (!p) {
			p = 0.3;
		}
		if (a < 1) {
			a = 1;
			s = p / 4;
		} else {
			s = p / (2 * Math.PI) * Math.asin(1 / a);
		}
		return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p));
	},

	easeOutElastic: function(t) {
		var s = 1.70158;
		var p = 0;
		var a = 1;
		if (t === 0) {
			return 0;
		}
		if (t === 1) {
			return 1;
		}
		if (!p) {
			p = 0.3;
		}
		if (a < 1) {
			a = 1;
			s = p / 4;
		} else {
			s = p / (2 * Math.PI) * Math.asin(1 / a);
		}
		return a * Math.pow(2, -10 * t) * Math.sin((t - s) * (2 * Math.PI) / p) + 1;
	},

	easeInOutElastic: function(t) {
		var s = 1.70158;
		var p = 0;
		var a = 1;
		if (t === 0) {
			return 0;
		}
		if ((t /= 0.5) === 2) {
			return 1;
		}
		if (!p) {
			p = 0.45;
		}
		if (a < 1) {
			a = 1;
			s = p / 4;
		} else {
			s = p / (2 * Math.PI) * Math.asin(1 / a);
		}
		if (t < 1) {
			return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p));
		}
		return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p) * 0.5 + 1;
	},
	easeInBack: function(t) {
		var s = 1.70158;
		return t * t * ((s + 1) * t - s);
	},

	easeOutBack: function(t) {
		var s = 1.70158;
		return (t = t - 1) * t * ((s + 1) * t + s) + 1;
	},

	easeInOutBack: function(t) {
		var s = 1.70158;
		if ((t /= 0.5) < 1) {
			return 0.5 * (t * t * (((s *= (1.525)) + 1) * t - s));
		}
		return 0.5 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2);
	},

	easeInBounce: function(t) {
		return 1 - effects.easeOutBounce(1 - t);
	},

	easeOutBounce: function(t) {
		if (t < (1 / 2.75)) {
			return 7.5625 * t * t;
		}
		if (t < (2 / 2.75)) {
			return 7.5625 * (t -= (1.5 / 2.75)) * t + 0.75;
		}
		if (t < (2.5 / 2.75)) {
			return 7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375;
		}
		return 7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375;
	},

	easeInOutBounce: function(t) {
		if (t < 0.5) {
			return effects.easeInBounce(t * 2) * 0.5;
		}
		return effects.easeOutBounce(t * 2 - 1) * 0.5 + 0.5;
	}
};

module.exports = {
	effects: effects
};

// DEPRECATIONS

/**
 * Provided for backward compatibility, use Chart.helpers.easing.effects instead.
 * @function Chart.helpers.easingEffects
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers.easingEffects = effects;

},{"42":42}],44:[function(require,module,exports){
'use strict';

var helpers = require(42);

/**
 * @alias Chart.helpers.options
 * @namespace
 */
module.exports = {
	/**
	 * Converts the given line height `value` in pixels for a specific font `size`.
	 * @param {Number|String} value - The lineHeight to parse (eg. 1.6, '14px', '75%', '1.6em').
	 * @param {Number} size - The font size (in pixels) used to resolve relative `value`.
	 * @returns {Number} The effective line height in pixels (size * 1.2 if value is invalid).
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
	 * @since 2.7.0
	 */
	toLineHeight: function(value, size) {
		var matches = ('' + value).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
		if (!matches || matches[1] === 'normal') {
			return size * 1.2;
		}

		value = +matches[2];

		switch (matches[3]) {
		case 'px':
			return value;
		case '%':
			value /= 100;
			break;
		default:
			break;
		}

		return size * value;
	},

	/**
	 * Converts the given value into a padding object with pre-computed width/height.
	 * @param {Number|Object} value - If a number, set the value to all TRBL component,
	 *  else, if and object, use defined properties and sets undefined ones to 0.
	 * @returns {Object} The padding values (top, right, bottom, left, width, height)
	 * @since 2.7.0
	 */
	toPadding: function(value) {
		var t, r, b, l;

		if (helpers.isObject(value)) {
			t = +value.top || 0;
			r = +value.right || 0;
			b = +value.bottom || 0;
			l = +value.left || 0;
		} else {
			t = r = b = l = +value || 0;
		}

		return {
			top: t,
			right: r,
			bottom: b,
			left: l,
			height: t + b,
			width: l + r
		};
	},

	/**
	 * Evaluates the given `inputs` sequentially and returns the first defined value.
	 * @param {Array[]} inputs - An array of values, falling back to the last value.
	 * @param {Object} [context] - If defined and the current value is a function, the value
	 * is called with `context` as first argument and the result becomes the new input.
	 * @param {Number} [index] - If defined and the current value is an array, the value
	 * at `index` become the new input.
	 * @since 2.7.0
	 */
	resolve: function(inputs, context, index) {
		var i, ilen, value;

		for (i = 0, ilen = inputs.length; i < ilen; ++i) {
			value = inputs[i];
			if (value === undefined) {
				continue;
			}
			if (context !== undefined && typeof value === 'function') {
				value = value(context);
			}
			if (index !== undefined && helpers.isArray(value)) {
				value = value[index];
			}
			if (value !== undefined) {
				return value;
			}
		}
	}
};

},{"42":42}],45:[function(require,module,exports){
'use strict';

module.exports = require(42);
module.exports.easing = require(43);
module.exports.canvas = require(41);
module.exports.options = require(44);

},{"41":41,"42":42,"43":43,"44":44}],46:[function(require,module,exports){
/**
 * Platform fallback implementation (minimal).
 * @see https://github.com/chartjs/Chart.js/pull/4591#issuecomment-319575939
 */

module.exports = {
	acquireContext: function(item) {
		if (item && item.canvas) {
			// Support for any object associated to a canvas (including a context2d)
			item = item.canvas;
		}

		return item && item.getContext('2d') || null;
	}
};

},{}],47:[function(require,module,exports){
/**
 * Chart.Platform implementation for targeting a web browser
 */

'use strict';

var helpers = require(45);

var EXPANDO_KEY = '$chartjs';
var CSS_PREFIX = 'chartjs-';
var CSS_RENDER_MONITOR = CSS_PREFIX + 'render-monitor';
var CSS_RENDER_ANIMATION = CSS_PREFIX + 'render-animation';
var ANIMATION_START_EVENTS = ['animationstart', 'webkitAnimationStart'];

/**
 * DOM event types -> Chart.js event types.
 * Note: only events with different types are mapped.
 * @see https://developer.mozilla.org/en-US/docs/Web/Events
 */
var EVENT_TYPES = {
	touchstart: 'mousedown',
	touchmove: 'mousemove',
	touchend: 'mouseup',
	pointerenter: 'mouseenter',
	pointerdown: 'mousedown',
	pointermove: 'mousemove',
	pointerup: 'mouseup',
	pointerleave: 'mouseout',
	pointerout: 'mouseout'
};

/**
 * The "used" size is the final value of a dimension property after all calculations have
 * been performed. This method uses the computed style of `element` but returns undefined
 * if the computed style is not expressed in pixels. That can happen in some cases where
 * `element` has a size relative to its parent and this last one is not yet displayed,
 * for example because of `display: none` on a parent node.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/used_value
 * @returns {Number} Size in pixels or undefined if unknown.
 */
function readUsedSize(element, property) {
	var value = helpers.getStyle(element, property);
	var matches = value && value.match(/^(\d+)(\.\d+)?px$/);
	return matches ? Number(matches[1]) : undefined;
}

/**
 * Initializes the canvas style and render size without modifying the canvas display size,
 * since responsiveness is handled by the controller.resize() method. The config is used
 * to determine the aspect ratio to apply in case no explicit height has been specified.
 */
function initCanvas(canvas, config) {
	var style = canvas.style;

	// NOTE(SB) canvas.getAttribute('width') !== canvas.width: in the first case it
	// returns null or '' if no explicit value has been set to the canvas attribute.
	var renderHeight = canvas.getAttribute('height');
	var renderWidth = canvas.getAttribute('width');

	// Chart.js modifies some canvas values that we want to restore on destroy
	canvas[EXPANDO_KEY] = {
		initial: {
			height: renderHeight,
			width: renderWidth,
			style: {
				display: style.display,
				height: style.height,
				width: style.width
			}
		}
	};

	// Force canvas to display as block to avoid extra space caused by inline
	// elements, which would interfere with the responsive resize process.
	// https://github.com/chartjs/Chart.js/issues/2538
	style.display = style.display || 'block';

	if (renderWidth === null || renderWidth === '') {
		var displayWidth = readUsedSize(canvas, 'width');
		if (displayWidth !== undefined) {
			canvas.width = displayWidth;
		}
	}

	if (renderHeight === null || renderHeight === '') {
		if (canvas.style.height === '') {
			// If no explicit render height and style height, let's apply the aspect ratio,
			// which one can be specified by the user but also by charts as default option
			// (i.e. options.aspectRatio). If not specified, use canvas aspect ratio of 2.
			canvas.height = canvas.width / (config.options.aspectRatio || 2);
		} else {
			var displayHeight = readUsedSize(canvas, 'height');
			if (displayWidth !== undefined) {
				canvas.height = displayHeight;
			}
		}
	}

	return canvas;
}

/**
 * Detects support for options object argument in addEventListener.
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
 * @private
 */
var supportsEventListenerOptions = (function() {
	var supports = false;
	try {
		var options = Object.defineProperty({}, 'passive', {
			get: function() {
				supports = true;
			}
		});
		window.addEventListener('e', null, options);
	} catch (e) {
		// continue regardless of error
	}
	return supports;
}());

// Default passive to true as expected by Chrome for 'touchstart' and 'touchend' events.
// https://github.com/chartjs/Chart.js/issues/4287
var eventListenerOptions = supportsEventListenerOptions ? {passive: true} : false;

function addEventListener(node, type, listener) {
	node.addEventListener(type, listener, eventListenerOptions);
}

function removeEventListener(node, type, listener) {
	node.removeEventListener(type, listener, eventListenerOptions);
}

function createEvent(type, chart, x, y, nativeEvent) {
	return {
		type: type,
		chart: chart,
		native: nativeEvent || null,
		x: x !== undefined ? x : null,
		y: y !== undefined ? y : null,
	};
}

function fromNativeEvent(event, chart) {
	var type = EVENT_TYPES[event.type] || event.type;
	var pos = helpers.getRelativePosition(event, chart);
	return createEvent(type, chart, pos.x, pos.y, event);
}

function throttled(fn, thisArg) {
	var ticking = false;
	var args = [];

	return function() {
		args = Array.prototype.slice.call(arguments);
		thisArg = thisArg || this;

		if (!ticking) {
			ticking = true;
			helpers.requestAnimFrame.call(window, function() {
				ticking = false;
				fn.apply(thisArg, args);
			});
		}
	};
}

// Implementation based on https://github.com/marcj/css-element-queries
function createResizer(handler) {
	var resizer = document.createElement('div');
	var cls = CSS_PREFIX + 'size-monitor';
	var maxSize = 1000000;
	var style =
		'position:absolute;' +
		'left:0;' +
		'top:0;' +
		'right:0;' +
		'bottom:0;' +
		'overflow:hidden;' +
		'pointer-events:none;' +
		'visibility:hidden;' +
		'z-index:-1;';

	resizer.style.cssText = style;
	resizer.className = cls;
	resizer.innerHTML =
		'<div class="' + cls + '-expand" style="' + style + '">' +
			'<div style="' +
				'position:absolute;' +
				'width:' + maxSize + 'px;' +
				'height:' + maxSize + 'px;' +
				'left:0;' +
				'top:0">' +
			'</div>' +
		'</div>' +
		'<div class="' + cls + '-shrink" style="' + style + '">' +
			'<div style="' +
				'position:absolute;' +
				'width:200%;' +
				'height:200%;' +
				'left:0; ' +
				'top:0">' +
			'</div>' +
		'</div>';

	var expand = resizer.childNodes[0];
	var shrink = resizer.childNodes[1];

	resizer._reset = function() {
		expand.scrollLeft = maxSize;
		expand.scrollTop = maxSize;
		shrink.scrollLeft = maxSize;
		shrink.scrollTop = maxSize;
	};
	var onScroll = function() {
		resizer._reset();
		handler();
	};

	addEventListener(expand, 'scroll', onScroll.bind(expand, 'expand'));
	addEventListener(shrink, 'scroll', onScroll.bind(shrink, 'shrink'));

	return resizer;
}

// https://davidwalsh.name/detect-node-insertion
function watchForRender(node, handler) {
	var expando = node[EXPANDO_KEY] || (node[EXPANDO_KEY] = {});
	var proxy = expando.renderProxy = function(e) {
		if (e.animationName === CSS_RENDER_ANIMATION) {
			handler();
		}
	};

	helpers.each(ANIMATION_START_EVENTS, function(type) {
		addEventListener(node, type, proxy);
	});

	// #4737: Chrome might skip the CSS animation when the CSS_RENDER_MONITOR class
	// is removed then added back immediately (same animation frame?). Accessing the
	// `offsetParent` property will force a reflow and re-evaluate the CSS animation.
	// https://gist.github.com/paulirish/5d52fb081b3570c81e3a#box-metrics
	// https://github.com/chartjs/Chart.js/issues/4737
	expando.reflow = !!node.offsetParent;

	node.classList.add(CSS_RENDER_MONITOR);
}

function unwatchForRender(node) {
	var expando = node[EXPANDO_KEY] || {};
	var proxy = expando.renderProxy;

	if (proxy) {
		helpers.each(ANIMATION_START_EVENTS, function(type) {
			removeEventListener(node, type, proxy);
		});

		delete expando.renderProxy;
	}

	node.classList.remove(CSS_RENDER_MONITOR);
}

function addResizeListener(node, listener, chart) {
	var expando = node[EXPANDO_KEY] || (node[EXPANDO_KEY] = {});

	// Let's keep track of this added resizer and thus avoid DOM query when removing it.
	var resizer = expando.resizer = createResizer(throttled(function() {
		if (expando.resizer) {
			return listener(createEvent('resize', chart));
		}
	}));

	// The resizer needs to be attached to the node parent, so we first need to be
	// sure that `node` is attached to the DOM before injecting the resizer element.
	watchForRender(node, function() {
		if (expando.resizer) {
			var container = node.parentNode;
			if (container && container !== resizer.parentNode) {
				container.insertBefore(resizer, container.firstChild);
			}

			// The container size might have changed, let's reset the resizer state.
			resizer._reset();
		}
	});
}

function removeResizeListener(node) {
	var expando = node[EXPANDO_KEY] || {};
	var resizer = expando.resizer;

	delete expando.resizer;
	unwatchForRender(node);

	if (resizer && resizer.parentNode) {
		resizer.parentNode.removeChild(resizer);
	}
}

function injectCSS(platform, css) {
	// http://stackoverflow.com/q/3922139
	var style = platform._style || document.createElement('style');
	if (!platform._style) {
		platform._style = style;
		css = '/* Chart.js */\n' + css;
		style.setAttribute('type', 'text/css');
		document.getElementsByTagName('head')[0].appendChild(style);
	}

	style.appendChild(document.createTextNode(css));
}

module.exports = {
	/**
	 * This property holds whether this platform is enabled for the current environment.
	 * Currently used by platform.js to select the proper implementation.
	 * @private
	 */
	_enabled: typeof window !== 'undefined' && typeof document !== 'undefined',

	initialize: function() {
		var keyframes = 'from{opacity:0.99}to{opacity:1}';

		injectCSS(this,
			// DOM rendering detection
			// https://davidwalsh.name/detect-node-insertion
			'@-webkit-keyframes ' + CSS_RENDER_ANIMATION + '{' + keyframes + '}' +
			'@keyframes ' + CSS_RENDER_ANIMATION + '{' + keyframes + '}' +
			'.' + CSS_RENDER_MONITOR + '{' +
				'-webkit-animation:' + CSS_RENDER_ANIMATION + ' 0.001s;' +
				'animation:' + CSS_RENDER_ANIMATION + ' 0.001s;' +
			'}'
		);
	},

	acquireContext: function(item, config) {
		if (typeof item === 'string') {
			item = document.getElementById(item);
		} else if (item.length) {
			// Support for array based queries (such as jQuery)
			item = item[0];
		}

		if (item && item.canvas) {
			// Support for any object associated to a canvas (including a context2d)
			item = item.canvas;
		}

		// To prevent canvas fingerprinting, some add-ons undefine the getContext
		// method, for example: https://github.com/kkapsner/CanvasBlocker
		// https://github.com/chartjs/Chart.js/issues/2807
		var context = item && item.getContext && item.getContext('2d');

		// `instanceof HTMLCanvasElement/CanvasRenderingContext2D` fails when the item is
		// inside an iframe or when running in a protected environment. We could guess the
		// types from their toString() value but let's keep things flexible and assume it's
		// a sufficient condition if the item has a context2D which has item as `canvas`.
		// https://github.com/chartjs/Chart.js/issues/3887
		// https://github.com/chartjs/Chart.js/issues/4102
		// https://github.com/chartjs/Chart.js/issues/4152
		if (context && context.canvas === item) {
			initCanvas(item, config);
			return context;
		}

		return null;
	},

	releaseContext: function(context) {
		var canvas = context.canvas;
		if (!canvas[EXPANDO_KEY]) {
			return;
		}

		var initial = canvas[EXPANDO_KEY].initial;
		['height', 'width'].forEach(function(prop) {
			var value = initial[prop];
			if (helpers.isNullOrUndef(value)) {
				canvas.removeAttribute(prop);
			} else {
				canvas.setAttribute(prop, value);
			}
		});

		helpers.each(initial.style || {}, function(value, key) {
			canvas.style[key] = value;
		});

		// The canvas render size might have been changed (and thus the state stack discarded),
		// we can't use save() and restore() to restore the initial state. So make sure that at
		// least the canvas context is reset to the default state by setting the canvas width.
		// https://www.w3.org/TR/2011/WD-html5-20110525/the-canvas-element.html
		canvas.width = canvas.width;

		delete canvas[EXPANDO_KEY];
	},

	addEventListener: function(chart, type, listener) {
		var canvas = chart.canvas;
		if (type === 'resize') {
			// Note: the resize event is not supported on all browsers.
			addResizeListener(canvas, listener, chart);
			return;
		}

		var expando = listener[EXPANDO_KEY] || (listener[EXPANDO_KEY] = {});
		var proxies = expando.proxies || (expando.proxies = {});
		var proxy = proxies[chart.id + '_' + type] = function(event) {
			listener(fromNativeEvent(event, chart));
		};

		addEventListener(canvas, type, proxy);
	},

	removeEventListener: function(chart, type, listener) {
		var canvas = chart.canvas;
		if (type === 'resize') {
			// Note: the resize event is not supported on all browsers.
			removeResizeListener(canvas, listener);
			return;
		}

		var expando = listener[EXPANDO_KEY] || {};
		var proxies = expando.proxies || {};
		var proxy = proxies[chart.id + '_' + type];
		if (!proxy) {
			return;
		}

		removeEventListener(canvas, type, proxy);
	}
};

// DEPRECATIONS

/**
 * Provided for backward compatibility, use EventTarget.addEventListener instead.
 * EventTarget.addEventListener compatibility: Chrome, Opera 7, Safari, FF1.5+, IE9+
 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
 * @function Chart.helpers.addEvent
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers.addEvent = addEventListener;

/**
 * Provided for backward compatibility, use EventTarget.removeEventListener instead.
 * EventTarget.removeEventListener compatibility: Chrome, Opera 7, Safari, FF1.5+, IE9+
 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
 * @function Chart.helpers.removeEvent
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers.removeEvent = removeEventListener;

},{"45":45}],48:[function(require,module,exports){
'use strict';

var helpers = require(45);
var basic = require(46);
var dom = require(47);

// @TODO Make possible to select another platform at build time.
var implementation = dom._enabled ? dom : basic;

/**
 * @namespace Chart.platform
 * @see https://chartjs.gitbooks.io/proposals/content/Platform.html
 * @since 2.4.0
 */
module.exports = helpers.extend({
	/**
	 * @since 2.7.0
	 */
	initialize: function() {},

	/**
	 * Called at chart construction time, returns a context2d instance implementing
	 * the [W3C Canvas 2D Context API standard]{@link https://www.w3.org/TR/2dcontext/}.
	 * @param {*} item - The native item from which to acquire context (platform specific)
	 * @param {Object} options - The chart options
	 * @returns {CanvasRenderingContext2D} context2d instance
	 */
	acquireContext: function() {},

	/**
	 * Called at chart destruction time, releases any resources associated to the context
	 * previously returned by the acquireContext() method.
	 * @param {CanvasRenderingContext2D} context - The context2d instance
	 * @returns {Boolean} true if the method succeeded, else false
	 */
	releaseContext: function() {},

	/**
	 * Registers the specified listener on the given chart.
	 * @param {Chart} chart - Chart from which to listen for event
	 * @param {String} type - The ({@link IEvent}) type to listen for
	 * @param {Function} listener - Receives a notification (an object that implements
	 * the {@link IEvent} interface) when an event of the specified type occurs.
	 */
	addEventListener: function() {},

	/**
	 * Removes the specified listener previously registered with addEventListener.
	 * @param {Chart} chart -Chart from which to remove the listener
	 * @param {String} type - The ({@link IEvent}) type to remove
	 * @param {Function} listener - The listener function to remove from the event target.
	 */
	removeEventListener: function() {}

}, implementation);

/**
 * @interface IPlatform
 * Allows abstracting platform dependencies away from the chart
 * @borrows Chart.platform.acquireContext as acquireContext
 * @borrows Chart.platform.releaseContext as releaseContext
 * @borrows Chart.platform.addEventListener as addEventListener
 * @borrows Chart.platform.removeEventListener as removeEventListener
 */

/**
 * @interface IEvent
 * @prop {String} type - The event type name, possible values are:
 * 'contextmenu', 'mouseenter', 'mousedown', 'mousemove', 'mouseup', 'mouseout',
 * 'click', 'dblclick', 'keydown', 'keypress', 'keyup' and 'resize'
 * @prop {*} native - The original native event (null for emulated events, e.g. 'resize')
 * @prop {Number} x - The mouse x position, relative to the canvas (null for incompatible events)
 * @prop {Number} y - The mouse y position, relative to the canvas (null for incompatible events)
 */

},{"45":45,"46":46,"47":47}],49:[function(require,module,exports){
/**
 * Plugin based on discussion from the following Chart.js issues:
 * @see https://github.com/chartjs/Chart.js/issues/2380#issuecomment-279961569
 * @see https://github.com/chartjs/Chart.js/issues/2440#issuecomment-256461897
 */

'use strict';

var defaults = require(25);
var elements = require(40);
var helpers = require(45);

defaults._set('global', {
	plugins: {
		filler: {
			propagate: true
		}
	}
});

module.exports = function() {

	var mappers = {
		dataset: function(source) {
			var index = source.fill;
			var chart = source.chart;
			var meta = chart.getDatasetMeta(index);
			var visible = meta && chart.isDatasetVisible(index);
			var points = (visible && meta.dataset._children) || [];
			var length = points.length || 0;

			return !length ? null : function(point, i) {
				return (i < length && points[i]._view) || null;
			};
		},

		boundary: function(source) {
			var boundary = source.boundary;
			var x = boundary ? boundary.x : null;
			var y = boundary ? boundary.y : null;

			return function(point) {
				return {
					x: x === null ? point.x : x,
					y: y === null ? point.y : y,
				};
			};
		}
	};

	// @todo if (fill[0] === '#')
	function decodeFill(el, index, count) {
		var model = el._model || {};
		var fill = model.fill;
		var target;

		if (fill === undefined) {
			fill = !!model.backgroundColor;
		}

		if (fill === false || fill === null) {
			return false;
		}

		if (fill === true) {
			return 'origin';
		}

		target = parseFloat(fill, 10);
		if (isFinite(target) && Math.floor(target) === target) {
			if (fill[0] === '-' || fill[0] === '+') {
				target = index + target;
			}

			if (target === index || target < 0 || target >= count) {
				return false;
			}

			return target;
		}

		switch (fill) {
		// compatibility
		case 'bottom':
			return 'start';
		case 'top':
			return 'end';
		case 'zero':
			return 'origin';
		// supported boundaries
		case 'origin':
		case 'start':
		case 'end':
			return fill;
		// invalid fill values
		default:
			return false;
		}
	}

	function computeBoundary(source) {
		var model = source.el._model || {};
		var scale = source.el._scale || {};
		var fill = source.fill;
		var target = null;
		var horizontal;

		if (isFinite(fill)) {
			return null;
		}

		// Backward compatibility: until v3, we still need to support boundary values set on
		// the model (scaleTop, scaleBottom and scaleZero) because some external plugins and
		// controllers might still use it (e.g. the Smith chart).

		if (fill === 'start') {
			target = model.scaleBottom === undefined ? scale.bottom : model.scaleBottom;
		} else if (fill === 'end') {
			target = model.scaleTop === undefined ? scale.top : model.scaleTop;
		} else if (model.scaleZero !== undefined) {
			target = model.scaleZero;
		} else if (scale.getBasePosition) {
			target = scale.getBasePosition();
		} else if (scale.getBasePixel) {
			target = scale.getBasePixel();
		}

		if (target !== undefined && target !== null) {
			if (target.x !== undefined && target.y !== undefined) {
				return target;
			}

			if (typeof target === 'number' && isFinite(target)) {
				horizontal = scale.isHorizontal();
				return {
					x: horizontal ? target : null,
					y: horizontal ? null : target
				};
			}
		}

		return null;
	}

	function resolveTarget(sources, index, propagate) {
		var source = sources[index];
		var fill = source.fill;
		var visited = [index];
		var target;

		if (!propagate) {
			return fill;
		}

		while (fill !== false && visited.indexOf(fill) === -1) {
			if (!isFinite(fill)) {
				return fill;
			}

			target = sources[fill];
			if (!target) {
				return false;
			}

			if (target.visible) {
				return fill;
			}

			visited.push(fill);
			fill = target.fill;
		}

		return false;
	}

	function createMapper(source) {
		var fill = source.fill;
		var type = 'dataset';

		if (fill === false) {
			return null;
		}

		if (!isFinite(fill)) {
			type = 'boundary';
		}

		return mappers[type](source);
	}

	function isDrawable(point) {
		return point && !point.skip;
	}

	function drawArea(ctx, curve0, curve1, len0, len1) {
		var i;

		if (!len0 || !len1) {
			return;
		}

		// building first area curve (normal)
		ctx.moveTo(curve0[0].x, curve0[0].y);
		for (i = 1; i < len0; ++i) {
			helpers.canvas.lineTo(ctx, curve0[i - 1], curve0[i]);
		}

		// joining the two area curves
		ctx.lineTo(curve1[len1 - 1].x, curve1[len1 - 1].y);

		// building opposite area curve (reverse)
		for (i = len1 - 1; i > 0; --i) {
			helpers.canvas.lineTo(ctx, curve1[i], curve1[i - 1], true);
		}
	}

	function doFill(ctx, points, mapper, view, color, loop) {
		var count = points.length;
		var span = view.spanGaps;
		var curve0 = [];
		var curve1 = [];
		var len0 = 0;
		var len1 = 0;
		var i, ilen, index, p0, p1, d0, d1;

		ctx.beginPath();

		for (i = 0, ilen = (count + !!loop); i < ilen; ++i) {
			index = i % count;
			p0 = points[index]._view;
			p1 = mapper(p0, index, view);
			d0 = isDrawable(p0);
			d1 = isDrawable(p1);

			if (d0 && d1) {
				len0 = curve0.push(p0);
				len1 = curve1.push(p1);
			} else if (len0 && len1) {
				if (!span) {
					drawArea(ctx, curve0, curve1, len0, len1);
					len0 = len1 = 0;
					curve0 = [];
					curve1 = [];
				} else {
					if (d0) {
						curve0.push(p0);
					}
					if (d1) {
						curve1.push(p1);
					}
				}
			}
		}

		drawArea(ctx, curve0, curve1, len0, len1);

		ctx.closePath();
		ctx.fillStyle = color;
		ctx.fill();
	}

	return {
		id: 'filler',

		afterDatasetsUpdate: function(chart, options) {
			var count = (chart.data.datasets || []).length;
			var propagate = options.propagate;
			var sources = [];
			var meta, i, el, source;

			for (i = 0; i < count; ++i) {
				meta = chart.getDatasetMeta(i);
				el = meta.dataset;
				source = null;

				if (el && el._model && el instanceof elements.Line) {
					source = {
						visible: chart.isDatasetVisible(i),
						fill: decodeFill(el, i, count),
						chart: chart,
						el: el
					};
				}

				meta.$filler = source;
				sources.push(source);
			}

			for (i = 0; i < count; ++i) {
				source = sources[i];
				if (!source) {
					continue;
				}

				source.fill = resolveTarget(sources, i, propagate);
				source.boundary = computeBoundary(source);
				source.mapper = createMapper(source);
			}
		},

		beforeDatasetDraw: function(chart, args) {
			var meta = args.meta.$filler;
			if (!meta) {
				return;
			}

			var ctx = chart.ctx;
			var el = meta.el;
			var view = el._view;
			var points = el._children || [];
			var mapper = meta.mapper;
			var color = view.backgroundColor || defaults.global.defaultColor;

			if (mapper && color && points.length) {
				helpers.canvas.clipArea(ctx, chart.chartArea);
				doFill(ctx, points, mapper, view, color, el._loop);
				helpers.canvas.unclipArea(ctx);
			}
		}
	};
};

},{"25":25,"40":40,"45":45}],50:[function(require,module,exports){
'use strict';

var defaults = require(25);
var Element = require(26);
var helpers = require(45);

defaults._set('global', {
	legend: {
		display: true,
		position: 'top',
		fullWidth: true,
		reverse: false,
		weight: 1000,

		// a callback that will handle
		onClick: function(e, legendItem) {
			var index = legendItem.datasetIndex;
			var ci = this.chart;
			var meta = ci.getDatasetMeta(index);

			// See controller.isDatasetVisible comment
			meta.hidden = meta.hidden === null ? !ci.data.datasets[index].hidden : null;

			// We hid a dataset ... rerender the chart
			ci.update();
		},

		onHover: null,

		labels: {
			boxWidth: 40,
			padding: 10,
			// Generates labels shown in the legend
			// Valid properties to return:
			// text : text to display
			// fillStyle : fill of coloured box
			// strokeStyle: stroke of coloured box
			// hidden : if this legend item refers to a hidden item
			// lineCap : cap style for line
			// lineDash
			// lineDashOffset :
			// lineJoin :
			// lineWidth :
			generateLabels: function(chart) {
				var data = chart.data;
				return helpers.isArray(data.datasets) ? data.datasets.map(function(dataset, i) {
					return {
						text: dataset.label,
						fillStyle: (!helpers.isArray(dataset.backgroundColor) ? dataset.backgroundColor : dataset.backgroundColor[0]),
						hidden: !chart.isDatasetVisible(i),
						lineCap: dataset.borderCapStyle,
						lineDash: dataset.borderDash,
						lineDashOffset: dataset.borderDashOffset,
						lineJoin: dataset.borderJoinStyle,
						lineWidth: dataset.borderWidth,
						strokeStyle: dataset.borderColor,
						pointStyle: dataset.pointStyle,

						// Below is extra data used for toggling the datasets
						datasetIndex: i
					};
				}, this) : [];
			}
		}
	},

	legendCallback: function(chart) {
		var text = [];
		text.push('<ul class="' + chart.id + '-legend">');
		for (var i = 0; i < chart.data.datasets.length; i++) {
			text.push('<li><span style="background-color:' + chart.data.datasets[i].backgroundColor + '"></span>');
			if (chart.data.datasets[i].label) {
				text.push(chart.data.datasets[i].label);
			}
			text.push('</li>');
		}
		text.push('</ul>');
		return text.join('');
	}
});

module.exports = function(Chart) {

	var layout = Chart.layoutService;
	var noop = helpers.noop;

	/**
	 * Helper function to get the box width based on the usePointStyle option
	 * @param labelopts {Object} the label options on the legend
	 * @param fontSize {Number} the label font size
	 * @return {Number} width of the color box area
	 */
	function getBoxWidth(labelOpts, fontSize) {
		return labelOpts.usePointStyle ?
			fontSize * Math.SQRT2 :
			labelOpts.boxWidth;
	}

	Chart.Legend = Element.extend({

		initialize: function(config) {
			helpers.extend(this, config);

			// Contains hit boxes for each dataset (in dataset order)
			this.legendHitBoxes = [];

			// Are we in doughnut mode which has a different data type
			this.doughnutMode = false;
		},

		// These methods are ordered by lifecycle. Utilities then follow.
		// Any function defined here is inherited by all legend types.
		// Any function can be extended by the legend type

		beforeUpdate: noop,
		update: function(maxWidth, maxHeight, margins) {
			var me = this;

			// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
			me.beforeUpdate();

			// Absorb the master measurements
			me.maxWidth = maxWidth;
			me.maxHeight = maxHeight;
			me.margins = margins;

			// Dimensions
			me.beforeSetDimensions();
			me.setDimensions();
			me.afterSetDimensions();
			// Labels
			me.beforeBuildLabels();
			me.buildLabels();
			me.afterBuildLabels();

			// Fit
			me.beforeFit();
			me.fit();
			me.afterFit();
			//
			me.afterUpdate();

			return me.minSize;
		},
		afterUpdate: noop,

		//

		beforeSetDimensions: noop,
		setDimensions: function() {
			var me = this;
			// Set the unconstrained dimension before label rotation
			if (me.isHorizontal()) {
				// Reset position before calculating rotation
				me.width = me.maxWidth;
				me.left = 0;
				me.right = me.width;
			} else {
				me.height = me.maxHeight;

				// Reset position before calculating rotation
				me.top = 0;
				me.bottom = me.height;
			}

			// Reset padding
			me.paddingLeft = 0;
			me.paddingTop = 0;
			me.paddingRight = 0;
			me.paddingBottom = 0;

			// Reset minSize
			me.minSize = {
				width: 0,
				height: 0
			};
		},
		afterSetDimensions: noop,

		//

		beforeBuildLabels: noop,
		buildLabels: function() {
			var me = this;
			var labelOpts = me.options.labels || {};
			var legendItems = helpers.callback(labelOpts.generateLabels, [me.chart], me) || [];

			if (labelOpts.filter) {
				legendItems = legendItems.filter(function(item) {
					return labelOpts.filter(item, me.chart.data);
				});
			}

			if (me.options.reverse) {
				legendItems.reverse();
			}

			me.legendItems = legendItems;
		},
		afterBuildLabels: noop,

		//

		beforeFit: noop,
		fit: function() {
			var me = this;
			var opts = me.options;
			var labelOpts = opts.labels;
			var display = opts.display;

			var ctx = me.ctx;

			var globalDefault = defaults.global;
			var valueOrDefault = helpers.valueOrDefault;
			var fontSize = valueOrDefault(labelOpts.fontSize, globalDefault.defaultFontSize);
			var fontStyle = valueOrDefault(labelOpts.fontStyle, globalDefault.defaultFontStyle);
			var fontFamily = valueOrDefault(labelOpts.fontFamily, globalDefault.defaultFontFamily);
			var labelFont = helpers.fontString(fontSize, fontStyle, fontFamily);

			// Reset hit boxes
			var hitboxes = me.legendHitBoxes = [];

			var minSize = me.minSize;
			var isHorizontal = me.isHorizontal();

			if (isHorizontal) {
				minSize.width = me.maxWidth; // fill all the width
				minSize.height = display ? 10 : 0;
			} else {
				minSize.width = display ? 10 : 0;
				minSize.height = me.maxHeight; // fill all the height
			}

			// Increase sizes here
			if (display) {
				ctx.font = labelFont;

				if (isHorizontal) {
					// Labels

					// Width of each line of legend boxes. Labels wrap onto multiple lines when there are too many to fit on one
					var lineWidths = me.lineWidths = [0];
					var totalHeight = me.legendItems.length ? fontSize + (labelOpts.padding) : 0;

					ctx.textAlign = 'left';
					ctx.textBaseline = 'top';

					helpers.each(me.legendItems, function(legendItem, i) {
						var boxWidth = getBoxWidth(labelOpts, fontSize);
						var width = boxWidth + (fontSize / 2) + ctx.measureText(legendItem.text).width;

						if (lineWidths[lineWidths.length - 1] + width + labelOpts.padding >= me.width) {
							totalHeight += fontSize + (labelOpts.padding);
							lineWidths[lineWidths.length] = me.left;
						}

						// Store the hitbox width and height here. Final position will be updated in `draw`
						hitboxes[i] = {
							left: 0,
							top: 0,
							width: width,
							height: fontSize
						};

						lineWidths[lineWidths.length - 1] += width + labelOpts.padding;
					});

					minSize.height += totalHeight;

				} else {
					var vPadding = labelOpts.padding;
					var columnWidths = me.columnWidths = [];
					var totalWidth = labelOpts.padding;
					var currentColWidth = 0;
					var currentColHeight = 0;
					var itemHeight = fontSize + vPadding;

					helpers.each(me.legendItems, function(legendItem, i) {
						var boxWidth = getBoxWidth(labelOpts, fontSize);
						var itemWidth = boxWidth + (fontSize / 2) + ctx.measureText(legendItem.text).width;

						// If too tall, go to new column
						if (currentColHeight + itemHeight > minSize.height) {
							totalWidth += currentColWidth + labelOpts.padding;
							columnWidths.push(currentColWidth); // previous column width

							currentColWidth = 0;
							currentColHeight = 0;
						}

						// Get max width
						currentColWidth = Math.max(currentColWidth, itemWidth);
						currentColHeight += itemHeight;

						// Store the hitbox width and height here. Final position will be updated in `draw`
						hitboxes[i] = {
							left: 0,
							top: 0,
							width: itemWidth,
							height: fontSize
						};
					});

					totalWidth += currentColWidth;
					columnWidths.push(currentColWidth);
					minSize.width += totalWidth;
				}
			}

			me.width = minSize.width;
			me.height = minSize.height;
		},
		afterFit: noop,

		// Shared Methods
		isHorizontal: function() {
			return this.options.position === 'top' || this.options.position === 'bottom';
		},

		// Actually draw the legend on the canvas
		draw: function() {
			var me = this;
			var opts = me.options;
			var labelOpts = opts.labels;
			var globalDefault = defaults.global;
			var lineDefault = globalDefault.elements.line;
			var legendWidth = me.width;
			var lineWidths = me.lineWidths;

			if (opts.display) {
				var ctx = me.ctx;
				var valueOrDefault = helpers.valueOrDefault;
				var fontColor = valueOrDefault(labelOpts.fontColor, globalDefault.defaultFontColor);
				var fontSize = valueOrDefault(labelOpts.fontSize, globalDefault.defaultFontSize);
				var fontStyle = valueOrDefault(labelOpts.fontStyle, globalDefault.defaultFontStyle);
				var fontFamily = valueOrDefault(labelOpts.fontFamily, globalDefault.defaultFontFamily);
				var labelFont = helpers.fontString(fontSize, fontStyle, fontFamily);
				var cursor;

				// Canvas setup
				ctx.textAlign = 'left';
				ctx.textBaseline = 'middle';
				ctx.lineWidth = 0.5;
				ctx.strokeStyle = fontColor; // for strikethrough effect
				ctx.fillStyle = fontColor; // render in correct colour
				ctx.font = labelFont;

				var boxWidth = getBoxWidth(labelOpts, fontSize);
				var hitboxes = me.legendHitBoxes;

				// current position
				var drawLegendBox = function(x, y, legendItem) {
					if (isNaN(boxWidth) || boxWidth <= 0) {
						return;
					}

					// Set the ctx for the box
					ctx.save();

					ctx.fillStyle = valueOrDefault(legendItem.fillStyle, globalDefault.defaultColor);
					ctx.lineCap = valueOrDefault(legendItem.lineCap, lineDefault.borderCapStyle);
					ctx.lineDashOffset = valueOrDefault(legendItem.lineDashOffset, lineDefault.borderDashOffset);
					ctx.lineJoin = valueOrDefault(legendItem.lineJoin, lineDefault.borderJoinStyle);
					ctx.lineWidth = valueOrDefault(legendItem.lineWidth, lineDefault.borderWidth);
					ctx.strokeStyle = valueOrDefault(legendItem.strokeStyle, globalDefault.defaultColor);
					var isLineWidthZero = (valueOrDefault(legendItem.lineWidth, lineDefault.borderWidth) === 0);

					if (ctx.setLineDash) {
						// IE 9 and 10 do not support line dash
						ctx.setLineDash(valueOrDefault(legendItem.lineDash, lineDefault.borderDash));
					}

					if (opts.labels && opts.labels.usePointStyle) {
						// Recalculate x and y for drawPoint() because its expecting
						// x and y to be center of figure (instead of top left)
						var radius = fontSize * Math.SQRT2 / 2;
						var offSet = radius / Math.SQRT2;
						var centerX = x + offSet;
						var centerY = y + offSet;

						// Draw pointStyle as legend symbol
						helpers.canvas.drawPoint(ctx, legendItem.pointStyle, radius, centerX, centerY);
					} else {
						// Draw box as legend symbol
						if (!isLineWidthZero) {
							ctx.strokeRect(x, y, boxWidth, fontSize);
						}
						ctx.fillRect(x, y, boxWidth, fontSize);
					}

					ctx.restore();
				};
				var fillText = function(x, y, legendItem, textWidth) {
					var halfFontSize = fontSize / 2;
					var xLeft = boxWidth + halfFontSize + x;
					var yMiddle = y + halfFontSize;

					ctx.fillText(legendItem.text, xLeft, yMiddle);

					if (legendItem.hidden) {
						// Strikethrough the text if hidden
						ctx.beginPath();
						ctx.lineWidth = 2;
						ctx.moveTo(xLeft, yMiddle);
						ctx.lineTo(xLeft + textWidth, yMiddle);
						ctx.stroke();
					}
				};

				// Horizontal
				var isHorizontal = me.isHorizontal();
				if (isHorizontal) {
					cursor = {
						x: me.left + ((legendWidth - lineWidths[0]) / 2),
						y: me.top + labelOpts.padding,
						line: 0
					};
				} else {
					cursor = {
						x: me.left + labelOpts.padding,
						y: me.top + labelOpts.padding,
						line: 0
					};
				}

				var itemHeight = fontSize + labelOpts.padding;
				helpers.each(me.legendItems, function(legendItem, i) {
					var textWidth = ctx.measureText(legendItem.text).width;
					var width = boxWidth + (fontSize / 2) + textWidth;
					var x = cursor.x;
					var y = cursor.y;

					if (isHorizontal) {
						if (x + width >= legendWidth) {
							y = cursor.y += itemHeight;
							cursor.line++;
							x = cursor.x = me.left + ((legendWidth - lineWidths[cursor.line]) / 2);
						}
					} else if (y + itemHeight > me.bottom) {
						x = cursor.x = x + me.columnWidths[cursor.line] + labelOpts.padding;
						y = cursor.y = me.top + labelOpts.padding;
						cursor.line++;
					}

					drawLegendBox(x, y, legendItem);

					hitboxes[i].left = x;
					hitboxes[i].top = y;

					// Fill the actual label
					fillText(x, y, legendItem, textWidth);

					if (isHorizontal) {
						cursor.x += width + (labelOpts.padding);
					} else {
						cursor.y += itemHeight;
					}

				});
			}
		},

		/**
		 * Handle an event
		 * @private
		 * @param {IEvent} event - The event to handle
		 * @return {Boolean} true if a change occured
		 */
		handleEvent: function(e) {
			var me = this;
			var opts = me.options;
			var type = e.type === 'mouseup' ? 'click' : e.type;
			var changed = false;

			if (type === 'mousemove') {
				if (!opts.onHover) {
					return;
				}
			} else if (type === 'click') {
				if (!opts.onClick) {
					return;
				}
			} else {
				return;
			}

			// Chart event already has relative position in it
			var x = e.x;
			var y = e.y;

			if (x >= me.left && x <= me.right && y >= me.top && y <= me.bottom) {
				// See if we are touching one of the dataset boxes
				var lh = me.legendHitBoxes;
				for (var i = 0; i < lh.length; ++i) {
					var hitBox = lh[i];

					if (x >= hitBox.left && x <= hitBox.left + hitBox.width && y >= hitBox.top && y <= hitBox.top + hitBox.height) {
						// Touching an element
						if (type === 'click') {
							// use e.native for backwards compatibility
							opts.onClick.call(me, e.native, me.legendItems[i]);
							changed = true;
							break;
						} else if (type === 'mousemove') {
							// use e.native for backwards compatibility
							opts.onHover.call(me, e.native, me.legendItems[i]);
							changed = true;
							break;
						}
					}
				}
			}

			return changed;
		}
	});

	function createNewLegendAndAttach(chart, legendOpts) {
		var legend = new Chart.Legend({
			ctx: chart.ctx,
			options: legendOpts,
			chart: chart
		});

		layout.configure(chart, legend, legendOpts);
		layout.addBox(chart, legend);
		chart.legend = legend;
	}

	return {
		id: 'legend',

		beforeInit: function(chart) {
			var legendOpts = chart.options.legend;

			if (legendOpts) {
				createNewLegendAndAttach(chart, legendOpts);
			}
		},

		beforeUpdate: function(chart) {
			var legendOpts = chart.options.legend;
			var legend = chart.legend;

			if (legendOpts) {
				helpers.mergeIf(legendOpts, defaults.global.legend);

				if (legend) {
					layout.configure(chart, legend, legendOpts);
					legend.options = legendOpts;
				} else {
					createNewLegendAndAttach(chart, legendOpts);
				}
			} else if (legend) {
				layout.removeBox(chart, legend);
				delete chart.legend;
			}
		},

		afterEvent: function(chart, e) {
			var legend = chart.legend;
			if (legend) {
				legend.handleEvent(e);
			}
		}
	};
};

},{"25":25,"26":26,"45":45}],51:[function(require,module,exports){
'use strict';

var defaults = require(25);
var Element = require(26);
var helpers = require(45);

defaults._set('global', {
	title: {
		display: false,
		fontStyle: 'bold',
		fullWidth: true,
		lineHeight: 1.2,
		padding: 10,
		position: 'top',
		text: '',
		weight: 2000         // by default greater than legend (1000) to be above
	}
});

module.exports = function(Chart) {

	var layout = Chart.layoutService;
	var noop = helpers.noop;

	Chart.Title = Element.extend({
		initialize: function(config) {
			var me = this;
			helpers.extend(me, config);

			// Contains hit boxes for each dataset (in dataset order)
			me.legendHitBoxes = [];
		},

		// These methods are ordered by lifecycle. Utilities then follow.

		beforeUpdate: noop,
		update: function(maxWidth, maxHeight, margins) {
			var me = this;

			// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
			me.beforeUpdate();

			// Absorb the master measurements
			me.maxWidth = maxWidth;
			me.maxHeight = maxHeight;
			me.margins = margins;

			// Dimensions
			me.beforeSetDimensions();
			me.setDimensions();
			me.afterSetDimensions();
			// Labels
			me.beforeBuildLabels();
			me.buildLabels();
			me.afterBuildLabels();

			// Fit
			me.beforeFit();
			me.fit();
			me.afterFit();
			//
			me.afterUpdate();

			return me.minSize;

		},
		afterUpdate: noop,

		//

		beforeSetDimensions: noop,
		setDimensions: function() {
			var me = this;
			// Set the unconstrained dimension before label rotation
			if (me.isHorizontal()) {
				// Reset position before calculating rotation
				me.width = me.maxWidth;
				me.left = 0;
				me.right = me.width;
			} else {
				me.height = me.maxHeight;

				// Reset position before calculating rotation
				me.top = 0;
				me.bottom = me.height;
			}

			// Reset padding
			me.paddingLeft = 0;
			me.paddingTop = 0;
			me.paddingRight = 0;
			me.paddingBottom = 0;

			// Reset minSize
			me.minSize = {
				width: 0,
				height: 0
			};
		},
		afterSetDimensions: noop,

		//

		beforeBuildLabels: noop,
		buildLabels: noop,
		afterBuildLabels: noop,

		//

		beforeFit: noop,
		fit: function() {
			var me = this;
			var valueOrDefault = helpers.valueOrDefault;
			var opts = me.options;
			var display = opts.display;
			var fontSize = valueOrDefault(opts.fontSize, defaults.global.defaultFontSize);
			var minSize = me.minSize;
			var lineCount = helpers.isArray(opts.text) ? opts.text.length : 1;
			var lineHeight = helpers.options.toLineHeight(opts.lineHeight, fontSize);
			var textSize = display ? (lineCount * lineHeight) + (opts.padding * 2) : 0;

			if (me.isHorizontal()) {
				minSize.width = me.maxWidth; // fill all the width
				minSize.height = textSize;
			} else {
				minSize.width = textSize;
				minSize.height = me.maxHeight; // fill all the height
			}

			me.width = minSize.width;
			me.height = minSize.height;

		},
		afterFit: noop,

		// Shared Methods
		isHorizontal: function() {
			var pos = this.options.position;
			return pos === 'top' || pos === 'bottom';
		},

		// Actually draw the title block on the canvas
		draw: function() {
			var me = this;
			var ctx = me.ctx;
			var valueOrDefault = helpers.valueOrDefault;
			var opts = me.options;
			var globalDefaults = defaults.global;

			if (opts.display) {
				var fontSize = valueOrDefault(opts.fontSize, globalDefaults.defaultFontSize);
				var fontStyle = valueOrDefault(opts.fontStyle, globalDefaults.defaultFontStyle);
				var fontFamily = valueOrDefault(opts.fontFamily, globalDefaults.defaultFontFamily);
				var titleFont = helpers.fontString(fontSize, fontStyle, fontFamily);
				var lineHeight = helpers.options.toLineHeight(opts.lineHeight, fontSize);
				var offset = lineHeight / 2 + opts.padding;
				var rotation = 0;
				var top = me.top;
				var left = me.left;
				var bottom = me.bottom;
				var right = me.right;
				var maxWidth, titleX, titleY;

				ctx.fillStyle = valueOrDefault(opts.fontColor, globalDefaults.defaultFontColor); // render in correct colour
				ctx.font = titleFont;

				// Horizontal
				if (me.isHorizontal()) {
					titleX = left + ((right - left) / 2); // midpoint of the width
					titleY = top + offset;
					maxWidth = right - left;
				} else {
					titleX = opts.position === 'left' ? left + offset : right - offset;
					titleY = top + ((bottom - top) / 2);
					maxWidth = bottom - top;
					rotation = Math.PI * (opts.position === 'left' ? -0.5 : 0.5);
				}

				ctx.save();
				ctx.translate(titleX, titleY);
				ctx.rotate(rotation);
				ctx.textAlign = 'center';
				ctx.textBaseline = 'middle';

				var text = opts.text;
				if (helpers.isArray(text)) {
					var y = 0;
					for (var i = 0; i < text.length; ++i) {
						ctx.fillText(text[i], 0, y, maxWidth);
						y += lineHeight;
					}
				} else {
					ctx.fillText(text, 0, 0, maxWidth);
				}

				ctx.restore();
			}
		}
	});

	function createNewTitleBlockAndAttach(chart, titleOpts) {
		var title = new Chart.Title({
			ctx: chart.ctx,
			options: titleOpts,
			chart: chart
		});

		layout.configure(chart, title, titleOpts);
		layout.addBox(chart, title);
		chart.titleBlock = title;
	}

	return {
		id: 'title',

		beforeInit: function(chart) {
			var titleOpts = chart.options.title;

			if (titleOpts) {
				createNewTitleBlockAndAttach(chart, titleOpts);
			}
		},

		beforeUpdate: function(chart) {
			var titleOpts = chart.options.title;
			var titleBlock = chart.titleBlock;

			if (titleOpts) {
				helpers.mergeIf(titleOpts, defaults.global.title);

				if (titleBlock) {
					layout.configure(chart, titleBlock, titleOpts);
					titleBlock.options = titleOpts;
				} else {
					createNewTitleBlockAndAttach(chart, titleOpts);
				}
			} else if (titleBlock) {
				Chart.layoutService.removeBox(chart, titleBlock);
				delete chart.titleBlock;
			}
		}
	};
};

},{"25":25,"26":26,"45":45}],52:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	// Default config for a category scale
	var defaultConfig = {
		position: 'bottom'
	};

	var DatasetScale = Chart.Scale.extend({
		/**
		* Internal function to get the correct labels. If data.xLabels or data.yLabels are defined, use those
		* else fall back to data.labels
		* @private
		*/
		getLabels: function() {
			var data = this.chart.data;
			return this.options.labels || (this.isHorizontal() ? data.xLabels : data.yLabels) || data.labels;
		},

		determineDataLimits: function() {
			var me = this;
			var labels = me.getLabels();
			me.minIndex = 0;
			me.maxIndex = labels.length - 1;
			var findIndex;

			if (me.options.ticks.min !== undefined) {
				// user specified min value
				findIndex = labels.indexOf(me.options.ticks.min);
				me.minIndex = findIndex !== -1 ? findIndex : me.minIndex;
			}

			if (me.options.ticks.max !== undefined) {
				// user specified max value
				findIndex = labels.indexOf(me.options.ticks.max);
				me.maxIndex = findIndex !== -1 ? findIndex : me.maxIndex;
			}

			me.min = labels[me.minIndex];
			me.max = labels[me.maxIndex];
		},

		buildTicks: function() {
			var me = this;
			var labels = me.getLabels();
			// If we are viewing some subset of labels, slice the original array
			me.ticks = (me.minIndex === 0 && me.maxIndex === labels.length - 1) ? labels : labels.slice(me.minIndex, me.maxIndex + 1);
		},

		getLabelForIndex: function(index, datasetIndex) {
			var me = this;
			var data = me.chart.data;
			var isHorizontal = me.isHorizontal();

			if (data.yLabels && !isHorizontal) {
				return me.getRightValue(data.datasets[datasetIndex].data[index]);
			}
			return me.ticks[index - me.minIndex];
		},

		// Used to get data value locations.  Value can either be an index or a numerical value
		getPixelForValue: function(value, index) {
			var me = this;
			var offset = me.options.offset;
			// 1 is added because we need the length but we have the indexes
			var offsetAmt = Math.max((me.maxIndex + 1 - me.minIndex - (offset ? 0 : 1)), 1);

			// If value is a data object, then index is the index in the data array,
			// not the index of the scale. We need to change that.
			var valueCategory;
			if (value !== undefined && value !== null) {
				valueCategory = me.isHorizontal() ? value.x : value.y;
			}
			if (valueCategory !== undefined || (value !== undefined && isNaN(index))) {
				var labels = me.getLabels();
				value = valueCategory || value;
				var idx = labels.indexOf(value);
				index = idx !== -1 ? idx : index;
			}

			if (me.isHorizontal()) {
				var valueWidth = me.width / offsetAmt;
				var widthOffset = (valueWidth * (index - me.minIndex));

				if (offset) {
					widthOffset += (valueWidth / 2);
				}

				return me.left + Math.round(widthOffset);
			}
			var valueHeight = me.height / offsetAmt;
			var heightOffset = (valueHeight * (index - me.minIndex));

			if (offset) {
				heightOffset += (valueHeight / 2);
			}

			return me.top + Math.round(heightOffset);
		},
		getPixelForTick: function(index) {
			return this.getPixelForValue(this.ticks[index], index + this.minIndex, null);
		},
		getValueForPixel: function(pixel) {
			var me = this;
			var offset = me.options.offset;
			var value;
			var offsetAmt = Math.max((me._ticks.length - (offset ? 0 : 1)), 1);
			var horz = me.isHorizontal();
			var valueDimension = (horz ? me.width : me.height) / offsetAmt;

			pixel -= horz ? me.left : me.top;

			if (offset) {
				pixel -= (valueDimension / 2);
			}

			if (pixel <= 0) {
				value = 0;
			} else {
				value = Math.round(pixel / valueDimension);
			}

			return value + me.minIndex;
		},
		getBasePixel: function() {
			return this.bottom;
		}
	});

	Chart.scaleService.registerScaleType('category', DatasetScale, defaultConfig);

};

},{}],53:[function(require,module,exports){
'use strict';

var defaults = require(25);
var helpers = require(45);
var Ticks = require(34);

module.exports = function(Chart) {

	var defaultConfig = {
		position: 'left',
		ticks: {
			callback: Ticks.formatters.linear
		}
	};

	var LinearScale = Chart.LinearScaleBase.extend({

		determineDataLimits: function() {
			var me = this;
			var opts = me.options;
			var chart = me.chart;
			var data = chart.data;
			var datasets = data.datasets;
			var isHorizontal = me.isHorizontal();
			var DEFAULT_MIN = 0;
			var DEFAULT_MAX = 1;

			function IDMatches(meta) {
				return isHorizontal ? meta.xAxisID === me.id : meta.yAxisID === me.id;
			}

			// First Calculate the range
			me.min = null;
			me.max = null;

			var hasStacks = opts.stacked;
			if (hasStacks === undefined) {
				helpers.each(datasets, function(dataset, datasetIndex) {
					if (hasStacks) {
						return;
					}

					var meta = chart.getDatasetMeta(datasetIndex);
					if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta) &&
						meta.stack !== undefined) {
						hasStacks = true;
					}
				});
			}

			if (opts.stacked || hasStacks) {
				var valuesPerStack = {};

				helpers.each(datasets, function(dataset, datasetIndex) {
					var meta = chart.getDatasetMeta(datasetIndex);
					var key = [
						meta.type,
						// we have a separate stack for stack=undefined datasets when the opts.stacked is undefined
						((opts.stacked === undefined && meta.stack === undefined) ? datasetIndex : ''),
						meta.stack
					].join('.');

					if (valuesPerStack[key] === undefined) {
						valuesPerStack[key] = {
							positiveValues: [],
							negativeValues: []
						};
					}

					// Store these per type
					var positiveValues = valuesPerStack[key].positiveValues;
					var negativeValues = valuesPerStack[key].negativeValues;

					if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
						helpers.each(dataset.data, function(rawValue, index) {
							var value = +me.getRightValue(rawValue);
							if (isNaN(value) || meta.data[index].hidden) {
								return;
							}

							positiveValues[index] = positiveValues[index] || 0;
							negativeValues[index] = negativeValues[index] || 0;

							if (opts.relativePoints) {
								positiveValues[index] = 100;
							} else if (value < 0) {
								negativeValues[index] += value;
							} else {
								positiveValues[index] += value;
							}
						});
					}
				});

				helpers.each(valuesPerStack, function(valuesForType) {
					var values = valuesForType.positiveValues.concat(valuesForType.negativeValues);
					var minVal = helpers.min(values);
					var maxVal = helpers.max(values);
					me.min = me.min === null ? minVal : Math.min(me.min, minVal);
					me.max = me.max === null ? maxVal : Math.max(me.max, maxVal);
				});

			} else {
				helpers.each(datasets, function(dataset, datasetIndex) {
					var meta = chart.getDatasetMeta(datasetIndex);
					if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
						helpers.each(dataset.data, function(rawValue, index) {
							var value = +me.getRightValue(rawValue);
							if (isNaN(value) || meta.data[index].hidden) {
								return;
							}

							if (me.min === null) {
								me.min = value;
							} else if (value < me.min) {
								me.min = value;
							}

							if (me.max === null) {
								me.max = value;
							} else if (value > me.max) {
								me.max = value;
							}
						});
					}
				});
			}

			me.min = isFinite(me.min) && !isNaN(me.min) ? me.min : DEFAULT_MIN;
			me.max = isFinite(me.max) && !isNaN(me.max) ? me.max : DEFAULT_MAX;

			// Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero
			this.handleTickRangeOptions();
		},
		getTickLimit: function() {
			var maxTicks;
			var me = this;
			var tickOpts = me.options.ticks;

			if (me.isHorizontal()) {
				maxTicks = Math.min(tickOpts.maxTicksLimit ? tickOpts.maxTicksLimit : 11, Math.ceil(me.width / 50));
			} else {
				// The factor of 2 used to scale the font size has been experimentally determined.
				var tickFontSize = helpers.valueOrDefault(tickOpts.fontSize, defaults.global.defaultFontSize);
				maxTicks = Math.min(tickOpts.maxTicksLimit ? tickOpts.maxTicksLimit : 11, Math.ceil(me.height / (2 * tickFontSize)));
			}

			return maxTicks;
		},
		// Called after the ticks are built. We need
		handleDirectionalChanges: function() {
			if (!this.isHorizontal()) {
				// We are in a vertical orientation. The top value is the highest. So reverse the array
				this.ticks.reverse();
			}
		},
		getLabelForIndex: function(index, datasetIndex) {
			return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
		},
		// Utils
		getPixelForValue: function(value) {
			// This must be called after fit has been run so that
			// this.left, this.top, this.right, and this.bottom have been defined
			var me = this;
			var start = me.start;

			var rightValue = +me.getRightValue(value);
			var pixel;
			var range = me.end - start;

			if (me.isHorizontal()) {
				pixel = me.left + (me.width / range * (rightValue - start));
				return Math.round(pixel);
			}

			pixel = me.bottom - (me.height / range * (rightValue - start));
			return Math.round(pixel);
		},
		getValueForPixel: function(pixel) {
			var me = this;
			var isHorizontal = me.isHorizontal();
			var innerDimension = isHorizontal ? me.width : me.height;
			var offset = (isHorizontal ? pixel - me.left : me.bottom - pixel) / innerDimension;
			return me.start + ((me.end - me.start) * offset);
		},
		getPixelForTick: function(index) {
			return this.getPixelForValue(this.ticksAsNumbers[index]);
		}
	});
	Chart.scaleService.registerScaleType('linear', LinearScale, defaultConfig);

};

},{"25":25,"34":34,"45":45}],54:[function(require,module,exports){
'use strict';

var helpers = require(45);
var Ticks = require(34);

module.exports = function(Chart) {

	var noop = helpers.noop;

	Chart.LinearScaleBase = Chart.Scale.extend({
		getRightValue: function(value) {
			if (typeof value === 'string') {
				return +value;
			}
			return Chart.Scale.prototype.getRightValue.call(this, value);
		},

		handleTickRangeOptions: function() {
			var me = this;
			var opts = me.options;
			var tickOpts = opts.ticks;

			// If we are forcing it to begin at 0, but 0 will already be rendered on the chart,
			// do nothing since that would make the chart weird. If the user really wants a weird chart
			// axis, they can manually override it
			if (tickOpts.beginAtZero) {
				var minSign = helpers.sign(me.min);
				var maxSign = helpers.sign(me.max);

				if (minSign < 0 && maxSign < 0) {
					// move the top up to 0
					me.max = 0;
				} else if (minSign > 0 && maxSign > 0) {
					// move the bottom down to 0
					me.min = 0;
				}
			}

			var setMin = tickOpts.min !== undefined || tickOpts.suggestedMin !== undefined;
			var setMax = tickOpts.max !== undefined || tickOpts.suggestedMax !== undefined;

			if (tickOpts.min !== undefined) {
				me.min = tickOpts.min;
			} else if (tickOpts.suggestedMin !== undefined) {
				if (me.min === null) {
					me.min = tickOpts.suggestedMin;
				} else {
					me.min = Math.min(me.min, tickOpts.suggestedMin);
				}
			}

			if (tickOpts.max !== undefined) {
				me.max = tickOpts.max;
			} else if (tickOpts.suggestedMax !== undefined) {
				if (me.max === null) {
					me.max = tickOpts.suggestedMax;
				} else {
					me.max = Math.max(me.max, tickOpts.suggestedMax);
				}
			}

			if (setMin !== setMax) {
				// We set the min or the max but not both.
				// So ensure that our range is good
				// Inverted or 0 length range can happen when
				// ticks.min is set, and no datasets are visible
				if (me.min >= me.max) {
					if (setMin) {
						me.max = me.min + 1;
					} else {
						me.min = me.max - 1;
					}
				}
			}

			if (me.min === me.max) {
				me.max++;

				if (!tickOpts.beginAtZero) {
					me.min--;
				}
			}
		},
		getTickLimit: noop,
		handleDirectionalChanges: noop,

		buildTicks: function() {
			var me = this;
			var opts = me.options;
			var tickOpts = opts.ticks;

			// Figure out what the max number of ticks we can support it is based on the size of
			// the axis area. For now, we say that the minimum tick spacing in pixels must be 50
			// We also limit the maximum number of ticks to 11 which gives a nice 10 squares on
			// the graph. Make sure we always have at least 2 ticks
			var maxTicks = me.getTickLimit();
			maxTicks = Math.max(2, maxTicks);

			var numericGeneratorOptions = {
				maxTicks: maxTicks,
				min: tickOpts.min,
				max: tickOpts.max,
				stepSize: helpers.valueOrDefault(tickOpts.fixedStepSize, tickOpts.stepSize)
			};
			var ticks = me.ticks = Ticks.generators.linear(numericGeneratorOptions, me);

			me.handleDirectionalChanges();

			// At this point, we need to update our max and min given the tick values since we have expanded the
			// range of the scale
			me.max = helpers.max(ticks);
			me.min = helpers.min(ticks);

			if (tickOpts.reverse) {
				ticks.reverse();

				me.start = me.max;
				me.end = me.min;
			} else {
				me.start = me.min;
				me.end = me.max;
			}
		},
		convertTicksToLabels: function() {
			var me = this;
			me.ticksAsNumbers = me.ticks.slice();
			me.zeroLineIndex = me.ticks.indexOf(0);

			Chart.Scale.prototype.convertTicksToLabels.call(me);
		}
	});
};

},{"34":34,"45":45}],55:[function(require,module,exports){
'use strict';

var helpers = require(45);
var Ticks = require(34);

module.exports = function(Chart) {

	var defaultConfig = {
		position: 'left',

		// label settings
		ticks: {
			callback: Ticks.formatters.logarithmic
		}
	};

	var LogarithmicScale = Chart.Scale.extend({
		determineDataLimits: function() {
			var me = this;
			var opts = me.options;
			var tickOpts = opts.ticks;
			var chart = me.chart;
			var data = chart.data;
			var datasets = data.datasets;
			var valueOrDefault = helpers.valueOrDefault;
			var isHorizontal = me.isHorizontal();
			function IDMatches(meta) {
				return isHorizontal ? meta.xAxisID === me.id : meta.yAxisID === me.id;
			}

			// Calculate Range
			me.min = null;
			me.max = null;
			me.minNotZero = null;

			var hasStacks = opts.stacked;
			if (hasStacks === undefined) {
				helpers.each(datasets, function(dataset, datasetIndex) {
					if (hasStacks) {
						return;
					}

					var meta = chart.getDatasetMeta(datasetIndex);
					if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta) &&
						meta.stack !== undefined) {
						hasStacks = true;
					}
				});
			}

			if (opts.stacked || hasStacks) {
				var valuesPerStack = {};

				helpers.each(datasets, function(dataset, datasetIndex) {
					var meta = chart.getDatasetMeta(datasetIndex);
					var key = [
						meta.type,
						// we have a separate stack for stack=undefined datasets when the opts.stacked is undefined
						((opts.stacked === undefined && meta.stack === undefined) ? datasetIndex : ''),
						meta.stack
					].join('.');

					if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
						if (valuesPerStack[key] === undefined) {
							valuesPerStack[key] = [];
						}

						helpers.each(dataset.data, function(rawValue, index) {
							var values = valuesPerStack[key];
							var value = +me.getRightValue(rawValue);
							if (isNaN(value) || meta.data[index].hidden) {
								return;
							}

							values[index] = values[index] || 0;

							if (opts.relativePoints) {
								values[index] = 100;
							} else {
								// Don't need to split positive and negative since the log scale can't handle a 0 crossing
								values[index] += value;
							}
						});
					}
				});

				helpers.each(valuesPerStack, function(valuesForType) {
					var minVal = helpers.min(valuesForType);
					var maxVal = helpers.max(valuesForType);
					me.min = me.min === null ? minVal : Math.min(me.min, minVal);
					me.max = me.max === null ? maxVal : Math.max(me.max, maxVal);
				});

			} else {
				helpers.each(datasets, function(dataset, datasetIndex) {
					var meta = chart.getDatasetMeta(datasetIndex);
					if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
						helpers.each(dataset.data, function(rawValue, index) {
							var value = +me.getRightValue(rawValue);
							if (isNaN(value) || meta.data[index].hidden) {
								return;
							}

							if (me.min === null) {
								me.min = value;
							} else if (value < me.min) {
								me.min = value;
							}

							if (me.max === null) {
								me.max = value;
							} else if (value > me.max) {
								me.max = value;
							}

							if (value !== 0 && (me.minNotZero === null || value < me.minNotZero)) {
								me.minNotZero = value;
							}
						});
					}
				});
			}

			me.min = valueOrDefault(tickOpts.min, me.min);
			me.max = valueOrDefault(tickOpts.max, me.max);

			if (me.min === me.max) {
				if (me.min !== 0 && me.min !== null) {
					me.min = Math.pow(10, Math.floor(helpers.log10(me.min)) - 1);
					me.max = Math.pow(10, Math.floor(helpers.log10(me.max)) + 1);
				} else {
					me.min = 1;
					me.max = 10;
				}
			}
		},
		buildTicks: function() {
			var me = this;
			var opts = me.options;
			var tickOpts = opts.ticks;

			var generationOptions = {
				min: tickOpts.min,
				max: tickOpts.max
			};
			var ticks = me.ticks = Ticks.generators.logarithmic(generationOptions, me);

			if (!me.isHorizontal()) {
				// We are in a vertical orientation. The top value is the highest. So reverse the array
				ticks.reverse();
			}

			// At this point, we need to update our max and min given the tick values since we have expanded the
			// range of the scale
			me.max = helpers.max(ticks);
			me.min = helpers.min(ticks);

			if (tickOpts.reverse) {
				ticks.reverse();

				me.start = me.max;
				me.end = me.min;
			} else {
				me.start = me.min;
				me.end = me.max;
			}
		},
		convertTicksToLabels: function() {
			this.tickValues = this.ticks.slice();

			Chart.Scale.prototype.convertTicksToLabels.call(this);
		},
		// Get the correct tooltip label
		getLabelForIndex: function(index, datasetIndex) {
			return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
		},
		getPixelForTick: function(index) {
			return this.getPixelForValue(this.tickValues[index]);
		},
		getPixelForValue: function(value) {
			var me = this;
			var start = me.start;
			var newVal = +me.getRightValue(value);
			var opts = me.options;
			var tickOpts = opts.ticks;
			var innerDimension, pixel, range;

			if (me.isHorizontal()) {
				range = helpers.log10(me.end) - helpers.log10(start); // todo: if start === 0
				if (newVal === 0) {
					pixel = me.left;
				} else {
					innerDimension = me.width;
					pixel = me.left + (innerDimension / range * (helpers.log10(newVal) - helpers.log10(start)));
				}
			} else {
				// Bottom - top since pixels increase downward on a screen
				innerDimension = me.height;
				if (start === 0 && !tickOpts.reverse) {
					range = helpers.log10(me.end) - helpers.log10(me.minNotZero);
					if (newVal === start) {
						pixel = me.bottom;
					} else if (newVal === me.minNotZero) {
						pixel = me.bottom - innerDimension * 0.02;
					} else {
						pixel = me.bottom - innerDimension * 0.02 - (innerDimension * 0.98 / range * (helpers.log10(newVal) - helpers.log10(me.minNotZero)));
					}
				} else if (me.end === 0 && tickOpts.reverse) {
					range = helpers.log10(me.start) - helpers.log10(me.minNotZero);
					if (newVal === me.end) {
						pixel = me.top;
					} else if (newVal === me.minNotZero) {
						pixel = me.top + innerDimension * 0.02;
					} else {
						pixel = me.top + innerDimension * 0.02 + (innerDimension * 0.98 / range * (helpers.log10(newVal) - helpers.log10(me.minNotZero)));
					}
				} else if (newVal === 0) {
					pixel = tickOpts.reverse ? me.top : me.bottom;
				} else {
					range = helpers.log10(me.end) - helpers.log10(start);
					innerDimension = me.height;
					pixel = me.bottom - (innerDimension / range * (helpers.log10(newVal) - helpers.log10(start)));
				}
			}
			return pixel;
		},
		getValueForPixel: function(pixel) {
			var me = this;
			var range = helpers.log10(me.end) - helpers.log10(me.start);
			var value, innerDimension;

			if (me.isHorizontal()) {
				innerDimension = me.width;
				value = me.start * Math.pow(10, (pixel - me.left) * range / innerDimension);
			} else { // todo: if start === 0
				innerDimension = me.height;
				value = Math.pow(10, (me.bottom - pixel) * range / innerDimension) / me.start;
			}
			return value;
		}
	});
	Chart.scaleService.registerScaleType('logarithmic', LogarithmicScale, defaultConfig);

};

},{"34":34,"45":45}],56:[function(require,module,exports){
'use strict';

var defaults = require(25);
var helpers = require(45);
var Ticks = require(34);

module.exports = function(Chart) {

	var globalDefaults = defaults.global;

	var defaultConfig = {
		display: true,

		// Boolean - Whether to animate scaling the chart from the centre
		animate: true,
		position: 'chartArea',

		angleLines: {
			display: true,
			color: 'rgba(0, 0, 0, 0.1)',
			lineWidth: 1
		},

		gridLines: {
			circular: false
		},

		// label settings
		ticks: {
			// Boolean - Show a backdrop to the scale label
			showLabelBackdrop: true,

			// String - The colour of the label backdrop
			backdropColor: 'rgba(255,255,255,0.75)',

			// Number - The backdrop padding above & below the label in pixels
			backdropPaddingY: 2,

			// Number - The backdrop padding to the side of the label in pixels
			backdropPaddingX: 2,

			callback: Ticks.formatters.linear
		},

		pointLabels: {
			// Boolean - if true, show point labels
			display: true,

			// Number - Point label font size in pixels
			fontSize: 10,

			// Function - Used to convert point labels
			callback: function(label) {
				return label;
			}
		}
	};

	function getValueCount(scale) {
		var opts = scale.options;
		return opts.angleLines.display || opts.pointLabels.display ? scale.chart.data.labels.length : 0;
	}

	function getPointLabelFontOptions(scale) {
		var pointLabelOptions = scale.options.pointLabels;
		var fontSize = helpers.valueOrDefault(pointLabelOptions.fontSize, globalDefaults.defaultFontSize);
		var fontStyle = helpers.valueOrDefault(pointLabelOptions.fontStyle, globalDefaults.defaultFontStyle);
		var fontFamily = helpers.valueOrDefault(pointLabelOptions.fontFamily, globalDefaults.defaultFontFamily);
		var font = helpers.fontString(fontSize, fontStyle, fontFamily);

		return {
			size: fontSize,
			style: fontStyle,
			family: fontFamily,
			font: font
		};
	}

	function measureLabelSize(ctx, fontSize, label) {
		if (helpers.isArray(label)) {
			return {
				w: helpers.longestText(ctx, ctx.font, label),
				h: (label.length * fontSize) + ((label.length - 1) * 1.5 * fontSize)
			};
		}

		return {
			w: ctx.measureText(label).width,
			h: fontSize
		};
	}

	function determineLimits(angle, pos, size, min, max) {
		if (angle === min || angle === max) {
			return {
				start: pos - (size / 2),
				end: pos + (size / 2)
			};
		} else if (angle < min || angle > max) {
			return {
				start: pos - size - 5,
				end: pos
			};
		}

		return {
			start: pos,
			end: pos + size + 5
		};
	}

	/**
	 * Helper function to fit a radial linear scale with point labels
	 */
	function fitWithPointLabels(scale) {
		/*
		 * Right, this is really confusing and there is a lot of maths going on here
		 * The gist of the problem is here: https://gist.github.com/nnnick/696cc9c55f4b0beb8fe9
		 *
		 * Reaction: https://dl.dropboxusercontent.com/u/34601363/toomuchscience.gif
		 *
		 * Solution:
		 *
		 * We assume the radius of the polygon is half the size of the canvas at first
		 * at each index we check if the text overlaps.
		 *
		 * Where it does, we store that angle and that index.
		 *
		 * After finding the largest index and angle we calculate how much we need to remove
		 * from the shape radius to move the point inwards by that x.
		 *
		 * We average the left and right distances to get the maximum shape radius that can fit in the box
		 * along with labels.
		 *
		 * Once we have that, we can find the centre point for the chart, by taking the x text protrusion
		 * on each side, removing that from the size, halving it and adding the left x protrusion width.
		 *
		 * This will mean we have a shape fitted to the canvas, as large as it can be with the labels
		 * and position it in the most space efficient manner
		 *
		 * https://dl.dropboxusercontent.com/u/34601363/yeahscience.gif
		 */

		var plFont = getPointLabelFontOptions(scale);

		// Get maximum radius of the polygon. Either half the height (minus the text width) or half the width.
		// Use this to calculate the offset + change. - Make sure L/R protrusion is at least 0 to stop issues with centre points
		var largestPossibleRadius = Math.min(scale.height / 2, scale.width / 2);
		var furthestLimits = {
			r: scale.width,
			l: 0,
			t: scale.height,
			b: 0
		};
		var furthestAngles = {};
		var i, textSize, pointPosition;

		scale.ctx.font = plFont.font;
		scale._pointLabelSizes = [];

		var valueCount = getValueCount(scale);
		for (i = 0; i < valueCount; i++) {
			pointPosition = scale.getPointPosition(i, largestPossibleRadius);
			textSize = measureLabelSize(scale.ctx, plFont.size, scale.pointLabels[i] || '');
			scale._pointLabelSizes[i] = textSize;

			// Add quarter circle to make degree 0 mean top of circle
			var angleRadians = scale.getIndexAngle(i);
			var angle = helpers.toDegrees(angleRadians) % 360;
			var hLimits = determineLimits(angle, pointPosition.x, textSize.w, 0, 180);
			var vLimits = determineLimits(angle, pointPosition.y, textSize.h, 90, 270);

			if (hLimits.start < furthestLimits.l) {
				furthestLimits.l = hLimits.start;
				furthestAngles.l = angleRadians;
			}

			if (hLimits.end > furthestLimits.r) {
				furthestLimits.r = hLimits.end;
				furthestAngles.r = angleRadians;
			}

			if (vLimits.start < furthestLimits.t) {
				furthestLimits.t = vLimits.start;
				furthestAngles.t = angleRadians;
			}

			if (vLimits.end > furthestLimits.b) {
				furthestLimits.b = vLimits.end;
				furthestAngles.b = angleRadians;
			}
		}

		scale.setReductions(largestPossibleRadius, furthestLimits, furthestAngles);
	}

	/**
	 * Helper function to fit a radial linear scale with no point labels
	 */
	function fit(scale) {
		var largestPossibleRadius = Math.min(scale.height / 2, scale.width / 2);
		scale.drawingArea = Math.round(largestPossibleRadius);
		scale.setCenterPoint(0, 0, 0, 0);
	}

	function getTextAlignForAngle(angle) {
		if (angle === 0 || angle === 180) {
			return 'center';
		} else if (angle < 180) {
			return 'left';
		}

		return 'right';
	}

	function fillText(ctx, text, position, fontSize) {
		if (helpers.isArray(text)) {
			var y = position.y;
			var spacing = 1.5 * fontSize;

			for (var i = 0; i < text.length; ++i) {
				ctx.fillText(text[i], position.x, y);
				y += spacing;
			}
		} else {
			ctx.fillText(text, position.x, position.y);
		}
	}

	function adjustPointPositionForLabelHeight(angle, textSize, position) {
		if (angle === 90 || angle === 270) {
			position.y -= (textSize.h / 2);
		} else if (angle > 270 || angle < 90) {
			position.y -= textSize.h;
		}
	}

	function drawPointLabels(scale) {
		var ctx = scale.ctx;
		var valueOrDefault = helpers.valueOrDefault;
		var opts = scale.options;
		var angleLineOpts = opts.angleLines;
		var pointLabelOpts = opts.pointLabels;

		ctx.lineWidth = angleLineOpts.lineWidth;
		ctx.strokeStyle = angleLineOpts.color;

		var outerDistance = scale.getDistanceFromCenterForValue(opts.ticks.reverse ? scale.min : scale.max);

		// Point Label Font
		var plFont = getPointLabelFontOptions(scale);

		ctx.textBaseline = 'top';

		for (var i = getValueCount(scale) - 1; i >= 0; i--) {
			if (angleLineOpts.display) {
				var outerPosition = scale.getPointPosition(i, outerDistance);
				ctx.beginPath();
				ctx.moveTo(scale.xCenter, scale.yCenter);
				ctx.lineTo(outerPosition.x, outerPosition.y);
				ctx.stroke();
				ctx.closePath();
			}

			if (pointLabelOpts.display) {
				// Extra 3px out for some label spacing
				var pointLabelPosition = scale.getPointPosition(i, outerDistance + 5);

				// Keep this in loop since we may support array properties here
				var pointLabelFontColor = valueOrDefault(pointLabelOpts.fontColor, globalDefaults.defaultFontColor);
				ctx.font = plFont.font;
				ctx.fillStyle = pointLabelFontColor;

				var angleRadians = scale.getIndexAngle(i);
				var angle = helpers.toDegrees(angleRadians);
				ctx.textAlign = getTextAlignForAngle(angle);
				adjustPointPositionForLabelHeight(angle, scale._pointLabelSizes[i], pointLabelPosition);
				fillText(ctx, scale.pointLabels[i] || '', pointLabelPosition, plFont.size);
			}
		}
	}

	function drawRadiusLine(scale, gridLineOpts, radius, index) {
		var ctx = scale.ctx;
		ctx.strokeStyle = helpers.valueAtIndexOrDefault(gridLineOpts.color, index - 1);
		ctx.lineWidth = helpers.valueAtIndexOrDefault(gridLineOpts.lineWidth, index - 1);

		if (scale.options.gridLines.circular) {
			// Draw circular arcs between the points
			ctx.beginPath();
			ctx.arc(scale.xCenter, scale.yCenter, radius, 0, Math.PI * 2);
			ctx.closePath();
			ctx.stroke();
		} else {
			// Draw straight lines connecting each index
			var valueCount = getValueCount(scale);

			if (valueCount === 0) {
				return;
			}

			ctx.beginPath();
			var pointPosition = scale.getPointPosition(0, radius);
			ctx.moveTo(pointPosition.x, pointPosition.y);

			for (var i = 1; i < valueCount; i++) {
				pointPosition = scale.getPointPosition(i, radius);
				ctx.lineTo(pointPosition.x, pointPosition.y);
			}

			ctx.closePath();
			ctx.stroke();
		}
	}

	function numberOrZero(param) {
		return helpers.isNumber(param) ? param : 0;
	}

	var LinearRadialScale = Chart.LinearScaleBase.extend({
		setDimensions: function() {
			var me = this;
			var opts = me.options;
			var tickOpts = opts.ticks;
			// Set the unconstrained dimension before label rotation
			me.width = me.maxWidth;
			me.height = me.maxHeight;
			me.xCenter = Math.round(me.width / 2);
			me.yCenter = Math.round(me.height / 2);

			var minSize = helpers.min([me.height, me.width]);
			var tickFontSize = helpers.valueOrDefault(tickOpts.fontSize, globalDefaults.defaultFontSize);
			me.drawingArea = opts.display ? (minSize / 2) - (tickFontSize / 2 + tickOpts.backdropPaddingY) : (minSize / 2);
		},
		determineDataLimits: function() {
			var me = this;
			var chart = me.chart;
			var min = Number.POSITIVE_INFINITY;
			var max = Number.NEGATIVE_INFINITY;

			helpers.each(chart.data.datasets, function(dataset, datasetIndex) {
				if (chart.isDatasetVisible(datasetIndex)) {
					var meta = chart.getDatasetMeta(datasetIndex);

					helpers.each(dataset.data, function(rawValue, index) {
						var value = +me.getRightValue(rawValue);
						if (isNaN(value) || meta.data[index].hidden) {
							return;
						}

						min = Math.min(value, min);
						max = Math.max(value, max);
					});
				}
			});

			me.min = (min === Number.POSITIVE_INFINITY ? 0 : min);
			me.max = (max === Number.NEGATIVE_INFINITY ? 0 : max);

			// Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero
			me.handleTickRangeOptions();
		},
		getTickLimit: function() {
			var tickOpts = this.options.ticks;
			var tickFontSize = helpers.valueOrDefault(tickOpts.fontSize, globalDefaults.defaultFontSize);
			return Math.min(tickOpts.maxTicksLimit ? tickOpts.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * tickFontSize)));
		},
		convertTicksToLabels: function() {
			var me = this;

			Chart.LinearScaleBase.prototype.convertTicksToLabels.call(me);

			// Point labels
			me.pointLabels = me.chart.data.labels.map(me.options.pointLabels.callback, me);
		},
		getLabelForIndex: function(index, datasetIndex) {
			return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
		},
		fit: function() {
			if (this.options.pointLabels.display) {
				fitWithPointLabels(this);
			} else {
				fit(this);
			}
		},
		/**
		 * Set radius reductions and determine new radius and center point
		 * @private
		 */
		setReductions: function(largestPossibleRadius, furthestLimits, furthestAngles) {
			var me = this;
			var radiusReductionLeft = furthestLimits.l / Math.sin(furthestAngles.l);
			var radiusReductionRight = Math.max(furthestLimits.r - me.width, 0) / Math.sin(furthestAngles.r);
			var radiusReductionTop = -furthestLimits.t / Math.cos(furthestAngles.t);
			var radiusReductionBottom = -Math.max(furthestLimits.b - me.height, 0) / Math.cos(furthestAngles.b);

			radiusReductionLeft = numberOrZero(radiusReductionLeft);
			radiusReductionRight = numberOrZero(radiusReductionRight);
			radiusReductionTop = numberOrZero(radiusReductionTop);
			radiusReductionBottom = numberOrZero(radiusReductionBottom);

			me.drawingArea = Math.min(
				Math.round(largestPossibleRadius - (radiusReductionLeft + radiusReductionRight) / 2),
				Math.round(largestPossibleRadius - (radiusReductionTop + radiusReductionBottom) / 2));
			me.setCenterPoint(radiusReductionLeft, radiusReductionRight, radiusReductionTop, radiusReductionBottom);
		},
		setCenterPoint: function(leftMovement, rightMovement, topMovement, bottomMovement) {
			var me = this;
			var maxRight = me.width - rightMovement - me.drawingArea;
			var maxLeft = leftMovement + me.drawingArea;
			var maxTop = topMovement + me.drawingArea;
			var maxBottom = me.height - bottomMovement - me.drawingArea;

			me.xCenter = Math.round(((maxLeft + maxRight) / 2) + me.left);
			me.yCenter = Math.round(((maxTop + maxBottom) / 2) + me.top);
		},

		getIndexAngle: function(index) {
			var angleMultiplier = (Math.PI * 2) / getValueCount(this);
			var startAngle = this.chart.options && this.chart.options.startAngle ?
				this.chart.options.startAngle :
				0;

			var startAngleRadians = startAngle * Math.PI * 2 / 360;

			// Start from the top instead of right, so remove a quarter of the circle
			return index * angleMultiplier + startAngleRadians;
		},
		getDistanceFromCenterForValue: function(value) {
			var me = this;

			if (value === null) {
				return 0; // null always in center
			}

			// Take into account half font size + the yPadding of the top value
			var scalingFactor = me.drawingArea / (me.max - me.min);
			if (me.options.ticks.reverse) {
				return (me.max - value) * scalingFactor;
			}
			return (value - me.min) * scalingFactor;
		},
		getPointPosition: function(index, distanceFromCenter) {
			var me = this;
			var thisAngle = me.getIndexAngle(index) - (Math.PI / 2);
			return {
				x: Math.round(Math.cos(thisAngle) * distanceFromCenter) + me.xCenter,
				y: Math.round(Math.sin(thisAngle) * distanceFromCenter) + me.yCenter
			};
		},
		getPointPositionForValue: function(index, value) {
			return this.getPointPosition(index, this.getDistanceFromCenterForValue(value));
		},

		getBasePosition: function() {
			var me = this;
			var min = me.min;
			var max = me.max;

			return me.getPointPositionForValue(0,
				me.beginAtZero ? 0 :
				min < 0 && max < 0 ? max :
				min > 0 && max > 0 ? min :
				0);
		},

		draw: function() {
			var me = this;
			var opts = me.options;
			var gridLineOpts = opts.gridLines;
			var tickOpts = opts.ticks;
			var valueOrDefault = helpers.valueOrDefault;

			if (opts.display) {
				var ctx = me.ctx;
				var startAngle = this.getIndexAngle(0);

				// Tick Font
				var tickFontSize = valueOrDefault(tickOpts.fontSize, globalDefaults.defaultFontSize);
				var tickFontStyle = valueOrDefault(tickOpts.fontStyle, globalDefaults.defaultFontStyle);
				var tickFontFamily = valueOrDefault(tickOpts.fontFamily, globalDefaults.defaultFontFamily);
				var tickLabelFont = helpers.fontString(tickFontSize, tickFontStyle, tickFontFamily);

				helpers.each(me.ticks, function(label, index) {
					// Don't draw a centre value (if it is minimum)
					if (index > 0 || tickOpts.reverse) {
						var yCenterOffset = me.getDistanceFromCenterForValue(me.ticksAsNumbers[index]);

						// Draw circular lines around the scale
						if (gridLineOpts.display && index !== 0) {
							drawRadiusLine(me, gridLineOpts, yCenterOffset, index);
						}

						if (tickOpts.display) {
							var tickFontColor = valueOrDefault(tickOpts.fontColor, globalDefaults.defaultFontColor);
							ctx.font = tickLabelFont;

							ctx.save();
							ctx.translate(me.xCenter, me.yCenter);
							ctx.rotate(startAngle);

							if (tickOpts.showLabelBackdrop) {
								var labelWidth = ctx.measureText(label).width;
								ctx.fillStyle = tickOpts.backdropColor;
								ctx.fillRect(
									-labelWidth / 2 - tickOpts.backdropPaddingX,
									-yCenterOffset - tickFontSize / 2 - tickOpts.backdropPaddingY,
									labelWidth + tickOpts.backdropPaddingX * 2,
									tickFontSize + tickOpts.backdropPaddingY * 2
								);
							}

							ctx.textAlign = 'center';
							ctx.textBaseline = 'middle';
							ctx.fillStyle = tickFontColor;
							ctx.fillText(label, 0, -yCenterOffset);
							ctx.restore();
						}
					}
				});

				if (opts.angleLines.display || opts.pointLabels.display) {
					drawPointLabels(me);
				}
			}
		}
	});
	Chart.scaleService.registerScaleType('radialLinear', LinearRadialScale, defaultConfig);

};

},{"25":25,"34":34,"45":45}],57:[function(require,module,exports){
/* global window: false */
'use strict';

var moment = require(1);
moment = typeof moment === 'function' ? moment : window.moment;

var defaults = require(25);
var helpers = require(45);

// Integer constants are from the ES6 spec.
var MIN_INTEGER = Number.MIN_SAFE_INTEGER || -9007199254740991;
var MAX_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;

var INTERVALS = {
	millisecond: {
		common: true,
		size: 1,
		steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
	},
	second: {
		common: true,
		size: 1000,
		steps: [1, 2, 5, 10, 30]
	},
	minute: {
		common: true,
		size: 60000,
		steps: [1, 2, 5, 10, 30]
	},
	hour: {
		common: true,
		size: 3600000,
		steps: [1, 2, 3, 6, 12]
	},
	day: {
		common: true,
		size: 86400000,
		steps: [1, 2, 5]
	},
	week: {
		common: false,
		size: 604800000,
		steps: [1, 2, 3, 4]
	},
	month: {
		common: true,
		size: 2.628e9,
		steps: [1, 2, 3]
	},
	quarter: {
		common: false,
		size: 7.884e9,
		steps: [1, 2, 3, 4]
	},
	year: {
		common: true,
		size: 3.154e10
	}
};

var UNITS = Object.keys(INTERVALS);

function sorter(a, b) {
	return a - b;
}

function arrayUnique(items) {
	var hash = {};
	var out = [];
	var i, ilen, item;

	for (i = 0, ilen = items.length; i < ilen; ++i) {
		item = items[i];
		if (!hash[item]) {
			hash[item] = true;
			out.push(item);
		}
	}

	return out;
}

/**
 * Returns an array of {time, pos} objects used to interpolate a specific `time` or position
 * (`pos`) on the scale, by searching entries before and after the requested value. `pos` is
 * a decimal between 0 and 1: 0 being the start of the scale (left or top) and 1 the other
 * extremity (left + width or top + height). Note that it would be more optimized to directly
 * store pre-computed pixels, but the scale dimensions are not guaranteed at the time we need
 * to create the lookup table. The table ALWAYS contains at least two items: min and max.
 *
 * @param {Number[]} timestamps - timestamps sorted from lowest to highest.
 * @param {String} distribution - If 'linear', timestamps will be spread linearly along the min
 * and max range, so basically, the table will contains only two items: {min, 0} and {max, 1}.
 * If 'series', timestamps will be positioned at the same distance from each other. In this
 * case, only timestamps that break the time linearity are registered, meaning that in the
 * best case, all timestamps are linear, the table contains only min and max.
 */
function buildLookupTable(timestamps, min, max, distribution) {
	if (distribution === 'linear' || !timestamps.length) {
		return [
			{time: min, pos: 0},
			{time: max, pos: 1}
		];
	}

	var table = [];
	var items = [min];
	var i, ilen, prev, curr, next;

	for (i = 0, ilen = timestamps.length; i < ilen; ++i) {
		curr = timestamps[i];
		if (curr > min && curr < max) {
			items.push(curr);
		}
	}

	items.push(max);

	for (i = 0, ilen = items.length; i < ilen; ++i) {
		next = items[i + 1];
		prev = items[i - 1];
		curr = items[i];

		// only add points that breaks the scale linearity
		if (prev === undefined || next === undefined || Math.round((next + prev) / 2) !== curr) {
			table.push({time: curr, pos: i / (ilen - 1)});
		}
	}

	return table;
}

// @see adapted from http://www.anujgakhar.com/2014/03/01/binary-search-in-javascript/
function lookup(table, key, value) {
	var lo = 0;
	var hi = table.length - 1;
	var mid, i0, i1;

	while (lo >= 0 && lo <= hi) {
		mid = (lo + hi) >> 1;
		i0 = table[mid - 1] || null;
		i1 = table[mid];

		if (!i0) {
			// given value is outside table (before first item)
			return {lo: null, hi: i1};
		} else if (i1[key] < value) {
			lo = mid + 1;
		} else if (i0[key] > value) {
			hi = mid - 1;
		} else {
			return {lo: i0, hi: i1};
		}
	}

	// given value is outside table (after last item)
	return {lo: i1, hi: null};
}

/**
 * Linearly interpolates the given source `value` using the table items `skey` values and
 * returns the associated `tkey` value. For example, interpolate(table, 'time', 42, 'pos')
 * returns the position for a timestamp equal to 42. If value is out of bounds, values at
 * index [0, 1] or [n - 1, n] are used for the interpolation.
 */
function interpolate(table, skey, sval, tkey) {
	var range = lookup(table, skey, sval);

	// Note: the lookup table ALWAYS contains at least 2 items (min and max)
	var prev = !range.lo ? table[0] : !range.hi ? table[table.length - 2] : range.lo;
	var next = !range.lo ? table[1] : !range.hi ? table[table.length - 1] : range.hi;

	var span = next[skey] - prev[skey];
	var ratio = span ? (sval - prev[skey]) / span : 0;
	var offset = (next[tkey] - prev[tkey]) * ratio;

	return prev[tkey] + offset;
}

/**
 * Convert the given value to a moment object using the given time options.
 * @see http://momentjs.com/docs/#/parsing/
 */
function momentify(value, options) {
	var parser = options.parser;
	var format = options.parser || options.format;

	if (typeof parser === 'function') {
		return parser(value);
	}

	if (typeof value === 'string' && typeof format === 'string') {
		return moment(value, format);
	}

	if (!(value instanceof moment)) {
		value = moment(value);
	}

	if (value.isValid()) {
		return value;
	}

	// Labels are in an incompatible moment format and no `parser` has been provided.
	// The user might still use the deprecated `format` option to convert his inputs.
	if (typeof format === 'function') {
		return format(value);
	}

	return value;
}

function parse(input, scale) {
	if (helpers.isNullOrUndef(input)) {
		return null;
	}

	var options = scale.options.time;
	var value = momentify(scale.getRightValue(input), options);
	if (!value.isValid()) {
		return null;
	}

	if (options.round) {
		value.startOf(options.round);
	}

	return value.valueOf();
}

/**
 * Returns the number of unit to skip to be able to display up to `capacity` number of ticks
 * in `unit` for the given `min` / `max` range and respecting the interval steps constraints.
 */
function determineStepSize(min, max, unit, capacity) {
	var range = max - min;
	var interval = INTERVALS[unit];
	var milliseconds = interval.size;
	var steps = interval.steps;
	var i, ilen, factor;

	if (!steps) {
		return Math.ceil(range / ((capacity || 1) * milliseconds));
	}

	for (i = 0, ilen = steps.length; i < ilen; ++i) {
		factor = steps[i];
		if (Math.ceil(range / (milliseconds * factor)) <= capacity) {
			break;
		}
	}

	return factor;
}

/**
 * Figures out what unit results in an appropriate number of auto-generated ticks
 */
function determineUnitForAutoTicks(minUnit, min, max, capacity) {
	var ilen = UNITS.length;
	var i, interval, factor;

	for (i = UNITS.indexOf(minUnit); i < ilen - 1; ++i) {
		interval = INTERVALS[UNITS[i]];
		factor = interval.steps ? interval.steps[interval.steps.length - 1] : MAX_INTEGER;

		if (interval.common && Math.ceil((max - min) / (factor * interval.size)) <= capacity) {
			return UNITS[i];
		}
	}

	return UNITS[ilen - 1];
}

/**
 * Figures out what unit to format a set of ticks with
 */
function determineUnitForFormatting(ticks, minUnit, min, max) {
	var duration = moment.duration(moment(max).diff(moment(min)));
	var ilen = UNITS.length;
	var i, unit;

	for (i = ilen - 1; i >= UNITS.indexOf(minUnit); i--) {
		unit = UNITS[i];
		if (INTERVALS[unit].common && duration.as(unit) >= ticks.length) {
			return unit;
		}
	}

	return UNITS[minUnit ? UNITS.indexOf(minUnit) : 0];
}

function determineMajorUnit(unit) {
	for (var i = UNITS.indexOf(unit) + 1, ilen = UNITS.length; i < ilen; ++i) {
		if (INTERVALS[UNITS[i]].common) {
			return UNITS[i];
		}
	}
}

/**
 * Generates a maximum of `capacity` timestamps between min and max, rounded to the
 * `minor` unit, aligned on the `major` unit and using the given scale time `options`.
 * Important: this method can return ticks outside the min and max range, it's the
 * responsibility of the calling code to clamp values if needed.
 */
function generate(min, max, capacity, options) {
	var timeOpts = options.time;
	var minor = timeOpts.unit || determineUnitForAutoTicks(timeOpts.minUnit, min, max, capacity);
	var major = determineMajorUnit(minor);
	var stepSize = helpers.valueOrDefault(timeOpts.stepSize, timeOpts.unitStepSize);
	var weekday = minor === 'week' ? timeOpts.isoWeekday : false;
	var majorTicksEnabled = options.ticks.major.enabled;
	var interval = INTERVALS[minor];
	var first = moment(min);
	var last = moment(max);
	var ticks = [];
	var time;

	if (!stepSize) {
		stepSize = determineStepSize(min, max, minor, capacity);
	}

	// For 'week' unit, handle the first day of week option
	if (weekday) {
		first = first.isoWeekday(weekday);
		last = last.isoWeekday(weekday);
	}

	// Align first/last ticks on unit
	first = first.startOf(weekday ? 'day' : minor);
	last = last.startOf(weekday ? 'day' : minor);

	// Make sure that the last tick include max
	if (last < max) {
		last.add(1, minor);
	}

	time = moment(first);

	if (majorTicksEnabled && major && !weekday && !timeOpts.round) {
		// Align the first tick on the previous `minor` unit aligned on the `major` unit:
		// we first aligned time on the previous `major` unit then add the number of full
		// stepSize there is between first and the previous major time.
		time.startOf(major);
		time.add(~~((first - time) / (interval.size * stepSize)) * stepSize, minor);
	}

	for (; time < last; time.add(stepSize, minor)) {
		ticks.push(+time);
	}

	ticks.push(+time);

	return ticks;
}

/**
 * Returns the right and left offsets from edges in the form of {left, right}.
 * Offsets are added when the `offset` option is true.
 */
function computeOffsets(table, ticks, min, max, options) {
	var left = 0;
	var right = 0;
	var upper, lower;

	if (options.offset && ticks.length) {
		if (!options.time.min) {
			upper = ticks.length > 1 ? ticks[1] : max;
			lower = ticks[0];
			left = (
				interpolate(table, 'time', upper, 'pos') -
				interpolate(table, 'time', lower, 'pos')
			) / 2;
		}
		if (!options.time.max) {
			upper = ticks[ticks.length - 1];
			lower = ticks.length > 1 ? ticks[ticks.length - 2] : min;
			right = (
				interpolate(table, 'time', upper, 'pos') -
				interpolate(table, 'time', lower, 'pos')
			) / 2;
		}
	}

	return {left: left, right: right};
}

function ticksFromTimestamps(values, majorUnit) {
	var ticks = [];
	var i, ilen, value, major;

	for (i = 0, ilen = values.length; i < ilen; ++i) {
		value = values[i];
		major = majorUnit ? value === +moment(value).startOf(majorUnit) : false;

		ticks.push({
			value: value,
			major: major
		});
	}

	return ticks;
}

module.exports = function(Chart) {

	var defaultConfig = {
		position: 'bottom',

		/**
		 * Data distribution along the scale:
		 * - 'linear': data are spread according to their time (distances can vary),
		 * - 'series': data are spread at the same distance from each other.
		 * @see https://github.com/chartjs/Chart.js/pull/4507
		 * @since 2.7.0
		 */
		distribution: 'linear',

		/**
		 * Scale boundary strategy (bypassed by min/max time options)
		 * - `data`: make sure data are fully visible, ticks outside are removed
		 * - `ticks`: make sure ticks are fully visible, data outside are truncated
		 * @see https://github.com/chartjs/Chart.js/pull/4556
		 * @since 2.7.0
		 */
		bounds: 'data',

		time: {
			parser: false, // false == a pattern string from http://momentjs.com/docs/#/parsing/string-format/ or a custom callback that converts its argument to a moment
			format: false, // DEPRECATED false == date objects, moment object, callback or a pattern string from http://momentjs.com/docs/#/parsing/string-format/
			unit: false, // false == automatic or override with week, month, year, etc.
			round: false, // none, or override with week, month, year, etc.
			displayFormat: false, // DEPRECATED
			isoWeekday: false, // override week start day - see http://momentjs.com/docs/#/get-set/iso-weekday/
			minUnit: 'millisecond',

			// defaults to unit's corresponding unitFormat below or override using pattern string from http://momentjs.com/docs/#/displaying/format/
			displayFormats: {
				millisecond: 'h:mm:ss.SSS a', // 11:20:01.123 AM,
				second: 'h:mm:ss a', // 11:20:01 AM
				minute: 'h:mm a', // 11:20 AM
				hour: 'hA', // 5PM
				day: 'MMM D', // Sep 4
				week: 'll', // Week 46, or maybe "[W]WW - YYYY" ?
				month: 'MMM YYYY', // Sept 2015
				quarter: '[Q]Q - YYYY', // Q3
				year: 'YYYY' // 2015
			},
		},
		ticks: {
			autoSkip: false,

			/**
			 * Ticks generation input values:
			 * - 'auto': generates "optimal" ticks based on scale size and time options.
			 * - 'data': generates ticks from data (including labels from data {t|x|y} objects).
			 * - 'labels': generates ticks from user given `data.labels` values ONLY.
			 * @see https://github.com/chartjs/Chart.js/pull/4507
			 * @since 2.7.0
			 */
			source: 'auto',

			major: {
				enabled: false
			}
		}
	};

	var TimeScale = Chart.Scale.extend({
		initialize: function() {
			if (!moment) {
				throw new Error('Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com');
			}

			this.mergeTicksOptions();

			Chart.Scale.prototype.initialize.call(this);
		},

		update: function() {
			var me = this;
			var options = me.options;

			// DEPRECATIONS: output a message only one time per update
			if (options.time && options.time.format) {
				console.warn('options.time.format is deprecated and replaced by options.time.parser.');
			}

			return Chart.Scale.prototype.update.apply(me, arguments);
		},

		/**
		 * Allows data to be referenced via 't' attribute
		 */
		getRightValue: function(rawValue) {
			if (rawValue && rawValue.t !== undefined) {
				rawValue = rawValue.t;
			}
			return Chart.Scale.prototype.getRightValue.call(this, rawValue);
		},

		determineDataLimits: function() {
			var me = this;
			var chart = me.chart;
			var timeOpts = me.options.time;
			var min = MAX_INTEGER;
			var max = MIN_INTEGER;
			var timestamps = [];
			var datasets = [];
			var labels = [];
			var i, j, ilen, jlen, data, timestamp;

			// Convert labels to timestamps
			for (i = 0, ilen = chart.data.labels.length; i < ilen; ++i) {
				labels.push(parse(chart.data.labels[i], me));
			}

			// Convert data to timestamps
			for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
				if (chart.isDatasetVisible(i)) {
					data = chart.data.datasets[i].data;

					// Let's consider that all data have the same format.
					if (helpers.isObject(data[0])) {
						datasets[i] = [];

						for (j = 0, jlen = data.length; j < jlen; ++j) {
							timestamp = parse(data[j], me);
							timestamps.push(timestamp);
							datasets[i][j] = timestamp;
						}
					} else {
						timestamps.push.apply(timestamps, labels);
						datasets[i] = labels.slice(0);
					}
				} else {
					datasets[i] = [];
				}
			}

			if (labels.length) {
				// Sort labels **after** data have been converted
				labels = arrayUnique(labels).sort(sorter);
				min = Math.min(min, labels[0]);
				max = Math.max(max, labels[labels.length - 1]);
			}

			if (timestamps.length) {
				timestamps = arrayUnique(timestamps).sort(sorter);
				min = Math.min(min, timestamps[0]);
				max = Math.max(max, timestamps[timestamps.length - 1]);
			}

			min = parse(timeOpts.min, me) || min;
			max = parse(timeOpts.max, me) || max;

			// In case there is no valid min/max, let's use today limits
			min = min === MAX_INTEGER ? +moment().startOf('day') : min;
			max = max === MIN_INTEGER ? +moment().endOf('day') + 1 : max;

			// Make sure that max is strictly higher than min (required by the lookup table)
			me.min = Math.min(min, max);
			me.max = Math.max(min + 1, max);

			// PRIVATE
			me._horizontal = me.isHorizontal();
			me._table = [];
			me._timestamps = {
				data: timestamps,
				datasets: datasets,
				labels: labels
			};
		},

		buildTicks: function() {
			var me = this;
			var min = me.min;
			var max = me.max;
			var options = me.options;
			var timeOpts = options.time;
			var timestamps = [];
			var ticks = [];
			var i, ilen, timestamp;

			switch (options.ticks.source) {
			case 'data':
				timestamps = me._timestamps.data;
				break;
			case 'labels':
				timestamps = me._timestamps.labels;
				break;
			case 'auto':
			default:
				timestamps = generate(min, max, me.getLabelCapacity(min), options);
			}

			if (options.bounds === 'ticks' && timestamps.length) {
				min = timestamps[0];
				max = timestamps[timestamps.length - 1];
			}

			// Enforce limits with user min/max options
			min = parse(timeOpts.min, me) || min;
			max = parse(timeOpts.max, me) || max;

			// Remove ticks outside the min/max range
			for (i = 0, ilen = timestamps.length; i < ilen; ++i) {
				timestamp = timestamps[i];
				if (timestamp >= min && timestamp <= max) {
					ticks.push(timestamp);
				}
			}

			me.min = min;
			me.max = max;

			// PRIVATE
			me._unit = timeOpts.unit || determineUnitForFormatting(ticks, timeOpts.minUnit, me.min, me.max);
			me._majorUnit = determineMajorUnit(me._unit);
			me._table = buildLookupTable(me._timestamps.data, min, max, options.distribution);
			me._offsets = computeOffsets(me._table, ticks, min, max, options);

			return ticksFromTimestamps(ticks, me._majorUnit);
		},

		getLabelForIndex: function(index, datasetIndex) {
			var me = this;
			var data = me.chart.data;
			var timeOpts = me.options.time;
			var label = data.labels && index < data.labels.length ? data.labels[index] : '';
			var value = data.datasets[datasetIndex].data[index];

			if (helpers.isObject(value)) {
				label = me.getRightValue(value);
			}
			if (timeOpts.tooltipFormat) {
				label = momentify(label, timeOpts).format(timeOpts.tooltipFormat);
			}

			return label;
		},

		/**
		 * Function to format an individual tick mark
		 * @private
		 */
		tickFormatFunction: function(tick, index, ticks, formatOverride) {
			var me = this;
			var options = me.options;
			var time = tick.valueOf();
			var formats = options.time.displayFormats;
			var minorFormat = formats[me._unit];
			var majorUnit = me._majorUnit;
			var majorFormat = formats[majorUnit];
			var majorTime = tick.clone().startOf(majorUnit).valueOf();
			var majorTickOpts = options.ticks.major;
			var major = majorTickOpts.enabled && majorUnit && majorFormat && time === majorTime;
			var label = tick.format(formatOverride ? formatOverride : major ? majorFormat : minorFormat);
			var tickOpts = major ? majorTickOpts : options.ticks.minor;
			var formatter = helpers.valueOrDefault(tickOpts.callback, tickOpts.userCallback);

			return formatter ? formatter(label, index, ticks) : label;
		},

		convertTicksToLabels: function(ticks) {
			var labels = [];
			var i, ilen;

			for (i = 0, ilen = ticks.length; i < ilen; ++i) {
				labels.push(this.tickFormatFunction(moment(ticks[i].value), i, ticks));
			}

			return labels;
		},

		/**
		 * @private
		 */
		getPixelForOffset: function(time) {
			var me = this;
			var size = me._horizontal ? me.width : me.height;
			var start = me._horizontal ? me.left : me.top;
			var pos = interpolate(me._table, 'time', time, 'pos');

			return start + size * (me._offsets.left + pos) / (me._offsets.left + 1 + me._offsets.right);
		},

		getPixelForValue: function(value, index, datasetIndex) {
			var me = this;
			var time = null;

			if (index !== undefined && datasetIndex !== undefined) {
				time = me._timestamps.datasets[datasetIndex][index];
			}

			if (time === null) {
				time = parse(value, me);
			}

			if (time !== null) {
				return me.getPixelForOffset(time);
			}
		},

		getPixelForTick: function(index) {
			var ticks = this.getTicks();
			return index >= 0 && index < ticks.length ?
				this.getPixelForOffset(ticks[index].value) :
				null;
		},

		getValueForPixel: function(pixel) {
			var me = this;
			var size = me._horizontal ? me.width : me.height;
			var start = me._horizontal ? me.left : me.top;
			var pos = (size ? (pixel - start) / size : 0) * (me._offsets.left + 1 + me._offsets.left) - me._offsets.right;
			var time = interpolate(me._table, 'pos', pos, 'time');

			return moment(time);
		},

		/**
		 * Crude approximation of what the label width might be
		 * @private
		 */
		getLabelWidth: function(label) {
			var me = this;
			var ticksOpts = me.options.ticks;
			var tickLabelWidth = me.ctx.measureText(label).width;
			var angle = helpers.toRadians(ticksOpts.maxRotation);
			var cosRotation = Math.cos(angle);
			var sinRotation = Math.sin(angle);
			var tickFontSize = helpers.valueOrDefault(ticksOpts.fontSize, defaults.global.defaultFontSize);

			return (tickLabelWidth * cosRotation) + (tickFontSize * sinRotation);
		},

		/**
		 * @private
		 */
		getLabelCapacity: function(exampleTime) {
			var me = this;

			var formatOverride = me.options.time.displayFormats.millisecond;	// Pick the longest format for guestimation

			var exampleLabel = me.tickFormatFunction(moment(exampleTime), 0, [], formatOverride);
			var tickLabelWidth = me.getLabelWidth(exampleLabel);
			var innerWidth = me.isHorizontal() ? me.width : me.height;

			return Math.floor(innerWidth / tickLabelWidth);
		}
	});

	Chart.scaleService.registerScaleType('time', TimeScale, defaultConfig);
};

},{"1":1,"25":25,"45":45}]},{},[7])(7)
});
!function(e,a){"object"==typeof exports&&"undefined"!=typeof module?module.exports=a():"function"==typeof define&&define.amd?define(a):e.moment=a()}(this,function(){"use strict";function e(){return ct.apply(null,arguments)}function a(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function t(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function n(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;var a;for(a in e)if(e.hasOwnProperty(a))return!1;return!0}function s(e){return void 0===e}function r(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function d(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function _(e,a){var t,n=[];for(t=0;t<e.length;++t)n.push(a(e[t],t));return n}function i(e,a){return Object.prototype.hasOwnProperty.call(e,a)}function o(e,a){for(var t in a)i(a,t)&&(e[t]=a[t]);return i(a,"toString")&&(e.toString=a.toString),i(a,"valueOf")&&(e.valueOf=a.valueOf),e}function m(e,a,t,n){return Re(e,a,t,n,!0).utc()}function u(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function l(e){return null==e._pf&&(e._pf=u()),e._pf}function M(e){if(null==e._isValid){var a=l(e),t=Yt.call(a.parsedDateParts,function(e){return null!=e}),n=!isNaN(e._d.getTime())&&a.overflow<0&&!a.empty&&!a.invalidMonth&&!a.invalidWeekday&&!a.weekdayMismatch&&!a.nullInput&&!a.invalidFormat&&!a.userInvalidated&&(!a.meridiem||a.meridiem&&t);if(e._strict&&(n=n&&0===a.charsLeftOver&&0===a.unusedTokens.length&&void 0===a.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return n;e._isValid=n}return e._isValid}function h(e){var a=m(NaN);return null!=e?o(l(a),e):l(a).userInvalidated=!0,a}function L(e,a){var t,n,r;if(s(a._isAMomentObject)||(e._isAMomentObject=a._isAMomentObject),s(a._i)||(e._i=a._i),s(a._f)||(e._f=a._f),s(a._l)||(e._l=a._l),s(a._strict)||(e._strict=a._strict),s(a._tzm)||(e._tzm=a._tzm),s(a._isUTC)||(e._isUTC=a._isUTC),s(a._offset)||(e._offset=a._offset),s(a._pf)||(e._pf=l(a)),s(a._locale)||(e._locale=a._locale),yt.length>0)for(t=0;t<yt.length;t++)s(r=a[n=yt[t]])||(e[n]=r);return e}function c(a){L(this,a),this._d=new Date(null!=a._d?a._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===ft&&(ft=!0,e.updateOffset(this),ft=!1)}function Y(e){return e instanceof c||null!=e&&null!=e._isAMomentObject}function y(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function f(e){var a=+e,t=0;return 0!==a&&isFinite(a)&&(t=y(a)),t}function p(e,a,t){var n,s=Math.min(e.length,a.length),r=Math.abs(e.length-a.length),d=0;for(n=0;n<s;n++)(t&&e[n]!==a[n]||!t&&f(e[n])!==f(a[n]))&&d++;return d+r}function k(a){!1===e.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+a)}function D(a,t){var n=!0;return o(function(){if(null!=e.deprecationHandler&&e.deprecationHandler(null,a),n){for(var s,r=[],d=0;d<arguments.length;d++){if(s="","object"==typeof arguments[d]){s+="\n["+d+"] ";for(var _ in arguments[0])s+=_+": "+arguments[0][_]+", ";s=s.slice(0,-2)}else s=arguments[d];r.push(s)}k(a+"\nArguments: "+Array.prototype.slice.call(r).join("")+"\n"+(new Error).stack),n=!1}return t.apply(this,arguments)},t)}function T(a,t){null!=e.deprecationHandler&&e.deprecationHandler(a,t),pt[a]||(k(t),pt[a]=!0)}function g(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function w(e,a){var n,s=o({},e);for(n in a)i(a,n)&&(t(e[n])&&t(a[n])?(s[n]={},o(s[n],e[n]),o(s[n],a[n])):null!=a[n]?s[n]=a[n]:delete s[n]);for(n in e)i(e,n)&&!i(a,n)&&t(e[n])&&(s[n]=o({},s[n]));return s}function v(e){null!=e&&this.set(e)}function S(e,a){var t=e.toLowerCase();vt[t]=vt[t+"s"]=vt[a]=e}function H(e){return"string"==typeof e?vt[e]||vt[e.toLowerCase()]:void 0}function b(e){var a,t,n={};for(t in e)i(e,t)&&(a=H(t))&&(n[a]=e[t]);return n}function j(e,a){St[e]=a}function x(e){var a=[];for(var t in e)a.push({unit:t,priority:St[t]});return a.sort(function(e,a){return e.priority-a.priority}),a}function P(e,a,t){var n=""+Math.abs(e),s=a-n.length;return(e>=0?t?"+":"":"-")+Math.pow(10,Math.max(0,s)).toString().substr(1)+n}function O(e,a,t,n){var s=n;"string"==typeof n&&(s=function(){return this[n]()}),e&&(xt[e]=s),a&&(xt[a[0]]=function(){return P(s.apply(this,arguments),a[1],a[2])}),t&&(xt[t]=function(){return this.localeData().ordinal(s.apply(this,arguments),e)})}function W(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function E(e){var a,t,n=e.match(Ht);for(a=0,t=n.length;a<t;a++)xt[n[a]]?n[a]=xt[n[a]]:n[a]=W(n[a]);return function(a){var s,r="";for(s=0;s<t;s++)r+=g(n[s])?n[s].call(a,e):n[s];return r}}function A(e,a){return e.isValid()?(a=F(a,e.localeData()),jt[a]=jt[a]||E(a),jt[a](e)):e.localeData().invalidDate()}function F(e,a){var t=5;for(bt.lastIndex=0;t>=0&&bt.test(e);)e=e.replace(bt,function(e){return a.longDateFormat(e)||e}),bt.lastIndex=0,t-=1;return e}function z(e,a,t){Zt[e]=g(a)?a:function(e,n){return e&&t?t:a}}function J(e,a){return i(Zt,e)?Zt[e](a._strict,a._locale):new RegExp(N(e))}function N(e){return R(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,a,t,n,s){return a||t||n||s}))}function R(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function C(e,a){var t,n=a;for("string"==typeof e&&(e=[e]),r(a)&&(n=function(e,t){t[a]=f(e)}),t=0;t<e.length;t++)Bt[e[t]]=n}function I(e,a){C(e,function(e,t,n,s){n._w=n._w||{},a(e,n._w,n,s)})}function G(e,a,t){null!=a&&i(Bt,e)&&Bt[e](a,t._a,t,e)}function U(e){return V(e)?366:365}function V(e){return e%4==0&&e%100!=0||e%400==0}function K(a,t){return function(n){return null!=n?(Z(this,a,n),e.updateOffset(this,t),this):$(this,a)}}function $(e,a){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+a]():NaN}function Z(e,a,t){e.isValid()&&!isNaN(t)&&("FullYear"===a&&V(e.year())?e._d["set"+(e._isUTC?"UTC":"")+a](t,e.month(),q(t,e.month())):e._d["set"+(e._isUTC?"UTC":"")+a](t))}function B(e,a){return(e%a+a)%a}function q(e,a){if(isNaN(e)||isNaN(a))return NaN;var t=B(a,12);return e+=(a-t)/12,1===t?V(e)?29:28:31-t%7%2}function Q(e,a,t){var n,s,r,d=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],n=0;n<12;++n)r=m([2e3,n]),this._shortMonthsParse[n]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[n]=this.months(r,"").toLocaleLowerCase();return t?"MMM"===a?-1!==(s=dn.call(this._shortMonthsParse,d))?s:null:-1!==(s=dn.call(this._longMonthsParse,d))?s:null:"MMM"===a?-1!==(s=dn.call(this._shortMonthsParse,d))?s:-1!==(s=dn.call(this._longMonthsParse,d))?s:null:-1!==(s=dn.call(this._longMonthsParse,d))?s:-1!==(s=dn.call(this._shortMonthsParse,d))?s:null}function X(e,a){var t;if(!e.isValid())return e;if("string"==typeof a)if(/^\d+$/.test(a))a=f(a);else if(a=e.localeData().monthsParse(a),!r(a))return e;return t=Math.min(e.date(),q(e.year(),a)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](a,t),e}function ee(a){return null!=a?(X(this,a),e.updateOffset(this,!0),this):$(this,"Month")}function ae(){function e(e,a){return a.length-e.length}var a,t,n=[],s=[],r=[];for(a=0;a<12;a++)t=m([2e3,a]),n.push(this.monthsShort(t,"")),s.push(this.months(t,"")),r.push(this.months(t,"")),r.push(this.monthsShort(t,""));for(n.sort(e),s.sort(e),r.sort(e),a=0;a<12;a++)n[a]=R(n[a]),s[a]=R(s[a]);for(a=0;a<24;a++)r[a]=R(r[a]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+n.join("|")+")","i")}function te(e,a,t,n,s,r,d){var _=new Date(e,a,t,n,s,r,d);return e<100&&e>=0&&isFinite(_.getFullYear())&&_.setFullYear(e),_}function ne(e){var a=new Date(Date.UTC.apply(null,arguments));return e<100&&e>=0&&isFinite(a.getUTCFullYear())&&a.setUTCFullYear(e),a}function se(e,a,t){var n=7+a-t;return-((7+ne(e,0,n).getUTCDay()-a)%7)+n-1}function re(e,a,t,n,s){var r,d,_=1+7*(a-1)+(7+t-n)%7+se(e,n,s);return _<=0?d=U(r=e-1)+_:_>U(e)?(r=e+1,d=_-U(e)):(r=e,d=_),{year:r,dayOfYear:d}}function de(e,a,t){var n,s,r=se(e.year(),a,t),d=Math.floor((e.dayOfYear()-r-1)/7)+1;return d<1?n=d+_e(s=e.year()-1,a,t):d>_e(e.year(),a,t)?(n=d-_e(e.year(),a,t),s=e.year()+1):(s=e.year(),n=d),{week:n,year:s}}function _e(e,a,t){var n=se(e,a,t),s=se(e+1,a,t);return(U(e)-n+s)/7}function ie(e,a){return"string"!=typeof e?e:isNaN(e)?"number"==typeof(e=a.weekdaysParse(e))?e:null:parseInt(e,10)}function oe(e,a){return"string"==typeof e?a.weekdaysParse(e)%7||7:isNaN(e)?null:e}function me(e,a,t){var n,s,r,d=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],n=0;n<7;++n)r=m([2e3,1]).day(n),this._minWeekdaysParse[n]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[n]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[n]=this.weekdays(r,"").toLocaleLowerCase();return t?"dddd"===a?-1!==(s=dn.call(this._weekdaysParse,d))?s:null:"ddd"===a?-1!==(s=dn.call(this._shortWeekdaysParse,d))?s:null:-1!==(s=dn.call(this._minWeekdaysParse,d))?s:null:"dddd"===a?-1!==(s=dn.call(this._weekdaysParse,d))?s:-1!==(s=dn.call(this._shortWeekdaysParse,d))?s:-1!==(s=dn.call(this._minWeekdaysParse,d))?s:null:"ddd"===a?-1!==(s=dn.call(this._shortWeekdaysParse,d))?s:-1!==(s=dn.call(this._weekdaysParse,d))?s:-1!==(s=dn.call(this._minWeekdaysParse,d))?s:null:-1!==(s=dn.call(this._minWeekdaysParse,d))?s:-1!==(s=dn.call(this._weekdaysParse,d))?s:-1!==(s=dn.call(this._shortWeekdaysParse,d))?s:null}function ue(){function e(e,a){return a.length-e.length}var a,t,n,s,r,d=[],_=[],i=[],o=[];for(a=0;a<7;a++)t=m([2e3,1]).day(a),n=this.weekdaysMin(t,""),s=this.weekdaysShort(t,""),r=this.weekdays(t,""),d.push(n),_.push(s),i.push(r),o.push(n),o.push(s),o.push(r);for(d.sort(e),_.sort(e),i.sort(e),o.sort(e),a=0;a<7;a++)_[a]=R(_[a]),i[a]=R(i[a]),o[a]=R(o[a]);this._weekdaysRegex=new RegExp("^("+o.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+_.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+d.join("|")+")","i")}function le(){return this.hours()%12||12}function Me(e,a){O(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),a)})}function he(e,a){return a._meridiemParse}function Le(e){return e?e.toLowerCase().replace("_","-"):e}function ce(e){for(var a,t,n,s,r=0;r<e.length;){for(a=(s=Le(e[r]).split("-")).length,t=(t=Le(e[r+1]))?t.split("-"):null;a>0;){if(n=Ye(s.slice(0,a).join("-")))return n;if(t&&t.length>=a&&p(s,t,!0)>=a-1)break;a--}r++}return null}function Ye(e){var a=null;if(!wn[e]&&"undefined"!=typeof module&&module&&module.exports)try{a=kn._abbr,require("./locale/"+e),ye(a)}catch(e){}return wn[e]}function ye(e,a){var t;return e&&(t=s(a)?pe(e):fe(e,a))&&(kn=t),kn._abbr}function fe(e,a){if(null!==a){var t=gn;if(a.abbr=e,null!=wn[e])T("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),t=wn[e]._config;else if(null!=a.parentLocale){if(null==wn[a.parentLocale])return vn[a.parentLocale]||(vn[a.parentLocale]=[]),vn[a.parentLocale].push({name:e,config:a}),null;t=wn[a.parentLocale]._config}return wn[e]=new v(w(t,a)),vn[e]&&vn[e].forEach(function(e){fe(e.name,e.config)}),ye(e),wn[e]}return delete wn[e],null}function pe(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return kn;if(!a(e)){if(t=Ye(e))return t;e=[e]}return ce(e)}function ke(e){var a,t=e._a;return t&&-2===l(e).overflow&&(a=t[Qt]<0||t[Qt]>11?Qt:t[Xt]<1||t[Xt]>q(t[qt],t[Qt])?Xt:t[en]<0||t[en]>24||24===t[en]&&(0!==t[an]||0!==t[tn]||0!==t[nn])?en:t[an]<0||t[an]>59?an:t[tn]<0||t[tn]>59?tn:t[nn]<0||t[nn]>999?nn:-1,l(e)._overflowDayOfYear&&(a<qt||a>Xt)&&(a=Xt),l(e)._overflowWeeks&&-1===a&&(a=sn),l(e)._overflowWeekday&&-1===a&&(a=rn),l(e).overflow=a),e}function De(e,a,t){return null!=e?e:null!=a?a:t}function Te(a){var t=new Date(e.now());return a._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function ge(e){var a,t,n,s,r=[];if(!e._d){for(n=Te(e),e._w&&null==e._a[Xt]&&null==e._a[Qt]&&we(e),null!=e._dayOfYear&&(s=De(e._a[qt],n[qt]),(e._dayOfYear>U(s)||0===e._dayOfYear)&&(l(e)._overflowDayOfYear=!0),t=ne(s,0,e._dayOfYear),e._a[Qt]=t.getUTCMonth(),e._a[Xt]=t.getUTCDate()),a=0;a<3&&null==e._a[a];++a)e._a[a]=r[a]=n[a];for(;a<7;a++)e._a[a]=r[a]=null==e._a[a]?2===a?1:0:e._a[a];24===e._a[en]&&0===e._a[an]&&0===e._a[tn]&&0===e._a[nn]&&(e._nextDay=!0,e._a[en]=0),e._d=(e._useUTC?ne:te).apply(null,r),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[en]=24),e._w&&void 0!==e._w.d&&e._w.d!==e._d.getDay()&&(l(e).weekdayMismatch=!0)}}function we(e){var a,t,n,s,r,d,_,i;if(null!=(a=e._w).GG||null!=a.W||null!=a.E)r=1,d=4,t=De(a.GG,e._a[qt],de(Ce(),1,4).year),n=De(a.W,1),((s=De(a.E,1))<1||s>7)&&(i=!0);else{r=e._locale._week.dow,d=e._locale._week.doy;var o=de(Ce(),r,d);t=De(a.gg,e._a[qt],o.year),n=De(a.w,o.week),null!=a.d?((s=a.d)<0||s>6)&&(i=!0):null!=a.e?(s=a.e+r,(a.e<0||a.e>6)&&(i=!0)):s=r}n<1||n>_e(t,r,d)?l(e)._overflowWeeks=!0:null!=i?l(e)._overflowWeekday=!0:(_=re(t,n,s,r,d),e._a[qt]=_.year,e._dayOfYear=_.dayOfYear)}function ve(e){var a,t,n,s,r,d,_=e._i,i=Sn.exec(_)||Hn.exec(_);if(i){for(l(e).iso=!0,a=0,t=jn.length;a<t;a++)if(jn[a][1].exec(i[1])){s=jn[a][0],n=!1!==jn[a][2];break}if(null==s)return void(e._isValid=!1);if(i[3]){for(a=0,t=xn.length;a<t;a++)if(xn[a][1].exec(i[3])){r=(i[2]||" ")+xn[a][0];break}if(null==r)return void(e._isValid=!1)}if(!n&&null!=r)return void(e._isValid=!1);if(i[4]){if(!bn.exec(i[4]))return void(e._isValid=!1);d="Z"}e._f=s+(r||"")+(d||""),We(e)}else e._isValid=!1}function Se(e,a,t,n,s,r){var d=[He(e),un.indexOf(a),parseInt(t,10),parseInt(n,10),parseInt(s,10)];return r&&d.push(parseInt(r,10)),d}function He(e){var a=parseInt(e,10);return a<=49?2e3+a:a<=999?1900+a:a}function be(e){return e.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}function je(e,a,t){return!e||cn.indexOf(e)===new Date(a[0],a[1],a[2]).getDay()||(l(t).weekdayMismatch=!0,t._isValid=!1,!1)}function xe(e,a,t){if(e)return Wn[e];if(a)return 0;var n=parseInt(t,10),s=n%100;return 60*((n-s)/100)+s}function Pe(e){var a=On.exec(be(e._i));if(a){var t=Se(a[4],a[3],a[2],a[5],a[6],a[7]);if(!je(a[1],t,e))return;e._a=t,e._tzm=xe(a[8],a[9],a[10]),e._d=ne.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),l(e).rfc2822=!0}else e._isValid=!1}function Oe(a){var t=Pn.exec(a._i);null===t?(ve(a),!1===a._isValid&&(delete a._isValid,Pe(a),!1===a._isValid&&(delete a._isValid,e.createFromInputFallback(a)))):a._d=new Date(+t[1])}function We(a){if(a._f!==e.ISO_8601)if(a._f!==e.RFC_2822){a._a=[],l(a).empty=!0;var t,n,s,r,d,_=""+a._i,i=_.length,o=0;for(s=F(a._f,a._locale).match(Ht)||[],t=0;t<s.length;t++)r=s[t],(n=(_.match(J(r,a))||[])[0])&&((d=_.substr(0,_.indexOf(n))).length>0&&l(a).unusedInput.push(d),_=_.slice(_.indexOf(n)+n.length),o+=n.length),xt[r]?(n?l(a).empty=!1:l(a).unusedTokens.push(r),G(r,n,a)):a._strict&&!n&&l(a).unusedTokens.push(r);l(a).charsLeftOver=i-o,_.length>0&&l(a).unusedInput.push(_),a._a[en]<=12&&!0===l(a).bigHour&&a._a[en]>0&&(l(a).bigHour=void 0),l(a).parsedDateParts=a._a.slice(0),l(a).meridiem=a._meridiem,a._a[en]=Ee(a._locale,a._a[en],a._meridiem),ge(a),ke(a)}else Pe(a);else ve(a)}function Ee(e,a,t){var n;return null==t?a:null!=e.meridiemHour?e.meridiemHour(a,t):null!=e.isPM?((n=e.isPM(t))&&a<12&&(a+=12),n||12!==a||(a=0),a):a}function Ae(e){var a,t,n,s,r;if(0===e._f.length)return l(e).invalidFormat=!0,void(e._d=new Date(NaN));for(s=0;s<e._f.length;s++)r=0,a=L({},e),null!=e._useUTC&&(a._useUTC=e._useUTC),a._f=e._f[s],We(a),M(a)&&(r+=l(a).charsLeftOver,r+=10*l(a).unusedTokens.length,l(a).score=r,(null==n||r<n)&&(n=r,t=a));o(e,t||a)}function Fe(e){if(!e._d){var a=b(e._i);e._a=_([a.year,a.month,a.day||a.date,a.hour,a.minute,a.second,a.millisecond],function(e){return e&&parseInt(e,10)}),ge(e)}}function ze(e){var a=new c(ke(Je(e)));return a._nextDay&&(a.add(1,"d"),a._nextDay=void 0),a}function Je(e){var t=e._i,n=e._f;return e._locale=e._locale||pe(e._l),null===t||void 0===n&&""===t?h({nullInput:!0}):("string"==typeof t&&(e._i=t=e._locale.preparse(t)),Y(t)?new c(ke(t)):(d(t)?e._d=t:a(n)?Ae(e):n?We(e):Ne(e),M(e)||(e._d=null),e))}function Ne(n){var i=n._i;s(i)?n._d=new Date(e.now()):d(i)?n._d=new Date(i.valueOf()):"string"==typeof i?Oe(n):a(i)?(n._a=_(i.slice(0),function(e){return parseInt(e,10)}),ge(n)):t(i)?Fe(n):r(i)?n._d=new Date(i):e.createFromInputFallback(n)}function Re(e,s,r,d,_){var i={};return!0!==r&&!1!==r||(d=r,r=void 0),(t(e)&&n(e)||a(e)&&0===e.length)&&(e=void 0),i._isAMomentObject=!0,i._useUTC=i._isUTC=_,i._l=r,i._i=e,i._f=s,i._strict=d,ze(i)}function Ce(e,a,t,n){return Re(e,a,t,n,!1)}function Ie(e,t){var n,s;if(1===t.length&&a(t[0])&&(t=t[0]),!t.length)return Ce();for(n=t[0],s=1;s<t.length;++s)t[s].isValid()&&!t[s][e](n)||(n=t[s]);return n}function Ge(e){for(var a in e)if(-1===dn.call(Fn,a)||null!=e[a]&&isNaN(e[a]))return!1;for(var t=!1,n=0;n<Fn.length;++n)if(e[Fn[n]]){if(t)return!1;parseFloat(e[Fn[n]])!==f(e[Fn[n]])&&(t=!0)}return!0}function Ue(e){var a=b(e),t=a.year||0,n=a.quarter||0,s=a.month||0,r=a.week||0,d=a.day||0,_=a.hour||0,i=a.minute||0,o=a.second||0,m=a.millisecond||0;this._isValid=Ge(a),this._milliseconds=+m+1e3*o+6e4*i+1e3*_*60*60,this._days=+d+7*r,this._months=+s+3*n+12*t,this._data={},this._locale=pe(),this._bubble()}function Ve(e){return e instanceof Ue}function Ke(e){return e<0?-1*Math.round(-1*e):Math.round(e)}function $e(e,a){O(e,0,0,function(){var e=this.utcOffset(),t="+";return e<0&&(e=-e,t="-"),t+P(~~(e/60),2)+a+P(~~e%60,2)})}function Ze(e,a){var t=(a||"").match(e);if(null===t)return null;var n=((t[t.length-1]||[])+"").match(zn)||["-",0,0],s=60*n[1]+f(n[2]);return 0===s?0:"+"===n[0]?s:-s}function Be(a,t){var n,s;return t._isUTC?(n=t.clone(),s=(Y(a)||d(a)?a.valueOf():Ce(a).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+s),e.updateOffset(n,!1),n):Ce(a).local()}function qe(e){return 15*-Math.round(e._d.getTimezoneOffset()/15)}function Qe(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}function Xe(e,a){var t,n,s,d=e,_=null;return Ve(e)?d={ms:e._milliseconds,d:e._days,M:e._months}:r(e)?(d={},a?d[a]=e:d.milliseconds=e):(_=Jn.exec(e))?(t="-"===_[1]?-1:1,d={y:0,d:f(_[Xt])*t,h:f(_[en])*t,m:f(_[an])*t,s:f(_[tn])*t,ms:f(Ke(1e3*_[nn]))*t}):(_=Nn.exec(e))?(t="-"===_[1]?-1:(_[1],1),d={y:ea(_[2],t),M:ea(_[3],t),w:ea(_[4],t),d:ea(_[5],t),h:ea(_[6],t),m:ea(_[7],t),s:ea(_[8],t)}):null==d?d={}:"object"==typeof d&&("from"in d||"to"in d)&&(s=ta(Ce(d.from),Ce(d.to)),(d={}).ms=s.milliseconds,d.M=s.months),n=new Ue(d),Ve(e)&&i(e,"_locale")&&(n._locale=e._locale),n}function ea(e,a){var t=e&&parseFloat(e.replace(",","."));return(isNaN(t)?0:t)*a}function aa(e,a){var t={milliseconds:0,months:0};return t.months=a.month()-e.month()+12*(a.year()-e.year()),e.clone().add(t.months,"M").isAfter(a)&&--t.months,t.milliseconds=+a-+e.clone().add(t.months,"M"),t}function ta(e,a){var t;return e.isValid()&&a.isValid()?(a=Be(a,e),e.isBefore(a)?t=aa(e,a):((t=aa(a,e)).milliseconds=-t.milliseconds,t.months=-t.months),t):{milliseconds:0,months:0}}function na(e,a){return function(t,n){var s,r;return null===n||isNaN(+n)||(T(a,"moment()."+a+"(period, number) is deprecated. Please use moment()."+a+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),r=t,t=n,n=r),t="string"==typeof t?+t:t,s=Xe(t,n),sa(this,s,e),this}}function sa(a,t,n,s){var r=t._milliseconds,d=Ke(t._days),_=Ke(t._months);a.isValid()&&(s=null==s||s,_&&X(a,$(a,"Month")+_*n),d&&Z(a,"Date",$(a,"Date")+d*n),r&&a._d.setTime(a._d.valueOf()+r*n),s&&e.updateOffset(a,d||_))}function ra(e,a){var t,n=12*(a.year()-e.year())+(a.month()-e.month()),s=e.clone().add(n,"months");return t=a-s<0?(a-s)/(s-e.clone().add(n-1,"months")):(a-s)/(e.clone().add(n+1,"months")-s),-(n+t)||0}function da(e){var a;return void 0===e?this._locale._abbr:(null!=(a=pe(e))&&(this._locale=a),this)}function _a(){return this._locale}function ia(e,a){O(0,[e,e.length],0,a)}function oa(e,a,t,n,s){var r;return null==e?de(this,n,s).year:(r=_e(e,n,s),a>r&&(a=r),ma.call(this,e,a,t,n,s))}function ma(e,a,t,n,s){var r=re(e,a,t,n,s),d=ne(r.year,0,r.dayOfYear);return this.year(d.getUTCFullYear()),this.month(d.getUTCMonth()),this.date(d.getUTCDate()),this}function ua(e){return e}function la(e,a,t,n){var s=pe(),r=m().set(n,a);return s[t](r,e)}function Ma(e,a,t){if(r(e)&&(a=e,e=void 0),e=e||"",null!=a)return la(e,a,t,"month");var n,s=[];for(n=0;n<12;n++)s[n]=la(e,n,t,"month");return s}function ha(e,a,t,n){"boolean"==typeof e?(r(a)&&(t=a,a=void 0),a=a||""):(t=a=e,e=!1,r(a)&&(t=a,a=void 0),a=a||"");var s=pe(),d=e?s._week.dow:0;if(null!=t)return la(a,(t+d)%7,n,"day");var _,i=[];for(_=0;_<7;_++)i[_]=la(a,(_+d)%7,n,"day");return i}function La(e,a,t,n){var s=Xe(a,t);return e._milliseconds+=n*s._milliseconds,e._days+=n*s._days,e._months+=n*s._months,e._bubble()}function ca(e){return e<0?Math.floor(e):Math.ceil(e)}function Ya(e){return 4800*e/146097}function ya(e){return 146097*e/4800}function fa(e){return function(){return this.as(e)}}function pa(e){return function(){return this.isValid()?this._data[e]:NaN}}function ka(e,a,t,n,s){return s.relativeTime(a||1,!!t,e,n)}function Da(e,a,t){var n=Xe(e).abs(),s=Ms(n.as("s")),r=Ms(n.as("m")),d=Ms(n.as("h")),_=Ms(n.as("d")),i=Ms(n.as("M")),o=Ms(n.as("y")),m=s<=hs.ss&&["s",s]||s<hs.s&&["ss",s]||r<=1&&["m"]||r<hs.m&&["mm",r]||d<=1&&["h"]||d<hs.h&&["hh",d]||_<=1&&["d"]||_<hs.d&&["dd",_]||i<=1&&["M"]||i<hs.M&&["MM",i]||o<=1&&["y"]||["yy",o];return m[2]=a,m[3]=+e>0,m[4]=t,ka.apply(null,m)}function Ta(e){return(e>0)-(e<0)||+e}function ga(){if(!this.isValid())return this.localeData().invalidDate();var e,a,t,n=Ls(this._milliseconds)/1e3,s=Ls(this._days),r=Ls(this._months);a=y((e=y(n/60))/60),n%=60,e%=60;var d=t=y(r/12),_=r%=12,i=s,o=a,m=e,u=n?n.toFixed(3).replace(/\.?0+$/,""):"",l=this.asSeconds();if(!l)return"P0D";var M=l<0?"-":"",h=Ta(this._months)!==Ta(l)?"-":"",L=Ta(this._days)!==Ta(l)?"-":"",c=Ta(this._milliseconds)!==Ta(l)?"-":"";return M+"P"+(d?h+d+"Y":"")+(_?h+_+"M":"")+(i?L+i+"D":"")+(o||m||u?"T":"")+(o?c+o+"H":"")+(m?c+m+"M":"")+(u?c+u+"S":"")}function wa(e,a){var t=e.split("_");return a%10==1&&a%100!=11?t[0]:a%10>=2&&a%10<=4&&(a%100<10||a%100>=20)?t[1]:t[2]}function va(e,a,t){var n={mm:a?"\u0445\u0432\u0456\u043b\u0456\u043d\u0430_\u0445\u0432\u0456\u043b\u0456\u043d\u044b_\u0445\u0432\u0456\u043b\u0456\u043d":"\u0445\u0432\u0456\u043b\u0456\u043d\u0443_\u0445\u0432\u0456\u043b\u0456\u043d\u044b_\u0445\u0432\u0456\u043b\u0456\u043d",hh:a?"\u0433\u0430\u0434\u0437\u0456\u043d\u0430_\u0433\u0430\u0434\u0437\u0456\u043d\u044b_\u0433\u0430\u0434\u0437\u0456\u043d":"\u0433\u0430\u0434\u0437\u0456\u043d\u0443_\u0433\u0430\u0434\u0437\u0456\u043d\u044b_\u0433\u0430\u0434\u0437\u0456\u043d",dd:"\u0434\u0437\u0435\u043d\u044c_\u0434\u043d\u0456_\u0434\u0437\u0451\u043d",MM:"\u043c\u0435\u0441\u044f\u0446_\u043c\u0435\u0441\u044f\u0446\u044b_\u043c\u0435\u0441\u044f\u0446\u0430\u045e",yy:"\u0433\u043e\u0434_\u0433\u0430\u0434\u044b_\u0433\u0430\u0434\u043e\u045e"};return"m"===t?a?"\u0445\u0432\u0456\u043b\u0456\u043d\u0430":"\u0445\u0432\u0456\u043b\u0456\u043d\u0443":"h"===t?a?"\u0433\u0430\u0434\u0437\u0456\u043d\u0430":"\u0433\u0430\u0434\u0437\u0456\u043d\u0443":e+" "+wa(n[t],+e)}function Sa(e,a,t){return e+" "+ba({mm:"munutenn",MM:"miz",dd:"devezh"}[t],e)}function Ha(e){return e>9?Ha(e%10):e}function ba(e,a){return 2===a?ja(e):e}function ja(e){var a={m:"v",b:"v",d:"z"};return void 0===a[e.charAt(0)]?e:a[e.charAt(0)]+e.substring(1)}function xa(e,a,t){var n=e+" ";switch(t){case"m":return a?"jedna minuta":"jedne minute";case"mm":return n+=1===e?"minuta":2===e||3===e||4===e?"minute":"minuta";case"h":return a?"jedan sat":"jednog sata";case"hh":return n+=1===e?"sat":2===e||3===e||4===e?"sata":"sati";case"dd":return n+=1===e?"dan":"dana";case"MM":return n+=1===e?"mjesec":2===e||3===e||4===e?"mjeseca":"mjeseci";case"yy":return n+=1===e?"godina":2===e||3===e||4===e?"godine":"godina"}}function Pa(e){return e>1&&e<5&&1!=~~(e/10)}function Oa(e,a,t,n){var s=e+" ";switch(t){case"s":return a||n?"p\xe1r sekund":"p\xe1r sekundami";case"m":return a?"minuta":n?"minutu":"minutou";case"mm":return a||n?s+(Pa(e)?"minuty":"minut"):s+"minutami";break;case"h":return a?"hodina":n?"hodinu":"hodinou";case"hh":return a||n?s+(Pa(e)?"hodiny":"hodin"):s+"hodinami";break;case"d":return a||n?"den":"dnem";case"dd":return a||n?s+(Pa(e)?"dny":"dn\xed"):s+"dny";break;case"M":return a||n?"m\u011bs\xedc":"m\u011bs\xedcem";case"MM":return a||n?s+(Pa(e)?"m\u011bs\xedce":"m\u011bs\xedc\u016f"):s+"m\u011bs\xedci";break;case"y":return a||n?"rok":"rokem";case"yy":return a||n?s+(Pa(e)?"roky":"let"):s+"lety";break}}function Wa(e,a,t,n){var s={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[e+" Tage",e+" Tagen"],M:["ein Monat","einem Monat"],MM:[e+" Monate",e+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[e+" Jahre",e+" Jahren"]};return a?s[t][0]:s[t][1]}function Ea(e,a,t,n){var s={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[e+" Tage",e+" Tagen"],M:["ein Monat","einem Monat"],MM:[e+" Monate",e+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[e+" Jahre",e+" Jahren"]};return a?s[t][0]:s[t][1]}function Aa(e,a,t,n){var s={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[e+" Tage",e+" Tagen"],M:["ein Monat","einem Monat"],MM:[e+" Monate",e+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[e+" Jahre",e+" Jahren"]};return a?s[t][0]:s[t][1]}function Fa(e,a,t,n){var s={s:["m\xf5ne sekundi","m\xf5ni sekund","paar sekundit"],m:["\xfche minuti","\xfcks minut"],mm:[e+" minuti",e+" minutit"],h:["\xfche tunni","tund aega","\xfcks tund"],hh:[e+" tunni",e+" tundi"],d:["\xfche p\xe4eva","\xfcks p\xe4ev"],M:["kuu aja","kuu aega","\xfcks kuu"],MM:[e+" kuu",e+" kuud"],y:["\xfche aasta","aasta","\xfcks aasta"],yy:[e+" aasta",e+" aastat"]};return a?s[t][2]?s[t][2]:s[t][1]:n?s[t][0]:s[t][1]}function za(e,a,t,n){var s="";switch(t){case"s":return n?"muutaman sekunnin":"muutama sekunti";case"m":return n?"minuutin":"minuutti";case"mm":s=n?"minuutin":"minuuttia";break;case"h":return n?"tunnin":"tunti";case"hh":s=n?"tunnin":"tuntia";break;case"d":return n?"p\xe4iv\xe4n":"p\xe4iv\xe4";case"dd":s=n?"p\xe4iv\xe4n":"p\xe4iv\xe4\xe4";break;case"M":return n?"kuukauden":"kuukausi";case"MM":s=n?"kuukauden":"kuukautta";break;case"y":return n?"vuoden":"vuosi";case"yy":s=n?"vuoden":"vuotta";break}return s=Ja(e,n)+" "+s}function Ja(e,a){return e<10?a?Qs[e]:qs[e]:e}function Na(e,a,t,n){var s={s:["thodde secondanim","thodde second"],m:["eka mintan","ek minute"],mm:[e+" mintanim",e+" mintam"],h:["eka horan","ek hor"],hh:[e+" horanim",e+" hor"],d:["eka disan","ek dis"],dd:[e+" disanim",e+" dis"],M:["eka mhoinean","ek mhoino"],MM:[e+" mhoineanim",e+" mhoine"],y:["eka vorsan","ek voros"],yy:[e+" vorsanim",e+" vorsam"]};return a?s[t][0]:s[t][1]}function Ra(e,a,t){var n=e+" ";switch(t){case"m":return a?"jedna minuta":"jedne minute";case"mm":return n+=1===e?"minuta":2===e||3===e||4===e?"minute":"minuta";case"h":return a?"jedan sat":"jednog sata";case"hh":return n+=1===e?"sat":2===e||3===e||4===e?"sata":"sati";case"dd":return n+=1===e?"dan":"dana";case"MM":return n+=1===e?"mjesec":2===e||3===e||4===e?"mjeseca":"mjeseci";case"yy":return n+=1===e?"godina":2===e||3===e||4===e?"godine":"godina"}}function Ca(e,a,t,n){var s=e;switch(t){case"s":return n||a?"n\xe9h\xe1ny m\xe1sodperc":"n\xe9h\xe1ny m\xe1sodperce";case"m":return"egy"+(n||a?" perc":" perce");case"mm":return s+(n||a?" perc":" perce");case"h":return"egy"+(n||a?" \xf3ra":" \xf3r\xe1ja");case"hh":return s+(n||a?" \xf3ra":" \xf3r\xe1ja");case"d":return"egy"+(n||a?" nap":" napja");case"dd":return s+(n||a?" nap":" napja");case"M":return"egy"+(n||a?" h\xf3nap":" h\xf3napja");case"MM":return s+(n||a?" h\xf3nap":" h\xf3napja");case"y":return"egy"+(n||a?" \xe9v":" \xe9ve");case"yy":return s+(n||a?" \xe9v":" \xe9ve")}return""}function Ia(e){return(e?"":"[m\xfalt] ")+"["+mr[this.day()]+"] LT[-kor]"}function Ga(e){return e%100==11||e%10!=1}function Ua(e,a,t,n){var s=e+" ";switch(t){case"s":return a||n?"nokkrar sek\xfandur":"nokkrum sek\xfandum";case"m":return a?"m\xedn\xfata":"m\xedn\xfatu";case"mm":return Ga(e)?s+(a||n?"m\xedn\xfatur":"m\xedn\xfatum"):a?s+"m\xedn\xfata":s+"m\xedn\xfatu";case"hh":return Ga(e)?s+(a||n?"klukkustundir":"klukkustundum"):s+"klukkustund";case"d":return a?"dagur":n?"dag":"degi";case"dd":return Ga(e)?a?s+"dagar":s+(n?"daga":"d\xf6gum"):a?s+"dagur":s+(n?"dag":"degi");case"M":return a?"m\xe1nu\xf0ur":n?"m\xe1nu\xf0":"m\xe1nu\xf0i";case"MM":return Ga(e)?a?s+"m\xe1nu\xf0ir":s+(n?"m\xe1nu\xf0i":"m\xe1nu\xf0um"):a?s+"m\xe1nu\xf0ur":s+(n?"m\xe1nu\xf0":"m\xe1nu\xf0i");case"y":return a||n?"\xe1r":"\xe1ri";case"yy":return Ga(e)?s+(a||n?"\xe1r":"\xe1rum"):s+(a||n?"\xe1r":"\xe1ri")}}function Va(e,a,t,n){var s={m:["eng Minutt","enger Minutt"],h:["eng Stonn","enger Stonn"],d:["een Dag","engem Dag"],M:["ee Mount","engem Mount"],y:["ee Joer","engem Joer"]};return a?s[t][0]:s[t][1]}function Ka(e){if(e=parseInt(e,10),isNaN(e))return!1;if(e<0)return!0;if(e<10)return 4<=e&&e<=7;if(e<100){var a=e%10,t=e/10;return Ka(0===a?t:a)}if(e<1e4){for(;e>=10;)e/=10;return Ka(e)}return e/=1e3,Ka(e)}function $a(e,a,t,n){return a?Ba(t)[0]:n?Ba(t)[1]:Ba(t)[2]}function Za(e){return e%10==0||e>10&&e<20}function Ba(e){return Lr[e].split("_")}function qa(e,a,t,n){var s=e+" ";return 1===e?s+$a(e,a,t[0],n):a?s+(Za(e)?Ba(t)[1]:Ba(t)[0]):n?s+Ba(t)[1]:s+(Za(e)?Ba(t)[1]:Ba(t)[2])}function Qa(e,a,t){return t?a%10==1&&a%100!=11?e[2]:e[3]:a%10==1&&a%100!=11?e[0]:e[1]}function Xa(e,a,t){return e+" "+Qa(cr[t],e,a)}function et(e,a,t){return Qa(cr[t],e,a)}function at(e,a,t,n){var s="";if(a)switch(t){case"s":s="\u0915\u093e\u0939\u0940 \u0938\u0947\u0915\u0902\u0926";break;case"m":s="\u090f\u0915 \u092e\u093f\u0928\u093f\u091f";break;case"mm":s="%d \u092e\u093f\u0928\u093f\u091f\u0947";break;case"h":s="\u090f\u0915 \u0924\u093e\u0938";break;case"hh":s="%d \u0924\u093e\u0938";break;case"d":s="\u090f\u0915 \u0926\u093f\u0935\u0938";break;case"dd":s="%d \u0926\u093f\u0935\u0938";break;case"M":s="\u090f\u0915 \u092e\u0939\u093f\u0928\u093e";break;case"MM":s="%d \u092e\u0939\u093f\u0928\u0947";break;case"y":s="\u090f\u0915 \u0935\u0930\u094d\u0937";break;case"yy":s="%d \u0935\u0930\u094d\u0937\u0947";break}else switch(t){case"s":s="\u0915\u093e\u0939\u0940 \u0938\u0947\u0915\u0902\u0926\u093e\u0902";break;case"m":s="\u090f\u0915\u093e \u092e\u093f\u0928\u093f\u091f\u093e";break;case"mm":s="%d \u092e\u093f\u0928\u093f\u091f\u093e\u0902";break;case"h":s="\u090f\u0915\u093e \u0924\u093e\u0938\u093e";break;case"hh":s="%d \u0924\u093e\u0938\u093e\u0902";break;case"d":s="\u090f\u0915\u093e \u0926\u093f\u0935\u0938\u093e";break;case"dd":s="%d \u0926\u093f\u0935\u0938\u093e\u0902";break;case"M":s="\u090f\u0915\u093e \u092e\u0939\u093f\u0928\u094d\u092f\u093e";break;case"MM":s="%d \u092e\u0939\u093f\u0928\u094d\u092f\u093e\u0902";break;case"y":s="\u090f\u0915\u093e \u0935\u0930\u094d\u0937\u093e";break;case"yy":s="%d \u0935\u0930\u094d\u0937\u093e\u0902";break}return s.replace(/%d/i,e)}function tt(e){return e%10<5&&e%10>1&&~~(e/10)%10!=1}function nt(e,a,t){var n=e+" ";switch(t){case"m":return a?"minuta":"minut\u0119";case"mm":return n+(tt(e)?"minuty":"minut");case"h":return a?"godzina":"godzin\u0119";case"hh":return n+(tt(e)?"godziny":"godzin");case"MM":return n+(tt(e)?"miesi\u0105ce":"miesi\u0119cy");case"yy":return n+(tt(e)?"lata":"lat")}}function st(e,a,t){var n={mm:"minute",hh:"ore",dd:"zile",MM:"luni",yy:"ani"},s=" ";return(e%100>=20||e>=100&&e%100==0)&&(s=" de "),e+s+n[t]}function rt(e,a){var t=e.split("_");return a%10==1&&a%100!=11?t[0]:a%10>=2&&a%10<=4&&(a%100<10||a%100>=20)?t[1]:t[2]}function dt(e,a,t){var n={mm:a?"\u043c\u0438\u043d\u0443\u0442\u0430_\u043c\u0438\u043d\u0443\u0442\u044b_\u043c\u0438\u043d\u0443\u0442":"\u043c\u0438\u043d\u0443\u0442\u0443_\u043c\u0438\u043d\u0443\u0442\u044b_\u043c\u0438\u043d\u0443\u0442",hh:"\u0447\u0430\u0441_\u0447\u0430\u0441\u0430_\u0447\u0430\u0441\u043e\u0432",dd:"\u0434\u0435\u043d\u044c_\u0434\u043d\u044f_\u0434\u043d\u0435\u0439",MM:"\u043c\u0435\u0441\u044f\u0446_\u043c\u0435\u0441\u044f\u0446\u0430_\u043c\u0435\u0441\u044f\u0446\u0435\u0432",yy:"\u0433\u043e\u0434_\u0433\u043e\u0434\u0430_\u043b\u0435\u0442"};return"m"===t?a?"\u043c\u0438\u043d\u0443\u0442\u0430":"\u043c\u0438\u043d\u0443\u0442\u0443":e+" "+rt(n[t],+e)}function _t(e){return e>1&&e<5}function it(e,a,t,n){var s=e+" ";switch(t){case"s":return a||n?"p\xe1r sek\xfand":"p\xe1r sekundami";case"m":return a?"min\xfata":n?"min\xfatu":"min\xfatou";case"mm":return a||n?s+(_t(e)?"min\xfaty":"min\xfat"):s+"min\xfatami";break;case"h":return a?"hodina":n?"hodinu":"hodinou";case"hh":return a||n?s+(_t(e)?"hodiny":"hod\xedn"):s+"hodinami";break;case"d":return a||n?"de\u0148":"d\u0148om";case"dd":return a||n?s+(_t(e)?"dni":"dn\xed"):s+"d\u0148ami";break;case"M":return a||n?"mesiac":"mesiacom";case"MM":return a||n?s+(_t(e)?"mesiace":"mesiacov"):s+"mesiacmi";break;case"y":return a||n?"rok":"rokom";case"yy":return a||n?s+(_t(e)?"roky":"rokov"):s+"rokmi";break}}function ot(e,a,t,n){var s=e+" ";switch(t){case"s":return a||n?"nekaj sekund":"nekaj sekundami";case"m":return a?"ena minuta":"eno minuto";case"mm":return s+=1===e?a?"minuta":"minuto":2===e?a||n?"minuti":"minutama":e<5?a||n?"minute":"minutami":a||n?"minut":"minutami";case"h":return a?"ena ura":"eno uro";case"hh":return s+=1===e?a?"ura":"uro":2===e?a||n?"uri":"urama":e<5?a||n?"ure":"urami":a||n?"ur":"urami";case"d":return a||n?"en dan":"enim dnem";case"dd":return s+=1===e?a||n?"dan":"dnem":2===e?a||n?"dni":"dnevoma":a||n?"dni":"dnevi";case"M":return a||n?"en mesec":"enim mesecem";case"MM":return s+=1===e?a||n?"mesec":"mesecem":2===e?a||n?"meseca":"mesecema":e<5?a||n?"mesece":"meseci":a||n?"mesecev":"meseci";case"y":return a||n?"eno leto":"enim letom";case"yy":return s+=1===e?a||n?"leto":"letom":2===e?a||n?"leti":"letoma":e<5?a||n?"leta":"leti":a||n?"let":"leti"}}function mt(e,a,t,n){var s=ut(e);switch(t){case"mm":return s+" tup";case"hh":return s+" rep";case"dd":return s+" jaj";case"MM":return s+" jar";case"yy":return s+" DIS"}}function ut(e){var a=Math.floor(e%1e3/100),t=Math.floor(e%100/10),n=e%10,s="";return a>0&&(s+=Ur[a]+"vatlh"),t>0&&(s+=(""!==s?" ":"")+Ur[t]+"maH"),n>0&&(s+=(""!==s?" ":"")+Ur[n]),""===s?"pagh":s}function lt(e,a,t,n){var s={s:["viensas secunds","'iensas secunds"],m:["'n m\xedut","'iens m\xedut"],mm:[e+" m\xeduts",e+" m\xeduts"],h:["'n \xfeora","'iensa \xfeora"],hh:[e+" \xfeoras",e+" \xfeoras"],d:["'n ziua","'iensa ziua"],dd:[e+" ziuas",e+" ziuas"],M:["'n mes","'iens mes"],MM:[e+" mesen",e+" mesen"],y:["'n ar","'iens ar"],yy:[e+" ars",e+" ars"]};return n?s[t][0]:a?s[t][0]:s[t][1]}function Mt(e,a){var t=e.split("_");return a%10==1&&a%100!=11?t[0]:a%10>=2&&a%10<=4&&(a%100<10||a%100>=20)?t[1]:t[2]}function ht(e,a,t){var n={mm:a?"\u0445\u0432\u0438\u043b\u0438\u043d\u0430_\u0445\u0432\u0438\u043b\u0438\u043d\u0438_\u0445\u0432\u0438\u043b\u0438\u043d":"\u0445\u0432\u0438\u043b\u0438\u043d\u0443_\u0445\u0432\u0438\u043b\u0438\u043d\u0438_\u0445\u0432\u0438\u043b\u0438\u043d",hh:a?"\u0433\u043e\u0434\u0438\u043d\u0430_\u0433\u043e\u0434\u0438\u043d\u0438_\u0433\u043e\u0434\u0438\u043d":"\u0433\u043e\u0434\u0438\u043d\u0443_\u0433\u043e\u0434\u0438\u043d\u0438_\u0433\u043e\u0434\u0438\u043d",dd:"\u0434\u0435\u043d\u044c_\u0434\u043d\u0456_\u0434\u043d\u0456\u0432",MM:"\u043c\u0456\u0441\u044f\u0446\u044c_\u043c\u0456\u0441\u044f\u0446\u0456_\u043c\u0456\u0441\u044f\u0446\u0456\u0432",yy:"\u0440\u0456\u043a_\u0440\u043e\u043a\u0438_\u0440\u043e\u043a\u0456\u0432"};return"m"===t?a?"\u0445\u0432\u0438\u043b\u0438\u043d\u0430":"\u0445\u0432\u0438\u043b\u0438\u043d\u0443":"h"===t?a?"\u0433\u043e\u0434\u0438\u043d\u0430":"\u0433\u043e\u0434\u0438\u043d\u0443":e+" "+Mt(n[t],+e)}function Lt(e){return function(){return e+"\u043e"+(11===this.hours()?"\u0431":"")+"] LT"}}var ct,Yt;Yt=Array.prototype.some?Array.prototype.some:function(e){for(var a=Object(this),t=a.length>>>0,n=0;n<t;n++)if(n in a&&e.call(this,a[n],n,a))return!0;return!1};var yt=e.momentProperties=[],ft=!1,pt={};e.suppressDeprecationWarnings=!1,e.deprecationHandler=null;var kt;kt=Object.keys?Object.keys:function(e){var a,t=[];for(a in e)i(e,a)&&t.push(a);return t};var Dt={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},Tt={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},gt=/\d{1,2}/,wt={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},vt={},St={},Ht=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,bt=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,jt={},xt={},Pt=/\d/,Ot=/\d\d/,Wt=/\d{3}/,Et=/\d{4}/,At=/[+-]?\d{6}/,Ft=/\d\d?/,zt=/\d\d\d\d?/,Jt=/\d\d\d\d\d\d?/,Nt=/\d{1,3}/,Rt=/\d{1,4}/,Ct=/[+-]?\d{1,6}/,It=/\d+/,Gt=/[+-]?\d+/,Ut=/Z|[+-]\d\d:?\d\d/gi,Vt=/Z|[+-]\d\d(?::?\d\d)?/gi,Kt=/[+-]?\d+(\.\d{1,3})?/,$t=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Zt={},Bt={},qt=0,Qt=1,Xt=2,en=3,an=4,tn=5,nn=6,sn=7,rn=8;O("Y",0,0,function(){var e=this.year();return e<=9999?""+e:"+"+e}),O(0,["YY",2],0,function(){return this.year()%100}),O(0,["YYYY",4],0,"year"),O(0,["YYYYY",5],0,"year"),O(0,["YYYYYY",6,!0],0,"year"),S("year","y"),j("year",1),z("Y",Gt),z("YY",Ft,Ot),z("YYYY",Rt,Et),z("YYYYY",Ct,At),z("YYYYYY",Ct,At),C(["YYYYY","YYYYYY"],qt),C("YYYY",function(a,t){t[qt]=2===a.length?e.parseTwoDigitYear(a):f(a)}),C("YY",function(a,t){t[qt]=e.parseTwoDigitYear(a)}),C("Y",function(e,a){a[qt]=parseInt(e,10)}),e.parseTwoDigitYear=function(e){return f(e)+(f(e)>68?1900:2e3)};var dn,_n=K("FullYear",!0);dn=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var a;for(a=0;a<this.length;++a)if(this[a]===e)return a;return-1},O("M",["MM",2],"Mo",function(){return this.month()+1}),O("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),O("MMMM",0,0,function(e){return this.localeData().months(this,e)}),S("month","M"),j("month",8),z("M",Ft),z("MM",Ft,Ot),z("MMM",function(e,a){return a.monthsShortRegex(e)}),z("MMMM",function(e,a){return a.monthsRegex(e)}),C(["M","MM"],function(e,a){a[Qt]=f(e)-1}),C(["MMM","MMMM"],function(e,a,t,n){var s=t._locale.monthsParse(e,n,t._strict);null!=s?a[Qt]=s:l(t).invalidMonth=e});var on=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,mn="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),un="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),ln=$t,Mn=$t;O("w",["ww",2],"wo","week"),O("W",["WW",2],"Wo","isoWeek"),S("week","w"),S("isoWeek","W"),j("week",5),j("isoWeek",5),z("w",Ft),z("ww",Ft,Ot),z("W",Ft),z("WW",Ft,Ot),I(["w","ww","W","WW"],function(e,a,t,n){a[n.substr(0,1)]=f(e)});var hn={dow:0,doy:6};O("d",0,"do","day"),O("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),O("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),O("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),O("e",0,0,"weekday"),O("E",0,0,"isoWeekday"),S("day","d"),S("weekday","e"),S("isoWeekday","E"),j("day",11),j("weekday",11),j("isoWeekday",11),z("d",Ft),z("e",Ft),z("E",Ft),z("dd",function(e,a){return a.weekdaysMinRegex(e)}),z("ddd",function(e,a){return a.weekdaysShortRegex(e)}),z("dddd",function(e,a){return a.weekdaysRegex(e)}),I(["dd","ddd","dddd"],function(e,a,t,n){var s=t._locale.weekdaysParse(e,n,t._strict);null!=s?a.d=s:l(t).invalidWeekday=e}),I(["d","e","E"],function(e,a,t,n){a[n]=f(e)});var Ln="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),cn="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Yn="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),yn=$t,fn=$t,pn=$t;O("H",["HH",2],0,"hour"),O("h",["hh",2],0,le),O("k",["kk",2],0,function(){return this.hours()||24}),O("hmm",0,0,function(){return""+le.apply(this)+P(this.minutes(),2)}),O("hmmss",0,0,function(){return""+le.apply(this)+P(this.minutes(),2)+P(this.seconds(),2)}),O("Hmm",0,0,function(){return""+this.hours()+P(this.minutes(),2)}),O("Hmmss",0,0,function(){return""+this.hours()+P(this.minutes(),2)+P(this.seconds(),2)}),Me("a",!0),Me("A",!1),S("hour","h"),j("hour",13),z("a",he),z("A",he),z("H",Ft),z("h",Ft),z("k",Ft),z("HH",Ft,Ot),z("hh",Ft,Ot),z("kk",Ft,Ot),z("hmm",zt),z("hmmss",Jt),z("Hmm",zt),z("Hmmss",Jt),C(["H","HH"],en),C(["k","kk"],function(e,a,t){var n=f(e);a[en]=24===n?0:n}),C(["a","A"],function(e,a,t){t._isPm=t._locale.isPM(e),t._meridiem=e}),C(["h","hh"],function(e,a,t){a[en]=f(e),l(t).bigHour=!0}),C("hmm",function(e,a,t){var n=e.length-2;a[en]=f(e.substr(0,n)),a[an]=f(e.substr(n)),l(t).bigHour=!0}),C("hmmss",function(e,a,t){var n=e.length-4,s=e.length-2;a[en]=f(e.substr(0,n)),a[an]=f(e.substr(n,2)),a[tn]=f(e.substr(s)),l(t).bigHour=!0}),C("Hmm",function(e,a,t){var n=e.length-2;a[en]=f(e.substr(0,n)),a[an]=f(e.substr(n))}),C("Hmmss",function(e,a,t){var n=e.length-4,s=e.length-2;a[en]=f(e.substr(0,n)),a[an]=f(e.substr(n,2)),a[tn]=f(e.substr(s))});var kn,Dn=/[ap]\.?m?\.?/i,Tn=K("Hours",!0),gn={calendar:Dt,longDateFormat:Tt,invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:gt,relativeTime:wt,months:mn,monthsShort:un,week:hn,weekdays:Ln,weekdaysMin:Yn,weekdaysShort:cn,meridiemParse:Dn},wn={},vn={},Sn=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Hn=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,bn=/Z|[+-]\d\d(?::?\d\d)?/,jn=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],xn=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Pn=/^\/?Date\((\-?\d+)/i,On=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,Wn={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};e.createFromInputFallback=D("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),e.ISO_8601=function(){},e.RFC_2822=function(){};var En=D("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Ce.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:h()}),An=D("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Ce.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:h()}),Fn=["year","quarter","month","week","day","hour","minute","second","millisecond"];$e("Z",":"),$e("ZZ",""),z("Z",Vt),z("ZZ",Vt),C(["Z","ZZ"],function(e,a,t){t._useUTC=!0,t._tzm=Ze(Vt,e)});var zn=/([\+\-]|\d\d)/gi;e.updateOffset=function(){};var Jn=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,Nn=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;Xe.fn=Ue.prototype,Xe.invalid=function(){return Xe(NaN)};var Rn=na(1,"add"),Cn=na(-1,"subtract");e.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",e.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var In=D("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});O(0,["gg",2],0,function(){return this.weekYear()%100}),O(0,["GG",2],0,function(){return this.isoWeekYear()%100}),ia("gggg","weekYear"),ia("ggggg","weekYear"),ia("GGGG","isoWeekYear"),ia("GGGGG","isoWeekYear"),S("weekYear","gg"),S("isoWeekYear","GG"),j("weekYear",1),j("isoWeekYear",1),z("G",Gt),z("g",Gt),z("GG",Ft,Ot),z("gg",Ft,Ot),z("GGGG",Rt,Et),z("gggg",Rt,Et),z("GGGGG",Ct,At),z("ggggg",Ct,At),I(["gggg","ggggg","GGGG","GGGGG"],function(e,a,t,n){a[n.substr(0,2)]=f(e)}),I(["gg","GG"],function(a,t,n,s){t[s]=e.parseTwoDigitYear(a)}),O("Q",0,"Qo","quarter"),S("quarter","Q"),j("quarter",7),z("Q",Pt),C("Q",function(e,a){a[Qt]=3*(f(e)-1)}),O("D",["DD",2],"Do","date"),S("date","D"),j("date",9),z("D",Ft),z("DD",Ft,Ot),z("Do",function(e,a){return e?a._dayOfMonthOrdinalParse||a._ordinalParse:a._dayOfMonthOrdinalParseLenient}),C(["D","DD"],Xt),C("Do",function(e,a){a[Xt]=f(e.match(Ft)[0],10)});var Gn=K("Date",!0);O("DDD",["DDDD",3],"DDDo","dayOfYear"),S("dayOfYear","DDD"),j("dayOfYear",4),z("DDD",Nt),z("DDDD",Wt),C(["DDD","DDDD"],function(e,a,t){t._dayOfYear=f(e)}),O("m",["mm",2],0,"minute"),S("minute","m"),j("minute",14),z("m",Ft),z("mm",Ft,Ot),C(["m","mm"],an);var Un=K("Minutes",!1);O("s",["ss",2],0,"second"),S("second","s"),j("second",15),z("s",Ft),z("ss",Ft,Ot),C(["s","ss"],tn);var Vn=K("Seconds",!1);O("S",0,0,function(){return~~(this.millisecond()/100)}),O(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),O(0,["SSS",3],0,"millisecond"),O(0,["SSSS",4],0,function(){return 10*this.millisecond()}),O(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),O(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),O(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),O(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),O(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),S("millisecond","ms"),j("millisecond",16),z("S",Nt,Pt),z("SS",Nt,Ot),z("SSS",Nt,Wt);var Kn;for(Kn="SSSS";Kn.length<=9;Kn+="S")z(Kn,It);for(Kn="S";Kn.length<=9;Kn+="S")C(Kn,function(e,a){a[nn]=f(1e3*("0."+e))});var $n=K("Milliseconds",!1);O("z",0,0,"zoneAbbr"),O("zz",0,0,"zoneName");var Zn=c.prototype;Zn.add=Rn,Zn.calendar=function(a,t){var n=a||Ce(),s=Be(n,this).startOf("day"),r=e.calendarFormat(this,s)||"sameElse",d=t&&(g(t[r])?t[r].call(this,n):t[r]);return this.format(d||this.localeData().calendar(r,this,Ce(n)))},Zn.clone=function(){return new c(this)},Zn.diff=function(e,a,t){var n,s,r;if(!this.isValid())return NaN;if(!(n=Be(e,this)).isValid())return NaN;switch(s=6e4*(n.utcOffset()-this.utcOffset()),a=H(a)){case"year":r=ra(this,n)/12;break;case"month":r=ra(this,n);break;case"quarter":r=ra(this,n)/3;break;case"second":r=(this-n)/1e3;break;case"minute":r=(this-n)/6e4;break;case"hour":r=(this-n)/36e5;break;case"day":r=(this-n-s)/864e5;break;case"week":r=(this-n-s)/6048e5;break;default:r=this-n}return t?r:y(r)},Zn.endOf=function(e){return void 0===(e=H(e))||"millisecond"===e?this:("date"===e&&(e="day"),this.startOf(e).add(1,"isoWeek"===e?"week":e).subtract(1,"ms"))},Zn.format=function(a){a||(a=this.isUtc()?e.defaultFormatUtc:e.defaultFormat);var t=A(this,a);return this.localeData().postformat(t)},Zn.from=function(e,a){return this.isValid()&&(Y(e)&&e.isValid()||Ce(e).isValid())?Xe({to:this,from:e}).locale(this.locale()).humanize(!a):this.localeData().invalidDate()},Zn.fromNow=function(e){return this.from(Ce(),e)},Zn.to=function(e,a){return this.isValid()&&(Y(e)&&e.isValid()||Ce(e).isValid())?Xe({from:this,to:e}).locale(this.locale()).humanize(!a):this.localeData().invalidDate()},Zn.toNow=function(e){return this.to(Ce(),e)},Zn.get=function(e){return e=H(e),g(this[e])?this[e]():this},Zn.invalidAt=function(){return l(this).overflow},Zn.isAfter=function(e,a){var t=Y(e)?e:Ce(e);return!(!this.isValid()||!t.isValid())&&("millisecond"===(a=H(s(a)?"millisecond":a))?this.valueOf()>t.valueOf():t.valueOf()<this.clone().startOf(a).valueOf())},Zn.isBefore=function(e,a){var t=Y(e)?e:Ce(e);return!(!this.isValid()||!t.isValid())&&("millisecond"===(a=H(s(a)?"millisecond":a))?this.valueOf()<t.valueOf():this.clone().endOf(a).valueOf()<t.valueOf())},Zn.isBetween=function(e,a,t,n){return("("===(n=n||"()")[0]?this.isAfter(e,t):!this.isBefore(e,t))&&(")"===n[1]?this.isBefore(a,t):!this.isAfter(a,t))},Zn.isSame=function(e,a){var t,n=Y(e)?e:Ce(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(a=H(a||"millisecond"))?this.valueOf()===n.valueOf():(t=n.valueOf(),this.clone().startOf(a).valueOf()<=t&&t<=this.clone().endOf(a).valueOf()))},Zn.isSameOrAfter=function(e,a){return this.isSame(e,a)||this.isAfter(e,a)},Zn.isSameOrBefore=function(e,a){return this.isSame(e,a)||this.isBefore(e,a)},Zn.isValid=function(){return M(this)},Zn.lang=In,Zn.locale=da,Zn.localeData=_a,Zn.max=An,Zn.min=En,Zn.parsingFlags=function(){return o({},l(this))},Zn.set=function(e,a){if("object"==typeof e)for(var t=x(e=b(e)),n=0;n<t.length;n++)this[t[n].unit](e[t[n].unit]);else if(e=H(e),g(this[e]))return this[e](a);return this},Zn.startOf=function(e){switch(e=H(e)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===e&&this.weekday(0),"isoWeek"===e&&this.isoWeekday(1),"quarter"===e&&this.month(3*Math.floor(this.month()/3)),this},Zn.subtract=Cn,Zn.toArray=function(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]},Zn.toObject=function(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}},Zn.toDate=function(){return new Date(this.valueOf())},Zn.toISOString=function(){if(!this.isValid())return null;var e=this.clone().utc();return e.year()<0||e.year()>9999?A(e,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):g(Date.prototype.toISOString)?this.toDate().toISOString():A(e,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},Zn.inspect=function(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",a="";this.isLocal()||(e=0===this.utcOffset()?"moment.utc":"moment.parseZone",a="Z");var t="["+e+'("]',n=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",s=a+'[")]';return this.format(t+n+"-MM-DD[T]HH:mm:ss.SSS"+s)},Zn.toJSON=function(){return this.isValid()?this.toISOString():null},Zn.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},Zn.unix=function(){return Math.floor(this.valueOf()/1e3)},Zn.valueOf=function(){return this._d.valueOf()-6e4*(this._offset||0)},Zn.creationData=function(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}},Zn.year=_n,Zn.isLeapYear=function(){return V(this.year())},Zn.weekYear=function(e){return oa.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)},Zn.isoWeekYear=function(e){return oa.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)},Zn.quarter=Zn.quarters=function(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)},Zn.month=ee,Zn.daysInMonth=function(){return q(this.year(),this.month())},Zn.week=Zn.weeks=function(e){var a=this.localeData().week(this);return null==e?a:this.add(7*(e-a),"d")},Zn.isoWeek=Zn.isoWeeks=function(e){var a=de(this,1,4).week;return null==e?a:this.add(7*(e-a),"d")},Zn.weeksInYear=function(){var e=this.localeData()._week;return _e(this.year(),e.dow,e.doy)},Zn.isoWeeksInYear=function(){return _e(this.year(),1,4)},Zn.date=Gn,Zn.day=Zn.days=function(e){if(!this.isValid())return null!=e?this:NaN;var a=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(e=ie(e,this.localeData()),this.add(e-a,"d")):a},Zn.weekday=function(e){if(!this.isValid())return null!=e?this:NaN;var a=(this.day()+7-this.localeData()._week.dow)%7;return null==e?a:this.add(e-a,"d")},Zn.isoWeekday=function(e){if(!this.isValid())return null!=e?this:NaN;if(null!=e){var a=oe(e,this.localeData());return this.day(this.day()%7?a:a-7)}return this.day()||7},Zn.dayOfYear=function(e){var a=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?a:this.add(e-a,"d")},Zn.hour=Zn.hours=Tn,Zn.minute=Zn.minutes=Un,Zn.second=Zn.seconds=Vn,Zn.millisecond=Zn.milliseconds=$n,Zn.utcOffset=function(a,t,n){var s,r=this._offset||0;if(!this.isValid())return null!=a?this:NaN;if(null!=a){if("string"==typeof a){if(null===(a=Ze(Vt,a)))return this}else Math.abs(a)<16&&!n&&(a*=60);return!this._isUTC&&t&&(s=qe(this)),this._offset=a,this._isUTC=!0,null!=s&&this.add(s,"m"),r!==a&&(!t||this._changeInProgress?sa(this,Xe(a-r,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,e.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?r:qe(this)},Zn.utc=function(e){return this.utcOffset(0,e)},Zn.local=function(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(qe(this),"m")),this},Zn.parseZone=function(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var e=Ze(Ut,this._i);null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this},Zn.hasAlignedHourOffset=function(e){return!!this.isValid()&&(e=e?Ce(e).utcOffset():0,(this.utcOffset()-e)%60==0)},Zn.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},Zn.isLocal=function(){return!!this.isValid()&&!this._isUTC},Zn.isUtcOffset=function(){return!!this.isValid()&&this._isUTC},Zn.isUtc=Qe,Zn.isUTC=Qe,Zn.zoneAbbr=function(){return this._isUTC?"UTC":""},Zn.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""},Zn.dates=D("dates accessor is deprecated. Use date instead.",Gn),Zn.months=D("months accessor is deprecated. Use month instead",ee),Zn.years=D("years accessor is deprecated. Use year instead",_n),Zn.zone=D("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",function(e,a){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,a),this):-this.utcOffset()}),Zn.isDSTShifted=D("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",function(){if(!s(this._isDSTShifted))return this._isDSTShifted;var e={};if(L(e,this),(e=Je(e))._a){var a=e._isUTC?m(e._a):Ce(e._a);this._isDSTShifted=this.isValid()&&p(e._a,a.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted});var Bn=v.prototype;Bn.calendar=function(e,a,t){var n=this._calendar[e]||this._calendar.sameElse;return g(n)?n.call(a,t):n},Bn.longDateFormat=function(e){var a=this._longDateFormat[e],t=this._longDateFormat[e.toUpperCase()];return a||!t?a:(this._longDateFormat[e]=t.replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e])},Bn.invalidDate=function(){return this._invalidDate},Bn.ordinal=function(e){return this._ordinal.replace("%d",e)},Bn.preparse=ua,Bn.postformat=ua,Bn.relativeTime=function(e,a,t,n){var s=this._relativeTime[t];return g(s)?s(e,a,t,n):s.replace(/%d/i,e)},Bn.pastFuture=function(e,a){var t=this._relativeTime[e>0?"future":"past"];return g(t)?t(a):t.replace(/%s/i,a)},Bn.set=function(e){var a,t;for(t in e)g(a=e[t])?this[t]=a:this["_"+t]=a;this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)},Bn.months=function(e,t){return e?a(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||on).test(t)?"format":"standalone"][e.month()]:a(this._months)?this._months:this._months.standalone},Bn.monthsShort=function(e,t){return e?a(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[on.test(t)?"format":"standalone"][e.month()]:a(this._monthsShort)?this._monthsShort:this._monthsShort.standalone},Bn.monthsParse=function(e,a,t){var n,s,r;if(this._monthsParseExact)return Q.call(this,e,a,t);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),n=0;n<12;n++){if(s=m([2e3,n]),t&&!this._longMonthsParse[n]&&(this._longMonthsParse[n]=new RegExp("^"+this.months(s,"").replace(".","")+"$","i"),this._shortMonthsParse[n]=new RegExp("^"+this.monthsShort(s,"").replace(".","")+"$","i")),t||this._monthsParse[n]||(r="^"+this.months(s,"")+"|^"+this.monthsShort(s,""),this._monthsParse[n]=new RegExp(r.replace(".",""),"i")),t&&"MMMM"===a&&this._longMonthsParse[n].test(e))return n;if(t&&"MMM"===a&&this._shortMonthsParse[n].test(e))return n;if(!t&&this._monthsParse[n].test(e))return n}},Bn.monthsRegex=function(e){return this._monthsParseExact?(i(this,"_monthsRegex")||ae.call(this),e?this._monthsStrictRegex:this._monthsRegex):(i(this,"_monthsRegex")||(this._monthsRegex=Mn),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)},Bn.monthsShortRegex=function(e){return this._monthsParseExact?(i(this,"_monthsRegex")||ae.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(i(this,"_monthsShortRegex")||(this._monthsShortRegex=ln),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)},Bn.week=function(e){return de(e,this._week.dow,this._week.doy).week},Bn.firstDayOfYear=function(){return this._week.doy},Bn.firstDayOfWeek=function(){return this._week.dow},Bn.weekdays=function(e,t){return e?a(this._weekdays)?this._weekdays[e.day()]:this._weekdays[this._weekdays.isFormat.test(t)?"format":"standalone"][e.day()]:a(this._weekdays)?this._weekdays:this._weekdays.standalone},Bn.weekdaysMin=function(e){return e?this._weekdaysMin[e.day()]:this._weekdaysMin},Bn.weekdaysShort=function(e){return e?this._weekdaysShort[e.day()]:this._weekdaysShort},Bn.weekdaysParse=function(e,a,t){var n,s,r;if(this._weekdaysParseExact)return me.call(this,e,a,t);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),n=0;n<7;n++){if(s=m([2e3,1]).day(n),t&&!this._fullWeekdaysParse[n]&&(this._fullWeekdaysParse[n]=new RegExp("^"+this.weekdays(s,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[n]=new RegExp("^"+this.weekdaysShort(s,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[n]=new RegExp("^"+this.weekdaysMin(s,"").replace(".",".?")+"$","i")),this._weekdaysParse[n]||(r="^"+this.weekdays(s,"")+"|^"+this.weekdaysShort(s,"")+"|^"+this.weekdaysMin(s,""),this._weekdaysParse[n]=new RegExp(r.replace(".",""),"i")),t&&"dddd"===a&&this._fullWeekdaysParse[n].test(e))return n;if(t&&"ddd"===a&&this._shortWeekdaysParse[n].test(e))return n;if(t&&"dd"===a&&this._minWeekdaysParse[n].test(e))return n;if(!t&&this._weekdaysParse[n].test(e))return n}},Bn.weekdaysRegex=function(e){return this._weekdaysParseExact?(i(this,"_weekdaysRegex")||ue.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(i(this,"_weekdaysRegex")||(this._weekdaysRegex=yn),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)},Bn.weekdaysShortRegex=function(e){return this._weekdaysParseExact?(i(this,"_weekdaysRegex")||ue.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(i(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=fn),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)},Bn.weekdaysMinRegex=function(e){return this._weekdaysParseExact?(i(this,"_weekdaysRegex")||ue.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(i(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=pn),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)},Bn.isPM=function(e){return"p"===(e+"").toLowerCase().charAt(0)},Bn.meridiem=function(e,a,t){return e>11?t?"pm":"PM":t?"am":"AM"},ye("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var a=e%10;return e+(1===f(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th")}}),e.lang=D("moment.lang is deprecated. Use moment.locale instead.",ye),e.langData=D("moment.langData is deprecated. Use moment.localeData instead.",pe);var qn=Math.abs,Qn=fa("ms"),Xn=fa("s"),es=fa("m"),as=fa("h"),ts=fa("d"),ns=fa("w"),ss=fa("M"),rs=fa("y"),ds=pa("milliseconds"),_s=pa("seconds"),is=pa("minutes"),os=pa("hours"),ms=pa("days"),us=pa("months"),ls=pa("years"),Ms=Math.round,hs={ss:44,s:45,m:45,h:22,d:26,M:11},Ls=Math.abs,cs=Ue.prototype;cs.isValid=function(){return this._isValid},cs.abs=function(){var e=this._data;return this._milliseconds=qn(this._milliseconds),this._days=qn(this._days),this._months=qn(this._months),e.milliseconds=qn(e.milliseconds),e.seconds=qn(e.seconds),e.minutes=qn(e.minutes),e.hours=qn(e.hours),e.months=qn(e.months),e.years=qn(e.years),this},cs.add=function(e,a){return La(this,e,a,1)},cs.subtract=function(e,a){return La(this,e,a,-1)},cs.as=function(e){if(!this.isValid())return NaN;var a,t,n=this._milliseconds;if("month"===(e=H(e))||"year"===e)return a=this._days+n/864e5,t=this._months+Ya(a),"month"===e?t:t/12;switch(a=this._days+Math.round(ya(this._months)),e){case"week":return a/7+n/6048e5;case"day":return a+n/864e5;case"hour":return 24*a+n/36e5;case"minute":return 1440*a+n/6e4;case"second":return 86400*a+n/1e3;case"millisecond":return Math.floor(864e5*a)+n;default:throw new Error("Unknown unit "+e)}},cs.asMilliseconds=Qn,cs.asSeconds=Xn,cs.asMinutes=es,cs.asHours=as,cs.asDays=ts,cs.asWeeks=ns,cs.asMonths=ss,cs.asYears=rs,cs.valueOf=function(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*f(this._months/12):NaN},cs._bubble=function(){var e,a,t,n,s,r=this._milliseconds,d=this._days,_=this._months,i=this._data;return r>=0&&d>=0&&_>=0||r<=0&&d<=0&&_<=0||(r+=864e5*ca(ya(_)+d),d=0,_=0),i.milliseconds=r%1e3,e=y(r/1e3),i.seconds=e%60,a=y(e/60),i.minutes=a%60,t=y(a/60),i.hours=t%24,d+=y(t/24),s=y(Ya(d)),_+=s,d-=ca(ya(s)),n=y(_/12),_%=12,i.days=d,i.months=_,i.years=n,this},cs.clone=function(){return Xe(this)},cs.get=function(e){return e=H(e),this.isValid()?this[e+"s"]():NaN},cs.milliseconds=ds,cs.seconds=_s,cs.minutes=is,cs.hours=os,cs.days=ms,cs.weeks=function(){return y(this.days()/7)},cs.months=us,cs.years=ls,cs.humanize=function(e){if(!this.isValid())return this.localeData().invalidDate();var a=this.localeData(),t=Da(this,!e,a);return e&&(t=a.pastFuture(+this,t)),a.postformat(t)},cs.toISOString=ga,cs.toString=ga,cs.toJSON=ga,cs.locale=da,cs.localeData=_a,cs.toIsoString=D("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",ga),cs.lang=In,O("X",0,0,"unix"),O("x",0,0,"valueOf"),z("x",Gt),z("X",Kt),C("X",function(e,a,t){t._d=new Date(1e3*parseFloat(e,10))}),C("x",function(e,a,t){t._d=new Date(f(e))}),e.version="2.19.1",function(e){ct=e}(Ce),e.fn=Zn,e.min=function(){return Ie("isBefore",[].slice.call(arguments,0))},e.max=function(){return Ie("isAfter",[].slice.call(arguments,0))},e.now=function(){return Date.now?Date.now():+new Date},e.utc=m,e.unix=function(e){return Ce(1e3*e)},e.months=function(e,a){return Ma(e,a,"months")},e.isDate=d,e.locale=ye,e.invalid=h,e.duration=Xe,e.isMoment=Y,e.weekdays=function(e,a,t){return ha(e,a,t,"weekdays")},e.parseZone=function(){return Ce.apply(null,arguments).parseZone()},e.localeData=pe,e.isDuration=Ve,e.monthsShort=function(e,a){return Ma(e,a,"monthsShort")},e.weekdaysMin=function(e,a,t){return ha(e,a,t,"weekdaysMin")},e.defineLocale=fe,e.updateLocale=function(e,a){if(null!=a){var t,n=gn;null!=wn[e]&&(n=wn[e]._config),(t=new v(a=w(n,a))).parentLocale=wn[e],wn[e]=t,ye(e)}else null!=wn[e]&&(null!=wn[e].parentLocale?wn[e]=wn[e].parentLocale:null!=wn[e]&&delete wn[e]);return wn[e]},e.locales=function(){return kt(wn)},e.weekdaysShort=function(e,a,t){return ha(e,a,t,"weekdaysShort")},e.normalizeUnits=H,e.relativeTimeRounding=function(e){return void 0===e?Ms:"function"==typeof e&&(Ms=e,!0)},e.relativeTimeThreshold=function(e,a){return void 0!==hs[e]&&(void 0===a?hs[e]:(hs[e]=a,"s"===e&&(hs.ss=a-1),!0))},e.calendarFormat=function(e,a){var t=e.diff(a,"days",!0);return t<-6?"sameElse":t<-1?"lastWeek":t<0?"lastDay":t<1?"sameDay":t<2?"nextDay":t<7?"nextWeek":"sameElse"},e.prototype=Zn,e.defineLocale("af",{months:"Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),weekdays:"Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),weekdaysShort:"Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),weekdaysMin:"So_Ma_Di_Wo_Do_Vr_Sa".split("_"),meridiemParse:/vm|nm/i,isPM:function(e){return/^nm$/i.test(e)},meridiem:function(e,a,t){return e<12?t?"vm":"VM":t?"nm":"NM"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Vandag om] LT",nextDay:"[M\xf4re om] LT",nextWeek:"dddd [om] LT",lastDay:"[Gister om] LT",lastWeek:"[Laas] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oor %s",past:"%s gelede",s:"'n paar sekondes",m:"'n minuut",mm:"%d minute",h:"'n uur",hh:"%d ure",d:"'n dag",dd:"%d dae",M:"'n maand",MM:"%d maande",y:"'n jaar",yy:"%d jaar"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}}),e.defineLocale("ar-dz",{months:"\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"),monthsShort:"\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"),weekdays:"\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),weekdaysShort:"\u0627\u062d\u062f_\u0627\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),weekdaysMin:"\u0623\u062d_\u0625\u062b_\u062b\u0644\u0627_\u0623\u0631_\u062e\u0645_\u062c\u0645_\u0633\u0628".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextDay:"[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextWeek:"dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastDay:"[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastWeek:"dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",sameElse:"L"},relativeTime:{future:"\u0641\u064a %s",past:"\u0645\u0646\u0630 %s",s:"\u062b\u0648\u0627\u0646",m:"\u062f\u0642\u064a\u0642\u0629",mm:"%d \u062f\u0642\u0627\u0626\u0642",h:"\u0633\u0627\u0639\u0629",hh:"%d \u0633\u0627\u0639\u0627\u062a",d:"\u064a\u0648\u0645",dd:"%d \u0623\u064a\u0627\u0645",M:"\u0634\u0647\u0631",MM:"%d \u0623\u0634\u0647\u0631",y:"\u0633\u0646\u0629",yy:"%d \u0633\u0646\u0648\u0627\u062a"},week:{dow:0,doy:4}}),e.defineLocale("ar-kw",{months:"\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split("_"),monthsShort:"\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split("_"),weekdays:"\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062a\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),weekdaysShort:"\u0627\u062d\u062f_\u0627\u062a\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),weekdaysMin:"\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextDay:"[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextWeek:"dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastDay:"[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastWeek:"dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",sameElse:"L"},relativeTime:{future:"\u0641\u064a %s",past:"\u0645\u0646\u0630 %s",s:"\u062b\u0648\u0627\u0646",m:"\u062f\u0642\u064a\u0642\u0629",mm:"%d \u062f\u0642\u0627\u0626\u0642",h:"\u0633\u0627\u0639\u0629",hh:"%d \u0633\u0627\u0639\u0627\u062a",d:"\u064a\u0648\u0645",dd:"%d \u0623\u064a\u0627\u0645",M:"\u0634\u0647\u0631",MM:"%d \u0623\u0634\u0647\u0631",y:"\u0633\u0646\u0629",yy:"%d \u0633\u0646\u0648\u0627\u062a"},week:{dow:0,doy:12}});var Ys={1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",0:"0"},ys=function(e){return 0===e?0:1===e?1:2===e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5},fs={s:["\u0623\u0642\u0644 \u0645\u0646 \u062b\u0627\u0646\u064a\u0629","\u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u062d\u062f\u0629",["\u062b\u0627\u0646\u064a\u062a\u0627\u0646","\u062b\u0627\u0646\u064a\u062a\u064a\u0646"],"%d \u062b\u0648\u0627\u0646","%d \u062b\u0627\u0646\u064a\u0629","%d \u062b\u0627\u0646\u064a\u0629"],m:["\u0623\u0642\u0644 \u0645\u0646 \u062f\u0642\u064a\u0642\u0629","\u062f\u0642\u064a\u0642\u0629 \u0648\u0627\u062d\u062f\u0629",["\u062f\u0642\u064a\u0642\u062a\u0627\u0646","\u062f\u0642\u064a\u0642\u062a\u064a\u0646"],"%d \u062f\u0642\u0627\u0626\u0642","%d \u062f\u0642\u064a\u0642\u0629","%d \u062f\u0642\u064a\u0642\u0629"],h:["\u0623\u0642\u0644 \u0645\u0646 \u0633\u0627\u0639\u0629","\u0633\u0627\u0639\u0629 \u0648\u0627\u062d\u062f\u0629",["\u0633\u0627\u0639\u062a\u0627\u0646","\u0633\u0627\u0639\u062a\u064a\u0646"],"%d \u0633\u0627\u0639\u0627\u062a","%d \u0633\u0627\u0639\u0629","%d \u0633\u0627\u0639\u0629"],d:["\u0623\u0642\u0644 \u0645\u0646 \u064a\u0648\u0645","\u064a\u0648\u0645 \u0648\u0627\u062d\u062f",["\u064a\u0648\u0645\u0627\u0646","\u064a\u0648\u0645\u064a\u0646"],"%d \u0623\u064a\u0627\u0645","%d \u064a\u0648\u0645\u064b\u0627","%d \u064a\u0648\u0645"],M:["\u0623\u0642\u0644 \u0645\u0646 \u0634\u0647\u0631","\u0634\u0647\u0631 \u0648\u0627\u062d\u062f",["\u0634\u0647\u0631\u0627\u0646","\u0634\u0647\u0631\u064a\u0646"],"%d \u0623\u0634\u0647\u0631","%d \u0634\u0647\u0631\u0627","%d \u0634\u0647\u0631"],y:["\u0623\u0642\u0644 \u0645\u0646 \u0639\u0627\u0645","\u0639\u0627\u0645 \u0648\u0627\u062d\u062f",["\u0639\u0627\u0645\u0627\u0646","\u0639\u0627\u0645\u064a\u0646"],"%d \u0623\u0639\u0648\u0627\u0645","%d \u0639\u0627\u0645\u064b\u0627","%d \u0639\u0627\u0645"]},ps=function(e){return function(a,t,n,s){var r=ys(a),d=fs[e][ys(a)];return 2===r&&(d=d[t?0:1]),d.replace(/%d/i,a)}},ks=["\u064a\u0646\u0627\u064a\u0631","\u0641\u0628\u0631\u0627\u064a\u0631","\u0645\u0627\u0631\u0633","\u0623\u0628\u0631\u064a\u0644","\u0645\u0627\u064a\u0648","\u064a\u0648\u0646\u064a\u0648","\u064a\u0648\u0644\u064a\u0648","\u0623\u063a\u0633\u0637\u0633","\u0633\u0628\u062a\u0645\u0628\u0631","\u0623\u0643\u062a\u0648\u0628\u0631","\u0646\u0648\u0641\u0645\u0628\u0631","\u062f\u064a\u0633\u0645\u0628\u0631"];e.defineLocale("ar-ly",{months:ks,monthsShort:ks,weekdays:"\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),weekdaysShort:"\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),weekdaysMin:"\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/\u200fM/\u200fYYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/\u0635|\u0645/,isPM:function(e){return"\u0645"===e},meridiem:function(e,a,t){return e<12?"\u0635":"\u0645"},calendar:{sameDay:"[\u0627\u0644\u064a\u0648\u0645 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextDay:"[\u063a\u062f\u064b\u0627 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextWeek:"dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastDay:"[\u0623\u0645\u0633 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastWeek:"dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",sameElse:"L"},relativeTime:{future:"\u0628\u0639\u062f %s",past:"\u0645\u0646\u0630 %s",s:ps("s"),m:ps("m"),mm:ps("m"),h:ps("h"),hh:ps("h"),d:ps("d"),dd:ps("d"),M:ps("M"),MM:ps("M"),y:ps("y"),yy:ps("y")},preparse:function(e){return e.replace(/\u060c/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return Ys[e]}).replace(/,/g,"\u060c")},week:{dow:6,doy:12}}),e.defineLocale("ar-ma",{months:"\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split("_"),monthsShort:"\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648\u0632_\u063a\u0634\u062a_\u0634\u062a\u0646\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0646\u0628\u0631_\u062f\u062c\u0646\u0628\u0631".split("_"),weekdays:"\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062a\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),weekdaysShort:"\u0627\u062d\u062f_\u0627\u062a\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),weekdaysMin:"\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextDay:"[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextWeek:"dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastDay:"[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastWeek:"dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",sameElse:"L"},relativeTime:{future:"\u0641\u064a %s",past:"\u0645\u0646\u0630 %s",s:"\u062b\u0648\u0627\u0646",m:"\u062f\u0642\u064a\u0642\u0629",mm:"%d \u062f\u0642\u0627\u0626\u0642",h:"\u0633\u0627\u0639\u0629",hh:"%d \u0633\u0627\u0639\u0627\u062a",d:"\u064a\u0648\u0645",dd:"%d \u0623\u064a\u0627\u0645",M:"\u0634\u0647\u0631",MM:"%d \u0623\u0634\u0647\u0631",y:"\u0633\u0646\u0629",yy:"%d \u0633\u0646\u0648\u0627\u062a"},week:{dow:6,doy:12}});var Ds={1:"\u0661",2:"\u0662",3:"\u0663",4:"\u0664",5:"\u0665",6:"\u0666",7:"\u0667",8:"\u0668",9:"\u0669",0:"\u0660"},Ts={"\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u0660":"0"};e.defineLocale("ar-sa",{months:"\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a\u0648_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648_\u0623\u063a\u0633\u0637\u0633_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"),monthsShort:"\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a\u0648_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648_\u0623\u063a\u0633\u0637\u0633_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"),weekdays:"\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),weekdaysShort:"\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),weekdaysMin:"\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/\u0635|\u0645/,isPM:function(e){return"\u0645"===e},meridiem:function(e,a,t){return e<12?"\u0635":"\u0645"},calendar:{sameDay:"[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextDay:"[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextWeek:"dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastDay:"[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastWeek:"dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",sameElse:"L"},relativeTime:{future:"\u0641\u064a %s",past:"\u0645\u0646\u0630 %s",s:"\u062b\u0648\u0627\u0646",m:"\u062f\u0642\u064a\u0642\u0629",mm:"%d \u062f\u0642\u0627\u0626\u0642",h:"\u0633\u0627\u0639\u0629",hh:"%d \u0633\u0627\u0639\u0627\u062a",d:"\u064a\u0648\u0645",dd:"%d \u0623\u064a\u0627\u0645",M:"\u0634\u0647\u0631",MM:"%d \u0623\u0634\u0647\u0631",y:"\u0633\u0646\u0629",yy:"%d \u0633\u0646\u0648\u0627\u062a"},preparse:function(e){return e.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g,function(e){return Ts[e]}).replace(/\u060c/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return Ds[e]}).replace(/,/g,"\u060c")},week:{dow:0,doy:6}}),e.defineLocale("ar-tn",{months:"\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"),monthsShort:"\u062c\u0627\u0646\u0641\u064a_\u0641\u064a\u0641\u0631\u064a_\u0645\u0627\u0631\u0633_\u0623\u0641\u0631\u064a\u0644_\u0645\u0627\u064a_\u062c\u0648\u0627\u0646_\u062c\u0648\u064a\u0644\u064a\u0629_\u0623\u0648\u062a_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"),weekdays:"\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),weekdaysShort:"\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),weekdaysMin:"\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[\u0627\u0644\u064a\u0648\u0645 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextDay:"[\u063a\u062f\u0627 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextWeek:"dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastDay:"[\u0623\u0645\u0633 \u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastWeek:"dddd [\u0639\u0644\u0649 \u0627\u0644\u0633\u0627\u0639\u0629] LT",sameElse:"L"},relativeTime:{future:"\u0641\u064a %s",past:"\u0645\u0646\u0630 %s",s:"\u062b\u0648\u0627\u0646",m:"\u062f\u0642\u064a\u0642\u0629",mm:"%d \u062f\u0642\u0627\u0626\u0642",h:"\u0633\u0627\u0639\u0629",hh:"%d \u0633\u0627\u0639\u0627\u062a",d:"\u064a\u0648\u0645",dd:"%d \u0623\u064a\u0627\u0645",M:"\u0634\u0647\u0631",MM:"%d \u0623\u0634\u0647\u0631",y:"\u0633\u0646\u0629",yy:"%d \u0633\u0646\u0648\u0627\u062a"},week:{dow:1,doy:4}});var gs={1:"\u0661",2:"\u0662",3:"\u0663",4:"\u0664",5:"\u0665",6:"\u0666",7:"\u0667",8:"\u0668",9:"\u0669",0:"\u0660"},ws={"\u0661":"1","\u0662":"2","\u0663":"3","\u0664":"4","\u0665":"5","\u0666":"6","\u0667":"7","\u0668":"8","\u0669":"9","\u0660":"0"},vs=function(e){return 0===e?0:1===e?1:2===e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5},Ss={s:["\u0623\u0642\u0644 \u0645\u0646 \u062b\u0627\u0646\u064a\u0629","\u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u062d\u062f\u0629",["\u062b\u0627\u0646\u064a\u062a\u0627\u0646","\u062b\u0627\u0646\u064a\u062a\u064a\u0646"],"%d \u062b\u0648\u0627\u0646","%d \u062b\u0627\u0646\u064a\u0629","%d \u062b\u0627\u0646\u064a\u0629"],m:["\u0623\u0642\u0644 \u0645\u0646 \u062f\u0642\u064a\u0642\u0629","\u062f\u0642\u064a\u0642\u0629 \u0648\u0627\u062d\u062f\u0629",["\u062f\u0642\u064a\u0642\u062a\u0627\u0646","\u062f\u0642\u064a\u0642\u062a\u064a\u0646"],"%d \u062f\u0642\u0627\u0626\u0642","%d \u062f\u0642\u064a\u0642\u0629","%d \u062f\u0642\u064a\u0642\u0629"],h:["\u0623\u0642\u0644 \u0645\u0646 \u0633\u0627\u0639\u0629","\u0633\u0627\u0639\u0629 \u0648\u0627\u062d\u062f\u0629",["\u0633\u0627\u0639\u062a\u0627\u0646","\u0633\u0627\u0639\u062a\u064a\u0646"],"%d \u0633\u0627\u0639\u0627\u062a","%d \u0633\u0627\u0639\u0629","%d \u0633\u0627\u0639\u0629"],d:["\u0623\u0642\u0644 \u0645\u0646 \u064a\u0648\u0645","\u064a\u0648\u0645 \u0648\u0627\u062d\u062f",["\u064a\u0648\u0645\u0627\u0646","\u064a\u0648\u0645\u064a\u0646"],"%d \u0623\u064a\u0627\u0645","%d \u064a\u0648\u0645\u064b\u0627","%d \u064a\u0648\u0645"],M:["\u0623\u0642\u0644 \u0645\u0646 \u0634\u0647\u0631","\u0634\u0647\u0631 \u0648\u0627\u062d\u062f",["\u0634\u0647\u0631\u0627\u0646","\u0634\u0647\u0631\u064a\u0646"],"%d \u0623\u0634\u0647\u0631","%d \u0634\u0647\u0631\u0627","%d \u0634\u0647\u0631"],y:["\u0623\u0642\u0644 \u0645\u0646 \u0639\u0627\u0645","\u0639\u0627\u0645 \u0648\u0627\u062d\u062f",["\u0639\u0627\u0645\u0627\u0646","\u0639\u0627\u0645\u064a\u0646"],"%d \u0623\u0639\u0648\u0627\u0645","%d \u0639\u0627\u0645\u064b\u0627","%d \u0639\u0627\u0645"]},Hs=function(e){return function(a,t,n,s){var r=vs(a),d=Ss[e][vs(a)];return 2===r&&(d=d[t?0:1]),d.replace(/%d/i,a)}},bs=["\u0643\u0627\u0646\u0648\u0646 \u0627\u0644\u062b\u0627\u0646\u064a \u064a\u0646\u0627\u064a\u0631","\u0634\u0628\u0627\u0637 \u0641\u0628\u0631\u0627\u064a\u0631","\u0622\u0630\u0627\u0631 \u0645\u0627\u0631\u0633","\u0646\u064a\u0633\u0627\u0646 \u0623\u0628\u0631\u064a\u0644","\u0623\u064a\u0627\u0631 \u0645\u0627\u064a\u0648","\u062d\u0632\u064a\u0631\u0627\u0646 \u064a\u0648\u0646\u064a\u0648","\u062a\u0645\u0648\u0632 \u064a\u0648\u0644\u064a\u0648","\u0622\u0628 \u0623\u063a\u0633\u0637\u0633","\u0623\u064a\u0644\u0648\u0644 \u0633\u0628\u062a\u0645\u0628\u0631","\u062a\u0634\u0631\u064a\u0646 \u0627\u0644\u0623\u0648\u0644 \u0623\u0643\u062a\u0648\u0628\u0631","\u062a\u0634\u0631\u064a\u0646 \u0627\u0644\u062b\u0627\u0646\u064a \u0646\u0648\u0641\u0645\u0628\u0631","\u0643\u0627\u0646\u0648\u0646 \u0627\u0644\u0623\u0648\u0644 \u062f\u064a\u0633\u0645\u0628\u0631"];e.defineLocale("ar",{months:bs,monthsShort:bs,weekdays:"\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),weekdaysShort:"\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),weekdaysMin:"\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/\u200fM/\u200fYYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/\u0635|\u0645/,isPM:function(e){return"\u0645"===e},meridiem:function(e,a,t){return e<12?"\u0635":"\u0645"},calendar:{sameDay:"[\u0627\u0644\u064a\u0648\u0645 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextDay:"[\u063a\u062f\u064b\u0627 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",nextWeek:"dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastDay:"[\u0623\u0645\u0633 \u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",lastWeek:"dddd [\u0639\u0646\u062f \u0627\u0644\u0633\u0627\u0639\u0629] LT",sameElse:"L"},relativeTime:{future:"\u0628\u0639\u062f %s",past:"\u0645\u0646\u0630 %s",s:Hs("s"),m:Hs("m"),mm:Hs("m"),h:Hs("h"),hh:Hs("h"),d:Hs("d"),dd:Hs("d"),M:Hs("M"),MM:Hs("M"),y:Hs("y"),yy:Hs("y")},preparse:function(e){return e.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g,function(e){return ws[e]}).replace(/\u060c/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return gs[e]}).replace(/,/g,"\u060c")},week:{dow:6,doy:12}});var js={1:"-inci",5:"-inci",8:"-inci",70:"-inci",80:"-inci",2:"-nci",7:"-nci",20:"-nci",50:"-nci",3:"-\xfcnc\xfc",4:"-\xfcnc\xfc",100:"-\xfcnc\xfc",6:"-nc\u0131",9:"-uncu",10:"-uncu",30:"-uncu",60:"-\u0131nc\u0131",90:"-\u0131nc\u0131"};e.defineLocale("az",{months:"yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),monthsShort:"yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),weekdays:"Bazar_Bazar ert\u0259si_\xc7\u0259r\u015f\u0259nb\u0259 ax\u015fam\u0131_\xc7\u0259r\u015f\u0259nb\u0259_C\xfcm\u0259 ax\u015fam\u0131_C\xfcm\u0259_\u015e\u0259nb\u0259".split("_"),weekdaysShort:"Baz_BzE_\xc7Ax_\xc7\u0259r_CAx_C\xfcm_\u015e\u0259n".split("_"),weekdaysMin:"Bz_BE_\xc7A_\xc7\u0259_CA_C\xfc_\u015e\u0259".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[bug\xfcn saat] LT",nextDay:"[sabah saat] LT",nextWeek:"[g\u0259l\u0259n h\u0259ft\u0259] dddd [saat] LT",lastDay:"[d\xfcn\u0259n] LT",lastWeek:"[ke\xe7\u0259n h\u0259ft\u0259] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s \u0259vv\u0259l",s:"birne\xe7\u0259 saniyy\u0259",m:"bir d\u0259qiq\u0259",mm:"%d d\u0259qiq\u0259",h:"bir saat",hh:"%d saat",d:"bir g\xfcn",dd:"%d g\xfcn",M:"bir ay",MM:"%d ay",y:"bir il",yy:"%d il"},meridiemParse:/gec\u0259|s\u0259h\u0259r|g\xfcnd\xfcz|ax\u015fam/,isPM:function(e){return/^(g\xfcnd\xfcz|ax\u015fam)$/.test(e)},meridiem:function(e,a,t){return e<4?"gec\u0259":e<12?"s\u0259h\u0259r":e<17?"g\xfcnd\xfcz":"ax\u015fam"},dayOfMonthOrdinalParse:/\d{1,2}-(\u0131nc\u0131|inci|nci|\xfcnc\xfc|nc\u0131|uncu)/,ordinal:function(e){if(0===e)return e+"-\u0131nc\u0131";var a=e%10,t=e%100-a,n=e>=100?100:null;return e+(js[a]||js[t]||js[n])},week:{dow:1,doy:7}}),e.defineLocale("be",{months:{format:"\u0441\u0442\u0443\u0434\u0437\u0435\u043d\u044f_\u043b\u044e\u0442\u0430\u0433\u0430_\u0441\u0430\u043a\u0430\u0432\u0456\u043a\u0430_\u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a\u0430_\u0442\u0440\u0430\u045e\u043d\u044f_\u0447\u044d\u0440\u0432\u0435\u043d\u044f_\u043b\u0456\u043f\u0435\u043d\u044f_\u0436\u043d\u0456\u045e\u043d\u044f_\u0432\u0435\u0440\u0430\u0441\u043d\u044f_\u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a\u0430_\u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434\u0430_\u0441\u043d\u0435\u0436\u043d\u044f".split("_"),standalone:"\u0441\u0442\u0443\u0434\u0437\u0435\u043d\u044c_\u043b\u044e\u0442\u044b_\u0441\u0430\u043a\u0430\u0432\u0456\u043a_\u043a\u0440\u0430\u0441\u0430\u0432\u0456\u043a_\u0442\u0440\u0430\u0432\u0435\u043d\u044c_\u0447\u044d\u0440\u0432\u0435\u043d\u044c_\u043b\u0456\u043f\u0435\u043d\u044c_\u0436\u043d\u0456\u0432\u0435\u043d\u044c_\u0432\u0435\u0440\u0430\u0441\u0435\u043d\u044c_\u043a\u0430\u0441\u0442\u0440\u044b\u0447\u043d\u0456\u043a_\u043b\u0456\u0441\u0442\u0430\u043f\u0430\u0434_\u0441\u043d\u0435\u0436\u0430\u043d\u044c".split("_")},monthsShort:"\u0441\u0442\u0443\u0434_\u043b\u044e\u0442_\u0441\u0430\u043a_\u043a\u0440\u0430\u0441_\u0442\u0440\u0430\u0432_\u0447\u044d\u0440\u0432_\u043b\u0456\u043f_\u0436\u043d\u0456\u0432_\u0432\u0435\u0440_\u043a\u0430\u0441\u0442_\u043b\u0456\u0441\u0442_\u0441\u043d\u0435\u0436".split("_"),weekdays:{format:"\u043d\u044f\u0434\u0437\u0435\u043b\u044e_\u043f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a_\u0430\u045e\u0442\u043e\u0440\u0430\u043a_\u0441\u0435\u0440\u0430\u0434\u0443_\u0447\u0430\u0446\u0432\u0435\u0440_\u043f\u044f\u0442\u043d\u0456\u0446\u0443_\u0441\u0443\u0431\u043e\u0442\u0443".split("_"),standalone:"\u043d\u044f\u0434\u0437\u0435\u043b\u044f_\u043f\u0430\u043d\u044f\u0434\u0437\u0435\u043b\u0430\u043a_\u0430\u045e\u0442\u043e\u0440\u0430\u043a_\u0441\u0435\u0440\u0430\u0434\u0430_\u0447\u0430\u0446\u0432\u0435\u0440_\u043f\u044f\u0442\u043d\u0456\u0446\u0430_\u0441\u0443\u0431\u043e\u0442\u0430".split("_"),isFormat:/\[ ?[\u0412\u0432] ?(?:\u043c\u0456\u043d\u0443\u043b\u0443\u044e|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0443\u044e)? ?\] ?dddd/},weekdaysShort:"\u043d\u0434_\u043f\u043d_\u0430\u0442_\u0441\u0440_\u0447\u0446_\u043f\u0442_\u0441\u0431".split("_"),weekdaysMin:"\u043d\u0434_\u043f\u043d_\u0430\u0442_\u0441\u0440_\u0447\u0446_\u043f\u0442_\u0441\u0431".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY \u0433.",LLL:"D MMMM YYYY \u0433., HH:mm",LLLL:"dddd, D MMMM YYYY \u0433., HH:mm"},calendar:{sameDay:"[\u0421\u0451\u043d\u043d\u044f \u045e] LT",nextDay:"[\u0417\u0430\u045e\u0442\u0440\u0430 \u045e] LT",lastDay:"[\u0423\u0447\u043e\u0440\u0430 \u045e] LT",nextWeek:function(){return"[\u0423] dddd [\u045e] LT"},lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return"[\u0423 \u043c\u0456\u043d\u0443\u043b\u0443\u044e] dddd [\u045e] LT";case 1:case 2:case 4:return"[\u0423 \u043c\u0456\u043d\u0443\u043b\u044b] dddd [\u045e] LT"}},sameElse:"L"},relativeTime:{future:"\u043f\u0440\u0430\u0437 %s",past:"%s \u0442\u0430\u043c\u0443",s:"\u043d\u0435\u043a\u0430\u043b\u044c\u043a\u0456 \u0441\u0435\u043a\u0443\u043d\u0434",m:va,mm:va,h:va,hh:va,d:"\u0434\u0437\u0435\u043d\u044c",dd:va,M:"\u043c\u0435\u0441\u044f\u0446",MM:va,y:"\u0433\u043e\u0434",yy:va},meridiemParse:/\u043d\u043e\u0447\u044b|\u0440\u0430\u043d\u0456\u0446\u044b|\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430/,isPM:function(e){return/^(\u0434\u043d\u044f|\u0432\u0435\u0447\u0430\u0440\u0430)$/.test(e)},meridiem:function(e,a,t){return e<4?"\u043d\u043e\u0447\u044b":e<12?"\u0440\u0430\u043d\u0456\u0446\u044b":e<17?"\u0434\u043d\u044f":"\u0432\u0435\u0447\u0430\u0440\u0430"},dayOfMonthOrdinalParse:/\d{1,2}-(\u0456|\u044b|\u0433\u0430)/,ordinal:function(e,a){switch(a){case"M":case"d":case"DDD":case"w":case"W":return e%10!=2&&e%10!=3||e%100==12||e%100==13?e+"-\u044b":e+"-\u0456";case"D":return e+"-\u0433\u0430";default:return e}},week:{dow:1,doy:7}}),e.defineLocale("bg",{months:"\u044f\u043d\u0443\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0438\u043b_\u043c\u0430\u0439_\u044e\u043d\u0438_\u044e\u043b\u0438_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438_\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438_\u043d\u043e\u0435\u043c\u0432\u0440\u0438_\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438".split("_"),monthsShort:"\u044f\u043d\u0440_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0439_\u044e\u043d\u0438_\u044e\u043b\u0438_\u0430\u0432\u0433_\u0441\u0435\u043f_\u043e\u043a\u0442_\u043d\u043e\u0435_\u0434\u0435\u043a".split("_"),weekdays:"\u043d\u0435\u0434\u0435\u043b\u044f_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u044f\u0434\u0430_\u0447\u0435\u0442\u0432\u044a\u0440\u0442\u044a\u043a_\u043f\u0435\u0442\u044a\u043a_\u0441\u044a\u0431\u043e\u0442\u0430".split("_"),weekdaysShort:"\u043d\u0435\u0434_\u043f\u043e\u043d_\u0432\u0442\u043e_\u0441\u0440\u044f_\u0447\u0435\u0442_\u043f\u0435\u0442_\u0441\u044a\u0431".split("_"),weekdaysMin:"\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[\u0414\u043d\u0435\u0441 \u0432] LT",nextDay:"[\u0423\u0442\u0440\u0435 \u0432] LT",nextWeek:"dddd [\u0432] LT",lastDay:"[\u0412\u0447\u0435\u0440\u0430 \u0432] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[\u0412 \u0438\u0437\u043c\u0438\u043d\u0430\u043b\u0430\u0442\u0430] dddd [\u0432] LT";case 1:case 2:case 4:case 5:return"[\u0412 \u0438\u0437\u043c\u0438\u043d\u0430\u043b\u0438\u044f] dddd [\u0432] LT"}},sameElse:"L"},relativeTime:{future:"\u0441\u043b\u0435\u0434 %s",past:"\u043f\u0440\u0435\u0434\u0438 %s",s:"\u043d\u044f\u043a\u043e\u043b\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434\u0438",m:"\u043c\u0438\u043d\u0443\u0442\u0430",mm:"%d \u043c\u0438\u043d\u0443\u0442\u0438",h:"\u0447\u0430\u0441",hh:"%d \u0447\u0430\u0441\u0430",d:"\u0434\u0435\u043d",dd:"%d \u0434\u043d\u0438",M:"\u043c\u0435\u0441\u0435\u0446",MM:"%d \u043c\u0435\u0441\u0435\u0446\u0430",y:"\u0433\u043e\u0434\u0438\u043d\u0430",yy:"%d \u0433\u043e\u0434\u0438\u043d\u0438"},dayOfMonthOrdinalParse:/\d{1,2}-(\u0435\u0432|\u0435\u043d|\u0442\u0438|\u0432\u0438|\u0440\u0438|\u043c\u0438)/,ordinal:function(e){var a=e%10,t=e%100;return 0===e?e+"-\u0435\u0432":0===t?e+"-\u0435\u043d":t>10&&t<20?e+"-\u0442\u0438":1===a?e+"-\u0432\u0438":2===a?e+"-\u0440\u0438":7===a||8===a?e+"-\u043c\u0438":e+"-\u0442\u0438"},week:{dow:1,doy:7}}),e.defineLocale("bm",{months:"Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_M\u025bkalo_Zuw\u025bnkalo_Zuluyekalo_Utikalo_S\u025btanburukalo_\u0254kut\u0254burukalo_Nowanburukalo_Desanburukalo".split("_"),monthsShort:"Zan_Few_Mar_Awi_M\u025b_Zuw_Zul_Uti_S\u025bt_\u0254ku_Now_Des".split("_"),weekdays:"Kari_Nt\u025bn\u025bn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),weekdaysShort:"Kar_Nt\u025b_Tar_Ara_Ala_Jum_Sib".split("_"),weekdaysMin:"Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"MMMM [tile] D [san] YYYY",LLL:"MMMM [tile] D [san] YYYY [l\u025br\u025b] HH:mm",LLLL:"dddd MMMM [tile] D [san] YYYY [l\u025br\u025b] HH:mm"},calendar:{sameDay:"[Bi l\u025br\u025b] LT",nextDay:"[Sini l\u025br\u025b] LT",nextWeek:"dddd [don l\u025br\u025b] LT",lastDay:"[Kunu l\u025br\u025b] LT",lastWeek:"dddd [t\u025bm\u025bnen l\u025br\u025b] LT",sameElse:"L"},relativeTime:{future:"%s k\u0254n\u0254",past:"a b\u025b %s b\u0254",s:"sanga dama dama",m:"miniti kelen",mm:"miniti %d",h:"l\u025br\u025b kelen",hh:"l\u025br\u025b %d",d:"tile kelen",dd:"tile %d",M:"kalo kelen",MM:"kalo %d",y:"san kelen",yy:"san %d"},week:{dow:1,doy:4}});var xs={1:"\u09e7",2:"\u09e8",3:"\u09e9",4:"\u09ea",5:"\u09eb",6:"\u09ec",7:"\u09ed",8:"\u09ee",9:"\u09ef",0:"\u09e6"},Ps={"\u09e7":"1","\u09e8":"2","\u09e9":"3","\u09ea":"4","\u09eb":"5","\u09ec":"6","\u09ed":"7","\u09ee":"8","\u09ef":"9","\u09e6":"0"};e.defineLocale("bn",{months:"\u099c\u09be\u09a8\u09c1\u09df\u09be\u09b0\u09c0_\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09df\u09be\u09b0\u09bf_\u09ae\u09be\u09b0\u09cd\u099a_\u098f\u09aa\u09cd\u09b0\u09bf\u09b2_\u09ae\u09c7_\u099c\u09c1\u09a8_\u099c\u09c1\u09b2\u09be\u0987_\u0986\u0997\u09b8\u09cd\u099f_\u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0_\u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0_\u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0_\u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0".split("_"),monthsShort:"\u099c\u09be\u09a8\u09c1_\u09ab\u09c7\u09ac_\u09ae\u09be\u09b0\u09cd\u099a_\u098f\u09aa\u09cd\u09b0_\u09ae\u09c7_\u099c\u09c1\u09a8_\u099c\u09c1\u09b2_\u0986\u0997_\u09b8\u09c7\u09aa\u09cd\u099f_\u0985\u0995\u09cd\u099f\u09cb_\u09a8\u09ad\u09c7_\u09a1\u09bf\u09b8\u09c7".split("_"),weekdays:"\u09b0\u09ac\u09bf\u09ac\u09be\u09b0_\u09b8\u09cb\u09ae\u09ac\u09be\u09b0_\u09ae\u0999\u09cd\u0997\u09b2\u09ac\u09be\u09b0_\u09ac\u09c1\u09a7\u09ac\u09be\u09b0_\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf\u09ac\u09be\u09b0_\u09b6\u09c1\u0995\u09cd\u09b0\u09ac\u09be\u09b0_\u09b6\u09a8\u09bf\u09ac\u09be\u09b0".split("_"),weekdaysShort:"\u09b0\u09ac\u09bf_\u09b8\u09cb\u09ae_\u09ae\u0999\u09cd\u0997\u09b2_\u09ac\u09c1\u09a7_\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf_\u09b6\u09c1\u0995\u09cd\u09b0_\u09b6\u09a8\u09bf".split("_"),weekdaysMin:"\u09b0\u09ac\u09bf_\u09b8\u09cb\u09ae_\u09ae\u0999\u09cd\u0997_\u09ac\u09c1\u09a7_\u09ac\u09c3\u09b9\u0983_\u09b6\u09c1\u0995\u09cd\u09b0_\u09b6\u09a8\u09bf".split("_"),longDateFormat:{LT:"A h:mm \u09b8\u09ae\u09df",LTS:"A h:mm:ss \u09b8\u09ae\u09df",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm \u09b8\u09ae\u09df",LLLL:"dddd, D MMMM YYYY, A h:mm \u09b8\u09ae\u09df"},calendar:{sameDay:"[\u0986\u099c] LT",nextDay:"[\u0986\u0997\u09be\u09ae\u09c0\u0995\u09be\u09b2] LT",nextWeek:"dddd, LT",lastDay:"[\u0997\u09a4\u0995\u09be\u09b2] LT",lastWeek:"[\u0997\u09a4] dddd, LT",sameElse:"L"},relativeTime:{future:"%s \u09aa\u09b0\u09c7",past:"%s \u0986\u0997\u09c7",s:"\u0995\u09df\u09c7\u0995 \u09b8\u09c7\u0995\u09c7\u09a8\u09cd\u09a1",m:"\u098f\u0995 \u09ae\u09bf\u09a8\u09bf\u099f",mm:"%d \u09ae\u09bf\u09a8\u09bf\u099f",h:"\u098f\u0995 \u0998\u09a8\u09cd\u099f\u09be",hh:"%d \u0998\u09a8\u09cd\u099f\u09be",d:"\u098f\u0995 \u09a6\u09bf\u09a8",dd:"%d \u09a6\u09bf\u09a8",M:"\u098f\u0995 \u09ae\u09be\u09b8",MM:"%d \u09ae\u09be\u09b8",y:"\u098f\u0995 \u09ac\u099b\u09b0",yy:"%d \u09ac\u099b\u09b0"},preparse:function(e){return e.replace(/[\u09e7\u09e8\u09e9\u09ea\u09eb\u09ec\u09ed\u09ee\u09ef\u09e6]/g,function(e){return Ps[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return xs[e]})},meridiemParse:/\u09b0\u09be\u09a4|\u09b8\u0995\u09be\u09b2|\u09a6\u09c1\u09aa\u09c1\u09b0|\u09ac\u09bf\u0995\u09be\u09b2|\u09b0\u09be\u09a4/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u09b0\u09be\u09a4"===a&&e>=4||"\u09a6\u09c1\u09aa\u09c1\u09b0"===a&&e<5||"\u09ac\u09bf\u0995\u09be\u09b2"===a?e+12:e},meridiem:function(e,a,t){return e<4?"\u09b0\u09be\u09a4":e<10?"\u09b8\u0995\u09be\u09b2":e<17?"\u09a6\u09c1\u09aa\u09c1\u09b0":e<20?"\u09ac\u09bf\u0995\u09be\u09b2":"\u09b0\u09be\u09a4"},week:{dow:0,doy:6}});var Os={1:"\u0f21",2:"\u0f22",3:"\u0f23",4:"\u0f24",5:"\u0f25",6:"\u0f26",7:"\u0f27",8:"\u0f28",9:"\u0f29",0:"\u0f20"},Ws={"\u0f21":"1","\u0f22":"2","\u0f23":"3","\u0f24":"4","\u0f25":"5","\u0f26":"6","\u0f27":"7","\u0f28":"8","\u0f29":"9","\u0f20":"0"};e.defineLocale("bo",{months:"\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f44\u0f0b\u0f54\u0f7c_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f66\u0f74\u0f58\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f5e\u0f72\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f63\u0f94\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0fb2\u0f74\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f62\u0f92\u0fb1\u0f51\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f42\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f45\u0f72\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54".split("_"),monthsShort:"\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f44\u0f0b\u0f54\u0f7c_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f66\u0f74\u0f58\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f5e\u0f72\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f63\u0f94\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0fb2\u0f74\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f62\u0f92\u0fb1\u0f51\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f51\u0f42\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f45\u0f72\u0f42\u0f0b\u0f54_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f56\u0f45\u0f74\u0f0b\u0f42\u0f49\u0f72\u0f66\u0f0b\u0f54".split("_"),weekdays:"\u0f42\u0f5f\u0f60\u0f0b\u0f49\u0f72\u0f0b\u0f58\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f5f\u0fb3\u0f0b\u0f56\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f58\u0f72\u0f42\u0f0b\u0f51\u0f58\u0f62\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f63\u0fb7\u0f42\u0f0b\u0f54\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f55\u0f74\u0f62\u0f0b\u0f56\u0f74_\u0f42\u0f5f\u0f60\u0f0b\u0f54\u0f0b\u0f66\u0f44\u0f66\u0f0b_\u0f42\u0f5f\u0f60\u0f0b\u0f66\u0fa4\u0f7a\u0f53\u0f0b\u0f54\u0f0b".split("_"),weekdaysShort:"\u0f49\u0f72\u0f0b\u0f58\u0f0b_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b_\u0f58\u0f72\u0f42\u0f0b\u0f51\u0f58\u0f62\u0f0b_\u0f63\u0fb7\u0f42\u0f0b\u0f54\u0f0b_\u0f55\u0f74\u0f62\u0f0b\u0f56\u0f74_\u0f54\u0f0b\u0f66\u0f44\u0f66\u0f0b_\u0f66\u0fa4\u0f7a\u0f53\u0f0b\u0f54\u0f0b".split("_"),weekdaysMin:"\u0f49\u0f72\u0f0b\u0f58\u0f0b_\u0f5f\u0fb3\u0f0b\u0f56\u0f0b_\u0f58\u0f72\u0f42\u0f0b\u0f51\u0f58\u0f62\u0f0b_\u0f63\u0fb7\u0f42\u0f0b\u0f54\u0f0b_\u0f55\u0f74\u0f62\u0f0b\u0f56\u0f74_\u0f54\u0f0b\u0f66\u0f44\u0f66\u0f0b_\u0f66\u0fa4\u0f7a\u0f53\u0f0b\u0f54\u0f0b".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[\u0f51\u0f72\u0f0b\u0f62\u0f72\u0f44] LT",nextDay:"[\u0f66\u0f44\u0f0b\u0f49\u0f72\u0f53] LT",nextWeek:"[\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f55\u0fb2\u0f42\u0f0b\u0f62\u0f97\u0f7a\u0f66\u0f0b\u0f58], LT",lastDay:"[\u0f41\u0f0b\u0f66\u0f44] LT",lastWeek:"[\u0f56\u0f51\u0f74\u0f53\u0f0b\u0f55\u0fb2\u0f42\u0f0b\u0f58\u0f50\u0f60\u0f0b\u0f58] dddd, LT",sameElse:"L"},relativeTime:{future:"%s \u0f63\u0f0b",past:"%s \u0f66\u0f94\u0f53\u0f0b\u0f63",s:"\u0f63\u0f58\u0f0b\u0f66\u0f44",m:"\u0f66\u0f90\u0f62\u0f0b\u0f58\u0f0b\u0f42\u0f45\u0f72\u0f42",mm:"%d \u0f66\u0f90\u0f62\u0f0b\u0f58",h:"\u0f46\u0f74\u0f0b\u0f5a\u0f7c\u0f51\u0f0b\u0f42\u0f45\u0f72\u0f42",hh:"%d \u0f46\u0f74\u0f0b\u0f5a\u0f7c\u0f51",d:"\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f45\u0f72\u0f42",dd:"%d \u0f49\u0f72\u0f53\u0f0b",M:"\u0f5f\u0fb3\u0f0b\u0f56\u0f0b\u0f42\u0f45\u0f72\u0f42",MM:"%d \u0f5f\u0fb3\u0f0b\u0f56",y:"\u0f63\u0f7c\u0f0b\u0f42\u0f45\u0f72\u0f42",yy:"%d \u0f63\u0f7c"},preparse:function(e){return e.replace(/[\u0f21\u0f22\u0f23\u0f24\u0f25\u0f26\u0f27\u0f28\u0f29\u0f20]/g,function(e){return Ws[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return Os[e]})},meridiemParse:/\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c|\u0f5e\u0f7c\u0f42\u0f66\u0f0b\u0f40\u0f66|\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44|\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42|\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c"===a&&e>=4||"\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44"===a&&e<5||"\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42"===a?e+12:e},meridiem:function(e,a,t){return e<4?"\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c":e<10?"\u0f5e\u0f7c\u0f42\u0f66\u0f0b\u0f40\u0f66":e<17?"\u0f49\u0f72\u0f53\u0f0b\u0f42\u0f74\u0f44":e<20?"\u0f51\u0f42\u0f7c\u0f44\u0f0b\u0f51\u0f42":"\u0f58\u0f5a\u0f53\u0f0b\u0f58\u0f7c"},week:{dow:0,doy:6}}),e.defineLocale("br",{months:"Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),monthsShort:"Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),weekdays:"Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),weekdaysShort:"Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),weekdaysMin:"Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h[e]mm A",LTS:"h[e]mm:ss A",L:"DD/MM/YYYY",LL:"D [a viz] MMMM YYYY",LLL:"D [a viz] MMMM YYYY h[e]mm A",LLLL:"dddd, D [a viz] MMMM YYYY h[e]mm A"},calendar:{sameDay:"[Hiziv da] LT",nextDay:"[Warc'hoazh da] LT",nextWeek:"dddd [da] LT",lastDay:"[Dec'h da] LT",lastWeek:"dddd [paset da] LT",sameElse:"L"},relativeTime:{future:"a-benn %s",past:"%s 'zo",s:"un nebeud segondenno\xf9",m:"ur vunutenn",mm:Sa,h:"un eur",hh:"%d eur",d:"un devezh",dd:Sa,M:"ur miz",MM:Sa,y:"ur bloaz",yy:function(e){switch(Ha(e)){case 1:case 3:case 4:case 5:case 9:return e+" bloaz";default:return e+" vloaz"}}},dayOfMonthOrdinalParse:/\d{1,2}(a\xf1|vet)/,ordinal:function(e){return e+(1===e?"a\xf1":"vet")},week:{dow:1,doy:4}}),e.defineLocale("bs",{months:"januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_\u010detvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._\u010det._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_\u010de_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[ju\u010der u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[pro\u0161lu] dddd [u] LT";case 6:return"[pro\u0161le] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[pro\u0161li] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",m:xa,mm:xa,h:xa,hh:xa,d:"dan",dd:xa,M:"mjesec",MM:xa,y:"godinu",yy:xa},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),e.defineLocale("ca",{months:{standalone:"gener_febrer_mar\xe7_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),format:"de gener_de febrer_de mar\xe7_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),isFormat:/D[oD]?(\s)+MMMM/},monthsShort:"gen._febr._mar\xe7_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),monthsParseExact:!0,weekdays:"diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),weekdaysShort:"dg._dl._dt._dc._dj._dv._ds.".split("_"),weekdaysMin:"dg_dl_dt_dc_dj_dv_ds".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [de] YYYY",ll:"D MMM YYYY",LLL:"D MMMM [de] YYYY [a les] H:mm",lll:"D MMM YYYY, H:mm",LLLL:"dddd D MMMM [de] YYYY [a les] H:mm",llll:"ddd D MMM YYYY, H:mm"},calendar:{sameDay:function(){return"[avui a "+(1!==this.hours()?"les":"la")+"] LT"},nextDay:function(){return"[dem\xe0 a "+(1!==this.hours()?"les":"la")+"] LT"},nextWeek:function(){return"dddd [a "+(1!==this.hours()?"les":"la")+"] LT"},lastDay:function(){return"[ahir a "+(1!==this.hours()?"les":"la")+"] LT"},lastWeek:function(){return"[el] dddd [passat a "+(1!==this.hours()?"les":"la")+"] LT"},sameElse:"L"},relativeTime:{future:"d'aqu\xed %s",past:"fa %s",s:"uns segons",m:"un minut",mm:"%d minuts",h:"una hora",hh:"%d hores",d:"un dia",dd:"%d dies",M:"un mes",MM:"%d mesos",y:"un any",yy:"%d anys"},dayOfMonthOrdinalParse:/\d{1,2}(r|n|t|\xe8|a)/,ordinal:function(e,a){var t=1===e?"r":2===e?"n":3===e?"r":4===e?"t":"\xe8";return"w"!==a&&"W"!==a||(t="a"),e+t},week:{dow:1,doy:4}});var Es="leden_\xfanor_b\u0159ezen_duben_kv\u011bten_\u010derven_\u010dervenec_srpen_z\xe1\u0159\xed_\u0159\xedjen_listopad_prosinec".split("_"),As="led_\xfano_b\u0159e_dub_kv\u011b_\u010dvn_\u010dvc_srp_z\xe1\u0159_\u0159\xedj_lis_pro".split("_");e.defineLocale("cs",{months:Es,monthsShort:As,monthsParse:function(e,a){var t,n=[];for(t=0;t<12;t++)n[t]=new RegExp("^"+e[t]+"$|^"+a[t]+"$","i");return n}(Es,As),shortMonthsParse:function(e){var a,t=[];for(a=0;a<12;a++)t[a]=new RegExp("^"+e[a]+"$","i");return t}(As),longMonthsParse:function(e){var a,t=[];for(a=0;a<12;a++)t[a]=new RegExp("^"+e[a]+"$","i");return t}(Es),weekdays:"ned\u011ble_pond\u011bl\xed_\xfater\xfd_st\u0159eda_\u010dtvrtek_p\xe1tek_sobota".split("_"),weekdaysShort:"ne_po_\xfat_st_\u010dt_p\xe1_so".split("_"),weekdaysMin:"ne_po_\xfat_st_\u010dt_p\xe1_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},calendar:{sameDay:"[dnes v] LT",nextDay:"[z\xedtra v] LT",nextWeek:function(){switch(this.day()){case 0:return"[v ned\u011bli v] LT";case 1:case 2:return"[v] dddd [v] LT";case 3:return"[ve st\u0159edu v] LT";case 4:return"[ve \u010dtvrtek v] LT";case 5:return"[v p\xe1tek v] LT";case 6:return"[v sobotu v] LT"}},lastDay:"[v\u010dera v] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulou ned\u011bli v] LT";case 1:case 2:return"[minul\xe9] dddd [v] LT";case 3:return"[minulou st\u0159edu v] LT";case 4:case 5:return"[minul\xfd] dddd [v] LT";case 6:return"[minulou sobotu v] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"p\u0159ed %s",s:Oa,m:Oa,mm:Oa,h:Oa,hh:Oa,d:Oa,dd:Oa,M:Oa,MM:Oa,y:Oa,yy:Oa},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),e.defineLocale("cv",{months:"\u043a\u04d1\u0440\u043b\u0430\u0447_\u043d\u0430\u0440\u04d1\u0441_\u043f\u0443\u0448_\u0430\u043a\u0430_\u043c\u0430\u0439_\u04ab\u04d7\u0440\u0442\u043c\u0435_\u0443\u0442\u04d1_\u04ab\u0443\u0440\u043b\u0430_\u0430\u0432\u04d1\u043d_\u044e\u043f\u0430_\u0447\u04f3\u043a_\u0440\u0430\u0448\u0442\u0430\u0432".split("_"),monthsShort:"\u043a\u04d1\u0440_\u043d\u0430\u0440_\u043f\u0443\u0448_\u0430\u043a\u0430_\u043c\u0430\u0439_\u04ab\u04d7\u0440_\u0443\u0442\u04d1_\u04ab\u0443\u0440_\u0430\u0432\u043d_\u044e\u043f\u0430_\u0447\u04f3\u043a_\u0440\u0430\u0448".split("_"),weekdays:"\u0432\u044b\u0440\u0441\u0430\u0440\u043d\u0438\u043a\u0443\u043d_\u0442\u0443\u043d\u0442\u0438\u043a\u0443\u043d_\u044b\u0442\u043b\u0430\u0440\u0438\u043a\u0443\u043d_\u044e\u043d\u043a\u0443\u043d_\u043a\u04d7\u04ab\u043d\u0435\u0440\u043d\u0438\u043a\u0443\u043d_\u044d\u0440\u043d\u0435\u043a\u0443\u043d_\u0448\u04d1\u043c\u0430\u0442\u043a\u0443\u043d".split("_"),weekdaysShort:"\u0432\u044b\u0440_\u0442\u0443\u043d_\u044b\u0442\u043b_\u044e\u043d_\u043a\u04d7\u04ab_\u044d\u0440\u043d_\u0448\u04d1\u043c".split("_"),weekdaysMin:"\u0432\u0440_\u0442\u043d_\u044b\u0442_\u044e\u043d_\u043a\u04ab_\u044d\u0440_\u0448\u043c".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"YYYY [\u04ab\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u04d1\u0445\u04d7\u043d] D[-\u043c\u04d7\u0448\u04d7]",LLL:"YYYY [\u04ab\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u04d1\u0445\u04d7\u043d] D[-\u043c\u04d7\u0448\u04d7], HH:mm",LLLL:"dddd, YYYY [\u04ab\u0443\u043b\u0445\u0438] MMMM [\u0443\u0439\u04d1\u0445\u04d7\u043d] D[-\u043c\u04d7\u0448\u04d7], HH:mm"},calendar:{sameDay:"[\u041f\u0430\u044f\u043d] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",nextDay:"[\u042b\u0440\u0430\u043d] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",lastDay:"[\u04d6\u043d\u0435\u0440] LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",nextWeek:"[\u04aa\u0438\u0442\u0435\u0441] dddd LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",lastWeek:"[\u0418\u0440\u0442\u043d\u04d7] dddd LT [\u0441\u0435\u0445\u0435\u0442\u0440\u0435]",sameElse:"L"},relativeTime:{future:function(e){return e+(/\u0441\u0435\u0445\u0435\u0442$/i.exec(e)?"\u0440\u0435\u043d":/\u04ab\u0443\u043b$/i.exec(e)?"\u0442\u0430\u043d":"\u0440\u0430\u043d")},past:"%s \u043a\u0430\u044f\u043b\u043b\u0430",s:"\u043f\u04d7\u0440-\u0438\u043a \u04ab\u0435\u043a\u043a\u0443\u043d\u0442",m:"\u043f\u04d7\u0440 \u043c\u0438\u043d\u0443\u0442",mm:"%d \u043c\u0438\u043d\u0443\u0442",h:"\u043f\u04d7\u0440 \u0441\u0435\u0445\u0435\u0442",hh:"%d \u0441\u0435\u0445\u0435\u0442",d:"\u043f\u04d7\u0440 \u043a\u0443\u043d",dd:"%d \u043a\u0443\u043d",M:"\u043f\u04d7\u0440 \u0443\u0439\u04d1\u0445",MM:"%d \u0443\u0439\u04d1\u0445",y:"\u043f\u04d7\u0440 \u04ab\u0443\u043b",yy:"%d \u04ab\u0443\u043b"},dayOfMonthOrdinalParse:/\d{1,2}-\u043c\u04d7\u0448/,ordinal:"%d-\u043c\u04d7\u0448",week:{dow:1,doy:7}}),e.defineLocale("cy",{months:"Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),monthsShort:"Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),weekdays:"Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),weekdaysShort:"Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),weekdaysMin:"Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Heddiw am] LT",nextDay:"[Yfory am] LT",nextWeek:"dddd [am] LT",lastDay:"[Ddoe am] LT",lastWeek:"dddd [diwethaf am] LT",sameElse:"L"},relativeTime:{future:"mewn %s",past:"%s yn \xf4l",s:"ychydig eiliadau",m:"munud",mm:"%d munud",h:"awr",hh:"%d awr",d:"diwrnod",dd:"%d diwrnod",M:"mis",MM:"%d mis",y:"blwyddyn",yy:"%d flynedd"},dayOfMonthOrdinalParse:/\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,ordinal:function(e){var a=e,t="",n=["","af","il","ydd","ydd","ed","ed","ed","fed","fed","fed","eg","fed","eg","eg","fed","eg","eg","fed","eg","fed"];return a>20?t=40===a||50===a||60===a||80===a||100===a?"fed":"ain":a>0&&(t=n[a]),e+t},week:{dow:1,doy:4}}),e.defineLocale("da",{months:"januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"s\xf8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xf8rdag".split("_"),weekdaysShort:"s\xf8n_man_tir_ons_tor_fre_l\xf8r".split("_"),weekdaysMin:"s\xf8_ma_ti_on_to_fr_l\xf8".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd [d.] D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[i dag kl.] LT",nextDay:"[i morgen kl.] LT",nextWeek:"p\xe5 dddd [kl.] LT",lastDay:"[i g\xe5r kl.] LT",lastWeek:"[i] dddd[s kl.] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"f\xe5 sekunder",m:"et minut",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dage",M:"en m\xe5ned",MM:"%d m\xe5neder",y:"et \xe5r",yy:"%d \xe5r"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),e.defineLocale("de-at",{months:"J\xe4nner_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"J\xe4n._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",m:Wa,mm:"%d Minuten",h:Wa,hh:"%d Stunden",d:Wa,dd:Wa,M:Wa,MM:Wa,y:Wa,yy:Wa},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),e.defineLocale("de-ch",{months:"Januar_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH.mm",LLLL:"dddd, D. MMMM YYYY HH.mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",m:Ea,mm:"%d Minuten",h:Ea,hh:"%d Stunden",d:Ea,dd:Ea,M:Ea,MM:Ea,y:Ea,yy:Ea},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),e.defineLocale("de",{months:"Januar_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",m:Aa,mm:"%d Minuten",h:Aa,hh:"%d Stunden",d:Aa,dd:Aa,M:Aa,MM:Aa,y:Aa,yy:Aa},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});var Fs=["\u0796\u07ac\u0782\u07aa\u0787\u07a6\u0783\u07a9","\u078a\u07ac\u0784\u07b0\u0783\u07aa\u0787\u07a6\u0783\u07a9","\u0789\u07a7\u0783\u07a8\u0797\u07aa","\u0787\u07ad\u0795\u07b0\u0783\u07a9\u078d\u07aa","\u0789\u07ad","\u0796\u07ab\u0782\u07b0","\u0796\u07aa\u078d\u07a6\u0787\u07a8","\u0787\u07af\u078e\u07a6\u0790\u07b0\u0793\u07aa","\u0790\u07ac\u0795\u07b0\u0793\u07ac\u0789\u07b0\u0784\u07a6\u0783\u07aa","\u0787\u07ae\u0786\u07b0\u0793\u07af\u0784\u07a6\u0783\u07aa","\u0782\u07ae\u0788\u07ac\u0789\u07b0\u0784\u07a6\u0783\u07aa","\u0791\u07a8\u0790\u07ac\u0789\u07b0\u0784\u07a6\u0783\u07aa"],zs=["\u0787\u07a7\u078b\u07a8\u0787\u07b0\u078c\u07a6","\u0780\u07af\u0789\u07a6","\u0787\u07a6\u0782\u07b0\u078e\u07a7\u0783\u07a6","\u0784\u07aa\u078b\u07a6","\u0784\u07aa\u0783\u07a7\u0790\u07b0\u078a\u07a6\u078c\u07a8","\u0780\u07aa\u0786\u07aa\u0783\u07aa","\u0780\u07ae\u0782\u07a8\u0780\u07a8\u0783\u07aa"];e.defineLocale("dv",{months:Fs,monthsShort:Fs,weekdays:zs,weekdaysShort:zs,weekdaysMin:"\u0787\u07a7\u078b\u07a8_\u0780\u07af\u0789\u07a6_\u0787\u07a6\u0782\u07b0_\u0784\u07aa\u078b\u07a6_\u0784\u07aa\u0783\u07a7_\u0780\u07aa\u0786\u07aa_\u0780\u07ae\u0782\u07a8".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/M/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/\u0789\u0786|\u0789\u078a/,isPM:function(e){return"\u0789\u078a"===e},meridiem:function(e,a,t){return e<12?"\u0789\u0786":"\u0789\u078a"},calendar:{sameDay:"[\u0789\u07a8\u0787\u07a6\u078b\u07aa] LT",nextDay:"[\u0789\u07a7\u078b\u07a6\u0789\u07a7] LT",nextWeek:"dddd LT",lastDay:"[\u0787\u07a8\u0787\u07b0\u0794\u07ac] LT",lastWeek:"[\u078a\u07a7\u0787\u07a8\u078c\u07aa\u0788\u07a8] dddd LT",sameElse:"L"},relativeTime:{future:"\u078c\u07ac\u0783\u07ad\u078e\u07a6\u0787\u07a8 %s",past:"\u0786\u07aa\u0783\u07a8\u0782\u07b0 %s",s:"\u0790\u07a8\u0786\u07aa\u0782\u07b0\u078c\u07aa\u0786\u07ae\u0785\u07ac\u0787\u07b0",m:"\u0789\u07a8\u0782\u07a8\u0793\u07ac\u0787\u07b0",mm:"\u0789\u07a8\u0782\u07a8\u0793\u07aa %d",h:"\u078e\u07a6\u0791\u07a8\u0787\u07a8\u0783\u07ac\u0787\u07b0",hh:"\u078e\u07a6\u0791\u07a8\u0787\u07a8\u0783\u07aa %d",d:"\u078b\u07aa\u0788\u07a6\u0780\u07ac\u0787\u07b0",dd:"\u078b\u07aa\u0788\u07a6\u0790\u07b0 %d",M:"\u0789\u07a6\u0780\u07ac\u0787\u07b0",MM:"\u0789\u07a6\u0790\u07b0 %d",y:"\u0787\u07a6\u0780\u07a6\u0783\u07ac\u0787\u07b0",yy:"\u0787\u07a6\u0780\u07a6\u0783\u07aa %d"},preparse:function(e){return e.replace(/\u060c/g,",")},postformat:function(e){return e.replace(/,/g,"\u060c")},week:{dow:7,doy:12}}),e.defineLocale("el",{monthsNominativeEl:"\u0399\u03b1\u03bd\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2_\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2_\u039c\u03ac\u03c1\u03c4\u03b9\u03bf\u03c2_\u0391\u03c0\u03c1\u03af\u03bb\u03b9\u03bf\u03c2_\u039c\u03ac\u03b9\u03bf\u03c2_\u0399\u03bf\u03cd\u03bd\u03b9\u03bf\u03c2_\u0399\u03bf\u03cd\u03bb\u03b9\u03bf\u03c2_\u0391\u03cd\u03b3\u03bf\u03c5\u03c3\u03c4\u03bf\u03c2_\u03a3\u03b5\u03c0\u03c4\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2_\u039f\u03ba\u03c4\u03ce\u03b2\u03c1\u03b9\u03bf\u03c2_\u039d\u03bf\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2_\u0394\u03b5\u03ba\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2".split("_"),monthsGenitiveEl:"\u0399\u03b1\u03bd\u03bf\u03c5\u03b1\u03c1\u03af\u03bf\u03c5_\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03b1\u03c1\u03af\u03bf\u03c5_\u039c\u03b1\u03c1\u03c4\u03af\u03bf\u03c5_\u0391\u03c0\u03c1\u03b9\u03bb\u03af\u03bf\u03c5_\u039c\u03b1\u0390\u03bf\u03c5_\u0399\u03bf\u03c5\u03bd\u03af\u03bf\u03c5_\u0399\u03bf\u03c5\u03bb\u03af\u03bf\u03c5_\u0391\u03c5\u03b3\u03bf\u03cd\u03c3\u03c4\u03bf\u03c5_\u03a3\u03b5\u03c0\u03c4\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5_\u039f\u03ba\u03c4\u03c9\u03b2\u03c1\u03af\u03bf\u03c5_\u039d\u03bf\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5_\u0394\u03b5\u03ba\u03b5\u03bc\u03b2\u03c1\u03af\u03bf\u03c5".split("_"),months:function(e,a){return e?"string"==typeof a&&/D/.test(a.substring(0,a.indexOf("MMMM")))?this._monthsGenitiveEl[e.month()]:this._monthsNominativeEl[e.month()]:this._monthsNominativeEl},monthsShort:"\u0399\u03b1\u03bd_\u03a6\u03b5\u03b2_\u039c\u03b1\u03c1_\u0391\u03c0\u03c1_\u039c\u03b1\u03ca_\u0399\u03bf\u03c5\u03bd_\u0399\u03bf\u03c5\u03bb_\u0391\u03c5\u03b3_\u03a3\u03b5\u03c0_\u039f\u03ba\u03c4_\u039d\u03bf\u03b5_\u0394\u03b5\u03ba".split("_"),weekdays:"\u039a\u03c5\u03c1\u03b9\u03b1\u03ba\u03ae_\u0394\u03b5\u03c5\u03c4\u03ad\u03c1\u03b1_\u03a4\u03c1\u03af\u03c4\u03b7_\u03a4\u03b5\u03c4\u03ac\u03c1\u03c4\u03b7_\u03a0\u03ad\u03bc\u03c0\u03c4\u03b7_\u03a0\u03b1\u03c1\u03b1\u03c3\u03ba\u03b5\u03c5\u03ae_\u03a3\u03ac\u03b2\u03b2\u03b1\u03c4\u03bf".split("_"),weekdaysShort:"\u039a\u03c5\u03c1_\u0394\u03b5\u03c5_\u03a4\u03c1\u03b9_\u03a4\u03b5\u03c4_\u03a0\u03b5\u03bc_\u03a0\u03b1\u03c1_\u03a3\u03b1\u03b2".split("_"),weekdaysMin:"\u039a\u03c5_\u0394\u03b5_\u03a4\u03c1_\u03a4\u03b5_\u03a0\u03b5_\u03a0\u03b1_\u03a3\u03b1".split("_"),meridiem:function(e,a,t){return e>11?t?"\u03bc\u03bc":"\u039c\u039c":t?"\u03c0\u03bc":"\u03a0\u039c"},isPM:function(e){return"\u03bc"===(e+"").toLowerCase()[0]},meridiemParse:/[\u03a0\u039c]\.?\u039c?\.?/i,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendarEl:{sameDay:"[\u03a3\u03ae\u03bc\u03b5\u03c1\u03b1 {}] LT",nextDay:"[\u0391\u03cd\u03c1\u03b9\u03bf {}] LT",nextWeek:"dddd [{}] LT",lastDay:"[\u03a7\u03b8\u03b5\u03c2 {}] LT",lastWeek:function(){switch(this.day()){case 6:return"[\u03c4\u03bf \u03c0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03bf] dddd [{}] LT";default:return"[\u03c4\u03b7\u03bd \u03c0\u03c1\u03bf\u03b7\u03b3\u03bf\u03cd\u03bc\u03b5\u03bd\u03b7] dddd [{}] LT"}},sameElse:"L"},calendar:function(e,a){var t=this._calendarEl[e],n=a&&a.hours();return g(t)&&(t=t.apply(a)),t.replace("{}",n%12==1?"\u03c3\u03c4\u03b7":"\u03c3\u03c4\u03b9\u03c2")},relativeTime:{future:"\u03c3\u03b5 %s",past:"%s \u03c0\u03c1\u03b9\u03bd",s:"\u03bb\u03af\u03b3\u03b1 \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03b1",m:"\u03ad\u03bd\u03b1 \u03bb\u03b5\u03c0\u03c4\u03cc",mm:"%d \u03bb\u03b5\u03c0\u03c4\u03ac",h:"\u03bc\u03af\u03b1 \u03ce\u03c1\u03b1",hh:"%d \u03ce\u03c1\u03b5\u03c2",d:"\u03bc\u03af\u03b1 \u03bc\u03ad\u03c1\u03b1",dd:"%d \u03bc\u03ad\u03c1\u03b5\u03c2",M:"\u03ad\u03bd\u03b1\u03c2 \u03bc\u03ae\u03bd\u03b1\u03c2",MM:"%d \u03bc\u03ae\u03bd\u03b5\u03c2",y:"\u03ad\u03bd\u03b1\u03c2 \u03c7\u03c1\u03cc\u03bd\u03bf\u03c2",yy:"%d \u03c7\u03c1\u03cc\u03bd\u03b9\u03b1"},dayOfMonthOrdinalParse:/\d{1,2}\u03b7/,ordinal:"%d\u03b7",week:{dow:1,doy:4}}),e.defineLocale("en-au",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th")},week:{dow:1,doy:4}}),e.defineLocale("en-ca",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"YYYY-MM-DD",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th")}}),e.defineLocale("en-gb",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th")},week:{dow:1,doy:4}}),e.defineLocale("en-ie",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th")},week:{dow:1,doy:4}}),e.defineLocale("en-nz",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th")},week:{dow:1,doy:4}}),e.defineLocale("eo",{months:"januaro_februaro_marto_aprilo_majo_junio_julio_a\u016dgusto_septembro_oktobro_novembro_decembro".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_a\u016dg_sep_okt_nov_dec".split("_"),weekdays:"diman\u0109o_lundo_mardo_merkredo_\u0135a\u016ddo_vendredo_sabato".split("_"),weekdaysShort:"dim_lun_mard_merk_\u0135a\u016d_ven_sab".split("_"),weekdaysMin:"di_lu_ma_me_\u0135a_ve_sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D[-a de] MMMM, YYYY",LLL:"D[-a de] MMMM, YYYY HH:mm",LLLL:"dddd, [la] D[-a de] MMMM, YYYY HH:mm"},meridiemParse:/[ap]\.t\.m/i,isPM:function(e){return"p"===e.charAt(0).toLowerCase()},meridiem:function(e,a,t){return e>11?t?"p.t.m.":"P.T.M.":t?"a.t.m.":"A.T.M."},calendar:{sameDay:"[Hodia\u016d je] LT",nextDay:"[Morga\u016d je] LT",nextWeek:"dddd [je] LT",lastDay:"[Hiera\u016d je] LT",lastWeek:"[pasinta] dddd [je] LT",sameElse:"L"},relativeTime:{future:"post %s",past:"anta\u016d %s",s:"sekundoj",m:"minuto",mm:"%d minutoj",h:"horo",hh:"%d horoj",d:"tago",dd:"%d tagoj",M:"monato",MM:"%d monatoj",y:"jaro",yy:"%d jaroj"},dayOfMonthOrdinalParse:/\d{1,2}a/,ordinal:"%da",week:{dow:1,doy:7}});var Js="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),Ns="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),Rs=[/^ene/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i],Cs=/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;e.defineLocale("es-do",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,a){return e?/-MMM-/.test(a)?Ns[e.month()]:Js[e.month()]:Js},monthsRegex:Cs,monthsShortRegex:Cs,monthsStrictRegex:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,monthsShortStrictRegex:/^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,monthsParse:Rs,longMonthsParse:Rs,shortMonthsParse:Rs,weekdays:"domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"),weekdaysShort:"dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_s\xe1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY h:mm A",LLLL:"dddd, D [de] MMMM [de] YYYY h:mm A"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[ma\xf1ana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un d\xeda",dd:"%d d\xedas",M:"un mes",MM:"%d meses",y:"un a\xf1o",yy:"%d a\xf1os"},dayOfMonthOrdinalParse:/\d{1,2}\xba/,ordinal:"%d\xba",week:{dow:1,doy:4}});var Is="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),Gs="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");e.defineLocale("es-us",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,a){return e?/-MMM-/.test(a)?Gs[e.month()]:Is[e.month()]:Is},monthsParseExact:!0,weekdays:"domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"),weekdaysShort:"dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_s\xe1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"MM/DD/YYYY",LL:"MMMM [de] D [de] YYYY",LLL:"MMMM [de] D [de] YYYY H:mm",LLLL:"dddd, MMMM [de] D [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[ma\xf1ana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un d\xeda",dd:"%d d\xedas",M:"un mes",MM:"%d meses",y:"un a\xf1o",yy:"%d a\xf1os"},dayOfMonthOrdinalParse:/\d{1,2}\xba/,ordinal:"%d\xba",week:{dow:0,doy:6}});var Us="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),Vs="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),Ks=[/^ene/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i],$s=/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;e.defineLocale("es",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,a){return e?/-MMM-/.test(a)?Vs[e.month()]:Us[e.month()]:Us},monthsRegex:$s,monthsShortRegex:$s,monthsStrictRegex:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,monthsShortStrictRegex:/^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,monthsParse:Ks,longMonthsParse:Ks,shortMonthsParse:Ks,weekdays:"domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"),weekdaysShort:"dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_s\xe1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[ma\xf1ana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un d\xeda",dd:"%d d\xedas",M:"un mes",MM:"%d meses",y:"un a\xf1o",yy:"%d a\xf1os"},dayOfMonthOrdinalParse:/\d{1,2}\xba/,ordinal:"%d\xba",week:{dow:1,doy:4}}),e.defineLocale("et",{months:"jaanuar_veebruar_m\xe4rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),monthsShort:"jaan_veebr_m\xe4rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),weekdays:"p\xfchap\xe4ev_esmasp\xe4ev_teisip\xe4ev_kolmap\xe4ev_neljap\xe4ev_reede_laup\xe4ev".split("_"),weekdaysShort:"P_E_T_K_N_R_L".split("_"),weekdaysMin:"P_E_T_K_N_R_L".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[T\xe4na,] LT",nextDay:"[Homme,] LT",nextWeek:"[J\xe4rgmine] dddd LT",lastDay:"[Eile,] LT",lastWeek:"[Eelmine] dddd LT",sameElse:"L"},relativeTime:{future:"%s p\xe4rast",past:"%s tagasi",s:Fa,m:Fa,mm:Fa,h:Fa,hh:Fa,d:Fa,dd:"%d p\xe4eva",M:Fa,MM:Fa,y:Fa,yy:Fa},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),e.defineLocale("eu",{months:"urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),monthsShort:"urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),monthsParseExact:!0,weekdays:"igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),weekdaysShort:"ig._al._ar._az._og._ol._lr.".split("_"),weekdaysMin:"ig_al_ar_az_og_ol_lr".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY[ko] MMMM[ren] D[a]",LLL:"YYYY[ko] MMMM[ren] D[a] HH:mm",LLLL:"dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",l:"YYYY-M-D",ll:"YYYY[ko] MMM D[a]",lll:"YYYY[ko] MMM D[a] HH:mm",llll:"ddd, YYYY[ko] MMM D[a] HH:mm"},calendar:{sameDay:"[gaur] LT[etan]",nextDay:"[bihar] LT[etan]",nextWeek:"dddd LT[etan]",lastDay:"[atzo] LT[etan]",lastWeek:"[aurreko] dddd LT[etan]",sameElse:"L"},relativeTime:{future:"%s barru",past:"duela %s",s:"segundo batzuk",m:"minutu bat",mm:"%d minutu",h:"ordu bat",hh:"%d ordu",d:"egun bat",dd:"%d egun",M:"hilabete bat",MM:"%d hilabete",y:"urte bat",yy:"%d urte"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}});var Zs={1:"\u06f1",2:"\u06f2",3:"\u06f3",4:"\u06f4",5:"\u06f5",6:"\u06f6",7:"\u06f7",8:"\u06f8",9:"\u06f9",0:"\u06f0"},Bs={"\u06f1":"1","\u06f2":"2","\u06f3":"3","\u06f4":"4","\u06f5":"5","\u06f6":"6","\u06f7":"7","\u06f8":"8","\u06f9":"9","\u06f0":"0"};e.defineLocale("fa",{months:"\u0698\u0627\u0646\u0648\u06cc\u0647_\u0641\u0648\u0631\u06cc\u0647_\u0645\u0627\u0631\u0633_\u0622\u0648\u0631\u06cc\u0644_\u0645\u0647_\u0698\u0648\u0626\u0646_\u0698\u0648\u0626\u06cc\u0647_\u0627\u0648\u062a_\u0633\u067e\u062a\u0627\u0645\u0628\u0631_\u0627\u06a9\u062a\u0628\u0631_\u0646\u0648\u0627\u0645\u0628\u0631_\u062f\u0633\u0627\u0645\u0628\u0631".split("_"),monthsShort:"\u0698\u0627\u0646\u0648\u06cc\u0647_\u0641\u0648\u0631\u06cc\u0647_\u0645\u0627\u0631\u0633_\u0622\u0648\u0631\u06cc\u0644_\u0645\u0647_\u0698\u0648\u0626\u0646_\u0698\u0648\u0626\u06cc\u0647_\u0627\u0648\u062a_\u0633\u067e\u062a\u0627\u0645\u0628\u0631_\u0627\u06a9\u062a\u0628\u0631_\u0646\u0648\u0627\u0645\u0628\u0631_\u062f\u0633\u0627\u0645\u0628\u0631".split("_"),weekdays:"\u06cc\u06a9\u200c\u0634\u0646\u0628\u0647_\u062f\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200c\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067e\u0646\u062c\u200c\u0634\u0646\u0628\u0647_\u062c\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split("_"),weekdaysShort:"\u06cc\u06a9\u200c\u0634\u0646\u0628\u0647_\u062f\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200c\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067e\u0646\u062c\u200c\u0634\u0646\u0628\u0647_\u062c\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split("_"),weekdaysMin:"\u06cc_\u062f_\u0633_\u0686_\u067e_\u062c_\u0634".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},meridiemParse:/\u0642\u0628\u0644 \u0627\u0632 \u0638\u0647\u0631|\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631/,isPM:function(e){return/\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631/.test(e)},meridiem:function(e,a,t){return e<12?"\u0642\u0628\u0644 \u0627\u0632 \u0638\u0647\u0631":"\u0628\u0639\u062f \u0627\u0632 \u0638\u0647\u0631"},calendar:{sameDay:"[\u0627\u0645\u0631\u0648\u0632 \u0633\u0627\u0639\u062a] LT",nextDay:"[\u0641\u0631\u062f\u0627 \u0633\u0627\u0639\u062a] LT",nextWeek:"dddd [\u0633\u0627\u0639\u062a] LT",lastDay:"[\u062f\u06cc\u0631\u0648\u0632 \u0633\u0627\u0639\u062a] LT",lastWeek:"dddd [\u067e\u06cc\u0634] [\u0633\u0627\u0639\u062a] LT",sameElse:"L"},relativeTime:{future:"\u062f\u0631 %s",past:"%s \u067e\u06cc\u0634",s:"\u0686\u0646\u062f \u062b\u0627\u0646\u06cc\u0647",m:"\u06cc\u06a9 \u062f\u0642\u06cc\u0642\u0647",mm:"%d \u062f\u0642\u06cc\u0642\u0647",h:"\u06cc\u06a9 \u0633\u0627\u0639\u062a",hh:"%d \u0633\u0627\u0639\u062a",d:"\u06cc\u06a9 \u0631\u0648\u0632",dd:"%d \u0631\u0648\u0632",M:"\u06cc\u06a9 \u0645\u0627\u0647",MM:"%d \u0645\u0627\u0647",y:"\u06cc\u06a9 \u0633\u0627\u0644",yy:"%d \u0633\u0627\u0644"},preparse:function(e){return e.replace(/[\u06f0-\u06f9]/g,function(e){return Bs[e]}).replace(/\u060c/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return Zs[e]}).replace(/,/g,"\u060c")},dayOfMonthOrdinalParse:/\d{1,2}\u0645/,ordinal:"%d\u0645",week:{dow:6,doy:12}});var qs="nolla yksi kaksi kolme nelj\xe4 viisi kuusi seitsem\xe4n kahdeksan yhdeks\xe4n".split(" "),Qs=["nolla","yhden","kahden","kolmen","nelj\xe4n","viiden","kuuden",qs[7],qs[8],qs[9]];e.defineLocale("fi",{months:"tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kes\xe4kuu_hein\xe4kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),monthsShort:"tammi_helmi_maalis_huhti_touko_kes\xe4_hein\xe4_elo_syys_loka_marras_joulu".split("_"),weekdays:"sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),weekdaysShort:"su_ma_ti_ke_to_pe_la".split("_"),weekdaysMin:"su_ma_ti_ke_to_pe_la".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"Do MMMM[ta] YYYY",LLL:"Do MMMM[ta] YYYY, [klo] HH.mm",LLLL:"dddd, Do MMMM[ta] YYYY, [klo] HH.mm",l:"D.M.YYYY",ll:"Do MMM YYYY",lll:"Do MMM YYYY, [klo] HH.mm",llll:"ddd, Do MMM YYYY, [klo] HH.mm"},calendar:{sameDay:"[t\xe4n\xe4\xe4n] [klo] LT",nextDay:"[huomenna] [klo] LT",nextWeek:"dddd [klo] LT",lastDay:"[eilen] [klo] LT",lastWeek:"[viime] dddd[na] [klo] LT",sameElse:"L"},relativeTime:{future:"%s p\xe4\xe4st\xe4",past:"%s sitten",s:za,m:za,mm:za,h:za,hh:za,d:za,dd:za,M:za,MM:za,y:za,yy:za},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),e.defineLocale("fo",{months:"januar_februar_mars_apr\xedl_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sunnudagur_m\xe1nadagur_t\xfdsdagur_mikudagur_h\xf3sdagur_fr\xedggjadagur_leygardagur".split("_"),weekdaysShort:"sun_m\xe1n_t\xfds_mik_h\xf3s_fr\xed_ley".split("_"),weekdaysMin:"su_m\xe1_t\xfd_mi_h\xf3_fr_le".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D. MMMM, YYYY HH:mm"},calendar:{sameDay:"[\xcd dag kl.] LT",nextDay:"[\xcd morgin kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[\xcd gj\xe1r kl.] LT",lastWeek:"[s\xed\xf0stu] dddd [kl] LT",sameElse:"L"},relativeTime:{future:"um %s",past:"%s s\xed\xf0ani",s:"f\xe1 sekund",m:"ein minutt",mm:"%d minuttir",h:"ein t\xedmi",hh:"%d t\xedmar",d:"ein dagur",dd:"%d dagar",M:"ein m\xe1na\xf0i",MM:"%d m\xe1na\xf0ir",y:"eitt \xe1r",yy:"%d \xe1r"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),e.defineLocale("fr-ca",{months:"janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"),monthsShort:"janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd\u2019hui \xe0] LT",nextDay:"[Demain \xe0] LT",nextWeek:"dddd [\xe0] LT",lastDay:"[Hier \xe0] LT",lastWeek:"dddd [dernier \xe0] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(er|e)/,ordinal:function(e,a){switch(a){default:case"M":case"Q":case"D":case"DDD":case"d":return e+(1===e?"er":"e");case"w":case"W":return e+(1===e?"re":"e")}}}),e.defineLocale("fr-ch",{months:"janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"),monthsShort:"janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd\u2019hui \xe0] LT",nextDay:"[Demain \xe0] LT",nextWeek:"dddd [\xe0] LT",lastDay:"[Hier \xe0] LT",lastWeek:"dddd [dernier \xe0] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(er|e)/,ordinal:function(e,a){switch(a){default:case"M":case"Q":case"D":case"DDD":case"d":return e+(1===e?"er":"e");case"w":case"W":return e+(1===e?"re":"e")}},week:{dow:1,doy:4}}),e.defineLocale("fr",{months:"janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"),monthsShort:"janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd\u2019hui \xe0] LT",nextDay:"[Demain \xe0] LT",nextWeek:"dddd [\xe0] LT",lastDay:"[Hier \xe0] LT",lastWeek:"dddd [dernier \xe0] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(er|)/,ordinal:function(e,a){switch(a){case"D":return e+(1===e?"er":"");default:case"M":case"Q":case"DDD":case"d":return e+(1===e?"er":"e");case"w":case"W":return e+(1===e?"re":"e")}},week:{dow:1,doy:4}});var Xs="jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),er="jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");e.defineLocale("fy",{months:"jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),monthsShort:function(e,a){return e?/-MMM-/.test(a)?er[e.month()]:Xs[e.month()]:Xs},monthsParseExact:!0,weekdays:"snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),weekdaysShort:"si._mo._ti._wo._to._fr._so.".split("_"),weekdaysMin:"Si_Mo_Ti_Wo_To_Fr_So".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[hjoed om] LT",nextDay:"[moarn om] LT",nextWeek:"dddd [om] LT",lastDay:"[juster om] LT",lastWeek:"[\xf4fr\xfbne] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oer %s",past:"%s lyn",s:"in pear sekonden",m:"ien min\xfat",mm:"%d minuten",h:"ien oere",hh:"%d oeren",d:"ien dei",dd:"%d dagen",M:"ien moanne",MM:"%d moannen",y:"ien jier",yy:"%d jierren"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}});var ar=["Am Faoilleach","An Gearran","Am M\xe0rt","An Giblean","An C\xe8itean","An t-\xd2gmhios","An t-Iuchar","An L\xf9nastal","An t-Sultain","An D\xe0mhair","An t-Samhain","An D\xf9bhlachd"],tr=["Faoi","Gear","M\xe0rt","Gibl","C\xe8it","\xd2gmh","Iuch","L\xf9n","Sult","D\xe0mh","Samh","D\xf9bh"],nr=["Did\xf2mhnaich","Diluain","Dim\xe0irt","Diciadain","Diardaoin","Dihaoine","Disathairne"],sr=["Did","Dil","Dim","Dic","Dia","Dih","Dis"],rr=["D\xf2","Lu","M\xe0","Ci","Ar","Ha","Sa"];e.defineLocale("gd",{months:ar,monthsShort:tr,monthsParseExact:!0,weekdays:nr,weekdaysShort:sr,weekdaysMin:rr,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[An-diugh aig] LT",nextDay:"[A-m\xe0ireach aig] LT",nextWeek:"dddd [aig] LT",lastDay:"[An-d\xe8 aig] LT",lastWeek:"dddd [seo chaidh] [aig] LT",sameElse:"L"},relativeTime:{future:"ann an %s",past:"bho chionn %s",s:"beagan diogan",m:"mionaid",mm:"%d mionaidean",h:"uair",hh:"%d uairean",d:"latha",dd:"%d latha",M:"m\xecos",MM:"%d m\xecosan",y:"bliadhna",yy:"%d bliadhna"},dayOfMonthOrdinalParse:/\d{1,2}(d|na|mh)/,ordinal:function(e){return e+(1===e?"d":e%10==2?"na":"mh")},week:{dow:1,doy:4}}),e.defineLocale("gl",{months:"xaneiro_febreiro_marzo_abril_maio_xu\xf1o_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),monthsShort:"xan._feb._mar._abr._mai._xu\xf1._xul._ago._set._out._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"domingo_luns_martes_m\xe9rcores_xoves_venres_s\xe1bado".split("_"),weekdaysShort:"dom._lun._mar._m\xe9r._xov._ven._s\xe1b.".split("_"),weekdaysMin:"do_lu_ma_m\xe9_xo_ve_s\xe1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoxe "+(1!==this.hours()?"\xe1s":"\xe1")+"] LT"},nextDay:function(){return"[ma\xf1\xe1 "+(1!==this.hours()?"\xe1s":"\xe1")+"] LT"},nextWeek:function(){return"dddd ["+(1!==this.hours()?"\xe1s":"a")+"] LT"},lastDay:function(){return"[onte "+(1!==this.hours()?"\xe1":"a")+"] LT"},lastWeek:function(){return"[o] dddd [pasado "+(1!==this.hours()?"\xe1s":"a")+"] LT"},sameElse:"L"},relativeTime:{future:function(e){return 0===e.indexOf("un")?"n"+e:"en "+e},past:"hai %s",s:"uns segundos",m:"un minuto",mm:"%d minutos",h:"unha hora",hh:"%d horas",d:"un d\xeda",dd:"%d d\xedas",M:"un mes",MM:"%d meses",y:"un ano",yy:"%d anos"},dayOfMonthOrdinalParse:/\d{1,2}\xba/,ordinal:"%d\xba",week:{dow:1,doy:4}}),e.defineLocale("gom-latn",{months:"Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),monthsShort:"Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"),weekdaysShort:"Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),weekdaysMin:"Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"A h:mm [vazta]",LTS:"A h:mm:ss [vazta]",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY A h:mm [vazta]",LLLL:"dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]",llll:"ddd, D MMM YYYY, A h:mm [vazta]"},calendar:{sameDay:"[Aiz] LT",nextDay:"[Faleam] LT",nextWeek:"[Ieta to] dddd[,] LT",lastDay:"[Kal] LT",lastWeek:"[Fatlo] dddd[,] LT",sameElse:"L"},relativeTime:{future:"%s",past:"%s adim",s:Na,m:Na,mm:Na,h:Na,hh:Na,d:Na,dd:Na,M:Na,MM:Na,y:Na,yy:Na},dayOfMonthOrdinalParse:/\d{1,2}(er)/,ordinal:function(e,a){switch(a){case"D":return e+"er";default:case"M":case"Q":case"DDD":case"d":case"w":case"W":return e}},week:{dow:1,doy:4},meridiemParse:/rati|sokalli|donparam|sanje/,meridiemHour:function(e,a){return 12===e&&(e=0),"rati"===a?e<4?e:e+12:"sokalli"===a?e:"donparam"===a?e>12?e:e+12:"sanje"===a?e+12:void 0},meridiem:function(e,a,t){return e<4?"rati":e<12?"sokalli":e<16?"donparam":e<20?"sanje":"rati"}});var dr={1:"\u0ae7",2:"\u0ae8",3:"\u0ae9",4:"\u0aea",5:"\u0aeb",6:"\u0aec",7:"\u0aed",8:"\u0aee",9:"\u0aef",0:"\u0ae6"},_r={"\u0ae7":"1","\u0ae8":"2","\u0ae9":"3","\u0aea":"4","\u0aeb":"5","\u0aec":"6","\u0aed":"7","\u0aee":"8","\u0aef":"9","\u0ae6":"0"};e.defineLocale("gu",{months:"\u0a9c\u0abe\u0aa8\u0acd\u0aaf\u0ac1\u0a86\u0ab0\u0ac0_\u0aab\u0ac7\u0aac\u0acd\u0ab0\u0ac1\u0a86\u0ab0\u0ac0_\u0aae\u0abe\u0ab0\u0acd\u0a9a_\u0a8f\u0aaa\u0acd\u0ab0\u0abf\u0ab2_\u0aae\u0ac7_\u0a9c\u0ac2\u0aa8_\u0a9c\u0ac1\u0ab2\u0abe\u0a88_\u0a91\u0a97\u0ab8\u0acd\u0a9f_\u0ab8\u0aaa\u0acd\u0a9f\u0ac7\u0aae\u0acd\u0aac\u0ab0_\u0a91\u0a95\u0acd\u0a9f\u0acd\u0aac\u0ab0_\u0aa8\u0ab5\u0ac7\u0aae\u0acd\u0aac\u0ab0_\u0aa1\u0abf\u0ab8\u0ac7\u0aae\u0acd\u0aac\u0ab0".split("_"),monthsShort:"\u0a9c\u0abe\u0aa8\u0acd\u0aaf\u0ac1._\u0aab\u0ac7\u0aac\u0acd\u0ab0\u0ac1._\u0aae\u0abe\u0ab0\u0acd\u0a9a_\u0a8f\u0aaa\u0acd\u0ab0\u0abf._\u0aae\u0ac7_\u0a9c\u0ac2\u0aa8_\u0a9c\u0ac1\u0ab2\u0abe._\u0a91\u0a97._\u0ab8\u0aaa\u0acd\u0a9f\u0ac7._\u0a91\u0a95\u0acd\u0a9f\u0acd._\u0aa8\u0ab5\u0ac7._\u0aa1\u0abf\u0ab8\u0ac7.".split("_"),monthsParseExact:!0,weekdays:"\u0ab0\u0ab5\u0abf\u0ab5\u0abe\u0ab0_\u0ab8\u0acb\u0aae\u0ab5\u0abe\u0ab0_\u0aae\u0a82\u0a97\u0ab3\u0ab5\u0abe\u0ab0_\u0aac\u0ac1\u0aa7\u0acd\u0ab5\u0abe\u0ab0_\u0a97\u0ac1\u0ab0\u0ac1\u0ab5\u0abe\u0ab0_\u0ab6\u0ac1\u0a95\u0acd\u0ab0\u0ab5\u0abe\u0ab0_\u0ab6\u0aa8\u0abf\u0ab5\u0abe\u0ab0".split("_"),weekdaysShort:"\u0ab0\u0ab5\u0abf_\u0ab8\u0acb\u0aae_\u0aae\u0a82\u0a97\u0ab3_\u0aac\u0ac1\u0aa7\u0acd_\u0a97\u0ac1\u0ab0\u0ac1_\u0ab6\u0ac1\u0a95\u0acd\u0ab0_\u0ab6\u0aa8\u0abf".split("_"),weekdaysMin:"\u0ab0_\u0ab8\u0acb_\u0aae\u0a82_\u0aac\u0ac1_\u0a97\u0ac1_\u0ab6\u0ac1_\u0ab6".split("_"),longDateFormat:{LT:"A h:mm \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7",LTS:"A h:mm:ss \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7",LLLL:"dddd, D MMMM YYYY, A h:mm \u0ab5\u0abe\u0a97\u0acd\u0aaf\u0ac7"},calendar:{sameDay:"[\u0a86\u0a9c] LT",nextDay:"[\u0a95\u0abe\u0ab2\u0ac7] LT",nextWeek:"dddd, LT",lastDay:"[\u0a97\u0a87\u0a95\u0abe\u0ab2\u0ac7] LT",lastWeek:"[\u0aaa\u0abe\u0a9b\u0ab2\u0abe] dddd, LT",sameElse:"L"},relativeTime:{future:"%s \u0aae\u0abe",past:"%s \u0aaa\u0ac7\u0ab9\u0ab2\u0abe",s:"\u0a85\u0aae\u0ac1\u0a95 \u0aaa\u0ab3\u0acb",m:"\u0a8f\u0a95 \u0aae\u0abf\u0aa8\u0abf\u0a9f",mm:"%d \u0aae\u0abf\u0aa8\u0abf\u0a9f",h:"\u0a8f\u0a95 \u0a95\u0ab2\u0abe\u0a95",hh:"%d \u0a95\u0ab2\u0abe\u0a95",d:"\u0a8f\u0a95 \u0aa6\u0abf\u0ab5\u0ab8",dd:"%d \u0aa6\u0abf\u0ab5\u0ab8",M:"\u0a8f\u0a95 \u0aae\u0ab9\u0abf\u0aa8\u0acb",MM:"%d \u0aae\u0ab9\u0abf\u0aa8\u0acb",y:"\u0a8f\u0a95 \u0ab5\u0ab0\u0acd\u0ab7",yy:"%d \u0ab5\u0ab0\u0acd\u0ab7"},preparse:function(e){return e.replace(/[\u0ae7\u0ae8\u0ae9\u0aea\u0aeb\u0aec\u0aed\u0aee\u0aef\u0ae6]/g,function(e){return _r[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return dr[e]})},meridiemParse:/\u0ab0\u0abe\u0aa4|\u0aac\u0aaa\u0acb\u0ab0|\u0ab8\u0ab5\u0abe\u0ab0|\u0ab8\u0abe\u0a82\u0a9c/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u0ab0\u0abe\u0aa4"===a?e<4?e:e+12:"\u0ab8\u0ab5\u0abe\u0ab0"===a?e:"\u0aac\u0aaa\u0acb\u0ab0"===a?e>=10?e:e+12:"\u0ab8\u0abe\u0a82\u0a9c"===a?e+12:void 0},meridiem:function(e,a,t){return e<4?"\u0ab0\u0abe\u0aa4":e<10?"\u0ab8\u0ab5\u0abe\u0ab0":e<17?"\u0aac\u0aaa\u0acb\u0ab0":e<20?"\u0ab8\u0abe\u0a82\u0a9c":"\u0ab0\u0abe\u0aa4"},week:{dow:0,doy:6}}),e.defineLocale("he",{months:"\u05d9\u05e0\u05d5\u05d0\u05e8_\u05e4\u05d1\u05e8\u05d5\u05d0\u05e8_\u05de\u05e8\u05e5_\u05d0\u05e4\u05e8\u05d9\u05dc_\u05de\u05d0\u05d9_\u05d9\u05d5\u05e0\u05d9_\u05d9\u05d5\u05dc\u05d9_\u05d0\u05d5\u05d2\u05d5\u05e1\u05d8_\u05e1\u05e4\u05d8\u05de\u05d1\u05e8_\u05d0\u05d5\u05e7\u05d8\u05d5\u05d1\u05e8_\u05e0\u05d5\u05d1\u05de\u05d1\u05e8_\u05d3\u05e6\u05de\u05d1\u05e8".split("_"),monthsShort:"\u05d9\u05e0\u05d5\u05f3_\u05e4\u05d1\u05e8\u05f3_\u05de\u05e8\u05e5_\u05d0\u05e4\u05e8\u05f3_\u05de\u05d0\u05d9_\u05d9\u05d5\u05e0\u05d9_\u05d9\u05d5\u05dc\u05d9_\u05d0\u05d5\u05d2\u05f3_\u05e1\u05e4\u05d8\u05f3_\u05d0\u05d5\u05e7\u05f3_\u05e0\u05d5\u05d1\u05f3_\u05d3\u05e6\u05de\u05f3".split("_"),weekdays:"\u05e8\u05d0\u05e9\u05d5\u05df_\u05e9\u05e0\u05d9_\u05e9\u05dc\u05d9\u05e9\u05d9_\u05e8\u05d1\u05d9\u05e2\u05d9_\u05d7\u05de\u05d9\u05e9\u05d9_\u05e9\u05d9\u05e9\u05d9_\u05e9\u05d1\u05ea".split("_"),weekdaysShort:"\u05d0\u05f3_\u05d1\u05f3_\u05d2\u05f3_\u05d3\u05f3_\u05d4\u05f3_\u05d5\u05f3_\u05e9\u05f3".split("_"),weekdaysMin:"\u05d0_\u05d1_\u05d2_\u05d3_\u05d4_\u05d5_\u05e9".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [\u05d1]MMMM YYYY",LLL:"D [\u05d1]MMMM YYYY HH:mm",LLLL:"dddd, D [\u05d1]MMMM YYYY HH:mm",l:"D/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},calendar:{sameDay:"[\u05d4\u05d9\u05d5\u05dd \u05d1\u05be]LT",nextDay:"[\u05de\u05d7\u05e8 \u05d1\u05be]LT",nextWeek:"dddd [\u05d1\u05e9\u05e2\u05d4] LT",lastDay:"[\u05d0\u05ea\u05de\u05d5\u05dc \u05d1\u05be]LT",lastWeek:"[\u05d1\u05d9\u05d5\u05dd] dddd [\u05d4\u05d0\u05d7\u05e8\u05d5\u05df \u05d1\u05e9\u05e2\u05d4] LT",sameElse:"L"},relativeTime:{future:"\u05d1\u05e2\u05d5\u05d3 %s",past:"\u05dc\u05e4\u05e0\u05d9 %s",s:"\u05de\u05e1\u05e4\u05e8 \u05e9\u05e0\u05d9\u05d5\u05ea",m:"\u05d3\u05e7\u05d4",mm:"%d \u05d3\u05e7\u05d5\u05ea",h:"\u05e9\u05e2\u05d4",hh:function(e){return 2===e?"\u05e9\u05e2\u05ea\u05d9\u05d9\u05dd":e+" \u05e9\u05e2\u05d5\u05ea"},d:"\u05d9\u05d5\u05dd",dd:function(e){return 2===e?"\u05d9\u05d5\u05de\u05d9\u05d9\u05dd":e+" \u05d9\u05de\u05d9\u05dd"},M:"\u05d7\u05d5\u05d3\u05e9",MM:function(e){return 2===e?"\u05d7\u05d5\u05d3\u05e9\u05d9\u05d9\u05dd":e+" \u05d7\u05d5\u05d3\u05e9\u05d9\u05dd"},y:"\u05e9\u05e0\u05d4",yy:function(e){return 2===e?"\u05e9\u05e0\u05ea\u05d9\u05d9\u05dd":e%10==0&&10!==e?e+" \u05e9\u05e0\u05d4":e+" \u05e9\u05e0\u05d9\u05dd"}},meridiemParse:/\u05d0\u05d7\u05d4"\u05e6|\u05dc\u05e4\u05e0\u05d4"\u05e6|\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05dc\u05e4\u05e0\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05dc\u05e4\u05e0\u05d5\u05ea \u05d1\u05d5\u05e7\u05e8|\u05d1\u05d1\u05d5\u05e7\u05e8|\u05d1\u05e2\u05e8\u05d1/i,isPM:function(e){return/^(\u05d0\u05d7\u05d4"\u05e6|\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd|\u05d1\u05e2\u05e8\u05d1)$/.test(e)},meridiem:function(e,a,t){return e<5?"\u05dc\u05e4\u05e0\u05d5\u05ea \u05d1\u05d5\u05e7\u05e8":e<10?"\u05d1\u05d1\u05d5\u05e7\u05e8":e<12?t?'\u05dc\u05e4\u05e0\u05d4"\u05e6':"\u05dc\u05e4\u05e0\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd":e<18?t?'\u05d0\u05d7\u05d4"\u05e6':"\u05d0\u05d7\u05e8\u05d9 \u05d4\u05e6\u05d4\u05e8\u05d9\u05d9\u05dd":"\u05d1\u05e2\u05e8\u05d1"}});var ir={1:"\u0967",2:"\u0968",3:"\u0969",4:"\u096a",5:"\u096b",6:"\u096c",7:"\u096d",8:"\u096e",9:"\u096f",0:"\u0966"},or={"\u0967":"1","\u0968":"2","\u0969":"3","\u096a":"4","\u096b":"5","\u096c":"6","\u096d":"7","\u096e":"8","\u096f":"9","\u0966":"0"};e.defineLocale("hi",{months:"\u091c\u0928\u0935\u0930\u0940_\u092b\u093c\u0930\u0935\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u0948\u0932_\u092e\u0908_\u091c\u0942\u0928_\u091c\u0941\u0932\u093e\u0908_\u0905\u0917\u0938\u094d\u0924_\u0938\u093f\u0924\u092e\u094d\u092c\u0930_\u0905\u0915\u094d\u091f\u0942\u092c\u0930_\u0928\u0935\u092e\u094d\u092c\u0930_\u0926\u093f\u0938\u092e\u094d\u092c\u0930".split("_"),monthsShort:"\u091c\u0928._\u092b\u093c\u0930._\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u0948._\u092e\u0908_\u091c\u0942\u0928_\u091c\u0941\u0932._\u0905\u0917._\u0938\u093f\u0924._\u0905\u0915\u094d\u091f\u0942._\u0928\u0935._\u0926\u093f\u0938.".split("_"),monthsParseExact:!0,weekdays:"\u0930\u0935\u093f\u0935\u093e\u0930_\u0938\u094b\u092e\u0935\u093e\u0930_\u092e\u0902\u0917\u0932\u0935\u093e\u0930_\u092c\u0941\u0927\u0935\u093e\u0930_\u0917\u0941\u0930\u0942\u0935\u093e\u0930_\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930_\u0936\u0928\u093f\u0935\u093e\u0930".split("_"),weekdaysShort:"\u0930\u0935\u093f_\u0938\u094b\u092e_\u092e\u0902\u0917\u0932_\u092c\u0941\u0927_\u0917\u0941\u0930\u0942_\u0936\u0941\u0915\u094d\u0930_\u0936\u0928\u093f".split("_"),weekdaysMin:"\u0930_\u0938\u094b_\u092e\u0902_\u092c\u0941_\u0917\u0941_\u0936\u0941_\u0936".split("_"),longDateFormat:{LT:"A h:mm \u092c\u091c\u0947",LTS:"A h:mm:ss \u092c\u091c\u0947",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm \u092c\u091c\u0947",LLLL:"dddd, D MMMM YYYY, A h:mm \u092c\u091c\u0947"},calendar:{sameDay:"[\u0906\u091c] LT",nextDay:"[\u0915\u0932] LT",nextWeek:"dddd, LT",lastDay:"[\u0915\u0932] LT",lastWeek:"[\u092a\u093f\u091b\u0932\u0947] dddd, LT",sameElse:"L"},relativeTime:{future:"%s \u092e\u0947\u0902",past:"%s \u092a\u0939\u0932\u0947",s:"\u0915\u0941\u091b \u0939\u0940 \u0915\u094d\u0937\u0923",m:"\u090f\u0915 \u092e\u093f\u0928\u091f",mm:"%d \u092e\u093f\u0928\u091f",h:"\u090f\u0915 \u0918\u0902\u091f\u093e",hh:"%d \u0918\u0902\u091f\u0947",d:"\u090f\u0915 \u0926\u093f\u0928",dd:"%d \u0926\u093f\u0928",M:"\u090f\u0915 \u092e\u0939\u0940\u0928\u0947",MM:"%d \u092e\u0939\u0940\u0928\u0947",y:"\u090f\u0915 \u0935\u0930\u094d\u0937",yy:"%d \u0935\u0930\u094d\u0937"},preparse:function(e){return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g,function(e){return or[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return ir[e]})},meridiemParse:/\u0930\u093e\u0924|\u0938\u0941\u092c\u0939|\u0926\u094b\u092a\u0939\u0930|\u0936\u093e\u092e/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u0930\u093e\u0924"===a?e<4?e:e+12:"\u0938\u0941\u092c\u0939"===a?e:"\u0926\u094b\u092a\u0939\u0930"===a?e>=10?e:e+12:"\u0936\u093e\u092e"===a?e+12:void 0},meridiem:function(e,a,t){return e<4?"\u0930\u093e\u0924":e<10?"\u0938\u0941\u092c\u0939":e<17?"\u0926\u094b\u092a\u0939\u0930":e<20?"\u0936\u093e\u092e":"\u0930\u093e\u0924"},week:{dow:0,doy:6}}),e.defineLocale("hr",{months:{format:"sije\u010dnja_velja\u010de_o\u017eujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),standalone:"sije\u010danj_velja\u010da_o\u017eujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")},monthsShort:"sij._velj._o\u017eu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_\u010detvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._\u010det._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_\u010de_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[ju\u010der u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[pro\u0161lu] dddd [u] LT";case 6:return"[pro\u0161le] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[pro\u0161li] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",m:Ra,mm:Ra,h:Ra,hh:Ra,d:"dan",dd:Ra,M:"mjesec",MM:Ra,y:"godinu",yy:Ra},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}});var mr="vas\xe1rnap h\xe9tf\u0151n kedden szerd\xe1n cs\xfct\xf6rt\xf6k\xf6n p\xe9nteken szombaton".split(" ");e.defineLocale("hu",{months:"janu\xe1r_febru\xe1r_m\xe1rcius_\xe1prilis_m\xe1jus_j\xfanius_j\xfalius_augusztus_szeptember_okt\xf3ber_november_december".split("_"),monthsShort:"jan_feb_m\xe1rc_\xe1pr_m\xe1j_j\xfan_j\xfal_aug_szept_okt_nov_dec".split("_"),weekdays:"vas\xe1rnap_h\xe9tf\u0151_kedd_szerda_cs\xfct\xf6rt\xf6k_p\xe9ntek_szombat".split("_"),weekdaysShort:"vas_h\xe9t_kedd_sze_cs\xfct_p\xe9n_szo".split("_"),weekdaysMin:"v_h_k_sze_cs_p_szo".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D. H:mm",LLLL:"YYYY. MMMM D., dddd H:mm"},meridiemParse:/de|du/i,isPM:function(e){return"u"===e.charAt(1).toLowerCase()},meridiem:function(e,a,t){return e<12?!0===t?"de":"DE":!0===t?"du":"DU"},calendar:{sameDay:"[ma] LT[-kor]",nextDay:"[holnap] LT[-kor]",nextWeek:function(){return Ia.call(this,!0)},lastDay:"[tegnap] LT[-kor]",lastWeek:function(){return Ia.call(this,!1)},sameElse:"L"},relativeTime:{future:"%s m\xfalva",past:"%s",s:Ca,m:Ca,mm:Ca,h:Ca,hh:Ca,d:Ca,dd:Ca,M:Ca,MM:Ca,y:Ca,yy:Ca},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),e.defineLocale("hy-am",{months:{format:"\u0570\u0578\u0582\u0576\u057e\u0561\u0580\u056b_\u0583\u0565\u057f\u0580\u057e\u0561\u0580\u056b_\u0574\u0561\u0580\u057f\u056b_\u0561\u057a\u0580\u056b\u056c\u056b_\u0574\u0561\u0575\u056b\u057d\u056b_\u0570\u0578\u0582\u0576\u056b\u057d\u056b_\u0570\u0578\u0582\u056c\u056b\u057d\u056b_\u0585\u0563\u0578\u057d\u057f\u0578\u057d\u056b_\u057d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580\u056b_\u0570\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580\u056b_\u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580\u056b_\u0564\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580\u056b".split("_"),standalone:"\u0570\u0578\u0582\u0576\u057e\u0561\u0580_\u0583\u0565\u057f\u0580\u057e\u0561\u0580_\u0574\u0561\u0580\u057f_\u0561\u057a\u0580\u056b\u056c_\u0574\u0561\u0575\u056b\u057d_\u0570\u0578\u0582\u0576\u056b\u057d_\u0570\u0578\u0582\u056c\u056b\u057d_\u0585\u0563\u0578\u057d\u057f\u0578\u057d_\u057d\u0565\u057a\u057f\u0565\u0574\u0562\u0565\u0580_\u0570\u0578\u056f\u057f\u0565\u0574\u0562\u0565\u0580_\u0576\u0578\u0575\u0565\u0574\u0562\u0565\u0580_\u0564\u0565\u056f\u057f\u0565\u0574\u0562\u0565\u0580".split("_")},monthsShort:"\u0570\u0576\u057e_\u0583\u057f\u0580_\u0574\u0580\u057f_\u0561\u057a\u0580_\u0574\u0575\u057d_\u0570\u0576\u057d_\u0570\u056c\u057d_\u0585\u0563\u057d_\u057d\u057a\u057f_\u0570\u056f\u057f_\u0576\u0574\u0562_\u0564\u056f\u057f".split("_"),weekdays:"\u056f\u056b\u0580\u0561\u056f\u056b_\u0565\u0580\u056f\u0578\u0582\u0577\u0561\u0562\u0569\u056b_\u0565\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b_\u0579\u0578\u0580\u0565\u0584\u0577\u0561\u0562\u0569\u056b_\u0570\u056b\u0576\u0563\u0577\u0561\u0562\u0569\u056b_\u0578\u0582\u0580\u0562\u0561\u0569_\u0577\u0561\u0562\u0561\u0569".split("_"),weekdaysShort:"\u056f\u0580\u056f_\u0565\u0580\u056f_\u0565\u0580\u0584_\u0579\u0580\u0584_\u0570\u0576\u0563_\u0578\u0582\u0580\u0562_\u0577\u0562\u0569".split("_"),weekdaysMin:"\u056f\u0580\u056f_\u0565\u0580\u056f_\u0565\u0580\u0584_\u0579\u0580\u0584_\u0570\u0576\u0563_\u0578\u0582\u0580\u0562_\u0577\u0562\u0569".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY \u0569.",LLL:"D MMMM YYYY \u0569., HH:mm",LLLL:"dddd, D MMMM YYYY \u0569., HH:mm"},calendar:{sameDay:"[\u0561\u0575\u057d\u0585\u0580] LT",nextDay:"[\u057e\u0561\u0572\u0568] LT",lastDay:"[\u0565\u0580\u0565\u056f] LT",nextWeek:function(){return"dddd [\u0585\u0580\u0568 \u056a\u0561\u0574\u0568] LT"},lastWeek:function(){return"[\u0561\u0576\u0581\u0561\u056e] dddd [\u0585\u0580\u0568 \u056a\u0561\u0574\u0568] LT"},sameElse:"L"},relativeTime:{future:"%s \u0570\u0565\u057f\u0578",past:"%s \u0561\u057c\u0561\u057b",s:"\u0574\u056b \u0584\u0561\u0576\u056b \u057e\u0561\u0575\u0580\u056f\u0575\u0561\u0576",m:"\u0580\u0578\u057a\u0565",mm:"%d \u0580\u0578\u057a\u0565",h:"\u056a\u0561\u0574",hh:"%d \u056a\u0561\u0574",d:"\u0585\u0580",dd:"%d \u0585\u0580",M:"\u0561\u0574\u056b\u057d",MM:"%d \u0561\u0574\u056b\u057d",y:"\u057f\u0561\u0580\u056b",yy:"%d \u057f\u0561\u0580\u056b"},meridiemParse:/\u0563\u056b\u0577\u0565\u0580\u057e\u0561|\u0561\u057c\u0561\u057e\u0578\u057f\u057e\u0561|\u0581\u0565\u0580\u0565\u056f\u057e\u0561|\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576/,isPM:function(e){return/^(\u0581\u0565\u0580\u0565\u056f\u057e\u0561|\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576)$/.test(e)},meridiem:function(e){return e<4?"\u0563\u056b\u0577\u0565\u0580\u057e\u0561":e<12?"\u0561\u057c\u0561\u057e\u0578\u057f\u057e\u0561":e<17?"\u0581\u0565\u0580\u0565\u056f\u057e\u0561":"\u0565\u0580\u0565\u056f\u0578\u0575\u0561\u0576"},dayOfMonthOrdinalParse:/\d{1,2}|\d{1,2}-(\u056b\u0576|\u0580\u0564)/,ordinal:function(e,a){switch(a){case"DDD":case"w":case"W":case"DDDo":return 1===e?e+"-\u056b\u0576":e+"-\u0580\u0564";default:return e}},week:{dow:1,doy:7}}),e.defineLocale("id",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),weekdays:"Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),weekdaysShort:"Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|siang|sore|malam/,meridiemHour:function(e,a){return 12===e&&(e=0),"pagi"===a?e:"siang"===a?e>=11?e:e+12:"sore"===a||"malam"===a?e+12:void 0},meridiem:function(e,a,t){return e<11?"pagi":e<15?"siang":e<19?"sore":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Besok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kemarin pukul] LT",lastWeek:"dddd [lalu pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lalu",s:"beberapa detik",m:"semenit",mm:"%d menit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}}),e.defineLocale("is",{months:"jan\xfaar_febr\xfaar_mars_apr\xedl_ma\xed_j\xfan\xed_j\xfal\xed_\xe1g\xfast_september_okt\xf3ber_n\xf3vember_desember".split("_"),monthsShort:"jan_feb_mar_apr_ma\xed_j\xfan_j\xfal_\xe1g\xfa_sep_okt_n\xf3v_des".split("_"),weekdays:"sunnudagur_m\xe1nudagur_\xferi\xf0judagur_mi\xf0vikudagur_fimmtudagur_f\xf6studagur_laugardagur".split("_"),weekdaysShort:"sun_m\xe1n_\xferi_mi\xf0_fim_f\xf6s_lau".split("_"),weekdaysMin:"Su_M\xe1_\xder_Mi_Fi_F\xf6_La".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd, D. MMMM YYYY [kl.] H:mm"},calendar:{sameDay:"[\xed dag kl.] LT",nextDay:"[\xe1 morgun kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[\xed g\xe6r kl.] LT",lastWeek:"[s\xed\xf0asta] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"eftir %s",past:"fyrir %s s\xed\xf0an",s:Ua,m:Ua,mm:Ua,h:"klukkustund",hh:Ua,d:Ua,dd:Ua,M:Ua,MM:Ua,y:Ua,yy:Ua},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),e.defineLocale("it",{months:"gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),monthsShort:"gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),weekdays:"domenica_luned\xec_marted\xec_mercoled\xec_gioved\xec_venerd\xec_sabato".split("_"),weekdaysShort:"dom_lun_mar_mer_gio_ven_sab".split("_"),weekdaysMin:"do_lu_ma_me_gi_ve_sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Oggi alle] LT",nextDay:"[Domani alle] LT",nextWeek:"dddd [alle] LT",lastDay:"[Ieri alle] LT",lastWeek:function(){switch(this.day()){case 0:return"[la scorsa] dddd [alle] LT";default:return"[lo scorso] dddd [alle] LT"}},sameElse:"L"},relativeTime:{future:function(e){return(/^[0-9].+$/.test(e)?"tra":"in")+" "+e},past:"%s fa",s:"alcuni secondi",m:"un minuto",mm:"%d minuti",h:"un'ora",hh:"%d ore",d:"un giorno",dd:"%d giorni",M:"un mese",MM:"%d mesi",y:"un anno",yy:"%d anni"},dayOfMonthOrdinalParse:/\d{1,2}\xba/,ordinal:"%d\xba",week:{dow:1,doy:4}}),e.defineLocale("ja",{months:"1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),monthsShort:"1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),weekdays:"\u65e5\u66dc\u65e5_\u6708\u66dc\u65e5_\u706b\u66dc\u65e5_\u6c34\u66dc\u65e5_\u6728\u66dc\u65e5_\u91d1\u66dc\u65e5_\u571f\u66dc\u65e5".split("_"),weekdaysShort:"\u65e5_\u6708_\u706b_\u6c34_\u6728_\u91d1_\u571f".split("_"),weekdaysMin:"\u65e5_\u6708_\u706b_\u6c34_\u6728_\u91d1_\u571f".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY\u5e74M\u6708D\u65e5",LLL:"YYYY\u5e74M\u6708D\u65e5 HH:mm",LLLL:"YYYY\u5e74M\u6708D\u65e5 HH:mm dddd",l:"YYYY/MM/DD",ll:"YYYY\u5e74M\u6708D\u65e5",lll:"YYYY\u5e74M\u6708D\u65e5 HH:mm",llll:"YYYY\u5e74M\u6708D\u65e5 HH:mm dddd"},meridiemParse:/\u5348\u524d|\u5348\u5f8c/i,isPM:function(e){return"\u5348\u5f8c"===e},meridiem:function(e,a,t){return e<12?"\u5348\u524d":"\u5348\u5f8c"},calendar:{sameDay:"[\u4eca\u65e5] LT",nextDay:"[\u660e\u65e5] LT",nextWeek:"[\u6765\u9031]dddd LT",lastDay:"[\u6628\u65e5] LT",lastWeek:"[\u524d\u9031]dddd LT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}\u65e5/,ordinal:function(e,a){switch(a){case"d":case"D":case"DDD":return e+"\u65e5";default:return e}},relativeTime:{future:"%s\u5f8c",past:"%s\u524d",s:"\u6570\u79d2",m:"1\u5206",mm:"%d\u5206",h:"1\u6642\u9593",hh:"%d\u6642\u9593",d:"1\u65e5",dd:"%d\u65e5",M:"1\u30f6\u6708",MM:"%d\u30f6\u6708",y:"1\u5e74",yy:"%d\u5e74"}}),e.defineLocale("jv",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),weekdays:"Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),weekdaysShort:"Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/enjing|siyang|sonten|ndalu/,meridiemHour:function(e,a){return 12===e&&(e=0),"enjing"===a?e:"siyang"===a?e>=11?e:e+12:"sonten"===a||"ndalu"===a?e+12:void 0},meridiem:function(e,a,t){return e<11?"enjing":e<15?"siyang":e<19?"sonten":"ndalu"},calendar:{sameDay:"[Dinten puniko pukul] LT",nextDay:"[Mbenjang pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kala wingi pukul] LT",lastWeek:"dddd [kepengker pukul] LT",sameElse:"L"},relativeTime:{future:"wonten ing %s",past:"%s ingkang kepengker",s:"sawetawis detik",m:"setunggal menit",mm:"%d menit",h:"setunggal jam",hh:"%d jam",d:"sedinten",dd:"%d dinten",M:"sewulan",MM:"%d wulan",y:"setaun",yy:"%d taun"},week:{dow:1,doy:7}}),e.defineLocale("ka",{months:{standalone:"\u10d8\u10d0\u10dc\u10d5\u10d0\u10e0\u10d8_\u10d7\u10d4\u10d1\u10d4\u10e0\u10d5\u10d0\u10da\u10d8_\u10db\u10d0\u10e0\u10e2\u10d8_\u10d0\u10de\u10e0\u10d8\u10da\u10d8_\u10db\u10d0\u10d8\u10e1\u10d8_\u10d8\u10d5\u10dc\u10d8\u10e1\u10d8_\u10d8\u10d5\u10da\u10d8\u10e1\u10d8_\u10d0\u10d2\u10d5\u10d8\u10e1\u10e2\u10dd_\u10e1\u10d4\u10e5\u10e2\u10d4\u10db\u10d1\u10d4\u10e0\u10d8_\u10dd\u10e5\u10e2\u10dd\u10db\u10d1\u10d4\u10e0\u10d8_\u10dc\u10dd\u10d4\u10db\u10d1\u10d4\u10e0\u10d8_\u10d3\u10d4\u10d9\u10d4\u10db\u10d1\u10d4\u10e0\u10d8".split("_"),format:"\u10d8\u10d0\u10dc\u10d5\u10d0\u10e0\u10e1_\u10d7\u10d4\u10d1\u10d4\u10e0\u10d5\u10d0\u10da\u10e1_\u10db\u10d0\u10e0\u10e2\u10e1_\u10d0\u10de\u10e0\u10d8\u10da\u10d8\u10e1_\u10db\u10d0\u10d8\u10e1\u10e1_\u10d8\u10d5\u10dc\u10d8\u10e1\u10e1_\u10d8\u10d5\u10da\u10d8\u10e1\u10e1_\u10d0\u10d2\u10d5\u10d8\u10e1\u10e2\u10e1_\u10e1\u10d4\u10e5\u10e2\u10d4\u10db\u10d1\u10d4\u10e0\u10e1_\u10dd\u10e5\u10e2\u10dd\u10db\u10d1\u10d4\u10e0\u10e1_\u10dc\u10dd\u10d4\u10db\u10d1\u10d4\u10e0\u10e1_\u10d3\u10d4\u10d9\u10d4\u10db\u10d1\u10d4\u10e0\u10e1".split("_")},monthsShort:"\u10d8\u10d0\u10dc_\u10d7\u10d4\u10d1_\u10db\u10d0\u10e0_\u10d0\u10de\u10e0_\u10db\u10d0\u10d8_\u10d8\u10d5\u10dc_\u10d8\u10d5\u10da_\u10d0\u10d2\u10d5_\u10e1\u10d4\u10e5_\u10dd\u10e5\u10e2_\u10dc\u10dd\u10d4_\u10d3\u10d4\u10d9".split("_"),weekdays:{standalone:"\u10d9\u10d5\u10d8\u10e0\u10d0_\u10dd\u10e0\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10e1\u10d0\u10db\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10dd\u10d7\u10ee\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10ee\u10e3\u10d7\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10de\u10d0\u10e0\u10d0\u10e1\u10d9\u10d4\u10d5\u10d8_\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8".split("_"),format:"\u10d9\u10d5\u10d8\u10e0\u10d0\u10e1_\u10dd\u10e0\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10e1\u10d0\u10db\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10dd\u10d7\u10ee\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10ee\u10e3\u10d7\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1_\u10de\u10d0\u10e0\u10d0\u10e1\u10d9\u10d4\u10d5\u10e1_\u10e8\u10d0\u10d1\u10d0\u10d7\u10e1".split("_"),isFormat:/(\u10ec\u10d8\u10dc\u10d0|\u10e8\u10d4\u10db\u10d3\u10d4\u10d2)/},weekdaysShort:"\u10d9\u10d5\u10d8_\u10dd\u10e0\u10e8_\u10e1\u10d0\u10db_\u10dd\u10d7\u10ee_\u10ee\u10e3\u10d7_\u10de\u10d0\u10e0_\u10e8\u10d0\u10d1".split("_"),weekdaysMin:"\u10d9\u10d5_\u10dd\u10e0_\u10e1\u10d0_\u10dd\u10d7_\u10ee\u10e3_\u10de\u10d0_\u10e8\u10d0".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[\u10d3\u10e6\u10d4\u10e1] LT[-\u10d6\u10d4]",nextDay:"[\u10ee\u10d5\u10d0\u10da] LT[-\u10d6\u10d4]",lastDay:"[\u10d2\u10e3\u10e8\u10d8\u10dc] LT[-\u10d6\u10d4]",nextWeek:"[\u10e8\u10d4\u10db\u10d3\u10d4\u10d2] dddd LT[-\u10d6\u10d4]",lastWeek:"[\u10ec\u10d8\u10dc\u10d0] dddd LT-\u10d6\u10d4",sameElse:"L"},relativeTime:{future:function(e){return/(\u10ec\u10d0\u10db\u10d8|\u10ec\u10e3\u10d7\u10d8|\u10e1\u10d0\u10d0\u10d7\u10d8|\u10ec\u10d4\u10da\u10d8)/.test(e)?e.replace(/\u10d8$/,"\u10e8\u10d8"):e+"\u10e8\u10d8"},past:function(e){return/(\u10ec\u10d0\u10db\u10d8|\u10ec\u10e3\u10d7\u10d8|\u10e1\u10d0\u10d0\u10d7\u10d8|\u10d3\u10e6\u10d4|\u10d7\u10d5\u10d4)/.test(e)?e.replace(/(\u10d8|\u10d4)$/,"\u10d8\u10e1 \u10e3\u10d9\u10d0\u10dc"):/\u10ec\u10d4\u10da\u10d8/.test(e)?e.replace(/\u10ec\u10d4\u10da\u10d8$/,"\u10ec\u10da\u10d8\u10e1 \u10e3\u10d9\u10d0\u10dc"):void 0},s:"\u10e0\u10d0\u10db\u10d3\u10d4\u10dc\u10d8\u10db\u10d4 \u10ec\u10d0\u10db\u10d8",m:"\u10ec\u10e3\u10d7\u10d8",mm:"%d \u10ec\u10e3\u10d7\u10d8",h:"\u10e1\u10d0\u10d0\u10d7\u10d8",hh:"%d \u10e1\u10d0\u10d0\u10d7\u10d8",d:"\u10d3\u10e6\u10d4",dd:"%d \u10d3\u10e6\u10d4",M:"\u10d7\u10d5\u10d4",MM:"%d \u10d7\u10d5\u10d4",y:"\u10ec\u10d4\u10da\u10d8",yy:"%d \u10ec\u10d4\u10da\u10d8"},dayOfMonthOrdinalParse:/0|1-\u10da\u10d8|\u10db\u10d4-\d{1,2}|\d{1,2}-\u10d4/,ordinal:function(e){return 0===e?e:1===e?e+"-\u10da\u10d8":e<20||e<=100&&e%20==0||e%100==0?"\u10db\u10d4-"+e:e+"-\u10d4"},week:{dow:1,doy:7}});var ur={0:"-\u0448\u0456",1:"-\u0448\u0456",2:"-\u0448\u0456",3:"-\u0448\u0456",4:"-\u0448\u0456",5:"-\u0448\u0456",6:"-\u0448\u044b",7:"-\u0448\u0456",8:"-\u0448\u0456",9:"-\u0448\u044b",10:"-\u0448\u044b",20:"-\u0448\u044b",30:"-\u0448\u044b",40:"-\u0448\u044b",50:"-\u0448\u0456",60:"-\u0448\u044b",70:"-\u0448\u0456",80:"-\u0448\u0456",90:"-\u0448\u044b",100:"-\u0448\u0456"};e.defineLocale("kk",{months:"\u049b\u0430\u04a3\u0442\u0430\u0440_\u0430\u049b\u043f\u0430\u043d_\u043d\u0430\u0443\u0440\u044b\u0437_\u0441\u04d9\u0443\u0456\u0440_\u043c\u0430\u043c\u044b\u0440_\u043c\u0430\u0443\u0441\u044b\u043c_\u0448\u0456\u043b\u0434\u0435_\u0442\u0430\u043c\u044b\u0437_\u049b\u044b\u0440\u043a\u04af\u0439\u0435\u043a_\u049b\u0430\u0437\u0430\u043d_\u049b\u0430\u0440\u0430\u0448\u0430_\u0436\u0435\u043b\u0442\u043e\u049b\u0441\u0430\u043d".split("_"),monthsShort:"\u049b\u0430\u04a3_\u0430\u049b\u043f_\u043d\u0430\u0443_\u0441\u04d9\u0443_\u043c\u0430\u043c_\u043c\u0430\u0443_\u0448\u0456\u043b_\u0442\u0430\u043c_\u049b\u044b\u0440_\u049b\u0430\u0437_\u049b\u0430\u0440_\u0436\u0435\u043b".split("_"),weekdays:"\u0436\u0435\u043a\u0441\u0435\u043d\u0431\u0456_\u0434\u04af\u0439\u0441\u0435\u043d\u0431\u0456_\u0441\u0435\u0439\u0441\u0435\u043d\u0431\u0456_\u0441\u04d9\u0440\u0441\u0435\u043d\u0431\u0456_\u0431\u0435\u0439\u0441\u0435\u043d\u0431\u0456_\u0436\u04b1\u043c\u0430_\u0441\u0435\u043d\u0431\u0456".split("_"),weekdaysShort:"\u0436\u0435\u043a_\u0434\u04af\u0439_\u0441\u0435\u0439_\u0441\u04d9\u0440_\u0431\u0435\u0439_\u0436\u04b1\u043c_\u0441\u0435\u043d".split("_"),weekdaysMin:"\u0436\u043a_\u0434\u0439_\u0441\u0439_\u0441\u0440_\u0431\u0439_\u0436\u043c_\u0441\u043d".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[\u0411\u04af\u0433\u0456\u043d \u0441\u0430\u0493\u0430\u0442] LT",nextDay:"[\u0415\u0440\u0442\u0435\u04a3 \u0441\u0430\u0493\u0430\u0442] LT",nextWeek:"dddd [\u0441\u0430\u0493\u0430\u0442] LT",lastDay:"[\u041a\u0435\u0448\u0435 \u0441\u0430\u0493\u0430\u0442] LT",lastWeek:"[\u04e8\u0442\u043a\u0435\u043d \u0430\u043f\u0442\u0430\u043d\u044b\u04a3] dddd [\u0441\u0430\u0493\u0430\u0442] LT",sameElse:"L"},relativeTime:{future:"%s \u0456\u0448\u0456\u043d\u0434\u0435",past:"%s \u0431\u04b1\u0440\u044b\u043d",s:"\u0431\u0456\u0440\u043d\u0435\u0448\u0435 \u0441\u0435\u043a\u0443\u043d\u0434",m:"\u0431\u0456\u0440 \u043c\u0438\u043d\u0443\u0442",mm:"%d \u043c\u0438\u043d\u0443\u0442",h:"\u0431\u0456\u0440 \u0441\u0430\u0493\u0430\u0442",hh:"%d \u0441\u0430\u0493\u0430\u0442",d:"\u0431\u0456\u0440 \u043a\u04af\u043d",dd:"%d \u043a\u04af\u043d",M:"\u0431\u0456\u0440 \u0430\u0439",MM:"%d \u0430\u0439",y:"\u0431\u0456\u0440 \u0436\u044b\u043b",yy:"%d \u0436\u044b\u043b"},dayOfMonthOrdinalParse:/\d{1,2}-(\u0448\u0456|\u0448\u044b)/,ordinal:function(e){var a=e%10,t=e>=100?100:null;return e+(ur[e]||ur[a]||ur[t])},week:{dow:1,doy:7}}),e.defineLocale("km",{months:"\u1798\u1780\u179a\u17b6_\u1780\u17bb\u1798\u17d2\u1797\u17c8_\u1798\u17b8\u1793\u17b6_\u1798\u17c1\u179f\u17b6_\u17a7\u179f\u1797\u17b6_\u1798\u17b7\u1790\u17bb\u1793\u17b6_\u1780\u1780\u17d2\u1780\u178a\u17b6_\u179f\u17b8\u17a0\u17b6_\u1780\u1789\u17d2\u1789\u17b6_\u178f\u17bb\u179b\u17b6_\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6_\u1792\u17d2\u1793\u17bc".split("_"),monthsShort:"\u1798\u1780\u179a\u17b6_\u1780\u17bb\u1798\u17d2\u1797\u17c8_\u1798\u17b8\u1793\u17b6_\u1798\u17c1\u179f\u17b6_\u17a7\u179f\u1797\u17b6_\u1798\u17b7\u1790\u17bb\u1793\u17b6_\u1780\u1780\u17d2\u1780\u178a\u17b6_\u179f\u17b8\u17a0\u17b6_\u1780\u1789\u17d2\u1789\u17b6_\u178f\u17bb\u179b\u17b6_\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6_\u1792\u17d2\u1793\u17bc".split("_"),weekdays:"\u17a2\u17b6\u1791\u17b7\u178f\u17d2\u1799_\u1785\u17d0\u1793\u17d2\u1791_\u17a2\u1784\u17d2\u1782\u17b6\u179a_\u1796\u17bb\u1792_\u1796\u17d2\u179a\u17a0\u179f\u17d2\u1794\u178f\u17b7\u17cd_\u179f\u17bb\u1780\u17d2\u179a_\u179f\u17c5\u179a\u17cd".split("_"),weekdaysShort:"\u17a2\u17b6\u1791\u17b7\u178f\u17d2\u1799_\u1785\u17d0\u1793\u17d2\u1791_\u17a2\u1784\u17d2\u1782\u17b6\u179a_\u1796\u17bb\u1792_\u1796\u17d2\u179a\u17a0\u179f\u17d2\u1794\u178f\u17b7\u17cd_\u179f\u17bb\u1780\u17d2\u179a_\u179f\u17c5\u179a\u17cd".split("_"),weekdaysMin:"\u17a2\u17b6\u1791\u17b7\u178f\u17d2\u1799_\u1785\u17d0\u1793\u17d2\u1791_\u17a2\u1784\u17d2\u1782\u17b6\u179a_\u1796\u17bb\u1792_\u1796\u17d2\u179a\u17a0\u179f\u17d2\u1794\u178f\u17b7\u17cd_\u179f\u17bb\u1780\u17d2\u179a_\u179f\u17c5\u179a\u17cd".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[\u1790\u17d2\u1784\u17c3\u1793\u17c1\u17c7 \u1798\u17c9\u17c4\u1784] LT",nextDay:"[\u179f\u17d2\u17a2\u17c2\u1780 \u1798\u17c9\u17c4\u1784] LT",nextWeek:"dddd [\u1798\u17c9\u17c4\u1784] LT",lastDay:"[\u1798\u17d2\u179f\u17b7\u179b\u1798\u17b7\u1789 \u1798\u17c9\u17c4\u1784] LT",lastWeek:"dddd [\u179f\u1794\u17d2\u178f\u17b6\u17a0\u17cd\u1798\u17bb\u1793] [\u1798\u17c9\u17c4\u1784] LT",sameElse:"L"},relativeTime:{future:"%s\u1791\u17c0\u178f",past:"%s\u1798\u17bb\u1793",s:"\u1794\u17c9\u17bb\u1793\u17d2\u1798\u17b6\u1793\u179c\u17b7\u1793\u17b6\u1791\u17b8",m:"\u1798\u17bd\u1799\u1793\u17b6\u1791\u17b8",mm:"%d \u1793\u17b6\u1791\u17b8",h:"\u1798\u17bd\u1799\u1798\u17c9\u17c4\u1784",hh:"%d \u1798\u17c9\u17c4\u1784",d:"\u1798\u17bd\u1799\u1790\u17d2\u1784\u17c3",dd:"%d \u1790\u17d2\u1784\u17c3",M:"\u1798\u17bd\u1799\u1781\u17c2",MM:"%d \u1781\u17c2",y:"\u1798\u17bd\u1799\u1786\u17d2\u1793\u17b6\u17c6",yy:"%d \u1786\u17d2\u1793\u17b6\u17c6"},week:{dow:1,doy:4}});var lr={1:"\u0ce7",2:"\u0ce8",3:"\u0ce9",4:"\u0cea",5:"\u0ceb",6:"\u0cec",7:"\u0ced",8:"\u0cee",9:"\u0cef",0:"\u0ce6"},Mr={"\u0ce7":"1","\u0ce8":"2","\u0ce9":"3","\u0cea":"4","\u0ceb":"5","\u0cec":"6","\u0ced":"7","\u0cee":"8","\u0cef":"9","\u0ce6":"0"};e.defineLocale("kn",{months:"\u0c9c\u0ca8\u0cb5\u0cb0\u0cbf_\u0cab\u0cc6\u0cac\u0ccd\u0cb0\u0cb5\u0cb0\u0cbf_\u0cae\u0cbe\u0cb0\u0ccd\u0c9a\u0ccd_\u0c8f\u0caa\u0ccd\u0cb0\u0cbf\u0cb2\u0ccd_\u0cae\u0cc6\u0cd5_\u0c9c\u0cc2\u0ca8\u0ccd_\u0c9c\u0cc1\u0cb2\u0cc6\u0cd6_\u0c86\u0c97\u0cb8\u0ccd\u0c9f\u0ccd_\u0cb8\u0cc6\u0caa\u0ccd\u0c9f\u0cc6\u0c82\u0cac\u0cb0\u0ccd_\u0c85\u0c95\u0ccd\u0c9f\u0cc6\u0cc2\u0cd5\u0cac\u0cb0\u0ccd_\u0ca8\u0cb5\u0cc6\u0c82\u0cac\u0cb0\u0ccd_\u0ca1\u0cbf\u0cb8\u0cc6\u0c82\u0cac\u0cb0\u0ccd".split("_"),monthsShort:"\u0c9c\u0ca8_\u0cab\u0cc6\u0cac\u0ccd\u0cb0_\u0cae\u0cbe\u0cb0\u0ccd\u0c9a\u0ccd_\u0c8f\u0caa\u0ccd\u0cb0\u0cbf\u0cb2\u0ccd_\u0cae\u0cc6\u0cd5_\u0c9c\u0cc2\u0ca8\u0ccd_\u0c9c\u0cc1\u0cb2\u0cc6\u0cd6_\u0c86\u0c97\u0cb8\u0ccd\u0c9f\u0ccd_\u0cb8\u0cc6\u0caa\u0ccd\u0c9f\u0cc6\u0c82\u0cac_\u0c85\u0c95\u0ccd\u0c9f\u0cc6\u0cc2\u0cd5\u0cac_\u0ca8\u0cb5\u0cc6\u0c82\u0cac_\u0ca1\u0cbf\u0cb8\u0cc6\u0c82\u0cac".split("_"),monthsParseExact:!0,weekdays:"\u0cad\u0cbe\u0ca8\u0cc1\u0cb5\u0cbe\u0cb0_\u0cb8\u0cc6\u0cc2\u0cd5\u0cae\u0cb5\u0cbe\u0cb0_\u0cae\u0c82\u0c97\u0cb3\u0cb5\u0cbe\u0cb0_\u0cac\u0cc1\u0ca7\u0cb5\u0cbe\u0cb0_\u0c97\u0cc1\u0cb0\u0cc1\u0cb5\u0cbe\u0cb0_\u0cb6\u0cc1\u0c95\u0ccd\u0cb0\u0cb5\u0cbe\u0cb0_\u0cb6\u0ca8\u0cbf\u0cb5\u0cbe\u0cb0".split("_"),weekdaysShort:"\u0cad\u0cbe\u0ca8\u0cc1_\u0cb8\u0cc6\u0cc2\u0cd5\u0cae_\u0cae\u0c82\u0c97\u0cb3_\u0cac\u0cc1\u0ca7_\u0c97\u0cc1\u0cb0\u0cc1_\u0cb6\u0cc1\u0c95\u0ccd\u0cb0_\u0cb6\u0ca8\u0cbf".split("_"),weekdaysMin:"\u0cad\u0cbe_\u0cb8\u0cc6\u0cc2\u0cd5_\u0cae\u0c82_\u0cac\u0cc1_\u0c97\u0cc1_\u0cb6\u0cc1_\u0cb6".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[\u0c87\u0c82\u0ca6\u0cc1] LT",nextDay:"[\u0ca8\u0cbe\u0cb3\u0cc6] LT",nextWeek:"dddd, LT",lastDay:"[\u0ca8\u0cbf\u0ca8\u0ccd\u0ca8\u0cc6] LT",lastWeek:"[\u0c95\u0cc6\u0cc2\u0ca8\u0cc6\u0caf] dddd, LT",sameElse:"L"},relativeTime:{future:"%s \u0ca8\u0c82\u0ca4\u0cb0",past:"%s \u0cb9\u0cbf\u0c82\u0ca6\u0cc6",s:"\u0c95\u0cc6\u0cb2\u0cb5\u0cc1 \u0c95\u0ccd\u0cb7\u0ca3\u0c97\u0cb3\u0cc1",m:"\u0c92\u0c82\u0ca6\u0cc1 \u0ca8\u0cbf\u0cae\u0cbf\u0cb7",mm:"%d \u0ca8\u0cbf\u0cae\u0cbf\u0cb7",h:"\u0c92\u0c82\u0ca6\u0cc1 \u0c97\u0c82\u0c9f\u0cc6",hh:"%d \u0c97\u0c82\u0c9f\u0cc6",d:"\u0c92\u0c82\u0ca6\u0cc1 \u0ca6\u0cbf\u0ca8",dd:"%d \u0ca6\u0cbf\u0ca8",M:"\u0c92\u0c82\u0ca6\u0cc1 \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cc1",MM:"%d \u0ca4\u0cbf\u0c82\u0c97\u0cb3\u0cc1",y:"\u0c92\u0c82\u0ca6\u0cc1 \u0cb5\u0cb0\u0ccd\u0cb7",yy:"%d \u0cb5\u0cb0\u0ccd\u0cb7"},preparse:function(e){return e.replace(/[\u0ce7\u0ce8\u0ce9\u0cea\u0ceb\u0cec\u0ced\u0cee\u0cef\u0ce6]/g,function(e){return Mr[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return lr[e]})},meridiemParse:/\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf|\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6|\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8|\u0cb8\u0c82\u0c9c\u0cc6/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf"===a?e<4?e:e+12:"\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6"===a?e:"\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8"===a?e>=10?e:e+12:"\u0cb8\u0c82\u0c9c\u0cc6"===a?e+12:void 0},meridiem:function(e,a,t){return e<4?"\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf":e<10?"\u0cac\u0cc6\u0cb3\u0cbf\u0c97\u0ccd\u0c97\u0cc6":e<17?"\u0cae\u0ca7\u0ccd\u0caf\u0cbe\u0cb9\u0ccd\u0ca8":e<20?"\u0cb8\u0c82\u0c9c\u0cc6":"\u0cb0\u0cbe\u0ca4\u0ccd\u0cb0\u0cbf"},dayOfMonthOrdinalParse:/\d{1,2}(\u0ca8\u0cc6\u0cd5)/,ordinal:function(e){return e+"\u0ca8\u0cc6\u0cd5"},week:{dow:0,doy:6}}),e.defineLocale("ko",{months:"1\uc6d4_2\uc6d4_3\uc6d4_4\uc6d4_5\uc6d4_6\uc6d4_7\uc6d4_8\uc6d4_9\uc6d4_10\uc6d4_11\uc6d4_12\uc6d4".split("_"),monthsShort:"1\uc6d4_2\uc6d4_3\uc6d4_4\uc6d4_5\uc6d4_6\uc6d4_7\uc6d4_8\uc6d4_9\uc6d4_10\uc6d4_11\uc6d4_12\uc6d4".split("_"),weekdays:"\uc77c\uc694\uc77c_\uc6d4\uc694\uc77c_\ud654\uc694\uc77c_\uc218\uc694\uc77c_\ubaa9\uc694\uc77c_\uae08\uc694\uc77c_\ud1a0\uc694\uc77c".split("_"),weekdaysShort:"\uc77c_\uc6d4_\ud654_\uc218_\ubaa9_\uae08_\ud1a0".split("_"),weekdaysMin:"\uc77c_\uc6d4_\ud654_\uc218_\ubaa9_\uae08_\ud1a0".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"YYYY.MM.DD",LL:"YYYY\ub144 MMMM D\uc77c",LLL:"YYYY\ub144 MMMM D\uc77c A h:mm",LLLL:"YYYY\ub144 MMMM D\uc77c dddd A h:mm",l:"YYYY.MM.DD",ll:"YYYY\ub144 MMMM D\uc77c",lll:"YYYY\ub144 MMMM D\uc77c A h:mm",llll:"YYYY\ub144 MMMM D\uc77c dddd A h:mm"},calendar:{sameDay:"\uc624\ub298 LT",nextDay:"\ub0b4\uc77c LT",nextWeek:"dddd LT",lastDay:"\uc5b4\uc81c LT",lastWeek:"\uc9c0\ub09c\uc8fc dddd LT",sameElse:"L"},relativeTime:{future:"%s \ud6c4",past:"%s \uc804",s:"\uba87 \ucd08",ss:"%d\ucd08",m:"1\ubd84",mm:"%d\ubd84",h:"\ud55c \uc2dc\uac04",hh:"%d\uc2dc\uac04",d:"\ud558\ub8e8",dd:"%d\uc77c",M:"\ud55c \ub2ec",MM:"%d\ub2ec",y:"\uc77c \ub144",yy:"%d\ub144"},dayOfMonthOrdinalParse:/\d{1,2}(\uc77c|\uc6d4|\uc8fc)/,ordinal:function(e,a){switch(a){case"d":case"D":case"DDD":return e+"\uc77c";case"M":return e+"\uc6d4";case"w":case"W":return e+"\uc8fc";default:return e}},meridiemParse:/\uc624\uc804|\uc624\ud6c4/,isPM:function(e){return"\uc624\ud6c4"===e},meridiem:function(e,a,t){return e<12?"\uc624\uc804":"\uc624\ud6c4"}});var hr={0:"-\u0447\u04af",1:"-\u0447\u0438",2:"-\u0447\u0438",3:"-\u0447\u04af",4:"-\u0447\u04af",5:"-\u0447\u0438",6:"-\u0447\u044b",7:"-\u0447\u0438",8:"-\u0447\u0438",9:"-\u0447\u0443",10:"-\u0447\u0443",20:"-\u0447\u044b",30:"-\u0447\u0443",40:"-\u0447\u044b",50:"-\u0447\u04af",60:"-\u0447\u044b",70:"-\u0447\u0438",80:"-\u0447\u0438",90:"-\u0447\u0443",100:"-\u0447\u04af"};e.defineLocale("ky",{months:"\u044f\u043d\u0432\u0430\u0440\u044c_\u0444\u0435\u0432\u0440\u0430\u043b\u044c_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b\u044c_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c_\u043e\u043a\u0442\u044f\u0431\u0440\u044c_\u043d\u043e\u044f\u0431\u0440\u044c_\u0434\u0435\u043a\u0430\u0431\u0440\u044c".split("_"),monthsShort:"\u044f\u043d\u0432_\u0444\u0435\u0432_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433_\u0441\u0435\u043d_\u043e\u043a\u0442_\u043d\u043e\u044f_\u0434\u0435\u043a".split("_"),weekdays:"\u0416\u0435\u043a\u0448\u0435\u043c\u0431\u0438_\u0414\u04af\u0439\u0448\u04e9\u043c\u0431\u04af_\u0428\u0435\u0439\u0448\u0435\u043c\u0431\u0438_\u0428\u0430\u0440\u0448\u0435\u043c\u0431\u0438_\u0411\u0435\u0439\u0448\u0435\u043c\u0431\u0438_\u0416\u0443\u043c\u0430_\u0418\u0448\u0435\u043c\u0431\u0438".split("_"),weekdaysShort:"\u0416\u0435\u043a_\u0414\u04af\u0439_\u0428\u0435\u0439_\u0428\u0430\u0440_\u0411\u0435\u0439_\u0416\u0443\u043c_\u0418\u0448\u0435".split("_"),weekdaysMin:"\u0416\u043a_\u0414\u0439_\u0428\u0439_\u0428\u0440_\u0411\u0439_\u0416\u043c_\u0418\u0448".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[\u0411\u04af\u0433\u04af\u043d \u0441\u0430\u0430\u0442] LT",nextDay:"[\u042d\u0440\u0442\u0435\u04a3 \u0441\u0430\u0430\u0442] LT",nextWeek:"dddd [\u0441\u0430\u0430\u0442] LT",lastDay:"[\u041a\u0435\u0447\u0435 \u0441\u0430\u0430\u0442] LT",lastWeek:"[\u04e8\u0442\u043a\u0435\u043d \u0430\u043f\u0442\u0430\u043d\u044b\u043d] dddd [\u043a\u04af\u043d\u04af] [\u0441\u0430\u0430\u0442] LT",sameElse:"L"},relativeTime:{future:"%s \u0438\u0447\u0438\u043d\u0434\u0435",past:"%s \u043c\u0443\u0440\u0443\u043d",s:"\u0431\u0438\u0440\u043d\u0435\u0447\u0435 \u0441\u0435\u043a\u0443\u043d\u0434",m:"\u0431\u0438\u0440 \u043c\u04af\u043d\u04e9\u0442",mm:"%d \u043c\u04af\u043d\u04e9\u0442",h:"\u0431\u0438\u0440 \u0441\u0430\u0430\u0442",hh:"%d \u0441\u0430\u0430\u0442",d:"\u0431\u0438\u0440 \u043a\u04af\u043d",dd:"%d \u043a\u04af\u043d",M:"\u0431\u0438\u0440 \u0430\u0439",MM:"%d \u0430\u0439",y:"\u0431\u0438\u0440 \u0436\u044b\u043b",yy:"%d \u0436\u044b\u043b"},dayOfMonthOrdinalParse:/\d{1,2}-(\u0447\u0438|\u0447\u044b|\u0447\u04af|\u0447\u0443)/,ordinal:function(e){var a=e%10,t=e>=100?100:null;return e+(hr[e]||hr[a]||hr[t])},week:{dow:1,doy:7}}),e.defineLocale("lb",{months:"Januar_Februar_M\xe4erz_Abr\xebll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonndeg_M\xe9indeg_D\xebnschdeg_M\xebttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),weekdaysShort:"So._M\xe9._D\xeb._M\xeb._Do._Fr._Sa.".split("_"),weekdaysMin:"So_M\xe9_D\xeb_M\xeb_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm [Auer]",LTS:"H:mm:ss [Auer]",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm [Auer]",LLLL:"dddd, D. MMMM YYYY H:mm [Auer]"},calendar:{sameDay:"[Haut um] LT",sameElse:"L",nextDay:"[Muer um] LT",nextWeek:"dddd [um] LT",lastDay:"[G\xebschter um] LT",lastWeek:function(){switch(this.day()){case 2:case 4:return"[Leschten] dddd [um] LT";default:return"[Leschte] dddd [um] LT"}}},relativeTime:{future:function(e){return Ka(e.substr(0,e.indexOf(" ")))?"a "+e:"an "+e},past:function(e){return Ka(e.substr(0,e.indexOf(" ")))?"viru "+e:"virun "+e},s:"e puer Sekonnen",m:Va,mm:"%d Minutten",h:Va,hh:"%d Stonnen",d:Va,dd:"%d Deeg",M:Va,MM:"%d M\xe9int",y:Va,yy:"%d Joer"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),e.defineLocale("lo",{months:"\u0ea1\u0eb1\u0e87\u0e81\u0ead\u0e99_\u0e81\u0eb8\u0ea1\u0e9e\u0eb2_\u0ea1\u0eb5\u0e99\u0eb2_\u0ec0\u0ea1\u0eaa\u0eb2_\u0e9e\u0eb6\u0e94\u0eaa\u0eb0\u0e9e\u0eb2_\u0ea1\u0eb4\u0e96\u0eb8\u0e99\u0eb2_\u0e81\u0ecd\u0ea5\u0eb0\u0e81\u0ebb\u0e94_\u0eaa\u0eb4\u0e87\u0eab\u0eb2_\u0e81\u0eb1\u0e99\u0e8d\u0eb2_\u0e95\u0eb8\u0ea5\u0eb2_\u0e9e\u0eb0\u0e88\u0eb4\u0e81_\u0e97\u0eb1\u0e99\u0ea7\u0eb2".split("_"),monthsShort:"\u0ea1\u0eb1\u0e87\u0e81\u0ead\u0e99_\u0e81\u0eb8\u0ea1\u0e9e\u0eb2_\u0ea1\u0eb5\u0e99\u0eb2_\u0ec0\u0ea1\u0eaa\u0eb2_\u0e9e\u0eb6\u0e94\u0eaa\u0eb0\u0e9e\u0eb2_\u0ea1\u0eb4\u0e96\u0eb8\u0e99\u0eb2_\u0e81\u0ecd\u0ea5\u0eb0\u0e81\u0ebb\u0e94_\u0eaa\u0eb4\u0e87\u0eab\u0eb2_\u0e81\u0eb1\u0e99\u0e8d\u0eb2_\u0e95\u0eb8\u0ea5\u0eb2_\u0e9e\u0eb0\u0e88\u0eb4\u0e81_\u0e97\u0eb1\u0e99\u0ea7\u0eb2".split("_"),weekdays:"\u0ead\u0eb2\u0e97\u0eb4\u0e94_\u0e88\u0eb1\u0e99_\u0ead\u0eb1\u0e87\u0e84\u0eb2\u0e99_\u0e9e\u0eb8\u0e94_\u0e9e\u0eb0\u0eab\u0eb1\u0e94_\u0eaa\u0eb8\u0e81_\u0ec0\u0eaa\u0ebb\u0eb2".split("_"),weekdaysShort:"\u0e97\u0eb4\u0e94_\u0e88\u0eb1\u0e99_\u0ead\u0eb1\u0e87\u0e84\u0eb2\u0e99_\u0e9e\u0eb8\u0e94_\u0e9e\u0eb0\u0eab\u0eb1\u0e94_\u0eaa\u0eb8\u0e81_\u0ec0\u0eaa\u0ebb\u0eb2".split("_"),weekdaysMin:"\u0e97_\u0e88_\u0ead\u0e84_\u0e9e_\u0e9e\u0eab_\u0eaa\u0e81_\u0eaa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"\u0ea7\u0eb1\u0e99dddd D MMMM YYYY HH:mm"},meridiemParse:/\u0e95\u0ead\u0e99\u0ec0\u0e8a\u0ebb\u0ec9\u0eb2|\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87/,isPM:function(e){return"\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87"===e},meridiem:function(e,a,t){return e<12?"\u0e95\u0ead\u0e99\u0ec0\u0e8a\u0ebb\u0ec9\u0eb2":"\u0e95\u0ead\u0e99\u0ec1\u0ea5\u0e87"},calendar:{sameDay:"[\u0ea1\u0eb7\u0ec9\u0e99\u0eb5\u0ec9\u0ec0\u0ea7\u0ea5\u0eb2] LT",nextDay:"[\u0ea1\u0eb7\u0ec9\u0ead\u0eb7\u0ec8\u0e99\u0ec0\u0ea7\u0ea5\u0eb2] LT",nextWeek:"[\u0ea7\u0eb1\u0e99]dddd[\u0edc\u0ec9\u0eb2\u0ec0\u0ea7\u0ea5\u0eb2] LT",lastDay:"[\u0ea1\u0eb7\u0ec9\u0ea7\u0eb2\u0e99\u0e99\u0eb5\u0ec9\u0ec0\u0ea7\u0ea5\u0eb2] LT",lastWeek:"[\u0ea7\u0eb1\u0e99]dddd[\u0ec1\u0ea5\u0ec9\u0ea7\u0e99\u0eb5\u0ec9\u0ec0\u0ea7\u0ea5\u0eb2] LT",sameElse:"L"},relativeTime:{future:"\u0ead\u0eb5\u0e81 %s",past:"%s\u0e9c\u0ec8\u0eb2\u0e99\u0ea1\u0eb2",s:"\u0e9a\u0ecd\u0ec8\u0ec0\u0e97\u0ebb\u0ec8\u0eb2\u0ec3\u0e94\u0ea7\u0eb4\u0e99\u0eb2\u0e97\u0eb5",m:"1 \u0e99\u0eb2\u0e97\u0eb5",mm:"%d \u0e99\u0eb2\u0e97\u0eb5",h:"1 \u0e8a\u0ebb\u0ec8\u0ea7\u0ec2\u0ea1\u0e87",hh:"%d \u0e8a\u0ebb\u0ec8\u0ea7\u0ec2\u0ea1\u0e87",d:"1 \u0ea1\u0eb7\u0ec9",dd:"%d \u0ea1\u0eb7\u0ec9",M:"1 \u0ec0\u0e94\u0eb7\u0ead\u0e99",MM:"%d \u0ec0\u0e94\u0eb7\u0ead\u0e99",y:"1 \u0e9b\u0eb5",yy:"%d \u0e9b\u0eb5"},dayOfMonthOrdinalParse:/(\u0e97\u0eb5\u0ec8)\d{1,2}/,ordinal:function(e){return"\u0e97\u0eb5\u0ec8"+e}});var Lr={m:"minut\u0117_minut\u0117s_minut\u0119",mm:"minut\u0117s_minu\u010di\u0173_minutes",h:"valanda_valandos_valand\u0105",hh:"valandos_valand\u0173_valandas",d:"diena_dienos_dien\u0105",dd:"dienos_dien\u0173_dienas",M:"m\u0117nuo_m\u0117nesio_m\u0117nes\u012f",MM:"m\u0117nesiai_m\u0117nesi\u0173_m\u0117nesius",y:"metai_met\u0173_metus",yy:"metai_met\u0173_metus"};e.defineLocale("lt",{months:{format:"sausio_vasario_kovo_baland\u017eio_gegu\u017e\u0117s_bir\u017eelio_liepos_rugpj\u016b\u010dio_rugs\u0117jo_spalio_lapkri\u010dio_gruod\u017eio".split("_"),standalone:"sausis_vasaris_kovas_balandis_gegu\u017e\u0117_bir\u017eelis_liepa_rugpj\u016btis_rugs\u0117jis_spalis_lapkritis_gruodis".split("_"),isFormat:/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/},monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),weekdays:{format:"sekmadien\u012f_pirmadien\u012f_antradien\u012f_tre\u010diadien\u012f_ketvirtadien\u012f_penktadien\u012f_\u0161e\u0161tadien\u012f".split("_"),standalone:"sekmadienis_pirmadienis_antradienis_tre\u010diadienis_ketvirtadienis_penktadienis_\u0161e\u0161tadienis".split("_"),isFormat:/dddd HH:mm/},weekdaysShort:"Sek_Pir_Ant_Tre_Ket_Pen_\u0160e\u0161".split("_"),weekdaysMin:"S_P_A_T_K_Pn_\u0160".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},calendar:{sameDay:"[\u0160iandien] LT",nextDay:"[Rytoj] LT",nextWeek:"dddd LT",lastDay:"[Vakar] LT",lastWeek:"[Pra\u0117jus\u012f] dddd LT",sameElse:"L"},relativeTime:{future:"po %s",past:"prie\u0161 %s",s:function(e,a,t,n){return a?"kelios sekund\u0117s":n?"keli\u0173 sekund\u017ei\u0173":"kelias sekundes"},m:$a,mm:qa,h:$a,hh:qa,d:$a,dd:qa,M:$a,MM:qa,y:$a,yy:qa},dayOfMonthOrdinalParse:/\d{1,2}-oji/,ordinal:function(e){return e+"-oji"},week:{dow:1,doy:4}});var cr={m:"min\u016btes_min\u016bt\u0113m_min\u016bte_min\u016btes".split("_"),mm:"min\u016btes_min\u016bt\u0113m_min\u016bte_min\u016btes".split("_"),h:"stundas_stund\u0101m_stunda_stundas".split("_"),hh:"stundas_stund\u0101m_stunda_stundas".split("_"),d:"dienas_dien\u0101m_diena_dienas".split("_"),dd:"dienas_dien\u0101m_diena_dienas".split("_"),M:"m\u0113ne\u0161a_m\u0113ne\u0161iem_m\u0113nesis_m\u0113ne\u0161i".split("_"),MM:"m\u0113ne\u0161a_m\u0113ne\u0161iem_m\u0113nesis_m\u0113ne\u0161i".split("_"),y:"gada_gadiem_gads_gadi".split("_"),yy:"gada_gadiem_gads_gadi".split("_")};e.defineLocale("lv",{months:"janv\u0101ris_febru\u0101ris_marts_apr\u012blis_maijs_j\u016bnijs_j\u016blijs_augusts_septembris_oktobris_novembris_decembris".split("_"),monthsShort:"jan_feb_mar_apr_mai_j\u016bn_j\u016bl_aug_sep_okt_nov_dec".split("_"),weekdays:"sv\u0113tdiena_pirmdiena_otrdiena_tre\u0161diena_ceturtdiena_piektdiena_sestdiena".split("_"),weekdaysShort:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysMin:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY.",LL:"YYYY. [gada] D. MMMM",LLL:"YYYY. [gada] D. MMMM, HH:mm",LLLL:"YYYY. [gada] D. MMMM, dddd, HH:mm"},calendar:{sameDay:"[\u0160odien pulksten] LT",nextDay:"[R\u012bt pulksten] LT",nextWeek:"dddd [pulksten] LT",lastDay:"[Vakar pulksten] LT",lastWeek:"[Pag\u0101ju\u0161\u0101] dddd [pulksten] LT",sameElse:"L"},relativeTime:{future:"p\u0113c %s",past:"pirms %s",s:function(e,a){return a?"da\u017eas sekundes":"da\u017e\u0101m sekund\u0113m"},m:et,mm:Xa,h:et,hh:Xa,d:et,dd:Xa,M:et,MM:Xa,y:et,yy:Xa},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});var Yr={words:{m:["jedan minut","jednog minuta"],mm:["minut","minuta","minuta"],h:["jedan sat","jednog sata"],hh:["sat","sata","sati"],dd:["dan","dana","dana"],MM:["mjesec","mjeseca","mjeseci"],yy:["godina","godine","godina"]},correctGrammaticalCase:function(e,a){return 1===e?a[0]:e>=2&&e<=4?a[1]:a[2]},translate:function(e,a,t){var n=Yr.words[t];return 1===t.length?a?n[0]:n[1]:e+" "+Yr.correctGrammaticalCase(e,n)}};e.defineLocale("me",{months:"januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_\u010detvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._\u010det._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_\u010de_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sjutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[ju\u010de u] LT",lastWeek:function(){return["[pro\u0161le] [nedjelje] [u] LT","[pro\u0161log] [ponedjeljka] [u] LT","[pro\u0161log] [utorka] [u] LT","[pro\u0161le] [srijede] [u] LT","[pro\u0161log] [\u010detvrtka] [u] LT","[pro\u0161log] [petka] [u] LT","[pro\u0161le] [subote] [u] LT"][this.day()]},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"nekoliko sekundi",m:Yr.translate,mm:Yr.translate,h:Yr.translate,hh:Yr.translate,d:"dan",dd:Yr.translate,M:"mjesec",MM:Yr.translate,y:"godinu",yy:Yr.translate},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),e.defineLocale("mi",{months:"Kohi-t\u0101te_Hui-tanguru_Pout\u016b-te-rangi_Paenga-wh\u0101wh\u0101_Haratua_Pipiri_H\u014dngoingoi_Here-turi-k\u014dk\u0101_Mahuru_Whiringa-\u0101-nuku_Whiringa-\u0101-rangi_Hakihea".split("_"),monthsShort:"Kohi_Hui_Pou_Pae_Hara_Pipi_H\u014dngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),monthsRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,monthsStrictRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,monthsShortRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,monthsShortStrictRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,weekdays:"R\u0101tapu_Mane_T\u016brei_Wenerei_T\u0101ite_Paraire_H\u0101tarei".split("_"),weekdaysShort:"Ta_Ma_T\u016b_We_T\u0101i_Pa_H\u0101".split("_"),weekdaysMin:"Ta_Ma_T\u016b_We_T\u0101i_Pa_H\u0101".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [i] HH:mm",LLLL:"dddd, D MMMM YYYY [i] HH:mm"},calendar:{sameDay:"[i teie mahana, i] LT",nextDay:"[apopo i] LT",nextWeek:"dddd [i] LT",lastDay:"[inanahi i] LT",lastWeek:"dddd [whakamutunga i] LT",sameElse:"L"},relativeTime:{future:"i roto i %s",past:"%s i mua",s:"te h\u0113kona ruarua",m:"he meneti",mm:"%d meneti",h:"te haora",hh:"%d haora",d:"he ra",dd:"%d ra",M:"he marama",MM:"%d marama",y:"he tau",yy:"%d tau"},dayOfMonthOrdinalParse:/\d{1,2}\xba/,ordinal:"%d\xba",week:{dow:1,doy:4}}),e.defineLocale("mk",{months:"\u0458\u0430\u043d\u0443\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0438\u043b_\u043c\u0430\u0458_\u0458\u0443\u043d\u0438_\u0458\u0443\u043b\u0438_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438_\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438_\u043d\u043e\u0435\u043c\u0432\u0440\u0438_\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438".split("_"),monthsShort:"\u0458\u0430\u043d_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0458_\u0458\u0443\u043d_\u0458\u0443\u043b_\u0430\u0432\u0433_\u0441\u0435\u043f_\u043e\u043a\u0442_\u043d\u043e\u0435_\u0434\u0435\u043a".split("_"),weekdays:"\u043d\u0435\u0434\u0435\u043b\u0430_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0440\u0442\u043e\u043a_\u043f\u0435\u0442\u043e\u043a_\u0441\u0430\u0431\u043e\u0442\u0430".split("_"),weekdaysShort:"\u043d\u0435\u0434_\u043f\u043e\u043d_\u0432\u0442\u043e_\u0441\u0440\u0435_\u0447\u0435\u0442_\u043f\u0435\u0442_\u0441\u0430\u0431".split("_"),weekdaysMin:"\u043de_\u043fo_\u0432\u0442_\u0441\u0440_\u0447\u0435_\u043f\u0435_\u0441a".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[\u0414\u0435\u043d\u0435\u0441 \u0432\u043e] LT",nextDay:"[\u0423\u0442\u0440\u0435 \u0432\u043e] LT",nextWeek:"[\u0412\u043e] dddd [\u0432\u043e] LT",lastDay:"[\u0412\u0447\u0435\u0440\u0430 \u0432\u043e] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[\u0418\u0437\u043c\u0438\u043d\u0430\u0442\u0430\u0442\u0430] dddd [\u0432\u043e] LT";case 1:case 2:case 4:case 5:return"[\u0418\u0437\u043c\u0438\u043d\u0430\u0442\u0438\u043e\u0442] dddd [\u0432\u043e] LT"}},sameElse:"L"},relativeTime:{future:"\u043f\u043e\u0441\u043b\u0435 %s",past:"\u043f\u0440\u0435\u0434 %s",s:"\u043d\u0435\u043a\u043e\u043b\u043a\u0443 \u0441\u0435\u043a\u0443\u043d\u0434\u0438",m:"\u043c\u0438\u043d\u0443\u0442\u0430",mm:"%d \u043c\u0438\u043d\u0443\u0442\u0438",h:"\u0447\u0430\u0441",hh:"%d \u0447\u0430\u0441\u0430",d:"\u0434\u0435\u043d",dd:"%d \u0434\u0435\u043d\u0430",M:"\u043c\u0435\u0441\u0435\u0446",MM:"%d \u043c\u0435\u0441\u0435\u0446\u0438",y:"\u0433\u043e\u0434\u0438\u043d\u0430",yy:"%d \u0433\u043e\u0434\u0438\u043d\u0438"},dayOfMonthOrdinalParse:/\d{1,2}-(\u0435\u0432|\u0435\u043d|\u0442\u0438|\u0432\u0438|\u0440\u0438|\u043c\u0438)/,ordinal:function(e){var a=e%10,t=e%100;return 0===e?e+"-\u0435\u0432":0===t?e+"-\u0435\u043d":t>10&&t<20?e+"-\u0442\u0438":1===a?e+"-\u0432\u0438":2===a?e+"-\u0440\u0438":7===a||8===a?e+"-\u043c\u0438":e+"-\u0442\u0438"},week:{dow:1,doy:7}}),e.defineLocale("ml",{months:"\u0d1c\u0d28\u0d41\u0d35\u0d30\u0d3f_\u0d2b\u0d46\u0d2c\u0d4d\u0d30\u0d41\u0d35\u0d30\u0d3f_\u0d2e\u0d3e\u0d7c\u0d1a\u0d4d\u0d1a\u0d4d_\u0d0f\u0d2a\u0d4d\u0d30\u0d3f\u0d7d_\u0d2e\u0d47\u0d2f\u0d4d_\u0d1c\u0d42\u0d7a_\u0d1c\u0d42\u0d32\u0d48_\u0d13\u0d17\u0d38\u0d4d\u0d31\u0d4d\u0d31\u0d4d_\u0d38\u0d46\u0d2a\u0d4d\u0d31\u0d4d\u0d31\u0d02\u0d2c\u0d7c_\u0d12\u0d15\u0d4d\u0d1f\u0d4b\u0d2c\u0d7c_\u0d28\u0d35\u0d02\u0d2c\u0d7c_\u0d21\u0d3f\u0d38\u0d02\u0d2c\u0d7c".split("_"),monthsShort:"\u0d1c\u0d28\u0d41._\u0d2b\u0d46\u0d2c\u0d4d\u0d30\u0d41._\u0d2e\u0d3e\u0d7c._\u0d0f\u0d2a\u0d4d\u0d30\u0d3f._\u0d2e\u0d47\u0d2f\u0d4d_\u0d1c\u0d42\u0d7a_\u0d1c\u0d42\u0d32\u0d48._\u0d13\u0d17._\u0d38\u0d46\u0d2a\u0d4d\u0d31\u0d4d\u0d31._\u0d12\u0d15\u0d4d\u0d1f\u0d4b._\u0d28\u0d35\u0d02._\u0d21\u0d3f\u0d38\u0d02.".split("_"),monthsParseExact:!0,weekdays:"\u0d1e\u0d3e\u0d2f\u0d31\u0d3e\u0d34\u0d4d\u0d1a_\u0d24\u0d3f\u0d19\u0d4d\u0d15\u0d33\u0d3e\u0d34\u0d4d\u0d1a_\u0d1a\u0d4a\u0d35\u0d4d\u0d35\u0d3e\u0d34\u0d4d\u0d1a_\u0d2c\u0d41\u0d27\u0d28\u0d3e\u0d34\u0d4d\u0d1a_\u0d35\u0d4d\u0d2f\u0d3e\u0d34\u0d3e\u0d34\u0d4d\u0d1a_\u0d35\u0d46\u0d33\u0d4d\u0d33\u0d3f\u0d2f\u0d3e\u0d34\u0d4d\u0d1a_\u0d36\u0d28\u0d3f\u0d2f\u0d3e\u0d34\u0d4d\u0d1a".split("_"),weekdaysShort:"\u0d1e\u0d3e\u0d2f\u0d7c_\u0d24\u0d3f\u0d19\u0d4d\u0d15\u0d7e_\u0d1a\u0d4a\u0d35\u0d4d\u0d35_\u0d2c\u0d41\u0d27\u0d7b_\u0d35\u0d4d\u0d2f\u0d3e\u0d34\u0d02_\u0d35\u0d46\u0d33\u0d4d\u0d33\u0d3f_\u0d36\u0d28\u0d3f".split("_"),weekdaysMin:"\u0d1e\u0d3e_\u0d24\u0d3f_\u0d1a\u0d4a_\u0d2c\u0d41_\u0d35\u0d4d\u0d2f\u0d3e_\u0d35\u0d46_\u0d36".split("_"),longDateFormat:{LT:"A h:mm -\u0d28\u0d41",LTS:"A h:mm:ss -\u0d28\u0d41",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm -\u0d28\u0d41",LLLL:"dddd, D MMMM YYYY, A h:mm -\u0d28\u0d41"},calendar:{sameDay:"[\u0d07\u0d28\u0d4d\u0d28\u0d4d] LT",nextDay:"[\u0d28\u0d3e\u0d33\u0d46] LT",nextWeek:"dddd, LT",lastDay:"[\u0d07\u0d28\u0d4d\u0d28\u0d32\u0d46] LT",lastWeek:"[\u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e] dddd, LT",sameElse:"L"},relativeTime:{future:"%s \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d",past:"%s \u0d2e\u0d41\u0d7b\u0d2a\u0d4d",s:"\u0d05\u0d7d\u0d2a \u0d28\u0d3f\u0d2e\u0d3f\u0d37\u0d19\u0d4d\u0d19\u0d7e",m:"\u0d12\u0d30\u0d41 \u0d2e\u0d3f\u0d28\u0d3f\u0d31\u0d4d\u0d31\u0d4d",mm:"%d \u0d2e\u0d3f\u0d28\u0d3f\u0d31\u0d4d\u0d31\u0d4d",h:"\u0d12\u0d30\u0d41 \u0d2e\u0d23\u0d3f\u0d15\u0d4d\u0d15\u0d42\u0d7c",hh:"%d \u0d2e\u0d23\u0d3f\u0d15\u0d4d\u0d15\u0d42\u0d7c",d:"\u0d12\u0d30\u0d41 \u0d26\u0d3f\u0d35\u0d38\u0d02",dd:"%d \u0d26\u0d3f\u0d35\u0d38\u0d02",M:"\u0d12\u0d30\u0d41 \u0d2e\u0d3e\u0d38\u0d02",MM:"%d \u0d2e\u0d3e\u0d38\u0d02",y:"\u0d12\u0d30\u0d41 \u0d35\u0d7c\u0d37\u0d02",yy:"%d \u0d35\u0d7c\u0d37\u0d02"},meridiemParse:/\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f|\u0d30\u0d3e\u0d35\u0d3f\u0d32\u0d46|\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d|\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02|\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f/i,meridiemHour:function(e,a){return 12===e&&(e=0),"\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f"===a&&e>=4||"\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d"===a||"\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02"===a?e+12:e},meridiem:function(e,a,t){return e<4?"\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f":e<12?"\u0d30\u0d3e\u0d35\u0d3f\u0d32\u0d46":e<17?"\u0d09\u0d1a\u0d4d\u0d1a \u0d15\u0d34\u0d3f\u0d1e\u0d4d\u0d1e\u0d4d":e<20?"\u0d35\u0d48\u0d15\u0d41\u0d28\u0d4d\u0d28\u0d47\u0d30\u0d02":"\u0d30\u0d3e\u0d24\u0d4d\u0d30\u0d3f"}});var yr={1:"\u0967",2:"\u0968",3:"\u0969",4:"\u096a",5:"\u096b",6:"\u096c",7:"\u096d",8:"\u096e",9:"\u096f",0:"\u0966"},fr={"\u0967":"1","\u0968":"2","\u0969":"3","\u096a":"4","\u096b":"5","\u096c":"6","\u096d":"7","\u096e":"8","\u096f":"9","\u0966":"0"};e.defineLocale("mr",{months:"\u091c\u093e\u0928\u0947\u0935\u093e\u0930\u0940_\u092b\u0947\u092c\u094d\u0930\u0941\u0935\u093e\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u090f\u092a\u094d\u0930\u093f\u0932_\u092e\u0947_\u091c\u0942\u0928_\u091c\u0941\u0932\u0948_\u0911\u0917\u0938\u094d\u091f_\u0938\u092a\u094d\u091f\u0947\u0902\u092c\u0930_\u0911\u0915\u094d\u091f\u094b\u092c\u0930_\u0928\u094b\u0935\u094d\u0939\u0947\u0902\u092c\u0930_\u0921\u093f\u0938\u0947\u0902\u092c\u0930".split("_"),monthsShort:"\u091c\u093e\u0928\u0947._\u092b\u0947\u092c\u094d\u0930\u0941._\u092e\u093e\u0930\u094d\u091a._\u090f\u092a\u094d\u0930\u093f._\u092e\u0947._\u091c\u0942\u0928._\u091c\u0941\u0932\u0948._\u0911\u0917._\u0938\u092a\u094d\u091f\u0947\u0902._\u0911\u0915\u094d\u091f\u094b._\u0928\u094b\u0935\u094d\u0939\u0947\u0902._\u0921\u093f\u0938\u0947\u0902.".split("_"),monthsParseExact:!0,weekdays:"\u0930\u0935\u093f\u0935\u093e\u0930_\u0938\u094b\u092e\u0935\u093e\u0930_\u092e\u0902\u0917\u0933\u0935\u093e\u0930_\u092c\u0941\u0927\u0935\u093e\u0930_\u0917\u0941\u0930\u0942\u0935\u093e\u0930_\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930_\u0936\u0928\u093f\u0935\u093e\u0930".split("_"),weekdaysShort:"\u0930\u0935\u093f_\u0938\u094b\u092e_\u092e\u0902\u0917\u0933_\u092c\u0941\u0927_\u0917\u0941\u0930\u0942_\u0936\u0941\u0915\u094d\u0930_\u0936\u0928\u093f".split("_"),weekdaysMin:"\u0930_\u0938\u094b_\u092e\u0902_\u092c\u0941_\u0917\u0941_\u0936\u0941_\u0936".split("_"),longDateFormat:{LT:"A h:mm \u0935\u093e\u091c\u0924\u093e",LTS:"A h:mm:ss \u0935\u093e\u091c\u0924\u093e",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm \u0935\u093e\u091c\u0924\u093e",LLLL:"dddd, D MMMM YYYY, A h:mm \u0935\u093e\u091c\u0924\u093e"},calendar:{sameDay:"[\u0906\u091c] LT",nextDay:"[\u0909\u0926\u094d\u092f\u093e] LT",nextWeek:"dddd, LT",lastDay:"[\u0915\u093e\u0932] LT",lastWeek:"[\u092e\u093e\u0917\u0940\u0932] dddd, LT",sameElse:"L"},relativeTime:{future:"%s\u092e\u0927\u094d\u092f\u0947",past:"%s\u092a\u0942\u0930\u094d\u0935\u0940",s:at,m:at,mm:at,h:at,hh:at,d:at,dd:at,M:at,MM:at,y:at,yy:at},preparse:function(e){return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g,function(e){return fr[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return yr[e]})},meridiemParse:/\u0930\u093e\u0924\u094d\u0930\u0940|\u0938\u0915\u093e\u0933\u0940|\u0926\u0941\u092a\u093e\u0930\u0940|\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u0930\u093e\u0924\u094d\u0930\u0940"===a?e<4?e:e+12:"\u0938\u0915\u093e\u0933\u0940"===a?e:"\u0926\u0941\u092a\u093e\u0930\u0940"===a?e>=10?e:e+12:"\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940"===a?e+12:void 0},meridiem:function(e,a,t){return e<4?"\u0930\u093e\u0924\u094d\u0930\u0940":e<10?"\u0938\u0915\u093e\u0933\u0940":e<17?"\u0926\u0941\u092a\u093e\u0930\u0940":e<20?"\u0938\u093e\u092f\u0902\u0915\u093e\u0933\u0940":"\u0930\u093e\u0924\u094d\u0930\u0940"},week:{dow:0,doy:6}}),e.defineLocale("ms-my",{months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|tengahari|petang|malam/,meridiemHour:function(e,a){return 12===e&&(e=0),"pagi"===a?e:"tengahari"===a?e>=11?e:e+12:"petang"===a||"malam"===a?e+12:void 0},meridiem:function(e,a,t){return e<11?"pagi":e<15?"tengahari":e<19?"petang":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Esok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kelmarin pukul] LT",lastWeek:"dddd [lepas pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}}),e.defineLocale("ms",{months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|tengahari|petang|malam/,meridiemHour:function(e,a){return 12===e&&(e=0),"pagi"===a?e:"tengahari"===a?e>=11?e:e+12:"petang"===a||"malam"===a?e+12:void 0},meridiem:function(e,a,t){return e<11?"pagi":e<15?"tengahari":e<19?"petang":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Esok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kelmarin pukul] LT",lastWeek:"dddd [lepas pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}});var pr={1:"\u1041",2:"\u1042",3:"\u1043",4:"\u1044",5:"\u1045",6:"\u1046",7:"\u1047",8:"\u1048",9:"\u1049",0:"\u1040"},kr={"\u1041":"1","\u1042":"2","\u1043":"3","\u1044":"4","\u1045":"5","\u1046":"6","\u1047":"7","\u1048":"8","\u1049":"9","\u1040":"0"};e.defineLocale("my",{months:"\u1007\u1014\u103a\u1014\u101d\u102b\u101b\u102e_\u1016\u1031\u1016\u1031\u102c\u103a\u101d\u102b\u101b\u102e_\u1019\u1010\u103a_\u1027\u1015\u103c\u102e_\u1019\u1031_\u1007\u103d\u1014\u103a_\u1007\u1030\u101c\u102d\u102f\u1004\u103a_\u101e\u103c\u1002\u102f\u1010\u103a_\u1005\u1000\u103a\u1010\u1004\u103a\u1018\u102c_\u1021\u1031\u102c\u1000\u103a\u1010\u102d\u102f\u1018\u102c_\u1014\u102d\u102f\u101d\u1004\u103a\u1018\u102c_\u1012\u102e\u1007\u1004\u103a\u1018\u102c".split("_"),monthsShort:"\u1007\u1014\u103a_\u1016\u1031_\u1019\u1010\u103a_\u1015\u103c\u102e_\u1019\u1031_\u1007\u103d\u1014\u103a_\u101c\u102d\u102f\u1004\u103a_\u101e\u103c_\u1005\u1000\u103a_\u1021\u1031\u102c\u1000\u103a_\u1014\u102d\u102f_\u1012\u102e".split("_"),weekdays:"\u1010\u1014\u1004\u103a\u1039\u1002\u1014\u103d\u1031_\u1010\u1014\u1004\u103a\u1039\u101c\u102c_\u1021\u1004\u103a\u1039\u1002\u102b_\u1017\u102f\u1012\u1039\u1013\u101f\u1030\u1038_\u1000\u103c\u102c\u101e\u1015\u1010\u1031\u1038_\u101e\u1031\u102c\u1000\u103c\u102c_\u1005\u1014\u1031".split("_"),weekdaysShort:"\u1014\u103d\u1031_\u101c\u102c_\u1002\u102b_\u101f\u1030\u1038_\u1000\u103c\u102c_\u101e\u1031\u102c_\u1014\u1031".split("_"),weekdaysMin:"\u1014\u103d\u1031_\u101c\u102c_\u1002\u102b_\u101f\u1030\u1038_\u1000\u103c\u102c_\u101e\u1031\u102c_\u1014\u1031".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[\u101a\u1014\u1031.] LT [\u1019\u103e\u102c]",nextDay:"[\u1019\u1014\u1000\u103a\u1016\u103c\u1014\u103a] LT [\u1019\u103e\u102c]",nextWeek:"dddd LT [\u1019\u103e\u102c]",lastDay:"[\u1019\u1014\u1031.\u1000] LT [\u1019\u103e\u102c]",lastWeek:"[\u1015\u103c\u102e\u1038\u1001\u1032\u1037\u101e\u1031\u102c] dddd LT [\u1019\u103e\u102c]",sameElse:"L"},relativeTime:{future:"\u101c\u102c\u1019\u100a\u103a\u1037 %s \u1019\u103e\u102c",past:"\u101c\u103d\u1014\u103a\u1001\u1032\u1037\u101e\u1031\u102c %s \u1000",s:"\u1005\u1000\u1039\u1000\u1014\u103a.\u1021\u1014\u100a\u103a\u1038\u1004\u101a\u103a",m:"\u1010\u1005\u103a\u1019\u102d\u1014\u1005\u103a",mm:"%d \u1019\u102d\u1014\u1005\u103a",h:"\u1010\u1005\u103a\u1014\u102c\u101b\u102e",hh:"%d \u1014\u102c\u101b\u102e",d:"\u1010\u1005\u103a\u101b\u1000\u103a",dd:"%d \u101b\u1000\u103a",M:"\u1010\u1005\u103a\u101c",MM:"%d \u101c",y:"\u1010\u1005\u103a\u1014\u103e\u1005\u103a",yy:"%d \u1014\u103e\u1005\u103a"},preparse:function(e){return e.replace(/[\u1041\u1042\u1043\u1044\u1045\u1046\u1047\u1048\u1049\u1040]/g,function(e){return kr[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return pr[e]})},week:{dow:1,doy:4}}),e.defineLocale("nb",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),monthsParseExact:!0,weekdays:"s\xf8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xf8rdag".split("_"),weekdaysShort:"s\xf8._ma._ti._on._to._fr._l\xf8.".split("_"),weekdaysMin:"s\xf8_ma_ti_on_to_fr_l\xf8".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[i dag kl.] LT",nextDay:"[i morgen kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[i g\xe5r kl.] LT",lastWeek:"[forrige] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en m\xe5ned",MM:"%d m\xe5neder",y:"ett \xe5r",yy:"%d \xe5r"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});var Dr={1:"\u0967",2:"\u0968",3:"\u0969",4:"\u096a",5:"\u096b",6:"\u096c",7:"\u096d",8:"\u096e",9:"\u096f",0:"\u0966"},Tr={"\u0967":"1","\u0968":"2","\u0969":"3","\u096a":"4","\u096b":"5","\u096c":"6","\u096d":"7","\u096e":"8","\u096f":"9","\u0966":"0"};e.defineLocale("ne",{months:"\u091c\u0928\u0935\u0930\u0940_\u092b\u0947\u092c\u094d\u0930\u0941\u0935\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u093f\u0932_\u092e\u0908_\u091c\u0941\u0928_\u091c\u0941\u0932\u093e\u0908_\u0905\u0917\u0937\u094d\u091f_\u0938\u0947\u092a\u094d\u091f\u0947\u092e\u094d\u092c\u0930_\u0905\u0915\u094d\u091f\u094b\u092c\u0930_\u0928\u094b\u092d\u0947\u092e\u094d\u092c\u0930_\u0921\u093f\u0938\u0947\u092e\u094d\u092c\u0930".split("_"),monthsShort:"\u091c\u0928._\u092b\u0947\u092c\u094d\u0930\u0941._\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u093f._\u092e\u0908_\u091c\u0941\u0928_\u091c\u0941\u0932\u093e\u0908._\u0905\u0917._\u0938\u0947\u092a\u094d\u091f._\u0905\u0915\u094d\u091f\u094b._\u0928\u094b\u092d\u0947._\u0921\u093f\u0938\u0947.".split("_"),monthsParseExact:!0,weekdays:"\u0906\u0907\u0924\u092c\u093e\u0930_\u0938\u094b\u092e\u092c\u093e\u0930_\u092e\u0919\u094d\u0917\u0932\u092c\u093e\u0930_\u092c\u0941\u0927\u092c\u093e\u0930_\u092c\u093f\u0939\u093f\u092c\u093e\u0930_\u0936\u0941\u0915\u094d\u0930\u092c\u093e\u0930_\u0936\u0928\u093f\u092c\u093e\u0930".split("_"),weekdaysShort:"\u0906\u0907\u0924._\u0938\u094b\u092e._\u092e\u0919\u094d\u0917\u0932._\u092c\u0941\u0927._\u092c\u093f\u0939\u093f._\u0936\u0941\u0915\u094d\u0930._\u0936\u0928\u093f.".split("_"),weekdaysMin:"\u0906._\u0938\u094b._\u092e\u0902._\u092c\u0941._\u092c\u093f._\u0936\u0941._\u0936.".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"A\u0915\u094b h:mm \u092c\u091c\u0947",LTS:"A\u0915\u094b h:mm:ss \u092c\u091c\u0947",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A\u0915\u094b h:mm \u092c\u091c\u0947",LLLL:"dddd, D MMMM YYYY, A\u0915\u094b h:mm \u092c\u091c\u0947"},preparse:function(e){return e.replace(/[\u0967\u0968\u0969\u096a\u096b\u096c\u096d\u096e\u096f\u0966]/g,function(e){return Tr[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return Dr[e]})},meridiemParse:/\u0930\u093e\u0924\u093f|\u092c\u093f\u0939\u093e\u0928|\u0926\u093f\u0909\u0901\u0938\u094b|\u0938\u093e\u0901\u091d/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u0930\u093e\u0924\u093f"===a?e<4?e:e+12:"\u092c\u093f\u0939\u093e\u0928"===a?e:"\u0926\u093f\u0909\u0901\u0938\u094b"===a?e>=10?e:e+12:"\u0938\u093e\u0901\u091d"===a?e+12:void 0},meridiem:function(e,a,t){return e<3?"\u0930\u093e\u0924\u093f":e<12?"\u092c\u093f\u0939\u093e\u0928":e<16?"\u0926\u093f\u0909\u0901\u0938\u094b":e<20?"\u0938\u093e\u0901\u091d":"\u0930\u093e\u0924\u093f"},calendar:{sameDay:"[\u0906\u091c] LT",nextDay:"[\u092d\u094b\u0932\u093f] LT",nextWeek:"[\u0906\u0909\u0901\u0926\u094b] dddd[,] LT",lastDay:"[\u0939\u093f\u091c\u094b] LT",lastWeek:"[\u0917\u090f\u0915\u094b] dddd[,] LT",sameElse:"L"},relativeTime:{future:"%s\u092e\u093e",past:"%s \u0905\u0917\u093e\u0921\u093f",s:"\u0915\u0947\u0939\u0940 \u0915\u094d\u0937\u0923",m:"\u090f\u0915 \u092e\u093f\u0928\u0947\u091f",mm:"%d \u092e\u093f\u0928\u0947\u091f",h:"\u090f\u0915 \u0918\u0923\u094d\u091f\u093e",hh:"%d \u0918\u0923\u094d\u091f\u093e",d:"\u090f\u0915 \u0926\u093f\u0928",dd:"%d \u0926\u093f\u0928",M:"\u090f\u0915 \u092e\u0939\u093f\u0928\u093e",MM:"%d \u092e\u0939\u093f\u0928\u093e",y:"\u090f\u0915 \u092c\u0930\u094d\u0937",yy:"%d \u092c\u0930\u094d\u0937"},week:{dow:0,doy:6}});var gr="jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),wr="jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),vr=[/^jan/i,/^feb/i,/^maart|mrt.?$/i,/^apr/i,/^mei$/i,/^jun[i.]?$/i,/^jul[i.]?$/i,/^aug/i,/^sep/i,/^okt/i,/^nov/i,/^dec/i],Sr=/^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;e.defineLocale("nl-be",{months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:function(e,a){return e?/-MMM-/.test(a)?wr[e.month()]:gr[e.month()]:gr},monthsRegex:Sr,monthsShortRegex:Sr,monthsStrictRegex:/^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,monthsShortStrictRegex:/^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,monthsParse:vr,longMonthsParse:vr,shortMonthsParse:vr,weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"zo_ma_di_wo_do_vr_za".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[vandaag om] LT",nextDay:"[morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",m:"\xe9\xe9n minuut",mm:"%d minuten",h:"\xe9\xe9n uur",hh:"%d uur",d:"\xe9\xe9n dag",dd:"%d dagen",M:"\xe9\xe9n maand",MM:"%d maanden",y:"\xe9\xe9n jaar",yy:"%d jaar"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}});var Hr="jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),br="jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),jr=[/^jan/i,/^feb/i,/^maart|mrt.?$/i,/^apr/i,/^mei$/i,/^jun[i.]?$/i,/^jul[i.]?$/i,/^aug/i,/^sep/i,/^okt/i,/^nov/i,/^dec/i],xr=/^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;e.defineLocale("nl",{months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:function(e,a){return e?/-MMM-/.test(a)?br[e.month()]:Hr[e.month()]:Hr},monthsRegex:xr,monthsShortRegex:xr,monthsStrictRegex:/^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,monthsShortStrictRegex:/^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,monthsParse:jr,longMonthsParse:jr,shortMonthsParse:jr,weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"zo_ma_di_wo_do_vr_za".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[vandaag om] LT",nextDay:"[morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",m:"\xe9\xe9n minuut",mm:"%d minuten",h:"\xe9\xe9n uur",hh:"%d uur",d:"\xe9\xe9n dag",dd:"%d dagen",M:"\xe9\xe9n maand",MM:"%d maanden",y:"\xe9\xe9n jaar",yy:"%d jaar"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}}),e.defineLocale("nn",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sundag_m\xe5ndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),weekdaysShort:"sun_m\xe5n_tys_ons_tor_fre_lau".split("_"),weekdaysMin:"su_m\xe5_ty_on_to_fr_l\xf8".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[I dag klokka] LT",nextDay:"[I morgon klokka] LT",nextWeek:"dddd [klokka] LT",lastDay:"[I g\xe5r klokka] LT",lastWeek:"[F\xf8reg\xe5ande] dddd [klokka] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s sidan",s:"nokre sekund",m:"eit minutt",mm:"%d minutt",h:"ein time",hh:"%d timar",d:"ein dag",dd:"%d dagar",M:"ein m\xe5nad",MM:"%d m\xe5nader",y:"eit \xe5r",yy:"%d \xe5r"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});var Pr={1:"\u0a67",2:"\u0a68",3:"\u0a69",4:"\u0a6a",5:"\u0a6b",6:"\u0a6c",7:"\u0a6d",8:"\u0a6e",9:"\u0a6f",0:"\u0a66"},Or={"\u0a67":"1","\u0a68":"2","\u0a69":"3","\u0a6a":"4","\u0a6b":"5","\u0a6c":"6","\u0a6d":"7","\u0a6e":"8","\u0a6f":"9","\u0a66":"0"};e.defineLocale("pa-in",{months:"\u0a1c\u0a28\u0a35\u0a30\u0a40_\u0a2b\u0a3c\u0a30\u0a35\u0a30\u0a40_\u0a2e\u0a3e\u0a30\u0a1a_\u0a05\u0a2a\u0a4d\u0a30\u0a48\u0a32_\u0a2e\u0a08_\u0a1c\u0a42\u0a28_\u0a1c\u0a41\u0a32\u0a3e\u0a08_\u0a05\u0a17\u0a38\u0a24_\u0a38\u0a24\u0a70\u0a2c\u0a30_\u0a05\u0a15\u0a24\u0a42\u0a2c\u0a30_\u0a28\u0a35\u0a70\u0a2c\u0a30_\u0a26\u0a38\u0a70\u0a2c\u0a30".split("_"),monthsShort:"\u0a1c\u0a28\u0a35\u0a30\u0a40_\u0a2b\u0a3c\u0a30\u0a35\u0a30\u0a40_\u0a2e\u0a3e\u0a30\u0a1a_\u0a05\u0a2a\u0a4d\u0a30\u0a48\u0a32_\u0a2e\u0a08_\u0a1c\u0a42\u0a28_\u0a1c\u0a41\u0a32\u0a3e\u0a08_\u0a05\u0a17\u0a38\u0a24_\u0a38\u0a24\u0a70\u0a2c\u0a30_\u0a05\u0a15\u0a24\u0a42\u0a2c\u0a30_\u0a28\u0a35\u0a70\u0a2c\u0a30_\u0a26\u0a38\u0a70\u0a2c\u0a30".split("_"),weekdays:"\u0a10\u0a24\u0a35\u0a3e\u0a30_\u0a38\u0a4b\u0a2e\u0a35\u0a3e\u0a30_\u0a2e\u0a70\u0a17\u0a32\u0a35\u0a3e\u0a30_\u0a2c\u0a41\u0a27\u0a35\u0a3e\u0a30_\u0a35\u0a40\u0a30\u0a35\u0a3e\u0a30_\u0a38\u0a3c\u0a41\u0a71\u0a15\u0a30\u0a35\u0a3e\u0a30_\u0a38\u0a3c\u0a28\u0a40\u0a1a\u0a30\u0a35\u0a3e\u0a30".split("_"),weekdaysShort:"\u0a10\u0a24_\u0a38\u0a4b\u0a2e_\u0a2e\u0a70\u0a17\u0a32_\u0a2c\u0a41\u0a27_\u0a35\u0a40\u0a30_\u0a38\u0a3c\u0a41\u0a15\u0a30_\u0a38\u0a3c\u0a28\u0a40".split("_"),weekdaysMin:"\u0a10\u0a24_\u0a38\u0a4b\u0a2e_\u0a2e\u0a70\u0a17\u0a32_\u0a2c\u0a41\u0a27_\u0a35\u0a40\u0a30_\u0a38\u0a3c\u0a41\u0a15\u0a30_\u0a38\u0a3c\u0a28\u0a40".split("_"),longDateFormat:{LT:"A h:mm \u0a35\u0a1c\u0a47",LTS:"A h:mm:ss \u0a35\u0a1c\u0a47",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm \u0a35\u0a1c\u0a47",LLLL:"dddd, D MMMM YYYY, A h:mm \u0a35\u0a1c\u0a47"},calendar:{sameDay:"[\u0a05\u0a1c] LT",nextDay:"[\u0a15\u0a32] LT",nextWeek:"dddd, LT",lastDay:"[\u0a15\u0a32] LT",lastWeek:"[\u0a2a\u0a3f\u0a1b\u0a32\u0a47] dddd, LT",sameElse:"L"},relativeTime:{future:"%s \u0a35\u0a3f\u0a71\u0a1a",past:"%s \u0a2a\u0a3f\u0a1b\u0a32\u0a47",s:"\u0a15\u0a41\u0a1d \u0a38\u0a15\u0a3f\u0a70\u0a1f",m:"\u0a07\u0a15 \u0a2e\u0a3f\u0a70\u0a1f",mm:"%d \u0a2e\u0a3f\u0a70\u0a1f",h:"\u0a07\u0a71\u0a15 \u0a18\u0a70\u0a1f\u0a3e",hh:"%d \u0a18\u0a70\u0a1f\u0a47",d:"\u0a07\u0a71\u0a15 \u0a26\u0a3f\u0a28",dd:"%d \u0a26\u0a3f\u0a28",M:"\u0a07\u0a71\u0a15 \u0a2e\u0a39\u0a40\u0a28\u0a3e",MM:"%d \u0a2e\u0a39\u0a40\u0a28\u0a47",y:"\u0a07\u0a71\u0a15 \u0a38\u0a3e\u0a32",yy:"%d \u0a38\u0a3e\u0a32"},preparse:function(e){return e.replace(/[\u0a67\u0a68\u0a69\u0a6a\u0a6b\u0a6c\u0a6d\u0a6e\u0a6f\u0a66]/g,function(e){return Or[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return Pr[e]})},meridiemParse:/\u0a30\u0a3e\u0a24|\u0a38\u0a35\u0a47\u0a30|\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30|\u0a38\u0a3c\u0a3e\u0a2e/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u0a30\u0a3e\u0a24"===a?e<4?e:e+12:"\u0a38\u0a35\u0a47\u0a30"===a?e:"\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30"===a?e>=10?e:e+12:"\u0a38\u0a3c\u0a3e\u0a2e"===a?e+12:void 0},meridiem:function(e,a,t){return e<4?"\u0a30\u0a3e\u0a24":e<10?"\u0a38\u0a35\u0a47\u0a30":e<17?"\u0a26\u0a41\u0a2a\u0a39\u0a3f\u0a30":e<20?"\u0a38\u0a3c\u0a3e\u0a2e":"\u0a30\u0a3e\u0a24"},week:{dow:0,doy:6}});var Wr="stycze\u0144_luty_marzec_kwiecie\u0144_maj_czerwiec_lipiec_sierpie\u0144_wrzesie\u0144_pa\u017adziernik_listopad_grudzie\u0144".split("_"),Er="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrze\u015bnia_pa\u017adziernika_listopada_grudnia".split("_");e.defineLocale("pl",{months:function(e,a){return e?""===a?"("+Er[e.month()]+"|"+Wr[e.month()]+")":/D MMMM/.test(a)?Er[e.month()]:Wr[e.month()]:Wr},monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_pa\u017a_lis_gru".split("_"),weekdays:"niedziela_poniedzia\u0142ek_wtorek_\u015broda_czwartek_pi\u0105tek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_\u015br_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_\u015ar_Cz_Pt_So".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Dzi\u015b o] LT",nextDay:"[Jutro o] LT",nextWeek:function(){switch(this.day()){case 0:return"[W niedziel\u0119 o] LT";case 2:return"[We wtorek o] LT";case 3:return"[W \u015brod\u0119 o] LT";case 6:return"[W sobot\u0119 o] LT";default:return"[W] dddd [o] LT"}},lastDay:"[Wczoraj o] LT",lastWeek:function(){switch(this.day()){case 0:return"[W zesz\u0142\u0105 niedziel\u0119 o] LT";case 3:return"[W zesz\u0142\u0105 \u015brod\u0119 o] LT";case 6:return"[W zesz\u0142\u0105 sobot\u0119 o] LT";default:return"[W zesz\u0142y] dddd [o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:nt,mm:nt,h:nt,hh:nt,d:"1 dzie\u0144",dd:"%d dni",M:"miesi\u0105c",MM:nt,y:"rok",yy:nt},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),e.defineLocale("pt-br",{months:"janeiro_fevereiro_mar\xe7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),weekdays:"Domingo_Segunda-feira_Ter\xe7a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S\xe1bado".split("_"),weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_S\xe1b".split("_"),weekdaysMin:"Do_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_S\xe1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [\xe0s] HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY [\xe0s] HH:mm"},calendar:{sameDay:"[Hoje \xe0s] LT",nextDay:"[Amanh\xe3 \xe0s] LT",nextWeek:"dddd [\xe0s] LT",lastDay:"[Ontem \xe0s] LT",lastWeek:function(){return 0===this.day()||6===this.day()?"[\xdaltimo] dddd [\xe0s] LT":"[\xdaltima] dddd [\xe0s] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"%s atr\xe1s",s:"poucos segundos",ss:"%d segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um m\xeas",MM:"%d meses",y:"um ano",yy:"%d anos"},dayOfMonthOrdinalParse:/\d{1,2}\xba/,ordinal:"%d\xba"}),e.defineLocale("pt",{months:"janeiro_fevereiro_mar\xe7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),weekdays:"Domingo_Segunda-feira_Ter\xe7a-feira_Quarta-feira_Quinta-feira_Sexta-feira_S\xe1bado".split("_"),weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_S\xe1b".split("_"),weekdaysMin:"Do_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_S\xe1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY HH:mm"},calendar:{sameDay:"[Hoje \xe0s] LT",nextDay:"[Amanh\xe3 \xe0s] LT",nextWeek:"dddd [\xe0s] LT",lastDay:"[Ontem \xe0s] LT",lastWeek:function(){return 0===this.day()||6===this.day()?"[\xdaltimo] dddd [\xe0s] LT":"[\xdaltima] dddd [\xe0s] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"h\xe1 %s",s:"segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um m\xeas",MM:"%d meses",y:"um ano",yy:"%d anos"},dayOfMonthOrdinalParse:/\d{1,2}\xba/,ordinal:"%d\xba",week:{dow:1,doy:4}}),e.defineLocale("ro",{months:"ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),monthsShort:"ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"duminic\u0103_luni_mar\u021bi_miercuri_joi_vineri_s\xe2mb\u0103t\u0103".split("_"),weekdaysShort:"Dum_Lun_Mar_Mie_Joi_Vin_S\xe2m".split("_"),weekdaysMin:"Du_Lu_Ma_Mi_Jo_Vi_S\xe2".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[azi la] LT",nextDay:"[m\xe2ine la] LT",nextWeek:"dddd [la] LT",lastDay:"[ieri la] LT",lastWeek:"[fosta] dddd [la] LT",sameElse:"L"},relativeTime:{future:"peste %s",past:"%s \xeen urm\u0103",s:"c\xe2teva secunde",m:"un minut",mm:st,h:"o or\u0103",hh:st,d:"o zi",dd:st,M:"o lun\u0103",MM:st,y:"un an",yy:st},week:{dow:1,doy:7}});var Ar=[/^\u044f\u043d\u0432/i,/^\u0444\u0435\u0432/i,/^\u043c\u0430\u0440/i,/^\u0430\u043f\u0440/i,/^\u043c\u0430[\u0439\u044f]/i,/^\u0438\u044e\u043d/i,/^\u0438\u044e\u043b/i,/^\u0430\u0432\u0433/i,/^\u0441\u0435\u043d/i,/^\u043e\u043a\u0442/i,/^\u043d\u043e\u044f/i,/^\u0434\u0435\u043a/i];e.defineLocale("ru",{months:{format:"\u044f\u043d\u0432\u0430\u0440\u044f_\u0444\u0435\u0432\u0440\u0430\u043b\u044f_\u043c\u0430\u0440\u0442\u0430_\u0430\u043f\u0440\u0435\u043b\u044f_\u043c\u0430\u044f_\u0438\u044e\u043d\u044f_\u0438\u044e\u043b\u044f_\u0430\u0432\u0433\u0443\u0441\u0442\u0430_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f_\u043e\u043a\u0442\u044f\u0431\u0440\u044f_\u043d\u043e\u044f\u0431\u0440\u044f_\u0434\u0435\u043a\u0430\u0431\u0440\u044f".split("_"),standalone:"\u044f\u043d\u0432\u0430\u0440\u044c_\u0444\u0435\u0432\u0440\u0430\u043b\u044c_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b\u044c_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c_\u043e\u043a\u0442\u044f\u0431\u0440\u044c_\u043d\u043e\u044f\u0431\u0440\u044c_\u0434\u0435\u043a\u0430\u0431\u0440\u044c".split("_")},monthsShort:{format:"\u044f\u043d\u0432._\u0444\u0435\u0432\u0440._\u043c\u0430\u0440._\u0430\u043f\u0440._\u043c\u0430\u044f_\u0438\u044e\u043d\u044f_\u0438\u044e\u043b\u044f_\u0430\u0432\u0433._\u0441\u0435\u043d\u0442._\u043e\u043a\u0442._\u043d\u043e\u044f\u0431._\u0434\u0435\u043a.".split("_"),standalone:"\u044f\u043d\u0432._\u0444\u0435\u0432\u0440._\u043c\u0430\u0440\u0442_\u0430\u043f\u0440._\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433._\u0441\u0435\u043d\u0442._\u043e\u043a\u0442._\u043d\u043e\u044f\u0431._\u0434\u0435\u043a.".split("_")},weekdays:{standalone:"\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043f\u044f\u0442\u043d\u0438\u0446\u0430_\u0441\u0443\u0431\u0431\u043e\u0442\u0430".split("_"),format:"\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043f\u044f\u0442\u043d\u0438\u0446\u0443_\u0441\u0443\u0431\u0431\u043e\u0442\u0443".split("_"),isFormat:/\[ ?[\u0412\u0432] ?(?:\u043f\u0440\u043e\u0448\u043b\u0443\u044e|\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e|\u044d\u0442\u0443)? ?\] ?dddd/},weekdaysShort:"\u0432\u0441_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),weekdaysMin:"\u0432\u0441_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),monthsParse:Ar,longMonthsParse:Ar,shortMonthsParse:Ar,monthsRegex:/^(\u044f\u043d\u0432\u0430\u0440[\u044c\u044f]|\u044f\u043d\u0432\.?|\u0444\u0435\u0432\u0440\u0430\u043b[\u044c\u044f]|\u0444\u0435\u0432\u0440?\.?|\u043c\u0430\u0440\u0442\u0430?|\u043c\u0430\u0440\.?|\u0430\u043f\u0440\u0435\u043b[\u044c\u044f]|\u0430\u043f\u0440\.?|\u043c\u0430[\u0439\u044f]|\u0438\u044e\u043d[\u044c\u044f]|\u0438\u044e\u043d\.?|\u0438\u044e\u043b[\u044c\u044f]|\u0438\u044e\u043b\.?|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0430\u0432\u0433\.?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044c\u044f]|\u0441\u0435\u043d\u0442?\.?|\u043e\u043a\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043e\u043a\u0442\.?|\u043d\u043e\u044f\u0431\u0440[\u044c\u044f]|\u043d\u043e\u044f\u0431?\.?|\u0434\u0435\u043a\u0430\u0431\u0440[\u044c\u044f]|\u0434\u0435\u043a\.?)/i,monthsShortRegex:/^(\u044f\u043d\u0432\u0430\u0440[\u044c\u044f]|\u044f\u043d\u0432\.?|\u0444\u0435\u0432\u0440\u0430\u043b[\u044c\u044f]|\u0444\u0435\u0432\u0440?\.?|\u043c\u0430\u0440\u0442\u0430?|\u043c\u0430\u0440\.?|\u0430\u043f\u0440\u0435\u043b[\u044c\u044f]|\u0430\u043f\u0440\.?|\u043c\u0430[\u0439\u044f]|\u0438\u044e\u043d[\u044c\u044f]|\u0438\u044e\u043d\.?|\u0438\u044e\u043b[\u044c\u044f]|\u0438\u044e\u043b\.?|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0430\u0432\u0433\.?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044c\u044f]|\u0441\u0435\u043d\u0442?\.?|\u043e\u043a\u0442\u044f\u0431\u0440[\u044c\u044f]|\u043e\u043a\u0442\.?|\u043d\u043e\u044f\u0431\u0440[\u044c\u044f]|\u043d\u043e\u044f\u0431?\.?|\u0434\u0435\u043a\u0430\u0431\u0440[\u044c\u044f]|\u0434\u0435\u043a\.?)/i,monthsStrictRegex:/^(\u044f\u043d\u0432\u0430\u0440[\u044f\u044c]|\u0444\u0435\u0432\u0440\u0430\u043b[\u044f\u044c]|\u043c\u0430\u0440\u0442\u0430?|\u0430\u043f\u0440\u0435\u043b[\u044f\u044c]|\u043c\u0430[\u044f\u0439]|\u0438\u044e\u043d[\u044f\u044c]|\u0438\u044e\u043b[\u044f\u044c]|\u0430\u0432\u0433\u0443\u0441\u0442\u0430?|\u0441\u0435\u043d\u0442\u044f\u0431\u0440[\u044f\u044c]|\u043e\u043a\u0442\u044f\u0431\u0440[\u044f\u044c]|\u043d\u043e\u044f\u0431\u0440[\u044f\u044c]|\u0434\u0435\u043a\u0430\u0431\u0440[\u044f\u044c])/i,monthsShortStrictRegex:/^(\u044f\u043d\u0432\.|\u0444\u0435\u0432\u0440?\.|\u043c\u0430\u0440[\u0442.]|\u0430\u043f\u0440\.|\u043c\u0430[\u044f\u0439]|\u0438\u044e\u043d[\u044c\u044f.]|\u0438\u044e\u043b[\u044c\u044f.]|\u0430\u0432\u0433\.|\u0441\u0435\u043d\u0442?\.|\u043e\u043a\u0442\.|\u043d\u043e\u044f\u0431?\.|\u0434\u0435\u043a\.)/i,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY \u0433.",LLL:"D MMMM YYYY \u0433., HH:mm",LLLL:"dddd, D MMMM YYYY \u0433., HH:mm"},calendar:{sameDay:"[\u0421\u0435\u0433\u043e\u0434\u043d\u044f \u0432] LT",nextDay:"[\u0417\u0430\u0432\u0442\u0440\u0430 \u0432] LT",lastDay:"[\u0412\u0447\u0435\u0440\u0430 \u0432] LT",nextWeek:function(e){if(e.week()===this.week())return 2===this.day()?"[\u0412\u043e] dddd [\u0432] LT":"[\u0412] dddd [\u0432] LT";switch(this.day()){case 0:return"[\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0435] dddd [\u0432] LT";case 1:case 2:case 4:return"[\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439] dddd [\u0432] LT";case 3:case 5:case 6:return"[\u0412 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e] dddd [\u0432] LT"}},lastWeek:function(e){if(e.week()===this.week())return 2===this.day()?"[\u0412\u043e] dddd [\u0432] LT":"[\u0412] dddd [\u0432] LT";switch(this.day()){case 0:return"[\u0412 \u043f\u0440\u043e\u0448\u043b\u043e\u0435] dddd [\u0432] LT";case 1:case 2:case 4:return"[\u0412 \u043f\u0440\u043e\u0448\u043b\u044b\u0439] dddd [\u0432] LT";case 3:case 5:case 6:return"[\u0412 \u043f\u0440\u043e\u0448\u043b\u0443\u044e] dddd [\u0432] LT"}},sameElse:"L"},relativeTime:{future:"\u0447\u0435\u0440\u0435\u0437 %s",past:"%s \u043d\u0430\u0437\u0430\u0434",s:"\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434",m:dt,mm:dt,h:"\u0447\u0430\u0441",hh:dt,d:"\u0434\u0435\u043d\u044c",dd:dt,M:"\u043c\u0435\u0441\u044f\u0446",MM:dt,y:"\u0433\u043e\u0434",yy:dt},meridiemParse:/\u043d\u043e\u0447\u0438|\u0443\u0442\u0440\u0430|\u0434\u043d\u044f|\u0432\u0435\u0447\u0435\u0440\u0430/i,isPM:function(e){return/^(\u0434\u043d\u044f|\u0432\u0435\u0447\u0435\u0440\u0430)$/.test(e)},meridiem:function(e,a,t){return e<4?"\u043d\u043e\u0447\u0438":e<12?"\u0443\u0442\u0440\u0430":e<17?"\u0434\u043d\u044f":"\u0432\u0435\u0447\u0435\u0440\u0430"},dayOfMonthOrdinalParse:/\d{1,2}-(\u0439|\u0433\u043e|\u044f)/,ordinal:function(e,a){switch(a){case"M":case"d":case"DDD":return e+"-\u0439";case"D":return e+"-\u0433\u043e";case"w":case"W":return e+"-\u044f";default:return e}},week:{dow:1,doy:4}});var Fr=["\u062c\u0646\u0648\u0631\u064a","\u0641\u064a\u0628\u0631\u0648\u0631\u064a","\u0645\u0627\u0631\u0686","\u0627\u067e\u0631\u064a\u0644","\u0645\u0626\u064a","\u062c\u0648\u0646","\u062c\u0648\u0644\u0627\u0621\u0650","\u0622\u06af\u0633\u067d","\u0633\u064a\u067e\u067d\u0645\u0628\u0631","\u0622\u06aa\u067d\u0648\u0628\u0631","\u0646\u0648\u0645\u0628\u0631","\u068a\u0633\u0645\u0628\u0631"],zr=["\u0622\u0686\u0631","\u0633\u0648\u0645\u0631","\u0627\u06b1\u0627\u0631\u0648","\u0627\u0631\u0628\u0639","\u062e\u0645\u064a\u0633","\u062c\u0645\u0639","\u0687\u0646\u0687\u0631"];e.defineLocale("sd",{months:Fr,monthsShort:Fr,weekdays:zr,weekdaysShort:zr,weekdaysMin:zr,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd\u060c D MMMM YYYY HH:mm"},meridiemParse:/\u0635\u0628\u062d|\u0634\u0627\u0645/,isPM:function(e){return"\u0634\u0627\u0645"===e},meridiem:function(e,a,t){return e<12?"\u0635\u0628\u062d":"\u0634\u0627\u0645"},calendar:{sameDay:"[\u0627\u0684] LT",nextDay:"[\u0633\u0680\u0627\u06bb\u064a] LT",nextWeek:"dddd [\u0627\u06b3\u064a\u0646 \u0647\u0641\u062a\u064a \u062a\u064a] LT",lastDay:"[\u06aa\u0627\u0644\u0647\u0647] LT",lastWeek:"[\u06af\u0632\u0631\u064a\u0644 \u0647\u0641\u062a\u064a] dddd [\u062a\u064a] LT",sameElse:"L"},relativeTime:{future:"%s \u067e\u0648\u0621",past:"%s \u0627\u06b3",s:"\u0686\u0646\u062f \u0633\u064a\u06aa\u0646\u068a",m:"\u0647\u06aa \u0645\u0646\u067d",mm:"%d \u0645\u0646\u067d",h:"\u0647\u06aa \u06aa\u0644\u0627\u06aa",hh:"%d \u06aa\u0644\u0627\u06aa",d:"\u0647\u06aa \u068f\u064a\u0646\u0647\u0646",dd:"%d \u068f\u064a\u0646\u0647\u0646",M:"\u0647\u06aa \u0645\u0647\u064a\u0646\u0648",MM:"%d \u0645\u0647\u064a\u0646\u0627",y:"\u0647\u06aa \u0633\u0627\u0644",yy:"%d \u0633\u0627\u0644"},preparse:function(e){return e.replace(/\u060c/g,",")},postformat:function(e){return e.replace(/,/g,"\u060c")},week:{dow:1,doy:4}}),e.defineLocale("se",{months:"o\u0111\u0111ajagem\xe1nnu_guovvam\xe1nnu_njuk\u010dam\xe1nnu_cuo\u014bom\xe1nnu_miessem\xe1nnu_geassem\xe1nnu_suoidnem\xe1nnu_borgem\xe1nnu_\u010dak\u010dam\xe1nnu_golggotm\xe1nnu_sk\xe1bmam\xe1nnu_juovlam\xe1nnu".split("_"),monthsShort:"o\u0111\u0111j_guov_njuk_cuo_mies_geas_suoi_borg_\u010dak\u010d_golg_sk\xe1b_juov".split("_"),weekdays:"sotnabeaivi_vuoss\xe1rga_ma\u014b\u014beb\xe1rga_gaskavahkku_duorastat_bearjadat_l\xe1vvardat".split("_"),weekdaysShort:"sotn_vuos_ma\u014b_gask_duor_bear_l\xe1v".split("_"),weekdaysMin:"s_v_m_g_d_b_L".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"MMMM D. [b.] YYYY",LLL:"MMMM D. [b.] YYYY [ti.] HH:mm",LLLL:"dddd, MMMM D. [b.] YYYY [ti.] HH:mm"},calendar:{sameDay:"[otne ti] LT",nextDay:"[ihttin ti] LT",nextWeek:"dddd [ti] LT",lastDay:"[ikte ti] LT",lastWeek:"[ovddit] dddd [ti] LT",sameElse:"L"},relativeTime:{future:"%s gea\u017ees",past:"ma\u014bit %s",s:"moadde sekunddat",m:"okta minuhta",mm:"%d minuhtat",h:"okta diimmu",hh:"%d diimmut",d:"okta beaivi",dd:"%d beaivvit",M:"okta m\xe1nnu",MM:"%d m\xe1nut",y:"okta jahki",yy:"%d jagit"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),e.defineLocale("si",{months:"\u0da2\u0db1\u0dc0\u0dcf\u0dbb\u0dd2_\u0db4\u0dd9\u0db6\u0dbb\u0dc0\u0dcf\u0dbb\u0dd2_\u0db8\u0dcf\u0dbb\u0dca\u0dad\u0dd4_\u0d85\u0db4\u0dca\u200d\u0dbb\u0dda\u0dbd\u0dca_\u0db8\u0dd0\u0dba\u0dd2_\u0da2\u0dd6\u0db1\u0dd2_\u0da2\u0dd6\u0dbd\u0dd2_\u0d85\u0d9c\u0ddd\u0dc3\u0dca\u0dad\u0dd4_\u0dc3\u0dd0\u0db4\u0dca\u0dad\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca_\u0d94\u0d9a\u0dca\u0dad\u0ddd\u0db6\u0dbb\u0dca_\u0db1\u0ddc\u0dc0\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca_\u0daf\u0dd9\u0dc3\u0dd0\u0db8\u0dca\u0db6\u0dbb\u0dca".split("_"),monthsShort:"\u0da2\u0db1_\u0db4\u0dd9\u0db6_\u0db8\u0dcf\u0dbb\u0dca_\u0d85\u0db4\u0dca_\u0db8\u0dd0\u0dba\u0dd2_\u0da2\u0dd6\u0db1\u0dd2_\u0da2\u0dd6\u0dbd\u0dd2_\u0d85\u0d9c\u0ddd_\u0dc3\u0dd0\u0db4\u0dca_\u0d94\u0d9a\u0dca_\u0db1\u0ddc\u0dc0\u0dd0_\u0daf\u0dd9\u0dc3\u0dd0".split("_"),weekdays:"\u0d89\u0dbb\u0dd2\u0daf\u0dcf_\u0dc3\u0db3\u0dd4\u0daf\u0dcf_\u0d85\u0d9f\u0dc4\u0dbb\u0dd4\u0dc0\u0dcf\u0daf\u0dcf_\u0db6\u0daf\u0dcf\u0daf\u0dcf_\u0db6\u0dca\u200d\u0dbb\u0dc4\u0dc3\u0dca\u0db4\u0dad\u0dd2\u0db1\u0dca\u0daf\u0dcf_\u0dc3\u0dd2\u0d9a\u0dd4\u0dbb\u0dcf\u0daf\u0dcf_\u0dc3\u0dd9\u0db1\u0dc3\u0dd4\u0dbb\u0dcf\u0daf\u0dcf".split("_"),weekdaysShort:"\u0d89\u0dbb\u0dd2_\u0dc3\u0db3\u0dd4_\u0d85\u0d9f_\u0db6\u0daf\u0dcf_\u0db6\u0dca\u200d\u0dbb\u0dc4_\u0dc3\u0dd2\u0d9a\u0dd4_\u0dc3\u0dd9\u0db1".split("_"),weekdaysMin:"\u0d89_\u0dc3_\u0d85_\u0db6_\u0db6\u0dca\u200d\u0dbb_\u0dc3\u0dd2_\u0dc3\u0dd9".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"a h:mm",LTS:"a h:mm:ss",L:"YYYY/MM/DD",LL:"YYYY MMMM D",LLL:"YYYY MMMM D, a h:mm",LLLL:"YYYY MMMM D [\u0dc0\u0dd0\u0db1\u0dd2] dddd, a h:mm:ss"},calendar:{sameDay:"[\u0d85\u0daf] LT[\u0da7]",nextDay:"[\u0dc4\u0dd9\u0da7] LT[\u0da7]",nextWeek:"dddd LT[\u0da7]",lastDay:"[\u0d8a\u0dba\u0dda] LT[\u0da7]",lastWeek:"[\u0db4\u0dc3\u0dd4\u0d9c\u0dd2\u0dba] dddd LT[\u0da7]",sameElse:"L"},relativeTime:{future:"%s\u0d9a\u0dd2\u0db1\u0dca",past:"%s\u0d9a\u0da7 \u0db4\u0dd9\u0dbb",s:"\u0dad\u0dad\u0dca\u0db4\u0dbb \u0d9a\u0dd2\u0dc4\u0dd2\u0db4\u0dba",m:"\u0db8\u0dd2\u0db1\u0dd2\u0dad\u0dca\u0dad\u0dd4\u0dc0",mm:"\u0db8\u0dd2\u0db1\u0dd2\u0dad\u0dca\u0dad\u0dd4 %d",h:"\u0db4\u0dd0\u0dba",hh:"\u0db4\u0dd0\u0dba %d",d:"\u0daf\u0dd2\u0db1\u0dba",dd:"\u0daf\u0dd2\u0db1 %d",M:"\u0db8\u0dcf\u0dc3\u0dba",MM:"\u0db8\u0dcf\u0dc3 %d",y:"\u0dc0\u0dc3\u0dbb",yy:"\u0dc0\u0dc3\u0dbb %d"},dayOfMonthOrdinalParse:/\d{1,2} \u0dc0\u0dd0\u0db1\u0dd2/,ordinal:function(e){return e+" \u0dc0\u0dd0\u0db1\u0dd2"},meridiemParse:/\u0db4\u0dd9\u0dbb \u0dc0\u0dbb\u0dd4|\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4|\u0db4\u0dd9.\u0dc0|\u0db4.\u0dc0./,isPM:function(e){return"\u0db4.\u0dc0."===e||"\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4"===e},meridiem:function(e,a,t){return e>11?t?"\u0db4.\u0dc0.":"\u0db4\u0dc3\u0dca \u0dc0\u0dbb\u0dd4":t?"\u0db4\u0dd9.\u0dc0.":"\u0db4\u0dd9\u0dbb \u0dc0\u0dbb\u0dd4"}});var Jr="janu\xe1r_febru\xe1r_marec_apr\xedl_m\xe1j_j\xfan_j\xfal_august_september_okt\xf3ber_november_december".split("_"),Nr="jan_feb_mar_apr_m\xe1j_j\xfan_j\xfal_aug_sep_okt_nov_dec".split("_");e.defineLocale("sk",{months:Jr,monthsShort:Nr,weekdays:"nede\u013ea_pondelok_utorok_streda_\u0161tvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_\u0161t_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_\u0161t_pi_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm"},calendar:{sameDay:"[dnes o] LT",nextDay:"[zajtra o] LT",nextWeek:function(){switch(this.day()){case 0:return"[v nede\u013eu o] LT";case 1:case 2:return"[v] dddd [o] LT";case 3:return"[v stredu o] LT";case 4:return"[vo \u0161tvrtok o] LT";case 5:return"[v piatok o] LT";case 6:return"[v sobotu o] LT"}},lastDay:"[v\u010dera o] LT",lastWeek:function(){switch(this.day()){case 0:return"[minul\xfa nede\u013eu o] LT";case 1:case 2:return"[minul\xfd] dddd [o] LT";case 3:return"[minul\xfa stredu o] LT";case 4:case 5:return"[minul\xfd] dddd [o] LT";case 6:return"[minul\xfa sobotu o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"pred %s",s:it,m:it,mm:it,h:it,hh:it,d:it,dd:it,M:it,MM:it,y:it,yy:it},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),e.defineLocale("sl",{months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedelja_ponedeljek_torek_sreda_\u010detrtek_petek_sobota".split("_"),weekdaysShort:"ned._pon._tor._sre._\u010det._pet._sob.".split("_"),weekdaysMin:"ne_po_to_sr_\u010de_pe_so".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danes ob] LT",nextDay:"[jutri ob] LT",nextWeek:function(){switch(this.day()){case 0:return"[v] [nedeljo] [ob] LT";case 3:return"[v] [sredo] [ob] LT";case 6:return"[v] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[v] dddd [ob] LT"}},lastDay:"[v\u010deraj ob] LT",lastWeek:function(){switch(this.day()){case 0:return"[prej\u0161njo] [nedeljo] [ob] LT";case 3:return"[prej\u0161njo] [sredo] [ob] LT";case 6:return"[prej\u0161njo] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[prej\u0161nji] dddd [ob] LT"}},sameElse:"L"},relativeTime:{future:"\u010dez %s",past:"pred %s",s:ot,m:ot,mm:ot,h:ot,hh:ot,d:ot,dd:ot,M:ot,MM:ot,y:ot,yy:ot},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),e.defineLocale("sq",{months:"Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_N\xebntor_Dhjetor".split("_"),monthsShort:"Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_N\xebn_Dhj".split("_"),weekdays:"E Diel_E H\xebn\xeb_E Mart\xeb_E M\xebrkur\xeb_E Enjte_E Premte_E Shtun\xeb".split("_"),weekdaysShort:"Die_H\xebn_Mar_M\xebr_Enj_Pre_Sht".split("_"),weekdaysMin:"D_H_Ma_M\xeb_E_P_Sh".split("_"),weekdaysParseExact:!0,meridiemParse:/PD|MD/,isPM:function(e){return"M"===e.charAt(0)},meridiem:function(e,a,t){return e<12?"PD":"MD"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Sot n\xeb] LT",nextDay:"[Nes\xebr n\xeb] LT",nextWeek:"dddd [n\xeb] LT",lastDay:"[Dje n\xeb] LT",lastWeek:"dddd [e kaluar n\xeb] LT",sameElse:"L"},relativeTime:{future:"n\xeb %s",past:"%s m\xeb par\xeb",s:"disa sekonda",m:"nj\xeb minut\xeb",mm:"%d minuta",h:"nj\xeb or\xeb",hh:"%d or\xeb",d:"nj\xeb dit\xeb",dd:"%d dit\xeb",M:"nj\xeb muaj",MM:"%d muaj",y:"nj\xeb vit",yy:"%d vite"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});var Rr={words:{m:["\u0458\u0435\u0434\u0430\u043d \u043c\u0438\u043d\u0443\u0442","\u0458\u0435\u0434\u043d\u0435 \u043c\u0438\u043d\u0443\u0442\u0435"],mm:["\u043c\u0438\u043d\u0443\u0442","\u043c\u0438\u043d\u0443\u0442\u0435","\u043c\u0438\u043d\u0443\u0442\u0430"],h:["\u0458\u0435\u0434\u0430\u043d \u0441\u0430\u0442","\u0458\u0435\u0434\u043d\u043e\u0433 \u0441\u0430\u0442\u0430"],hh:["\u0441\u0430\u0442","\u0441\u0430\u0442\u0430","\u0441\u0430\u0442\u0438"],dd:["\u0434\u0430\u043d","\u0434\u0430\u043d\u0430","\u0434\u0430\u043d\u0430"],MM:["\u043c\u0435\u0441\u0435\u0446","\u043c\u0435\u0441\u0435\u0446\u0430","\u043c\u0435\u0441\u0435\u0446\u0438"],yy:["\u0433\u043e\u0434\u0438\u043d\u0430","\u0433\u043e\u0434\u0438\u043d\u0435","\u0433\u043e\u0434\u0438\u043d\u0430"]},correctGrammaticalCase:function(e,a){return 1===e?a[0]:e>=2&&e<=4?a[1]:a[2]},translate:function(e,a,t){var n=Rr.words[t];return 1===t.length?a?n[0]:n[1]:e+" "+Rr.correctGrammaticalCase(e,n)}};e.defineLocale("sr-cyrl",{months:"\u0458\u0430\u043d\u0443\u0430\u0440_\u0444\u0435\u0431\u0440\u0443\u0430\u0440_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0438\u043b_\u043c\u0430\u0458_\u0458\u0443\u043d_\u0458\u0443\u043b_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043f\u0442\u0435\u043c\u0431\u0430\u0440_\u043e\u043a\u0442\u043e\u0431\u0430\u0440_\u043d\u043e\u0432\u0435\u043c\u0431\u0430\u0440_\u0434\u0435\u0446\u0435\u043c\u0431\u0430\u0440".split("_"),monthsShort:"\u0458\u0430\u043d._\u0444\u0435\u0431._\u043c\u0430\u0440._\u0430\u043f\u0440._\u043c\u0430\u0458_\u0458\u0443\u043d_\u0458\u0443\u043b_\u0430\u0432\u0433._\u0441\u0435\u043f._\u043e\u043a\u0442._\u043d\u043e\u0432._\u0434\u0435\u0446.".split("_"),monthsParseExact:!0,weekdays:"\u043d\u0435\u0434\u0435\u0459\u0430_\u043f\u043e\u043d\u0435\u0434\u0435\u0459\u0430\u043a_\u0443\u0442\u043e\u0440\u0430\u043a_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0440\u0442\u0430\u043a_\u043f\u0435\u0442\u0430\u043a_\u0441\u0443\u0431\u043e\u0442\u0430".split("_"),weekdaysShort:"\u043d\u0435\u0434._\u043f\u043e\u043d._\u0443\u0442\u043e._\u0441\u0440\u0435._\u0447\u0435\u0442._\u043f\u0435\u0442._\u0441\u0443\u0431.".split("_"),weekdaysMin:"\u043d\u0435_\u043f\u043e_\u0443\u0442_\u0441\u0440_\u0447\u0435_\u043f\u0435_\u0441\u0443".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[\u0434\u0430\u043d\u0430\u0441 \u0443] LT",nextDay:"[\u0441\u0443\u0442\u0440\u0430 \u0443] LT",nextWeek:function(){switch(this.day()){case 0:return"[\u0443] [\u043d\u0435\u0434\u0435\u0459\u0443] [\u0443] LT";case 3:return"[\u0443] [\u0441\u0440\u0435\u0434\u0443] [\u0443] LT";case 6:return"[\u0443] [\u0441\u0443\u0431\u043e\u0442\u0443] [\u0443] LT";case 1:case 2:case 4:case 5:return"[\u0443] dddd [\u0443] LT"}},lastDay:"[\u0458\u0443\u0447\u0435 \u0443] LT",lastWeek:function(){return["[\u043f\u0440\u043e\u0448\u043b\u0435] [\u043d\u0435\u0434\u0435\u0459\u0435] [\u0443] LT","[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u043f\u043e\u043d\u0435\u0434\u0435\u0459\u043a\u0430] [\u0443] LT","[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u0443\u0442\u043e\u0440\u043a\u0430] [\u0443] LT","[\u043f\u0440\u043e\u0448\u043b\u0435] [\u0441\u0440\u0435\u0434\u0435] [\u0443] LT","[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u0447\u0435\u0442\u0432\u0440\u0442\u043a\u0430] [\u0443] LT","[\u043f\u0440\u043e\u0448\u043b\u043e\u0433] [\u043f\u0435\u0442\u043a\u0430] [\u0443] LT","[\u043f\u0440\u043e\u0448\u043b\u0435] [\u0441\u0443\u0431\u043e\u0442\u0435] [\u0443] LT"][this.day()]},sameElse:"L"},relativeTime:{future:"\u0437\u0430 %s",past:"\u043f\u0440\u0435 %s",s:"\u043d\u0435\u043a\u043e\u043b\u0438\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434\u0438",m:Rr.translate,mm:Rr.translate,h:Rr.translate,hh:Rr.translate,d:"\u0434\u0430\u043d",dd:Rr.translate,M:"\u043c\u0435\u0441\u0435\u0446",MM:Rr.translate,y:"\u0433\u043e\u0434\u0438\u043d\u0443",yy:Rr.translate},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}});var Cr={words:{m:["jedan minut","jedne minute"],mm:["minut","minute","minuta"],h:["jedan sat","jednog sata"],hh:["sat","sata","sati"],dd:["dan","dana","dana"],MM:["mesec","meseca","meseci"],yy:["godina","godine","godina"]},correctGrammaticalCase:function(e,a){return 1===e?a[0]:e>=2&&e<=4?a[1]:a[2]},translate:function(e,a,t){var n=Cr.words[t];return 1===t.length?a?n[0]:n[1]:e+" "+Cr.correctGrammaticalCase(e,n)}};e.defineLocale("sr",{months:"januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedelja_ponedeljak_utorak_sreda_\u010detvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sre._\u010det._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_\u010de_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedelju] [u] LT";case 3:return"[u] [sredu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[ju\u010de u] LT",lastWeek:function(){return["[pro\u0161le] [nedelje] [u] LT","[pro\u0161log] [ponedeljka] [u] LT","[pro\u0161log] [utorka] [u] LT","[pro\u0161le] [srede] [u] LT","[pro\u0161log] [\u010detvrtka] [u] LT","[pro\u0161log] [petka] [u] LT","[pro\u0161le] [subote] [u] LT"][this.day()]},sameElse:"L"},relativeTime:{future:"za %s",past:"pre %s",s:"nekoliko sekundi",m:Cr.translate,mm:Cr.translate,h:Cr.translate,hh:Cr.translate,d:"dan",dd:Cr.translate,M:"mesec",MM:Cr.translate,y:"godinu",yy:Cr.translate},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),e.defineLocale("ss",{months:"Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),monthsShort:"Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),weekdays:"Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),weekdaysShort:"Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),weekdaysMin:"Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Namuhla nga] LT",nextDay:"[Kusasa nga] LT",nextWeek:"dddd [nga] LT",lastDay:"[Itolo nga] LT",lastWeek:"dddd [leliphelile] [nga] LT",sameElse:"L"},relativeTime:{future:"nga %s",past:"wenteka nga %s",s:"emizuzwana lomcane",m:"umzuzu",mm:"%d emizuzu",h:"lihora",hh:"%d emahora",d:"lilanga",dd:"%d emalanga",M:"inyanga",MM:"%d tinyanga",y:"umnyaka",yy:"%d iminyaka"},meridiemParse:/ekuseni|emini|entsambama|ebusuku/,meridiem:function(e,a,t){return e<11?"ekuseni":e<15?"emini":e<19?"entsambama":"ebusuku"},meridiemHour:function(e,a){return 12===e&&(e=0),"ekuseni"===a?e:"emini"===a?e>=11?e:e+12:"entsambama"===a||"ebusuku"===a?0===e?0:e+12:void 0},dayOfMonthOrdinalParse:/\d{1,2}/,ordinal:"%d",week:{dow:1,doy:4}}),e.defineLocale("sv",{months:"januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"s\xf6ndag_m\xe5ndag_tisdag_onsdag_torsdag_fredag_l\xf6rdag".split("_"),weekdaysShort:"s\xf6n_m\xe5n_tis_ons_tor_fre_l\xf6r".split("_"),weekdaysMin:"s\xf6_m\xe5_ti_on_to_fr_l\xf6".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [kl.] HH:mm",LLLL:"dddd D MMMM YYYY [kl.] HH:mm",lll:"D MMM YYYY HH:mm",llll:"ddd D MMM YYYY HH:mm"},calendar:{sameDay:"[Idag] LT",nextDay:"[Imorgon] LT",lastDay:"[Ig\xe5r] LT",nextWeek:"[P\xe5] dddd LT",lastWeek:"[I] dddd[s] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"f\xf6r %s sedan",s:"n\xe5gra sekunder",m:"en minut",mm:"%d minuter",h:"en timme",hh:"%d timmar",d:"en dag",dd:"%d dagar",M:"en m\xe5nad",MM:"%d m\xe5nader",y:"ett \xe5r",yy:"%d \xe5r"},dayOfMonthOrdinalParse:/\d{1,2}(e|a)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"e":1===a?"a":2===a?"a":"e")},week:{dow:1,doy:4}}),e.defineLocale("sw",{months:"Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),weekdays:"Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),weekdaysShort:"Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),weekdaysMin:"J2_J3_J4_J5_Al_Ij_J1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[leo saa] LT",nextDay:"[kesho saa] LT",nextWeek:"[wiki ijayo] dddd [saat] LT",lastDay:"[jana] LT",lastWeek:"[wiki iliyopita] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s baadaye",past:"tokea %s",s:"hivi punde",m:"dakika moja",mm:"dakika %d",h:"saa limoja",hh:"masaa %d",d:"siku moja",dd:"masiku %d",M:"mwezi mmoja",MM:"miezi %d",y:"mwaka mmoja",yy:"miaka %d"},week:{dow:1,doy:7}});var Ir={1:"\u0be7",2:"\u0be8",3:"\u0be9",4:"\u0bea",5:"\u0beb",6:"\u0bec",7:"\u0bed",8:"\u0bee",9:"\u0bef",0:"\u0be6"},Gr={"\u0be7":"1","\u0be8":"2","\u0be9":"3","\u0bea":"4","\u0beb":"5","\u0bec":"6","\u0bed":"7","\u0bee":"8","\u0bef":"9","\u0be6":"0"};e.defineLocale("ta",{months:"\u0b9c\u0ba9\u0bb5\u0bb0\u0bbf_\u0baa\u0bbf\u0baa\u0bcd\u0bb0\u0bb5\u0bb0\u0bbf_\u0bae\u0bbe\u0bb0\u0bcd\u0b9a\u0bcd_\u0b8f\u0baa\u0bcd\u0bb0\u0bb2\u0bcd_\u0bae\u0bc7_\u0b9c\u0bc2\u0ba9\u0bcd_\u0b9c\u0bc2\u0bb2\u0bc8_\u0b86\u0b95\u0bb8\u0bcd\u0b9f\u0bcd_\u0b9a\u0bc6\u0baa\u0bcd\u0b9f\u0bc6\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b85\u0b95\u0bcd\u0b9f\u0bc7\u0bbe\u0baa\u0bb0\u0bcd_\u0ba8\u0bb5\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b9f\u0bbf\u0b9a\u0bae\u0bcd\u0baa\u0bb0\u0bcd".split("_"),monthsShort:"\u0b9c\u0ba9\u0bb5\u0bb0\u0bbf_\u0baa\u0bbf\u0baa\u0bcd\u0bb0\u0bb5\u0bb0\u0bbf_\u0bae\u0bbe\u0bb0\u0bcd\u0b9a\u0bcd_\u0b8f\u0baa\u0bcd\u0bb0\u0bb2\u0bcd_\u0bae\u0bc7_\u0b9c\u0bc2\u0ba9\u0bcd_\u0b9c\u0bc2\u0bb2\u0bc8_\u0b86\u0b95\u0bb8\u0bcd\u0b9f\u0bcd_\u0b9a\u0bc6\u0baa\u0bcd\u0b9f\u0bc6\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b85\u0b95\u0bcd\u0b9f\u0bc7\u0bbe\u0baa\u0bb0\u0bcd_\u0ba8\u0bb5\u0bae\u0bcd\u0baa\u0bb0\u0bcd_\u0b9f\u0bbf\u0b9a\u0bae\u0bcd\u0baa\u0bb0\u0bcd".split("_"),weekdays:"\u0b9e\u0bbe\u0baf\u0bbf\u0bb1\u0bcd\u0bb1\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0ba4\u0bbf\u0b99\u0bcd\u0b95\u0b9f\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0b9a\u0bc6\u0bb5\u0bcd\u0bb5\u0bbe\u0baf\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0baa\u0bc1\u0ba4\u0ba9\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0bb5\u0bbf\u0baf\u0bbe\u0bb4\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0bb5\u0bc6\u0bb3\u0bcd\u0bb3\u0bbf\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8_\u0b9a\u0ba9\u0bbf\u0b95\u0bcd\u0b95\u0bbf\u0bb4\u0bae\u0bc8".split("_"),weekdaysShort:"\u0b9e\u0bbe\u0baf\u0bbf\u0bb1\u0bc1_\u0ba4\u0bbf\u0b99\u0bcd\u0b95\u0bb3\u0bcd_\u0b9a\u0bc6\u0bb5\u0bcd\u0bb5\u0bbe\u0baf\u0bcd_\u0baa\u0bc1\u0ba4\u0ba9\u0bcd_\u0bb5\u0bbf\u0baf\u0bbe\u0bb4\u0ba9\u0bcd_\u0bb5\u0bc6\u0bb3\u0bcd\u0bb3\u0bbf_\u0b9a\u0ba9\u0bbf".split("_"),weekdaysMin:"\u0b9e\u0bbe_\u0ba4\u0bbf_\u0b9a\u0bc6_\u0baa\u0bc1_\u0bb5\u0bbf_\u0bb5\u0bc6_\u0b9a".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, HH:mm",LLLL:"dddd, D MMMM YYYY, HH:mm"},calendar:{sameDay:"[\u0b87\u0ba9\u0bcd\u0bb1\u0bc1] LT",nextDay:"[\u0ba8\u0bbe\u0bb3\u0bc8] LT",nextWeek:"dddd, LT",lastDay:"[\u0ba8\u0bc7\u0bb1\u0bcd\u0bb1\u0bc1] LT",lastWeek:"[\u0b95\u0b9f\u0ba8\u0bcd\u0ba4 \u0bb5\u0bbe\u0bb0\u0bae\u0bcd] dddd, LT",sameElse:"L"},relativeTime:{future:"%s \u0b87\u0bb2\u0bcd",past:"%s \u0bae\u0bc1\u0ba9\u0bcd",s:"\u0b92\u0bb0\u0bc1 \u0b9a\u0bbf\u0bb2 \u0bb5\u0bbf\u0ba8\u0bbe\u0b9f\u0bbf\u0b95\u0bb3\u0bcd",m:"\u0b92\u0bb0\u0bc1 \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0bae\u0bcd",mm:"%d \u0ba8\u0bbf\u0bae\u0bbf\u0b9f\u0b99\u0bcd\u0b95\u0bb3\u0bcd",h:"\u0b92\u0bb0\u0bc1 \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0bae\u0bcd",hh:"%d \u0bae\u0ba3\u0bbf \u0ba8\u0bc7\u0bb0\u0bae\u0bcd",d:"\u0b92\u0bb0\u0bc1 \u0ba8\u0bbe\u0bb3\u0bcd",dd:"%d \u0ba8\u0bbe\u0b9f\u0bcd\u0b95\u0bb3\u0bcd",M:"\u0b92\u0bb0\u0bc1 \u0bae\u0bbe\u0ba4\u0bae\u0bcd",MM:"%d \u0bae\u0bbe\u0ba4\u0b99\u0bcd\u0b95\u0bb3\u0bcd",y:"\u0b92\u0bb0\u0bc1 \u0bb5\u0bb0\u0bc1\u0b9f\u0bae\u0bcd",yy:"%d \u0b86\u0ba3\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bcd"},dayOfMonthOrdinalParse:/\d{1,2}\u0bb5\u0ba4\u0bc1/,ordinal:function(e){return e+"\u0bb5\u0ba4\u0bc1"},preparse:function(e){return e.replace(/[\u0be7\u0be8\u0be9\u0bea\u0beb\u0bec\u0bed\u0bee\u0bef\u0be6]/g,function(e){return Gr[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return Ir[e]})},meridiemParse:/\u0baf\u0bbe\u0bae\u0bae\u0bcd|\u0bb5\u0bc8\u0b95\u0bb1\u0bc8|\u0b95\u0bbe\u0bb2\u0bc8|\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd|\u0b8e\u0bb1\u0bcd\u0baa\u0bbe\u0b9f\u0bc1|\u0bae\u0bbe\u0bb2\u0bc8/,meridiem:function(e,a,t){return e<2?" \u0baf\u0bbe\u0bae\u0bae\u0bcd":e<6?" \u0bb5\u0bc8\u0b95\u0bb1\u0bc8":e<10?" \u0b95\u0bbe\u0bb2\u0bc8":e<14?" \u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd":e<18?" \u0b8e\u0bb1\u0bcd\u0baa\u0bbe\u0b9f\u0bc1":e<22?" \u0bae\u0bbe\u0bb2\u0bc8":" \u0baf\u0bbe\u0bae\u0bae\u0bcd"},meridiemHour:function(e,a){return 12===e&&(e=0),"\u0baf\u0bbe\u0bae\u0bae\u0bcd"===a?e<2?e:e+12:"\u0bb5\u0bc8\u0b95\u0bb1\u0bc8"===a||"\u0b95\u0bbe\u0bb2\u0bc8"===a?e:"\u0ba8\u0ba3\u0bcd\u0baa\u0b95\u0bb2\u0bcd"===a&&e>=10?e:e+12},week:{dow:0,doy:6}}),e.defineLocale("te",{months:"\u0c1c\u0c28\u0c35\u0c30\u0c3f_\u0c2b\u0c3f\u0c2c\u0c4d\u0c30\u0c35\u0c30\u0c3f_\u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f_\u0c0f\u0c2a\u0c4d\u0c30\u0c3f\u0c32\u0c4d_\u0c2e\u0c47_\u0c1c\u0c42\u0c28\u0c4d_\u0c1c\u0c42\u0c32\u0c46\u0c56_\u0c06\u0c17\u0c38\u0c4d\u0c1f\u0c41_\u0c38\u0c46\u0c2a\u0c4d\u0c1f\u0c46\u0c02\u0c2c\u0c30\u0c4d_\u0c05\u0c15\u0c4d\u0c1f\u0c4b\u0c2c\u0c30\u0c4d_\u0c28\u0c35\u0c02\u0c2c\u0c30\u0c4d_\u0c21\u0c3f\u0c38\u0c46\u0c02\u0c2c\u0c30\u0c4d".split("_"),monthsShort:"\u0c1c\u0c28._\u0c2b\u0c3f\u0c2c\u0c4d\u0c30._\u0c2e\u0c3e\u0c30\u0c4d\u0c1a\u0c3f_\u0c0f\u0c2a\u0c4d\u0c30\u0c3f._\u0c2e\u0c47_\u0c1c\u0c42\u0c28\u0c4d_\u0c1c\u0c42\u0c32\u0c46\u0c56_\u0c06\u0c17._\u0c38\u0c46\u0c2a\u0c4d._\u0c05\u0c15\u0c4d\u0c1f\u0c4b._\u0c28\u0c35._\u0c21\u0c3f\u0c38\u0c46.".split("_"),monthsParseExact:!0,weekdays:"\u0c06\u0c26\u0c3f\u0c35\u0c3e\u0c30\u0c02_\u0c38\u0c4b\u0c2e\u0c35\u0c3e\u0c30\u0c02_\u0c2e\u0c02\u0c17\u0c33\u0c35\u0c3e\u0c30\u0c02_\u0c2c\u0c41\u0c27\u0c35\u0c3e\u0c30\u0c02_\u0c17\u0c41\u0c30\u0c41\u0c35\u0c3e\u0c30\u0c02_\u0c36\u0c41\u0c15\u0c4d\u0c30\u0c35\u0c3e\u0c30\u0c02_\u0c36\u0c28\u0c3f\u0c35\u0c3e\u0c30\u0c02".split("_"),weekdaysShort:"\u0c06\u0c26\u0c3f_\u0c38\u0c4b\u0c2e_\u0c2e\u0c02\u0c17\u0c33_\u0c2c\u0c41\u0c27_\u0c17\u0c41\u0c30\u0c41_\u0c36\u0c41\u0c15\u0c4d\u0c30_\u0c36\u0c28\u0c3f".split("_"),weekdaysMin:"\u0c06_\u0c38\u0c4b_\u0c2e\u0c02_\u0c2c\u0c41_\u0c17\u0c41_\u0c36\u0c41_\u0c36".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[\u0c28\u0c47\u0c21\u0c41] LT",nextDay:"[\u0c30\u0c47\u0c2a\u0c41] LT",nextWeek:"dddd, LT",lastDay:"[\u0c28\u0c3f\u0c28\u0c4d\u0c28] LT",lastWeek:"[\u0c17\u0c24] dddd, LT",sameElse:"L"},relativeTime:{future:"%s \u0c32\u0c4b",past:"%s \u0c15\u0c4d\u0c30\u0c3f\u0c24\u0c02",s:"\u0c15\u0c4a\u0c28\u0c4d\u0c28\u0c3f \u0c15\u0c4d\u0c37\u0c23\u0c3e\u0c32\u0c41",m:"\u0c12\u0c15 \u0c28\u0c3f\u0c2e\u0c3f\u0c37\u0c02",mm:"%d \u0c28\u0c3f\u0c2e\u0c3f\u0c37\u0c3e\u0c32\u0c41",h:"\u0c12\u0c15 \u0c17\u0c02\u0c1f",hh:"%d \u0c17\u0c02\u0c1f\u0c32\u0c41",d:"\u0c12\u0c15 \u0c30\u0c4b\u0c1c\u0c41",dd:"%d \u0c30\u0c4b\u0c1c\u0c41\u0c32\u0c41",M:"\u0c12\u0c15 \u0c28\u0c46\u0c32",MM:"%d \u0c28\u0c46\u0c32\u0c32\u0c41",y:"\u0c12\u0c15 \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c02",yy:"%d \u0c38\u0c02\u0c35\u0c24\u0c4d\u0c38\u0c30\u0c3e\u0c32\u0c41"},dayOfMonthOrdinalParse:/\d{1,2}\u0c35/,ordinal:"%d\u0c35",meridiemParse:/\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f|\u0c09\u0c26\u0c2f\u0c02|\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02|\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f"===a?e<4?e:e+12:"\u0c09\u0c26\u0c2f\u0c02"===a?e:"\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02"===a?e>=10?e:e+12:"\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02"===a?e+12:void 0},meridiem:function(e,a,t){return e<4?"\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f":e<10?"\u0c09\u0c26\u0c2f\u0c02":e<17?"\u0c2e\u0c27\u0c4d\u0c2f\u0c3e\u0c39\u0c4d\u0c28\u0c02":e<20?"\u0c38\u0c3e\u0c2f\u0c02\u0c24\u0c4d\u0c30\u0c02":"\u0c30\u0c3e\u0c24\u0c4d\u0c30\u0c3f"},week:{dow:0,doy:6}}),e.defineLocale("tet",{months:"Janeiru_Fevereiru_Marsu_Abril_Maiu_Juniu_Juliu_Augustu_Setembru_Outubru_Novembru_Dezembru".split("_"),monthsShort:"Jan_Fev_Mar_Abr_Mai_Jun_Jul_Aug_Set_Out_Nov_Dez".split("_"),weekdays:"Domingu_Segunda_Tersa_Kuarta_Kinta_Sexta_Sabadu".split("_"),weekdaysShort:"Dom_Seg_Ters_Kua_Kint_Sext_Sab".split("_"),weekdaysMin:"Do_Seg_Te_Ku_Ki_Sex_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Ohin iha] LT",nextDay:"[Aban iha] LT",nextWeek:"dddd [iha] LT",lastDay:"[Horiseik iha] LT",lastWeek:"dddd [semana kotuk] [iha] LT",sameElse:"L"},relativeTime:{future:"iha %s",past:"%s liuba",s:"minutu balun",m:"minutu ida",mm:"minutus %d",h:"horas ida",hh:"horas %d",d:"loron ida",dd:"loron %d",M:"fulan ida",MM:"fulan %d",y:"tinan ida",yy:"tinan %d"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th")},week:{dow:1,doy:4}}),e.defineLocale("th",{months:"\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21_\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c_\u0e21\u0e35\u0e19\u0e32\u0e04\u0e21_\u0e40\u0e21\u0e29\u0e32\u0e22\u0e19_\u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21_\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19_\u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21_\u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21_\u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19_\u0e15\u0e38\u0e25\u0e32\u0e04\u0e21_\u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19_\u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21".split("_"),monthsShort:"\u0e21.\u0e04._\u0e01.\u0e1e._\u0e21\u0e35.\u0e04._\u0e40\u0e21.\u0e22._\u0e1e.\u0e04._\u0e21\u0e34.\u0e22._\u0e01.\u0e04._\u0e2a.\u0e04._\u0e01.\u0e22._\u0e15.\u0e04._\u0e1e.\u0e22._\u0e18.\u0e04.".split("_"),monthsParseExact:!0,weekdays:"\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c_\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c_\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23_\u0e1e\u0e38\u0e18_\u0e1e\u0e24\u0e2b\u0e31\u0e2a\u0e1a\u0e14\u0e35_\u0e28\u0e38\u0e01\u0e23\u0e4c_\u0e40\u0e2a\u0e32\u0e23\u0e4c".split("_"),weekdaysShort:"\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c_\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c_\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23_\u0e1e\u0e38\u0e18_\u0e1e\u0e24\u0e2b\u0e31\u0e2a_\u0e28\u0e38\u0e01\u0e23\u0e4c_\u0e40\u0e2a\u0e32\u0e23\u0e4c".split("_"),weekdaysMin:"\u0e2d\u0e32._\u0e08._\u0e2d._\u0e1e._\u0e1e\u0e24._\u0e28._\u0e2a.".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY \u0e40\u0e27\u0e25\u0e32 H:mm",LLLL:"\u0e27\u0e31\u0e19dddd\u0e17\u0e35\u0e48 D MMMM YYYY \u0e40\u0e27\u0e25\u0e32 H:mm"},meridiemParse:/\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07|\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07/,isPM:function(e){return"\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07"===e},meridiem:function(e,a,t){return e<12?"\u0e01\u0e48\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07":"\u0e2b\u0e25\u0e31\u0e07\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07"},calendar:{sameDay:"[\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32] LT",nextDay:"[\u0e1e\u0e23\u0e38\u0e48\u0e07\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32] LT",nextWeek:"dddd[\u0e2b\u0e19\u0e49\u0e32 \u0e40\u0e27\u0e25\u0e32] LT",lastDay:"[\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e27\u0e32\u0e19\u0e19\u0e35\u0e49 \u0e40\u0e27\u0e25\u0e32] LT",lastWeek:"[\u0e27\u0e31\u0e19]dddd[\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27 \u0e40\u0e27\u0e25\u0e32] LT",sameElse:"L"},relativeTime:{future:"\u0e2d\u0e35\u0e01 %s",past:"%s\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27",s:"\u0e44\u0e21\u0e48\u0e01\u0e35\u0e48\u0e27\u0e34\u0e19\u0e32\u0e17\u0e35",m:"1 \u0e19\u0e32\u0e17\u0e35",mm:"%d \u0e19\u0e32\u0e17\u0e35",h:"1 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07",hh:"%d \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07",d:"1 \u0e27\u0e31\u0e19",dd:"%d \u0e27\u0e31\u0e19",M:"1 \u0e40\u0e14\u0e37\u0e2d\u0e19",MM:"%d \u0e40\u0e14\u0e37\u0e2d\u0e19",y:"1 \u0e1b\u0e35",yy:"%d \u0e1b\u0e35"}}),e.defineLocale("tl-ph",{months:"Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),monthsShort:"Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),weekdays:"Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),weekdaysShort:"Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),weekdaysMin:"Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"MM/D/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY HH:mm",LLLL:"dddd, MMMM DD, YYYY HH:mm"},calendar:{sameDay:"LT [ngayong araw]",nextDay:"[Bukas ng] LT",nextWeek:"LT [sa susunod na] dddd",lastDay:"LT [kahapon]",lastWeek:"LT [noong nakaraang] dddd",sameElse:"L"},relativeTime:{future:"sa loob ng %s",past:"%s ang nakalipas",s:"ilang segundo",m:"isang minuto",mm:"%d minuto",h:"isang oras",hh:"%d oras",d:"isang araw",dd:"%d araw",M:"isang buwan",MM:"%d buwan",y:"isang taon",yy:"%d taon"},dayOfMonthOrdinalParse:/\d{1,2}/,ordinal:function(e){return e},week:{dow:1,doy:4}});var Ur="pagh_wa\u2019_cha\u2019_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");e.defineLocale("tlh",{months:"tera\u2019 jar wa\u2019_tera\u2019 jar cha\u2019_tera\u2019 jar wej_tera\u2019 jar loS_tera\u2019 jar vagh_tera\u2019 jar jav_tera\u2019 jar Soch_tera\u2019 jar chorgh_tera\u2019 jar Hut_tera\u2019 jar wa\u2019maH_tera\u2019 jar wa\u2019maH wa\u2019_tera\u2019 jar wa\u2019maH cha\u2019".split("_"),monthsShort:"jar wa\u2019_jar cha\u2019_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa\u2019maH_jar wa\u2019maH wa\u2019_jar wa\u2019maH cha\u2019".split("_"),monthsParseExact:!0,weekdays:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),weekdaysShort:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),weekdaysMin:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[DaHjaj] LT",nextDay:"[wa\u2019leS] LT",nextWeek:"LLL",lastDay:"[wa\u2019Hu\u2019] LT",lastWeek:"LLL",sameElse:"L"},relativeTime:{future:function(e){var a=e;return a=-1!==e.indexOf("jaj")?a.slice(0,-3)+"leS":-1!==e.indexOf("jar")?a.slice(0,-3)+"waQ":-1!==e.indexOf("DIS")?a.slice(0,-3)+"nem":a+" pIq"},past:function(e){var a=e;return a=-1!==e.indexOf("jaj")?a.slice(0,-3)+"Hu\u2019":-1!==e.indexOf("jar")?a.slice(0,-3)+"wen":-1!==e.indexOf("DIS")?a.slice(0,-3)+"ben":a+" ret"},s:"puS lup",m:"wa\u2019 tup",mm:mt,h:"wa\u2019 rep",hh:mt,d:"wa\u2019 jaj",dd:mt,M:"wa\u2019 jar",MM:mt,y:"wa\u2019 DIS",yy:mt},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}});var Vr={1:"'inci",5:"'inci",8:"'inci",70:"'inci",80:"'inci",2:"'nci",7:"'nci",20:"'nci",50:"'nci",3:"'\xfcnc\xfc",4:"'\xfcnc\xfc",100:"'\xfcnc\xfc",6:"'nc\u0131",9:"'uncu",10:"'uncu",30:"'uncu",60:"'\u0131nc\u0131",90:"'\u0131nc\u0131"};e.defineLocale("tr",{months:"Ocak_\u015eubat_Mart_Nisan_May\u0131s_Haziran_Temmuz_A\u011fustos_Eyl\xfcl_Ekim_Kas\u0131m_Aral\u0131k".split("_"),monthsShort:"Oca_\u015eub_Mar_Nis_May_Haz_Tem_A\u011fu_Eyl_Eki_Kas_Ara".split("_"),weekdays:"Pazar_Pazartesi_Sal\u0131_\xc7ar\u015famba_Per\u015fembe_Cuma_Cumartesi".split("_"),weekdaysShort:"Paz_Pts_Sal_\xc7ar_Per_Cum_Cts".split("_"),weekdaysMin:"Pz_Pt_Sa_\xc7a_Pe_Cu_Ct".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[bug\xfcn saat] LT",nextDay:"[yar\u0131n saat] LT",nextWeek:"[gelecek] dddd [saat] LT",lastDay:"[d\xfcn] LT",lastWeek:"[ge\xe7en] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s \xf6nce",s:"birka\xe7 saniye",m:"bir dakika",mm:"%d dakika",h:"bir saat",hh:"%d saat",d:"bir g\xfcn",dd:"%d g\xfcn",M:"bir ay",MM:"%d ay",y:"bir y\u0131l",yy:"%d y\u0131l"},dayOfMonthOrdinalParse:/\d{1,2}'(inci|nci|\xfcnc\xfc|nc\u0131|uncu|\u0131nc\u0131)/,ordinal:function(e){if(0===e)return e+"'\u0131nc\u0131";var a=e%10,t=e%100-a,n=e>=100?100:null;return e+(Vr[a]||Vr[t]||Vr[n])},week:{dow:1,doy:7}}),e.defineLocale("tzl",{months:"Januar_Fevraglh_Mar\xe7_Avr\xefu_Mai_G\xfcn_Julia_Guscht_Setemvar_Listop\xe4ts_Noemvar_Zecemvar".split("_"),monthsShort:"Jan_Fev_Mar_Avr_Mai_G\xfcn_Jul_Gus_Set_Lis_Noe_Zec".split("_"),weekdays:"S\xfaladi_L\xfane\xe7i_Maitzi_M\xe1rcuri_Xh\xfaadi_Vi\xe9ner\xe7i_S\xe1turi".split("_"),weekdaysShort:"S\xfal_L\xfan_Mai_M\xe1r_Xh\xfa_Vi\xe9_S\xe1t".split("_"),weekdaysMin:"S\xfa_L\xfa_Ma_M\xe1_Xh_Vi_S\xe1".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"D. MMMM [dallas] YYYY",LLL:"D. MMMM [dallas] YYYY HH.mm",LLLL:"dddd, [li] D. MMMM [dallas] YYYY HH.mm"},meridiemParse:/d\'o|d\'a/i,isPM:function(e){return"d'o"===e.toLowerCase()},meridiem:function(e,a,t){return e>11?t?"d'o":"D'O":t?"d'a":"D'A"},calendar:{sameDay:"[oxhi \xe0] LT",nextDay:"[dem\xe0 \xe0] LT",nextWeek:"dddd [\xe0] LT",lastDay:"[ieiri \xe0] LT",lastWeek:"[s\xfcr el] dddd [lasteu \xe0] LT",sameElse:"L"},relativeTime:{future:"osprei %s",past:"ja%s",s:lt,m:lt,mm:lt,h:lt,hh:lt,d:lt,dd:lt,M:lt,MM:lt,y:lt,yy:lt},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),e.defineLocale("tzm-latn",{months:"innayr_br\u02e4ayr\u02e4_mar\u02e4s\u02e4_ibrir_mayyw_ywnyw_ywlywz_\u0263w\u0161t_\u0161wtanbir_kt\u02e4wbr\u02e4_nwwanbir_dwjnbir".split("_"),monthsShort:"innayr_br\u02e4ayr\u02e4_mar\u02e4s\u02e4_ibrir_mayyw_ywnyw_ywlywz_\u0263w\u0161t_\u0161wtanbir_kt\u02e4wbr\u02e4_nwwanbir_dwjnbir".split("_"),weekdays:"asamas_aynas_asinas_akras_akwas_asimwas_asi\u1e0dyas".split("_"),weekdaysShort:"asamas_aynas_asinas_akras_akwas_asimwas_asi\u1e0dyas".split("_"),weekdaysMin:"asamas_aynas_asinas_akras_akwas_asimwas_asi\u1e0dyas".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[asdkh g] LT",nextDay:"[aska g] LT",nextWeek:"dddd [g] LT",lastDay:"[assant g] LT",lastWeek:"dddd [g] LT",sameElse:"L"},relativeTime:{future:"dadkh s yan %s",past:"yan %s",s:"imik",m:"minu\u1e0d",mm:"%d minu\u1e0d",h:"sa\u025ba",hh:"%d tassa\u025bin",d:"ass",dd:"%d ossan",M:"ayowr",MM:"%d iyyirn",y:"asgas",yy:"%d isgasn"},week:{dow:6,doy:12}}),e.defineLocale("tzm",{months:"\u2d49\u2d4f\u2d4f\u2d30\u2d62\u2d54_\u2d31\u2d55\u2d30\u2d62\u2d55_\u2d4e\u2d30\u2d55\u2d5a_\u2d49\u2d31\u2d54\u2d49\u2d54_\u2d4e\u2d30\u2d62\u2d62\u2d53_\u2d62\u2d53\u2d4f\u2d62\u2d53_\u2d62\u2d53\u2d4d\u2d62\u2d53\u2d63_\u2d56\u2d53\u2d5b\u2d5c_\u2d5b\u2d53\u2d5c\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d3d\u2d5f\u2d53\u2d31\u2d55_\u2d4f\u2d53\u2d61\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d37\u2d53\u2d4a\u2d4f\u2d31\u2d49\u2d54".split("_"),monthsShort:"\u2d49\u2d4f\u2d4f\u2d30\u2d62\u2d54_\u2d31\u2d55\u2d30\u2d62\u2d55_\u2d4e\u2d30\u2d55\u2d5a_\u2d49\u2d31\u2d54\u2d49\u2d54_\u2d4e\u2d30\u2d62\u2d62\u2d53_\u2d62\u2d53\u2d4f\u2d62\u2d53_\u2d62\u2d53\u2d4d\u2d62\u2d53\u2d63_\u2d56\u2d53\u2d5b\u2d5c_\u2d5b\u2d53\u2d5c\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d3d\u2d5f\u2d53\u2d31\u2d55_\u2d4f\u2d53\u2d61\u2d30\u2d4f\u2d31\u2d49\u2d54_\u2d37\u2d53\u2d4a\u2d4f\u2d31\u2d49\u2d54".split("_"),weekdays:"\u2d30\u2d59\u2d30\u2d4e\u2d30\u2d59_\u2d30\u2d62\u2d4f\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4f\u2d30\u2d59_\u2d30\u2d3d\u2d54\u2d30\u2d59_\u2d30\u2d3d\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4e\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d39\u2d62\u2d30\u2d59".split("_"),weekdaysShort:"\u2d30\u2d59\u2d30\u2d4e\u2d30\u2d59_\u2d30\u2d62\u2d4f\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4f\u2d30\u2d59_\u2d30\u2d3d\u2d54\u2d30\u2d59_\u2d30\u2d3d\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4e\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d39\u2d62\u2d30\u2d59".split("_"),weekdaysMin:"\u2d30\u2d59\u2d30\u2d4e\u2d30\u2d59_\u2d30\u2d62\u2d4f\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4f\u2d30\u2d59_\u2d30\u2d3d\u2d54\u2d30\u2d59_\u2d30\u2d3d\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d4e\u2d61\u2d30\u2d59_\u2d30\u2d59\u2d49\u2d39\u2d62\u2d30\u2d59".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[\u2d30\u2d59\u2d37\u2d45 \u2d34] LT",nextDay:"[\u2d30\u2d59\u2d3d\u2d30 \u2d34] LT",nextWeek:"dddd [\u2d34] LT",lastDay:"[\u2d30\u2d5a\u2d30\u2d4f\u2d5c \u2d34] LT",lastWeek:"dddd [\u2d34] LT",sameElse:"L"},relativeTime:{future:"\u2d37\u2d30\u2d37\u2d45 \u2d59 \u2d62\u2d30\u2d4f %s",past:"\u2d62\u2d30\u2d4f %s",s:"\u2d49\u2d4e\u2d49\u2d3d",m:"\u2d4e\u2d49\u2d4f\u2d53\u2d3a",mm:"%d \u2d4e\u2d49\u2d4f\u2d53\u2d3a",h:"\u2d59\u2d30\u2d44\u2d30",hh:"%d \u2d5c\u2d30\u2d59\u2d59\u2d30\u2d44\u2d49\u2d4f",d:"\u2d30\u2d59\u2d59",dd:"%d o\u2d59\u2d59\u2d30\u2d4f",M:"\u2d30\u2d62o\u2d53\u2d54",MM:"%d \u2d49\u2d62\u2d62\u2d49\u2d54\u2d4f",y:"\u2d30\u2d59\u2d33\u2d30\u2d59",yy:"%d \u2d49\u2d59\u2d33\u2d30\u2d59\u2d4f"},week:{dow:6,doy:12}}),e.defineLocale("uk",{months:{format:"\u0441\u0456\u0447\u043d\u044f_\u043b\u044e\u0442\u043e\u0433\u043e_\u0431\u0435\u0440\u0435\u0437\u043d\u044f_\u043a\u0432\u0456\u0442\u043d\u044f_\u0442\u0440\u0430\u0432\u043d\u044f_\u0447\u0435\u0440\u0432\u043d\u044f_\u043b\u0438\u043f\u043d\u044f_\u0441\u0435\u0440\u043f\u043d\u044f_\u0432\u0435\u0440\u0435\u0441\u043d\u044f_\u0436\u043e\u0432\u0442\u043d\u044f_\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434\u0430_\u0433\u0440\u0443\u0434\u043d\u044f".split("_"),standalone:"\u0441\u0456\u0447\u0435\u043d\u044c_\u043b\u044e\u0442\u0438\u0439_\u0431\u0435\u0440\u0435\u0437\u0435\u043d\u044c_\u043a\u0432\u0456\u0442\u0435\u043d\u044c_\u0442\u0440\u0430\u0432\u0435\u043d\u044c_\u0447\u0435\u0440\u0432\u0435\u043d\u044c_\u043b\u0438\u043f\u0435\u043d\u044c_\u0441\u0435\u0440\u043f\u0435\u043d\u044c_\u0432\u0435\u0440\u0435\u0441\u0435\u043d\u044c_\u0436\u043e\u0432\u0442\u0435\u043d\u044c_\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434_\u0433\u0440\u0443\u0434\u0435\u043d\u044c".split("_")},monthsShort:"\u0441\u0456\u0447_\u043b\u044e\u0442_\u0431\u0435\u0440_\u043a\u0432\u0456\u0442_\u0442\u0440\u0430\u0432_\u0447\u0435\u0440\u0432_\u043b\u0438\u043f_\u0441\u0435\u0440\u043f_\u0432\u0435\u0440_\u0436\u043e\u0432\u0442_\u043b\u0438\u0441\u0442_\u0433\u0440\u0443\u0434".split("_"),weekdays:function(e,a){var t={nominative:"\u043d\u0435\u0434\u0456\u043b\u044f_\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a_\u0432\u0456\u0432\u0442\u043e\u0440\u043e\u043a_\u0441\u0435\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440_\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u044f_\u0441\u0443\u0431\u043e\u0442\u0430".split("_"),accusative:"\u043d\u0435\u0434\u0456\u043b\u044e_\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a_\u0432\u0456\u0432\u0442\u043e\u0440\u043e\u043a_\u0441\u0435\u0440\u0435\u0434\u0443_\u0447\u0435\u0442\u0432\u0435\u0440_\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u044e_\u0441\u0443\u0431\u043e\u0442\u0443".split("_"),genitive:"\u043d\u0435\u0434\u0456\u043b\u0456_\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043a\u0430_\u0432\u0456\u0432\u0442\u043e\u0440\u043a\u0430_\u0441\u0435\u0440\u0435\u0434\u0438_\u0447\u0435\u0442\u0432\u0435\u0440\u0433\u0430_\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u0456_\u0441\u0443\u0431\u043e\u0442\u0438".split("_")};return e?t[/(\[[\u0412\u0432\u0423\u0443]\]) ?dddd/.test(a)?"accusative":/\[?(?:\u043c\u0438\u043d\u0443\u043b\u043e\u0457|\u043d\u0430\u0441\u0442\u0443\u043f\u043d\u043e\u0457)? ?\] ?dddd/.test(a)?"genitive":"nominative"][e.day()]:t.nominative},weekdaysShort:"\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),weekdaysMin:"\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY \u0440.",LLL:"D MMMM YYYY \u0440., HH:mm",LLLL:"dddd, D MMMM YYYY \u0440., HH:mm"},calendar:{sameDay:Lt("[\u0421\u044c\u043e\u0433\u043e\u0434\u043d\u0456 "),nextDay:Lt("[\u0417\u0430\u0432\u0442\u0440\u0430 "),lastDay:Lt("[\u0412\u0447\u043e\u0440\u0430 "),nextWeek:Lt("[\u0423] dddd ["),lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return Lt("[\u041c\u0438\u043d\u0443\u043b\u043e\u0457] dddd [").call(this);case 1:case 2:case 4:return Lt("[\u041c\u0438\u043d\u0443\u043b\u043e\u0433\u043e] dddd [").call(this)}},sameElse:"L"},relativeTime:{future:"\u0437\u0430 %s",past:"%s \u0442\u043e\u043c\u0443",s:"\u0434\u0435\u043a\u0456\u043b\u044c\u043a\u0430 \u0441\u0435\u043a\u0443\u043d\u0434",m:ht,mm:ht,h:"\u0433\u043e\u0434\u0438\u043d\u0443",hh:ht,d:"\u0434\u0435\u043d\u044c",dd:ht,M:"\u043c\u0456\u0441\u044f\u0446\u044c",MM:ht,y:"\u0440\u0456\u043a",yy:ht},meridiemParse:/\u043d\u043e\u0447\u0456|\u0440\u0430\u043d\u043a\u0443|\u0434\u043d\u044f|\u0432\u0435\u0447\u043e\u0440\u0430/,isPM:function(e){return/^(\u0434\u043d\u044f|\u0432\u0435\u0447\u043e\u0440\u0430)$/.test(e)},meridiem:function(e,a,t){return e<4?"\u043d\u043e\u0447\u0456":e<12?"\u0440\u0430\u043d\u043a\u0443":e<17?"\u0434\u043d\u044f":"\u0432\u0435\u0447\u043e\u0440\u0430"},dayOfMonthOrdinalParse:/\d{1,2}-(\u0439|\u0433\u043e)/,ordinal:function(e,a){switch(a){case"M":case"d":case"DDD":case"w":case"W":return e+"-\u0439";case"D":return e+"-\u0433\u043e";default:return e}},week:{dow:1,doy:7}});var Kr=["\u062c\u0646\u0648\u0631\u06cc","\u0641\u0631\u0648\u0631\u06cc","\u0645\u0627\u0631\u0686","\u0627\u067e\u0631\u06cc\u0644","\u0645\u0626\u06cc","\u062c\u0648\u0646","\u062c\u0648\u0644\u0627\u0626\u06cc","\u0627\u06af\u0633\u062a","\u0633\u062a\u0645\u0628\u0631","\u0627\u06a9\u062a\u0648\u0628\u0631","\u0646\u0648\u0645\u0628\u0631","\u062f\u0633\u0645\u0628\u0631"],$r=["\u0627\u062a\u0648\u0627\u0631","\u067e\u06cc\u0631","\u0645\u0646\u06af\u0644","\u0628\u062f\u06be","\u062c\u0645\u0639\u0631\u0627\u062a","\u062c\u0645\u0639\u06c1","\u06c1\u0641\u062a\u06c1"];return e.defineLocale("ur",{months:Kr,monthsShort:Kr,weekdays:$r,weekdaysShort:$r,weekdaysMin:$r,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd\u060c D MMMM YYYY HH:mm"},meridiemParse:/\u0635\u0628\u062d|\u0634\u0627\u0645/,isPM:function(e){return"\u0634\u0627\u0645"===e},meridiem:function(e,a,t){return e<12?"\u0635\u0628\u062d":"\u0634\u0627\u0645"},calendar:{sameDay:"[\u0622\u062c \u0628\u0648\u0642\u062a] LT",nextDay:"[\u06a9\u0644 \u0628\u0648\u0642\u062a] LT",nextWeek:"dddd [\u0628\u0648\u0642\u062a] LT",lastDay:"[\u06af\u0630\u0634\u062a\u06c1 \u0631\u0648\u0632 \u0628\u0648\u0642\u062a] LT",lastWeek:"[\u06af\u0630\u0634\u062a\u06c1] dddd [\u0628\u0648\u0642\u062a] LT",sameElse:"L"},relativeTime:{future:"%s \u0628\u0639\u062f",past:"%s \u0642\u0628\u0644",s:"\u0686\u0646\u062f \u0633\u06cc\u06a9\u0646\u0688",m:"\u0627\u06cc\u06a9 \u0645\u0646\u0679",mm:"%d \u0645\u0646\u0679",h:"\u0627\u06cc\u06a9 \u06af\u06be\u0646\u0679\u06c1",hh:"%d \u06af\u06be\u0646\u0679\u06d2",d:"\u0627\u06cc\u06a9 \u062f\u0646",dd:"%d \u062f\u0646",M:"\u0627\u06cc\u06a9 \u0645\u0627\u06c1",MM:"%d \u0645\u0627\u06c1",y:"\u0627\u06cc\u06a9 \u0633\u0627\u0644",yy:"%d \u0633\u0627\u0644"},preparse:function(e){return e.replace(/\u060c/g,",")},postformat:function(e){return e.replace(/,/g,"\u060c")},week:{dow:1,doy:4}}),e.defineLocale("uz-latn",{months:"Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),monthsShort:"Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),weekdays:"Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),weekdaysShort:"Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),weekdaysMin:"Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"D MMMM YYYY, dddd HH:mm"},calendar:{sameDay:"[Bugun soat] LT [da]",nextDay:"[Ertaga] LT [da]",nextWeek:"dddd [kuni soat] LT [da]",lastDay:"[Kecha soat] LT [da]",lastWeek:"[O'tgan] dddd [kuni soat] LT [da]",sameElse:"L"},relativeTime:{future:"Yaqin %s ichida",past:"Bir necha %s oldin",s:"soniya",m:"bir daqiqa",mm:"%d daqiqa",h:"bir soat",hh:"%d soat",d:"bir kun",dd:"%d kun",M:"bir oy",MM:"%d oy",y:"bir yil",yy:"%d yil"},week:{dow:1,doy:7}}),e.defineLocale("uz",{months:"\u044f\u043d\u0432\u0430\u0440_\u0444\u0435\u0432\u0440\u0430\u043b_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440_\u043e\u043a\u0442\u044f\u0431\u0440_\u043d\u043e\u044f\u0431\u0440_\u0434\u0435\u043a\u0430\u0431\u0440".split("_"),monthsShort:"\u044f\u043d\u0432_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0439_\u0438\u044e\u043d_\u0438\u044e\u043b_\u0430\u0432\u0433_\u0441\u0435\u043d_\u043e\u043a\u0442_\u043d\u043e\u044f_\u0434\u0435\u043a".split("_"),weekdays:"\u042f\u043a\u0448\u0430\u043d\u0431\u0430_\u0414\u0443\u0448\u0430\u043d\u0431\u0430_\u0421\u0435\u0448\u0430\u043d\u0431\u0430_\u0427\u043e\u0440\u0448\u0430\u043d\u0431\u0430_\u041f\u0430\u0439\u0448\u0430\u043d\u0431\u0430_\u0416\u0443\u043c\u0430_\u0428\u0430\u043d\u0431\u0430".split("_"),weekdaysShort:"\u042f\u043a\u0448_\u0414\u0443\u0448_\u0421\u0435\u0448_\u0427\u043e\u0440_\u041f\u0430\u0439_\u0416\u0443\u043c_\u0428\u0430\u043d".split("_"),weekdaysMin:"\u042f\u043a_\u0414\u0443_\u0421\u0435_\u0427\u043e_\u041f\u0430_\u0416\u0443_\u0428\u0430".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"D MMMM YYYY, dddd HH:mm"},calendar:{sameDay:"[\u0411\u0443\u0433\u0443\u043d \u0441\u043e\u0430\u0442] LT [\u0434\u0430]",nextDay:"[\u042d\u0440\u0442\u0430\u0433\u0430] LT [\u0434\u0430]",nextWeek:"dddd [\u043a\u0443\u043d\u0438 \u0441\u043e\u0430\u0442] LT [\u0434\u0430]",lastDay:"[\u041a\u0435\u0447\u0430 \u0441\u043e\u0430\u0442] LT [\u0434\u0430]",lastWeek:"[\u0423\u0442\u0433\u0430\u043d] dddd [\u043a\u0443\u043d\u0438 \u0441\u043e\u0430\u0442] LT [\u0434\u0430]",sameElse:"L"},relativeTime:{future:"\u042f\u043a\u0438\u043d %s \u0438\u0447\u0438\u0434\u0430",past:"\u0411\u0438\u0440 \u043d\u0435\u0447\u0430 %s \u043e\u043b\u0434\u0438\u043d",s:"\u0444\u0443\u0440\u0441\u0430\u0442",m:"\u0431\u0438\u0440 \u0434\u0430\u043a\u0438\u043a\u0430",mm:"%d \u0434\u0430\u043a\u0438\u043a\u0430",h:"\u0431\u0438\u0440 \u0441\u043e\u0430\u0442",hh:"%d \u0441\u043e\u0430\u0442",d:"\u0431\u0438\u0440 \u043a\u0443\u043d",dd:"%d \u043a\u0443\u043d",M:"\u0431\u0438\u0440 \u043e\u0439",MM:"%d \u043e\u0439",y:"\u0431\u0438\u0440 \u0439\u0438\u043b",yy:"%d \u0439\u0438\u043b"},week:{dow:1,doy:7}}),e.defineLocale("vi",{months:"th\xe1ng 1_th\xe1ng 2_th\xe1ng 3_th\xe1ng 4_th\xe1ng 5_th\xe1ng 6_th\xe1ng 7_th\xe1ng 8_th\xe1ng 9_th\xe1ng 10_th\xe1ng 11_th\xe1ng 12".split("_"),monthsShort:"Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),monthsParseExact:!0,weekdays:"ch\u1ee7 nh\u1eadt_th\u1ee9 hai_th\u1ee9 ba_th\u1ee9 t\u01b0_th\u1ee9 n\u0103m_th\u1ee9 s\xe1u_th\u1ee9 b\u1ea3y".split("_"),weekdaysShort:"CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysMin:"CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysParseExact:!0,meridiemParse:/sa|ch/i,isPM:function(e){return/^ch$/i.test(e)},meridiem:function(e,a,t){return e<12?t?"sa":"SA":t?"ch":"CH"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [n\u0103m] YYYY",LLL:"D MMMM [n\u0103m] YYYY HH:mm",LLLL:"dddd, D MMMM [n\u0103m] YYYY HH:mm",l:"DD/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},calendar:{sameDay:"[H\xf4m nay l\xfac] LT",nextDay:"[Ng\xe0y mai l\xfac] LT",nextWeek:"dddd [tu\u1ea7n t\u1edbi l\xfac] LT",lastDay:"[H\xf4m qua l\xfac] LT",lastWeek:"dddd [tu\u1ea7n r\u1ed3i l\xfac] LT",sameElse:"L"},relativeTime:{future:"%s t\u1edbi",past:"%s tr\u01b0\u1edbc",s:"v\xe0i gi\xe2y",m:"m\u1ed9t ph\xfat",mm:"%d ph\xfat",h:"m\u1ed9t gi\u1edd",hh:"%d gi\u1edd",d:"m\u1ed9t ng\xe0y",dd:"%d ng\xe0y",M:"m\u1ed9t th\xe1ng",MM:"%d th\xe1ng",y:"m\u1ed9t n\u0103m",yy:"%d n\u0103m"},dayOfMonthOrdinalParse:/\d{1,2}/,ordinal:function(e){return e},week:{dow:1,doy:4}}),e.defineLocale("x-pseudo",{months:"J~\xe1\xf1\xfa\xe1~r\xfd_F~\xe9br\xfa~\xe1r\xfd_~M\xe1rc~h_\xc1p~r\xedl_~M\xe1\xfd_~J\xfa\xf1\xe9~_J\xfal~\xfd_\xc1\xfa~g\xfast~_S\xe9p~t\xe9mb~\xe9r_\xd3~ct\xf3b~\xe9r_\xd1~\xf3v\xe9m~b\xe9r_~D\xe9c\xe9~mb\xe9r".split("_"),monthsShort:"J~\xe1\xf1_~F\xe9b_~M\xe1r_~\xc1pr_~M\xe1\xfd_~J\xfa\xf1_~J\xfal_~\xc1\xfag_~S\xe9p_~\xd3ct_~\xd1\xf3v_~D\xe9c".split("_"),monthsParseExact:!0,weekdays:"S~\xfa\xf1d\xe1~\xfd_M\xf3~\xf1d\xe1\xfd~_T\xfa\xe9~sd\xe1\xfd~_W\xe9d~\xf1\xe9sd~\xe1\xfd_T~h\xfars~d\xe1\xfd_~Fr\xedd~\xe1\xfd_S~\xe1t\xfar~d\xe1\xfd".split("_"),weekdaysShort:"S~\xfa\xf1_~M\xf3\xf1_~T\xfa\xe9_~W\xe9d_~Th\xfa_~Fr\xed_~S\xe1t".split("_"),weekdaysMin:"S~\xfa_M\xf3~_T\xfa_~W\xe9_T~h_Fr~_S\xe1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[T~\xf3d\xe1~\xfd \xe1t] LT",nextDay:"[T~\xf3m\xf3~rr\xf3~w \xe1t] LT",nextWeek:"dddd [\xe1t] LT",lastDay:"[\xdd~\xe9st~\xe9rd\xe1~\xfd \xe1t] LT",lastWeek:"[L~\xe1st] dddd [\xe1t] LT",sameElse:"L"},relativeTime:{future:"\xed~\xf1 %s",past:"%s \xe1~g\xf3",s:"\xe1 ~f\xe9w ~s\xe9c\xf3~\xf1ds",m:"\xe1 ~m\xed\xf1~\xfat\xe9",mm:"%d m~\xed\xf1\xfa~t\xe9s",h:"\xe1~\xf1 h\xf3~\xfar",hh:"%d h~\xf3\xfars",d:"\xe1 ~d\xe1\xfd",dd:"%d d~\xe1\xfds",M:"\xe1 ~m\xf3\xf1~th",MM:"%d m~\xf3\xf1t~hs",y:"\xe1 ~\xfd\xe9\xe1r",yy:"%d \xfd~\xe9\xe1rs"},dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var a=e%10;return e+(1==~~(e%100/10)?"th":1===a?"st":2===a?"nd":3===a?"rd":"th")},week:{dow:1,doy:4}}),e.defineLocale("yo",{months:"S\u1eb9\u0301r\u1eb9\u0301_E\u0300re\u0300le\u0300_\u1eb8r\u1eb9\u0300na\u0300_I\u0300gbe\u0301_E\u0300bibi_O\u0300ku\u0300du_Ag\u1eb9mo_O\u0300gu\u0301n_Owewe_\u1ecc\u0300wa\u0300ra\u0300_Be\u0301lu\u0301_\u1ecc\u0300p\u1eb9\u0300\u0300".split("_"),monthsShort:"S\u1eb9\u0301r_E\u0300rl_\u1eb8rn_I\u0300gb_E\u0300bi_O\u0300ku\u0300_Ag\u1eb9_O\u0300gu\u0301_Owe_\u1ecc\u0300wa\u0300_Be\u0301l_\u1ecc\u0300p\u1eb9\u0300\u0300".split("_"),weekdays:"A\u0300i\u0300ku\u0301_Aje\u0301_I\u0300s\u1eb9\u0301gun_\u1eccj\u1ecd\u0301ru\u0301_\u1eccj\u1ecd\u0301b\u1ecd_\u1eb8ti\u0300_A\u0300ba\u0301m\u1eb9\u0301ta".split("_"),weekdaysShort:"A\u0300i\u0300k_Aje\u0301_I\u0300s\u1eb9\u0301_\u1eccjr_\u1eccjb_\u1eb8ti\u0300_A\u0300ba\u0301".split("_"),weekdaysMin:"A\u0300i\u0300_Aj_I\u0300s_\u1eccr_\u1eccb_\u1eb8t_A\u0300b".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[O\u0300ni\u0300 ni] LT",nextDay:"[\u1ecc\u0300la ni] LT",nextWeek:"dddd [\u1eccs\u1eb9\u0300 to\u0301n'b\u1ecd] [ni] LT",lastDay:"[A\u0300na ni] LT",lastWeek:"dddd [\u1eccs\u1eb9\u0300 to\u0301l\u1ecd\u0301] [ni] LT",sameElse:"L"},relativeTime:{future:"ni\u0301 %s",past:"%s k\u1ecdja\u0301",s:"i\u0300s\u1eb9ju\u0301 aaya\u0301 die",m:"i\u0300s\u1eb9ju\u0301 kan",mm:"i\u0300s\u1eb9ju\u0301 %d",h:"wa\u0301kati kan",hh:"wa\u0301kati %d",d:"\u1ecdj\u1ecd\u0301 kan",dd:"\u1ecdj\u1ecd\u0301 %d",M:"osu\u0300 kan",MM:"osu\u0300 %d",y:"\u1ecddu\u0301n kan",yy:"\u1ecddu\u0301n %d"},dayOfMonthOrdinalParse:/\u1ecdj\u1ecd\u0301\s\d{1,2}/,ordinal:"\u1ecdj\u1ecd\u0301 %d",week:{dow:1,doy:4}}),e.defineLocale("zh-cn",{months:"\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"),monthsShort:"1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),weekdays:"\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"),weekdaysShort:"\u5468\u65e5_\u5468\u4e00_\u5468\u4e8c_\u5468\u4e09_\u5468\u56db_\u5468\u4e94_\u5468\u516d".split("_"),weekdaysMin:"\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY\u5e74MMMD\u65e5",LL:"YYYY\u5e74MMMD\u65e5",LLL:"YYYY\u5e74MMMD\u65e5Ah\u70b9mm\u5206",LLLL:"YYYY\u5e74MMMD\u65e5ddddAh\u70b9mm\u5206",l:"YYYY\u5e74MMMD\u65e5",ll:"YYYY\u5e74MMMD\u65e5",lll:"YYYY\u5e74MMMD\u65e5 HH:mm",llll:"YYYY\u5e74MMMD\u65e5dddd HH:mm"},meridiemParse:/\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u51cc\u6668"===a||"\u65e9\u4e0a"===a||"\u4e0a\u5348"===a?e:"\u4e0b\u5348"===a||"\u665a\u4e0a"===a?e+12:e>=11?e:e+12},meridiem:function(e,a,t){var n=100*e+a;return n<600?"\u51cc\u6668":n<900?"\u65e9\u4e0a":n<1130?"\u4e0a\u5348":n<1230?"\u4e2d\u5348":n<1800?"\u4e0b\u5348":"\u665a\u4e0a"},calendar:{sameDay:"[\u4eca\u5929]LT",nextDay:"[\u660e\u5929]LT",nextWeek:"[\u4e0b]ddddLT",lastDay:"[\u6628\u5929]LT",lastWeek:"[\u4e0a]ddddLT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(\u65e5|\u6708|\u5468)/,ordinal:function(e,a){switch(a){case"d":case"D":case"DDD":return e+"\u65e5";case"M":return e+"\u6708";case"w":case"W":return e+"\u5468";default:return e}},relativeTime:{future:"%s\u5185",past:"%s\u524d",s:"\u51e0\u79d2",m:"1 \u5206\u949f",mm:"%d \u5206\u949f",h:"1 \u5c0f\u65f6",hh:"%d \u5c0f\u65f6",d:"1 \u5929",dd:"%d \u5929",M:"1 \u4e2a\u6708",MM:"%d \u4e2a\u6708",y:"1 \u5e74",yy:"%d \u5e74"},week:{dow:1,doy:4}}),e.defineLocale("zh-hk",{months:"\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"),monthsShort:"1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),weekdays:"\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"),weekdaysShort:"\u9031\u65e5_\u9031\u4e00_\u9031\u4e8c_\u9031\u4e09_\u9031\u56db_\u9031\u4e94_\u9031\u516d".split("_"),weekdaysMin:"\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY\u5e74MMMD\u65e5",LL:"YYYY\u5e74MMMD\u65e5",LLL:"YYYY\u5e74MMMD\u65e5 HH:mm",LLLL:"YYYY\u5e74MMMD\u65e5dddd HH:mm",l:"YYYY\u5e74MMMD\u65e5",ll:"YYYY\u5e74MMMD\u65e5",lll:"YYYY\u5e74MMMD\u65e5 HH:mm",llll:"YYYY\u5e74MMMD\u65e5dddd HH:mm"},meridiemParse:/\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u51cc\u6668"===a||"\u65e9\u4e0a"===a||"\u4e0a\u5348"===a?e:"\u4e2d\u5348"===a?e>=11?e:e+12:"\u4e0b\u5348"===a||"\u665a\u4e0a"===a?e+12:void 0},meridiem:function(e,a,t){var n=100*e+a;return n<600?"\u51cc\u6668":n<900?"\u65e9\u4e0a":n<1130?"\u4e0a\u5348":n<1230?"\u4e2d\u5348":n<1800?"\u4e0b\u5348":"\u665a\u4e0a"},calendar:{sameDay:"[\u4eca\u5929]LT",nextDay:"[\u660e\u5929]LT",nextWeek:"[\u4e0b]ddddLT",lastDay:"[\u6628\u5929]LT",lastWeek:"[\u4e0a]ddddLT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(\u65e5|\u6708|\u9031)/,ordinal:function(e,a){switch(a){case"d":case"D":case"DDD":return e+"\u65e5";case"M":return e+"\u6708";case"w":case"W":return e+"\u9031";default:return e}},relativeTime:{future:"%s\u5167",past:"%s\u524d",s:"\u5e7e\u79d2",m:"1 \u5206\u9418",mm:"%d \u5206\u9418",h:"1 \u5c0f\u6642",hh:"%d \u5c0f\u6642",d:"1 \u5929",dd:"%d \u5929",M:"1 \u500b\u6708",MM:"%d \u500b\u6708",y:"1 \u5e74",yy:"%d \u5e74"}}),e.defineLocale("zh-tw",{months:"\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"),monthsShort:"1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),weekdays:"\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"),weekdaysShort:"\u9031\u65e5_\u9031\u4e00_\u9031\u4e8c_\u9031\u4e09_\u9031\u56db_\u9031\u4e94_\u9031\u516d".split("_"),weekdaysMin:"\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY\u5e74MMMD\u65e5",LL:"YYYY\u5e74MMMD\u65e5",LLL:"YYYY\u5e74MMMD\u65e5 HH:mm",LLLL:"YYYY\u5e74MMMD\u65e5dddd HH:mm",l:"YYYY\u5e74MMMD\u65e5",ll:"YYYY\u5e74MMMD\u65e5",lll:"YYYY\u5e74MMMD\u65e5 HH:mm",llll:"YYYY\u5e74MMMD\u65e5dddd HH:mm"},meridiemParse:/\u51cc\u6668|\u65e9\u4e0a|\u4e0a\u5348|\u4e2d\u5348|\u4e0b\u5348|\u665a\u4e0a/,meridiemHour:function(e,a){return 12===e&&(e=0),"\u51cc\u6668"===a||"\u65e9\u4e0a"===a||"\u4e0a\u5348"===a?e:"\u4e2d\u5348"===a?e>=11?e:e+12:"\u4e0b\u5348"===a||"\u665a\u4e0a"===a?e+12:void 0},meridiem:function(e,a,t){var n=100*e+a;return n<600?"\u51cc\u6668":n<900?"\u65e9\u4e0a":n<1130?"\u4e0a\u5348":n<1230?"\u4e2d\u5348":n<1800?"\u4e0b\u5348":"\u665a\u4e0a"},calendar:{sameDay:"[\u4eca\u5929]LT",nextDay:"[\u660e\u5929]LT",nextWeek:"[\u4e0b]ddddLT",lastDay:"[\u6628\u5929]LT",lastWeek:"[\u4e0a]ddddLT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(\u65e5|\u6708|\u9031)/,ordinal:function(e,a){switch(a){case"d":case"D":case"DDD":return e+"\u65e5";case"M":return e+"\u6708";case"w":case"W":return e+"\u9031";default:return e}},relativeTime:{future:"%s\u5167",past:"%s\u524d",s:"\u5e7e\u79d2",m:"1 \u5206\u9418",mm:"%d \u5206\u9418",h:"1 \u5c0f\u6642",hh:"%d \u5c0f\u6642",d:"1 \u5929",dd:"%d \u5929",M:"1 \u500b\u6708",MM:"%d \u500b\u6708",y:"1 \u5e74",yy:"%d \u5e74"}}),e.locale("en"),e});