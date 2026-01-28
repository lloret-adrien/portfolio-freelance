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
        { name: 'description', content: 'Développeur Web Fullstack Freelance à Montpellier, France. Spécialisé en Vue.js, Nuxt et TypeScript. Applications web performantes, e-commerce et SaaS sur mesure. Disponible en remote.' },
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
        { property: 'og:site_name', content: 'Adrien Lloret - Portfolio' },
        { property: 'og:locale', content: 'fr_FR' },
        { property: 'og:image', content: 'https://adrien-lloret.com/images/og-image.png' },
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
        { rel: 'canonical', href: 'https://adrien-lloret.com' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  typescript: {
    strict: true
  }
})