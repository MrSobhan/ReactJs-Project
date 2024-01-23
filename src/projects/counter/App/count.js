import React, { Component } from "react";
import "./count.css";
class Counter extends Component {
  constructor(pops) {
    super(pops);
    this.state = {
      count: 10,
      color : ''
    };

    this.addCount = this.addCount.bind(this);
    this.removeCount = this.removeCount.bind(this);
  }
  addCount() {
    this.setState((prev) => {
        if(prev.count >= 15){
            this.setState({ color: 'orange' })
        }

      return { count: prev.count + 1 };
    });
  }
  removeCount() {
    this.setState((prev) => {
        if(prev.count <= 15){
            this.setState({ color: '' })
        }
      return { count: prev.count - 1 };
    });
  }
  render() {
    return (
      <div className={`cart ${this.state.color}`}>
        <h1>{this.state.count} C</h1>
        <div className='divBtn'>
          <button onClick={this.removeCount}>-</button>
          <button onClick={this.addCount}>+</button>
        </div>
      </div>
    );
  }
}

export default Counter;
