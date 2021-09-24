import axios from 'axios'
import { Toast } from 'vant'
import router from '@/router'

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? '//backend-api-01.newbee.ltd/api/v1' : '//backend-api-01.newbee.ltd/api/v1'
axios.defaults.withCredentials = true
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['token'] = localStorage.getItem('token') || ''
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.response.use(res => {
  const { data } = res
  if (typeof data !== 'object') {
    Toast.fail('服务器异常')
    return Promise.reject(res)
  }
  const { resultCode, message } = data
  if (resultCode !== 200) {
    if (message) Toast.fail(message)
    if (resultCode === 416) {
      router.push({ path: '/login' })
    }
    return Promise.reject(data)
  }
  return data
})

export default axios
