import Components from 'unplugin-vue-components/vite'
import {
  VantResolver,
} from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import DefineOptions from 'unplugin-vue-define-options/vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'

import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

export default [
  Pages(),
  Layouts(),
  DefineOptions({
    include: [/\.vue$/, /\.vue\?vue/],
  }),
  Components({
    resolvers: [
      VantResolver(),
      IconsResolver({
        componentPrefix: '',
      }),
    ],
    dts: 'src/components.d.ts',
  }),
  Icons({
    scale: 1,
    defaultClass: 'inline-block',
  }),
  AutoImport({
    imports: [
      'vue',
      'vue-router',
      '@vueuse/core',
      {
        '@depeng9527/tools': [
          'debug',
        ],
      },
    ],
    dts: 'src/auto-imports.d.ts',
  }),
]
