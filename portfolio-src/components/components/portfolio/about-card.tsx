"use client"

import { User, Heart, Gamepad2, Code, Lightbulb, LucideIcon } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function AboutCard() {
  const { t } = useLanguage()

  const interests: { icon: LucideIcon; labelKey: keyof typeof t.about.interests }[] = [
    { icon: Code, labelKey: "software" },
    { icon: Lightbulb, labelKey: "intelligent" },
    { icon: Gamepad2, labelKey: "games" },
    { icon: Heart, labelKey: "devtools" },
  ]

  return (
    <section id="about" className="col-span-full lg:col-span-5 bg-card/70 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-border/50 relative overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
      {/* Gradient decoration */}
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl" />
      
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <User className="w-5 h-5 text-primary-foreground" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">{t.about.title}</h2>
        </div>
        
        <p className="text-muted-foreground leading-relaxed mb-6">
          {t.about.description}
        </p>
        
        <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
          {t.about.interestsTitle}
        </h3>
        
        <div className="grid grid-cols-2 gap-3">
          {interests.map((item) => (
            <div 
              key={item.labelKey}
              className="flex items-center gap-3 px-4 py-3 bg-secondary/50 rounded-2xl hover:bg-primary/10 hover:text-primary transition-all group cursor-default"
            >
              <item.icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">{t.about.interests[item.labelKey]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
