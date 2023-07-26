---
title: Websockets
---

import CodeBlock from "@site/src/components/code_block.js";

# Websockets

Actix Web 使用 `actix-web-actors` crate 来支持 WebSockets。可以将请求的 `Payload` 转换为带有 [_web::Payload_][payload] 的 [_ws::Message_][message] 流，然后使用流组合器来处理实际消息，但是使用 http actor 来处理 websocket 通信更简单。

下面是一个简单的 websocket echo 服务示例：

<CodeBlock example="websockets" file="main.rs" section="websockets" />

> 一个简单的 websocket echo 服务示例 可在 [examples 目录][examples] 查看。

> 这里是一个使用 websocket 或 TCP 连接进行聊天的聊天服务器示例，可以在 [websocket-chat 目录][chat] 查看。

[message]: https://docs.rs/actix-web-actors/2/actix_web_actors/ws/enum.Message.html
[payload]: https://docs.rs/actix-web/4/actix_web/web/struct.Payload.html
[examples]: https://github.com/actix/examples/tree/master/websockets
[chat]: https://github.com/actix/examples/tree/master/websockets/chat
