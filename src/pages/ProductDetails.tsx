import { useState, useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  ChevronRight,
  Clock,
  FileText,
  Maximize,
  ShoppingBag,
  Star,
  PlayCircle,
} from 'lucide-react'
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
  const { addItem } = useCartStore()
  const { toast } = useToast()

  const mediaList = useMemo(() => {
    if (!product) return []
    const list: { type: 'image' | 'video'; url: string }[] = product.images.map((url) => ({
      type: 'image',
      url,
    }))
    if (product.video) {
      list.push({ type: 'video', url: product.video })
    }
    return list
  }, [product])

  const [activeMediaIndex, setActiveMediaIndex] = useState(0)

  if (!product) return <NotFound />

  const activeMedia = mediaList[activeMediaIndex]

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

  const getVideoEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/watch?v=')) {
      const videoId = new URLSearchParams(url.split('?')[1]).get('v')
      return `https://www.youtube.com/embed/${videoId}`
    }
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1].split('?')[0]
      return `https://www.youtube.com/embed/${videoId}`
    }
    if (url.includes('vimeo.com/')) {
      const videoId = url.split('vimeo.com/')[1].split('?')[0]
      return `https://player.vimeo.com/video/${videoId}`
    }
    return url
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
          <div className="aspect-square bg-muted rounded-2xl overflow-hidden relative border shadow-subtle flex items-center justify-center">
            {activeMedia.type === 'image' ? (
              <img
                src={activeMedia.url}
                alt={product.title}
                className="w-full h-full object-cover animate-fade-in"
                key={activeMedia.url}
              />
            ) : activeMedia.url.endsWith('.mp4') || activeMedia.url.endsWith('.webm') ? (
              <video
                src={activeMedia.url}
                controls
                className="w-full h-full object-cover animate-fade-in"
                key={activeMedia.url}
              />
            ) : (
              <iframe
                src={getVideoEmbedUrl(activeMedia.url)}
                className="w-full h-full animate-fade-in"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                key={activeMedia.url}
                title={`${product.title} Video`}
              />
            )}
          </div>
          {mediaList.length > 1 && (
            <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
              {mediaList.map((media, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveMediaIndex(idx)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all shrink-0 bg-muted flex items-center justify-center group ${
                    activeMediaIndex === idx
                      ? 'border-primary opacity-100'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  {media.type === 'image' ? (
                    <img src={media.url} alt="" className="w-full h-full object-cover" />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-muted-foreground w-full h-full bg-secondary/50 transition-colors group-hover:bg-secondary">
                      <PlayCircle className="w-6 h-6 mb-1 text-primary" />
                      <span className="text-[9px] font-bold uppercase tracking-wider text-primary">
                        Vídeo
                      </span>
                    </div>
                  )}
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
            <p className="text-center text-xs text-muted-foreground mt-2 px-4">
              Ao adquirir, você concorda com nossos{' '}
              <Link to="/termos" className="text-primary hover:underline font-medium">
                Termos de Uso e Licença
              </Link>
              .
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
