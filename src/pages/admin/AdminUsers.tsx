import { useState, useEffect } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Eye, RefreshCw, Plus, Search } from 'lucide-react'
import { getUsers, User } from '@/services/users'
import { getOrders } from '@/services/orders'

export default function AdminUsers() {
  const [users, setUsers] = useState<(User & { orderCount: number })[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    Promise.all([getUsers(), getOrders()]).then(([usersData, ordersData]) => {
      const mapped = usersData.map((u) => {
        const count = ordersData.filter((o) => o.user === u.id).length
        return { ...u, orderCount: count }
      })
      setUsers(mapped)
      setIsLoading(false)
    })
  }, [])

  const filtered = users.filter(
    (u) =>
      u.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      u.email?.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  if (isLoading)
    return <div className="p-8 text-center text-slate-400 animate-pulse">Carregando...</div>

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-heading font-black text-slate-900">Usuários</h1>
          <p className="text-slate-500 font-medium mt-1">
            Gerencie os clientes cadastrados no sistema.
          </p>
        </div>
        <Button
          variant="outline"
          className="h-11 px-6 rounded-xl font-bold bg-white text-slate-700 border-slate-200 hover:border-slate-300"
        >
          <Plus className="w-5 h-5 mr-2" /> Simular Novo Cliente
        </Button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-7 top-1/2 -translate-y-1/2" />
          <Input
            placeholder="Buscar por nome ou e-mail..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-11 h-11 bg-slate-50 border-transparent focus-visible:bg-white focus-visible:ring-primary/20 rounded-xl"
          />
        </div>
        <div className="overflow-x-auto">
          <Table className="min-w-[800px]">
            <TableHeader>
              <TableRow className="bg-slate-50/50">
                <TableHead className="font-bold text-slate-600">Nome</TableHead>
                <TableHead className="font-bold text-slate-600">E-mail</TableHead>
                <TableHead className="font-bold text-slate-600">Downloads</TableHead>
                <TableHead className="font-bold text-slate-600">Histórico</TableHead>
                <TableHead className="font-bold text-slate-600 text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-bold text-slate-800">{user.name || '-'}</TableCell>
                  <TableCell className="text-slate-600 font-medium">{user.email}</TableCell>
                  <TableCell>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 font-bold text-xs border border-blue-100 shadow-sm">
                      {user.downloads_count || 0} / {user.downloads_limit || 3}
                    </div>
                  </TableCell>
                  <TableCell className="text-slate-500 font-medium">
                    {user.orderCount} pedidos
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-9 rounded-lg text-xs font-bold text-slate-700"
                      >
                        <Eye className="w-4 h-4 mr-1.5 text-slate-400" /> Ver Histórico
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-9 rounded-lg text-xs font-bold text-slate-700"
                      >
                        <RefreshCw className="w-4 h-4 mr-1.5 text-slate-400" /> Resetar Limite
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
