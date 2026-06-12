# Portfolio Project

## About / Sobre

This repository contains a personal portfolio website built with Next.js and TypeScript. The project is located in the `portfolio-src` folder and uses modern React UI tooling and static export support.

Este repositório contém um site de portfólio pessoal construído com Next.js e TypeScript. O projeto está localizado na pasta `portfolio-src` e usa ferramentas modernas de UI React com suporte a exportação estática.

## Technologies / Tecnologias

- **Next.js 16**
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **pnpm**
- **Radix UI** for accessible UI components
- **Lucide React** for icons
- **Recharts** for charts and data visualization
- **Zod** for schema validation
- **React Hook Form** for form handling
- **Next Themes** for theme management
- **Shadcn UI** component utilities
- **Netlify** deployment support via `netlify.toml`

- **Radix UI** para componentes de UI acessíveis
- **Lucide React** para ícones
- **Recharts** para gráficos e visualização de dados
- **Zod** para validação de esquema
- **React Hook Form** para gerenciamento de formulários
- **Next Themes** para gerenciamento de tema
- **Shadcn UI** para utilitários de componentes
- **Netlify** para deploy com suporte via `netlify.toml`

## Project Structure / Estrutura do Projeto

- `portfolio-src/app` — application routes and pages
- `portfolio-src/components` — reusable components, including portfolio sections and UI primitives
- `portfolio-src/lib` — utilities, translation and language context
- `portfolio-src/public` — static assets and redirect configuration
- `portfolio-src/styles` — global styling files

- `portfolio-src/app` — rotas da aplicação e páginas
- `portfolio-src/components` — componentes reutilizáveis, incluindo seções do portfólio e primitivas de UI
- `portfolio-src/lib` — utilitários, tradução e contexto de idioma
- `portfolio-src/public` — ativos estáticos e configuração de redirecionamento
- `portfolio-src/styles` — arquivos de estilo globais

## Run Locally / Executar Localmente

```bash
cd portfolio-src
pnpm install
pnpm run dev
```

Then open `http://localhost:3000` in your browser.

Em seguida, abra `http://localhost:3000` no seu navegador.

## Build / Build

```bash
cd portfolio-src
pnpm run build
```

## Netlify Notes / Observações Netlify

The project includes a `portfolio-src/netlify.toml` file to support Netlify deployment. If Netlify does not automatically install dependencies, use an explicit build command such as:

```bash
pnpm install && pnpm run build
```

O projeto inclui um arquivo `portfolio-src/netlify.toml` para suportar o deploy no Netlify. Se o Netlify não instalar dependências automaticamente, use um comando de build explícito como:

```bash
pnpm install && pnpm run build
```
