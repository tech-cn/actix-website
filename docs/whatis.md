---
title: Actix Web 是什么
---
import { rustVersion } from "@site/vars";

# Actix Web 是 Crates 生态系统的一部分

之前，Actix Web 构建在 `actix` actor 框架之上。现在，Actix Web 与 actor 框架基本无关，使用了不同的系统进行构建。尽管 `actix` 仍在维护，但随着 futures 和 async/await 生态系统的成熟，它作为通用工具的用处正在减少。此时，仅在 WebSocket 中需要使用 `actix`。

Actix Web 是一个强大而实用的框架。从某种意义上说，它是一个微框架，但也有一些特殊的地方。如果你已经在使用 Rust，你可能会很快上手，但即使你是从其他编程语言转过来的，你也会发现 Actix Web 很容易上手。

<!-- TODO -->
<!-- actix-extras -->

使用 Actix Web 开发的应用将在本机可执行文件中公开一个 HTTP 服务器。你可以将其放在另一个 HTTP 服务器（如 nginx）后面，也可以直接使用。即使在完全没有其他 HTTP 服务器的情况下，Actix Web 也足够强大，可以提供 HTTP/1 和 HTTP/2 支持以及 TLS（HTTPS）。这使得它非常适合构建小型服务。

<p>
重要的：Actix Web 运行在 Rust { rustVersion } 或更高版本上，并且它可以与稳定版本一起工作。
</p>

<!-- TODO -->
<!-- which is built upon the fantastic [Tokio][tokio] asynchronous I/O system -->

<!-- LINKS -->

[tokio]: https://tokio.rs
