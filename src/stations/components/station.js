import React from "react";
import { Link } from "react-router-dom";
class Station extends React.Component {
  clickStaion = event => {
    this.props.oneStaion(
      this.props.name,
      this.props.location,
      this.props.cars,
      this.props.id
    );
  };
  render() {
    return (
      <div className="allStation">
        <table>
          <tr>
            <br />
            <Link to="/selected-station" onClick={this.clickStaion}>
              <h4 className="navbar-brand">{this.props.name}</h4>
            </Link>{" "}
            <br />
            <p className="h4">{this.props.location}</p> <br />
          </tr>
          {/* {this.props.id} */}
        </table>
      </div>
    );
  }
}
export default Station;
