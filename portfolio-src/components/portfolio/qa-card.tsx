"use client"

import { useLanguage } from "@/lib/language-context"

export function QaCard() {
  const { t } = useLanguage()

  const tools = [
    { ...t.qa.tools.k6, dot: "#7c3aed" },
    { ...t.qa.tools.jmeter, dot: "#d97706" },
    { ...t.qa.tools.gatling, dot: "#0d9488" },
  ]

  return (
    <section className="px-6 py-10 border-b border-white/[0.05]">
      <p className="text-[10px] font-medium tracking-[0.1em] uppercase text-primary mb-3">
        {t.qa.label}
      </p>
      <div className="rounded-xl border border-white/[0.09] bg-white/[0.03] overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: description + chart */}
          <div className="p-5 md:border-r border-white/[0.08]">
            <p className="text-base font-medium text-white mb-1.5">{t.qa.title}</p>
            <p className="text-xs text-white/40 leading-relaxed mb-4">{t.qa.description}</p>
            <svg viewBox="0 0 280 70" className="w-full h-auto opacity-35" aria-hidden="true">
              <polyline
                points="0,60 30,55 60,45 90,32 120,20 150,16 180,14 200,22 215,40 225,55 235,58 260,57 280,56"
                fill="none"
                stroke="#7c3aed"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <polyline
                points="0,60 30,55 60,45 90,32 120,20 150,16 180,14 200,22 215,40 225,55 235,58 260,57 280,56 280,70 0,70 Z"
                fill="rgba(124,58,237,0.12)"
              />
              <line x1="0" y1="20" x2="280" y2="20" stroke="#ef4444" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.5" />
              <circle cx="200" cy="22" r="3.5" fill="#ef4444" opacity="0.7" />
            </svg>
            <div className="flex gap-3 mt-2 flex-wrap">
              <span className="text-[10px] text-white/25 flex items-center gap-1.5">
                <span className="w-2.5 h-0.5 bg-primary inline-block rounded-full" />
                {t.qa.legend.throughput}
              </span>
              <span className="text-[10px] text-white/25 flex items-center gap-1.5">
                <span className="w-2.5 h-px bg-red-500 inline-block opacity-60" />
                {t.qa.legend.sla}
              </span>
              <span className="text-[10px] text-white/25 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block opacity-70" />
                {t.qa.legend.breaking}
              </span>
            </div>
          </div>

          {/* Right: tools */}
          <div className="p-5 flex flex-col gap-2.5 relative overflow-hidden">
            <svg
              className="absolute bottom-0 right-0 left-0 opacity-[0.18]"
              viewBox="0 0 200 120"
              aria-hidden="true"
              preserveAspectRatio="xMidYMax meet"
            >
              <polyline
                points="0,110 25,100 50,85 80,65 100,45 120,38 140,36 160,50 175,80 185,100 200,105"
                fill="none"
                stroke="#7c3aed"
                strokeWidth="1"
                opacity="0.5"
              />
            </svg>
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="relative z-10 flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5"
              >
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: tool.dot }} />
                <div>
                  <div className="text-xs font-medium text-white/90">{tool.name}</div>
                  <div className="text-[10px] text-white/35">{tool.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
