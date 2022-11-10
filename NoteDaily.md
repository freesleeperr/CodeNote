# 10.31

## react day1

### react 组件

1. props（properties）组件接收的参数，通过 render 方法展示
2. render 返回值是 react 元素，是屏幕所显示的内容

```class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}
//ex:<ShoppingList name="Mark" /> 传值给shopping list
props.name="Mark"
```

# 11.1

## react day2

### react 组件

1. props
   在 Board 组件的 renderSquare 方法中，我们将代码改写成下面这样，传递一个名为 value 的 prop 到 Square 当中：

```
class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
}
```

2. JSX 标签中的函数需要{}包裹，并且需要使用箭头函数 3.在类中定义的 handleClick 和 render 方式是定义在类的原型上了。只用类的实例对象才可以调用，且函数内部的 this 指向实例本身。在 ReactDOM.render()执行的时候，会帮我们 new 一个实例对象，并调用 render 方法，所以在 render 方法内部的 this 指向实例自身。但是
   `<button onClick={this.handleClick}>点我</button>`
   这里绑定的事件处理函数为 this.handleClick 方法的引用。但是当我们点击的时候，handleClick 的执行上下文为 Window，由于 jsx 经 babel 编译后会开启严格模式。所以 this 指向变为 undefined。

3. this.state 初始化状态 5.在所有含有构造函数的的 React 组件中，构造函数必须以 super(props) 开头。(Es6class)

4. react 不可变性，变更对象时采用创建对象的副本再进行编辑，而不是从原本的对象上更改。

5. react 区分同级，会根据每一项列表元素的 key 来检索上一次渲染时与每个 key 所匹配的列表项。

6. setState 为异步函数，会延迟执行

7. react 元素 是不可变的，要重新渲染，需要调用 root.render()

8. react 标签必须大写开头

9. JSX 的语法比 HTML 更严格。类似 <br /> 这样的标签是必须要关闭的。并且，组件也不能返回多个并列最高层级的 JSX 标签，你必须为所有最高层级的标签添加一个共同的父标签，例如使用 <div>...</div> 或 作为父标签：

# 11.2

## react day 3

## Next.js day0

1. react 多次渲染同一个组件，该组件会获得自己的状态 state

2. 钩子 hooks
   只有 class 组件有生命周期，函数式组件没有

3. SPA 页面，不切换 HTML 来显示内容

#### react 设计哲学

1. 分解组件
   单一责任
2. use state
   把 state 直接放在函数里面

# 11.3

## react day4

## doc review

1. npx npm 附带的 package 运行工具

#### why JSX?

React 认为渲染逻辑本质上与其他 UI 逻辑内在耦合。

本质为
`React.createElement(component, props, ...children)`

在 JSX 语法中，你可以在大括号内放置任何有效的 JavaScript 表达式。
`const name = 'Josh Perez'; const element = <h1>Hello, {name}</h1>;`

tip:将内容包裹在括号中，防止分号干扰代码

JSX 也是表达式，编译后作为普通 Javascript 函数调用，在其取值后得到 js 对象,可以使用 if，也就是说，你可以在 if 语句和 for 循环的代码块中使用 JSX，将 JSX 赋值给变量，把 JSX 当作参数传入，以及从函数中返回 JSX：

JSX 中，{}代表表达式，而""则代表字符串字面量，同一属性不能同时使用

命名，采用 camelCase 来定义属性名，而不使用 HTML 属性名称的命名约定。ex：class 在 jsx 中为 classname

如果标签没有内容，则可以直接自闭合，`<img src=""/>`
JSX 标签中可以添加多个子元素

JSX 会在渲染之前将所有内容转换为字符串

JSX 表示对象
Babel 会把 JSX 转译成一个名为 React.createElement() 函数调用。

以下两种示例代码完全等效：

```const element = (

  <h1 className="greeting">
    Hello, world!
  </h1>
)
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
)
```

#### 组件&props

react 中的组件类似于 JS 中的函数
接受任意的 props（参数），返回描述页面展示内容的 react 元素。

定义组件：的两种方式 ES6class，function

当组件为用户自定义的组件时，jsx 接收的属性被称为 props

```function Welcome(props) { return <h1>Hello, {props.name}</h1>; } const root = ReactDOM.createRoot(document.getElementById('root')); const element = <Welcome name="Sara" />; root.render(element);

```

_组件名称必须以大写开头_

#### 把组件组合起来

````function Welcome(props){ return <h1>Hello,{props.name}</h1> }

function App(){
return ( <div>
<welcome name="Sara"/>
<welcome name="Cahal"/>
<welcome name="Edite"/>

</div> ) }```

大多数情况下，组件的顶部为 App 组件。

**props 具有只读性**

每个 react 组件都必须保持自身的 props 不变

# 11.5

## react day5

## doc review
````

##### 在 HTML 中使用 react

1. 在 DOM 中定义根组件 root(document.getElementById('root')
2. 定义组件，如果需要参数，则需要 props
3. 组件实例化(函数名，class 名修改为 html 标签形式 ，在标签中传入 props)
4. root.render('实例化的组件名')

_在组件嵌套时注意，子组件的在父组件中的属性相当于参数，在子组件本身中作为 props 的方法出现，使得每个组件能够独立存在。_

#### Props 具有只读性

组件中，不得把 props 传入后，再修改 props。
需要变化的部分，放到组件的 state

# 11.7

## react day5

## doc review

## state 和生命周期

root.render(element,container[,callback])来渲染元素

_setInterval(fun()，time)多次间隔执行_
_setTimeout(fun(),time)执行一次_

```const root = ReactDOM.createRoot(document.getElementById("root"))
function Clock(props){
return(

<div>
<h1>hello</h1>
</div>
);
}
function tick(){
  root.render
}
```

##### 关于 react 的两个 root API

1. reactDOM.render()创建一个传统模式的根组件(将要被弃用)
2. reactDOM.createRoot('使用 document.getElementById 选择根组件的 DOM ') 创建一个 root 组件，支持所有 react18 的新特性

在 React 中，"root" 是一个指向顶层数据结构的*指针*，React 用它来跟踪要渲染的树。
在 Legacy Root API 中，root 对用户来说是不透明的，因为我们将它附加到 DOM 元素上，通过 DOM 节点访问它，并没有将其暴露给用户。

##### state 的确定标准

state 的判断依据

1. 这个变量是否通过 props 从父组件中获取？如果是，那么它不是一个状态。
2. 这个变量是否在组件的整个生命周期中都保持不变？如果是，那么它不是一个状态。
3. 这个变量是否可以通过其他状态（state）或者属性（props）计算得到？如果是，那么它不是一个状态。
4. 这个变量是否在组件的 render 方法中使用？如果不是，那么它不是一个状态。这种情况下，这个变量更适合定义为组件的一个普通属性。

state 是一个组件中配置的对象，ex：this.state={number：19}

##### function 组件转换为 class

1. 创建一个同名的 ES6 class
2. 添加一个空的 render()
3. 把原函数体移动到 render()中
4. 把 render()中的 this.props 替换为 props
5. 删除剩余的空函数声明

_React.createElement()是 JSX 中的底层实现方式_

react 的生命周期钩子/方法

```class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
tick(){
  console.log(this)
  this.setState({
    date: new Date()
  })
}

//挂载时执行
  componentDidMount() {
clockTimer(){
  this.timeID = setInterval(()=>this.tick(),1000)
}


  }
//销毁时执行
  componentWillUnmount() {
    clearInterval(this.timerID)

  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

_this.props,this.state 是 react 自身设置的，如果数据不参与数据流，可以直接存在组件内的 this 对象上_

##### 关于在 html 上直接引入 React 和使用 JSX

1. 在 HTML`<body/>`标签上方引入 react 和 reactDOM
2. 引入 babel，对 JSX 进行实时编译，不推荐，会导致网页加载变慢
3. 或者 npm 装 babel 预编译器，对 JSX 进行转换，再引入转换后的 JS 文件

_根组件只有一个，一般为'root',root 中包含 `<app/>` 组件，在 app 中 return 其他子组件`</component>`_

##### 组件调用顺序

1. 组件初始化
   root.render()时，调用构造函数，初始化 state
2. render()执行，react 确定页面输出，并且更新 DOM。
3. 在 DOM 更新后，执行生命周期的 ComponentDidMount()
4. 若有函数调用 setState(),会重新调用 render()渲染页面

##### 关于正确使用 state

1. 不要直接修改 State，构造函数是唯一可以给 state 赋值的地方，在其他地方改变 state，需要使用 setState
2. state 的更新可能是异步的
   `setState 只在合成事件和钩子函数中是“异步”的，在原生事件和 setTimeout 中都是同步的。 setState的“异步”并不是说内部由异步代码实现，其实本身执行的过程和代码都是同步的，只是合成事件和钩子函数的调用顺序在更新之前，导致在合成事件和钩子函数中没法立马拿到更新后的值，形式了所谓的“异步”，当然可以通过第二个参数 setState(partialState, callback) 中的callback拿到更新后的结果。 setState 的批量更新优化也是建立在“异步”（合成事件、钩子函数）之上的，在原生事件和setTimeout 中不会批量更新，在“异步”中如果对同一个值进行多次 setState ， setState 的批量更新策略会对其进行覆盖，取最后一次的执行，如果是同时 setState 多个不同的值，在更新时会对其进行合并批量更新。`
3. 总之，setState 在原生事件中（addeventlistener,setTimeout）是同步的，但是在钩子函数和和成函数中是异步的。

##### React 的数据流

数据永远是自上而下流的，如同瀑布。

除了拥有并设置了它的组件，其他组件都无法访问 state。

子组件接收 props 时，无法确定该 props 的来源(手动输入，props，state)

# 11.8

## react day5

## doc review

## 事件处理

事件命名采用小驼峰式，而不是纯小写
传入函数采用{func}而不是"func()"

在阻止 HTML 的默认事件时，只能用`e.prevenrDefault()`，不能使用`return false`的方式。

通常，事件处理函数为 class 中的方法

##### JSX 中使用回调函数的 this 的方法

在 react 的 class 组件中，方法函数中的 this 默认不会绑定 this
严格模式：输出为 undefind
非严格模式：输出为全局 window 对象

1. 构造器中绑定*bind*
   ex`<button onClick={this.handleClick}></button>`，需要在 构造器中绑定 this,`.bind(this)`

2. _public class field_
   create react app 默认启用
   ex:`handleClick=()=>{console.log(this)}`此处的 this 为 class 组件

3. _在回调中使用箭头函数_
   `return ( <button onClick={() => this.handleClick()}> Click me </button> );`

##### 向事件处理程序传参

`<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button> <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>`

_bind 方式，id 为第 2 个参数，箭头函数方式，id 为第 1 个参数_

React 的事件对象 e 会被作为第二个参数传递。如果通过箭头函数的方式，事件对象必须显式的进行传递，而通过 bind 的方式，事件对象以及更多的参数将会被*隐式*的进行传递。

## 条件渲染

1. 组件中使用 if
   根据条件 return 对应的值
   `if (isLoggedIn) { button = <LogoutButton onClick={this.handleLogoutClick} />; } else { button = <LoginButton onClick={this.handleLoginClick} />; }`
2. 与&&运算符
   js 逻辑，与运算符会返回第一个 false 或者最后一个 true，`return ( <div> {count && <h1>Messages: {count}</h1>} </div>`
3. 三元运算符
   `return ( <div> {isLoggedIn ? <LogoutButton onClick={this.handleLogoutClick} /> : <LoginButton onClick={this.handleLoginClick} /> } </div> )`
4. 不进行渲染
   `return null`
   _return null 不会影响生命周期_

## 列表&Key

可以使用迭代来构建 list

```
//提示需要 key
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>

  <li>{number}</li>
  <ul>{listItems}</ul>
);
```

##### 列表中的 key

key 帮助 React 识别哪些元素改变了，比如被添加或删除。因此你应当给数组中的每一个元素赋予一个确定的标识。

通常使用数据中的 id 来作为 key，当没有 id 属性时，**万不得已**使用 index 来作为 key。
原因：操作数据，如添加或删除项会导致 index 改变，与 react 的 diff 冲突，导致渲染错误。完全静态页面则可以忽略。

##### key 提取组件

**元素的 key 只有放在就近的数组上下文中才有意义。**
例如：在 map 函数中指定 key，而在单独定义`<li>`时不需要指定。

例如子组件中不需要指定 key，而在父组件的中指定

_在 map 方法中的元素需要设置 key 属性_

_key 值在兄弟节点之间必须唯一，但是不同的数组可以使用相同的 key_

JSX 可以直接嵌套 map 来生成列表

`return ( <ul> {numbers.map((number) => <ListItem key={number.toString()} value={number} /> )} </ul>`

## 表单

##### 受控组件

`在 HTML 中，表单元素（如<input>、 <textarea> 和 <select>）通常自己维护 state，并根据用户输入进行更新。而在 React 中，可变状态（mutable state）通常保存在组件的 state 属性中，并且只能通过使用 setState()来更新。`

使 state 成为唯一数据源，同时进行渲染和控制数据

```class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('提交的名字: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          名字:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}
```

_数据在表单 change 后更新 state，state 更新`<input>` value，达到用 state 来控制 input 目的_

###### textarea

在 HTML 中, `<textarea>` 元素通过其子元素定义其文本

react 中可以使用 value 属性定义文本

放在 state 的 value 在初始化的时候就能起作用，所以具有初值

###### select

在 react 中，不会使用 select 属性来默认选中，而是采用`<select>`标签中的 **value** 属性,也可以把**数组**传入 value，从而实现多项选择
`总的来说，这使得 <input type="text">, <textarea> 和 <select> 之类的标签都非常相似—它们都接受一个 value 属性，你可以使用它来实现受控组件。`

###### input type="file"

通过`<input type="file">`来选择存储设备中的一个或多个文件，可以使用 js 的`file api`来控制。
*因为 value 只读，所以为一个非受控组件*没法把 state 与 value 绑定。

###### 受控组件的输入

在受控组件上指定 value 的 prop 会阻止用户更改输入。如果你指定了 value，但输入仍可编辑，则可能是你意外地将 value 设置为 undefined 或 null。

# 11.9

## react day5

## doc review

## 状态提升

应用场景：多个组件需要一个*相同的变化的*数据
共享状态（state）提升到最近的父组件中，把 state 放在父组件，使用 props 与子组件交换数据。

1. 子组件删除所有的 state，需要 state 的地方用 props 代替

2. 父组件使用 useState，初始化一个需要共享的状态，并把共享的状态和 handler 传给子组件

3. 子使用 props.setState 来改变父组件状态，再通过 props 同步父组件 state（类似于受控组件，但是 state 不在同一组件内）

###### 总结

_应该依赖自上而下的数据流，而不是尝试同步每个 state_

1. 任何可变数据应该只有一个并且唯一的相对应的数据源

2. 首先，数据源一般都是放在渲染数据的组件中

3. 如果其他组件也需要这个 state，那么你可以将它提升至这些组件的最近共同父组件中

4. 相比于把 state 双向绑定，会有更少的代码量，bug 也比较好排查

## 组合 vs 继承

#### 包含关系

有些组件的子组件需要父组件指定

```
function FancyBorder(props) { return (
  <div className={'FancyBorder FancyBorder-' + props.color}> {props.children} </div>
  ); }
```

recommend:用一个特殊的`children`prop 来把子组件传递到渲染结果中，在方式上有点类似 vue 的`slot`

使用 children slot 可以不考虑 props 的属性名，`<father>{props.children}</father>`

使得任意组件都可以进行嵌套

如果我们需要多个组件进行嵌套，可以自行约定名称不使用 children，再传入 props。

_在 react 中，`<componet>`就是一个对象，所以可以作为 props 传给任何子组件_

#### 特例关系

可以用这种预留 props 的方式来制作自定义组件

```function Dialog(props) {
return (
<FancyBorder color="blue">

<h1 className="Dialog-title">
{props.title}
</h1>
<p className="Dialog-message">
{props.message}
</p>
</FancyBorder>
);
}

function WelcomeDialog() {
return (

<Dialog
      title="Welcome"
      message="Thank you for visiting our spacecraft!" />
);
}
```

_组合同样适用于 class_

#### 继承

''在 Facebook，我们在成百上千个组件中使用 React。我们并没有发现需要使用继承来构建组件层次的情况。''

Props 和组合为你提供了清晰而安全地定制组件外观和行为的灵活方式。
**注意：组件可以接受任意 props，包括基本数据类型，React 元素以及函数。**

如果想要复用非 ui 的功能，可以将其提取为 js 模块，通过 import 调用，而不是 extend。

# 11.10

## react day6

## doc review

## react 哲 ⚦ 学

从设计稿开始：你现在拥有设计图，以及一个返回 JSON 的 API。

#### 第一步：将设计好的 UI 划分为组件层级

1. 切图
   把设计稿的 ui 划分层级，画框，区分不同的层次
   根据单一功能原则判定组件，一个组件只有一个功能。
   比如，输入框负责输入 state
   展示列表负责各个项目的展示
   ![分割后的组件](https://zh-hans.reactjs.org/static/9381f09e609723a8bb6e4ba1a7713b46/90cbd/thinking-in-react-components.png)
   确定结构

- FilterableProductTable
  - SearchBar
  - ProductTable
    - ProductCategoryRow
    - ProductRow

* 设计稿中被其他组件包含的子组件，在层级上应该作为其子节点 。\*

#### 第二步： 创建一个静态版本

最容易的方式，是先用已有的数据模型渲染一个不包含交互功能的 UI。最好将渲染 UI 和添加交互这两个过程分开。
在构建应用的静态版本时，需要创建一些可以服用的组件。
_构建静态版本时，不要使用 state，state 代表了随时间变化的数据_

构建静态页面的两种方式

- 自上而下
  当应用比较简单时
  优先编写层级较高的组件

- 自下而上
  当应用比较复杂时
  优先编写层级较低的组件

最顶层 APP 组件中接收数据模型，把 props 传给最顶层的自定义组件。通过单项数据流，把源数据向下传递给子组件。

#### 第三步：确定最小的 UI state

目的：实现交互功能需要有 state 的数据模型
原则：DRY-don't repect yourself,只保留应用所需的**最小**可变 state，其他数据均由计算产生。

**通过问自己以下三个问题，你可以逐个检查相应数据是否属于 state：**

- 该数据是否是由父组件通过 props 传递而来的？如果是，那它应该不是 state。
- 该数据是否随时间的推移而保持不变？如果是，那它应该也不是 state。
- 你能否根据其他 state 或 props 计算出该数据的值？如果是，那它也不是 state。

#### 第四步：确定 state 的位置

（参见状态提升）
对于应用中的每一个 state：

- 找到根据这个 state 进行渲染的所有组件。
  找到他们的共同所有者（common owner）组件（在组件层级上高于所有需要该 state 的组件）。
  该共同所有者组件或者比它层级更高的组件应该拥有该 state。
- 如果你找不到一个合适的位置来存放该 state，就可以直接创建一个新的组件来存放该 state，并将这一新组件置于高于共同所有者组件层级的位置。

#### 第五步：添加反向数据流

反向数据流即子组件通过父组件传入的 handler 或者 setState 函数来改变父组件中的 state（props 不能够被改变）

- class 组件中：父组件中定义 handler，由于 class 组件中的方法没有自己的 state，作为回调函数在 onChange={func}中没有自身的 state，所以在组件中绑定（bind）this，来改变 this.state,使子组件能够改变父组件的数据。

- function 组件中：由于使用 useState hook，直接把对应的 setState 穿给子组件就可以（推荐）

#### THATS ALL

核心概念篇，end
