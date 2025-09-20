import { defineConfig } from 'vitest/config'
import { defineVitestProject } from '@nuxt/test-utils/config'
import path from 'path'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          name: 'unit',
          include: ['test/{e2e,unit}/*.{test,spec}.ts'],
          environment: 'node',
        },
        resolve: {
          alias: {
            '~': path.resolve(__dirname, './app'),
            '@/': path.resolve(__dirname, './'),
            '@assets': path.resolve(__dirname, './assets'),
          },
        },
      },
      await defineVitestProject({
        test: {
          name: 'nuxt',
          include: ['test/nuxt/*.{test,spec}.ts'],
          environment: 'nuxt',
        },
      }),
    ],
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './app'),
      '@/': path.resolve(__dirname, './'),
      '@assets': path.resolve(__dirname, './assets'),
    },
  },
})
