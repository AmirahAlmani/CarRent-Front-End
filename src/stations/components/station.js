import React from "react";
import ViewCars from "./viewcars";
import SelectedStation from "./selectedStation";
import { Link } from "react-router-dom";
class Station extends React.Component {
  clickStaion = event => {
    //     // event.preventDefault();
    //     // this.props.stationDetalis(this.props.id);
    //     // console.log('hi',this.props.id )
    console.log("hi");
  };
  render() {
    let allCars = <p>no Cars at this Station</p>;
    if (this.props.cars.length > 0) {
      allCars = this.props.cars.map((car, index) => {
        return <ViewCars brand={car.brand} type={car.type} key={index} />;
      });
    }
    return (
      <div className="styles">
        <Link
          to={{
            pathname: "/selected-station",
            state: {
              stationInfo: {
                Name: this.props.name,
                location: this.props.location
              }
            }
          }}
        >
          {this.props.name}
        </Link>{" "}
        <br />
        {this.props.location} <br />
        {allCars}
      </div>
    );
  }
}
export default Station;

/* //   <div className="styles">
    //     <a href="./car" onClick={this.stationDetalis}>
    //       <Link to="/cars">
    //         <h3>{this.props.name}</h3>{" "}
    //       </Link>
    //     </a>

    //     <sub>{this.props.location}</sub>
    //     <p>{this.props.car}</p> */
