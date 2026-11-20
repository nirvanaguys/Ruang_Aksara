<script setup>
import BaseButton from './BaseButton.vue'
</script>

<template>
  <footer class="mt-20 border-t border-border-subtle bg-surface/60 backdrop-blur-sm pb-24 lg:pb-12 pt-12">
    <div class="max-w-[1140px] mx-auto px-4 sm:px-6">
      <!-- Upper quote banner -->
      <div class="mb-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-primary-light/40 via-surface to-secondary-light/30 border border-border-subtle flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="space-y-1 text-center md:text-left">
          <span class="text-xs font-bold uppercase tracking-wider text-primary">Kutipan Hari Ini</span>
          <p class="font-quote text-lg text-on-surface italic">
            "Hujan tidak pernah marah, ia hanya selalu tahu kapan harus kembali menyapa tanah."
          </p>
          <p class="text-xs text-on-surface-variant font-medium">— Menghening di RuangAksara</p>
        </div>
        <BaseButton to="/masuk" size="md">
          Mulai Menulis
        </BaseButton>
      </div>

      <!-- Footer Columns -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 py-6">
        <!-- Col 1: Brand -->
        <div class="space-y-3">
          <div class="flex items-center gap-2">
            <div class="w-7 h-7 rounded-lg bg-primary flex items-center justify-center text-white">
              <span class="material-symbols-outlined text-[16px]">menu_book</span>
            </div>
            <span class="font-headline-sm text-base font-bold text-primary">RuangAksara</span>
          </div>
          <p class="text-xs text-on-surface-variant leading-relaxed">
            Perpustakaan digital di hari hujan. Rumah hangat untuk pencinta buku membaca, berdialog, dan mengarsip cerita.
          </p>
        </div>

        <!-- Col 2: Jelajah -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-on-surface mb-3">Navigasi</h4>
          <ul class="space-y-2 text-xs text-on-surface-variant">
            <li><router-link to="/" class="hover:text-primary transition-colors">Beranda Utama</router-link></li>
            <li><router-link to="/jelajah" class="hover:text-primary transition-colors">Katalog Jelajah</router-link></li>
            <li><router-link to="/diskusi" class="hover:text-primary transition-colors">Forum Diskusi</router-link></li>
            <li><router-link to="/komunitas" class="hover:text-primary transition-colors">Lingkar Klub Buku</router-link></li>
          </ul>
        </div>

        <!-- Col 3: Kategori -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-on-surface mb-3">Kategori</h4>
          <ul class="space-y-2 text-xs text-on-surface-variant">
            <li><router-link to="/jelajah" class="hover:text-primary transition-colors">Resensi & Ulasan</router-link></li>
            <li><router-link to="/jelajah" class="hover:text-primary transition-colors">Wawancara Sastrawan</router-link></li>
            <li><router-link to="/jelajah" class="hover:text-primary transition-colors">Karya & Puisi Hujan</router-link></li>
            <li><router-link to="/jelajah" class="hover:text-primary transition-colors">Esai Kritis & Filsafat</router-link></li>
          </ul>
        </div>

        <!-- Col 4: Akun & Info -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-on-surface mb-3">Ruang Pembaca</h4>
          <ul class="space-y-2 text-xs text-on-surface-variant">
            <li><router-link to="/profil" class="hover:text-primary transition-colors">Rak Buku Saya</router-link></li>
            <li><router-link to="/masuk" class="hover:text-primary transition-colors">Masuk / Daftar</router-link></li>
            <li><span class="text-on-surface-variant/70">Desain Web — Semester 5</span></li>
          </ul>
        </div>
      </div>

      <!-- Bottom copyright bar -->
      <div class="mt-8 pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-on-surface-variant">
        <p>© 2026 RuangAksara. Dibangun dengan Vue 3 & Tailwind CSS.</p>
        <p class="font-serif italic text-primary/80">"Ada buku yang sedang menunggumu di sudut jendela."</p>
      </div>
    </div>
  </footer>
</template>
