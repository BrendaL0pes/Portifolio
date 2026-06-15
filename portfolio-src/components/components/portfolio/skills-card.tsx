"use client"

import { Code, Brain, Wrench, Sparkles, LucideIcon } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

interface SkillCategory {
  titleKey: "backend" | "ai" | "tools"
  icon: LucideIcon
  color: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    titleKey: "backend",
    icon: Code,
    color: "from-primary to-primary/50",
    skills: ["Java", "Spring Boot", "REST APIs", "PostgreSQL"]
  },
  {
    titleKey: "ai",
    icon: Brain,
    color: "from-accent to-accent/50",
    skills: ["LLM APIs", "RAG Systems", "Prompt Engineering"]
  },
  {
    titleKey: "tools",
    icon: Wrench,
    color: "from-chart-3 to-chart-3/50",
    skills: ["Docker", "Git", "Swagger / OpenAPI"]
  }
]

export function SkillsCard() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="col-span-full lg:col-span-7 bg-card/70 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-border/50 relative overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
      {/* Decorative element */}
      <div className="absolute top-4 right-4">
        <Sparkles className="w-5 h-5 text-primary/40" />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative z-10">
        <h2 className="text-2xl font-bold text-foreground mb-6">{t.skills.title}</h2>
        
        <div className="grid gap-6">
          {skillCategories.map((category) => (
            <div key={category.titleKey} className="group/cat">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-8 h-8 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-4 h-4 text-primary-foreground" />
                </div>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                  {t.skills.categories[category.titleKey]}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2 ml-11">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-sm font-medium bg-secondary/60 hover:bg-primary/20 hover:text-primary text-secondary-foreground rounded-full transition-all cursor-default hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
