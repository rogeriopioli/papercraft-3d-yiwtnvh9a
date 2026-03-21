import pb from '@/lib/pocketbase/client'

export interface OrderItem {
  name: string
  quantity: number
}

export interface Order {
  id: string
  order_number?: string
  status: 'pending' | 'paid' | 'cancelled'
  total_amount: number
  user?: string
  coupon_used?: string
  items?: OrderItem[]
  created: string
  updated: string
  expand?: any
}

export const getOrders = async () => {
  return pb.collection('orders').getFullList<Order>({
    sort: '-created',
    expand: 'coupon_used,user',
  })
}
