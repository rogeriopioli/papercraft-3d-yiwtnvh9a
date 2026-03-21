import { useState, useEffect } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { Search, ShoppingBag, Heart, Hexagon, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
  SheetDescription,
} from '@/components/ui/sheet'
import useCartStore from '@/stores/useCartStore'
import useWishlistStore from '@/stores/useWishlistStore'
import useProductStore from '@/stores/useProductStore'
import CartDrawer from './CartDrawer'

export default function Header() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const { totalItems } = useCartStore()
  const { items: wishlistItems } = useWishlistStore()
  const { products } = useProductStore()

  const [searchValue, setSearchValue] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const validWishlistItems = wishlistItems.filter((id) => products.some((p) => p.id === id))

  useEffect(() => {
    setSearchValue(searchParams.get('search') || '')
  }, [searchParams])

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    if (searchValue.trim()) {
      navigate(`/?search=${encodeURIComponent(searchValue.trim())}`)
    } else {
      navigate('/')
    }
  }

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 h-16 lg:h-20 flex items-center justify-between gap-4">
        {/* Left - Logo */}
        <Link to="/" className="flex items-center gap-2 group shrink-0 mr-auto">
          <div className="bg-primary text-white p-2 md:p-2.5 rounded-xl group-hover:scale-105 transition-transform shadow-md">
            <Hexagon className="w-5 h-5 md:w-6 md:h-6 fill-current" />
          </div>
          <span className="font-heading font-black text-xl md:text-2xl text-slate-800 tracking-tight">
            PapercraftRP
          </span>
        </Link>

        {/* Center - Search (Desktop) */}
        <div className="hidden lg:flex flex-1 max-w-md mx-4">
          <form onSubmit={handleSearch} className="relative w-full">
            <button
              type="submit"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>
            <Input
              type="search"
              placeholder="Buscar modelos..."
              className="w-full pl-11 h-11 rounded-full bg-slate-50 border-slate-200 focus-visible:ring-primary shadow-inner font-medium"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </form>
        </div>

        {/* Right - Navigation & Icons */}
        <div className="flex items-center gap-2 md:gap-4 shrink-0">
          <nav className="hidden md:flex items-center gap-6 font-bold text-[15px] text-slate-600 mr-2">
            <Link to="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/como-montar" className="hover:text-primary transition-colors">
              Como Montar
            </Link>
            <Link to="/sobre" className="hover:text-primary transition-colors">
              Sobre
            </Link>
          </nav>

          <div className="flex items-center gap-1">
            <Link to="/wishlist">
              <Button
                variant="ghost"
                size="icon"
                className="relative hidden sm:flex hover:bg-red-50 hover:text-red-500 rounded-xl transition-colors"
              >
                <Heart className="w-5 h-5 text-slate-600" />
                {validWishlistItems.length > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-[10px] animate-in zoom-in bg-red-500 text-white border-white">
                    {validWishlistItems.length}
                  </Badge>
                )}
              </Button>
            </Link>

            <CartDrawer>
              <Button
                variant="ghost"
                size="icon"
                className="relative hover:bg-primary/10 hover:text-primary rounded-xl transition-colors"
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

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden rounded-xl">
                <Menu className="w-6 h-6 text-slate-700" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <SheetHeader className="mb-8">
                <SheetTitle className="text-left flex items-center gap-2">
                  <Hexagon className="w-6 h-6 text-primary fill-current" /> PapercraftRP
                </SheetTitle>
                <SheetDescription className="sr-only">Menu de navegação mobile.</SheetDescription>
              </SheetHeader>
              <form
                onSubmit={(e) => {
                  handleSearch(e)
                  setMobileMenuOpen(false)
                }}
                className="relative w-full mb-8 lg:hidden"
              >
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input
                  type="search"
                  placeholder="Buscar modelos..."
                  className="w-full pl-9 h-12 rounded-xl bg-slate-50 font-medium"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </form>
              <nav className="flex flex-col gap-6 font-bold text-lg text-slate-700">
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                  Home
                </Link>
                <Link to="/como-montar" onClick={() => setMobileMenuOpen(false)}>
                  Como Montar
                </Link>
                <Link to="/sobre" onClick={() => setMobileMenuOpen(false)}>
                  Sobre
                </Link>
                <Link
                  to="/wishlist"
                  className="flex items-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Heart className="w-5 h-5" /> Lista de Desejos
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
