import React from "react";
import Station from "./station";
import { getAllStation } from "../api";

class Stations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchOfstation: ""
    };
  }
  componentDidMount() {
    getAllStation()
      .then(response => {
        this.props.setStation(response.data.stations);
      })
      .catch(error => {
        console.log("API ERROR:", error);
      });
  }

  inputSearchChange = e => {
    const textValue = e.target.value;
    console.log("hi", textValue);
    this.setState({
      searchOfstation: textValue
    });
  };

  handleSearch = () => {
    const filteredSerchStation = this.props.station.filter(stations => {
      return stations.stations
        .toLowerCase()
        .includes(this.state.searchOfstation.toLowerCase());
    });

    this.props.toFiltervalue(filteredSerchStation);
  };

  render() {
    let allstation = <h4>No Stations!</h4>;
    if (this.props.station.length > 0) {
      allstation = this.props.station.map((station, index) => {
        return (
          <Station
            name={station.name}
            location={station.location}
            car={station.cars}
            key={index}
          />
        );
      });
    }

    return (
      <div>
        {/* <input
          placeholder="Search for station"
          type="text"
          value={this.state.searchOfstation}
          onChange={e => this.inputSearchChange(e)}
        />
        <button onClick={this.handleSearch}> Search </button> */}

        {allstation}
      </div>
    );
  }
}
export default Stations;
