import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'
import { useUserStore } from '~/store/user'

const service = axios.create({
  baseURL: process.env.VITE_APP_BASE_API,
  timeout: 5000,
})

service.interceptors.request.use(
  (config) => {
    const store = useUserStore()
    const token = store.token
    if (token)
      config.headers!.token = token

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

service.interceptors.response.use(
  (response) => {
    if (
      response.status < 300
      && response.status >= 200
    )
      return response.data
    else
      return Promise.reject(response?.data || 'error')
  },
  (error) => {
    return Promise.reject(error)
  },
)

const request = async<T = unknown>(config: AxiosRequestConfig) => {
  return new Promise<T>((resolve, reject) => {
    service.request<API.AppHttpResponse<T>>(config)
      .then((res) => {
        const { data } = res
        return data.code === 200
          ? resolve(data.data)
          : reject(data)
      })
      .catch((err: API.AppHttpResponse<T>) => {
        if (err.msg) {
          const msg = err.msg || '请求失败'
          const errResponseData: API.AppHttpResponse<T> = {
            code: err.code || -1,
            msg,
            data: null as any,
          }
          return reject(errResponseData)
        }
        return reject(err)
      })
  })
}

export default request
