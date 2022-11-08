class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  //生命周期方法，挂载时加载
  componentDidMount() {
    this.timeID = setInterval(() => this.tick(),3000);
  }
  //清楚DOM时加载
  componentWillUnmount() {
    clearInterval(this.timeID);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
    
  }
  render() {
    return (
      <div>
        <h1>{this.state.date.toLocaleTimeString()}</h1>
        <h1></h1>
      </div>
    );
  }
}
