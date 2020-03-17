import React from "react";

class SelectedStation extends React.Component {
    render() {
        return (
            <>
                <p>station info</p>
                {this.props.name}
            </>
        )
    }
}
export default SelectedStation;