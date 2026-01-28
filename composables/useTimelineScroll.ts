import { ref, onMounted, onUnmounted, type Ref } from 'vue'

export function useTimelineScroll(containerRef: Ref<HTMLElement | null>) {
  const lineHeight = ref(0)
  const isButtonActive = ref(false)
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
      const rect = containerRef.value.getBoundingClientRect()
      const relativeY = triggerPoint - rect.top
      const clampedHeight = Math.max(0, Math.min(rect.height, relativeY))

      lineHeight.value = clampedHeight

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

  return { lineHeight, isButtonActive }
}