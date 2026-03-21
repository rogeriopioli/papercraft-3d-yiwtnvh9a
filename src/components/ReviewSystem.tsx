import { useEffect, useState } from 'react'
import { Star, User, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'
import { useAuth } from '@/hooks/use-auth'
import { createReview, getReviewsByProduct, ReviewData } from '@/services/reviews'
import { useRealtime } from '@/hooks/use-realtime'

interface ReviewSystemProps {
  productId: string
}

export default function ReviewSystem({ productId }: ReviewSystemProps) {
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [reviews, setReviews] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const { user } = useAuth()
  const { toast } = useToast()

  const loadReviews = async () => {
    try {
      const data = await getReviewsByProduct(productId)
      setReviews(data)
    } catch (error) {
      console.error('Failed to load reviews', error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadReviews()
  }, [productId])

  useRealtime('reviews', () => loadReviews())

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (rating === 0) {
      toast({
        title: 'Atenção',
        description: 'Por favor, selecione uma nota nas estrelas.',
        variant: 'destructive',
      })
      return
    }

    setIsSubmitting(true)
    try {
      await createReview({
        product: productId,
        user: user?.id,
        rating,
        comment,
      })
      toast({
        title: 'Avaliação enviada!',
        description: 'Obrigado pelo seu feedback.',
      })
      setRating(0)
      setComment('')
      ;(e.target as HTMLFormElement).reset()
    } catch (error) {
      toast({
        title: 'Erro',
        description: 'Ocorreu um erro ao enviar sua avaliação.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="mt-16 bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-200">
      <h2 className="text-3xl font-heading font-black mb-8 text-slate-900">Avaliações</h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold mb-6 text-slate-800">Deixe sua avaliação</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-bold text-slate-600 mb-2">Sua nota</label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className={`p-1.5 rounded-lg transition-colors ${
                        rating >= star
                          ? 'text-amber-400 bg-amber-50'
                          : 'text-slate-300 hover:bg-slate-100'
                      }`}
                    >
                      <Star className={`w-8 h-8 ${rating >= star ? 'fill-current' : ''}`} />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-600 mb-2">Comentário</label>
                <Textarea
                  placeholder="O que você achou da montagem deste modelo?"
                  className="resize-none min-h-[120px] rounded-xl text-base"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full h-12 text-base font-bold rounded-xl"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Avaliação'}
              </Button>
            </form>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          {isLoading ? (
            <div className="flex items-center justify-center py-12 text-slate-400">
              <Loader2 className="w-8 h-8 animate-spin" />
            </div>
          ) : reviews.length > 0 ? (
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
              {reviews.map((rev) => (
                <div
                  key={rev.id}
                  className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-lg">
                        {rev.expand?.user?.email?.charAt(0).toUpperCase() || (
                          <User className="w-5 h-5" />
                        )}
                      </div>
                      <div>
                        <p className="font-bold text-slate-800">
                          {rev.expand?.user?.email
                            ? rev.expand.user.email.split('@')[0]
                            : 'Cliente Verificado'}
                        </p>
                        <div className="flex text-amber-400 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3.5 h-3.5 ${i < rev.rating ? 'fill-current' : 'text-slate-200'}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-slate-400">
                      {new Date(rev.created).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                  <p className="text-base text-slate-600 leading-relaxed font-medium">
                    {rev.comment}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center shadow-sm">
              <Star className="w-12 h-12 text-slate-200 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-slate-700 mb-2">Nenhuma avaliação ainda</h4>
              <p className="text-slate-500 font-medium">
                Seja o primeiro a avaliar este modelo de papercraft!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
