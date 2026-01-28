<!--
  Page désactivée - Les projets ouvrent maintenant directement leur lien externe

<script setup lang="ts">
import { ArrowLeft, CheckCircle2, User, Zap, Boxes } from 'lucide-vue-next'
import { PROJECTS } from '~/utils/data'

const route = useRoute()
const slug = route.params.slug as string

const project = computed(() => {
  return PROJECTS.find((p) => p.slug === slug)
})

// Redirect if project not found
if (!project.value) {
  navigateTo('/')
}
</script>

<template>
  <div v-if="project" class="pb-24">
    <section class="bg-white px-6 pt-32 pb-24 border-b border-gray-50">
      <div class="max-w-5xl mx-auto">
        <NuxtLink to="/" class="inline-flex items-center text-slate-400 hover:text-indigo-600 font-bold mb-12 transition-colors">
          <ArrowLeft class="w-5 h-5 mr-2" /> Retour aux projets
        </NuxtLink>
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <span class="px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-xs font-black uppercase tracking-widest mb-6 inline-block">
              {{ project.type }}
            </span>
            <h1 class="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter">{{ project.name }}</h1>
          </div>
          <div class="text-left md:text-right">
            <p class="text-indigo-600 font-bold text-2xl mb-1">{{ project.impact }}</p>
            <p class="text-slate-400 uppercase tracking-widest text-xs font-bold">Impact Mesuré</p>
          </div>
        </div>
        <div class="aspect-[21/9] rounded-[3rem] overflow-hidden border border-gray-100 shadow-2xl">
          <img :src="project.imageUrl" :alt="project.name" class="w-full h-full object-cover" />
        </div>
      </div>
    </section>

    <section class="px-6 py-24">
      <div class="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">
        <div class="lg:col-span-2 space-y-16">
          <div>
            <h2 class="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <Boxes class="w-6 h-6 mr-3 text-indigo-500" /> Contexte & Problématique
            </h2>
            <p class="text-xl text-slate-500 leading-relaxed text-balance">
              {{ project.context }}
            </p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <Zap class="w-6 h-6 mr-3 text-indigo-500" /> Solution Apportée
            </h2>
            <p class="text-xl text-slate-500 leading-relaxed text-balance">
              {{ project.solution }}
            </p>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-slate-900 mb-8 flex items-center">
              <CheckCircle2 class="w-6 h-6 mr-3 text-indigo-500" /> Résultats & Apprentissages
            </h2>
            <div class="grid grid-cols-1 gap-4">
              <div v-for="(res, i) in project.results" :key="i" class="flex items-start p-6 bg-[#FAFAFA] rounded-2xl border border-gray-50">
                <div class="w-8 h-8 rounded-full bg-white flex items-center justify-center text-indigo-600 font-bold shrink-0 mr-4">
                  {{ i + 1 }}
                </div>
                <p class="text-slate-700 font-medium">{{ res }}</p>
              </div>
            </div>
          </div>
        </div>

        <aside class="space-y-12">
          <div class="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm">
            <div class="mb-8">
              <h3 class="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Mon Rôle</h3>
              <div class="flex items-center text-slate-900 font-bold">
                <User class="w-5 h-5 mr-3 text-indigo-500" />
                {{ project.role }}
              </div>
            </div>
            <div>
              <h3 class="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Stack & Outils</h3>
              <div class="flex flex-wrap gap-2">
                <span v-for="tech in project.techs" :key="tech" class="px-3 py-1.5 bg-slate-50 text-slate-600 rounded-lg text-sm font-bold">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>

          <div class="p-8 bg-indigo-50 rounded-3xl border border-indigo-100">
            <h3 class="text-lg font-bold text-indigo-900 mb-4">Un projet similaire ?</h3>
            <p class="text-indigo-700 text-sm mb-6 leading-relaxed">Prêt à transformer vos défis techniques en opportunités de croissance ?</p>
            <NuxtLink to="/contact" class="w-full block text-center py-4 bg-indigo-600 text-white rounded-2xl font-bold hover:bg-indigo-700 transition-colors">
              Parlons-en simplement
            </NuxtLink>
          </div>
        </aside>
      </div>
    </section>
  </div>
</template>
-->

<script setup lang="ts">
// Page désactivée - redirige vers l'accueil
navigateTo('/')
</script>

<template>
  <div></div>
</template>