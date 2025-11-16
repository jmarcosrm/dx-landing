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

export default function HomePage() {
  const [currentSection] = useState('hero')

  return (
    <main className="bg-background">
      <Navbar currentSection={currentSection} variant="default" />
      <Hero variant="default" />
      <ValueProp variant="default" />
      <Portfolio variant="default" />
      <Pricing variant="default" />
      <Timeline variant="default" />
      <Authority variant="default" />
      <Urgency variant="default" />
      <FAQ variant="default" />
      <Footer variant="default" />
    </main>
  )
}
