import apiURL from "../apiConfig";
import axios from "axios";

const getAllStation = () => {
  return axios.get(`${apiURL}/stations`);
};

const getAllCars = () => {
  return axios.get(`${apiURL}/cars`);
};

const addNewUser = (user) => {
  console.log('addNewUser', user)
  return axios.post(`${apiURL}/user`, user);
}

export { getAllStation, getAllCars, addNewUser };