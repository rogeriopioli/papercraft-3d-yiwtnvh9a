import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/ProductCard'
import FilterBar from '@/components/FilterBar'
import { Button } from '@/components/ui/button'
import HeroCarousel from '@/components/HeroCarousel'
import useProductStore from '@/stores/useProductStore'

export default function Index() {
  const { products, isLoading: isProductsLoading } = useProductStore()
  const [searchParams, setSearchParams] = useSearchParams()
  const urlSearchQuery = searchParams.get('search') || ''

  const [filters, setFilters] = useState({
    category: 'Todos',
    sort: 'relevantes',
    priceRange: [0, 200],
    difficulty: null as number | null,
  })

  const handleScrollToProducts = () => {
    document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' })
    setFilters((prev) => ({ ...prev, sort: 'mais-vendidos' }))
  }

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (urlSearchQuery.trim()) {
      const query = urlSearchQuery.toLowerCase()
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.tags?.some((t) => t.toLowerCase().includes(query)) ||
          (query.includes('fácil') && p.difficulty <= 2) ||
          (query.includes('difícil') && p.difficulty >= 4),
      )
    }

    if (filters.category !== 'Todos') {
      result = result.filter((p) => p.category === filters.category)
    }

    result = result.filter((p) => p.price <= filters.priceRange[1])

    if (filters.difficulty !== null) {
      result = result.filter((p) => p.difficulty === filters.difficulty)
    }

    switch (filters.sort) {
      case 'menor-preco':
        result.sort((a, b) => a.price - b.price)
        break
      case 'maior-preco':
        result.sort((a, b) => b.price - a.price)
        break
      case 'recentes':
        result.sort((a, b) => (b.isNew === a.isNew ? 0 : b.isNew ? 1 : -1))
        break
      case 'mais-vendidos':
        result.sort((a, b) => (b.isBestSeller === a.isBestSeller ? 0 : b.isBestSeller ? 1 : -1))
        break
    }
    return result
  }, [filters, urlSearchQuery, products])

  return (
    <div className="container mx-auto px-4 py-8 md:py-10">
      <HeroCarousel onScrollToProducts={handleScrollToProducts} />

      <div id="products-section">
        <FilterBar filters={filters} setFilters={setFilters} />
      </div>

      {isProductsLoading ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-slate-50 rounded-3xl mt-8 border border-slate-100">
          <h3 className="text-2xl font-heading font-bold mb-3 text-slate-800">
            Nenhum modelo encontrado
          </h3>
          <p className="text-slate-500 mb-6 text-lg">
            Tente ajustar seus filtros ou realizar uma nova busca para ver mais resultados.
          </p>
          <Button
            size="lg"
            className="rounded-full px-8 text-base font-bold"
            onClick={() => {
              const newParams = new URLSearchParams(searchParams)
              newParams.delete('search')
              setSearchParams(newParams, { replace: true })

              setFilters({
                category: 'Todos',
                sort: 'relevantes',
                priceRange: [0, 200],
                difficulty: null,
              })
            }}
          >
            Limpar Todos os Filtros
          </Button>
        </div>
      )}
    </div>
  )
}
