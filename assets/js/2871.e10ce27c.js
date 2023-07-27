"use strict";(self.webpackChunkactix_website=self.webpackChunkactix_website||[]).push([[2871],{2871:(e,r,n)=>{n.r(r),n.d(r,{default:()=>s});const s='pub mod default_headers;\npub mod errorhandler;\npub mod logger;\npub mod user_sessions;\npub mod wrap_fn;\n\n// <simple>\nuse std::future::{ready, Ready};\n\nuse actix_web::{\n    dev::{forward_ready, Service, ServiceRequest, ServiceResponse, Transform},\n    Error,\n};\nuse futures_util::future::LocalBoxFuture;\n\n// There are two steps in middleware processing.\n// 1. Middleware initialization, middleware factory gets called with\n//    next service in chain as parameter.\n// 2. Middleware\'s call method gets called with normal request.\npub struct SayHi;\n\n// Middleware factory is `Transform` trait\n// `S` - type of the next service\n// `B` - type of response\'s body\nimpl<S, B> Transform<S, ServiceRequest> for SayHi\nwhere\n    S: Service<ServiceRequest, Response = ServiceResponse<B>, Error = Error>,\n    S::Future: \'static,\n    B: \'static,\n{\n    type Response = ServiceResponse<B>;\n    type Error = Error;\n    type InitError = ();\n    type Transform = SayHiMiddleware<S>;\n    type Future = Ready<Result<Self::Transform, Self::InitError>>;\n\n    fn new_transform(&self, service: S) -> Self::Future {\n        ready(Ok(SayHiMiddleware { service }))\n    }\n}\n\npub struct SayHiMiddleware<S> {\n    service: S,\n}\n\nimpl<S, B> Service<ServiceRequest> for SayHiMiddleware<S>\nwhere\n    S: Service<ServiceRequest, Response = ServiceResponse<B>, Error = Error>,\n    S::Future: \'static,\n    B: \'static,\n{\n    type Response = ServiceResponse<B>;\n    type Error = Error;\n    type Future = LocalBoxFuture<\'static, Result<Self::Response, Self::Error>>;\n\n    forward_ready!(service);\n\n    fn call(&self, req: ServiceRequest) -> Self::Future {\n        println!("Hi from start. You requested: {}", req.path());\n\n        let fut = self.service.call(req);\n\n        Box::pin(async move {\n            let res = fut.await?;\n\n            println!("Hi from response");\n            Ok(res)\n        })\n    }\n}\n// </simple>\n\n#[actix_web::main]\nasync fn main() -> std::io::Result<()> {\n    use actix_web::{web, App, HttpServer};\n\n    HttpServer::new(|| {\n        App::new().wrap(SayHi).service(\n            web::resource("/").to(|| async {\n                "Hello, middleware! Check the console where the server is run."\n            }),\n        )\n    })\n    .bind(("127.0.0.1", 8080))?\n    .run()\n    .await\n}\n'}}]);