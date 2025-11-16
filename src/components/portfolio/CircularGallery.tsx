import React, { useState, useEffect, useRef, HTMLAttributes } from 'react'

const cn = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(' ')

export interface GalleryItem {
  common: string
  binomial: string
  photo: {
    url: string
    text: string
    pos?: string
    by: string
  }
}

interface CircularGalleryProps extends HTMLAttributes<HTMLDivElement> {
  items: GalleryItem[]
  radius?: number
  autoRotateSpeed?: number
}

const CircularGallery = React.forwardRef<HTMLDivElement, CircularGalleryProps>(
  ({ items, className, radius = 500, autoRotateSpeed = 0.02, ...props }, ref) => {
    const [rotation, setRotation] = useState(0)
    const [isScrolling, setIsScrolling] = useState(false)
    const [computedRadius, setComputedRadius] = useState(radius)
    // store for future logic; satisfies TS when no direct reads
    // container width kept for potential future use; reading once avoids TS unused var
    // note: removed to satisfy TS, metrics use window width directly
    const [itemWidth, setItemWidth] = useState<number>(300)
    const [itemHeight, setItemHeight] = useState<number>(400)
    const scrollTimeoutRef = useRef<number | null>(null)
    const animationFrameRef = useRef<number | null>(null)

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolling(true)
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
        const scrollProgress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0
        const scrollRotation = scrollProgress * 360
        setRotation(scrollRotation)
        if (scrollTimeoutRef.current) window.clearTimeout(scrollTimeoutRef.current)
        scrollTimeoutRef.current = window.setTimeout(() => setIsScrolling(false), 150)
      }
      window.addEventListener('scroll', handleScroll, { passive: true })
      return () => {
        window.removeEventListener('scroll', handleScroll)
        if (scrollTimeoutRef.current) window.clearTimeout(scrollTimeoutRef.current)
      }
    }, [])

    useEffect(() => {
      const autoRotate = () => {
        if (!isScrolling) setRotation(prev => prev + autoRotateSpeed)
        animationFrameRef.current = requestAnimationFrame(autoRotate)
      }
      animationFrameRef.current = requestAnimationFrame(autoRotate)
      return () => {
        if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
      }
    }, [isScrolling, autoRotateSpeed])

    useEffect(() => {
      const updateMetrics = () => {
        const w = window.innerWidth
        // Item size scales with container width for mobile/tablet
        const iw = w < 640 ? Math.round(Math.min(180, Math.max(140, w * 0.45))) : w < 1024 ? 220 : 300
        const ih = Math.round(iw * 4 / 3) // 3:4 aspect ratio
        // Radius based on spacing to avoid overlap: r >= (itemWidth + margin) / theta
        const n = Math.max(1, items.length)
        const theta = (2 * Math.PI) / n
        const margin = w < 640 ? 24 : 16
        const baseMin = w < 640 ? 220 : w < 1024 ? 360 : 520
        const rcalc = (iw + margin) / theta
        const r = Math.max(baseMin, rcalc)
        setComputedRadius(r)
        setItemWidth(iw)
        setItemHeight(ih)
      }
      updateMetrics()
      window.addEventListener('resize', updateMetrics)
      return () => window.removeEventListener('resize', updateMetrics)
    }, [])

    const anglePerItem = 360 / Math.max(1, items.length)

    return (
      <div
        ref={ref}
        role="region"
        aria-label="Galeria Circular"
        className={cn('relative w-full flex items-center justify-center overflow-visible', className)}
        style={{ perspective: '1600px', height: `${itemHeight + (window.innerWidth < 640 ? 220 : 320)}px` }}
        onWheel={(e) => {
          const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY
          setRotation((prev) => prev + delta * 0.2)
        }}
        {...props}
      >
        <div
          className="relative w-full h-full"
          style={{ transform: `rotateY(${rotation}deg)`, transformStyle: 'preserve-3d' }}
          onPointerDown={(e) => {
            (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
            (e.currentTarget as any)._dragging = true;
            (e.currentTarget as any)._startX = e.clientX;
          }}
          onPointerUp={(e) => {
            (e.currentTarget as any)._dragging = false;
            (e.currentTarget as HTMLElement).releasePointerCapture?.(e.pointerId);
          }}
          onPointerLeave={(e) => { (e.currentTarget as any)._dragging = false }}
          onPointerMove={(e) => {
            const el: any = e.currentTarget
            if (!el._dragging) return
            const dx = e.clientX - (el._startX ?? e.clientX)
            el._startX = e.clientX
            setRotation((prev) => prev + dx * 0.25)
          }}
        >
          {items.map((item, i) => {
            const itemAngle = i * anglePerItem
            const totalRotation = rotation % 360
            const relativeAngle = (itemAngle + totalRotation + 360) % 360
            const normalizedAngle = Math.abs(relativeAngle > 180 ? 360 - relativeAngle : relativeAngle)
            const opacity = Math.max(0.35, 1 - normalizedAngle / 180)

            return (
              <div
                key={item.photo.url}
                role="group"
                aria-label={item.common}
                className="absolute will-change-transform"
                style={{
                  transform: `rotateY(${itemAngle}deg) translateZ(${computedRadius}px)`,
                  left: '50%',
                  top: '50%',
                  width: `${itemWidth}px`,
                  height: `${itemHeight}px`,
                  marginLeft: `${-itemWidth / 2}px`,
                  marginTop: `${-itemHeight / 2}px`,
                  opacity,
                  transition: 'opacity 0.3s linear'
                }}
              >
                <div className="relative w-full h-full rounded-lg overflow-hidden border border-accent/30 bg-background shadow-soft" style={{ backfaceVisibility: 'hidden', contain: 'layout paint' }}>
                  <img
                    src={item.photo.url}
                    alt={item.photo.text}
                    className="absolute inset-0 w-full h-full object-contain"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 640px) 200px, (max-width: 1024px) 300px, 400px"
                    style={{ objectPosition: item.photo.pos || 'center' }}
                  />
                  
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
)

export default CircularGallery
