import { Filter, SlidersHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { categories } from '@/data/products'
import { cn } from '@/lib/utils'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Slider } from '@/components/ui/slider'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'

interface FilterState {
  category: string
  sort: string
  priceRange: number[]
  difficulty: number | null
}

interface FilterBarProps {
  filters: FilterState
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>
}

export default function FilterBar({ filters, setFilters }: FilterBarProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8 bg-card p-4 rounded-xl shadow-subtle border border-border/50">
      {/* Categories Horizontal Scroll */}
      <div className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar flex gap-2 items-center">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={filters.category === cat ? 'default' : 'secondary'}
            className={cn('rounded-full whitespace-nowrap shadow-none')}
            onClick={() => setFilters((prev) => ({ ...prev, category: cat }))}
          >
            {cat}
          </Button>
        ))}
      </div>

      <div className="w-full md:w-auto flex items-center gap-3 justify-between md:justify-end shrink-0">
        {/* Advanced Filters Sheet */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="gap-2">
              <SlidersHorizontal className="w-4 h-4" />
              Filtros
              {(filters.priceRange[1] < 200 || filters.difficulty) && (
                <span className="w-2 h-2 rounded-full bg-primary absolute top-2 right-2"></span>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-sm overflow-y-auto">
            <SheetHeader className="mb-6">
              <SheetTitle>Filtros Avançados</SheetTitle>
            </SheetHeader>

            <div className="space-y-8">
              {/* Price Range */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label className="text-base">Preço Máximo</Label>
                  <span className="font-semibold text-primary">R$ {filters.priceRange[1]}</span>
                </div>
                <Slider
                  defaultValue={[200]}
                  max={200}
                  step={10}
                  value={filters.priceRange}
                  onValueChange={(val) => setFilters((prev) => ({ ...prev, priceRange: val }))}
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>R$ 0</span>
                  <span>R$ 200+</span>
                </div>
              </div>

              {/* Difficulty */}
              <div className="space-y-4">
                <Label className="text-base">Nível de Dificuldade</Label>
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <Badge
                      key={level}
                      variant={filters.difficulty === level ? 'default' : 'outline'}
                      className="cursor-pointer px-3 py-1 text-sm"
                      onClick={() =>
                        setFilters((prev) => ({
                          ...prev,
                          difficulty: prev.difficulty === level ? null : level,
                        }))
                      }
                    >
                      Nível {level}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full"
                onClick={() =>
                  setFilters((prev) => ({ ...prev, priceRange: [0, 200], difficulty: null }))
                }
              >
                Limpar Filtros
              </Button>
            </div>
          </SheetContent>
        </Sheet>

        {/* Sort */}
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-muted-foreground hidden lg:block" />
          <Select
            value={filters.sort}
            onValueChange={(val) => setFilters((prev) => ({ ...prev, sort: val }))}
          >
            <SelectTrigger className="w-[160px] md:w-[180px]">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevantes">Mais relevantes</SelectItem>
              <SelectItem value="menor-preco">Menor Preço</SelectItem>
              <SelectItem value="maior-preco">Maior Preço</SelectItem>
              <SelectItem value="recentes">Mais Recentes</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}
