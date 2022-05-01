import axios from 'axios';

const apiService = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    headers: {
        "Content-type": "application/json"
    }
});
export default apiService;