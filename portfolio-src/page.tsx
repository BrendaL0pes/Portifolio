// app/page.tsx
// Estrutura de página com layout atualizado para o novo design

import { HeroCard }            from "@/components/portfolio/hero-card"
import { SkillsCard }          from "@/components/portfolio/skills-card"
import { ArchitectureSection } from "@/components/sections/ArchitectureSection"
import { ProjectsSection }     from "@/components/sections/ProjectsSection"
import { PerformanceSection }  from "@/components/sections/PerformanceSection"
import { ContactCard }         from "@/components/portfolio/contact-card"

export default function Home() {
  return (
    <main className="bg-[#0a0a0f] text-[#e2e2e8] min-h-screen overflow-x-hidden">

      {/* 1 — Hero: texto + CTAs à esq., widgets GitHub + Spotify à dir. */}
      <HeroCard />

      {/* Divisor */}
      <div className="border-t border-white/[0.05]" />

      {/* 2 — Skills: grid 2×2 de tecnologias */}
      <SkillsCard />

      {/* Divisor */}
      <div className="border-t border-white/[0.05]" />

      {/* 3 — Arquitetura Contextual: abas com conteúdo 2 colunas */}
      <ArchitectureSection />

      {/* Divisor */}
      <div className="border-t border-white/[0.05]" />

      {/* 4 — Projetos: grid 3 colunas */}
      <ProjectsSection />

      {/* Divisor */}
      <div className="border-t border-white/[0.05]" />

      {/* 5 — Performance & QA: split 2 colunas */}
      <PerformanceSection />

      {/* Divisor */}
      <div className="border-t border-white/[0.05]" />

      {/* 6 — Contato: centralizado */}
      <ContactCard />

    </main>
  )
}
