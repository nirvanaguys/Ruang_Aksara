<script setup>
import { ref, computed } from 'vue'
import ClubCard from '@/components/ClubCard.vue'
import BaseButton from '@/components/BaseButton.vue'
import clubsData from '@/data/clubs.json'

const selectedCategory = ref('Semua')
const categories = ['Semua', 'Sastra Klasik', 'Puisi & Zine', 'Non-Fiksi']

const filteredClubs = computed(() => {
  if (selectedCategory.value === 'Semua') return clubsData
  return clubsData.filter(c => c.category === selectedCategory.value)
})

const isCreatingClub = ref(false)
const newClubName = ref('')
const newClubDesc = ref('')
const newClubTopic = ref('')

const handleCreateClub = () => {
  if (!newClubName.value.trim()) return
  clubsData.unshift({
    id: 'club-' + Date.now(),
    name: newClubName.value,
    category: newClubTopic.value || 'Sastra Klasik',
    description: newClubDesc.value || 'Klub buku baru di RuangAksara.',
    schedule: 'Akhir Pekan, 19.00 WIB',
    currentBook: 'Buku Pilihan Bersama',
    bookId: 'cantik-itu-luka',
    memberCount: 1,
    maxMembers: 100,
    joined: true,
    bannerColor: 'from-primary/20 via-primary-light/40 to-surface-variant',
    avatarUrls: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'
    ]
  })
  newClubName.value = ''
  newClubDesc.value = ''
  newClubTopic.value = ''
  isCreatingClub.value = false
}
</script>

<template>
  <div class="max-w-[1140px] mx-auto px-4 sm:px-6 py-8 sm:py-12">
    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
      <div class="max-w-2xl">
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-variant text-primary font-label-sm text-xs font-bold mb-3">
          <span class="material-symbols-outlined text-[15px]">groups</span>
          Lingkar Komunitas
        </div>
        <h1 class="font-headline-lg text-3xl sm:text-4xl text-on-surface font-bold tracking-tight mb-2">
          Klub Buku & Lingkar Diskusi
        </h1>
        <p class="text-sm sm:text-base text-on-surface-variant leading-relaxed">
          Membaca sendiri itu menenangkan, tetapi mendiskusikannya bersama teman satu frekuensi melipatgandakan maknanya.
        </p>
      </div>

      <BaseButton @click="isCreatingClub = !isCreatingClub" size="md">
        <span class="material-symbols-outlined text-[18px]">add</span>
        <span>Buat Klub Baru</span>
      </BaseButton>
    </div>

    <!-- Create Club Form Modal/Dropdown -->
    <div v-if="isCreatingClub" class="bg-surface rounded-2xl border border-primary/30 p-6 mb-10 shadow-lg animate-in fade-in">
      <div class="flex items-center justify-between mb-4">
        <h3 class="font-headline-sm text-lg font-bold text-on-surface">Mulai Lingkar Baca Baru</h3>
        <button @click="isCreatingClub = false" class="text-on-surface-variant hover:text-on-surface">
          <span class="material-symbols-outlined text-lg">close</span>
        </button>
      </div>

      <div class="space-y-4 max-w-xl">
        <div>
          <label class="block text-xs font-bold text-on-surface mb-1">Nama Klub Buku</label>
          <input
            v-model="newClubName"
            type="text"
            placeholder="Contoh: Lingkar Puisi Senja"
            class="w-full px-4 py-2 rounded-xl bg-background border border-border-subtle text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
        </div>
        <div>
          <label class="block text-xs font-bold text-on-surface mb-1">Fokus Topik</label>
          <select
            v-model="newClubTopic"
            class="w-full px-4 py-2 rounded-xl bg-background border border-border-subtle text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          >
            <option value="Sastra Klasik">Sastra Klasik</option>
            <option value="Puisi & Zine">Puisi & Zine</option>
            <option value="Non-Fiksi">Non-Fiksi</option>
          </select>
        </div>
        <div>
          <label class="block text-xs font-bold text-on-surface mb-1">Deskripsi Singkat</label>
          <textarea
            v-model="newClubDesc"
            rows="2"
            placeholder="Ceritakan tentang buku dan suasana membaca yang ingin kalian bangun..."
            class="w-full px-4 py-2 rounded-xl bg-background border border-border-subtle text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
          ></textarea>
        </div>
        <div class="flex items-center gap-3 pt-2">
          <BaseButton @click="handleCreateClub" size="sm">
            Terbitkan Klub
          </BaseButton>
          <BaseButton @click="isCreatingClub = false" variant="ghost" size="sm">
            Batal
          </BaseButton>
        </div>
      </div>
    </div>

    <!-- Category Filter Tabs -->
    <div class="flex items-center gap-2 mb-8 overflow-x-auto pb-1 no-scrollbar">
      <button
        v-for="cat in categories"
        :key="cat"
        @click="selectedCategory = cat"
        class="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer"
        :class="selectedCategory === cat
          ? 'bg-primary text-on-primary shadow-sm'
          : 'bg-surface hover:bg-surface-variant text-on-surface-variant border border-border-subtle'"
      >
        {{ cat }}
      </button>
    </div>

    <!-- Club Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
      <ClubCard
        v-for="club in filteredClubs"
        :key="club.id"
        :club="club"
      />
    </div>

    <!-- Community Ethics Section (Adab Komunitas) -->
    <div class="bg-gradient-to-r from-surface-container via-surface to-primary-light/30 rounded-2xl border border-border-subtle p-6 sm:p-8">
      <div class="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider mb-2">
        <span class="material-symbols-outlined text-[18px]">verified</span>
        <span>Adab Bertutur di RuangAksara</span>
      </div>
      <h3 class="font-headline-sm text-xl font-bold text-on-surface mb-3">
        Ruang Ramah, Teduh, dan Tanpa Penghakiman
      </h3>
      <p class="text-xs sm:text-sm text-on-surface-variant leading-relaxed max-w-3xl mb-4">
        Setiap orang memiliki ritme membaca masing-masing. Di RuangAksara, kita menghargai pendapat yang berbeda, menghindari spoiler tanpa peringatan, dan selalu mengedepankan empati dalam bertukar pikiran.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 text-xs text-on-surface font-semibold">
        <div class="flex items-center gap-2">
          <span class="material-symbols-outlined text-primary text-[16px]">check_circle</span>
          <span>Hargai Tafsir Berbeda</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="material-symbols-outlined text-primary text-[16px]">check_circle</span>
          <span>Beri Peringatan Spoiler</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="material-symbols-outlined text-primary text-[16px]">check_circle</span>
          <span>Bertutur Lembut & Hangat</span>
        </div>
      </div>
    </div>
  </div>
</template>
