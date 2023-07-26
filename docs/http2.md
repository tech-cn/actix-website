---
title: HTTP/2
---

import RenderCodeBlock from '@theme/CodeBlock';
import CodeBlock from '@site/src/components/code_block.js';
import { actixWebMajorVersion } from "@site/vars";

如果可能的话，`actix-web`会自动将连接升级到*HTTP/2*。

# Negotiation

<!-- TODO: use rustls example -->

当启用 `openssl` 或 `rustls` 功能时，`HttpServer` 分别提供了 [bind_rustls][bindrustls] 方法和 [bind_openssl][bindopenssl] 方法。

<!-- DEPENDENCY -->


<RenderCodeBlock className="language-toml">
{`[dependencies]
actix-web = { version = "${actixWebMajorVersion}", features = ["openssl"] }
openssl = { version = "0.10", features = ["v110"] }
`}
</RenderCodeBlock>

<CodeBlock example="http2" file="main.rs" section="main" />

不支持升级到 [RFC 7540 §3.2][rfcsection32] 中描述的 HTTP/2。对于明文连接和 TLS 连接 ([RFC 7540 §3.4][rfcsection34])（使用低级别的 actix-http 构建服务时），支持在事先知情的情况下启动 HTTP/2。

> Check out [the TLS examples][examples] for concrete example.

[rfcsection32]: https://httpwg.org/specs/rfc7540.html#rfc.section.3.2
[rfcsection34]: https://httpwg.org/specs/rfc7540.html#rfc.section.3.4
[bindrustls]: https://docs.rs/actix-web/4/actix_web/struct.HttpServer.html#method.bind_rustls
[bindopenssl]: https://docs.rs/actix-web/4/actix_web/struct.HttpServer.html#method.bind_openssl
[tlsalpn]: https://tools.ietf.org/html/rfc7301
[examples]: https://github.com/actix/examples/tree/master/https-tls
