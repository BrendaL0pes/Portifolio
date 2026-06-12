# Guia de integração — novas seções do portfólio

## Arquivos entregues

| Arquivo                  | Descrição                                                   |
|--------------------------|-------------------------------------------------------------|
| `StatusWidget.tsx`       | Bolinha verde pulsante de disponibilidade                   |
| `GitHubWidget.tsx`       | Lista de repos via API pública do GitHub                    |
| `SpotifyWidget.tsx`      | Player embed da sua playlist                                |
| `HeroWidgetsRow.tsx`     | Os 3 widgets montados em grid Bento (usa os 3 acima)        |
| `ArchitectureSection.tsx`| Seção com abas Java / Next.js / Flutter                     |
| `PerformanceSection.tsx` | Seção K6, JMeter, Gatling com gráfico SVG                   |

---

## Onde colocar cada arquivo

```
src/
  components/
    widgets/
      StatusWidget.tsx       ← copiar aqui
      GitHubWidget.tsx       ← copiar aqui
      SpotifyWidget.tsx      ← copiar aqui
    sections/
      HeroWidgetsRow.tsx     ← copiar aqui
      ArchitectureSection.tsx← copiar aqui
      PerformanceSection.tsx ← copiar aqui
  app/
    page.tsx                 ← ajustar a ordem abaixo
```

---

## Novo fluxo do page.tsx

```tsx
// app/page.tsx  (estrutura simplificada)

import { HeroWidgetsRow }      from "@/components/sections/HeroWidgetsRow";
import { ArchitectureSection } from "@/components/sections/ArchitectureSection";
import { PerformanceSection }  from "@/components/sections/PerformanceSection";

export default function Home() {
  return (
    <main>
      {/* 1 — Hero (seu componente atual) */}
      <HeroSection />

      {/* 2 — Widgets: Status + GitHub + Spotify */}
      <HeroWidgetsRow />

      {/* 3 — Skills & Tecnologias (seu componente atual) */}
      <SkillsSection />

      {/* 4 — NOVO: Arquitetura Contextual */}
      {/*     (substitui o "Mais sobre mim: Engineering") */}
      <ArchitectureSection />

      {/* 5 — Projetos em Destaque (seu componente atual) */}
      <ProjectsSection />

      {/* 6 — NOVO: Performance & QA */}
      <PerformanceSection />

      {/* 7 — Contato / Footer (seu componente atual) */}
      <ContactSection />
      <Footer />
    </main>
  );
}
```

> **Remova** o bloco `<section>` atual com título "Engineering" (Arquitetura em camadas,
> Design de APIs RESTful, etc.) — ele é substituído pelo `<ArchitectureSection />`.

---

## Configuração necessária antes de rodar

### 1. Playlist ID do Spotify

Abra sua playlist no Spotify → `...` → Compartilhar → Copiar link.
O link terá o formato:
```
https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M
```
Copie apenas o trecho depois de `/playlist/` e cole em `HeroWidgetsRow.tsx`:
```tsx
const SPOTIFY_PLAYLIST_ID = "37i9dQZF1DXcBWIGoYBM5M";
```

### 2. Username do GitHub

Já está como `"brendamedeiros"` — só mude se o username for diferente.

### 3. `cn()` utility

Os componentes usam `cn()` do shadcn. Se não estiver configurado:
```ts
// lib/utils.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```
Instale se necessário: `npm i clsx tailwind-merge`

---

## Dependências extras (todas opcionais — só se não tiver)

```bash
npm i lucide-react      # ícones no GitHubWidget (Star, GitFork, ExternalLink)
npm i clsx tailwind-merge  # cn() utility
```

O shadcn/ui já instala essas dependências por padrão.

---

## Nota sobre o Spotify embed e CSP

Se o seu `next.config.js` tiver `Content-Security-Policy`, adicione o domínio do
Spotify à lista de `frame-src`:

```js
// next.config.js
const ContentSecurityPolicy = `
  frame-src 'self' https://open.spotify.com;
`;
```

---

## Checklist de integração

- [ ] Copiei os 6 arquivos para as pastas corretas
- [ ] Substitui `SPOTIFY_PLAYLIST_ID` com o ID real
- [ ] Ajustei o `page.tsx` com o novo fluxo
- [ ] Removi o bloco antigo "Mais sobre mim: Engineering"
- [ ] Rodei `npm run dev` e conferi as 3 seções
- [ ] Testei em mobile (grid colapsa para 1 coluna)
