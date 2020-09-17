import axios from 'axios'

const BASE_URL = process.env.VUE_APP_CHAT_API_BASE_URL
const PORT = process.env.VUE_APP_CHAT_API_PORT

const axiosInstance = axios.create({
  baseURL: `${BASE_URL}:${PORT}/api/v1`,
  headers: {
    'Content-Type': 'application/json'
  }
})

export { axiosInstance }
