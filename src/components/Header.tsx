import { useState, useEffect } from 'react'
import { Link, useNavigate, useSearchParams, useLocation } from 'react-router-dom'
import { Search, ShoppingBag, User, Heart, Hexagon, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import useCartStore from '@/stores/useCartStore'
import useWishlistStore from '@/stores/useWishlistStore'
import useAuthStore from '@/stores/useAuthStore'
import useProductStore from '@/stores/useProductStore'
import CartDrawer from './CartDrawer'

export default function Header() {
  const navigate = useNavigate()
  const location = useLocation()
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
    <header className="glass-header border-b border-border/40 sticky top-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0 group">
          <div className="bg-primary text-primary-foreground p-2 rounded-lg group-hover:bg-secondary transition-colors">
            <Hexagon className="w-6 h-6 fill-current" />
          </div>
          <span className="text-heading font-bold text-xl hidden sm:block">PapercraftRP</span>
        </Link>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSearch()
          }}
          className="flex-1 max-w-xl hidden md:flex relative"
        >
          <button
            type="submit"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors z-10"
            aria-label="Buscar"
          >
            <Search className="w-4 h-4" />
          </button>
          <Input
            type="search"
            placeholder="Buscar modelos 3D..."
            className="w-full pl-10 bg-muted/50 border-transparent focus-visible:ring-primary focus-visible:bg-background transition-all"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </form>

        <div className="flex items-center gap-2 sm:gap-6 shrink-0">
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">
              Explorar
            </Link>
            <Link to="/como-montar" className="hover:text-primary transition-colors">
              Como Montar
            </Link>
            {isAuthenticated && (
              <Link
                to="/admin"
                className="text-primary hover:text-primary/80 transition-colors font-semibold flex items-center gap-1.5"
              >
                <ShieldCheck className="w-4 h-4" />
                Admin
              </Link>
            )}
            <Link to="/sobre" className="hover:text-primary transition-colors">
              Sobre
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => {
                if (location.pathname !== '/') {
                  navigate('/')
                } else {
                  document
                    .getElementById('products-section')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              <Search className="w-5 h-5 text-foreground" />
            </Button>

            <Link to="/wishlist">
              <Button variant="ghost" size="icon" className="relative hidden sm:flex">
                <Heart className="w-5 h-5 text-foreground" />
                {validWishlistItems.length > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-[10px] animate-in zoom-in bg-primary text-primary-foreground">
                    {validWishlistItems.length}
                  </Badge>
                )}
              </Button>
            </Link>

            <Link to="/profile">
              <Button variant="ghost" size="icon" className="hidden sm:flex">
                <User className="w-5 h-5 text-foreground" />
              </Button>
            </Link>

            <CartDrawer>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="w-5 h-5 text-foreground" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-[10px] animate-in zoom-in">
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </CartDrawer>
          </div>
        </div>
      </div>
    </header>
  )
}
