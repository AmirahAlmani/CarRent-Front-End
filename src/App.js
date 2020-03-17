import React from "react";
import "./App.css";
import Home from "./home";
import Stations from "./stations/components/stations";
import SelectedStation from "./stations/components/selectedStation";
import User from "./stations/components/user";
import { getAllStation } from "./stations/api";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      station: [],
      car: []
    };
  }
  componentDidMount() {
    getAllStation()
      .then(response => {
        console.log("rerender here");
        this.setState({ station: response.data.stations });
      })
      .catch(error => {
        console.log("API ERROR:", error);
      });
  }

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

          <Route exact path="/" component={Home} />
          <Route
            path="/AllStation"
            component={() => (
              <Stations
                station={this.state.station}
                setCar={this.setCar}
                car={this.state.car}
              />
            )}
          />

          <Route path="/User" component={User} />
          {/* router to a station detials  */}
          <Route path="/selected-station" component={SelectedStation} />

          {/* <Route
            path="Cars"
            component={() => <Cars setCar={this.setCar} car={this.state.car} />}
          /> */}
        </Router>
      </div>
    );
  }
}
export default App;
