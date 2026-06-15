"use client";

// Coloque em: components/sections/HeroWidgetsRow.tsx
// Uso no Hero, logo abaixo do texto de apresentação: <HeroWidgetsRow />
//
// Layout Bento — 3 colunas no desktop:
//   [Status + GitHub dinâmico (col-span-2)] [Spotify embed (col-span-1)]

import { GitHubWidget } from "@/components/widgets/GitHubWidget";
import { SpotifyWidget } from "@/components/widgets/SpotifyWidget";
import { StatusWidget } from "@/components/widgets/StatusWidget";

// ── Substitua estes valores ──────────────────────────────────────────────────
const GITHUB_USERNAME = "brendamedeiros";
const SPOTIFY_PLAYLIST_ID = "SEU_PLAYLIST_ID_AQUI"; // ver instrução no SpotifyWidget
// ────────────────────────────────────────────────────────────────────────────

export function HeroWidgetsRow() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-8 w-full max-w-5xl mx-auto">

      {/* Card esquerdo — Status + GitHub */}
      <div className="md:col-span-2 rounded-2xl border border-white/10 bg-white/[0.03] p-5 flex flex-col gap-5">

        {/* Badge de disponibilidade */}
        <StatusWidget />

        {/* Linha divisória sutil */}
        <div className="w-full h-px bg-white/[0.07]" />

        {/* GitHub dinâmico */}
        <GitHubWidget username={GITHUB_USERNAME} maxRepos={4} />
      </div>

      {/* Card direito — Spotify */}
      <div className="md:col-span-1 rounded-2xl border border-white/10 bg-white/[0.03] p-5 flex flex-col">
        <SpotifyWidget
          playlistId={SPOTIFY_PLAYLIST_ID}
          label="Code & Bass"
        />

        {/* Texto contextual abaixo do player */}
        <p className="mt-3 text-[11px] text-white/25 leading-relaxed">
          Minha trilha sonora de foco enquanto codifico — o contrabaixo
          aparece quando a sessão é longa.
        </p>
      </div>
    </div>
  );
}
