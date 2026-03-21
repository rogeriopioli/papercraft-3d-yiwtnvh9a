import { useEffect, useState } from 'react'
import { Outlet, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/use-auth'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar'
import {
  LayoutGrid,
  Package,
  ShoppingCart,
  Users,
  Ticket,
  Tags,
  Mail,
  Book,
  MessageSquare,
  LogOut,
  Hexagon,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutGrid },
  { name: 'Produtos', path: '/admin/produtos', icon: Package },
  { name: 'Pedidos', path: '/admin/pedidos', icon: ShoppingCart },
  { name: 'Usuários', path: '/admin/usuarios', icon: Users },
  { name: 'Cupons', path: '/admin/cupons', icon: Ticket },
  { name: 'Categorias', path: '/admin/categorias', icon: Tags },
  { name: 'E-mails', path: '/admin/emails', icon: Mail },
  { name: 'Base de Conhecimento', path: '/admin/kb', icon: Book },
  { name: 'Conversas IA', path: '/admin/chat', icon: MessageSquare },
]

export default function AdminLayout() {
  const { user, signIn, signOut, loading } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [isLoggingIn, setIsLoggingIn] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoggingIn(true)
    setLoginError('')
    const { error } = await signIn(email, password)
    if (error) setLoginError('Credenciais inválidas.')
    setIsLoggingIn(false)
  }

  const handleLogout = () => {
    signOut()
    navigate('/')
  }

  if (loading)
    return <div className="p-20 text-center text-slate-500 animate-pulse">Carregando...</div>

  if (!user || user.email !== 'rogeriopioli@hotmail.com') {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md border-slate-200 shadow-sm rounded-3xl overflow-hidden">
          <CardHeader className="bg-white pb-8 text-center pt-10 border-b border-slate-100">
            <Hexagon className="w-12 h-12 text-primary mx-auto mb-4" />
            <CardTitle className="text-2xl font-heading font-black">Admin Restrito</CardTitle>
          </CardHeader>
          <CardContent className="bg-white pt-8 p-6">
            <form onSubmit={handleLogin} className="space-y-4">
              {loginError && <p className="text-sm text-red-500 font-bold">{loginError}</p>}
              <Input
                type="email"
                placeholder="E-mail admin"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 rounded-xl"
              />
              <Input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-12 rounded-xl"
              />
              <Button
                type="submit"
                className="w-full h-12 rounded-xl text-base font-bold"
                disabled={isLoggingIn}
              >
                {isLoggingIn ? 'Entrando...' : 'Entrar no Painel'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-slate-50">
        <Sidebar className="border-r border-slate-200 bg-white">
          <div className="p-6 flex items-center gap-3 border-b border-slate-100">
            <div className="bg-primary p-2 rounded-xl">
              <Hexagon className="w-6 h-6 text-white fill-white/20" />
            </div>
            <span className="font-heading font-black text-xl text-slate-900 tracking-tight">
              PapercraftRP
            </span>
          </div>
          <SidebarContent className="p-4 gap-6">
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu className="gap-2">
                  {navItems.map((item) => {
                    const isActive = location.pathname.includes(item.path)
                    return (
                      <SidebarMenuItem key={item.path}>
                        <SidebarMenuButton
                          asChild
                          isActive={isActive}
                          className={cn(
                            'h-12 rounded-xl font-medium transition-all',
                            isActive
                              ? 'bg-primary text-white hover:bg-primary/90 hover:text-white'
                              : 'text-slate-600 hover:bg-slate-100',
                          )}
                        >
                          <NavLink to={item.path} className="flex items-center gap-3 px-4">
                            <item.icon
                              className={cn('w-5 h-5', isActive ? 'text-white' : 'text-slate-400')}
                            />
                            <span>{item.name}</span>
                          </NavLink>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    )
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <div className="mt-auto border-t border-slate-100 pt-4">
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    className="h-12 rounded-xl text-red-600 font-bold hover:bg-red-50 hover:text-red-700"
                  >
                    <button onClick={handleLogout} className="flex items-center gap-3 px-4 w-full">
                      <LogOut className="w-5 h-5" />
                      <span>Sair</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </div>
          </SidebarContent>
        </Sidebar>

        <main className="flex-1 p-8 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  )
}
