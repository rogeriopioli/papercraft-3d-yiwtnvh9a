import { createContext, useContext, useState, ReactNode, useEffect, useCallback } from 'react'
import { Product } from '@/data/products'
import pb from '@/lib/pocketbase/client'

interface ProductContextType {
  products: Product[]
  isLoading: boolean
  addProduct: (product: Omit<Product, 'id'>) => Promise<void>
  updateProduct: (id: string, product: Partial<Product>) => Promise<void>
  deleteProduct: (id: string) => Promise<void>
  fetchProducts: () => Promise<void>
}

const ProductContext = createContext<ProductContextType | undefined>(undefined)

export function ProductProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasFetched, setHasFetched] = useState(false)

  const fetchProducts = useCallback(async () => {
    setIsLoading(true)
    try {
      const records = await pb.collection('products').getFullList()
      const formatted = records.map((r) => ({
        id: r.id,
        title: r.title,
        price: r.price,
        category: r.category,
        difficulty: r.difficulty,
        images: r.images || [],
        video: r.video || '',
        description: r.description,
        specs: r.specs || { sheets: 0, time: '', dimensions: '' },
        rating: r.rating || 0,
        isNew: r.isNew || false,
        isBestSeller: r.isBestSeller || false,
        tags: r.tags || [],
      })) as Product[]
      setProducts(formatted)
      setHasFetched(true)
    } catch (error) {
      console.error('Error fetching products:', error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    if (!hasFetched) fetchProducts()
  }, [hasFetched, fetchProducts])

  const addProduct = async (product: Omit<Product, 'id'>) => {
    const newProd = await pb.collection('products').create(product)
    setProducts((prev) => [newProd as unknown as Product, ...prev])
  }

  const updateProduct = async (id: string, product: Partial<Product>) => {
    const updated = await pb.collection('products').update(id, product)
    setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, ...updated } : p)))
  }

  const deleteProduct = async (id: string) => {
    await pb.collection('products').delete(id)
    setProducts((prev) => prev.filter((p) => p.id !== id))
  }

  return (
    <ProductContext.Provider
      value={{ products, isLoading, addProduct, updateProduct, deleteProduct, fetchProducts }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export default function useProductStore() {
  const context = useContext(ProductContext)
  if (context === undefined) {
    throw new Error('useProductStore must be used within a ProductProvider')
  }
  return context
}
