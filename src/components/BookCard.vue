<script setup>
import { computed } from 'vue'
import CategoryChip from './CategoryChip.vue'

const props = defineProps({
  book: {
    type: Object,
    required: true
  },
  showSynopsis: {
    type: Boolean,
    default: true
  },
  compact: {
    type: Boolean,
    default: false
  }
})

const spineColor = computed(() => props.book.spineColor || '#2A6B65')
</script>

<template>
  <router-link
    :to="`/artikel/${props.book.id}`"
    class="group relative flex flex-col bg-surface rounded-2xl overflow-hidden border border-border-subtle shadow-[0_4px_20px_rgba(26,51,49,0.04)] hover:shadow-[0_12px_32px_rgba(42,107,101,0.12)] transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
  >
    <!-- Visual Book Simulation Header / Cover -->
    <div class="relative h-48 w-full bg-surface-variant overflow-hidden flex items-center justify-center p-4">
      <!-- Ambient Background glow -->
      <div
        class="absolute inset-0 opacity-40 blur-2xl transition-opacity group-hover:opacity-70"
        :style="{ backgroundColor: spineColor }"
      ></div>

      <!-- Book physical simulation representation -->
      <div class="relative flex h-36 w-28 rounded-r-md rounded-l-sm shadow-xl transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-1">
        <!-- Book Spine -->
        <div
          class="w-4.5 h-full rounded-l-sm relative flex flex-col items-center justify-between py-2 text-[9px] font-bold text-white tracking-widest uppercase book-spine-gradient"
          :style="{ backgroundColor: spineColor }"
        >
          <span class="rotate-90 origin-center whitespace-nowrap opacity-80 max-w-[90px] overflow-hidden text-ellipsis">{{ book.author }}</span>
        </div>

        <!-- Book Front Cover -->
        <div class="flex-1 h-full bg-cover bg-center rounded-r-sm relative overflow-hidden flex flex-col justify-between p-2" :style="{ backgroundImage: `url(${book.coverUrl})` }">
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20"></div>
          
          <div class="relative z-10">
            <span class="inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold bg-white/20 backdrop-blur-sm text-white">
              {{ book.year }}
            </span>
          </div>

          <div class="relative z-10">
            <p class="font-headline-sm text-white text-[12px] font-bold leading-tight line-clamp-2">
              {{ book.title }}
            </p>
            <p class="font-body-sm text-white/80 text-[10px] mt-0.5">
              {{ book.author }}
            </p>
          </div>
        </div>

        <!-- Paper Edge Trim -->
        <div class="w-1.5 h-full bg-[#FAF7EE] border-r border-[#E0DCD3] shadow-inner"></div>
      </div>

      <!-- Rating Badge -->
      <div v-if="book.rating" class="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface/90 backdrop-blur-md shadow-sm border border-border-subtle">
        <span class="material-symbols-outlined text-[15px] text-tertiary fill-1">star</span>
        <span class="text-label-sm text-on-surface font-bold text-[12px]">{{ book.rating }}</span>
      </div>
    </div>

    <!-- Body Information -->
    <div class="p-5 flex flex-col flex-1 justify-between gap-3">
      <div>
        <div class="flex items-center gap-2 mb-2">
          <CategoryChip v-if="book.category" :category="book.category" />
          <span v-if="book.pages" class="text-[12px] text-on-surface-variant font-medium">{{ book.pages }} hal.</span>
        </div>

        <h3 class="font-headline-sm text-on-surface text-lg font-bold group-hover:text-primary transition-colors line-clamp-1">
          {{ book.title }}
        </h3>
        <p class="text-on-surface-variant text-sm font-medium mt-0.5">
          {{ book.author }}
        </p>

        <p v-if="showSynopsis && book.synopsis" class="text-on-surface-variant text-body-sm text-[13px] line-clamp-2 mt-2 leading-relaxed">
          {{ book.synopsis }}
        </p>
      </div>

      <!-- Footer Info -->
      <div class="pt-3 border-t border-border-subtle flex items-center justify-between text-xs text-on-surface-variant">
        <div class="flex items-center gap-1 group-hover:text-primary transition-colors font-semibold">
          <span>Baca Ulasan</span>
          <span class="material-symbols-outlined text-[14px]">arrow_forward</span>
        </div>
        <div v-if="book.status" class="capitalize px-2 py-0.5 rounded-full text-[11px] font-medium"
          :class="book.status === 'selesai' ? 'bg-primary-light text-primary' : (book.status === 'membaca' ? 'bg-secondary-light text-secondary' : 'bg-surface-variant text-on-surface-variant')"
        >
          {{ book.status === 'selesai' ? 'Selesai' : (book.status === 'membaca' ? 'Sedang Baca' : 'Ingin Baca') }}
        </div>
      </div>
    </div>
  </router-link>
</template>
