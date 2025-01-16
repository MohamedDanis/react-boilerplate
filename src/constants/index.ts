const APP_URL='/api/v1'
const API_URL = import.meta.env.VITE_APP_BACKEND_URL
export const BACKEND_URL=API_URL+APP_URL


export const apiConstants = {
    login: '/login',
    register: '/register',
    getUser: '/user/',
    getUsers: '/users',
}