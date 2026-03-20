import { createContext, useContext, useState, ReactNode, useEffect, useCallback } from 'react'
import { Category } from '@/data/products'
import { pbMock } from '@/lib/api'

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
      const data = await pbMock.collection('categories').getFullList()
      setCategories(data)
      setHasFetched(true)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    if (!hasFetched) fetchCategories()
  }, [hasFetched, fetchCategories])

  const addCategory = async (name: string) => {
    const newCat = await pbMock.collection('categories').create({ name })
    setCategories((prev) => [...prev, newCat])
  }

  const updateCategory = async (id: string, name: string) => {
    const updated = await pbMock.collection('categories').update(id, { name })
    setCategories((prev) => prev.map((c) => (c.id === id ? updated : c)))
  }

  const deleteCategory = async (id: string) => {
    await pbMock.collection('categories').delete(id)
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
