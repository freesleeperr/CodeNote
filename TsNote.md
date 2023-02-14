# 从零开始的 TS 笔记

## day1

## 11.23

## 1.基础类型

#### 布尔 Boolean

true/false

#### 数字 Number

和 JavaScript 一样，TypeScript 里的所有数字都是浮点数。
支持：二进制和八进制十进制和十六进制

#### 字符串 String

和 JavaScript 一样，可以使用双引号（"）或单引号（'）表示字符串。

同 JS 模板字符串可用

#### 数组 Array

1. 可以在元素类型后面接上[]，表示由此类型元素组成的一个数组
   `let list: number[] = [1, 2, 3]`
2. 使用数组泛型
   `Array<元素类型>`
   `let list: Array<number> = [1, 2, 3]`

#### 元组 Tuple

元组表山一个已知元素和类型数量的数组，各数组类型不必相同
ex：

```
 // Declare a tuple type let x: [string, number]; // Initialize it x = ['hello', 10]; // OK // Initialize it incorrectly x = [10, 'hello']; // Error`

```

当访问一个越界的元素，会使用联合类型替代

#### 枚举 enum

`enum` 类型是对 JavaScript 标准数据类型的一个补充。

`enum Color {Red, Green, Blue} let c: Color = Color.Green`
默认情况下，从 0 开始为元素编号

也可以从 1 开始
`enum Color {Red = 1, Green, Blue} let c: Color = Color.Green`

全部都采用手动赋值：
`enum Color {Red = 1, Green = 2, Blue = 4} let c: Color = Color.Green`

`let colorName:string=color[2]`
colorName='Green'

#### 任意值 Any

`let notSure: any = 4`
notSure 可以赋任意类型的值

##### 与`let notSure: object`的区别，

定义为 object 无法使用其身上的方法

##### 如果知道一部分的数据类型

`let list: any[] = [1, true, "free"]; list[1] = 100`

#### 空值 Void

```
function warnUser(): void {
    alert("This is my warning message");
}
```

与 any 相反，没有任何类型
如果函数没有返回值，返回值的类型为`void`
`void `类型的值只能赋值为 undefined 和 null
`let unusable: void = undefined`

#### Null&Undefined

_默认情况下 null 和 undefined 是所有类型的子类型。_
可以赋给任意类型的变量

##### --strictNullChecks

null 和 undefined 只能赋值给 void 和它们各自

#### Never

**never 类型表示的是那些永不存在的值的类型。**
ex：总是会抛出异常的函数的返回值类型

变量也可能是 never 类型，当它们被永不为真的类型保护所约束时。
同 null&undefined 一样，never 也是任意类型的子类型

```
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}
```

_啥都不是但是又存在的类型_

#### 类型断言

直接告诉编译器数据的类型

1. 尖括号语法

   ```
   let someValue: any = "this is a string"
   //编译器并不知道someValue的具体类型，指定someValue为`string`
   let strLength: number = (<string>someValue).length`

   ```

2. as 语法

```let someValue: any = "this is a string";

let strLength: number = (someValue as string).length

```

jsx/react 中，只允许 as 语法

#### 关于 let

代替 var

## 变量声明

使用`let`，`const`代替 var

## 接口( interface)

#### 介绍

ts 核心原则，对所有值进行结构检查。

ts 中，接口的作用:为这些类型命名或为代码第三方定义契约。

**定义对象的形状（shape)**
类型检查器不会去检查属性的顺序，只要存在想应的属性是对的就可以。

#### 可选属性

_定义接口时，可以不存在的属性_
如果不希望对象完全匹配类型对象的形状，那么可以用可选属性。

(option bags)模式，给函数传入的参数只有部分属性赋值。

```
interface SquareConfig {
color?: string;
width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
let newSquare = {color: "white", area: 100};
if (config.color) {
newSquare.color = config.color;
}
if (config.width) {
newSquare.area = config.width \* config.width;
}
return newSquare;
}

let mySquare = createSquare({color: "black"});


```

在可选属性名字定义后面加`?`

但是仍然不允许添加未定义的属性

#### 任意属性

在接口属性中添加`[propName:string]：any`

_一旦定义了任意属性，那么确定属性和可选属性必须时它类型的子集_
ex

```
//报错
interface Person {
    name: string;
    age?: number;
    [propName: string]: string;
}
//类型被推断为{ [x: string]: string | number; name: string; age: number; gender: string; }
let tom: Person = {
    name: 'Tom',
    age: 25,
    gender: 'male'
}

```

- 一旦定义任意属性,比如 string
  ，那么确定属性和可选属性必须时该类型的子集。（可选属性 age 的类型不能为 number）
- 一个接口

#### 只读属性

`readonly`

又 readonly 的接口，该属性在初始化后不得被修改。

```
interface Person {
    //id定义readonly
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom: Person = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
};
//修改会报错
tom.id = 9527;
```
注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候.