import React from "react";
import Car from "./car";
import { getAllStation } from "../api";

class Cars extends React.Component {
  render() {
    let allcars = <h4>No Cars !</h4>;
    if (this.props.car.length > 0) {
      allcars = this.props.car.map((car, index) => {
        return (
          <Car
            brand={car.brand}
            type={car.type}
            // car={car.cars}
            key={index}
          />
        );
      });
    }
    return (
      <>
        <h1>Hi </h1>
        {allcars}
      </>
    );
  }
}

export default Cars;
