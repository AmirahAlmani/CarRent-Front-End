import React from "react";

class SelectedStation extends React.Component {
  render() {
    console.log("location", this.props.location);

    return (
      <>
        <h2> Hi </h2>
        <h2>{this.props.location.state.stationInfo.Name}</h2>
        {/* <p>{this.props.location.state.locations.location}</p> */}
      </>
    );
  }
}
export default SelectedStation;
