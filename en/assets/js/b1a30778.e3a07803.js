(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[569],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,k=c["".concat(i,".").concat(u)]||c[u]||m[u]||l;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7292:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return i},default:function(){return d}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),o={title:"Getting started",slug:"/"},p={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting started",description:"npm version gzip size Codacy Badge Test",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/getting-started.md",sourceDirName:".",slug:"/",permalink:"/en/docs/",editUrl:"https://github.com/woopen/nplayer/edit/main/website/docs/getting-started.md",version:"current",frontMatter:{title:"Getting started",slug:"/"},sidebar:"docs",previous:{title:"Installation",permalink:"/en/docs/installation"},next:{title:"Shortcuts",permalink:"/en/docs/shortcut"}},i=[{value:"Introduction",id:"introduction",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Getting Started",id:"getting-started",children:[]},{value:"Video Source",id:"video-source",children:[]},{value:"Get DOM elements",id:"get-dom-elements",children:[]},{value:"Attributes and Methods",id:"attributes-and-methods",children:[]},{value:"Event",id:"event",children:[]},{value:"Player size change",id:"player-size-change",children:[]},{value:"Destroy",id:"destroy",children:[]},{value:"Multi-Level",id:"multi-level",children:[]},{value:"Responsive layout",id:"responsive-layout",children:[]},{value:"Update options",id:"update-options",children:[]},{value:"Toast",id:"toast",children:[]},{value:"Built-in Component",id:"built-in-component",children:[]},{value:"Question &amp; New Feature",id:"question--new-feature",children:[]},{value:"\u63a8\u8350\u6587\u7ae0",id:"\u63a8\u8350\u6587\u7ae0",children:[]}],s={toc:i};function d(e){var t=e.components,o=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/woopen/nplayer"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/v/nplayer?logo=npm",alt:"npm version"}))," ",(0,l.kt)("a",{parentName:"p",href:"https:/unpkg.com/nplayer/dist/index.min.js"},(0,l.kt)("img",{parentName:"a",src:"https://badge-size.herokuapp.com/woopen/nplayer/main/packages/nplayer/dist/index.min.js?compression=gzip",alt:"gzip size"}))," ",(0,l.kt)("a",{parentName:"p",href:"https://www.codacy.com/gh/woopen/nplayer/dashboard?utm_source=github.com&utm_medium=referral&utm_content=woopen/nplayer&utm_campaign=Badge_Grade"},(0,l.kt)("img",{parentName:"a",src:"https://app.codacy.com/project/badge/Grade/08e3f1086b5748aaa745ca655ecd1c6a",alt:"Codacy Badge"}))," ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/woopen/nplayer/actions/workflows/test.yml"},(0,l.kt)("img",{parentName:"a",src:"https://github.com/woopen/nplayer/actions/workflows/test.yml/badge.svg?branch=main",alt:"Test"}))),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"NPlayer is written by TypeScript plus Sass without any third party running,",(0,l.kt)("a",{parentName:"p",href:"/en/docs/ie11"},"compatible with IE11"),"to support mobile, SSR, live.customizable, all icons, theme colors, etc. can be replaced and provide",(0,l.kt)("a",{parentName:"p",href:"/en/docs/api/components"},"built-in components"),"to facilitate secondary development.You can customize any breakpoints, not just compatible with the mobile, if you want to do so, and you can easily do so with compatible phones, landscape screen, tablets, etc.It also has a plugin system,",(0,l.kt)("a",{parentName:"p",href:"/en/docs/ecosystem/danmaku"},"popup feature"),"is provided in the form of plugins that are imported as needed.This player can also access any",(0,l.kt)("a",{parentName:"p",href:"/en/docs/streaming"},"stream"),"media, such as hls, dash and flv."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"NPlayer",src:n(5784).Z})),(0,l.kt)("video",{src:"/img/nplayer.mp4",muted:!0,autoPlay:!0,preload:"auto",loop:!0}),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm i -S nplayer\n")),(0,l.kt)("p",null,"\u8be6\u7ec6\u5185\u5bb9\u8bf7\u67e5\u770b",(0,l.kt)("a",{parentName:"p",href:"/en/docs/installation"},"\u5b89\u88c5\u7ae0\u8282"),"\u3002"),(0,l.kt)("h2",{id:"getting-started"},"Getting Started"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import Player from 'nplayer'\n\nconst player = new NPlayer({\n  src: 'https://v-cdn.zjol.com.cn/280443.mp4'\n})\n\n// player.mount('#app')\nplayer.mount(document.body)\n")),(0,l.kt)("p",null,"\u9996\u5148\u6211\u4eec\u5bfc\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"Player"),"\uff0c\u7136\u540e\u521b\u5efa\u4e00\u4e2a\u64ad\u653e\u5668\u5b9e\u4f8b\uff0c\u5e76\u4f20\u5165\u89c6\u9891\u7684\u5730\u5740\uff0c\u7136\u540e\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"mount")," \u65b9\u6cd5\u5c06\u5b83\u6302\u8f7d\u5230 ",(0,l.kt)("inlineCode",{parentName:"p"},"body")," \u5143\u7d20\u4e2d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import Player from 'nplayer'\n\nconst video = document.createElement('video')\nvideo.src = 'https://v-cdn.zjol.com.cn/280443.mp4'\nconst player = new Player({ video, videoProps: { autoplay: 'true' } })\n\nplayer.mount(document.body)\n")),(0,l.kt)("p",null,"\u8fd8\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"video")," \u53c2\u6570\uff0c\u81ea\u5df1\u63d0\u4f9b ",(0,l.kt)("inlineCode",{parentName:"p"},"video")," \u5143\u7d20\uff0c\u800c\u4e0d\u662f\u8ba9 ",(0,l.kt)("inlineCode",{parentName:"p"},"NPlayer")," \u81ea\u5df1\u521b\u5efa\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"videoProps")," \u7ed9 ",(0,l.kt)("inlineCode",{parentName:"p"},"video")," \u5143\u7d20",(0,l.kt)("a",{parentName:"p",href:"/en/docs/api/config"},"\u8bbe\u7f6e\u5c5e\u6027"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"mount")," \u65b9\u6cd5\u53ef\u4ee5\u5c06\u64ad\u653e\u5668\u6302\u8f7d\u5230\u6307\u5b9a DOM \u5143\u7d20\u4e2d\uff0c\u5b83\u63a5\u6536\u4e00\u4e2a\u53c2\u6570\uff0c\u53ef\u4ee5\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\u6216\u4e00\u4e2a DOM \u5143\u7d20\u3002\u5f53\u662f\u5b57\u7b26\u4e32\u65f6\uff0c\u5c06\u4f1a\u81ea\u52a8\u67e5\u627e\u76f8\u5e94\u7684 DOM \u5143\u7d20\u3002"),(0,l.kt)("h2",{id:"video-source"},"Video Source"),(0,l.kt)("p",null,"\u9664\u4e86\u8bbe\u7f6e video \u5143\u7d20\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"src")," \u53c2\u6570\uff0c\u8fd8\u53ef\u4ee5\u6dfb\u52a0 ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source"},"Source DOM \u5143\u7d20"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"new Player({ video, videoSources: [{ src: 'video.webm', type: 'video/webm' }] })\n")),(0,l.kt)("p",null,"\u76f8\u5f53\u4e8e\u4e0b\u9762\u4ee3\u7801\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<video class="nplayer_video" crossorigin="anonymous" preload="auto" playsinline="true">\n  <source src="video.webm" type="video/webm">\n</video>\n')),(0,l.kt)("p",null,"\u5176\u4e2d ",(0,l.kt)("inlineCode",{parentName:"p"},"crossorigin"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"preload")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"playsinline")," \u662f\u9ed8\u8ba4\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"videoProps"),"\u3002"),(0,l.kt)("p",null,"\u4e00\u4e2a Source ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source"},"\u53c2\u6570\u7b7e\u540d"),"\u5982\u4e0b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"interface VideoSource {\n  media?: string;\n  sizes?: string;\n  src?: string;\n  srcset?: string;\n  type?: string;\n}\n")),(0,l.kt)("h2",{id:"get-dom-elements"},"Get DOM elements"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import Player from 'nplayer'\n\nconst player = new Player()\nplayer.mount(document.body)\n\nconsole.log(player.container) // document.body\nconsole.log(player.el) // DIV Element\nconsole.log(player.video) // VIDEO Element\n")),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"container")," \u83b7\u53d6\u5230\u64ad\u653e\u5668\u5bb9\u5668\u5143\u7d20\uff0c\u4e5f\u5c31\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"mount")," \u65b9\u6cd5\u53c2\u6570\u5bf9\u5e94\u7684 DOM \u5143\u7d20\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"video")," \u5c5e\u6027\u53ef\u4ee5\u83b7\u53d6\u5230\u64ad\u653e\u5668\u4f7f\u7528\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"video")," \u5143\u7d20\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"el")," \u53ef\u4ee5\u83b7\u53d6\u64ad\u653e\u5668\u7684 DOM \u5143\u7d20\u3002"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"NPlayer \u4e2d\u5f88\u591a\u5bf9\u8c61\u90fd\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"el")," \u5c5e\u6027\uff0c\u5b83\u8868\u793a\u7ec4\u4ef6\u5bf9\u5e94\u7684 DOM \u5143\u7d20\u3002"))),(0,l.kt)("h2",{id:"attributes-and-methods"},"Attributes and Methods"),(0,l.kt)("p",null,"Player \u4e0a\u6709\u5f88\u591a\u65b9\u5f0f\u8bbf\u95ee\u5230\u81ea\u5df1\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import Player from 'nplayer'\n\nconst player =  new Player()\nconsole.log(player.Player === Player) // true\nconsole.log(Player.Player === Player) // true\n")),(0,l.kt)("p",null,"Player \u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"Player")," \u9759\u6001\u5c5e\u6027\u53ef\u4ee5\u8bbf\u95ee\u5230\u81ea\u5df1\u3002\u5e76\u4e14 Player \u7684\u5b9e\u4f8b\u7684\u539f\u578b\u4e0a\u4e5f\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"Player")," \u5c5e\u6027\u53ef\u4ee5\u8bbf\u95ee\u81ea\u8eab\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"Player")," \u4e0a\u6709\u5f88\u591a\u9759\u6001\u5c5e\u6027\uff0c\u5982\u679c\u4f60\u53ea\u8bbf\u95ee\u5f97\u5230 Player \u5b9e\u4f8b\u65f6\uff0c\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"Player")," \u5c5e\u6027\u8bbf\u95ee\u8fd9\u4e9b\u9759\u6001\u5c5e\u6027\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const Plugin = {\n  apply(player) {\n    console.log(player.Player.components) \n    console.log(player.Player.EVENT)\n    console.log(player.EVENT)\n    // ...\n  }\n}\n")),(0,l.kt)("p",null,"\u81ea\u5b9a\u4e49\u63d2\u4ef6\u4e2d\u53ea\u80fd\u8bbf\u95ee\u5230 Player \u5b9e\u4f8b\uff0c\u8fd9\u65f6\u4f60\u5c31\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"Player")," \u5c5e\u6027\u8bbf\u95ee",(0,l.kt)("a",{parentName:"p",href:"/en/docs/api/attrs"},"\u9759\u6001\u5c5e\u6027"),"\u3002"),(0,l.kt)("p",null,"Player \u5b9e\u4f8b\u4e0a\u6709\u5f88\u591a\u5c5e\u6027\u548c\u65b9\u6cd5\uff0c\u6bd4\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"player.fullscreen")," \u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"Fullscreen")," \u5bf9\u8c61\uff0c\u901a\u8fc7\u5b83\u4f60\u53ef\u4ee5\u624b\u52a8\u8fdb\u5165\u548c\u9000\u51fa\u5168\u5c4f\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"player.playing")," \u5c5e\u6027\u6765\u5224\u65ad\u5f53\u524d\u65f6\u5019\u5728\u64ad\u653e\u7b49\u7b49\u3002"),(0,l.kt)("p",null,"\u66f4\u591a\u8bf7\u67e5\u770b ",(0,l.kt)("a",{parentName:"p",href:"/en/docs/api/attrs"},"API"),"\u3002"),(0,l.kt)("h2",{id:"event"},"Event"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"player")," \u6709\u4e0b\u9762 5 \u4e2a\u4e8b\u4ef6\u76f8\u5173\u7684\u65b9\u6cd5\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Method"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"on(evt: string, fn: Function)"),(0,l.kt)("td",{parentName:"tr",align:null},"Listen for events")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"once(event: string, fn: Function)"),(0,l.kt)("td",{parentName:"tr",align:null},"Listen for events, but only one callback function")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"emit(evt: string, ...args: any[])"),(0,l.kt)("td",{parentName:"tr",align:null},"Fire events")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"off(evt: string, fn?: Function)"),(0,l.kt)("td",{parentName:"tr",align:null},"Unlisten event")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"removeAllListeners(evt?: string)"),(0,l.kt)("td",{parentName:"tr",align:null},"Remove all event listens")))),(0,l.kt)("p",null,"You can use these methods to listen for built-in events or trigger custom events."),(0,l.kt)("p",null,"NPlayer \u4e8b\u4ef6\u540d\u662f\u5927\u9a7c\u5cf0\u5f62\u5f0f\u7684\u5b57\u7b26\u4e32\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import Player, { EVENT } form 'nplayer'\n\nconst player = new Player()\n\nconsole.log(EVENT.CONTROL_SHOW)\nconsole.log(Player.EVENT.CONTROL_SHOW)\nconsole.log(player.EVENT.CONTROL_SHOW)\nconsole.log('ControlShow')\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u6253\u5370\u90fd\u662f\u76f8\u540c\u7684\u5b57\u7b26\u4e32\u3002"),(0,l.kt)("p",null,"\u66f4\u591a\u8bf7\u67e5\u770b",(0,l.kt)("a",{parentName:"p",href:"/en/docs/api/events"},"\u4e8b\u4ef6"),"\u3002"),(0,l.kt)("h2",{id:"player-size-change"},"Player size change"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u5f53\u6d4f\u89c8\u5668\u5c3a\u5bf8\u53d8\u5316\u6216\u8005\u64ad\u653e\u5668\u5bb9\u5668\u5c3a\u5bf8\u53d8\u5316\u65f6\uff0c\u64ad\u653e\u5668\u53ca\u5176\u5185\u90e8\u7ec4\u4ef6\u4f1a\u81ea\u52a8\u8c03\u8282\u81ea\u8eab\u5c3a\u5bf8\u3002"),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"player")," \u5bf9\u8c61\u4e0a\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"rect")," \u5c5e\u6027\u83b7\u53d6\u64ad\u653e\u5668\u7684\u5bbd\u9ad8\u548c\u5750\u6807\uff08\u5185\u90e8\u662f\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"getBoundingClientRect")," API\uff09\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import Player from 'player'\n\nconst player = new Player()\nconsole.log(player.rect.width)\nconsole.log(player.rect.height)\nconsole.log(player.rect.x)\nconsole.log(player.rect.y)\n")),(0,l.kt)("p",null,"\u4f60\u53ef\u4ee5\u76d1\u542c ",(0,l.kt)("inlineCode",{parentName:"p"},"UpdateSize")," \u4e8b\u4ef6\u6765\u54cd\u5e94\u64ad\u653e\u5668\u5c3a\u5bf8\u53d8\u5316\u3002"),(0,l.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"NPlayer \u76d1\u542c\u81ea\u8eab\u5c3a\u5bf8\u53d8\u5316\u4f7f\u7528\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"ResizeObserver")," api\u3002\u5982\u679c\u4f60\u7684\u76ee\u6807\u6d4f\u89c8\u5668\u4e0d\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"p"},"ResizeObserver"),"\u3002\u5f53\u65f6\u64ad\u653e\u5668\u5c3a\u5bf8\u53d8\u5316\u65f6\uff0c\u8bf7\u624b\u52a8\u89e6\u53d1 ",(0,l.kt)("inlineCode",{parentName:"p"},"UpdateSize"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"player.emit('UpdateSize')")," \u6216\u8005\u5728 NPlayer \u4e4b\u524d\u5f15\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"ResizeObserver")," \u7684 polyfill\u3002"))),(0,l.kt)("h2",{id:"destroy"},"Destroy"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"player")," \u53ca\u5176\u4e2d\u7ec4\u4ef6\u90fd\u5b9e\u73b0\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"Disposable")," \u63a5\u53e3\uff0c\u4e5f\u5c31\u662f\u62e5\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"dispose")," \u65b9\u6cd5\uff0c\u8c03\u7528\u8be5\u65b9\u6cd5\u5c06\u4f1a\u9500\u6bc1\u8be5\u5bf9\u8c61\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const player = new Player()\nplayer.mount(document.body)\nsetTimeout(() => player.dispose(), 3000)\n// 3 \u79d2\u540e\u9500\u6bc1 player\n")),(0,l.kt)("h2",{id:"multi-level"},"Multi-Level"),(0,l.kt)("p",null,"NPlayer \u7531 6 \u4e2a\u4e0d\u540c\u529f\u80fd\u7684\u5c42\u7ea7\u7ec4\u6210\uff0c\u6bcf\u4e2a\u5c42\u7ea7\u6709\u81ea\u5df1\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"z-index"),"\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5c42\u7ea7"),(0,l.kt)("th",{parentName:"tr",align:null},"z-indx"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"video \u89c6\u9891\u5143\u7d20"),(0,l.kt)("td",{parentName:"tr",align:null},"-"),(0,l.kt)("td",{parentName:"tr",align:null},"\u89c6\u9891\u5143\u7d20\u6ca1\u6709\u8bbe\u7f6e z-index")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"control \u63a7\u5236\u6761"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"\u89c6\u9891\u5e95\u90e8\u63a7\u5236\u6761")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"poster \u6d77\u62a5"),(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"\u89c6\u9891\u6d77\u62a5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loading \u52a0\u8f7d\u4e2d"),(0,l.kt)("td",{parentName:"tr",align:null},"30"),(0,l.kt)("td",{parentName:"tr",align:null},"\u89c6\u9891\u52a0\u8f7d\u65f6\u51fa\u73b0\u7684\u52a0\u8f7d\u4e2d\u5143\u7d20")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"contextmenu \u53f3\u952e\u83dc\u5355"),(0,l.kt)("td",{parentName:"tr",align:null},"40"),(0,l.kt)("td",{parentName:"tr",align:null},"NPlayer \u53f3\u952e\u83dc\u5355")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"toast \u63d0\u793a\u6846"),(0,l.kt)("td",{parentName:"tr",align:null},"50"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63d0\u793a\u6846")))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"z-index")," \u9ad8\u7684\u7ec4\u4ef6\u4f1a\u8986\u76d6\u4f4e\u7684\u7ec4\u4ef6\u3002\u5f53\u8981\u5b9e\u73b0\u81ea\u5df1\u7ec4\u4ef6\u65f6\u53ef\u4ee5\u53c2\u8003\u4e0a\u8868\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"z-index"),"\uff0c\u5c06\u5b83\u653e\u5165\u5408\u9002\u5c42\u7ea7\u3002\u5982\uff0c\u5f39\u5e55\u63d2\u4ef6\u9ed8\u8ba4\u5c42\u7ea7 ",(0,l.kt)("inlineCode",{parentName:"p"},"z-index")," \u662f 5\uff0c\u90a3\u5b83\u5c06\u51fa\u73b0\u5728 control \u4e0b\u65b9\uff0cvideo \u5143\u7d20\u4e0a\u65b9\u3002"),(0,l.kt)("h2",{id:"responsive-layout"},"Responsive layout"),(0,l.kt)("p",null,"NPlayer \u4e00\u5171\u6709\u4e09\u4e2a\u63a7\u5236\u6761\uff0c\u5e95\u90e8\u4e24\u4e2a\uff0c\u9876\u90e8\u4e00\u4e2a\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"NPlayer control",src:n(2705).Z})),(0,l.kt)("p",null,"\u4e3a\u4e86\u770b\u6e05 3 \u4e2a\u63a7\u5236\u6761\uff0c\u8fd9\u91cc\u518d\u7ed9\u6bcf\u4e2a\u63a7\u5236\u6761\u52a0\u4e86\u4e2a\u80cc\u666f\u8272\uff0c\u9ed8\u8ba4\u662f\u6ca1\u6709\u7684\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"new Player({\n  controls: [\n    ['play', 'volume', 'time', 'spacer', 'web-fullscreen', 'fullscreen'],\n    ['progress'],\n    ['spacer', 'settings']\n  ]\n}).mount(document.body)\n")),(0,l.kt)("p",null,"\u8fd9\u4e2a\u5e03\u5c40\u662f\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"controls")," \u53c2\u6570\u914d\u7f6e\u7684\u3002\u5b83\u662f\u4e00\u4e2a\u4e8c\u7ef4\u6570\u7ec4\uff0c\u4e0b\u6807 ",(0,l.kt)("inlineCode",{parentName:"p"},"0")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"1")," \u662f\u4e0b\u65b9\u7684\u4e24\u4e2a\u63a7\u5236\u6761\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"2")," \u662f\u9876\u90e8\u7684\u63a7\u5236\u6761\u3002"),(0,l.kt)("p",null,"\u8be6\u60c5\u8bf7\u67e5\u770b",(0,l.kt)("a",{parentName:"p",href:"/en/docs/control"},"\u63a7\u5236\u6761\u7ae0\u8282"),"\u3002"),(0,l.kt)("p",null,"NPlayer \u8fd8\u63d0\u4f9b\u4e86\u4e24\u5957\u4ea4\u4e92\uff0c\u89e6\u5c4f\u4ea4\u4e92\u548c\u952e\u9f20\u4ea4\u4e92\uff0c\u8be6\u60c5\u8bf7\u67e5\u770b",(0,l.kt)("a",{parentName:"p",href:"/en/docs/responsive"},"\u54cd\u5e94\u5f0f/\u591a\u8bbe\u5907\u7ae0\u8282"),"\u3002"),(0,l.kt)("h2",{id:"update-options"},"Update options"),(0,l.kt)("p",null,"NPlayer \u51e0\u4e4e\u6240\u6709\u90e8\u5206\u90fd\u53ef\u4ee5\u914d\u7f6e\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u4e3b\u9898\uff0c\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"li",href:"/en/docs/theme"},"\u4e3b\u9898\u7ae0\u8282"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u3001\u79fb\u9664\u63a7\u5236\u6761\u9879\u76ee\u6216\u6539\u53d8\u987a\u5e8f\uff0c\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"li",href:"/en/docs/control"},"\u63a7\u5236\u6761\u7ae0\u8282"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u3001\u79fb\u9664\u63a7\u5236\u6761\u8bbe\u7f6e\u9879\u76ee\u6216\u6539\u53d8\u987a\u5e8f\uff0c\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"li",href:"/en/docs/settings"},"\u8bbe\u7f6e\u83dc\u5355\u7ae0\u8282"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u3001\u79fb\u9664\u53f3\u952e\u83dc\u5355\u9879\u76ee\u6216\u6539\u53d8\u987a\u5e8f\uff0c\u8bf7\u53c2\u8003 ",(0,l.kt)("a",{parentName:"li",href:"/en/docs/contextmenu"},"\u53f3\u952e\u7ae0\u8282"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u66f4\u591a\u8bf7\u76f4\u63a5\u7684\u70b9\u51fb\u4fa7\u8fb9\u680f\u5bf9\u5e94\u7ae0\u8282\u3002")),(0,l.kt)("p",null,"\u5f53\u4f60\u5b9e\u4f8b\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"player")," \u5bf9\u8c61\u540e\uff0c\u60f3\u4fee\u6539\u5b83\u7684\u914d\u7f6e\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"updateOptions(\u65b0\u7684\u914d\u7f6e)")," \u65b9\u6cd5\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"player.updateOptions({\n  poster: 'new_url',\n  thumbnail: {\n    images: ['new_url']\n  }\n})\n")),(0,l.kt)("p",null,"\u4e0a\u9762\u8fd9\u4e2a\u4f8b\u5b50\u662f\u4f7f\u7528\u5b83\u6765\u66f4\u65b0\u6d77\u62a5\u548c\u9884\u89c8\u7f29\u7565\u56fe\u3002"),(0,l.kt)("p",null,"\u4f60\u8fd8\u53ef\u4ee5\u76d1\u542c ",(0,l.kt)("inlineCode",{parentName:"p"},"UpdateOptions")," \u4e8b\u4ef6\u6765\u505a\u51fa\u53d8\u66f4\uff0c\u5982\uff0c\u5728\u81ea\u5b9a\u4e49\u63d2\u4ef6\u4e2d\u53ef\u4ee5\u8fd9\u6837\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const Plugin = {\n  apply(player) {\n    player.on('UpdateOptions', () => this.update(player.opts))\n  }\n}\n")),(0,l.kt)("p",null,"\u4f46\u5e76\u4e0d\u662f\u6240\u6709\u914d\u7f6e\u9879\u90fd\u4f1a\u505a\u51fa\u5bf9\u5e94\u4fee\u6539\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"settings"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"contextMenus")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"controls")," \u53d8\u5316\u5e76\u4e0d\u4f1a\u505a\u51fa\u5bf9\u5e94\u4fee\u6539\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u66f4\u65b0\u63a7\u5236\u6761\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"updateControlItems")," \u65b9\u6cd5\u3002\u8be6\u60c5\u8bf7\u67e5\u770b",(0,l.kt)("a",{parentName:"p",href:"/en/docs/control"},"\u63a7\u5236\u6761\u7ae0\u8282"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"player.updateControlItems(['spacer', 'settings'], 2)\n")),(0,l.kt)("h2",{id:"toast"},"Toast"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u7ed9\u5f39\u51fa\u4e00\u4e2a\u63d0\u793a\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"player.toast"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const player = new Player()\nplayer.toast.show('\u63d0\u793a~', 'left-top', 1000)\n")),(0,l.kt)("p",null,"\u5728\u64ad\u653e\u5668\u5de6\u4e0a\u65b9\u5f39\u51fa\u4e00\u4e2a\u663e\u793a 1 \u79d2\u7684\u63d0\u793a\u3002Toast \u8be6\u60c5\u8bf7\u67e5\u770b API \u90e8\u5206\u6587\u6863\u3002"),(0,l.kt)("h2",{id:"built-in-component"},"Built-in Component"),(0,l.kt)("p",null,"Player \u63d0\u4f9b\u4e86\u4e00\u4e9b\u5185\u7f6e\u7ec4\u4ef6\u6765\u65b9\u4fbf\u4e8c\u6b21\u5f00\u53d1\u548c\u7edf\u4e00\u4ea4\u4e92\u3002\u6bd4\u5982\u63a7\u5236\u6761\u9879\u76ee\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Tooltip")," \u7ec4\u4ef6\uff0c\u8fdb\u5ea6\u6761 ",(0,l.kt)("inlineCode",{parentName:"p"},"Slider")," \u7ec4\u4ef6\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Checkout")," \u9009\u62e9\u6846\u7ec4\u4ef6\u7b49\u7b49\u3002"),(0,l.kt)("p",null,"\u8bf7\u67e5\u770b",(0,l.kt)("a",{parentName:"p",href:"/en/docs/api/components"},"\u5185\u7f6e\u7ec4\u4ef6\u7ae0\u8282")," \u4e86\u89e3\u66f4\u591a\u3002"),(0,l.kt)("h2",{id:"question--new-feature"},"Question & New Feature"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u9047\u5230 BUG \u6216\u8005\u662f\u60f3\u8981\u65b0\u529f\u80fd\uff0c\u6b22\u8fce\u63d0\u4ea4 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/woopen/nplayer/issues/new/choose"},"issue"),"\u3002"),(0,l.kt)("h2",{id:"\u63a8\u8350\u6587\u7ae0"},"\u63a8\u8350\u6587\u7ae0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6953803485636722702"},"NPlayer \u652f\u6301\u4efb\u4f55\u6d41\u5a92\u4f53\u548c B \u7ad9\u5f39\u5e55\u4f53\u9a8c\u7684\u89c6\u9891\u64ad\u653e\u5668")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6953429334937829384"},"\u4ece\u96f6\u5f00\u53d1\u5f39\u5e55\u89c6\u9891\u64ad\u653e\u56681")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6953777965838630926"},"\u6d41\u5a92\u4f53\u89c6\u9891\u57fa\u7840 MSE \u5165\u95e8 & FFmpeg \u5236\u4f5c\u89c6\u9891\u9884\u89c8\u7f29\u7565\u56fe\u548c fmp4")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6954761121727250439"},"\u539f\u6765\u7231\u4f18\u817e\u7b49\u89c6\u9891\u7f51\u7ad9\u90fd\u662f\u7528\u8fd9\u4e2a\u6765\u64ad\u653e\u6d41\u5a92\u4f53\u7684")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6955287754670342174"},"\u5982\u4f55\u4fdd\u62a4\u4f1a\u5458\u6216\u4ed8\u8d39\u89c6\u9891\uff1f\u4f18\u9177\u662f\u600e\u4e48\u505a\u7684\uff1f - HLS \u6d41\u5a92\u4f53\u52a0\u5bc6"))))}d.isMDXComponent=!0},2705:function(e,t,n){"use strict";t.Z=n.p+"assets/images/control-c48b926821fcd534cb1c0efabee37c99.jpg"},5784:function(e,t,n){"use strict";t.Z=n.p+"assets/images/preview-988d2ea07a6eab17594a01a3ffbc7b04.jpg"}}]);