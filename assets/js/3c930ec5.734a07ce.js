(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[161],{4973:function(e,t,n){"use strict";n.d(t,{Z:function(){return p},I:function(){return u}});var r=n(7294),o=/{\w+}/g,i="{}";function a(e,t){var n=[],a=e.replace(o,(function(e){var o=e.substr(1,e.length-2),a=null==t?void 0:t[o];if(void 0!==a){var l=r.isValidElement(a)?a:String(a);return n.push(l),i}return e}));return 0===n.length?e:n.every((function(e){return"string"==typeof e}))?a.split(i).reduce((function(e,t,r){var o;return e.concat(t).concat(null!==(o=n[r])&&void 0!==o?o:"")}),""):a.split(i).reduce((function(e,t,o){return[].concat(e,[r.createElement(r.Fragment,{key:o},t,n[o])])}),[])}function l(e){return a(e.children,e.values)}var s=n(4644);function c(e){var t,n=e.id,r=e.message;return null!==(t=s[null!=n?n:r])&&void 0!==t?t:r}function u(e,t){var n,r=e.message;return a(null!==(n=c({message:r,id:e.id}))&&void 0!==n?n:r,t)}function p(e){var t,n=e.children,o=e.id,i=e.values,a=null!==(t=c({message:n,id:o}))&&void 0!==t?t:n;return r.createElement(l,{values:i},a)}},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return a}});var r=n(2263),o=n(3919);function i(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,l=void 0!==a&&a,s=i.absolute,c=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(l)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+u:u}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},4745:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(7294),o=n(5977),i="ButtonContainer_311N",a=n(6010),l=function(e){var t=e.to,n=e.children,l=e.className,s=(0,o.k6)();return r.createElement("button",{className:(0,a.Z)(i,l),onClick:function(){t.startsWith("http")?window.open(t,"_blank"):s.push(t)}},n)}},9913:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(7294),o=n(4996),i=n(4973),a=n(2122),l=n(4544),s=function(e){var t=e.code;return r.createElement(l.ZP,(0,a.Z)({},l.lG,{code:t,language:"jsx"}),(function(e){var t=e.className,n=e.style,o=e.tokens,i=e.getLineProps,a=e.getTokenProps;return r.createElement("pre",{className:t,style:Object.assign({},n,{textAlign:"left"})},o.map((function(e,t){return r.createElement("div",i({line:e,key:t}),e.map((function(e,t){return r.createElement("span",a({token:e,key:t}))})))})))}))},c=n(4745),u="Container_3xDa",p="Content_3Lg8",f="Tagline_Ows1",y="Title_2pzQ",d="LearnMoreBtn_3o8j",v=function(){return r.createElement("div",{className:u},r.createElement("div",{className:p},r.createElement("div",{className:y},r.createElement(i.Z,{id:"nplayer.quick"},"\u5feb\u901f\u4e0a\u624b")),r.createElement("div",null,r.createElement("div",{className:f},r.createElement(i.Z,{id:"nplayer.quick1nd"},"\u7b2c\u4e00\u6b65\uff1a\u5b89\u88c5 NPlayer")),r.createElement(s,{code:"npm i -S nplayer"})),r.createElement("div",null,r.createElement("div",{className:f},r.createElement(i.Z,{id:"nplayer.quick2nd"},"\u7b2c\u4e8c\u6b65\uff1a\u4f7f\u7528 NPlayer")),r.createElement(s,{code:"import Player from 'nplayer'\n\nconst player = new Player({\n  src: \"https://v-cdn.zjol.com.cn/280443.mp4\",\n})\n\nplayer.mount(document.body)"})),r.createElement(c.Z,{className:d,to:(0,o.Z)("/docs/")},r.createElement(i.Z,{id:"nplayer.learnMore"},"\u4e86\u89e3\u66f4\u591a"))))}},6010:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})},4544:function(e,t,n){"use strict";n.d(t,{ZP:function(){return d},lG:function(){return a}});var r=n(7410),o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i=n(7294),a={Prism:r.Z,theme:o};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},f=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=s({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=s({},n,{backgroundColor:null}),o};function y(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var d=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?f(e.theme,e.language):void 0;return t.themeDict=n})),l(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,i=s({},y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),a=t.getThemeDict(t.props);return void 0!==a&&(i.style=a.plain),void 0!==o&&(i.style=void 0!==i.style?s({},i.style,o):o),void 0!==n&&(i.key=n),r&&(i.className+=" "+r),i})),l(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,i=t.getThemeDict(t.props);if(void 0!==i){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return i[n[0]];var a=r?{display:"inline-block"}:{},l=n.map((function(e){return i[e]}));return Object.assign.apply(Object,[a].concat(l))}})),l(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,i=e.token,a=s({},y(e,["key","className","style","token"]),{className:"token "+i.types.join(" "),children:i.content,style:t.getStyleForToken(i),key:void 0});return void 0!==o&&(a.style=void 0!==a.style?s({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),l(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var i=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),i}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,i=this.getThemeDict(this.props),a=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],i=0,a=0,l=[],s=[l];a>-1;){for(;(i=r[a]++)<o[a];){var f=void 0,y=t[a],d=n[a][i];if("string"==typeof d?(y=a>0?y:["plain"],f=d):(y=p(y,d.type),d.alias&&(y=p(y,d.alias)),f=d.content),"string"==typeof f){var v=f.split(c),m=v.length;l.push({types:y,content:v[0]});for(var g=1;g<m;g++)u(l),s.push(l=[]),l.push({types:y,content:v[g]})}else a++,t.push(y),n.push(f),r.push(0),o.push(f.length)}a--,t.pop(),n.pop(),r.pop(),o.pop()}return u(l),s}(void 0!==a?this.tokenize(t,r,a,n):[r]),className:"prism-code language-"+n,style:void 0!==i?i.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(i.Component)}}]);