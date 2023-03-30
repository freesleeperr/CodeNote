# Next.js

## 介绍

一个为前端的全栈框架

为 React 提供更多功能

是多页面的 web 框架

## creat-next-app

首先选择配置项

`_app.tsx` app 入口

`next build`打包
`next start`运行打包后的文件

加载顺序:
先加载页面
再加载 js 代码
js 代码重新渲染页面

build 之后:产生静态首页和 js 页面,加载静态首页之后,还会加载 js 进行再次渲染

纯静态网站`npm run export`

## 静态路由

next.js 的文件目录就是路由
必须要包含 index.tsx 文件
如果访问的目有 index,返回 index,没有 index 返回 404,
访问目录中的文件就返回文件的页面

`build`能够在命令行查看路由结构,能够提示静态 static 和 server 页面

可以在 pages/404.tsx 中自定义 404 页面

## 动态路由

`import { useRouter } from "next/router"`

```
export default function Hello() {
  const router = useRouter();
  const id = router.query.postId;
  return <h1>helloid{id}</h1>;
}

```

### 动态路由文件命名

会接收数字
`localhost:3000/[page].tsx`
接收任何地址,把之后的所有输入的 url 返回一个数组
`[...params].tsx`

## 页面加载数据并渲染

```
import { useState, useEffect } from "react";
export default function Page() {
  const [data, setData] = useState<any[]>([]);
  const [time, setDT] = useState("");
  const fetchData = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setData(res.posts);
        setDT(new Date().toString());
      });
  };
  useEffect(() => {
    fetchData(), [];
  });
  return (
    <>
      <h4>{time}</h4>
      <ul>
        {data.map((item) => (
          <li>
            <h4>{item.title}</h4>
          </li>
        ))}
      </ul>
    </>
  );
}
```

## 构建时获取预生成的页面

起初,网站是以 html 为中心构建的
框架:以 js 为中心构建网站 app,方便程序开发,但是不利于爬虫爬取内容,

解决方案:
通过构建函数

`getStaticProps`静态传递数据
`getStaticPaths`静态传递动态路由参数

## Link/Router 进行路由跳转 Next 数据预取

`import Link from "next/link";`
`import {useRouter} from "next"`

## 按需加载静态页
