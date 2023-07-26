---
title: Application
---

import CodeBlock from "@site/src/components/code_block.js";

# 编写一个应用

`actix-web` 提供了各种原语来使用 Rust 构建 Web 服务器和应用。它提供路由、中间件、请求预处理、响应后处理等功能。

所有的 `actix-web` 服务都是围绕 [`App`][app] 实例构建的。它用于注册路由和中间件。在同一作用域内，还可以存储所有处理程序之间共享的状态或变量。

一个 [`scope`][scope] 是所有路由的命名空间，也就是说，特定作用域的所有路由都有相同的 url 路径前缀。路由的路径前缀始终包含一个前导 "/" 斜杠。如果提供的前缀不包含前导斜杠，则会自动插入。前缀应该由值路径段组成。

> 对于作用域 `/app`，任何路径为 `/app`、`/app/` 或 `/app/test` 的请求都会匹配；但是，路径 `/application` 不会匹配。

<CodeBlock example="application" file="app.rs" section="setup" />

在这个例子中，创建了一个带有 `/app` 前缀和 `index.html` 资源的应用。这个资源可以通过 `/app/index.html` url 访问。

> 要获得更多信息，可以查看 [URL Dispatch][usingappprefix] 章节。

## 状态

状态是应用内所有路由和资源共享的。状态可以通过 [`web::Data<T>`][data] 提取器访问，其中 `T` 是状态的类型。状态也可以被中间件访问。

让我们编写一个简单的应用，并将应用名称存储在状态中：

<CodeBlock example="application" file="state.rs" section="setup" />

接下来，当初始化应用时，将状态传递给应用并启动应用：

<CodeBlock example="application" file="state.rs" section="start_app" />

可在应用中创建任意数量的状态。

## 共享可变状态

`HttpServer` 接收应用工厂而不是应用实例。`HttpServer` 为每个线程构造一个应用实例。因此，应用的数据会被多次构造。如果需要在不同的线程之间共享数据，应该使用可共享的对象，例如 `Send` + `Sync`。

在内部，[`web::Data`][data] 使用 `Arc`。因此，为了避免创建两个 `Arc`，我们应该在注册之前创建我们的数据，使用 [`App::app_data()`][appdata]。

在接下来的例子中，我们将编写一个具有可变、共享状态的应用。首先，我们定义我们的状态并创建我们的处理程序：

<CodeBlock example="application" file="mutable_state.rs" section="setup_mutable" />

在 `App` 中注册数据：

<CodeBlock example="application" file="mutable_state.rs" section="make_app_mutable" />

关键点：
- 在 `HttpServer::new` 必报内初始化的状态是工作线程的本地状态，如果修改可能会导致线程之间不一致。
- 要实现 _全局共享状态_，必须再 `HttpServer::new` 闭包之外创建它，并将其移动/克隆到 `HttpServer::new` 中。

## 使用作用域组织应用

[`web::scope()`][webscope] 方法允许设置资源组前缀。这个前缀将被添加的所有资源的模式之前。这可用于帮助将一组路由挂载到与开发者意图不同的位置，同时仍保持相同的资源名称。

例如:

<CodeBlock example="application" file="scope.rs" section="scope" />

在上面的例子中，`show_users` 路由的有效路由模式将是 `/users/show` 而不是 `/show`，因为应用的作用域参数将被添加到模式之前。然后，只有当 URL 路径为 `/users/show` 时，该路由才会匹配，当使用路由名称 `show_users` 调用 [`HttpRequest.url_for()`][urlfor] 函数时，它将生成具有相同路径的 URL。

## Application guards and virtual hosting

你可以把路由守卫视为一个简单的函数，它接受 _request_ 对应的引用并返回 _true_ 或 _false_。从形式上讲，一个路由守卫是任何实现了 [`Guard`][guardtrait] 特质的对象。Actix Web 提供了几个路由守卫。你可以查看 API 文档的 [functions 章节][guardfuncs]。

[`Host`][guardheader] 是所提供的路由守卫之一。它可用作基于请求头信息的过滤器。

<CodeBlock example="application" file="vh.rs" section="vh" />

## 配置

为了简化和重用，[`App`][appconfig] 和 [`web::Scope`][webscopeconfig] 都提供了 `configure` 方法。这个函数对于将部分配置移动到不同的模块甚至库中是有用的。例如，可将资源的部分配置移至不同的模块。

<CodeBlock example="application" file="config.rs" section="config" />

上面示例的结果是：

```
/         -> "/"
/app      -> "app"
/api/test -> "test"
```

每一个 [`ServiceConfig`][serviceconfig] 都可以有自己的 `data`、`routes` 和 `services`。

<!-- LINKS -->

[usingappprefix]: /docs/url-dispatch/index.html#using-an-application-prefix-to-compose-applications
[stateexample]: https://github.com/actix/examples/blob/master/basics/state/src/main.rs
[guardtrait]: https://docs.rs/actix-web/4/actix_web/guard/trait.Guard.html
[guardfuncs]: https://docs.rs/actix-web/4/actix_web/guard/index.html#functions
[guardheader]: https://docs.rs/actix-web/4/actix_web/guard/fn.Header.html
[data]: https://docs.rs/actix-web/4/actix_web/web/struct.Data.html
[app]: https://docs.rs/actix-web/4/actix_web/struct.App.html
[appconfig]: https://docs.rs/actix-web/4/actix_web/struct.App.html#method.configure
[appdata]: https://docs.rs/actix-web/4/actix_web/struct.App.html#method.app_data
[scope]: https://docs.rs/actix-web/4/actix_web/struct.Scope.html
[webscopeconfig]: https://docs.rs/actix-web/4/actix_web/struct.Scope.html#method.configure
[webscope]: https://docs.rs/actix-web/4/actix_web/web/fn.scope.html
[urlfor]: https://docs.rs/actix-web/4/actix_web/struct.HttpRequest.html#method.url_for
[serviceconfig]: https://docs.rs/actix-web/4/actix_web/web/struct.ServiceConfig.html
