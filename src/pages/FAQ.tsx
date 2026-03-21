import { Link } from 'react-router-dom'
import { HelpCircle, ChevronRight } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export default function FAQ() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <nav className="flex items-center text-sm font-bold text-slate-400 mb-8">
        <Link to="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <ChevronRight className="w-4 h-4 mx-2" />
        <span className="text-primary">FAQ</span>
      </nav>

      <div className="flex flex-col items-center mb-12 text-center">
        <div className="bg-indigo-50 p-4 rounded-2xl mb-4 text-indigo-600">
          <HelpCircle className="w-8 h-8" />
        </div>
        <h1 className="text-3xl md:text-4xl font-heading font-black text-slate-900 mb-4">
          Dúvidas Frequentes
        </h1>
        <p className="text-slate-500 text-lg font-medium">
          Tudo o que você precisa saber sobre nossos modelos de papercraft 3D.
        </p>
      </div>

      <Accordion
        type="single"
        collapsible
        className="w-full bg-white border border-slate-200 rounded-3xl p-6 shadow-sm"
      >
        <AccordionItem value="item-1" className="border-b border-slate-100">
          <AccordionTrigger className="text-left font-bold text-slate-800 hover:text-primary text-lg py-4">
            Como recebo meu arquivo?
          </AccordionTrigger>
          <AccordionContent className="text-slate-600 font-medium text-base leading-relaxed pb-4">
            Após a confirmação do pagamento, você receberá um e-mail com o link para download do
            arquivo em formato PDF, pronto para impressão.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-b border-slate-100">
          <AccordionTrigger className="text-left font-bold text-slate-800 hover:text-primary text-lg py-4">
            Qual papel devo usar?
          </AccordionTrigger>
          <AccordionContent className="text-slate-600 font-medium text-base leading-relaxed pb-4">
            Recomendamos o uso de papel com gramatura entre 180g e 250g, como Color Plus, Offset ou
            Couché fosco para garantir a firmeza da estrutura.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-none">
          <AccordionTrigger className="text-left font-bold text-slate-800 hover:text-primary text-lg py-4">
            Posso vender as peças montadas?
          </AccordionTrigger>
          <AccordionContent className="text-slate-600 font-medium text-base leading-relaxed pb-4">
            Sim, você pode vender as peças físicas montadas por você. No entanto, é expressamente
            proibido revender ou compartilhar os arquivos digitais de qualquer forma.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
