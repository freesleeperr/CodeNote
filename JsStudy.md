1. js 对象类型
   Number（数字）
   String（字符串）
   Boolean（布尔）
   Symbol（符号）（ES2015 新增）
   Object（对象）
   Function（函数）
   Array（数组）
   Date（日期）
   RegExp（正则表达式）
   null（空）
   undefined（未定义）

2. 如果给定的字符串不存在数值形式，函数会返回一个特殊的值 NaN（Not a Number 的缩写

3. 两个特殊值 JavaScript 还有两个特殊值：Infinity（正无穷）和 -Infinity（负无穷）

4. string.lenghth 可以访问字符串的长度，字符串也有 methods（方法）能让你操作字符串和获取字符串的信息。

5. null 和 undefined 的区别
   JavaScript 中的 null 表示一个空值（non-value），必须使用 null 关键字才能访问，undefined 是一个“undefined（未定义）”类型的对象，表示一个未初始化的值，也就是还没有被分配的值。

6. js 类型转换
   false、0、空字符串（""）、NaN、null 和 undefined 被转换为 false
   所有其他值被转换为 true

7. 如果你用一个字符串加上一个数字（或其他值），那么操作数都会被首先转换为字符串。如下所示："3" + 4 + 5; // 345，通过与空字符串相加，可以将某个变量快速转换成字符串

8. js 控制结构
   while 是一直执行，do-while 则会至少执行一次

   for...of 语句在可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句

   for...in 语句以任意顺序迭代一个对象的除 Symbol 以外的可枚举属性，包括继承的可枚举属性。

   逻辑运算符&& 和 || 运算符使用短路逻辑（short-circuit logic），是否会执行第二个语句（操作数）取决于第一个操作数的结果。在需要访问某个对象的属性时，**使用这个特性可以事先检测该对象是否为空**

   `var name = o && o.getName();`
   或用于缓存值（当错误值无效时）

在需要多重分支可以使用基于一个数字或字符串的 **switch** 语句：
`switch(action) { case 'draw': drawIt(); break; case 'eat': eatIt(); break; default: doNothing(); }`
break 会在执行之后停止解释后面的代码
case 的表达式是按照严格相等运算符进行比较

9. js 对象
   创建对象的两个方式：`var obj= new object() //对象字面量 var obj = {}` 访问对象的两个方式： `obj.name ="hello" obj.[name]="hello"`
   _可以访问保留字属性_

10. 数组
    两种方法，new Array,数组字面量`var = a= ['dog','cat','hen']`

如果访问不存在的索引=>undefined

`[phoneType]: 12345} 可以用来替换 var userPhone = {}; userPhone[phoneType] = 12345`

Array.length 并不总是等于元素个数
`var a = ["dog", "cat", "hen"]; a[100] = "fox"; a.length; // 101`

数组遍历
for...of 遍历可迭代对象
for...in 遍历数组的**索引** index
forEach ex
`["dog", "cat", "hen"].forEach(function(currentValue, index, array) { // 操作 currentValue 或者 array[index]`

数组操作
`//从 start 开始，删除 delcount 个元素，然后插入所有的 item。 a.splice(start ,delcount[,item])`
`//将 item 插入数组头部，返回数组新长度（考虑 undefined）。 a.unshift(item1[, item2[, ...[, itemN]]])`

11. 函数
    _最重要的是理解对象和函数两个部分_

    `function add(x, y) { var total = x + y; return total; } `

函数的参数实际为函数体的 arguments 对象

如果函数的最后一个命名参数以...为前缀，则它将成为一个由剩余参数组成的真数组，其中从 0（包括）到 theArgs.length（排除）的元素由传递给函数的实际参数提供。

####剩余参数和 arguments 的区别

1. 剩余参数只包含那些没有对应形参的实参，而 arguments 对象包含了传给函数的所有实参。
2. arguments 对象不是一个真正的数组，而剩余参数是真正的 Array 实例，也就是说你能够在它上面直接使用所有的数组方法，比如 sort，map，forEach 或 pop。
3. arguments 对象还有一些附加的属性（如 callee 属性）。

####自定义对象

当使用在函数中时，this 指代当前的对象，也就是调用了函数的对象。如果在一个对象上使用点或者方括号来访问属性或方法，这个对象就成了 this。如果并没有使用“点”运算符调用某个对象，那么 this 将指向全局对象（global object）。

new 关键词
作用 它的作用是创建一个崭新的空对象，然后使用指向那个对象的 this 调用特定的函数。注意，含有 this 的特定函数不会返回任何值，只会修改 this 对象本身。new 关键字将生成的 this 对象返回给调用方，而被 new 调用的函数称为构造函数。习惯的做法是将这些函数的首字母大写，这样用 new 调用他们的时候就容易识别了。

call()接收参数数组
apply()只接受一个参数

内部函数：js 允许在一个函数内部定义函数

####闭包
闭包（closure）是一个函数以及其捆绑的周边环境状态（lexical environment，词法环境）的引用的组合。换而言之，闭包让开发者可以从内部函数访问外部函数的作用域。在 JavaScript 中，闭包会随着函数的创建而被同时创建。
闭包是由函数以及声明该函数的词法环境组合而成的。该环境包含了这个闭包创建时作用域内的任何局部变量。

在 js 创建函数时，会自动生成该函数的词法作用域

闭包加 IIFE()(){}可以实现私有变量
