import React from 'react';
import './App.css';
// import apiURL from './apiCongig'
import Home from "./home"
import AllStation from "./stations/components/allStations"
import User from "./stations/components/user"
import Cars from "./stations/components/user"
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      stations: [],
      
    }
  };
  setStations = (stations)=>{
    this.setState({stations:stations})
  }
  render(){
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>{' '}
        <Link to="/AllStation">Find a Station</Link>{' '}
        <Link to="/User">User</Link>
      </nav>

      <div>
        <Route exact path="/" component={Home} />
        <Route path='/AllStation' component={()=> <AllStation 
                     stations={this.state.stations}
                     setStations={this.setStations} />} />
        <Route path="/User" component={User} />
      </div>
      </Router>
  );
}
}
export default App;
