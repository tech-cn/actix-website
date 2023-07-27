"use strict";(self.webpackChunkactix_website=self.webpackChunkactix_website||[]).push([[8415],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return r?n.createElement(f,s(s({ref:t},u),{},{components:r})):n.createElement(f,s({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5107:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={title:"Quick start",slug:"/actix"},s="Quick start",o={unversionedId:"actix/sec-0-quick-start",id:"actix/sec-0-quick-start",title:"Quick start",description:"Before you can start writing an actix application, you\u2019ll need a version of Rust installed.",source:"@site/docs/actix/sec-0-quick-start.md",sourceDirName:"actix",slug:"/actix",permalink:"/docs/actix",draft:!1,editUrl:"https://github.com/actix/actix-website/edit/master/docs/actix/sec-0-quick-start.md",tags:[],version:"current",frontMatter:{title:"Quick start",slug:"/actix"},sidebar:"docs",previous:{title:"\u8fde\u63a5\u7684\u751f\u547d\u5468\u671f",permalink:"/docs/conn_lifecycle"},next:{title:"Getting Started",permalink:"/docs/actix/getting-started"}},c={},l=[{value:"Install Rust",id:"install-rust",level:2},{value:"Running Examples",id:"running-examples",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quick-start"},"Quick start"),(0,a.kt)("p",null,"Before you can start writing an actix application, you\u2019ll need a version of Rust installed.\nWe recommend you use rustup to install or configure such a version."),(0,a.kt)("h2",{id:"install-rust"},"Install Rust"),(0,a.kt)("p",null,"Before we begin, we need to install Rust using the ",(0,a.kt)("a",{parentName:"p",href:"https://rustup.rs/"},"rustup")," installer:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n")),(0,a.kt)("p",null,"If you already have rustup installed, run this command to ensure you have the latest version of Rust:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"rustup update\n")),(0,a.kt)("p",null,"The actix framework requires Rust version 1.40.0 and up."),(0,a.kt)("h2",{id:"running-examples"},"Running Examples"),(0,a.kt)("p",null,"The fastest way to start experimenting with actix is to clone the actix repository\nand run the included examples in the examples/ directory. The following set of\ncommands runs the ",(0,a.kt)("inlineCode",{parentName:"p"},"ping")," example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/actix/actix\ncd actix\ncargo run --example ping\n")),(0,a.kt)("p",null,"Check ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/actix/actix/tree/master/actix/examples"},"examples/")," directory for more examples."))}p.isMDXComponent=!0}}]);