"use client"

import { Github, ArrowUpRight, Folder } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/lib/language-context"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  featured?: boolean
}

export function ProjectCard({ 
  title, 
  description, 
  technologies, 
  githubUrl = "https://github.com",
  featured = false 
}: ProjectCardProps) {
  const { t } = useLanguage()

  return (
    <div 
      className={`
        ${featured ? 'col-span-full md:col-span-4' : 'col-span-full md:col-span-4'} 
        bg-card/70 backdrop-blur-sm rounded-3xl p-6 border border-border/50 
        group transition-all duration-300 
        hover:border-primary/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10
        relative overflow-hidden
      `}
    >
      {/* Glassmorphism shine effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="flex flex-col h-full relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Folder className="w-5 h-5 text-primary" />
          </div>
          
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group/github"
            aria-label={`View ${title} on GitHub`}
          >
            <Github className="w-5 h-5 text-muted-foreground group-hover/github:text-foreground transition-colors" />
          </a>
        </div>
        
        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed flex-grow mb-5">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="px-3 py-1.5 text-xs font-medium bg-secondary/80 hover:bg-primary/20 hover:text-primary rounded-full transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>
        
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0"
        >
          {t.projects.viewProject}
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  )
}
