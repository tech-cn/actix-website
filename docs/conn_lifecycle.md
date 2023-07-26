---
title: 连接的生命周期
---

# 概述

服务启动并开始监听所有 sockets，[`Accept`][accept] 和 [`Worker`][worker] 是负责处理客户端连接的两个主要循环。

一旦连接被 `Accept` 接受，就会在从 [`Worker`][worker] 循环中派生出特定的 [`Dispatcher`][dispatcher] 循环中来处理该连接。

    请注意，下面的图表仅概述了理想的场景。

![](/img/diagrams/connection_overview.svg)

## 关于 Accept 循环的更多细节

![](/img/diagrams/connection_accept.svg)

大部分代码在 [`actix-server`][server] 包的 [`Accept`][accept] 结构体中实现。

## 关于 Worker 循环的更多细节

![](/img/diagrams/connection_worker.svg)

大部分代码在 [`actix-server`][server] 包的 [`Worker`][worker] 结构体中实现。

## Request loop roughly

![](/img/diagrams/connection_request.svg)

大部分代码在 [`actix-web`][web] 和 [`actix-http`][http] 包中实现。
Most of code implementation for request loop resides in [`actix-web`][web] and [`actix-http`][http] crates.

[server]: https://crates.io/crates/actix-server
[web]: https://crates.io/crates/actix-web
[http]: https://crates.io/crates/actix-http
[accept]: https://github.com/actix/actix-net/blob/master/actix-server/src/accept.rs
[worker]: https://github.com/actix/actix-net/blob/master/actix-server/src/worker.rs
[dispatcher]: https://github.com/actix/actix-web/blob/master/actix-http/src/h1/dispatcher.rs
