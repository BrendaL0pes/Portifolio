"use client";

// Coloque em: components/sections/ArchitectureSection.tsx
// Uso no page.tsx: <ArchitectureSection />
// Substitui completamente o bloco "Mais sobre mim: Engineering"

import { useState } from "react";
import { cn } from "@/lib/utils"; // utilitário padrão do shadcn

// ─── Dados das abas ─────────────────────────────────────────────────────────

const TABS = [
  {
    id: "java",
    label: "Java / Spring Boot",
    badge: "Sistemas Robustos",
    icon: (
      // Ícone de servidor inline
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
        <path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z"/>
      </svg>
    ),
    when: "Quando usar",
    whenDetail: "Sistemas corporativos, APIs de alta carga, domínios com regras de negócio complexas e times maiores.",
    approach: "Como abordo",
    approachDetail:
      "Arquitetura em camadas (Controller → Service → Repository), SOLID, Clean Architecture, autenticação JWT, integração com LLMs via API. Spring Boot como framework porque o ecossistema Java tem soluções maduras para cada camada.",
    tags: ["Spring Boot", "Clean Architecture", "JWT", "PostgreSQL", "REST APIs", "Docker"],
    accent: "violet",
  },
  {
    id: "nextjs",
    label: "Next.js / React",
    badge: "Web & UX",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
        <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z"/>
      </svg>
    ),
    when: "Quando usar",
    whenDetail: "Aplicações web com foco em experiência do usuário, landing pages, dashboards e produtos que precisam de SSR para SEO.",
    approach: "Como abordo",
    approachDetail:
      "App Router do Next.js 14+, Server Components para dados, Client Components para interatividade. Tailwind + shadcn/ui para design system sem reinventar a roda. TypeScript obrigatório.",
    tags: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Vercel"],
    accent: "blue",
  },
  {
    id: "flutter",
    label: "Flutter / APIs",
    badge: "Mobile Desacoplado",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
        <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.37zm.159 11.73l-4.714 4.695 4.742 4.742H21.9l-4.765-4.742 4.765-4.695h-7.427z"/>
      </svg>
    ),
    when: "Quando usar",
    whenDetail: "Apps mobile multiplataforma (iOS + Android) onde velocidade de entrega importa e performance nativa não é bloqueante.",
    approach: "Como abordo",
    approachDetail:
      "Flutter com arquitetura baseada em BLoC ou Riverpod para gerência de estado. Backend desacoplado via REST API — o app consome, não sabe como o servidor funciona por dentro. Facilita trocar o backend sem reescrever o app.",
    tags: ["Flutter", "Dart", "BLoC", "REST APIs", "multiplataforma", "desacoplamento"],
    accent: "teal",
  },
] as const;

type TabId = (typeof TABS)[number]["id"];

// ─── Mapa de cores por accent ────────────────────────────────────────────────

const ACCENT_STYLES: Record<string, { tab: string; badge: string; tag: string }> = {
  violet: {
    tab: "border-violet-500 text-violet-300",
    badge: "bg-violet-500/15 text-violet-300 border-violet-500/30",
    tag: "bg-violet-500/10 text-violet-300/80 border-violet-500/20",
  },
  blue: {
    tab: "border-blue-500 text-blue-300",
    badge: "bg-blue-500/15 text-blue-300 border-blue-500/30",
    tag: "bg-blue-500/10 text-blue-300/80 border-blue-500/20",
  },
  teal: {
    tab: "border-teal-500 text-teal-300",
    badge: "bg-teal-500/15 text-teal-300 border-teal-500/30",
    tag: "bg-teal-500/10 text-teal-300/80 border-teal-500/20",
  },
};

// ─── Componente ──────────────────────────────────────────────────────────────

export function ArchitectureSection() {
  const [activeTab, setActiveTab] = useState<TabId>("java");

  const current = TABS.find((t) => t.id === activeTab)!;
  const styles = ACCENT_STYLES[current.accent];

  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Eyebrow */}
        <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-3">
          Arquitetura contextual
        </p>

        {/* Headline */}
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2 leading-snug">
          O que faz um Engenheiro de Software?
        </h2>
        <p className="text-sm text-white/50 mb-10 max-w-xl">
          Não existe bala de prata — o contexto dita a arquitetura. Cada stack
          resolve um problema específico com diferentes trade-offs.
        </p>

        {/* Card principal */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">

          {/* Abas */}
          <div className="flex border-b border-white/10 overflow-x-auto">
            {TABS.map((tab) => {
              const isActive = tab.id === activeTab;
              const tabStyles = ACCENT_STYLES[tab.accent];
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex items-center gap-2 px-5 py-3.5 text-sm font-medium whitespace-nowrap transition-colors border-b-2 -mb-px",
                    isActive
                      ? cn("bg-white/[0.04]", tabStyles.tab)
                      : "border-transparent text-white/40 hover:text-white/70"
                  )}
                >
                  <span
                    className={cn(
                      "transition-colors",
                      isActive ? "" : "text-white/30"
                    )}
                  >
                    {tab.icon}
                  </span>
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Conteúdo da aba ativa */}
          <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">

            {/* Coluna esquerda */}
            <div className="flex flex-col gap-6">
              <div>
                <span
                  className={cn(
                    "inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full border mb-4",
                    styles.badge
                  )}
                >
                  {current.badge}
                </span>

                <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-2">
                  {current.when}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {current.whenDetail}
                </p>
              </div>

              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-2">
                  {current.approach}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed">
                  {current.approachDetail}
                </p>
              </div>
            </div>

            {/* Coluna direita — tags */}
            <div className="flex flex-col justify-between gap-6">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-3">
                  Stack envolvida
                </h3>
                <div className="flex flex-wrap gap-2">
                  {current.tags.map((tag) => (
                    <span
                      key={tag}
                      className={cn(
                        "text-xs px-2.5 py-1 rounded-md border font-mono",
                        styles.tag
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Princípio central */}
              <blockquote className="border-l-2 border-white/20 pl-4">
                <p className="text-sm italic text-white/40">
                  "A escolha da tecnologia não é sobre preferência — é sobre qual
                  ferramenta resolve melhor o problema do cliente dentro das
                  restrições de tempo, escala e time."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
