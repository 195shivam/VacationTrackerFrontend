import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 5000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    // console.log('Request:', config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // console.log('Response:', response);
    return response;
  },
  (error) => {
    if (error.response) {
      console.error('Response error:', error.response);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
