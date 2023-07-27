"use strict";(self.webpackChunkactix_website=self.webpackChunkactix_website||[]).push([[1819],{1819:(n,e,t)=>{t.r(e),t.d(e,{default:()=>s});const s='// <json-resp>\nuse actix_web::{get, web, Responder, Result};\nuse serde::Serialize;\n\n#[derive(Serialize)]\nstruct MyObj {\n    name: String,\n}\n\n#[get("/a/{name}")]\nasync fn index(name: web::Path<String>) -> Result<impl Responder> {\n    let obj = MyObj {\n        name: name.to_string(),\n    };\n    Ok(web::Json(obj))\n}\n\n#[actix_web::main]\nasync fn main() -> std::io::Result<()> {\n    use actix_web::{App, HttpServer};\n\n    HttpServer::new(|| App::new().service(index))\n        .bind(("127.0.0.1", 8080))?\n        .run()\n        .await\n}\n// </json-resp>\n'}}]);