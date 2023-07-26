---
title: 静态文件
---

import CodeBlock from "@site/src/components/code_block.js";

# 文件

可以自定义路径和 `NamedFile` 来提供静态文件。要匹配路径尾，我们可以使用 `[.*]` 正则表达式。

<CodeBlock example="static-files" file="main.rs" section="individual-file" />

:::warning 
使用 `[.*]` 正则表达式匹配路径尾并使用它返回 `NamedFile` 会带来严重的安全隐患。
攻击者可以将 `../` 插入到 URL 中，便可以访问运行服务器的用户所能访问的主机上的所有文件。
:::

## 目录

可以使用 [`Files`][files] 来提供特定目录和子目录中的文件。`Files` 必须使用 `App::service()` 方法进行注册，否则它将无法访问其子路径。

<CodeBlock example="static-files" file="directory.rs" section="directory" />

默认情况下，子目录的文件列表是禁用的。尝试加载目录列表将返回 _404 Not Found_ 响应。要启用文件列表，请使用 [`Files::show_files_listing()`][showfileslisting] 方法。

也可以使用 [`Files::index_file()`][indexfile] 方法重定向到特定的文件，而不是显示目录的文件列表。

## 配置

`NamedFiles` 提供了一些配置项：

- `set_content_disposition` - 用于将文件的 mime 映射到相应的 `Content-Disposition` 类型的函数
- `use_etag` - 指定是否应计算 `ETag` 并将其包含在响应头中。
- `use_last_modified` - 指定是否应使用文件修改时间戳并将其添加到 `Last-Modified` 响应头中。

上面的所有配置都是可选的，并且提供了最佳默认值，但是可以自定义其中的任何一个。

<CodeBlock example="static-files" file="configuration.rs" section="config-one" />

这些配置同样适用于目录：

<CodeBlock example="static-files" file="configuration_two.rs" section="config-two" />

[files]: https://docs.rs/actix-files/0.6/actix_files/struct.Files.html#
[showfileslisting]: https://docs.rs/actix-files/0.6/actix_files/struct.Files.html#method.show_files_listing
[indexfile]: https://docs.rs/actix-files/0.6/actix_files/struct.Files.html#method.index_file
