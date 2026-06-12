"use client"

import { Layers, CheckCircle2, Star } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function EngineeringCard() {
  const { t } = useLanguage()

  return (
    <div className="col-span-full lg:col-span-5 bg-card/70 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-border/50 relative overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
      {/* Decorative element */}
      <div className="absolute top-4 right-4">
        <Star className="w-5 h-5 text-accent/40 fill-accent/20" />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-chart-3 to-chart-3/50 flex items-center justify-center">
            <Layers className="w-5 h-5 text-primary-foreground" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">{t.engineering.title}</h2>
        </div>
        
        <div className="grid gap-3">
          {t.engineering.practices.map((practice, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 p-4 rounded-2xl bg-secondary/40 hover:bg-primary/10 transition-all group"
            >
              <CheckCircle2 className="w-5 h-5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">{practice}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
