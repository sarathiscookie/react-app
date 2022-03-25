import React from "react";

const higherOrderComponent = WrappedComponent => {
    class HigherOrderComponent extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            this.setState({count: this.state.count + 1})
        }

        render() {
            return <WrappedComponent count={this.state.count} incrementCount={this.incrementCount}/>
        }
    }
    return HigherOrderComponent
}

export default higherOrderComponent