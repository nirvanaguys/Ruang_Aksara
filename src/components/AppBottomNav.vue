<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const tabs = [
  { name: 'Beranda', path: '/', icon: 'home' },
  { name: 'Jelajah', path: '/jelajah', icon: 'explore' },
  { name: 'Diskusi', path: '/diskusi', icon: 'forum' },
  { name: 'Komunitas', path: '/komunitas', icon: 'groups' },
  { name: 'Profil', path: '/profil', icon: 'person' }
]

const isActive = (path) => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}
</script>

<template>
  <nav class="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-glass-strong backdrop-blur-xl border-t border-border-subtle shadow-[0_-2px_12px_rgba(26,51,49,0.06)] px-2 py-1">
    <div class="flex items-center justify-around max-w-md mx-auto">
      <router-link
        v-for="tab in tabs"
        :key="tab.path"
        :to="tab.path"
        class="flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-all duration-150 relative min-w-[56px]"
        :class="isActive(tab.path) ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-on-surface'"
      >
        <span
          class="material-symbols-outlined text-[22px] transition-transform"
          :class="isActive(tab.path) ? 'scale-110' : ''"
        >
          {{ tab.icon }}
        </span>
        <span class="text-[10px] mt-0.5 tracking-tight">{{ tab.name }}</span>

        <!-- Active pill indicator -->
        <span
          v-if="isActive(tab.path)"
          class="absolute -top-1 w-6 h-1 rounded-full bg-primary"
        ></span>
      </router-link>
    </div>
  </nav>
</template>
