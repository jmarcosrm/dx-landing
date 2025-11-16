import { Hero } from '@/components/sections/Hero'
import { ValueProp } from '@/components/sections/ValueProp'
import { Portfolio } from '@/components/sections/Portfolio'
import { Pricing } from '@/components/sections/Pricing'
import { Timeline } from '@/components/sections/Timeline'
import { Authority } from '@/components/sections/Authority'
import { Urgency } from '@/components/sections/Urgency'
import { FAQ } from '@/components/sections/FAQ'
import { Footer } from '@/components/sections/Footer'
import { Navbar } from '@/components/sections/Navbar'
import { useState } from 'react'

export default function V3Page() {
  const [currentSection] = useState('hero')

  return (
    <main className="bg-background">
      <Navbar currentSection={currentSection} variant="v3" styles={{
        heroGradient: 'from-orange-500 to-red-600',
        ctaColor: 'bg-orange-500',
        accentColor: 'orange-500'
      }} />
      <Hero variant="v3" styles={{
        heroGradient: 'from-orange-500 to-red-600',
        ctaColor: 'bg-orange-500',
        accentColor: 'orange-500'
      }} />
      <ValueProp variant="v3" styles={{
        heroGradient: 'from-orange-500 to-red-600',
        ctaColor: 'bg-orange-500',
        accentColor: 'orange-500'
      }} />
      <Portfolio variant="v3" styles={{
        heroGradient: 'from-orange-500 to-red-600',
        ctaColor: 'bg-orange-500',
        accentColor: 'orange-500'
      }} />
      <Pricing variant="v3" styles={{
        heroGradient: 'from-orange-500 to-red-600',
        ctaColor: 'bg-orange-500',
        accentColor: 'orange-500'
      }} />
      <Timeline variant="v3" styles={{
        heroGradient: 'from-orange-500 to-red-600',
        ctaColor: 'bg-orange-500',
        accentColor: 'orange-500'
      }} />
      <Authority variant="v3" styles={{
        heroGradient: 'from-orange-500 to-red-600',
        ctaColor: 'bg-orange-500',
        accentColor: 'orange-500'
      }} />
      <Urgency variant="v3" styles={{
        heroGradient: 'from-orange-500 to-red-600',
        ctaColor: 'bg-orange-500',
        accentColor: 'orange-500'
      }} />
      <FAQ variant="v3" styles={{
        heroGradient: 'from-orange-500 to-red-600',
        ctaColor: 'bg-orange-500',
        accentColor: 'orange-500'
      }} />
      <Footer variant="v3" styles={{
        heroGradient: 'from-orange-500 to-red-600',
        ctaColor: 'bg-orange-500',
        accentColor: 'orange-500'
      }} />
    </main>
  )
}
