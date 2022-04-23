import service from 'axios'
import { useUserStore } from '~/store/user'

service.interceptors.request.use(
  (config) => {
    const userStore = useUserStore()
    const token = userStore.token

    if (token)
      config.headers!.token = token
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// response interceptor
service.interceptors.response.use(
  (response) => {
    const res = response.data

    if (
      response.status < 300
      && response.status >= 200
      && res.code === 200
    )
      return res.content || res
    else
      return Promise.reject(res || 'error')
  },
  (error) => {
    const res = error.response && error.response.data
    if (res && res.code === 9999) {
      store.dispatch('user/logout')
      router.push({ name: 'Login' })
    }
    else {
      return Promise.reject(res)
    }

    return Promise.reject(error)
  },
)

export default service
