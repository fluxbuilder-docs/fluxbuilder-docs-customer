"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[1845],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=d(n),k=i,u=m["".concat(o,".").concat(k)]||m[k]||s[k]||r;return n?a.createElement(u,p(p({ref:t},c),{},{components:n})):a.createElement(u,p({ref:t},c))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,p=new Array(r);p[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,p[1]=l;for(var d=2;d<r;d++)p[d]=n[d];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8468:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>s,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const r={title:"Create Bundle ID for iOS App",sidebar_position:0,slug:"/create-bundle-id"},p="Create Bundle Id for iOS app",l={unversionedId:"Build/create-bundle-id",id:"Build/create-bundle-id",title:"Create Bundle ID for iOS App",description:"c2cfdad5e7f44621a0ed4ddcc99e479e}",source:"@site/docs/Build/create-bundle-id.md",sourceDirName:"Build",slug:"/create-bundle-id",permalink:"/fluxbuilder-docs-customer/create-bundle-id",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Create Bundle ID for iOS App",sidebar_position:0,slug:"/create-bundle-id"},sidebar:"tutorialSidebar",previous:{title:"Shopify Payments",permalink:"/fluxbuilder-docs-customer/feature-shopify-payment"},next:{title:"Create Keystore file",permalink:"/fluxbuilder-docs-customer/create-keystore"}},o={},d=[{value:"Step 1: Create Bundle ID group",id:"31b6b911e95c4b9fa5c5233b7c57f57c",level:3},{value:"Step 2: Create Bundle ID",id:"d4019fa81a084f2eabc1342a947bf13f",level:3},{value:"Step 3: Create Bundle ID\xa0OneSignal",id:"47b68fd2594b41c697188417e2debe06",level:3}],c={toc:d};function s(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"c2cfdad5e7f44621a0ed4ddcc99e479e"},"Create Bundle Id for iOS app"),(0,i.kt)("p",null,"Windows users can create Bundle ID for the iOS app without using Mac (and Windows users also can build the iOS app with the\xa0",(0,i.kt)("strong",{parentName:"p"},"[Problem Internal Link]"),"\xa0feature). This tutorial guides to creating Bundle ID for iOS on Windows, you also can do these steps on Mac device. Please follow the steps below:"),(0,i.kt)("h3",{id:"31b6b911e95c4b9fa5c5233b7c57f57c"},"Step 1: Create Bundle ID group"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Open and login to the website:\xa0",(0,i.kt)("a",{parentName:"p",href:"https://developer.apple.com/"},"https://developer.apple.com")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(9267).Z,width:"1600",height:"725"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Login with your Developer account, then click\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Certificates, Identifiers & Profiles")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(8099).Z,width:"1422",height:"579"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Certificates, Identifiers & Profiles"),"\xa0screen, select\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Identifiers"),"\xa0, click the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"+"),"\xa0icon as below:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(4571).Z,width:"1618",height:"1050"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Select\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"App Groups"),"\xa0and click\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Continue")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(8141).Z,width:"1600",height:"1022"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Enter\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Description"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Identifier"),"\xa0as below:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(1569).Z,width:"2496",height:"664"})))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE"),":\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Identifier"),"\xa0must be set with the bundle id of the project and have the onesignal extension. E.g.: bundle id of project is\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"com.demoapp.fluxstore"),", the Identifier App group will be\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"group.com.demoapp.fluxstore.onesignal")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Click the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Continue"),", then\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Register"),"\xa0button:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(6452).Z,width:"2322",height:"500"})))),(0,i.kt)("h3",{id:"d4019fa81a084f2eabc1342a947bf13f"},"Step 2: Create Bundle ID"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Certificates, Identifiers & Profiles"),"\xa0screen, select\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Identifiers"),"\xa0, click the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"+"),"\xa0icon as below:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(4571).Z,width:"1618",height:"1050"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Select\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"App IDs"),"\xa0and click\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Continue")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(9088).Z,width:"2470",height:"692"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Select\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"App"),"\xa0and click\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Coutinue")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(9478).Z,width:"2372",height:"592"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Enter\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Description"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Bundle ID"),", select the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Explicit"),"\xa0option. In ",(0,i.kt)("strong",{parentName:"p"},"Capabilities"),", select the checkboxes below:"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"App Groups"))),(0,i.kt)("p",null,"+\xa0",(0,i.kt)("strong",{parentName:"p"},"Associated Domain")),(0,i.kt)("p",null,"+\xa0",(0,i.kt)("strong",{parentName:"p"},"Push Notifications")),(0,i.kt)("p",null,"+\xa0",(0,i.kt)("strong",{parentName:"p"},"Sign In with Apple")," (if you have used this feature)"),(0,i.kt)("p",null,"Then click ",(0,i.kt)("strong",{parentName:"p"},"Continue")," and ",(0,i.kt)("strong",{parentName:"p"},"Register"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9463).Z,width:"1900",height:"1194"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"After creating the Identifier for the project, click on the newly created identifier to access the update page:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(6729).Z,width:"2454",height:"424"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"At the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"App Groups"),"\xa0configuration, click the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Configure"),"\xa0button:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(2228).Z,width:"2130",height:"1090"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Select the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Identifier App Groups"),"\xa0created earlier, click\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Continue"),":"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(9774).Z,width:"1678",height:"1358"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Click\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Save"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Confirm")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(3405).Z,width:"2444",height:"634"})))),(0,i.kt)("h3",{id:"47b68fd2594b41c697188417e2debe06"},"Step 3: Create Bundle ID\xa0OneSignal"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"In the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Certificates, Identifiers & Profiles"),"\xa0screen, select\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Identifiers"),"\xa0, click the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"+"),"\xa0icon as below:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(4571).Z,width:"1618",height:"1050"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Select\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"App IDs"),"\xa0and click\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Continue")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(9088).Z,width:"2470",height:"692"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Select\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"App"),"\xa0and click\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Coutinue")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(9478).Z,width:"2372",height:"592"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Enter\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Description"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Bundle ID"),"\xa0of OneSignal, select the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Explicit"),"\xa0option. In Capabilities, select the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"App Groups"),"\xa0checkbox.\xa0Then click\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Continue"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Register"),":",(0,i.kt)("strong",{parentName:"p"},"NOTE"),": Bundle id Onesignal is required to be generated from the Bundle Id of the project and ends with\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"onesignal"),". E.g.: Bundle id Project is\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"com.demoapp.fluxstore"),", so Bundle id OneSginal must be\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"com.demoapp.fluxstore.onesignal")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(1711).Z,width:"2298",height:"1196"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"After creating the Identifier for the onesignal, click on the newly created identifier to access the update page:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(8681).Z,width:"2528",height:"516"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"At the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"App Groups"),"\xa0configuration, click the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Configure"),"\xa0button:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(3349).Z,width:"2328",height:"1216"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Select the\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Identifier App Groups"),"\xa0created earlier, click\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Continue"),":"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(9914).Z,width:"1606",height:"1384"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Click\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Save"),"\xa0and\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Confirm")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(7944).Z,width:"1814",height:"628"})))))}s.isMDXComponent=!0},1569:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1099850394-e0f42f28b1ba2f9352f9a385c45c2274.jpg"},8141:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1176193675-950a6ce030500c3acf3fc577771c7d04.png"},9267:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/125565897-43e429008f72e05a1cac101376cba1f7.png"},9478:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1298988542-e2642f1e14ae966adcd6fcd7eabf2642.jpg"},6729:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/149005123-d6d50d4272816cbe9b62427de59c90a8.jpg"},1711:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1917275556-6fd649e6797efe16b8b80db9b41651de.jpg"},4571:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1983981497-4ce8f370cab56d16cd883b43050cd1a7.png"},9774:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1995268380-f90accd4321569041e18f85e55ecdb1e.jpg"},2228:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/390600083-b1eb1ced48508f2f41c991049462e0f6.jpg"},9914:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/456767295-3c02fdbbc4939d8a2e9706d24d93c71c.jpg"},9088:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/608302501-13600dec89c181692536b3f93e80b89d.jpg"},3349:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/735448750-aee2fde1871e7a3e208c4b19ce4df39a.jpg"},8681:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/766988585-9d972bdc63dc840afb95b96a565c9b65.jpg"},3405:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/767815834-99b3d5eda60bf5ff267e696f87be5a8b.jpg"},9463:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/800069504-32537647b82773c931a081a8f0c1240a.jpg"},6452:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/846621086-34e35d420dd6ab8a84d342d18679a5c9.jpg"},8099:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/93185131-4c4f01385c35fef332f5a01da086aebb.png"},7944:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/947814724-e9385604d656817c821d62085d63807f.jpg"}}]);