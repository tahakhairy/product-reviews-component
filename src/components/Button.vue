<template>
  <button
    v-bind="$attrs"
    class="self-center px-5 py-3 shadow-sm rounded-[4px] border border-border-primary font-medium text-sm bg-bg-primary hover:bg-bg-primary-hover transition-all duration-300"
    :type
    @click="emit('action')"
    :disabled="loading"
  >
    {{ loading ? 'Laoding...' : text }}
  </button>
</template>

<script setup lang="ts">
interface ButtonProps {
  text: string
  type: 'submit' | 'button' | 'reset' | undefined
  loading?: boolean
}

defineProps<ButtonProps>()

const emit = defineEmits<{
  (e: 'action'): void
}>()
</script>

<style scoped></style>
