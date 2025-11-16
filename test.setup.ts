import '@testing-library/jest-dom'
import React from 'react'
import { vi } from 'vitest'

vi.mock('motion/react', async () => {
  const actual = await vi.importActual<any>('motion/react')
  const Simple = (Tag: any) => (props: any) => React.createElement(Tag, props)
  return {
    ...actual,
    motion: {
      div: Simple('div'),
      section: Simple('section'),
      p: Simple('p'),
      span: Simple('span'),
      button: Simple('button'),
    },
    useScroll: () => ({
      scrollY: { get: () => 0, onChange: () => () => {} },
      scrollYProgress: { get: () => 0, onChange: () => () => {} },
    }),
    useTransform: () => 0,
  }
})

vi.mock('embla-carousel-react', () => ({
  __esModule: true,
  default: () => null,
  useEmblaCarousel: () => [() => {}, null],
}))

vi.mock('@radix-ui/react-accordion', () => ({
  __esModule: true,
  Root: ({ children }: any) => React.createElement('div', null, children),
  Item: ({ children }: any) => React.createElement('div', null, children),
  Header: ({ children }: any) => React.createElement('div', null, children),
  Trigger: ({ children }: any) => React.createElement('button', null, children),
  Content: ({ children }: any) => React.createElement('div', null, children),
}))
