import pb from '@/lib/pocketbase/client'

export interface User {
  id: string
  email: string
  name: string
  created: string
}

export const getUsers = async () => {
  return pb.collection('users').getFullList<User>({
    sort: '-created',
  })
}
