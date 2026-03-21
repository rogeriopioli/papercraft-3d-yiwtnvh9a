import { Hexagon } from 'lucide-react'

export function AdminPlaceholder({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-32 text-center animate-in fade-in">
      <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-6">
        <Hexagon className="w-8 h-8 text-slate-400" />
      </div>
      <h1 className="text-3xl font-heading font-black text-slate-900 mb-2">{title}</h1>
      <p className="text-slate-500 font-medium">Módulo em desenvolvimento. Volte em breve!</p>
    </div>
  )
}

export const AdminCoupons = () => <AdminPlaceholder title="Gerenciar Cupons" />
export const AdminCategories = () => <AdminPlaceholder title="Gerenciar Categorias" />
export const AdminEmails = () => <AdminPlaceholder title="Gerenciar E-mails" />
export const AdminKB = () => <AdminPlaceholder title="Base de Conhecimento" />
export const AdminChat = () => <AdminPlaceholder title="Conversas IA" />
