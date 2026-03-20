import { useState, useEffect } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { Search, ShoppingBag, Heart, Hexagon, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import useCartStore from '@/stores/useCartStore'
import useWishlistStore from '@/stores/useWishlistStore'
import useProductStore from '@/stores/useProductStore'
import useAuthStore from '@/stores/useAuthStore'
import CartDrawer from './CartDrawer'

export default function Header() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const { totalItems } = useCartStore()
  const { items: wishlistItems } = useWishlistStore()
  const { products } = useProductStore()
  const { isAuthenticated } = useAuthStore()

  const [searchValue, setSearchValue] = useState('')

  const validWishlistItems = wishlistItems.filter((id) => products.some((p) => p.id === id))

  useEffect(() => {
    setSearchValue(searchParams.get('search') || '')
  }, [searchParams])

  const handleSearch = () => {
    if (searchValue.trim()) {
      navigate(`/?search=${encodeURIComponent(searchValue.trim())}`)
    } else {
      navigate('/')
    }
  }

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        {/* Top Row: Navigation, Centered Logo, Actions */}
        <div className="flex items-center justify-between mb-4">
          {/* Left - Navigation / Admin Shield */}
          <div className="w-1/3 flex items-center gap-4">
            {isAuthenticated ? (
              <Link
                to="/admin"
                className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                title="Acessar Admin"
              >
                <div className="bg-blue-50 p-2 rounded-xl">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="hidden sm:inline">Painel Admin</span>
              </Link>
            ) : (
              <Link
                to="/admin"
                className="text-slate-400 hover:text-primary transition-colors flex items-center gap-2"
                title="Acessar Admin"
              >
                <ShieldCheck className="w-5 h-5" />
              </Link>
            )}
          </div>

          {/* Center - Logo */}
          <div className="w-1/3 flex justify-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-primary text-white p-2.5 rounded-xl group-hover:scale-105 transition-transform shadow-md">
                <Hexagon className="w-6 h-6 fill-current" />
              </div>
              <span className="font-heading font-black text-2xl text-slate-800 tracking-tight hidden sm:block">
                PapercraftRP
              </span>
            </Link>
          </div>

          {/* Right - Actions */}
          <div className="w-1/3 flex justify-end gap-2">
            <Link to="/wishlist">
              <Button
                variant="ghost"
                size="icon"
                className="relative hidden sm:flex hover:bg-blue-50 hover:text-primary rounded-xl"
              >
                <Heart className="w-5 h-5 text-slate-600" />
                {validWishlistItems.length > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-[10px] animate-in zoom-in bg-primary text-white border-white">
                    {validWishlistItems.length}
                  </Badge>
                )}
              </Button>
            </Link>

            <CartDrawer>
              <Button
                variant="ghost"
                size="icon"
                className="relative hover:bg-blue-50 hover:text-primary rounded-xl"
              >
                <ShoppingBag className="w-5 h-5 text-slate-600" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-[10px] animate-in zoom-in bg-primary text-white border-white">
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </CartDrawer>
          </div>
        </div>

        {/* Bottom Row: Centered Search Bar */}
        <div className="max-w-xl mx-auto pb-1">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSearch()
            }}
            className="relative"
          >
            <button
              type="submit"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors z-10"
              aria-label="Buscar"
            >
              <Search className="w-5 h-5" />
            </button>
            <Input
              type="search"
              placeholder="Buscar modelos, animais, decoração..."
              className="w-full pl-12 h-12 rounded-full bg-slate-50 border-slate-200 focus-visible:ring-primary focus-visible:bg-white shadow-inner transition-all text-base"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </form>
        </div>
      </div>
    </header>
  )
}
