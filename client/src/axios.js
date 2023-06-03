import axios from 'axios'

//const BASE_URL: 'http://localhost:5000'

export const request = axios.create({
    baseURL: 'https://happyabode.onrender.com'
    //https://happyabode.onrender.com
    //http://localhost:5000
})