import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '@/hooks/use-auth'
import { getSubscribers, Subscriber } from '@/services/subscribers'
import { getSupportMessages, SupportMessageData } from '@/services/support_messages'
import { useRealtime } from '@/hooks/use-realtime'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Hexagon, LogOut, Mail, Users, MessageSquare } from 'lucide-react'

export default function Admin() {
  const { user, signIn, signOut, loading } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [isLoggingIn, setIsLoggingIn] = useState(false)

  const [subscribers, setSubscribers] = useState<Subscriber[]>([])
  const [messages, setMessages] = useState<SupportMessageData[]>([])

  const loadData = async () => {
    try {
      const [subs, msgs] = await Promise.all([getSubscribers(), getSupportMessages()])
      setSubscribers(subs)
      setMessages(msgs)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    if (user?.email === 'rogeriopioli@hotmail.com') {
      loadData()
    }
  }, [user])

  useRealtime('subscribers', () => loadData(), user?.email === 'rogeriopioli@hotmail.com')
  useRealtime('support_messages', () => loadData(), user?.email === 'rogeriopioli@hotmail.com')

  if (loading)
    return (
      <div className="p-20 text-center text-slate-500 font-medium animate-pulse">Carregando...</div>
    )

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoggingIn(true)
    setLoginError('')
    const { error } = await signIn(email, password)
    if (error) setLoginError('Credenciais inválidas.')
    setIsLoggingIn(false)
  }

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-20 max-w-md">
        <Card className="border-slate-200 shadow-sm rounded-3xl overflow-hidden">
          <CardHeader className="bg-slate-50 pb-8 text-center pt-10 border-b border-slate-100">
            <Hexagon className="w-12 h-12 text-primary mx-auto mb-4" />
            <CardTitle className="text-2xl font-heading font-black">Admin Restrito</CardTitle>
          </CardHeader>
          <CardContent className="pt-8 p-6">
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

  if (user.email !== 'rogeriopioli@hotmail.com') {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-heading font-black text-slate-900 mb-4">Acesso Negado</h1>
        <p className="text-slate-500 mb-8 font-medium">
          Você não tem permissão para acessar esta página.
        </p>
        <Button onClick={signOut} variant="outline" className="rounded-full px-8">
          Sair
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-heading font-black text-slate-900 flex items-center gap-3">
            <Hexagon className="text-primary w-8 h-8" /> Painel de Controle
          </h1>
          <p className="text-slate-500 font-medium mt-2">
            Visão geral das operações da PapercraftRP.
          </p>
        </div>
        <Button
          onClick={signOut}
          variant="secondary"
          className="gap-2 rounded-xl font-bold border-slate-200"
        >
          <LogOut className="w-4 h-4" /> Sair
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-slate-200 shadow-sm rounded-3xl">
          <CardHeader className="border-b border-slate-100 pb-5">
            <CardTitle className="text-xl font-bold flex items-center gap-2 text-slate-800">
              <Users className="w-5 h-5 text-primary" /> Assinantes ({subscribers.length})
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-slate-100 max-h-[500px] overflow-y-auto">
              {subscribers.map((sub) => (
                <div
                  key={sub.id}
                  className="p-5 hover:bg-slate-50 transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">{sub.email}</p>
                      <p className="text-xs text-slate-500 font-medium">
                        Desde {new Date(sub.created!).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                  </div>
                  {sub.coupon_used ? (
                    <span className="text-xs font-bold text-orange-600 bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
                      Cupom Usado
                    </span>
                  ) : (
                    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                      Ativo
                    </span>
                  )}
                </div>
              ))}
              {subscribers.length === 0 && (
                <p className="p-6 text-center text-slate-500 font-medium">
                  Nenhum assinante ainda.
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 shadow-sm rounded-3xl">
          <CardHeader className="border-b border-slate-100 pb-5">
            <CardTitle className="text-xl font-bold flex items-center gap-2 text-slate-800">
              <MessageSquare className="w-5 h-5 text-primary" /> Mensagens de Suporte (
              {messages.length})
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-slate-100 max-h-[500px] overflow-y-auto">
              {messages.map((msg) => (
                <div key={msg.id} className="p-5 hover:bg-slate-50 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-bold text-slate-800">{msg.name}</p>
                      <a
                        href={`mailto:${msg.email}`}
                        className="text-sm text-primary hover:underline"
                      >
                        {msg.email}
                      </a>
                    </div>
                    <span className="text-xs text-slate-400 font-medium">
                      {new Date(msg.created!).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-700 text-sm mb-1">{msg.subject}</h4>
                  <p className="text-sm text-slate-600 bg-white border border-slate-100 p-3 rounded-xl mt-2 leading-relaxed">
                    {msg.message}
                  </p>
                </div>
              ))}
              {messages.length === 0 && (
                <p className="p-6 text-center text-slate-500 font-medium">Nenhuma mensagem.</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
