import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

//
import { Hero } from '@/components/sections/Hero'
import { ValueProp } from '@/components/sections/ValueProp'
import { Features } from '@/components/sections/Features'
import { Pricing } from '@/components/sections/Pricing'
import { Authority } from '@/components/sections/Authority'
import { FAQ } from '@/components/sections/FAQ'
import { ContactForm } from '@/components/sections/ContactForm'
import { CTA } from '@/components/sections/CTA'

describe('Background policy', () => {
  it('Hero renders special background (image present)', () => {
    render(<Hero />)
    const heroImg = screen.getByAltText(/background hero/i)
    expect(heroImg).not.toBeNull()
  })

  it('Other sections do not render animated shader background', () => {
    render(<ValueProp />)
    expect(screen.queryByTestId('animated-shader-bg')).toBeNull()
    render(<Features />)
    expect(screen.queryByTestId('animated-shader-bg')).toBeNull()
    render(<Pricing />)
    expect(screen.queryByTestId('animated-shader-bg')).toBeNull()
    render(<Authority />)
    expect(screen.queryByTestId('animated-shader-bg')).toBeNull()
    render(<FAQ />)
    expect(screen.queryByTestId('animated-shader-bg')).toBeNull()
    render(<ContactForm />)
    expect(screen.queryByTestId('animated-shader-bg')).toBeNull()
    render(<CTA />)
    expect(screen.queryByTestId('animated-shader-bg')).toBeNull()
  })
})
