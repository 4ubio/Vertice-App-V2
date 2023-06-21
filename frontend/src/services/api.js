import axios from 'axios';

//Initialize our API to request the info
const api = axios.create({
  baseURL: 'https://vertice-app-v2.vercel.app/',
  //baseURL: 'http://localhost:8080/',
});

export default api;
