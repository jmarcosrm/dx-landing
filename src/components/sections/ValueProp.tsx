import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

//

interface ValuePropProps {
  variant?: 'v1' | 'v2' | 'v3' | 'default'
  styles?: {
    heroGradient?: string
    ctaColor?: string
    accentColor?: string
  }
}

import { copy } from '@/lib/copy'

export const ValueProp: React.FC<ValuePropProps> = ({ variant: _variant = 'default', styles: _styles }) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.98])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.92])
  
  return (
    <motion.section id="sobre" className="py-12 md:py-24" ref={ref} style={{ scale, opacity }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-textPrimary mb-6 tracking-tight">
            Você não precisa de um site "bonito".{' '}
            <span className="text-red-500">Você precisa de clientes chegando.</span>
          </h2>
          <p className="text-xl text-textSecondary max-w-3xl mx-auto">
            {copy.valueProp.text}
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {copy.valueProp.bullets.map((bullet, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-accent text-2xl font-bold">{index + 1}</span>
              </div>
              <p className="text-textSecondary">{bullet}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
