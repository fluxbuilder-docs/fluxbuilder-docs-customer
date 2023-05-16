"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[9350],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9255:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={title:"Dynamic Link (Deep Link)",sidebar_position:2,slug:"/feature-dynamic-link"},o=void 0,p={unversionedId:"Features/feature-dynamic-link",id:"Features/feature-dynamic-link",title:"Dynamic Link (Deep Link)",description:"This section shows how to configure the Deep Links using Firebase Dynamic Link. It is available for sharing App, a specify Product, Notification, Tag.",source:"@site/docs/Features/feature-dynamic-link.md",sourceDirName:"Features",slug:"/feature-dynamic-link",permalink:"/feature-dynamic-link",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Dynamic Link (Deep Link)",sidebar_position:2,slug:"/feature-dynamic-link"},sidebar:"tutorialSidebar",previous:{title:"Firebase Push Notifications (FCM)",permalink:"/feature-firebase"},next:{title:"Firebase Remote Config",permalink:"/feature-firebase-remote"}},s={},l=[{value:"1. Preconditions",id:"c738e7660e104a8d816752d29f7957d2",level:2},{value:"2. URL Prefix",id:"a7af2cd78db84213819327a0d9f3e3b5",level:2},{value:"3. For iOS app",id:"0f23782628c2404c81afa025c806acb6",level:2},{value:"4. Execute the Dynamic Link feature",id:"02ea7dc1de18422bbd6712149a2fdc91",level:2},{value:"5. Share a Product",id:"0b697a2606d14b409316144b5d32317f",level:2},{value:"6. Share Tag",id:"96306537045f4715a4c4b187b494b9ba",level:2},{value:"7. Dynamic link for Notification",id:"94a185d41b11450fac13b1eef404257d",level:2}],c={toc:l};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section shows how to configure the Deep Links using Firebase Dynamic Link. It is available for sharing App, a specify Product, Notification, Tag."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How does Firebase Dynamic Link work?")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7201).Z,width:"597",height:"255"})),(0,r.kt)("h2",{id:"c738e7660e104a8d816752d29f7957d2"},"1. Preconditions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Your app must be successfully connected with Firebase following\xa0",(0,r.kt)("a",{parentName:"li",href:"/feature-firebase-setting"},"this guide"),"."),(0,r.kt)("li",{parentName:"ul"},"Your app must be released on ",(0,r.kt)("strong",{parentName:"li"},"Google Play")," and ",(0,r.kt)("strong",{parentName:"li"},"App Store"),".")),(0,r.kt)("h2",{id:"a7af2cd78db84213819327a0d9f3e3b5"},"2. URL Prefix"),(0,r.kt)("p",null,"This step guides to configure the ",(0,r.kt)("strong",{parentName:"p"},"URL Prefix")," as below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"Firebase console")," and select your Firebase project."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(7121).Z,width:"2794",height:"1118"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In ",(0,r.kt)("strong",{parentName:"p"},"Dynamic Links")," screen, click on\xa0",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Get Started")),"\xa0button if this is your first time working with ",(0,r.kt)("strong",{parentName:"p"},"Firebase Dynamic Link"),". Otherwise, click on the current existing URL Prefix dropdown button, and click on\xa0",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"add URL prefix"))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(3193).Z,width:"496",height:"228"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Type the domain name you want to use for your Dynamic Links. You can use the domain you own (for example,\xa0",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"yourdomain.com")),"\xa0or\xa0",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"app.yourdomain.com")),"), or a free Google-provided domain (for example,\xa0",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"yourapp.page.link")),").")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Finish the following steps: ",(0,r.kt)("strong",{parentName:"p"},"Configure"),", ",(0,r.kt)("strong",{parentName:"p"},"Verify")," and ",(0,r.kt)("strong",{parentName:"p"},"Finish")," to get ",(0,r.kt)("strong",{parentName:"p"},"URL prefix"),"."))),(0,r.kt)("h2",{id:"0f23782628c2404c81afa025c806acb6"},"3. For iOS app"),(0,r.kt)("p",null,"If you need the iOS app, follow this guide to configure more:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Open your firebase project console, click the ",(0,r.kt)("strong",{parentName:"p"},"gear")," icon in the upper left corner and select\xa0",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Project settings")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In general tab, click on your project on iOS apps list, then edit your\xa0",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"App Store ID")),". You can find your ",(0,r.kt)("strong",{parentName:"p"},"App Store ID")," in your ",(0,r.kt)("strong",{parentName:"p"},"app\u2019s URL"),". In the example below,\xa0",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"1469772800")),"\xa0is the ",(0,r.kt)("strong",{parentName:"p"},"App Store ID")," at\xa0",(0,r.kt)("a",{parentName:"p",href:"https://itunes.apple.com/us/app/yourapp/id1469772800"},"https://itunes.apple.com/us/app/yourapp/id1469772800")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:n(5054).Z,width:"800",height:"736"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"There are still some extra configurations that need to be done in ",(0,r.kt)("strong",{parentName:"p"},"Xcod"),"e. Open your app in ",(0,r.kt)("strong",{parentName:"p"},"Xcode"),", under\xa0",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Signing & Capabilities")),"\xa0tab, add a new ",(0,r.kt)("strong",{parentName:"p"},"URL domain")," that you have already created in the previous step. Your domain would look like this:\xa0",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"applinks:your-url-prefix")),"."))),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6694).Z,width:"1734",height:"1050"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Under\xa0",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Info")),"\xa0tab, add a new URL type that includes an ",(0,r.kt)("strong",{parentName:"li"},"identifier")," and a ",(0,r.kt)("strong",{parentName:"li"},"URL Schemes"),". Your ",(0,r.kt)("strong",{parentName:"li"},"identifier")," needs to be unique, and ",(0,r.kt)("strong",{parentName:"li"},"URL Schemes")," are your bundle ID.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5469).Z,width:"1730",height:"1414"})),(0,r.kt)("h2",{id:"02ea7dc1de18422bbd6712149a2fdc91"},"4. Execute the Dynamic Link feature"),(0,r.kt)("p",null,"Update the information as the image below, then ",(0,r.kt)("strong",{parentName:"p"},"you can share your App:")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(9999).Z,width:"1033",height:"547"})),(0,r.kt)("h2",{id:"0b697a2606d14b409316144b5d32317f"},"5. Share a Product"),(0,r.kt)("p",null,"This step guides to share a specific product with ",(0,r.kt)("strong",{parentName:"p"},"Firebase Dynamic Link"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Make sure you have done from step 1 to step 4."),(0,r.kt)("li",{parentName:"ul"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Admin Dashboard")," ",">"," ",(0,r.kt)("strong",{parentName:"li"},"Settings")," ",">"," ",(0,r.kt)("strong",{parentName:"li"},"Permalinks"),". At ",(0,r.kt)("strong",{parentName:"li"},"Product permalinks"),", edit ",(0,r.kt)("strong",{parentName:"li"},"Custom base"),":\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"/product/"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7592).Z,width:"1552",height:"168"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You now can get ",(0,r.kt)("strong",{parentName:"li"},"Dynamic Link")," by click on ",(0,r.kt)("strong",{parentName:"li"},"Share button")," on a product detail screen on the app.")),(0,r.kt)("h2",{id:"96306537045f4715a4c4b187b494b9ba"},"6. Share Tag"),(0,r.kt)("p",null,"Users can share a list of products with the same ",(0,r.kt)("strong",{parentName:"p"},"Tag"),". When users open the link, the App will be launched and show all products under that ",(0,r.kt)("strong",{parentName:"p"},"Tag"),"."),(0,r.kt)("h2",{id:"94a185d41b11450fac13b1eef404257d"},"7. Dynamic link for Notification"),(0,r.kt)("p",null,"The feature allows sending a Notification with the Product URL or a specific page. When users open Notification, App is launched with that product/page."),(0,r.kt)("p",null,"To make the feature work, go to the\xa0",(0,r.kt)("strong",{parentName:"p"},"Cloud Messaging"),"\xa0from\xa0",(0,r.kt)("strong",{parentName:"p"},"Firebase Console"),", and\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Send your first message"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2209).Z,width:"2136",height:"1006"})),(0,r.kt)("p",null,"Then, on the\xa0",(0,r.kt)("strong",{parentName:"p"},"Compose Notification"),"\xa0screen, fill in the necessary information in all steps\xa0",(0,r.kt)("strong",{parentName:"p"},"Information"),",\xa0",(0,r.kt)("strong",{parentName:"p"},"Target"),",\xa0",(0,r.kt)("strong",{parentName:"p"},"Scheduling"),",\xa0",(0,r.kt)("strong",{parentName:"p"},"Conversion"),"\xa0",(0,r.kt)("strong",{parentName:"p"},"events"),"\xa0",(0,r.kt)("strong",{parentName:"p"},"(optional)"),", and\xa0",(0,r.kt)("strong",{parentName:"p"},"Additional options (optional)"),"."),(0,r.kt)("p",null,"In step 4 -\xa0",(0,r.kt)("strong",{parentName:"p"},"Additional options (optional)"),"\xa0- you will add a\xa0",(0,r.kt)("strong",{parentName:"p"},"Key-Value"),"\xa0for the\xa0",(0,r.kt)("strong",{parentName:"p"},"Custom Data"),", fill\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"dynamic_link"),"\xa0for\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Key"),"\xa0and the Product URL for\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"Value"),"."))}d.isMDXComponent=!0},5469:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1304183120-21166b34e568f2bafd161cd35951f7a4.png"},7121:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1736992664-7f0de6a5201b1fa26831b16b8fe33365.png"},9999:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1789074426-c592db3069b24128f18b599b4bcce6ad.png"},7201:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1801216226-1f91db280a17dddee64610370aa3fa43.png"},5054:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/334260390-c8befa35bee59d1bac2a0cef96fb336c.png"},6694:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/365624616-81df757f28fadcee49320eff2d5d84e2.png"},2209:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/672952907-5801c9ec43069049d2330e3d051cbdf7.png"},7592:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/733587236-11fe00afbd3cc4abcca972d04ce9b8dc.jpg"},3193:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);