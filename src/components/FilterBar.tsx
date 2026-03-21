import { Filter, SlidersHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'
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
import useCategoryStore from '@/stores/useCategoryStore'

interface FilterState {
  category: string
  sort: string
  maxPrice: number
  difficulty: number | null
}

interface FilterBarProps {
  filters: FilterState
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>
}

export default function FilterBar({ filters, setFilters }: FilterBarProps) {
  const { categories } = useCategoryStore()

  const displayCategories = ['Todos', ...categories.map((c) => c.name)]

  const safeCategories =
    displayCategories.length > 1
      ? displayCategories
      : ['Todos', 'Animais', 'Decoração', 'Máscaras', 'Personagens', 'Arquitetura']

  return (
    <div className="flex flex-col xl:flex-row gap-6 justify-between items-center mb-8">
      <div className="w-full xl:w-auto overflow-x-auto pb-2 xl:pb-0 hide-scrollbar flex gap-3 items-center justify-center xl:justify-start">
        {safeCategories.map((cat) => (
          <Button
            key={cat}
            variant={filters.category === cat ? 'default' : 'outline'}
            className={cn(
              'rounded-full whitespace-nowrap shadow-sm h-12 px-6 text-base font-bold transition-all',
              filters.category === cat
                ? 'bg-primary text-white hover:bg-primary/90'
                : 'bg-white text-slate-600 border-slate-200 hover:border-primary hover:text-primary',
            )}
            onClick={() => setFilters((prev) => ({ ...prev, category: cat }))}
          >
            {cat}
          </Button>
        ))}
      </div>

      <div className="w-full xl:w-auto flex items-center gap-3 justify-between xl:justify-end shrink-0">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="gap-2 rounded-full h-12 px-6 font-bold bg-white text-slate-700 border-slate-200"
            >
              <SlidersHorizontal className="w-5 h-5 text-primary" />
              Filtros
              {(filters.maxPrice < 200 || filters.difficulty) && (
                <span className="w-2.5 h-2.5 rounded-full bg-primary absolute top-2 right-2 border-2 border-white"></span>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:max-w-sm overflow-y-auto">
            <SheetHeader className="mb-8">
              <SheetTitle className="text-2xl font-black text-slate-800">
                Filtros Avançados
              </SheetTitle>
            </SheetHeader>

            <div className="space-y-10">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label className="text-base font-bold text-slate-700">Preço Máximo</Label>
                  <span className="font-black text-xl text-primary">R$ {filters.maxPrice}</span>
                </div>
                <Slider
                  defaultValue={[200]}
                  max={200}
                  step={10}
                  value={[filters.maxPrice]}
                  onValueChange={(val) => setFilters((prev) => ({ ...prev, maxPrice: val[0] }))}
                  className="py-4"
                />
                <div className="flex justify-between text-sm font-medium text-slate-400">
                  <span>R$ 0</span>
                  <span>R$ 200</span>
                </div>
              </div>

              <div className="space-y-4">
                <Label className="text-base font-bold text-slate-700">Nível de Dificuldade</Label>
                <div className="flex flex-wrap gap-3">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <Badge
                      key={level}
                      variant={filters.difficulty === level ? 'default' : 'outline'}
                      className={cn(
                        'cursor-pointer px-4 py-2 text-sm font-bold rounded-xl transition-all',
                        filters.difficulty === level
                          ? 'bg-primary text-white border-primary'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:border-primary',
                      )}
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
                variant="secondary"
                className="w-full h-12 text-base font-bold rounded-xl"
                onClick={() => setFilters((prev) => ({ ...prev, maxPrice: 200, difficulty: null }))}
              >
                Limpar Filtros
              </Button>
            </div>
          </SheetContent>
        </Sheet>

        <div className="flex items-center gap-2">
          <Select
            value={filters.sort}
            onValueChange={(val) => setFilters((prev) => ({ ...prev, sort: val }))}
          >
            <SelectTrigger className="w-[180px] h-12 rounded-full bg-white border-slate-200 font-bold text-slate-700">
              <Filter className="w-4 h-4 text-primary mr-2" />
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="relevantes" className="font-medium">
                Mais relevantes
              </SelectItem>
              <SelectItem value="menor-preco" className="font-medium">
                Menor Preço
              </SelectItem>
              <SelectItem value="maior-preco" className="font-medium">
                Maior Preço
              </SelectItem>
              <SelectItem value="recentes" className="font-medium">
                Mais Recentes
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}
