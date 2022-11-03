import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'
import { reqResolver, requestInterceptors, responeResolver, responseInterceptors } from './interceptors'

function createAxios(options: AxiosRequestConfig = {}) {
  const defaultOptions = {
    baseURL: import.meta.env.VITE_APP_BASE_API,
    header: {
      'content-type': 'application/json',
    },
  }

  const service = axios.create({
    ...defaultOptions,
    ...options,
  })
  service.interceptors.request.use(requestInterceptors, reqResolver)
  service.interceptors.response.use(responseInterceptors, responeResolver)

  return service
}

export default createAxios()

export const testRequest = createAxios({
  baseURL: import.meta.env.VITE_APP_BASE_API,
})
