---
title: 请求处理
---

import CodeBlock from "@site/src/components/code_block.js";

# 请求处理

一个请求处理函数是一个异步函数，它接受零个或多个参数，这些参数可以从请求中提取出来（即 [_impl FromRequest_][implfromrequest]），并返回一个可以转换为 HttpResponse 的类型（即 [_impl Responder_][respondertrait]）。

请求处理将会发生两个阶段。首先调用处理函数，返回任何实现了 [_Responder_][respondertrait] 特质的对象。然后，在返回的对象上调用 `respond_to()`，将其转换为 `HttpResponse` 或 `Error`。

默认 actix-web 为一些标准类型提供了 `Responder` 实现，例如 `&'static str`、`String` 等。

> 有关实现的完整列表，请查看 [_Responder 文档_][responderimpls]。

处理函数的一些例子：

```rust
async fn index(_req: HttpRequest) -> &'static str {
    "Hello world!"
}
```

```rust
async fn index(_req: HttpRequest) -> String {
    "Hello world!".to_owned()
}
```

你也可以将函数改为返回 `impl Responder`，如果涉及到更复杂的类型，这种方式也很好用。

```rust
async fn index(_req: HttpRequest) -> impl Responder {
    web::Bytes::from_static(b"Hello world!")
}
```

```rust
async fn index(req: HttpRequest) -> Box<Future<Item=HttpResponse, Error=Error>> {
    ...
}
```

## 使用自定义类型响应

要直接从处理函数返回自定义类型，该类型需要实现 `Responder` 特质。

让我们创建一个响应内容为 `application/json` 的自定义类型响应：

<CodeBlock example="responder-trait" file="main.rs" section="responder-trait" />

## 流式响应体

响应体可以异步生成。在这个例子中，响应体必须实现特质 `Stream<Item=Bytes, Error=Error>`，即：

<CodeBlock example="async-handlers" file="stream.rs" section="stream" />

## 不同的返回类型（Either）

有时，你需要返回不同类型的响应。例如，你可以对错误进行检查并返回错误，返回异步响应，或者任何需要两种不同类型的结果的情况。

在下面的例子中，返回 [Either][either] 类型。`Either` 允许将两种不同的响应类型组合成一个类型。

<CodeBlock example="either" file="main.rs" section="either" />

[implfromrequest]: https://docs.rs/actix-web/4/actix_web/trait.FromRequest.html
[respondertrait]: https://docs.rs/actix-web/4/actix_web/trait.Responder.html
[responderimpls]: https://docs.rs/actix-web/4/actix_web/trait.Responder.html#foreign-impls
[either]: https://docs.rs/actix-web/4/actix_web/enum.Either.html
