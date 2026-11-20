<script setup>
import { computed } from 'vue'

const props = defineProps({
  category: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: false
  },
  clickable: {
    type: Boolean,
    default: false
  }
})

const colorStyles = computed(() => {
  if (props.active) {
    return 'bg-primary text-on-primary shadow-sm font-bold'
  }

  const cat = props.category.toLowerCase()
  if (cat.includes('resensi')) {
    return 'bg-primary-light text-primary hover:bg-primary/20'
  }
  if (cat.includes('wawancara')) {
    return 'bg-secondary-light text-secondary hover:bg-secondary/20'
  }
  if (cat.includes('warta') || cat.includes('pengumuman')) {
    return 'bg-tertiary-fixed text-on-tertiary hover:bg-tertiary-fixed-dim'
  }
  if (cat.includes('karya') || cat.includes('puisi')) {
    return 'bg-rose/40 text-[#5E2B27] hover:bg-rose/60'
  }
  if (cat.includes('esai') || cat.includes('filsafat')) {
    return 'bg-surface-variant text-on-surface hover:bg-surface-dim'
  }

  return 'bg-surface-variant text-on-surface-variant hover:text-on-surface'
})
</script>

<template>
  <span
    class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-label-sm font-semibold transition-colors duration-150 select-none whitespace-nowrap"
    :class="[colorStyles, clickable ? 'cursor-pointer hover:scale-[1.02] active:scale-95' : '']"
  >
    <slot>{{ category }}</slot>
  </span>
</template>
