import { Link } from 'react-router-dom'
import { Search, ShoppingBag, User, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import useCartStore from '@/stores/useCartStore'
import CartDrawer from './CartDrawer'

export default function Header() {
  const { totalItems } = useCartStore()

  return (
    <header className="glass-header">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0 group">
          <div className="bg-primary text-primary-foreground p-2 rounded-lg group-hover:bg-secondary transition-colors">
            <Heart className="w-6 h-6 fill-current" />
          </div>
          <span className="text-heading font-bold text-xl hidden sm:block">PaperCraft Hub</span>
        </Link>

        {/* Search Bar - Center */}
        <div className="flex-1 max-w-xl hidden md:flex relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Buscar modelos 3D..."
            className="w-full pl-10 bg-muted/50 border-transparent focus-visible:ring-primary focus-visible:bg-background transition-all"
          />
        </div>

        {/* Navigation & Actions */}
        <div className="flex items-center gap-2 sm:gap-6 shrink-0">
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">
              Explorar
            </Link>
            <Link to="/" className="hover:text-primary transition-colors">
              Novidades
            </Link>
            <Link to="/" className="hover:text-primary transition-colors">
              Sobre
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="w-5 h-5 text-foreground" />
            </Button>

            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <User className="w-5 h-5 text-foreground" />
            </Button>

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
