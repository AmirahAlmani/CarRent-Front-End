import React from "react";
import ViewCars from "./viewcars";
import { deleteCarByID } from "../api";
class SelectedStation extends React.Component {
  //////// delete A car when user click on it/////////////
  deleteCar = (id, stationId) => {
    console.log("the car delete", id);
    deleteCarByID(id, stationId)
      .then(response => {
        //     console.log(`the Car with the ${id} has been delete`)
        //     // to deleted it from screen //
        // console.log(this.props.cars, `cars props`)
        // const newCarList = this.props.cars.filter((car) => {
        //     return car._id !== id
        // });
        // console.log(newCarList, `new car list`)
        // this.props.setCars(newCarList)
        this.props.getAll();
      })
      .catch(error => {
        console.log("api error :", error);
      });
  };
  render() {
    let allCars = <p className="NoCar"> no Cars at this Station </p>;
    console.log(this.props.cars);
    if (this.props.cars.length > 0) {
      allCars = this.props.cars.map((car, index) => {
        return (
          <ViewCars
            brand={car.brand}
            type={car.type}
            key={index}
            deleteCar={this.deleteCar}
            id={car._id}
            stationId={this.props.stationId}
          />
        );
      });
    }
    return (
      <dev className="stationinfo">
        {/* <h2> station info </h2> */}
        <h3>{this.props.stationName}</h3>
        <sub className="h44">{this.props.stationLocation}</sub> <br />
        <br />
        <p className="NoCar">{allCars}</p>
      </dev>
    );
  }
}

export default SelectedStation;
