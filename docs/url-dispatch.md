---
title: 路由分发
---

import CodeBlock from "@site/src/components/code_block.js";

# 路由分发

路由分发提供了一种简单的方式，使用模式匹配将 URL 映射到请求处理程序。如果其中一个模式与请求关联的 URL 匹配，则调用该的处理程序。

> 请求处理程序是一个函数，它可以接收 0 个或多个可以从请求中提取信息的参数（即 [_impl FromRequest_][implfromrequest]），并返回一个可以转换为 HttpResponse 的值（即 [_impl Responder_][implresponder]）。更多的信息可以参考 [handler 章节][handlersection]。

## 资源配置

资源配置是向应用中添加新资源的行为。资源都有一个名称，作为生成 URL 时的标识符。资源的名称也允许开发者向已存在的资源添加路由。资源还会有一个 pattern，用于匹配 _URL_ 的 _PATH_ 部分 (在端口号之后的部分， 例如 _URL_ _http://localhost:8080/foo/bar?q=value_ 的 _/foo/ba_ 部分）。不会匹配到 _QUERY_ 部分（_?_ 后面的部分，例如 _http://localhost:8080/foo/bar?q=value_ 中的 _q=value_ 部分）.

[_App::route()_][approute] 方法提供了注册路由的简单方式。该方法会向应用路由表中添加一个路由。该方法接收一个 _path patter_，_HTTP 请求方法_ 和一个处理函数作为参数。`route()` 方法可以对多个路径调用多次，这样同一个资源路径下可以注册多个路由。

<CodeBlock example="url-dispatch" section="main" />

虽然 _App::route()_ 提供了注册路由的简单方式，但要访问完整的资源配置，必须使用另一种方法。[_App::service()_][appservice] 方法将单个 [资源][webresource] 添加到应用路由表中。该方法接受 _path pattern_、guards 以及一个或多个路由。

<CodeBlock example="url-dispatch" file="resource.rs" section="resource" />

如果访问的资源不包含任何路由或没有任何匹配的路由，则会返回 _NOT FOUND_ HTTP 响应。

### 路由配置

资源包含一组路由。每个路由有包含一组守卫（`guards`）和一个处理程序。可以使用 `Resource::route()` 方法创建新路由，该方法返回对新 [_路由_][route] 实例的引用。默认情况下，路由不包含任何 guards，因此可以匹配所有请求，而默认处理程序是 `HttpNotFound`。

应用会根据资源注册和路由注册时定义的条件来路由传入的请求。资源会按照通过 `Resource::route()` 注册的路由顺序匹配其包含的所有路由。

> 一个路由可以包含任意数量的 _守卫_，但仅可以包含一个处理程序。

<CodeBlock example="url-dispatch" file="cfg.rs" section="cfg" />

在这个例子中，如果 _GET_ 请求的头部 `Content-Type` 的值为 _text/plain_，并且 URL 路径为 `/path`，则返回 `HttpResponse::Ok()`。

如果一个资源没有匹配到任何路由，则会响应 _NOT FOUND_。

[_ResourceHandler::route()_][resourcehandler] 返回一个 [_Route_][route] 对象。路由可以使用类似构建器的模式进行配置。配置方法如下：

- [_Route::guard()_][routeguard] 注册一个导航守卫。每一个路由都可以注册任意数量的守卫。
- [_Route::method()_][routemethod] 注册一个请求方法。每个路由都可以注册任意数量的请求方法。
- [_Route::to()_][routeto] 注册一个异步的处理函数。只能注册一个处理函数，通常最后一个注册的处理函数会生效。

## 路由匹配

路由匹配的主要目的是将请求的 `path` 与 URL 路径模式进行匹配（或不匹配）。`path` 表示请求的 URL 的路径部分。

_actix-web_ 实现这一功能的方法非常简单。每当一个请求到达，对于应用中存在的每个资源配置，actix 都会根据声明的默认对请求的路径进行检查。这种检查按照通过 `App::service()` 方法注册的路由的顺序进行。如果找不到资源，则使用 _默认资源_ 作为匹配的资源。

声明路由配置时，可以包含路由守卫参数。与路由配置关联的所有路由守卫都必须为给定请求返回 `true`，才能在检查期间使用该路由配置。如果在路由配置的路由守卫中的任一个守卫在检查期间返回 `false`，则跳过该路由，并且路由匹配将继续通过路由模式的有序集合进行。

如果有路由匹配到，则匹配过程会停止，并调用与路由绑定的处理程序。如果所有的路由都检查了，仍然没有路由匹配到，则返回 _NOT FOUND_ 响应。

## 资源 pattern 语法

actix 的模式匹配语法很简单。

路由配置中使用的模式可以以 `/` 开头。如果不以 `/` 开头，则在匹配时会自动添加 `/`。例如，以下模式是等价的：

```
{foo}/bar/baz
```

和:

```
/{foo}/bar/baz
```

_可变部分_（替换标记）使用 _{identifier}_ 的形式指定，意思是接收下一个 `/` 之前的任何字符，并将其用作 `HttpRequest.match_info()` 对象中的名称。

模式中的替换标记相与正则表达式 `[^{}/]+` 相匹配。

`match_info` 是 `Params` 的对象，代表根据路由模式从 _URL_ 中提取的动态部分。它可以通过 `request.match_info` 使用。例如，下面的模式定义了一个文字段（foo）和两个替换标记（baz 和 bar）：

```
foo/{baz}/{bar}
```

上面的模式将匹配这些 URL，并生成以下匹配信息：

```
foo/1/2        -> Params {'baz': '1', 'bar': '2'}
foo/abc/def    -> Params {'baz': 'abc', 'bar': 'def'}
```

但它不匹配以下模式：

```
foo/1/2/        -> No match (trailing slash)
bar/abc/def     -> First segment literal mismatch
```

对替换标记进行匹配时，最多只能匹配到模式中第一个非字母/数字字符。举例来说，如果使用以下路由模式：

```
foo/{name}.html
```

路径 `/foo/biz.html` 将与上面的路由模式匹配，匹配结果将是 `Params {'name': 'biz'}`。但是路径 `/foo/biz` 将不会匹配，因为这个路径的末尾不包含 `.html`，而是只包含 `biz`。

为了捕获到这两个部分，可以使用两个替换标记：

```
foo/{name}.{ext}
```

路径 `/foo/biz.html` 将会与上面的模式匹配，匹配结果是 `Params {'name': 'biz', 'ext': 'html'}`。这是因为在两个替换标记 `{name}` 和 `{ext}` 之间有一个字面量部分 `.`（句点）。

替换标记部分也可以指定一个正则表达式，用于决定路径段是否与标记匹配。要指定替换标记只匹配正则表达式定义的特定字符集，必须使用扩展的替换标记语法。在大括号内，替换标记名称后必须跟一个冒号，然后直接跟正则表达式。默认情况下，普通替换比较所对应的正则表达式为 `[^/]+` 。例如，替换标记 `{foo}` 可以拼写为 `{foo:[^/]+}`，你可以将其改为任意正则表达式，以匹配任意字符序列，例如，"{foo:\d+}`"只匹配数字。

路径段中至少包含一个字符，才能匹配到替换标记。例如，对于 URL `/abc/`：

- `/abc/{foo}` 不会匹配。
- `/{foo}/` 正确匹配。

> **提示**：在匹配模式之前，路径将取消 URL 引号并解码为有效的 unicode 字符串，代表匹配路径段的值也将取消 URL 引号。

举例来说，下面的模式：

```
foo/{bar}
```

当匹配下面的 URL 时：

```
http://example.com/foo/La%20Pe%C3%B1a
```

匹配后的参数字典如下所示（值为解码后的）：

```
Params {'bar': 'La Pe\xf1a'}
```

提供给 actix 的路径段中的字面量应该是解码后的值。不要在模式中使用 URL 编码的值。例如，不要使用这样的模式：

```
/Foo%20Bar/{baz}
```

你应该像下面这样指定：

```
/Foo Bar/{baz}
```

为了获得“尾部匹配”，必须使用自定义的正则表达式。

```
foo/{bar}/{tail:.*}
```

上面的模式将匹配这些 URL，并生成以下匹配信息：

```
foo/1/2/           -> Params {'bar': '1', 'tail': '2/'}
foo/abc/def/a/b/c  -> Params {'bar': 'abc', 'tail': 'def/a/b/c'}
```

## 路由作用域

作用域可以帮助你组织共享公共跟路径的路由。也可以在作用域中嵌套作用域。

假设要组织查询用户信息的路径，可能包括：

- /users
- /users/show
- /users/show/{id}

这些路径的作用域布局如下：

<CodeBlock example="url-dispatch" file="scope.rs" section="scope" />

一个 _作用域_ 路径也可以包含可变的路径段，这与非作用域路径一致。

你可以从 `HttpRequest::match_info()` 中获取可变路径段的匹配值。[`Path` 提取器][pathextractor] 也可以提取作用域级别的可变路径段。

## 匹配信息

匹配到的所有可变标记的值都可以通过 [`HttpRequest::match_info()`][matchinfo] 获取。特定值可通过 [`Path::get()`][pathget]获取。

<CodeBlock example="url-dispatch" file="minfo.rs" section="minfo" />

在这个例子中，对于路径 `/a/1/2/`，v1 和 v2 的值将被解析为 "1" 和 "2"。

### 路径信息提取器

Actix 提供了类型安全的路径信息提取功能。使用 [_Path_][pathstruct] 提取信息时，目标类型可以定义为几种不同的形式。最简单的方式是使用元组。元组中的每个元素都必须与路径模式中的一个元素相对应。例如，你可以将路径模式 "/{id}/{username}/" 与 Path<(u32, String)>` 类型匹配，但不能与 "Path<(String, String, String)>` 类型相匹配。

<CodeBlock example="url-dispatch" file="path.rs" section="path" />

也可以将路径模式信息提取到一个结构体中，这个结构体必须实现了 _serde_ 中的 `Deserialize` 特质。

<CodeBlock example="url-dispatch" file="path2.rs" section="path" />

[_Query_][query] 提供了类似的功能，但是它用于提取请求的查询参数。

## 生成资源 URL

使用 [_HttpRequest.url_for()_][urlfor] 方法会基于资源模式生成 URL。例如，如果你配置了一个名称为 "foo" 和模式为 "{a}/{b}/{c}" 的资源，你可以这样做：

<CodeBlock example="url-dispatch" file="urls.rs" section="url" />

这将返回类似 `http://example.com/test/1/2/` 这样的字符串（在当前协议和主机名是 http://example.com 的情况下）。`url_for` 方法返回 [_Url 对象_][urlobj]，所以你可以修改该 url（添加查询参数，锚点等）。`url_for()` 只能为 _命名_ 资源调用，否会会返回错误。

## 外部资源

有效的 URL 资源可以注册为外部资源。它们只用于生成 URL，在请求时不会考虑匹配。

<CodeBlock example="url-dispatch" file="url_ext.rs" section="ext" />

## 路径规范化和重定向到附加 `/` 的路由

规范化意味着：

- 在路径尾部追加 `/`。
- 讲多个 `/` 合并为一个 `/`。

一旦找到正确解析的路径，就会立即返回处理程序。如果启用全部规范化条件，将会按照如下顺序匹配路由：1）合并，2）合并和追加，3）追加，如果按照这个顺序满足其中一个条件，就会重定向到新路径。

<CodeBlock example="url-dispatch" file="norm.rs" section="norm" />

在本例中，`//resource//` 将重定向到`/resource/`。

在本例中，为所有路由都注册了路径规范化处理程序，但不应该依赖这个机制来重定向 _POST_ 请求。如果追加 `/` 后仍然 _Not Found_，会将 _POST_ 请求转换为 _GET_ 请求，从而丢失原始请求中的所有POST数据。

可以只为 _GET_ 请求注册规范化路径：

<CodeBlock example="url-dispatch" file="norm2.rs" section="norm" />

### 使用一个应用前缀来组合应用

`web::scope()` 方法允许设置特定的应用程序作用域。该作用域代表一个资源前缀，将被添加到所有资源模式中。这有助于将一组路由挂载到与可调用资源作者意图不同的位置，同时仍保持相同的资源名称。

例如：

<CodeBlock example="url-dispatch" file="scope.rs" section="scope" />

在上看的例子中，_show_users_ 路由的有效路由模式是 _/users/show_，而不是 _/show_，因为作用域将被添加到模式之前。这样，只有当 URL 路径为 _/users/show_ 时，路由才会匹配，而当使用路由名称 show_users 调用 `HttpRequest.url_for()` 函数时，它将生成一个具有相同路径的 URL。

## 自定义路由守卫

你可以把路由守卫看成一个普通的函数，这个函数接收 _request_ 对象引用作为参数，并返回 _true_ 或 _false_。从形式上看，路由守卫是实现了 [`Guard`][guardtrait] 特质的任何对象。Actix 提供了几个守卫，你可以在 API 文档的 [functions section][guardfuncs] 中查看。

下面是一个简单的守卫示例，它检查请求是否包含特定的 _请求头_：

<CodeBlock example="url-dispatch" file="guard.rs" section="guard" />

在这个例子中，只有当请求头包含 _CONTENT-TYPE_ 时，才会调用 _index_ 处理程序。

守卫不能访问或修改请求对象，但是可以在 [request extensions][requestextensions] 中存储额外的信息。

### 改变守卫的含义

你可以使用 `Not` 守卫来包装任何其他守卫，以反转守卫的含义。例如，如果你想为除 _GET_ 之外的所有请求方法返回 "METHOD NOT ALLOWED" 响应：

<CodeBlock example="url-dispatch" file="guard2.rs" section="guard2" />

`Any` 守卫接收一个守卫列表，如其中任意一个守卫匹配，则匹配。例如：

```rust
guard::Any(guard::Get()).or(guard::Post())
```

`All` 守卫接收一个守卫列表，所有的守卫都匹配时才会皮诶，例如：

```rust
guard::All(guard::Get()).and(guard::Header("content-type", "plain/text"))
```

## 改变默认的 Not Found 响应

如果在路由表或资源表中不能匹配到路由，则会使用默认的响应。现在应用中默认响应是 _NOT FOUND_。也可以使用 `App::default_service()` 来覆盖默认的 _NOT FOUND_ 响应。该方法接收一个 _配置函数_，这与使用 `App::service()` 方法配置资源一样。

<CodeBlock example="url-dispatch" file="dhandler.rs" section="default" />

[handlersection]: /docs/handlers/
[approute]: https://docs.rs/actix-web/4/actix_web/struct.App.html#method.route
[appservice]: https://docs.rs/actix-web/4/actix_web/struct.App.html?search=#method.service
[webresource]: https://docs.rs/actix-web/4/actix_web/struct.Resource.html
[resourcehandler]: https://docs.rs/actix-web/4/actix_web/struct.Resource.html#method.route
[route]: https://docs.rs/actix-web/4/actix_web/struct.Route.html
[routeguard]: https://docs.rs/actix-web/4/actix_web/struct.Route.html#method.guard
[routemethod]: https://docs.rs/actix-web/4/actix_web/struct.Route.html#method.method
[routeto]: https://docs.rs/actix-web/4/actix_web/struct.Route.html#method.to
[matchinfo]: https://docs.rs/actix-web/4/actix_web/struct.HttpRequest.html#method.match_info
[pathget]: https://docs.rs/actix-web/4/actix_web/dev/struct.Path.html#method.get
[pathstruct]: https://docs.rs/actix-web/4/actix_web/dev/struct.Path.html
[query]: https://docs.rs/actix-web/4/actix_web/web/struct.Query.html
[urlfor]: https://docs.rs/actix-web/4/actix_web/struct.HttpRequest.html#method.url_for
[urlobj]: https://docs.rs/url/1.7.2/url/struct.Url.html
[guardtrait]: https://docs.rs/actix-web/4/actix_web/guard/trait.Guard.html
[guardfuncs]: https://docs.rs/actix-web/4/actix_web/guard/index.html#functions
[requestextensions]: https://docs.rs/actix-web/4/actix_web/struct.HttpRequest.html#method.extensions
[implfromrequest]: https://docs.rs/actix-web/4/actix_web/trait.FromRequest.html
[implresponder]: https://docs.rs/actix-web/4/actix_web/trait.Responder.html
[pathextractor]: /docs/extractors
