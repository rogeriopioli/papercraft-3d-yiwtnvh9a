import { Heart, Instagram, Mail, Twitter } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-primary fill-primary" />
              <span className="text-heading font-bold text-xl">PaperCraft Hub</span>
            </div>
            <p className="text-secondary-foreground/70 text-sm mb-6">
              Dando vida ao papel com moldes 3D lowpoly incríveis. Faça você mesmo e decore seu
              mundo.
            </p>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary hover:bg-white/10 rounded-full text-secondary-foreground"
              >
                <Instagram className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary hover:bg-white/10 rounded-full text-secondary-foreground"
              >
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Categorias</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Animais
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Decoração
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Máscaras
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Personagens
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Ajuda</h4>
            <ul className="space-y-2 text-sm text-secondary-foreground/70">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Como montar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Dúvidas Frequentes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Receba moldes grátis</h4>
            <p className="text-sm text-secondary-foreground/70 mb-4">
              Inscreva-se na nossa newsletter e receba um molde exclusivo por mês.
            </p>
            <div className="flex gap-2">
              <Input
                placeholder="Seu e-mail"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:ring-primary"
              />
              <Button variant="default">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-secondary-foreground/50">
          <p>© 2026 PaperCraft Hub. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Feito com cuidado para criativos.</p>
        </div>
      </div>
    </footer>
  )
}
