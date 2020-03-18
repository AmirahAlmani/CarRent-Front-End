import React from "react";
import "./App.css";
import apiURL from "./apiConfig";
import Home from "./home";
import Stations from "./stations/components/stations";
import SelectedStation from "./stations/components/selectedStation";
import User from "./stations/components/user";
// import Cars from "./stations/components/viewcars";
import { getAllStation } from "./stations/api";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      station: [],
      stationName: "",
      stationLocation: "",
      car: [],
      /// state for user
      name: " ",
      phone: " ",
      email: " ",
      password: " ",
      cardNmuber: " ",
      cardName: " ",
      cardExpiredDate: " ",
      cvv: " ",
      addNewUser: []
    };
    console.log("My API url is : ", apiURL);
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
  oneStaion = (stationName, stationLocation, cars) => {
    this.setState({
      stationName: stationName,
      stationLocation: stationLocation,
      car: cars
    });
  };
  addNewUser = e => {
    e.preventDefault();
    this.setState({
      addNewUser: [
        ...this.state.addNewUser,
        [
          this.state.name,
          this.state.phone,
          this.state.email,
          this.state.password,
          this.state.cardNmuber,
          this.state.cardName,
          this.state.cardExpiredDate,
          this.state.cvv
        ]
      ],
      name: "",
      phone: "",
      email: "",
      password: "",
      cardNmuber: "",
      cardName: "",
      cardExpiredDate: "",
      cvv: ""
    });
    console.log(this.state.addNewUser);
    console.log("add user");
  };
  setUser = users => {
    this.setState({ users: users });
  };
  //create new arrticle
  handleName = e => {
    this.setState({ name: e.target.value });
    console.log(this.state.name);
  };
  handlePhone = e => {
    this.setState({ phone: e.target.value });
    console.log(this.state.phone);
  };
  handleEmail = e => {
    this.setState({ email: e.target.value });
    console.log(this.state.email);
  };
  handlePassword = e => {
    this.setState({ password: e.target.value });
    console.log(this.state.password);
  };
  handleCardNmuber = e => {
    this.setState({ cardNmuber: e.target.value });
    console.log(this.state.cardNmuber);
  };
  handleCardName = e => {
    this.setState({ cardName: e.target.value });
    console.log(this.state.cardName);
  };
  handleCardExpiredDate = e => {
    this.setState({ cardExpiredDate: e.target.value });
    console.log(this.state.cardExpiredDate);
  };
  handleCVV = e => {
    this.setState({ cvv: e.target.value });
    console.log(this.state.cvv);
  };
  render() {
    return (
      <div>
        <Router>
          <nav>
            <Link to="/">Home</Link>{" "}
            <Link to="/AllStation">Find a Station</Link>{" "}
            <Link to="/User">User</Link>
          </nav>
          <Route exact path="/" component={Home} />
          <Route
            path="/AllStation"
            component={() => (
              <Stations
                oneStaion={this.oneStaion}
                station={this.state.station}
              />
            )}
          />
          <Route
            path="/User"
            render={() => (
              <User
                handleName={this.handleName}
                handlePhone={this.handlePhone}
                handleEmail={this.handleEmail}
                handlePassword={this.handlePassword}
                handleCardNmuber={this.handleCardNmuber}
                handleCardName={this.handleCardName}
                handleCardExpiredDate={this.handleCardExpiredDate}
                handleCVV={this.handleCVV}
                addNewUser={this.addNewUser}
              />
            )}
          />
          <Route
            path="/selected-station"
            component={() => (
              <SelectedStation
                //  station={this.state.station}
                //  oneStaion={this.oneStaion}
                stationName={this.state.stationName}
                stationLocation={this.state.stationLocation}
                cars={this.state.car}
              />
            )}
          />
        </Router>
      </div>
    );
  }
}
export default App;
