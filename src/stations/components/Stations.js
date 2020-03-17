import React from "react";
import Station from "./station";
class Stations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  stationDetalis = stationId => {
    console.log(stationId, `is the station id`);
  };
  render() {
    let allstation = <h4>No Stations!</h4>;
    if (this.props.station.length > 0) {
      allstation = this.props.station.map((station, index) => {
        return (
          <Station
            name={station.name}
            location={station.location}
            cars={station.cars}
            key={index}
            id={station._id}
            stationDetalis={this.stationDetalis}
          />
        );
      });
    }
    return <div>{allstation}</div>;
  }
}
export default Stations;
