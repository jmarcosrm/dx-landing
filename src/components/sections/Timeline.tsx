import React from 'react'
import { motion } from 'motion/react'
//
import { Badge } from '@/components/ui/badge'
import { copy } from '@/lib/copy'
import { Clock, CheckCircle, Zap, Rocket } from 'lucide-react'

interface TimelineProps {
  variant?: 'v1' | 'v2' | 'v3' | 'default'
  styles?: {
    heroGradient?: string
    ctaColor?: string
    accentColor?: string
  }
}

export const Timeline: React.FC<TimelineProps> = ({ variant: _variant = 'default', styles }) => {
  const timelineSteps = [
    {
      icon: Clock,
      title: copy.timeline.steps[0].title,
      description: copy.timeline.steps[0].day,
      time: '24h',
      color: 'text-blue-400'
    },
    {
      icon: Zap,
      title: copy.timeline.steps[1].title,
      description: copy.timeline.steps[1].day,
      time: '48h',
      color: 'text-purple-400'
    },
    {
      icon: Rocket,
      title: copy.timeline.steps[2].title,
      description: copy.timeline.steps[2].day,
      time: '72h',
      color: 'text-accent'
    }
  ]

  return (
    <section id="como-funciona" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className={`mb-4 bg-${styles?.accentColor || 'accent'}/10 text-${styles?.accentColor || 'accent'} border-${styles?.accentColor || 'accent'}/20`}>72 Horas</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            {copy.timeline.title}
          </h2>
          <p className="text-sm text-muted-foreground/70 max-w-3xl mx-auto italic">
            {copy.timeline.microcopy}
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 right-0 mx-auto top-8 md:top-10 h-px bg-border" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative mb-4">
                  <div className={`flex items-center justify-center w-16 h-16 rounded-full border-2 border-accent/40 bg-background shadow-[0_0_30px_0_hsl(var(--accent)_/_0.35)] transition-all duration-300 transform will-change-transform group-hover:scale-105`}>
                    <step.icon className={`w-7 h-7 ${step.color} opacity-90 transition-opacity group-hover:opacity-100`} />
                  </div>
                  <div className="pointer-events-none absolute -top-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <Badge className={`mb-2 bg-${styles?.accentColor || 'accent'}/10 text-${styles?.accentColor || 'accent'} border-${styles?.accentColor || 'accent'}/20`}>{step.time}</Badge>
                <div className="text-xs font-semibold text-accent mb-2">
                  {step.description}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 tracking-tight">
                  {step.title}
                </h3>
                {/* Optional description text could go here if available */}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className={`inline-flex items-center space-x-2 bg-${styles?.accentColor || 'accent'}/10 border border-${styles?.accentColor || 'accent'}/20 rounded-lg px-6 py-3`}>
            <CheckCircle className={`w-5 h-5 text-${styles?.accentColor || 'accent'}`} />
            <span className="text-foreground font-medium">Entrega garantida em 72 horas ou seu dinheiro de volta</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
