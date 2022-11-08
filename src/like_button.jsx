"use strict";

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return "You liked this.";
    }

    return (
      <div>
        <button onClick={() => this.setState({ liked: true })}>Like</button>
        <Clock />
        <Clock />
        <Clock />
        <Form />
        <LoggingButton />
      </div>
    );
  }
}
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<LikeButton />);
