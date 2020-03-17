import React from "react";
class ViewCars extends React.Component {
  render() {
    return (
      <>
        <h3>{this.props.brand}</h3>
        <p>{this.props.type}</p>
      </>
    );
  }
}
export default ViewCars;
