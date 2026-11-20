<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import booksData from '@/data/books.json'
import articlesData from '@/data/articles.json'
import clubsData from '@/data/clubs.json'

const router = useRouter()
const isOpen = ref(false)
const searchQuery = ref('')
const selectedIndex = ref(0)

const open = () => {
  isOpen.value = true
  searchQuery.value = ''
  selectedIndex.value = 0
}

const close = () => {
  isOpen.value = false
}

// Global keyboard shortcut Cmd+K / Ctrl+K
const handleKeyDown = (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault()
    if (isOpen.value) {
      close()
    } else {
      open()
    }
  } else if (e.key === 'Escape' && isOpen.value) {
    close()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})

defineExpose({ open, close })

// Filtered items
const navigationItems = [
  { title: 'Beranda Utama', path: '/', category: 'Navigasi', icon: 'home' },
  { title: 'Jelajah Tulisan & Buku', path: '/jelajah', category: 'Navigasi', icon: 'explore' },
  { title: 'Forum Diskusi Sastra', path: '/diskusi', category: 'Navigasi', icon: 'forum' },
  { title: 'Klub Buku & Komunitas', path: '/komunitas', category: 'Navigasi', icon: 'groups' },
  { title: 'Profil & Rak Buku Saya', path: '/profil', category: 'Navigasi', icon: 'person' },
  { title: 'Masuk / Daftar Akun', path: '/masuk', category: 'Navigasi', icon: 'login' }
]

const filteredResults = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()
  if (!query) {
    return [
      ...navigationItems,
      ...booksData.slice(0, 3).map(b => ({
        title: `${b.title} — ${b.author}`,
        path: `/artikel/${b.id}`,
        category: 'Buku Populer',
        icon: 'book'
      })),
      ...clubsData.slice(0, 2).map(c => ({
        title: c.name,
        path: '/komunitas',
        category: 'Klub Buku',
        icon: 'group'
      }))
    ]
  }

  const results = []

  navigationItems.forEach(item => {
    if (item.title.toLowerCase().includes(query)) {
      results.push(item)
    }
  })

  booksData.forEach(b => {
    if (b.title.toLowerCase().includes(query) || b.author.toLowerCase().includes(query)) {
      results.push({
        title: `${b.title} — ${b.author}`,
        path: `/artikel/${b.id}`,
        category: 'Buku',
        icon: 'book'
      })
    }
  })

  articlesData.forEach(a => {
    if (a.title.toLowerCase().includes(query) || a.author.name.toLowerCase().includes(query)) {
      results.push({
        title: a.title,
        path: `/artikel/${a.slug}`,
        category: 'Artikel',
        icon: 'article'
      })
    }
  })

  clubsData.forEach(c => {
    if (c.name.toLowerCase().includes(query) || c.description.toLowerCase().includes(query)) {
      results.push({
        title: c.name,
        path: '/komunitas',
        category: 'Komunitas',
        icon: 'group'
      })
    }
  })

  return results
})

const navigateTo = (path) => {
  router.push(path)
  close()
}
</script>

<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/40 backdrop-blur-sm" @click.self="close">
    <div class="w-full max-w-xl bg-surface/95 backdrop-blur-2xl rounded-2xl border border-border-subtle shadow-[0_24px_48px_rgba(26,51,49,0.18)] overflow-hidden animate-in fade-in zoom-in-95 duration-150">
      <!-- Input bar -->
      <div class="flex items-center gap-3 px-5 py-3.5 border-b border-border-subtle">
        <span class="material-symbols-outlined text-primary text-xl">search</span>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Cari buku, ulasan, topik diskusi, atau menu..."
          class="flex-1 bg-transparent text-on-surface text-base outline-none placeholder:text-on-surface-variant/60"
          autofocus
        />
        <kbd class="hidden sm:inline-block px-2 py-0.5 rounded bg-surface-variant text-on-surface-variant text-[11px] font-bold">ESC</kbd>
      </div>

      <!-- Results list -->
      <div class="max-h-80 overflow-y-auto p-2 divide-y divide-border-subtle/50">
        <div v-if="filteredResults.length === 0" class="py-8 text-center text-on-surface-variant text-sm">
          Tidak ada hasil untuk "<span class="font-semibold text-primary">{{ searchQuery }}</span>"
        </div>

        <button
          v-for="(item, index) in filteredResults"
          :key="index"
          @click="navigateTo(item.path)"
          class="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-colors duration-150 hover:bg-surface-variant/80 cursor-pointer group"
        >
          <div class="flex items-center gap-3 min-w-0">
            <span class="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-[20px]">{{ item.icon }}</span>
            <span class="text-sm font-medium text-on-surface group-hover:text-primary transition-colors truncate">{{ item.title }}</span>
          </div>
          <span class="text-[11px] px-2 py-0.5 rounded-full bg-surface-variant text-on-surface-variant whitespace-nowrap ml-2">{{ item.category }}</span>
        </button>
      </div>

      <!-- Footer Help -->
      <div class="px-5 py-2.5 bg-surface-variant/40 border-t border-border-subtle flex items-center justify-between text-[11px] text-on-surface-variant">
        <span>Tekan <kbd class="px-1.5 py-0.5 rounded bg-surface border border-border-subtle font-bold">↵</kbd> untuk memilih</span>
        <span>RuangAksara Search</span>
      </div>
    </div>
  </div>
</template>
