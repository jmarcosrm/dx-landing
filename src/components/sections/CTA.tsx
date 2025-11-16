import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Zap } from 'lucide-react'

interface CTAProps {
  variant?: 'v1' | 'v2' | 'v3' | 'default'
  styles?: {
    heroGradient?: string
    ctaColor?: string
    accentColor?: string
  }
}

export const CTA: React.FC<CTAProps> = ({ variant: _variant = 'default', styles }) => {
  const getCTAStyles = () => {
    if (styles?.ctaColor) return styles.ctaColor
    return 'bg-accent hover:bg-accent/90'
  }

  const getHeroGradient = () => {
    if (styles?.heroGradient) return styles.heroGradient
    return 'from-red-600 via-red-500 to-orange-500'
  }

  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.985])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.93])
  return (
    <motion.section className="py-20 md:py-32 bg-background relative overflow-hidden" ref={ref} style={{ scale, opacity }}>
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${getHeroGradient()} opacity-10`}></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            Última chance
          </Badge>
          
          <h2 className="text-4xl md:text-6xl font-bold text-textPrimary mb-6 tracking-tight">
            Pronto para triplicar suas vendas?
          </h2>
          
          <p className="text-xl text-textSecondary mb-8 max-w-2xl mx-auto">
            Não perca mais tempo. Sua concorrência já está investindo em landing pages de alta conversão. 
            Garanta sua vaga hoje e comece a ver resultados em 72 horas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button className={`${getCTAStyles()} text-white px-8 py-6 text-lg shadow-soft`}>
              <span className="flex items-center space-x-2">
                <Zap className="w-5 h-5" />
                <span>Começar agora</span>
                <ArrowRight className="w-5 h-5" />
              </span>
            </Button>
            
            <Button variant="outline" className="border-stroke text-textPrimary hover:border-accent px-8 py-6 text-lg">
              <span className="flex items-center space-x-2">
                <span>Ver demonstração</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
          </div>
          
          <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-lg px-6 py-3">
            <Zap className="w-5 h-5 text-accent" />
            <span className="text-textPrimary font-medium">Entrega em 72 horas garantida</span>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
