"use client"

import { Github, Brain, MessageCircle, Gamepad2, LucideIcon } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  icon: "brain" | "chat" | "game"
}

const iconConfig: Record<ProjectCardProps["icon"], { Icon: LucideIcon; box: string; color: string }> = {
  brain: { Icon: Brain, box: "bg-primary/15 border-primary/30", color: "text-accent" },
  chat: { Icon: MessageCircle, box: "bg-teal-500/15 border-teal-500/30", color: "text-teal-300" },
  game: { Icon: Gamepad2, box: "bg-amber-500/15 border-amber-500/30", color: "text-amber-400" },
}

export function ProjectCard({
  title,
  description,
  technologies,
  githubUrl = "https://github.com",
  icon,
}: ProjectCardProps) {
  const { Icon, box, color } = iconConfig[icon]

  return (
    <div className="flex flex-col gap-2 rounded-xl border border-white/[0.09] bg-white/[0.03] p-3.5 transition-colors hover:border-white/[0.18]">
      <div className="flex items-start justify-between">
        <div className={`w-8 h-8 rounded-lg border flex items-center justify-center ${box}`}>
          <Icon className={`w-4 h-4 ${color}`} />
        </div>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`Ver ${title} no GitHub`}>
          <Github className="w-3.5 h-3.5 text-white/25 hover:text-white/60 transition-colors" />
        </a>
      </div>
      <div className="text-[13px] font-medium text-white/90">{title}</div>
      <div className="text-[11px] text-white/40 leading-relaxed">{description}</div>
      <div className="flex flex-wrap gap-1.5 mt-1">
        {technologies.map((tech, i) => (
          <span
            key={tech}
            className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${
              i === technologies.length - 1
                ? "bg-white/[0.06] text-white/45 border-white/[0.12]"
                : `${box} ${color}`
            }`}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
