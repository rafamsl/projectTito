import axios from 'axios';
import { getAuthStore } from '../stores/authStore';

const api = axios.create({
  baseURL: 'https://api.example.com', // Replace with your actual API URL
});

api.interceptors.request.use((config) => {
  const token = getAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      getAuthStore.getState().logout();
    }
    return Promise.reject(error);
  }
);

export default api;