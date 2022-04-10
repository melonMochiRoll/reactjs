import axios, { AxiosInstance } from "axios";

export const axiosClient: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3005',
  withCredentials: true,
  timeout: 1000,
});