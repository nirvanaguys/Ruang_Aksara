<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary', // 'primary' | 'secondary' | 'outline' | 'ghost' | 'rose'
    validator: (val) => ['primary', 'secondary', 'outline', 'ghost', 'rose'].includes(val)
  },
  size: {
    type: String,
    default: 'md', // 'sm' | 'md' | 'lg'
    validator: (val) => ['sm', 'md', 'lg'].includes(val)
  },
  to: {
    type: [String, Object],
    default: null
  },
  disabled: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ''
  }
})

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'h-[36px] px-4 text-label-sm gap-1.5'
    case 'lg':
      return 'h-[48px] px-8 text-label-lg gap-2.5'
    case 'md':
    default:
      return 'h-[44px] px-6 text-label-md gap-2'
  }
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'secondary':
      return 'bg-surface hover:bg-surface-variant text-primary shadow-[0_2px_8px_rgba(26,51,49,0.05)] border border-surface-variant'
    case 'outline':
      return 'bg-transparent hover:bg-surface text-on-surface border border-surface-variant hover:border-primary/40'
    case 'ghost':
      return 'bg-transparent hover:bg-surface-variant text-on-surface-variant hover:text-on-surface'
    case 'rose':
      return 'bg-rose/30 hover:bg-rose/50 text-[#5E2B27]'
    case 'primary':
    default:
      return 'bg-primary hover:bg-primary-dark text-on-primary shadow-[0_4px_16px_rgba(6,83,77,0.18)]'
  }
})
</script>

<template>
  <component
    :is="to ? 'router-link' : 'button'"
    :to="to"
    :disabled="disabled"
    class="inline-flex items-center justify-center rounded-full font-label-md font-semibold transition-all duration-200 active:scale-[0.98] select-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5"
    :class="[sizeClasses, variantClasses]"
  >
    <span v-if="icon" class="material-symbols-outlined text-[18px]">{{ icon }}</span>
    <slot />
  </component>
</template>
