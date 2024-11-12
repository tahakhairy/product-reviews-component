export interface ProductReviewsResponse {
  aggregate: Aggregate
  data: Data[]
  pagination: Pagination
}

export interface Aggregate {
  counts: Count[]
  rating: number
  total: number
}

export interface Count {
  count: number
  rating: number
}

export interface Data {
  rating: number
  content?: string | null
  created_at: string
  user: User
}

export interface User {
  name: string
  user_id: string
  avatar_url?: string | null
}

export interface Pagination {
  has_more: boolean
  page: number
  per_page: number
  total: number
}
