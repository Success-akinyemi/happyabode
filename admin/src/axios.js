import axios from 'axios'

//const BASE_URL: 'http://localhost:5000'

export const request = axios.create({
    baseURL: 'http://localhost:5000'
})