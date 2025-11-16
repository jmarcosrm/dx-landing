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

export default function V2Page() {
  const [currentSection] = useState('hero')

  return (
    <main className="bg-background">
      <Navbar currentSection={currentSection} variant="v2" styles={{
        heroGradient: 'from-green-500 to-emerald-600',
        ctaColor: 'bg-green-500',
        accentColor: 'green-500'
      }} />
      <Hero variant="v2" styles={{
        heroGradient: 'from-green-500 to-emerald-600',
        ctaColor: 'bg-green-500',
        accentColor: 'green-500'
      }} />
      <ValueProp variant="v2" styles={{
        heroGradient: 'from-green-500 to-emerald-600',
        ctaColor: 'bg-green-500',
        accentColor: 'green-500'
      }} />
      <Portfolio variant="v2" styles={{
        heroGradient: 'from-green-500 to-emerald-600',
        ctaColor: 'bg-green-500',
        accentColor: 'green-500'
      }} />
      <Pricing variant="v2" styles={{
        heroGradient: 'from-green-500 to-emerald-600',
        ctaColor: 'bg-green-500',
        accentColor: 'green-500'
      }} />
      <Timeline variant="v2" styles={{
        heroGradient: 'from-green-500 to-emerald-600',
        ctaColor: 'bg-green-500',
        accentColor: 'green-500'
      }} />
      <Authority variant="v2" styles={{
        heroGradient: 'from-green-500 to-emerald-600',
        ctaColor: 'bg-green-500',
        accentColor: 'green-500'
      }} />
      <Urgency variant="v2" styles={{
        heroGradient: 'from-green-500 to-emerald-600',
        ctaColor: 'bg-green-500',
        accentColor: 'green-500'
      }} />
      <FAQ variant="v2" styles={{
        heroGradient: 'from-green-500 to-emerald-600',
        ctaColor: 'bg-green-500',
        accentColor: 'green-500'
      }} />
      <Footer variant="v2" styles={{
        heroGradient: 'from-green-500 to-emerald-600',
        ctaColor: 'bg-green-500',
        accentColor: 'green-500'
      }} />
    </main>
  )
}
