---
title: 响应
---

import CodeBlock from "@site/src/components/code_block.js";

# 响应

使用类似构建器模式来构建 `HttpResponse` 实例。`HttpResponse` 提供了几种用于构建响应的便捷方法，这些方法首先会返回 `HttpResponseBuilder` 实例。

> 查看 [文档][responsebuilder] 了解更多说明。

使用 `.body`，`.finish`， 和 `.json` 方法来构建 _HttpResponse_ 实例。如果这些方法在构建器上被多次调用，构建器会触发 panic。

<CodeBlock example="responses" file="main.rs" section="builder" />

## JSON 格式的响应

`Json` 类型的响应返回格式良好的 JSON数据：只需返回一个 `Json<T>` 类型的值，其中泛型 `T` 是可以序列化为 _JSON_ 的结构体。泛型 `T` 必须实现了 _serde_ 的 `Serialize` 特质。

要使下面的示例生肖，需要在 `Cargo.toml` 中添加将 `serde` 依赖：

```toml
[dependencies]
serde = { version = "1.0", features = ["derive"] }
```

<CodeBlock example="responses" file="json_resp.rs" section="json-resp" />

再处理函数上返回 `Json` 作为返回值，而不是调用 `HttpResponse` 的方法 `.json`，会更容易明白该请求返回的是 JSON 格式的数据，而不是其他类型。

## 响应内容编码

Actix Web 使用 [_Compress middleware_][compressmidddleware] 自动压缩响应体。支持以下编解码器：

- Brotli
- Gzip
- Deflate
- Identity

响应头中 `Content-Encoding` 的值默认为 `ContentEncoding::Auto`，它会根据请求头中的 `Accept-Encoding` 来自动选择压缩方式。

<CodeBlock example="responses" file="auto.rs" section="auto" />

将 `Content-Encoding` 的值设置为 `Identity`，明确禁用响应内容压缩：

<CodeBlock example="responses" file="identity.rs" section="identity" />

当处理已经被压缩的内容时（例如，预压缩的资源），需要手动设置 `Content-Encoding` 头来绕过中间件：

<CodeBlock example="responses" file="identity_two.rs" section="identity-two" />

[responsebuilder]: https://docs.rs/actix-web/4/actix_web/struct.HttpResponseBuilder.html
[compressmidddleware]: https://docs.rs/actix-web/4/actix_web/middleware/struct.Compress.html
