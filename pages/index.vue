<script setup lang="ts">
import {
  ArrowRight,
  Sparkles,
  Plus,
  Database,
  Globe,
  GitBranch,
  Mail,
  Linkedin,
  Github,
  ArrowUpRight
} from 'lucide-vue-next'
import { EXPERTISES, PROJECTS } from '~/utils/data'

const { t } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const canonicalUrl = computed(() => `https://adrien-lloret.com${route.path}`)

useSeoMeta({
  title: () => t('seo.home.title'),
  description: () => t('seo.home.description'),
  ogTitle: () => t('seo.home.ogTitle'),
  ogDescription: () => t('seo.home.ogDescription'),
  ogUrl: canonicalUrl,
  ogImage: 'https://adrien-lloret.com/images/portfolio.png',
  twitterTitle: () => t('seo.home.ogTitle'),
  twitterDescription: () => t('seo.home.ogDescription'),
  twitterImage: 'https://adrien-lloret.com/images/portfolio.png'
})

useHead({
  link: [
    { rel: 'canonical', href: canonicalUrl }
  ]
})

const words = computed(() => [
  t('home.hero.word1'),
  t('home.hero.word2'),
  t('home.hero.word3')
])
const wordIndex = ref(0)
const isBorderActive = ref(false)
const isTextActive = ref(false)

let isMounted = true

const runSequence = async () => {
  if (!isMounted) return

  isTextActive.value = true
  await new Promise(r => setTimeout(r, 250))

  if (!isMounted) return

  isBorderActive.value = true
  await new Promise(r => setTimeout(r, 3500))

  if (!isMounted) return

  isBorderActive.value = false
  await new Promise(r => setTimeout(r, 250))

  if (!isMounted) return

  isTextActive.value = false
  await new Promise(r => setTimeout(r, 400))

  if (!isMounted) return

  wordIndex.value = (wordIndex.value + 1) % words.value.length
  runSequence()
}

onMounted(() => {
  isMounted = true
  runSequence()
})

onUnmounted(() => {
  isMounted = false
})

const currentWord = computed(() => words.value[wordIndex.value])

const softSkills = computed(() => [
  t('home.skills.soft1'),
  t('home.skills.soft2'),
  t('home.skills.soft3'),
  t('home.skills.soft4')
])

const methodSteps = computed(() => [
  { step: t('home.method.step1.step'), title: t('home.method.step1.title'), desc: t('home.method.step1.desc'), color: 'bg-[#D1E5FF]' },
  { step: t('home.method.step2.step'), title: t('home.method.step2.title'), desc: t('home.method.step2.desc'), color: 'bg-[#E2F99E]' },
  { step: t('home.method.step3.step'), title: t('home.method.step3.title'), desc: t('home.method.step3.desc'), color: 'bg-[#D8D0F5]' },
  { step: t('home.method.step4.step'), title: t('home.method.step4.title'), desc: t('home.method.step4.desc'), color: 'bg-[#F5D8D0]' }
])
</script>

<template>
  <div class="pb-24 overflow-x-hidden -mt-32">
    <!-- SECTION 1: HERO -->
    <section class="relative px-6 py-20 lg:py-32 bg-grid min-h-screen flex items-center">
      <div class="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="text-left order-2 lg:order-1 relative z-20">
          <h1 class="text-5xl md:text-6xl lg:text-[80px] font-black text-slate-900 mb-8 tracking-tighter leading-[0.9] uppercase animate-reveal-up [animation-delay:0.2s]">
            {{ t('home.hero.title') }} <br />
            <span :class="['scribble-highlight text-[#FF6D4D]', isBorderActive ? 'scribble-active' : '']">
              <span class="text-reveal-container">
                <span :class="['text-reveal-item inline-block', isTextActive ? 'text-reveal-active' : '']">
                  {{ currentWord }}
                </span>
              </span>
            </span>
          </h1>

          <p class="text-lg lg:text-xl text-slate-500 max-w-xl mb-12 font-medium leading-relaxed animate-reveal-up [animation-delay:0.4s]">
            {{ t('home.hero.description') }} <span class="text-black font-bold">{{ t('home.hero.descriptionBold') }}</span>
          </p>

          <div class="flex flex-wrap gap-6 animate-reveal-up [animation-delay:0.6s] justify-center sm:justify-start">
            <NuxtLink
              :to="localePath('/contact')"
              class="group relative inline-flex items-center gap-6 px-10 py-5 bg-[#1A1A1A] text-white rounded-2xl font-black text-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-[#FF6D4D]/20 hover:shadow-[#FF6D4D]/50"
            >
              {{ t('home.hero.cta') }}
              <div class="bg-[#FF6D4D] p-2.5 rounded-full group-hover:rotate-45 transition-transform duration-500">
                <ArrowUpRight class="w-6 h-6" />
              </div>
              <div class="absolute -top-3 -right-3 bg-[#E2F99E] text-black text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-tighter shadow-lg -rotate-6 group-hover:rotate-0 transition-transform">
                {{ t('home.hero.ctaBadge') }}
              </div>
            </NuxtLink>
            <a href="#projets" class="px-10 py-5 bg-white border-2 border-slate-100 text-slate-900 rounded-2xl font-black text-lg hover:border-[#FF6D4D] transition-all flex items-center gap-3">
              {{ t('home.hero.viewProjects') }}
            </a>
          </div>
        </div>

        <div class="order-1 lg:order-2 flex justify-center lg:justify-center mt-12 lg:mt-0 animate-pop-in [animation-delay:0.8s]">
          <div class="relative">
            <!-- Conteneur de l'image -->
            <div class="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-[3.5rem] md:rounded-[4.5rem] bg-[#FF6D4D] rotate-3 shadow-2xl overflow-hidden group">
              <NuxtImg
                src="/images/linkedin.png"
                alt="Adrien Lloret - Développeur Web Fullstack Freelance à Montpellier"
                width="320"
                height="320"
                loading="eager"
                class="w-full h-full scale-110 object-cover group-hover:scale-125 transition-transform duration-700"
              />
            </div>

            <!-- Badges Flottants -->
            <div class="absolute -top-20 -right-20 bg-white p-3 rounded-2xl shadow-2xl animate-float z-20 hidden sm:block border border-gray-50/50">
              <svg viewBox="0 0 128 128" class="w-6 h-6 md:w-8 md:h-8">
                <path fill="#41B883" d="M78.8,0L64,25.3L49.2,0H0l64,110.5L128,0H78.8z"></path>
                <path fill="#35495E" d="M78.8,0L64,25.3L49.2,0H25.6L64,66.3L102.4,0H78.8z"></path>
              </svg>
            </div>
            <div class="absolute top-20 -left-32 bg-[#1a1a1a] p-3 rounded-2xl shadow-2xl animate-float [animation-delay:0.5s] z-20 hidden sm:block border border-gray-800/50">
              <svg viewBox="0 0 24 24" class="w-6 h-6 md:w-8 md:h-8">
                <path d="M21.361 12.119c-.31.342-1.303.515-2.203.515H11.5c-.276 0-.5.224-.5.5v7.247c0 .9.73 1.63 1.63 1.63.29 0 .57-.08.82-.23l8.47-5.08a2.5 2.5 0 0 0 1.21-2.14v-.22c0-.79-.47-1.51-1.19-1.85a.73.73 0 0 0-.58-.372zM2.639 11.881c.31-.342 1.303-.515 2.203-.515H12.5c.276 0 .5-.224.5-.5V3.619c0-.9-.73-1.63-1.63-1.63-.29 0-.57.08-.82.23l-8.47 5.08a2.5 2.5 0 0 0-1.21 2.14v.22c0 .79.47 1.51 1.19 1.85.19.09.39.14.58.14.22-.001.43-.071.58-.231z" fill="#3ECF8E"/>
              </svg>
            </div>
            <div class="absolute -bottom-24 -right-10 bg-white p-3 rounded-2xl shadow-2xl animate-float [animation-delay:1s] z-20 hidden sm:block border border-gray-50/50">
              <svg viewBox="0 0 24 24" class="w-6 h-6 md:w-8 md:h-8">
                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" fill="#06B6D4"/>
              </svg>
            </div>

            <!-- Badge de bienvenue -->
            <div class="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white px-8 py-3.5 rounded-full shadow-2xl border border-gray-100 text-[12px] font-black tracking-[0.2em] uppercase z-30 whitespace-nowrap">
              {{ t('home.hero.welcome') }} <span class="text-[#FF6D4D]">{{ t('home.hero.name') }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2: EXPERTISE - Marquee -->
    <section class="py-20 bg-white border-y border-gray-100 overflow-hidden">
      <div class="animate-marquee whitespace-nowrap flex gap-16 items-center">
        <template v-for="(exp, i) in [...EXPERTISES, ...EXPERTISES]" :key="i">
          <div class="flex items-center gap-8">
            <span class="text-5xl lg:text-8xl font-black text-slate-100 uppercase tracking-tighter">{{ exp.title }}</span>
            <div class="w-4 h-4 rounded-full bg-[#FF6D4D]"></div>
          </div>
        </template>
      </div>
    </section>

    <!-- SECTION 3: PROJETS -->
    <section id="projets" class="px-6 py-32 bg-[#FAFAFA]">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <h2 class="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter uppercase leading-none">
            {{ t('home.projects.title') }} <br /><span class="text-[#FF6D4D]">{{ t('home.projects.titleHighlight') }}</span>
          </h2>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard v-for="project in PROJECTS" :key="project.id" :project="project" />

          <div class="bg-[#FF6D4D]/5 rounded-[2.5rem] p-10 flex flex-col items-center justify-center text-center group border-2 border-dashed border-[#FF6D4D]/30 shadow-sm hover:shadow-xl hover:border-[#FF6D4D] hover:bg-[#FF6D4D]/10 transition-all duration-500 relative overflow-hidden h-full min-h-[400px]">
            <div class="absolute -top-10 -right-10 w-48 h-48 bg-[#FF6D4D]/5 rounded-full blur-[60px] group-hover:scale-150 transition-transform duration-700"></div>
            <div class="w-20 h-20 bg-[#FF6D4D] rounded-full flex items-center justify-center text-white mb-8 group-hover:rotate-90 group-hover:scale-110 transition-all duration-500 shadow-lg shadow-[#FF6D4D]/20">
              <Plus class="w-10 h-10" />
            </div>
            <h3 class="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tighter">{{ t('home.projects.yourProject') }}</h3>
            <p class="text-slate-500 font-medium mb-10 max-w-[200px]">
              {{ t('home.projects.buildTogether') }}
            </p>
            <NuxtLink :to="localePath('/contact')" class="px-10 py-4 bg-[#1A1A1A] text-white rounded-full font-black text-lg hover:scale-105 hover:bg-black transition-all shadow-xl">
              {{ t('home.projects.contactMe') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 4: MÉTHODOLOGIE -->
    <section class="px-6 py-32 bg-white">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-24">
          <h2 class="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter uppercase">{{ t('home.method.title') }} <span class="text-[#FF6D4D]">{{ t('home.method.titleHighlight') }}</span></h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          <div v-for="(s, idx) in methodSteps" :key="idx" class="flex gap-8 group">
            <div :class="[s.color, 'w-16 h-16 rounded-2xl flex items-center justify-center font-black text-xl shrink-0 group-hover:rotate-6 transition-transform shadow-lg']">
              {{ s.step }}
            </div>
            <div>
              <h3 class="text-2xl font-black mb-2 uppercase tracking-tight">{{ s.title }}</h3>
              <p class="text-slate-500 font-medium leading-relaxed">{{ s.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 5: SAVOIR-FAIRE -->
    <section class="px-6 py-32 bg-[#FAFAFA]">
      <div class="max-w-7xl mx-auto">
        <div class="mb-16">
          <span class="text-[#FF6D4D] text-xs font-black uppercase tracking-[0.2em] mb-4 block">{{ t('home.skills.label') }}</span>
          <div class="flex items-center gap-6">
            <h2 class="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-none">
              {{ t('home.skills.title') }}
            </h2>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-20">
          <div class="lg:col-span-7">
            <div class="flex items-center gap-3 mb-10">
              <div class="w-2 h-2 rounded-full bg-[#FF6D4D]"></div>
              <h3 class="text-2xl font-black text-slate-900 tracking-tight">{{ t('home.skills.technical') }}</h3>
            </div>

            <div class="flex flex-wrap gap-4">
              <a
                v-for="(skill, i) in [
                  { name: 'JavaScript', url: 'https://developer.mozilla.org/fr/docs/Web/JavaScript', iconClass: 'w-5 h-5 bg-[#F7DF1E] rounded flex items-center justify-center text-[10px] font-black text-black', iconText: 'JS' },
                  { name: 'VueJS', url: 'https://vuejs.org/', iconClass: 'w-5 h-5 bg-[#4FC08D] rounded-full flex items-center justify-center text-[8px] font-black text-white', iconText: 'V' },
                  { name: 'PostgreSQL', url: 'https://www.postgresql.org/', iconType: 'database' },
                  { name: 'Nuxt', url: 'https://nuxt.com/', iconClass: 'w-5 h-5 bg-[#00DC82] text-white rounded-full flex items-center justify-center text-[8px] font-black', iconText: 'N' },
                  { name: 'Tailwind', url: 'https://tailwindcss.com/', iconType: 'tailwind' },
                  { name: 'HTML5', url: 'https://developer.mozilla.org/fr/docs/Web/HTML', iconClass: 'text-xs font-black text-[#E34F26]', iconText: 'H5' },
                  { name: 'CSS', url: 'https://developer.mozilla.org/fr/docs/Web/CSS', iconClass: 'text-xs font-black text-[#1572B6]', iconText: 'C3' },
                  { name: 'TypeScript', url: 'https://www.typescriptlang.org/', iconClass: 'w-5 h-5 bg-[#3178C6] text-white rounded flex items-center justify-center text-[10px] font-black', iconText: 'TS' },
                  { name: 'Node.js', url: 'https://nodejs.org/', iconClass: 'w-5 h-5 bg-[#339933] text-white rounded-full flex items-center justify-center text-[8px] font-black', iconText: 'N' },
                  { name: 'Git', url: 'https://git-scm.com/', iconType: 'git' }
                ]"
                :key="i"
                :href="skill.url"
                target="_blank"
                rel="noopener noreferrer"
                class="bg-white px-5 py-3.5 rounded-2xl border border-gray-100 flex items-center gap-4 shadow-sm hover:shadow-md hover:border-[#FF6D4D]/30 transition-all group/skill"
              >
                <Database v-if="skill.iconType === 'database'" class="w-5 h-5 text-[#336791]" />
                <svg v-else-if="skill.iconType === 'tailwind'" viewBox="0 0 24 24" class="w-5 h-5">
                  <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" fill="#06B6D4"/>
                </svg>
                <GitBranch v-else-if="skill.iconType === 'git'" class="w-5 h-5 text-[#F05032]" />
                <div v-else :class="skill.iconClass">{{ skill.iconText }}</div>
                <span class="text-base font-bold text-slate-700 group-hover/skill:text-[#FF6D4D]">{{ skill.name }}</span>
              </a>
            </div>
          </div>

          <div class="lg:col-span-5">
            <div class="flex items-center gap-3 mb-6 sm:mb-10">
              <div class="w-2 h-2 rounded-full bg-[#FF6D4D]"></div>
              <h3 class="text-2xl font-black text-slate-900 tracking-tight">{{ t('home.skills.softSkills') }}</h3>
            </div>

            <div class="flex flex-wrap gap-2 sm:gap-4">
              <div
                v-for="(soft, i) in softSkills"
                :key="i"
                class="bg-[#FFF5F2] px-4 py-3 sm:px-8 sm:py-5 rounded-2xl sm:rounded-3xl border border-[#FFD7CE] text-[#FF6D4D] font-bold text-sm sm:text-lg hover:bg-[#FFD7CE] transition-colors"
              >
                {{ soft }}
              </div>
            </div>
          </div>
        </div>

        <div class="flex justify-center sm:justify-start">
          <NuxtLink
            :to="localePath('/expertises')"
            class="inline-flex items-center gap-4 px-10 py-6 bg-white border-2 border-slate-100 text-slate-900 rounded-[2rem] font-black text-xl hover:border-[#FF6D4D] hover:text-[#FF6D4D] transition-all group shadow-sm hover:shadow-xl"
          >
            {{ t('home.skills.viewExpertises') }}
            <div class="bg-[#FF6D4D]/10 p-2 rounded-full group-hover:bg-[#FF6D4D] group-hover:text-white transition-colors">
              <ArrowRight class="w-5 h-5" />
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="px-6 py-32">
      <div class="max-w-7xl mx-auto bg-[#D1E5FF] p-4 sm:p-8 md:p-12 rounded-[4rem] relative overflow-hidden shadow-2xl">
        <div class="bg-white p-6 sm:p-10 md:p-12 lg:p-20 rounded-[3rem] shadow-2xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span class="bg-[#E2F99E] text-green-900 px-4 py-1 rounded-full text-xs font-black uppercase mb-6 inline-block tracking-widest">{{ t('home.cta.badge') }}</span>
            <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.1] uppercase">
              {{ t('home.cta.title') }} <span class="scribble-highlight">{{ t('home.cta.titleHighlight') }}</span> <span class="text-yellow-400 font-normal">+</span>
            </h2>
            <p class="text-lg sm:text-xl text-slate-500 font-medium mb-12 leading-relaxed">
              {{ t('home.cta.description') }}
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

          <div class="w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>