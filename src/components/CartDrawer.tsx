import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react'
import useCartStore from '@/stores/useCartStore'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Badge } from '@/components/ui/badge'
import { ReactNode, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CartDrawer({ children }: { children: ReactNode }) {
  const { items, updateQuantity, removeItem, subtotal, totalItems } = useCartStore()
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const handleCheckout = () => {
    setOpen(false)
    navigate('/checkout')
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader className="px-1">
          <SheetTitle className="flex items-center gap-2 text-heading text-xl">
            <ShoppingBag className="w-5 h-5 text-primary" />
            Seu Carrinho
            <Badge variant="secondary" className="ml-2 bg-accent text-accent-foreground">
              {totalItems} itens
            </Badge>
          </SheetTitle>
          <SheetDescription className="sr-only">
            Revise os itens do seu carrinho antes de prosseguir para o pagamento seguro.
          </SheetDescription>
        </SheetHeader>

        <Separator className="my-4" />

        <ScrollArea className="flex-1 -mx-6 px-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-40 text-muted-foreground">
              <ShoppingBag className="w-12 h-12 mb-4 opacity-20" />
              <p>Seu carrinho está vazio.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 group">
                  <div className="w-20 h-20 rounded-md overflow-hidden border bg-muted shrink-0">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-medium text-sm line-clamp-2 leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-primary font-semibold mt-1">
                        R$ {item.price.toFixed(2).replace('.', ',')}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border rounded-md h-8">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-full w-8 rounded-none"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-full w-8 rounded-none"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-muted-foreground hover:text-destructive"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>

        <div className="pt-6 border-t mt-auto">
          <div className="flex justify-between items-center mb-4">
            <span className="font-semibold text-muted-foreground">Subtotal</span>
            <span className="font-heading font-bold text-xl">
              R$ {subtotal.toFixed(2).replace('.', ',')}
            </span>
          </div>
          <Button
            className="w-full"
            size="lg"
            disabled={items.length === 0}
            onClick={handleCheckout}
          >
            Finalizar Compra
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
