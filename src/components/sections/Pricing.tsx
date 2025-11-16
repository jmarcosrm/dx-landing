import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Zap, AlertTriangle } from 'lucide-react'

interface PricingProps {
  variant?: 'v1' | 'v2' | 'v3' | 'default'
  styles?: {
    heroGradient?: string
    ctaColor?: string
    accentColor?: string
  }
}

export const Pricing: React.FC<PricingProps> = ({ variant: _variant = 'default' }) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.985])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.93])
  return (
    <motion.section id="pricing" className="py-20 md:py-32" ref={ref} style={{ scale, opacity }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-textPrimary tracking-tight">
            <span className="text-textSecondary line-through mr-2">R$6.000</span>
            <span>disponível por </span>
            <span className="text-red font-bold">R$1.997.</span>
          </h2>
          <p className="mt-6 text-sm md:text-base text-textSecondary max-w-2xl mx-auto">Esta não é uma promoção. É uma janela de oportunidade que se fecha em breve.</p>
          <p className="mt-4 text-sm md:text-base text-textSecondary max-w-3xl mx-auto">Durante a Black System Friday, você garante seu Sistema Automático de Aquisição completo — design estratégico, automação avançada, infraestrutura premium e suporte contínuo — por apenas:</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
          <Card className="bg-surface/30 border border-stroke rounded-xl px-6 py-8 text-center">
            <div className="text-4xl md:text-5xl font-bold text-red">R$1.997 <span className="text-textSecondary text-base md:text-lg font-normal">(setup único)</span></div>
            <div className="mt-2 text-lg md:text-xl text-textSecondary">+ R$250/mês <span className="text-textSecondary/80">(manutenção total)</span></div>
          </Card>

          <p className="mt-6 text-sm md:text-base text-textSecondary">Comparado ao investimento real de <span className="text-textSecondary line-through">R$6.000</span>, você está economizando <span className="text-red">R$4.003</span>.</p>

          <div className="mt-6 bg-red/10 border border-red/20 rounded-xl p-5">
            <p className="text-textSecondary">Mas aqui está o que poucos percebem: se esse sistema gerar apenas <span className="text-red font-medium">3 clientes por mês</span>, ele já se pagou. E continuará gerando muito mais, mês após mês.</p>
          </div>

          <div className="mt-6 bg-surface/30 border border-red/40 rounded-xl p-5 text-center">
            <div className="flex items-center justify-center space-x-2 text-red mb-2"><AlertTriangle className="w-4 h-4" /><span className="font-semibold">ATENÇÃO:</span></div>
            <p className="text-textSecondary">Apenas 10 sistemas serão liberados nesta condição. Quando acabar, acabou.</p>
          </div>

          <div className="mt-8">
            <Button size="lg" className="bg-red-600 hover:bg-red-500 text-white px-8 py-6 rounded-xl shadow-soft inline-flex items-center space-x-2 w-full">
              <span>Quero meu sistema antes que os 7 esgotem</span>
              <Zap className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
