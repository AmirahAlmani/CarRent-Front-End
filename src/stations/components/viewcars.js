import React from "react";
import { Link } from "react-router-dom";
class ViewCars extends React.Component {
  clickCar = e => {
    console.log(` the id of the station`, this.props.stationId);
    this.props.deleteCar(this.props.id, this.props.stationId);
  };
  render() {
    return (
      <>
        <Link to="/User" onClick={this.clickCar}>
          <button className="btn btn-light">
            {this.props.brand}
          </button>
        </Link>
        <br />
      </>
    );
  }
}
export default ViewCars;
