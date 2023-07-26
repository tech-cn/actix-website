---
title: 错误处理
---

import CodeBlock from "@site/src/components/code_block.js";

# 错误处理

Actix Web 使用自己的 [`actix_web::error::Error`][actixerror] 类型和 [`actix_web::error::ResponseError`][responseerror] 特质来处理请求过程中的错误。

如果一个请求处理函数返回包含了 `Error`（）的 `Result`，并且这个 `Error` 也实现了 `ResponseError` 特质，actix-web 会将错误渲染为一个携带相应 [`actix_web::http::StatusCode`][status_code] 的 HTTP 响应。内部的服务错误定义如下：

```rust
pub trait ResponseError {
    fn error_response(&self) -> Response<Body>;
    fn status_code(&self) -> StatusCode;
}
```

`Responder` 会将 `Result` 转换为 HTTP 响应：

```rust
impl<T: Responder, E: Into<Error>> Responder for Result<T, E>
```

上面代码中的 `Error` 是 actix-web 的错误定义，任何实现了 `ResponseError` 特质的错误都可以自动转换为 `Error`。

Actix Web 为一些常见的非 actix 错误提供了 `ResponseError` 的实现。例如，如果一个处理函数返回了 `io::Error`，那么这个错误会被转换为 `HttpInternalServerError`：

```rust
use std::io;
use actix_files::NamedFile;

fn index(_req: HttpRequest) -> io::Result<NamedFile> {
    Ok(NamedFile::open("static/index.html")?)
}
```

有关 `ResponseError` 实现的完整列表，请参阅 [actix-web API 文档][responseerrorimpls]。

## 自定义错误响应示例

这是一个实现 `ResponseError` 的示例，使用 [derive_more] 包声明式地实现错误枚举。

<CodeBlock example="errors" file="main.rs" section="response-error" />

`ResponseError` 有一个默认的 `error_response()` 实现，它会渲染出 _500_（内部服务器错误）的 HTTP 响应，这就是上面的 `index` 处理函数执行时会发生的事情。

重写 `error_response()` 以产生更有用的结果：

<CodeBlock example="errors" file="override_error.rs" section="override" />

## 错误辅助函数

Actix Web 提供了一组错误辅助函数，可用于从其他错误生成特定的 HTTP 错误码。这里我们使用 `map_err` 将未实现 `ResponseError` 特质的 `MyError` 转换为 _400_（错误请求）：

<CodeBlock example="errors" file="helpers.rs" section="helpers" />

查看 [actix-web `error` 模块的 API 文档][actixerror]，了解错误辅助函数的完整列表。

## 错误日志

Actix 对所有错误的日志级别是 `WARN`。如果应用的日志级别设置为 `DEBUG`，并且启用了 `RUST_BACKTRACE`，则还会记录回溯信息。这些可以通过环境变量进行配置：

```
>> RUST_BACKTRACE=1 RUST_LOG=actix_web=debug cargo run
```
如果有的话，`Error` 会使用造成错误的回溯信息。如果底层的错误没有提供回溯信息，则会构造一个新的回溯信息，指向转换发生的位置（而不是错误的源点）。

## 推荐的错误处理方式

可以把应用产生的错误分为两大类：一类是面向用户的，另一类是面向程序的。

对于面向用户的错误的的一个例子是，可以提供一个 `UserError` 枚举，该枚举封装了 `ValidationError`，每当用户发送错误输入时就会返回：

<CodeBlock example="errors" file="recommend_one.rs" section="recommend-one" />

这将完全按照预期运行，使用 `display` 定义的错误信息是以明确的用户阅读意图编写的。

然而，并不是所有的错误都要发送到客户端 -- 服务器会出现很多故障，我们希望对用户隐藏具体信息。例如，数据库宕机，客户端产生连接超时错误，或者 HTML 模板格式错误。在这些情况下，最好将错误映射到适合用户阅读的通用错误中。

下面是一个将内部错误映射到 `InternalError` 的示例，该错误会向用户显示一个友好的消息：

<CodeBlock example="errors" file="recommend_two.rs" section="recommend-two" />

通过将错误分为面向用户的错误和面向程序的错误，我们可以确保不会意外地将应用程序内部的用户不应该看到的的错误暴露给用户。

## 错误日志

这是一个使用 `middleware::Logger` 的基本示例，依赖于 `env_logger` 和 `log`：

```toml
[dependencies]
env_logger = "0.8"
log = "0.4"
```

<CodeBlock example="errors" file="logging.rs" section="logging" />

[actixerror]: https://docs.rs/actix-web/4/actix_web/error/struct.Error.html
[errorhelpers]: https://docs.rs/actix-web/4/actix_web/trait.ResponseError.html
[derive_more]: https://crates.io/crates/derive_more
[responseerror]: https://docs.rs/actix-web/4/actix_web/error/trait.ResponseError.html
[responseerrorimpls]: https://docs.rs/actix-web/4/actix_web/error/trait.ResponseError.html#foreign-impls
[stderror]: https://doc.rust-lang.org/std/error/trait.Error.html
[status_code]: https://docs.rs/actix-web/4/actix_web/http/struct.StatusCode.html
