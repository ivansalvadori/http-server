/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});

$(document).ready(function() {
  parseBibFromRepo();
//parseBib();


});


var bibSample = "@inproceedings{Salvadori2019, author = {Salvadori, Ivan Luiz and Huf, Alexis and Siqueira, Frank}, booktitle = {2019 IEEE 43rd Annual Computer Software and Applications Conference (COMPSAC)}, doi = {10.1109/COMPSAC.2019.00065}, file = {:home/ivan/.local/share/data/Mendeley Ltd./Mendeley Desktop/Downloaded/Salvadori, Huf, Siqueira - 2019 - Semantic Data-Driven Microservices.pdf:pdf}, isbn = {978-1-7281-2607-4}, month = {jul}, pages = {402--410}, publisher = {IEEE}, title = {{Semantic Data-Driven Microservices}}, url = {https://ieeexplore.ieee.org/document/8754154/}, year = {2019} } @article{Oliveira2019a, author = {Oliveira, Bruno C.N. and Huf, Alexis and Salvadori, Ivan Luiz and Siqueira, Frank}, doi = {10.1108/IJWIS-04-2018-0020}, file = {:home/ivan/.local/share/data/Mendeley Ltd./Mendeley Desktop/Downloaded/Oliveira et al. - 2019 - OntoGenesis an architecture for automatic semantic enhancement of data services.pdf:pdf}, issn = {1744-0084}, journal = {International Journal of Web Information Systems}, month = {apr}, number = {1}, pages = {2--27}, title = {{OntoGenesis: an architecture for automatic semantic enhancement of data services}},url = {https://www.emeraldinsight.com/doi/10.1108/IJWIS-04-2018-0020 https://www.emerald.com/insight/content/doi/10.1108/IJWIS-04-2018-0020/full/html}, volume = {15},year = {2019}}"


var parseBibFromRepo = function() {
	$.ajax({
		url: "https://ivansalvadori.github.io/publications.bib",
		type: 'GET',
                dataType: 'text',
		async: true,
		crossDomain: true,
		success: function(bibtext) {
		 parseBib(bibtext);
			
		},
		error: function() {
			
		}
	});
};

var parseBib = function(bibText){
	parse = BibtexParser(bibText);
	pubs = parse.entries;
	$("#pub-div").append("<ul id='pub-ul'></ul>");
	$.each( pubs, function( key, pub ) {
		venue =  pub.Fields.booktitle;
		if(!venue){
			venue = pub.Fields.journal;
		}
		if(!venue){
			venue='';		
		}

		
		volume =  pub.Fields.volume;
		if(!volume){
			volume = '';
		}
		else{
			volume = volume+ ', '
		}

		pages =  pub.Fields.pages;
		if(!pages){
			pages = '';
		}

		doi =  pub.Fields.doi;
		if(!doi){
			doi = '';
		}
		else{
			doi = '<a href="https://doi.org/'+pub.Fields.doi+'">https://doi.org/'+pub.Fields.doi + '</a>'
		}
		
		
		
		$("#pub-ul").append('<li>'+ pub.Fields.author +'. (' + pub.Fields.year + '). '+ pub.Fields.title + '. ' + venue + '. ' + volume + pages + '. '+ doi +'</li>')
			  
	});
}



/**
 * Parser.js
 * Copyright 2012-13 Mayank Lahiri
 * mlahiri@gmail.com
 * Released under the BSD License.
 *
 * A forgiving Bibtex parser that can:
 * 
 * (1) operate in streaming or block mode, extracting entries as dictionaries. 
 * (2) convert Latex special characters to UTF-8.
 * (3) best-effort parse malformed entries.
 * (4) run in a CommonJS environment or a browser, without any dependencies.
 * (5) be advanced-compiled by Google Closure Compiler.
 * 
 * Handwritten as a labor of love, not auto-generated from a grammar. 
 *
 * Modes of usage:
 *
 * (1) Synchronous, string
 *
 *   var entries = BibtexParser(text);
 *   console.log(entries);
 *
 * (2) Asynchronous, stream
 *
 *   var entryCallback = function(entry) { console.log(entry); }
 *   var parser = new BibtexParser(entryCallback);
 *   parser.parse(chunk1);
 *   parser.parse(chunk2);
 *   ...
 * 
 * @param {text|function(Object)} arg Either a Bibtex string or callback 
 *                                    function for processing parsed entries.
 * @constructor
 */
function BibtexParser(arg0) {
  // Determine how this function is to be used
  if (typeof arg0 == 'string') {
    // Passed a string, synchronous call without 'new'
    var tempStorage = {};
    var entries = [];
    function accumulator(entry) {
      entries.push(entry);
    }
    var parser = BibtexParser.call(tempStorage, accumulator);
    parser.parse(arg0);
    return {
      'entries':    entries,
      'errors':     parser.getErrors()
    }
  }
  if (typeof arg0 != 'function') {
    throw 'Invalid parser construction.';
  }

  /** @enum {number} */
  this.STATES_ = {
    ENTRY_OR_JUNK:    0,
    OBJECT_TYPE:      1,
    ENTRY_KEY:        2, 
    KV_KEY:           3, 
    EQUALS:           4,
    KV_VALUE:         5 
  }
  /** @private */ this.DATA_          = {};
  /** @private */ this.CALLBACK_      = arg0;
  /** @private */ this.CHAR_          = 0;
  /** @private */ this.LINE_          = 1;
  /** @private */ this.CHAR_IN_LINE_  = 0;
  /** @private */ this.SKIPWS_        = true;
  /** @private */ this.SKIPCOMMENT_   = true;
  /** @private */ this.PARSETMP_      = {};
  /** @private */ this.SKIPTILLEOL_   = false;
  /** @private */ this.VALBRACES_     = null;
  /** @private */ this.BRACETYPE_     = null;
  /** @private */ this.BRACECOUNT_    = 0;
  /** @private */ this.STATE_         = this.STATES_.ENTRY_OR_JUNK;
  /** @private */ this.ERRORS_        = [];
  /** @private */ this.ENTRY_TYPES_   = {
    'inproceedings'     : 1,
    'proceedings'       : 2,
    'article'           : 3,
    'techreport'        : 4,
    'misc'              : 5,
    'mastersthesis'     : 6,
    'book'              : 7,
    'phdthesis'         : 8,
    'incollection'      : 9,
    'unpublished'       : 10,
    'inbook'            : 11,
    'manual'            : 12,
    'periodical'        : 13,
    'booklet'           : 14,
    'masterthesis'      : 15,
    'conference'        : 16,
    'online'            : 17
  }
  /** @private */ this.MACROS_        = {
    'jan'               : 'January',
    'feb'               : 'February',
    'mar'               : 'March',
    'apr'               : 'April',
    'may'               : 'May',
    'jun'               : 'June',
    'jul'               : 'July',
    'aug'               : 'August',
    'sep'               : 'September',
    'oct'               : 'October',
    'nov'               : 'November',
    'dec'               : 'December',
    'Jan'               : 'January',
    'Feb'               : 'February',
    'Mar'               : 'March',
    'Apr'               : 'April',
    'May'               : 'May',
    'Jun'               : 'June',
    'Jul'               : 'July',
    'Aug'               : 'August',
    'Sep'               : 'September',
    'Oct'               : 'October',
    'Nov'               : 'November',
    'Dec'               : 'December'
  }

  /**
   * Gets an array of all errors encountered during parsing.
   * Array entries are of the format:
   *  [ line number, character in line, character in stream, error text ]
   *
   * @returns Array<Array>
   * @public
   */
  this.getErrors = function() {
    return this.ERRORS_;
  }

  /**
   * Processes a chunk of data
   * @public
   */
  this.parse = function(chunk) {
    for (var i = 0; i < chunk.length; i++)
      this.processCharacter_(chunk[i]);
  }

  /**
   * Logs error at current stream position.
   *
   * @private
   */
  this.error_ = function(text) {
    this.ERRORS_.push([ this.LINE_, 
                        this.CHAR_IN_LINE_,
                        this.CHAR_,
                        text ])
  }

  /**
   * Called after an entire entry has been parsed from the stream.
   * Performs post-processing and invokes the entry callback pointed to by
   * this.CALLBACK_. Parsed (but unprocessed) entry data is in this.DATA_.
   */
  this.processEntry_ = function() {
    var data = this.DATA_;
    if (data.Fields) 
      for (var f in data.Fields) {
        var raw = data.Fields[f];

        // Convert Latex/Bibtex special characters to UTF-8 equivalents
        for (var i = 0; i < this.CHARCONV_.length; i++) {
          var re = this.CHARCONV_[i][0];
          var rep = this.CHARCONV_[i][1];
          raw = raw.replace(re, rep);
        }

        // Basic substitutions
        raw = raw.replace(/[\n\r\t]/g, ' ')
                 .replace(/\s\s+/g, ' ')
                 .replace(/^\s+|\s+$/g, '')

        // Remove braces and backslashes
        var len = raw.length;
        var processed = '';
        for (var i = 0; i < len; i++) {
          var c = raw[i];
          var skip = false;
          if (c == '\\' && i < len-1) 
            c = raw[++i];
          else {
            if (c == '{' || c == '}')
              skip = true;
          }
          if (!skip)
            processed += c;
        }
        data.Fields[f] = processed
      }

    if (data.ObjectType == 'string') {
      for (var f in data.Fields) {  
        this.MACROS_[f] = data.Fields[f];
      }
    } else {
      // Parsed a new Bibtex entry
      this.CALLBACK_(data);
    }
  }


  /**
   * Processes next character in the stream, invoking the callback after 
   * each entry has been found and processed.
   * 
   * @private
   * @param {string} c Next character in input stream
   */
  this.processCharacter_ = function(c) {
    // Housekeeping
    this.CHAR_++;
    this.CHAR_IN_LINE_++;
    if (c == '\n') {
      this.LINE_++;
      this.CHAR_IN_LINE_ = 1;
    }

    // Convenience states for skipping whitespace when needed
    if (this.SKIPTILLEOL_) {
      if (c == '\n')
        this.SKIPTILLEOL_ = false;
      return;
    }
    if (this.SKIPCOMMENT_ && c == '%') {
      this.SKIPTILLEOL_ = true;
      return;
    }
    if (this.SKIPWS_ && /\s/.test(c))
      return;
    this.SKIPWS_ = false;
    this.SKIPCOMMENT_ = false;
    this.SKIPTILLEOL_ = false;

    // Main state machine
    var AnotherIteration = true;
    while (AnotherIteration) {
      //console.log(this.LINE_, this.CHAR_IN_LINE_, this.STATE_, c)
      AnotherIteration = false;
      switch(this.STATE_) {
        // -- Scan for an object marker ('@')
        // -- Reset temporary data structure in case previous entry was garbled
        case this.STATES_.ENTRY_OR_JUNK:
          if (c == '@') {
            // SUCCESS:     Parsed a valid start-of-object marker.
            // NEXT_STATE:  OBJECT_TYPE
            this.STATE_ = this.STATES_.OBJECT_TYPE;
            this.DATA_ = {
              ObjectType    : ''
            };
          }
          this.BRACETYPE_   = null;
          this.SKIPWS_      = true;
          this.SKIPCOMMENT_ = true;
          break;

        // Start at first non-whitespace character after start-of-object '@'
        // -- Accept [A-Za-z], break on non-matching character
        // -- Populate this.DATA_.EntryType and this.DATA_.ObjectType
        case this.STATES_.OBJECT_TYPE:
          if (/[A-Za-z]/.test(c)) {
            this.DATA_.ObjectType += c.toLowerCase();
            this.SKIPWS_      = true;
            this.SKIPCOMMENT_ = true;
          } else {
            // Break from state and validate object type
            var ot = this.DATA_.ObjectType;
            if (ot == 'comment') {
              this.STATE_ = this.STATES_.ENTRY_OR_JUNK;
            } else {
              if (ot == 'string') {
                this.DATA_.ObjectType = ot;
                this.DATA_.Fields = {};
                this.BRACETYPE_ = c;
                this.BRACECOUNT_ = 1;
                this.STATE_ = this.STATES_.KV_KEY;
                this.SKIPWS_      = true;
                this.SKIPCOMMENT_ = true;
                this.PARSETMP_ = {
                  Key:    ''
                }
              } else {
                if (ot == 'preamble') {
                  this.STATE_ = this.STATES_.ENTRY_OR_JUNK;
                } else {
                  if (ot in this.ENTRY_TYPES_) {
                    // SUCCESS:     Parsed a valid object type.
                    // NEXT_STATE:  ENTRY_KEY
                    this.DATA_.ObjectType = 'entry';
                    this.DATA_.EntryType  = ot;
                    this.DATA_.EntryKey   = '';
                    this.STATE_           = this.STATES_.ENTRY_KEY;
                    AnotherIteration      = true;
                  } else {
                    // ERROR:       Unrecognized object type.
                    // NEXT_STATE:  ENTRY_OR_JUNK
                    this.error_('Unrecognized object type: "' +
                                this.DATA_.ObjectType + '"')
                    this.STATE_ = this.STATES_.ENTRY_OR_JUNK;
                  }
                }
              }
            }
          }
          break;

          // Start at first non-alphabetic character after an entry type
          // -- Populate this.DATA_.EntryKey
          case this.STATES_.ENTRY_KEY:
            if ((c === '{' || c === '(') && this.BRACETYPE_ == null) {
              this.BRACETYPE_   = c;
              this.BRACECOUNT_  = 1;
              this.SKIPWS_      = true;
              this.SKIPCOMMENT_ = true;
              break;
            }
            if (/[,%\s]/.test(c)) {
              if (this.DATA_.EntryKey.length < 1) { 
                // Skip comments and whitespace before entry key
                this.SKIPWS_      = true;
                this.SKIPCOMMENT_ = true;
              } else {
                if (this.BRACETYPE_ == null) {
                  // ERROR:       No opening brace for object
                  // NEXT_STATE:  ENTRY_OR_JUNK
                  this.error_('No opening brace for object.');
                  this.STATE_ = this.STATES_.ENTRY_OR_JUNK;
                } else {
                  // SUCCESS:     Parsed an entry key
                  // NEXT_STATE:  KV_KEY
                  this.SKIPWS_      = true;
                  this.SKIPCOMMENT_ = true;
                  AnotherIteration  = true;
                  this.STATE_       = this.STATES_.KV_KEY;
                  this.PARSETMP_.Key= '';
                  this.DATA_.Fields = {};
                }
              }
            } else {
              this.DATA_.EntryKey += c;
              this.SKIPWS_        = false;
              this.SKIPCOMMENT_   = false;
            }
            break;

          // Start at first non-whitespace/comment character after entry key.
          // -- Populate this.PARSETMP_.Key
          case this.STATES_.KV_KEY:
            // Test for end of entry
            if ((c == '}' && this.BRACETYPE_ == '{') ||
                (c == ')' && this.BRACETYPE_ == '(')) {
              // SUCCESS:       Parsed an entry, possible incomplete
              // NEXT_STATE:    ENTRY_OR_JUNK
              this.processEntry_();
              this.SKIPWS_      = true;
              this.SKIPCOMMENT_ = true;
              this.STATE_ = this.STATES_.ENTRY_OR_JUNK;
              break;
            }
            if (/[\-A-Za-z:]/.test(c)) {
              // Add to key
              this.PARSETMP_.Key  += c;
              this.SKIPWS_        = false;
              this.SKIPCOMMENT_   = false;
            } else {
              // Either end of key or we haven't encountered start of key
              if (this.PARSETMP_.Key.length < 1) {
                // Keep going till we see a key
                this.SKIPWS_      = true;
                this.SKIPCOMMENT_ = true;
              } else {
                // SUCCESS:       Found full key in K/V pair
                // NEXT_STATE:    EQUALS
                this.SKIPWS_      = true;
                this.SKIPCOMMENT_ = true;
                this.STATE_       = this.STATES_.EQUALS;
                AnotherIteration  = true;
              }
            }
            break;

          // Start at first non-alphabetic character after K/V pair key.
          case this.STATES_.EQUALS:
            if ((c == '}' && this.BRACETYPE_ == '{') ||
                (c == ')' && this.BRACETYPE_ == '(')) {
              // ERROR:         K/V pair with key but no value
              // NEXT_STATE:    ENTRY_OR_JUNK
              this.error_('Key-value pair has key "' +
                          this.PARSETMP_.Key + '", but no value.');
              this.processEntry_();
              this.SKIPWS_      = true;
              this.SKIPCOMMENT_ = true;
              this.STATE_ = this.STATES_.ENTRY_OR_JUNK;
              break;
            }
            if (c == '=') {
              // SUCCESS:       found an equal signs separating key and value
              // NEXT_STATE:    KV_VALUE
              this.SKIPWS_          = true;
              this.SKIPCOMMENT_     = true;
              this.STATE_           = this.STATES_.KV_VALUE;
              this.PARSETMP_.Value  = '';
              this.VALBRACES_       = { '"' : [], '{' : [] };
            }
            break;

          // Start at first non-whitespace/comment character after '=' 
          // -- Populate this.PARSETMP_.Value
          case this.STATES_.KV_VALUE:
            var delim             = this.VALBRACES_;
            var val               = this.PARSETMP_.Value;
            var doneParsingValue  = false;

            // Test for special characters
            if (c == '"' || c == '{' || c == '}' || c == ',') {
              if (c == ',') {
                // This comma can mean:
                // (1) just another comma literal
                // (2) end of a macro reference
                if (0 === delim['"'].length + delim['{'].length) {
                  // end of a macro reference
                  var macro = this.PARSETMP_.Value.trim();
                  if (macro in this.MACROS_) {
                    // Successful macro reference
                    this.PARSETMP_.Value = this.MACROS_[macro];
                  } else {
                    // Reference to an undefined macro
                    this.error_('Reference to an undefined macro: '+macro);
                  }
                  doneParsingValue = true;
                }
              }
              if (c == '"') {
                // This quote can mean:
                // (1) opening delimiter
                // (2) closing delimiter
                // (3) literal, if we have a '{' on the stack
                if (0 === delim['"'].length + delim['{'].length) {
                  // opening delimiter
                  delim['"'].push(this.CHAR_)
                  this.SKIPWS_        = false;
                  this.SKIPCOMMENT_   = false;
                  break;
                }
                if (delim['"'].length == 1 && delim['{'].length == 0 &&
                    (val.length==0 || val[val.length-1] != '\\')) {
                  // closing delimiter
                  doneParsingValue = true;
                } else {
                  // literal, add to value
                }
              }
              if (c == '{') {
                // This brace can mean:
                // (1) opening delimiter
                // (2) stacked verbatim delimiter
                if (val.length == 0 || val[val.length-1] != '\\') {
                  delim['{'].push(this.CHAR_)
                  this.SKIPWS_        = false;
                  this.SKIPCOMMENT_   = false;
                } else {
                  // literal, add to value
                }
              }
              if (c == '}') {
                // This brace can mean:
                // (1) closing delimiter
                // (2) closing stacked verbatim delimiter
                // (3) end of object definition if value was a macro
                if (0 === delim['"'].length + delim['{'].length) {
                  // end of object definition, after macro
                  var macro = this.PARSETMP_.Value.trim();
                  if (macro in this.MACROS_) {
                    // Successful macro reference
                    this.PARSETMP_.Value = this.MACROS_[macro];
                  } else {
                    // Reference to an undefined macro
                    this.error_('Reference to an undefined macro: '+macro);
                  }
                  AnotherIteration = true;
                  doneParsingValue = true;
                } else {
                  if (val.length == 0 || val[val.length-1] != '\\') {
                    if (delim['{'].length > 0) {
                      // pop stack for stacked verbatim delimiter
                      delim['{'].splice(delim['{'].length-1, 1)
                      if (0 == delim['{'].length + delim['"'].length) {
                        // closing delimiter
                        doneParsingValue = true;
                      } else {
                        // end verbatim block
                      }
                    }
                  } else {
                    // literal, add to value
                  }
                }
              }
            }

            // If here, then we are either done parsing the value or 
            // have a literal that should be added to the value.
            if (doneParsingValue) {
              // SUCCESS:     value parsed
              // NEXT_STATE:  KV_KEY
              this.SKIPWS_        = true;
              this.SKIPCOMMENT_   = true;
              this.STATE_         = this.STATES_.KV_KEY;
              this.DATA_.Fields[this.PARSETMP_.Key] = this.PARSETMP_.Value;
              this.PARSETMP_      = { Key: '' };
              this.VALBRACES_     = null;
            } else {
              this.PARSETMP_.Value += c;
            }
            break;
      } // end switch (this.STATE_)
    } // end while(AnotherIteration)
  } // end function processCharacter 

  /** @private */ this.CHARCONV_ = [
    [ /\\space /g, '\u0020' ],
    [ /\\textdollar /g, '\u0024' ],
    [ /\\textquotesingle /g, '\u0027' ],
    [ /\\ast /g, '\u002A' ],
    [ /\\textbackslash /g, '\u005C' ],
    [ /\\\^\{\}/g, '\u005E' ],
    [ /\\textasciigrave /g, '\u0060' ],
    [ /\\lbrace /g, '\u007B' ],
    [ /\\vert /g, '\u007C' ],
    [ /\\rbrace /g, '\u007D' ],
    [ /\\textasciitilde /g, '\u007E' ],
    [ /\\textexclamdown /g, '\u00A1' ],
    [ /\\textcent /g, '\u00A2' ],
    [ /\\textsterling /g, '\u00A3' ],
    [ /\\textcurrency /g, '\u00A4' ],
    [ /\\textyen /g, '\u00A5' ],
    [ /\\textbrokenbar /g, '\u00A6' ],
    [ /\\textsection /g, '\u00A7' ],
    [ /\\textasciidieresis /g, '\u00A8' ],
    [ /\\textcopyright /g, '\u00A9' ],
    [ /\\textordfeminine /g, '\u00AA' ],
    [ /\\guillemotleft /g, '\u00AB' ],
    [ /\\lnot /g, '\u00AC' ],
    [ /\\textregistered /g, '\u00AE' ],
    [ /\\textasciimacron /g, '\u00AF' ],
    [ /\\textdegree /g, '\u00B0' ],
    [ /\\pm /g, '\u00B1' ],
    [ /\\textasciiacute /g, '\u00B4' ],
    [ /\\mathrm\{\\mu\}/g, '\u00B5' ],
    [ /\\textparagraph /g, '\u00B6' ],
    [ /\\cdot /g, '\u00B7' ],
    [ /\\c\{\}/g, '\u00B8' ],
    [ /\\textordmasculine /g, '\u00BA' ],
    [ /\\guillemotright /g, '\u00BB' ],
    [ /\\textonequarter /g, '\u00BC' ],
    [ /\\textonehalf /g, '\u00BD' ],
    [ /\\textthreequarters /g, '\u00BE' ],
    [ /\\textquestiondown /g, '\u00BF' ],
    [ /\\`\{A\}/g, '\u00C0' ],
    [ /\\'\{A\}/g, '\u00C1' ],
    [ /\\\^\{A\}/g, '\u00C2' ],
    [ /\\~\{A\}/g, '\u00C3' ],
    [ /\\"\{A\}/g, '\u00C4' ],
    [ /\\AA /g, '\u00C5' ],
    [ /\\AE /g, '\u00C6' ],
    [ /\\c\{C\}/g, '\u00C7' ],
    [ /\\`\{E\}/g, '\u00C8' ],
    [ /\\'\{E\}/g, '\u00C9' ],
    [ /\\\^\{E\}/g, '\u00CA' ],
    [ /\\"\{E\}/g, '\u00CB' ],
    [ /\\`\{I\}/g, '\u00CC' ],
    [ /\\'\{I\}/g, '\u00CD' ],
    [ /\\\^\{I\}/g, '\u00CE' ],
    [ /\\"\{I\}/g, '\u00CF' ],
    [ /\\DH /g, '\u00D0' ],
    [ /\\~\{N\}/g, '\u00D1' ],
    [ /\\`\{O\}/g, '\u00D2' ],
    [ /\\'\{O\}/g, '\u00D3' ],
    [ /\\\^\{O\}/g, '\u00D4' ],
    [ /\\~\{O\}/g, '\u00D5' ],
    [ /\\"\{O\}/g, '\u00D6' ],
    [ /\\texttimes /g, '\u00D7' ],
    [ /\\O /g, '\u00D8' ],
    [ /\\`\{U\}/g, '\u00D9' ],
    [ /\\'\{U\}/g, '\u00DA' ],
    [ /\\\^\{U\}/g, '\u00DB' ],
    [ /\\"\{U\}/g, '\u00DC' ],
    [ /\\'\{Y\}/g, '\u00DD' ],
    [ /\\TH /g, '\u00DE' ],
    [ /\\ss /g, '\u00DF' ],
    [ /\\`\{a\}/g, '\u00E0' ],
    [ /\\'\{a\}/g, '\u00E1' ],
    [ /\\\^\{a\}/g, '\u00E2' ],
    [ /\\~\{a\}/g, '\u00E3' ],
    [ /\\"\{a\}/g, '\u00E4' ],
    [ /\\aa /g, '\u00E5' ],
    [ /\\ae /g, '\u00E6' ],
    [ /\\c\{c\}/g, '\u00E7' ],
    [ /\\`\{e\}/g, '\u00E8' ],
    [ /\\'\{e\}/g, '\u00E9' ],
    [ /\\\^\{e\}/g, '\u00EA' ],
    [ /\\"\{e\}/g, '\u00EB' ],
    [ /\\`\{\\i\}/g, '\u00EC' ],
    [ /\\'\{\\i\}/g, '\u00ED' ],
    [ /\\\^\{\\i\}/g, '\u00EE' ],
    [ /\\"\{\\i\}/g, '\u00EF' ],
    [ /\\dh /g, '\u00F0' ],
    [ /\\~\{n\}/g, '\u00F1' ],
    [ /\\`\{o\}/g, '\u00F2' ],
    [ /\\'\{o\}/g, '\u00F3' ],
    [ /\\\^\{o\}/g, '\u00F4' ],
    [ /\\~\{o\}/g, '\u00F5' ],
    [ /\\"\{o\}/g, '\u00F6' ],
    [ /\\div /g, '\u00F7' ],
    [ /\\o /g, '\u00F8' ],
    [ /\\`\{u\}/g, '\u00F9' ],
    [ /\\'\{u\}/g, '\u00FA' ],
    [ /\\\^\{u\}/g, '\u00FB' ],
    [ /\\"\{u\}/g, '\u00FC' ],
    [ /\\'\{y\}/g, '\u00FD' ],
    [ /\\th /g, '\u00FE' ],
    [ /\\"\{y\}/g, '\u00FF' ],
    [ /\\=\{A\}/g, '\u0100' ],
    [ /\\=\{a\}/g, '\u0101' ],
    [ /\\u\{A\}/g, '\u0102' ],
    [ /\\u\{a\}/g, '\u0103' ],
    [ /\\k\{A\}/g, '\u0104' ],
    [ /\\k\{a\}/g, '\u0105' ],
    [ /\\'\{C\}/g, '\u0106' ],
    [ /\\'\{c\}/g, '\u0107' ],
    [ /\\\^\{C\}/g, '\u0108' ],
    [ /\\\^\{c\}/g, '\u0109' ],
    [ /\\.\{C\}/g, '\u010A' ],
    [ /\\.\{c\}/g, '\u010B' ],
    [ /\\v\{C\}/g, '\u010C' ],
    [ /\\v\{c\}/g, '\u010D' ],
    [ /\\v\{D\}/g, '\u010E' ],
    [ /\\v\{d\}/g, '\u010F' ],
    [ /\\DJ /g, '\u0110' ],
    [ /\\dj /g, '\u0111' ],
    [ /\\=\{E\}/g, '\u0112' ],
    [ /\\=\{e\}/g, '\u0113' ],
    [ /\\u\{E\}/g, '\u0114' ],
    [ /\\u\{e\}/g, '\u0115' ],
    [ /\\.\{E\}/g, '\u0116' ],
    [ /\\.\{e\}/g, '\u0117' ],
    [ /\\k\{E\}/g, '\u0118' ],
    [ /\\k\{e\}/g, '\u0119' ],
    [ /\\v\{E\}/g, '\u011A' ],
    [ /\\v\{e\}/g, '\u011B' ],
    [ /\\\^\{G\}/g, '\u011C' ],
    [ /\\\^\{g\}/g, '\u011D' ],
    [ /\\u\{G\}/g, '\u011E' ],
    [ /\\u\{g\}/g, '\u011F' ],
    [ /\\.\{G\}/g, '\u0120' ],
    [ /\\.\{g\}/g, '\u0121' ],
    [ /\\c\{G\}/g, '\u0122' ],
    [ /\\c\{g\}/g, '\u0123' ],
    [ /\\\^\{H\}/g, '\u0124' ],
    [ /\\\^\{h\}/g, '\u0125' ],
    [ /\\Elzxh /g, '\u0127' ],
    [ /\\~\{I\}/g, '\u0128' ],
    [ /\\~\{\\i\}/g, '\u0129' ],
    [ /\\=\{I\}/g, '\u012A' ],
    [ /\\=\{\\i\}/g, '\u012B' ],
    [ /\\u\{I\}/g, '\u012C' ],
    [ /\\u\{\\i\}/g, '\u012D' ],
    [ /\\k\{I\}/g, '\u012E' ],
    [ /\\k\{i\}/g, '\u012F' ],
    [ /\\.\{I\}/g, '\u0130' ],
    [ /\\i /g, '\u0131' ],
    [ /\\\^\{J\}/g, '\u0134' ],
    [ /\\\^\{\\j\}/g, '\u0135' ],
    [ /\\c\{K\}/g, '\u0136' ],
    [ /\\c\{k\}/g, '\u0137' ],
    [ /\\'\{L\}/g, '\u0139' ],
    [ /\\'\{l\}/g, '\u013A' ],
    [ /\\c\{L\}/g, '\u013B' ],
    [ /\\c\{l\}/g, '\u013C' ],
    [ /\\v\{L\}/g, '\u013D' ],
    [ /\\v\{l\}/g, '\u013E' ],
    [ /\\L /g, '\u0141' ],
    [ /\\l /g, '\u0142' ],
    [ /\\'\{N\}/g, '\u0143' ],
    [ /\\'\{n\}/g, '\u0144' ],
    [ /\\c\{N\}/g, '\u0145' ],
    [ /\\c\{n\}/g, '\u0146' ],
    [ /\\v\{N\}/g, '\u0147' ],
    [ /\\v\{n\}/g, '\u0148' ],
    [ /\\NG /g, '\u014A' ],
    [ /\\ng /g, '\u014B' ],
    [ /\\=\{O\}/g, '\u014C' ],
    [ /\\=\{o\}/g, '\u014D' ],
    [ /\\u\{O\}/g, '\u014E' ],
    [ /\\u\{o\}/g, '\u014F' ],
    [ /\\H\{O\}/g, '\u0150' ],
    [ /\\H\{o\}/g, '\u0151' ],
    [ /\\OE /g, '\u0152' ],
    [ /\\oe /g, '\u0153' ],
    [ /\\'\{R\}/g, '\u0154' ],
    [ /\\'\{r\}/g, '\u0155' ],
    [ /\\c\{R\}/g, '\u0156' ],
    [ /\\c\{r\}/g, '\u0157' ],
    [ /\\v\{R\}/g, '\u0158' ],
    [ /\\v\{r\}/g, '\u0159' ],
    [ /\\'\{S\}/g, '\u015A' ],
    [ /\\'\{s\}/g, '\u015B' ],
    [ /\\\^\{S\}/g, '\u015C' ],
    [ /\\\^\{s\}/g, '\u015D' ],
    [ /\\c\{S\}/g, '\u015E' ],
    [ /\\c\{s\}/g, '\u015F' ],
    [ /\\v\{S\}/g, '\u0160' ],
    [ /\\v\{s\}/g, '\u0161' ],
    [ /\\c\{T\}/g, '\u0162' ],
    [ /\\c\{t\}/g, '\u0163' ],
    [ /\\v\{T\}/g, '\u0164' ],
    [ /\\v\{t\}/g, '\u0165' ],
    [ /\\~\{U\}/g, '\u0168' ],
    [ /\\~\{u\}/g, '\u0169' ],
    [ /\\=\{U\}/g, '\u016A' ],
    [ /\\=\{u\}/g, '\u016B' ],
    [ /\\u\{U\}/g, '\u016C' ],
    [ /\\u\{u\}/g, '\u016D' ],
    [ /\\r\{U\}/g, '\u016E' ],
    [ /\\r\{u\}/g, '\u016F' ],
    [ /\\H\{U\}/g, '\u0170' ],
    [ /\\H\{u\}/g, '\u0171' ],
    [ /\\k\{U\}/g, '\u0172' ],
    [ /\\k\{u\}/g, '\u0173' ],
    [ /\\\^\{W\}/g, '\u0174' ],
    [ /\\\^\{w\}/g, '\u0175' ],
    [ /\\\^\{Y\}/g, '\u0176' ],
    [ /\\\^\{y\}/g, '\u0177' ],
    [ /\\"\{Y\}/g, '\u0178' ],
    [ /\\'\{Z\}/g, '\u0179' ],
    [ /\\'\{z\}/g, '\u017A' ],
    [ /\\.\{Z\}/g, '\u017B' ],
    [ /\\.\{z\}/g, '\u017C' ],
    [ /\\v\{Z\}/g, '\u017D' ],
    [ /\\v\{z\}/g, '\u017E' ],
    [ /\\texthvlig /g, '\u0195' ],
    [ /\\textnrleg /g, '\u019E' ],
    [ /\\eth /g, '\u01AA' ],
    [ /\\textdoublepipe /g, '\u01C2' ],
    [ /\\'\{g\}/g, '\u01F5' ],
    [ /\\Elztrna /g, '\u0250' ],
    [ /\\Elztrnsa /g, '\u0252' ],
    [ /\\Elzopeno /g, '\u0254' ],
    [ /\\Elzrtld /g, '\u0256' ],
    [ /\\Elzschwa /g, '\u0259' ],
    [ /\\varepsilon /g, '\u025B' ],
    [ /\\Elzpgamma /g, '\u0263' ],
    [ /\\Elzpbgam /g, '\u0264' ],
    [ /\\Elztrnh /g, '\u0265' ],
    [ /\\Elzbtdl /g, '\u026C' ],
    [ /\\Elzrtll /g, '\u026D' ],
    [ /\\Elztrnm /g, '\u026F' ],
    [ /\\Elztrnmlr /g, '\u0270' ],
    [ /\\Elzltlmr /g, '\u0271' ],
    [ /\\Elzltln /g, '\u0272' ],
    [ /\\Elzrtln /g, '\u0273' ],
    [ /\\Elzclomeg /g, '\u0277' ],
    [ /\\textphi /g, '\u0278' ],
    [ /\\Elztrnr /g, '\u0279' ],
    [ /\\Elztrnrl /g, '\u027A' ],
    [ /\\Elzrttrnr /g, '\u027B' ],
    [ /\\Elzrl /g, '\u027C' ],
    [ /\\Elzrtlr /g, '\u027D' ],
    [ /\\Elzfhr /g, '\u027E' ],
    [ /\\Elzrtls /g, '\u0282' ],
    [ /\\Elzesh /g, '\u0283' ],
    [ /\\Elztrnt /g, '\u0287' ],
    [ /\\Elzrtlt /g, '\u0288' ],
    [ /\\Elzpupsil /g, '\u028A' ],
    [ /\\Elzpscrv /g, '\u028B' ],
    [ /\\Elzinvv /g, '\u028C' ],
    [ /\\Elzinvw /g, '\u028D' ],
    [ /\\Elztrny /g, '\u028E' ],
    [ /\\Elzrtlz /g, '\u0290' ],
    [ /\\Elzyogh /g, '\u0292' ],
    [ /\\Elzglst /g, '\u0294' ],
    [ /\\Elzreglst /g, '\u0295' ],
    [ /\\Elzinglst /g, '\u0296' ],
    [ /\\textturnk /g, '\u029E' ],
    [ /\\Elzdyogh /g, '\u02A4' ],
    [ /\\Elztesh /g, '\u02A7' ],
    [ /\\textasciicaron /g, '\u02C7' ],
    [ /\\Elzverts /g, '\u02C8' ],
    [ /\\Elzverti /g, '\u02CC' ],
    [ /\\Elzlmrk /g, '\u02D0' ],
    [ /\\Elzhlmrk /g, '\u02D1' ],
    [ /\\Elzsbrhr /g, '\u02D2' ],
    [ /\\Elzsblhr /g, '\u02D3' ],
    [ /\\Elzrais /g, '\u02D4' ],
    [ /\\Elzlow /g, '\u02D5' ],
    [ /\\textasciibreve /g, '\u02D8' ],
    [ /\\textperiodcentered /g, '\u02D9' ],
    [ /\\r\{\}/g, '\u02DA' ],
    [ /\\k\{\}/g, '\u02DB' ],
    [ /\\texttildelow /g, '\u02DC' ],
    [ /\\H\{\}/g, '\u02DD' ],
    [ /\\tone\{55\}/g, '\u02E5' ],
    [ /\\tone\{44\}/g, '\u02E6' ],
    [ /\\tone\{33\}/g, '\u02E7' ],
    [ /\\tone\{22\}/g, '\u02E8' ],
    [ /\\tone\{11\}/g, '\u02E9' ],
    [ /\\cyrchar\\C/g, '\u030F' ],
    [ /\\Elzpalh /g, '\u0321' ],
    [ /\\Elzrh /g, '\u0322' ],
    [ /\\Elzsbbrg /g, '\u032A' ],
    [ /\\Elzxl /g, '\u0335' ],
    [ /\\Elzbar /g, '\u0336' ],
    [ /\\'\{A\}/g, '\u0386' ],
    [ /\\'\{E\}/g, '\u0388' ],
    [ /\\'\{H\}/g, '\u0389' ],
    [ /\\'\{\}\{I\}/g, '\u038A' ],
    [ /\\'\{\}O/g, '\u038C' ],
    [ /\\mathrm\{'Y\}/g, '\u038E' ],
    [ /\\mathrm\{'\\Omega\}/g, '\u038F' ],
    [ /\\acute\{\\ddot\{\\iota\}\}/g, '\u0390' ],
    [ /\\Alpha /g, '\u0391' ],
    [ /\\Beta /g, '\u0392' ],
    [ /\\Gamma /g, '\u0393' ],
    [ /\\Delta /g, '\u0394' ],
    [ /\\Epsilon /g, '\u0395' ],
    [ /\\Zeta /g, '\u0396' ],
    [ /\\Eta /g, '\u0397' ],
    [ /\\Theta /g, '\u0398' ],
    [ /\\Iota /g, '\u0399' ],
    [ /\\Kappa /g, '\u039A' ],
    [ /\\Lambda /g, '\u039B' ],
    [ /\\Xi /g, '\u039E' ],
    [ /\\Pi /g, '\u03A0' ],
    [ /\\Rho /g, '\u03A1' ],
    [ /\\Sigma /g, '\u03A3' ],
    [ /\\Tau /g, '\u03A4' ],
    [ /\\Upsilon /g, '\u03A5' ],
    [ /\\Phi /g, '\u03A6' ],
    [ /\\Chi /g, '\u03A7' ],
    [ /\\Psi /g, '\u03A8' ],
    [ /\\Omega /g, '\u03A9' ],
    [ /\\mathrm\{\\ddot\{I\}\}/g, '\u03AA' ],
    [ /\\mathrm\{\\ddot\{Y\}\}/g, '\u03AB' ],
    [ /\\'\{\$\\alpha\$\}/g, '\u03AC' ],
    [ /\\acute\{\\epsilon\}/g, '\u03AD' ],
    [ /\\acute\{\\eta\}/g, '\u03AE' ],
    [ /\\acute\{\\iota\}/g, '\u03AF' ],
    [ /\\acute\{\\ddot\{\\upsilon\}\}/g, '\u03B0' ],
    [ /\\alpha /g, '\u03B1' ],
    [ /\\beta /g, '\u03B2' ],
    [ /\\gamma /g, '\u03B3' ],
    [ /\\delta /g, '\u03B4' ],
    [ /\\epsilon /g, '\u03B5' ],
    [ /\\zeta /g, '\u03B6' ],
    [ /\\eta /g, '\u03B7' ],
    [ /\\texttheta /g, '\u03B8' ],
    [ /\\iota /g, '\u03B9' ],
    [ /\\kappa /g, '\u03BA' ],
    [ /\\lambda /g, '\u03BB' ],
    [ /\\mu /g, '\u03BC' ],
    [ /\\nu /g, '\u03BD' ],
    [ /\\xi /g, '\u03BE' ],
    [ /\\pi /g, '\u03C0' ],
    [ /\\rho /g, '\u03C1' ],
    [ /\\varsigma /g, '\u03C2' ],
    [ /\\sigma /g, '\u03C3' ],
    [ /\\tau /g, '\u03C4' ],
    [ /\\upsilon /g, '\u03C5' ],
    [ /\\varphi /g, '\u03C6' ],
    [ /\\chi /g, '\u03C7' ],
    [ /\\psi /g, '\u03C8' ],
    [ /\\omega /g, '\u03C9' ],
    [ /\\ddot\{\\iota\}/g, '\u03CA' ],
    [ /\\ddot\{\\upsilon\}/g, '\u03CB' ],
    [ /\\'\{o\}/g, '\u03CC' ],
    [ /\\acute\{\\upsilon\}/g, '\u03CD' ],
    [ /\\acute\{\\omega\}/g, '\u03CE' ],
    [ /\\Pisymbol\{ppi022\}\{87\}/g, '\u03D0' ],
    [ /\\textvartheta /g, '\u03D1' ],
    [ /\\Upsilon /g, '\u03D2' ],
    [ /\\phi /g, '\u03D5' ],
    [ /\\varpi /g, '\u03D6' ],
    [ /\\Stigma /g, '\u03DA' ],
    [ /\\Digamma /g, '\u03DC' ],
    [ /\\digamma /g, '\u03DD' ],
    [ /\\Koppa /g, '\u03DE' ],
    [ /\\Sampi /g, '\u03E0' ],
    [ /\\varkappa /g, '\u03F0' ],
    [ /\\varrho /g, '\u03F1' ],
    [ /\\textTheta /g, '\u03F4' ],
    [ /\\backepsilon /g, '\u03F6' ],
    [ /\\cyrchar\\CYRYO /g, '\u0401' ],
    [ /\\cyrchar\\CYRDJE /g, '\u0402' ],
    [ /\\cyrchar\{\\'\\CYRG\}/g, '\u0403' ],
    [ /\\cyrchar\\CYRIE /g, '\u0404' ],
    [ /\\cyrchar\\CYRDZE /g, '\u0405' ],
    [ /\\cyrchar\\CYRII /g, '\u0406' ],
    [ /\\cyrchar\\CYRYI /g, '\u0407' ],
    [ /\\cyrchar\\CYRJE /g, '\u0408' ],
    [ /\\cyrchar\\CYRLJE /g, '\u0409' ],
    [ /\\cyrchar\\CYRNJE /g, '\u040A' ],
    [ /\\cyrchar\\CYRTSHE /g, '\u040B' ],
    [ /\\cyrchar\{\\'\\CYRK\}/g, '\u040C' ],
    [ /\\cyrchar\\CYRUSHRT /g, '\u040E' ],
    [ /\\cyrchar\\CYRDZHE /g, '\u040F' ],
    [ /\\cyrchar\\CYRA /g, '\u0410' ],
    [ /\\cyrchar\\CYRB /g, '\u0411' ],
    [ /\\cyrchar\\CYRV /g, '\u0412' ],
    [ /\\cyrchar\\CYRG /g, '\u0413' ],
    [ /\\cyrchar\\CYRD /g, '\u0414' ],
    [ /\\cyrchar\\CYRE /g, '\u0415' ],
    [ /\\cyrchar\\CYRZH /g, '\u0416' ],
    [ /\\cyrchar\\CYRZ /g, '\u0417' ],
    [ /\\cyrchar\\CYRI /g, '\u0418' ],
    [ /\\cyrchar\\CYRISHRT /g, '\u0419' ],
    [ /\\cyrchar\\CYRK /g, '\u041A' ],
    [ /\\cyrchar\\CYRL /g, '\u041B' ],
    [ /\\cyrchar\\CYRM /g, '\u041C' ],
    [ /\\cyrchar\\CYRN /g, '\u041D' ],
    [ /\\cyrchar\\CYRO /g, '\u041E' ],
    [ /\\cyrchar\\CYRP /g, '\u041F' ],
    [ /\\cyrchar\\CYRR /g, '\u0420' ],
    [ /\\cyrchar\\CYRS /g, '\u0421' ],
    [ /\\cyrchar\\CYRT /g, '\u0422' ],
    [ /\\cyrchar\\CYRU /g, '\u0423' ],
    [ /\\cyrchar\\CYRF /g, '\u0424' ],
    [ /\\cyrchar\\CYRH /g, '\u0425' ],
    [ /\\cyrchar\\CYRC /g, '\u0426' ],
    [ /\\cyrchar\\CYRCH /g, '\u0427' ],
    [ /\\cyrchar\\CYRSH /g, '\u0428' ],
    [ /\\cyrchar\\CYRSHCH /g, '\u0429' ],
    [ /\\cyrchar\\CYRHRDSN /g, '\u042A' ],
    [ /\\cyrchar\\CYRERY /g, '\u042B' ],
    [ /\\cyrchar\\CYRSFTSN /g, '\u042C' ],
    [ /\\cyrchar\\CYREREV /g, '\u042D' ],
    [ /\\cyrchar\\CYRYU /g, '\u042E' ],
    [ /\\cyrchar\\CYRYA /g, '\u042F' ],
    [ /\\cyrchar\\cyra /g, '\u0430' ],
    [ /\\cyrchar\\cyrb /g, '\u0431' ],
    [ /\\cyrchar\\cyrv /g, '\u0432' ],
    [ /\\cyrchar\\cyrg /g, '\u0433' ],
    [ /\\cyrchar\\cyrd /g, '\u0434' ],
    [ /\\cyrchar\\cyre /g, '\u0435' ],
    [ /\\cyrchar\\cyrzh /g, '\u0436' ],
    [ /\\cyrchar\\cyrz /g, '\u0437' ],
    [ /\\cyrchar\\cyri /g, '\u0438' ],
    [ /\\cyrchar\\cyrishrt /g, '\u0439' ],
    [ /\\cyrchar\\cyrk /g, '\u043A' ],
    [ /\\cyrchar\\cyrl /g, '\u043B' ],
    [ /\\cyrchar\\cyrm /g, '\u043C' ],
    [ /\\cyrchar\\cyrn /g, '\u043D' ],
    [ /\\cyrchar\\cyro /g, '\u043E' ],
    [ /\\cyrchar\\cyrp /g, '\u043F' ],
    [ /\\cyrchar\\cyrr /g, '\u0440' ],
    [ /\\cyrchar\\cyrs /g, '\u0441' ],
    [ /\\cyrchar\\cyrt /g, '\u0442' ],
    [ /\\cyrchar\\cyru /g, '\u0443' ],
    [ /\\cyrchar\\cyrf /g, '\u0444' ],
    [ /\\cyrchar\\cyrh /g, '\u0445' ],
    [ /\\cyrchar\\cyrc /g, '\u0446' ],
    [ /\\cyrchar\\cyrch /g, '\u0447' ],
    [ /\\cyrchar\\cyrsh /g, '\u0448' ],
    [ /\\cyrchar\\cyrshch /g, '\u0449' ],
    [ /\\cyrchar\\cyrhrdsn /g, '\u044A' ],
    [ /\\cyrchar\\cyrery /g, '\u044B' ],
    [ /\\cyrchar\\cyrsftsn /g, '\u044C' ],
    [ /\\cyrchar\\cyrerev /g, '\u044D' ],
    [ /\\cyrchar\\cyryu /g, '\u044E' ],
    [ /\\cyrchar\\cyrya /g, '\u044F' ],
    [ /\\cyrchar\\cyryo /g, '\u0451' ],
    [ /\\cyrchar\\cyrdje /g, '\u0452' ],
    [ /\\cyrchar\{\\'\\cyrg\}/g, '\u0453' ],
    [ /\\cyrchar\\cyrie /g, '\u0454' ],
    [ /\\cyrchar\\cyrdze /g, '\u0455' ],
    [ /\\cyrchar\\cyrii /g, '\u0456' ],
    [ /\\cyrchar\\cyryi /g, '\u0457' ],
    [ /\\cyrchar\\cyrje /g, '\u0458' ],
    [ /\\cyrchar\\cyrlje /g, '\u0459' ],
    [ /\\cyrchar\\cyrnje /g, '\u045A' ],
    [ /\\cyrchar\\cyrtshe /g, '\u045B' ],
    [ /\\cyrchar\{\\'\\cyrk\}/g, '\u045C' ],
    [ /\\cyrchar\\cyrushrt /g, '\u045E' ],
    [ /\\cyrchar\\cyrdzhe /g, '\u045F' ],
    [ /\\cyrchar\\CYROMEGA /g, '\u0460' ],
    [ /\\cyrchar\\cyromega /g, '\u0461' ],
    [ /\\cyrchar\\CYRYAT /g, '\u0462' ],
    [ /\\cyrchar\\CYRIOTE /g, '\u0464' ],
    [ /\\cyrchar\\cyriote /g, '\u0465' ],
    [ /\\cyrchar\\CYRLYUS /g, '\u0466' ],
    [ /\\cyrchar\\cyrlyus /g, '\u0467' ],
    [ /\\cyrchar\\CYRIOTLYUS /g, '\u0468' ],
    [ /\\cyrchar\\cyriotlyus /g, '\u0469' ],
    [ /\\cyrchar\\CYRBYUS /g, '\u046A' ],
    [ /\\cyrchar\\CYRIOTBYUS /g, '\u046C' ],
    [ /\\cyrchar\\cyriotbyus /g, '\u046D' ],
    [ /\\cyrchar\\CYRKSI /g, '\u046E' ],
    [ /\\cyrchar\\cyrksi /g, '\u046F' ],
    [ /\\cyrchar\\CYRPSI /g, '\u0470' ],
    [ /\\cyrchar\\cyrpsi /g, '\u0471' ],
    [ /\\cyrchar\\CYRFITA /g, '\u0472' ],
    [ /\\cyrchar\\CYRIZH /g, '\u0474' ],
    [ /\\cyrchar\\CYRUK /g, '\u0478' ],
    [ /\\cyrchar\\cyruk /g, '\u0479' ],
    [ /\\cyrchar\\CYROMEGARND /g, '\u047A' ],
    [ /\\cyrchar\\cyromegarnd /g, '\u047B' ],
    [ /\\cyrchar\\CYROMEGATITLO /g, '\u047C' ],
    [ /\\cyrchar\\cyromegatitlo /g, '\u047D' ],
    [ /\\cyrchar\\CYROT /g, '\u047E' ],
    [ /\\cyrchar\\cyrot /g, '\u047F' ],
    [ /\\cyrchar\\CYRKOPPA /g, '\u0480' ],
    [ /\\cyrchar\\cyrkoppa /g, '\u0481' ],
    [ /\\cyrchar\\cyrthousands /g, '\u0482' ],
    [ /\\cyrchar\\cyrhundredthousands /g, '\u0488' ],
    [ /\\cyrchar\\cyrmillions /g, '\u0489' ],
    [ /\\cyrchar\\CYRSEMISFTSN /g, '\u048C' ],
    [ /\\cyrchar\\cyrsemisftsn /g, '\u048D' ],
    [ /\\cyrchar\\CYRRTICK /g, '\u048E' ],
    [ /\\cyrchar\\cyrrtick /g, '\u048F' ],
    [ /\\cyrchar\\CYRGUP /g, '\u0490' ],
    [ /\\cyrchar\\cyrgup /g, '\u0491' ],
    [ /\\cyrchar\\CYRGHCRS /g, '\u0492' ],
    [ /\\cyrchar\\cyrghcrs /g, '\u0493' ],
    [ /\\cyrchar\\CYRGHK /g, '\u0494' ],
    [ /\\cyrchar\\cyrghk /g, '\u0495' ],
    [ /\\cyrchar\\CYRZHDSC /g, '\u0496' ],
    [ /\\cyrchar\\cyrzhdsc /g, '\u0497' ],
    [ /\\cyrchar\\CYRZDSC /g, '\u0498' ],
    [ /\\cyrchar\\cyrzdsc /g, '\u0499' ],
    [ /\\cyrchar\\CYRKDSC /g, '\u049A' ],
    [ /\\cyrchar\\cyrkdsc /g, '\u049B' ],
    [ /\\cyrchar\\CYRKVCRS /g, '\u049C' ],
    [ /\\cyrchar\\cyrkvcrs /g, '\u049D' ],
    [ /\\cyrchar\\CYRKHCRS /g, '\u049E' ],
    [ /\\cyrchar\\cyrkhcrs /g, '\u049F' ],
    [ /\\cyrchar\\CYRKBEAK /g, '\u04A0' ],
    [ /\\cyrchar\\cyrkbeak /g, '\u04A1' ],
    [ /\\cyrchar\\CYRNDSC /g, '\u04A2' ],
    [ /\\cyrchar\\cyrndsc /g, '\u04A3' ],
    [ /\\cyrchar\\CYRNG /g, '\u04A4' ],
    [ /\\cyrchar\\cyrng /g, '\u04A5' ],
    [ /\\cyrchar\\CYRPHK /g, '\u04A6' ],
    [ /\\cyrchar\\cyrphk /g, '\u04A7' ],
    [ /\\cyrchar\\CYRABHHA /g, '\u04A8' ],
    [ /\\cyrchar\\cyrabhha /g, '\u04A9' ],
    [ /\\cyrchar\\CYRSDSC /g, '\u04AA' ],
    [ /\\cyrchar\\cyrsdsc /g, '\u04AB' ],
    [ /\\cyrchar\\CYRTDSC /g, '\u04AC' ],
    [ /\\cyrchar\\cyrtdsc /g, '\u04AD' ],
    [ /\\cyrchar\\CYRY /g, '\u04AE' ],
    [ /\\cyrchar\\cyry /g, '\u04AF' ],
    [ /\\cyrchar\\CYRYHCRS /g, '\u04B0' ],
    [ /\\cyrchar\\cyryhcrs /g, '\u04B1' ],
    [ /\\cyrchar\\CYRHDSC /g, '\u04B2' ],
    [ /\\cyrchar\\cyrhdsc /g, '\u04B3' ],
    [ /\\cyrchar\\CYRTETSE /g, '\u04B4' ],
    [ /\\cyrchar\\cyrtetse /g, '\u04B5' ],
    [ /\\cyrchar\\CYRCHRDSC /g, '\u04B6' ],
    [ /\\cyrchar\\cyrchrdsc /g, '\u04B7' ],
    [ /\\cyrchar\\CYRCHVCRS /g, '\u04B8' ],
    [ /\\cyrchar\\cyrchvcrs /g, '\u04B9' ],
    [ /\\cyrchar\\CYRSHHA /g, '\u04BA' ],
    [ /\\cyrchar\\cyrshha /g, '\u04BB' ],
    [ /\\cyrchar\\CYRABHCH /g, '\u04BC' ],
    [ /\\cyrchar\\cyrabhch /g, '\u04BD' ],
    [ /\\cyrchar\\CYRABHCHDSC /g, '\u04BE' ],
    [ /\\cyrchar\\cyrabhchdsc /g, '\u04BF' ],
    [ /\\cyrchar\\CYRpalochka /g, '\u04C0' ],
    [ /\\cyrchar\\CYRKHK /g, '\u04C3' ],
    [ /\\cyrchar\\cyrkhk /g, '\u04C4' ],
    [ /\\cyrchar\\CYRNHK /g, '\u04C7' ],
    [ /\\cyrchar\\cyrnhk /g, '\u04C8' ],
    [ /\\cyrchar\\CYRCHLDSC /g, '\u04CB' ],
    [ /\\cyrchar\\cyrchldsc /g, '\u04CC' ],
    [ /\\cyrchar\\CYRAE /g, '\u04D4' ],
    [ /\\cyrchar\\cyrae /g, '\u04D5' ],
    [ /\\cyrchar\\CYRSCHWA /g, '\u04D8' ],
    [ /\\cyrchar\\cyrschwa /g, '\u04D9' ],
    [ /\\cyrchar\\CYRABHDZE /g, '\u04E0' ],
    [ /\\cyrchar\\cyrabhdze /g, '\u04E1' ],
    [ /\\cyrchar\\CYROTLD /g, '\u04E8' ],
    [ /\\cyrchar\\cyrotld /g, '\u04E9' ],
    [ /\\hspace\{0.6em\}/g, '\u2002' ],
    [ /\\hspace\{1em\}/g, '\u2003' ],
    [ /\\hspace\{0.33em\}/g, '\u2004' ],
    [ /\\hspace\{0.25em\}/g, '\u2005' ],
    [ /\\hspace\{0.166em\}/g, '\u2006' ],
    [ /\\hphantom\{0\}/g, '\u2007' ],
    [ /\\hphantom\{,\}/g, '\u2008' ],
    [ /\\hspace\{0.167em\}/g, '\u2009' ],
    [ /\\mkern1mu /g, '\u200A' ],
    [ /\\textendash /g, '\u2013' ],
    [ /\\textemdash /g, '\u2014' ],
    [ /\\rule\{1em\}\{1pt\}/g, '\u2015' ],
    [ /\\Vert /g, '\u2016' ],
    [ /\\Elzreapos /g, '\u201B' ],
    [ /\\textquotedblleft /g, '\u201C' ],
    [ /\\textquotedblright /g, '\u201D' ],
    [ /\\textdagger /g, '\u2020' ],
    [ /\\textdaggerdbl /g, '\u2021' ],
    [ /\\textbullet /g, '\u2022' ],
    [ /\\ldots /g, '\u2026' ],
    [ /\\textperthousand /g, '\u2030' ],
    [ /\\textpertenthousand /g, '\u2031' ],
    [ /\\backprime /g, '\u2035' ],
    [ /\\guilsinglleft /g, '\u2039' ],
    [ /\\guilsinglright /g, '\u203A' ],
    [ /\\mkern4mu /g, '\u205F' ],
    [ /\\nolinebreak /g, '\u2060' ],
    [ /\\ensuremath\{\\Elzpes\}/g, '\u20A7' ],
    [ /\\mbox\{\\texteuro\} /g, '\u20AC' ],
    [ /\\dddot /g, '\u20DB' ],
    [ /\\ddddot /g, '\u20DC' ],
    [ /\\mathbb\{C\}/g, '\u2102' ],
    [ /\\mathscr\{g\}/g, '\u210A' ],
    [ /\\mathscr\{H\}/g, '\u210B' ],
    [ /\\mathfrak\{H\}/g, '\u210C' ],
    [ /\\mathbb\{H\}/g, '\u210D' ],
    [ /\\hslash /g, '\u210F' ],
    [ /\\mathscr\{I\}/g, '\u2110' ],
    [ /\\mathfrak\{I\}/g, '\u2111' ],
    [ /\\mathscr\{L\}/g, '\u2112' ],
    [ /\\mathscr\{l\}/g, '\u2113' ],
    [ /\\mathbb\{N\}/g, '\u2115' ],
    [ /\\cyrchar\\textnumero /g, '\u2116' ],
    [ /\\wp /g, '\u2118' ],
    [ /\\mathbb\{P\}/g, '\u2119' ],
    [ /\\mathbb\{Q\}/g, '\u211A' ],
    [ /\\mathscr\{R\}/g, '\u211B' ],
    [ /\\mathfrak\{R\}/g, '\u211C' ],
    [ /\\mathbb\{R\}/g, '\u211D' ],
    [ /\\Elzxrat /g, '\u211E' ],
    [ /\\texttrademark /g, '\u2122' ],
    [ /\\mathbb\{Z\}/g, '\u2124' ],
    [ /\\Omega /g, '\u2126' ],
    [ /\\mho /g, '\u2127' ],
    [ /\\mathfrak\{Z\}/g, '\u2128' ],
    [ /\\ElsevierGlyph\{2129\}/g, '\u2129' ],
    [ /\\AA /g, '\u212B' ],
    [ /\\mathscr\{B\}/g, '\u212C' ],
    [ /\\mathfrak\{C\}/g, '\u212D' ],
    [ /\\mathscr\{e\}/g, '\u212F' ],
    [ /\\mathscr\{E\}/g, '\u2130' ],
    [ /\\mathscr\{F\}/g, '\u2131' ],
    [ /\\mathscr\{M\}/g, '\u2133' ],
    [ /\\mathscr\{o\}/g, '\u2134' ],
    [ /\\aleph /g, '\u2135' ],
    [ /\\beth /g, '\u2136' ],
    [ /\\gimel /g, '\u2137' ],
    [ /\\daleth /g, '\u2138' ],
    [ /\\textfrac\{1\}\{3\}/g, '\u2153' ],
    [ /\\textfrac\{2\}\{3\}/g, '\u2154' ],
    [ /\\textfrac\{1\}\{5\}/g, '\u2155' ],
    [ /\\textfrac\{2\}\{5\}/g, '\u2156' ],
    [ /\\textfrac\{3\}\{5\}/g, '\u2157' ],
    [ /\\textfrac\{4\}\{5\}/g, '\u2158' ],
    [ /\\textfrac\{1\}\{6\}/g, '\u2159' ],
    [ /\\textfrac\{5\}\{6\}/g, '\u215A' ],
    [ /\\textfrac\{1\}\{8\}/g, '\u215B' ],
    [ /\\textfrac\{3\}\{8\}/g, '\u215C' ],
    [ /\\textfrac\{5\}\{8\}/g, '\u215D' ],
    [ /\\textfrac\{7\}\{8\}/g, '\u215E' ],
    [ /\\leftarrow /g, '\u2190' ],
    [ /\\uparrow /g, '\u2191' ],
    [ /\\rightarrow /g, '\u2192' ],
    [ /\\downarrow /g, '\u2193' ],
    [ /\\leftrightarrow /g, '\u2194' ],
    [ /\\updownarrow /g, '\u2195' ],
    [ /\\nwarrow /g, '\u2196' ],
    [ /\\nearrow /g, '\u2197' ],
    [ /\\searrow /g, '\u2198' ],
    [ /\\swarrow /g, '\u2199' ],
    [ /\\nleftarrow /g, '\u219A' ],
    [ /\\nrightarrow /g, '\u219B' ],
    [ /\\arrowwaveright /g, '\u219C' ],
    [ /\\arrowwaveright /g, '\u219D' ],
    [ /\\twoheadleftarrow /g, '\u219E' ],
    [ /\\twoheadrightarrow /g, '\u21A0' ],
    [ /\\leftarrowtail /g, '\u21A2' ],
    [ /\\rightarrowtail /g, '\u21A3' ],
    [ /\\mapsto /g, '\u21A6' ],
    [ /\\hookleftarrow /g, '\u21A9' ],
    [ /\\hookrightarrow /g, '\u21AA' ],
    [ /\\looparrowleft /g, '\u21AB' ],
    [ /\\looparrowright /g, '\u21AC' ],
    [ /\\leftrightsquigarrow /g, '\u21AD' ],
    [ /\\nleftrightarrow /g, '\u21AE' ],
    [ /\\Lsh /g, '\u21B0' ],
    [ /\\Rsh /g, '\u21B1' ],
    [ /\\ElsevierGlyph\{21B3\}/g, '\u21B3' ],
    [ /\\curvearrowleft /g, '\u21B6' ],
    [ /\\curvearrowright /g, '\u21B7' ],
    [ /\\circlearrowleft /g, '\u21BA' ],
    [ /\\circlearrowright /g, '\u21BB' ],
    [ /\\leftharpoonup /g, '\u21BC' ],
    [ /\\leftharpoondown /g, '\u21BD' ],
    [ /\\upharpoonright /g, '\u21BE' ],
    [ /\\upharpoonleft /g, '\u21BF' ],
    [ /\\rightharpoonup /g, '\u21C0' ],
    [ /\\rightharpoondown /g, '\u21C1' ],
    [ /\\downharpoonright /g, '\u21C2' ],
    [ /\\downharpoonleft /g, '\u21C3' ],
    [ /\\rightleftarrows /g, '\u21C4' ],
    [ /\\dblarrowupdown /g, '\u21C5' ],
    [ /\\leftrightarrows /g, '\u21C6' ],
    [ /\\leftleftarrows /g, '\u21C7' ],
    [ /\\upuparrows /g, '\u21C8' ],
    [ /\\rightrightarrows /g, '\u21C9' ],
    [ /\\downdownarrows /g, '\u21CA' ],
    [ /\\leftrightharpoons /g, '\u21CB' ],
    [ /\\rightleftharpoons /g, '\u21CC' ],
    [ /\\nLeftarrow /g, '\u21CD' ],
    [ /\\nLeftrightarrow /g, '\u21CE' ],
    [ /\\nRightarrow /g, '\u21CF' ],
    [ /\\Leftarrow /g, '\u21D0' ],
    [ /\\Uparrow /g, '\u21D1' ],
    [ /\\Rightarrow /g, '\u21D2' ],
    [ /\\Downarrow /g, '\u21D3' ],
    [ /\\Leftrightarrow /g, '\u21D4' ],
    [ /\\Updownarrow /g, '\u21D5' ],
    [ /\\Lleftarrow /g, '\u21DA' ],
    [ /\\Rrightarrow /g, '\u21DB' ],
    [ /\\rightsquigarrow /g, '\u21DD' ],
    [ /\\DownArrowUpArrow /g, '\u21F5' ],
    [ /\\forall /g, '\u2200' ],
    [ /\\complement /g, '\u2201' ],
    [ /\\partial /g, '\u2202' ],
    [ /\\exists /g, '\u2203' ],
    [ /\\nexists /g, '\u2204' ],
    [ /\\varnothing /g, '\u2205' ],
    [ /\\nabla /g, '\u2207' ],
    [ /\\in /g, '\u2208' ],
    [ /\\not\\in /g, '\u2209' ],
    [ /\\ni /g, '\u220B' ],
    [ /\\not\\ni /g, '\u220C' ],
    [ /\\prod /g, '\u220F' ],
    [ /\\coprod /g, '\u2210' ],
    [ /\\sum /g, '\u2211' ],
    [ /\\mp /g, '\u2213' ],
    [ /\\dotplus /g, '\u2214' ],
    [ /\\setminus /g, '\u2216' ],
    [ /\\circ /g, '\u2218' ],
    [ /\\bullet /g, '\u2219' ],
    [ /\\surd /g, '\u221A' ],
    [ /\\propto /g, '\u221D' ],
    [ /\\infty /g, '\u221E' ],
    [ /\\rightangle /g, '\u221F' ],
    [ /\\angle /g, '\u2220' ],
    [ /\\measuredangle /g, '\u2221' ],
    [ /\\sphericalangle /g, '\u2222' ],
    [ /\\mid /g, '\u2223' ],
    [ /\\nmid /g, '\u2224' ],
    [ /\\parallel /g, '\u2225' ],
    [ /\\nparallel /g, '\u2226' ],
    [ /\\wedge /g, '\u2227' ],
    [ /\\vee /g, '\u2228' ],
    [ /\\cap /g, '\u2229' ],
    [ /\\cup /g, '\u222A' ],
    [ /\\int /g, '\u222B' ],
    [ /\\int\\!\\int /g, '\u222C' ],
    [ /\\int\\!\\int\\!\\int /g, '\u222D' ],
    [ /\\oint /g, '\u222E' ],
    [ /\\surfintegral /g, '\u222F' ],
    [ /\\volintegral /g, '\u2230' ],
    [ /\\clwintegral /g, '\u2231' ],
    [ /\\ElsevierGlyph\{2232\}/g, '\u2232' ],
    [ /\\ElsevierGlyph\{2233\}/g, '\u2233' ],
    [ /\\therefore /g, '\u2234' ],
    [ /\\because /g, '\u2235' ],
    [ /\\Colon /g, '\u2237' ],
    [ /\\ElsevierGlyph\{2238\}/g, '\u2238' ],
    [ /\\mathbin\{\{:\}\\!\\!\{\-\}\\!\\!\{:\}\}/g, '\u223A' ],
    [ /\\homothetic /g, '\u223B' ],
    [ /\\sim /g, '\u223C' ],
    [ /\\backsim /g, '\u223D' ],
    [ /\\lazysinv /g, '\u223E' ],
    [ /\\wr /g, '\u2240' ],
    [ /\\not\\sim /g, '\u2241' ],
    [ /\\ElsevierGlyph\{2242\}/g, '\u2242' ],
    [ /\\NotEqualTilde /g, '\u2242-00338' ],
    [ /\\simeq /g, '\u2243' ],
    [ /\\not\\simeq /g, '\u2244' ],
    [ /\\cong /g, '\u2245' ],
    [ /\\approxnotequal /g, '\u2246' ],
    [ /\\not\\cong /g, '\u2247' ],
    [ /\\approx /g, '\u2248' ],
    [ /\\not\\approx /g, '\u2249' ],
    [ /\\approxeq /g, '\u224A' ],
    [ /\\tildetrpl /g, '\u224B' ],
    [ /\\not\\apid /g, '\u224B-00338' ],
    [ /\\allequal /g, '\u224C' ],
    [ /\\asymp /g, '\u224D' ],
    [ /\\Bumpeq /g, '\u224E' ],
    [ /\\NotHumpDownHump /g, '\u224E-00338' ],
    [ /\\bumpeq /g, '\u224F' ],
    [ /\\NotHumpEqual /g, '\u224F-00338' ],
    [ /\\doteq /g, '\u2250' ],
    [ /\\not\\doteq/g, '\u2250-00338' ],
    [ /\\doteqdot /g, '\u2251' ],
    [ /\\fallingdotseq /g, '\u2252' ],
    [ /\\risingdotseq /g, '\u2253' ],
    [ /\\eqcirc /g, '\u2256' ],
    [ /\\circeq /g, '\u2257' ],
    [ /\\estimates /g, '\u2259' ],
    [ /\\ElsevierGlyph\{225A\}/g, '\u225A' ],
    [ /\\starequal /g, '\u225B' ],
    [ /\\triangleq /g, '\u225C' ],
    [ /\\ElsevierGlyph\{225F\}/g, '\u225F' ],
    [ /\\not =/g, '\u2260' ],
    [ /\\equiv /g, '\u2261' ],
    [ /\\not\\equiv /g, '\u2262' ],
    [ /\\leq /g, '\u2264' ],
    [ /\\geq /g, '\u2265' ],
    [ /\\leqq /g, '\u2266' ],
    [ /\\geqq /g, '\u2267' ],
    [ /\\lneqq /g, '\u2268' ],
    [ /\\lvertneqq /g, '\u2268-0FE00' ],
    [ /\\gneqq /g, '\u2269' ],
    [ /\\gvertneqq /g, '\u2269-0FE00' ],
    [ /\\ll /g, '\u226A' ],
    [ /\\NotLessLess /g, '\u226A-00338' ],
    [ /\\gg /g, '\u226B' ],
    [ /\\NotGreaterGreater /g, '\u226B-00338' ],
    [ /\\between /g, '\u226C' ],
    [ /\\not\\kern\-0.3em\\times /g, '\u226D' ],
    [ /\\not</g, '\u226E' ],
    [ /\\not>/g, '\u226F' ],
    [ /\\not\\leq /g, '\u2270' ],
    [ /\\not\\geq /g, '\u2271' ],
    [ /\\lessequivlnt /g, '\u2272' ],
    [ /\\greaterequivlnt /g, '\u2273' ],
    [ /\\ElsevierGlyph\{2274\}/g, '\u2274' ],
    [ /\\ElsevierGlyph\{2275\}/g, '\u2275' ],
    [ /\\lessgtr /g, '\u2276' ],
    [ /\\gtrless /g, '\u2277' ],
    [ /\\notlessgreater /g, '\u2278' ],
    [ /\\notgreaterless /g, '\u2279' ],
    [ /\\prec /g, '\u227A' ],
    [ /\\succ /g, '\u227B' ],
    [ /\\preccurlyeq /g, '\u227C' ],
    [ /\\succcurlyeq /g, '\u227D' ],
    [ /\\precapprox /g, '\u227E' ],
    [ /\\NotPrecedesTilde /g, '\u227E-00338' ],
    [ /\\succapprox /g, '\u227F' ],
    [ /\\NotSucceedsTilde /g, '\u227F-00338' ],
    [ /\\not\\prec /g, '\u2280' ],
    [ /\\not\\succ /g, '\u2281' ],
    [ /\\subset /g, '\u2282' ],
    [ /\\supset /g, '\u2283' ],
    [ /\\not\\subset /g, '\u2284' ],
    [ /\\not\\supset /g, '\u2285' ],
    [ /\\subseteq /g, '\u2286' ],
    [ /\\supseteq /g, '\u2287' ],
    [ /\\not\\subseteq /g, '\u2288' ],
    [ /\\not\\supseteq /g, '\u2289' ],
    [ /\\subsetneq /g, '\u228A' ],
    [ /\\varsubsetneqq /g, '\u228A-0FE00' ],
    [ /\\supsetneq /g, '\u228B' ],
    [ /\\varsupsetneq /g, '\u228B-0FE00' ],
    [ /\\uplus /g, '\u228E' ],
    [ /\\sqsubset /g, '\u228F' ],
    [ /\\NotSquareSubset /g, '\u228F-00338' ],
    [ /\\sqsupset /g, '\u2290' ],
    [ /\\NotSquareSuperset /g, '\u2290-00338' ],
    [ /\\sqsubseteq /g, '\u2291' ],
    [ /\\sqsupseteq /g, '\u2292' ],
    [ /\\sqcap /g, '\u2293' ],
    [ /\\sqcup /g, '\u2294' ],
    [ /\\oplus /g, '\u2295' ],
    [ /\\ominus /g, '\u2296' ],
    [ /\\otimes /g, '\u2297' ],
    [ /\\oslash /g, '\u2298' ],
    [ /\\odot /g, '\u2299' ],
    [ /\\circledcirc /g, '\u229A' ],
    [ /\\circledast /g, '\u229B' ],
    [ /\\circleddash /g, '\u229D' ],
    [ /\\boxplus /g, '\u229E' ],
    [ /\\boxminus /g, '\u229F' ],
    [ /\\boxtimes /g, '\u22A0' ],
    [ /\\boxdot /g, '\u22A1' ],
    [ /\\vdash /g, '\u22A2' ],
    [ /\\dashv /g, '\u22A3' ],
    [ /\\top /g, '\u22A4' ],
    [ /\\perp /g, '\u22A5' ],
    [ /\\truestate /g, '\u22A7' ],
    [ /\\forcesextra /g, '\u22A8' ],
    [ /\\Vdash /g, '\u22A9' ],
    [ /\\Vvdash /g, '\u22AA' ],
    [ /\\VDash /g, '\u22AB' ],
    [ /\\nvdash /g, '\u22AC' ],
    [ /\\nvDash /g, '\u22AD' ],
    [ /\\nVdash /g, '\u22AE' ],
    [ /\\nVDash /g, '\u22AF' ],
    [ /\\vartriangleleft /g, '\u22B2' ],
    [ /\\vartriangleright /g, '\u22B3' ],
    [ /\\trianglelefteq /g, '\u22B4' ],
    [ /\\trianglerighteq /g, '\u22B5' ],
    [ /\\original /g, '\u22B6' ],
    [ /\\image /g, '\u22B7' ],
    [ /\\multimap /g, '\u22B8' ],
    [ /\\hermitconjmatrix /g, '\u22B9' ],
    [ /\\intercal /g, '\u22BA' ],
    [ /\\veebar /g, '\u22BB' ],
    [ /\\rightanglearc /g, '\u22BE' ],
    [ /\\ElsevierGlyph\{22C0\}/g, '\u22C0' ],
    [ /\\ElsevierGlyph\{22C1\}/g, '\u22C1' ],
    [ /\\bigcap /g, '\u22C2' ],
    [ /\\bigcup /g, '\u22C3' ],
    [ /\\diamond /g, '\u22C4' ],
    [ /\\cdot /g, '\u22C5' ],
    [ /\\star /g, '\u22C6' ],
    [ /\\divideontimes /g, '\u22C7' ],
    [ /\\bowtie /g, '\u22C8' ],
    [ /\\ltimes /g, '\u22C9' ],
    [ /\\rtimes /g, '\u22CA' ],
    [ /\\leftthreetimes /g, '\u22CB' ],
    [ /\\rightthreetimes /g, '\u22CC' ],
    [ /\\backsimeq /g, '\u22CD' ],
    [ /\\curlyvee /g, '\u22CE' ],
    [ /\\curlywedge /g, '\u22CF' ],
    [ /\\Subset /g, '\u22D0' ],
    [ /\\Supset /g, '\u22D1' ],
    [ /\\Cap /g, '\u22D2' ],
    [ /\\Cup /g, '\u22D3' ],
    [ /\\pitchfork /g, '\u22D4' ],
    [ /\\lessdot /g, '\u22D6' ],
    [ /\\gtrdot /g, '\u22D7' ],
    [ /\\verymuchless /g, '\u22D8' ],
    [ /\\verymuchgreater /g, '\u22D9' ],
    [ /\\lesseqgtr /g, '\u22DA' ],
    [ /\\gtreqless /g, '\u22DB' ],
    [ /\\curlyeqprec /g, '\u22DE' ],
    [ /\\curlyeqsucc /g, '\u22DF' ],
    [ /\\not\\sqsubseteq /g, '\u22E2' ],
    [ /\\not\\sqsupseteq /g, '\u22E3' ],
    [ /\\Elzsqspne /g, '\u22E5' ],
    [ /\\lnsim /g, '\u22E6' ],
    [ /\\gnsim /g, '\u22E7' ],
    [ /\\precedesnotsimilar /g, '\u22E8' ],
    [ /\\succnsim /g, '\u22E9' ],
    [ /\\ntriangleleft /g, '\u22EA' ],
    [ /\\ntriangleright /g, '\u22EB' ],
    [ /\\ntrianglelefteq /g, '\u22EC' ],
    [ /\\ntrianglerighteq /g, '\u22ED' ],
    [ /\\vdots /g, '\u22EE' ],
    [ /\\cdots /g, '\u22EF' ],
    [ /\\upslopeellipsis /g, '\u22F0' ],
    [ /\\downslopeellipsis /g, '\u22F1' ],
    [ /\\barwedge /g, '\u2305' ],
    [ /\\perspcorrespond /g, '\u2306' ],
    [ /\\lceil /g, '\u2308' ],
    [ /\\rceil /g, '\u2309' ],
    [ /\\lfloor /g, '\u230A' ],
    [ /\\rfloor /g, '\u230B' ],
    [ /\\recorder /g, '\u2315' ],
    [ /\\mathchar"2208/g, '\u2316' ],
    [ /\\ulcorner /g, '\u231C' ],
    [ /\\urcorner /g, '\u231D' ],
    [ /\\llcorner /g, '\u231E' ],
    [ /\\lrcorner /g, '\u231F' ],
    [ /\\frown /g, '\u2322' ],
    [ /\\smile /g, '\u2323' ],
    [ /\\langle /g, '\u2329' ],
    [ /\\rangle /g, '\u232A' ],
    [ /\\ElsevierGlyph\{E838\}/g, '\u233D' ],
    [ /\\Elzdlcorn /g, '\u23A3' ],
    [ /\\lmoustache /g, '\u23B0' ],
    [ /\\rmoustache /g, '\u23B1' ],
    [ /\\textvisiblespace /g, '\u2423' ],
    [ /\\ding\{172\}/g, '\u2460' ],
    [ /\\ding\{173\}/g, '\u2461' ],
    [ /\\ding\{174\}/g, '\u2462' ],
    [ /\\ding\{175\}/g, '\u2463' ],
    [ /\\ding\{176\}/g, '\u2464' ],
    [ /\\ding\{177\}/g, '\u2465' ],
    [ /\\ding\{178\}/g, '\u2466' ],
    [ /\\ding\{179\}/g, '\u2467' ],
    [ /\\ding\{180\}/g, '\u2468' ],
    [ /\\ding\{181\}/g, '\u2469' ],
    [ /\\circledS /g, '\u24C8' ],
    [ /\\Elzdshfnc /g, '\u2506' ],
    [ /\\Elzsqfnw /g, '\u2519' ],
    [ /\\diagup /g, '\u2571' ],
    [ /\\ding\{110\}/g, '\u25A0' ],
    [ /\\square /g, '\u25A1' ],
    [ /\\blacksquare /g, '\u25AA' ],
    [ /\\fbox\{~~\}/g, '\u25AD' ],
    [ /\\Elzvrecto /g, '\u25AF' ],
    [ /\\ElsevierGlyph\{E381\}/g, '\u25B1' ],
    [ /\\ding\{115\}/g, '\u25B2' ],
    [ /\\bigtriangleup /g, '\u25B3' ],
    [ /\\blacktriangle /g, '\u25B4' ],
    [ /\\vartriangle /g, '\u25B5' ],
    [ /\\blacktriangleright /g, '\u25B8' ],
    [ /\\triangleright /g, '\u25B9' ],
    [ /\\ding\{116\}/g, '\u25BC' ],
    [ /\\bigtriangledown /g, '\u25BD' ],
    [ /\\blacktriangledown /g, '\u25BE' ],
    [ /\\triangledown /g, '\u25BF' ],
    [ /\\blacktriangleleft /g, '\u25C2' ],
    [ /\\triangleleft /g, '\u25C3' ],
    [ /\\ding\{117\}/g, '\u25C6' ],
    [ /\\lozenge /g, '\u25CA' ],
    [ /\\bigcirc /g, '\u25CB' ],
    [ /\\ding\{108\}/g, '\u25CF' ],
    [ /\\Elzcirfl /g, '\u25D0' ],
    [ /\\Elzcirfr /g, '\u25D1' ],
    [ /\\Elzcirfb /g, '\u25D2' ],
    [ /\\ding\{119\}/g, '\u25D7' ],
    [ /\\Elzrvbull /g, '\u25D8' ],
    [ /\\Elzsqfl /g, '\u25E7' ],
    [ /\\Elzsqfr /g, '\u25E8' ],
    [ /\\Elzsqfse /g, '\u25EA' ],
    [ /\\bigcirc /g, '\u25EF' ],
    [ /\\ding\{72\}/g, '\u2605' ],
    [ /\\ding\{73\}/g, '\u2606' ],
    [ /\\ding\{37\}/g, '\u260E' ],
    [ /\\ding\{42\}/g, '\u261B' ],
    [ /\\ding\{43\}/g, '\u261E' ],
    [ /\\rightmoon /g, '\u263E' ],
    [ /\\mercury /g, '\u263F' ],
    [ /\\venus /g, '\u2640' ],
    [ /\\male /g, '\u2642' ],
    [ /\\jupiter /g, '\u2643' ],
    [ /\\saturn /g, '\u2644' ],
    [ /\\uranus /g, '\u2645' ],
    [ /\\neptune /g, '\u2646' ],
    [ /\\pluto /g, '\u2647' ],
    [ /\\aries /g, '\u2648' ],
    [ /\\taurus /g, '\u2649' ],
    [ /\\gemini /g, '\u264A' ],
    [ /\\cancer /g, '\u264B' ],
    [ /\\leo /g, '\u264C' ],
    [ /\\virgo /g, '\u264D' ],
    [ /\\libra /g, '\u264E' ],
    [ /\\scorpio /g, '\u264F' ],
    [ /\\sagittarius /g, '\u2650' ],
    [ /\\capricornus /g, '\u2651' ],
    [ /\\aquarius /g, '\u2652' ],
    [ /\\pisces /g, '\u2653' ],
    [ /\\ding\{171\}/g, '\u2660' ],
    [ /\\diamond /g, '\u2662' ],
    [ /\\ding\{168\}/g, '\u2663' ],
    [ /\\ding\{170\}/g, '\u2665' ],
    [ /\\ding\{169\}/g, '\u2666' ],
    [ /\\quarternote /g, '\u2669' ],
    [ /\\eighthnote /g, '\u266A' ],
    [ /\\flat /g, '\u266D' ],
    [ /\\natural /g, '\u266E' ],
    [ /\\sharp /g, '\u266F' ],
    [ /\\ding\{33\}/g, '\u2701' ],
    [ /\\ding\{34\}/g, '\u2702' ],
    [ /\\ding\{35\}/g, '\u2703' ],
    [ /\\ding\{36\}/g, '\u2704' ],
    [ /\\ding\{38\}/g, '\u2706' ],
    [ /\\ding\{39\}/g, '\u2707' ],
    [ /\\ding\{40\}/g, '\u2708' ],
    [ /\\ding\{41\}/g, '\u2709' ],
    [ /\\ding\{44\}/g, '\u270C' ],
    [ /\\ding\{45\}/g, '\u270D' ],
    [ /\\ding\{46\}/g, '\u270E' ],
    [ /\\ding\{47\}/g, '\u270F' ],
    [ /\\ding\{48\}/g, '\u2710' ],
    [ /\\ding\{49\}/g, '\u2711' ],
    [ /\\ding\{50\}/g, '\u2712' ],
    [ /\\ding\{51\}/g, '\u2713' ],
    [ /\\ding\{52\}/g, '\u2714' ],
    [ /\\ding\{53\}/g, '\u2715' ],
    [ /\\ding\{54\}/g, '\u2716' ],
    [ /\\ding\{55\}/g, '\u2717' ],
    [ /\\ding\{56\}/g, '\u2718' ],
    [ /\\ding\{57\}/g, '\u2719' ],
    [ /\\ding\{58\}/g, '\u271A' ],
    [ /\\ding\{59\}/g, '\u271B' ],
    [ /\\ding\{60\}/g, '\u271C' ],
    [ /\\ding\{61\}/g, '\u271D' ],
    [ /\\ding\{62\}/g, '\u271E' ],
    [ /\\ding\{63\}/g, '\u271F' ],
    [ /\\ding\{64\}/g, '\u2720' ],
    [ /\\ding\{65\}/g, '\u2721' ],
    [ /\\ding\{66\}/g, '\u2722' ],
    [ /\\ding\{67\}/g, '\u2723' ],
    [ /\\ding\{68\}/g, '\u2724' ],
    [ /\\ding\{69\}/g, '\u2725' ],
    [ /\\ding\{70\}/g, '\u2726' ],
    [ /\\ding\{71\}/g, '\u2727' ],
    [ /\\ding\{73\}/g, '\u2729' ],
    [ /\\ding\{74\}/g, '\u272A' ],
    [ /\\ding\{75\}/g, '\u272B' ],
    [ /\\ding\{76\}/g, '\u272C' ],
    [ /\\ding\{77\}/g, '\u272D' ],
    [ /\\ding\{78\}/g, '\u272E' ],
    [ /\\ding\{79\}/g, '\u272F' ],
    [ /\\ding\{80\}/g, '\u2730' ],
    [ /\\ding\{81\}/g, '\u2731' ],
    [ /\\ding\{82\}/g, '\u2732' ],
    [ /\\ding\{83\}/g, '\u2733' ],
    [ /\\ding\{84\}/g, '\u2734' ],
    [ /\\ding\{85\}/g, '\u2735' ],
    [ /\\ding\{86\}/g, '\u2736' ],
    [ /\\ding\{87\}/g, '\u2737' ],
    [ /\\ding\{88\}/g, '\u2738' ],
    [ /\\ding\{89\}/g, '\u2739' ],
    [ /\\ding\{90\}/g, '\u273A' ],
    [ /\\ding\{91\}/g, '\u273B' ],
    [ /\\ding\{92\}/g, '\u273C' ],
    [ /\\ding\{93\}/g, '\u273D' ],
    [ /\\ding\{94\}/g, '\u273E' ],
    [ /\\ding\{95\}/g, '\u273F' ],
    [ /\\ding\{96\}/g, '\u2740' ],
    [ /\\ding\{97\}/g, '\u2741' ],
    [ /\\ding\{98\}/g, '\u2742' ],
    [ /\\ding\{99\}/g, '\u2743' ],
    [ /\\ding\{100\}/g, '\u2744' ],
    [ /\\ding\{101\}/g, '\u2745' ],
    [ /\\ding\{102\}/g, '\u2746' ],
    [ /\\ding\{103\}/g, '\u2747' ],
    [ /\\ding\{104\}/g, '\u2748' ],
    [ /\\ding\{105\}/g, '\u2749' ],
    [ /\\ding\{106\}/g, '\u274A' ],
    [ /\\ding\{107\}/g, '\u274B' ],
    [ /\\ding\{109\}/g, '\u274D' ],
    [ /\\ding\{111\}/g, '\u274F' ],
    [ /\\ding\{112\}/g, '\u2750' ],
    [ /\\ding\{113\}/g, '\u2751' ],
    [ /\\ding\{114\}/g, '\u2752' ],
    [ /\\ding\{118\}/g, '\u2756' ],
    [ /\\ding\{120\}/g, '\u2758' ],
    [ /\\ding\{121\}/g, '\u2759' ],
    [ /\\ding\{122\}/g, '\u275A' ],
    [ /\\ding\{123\}/g, '\u275B' ],
    [ /\\ding\{124\}/g, '\u275C' ],
    [ /\\ding\{125\}/g, '\u275D' ],
    [ /\\ding\{126\}/g, '\u275E' ],
    [ /\\ding\{161\}/g, '\u2761' ],
    [ /\\ding\{162\}/g, '\u2762' ],
    [ /\\ding\{163\}/g, '\u2763' ],
    [ /\\ding\{164\}/g, '\u2764' ],
    [ /\\ding\{165\}/g, '\u2765' ],
    [ /\\ding\{166\}/g, '\u2766' ],
    [ /\\ding\{167\}/g, '\u2767' ],
    [ /\\ding\{182\}/g, '\u2776' ],
    [ /\\ding\{183\}/g, '\u2777' ],
    [ /\\ding\{184\}/g, '\u2778' ],
    [ /\\ding\{185\}/g, '\u2779' ],
    [ /\\ding\{186\}/g, '\u277A' ],
    [ /\\ding\{187\}/g, '\u277B' ],
    [ /\\ding\{188\}/g, '\u277C' ],
    [ /\\ding\{189\}/g, '\u277D' ],
    [ /\\ding\{190\}/g, '\u277E' ],
    [ /\\ding\{191\}/g, '\u277F' ],
    [ /\\ding\{192\}/g, '\u2780' ],
    [ /\\ding\{193\}/g, '\u2781' ],
    [ /\\ding\{194\}/g, '\u2782' ],
    [ /\\ding\{195\}/g, '\u2783' ],
    [ /\\ding\{196\}/g, '\u2784' ],
    [ /\\ding\{197\}/g, '\u2785' ],
    [ /\\ding\{198\}/g, '\u2786' ],
    [ /\\ding\{199\}/g, '\u2787' ],
    [ /\\ding\{200\}/g, '\u2788' ],
    [ /\\ding\{201\}/g, '\u2789' ],
    [ /\\ding\{202\}/g, '\u278A' ],
    [ /\\ding\{203\}/g, '\u278B' ],
    [ /\\ding\{204\}/g, '\u278C' ],
    [ /\\ding\{205\}/g, '\u278D' ],
    [ /\\ding\{206\}/g, '\u278E' ],
    [ /\\ding\{207\}/g, '\u278F' ],
    [ /\\ding\{208\}/g, '\u2790' ],
    [ /\\ding\{209\}/g, '\u2791' ],
    [ /\\ding\{210\}/g, '\u2792' ],
    [ /\\ding\{211\}/g, '\u2793' ],
    [ /\\ding\{212\}/g, '\u2794' ],
    [ /\\ding\{216\}/g, '\u2798' ],
    [ /\\ding\{217\}/g, '\u2799' ],
    [ /\\ding\{218\}/g, '\u279A' ],
    [ /\\ding\{219\}/g, '\u279B' ],
    [ /\\ding\{220\}/g, '\u279C' ],
    [ /\\ding\{221\}/g, '\u279D' ],
    [ /\\ding\{222\}/g, '\u279E' ],
    [ /\\ding\{223\}/g, '\u279F' ],
    [ /\\ding\{224\}/g, '\u27A0' ],
    [ /\\ding\{225\}/g, '\u27A1' ],
    [ /\\ding\{226\}/g, '\u27A2' ],
    [ /\\ding\{227\}/g, '\u27A3' ],
    [ /\\ding\{228\}/g, '\u27A4' ],
    [ /\\ding\{229\}/g, '\u27A5' ],
    [ /\\ding\{230\}/g, '\u27A6' ],
    [ /\\ding\{231\}/g, '\u27A7' ],
    [ /\\ding\{232\}/g, '\u27A8' ],
    [ /\\ding\{233\}/g, '\u27A9' ],
    [ /\\ding\{234\}/g, '\u27AA' ],
    [ /\\ding\{235\}/g, '\u27AB' ],
    [ /\\ding\{236\}/g, '\u27AC' ],
    [ /\\ding\{237\}/g, '\u27AD' ],
    [ /\\ding\{238\}/g, '\u27AE' ],
    [ /\\ding\{239\}/g, '\u27AF' ],
    [ /\\ding\{241\}/g, '\u27B1' ],
    [ /\\ding\{242\}/g, '\u27B2' ],
    [ /\\ding\{243\}/g, '\u27B3' ],
    [ /\\ding\{244\}/g, '\u27B4' ],
    [ /\\ding\{245\}/g, '\u27B5' ],
    [ /\\ding\{246\}/g, '\u27B6' ],
    [ /\\ding\{247\}/g, '\u27B7' ],
    [ /\\ding\{248\}/g, '\u27B8' ],
    [ /\\ding\{249\}/g, '\u27B9' ],
    [ /\\ding\{250\}/g, '\u27BA' ],
    [ /\\ding\{251\}/g, '\u27BB' ],
    [ /\\ding\{252\}/g, '\u27BC' ],
    [ /\\ding\{253\}/g, '\u27BD' ],
    [ /\\ding\{254\}/g, '\u27BE' ],
    [ /\\longleftarrow /g, '\u27F5' ],
    [ /\\longrightarrow /g, '\u27F6' ],
    [ /\\longleftrightarrow /g, '\u27F7' ],
    [ /\\Longleftarrow /g, '\u27F8' ],
    [ /\\Longrightarrow /g, '\u27F9' ],
    [ /\\Longleftrightarrow /g, '\u27FA' ],
    [ /\\longmapsto /g, '\u27FC' ],
    [ /\\sim\\joinrel\\leadsto/g, '\u27FF' ],
    [ /\\ElsevierGlyph\{E212\}/g, '\u2905' ],
    [ /\\UpArrowBar /g, '\u2912' ],
    [ /\\DownArrowBar /g, '\u2913' ],
    [ /\\ElsevierGlyph\{E20C\}/g, '\u2923' ],
    [ /\\ElsevierGlyph\{E20D\}/g, '\u2924' ],
    [ /\\ElsevierGlyph\{E20B\}/g, '\u2925' ],
    [ /\\ElsevierGlyph\{E20A\}/g, '\u2926' ],
    [ /\\ElsevierGlyph\{E211\}/g, '\u2927' ],
    [ /\\ElsevierGlyph\{E20E\}/g, '\u2928' ],
    [ /\\ElsevierGlyph\{E20F\}/g, '\u2929' ],
    [ /\\ElsevierGlyph\{E210\}/g, '\u292A' ],
    [ /\\ElsevierGlyph\{E21C\}/g, '\u2933' ],
    [ /\\ElsevierGlyph\{E21D\}/g, '\u2933-00338' ],
    [ /\\ElsevierGlyph\{E21A\}/g, '\u2936' ],
    [ /\\ElsevierGlyph\{E219\}/g, '\u2937' ],
    [ /\\Elolarr /g, '\u2940' ],
    [ /\\Elorarr /g, '\u2941' ],
    [ /\\ElzRlarr /g, '\u2942' ],
    [ /\\ElzrLarr /g, '\u2944' ],
    [ /\\Elzrarrx /g, '\u2947' ],
    [ /\\LeftRightVector /g, '\u294E' ],
    [ /\\RightUpDownVector /g, '\u294F' ],
    [ /\\DownLeftRightVector /g, '\u2950' ],
    [ /\\LeftUpDownVector /g, '\u2951' ],
    [ /\\LeftVectorBar /g, '\u2952' ],
    [ /\\RightVectorBar /g, '\u2953' ],
    [ /\\RightUpVectorBar /g, '\u2954' ],
    [ /\\RightDownVectorBar /g, '\u2955' ],
    [ /\\DownLeftVectorBar /g, '\u2956' ],
    [ /\\DownRightVectorBar /g, '\u2957' ],
    [ /\\LeftUpVectorBar /g, '\u2958' ],
    [ /\\LeftDownVectorBar /g, '\u2959' ],
    [ /\\LeftTeeVector /g, '\u295A' ],
    [ /\\RightTeeVector /g, '\u295B' ],
    [ /\\RightUpTeeVector /g, '\u295C' ],
    [ /\\RightDownTeeVector /g, '\u295D' ],
    [ /\\DownLeftTeeVector /g, '\u295E' ],
    [ /\\DownRightTeeVector /g, '\u295F' ],
    [ /\\LeftUpTeeVector /g, '\u2960' ],
    [ /\\LeftDownTeeVector /g, '\u2961' ],
    [ /\\UpEquilibrium /g, '\u296E' ],
    [ /\\ReverseUpEquilibrium /g, '\u296F' ],
    [ /\\RoundImplies /g, '\u2970' ],
    [ /\\ElsevierGlyph\{E214\}/g, '\u297C' ],
    [ /\\ElsevierGlyph\{E215\}/g, '\u297D' ],
    [ /\\Elztfnc /g, '\u2980' ],
    [ /\\ElsevierGlyph\{3018\}/g, '\u2985' ],
    [ /\\Elroang /g, '\u2986' ],
    [ /\\ElsevierGlyph\{E291\}/g, '\u2994' ],
    [ /\\Elzddfnc /g, '\u2999' ],
    [ /\\Angle /g, '\u299C' ],
    [ /\\Elzlpargt /g, '\u29A0' ],
    [ /\\ElsevierGlyph\{E260\}/g, '\u29B5' ],
    [ /\\ElsevierGlyph\{E61B\}/g, '\u29B6' ],
    [ /\\ElzLap /g, '\u29CA' ],
    [ /\\Elzdefas /g, '\u29CB' ],
    [ /\\LeftTriangleBar /g, '\u29CF' ],
    [ /\\NotLeftTriangleBar /g, '\u29CF-00338' ],
    [ /\\RightTriangleBar /g, '\u29D0' ],
    [ /\\NotRightTriangleBar /g, '\u29D0-00338' ],
    [ /\\ElsevierGlyph\{E372\}/g, '\u29DC' ],
    [ /\\blacklozenge /g, '\u29EB' ],
    [ /\\RuleDelayed /g, '\u29F4' ],
    [ /\\Elxuplus /g, '\u2A04' ],
    [ /\\ElzThr /g, '\u2A05' ],
    [ /\\Elxsqcup /g, '\u2A06' ],
    [ /\\ElzInf /g, '\u2A07' ],
    [ /\\ElzSup /g, '\u2A08' ],
    [ /\\ElzCint /g, '\u2A0D' ],
    [ /\\clockoint /g, '\u2A0F' ],
    [ /\\ElsevierGlyph\{E395\}/g, '\u2A10' ],
    [ /\\sqrint /g, '\u2A16' ],
    [ /\\ElsevierGlyph\{E25A\}/g, '\u2A25' ],
    [ /\\ElsevierGlyph\{E25B\}/g, '\u2A2A' ],
    [ /\\ElsevierGlyph\{E25C\}/g, '\u2A2D' ],
    [ /\\ElsevierGlyph\{E25D\}/g, '\u2A2E' ],
    [ /\\ElzTimes /g, '\u2A2F' ],
    [ /\\ElsevierGlyph\{E25E\}/g, '\u2A34' ],
    [ /\\ElsevierGlyph\{E25E\}/g, '\u2A35' ],
    [ /\\ElsevierGlyph\{E259\}/g, '\u2A3C' ],
    [ /\\amalg /g, '\u2A3F' ],
    [ /\\ElzAnd /g, '\u2A53' ],
    [ /\\ElzOr /g, '\u2A54' ],
    [ /\\ElsevierGlyph\{E36E\}/g, '\u2A55' ],
    [ /\\ElOr /g, '\u2A56' ],
    [ /\\perspcorrespond /g, '\u2A5E' ],
    [ /\\Elzminhat /g, '\u2A5F' ],
    [ /\\ElsevierGlyph\{225A\}/g, '\u2A63' ],
    [ /\\stackrel\{*\}\{=\}/g, '\u2A6E' ],
    [ /\\Equal /g, '\u2A75' ],
    [ /\\leqslant /g, '\u2A7D' ],
    [ /\\nleqslant /g, '\u2A7D-00338' ],
    [ /\\geqslant /g, '\u2A7E' ],
    [ /\\ngeqslant /g, '\u2A7E-00338' ],
    [ /\\lessapprox /g, '\u2A85' ],
    [ /\\gtrapprox /g, '\u2A86' ],
    [ /\\lneq /g, '\u2A87' ],
    [ /\\gneq /g, '\u2A88' ],
    [ /\\lnapprox /g, '\u2A89' ],
    [ /\\gnapprox /g, '\u2A8A' ],
    [ /\\lesseqqgtr /g, '\u2A8B' ],
    [ /\\gtreqqless /g, '\u2A8C' ],
    [ /\\eqslantless /g, '\u2A95' ],
    [ /\\eqslantgtr /g, '\u2A96' ],
    [ /\\Pisymbol\{ppi020\}\{117\}/g, '\u2A9D' ],
    [ /\\Pisymbol\{ppi020\}\{105\}/g, '\u2A9E' ],
    [ /\\NestedLessLess /g, '\u2AA1' ],
    [ /\\NotNestedLessLess /g, '\u2AA1-00338' ],
    [ /\\NestedGreaterGreater /g, '\u2AA2' ],
    [ /\\NotNestedGreaterGreater /g, '\u2AA2-00338' ],
    [ /\\preceq /g, '\u2AAF' ],
    [ /\\not\\preceq /g, '\u2AAF-00338' ],
    [ /\\succeq /g, '\u2AB0' ],
    [ /\\not\\succeq /g, '\u2AB0-00338' ],
    [ /\\precneqq /g, '\u2AB5' ],
    [ /\\succneqq /g, '\u2AB6' ],
    [ /\\precapprox /g, '\u2AB7' ],
    [ /\\succapprox /g, '\u2AB8' ],
    [ /\\precnapprox /g, '\u2AB9' ],
    [ /\\succnapprox /g, '\u2ABA' ],
    [ /\\subseteqq /g, '\u2AC5' ],
    [ /\\nsubseteqq /g, '\u2AC5-00338' ],
    [ /\\supseteqq /g, '\u2AC6' ],
    [ /\\nsupseteqq/g, '\u2AC6-00338' ],
    [ /\\subsetneqq /g, '\u2ACB' ],
    [ /\\supsetneqq /g, '\u2ACC' ],
    [ /\\ElsevierGlyph\{E30D\}/g, '\u2AEB' ],
    [ /\\Elztdcol /g, '\u2AF6' ],
    [ /\\ElsevierGlyph\{300A\}/g, '\u300A' ],
    [ /\\ElsevierGlyph\{300B\}/g, '\u300B' ],
    [ /\\ElsevierGlyph\{3018\}/g, '\u3018' ],
    [ /\\ElsevierGlyph\{3019\}/g, '\u3019' ],
    [ /\\openbracketleft /g, '\u301A' ],
    [ /\\openbracketright /g, '\u301B' ]
  ]

  return this;
} // end function BibtexParser

if (typeof module !== 'undefined' && module.exports) {
  module.exports = BibtexParser;
}
