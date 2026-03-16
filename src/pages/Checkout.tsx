import { useState, useMemo } from 'react'
import { useSearchParams, useNavigate, Link } from 'react-router-dom'
import { CreditCard, Lock, CheckCircle2, ChevronRight, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { useToast } from '@/hooks/use-toast'
import useCartStore from '@/stores/useCartStore'
import { products } from '@/data/products'

export default function Checkout() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { toast } = useToast()
  const { items: cartItems, clearCart } = useCartStore()

  const productId = searchParams.get('productId')
  const [isSuccess, setIsSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const checkoutItems = useMemo(() => {
    if (productId) {
      const product = products.find((p) => p.id === productId)
      return product ? [{ ...product, quantity: 1 }] : []
    }
    return cartItems
  }, [productId, cartItems])

  const total = checkoutItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

  if (checkoutItems.length === 0 && !isSuccess) {
    return (
      <div className="container mx-auto px-4 py-20 text-center max-w-lg">
        <ShoppingBag className="w-16 h-16 text-muted-foreground mx-auto mb-6 opacity-30" />
        <h2 className="text-2xl font-heading font-bold mb-4">Nenhum produto selecionado</h2>
        <p className="text-muted-foreground mb-8">
          Seu carrinho está vazio ou o produto selecionado não foi encontrado.
        </p>
        <Button size="lg" onClick={() => navigate('/')}>
          Voltar para a Loja
        </Button>
      </div>
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate payment processing
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
      <div className="container mx-auto px-4 py-20 text-center max-w-lg animate-in fade-in zoom-in duration-500">
        <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
        <h1 className="text-3xl font-heading font-bold mb-4">Pagamento Aprovado!</h1>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          Obrigado pela sua compra. Os links para download dos seus modelos de papercraft em PDF
          foram enviados para o seu e-mail e estão prontos para impressão.
        </p>
        <Button size="lg" onClick={() => navigate('/')} className="w-full">
          Explorar Mais Modelos
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Breadcrumbs */}
      <nav className="flex items-center text-sm text-muted-foreground mb-8">
        <Link to="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <ChevronRight className="w-4 h-4 mx-1" />
        <span className="text-foreground font-medium">Finalizar Compra</span>
      </nav>

      <h1 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-foreground">
        Finalizar Compra
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Checkout Form */}
        <div className="lg:col-span-7 space-y-8">
          <form id="checkout-form" onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Details */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border shadow-subtle space-y-6">
              <h2 className="text-xl font-semibold border-b pb-4">Dados Pessoais</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input id="name" required placeholder="Ex: João da Silva" className="h-12" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail (para recebimento dos arquivos)</Label>
                  <Input
                    id="email"
                    required
                    type="email"
                    placeholder="joao@exemplo.com"
                    className="h-12"
                  />
                </div>
              </div>
            </div>

            {/* Payment Details */}
            <div className="bg-card p-6 md:p-8 rounded-2xl border shadow-subtle space-y-6">
              <h2 className="text-xl font-semibold border-b pb-4 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-primary" /> Pagamento Seguro
              </h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="card">Número do Cartão</Label>
                  <Input id="card" required placeholder="0000 0000 0000 0000" className="h-12" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Validade</Label>
                    <Input id="expiry" required placeholder="MM/AA" className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" required placeholder="123" className="h-12" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-5">
          <div className="bg-secondary/30 p-6 md:p-8 rounded-2xl border shadow-subtle sticky top-24">
            <h2 className="text-xl font-semibold mb-6">Resumo do Pedido</h2>

            <div className="space-y-6 mb-8 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
              {checkoutItems.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-20 rounded-xl overflow-hidden border bg-background shrink-0">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <h4 className="font-medium text-sm leading-tight mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground mb-2">Qtd: {item.quantity}</p>
                    <div className="font-bold text-primary">
                      R$ {(item.price * item.quantity).toFixed(2).replace('.', ',')}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Separator className="my-6" />

            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center text-muted-foreground">
                <span>Subtotal</span>
                <span>R$ {total.toFixed(2).replace('.', ',')}</span>
              </div>
              <div className="flex justify-between items-center text-green-600">
                <span>Frete (Produto Digital)</span>
                <span>Grátis</span>
              </div>
              <div className="flex justify-between items-center text-xl font-bold pt-4 border-t">
                <span>Total</span>
                <span className="text-primary">R$ {total.toFixed(2).replace('.', ',')}</span>
              </div>
            </div>

            <Button
              type="submit"
              form="checkout-form"
              size="lg"
              className="w-full h-14 text-lg hover:scale-[1.02] transition-transform"
              disabled={isLoading}
            >
              {isLoading ? 'Processando...' : 'Confirmar Compra'}
            </Button>

            <p className="text-center flex items-center justify-center gap-2 text-sm text-muted-foreground mt-6">
              <Lock className="w-4 h-4" /> Pagamento 100% Seguro
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
