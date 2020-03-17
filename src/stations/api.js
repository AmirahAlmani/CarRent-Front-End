import apiURL from "../apiConfig";
import axios from "axios";

const getAllStation = () => {
  return axios.get(`${apiURL}/stations`);
};

const getAllCars = () => {
  return axios.get(`${apiURL}/cars`);
};

export { getAllStation, getAllCars };

