// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils/module',
    '@nuxt/ui',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt',
  ],
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-04-03',
  alias: {
    '@': path.resolve(__dirname, './'),
    '~': path.resolve(__dirname, './app'),
    '@assets': path.resolve(__dirname, './app/assets'),
    styles: path.resolve(__dirname, './app/assets/css'),
    'styles/*': path.resolve(__dirname, './app/assets/css/*'),
  },

  css: ['@assets/css/main.scss'],

  colorMode: {
    classSuffix: '',
    dataValue: 'theme',
  },

  typescript: {
    shim: false,
    typeCheck: true,
    tsConfig: {
      compilerOptions: {
        moduleResolution: 'bundler',
        allowImportingTsExtensions: true,
        verbatimModuleSyntax: true,
      },
      include: ['./app/*'],
      exclude: ['node_modules', 'test/**/*.test.ts', '**/testing/*.*'],
    },
  },

  googleFonts: {
    families: {
      Commissioner: true,
    },
    fontsDir: 'assets/fonts',
  },
})