<script setup>
import { ref, computed } from 'vue'
import DiscussionCard from '@/components/DiscussionCard.vue'
import BaseButton from '@/components/BaseButton.vue'
import CategoryChip from '@/components/CategoryChip.vue'
import threadsData from '@/data/threads.json'

const selectedCategory = ref('Semua')
const categories = ['Semua', 'Diskusi', 'Rekomendasi', 'Bedah Buku', 'Santai']

const threads = ref(threadsData)

const filteredThreads = computed(() => {
  if (selectedCategory.value === 'Semua') return threads.value
  return threads.value.filter(t => t.category === selectedCategory.value)
})

const isModalOpen = ref(false)
const newTitle = ref('')
const newCategory = ref('Diskusi')
const newExcerpt = ref('')

const handleCreateThread = () => {
  if (!newTitle.value.trim() || !newExcerpt.value.trim()) return

  threads.value.unshift({
    id: String(Date.now()),
    title: newTitle.value,
    category: newCategory.value,
    author: {
      name: 'Farah Salsabila',
      handle: '@farah_aksara',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'
    },
    createdAt: 'Baru saja',
    bookId: null,
    bookTitle: null,
    excerpt: newExcerpt.value,
    repliesCount: 0,
    likesCount: 1,
    comments: []
  })

  newTitle.value = ''
  newExcerpt.value = ''
  isModalOpen.value = false
}
</script>

<template>
  <div class="max-w-[1140px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
      <div>
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-variant text-primary font-label-sm text-xs font-bold mb-3">
          <span class="material-symbols-outlined text-[15px]">forum</span>
          Forum Diskusi Terbuka
        </div>
        <h1 class="font-headline-lg text-3xl sm:text-4xl text-on-surface font-bold tracking-tight mb-2">
          Percakapan & Catatan Pinggir
        </h1>
        <p class="text-sm sm:text-base text-on-surface-variant leading-relaxed">
          Ajukan pertanyaan, bedah makna tersembunyi, atau cari rekomendasi buku berikutnya.
        </p>
      </div>

      <BaseButton @click="isModalOpen = true" size="md">
        <span class="material-symbols-outlined text-[18px]">edit_square</span>
        <span>Mulai Diskusi</span>
      </BaseButton>
    </div>

    <!-- Create Discussion Modal/Card -->
    <div v-if="isModalOpen" class="bg-surface rounded-2xl border border-primary/30 p-6 mb-8 shadow-xl animate-in fade-in">
      <div class="flex items-center justify-between mb-4">
        <h3 class="font-headline-sm text-lg font-bold text-on-surface">Mulai Topik Diskusi Baru</h3>
        <button @click="isModalOpen = false" class="text-on-surface-variant hover:text-on-surface">
          <span class="material-symbols-outlined text-lg">close</span>
        </button>
      </div>

      <div class="space-y-4 max-w-xl">
        <div>
          <label class="block text-xs font-bold text-on-surface mb-1">Judul Diskusi</label>
          <input
            v-model="newTitle"
            type="text"
            placeholder="Apa hal menarik atau pertanyaan yang ingin kamu diskusikan?"
            class="w-full px-4 py-2.5 rounded-xl bg-background border border-border-subtle text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
        </div>
        <div>
          <label class="block text-xs font-bold text-on-surface mb-1">Kategori</label>
          <select
            v-model="newCategory"
            class="w-full px-4 py-2 rounded-xl bg-background border border-border-subtle text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          >
            <option value="Diskusi">Diskusi</option>
            <option value="Rekomendasi">Rekomendasi</option>
            <option value="Bedah Buku">Bedah Buku</option>
            <option value="Santai">Santai</option>
          </select>
        </div>
        <div>
          <label class="block text-xs font-bold text-on-surface mb-1">Pengantar Diskusi</label>
          <textarea
            v-model="newExcerpt"
            rows="3"
            placeholder="Ceritakan konteks atau alasan kamu memulai topik ini..."
            class="w-full px-4 py-2 rounded-xl bg-background border border-border-subtle text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
          ></textarea>
        </div>
        <div class="flex items-center gap-3 pt-2">
          <BaseButton @click="handleCreateThread" size="sm">
            Terbitkan Diskusi
          </BaseButton>
          <BaseButton @click="isModalOpen = false" variant="ghost" size="sm">
            Batal
          </BaseButton>
        </div>
      </div>
    </div>

    <!-- Category Tabs Filter -->
    <div class="flex items-center gap-2 mb-8 overflow-x-auto pb-1 no-scrollbar">
      <button
        v-for="cat in categories"
        :key="cat"
        @click="selectedCategory = cat"
        class="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer border"
        :class="selectedCategory === cat
          ? 'bg-primary text-on-primary border-primary shadow-sm'
          : 'bg-surface hover:bg-surface-variant text-on-surface-variant border-border-subtle'"
      >
        {{ cat }}
      </button>
    </div>

    <!-- Layout: Main Feed & Right Sidebar -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <!-- Discussion Cards Feed (Left) -->
      <div class="lg:col-span-8 space-y-4">
        <DiscussionCard
          v-for="thread in filteredThreads"
          :key="thread.id"
          :thread="thread"
        />
      </div>

      <!-- Right Sidebar: Trending Topics & Forum Guidelines -->
      <div class="lg:col-span-4 space-y-6">
        <!-- Trending Topics Box -->
        <div class="bg-surface rounded-2xl border border-border-subtle p-5 sm:p-6 shadow-sm space-y-4">
          <div class="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
            <span class="material-symbols-outlined text-[16px]">local_fire_department</span>
            <span>Topik Ramai Pekan Ini</span>
          </div>

          <div class="space-y-3">
            <div class="pb-3 border-b border-border-subtle/80">
              <span class="text-[11px] text-primary font-bold">#RealismeMagis</span>
              <p class="text-xs font-semibold text-on-surface mt-0.5">Membandingkan Halimunda dan Macondo</p>
              <span class="text-[10px] text-on-surface-variant">48 tanggapan hari ini</span>
            </div>
            <div class="pb-3 border-b border-border-subtle/80">
              <span class="text-[11px] text-primary font-bold">#HujanDanBuku</span>
              <p class="text-xs font-semibold text-on-surface mt-0.5">Daftar buku wajib saat musim penghujan</p>
              <span class="text-[10px] text-on-surface-variant">72 tanggapan hari ini</span>
            </div>
            <div>
              <span class="text-[11px] text-primary font-bold">#SlowReading</span>
              <p class="text-xs font-semibold text-on-surface mt-0.5">Menikmati novel tanpa buru-buru target</p>
              <span class="text-[10px] text-on-surface-variant">35 tanggapan hari ini</span>
            </div>
          </div>
        </div>

        <!-- Forum Guide Card -->
        <div class="bg-gradient-to-br from-primary-light/40 to-surface rounded-2xl border border-border-subtle p-5 space-y-3">
          <div class="flex items-center gap-2 text-primary font-bold text-xs">
            <span class="material-symbols-outlined text-[16px]">verified_user</span>
            <span>Pedoman Bertutur</span>
          </div>
          <p class="text-xs text-on-surface-variant leading-relaxed">
            Gunakan bahasa yang santun, cantumkan bab atau halaman jika membahas detail alur penting, dan selamat berbincang hangat!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
