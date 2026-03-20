import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Hexagon, Star, Layers, HelpCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

interface HeroCarouselProps {
  onScrollToProducts: () => void
}

export default function HeroCarousel({ onScrollToProducts }: HeroCarouselProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [currentSlide, setCurrentSlide] = useState(0)
  const autoplayPlugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }))

  useEffect(() => {
    if (!api) return
    setCurrentSlide(api.selectedScrollSnap())
    api.on('select', () => setCurrentSlide(api.selectedScrollSnap()))
  }, [api])

  return (
    <div className="relative mb-12 group">
      <Carousel
        plugins={[autoplayPlugin.current]}
        setApi={setApi}
        className="w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-elevation border border-border/50"
        opts={{ loop: true }}
      >
        <CarouselContent>
          <CarouselItem>
            <div className="relative w-full h-[200px] md:h-[240px] bg-gradient-to-br from-primary to-primary/80 text-primary-foreground flex flex-col items-center justify-center p-4 md:p-6 isolation-auto select-none">
              <div className="flex items-center gap-3 md:gap-4 mb-3">
                <Hexagon className="w-10 h-10 md:w-14 md:h-14 animate-float fill-current opacity-90" />
                <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight">
                  PapercraftRP
                </h2>
              </div>
              <p className="text-sm md:text-lg text-center max-w-2xl opacity-90 font-medium leading-relaxed">
                Modelos 3D Lowpoly exclusivos para você imprimir, dobrar e decorar seu mundo.
              </p>
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="relative w-full h-[200px] md:h-[240px] bg-slate-900 text-white flex flex-row items-center justify-center p-6 md:p-8 gap-4 md:gap-8 select-none">
              <div className="z-10 space-y-2 md:space-y-3 text-center md:text-left flex-1 max-w-lg">
                <h2 className="text-2xl md:text-4xl font-heading font-bold leading-tight tracking-tight">
                  Papercraft Lowpoly
                </h2>
                <p className="text-xs md:text-sm lg:text-base text-slate-300 leading-relaxed">
                  Uma mistura imersiva de arte digital e montagem manual. Descubra a terapia de
                  transformar papel plano em incríveis esculturas geométricas.
                </p>
              </div>
              <div className="hidden sm:flex justify-center shrink-0">
                <div className="relative w-28 h-28 md:w-40 md:h-40 aspect-square">
                  <img
                    src="https://img.usecurling.com/p/400/400?q=lowpoly+papercraft+art&color=black"
                    alt="Papercraft Art"
                    className="w-full h-full object-cover rounded-xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 border-2 border-slate-800"
                  />
                </div>
              </div>
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="relative w-full h-[200px] md:h-[240px] bg-amber-500 text-amber-950 flex flex-col items-center justify-center p-4 select-none">
              <h2 className="text-2xl md:text-4xl font-heading font-bold mb-2 md:mb-3 text-center tracking-tight flex items-center justify-center gap-2">
                <Star className="w-6 h-6 md:w-8 md:h-8 text-white fill-white/60 drop-shadow-md" />
                Mais Vendidos
              </h2>
              <p className="text-sm md:text-base text-center max-w-xl mb-4 md:mb-5 font-medium text-amber-900 leading-relaxed">
                Explore nossos modelos favoritos e comece com os projetos mais aclamados.
              </p>
              <Button
                size="sm"
                className="md:h-10 px-6 md:text-base bg-amber-950 text-amber-50 hover:bg-amber-900 transition-transform shadow-md"
                onClick={onScrollToProducts}
              >
                Explorar Destaques
              </Button>
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="relative w-full h-[200px] md:h-[240px] bg-emerald-600 text-white flex flex-col items-center justify-center p-4 select-none">
              <h2 className="text-2xl md:text-4xl font-heading font-bold mb-2 md:mb-3 text-center tracking-tight flex items-center justify-center gap-2">
                <Layers className="w-6 h-6 md:w-8 md:h-8" />É a sua primeira vez?
              </h2>
              <p className="text-sm md:text-base text-center max-w-xl mb-4 md:mb-5 text-emerald-50 font-medium leading-relaxed">
                Preparamos um guia passo a passo com os materiais e técnicas corretas de montagem.
              </p>
              <Button
                size="sm"
                variant="secondary"
                asChild
                className="md:h-10 px-6 md:text-base transition-transform text-emerald-800 font-semibold shadow-md"
              >
                <Link to="/como-montar">Acessar Guia de Montagem</Link>
              </Button>
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="relative w-full h-[200px] md:h-[240px] bg-indigo-600 text-white flex flex-row items-center justify-center p-6 md:p-8 gap-4 md:gap-8 select-none">
              <div className="z-10 space-y-2 md:space-y-3 text-center md:text-left flex-1 max-w-lg">
                <h2 className="text-2xl md:text-4xl font-heading font-bold leading-tight tracking-tight flex items-center justify-center md:justify-start gap-2">
                  <HelpCircle className="w-6 h-6 md:w-8 md:h-8" />
                  Dúvidas Frequentes
                </h2>
                <p className="text-xs md:text-sm lg:text-base text-indigo-100 leading-relaxed">
                  Tem dúvidas sobre materiais ou limites de download? Acesse nosso FAQ.
                </p>
                <Button
                  size="sm"
                  variant="secondary"
                  asChild
                  className="md:h-10 px-6 md:text-base transition-transform text-indigo-900 font-semibold shadow-md mt-2"
                >
                  <Link to="/faq">Acessar FAQ</Link>
                </Button>
              </div>
              <div className="hidden sm:flex justify-center shrink-0">
                <div className="relative w-28 h-28 md:w-40 md:h-40 aspect-square">
                  <img
                    src="https://img.usecurling.com/p/400/400?q=question+mark+3d+paper&color=blue"
                    alt="FAQ"
                    className="w-full h-full object-cover rounded-xl shadow-2xl -rotate-3 hover:rotate-0 transition-transform duration-700 border-2 border-indigo-400"
                  />
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/50 hover:bg-background backdrop-blur-sm border-none w-10 h-10 hidden md:flex text-foreground" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background/50 hover:bg-background backdrop-blur-sm border-none w-10 h-10 hidden md:flex text-foreground" />
      </Carousel>

      <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 z-20">
        {Array.from({ length: 5 }).map((_, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i)}
            className={`h-2 md:h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === i
                ? 'w-6 md:w-8 bg-white shadow-sm'
                : 'w-2 md:w-2.5 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
