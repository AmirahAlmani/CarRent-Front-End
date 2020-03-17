import React from "react";
import "./App.css";
import Home from "./home";
import AllStation from "./stations/components/allStations";
import User from "./stations/components/user";
import Cars from "./stations/components/allcars";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      station: [],
      car: []
    };
  }
  setStation = station => {
    this.setState({ station: station });
  };
  setCar = car => {
    this.setState({ car: car });
  };

  toFiltervalue = Filterstation => {
    this.setState({
      station: Filterstation
    });
  };

  render() {
    return (
      <div>
        <header>CarRent</header>

        <Router>
          <nav className="navBar">
            <Link to="/">Home</Link>
            {" || "}
            <Link to="/AllStation">Find a Station</Link>
            {" || "}
            <Link to="/User">User</Link>
          </nav>

          <div>
            <Route exact path="/" component={Home} />
            <Route
              path="/AllStation"
              component={() => (
                <AllStation
                  station={this.state.station}
                  setStation={this.setStation}
                  toFiltervalue={this.toFiltervalue}
                  setCar={this.setCar}
                  car={this.state.car}
                />
              )}
            />

            <Route path="/User" component={User} />
            <Route
              path="/AllStation/Cars"
              component={() => (
                <Cars setCar={this.setCar} car={this.state.car} />
              )}
            />
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
