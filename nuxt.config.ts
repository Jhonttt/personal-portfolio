// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
const baseURL = process.env.NUXT_APP_BASE_URL || '/'
const fontURL = `${baseURL.replace(/\/$/, '')}/fonts/public-sans-latin.woff2`
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  modules: ['@nuxt/eslint', '@pinia/nuxt', '@nuxtjs/sitemap', '@nuxtjs/i18n'],

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
      htmlAttrs: { lang: 'es' },
      link: [
        {
          rel: 'preload',
          as: 'font',
          type: 'font/woff2',
          href: fontURL,
          crossorigin: 'anonymous',
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: `${process.env.NUXT_APP_BASE_URL || ''}/favicon.ico`,
        },
      ],
      style: [
        {
          innerHTML: `@font-face{font-family:'Public Sans';src:url('${fontURL}') format('woff2');font-style:normal;font-weight:300 900;font-display:optional}`,
        },
      ],
    },
    baseURL,
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    },
  },

  nitro: {
    compressPublicAssets: true,
  },

  i18n: {
    locales: [
      { code: 'es', language: 'es-ES', name: 'Español', file: 'es.json' },
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
    ],
    defaultLocale: 'es',
    strategy: 'no_prefix',
    detectBrowserLanguage: { useCookie: true, alwaysRedirect: true },
  },
})
