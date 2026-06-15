# Layout Update — Guia de Integração

## O que mudou

O layout foi alinhado com o protótipo HTML de referência.
As posições e proporções dos elementos foram preservadas; apenas o visual system (cores, tipografia) continua em Tailwind/shadcn.

---

## Arquivos entregues e onde colocar

```
output/
  page.tsx                                   → app/page.tsx
  components/
    portfolio/
      navbar.tsx                             → components/portfolio/navbar.tsx
      hero-card.tsx                          → components/portfolio/hero-card.tsx
      skills-card.tsx                        → components/portfolio/skills-card.tsx
      project-card.tsx                       → components/portfolio/project-card.tsx
      contact-card.tsx                       → components/portfolio/contact-card.tsx
    widgets/
      StatusWidget.tsx                       → components/widgets/StatusWidget.tsx
    sections/
      ArchitectureSection.tsx                → components/sections/ArchitectureSection.tsx
      ProjectsSection.tsx                    → components/sections/ProjectsSection.tsx
      PerformanceSection.tsx                 → components/sections/PerformanceSection.tsx
```

---

## O que cada arquivo mudou

### `navbar.tsx`
- Removido: pill arredondado, ícone Sparkles, botão CTA separado
- Agora: barra plana `h-12`, borda inferior sutil, logo à esq. (violet-400), links à dir. (text-white/40)

### `hero-card.tsx`
- Removido: hero de tela cheia com ProfileCard à direita, orbs decorativos
- Agora: duas colunas flex — texto+CTAs à esq., cards compactos (GitHub + Spotify) empilhados à dir.
- Importa `StatusWidget`, `GitHubWidget`, `SpotifyWidget` diretamente

### `StatusWidget.tsx`
- Aceita prop `className` para posicionamento externo
- Estilos ajustados para o pill compacto do HTML de referência

### `skills-card.tsx`
- Removido: seção com ícones grandes, gradient backgrounds
- Agora: grid 2×2 de cards compactos com título em uppercase + tags coloridas por categoria

### `ArchitectureSection.tsx`
- Estrutura preservada (abas + 2 colunas)
- Labels das abas atualizados para "Sistemas robustos / Web & UX / APIs & Mobile"
- Estilos de tab bar alinhados com o HTML (border-bottom, sem background ativo em card)

### `project-card.tsx`
- Removido: card alto com hover translate, botão "Ver projeto" oculto
- Agora: card compacto com ícone 32px, título, descrição curta, tags

### `ProjectsSection.tsx` *(novo)*
- Grid 3 colunas (`lg:grid-cols-3`) com os 3 projetos do portfólio

### `PerformanceSection.tsx`
- Estrutura preservada (split 2 colunas)
- Removidos: eyebrow + headline externos à esq. do card
- Agora: título e descrição dentro da coluna esquerda do card, como no HTML

### `contact-card.tsx`
- Removido: grid de 3 cards de contato, botão CTA separado
- Agora: seção centralizada com título, subtítulo e 3 botões inline (LinkedIn, GitHub, email)

### `page.tsx`
- Nova ordem de seções com divisores entre elas
- Remove: `HeroWidgetsRow` (os widgets passaram para dentro do `HeroCard`)
- Remove: `AboutCard`, `EngineeringCard` (substituídos pelo layout novo)

---

## Configuração necessária

```tsx
// hero-card.tsx — linha 7
const SPOTIFY_PLAYLIST_ID = "SEU_PLAYLIST_ID_AQUI"
// Substitua pelo ID real da sua playlist no Spotify
```

Fundo global no `layout.tsx` / `globals.css`:
```css
body { background-color: #0a0a0f; }
```
