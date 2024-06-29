import axios from "axios"
const instance = axios.create({
    baseURL: 'http://127.0.0.1:3000/api/',
    timeout: 1000,
    withCredentials: true
})
export default instance