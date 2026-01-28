import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollTop(threshold = 800) {
  const showScrollTop = ref(false)

  const handleScroll = () => {
    showScrollTop.value = window.scrollY > threshold
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return { showScrollTop, scrollToTop }
}