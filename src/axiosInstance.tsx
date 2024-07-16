import axios, { AxiosInstance, AxiosError, AxiosResponse } from "axios";
import { jwtDecode } from "jwt-decode";


const axiosInstance = (): AxiosInstance => {
    const headers = {
      "Content-Type": "application/json",
    };    
  
    const client = axios.create({
      baseURL: import.meta.env.VITE_APP_BACKEND_URL,
      headers,
      timeout: 600000,
      withCredentials: false,
    });
  
    client.interceptors.request.use((config: any) => {

    //change the token name
      const token = localStorage.getItem("accessToken");
      config.headers = config.headers || {};

      if(token){
        try {
          const decoded:any = jwtDecode(token);
          const currentTime = Date.now().valueOf() / 1000;
          if(decoded.exp < currentTime){
            localStorage.removeItem("accessToken");
            window.location.reload()
          }else{
            config.headers.Authorization = `Bearer ${token}`;
          }
          
        } catch (error) {
          
        }
      }
      return config;
    });
  
    client.interceptors.response.use(
      (response: AxiosResponse) => {
        return response;
      },
      (error: AxiosError) => {
        try {
          const { response } = error;
          if (response?.status === 401) {
            localStorage.removeItem("accessToken");
            window.location.reload();
          }
        } catch (e) {
          console.error(e);
        }
        throw error;
      }
    );
    return client;
  };
  
  export default axiosInstance;