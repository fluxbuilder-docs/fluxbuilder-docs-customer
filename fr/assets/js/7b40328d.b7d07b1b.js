"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[8366],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=n,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return r?a.createElement(k,p(p({ref:t},c),{},{components:r})):a.createElement(k,p({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var s=2;s<o;s++)p[s]=r[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5839:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={title:"Stripe",sidebar_position:28,slug:"/feature-stripe-payment"},p=void 0,i={unversionedId:"Features/feature-stripe-payment",id:"Features/feature-stripe-payment",title:"Stripe",description:"This payment is available for WooCommerce, Magento, Notion.",source:"@site/docs/Features/feature-stripe-payment.md",sourceDirName:"Features",slug:"/feature-stripe-payment",permalink:"/fluxbuilder-docs-customer/fr/feature-stripe-payment",draft:!1,tags:[],version:"current",sidebarPosition:28,frontMatter:{title:"Stripe",sidebar_position:28,slug:"/feature-stripe-payment"},sidebar:"tutorialSidebar",previous:{title:"Flutterwave Payment",permalink:"/fluxbuilder-docs-customer/fr/feature-flutter-wave"},next:{title:"Tap Payment",permalink:"/fluxbuilder-docs-customer/fr/fature-tap-payment"}},l={},s=[{value:"1. <strong>Setup Stripe Node Server</strong>",id:"ae7280f9b6c44ab69f201fdfc56cc11c",level:2},{value:"2. Configure Apple Pay",id:"fd2b875709e4442d912d1208b198a9f6",level:2},{value:"3. Configure Google Pay",id:"72ff1cb740534e77bf0e7ca9fce2e9fc",level:2},{value:"4. Common Issues",id:"6c709d5530fc49a9a835a4418e6e400b",level:2}],c={toc:s};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"This payment is available for WooCommerce, Magento, Notion.")),(0,n.kt)("p",null,"This guide shows you how to install the Stripe Payment, Apple Pay, and Google Pay. You also can use Apple Pay and Google Pay on Stripe too."),(0,n.kt)("h2",{id:"ae7280f9b6c44ab69f201fdfc56cc11c"},"1. ",(0,n.kt)("strong",{parentName:"h2"},"Setup Stripe Node Server")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"If you are using StripeServerNode-v2, update it to the latest StripeServerNode-v3.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Contact us to download the Stripe Server NodeJS project."),(0,n.kt)("li",{parentName:"ol"},"Open\xa0",(0,n.kt)("inlineCode",{parentName:"li"},"index.js"),"\xa0in the Stripe server project folder, then: ")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Set your Stripe Secret key to\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"stripeSecretKey"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Set your returnURL to\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"websiteUrl"),"\xa0in index.js (for Stripe v1 only)."),(0,n.kt)("p",{parentName:"li"},"After handling 3D Secure, Stripe will redirect back to the app using\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"websiteUrl"),"."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"`websiteUrl`\xa0should be in this format:\xa0_<yourappname>://<yourwebsite.domain>_\xa0\n\n\n(Example:\xa0_fluxstore://inspireui.com_).\n\n\n:::tip\n\n**IMPORTANT: This requires App Links/Custom URL Schemes\xa0to be configured**. Please scroll down to the bottom to see the guide for configuring App Links/Custom URL Schemes.\n\n:::\n\n\n\n\n![](/notion_imgs/231171730.png)\n")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Upload your server project to a new\xa0",(0,n.kt)("strong",{parentName:"p"},"PRIVATE"),"\xa0GitHub/GitLab repository."),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Deploy your server using\xa0",(0,n.kt)("a",{parentName:"li",href:"https://vercel.com/import/git"},"Vercel"),".\nFollow their guide to setup\xa0",(0,n.kt)("a",{parentName:"li",href:"https://vercel.com/docs/git-integrations/vercel-for-github#connecting-with-github"},"Vercel for GitHub"),"\xa0or\xa0",(0,n.kt)("a",{parentName:"li",href:"https://vercel.com/docs/git-integrations/vercel-for-gitlab#connecting-with-gitlab"},"Vercel for GitLab")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"From Vercel, copy the URL of the server domain:"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:r(6278).Z,width:"800",height:"444"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the app builder, open your app. Then select Features ",">"," Payment Methods ",">"," Stripe Payment. Replace\xa0",(0,n.kt)("inlineCode",{parentName:"p"},"https://your-stripe-server.vercel.app"),"\xa0with the copied URL:"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:r(2792).Z,width:"1034",height:"497"})))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Test:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Test API keys (publishable key & secret key) can be taken\xa0",(0,n.kt)("a",{parentName:"li",href:"https://dashboard.stripe.com/test/apikeys"},"here"),"."),(0,n.kt)("li",{parentName:"ul"},"You can use a card number\xa0",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"4242 4242 4242 4242")),"\xa0with any CVV & any future expiry date to test Stripe payment (only works with test keys)."),(0,n.kt)("li",{parentName:"ul"},"To test 3D Secure, you can use this card\xa0",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"4000 0027 6000 3184")),"\xa0or get more at Stripe's\xa0",(0,n.kt)("a",{parentName:"li",href:"https://stripe.com/docs/testing#regulatory-cards"},"documentation"),".")),(0,n.kt)("h2",{id:"fd2b875709e4442d912d1208b198a9f6"},"2. Configure Apple Pay"),(0,n.kt)("p",null,"Follow steps below:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Take a look at the\xa0",(0,n.kt)("a",{parentName:"li",href:"https://developer.apple.com/documentation/passkit/apple_pay/setting_up_apple_pay_requirements"},"integration requirements"),".")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Create a\xa0",(0,n.kt)("a",{parentName:"li",href:"https://help.apple.com/developer-account/#/devb2e62b839?sub=dev103e030bb"},"merchant identifier"),"\xa0for your business.")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Create a\xa0",(0,n.kt)("a",{parentName:"li",href:"https://help.apple.com/developer-account/#/devb2e62b839?sub=devf31990e3f"},"payment processing certificate"),"\xa0to encrypt payment information.")),(0,n.kt)("p",null,"Then upload the created payment processing certificate to your\xa0",(0,n.kt)("a",{parentName:"p",href:"https://dashboard.stripe.com/settings/payments/apple_pay"},"Stripe account"),"."),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"On the app builder, open your app. ")),(0,n.kt)("p",null,"Then select ",(0,n.kt)("strong",{parentName:"p"},"Features")," ",">"," ",(0,n.kt)("strong",{parentName:"p"},"Payment Methods")," ",">"," ",(0,n.kt)("strong",{parentName:"p"},"Stripe Payment")," ",">"," enable ",(0,n.kt)("strong",{parentName:"p"},"Stripe")," ",">"," enable ",(0,n.kt)("strong",{parentName:"p"},"Use Stripe V2")," ",">"," enable ",(0,n.kt)("strong",{parentName:"p"},"Apple Pay"),".\nAnd input ",(0,n.kt)("strong",{parentName:"p"},"Merchant Display Name, Merchant Identifier, Merchant Country Code"),":"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(238).Z,width:"1034",height:"664"})),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Release to TestFlight before testing with live keys. To test with test keys, use an iOS simulator.")),(0,n.kt)("h2",{id:"72ff1cb740534e77bf0e7ca9fce2e9fc"},"3. Configure Google Pay"),(0,n.kt)("p",null,"Follow steps below:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Take a look at the\xa0",(0,n.kt)("a",{parentName:"p",href:"https://developers.google.com/pay/api/android/overview"},"integration requirements"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Sign in to the\xa0",(0,n.kt)("a",{parentName:"p",href:"https://pay.google.com/business/console"},"business console"),"\xa0and create a business.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Fill in all business information and Request production access to the Google Pay API for your app. You can wait a few days for the validation.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the app builder, open your app."),(0,n.kt)("p",{parentName:"li"},"Then select ",(0,n.kt)("strong",{parentName:"p"},"Features")," > ",(0,n.kt)("strong",{parentName:"p"},"Payment Methods")," > ",(0,n.kt)("strong",{parentName:"p"},"Stripe Payment")," > enable ",(0,n.kt)("strong",{parentName:"p"},"Stripe")," > enable ",(0,n.kt)("strong",{parentName:"p"},"Use Stripe V2")," > enable ",(0,n.kt)("strong",{parentName:"p"},"Google Pay"),". "))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"And input **Merchant Display Name** and **Merchant Country Code**:\n\n\n![](/notion_imgs/153121063.png)\n")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Upload your app to Google Play Console (Internal testing/Closed testing track) and download it from Play Store to test.")),(0,n.kt)("h2",{id:"6c709d5530fc49a9a835a4418e6e400b"},"4. Common Issues"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\ud83d\udc8a Intent error: No such payment_intent")),(0,n.kt)("p",null,"Please check Server Endpoint URL and Publishable key in your Stripe account."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\ud83d\udc8a"),"\xa0",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"OR_BIBED_07")),"\xa0",(0,n.kt)("strong",{parentName:"p"},"error with Google pay on Android release mode")),(0,n.kt)("p",null,"Please double-check step 3 at ",(0,n.kt)("strong",{parentName:"p"},"Configure Google Pay")," section"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},'\ud83d\udc8a Always showing an error message with Apple pay on a real device: "Transaction failed. Please check the card information and try again."')),(0,n.kt)("p",null,"Please check your device has a card in your Apple wallet and make sure you have uploaded the created payment processing certificate to your Stripe account."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\ud83d\udc8a Your order does not update status after successful payment")),(0,n.kt)("p",null,"Please check the webhooks or create a ticket on the support site so we can give you the custom code"))}u.isMDXComponent=!0},6278:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/1340331367-0f77c86294e073526a0cc617188a1804.png"},238:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/2086151567-0892c38f586c9579697ceb71291d345e.png"},2792:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/712595252-472df3add53a62d5e3a0c29613049265.png"}}]);