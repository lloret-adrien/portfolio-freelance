<script setup lang="ts">
import { Menu, X, ArrowUpRight } from 'lucide-vue-next'

const isOpen = ref(false)
const route = useRoute()

const navLinks = [
  { name: 'Expertises', path: '/expertises' },
  { name: 'Parcours', path: '/parcours' },
  { name: 'Contact', path: '/contact' }
]

const isActive = (path: string) => route.path === path

// Close mobile menu on route change
watch(() => route.path, () => {
  isOpen.value = false
})
</script>

<template>
  <div class="fixed top-6 left-0 right-0 z-50 px-6">
    <nav class="max-w-5xl mx-auto glass border border-gray-100/50 rounded-2xl shadow-xl shadow-black/5 px-4 md:px-6 h-16 flex items-center justify-between">
      <NuxtLink
        to="/"
        class="bg-[#FF6D4D] text-white px-4 py-1.5 rounded-xl font-black text-lg sm:text-xl tracking-tight shadow-lg shadow-[#FF6D4D]/20 whitespace-nowrap hover:scale-105 transition-transform"
      >
        Adrien Lloret
      </NuxtLink>

      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center space-x-2">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          :class="[
            'px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center h-10 hover:bg-black/5',
            isActive(link.path) ? 'text-[#FF6D4D]' : 'text-gray-500 hover:text-slate-900'
          ]"
        >
          {{ link.name }}
        </NuxtLink>
      </div>

      <div class="flex items-center space-x-2 md:space-x-4">
        <LanguageToggle />

        <button class="md:hidden p-2 text-gray-600" @click="isOpen = !isOpen">
          <X v-if="isOpen" class="w-6 h-6" />
          <Menu v-else class="w-6 h-6" />
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="isOpen"
        class="md:hidden glass mt-2 p-6 flex flex-col space-y-4 rounded-3xl border border-gray-100 shadow-2xl"
      >
        <NuxtLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="text-lg font-bold py-2 border-b border-gray-50 last:border-0"
        >
          {{ link.name }}
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="bg-[#E2F99E] text-black text-center py-4 rounded-2xl font-black flex items-center justify-center gap-2"
        >
          Contactez-moi <ArrowUpRight class="w-5 h-5" />
        </NuxtLink>
      </div>
    </Transition>
  </div>
</template>