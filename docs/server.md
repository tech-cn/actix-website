---
title: Server
---

import RenderCodeBlock from '@theme/CodeBlock';
import CodeBlock from '@site/src/components/code_block.js';
import { actixWebMajorVersion } from "@site/vars";

# HTTPServer

[**HttpServer**][httpserverstruct] 负责处理 HTTP 请求。

`HttpServer` 接收一个应用工厂作为参数，应用工厂必须同时具有 `Send` + `Sync`。在 _多线程_ 章节中有更多介绍。

启动服务器必须将其绑定到网络套接字。使用 [`HttpServer::bind()`][bindmethod] 与套接字地址元组或字符串，例如 `("127.0.0.1", 8080)` 或 `""0.0.0.0:8080"`。如果套接字被其他应用程序使用，则会失败。

在 `bind` 成功之后，使用 [`HttpServer::run()`][httpserver_run] 返回 [`Server`][server] 实例。`Server` 必须调用 `await` 或 `spawn` 来开始处理请求，并且会一直运行，直到它接收到关闭信号（例如，默认情况下，`ctrl-c`；[在这里阅读更多](#graceful-shutdown)）。

<CodeBlock example="server" section="main" />

## 多线程

`HttpServer` 会自动启动一定数量的 HTTP _worker_，默认情况下，这个数字等于系统中的物理 CPU 数量。这个数字可以通过 [`HttpServer::workers()`][workers] 方法重新配置。

<CodeBlock example="server" file="workers.rs" section="workers" />

创建 workers 之后，它们会分别接收一个独立的 _application_ 实例来处理请求。_Application_ 状态不会在线程之间共享，处理程序可以自由地使用它们的状态副本，而不会有并发问题。

应用程序状态不需要是 `Send` 或 `Sync`，但应用程序工厂必须是 `Send` + `Sync`。

要在工作线程之间共享状态，要使用 `Arc`/`Data`。一旦引入共享和同步，就需要特别小心。在许多情况下，由于锁定共享状态以进行修改，会无意中引入性能代价。

在某些情况下，使用更高效的锁定策略可以减轻这些成本，例如使用 [读写锁](https://doc.rust-lang.org/std/sync/struct.RwLock.html) 而不是 [互斥锁](https://doc.rust-lang.org/std/sync/struct.Mutex.html) 来实现非独占锁定，但性能最好的实现往往是根本不进行锁定的实现。

由于每个工作线程都会按顺序处理请求，因此阻塞当前线程的操作会导致当前工作线程停止处理新请求：

```rust
fn my_handler() -> impl Responder {
    std::thread::sleep(Duration::from_secs(5)); // <-- Bad practice! Will cause the current worker thread to hang!
    "response"
}
```

因此，任何长时间的，非 CPU 密集型操作都应该使用 futures 或异步函数。由于请求处理函数是在工作线程间并发执行的，因此不会阻塞：

```rust
async fn my_handler() -> impl Responder {
    tokio::time::sleep(Duration::from_secs(5)).await; // <-- Ok. Worker thread will handle other requests here
    "response"
}
```

上面的限制也适用于提取器。当一次处理函数接收到一个实现了 `FromRequest` 的参数，如果该实现阻塞了当前线程，那么工作线程在执行该处理函数时将会阻塞。因此，实现提取器时必须特别注意，而且在需要时也应异步实现。

## TLS / HTTPS

Actix Web 提供两种开箱即用的 TLS 实现：`rustls` 和 `openssl`。

`rustls` 包用于集成 `rustls` 实现，`openssl` 包用于继承 `openssl` 实现。

<!-- DEPENDENCY -->

<RenderCodeBlock className="language-toml">
{`[dependencies]
actix-web = { version = "${actixWebMajorVersion}", features = ["openssl"] }
openssl = { version = "0.10" }
`}
</RenderCodeBlock>

<CodeBlock example="server" file="ssl.rs" section="ssl" />

用下面的命令创建 key.pem 和 cert.pem。**填写你自己的subject**

```bash
$ openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem \
  -days 365 -sha256 -subj "/C=CN/ST=Fujian/L=Xiamen/O=TVlinux/OU=Org/CN=muro.lxd"
```

要删除密码，将 nopass.pem 拷贝到 key.pem

```bash
$ openssl rsa -in key.pem -out nopass.pem
```

## Keep-Alive

Actix Web 将保持连接开发以等待后续的请求。

> 是否启用 _长_ 连接，可以在服务设置中配置。

- `Duration::fromSecs(75)` 或 `KeepAlive::Timeout(75)`：长连接将会保持 75 秒。
- `KeepAlive::Os`: 使用操作系统的 keep-alive 设置。
- `None` or `KeepAlive::Disabled`: 禁用长连接。

<CodeBlock example="server" file="keep_alive.rs" section="keep-alive" />

如果选择了上面例子中的第一个选项，那么再 HTTP/1.1 请求中，如果响应没有通过以下方式明确禁止长连接就会启用长连接功能，例如：将 [connection type][httpconnectiontype] 设置为 `Close` 或 `Upgrade`。可以通过 [HttpResponseBuilder 上的 `force_close()` 方法](https://docs.rs/actix-web/4/actix_web/struct.HttpResponseBuilder.html#method.force_close) 来强制关闭连接。

> 在 HTTP/1.0 中 Keep-alive 是关闭的，在 HTTP/1.1 和 HTTP/2.0 中是开启的。

<CodeBlock example="server" file="keep_alive_tp.rs" section="example" />

## 优雅地关机

`HttpServer` 支持优雅关机。当接收到停止信号后，工作线程仍有一定的时间来完成请求。超时后仍然存活的工作线程将被强制关闭。默认情况下，关闭超时设置为 30 秒。可以使用 [`HttpServer::shutdown_timeout()`][shutdowntimeout] 方法更改此参数。

`HttpServer` 可以处理多个系统信号。_CTRL-C_ 在所有操作系统上都可用，其他信号在 unix 系统上可用。

- _SIGINT_ - 强制关闭工作线程
- _SIGTERM_ - 优雅地关闭工作线程
- _SIGQUIT_ - 强制关闭所有工作线程

> 可以使用 [`HttpServer::disable_signals()`][disablesignals] 方法禁用系统信号处理。

[server]: https://docs.rs/actix-web/4/actix_web/dev/struct.Server.html
[httpserverstruct]: https://docs.rs/actix-web/4/actix_web/struct.HttpServer.html
[bindmethod]: https://docs.rs/actix-web/4/actix_web/struct.HttpServer.html#method.bind
[httpserver_run]: https://docs.rs/actix-web/4/actix_web/struct.HttpServer.html#method.run
[bindopensslmethod]: https://docs.rs/actix-web/4/actix_web/struct.HttpServer.html#method.bind_openssl
[bindrusttls]: https://docs.rs/actix-web/4/actix_web/struct.HttpServer.html#method.bind_rustls
[workers]: https://docs.rs/actix-web/4/actix_web/struct.HttpServer.html#method.workers
[tlsalpn]: https://tools.ietf.org/html/rfc7301
[exampleopenssl]: https://github.com/actix/examples/tree/master/security/openssl
[shutdowntimeout]: https://docs.rs/actix-web/4/actix_web/struct.HttpServer.html#method.shutdown_timeout
[disablesignals]: https://docs.rs/actix-web/4/actix_web/struct.HttpServer.html#method.disable_signals
[httpconnectiontype]: https://docs.rs/actix-web/4/actix_web/http/enum.ConnectionType.html
