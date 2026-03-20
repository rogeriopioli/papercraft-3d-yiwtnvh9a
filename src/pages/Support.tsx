import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Link } from 'react-router-dom'
import { ChevronRight, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useToast } from '@/hooks/use-toast'
import { createSupportMessage } from '@/services/support_messages'
import { extractFieldErrors } from '@/lib/pocketbase/errors'

const formSchema = z.object({
  name: z.string().min(2, 'Nome é obrigatório'),
  email: z.string().email('E-mail inválido'),
  subject: z.string().min(2, 'Assunto é obrigatório'),
  message: z.string().min(10, 'A mensagem deve ter pelo menos 10 caracteres'),
})

export default function Support() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true)
    try {
      await createSupportMessage(values)
      toast({
        title: 'Sucesso!',
        description: 'Sua mensagem foi enviada com sucesso! Retornaremos em breve.',
      })
      form.reset()
    } catch (error) {
      const fieldErrors = extractFieldErrors(error)
      if (Object.keys(fieldErrors).length > 0) {
        Object.entries(fieldErrors).forEach(([field, msg]) => {
          form.setError(field as any, { message: msg })
        })
      } else {
        toast({
          variant: 'destructive',
          title: 'Erro',
          description: 'Ocorreu um erro ao enviar sua mensagem. Tente novamente.',
        })
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <nav className="flex items-center text-sm text-muted-foreground mb-8">
        <Link to="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <ChevronRight className="w-4 h-4 mx-1" />
        <span className="text-foreground font-medium truncate">Contato Suporte</span>
      </nav>

      <div className="mb-10 text-center">
        <div className="mx-auto w-16 h-16 bg-primary/10 flex items-center justify-center rounded-2xl mb-6">
          <MessageSquare className="w-8 h-8 text-primary" />
        </div>
        <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-foreground">
          Como podemos ajudar?
        </h1>
        <p className="text-lg text-muted-foreground">
          Envie sua dúvida, sugestão ou relato de problema. Nossa equipe responderá o mais breve
          possível.
        </p>
      </div>

      <div className="bg-card border rounded-2xl p-6 md:p-8 shadow-subtle">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Seu nome completo" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="seu@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Assunto</FormLabel>
                  <FormControl>
                    <Input placeholder="Sobre o que você quer falar?" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mensagem</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Descreva sua dúvida ou problema em detalhes..."
                      className="min-h-[150px] resize-y"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full h-12 text-lg" disabled={isLoading}>
              {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
