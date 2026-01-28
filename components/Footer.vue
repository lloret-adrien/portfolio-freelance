<script setup lang="ts">
import { Linkedin, Github, Mail, MapPin } from 'lucide-vue-next'

const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <footer class="bg-white border-t border-gray-100 py-24 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
        <div class="md:col-span-5">
          <div class="bg-[#FF6D4D] text-white inline-block px-4 py-1.5 rounded-xl font-black text-xl tracking-tight mb-8">
            Adrien Lloret
          </div>
          <h3 class="text-3xl font-black text-slate-900 mb-6 tracking-tight max-w-sm">
            {{ t('footer.tagline') }} <span class="text-[#FF6D4D]">{{ t('footer.taglineHighlight') }}</span>.
          </h3>
          <p class="text-gray-500 max-w-sm text-lg font-medium leading-relaxed mb-8">
            {{ t('footer.description') }}
          </p>
          <div class="flex gap-4">
            <a
              href="https://www.linkedin.com/in/adrien-lloret-592213194/"
              target="_blank"
              class="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-slate-900 hover:bg-[#0077B5] hover:text-white transition-all shadow-sm"
            >
              <Linkedin class="w-5 h-5" />
            </a>
            <a
              href="https://github.com/lloret-adrien"
              target="_blank"
              class="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-slate-900 hover:bg-black hover:text-white transition-all shadow-sm"
            >
              <Github class="w-5 h-5" />
            </a>
            <a
              href="mailto:lloret.ad@gmail.com"
              class="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-slate-900 hover:bg-[#FF6D4D] hover:text-white transition-all shadow-sm"
            >
              <Mail class="w-5 h-5" />
            </a>
          </div>
        </div>

        <div class="md:col-span-3 md:col-start-7">
          <h4 class="font-black text-slate-900 mb-8 uppercase tracking-widest text-[10px]">{{ t('footer.navigation') }}</h4>
          <ul class="flex flex-col space-y-1 text-gray-500 font-bold text-base">
            <li>
              <NuxtLink :to="localePath('/')" class="inline-block py-2.5 px-4 -ml-4 rounded-xl hover:bg-black/5 hover:text-[#FF6D4D] transition-all">
                {{ t('footer.home') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/expertises')" class="inline-block py-2.5 px-4 -ml-4 rounded-xl hover:bg-black/5 hover:text-[#FF6D4D] transition-all">
                {{ t('nav.expertises') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink :to="localePath('/parcours')" class="inline-block py-2.5 px-4 -ml-4 rounded-xl hover:bg-black/5 hover:text-[#FF6D4D] transition-all">
                {{ t('nav.parcours') }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="md:col-span-3 flex items-start">
          <NuxtLink
            :to="localePath('/contact')"
            class="group relative inline-flex items-center px-10 py-5 bg-[#1A1A1A] text-white rounded-[2rem] font-black text-xl hover:scale-105 transition-all shadow-2xl"
          >
            {{ t('footer.contactMe') }} <Mail class="w-5 h-5 ml-3" />
            <div class="absolute -top-3 -right-3 bg-[#E2F99E] text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg rotate-12">{{ t('footer.projectBadge') }}</div>
          </NuxtLink>
        </div>
      </div>

      <div class="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
          <div class="text-xs font-bold text-gray-400">
            © {{ new Date().getFullYear() }} {{ t('footer.copyright') }}
          </div>
          <div class="flex items-center gap-2 text-xs font-bold text-gray-400">
            <MapPin class="w-3.5 h-3.5 text-[#FF6D4D]" />
            <span>{{ t('footer.location') }} <strong class="text-slate-600">{{ t('footer.france') }}</strong>, à <strong class="text-slate-600">{{ t('footer.city') }}</strong> — {{ t('footer.remoteAvailable') }}</span>
          </div>
        </div>
        <div class="flex gap-8 text-xs font-black uppercase tracking-widest text-slate-400">
          <NuxtLink :to="localePath('/contact')" class="py-2.5 px-5 -my-2.5 rounded-xl text-[#FF6D4D] hover:bg-[#FF6D4D]/10 transition-all">
            {{ t('footer.startProject') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>