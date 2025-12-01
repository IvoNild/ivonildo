import { ProjectDetails } from "../types/ProjectDetails";

export type Category = "Análise de Dados" | "Front-End" | "UI Design";

export const projectsData: Record<Category, ProjectDetails[]> = {
  "Análise de Dados": [
    {
      id: 2,
      img: ["img_rel_eleicoes/capa.png", "img_rel_eleicoes/pagina_inicial.png", "img_rel_eleicoes/Resultado_por_provincia.png", "img_rel_eleicoes/Participacao_Eleitoral.png", "img_rel_eleicoes/Insights.png", "img_rel_eleicoes/fontes.png", "img_rel_eleicoes/contexto_historico.png",],
      title: "Análise das Eleições gerais em Angola (1992–2012)",
      description:
        "Dashboard interativo que analisa a evolução das eleições gerais em Angola, cobrindo os anos de 1992, 2008 e 2012. O projecto reúne dados de participação eleitoral e distribuição de votos por província.",

      skills: ["Power BI", "ETL", "Excel", "Funções DAX"],

      fileUrl: "https://github.com/exemplo/eleicoes-angola-dashboard",

      objectives: [
        "Comparar a evolução dos resultados eleitorais entre 1992 e 2012.",
        "Analisar a participação eleitoral por província e nível de participação cívica da população.",
        "Identificar tendências de crescimento e abstenção ao longo dos anos.",
        "Criar um dashboard interactivo para facilitar a interpretação dos dados e apoie estudos."
      ],

      paragraph: [
        {
          title: "Metodologia e Tratamento dos Dados",
          text: `
Os dados foram recolhidos a partir de relatórios oficiais da CNE, INE e outras fontes públicas. 
Realizou-se um processo ETL no Excel e Power Query para organizar tabelas de: número de votantes, população, votos por partido, distribuição por província, género e idade.

Após a limpeza e transformação dos dados, foram criadas medidas em DAX para calcular indicadores como:
- taxa de participação eleitoral;
- taxa de abstenção;
- variação percentual entre eleições;
- média de votos por partido ao longo dos anos.

O objectivo foi garantir consistência estatística entre anos com diferentes estruturas populacionais e eleitorais.
`
        },
        {
          title: "Resultados e Insights",
          text: `
A análise revelou padrões importantes:

• **Participação eleitoral**: regista-se queda progressiva após 2008, com aumento significativo da abstenção em 2017 e 2022.  
• **Resultados por província**: Luanda e Huíla destacam-se pela maior variação entre partidos ao longo dos anos.  
• **Género e faixa etária**: observou-se maior participação feminina nas eleições mais recentes, enquanto jovens (18–25) apresentam menor taxa de adesão.  
• **Indicadores socioeconómicos**: províncias com maior PIB per capita mostram maior estabilidade no comportamento eleitoral; enquanto regiões com menor desenvolvimento apresentam maior oscilação de votos.  
• **Evolução histórica**: 1992 teve forte polarização, 2008 mostrou centralização, e 2017–2022 revelam redistribuição eleitoral com maior competitividade.

O dashboard permite explorar estes indicadores de forma dinâmica, facilitando tomadas de decisão e estudos académicos.
`
        }
      ],

      technologies: [
        "Power BI (dashboards, medidas em DAX, modelação de dados)",
        "Power Query (ETL e preparação dos dados)",
        "Excel (estruturação inicial e limpeza)",
        "Figma (protótipo da interface visual do dashboard)"
      ],

      date: "Actualizado em 15 de Novembro de 2025"
    },
    {
      id: 1,
      img: ["img_rel_financeiro/visao_geral.png"],
      title: "Dashboard Financeiro",
      description: "O dashboard é um Painel Financeiro que apresenta os principais Indicadores de Performance (KPIs) de um negócio ao longo de um ano.",
      skills: ["Power Bi", "Power Query", "ETL", "Funções DAX"],
      fileUrl: "https://github.com/exemplo/arquivo",
      objectives: [
        "Monitorizar a performance financeira anual da empresa",
        "Analisar a evolução mensal",
        "Identificar onde e como o dinheiro entra",
        "Avaliar custos e despesas ao longo do ano",
        "Medir a rentabilidade global e por mês",
        "Power Query (ETL e preparação dos dados)",

      ],
      paragraph: [
        {
          title: "Pesquisa Descritiva",
          text: `Contrary to popular belief, Lorem Ipsum is not simply random text...`,
        },
        {
          title: "Resultados e Insights",
          text: `Contrary to popular belief, Lorem Ipsum is not simply random text...`,
        },
      ],
      technologies: [
        "Power BI (dashboards, medidas, DAX, Power Query)",
        "Power Query (ETL e preparação dos dados)",
        "Figma (design do dashboard base)",
      ],
      date: "2 de Abril de 2025",
    },


  ],

  "Front-End": [
    {
      id: 3,
      img: ["capa.png"],
      title: "Loja Online",
      description:
        "Sistema completo de e-commerce com carrinho de compras, gestão de stock e integração com pagamentos online.",
      skills: ["React", "Node.js", "MongoDB"],
      fileUrl: "https://github.com/exemplo/chatbot",
      technologies: [
        "Power BI (dashboards, medidas, DAX, Power Query)",
        "Excel (tratamento inicial e estruturação de dados)",
        "SQL (extração e manipulação de dados)",
        "Figma (design do dashboard base)",
        "Python (opcional – análises adicionais ou automação)",
      ],
      paragraph: [
        {
          title: "Resultados e Insights",
          text: `Contrary to popular belief, Lorem Ipsum is not simply random text...`,
        },
      ],
      date: "2 de Abril de 2025",
    },

    {
      id: 4,
      img: ["dashboardFinanceiro.png"],
      title: "Chatbot com IA",
      description:
        "Criação de chatbot inteligente com NLP para atendimento automático de clientes em websites, com integração a CRMs.",
      skills: ["Python", "NLP", "Dialogflow"],
      fileUrl: "https://github.com/exemplo/chatbot",
      technologies: [
        "Power BI (dashboards, medidas, DAX, Power Query)",
        "Excel (tratamento inicial e estruturação de dados)",
        "SQL (extração e manipulação de dados)",
        "Figma (design do dashboard base)",
        "Python (opcional – análises adicionais ou automação)",
      ],
      paragraph: [
        {
          title: "Resultados e Insights",
          text: `Contrary to popular belief, Lorem Ipsum is not simply random text...`,
        },
      ],
      date: "2 de Abril de 2025",
    },
  ],

  "UI Design": [
    {
      id: 5,
      img: ["imgProjects/portifolio-design.png"],
      title: "Meu Portefólio",
      description:
        "Projecto de UI Design focado na criação do layout e identidade visual do meu portefólio profissional, garantindo uma experiência intuitiva, moderna e responsiva.",
      skills: ["UI Design", "Figma", "Prototipagem"],
      fileUrl: "https://www.figma.com/proto/7yVLKOgXmLD5dVLImEIMh4/Untitled?node-id=1-2&t=KH5jwQXXN3eIXYUf-1", // altera para o link verdadeiro
      technologies: [
        "Figma (estruturação de layouts, criação de componentes e protótipos)",
        "Design System (cores, tipografia, espaçamentos, componentes reutilizáveis)",
        "UX Research básica (benchmarking e análise de referências)",
        "Responsividade (versões mobile, tablet e desktop)"
      ],
      paragraph: [
        {
          title: "Processo de Criação",
          text: `O design do portefólio passou por um processo de pesquisa visual, definição de identidade, criação de wireframes e prototipagem de alta fidelidade. O objectivo foi construir uma interface limpa, profissional e focada na apresentação clara dos meus projectos.`
        }
      ],
      date: "2 de Abril de 2025"
    },
    {
      id: 6,
      img: ["imgProjects/farmApp-design.png"], // substitui pela imagem final do projecto
      title: "UI Design – Aplicação de Farmácia",
      description:
        "Design completo de uma aplicação móvel para pesquisa de farmácias, catálogos de produtos, encomendas, carrinho de compras, definição de localização e navegação intuitiva.",
      skills: ["UI Design", "Figma", "Design System", "Prototipagem"],
      fileUrl: "https://www.figma.com/design/1aLPTGwMRSn9B4FflUfa88/FarmApp--Copy-?m=auto&fuid=1103280906314068018", // coloca o link real para o Figma
      technologies: [
        "Figma (componentes, variantes e protótipos interativos)",
        "Design System (cores, tipografia, ícones e componentes reutilizáveis)",
        "UX Research (análise de apps semelhantes e fluxo de usabilidade)",
        "Mapas e navegação (ecrãs de localização dinâmica)",
        "Gestão de Produtos (catálogo, pesquisa, filtros e favoritos)"
      ],
      paragraph: [
        {
          title: "Processo de Criação",
          text: `O projecto começou com o mapeamento dos principais fluxos do utilizador: pesquisa de farmácias, consulta de produtos, gestão do carrinho e acompanhamento das encomendas. Foram criados wireframes de baixa fidelidade, posteriormente evoluídos para layouts de alta fidelidade em Figma, aplicando um design limpo, consistente e focado na facilidade de navegação.`
        },
        {
          title: "Componentização e Design System",
          text: `Foi desenvolvido um mini design system com botões, campos de pesquisa, cartões de produtos, cartões de farmácias, ícones, cabeçalhos, e elementos reutilizáveis para garantir consistência visual e acelerar a prototipagem.`
        },
        {
          title: "Resultados",
          text: `O resultado foi um interface moderna, clara e totalmente estruturada para permitir futura implementação em React Native ou outra stack mobile, garantindo uma experiência fluida desde o login até à finalização da encomenda.`
        }
      ],
      date: "15 de Março de 2025"
    },
    {
      id: 7,
      img: ["imgProjects/ITS-LAB-design.png"], // imagem de capa do projecto
      title: "Website Institucional – ITS-LAB",
      description:
        "Website informativo e institucional desenvolvido para a startup ITS-LAB, apresentando os seus serviços, projectos, parceiros, equipa e missão no sector tecnológico.",
      skills: ["UI Design", "Web Design", "Figma", "Design Responsivo"],
      fileUrl: "https://www.figma.com/design/8bDKSkwrO3Ycil99Kk7nc5/ITS---LAB?m=auto&fuid=1103280906314068018", // altera para o link correcto
      technologies: [
        "Figma (design do layout, prototipagem e organização visual)",
        "Design System (cores corporativas, componentes e tipografia)",
        "Arquitectura de Informação (estrutura das páginas)",
        "Responsividade (desktop, tablet e mobile)",
        "Branding (definição visual da identidade ITS-LAB)"
      ],
      paragraph: [
        {
          title: "Sobre o Projecto",
          text: `O objectivo do website foi criar uma presença online moderna e profissional para a ITS-LAB, destacando os seus serviços tecnológicos, portfolio de projectos, equipa e parceiros estratégicos. O design transmite confiança, inovação e clareza, alinhado com a visão da startup.`
        },
        {
          title: "Estrutura Principal",
          text: `O site inclui secções como: Página Inicial, Sobre Nós, Serviços, Projectos, Parceiros, Depoimentos, Equipa, Contactos e um blog informativo. Cada secção foi desenhada para ser objectiva e visualmente apelativa, facilitando a navegação do utilizador.`
        },
        {
          title: "Resultados",
          text: `O design resultou num website institucional robusto, limpo e facilmente escalável, permitindo à startup apresentar os seus serviços e reforçar a credibilidade no mercado tecnológico. O layout responsivo garante uma experiência consistente em qualquer dispositivo.`
        }
      ],
      date: "20 de Março de 2025"
    },

    {
      id: 8,
      img: ["imgProjects/belnd-design.png"],
      title: "Website de Envio Automático de Emails",
      description:
        "Plataforma web desenvolvida para automatizar envios de emails para clientes e parceiros, permitindo criar campanhas, gerir contactos e acompanhar métricas de entrega.",
      skills: ["UI Design", "Web Design", "Automação", "UX"],
      fileUrl: "https://www.figma.com/design/zTOiYoxYHKM3xNj2dgYytc/BlendEmail?node-id=0-1&p=f&t=JJlmqyonW01iUntn-0", // altera para o link real
      technologies: [
        "Figma (design de interfaces e prototipagem)",
        "Design System (componentes reutilizáveis e consistência visual)",
        "Arquitectura de Fluxos (gestão de campanhas, contactos e templates)",
        "Dashboards (estatísticas de entregas, aberturas e cliques)",
        "Formulários e listas (segmentação de contactos por grupos)"
      ],
      paragraph: [
        {
          title: "Sobre o Projecto",
          text: `O website foi criado para facilitar o envio automático de emails empresariais, permitindo que equipas de marketing e atendimento configurem campanhas, definam sequências automáticas e façam gestão de contactos de forma simples e centralizada.`
        },
        {
          title: "Funcionalidades Principais",
          text: `O sistema inclui criação de campanhas, editor de templates de email, gestão de listas de contactos, envio manual ou automático, segmentação por grupos, histórico de campanhas e um dashboard completo com métricas de desempenho.`
        },
        {
          title: "Resultados",
          text: `A plataforma oferece uma experiência intuitiva, moderna e preparada para escalar, permitindo que empresas comuniquem de forma eficiente com clientes, parceiros e leads. O design responsivo garante um uso fluido em computadores e dispositivos móveis.`
        }
      ],
      date: "28 de Março de 2025"
    }



  ],

};