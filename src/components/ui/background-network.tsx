//

interface Props { className?: string }

export default function BackgroundNetwork({ className }: Props) {
  return (
    <div className={className} aria-hidden>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1600 1200"
        preserveAspectRatio="none"
        className="w-full h-full text-accent/20"
      >
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="currentColor" stopOpacity="0.0" />
            <stop offset="0.5" stopColor="currentColor" stopOpacity="0.35" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0.0" />
          </linearGradient>
        </defs>
        <g stroke="url(#g1)" strokeWidth="2" fill="none">
          <path d="M 0 200 C 300 240 450 180 700 220 C 950 260 1200 210 1600 250" />
          <path d="M 0 500 C 260 540 520 480 780 520 C 1040 560 1300 510 1600 550" />
          <path d="M 0 800 C 280 840 520 780 760 820 C 1000 860 1290 810 1600 850" />
        </g>
        <g fill="currentColor">
          <circle cx="200" cy="220" r="3" />
          <circle cx="520" cy="200" r="3" />
          <circle cx="820" cy="230" r="3" />
          <circle cx="1160" cy="240" r="3" />
          <circle cx="300" cy="520" r="3" />
          <circle cx="640" cy="500" r="3" />
          <circle cx="980" cy="540" r="3" />
          <circle cx="1320" cy="530" r="3" />
          <circle cx="260" cy="820" r="3" />
          <circle cx="600" cy="800" r="3" />
          <circle cx="940" cy="830" r="3" />
          <circle cx="1280" cy="840" r="3" />
        </g>
      </svg>
    </div>
  )
}
