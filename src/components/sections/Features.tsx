import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { copy } from '@/lib/copy'
import CircularTestimonials from '@/components/ui/CircularTestimonials'

export const Features: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.985])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.93])
  return (
    <motion.section id="features" className="py-12 md:py-24" ref={ref} style={{ scale, opacity }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white shadow-title mb-6 tracking-tight">
            {copy.features.title}
          </h2>
          {copy.features.subtitle && (
            <p className="text-xl text-textSecondary max-w-3xl mx-auto">
              {copy.features.subtitle}
            </p>
          )}
        </motion.div>

        <CircularTestimonials
          testimonials={[
            {
              name: 'Arquitetura de Conversão',
              designation: 'Design e micro-interações que conduzem ao orçamento.',
              quote: 'Estrutura pensada para guiar o usuário com clareza e reduzir fricções.',
              src: 'https://i.im.ge/2025/11/16/4MFvgy.1.png',
            },
            {
              name: 'Automação Inteligente',
              designation: 'Lead direto no WhatsApp com resposta imediata.',
              quote: 'Integrações que eliminam o tempo de espera e aumentam conversões.',
              src: 'https://i.im.ge/2025/11/16/4MOTfX.2.png',
            },
            {
              name: 'Métricas & Painel',
              designation: 'Origem dos leads e páginas que mais convertem.',
              quote: 'Acompanhe o que funciona para otimizar investimento com precisão.',
              src: 'https://i.im.ge/2025/11/16/4MOddq.3.png',
            },
            {
              name: 'Infraestrutura Blindada',
              designation: 'Performance, SSL, backups diários e suporte.',
              quote: 'Base robusta para estabilidade e velocidade em qualquer cenário.',
              src: 'https://i.im.ge/2025/11/16/4MOCxz.4.png',
            },
            {
              name: 'SEO on-page',
              designation: 'Otimização completa para ranquear no Google.',
              quote: 'Estrutura semântica e performance para visibilidade orgânica.',
              src: 'https://i.im.ge/2025/11/16/4MOfn4.5.png',
            },
            {
              name: 'Formulário com validação',
              designation: 'Campos inteligentes que aumentam a qualidade dos leads.',
              quote: 'Coleta correta desde o primeiro contato para comercial efetivo.',
              src: 'https://i.im.ge/2025/11/16/4MO4Rf.6.png',
            },
          ]}
          autoplay={true}
          colors={{
            name: '#ffffff',
            designation: '#9ca3af',
            testimony: '#d1d5db',
            arrowBackground: '#141414',
            arrowForeground: '#f9fafb',
            arrowHoverBackground: '#ef4444',
          }}
          fontSizes={{ name: '1.25rem', designation: '0.95rem', quote: '1rem' }}
        />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-textSecondary mb-6">
            Todas as funcionalidades incluídas em cada plano
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}
