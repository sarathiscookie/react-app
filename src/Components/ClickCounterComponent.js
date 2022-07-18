import React, { Component } from 'react'
import higherOrderComponent from './HigherOrderComponent'

class ClickCounterComponent extends Component {

  render() {
    const {count, incrementCount} = this.props;

    return (
      <div>
          <button onClick={incrementCount}>On Click Increment {count}</button>
      </div>
    );

  }
}

export default higherOrderComponent(ClickCounterComponent);
