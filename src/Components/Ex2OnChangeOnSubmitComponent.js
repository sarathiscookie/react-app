import React, { Component } from 'react'

export default class Ex2OnChangeOnSubmitComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        vehicle_brand: '',
        vehicle_model: ''
    }
  } 
  onSubmitEventHandler = (e) => {
    e.preventDefault();
    console.log(this.state.vehicle_brand);
    console.log(this.state.vehicle_model);
  } 
  render() {
    return (
      <div>
        <h4>Example: setState in input html.</h4>

        <form onSubmit={this.onSubmitEventHandler}>
            <input name="brand" type="text" onChange={(event) => {this.setState({vehicle_brand:event.target.value})}}/>
            <input name="model" type="text" onChange={(event) => (this.setState({vehicle_model:event.target.value}))}/>
            <button>Submit Vehicle Details</button>
        </form>
      </div>
    )
  }
}
