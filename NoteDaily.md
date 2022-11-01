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
//ex:<ShoppingList name="Mark" />
props.name="Mark"
```
