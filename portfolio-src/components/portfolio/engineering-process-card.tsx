"use client"

import { Search, Brain, Lightbulb, Code, CheckCircle, Rocket } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const steps = [
  {
    icon: Search,
    title: "Discovery & Requirements",
    description:
      "Compreensão profunda das regras de negócio, objetivos e mapeamento de histórias de usuário.",
  },
  {
    icon: Brain,
    title: "Architecture & Strategy",
    description:
      "Desenho da arquitetura, modelagem de banco de dados (PostgreSQL) e escolha da stack ideal.",
  },
  {
    icon: Lightbulb,
    title: "UX & Prototyping",
    description:
      "Desenho de interfaces centradas no usuário e fluxos de navegação focados em usabilidade.",
  },
  {
    icon: Code,
    title: "Engineering & Dev",
    description:
      "Construção de código limpo, APIs RESTful robustas (Spring Boot) e interfaces performáticas (Next.js).",
  },
  {
    icon: CheckCircle,
    title: "QA & Performance",
    description:
      "Testes rigorosos de carga e estresse para garantir resiliência e alta disponibilidade do sistema.",
  },
  {
    icon: Rocket,
    title: "Deploy & Docs",
    description:
      "Configuração de ambientes (Docker), deploy contínuo e documentação técnica clara (Swagger).",
  },
]

export function EngineeringProcessCard() {
  return (
    <section className="px-6 py-10 border-b border-white/[0.05]">
      <p className="text-[10px] font-medium tracking-[0.1em] uppercase text-primary mb-3">
        Processo de engenharia
      </p>
      <p className="text-lg font-medium text-foreground mb-1">My Engineering Process</p>
      <p className="text-xs text-muted-foreground mb-6">
        Cada projeto segue um fluxo estruturado — do problema ao produto.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <div
              key={step.title}
              className="
                group relative flex flex-col bg-card border border-border rounded-2xl p-5
                transition-all duration-300
                hover:shadow-[0_0_20px_rgba(203,108,230,0.15)]
                hover:border-primary/30
              "
            >
              {/* Icon + step badge */}
              <div className="relative w-fit">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                {/* Step number badge */}
                <span className="absolute -top-1.5 -left-1.5 w-4 h-4 rounded-full bg-primary flex items-center justify-center text-[9px] font-bold text-white leading-none">
                  {index + 1}
                </span>
              </div>

              {/* Title */}
              <p className="mt-4 text-sm font-semibold text-foreground leading-snug">
                {step.title}
              </p>

              {/* Description */}
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed flex-1">
                {step.description}
              </p>

              {/* Accent line */}
              <div className="h-[2px] w-full bg-primary/40 mt-6 rounded-full transition-all duration-300 group-hover:bg-primary/70" />
            </div>
          )
        })}
      </div>
    </section>
  )
}
