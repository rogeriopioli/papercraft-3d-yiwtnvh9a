import { Link } from 'react-router-dom'
import { Star, Heart } from 'lucide-react'
import { Product } from '@/data/products'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import useCartStore from '@/stores/useCartStore'
import useWishlistStore from '@/stores/useWishlistStore'
import { cn } from '@/lib/utils'

interface ProductCardProps {
  product: Product
  className?: string
}

export default function ProductCard({ product, className }: ProductCardProps) {
  const { addItem } = useCartStore()
  const { hasItem, toggleItem } = useWishlistStore()
  const { toast } = useToast()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product)
    toast({
      title: 'Adicionado ao carrinho!',
      description: `${product.title} foi adicionado com sucesso.`,
      duration: 3000,
    })
  }

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    toggleItem(product.id)
  }

  const isFavorite = hasItem(product.id)

  return (
    <Link to={`/product/${product.id}`} className={cn('group block h-full', className)}>
      <Card className="overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 bg-white h-full flex flex-col rounded-2xl relative">
        <div className="relative aspect-square overflow-hidden bg-slate-100 p-4 flex items-center justify-center">
          <img
            src={product.images?.[0]}
            alt={product.title}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-105 rounded-xl shadow-sm"
          />

          {/* Top Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2 z-20">
            {product.isNew && (
              <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white border-none rounded-full px-3">
                Novo
              </Badge>
            )}
            {product.isBestSeller && (
              <Badge className="bg-orange-500 hover:bg-orange-600 text-white border-none rounded-full px-3">
                Top
              </Badge>
            )}
          </div>

          {/* Interactive Heart Icon */}
          <button
            onClick={handleToggleWishlist}
            className="absolute top-3 right-3 p-2.5 bg-white/90 backdrop-blur-sm rounded-full text-slate-300 hover:text-red-500 hover:bg-white transition-all z-20 shadow-sm hover:scale-110"
            aria-label="Favoritar"
          >
            <Heart
              className={cn('w-5 h-5 transition-colors', {
                'fill-red-500 text-red-500': isFavorite,
              })}
            />
          </button>
        </div>

        <CardContent className="p-5 flex flex-col flex-1 relative z-10 bg-white">
          <div className="flex justify-between items-start mb-2 gap-2">
            <h3 className="font-heading font-bold text-lg leading-tight text-slate-900 line-clamp-2">
              {product.title}
            </h3>
          </div>

          <div className="flex items-center gap-1.5 w-fit px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs font-bold mb-3 border border-blue-100">
            <Star className="w-3.5 h-3.5 fill-current" />
            {product.rating || '4.5'}
          </div>

          <p className="text-sm text-slate-500 mb-4 font-medium">{product.category}</p>

          <div className="mt-auto flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="font-black text-2xl text-primary">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </span>
            </div>
            <Button
              className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl h-12 text-base font-bold shadow-sm hover:shadow-md transition-all active:scale-95"
              onClick={handleAddToCart}
            >
              Adicionar ao carrinho
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
