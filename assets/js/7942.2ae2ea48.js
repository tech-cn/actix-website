"use strict";(self.webpackChunkactix_website=self.webpackChunkactix_website||[]).push([[7942],{7942:(e,n,r)=>{r.r(n),r.d(n,{default:()=>t});const t='// <recommend-one>\nuse actix_web::{\n    error, get,\n    http::{header::ContentType, StatusCode},\n    App, HttpResponse, HttpServer,\n};\nuse derive_more::{Display, Error};\n\n#[derive(Debug, Display, Error)]\nenum UserError {\n    #[display(fmt = "Validation error on field: {}", field)]\n    ValidationError { field: String },\n}\n\nimpl error::ResponseError for UserError {\n    fn error_response(&self) -> HttpResponse {\n        HttpResponse::build(self.status_code())\n            .insert_header(ContentType::html())\n            .body(self.to_string())\n    }\n    fn status_code(&self) -> StatusCode {\n        match *self {\n            UserError::ValidationError { .. } => StatusCode::BAD_REQUEST,\n        }\n    }\n}\n// </recommend-one>\n\n#[get("/")]\nasync fn index() -> Result<&\'static str, UserError> {\n    Err(UserError::ValidationError {\n        field: "bad stuff".to_string(),\n    })\n}\n\n#[actix_web::main]\nasync fn main() -> std::io::Result<()> {\n    HttpServer::new(|| App::new().service(index))\n        .bind(("127.0.0.1", 8080))?\n        .run()\n        .await\n}\n'}}]);