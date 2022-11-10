//严格模式下，组件中的的this会默认显示undefined
"use strict";
class LoggingButton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  handleClick() {
    console.log("this is:", this);
  }
  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}
