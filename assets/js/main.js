!function(e,t,n,i,o,r,a){e.GoogleAnalyticsObject=o,e[o]=e[o]||function(){(e[o].q=e[o].q||[]).push(arguments)},e[o].l=1*new Date,r=t.createElement(n),a=t.getElementsByTagName(n)[0],r.async=1,r.src=i,a.parentNode.insertBefore(r,a)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-58087941-1","auto"),ga("send","pageview"),function(e,t){"function"==typeof define&&define.amd?define("smoothScroll",t(e)):"object"==typeof exports?module.exports=t(e):e.smoothScroll=t(e)}(window||this,function(e){"use strict";var t,n,i,o={},r=!!document.querySelector&&!!e.addEventListener,a={speed:500,easing:"easeInOutCubic",offset:0,updateURL:!0,callbackBefore:function(){},callbackAfter:function(){}},s=function(e,t,n){if("[object Object]"===Object.prototype.toString.call(e))for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(n,e[i],i,e);else for(var o=0,r=e.length;r>o;o++)t.call(n,e[o],o,e)},c=function(e,t){var n={};return s(e,function(t,i){n[i]=e[i]}),s(t,function(e,i){n[i]=t[i]}),n},l=function(e,t){for(var n=t.charAt(0);e&&e!==document;e=e.parentNode)if("."===n){if(e.classList.contains(t.substr(1)))return e}else if("#"===n){if(e.id===t.substr(1))return e}else if("["===n&&e.hasAttribute(t.substr(1,t.length-2)))return e;return!1},u=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},f=function(e){for(var t,n=String(e),i=n.length,o=-1,r="",a=n.charCodeAt(0);++o<i;){if(t=n.charCodeAt(o),0===t)throw new InvalidCharacterError("Invalid character: the input contains U+0000.");r+=t>=1&&31>=t||127==t||0===o&&t>=48&&57>=t||1===o&&t>=48&&57>=t&&45===a?"\\"+t.toString(16)+" ":t>=128||45===t||95===t||t>=48&&57>=t||t>=65&&90>=t||t>=97&&122>=t?n.charAt(o):"\\"+n.charAt(o)}return r},d=function(e,t){var n;return"easeInQuad"===e&&(n=t*t),"easeOutQuad"===e&&(n=t*(2-t)),"easeInOutQuad"===e&&(n=.5>t?2*t*t:-1+(4-2*t)*t),"easeInCubic"===e&&(n=t*t*t),"easeOutCubic"===e&&(n=--t*t*t+1),"easeInOutCubic"===e&&(n=.5>t?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e&&(n=t*t*t*t),"easeOutQuart"===e&&(n=1- --t*t*t*t),"easeInOutQuart"===e&&(n=.5>t?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e&&(n=t*t*t*t*t),"easeOutQuint"===e&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e&&(n=.5>t?16*t*t*t*t*t:1+16*--t*t*t*t*t),n||t},h=function(e,t,n){var i=0;if(e.offsetParent)do i+=e.offsetTop,e=e.offsetParent;while(e);return i=i-t-n,i>=0?i:0},p=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},m=function(e){return e&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(e):{}},v=function(t,n){history.pushState&&(n||"true"===n)&&history.pushState(null,null,[e.location.protocol,"//",e.location.host,e.location.pathname,e.location.search,t].join(""))};o.animateScroll=function(t,n,o){var r=c(r||a,o||{}),s=m(t?t.getAttribute("data-options"):null);r=c(r,s),n="#"+f(n.substr(1));var l="#"===n?document.documentElement:document.querySelector(n),g=e.pageYOffset;i||(i=document.querySelector("[data-scroll-header]"));var w,y,b,x=null===i?0:u(i)+i.offsetTop,k=h(l,x,parseInt(r.offset,10)),O=k-g,E=p(),j=0;v(n,r.updateURL);var R=function(i,o,a){var s=e.pageYOffset;(i==o||s==o||e.innerHeight+s>=E)&&(clearInterval(a),l.focus(),r.callbackAfter(t,n))},S=function(){j+=16,y=j/parseInt(r.speed,10),y=y>1?1:y,b=g+O*d(r.easing,y),e.scrollTo(0,Math.floor(b)),R(b,k,w)},T=function(){r.callbackBefore(t,n),w=setInterval(S,16)};0===e.pageYOffset&&e.scrollTo(0,0),T()};var g=function(e){var n=l(e.target,"[data-scroll]");n&&"a"===n.tagName.toLowerCase()&&(e.preventDefault(),o.animateScroll(n,n.hash,t))},w=function(){n||(n=setTimeout(function(){n=null,headerHeight=null===i?0:u(i)+i.offsetTop},66))};return o.destroy=function(){t&&(document.removeEventListener("click",g,!1),e.removeEventListener("resize",w,!1),t=null,n=null,i=null)},o.init=function(n){r&&(o.destroy(),t=c(a,n||{}),i=document.querySelector("[data-scroll-header]"),document.addEventListener("click",g,!1),i&&e.addEventListener("resize",w,!1))},o}),function(e){e.fn.simpleJekyllSearch=function(t){function n(){l.keyup(function(){e(this).val().length?o(i(e(this).val())):r()})}function i(t){var n=[];return e.each(c,function(e,i){for(var e=0;e<s.length;e++)void 0!==i[s[e]]&&-1!==i[s[e]].toLowerCase().indexOf(t.toLowerCase())&&(n.push(i),e=s.length)}),n}function o(t){r(),u.append(e(a.searchResultsTitle)),t.length?e.each(t,function(t,n){if(t<a.limit){for(var i=a.template,t=0;t<s.length;t++){var o=new RegExp("{"+s[t]+"}","g");i=i.replace(o,n[s[t]])}u.append(e(i))}}):u.append(a.noResults)}function r(){u.children().remove()}var a=e.extend({jsonFile:"/search.json",jsonFormat:"title,category,desc,url,date,shortdate",template:'<a href="{url}" title="{title}">{title}</a>',searchResults:".results",searchResultsTitle:"<h4>Resultados da busca:</h4>",limit:"5",noResults:"<p>Oh droga!<br/><small>Não encontramos nada :(</small></p>"},t),s=a.jsonFormat.split(","),c=[],l=this,u=e(a.searchResults);a.jsonFile.length&&u.length&&e.ajax({type:"GET",url:a.jsonFile,dataType:"json",success:function(e){c=e,n()},error:function(e,t,n){console.log("***ERROR in simpleJekyllSearch.js***"),console.log(e),console.log(t),console.log(n)}})}}(jQuery),function(e,t){"use strict";"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():e.viewportUnitsBuggyfill=t()}(this,function(){"use strict";function e(e,t){var n;return function(){var i=this,o=arguments,r=function(){e.apply(i,o)};clearTimeout(n),n=setTimeout(r,t)}}function t(){try{return window.self!==window.top}catch(e){return!0}}function n(n){y||(n===!0&&(n={force:!0}),m=n||{},m.isMobileSafari=j,m.isBadStockAndroid=R,(m.force||j||O||R||E||m.hacks&&m.hacks.required(m))&&(m.hacks&&m.hacks.initialize(m),y=!0,w=document.createElement("style"),w.id="patched-viewport",document.head.appendChild(w),f(function(){var n=e(o,m.refreshDebounceWait||100);window.addEventListener("orientationchange",n,!0),window.addEventListener("pageshow",n,!0),(m.force||O||t())&&(window.addEventListener("resize",n,!0),m._listeningToResize=!0),m.hacks&&m.hacks.initializeEvents(m,o,n),o()})))}function i(){w.textContent=s()}function o(){y&&(r(),setTimeout(function(){i()},1))}function r(){return g=[],k.call(document.styleSheets,function(e){"patched-viewport"!==e.ownerNode.id&&e.cssRules&&"ignore"!==e.ownerNode.getAttribute("data-viewport-units-buggyfill")&&(e.media&&e.media.mediaText&&window.matchMedia&&!window.matchMedia(e.media.mediaText).matches||k.call(e.cssRules,a))}),g}function a(e){if(7===e.type){var t;try{t=e.cssText}catch(n){return}return x.lastIndex=0,void(x.test(t)&&(g.push([e,null,t]),m.hacks&&m.hacks.findDeclarations(g,e,null,t)))}if(!e.style){if(!e.cssRules)return;return void k.call(e.cssRules,function(e){a(e)})}k.call(e.style,function(t){var n=e.style.getPropertyValue(t);x.lastIndex=0,x.test(n)&&(g.push([e,t,n]),m.hacks&&m.hacks.findDeclarations(g,e,t,n))})}function s(){v=u();var e,t,n=[],i=[];return g.forEach(function(o){var r=c.apply(null,o),a=r.selector.length?r.selector.join(" {\n")+" {\n":"",s=new Array(r.selector.length+1).join("\n}");return a&&a===e?(a&&!e&&(e=a,t=s),void i.push(r.content)):(i.length&&(n.push(e+i.join("\n")+t),i.length=0),void(a?(e=a,t=s,i.push(r.content)):(n.push(r.content),e=null,t=null)))}),i.length&&n.push(e+i.join("\n")+t),E&&n.push("* { content: normal !important; }"),n.join("\n\n")}function c(e,t,n){var i,o=[];i=n.replace(x,l),m.hacks&&(i=m.hacks.overwriteDeclaration(e,t,i)),t&&(o.push(e.selectorText),i=t+": "+i+";");for(var r=e.parentRule;r;)o.unshift("@media "+r.media.mediaText),r=r.parentRule;return{selector:o,content:i}}function l(e,t,n){var i=v[n],o=parseFloat(t)/100;return o*i+"px"}function u(){var e=window.innerHeight,t=window.innerWidth;return{vh:e,vw:t,vmax:Math.max(t,e),vmin:Math.min(t,e)}}function f(e){var t=0,n=function(){t--,t||e()};k.call(document.styleSheets,function(e){e.href&&d(e.href)!==d(location.href)&&(t++,h(e.ownerNode,n))}),t||e()}function d(e){return e.slice(0,e.indexOf("/",e.indexOf("://")+3))}function h(e,t){p(e.href,function(){var n=document.createElement("style");n.media=e.media,n.setAttribute("data-href",e.href),n.textContent=this.responseText,e.parentNode.replaceChild(n,e),t()},t)}function p(e,t,n){var i=new XMLHttpRequest;if("withCredentials"in i)i.open("GET",e,!0);else{if("undefined"==typeof XDomainRequest)throw new Error("cross-domain XHR not supported");i=new XDomainRequest,i.open("GET",e)}return i.onload=t,i.onerror=n,i.send(),i}var m,v,g,w,y=!1,b=window.navigator.userAgent,x=/([+-]?[0-9.]+)(vh|vw|vmin|vmax)/g,k=[].forEach,O=!1,E=b.indexOf("Opera Mini")>-1,j=/(iPhone|iPod|iPad).+AppleWebKit/i.test(b)&&function(){var e=b.match(/OS (\d)/);return e&&e.length>1&&parseInt(e[1])<8}(),R=function(){var e=b.indexOf(" Android ")>-1;if(!e)return!1;var t=b.indexOf("Version/")>-1;if(!t)return!1;var n=parseFloat((b.match("Android ([0-9.]+)")||[])[1]);return 4.4>=n}();return O||(O=!!navigator.userAgent.match(/Trident.*rv[ :]*11\./)),{version:"0.5.0",findProperties:r,getCss:s,init:n,refresh:o}}),function(e,t){"use strict";"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():e.viewportUnitsBuggyfillHacks=t()}(this,function(){"use strict";function e(e,t,o,r){var a="content"===o&&r.indexOf("viewport-units-buggyfill")>-1;if(a){var s=r.replace(i,"");s.split(";").forEach(function(i){var o=i.split(":");if(2===o.length){var r=o[0].trim();if("viewport-units-buggyfill"!==r){var a=o[1].trim();if(e.push([t,r,a]),n.test(a)){var s=a.replace(n,"-webkit-calc(");e.push([t,r,s])}}}})}}var t,n=/calc\(/g,i=/[\"\']/g,o=!1,r=!0,a=!0;return{required:function(e){return e.isMobileSafari||o},initialize:function(e){t=e;var n=document.createElement("div");n.style.width="1vmax",r=""!==n.style.width,(t.isMobileSafari||t.isBadStockAndroid)&&(a=!1)},initializeEvents:function(e,t,n){e.force||o&&!e._listeningToResize&&(window.addEventListener("resize",n,!0),e._listeningToResize=!0)},findDeclarations:function(t,n,i,o){null!==i&&e(t,n,i,o)},overwriteDeclaration:function(e,t,n){return o&&"filter"===t&&(n=n.replace(/px/g,"")),n}}}),window.viewportUnitsBuggyfill.init({hacks:window.viewportUnitsBuggyfillHacks}),smoothScroll.init({updateURL:!1}),$("a#slide").click(function(){$("#sidebar,a#slide,#fade").addClass("slide"),$("#open").hide(),$("#search").hide(),$("#close").show()}),$("#fade").click(function(){$("#sidebar,a#slide,#fade").removeClass("slide"),$("#open").show(),$("#search").show(),$("#close").hide()}),$(document).ready(function(){$(".search-field").simpleJekyllSearch({jsonFile:"/search.json",searchResults:".search-results",template:'<li><article><a href="{url}">{title} <span class="entry-date"><time datetime="{date}">{date}</time></span></a></article></li>'})}),function(e){var t={close:e(".icon-remove-sign"),searchform:e(".search-form"),canvas:e("body"),dothis:e(".dosearch")};t.dothis.on("click",function(){e(".search-wrapper").css({transform:"translateY(0)"}),t.searchform.toggleClass("active"),t.searchform.find("input").focus(),t.canvas.toggleClass("search-overlay")}),t.close.on("click",function(){e(".search-wrapper").removeAttr("style"),t.searchform.toggleClass("active"),t.canvas.removeClass("search-overlay")})}(jQuery,window);