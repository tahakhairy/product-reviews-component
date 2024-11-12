<script setup lang="ts">
import CloseIcon from './icons/CloseIcon.vue'
import OverallRating from './OverallRating.vue'
import ReviewsList from './ReviewsList.vue'
import { ref } from 'vue'
import Button from './Button.vue'
import { useFetchInfiniteReviews } from '@/composables/useFetchInfiniteReviews'
import SmileIcon from './icons/SmileIcon.vue'

const filter = ref<number>()

const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } =
  useFetchInfiniteReviews(filter)

const filterByRating = (ratingValue: number) => {
  filter.value = ratingValue
}

const resetFilter = () => {
  filter.value = undefined
}
</script>

<template>
  <Teleport to="body">
    <div
      class="w-full bg-bg-primary-invert/60 flex justify-center items-center absolute inset-0 overflow-hidden px-4"
    >
      <div
        class="bg-bg-primary w-full lg:w-2/3 h-[85%] lg:h-[75%] rounded-lg p-4 flex flex-col gap-2"
      >
        <div class="self-end flex justify-center items-center">
          <button
            type="button"
            class="cursor-pointer w-8 h-8 inline-flex justify-center items-center transition-all duration-300 rounded-md focus:ring focus:ring-border-primary"
          >
            <CloseIcon />
            <span class="sr-only">Close</span>
          </button>
        </div>
        <div
          class="w-full overflow-auto flex flex-col lg:flex-row gap-6 pt-6 h-full"
        >
          <div class="min-w-[40%]">
            <OverallRating
              :data="data?.pages[0]"
              :has-filter="filter !== undefined"
              @filter="(value) => filterByRating(value)"
              @reset="resetFilter"
            />
          </div>

          <div class="grow lg:overflow-auto flex" v-if="data">
            <div class="w-full" v-if="!isLoading && data?.pages[0].data.length">
              <div class="mb-8" v-for="page in data?.pages">
                <ReviewsList v-if="page.data.length" :reviews="page?.data" />
              </div>

              <Button
                v-if="hasNextPage"
                class="w-full"
                :text="`Show more reviews`"
                type="button"
                :loading="isLoading || isFetchingNextPage"
                @action="fetchNextPage"
              />
            </div>

            <div
              class="grow w-full h-full text-center flex flex-col gap-4 justify-center items-center"
              v-else
            >
              <span
                class="flex justify-center items-center w-12 h-12 shadow-md rounded-full"
              >
                <SmileIcon class="w-6 h-6 fill-bg-brand-primary" />
              </span>
              <div class="flex flex-col gap-2">
                <span class="font-medium text-lg">No reveiws yet!</span>
                <span class="text-sm">Be the first to review this product</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped></style>
