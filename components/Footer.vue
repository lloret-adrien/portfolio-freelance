<script setup lang="ts">
import { Linkedin, Github, Mail } from 'lucide-vue-next'
</script>

<template>
  <footer class="bg-white border-t border-gray-100 py-24 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
        <div class="md:col-span-5">
          <div class="bg-[#FF6D4D] text-white inline-block px-4 py-1.5 rounded-xl font-black text-xl tracking-tight mb-8">
            Adrien Lloret
          </div>
          <h3 class="text-3xl font-black text-slate-900 mb-6 tracking-tight max-w-sm">
            Construisons votre projet <span class="text-[#FF6D4D]">ensemble</span>.
          </h3>
          <p class="text-gray-500 max-w-sm text-lg font-medium leading-relaxed mb-8">
            Je conçois, code et optimise votre projet avec précision et passion, pour un impact réel.
          </p>
          <div class="flex gap-4">
            <a
              href="https://www.linkedin.com/in/adrien-lloret-592213194/"
              target="_blank"
              class="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-slate-900 hover:bg-[#0077B5] hover:text-white transition-all shadow-sm"
            >
              <Linkedin class="w-5 h-5" />
            </a>
            <a
              href="https://github.com/lloret-adrien"
              target="_blank"
              class="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-slate-900 hover:bg-black hover:text-white transition-all shadow-sm"
            >
              <Github class="w-5 h-5" />
            </a>
            <a
              href="mailto:lloret.ad@gmail.com"
              class="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-slate-900 hover:bg-[#FF6D4D] hover:text-white transition-all shadow-sm"
            >
              <Mail class="w-5 h-5" />
            </a>
          </div>
        </div>

        <div class="md:col-span-3 md:col-start-7">
          <h4 class="font-black text-slate-900 mb-8 uppercase tracking-widest text-[10px]">Navigation</h4>
          <ul class="flex flex-col space-y-1 text-gray-500 font-bold text-base">
            <li>
              <NuxtLink to="/" class="inline-block py-2.5 px-4 -ml-4 rounded-xl hover:bg-black/5 hover:text-[#FF6D4D] transition-all">
                Accueil
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/expertises" class="inline-block py-2.5 px-4 -ml-4 rounded-xl hover:bg-black/5 hover:text-[#FF6D4D] transition-all">
                Expertises
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/parcours" class="inline-block py-2.5 px-4 -ml-4 rounded-xl hover:bg-black/5 hover:text-[#FF6D4D] transition-all">
                Parcours
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div class="md:col-span-3">
          <h4 class="font-black text-slate-900 mb-8 uppercase tracking-widest text-[10px]">Contact Rapide</h4>
          <p class="text-sm text-gray-400 font-medium leading-relaxed">
            Basé en Europe, disponible pour des missions à l'international (Freelance, VIE).
            Réponse sous 24h garantie.
          </p>
        </div>
      </div>

      <div class="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="text-xs font-bold text-gray-400">
          © {{ new Date().getFullYear() }} Adrien Lloret. Fait avec passion et beaucoup de café.
        </div>
        <div class="flex gap-8 text-xs font-black uppercase tracking-widest text-slate-400">
          <NuxtLink to="/contact" class="py-2.5 px-5 -my-2.5 rounded-xl text-[#FF6D4D] hover:bg-[#FF6D4D]/10 transition-all">
            Démarrer un projet
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>