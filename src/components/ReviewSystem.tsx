import { useState } from 'react'
import { Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'

export default function ReviewSystem() {
  const [rating, setRating] = useState(0)
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (rating === 0) {
      toast({
        title: 'Atenção',
        description: 'Por favor, selecione uma nota.',
        variant: 'destructive',
      })
      return
    }
    toast({
      title: 'Avaliação enviada!',
      description: 'Obrigado pelo seu feedback.',
    })
    setRating(0)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <section className="mt-16 bg-muted/30 rounded-2xl p-6 md:p-8 border border-border/50">
      <h2 className="text-2xl font-heading font-bold mb-8">Avaliações</h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-card rounded-xl p-6 shadow-sm border">
            <h3 className="text-lg font-semibold mb-4">Deixe sua avaliação</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium mb-2">Sua nota</label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className={`p-1 rounded hover:bg-muted transition-colors ${
                        rating >= star ? 'text-amber-400' : 'text-muted-foreground/30'
                      }`}
                    >
                      <Star className={`w-6 h-6 ${rating >= star ? 'fill-current' : ''}`} />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Comentário</label>
                <Textarea
                  placeholder="O que você achou da montagem?"
                  className="resize-none"
                  rows={4}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Fotos do seu modelo pronto</label>
                <Input
                  type="file"
                  accept="image/*"
                  multiple
                  className="cursor-pointer file:text-foreground"
                />
              </div>
              <Button type="submit" className="w-full">
                Enviar Avaliação
              </Button>
            </form>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4">
            <div className="bg-card p-5 rounded-xl border shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    M
                  </div>
                  <div>
                    <p className="font-medium text-sm">Marcos Silva</p>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <span className="text-xs text-muted-foreground">Há 2 dias</span>
              </div>
              <p className="text-sm text-foreground/80 mb-3">
                Modelo incrível! As instruções são super claras e o resultado final é idêntico às
                fotos. Recomendo muito para quem tem paciência.
              </p>
              <div className="flex gap-2">
                <img
                  src="https://img.usecurling.com/p/200/200?q=low%20poly%20papercraft%20model&color=gray"
                  className="w-16 h-16 rounded-lg object-cover border"
                  alt="Review photo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
