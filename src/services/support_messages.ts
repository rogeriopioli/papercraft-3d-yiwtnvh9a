import pb from '@/lib/pocketbase/client'

export interface SupportMessageData {
  name: string
  email: string
  subject: string
  message: string
}

export const createSupportMessage = async (data: SupportMessageData) => {
  return pb.collection('support_messages').create(data)
}
