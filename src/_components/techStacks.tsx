import Css3 from "@/_svgStack/css3";
import Html5 from "../_svgStack/html5";
import Nextjs from "@/_svgStack/nextjs";
import StyledComponent from "@/_svgStack/styled-component";
import JavaScript from "@/_svgStack/javaScript";
import Reactjs from "@/_svgStack/reactjs";
import TailwindCss from "@/_svgStack/tailwindcss";
import Expo from "@/_svgStack/expo";
import Git from "@/_svgStack/git";
import TypeScript from "@/_svgStack/typeScript";

import { ComponentType } from "react";

type techCardProps = {
  title: string;
  Icon: ComponentType;
  text: string;
};

const techList: techCardProps[] = [
  {
    title: "Html5",
    Icon: Html5,
    text: "Estruturação semântica de conteúdo da web .",
  },
  {
    title: "Css3",
    Icon: Css3,
    text: "Estilização e design, controle de layout e apresentação visual.",
  },
  {
    title: "JavaScript",
    Icon: JavaScript,
    text: "Interatividade, manipulação de eventos e comportamento do usuário.",
  },
  {
    title: "React",
    Icon: Reactjs,
    text: "Componentização e gerenciamento de estado eficiente.",
  },
  // {
  //   title: "Next.js",
  //   Icon: Nextjs,
  //   text: "Renderização server-side, roteamento e otimização de desempenho.",
  // },
  {
    title: "Tailwind Css",
    Icon: TailwindCss,
    text: "Estilização rápida e consistente com classes pré-definidas.",
  },
  {
    title: "React Native(Expo)",
    Icon: Expo,
    text: " Criação de aplicativos móveis multiplataforma, com interfaces nativas.",
  },
  {
    title: "Styled-components",
    Icon: StyledComponent,
    text: " CSS-in-JS para uma experiência de desenvolvimento simplificada.",
  },
  {
    title: "TypeScript",
    Icon: TypeScript,
    text: "Tipagem estática opcional, interfaces e tipos avançados.",
  },
  {
    title: "Git",
    Icon: Git,
    text: " Gerenciamento de código-fonte e colaboração em projetos.",
  },
];

function TechCard({ title, Icon, text }: techCardProps) {
  return (
    <div className="relative overflow-hidden rounded-lg border bg-background p-2">
      <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
        <Icon />
        <div className="space-y-2">
          <h3 className="font-bold">{title}</h3>
          <p className="text-sm text-muted-foreground">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section
      id="techStack"
      className="bg-slate-50 dark:bg-transparent container space-y-14 py-8 md:py-12 lg:py-24"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl ">
          Pilha tecnológica
        </h2>

        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Desenvolvo com paixão e expertise usando tecnologias como React.js,
          Next.js, React Native e Tailwind CSS. Estas ferramentas poderosas
          permitem criar aplicações web e mobile inovadoras, centradas no
          usuário e de alto desempenho.
        </p>
      </div>

      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2  md:max-w-[64rem] md:grid-cols-3">
        {techList.map((item, index) => (
          <TechCard
            title={item.title}
            Icon={item.Icon}
            text={item.text}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}
