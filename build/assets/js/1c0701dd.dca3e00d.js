(self.webpackChunkactix_website=self.webpackChunkactix_website||[]).push([[6235],{2412:(e,r,t)=>{var s={"./application/src/app.rs":[7995,7995],"./application/src/combine.rs":[7882,7882],"./application/src/config.rs":[8254,8254],"./application/src/main.rs":[6542,6542],"./application/src/mutable_state.rs":[8235,8235],"./application/src/scope.rs":[4395,4395],"./application/src/state.rs":[5971,5971],"./application/src/vh.rs":[4346,4346],"./async-handlers/src/main.rs":[6220,6220],"./async-handlers/src/stream.rs":[7944,7944],"./databases/src/main.rs":[7644,7644],"./easy-form-handling/src/main.rs":[8230,8230],"./either/src/main.rs":[9677,9677],"./errors/src/helpers.rs":[5786,5786],"./errors/src/logging.rs":[2524,2524],"./errors/src/main.rs":[2245,2245],"./errors/src/override_error.rs":[4547,4547],"./errors/src/recommend_one.rs":[7942,7942],"./errors/src/recommend_two.rs":[2244,2244],"./extractors/src/form.rs":[6733,6733],"./extractors/src/json_one.rs":[1533,1533],"./extractors/src/json_two.rs":[1522,1522],"./extractors/src/main.rs":[3108,3108],"./extractors/src/multiple.rs":[2591,2591],"./extractors/src/path_one.rs":[1341,1341],"./extractors/src/path_three.rs":[857,857],"./extractors/src/path_two.rs":[2544,2544],"./extractors/src/query.rs":[2790,2790],"./flexible-responders/src/main.rs":[7319,7319],"./getting-started/src/main.rs":[7370,7370],"./http2/src/main.rs":[4988,4988],"./main-example/src/main.rs":[1324,1324],"./middleware/src/default_headers.rs":[5693,5693],"./middleware/src/errorhandler.rs":[2856,2856],"./middleware/src/logger.rs":[340,340],"./middleware/src/main.rs":[2871,2871],"./middleware/src/user_sessions.rs":[1366,1366],"./middleware/src/wrap_fn.rs":[4398,4398],"./powerful-extractors/src/main.rs":[2509,2509],"./request-handlers/src/handlers_arc.rs":[2517,2517],"./request-handlers/src/main.rs":[3802,3802],"./request-routing/src/main.rs":[6461,6461],"./requests/src/main.rs":[6080,6080],"./requests/src/manual.rs":[9517,9517],"./requests/src/multipart.rs":[9327,9327],"./requests/src/streaming.rs":[7219,7219],"./requests/src/urlencoded.rs":[6982,6982],"./responder-trait/src/main.rs":[3514,3514],"./responses/src/auto.rs":[4147,4147],"./responses/src/chunked.rs":[2809,2809],"./responses/src/identity.rs":[3854,3854],"./responses/src/identity_two.rs":[870,870],"./responses/src/json_resp.rs":[1819,1819],"./responses/src/main.rs":[4938,4938],"./server/src/keep_alive.rs":[592,592],"./server/src/keep_alive_tp.rs":[8983,8983],"./server/src/main.rs":[8128,8128],"./server/src/signals.rs":[7132,7132],"./server/src/ssl.rs":[151,151],"./server/src/workers.rs":[4012,4012],"./static-files/src/configuration.rs":[4031,4031],"./static-files/src/configuration_two.rs":[8861,8861],"./static-files/src/directory.rs":[4333,4333],"./static-files/src/main.rs":[7135,7135],"./testing/src/integration_one.rs":[179,6841],"./testing/src/integration_two.rs":[6720,6720],"./testing/src/main.rs":[4198,4198],"./testing/src/stream_response.rs":[926,926],"./url-dispatch/src/cfg.rs":[3146,3146],"./url-dispatch/src/dhandler.rs":[6692,6692],"./url-dispatch/src/guard.rs":[5052,5052],"./url-dispatch/src/guard2.rs":[8207,8207],"./url-dispatch/src/main.rs":[710,710],"./url-dispatch/src/minfo.rs":[813,813],"./url-dispatch/src/norm.rs":[966,966],"./url-dispatch/src/norm2.rs":[5315,5315],"./url-dispatch/src/path.rs":[3403,3403],"./url-dispatch/src/path2.rs":[9765,9765],"./url-dispatch/src/pbuf.rs":[3173,3173],"./url-dispatch/src/resource.rs":[960,960],"./url-dispatch/src/scope.rs":[8536,8536],"./url-dispatch/src/url_ext.rs":[2312,2312],"./url-dispatch/src/urls.rs":[4808,4808],"./websockets/src/main.rs":[1256,1256]};function a(e){if(!t.o(s,e))return Promise.resolve().then((()=>{var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}));var r=s[e],a=r[0];return t.e(r[1]).then((()=>t(a)))}a.keys=()=>Object.keys(s),a.id=2412,e.exports=a},3905:(e,r,t)=>{"use strict";t.d(r,{Zo:()=>d,kt:()=>u});var s=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,s)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,s,a=function(e,r){if(null==e)return{};var t,s,a={},n=Object.keys(e);for(s=0;s<n.length;s++)t=n[s],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)t=n[s],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=s.createContext({}),c=function(e){var r=s.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=c(e.components);return s.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return s.createElement(s.Fragment,{},r)}},m=s.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=c(t),u=a,h=m["".concat(l,".").concat(u)]||m[u]||p[u]||n;return t?s.createElement(h,i(i({ref:r},d),{},{components:t})):s.createElement(h,i({ref:r},d))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,i=new Array(n);i[0]=m;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<n;c++)i[c]=t[c];return s.createElement.apply(null,i)}return s.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2536:(e,r,t)=>{"use strict";t.d(r,{Z:()=>n});var s=t(7294),a=t(814);const n=e=>{let{example:r,file:n,section:i}=e;const[o,l]=(0,s.useState)("");return(0,s.useEffect)((()=>{let e=!0;return t(2412)(`./${r}/src/${n||"main.rs"}`).then((r=>{r=r.default.match(new RegExp(`// <${i}>\n([\\s\\S]*)// </${i}>`))[1],e&&l(r)})).catch((e=>console.log(e))),()=>{e=!1}}),[]),s.createElement(a.Z,{className:"language-rust"},o)}},2350:(e,r,t)=>{"use strict";t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var s=t(7462),a=(t(7294),t(3905)),n=t(2536);const i={title:"Middleware"},o="Middleware",l={unversionedId:"middleware",id:"middleware",title:"Middleware",description:"Actix Web's middleware system allows us to add additional behavior to request/response processing. Middleware can hook into an incoming request process, enabling us to modify requests as well as halt request processing to return a response early.",source:"@site/docs/middleware.md",sourceDirName:".",slug:"/middleware",permalink:"/docs/middleware",draft:!1,editUrl:"https://github.com/actix/actix-website/edit/master/docs/middleware.md",tags:[],version:"current",frontMatter:{title:"Middleware"},sidebar:"docs",previous:{title:"Testing",permalink:"/docs/testing"},next:{title:"Static Files",permalink:"/docs/static-files"}},c={},d=[{value:"Logging",id:"logging",level:2},{value:"Usage",id:"usage",level:3},{value:"Format",id:"format",level:3},{value:"Default headers",id:"default-headers",level:2},{value:"User sessions",id:"user-sessions",level:2},{value:"Error handlers",id:"error-handlers",level:2}],p={toc:d};function m(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,s.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"middleware"},"Middleware"),(0,a.kt)("p",null,"Actix Web's middleware system allows us to add additional behavior to request/response processing. Middleware can hook into an incoming request process, enabling us to modify requests as well as halt request processing to return a response early."),(0,a.kt)("p",null,"Middleware can also hook into response processing."),(0,a.kt)("p",null,"Typically, middleware is involved in the following actions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pre-process the Request"),(0,a.kt)("li",{parentName:"ul"},"Post-process a Response"),(0,a.kt)("li",{parentName:"ul"},"Modify application state"),(0,a.kt)("li",{parentName:"ul"},"Access external services (redis, logging, sessions)")),(0,a.kt)("p",null,"Middleware is registered for each ",(0,a.kt)("inlineCode",{parentName:"p"},"App"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"scope"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"Resource")," and executed in opposite order as registration. In general, a ",(0,a.kt)("em",{parentName:"p"},"middleware")," is a type that implements the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/actix-web/4/actix_web/dev/trait.Service.html"},(0,a.kt)("em",{parentName:"a"},"Service trait"))," and ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/actix-web/4/actix_web/dev/trait.Transform.html"},(0,a.kt)("em",{parentName:"a"},"Transform trait")),". Each method in the traits has a default implementation. Each method can return a result immediately or a ",(0,a.kt)("em",{parentName:"p"},"future")," object."),(0,a.kt)("p",null,"The following demonstrates creating a simple middleware:"),(0,a.kt)(n.Z,{example:"middleware",file:"main.rs",section:"simple",mdxType:"CodeBlock"}),(0,a.kt)("p",null,"Alternatively, for simple use cases, you can use ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/actix-web/4/actix_web/struct.App.html#method.wrap_fn"},(0,a.kt)("em",{parentName:"a"},"wrap_fn"))," to create small, ad-hoc middleware:"),(0,a.kt)(n.Z,{example:"middleware",file:"wrap_fn.rs",section:"wrap-fn",mdxType:"CodeBlock"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Actix Web provides several useful middleware, such as ",(0,a.kt)("em",{parentName:"p"},"logging"),", ",(0,a.kt)("em",{parentName:"p"},"user sessions"),", ",(0,a.kt)("em",{parentName:"p"},"compress"),", etc.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Warning: if you use ",(0,a.kt)("inlineCode",{parentName:"strong"},"wrap()")," or ",(0,a.kt)("inlineCode",{parentName:"strong"},"wrap_fn()")," multiple times, the last occurrence will be executed first.")),(0,a.kt)("h2",{id:"logging"},"Logging"),(0,a.kt)("p",null,"Logging is implemented as a middleware. It is common to register a logging middleware as the first middleware for the application. Logging middleware must be registered for each application."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Logger")," middleware uses the standard log crate to log information. You should enable logger for ",(0,a.kt)("em",{parentName:"p"},"actix_web")," package to see access log (",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/env_logger/*/env_logger/"},"env_logger")," or similar)."),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Create ",(0,a.kt)("inlineCode",{parentName:"p"},"Logger")," middleware with the specified ",(0,a.kt)("inlineCode",{parentName:"p"},"format"),". Default ",(0,a.kt)("inlineCode",{parentName:"p"},"Logger")," can be created with ",(0,a.kt)("inlineCode",{parentName:"p"},"default")," method, it uses the default format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ignore"},'  %a %t "%r" %s %b "%{Referer}i" "%{User-Agent}i" %T\n')),(0,a.kt)(n.Z,{example:"middleware",file:"logger.rs",section:"logger",mdxType:"CodeBlock"}),(0,a.kt)("p",null,"The following is an example of the default logging format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'INFO:actix_web::middleware::logger: 127.0.0.1:59934 [02/Dec/2017:00:21:43 -0800] "GET / HTTP/1.1" 302 0 "-" "curl/7.54.0" 0.000397\nINFO:actix_web::middleware::logger: 127.0.0.1:59947 [02/Dec/2017:00:22:40 -0800] "GET /index.html HTTP/1.1" 200 0 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:57.0) Gecko/20100101 Firefox/57.0" 0.000646\n')),(0,a.kt)("h3",{id:"format"},"Format"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"%%")," The percent sign"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"%a")," Remote IP-address (IP-address of proxy if using reverse proxy)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"%t")," Time when the request was started to process"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"%P")," The process ID of the child that serviced the request"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"%r")," First line of request"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"%s")," Response status code"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"%b")," Size of response in bytes, including HTTP headers"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"%T")," Time taken to serve the request, in seconds with floating fraction in .06f format"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"%D")," Time taken to serve the request, in milliseconds"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"%{FOO}i")," request.headers","['FOO']"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"%{FOO}o")," response.headers","['FOO']"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"%{FOO}e")," os.environ","['FOO']")),(0,a.kt)("h2",{id:"default-headers"},"Default headers"),(0,a.kt)("p",null,"To set default response headers, the ",(0,a.kt)("inlineCode",{parentName:"p"},"DefaultHeaders")," middleware can be used. The ",(0,a.kt)("em",{parentName:"p"},"DefaultHeaders")," middleware does not set the header if response headers already contain a specified header."),(0,a.kt)(n.Z,{example:"middleware",file:"default_headers.rs",section:"default-headers",mdxType:"CodeBlock"}),(0,a.kt)("h2",{id:"user-sessions"},"User sessions"),(0,a.kt)("p",null,"Actix Web provides a general solution for session management. The ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/actix-session/0.7/actix_session/"},(0,a.kt)("strong",{parentName:"a"},"actix-session"))," middleware can use multiple backend types to store session data."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"By default, only cookie session backend is implemented. Other backend implementations can be added.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/actix-session/0.7/actix_session/storage/struct.CookieSessionStore.html"},(0,a.kt)("strong",{parentName:"a"},"CookieSession"))," uses cookies as session storage. ",(0,a.kt)("inlineCode",{parentName:"p"},"CookieSessionBackend")," creates sessions which are limited to storing fewer than 4000 bytes of data, as the payload must fit into a single cookie. An internal server error is generated if a session contains more than 4000 bytes."),(0,a.kt)("p",null,"A cookie may have a security policy of ",(0,a.kt)("em",{parentName:"p"},"signed")," or ",(0,a.kt)("em",{parentName:"p"},"private"),". Each has a respective ",(0,a.kt)("inlineCode",{parentName:"p"},"CookieSession")," constructor."),(0,a.kt)("p",null,"A ",(0,a.kt)("em",{parentName:"p"},"signed")," cookie may be viewed but not modified by the client. A ",(0,a.kt)("em",{parentName:"p"},"private")," cookie may neither be viewed nor modified by the client."),(0,a.kt)("p",null,"The constructors take a key as an argument. This is the private key for cookie session - when this value is changed, all session data is lost."),(0,a.kt)("p",null,"In general, you create a ",(0,a.kt)("inlineCode",{parentName:"p"},"SessionStorage")," middleware and initialize it with specific backend implementation, such as a ",(0,a.kt)("inlineCode",{parentName:"p"},"CookieSession"),". To access session data the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/actix-session/0.7/actix_session/struct.Session.html"},(0,a.kt)("inlineCode",{parentName:"a"},"Session"))," extractor must be used. This method returns a ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/actix-session/0.7/actix_session/struct.Session.html"},(0,a.kt)("em",{parentName:"a"},"Session"))," object, which allows us to get or set session data."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"actix_session::storage::CookieSessionStore"),' is available on the crate feature "cookie-session".')),(0,a.kt)(n.Z,{example:"middleware",file:"user_sessions.rs",section:"user-session",mdxType:"CodeBlock"}),(0,a.kt)("h2",{id:"error-handlers"},"Error handlers"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ErrorHandlers")," middleware allows us to provide custom handlers for responses."),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"ErrorHandlers::handler()")," method to register a custom error handler for a specific status code. You can modify an existing response or create a completly new one. The error handler can return a response immediately or return a future that resolves into a response."),(0,a.kt)(n.Z,{example:"middleware",file:"errorhandler.rs",section:"error-handler",mdxType:"CodeBlock"}))}m.isMDXComponent=!0}}]);