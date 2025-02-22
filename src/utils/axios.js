import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://user-management-backend-1-you8.onrender.com/api', // Updated with live backend URL
  timeout: 5000,
});

export default instance;
