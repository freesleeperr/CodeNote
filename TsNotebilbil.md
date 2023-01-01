## Ts udemy

## day1

#### Ts 安装使用

`npm install`

编译
`tsc code.js`

#### 类型系统

在开发时检查，而不是运行时
编译后，js 的引擎中没有类型检查系统

##### 类型推断

如果不给定义的变量确定类型，则会变为 any 类型。

##### 新类型

1. 元组 tuple

是一种全新的 Array 类型
当你明确数组包含的元素数量，以及类型后，就适合使用元组

```
const person:{
   role：[number,string]
   {

```

2. 枚举 enum

定义 Role 类型
`enum Role {ADMIN,READ_ONLY,AUTHER}`
名字并非强制大写，属于命名习惯

枚举类型类似数组，有 index，默认从 0 开始

初始化 ADMIN 为 1，枚举从 1 开始
`enum Role {ADMIN = 1,READ_ONLY,AUTHER}`

3. 任意 any

相当于原生 js 的类型系统（任何类型）

4. 联合类型

ex：对象有多个类型

```
function combine(input1:number | string, input2:number | string){
   if (typeof input1 === "number" && typeof input2 ==='number'){
      result= input1+ input2
   }else{
      return
   }
}
```

5. 字面量类型 Literal

如果结合联合类型，就显得有用多了。举个例子，当函数只能传入一些固定的字符串时：

```
function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left");


```

6. 自定义类型

使用情景：多次联合类型复用

`type Combine= number|string`
`let input1:Combine`

7. void 无类型

   不返回任何东西，不同于 null 以及 undefined
   例如``console.log("hello")

8. unknown

类似 any，但是不能对 unknow 进行任何操作

9. never

   当进行收窄的时候，如果你把所有可能的类型都穷尽了，TypeScript 会使用一个 never 类型来表示一个不可能存在的状态。


#### 编译