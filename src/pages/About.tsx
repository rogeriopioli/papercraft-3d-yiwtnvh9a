import { Link } from 'react-router-dom'
import { ChevronRight, Hexagon } from 'lucide-react'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <nav className="flex items-center text-sm font-bold text-slate-400 mb-10">
        <Link to="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <ChevronRight className="w-4 h-4 mx-2" />
        <span className="text-primary">Sobre Nós</span>
      </nav>
      <div className="text-center mb-12">
        <Hexagon className="w-16 h-16 text-primary mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-heading font-black mb-6 text-slate-900">
          Sobre a PapercraftRP
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-medium">
          Nossa missão é trazer a terapia da arte manual através do papercraft low-poly.
          Transformamos folhas de papel plano em impressionantes esculturas tridimensionais que
          decoram e inspiram, promovendo foco e relaxamento a cada dobra. Acreditamos que a união
          entre o design digital e a montagem tátil cria uma experiência gratificante e única.
        </p>
      </div>
    </div>
  )
}
