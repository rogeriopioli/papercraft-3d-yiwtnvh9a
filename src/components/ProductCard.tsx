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
  const hasSecondaryImage = product.images && product.images.length > 1

  return (
    <Link to={`/product/${product.id}`} className={cn('group/card block h-full', className)}>
      <Card className="overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 bg-white h-full flex flex-col rounded-2xl relative">
        {/* Strictly separated image container with aspect ratio to prevent layout jumping */}
        <div className="relative w-full aspect-[4/3] sm:aspect-square overflow-hidden bg-slate-50 shrink-0 group/img">
          {/* Primary Image */}
          <img
            src={product.images?.[0] || 'https://img.usecurling.com/p/400/400?q=papercraft'}
            alt={product.title}
            className={cn(
              'absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out',
              hasSecondaryImage
                ? 'opacity-100 group-hover/img:opacity-0'
                : 'group-hover/img:scale-105 opacity-100',
            )}
          />

          {/* Secondary Image */}
          {hasSecondaryImage && (
            <img
              src={product.images[1]}
              alt={`${product.title} vista 2`}
              className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover/img:opacity-100 group-hover/img:scale-105"
            />
          )}

          {/* Top Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
            {product.isBestSeller && (
              <Badge className="bg-orange-500 hover:bg-orange-600 text-white border-none rounded-full px-3 shadow-sm font-bold">
                Top
              </Badge>
            )}
            {product.isNew && (
              <Badge className="bg-emerald-500 hover:bg-emerald-600 text-white border-none rounded-full px-3 shadow-sm font-bold">
                Novo
              </Badge>
            )}
          </div>

          {/* Interactive Heart Icon */}
          <button
            onClick={handleToggleWishlist}
            className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full text-slate-300 hover:text-red-500 hover:bg-white transition-all z-10 shadow-sm hover:scale-110"
            aria-label="Favoritar"
          >
            <Heart
              className={cn('w-5 h-5 transition-colors', {
                'fill-red-500 text-red-500': isFavorite,
              })}
            />
          </button>
        </div>

        {/* Content Area - Flex column layout guarantees no overlapping */}
        <CardContent className="p-5 flex flex-col flex-1 bg-white relative z-20">
          <h3 className="font-heading font-bold text-lg leading-tight text-slate-900 line-clamp-2 mb-2 group-hover/card:text-primary transition-colors">
            {product.title}
          </h3>

          <div className="flex items-center gap-1.5 w-fit px-2 py-1 bg-blue-50 text-blue-600 rounded-md text-xs font-bold mb-3 border border-blue-100">
            <Star className="w-3.5 h-3.5 fill-current" />
            {product.rating || '4.5'}
          </div>

          <p className="text-sm text-slate-500 mb-4 font-medium">{product.category}</p>

          <div className="mt-auto flex flex-col gap-4">
            <span className="font-black text-2xl text-primary">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </span>
            <Button
              className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl h-12 text-base font-bold shadow-sm hover:shadow-md transition-all active:scale-95 relative z-30"
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
