export const translations = {
  pt: {
    // Navbar
    nav: {
      logo: "Brenda.dev",
      skills: "skills",
      architecture: "arquitetura",
      projects: "projetos",
      contact: "contato",
    },
    // Dividers
    dividers: {
      hero: "01 — hero & widgets",
      skills: "02 — arsenal técnico",
      architecture: "03 — arquitetura contextual",
      projects: "04 — projetos em destaque",
      qa: "05 — validação & qa",
      contact: "06 — contato",
    },
    // Hero
    hero: {
      status: "Disponível para oportunidades",
      greeting: "Oi, eu sou a",
      role: "Engenheira de Software",
      description: "Construindo soluções de software de ponta a ponta, combinando arquiteturas de backend estáveis com interfaces modernas e interativas.",
      contactBtn: "Entre em contato",
      projectsBtn: "Ver projetos",
    },
    // Widgets
    widgets: {
      githubLabel: "GitHub",
      githubUser: "@BrendaL0pes",
      repos: "repos",
      public: "públicos",
      languages: "linguagens",
      nowPlaying: "agora tocando",
      lastPlayed: "última tocada / playlist",
      trackName: "whats playing on my spotify",
      trackDesc: "my favorite songs right now",
    },
    // Skills
    skills: {
      label: "Skills & tecnologias",
      categories: {
        backend: "Backend",
        frontend: "Frontend",
        devops: "DevOps & ambiente",
        ai: "Integração com IA",
      },
    },
    // Architecture
    architecture: {
      label: "Arquitetura contextual",
      title: "O contexto dita a arquitetura",
      subtitle: "Não existe bala de prata. Cada stack resolve um problema específico.",
      tabs: {
        robust: "Sistemas robustos",
        web: "Web & UX",
        api: "APIs & Mobile",
      },
      whenToChoose: "quando escolher",
      idealContexts: "Contextos ideais",
      panels: {
        robust: {
          kicker: "ecossistema Java",
          heading: "Separar camadas protege o domínio",
          text: "Quando as regras de negócio são financeiras ou corporativas e erros custam caro, tendemos a separar bem as camadas e proteger o domínio. O stack costuma envolver Spring Boot, PostgreSQL e Docker — mas a arquitetura segue o problema, não o contrário.",
          contexts: ["Regras de negócio complexas", "Times maiores", "Alta carga", "Domínios financeiros"],
          stack: "Stack: Java · Spring Boot · PostgreSQL · Docker · JWT · Swagger",
        },
        web: {
          kicker: "ecossistema Next.js",
          heading: "Onde renderizar importa",
          text: "Quando a experiência do usuário é o produto, a escolha de onde renderizar importa. SSR, SSG ou Client Components — decidimos com base em SEO, performance e interatividade real, não por padrão.",
          contexts: ["SEO crítico", "Dashboards", "Landing pages", "UX-first"],
          stack: "Stack: Next.js · React · TypeScript · Tailwind · Cloudflare Pages",
        },
        api: {
          kicker: "APIs desacopladas",
          heading: "Um único backend, múltiplos clientes",
          text: "Quando o mesmo ecossistema precisa servir web, mobile e terceiros, desacoplar a API é quase sempre a decisão certa. O contrato é o que importa — a implementação se adapta.",
          contexts: ["Multi-plataforma", "Apps mobile", "Integrações", "Microserviços"],
          stack: "Stack: REST APIs · Flutter · Dart · Spring Boot · OpenAPI",
        },
      },
    },
    // Projects
    projects: {
      label: "Vitrine de projetos",
      title: "Projetos em destaque",
      items: {
        aiRequirements: {
          title: "AI Requirements Engineer",
          description: "Plataforma LLM para gerar épicos, user stories e critérios de aceitação automaticamente.",
        },
        knowledgeBase: {
          title: "Knowledge Base AI Chat",
          description: "Sistema RAG que responde perguntas usando documentação carregada pelo usuário.",
        },
        gameUx: {
          title: "Game UX Experiment Platform",
          description: "Backend para coletar dados de interação de jogadores e avaliar experimentos de UX.",
        },
      },
    },
    // QA
    qa: {
      label: "Performance & QA",
      title: "Validando resiliência com dados reais",
      description: "Discuto performance com base em métricas. Utilizo testes de carga e estresse para entender o comportamento do software e encontrar gargalos antes do ambiente de produção.",
      legend: {
        throughput: "Vazão (Throughput)",
        sla: "Limite de SLA",
        breaking: "Ponto de Ruptura",
      },
      tools: {
        k6: { name: "Grafana k6", role: "Automação JS · CI/CD pipeline" },
        jmeter: { name: "Apache JMeter", role: "Estresse · ecossistema Java" },
        gatling: { name: "Gatling", role: "Alta concorrência · Scala" },
        loadrunner: { name: "LoadRunner", role: "Testes corporativos · Protocolos complexos" },
      },
    },
    // Contact
    contact: {
      title: "Vamos conversar?",
      description: "Aberta a oportunidades de estágio, projetos e colaborações.",
      email: "brendamedeiroslopes1@gmail.com",
    },
    // Footer
    footer: {
      copyright: "© 2026 Brenda Medeiros Lopes · Next.js & Tailwind CSS",
      madeWith: "Feito com",
    },
  },
  en: {
    // Navbar
    nav: {
      logo: "Brenda.dev",
      skills: "skills",
      architecture: "architecture",
      projects: "projects",
      contact: "contact",
    },
    // Dividers
    dividers: {
      hero: "01 — hero & widgets",
      skills: "02 — technical arsenal",
      architecture: "03 — contextual architecture",
      projects: "04 — featured projects",
      qa: "05 — validation & qa",
      contact: "06 — contact",
    },
    // Hero
    hero: {
      status: "Available for opportunities",
      greeting: "Hi, I'm",
      role: "Software Engineer",
      description: "Building end-to-end software solutions, combining stable backend architectures with modern and interactive interfaces.",
      contactBtn: "Get in touch",
      projectsBtn: "View projects",
    },
    // Widgets
    widgets: {
      githubLabel: "GitHub",
      githubUser: "@brendamedeiros",
      repos: "repos",
      public: "public",
      languages: "languages",
      nowPlaying: "now playing",
      trackName: "Code & Bass",
      trackDesc: "original playlist · focus & bass",
    },
    // Skills
    skills: {
      label: "Skills & technologies",
      categories: {
        backend: "Backend",
        frontend: "Frontend",
        devops: "DevOps & environment",
        ai: "AI integration",
      },
    },
    // Architecture
    architecture: {
      label: "Contextual architecture",
      title: "Context dictates architecture",
      subtitle: "There is no silver bullet. Each stack solves a specific problem.",
      tabs: {
        robust: "Robust systems",
        web: "Web & UX",
        api: "APIs & Mobile",
      },
      whenToChoose: "when to choose",
      idealContexts: "Ideal contexts",
      panels: {
        robust: {
          kicker: "Java ecosystem",
          heading: "Separating layers protects the domain",
          text: "When business rules are financial or corporate and mistakes are costly, we tend to keep layers well-separated and protect the domain. The stack usually involves Spring Boot, PostgreSQL and Docker — but architecture follows the problem, not the other way around.",
          contexts: ["Complex business rules", "Larger teams", "High load", "Financial domains"],
          stack: "Stack: Java · Spring Boot · PostgreSQL · Docker · JWT · Swagger",
        },
        web: {
          kicker: "Next.js ecosystem",
          heading: "Where to render matters",
          text: "When user experience is the product, the choice of where to render matters. SSR, SSG or Client Components — we decide based on SEO, performance and real interactivity, not by default.",
          contexts: ["Critical SEO", "Dashboards", "Landing pages", "UX-first"],
          stack: "Stack: Next.js · React · TypeScript · Tailwind · Cloudflare Pages",
        },
        api: {
          kicker: "decoupled APIs",
          heading: "Decouple the API from the client",
          text: "When the same backend needs to serve web, mobile and third parties, decoupling the API from the client is almost always the right call. The contract is what matters — the implementation adapts.",
          contexts: ["Multi-platform", "Mobile apps", "Integrations", "Microservices"],
          stack: "Stack: REST APIs · Flutter · Dart · Spring Boot · OpenAPI",
        },
      },
    },
    // Projects
    projects: {
      label: "Project showcase",
      title: "Featured projects",
      items: {
        aiRequirements: {
          title: "AI Requirements Engineer",
          description: "LLM platform to automatically generate epics, user stories and acceptance criteria.",
        },
        knowledgeBase: {
          title: "Knowledge Base AI Chat",
          description: "RAG system that answers questions using documentation uploaded by the user.",
        },
        gameUx: {
          title: "Game UX Experiment Platform",
          description: "Backend to collect player interaction data and evaluate UX experiments.",
        },
      },
    },
    // QA
    qa: {
      label: "Performance & QA",
      title: "Validating resilience with real data",
      description: "I discuss performance based on metrics. I use load and stress testing to understand software behavior and identify bottlenecks before reaching production.",
      legend: {
        throughput: "Throughput",
        sla: "SLA Limit",
        breaking: "Breaking Point",
      },
      tools: {
        k6: { name: "Grafana k6", role: "JS automation · CI/CD pipeline" },
        jmeter: { name: "Apache JMeter", role: "Stress · Java ecosystem" },
        gatling: { name: "Gatling", role: "High concurrency · Scala" },
        loadrunner: { name: "LoadRunner", role: "Enterprise testing · Complex protocols" },
      },
    },
    // Contact
    contact: {
      title: "Let's talk?",
      description: "Open to internship opportunities, projects and collaborations.",
      email: "brendamedeiroslopes1@gmail.com",
    },
    // Footer
    footer: {
      copyright: "© 2026 Brenda Medeiros Lopes · Next.js & Tailwind CSS",
      madeWith: "Built with",
    },
  },
} as const

export type Language = keyof typeof translations
export type TranslationKey = typeof translations.pt
