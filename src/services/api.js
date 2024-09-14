import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/users";

const getUsers = () => {
  return axios.get(API_URL);
};

const getUserById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

const ApiService = {
  getUsers,
  getUserById
};

export default ApiService;
