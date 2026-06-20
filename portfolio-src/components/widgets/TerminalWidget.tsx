"use client"

import { Terminal } from "lucide-react"
import { useEffect, useState } from "react"

export function TerminalWidget() {
  const [text, setText] = useState("")
  const fullText = " What is Brenda's main stack?"

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText((prev) => prev + fullText.charAt(i))
        i++
      } else {
        clearInterval(timer)
        // Reiniciar após um tempo
        setTimeout(() => {
          setText("")
          i = 0
        }, 5000)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [fullText])

  return (
    <div className="p-3 bg-[#0a0a0a] rounded-xl border border-white/[0.1] shadow-inner font-mono text-[10px] sm:text-[11px] relative overflow-hidden group cursor-text">
      {/* Header bar */}
      <div className="flex items-center gap-1.5 mb-2 border-b border-white/[0.05] pb-2">
        <Terminal className="w-3 h-3 text-primary" />
        <span className="text-white/40">knowledge-base.exe</span>
        <div className="ml-auto flex gap-1">
          <div className="w-2 h-2 rounded-full bg-white/10" />
          <div className="w-2 h-2 rounded-full bg-white/10" />
          <div className="w-2 h-2 rounded-full bg-white/10" />
        </div>
      </div>
      
      {/* Terminal content */}
      <div className="text-emerald-400/90 mb-1">
        $ connect --model "Brenda.AI"
      </div>
      <div className="text-white/70 mb-2">
        <span className="text-accent">✓</span> Model loaded. Ask anything about my resume!
      </div>
      <div className="flex items-center text-white/50 h-4">
        <span className="text-primary mr-1">&gt;</span>
        <span>{text}</span>
        <span className="animate-[pulse_1s_infinite] w-1.5 h-3 bg-white/60 inline-block ml-0.5" />
      </div>
    </div>
  )
}
