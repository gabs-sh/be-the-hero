import axios from 'axios'

const api = axios.create({
    // url principal
    baseURL : "http://localhost:3333"
})


export default api