import axios from 'axios'

const axiosServerSide = axios.create({
  // baseURL: 'https://fazzpay.herokuapp.com/'
  baseURL: 'http://localhost:3333/'
})

export default axiosServerSide