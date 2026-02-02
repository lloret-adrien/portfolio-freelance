// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  compatibilityDate: '2024-11-01',

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/sitemap'
  ],

  site: {
    url: 'https://adrien-lloret.com',
  },

  sitemap: {
    autoI18n: true,
  },

  i18n: {
    locales: [
      { code: 'fr', language: 'fr-FR', iso: 'fr-FR', file: 'fr.json', name: 'Français' },
      { code: 'en', language: 'en-US', iso: 'en-US', file: 'en.json', name: 'English' }
    ],
    defaultLocale: 'fr',
    strategy: 'prefix_except_default',
    lazy: true,
    langDir: './locales',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },

  css: [
    '@/assets/css/main.css'
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: 'fr'
      },
      titleTemplate: '%s | Adrien Lloret',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'keywords', content: 'développeur web, fullstack, freelance, vue.js, nuxt, typescript, e-commerce, saas, montpellier, france, remote, développeur montpellier, freelance web france' },
        { name: 'geo.region', content: 'FR-34' },
        { name: 'geo.placename', content: 'Montpellier' },
        { name: 'geo.position', content: '43.6108;3.8767' },
        { name: 'ICBM', content: '43.6108, 3.8767' },
        { name: 'author', content: 'Adrien Lloret' },
        { name: 'robots', content: 'index, follow' },
        { name: 'theme-color', content: '#FF6D4D' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Développeur Web Freelance | Sites Web, Ecommerce et Applications' },
        { property: 'og:locale', content: 'fr_FR' },
        { property: 'og:image', content: 'https://adrien-lloret.com/images/portfolio.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Adrien Lloret - Développeur Web Fullstack Freelance' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://adrien-lloret.com/images/og-image.png' },
        { name: 'twitter:creator', content: '@adrienlloret' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap'
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  image: {
    quality: 80,
    format: ['webp'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    densities: [1, 2],
    domains: [],
    provider: 'netlify',
  },

  typescript: {
    strict: true
  },


  runtimeConfig: {
    public: {
      clarityId: process.env.NUXT_PUBLIC_CLARITY_ID,
    }
  },

  nitro: {
    compressPublicAssets: true,
    routeRules: {
      // SEO - French (default)
      '/': { prerender: true },
      '/parcours': { prerender: true },
      '/expertises': { prerender: true },
      '/contact': { prerender: true },
      // SEO - English
      '/en': { prerender: true },
      '/en/parcours': { prerender: true },
      '/en/expertises': { prerender: true },
      '/en/contact': { prerender: true },
    },
  },
})