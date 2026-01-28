<script setup lang="ts">
import { Download } from 'lucide-vue-next'
</script>

<template>
  <div class="min-h-screen pb-32 px-6 bg-[#FAFAFA]">
    <div class="max-w-6xl mx-auto pt-24">
      <!-- Header haute énergie avec animations d'apparition -->
      <header class="mb-32 text-center relative">

        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-500 font-black text-[10px] uppercase tracking-[0.2em] mb-8 animate-reveal-up">
          Éducations & Expériences
        </div>

        <h1 class="text-7xl lg:text-[140px] font-black text-slate-900 mb-8 tracking-tighter leading-none uppercase select-none animate-reveal-up [animation-delay:150ms]">
          Mon<br /> <span class="text-[#FF6D4D]">Parcours</span>
        </h1>

        <p class="text-2xl text-slate-500 max-w-2xl mx-auto font-medium mb-12 animate-reveal-up [animation-delay:300ms]">
          Une vue d'ensemble de mon parcours éducatif et professionnel sur les cinq dernières années.
        </p>

        <div class="animate-reveal-up [animation-delay:450ms]">
          <button class="group relative inline-flex items-center px-12 py-6 bg-[#1A1A1A] text-white rounded-[2rem] font-black text-2xl hover:scale-105 transition-all shadow-2xl">
            Télécharger mon CV <Download class="w-6 h-6 ml-3" />
            <div class="absolute -top-3 -right-3 bg-[#E2F99E] text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg rotate-12">Version 4.2</div>
          </button>
        </div>
      </header>

      <Timeline />
    </div>
  </div>
</template>