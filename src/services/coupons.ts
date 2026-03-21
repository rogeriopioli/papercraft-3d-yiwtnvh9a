import pb from '@/lib/pocketbase/client'

export interface Coupon {
  id: string
  code: string
  discount_type: 'percentage' | 'fixed'
  value: number
  usage_count: number
  is_active: boolean
  expires_at: string
  created: string
  updated: string
}

export const getCoupons = async () => {
  return pb.collection('coupons').getFullList<Coupon>({
    sort: '-usage_count',
  })
}

export const createCoupon = async (data: Partial<Coupon>) => {
  return pb.collection('coupons').create<Coupon>(data)
}

export const updateCoupon = async (id: string, data: Partial<Coupon>) => {
  return pb.collection('coupons').update<Coupon>(id, data)
}

export const deleteCoupon = async (id: string) => {
  return pb.collection('coupons').delete(id)
}
