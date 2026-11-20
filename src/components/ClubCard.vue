<script setup>
import { ref } from 'vue'
import BaseButton from './BaseButton.vue'
import CategoryChip from './CategoryChip.vue'

const props = defineProps({
  club: {
    type: Object,
    required: true
  }
})

const isJoined = ref(props.club.joined || false)
const memberCount = ref(props.club.memberCount || 0)

const toggleJoin = () => {
  isJoined.value = !isJoined.value
  memberCount.value += isJoined.value ? 1 : -1
}
</script>

<template>
  <div class="flex flex-col justify-between bg-surface rounded-2xl border border-border-subtle p-5 shadow-[0_4px_20px_rgba(26,51,49,0.04)] hover:shadow-[0_12px_28px_rgba(42,107,101,0.08)] transition-all duration-200 hover:-translate-y-1">
    <!-- Header: Category & Member Count -->
    <div>
      <div class="flex items-center justify-between gap-2 mb-3">
        <CategoryChip :category="club.category" />
        <span class="text-xs text-on-surface-variant flex items-center gap-1 font-medium">
          <span class="material-symbols-outlined text-[14px]">group</span>
          {{ memberCount }}/{{ club.maxMembers || 150 }}
        </span>
      </div>

      <h3 class="font-headline-sm text-lg font-bold text-on-surface hover:text-primary transition-colors mb-2">
        {{ club.name }}
      </h3>

      <p class="text-body-sm text-xs text-on-surface-variant line-clamp-2 leading-relaxed mb-4">
        {{ club.description }}
      </p>

      <!-- Active Book Discussion Info -->
      <div class="p-3 rounded-xl bg-surface-variant/50 border border-border-subtle/80 space-y-1 mb-4">
        <div class="flex items-center gap-1.5 text-[11px] font-semibold text-primary">
          <span class="material-symbols-outlined text-[14px]">auto_stories</span>
          <span>Buku yang Sedang Dibahas</span>
        </div>
        <p class="text-xs font-serif font-bold text-on-surface line-clamp-1">
          {{ club.currentBook }}
        </p>
        <p class="text-[11px] text-on-surface-variant flex items-center gap-1">
          <span class="material-symbols-outlined text-[13px]">schedule</span>
          {{ club.schedule }}
        </p>
      </div>
    </div>

    <!-- Footer: Stacked Avatars & Action Button -->
    <div class="pt-4 border-t border-border-subtle flex items-center justify-between gap-3">
      <!-- Stacked avatars -->
      <div class="flex items-center -space-x-2 overflow-hidden">
        <img
          v-for="(url, idx) in club.avatarUrls"
          :key="idx"
          :src="url"
          alt="Anggota"
          class="inline-block h-7 w-7 rounded-full ring-2 ring-surface object-cover"
        />
        <div v-if="memberCount > 3" class="h-7 w-7 rounded-full bg-surface-variant ring-2 ring-surface flex items-center justify-center text-[10px] font-bold text-on-surface-variant">
          +{{ memberCount - 3 }}
        </div>
      </div>

      <!-- Join / Joined Button -->
      <BaseButton
        @click="toggleJoin"
        :variant="isJoined ? 'outline' : 'primary'"
        size="sm"
      >
        <span class="material-symbols-outlined text-[14px]">{{ isJoined ? 'check' : 'add' }}</span>
        <span>{{ isJoined ? 'Tergabung' : 'Gabung' }}</span>
      </BaseButton>
    </div>
  </div>
</template>
