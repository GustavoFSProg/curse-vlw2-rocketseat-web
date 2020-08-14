import axios from 'axios'

const api = axios.create({
  // baseURL: 'http://localhost:3333',
  baseURL: 'https://nlw2-proffy-api.herokuapp.com/',
})

export default api
