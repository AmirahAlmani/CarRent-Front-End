import apiURL from '../apiConfig';
import axios from 'axios';

// index, show, create , update, destroy
//get All Articles 
const getAllStations = ()=>{
    return axios.get(`${apiURL}/stations`)

};

export { getAllStations}