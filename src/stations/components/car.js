import React from "react";

class Car extends React.Component {
    render() {
        return (
            <>
                <h1>Hi</h1>
                <div>
                    <h3>{this.props.brand}</h3>
                    <sub>{this.props.type}</sub>
                    {/* <p>{this.props.car}</p> */}
                </div>
            </>
        );
    }
}
export default Car;
