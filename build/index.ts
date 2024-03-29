import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import Unocss from 'unocss/vite'
import mockServer from 'vite-plugin-mock-server'
import legacy from '@vitejs/plugin-legacy'
import unplugins from './unplugin'

export function createVitePlugins() {
  return [
    vue({
      reactivityTransform: true,
    }),
    VueDevTools(),
    legacy({
      targets: '> 0.5%',
      modernPolyfills: true,
    }),
    Unocss({}),
    mockServer({
      logLevel: 'info',
    }),
    ...unplugins,
  ]
}
