import {
  keepPreviousData,
  useInfiniteQuery,
  useQuery,
  type QueryKey,
  type UseInfiniteQueryOptions,
  type UseQueryOptions
} from '@tanstack/vue-query'

type QueryOptions<T> = {
  queryKey: QueryKey
  queryFn: () => Promise<T>
  options?: UseQueryOptions<T>
}

function useFetch<T>({ queryKey, queryFn, options }: QueryOptions<T>) {
  return useQuery({
    queryKey,
    queryFn,
    placeholderData: keepPreviousData,
    ...options
  })
}

function useFetchInfinite<T>({
  queryKey,
  queryFn,
  getNextPageParam,
  initialPageParam
}: UseInfiniteQueryOptions<T>) {
  return useInfiniteQuery({
    queryKey,
    queryFn,
    getNextPageParam,
    initialPageParam,
    placeholderData: keepPreviousData
  })
}

export { useFetch, useFetchInfinite }
