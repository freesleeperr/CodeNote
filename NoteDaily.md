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

1.  创建一个同名的 ES6 class
2.  添加一个空的 render()
3.  把原函数体移动到 render()中
4.  把 render()中的 this.props 替换为 props
5.  删除剩余的空函数声明

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

# 11.7

## react day5

## doc review

## 事件处理

事件命名采用小驼峰式，而不是纯小写
传入函数采用{func}而不是"func()"

在阻止 HTML 的默认事件时，只能用`e.prevenrDefault()`，不能使用`return false`的方式。

通常，事件处理函数为 class 中的方法

##### JSX 中使用回调函数的 this 的方法

在 react 的 class 组件中，方法函数中的 this 默认不会绑定 this，输出为

_bind_
ex`<button onClick={this.handleClick}></button>`，需要在 构造器中绑定 this,`.bind(this)`

_public class field_
create react app 默认启用
ex:`handleClick=()=>{console.log(this)}`此处的 this 为 class 组件

_在回调中使用箭头函数_
` return ( <button onClick={() => this.handleClick()}> Click me </button> );`
