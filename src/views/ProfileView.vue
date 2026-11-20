<script setup>
import { ref } from 'vue'
import ReadingProgressRing from '@/components/ReadingProgressRing.vue'
import BookshelfChart from '@/components/BookshelfChart.vue'
import BookCard from '@/components/BookCard.vue'
import BaseButton from '@/components/BaseButton.vue'
import userData from '@/data/user.json'
import booksData from '@/data/books.json'

const user = ref(userData)
const activeTab = ref('membaca') // 'membaca' | 'selesai' | 'ingin'

const currentReadingBooks = ref(booksData.filter(b => b.status === 'membaca'))
const finishedBooks = ref(booksData.filter(b => b.status === 'selesai'))
const wantToReadBooks = ref(booksData.filter(b => b.status === 'ingin'))

const isEditingBio = ref(false)
const editedBio = ref(user.value.bio)

const saveBio = () => {
  user.value.bio = editedBio.value
  isEditingBio.value = false
}
</script>

<template>
  <div class="max-w-[1140px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
    <!-- Profile Header Card (Glassmorphic) -->
    <div class="bg-glass-strong backdrop-blur-xl rounded-2xl border border-border-subtle p-6 sm:p-8 shadow-[0_8px_32px_rgba(26,51,49,0.06)] mb-10">
      <div class="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        <!-- Large Avatar -->
        <div class="relative">
          <img
            :src="user.avatar"
            :alt="user.name"
            class="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover ring-4 ring-primary-light shadow-md"
          />
          <span class="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-primary border-2 border-surface flex items-center justify-center text-white text-[11px]" title="Anggota Aktif">
            ✓
          </span>
        </div>

        <!-- Name, Bio, and Controls -->
        <div class="flex-1 text-center sm:text-left space-y-3">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h1 class="font-headline-lg text-2xl sm:text-3xl font-bold text-on-surface">
                {{ user.name }}
              </h1>
              <p class="text-xs sm:text-sm text-primary font-semibold">
                {{ user.handle }} • Bergabung sejak {{ user.joinedDate }}
              </p>
            </div>

            <BaseButton @click="isEditingBio = !isEditingBio" variant="outline" size="sm">
              <span class="material-symbols-outlined text-[16px]">edit</span>
              <span>{{ isEditingBio ? 'Tutup' : 'Sunting Bio' }}</span>
            </BaseButton>
          </div>

          <!-- Editable Bio -->
          <div v-if="isEditingBio" class="space-y-2 pt-2">
            <textarea
              v-model="editedBio"
              rows="2"
              class="w-full p-3 rounded-xl bg-background border border-border-subtle text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
            ></textarea>
            <BaseButton @click="saveBio" size="sm">Simpan Perubahan</BaseButton>
          </div>
          <p v-else class="text-xs sm:text-sm text-on-surface-variant max-w-2xl leading-relaxed">
            "{{ user.bio }}"
          </p>

          <!-- Location & Tags -->
          <div class="flex items-center justify-center sm:justify-start gap-4 text-xs text-on-surface-variant pt-1">
            <span class="flex items-center gap-1">
              <span class="material-symbols-outlined text-[15px]">location_on</span>
              {{ user.location }}
            </span>
            <span class="flex items-center gap-1">
              <span class="material-symbols-outlined text-[15px]">verified</span>
              Kurator Buku Terpilih
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Reading Progress and Stats Panel -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
      <!-- Target Bacaan 2026 Ring -->
      <div class="md:col-span-5 bg-surface rounded-2xl border border-border-subtle p-6 shadow-sm flex flex-col items-center justify-center text-center">
        <h3 class="font-headline-sm text-base font-bold text-on-surface mb-4 flex items-center gap-1.5">
          <span class="material-symbols-outlined text-primary text-[18px]">flag</span>
          <span>Target Membaca Tahun 2026</span>
        </h3>
        <ReadingProgressRing :current="user.stats.booksRead" :goal="user.stats.readingGoal" :size="140" :strokeWidth="12" />
        <p class="text-xs text-on-surface-variant mt-4 max-w-xs">
          Tersisa <strong>{{ user.stats.readingGoal - user.stats.booksRead }} buku lagi</strong> untuk mencapai resolusi literatur tahun ini.
        </p>
      </div>

      <!-- Stats Numbers & Shelf Chart -->
      <div class="md:col-span-7 bg-surface rounded-2xl border border-border-subtle p-6 shadow-sm flex flex-col justify-between">
        <div class="grid grid-cols-3 gap-4 pb-6 border-b border-border-subtle text-center">
          <div>
            <span class="font-display text-2xl sm:text-3xl text-on-surface font-bold">{{ user.stats.booksRead }}</span>
            <span class="text-xs text-on-surface-variant block mt-1">Buku Dibaca</span>
          </div>
          <div>
            <span class="font-display text-2xl sm:text-3xl text-primary font-bold">{{ user.stats.clubsJoined }}</span>
            <span class="text-xs text-on-surface-variant block mt-1">Klub Diikuti</span>
          </div>
          <div>
            <span class="font-display text-2xl sm:text-3xl text-on-surface font-bold">{{ user.stats.reviewsPublished }}</span>
            <span class="text-xs text-on-surface-variant block mt-1">Ulasan Terbit</span>
          </div>
        </div>

        <div class="pt-4">
          <span class="text-xs font-bold text-primary mb-1 block">Visualisasi Rak Buku Farah</span>
          <BookshelfChart />
        </div>
      </div>
    </div>

    <!-- Virtual Bookshelf Tabs -->
    <div class="mb-8">
      <div class="flex items-center justify-between border-b border-border-subtle pb-4 mb-6">
        <div class="flex items-center gap-3 overflow-x-auto pb-1 no-scrollbar">
          <button
            @click="activeTab = 'membaca'"
            class="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer"
            :class="activeTab === 'membaca' ? 'bg-primary text-on-primary shadow-sm' : 'bg-surface hover:bg-surface-variant text-on-surface-variant border border-border-subtle'"
          >
            Sedang Dibaca ({{ currentReadingBooks.length }})
          </button>
          <button
            @click="activeTab = 'selesai'"
            class="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer"
            :class="activeTab === 'selesai' ? 'bg-primary text-on-primary shadow-sm' : 'bg-surface hover:bg-surface-variant text-on-surface-variant border border-border-subtle'"
          >
            Selesai Dibaca ({{ finishedBooks.length }})
          </button>
          <button
            @click="activeTab = 'ingin'"
            class="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer"
            :class="activeTab === 'ingin' ? 'bg-primary text-on-primary shadow-sm' : 'bg-surface hover:bg-surface-variant text-on-surface-variant border border-border-subtle'"
          >
            Ingin Dibaca ({{ wantToReadBooks.length }})
          </button>
        </div>

        <router-link to="/jelajah" class="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-primary-dark">
          <span>+ Tambah Koleksi</span>
        </router-link>
      </div>

      <!-- Books Grid for Active Tab -->
      <div v-if="activeTab === 'membaca'" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <BookCard
          v-for="book in currentReadingBooks"
          :key="book.id"
          :book="book"
        />
      </div>

      <div v-else-if="activeTab === 'selesai'" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <BookCard
          v-for="book in finishedBooks"
          :key="book.id"
          :book="book"
        />
      </div>

      <div v-else-if="activeTab === 'ingin'" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <BookCard
          v-for="book in wantToReadBooks"
          :key="book.id"
          :book="book"
        />
      </div>
    </div>
  </div>
</template>
