<script setup lang="ts">
import type { PROJECTS } from '~/utils/data'

defineProps<{
  project: typeof PROJECTS[number]
}>()
</script>

<template>
  <NuxtLink
    :to="`/projets/${project.slug}`"
    class="bg-white rounded-[2.5rem] p-6 sm:p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#FF6D4D]/30 transition-all duration-500 group flex flex-col h-full text-left outline-none focus:ring-4 focus:ring-[#FF6D4D]/20 relative"
  >
    <div
      v-if="project.slug === 'portfolio'"
      class="absolute top-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 bg-white border border-[#FF6D4D]/20 rounded-full shadow-lg shadow-[#FF6D4D]/5 animate-bounce"
    >
      <div class="w-2.5 h-2.5 bg-[#FF6D4D] rounded-full"></div>
      <span class="text-[#FF6D4D] text-[10px] font-black uppercase tracking-widest">Vous êtes ici</span>
    </div>

    <div class="relative aspect-[16/10] rounded-3xl overflow-hidden mb-6 bg-gray-50 border border-gray-100/50">
      <img
        :src="project.imageUrl"
        :alt="project.name"
        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />
    </div>

    <div class="flex items-center justify-between gap-2 mb-5">
      <h3 class="text-2xl sm:text-3xl font-black text-slate-900 tracking-tighter w-full truncate group-hover:text-[#FF6D4D] transition-colors duration-300">
        {{ project.name }}
      </h3>
    </div>

    <p class="text-slate-500 text-base font-medium leading-relaxed mb-8 line-clamp-3">
      {{ project.shortDescription }}
    </p>

    <div class="mt-auto flex flex-wrap gap-2.5">
      <div
        v-for="(tech, i) in project.techs"
        :key="i"
        class="inline-flex items-center gap-2 bg-[#F1F3F5] group-hover:bg-[#FF6D4D]/10 px-3.5 py-1.5 rounded-full border border-gray-100/50 group-hover:border-[#FF6D4D]/20 transition-all duration-300"
      >
        <div
          :class="[
            'w-4 h-4 rounded-full flex items-center justify-center text-[7px] font-black shrink-0',
            i % 2 === 0 ? 'bg-black text-white' : 'bg-[#007FFF] text-white'
          ]"
        >
          {{ tech[0] }}
        </div>
        <span class="text-[10px] font-black text-slate-600 uppercase tracking-tight">{{ tech }}</span>
      </div>
    </div>
  </NuxtLink>
</template>