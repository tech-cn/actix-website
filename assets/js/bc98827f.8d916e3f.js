"use strict";(self.webpackChunkactix_website=self.webpackChunkactix_website||[]).push([[7430],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=s(r),d=i,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||o;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9304:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const o={title:"HTTP \u670d\u52a1\u521d\u59cb\u5316"},a="\u6982\u8ff0",c={unversionedId:"http_server_init",id:"http_server_init",title:"HTTP \u670d\u52a1\u521d\u59cb\u5316",description:"\u4e0b\u9762\u7684\u56fe\u662f HttpServer \u521d\u59cb\u5316\u7684\u8fc7\u7a0b\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u53d1\u751f\u5728\u4e0b\u9762\u7684\u4ee3\u7801\u4e2d",source:"@site/docs/http_server_init.md",sourceDirName:".",slug:"/http_server_init",permalink:"/docs/http_server_init",draft:!1,editUrl:"https://github.com/actix/actix-website/edit/master/docs/http_server_init.md",tags:[],version:"current",frontMatter:{title:"HTTP \u670d\u52a1\u521d\u59cb\u5316"},sidebar:"docs",previous:{title:"\u6570\u636e\u5e93",permalink:"/docs/databases"},next:{title:"\u8fde\u63a5\u7684\u751f\u547d\u5468\u671f",permalink:"/docs/conn_lifecycle"}},p={},s=[],l={toc:s};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,i.kt)("p",null,"\u4e0b\u9762\u7684\u56fe\u662f HttpServer \u521d\u59cb\u5316\u7684\u8fc7\u7a0b\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u53d1\u751f\u5728\u4e0b\u9762\u7684\u4ee3\u7801\u4e2d"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'#[actix_web::main]\nasync fn main() -> std::io::Result<()> {\n    HttpServer::new(|| {\n        App::new()\n            .route("/", web::to(|| HttpResponse::Ok()))\n    })\n    .bind(("127.0.0.1", 8080))?\n    .run()\n    .await\n}\n')),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(7964).Z,width:"1450",height:"732"})))}u.isMDXComponent=!0},7964:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/http_server-5354c2dfdf584123f44e726d25b949db.svg"}}]);