<template>
  <li class="flex flex-col gap-4">
    <div class="flex w-full justify-between items-start">
      <div class="flex justify-center items-center gap-4">
        <div class="w-12 h-12 rounded-full">
          <img
            class="w-full h-full object-cover rounded-full"
            v-if="review.user.avatar_url"
            :src="review.user.avatar_url"
            :alt="`${review.user.name}-avatar`"
          />
          <span
            v-else
            class="h-full w-full flex justify-center items-center bg-bg-secondary uppercase text-text-secondary text-lg font-medium rounded-full"
          >
            {{ getInitials(review.user.name) }}
          </span>
        </div>
        <div class="flex flex-col gap-1">
          <p class="font-semibold">{{ review.user.name }}</p>
          <span class="flex gap-1">
            <StarIcon
              class="fill-warning"
              v-for="i in 5"
              :class="[
                i <= review.rating ? 'fill-warning' : '!fill-bg-secondary'
              ]"
            />
          </span>
        </div>
      </div>

      <span class="text-xs text-text-secondary">{{
        formatDate(review.created_at)
      }}</span>
    </div>

    <p class="text-text-tertiary font-normal">{{ review.content }}</p>
  </li>
</template>

<script setup lang="ts">
import type { Data } from '@/types'
import { formatDate, getInitials } from '@/utils'
import StarIcon from './icons/StarIcon.vue'

defineProps<{
  review: Data
}>()
</script>

<style scoped></style>
