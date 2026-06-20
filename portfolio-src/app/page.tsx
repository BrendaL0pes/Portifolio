"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import { Navbar } from "@/components/portfolio/navbar"
import { HeroCard } from "@/components/portfolio/hero-card"
import { SkillsCard } from "@/components/portfolio/skills-card"
import { LanguageProvider, useLanguage } from "@/lib/language-context"
import { ProjectModalData } from "@/components/portfolio/project-modal"

const ArchitectureCard = dynamic(() => import("@/components/portfolio/architecture-card").then(mod => mod.ArchitectureCard))
const ProjectCard = dynamic(() => import("@/components/portfolio/project-card").then(mod => mod.ProjectCard))
const QaCard = dynamic(() => import("@/components/portfolio/qa-card").then(mod => mod.QaCard))
const ContactCard = dynamic(() => import("@/components/portfolio/contact-card").then(mod => mod.ContactCard))
const ProjectModal = dynamic(() => import("@/components/portfolio/project-modal").then(mod => mod.ProjectModal))

function PortfolioContent() {
  const { t } = useLanguage()

  const [selectedProject, setSelectedProject] = useState<ProjectModalData | null>(null)

  const projects = [
    {
      title: t.projects.items.aiRequirements.title,
      description: t.projects.items.aiRequirements.description,
      tags: t.projects.items.aiRequirements.tags,
      type: t.projects.items.aiRequirements.type,
      backend: t.projects.items.aiRequirements.backend,
      frontend: t.projects.items.aiRequirements.frontend,
      database: t.projects.items.aiRequirements.database,
      overview: t.projects.items.aiRequirements.overview,
      technologies: ["Java", "Spring Boot", "LLM API", "PostgreSQL"],
      icon: "brain" as const,
    },
    {
      title: t.projects.items.knowledgeBase.title,
      description: t.projects.items.knowledgeBase.description,
      tags: t.projects.items.knowledgeBase.tags,
      type: t.projects.items.knowledgeBase.type,
      backend: t.projects.items.knowledgeBase.backend,
      frontend: t.projects.items.knowledgeBase.frontend,
      database: t.projects.items.knowledgeBase.database,
      overview: t.projects.items.knowledgeBase.overview,
      technologies: ["Java", "RAG", "Vector Search", "LLM API"],
      icon: "chat" as const,
    },
    {
      title: t.projects.items.gameUx.title,
      description: t.projects.items.gameUx.description,
      tags: t.projects.items.gameUx.tags,
      type: t.projects.items.gameUx.type,
      backend: t.projects.items.gameUx.backend,
      frontend: t.projects.items.gameUx.frontend,
      database: t.projects.items.gameUx.database,
      overview: t.projects.items.gameUx.overview,
      technologies: ["Java", "Spring Boot", "REST APIs", "PostgreSQL"],
      icon: "game" as const,
    },
  ]

  return (
    <main className="min-h-screen bg-background w-full overflow-x-hidden">
      <Navbar />

      <div className="max-w-4xl mx-auto">
        <HeroCard />

        <SkillsCard />

        <ArchitectureCard />

        <section id="projects" className="relative px-6 py-10 rounded-2xl border border-white/[0.05] bg-card overflow-hidden mb-6">
          <p className="text-[10px] font-medium tracking-[0.1em] uppercase text-accent animate-drop-shadow-neon mb-3">
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
                onClick={() => setSelectedProject(project as ProjectModalData)}
              />
            ))}
          </div>
        </section>

        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            labels={t.projects.modalLabels} 
            onClose={() => setSelectedProject(null)} 
          />
        )}

        <QaCard />

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
