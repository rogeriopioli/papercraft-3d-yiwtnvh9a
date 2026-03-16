import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ChevronRight, Clock, FileText, Maximize, ShoppingBag, Star } from 'lucide-react'
import { products } from '@/data/products'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { useToast } from '@/hooks/use-toast'
import useCartStore from '@/stores/useCartStore'
import ProductCard from '@/components/ProductCard'
import NotFound from './NotFound'

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>()
  const product = products.find((p) => p.id === id)
  const [activeImg, setActiveImg] = useState(0)
  const { addItem } = useCartStore()
  const { toast } = useToast()

  if (!product) return <NotFound />

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const handleAddToCart = () => {
    addItem(product)
    toast({
      title: 'Adicionado ao carrinho!',
      description: `${product.title} foi adicionado.`,
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center text-sm text-muted-foreground mb-8">
        <Link to="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <ChevronRight className="w-4 h-4 mx-1" />
        <Link to="/" className="hover:text-primary transition-colors">
          {product.category}
        </Link>
        <ChevronRight className="w-4 h-4 mx-1" />
        <span className="text-foreground font-medium truncate">{product.title}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Gallery */}
        <div className="space-y-4">
          <div className="aspect-square bg-muted rounded-2xl overflow-hidden relative border shadow-subtle">
            <img
              src={product.images[activeImg]}
              alt={product.title}
              className="w-full h-full object-cover animate-fade-in"
              key={activeImg}
            />
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImg(idx)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${activeImg === idx ? 'border-primary opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-3 text-foreground">
              {product.title}
            </h1>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-primary">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </span>
              <div className="flex items-center bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-sm font-medium">
                <Star className="w-4 h-4 text-amber-400 fill-current mr-1" />
                {product.rating}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="secondary">PDF Digital</Badge>
            {product.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>

          <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
            {product.description}
          </p>

          <div className="bg-card border rounded-xl p-5 mb-8 shadow-subtle grid grid-cols-2 gap-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-muted rounded-lg">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Folhas A4</p>
                <p className="font-medium">{product.specs.sheets}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-muted rounded-lg">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Tempo Estimado</p>
                <p className="font-medium">{product.specs.time}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-muted rounded-lg">
                <Maximize className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Dimensões</p>
                <p className="font-medium">{product.specs.dimensions}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex gap-1 bg-muted p-2 rounded-lg items-center">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full ${i < product.difficulty ? 'bg-primary' : 'bg-muted-foreground/30'}`}
                  />
                ))}
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Dificuldade</p>
                <p className="font-medium">Nível {product.difficulty}</p>
              </div>
            </div>
          </div>

          <div className="mt-auto md:sticky md:bottom-8 z-20 bg-background/80 backdrop-blur-md p-4 md:p-0 rounded-2xl md:bg-transparent -mx-4 md:mx-0 shadow-elevation md:shadow-none border-t md:border-none">
            <Button
              size="lg"
              className="w-full text-lg h-14 hover:scale-[1.02] transition-transform active:scale-95"
              onClick={handleAddToCart}
            >
              <ShoppingBag className="w-5 h-5 mr-2" /> Adicionar ao Carrinho
            </Button>
            <p className="text-center text-xs text-muted-foreground mt-3">
              Download imediato após a confirmação do pagamento.
            </p>
          </div>
        </div>
      </div>

      <Separator className="my-16" />

      {/* Related */}
      {relatedProducts.length > 0 && (
        <section>
          <h2 className="text-2xl font-heading font-bold mb-6">Você também pode gostar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
