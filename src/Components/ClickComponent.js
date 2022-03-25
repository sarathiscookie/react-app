import React, { Component } from 'react'
import HigherOrderComponent from './HigherOrderComponent'

class ClickComponent extends Component {

  render() {
    const {count, incrementCount} = this.props;

    return (
      <div>
          <button onClick={incrementCount}>On Click Increment {count}</button>
      </div>
    );

  }
}

export default HigherOrderComponent(ClickComponent);