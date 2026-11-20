<script setup>
import { ref } from 'vue'
import BaseButton from './BaseButton.vue'

const props = defineProps({
  placeholder: {
    type: String,
    default: 'Tulis tanggapan atau catatan renunganmu...'
  },
  submitLabel: {
    type: String,
    default: 'Kirim Balasan'
  }
})

const emit = defineEmits(['submitComment'])

const commentText = ref('')

const handleSubmit = () => {
  if (!commentText.value.trim()) return
  emit('submitComment', commentText.value)
  commentText.value = ''
}
</script>

<template>
  <div class="bg-surface rounded-2xl border border-border-subtle p-4 sm:p-5 shadow-[0_2px_12px_rgba(26,51,49,0.04)]">
    <div class="flex items-start gap-3">
      <img
        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
        alt="Avatar Pengguna"
        class="w-8 h-8 rounded-full object-cover ring-1 ring-border-subtle hidden sm:block"
      />
      <div class="flex-1 space-y-3">
        <textarea
          v-model="commentText"
          rows="3"
          :placeholder="placeholder"
          class="w-full p-3 rounded-xl bg-background border border-border-subtle text-sm text-on-surface placeholder:text-on-surface-variant/60 focus:bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none font-sans"
        ></textarea>

        <div class="flex items-center justify-between gap-2 pt-1">
          <div class="flex items-center gap-1 text-on-surface-variant text-xs">
            <span class="material-symbols-outlined text-[16px]">format_italic</span>
            <span class="material-symbols-outlined text-[16px]">format_quote</span>
            <span class="hidden sm:inline text-[11px] ml-1">Mendukung kesantunan berbahasa</span>
          </div>

          <BaseButton
            @click="handleSubmit"
            :disabled="!commentText.trim()"
            size="sm"
          >
            {{ submitLabel }}
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>
