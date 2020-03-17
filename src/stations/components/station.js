import React from "react";
// import Cars from "./allcars";

import { Link } from "react-router-dom";
class Station extends React.Component {

    clickStaion = (event) => {
        //     // event.preventDefault();
        //     // this.props.stationDetalis(this.props.id);
        //     // console.log('hi',this.props.id )
        console.log('hi')
    }
    render() {
        return (
            <div className="styles">
                <Link to="/selected-Station" >
                    {this.props.name}
                </Link> <br />
                {this.props.location}
            </div>
        );
    }
}

export default Station;


/* //   <div className="styles">
    //     <a href="./car" onClick={this.stationDetalis}>
    //       <Link to="/cars">
    //         <h3>{this.props.name}</h3>{" "}
    //       </Link>
    //     </a>
    //     <sub>{this.props.location}</sub>
    //     <p>{this.props.car}</p> */