# CSS

我们知道，CSS 中万物皆盒

## 结构

整个结构被称为规则分为：选择器（Selector），声明（Declaration），属性（Properties），属性的值（Property value）

- 如果要同时修改多个属性，只需要将它们用分号隔开
- 也可以选择多种类型的元素并为它们添加一组相同的样式。将不同的选择器用逗号分开。

## 选择器

元素选择器：所有指定 (该) 类型的 HTML 元素`p{}`
ID 选择器：具有特定 ID 的元素`#{}`
类选择器：具有特定类的元素`.class{}`
属性选择器：拥有特定属性的元素`img[src]`
伪选择器：特定状态下的特定元素（比如鼠标指针悬停）`a:hover`(停留在连接上)

## 盒子模型

页面里大部分 HTML 元素都可以被看作若干层叠的盒子。
padding：即内边距，围绕着内容（比如段落）的空间。
border：即边框，紧接着内边距的线。
margin：即外边距，围绕元素外部的空间。
![Alt text](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics/box-model.png)

width ：元素的宽度
background-color ：元素内容和内边距底下的颜色
color ：元素内容（通常是文本）的颜色
text-shadow ：为元素内的文本设置阴影
display ：设置元素的显示模式（暂略）

### 文档体格式设置

```
body {
//内容区域
  width: 600px;
//最外层的空白边缘
  margin: 0 auto;
//背景颜色
  background-color: #FF9500;
//内容区域和边框之间的范围
  padding: 0 20px 20px 20px;
//边框
  border: 5px solid black;
}
```

```
h1 {
  margin: 0;
  padding: 20px 0;
  color: #00539F;
  text-shadow: 3px 3px 1px black;
  }
```

```
img {
  display: block;
  margin: 0 auto;
}
```

## 层叠与继承

_层叠样式表_

### 关于规则冲突

### 优先级

```
优先级从上到下递增
类型选择器（例如，h1）和伪元素（例如，::before）
类选择器 (例如，.example)，属性选择器（例如，[type="radio"]）和伪类（例如，:hover）
ID 选择器（例如，#example）。`
```

- 一个元素选择器不是很具体，则会选择页面上该类型的所有元素，所以它的优先级就会低一些。
- 一个类选择器稍微具体点，则会选择该页面中有特定 class 属性值的元素，所以它的优先级就要高一点。

  !important 此声明将覆盖其他声明

### 层叠

当应用两条同级别的规则到一个元素的时候，写在后面的就是实际使用的规则。

### 继承

继承也需要在上下文中去理解——一些设置在父元素上的 CSS 属性是可以被子元素继承的，有些则不能。
`width、margin、padding 和 border`不会被继承
`color font-family`会被继承

#### 控制继承的 5 个属性

`inherit,initial,revert,revert-layer,unset`

#### 直接添加 vs 继承

为目标元素直接添加样式，永远比继承样式的优先级高，无视优先级的遗传规则。

## 选择器

### 选择器列表

```
h1 {
  color: blue;
}
.special {
  color: blue;
}
//组合成为选择器列表
h1,
.special {
  color: blue;
}
```

**当你使用选择器列表时，如果任何一个选择器无效 (存在语法错误)，那么整条规则都会被忽略。**

### 种类

`h1 { }`，`.box { }`，`#unique { }`，` a[title] { }`,

#### 标签属性选择器

这组选择器根据一个元素上的某个标签的属性的存在以选择元素的不同方式：`a[href="https://example.com"] { } `

#### 伪类和伪元素

伪类：选择在某个时机的某个元素
`a:hover { }`

伪元素
选择一个元素的部分而不是元素自己

`p::first-line { }`选择`<p>`元素的第一行

运算符
可以将其他选择器组合起来，更复杂的选择元素。
`article > p { }`
下面的示例用运算符（>）选择了<article>元素的初代子元素。

## 盒子模型

两种盒子:块级盒子，内联盒子

### 块级盒子

- 盒子会在内联的方向上扩展并占据父容器在该方向上的**所有可用空间，在绝大数情况下意味着盒子会和父容器一样宽**
- 每个盒子都会换行
- width 和 height 属性可以发挥作用
- 内边距（padding）, 外边距（margin）和 边框（border）会将其他元素从当前盒子周围“推开”

ex：`<h1>`,`<div>`
_width&height 默认调整的是内容区域的宽和高，不包括 padding，border，margin，border-box 可以同时调整，从而不影响元素尺寸_

### 内联盒子

- 盒子不会产生换行。
- width 和 height 属性将不起作用。
- 垂直方向的内边距、外边距以及边框会被应用但是不会把其他处于 inline 状态的盒子推开。
- 水平方向的内边距、外边距以及边框会被应用且会把其他处于 inline 状态的盒子推开。

### Display

我们可以通过使用类似 flex 的 display 属性值来更改**内部显示**类型。如果设置 display: flex，在一个元素上，外部显示类型是 block，但是内部显示类型修改为 flex。

### 盒子模型的各部分

- Content box: 这个区域是用来显示内容，大小可以通过设置 width 和 height.
- Padding box: 包围在内容区域外部的空白区域；大小通过 padding 相关属性设置。
- Border box: 边框盒包裹内容和内边距。大小通过 border 相关属性设置
- Margin box: 这是最外面的区域，是盒子和其他元素之间的空白区域。大小通过 margin 相关属性设置。
  ![Alt text](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model/box-model.png)

### 两种盒子模型的设置方式

#### content-box

在标准模型中，如果你给盒设置 width 和 height，实际设置的是 content box。padding 和 border 再加上设置的宽高一起决定整个盒子的大小

_备注： margin 不计入实际大小 —— 当然，它会影响盒子在页面所占空间，但是影响的是盒子外部空间。盒子的范围到边框为止 —— 不会延伸到 margin。_

#### broder-box

`box-sizing:border-box`
所有宽度都是可见宽度，所以内容宽度是该宽度减去边框和填充部分

### 外边距，内边距，边框

#### 外边距 margin

- 盒子周围一圈看不到的空间
- 能够推开其他元素
- 数值可以为正或者为负，为负会导致元素重叠
- 无论使用标准模型还是替代模型，外边距总是在计算可见部分后额外添加。

- 外边距折叠
  理解外边距的一个关键是外边距折叠的概念。如果你有两个外边距相接的元素，这些外边距将合并为一个外边距，即最大的单个外边距的大小。

不会影响 width，height

#### 边框

边框是在边距和填充框之间绘制的。如果您正在使用标准的盒模型，边框的大小将添加到框的宽度和高度。
如果您使用的是替代盒模型，那么边框的大小会使内容框更小，因为它会占用一些可用的宽度和高度。（包含在 height，width 属性中）

设置方式`border`
`border-style`,`border-color`

#### 内边距

- 位于边框和内容区域之间
- 不能有负数量的内边距
- 通常将内容推离边框

### 盒子模型和内联盒子

以上所有的方法都完全适用于块级盒子。有些属性也可以应用于内联盒子
`<span>`元素会创建内联盒子
内联盒子：宽度、高度、边距、边框和内边距，
宽度和高度被忽略，外边距、内边距和边框是生效的（padding）

#### display：inline-blockdisplay

有一个特殊的值，它在内联和块之间提供了一个中间状态。这对于以下情况非常有用：您不希望一个项切换到新行，但希望它可以设定宽度和高度，并避免上面看到的重叠。

- 设置 width 和 height 属性会生效。
- padding, margin, 以及 border 会推开其他元素。

## CSS 背景与边框

### background-color

定义了 CSS 中任何元素的背景颜色。属性接受任何有效的`<color>`值。背景色扩展到元素的内容和**内边距的下面**。

### background-image

元素的背景中显示图像
大图不会缩小以适应方框,小图则是平铺以填充方框,默认会重复

### 控制背景平铺

`background-repeat`

```
no-repeat — 不重复。
repeat-x —水平重复。
repeat-y —垂直重复。
repeat — 在两个方向重复。
```

### 控制背景图像大小

情景：我们有一个很大的图像，由于它比作为背景的元素大，所以最后被裁剪掉了

`background-size`可以设置为长度或者百分比
关键字：

- cover —浏览器将使图像足够大宽比。在这种情况下，，使它完全覆盖了盒子区，同时仍然保持其高有些**图像可能会跳出盒子外去**
- contain — 浏览器将使图像的大小适合盒子内。在这种情况下，如果图像的长宽比与盒子的长宽比不同，则可能在**图像的任何一边或顶部和底部出现间隙。**

### 背景图像定位

`background-position`属性允许您选择背景图像显示在其应用到的盒子中的位置
使用坐标系定位，框的左上角为(0,0),默认为(0,0)
一个水平值后面跟着一个垂直值
关键字`top`,`bottom` ,`left`,`right`

### 渐变背景

`background-image:linear-gradient`

渐变类型：线性，径向，重复

### 多个背景图像

也可以有多个背景图像——在单个属性值中指定多个 background-image 值，用逗号分隔每个值。
你可能会以背景图像互相重叠而告终，背景将与最后列出的背景图像层在堆的底部

- 渐变可以与常规的背景图像很好地混合在一起。

多个背景集合写法

```background-image: url(image1.png), url(image2.png), url(image3.png), url(image4.png);
background-repeat: no-repeat, repeat-x, repeat;
background-position: 10px 20px,  top right;
```

不同的属性具有不同数量的值时，较小数量的值会循环,最后一个设置赋到第一个上。

### 背景附加

`background-attachment`
指定他们如何滚动时，内容滚动

scroll: 使元素的背景在页面滚动时滚动。如果滚动了元素内容，则背景不会移动。实际上，背景被固定在**页面的相同位置**，所以它会随着页面的滚动而滚动。

fixed: 使元素的背景固定在视图端口上，这样当页面或元素内容滚动时，它就不会滚动。它将始终保持在**屏幕上相同的位置**。

local: 这个值是后来添加的 (它只在 Internet Explorer 9+中受支持，而其他的在 IE4+中受支持)，因为滚动值相当混乱，在很多情况下并不能真正实现您想要的功能。局部值**将背景固定在设置的元素**上，因此当您滚动元素时，背景也随之滚动。

### 边框

当我们使用 CSS 向元素添加边框时，我们使用一个简写属性在一行 CSS 中设置边框的颜色、宽度和样式。我们可以使用 border 为一个框的所有四个边设置边框。

```
.box {
  border: 1px solid black;
}
```

### 圆角

`border-radius`
可以使用两个长度或百分比作为值，第一个值定义水平半径，第二个值定义垂直半径

```
.box {
  border-radius: 10px;
}
```

或使右上角的水平半径为 1em，垂直半径为 10％：

```
.box {
  border-top-right-radius: 1em 10%;
}
```

## 处理不同方向的文本

`writing-mode`书写模式
`writing-mode: vertical-rl`竖向文本

- horizontal-tb: 块流向从上至下。对应的文本方向是横向的。
- vertical-rl: 块流向从右向左。对应的文本方向是纵向的。
- vertical-lr: 块流向从左向右。对应的文本方向是纵向的。

横向书写模式下，映射到 width 的属性被称作内联尺寸（inline-size）——内联维度的尺寸。而映射 height 的属性被称为块级尺寸（block-size），这是块级维度的尺寸。下面的例子展示了替换掉 width 的 inline-size 是如何生效的。

## 溢出的内容 overFlow

溢出是在你往盒子里面塞太多东西的时候发生的

如果你已经用 width 或者 height 限制住了一个盒子，CSS 假定，你知道你在做什么，而且你已经控制住了溢出的隐患。

**在盒子里面需要放置文本的时候，限制住块方向的尺寸是会引起问题的**因为可能会有比你在设计网站的时候所预计的文本更多的文本，或者文本变大了——比如用户增加字体大小的时候。

### `overflow`属性

控制一个元素溢出的方式，默认值为 `visible`,所以默认情况下能看到

`overflow: hidden`隐藏掉溢出
`overflow: scroll`总是会在盒子周围显示滚动条
` overflow-y:`,`overflow-x: `在元素的一个方向总是显示滚动条

### 溢出建立了块级排版上下文

你改变了 overflow 的值的话，对应的盒子就变成了更加小巧的状态。在容器之外的东西没法混进容器内

### 网页设计时不需要的溢出

你偶尔会遇到一些盒子，它们的内容遮到了页面上的其他内容。如果你看到了，那么你现在应该知道，这就是溢出，理论上你应该能重新排布这些布局，使得它不必依赖于盒子尺寸的调整。

## 值和单位

- 绝对长度单位：px（像素）
- 相对长度单位：em（在 font-size 中使用是相对于父元素的**字体大小**，在其他属性中使用是相对于自身的字体大小，如 width）

### 两个相对的单位 rem，em

rem：从根元素字体获取大小，数值为根元素的多少倍
em：从父元素的字体获取大小，数值为父元素的多少倍

### 百分比

相对于父元素的大小，元素放在不同大小的父元素，会导致大小变化

### 数字

有些值接受数字，不添加任何单位如`opacity`

### 颜色

1. 直接 keyword
   `black`,`white`
2. hex
   `#c55da1`洋红
3. RGB，RGBA
   `rgb(197, 93, 161)`洋红
   _RGBA 指定的颜色透明，`opacity`元素和它里面的所有东西都透明_
4. HSL,HSLA
   hsl(174, 77%, 31%)
   - 函数接受色调、饱和度和亮度值作为参数色调：颜色的底色。这个值在 0 和 360 之间，表示色轮周围的角度。
   - 饱和度：颜色有多饱和？它的值为 0 - 100%，其中 0 为无颜色 (它将显示为灰色阴影)，100% 为全色饱和度
   - 亮度：颜色有多亮？它从 0 - 100% 中获取一个值，其中 0 表示没有光 (它将完全显示为黑色)，100% 表示完全亮 (它将完全显示为白色)

### 图片

`<image>` 数据类型用于图像为有效值的任何地方。

数值

- 通过 url()函数指向的实际图像文件，
- 渐变。

### 位置

`<position>` 数据类型表示一组 2D 坐标，用于定位一个元素，
如背景图像 (background-position)。它可以使用关键字 (如 top, left, bottom, right, 以及 center ) 将元素与 2D 框的特定边界对齐，以及表示框的顶部和左侧边缘偏移量的长度。

一个典型的位置值由两个值组成——第一个值水平地设置位置，第二个值垂直地设置位置。**如果只指定一个轴的值，另一个轴将默认为 center**

### 字符串和标识符

在某些地方可以使用 CSS 中的字符串，例如 在指定生成的内容时。

### 函数

`calc()`能够在 CSS 中进行简单的计算

```
.box {
  width: calc(20% + 100px);
}
```

_每个属性都有一个已定义的允许值列表，每个值都有一个定义来解释子值是什么_

## 在 CSS 中调整大小

### 原始尺寸，或固有尺寸

原始尺寸：在受 CSS 设置影响之前，HTML 元素有其原始的尺寸,比如`<img>`

固有尺寸：由其所包含的内容决定。

ex：空的`<div>`没有尺寸

块级元素，而块级元素的行为就是这样的。它没有高度，或者说高度为 0，因为内部没有内容。

### 设置具体的尺寸

当给元素指定尺寸（然后其内容需要适合该尺寸）时，我们将其称为**外部尺寸**

如果给块级元素指定尺寸`width`,`height`，那么无论里面放什么都是固定尺寸

如果内容的数量超出了元素可容纳的空间，则设置的高度会导致内容溢出。

由于存在溢出问题，在网络上使用长度或百分比固定元素的高度需要非常小心。

### 使用百分数

如果你给予了子盒子一个百分数作为宽度，那么它指的是**父容器**宽度的百分数。

如果对 padding，margin 使用百分比
值是以包含块的内联尺寸进行计算的,相对于父元素的宽度 width 计算的，margin 上下左右都是如此

果没有为元素声明 width 的时候，此时元素的宽度取决于父元素的 width，这样可以得到流式布局，元素的外边距会扩大和缩小来适应父元素的大小。

### min&max

`max-width`的常见用法为，在没有足够空间以原有宽度展示图像时，让图像缩小，同时确保它们不会比这一宽度大。

### 视口单位

视口，即你在浏览器中看到的部分页面，

`1vh`等于视口高度的 1%，`1vw`则为视口宽度的 1%.

## 图像、媒体和表单元素

### 替换元素

CSS 不能影响它们的内部布局——而仅影响它们在页面上相对于其它元素的位置

某些替换元素（例如图像和视频）也具有宽高比。这意味着它在水平（x）和垂直（y）方向上均具有大小，并且默认情况下将使用文件的固有尺寸进行显示。

_可以调节图片，视频在盒子中的显示大小_

对`<img>`元素使用
`object-fit`（类似`background-size`）
`cover` 来缩小图像，同时维持了图像的原始比例
`contain`，图像就会被缩放到足以完整地放到盒子里面的大小
`fill` 值，它可以让图像充满盒子，但是不会维持比例。

- flex 布局中，替换元素不会被拉伸，有自己的默认行为
  替换元素在成为网格或者弹性布局的一部分时，有不同的默认行为就好了

```
//强制拉伸图像
img {
  width: 100%;
  height: 100%;
}
```

### from 元素

`<input>`

```
//选择不同属性的input
input[type="text"],
input[type="email"] {
  border: 2px solid #000;
  margin: 0 0 1em 0;
  padding: 10px;
  width: 100%;
}

input[type="submit"] {
  border: 3px solid #333;
  background-color: #999;
  border-radius: 5px;
  padding: 10px 2em;
  font-weight: bold;
  color: #fff;
}

input[type="submit"]:hover {
  background-color: #333;
}
```

在一些浏览器中，表单元素默认不会继承字体样式，因此如果你想要确保你的表单填入区域

```
button,
input,
select,
textarea {
  font-family : inherit;
  font-size : 100%;
}
```

### 表格样式

暂时略过

## 调试 CSS

### 审查 CSS

右键该元素，选择审查元素（Inspect）；从 DevTools 左侧 HTML tree 中选择该元素。

有用的功能是将简写属性展开的功能。在我们的示例里面使用了 margin 的简写

### 编辑 CSS

### 添加 CSS

### 找到被重叠覆盖的 css

dev 中被划掉的项目

## 组织 CSS

# bem

## bems 是啥？

Bem 是块（block）、元素（element）、修饰符（modifier）的简写

## 规则

- `-` 中划线 ：仅作为连字符使用，表示某个块或者某个子元素的多单词之间的连接记号。

- `__`双下划线：双下划线用来连接块和块的子元素

- `_`单下划线：单下划线用来描述一个块或者块的子元素的一种状态

```
.block {}

.block__element {}

.block--modifier {}
```

## flex

一维布局

两根轴线：主轴，交叉轴

### 主轴

row，row-reverse,column,column-reverse

- row
  ![row](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox/basics1.png)
- column
  ![Alt text](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox/basics2.png)

### 交叉轴

交叉轴垂直于主轴，所以如果你的 flex-direction (主轴) 设成了 row 或者 row-reverse 的话，交叉轴的方向就是沿着列向下的。

![Alt text](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox/basics3.png)

### 起始线和终止线

不同文字的书写方向不同，比如阿拉伯文。所以用起始而不是左右。

### flex 容器

`display: flex/inline-flex`
此时元素就成了容器

- 元素排列为一行 (flex-direction 属 性的初始值是 row)。
- 元素从主轴的起始线开始。
- 元素不会在主维度方向拉伸，但是可以缩小。
- 元素被拉伸来填充交叉轴大小。
- flex-basis 属性为 auto。
- flex-wrap 属性为 nowrap。

### flex-direction

更改方向 row、column

### flex-wrap

控制换行

### flex-flow

你可以将两个属性 flex-direction 和 flex-wrap 组合为简写属性 flex-flow。第一个指定的值为 flex-direction ，第二个指定的值为 flex-wrap.

### flex 元素上的属性

- flex-grow
- flex-shrink
- flex-basis

#### flex-basis

定义了该元素的空间大小（the size of that item in terms of the space）
如果没有给元素设定尺寸，flex-basis 的值采用元素内容的尺寸。

#### flex-shrink

flex-grow 属性是处理 flex 元素在主轴上增加空间的问题，相反 flex-shrink 属性是处理 flex 元素收缩的问题。如果我们的容器中没有足够排列 flex 元素的空间，那么可以把 flex 元素 flex-shrink 属性设置为正整数来缩小它所占空间到 flex-basis 以下。与 flex-grow 属性一样，可以赋予不同的值来控制 flex 元素收缩的程度 —— 给 flex-shrink 属性赋予更大的数值可以比赋予小数值的同级元素收缩程度更大。

#### flex-grow

flex-grow 若被赋值为一个正整数，flex 元素会以 flex-basis 为基础，沿主轴方向增长尺寸。这会使该元素延展，并占据此方向轴上的可用空间（available space）。如果有其他元素也被允许延展，那么他们会各自占据可用空间的一部分。

### flex 简写

## 元素间的空间分配

### align-items

侧轴对齐
初始值 stretch（拉伸高度）
flex-start（从副轴开始时对齐）
flex-end
center（在副轴中心对齐）

### justify-content

主轴对齐
初始值 flex-start
flex-end
center
space-around
space-between
