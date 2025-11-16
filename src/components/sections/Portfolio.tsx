import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import CircularGallery, { GalleryItem } from '@/components/portfolio/CircularGallery'
import { copy } from '@/lib/copy'
//

interface PortfolioProps {
  variant?: 'v1' | 'v2' | 'v3' | 'default'
  styles?: {
    heroGradient?: string
    ctaColor?: string
    accentColor?: string
  }
}

export const Portfolio: React.FC<PortfolioProps> = ({ variant: _variant = 'default', styles: _styles }) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.985])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.93])
  return (
    <motion.section id="portfolio" className="py-14 md:py-28" ref={ref} style={{ scale, opacity }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-textPrimary mb-6 tracking-tight">
            {copy.portfolio.title}
          </h2>
          <p className="text-xl text-textSecondary max-w-3xl mx-auto">
            {copy.portfolio.note}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 mb-28"
        >
          {(() => {
            const urls = [
              'https://i.im.ge/2025/11/16/nedmIr.Wen-Launch-Full-Services-Agency-Website-UX-UI-1-D5Me-CB2.png',
              'https://i.im.ge/2025/11/16/nedjMm.Stoicism-Landing-Page-UI-UX-3D-Design-Khai-Luu-1-CwP-B6RX.png',
              'https://i.im.ge/2025/11/16/nedwEW.Squarespace-website-template-for-nutritionists-and-1-CI8w6Hw3.png',
              'https://i.im.ge/2025/11/16/ned5gf.Real-Estate-Website-Design-Hamida-Jannat-1-CaYqXoDt.png',
              'https://i.im.ge/2025/11/16/ned051.Necati-One-Page-Website-Award-1-DS-7bH6O.png',
              'https://i.im.ge/2025/11/16/ned6J0.Free-Dark-Website-Template-Built-in-Framer-1-B51gufH1.png',
              'https://i.im.ge/2025/11/16/nedPdT.Landing-Page-1-D4J3X-zs.png',
            ]
            const items: GalleryItem[] = urls.map(url => ({
              common: '',
              binomial: '',
              photo: { url, text: 'Portfolio', by: 'DX Tech' },
            }))
            return <CircularGallery items={items} radius={520} />
          })()}
        </motion.div>

        {/* Results summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-28 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className={`text-3xl md:text-4xl font-bold text-accent mb-2`}>+47</div>
              <div className="text-textSecondary">leads/mês</div>
            </div>
            <div className="text-center">
              <div className={`text-3xl md:text-4xl font-bold text-accent mb-2`}>+180%</div>
              <div className="text-textSecondary">vendas</div>
            </div>
            <div className="text-center">
              <div className={`text-3xl md:text-4xl font-bold text-accent mb-2`}>+320%</div>
              <div className="text-textSecondary">orçamentos</div>
            </div>
            <div className="text-center">
              <div className={`text-3xl md:text-4xl font-bold text-accent mb-2`}>8x</div>
              <div className="text-textSecondary">ROI</div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
