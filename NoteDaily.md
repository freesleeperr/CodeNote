#10.31
##react day1
###react 组件
1.props（properties）组件接收的参数，通过 render 方法展示
2.render 返回值是 react 元素，是屏幕所显示的内容

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

#11.1
##react day2
###react 组件
1.props
在 Board 组件的 renderSquare 方法中，我们将代码改写成下面这样，传递一个名为 value 的 prop 到 Square 当中：

```
class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }
}
```

2.JSX 标签中的函数需要{}包裹，并且需要使用箭头函数 3.在类中定义的 handleClick 和 render 方式是定义在类的原型上了。只用类的实例对象才可以调用，且函数内部的 this 指向实例本身。在 ReactDOM.render()执行的时候，会帮我们 new 一个实例对象，并调用 render 方法，所以在 render 方法内部的 this 指向实例自身。但是
`<button onClick={this.handleClick}>点我</button>`
这里绑定的事件处理函数为 this.handleClick 方法的引用。但是当我们点击的时候，handleClick 的执行上下文为 Window，由于 jsx 经 babel 编译后会开启严格模式。所以 this 指向变为 undefined。

4.this.state 初始化状态 5.在所有含有构造函数的的 React 组件中，构造函数必须以 super(props) 开头。(Es6class)

6.react 不可变性，变更对象时采用创建对象的副本再进行编辑，而不是从原本的对象上更改。

7.react 区分同级，会根据每一项列表元素的 key 来检索上一次渲染时与每个 key 所匹配的列表项。

8.setState 为异步函数，会延迟执行

9.react 元素 是不可变的，要重新渲染，需要调用 root.render()

