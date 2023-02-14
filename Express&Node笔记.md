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

# Node

## 入门

一个开源的、跨平台的运行时环境，有了它，开发人员可以使用 JavaScript 创建各种服务器端工具和应用程序

- 卓越的性能表现
- JavaScript
- 许多其它新近流行的语言也可编译/转换成 JavaScript,typeScript、CoffeeScript、ClojureScript、Scala、LiveScript
- Node 包管理工具
- 可移植
- 活跃的第三方生态系统和开发者社区

#### 一个最简单的 Node 应用

1. 引入 require 模块(CommonJS)
2. 创建服务器
3. npm(集成在 node 中)

#### REPL 环境

`$ node`
功能

1. 简单运算
2. 使用变量
3. 多行表达式
4. 下划线变量

#### Node.js 回调函数

非阻塞实现方式:回调方式执行
`fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString())
})`
优点:不必等待程序逐行执行,大大提高运行效率

#### 事件循环/EventEmitter

#### 事件触发器

`var fs = require("fs")`

`var data = fs.readFileSync('input.txt')`

`// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter()`

- 绑定事件`event.on('some_event', function() { 
    console.log('some_event 事件触发'); 
}); `
- 触发事件`setTimeoutfunction() { 
    event.emit('some_event'); 
}, 1000)`
  event.emit()用于绑定事件
  event.on()用于触发事件
  另外还有 once,removelistener,addeventlistener(与 on 功能完全一致)

#### Buffer

缓存,用于存储二进制数据

- 创建`Buffer.alloc(size[, fill[, encoding]])//返回一个指定大小的 Buffer 实例，如果没有设置 fill，则默认填满 0`,`Buffer.from(array)`
- 读取 buf.toString(编码格式,起始序号)

特点:存储在堆栈之外,不在 node 进程中,存储的是二进制数据

#### Stream

Stream 是一个抽象接口，Node 中有很多对象实现了这个接口。例如，对 http 服务器发起请求的 request 对象就是一个 Stream

#### 模块系统

`var hello = require('./hello')`
`require会优先查找自带的模块`

#### 函数

可以把函数本身作为参数进行传递

##### http 服务器的函数

`var http = require("http");

```
http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888)
```

```
var http = require("http");

function onRequest(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}

http.createServer(onRequest).listen(8888)
```

#### 路由

首先解析 url,通过 url.parse 进行解析 ,在服务器中进行操作

#### 全局对象

在浏览器 JavaScript 中，通常 window 是全局对象， 而 Node.js 中的全局对象是 global，所有全局变量（除了 global 本身以外）都是 global 对象的属性

#### 常用工具

`util`使用 express 也可以

#### node 文件系统

node 提供一组类 unix 的标准的 api
`var fs = require("fs")`

##### 异步和同步

Node.js 文件系统（fs 模块）模块中的方法均有异步和同步版本，例如读取文件内容的函数有异步的 `fs.readFile()` 和同步的 `fs.readFileSync()`

##### 打开文件

`fs.open(path, flags[, mode], callback)`

##### 获取文件信息

```
var fs = require('fs')

fs.stat('/Users/liuht/code/itbilu/demo/fs.js', function (err, stats) {
console.log(stats.isFile()); //true
})

```

fs.stat(path)执行后，会将 stats 类的实例返回给其回调函数。可以通过 stats 类中的提供方法判断文件的相关属性

##### 写入文件

`fs.writeFile(file, data[, options], callback)`

##### 读取文件

`fs.read(fd, buffer, offset, length, position, callback)`
fd - 通过 fs.open() 方法返回的文件描述符。

- buffer - 数据写入的缓冲区。
- offset - 缓冲区写入的写入偏移量。
- length - 要从文件中读取的字节数。
- position - 文件读取的起始位置，如果
- position 的值为 null，则会从当前文件指针的位置读取。
- allback - 回调函数，有三个参数 err, bytesRead, buffer，err 为错误信息， bytesRead 表示读取的字节数，buffer 为缓冲区对象。

##### 关闭文件

`fs.close(fd, callback)`

##### 截取文件

`fs.ftruncate(fd, len, callback)`

##### 删除文件

`fs.unlink(path, callback)`

##### 创建目录

`fs.mkdir(path[, options], callback)`

##### 删除目录

`fs.rmdir(path, callback)`

##### GET/POST

```
var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end(util.inspect(url.parse(req.url, true)));
}).listen(3000);
```

# Express Web Framework (Node.js/JavaScript)

## web 框架

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

此路由路径将匹配 acd 和 abcd。

app.get('/ab?cd', function (req, res) {
res.send('ab?cd')
})
此路由路径将匹配 abcd、abbcd、abbbcd 等。

app.get('/ab+cd', function (req, res) {
res.send('ab+cd')
})
此路由路径将匹配 abcd, abxcd, abRANDOMcd, ab123cd, 等等。

app.get('/ab*cd', function (req, res) {
res.send('ab*cd')
})
此路由路径将匹配/abe 和/abcde。

app.get('/ab(cd)?e', function (req, res) {
res.send('ab(cd)?e')
})
基于正则表达式的路由路径示例：

此路由路径将匹配其中带有“a”的任何内容。

app.get(/a/, function (req, res) {
res.send('/a/')
})
此路由路径将匹配 butterflyand dragonfly，但不匹配 butterflyman, dragonflyman, 等等。

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

错误处理中间件可以任何所需内容，但是必须在所有其它`app.use()` 和路由调用后才能调用，因此它们是需求处理过程中**最后**的中间件。

_HTTP 404 和其它“错误”状态码不作为错误处理。可使用中间件来自行处理这些状态。_

#### 使用数据库

Express 应用可以使用 Node 支持的所有数据库（Express 本身并没有定义任何数据库管理的附加行为或需求）。其中包括：PostgreSQL、MySQL、Redis、SQLite、MongoDB，等等。

#### 渲染视图

动态渲染模板

模板引擎可为输出文档的结构指定一个模板，在数据处先放置占位符，并于页面生成时填充。

在不使用框架的情况下动态更新 html

#### 文件结构

Express 不对文件结构和组件的选用做任何约定。路由、视图、静态文件，以及其它应用具体逻辑均可按任意文件结构保存在任意数量的文件中。当然可以让整个 Express 应用保存在单一文件中，但是一般情况下，把应用按功能（比如账户管理、博客、论坛）和架构问题域（比如 MVC 架构 中的模型、视图、控制器）进行拆分是有意义的。

## Express 开发环境

#### 开发环境包括

1. Node
2. npm
3. Express
4. IDE
5. Git

_过程中会创建 web 服务器_

#### 版本选择

- Express 选择最新版本
- Node LTS 版

#### 初始化项目

1. 创建文件目录
   `mkdir myapp`
   `cd myapp`
2. 使用 NPM 的 init 命令为应用创建一个 package.json 文件。这个命令将请求一系列的信息，包括应用的名称和版本，程序初始进入点的文件名（默认为 index.js）。
   `npm init`
3. 安装 Express
   `npm install express`
4. 可以调用 `require()` 函数来使用库(commen js)

```

const express = require('express');
const app = express();

app.get('/', (req, res) => {
res.send('Hello World!')
});

app.listen(8000, () => {
console.log('示例程序正在监听 8000 端口！')
});

```

5. node + 文件名启动服务器
   `node index.js`
6. 访问 URL `http://127.0.0.1:8000/`(8000 为上文定义的端口)

#### 开发依赖

`npm install eslint --save-dev`
如果一个依赖只在开发过程中用到，应该将其保存为“开发依赖”`--save-dev`,生产环境中不会安装

安装后的`package.json`

```

"devDependencies": {
"eslint": "^5.12.0"
}

```

#### 运行任务

`npm run script`

定义 script

```

"scripts": {
...
//eslint 在 src/js 目录下
"lint": "eslint src/js"
...
}

```

#### 安装 Express 应用生成器

Express 应用生成器 工具可以生成一个 Express 应用的“框架”。可以用 NPM 这样安装它（-g 参数可以把该工具全局安装，那样就可以在任意应用中使用了）(脚手架)

`npm install express-generator -g`

##### 创建 express app

进入应用目录，运行以下命令，即可创建一个名为 "helloworld" 的 Express 应用：

`$ express --help`

接下来

`npm install`

终端运行

`> SET DEBUG=helloworld:* & npm start`(windows)

打开网站,app 已经运行

## 创建一个本地图书馆网站

- 使用 Express 应用生成器创建一个应用骨架。
- 启动和停止 Node web 服务器。
- 使用数据库存放应用数据。
- 创建路由来处理不同信息的请求，创建模板（"视图"）来渲染 HTML 数据以在浏览器中显示。
- 使用表单。
- 部署应用到生产环境。

code:https://github.com/mdn/express-locallibrary-tutorial

## 创建站点框架

1. 安装生成器
   `sudo npm install express-generator -g`
2. 创建项目
   `cd $`
   `express`
3. 运行项目
   `npm install`
   `DEBUG=express-locallibrary-tutorial:* npm start`或者`npm start`(不显示调试信息)

#### 文件改动时重启服务器

默认状态,重启服务器才能看到 Express 网站的改动

可以安装模块来实现实时改动的功能

##### nodemon

nodemon 是最简便的自动化工具之一
`sudo npm install -g nodemon`

`nodemon $`启动进程
`ctrl c`终止进程

配置 package.json

```

"scripts": {
"start": "node ./bin/www",
"devstart": "nodemon ./bin/www"
},

```

`devstart`可以启动 app

#### 目录结构

package.json 文件定义依赖项和其他信息，以及一个调用应用入口（/bin/www，一个 JavaScript 文件）的启动脚本，脚本中还设置了一些应用的错误处理，加载 app.js 来完成其余工作。/routes 目录中用不同模块保存应用路由。/views 目录保存模板。

1. package.json
   定义应用依赖和其他信息

   依赖包括 express 包，和选用的视图引擎包（pug）。还有以下一些实用的包：

- cookie-parser：用于解析 cookie 头来填充 req.cookies（提供了访问 cookie 信息的便捷方法）。
- debug：一个小型 node 调试程序，仿照 node 核心的调试技术建立。
- http-errors：处理错误中间件。
- morgan：node 专用 HTTP 请求记录器中间件。

  script: 定义了一个脚本，当运行 npm start 时会调用它来启动服务器。

2. www 文件

作为应用的入口(react 中的 app.js)

需要引入真实的应用入口,app.js.
app.js 会设置并返回 express 应用对象
`var app = require('../app')`

3. app.js
   此文件创建一个 express 应用对象（依照惯例命名为 app），通过各种设置选项和中间件来设置这个应用，然后从该模块中导出。

4. 路由
   /routers
   首先引入 express,再获取 express.router 模块,最后 module.exports()导出作为 app.use(router,function())的 router
5. 视图(模板)
   /views
   ```/* GET home page. */
   router.get('/', function(req, res) {
   res.render('index', { title: 'Express' });
   });
   ```

````

```

```

#### 使用数据库(Mongoose)

```

```

```

```

```

```
````
