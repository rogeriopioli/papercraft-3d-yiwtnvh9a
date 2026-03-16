import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'
import { Product } from '@/data/products'

interface CheckoutDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  product: Product
}

export default function CheckoutDialog({ open, onOpenChange, product }: CheckoutDialogProps) {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      onOpenChange(false)
      toast({
        title: 'Pagamento Aprovado!',
        description: 'Os arquivos foram enviados para o seu e-mail.',
      })
    }, 1500)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Finalizar Compra</DialogTitle>
          <DialogDescription>
            Preencha seus dados para receber o arquivo digital de {product.title}.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleCheckout} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label>Nome Completo</Label>
            <Input required placeholder="João da Silva" />
          </div>
          <div className="space-y-2">
            <Label>E-mail (para recebimento)</Label>
            <Input required type="email" placeholder="joao@exemplo.com" />
          </div>
          <div className="space-y-2">
            <Label>Número do Cartão</Label>
            <Input required placeholder="0000 0000 0000 0000" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Validade</Label>
              <Input required placeholder="MM/AA" />
            </div>
            <div className="space-y-2">
              <Label>CVV</Label>
              <Input required placeholder="123" />
            </div>
          </div>

          <div className="bg-muted p-3 rounded-lg flex justify-between items-center mt-4">
            <span className="font-medium">Total:</span>
            <span className="font-bold text-lg text-primary">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </span>
          </div>

          <DialogFooter className="mt-6">
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Processando...' : 'Pagar Agora'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
