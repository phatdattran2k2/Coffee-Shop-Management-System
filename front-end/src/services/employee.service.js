import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://localhost:3000/api/employees'
});

export default Api;
