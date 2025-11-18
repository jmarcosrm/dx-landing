import React from 'react'
import { HighlightsMinimal } from './Highlights'

interface HighlightsSectionProps {
  variant?: 'v1' | 'v2' | 'v3' | 'default'
  styles?: {
    heroGradient?: string
    ctaColor?: string
    accentColor?: string
  }
}

export const HighlightsSection: React.FC<HighlightsSectionProps> = () => {
  return (
    <section className="py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HighlightsMinimal />
      </div>
    </section>
  )
}