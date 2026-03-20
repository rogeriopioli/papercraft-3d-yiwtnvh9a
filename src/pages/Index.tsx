import { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/ProductCard'
import FilterBar from '@/components/FilterBar'
import Newsletter from '@/components/Newsletter'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import HeroCarousel from '@/components/HeroCarousel'
import useProductStore from '@/stores/useProductStore'
import useCategoryStore from '@/stores/useCategoryStore'

export default function Index() {
  const { products, isLoading: isProductsLoading } = useProductStore()
  const { categories, isLoading: isCategoriesLoading } = useCategoryStore()

  const [searchParams, setSearchParams] = useSearchParams()
  const urlSearchQuery = searchParams.get('search') || ''

  const [searchQuery, setSearchQuery] = useState(urlSearchQuery)
  const [filters, setFilters] = useState({
    categoryId: 'all',
    sort: 'relevantes',
    priceRange: [0, 200],
    difficulty: null as number | null,
  })

  useEffect(() => {
    setSearchQuery(searchParams.get('search') || '')
  }, [searchParams])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setSearchQuery(val)

    const newParams = new URLSearchParams(searchParams)
    if (val.trim()) {
      newParams.set('search', val)
    } else {
      newParams.delete('search')
    }
    setSearchParams(newParams, { replace: true })
  }

  const handleScrollToProducts = () => {
    document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' })
    setFilters((prev) => ({ ...prev, sort: 'mais-vendidos' }))
  }

  const filteredProducts = useMemo(() => {
    let result = [...products]
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.tags.some((t) => t.toLowerCase().includes(query)) ||
          (query.includes('fácil') && p.difficulty <= 2) ||
          (query.includes('difícil') && p.difficulty >= 4),
      )
    }
    if (filters.categoryId !== 'all') {
      result = result.filter((p) => p.categoryId === filters.categoryId)
    }
    result = result.filter((p) => p.price <= filters.priceRange[1])
    if (filters.difficulty !== null)
      result = result.filter((p) => p.difficulty === filters.difficulty)

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
  }, [filters, searchQuery, products])

  return (
    <div className="container mx-auto px-4 py-8 md:py-10">
      <HeroCarousel onScrollToProducts={handleScrollToProducts} />

      <div className="max-w-2xl mx-auto mb-10">
        <div className="relative">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-muted-foreground">
            <Search className="w-5 h-5" />
          </div>
          <Input
            type="text"
            className="pl-12 h-14 text-base rounded-full shadow-sm border-border bg-background focus-visible:ring-primary focus-visible:border-primary"
            placeholder="Busca avançada (ex: modelos fáceis de montar)..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <div id="products-section">
        <FilterBar filters={filters} setFilters={setFilters} categories={categories} />
      </div>

      {isProductsLoading || isCategoriesLoading ? (
        <div className="flex justify-center items-center py-20">
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12 mt-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <h3 className="text-xl font-heading font-semibold mb-2">Nenhum modelo encontrado</h3>
          <p className="text-muted-foreground mb-6">
            Tente ajustar seus filtros para ver mais resultados.
          </p>
          <Button
            variant="outline"
            onClick={() => {
              setSearchQuery('')
              const newParams = new URLSearchParams(searchParams)
              newParams.delete('search')
              setSearchParams(newParams, { replace: true })

              setFilters({
                categoryId: 'all',
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

      <Newsletter />
    </div>
  )
}
