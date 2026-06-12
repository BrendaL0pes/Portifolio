"use client";

// Coloque em: components/sections/PerformanceSection.tsx
// Uso no page.tsx: <PerformanceSection />
// Posicionar: logo após os Projetos em Destaque

// ─── Dados das ferramentas ───────────────────────────────────────────────────

const TOOLS = [
  {
    id: "k6",
    name: "Grafana k6",
    role: "Automação de carga",
    description:
      "Scripts em JavaScript integrados ao pipeline CI/CD. Testes de carga contínuos a cada deploy.",
    accent: "violet",
    dotColor: "#7C3AED",
  },
  {
    id: "jmeter",
    name: "Apache JMeter",
    role: "Estresse em ecossistema Java",
    description:
      "Simulação de usuários concorrentes em APIs Spring Boot. Identificação de gargalos antes da produção.",
    accent: "amber",
    dotColor: "#D97706",
  },
  {
    id: "gatling",
    name: "Gatling",
    role: "Alta concorrência",
    description:
      "Testes de concorrência extrema escritos em Scala. Relatórios HTML detalhados de latência e throughput.",
    accent: "teal",
    dotColor: "#0D9488",
  },
] as const;

// ─── Curva SVG simulando requisições/segundo ─────────────────────────────────
// Representa uma curva de carga: sobe, atinge pico, cai no ponto de ruptura
// e estabiliza após tuning — narrativa visual de "encontrei o gargalo e resolvi"

function LoadCurveChart() {
  // pontos da curva principal (req/s normalizado 0-100)
  const mainPath =
    "M 0 80 C 20 78, 40 70, 60 55 S 100 30, 120 22 S 160 14, 180 12 S 220 10, 240 11 S 270 18, 285 35 S 295 55, 300 65 S 305 75, 310 78 S 330 76, 350 74 S 390 72, 420 71";

  // linha de "SLA threshold"
  const threshold = 30;

  // pontos para o fill sob a curva
  const fillPath =
    mainPath + " L 420 100 L 0 100 Z";

  return (
    <div className="relative w-full" aria-label="Gráfico de curva de carga simulada">
      {/* Labels eixo Y */}
      <div className="absolute left-0 top-0 bottom-6 flex flex-col justify-between text-[10px] text-white/25 font-mono select-none">
        <span>alta</span>
        <span>média</span>
        <span>baixa</span>
      </div>

      <svg
        viewBox="0 0 440 110"
        className="w-full h-auto pl-8"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          {/* Gradient para o fill */}
          <linearGradient id="load-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* Grid lines horizontais */}
        {[20, 50, 80].map((y) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2="440"
            y2={y}
            stroke="white"
            strokeOpacity="0.05"
            strokeWidth="1"
          />
        ))}

        {/* Fill sob a curva */}
        <path d={fillPath} fill="url(#load-fill)" />

        {/* Linha de SLA threshold */}
        <line
          x1="0"
          y1={threshold}
          x2="440"
          y2={threshold}
          stroke="#EF4444"
          strokeOpacity="0.4"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        {/* Label threshold */}
        <text
          x="426"
          y={threshold - 3}
          fill="#EF4444"
          fillOpacity="0.5"
          fontSize="8"
          textAnchor="end"
          fontFamily="monospace"
        >
          SLA
        </text>

        {/* Curva principal */}
        <path
          d={mainPath}
          fill="none"
          stroke="#7C3AED"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Ponto de ruptura — destaque */}
        <circle cx="310" cy="78" r="4" fill="#EF4444" fillOpacity="0.8" />
        <circle cx="310" cy="78" r="8" fill="#EF4444" fillOpacity="0.15" />

        {/* Ponto de pico saudável */}
        <circle cx="240" cy="11" r="3" fill="#10B981" fillOpacity="0.9" />

        {/* Label pico */}
        <text
          x="244"
          y="8"
          fill="#10B981"
          fillOpacity="0.7"
          fontSize="7"
          fontFamily="monospace"
        >
          pico estável
        </text>

        {/* Label ruptura */}
        <text
          x="316"
          y="74"
          fill="#EF4444"
          fillOpacity="0.6"
          fontSize="7"
          fontFamily="monospace"
        >
          ruptura
        </text>

        {/* Eixo X */}
        <line
          x1="0"
          y1="100"
          x2="440"
          y2="100"
          stroke="white"
          strokeOpacity="0.1"
          strokeWidth="1"
        />
      </svg>

      {/* Label eixo X */}
      <div className="pl-8 flex justify-between text-[10px] text-white/25 font-mono select-none mt-1">
        <span>0s</span>
        <span>tempo →</span>
        <span>fim</span>
      </div>
    </div>
  );
}

// ─── Componente principal ────────────────────────────────────────────────────

export function PerformanceSection() {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Eyebrow */}
        <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-3">
          Performance & QA
        </p>

        {/* Headline */}
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-2 leading-snug">
          Garantindo resiliência
        </h2>
        <p className="text-sm text-white/50 mb-10 max-w-xl">
          Não presumo a performance do meu software — valido os limites dele.
          Testes de carga e estresse identificam gargalos antes de chegarem ao
          usuário final.
        </p>

        {/* Card Bento — 2 colunas no desktop */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden grid md:grid-cols-2">

          {/* Coluna esquerda — gráfico */}
          <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-white/10 flex flex-col gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-1">
                Curva de carga simulada
              </p>
              <p className="text-xs text-white/30">
                Requisições por segundo ao longo de um teste de estresse
              </p>
            </div>

            <LoadCurveChart />

            {/* Legenda */}
            <div className="flex flex-wrap gap-4 text-[10px] text-white/40 font-mono mt-1">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-0.5 bg-violet-500 inline-block rounded" />
                throughput
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-0.5 bg-red-500 opacity-50 inline-block rounded border-dashed" />
                limite SLA
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                pico estável
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-red-500 opacity-70 inline-block" />
                ponto de ruptura
              </span>
            </div>
          </div>

          {/* Coluna direita — ferramentas */}
          <div className="p-6 md:p-8 flex flex-col gap-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Ferramentas de teste
            </p>

            {TOOLS.map((tool) => (
              <div
                key={tool.id}
                className="flex items-start gap-4 group"
              >
                {/* Dot colorida */}
                <div className="mt-1 flex-shrink-0">
                  <span
                    className="w-2.5 h-2.5 rounded-full block mt-0.5"
                    style={{ backgroundColor: tool.dotColor }}
                  />
                </div>

                {/* Texto */}
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="text-sm font-semibold text-white">
                      {tool.name}
                    </span>
                    <span className="text-[10px] font-medium px-1.5 py-0.5 rounded border border-white/10 text-white/40 font-mono">
                      {tool.role}
                    </span>
                  </div>
                  <p className="text-xs text-white/50 leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Rodapé do card */}
            <div className="mt-auto pt-4 border-t border-white/10">
              <p className="text-xs text-white/30 leading-relaxed">
                Abordagem baseada no experimento crossover comparando JMeter,
                Gatling e k6 — escolha da ferramenta depende do ecossistema e
                do objetivo do teste.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
