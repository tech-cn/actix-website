---
title: 测试
---

import CodeBlock from "@site/src/components/code_block.js";

# 测试

每一个应用都应该经过充分的测试。Actix Web 提供了单元测试和集成测试的工具。

## 单元测试

对于单元测试，actix-web 提供了一个请求构建器类型。[_TestRequest_][testrequest] 实现了类似构建器的模式。你可以使用 `to_http_request()` 生成 `HttpRequest` 实例，并使用它调用你的处理器。

<CodeBlock example="testing" file="main.rs" section="unit-tests" />

## 集成测试

这里提供了一些方法来测试你的应用。Actix Web 可以在真实的 HTTP 服务器中运行特定的处理程序。

`TestReuqest::get()`、`TestRequest::post()` 和其他方法可以用来向测试服务器发送请求。

使用 `test::init_service` 创建一个 `Service` 用于测试，该方法接受一个常规的 `App` 构建器。

> 查看 [API 文档][actixdocs] 获取更多信息。

<CodeBlock example="testing" file="integration_one.rs" section="integration-one" />

如果需要更复杂的应用程序配置，测试时与创建正常应用程序非常相似。例如，你可能需要初始化应用程序状态。创建一个带有 `data` 方法的 `App` 并附加状态，就像创建普通应用程序一样。

<CodeBlock example="testing" file="integration_two.rs" section="integration-two" />

## 测试响应流（Stream response）

如果你需要测试流生成，只需要调用 [`into_parts()`][resintoparts] 并将结果的 body 转换为 future 并执行它，例如在测试 [_Server Sent Events_][serversentevents] 时。

<CodeBlock example="testing" file="stream_response.rs" section="stream-response" />

[serversentevents]: https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events
[resintoparts]: https://docs.rs/actix-web/4/actix_web/struct.HttpResponse.html#method.into_parts
[actixdocs]: https://docs.rs/actix-web/4/actix_web/test/index.html
[testrequest]: https://docs.rs/actix-web/4/actix_web/test/struct.TestRequest.html
