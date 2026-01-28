<script setup lang="ts">
const route = useRoute()
const isExpertisePage = computed(() => route.path.includes('expertises'))
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-grow pt-32">
      <slot />
    </main>
    <Footer v-if="!isExpertisePage" />
  </div>
</template>