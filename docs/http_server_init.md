---
title: HTTP 服务初始化
---

# 概述

下面的图是 HttpServer 初始化的过程，这个过程发生在下面的代码中

```rust
#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .route("/", web::to(|| HttpResponse::Ok()))
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}
```

![](/img/diagrams/http_server.svg)
