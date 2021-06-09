import axios from "axios"

axios.defaults.baseURL="http://localhost:5050"
axios.defaults.withCredentials = true;

export {axios}