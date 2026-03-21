import { useState, useMemo } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import {
  ChevronRight,
  Clock,
  FileText,
  Maximize,
  ShoppingBag,
  Star,
  PlayCircle,
  ShieldCheck,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { useToast } from '@/hooks/use-toast'
import useCartStore from '@/stores/useCartStore'
import useProductStore from '@/stores/useProductStore'
import ProductCard from '@/components/ProductCard'
import NotFound from './NotFound'
import ReviewSystem from '@/components/ReviewSystem'

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { toast } = useToast()

  const { products, isLoading } = useProductStore()
  const product = products.find((p) => p.id === id)
  const { addItem } = useCartStore()

  const [activeMediaIndex, setActiveMediaIndex] = useState(0)

  const mediaList = useMemo(() => {
    if (!product) return []
    const list: { type: 'image' | 'video'; url: string }[] = (product.images || []).map((url) => ({
      type: 'image',
      url,
    }))
    if (product.video) {
      list.push({ type: 'video', url: product.video })
    }
    return list
  }, [product])

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-40">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  if (!product) return <NotFound />

  const activeMedia = mediaList[activeMediaIndex] || mediaList[0]

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

  const handleBuyNow = () => {
    navigate(`/checkout?productId=${product.id}`)
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
      <nav className="flex items-center text-sm font-bold text-slate-400 mb-8">
        <Link to="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <ChevronRight className="w-4 h-4 mx-2" />
        <Link to={`/?search=${product.category}`} className="hover:text-primary transition-colors">
          {product.category}
        </Link>
        <ChevronRight className="w-4 h-4 mx-2" />
        <span className="text-primary truncate">{product.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
        {/* Gallery */}
        <div className="space-y-4">
          <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden relative shadow-sm border border-slate-200 flex items-center justify-center">
            {activeMedia && activeMedia.type === 'image' ? (
              <img
                src={activeMedia.url}
                alt={product.title}
                className="w-full h-full object-cover animate-fade-in"
                key={activeMedia.url}
              />
            ) : activeMedia &&
              (activeMedia.url.endsWith('.mp4') || activeMedia.url.endsWith('.webm')) ? (
              <video
                src={activeMedia.url}
                controls
                className="w-full h-full object-cover animate-fade-in"
                key={activeMedia.url}
              />
            ) : activeMedia ? (
              <iframe
                src={getVideoEmbedUrl(activeMedia.url)}
                className="w-full h-full animate-fade-in"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                key={activeMedia.url}
                title={`${product.title} Video`}
              />
            ) : null}
          </div>
          {mediaList.length > 1 && (
            <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
              {mediaList.map((media, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveMediaIndex(idx)}
                  className={`w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all shrink-0 bg-slate-100 flex items-center justify-center group ${
                    activeMediaIndex === idx
                      ? 'border-primary opacity-100 ring-4 ring-primary/20'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  {media.type === 'image' ? (
                    <img src={media.url} alt="" className="w-full h-full object-cover" />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-slate-500 w-full h-full bg-slate-200 transition-colors group-hover:bg-slate-300">
                      <PlayCircle className="w-8 h-8 mb-1 text-primary" />
                      <span className="text-[10px] font-black uppercase tracking-wider text-primary">
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
            <h1 className="text-3xl md:text-5xl font-heading font-black mb-4 text-slate-900 tracking-tight leading-tight">
              {product.title}
            </h1>
            <div className="flex items-center gap-4">
              <span className="text-4xl font-black text-primary">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </span>
              <div className="flex items-center bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg text-sm font-bold border border-blue-100">
                <Star className="w-4 h-4 text-primary fill-current mr-1.5" />
                {product.rating || '4.5'}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            <Badge className="bg-slate-800 hover:bg-slate-900 text-white border-none rounded-full px-4 py-1 text-sm">
              Arquivo PDF Digital
            </Badge>
            {(product.tags || []).map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="rounded-full px-4 py-1 text-sm text-slate-600 border-slate-200"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <p className="text-slate-600 font-medium leading-relaxed mb-10 text-lg">
            {product.description}
          </p>

          {/* Specs Grid */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 mb-10 shadow-sm grid grid-cols-2 gap-y-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-50 rounded-xl">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400">Folhas A4</p>
                <p className="font-black text-slate-800 text-lg">{product.specs.sheets}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-50 rounded-xl">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400">Tempo Estimado</p>
                <p className="font-black text-slate-800 text-lg">{product.specs.time}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-50 rounded-xl">
                <Maximize className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400">Dimensões</p>
                <p className="font-black text-slate-800 text-lg">{product.specs.dimensions}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5 bg-blue-50 p-3 rounded-xl items-center">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-2.5 h-2.5 rounded-full ${i < product.difficulty ? 'bg-primary' : 'bg-blue-200'}`}
                  />
                ))}
              </div>
              <div>
                <p className="text-sm font-bold text-slate-400">Dificuldade</p>
                <p className="font-black text-slate-800 text-lg">Nível {product.difficulty}</p>
              </div>
            </div>
          </div>

          <div className="mt-auto bg-slate-50 p-6 rounded-3xl border border-slate-200">
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Button
                size="lg"
                className="w-full text-lg h-14 font-bold rounded-xl hover:scale-[1.02] transition-transform active:scale-95 flex-1 shadow-md"
                onClick={handleBuyNow}
              >
                Comprar Agora
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto h-14 font-bold rounded-xl bg-white text-slate-700 border border-slate-200 hover:border-primary hover:text-primary hover:scale-[1.02] transition-transform active:scale-95 shadow-sm"
                onClick={handleAddToCart}
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Carrinho
              </Button>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm font-bold text-emerald-600 mb-2 bg-emerald-50 py-2 rounded-lg border border-emerald-100">
              <ShieldCheck className="w-4 h-4" /> Download Imediato após pagamento
            </div>
            <p className="text-center text-xs font-medium text-slate-500 mt-3">
              Ao comprar, você concorda com nossos{' '}
              <Link to="/termos" className="text-primary hover:underline">
                Termos de Uso
              </Link>
              .
            </p>
          </div>
        </div>
      </div>

      <Separator className="my-16 bg-slate-200 h-1" />

      <ReviewSystem productId={product.id} />

      <Separator className="my-16 bg-slate-200 h-1" />

      {/* Related */}
      {relatedProducts.length > 0 && (
        <section>
          <h2 className="text-3xl font-heading font-black mb-8 text-slate-900">
            Você também pode gostar
          </h2>
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
