import type { Router } from 'vue-router'
import { appConfig } from '~/config/index'

export function createPageTitleGuard(router: Router) {
  const baseTitle = appConfig.title

  router.afterEach((to) => {
    const pageTitle = to.meta?.title
    if (pageTitle)
      document.title = `${pageTitle} | ${baseTitle}`
    else
      document.title = baseTitle
  })
}
