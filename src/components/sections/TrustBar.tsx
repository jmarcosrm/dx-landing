import { AlertTriangle } from 'lucide-react'

export function TrustBar() {
  const phrase = 'BLACK SYSTEM FRIDAY'
  const items = Array.from({ length: 12 }, () => phrase)
  return (
    <section className="py-2 md:py-4 border-y border-transparent">
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-surface to-transparent" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-surface to-transparent" />
        <div className="overflow-hidden bg-surface/95 rounded-md">
          <div className="ticker-row flex items-center whitespace-nowrap">
            {items.map((text, idx) => (
              <span key={idx} className="inline-flex items-center gap-2 px-6">
                <AlertTriangle className="w-4 h-4 text-accent" />
                <span className="font-semibold tracking-wide text-accent">{text}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
