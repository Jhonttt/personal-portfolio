// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  modules: ['@nuxt/eslint', '@pinia/nuxt', '@nuxtjs/sitemap'],

  typescript: {
    strict: true,
  },

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['@vue/devtools-core', '@vue/devtools-kit'],
    },
  },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    },
  },
})
