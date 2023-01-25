
import React,{ Component}from "react";

export default class App extends Component   {

  constructor(props) {
    super(props);
    this.state = {
      name: 'state',
  }
}
  render() {
    return (
      <div className="App">
        <h1>{this.state.name}</h1>
        <button onClick={() => this.setState({name: 'new state'})}>Change State</button>
      </div>)
}
}