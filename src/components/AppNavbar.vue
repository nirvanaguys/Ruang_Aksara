<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import BaseButton from './BaseButton.vue'

const route = useRoute()
const emit = defineEmits(['openCommandPalette'])

const navLinks = [
  { name: 'Beranda', path: '/' },
  { name: 'Jelajah', path: '/jelajah' },
  { name: 'Diskusi', path: '/diskusi' },
  { name: 'Komunitas', path: '/komunitas' }
]

const isActive = (path) => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-40 bg-glass-strong backdrop-blur-xl border-b border-border-subtle shadow-[0_1px_8px_rgba(26,51,49,0.04)] transition-all">
    <div class="h-16 max-w-[1140px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
      <!-- Brand Logo -->
      <div class="flex items-center gap-6">
        <router-link to="/" class="flex items-center gap-2.5 group">
          <div class="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
            <span class="material-symbols-outlined text-[18px]">menu_book</span>
          </div>
          <span class="font-headline-sm text-lg font-bold text-primary tracking-tight group-hover:text-primary-dark transition-colors">
            RuangAksara
          </span>
        </router-link>

        <!-- Desktop Navigation Links -->
        <nav class="hidden lg:flex items-center gap-1">
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="px-4 py-1.5 rounded-full font-label-md text-sm font-semibold transition-all duration-150"
            :class="isActive(link.path)
              ? 'bg-primary text-on-primary shadow-sm'
              : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/70'"
          >
            {{ link.name }}
          </router-link>
        </nav>
      </div>

      <!-- Action items & Command Palette trigger -->
      <div class="flex items-center gap-3">
        <!-- Search Trigger / Command Palette Button -->
        <button
          @click="emit('openCommandPalette')"
          type="button"
          class="hidden sm:flex items-center justify-between gap-4 px-3.5 py-1.5 rounded-full bg-surface border border-border-subtle shadow-[0_2px_8px_rgba(26,51,49,0.04)] hover:bg-surface-variant/80 hover:text-on-surface transition-all text-on-surface-variant cursor-pointer text-xs"
        >
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-[16px]">search</span>
            <span>Cari buku atau menu...</span>
          </div>
          <kbd class="px-1.5 py-0.5 rounded bg-surface-variant text-on-surface font-code-kbd text-[10px] font-bold">⌘ K</kbd>
        </button>

        <!-- Mobile search button -->
        <button
          @click="emit('openCommandPalette')"
          type="button"
          class="sm:hidden w-9 h-9 rounded-full bg-surface border border-border-subtle flex items-center justify-center text-on-surface-variant hover:text-primary"
        >
          <span class="material-symbols-outlined text-[18px]">search</span>
        </button>

        <!-- Gabung CTA -->
        <BaseButton to="/masuk" size="sm" class="hidden sm:inline-flex">
          Gabung
        </BaseButton>

        <!-- Profile Avatar Link -->
        <router-link
          to="/profil"
          class="w-8 h-8 rounded-full overflow-hidden border border-primary/20 hover:ring-2 hover:ring-primary/40 transition-all flex items-center justify-center bg-primary-light"
          title="Profil Saya"
        >
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
            alt="Profil Farah"
            class="w-full h-full object-cover"
          />
        </router-link>
      </div>
    </div>
  </header>
</template>
