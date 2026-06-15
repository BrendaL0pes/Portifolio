"use client";

// Coloque em: components/widgets/StatusWidget.tsx
// Uso no Hero ou Sobre Mim: <StatusWidget />

export function StatusWidget() {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
      {/* Bolinha verde pulsante */}
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
      </span>
      <span className="text-xs font-medium text-emerald-400 tracking-wide">
        Disponível para oportunidades
      </span>
    </div>
  );
}
