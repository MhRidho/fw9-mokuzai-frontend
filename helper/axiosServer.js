import axios from 'axios'
import Cookies from 'js-cookie'

// const axiosServer = axios.create({
//   // baseURL: 'https://fazzpay.herokuapp.com/'
//   baseURL: 'http://localhost:3333/'
// })

const axiosServer = ()=> {
  const headers = {}
  const token = Cookies.get('token')
  if (token) {
    headers.authorization = `Bearer ${token}`
  }
  return axios.create({
    headers,
    baseURL: 'http://localhost:3333/'
  })
}

export default axiosServer