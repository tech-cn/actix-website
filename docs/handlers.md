---
title: 处理器
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

You can also change the signature to return `impl Responder` which works well if more complex types are involved.

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

## Response with custom type

To return a custom type directly from a handler function, the type needs to implement the `Responder` trait.

Let's create a response for a custom type that serializes to an `application/json` response:

<CodeBlock example="responder-trait" file="main.rs" section="responder-trait" />

## Streaming response body

Response body can be generated asynchronously. In this case, body must implement the stream trait `Stream<Item=Bytes, Error=Error>`, i.e.:

<CodeBlock example="async-handlers" file="stream.rs" section="stream" />

## Different return types (Either)

Sometimes, you need to return different types of responses. For example, you can error check and return errors, return async responses, or any result that requires two different types.

For this case, the [Either][either] type can be used. `Either` allows combining two different responder types into a single type.

<CodeBlock example="either" file="main.rs" section="either" />

[implfromrequest]: https://docs.rs/actix-web/4/actix_web/trait.FromRequest.html
[respondertrait]: https://docs.rs/actix-web/4/actix_web/trait.Responder.html
[responderimpls]: https://docs.rs/actix-web/4/actix_web/trait.Responder.html#foreign-impls
[either]: https://docs.rs/actix-web/4/actix_web/enum.Either.html
