import React, { useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

interface CarouselItem {
  id?: number
  src: string
  alt: string
  title: string
  description?: string
  sector?: string
  result?: string
  caseUrl?: string
}

interface EmblaCarouselProps {
  items: CarouselItem[]
}

export const EmblaCarousel: React.FC<EmblaCarouselProps> = ({ items }) => {
  const autoplayRef = useRef(Autoplay({ 
    delay: 4000, 
    stopOnInteraction: false,
    stopOnMouseEnter: true 
  }))
  
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      containScroll: 'trimSnaps',
      skipSnaps: false,
      align: 'start',
    },
    [autoplayRef.current]
  )


  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex">
        {items.map((item) => (
          <div key={item.id || item.title} className="embla__slide flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4">
            <div className="embla__slide__inner h-full">
              <div className="bg-background rounded-xl overflow-hidden border border-transparent group hover:shadow-soft transition-all duration-300">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    width={1280}
                    height={720}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">{item.sector}</span>
                    <span className="text-sm font-semibold text-accent">{item.result}</span>
                  </div>
                  {item.caseUrl && (
                    <a 
                      href={item.caseUrl}
                      className="text-accent hover:text-accent/80 text-sm font-medium transition-colors"
                    >
                      Ver case →
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
