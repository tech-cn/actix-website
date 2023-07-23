---
title: 应用
---

import CodeBlock from "@site/src/components/code_block.js";

# 编写一个应用

`actix-web` 提供了各种原语来使用 Rust 构建 Web 服务器和应用。它提供路由、中间件、请求预处理、响应后处理等功能。

所有的 `actix-web` 服务都是围绕 [`App`][app] 实例构建的。它用于注册路由和中间件。在同一作用域内，还可以存储所有处理程序之间共享的状态或变量。

一个应用的 [`scope`][作用域] 是所有路由的命名空间，也就是说，特定应用作用域的所有路由都有相同的 url 路径前缀。应用的路由的路径前缀始终包含一个前导 "/" 斜杠。如果提供的前缀不包含前导斜杠，则会自动插入。前缀应该由值路径段组成。

> 对于作用域 `/app` 的应用，任何路径为 `/app`、`/app/` 或 `/app/test` 的请求都会匹配；但是，路径 `/application` 不会匹配。

<CodeBlock example="application" file="app.rs" section="setup" />

在这个例子中，创建了一个带有 `/app` 前缀和 `index.html` 资源的应用。这个资源可以通过 `/app/index.html` url 访问。

> 要获得更多信息，可以查看 [URL Dispatch][usingappprefix] 章节。

## 状态

应用状态是应用内所有路由和资源共享的。状态可以通过 [`web::Data<T>`][data] 提取器访问，其中 `T` 是状态的类型。状态也可以被中间件访问。

让我们编写一个简单的应用，并将应用名称存储在状态中：

<CodeBlock example="application" file="state.rs" section="setup" />

接下来，当初始化应用时，将状态传递给应用并启动应用：

<CodeBlock example="application" file="state.rs" section="start_app" />

可在应用中创建任意数量的状态。

## 共享可变状态

`HttpServer` 允许传递应用工厂而不是应用实例。`HttpServer` 为每个线程构造一个应用实例。因此，应用数据必须被多次构造。如果要在不同的线程之间共享数据，应该使用可共享的对象，例如 `Send` + `Sync`。

`HttpServer` accepts an application factory rather than an application instance. An `HttpServer` constructs an application instance for each thread. Therefore, application data must be constructed multiple times. If you want to share data between different threads, a shareable object should be used, e.g. `Send` + `Sync`.

Internally, [`web::Data`][data] uses `Arc`. So in order to avoid creating two `Arc`s, we should create our Data before registering it using [`App::app_data()`][appdata].

In the following example, we will write an application with mutable, shared state. First, we define our state and create our handler:

<CodeBlock example="application" file="mutable_state.rs" section="setup_mutable" />

and register the data in an `App`:

<CodeBlock example="application" file="mutable_state.rs" section="make_app_mutable" />

Key takeaways:
- State initialized _inside_ the closure passed to `HttpServer::new` is local to the worker thread and may become de-synced if modified.
- To achieve _globally shared state_, it must be created **outside** of the closure passed to `HttpServer::new` and moved/cloned in.

## Using an Application Scope to Compose Applications

The [`web::scope()`][webscope] method allows setting a resource group prefix. This scope represents a resource prefix that will be prepended to all resource patterns added by the resource configuration. This can be used to help mount a set of routes at a different location than the original author intended while still maintaining the same resource names.

For example:

<CodeBlock example="application" file="scope.rs" section="scope" />

In the above example, the `show_users` route will have an effective route pattern of `/users/show` instead of `/show` because the application's scope argument will be prepended to the pattern. The route will then only match if the URL path is `/users/show`, and when the [`HttpRequest.url_for()`][urlfor] function is called with the route name `show_users`, it will generate a URL with that same path.

## Application guards and virtual hosting

You can think of a guard as a simple function that accepts a _request_ object reference and returns _true_ or _false_. Formally, a guard is any object that implements the [`Guard`][guardtrait] trait. Actix Web provides several guards. You can check the [functions section][guardfuncs] of the API docs.

One of the provided guards is [`Host`][guardheader]. It can be used as a filter based on request header information.

<CodeBlock example="application" file="vh.rs" section="vh" />

## Configure

For simplicity and reusability both [`App`][appconfig] and [`web::Scope`][webscopeconfig] provide the `configure` method. This function is useful for moving parts of the configuration to a different module or even library. For example, some of the resource's configuration could be moved to a different module.

<CodeBlock example="application" file="config.rs" section="config" />

The result of the above example would be:

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
