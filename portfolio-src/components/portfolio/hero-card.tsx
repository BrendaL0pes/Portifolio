"use client"

import { useLanguage } from "@/lib/language-context"
import { Star, Sparkles } from "lucide-react"
import { GitHubWidget } from "@/components/widgets/GitHubWidget"
import { SpotifyWidget } from "@/components/widgets/SpotifyWidget"

export function HeroCard() {
  const { t } = useLanguage()

  return (
    <section id="home" className="relative px-6 py-10 border-b border-white/[0.05] overflow-hidden">
      {/* Gradient orbs */}
      <div className="pointer-events-none absolute -top-10 -right-10 w-72 h-72 rounded-full bg-gradient-to-br from-primary/25 to-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 left-0 w-56 h-56 rounded-full bg-gradient-to-tr from-accent/15 to-primary/15 blur-3xl" />

      {/* Decorative stars */}
      <div className="pointer-events-none absolute top-24 right-10 animate-bounce" style={{ animationDuration: "3s" }}>
        <Sparkles className="w-4 h-4 text-accent" />
      </div>
      <div className="pointer-events-none absolute bottom-6 left-8 animate-pulse" style={{ animationDelay: "1s" }}>
        <Star className="w-3.5 h-3.5 text-primary fill-primary/30" />
      </div>

      <div className="relative z-10 flex flex-wrap gap-5">
        {/* Left: intro */}
        <div className="flex-1 min-w-[200px]">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/[0.08] mb-4">
            <span className="relative inline-flex items-center justify-center w-2 h-2">
              <span className="absolute w-2 h-2 rounded-full bg-emerald-500 opacity-60 animate-ping-aim" />
              <span className="relative w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-[11px] font-medium text-emerald-500">{t.hero.status}</span>
          </div>

          <h1 className="text-[26px] font-medium leading-tight text-white mb-2 text-balance">
            {t.hero.greeting}{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
              Brenda
            </span>
            <br />
            {t.hero.role}
          </h1>
          <p className="text-[13px] text-white/45 leading-relaxed max-w-[420px]">
            {t.hero.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            <a
              href="#contact"
              className="text-xs px-4 py-2 rounded-lg bg-primary/20 border border-primary/40 text-accent hover:bg-primary/30 transition-colors"
            >
              {t.hero.contactBtn}
            </a>
            <a
              href="#projects"
              className="text-xs px-4 py-2 rounded-lg bg-transparent border border-white/15 text-white/60 hover:bg-white/[0.04] transition-colors"
            >
              {t.hero.projectsBtn}
            </a>
          </div>
        </div>

        {/* Right: widgets */}
        <div className="flex-1 min-w-[200px] flex flex-col gap-2">
          <GitHubWidget />
          <SpotifyWidget />
        </div>
      </div>
    </section>
  )
}
