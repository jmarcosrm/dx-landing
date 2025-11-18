import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
//

const navItems = [
  { name: 'Sobre', href: '#sobre' },

  { name: 'Como funciona', href: '#como-funciona' },
  { name: 'Portfólio', href: '#portfolio' },
  { name: 'Preço', href: '#preco' },
  { name: 'FAQ', href: '#faq' }
]

interface NavbarProps {
  currentSection: string
  variant?: 'v1' | 'v2' | 'v3' | 'default'
  styles?: {
    heroGradient?: string
    ctaColor?: string
    accentColor?: string
  }
}

export const Navbar: React.FC<NavbarProps> = ({ currentSection: _currentSection, variant: _variant = 'default' }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-lg border-b border-stroke' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#sobre"
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <img
              src="https://www.dxtechsolutions.com.br/lovable-uploads/98349465-18d0-41e2-93ce-b9cf160d3568.png"
              alt="DX Tech"
              className="h-8 w-auto object-contain"
              loading="lazy"
              decoding="async"
              width={160}
              height={40}
            />
          </motion.a>

          {/* Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-textSecondary hover:text-textPrimary transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          
        </div>
      </div>
    </motion.nav>
  )
}
