<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
// Scroll to top on route change
const route = useRoute()

watch(() => route.path, () => {
  window.scrollTo(0, 0)
})
</script>