<script setup lang="ts">
const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
</script>

<template>
  <div class="bg-[#F1EEE9] p-1 rounded-full flex items-center gap-1 shadow-inner border border-black/5">
    <NuxtLink
      :to="switchLocalePath('en')"
      :class="[
        'px-4 py-1.5 rounded-full text-xs font-black transition-all duration-300',
        locale === 'en' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
      ]"
    >
      EN
    </NuxtLink>
    <NuxtLink
      :to="switchLocalePath('fr')"
      :class="[
        'px-4 py-1.5 rounded-full text-xs font-black transition-all duration-300',
        locale === 'fr' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
      ]"
    >
      FR
    </NuxtLink>
  </div>
</template>