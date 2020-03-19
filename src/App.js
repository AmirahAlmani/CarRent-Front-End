import React from 'react';
import './App.css';
import './index.css'
import apiURL from './apiConfig';
import Home from "./home";
import SelectedStation from "./stations/components/selectedStation";
import User from "./stations/components/user";
import Stations from "./stations/components/stations";

import { getAllStation, addNewUser } from "./stations/api";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      station: [],
      stationName: "",
      stationLocation: "",
      cars: [],
      stationId: "",
      houre: "",
      name: " ",
      phone: " ",
      email: " ",
      password: " ",
      payment: {
        cardNmuber: " ",
        cardName: " ",
        cardExpiredDate: " ",
        cvv: " ",
        addNewUser: []
      }
    };
  }
  componentDidMount() {
    this.getAll();
  }
  getAll = () => {
    getAllStation()
      .then(response => {
        console.log("rerender here");
        this.setState({ station: response.data.stations });
      })
      .catch(error => {
        console.log("API ERROR:", error);
      });
  };

  oneStaion = (stationName, stationLocation, cars, stationId) => {
    this.setState({
      stationName: stationName,
      stationLocation: stationLocation,
      cars: cars,
      stationId: stationId
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

  submition = e => {
    console.log(`the User created`);
    addNewUser({
      user: {
        name: this.state.name,
        phone: this.state.phone,
        email: this.state.email,
        password: this.state.password,
        payment: {
          cardNmuber: this.state.cardNmuber,
          cardName: this.state.cardName,
          cardExpiredDate: this.state.cardExpiredDate,
          cvv: this.state.cvv
        }
      }
    })
      .then(response => {
        this.setState({
          user: [
            ...this.state.user,
            {
              name: this.state.name,
              phone: this.state.phone,
              email: this.state.email,
              password: this.state.password,
              payment: {
                cardNmuber: this.state.cardNmuber,
                cardName: this.state.cardName,
                cardExpiredDate: this.state.cardExpiredDate,
                cvv: this.state.cvv
              }
            }
          ],
          name: "",
          phone: "",
          email: "",
          password: "",
          payment: {
            cardNmuber: "",
            cardName: "",
            cardExpiredDate: "",
            cvv: ""
          }
        });
      })
      .catch(error => {
        console.log("api add new user error :", error);
      });
  };

  //selecte hours
  handleChangeThreeHours = e => {
    console.log(e.target.value);
    this.setState({ hours: e.target.value });
  };
  handleChangeSixHours = e => {
    console.log(e.target.value);
    this.setState({ hours: e.target.value });
  };
  handleChangeTwelveHours = e => {
    console.log(e.target.value);
    this.setState({ hours: e.target.value });
  };

  render() {
    return (
      <div>
        <Router>
          <nav className="navBar">
            <Link className="navbar-brand" to="/">
              Home
            </Link>{" "}
            <Link className="navbar-brand" to="/AllStation">
              Rent Now
            </Link>{" "}
            {/* <Link to="/User">User</Link> */}
          </nav>

          <div>
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
                  submition={this.submition}
                  hours={this.state.hours}
                  handleChangeThreeHours={this.handleChangeThreeHours}
                  handleChangeSixHours={this.handleChangeSixHours}
                  handleChangeTwelveHours={this.handleChangeTwelveHours}
                />
              )}
            />

            <Route
              path="/selected-station"
              component={() => (
                <SelectedStation
                  stationName={this.state.stationName}
                  stationLocation={this.state.stationLocation}
                  cars={this.state.cars}
                  setCars={this.setCars}
                  stationId={this.state.stationId}
                  getAll={this.getAll}
                />
              )}
            />
          </div>
        </Router>
      </div>
    );
  }
}
export default App;
