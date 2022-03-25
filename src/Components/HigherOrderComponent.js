import React from "react";

const UpdateComponent = OriginalComponent => {
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
            return <OriginalComponent count={this.state.count} incrementCount={this.incrementCount}/>
        }
    }
    return HigherOrderComponent
}

export default UpdateComponent