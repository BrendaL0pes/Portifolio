"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { CheckCircle2 } from "lucide-react"

export function QaCard() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState<"functional" | "performance">("functional")

  const tabs = [
    { id: "functional" as const, label: t.qa.tabs.functional },
    { id: "performance" as const, label: t.qa.tabs.performance },
  ]

  const toolsPerformance = [
    { ...t.qa.toolsPerformance.k6 },
    { ...t.qa.toolsPerformance.jmeter },
    { ...t.qa.toolsPerformance.gatling },
    { ...t.qa.toolsPerformance.loadrunner },
  ]

  const toolsFunctional = [
    { id: "junit", ...t.qa.toolsFunctional.junit },
    { id: "cucumber", ...t.qa.toolsFunctional.cucumber },
    { id: "selenium", ...t.qa.toolsFunctional.selenium },
    { id: "postman", ...t.qa.toolsFunctional.postman },
  ]

  return (
    <section className="relative px-6 py-10 rounded-2xl border border-white/[0.05] bg-card overflow-hidden mb-6">
      <p className="text-[10px] font-medium tracking-[0.1em] uppercase text-accent animate-drop-shadow-neon mb-3">
        {t.qa.label}
      </p>
      
      <div className="rounded-xl border border-white/[0.09] bg-white/[0.03] overflow-hidden">
        {/* Tab bar */}
        <div className="flex border-b border-white/[0.08] overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-xs font-medium px-4 py-2.5 whitespace-nowrap border-b-2 -mb-px transition-all ${
                activeTab === tab.id
                  ? "text-logo-green border-logo-green animate-drop-shadow-neon-green"
                  : "text-white/35 border-transparent hover:text-white/60"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab body */}
        <div className="p-5">
          {activeTab === "performance" ? (
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left: description + chart */}
              <div className="md:pr-5 md:border-r border-white/[0.08] mb-5 md:mb-0">
                <p className="text-base font-medium text-white mb-1.5">{t.qa.title}</p>
                <p className="text-xs text-white/40 leading-relaxed mb-4">{t.qa.description}</p>
                <svg viewBox="0 0 280 70" className="w-full h-auto" aria-hidden="true">
                  <defs>
                    <linearGradient id="qaChartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#cb6ce6" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#cb6ce6" stopOpacity="0" />
                    </linearGradient>
                    <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <polyline
                    points="0,60 30,55 60,45 90,32 120,20 150,16 180,14 200,22 215,40 225,55 235,58 260,57 280,56 280,70 0,70 Z"
                    fill="url(#qaChartGrad)"
                  />
                  <polyline
                    points="0,60 30,55 60,45 90,32 120,20 150,16 180,14 200,22 215,40 225,55 235,58 260,57 280,56"
                    fill="none"
                    stroke="#cb6ce6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#neonGlow)"
                  />
                  <line x1="0" y1="20" x2="280" y2="20" stroke="#ef4444" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.4" />
                  <circle cx="200" cy="22" r="3.5" fill="#ef4444" opacity="0.6" />
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

              {/* Right: toolsPerformance */}
              <div className="md:pl-5 flex flex-col gap-2.5 relative overflow-hidden">
                {toolsPerformance.map((tool) => (
                  <div
                    key={tool.name}
                    className="relative z-10 flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2.5"
                  >
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0 bg-gradient-to-br from-primary to-accent shadow-[0_0_6px_rgba(203,108,230,0.8)]" />
                    <div>
                      <div className="text-xs font-medium text-white/90">{tool.name}</div>
                      <div className="text-[10px] text-white/35">{tool.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Left: General functional test description or other elements */}
              <div className="flex flex-col gap-2.5">
                {toolsFunctional.slice(0, 2).map((tool) => (
                  <div
                    key={tool.id}
                    className="relative z-10 flex flex-col gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-2.5 h-2.5 rounded-full flex-shrink-0 bg-logo-green animate-drop-shadow-neon-green" />
                      <div>
                        <div className="text-sm font-medium text-white/90">{tool.name}</div>
                        <div className="text-[11px] text-white/40">{tool.role}</div>
                      </div>
                    </div>
                    
                    {/* Progress Bar para JUnit */}
                    {tool.id === "junit" && tool.coverage && (
                      <div className="mt-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-[10px] font-mono text-logo-green animate-drop-shadow-neon-green">{tool.coverage}</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                          <div className="bg-logo-green h-1.5 rounded-full animate-drop-shadow-neon-green" style={{ width: "92%" }}></div>
                        </div>
                      </div>
                    )}

                    {/* Timeline / Status para Cucumber */}
                    {tool.id === "cucumber" && tool.scenarios && (
                      <div className="mt-1 flex items-center gap-2 bg-logo-green/10 border border-logo-green/20 rounded-md px-2 py-1.5 w-fit">
                        <CheckCircle2 className="w-3.5 h-3.5 text-logo-green animate-drop-shadow-neon-green" />
                        <span className="text-[10px] font-medium text-logo-green animate-drop-shadow-neon-green tracking-wide">
                          {tool.scenarios}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col gap-2.5">
                {toolsFunctional.slice(2).map((tool) => (
                  <div
                    key={tool.id}
                    className="relative z-10 flex flex-col gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 h-[88px] justify-center"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-2.5 h-2.5 rounded-full flex-shrink-0 bg-logo-green animate-drop-shadow-neon-green" />
                      <div>
                        <div className="text-sm font-medium text-white/90">{tool.name}</div>
                        <div className="text-[11px] text-white/40">{tool.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
