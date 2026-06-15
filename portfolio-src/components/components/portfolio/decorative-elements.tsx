"use client"

import { Star, Sparkle } from "lucide-react"

export function FloatingStar({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute animate-pulse ${className}`}>
      <Star className="w-4 h-4 text-primary fill-primary/30" />
    </div>
  )
}

export function FloatingSparkle({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute animate-bounce ${className}`} style={{ animationDuration: "3s" }}>
      <Sparkle className="w-3 h-3 text-accent fill-accent/30" />
    </div>
  )
}

export function GradientOrb({ className = "" }: { className?: string }) {
  return (
    <div 
      className={`absolute rounded-full blur-3xl opacity-30 ${className}`}
      style={{
        background: "linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)"
      }}
    />
  )
}

export function DecorativeCircle({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute border-2 border-dashed border-primary/20 rounded-full ${className}`} />
  )
}

export function ArrowDecoration({ className = "" }: { className?: string }) {
  return (
    <svg 
      className={`absolute text-primary/40 ${className}`}
      width="60" 
      height="30" 
      viewBox="0 0 60 30" 
      fill="none"
    >
      <path 
        d="M5 25C15 25 25 5 55 5" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round"
        strokeDasharray="4 4"
      />
      <path 
        d="M50 2L55 5L50 8" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  )
}
