import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { copy } from '@/lib/copy';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
//

type FormData = {
  nome: string;
  whatsapp: string;
  email: string;
  setor: string;
};

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.985]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.93]);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    
    // Criar mensagem para WhatsApp
    const message = `Olá! Quero ver exemplos do meu setor.\n\n` +
      `Nome: ${data.nome}\n` +
      `WhatsApp: ${data.whatsapp}\n` +
      `Email: ${data.email}\n` +
      `Setor: ${data.setor}`;
    
    // Número do WhatsApp via env
    const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '5511999999999';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitting(false);
  };

  return (
    <motion.section id="contato" className="py-16" ref={ref} style={{ scale, opacity }}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            {copy.contact.title}
          </h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Input
                  {...register('nome', { required: 'Nome é obrigatório' })}
                  placeholder="Seu nome"
                  className={errors.nome ? 'border-red-500' : ''}
                />
                {errors.nome && (
                  <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>
                )}
              </div>
              
              <div>
                <Input
                  {...register('whatsapp', { required: 'WhatsApp é obrigatório' })}
                  placeholder="Seu WhatsApp"
                  className={errors.whatsapp ? 'border-red-500' : ''}
                />
                {errors.whatsapp && (
                  <p className="text-red-500 text-sm mt-1">{errors.whatsapp.message}</p>
                )}
              </div>
            </div>
            
            <div>
              <Input
                {...register('email', { 
                  required: 'Email é obrigatório',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Email inválido'
                  }
                })}
                placeholder="Seu e-mail"
                className={errors.email ? 'border-red-500' : ''}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
            
            <div>
              <Input
                {...register('setor', { required: 'Setor é obrigatório' })}
                placeholder="Seu setor (ex: Imobiliário, E-commerce, Serviços)"
                className={errors.setor ? 'border-red-500' : ''}
              />
              {errors.setor && (
                <p className="text-red-500 text-sm mt-1">{errors.setor.message}</p>
              )}
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full"
              size="lg"
            >
              {isSubmitting ? 'Enviando...' : copy.contact.submit}
            </Button>
            
            <p className="text-xs text-text-secondary text-center">
              {copy.contact.privacy}
            </p>
          </form>
        </div>
      </div>
    </motion.section>
  );
}
import { motion, useScroll, useTransform } from 'motion/react';
