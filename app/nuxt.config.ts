// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primeuix/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: false,
  target: 'static',
  app: {
    baseURL: '/f1data/' // 👈 important for GitHub Pages
  },
  modules: [
    '@primevue/nuxt-module'
  ],
  primevue: {
      options: {
          theme: {
              preset: Aura
          }
      }
  }
})
