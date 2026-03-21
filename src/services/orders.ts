import pb from '@/lib/pocketbase/client'

export interface Order {
  id: string
  status: 'pending' | 'paid' | 'cancelled'
  total_amount: number
  user?: string
  coupon_used?: string
  created: string
  updated: string
  expand?: any
}

export const getOrders = async () => {
  return pb.collection('orders').getFullList<Order>({
    sort: '+created',
    expand: 'coupon_used',
  })
}
