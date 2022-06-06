import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  presetWind,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block text-white cursor-pointer tracking-wide opacity-90 hover:opacity-100 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50 disabled:pointer-events-none'],
    ['border-base', 'border-gray-200 dark:border-dark-200'],
    ['bg-base', 'bg-white dark:bg-dark-100'],
    ['color-base', 'text-gray-900 dark:text-gray-300'],
    ['color-fade', 'text-gray-900:50 dark:text-gray-300:50'],
  ],
  presets: [
    presetUno(),
    presetWind(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  theme: {
    colors: {
      theme: {
        primary: '#0070f3',
      },
    },
  },
})
