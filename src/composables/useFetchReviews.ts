import type { ProductReviewsResponse } from '@/types'
import { useFetch } from './useFetch'
import type { Ref } from 'vue'
import InterceptorHelper from '@/InterceptorHelper'

export function useFetchReviews(
  page: Ref<number>,
  perPage: Ref<number>,
  filter: Ref<number | undefined>
) {
  const { data, isLoading, isSuccess, isFetching } =
    useFetch<ProductReviewsResponse>({
      queryKey: ['reviews', page, perPage, filter],
      queryFn: async () => {
        return await InterceptorHelper.intercept<ProductReviewsResponse>(
          'reviews',
          {
            page: page.value,
            per_page: perPage.value,
            rating: filter.value!
          }
        )
      }
    })

  return { data, isLoading, isSuccess, isFetching }
}
