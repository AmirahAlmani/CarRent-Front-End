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
      console.log('bring all station')
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
    // console.log(this.state.station)
  //   let allArticles = <h4>no Articles</h4>
  //   if (this.props.articles.length > 0) {
  // allArticles = this.props.articles.map((article, index)=>{
  //     return <Article title={article.title}
  //                     author = {article.author}
  //                     content = {article.content}
  //                     id={article._id}
  //                     deleteArticle={this.deleteArticle}
  //                     key = {index} />
  let allStations = <h4>no Articles</h4>
          if (this.props.stations.length > 0) {
     allStations = this.props.stations.map((station, index)=>{
      return <Station name={station.name}
        location = {station.location}
        id={station._id}
        key = {index} />
        });
      }
          // <option 
        //   value={station.name} 
        //   checked = {this.state.station.name === this.value}>
        //   {index + 1}. {station}
        // </option>);
      
       
      return(
          <>
          <label>Selsct a Station : </label>
          {/* <select
            id="stationSel"
            size="1"
            value={this.state.selectedLocation}
            onChange={this.handleChangeSelect}
          > */}
            {allStations}
          {/* </select> */}
          <Station />

      </> 
      );
        
   
  }
  }
  export default AllStation;