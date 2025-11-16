import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { copy } from '@/lib/copy'
import { HelpCircle, Plus } from 'lucide-react'

interface FAQProps {
  variant?: 'v1' | 'v2' | 'v3' | 'default'
  styles?: {
    heroGradient?: string
    ctaColor?: string
    accentColor?: string
  }
}

export const FAQ: React.FC<FAQProps> = ({ variant: _variant = 'default', styles }) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.985])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.93])
  return (
    <motion.section id="faq" className="py-20 md:py-32" ref={ref} style={{ scale, opacity }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className={`inline-flex items-center space-x-2 mb-4 bg-${styles?.accentColor || 'accent'}/10 border border-${styles?.accentColor || 'accent'}/20 rounded-full px-6 py-2`}>
            <HelpCircle className={`w-5 h-5 text-${styles?.accentColor || 'accent'}`} />
            <Badge className={`bg-${styles?.accentColor || 'accent'}/10 text-${styles?.accentColor || 'accent'} border-${styles?.accentColor || 'accent'}/20`}>FAQ</Badge>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-textPrimary mb-6 tracking-tight">
            {copy.faq.title}
          </h2>
          
          {copy.faq.subtitle && (
            <p className="text-xl text-textSecondary max-w-2xl mx-auto">
              {copy.faq.subtitle}
            </p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {copy.faq.items.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={`border border-${styles?.accentColor || 'accent'}/30 rounded-lg px-6 hover:shadow-soft data-[state=open]:ring-1 ring-${styles?.accentColor || 'accent'}/40 transition-all duration-300`}
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center justify-between w-full text-left">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full bg-${styles?.accentColor || 'accent'}/10 flex items-center justify-center flex-shrink-0`}>
                        <span className={`text-${styles?.accentColor || 'accent'} font-bold text-sm`}>{index + 1}</span>
                      </div>
                      <span className="text-lg font-medium text-textPrimary tracking-tight">
                        {item.question}
                      </span>
                    </div>
                    <div className={`text-${styles?.accentColor || 'accent'}`}>
                      <Plus className="h-5 w-5 transition-transform duration-300 accordion-closed:rotate-0 accordion-open:rotate-45" />
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 pt-2">
                  <div className="pl-11">
                    <p className="text-textSecondary leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="border border-transparent rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-textPrimary mb-4 tracking-tight">
              Ainda tem dúvidas?
            </h3>
            <p className="text-textSecondary mb-6 max-w-md mx-auto">
              Entre em contato conosco e teremos prazer em ajudar você a tomar a melhor decisão para o seu negócio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Falar no WhatsApp
              </button>
              <button className="border border-stroke text-textPrimary hover:border-red px-6 py-3 rounded-lg font-medium transition-colors">
                Agendar uma chamada
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
