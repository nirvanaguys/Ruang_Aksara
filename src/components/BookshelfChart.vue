<script setup>
const props = defineProps({
  books: {
    type: Array,
    default: () => [
      { id: '1', title: 'Cantik Itu Luka', color: 'bg-primary', height: 'h-14', hoverHeight: 'hover:h-16', stripe: 'bg-primary-dark/40', stripeWidth: 'w-[3px]' },
      { id: '2', title: 'Hujan Bulan Juni', color: 'bg-rose', height: 'h-18', hoverHeight: 'hover:h-20', stripe: 'bg-[#9e5e5b]/40', stripeWidth: 'w-[2.5px]' },
      { id: '3', title: 'Laut Bercerita', color: 'bg-secondary', height: 'h-22', hoverHeight: 'hover:h-24', stripe: 'bg-secondary-fixed-variant/40', stripeWidth: 'w-[3px]' },
      { id: '4', title: 'Bumi Manusia', color: 'bg-tertiary-fixed-dim', height: 'h-16', hoverHeight: 'hover:h-18', stripe: 'bg-tertiary/30', stripeWidth: 'w-[2.5px]' },
      { id: '5', title: 'Raden Mandasia', color: 'bg-surface-container-highest', height: 'h-20', hoverHeight: 'hover:h-22', stripe: 'bg-primary/20', stripeWidth: 'w-[2.5px]' },
      { id: '6', title: 'Gadis Kretek', color: 'bg-primary-dark', height: 'h-15', hoverHeight: 'hover:h-17', stripe: 'bg-primary/40', stripeWidth: 'w-[3px]' },
      { id: '7', title: 'Sirkus Pohon', color: 'bg-secondary-container', height: 'h-21', hoverHeight: 'hover:h-23', stripe: 'bg-secondary/40', stripeWidth: 'w-[3px]' },
      { id: '8', title: 'Segi Tiga', color: 'bg-rose/70', height: 'h-17', hoverHeight: 'hover:h-19', stripe: 'bg-[#7e4542]/40', stripeWidth: 'w-[2px]' }
    ]
  }
})
</script>

<template>
  <div class="flex flex-col justify-end h-28 relative pt-2 w-full">
    <!-- Spines Container -->
    <div class="flex items-end justify-between px-3 gap-1.5 h-20 w-full overflow-hidden">
      <div
        v-for="item in books"
        :key="item.id"
        :title="item.title"
        class="w-4 rounded-t-sm relative transition-all duration-300 group cursor-pointer shadow-sm flex-1 max-w-[20px]"
        :class="[item.color, item.height, item.hoverHeight]"
      >
        <!-- Spine Inner Shadow / Fold Stripe -->
        <div class="absolute inset-y-0 left-0" :class="[item.stripe, item.stripeWidth || 'w-[2.5px]']"></div>
        
        <!-- Tooltip on hover -->
        <div class="absolute -top-7 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-on-surface text-surface text-[10px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 shadow-md">
          {{ item.title }}
        </div>
      </div>
    </div>
    <!-- Wooden Shelf Base Bar -->
    <div class="h-2.5 w-full bg-[#E5DFD3] rounded-sm shadow-[0_2px_4px_rgba(26,51,49,0.08)] border-t border-[#D9D1C1] flex items-center px-1">
      <div class="w-full h-[1px] bg-white/40"></div>
    </div>
  </div>
</template>
