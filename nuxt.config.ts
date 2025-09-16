// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils/module',
    '@nuxt/ui',
    '@nuxtjs/color-mode',
  ],
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-04-03',
  alias: {
    '@': './',
    '~': './app',
    '@assets': './assets',
  },
  
  css: ['@assets/css/main.scss'],

  colorMode: {
    classSuffix: '',
    dataValue: 'theme',
  },
})
