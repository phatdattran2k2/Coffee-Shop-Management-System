import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://localhost:3000/api/drinks'
});

export default Api;
