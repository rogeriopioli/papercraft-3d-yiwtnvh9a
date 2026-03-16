import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

export default function Terms() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <nav className="flex items-center text-sm text-muted-foreground mb-8">
        <Link to="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <ChevronRight className="w-4 h-4 mx-1" />
        <span className="text-foreground font-medium truncate">Termos de Uso e Licença</span>
      </nav>

      <div className="mb-12">
        <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-foreground">
          Termos de Uso e Licença
        </h1>
        <p className="text-lg text-muted-foreground">
          License and Terms of Use for PaperCraft Hub digital products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        {/* PT */}
        <div className="space-y-6">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-2">
            Português
          </div>
          <p className="text-foreground/80 leading-relaxed">
            Ao adquirir nossos modelos de papercraft 3D, você concorda com os seguintes termos:
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-heading font-semibold mb-2 text-foreground">
                1. Uso Pessoal
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Os arquivos digitais (PDF, SVG, DXF, etc.) são estritamente para{' '}
                <strong>uso pessoal</strong>. Você não tem permissão para revender, compartilhar,
                publicar ou distribuir os arquivos de qualquer forma.
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="text-xl font-heading font-semibold mb-2 text-foreground">
                2. Venda de Peças Físicas
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Você pode vender as esculturas físicas montadas a partir de nossos moldes, desde que
                sejam montadas por você mesmo em pequena escala. A produção em massa não é permitida
                sem uma licença comercial específica.
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="text-xl font-heading font-semibold mb-2 text-foreground">
                3. Modificações
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Você pode modificar os arquivos para seu próprio uso, mas os arquivos modificados
                ainda estão sujeitos a estas mesmas regras e não podem ser distribuídos.
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="text-xl font-heading font-semibold mb-2 text-foreground">
                4. Direitos Autorais
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Todos os designs e modelos são propriedades intelectuais protegidas. A compra do
                arquivo não transfere os direitos autorais para você.
              </p>
            </div>
          </div>
        </div>

        {/* EN */}
        <div className="space-y-6">
          <div className="inline-block px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-semibold mb-2">
            English
          </div>
          <p className="text-foreground/80 leading-relaxed">
            By purchasing our 3D papercraft templates, you agree to the following terms:
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-heading font-semibold mb-2 text-foreground">
                1. Personal Use
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The digital files (PDF, SVG, DXF, etc.) are strictly for{' '}
                <strong>personal use</strong>. You are not allowed to resell, share, publish, or
                distribute the files in any way.
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="text-xl font-heading font-semibold mb-2 text-foreground">
                2. Selling Physical Items
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                You may sell the physical sculptures assembled from our templates, provided they are
                hand-assembled by yourself on a small scale. Mass production is not allowed without
                a specific commercial license.
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="text-xl font-heading font-semibold mb-2 text-foreground">
                3. Modifications
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                You may modify the files for your own use, but the modified files are still subject
                to these same rules and cannot be distributed.
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="text-xl font-heading font-semibold mb-2 text-foreground">
                4. Copyright
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                All designs and templates are protected intellectual property. Purchasing the file
                does not transfer the copyright to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
