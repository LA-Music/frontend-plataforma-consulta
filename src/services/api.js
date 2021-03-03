import axios from 'axios'

const api = axios.create({
  baseURL: 'https://lamusic-platform-backend.herokuapp.com',  
})


export { api };