import type { User } from '~/api/user/type.d'
import http from '~/utils/http'

export function fetchUser() {
  return http<null, User>({
    url: '/user',
    method: 'GET',
  })
}
