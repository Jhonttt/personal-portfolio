// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

const baseURL = process.env.NUXT_APP_BASE_URL || '/'
const basePrefix = baseURL.endsWith('/') ? baseURL.slice(0, -1) : baseURL

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  modules: ['@nuxt/eslint', '@pinia/nuxt', '@nuxtjs/sitemap', '@nuxtjs/google-fonts'],

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
      meta: [
        { name: 'theme-color', content: '#0f0f0f' },
        { name: 'color-scheme', content: 'dark' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: `${basePrefix}/favicon.ico`, sizes: 'any' },
        { rel: 'icon', type: 'image/svg+xml', href: `${basePrefix}/favicon.svg` },
      ],
    },
    baseURL,
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    },
  },

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL,
    name: 'Juan Atahona | Fullstack Developer',
  },

  googleFonts: {
    families: {
      'Public+Sans': [400, 600, 700],
      'Bricolage+Grotesque': [800],
      'JetBrains+Mono': [400, 600],
    },
    subsets: ['latin'],
    display: 'swap',
    preload: true,
  },

  nitro: {
    compressPublicAssets: true,
  },

  $production: {
    routeRules: {
      '/**': {
        headers: {
          'X-Content-Type-Options': 'nosniff',
          'X-Frame-Options': 'DENY',
          'Referrer-Policy': 'strict-origin-when-cross-origin',
          'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
          'Content-Security-Policy':
            "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'",
        },
      },
    },
  },
})
