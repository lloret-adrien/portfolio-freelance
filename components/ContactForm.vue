<script setup lang="ts">
import { ArrowUpRight, Star, CheckCircle } from 'lucide-vue-next'

const isSubmitted = ref(false)
const isSubmitting = ref(false)

const handleSubmit = async (e: Event) => {
  const form = e.target as HTMLFormElement
  const formData = new FormData(form)

  isSubmitting.value = true

  try {
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData as any).toString()
    })
    isSubmitted.value = true
  } catch (error) {
    console.error('Erreur lors de l\'envoi du formulaire:', error)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div class="w-full">
    <!-- Success State -->
    <div v-if="isSubmitted" class="text-center py-12">
      <div class="w-16 h-16 bg-[#E2F99E] rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle class="w-8 h-8 text-green-700" />
      </div>
      <h3 class="text-2xl font-black text-slate-900 mb-3">Message envoyé !</h3>
      <p class="text-slate-500 font-medium">Je vous réponds sous 24h.</p>
    </div>

    <!-- Form -->
    <form
      v-else
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      class="space-y-5 sm:space-y-6"
      @submit.prevent="handleSubmit"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p class="hidden">
        <label>
          Ne pas remplir si vous êtes humain: <input name="bot-field" />
        </label>
      </p>

      <div class="space-y-2">
        <label for="email" class="text-[10px] font-black text-slate-400 uppercase ml-4 tracking-widest">Email professionnel</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="votre@email.com"
          class="w-full px-5 sm:px-8 py-3.5 sm:py-4.5 rounded-xl sm:rounded-[1.5rem] bg-[#FAFAFA] border border-gray-100 focus:outline-none focus:ring-4 focus:ring-[#FF6D4D]/20 font-black text-base sm:text-lg transition-all"
        />
      </div>

      <div class="space-y-2">
        <label for="message" class="text-[10px] font-black text-slate-400 uppercase ml-4 tracking-widest">Votre message</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Décrivez votre besoin en quelques mots..."
          rows="5"
          class="w-full px-5 sm:px-8 py-3.5 sm:py-4.5 rounded-xl sm:rounded-[1.5rem] bg-[#FAFAFA] border border-gray-100 focus:outline-none focus:ring-4 focus:ring-[#FF6D4D]/20 font-black text-base sm:text-lg transition-all resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        :disabled="isSubmitting"
        :class="[
          'w-full bg-[#1A1A1A] text-white py-4 sm:py-5 rounded-full font-black text-base sm:text-lg flex items-center justify-center gap-3 transition-all shadow-xl shadow-black/10 group',
          isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-black hover:scale-[1.01]'
        ]"
      >
        <span v-if="isSubmitting">Envoi en cours...</span>
        <span v-else>Envoyer le message</span>
        <div v-if="!isSubmitting" class="bg-white text-black rounded-full p-1.5 group-hover:translate-x-1 transition-transform">
          <ArrowUpRight class="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      </button>
    </form>

    <!-- Hint -->
    <div v-if="!isSubmitted" class="mt-6 flex items-center justify-center gap-2 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
      <Star class="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
      Réponse garantie sous 24h
    </div>
  </div>
</template>