import React from 'react'
import {getAllStations} from '../api'
import Station from './station'
class AllStation extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        selectedLocation: "riyadh",
      }
    };
    componentDidMount(){
      //make api call
      /*  index, show , destroy, update , create 
      */
     getAllStations()
     .then((response)=>{
         this.props.setStations(response.data.stations)
     })
     .catch((error)=>{
         console.log(`API ERROR:`, error)
     })
    }
    handleChangeSelect = event => {
      // console.log(event.target.value)
      // console.log(event.target)
      this.setState({ selectedLocation: event.target.value });
    };
  
  render() {
  let allStations = <h4>no Stations</h4>
          if (this.props.stations.length > 0) {
     allStations = this.props.stations.map((station, index)=>{
      return <Station name={station.name}
        location = {station.location}
       id={station._id}
       key = {index} />
        });
      }
     
    //   <option 
    //   value={station.name} 
    //   checked = {this.props.stations.name === this.value}>
    //   {index + 1}. {station}
    // </option>;
      
       
      return(
          <>
          <label>Selsct a Station : </label>
          <select
            id="stationSel"
            size="1"
            value={this.state.selectedLocation}
            onChange={this.handleChangeSelect} >
            {allStations}
          </select>
          {/* <Station /> */}

      </> 
      );
        
   
  }
  }
  export default AllStation;