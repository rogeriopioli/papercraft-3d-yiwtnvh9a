import pb from '@/lib/pocketbase/client'

export interface Setting {
  id: string
  key: string
  value: any
  created: string
  updated: string
}

export const getSetting = async (key: string) => {
  try {
    return await pb.collection('settings').getFirstListItem<Setting>(`key="${key}"`)
  } catch {
    return null
  }
}

export const saveSetting = async (key: string, value: any) => {
  const existing = await getSetting(key)
  if (existing) {
    return pb.collection('settings').update<Setting>(existing.id, { value })
  }
  return pb.collection('settings').create<Setting>({ key, value })
}
