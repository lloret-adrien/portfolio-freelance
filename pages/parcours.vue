<script setup lang="ts">
import { Download } from 'lucide-vue-next'

const { t, locale } = useI18n()
const route = useRoute()
const canonicalUrl = computed(() => `https://adrien-lloret.com${route.path}`)

const cvUrl = computed(() => {
  return locale.value === 'fr'
    ? '/cv/Adrien_LLORET_CV.pdf'
    : '/cv/Adrien_LLORET_CV_English.pdf'
})

useSeoMeta({
  title: () => t('seo.parcours.title'),
  description: () => t('seo.parcours.description'),
  ogTitle: () => t('seo.parcours.ogTitle'),
  ogDescription: () => t('seo.parcours.ogDescription'),
  ogUrl: canonicalUrl,
  ogImage: 'https://adrien-lloret.com/images/og-image.png',
  twitterTitle: () => t('seo.parcours.ogTitle'),
  twitterDescription: () => t('seo.parcours.ogDescription'),
  twitterImage: 'https://adrien-lloret.com/images/og-image.png'
})

useHead({
  link: [
    { rel: 'canonical', href: canonicalUrl }
  ]
})
</script>

<template>
  <div class="min-h-screen pb-32 px-6 bg-[#FAFAFA]">
    <div class="max-w-6xl mx-auto pt-24">
      <!-- Header haute énergie avec animations d'apparition -->
      <header class="mb-32 text-center relative">

        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-500 font-black text-[10px] uppercase tracking-[0.2em] mb-8 animate-reveal-up">
          {{ t('parcours.badge') }}
        </div>

        <h1 class="text-7xl lg:text-[140px] font-black text-slate-900 mb-8 tracking-tighter leading-none uppercase select-none animate-reveal-up [animation-delay:150ms]">
          {{ t('parcours.title') }}<br /> <span class="text-[#FF6D4D]">{{ t('parcours.titleHighlight') }}</span>
        </h1>

        <p class="text-2xl text-slate-500 max-w-2xl mx-auto font-medium mb-12 animate-reveal-up [animation-delay:300ms]">
          {{ t('parcours.description') }}
        </p>

        <div class="animate-reveal-up [animation-delay:450ms]">
          <a :href="cvUrl" download class="group relative inline-flex items-center px-12 py-6 bg-[#1A1A1A] text-white rounded-[2rem] font-black text-2xl hover:scale-105 transition-all shadow-2xl">
            {{ t('parcours.downloadCV') }} <Download class="w-6 h-6 ml-3" />
            <div class="absolute -top-3 -right-3 bg-[#E2F99E] text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg rotate-12">{{ t('parcours.cvVersion') }}</div>
          </a>
        </div>
      </header>

      <Timeline />
    </div>
  </div>
</template>