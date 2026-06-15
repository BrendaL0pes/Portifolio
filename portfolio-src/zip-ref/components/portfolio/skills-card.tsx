"use client"

import { useLanguage } from "@/lib/language-context"

export function SkillsCard() {
  const { t } = useLanguage()

  const groups = [
    {
      title: t.skills.categories.backend,
      tagClass: "bg-primary/15 text-accent border-primary/30",
      tags: ["Java", "Spring Boot", "PostgreSQL", "REST APIs", "JWT"],
    },
    {
      title: t.skills.categories.frontend,
      tagClass: "bg-teal-500/15 text-teal-300 border-teal-500/30",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: t.skills.categories.devops,
      tagClass: "bg-white/[0.06] text-white/45 border-white/[0.12]",
      tags: ["Docker", "Git", "Linux", "Swagger"],
    },
    {
      title: t.skills.categories.ai,
      tagClass: "bg-amber-500/15 text-amber-400 border-amber-500/30",
      tags: ["RAG Systems", "Prompt Eng.", "LLM APIs", "ChromaDB"],
    },
  ]

  return (
    <section id="skills" className="px-6 py-10 border-b border-white/[0.05]">
      <p className="text-[10px] font-medium tracking-[0.1em] uppercase text-primary mb-3">
        {t.skills.label}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {groups.map((group) => (
          <div key={group.title} className="rounded-xl border border-white/[0.09] bg-white/[0.03] p-3.5">
            <div className="text-[10px] font-medium uppercase tracking-wider text-white/30 mb-2">
              {group.title}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {group.tags.map((tag) => (
                <span
                  key={tag}
                  className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${group.tagClass}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
