import { MessageCircle } from 'lucide-react'

export default function ChatWidget() {
  return (
    <a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center animate-in slide-in-from-bottom-10"
      aria-label="Atendimento via WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  )
}
