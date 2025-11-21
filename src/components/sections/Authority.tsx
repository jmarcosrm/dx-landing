import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { copy } from '@/lib/copy'
import { Star, Quote } from 'lucide-react'

interface AuthorityProps {
  variant?: 'v1' | 'v2' | 'v3' | 'default'
  styles?: {
    heroGradient?: string
    ctaColor?: string
    accentColor?: string
  }
}

export const Authority: React.FC<AuthorityProps> = ({ variant: _variant = 'default', styles }) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.985])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.93])
  return (
    <motion.section id="authority" className="py-20 md:py-32" ref={ref} style={{ scale, opacity }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className={`mb-4 bg-accent/10 text-accent border-accent/20`}>Clientes Satisfeitos</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            {copy.authority.title}
          </h2>
          {copy.authority.subtitle && (
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {copy.authority.subtitle}
            </p>
          )}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {copy.authority.testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className={`relative h-full border-transparent rounded-lg transform transition-all duration-200 will-change-transform hover:scale-[1.002] hover:shadow-[0_0_2px_hsl(var(--accent)_/_0.06)]`}>
                <div className="pointer-events-none absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-${styles?.accentColor || 'accent'}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 opacity-90 transition-opacity group-hover:opacity-100 fill-${styles?.accentColor || 'accent'} text-${styles?.accentColor || 'accent'}`} />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-accent/50" />
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-${styles?.accentColor || 'accent'} to-${styles?.accentColor || 'accent'}/60 flex items-center justify-center`}>
                      <span className="text-accent-foreground font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">{testimonial.content}</p>
                  {(testimonial as any).result && (
                    <div className={`mt-4 p-3 bg-${styles?.accentColor || 'accent'}/10 rounded-lg border border-${styles?.accentColor || 'accent'}/20`}>
                      <p className={`text-${styles?.accentColor || 'accent'} font-medium text-sm`}>{(testimonial as any).result}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {copy.authority.stats.map((stat, index) => (
              <div key={index} className="space-y-2">
              <div className={`text-3xl md:text-4xl font-bold text-${styles?.accentColor || 'accent'}`}>
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">
                {stat.label}
              </div>
              </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
