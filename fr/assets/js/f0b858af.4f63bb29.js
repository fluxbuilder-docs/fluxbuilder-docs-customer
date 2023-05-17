"use strict";(self.webpackChunkdocu_notion_sample_site=self.webpackChunkdocu_notion_sample_site||[]).push([[593],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>T});var a=n(7294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,p=function(e,t){if(null==e)return{};var n,a,p={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var l=a.createContext({}),i=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,p=e.mdxType,r=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=i(n),T=p,c=u["".concat(l,".").concat(T)]||u[T]||O[T]||r;return n?a.createElement(c,o(o({ref:t},s),{},{components:n})):a.createElement(c,o({ref:t},s))}));function T(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var r=n.length,o=new Array(r);o[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:p,o[1]=d;for(var i=2;i<r;i++)o[i]=n[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2871:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>O,frontMatter:()=>r,metadata:()=>d,toc:()=>i});var a=n(7462),p=(n(7294),n(3905));const r={title:"Smart Chat (ChatGPT)",sidebar_position:7,slug:"/feature-smart-chat"},o=void 0,d={unversionedId:"Features/feature-smart-chat",id:"Features/feature-smart-chat",title:"Smart Chat (ChatGPT)",description:"To keep the app up to date with the development of OpenAI, ChatGPT has been integrated and added in Smart Chat feature of the app. Please follow the steps below:",source:"@site/docs/Features/feature-smart-chat.md",sourceDirName:"Features",slug:"/feature-smart-chat",permalink:"/fluxbuilder-docs-customer/fr/feature-smart-chat",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Smart Chat (ChatGPT)",sidebar_position:7,slug:"/feature-smart-chat"},sidebar:"tutorialSidebar",previous:{title:"Firebase Analytics",permalink:"/fluxbuilder-docs-customer/fr/feature-firebase-analytic"},next:{title:"Cloud Config",permalink:"/fluxbuilder-docs-customer/fr/feature-cloud-config"}},l={},i=[{value:"Set Up Supabase Server",id:"6b74cf1aeb41497e806072875e17d0f4",level:2},{value:"<strong>1.1 Create and Setup Project on Supabase</strong>",id:"9e9c04ab3a934f8191ef868937213741",level:3},{value:"<strong>1.2 Generate OpenAI Key</strong>",id:"dbd17ce5f24346e3b32de393f2d8bbd7",level:3},{value:"<strong>1.3 Deploy</strong>",id:"8ab2f2300ba840479ef237146425d9a0",level:3},{value:"Add ChatGPT to Your App",id:"64d64ffdeca84c3387b1ed579e7ef8d9",level:2}],s={toc:i};function O(e){let{components:t,...r}=e;return(0,p.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"To keep the app up to date with the development of OpenAI, ChatGPT has been integrated and added in Smart Chat feature of the app. Please follow the steps below:"),(0,p.kt)("h2",{id:"6b74cf1aeb41497e806072875e17d0f4"},"Set Up Supabase Server"),(0,p.kt)("h3",{id:"9e9c04ab3a934f8191ef868937213741"},(0,p.kt)("strong",{parentName:"h3"},"1.1 Create and Setup Project on Supabase")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Go to\xa0",(0,p.kt)("a",{parentName:"p",href:"https://app.supabase.io/"},"Supabase"),"\xa0to create or log in to your account and create a new project.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Please\xa0",(0,p.kt)("a",{parentName:"p",href:"https://github.com/supabase/cli#install-the-cli"},"download"),"\xa0the latest version of the\xa0",(0,p.kt)("inlineCode",{parentName:"p"},"Supabase CLI"),".")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Generate access token and log in to CLI."),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Navigate to\xa0",(0,p.kt)("a",{parentName:"p",href:"https://app.supabase.io/account/tokens"},"https://app.supabase.io/account/tokens"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},'Click "',(0,p.kt)("strong",{parentName:"p"},"Generate New Token"),'"'),(0,p.kt)("p",{parentName:"li"},(0,p.kt)("img",{src:n(614).Z,width:"2000",height:"517"}))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Copy the newly created token")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Open\xa0",(0,p.kt)("inlineCode",{parentName:"p"},"Terminal"),"\xa0run\xa0",(0,p.kt)("inlineCode",{parentName:"p"},"supabase login"))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Input your token when prompting"),(0,p.kt)("p",{parentName:"li"},(0,p.kt)("img",{src:n(2896).Z,width:"2000",height:"1227"}))))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Link your project:"),(0,p.kt)("ul",{parentName:"li"},(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Go to project setting on\xa0",(0,p.kt)("strong",{parentName:"p"},"Supabase"),"\xa0to get\xa0",(0,p.kt)("strong",{parentName:"p"},"Reference ID.")),(0,p.kt)("p",{parentName:"li"},(0,p.kt)("img",{src:n(7699).Z,width:"2000",height:"1158"}))),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Open Terminal, and run the command\xa0",(0,p.kt)("inlineCode",{parentName:"p"},"supabase link --project-ref [REFERENCE_ID]"),"\xa0. For example:\xa0",(0,p.kt)("inlineCode",{parentName:"p"},"supabase link --project-ref fasdf12312"),"."))))),(0,p.kt)("h3",{id:"dbd17ce5f24346e3b32de393f2d8bbd7"},(0,p.kt)("strong",{parentName:"h3"},"1.2 Generate OpenAI Key")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Go to\xa0",(0,p.kt)("a",{parentName:"p",href:"https://platform.openai.com/login/"},"https://platform.openai.com/login/"),"\xa0and login to your account.")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"Go to\xa0",(0,p.kt)("a",{parentName:"p",href:"https://platform.openai.com/account/api-keys"},"https://platform.openai.com/account/api-keys"),"\xa0to generate API Key."),(0,p.kt)("p",{parentName:"li"},(0,p.kt)("img",{src:n(5542).Z,width:"2000",height:"1141"})))),(0,p.kt)("h3",{id:"8ab2f2300ba840479ef237146425d9a0"},(0,p.kt)("strong",{parentName:"h3"},"1.3 Deploy")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Open\xa0",(0,p.kt)("inlineCode",{parentName:"li"},"supabase"),"\xa0folder attached in the project folder by\xa0",(0,p.kt)("strong",{parentName:"li"},"Visual Studio Code"),". You can find the resource at\xa0",(0,p.kt)("inlineCode",{parentName:"li"},"apps/openai_app/resource/"),"."),(0,p.kt)("li",{parentName:"ul"},"Open\xa0",(0,p.kt)("strong",{parentName:"li"},"Terminal"),"\xa0in\xa0",(0,p.kt)("strong",{parentName:"li"},"Visual Studio Code"),"\xa0and run command\xa0",(0,p.kt)("inlineCode",{parentName:"li"},"supabase secrets set OPENAI_API_KEY=[IN-PUT-YOUR-OPENAI-API-KEY-HERE]"),"."),(0,p.kt)("li",{parentName:"ul"},"Within your project root run\xa0",(0,p.kt)("inlineCode",{parentName:"li"},"supabase functions deploy completion"),"\xa0to deploy the module\xa0",(0,p.kt)("strong",{parentName:"li"},"Chat"),"\xa0and\xa0",(0,p.kt)("strong",{parentName:"li"},"Text Generation"),"\xa0(",(0,p.kt)("em",{parentName:"li"},"ver 1"),")."),(0,p.kt)("li",{parentName:"ul"},"Run\xa0",(0,p.kt)("inlineCode",{parentName:"li"},"supabase functions deploy chat"),"\xa0to deploy the module\xa0",(0,p.kt)("strong",{parentName:"li"},"Chat"),"\xa0and\xa0",(0,p.kt)("strong",{parentName:"li"},"Text Generation"),"\xa0(",(0,p.kt)("em",{parentName:"li"},"ver 2 - coming soon"),")."),(0,p.kt)("li",{parentName:"ul"},"Run\xa0",(0,p.kt)("inlineCode",{parentName:"li"},"supabase functions deploy image-generate"),"\xa0to deploy the module\xa0",(0,p.kt)("strong",{parentName:"li"},"Image Generation"),".")),(0,p.kt)("p",null,":::\ud83d\udcac"),(0,p.kt)("p",null,"Please contact us to get the folder."),(0,p.kt)("p",null,":::"),(0,p.kt)("h2",{id:"64d64ffdeca84c3387b1ed579e7ef8d9"},"Add ChatGPT to Your App"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"Open your app on the Builder tool"),(0,p.kt)("li",{parentName:"ol"},"Go to ",(0,p.kt)("strong",{parentName:"li"},"Features")," \u2192 open ",(0,p.kt)("strong",{parentName:"li"},"General")," \u2192 ",(0,p.kt)("strong",{parentName:"li"},"ChatGPT")),(0,p.kt)("li",{parentName:"ol"},"Input the ",(0,p.kt)("strong",{parentName:"li"},"Supabase URL")," and ",(0,p.kt)("strong",{parentName:"li"},"Supabase Anon Key")," \u2192 turn on ",(0,p.kt)("strong",{parentName:"li"},"Enable Chat")," \u2192 click ",(0,p.kt)("strong",{parentName:"li"},"Apply")),(0,p.kt)("li",{parentName:"ol"},"Go to ",(0,p.kt)("strong",{parentName:"li"},"Features")," \u2192 open ",(0,p.kt)("strong",{parentName:"li"},"Branding")," \u2192 ",(0,p.kt)("strong",{parentName:"li"},"Smart Chat")),(0,p.kt)("li",{parentName:"ol"},"Enable Smart Chat and click ",(0,p.kt)("strong",{parentName:"li"},"Add New Chat Options"),".."),(0,p.kt)("li",{parentName:"ol"},"In ",(0,p.kt)("strong",{parentName:"li"},"App"),", select ",(0,p.kt)("strong",{parentName:"li"},"ChatGPT")," \u2192 add Label and Icon Image \u2192 click ",(0,p.kt)("strong",{parentName:"li"},"ADD")),(0,p.kt)("li",{parentName:"ol"},"Click ",(0,p.kt)("strong",{parentName:"li"},"Apply")," and ",(0,p.kt)("strong",{parentName:"li"},"Save"))))}O.isMDXComponent=!0},5542:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1270056259-714acb8ab5925263dbc8c5691faff8c3.webp"},7699:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/1548129445-3b94d99da239010b5e9fcf9232d90d7c.webp"},614:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/webp;base64,UklGRgIbAABXRUJQVlA4IPYaAADwVwGdASrQBwUCPrVaq1AnJSkmoLPISSAWiWlu4XdhHwJc2Pwy1a+r2gvQTy2nqI/cXpTfR//ad9r3pH91Mpe8z/6zth/5X968lfOF8VkxuBmpx82/DmdPst4BftX/Kb5+AHujpx/1Ax3cYgxKcuXLly5cuXLly5cuXLly5cuXLly5cuXLly5cuXLly5cuXLly5cuXLly5cuXLly5cuXLly5cv+h9ns9ns9ns9ns9ns9ns9ns9ns9ns9ns9ns9ns9ns9ns9ns9ns9ns9ns9ns9ns9ns9ns9ns9ns9ns9ns9ns9ns9ns9ns70XW03uGMtOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp7yT/cMZadOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOsKf7hjLTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp095J/uGMtOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnWFP3IBGaf7hjLTlqAb2GmIYZYqOie9JAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgRnBTWMEMoOprMmbiHWiQkqOyFLF9ePDCuHtAkqj5pM0sOqe94znRBt/I6+mrosOXr7OIN1wxlp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOsKc7MfRml1VtS4TfjSYkMCBTFV6UTeWUY7HWcgvA5K/371ot/O6Sab3Wd6FM+ihuZ6uOgIa4fJJAy7TtXO6w5DYGGfbwDsdY5Hu+xjz7J+10ND0PCMwZoqB8tVbUsUESVVelSvGoAdi2VOVfEqP+Qk4/6EbASqgkEZz9pq+OVo8J90zt/pLChXTGPuEA++LLS3GpeyH3iK5rWgKrXSfywFMTlxS21BadOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dPeR+KFNOLjQjuwAxuIKuQoKVmvEy6aI7ArARRMCveDP4yuetOi7SAsnQj0tFNy+q9FBHjtnXwfFxURyWVDY6QQIVBudBLDsEh6km0/wFiygTK0aTsDMXPq2+dP7LuyLZ1lWm9ph07C24/RVOS1fB7O7OPNZAlkDjpBgBAekE4htmYI7mP4NhrAEW0YR4bJ4KDio07cHQ5docKT/cMZadOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnLYpcUlSOH/GB+oih2sxYsymwfEqaQoahaR8gpZXocbAoAtGiiBMYt/IiGolEPj/uFxoWG6pII0eHhOSfNZ8egSzAxkuQghKkuiHTBQFuNhZEeRpvxueTkeTPtDvf89U5Arr68gQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIzg3e3FSoN4AicnTr8LTyE7LTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp1hT/cMZadOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnvJP9wxlp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06wp/uGMtOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnT3kn+4Yy06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dYU/3DGWnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp7yT/cMZadOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOsKdUIQGQyGQyGQyGQyGQyGQx4DA1x0T3pIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBGcBkr/7bTCHQ0LJi3BrXQ+acI3BrXQ+acI3BrXQ+acI3BrXQ+acI3BrXQ+acI3BrCJ4cmZZviFWGW64Yy06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOsKT0c6o/YOfMRaJq14euFao4e7sixJguiAKu4Vp7F3rjonvSQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQQZjJnD67GGygZfeNaymOFmULOu6ODLEX3kGBO8kZULcdq1czl/XwLoG5HGFKkm7fu1RVN7t1o9iI8kUK8BLzUANVc6miE6TVpsU7TZOzzWctDJe1Q5W9vPHXlQSrXGyBMVYPf42p9mWbbZYYlK3Pahyy1si5XR6x+rd2KUs4OZlrjonvSQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIEEGYyZxAcSSBm9dZjfFIYDUxeN2tpcLBXnm8u8jAPpdzkVaUucFXHQDcahN+sQxIcGSyJwaBPWAUZYumKgM/EJm/M4kqecVtmj0tBYPJTUkBshVN6tygXVXKffCptJvDzw7iE4fh0qbWzXNHmBpsn7S8es0u5LdwEtwpflU13ItQqyzZpxPtpCE+svvRsd0RZC1S7PAUdbd8srWKO2Mw8BPnRPekgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIEZwztiqupRkxFHy8QK7DuCwGoVwxEz5aUi2shy1ujt1TP2wXXDGWnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp030euCy+lFEGMfB1J7dMNxH/8Z0PmnCNwa10PmnCNwa10PmnCNwa10PmnCNwa10PmnCNwa10BbHIVZ9uoObu4Yy06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnT3krq7b4Qo9Vlz+MWiqy5/GLRVZc/jFoqorc1OXLly5cuXLly5cuXLly5cuXLly5cuXLly5cuXLly5cuXLly5cuJq4tPXIowyGQyGQyGQyGQyGQyGQI96SBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECBAgQIECCDLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLFixYsWLGYpbrhjLTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp1hT/cMZadOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnvJP9wxlp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06wp/uGMtOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnTp06dOnT3kiPDchkMhkMhkMhkMhkMhkMhkMhkL3F6wA9vt9vt9vt9vt9vt9vt9vt9vt9vt9vt9vt9vt9vt9vt9vt9vt9vt9vt9vt9vt9vZgA/v/Blt5VF3hFEQgAALYE7TBKG+9Zx3wAAAVYAAAD9AAAANAgAABzIAAAQiNuLhLz6wA2mVEJuvhkMkQdeQfeDySEAAB1zPMH6TjgZ/99pyqjE2AODDBY99rpOOiCfAxuzgp8g/N6ZpbVn+/tsYPTdAFiJNIspJ2t8f0PF4raN+6Rc2YAn8j4XCioeP0+5Z2O5vA/h7kF1V4s/5ZOEQbvFOCCScWwsPV9jjtVNAcSv1KKBDcsIutLnK/6ixJ7zt2gk3xoh7Sym0glj0YX3qgeGB/Pc++DyGSvlylT1YwxcGf3NFT2MMc9k3wksGSTdmFnwACnt9/fz96NIGsXR19DyhFOVy4FsTSnljYkwVnKlU4ElLfKNdY9M8B1/b9A3xg9thVHd84oWjw0A/dqHozSmLgDhlQhy2sUU3KFDNvLuoI/3+6Q+2cEZCOgXBO5bYgSJNN53+wOKBS4WAIsW2lnGhJEh6cw8dyO9l7rwGVpkfOa+6mIlWyBI8R9dHAFCU0yZ9raCfPFi5YlLzXaHhHcaCPrM52igyCqrLcgfPz0gsUCL5c/b7ukg/rAJWUal3FsSKNR8UNf21iYp2agpnIlxxOqA2KfNh+PK/houeYuBszgYoRV5GE/ohqjNpDOEgjcnRDQe4R18ydp++NF9YTVWoaFJJDyUJX9PqvYsYUoF6zQihSWS8dzlIhLmBLn4rZ3Rs6QC0ZYNbKmsCEiNn4A0DPc3UOvof9zQJjnvmLRdi8R5fvsTpjJxiKw1HxRqGJYi5opx/z9JiPfBulo7SHX65ocTUCHasuIZ+AGIvRdeRbP94xmeu8MgBomir0YWA6eIbPVgVXGD7GOvIHtusAWYM+lQhWguhla2/rE+xLvECRrG8Pejg+hXDqtjw9MmcOxyC9bSycR9F90rn2Yjd8wXnxEzUQQYR7SNn/nhWaMyNj32aV5cC+WHXL/R/KgAgY0BCsEkp6U92sSdpWQgvGF8lhSZsiTEjqTjjTArrlV9TyEEvgRu2MrK7K+CFgFKxY+IauwX/dciNOXZ5KzCjfCmojXwCkF9/wRqlGWywWqzjT8QpFaTM+yeM3Bmsq5GxtYYWhLYRa3tG+MwayVmK40j8pME/l++xOmoCEalvWCNXH/BnGe1F4+n+gk74tmn5GcRDknwKjilFhVrLogTuHbJuakjaetszVFNkr0blVIrMvxuPq1SkZDFcjccIVN5IprwsaJnkEVGbxfzokKaNK9t2BXRQ8/2Imm8uJZwRYriuZ9n0AG+p1Y2QXOcwNT4su4doJESlEBT1h7Rh7L4/jE9PclsgH2kpPsP4ZBiTH/IIvLWZBlIZf5akh+AR2KerFMXVrR8p/kxLGRN8fi8xVCHSon+ef3v5ufF9FbS2nYJaE6l9w5qhFKmQ5j/mHOT33DqEGE/vU6MsABgmdlbAAABdqM8uvypI1VA02M29ftV2jXp8xxLkTb1Jr6afV3BDC1QeGz2RrMrlULE5lxD5bfRfzMnOPygyVaofY+VGh99lrGvVMboe6JcUCVhnxouyd3HNruvg/VPcyBLg9Rrw5ZWTGxVV92qEnEuoiIwojzUiEeInmo/5ij9T5wtVt/rlilVBIDtm24K5fIXQgdVnYQ/7+/BJ3uxcgC+Qv/VfZ2Dvq5vwv9gBKkwp49/pITLkYNYQcz9gMKeHH09/i/B7muWBpi2+3no/dXc5Oa269QmFsqsGTof9Q/bZqQTXJTwDFpCG7HK1Y7Ru3pRiuYm3Yjbfuv85bkt2oKHitMr0pfBIsvlykt0YtRepUzwqz5px7mw75e3dKW0ynpxgpfDfeY04RMthMV6gl6onIH43UnUw8I2E9lpoQ1nEaKJh7dPo1lxU7A1RAJIhRe9PxWxnWiQMOFI+JewcJC2m9LlUL895iHbfWpsPoGiE4cisWpi0+GG7emgHXVYKBkHJ8JB62LpyVrmnwk1Fm5zR3PBpZXps7b2/gTFu5wNDBimoVWnS23m3PVEcn8W/tkY2+e8W9Q5+kSQRLbyOhCSmf80GmXF3Br1U5RytuadoTyalyOxNiZfguBvsz65jrB20LL8BgsAQ9Ecm8gnOriz6rxF6gejI9N9m3t/m0oAyP0t5wDnUHazxciiNbubB6+/0qJKBHqQVH9jCO3VZ2N/6Yu8acoSTP2DLOO7+sUtKHZxgeSbVhjLwOQsr+/Tb9eGiCfpT2euHzcf+VdAb1SRO6wh/vOOWvfUXiAgFg9cU1ahxGIFu6ir9GgQv/j7rrhX/kS1AITTYYlCF/3HibyBOdvGa5y7lGxEEab/A+HYg00GjVNSNlvi/+8jP/GzPc2/vP+8nBCAztW6RbxcIA2cUzn0ZFjOD+EKkofqEMEAs3H4aWx8DuLAAABi0qoDPmpgJRnEkfv6UrnC6EYFBA2kGCwoU8uNEH9pbHDdHHA6JO7kqfC7/FVQ8sEbgZZkvOqBd0JPQvNcAxsJj2qN8EpkkXV4zokbJz5gDNcDKDXZE+jM5qJJswimaP3Gcg4OJRmF+ZC/bijFV/qujMTEit6OBTpqoK3iZMOqgsXbCI7D6esLsjivx7mVZhQgYDPGs/EylRgAUDe1KtEvjZv2LSpWwzzoH9oLu4Uofwmva7KB/bCXg9MHOSxOY9TSAfi/SGAuW4z2H4GfeUT21YNDmLRnT/NHAZtJtBlw7gdQ3fYAU5ZA4beKsTCW+YWMe3tLGUbVQDoLuTEQUyV+wQ8HmCdzqvA1ZSyL7twP4OcRt3ihQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEdyOvtoKCSRuAACvFCL+Cf3mfsaJ5dooovEcV1OJmL+/YZ3HZ4Bp8a1C00BmAM4PxNkb+9Io0sfcl3aI6l9vv0qlwGHfEDVBYGt9I2pWz1+kbUrZ6/SNqVs9fpG1K2ev0jalbPX6Ro4TMoCxh99/2noG9ou+c7IDWgrryfxhHlwAEyIK+Iw380vDMucmIQMPhTpykU6dMWPBpgaqYhscSBAA4ax/XD5CSvvWGD+u4R2kwSnn8AAg99ZRYdpqKFJ5lrmq0wHcxEPql0aVSPyOYRKTG8Gk3WCp1swFbD3TvwFonYHIGSpQVoHxuUlzMHnICHaN89Si5RE7lp42Yfy5bV2T+b1Uf/EXaKsE/cukLxv3eso8xWBd3VoaKwVIvCIdGYDVaLiDQmedRqIDOFjcEs254GM3bq4P6GBImj3iEpGqpD91b9KOJxseNWnVPu7/TelWxF00aKXq7R2lmkZmQ1eAi8trbE4qbGJ6aT6CAF2g/u5JTdEbcnfGSHHy+3LmFfDNTCPW7sXMxc42CgMGizACbJ47wPtTtycz9ovdRwbyHqImjTsiwOhIUZmHXUNVybKsm2xHZstZJa5h77uEr/ngbiutd/rR4wPhu+B56WGGItIB3RKerFturGwJOLJEUk5Yli70UTLbnNtDxWs7zFX6wILFDiQHvXGK6tSIYGq7axR4gfEyw8/aYgITE2fs+l+UC7sVg8An9wHIPfI3Vm/IjPOs5k3OHDxM2kmKWPAPJWPvPCqh+hJ7NwCSWu5zLWj0wCfSsADw7dlFyRyqpnpIsan/OLuZ+VhguMXJD5oSjn89caz3XueIgkWGf8fHnLZ8huiG57+HDjyi56RGTUWT9RwDkY1JEav2tiAZLcXsUZLjfODd3q7XxdMlDAIsEz7xEvNneoU/Nuz7mNSj2LcL/N9aowex5d0LgPyQnh9W4eYvV5e6OF2xmr2RQ/S0wR72vECEuNWJLfahnkq1Rr4fszd31oiHzBqNvqt0DJCAsHUx83U507IPm5p6Qw8QMThPLwOJMfWLR53u9c7BQ6LZBmk6H82+A97FvMOeBygZZ9cBauYBeNbbWDnsjeFN3UEe+osdVE+15u+6prdqNA3ErTxHaGvXJ9Ut0YrTZhH9dgtus37+BGHtggTiXl6wZ7q2P4FAWLac+pLSsWUlGI52jXhIHZ8ohR+vt1PMuXknphZqNB7vd9ptTAJIoBszLwpF3RHt3lSrsEg1kUoAAD+ZdC8PJ6ZW8/9uCgxLok4l9vMP1bchNThGC2dcyOo/9oOYNZRcDbeM2OYbd/eZNJrHPMJSgqco7rfwF42RqpqGTcEn0mYM+QtVdt2NcNKLH0B59A/8+NSlmIfz6Pn+H/1yvwX/FOlcjtmasAouv/yK3bk7+BZvaiBtMGTpk95SLYc5YhkXrbXSPDANdM8unePQwoebpDXee/Jh5gAihIBYV9pwmK16LnSUT8F1iqDKvaBh9jgmgRYJ5z//UX7ILuQhYEQzeT4zzgyGvOnzYAjtrC5ifmhrpCi00G/qboJSrT9s3VFN6TJRGO+MCeYjuJ3rZ8pY36rrffywWU6jJPR789crMLsG5iIpN/MlaGtPE70KMmROTFpXaP3nahGrHV0FChmFSI2kDe+2P8kqSK9txSHPdH4vvi3Ye1JWKw2dUlL6+Xrckv83Db/WwNP4XPTxcPtASF/BCqABDeC2Vi+6XcuinxmVu3wammft3YQrD2meCtTpZQuHLfEYgq4VHjzg5qW8lxUea6200CmS+uHFgbtsiuRYwhYFPR5LamvrsX/j8BSXArHfBygyf93SNWew/vNIp9v13mXapW28SOTJG2meJsDtloj4aPJrEMoh7OIkjMCaUVzpqgSaSW//rkeChBLeX9tGRlA9mvl5Yqkcru1J2x8NUy6ZCZvTWd2Z97MqaQOYWchloNnbe498QluMESvlOFUSP7/JxP2g2hHKYkEtiAJhDrzzRGZ877siwDl8AeXiR2Ii5DmFHnbEtIHgxRZFEr7ZpizfCA8neqBkND6lRiBCawxDvMTsxevwmRvzq8cxZsUUOxYNBKsaih27H2il49ZMVCKuH9F/hyQmZarpndVqjs4iQC80Yqp79nIbDUjr8EA2ZQfXVH5SQRKPkzseALZG/Kc4yfz78nRniaTltffWOM18bNxaCZHul5/iY7ESSxmvkgygbc3RUf6bLyJDGoDI3GmQnsl09AiML9K9pLdl1m7jSYyT8dk0Nv+ksTXeqlXcSWCpVDho5sCEpFIs3Wfzk1wfBkEXrARiF2EOOFtQjbjN/Pljs7LpC8pjWA+DQpc/NQggzkYV9WcGHjtwvkwnZjACXyq7Uzbfd6lk4C+t+h1lPYXPjRhiLZ2cQmOaBrGgm++GfnIf5q/OCCmFdvoP/PIRmzUT7x21PDN7jH+ODslUSyAqwJGqjTDahmIZAM+HiSMwJBWQ2hZPRkqKbumFGs2i7t2dhoDcr3h0X/jQQkRh8CiPUYSfVD6eGCKDt+DXFhQkQ7TNn4LXFrwAE+PS8NHzAgJpgAABxzgAAAAgCBGwIABkvhbdovQOURmCWGtFewTUpaY+w0tnrjFNiZbUZaeiJ68LwvC8LwvC8LwvC8LwvC8LwvC8LwvC8LwvC8LwvC8KBQdtwbBLQD1ASKWdrJ+/GoKTkmpItYJ+7SAFRp8ogAAr6LGlwigtdkgABFxQAAAAAAAAAAAAAAAAAAAAAAAAAAAAYkMVianuvWcAAAAAAAAA=="},2896:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/706122263-c57aaebf1e25d7b8d51f6c4a1ce6fe76.webp"}}]);