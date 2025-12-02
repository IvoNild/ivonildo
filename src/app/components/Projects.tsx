"use client";

import { AiOutlineFileText } from "react-icons/ai";
import { FaFolder } from "react-icons/fa";
import Section from "./Section";
import colors from "../colors";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { projectsData, Category } from "../data/projects";
import { ProjectDetails } from "../types/ProjectDetails";

function ProjectCard({
  id,
  title,
  description,
  skills,
  fileUrl,
  img,
}: ProjectDetails) {
  return (
    <div
      style={{ borderColor: colors.border_color }}
      className="border rounded-lg pt-6 px-8 pb-8 mb-8 lg:mb-5 lg:max-w-[49%]"
    >
      <div className="w-full h-[200px]">
        <Image
          src={`/${img[0]}`}
          alt={title}
          width={300}
          height={200}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <h3 className="text-xl font-bold mt-6 mb-2 md:text-[25px]">
        {title}
      </h3>

      <p className="mb-4 text-[15px] md:text-[16px]">
        {description}
      </p>

      <ul className="flex flex-wrap gap-2 mt-5">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="bg-[#F2F2F2] px-4 py-1 rounded-4xl text-[13px] font-medium"
          >
            {skill}
          </li>
        ))}
      </ul>

      <div className="flex justify-between text-sm mt-10">
        <Link
          href={`/${id}`}
          target="_blank"
          className="flex items-center"
        >
          <AiOutlineFileText className="mr-2" size={16} />
          <span className="underline text-[15px]">Mais Detalhes</span>
        </Link>

        {fileUrl && (
          <Link
            href={fileUrl}
            target="_blank"
            className="flex items-center"
          >
            <FaFolder className="mr-2" size={16} />
            <span className="underline text-[15px]">Ver Projecto</span>
          </Link>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("Análise de Dados");

  return (
    <Section
      title="Projetos"
      description="
      Trabalhos práticos que refletem as minhas competências como Analista de Dados, UI Designer e Desenvolvedor Front-End. Cada projecto foi criado com foco em resolver problemas reais, unindo organização visual, experiência do utilizador e lógica de desenvolvimento."
    >
      <div className="flex flex-col w-full">

        {/* Menu de categorias */}
        <div className="w-max flex gap-4 mb-8 border-b border-black">
          {Object.keys(projectsData).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category as Category)}
              className={`px-4 py-2 cursor-pointer text-[12px] sm:text-[16px] ${activeCategory === category
                ? "font-bold border-b-2 border-black"
                : ""
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Lista de projectos da categoria activa */}
        <div className="flex flex-wrap gap-4">
          {projectsData[activeCategory].map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>

    </Section>
  );
}
