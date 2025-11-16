"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export interface CarouselItem { id: number; title: string }

const RulerLines = ({ top = true, totalLines = 60 }: { top?: boolean; totalLines?: number }) => {
  const lines = [] as JSX.Element[];
  const lineSpacing = 100 / (totalLines - 1);
  for (let i = 0; i < totalLines; i++) {
    const isFifth = i % 5 === 0;
    const isCenter = i === Math.floor(totalLines / 2);
    const height = isCenter ? "h-8" : isFifth ? "h-4" : "h-3";
    const color = isCenter || isFifth ? "bg-accent" : "bg-accent/40";
    const positionClass = top ? "" : "bottom-0";
    lines.push(
      <div
        key={i}
        className={`absolute w-0.5 ${height} ${color} ${positionClass}`}
        style={{ left: `${i * lineSpacing}%` }}
      />
    );
  }
  return <div className="relative w-full h-8">{lines}</div>;
};

export function HighlightsMinimal() {
  const phrases = ["CONVERSÃO", "AUTOMAÇÃO", "VELOCIDADE"]
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive((p) => (p + 1) % phrases.length), 2400)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') setActive((p) => (p - 1 + phrases.length) % phrases.length)
      if (e.key === 'ArrowRight') setActive((p) => (p + 1) % phrases.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full md:h-[260px] h-[200px] flex flex-col justify-center relative">
        <div className="flex items-center justify-center">
          <RulerLines top />
        </div>
        <div className="flex items-center justify-center w-full h-full relative overflow-hidden">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.92, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            className="text-center"
          >
            <span
              className="uppercase font-extrabold tracking-widest text-white text-4xl md:text-6xl lg:text-7xl font-horta"
            >
              {phrases[active]}
            </span>
          </motion.div>
        </div>
        <div className="flex items-center justify-center">
          <RulerLines top={false} />
        </div>
      </div>
    </div>
  )
}
