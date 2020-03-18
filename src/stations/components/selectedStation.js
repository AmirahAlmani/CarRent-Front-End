import React from "react";
import ViewCars from "./viewcars";
class SelectedStation extends React.Component {
  render() {
    let allCars = <p>no Cars at this Station</p>;
    if (this.props.cars.length > 0) {
      allCars = this.props.cars.map((car, index) => {
        return <ViewCars brand={car.brand} type={car.type} key={index} />;
      });
    }
    return (
      <>
        <p>station info</p>
        {this.props.stationName} <br />
        {this.props.stationLocation} <br />
        <ViewCars />
        {allCars}
      </>
    );
  }
}
export default SelectedStation;
