"use client"

import Section from "./Section";
import colors from "../colors";
import Image from "next/image";
import { useState } from "react";

interface SkillCardProps {
  title: string;
  description: string;
  skills: string[];
  img?: string;
  className?: string;
}

function SkillCard({
  title,
  description,
  skills,
  img,
  className = "",
}: SkillCardProps) {
  return (
    <div
      className={`bg-white rounded-lg py-[30px] px-[35px] border mb-8 lg:mb-5 lg:max-w-[49%] ${className}`}
      style={{ borderColor: colors.border_color }}
    >
      <div className="gap-3 mb-4 flex items-center">
        {img && (
          <div className="text-2xl w-[60px] h-[60px]">
            <Image
              src={`/images/${img}`}
              alt={title}
              width={60}
              height={60}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <h3 className="text-[18px] font-bold text-black mt-1">{title}</h3>
      </div>
      <p className="text-black mb-4 text-[15px] md:text-[16px]">{description}</p>
      <ul className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="bg-[#F2F2F2] px-4 py-1 rounded-4xl text-[13px] font-medium"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

type Category = "Analista de Dados" | "Front-End" | "UI Design";

export default function TechnologySkill() {
  const [activeCategory, setActiveCategory] = useState<Category>("Analista de Dados");

  const skillsData: Record<Category, SkillCardProps[]> = {
    "Analista de Dados": [
      {
        title: "Power BI",
        description:
          "Construção de dashboards interativos e dinâmicos, com domínio do processo de ETL utilizando Power Query, criação de medidas com DAX, e utilização de gráficos para traduzir dados em insights claros e accionáveis.",
        skills: ["Power Query", "ETL", "DAX"],
        img: "power_bi.jpeg",
      },
      {
        title: "Excel",
        description:
          "Criação de dashboards e relatórios avançados em Excel, com fórmulas, tabelas dinâmicas e gráficos para análise eficiente de dados.",
        skills: ["Fórmulas Avançadas", "Gráficos", "Tabelas Dinámicas"],
        img: "excel.png",
      },
      {
        title: "SQL",
        description:
          "Consultas relacionais, com uso de joins, filtros, subqueries e funções agregadas para manipulação e análise de dados. Capacidade de estruturar comandos SQL para extrair informações relevantes de bases de dados com eficiência.",
        skills: ["Joins", "Filtros", "Gráficos", "Tabela Dinâmica"],
        img: "sql.png",
      },
      {
        title: "VBA",
        description:
        "Automatização de tarefas em Excel e outras aplicações do Office, criação de macros e scripts para otimizar processos e análise de dados.",
        skills: ["Macros", "Automatização", "Scripts"],
        img: "vba.png",
      },
    ],
    "Front-End": [
      {
        title: "React.js",
        description:
          "Desenvolvimento de aplicações web interativas e responsivas com componentes reutilizáveis.",
        skills: ["JSX", "Hooks", "Componentes"],
        img: "react-js.png",

      },
      {
        title: "React Native",
        description: "Desenvolvimento de aplicações móveis nativas para Android e iOS utilizando componentes reutilizáveis, navegação optimizada e integração com APIs, garantindo interfaces rápidas, modernas e responsivas.",
        skills: ["JSX", "Hooks", "Componentes"],
        img: "react-native.png",

      },
      {
        title: "TailwindCSS",
        description:
          "Framework utilitário para estilização rápida e eficiente de interfaces web, permitindo construir layouts modernos e responsivos através de classes pré-definidas e uma estrutura altamente customizável.", skills: ["Layout Responsivo", "Classes Utilitárias", "Design System"],
        img: "tailwindcss.png",
      },
      {
        title: "NativeWind",
        description: "Estilização rápida e consistente em aplicações React Native utilizando a sintaxe do TailwindCSS, permitindo criar interfaces modernas com produtividade e organização.", skills: ["Classes utilitárias", "Layout responsivo", "Componentização"],
        img: "nativewind.png",
      },
      {
        title: "Bootstrap",
        description: "Criação de interfaces web responsivas utilizando o Bootstrap, com uso de componentes pré-construídos, grelha (grid system) e estilos que aceleram o desenvolvimento de layouts profissionais.",
        skills: ["Grid", "Componentes", "Responsividade"],
        img: "bootstrap.png",
      },
      {
        title: "Git",
        description:
          "Conhecimento em controlo de versões, organização de branches e histórico de desenvolvimento. Experiência em gerir projetos colaborativos.",
        skills: ["Versionamento", "Histórico", "Branches"],
        img: "git.png",
      },


    ],
    "UI Design": [
      {
        title: "Figma",
        description:
          "Criação de layouts e protótipos, focando na estética, organização e experiência do utilizador.",
        skills: ["Protótipos", "Componentes", "Auto Layout"],
        img: "figma.png",
      },
      {
        title: "Canva",
        description:
          "Criação de materiais visuais como banners, apresentações, thumbnails e grafismos complementares utilizados em projectos, garantindo consistência visual e comunicação clara.",
        skills: ["Design Visual Rápido", "Templates", "Material Gráfico"],
        img: "canva.png",
      },
    ],
  };

  return (
    <Section
      title="Tecnologias e Habilidades"
      description="Ao longo da minha formação e dos projectos que tenho desenvolvido, adquiri experiência prática em várias ferramentas e tecnologias que utilizo para construção de interfaces, desenvolvimento de aplicações, análise de dados e organização de código. Nesta secção apresento as principais tecnologias que tenho estudado e aplicado em projectos académicos, pessoais e profissionais."
    >
      {/* Menu de categorias */}
      <div className="flex gap-4 mb-8 border-b border-black">
        {Object.keys(skillsData).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category as Category)}
            className={`px-4 py-2 text-black cursor-pointer text-[12px] sm:text-[16px]  ${activeCategory === category
              && " font-bold border-b-2 border-black"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Cards da categoria ativa */}
      <div className="flex flex-wrap gap-4">
        {skillsData[activeCategory].map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </Section>
  );
}
