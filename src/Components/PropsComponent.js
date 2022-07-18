import React, { Component } from 'react'

export default class PropsComponent extends Component {
  constructor(props){
    super(props);
  }  
  render() {
    return (  
      <div>
        <h4>Example: Props</h4>
        <p>{this.props.text}</p>
      </div>
    )
  }
}
