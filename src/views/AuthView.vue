<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import BaseButton from '@/components/BaseButton.vue'

const router = useRouter()
const activeTab = ref('masuk') // 'masuk' | 'daftar'

const email = ref('')
const password = ref('')
const name = ref('')

const isSuccess = ref(false)

const handleSubmit = () => {
  isSuccess.value = true
  setTimeout(() => {
    router.push('/profil')
  }, 1000)
}
</script>

<template>
  <div class="relative min-h-[calc(100vh-10rem)] flex items-center justify-center px-4 py-12">
    <!-- Ambient Blur Orbs -->
    <div class="absolute top-1/4 left-1/3 w-96 h-96 bg-primary-light/40 blur-3xl rounded-full pointer-events-none -z-10"></div>
    <div class="absolute bottom-1/4 right-1/3 w-80 h-80 bg-rose/20 blur-3xl rounded-full pointer-events-none -z-10"></div>

    <!-- Centered Auth Card -->
    <div class="w-full max-w-md bg-surface/90 backdrop-blur-2xl rounded-2xl border border-border-subtle p-6 sm:p-8 shadow-[0_16px_40px_rgba(26,51,49,0.08)]">
      <!-- Header -->
      <div class="text-center mb-6">
        <div class="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center mx-auto mb-3 shadow-md">
          <span class="material-symbols-outlined text-[24px]">menu_book</span>
        </div>
        <h1 class="font-headline-lg text-2xl font-bold text-on-surface">
          RuangAksara
        </h1>
        <p class="text-xs text-on-surface-variant mt-1">
          Perpustakaan di hari hujan. Selamat datang kembali.
        </p>
      </div>

      <!-- Tab Switch: Masuk / Daftar -->
      <div class="grid grid-cols-2 p-1 rounded-xl bg-surface-variant/70 border border-border-subtle mb-6 text-xs font-bold">
        <button
          @click="activeTab = 'masuk'"
          class="py-2 rounded-lg transition-all cursor-pointer"
          :class="activeTab === 'masuk' ? 'bg-surface text-primary shadow-xs' : 'text-on-surface-variant hover:text-on-surface'"
        >
          Masuk Akun
        </button>
        <button
          @click="activeTab = 'daftar'"
          class="py-2 rounded-lg transition-all cursor-pointer"
          :class="activeTab === 'daftar' ? 'bg-surface text-primary shadow-xs' : 'text-on-surface-variant hover:text-on-surface'"
        >
          Daftar Baru
        </button>
      </div>

      <!-- Notification if success -->
      <div v-if="isSuccess" class="p-3 mb-4 rounded-xl bg-primary-light text-primary text-xs font-semibold text-center animate-in fade-in">
        ✓ Berhasil {{ activeTab === 'masuk' ? 'masuk' : 'mendaftar' }}! Mengarahkan ke profil...
      </div>

      <!-- Form Inputs -->
      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div v-if="activeTab === 'daftar'">
          <label class="block text-xs font-bold text-on-surface mb-1">Nama Lengkap</label>
          <input
            v-model="name"
            type="text"
            required
            placeholder="Farah Salsabila"
            class="w-full px-4 py-2.5 rounded-xl bg-background border border-border-subtle text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-sans"
          />
        </div>

        <div>
          <label class="block text-xs font-bold text-on-surface mb-1">Alamat Email</label>
          <input
            v-model="email"
            type="email"
            required
            placeholder="farah@aksara.id"
            class="w-full px-4 py-2.5 rounded-xl bg-background border border-border-subtle text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-sans"
          />
        </div>

        <div>
          <div class="flex items-center justify-between mb-1">
            <label class="text-xs font-bold text-on-surface">Kata Sandi</label>
            <a v-if="activeTab === 'masuk'" href="#" class="text-[11px] text-primary hover:underline">Lupa sandi?</a>
          </div>
          <input
            v-model="password"
            type="password"
            required
            placeholder="••••••••"
            class="w-full px-4 py-2.5 rounded-xl bg-background border border-border-subtle text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-sans"
          />
        </div>

        <BaseButton type="submit" size="md" class="w-full mt-2">
          {{ activeTab === 'masuk' ? 'Masuk ke RuangAksara' : 'Buat Akun Pembaca' }}
        </BaseButton>
      </form>

      <!-- Google Provider Divider -->
      <div class="relative my-6 text-center">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-border-subtle"></div>
        </div>
        <span class="relative px-3 bg-surface text-[11px] text-on-surface-variant font-medium">atau lanjutkan dengan</span>
      </div>

      <!-- Third party button -->
      <button
        @click="handleSubmit"
        type="button"
        class="w-full py-2.5 px-4 rounded-full border border-border-subtle hover:bg-surface-variant text-xs font-bold text-on-surface flex items-center justify-center gap-2 transition-colors cursor-pointer"
      >
        <svg class="w-4 h-4" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
        </svg>
        <span>Akun Google</span>
      </button>

      <!-- Poetic bottom quote -->
      <div class="mt-6 pt-4 border-t border-border-subtle text-center">
        <p class="font-serif italic text-[11px] text-on-surface-variant">
          "Setiap halaman adalah jendela ke semesta yang baru."
        </p>
      </div>
    </div>
  </div>
</template>
