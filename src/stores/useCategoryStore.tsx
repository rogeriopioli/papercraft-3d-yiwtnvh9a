import { createContext, useContext, useState, ReactNode, useEffect, useCallback } from 'react'
import { Category } from '@/data/products'
import pb from '@/lib/pocketbase/client'

interface CategoryContextType {
  categories: Category[]
  isLoading: boolean
  addCategory: (name: string) => Promise<void>
  updateCategory: (id: string, name: string) => Promise<void>
  deleteCategory: (id: string) => Promise<void>
  fetchCategories: () => Promise<void>
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined)

export function CategoryProvider({ children }: { children: ReactNode }) {
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasFetched, setHasFetched] = useState(false)

  const fetchCategories = useCallback(async () => {
    setIsLoading(true)
    try {
      const records = await pb.collection('categories').getFullList()
      const formatted = records.map((r) => ({
        id: r.id,
        name: r.name,
      })) as Category[]
      setCategories(formatted)
      setHasFetched(true)
    } catch (error) {
      console.error('Error fetching categories:', error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    if (!hasFetched) fetchCategories()
  }, [hasFetched, fetchCategories])

  const addCategory = async (name: string) => {
    const newCat = await pb.collection('categories').create({ name })
    setCategories((prev) => [...prev, newCat as unknown as Category])
  }

  const updateCategory = async (id: string, name: string) => {
    const updated = await pb.collection('categories').update(id, { name })
    setCategories((prev) => prev.map((c) => (c.id === id ? (updated as unknown as Category) : c)))
  }

  const deleteCategory = async (id: string) => {
    await pb.collection('categories').delete(id)
    setCategories((prev) => prev.filter((c) => c.id !== id))
  }

  return (
    <CategoryContext.Provider
      value={{
        categories,
        isLoading,
        addCategory,
        updateCategory,
        deleteCategory,
        fetchCategories,
      }}
    >
      {children}
    </CategoryContext.Provider>
  )
}

export default function useCategoryStore() {
  const context = useContext(CategoryContext)
  if (context === undefined) {
    throw new Error('useCategoryStore must be used within a CategoryProvider')
  }
  return context
}
