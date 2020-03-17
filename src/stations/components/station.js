import React from "react";
import ViewCars from "./viewcars";
import { Link } from "react-router-dom";

class Station extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }
    clickStaion = (event) => {
        //     // event.preventDefault();
        //     // this.props.stationDetalis(this.props.id);
        console.log('hi', this.props.id)
        // this.setState({stationName: this.props.name})
        this.props.oneStaion(this.props.name, this.props.location)

    }
    render() {
        let allCars = <p>no Cars at this Station</p>
        if (this.props.cars.length > 0) {
            allCars = this.props.cars.map((car, index) => {
                return (
                    <ViewCars brand={car.brand}
                        type={car.type}
                        key={index}
                    />
                )
            })
        }
        return (
            <div className="styles">
                <Link to="/selected-Station" onClick={this.clickStaion} >
                    {this.props.name}
                </Link> <br />
                {this.props.location} <br />

                {allCars}

            </div>
        );
    }
}

export default Station;
