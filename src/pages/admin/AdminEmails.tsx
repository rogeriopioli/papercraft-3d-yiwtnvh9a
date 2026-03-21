import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { getSetting, saveSetting } from '@/services/settings'
import { useToast } from '@/hooks/use-toast'
import { Save } from 'lucide-react'

export default function AdminEmails() {
  const [isLoading, setIsLoading] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const { toast } = useToast()

  const [emailData, setEmailData] = useState({
    subject: '',
    body: '',
  })

  useEffect(() => {
    getSetting('welcome_email').then((setting) => {
      if (setting && setting.value) {
        setEmailData(setting.value)
      }
      setIsLoading(false)
    })
  }, [])

  const handleSave = async () => {
    setIsSaving(true)
    try {
      await saveSetting('welcome_email', emailData)
      toast({ title: 'Sucesso', description: 'E-mail de boas-vindas atualizado.' })
    } catch (err) {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: 'Falha ao salvar as configurações.',
      })
    } finally {
      setIsSaving(false)
    }
  }

  if (isLoading)
    return (
      <div className="p-8 text-center text-slate-400 animate-pulse">
        Carregando configurações...
      </div>
    )

  return (
    <div className="space-y-6 animate-in fade-in duration-500 max-w-4xl">
      <div>
        <h1 className="text-3xl font-heading font-black text-slate-900">E-mails Automáticos</h1>
        <p className="text-slate-500 font-medium mt-1">
          Configure as mensagens enviadas pelo sistema.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
        <div className="mb-6 border-b border-slate-100 pb-6">
          <h2 className="text-xl font-bold text-slate-800 mb-2">E-mail de Boas-Vindas</h2>
          <p className="text-slate-500 text-sm font-medium">
            Enviado automaticamente para novos usuários cadastrados.
          </p>
          <p className="text-slate-400 text-xs mt-2 font-mono bg-slate-50 p-2 rounded-md border border-slate-100">
            Tags dinâmicas permitidas:{' '}
            <span className="font-bold text-blue-600">{`{{customer_name}}`}</span>,{' '}
            <span className="font-bold text-blue-600">{`{{coupon_code}}`}</span>,{' '}
            <span className="font-bold text-blue-600">{`{{discount_percentage}}`}</span>
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <Label className="font-bold text-slate-700">Assunto do E-mail</Label>
            <Input
              value={emailData.subject}
              onChange={(e) => setEmailData({ ...emailData, subject: e.target.value })}
              className="h-12 bg-slate-50 border-slate-200"
            />
          </div>

          <div className="space-y-2">
            <Label className="font-bold text-slate-700">Corpo da Mensagem</Label>
            <Textarea
              value={emailData.body}
              onChange={(e) => setEmailData({ ...emailData, body: e.target.value })}
              className="min-h-[250px] bg-slate-50 border-slate-200 font-medium"
            />
          </div>

          <Button
            onClick={handleSave}
            disabled={isSaving}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold h-12 px-8 rounded-xl shadow-sm"
          >
            <Save className="w-5 h-5 mr-2" />
            {isSaving ? 'Salvando...' : 'Salvar Alterações'}
          </Button>
        </div>
      </div>
    </div>
  )
}
