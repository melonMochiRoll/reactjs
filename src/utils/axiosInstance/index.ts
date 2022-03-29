import axios from "axios";
import dotenv from 'dotenv';
dotenv.config();

const instance = axios.create({
  baseURL: process.env.BASE_API,
  withCredentials: true,
  timeout: 1000,
});

export default instance;