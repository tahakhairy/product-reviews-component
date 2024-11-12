<template>
  <div class="flex flex-col gap-3 me-4">
    <ul class="flex flex-col gap-8" v-if="reviews">
      <ReviewItem v-for="item in reviews" :review="item" />
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { Data } from '@/types'
import ReviewItem from './ReviewItem.vue'

defineProps<{
  reviews: Data[] | undefined
}>()
</script>

<style scoped></style>
