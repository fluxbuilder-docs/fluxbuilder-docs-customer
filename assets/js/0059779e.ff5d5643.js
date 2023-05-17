"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[6268],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(a),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1955:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const i={title:"Firebase Remote Config",sidebar_position:3,slug:"/feature-firebase-remote"},o=void 0,p={unversionedId:"Features/feature-firebase-remote",id:"Features/feature-firebase-remote",title:"Firebase Remote Config",description:"After publishing your Apps to App Stores, sometimes you need to update the **Features** of your apps. This guide shows you the way to change the app Features without re-publishing to Apple Store and Google Play, which is very convenient, right?",source:"@site/docs/Features/feature-firebase-remote.md",sourceDirName:"Features",slug:"/feature-firebase-remote",permalink:"/fluxbuilder-docs-customer/feature-firebase-remote",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Firebase Remote Config",sidebar_position:3,slug:"/feature-firebase-remote"},sidebar:"tutorialSidebar",previous:{title:"Dynamic Link (Deep Link)",permalink:"/fluxbuilder-docs-customer/feature-dynamic-link"},next:{title:"Firebase Analytics",permalink:"/fluxbuilder-docs-customer/feature-firebase-analytic"}},s={},l=[{value:"1. Create a new private key",id:"fd3de3b7aa3f44bda8a42c583c7ba2ad",level:2},{value:"2. Execute the Firebase Remote Config",id:"872816243278485299ec32f4a4d787d5",level:2}],c={toc:l};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"After publishing your Apps to App Stores, sometimes you need to ",(0,r.kt)("em",{parentName:"p"},"update the")," ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Features"))," ",(0,r.kt)("em",{parentName:"p"},"of your apps"),". This guide shows you the way to ",(0,r.kt)("em",{parentName:"p"},"change the app Features without re-publishing to Apple Store and Google Play"),", which is very convenient, right?"),(0,r.kt)("h2",{id:"fd3de3b7aa3f44bda8a42c583c7ba2ad"},"1. Create a new private key"),(0,r.kt)("p",null,"This step helps to generate a new private key to use for configuring updates to Firebase Remote Config."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Precondition"),": refer to\xa0",(0,r.kt)("a",{parentName:"p",href:"/feature-firebase-setting"},"Firebase Settings")," to create your application on Firebase."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1"),": open firebase console your project\xa0",(0,r.kt)("a",{parentName:"p",href:"https://console.firebase.google.com/"},"https://console.firebase.google.com/")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Select the gear icon, then select\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Project settings"),":"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(1434).Z,width:"515",height:"289"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Select the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Service accounts"),"\xa0tab:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(195).Z,width:"1485",height:"800"})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2"),": Add role \u201cFirebase Remote Config Admin\u201d:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Manage service account permissions"),":"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(3679).Z,width:"1562",height:"836"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Open\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"IAM"),":"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(6968).Z,width:"1101",height:"573"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Find a\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Name"),"\xa0that matches the member name in the ",(0,r.kt)("strong",{parentName:"p"},"Firebase Console"),":"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(6284).Z,width:"1631",height:"679"})))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"![](/notion_imgs/100879811.png)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click the ",(0,r.kt)("strong",{parentName:"p"},"edit icon"),":"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(3138).Z,width:"1329",height:"571"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add new ",(0,r.kt)("strong",{parentName:"p"},"Role")," with Role is\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Firebase Remote Config Admin"),":"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(6542).Z,width:"860",height:"1174"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"SAVE"),"\xa0button."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3"),": Now we go back to the firebase console to download the key by clicking the ",(0,r.kt)("strong",{parentName:"p"},"Generate new private key")," button:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(8893).Z,width:"1540",height:"813"})),(0,r.kt)("h2",{id:"872816243278485299ec32f4a4d787d5"},"2. Execute the Firebase Remote Config"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Remember")," to sync the latest settings with Firebase whenever you make changes. Some features on the app will not change if you have enabled Firebase Remote config and attempt to update the local env.dart file.")),(0,r.kt)("p",null,"Go to\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Features"),",\xa0select\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Firebase Remote Config"),", enable the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Firebase Remote Config"),", refer to the\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Firebase remote config.json"),"\xa0file which is the downloaded key file in Step 3:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(887).Z,width:"1037",height:"560"})),(0,r.kt)("p",null,"The system will load to see if your project has configs. If it is a new project you will not be able to choose the version. Otherwise, you will have 2 options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"ADD NEW VERSION"),"\xa0to create the latest config."),(0,r.kt)("li",{parentName:"ul"},"Select the version and click\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"LOAD VERSION"),"\xa0to reload the old version.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(7460).Z,width:"674",height:"919"})),(0,r.kt)("p",null,"Finally, click the button\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Update"),"\xa0in the upper right corner to update data. Now when you build your app, the features of your app will follow the Remote Config on Firebase, so whenever you want to change the features, just need to\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"UPDATE"),"\xa0here."))}u.isMDXComponent=!0},6542:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1218473225-1a053e3beefbe40b0b1da3614ccc8154.jpg"},8893:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1241488372-08efdeb73209818656a9468303e0e65d.png"},6284:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1326157997-ef447bbbbc86c11884f0c82ebe332e6c.png"},1434:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1594247546-5a6719c81e1b6c7bc24ac3e402efcd47.png"},3679:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1608590217-3ebf252b6c2a3e0ad3c8d85e281cea1e.png"},6968:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/179660169-60efd9e6e93c57ea033af46d962a686e.png"},3138:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/781286702-f7b960fffe886dac3821932a951aefb1.png"},195:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/793902360-7f411874dfcea25d60594e4dd11bbb7c.png"},7460:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/891596496-d84e4173e19d6b36b0324b449d52c8fc.png"},887:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/9972149-e4306aa2881a2108699d8df7d8768a43.png"}}]);