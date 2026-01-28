import { ref, onMounted, onUnmounted } from 'vue'

export function useWordCycle(words: string[]) {
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

    wordIndex.value = (wordIndex.value + 1) % words.length
    runSequence()
  }

  onMounted(() => {
    isMounted = true
    runSequence()
  })

  onUnmounted(() => {
    isMounted = false
  })

  return {
    wordIndex,
    isBorderActive,
    isTextActive,
    currentWord: computed(() => words[wordIndex.value])
  }
}