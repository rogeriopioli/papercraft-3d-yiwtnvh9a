import pb from '@/lib/pocketbase/client'
import { Category } from '@/data/products'

export const getCategories = async () => {
  return pb.collection('categories').getFullList<Category>({
    sort: 'name',
  })
}

export const createCategory = async (data: Partial<Category>) => {
  return pb.collection('categories').create<Category>(data)
}

export const updateCategory = async (id: string, data: Partial<Category>) => {
  return pb.collection('categories').update<Category>(id, data)
}

export const deleteCategory = async (id: string) => {
  return pb.collection('categories').delete(id)
}
