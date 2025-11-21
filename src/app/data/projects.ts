import { ProjectDetails } from "../types/ProjectDetails";

export type Category = "Análise de Dados" | "Front-End" | "UI Design";

export const projectsData: Record<Category, ProjectDetails[]> = {
  "Análise de Dados": [
    {
      id: 1,
      img: "capa.png",
      title: "Dashboard Financeiro",
      description:
        "Este projeto foi desenvolvido para fornecer insights financeiros através de visualizações interativas. Implementei processos ETL para limpeza de dados e criei métricas personalizadas usando DAX.",
      skills: ["Power Query", "ETL", "DAX"],
      fileUrl: "https://github.com/exemplo/arquivo",
      objectives: [
        "Compreender o comportamento de compra dos clientes",
        "Identificar os produtos mais vendidos",
        "Avaliar o desempenho por região/filial",
        "Prever tendências de vendas",
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
        "Excel (tratamento inicial e estruturação de dados)",
        "SQL (extração e manipulação de dados)",
        "Figma (design do dashboard base)",
        "Python (opcional – análises adicionais ou automação)",
      ],
      date: "2 de Abril de 2025",
    },
    {
      id: 2,
      img: "capa-eleicoes-angola.png",
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
    }

  ],

  "Front-End": [
    {
      id: 3,
      img: "capa.png",
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
      img: "dashboardFinanceiro.png",
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
      img: "dashboardFinanceiro.png",
      title: "Aplicativo de Tarefas",
      description:
        "Aplicação desenvolvida em React Native para gestão pessoal de tarefas, com sincronização em tempo real.",
      skills: ["React Native", "Firebase", "UX Design"],
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
          title: "Pesquisa Descritiva",
          text: `Contrary to popular belief, Lorem Ipsum is not simply random text...`,
        },
      ],
      date: "2 de Abril de 2025",
    },
    {
      id: 6,
      img: "dashboardFinanceiro.png",
      title: "Chatbot com IA",
      description:
        "Criação de chatbot inteligente com NLP para atendimento automático.",
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

};