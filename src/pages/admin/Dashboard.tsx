import { useEffect, useState, useMemo } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { DollarSign, Users, Ticket, CheckCircle, Activity } from 'lucide-react'
import { getOrders, Order } from '@/services/orders'
import { getCoupons, Coupon } from '@/services/coupons'
import { getUsers, User } from '@/services/users'
import { useRealtime } from '@/hooks/use-realtime'

export default function Dashboard() {
  const [orders, setOrders] = useState<Order[]>([])
  const [coupons, setCoupons] = useState<Coupon[]>([])
  const [users, setUsers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const loadData = async () => {
    try {
      const [o, c, u] = await Promise.all([getOrders(), getCoupons(), getUsers()])
      setOrders(o)
      setCoupons(c)
      setUsers(u)
    } catch (e) {
      console.error('Failed to load dashboard data', e)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  useRealtime('orders', () => loadData())
  useRealtime('users', () => loadData())
  useRealtime('coupons', () => loadData())

  const metrics = useMemo(() => {
    const totalSales = orders.reduce((sum, order) => sum + order.total_amount, 0)
    const ordersWithCoupon = orders.filter((o) => o.coupon_used).length
    const couponUsageRatio = orders.length > 0 ? (ordersWithCoupon / orders.length) * 100 : 0

    // Check specific welcome coupon usage
    const welcomeCoupon = coupons.find((c) => c.code === 'BEMVINDO5')
    const welcomeUses = welcomeCoupon
      ? orders.filter((o) => o.coupon_used === welcomeCoupon.id).length
      : 0

    return {
      totalSales,
      newUsers: users.length,
      couponUsageRatio: couponUsageRatio.toFixed(1),
      welcomeUses,
      autoConversions: 0, // Mock stat based on image
    }
  }, [orders, coupons, users])

  const salesChartData = useMemo(() => {
    const grouped: Record<string, number> = {}
    orders.forEach((o) => {
      const date = new Date(o.created)
        .toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' })
        .replace('.', '')
      grouped[date] = (grouped[date] || 0) + o.total_amount
    })
    return Object.entries(grouped).map(([date, amount]) => ({ date, amount }))
  }, [orders])

  const couponsChartData = useMemo(() => {
    return coupons.map((c) => ({ code: c.code, usos: c.usage_count }))
  }, [coupons])

  if (isLoading)
    return (
      <div className="animate-pulse flex gap-4">
        <div className="w-full h-40 bg-slate-200 rounded-xl" />
      </div>
    )

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-heading font-black text-slate-900">Dashboard</h1>
        <p className="text-slate-500 font-medium mt-1">
          Visão geral do negócio e métricas principais.
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <MetricCard
          title="Vendas Totais"
          value={`R$ ${metrics.totalSales.toFixed(2).replace('.', ',')}`}
          icon={DollarSign}
        />
        <MetricCard title="Novos Usuários" value={metrics.newUsers.toString()} icon={Users} />
        <MetricCard title="Uso de Cupons" value={`${metrics.couponUsageRatio}%`} icon={Ticket} />
        <MetricCard
          title="Boas-Vindas Usadas"
          value={metrics.welcomeUses.toString()}
          icon={CheckCircle}
        />
        <MetricCard
          title="Conversões (Auto)"
          value={metrics.autoConversions.toString()}
          icon={Activity}
        />
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="rounded-2xl border-slate-200 shadow-sm overflow-hidden bg-white">
          <CardContent className="p-6">
            <h3 className="font-bold text-lg mb-6 text-slate-800">Evolução de Vendas</h3>
            <div className="h-[300px] w-full">
              <ChartContainer config={{ sales: { label: 'Vendas', color: 'hsl(var(--primary))' } }}>
                <AreaChart
                  data={salesChartData}
                  margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="fillSales" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis
                    dataKey="date"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={10}
                    className="text-xs font-medium fill-slate-400"
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `$${value}`}
                    className="text-xs font-medium fill-slate-400"
                  />
                  <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
                  <Area
                    type="monotone"
                    dataKey="amount"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    fill="url(#fillSales)"
                  />
                </AreaChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-slate-200 shadow-sm overflow-hidden bg-white">
          <CardContent className="p-6">
            <h3 className="font-bold text-lg mb-6 text-slate-800">Performance de Cupons</h3>
            <div className="h-[300px] w-full">
              <ChartContainer config={{ usos: { label: 'Usos', color: 'hsl(210, 20%, 90%)' } }}>
                <BarChart
                  data={couponsChartData}
                  margin={{ top: 10, right: 10, left: -30, bottom: 0 }}
                  barSize={40}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis
                    dataKey="code"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={10}
                    className="text-xs font-bold fill-slate-500"
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    className="text-xs font-medium fill-slate-400"
                  />
                  <ChartTooltip
                    cursor={{ fill: 'transparent' }}
                    content={<ChartTooltipContent />}
                  />
                  <Bar dataKey="usos" fill="var(--color-usos)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function MetricCard({ title, value, icon: Icon }: { title: string; value: string; icon: any }) {
  return (
    <Card className="rounded-2xl border-slate-100 shadow-sm hover:shadow-md transition-shadow bg-white">
      <CardContent className="p-5 flex flex-col justify-between h-full">
        <div className="flex justify-between items-start mb-4">
          <span className="text-sm font-bold text-slate-500 leading-tight pr-2">{title}</span>
          <Icon className="w-4 h-4 text-slate-300 shrink-0" />
        </div>
        <div className="text-3xl font-black text-slate-900 tracking-tight">{value}</div>
      </CardContent>
    </Card>
  )
}
