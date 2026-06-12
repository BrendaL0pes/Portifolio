export const translations = {
  pt: {
    // Navbar
    nav: {
      home: "Início",
      about: "Sobre",
      projects: "Projetos",
      skills: "Skills",
      contact: "Contato",
    },
    // Hero
    hero: {
      status: "Disponível para oportunidades",
      greeting: "Olá, eu sou",
      role: "Software Engineer",
      description: "Construindo sistemas de backend inteligentes e ferramentas para desenvolvedores utilizando práticas modernas de engenharia de software",
      contactBtn: "Entre em contato",
    },
    // Profile Card
    profile: {
      available: "Disponível para oportunidades",
      projects: "Projetos",
      focus: "Foco",
      interest: "Interesse",
    },
    // About
    about: {
      title: "Sobre mim",
      description: "Estudante de Engenharia de Software apaixonada por construir sistemas inteligentes e ferramentas que resolvem problemas reais. Sempre buscando aprender novas tecnologias e criar soluções inovadoras.",
      interestsTitle: "Áreas de Interesse",
      interests: {
        software: "Engenharia de Software",
        intelligent: "Sistemas Inteligentes",
        games: "Tecnologias de Games",
        devtools: "Dev Tools",
      },
    },
    // Skills
    skills: {
      title: "Skills & Tecnologias",
      categories: {
        backend: "Backend",
        ai: "AI Integration",
        tools: "Ferramentas",
      },
    },
    // Projects
    projects: {
      title: "Projetos em Destaque",
      viewProject: "Ver projeto",
      items: {
        aiRequirements: {
          title: "AI Requirements Engineer",
          description: "Plataforma que utiliza LLMs para gerar e refinar requisitos de software como épicos, user stories e critérios de aceitação.",
        },
        knowledgeBase: {
          title: "Knowledge Base AI Chat",
          description: "Sistema baseado em RAG que responde perguntas utilizando documentação carregada pelo usuário.",
        },
        gameUx: {
          title: "Game UX Experiment Platform",
          description: "Sistema backend projetado para coletar dados de interação de jogadores e avaliar experimentos de experiência do usuário.",
        },
      },
    },
    // Engineering
    engineering: {
      title: "Engineering",
      sectionTitle: "Mais sobre mim",
      practices: [
        "Arquitetura em camadas (controller / service / repository)",
        "Design de APIs RESTful",
        "Autenticação com JWT",
        "Integração com serviços de IA",
        "Clean code e design modular",
      ],
    },
    // Contact
    contact: {
      title: "Vamos conversar?",
      description: "Quer conversar sobre um projeto, uma oportunidade ou apenas dizer olá? Estou sempre aberta para novas conexões e colaborações.",
      sendEmail: "Enviar email",
    },
    // Footer
    footer: {
      madeWith: "Feito com",
    },
  },
  en: {
    // Navbar
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    // Hero
    hero: {
      status: "Available for opportunities",
      greeting: "Hi, I'm",
      role: "Software Engineer",
      description: "Building intelligent backend systems and developer tools using modern software engineering practices",
      contactBtn: "Get in touch",
    },
    // Profile Card
    profile: {
      available: "Available for opportunities",
      projects: "Projects",
      focus: "Focus",
      interest: "Interest",
    },
    // About
    about: {
      title: "About me",
      description: "Software Engineering student passionate about building intelligent systems and tools that solve real problems. Always looking to learn new technologies and create innovative solutions.",
      interestsTitle: "Areas of Interest",
      interests: {
        software: "Software Engineering",
        intelligent: "Intelligent Systems",
        games: "Game Technologies",
        devtools: "Dev Tools",
      },
    },
    // Skills
    skills: {
      title: "Skills & Technologies",
      categories: {
        backend: "Backend",
        ai: "AI Integration",
        tools: "Tools",
      },
    },
    // Projects
    projects: {
      title: "Featured Projects",
      viewProject: "View project",
      items: {
        aiRequirements: {
          title: "AI Requirements Engineer",
          description: "Platform that uses LLMs to generate and refine software requirements such as epics, user stories, and acceptance criteria.",
        },
        knowledgeBase: {
          title: "Knowledge Base AI Chat",
          description: "RAG-based system that answers questions using documentation uploaded by the user.",
        },
        gameUx: {
          title: "Game UX Experiment Platform",
          description: "Backend system designed to collect player interaction data and evaluate user experience experiments.",
        },
      },
    },
    // Engineering
    engineering: {
      title: "Engineering",
      sectionTitle: "More about me",
      practices: [
        "Layered architecture (controller / service / repository)",
        "RESTful API design",
        "JWT authentication",
        "Integration with AI services",
        "Clean code and modular design",
      ],
    },
    // Contact
    contact: {
      title: "Let's talk?",
      description: "Want to discuss a project, an opportunity, or just say hello? I'm always open to new connections and collaborations.",
      sendEmail: "Send email",
    },
    // Footer
    footer: {
      madeWith: "Made with",
    },
  },
} as const

export type Language = keyof typeof translations
export type TranslationKey = typeof translations.pt
