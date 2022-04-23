import http from '~/utils/http'

interface userType {
  svg?: string
  code?: number
  info?: object
}

// 获取验证码
export const getVerify = () => {
  return http.get<null, userType>('/captcha')
}

async function fetchData() {
  const data = await getVerify()
}
