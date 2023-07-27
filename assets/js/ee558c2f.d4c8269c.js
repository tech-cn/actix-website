"use strict";(self.webpackChunkactix_website=self.webpackChunkactix_website||[]).push([[8626],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),l=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},p=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=l(n),m=a,x=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(x,s(s({ref:e},p),{},{components:n})):r.createElement(x,s({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4320:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={title:"Context",slug:"/actix/context"},s="Context",i={unversionedId:"actix/sec-4-context",id:"actix/sec-4-context",title:"Context",description:"Actors all maintain an internal execution context, or state. This",source:"@site/docs/actix/sec-4-context.md",sourceDirName:"actix",slug:"/actix/context",permalink:"/docs/actix/context",draft:!1,editUrl:"https://github.com/actix/actix-website/edit/master/docs/actix/sec-4-context.md",tags:[],version:"current",frontMatter:{title:"Context",slug:"/actix/context"},sidebar:"docs",previous:{title:"Address",permalink:"/docs/actix/address"},next:{title:"Arbiter",permalink:"/docs/actix/arbiter"}},c={},l=[{value:"Mailbox",id:"mailbox",level:2},{value:"Getting your actors Address",id:"getting-your-actors-address",level:2},{value:"Stopping an Actor",id:"stopping-an-actor",level:2}],p={toc:l};function d(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"context"},"Context"),(0,a.kt)("p",null,"Actors all maintain an internal execution context, or state. This\nallows an actor to determine its own Address, change mailbox limits,\nor stop its execution."),(0,a.kt)("h2",{id:"mailbox"},"Mailbox"),(0,a.kt)("p",null,"All messages go to the actor's mailbox first, then the actor's execution context\ncalls specific message handlers. Mailboxes in general are bounded. The capacity is\nspecific to the context implementation. For the ",(0,a.kt)("inlineCode",{parentName:"p"},"Context")," type the capacity is set to\n16 messages by default and can be increased with ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/actix/latest/actix/struct.Context.html#method.set_mailbox_capacity"},(0,a.kt)("inlineCode",{parentName:"a"},"Context::set_mailbox_capacity()")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"struct MyActor;\n\nimpl Actor for MyActor {\n    type Context = Context<Self>;\n\n    fn started(&mut self, ctx: &mut Self::Context) {\n        ctx.set_mailbox_capacity(1);\n    }\n}\n\nlet addr = MyActor.start();\n")),(0,a.kt)("p",null,"Remember that this doesn't apply to ",(0,a.kt)("inlineCode",{parentName:"p"},"Addr::do_send(M)")," which bypasses the Mailbox queue limit, or\n",(0,a.kt)("inlineCode",{parentName:"p"},"AsyncContext::notify(M)")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"AsyncContext::notify_later(M, Duration)")," which bypasses the mailbox\nentirely."),(0,a.kt)("h2",{id:"getting-your-actors-address"},"Getting your actors Address"),(0,a.kt)("p",null,"An actor can view its own address from its context. Perhaps you want to requeue an event for\nlater, or you want to transform the message type. Maybe you want to respond with your address\nto a message. If you want an actor to send a message to itself, have a look at\n",(0,a.kt)("inlineCode",{parentName:"p"},"AsyncContext::notify(M)")," instead."),(0,a.kt)("p",null,"To get your address from the context you call ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/actix/latest/actix/struct.Context.html#method.address"},(0,a.kt)("inlineCode",{parentName:"a"},"Context::address()")),". An example is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"struct MyActor;\n\nstruct WhoAmI;\n\nimpl Message for WhoAmI {\n    type Result = Result<actix::Addr<MyActor>, ()>;\n}\n\nimpl Actor for MyActor {\n    type Context = Context<Self>;\n}\n\nimpl Handler<WhoAmI> for MyActor {\n    type Result = Result<actix::Addr<MyActor>, ()>;\n\n    fn handle(&mut self, msg: WhoAmI, ctx: &mut Context<Self>) -> Self::Result {\n        Ok(ctx.address())\n    }\n}\n\nlet who_addr = addr.do_send(WhoAmI{});\n")),(0,a.kt)("h2",{id:"stopping-an-actor"},"Stopping an Actor"),(0,a.kt)("p",null,"From within the actors execution context you can choose to stop the actor from processing\nany future Mailbox messages. This could be in response to an error condition, or as part\nof program shutdown. To do this you call ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/actix/latest/actix/struct.Context.html#method.stop"},(0,a.kt)("inlineCode",{parentName:"a"},"Context::stop()")),"."),(0,a.kt)("p",null,"This is an adjusted Ping example that stops after 4 pings are received."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'impl Handler<Ping> for MyActor {\n    type Result = usize;\n\n    fn handle(&mut self, msg: Ping, ctx: &mut Context<Self>) -> Self::Result {\n        self.count += msg.0;\n\n        if self.count > 5 {\n            println!("Shutting down ping receiver.");\n            ctx.stop()\n        }\n\n        self.count\n    }\n}\n\n#[actix_rt::main]\nasync fn main() {\n    // start new actor\n    let addr = MyActor { count: 10 }.start();\n\n    // send message and get future for result\n    let addr_2 = addr.clone();\n    let res = addr.send(Ping(6)).await;\n\n    match res {\n        Ok(_) => assert!(addr_2.try_send(Ping(6)).is_err()),\n        _ => {}\n    }\n}\n')))}d.isMDXComponent=!0}}]);