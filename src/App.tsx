import { useState } from 'react'
import { Navbar } from './components/sections/Navbar'
import { Hero } from './components/sections/Hero'
import { TrustBar } from './components/sections/TrustBar'
import { ValueProp } from './components/sections/ValueProp'
import { Features } from './components/sections/Features'
import { Portfolio } from './components/sections/Portfolio'
import { HighlightsSection } from './components/sections/HighlightsSection'
import { Pricing } from './components/sections/Pricing'
import { Timeline } from './components/sections/Timeline'
import { Authority } from './components/sections/Authority'
import { Urgency } from './components/sections/Urgency'
import { FAQ } from './components/sections/FAQ'
import { ContactForm } from './components/sections/ContactForm'
import { Footer } from './components/sections/Footer'
import CanvasRedBackground from './components/ui/CanvasRedBackground'
import { Card } from './components/ui/card'

interface AppProps {
  variant?: 'v1' | 'v2' | 'v3' | 'default'
}

function App({ variant = 'default' }: AppProps) {
  const [currentSection] = useState('hero')

  // Variações de layout e estilo
  const getVariantStyles = () => {
    switch (variant) {
      case 'v1':
        return {
          heroGradient: 'from-purple-600 via-pink-600 to-red-600',
          ctaColor: 'bg-purple-600 hover:bg-purple-700',
          accentColor: 'purple'
        }
      case 'v2':
        return {
          heroGradient: 'from-blue-600 via-cyan-600 to-teal-600',
          ctaColor: 'bg-blue-600 hover:bg-blue-700',
          accentColor: 'blue'
        }
      case 'v3':
        return {
          heroGradient: 'from-emerald-600 via-green-600 to-lime-600',
          ctaColor: 'bg-emerald-600 hover:bg-emerald-700',
          accentColor: 'emerald'
        }
      default:
        return {
          heroGradient: 'from-red-600 via-red-500 to-orange-500',
          ctaColor: 'bg-accent hover:bg-accent/90',
          accentColor: 'red'
        }
    }
  }

  const styles = getVariantStyles()

  return (
    <div className="min-h-screen">
      <CanvasRedBackground />
      <div className="relative z-10">
        <Navbar currentSection={currentSection} variant={variant} styles={styles} />
        <main>
        <Hero variant={variant} styles={styles} />
        <div className="relative">
          <TrustBar />
          <section className="py-6 md:py-8">
            <div className="max-w-4xl mx-auto px-4">
              <Card className="bg-secondary/30 border border-border rounded-xl p-5 md:p-8 text-center">
                <p className="text-sm md:text-base text-muted-foreground">
                  A Black System Friday é o momento em que abrimos nossa tecnologia premium para negócios ambiciosos que entendem: investir em sistema não é gasto, é vantagem competitiva.
                </p>
              </Card>
            </div>
          </section>
          <ValueProp variant={variant} styles={styles} />
            <Features />
            <Portfolio variant={variant} styles={styles} />
            <HighlightsSection variant={variant} styles={styles} />
            <Pricing variant={variant} styles={styles} />
            <Timeline variant={variant} styles={styles} />
            <Authority variant={variant} styles={styles} />
            <Urgency variant={variant} styles={styles} />
            <FAQ variant={variant} styles={styles} />
            <ContactForm />
          </div>
        </main>
        <Footer variant={variant} styles={styles} />
      </div>
    </div>
  )
}

export default App
