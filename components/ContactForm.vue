<script setup lang="ts">
import { ArrowUpRight, Star } from 'lucide-vue-next'

const handleSubmit = (e: Event) => {
  e.preventDefault()
}
</script>

<template>
  <div class="w-full">
    <form class="space-y-5 sm:space-y-6" @submit="handleSubmit">
      <div class="space-y-2">
        <label class="text-[10px] font-black text-slate-400 uppercase ml-4 tracking-widest">Email professionnel</label>
        <input
          type="email"
          placeholder="votre@email.com"
          class="w-full px-5 sm:px-8 py-3.5 sm:py-4.5 rounded-xl sm:rounded-[1.5rem] bg-[#FAFAFA] border border-gray-100 focus:outline-none focus:ring-4 focus:ring-[#FF6D4D]/20 font-black text-base sm:text-lg transition-all"
        />
      </div>

      <div class="space-y-2">
        <label class="text-[10px] font-black text-slate-400 uppercase ml-4 tracking-widest">Votre message</label>
        <textarea
          placeholder="Décrivez votre besoin en quelques mots..."
          rows="5"
          class="w-full px-5 sm:px-8 py-3.5 sm:py-4.5 rounded-xl sm:rounded-[1.5rem] bg-[#FAFAFA] border border-gray-100 focus:outline-none focus:ring-4 focus:ring-[#FF6D4D]/20 font-black text-base sm:text-lg transition-all resize-none"
        ></textarea>
      </div>

      <button class="w-full bg-[#1A1A1A] text-white py-4 sm:py-5 rounded-full font-black text-base sm:text-lg flex items-center justify-center gap-3 hover:bg-black transition-all hover:scale-[1.01] shadow-xl shadow-black/10 group">
        Envoyer le message
        <div class="bg-white text-black rounded-full p-1.5 group-hover:translate-x-1 transition-transform">
          <ArrowUpRight class="w-4 h-4 sm:w-5 sm:h-5" />
        </div>
      </button>
    </form>

    <!-- Hint -->
    <div class="mt-6 flex items-center justify-center gap-2 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
      <Star class="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
      Réponse garantie sous 24h
    </div>
  </div>
</template>