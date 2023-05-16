"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[8934],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)a=p[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,p=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(a),m=r,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||p;return a?n.createElement(k,o(o({ref:t},d),{},{components:a})):n.createElement(k,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=a.length,o=new Array(p);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<p;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8390:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>i,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const p={title:"Shopify Payments",sidebar_position:33,slug:"/feature-shopify-payment"},o=void 0,i={unversionedId:"Features/feature-shopify-payment",id:"Features/feature-shopify-payment",title:"Shopify Payments",description:"This guide is used for Shopify only, including:",source:"@site/docs/Features/feature-shopify-payment.md",sourceDirName:"Features",slug:"/feature-shopify-payment",permalink:"/fr/feature-shopify-payment",draft:!1,tags:[],version:"current",sidebarPosition:33,frontMatter:{title:"Shopify Payments",sidebar_position:33,slug:"/feature-shopify-payment"},sidebar:"tutorialSidebar",previous:{title:"Midtrans Payment",permalink:"/fr/feature-midtrans"},next:{title:"Create Bundle ID for iOS App",permalink:"/fr/create-bundle-id"}},s={},l=[{value:"Prerequisites",id:"380ef2eec34d4ee3a18a5dd80095487a",level:2},{value:"1. Apple Pay",id:"1cff4400edf24035ba8895e88e6baa71",level:2},{value:"2. Google Pay",id:"eb2c553d76b74eb380d2c0157f117956",level:2},{value:"3. Stripe",id:"204e96e931b34001988528d2cd52f30b",level:2},{value:"5. <strong>Test</strong>",id:"181615f001b9480c8cacb069c95ee8c6",level:2}],d={toc:l};function c(e){let{components:t,...p}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,":::\ud83c\udf08"),(0,r.kt)("p",null,"This guide is used for Shopify only, including:"),(0,r.kt)("p",null,":::"),(0,r.kt)("h2",{id:"380ef2eec34d4ee3a18a5dd80095487a"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To use ApplePay, GooglePay, and Stripe Card, please ensure that Stripe has been successfully connected to your website as shown below:")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Please make sure your country supports ApplePay, you can double-check here:\xa0",(0,r.kt)("a",{parentName:"p",href:"https://help.shopify.com/en/manual/payments/accelerated-checkouts/apple-pay"},"https://help.shopify.com/en/manual/payments/accelerated-checkouts/apple-pay"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Please make sure you have set up the App to get Storefront Access Token before"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(1427).Z,width:"2000",height:"1435"})))),(0,r.kt)("h2",{id:"1cff4400edf24035ba8895e88e6baa71"},"1. Apple Pay"),(0,r.kt)("p",null,"1.1 Go to your app and ",(0,r.kt)("strong",{parentName:"p"},"Edit"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(1340).Z,width:"2000",height:"1168"})),(0,r.kt)("p",null,"1.2 Scroll to the end of the page and download the ",(0,r.kt)("strong",{parentName:"p"},"Certificate.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(2035).Z,width:"2000",height:"2207"})),(0,r.kt)("p",null,"1.3 Go to"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://support.inspireui.com/help-center/articles/50/57/8/app-installation#2-manual-guide"},"https://developer.apple.com/account/resources/certificates/list"),", select",(0,r.kt)("strong",{parentName:"p"},"Apple Pay Payment Processing Certificate,")," and click ",(0,r.kt)("strong",{parentName:"p"},"Continue"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(6464).Z,width:"2000",height:"393"})),(0,r.kt)("p",null,"1.4 Select the Merchant Identifier of your app and click Continue. "),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(4519).Z,width:"1090",height:"306"})),(0,r.kt)("p",null,"1.5 Click ",(0,r.kt)("strong",{parentName:"p"},"Create Certificate.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(690).Z,width:"2000",height:"525"})),(0,r.kt)("p",null,"1.6 Click ",(0,r.kt)("strong",{parentName:"p"},"Continue"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(2386).Z,width:"2000",height:"552"})),(0,r.kt)("p",null,"1.7 Click choose file and upload, select the file that has been downloaded at step 1.2, and click ",(0,r.kt)("strong",{parentName:"p"},"Upload"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(817).Z,width:"2000",height:"984"})),(0,r.kt)("p",null,"1.8 Click ",(0,r.kt)("strong",{parentName:"p"},"Download"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(6982).Z,width:"2000",height:"1034"})),(0,r.kt)("p",null,"1.9 Back to the website at step 1.3 and click ",(0,r.kt)("strong",{parentName:"p"},"Upload certificate"),", then click ",(0,r.kt)("strong",{parentName:"p"},"Add file"),", select the file downloaded at step 1.8, and click ",(0,r.kt)("strong",{parentName:"p"},"Save"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(3422).Z,width:"2000",height:"1067"})),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(1227).Z,width:"2000",height:"1217"})),(0,r.kt)("p",null,"1.10 Open your App on the Builder tool, go to ",(0,r.kt)("strong",{parentName:"p"},"Features \u2192 Payment Methods \u2192 Shopify Payment \u2192 enable")," Apple Pay and input ",(0,r.kt)("strong",{parentName:"p"},"ID \u2192")," Click ",(0,r.kt)("strong",{parentName:"p"},"Apply")," and ",(0,r.kt)("strong",{parentName:"p"},"Save"),"."),(0,r.kt)("h2",{id:"eb2c553d76b74eb380d2c0157f117956"},"2. Google Pay"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Take a look at the\xa0",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/pay/api/android/overview"},"integration requirements"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sign in to the\xa0",(0,r.kt)("a",{parentName:"p",href:"https://pay.google.com/business/console/"},"business console"),", and create a business.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill in all business information, and Request production access to the Google Pay API for your app. You can wait a few days for the validation.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get your merchant ID, and save the ID"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(2749).Z,width:"2000",height:"315"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Get\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"stripePublishableKey"),"\xa0from your\xa0",(0,r.kt)("a",{parentName:"p",href:"https://dashboard.stripe.com/apikeys"},"Stripe Dashboard"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open your app on the Builder tool, go to ",(0,r.kt)("strong",{parentName:"p"},"Features \u2192 Payment Methods \u2192 Shopify Payment \u2192 enable")," Google Pay ",(0,r.kt)("strong",{parentName:"p"},"\u2192")," input ",(0,r.kt)("strong",{parentName:"p"},"ID")," saved in step 4 and ",(0,r.kt)("strong",{parentName:"p"},"Key")," saved in of step 5 ",(0,r.kt)("strong",{parentName:"p"},"\u2192")," Click ",(0,r.kt)("strong",{parentName:"p"},"Apply")," and ",(0,r.kt)("strong",{parentName:"p"},"Save"),"."))),(0,r.kt)("h2",{id:"204e96e931b34001988528d2cd52f30b"},"3. Stripe"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download the Stripe Server NodeJS project located in\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"resource/StripeServerNode"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"index.js"),"\xa0in the Stripe server project folder, then input your Stripe Secret key in\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"stripeSecretKey"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(8721).Z,width:"1700",height:"174"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Upload your server project to a new\xa0",(0,r.kt)("strong",{parentName:"p"},"PRIVATE"),"\xa0GitHub/GitLab repository.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Deploy your server using Vercel. Follow their guide to set up\xa0",(0,r.kt)("a",{parentName:"p",href:"https://vercel.com/docs/concepts/deployments/git/vercel-for-github#connecting-with-github"},"Vercel for GitHub or Vercel for GitLab"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From Vercel, copy the URL of the server domain."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(734).Z,width:"2000",height:"1110"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open your App on the Builder tool, go to ",(0,r.kt)("strong",{parentName:"p"},"Features \u2192 Payment Methods \u2192 Shopify Payment \u2192 enable")," Stripe Payment Card and input the saved URL in step 5 to ",(0,r.kt)("strong",{parentName:"p"},"Endpoint \u2192")," Click ",(0,r.kt)("strong",{parentName:"p"},"Apply")," and ",(0,r.kt)("strong",{parentName:"p"},"Save"),"."))),(0,r.kt)("h2",{id:"181615f001b9480c8cacb069c95ee8c6"},"5. ",(0,r.kt)("strong",{parentName:"h2"},"Test")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Test API keys (publishable key & secret key) can be taken\xa0",(0,r.kt)("a",{parentName:"li",href:"https://dashboard.stripe.com/test/apikeys"},"here"),"."),(0,r.kt)("li",{parentName:"ul"},"You can use a card number\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"4242 4242 4242 4242"),"\xa0with any CVV, and any future expiry date to test Stripe payment (this only works with test keys).")))}c.isMDXComponent=!0},3422:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1121677597-3d2ed0da8956bf93416444464e2b99d1.webp"},2386:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1147008953-28a3da198fb097a7da0787dd1c3d604a.webp"},1340:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1335839137-f03dc7ed2d35b7e34c2a08d4af21c9dd.webp"},1227:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1541136008-cb312d0b5b2dd6c9d0b5c5eee7a1dd0f.webp"},8721:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1889401594-d1aa5b6b9e0659e0a5fb2027323da33d.webp"},690:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1923432184-d7b042982a4c65f44520de4885216404.webp"},4519:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/1928607023-915f4bda1f5c22400ffd44b821bfdc25.png"},817:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2038448496-4e8cbbcd2bc3b9800ab77d4a4b6ee68a.webp"},2035:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/2131396547-70fe9cacd82ef7e874a958815c4b87df.webp"},734:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/316464352-1633adadf682702506e48a625336f85c.webp"},1427:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/336649860-36626c048836a3b092420610afc763d0.webp"},6464:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/393299549-1d16e2db5c798a02e67551f5c297e930.webp"},2749:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/webp;base64,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"},6982:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/867906553-42bbe2b15e0102504015ac16cb643f30.webp"}}]);