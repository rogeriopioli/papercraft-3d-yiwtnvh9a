import { Link } from 'react-router-dom'
import { ChevronRight, Printer, Scissors, Droplets, BookOpen } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

export default function HowToAssemble() {
  const steps = [
    {
      title: '1. Imprima',
      description:
        'Baixe o arquivo PDF e imprima em papel de gramatura alta (recomendamos entre 180g e 250g). Papel color plus, offset ou couché fosco são ótimas opções.',
      icon: <Printer className="w-8 h-8 text-primary" />,
    },
    {
      title: '2. Vinque e Corte',
      description:
        'Antes de cortar, passe uma caneta sem tinta ou estilete levemente (sem cortar) nas linhas pontilhadas para facilitar a dobra. Depois, recorte as peças pelas linhas contínuas externas.',
      icon: <Scissors className="w-8 h-8 text-primary" />,
    },
    {
      title: '3. Dobre',
      description:
        'Dobre as marcações. Linhas tracejadas (---) normalmente indicam dobra "montanha" (para fora) e linhas traço-ponto (-.-) indicam dobra "vale" (para dentro). Siga a legenda.',
      icon: <BookOpen className="w-8 h-8 text-primary" />,
    },
    {
      title: '4. Cole',
      description:
        'Encontre os números iguais nas abas e nas bordas das peças. Aplique uma camada fina de cola branca escolar ou cola para artesanato na aba e pressione as duas partes juntas até secar.',
      icon: <Droplets className="w-8 h-8 text-primary" />,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <nav className="flex items-center text-sm text-muted-foreground mb-8">
        <Link to="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <ChevronRight className="w-4 h-4 mx-1" />
        <span className="text-foreground font-medium truncate">Como Montar</span>
      </nav>

      <div className="mb-12 text-center">
        <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-foreground">
          Guia de Montagem
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Aprenda o básico do papercraft e dê vida aos seus modelos 3D com estas etapas simples.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {steps.map((step, index) => (
          <div
            key={index}
            className="border rounded-2xl p-6 bg-card shadow-subtle hover:shadow-elevation transition-shadow flex flex-col"
          >
            <div className="flex flex-row items-center gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-xl shrink-0">{step.icon}</div>
              <h3 className="font-heading font-bold text-xl">{step.title}</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed flex-1">{step.description}</p>
          </div>
        ))}
      </div>

      <Separator className="my-12" />

      <div className="bg-secondary/30 p-8 rounded-2xl border">
        <h2 className="text-2xl font-heading font-bold mb-6 text-center">Dicas Extras</h2>
        <ul className="space-y-6 text-muted-foreground">
          <li className="flex items-start gap-4">
            <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
            <span>
              <strong className="text-foreground">Tenha paciência:</strong> O papercraft é uma
              atividade relaxante. Não tenha pressa, o resultado final vale a pena!
            </span>
          </li>
          <li className="flex items-start gap-4">
            <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
            <span>
              <strong className="text-foreground">Use pouca cola:</strong> O excesso de cola pode
              umedecer o papel e deformar o modelo. Um palito de dente ajuda a espalhar a cola
              uniformemente.
            </span>
          </li>
          <li className="flex items-start gap-4">
            <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
            <span>
              <strong className="text-foreground">Ordem de montagem:</strong> É geralmente mais
              fácil começar por peças pequenas e detalhadas (como focinhos ou chifres) e deixar as
              aberturas maiores para o final.
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}
