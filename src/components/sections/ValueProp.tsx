import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { HighlightsMinimal } from './Highlights'

//

interface ValuePropProps {
  variant?: 'v1' | 'v2' | 'v3' | 'default'
  styles?: {
    heroGradient?: string
    ctaColor?: string
    accentColor?: string
  }
}

export const ValueProp: React.FC<ValuePropProps> = ({ variant: _variant = 'default', styles: _styles }) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.98])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.92])
  return (
    <motion.section id="sobre" className="py-12 md:py-24" ref={ref} style={{ scale, opacity }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HighlightsMinimal />
      </div>
    </motion.section>
  )
}
