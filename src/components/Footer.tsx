import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Instagram, Twitter, ShieldCheck, ArrowRight, Hexagon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { createSubscriber } from '@/services/subscribers'

export default function Footer() {
  const { toast } = useToast()
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await createSubscriber(email)
      toast({
        title: 'Inscrição confirmada!',
        description: 'Você recebeu 10% de desconto! Use este e-mail na sua primeira compra.',
      })
      setEmail('')
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Aviso',
        description: 'E-mail já inscrito ou ocorreu um erro na solicitação.',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t-4 border-primary mt-20">
      <div className="container mx-auto px-4">
        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Col 1 */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group mb-4">
              <Hexagon className="w-8 h-8 text-primary fill-current group-hover:scale-105 transition-transform" />
              <span className="font-heading font-black text-2xl text-white tracking-tight">
                PapercraftRP
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400 font-medium">
              Acreditamos que dobrar papel transforma o estresse em uma obra de arte. Inspire-se e
              decore seu mundo com a geometria terapêutica.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-white font-heading font-bold text-lg mb-6">Sobre Nós / Missão</h4>
            <p className="text-sm leading-relaxed text-slate-400 font-medium">
              Nossa missão é trazer a terapia da arte manual através do papercraft low-poly.
              Transformamos folhas de papel plano em impressionantes esculturas tridimensionais que
              promovem foco e relaxamento a cada dobra, unindo design digital e montagem tátil.
            </p>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-white font-heading font-bold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-3 text-sm font-medium flex flex-col items-start">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/como-montar" className="hover:text-primary transition-colors">
                  Como Montar
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="hover:text-primary transition-colors">
                  Lista de Desejos
                </Link>
              </li>
              <li>
                <Link to="/termos" className="hover:text-primary transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/suporte" className="hover:text-primary transition-colors">
                  Contato / Suporte
                </Link>
              </li>
              <li>
                <Link to="/admin" className="hover:text-primary transition-colors">
                  Painel Administrativo
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h4 className="text-white font-heading font-bold text-lg mb-6">Newsletter 3D</h4>
            <p className="text-sm text-slate-400 mb-4 font-medium">
              Assine e receba <strong className="text-primary">10% de desconto</strong> na primeira
              compra, além de moldes gratuitos mensais!
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
              <Input
                placeholder="Seu melhor e-mail..."
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 h-12 rounded-xl focus-visible:ring-primary"
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="h-12 rounded-xl font-bold w-full"
              >
                {isLoading ? 'Inscrevendo...' : 'Assinar Agora'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar with Trust Badges */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-slate-500 font-medium">
            © {new Date().getFullYear()} PapercraftRP. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-1 text-xs text-emerald-400 font-bold mr-2 bg-emerald-400/10 px-3 py-1.5 rounded-full border border-emerald-400/20">
              <ShieldCheck className="w-4 h-4" /> Pagamentos Seguros
            </div>
            <img
              src="https://img.usecurling.com/i?q=visa&shape=lineal-color"
              alt="Visa"
              className="h-7 w-auto opacity-70 hover:opacity-100 transition-opacity bg-white/5 p-1 rounded"
            />
            <img
              src="https://img.usecurling.com/i?q=mastercard&shape=lineal-color"
              alt="Mastercard"
              className="h-7 w-auto opacity-70 hover:opacity-100 transition-opacity bg-white/5 p-1 rounded"
            />
            <img
              src="https://img.usecurling.com/i?q=pix&shape=lineal-color"
              alt="Pix"
              className="h-7 w-auto opacity-70 hover:opacity-100 transition-opacity bg-white/5 p-1 rounded"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
