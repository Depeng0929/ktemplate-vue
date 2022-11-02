/// <reference types="vitest" />

import path from 'path'
import { defineConfig } from 'vite'
import visualizer from 'rollup-plugin-visualizer'
import { createVitePlugins } from './build/index.js'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

  build: process.env.NODE_ENV === 'production'
    ? {
        sourcemap: false,
        minify: 'terser',
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
        rollupOptions: {
          plugins: [
            process.env.NODE_ENV === 'production' && visualizer({
              open: true,
              gzipSize: true,
              brotliSize: true,
            }),
          ],
        },
      }
    : undefined,

  server: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        // rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
  plugins: createVitePlugins(),

  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'jsdom',
  },

})
