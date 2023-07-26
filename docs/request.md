---
title: 请求
---

import CodeBlock from "@site/src/components/code_block.js";

# JSON 请求

对于 Json 格式请求提的反序列化，有几种选择。

第一种方式是使用 _Json_ 提取器。首先，定义一个接受 `Json<T>` 作为参数的请求处理函数，然后使用 `.to()` 方法注册该处理函数。也可以使用 `serde_json::Value` 类型接受任意有效的 json 对象。

第一处理方式的 `JSON Request` 依赖于 `serde`:

```toml
[dependencies]
serde = { version = "1.0", features = ["derive"] }
```

第二种处理方式的 `JSON Request` 依赖于 `serde` 和 `serde_json` 和 `futures`：

```toml
[dependencies]
serde = { version = "1.0", features = ["derive"] }
serde_json = "1"
futures = "0.3"
```

如果你想给某个字段添加默认值，可以参考 `serde` 的[文档](https://serde.rs/attr-default.html)。

<CodeBlock example="requests" file="main.rs" section="json-request" />

你也可以将请求体加载到内存中，然后反序列化。

在接下来的例子中，我们将反序列化 `MyObj` 结构体。我们需要先加载请求体，然后将反序列化 json 数据 为一个对象。

<CodeBlock example="requests" file="manual.rs" section="json-manual" />

> 包含所有配置的完整例子可以在 [examples 目录][examples]中找到。

## Content Encoding

Actix Web 自动解压缩请求体。支持以下编解码器：

- Brotli
- Gzip
- Deflate
- Zstd

如果请求头中包含 `Content-Encoding`，则根据其值解压缩请求体。不支持多个编解码器，例如：`Content-Encoding: br, gzip`。

## Chunked transfer encoding

Actix 将会自动解码 _chunked_。[`web::Payload`][payloadextractor] 提取器已经包含了解码后的字节流。如果请求体使用支持的压缩编解码器（br, gzip, deflate）压缩，则字节流会被解压缩。

## Multipart 请求

Actix Web 通过 [`actix-multipart`][multipartcrate] 包提供对 multipart 请求的支持。

> 一个完整的示例可以在 [examples 目录][multipartexample]中找到。

## Urlencoded 请求

Actix Web 提供了对 `application/x-www-form-urlencoded` 编码的请求体的支持，使用 [`web::Form`][formencoded] 提取器，它会解析并反序列化到实例。实例必须实现 _serde_ 的 `Deserialize` 特质。

在某些情况下，_UrlEncoded_ 功能可能会失败：

- Content-Type 不是 `application/x-www-form-urlencoded`。
- 传输使用的编码是 `chunked`。
- 请求内容的大小大于 256k。
- 负载错误终止。

<CodeBlock example="requests" file="urlencoded.rs" section="urlencoded" />

## 流式请求

_HttpRequest_ 是一个 `Bytes` 流。它可以用来读取请求体的负载。

在下面的例子中，我们读取并打印请求负载的每个块：

<CodeBlock example="requests" file="streaming.rs" section="streaming" />

[examples]: https://github.com/actix/examples/tree/master/json/json
[multipartstruct]: https://docs.rs/actix-multipart/0.2/actix_multipart/struct.Multipart.html
[fieldstruct]: https://docs.rs/actix-multipart/0.2/actix_multipart/struct.Field.html
[multipartexample]: https://github.com/actix/examples/tree/master/forms/multipart
[urlencoded]: https://docs.rs/actix-web/4/actix_web/dev/struct.UrlEncoded.html
[payloadextractor]: https://docs.rs/actix-web/4/actix_web/web/struct.Payload.html
[multipartcrate]: https://crates.io/crates/actix-multipart
[formencoded]: https://docs.rs/actix-web/4/actix_web/web/struct.Form.html
