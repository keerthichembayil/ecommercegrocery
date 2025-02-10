// import axios from 'axios';
// const instance=axios.create({
//     baseURL:'http://localhost:5000/api',
// })
// const instance=axios.create({
//     baseURL:'https://vercel.com/keerthis-projects-f78e3c0f/ecommercegrocerybackend',
// })
// export default instance;

import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL || "http://localhost:5000",
});

export default API;