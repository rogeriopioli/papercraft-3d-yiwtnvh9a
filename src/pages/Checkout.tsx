import { useState, useMemo } from 'react'
import { useSearchParams, useNavigate, Link } from 'react-router-dom'
import { CreditCard, Lock, CheckCircle2, ChevronRight, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { useToast } from '@/hooks/use-toast'
import useCartStore from '@/stores/useCartStore'
import useProductStore from '@/stores/useProductStore'

export default function Checkout() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { toast } = useToast()
  const { items: cartItems, clearCart } = useCartStore()
  const { products, isLoading: isLoadingProducts } = useProductStore()

  const productId = searchParams.get('productId')
  const [isSuccess, setIsSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const checkoutItems = useMemo(() => {
    if (productId) {
      const product = products.find((p) => p.id === productId)
      return product ? [{ ...product, quantity: 1 }] : []
    }
    return cartItems
  }, [productId, cartItems, products])

  const total = checkoutItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

  if (isLoadingProducts) {
    return (
      <div className="flex justify-center items-center py-40">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  if (checkoutItems.length === 0 && !isSuccess) {
    return (
      <div className="container mx-auto px-4 py-20 text-center max-w-lg bg-slate-50 rounded-3xl mt-12 border border-slate-200">
        <ShoppingBag className="w-20 h-20 text-slate-300 mx-auto mb-6" />
        <h2 className="text-3xl font-heading font-black mb-4 text-slate-900">Carrinho Vazio</h2>
        <p className="text-slate-500 font-medium mb-8 text-lg">
          Selecione alguns modelos incríveis antes de finalizar a compra.
        </p>
        <Button size="lg" onClick={() => navigate('/')} className="rounded-full px-8 font-bold">
          Explorar Catálogo
        </Button>
      </div>
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setIsSuccess(true)
      if (!productId) {
        clearCart()
      }
      toast({
        title: 'Pagamento Aprovado!',
        description: 'Os arquivos foram enviados para o seu e-mail.',
      })
    }, 2000)
  }

  if (isSuccess) {
    return (
      <div className="container mx-auto px-4 py-20 text-center max-w-lg animate-in fade-in zoom-in duration-500 mt-12 bg-emerald-50 rounded-3xl border-2 border-emerald-100">
        <CheckCircle2 className="w-24 h-24 text-emerald-500 mx-auto mb-6 drop-shadow-sm" />
        <h1 className="text-4xl font-heading font-black mb-4 text-emerald-900">Sucesso!</h1>
        <p className="text-emerald-800 font-medium mb-8 text-lg leading-relaxed">
          Sua compra foi aprovada! Os links para download em PDF foram enviados para o seu e-mail e
          estão prontos para impressão.
        </p>
        <Button
          size="lg"
          onClick={() => navigate('/')}
          className="w-full rounded-xl bg-emerald-600 hover:bg-emerald-700 font-bold h-14 text-lg"
        >
          Explorar Mais Modelos
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <nav className="flex items-center text-sm font-bold text-slate-400 mb-8">
        <Link to="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <ChevronRight className="w-4 h-4 mx-2" />
        <span className="text-primary">Finalizar Compra</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-heading font-black mb-8 text-slate-900">
        Finalizar Compra
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Form */}
        <div className="lg:col-span-7 space-y-8">
          <form id="checkout-form" onSubmit={handleSubmit} className="space-y-8">
            <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-2xl font-black border-b border-slate-100 pb-4 text-slate-800">
                Dados Pessoais
              </h2>
              <div className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-bold text-slate-700">
                    Nome Completo
                  </Label>
                  <Input
                    id="name"
                    required
                    placeholder="Ex: João da Silva"
                    className="h-14 rounded-xl bg-slate-50 text-lg border-slate-200 focus-visible:ring-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-bold text-slate-700">
                    E-mail para Recebimento
                  </Label>
                  <Input
                    id="email"
                    required
                    type="email"
                    placeholder="joao@exemplo.com"
                    className="h-14 rounded-xl bg-slate-50 text-lg border-slate-200 focus-visible:ring-primary"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-2xl font-black border-b border-slate-100 pb-4 text-slate-800 flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-primary" /> Pagamento
              </h2>
              <div className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="card" className="font-bold text-slate-700">
                    Número do Cartão
                  </Label>
                  <Input
                    id="card"
                    required
                    placeholder="0000 0000 0000 0000"
                    className="h-14 rounded-xl bg-slate-50 text-lg border-slate-200 focus-visible:ring-primary font-mono tracking-widest"
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="expiry" className="font-bold text-slate-700">
                      Validade
                    </Label>
                    <Input
                      id="expiry"
                      required
                      placeholder="MM/AA"
                      className="h-14 rounded-xl bg-slate-50 text-lg border-slate-200 focus-visible:ring-primary text-center"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv" className="font-bold text-slate-700">
                      CVV
                    </Label>
                    <Input
                      id="cvv"
                      required
                      placeholder="123"
                      className="h-14 rounded-xl bg-slate-50 text-lg border-slate-200 focus-visible:ring-primary text-center font-mono"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Summary */}
        <div className="lg:col-span-5">
          <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm sticky top-28">
            <h2 className="text-2xl font-black mb-6 text-slate-800">Resumo do Pedido</h2>

            <div className="space-y-6 mb-8 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
              {checkoutItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 items-center bg-white p-3 rounded-2xl border border-slate-100 shadow-sm"
                >
                  <div className="w-20 h-20 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                    <img
                      src={item.images?.[0]}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-800 line-clamp-2 leading-tight mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs font-bold text-slate-400 mb-1">Qtd: {item.quantity}</p>
                    <div className="font-black text-primary text-lg">
                      R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Separator className="my-6 bg-slate-200 h-1" />

            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center text-slate-600 font-bold">
                <span>Subtotal</span>
                <span>R$ {total.toFixed(2).replace('.', ',')}</span>
              </div>
              <div className="flex justify-between items-center text-emerald-600 font-bold">
                <span>Frete (Envio Digital)</span>
                <span>Grátis</span>
              </div>
              <div className="flex justify-between items-center text-2xl font-black pt-4 border-t border-slate-200">
                <span>Total</span>
                <span className="text-primary">R$ {total.toFixed(2).replace('.', ',')}</span>
              </div>
            </div>

            <Button
              type="submit"
              form="checkout-form"
              size="lg"
              className="w-full h-16 text-xl font-bold rounded-xl hover:scale-[1.02] transition-transform shadow-md"
              disabled={isLoading}
            >
              {isLoading ? 'Processando...' : 'Confirmar Compra'}
            </Button>

            <div className="mt-6 flex items-center justify-center gap-2 text-sm font-bold text-emerald-600 bg-emerald-50 py-3 rounded-xl border border-emerald-100">
              <Lock className="w-4 h-4" /> Pagamento 100% Seguro
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
