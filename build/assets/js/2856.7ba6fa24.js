"use strict";(self.webpackChunkactix_website=self.webpackChunkactix_website||[]).push([[2856],{2856:(e,r,n)=>{n.r(r),n.d(r,{default:()=>s});const s='#![allow(dead_code)]\n\n// <error-handler>\nuse actix_web::middleware::{ErrorHandlerResponse, ErrorHandlers};\nuse actix_web::{\n    dev,\n    http::{header, StatusCode},\n    web, App, HttpResponse, HttpServer, Result,\n};\n\nfn add_error_header<B>(mut res: dev::ServiceResponse<B>) -> Result<ErrorHandlerResponse<B>> {\n    res.response_mut().headers_mut().insert(\n        header::CONTENT_TYPE,\n        header::HeaderValue::from_static("Error"),\n    );\n\n    Ok(ErrorHandlerResponse::Response(res.map_into_left_body()))\n}\n\n#[actix_web::main]\nasync fn main() -> std::io::Result<()> {\n    HttpServer::new(|| {\n        App::new()\n            .wrap(\n                ErrorHandlers::new()\n                    .handler(StatusCode::INTERNAL_SERVER_ERROR, add_error_header),\n            )\n            .service(web::resource("/").route(web::get().to(HttpResponse::InternalServerError)))\n    })\n    .bind(("127.0.0.1", 8080))?\n    .run()\n    .await\n}\n// </error-handler>\n'}}]);