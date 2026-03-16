import React, { createContext, useContext, useState, ReactNode } from 'react'
import { Product } from '@/data/products'

export interface CartItem extends Product {
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addItem: (product: Product) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  totalItems: number
  subtotal: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const addItem = (product: Product) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeItem = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== productId))
  }

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) return removeItem(productId)
    setItems((prev) => prev.map((item) => (item.id === productId ? { ...item, quantity } : item)))
  }

  const clearCart = () => setItems([])

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0)
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{ items, addItem, removeItem, updateQuantity, clearCart, totalItems, subtotal }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default function useCartStore() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCartStore must be used within a CartProvider')
  }
  return context
}
