import React from 'react';
import './App.css';
// import apiURL from './apiCongig'
import Home from "./home"
import AllStation from "./stations/components/allStations"
import User from "./stations/components/user"

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends React.Component {
  render(){
  return (
    // <div className="App">
    //   <header className="App-header">
    //    <Home />
    //    <AllStation />
    //    <User />
    //   </header>
    // </div>
    <Router>
      <nav>
        <Link to="/">Home</Link>{' '}
        <Link to="/AllStation">Find a Station</Link>{' '}
        <Link to="/User">User</Link>
      </nav>

      <div>
        <Route exact path="/" component={Home} />
        <Route path='/AllStation' component={AllStation} />
        <Route path="/User" component={User} />
      </div>
      </Router>
  );
}
}
export default App;
