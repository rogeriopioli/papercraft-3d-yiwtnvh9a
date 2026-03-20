import { createContext, useContext, useState, ReactNode, useEffect, useCallback } from 'react'
import { Product } from '@/data/products'
import { pbMock } from '@/lib/api'

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
      const data = await pbMock.collection('products').getFullList()
      setProducts(data)
      setHasFetched(true)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    if (!hasFetched) fetchProducts()
  }, [hasFetched, fetchProducts])

  const addProduct = async (product: Omit<Product, 'id'>) => {
    const newProd = await pbMock.collection('products').create(product)
    setProducts((prev) => [newProd, ...prev])
  }

  const updateProduct = async (id: string, product: Partial<Product>) => {
    const updated = await pbMock.collection('products').update(id, product)
    setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, ...updated } : p)))
  }

  const deleteProduct = async (id: string) => {
    await pbMock.collection('products').delete(id)
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
