import React, { Component } from 'react'
import HigherOrderComponent from './HigherOrderComponent'

class HoverComponent extends Component {
  render() {

    const {count, incrementCount} = this.props;

    return (
      <div>
          <button onMouseOver={incrementCount}>On Hover Increment {count}</button>
      </div>
    );
    
  }
}

export default HigherOrderComponent(HoverComponent)