"use client"

import { Star } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function ProfileCard() {
  const { t } = useLanguage()

  return (
    <div className="relative w-full max-w-sm">
      {/* Outer glow effect - STRONG */}
      <div className="absolute -inset-3 bg-primary/20 rounded-3xl blur-3xl pointer-events-none" />
      
      {/* Card container */}
      <div className="relative bg-card border border-border rounded-3xl p-8 z-10">
        {/* Decorative stars inside card - Top corners */}
        <Star className="absolute top-4 left-4 w-5 h-5 text-accent/40" />
        <Star className="absolute top-4 right-4 w-5 h-5 text-accent/40" />
        
        {/* Content wrapper */}
        <div className="flex flex-col items-center gap-6">
          {/* Avatar Circle with border and status */}
          <div className="relative">
            {/* Avatar circle with thick primary border */}
            <div className="w-32 h-32 rounded-full border-4 border-primary bg-secondary flex items-center justify-center">
              <span className="text-3xl font-bold text-primary">BM</span>
            </div>
            
            {/* Green status indicator - bottom right */}
            <div className="absolute bottom-1 right-1 w-5 h-5 bg-card rounded-full flex items-center justify-center border-2 border-card">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
            </div>
          </div>
          
          {/* Name and Title */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-1">
              Brenda Medeiros
            </h3>
            <p className="text-muted-foreground">
              Software Engineer
            </p>
          </div>
          
          {/* Availability Badge */}
          <div className="flex items-center gap-2 px-4 py-2 bg-secondary border border-border rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-xs font-medium text-muted-foreground">
              Available to work
            </span>
          </div>
          
          {/* Divider */}
          <div className="w-full h-px bg-border" />
          
          {/* Footer Stats - 3 blocks separated by vertical lines */}
          <div className="flex items-center justify-center gap-0 w-full">
            {/* Block 1 */}
            <div className="flex-1 text-center">
              <p className="text-lg font-bold text-foreground">3+</p>
              <p className="text-xs text-muted-foreground">Projects</p>
            </div>
            
            {/* Vertical divider */}
            <div className="w-px h-12 bg-border" />
            
            {/* Block 2 */}
            <div className="flex-1 text-center">
              <p className="text-lg font-bold text-foreground">Java</p>
              <p className="text-xs text-muted-foreground">Focus</p>
            </div>
            
            {/* Vertical divider */}
            <div className="w-px h-12 bg-border" />
            
            {/* Block 3 */}
            <div className="flex-1 text-center">
              <p className="text-lg font-bold text-foreground">AI</p>
              <p className="text-xs text-muted-foreground">Interest</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
