import React from "react";
class ViewCars extends React.Component {
  render() {
    console.log("view cars");
    return (
      <>
        {this.props.brand} <br />
        {/* {this.props.type} */}
      </>
    );
  }
}
export default ViewCars;
