import { createContext, useContext, useState, ReactNode, useEffect } from 'react'

interface WishlistContextType {
  items: string[]
  toggleItem: (productId: string) => void
  hasItem: (productId: string) => boolean
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined)

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<string[]>(() => {
    const saved = localStorage.getItem('wishlist')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(items))
  }, [items])

  const toggleItem = (productId: string) => {
    setItems((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId],
    )
  }

  const hasItem = (productId: string) => items.includes(productId)

  return (
    <WishlistContext.Provider value={{ items, toggleItem, hasItem }}>
      {children}
    </WishlistContext.Provider>
  )
}

export default function useWishlistStore() {
  const context = useContext(WishlistContext)
  if (context === undefined) {
    throw new Error('useWishlistStore must be used within a WishlistProvider')
  }
  return context
}
