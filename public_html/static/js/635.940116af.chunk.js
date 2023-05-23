/*! For license information please see 635.940116af.chunk.js.LICENSE.txt */
(self.webpackChunkpaxfolio=self.webpackChunkpaxfolio||[]).push([[635],{1694:function(t,e){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var i=typeof n;if("string"===i||"number"===i)t.push(n);else if(Array.isArray(n)){if(n.length){var a=o.apply(null,n);a&&t.push(a)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){t.push(n.toString());continue}for(var u in n)r.call(n,u)&&n[u]&&t.push(u)}}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(n=function(){return o}.apply(e,[]))||(t.exports=n)}()},1725:function(t){"use strict";var e=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(t){r[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(t,o){for(var i,a,u=function(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),c=1;c<arguments.length;c++){for(var s in i=Object(arguments[c]))n.call(i,s)&&(u[s]=i[s]);if(e){a=e(i);for(var f=0;f<a.length;f++)r.call(i,a[f])&&(u[a[f]]=i[a[f]])}}return u}},77:function(t){var e="undefined"!==typeof Element,n="function"===typeof Map,r="function"===typeof Set,o="function"===typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var u,c,s,f;if(Array.isArray(t)){if((u=t.length)!=a.length)return!1;for(c=u;0!==c--;)if(!i(t[c],a[c]))return!1;return!0}if(n&&t instanceof Map&&a instanceof Map){if(t.size!==a.size)return!1;for(f=t.entries();!(c=f.next()).done;)if(!a.has(c.value[0]))return!1;for(f=t.entries();!(c=f.next()).done;)if(!i(c.value[1],a.get(c.value[0])))return!1;return!0}if(r&&t instanceof Set&&a instanceof Set){if(t.size!==a.size)return!1;for(f=t.entries();!(c=f.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(a)){if((u=t.length)!=a.length)return!1;for(c=u;0!==c--;)if(t[c]!==a[c])return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf&&"function"===typeof t.valueOf&&"function"===typeof a.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString&&"function"===typeof t.toString&&"function"===typeof a.toString)return t.toString()===a.toString();if((u=(s=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(c=u;0!==c--;)if(!Object.prototype.hasOwnProperty.call(a,s[c]))return!1;if(e&&t instanceof Element)return!1;for(c=u;0!==c--;)if(("_owner"!==s[c]&&"__v"!==s[c]&&"__o"!==s[c]||!t.$$typeof)&&!i(t[s[c]],a[s[c]]))return!1;return!0}return t!==t&&a!==a}t.exports=function(t,e){try{return i(t,e)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4270:function(t,e,n){"use strict";n.d(e,{q:function(){return ct}});var r=n(2007),o=n.n(r),i=n(9475),a=n.n(i),u=n(77),c=n.n(u),s=n(2791),f=n(1725),l=n.n(f),p="bodyAttributes",d="htmlAttributes",h="titleAttributes",y={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(y).map((function(t){return y[t]})),"charset"),b="cssText",v="href",m="http-equiv",g="innerHTML",O="itemprop",T="name",S="property",C="rel",A="src",j="target",k={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},E="defaultTitle",P="defer",x="encodeSpecialCharacters",L="onChangeClientState",I="titleTemplate",_=Object.keys(k).reduce((function(t,e){return t[k[e]]=e,t}),{}),N=[y.NOSCRIPT,y.SCRIPT,y.STYLE],R="data-react-helmet",Z="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),H=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},D=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},q=function(t){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},B=function(t){var e=z(t,y.TITLE),n=z(t,I);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var r=z(t,E);return e||r||void 0},W=function(t){return z(t,L)||function(){}},Y=function(t,e){return e.filter((function(e){return"undefined"!==typeof e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return H({},t,e)}),{})},U=function(t,e){return e.filter((function(t){return"undefined"!==typeof t[y.BASE]})).map((function(t){return t[y.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==t.indexOf(i)&&n[i])return e.concat(n)}return e}),[])},F=function(t,e,n){var r={};return n.filter((function(e){return!!Array.isArray(e[t])||("undefined"!==typeof e[t]&&X("Helmet: "+t+' should be of type "Array". Instead found type "'+Z(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var o={};n.filter((function(t){for(var n=void 0,i=Object.keys(t),a=0;a<i.length;a++){var u=i[a],c=u.toLowerCase();-1===e.indexOf(c)||n===C&&"canonical"===t[n].toLowerCase()||c===C&&"stylesheet"===t[c].toLowerCase()||(n=c),-1===e.indexOf(u)||u!==g&&u!==b&&u!==O||(n=u)}if(!n||!t[n])return!1;var s=t[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],c=l()({},r[u],o[u]);r[u]=c}return t}),[]).reverse()},z=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},K=function(){var t=Date.now();return function(e){var n=Date.now();n-t>16?(t=n,e(n)):setTimeout((function(){K(e)}),0)}}(),V=function(t){return clearTimeout(t)},$="undefined"!==typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||K:n.g.requestAnimationFrame||K,G="undefined"!==typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||V:n.g.cancelAnimationFrame||V,X=function(t){return console&&"function"===typeof console.warn&&console.warn(t)},J=null,Q=function(t,e){var n=t.baseTag,r=t.bodyAttributes,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,u=t.noscriptTags,c=t.onChangeClientState,s=t.scriptTags,f=t.styleTags,l=t.title,p=t.titleAttributes;nt(y.BODY,r),nt(y.HTML,o),et(l,p);var d={baseTag:rt(y.BASE,n),linkTags:rt(y.LINK,i),metaTags:rt(y.META,a),noscriptTags:rt(y.NOSCRIPT,u),scriptTags:rt(y.SCRIPT,s),styleTags:rt(y.STYLE,f)},h={},w={};Object.keys(d).forEach((function(t){var e=d[t],n=e.newTags,r=e.oldTags;n.length&&(h[t]=n),r.length&&(w[t]=d[t].oldTags)})),e&&e(),c(t,h,w)},tt=function(t){return Array.isArray(t)?t.join(""):t},et=function(t,e){"undefined"!==typeof t&&document.title!==t&&(document.title=tt(t)),nt(y.TITLE,e)},nt=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(R),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(e),u=0;u<a.length;u++){var c=a[u],s=e[c]||"";n.getAttribute(c)!==s&&n.setAttribute(c,s),-1===o.indexOf(c)&&o.push(c);var f=i.indexOf(c);-1!==f&&i.splice(f,1)}for(var l=i.length-1;l>=0;l--)n.removeAttribute(i[l]);o.length===i.length?n.removeAttribute(R):n.getAttribute(R)!==a.join(",")&&n.setAttribute(R,a.join(","))}},rt=function(t,e){var n=document.head||document.querySelector(y.HEAD),r=n.querySelectorAll(t+"["+R+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===g)n.innerHTML=e.innerHTML;else if(r===b)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var u="undefined"===typeof e[r]?"":e[r];n.setAttribute(r,u)}n.setAttribute(R,"true"),o.some((function(t,e){return a=e,n.isEqualNode(t)}))?o.splice(a,1):i.push(n)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),i.forEach((function(t){return n.appendChild(t)})),{oldTags:o,newTags:i}},ot=function(t){return Object.keys(t).reduce((function(e,n){var r="undefined"!==typeof t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},it=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[k[n]||n]=t[n],e}),e)},at=function(t,e,n){switch(t){case y.TITLE:return{toComponent:function(){return function(t,e,n){var r,o=((r={key:e})[R]=!0,r),i=it(n,o);return[s.createElement(y.TITLE,i,e)]}(0,e.title,e.titleAttributes)},toString:function(){return function(t,e,n,r){var o=ot(n),i=tt(e);return o?"<"+t+" "+R+'="true" '+o+">"+q(i,r)+"</"+t+">":"<"+t+" "+R+'="true">'+q(i,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case p:case d:return{toComponent:function(){return it(e)},toString:function(){return ot(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,o=((r={key:n})[R]=!0,r);return Object.keys(e).forEach((function(t){var n=k[t]||t;if(n===g||n===b){var r=e.innerHTML||e.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=e[t]})),s.createElement(t,o)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var o=Object.keys(r).filter((function(t){return!(t===g||t===b)})).reduce((function(t,e){var o="undefined"===typeof r[e]?e:e+'="'+q(r[e],n)+'"';return t?t+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===N.indexOf(t);return e+"<"+t+" "+R+'="true" '+o+(a?"/>":">"+i+"</"+t+">")}),"")}(t,e,n)}}}},ut=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,u=t.noscriptTags,c=t.scriptTags,s=t.styleTags,f=t.title,l=void 0===f?"":f,h=t.titleAttributes;return{base:at(y.BASE,e,r),bodyAttributes:at(p,n,r),htmlAttributes:at(d,o,r),link:at(y.LINK,i,r),meta:at(y.META,a,r),noscript:at(y.NOSCRIPT,u,r),script:at(y.SCRIPT,c,r),style:at(y.STYLE,s,r),title:at(y.TITLE,{title:l,titleAttributes:h},r)}},ct=function(t){var e,n;return n=e=function(e){function n(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}(this,e.apply(this,arguments))}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(n,e),n.prototype.shouldComponentUpdate=function(t){return!c()(this.props,t)},n.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case y.SCRIPT:case y.NOSCRIPT:return{innerHTML:e};case y.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,o=t.newChildProps,i=t.nestedChildren;return H({},r,((e={})[n.type]=[].concat(r[n.type]||[],[H({},o,this.mapNestedChildrenToProps(n,i))]),e))},n.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,o=t.newProps,i=t.newChildProps,a=t.nestedChildren;switch(r.type){case y.TITLE:return H({},o,((e={})[r.type]=a,e.titleAttributes=H({},i),e));case y.BODY:return H({},o,{bodyAttributes:H({},i)});case y.HTML:return H({},o,{htmlAttributes:H({},i)})}return H({},o,((n={})[r.type]=H({},i),n))},n.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=H({},e);return Object.keys(t).forEach((function(e){var r;n=H({},n,((r={})[e]=t[e],r))})),n},n.prototype.warnOnInvalidChildren=function(t,e){return!0},n.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return s.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,i=o.children,a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[_[n]||n]=t[n],e}),e)}(D(o,["children"]));switch(n.warnOnInvalidChildren(t,i),t.type){case y.LINK:case y.META:case y.NOSCRIPT:case y.SCRIPT:case y.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:a,nestedChildren:i})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},n.prototype.render=function(){var e=this.props,n=e.children,r=D(e,["children"]),o=H({},r);return n&&(o=this.mapChildrenToProps(n,o)),s.createElement(t,o)},M(n,null,[{key:"canUseDOM",set:function(e){t.canUseDOM=e}}]),n}(s.Component),e.propTypes={base:o().object,bodyAttributes:o().object,children:o().oneOfType([o().arrayOf(o().node),o().node]),defaultTitle:o().string,defer:o().bool,encodeSpecialCharacters:o().bool,htmlAttributes:o().object,link:o().arrayOf(o().object),meta:o().arrayOf(o().object),noscript:o().arrayOf(o().object),onChangeClientState:o().func,script:o().arrayOf(o().object),style:o().arrayOf(o().object),title:o().string,titleAttributes:o().object,titleTemplate:o().string},e.defaultProps={defer:!0,encodeSpecialCharacters:!0},e.peek=t.peek,e.rewind=function(){var e=t.rewind();return e||(e=ut({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},n}(a()((function(t){return{baseTag:U([v,j],t),bodyAttributes:Y(p,t),defer:z(t,P),encode:z(t,x),htmlAttributes:Y(d,t),linkTags:F(y.LINK,[C,v],t),metaTags:F(y.META,[T,w,m,S,O],t),noscriptTags:F(y.NOSCRIPT,[g],t),onChangeClientState:W(t),scriptTags:F(y.SCRIPT,[A,g],t),styleTags:F(y.STYLE,[b],t),title:B(t),titleAttributes:Y(h,t)}}),(function(t){J&&G(J),t.defer?J=$((function(){Q(t,(function(){J=null}))})):(Q(t),J=null)}),ut)((function(){return null})));ct.renderStatic=ct.rewind},9846:function(t,e,n){"use strict";var r=n(1583),o=n(2020);var i=(0,n(1217).Z)("facebook",(function(t,e){var n=e.quote,i=e.hashtag;return(0,r.Z)(t,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+(0,o.Z)({u:t,quote:n,hashtag:i})}),(function(t){return{quote:t.quote,hashtag:t.hashtag}}),{windowWidth:550,windowHeight:400});e.Z=i},2028:function(t,e,n){"use strict";var r=n(1583),o=n(2020);var i=(0,n(1217).Z)("linkedin",(function(t,e){var n=e.title,i=e.summary,a=e.source;return(0,r.Z)(t,"linkedin.url"),"https://linkedin.com/shareArticle"+(0,o.Z)({url:t,mini:"true",title:n,summary:i,source:a})}),(function(t){return{title:t.title,summary:t.summary,source:t.source}}),{windowWidth:750,windowHeight:600});e.Z=i},1606:function(t,e,n){"use strict";var r=n(1583),o=n(2020);var i=(0,n(1217).Z)("pinterest",(function(t,e){var n=e.media,i=e.description;return(0,r.Z)(t,"pinterest.url"),(0,r.Z)(n,"pinterest.media"),"https://pinterest.com/pin/create/button/"+(0,o.Z)({url:t,media:n,description:i})}),(function(t){return{media:t.media,description:t.description}}),{windowWidth:1e3,windowHeight:730});e.Z=i},5904:function(t,e,n){"use strict";var r=n(1583),o=n(2020);var i=(0,n(1217).Z)("twitter",(function(t,e){var n=e.title,i=e.via,a=e.hashtags,u=void 0===a?[]:a,c=e.related,s=void 0===c?[]:c;return(0,r.Z)(t,"twitter.url"),(0,r.Z)(Array.isArray(u),"twitter.hashtags is not an array"),(0,r.Z)(Array.isArray(s),"twitter.related is not an array"),"https://twitter.com/share"+(0,o.Z)({url:t,text:n,via:i,hashtags:u.length>0?u.join(","):void 0,related:s.length>0?s.join(","):void 0})}),(function(t){return{hashtags:t.hashtags,title:t.title,via:t.via,related:t.related}}),{windowWidth:550,windowHeight:400});e.Z=i},6971:function(t,e,n){"use strict";var r=n(1583),o=n(2020);var i=(0,n(1217).Z)("whatsapp",(function(t,e){var n=e.title,i=e.separator;return(0,r.Z)(t,"whatsapp.url"),"https://"+(/(android|iphone|ipad|mobile)/i.test(navigator.userAgent)?"api":"web")+".whatsapp.com/send"+(0,o.Z)({text:n?n+i+t:t})}),(function(t){return{title:t.title,separator:t.separator||" "}}),{windowWidth:550,windowHeight:400});e.Z=i},1217:function(t,e,n){"use strict";n.d(e,{Z:function(){return h}});var r=n(2791),o=n(1694),i=n.n(o),a=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),u=function(){return u=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},u.apply(this,arguments)},c=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{c(r.next(t))}catch(e){i(e)}}function u(t){try{c(r.throw(t))}catch(e){i(e)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,u)}c((r=r.apply(t,e||[])).next())}))},s=function(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(u){i=[6,u],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},f=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};var l=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.openShareDialog=function(t){var n,r,o=e.props,i=o.onShareWindowClose,a=o.windowHeight,c=void 0===a?400:a,s=o.windowPosition,l=void 0===s?"windowCenter":s,p=o.windowWidth,d=void 0===p?550:p;!function(t,e,n){var r=e.height,o=e.width,i=f(e,["height","width"]),a=u({height:r,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},i),c=window.open(t,"",Object.keys(a).map((function(t){return"".concat(t,"=").concat(a[t])})).join(", "));if(n)var s=window.setInterval((function(){try{(null===c||c.closed)&&(window.clearInterval(s),n(c))}catch(t){console.error(t)}}),1e3)}(t,u({height:c,width:d},"windowCenter"===l?(n=d,r=c,{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-n/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-r/2}):function(t,e){return{top:(window.screen.height-e)/2,left:(window.screen.width-t)/2}}(d,c)),i)},e.handleClick=function(t){return c(e,void 0,void 0,(function(){var e,n,r,o,i,a,u,c,f,l;return s(this,(function(s){switch(s.label){case 0:return e=this.props,n=e.beforeOnClick,r=e.disabled,o=e.networkLink,i=e.onClick,a=e.url,u=e.openShareDialogOnClick,c=e.opts,f=o(a,c),r?[2]:(t.preventDefault(),n?(l=n(),!(p=l)||"object"!==typeof p&&"function"!==typeof p||"function"!==typeof p.then?[3,2]:[4,l]):[3,2]);case 1:s.sent(),s.label=2;case 2:return u&&this.openShareDialog(f),i&&i(t,f),[2]}var p}))}))},e}return a(e,t),e.prototype.render=function(){var t=this.props,e=(t.beforeOnClick,t.children),n=t.className,o=t.disabled,a=t.disabledStyle,c=t.forwardedRef,s=(t.networkLink,t.networkName),l=(t.onShareWindowClose,t.openShareDialogOnClick,t.opts,t.resetButtonStyle),p=t.style,d=(t.url,t.windowHeight,t.windowPosition,t.windowWidth,f(t,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),h=i()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!o,disabled:!!o},n),y=u(u(l?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},p),o&&a);return r.createElement("button",u({},d,{"aria-label":d["aria-label"]||s,className:h,onClick:this.handleClick,ref:c,style:y}),e)},e.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},e}(r.Component),p=l,d=function(){return d=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},d.apply(this,arguments)};var h=function(t,e,n,o){function i(i,a){var u=n(i),c=d({},i);return Object.keys(u).forEach((function(t){delete c[t]})),r.createElement(p,d({},o,c,{forwardedRef:a,networkName:t,networkLink:e,opts:n(i)}))}return i.displayName="ShareButton-".concat(t),(0,r.forwardRef)(i)}},1583:function(t,e,n){"use strict";n.d(e,{Z:function(){return i}});var r=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=function(t){function e(e){var n=t.call(this,e)||this;return n.name="AssertionError",n}return r(e,t),e}(Error);function i(t,e){if(!t)throw new o(e)}},2020:function(t,e,n){"use strict";function r(t){var e=Object.entries(t).filter((function(t){var e=t[1];return void 0!==e&&null!==e})).map((function(t){var e=t[0],n=t[1];return"".concat(encodeURIComponent(e),"=").concat(encodeURIComponent(String(n)))}));return e.length>0?"?".concat(e.join("&")):""}n.d(e,{Z:function(){return r}})},9475:function(t,e,n){"use strict";var r,o=n(2791),i=(r=o)&&"object"===typeof r&&"default"in r?r.default:r;function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var u=!("undefined"===typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!==typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!==typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!==typeof n&&"function"!==typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!==typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,s=[];function f(){c=t(s.map((function(t){return t.props}))),l.canUseDOM?e(c):n&&(c=n(c))}var l=function(t){var e,n;function o(){return t.apply(this,arguments)||this}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=c;return c=void 0,s=[],t};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),f()},a.componentDidUpdate=function(){f()},a.componentWillUnmount=function(){var t=s.indexOf(this);s.splice(t,1),f()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(l,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),a(l,"canUseDOM",u),l}}}}]);
//# sourceMappingURL=635.940116af.chunk.js.map