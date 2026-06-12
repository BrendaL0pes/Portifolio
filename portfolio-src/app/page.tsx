"use client"

import { Navbar } from "@/components/portfolio/navbar"
import { HeroCard } from "@/components/portfolio/hero-card"
import { ProjectCard } from "@/components/portfolio/project-card"
import { SkillsCard } from "@/components/portfolio/skills-card"
import { AboutCard } from "@/components/portfolio/about-card"
import { HeroWidgetsRow } from "@/components/sections/HeroWidgetsRow"
import { ArchitectureSection } from "@/components/sections/ArchitectureSection"
import { PerformanceSection } from "@/components/sections/PerformanceSection"
import { ContactCard } from "@/components/portfolio/contact-card"
import { Star, Sparkles } from "lucide-react"
import { LanguageProvider, useLanguage } from "@/lib/language-context"

function PortfolioContent() {
  const { t } = useLanguage()

  const projects = [
    {
      title: t.projects.items.aiRequirements.title,
      description: t.projects.items.aiRequirements.description,
      technologies: ["Java", "Spring Boot", "PostgreSQL", "LLM API"],
      githubUrl: "https://github.com",
      featured: true
    },
    {
      title: t.projects.items.knowledgeBase.title,
      description: t.projects.items.knowledgeBase.description,
      technologies: ["Java", "Spring Boot", "Vector Search", "LLM API"],
      githubUrl: "https://github.com",
      featured: true
    },
    {
      title: t.projects.items.gameUx.title,
      description: t.projects.items.gameUx.description,
      technologies: ["Java", "Spring Boot", "REST APIs", "PostgreSQL"],
      githubUrl: "https://github.com",
      featured: true
    }
  ]

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      {/* Global decorative gradient orbs */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-accent/10 to-primary/10 blur-3xl pointer-events-none" />
      
      {/* Navbar */}
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Hero Section */}
          <HeroCard />
          
          {/* About & Skills Row */}
          <AboutCard />
          <SkillsCard />

          {/* Widgets Row (Status, GitHub, Spotify) */}
          <HeroWidgetsRow />
          
          {/* Architecture Section (replaces Engineering) */}
          <ArchitectureSection />

          {/* Projects Section */}
          <div id="projects" className="col-span-full">
            <div className="flex items-center gap-4 mb-8 mt-8">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-primary fill-primary/30" />
                <h2 className="text-2xl font-bold text-foreground">{t.projects.title}</h2>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
            </div>
          </div>

          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              featured={project.featured}
            />
          ))}

          {/* Performance Section */}
          <PerformanceSection />
          
          {/* (Engineering section removed — replaced by ArchitectureSection above) */}
          
          {/* Contact Section */}
          <ContactCard />
        </div>
        
        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Sparkles className="w-3 h-3 text-primary-foreground" />
              </div>
              <p>© 2026 Brenda Medeiros Lopes</p>
            </div>
            <p className="flex items-center gap-1">
              {t.footer.madeWith} <span className="text-primary">Next.js</span> & <span className="text-primary">Tailwind CSS</span>
            </p>
          </div>
        </footer>
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
