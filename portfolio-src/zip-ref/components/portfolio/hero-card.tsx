"use client"

import { useLanguage } from "@/lib/language-context"
import { Github, Star, Sparkles } from "lucide-react"

export function HeroCard() {
  const { t } = useLanguage()

  return (
    <section id="home" className="relative px-6 py-10 border-b border-white/[0.05] overflow-hidden">
      {/* Gradient orbs */}
      <div className="pointer-events-none absolute -top-10 -right-10 w-72 h-72 rounded-full bg-gradient-to-br from-primary/25 to-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 left-0 w-56 h-56 rounded-full bg-gradient-to-tr from-accent/15 to-primary/15 blur-3xl" />

      {/* Decorative stars */}
      <div className="pointer-events-none absolute top-8 right-24 animate-pulse">
        <Star className="w-5 h-5 text-primary fill-primary/30" />
      </div>
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
          {/* GitHub widget */}
          <div className="rounded-xl border border-white/[0.09] bg-white/[0.03] p-3.5">
            <div className="text-[10px] font-medium uppercase tracking-wider text-white/30 mb-2">
              {t.widgets.githubLabel}
            </div>
            <div className="flex items-center gap-2">
              <Github className="w-4 h-4 text-white/50" />
              <span className="text-xs text-white/60 font-mono">{t.widgets.githubUser}</span>
            </div>
            <div className="mt-2 flex gap-2">
              {[
                { value: "12", label: t.widgets.repos },
                { value: "8", label: t.widgets.public },
                { value: "4", label: t.widgets.languages },
              ].map((stat) => (
                <div key={stat.label} className="flex-1 bg-white/[0.04] rounded-md px-2 py-1.5 text-center">
                  <div className="text-base font-medium text-white">{stat.value}</div>
                  <div className="text-[10px] text-white/30">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Spotify widget */}
          <div className="rounded-xl border border-white/[0.09] bg-white/[0.03] p-3.5">
            <div className="flex items-center gap-1.5 mb-1.5">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-[#1db954]" aria-hidden="true">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
              <span className="text-[10px] font-medium uppercase tracking-wider text-white/30">
                {t.widgets.nowPlaying}
              </span>
            </div>
            <div className="text-xs font-medium text-white/90">{t.widgets.trackName}</div>
            <div className="text-[10px] text-white/30 mt-0.5">{t.widgets.trackDesc}</div>
            <div className="h-0.5 bg-white/[0.08] rounded-full overflow-hidden mt-2">
              <div className="h-full bg-[#1db954] rounded-full animate-spotify-fill" style={{ width: "38%" }} />
            </div>
            <div className="flex justify-between text-[10px] text-white/20 mt-1 font-mono">
              <span>1:14</span>
              <span>2:47</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
