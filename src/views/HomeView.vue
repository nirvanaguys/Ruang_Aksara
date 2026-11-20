<script setup>
import { ref } from 'vue'
import BaseButton from '@/components/BaseButton.vue'
import BookCard from '@/components/BookCard.vue'
import BookshelfChart from '@/components/BookshelfChart.vue'
import ClubCard from '@/components/ClubCard.vue'
import CategoryChip from '@/components/CategoryChip.vue'
import booksData from '@/data/books.json'
import articlesData from '@/data/articles.json'
import clubsData from '@/data/clubs.json'

const featuredBooks = ref(booksData.slice(0, 4))
const featuredArticles = ref(articlesData.slice(0, 3))
const activeClubs = ref(clubsData.slice(0, 3))
</script>

<template>
  <div class="relative overflow-hidden">
    <!-- Ambient Atmospheric Backdrops (from Stitch 01-beranda) -->
    <div class="absolute -top-12 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-b from-primary-light/40 via-surface-container/30 to-transparent blur-3xl pointer-events-none rounded-full -z-10"></div>
    <div class="absolute top-96 right-4 w-96 h-96 bg-tertiary-fixed/20 blur-3xl pointer-events-none rounded-full -z-10"></div>
    <div class="absolute top-[1100px] left-6 w-80 h-80 bg-rose/20 blur-3xl pointer-events-none rounded-full -z-10"></div>

    <div class="max-w-[1140px] mx-auto px-4 sm:px-6">
      <!-- Hero Section -->
      <section class="pt-8 sm:pt-14 pb-10 sm:pb-16 flex flex-col items-center text-center max-w-[800px] mx-auto">
        <!-- Badge -->
        <div class="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-surface-variant text-primary-dark font-label-sm text-xs font-bold tracking-wider uppercase mb-5 shadow-sm border border-border-subtle">
          <span class="material-symbols-outlined text-[15px] text-primary">water_drop</span>
          Perpustakaan di Hari Hujan
        </div>

        <!-- Title -->
        <h1 class="font-display text-3xl sm:text-5xl lg:text-6xl text-on-surface mb-4 tracking-tight leading-[1.15]">
          Rumah hangat untuk <br class="hidden sm:inline"/>pencinta buku
        </h1>

        <!-- Subtitle -->
        <p class="font-body-lg text-sm sm:text-lg text-on-surface-variant max-w-[620px] mb-8 leading-relaxed">
          Baca, tulis, dan ngobrol tentang buku bersama orang-orang yang sama-sama suka menyeduh teh sebelum membuka halaman pertama.
        </p>

        <!-- CTA Buttons -->
        <div class="flex items-center gap-3 sm:gap-4 flex-wrap justify-center w-full sm:w-auto">
          <BaseButton to="/masuk" size="md" class="w-full sm:w-auto">
            Gabung Sekarang
          </BaseButton>
          <BaseButton to="/jelajah" variant="secondary" size="md" class="w-full sm:w-auto">
            Jelajah Tulisan
          </BaseButton>
        </div>
      </section>

      <!-- Floating Glass Stat Panel with Bookshelf Chart -->
      <section class="w-full mb-16 sm:mb-20">
        <div class="w-full rounded-2xl bg-glass-strong backdrop-blur-xl p-6 sm:p-8 border border-border-subtle shadow-[0_12px_36px_rgba(26,51,49,0.06)] grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <!-- Stat 1 -->
          <div class="md:col-span-3 flex flex-col justify-center text-center md:text-left">
            <span class="font-display text-3xl sm:text-4xl text-on-surface font-bold tracking-tight">2.480</span>
            <span class="text-xs sm:text-sm text-on-surface-variant mt-0.5">Tulisan terbit</span>
          </div>
          <!-- Stat 2 -->
          <div class="md:col-span-3 flex flex-col justify-center text-center md:text-left">
            <span class="font-display text-3xl sm:text-4xl text-on-surface font-bold tracking-tight">1.126</span>
            <span class="text-xs sm:text-sm text-on-surface-variant mt-0.5">Pembaca bergabung</span>
          </div>
          <!-- Stat 3 -->
          <div class="md:col-span-2 flex flex-col justify-center text-center md:text-left">
            <span class="font-display text-3xl sm:text-4xl text-on-surface font-bold tracking-tight">86</span>
            <span class="text-xs sm:text-sm text-on-surface-variant mt-0.5">Klub buku aktif</span>
          </div>
          <!-- Visual Bookshelf Graphic Spine Chart -->
          <div class="md:col-span-4 w-full">
            <div class="text-[11px] font-semibold text-primary mb-1 text-center md:text-right">
              Rak Bacaan Terkurasi Pekan Ini
            </div>
            <BookshelfChart />
          </div>
        </div>
      </section>

      <!-- Featured Bookshelf Section (Physical simulation cards) -->
      <section class="mb-16 sm:mb-20">
        <div class="flex items-end justify-between mb-8">
          <div>
            <div class="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider mb-1">
              <span class="material-symbols-outlined text-[16px]">menu_book</span>
              <span>Koleksi Terpopuler</span>
            </div>
            <h2 class="font-headline-lg text-2xl sm:text-3xl text-on-surface font-bold">
              Buku yang Ramai Dibicarakan
            </h2>
          </div>
          <router-link to="/jelajah" class="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark transition-colors">
            Lihat Semua Buku
            <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
          </router-link>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <BookCard
            v-for="book in featuredBooks"
            :key="book.id"
            :book="book"
          />
        </div>

        <div class="mt-6 text-center sm:hidden">
          <BaseButton to="/jelajah" variant="outline" size="sm" class="w-full">
            Lihat Semua Buku
          </BaseButton>
        </div>
      </section>

      <!-- Tulisan Segar (Editorial & Review Articles) -->
      <section class="mb-16 sm:mb-20">
        <div class="flex items-end justify-between mb-8">
          <div>
            <div class="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider mb-1">
              <span class="material-symbols-outlined text-[16px]">draw</span>
              <span>Ulasan & Diskursus</span>
            </div>
            <h2 class="font-headline-lg text-2xl sm:text-3xl text-on-surface font-bold">
              Tulisan Segar dari Pembaca
            </h2>
          </div>
          <router-link to="/jelajah" class="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark transition-colors">
            Katalog Tulisan
            <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
          </router-link>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <router-link
            v-for="article in featuredArticles"
            :key="article.id"
            :to="`/artikel/${article.slug}`"
            class="flex flex-col justify-between bg-surface rounded-2xl border border-border-subtle p-6 shadow-[0_4px_20px_rgba(26,51,49,0.03)] hover:shadow-[0_12px_32px_rgba(42,107,101,0.08)] transition-all duration-200 hover:-translate-y-1 group cursor-pointer"
          >
            <div>
              <div class="flex items-center justify-between gap-2 mb-3">
                <CategoryChip :category="article.category" />
                <span class="text-xs text-on-surface-variant">{{ article.readTime }}</span>
              </div>

              <h3 class="font-headline-sm text-lg font-bold text-on-surface group-hover:text-primary transition-colors mb-2 leading-snug">
                {{ article.title }}
              </h3>

              <p class="text-xs sm:text-sm text-on-surface-variant line-clamp-3 leading-relaxed mb-4">
                {{ article.excerpt }}
              </p>
            </div>

            <div class="pt-4 border-t border-border-subtle flex items-center justify-between text-xs text-on-surface-variant">
              <div class="flex items-center gap-2">
                <img :src="article.author.avatar" :alt="article.author.name" class="w-6 h-6 rounded-full object-cover" />
                <span class="font-bold text-on-surface">{{ article.author.name }}</span>
              </div>
              <span class="flex items-center gap-1 text-rose font-medium">
                <span class="material-symbols-outlined text-[14px]">favorite</span>
                {{ article.likes }}
              </span>
            </div>
          </router-link>
        </div>
      </section>

      <!-- Active Book Clubs Section -->
      <section class="mb-16">
        <div class="flex items-end justify-between mb-8">
          <div>
            <div class="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider mb-1">
              <span class="material-symbols-outlined text-[16px]">groups</span>
              <span>Lingkar Baca</span>
            </div>
            <h2 class="font-headline-lg text-2xl sm:text-3xl text-on-surface font-bold">
              Klub Buku yang Sedang Berjalan
            </h2>
          </div>
          <router-link to="/komunitas" class="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark transition-colors">
            Gabung Klub Lainnya
            <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
          </router-link>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ClubCard
            v-for="club in activeClubs"
            :key="club.id"
            :club="club"
          />
        </div>
      </section>
    </div>
  </div>
</template>
