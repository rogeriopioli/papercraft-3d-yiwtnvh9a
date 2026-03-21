import pb from '@/lib/pocketbase/client'

export interface ReviewData {
  product: string
  user?: string
  rating: number
  comment: string
}

export const createReview = async (data: ReviewData) => {
  return pb.collection('reviews').create(data)
}

export const getReviewsByProduct = async (productId: string) => {
  return pb.collection('reviews').getFullList({
    filter: `product="${productId}"`,
    sort: '-created',
    expand: 'user',
  })
}
