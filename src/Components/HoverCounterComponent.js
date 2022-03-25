import React, { Component } from 'react'
import higherOrderComponent from './HigherOrderComponent'

class HoverCounterComponent extends Component {
  render() {

    const {count, incrementCount} = this.props;

    return (
      <div>
          <button onMouseOver={incrementCount}>On Hover Increment {count}</button>
      </div>
    );
    
  }
}

export default higherOrderComponent(HoverCounterComponent)