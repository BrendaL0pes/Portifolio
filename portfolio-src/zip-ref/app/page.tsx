"use client"

import { Navbar } from "@/components/portfolio/navbar"
import { DividerLabel } from "@/components/portfolio/divider-label"
import { HeroCard } from "@/components/portfolio/hero-card"
import { SkillsCard } from "@/components/portfolio/skills-card"
import { ArchitectureCard } from "@/components/portfolio/architecture-card"
import { ProjectCard } from "@/components/portfolio/project-card"
import { QaCard } from "@/components/portfolio/qa-card"
import { ContactCard } from "@/components/portfolio/contact-card"
import { LanguageProvider, useLanguage } from "@/lib/language-context"

function PortfolioContent() {
  const { t } = useLanguage()

  const projects = [
    {
      title: t.projects.items.aiRequirements.title,
      description: t.projects.items.aiRequirements.description,
      technologies: ["Java", "Spring Boot", "LLM API", "PostgreSQL"],
      icon: "brain" as const,
    },
    {
      title: t.projects.items.knowledgeBase.title,
      description: t.projects.items.knowledgeBase.description,
      technologies: ["Java", "RAG", "Vector Search", "LLM API"],
      icon: "chat" as const,
    },
    {
      title: t.projects.items.gameUx.title,
      description: t.projects.items.gameUx.description,
      technologies: ["Java", "Spring Boot", "REST APIs", "PostgreSQL"],
      icon: "game" as const,
    },
  ]

  return (
    <main className="min-h-screen bg-background w-full overflow-x-hidden">
      <Navbar />

      <div className="max-w-3xl mx-auto">
        {/* 01 — Hero & widgets */}
        <DividerLabel label={t.dividers.hero} />
        <HeroCard />

        {/* 02 — Skills */}
        <DividerLabel label={t.dividers.skills} />
        <SkillsCard />

        {/* 03 — Architecture */}
        <DividerLabel label={t.dividers.architecture} />
        <ArchitectureCard />

        {/* 04 — Projects */}
        <DividerLabel label={t.dividers.projects} />
        <section id="projects" className="px-6 py-10 border-b border-white/[0.05]">
          <p className="text-[10px] font-medium tracking-[0.1em] uppercase text-primary mb-3">
            {t.projects.label}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                icon={project.icon}
              />
            ))}
          </div>
        </section>

        {/* 05 — QA */}
        <DividerLabel label={t.dividers.qa} />
        <QaCard />

        {/* 06 — Contact */}
        <DividerLabel label={t.dividers.contact} />
        <ContactCard />
      </div>
    </main>
  )
}

export default function PortfolioPage() {
  return (
    <LanguageProvider defaultLanguage="pt">
      <PortfolioContent />
    </LanguageProvider>
  )
}
