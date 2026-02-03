<script setup lang="ts">
import { Mail, Linkedin, Github, Sparkles } from 'lucide-vue-next'

const { t } = useI18n()
const route = useRoute()
const canonicalUrl = computed(() => {
  const path = route.path.endsWith('/') ? route.path : `${route.path}/`
  return `https://adrien-lloret.com${path}`
})

useSeoMeta({
  title: () => t('seo.contact.title'),
  description: () => t('seo.contact.description'),
  ogTitle: () => t('seo.contact.ogTitle'),
  ogDescription: () => t('seo.contact.ogDescription'),
  ogUrl: canonicalUrl,
  ogImage: 'https://adrien-lloret.com/images/portfolio.png',
  twitterTitle: () => t('seo.contact.ogTitle'),
  twitterDescription: () => t('seo.contact.ogDescription'),
  twitterImage: 'https://adrien-lloret.com/images/portfolio.png'
})

useHead({
  link: [
    { rel: 'canonical', href: canonicalUrl }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-[#D1E5FF] px-6 flex items-center justify-center -mt-32 pt-20 sm:pt-32">
    <div class="max-w-7xl w-full bg-white p-6 sm:p-10 md:p-12 lg:p-20 rounded-2xl sm:rounded-[4rem] shadow-2xl relative overflow-hidden mt-4 mb-10 sm:my-12">

      <!-- Decorative elements -->
      <div class="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-[#E2F99E]/20 rounded-full blur-3xl -z-0"></div>
      <div class="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-[#FF6D4D]/10 rounded-full blur-3xl -z-0"></div>

      <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-center relative z-10">

        <!-- Info Section -->
        <div class="lg:col-span-2">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E2F99E] text-green-900 font-black text-[10px] uppercase tracking-widest mb-6">
            <Sparkles class="w-3.5 h-3.5" /> {{ t('contact.badge') }}
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tighter leading-[1.1] uppercase whitespace-normal">
            {{ t('contact.title') }} <span class="scribble-highlight text-[#FF6D4D]">{{ t('contact.titleHighlight') }}</span>
          </h1>

          <p class="text-lg sm:text-xl text-slate-500 font-medium mb-10 leading-relaxed text-balance">
            {{ t('contact.description') }}
          </p>

          <div class="flex items-center gap-4">
            <a href="mailto:lloret.ad@gmail.com" class="w-14 h-14 rounded-2xl bg-rose-50 flex items-center justify-center text-rose-500 hover:scale-110 hover:bg-rose-100 transition-all shadow-sm">
              <Mail class="w-6 h-6" />
            </a>

            <a href="https://www.linkedin.com/in/adrien-lloret-592213194/" target="_blank" rel="noopener noreferrer" class="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-500 hover:scale-110 hover:bg-indigo-100 transition-all shadow-sm">
              <Linkedin class="w-6 h-6" />
            </a>

            <a href="https://github.com/lloret-adrien" target="_blank" rel="noopener noreferrer" class="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-slate-900 hover:scale-110 hover:bg-gray-100 transition-all shadow-sm">
              <Github class="w-6 h-6" />
            </a>
          </div>
        </div>

        <!-- Form Side -->
        <div class="lg:col-span-3 w-full">
          <ContactForm />
        </div>

      </div>
    </div>
  </div>
</template>