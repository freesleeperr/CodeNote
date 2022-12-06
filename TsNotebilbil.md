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

5. 文本类型
