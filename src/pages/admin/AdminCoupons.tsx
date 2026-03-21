import { useState, useEffect } from 'react'
import { Plus, Edit, Trash2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
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
import { getCoupons, createCoupon, updateCoupon, deleteCoupon, Coupon } from '@/services/coupons'
import { useRealtime } from '@/hooks/use-realtime'
import { useToast } from '@/hooks/use-toast'
import { format } from 'date-fns'

export default function AdminCoupons() {
  const [coupons, setCoupons] = useState<Coupon[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    code: '',
    discount_type: 'percentage' as 'percentage' | 'fixed',
    value: '',
    expires_at: '',
    is_active: true,
  })

  const loadData = async () => {
    try {
      const data = await getCoupons()
      setCoupons(data)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])
  useRealtime('coupons', () => loadData())

  const handleOpenModal = (coupon?: Coupon) => {
    if (coupon) {
      setEditingId(coupon.id)
      setFormData({
        code: coupon.code,
        discount_type: coupon.discount_type,
        value: coupon.value.toString(),
        expires_at: coupon.expires_at ? coupon.expires_at.split(' ')[0] : '',
        is_active: coupon.is_active,
      })
    } else {
      setEditingId(null)
      setFormData({
        code: '',
        discount_type: 'percentage',
        value: '',
        expires_at: '',
        is_active: true,
      })
    }
    setIsModalOpen(true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const payload = {
        ...formData,
        value: parseFloat(formData.value),
        expires_at: formData.expires_at ? new Date(formData.expires_at).toISOString() : '',
      }
      if (editingId) await updateCoupon(editingId, payload)
      else await createCoupon(payload)

      toast({ title: 'Sucesso!', description: 'Cupom salvo com sucesso.' })
      setIsModalOpen(false)
    } catch (err) {
      toast({ variant: 'destructive', title: 'Erro', description: 'Não foi possível salvar.' })
    }
  }

  const handleDelete = async (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir este cupom?')) {
      await deleteCoupon(id)
      toast({ title: 'Sucesso', description: 'Cupom removido.' })
    }
  }

  if (isLoading)
    return <div className="p-8 text-center text-slate-400 animate-pulse">Carregando...</div>

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-heading font-black text-slate-900">Cupons de Desconto</h1>
          <p className="text-slate-500 font-medium mt-1">
            Gerencie promoções e descontos dinâmicos da loja.
          </p>
        </div>
        <Button
          onClick={() => handleOpenModal()}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold h-11 px-6 rounded-xl shadow-sm"
        >
          <Plus className="w-5 h-5 mr-2" /> Novo Cupom
        </Button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <Table className="min-w-[800px]">
          <TableHeader>
            <TableRow className="bg-slate-50/50">
              <TableHead className="font-bold text-slate-600">Código</TableHead>
              <TableHead className="font-bold text-slate-600">Desconto</TableHead>
              <TableHead className="font-bold text-slate-600">Validade</TableHead>
              <TableHead className="font-bold text-slate-600">Status</TableHead>
              <TableHead className="font-bold text-slate-600">Uso</TableHead>
              <TableHead className="font-bold text-slate-600 text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {coupons.map((c) => (
              <TableRow key={c.id}>
                <TableCell className="font-bold text-blue-600">{c.code}</TableCell>
                <TableCell className="font-bold text-slate-800">
                  {c.discount_type === 'percentage'
                    ? `${c.value}%`
                    : `R$ ${c.value.toFixed(2).replace('.', ',')}`}
                </TableCell>
                <TableCell className="text-slate-500 font-medium">
                  {c.expires_at ? format(new Date(c.expires_at), 'dd/MM/yyyy') : 'Vitalício'}
                </TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={
                      c.is_active
                        ? 'bg-green-50 text-green-700 border-green-200'
                        : 'bg-slate-50 text-slate-500 border-slate-200'
                    }
                  >
                    {c.is_active ? 'Ativo' : 'Inativo'}
                  </Badge>
                </TableCell>
                <TableCell className="text-slate-500 font-medium">
                  {c.usage_count || 0} vezes
                </TableCell>
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
              {editingId ? 'Editar Cupom' : 'Novo Cupom'}
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 py-4">
            <div className="space-y-2">
              <Label>Código do Cupom</Label>
              <Input
                required
                value={formData.code}
                onChange={(e) => setFormData({ ...formData, code: e.target.value.toUpperCase() })}
                placeholder="Ex: VERAO20"
                className="uppercase"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Tipo de Desconto</Label>
                <select
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  value={formData.discount_type}
                  onChange={(e) =>
                    setFormData({ ...formData, discount_type: e.target.value as any })
                  }
                >
                  <option value="percentage">Porcentagem (%)</option>
                  <option value="fixed">Fixo (R$)</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label>Valor</Label>
                <Input
                  required
                  type="number"
                  step="0.01"
                  value={formData.value}
                  onChange={(e) => setFormData({ ...formData, value: e.target.value })}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>Validade (Vazio para vitalício)</Label>
              <Input
                type="date"
                value={formData.expires_at}
                onChange={(e) => setFormData({ ...formData, expires_at: e.target.value })}
              />
            </div>
            <div className="flex items-center gap-2 pt-2">
              <input
                type="checkbox"
                id="is_active"
                checked={formData.is_active}
                onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600"
              />
              <Label htmlFor="is_active">Cupom Ativo</Label>
            </div>
            <DialogFooter className="pt-4">
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 font-bold w-full h-11">
                Salvar Cupom
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
