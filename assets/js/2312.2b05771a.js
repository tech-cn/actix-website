"use strict";(self.webpackChunkactix_website=self.webpackChunkactix_website||[]).push([[2312],{2312:(e,n,t)=>{t.r(n),t.d(n,{default:()=>s});const s='// <ext>\nuse actix_web::{get, App, HttpRequest, HttpServer, Responder};\n\n#[get("/")]\nasync fn index(req: HttpRequest) -> impl Responder {\n    let url = req.url_for("youtube", ["oHg5SJYRHA0"]).unwrap();\n    assert_eq!(url.as_str(), "https://youtube.com/watch/oHg5SJYRHA0");\n\n    url.to_string()\n}\n\n#[actix_web::main]\nasync fn main() -> std::io::Result<()> {\n    HttpServer::new(|| {\n        App::new()\n            .service(index)\n            .external_resource("youtube", "https://youtube.com/watch/{video_id}")\n    })\n    .bind(("127.0.0.1", 8080))?\n    .run()\n    .await\n}\n// </ext>\n'}}]);