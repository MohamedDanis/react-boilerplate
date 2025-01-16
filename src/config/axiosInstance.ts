import { BACKEND_URL } from '@/constants';
import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

const axiosInstance = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    try {
      const { response } = error;
      if (response?.status === 401) {
        localStorage.removeItem('token');
        window.location.reload();
      }
    } catch (e) {
      console.error(e);
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
