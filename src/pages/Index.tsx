import { useState, useMemo } from 'react'
import { products } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import FilterBar from '@/components/FilterBar'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Index() {
  const [filters, setFilters] = useState({
    category: 'Todos',
    sort: 'relevantes',
    priceRange: [0, 200],
    difficulty: null as number | null,
  })

  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Category
    if (filters.category !== 'Todos') {
      result = result.filter((p) => p.category === filters.category)
    }

    // Price
    result = result.filter((p) => p.price <= filters.priceRange[1])

    // Difficulty
    if (filters.difficulty !== null) {
      result = result.filter((p) => p.difficulty === filters.difficulty)
    }

    // Sort
    switch (filters.sort) {
      case 'menor-preco':
        result.sort((a, b) => a.price - b.price)
        break
      case 'maior-preco':
        result.sort((a, b) => b.price - a.price)
        break
      case 'recentes':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
        break
      default:
        break // 'relevantes' - keep default order
    }

    return result
  }, [filters])

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Banner */}
      <section className="bg-secondary text-secondary-foreground rounded-2xl p-8 md:p-12 mb-10 flex flex-col md:flex-row items-center justify-between overflow-hidden relative shadow-lg">
        <div className="relative z-10 max-w-xl">
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4 leading-tight">
            Dê vida ao papel: <span className="text-primary">Modelos 3D</span> para montar
          </h1>
          <p className="text-lg text-secondary-foreground/80 mb-6">
            Baixe o PDF, imprima, corte e cole. Descubra a arte relaxante do papercraft lowpoly.
          </p>
          <Button size="lg" className="gap-2 group">
            Começar a Criar{' '}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
        {/* Abstract geometric decoration */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none hidden md:block">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full fill-primary"
          >
            <path
              d="M45.7,-76.4C58.9,-69.3,69,-55.4,75.9,-40.8C82.8,-26.2,86.5,-10.9,84.4,3.7C82.3,18.3,74.5,32.3,64.2,43.4C53.9,54.5,41.2,62.8,26.9,69.5C12.6,76.2,-3.3,81.4,-18.2,78.5C-33.1,75.6,-47,64.6,-58.5,52.1C-70,39.6,-79.1,25.6,-83.4,10.2C-87.7,-5.2,-87.2,-22,-79.7,-35.5C-72.2,-49,-57.8,-59.2,-43.3,-65.8C-28.8,-72.4,-14.4,-75.4,1.4,-77.4C17.2,-79.4,32.5,-83.5,45.7,-76.4Z"
              transform="translate(100 100) scale(1.1)"
            />
          </svg>
        </div>
      </section>

      <FilterBar filters={filters} setFilters={setFilters} />

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
            <FilterBar
              className="w-8 h-8 text-muted-foreground"
              filters={filters}
              setFilters={setFilters}
            />
          </div>
          <h3 className="text-xl font-heading font-semibold mb-2">Nenhum modelo encontrado</h3>
          <p className="text-muted-foreground mb-6">
            Tente ajustar seus filtros para ver mais resultados.
          </p>
          <Button
            variant="outline"
            onClick={() =>
              setFilters({
                category: 'Todos',
                sort: 'relevantes',
                priceRange: [0, 200],
                difficulty: null,
              })
            }
          >
            Limpar Todos os Filtros
          </Button>
        </div>
      )}
    </div>
  )
}
