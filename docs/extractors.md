---
title: 提取器
---

import CodeBlock from "@site/src/components/code_block.js";

# 类型安全的数据提取器

Actix Web 提供了一种类型安全的请求信息访问机制，称为 _提取器_（即 `impl FromRequest`）。内置了许多提取器实现（参见[实现者](https://docs.rs/actix-web/latest/actix_web/trait.FromRequest.html#implementors)）。

提取器可以作为处理函数的参数访问。Actix Web 每个处理函数支持最多 12 个提取器。参数位置无关紧要。

<CodeBlock example="extractors" file="main.rs" section="option-one" />

## Path（路径提取器）

[_Path_][pathstruct] 可以从请求路径中提取信息。可以提取的路径部分称为“动态段”，并用花括号标记。您可以从路径中反序列化任何变量段。

例如，对于注册了 `/users/{user_id}/{friend}` 路径的资源，可以反序列化两个段，`user_id` 和 `friend`。这些段可以按照声明的顺序作为元组提取（例如，`Path<(u32, String)>`）。

<CodeBlock example="extractors" file="path_one.rs" section="path-one" />

也可以将路径信息提取到实现了 `serde` 的 `Deserialize` 特质的 struct 中，通过将动态段名称与字段名称进行匹配。下面是一个使用 `serde` 而不是元组类型的等效示例。

<CodeBlock example="extractors" file="path_two.rs" section="path-two" />

作为一个非类型安全的替代方案，也可以在处理函数中按名称查询（参见 [`match_info`][docsrs_match_info] 文档）请求的路径参数：

<CodeBlock example="extractors" file="path_three.rs" section="path-three" />

## Query（查询参数提取器）

[`Query<T>`][querystruct] 提供了请求查询参数的提取功能。它底层使用了 `serde_urlencoded` crate。

<CodeBlock example="extractors" file="query.rs" section="query" />

## JSON（JSON格式的数据提取器）

[`Json<T>`][jsonstruct] 允许将请求体反序列化为 struct。要从请求体中提取类型化的信息，类型 `T` 必须实现 `serde::Deserialize`。

<CodeBlock example="extractors" file="json_one.rs" section="json-one" />

一些提取器提供了对提取过程进行配置的方法。要配置提取器，需要将其配置对象传递给资源的 `.app_data()` 方法。在 _Json_ 提取器的例子中，返回了一个 [_JsonConfig_][jsonconfig]。你可以配置 JSON 负载的最大大小以及自定义错误处理程序函数。

下面的例子将请求体负载的大小限制为 4kb，并使用自定义错误处理程序。

<CodeBlock example="extractors" file="json_two.rs" section="json-two" />

## URL-Encoded Forms (URL编码表单提取器)

URL-encoded 的表单请求提可以被提取到一个 struct 中，就像 `Json<T>` 一样。这个类型必须实现 `serde::Deserialize`。

可以使用 [_FormConfig_][formconfig] 配置提取过程。

<CodeBlock example="extractors" file="form.rs" section="form" />

## Other（其他提取器）

Actix Web 也提供了许多其他提取器，这里有一些比较重要的：

- [`Data`][datastruct] - 用于访问应用的状态。
- [`HttpRequest`][httprequest] - `HttpRequest` 本身就是一个提取器，可以访问请求的其他部分。
- `String` - 可以将请求的负载转换为 `String`。在  rustdoc 中的 [_一个例子_][stringexample]。
- [`Bytes`][bytes] - 可以将请求的负载转换为 _Bytes_。在  rustdoc 中的 [_一个例子_][bytesexample]。
- [`Payload`][payload] - 底层的请求负载提取器，主要用于构建其他提取器。在  rustdoc 中的 [_一个例子_][payloadexample]。

## Application State Extractor（应用状态提取器）

应用状态可以通过 `web::Data` 提取器访问。但是，状态只能作为只读引用访问。如果需要对状态进行可变访问，则必须实现。

下面是一个例子，展示了如何记录请求数：

<CodeBlock example="request-handlers" file="main.rs" section="data" />

尽管这个处理程序可以工作，但是 `data.count` 只会计算每个工作线程处理的请求数。要计算所有线程的总请求数，应该使用共享的 `Arc` 和 [atomics][atomics]。

<CodeBlock example="request-handlers" file="handlers_arc.rs" section="arc" />

**Note**: 如果要在所有线程之间共享整个状态，请使用 `web::Data` 和 `app_data`，如[共享可变状态][shared_mutable_state]中所述。

小心使用阻塞同步原语，如 `Mutex` 或 `RwLock`。Actix Web 处理请求是异步的。如果您的处理程序中的 [_critical section_][critical_section] 太大或包含 `.await`，则会出现问题。如果这是一个问题，我们建议您也阅读 [Tokio 关于在异步代码中使用阻塞 `Mutex` 的建议][tokio_std_mutex]。

[pathstruct]: https://docs.rs/actix-web/4/actix_web/dev/struct.Path.html
[querystruct]: https://docs.rs/actix-web/4/actix_web/web/struct.Query.html
[jsonstruct]: https://docs.rs/actix-web/4/actix_web/web/struct.Json.html
[jsonconfig]: https://docs.rs/actix-web/4/actix_web/web/struct.JsonConfig.html
[formconfig]: https://docs.rs/actix-web/4/actix_web/web/struct.FormConfig.html
[datastruct]: https://docs.rs/actix-web/4/actix_web/web/struct.Data.html
[httprequest]: https://docs.rs/actix-web/4/actix_web/struct.HttpRequest.html
[stringexample]: https://docs.rs/actix-web/4/actix_web/trait.FromRequest.html#impl-FromRequest-for-String
[bytes]: https://docs.rs/actix-web/4/actix_web/web/struct.Bytes.html
[bytesexample]: https://docs.rs/actix-web/4/actix_web/trait.FromRequest.html#impl-FromRequest-5
[payload]: https://docs.rs/actix-web/4/actix_web/web/struct.Payload.html
[payloadexample]: https://docs.rs/actix-web/4/actix_web/web/struct.Payload.html
[docsrs_match_info]: https://docs.rs/actix-web/latest/actix_web/struct.HttpRequest.html#method.match_info
[actix]: /actix/docs/
[atomics]: https://doc.rust-lang.org/std/sync/atomic/
[shared_mutable_state]: /docs/application#shared-mutable-state
[critical_section]: https://en.wikipedia.org/wiki/Critical_section
[tokio_std_mutex]: https://tokio.rs/tokio/tutorial/shared-state#on-using-stdsyncmutex
