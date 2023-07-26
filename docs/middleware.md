---
title: 中间件
---

import CodeBlock from "@site/src/components/code_block.js";

# 中间件

Axtix Web 的中间件系统允许我们为请求/响应处理添加额外的行为。中间件可以嵌入到请求的处理中，使我们能够修改请求以及停止请求处理以提前返回响应。

中间件也可以嵌入到响应处理中。

通常，中间件涉及以下操作：

- 预处理请求（Pre-process）
- 后处理响应（Post-process）
- 修改应用状态
- 访问外部服务（redis、日志、sessions）

中间件被注册在每个 `App`，`scope`，或 `Resource`，并会按照注册顺序的相反顺序执行。一般来说，_中间件_ 是实现了 [_Service 特质_][servicetrait] 和 [_Transform 特质_][transformtrait] 的类型。特质中的每个方法都有一个默认实现。每个方法都可以立即返回结果或一个 _future_ 对象。

下面的演示中创建了一个简单的中间件：

<CodeBlock example="middleware" file="main.rs" section="simple" />

另外，对于简单的使用，你可以使用 [_wrap_fn_][wrap_fn] 创建小型的临时中间件：

<CodeBlock example="middleware" file="wrap_fn.rs" section="wrap-fn" />

> Actix Web 提供了一些有用的中间件，例如 _logging_、_user sessions_、_compress_ 等。

**提醒：如果多次使用 `wrap()` 或 `wrap_fn()`，最后一次出现的内容将被优先执行。**

## 日志

日志作为中间件实现。通常将日志中间件注册为应用的第一个中间件。每个应用都必须注册日志中间件。

`Logger` 中间件使用标准的日志库记录信息。要查看访问日志，应启用 _actix_web_ 包的日志配置（[env_logger][envlogger] 或类似）。

### 使用

使用指定的 `format` 创建 `Logger` 中间件。可使用 `default` 方法创建默认的 `Logger` 中间件，它使用默认的格式：

```ignore
  %a %t "%r" %s %b "%{Referer}i" "%{User-Agent}i" %T
```

<CodeBlock example="middleware" file="logger.rs" section="logger" />

以下是默认日志格式的示例：

```
INFO:actix_web::middleware::logger: 127.0.0.1:59934 [02/Dec/2017:00:21:43 -0800] "GET / HTTP/1.1" 302 0 "-" "curl/7.54.0" 0.000397
INFO:actix_web::middleware::logger: 127.0.0.1:59947 [02/Dec/2017:00:22:40 -0800] "GET /index.html HTTP/1.1" 200 0 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:57.0) Gecko/20100101 Firefox/57.0" 0.000646
```

### 格式化

- `%%` 百分号
- `%a` 远程 IP 地址（使用反向代理时的代理 IP 地址）
- `%t` 请求开始处理的时间
- `%P` 处理请求的进程ID
- `%r` 请求报文的第一行
- `%s` 响应状态码
- `%b` 响应内容的字节数（bytes），包括 HTTP 头部
- `%T` 处理请求消耗的时间，以秒为单位，按照 .06f 的格式表示
- `%D` Time taken to serve the request, in milliseconds
- `%{FOO}i` 请求头 'FOO' 的值
- `%{FOO}o` 响应头 'FOO' 的值
- `%{FOO}e` 系统环境变量 'FOO' 的值（os.environ['FOO']）

## 默认的头部信息

要想设置默认的响应头，可以使用 `DefaultHeaders` 中间件。如果响应头中已经包含了指定的 header，_DefaultHeaders_ 中间件不会覆盖这个 header 的值。

<CodeBlock example="middleware" file="default_headers.rs" section="default-headers" />

## 用户会话（sessions）

Actix Web 提供了会话管理的通用解决方案。[**actix-session**][actixsession] 中间件可以使用多种方式来存储会话数据。

> 默认情况下，只实现了 cookie 会话后端。也可以添加其他实现。

[**CookieSession**][cookiesession] 使用 cookies 存储 session。`CookieSessionBackend` 创建的会话只能存储少于 4000 字节的数据，因为数据需要容纳到一个单独的 cookie 中。如果会话数据超过 4000 字节，将会产生内部服务器错误。

cookie 的安全策略可以是 _signed_ 或 _private_。每种策略都有一个相应的 `CookieSession` 构造函数。

客户端可以查看但不能修改安全策略为 _signed_ 的 cookie。客户端既不能查看也不能修改安全策略为 _private_ 的 cookie。

构造函数需要提供一个 key 作为参数。这是 cookie 会话的私钥 - 当这个值被修改时，所有的会话数据都会丢失。

一般来说，你需要创建一个 `SessionStorage` 中间件，并用特定的实现（如 `CookieSession`）对其进行初始化。必须使用 [`Session`][requestession] 提取器访问会话数据。该方法返回一个 [_Session_][sessionobj]对象，允许我们获取或设置会话数据。

> 要使用`actix_session::Session`，需要指定 crate feature "cookie-session"。

<CodeBlock example="middleware" file="user_sessions.rs" section="user-session" />

## 错误处理

`ErrorHandlers` 中间件允许我们为响应提供自定义的处理。

你可以使用 `ErrorHandlers::handler()` 方法为特定的状态码注册自定义的错误处理。在这个错误处理中你可以修改现有的响应或创建一个全新的响应。错误处理程序可以立即返回响应，也可以返回一个 future。

<CodeBlock example="middleware" file="errorhandler.rs" section="error-handler" />

[sessionobj]: https://docs.rs/actix-session/0.7/actix_session/struct.Session.html
[requestsession]: https://docs.rs/actix-session/0.7/actix_session/struct.Session.html
[cookiesession]: https://docs.rs/actix-session/0.7/actix_session/storage/struct.CookieSessionStore.html
[actixsession]: https://docs.rs/actix-session/0.7/actix_session/
[envlogger]: https://docs.rs/env_logger/*/env_logger/
[servicetrait]: https://docs.rs/actix-web/4/actix_web/dev/trait.Service.html
[transformtrait]: https://docs.rs/actix-web/4/actix_web/dev/trait.Transform.html
[wrap_fn]: https://docs.rs/actix-web/4/actix_web/struct.App.html#method.wrap_fn
