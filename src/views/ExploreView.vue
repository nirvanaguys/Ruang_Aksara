<script setup>
import { ref, computed } from 'vue'
import CategoryChip from '@/components/CategoryChip.vue'
import BaseButton from '@/components/BaseButton.vue'
import booksData from '@/data/books.json'
import articlesData from '@/data/articles.json'

const selectedCategory = ref('Semua')
const searchQuery = ref('')
const currentPage = ref(1)
const itemsPerPage = 6

const categories = ['Semua', 'Resensi', 'Wawancara', 'Karya', 'Esai', 'Warta']

const filteredArticles = computed(() => {
  return articlesData.filter(article => {
    const matchCategory = selectedCategory.value === 'Semua' || article.category.toLowerCase().includes(selectedCategory.value.toLowerCase())
    const matchQuery = !searchQuery.value ||
      article.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      article.author.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchCategory && matchQuery
  })
})

const totalPages = computed(() => Math.ceil(filteredArticles.value.length / itemsPerPage) || 1)

const paginatedArticles = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return filteredArticles.value.slice(start, start + itemsPerPage)
})

const selectCategory = (cat) => {
  selectedCategory.value = cat
  currentPage.value = 1
}
</script>

<template>
  <div class="max-w-[1140px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
    <!-- Header Page -->
    <div class="max-w-2xl mb-8">
      <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-variant text-primary font-label-sm text-xs font-bold mb-3">
        <span class="material-symbols-outlined text-[15px]">explore</span>
        Katalog Bacaan
      </div>
      <h1 class="font-headline-lg text-3xl sm:text-4xl text-on-surface font-bold tracking-tight mb-2">
        Jelajah Aksara & Diskursus
      </h1>
      <p class="text-sm sm:text-base text-on-surface-variant leading-relaxed">
        Temukan ulasan mendalam, wawancara sastrawan, puisi hening, dan percikan pemikiran dari komunitas literatur RuangAksara.
      </p>
    </div>

    <!-- Search & Filter Controls -->
    <div class="bg-surface rounded-2xl border border-border-subtle p-4 sm:p-5 shadow-sm mb-10 space-y-4">
      <!-- Search Input -->
      <div class="relative">
        <span class="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl">search</span>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Cari judul tulisan, nama penulis, atau topik bacaan..."
          class="w-full pl-11 pr-4 py-2.5 rounded-xl bg-background border border-border-subtle text-sm text-on-surface placeholder:text-on-surface-variant/60 focus:bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-sans"
        />
        <button
          v-if="searchQuery"
          @click="searchQuery = ''"
          class="absolute right-3.5 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface"
        >
          <span class="material-symbols-outlined text-[16px]">close</span>
        </button>
      </div>

      <!-- Category Filter Chips (Horizontal Scroll on Mobile) -->
      <div class="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="selectCategory(cat)"
          class="px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-150 whitespace-nowrap cursor-pointer border"
          :class="selectedCategory === cat
            ? 'bg-primary text-on-primary border-primary shadow-sm'
            : 'bg-background hover:bg-surface-variant text-on-surface-variant border-border-subtle'"
        >
          {{ cat }}
        </button>
      </div>
    </div>

    <!-- Articles Catalog Grid -->
    <div v-if="filteredArticles.length === 0" class="py-16 text-center bg-surface rounded-2xl border border-border-subtle">
      <span class="material-symbols-outlined text-4xl text-on-surface-variant/40 mb-2">menu_book</span>
      <h3 class="font-headline-sm text-lg text-on-surface font-bold mb-1">Tidak ada tulisan ditemukan</h3>
      <p class="text-xs text-on-surface-variant max-w-sm mx-auto">
        Coba gunakan kata kunci lain atau pilih kategori "Semua" untuk melihat tulisan yang tersedia.
      </p>
      <button @click="selectCategory('Semua'); searchQuery = ''" class="mt-4 px-4 py-1.5 rounded-full bg-primary text-on-primary text-xs font-bold cursor-pointer">
        Reset Pencarian
      </button>
    </div>

    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
      <router-link
        v-for="article in paginatedArticles"
        :key="article.id"
        :to="`/artikel/${article.slug}`"
        class="flex flex-col justify-between bg-surface rounded-2xl border border-border-subtle overflow-hidden shadow-[0_4px_16px_rgba(26,51,49,0.03)] hover:shadow-[0_12px_28px_rgba(42,107,101,0.08)] transition-all duration-200 hover:-translate-y-1 group cursor-pointer"
      >
        <!-- Article Cover Image -->
        <div class="h-44 w-full bg-surface-variant overflow-hidden relative">
          <img
            :src="article.coverUrl"
            :alt="article.title"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          
          <div class="absolute top-3 left-3">
            <CategoryChip :category="article.category" />
          </div>

          <div class="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-sm text-[11px] text-white">
            {{ article.readTime }}
          </div>
        </div>

        <!-- Article Content -->
        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <span class="text-[11px] text-on-surface-variant font-medium block mb-1">
              {{ article.publishDate }}
            </span>
            <h3 class="font-headline-sm text-base sm:text-lg font-bold text-on-surface group-hover:text-primary transition-colors mb-2 leading-snug">
              {{ article.title }}
            </h3>
            <p class="text-xs text-on-surface-variant line-clamp-2 leading-relaxed">
              {{ article.excerpt }}
            </p>
          </div>

          <!-- Author Info & Likes -->
          <div class="pt-4 mt-4 border-t border-border-subtle flex items-center justify-between text-xs text-on-surface-variant">
            <div class="flex items-center gap-2">
              <img :src="article.author.avatar" :alt="article.author.name" class="w-6 h-6 rounded-full object-cover" />
              <span class="font-bold text-on-surface">{{ article.author.name }}</span>
            </div>
            <div class="flex items-center gap-3">
              <span class="flex items-center gap-1 text-rose font-medium">
                <span class="material-symbols-outlined text-[14px]">favorite</span>
                {{ article.likes }}
              </span>
              <span class="flex items-center gap-1 text-on-surface-variant font-medium">
                <span class="material-symbols-outlined text-[14px]">chat_bubble_outline</span>
                {{ article.commentsCount }}
              </span>
            </div>
          </div>
        </div>
      </router-link>
    </div>

    <!-- Pagination -->
    <div v-if="totalPages > 1" class="flex items-center justify-center gap-2 pt-6">
      <button
        @click="currentPage = Math.max(1, currentPage - 1)"
        :disabled="currentPage === 1"
        class="w-9 h-9 rounded-full bg-surface border border-border-subtle flex items-center justify-center text-on-surface disabled:opacity-40 disabled:cursor-not-allowed hover:bg-surface-variant cursor-pointer"
      >
        <span class="material-symbols-outlined text-[18px]">chevron_left</span>
      </button>

      <button
        v-for="p in totalPages"
        :key="p"
        @click="currentPage = p"
        class="w-9 h-9 rounded-full text-xs font-bold transition-colors cursor-pointer"
        :class="currentPage === p ? 'bg-primary text-on-primary' : 'bg-surface border border-border-subtle text-on-surface hover:bg-surface-variant'"
      >
        {{ p }}
      </button>

      <button
        @click="currentPage = Math.min(totalPages, currentPage + 1)"
        :disabled="currentPage === totalPages"
        class="w-9 h-9 rounded-full bg-surface border border-border-subtle flex items-center justify-center text-on-surface disabled:opacity-40 disabled:cursor-not-allowed hover:bg-surface-variant cursor-pointer"
      >
        <span class="material-symbols-outlined text-[18px]">chevron_right</span>
      </button>
    </div>
  </div>
</template>
