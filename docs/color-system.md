Sistema de cores padronizado

Paleta
- background: hsl(0 0% 3.5%)
- foreground: hsl(0 0% 96.5%)
- secondary: hsl(0 0% 14.9%)
- accent: hsl(0 85% 50%)
- accent-foreground: hsl(0 0% 98%)
- accent-soft: hsl(0 70% 41%)
- border: hsl(0 0% 14.9%)

Tokens Tailwind
- text-foreground, text-muted-foreground
- bg-background, bg-secondary, bg-accent
- border-border, ring-accent

Regras
- Remoção de hex e rgba hardcoded em favor de tokens.
- Elementos de ação usam bg-accent e text-accent-foreground.
- Texto principal usa text-foreground; texto secundário usa text-muted-foreground.
- Sombras e gradientes usam hsla(var(--accent) / alpha).

Acessibilidade
- Contraste mínimo 4.5:1 para texto: accent ajustado para hsl(0 85% 50%) com text-accent-foreground.
- Placeholders e rótulos usam text-muted-foreground para reduzir fadiga visual.

Arquivos afetados
- src/index.css: variáveis e scrollbar padronizados
- tailwind.config.js: mapeamento de cores para tokens
- components: Hero, Features, Authority, Timeline, Pricing, ValueProp, Navbar, Footer, EmblaCarousel
- ui: card, input, badge, accordion, CanvasRedBackground, DotScreenBackground

Diretrizes
- Evitar uso de cores inline; preferir classes de tokens.
- Para gradientes e canvas, usar hsla com var(--accent).
