import InterceptorHelper from '@/InterceptorHelper'
import { useFetchInfinite } from './useFetch'
import type { Ref } from 'vue'
import type { ProductReviewsResponse } from '@/types'

export function useFetchInfiniteReviews(filter: Ref<number | undefined>) {
  const { data, isFetchingNextPage, isLoading, hasNextPage, fetchNextPage } =
    useFetchInfinite<ProductReviewsResponse>({
      queryKey: ['reviews', filter],
      initialPageParam: 1,
      queryFn: async ({ pageParam }) => {
        return await InterceptorHelper.intercept('reviews', {
          page: pageParam as number,
          rating: filter.value!
        })
      },
      getNextPageParam: (response) => {
        return response.pagination.has_more
          ? response.pagination.page + 1
          : undefined
      },
      
    })

  return { data, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage }
}
