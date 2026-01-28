<script setup lang="ts">
const lang = ref<'EN' | 'FR'>('FR')
</script>

<template>
  <div class="bg-[#F1EEE9] p-1 rounded-full flex items-center gap-1 shadow-inner border border-black/5">
    <button
      @click="lang = 'EN'"
      :class="[
        'px-4 py-1.5 rounded-full text-xs font-black transition-all duration-300',
        lang === 'EN' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
      ]"
    >
      EN
    </button>
    <button
      @click="lang = 'FR'"
      :class="[
        'px-4 py-1.5 rounded-full text-xs font-black transition-all duration-300',
        lang === 'FR' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'
      ]"
    >
      FR
    </button>
  </div>
</template>