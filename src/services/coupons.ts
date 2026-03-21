import pb from '@/lib/pocketbase/client'

export interface Coupon {
  id: string
  code: string
  discount_type: 'percentage' | 'fixed'
  value: number
  usage_count: number
  created: string
  updated: string
}

export const getCoupons = async () => {
  return pb.collection('coupons').getFullList<Coupon>({
    sort: '-usage_count',
  })
}
