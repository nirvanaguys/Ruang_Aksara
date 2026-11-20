<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import CategoryChip from '@/components/CategoryChip.vue'
import BaseButton from '@/components/BaseButton.vue'
import CommentBox from '@/components/CommentBox.vue'
import BookCard from '@/components/BookCard.vue'
import threadsData from '@/data/threads.json'
import booksData from '@/data/books.json'

const route = useRoute()

const thread = computed(() => {
  const id = route.params.id
  return threadsData.find(t => t.id === id) || threadsData[0]
})

const associatedBook = computed(() => {
  if (!thread.value.bookId) return null
  return booksData.find(b => b.id === thread.value.bookId)
})

const comments = ref([...(thread.value.comments || [])])

const isLiked = ref(false)
const likesCount = ref(thread.value.likesCount || 56)

const toggleLike = () => {
  isLiked.value = !isLiked.value
  likesCount.value += isLiked.value ? 1 : -1
}

const handleAddReply = (text) => {
  comments.value.push({
    id: 'reply-' + Date.now(),
    author: {
      name: 'Farah Salsabila',
      handle: '@farah_aksara',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80'
    },
    createdAt: 'Baru saja',
    content: text,
    likes: 0
  })
}
</script>

<template>
  <div class="max-w-[1140px] mx-auto px-4 sm:px-6 py-6 sm:py-10">
    <!-- Back to Forum -->
    <div class="mb-6">
      <router-link to="/diskusi" class="inline-flex items-center gap-1.5 text-xs font-semibold text-on-surface-variant hover:text-primary transition-colors">
        <span class="material-symbols-outlined text-[16px]">arrow_back</span>
        <span>Kembali ke Forum Diskusi</span>
      </router-link>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <!-- Main Thread and Responses (Left) -->
      <div class="lg:col-span-8 space-y-6">
        <!-- OP (Original Post) Card -->
        <div class="bg-surface rounded-2xl border border-border-subtle p-6 sm:p-8 shadow-sm space-y-4">
          <!-- Meta Header -->
          <div class="flex items-center justify-between gap-2">
            <div class="flex items-center gap-3">
              <img :src="thread.author.avatar" :alt="thread.author.name" class="w-10 h-10 rounded-full object-cover ring-2 ring-primary-light" />
              <div>
                <h4 class="text-sm font-bold text-on-surface">{{ thread.author.name }}</h4>
                <p class="text-xs text-on-surface-variant">{{ thread.author.handle }} • {{ thread.createdAt }}</p>
              </div>
            </div>
            <CategoryChip :category="thread.category" />
          </div>

          <!-- Title -->
          <h1 class="font-headline-sm text-xl sm:text-2xl font-bold text-on-surface leading-snug">
            {{ thread.title }}
          </h1>

          <!-- Body Excerpt / Question -->
          <p class="text-sm sm:text-base text-on-surface-variant leading-relaxed">
            {{ thread.excerpt }}
          </p>

          <!-- Book Badge if any -->
          <div v-if="thread.bookTitle" class="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface-variant text-xs text-primary font-serif font-bold">
            <span class="material-symbols-outlined text-[16px]">auto_stories</span>
            <span>Membahas Buku: {{ thread.bookTitle }}</span>
          </div>

          <!-- Interaction Footer -->
          <div class="pt-4 border-t border-border-subtle flex items-center justify-between text-xs text-on-surface-variant">
            <div class="flex items-center gap-3">
              <button
                @click="toggleLike"
                class="flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold transition-all cursor-pointer"
                :class="isLiked ? 'bg-rose/30 border-rose text-[#5E2B27]' : 'bg-surface border-border-subtle text-on-surface-variant hover:text-rose'"
              >
                <span class="material-symbols-outlined text-[16px]" :class="isLiked ? 'fill-1' : ''">favorite</span>
                <span>{{ likesCount }} Suka</span>
              </button>

              <span class="flex items-center gap-1.5">
                <span class="material-symbols-outlined text-[16px]">chat_bubble_outline</span>
                <span>{{ comments.length }} Balasan</span>
              </span>
            </div>

            <button class="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer">
              <span class="material-symbols-outlined text-[16px]">share</span>
              <span class="hidden sm:inline">Bagikan</span>
            </button>
          </div>
        </div>

        <!-- Replies Section -->
        <div class="space-y-4">
          <h3 class="font-headline-sm text-lg font-bold text-on-surface">
            Balasan & Tanggapan ({{ comments.length }})
          </h3>

          <!-- Comment Input Box -->
          <CommentBox
            @submitComment="handleAddReply"
            placeholder="Tulis balasan atau sudut pandangmu..."
            submitLabel="Kirim Balasan"
          />

          <!-- Replies Feed -->
          <div class="space-y-3 pt-2">
            <div
              v-for="reply in comments"
              :key="reply.id"
              class="bg-surface rounded-2xl border border-border-subtle p-5 shadow-xs space-y-2"
            >
              <div class="flex items-center justify-between gap-2">
                <div class="flex items-center gap-2.5">
                  <img :src="reply.author.avatar" :alt="reply.author.name" class="w-8 h-8 rounded-full object-cover" />
                  <div>
                    <h5 class="text-xs font-bold text-on-surface">{{ reply.author.name }}</h5>
                    <p class="text-[11px] text-on-surface-variant">{{ reply.author.handle }} • {{ reply.createdAt }}</p>
                  </div>
                </div>
                <button class="text-on-surface-variant hover:text-rose flex items-center gap-1 text-xs cursor-pointer">
                  <span class="material-symbols-outlined text-[15px]">favorite_border</span>
                  <span>{{ reply.likes || 0 }}</span>
                </button>
              </div>

              <p class="text-xs sm:text-sm text-on-surface leading-relaxed pl-10">
                {{ reply.content }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Sidebar: Book Info & Guidelines -->
      <div class="lg:col-span-4 space-y-6">
        <!-- Associated Book Card if available -->
        <div v-if="associatedBook" class="space-y-2">
          <div class="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            <span class="material-symbols-outlined text-[15px]">menu_book</span>
            <span>Buku Terkait Diskusi</span>
          </div>
          <BookCard :book="associatedBook" />
        </div>

        <!-- Forum Etiquette Reminder -->
        <div class="bg-surface rounded-2xl border border-border-subtle p-5 shadow-sm space-y-3">
          <h4 class="font-headline-sm text-sm font-bold text-on-surface flex items-center gap-1.5 text-primary">
            <span class="material-symbols-outlined text-[16px]">favorite</span>
            <span>Etika Berdiskusi</span>
          </h4>
          <p class="text-xs text-on-surface-variant leading-relaxed">
            Mari menjaga percakapan tetap hangat dan beradab. Perbedaan interpretasi memperkaya pengalaman membaca kita semua.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
