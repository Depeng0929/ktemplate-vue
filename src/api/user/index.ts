
import type { User } from '~/api/user/type.d'
import http from '~/utils/http'

export function fetchUser() {
  return http<User>({
    url: '/user',
    method: 'GET',
  })
}
