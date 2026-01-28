import { ref, onMounted, onUnmounted } from 'vue'

export function useLerpScroll(lerpFactor = 0.05) {
  const lerpScroll = ref(0)
  const scrollY = ref(0)
  const scrollYRef = ref(0)
  let requestId: number | null = null
  let isResetting = false

  const handleScroll = () => {
    scrollYRef.value = window.scrollY
    scrollY.value = window.scrollY
  }

  const animate = () => {
    const prev = lerpScroll.value
    const target = scrollYRef.value
    const next = prev + (target - prev) * lerpFactor

    lerpScroll.value = Math.abs(next - target) < 0.1 ? target : next

    // Infinite scroll reset logic
    const windowHeight = window.innerHeight
    const totalHeight = document.documentElement.scrollHeight - windowHeight
    const current = scrollYRef.value

    if (current >= totalHeight - 10 && !isResetting) {
      isResetting = true
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
      scrollYRef.value = 0
      lerpScroll.value = 0
      scrollY.value = 0
      setTimeout(() => {
        isResetting = false
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

  return { lerpScroll, scrollY, scrollYRef }
}