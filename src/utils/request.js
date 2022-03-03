import axios from 'axios'

// 基准地址
const server = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0', // 基准
  timeout: 5000 // 超时时间
})

// 请求拦截器
server.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
server.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

// 默认导出
export default server
