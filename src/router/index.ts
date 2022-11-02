import { createRouter, createWebHistory } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from '~pages'
import { setupRouter } from '~/router/guard'

const routes = setupLayouts(generatedRoutes)
const router = createRouter({
  history: createWebHistory('/'),
  routes,
})

export default setupRouter(router)
