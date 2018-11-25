import Axios from 'axios'

export default Axios.create({
  baseURL: 'https://api.unsplash.com/collections/',
  timeout: 1000,
  headers: { 'Authorization': `Client-ID ${process.env.VUE_APP_UNSPLASH_API_KEY}` }
})
