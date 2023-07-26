---
title: 自动重载
---

# 自动重载开发服务器

在开发时，让 cargo 自动重新编译改变的代码是非常方便的。这可以通过 [`cargo-watch`] 来轻易实现。

```sh
 cargo watch -x run
 ```

## 历史说明

在旧版本中，我们推荐使用 `systemfd` 和 `listenfd` 的组合，但是这有很多陷阱，而且很难正确集成，特别是在更广泛的开发工作流中。我们认为 [`cargo-watch`] 对于自动重载的目的来说已经足够了。

[`cargo-watch`]: https://github.com/passcod/cargo-watch
