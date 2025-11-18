import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Zap, AlertTriangle, CheckCircle } from 'lucide-react'

interface UrgencyProps {
  variant?: 'v1' | 'v2' | 'v3' | 'default'
  styles?: {
    heroGradient?: string
    ctaColor?: string
    accentColor?: string
  }
}

export const Urgency: React.FC<UrgencyProps> = ({ variant: _variant = 'default', styles }) => {
  return (
    <section className="py-20 md:py-32 relative overflow-visible content-auto">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className={`absolute inset-0 bg-gradient-to-br from-${styles?.accentColor || 'accent'} via-${styles?.accentColor || 'accent'}/50 to-transparent`}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 45, 45, 0.3) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          
          
          <h3 className="text-red text-2xl md:text-3xl font-bold mb-6">termina em breve.</h3>
          <p className="text-textSecondary mb-10">Quando as vagas acabar, acontecem duas coisas:</p>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
            <div className="bg-surface/40 border border-stroke rounded-xl p-6 text-textPrimary flex items-center space-x-4">
              <div className="w-7 h-7 flex items-center justify-center rounded-full bg-red text-white font-semibold">1</div>
              <span>O valor retorna para R$6.000</span>
            </div>
            <div className="bg-surface/40 border border-stroke rounded-xl p-6 text-textPrimary flex items-center space-x-4">
              <div className="w-7 h-7 flex items-center justify-center rounded-full bg-red text-white font-semibold">2</div>
              <span>A fila de espera volta (atualmente 14 dias)</span>
            </div>
          </div>

          <p className="text-textPrimary font-medium mb-6">Você tem duas escolhas agora:</p>

          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="flex items-center space-x-3 border border-emerald-400 bg-emerald-500/10 rounded-xl px-6 py-4">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              <span className="text-textPrimary">Garantir sua vaga por R$1997 e começar a capturar clientes em 72 horas</span>
            </div>
            <div className="flex items-center space-x-3 border border-red bg-red/10 rounded-xl px-6 py-4">
              <AlertTriangle className="w-5 h-5 text-red" />
              <span className="text-textPrimary">Ou perder a janela e continuar competindo com as mesmas ferramentas que não funcionam</span>
            </div>
          </div>

          <div className="mt-10">
            <h4 className="text-textPrimary text-xl md:text-2xl font-semibold">A diferença entre os negócios que crescem e os que estagnam?</h4>
            <p className="text-red/80 mt-2">Os que crescem agem quando a oportunidade aparece.</p>
          </div>

          <div className="mt-8 max-w-3xl mx-auto">
            <Button size="lg" className={`bg-${styles?.ctaColor?.replace('bg-', '') || styles?.accentColor?.replace('text-', '') || 'accent'} hover:bg-${styles?.ctaColor?.replace('bg-', '') || styles?.accentColor?.replace('text-', '') || 'accent'}/90 text-white px-8 py-6 rounded-xl shadow-soft inline-flex items-center space-x-2 w-full`}>
              <span>Garantir Oportunidade Agora</span>
              <Zap className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
