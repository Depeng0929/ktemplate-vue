/// <reference types="vite-plugin-pages/client" />
import type { AttributifyAttributes } from '@unocss/preset-attributify'

declare module '@vue/runtime-dom' {
  interface HTMLAttributes extends AttributifyAttributes {}
}

declare module '*.vue' {
  import { type DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  readonly VITE_APP_BASE_API: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
