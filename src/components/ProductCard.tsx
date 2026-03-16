import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { Product } from '@/data/products'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import useCartStore from '@/stores/useCartStore'
import { cn } from '@/lib/utils'

interface ProductCardProps {
  product: Product
  className?: string
}

export default function ProductCard({ product, className }: ProductCardProps) {
  const { addItem } = useCartStore()
  const { toast } = useToast()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault() // Prevent navigating to product details
    addItem(product)
    toast({
      title: 'Adicionado ao carrinho!',
      description: `${product.title} foi adicionado com sucesso.`,
      duration: 3000,
    })
  }

  return (
    <Link to={`/product/${product.id}`} className={cn('group block', className)}>
      <Card className="overflow-hidden border-transparent shadow-subtle hover:shadow-elevation hover:-translate-y-1 transition-all duration-300 bg-card h-full flex flex-col">
        <div className="relative aspect-square overflow-hidden bg-muted group/image">
          <img
            src={product.images[0]}
            alt={product.title}
            className={cn(
              'absolute inset-0 w-full h-full object-cover transition-all duration-500',
              product.images.length > 1
                ? 'group-hover/image:opacity-0 group-hover/image:scale-110'
                : 'group-hover/image:scale-105',
            )}
          />
          {product.images.length > 1 && (
            <img
              src={product.images[1]}
              alt={`${product.title} - Vista Alternativa`}
              className="absolute inset-0 w-full h-full object-cover opacity-0 scale-95 transition-all duration-500 group-hover/image:opacity-100 group-hover/image:scale-105"
            />
          )}

          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <Badge className="bg-blue-500 hover:bg-blue-600 border-none">Novo</Badge>
            )}
            {product.isBestSeller && (
              <Badge className="bg-primary hover:bg-primary/90 border-none">Mais Vendido</Badge>
            )}
          </div>

          <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover/image:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/60 to-transparent flex justify-center">
            <Button className="w-full shadow-lg" onClick={handleAddToCart}>
              <ShoppingBag className="w-4 h-4 mr-2" /> Adicionar
            </Button>
          </div>
        </div>

        <CardContent className="p-4 flex flex-col flex-1">
          <div className="flex justify-between items-start mb-2 gap-2">
            <h3 className="font-heading font-semibold text-base leading-tight text-foreground line-clamp-2">
              {product.title}
            </h3>
            <div className="flex items-center text-amber-500 shrink-0 bg-amber-50 px-1.5 py-0.5 rounded text-xs font-medium">
              <Star className="w-3 h-3 fill-current mr-1" />
              {product.rating}
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-3">{product.category}</p>

          <div className="mt-auto flex items-center justify-between">
            <span className="font-bold text-lg text-primary">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    'w-1.5 h-1.5 rounded-full',
                    i < product.difficulty ? 'bg-secondary' : 'bg-muted',
                  )}
                  title={`Dificuldade: ${product.difficulty}/5`}
                />
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
