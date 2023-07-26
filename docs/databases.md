---
title: 数据库
---

import CodeBlock from "@site/src/components/code_block.js";

# 异步操作

我们有几个示例程序展示了异步数据库适配器的使用：

- Postgres: https://github.com/actix/examples/tree/master/databases/postgres
- SQLite: https://github.com/actix/examples/tree/master/databases/sqlite
- MongoDB: https://github.com/actix/examples/tree/master/databases/mongodb

# Diesel

当前版本的 Diesel（v1/v2）不支持异步操作，因此需要使用 [`web::block`][web-block] 函数将数据库操作转移到 Actix 的运行时线程池。

你可以在应用中创建任意数据库操作函数。

<CodeBlock example="databases" file="main.rs" section="handler" />

现在，你应该使用诸如 `r2d2` 来设置数据库连接池。这意味着多个处理程序可以同时操作数据库，并且仍然可以接受新连接。简单地说，将连接池放在应用状态中。（在这种情况下，最好不要使用状态包装器结构，因为连接池池已经为你处理了共享访问。）

<CodeBlock example="databases" file="main.rs" section="main" />

现在，在一个请求处理程序中，可以使用 `Data<T>` 提取器从状态中获取一个数据库连接。将这个数据库连接传递给 [`web::block`][web-block] 闭包。接下来只需要调用操作函数并 `.await` 结果。

例子中，在最后一个 `?` 操作符之前，还将错误映射到 `HttpResponse`，但是如果返回的错误类型实现了 [`ResponseError`][response-error]，则无需这样做。

<CodeBlock example="databases" file="main.rs" section="index" />

就是这样！点击此处查看完整示例：https://github.com/actix/examples/tree/master/databases/diesel

[web-block]: https://docs.rs/actix-web/4/actix_web/web/fn.block.html
[response-error]: https://docs.rs/actix-web/4/actix_web/trait.ResponseError.html
