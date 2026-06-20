"use client"

import { Github, Brain, MessageCircle, Gamepad2, LucideIcon } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  icon: "brain" | "chat" | "game"
  onClick?: () => void
}

const iconConfig: Record<ProjectCardProps["icon"], { Icon: LucideIcon; box: string; color: string; cardBorder: string }> = {
  brain: { Icon: Brain, box: "bg-logo-green/15 border-logo-green/30", color: "text-logo-green", cardBorder: "border-logo-green/30" },
  chat: { Icon: MessageCircle, box: "bg-logo-green/15 border-logo-green/30", color: "text-logo-green", cardBorder: "border-logo-green/30" },
  game: { Icon: Gamepad2, box: "bg-logo-green/15 border-logo-green/30", color: "text-logo-green", cardBorder: "border-logo-green/30" },
}

export function ProjectCard({
  title,
  description,
  technologies,
  githubUrl = "https://github.com",
  icon,
  onClick,
}: ProjectCardProps) {
  const { Icon, box, color, cardBorder } = iconConfig[icon]

  return (
    <div 
      className={`flex flex-col gap-2 rounded-xl border ${cardBorder} bg-white/[0.03] p-3.5 transition-colors hover:border-white/[0.18] cursor-pointer`}
      onClick={onClick}
    >
      <div className="flex items-start justify-between">
        <div className={`w-8 h-8 rounded-lg border flex items-center justify-center ${box}`}>
          <Icon className={`w-4 h-4 ${color}`} />
        </div>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ver ${title} no GitHub`} onClick={(e) => e.stopPropagation()}>
          <Github className="w-3.5 h-3.5 text-white/25 hover:text-white/60 transition-colors" />
        </a>
      </div>
      <div className="text-[13px] font-medium text-white/90">{title}</div>
      <div className="text-[11px] text-white/40 leading-relaxed">{description}</div>
      <div className="flex flex-wrap gap-1.5 mt-1">
        {technologies.map((tech, i) => (
          <span
            key={tech}
            className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${box} ${color}`}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
