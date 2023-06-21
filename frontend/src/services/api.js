import axios from 'axios';

//Initialize our API to request the info
const api = axios.create({
  //baseURL: 'https://vertice-app-v2-2kfzta9mp-4ubio.vercel.app/',
  baseURL: 'http://localhost:8080/',
});

export default api;
