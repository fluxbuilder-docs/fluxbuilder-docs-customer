"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[589],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),g=i,k=d["".concat(l,".").concat(g)]||d[g]||u[g]||r;return n?a.createElement(k,s(s({ref:t},c),{},{components:n})):a.createElement(k,s({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2661:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={title:"Firebase Push Notifications (FCM)",sidebar_position:1,slug:"/feature-firebase"},s=void 0,o={unversionedId:"Features/feature-firebase",id:"Features/feature-firebase",title:"Firebase Push Notifications (FCM)",description:"Push Notifications is a useful Flutter plugin. With this plugin, your Flutter app can receive and process push notifications on Android and iOS.",source:"@site/docs/Features/feature-firebase.md",sourceDirName:"Features",slug:"/feature-firebase",permalink:"/fluxbuilder-docs-customer/feature-firebase",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Firebase Push Notifications (FCM)",sidebar_position:1,slug:"/feature-firebase"},sidebar:"tutorialSidebar",previous:{title:"Firebase Settings",permalink:"/fluxbuilder-docs-customer/feature-firebase-setting"},next:{title:"Dynamic Link (Deep Link)",permalink:"/fluxbuilder-docs-customer/feature-dynamic-link"}},l={},p=[{value:"1. Push Notifications in iOSundefined",id:"a61cb9615cd24ca881b61cd51fdb88ef",level:2},{value:"2. Push Notifications on Android undefined",id:"3802ad6199d347f0a11fc15b5f9c4352",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Push Notifications is a useful Flutter plugin. With this plugin, your Flutter app can receive and process push notifications on Android and iOS."),(0,i.kt)("p",null,"This guide shows you the way to setup Firebase Cloud Messaging(FCM) to push notifications."),(0,i.kt)("p",null,"Remember to\xa0disable ",(0,i.kt)("a",{parentName:"p",href:"/feature-onesignal"},"OneSignal Push Notifications"),"\xa0if you push notifications using Firebase, by: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"- open the app on AppBuilder\n- go to **Features** > **General** > **OneSignal** >\n- turn of **Enable OneSignal** and click **Update**.\n")),(0,i.kt)("p",null,"To ask for ",(0,i.kt)("strong",{parentName:"p"},"User")," ",(0,i.kt)("strong",{parentName:"p"},"Notification Permission")," at the first time opening:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"1. Open your app on AppBuilder \u2192 **Features** \u2192 **General** \u2192 **Miscellaneous**\n2. Enable **Request Notification Permission** \u2192 **Apply** and **Save**\n")),(0,i.kt)("h2",{id:"a61cb9615cd24ca881b61cd51fdb88ef"},"1. Push Notifications in iOS",(0,i.kt)("a",{parentName:"h2",href:"https://docs.shopbuilder.app/Features/firebase-push-notification/#1-push-notifications-in-ios"},"undefined")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Precondition:")," Follow\xa0",(0,i.kt)("a",{parentName:"p",href:"/feature-firebase-setting"},"Firebase Settings"),"\xa0to create an IOS application on Firebase."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1"),": Install ",(0,i.kt)("strong",{parentName:"p"},"Cloud Messaging")," to enable push notifications on iOS. Click ",(0,i.kt)("strong",{parentName:"p"},"Cloud Messaging")," as shown:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9455).Z,width:"800",height:"416"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Installing ",(0,i.kt)("strong",{parentName:"li"},"Cloud Messaging")," requires you to upload the ",(0,i.kt)("strong",{parentName:"li"},"auth key APNs")," here")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(2737).Z,width:"800",height:"443"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To get this key, you must have an apple developer account. Visit page\xa0",(0,i.kt)("a",{parentName:"li",href:"https://developer.apple.com/"},"https://developer.apple.com"),"\xa0select\xa0",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Account")),"\xa0as shown:")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6356).Z,width:"800",height:"465"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Then choose\xa0",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Certificates, identifiers & Profiles"))),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{src:n(8099).Z,width:"1422",height:"579"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("strong",{parentName:"p"},"Keys")," on the left menu, then click the ",(0,i.kt)("strong",{parentName:"p"},"plus icon")," to add a new key:"))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note: 1 developer apple account can only create 2 keys, please consider before creating. But you can still delete them if needed.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1397).Z,width:"800",height:"467"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enter the ",(0,i.kt)("strong",{parentName:"li"},"Key Name")," and select ",(0,i.kt)("strong",{parentName:"li"},"Apple Push Notification service (APNs)")," then click\xa0",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"continue")))),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1095).Z,width:"800",height:"417"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click\xa0",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Register")))),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4476).Z,width:"800",height:"417"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click\xa0",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Download")),"\xa0to download the ",(0,i.kt)("strong",{parentName:"li"},"APNs key file"))),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4882).Z,width:"800",height:"428"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Return to the ",(0,i.kt)("strong",{parentName:"li"},"firebase console")," to update the ",(0,i.kt)("strong",{parentName:"li"},"APNs auth key"),". Click\xa0",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Upload")))),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6506).Z,width:"800",height:"418"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click the ",(0,i.kt)("strong",{parentName:"li"},"Browse")," button then select the downloaded key:")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8575).Z,width:"800",height:"416"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6009).Z,width:"800",height:"347"})),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1912).Z,width:"800",height:"446"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("strong",{parentName:"li"},"key ID")," is the back part of the downloaded key file name:")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(714).Z,width:"800",height:"445"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enter ",(0,i.kt)("strong",{parentName:"li"},"Team I"),"D, if you do not know where Team ID is coming from, please click on the question mark as shown in the picture, then click on the\xa0",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"membership tab")))),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3166).Z,width:"800",height:"443"})),(0,i.kt)("p",null,"This is ",(0,i.kt)("strong",{parentName:"p"},"Team ID"),", copy it and enter the form in firebase:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8656).Z,width:"800",height:"317"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click\xa0",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Upload")),":")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6718).Z,width:"800",height:"418"})),(0,i.kt)("p",null,"In some cases, this error will be displayed (in some cases it will not be). If this is the case, please click\xa0",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"Upload")),"\xa0again:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8442).Z,width:"800",height:"433"})),(0,i.kt)("p",null,"If the following screen appears, congratulations, you have successfully configured:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1787).Z,width:"800",height:"437"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2"),": Get Server Key"),(0,i.kt)("p",null,"Go to the following path\xa0",(0,i.kt)("a",{parentName:"p",href:"https://console.firebase.google.com/project/_/settings/cloudmessaging"},(0,i.kt)("inlineCode",{parentName:"a"},"Cloud Messaging")),"\xa0and select your Firebase Console project to get\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Server Key")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6119).Z,width:"1161",height:"517"})),(0,i.kt)("p",null,"Input your ",(0,i.kt)("strong",{parentName:"p"},"Server Key"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4067).Z,width:"1528",height:"1185"})),(0,i.kt)("p",null,"Then ",(0,i.kt)("strong",{parentName:"p"},"SEND")," a message to push notification."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Server Key taken must be the Server Key of that project."),(0,i.kt)("li",{parentName:"ul"},"Absolutely do not share Server Key.")),(0,i.kt)("h2",{id:"3802ad6199d347f0a11fc15b5f9c4352"},"2. Push Notifications on Android ",(0,i.kt)("a",{parentName:"h2",href:"https://docs.shopbuilder.app/Features/firebase-push-notification/#2-push-notifications-on-android"},"undefined")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Precondition:")," Follow\xa0",(0,i.kt)("a",{parentName:"p",href:"/feature-firebase-setting"},"Firebase Settings"),"\xa0to create an Android application on Firebase."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Steps"),": Go to the following path\xa0",(0,i.kt)("a",{parentName:"p",href:"https://console.firebase.google.com/project/_/settings/cloudmessaging"},(0,i.kt)("inlineCode",{parentName:"a"},"Cloud Messaging")),"\xa0and select your Firebase Console project to get\xa0",(0,i.kt)("inlineCode",{parentName:"p"},"Server Key")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6119).Z,width:"1161",height:"517"})),(0,i.kt)("p",null,"Input your ",(0,i.kt)("strong",{parentName:"p"},"Server Key"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(4067).Z,width:"1528",height:"1185"})),(0,i.kt)("p",null,"Then ",(0,i.kt)("strong",{parentName:"p"},"SEND")," a message to push notification."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Server Key taken must be the Server Key of that project."),(0,i.kt)("li",{parentName:"ul"},"Absolutely do not share Server Key.")))}u.isMDXComponent=!0},9455:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1204179321-d030febf1e4661546760ec906844b351.png"},1397:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1333664560-fe073d08b217b55363a6c855141273dc.png"},6506:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1438717906-a2661b5b86cfe0101006baeb33b79b23.png"},1095:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1451342958-5738819a399ee4296e140b9439b39d43.png"},4067:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1601509898-bd845cc57c11f72c651cff4c89c84371.png"},6009:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1835630189-fba1c7d17991f8b40a7411be7878d313.jpg"},3166:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1847783403-429e5ee5a0eaea9045391afe03c78029.png"},8575:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/188878077-347559d1e879d3dfca4219b83cded421.jpg"},6718:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1925511156-130b68623b8608f4d8952e060dd926dd.png"},6119:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2015000563-16c37c4b34e1e5f6c22544acceffa87b.png"},714:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2083487332-0d8eea7b63aa470e428cd7557df05f66.png"},2737:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2086136979-6fe7eb9fec994431f3ef1327b1df1dc3.png"},6356:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/392267143-58313e11d57e82a240b3a25aa765408b.png"},4882:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/532191281-9d27b456ca91b6aaf44b0320979fda36.png"},1912:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/582561483-ce3a616ae462591add1b273663543dc5.jpg"},4476:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/616203041-1490f4e5b92a86898296341052e9bad8.png"},1787:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/738903088-8c0d7f47f04144e3cca477bab40fa6e4.png"},8656:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/842877430-4454a2bbf39f50f878f12c3f49cc6308.png"},8099:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/93185131-4c4f01385c35fef332f5a01da086aebb.png"},8442:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/937246135-ebcfe8df68b39f27d42dfb38467fb2b8.png"}}]);