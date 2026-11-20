<script setup>
import { computed } from 'vue'

const props = defineProps({
  current: {
    type: Number,
    default: 28
  },
  goal: {
    type: Number,
    default: 36
  },
  size: {
    type: Number,
    default: 130
  },
  strokeWidth: {
    type: Number,
    default: 10
  }
})

const percentage = computed(() => {
  if (props.goal <= 0) return 0
  return Math.min(100, Math.round((props.current / props.goal) * 100))
})

const radius = computed(() => (props.size - props.strokeWidth) / 2)
const circumference = computed(() => 2 * Math.PI * radius.value)
const strokeDashoffset = computed(() => {
  return circumference.value - (percentage.value / 100) * circumference.value
})
</script>

<template>
  <div class="relative inline-flex items-center justify-center">
    <svg :width="size" :height="size" class="transform -rotate-90">
      <!-- Background track -->
      <circle
        :cx="size / 2"
        :cy="size / 2"
        :r="radius"
        class="text-surface-variant"
        :stroke-width="strokeWidth"
        stroke="currentColor"
        fill="transparent"
      />
      <!-- Progress fill -->
      <circle
        :cx="size / 2"
        :cy="size / 2"
        :r="radius"
        class="text-primary transition-all duration-700 ease-out"
        :stroke-width="strokeWidth"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="strokeDashoffset"
        stroke-linecap="round"
        stroke="currentColor"
        fill="transparent"
      />
    </svg>

    <!-- Center content -->
    <div class="absolute flex flex-col items-center justify-center text-center">
      <span class="font-display text-xl font-bold text-on-surface leading-none">
        {{ current }}/{{ goal }}
      </span>
      <span class="text-[11px] font-semibold text-primary mt-0.5">
        {{ percentage }}%
      </span>
      <span class="text-[9px] text-on-surface-variant">Buku 2026</span>
    </div>
  </div>
</template>
