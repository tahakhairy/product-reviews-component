<script setup lang="ts">
import StarIcon from './icons/StarIcon.vue'
import { computed, ref, type ComputedRef } from 'vue'
import type { ProductReviewsResponse } from '@/types'
import Button from './Button.vue'

type Ratings = {
  title: string
  value: ComputedRef<number>
  color: string
}[]

const props = defineProps<{
  data: ProductReviewsResponse | undefined
  hasFilter?: boolean
}>()

const calcRatingPercentage = (ratingValue: number): number => {
  const count =
    props.data?.aggregate.counts.find((item) => item.rating === ratingValue)
      ?.count ?? 0

  const total = props.data?.aggregate.total ?? 1

  const ratio = count / total
  return Math.round(isNaN(ratio) ? 0 : ratio * 100)
}

const ratings = ref<Ratings>([
  {
    title: 'Excellent',
    value: computed(() => calcRatingPercentage(5)),
    color: 'bg-green-600'
  },
  {
    title: 'Good',
    value: computed(() => calcRatingPercentage(4)),
    color: 'bg-green-500'
  },
  {
    title: 'Average',
    value: computed(() => calcRatingPercentage(3)),
    color: 'bg-yellow-300'
  },
  {
    title: 'Below Average',
    value: computed(() => calcRatingPercentage(2)),
    color: 'bg-yellow-500'
  },
  {
    title: 'Poor',
    value: computed(() => calcRatingPercentage(1)),
    color: 'bg-red-600'
  }
])

const emit = defineEmits<{
  (e: 'filter', rating: number): void
  (e: 'reset'): void
}>()
</script>

<template>
  <div class="w-full px-6 flex flex-col gap-8">
    <div class="flex flex-col gap-2">
      <h3 class="font-medium text-xl">Overall Rating</h3>
      <div class="flex gap-2 items-center flex-nowrap">
        <p class="font-semibold text-text-primary">
          {{ data?.aggregate.rating ?? 0 }}
        </p>
        <span class="flex gap-2">
          <StarIcon
            v-for="i in 5"
            :class="[
              i <= data?.aggregate.rating!
                ? 'fill-warning'
                : 'fill-bg-secondary'
            ]"
          />
        </span>
        <p
          v-if="data?.aggregate.total"
          class="text-sm text-text-secondary font-mediums"
        >
          Based on {{ data?.aggregate.total }} reviews
        </p>
      </div>
    </div>

    <div class="w-full flex flex-col gap-3">
      <div
        class="flex gap-3 items-center"
        v-for="(rating, index) in ratings"
        :key="`${rating.title}-${rating.value}`"
      >
        <button
          class="inline-flex min-w-[120px] max-w-fit disabled:text-text-disabled"
        >
          <span
            class="hover:text-text-primary-hover font-medium text-text-brand"
            @click="emit('filter', Math.abs(index + 1 - 6))"
            >{{ rating.title }}
          </span>
        </button>
        <span class="grow bg-bg-secondary h-2 rounded-md relative">
          <span
            class="absolute inset-0 w-0 h-full rounded-md !transition-all !duration-500"
            :class="`${rating.color}`"
            :style="{
              width: `${rating.value}% !important`
            }"
          >
          </span>
        </span>

        <span class="text-text-tertiary text-right min-w-[40px]"
          >{{ rating.value }}%
        </span>
      </div>
    </div>

    <div class="self-center flex gap-5">
      <Button
        v-if="hasFilter"
        class="border-0 text-bg-brand-primary text-lg"
        text="Clear Filter"
        type="submit"
        @click="emit('reset')"
      />
      <Button text="Write Review" type="submit" />
    </div>
  </div>
</template>

<style scoped></style>
