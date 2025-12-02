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

      fileUrl: "https://app.powerbi.com/groups/me/reports/ff8108dd-6b4c-4a83-8752-6960f1cf8b6d/b19b5bbb490bc9575bd4?experience=power-bi&clientSideAuth=0",

      objectives: [
        "Comparar a evolução dos resultados eleitorais entre 1992 e 2012.",
        "Analisar a participação eleitoral por província e nível de participação cívica da população.",
        "Identificar tendências de crescimento e abstenção ao longo dos anos.",
        "Criar um dashboard interactivo para facilitar a interpretação dos dados e apoiar estudos."
      ],

      paragraph: [
        {
          title: "Metodologia e Tratamento dos Dados",
          text: `A análise foi desenvolvida a partir de dados oficiais disponibilizados pela Comissão Nacional Eleitoral (CNE) e pelo African Elections Database, abrangendo as eleições gerais de 1992, 2008 e 2012. Os conjuntos de dados incluíam: número de eleitores registados, votos válidos e inválidos, distribuição de votos por partido, resultados por província e participação eleitoral.`
        },

        {
          title: "",
          text: `Após a recolha, realizou-se um processo completo de ETL utilizando Excel e Power Query, onde foram executadas as seguintes etapas:`
        },

        {
          title: "",
          text: `--Normalização dos formatos de tabelas, garantindo uniformidade entre fontes diferentes e anos com estruturas distintas;`
        },

        {
          title: "",
          text: `--Tratamento de valores em falta, inconsistências numéricas e divergências entre totais declarados e totais calculados;`
        },

        {
          title: "",
          text: `--Integração das tabelas “Totais” e “Resultados por Província”, ajustando relacionamentos no modelo de dados do Power BI;
          `
        },

        {
          title: "",
          text: `--Padronização de nomes de províncias, partidos e chaves de ligação`
        },

        {
          title: "",
          text: `Após a limpeza e transformação, foram criadas no Power BI diversas medidas em DAX para suportar a análise estatística, entre elas:`
        },
        {
          title: "",
          text: `
          --Taxa de participação eleitoral por província e por ano;
          `
        },
        {
          title: "",
          text: `
--Taxa de abstenção, considerando a relação entre eleitores registados e votos expressos;
          `
        },
        {
          title: "",
          text: `
--Percentagem de votos por partido em cada província e no total nacional;
          `
        },
        {
          title: "",
          text: `
--Variação percentual dos resultados entre eleições;
          `
        },
        {
          title: "",
          text: `
--Cálculo do partido vencedor por província;
          `
        },

        {
          title: "",
          text: `--Consistência entre totais (votos por partido, válidos, inválidos e eleitorado).`
        },

        {
          title: "",
          text: `
          O objectivo principal foi garantir um modelo coerente, comparável entre os três ciclos eleitorais e apto para análises aprofundadas, independentemente das diferenças populacionais, administrativas e metodológicas entre eleições. O resultado final permitiu construir indicadores fiáveis, validar tendências eleitorais e apoiar interpretações fundamentadas no dashboard analítico
          `
        },



        {
          title: "Resultados e Insights",
          text: ``
        },

        {
          title: "Evolução da Competitividade Eleitoral",
          text: `Ao longo dos três ciclos eleitorais analisados (1992, 2008 e 2012), observam-se alterações relevantes na distribuição dos votos, no peso relativo dos partidos e na composição parlamentar, factores que permitem avaliar a competitividade do sistema político angolano:`
        },

        {
          title: "",
          text: `Observa-se que as eleições de 2008 apresentam a maior concentração de votos num único partido, com o MPLA a atingir 81,64% a nível nacional, ultrapassando significativamente os valores observados em 1992 e 2012. Este pico demonstra uma redução expressiva da competitividade interpartidária nesse ciclo eleitoral.`
        },


        {
          title: "",
          text: `O número de partidos com assentos parlamentares variou ao longo dos ciclos eleitorais, mantendo-se em quatro partidos tanto em 1992 como em 2008, mas reduzindo-se para apenas dois em 2012. Esta diminuição revela uma clara perda de diversidade política no parlamento, evidenciando uma maior concentração do poder legislativo nas duas principais forças partidárias.`
        },


        {
          title: "",
          text: `O MPLA manteve-se o partido mais votado a nível nacional nos três ciclos, obtendo 49,57% em 1992, 81,64% em 2008 e 71,85% em 2012. Em termos de assentos parlamentares, o MPLA também liderou consistentemente: 58 assentos em 1992, 84 assentos em 2008 e 81 assentos em 2012.
`
        },

        {
          title: "",
          text: `A UNITA permaneceu, em todos os ciclos, o segundo partido mais votado, ainda que com forte variação nos seus resultados. Em 1992 foi particularmente competitiva, vencendo em províncias como Bié (83,94%), Huambo (81,41%), Cuando Cubango (76,28%) e Benguela (59,79%). A partir de 2008 perdeu expressão comparativa, mas manteve-se como segunda força em votos e em assentos(1992 e 2012).`
        },

        {
          title: "",
          text: `O PRS destacou-se em 2008 ao tornar-se segundo partido com mais assentos parlamentares, apesar de não ser o segundo mais votado, mostrando particular concentração territorial do seu eleitorado.`
        },

        {
          title: "",
          text: `
Em 2012, a CASA-CE entrou no cenário político como novo actor relevante:
*Tornou-se a 3º força mais votada a nível nacional.* -
*Obteve o seu melhor desempenho em Cabinda, com 13,92%, revelando capacidade de captar votos sobretudo em centros urbanos específicos.*`
        },

        {
          title: "",
          text: `O MPLA dominou todas as províncias nas eleições de 2008 e 2012, com percentagens superiores a 60% em regiões estratégicas como Luanda, Benguela, Huíla e Cuanza Sul.`
        },

        {
          title: "",
          text: `A UNITA mostrou maior força territorial apenas em 1992, quando venceu várias províncias do Planalto Central.`
        },

        {
          title: "Participação Eleitoral - Principais Tendências",
          text: `Entre 1992 e 2012, Angola registou mudanças significativas na participação eleitoral, no comportamento dos eleitores e na dinâmica partidária: 
`
        },
        {
          title: "",
          text: `A participação Eleitoral diminuiu de 91,2% em 1992 para 87,4% em 2008 e 62,8% em 2012, o que pode indicar uma tendência de redução do interesse dos cidadãos em participar nas eleições, especialmente em 2012, onde a queda foi mais acentuada.
`
        },
        {
          title: "",
          text: `Apesar da queda na taxa de participação, o número total de eleitores registados aumentou consistentemente: de 4 milhões em 1992 para 8,3 milhões em 2008 e 9,8 milhões em 2012. Isto mostra que, apesar da diminuição proporcional da participação, a base eleitoral do país expandiu-se significativamente, refletindo crescimento populacional, maior capacidade administrativa de registo e maior inclusão eleitoral.
`
        },
        {
          title: "",
          text: `O número de partidos concorrentes apresentou uma variação significativa ao longo dos três ciclos eleitorais: foram 11 partidos em 1992, aumentaram para 14 em 2008 e reduziram-se para 9 em 2012. Esta oscilação evidencia que o sistema multipartidário esteve mais aberto e diversificado nas duas primeiras eleições, mas sofreu uma redução expressiva em 2012. Tal redução pode refletir processos de fusão de coligações, desaparecimento de formações menores, dificuldades de manutenção organizacional ou mesmo uma maior concentração do eleitorado nos partidos com maior estrutura nacional.
`
        },
        {
          title: "",
          text: `Em 2008, verificou-se uma das situações estatísticas mais relevantes: na província do Cuanza Norte, a CNE registou 141.537 eleitores inscritos, mas contabilizou 156.801 votos, resultando numa taxa de participação de 110,8%, ou seja, houve mais votos do que eleitores registados, o que constitui uma anomalia estatística grave. A CNE não apresentou explicação oficial para esta discrepância, o que levanta incoerências nos dados e fragiliza a fiabilidade do relatório oficial de 2008 nesta província.`
        },

      ],

      technologies: [
        "Power BI (dashboards, medidas em DAX, modelação de dados)",
        "Power Query (ETL e preparação dos dados)",
        "Excel (estruturação inicial e limpeza)",
        "Figma (protótipo da interface visual do dashboard)"
      ],

      date: "Actualizado em 1 de Dezembro de 2025"
    },
    {
      id: 1,
      img: ["img_rel_financeiro/capa.png", "img_rel_financeiro/visao_geral.png", "img_rel_financeiro/detalhamento.png", "img_rel_financeiro/insights.png",],
      title: "Dashboard Financeiro",
      description: "O dashboard é um Painel Financeiro que apresenta os principais Indicadores de Performance (KPIs) de um negócio ao longo dos anos (2017 - 2018).",
      skills: ["Power Bi", "Power Query", "ETL", "Funções DAX"],
      fileUrl: "https://github.com/exemplo/arquivo",
      objectives: [
        "Monitorizar a performance financeira anual da empresa",
        "Analisar a evolução mensal",
        "Identificar onde e como o dinheiro entra",
        "Avaliar custos e despesas ao longo do ano",
        "Medir a rentabilidade global e por mês",
      ],
      paragraph: [
        {
          title: "Resultados e Insights",
          text: ``,
        },
        {
          title: "Crescimento da Receita",
          text: `A receita apresenta um crescimento consistente ao longo do ano, com maior aceleração nos meses de outubro a dezembro. Este comportamento sugere um aumento da actividade comercial no último trimestre.`,
        },
        {
          title: "Concentração de Clientes",
          text: `A maior parte da receita é concentrada em poucos clientes. O Cliente 26 e o Cliente 9 representam juntos mais de 30% da receita anual, indicando dependência elevada destes clientes estratégicos.`,
        }, {
          title: "Sustentabilidade Operacional",
          text: `95% das receitas provêm de operações principais da empresa, demonstrando um modelo de negócio sólido e sustentável, com baixa dependência de fontes externas.`,
        }, {
          title: "Distribuição dos Custos",
          text: `Os custos são maioritariamente variáveis (71%), o que indica que os custos acompanham o nível de actividade. A gestão eficiente do volume de operações pode ter impacto directo no lucro.`,
        }, {
          title: "Meses Críticos",
          text: `Abril e Junho registam quedas acentuadas no lucro, resultando em valores negativos. Estes meses exigem investigação adicional para identificação das causas — seja baixa demanda, aumento pontual de custos, ou despesas extraordinárias.`,
        }, {
          title: "Recuperação nos Meses Finais",
          text: `A partir de Agosto observa-se uma melhoria contínua no lucro, culminando em fortes desempenhos nos meses de Outubro, Novembro e Dezembro. Isto reflecte maior eficiência operacional ou aumento significativo da receita no período.`,
        }, {
          title: "Rentabilidade Anual",
          text: `Apesar dos meses críticos, a empresa encerra o ano com lucro positivo de 3,94 M Kz, mostrando resiliência financeira e capacidade de recuperação.`,
        }, {
          title: "Oportunidade de Expansão",
          text: `A receita proveniente de pequenos clientes é baixa, criando oportunidade para projectar estratégias de expansão e diversificação da base de clientes.`,
        }, {
          title: "Custos Elevados VS Lucro Baixo",
          text: `A empresa gerou 44 M Kz, mas reteve apenas 3,94 M Kz de lucro (margem de 8,8%). Isto indica que a estrutura de custos e despesas consome cerca de 91% da receita, o que significa que a empresa lucra pouco em relação ao que fatura.`,
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
      img: ["imgProjects/portifolio-front-end-capa.png"],
      title: "Website Front-End — Portfólio Profissional",
      description:
        "Website moderno, rápido e responsivo desenvolvido para apresentar projectos, habilidades e experiência de forma clara e visualmente atractiva.",
      skills: ["React", "Next.js", "Tailwind CSS"],
      fileUrl: "https://ivonildo-silva.vercel.app/", // coloca o link real aqui
      technologies: [
        "React (componentização e performance)",
        "Next.js (optimização, imagens e routing)",
        "Tailwind CSS (design moderno e responsivo)",
        "Figma (UI design e prototipagem)"
      ],
      paragraph: [
        {
          title: "Sobre o Projecto",
          text: `Desenvolvi este website com foco na performance, acessibilidade e experiência do utilizador. A interface foi planeada para destacar projectos técnicos, estudos de caso e competências, com um layout limpo e profissional.`
        },
        {
          title: "",
          text: `
          O projecto resultou numa plataforma elegante e eficiente para apresentar o meu trabalho, reforçando a minha presença profissional online e demonstrando competências em desenvolvimento front-end moderno.
          `
        }
      ],
      date: "2 de Abril de 2025"
    },
  ],

  "UI Design": [
    {
      id: 5,
      img: ["imgProjects/portifolio-design.png"],
      title: "UI Design - Meu Portfólio",
      description:
        "Projecto de UI Design focado na criação do layout e identidade visual do meu portfólio profissional, garantindo uma experiência intuitiva, moderna e responsiva.",
      skills: ["UI Design", "Figma", "Prototipagem"],
      fileUrl: "https://www.figma.com/design/7yVLKOgXmLD5dVLImEIMh4/Untitled?node-id=1-2&p=f&t=o5xzUwhUxCHwoqjA-0", // altera para o link verdadeiro
      technologies: [
        "Figma (estruturação de layouts, criação de componentes e protótipos)",
        "Design System (cores, tipografia, espaçamentos, componentes reutilizáveis)",
        "UX Research básica (benchmarking e análise de referências)",
        "Responsividade (versões mobile, tablet e desktop)"
      ],
      paragraph: [
        {
          title: "Processo de Criação",
          text: `O design do portfólio passou por um processo de pesquisa visual, definição de identidade, criação de wireframes e prototipagem de alta fidelidade. O objectivo foi construir uma interface limpa, profissional e focada na apresentação clara dos meus projectos.`
        }
      ],
      date: "2 de Abril de 2025"
    },
    {
      id: 6,
      img: ["imgProjects/farmApp-design.png"], // substitui pela imagem final do projecto
      title: "UI Design – Aplicação de Farmácia",
      description:
        "Design completo de uma aplicação móvel para farmácias com funções de catálogos de produtos, encomendas, carrinho de compras, definição de localização e navegação intuitiva.",
      skills: ["UI Design", "Figma", "Design System", "Prototipagem"],
      fileUrl: "https://www.figma.com/design/1aLPTGwMRSn9B4FflUfa88/FarmApp--Copy-?node-id=1-2&p=f&t=QwfM0HHad4ZBriLu-0", // coloca o link real para o Figma
      technologies: [
        "Figma (componentes, variantes e protótipos interativos)",
        "Design System (cores, tipografia, ícones e componentes reutilizáveis)",
        "UX Research (análise de apps semelhantes e fluxo de usabilidade)",
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
          text: `O objectivo do website foi criar uma presença online moderna e profissional para a ITS-LAB, destacando os seus serviços tecnológicos, portfólio de projectos, equipa e parceiros estratégicos. O design transmite confiança, inovação e clareza, alinhado com a visão da startup.`
        },
        {
          title: "",
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
      title: "Protótipo UI de Sistema de Envio Automático de Emails",
      description:
        "Protótipo de interface desenvolvido no Figma para uma plataforma de envio automático de emails, incluindo gestão de campanhas, contactos e métricas de desempenho.",
      skills: ["UI Design", "UX Design", "Design System", "Prototipagem"],
      fileUrl: "https://www.figma.com/design/zTOiYoxYHKM3xNj2dgYytc/BlendEmail?node-id=0-1&p=f&t=JJlmqyonW01iUntn-0",
      technologies: [
        "Figma (design de interfaces e prototipagem)",
        "Design System (componentes reutilizáveis e consistência visual)",
        "Arquitectura de Fluxos (gestão de campanhas, contactos e templates)",
      ],
      paragraph: [
        {
          title: "Sobre o Projecto",
          text: `Este protótipo foi criado para representar a interface de uma plataforma de envio automático de emails empresariais, permitindo visualizar o fluxo de campanhas, sequências automáticas e gestão de contactos num ambiente organizado e intuitivo.`,
        },
        {
          title: "",
          text: `O protótipo inclui ecrãs de criação de campanhas, editor visual de templates, gestão de listas de contactos, envio manual ou automático, segmentação por grupos, histórico de envios e dashboard com métricas simuladas.`,
        },
        {
          title: "Resultados",
          text: `O design apresenta uma experiência moderna, intuitiva e escalável. A estrutura responsiva foi planejada para uso fluido, oferecendo clareza operacional para equipas de marketing e atendimento.`,
        },
      ],
      date: "28 de Março de 2025",
    }




  ],

};