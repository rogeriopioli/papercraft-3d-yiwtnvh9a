import { useState, useEffect } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { getOrders, Order } from '@/services/orders'
import { format } from 'date-fns'

export default function AdminOrders() {
  const [orders, setOrders] = useState<Order[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getOrders().then((data) => {
      setOrders(data)
      setIsLoading(false)
    })
  }, [])

  if (isLoading)
    return <div className="p-8 text-center text-slate-400 animate-pulse">Carregando...</div>

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-heading font-black text-slate-900">Pedidos</h1>
        <p className="text-slate-500 font-medium mt-1">Gerencie as compras dos clientes na loja.</p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <Table className="min-w-[900px]">
            <TableHeader>
              <TableRow className="bg-slate-50/50">
                <TableHead className="font-bold text-slate-600">ID Pedido</TableHead>
                <TableHead className="font-bold text-slate-600">Data</TableHead>
                <TableHead className="font-bold text-slate-600">Cliente (E-mail)</TableHead>
                <TableHead className="font-bold text-slate-600">Itens Comprados</TableHead>
                <TableHead className="font-bold text-slate-600">Cupom</TableHead>
                <TableHead className="font-bold text-slate-600 text-right">Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-bold text-slate-800">
                    {order.order_number || order.id.slice(0, 8).toUpperCase()}
                  </TableCell>
                  <TableCell className="text-slate-600 font-medium">
                    {format(new Date(order.created), 'dd/MM/yyyy')}
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-bold text-slate-800">
                        {order.expand?.user?.name || 'Cliente Sem Registro'}
                      </span>
                      <span className="text-sm text-slate-500">
                        {order.expand?.user?.email || '-'}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      {order.items && order.items.length > 0 ? (
                        order.items.map((item: any, i: number) => (
                          <div key={i} className="text-sm font-medium text-slate-700">
                            {item.quantity}x {item.name}
                          </div>
                        ))
                      ) : (
                        <span className="text-slate-400">-</span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-slate-500 font-medium">
                    {order.expand?.coupon_used?.code || '-'}
                  </TableCell>
                  <TableCell className="text-right font-black text-blue-600 text-base">
                    R$ {order.total_amount.toFixed(2).replace('.', ',')}
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
