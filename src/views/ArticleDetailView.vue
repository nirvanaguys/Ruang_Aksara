<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import CategoryChip from '@/components/CategoryChip.vue'
import BaseButton from '@/components/BaseButton.vue'
import CommentBox from '@/components/CommentBox.vue'
import BookCard from '@/components/BookCard.vue'
import articlesData from '@/data/articles.json'
import booksData from '@/data/books.json'

const route = useRoute()

const article = computed(() => {
  const param = route.params.id
  return articlesData.find(a => a.slug === param || a.id === param || a.bookId === param) || articlesData[0]
})

const relatedBook = computed(() => {
  if (!article.value.bookId) return null
  return booksData.find(b => b.id === article.value.bookId)
})

const recommendedArticles = computed(() => {
  return articlesData.filter(a => a.id !== article.value.id).slice(0, 2)
})

const isLiked = ref(false)
const isSaved = ref(false)
const likeCount = ref(article.value.likes || 142)

const toggleLike = () => {
  isLiked.value = !isLiked.value
  likeCount.value += isLiked.value ? 1 : -1
}

const toggleSave = () => {
  isSaved.value = !isSaved.value
}

const comments = ref([
  {
    id: '1',
    author: {
      name: 'Farah Salsabila',
      handle: '@farah_aksara',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'
    },
    createdAt: 'Kemarin, 20:14',
    content: 'Ulasan yang sangat menyentuh. Bagian perbandingan mitos Halimunda dengan realitas sosial kolonial membuka mata saya saat membaca ulang novel ini.'
  },
  {
    id: '2',
    author: {
      name: 'Bima Wicaksono',
      handle: '@bimawicak',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80'
    },
    createdAt: '2 hari yang lalu',
    content: 'Eka Kurniawan memang luar biasa dalam memadukan kepedihan dengan komedi satir. Tulisan ini berhasil menangkap roh utama karyanya.'
  }
])

const handleNewComment = (text) => {
  comments.value.unshift({
    id: Date.now().toString(),
    author: {
      name: 'Farah Salsabila',
      handle: '@farah_aksara',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'
    },
    createdAt: 'Baru saja',
    content: text
  })
}
</script>

<template>
  <div class="max-w-[1140px] mx-auto px-4 sm:px-6 py-6 sm:py-10">
    <!-- Back breadcrumb button -->
    <div class="mb-6">
      <router-link to="/jelajah" class="inline-flex items-center gap-1.5 text-xs font-semibold text-on-surface-variant hover:text-primary transition-colors">
        <span class="material-symbols-outlined text-[16px]">arrow_back</span>
        <span>Kembali ke Jelajah</span>
      </router-link>
    </div>

    <!-- Article Header -->
    <div class="max-w-[820px] mb-8 space-y-4">
      <div class="flex items-center gap-3">
        <CategoryChip :category="article.category" />
        <span class="text-xs text-on-surface-variant">{{ article.readTime }}</span>
        <span class="text-xs text-on-surface-variant">•</span>
        <span class="text-xs text-on-surface-variant">{{ article.publishDate }}</span>
      </div>

      <h1 class="font-headline-lg text-2xl sm:text-4xl text-on-surface font-bold tracking-tight leading-[1.25]">
        {{ article.title }}
      </h1>

      <p class="font-quote text-base sm:text-lg text-on-surface-variant italic leading-relaxed">
        "{{ article.excerpt }}"
      </p>

      <!-- Author Card Header -->
      <div class="flex items-center justify-between pt-2">
        <div class="flex items-center gap-3">
          <img :src="article.author.avatar" :alt="article.author.name" class="w-10 h-10 rounded-full object-cover ring-2 ring-primary-light" />
          <div>
            <h4 class="text-sm font-bold text-on-surface">{{ article.author.name }}</h4>
            <p class="text-xs text-on-surface-variant">{{ article.author.handle }}</p>
          </div>
        </div>

        <!-- Social Reaction Bar -->
        <div class="flex items-center gap-2">
          <button
            @click="toggleLike"
            class="flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold transition-all cursor-pointer"
            :class="isLiked ? 'bg-rose/30 border-rose text-[#5E2B27]' : 'bg-surface border-border-subtle text-on-surface-variant hover:text-rose'"
          >
            <span class="material-symbols-outlined text-[16px]" :class="isLiked ? 'fill-1' : ''">favorite</span>
            <span>{{ likeCount }}</span>
          </button>

          <button
            @click="toggleSave"
            class="flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold transition-all cursor-pointer"
            :class="isSaved ? 'bg-primary-light border-primary text-primary' : 'bg-surface border-border-subtle text-on-surface-variant hover:text-primary'"
          >
            <span class="material-symbols-outlined text-[16px]" :class="isSaved ? 'fill-1' : ''">bookmark</span>
            <span>{{ isSaved ? 'Tersimpan' : 'Simpan' }}</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Main Content Layout (Editorial Two Columns) -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      <!-- Article Text Body (Left Column) -->
      <div class="lg:col-span-8 space-y-6">
        <!-- Main Cover Image -->
        <div class="w-full h-64 sm:h-96 rounded-2xl overflow-hidden shadow-sm border border-border-subtle">
          <img :src="article.coverUrl" :alt="article.title" class="w-full h-full object-cover" />
        </div>

        <!-- Editorial Prose with Dropcap -->
        <div class="bg-surface rounded-2xl border border-border-subtle p-6 sm:p-10 shadow-sm space-y-5 text-on-surface font-serif text-base sm:text-lg leading-[1.8]">
          <p
            v-for="(para, idx) in article.content"
            :key="idx"
            :class="idx === 0 ? 'first-letter-dropcap' : ''"
          >
            {{ para }}
          </p>
        </div>

        <!-- Attached Discussion Thread section -->
        <div class="pt-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="font-headline-sm text-xl font-bold text-on-surface">
              Diskusi Pembaca ({{ comments.length }})
            </h3>
            <span class="text-xs text-on-surface-variant">Berbagi pandangan dengan santun</span>
          </div>

          <CommentBox
            @submitComment="handleNewComment"
            placeholder="Bagaimana pendapatmu mengenai karya ini?"
            submitLabel="Beri Tanggapan"
            class="mb-6"
          />

          <!-- Comments Feed -->
          <div class="space-y-4">
            <div
              v-for="c in comments"
              :key="c.id"
              class="bg-surface rounded-2xl border border-border-subtle p-4 sm:p-5 shadow-xs"
            >
              <div class="flex items-center justify-between gap-2 mb-2">
                <div class="flex items-center gap-2.5">
                  <img :src="c.author.avatar" :alt="c.author.name" class="w-7 h-7 rounded-full object-cover" />
                  <div>
                    <span class="text-xs font-bold text-on-surface">{{ c.author.name }}</span>
                    <span class="text-[11px] text-on-surface-variant ml-2">{{ c.createdAt }}</span>
                  </div>
                </div>
              </div>
              <p class="text-xs sm:text-sm text-on-surface leading-relaxed pl-9">
                {{ c.content }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column: Author Sidebar & Related Book -->
      <div class="lg:col-span-4 space-y-6">
        <!-- Author Profile Box -->
        <div class="bg-surface rounded-2xl border border-border-subtle p-6 shadow-sm space-y-4">
          <div class="flex items-center gap-3">
            <img :src="article.author.avatar" :alt="article.author.name" class="w-14 h-14 rounded-full object-cover ring-2 ring-primary" />
            <div>
              <span class="text-[11px] font-bold uppercase tracking-wider text-primary">Penulis Resensi</span>
              <h3 class="font-headline-sm text-base font-bold text-on-surface">{{ article.author.name }}</h3>
              <p class="text-xs text-on-surface-variant">{{ article.author.handle }}</p>
            </div>
          </div>
          <p class="text-xs text-on-surface-variant leading-relaxed">
            {{ article.author.bio }}
          </p>
          <BaseButton variant="outline" size="sm" class="w-full">
            Ikuti Penulis
          </BaseButton>
        </div>

        <!-- Related Physical Book Card -->
        <div v-if="relatedBook" class="space-y-2">
          <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
            <span class="material-symbols-outlined text-[15px]">auto_stories</span>
            <span>Buku yang Diulas</span>
          </div>
          <BookCard :book="relatedBook" />
        </div>

        <!-- Recommended Readings -->
        <div class="bg-surface rounded-2xl border border-border-subtle p-5 shadow-sm space-y-4">
          <h4 class="font-headline-sm text-sm font-bold text-on-surface">Dari Rak yang Bersebelahan</h4>
          <div class="space-y-3">
            <router-link
              v-for="rec in recommendedArticles"
              :key="rec.id"
              :to="`/artikel/${rec.slug}`"
              class="block group"
            >
              <span class="text-[11px] text-primary font-semibold block mb-0.5">{{ rec.category }}</span>
              <p class="text-xs font-bold text-on-surface group-hover:text-primary transition-colors line-clamp-2">
                {{ rec.title }}
              </p>
              <span class="text-[10px] text-on-surface-variant mt-1 block">{{ rec.author.name }}</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
