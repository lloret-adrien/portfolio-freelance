// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  compatibilityDate: '2024-11-01',

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],

  css: [
    '@/assets/css/main.css'
  ],

  app: {
    head: {
      htmlAttrs: {
        lang: 'fr'
      },
      title: 'Adrien Lloret | Développeur Web Fullstack Freelance',
      titleTemplate: '%s | Adrien Lloret',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'description', content: 'Développeur Web Fullstack Freelance spécialisé en Vue.js, Nuxt et TypeScript. Je conçois des applications web performantes, des sites e-commerce et des solutions SaaS sur mesure.' },
        { name: 'keywords', content: 'développeur web, fullstack, freelance, vue.js, nuxt, typescript, e-commerce, saas, france, bordeaux' },
        { name: 'author', content: 'Adrien Lloret' },
        { name: 'robots', content: 'index, follow' },
        { name: 'theme-color', content: '#FF6D4D' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Adrien Lloret - Portfolio' },
        { property: 'og:locale', content: 'fr_FR' },
        { property: 'og:image', content: 'https://adrienlloret.com/images/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Adrien Lloret - Développeur Web Fullstack Freelance' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://adrienlloret.com/images/og-image.png' },
        { name: 'twitter:creator', content: '@adrienlloret' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap'
        },
        { rel: 'canonical', href: 'https://adrienlloret.com' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  typescript: {
    strict: true
  }
})