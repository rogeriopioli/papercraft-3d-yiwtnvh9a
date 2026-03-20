import { Link } from 'react-router-dom'
import {
  ChevronRight,
  Printer,
  Scissors,
  Droplets,
  BookOpen,
  Search,
  Box,
  Lightbulb,
  PenTool,
  Ruler,
} from 'lucide-react'
import { Separator } from '@/components/ui/separator'

const ToolCard = ({ icon, name }: { icon: React.ReactNode; name: string }) => (
  <div className="bg-white border border-slate-100 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
    <div className="bg-blue-50 text-primary p-4 rounded-xl mb-4">{icon}</div>
    <span className="font-bold text-slate-800">{name}</span>
  </div>
)

const Step = ({
  number,
  title,
  desc,
  icon,
}: {
  number: number
  title: string
  desc: string
  icon: React.ReactNode
}) => (
  <div className="flex flex-col sm:flex-row items-start gap-6 bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all">
    <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-white font-black text-2xl shrink-0 shadow-inner">
      {number}
    </div>
    <div className="flex-1">
      <div className="flex items-center gap-3 mb-2">
        <div className="text-primary">{icon}</div>
        <h3 className="font-heading font-black text-xl text-slate-900">{title}</h3>
      </div>
      <p className="text-slate-600 leading-relaxed font-medium">{desc}</p>
    </div>
  </div>
)

export default function HowToAssemble() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <nav className="flex items-center text-sm font-bold text-slate-400 mb-10">
        <Link to="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <ChevronRight className="w-4 h-4 mx-2" />
        <span className="text-primary">Como Montar</span>
      </nav>

      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-black mb-4 text-slate-900 tracking-tight">
          Guia de Montagem
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
          Aprenda o básico do papercraft e dê vida aos seus modelos 3D com estas etapas simples.
        </p>
      </div>

      {/* Material Ideal Box */}
      <div className="bg-orange-50 border-2 border-orange-200 rounded-3xl p-8 mb-12 flex flex-col sm:flex-row items-start gap-6 shadow-sm">
        <div className="bg-white p-4 rounded-2xl text-orange-500 shadow-sm shrink-0">
          <Box className="w-8 h-8" />
        </div>
        <div>
          <h3 className="text-xl font-black text-orange-900 mb-3">Material Ideal</h3>
          <p className="text-orange-800 font-medium leading-relaxed">
            Recomendamos utilizar papel com gramatura entre <strong>180g e 250g</strong>. Papéis
            como Color Plus, Offset ou Couché fosco garantem a rigidez necessária para a escultura
            não deformar. Impressoras comuns conseguem puxar até 180g tranquilamente!
          </p>
        </div>
      </div>

      {/* Steps List */}
      <div className="space-y-6 mb-16">
        <Step
          number={1}
          title="Imprima o Molde"
          icon={<Printer className="w-6 h-6" />}
          desc="Baixe o arquivo PDF e imprima no papel de gramatura escolhida. Certifique-se de configurar a impressora para 'Tamanho Real' ou 'Escala 100%'."
        />
        <Step
          number={2}
          title="Vinque e Corte"
          icon={<Scissors className="w-6 h-6" />}
          desc="Recorte todas as peças ao longo das linhas contínuas externas. Não corte as linhas pontilhadas ou tracejadas, elas são para dobra!"
        />
        <Step
          number={3}
          title="Dobre as Marcações"
          icon={<BookOpen className="w-6 h-6" />}
          desc="Identifique o tipo de linha e faça as dobras (Montanha ou Vale) seguindo a legenda do projeto."
        />
        <Step
          number={4}
          title="Encontre os Pares"
          icon={<Search className="w-6 h-6" />}
          desc="Cada aba tem um número. Você precisa encontrar a borda com o número correspondente na mesma peça ou em outra peça."
        />
        <Step
          number={5}
          title="Cole com Cuidado"
          icon={<Droplets className="w-6 h-6" />}
          desc="Aplique uma quantidade bem pequena de cola branca na aba e pressione-a contra a borda correspondente até fixar."
        />
      </div>

      {/* Dica de Ouro Box */}
      <div className="bg-blue-50 border-2 border-blue-200 rounded-3xl p-8 mb-16 flex flex-col sm:flex-row items-start gap-6 shadow-sm">
        <div className="bg-white p-4 rounded-2xl text-blue-600 shadow-sm shrink-0">
          <Lightbulb className="w-8 h-8" />
        </div>
        <div>
          <h3 className="text-xl font-black text-blue-900 mb-3">Dica de Ouro</h3>
          <p className="text-blue-800 font-medium leading-relaxed">
            <strong>Antes de recortar as peças</strong>, utilize uma caneta sem tinta (ou um
            boleador) para passar sobre todas as linhas de dobra usando uma régua. Isso criará um
            vinco no papel, fazendo com que ele dobre perfeitamente no lugar certo sem amassar as
            bordas!
          </p>
        </div>
      </div>

      {/* Folds Explanation */}
      <h2 className="text-3xl font-heading font-black text-center mb-8 text-slate-900">
        Entendendo as Dobras
      </h2>
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="border border-slate-200 rounded-3xl p-8 bg-white text-center shadow-sm">
          <h4 className="font-black text-xl mb-6 text-slate-800">Dobra Montanha (Mountain)</h4>
          <div className="h-32 bg-slate-50 rounded-2xl mb-6 flex flex-col items-center justify-center border-2 border-dashed border-slate-300">
            <span className="font-mono text-slate-400 font-bold text-2xl tracking-[0.3em]">
              - - - -
            </span>
          </div>
          <p className="font-medium text-slate-600">
            Representada por linhas tracejadas curtas. Dobre o papel para fora (na sua direção),
            criando um formato de "montanha". O vinco fica para cima.
          </p>
        </div>

        <div className="border border-slate-200 rounded-3xl p-8 bg-white text-center shadow-sm">
          <h4 className="font-black text-xl mb-6 text-slate-800">Dobra Vale (Valley)</h4>
          <div className="h-32 bg-slate-50 rounded-2xl mb-6 flex flex-col items-center justify-center border-2 border-dashed border-slate-300">
            <span className="font-mono text-slate-400 font-bold text-2xl tracking-[0.3em]">
              - . - . -
            </span>
          </div>
          <p className="font-medium text-slate-600">
            Representada por linhas traço-ponto. Dobre o papel para dentro (afastando de você),
            criando um "vale" ou canaleta. O vinco fica para baixo.
          </p>
        </div>
      </div>

      <Separator className="my-16 bg-slate-200 h-1" />

      {/* Tools Grid */}
      <h2 className="text-3xl font-heading font-black text-center mb-10 text-slate-900">
        Ferramentas Necessárias
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <ToolCard icon={<Scissors className="w-8 h-8" />} name="Tesoura ou Estilete" />
        <ToolCard icon={<Ruler className="w-8 h-8" />} name="Régua de Metal" />
        <ToolCard icon={<Droplets className="w-8 h-8" />} name="Cola Branca" />
        <ToolCard icon={<PenTool className="w-8 h-8" />} name="Boleador (Vinco)" />
      </div>
    </div>
  )
}
