<script setup lang="ts">
import {
  Terminal,
  ShoppingBag,
  Zap,
  Layout,
  Cpu,
  MousePointer2,
  Linkedin,
  ChevronDown
} from 'lucide-vue-next'
import { EXPERTISES } from '~/utils/data'

const { t } = useI18n()
const localePath = useLocalePath()

useSeoMeta({
  title: () => t('seo.expertises.title'),
  description: () => t('seo.expertises.description'),
  ogTitle: () => t('seo.expertises.ogTitle'),
  ogDescription: () => t('seo.expertises.ogDescription'),
  ogUrl: 'https://adrien-lloret.com/expertises',
  ogImage: 'https://adrien-lloret.com/images/og-image.png',
  twitterTitle: () => t('seo.expertises.ogTitle'),
  twitterDescription: () => t('seo.expertises.ogDescription'),
  twitterImage: 'https://adrien-lloret.com/images/og-image.png'
})

useHead({
  link: [
    { rel: 'canonical', href: 'https://adrien-lloret.com/expertises' }
  ]
})

const lerpScroll = ref(0)
const ctaActive = ref(false)
const scrollY = ref(0)
const isResettingRef = ref(false)
const ctaRef = ref<HTMLDivElement | null>(null)
const scrollYRef = ref(0)
let requestId: number | null = null

// Nombre de détails par expertise
const detailsCount: Record<string, number> = {
  '1': 3,
  '2': 5,
  '3': 4,
  '4': 4
}

// Traduit les expertises dynamiquement
const allCards = computed(() => {
  return EXPERTISES.map(exp => {
    if (exp.isCTA) {
      return {
        ...exp,
        title: t('expertises.data.cta.title'),
        description: t('expertises.data.cta.description')
      }
    }
    const count = detailsCount[exp.id] || 0
    const details: string[] = []
    for (let i = 1; i <= count; i++) {
      details.push(t(`expertises.data.${exp.id}.detail${i}`))
    }
    return {
      ...exp,
      title: t(`expertises.data.${exp.id}.title`),
      description: t(`expertises.data.${exp.id}.description`),
      details
    }
  })
})

const cardColors = ['bg-[#D1E5FF]', 'bg-[#F5D8D0]', 'bg-[#D8D0F5]', 'bg-[#E2F99E]']
const offsets = [
  { x: '-2%', rotate: '-1deg' },
  { x: '2%', rotate: '1deg' },
  { x: '-1.5%', rotate: '-0.5deg' },
  { x: '2.5%', rotate: '1.5deg' },
  { x: '-3%', rotate: '-1.5deg' },
  { x: '1.5%', rotate: '1deg' }
]

// Verrouillage du scroll horizontal
onMounted(() => {
  const originalOverflowX = document.body.style.overflowX
  document.body.style.overflowX = 'hidden'

  onUnmounted(() => {
    document.body.style.overflowX = originalOverflowX
  })
})

// Détection de visibilité pour la carte CTA
onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      ctaActive.value = entry.isIntersecting
    },
    {
      threshold: 0.2,
      rootMargin: '-10% 0px -10% 0px'
    }
  )

  if (ctaRef.value) {
    observer.observe(ctaRef.value)
  }

  onUnmounted(() => observer.disconnect())
})

// LERP Scroll Animation
const handleScroll = () => {
  scrollYRef.value = window.scrollY
  scrollY.value = window.scrollY
}

const animate = () => {
  const prev = lerpScroll.value
  const target = scrollYRef.value
  const next = prev + (target - prev) * 0.05

  lerpScroll.value = Math.abs(next - target) < 0.1 ? target : next

  const windowHeight = window.innerHeight
  const totalHeight = document.documentElement.scrollHeight - windowHeight
  const current = scrollYRef.value

  if (current >= totalHeight - 10 && !isResettingRef.value) {
    isResettingRef.value = true
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
    scrollYRef.value = 0
    lerpScroll.value = 0
    scrollY.value = 0
    setTimeout(() => {
      isResettingRef.value = false
    }, 50)
  }

  requestId = requestAnimationFrame(animate)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  requestId = requestAnimationFrame(animate)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (requestId) cancelAnimationFrame(requestId)
})

const getCardStyle = (idx: number) => {
  const config = offsets[idx % offsets.length]
  const lag = (lerpScroll.value - scrollYRef.value) * (0.01 + idx * 0.005)
  return {
    zIndex: 100 + idx,
    transform: `translateX(${config.x}) rotate(${config.rotate}) translateY(${lag}px)`
  }
}

const getCardColor = (exp: any, idx: number) => {
  return exp.isCTA ? exp.color : cardColors[idx % cardColors.length]
}

const getTextColor = (exp: any) => {
  return exp.isCTA ? exp.textColor : 'text-slate-900'
}

const iconComponents: Record<string, any> = {
  Terminal,
  ShoppingBag,
  Zap,
  Layout,
  Cpu
}
</script>

<template>
  <div class="relative -mt-32 min-h-screen bg-white">
    <!-- HEADER FIXE - Arrière-plan permanent -->
    <div class="fixed inset-0 h-screen w-full flex flex-col justify-center items-center text-center px-6 z-0 pointer-events-none bg-white">
      <div class="bg-grid absolute inset-0 -z-10 opacity-30"></div>

      <!-- Effet Neon Gradient Background -->
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7B61FF]/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF6D4D]/5 rounded-full blur-[120px] -z-10 animate-pulse delay-700"></div>

      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6D4D]/10 text-[#FF6D4D] font-black text-[10px] uppercase tracking-[0.2em] mb-6 md:mb-8 animate-reveal-up">
        <Zap class="w-3 h-3 fill-current" /> {{ t('expertises.badge') }}
      </div>
      <h1 class="text-5xl sm:text-7xl md:text-8xl lg:text-[150px] font-black text-slate-900 mb-6 md:mb-8 tracking-tighter leading-[0.8] uppercase animate-reveal-up [animation-delay:200ms]">
        {{ t('expertises.title') }} <br /> <span class="text-[#7B61FF]">{{ t('expertises.titleHighlight') }}</span>
      </h1>
      <p class="text-base sm:text-lg md:text-2xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed px-4 animate-reveal-up [animation-delay:400ms]">
        {{ t('expertises.description') }}
      </p>

      <!-- Scroll Indicator -->
      <div
        :class="[
          'absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-500',
          scrollY > 100 ? 'opacity-0' : 'opacity-100'
        ]"
      >
        <span class="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">{{ t('expertises.scroll') }}</span>
        <div class="w-[1px] h-12 bg-gradient-to-b from-slate-200 to-transparent relative overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-full bg-[#FF6D4D] animate-[scroll-line_2s_ease-in-out_infinite]"></div>
        </div>
        <ChevronDown class="w-4 h-4 text-[#FF6D4D] animate-bounce mt-1" />
      </div>
    </div>

    <!-- ZONE DE SCROLL DES CARTES -->
    <div
      class="relative z-10 w-full"
      :style="{ height: `${(allCards.length + 2) * 100}vh` }"
    >
      <div class="max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6">
        <div class="relative pt-[100vh] flex flex-col items-center">
          <div
            v-for="(exp, idx) in allCards"
            :key="exp.id"
            :ref="(el) => { if (exp.isCTA) ctaRef = el as HTMLDivElement }"
            :class="[
              'sticky top-[calc(50vh-175px)] md:top-[calc(50vh-210px)] w-full h-[350px] md:h-[420px] rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-14 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.25)] border border-black/5 transition-transform duration-150 ease-out hover:scale-[1.01] group overflow-hidden mb-[100vh]',
              getCardColor(exp, idx),
              getTextColor(exp)
            ]"
            :style="getCardStyle(idx)"
          >
            <!-- CTA Card -->
            <template v-if="exp.isCTA">
              <div class="relative h-full flex flex-col justify-center">
                <div class="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[100px]"></div>
                <div
                  :class="[
                    'relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center transition-all duration-700 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]',
                    ctaActive ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'
                  ]"
                >
                  <div>
                    <h2
                      :class="[
                        'text-4xl md:text-6xl font-black mb-4 md:mb-6 tracking-tighter uppercase leading-[0.85] transition-all duration-700 delay-100 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]',
                        ctaActive ? 'scale-100 opacity-100 translate-y-0' : 'scale-75 opacity-0 translate-y-4'
                      ]"
                    >
                      {{ t('expertises.ctaTitle') }} <br /><span class="text-[#E2F99E]">{{ t('expertises.ctaTitleHighlight') }}</span>
                    </h2>
                    <p
                      :class="[
                        'text-sm md:text-base text-white/80 font-medium leading-relaxed max-w-md mb-6 transition-all duration-700 delay-200',
                        ctaActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      ]"
                    >
                      {{ exp.description }}
                    </p>
                    <a
                      href="https://www.linkedin.com/in/adrien-lloret-592213194/"
                      target="_blank"
                      rel="noopener noreferrer"
                      :class="[
                        'inline-flex items-center gap-2 text-white/90 hover:text-white transition-all duration-700 delay-300',
                        ctaActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                      ]"
                    >
                      <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
                        <Linkedin class="w-5 h-5" />
                      </div>
                      <span class="text-xs font-bold uppercase tracking-widest">LinkedIn</span>
                    </a>
                  </div>
                  <div
                    :class="[
                      'flex justify-center lg:justify-end transition-all duration-700 delay-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]',
                      ctaActive ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-12'
                    ]"
                  >
                    <NuxtLink :to="localePath('/contact')" class="group relative inline-flex items-center gap-4 px-8 py-5 bg-white text-black rounded-[2rem] font-black text-xl hover:scale-105 transition-all shadow-xl">
                      {{ t('expertises.ctaButton') }} <MousePointer2 class="w-6 h-6 group-hover:rotate-12 transition-transform" />
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </template>

            <!-- Regular Card -->
            <template v-else>
              <div class="flex flex-col md:flex-row gap-8 md:gap-10 items-start h-full">
                <div class="w-14 h-14 md:w-20 md:h-20 shrink-0 bg-white text-black rounded-[1.2rem] md:rounded-[2rem] flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500">
                  <component :is="iconComponents[exp.icon]" class="w-7 h-7 md:w-10 md:h-10" />
                </div>

                <div class="flex-grow">
                  <h3 class="text-2xl md:text-5xl font-black mb-4 tracking-tighter uppercase leading-none">{{ exp.title }}</h3>
                  <p class="text-sm md:text-lg mb-6 md:mb-8 max-w-lg font-medium leading-relaxed opacity-80 line-clamp-3 md:line-clamp-none">
                    {{ exp.description }}
                  </p>

                  <div class="flex flex-wrap gap-2 md:gap-2.5">
                    <div
                      v-for="(detail, i) in exp.details"
                      :key="i"
                      class="flex items-center gap-2 py-1.5 px-3 md:py-2 md:px-4 rounded-full border transition-all bg-white/50 border-black/5 text-slate-700"
                    >
                      <div class="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-[#FF6D4D]"></div>
                      <span class="font-bold text-[8px] md:text-[10px] uppercase tracking-widest">{{ detail }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>