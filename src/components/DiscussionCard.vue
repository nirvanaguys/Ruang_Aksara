<script setup>
import CategoryChip from './CategoryChip.vue'

const props = defineProps({
  thread: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <router-link
    :to="`/diskusi/${thread.id}`"
    class="block bg-surface rounded-2xl border border-border-subtle p-5 sm:p-6 shadow-[0_2px_12px_rgba(26,51,49,0.03)] hover:shadow-[0_8px_24px_rgba(42,107,101,0.08)] transition-all duration-200 hover:-translate-y-0.5 group cursor-pointer"
  >
    <!-- Thread meta header -->
    <div class="flex items-center justify-between gap-2 mb-3">
      <div class="flex items-center gap-2.5">
        <img
          :src="thread.author.avatar"
          :alt="thread.author.name"
          class="w-7 h-7 rounded-full object-cover ring-1 ring-border-subtle"
        />
        <div class="flex items-center gap-1.5 text-xs">
          <span class="font-bold text-on-surface">{{ thread.author.name }}</span>
          <span class="text-on-surface-variant">{{ thread.author.handle }}</span>
          <span class="text-on-surface-variant/40">•</span>
          <span class="text-on-surface-variant">{{ thread.createdAt }}</span>
        </div>
      </div>
      <CategoryChip :category="thread.category" />
    </div>

    <!-- Title and excerpt -->
    <h3 class="font-headline-sm text-base sm:text-lg font-bold text-on-surface group-hover:text-primary transition-colors mb-2 leading-snug">
      {{ thread.title }}
    </h3>

    <p class="text-xs sm:text-sm text-on-surface-variant line-clamp-2 leading-relaxed mb-4">
      {{ thread.excerpt }}
    </p>

    <!-- Attached book badge if any -->
    <div v-if="thread.bookTitle" class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-variant/60 text-xs text-primary font-serif font-medium mb-4">
      <span class="material-symbols-outlined text-[14px]">menu_book</span>
      <span>Topik: {{ thread.bookTitle }}</span>
    </div>

    <!-- Stats footer -->
    <div class="flex items-center justify-between pt-3 border-t border-border-subtle text-xs text-on-surface-variant">
      <div class="flex items-center gap-4">
        <span class="flex items-center gap-1.5 hover:text-primary transition-colors">
          <span class="material-symbols-outlined text-[16px]">chat_bubble_outline</span>
          <span class="font-semibold">{{ thread.repliesCount }} balasan</span>
        </span>
        <span class="flex items-center gap-1.5 hover:text-rose transition-colors">
          <span class="material-symbols-outlined text-[16px]">favorite_border</span>
          <span class="font-semibold">{{ thread.likesCount }} suka</span>
        </span>
      </div>

      <span class="font-semibold group-hover:text-primary flex items-center gap-1">
        Buka Diskusi
        <span class="material-symbols-outlined text-[14px]">arrow_forward</span>
      </span>
    </div>
  </router-link>
</template>
