# C# 入门

## 环境

### VS

选择 c#终端新建

## 控制台

命令 ctrl+f5
Console.Write("")...

## 注释

与 js 相同
`# region`,`# endregion`折叠代码标签

## 变量

申明方式`变量类型 变量名 = 初始值`

### 变量类型

#### 有符号的整形变量 能存储一定范围的正负数数值

sbyte:-128~127,占 1 字节
int:+-21 亿,占 4 字节
short:-32768~32767,占 2 字节
long:+-9 百万兆,占 8 字节

#### 无符号的整形变量

byte:0~255 占 1 字节
unit:0~24 亿 占 4 字节
ushort:0~65535 占 2 字节
ulong:0~18 百万,占 8 字节

#### 浮点数

特点:存小数,按照有效数字计算,超出的会四舍五入

float:存储 7~8 位有效数字,数字最后要加`f`,因为默认为 double 类型,占 4 个字节
double:存储 15~17 位有效数字,占 8 个字节
decimal:存储 27~28 的有效数字,数字最后要加`m`,占 16 个字节 128 位

#### 特殊类型

bool:表示真假的类型
char:存储单个字符的变量类型 2 个字节，表示 1 个 Unicode 字符
string:字符串

_变量可以没有初始值,但是不建议_

### 变量的本质

所占的内存越大,存储的信息越多
本质:二进制的 0 和 1
1byte=8bit(8 个 0/1)

2 进制转 10 进制
10 进制转 2 进制

对于有符号的,左侧第一位存储符号

### 命名规则

不能重名
不能以数字开头
不能使用关键字
不能有特殊符号

### 声明常量

const
`const int mynumber = 13`

1. 必须初始化(必须提供一个值)
2. 不得被修改

在游戏中用于定义不会变化的数值

### 转义字符

用途: 显示特殊符号

固定写法\
常用写法:

- 双引号\"
- 单引号\'
- 换行\n
- 斜杠\\
- 制表符\t 看起来像 4 个空格
- 光标退格\b
- 空字符\0
- 警告音\a
- 取消转义字符@

### 隐式转换

#### 无符号的隐式转换

ulong>unit>ushort>byte

大范围的可以存储小范围的值,变量的类型也会发生改变

#### 有符号的隐式转换

long>int>short>sbyte
相同与无符号

#### 浮点数的隐式转换

double>float>所有整型(无符号+有符号) decimal(无法隐式转换)

#### 不同类型转换

- 特殊类型无法转换
- 有符号的变量无法转换成无符号的数
- 无符号的数在不超出范围的情况下可以转换为有符号的数
- 浮点数可以装任何类型的整数(double,float)

- decimal 可以隐式存储所有整形(无符号+有符号)
- bool 无法隐式转换

- char 可以隐式转换为整型和浮点型(ascii 码)
- 一个字符对应一个数字编码
- string 无法隐式转换

#### 总结

- 高精度转换为低精度
- double>float>整型>char
- decimal>整型>char
- long>int>short>sbyte
- ulong>unit>ushort>byte
- 无符号>X 有符号
- 有符号>无符号(范围必须符合)

### 显式转换

#### 括号强转

把高精度转换为低精度,可以避免报错
变量类型 变量名 = (变量类型)变量
`double i = 1.1234831352511f`强行转为 float
`i2 = (float)i`

- 在强行转换时注意范围,否则会有异常
- 浮点数强转整形会丢失小数点后的数字
- bool&string 不能通过括号强转

#### Parse 法

- 把字符串类型转换为对应的类型
  `变量类型.Parse("字符串")`

#### Convert 法

`int a = Convert.ToInt32("12")`

- 精度比括号强转好,会四舍五入
- bool 也可以转
- 每个类型都有对应的转换方法

#### 其他类型转 string

拼接打印
`str= "123"+1+true`
`str=a.toString(123)`

### 错误捕获

```
try{

}catch{

}finall{

}
```

## 运算

### 运算符

在运算浮点数时需要加 f
取余运算`%`
运算符逻辑跟 js 相似
`++`
第一种形式是前缀增量操作。 该操作的结果是操作数加 1 之后的值。

第二种形式是后缀增量操作。 该运算的结果是操作数增加之前的值,操作数加 1。

- 计算连续++时,值为上一次++后数值

#### 字符串拼接

字符串无法运算但是可以使用+/+=拼接
或者`string.Format("待拼接的{0}",{1}...,str0,str1...)

#### 条件运算

- 返回 bool 类型的值,`<,>,==`
- 先计算再比较
- 不能比较范围
- 特殊类型和相同类型比较

### 位运算

连接两个数值进行计算,将数值转换为二进制

1. 位与
   `&` 遇 0 侧零
2. 位或
   `|` 有 1 侧 1
3. 异或
   `^` 相同位为 1,否则 0
4. 取反
   `~` 0 变为 1,如果第一位为符号位,正负也会改变
5. 左移
   `<<`左移几位,右侧加几个零
   `>>`右移几位,右侧去掉几个数

### 三元运算

`string str=false?"t":"f"`

- 必须要保证真假结果的类型是一致的

### 条件分支语句

```
if(bool){
if(bool){

}

}else if(bool){

}else{

}
```

### Switch

从上向下执行语句

```
switch(常数){
   case 常数:
   Console.WriteLine("a为1");
   break;
   ...
   default:
      break;
}
```

条件等于== case 会执行当前语句

#### 贯穿

当满足某些条件时,做的事情一样,就可以贯穿

```
switch(常数){
   case 常数:
   case 常数2:
   Console.WriteLine("a为1");
   break;
   ...
   default:
      break;
}
```

### 循环语句

#### while

当代码执行完,会回到 while

死循环,可能造成程序卡死

bool 可以使用作为条件
break 直接跳出循环,包括死循环
continue 回到循环一开始

#### do...while

先执行一次,再进行判断再决定是否继续

```
do{
   Console.Write(a)
   ++a
}while(a,2)
```

#### for

```
for(/初始表达式/,/条件表达式/,/增量表达式/){
//循环代码逻辑
};
for(int i = 0,i<10,i++>){
   Console.WriteLine(i);
};
//for循环条件可以省略来产生死循环
for(int i = 0,,i++>){
   Console.WriteLine(i);
   while(i>20){
      break;
   }
};
```

for 循环可以准确得到一个范围中的所有数

## 总结

1. 讲练结合
2. 培养良好的学习习惯
3. 培养程序思维

做题,实践+思考

# C# 基础

## 复杂数据类型

特点: 1.数据集合
一般是多个是数据(变量集合再一起的数据) 2.自定义
一般可以自己取名字,可以自定义

- 枚举:整形常量的集合
- 数组:任意变量类型的顺序存储的顺序
- 结构体: 任意变量的数据集合

## 枚举

被命名的整形变量的集合
一般用来表示状态,类型...

### 声明枚举&声明枚举变量

声明枚举:创建一个自定义枚举类型
声明枚举变量:使用声明的自定义枚举类型,创建一个枚举变量

### 声明语法

名字: 以 `E`或者`E_`开头,作为命名规范

```
enmu E_自定义枚举名{
   //从零默认向下累加
   自定义枚举名字0,
   自定义枚举名字1,
   自定义枚举名字2,
};
```

若改变默认枚举序号

```
enmu E_自定义枚举名{
   //从零默认向下累加,从1开始累加
   自定义枚举名字0=1,
   自定义枚举名字1,
   自定义枚举名字2,
};
```

#### 声明枚举的位置

- 声明在 namespace 区域
- 在 class,struct 语句块中
- 不得在函数语句块中声明

#### 声明枚举变量

```
enum E_MyMonster
    {
        Normal,//0
        Boss,//1

    };
enum E_Player
    {
        Wizard = 3,
        Knight,

    };

E_PlayerType mainPlayer = E_Player.wizard;
```

### 结合 switch 使用

```
switch(mainPlayer){
   case E_Player.Wizard:
   //dosomething wizard
   break
   case E_Player.Knight:
   //dosomething knight
   break
};
```

### 类型转换

#### 与 int 互相转换

`int a = (int)mainPlayer`

#### 与 string 互相转换

//枚举转换为 string
`string str= playerType.Tostring();`
//string 转换为枚举
`playerType =(E_PlayerType)Enum.Parse(typeof(E_PlayerType),"Wizard");`

### 枚举的作用

表示状态时，可以把数字和描述结合起来，用作标识状态的含义。

## 数组

### 基本概念

一维,多维,交错数组

### 数组声明

1. 声明但是未初始化
   `变量类型[] 数组名;`
2. 声明并初始化,长度确定,用 0 填充
   `变量类型[] 数组名 = new 变量类型[数组的长度]`
3. 声明并确定对象
   `变量类型[] 数组名 = new 变量类型[数组长度]{内容}`
4. 内容确定数组长度
   `变量类型[] 数组名 = new 变量类型[]{内容}`
5. 内容确定数组长度,省略[]
   `变量类型[] 数组名 = {内容 1,内容 2....}`

### 数组的使用

1. 数组的长度
   `array.length()`
2. 获取数组中的元素
   `array[0]`
   从下标和索引获取,注意不能越界,否则会报错
3. 修改数组中的元素
   `array[0]= 0`
4. 遍历数组 通过循环 快速获取数组

   ```
   for(int i=0;i<array.Length;i++){
     Console.WriteLine(array[i]);
   };
   ```

5. 增加数组的元素
   `int[] array2 = new int[6];`
   数组初始化后不可以添加元素,但是可以进行搬家操作,把原数组放到新的数组中

   ```
   for(int i=0;i <array.length;i++){
     array2[i] = array[i];
   }
   ```

   把原数组放到新的数组中，来增加数组项

6. 删除数组的元素
   原理与增加相同，但是长度变为新`array.length`
7. 查找数组中的元素
   遍历所有数组项目，再进行对应

#### 总结

1. 同一变量的数据集合
2. 需要的操作，声明，遍历，增删查改
3. 所有变量类型都可以声明为数组
4. 用于批量存储同一类型对象的，比如所有的怪物、玩家。。。

## 二位数组

同时具有行,列属性的数组

### 二维数组的声明

1. 类型`[,]`,`[行数,列数]`
2. 未初始化`int arr[,]`
3. 初始化`int [,] arr2 = new int[3,3]`3 行 3 列
4. 初始化并确定内容 `int [,] arr2 = new int[3,3]{{1,2,3},{3,4,5},{7,8,9}}`

### 二维数组的操作

1. 获取长度

```
// 获取行
Console.WriteLine(array.GetLenght(0));
//获取列
Console.WriteLine(array.GetLenght(1));
```

2. 获取二维数组的元素
   `array[0.,0]`
   获取第零行第零列
3. 修改二位数组
   `array[0,0] = 3`
4. 遍历二维数组
   通过嵌套循环来进行遍历

```
for (int i = 0;i<array.GetLength(0);i++){
   for (int j = 0;j<array.GetLength(1);j++){
   Console.WriteLine(array[i,j])
   }
}
```

5. 增加，减少数组
   同一维数组，利用搬家的方式进行操作
   创建目标数组，遍历原数组赋值

### 总结

1. 同一变量类型的行列数据综合
2. 声明，遍历，增删改查
3. 所有的变量可以声明为二维数组
4. 一般用来存储矩阵，也可以当作地图格子

## 交错数组

不常用
数组的数组,类型：`[][]`,`[,][,]`,`[][,]`,`[,][]`

行数确定,列数不确定
`int[][] arr = new int[][]`

## 引用和值类型

### 使用的区别

值类型: `int a =10;`无符号整形,有符号整形,浮点数,char,bool,结构体
引用类型:`int[] arr2=arr;`,`string a = "hello,world"`数组(一维,二维,交错) string 类

值类型:内容被拷贝,但是内容没有关联(他变我不变)
引用类型:两者指向同一类型(它变我也变)

### 原因

值类型和引用类型存储的地方不同

- 值存储在栈中-系统分配,自动回收,小而快
- 引用存储在堆空间中-手动申请和释放,大而慢

### 特殊的引用类型 String

String 虽然是引用类型,但是具有值类型的特征

频繁改变 string 会产生内存垃圾,原来的内存会保留

## 函数

### 基本概念

本质是一块有名称的代码块
可以使用函数名称的方法执行该代码块
封装函数可以重复使用

### 主要作用

1. 封装代码
2. 提升代码复用率
3. 抽象行为

### 声明位置

class/struct 语句块中

### 基本语法

```
static 返回类型 参数名（类型0 参数名0，类型1 参数名1）{
   函数代码逻辑；
   // 可选，有返回类型才需要返回
   return 返回值

}
```

- static 不是必须的，类和结构体
- void 表示没有返回值
- 返回类型可以写任意的变量类型， 14 种变量类型 + 复杂数据类型（数组，结构体，类 class）
- 使用 Pascal 命名，MyName
- 参数类型也可是任意类型
- 参数命名采用驼峰命名，myName
- 参数不是必须的，多个参数需要用逗号隔开

- 当返回值非 void ，必须 return 相应类型，viod 时也可选 return

### 返回值类型

1. 有参有多返回值

```
static int[] Cal(int a, int b){
   int svm;
   int avg = sum/2;
   return new int[]{svm,avg}
}
```

- 前提是使用者知道规则
- 返回值可以用表达式
- return 可以不执行之后的代码,直接返回函数外部

## ref out

作为函数参数的修饰符

如果我们想要通过函数改变一个值类型变量的值，这样写是没有办法改变的。因为我们知道值类型在进行值传递时，是在栈空间中重新开辟了空间，将内容拷贝到新空间。

ref 可以改变参数的值

### out

ref 传入的变量必须初始化,out 不用
out 传入的变量必须在内部赋值,ref 不用

### 总结

ref 传入时函数收到的时一个地址,并附带一个值,进行修改时直接修改地址,如果不加 ref 函数会仅仅收到一个数值

- 作用:解决值类型和引用类型在函数内部改值或者重新声明,能够影响外部传进来的变量,使其也能被修改
- 使用: 参数前家 ref/out
- 区别:ref 传入时必须初始化,可改可不改,out 不用初始化,但是必须要修改

## 变长参数

ex:怎样求 n 个整数和

```
//加入关键字params后可以传入n个参数
static int Sum(params int[] arr){
   int  sum =0;
   for (int i =0;i<arr.length;i++){
      sum +=arr[i];
   }
   return sum
}
```

1. params int[] 意味着可以传入 n 个同类型参数,传入的参数可以传入 arr 数组中
2. params 关键字后必为数组!!!
3. 函数参数中最多只能出现一个 params 关键字 ,并最后一组参数前可以有 n 个参数

```
static void E (string name,int a,int b, params string[] things){

}
```

## 参数默认值

`static void Speak2(string a,string t="123",string="hello")`
支持多参数默认值
如果混用,可选参数必须写在普通参数后
作用:一般用来处理不同参数的同一类型的逻辑处理

## 函数重载

概念:同一个语句块中,函数名相同,函数参数类型,个数,顺序不同的函数
调用时 程序会根据传入的参数判断哪一个需要重载

```
static int CalcSum(int a,int b){
   return a + b;

}

static int CalcSum(int a,int b,int c){
   return a + b + c;

}


```

ref 和 out 可以理解成一一种变量类型,但是不能同时使用

## 递归函数

函数自己调用自己就叫递归函数
必须能够自己停止,否则会 stackoverflow!!!

```
static void Fun(int a){
Console.WriteLine();
if(a>10){
   return
}
a++;
}
```

结束循环可以用条件语句`return`一个常量

## 结构体

```
struct 自定义结构名(Pascal){
   第一部分
   变量

   第二部分
   构造函数(可选)

   第三部分
   函数
}

```

例如

```
struct Student{
   int age,
   bool sex,
   int number,

}
```

### 变量

结构体声明的变量不能初始化,只能在外面初始化
可以写任意类型的结构体
不能够写自己的结构体

### 函数

```

struct Student{
int age,
bool sex,
int number,
void Speak{
age++;
}
}

```

表现数据结构的行为
在结构体中的方法不需要 static 关键字
函数中可以直接使用结构体的变量

### 如何使用

默认为`privite`模式,变量只能在结构体内部函数使用,而 `public`可以让变量可以在外部使用

### 结构体的构造函数

没有返回值的函数
函数名必须和结构体同名
必须有参数!!!
声明了构造函数,那么必须初始化

```

struct Student{
int age,
bool sex,
int number,

void Count{
age++;
}

}

```

### 总结

struct 是函数和变量的集合,表示特点的数据集合
访问修饰符:public 和 private
构造函数:没有返回值,函数名和结构名相同,帮助快速初始化对象

注意:

1. 结构体声明的变量不能初始化,只能在外部或者函数中初始化
2. 在结构体声明的函数不用家 static

## 冒泡排序

排序: 升序 AtoZ,降序 ZtoA
![Alt text](f:/%E5%9B%BE%E7%89%87/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202023-03-06%20162445.png)

### 排序方法

遍历项目,如果第 n 个数比 n+1 个数要大,则交换位置

```
for (int m = 0;m<arr.Length;m++){
   for(int n=0;n<arr.Length-1;n++){
      if(arr[n]>arr[n+1]){
       int temp = arr[n];
       arr[n] = arr[n+1];
       arr[n+1] =temp;
      }
   }
}
```

### 优化方法

1. 确定极限值之后,极值不参与比较

```
for (int m = 0;m<arr.Length - 1 - n;m++){
   for(int n=0;n<arr.Length-1;n++){
      if(arr[n]>arr[n+1]){
       int temp = arr[n];
       arr[n] = arr[n+1];
       arr[n+1] =temp;
      }
   }
}
```

2. 添加排序标志

```
for (int m = 0;m<arr.Length;m++){
   bool isShort= false;
   for(int n=0;n<arr.Length-1-m;n++){
      isShort = true;

      if(arr[n]>arr[n+1]){
        int temp = arr[n];
        arr[n] = arr[n+1];
        arr[n+1] =temp;
      }
   }
   if(!isShort){
      break;
   }
}
```

### 总结

两两相邻,不停比较,不停交换,比较 m 轮
套路写法,两层循环,外层轮数,内层比较,两值比较,满足交换

## 选择排序

新建一个中间变量

遍历找到极值,把极值放在最初或者最末的位置

每一轮开始,默认 第一个为极值

```
int index=0;
for(int n =1;n<arr.Length;n++){
   if(arr[index]<arr[n]){
     index=n;
   }
}

```

放入目标位置

```
length - 1 轮数
if(index != arr.Length - 1 - 轮数){
  int temp = arr[index];
  arr[index]= arr[arr.Length - 1 - 轮数];
  arr[arr.Length - 1 - 轮数] = temp;
}

```

### 总结

```
for(int m=0;m<arr.Length;m++){
int index=0;
for(int n =1;n<arr.Length;n++){
   if(arr[index]<arr[n]){
     index=n;
   }
   //用来排除上一轮已经放好的数
   if(index != arr.Length - 1 - m){
      int temp = arr[index];
      arr[index]= arr[arr.Length -1-m];
      arr[arr.Length - 1- m] = temp
   }

  }
}


```

# C#核心

切忌浮躁!!

## 面向对象基本概念

面向过程:分析出解决问题所需步骤,用函数一步步实现

面向对象:对现实世界理解和抽象的编程方法,把更高的数据和方法组织为一个整体看待,从更高的层次进行程序开发,更贴近事物自然的运行模式

_万物皆对象_

### 如何学习

`class`关键词

三大特性
封装+继承+多态

## 类 Class

### 什么是类

具有相同特征
具有相同行为
一类事物的抽象
类是对象的模板
可以通过类创建对象

### 声明语法

声明在命名空间

```
class 类名{
   特征--成员变量
   行为--成员方法
   保护特征--成员属性

   构造函数和解析函数
   索引器
   运算符重载
   静态成员
}

```

### 类声明实例

```
//Pascal
//同一语句块不同类不得重名
class Person{

}
class Machine{

}

```

### 类对象

- 类的申明 和类对象申明是两个概念
- 类似于枚举和结构体的申明,类相当于声明了一个自定义变量类型
- 对象是类创建出来
- 相当于申明一个指定类的变量
- 类对象创建一般称为实例化对象
- 类对象都是引用类型

### 实例化对象基本语法

`类名 变量名`
`类名 变量名 = null;
(null)代表空`
`类名 变量名 = new 类名()`

### 实例化的对象

```
Person p;
//代表空,不分配内存(stack)空间
Person p2= null;
相当于一个人对象;
Person p3= new Person();
相当于又是一个人对象
Person p4= new Person();

两个实例之间没有关系
```

### 总结

类和类对象声明是两个概念
类的声明式声明对象的模板,用来抽象形容事物
类对象的声明是来表示现实中的个体的

类--一个自定义变量类型
实例化类对象是在声明变量

## 成员变量和访问修饰符

### 成员变量

1. 声明在类语句块中
2. 用来描述对象特征
3. 可以是任意变量类型
4. 数量不做限制
5. 是否赋值根据需求确定

### 访问修饰符

- public 公共的　自己内部和别人外部都能访问和使用
- private 　私有的　自己内部才能访问和使用　默认为 private
- protected 　保护的　自己内部和子类才能访问和使用
  目前决定类内部的访问权限

### 成员变量的使用和初始值

按照类型：

- 值类型：数字类型默认为 0，bool 默认为 false
- 引用类型：初始值为空`null`

  `Console.WriteLine(default(type))`
  可以查看值类型默认值

### 总结

1. 3p 修饰符
2. 如果类中有相同于类的成员变量，不得初始化
3. 成员变量，描述特征，在类中声明，随意赋值，默认值但是不相同，任意类型和数量

## 成员方法

### 基本概念

成员方法函数 用来表现对象行为

1. 声明在语句块中
2. 用来描述对象行为
3. 规则和函数声明规则相同
4. 受到访问修饰符影响
5. 返回值参数不受限制
6. 方法数量不做限制

```
class Person{
   public string name;
   public void Speak(string str){
      Console.Write(name+str);
   }
}
```

### 注意

成员方法不要加 static 关键字
成员方法必须实例化对象,再通过对象使用,相当于对象执行了某个行为
成员方法收到访问修饰符影响

### 使用方法

必须先实例化对象,再通过对象使用,相当于该对象执行了某个行为
可以把复杂方法添加进对象来使用

## 构造 解析 垃圾回收

### 构造函数

基本概念：实例化对象时，会调用初始化的函数
如果不写，默认存在一个无参构造函数

#### 构造函数基本概念

1. 没有返回值
2. 函数名和类名必须相同
3. 没有特殊需求，一般为 public

4. 构造函数可以重载
5. this 代表当前函数调用的对象自己

注意：
如果不自己实现无参构造函数而实现有参构造函数会默认失去函数的无参构造

#### 构造函数的写法

1. 没有返回值
2. 函数名和类名必须相同
3. 没有特殊需求时，一般为 public

```
 class Person{
  public string name;
  public int age;
  public Person(){
   name = "Tim"
   age=18；
  }
  public Person(int age){
   //代表当前的成员变量
   this.age=age;
  }
  //重载可以写无数个，一般把重要变量写在一个函数中
  public Person(int name,int age){
   //代表当前的成员变量
   this.age=age;
   this.name=name;
  }
 }


```

4. 构造函数可以重载
5. this 代表当前调用该函数的对象自己

#### 构造函数特殊写法

```
public Person(int age, string name):this(){
 public Person(){
   this.age = 10
 }
 public Person(int age):this(age){
   this.age =age;
 }
}
```

### 析构函数

#### 析构函数概念

- 当引用类型的堆内存被回收时,会调用该函数
- 对于需要手动管理内存的语言(c++),需要在析构函数中做一些内存回收处理
- 但是 c#中存在垃圾自动回收机制 GC
- 所以几乎不使用析构函数,除非在某一个垃圾回收时需要特殊处理

#### 基本语法

```
//垃圾回收前调用
//类名前加~
~类名(){

}
```

### 垃圾回收机制 GC

Gabage Collector

- 垃圾回收遍历堆上(Heap)上动态分配所有对象
- 通过识别它们是否被引用来确定哪些对象时垃圾,哪些对象仍要被使用
- 所谓垃圾就是没有被任何变量,对象引用的内容

#### 垃圾回收算法

引用技术(Reference Counting)
标记清除(Mark Sweep)
标记整理(Mark Compect)
复制集合(Copy Collection)

注意:
GC 只负责堆 Heap 中的垃圾回收
引用类型都是存储在堆中,分配和释放都通过垃圾回收机制来管理

栈 stack 内存是由系统自动管理的
值类型在栈 stack 中分配内存,有自己声明周期,不用内存管理,会自动分配和释放

##### C# 中内存回收机制的大概原理

0 代内存
1 代内存
2 代内存
代的概念:
代是垃圾回收的一种算法(分代算法)
新分配对象都会配置在 0 代内存中
每次分配都可能进行垃圾回收释放内存(0 代内存满时)

- 在一次内存回收过程开始时,垃圾回收期会认为堆中全是垃圾,会进行以下两步

1. 标记对象 从根(静态字段,方法参数)开始检查引用对象,标记后为可达对象,未标记未不可达对象,不可达对象=垃圾
2. 搬迁对象压缩堆(挂起执行代码线程) 释放未标记对象 搬迁可达对象 修改引用地址

打对象总是被认为第二代内存,目的是减少性能损耗,提高性能
不会对大对象进行搬迁压缩 85000 字节(83kb)以上的对象为大对象

_新的对象放在 0 代,老的放不下的放在 1,2 代_
![Alt text](f:/%E5%9B%BE%E7%89%87/Screenshot%202023-03-09%20213840.png)

### 总结

1. 构造函数
   实例化对象时 调用的函数
   主要初始化成员变量

基本语法
不行返回值
函数名和类名相同
访问修饰符根据需求而定
一般为 public

注意
可以重载构造函数
可以用`:this()`重用代码
可以在函数中用 this 区分同名参数和成员变量
有参构造顶掉默认的无参构造 2. 析构函数
函数名前`~`
不写返回值修饰符参数
函数名和类名相同 3. 垃圾回收 GC

## 成员属性

### 基本概念

1. 用于保护成员变量
2. 为成员属性的获取和赋值添加逻辑处理
3. 解决 3p 的局限性
   public--内外访问
   private--内部访问
   protect--内部和子类访问
   属性可以让成员变量在外部
   只能获取，不能修改或者只能修改不能获取

### 访问修饰符

```
访问修饰符 属性类型 属性名{
   get{}
   set{}
}
```

```
class Person{
  string name
  //属性命名使用帕斯卡命名法
  public string Name{
   get{
      //返回内容，必须与函数名一致
      //读取时返回name的值
      return name;
   }
   set{
      //赋值时执行该代码
     name = value;
   }
  }
}
```

可以用于数据的加密处理

```
class Person{
  string name
  //属性命名使用帕斯卡命名法
  public string Name{
   get{
      //返回内容，必须与函数名一致
      //读取时返回name的值
      return name;
   }
   set{
      //加密数据，传入值小于零侧数据归零
     if(value <0){
      value = 0;
     }
     name = value;
   }
  }
}
```

//或者使用加密和解密算法

```
class Person{
  string name;
  int money;
  //属性命名使用帕斯卡命名法
  public string Money{
   get{
      //解密算法
      return money-5;
   }
   set{
      //加密算法
      return money+5;ss
   }
  }
}
```

### get set 前加访问修饰符

默认不加会使用属性声明时的权限
访问修饰符低于属性的访问权限
不能让 get 和 set 都低于属性的权限

```
class Person{
string name;
int money;
//属性命名使用帕斯卡命名法
//内部权限不得都高于外部
private string Money{
get{
//解密算法
return money-5;
   }
private set{
//加密算法
return money+5;
   }
  }
}
```

可以只有 get/set,但是不需要加访问修饰符

### 自动属性

属性语句块中只有 get 和 set
作用:外部不能该的特征,如果类中只有一个特征是外部不能该的,没有特殊处理
可以使用自动属性

## 索引器

### 索引器基本概念

基本概念:
让对象可以像数组通过索引访问其中元素,使程序更直观,更容易编写

### 语法

```
访问修饰符 返回值 this[参数类型 参数名,参数类型 参数名 ]{
 内部的写法和规则和索引器相同
 get{}
 set{}
}
```

### 使用方法

```
class Person{
   private Person[] friends;
   public Person this[int index];
   //访问数组成员属性的元素
   public Person this[int index]{
      get{
         return friend[index];
      }
      set{
            if(friends == null){
               friends = new Person[]{value};

            }else if(index>friends.Length-1){
               friends[friends.Length -1]=value;
            }
            friends[index]=value;
      }
   }
}
```

### 总结

可以让我们以中括号自定义类中的元素 规则自定 访问时与数组相同
适用于类中有数组变量 可以方便逻辑处理

写法:
访问修饰符 返回值 this[参数列表]
get/set
可以重载

## 静态成员

```
class Test{
   static public float PI = 3.1415926;
   public int testInt = 100;
   public static float Calc(float r){
      return PI;
   }
}
```

静态成员可以直接使用

### 静态成员使用的原理

首先，对象，变量，函数想要使用必须在内存作为分配内存空间
实例化就是分配内存空间，在程序中产生抽象的对象

### 静态成员的特点

1. 程序开始运行时就会分配内存空间，我们可以直接使用
2. 静态成员和程序同生共死！！！
3. 只要使用，直到程序结束内存才会释放
4. 静态成员会有自己的内存空间
5. 静态成员具有唯一性
6. 任何地方使用该函数，使用的都是该空间的内存

静态函数中不能使用非静态成员

### 静态成员的作用

常用的唯一的变量声明
方便别人获取的变量声明
静态方法：
常用的唯一方法声明，比如公式

### 常量和静态变量

`const`可以理解为特殊的`static`

比较:
相同点
他们都可以从类名点出使用
不同点:

1. const 必须初始化 不能修改 static 没有这个规则
2. const 只能修改变量 static 可以修改很多
3. const 一定写在访问修饰符后面 static 没有这个要求

```
class Test{
   //必须要初始化
   public const int G = 11;
}
```

### 总结

用 static 修饰成员变量,成员方法,成员属性,称为静态成员
特点:类名点出来直接使用
生命周期:和程序同生共死,运行后存在内存中,程序 4 结束才会释放,因此具有唯一性
注意:静态函数不能用非静态成员,非静态可以使用静态成员

比较常量和静态变量:
常量是特殊的静态变量
相同点:
他们都可以通过类名点出来使用
不同点:

1. const 只能初始化不能修改,static 没有这个规则
2. const 只能修饰变量,static 可以修饰变量,函数,class
3. const 不能写在访问修饰符前,需要写在变量声明前,static 没有这个规则

## 静态类和静态构造函数

特点: 只能包含静态成员
不能被实例化

作用:

1. 将常用的静态成员写在静态类中,方便使用
2. 静态类不能实例化,更能体现工具类的唯一性
   ex:Console

```
static class TestStatic{
public static int testIndex = 0;
public static void TestFun(){
   get;
   set;
}
}
```

### 静态构造函数

,没法使用 3p 修饰符

```
static class TestStatic{
public static int testIndex = 0;
public static void TestFun(){
   get;
   set;
}
static StaticClass(){
   Console.WriteLine()
}
}
```

第一次使用静态类或者静态变量,会自动执行静态构造函数

在非静态类中也可以使用,同样也会在第一次使用类中内容时执行

### 总结

静态类
用 static 修饰的类
特点:
只能包含静态成员
不能实例化
作用:
工具类
拓展方法

静态构造函数:
用 static 修饰的构造函数
特点:静态类和普通类都有静态构造函数
不能使用访问修饰符
不能有参数
只会自动调用一次
作用:
初始化静态成员

## 拓展方法

概念：
为现有非静态变量类型添加新方法

### 作用

1. 提升程序拓展性
2. 不需要在对象中重新写方法
3. 不需要继承
4. 为别人封装的类型写额外的方法

### 特点

1. 一定在静态类中
2. 一定是静态函数
3. 第一个参数为拓展目标
4. 第一个参数用 this 修饰

### 实例

可以在任意的静态类中声明
为 int 拓展系统方法

```
static class Tools{
public static void SpeakValue(this int value){
   Console.WriteLine("拓展方法")
   int i =10；
   }
}
```

### 为非静态自定义类型添加方法

```
static class Tools{
   public static void SpeakValue(this int value){
   Console.WriteLine("拓展方法")
   int i =10；
   }
   //
   public static void Fun2(this Test t){
      Console.WriteLine("为Test拓展的方法");
   }
}

```

注意：如果类成员方法充满，则添加的方法不会生效

### 总结

提升程序拓展性
不需要在对象中重新写方法
不需要继承添加方法，可以为别人封装的类型添加额外方法
可以有返回值和 n 个参数

## 运算符重载

概念

让自定义类和结构体能够使用运算符
使用关键字 operator

特点:

1. 一定是公共静态方法
2. 返回值写在 operator 前
3. 逻辑处理自定义

作用:

让自定义和结构体可以进行运算

注意

1. 条件运算符需要成对出现
2. 一个符号可以使用多个重载
3. 不能使用 ref/out

### 实例

```
class Point {
   public int x:
   public int y;
   public static Point operator +(Point p1,Point p2){
    Point p = new Point();
    p.x = p1.x+p2.x;
    p.y =p1.y++p2.y;
    return p;
   }
}
```

### 运算符可重载和不可重载的

1. 算数运算符
   都可以进行重载
   注意参数的数量
2. 逻辑运算符
   !只能重载逻辑非
3. 位运算符
   |,&,»,«,^,~取反,可以进行重载
   注意参数数量
4. 条件运算符
   <>,>=,<=,必须成对重载
5. 不可重载的运算符
   逻辑或&&,逻辑与||,索引符[]
   ,强转运算符(),特殊运算符,三目运算符?,:

### 固定语法

`public static 返回值 operator 运算符(参数列表)`
作用:
让子第定义类或结构体对象,进行运算
注意:

1. 参数的数量
2. 条件运算符配对实现
3. 一个符号,多个重载
4. 不能使用 ref/out

## 内部类

概念:
在一个类中再声明一个类
特点:
使用时要用包裹者点出自己
作用:
亲密关系的变现
注意:
访问修饰符作用很大

```
class Person{
  public int age;
  public string name;
  public Body body;
  public class Body{
   Arm leftArm;
   Arm rightArm;
   class Arm{

   }
  }
}
```

### 分布类

把一个类分成几部分声明
关键字:partial
作用:
分部描述一个类
增加程序的拓展性
注意:
分布类可以写在多个脚本文件中
分布类的访问修饰符要一致
分布类中不能有重复成员

```
partial class Student{
   public int number;
   public void Speak(string str){

   }
}
```

## 继承

### 概念

一个类 a 继承类 b
类 a 会继承类 b 的所有成员
a 类将拥有 b 类所有特征和行为

被继承的类,称为父类,基类,超类

继承的类:子类,派生类
子类可以有自己的特征和行为

### 特点

1. 单根性:子类只能有一个父类
2. 传递性:子类可以间接继承父类的父类

### 基本语法

```
class 类名: 被继承的类名{

}
```

### 实例

```
class Teacher{
 public string name;
 public int number;
 public void SpeakName(){
   Console.WriteLine(name);
 }
}
```

```
//继承Teacher类
class TeachingTeacher : Teacher{
   public string subject;
   //添加特有的方法
   public void SpeakSubject(){
      Console.WriteLine(subject);
   }
}
```

可以通过继承父类获得父类的父类的特征和行为
`private`会导致子类无法访问
`protected`外部无法使用，但是子类可以使用

### 子类和父类的同名成员

可以在子类中使用与父类同名的元素，但是会覆盖父元素的元素
`public new string name`

不建议使用

### 总结

继承基本语法
单根性，传递性，protect

## 里氏替换原则

任何父类出现的地方,子类都可以替代
因为子类包括父类的所有内容
方便进行对象存储和管理

### 基本实现

```
//继承父类
class Player:Gameobject{
public void MonsterAtk(){
   ...
}

}

```

`GameObject player = new Player()`

### is /as

基本概念
is:判断一个对象是否为指定类对象
返回值:bool 是为真,不是为假
`类对象 is 类名`

```

//判断是否属于Player类
if(player is Player){

}
```

as:将一个对象转换为指定类对象
返回值:指定类型对象
成功返回指定类型对象,失败返回 null
`类对象 as 类名`
注意:转换的对象之间必须有继承关系

## 继承中的构造函数

### 概念

当声明子类对象时,先执行父类,在执行子类的构造函数

1. 父类的无参构造很重要
2. 子类可以通过 base 关键字,代表父类,调用父类构造

### 继承中构造函数的执行顺序

从父类构造函数开始执行

### 父类的构造函数很重要

子类实例化,默认自动调用父类的无参构造,如果父类无参被顶掉会报错

### 使用 base 调用指定父类构造

```
class Father{
  public Father(int i){
   Console.WriteLine("父类")
  }

}
class Son:Father{
   public Son(int i):base(i){

   }
}
```

不去指定 base 会默认使用无参构造函数

特点:先执行父类的再执行子类的,从老祖宗开始,依次一代一代向下运行

父类无参很重要,如果被顶掉,子类就无法使用默认无参构造函数

如何解决:始终保持声明无参构造
通过 base 来指定父类的构造
