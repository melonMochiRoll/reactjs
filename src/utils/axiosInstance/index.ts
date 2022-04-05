import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3005',
  withCredentials: true,
  timeout: 1000,
});

export default instance;