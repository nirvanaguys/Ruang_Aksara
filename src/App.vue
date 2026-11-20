<script setup>
import { ref } from 'vue'
import AppNavbar from '@/components/AppNavbar.vue'
import AppBottomNav from '@/components/AppBottomNav.vue'
import AppFooter from '@/components/AppFooter.vue'
import CommandPalette from '@/components/CommandPalette.vue'

const commandPaletteRef = ref(null)

const openCommandPalette = () => {
  if (commandPaletteRef.value) {
    commandPaletteRef.value.open()
  }
}
</script>

<template>
  <div class="min-h-screen flex flex-col bg-background text-on-surface antialiased selection:bg-primary-light selection:text-primary-dark">
    <!-- Top Glass Navbar -->
    <AppNavbar @openCommandPalette="openCommandPalette" />

    <!-- Main View Content Area -->
    <main class="flex-1 pt-16">
      <router-view />
    </main>

    <!-- Global Literary Footer -->
    <AppFooter />

    <!-- Mobile Fixed Bottom Navigation -->
    <AppBottomNav />

    <!-- Global Command Palette Modal (Cmd+K / Ctrl+K) -->
    <CommandPalette ref="commandPaletteRef" />
  </div>
</template>
