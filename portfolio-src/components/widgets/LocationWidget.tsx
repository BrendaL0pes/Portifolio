"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function LocationWidget() {
  const [time, setTime] = useState(new Date())

  // Atualizar o relógio a cada segundo
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  // Formatar a hora: "21:54 PM"
  const formattedTime = time.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })

  return (
    <div className="flex items-center gap-5 mt-6 p-3 rounded-xl border border-white/[0.05] bg-white/[0.02] backdrop-blur-sm w-fit group hover:bg-white/[0.04] transition-colors">
      {/* Globo GIF */}
      <div className="relative w-24 h-24 flex-shrink-0 flex items-center justify-center overflow-hidden rounded-full border border-white/10 bg-transparent">
        <Image 
          src="/globe.gif" 
          alt="Globe"
          width={96}
          height={96}
          className="w-full h-full object-cover mix-blend-screen opacity-100 hue-rotate-[60deg] saturate-[2] drop-shadow-[0_0_12px_#cb6ce6]"
        />
      </div>

      {/* Informações de Localização */}
      <div className="flex flex-col">
        <p className="text-[13px] font-medium text-white flex items-center gap-1.5">
          📍 Alegrete, BR
        </p>
        <div className="flex items-center gap-1.5 mt-0.5">
          <div className="relative flex h-2 w-2">
            <span className="animate-ping motion-reduce:animate-none absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </div>
          <p className="text-[11px] text-white/50 font-mono">
            {formattedTime} (GMT-3)
          </p>
        </div>
      </div>
    </div>
  )
}
