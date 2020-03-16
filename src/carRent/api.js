import apiURL from "../apiConfig";
import axios from "axios";

const getAllStation = () => {
  return axios.get(`${apiURL}/station`);
};

export { getAllStation };
