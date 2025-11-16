import { useEffect, useRef, useState } from "react"

interface Particle { x: number; y: number; vx: number; vy: number; size: number; opacity: number }
interface OrbitPath { cx: number; cy: number; rx: number; ry: number; rotation: number; speed: number; offset: number }

export default function CanvasRedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const orbitsRef = useRef<OrbitPath[]>([])
  const animationFrameRef = useRef<number | undefined>(undefined)
  const timeRef = useRef(0)
  const [shouldAnimate, setShouldAnimate] = useState(true)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setShouldAnimate(!mq.matches)
    const onChange = (e: MediaQueryListEvent) => setShouldAnimate(!e.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      initScene()
    }

    const initScene = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const width = canvas.width / dpr
      const height = canvas.height / dpr

      particlesRef.current = []
      const particleCount = Math.min(Math.floor((width * height) / 8000), 150)
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.3 + 0.1,
        })
      }

      orbitsRef.current = [
        { cx: width * 0.3, cy: height * 0.4, rx: width * 0.25, ry: height * 0.2, rotation: 0.3, speed: 0.00015, offset: 0 },
        { cx: width * 0.7, cy: height * 0.6, rx: width * 0.3, ry: height * 0.25, rotation: -0.2, speed: 0.0001, offset: Math.PI },
        { cx: width * 0.5, cy: height * 0.5, rx: width * 0.35, ry: height * 0.3, rotation: 0.5, speed: 0.00012, offset: Math.PI * 0.5 },
      ]
    }

    const drawGrid = (c: CanvasRenderingContext2D, width: number, height: number) => {
      c.strokeStyle = "rgba(255, 42, 42, 0.04)"
      c.lineWidth = 0.5
      const gridSize = 48
      for (let x = 0; x < width; x += gridSize) { c.beginPath(); c.moveTo(x, 0); c.lineTo(x, height); c.stroke() }
      for (let y = 0; y < height; y += gridSize) { c.beginPath(); c.moveTo(0, y); c.lineTo(width, y); c.stroke() }
    }

    const drawOrbit = (c: CanvasRenderingContext2D, orbit: OrbitPath, time: number) => {
      const { cx, cy, rx, ry, rotation, speed, offset } = orbit
      const angle = time * speed + offset
      c.save()
      c.translate(cx, cy)
      c.rotate(rotation)
      c.beginPath()
      c.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2)
      c.strokeStyle = "rgba(255, 42, 42, 0.08)"
      c.lineWidth = 1
      c.stroke()
      const x = Math.cos(angle) * rx
      const y = Math.sin(angle) * ry
      const gradient = c.createRadialGradient(x, y, 0, x, y, 20)
      gradient.addColorStop(0, "rgba(255, 42, 42, 0.4)")
      gradient.addColorStop(0.5, "rgba(255, 42, 42, 0.1)")
      gradient.addColorStop(1, "rgba(255, 42, 42, 0)")
      c.fillStyle = gradient
      c.beginPath()
      c.arc(x, y, 20, 0, Math.PI * 2)
      c.fill()
      c.fillStyle = "rgba(255, 42, 42, 0.8)"
      c.beginPath()
      c.arc(x, y, 2, 0, Math.PI * 2)
      c.fill()
      c.restore()
    }

    const drawParticles = (c: CanvasRenderingContext2D, width: number, height: number) => {
      particlesRef.current.forEach((p) => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1
        p.x = Math.max(0, Math.min(width, p.x))
        p.y = Math.max(0, Math.min(height, p.y))
        c.fillStyle = `rgba(255, 255, 255, ${p.opacity})`
        c.beginPath(); c.arc(p.x, p.y, p.size, 0, Math.PI * 2); c.fill()
      })
    }

    const drawRadialGlow = (c: CanvasRenderingContext2D, width: number, height: number, time: number) => {
      const pulse = Math.sin(time * 0.0008) * 0.15 + 0.85
      const g = c.createRadialGradient(width * 0.5, height * 0.5, 0, width * 0.5, height * 0.5, Math.max(width, height) * 0.6)
      g.addColorStop(0, `rgba(139, 0, 0, ${0.12 * pulse})`)
      g.addColorStop(0.5, `rgba(139, 0, 0, ${0.06 * pulse})`)
      g.addColorStop(1, "rgba(139, 0, 0, 0)")
      c.fillStyle = g
      c.fillRect(0, 0, width, height)
    }

    const animate = () => {
      if (!shouldAnimate) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const width = canvas.width / dpr
      const height = canvas.height / dpr
      ctx.clearRect(0, 0, width, height)
      drawGrid(ctx, width, height)
      drawRadialGlow(ctx, width, height, timeRef.current)
      orbitsRef.current.forEach((o) => drawOrbit(ctx, o, timeRef.current))
      drawParticles(ctx, width, height)
      timeRef.current += 16
      animationFrameRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    if (shouldAnimate) animate()
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
    }
  }, [shouldAnimate])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 w-full h-full pointer-events-none" style={{ background: "linear-gradient(135deg, #0B0B0F 0%, #111317 100%)" }} />
}
