(self.webpackChunkactix_website=self.webpackChunkactix_website||[]).push([[8456],{2412:(e,t,r)=>{var s={"./application/src/app.rs":[7995,7995],"./application/src/combine.rs":[7882,7882],"./application/src/config.rs":[8254,8254],"./application/src/main.rs":[6542,6542],"./application/src/mutable_state.rs":[8235,8235],"./application/src/scope.rs":[4395,4395],"./application/src/state.rs":[5971,5971],"./application/src/vh.rs":[4346,4346],"./async-handlers/src/main.rs":[6220,6220],"./async-handlers/src/stream.rs":[7944,7944],"./databases/src/main.rs":[7644,7644],"./easy-form-handling/src/main.rs":[8230,8230],"./either/src/main.rs":[9677,9677],"./errors/src/helpers.rs":[5786,5786],"./errors/src/logging.rs":[2524,2524],"./errors/src/main.rs":[2245,2245],"./errors/src/override_error.rs":[4547,4547],"./errors/src/recommend_one.rs":[7942,7942],"./errors/src/recommend_two.rs":[2244,2244],"./extractors/src/form.rs":[6733,6733],"./extractors/src/json_one.rs":[1533,1533],"./extractors/src/json_two.rs":[1522,1522],"./extractors/src/main.rs":[3108,3108],"./extractors/src/multiple.rs":[2591,2591],"./extractors/src/path_one.rs":[1341,1341],"./extractors/src/path_three.rs":[857,857],"./extractors/src/path_two.rs":[2544,2544],"./extractors/src/query.rs":[2790,2790],"./flexible-responders/src/main.rs":[7319,7319],"./getting-started/src/main.rs":[7370,7370],"./http2/src/main.rs":[4988,4988],"./main-example/src/main.rs":[1324,1324],"./middleware/src/default_headers.rs":[5693,5693],"./middleware/src/errorhandler.rs":[2856,2856],"./middleware/src/logger.rs":[340,340],"./middleware/src/main.rs":[2871,2871],"./middleware/src/user_sessions.rs":[1366,1366],"./middleware/src/wrap_fn.rs":[4398,4398],"./powerful-extractors/src/main.rs":[2509,2509],"./request-handlers/src/handlers_arc.rs":[2517,2517],"./request-handlers/src/main.rs":[3802,3802],"./request-routing/src/main.rs":[6461,6461],"./requests/src/main.rs":[6080,6080],"./requests/src/manual.rs":[9517,9517],"./requests/src/multipart.rs":[9327,9327],"./requests/src/streaming.rs":[7219,7219],"./requests/src/urlencoded.rs":[6982,6982],"./responder-trait/src/main.rs":[3514,3514],"./responses/src/auto.rs":[4147,4147],"./responses/src/chunked.rs":[2809,2809],"./responses/src/identity.rs":[3854,3854],"./responses/src/identity_two.rs":[870,870],"./responses/src/json_resp.rs":[1819,1819],"./responses/src/main.rs":[4938,4938],"./server/src/keep_alive.rs":[592,592],"./server/src/keep_alive_tp.rs":[8983,8983],"./server/src/main.rs":[8128,8128],"./server/src/signals.rs":[7132,7132],"./server/src/ssl.rs":[151,151],"./server/src/workers.rs":[4012,4012],"./static-files/src/configuration.rs":[4031,4031],"./static-files/src/configuration_two.rs":[8861,8861],"./static-files/src/directory.rs":[4333,4333],"./static-files/src/main.rs":[7135,7135],"./testing/src/integration_one.rs":[179,6841],"./testing/src/integration_two.rs":[6720,6720],"./testing/src/main.rs":[4198,4198],"./testing/src/stream_response.rs":[926,926],"./url-dispatch/src/cfg.rs":[3146,3146],"./url-dispatch/src/dhandler.rs":[6692,6692],"./url-dispatch/src/guard.rs":[5052,5052],"./url-dispatch/src/guard2.rs":[8207,8207],"./url-dispatch/src/main.rs":[710,710],"./url-dispatch/src/minfo.rs":[813,813],"./url-dispatch/src/norm.rs":[966,966],"./url-dispatch/src/norm2.rs":[5315,5315],"./url-dispatch/src/path.rs":[3403,3403],"./url-dispatch/src/path2.rs":[9765,9765],"./url-dispatch/src/pbuf.rs":[3173,3173],"./url-dispatch/src/resource.rs":[960,960],"./url-dispatch/src/scope.rs":[8536,8536],"./url-dispatch/src/url_ext.rs":[2312,2312],"./url-dispatch/src/urls.rs":[4808,4808],"./websockets/src/main.rs":[1256,1256]};function a(e){if(!r.o(s,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=s[e],a=t[0];return r.e(t[1]).then((()=>r(a)))}a.keys=()=>Object.keys(s),a.id=2412,e.exports=a},3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>p,kt:()=>u});var s=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,s,a=function(e,t){if(null==e)return{};var r,s,a={},n=Object.keys(e);for(s=0;s<n.length;s++)r=n[s],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)r=n[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=s.createContext({}),l=function(e){var t=s.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return s.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(r),u=a,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||n;return r?s.createElement(h,i(i({ref:t},p),{},{components:r})):s.createElement(h,i({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<n;l++)i[l]=r[l];return s.createElement.apply(null,i)}return s.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2536:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var s=r(7294),a=r(814);const n=e=>{let{example:t,file:n,section:i}=e;const[o,c]=(0,s.useState)("");return(0,s.useEffect)((()=>{let e=!0;return r(2412)(`./${t}/src/${n||"main.rs"}`).then((t=>{t=t.default.match(new RegExp(`// <${i}>\n([\\s\\S]*)// </${i}>`))[1],e&&c(t)})).catch((e=>console.log(e))),()=>{e=!1}}),[]),s.createElement(a.Z,{className:"language-rust"},o)}},18:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var s=r(7462),a=(r(7294),r(3905)),n=r(2536);const i={title:"\u63d0\u53d6\u5668"},o="\u7c7b\u578b\u5b89\u5168\u7684\u6570\u636e\u63d0\u53d6\u5668",c={unversionedId:"extractors",id:"extractors",title:"\u63d0\u53d6\u5668",description:"Actix Web \u63d0\u4f9b\u4e86\u4e00\u79cd\u7c7b\u578b\u5b89\u5168\u7684\u8bf7\u6c42\u4fe1\u606f\u8bbf\u95ee\u673a\u5236\uff0c\u79f0\u4e3a \u63d0\u53d6\u5668\uff08\u5373 impl FromRequest\uff09\u3002\u5185\u7f6e\u4e86\u8bb8\u591a\u63d0\u53d6\u5668\u5b9e\u73b0\uff08\u53c2\u89c1\u5b9e\u73b0\u8005\uff09\u3002",source:"@site/docs/extractors.md",sourceDirName:".",slug:"/extractors",permalink:"/docs/extractors",draft:!1,editUrl:"https://github.com/actix/actix-website/edit/master/docs/extractors.md",tags:[],version:"current",frontMatter:{title:"\u63d0\u53d6\u5668"},sidebar:"docs",previous:{title:"Server",permalink:"/docs/server"},next:{title:"\u5904\u7406\u5668",permalink:"/docs/handlers"}},l={},p=[{value:"Path\uff08\u8def\u5f84\u63d0\u53d6\u5668\uff09",id:"path\u8def\u5f84\u63d0\u53d6\u5668",level:2},{value:"Query\uff08\u67e5\u8be2\u53c2\u6570\u63d0\u53d6\u5668\uff09",id:"query\u67e5\u8be2\u53c2\u6570\u63d0\u53d6\u5668",level:2},{value:"JSON\uff08JSON\u683c\u5f0f\u7684\u6570\u636e\u63d0\u53d6\u5668\uff09",id:"jsonjson\u683c\u5f0f\u7684\u6570\u636e\u63d0\u53d6\u5668",level:2},{value:"URL-Encoded Forms (URL\u7f16\u7801\u8868\u5355\u63d0\u53d6\u5668)",id:"url-encoded-forms-url\u7f16\u7801\u8868\u5355\u63d0\u53d6\u5668",level:2},{value:"Other\uff08\u5176\u4ed6\u63d0\u53d6\u5668\uff09",id:"other\u5176\u4ed6\u63d0\u53d6\u5668",level:2},{value:"Application State Extractor\uff08\u5e94\u7528\u72b6\u6001\u63d0\u53d6\u5668\uff09",id:"application-state-extractor\u5e94\u7528\u72b6\u6001\u63d0\u53d6\u5668",level:2}],m={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,s.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7c7b\u578b\u5b89\u5168\u7684\u6570\u636e\u63d0\u53d6\u5668"},"\u7c7b\u578b\u5b89\u5168\u7684\u6570\u636e\u63d0\u53d6\u5668"),(0,a.kt)("p",null,"Actix Web \u63d0\u4f9b\u4e86\u4e00\u79cd\u7c7b\u578b\u5b89\u5168\u7684\u8bf7\u6c42\u4fe1\u606f\u8bbf\u95ee\u673a\u5236\uff0c\u79f0\u4e3a ",(0,a.kt)("em",{parentName:"p"},"\u63d0\u53d6\u5668"),"\uff08\u5373 ",(0,a.kt)("inlineCode",{parentName:"p"},"impl FromRequest"),"\uff09\u3002\u5185\u7f6e\u4e86\u8bb8\u591a\u63d0\u53d6\u5668\u5b9e\u73b0\uff08\u53c2\u89c1",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/actix-web/latest/actix_web/trait.FromRequest.html#implementors"},"\u5b9e\u73b0\u8005"),"\uff09\u3002"),(0,a.kt)("p",null,"\u63d0\u53d6\u5668\u53ef\u4ee5\u4f5c\u4e3a\u5904\u7406\u51fd\u6570\u7684\u53c2\u6570\u8bbf\u95ee\u3002Actix Web \u6bcf\u4e2a\u5904\u7406\u51fd\u6570\u652f\u6301\u6700\u591a 12 \u4e2a\u63d0\u53d6\u5668\u3002\u53c2\u6570\u4f4d\u7f6e\u65e0\u5173\u7d27\u8981\u3002"),(0,a.kt)(n.Z,{example:"extractors",file:"main.rs",section:"option-one",mdxType:"CodeBlock"}),(0,a.kt)("h2",{id:"path\u8def\u5f84\u63d0\u53d6\u5668"},"Path\uff08\u8def\u5f84\u63d0\u53d6\u5668\uff09"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/actix-web/4/actix_web/dev/struct.Path.html"},(0,a.kt)("em",{parentName:"a"},"Path"))," \u53ef\u4ee5\u4ece\u8bf7\u6c42\u8def\u5f84\u4e2d\u63d0\u53d6\u4fe1\u606f\u3002\u53ef\u4ee5\u63d0\u53d6\u7684\u8def\u5f84\u90e8\u5206\u79f0\u4e3a\u201c\u52a8\u6001\u6bb5\u201d\uff0c\u5e76\u7528\u82b1\u62ec\u53f7\u6807\u8bb0\u3002\u60a8\u53ef\u4ee5\u4ece\u8def\u5f84\u4e2d\u53cd\u5e8f\u5217\u5316\u4efb\u4f55\u53d8\u91cf\u6bb5\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u5bf9\u4e8e\u6ce8\u518c\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"/users/{user_id}/{friend}")," \u8def\u5f84\u7684\u8d44\u6e90\uff0c\u53ef\u4ee5\u53cd\u5e8f\u5217\u5316\u4e24\u4e2a\u6bb5\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"user_id")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"friend"),"\u3002\u8fd9\u4e9b\u6bb5\u53ef\u4ee5\u6309\u7167\u58f0\u660e\u7684\u987a\u5e8f\u4f5c\u4e3a\u5143\u7ec4\u63d0\u53d6\uff08\u4f8b\u5982\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Path<(u32, String)>"),"\uff09\u3002"),(0,a.kt)(n.Z,{example:"extractors",file:"path_one.rs",section:"path-one",mdxType:"CodeBlock"}),(0,a.kt)("p",null,"\u4e5f\u53ef\u4ee5\u5c06\u8def\u5f84\u4fe1\u606f\u63d0\u53d6\u5230\u5b9e\u73b0\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"serde")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Deserialize")," \u7279\u8d28\u7684 struct \u4e2d\uff0c\u901a\u8fc7\u5c06\u52a8\u6001\u6bb5\u540d\u79f0\u4e0e\u5b57\u6bb5\u540d\u79f0\u8fdb\u884c\u5339\u914d\u3002\u4e0b\u9762\u662f\u4e00\u4e2a\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"serde")," \u800c\u4e0d\u662f\u5143\u7ec4\u7c7b\u578b\u7684\u7b49\u6548\u793a\u4f8b\u3002"),(0,a.kt)(n.Z,{example:"extractors",file:"path_two.rs",section:"path-two",mdxType:"CodeBlock"}),(0,a.kt)("p",null,"\u4f5c\u4e3a\u4e00\u4e2a\u975e\u7c7b\u578b\u5b89\u5168\u7684\u66ff\u4ee3\u65b9\u6848\uff0c\u4e5f\u53ef\u4ee5\u5728\u5904\u7406\u51fd\u6570\u4e2d\u6309\u540d\u79f0\u67e5\u8be2\uff08\u53c2\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/actix-web/latest/actix_web/struct.HttpRequest.html#method.match_info"},(0,a.kt)("inlineCode",{parentName:"a"},"match_info"))," \u6587\u6863\uff09\u8bf7\u6c42\u7684\u8def\u5f84\u53c2\u6570\uff1a"),(0,a.kt)(n.Z,{example:"extractors",file:"path_three.rs",section:"path-three",mdxType:"CodeBlock"}),(0,a.kt)("h2",{id:"query\u67e5\u8be2\u53c2\u6570\u63d0\u53d6\u5668"},"Query\uff08\u67e5\u8be2\u53c2\u6570\u63d0\u53d6\u5668\uff09"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/actix-web/4/actix_web/web/struct.Query.html"},(0,a.kt)("inlineCode",{parentName:"a"},"Query<T>"))," \u63d0\u4f9b\u4e86\u8bf7\u6c42\u67e5\u8be2\u53c2\u6570\u7684\u63d0\u53d6\u529f\u80fd\u3002\u5b83\u5e95\u5c42\u4f7f\u7528\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"serde_urlencoded")," crate\u3002"),(0,a.kt)(n.Z,{example:"extractors",file:"query.rs",section:"query",mdxType:"CodeBlock"}),(0,a.kt)("h2",{id:"jsonjson\u683c\u5f0f\u7684\u6570\u636e\u63d0\u53d6\u5668"},"JSON\uff08JSON\u683c\u5f0f\u7684\u6570\u636e\u63d0\u53d6\u5668\uff09"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/actix-web/4/actix_web/web/struct.Json.html"},(0,a.kt)("inlineCode",{parentName:"a"},"Json<T>"))," \u5141\u8bb8\u5c06\u8bf7\u6c42\u4f53\u53cd\u5e8f\u5217\u5316\u4e3a struct\u3002\u8981\u4ece\u8bf7\u6c42\u4f53\u4e2d\u63d0\u53d6\u7c7b\u578b\u5316\u7684\u4fe1\u606f\uff0c\u7c7b\u578b ",(0,a.kt)("inlineCode",{parentName:"p"},"T")," \u5fc5\u987b\u5b9e\u73b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"serde::Deserialize"),"\u3002"),(0,a.kt)(n.Z,{example:"extractors",file:"json_one.rs",section:"json-one",mdxType:"CodeBlock"}),(0,a.kt)("p",null,"\u4e00\u4e9b\u63d0\u53d6\u5668\u63d0\u4f9b\u4e86\u5bf9\u63d0\u53d6\u8fc7\u7a0b\u8fdb\u884c\u914d\u7f6e\u7684\u65b9\u6cd5\u3002\u8981\u914d\u7f6e\u63d0\u53d6\u5668\uff0c\u9700\u8981\u5c06\u5176\u914d\u7f6e\u5bf9\u8c61\u4f20\u9012\u7ed9\u8d44\u6e90\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},".app_data()")," \u65b9\u6cd5\u3002\u5728 ",(0,a.kt)("em",{parentName:"p"},"Json")," \u63d0\u53d6\u5668\u7684\u4f8b\u5b50\u4e2d\uff0c\u8fd4\u56de\u4e86\u4e00\u4e2a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/actix-web/4/actix_web/web/struct.JsonConfig.html"},(0,a.kt)("em",{parentName:"a"},"JsonConfig")),"\u3002\u4f60\u53ef\u4ee5\u914d\u7f6e JSON \u8d1f\u8f7d\u7684\u6700\u5927\u5927\u5c0f\u4ee5\u53ca\u81ea\u5b9a\u4e49\u9519\u8bef\u5904\u7406\u7a0b\u5e8f\u51fd\u6570\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u7684\u4f8b\u5b50\u5c06\u8bf7\u6c42\u4f53\u8d1f\u8f7d\u7684\u5927\u5c0f\u9650\u5236\u4e3a 4kb\uff0c\u5e76\u4f7f\u7528\u81ea\u5b9a\u4e49\u9519\u8bef\u5904\u7406\u7a0b\u5e8f\u3002"),(0,a.kt)(n.Z,{example:"extractors",file:"json_two.rs",section:"json-two",mdxType:"CodeBlock"}),(0,a.kt)("h2",{id:"url-encoded-forms-url\u7f16\u7801\u8868\u5355\u63d0\u53d6\u5668"},"URL-Encoded Forms (URL\u7f16\u7801\u8868\u5355\u63d0\u53d6\u5668)"),(0,a.kt)("p",null,"URL-encoded \u7684\u8868\u5355\u8bf7\u6c42\u63d0\u53ef\u4ee5\u88ab\u63d0\u53d6\u5230\u4e00\u4e2a struct \u4e2d\uff0c\u5c31\u50cf ",(0,a.kt)("inlineCode",{parentName:"p"},"Json<T>")," \u4e00\u6837\u3002\u8fd9\u4e2a\u7c7b\u578b\u5fc5\u987b\u5b9e\u73b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"serde::Deserialize"),"\u3002"),(0,a.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/actix-web/4/actix_web/web/struct.FormConfig.html"},(0,a.kt)("em",{parentName:"a"},"FormConfig"))," \u914d\u7f6e\u63d0\u53d6\u8fc7\u7a0b\u3002"),(0,a.kt)(n.Z,{example:"extractors",file:"form.rs",section:"form",mdxType:"CodeBlock"}),(0,a.kt)("h2",{id:"other\u5176\u4ed6\u63d0\u53d6\u5668"},"Other\uff08\u5176\u4ed6\u63d0\u53d6\u5668\uff09"),(0,a.kt)("p",null,"Actix Web \u4e5f\u63d0\u4f9b\u4e86\u8bb8\u591a\u5176\u4ed6\u63d0\u53d6\u5668\uff0c\u8fd9\u91cc\u6709\u4e00\u4e9b\u6bd4\u8f83\u91cd\u8981\u7684\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/actix-web/4/actix_web/web/struct.Data.html"},(0,a.kt)("inlineCode",{parentName:"a"},"Data"))," - \u7528\u4e8e\u8bbf\u95ee\u5e94\u7528\u7684\u72b6\u6001\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/actix-web/4/actix_web/struct.HttpRequest.html"},(0,a.kt)("inlineCode",{parentName:"a"},"HttpRequest"))," - ",(0,a.kt)("inlineCode",{parentName:"li"},"HttpRequest")," \u672c\u8eab\u5c31\u662f\u4e00\u4e2a\u63d0\u53d6\u5668\uff0c\u53ef\u4ee5\u8bbf\u95ee\u8bf7\u6c42\u7684\u5176\u4ed6\u90e8\u5206\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"String")," - \u53ef\u4ee5\u5c06\u8bf7\u6c42\u7684\u8d1f\u8f7d\u8f6c\u6362\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"String"),"\u3002\u5728  rustdoc \u4e2d\u7684 ",(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/actix-web/4/actix_web/trait.FromRequest.html#impl-FromRequest-for-String"},(0,a.kt)("em",{parentName:"a"},"\u4e00\u4e2a\u4f8b\u5b50")),"\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/actix-web/4/actix_web/web/struct.Bytes.html"},(0,a.kt)("inlineCode",{parentName:"a"},"Bytes"))," - \u53ef\u4ee5\u5c06\u8bf7\u6c42\u7684\u8d1f\u8f7d\u8f6c\u6362\u4e3a ",(0,a.kt)("em",{parentName:"li"},"Bytes"),"\u3002\u5728  rustdoc \u4e2d\u7684 ",(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/actix-web/4/actix_web/trait.FromRequest.html#impl-FromRequest-5"},(0,a.kt)("em",{parentName:"a"},"\u4e00\u4e2a\u4f8b\u5b50")),"\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/actix-web/4/actix_web/web/struct.Payload.html"},(0,a.kt)("inlineCode",{parentName:"a"},"Payload"))," - \u5e95\u5c42\u7684\u8bf7\u6c42\u8d1f\u8f7d\u63d0\u53d6\u5668\uff0c\u4e3b\u8981\u7528\u4e8e\u6784\u5efa\u5176\u4ed6\u63d0\u53d6\u5668\u3002\u5728  rustdoc \u4e2d\u7684 ",(0,a.kt)("a",{parentName:"li",href:"https://docs.rs/actix-web/4/actix_web/web/struct.Payload.html"},(0,a.kt)("em",{parentName:"a"},"\u4e00\u4e2a\u4f8b\u5b50")),"\u3002")),(0,a.kt)("h2",{id:"application-state-extractor\u5e94\u7528\u72b6\u6001\u63d0\u53d6\u5668"},"Application State Extractor\uff08\u5e94\u7528\u72b6\u6001\u63d0\u53d6\u5668\uff09"),(0,a.kt)("p",null,"\u5e94\u7528\u72b6\u6001\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"web::Data")," \u63d0\u53d6\u5668\u8bbf\u95ee\u3002\u4f46\u662f\uff0c\u72b6\u6001\u53ea\u80fd\u4f5c\u4e3a\u53ea\u8bfb\u5f15\u7528\u8bbf\u95ee\u3002\u5982\u679c\u9700\u8981\u5bf9\u72b6\u6001\u8fdb\u884c\u53ef\u53d8\u8bbf\u95ee\uff0c\u5219\u5fc5\u987b\u5b9e\u73b0\u3002"),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u4f8b\u5b50\uff0c\u5c55\u793a\u4e86\u5982\u4f55\u8bb0\u5f55\u8bf7\u6c42\u6570\uff1a"),(0,a.kt)(n.Z,{example:"request-handlers",file:"main.rs",section:"data",mdxType:"CodeBlock"}),(0,a.kt)("p",null,"\u5c3d\u7ba1\u8fd9\u4e2a\u5904\u7406\u7a0b\u5e8f\u53ef\u4ee5\u5de5\u4f5c\uff0c\u4f46\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"data.count")," \u53ea\u4f1a\u8ba1\u7b97\u6bcf\u4e2a\u5de5\u4f5c\u7ebf\u7a0b\u5904\u7406\u7684\u8bf7\u6c42\u6570\u3002\u8981\u8ba1\u7b97\u6240\u6709\u7ebf\u7a0b\u7684\u603b\u8bf7\u6c42\u6570\uff0c\u5e94\u8be5\u4f7f\u7528\u5171\u4eab\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Arc")," \u548c ",(0,a.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/std/sync/atomic/"},"atomics"),"\u3002"),(0,a.kt)(n.Z,{example:"request-handlers",file:"handlers_arc.rs",section:"arc",mdxType:"CodeBlock"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": \u5982\u679c\u8981\u5728\u6240\u6709\u7ebf\u7a0b\u4e4b\u95f4\u5171\u4eab\u6574\u4e2a\u72b6\u6001\uff0c\u8bf7\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"web::Data")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"app_data"),"\uff0c\u5982",(0,a.kt)("a",{parentName:"p",href:"/docs/application#shared-mutable-state"},"\u5171\u4eab\u53ef\u53d8\u72b6\u6001"),"\u4e2d\u6240\u8ff0\u3002"),(0,a.kt)("p",null,"\u5c0f\u5fc3\u4f7f\u7528\u963b\u585e\u540c\u6b65\u539f\u8bed\uff0c\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"Mutex")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"RwLock"),"\u3002Actix Web \u5904\u7406\u8bf7\u6c42\u662f\u5f02\u6b65\u7684\u3002\u5982\u679c\u60a8\u7684\u5904\u7406\u7a0b\u5e8f\u4e2d\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Critical_section"},(0,a.kt)("em",{parentName:"a"},"critical section"))," \u592a\u5927\u6216\u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"p"},".await"),"\uff0c\u5219\u4f1a\u51fa\u73b0\u95ee\u9898\u3002\u5982\u679c\u8fd9\u662f\u4e00\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u5efa\u8bae\u60a8\u4e5f\u9605\u8bfb ",(0,a.kt)("a",{parentName:"p",href:"https://tokio.rs/tokio/tutorial/shared-state#on-using-stdsyncmutex"},"Tokio \u5173\u4e8e\u5728\u5f02\u6b65\u4ee3\u7801\u4e2d\u4f7f\u7528\u963b\u585e ",(0,a.kt)("inlineCode",{parentName:"a"},"Mutex")," \u7684\u5efa\u8bae"),"\u3002"))}d.isMDXComponent=!0}}]);