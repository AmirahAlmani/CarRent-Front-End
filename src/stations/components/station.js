import React from "react";
import Cars from "./allcars";
import { BrowserRouter as Link } from "react-router-dom";

class Station extends React.Component {
  render() {
    return (
      <div className="styles">
        <a href="./car" onClick="">
          <Link to="/cars">
            <h3>{this.props.name} Link</h3>{" "}
          </Link>
        </a>

        <sub>{this.props.location}</sub>
        {/* <p>{this.props.car}</p> */}
      </div>
    );
  }
}

export default Station;
