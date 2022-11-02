import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'

import legacy from '@vitejs/plugin-legacy'
import unplugins from './unplugin'

export function createVitePlugins() {
  return [
    vue({
      reactivityTransform: true,
    }),
    legacy({
      targets: '> 0.5%',
      modernPolyfills: true,
    }),
    Unocss({}),
    ...unplugins,
  ]
}
