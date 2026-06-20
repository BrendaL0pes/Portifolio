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
      status: "● Pronta para o próximo desafio!",
      greeting: "Olá, me chamo",
      role: "Engenheira de Software",
      description: "Criando soluções de software de ponta a ponta através de práticas modernas de engenharia, sistemas de backend escaláveis e aplicações web responsivas.",
      contactBtn: "Entre em contato",
      projectsBtn: "Ver projetos",
    },
    // Widgets
    widgets: {
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
      modalLabels: {
        type: "TIPO",
        backend: "BACK-END",
        frontend: "FRONT-END",
        database: "BANCO DE DADOS",
        overview: "Visão geral",
        github: "GitHub",
        visitSite: "Acessar site",
      },
      items: {
        aiRequirements: {
          title: "AI Requirements Engineer",
          description: "Plataforma LLM para gerar épicos, user stories e critérios de aceitação automaticamente.",
          tags: ["LLM", "BACK-END", "AI"],
          type: "Aplicação Web / API",
          backend: "Java (Spring Boot)",
          frontend: "React / Next.js",
          database: "PostgreSQL",
          overview: "Uma plataforma focada em automatizar o processo de engenharia de requisitos utilizando Modelos de Linguagem de Larga Escala (LLM). O sistema recebe uma breve descrição da funcionalidade e gera automaticamente Épicos, User Stories e Critérios de Aceitação detalhados, poupando horas de trabalho manual de POs e analistas.",
        },
        knowledgeBase: {
          title: "Knowledge Base AI Chat",
          description: "Sistema RAG que responde perguntas usando documentação carregada pelo usuário.",
          tags: ["RAG", "VECTOR SEARCH", "AI"],
          type: "Assistente Inteligente",
          backend: "Python / Java",
          frontend: "Interface de Chat",
          database: "Vector Database",
          overview: "Implementação de Retrieval-Augmented Generation (RAG) que permite aos usuários interagir com uma base de conhecimento própria. O sistema indexa documentos PDF/TXT e responde de forma contextual, citando as fontes de onde extraiu as informações.",
        },
        gameUx: {
          title: "Gerador de Gráficos",
          description: "Plataforma para gerar gráficos a partir de inferência de lasers",
          tags: ["DATA VIZ", "FRONT-END"],
          type: "Ferramenta de Visualização",
          backend: "Node.js",
          frontend: "React / D3.js",
          database: "MongoDB",
          overview: "Ferramenta desenvolvida para processar dados brutos derivados de sistemas de inferência a laser e transformá-los em representações gráficas interativas. Facilita a visualização de anomalias e padrões comportamentais nos dados coletados.",
        },
      },
    },
    // QA
    qa: {
      label: "Performance & QA",
      tabs: {
        functional: "Testes Funcionais",
        performance: "Testes de Desempenho",
      },
      title: "Validando resiliência com dados reais",
      description: "Discuto performance com base em métricas. Utilizo testes de carga e estresse para entender o comportamento do software e encontrar gargalos antes do ambiente de produção.",
      legend: {
        throughput: "Vazão (Throughput)",
        sla: "Limite de SLA",
        breaking: "Ponto de Ruptura",
      },
      toolsPerformance: {
        k6: { name: "Grafana k6", role: "Automação JS · CI/CD pipeline" },
        jmeter: { name: "Apache JMeter", role: "Estresse · ecossistema Java" },
        gatling: { name: "Gatling", role: "Alta concorrência · Scala" },
        loadrunner: { name: "LoadRunner", role: "Testes corporativos · Protocolos complexos" },
      },
      toolsFunctional: {
        junit: { name: "JUnit", role: "Testes Unitários · Java", coverage: "Cobertura: 92%" },
        cucumber: { name: "Cucumber", role: "BDD · Especificações executáveis", scenarios: "Cenários: 24/24 Passaram" },
        selenium: { name: "Selenium", role: "Testes E2E · Automação UI" },
        postman: { name: "Postman / Newman", role: "Testes de Contrato · API" },
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
      madeWith: "Feito com <",
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
      status: "● Ready for the next project",
      greeting: "Hi, I am",
      role: "Software Engineer",
      description: "Building end-to-end software solutions through modern engineering practices, scalable backend systems, and responsive web applications.",
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
      modalLabels: {
        type: "TYPE",
        backend: "BACK-END",
        frontend: "FRONT-END",
        database: "DATABASE",
        overview: "Overview",
        github: "GitHub",
        visitSite: "Visit site",
      },
      items: {
        aiRequirements: {
          title: "AI Requirements Engineer",
          description: "LLM platform to automatically generate epics, user stories and acceptance criteria.",
          tags: ["LLM", "BACK-END", "AI"],
          type: "Web App / API",
          backend: "Java (Spring Boot)",
          frontend: "React / Next.js",
          database: "PostgreSQL",
          overview: "A platform focused on automating the requirements engineering process using Large Language Models (LLM). The system takes a brief description of a feature and automatically generates detailed Epics, User Stories, and Acceptance Criteria, saving hours of manual work for POs and analysts.",
        },
        knowledgeBase: {
          title: "Knowledge Base AI Chat",
          description: "RAG system that answers questions using documentation uploaded by the user.",
          tags: ["RAG", "VECTOR SEARCH", "AI"],
          type: "Smart Assistant",
          backend: "Python / Java",
          frontend: "Chat Interface",
          database: "Vector Database",
          overview: "A Retrieval-Augmented Generation (RAG) implementation that allows users to interact with their own knowledge base. The system indexes PDF/TXT documents and provides contextual answers, citing the sources from which it extracted the information.",
        },
        gameUx: {
          title: "Chart Generator",
          description: "Platform to generate charts from laser inference data",
          tags: ["DATA VIZ", "FRONT-END"],
          type: "Visualization Tool",
          backend: "Node.js",
          frontend: "React / D3.js",
          database: "MongoDB",
          overview: "A tool developed to process raw data derived from laser inference systems and transform it into interactive graphical representations. It makes it easier to visualize anomalies and behavioral patterns in the collected data.",
        },
      },
    },
    // QA
    qa: {
      label: "Performance & QA",
      tabs: {
        functional: "Functional Tests",
        performance: "Performance Tests",
      },
      title: "Validating resilience with real data",
      description: "I discuss performance based on metrics. I use load and stress testing to understand software behavior and identify bottlenecks before reaching production.",
      legend: {
        throughput: "Throughput",
        sla: "SLA Limit",
        breaking: "Breaking Point",
      },
      toolsPerformance: {
        k6: { name: "Grafana k6", role: "JS automation · CI/CD pipeline" },
        jmeter: { name: "Apache JMeter", role: "Stress · Java ecosystem" },
        gatling: { name: "Gatling", role: "High concurrency · Scala" },
        loadrunner: { name: "LoadRunner", role: "Enterprise testing · Complex protocols" },
      },
      toolsFunctional: {
        junit: { name: "JUnit", role: "Unit Testing · Java", coverage: "Coverage: 92%" },
        cucumber: { name: "Cucumber", role: "BDD · Executable specifications", scenarios: "Scenarios: 24/24 Passed" },
        selenium: { name: "Selenium", role: "E2E Testing · UI Automation" },
        postman: { name: "Postman / Newman", role: "Contract Testing · API" },
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
