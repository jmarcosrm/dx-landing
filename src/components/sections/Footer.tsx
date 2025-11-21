import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Mail, 
  Github, 
  Linkedin, 
  Twitter,
  ArrowUp,
  Zap
} from 'lucide-react'

interface FooterProps {
  variant?: 'v1' | 'v2' | 'v3' | 'default'
  styles?: {
    heroGradient?: string
    ctaColor?: string
    accentColor?: string
  }
}

export const Footer: React.FC<FooterProps> = ({ variant: _variant = 'default', styles }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.99])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.95])
  return (
    <motion.footer className="border-t border-transparent" ref={ref} style={{ scale, opacity }}>
      {/* CTA Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className={`mb-4 bg-${styles?.accentColor || 'accent'}/10 text-${styles?.accentColor || 'accent'} border-${styles?.accentColor || 'accent'}/20`}>
              Vamos começar?
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 tracking-tight">
              Pronto para transformar seu negócio?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Entre em contato hoje mesmo e descubra como podemos criar uma landing page que converte visitantes em clientes pagantes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg"
                onClick={() => {
                  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '5511999999999'
                  const message = import.meta.env.VITE_WHATSAPP_DEFAULT_MESSAGE || 'Olá! Gostaria de falar com a equipe DX Tech.'
                  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
                  window.open(url, '_blank')
                }}
              >
                <span className="flex items-center space-x-2">
                  <Zap className="w-5 h-5" />
                  <span>Começar agora</span>
                </span>
              </Button>
              <Button 
                variant="outline"
                className="border-border text-foreground hover:border-accent px-8 py-6 text-lg"
                onClick={() => {
                  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '5511999999999'
                  const message = 'Olá! Quero agendar uma chamada.'
                  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
                  window.open(url, '_blank')
                }}
              >
                <span className="flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>Agendar chamada</span>
                </span>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <img
                src="https://www.dxtechsolutions.com.br/lovable-uploads/98349465-18d0-41e2-93ce-b9cf160d3568.png"
                alt="DX Tech"
                className="h-12 w-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p className="text-muted-foreground mb-6">
              Transformando visitantes em clientes com landing pages de alta conversão.
            </p>
            <div className="flex space-x-4">
              <button className={`w-10 h-10 bg-secondary/30 rounded-lg flex items-center justify-center text-muted-foreground hover:text-${styles?.accentColor || 'accent'} hover:border-${styles?.accentColor || 'accent'} border border-border transition-colors`}>
                <Github className="w-5 h-5" />
              </button>
              <button className={`w-10 h-10 bg-secondary/30 rounded-lg flex items-center justify-center text-muted-foreground hover:text-${styles?.accentColor || 'accent'} hover:border-${styles?.accentColor || 'accent'} border border-border transition-colors`}>
                <Linkedin className="w-5 h-5" />
              </button>
              <button className={`w-10 h-10 bg-secondary/30 rounded-lg flex items-center justify-center text-muted-foreground hover:text-${styles?.accentColor || 'accent'} hover:border-${styles?.accentColor || 'accent'} border border-border transition-colors`}>
                <Twitter className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2024 DX Tech. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <button 
                onClick={scrollToTop}
                className={`flex items-center space-x-1 hover:text-${styles?.accentColor || 'accent'} transition-colors`}
              >
                <ArrowUp className="w-4 h-4" />
                <span>Voltar ao topo</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
