import { Link } from 'react-router-dom'
import { Instagram, Mail, MapPin, ShieldCheck, ArrowRight } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'

export default function Footer() {
  const { toast } = useToast()

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: 'Inscrição confirmada!',
      description: 'Você receberá nossas novidades e cupons em breve.',
    })
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t-4 border-primary mt-20 relative">
      <div className="container mx-auto px-4">
        {/* Newsletter Section - Placed directly above the footer columns */}
        <div className="bg-primary rounded-3xl p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 text-white shadow-2xl relative overflow-hidden -mt-32">
          {/* Subtle Pattern Background */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent mix-blend-overlay"></div>

          <div className="relative z-10 md:w-1/2">
            <h3 className="text-3xl md:text-4xl font-heading font-black mb-3">
              Receba Novidades 3D
            </h3>
            <p className="text-blue-100 text-lg">
              Assine nossa newsletter e receba 10% de desconto na primeira compra, além de moldes
              gratuitos mensais exclusivos.
            </p>
          </div>

          <div className="relative z-10 w-full md:w-1/2">
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <Input
                placeholder="Seu melhor e-mail..."
                type="email"
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-14 rounded-xl focus-visible:ring-white flex-1 text-base"
              />
              <Button
                type="submit"
                variant="secondary"
                className="h-14 rounded-xl text-primary font-bold px-8 hover:bg-white active:scale-95 transition-transform"
              >
                Assinar <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Col 1 */}
          <div>
            <h4 className="text-white font-heading font-bold text-xl mb-6">Sobre Nós / Missão</h4>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              Nossa missão é trazer a terapia da arte manual através do papercraft low-poly.
              Transformamos folhas de papel plano em impressionantes esculturas tridimensionais que
              decoram e inspiram, promovendo foco e relaxamento a cada dobra.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-white font-heading font-bold text-xl mb-6">Links Rápidos</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <Link to="/" className="hover:text-primary transition-colors flex items-center">
                  Catálogo de Produtos
                </Link>
              </li>
              <li>
                <Link
                  to="/como-montar"
                  className="hover:text-primary transition-colors flex items-center"
                >
                  Como Montar
                </Link>
              </li>
              <li>
                <Link
                  to="/suporte"
                  className="hover:text-primary transition-colors flex items-center"
                >
                  Suporte e Contato
                </Link>
              </li>
              <li>
                <Link
                  to="/termos"
                  className="hover:text-primary transition-colors flex items-center"
                >
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-white font-heading font-bold text-xl mb-6">Contato</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-center gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-primary">
                  <Mail className="w-4 h-4" />
                </div>
                contato@papercraftrp.com
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-primary">
                  <MapPin className="w-4 h-4" />
                </div>
                São Paulo, SP - Brasil
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-slate-800 p-2 rounded-lg text-primary">
                  <Instagram className="w-4 h-4" />
                </div>
                @papercraftrp
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Trust Badges */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-slate-500 font-medium">
            © 2026 PapercraftRP. Todos os direitos reservados.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-1 text-xs text-emerald-400 font-bold mr-2 bg-emerald-400/10 px-3 py-1.5 rounded-full">
              <ShieldCheck className="w-4 h-4" /> Compra 100% Segura
            </div>
            <img
              src="https://img.usecurling.com/i?q=visa&shape=lineal-color"
              alt="Visa"
              className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity bg-white/5 p-1 rounded"
            />
            <img
              src="https://img.usecurling.com/i?q=mastercard&shape=lineal-color"
              alt="Mastercard"
              className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity bg-white/5 p-1 rounded"
            />
            <img
              src="https://img.usecurling.com/i?q=pix&shape=lineal-color"
              alt="Pix"
              className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity bg-white/5 p-1 rounded"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
