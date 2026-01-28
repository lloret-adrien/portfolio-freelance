// plugins/02.clarity.client.ts
import Clarity from '@microsoft/clarity'

let clarityInitialized = false

export default defineNuxtPlugin(() => {
  if (clarityInitialized) return
  if (typeof window === 'undefined') return

  const config = useRuntimeConfig()
  const clarityId = config.public.clarityId

  if (!clarityId) {
    console.warn('[Clarity] Missing clarityId')
    return
  }

  Clarity.init(clarityId)
  clarityInitialized = true

  console.log('[Clarity] Initialized once')
})
