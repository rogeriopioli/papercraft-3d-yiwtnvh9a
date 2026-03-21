import { useState, useEffect } from 'react'
import { Plus, Edit, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from '@/services/categories'
import { Category } from '@/data/products'
import { useRealtime } from '@/hooks/use-realtime'
import { useToast } from '@/hooks/use-toast'

export default function AdminCategories() {
  const [categories, setCategories] = useState<Category[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [name, setName] = useState('')
  const { toast } = useToast()

  const loadData = async () => {
    try {
      const data = await getCategories()
      setCategories(data)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])
  useRealtime('categories', () => loadData())

  const handleOpenModal = (cat?: Category) => {
    if (cat) {
      setEditingId(cat.id)
      setName(cat.name)
    } else {
      setEditingId(null)
      setName('')
    }
    setIsModalOpen(true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (editingId) await updateCategory(editingId, { name })
      else await createCategory({ name })

      toast({ title: 'Sucesso!', description: 'Categoria salva com sucesso.' })
      setIsModalOpen(false)
    } catch (err) {
      toast({ variant: 'destructive', title: 'Erro', description: 'Não foi possível salvar.' })
    }
  }

  const handleDelete = async (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir esta categoria?')) {
      await deleteCategory(id)
      toast({ title: 'Sucesso', description: 'Categoria removida.' })
    }
  }

  if (isLoading)
    return <div className="p-8 text-center text-slate-400 animate-pulse">Carregando...</div>

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-heading font-black text-slate-900">Categorias</h1>
          <p className="text-slate-500 font-medium mt-1">Gerencie as categorias de produtos.</p>
        </div>
        <Button
          onClick={() => handleOpenModal()}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold h-11 px-6 rounded-xl shadow-sm"
        >
          <Plus className="w-5 h-5 mr-2" /> Nova Categoria
        </Button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <Table className="min-w-[600px]">
          <TableHeader>
            <TableRow className="bg-slate-50/50">
              <TableHead className="font-bold text-slate-600 w-full">Nome da Categoria</TableHead>
              <TableHead className="font-bold text-slate-600 text-right whitespace-nowrap">
                Ações
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.map((c) => (
              <TableRow key={c.id}>
                <TableCell className="font-bold text-slate-800 text-base">{c.name}</TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleOpenModal(c)}
                    className="text-slate-400 hover:text-blue-600"
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDelete(c.id)}
                    className="text-white bg-red-500 hover:bg-red-600 ml-2 rounded-lg"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-heading font-black">
              {editingId ? 'Editar Categoria' : 'Nova Categoria'}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 py-4">
            <div className="space-y-2">
              <Label>Nome da Categoria</Label>
              <Input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Decoração"
              />
            </div>
            <DialogFooter className="pt-4">
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 font-bold w-full h-11">
                Salvar Alterações
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
