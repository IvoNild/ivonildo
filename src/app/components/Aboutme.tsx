import colors from "../colors";
import {
  FaFilePowerpoint,
  FaDatabase,
  // FaGithub,
  FaGitAlt,
  FaFigma,
  // FaPython,
  FaFileCode,
  FaFileInvoice,
  FaReact
} from "react-icons/fa";

import { TbBrandReactNative } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";



import { AiFillFileExcel } from "react-icons/ai";
import { IconType } from "react-icons";
import Link from "next/link";
import Typewriter from "./Typewriter";



interface IconListItemProps {
  icon: IconType | React.ComponentType<{ size?: number; color?: string }>;
  text: string;
  iconSize?: number;
  iconColor?: string;
  textClassName?: string;
  className?: string;
}

export function IconListItem({
  icon: Icon,
  text,
  iconSize = 16,
  iconColor = colors.primary,
  textClassName = "text-white font-bold text-[15px]",
  className = "flex gap-1 items-center",
}: IconListItemProps) {
  return (
    <li className={className}>
      <Icon size={iconSize} color={iconColor} />
      <span className={textClassName}>{text}</span>
    </li>
  );
}

export default function Aboutme() {
  return (
    <div className="text-center">
      <h2 className="text-[20px] text-white md:text-[30px]">
        Olá, sou o{" "}
        <span style={{ color: colors.primary }}>Ivo Da Silva Pedro</span>{" "}
      </h2>
      <h1 className="text-[30px] text-white md:text-[50px]">
        <Typewriter
          texts={[
            "Engenheiro Informático",
            "Analista De Dados",
            "Design de Interfaces"
          ]}
        />
      </h1>
      <ul className="px-5 py-1 flex gap-x-8 gap-y-2 flex-wrap justify-center">
        <IconListItem icon={FaFilePowerpoint} text="Power BI" />
        <IconListItem icon={FaDatabase} text="SQL" />
        <IconListItem icon={AiFillFileExcel} text="Excel" />

        <IconListItem icon={FaGitAlt} text="Git" />
        <IconListItem icon={FaFigma} text="Figma" />

        <IconListItem icon={FaReact} text="React JS" />
        <IconListItem icon={TbBrandReactNative} text="React Native" />
        <IconListItem icon={RiTailwindCssFill} text="TailwindCss" />

      </ul>

      <div className="w-full flex justify-center">
        <p className="text-white text-[14px] pt-8 px-10 md:max-w-[1000px] md:pt-5 md:text-[15px]">
          Sou Engenheiro Informático com uma trajectória que combina tecnologia, design e análise. Comecei no desenvolvimento front-end e na criação de interfaces, áreas que me ensinaram a pensar a experiência do utilizador, estruturar processos e transformar conceitos abstractos em produtos funcionais.
          Com o tempo, evoluí naturalmente para a Análise de Dados e Business Intelligence, onde encontrei a intersecção perfeita entre lógica, criatividade e impacto real. Hoje aplico competências técnicas e analíticas para transformar dados brutos em informação relevante — seja através de dashboards claros, modelos bem estruturados ou relatórios que apoiam decisões estratégicas.
          Trabalho com ferramentas como Power BI, SQL, Excel e Figma, aliando pensamento visual à interpretação rigorosa de dados. Acredito que uma boa análise não termina na métrica: ela começa na pergunta certa e concretiza-se na forma como os insights são comunicados.
        </p>
      </div>

      <div className="flex justify-center gap-6 mt-8 md:mt-6">
        <Link
          href={"#technologySkill"}
          className="flex gap-2 py-2 px-5 rounded-md items-center"
          style={{ background: colors.primary }}
        >
          <FaFileCode
            color={"#fff"}
            size={15}
            className="text-white text-4xl"
          />
          <h1 className="text-white font-bold text-[15px]">Habilidades</h1>
        </Link>

        <Link
          href={"#projects"}
          className="flex gap-2 py-2 px-5 rounded-md border border-white items-center"
        >
          <FaFileInvoice
            color={"#fff"}
            size={15}
            className="text-white text-4xl"
          />
          <h1 className="text-white font-bold text-[15px]">Projectos</h1>
        </Link>
      </div>

      <div className="h-[100px]" />
    </div>
  );
}
