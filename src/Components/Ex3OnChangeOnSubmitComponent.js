import React, { Component } from 'react'

export default class Ex3OnChangeOnSubmitComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user_data: '',
        vehicle_data: ''
    }
  }  
  onChangeEventHandler = (e) => {
    this.setState({
      user_data: e.target.value
    })
  }
  onSubmitEventHandler = (e) => {
    e.preventDefault();
    this.setState({
      vehicle_data: e.target.elements.vehicle.value
    })
  }
  render() {
    return (
      <div>
        <h4>Example of Onchange: Welcome {this.state.user_data}</h4>
        <input type="text" onChange={this.onChangeEventHandler}/>

        <h4>Example of onsubmit: {this.state.vehicle_data}</h4>
        <form onSubmit={this.onSubmitEventHandler}>
          <input type="text" name="vehicle"/>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
