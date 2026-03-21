import pb from '@/lib/pocketbase/client'

export interface SupportMessageData {
  id?: string
  name: string
  email: string
  subject: string
  message: string
  created?: string
}

export const createSupportMessage = async (data: SupportMessageData) => {
  return pb.collection('support_messages').create(data)
}

export const getSupportMessages = async () => {
  return pb.collection('support_messages').getFullList<SupportMessageData>({ sort: '-created' })
}
