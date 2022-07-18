import React, { Component } from 'react'

class EventHandlerSetStateComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
        lang: [
            'python', 'react'
        ],
        name: "React JS Course."
    }
  }
  clickEventHandler = () => {
    this.setState({
        lang: [
            'Python', 'React JS'
        ]
    })
    console.log('Clicked');
  } 
  changeName = (event) => {
    this.setState({
        name: event.target.value
    })
  } 
  render() {
    return (
      <div>
        <button onClick={this.clickEventHandler}>Click Me!</button>
        <div>
            <h4>Example state</h4>
            {this.state.lang[0]}

            <h4>Example binding</h4>
            <input type="text" onChange={this.changeName} value={this.state.name}></input>
            <p>{this.state.name}</p>
        </div>
      </div>
    )
  }
}

export default EventHandlerSetStateComponent
