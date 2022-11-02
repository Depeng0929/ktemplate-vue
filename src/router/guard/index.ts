import type { Router } from 'vue-router'
import { createPermissionGuard } from '~/router/guard/permission'
import { createPageTitleGuard } from '~/router/guard/title'

export function setupRouter(router: Router) {
  createPermissionGuard(router)
  createPageTitleGuard(router)
  return router
}
