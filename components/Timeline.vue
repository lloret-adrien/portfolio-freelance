<script setup lang="ts">
import { GraduationCap, Briefcase, ArrowUpRight } from 'lucide-vue-next'
import { EXPERIENCE } from '~/utils/data'

const { t } = useI18n()
const localePath = useLocalePath()

// Chronologie : du plus ancien au plus récent
const chronologicExperience = [...EXPERIENCE].reverse()

const containerRef = ref<HTMLDivElement | null>(null)
const itemRefs = ref<(HTMLDivElement | null)[]>([])
const lineHeight = ref(0)
const itemOffsets = ref<number[]>([])
const isButtonActive = ref(false)

// Calcul des offsets pour que la ligne s'arrête exactement sur les icônes
const calculateOffsets = () => {
  if (!containerRef.value) return
  const offsets = itemRefs.value.map(el => {
    if (!el) return 0
    return el.offsetTop + 24
  })
  itemOffsets.value = offsets
}

onMounted(() => {
  calculateOffsets()
  window.addEventListener('resize', calculateOffsets)
  setTimeout(calculateOffsets, 100)
})

onUnmounted(() => {
  window.removeEventListener('resize', calculateOffsets)
})

// Gestion de l'animation de la ligne au scroll
let rafId: number | null = null

const handleScroll = () => {
  if (rafId !== null) return

  rafId = requestAnimationFrame(() => {
    if (!containerRef.value) {
      rafId = null
      return
    }

    const viewportHeight = window.innerHeight
    const triggerPoint = viewportHeight * 0.6

    const container = containerRef.value
    const rect = container.getBoundingClientRect()

    const relativeY = triggerPoint - rect.top
    const clampedHeight = Math.max(0, Math.min(rect.height, relativeY))

    lineHeight.value = clampedHeight

    // Activer le bouton si la ligne a presque atteint le bas du conteneur
    if (clampedHeight > rect.height - 150) {
      isButtonActive.value = true
    }

    rafId = null
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (rafId !== null) cancelAnimationFrame(rafId)
})

const isActive = (index: number) => {
  const itemTriggerPoint = itemOffsets.value[index] || (index * 250 + 100)
  return lineHeight.value >= itemTriggerPoint
}

const setItemRef = (el: any, index: number) => {
  itemRefs.value[index] = el
}
</script>

<template>
  <section id="experience" class="py-20 px-4 relative min-h-[100vh]">
    <div class="max-w-6xl mx-auto">
      <div class="relative" ref="containerRef">

        <!-- Ligne de fond (Rail) -->
        <div class="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-100 transform -translate-x-1/2 rounded-full" />

        <!-- Ligne active (Dessinée au scroll) -->
        <div
          class="absolute left-8 md:left-1/2 top-0 w-[2px] bg-[#FF6D4D] shadow-[0_0_20px_rgba(255,109,77,0.4)] transform -translate-x-1/2 rounded-full z-10 transition-shadow duration-300 will-change-[height]"
          :style="{ height: `${lineHeight}px` }"
        />

        <div class="space-y-32 pb-16">
          <div
            v-for="(item, index) in chronologicExperience"
            :key="item.id"
            :ref="(el) => setItemRef(el, index)"
            :class="[
              'relative flex flex-col md:flex-row gap-0 md:gap-16 items-start',
              item.type === 'education' ? 'md:flex-row-reverse' : ''
            ]"
          >

            <!-- Icône Centrale -->
            <div class="absolute left-8 md:left-1/2 top-0 transform -translate-x-1/2 flex flex-col items-center z-20">
              <div
                :class="[
                  'w-14 h-14 rounded-2xl border-2 flex items-center justify-center transition-all duration-500 ease-out shadow-sm',
                  isActive(index)
                    ? 'bg-[#FF6D4D] border-[#FF6D4D] text-white scale-110 shadow-xl shadow-[#FF6D4D]/25 rotate-[10deg]'
                    : 'bg-white border-slate-100 text-slate-300 scale-100 rotate-0'
                ]"
              >
                <Briefcase v-if="item.type === 'work'" :size="24" :class="isActive(index) ? 'text-white' : 'text-slate-300'" />
                <GraduationCap v-else :size="24" :class="isActive(index) ? 'text-white' : 'text-slate-300'" />
              </div>
            </div>

            <!-- Carte de Contenu -->
            <div
              :class="[
                'w-full md:w-[calc(50%-4rem)] pl-24 md:pl-0 transition-all duration-1000 ease-out',
                item.type === 'education' ? 'md:text-right' : 'md:text-left',
                isActive(index) ? 'opacity-100 translate-y-0 blur-0' : 'opacity-10 translate-y-12 blur-[2px]'
              ]"
            >
              <div :class="['mb-6 flex flex-col', item.type === 'education' ? 'md:items-end' : 'md:items-start']">
                <span
                  :class="[
                    'w-fit inline-block py-1.5 px-4 rounded-full text-[10px] border font-black uppercase tracking-widest transition-all duration-500',
                    isActive(index)
                      ? 'bg-[#FF6D4D]/10 text-[#FF6D4D] border-[#FF6D4D]/20'
                      : 'bg-slate-50 text-slate-400 border-slate-100'
                  ]"
                >
                  {{ item.year }}
                </span>
              </div>

              <h4
                :class="[
                  'text-3xl md:text-4xl font-black mb-3 tracking-tighter uppercase leading-none transition-colors duration-500',
                  isActive(index) ? 'text-slate-900' : 'text-slate-400'
                ]"
              >
                {{ $t(`parcours.data.${item.id}.title`) }}
              </h4>

              <p
                :class="[
                  'text-xs font-black tracking-[0.2em] uppercase mb-6 transition-colors duration-500',
                  isActive(index) ? 'text-[#7B61FF]' : 'text-slate-400'
                ]"
              >
                {{ $t(`parcours.data.${item.id}.subtitle`) }}
              </p>

              <p
                :class="[
                  'text-lg md:text-xl font-medium leading-relaxed transition-colors duration-500',
                  isActive(index) ? 'text-slate-500' : 'text-slate-300'
                ]"
              >
                {{ $t(`parcours.data.${item.id}.description`) }}
              </p>

              <div :class="['mt-8 flex', item.type === 'education' ? 'md:justify-end' : 'md:justify-start']">
                <div
                  :class="[
                    'text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-md border',
                    isActive(index) ? 'border-slate-200 text-slate-400' : 'border-slate-50 text-slate-200'
                  ]"
                >
                  {{ item.type === 'work' ? t('parcours.workExperience') : t('parcours.education') }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Bouton Final - Apparition par échelle (scale) élastique -->
        <div class="mt-20 pt-10 flex justify-center relative z-30">
          <div
            :class="[
              'transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform',
              isButtonActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
            ]"
          >
            <NuxtLink
              :to="localePath('/contact')"
              class="group relative inline-flex items-center gap-6 px-12 py-7 bg-[#1A1A1A] text-white rounded-[2.5rem] font-black text-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl hover:shadow-[#FF6D4D]/20"
            >
              {{ t('footer.contactMe') }}
              <div class="bg-[#FF6D4D] p-2.5 rounded-full group-hover:rotate-45 transition-transform duration-500">
                <ArrowUpRight class="w-6 h-6" />
              </div>
              <div class="absolute -top-3 -right-3 bg-[#E2F99E] text-black text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-tighter shadow-lg -rotate-6 group-hover:rotate-0 transition-transform">
                {{ t('home.hero.ctaBadge') }}
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>