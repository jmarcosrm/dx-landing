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

export default function V1Page() {
  const [currentSection] = useState('hero')

  return (
    <main className="bg-background">
      <Navbar currentSection={currentSection} variant="v1" styles={{
        heroGradient: 'from-blue-500 to-purple-600',
        ctaColor: 'bg-blue-500',
        accentColor: 'blue-500'
      }} />
      <Hero variant="v1" styles={{
        heroGradient: 'from-blue-500 to-purple-600',
        ctaColor: 'bg-blue-500',
        accentColor: 'blue-500'
      }} />
      <ValueProp variant="v1" styles={{
        heroGradient: 'from-blue-500 to-purple-600',
        ctaColor: 'bg-blue-500',
        accentColor: 'blue-500'
      }} />
      <Portfolio variant="v1" styles={{
        heroGradient: 'from-blue-500 to-purple-600',
        ctaColor: 'bg-blue-500',
        accentColor: 'blue-500'
      }} />
      <Pricing variant="v1" styles={{
        heroGradient: 'from-blue-500 to-purple-600',
        ctaColor: 'bg-blue-500',
        accentColor: 'blue-500'
      }} />
      <Timeline variant="v1" styles={{
        heroGradient: 'from-blue-500 to-purple-600',
        ctaColor: 'bg-blue-500',
        accentColor: 'blue-500'
      }} />
      <Authority variant="v1" styles={{
        heroGradient: 'from-blue-500 to-purple-600',
        ctaColor: 'bg-blue-500',
        accentColor: 'blue-500'
      }} />
      <Urgency variant="v1" styles={{
        heroGradient: 'from-blue-500 to-purple-600',
        ctaColor: 'bg-blue-500',
        accentColor: 'blue-500'
      }} />
      <FAQ variant="v1" styles={{
        heroGradient: 'from-blue-500 to-purple-600',
        ctaColor: 'bg-blue-500',
        accentColor: 'blue-500'
      }} />
      <Footer variant="v1" styles={{
        heroGradient: 'from-blue-500 to-purple-600',
        ctaColor: 'bg-blue-500',
        accentColor: 'blue-500'
      }} />
    </main>
  )
}
