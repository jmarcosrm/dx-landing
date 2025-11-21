import React from 'react'
import { motion } from 'framer-motion'
//

interface HeroProps {
  variant?: 'v1' | 'v2' | 'v3' | 'default'
  styles?: {
    heroGradient?: string
    ctaColor?: string
    accentColor?: string
  }
}

export const Hero: React.FC<HeroProps> = () => {

  return (
    <section id="hero" className="relative w-full min-h-screen overflow-hidden flex items-center justify-center px-4 md:px-12 lg:px-24">
      {/* Background with parallax */}
      

      <div className="relative z-10 max-w-7xl w-full">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }} className="space-y-4 md:space-y-6">
          <h1 className="font-bold text-left leading-[0.9] tracking-[-0.01em] shadow-title text-foreground" style={{ fontSize: "clamp(40px, 6vw, 88px)", fontFamily: "Space Grotesk, Inter, system-ui, -apple-system, sans-serif" }}>
            <span className="block">Seu site <span className="text-accent">trabalha</span></span>
            <span className="block">enquanto <span className="text-accent">você dorme?</span></span>
          </h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.7 }} transition={{ duration: 1, delay: 0.3, ease: [0.23, 1, 0.32, 1] }} className="text-muted-foreground font-normal tracking-[-0.01em] text-left" style={{ fontSize: "clamp(16px, 2vw, 22px)", maxWidth: "600px" }}>
            Seus concorrentes estão capturando os clientes que deveriam ser seus.
            <br />
            <span className="text-foreground">-Não é falta de produto.</span> <span className="text-accent">É falta de sistema.</span>
          </motion.p>
        </motion.div>
      </div>

    </section>
  )
}
