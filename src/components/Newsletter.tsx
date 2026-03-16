import { Mail } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'

export default function Newsletter() {
  const { toast } = useToast()

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: 'Inscrição confirmada!',
      description: 'Você receberá nossas novidades em breve.',
    })
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <section className="mt-20 bg-primary/5 rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto mb-10 border border-primary/10">
      <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
      <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Assine nossa Newsletter</h2>
      <p className="text-muted-foreground mb-6">
        Receba atualizações sobre novos lançamentos, dicas de montagem e ofertas exclusivas.
      </p>
      <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={handleSubscribe}>
        <Input placeholder="Seu melhor e-mail" type="email" required className="bg-background" />
        <Button type="submit">Cadastrar</Button>
      </form>
    </section>
  )
}
