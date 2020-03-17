import React from "react";
import Car from "./car";
import { getAllCars } from "../api";

class Cars extends React.Component {
    componentDidMount() {
        getAllCars()
            .then(response => {
                this.props.setCar(response.data.stations);
            })
            .catch(error => {
                console.log("API ERROR:", error);
            });
    }
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