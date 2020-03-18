import React from "react";
import { Link } from "react-router-dom";
class Station extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    clickStaion = (event) => {
        // event.preventDefault();
        //     // this.props.stationDetalis(this.props.id);
        // console.log('hi',this.props.id )
        // this.setState({stationName: this.props.name})
        this.props.oneStaion(this.props.name, this.props.location, this.props.cars, this.props.id)
    }
    render() {
        return (
            <div className="styles">
                <Link to="/selected-Station" onClick={this.clickStaion} >
                    {this.props.name}
                </Link> <br />
                {this.props.location} <br />
                {/* {this.props.id} */}
            </div>
        )
    }
}
export default Station;