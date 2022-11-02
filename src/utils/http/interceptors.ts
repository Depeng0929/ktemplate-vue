import { isNil } from '@depeng9527/tools'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import { storage_token } from '~/composables/storage'

export function requestInterceptors(config: AxiosRequestConfig) {
  const token = storage_token.value

  config.headers = Object.assign(
    {},
    config.headers,
    // setToken
    isNil(token) ? null : { token },
  )
  return config
}

export function responseInterceptors(response: AxiosResponse<API.AppHttpResponse>) {
  const res = response.data
  if (
    res && res.code === 200
  ) {
    return res.data || res
  }
  else {
    handlerError(res)
    return Promise.reject(res) as any
  }
}

export function reqResolver(error: any) {
  return Promise.reject(error)
}

export function responeResolver(error: any) {
  const res
  = error.response
  && (error.response.data || error.response)
  return Promise.reject(res || 'error')
}

function handlerError(response: API.AppHttpResponse) {
  const strategy: Record<number, () => void> = {
    402: () => {
      // 这里可以做一些登录失效的处理
    },
  }

  const code = response.code
  if (code && strategy[code]) {
    return strategy[code]()
  }
  else {
    const msg = response.msg
    msg && alert('msg')
  }
}
