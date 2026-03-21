import pb from '@/lib/pocketbase/client'

export interface Subscriber {
  id?: string
  email: string
  coupon_sent: boolean
  coupon_used: boolean
}

export const createSubscriber = async (email: string) => {
  return pb.collection('subscribers').create({
    email,
    coupon_sent: true,
    coupon_used: false,
  })
}

export const getSubscriberByEmail = async (email: string) => {
  return pb.collection('subscribers').getFirstListItem(`email="${email}"`)
}

export const updateSubscriberCouponUsed = async (id: string) => {
  return pb.collection('subscribers').update(id, { coupon_used: true })
}
