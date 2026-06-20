"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"

export function ArchitectureCard() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState<"robust" | "web" | "api">("robust")

  const tabs = [
    { id: "robust" as const, label: t.architecture.tabs.robust },
    { id: "web" as const, label: t.architecture.tabs.web },
    { id: "api" as const, label: t.architecture.tabs.api },
  ]

  const tagStyles = {
    robust: "bg-primary/15 text-accent border-primary/30",
    web: "bg-primary/15 text-accent border-primary/30",
    api: "bg-primary/15 text-accent border-primary/30",
  }

  const stackBoxStyles = {
    robust: "bg-primary/15 border-primary/30",
    web: "bg-primary/15 border-primary/30",
    api: "bg-primary/15 border-primary/30",
  }

  const panel = t.architecture.panels[activeTab]

  return (
    <section id="architecture" className="relative px-6 py-10 rounded-2xl border border-white/[0.05] bg-card overflow-hidden mb-6">
      <p className="text-[10px] font-medium tracking-[0.1em] uppercase text-accent animate-drop-shadow-neon mb-3">
        {t.architecture.label}
      </p>

      <div className="mt-4 border border-white/[0.09] rounded-xl overflow-hidden">
        {/* Tab bar */}
        <div className="flex border-b border-white/[0.08] overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-xs font-medium px-4 py-2.5 whitespace-nowrap border-b-2 -mb-px transition-all ${
                activeTab === tab.id
                  ? "text-accent border-primary"
                  : "text-white/35 border-transparent hover:text-white/60"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab body */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
          <div>
            <div className="text-[10px] uppercase tracking-wider font-medium text-white/25 mb-1">
              {panel.kicker}
            </div>
            <div className="text-base font-medium text-white mb-2 leading-snug">{panel.heading}</div>
            <p className="text-xs text-white/45 leading-relaxed">{panel.text}</p>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider font-medium text-white/25 mb-1">
              {t.architecture.whenToChoose}
            </div>
            <div className="text-[13px] font-medium text-white mb-2.5">{t.architecture.idealContexts}</div>
            <div className="flex flex-wrap gap-1.5">
              {panel.contexts.map((ctx) => (
                <span
                  key={ctx}
                  className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${tagStyles[activeTab]}`}
                >
                  {ctx}
                </span>
              ))}
            </div>
            <div className={`mt-3 p-2.5 rounded-lg border ${stackBoxStyles[activeTab]}`}>
              <p className="text-[11px] text-accent leading-relaxed font-medium">{panel.stack}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
