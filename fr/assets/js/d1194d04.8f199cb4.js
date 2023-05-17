"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[3735],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6853:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={title:"Import",sidebar_position:4,slug:"/import"},a=void 0,l={unversionedId:"Build/import",id:"Build/import",title:"Import",description:"In contrast to the Export feature, Import feature is useful when you would like to import the Design or Features Configuration (.json or env.dart files) in your local into the builder to continue editing.",source:"@site/docs/Build/import.md",sourceDirName:"Build",slug:"/import",permalink:"/fluxbuilder-docs-customer/fr/import",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Import",sidebar_position:4,slug:"/import"},sidebar:"tutorialSidebar",previous:{title:"Export",permalink:"/fluxbuilder-docs-customer/fr/export"},next:{title:"Update App Without Re-Publishing",permalink:"/fluxbuilder-docs-customer/fr/update-without-re-publishing"}},u={},p=[{value:"1. Import .json file",id:"9ed77a0875de40208deb4788ebd0be07",level:2},{value:"2. Import env.dart file",id:"eed3570f62e74db4bf32731a6c38e1b6",level:2}],s={toc:p};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In contrast to the ",(0,o.kt)("strong",{parentName:"p"},"Export")," feature, Import feature is useful when you would like to import the Design or Features Configuration (.json or env.dart files) in your local into the builder to continue editing."),(0,o.kt)("h2",{id:"9ed77a0875de40208deb4788ebd0be07"},"1. Import .json file"),(0,o.kt)("p",null,"To change your app design (",(0,o.kt)("inlineCode",{parentName:"p"},".json"),"\xa0files), import it into the Builder to continue customizing."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1"),": Select Features ",">"," Import Data ",">"," Open Design File ",">"," select your .json file (e.g. config_en.json) ",">"," UPDATE:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8002).Z,width:"1544",height:"970"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2"),": Select the language of design:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To customize English design \u2192 import\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"config_"),(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"en")),(0,o.kt)("inlineCode",{parentName:"li"},".json")," set default language to English"),(0,o.kt)("li",{parentName:"ul"},"To customize Arabic design \u2192 import\xa0",(0,o.kt)("inlineCode",{parentName:"li"},"config_"),(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"ar")),(0,o.kt)("inlineCode",{parentName:"li"},".json")," to set default language to Arabic"),(0,o.kt)("li",{parentName:"ul"},"(Same for other languages)")),(0,o.kt)("p",null,"Now continue customizing what you want \ud83d\ude42"),(0,o.kt)("h2",{id:"eed3570f62e74db4bf32731a6c38e1b6"},"2. Import env.dart file"),(0,o.kt)("p",null,"To change your features configuration (",(0,o.kt)("inlineCode",{parentName:"p"},"env.dart"),"\xa0file), import it into the FluxBuilder tool to continue customizing."),(0,o.kt)("p",null,"Steps: select Features ",">"," Import Data ",">"," Open Config File ",">"," refer to your env.dart file ",">"," UPDATE:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6169).Z,width:"1544",height:"970"})),(0,o.kt)("p",null,"Now continue customizing what you want \ud83d\ude42"))}c.isMDXComponent=!0},6169:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/1987133249-4d2fa43c731a0cb71df19a32986851dc.png"},8002:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/231891827-4d2fa43c731a0cb71df19a32986851dc.png"}}]);