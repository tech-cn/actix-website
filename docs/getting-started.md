---
title: 开始使用
---

import RenderCodeBlock from '@theme/CodeBlock';
import CodeBlock from "@site/src/components/code_block.js";
import { rustVersion, actixWebMajorVersion } from "@site/vars";

## 安装 Rust

如果你还没有安装 Rust，我们建议你使用 `rustup` 来管理你的 Rust 安装。[官方 Rust 指南][rustguide] 有一个很好的入门。

<p>
Axtix Web 目前支持的最低 Rust 版本是 { rustVersion }。运行 <code>rustup update</code> 将确保你拥有最新的 Rust 版本。因此，本指南假设你运行的是 Rust { rustVersion } 或更高版本。
</p>

## Hello, world!

首先，创建一个新的二进制 Cargo 项目并切换到新目录：

```bash
cargo new hello-world
cd hello-world
```

接下来，将 `actix-web` 添加到你的项目依赖中，只需要在 `Cargo.toml` 文件中添加以下内容即可。


<!-- DEPENDENCY -->

<RenderCodeBlock className="language-toml">
{`[dependencies]
actix-web = "${actixWebMajorVersion}"`}
</RenderCodeBlock>

处理请求使用零个或多个参数的异步函数。这些参数可以从请求中提取出来（参见 `FromRequest` trait），并返回一个可以转换为 `HttpResponse` 的类型（参见 `Responder` trait）：

将 `src/main.rs` 的内容替换如下：

<CodeBlock example="getting-started" section="handlers" />

注意，其中一些处理器直接使用内置的宏附加了路由信息。这允许你指定处理器应该响应的方法和路径。在下面你将看到如何注册 `manual_hello`（也就是不使用路由宏的路由）。

接下来，创建一个 `App` 实例并注册请求处理器。使用 `App::service` 来处理使用路由宏的处理器，使用 `App::route` 来处理手动路由的处理器，声明路径和方法。最后，应用程序在 `HttpServer` 中启动，该服务器将使用你的 `App` 作为“应用程序工厂”来处理传入的请求。

将下面的 `main` 函数添加到 `src/main.rs` 中：

<CodeBlock example="getting-started" section="main" />

就是这样！使用 `cargo run` 编译并运行程序。`#[actix_web::main]` 宏在 actix 运行时中执行异步主函数。现在你可以转到 `http://127.0.0.1:8080/` 或任何你定义的其他路由来查看结果。

<!-- LINKS -->

[rustguide]: https://doc.rust-lang.org/book/ch01-01-installation.html
[actix-web-codegen]: https://docs.rs/actix-web-codegen/
