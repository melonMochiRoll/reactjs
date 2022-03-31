import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:3005',
  withCredentials: true,
  timeout: 1000,
});

export default instance;