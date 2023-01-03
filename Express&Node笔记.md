# 后端第一步

## 服务端编程介绍

#### 静态网站和动态网站

静态网站是指无论何时当一个特定资源被请求的时候都返回相同的被硬编码的内容![Alt text](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction/basic_static_app_server.png)
动态网站是指，一些响应内容只有在被需要的时候才会生发的网站。![Alt text](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction/web_application_with_html_and_steps.png)

#### 服务器端的优势

1. 信息的高效传输和存储
   服务器端编程则允许我们在数据库中存储信息，并且允许我们动态地创建和返回 HTML 和其他类型的文件（比如，PDF 文件和图片等）。我们也可以简单地传输数据（JSON、XML 等），来让合适的客户端框架呈现（这样就减少了服务器的处理压力和需要被传输的数据总量）。
   服务器的工作内容不仅限于从数据库发送信息，可能还会选择性地返回软件工具的结果，或者来自聊天服务的数据。内容甚至可以被定位到接受它的信息的客户端设备的类型。
2. 定制用户体验
3. 控制对内容的访问
4. 存储会话和状态信息
5. 通知和通讯
6. 数据分析

## 用户端介绍

#### 网络服务器和 HTTP

浏览器通过 HTTP 与服务端进行交流

浏览器会发送请求

1. url 地址
2. 定义请求行为的方法

- GET
  获取一份指定（比如一个包含了一个产品或者一系列产品相关信息的 HTML 文档）
- POST
  创建一份新的资源（比如给 wiki 增加一片新的文章、给数据库增加一个新的节点）。
- HEAD
  获取有关指定资源的元数据信息，而不会得到像 GET 的内容部分
- PUT
  更新一份已经存在的资源（或者在该资源不存在的情况下创建一份新的）。
- DELETE
  删除指定的资源
- TRANCE
- OPTIONS
- CONNECT
- PANTCH

##### url 参数含义

GET 请求通过在 URL 末尾增加的键值对，来编码包含在发送给服务器的 URL 中的数据——比如，http://mysite.com?name=Fred&age=11，你经常会用到问号（？）来将 URL 剩余的部分和 URL 参数分隔开来，一个赋值符号（=）将名称和与之相关的值分隔开来，然后一个“&”符号分割不同的键值对。当他们被用户改变然后提交时，URL 参数具有与生俱来地“不安全性”。因此，一个 URL 参数或者 GET 请求是不会用来在服务器上更新数据的。

##### 服务器的响应

网络服务器等待来自客户的请求信息，当请求到达时处理它们，然后发给浏览器 HTTP 响应消息。

- 200 成功
- 404 not found
- 403 forbidden

##### GET

回应 200

##### POST

与 GET 最大区别：最主要的不同在于 URL 不再包含任何参数

回应 302 found

##### 静态网站

只能处理 GET 请求，因为服务器不会存储任何可修改的数据，也不会根据 HTTP 请求数据

在有大量数据时非常低效

##### 动态网站

动态站点可以根据特定的请求 URL 和数据生成和返回内容 (而不是总是返回同一个 URL 的硬编码文件)。

过使用数据库，可以有效地将产品信息存储在易于扩展、可修改和可搜索的方式中。

## 服务端网络框架

服务器端框架 (亦称 "web 应用框架") 使编写、维护和扩展 web 应用更加容易。

#### 直接处理 HTTP 请求和响应

网络框架可以生成和处理 HTTP 请求，通过编写代码的方式。

#### 将请求路由到相关的 handler 中

#### 使从请求中获得数据变得简单

#### 抽象和简化数据库接口

#### 如何选择 web 框架

1. 学习代价
2. 效率

- 框架目的/起源
- Opinionated vs unopinionated 是否是最佳选择
- 轻量级 vs 全功能
- 框架的结构设计
- 框架和编程语言的表现
- 缓存支持
- 可拓展性
- 网络安全

## 网络安全

#### 站点安全威胁

#### XSS 跨站脚本攻击

#### SQL 注入

#### CSRF 跨站请求伪造

#### 其他威胁

- 劫持
- 拒绝服务
- 目录遍历
- 文件包含
- 命令行注入

# Express Web Framework (Node.js/JavaScript)

## 入门

#### Node

一个开源的、跨平台的运行时环境，有了它，开发人员可以使用 JavaScript 创建各种服务器端工具和应用程序

- 卓越的性能表现
- JavaScript
- 许多其它新近流行的语言也可编译/转换成 JavaScript,typeScript、CoffeeScript、ClojureScript、Scala、LiveScript
- Node 包管理工具
- 可移植
- 活跃的第三方生态系统和开发者社区

#### web 框架

Node 本身并不支持其它常见的 web 开发任务。如果需要进行一些具体的处理，比如运行其它 HTTP 动词（比如 GET、POST、DELETE 等）、分别处理不同 URL 路径的请求（“路由”）、托管静态文件，或用模板来动态创建响应，那么可能就要自己编写代码了，亦或使用 web 框架，以避免重新发明轮子。

#### Express 简介

Express 是最流行的 Node 框架，是许多其它流行 Node 框架 的底层库。它提供了以下机制：

- 为不同 URL 路径中使用不同 HTTP 动词的请求（路由）编写处理程序。
- 集成了“视图”渲染引擎，以便通过将数据插入模板来生成响应。
- 设置常见 web 应用设置，比如用于连接的端口，以及渲染响应模板的位置。
- 在请求处理管道的任何位置添加额外的请求处理“中间件”

#### 包容

Express 是高度包容的。几乎可以将任何兼容的中间件以任意顺序插入到请求处理链中。
可以用单一文件或多个文件构造应用，怎样的目录结构都可以。

#### Express 代码

- Express 可以调用特定 HTTP 动词（GET, POST, SET 等）函数和 URL 模式（“路由”）函数，还可以指定模板（“视图”）引擎的种类、模板文件的位置以及渲染响应所使用的模板。
- 可以使用 Express 中间件来添加对 cookie、会话、用户、获取 POST/GET 参数，等。
- 可以使用 Node 支持的任何类型数据库（Express 本身没有定义任何数据库行为）

#### hello world

使用 node 运行 `node $`
`const express = require('express');
const app = express();`

node 需要 commen js 语法
`const express = require('express')`

`app.get()`路由定义

#### 创建和导入模块

引入模块`const express = require('express')`
require()

暴露模块 `exports.area = width => { return width * width; }`
把导出的模块设为 export 的属性

或者直接导出对象`module.exports = {
  area: width => { return width * width; },
  perimeter: width => { return 4 * width; }
}`
`exports.area()`=`module.export.area()`

#### 使用异步 API

Node 中使用单线程

##### Node 中的异步原则 错误优先

在 node 中编写函数时，函数的第一个参数为`err`,在发生错误时返回
`FCS 关于帖子会谈
Node.js 之道——理解错误优先回调
2014 年 3 月 12 日 （2014 年 12 月 18 日更新）

如果 Google 的 V8 引擎是您的 Node.js 应用程序的核心，那么回调就是它的脉络。它们支持跨模块和应用程序的平衡、非阻塞的异步控制流。但要使回调大规模工作，您需要一个通用、可靠的协议。“error-first”回调（也称为“errorback”、“errback”或“node-style callback”）被引入来解决这个问题，并从此成为 Node.js 回调的标准。这篇文章将定义这种模式、它的最佳实践，以及究竟是什么让它如此强大。

为什么要标准化？
Node 对回调的大量使用可以追溯到一种比 JavaScript 本身更古老的编程风格。Continuation-Passing Style (CPS)是当今 Node.js 如何使用回调的老派名称。在 CPS 中，“延续函数”（读作：“回调”）作为参数传递，一旦该代码的其余部分运行完毕就会被调用。这允许不同的函数在应用程序中来回异步地传递控制。

Node.js 依靠异步代码来保持快速，因此拥有可靠的回调模式至关重要。没有一个，开发人员将无法在每个模块之间维护不同的签名和样式。错误优先模式被引入 Node 核心来解决这个问题，并且已经传播成为今天的标准。虽然每个用例都有不同的要求和响应，但错误优先模式可以容纳所有这些。

定义错误优先回调
定义错误优先回调实际上只有两条规则：

回调的第一个参数是为错误对象保留的。如果发生错误，它将由第一个 err 参数返回。
回调的第二个参数是为任何成功的响应数据保留的。如果没有发生错误，err 将被设置为 null 并且任何成功的数据都将在第二个参数中返回。
真的……就是这样。容易，对吧？显然也有一些重要的最佳实践，但在我们深入研究这些之前，让我们用基本方法组合一个现实生活中的例子 fs.readFile()：

```
fs.readFile('/foo.txt', function(err, data) {
// TODO: Error Handling Still Needed!
console.log(data);
});
```

fs.readFile()获取要读取的文件路径，并在完成后调用回调。如果一切顺利，文件内容将在 data 参数中返回。但是如果出现问题（文件不存在，权限被拒绝等），第一个 err 参数将填充一个包含有关问题信息的错误对象。

正确处理此错误取决于您（回调创建者）。如果您希望整个应用程序关闭，您可以抛出。或者，如果您正处于某个异步流程的中间，您可以将该错误传播到下一个回调。选择取决于情况和期望的行为。

```
fs.readFile('/foo.txt', function(err, data) {
// If an error occurred, handle it (throw, propagate, etc)
if(err) {
console.log('Unknown Error');
return;
}
// Otherwise, log the file contents
console.log(data);
});
```

#### 创建路由处理器

1. 路由的基本结构
   `app.METHOD(PATH, HANDLER)`
   app 是 express 的实例。
   METHOD 是一个 HTTP 请求方法。
   PATH 是服务器上的路径。
   HANDLER 是路由匹配时执行的函数。
   `app.post('/', function (req, res) {
res.send('Got a POST request')
})`

_可以有多个回调，但是需要 next()将参数提供给下个回调_

2. 路线方法
   常规：get, post, 等等
   特殊：app.all()用于为所有 HTTP 请求方法加载一个路径下的中间件功能

3. 路由路径
   路由路径与请求方法相结合，定义了可以发出请求的端点。路由路径可以是字符串、字符串模式或正则表达式。
   字符`?、+、\*`和()是它们对应的正则表达式的子集。连字符 ( -) 和点 ( .) 由基于字符串的路径逐字解释。

```
此路由路径将匹配对根路由的请求，/.

app.get('/', function (req, res) {
  res.send('root')
})
此路由路径将匹配请求到/about.

app.get('/about', function (req, res) {
  res.send('about')
})
此路由路径将匹配请求到/random.text.

app.get('/random.text', function (req, res) {
  res.send('random.text')
})
以下是一些基于字符串模式的路由路径示例。

此路由路径将匹配acd和abcd。

app.get('/ab?cd', function (req, res) {
  res.send('ab?cd')
})
此路由路径将匹配abcd、abbcd、abbbcd等。

app.get('/ab+cd', function (req, res) {
  res.send('ab+cd')
})
此路由路径将匹配abcd, abxcd, abRANDOMcd, ab123cd, 等等。

app.get('/ab*cd', function (req, res) {
  res.send('ab*cd')
})
此路由路径将匹配/abe和/abcde。

app.get('/ab(cd)?e', function (req, res) {
  res.send('ab(cd)?e')
})
基于正则表达式的路由路径示例：

此路由路径将匹配其中带有“a”的任何内容。

app.get(/a/, function (req, res) {
  res.send('/a/')
})
此路由路径将匹配butterflyand dragonfly，但不匹配butterflyman, dragonflyman, 等等。

app.get(/.*fly$/, function (req, res) {
  res.send('/.*fly$/')
})
```

#### 路由参数

由参数是命名的 URL 段，用于捕获在 URL 中它们的位置指定的值。捕获的值填充到 req.params 对象中，路径中指定的路由参数的名称作为它们各自的键。
`app.get("/users/:userId/:bookId", function (req, res) {
  res.send(req.params);
});`

#### Router 路由处理器

`app.all('/secret', (req, res, next) => {
  console.log('访问私有文件 ...');
  next(); // 控制权传递给下一个处理器
});
`

Express 应用对象还提供了为其它所有 HTTP 动词定义路由处理器的方法
checkout(), copy(), delete(), get(), head(), lock(), merge(), mkactivity(), mkcol(), move(), m-search(), notify(), options(), patch(), post(), purge(), put(), report(), search(), subscribe(), trace(), unlock(), unsubscribe()

有一个特殊的路由方法 app.all()，它可以在响应任意 HTTP 方法时调用。用于在特定路径上为所有请求方法加载中间件函数

```
// wiki.js - 维基路由模块

const express = require('express');
const router = express.Router();

// 首页路由
router.get('/', (req, res) => {
  res.send('维基首页');
});

// “关于”页面路由
router.get('/about', (req, res) => {
  res.send('关于此维基');
});

module.exports = router;
```

router 可以把 app 的路由集中存储，app.use(path,router)进行使用

#### 使用中间件 middleware

中间件（英语：Middleware），又译中间件、中介层，是一类提供系统软件和应用软件之间连接、便于软件各部件之间的沟通的软件，应用软件可以借助中间件在不同的技术架构之间共享信息与资源。中间件位于客户机服务器的操作系统之上，管理着计算资源和网络通信
中间件和路由函数是按声明顺序调用的。一些中间件的引入顺序很重要（例如，如果会话中间件依赖于 cookie 中间件，则必须先添加 cookie 处理器）

- 大多数应用会使用第三方中间件来简化常见的 web 开发任务，比如 cookie、会话、用户身份验证、访问请求 POST 和 JSON 数据，日志记录等。

中间件函数和路由处理回调之间的唯一区别是：中间件函数有第三个参数 `next`，在中间件不会结束请求周期时应调用这个 `next`（它包含中间件函数调用后应调用的下一个函数）。

使用 `app.use()` 或 `app.add()` 将一个中间件函数添加至处理链中

#### 托管静态文件

`express.static`中间件来托管静态文件

`app.use(express.static('public'))`
现在 'public' 文件夹下的所有文件均可通过在根 URL 后直接添加文件名来访问(path 默认为根目录)

- `app.use([path], callback, [callback])`在指定的路径执行指定的中间件回调函数\*

也可以增加前缀
`app.use('/media', express.static('public'))`
可以访问'/media/images..,/media/...'

#### 错误处理

通过中间件处理(next),有四个参数`(err, req, res, next)`
`app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('出错了！');
})`
