import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Link as LinkIcon, Github } from "lucide-react";
import Link from "next/link";

import { URL } from "url";

type ProjectCardProps = {
  img: string;
  title: string;
  text: string;
  stacks: string[];
  projectType: "app" | "web";
  linkProject: URL;
  linkGitHub: URL;
};

const ProjectCardList: ProjectCardProps[] = [
  {
    img: "/FiberStarterFiles.png",
    title: "Fiber Starter Files",
    text: "Este é um simples projecto criado por hobbie, a fim de testar as minhas capacidades e meus aprendizados.",
    stacks: ["Html5", "Css3", "JavaScript"],
    projectType: "web",
    linkProject: new URL("https://fiber-started-files.vercel.app/"),
    linkGitHub: new URL("https://github.com/IvoNild/FiberStartedFiles"),
  },
  {
    img: "/edie.jpg",
    title: "Edie",
    text: "Este é um simples projecto criado por hobbie, a fim de testar as minhas capacidades e meus aprendizados.",
    stacks: ["Html5", "Css3", "JavaScript"],
    projectType: "web",
    linkProject: new URL("https://edie-eta.vercel.app/"),
    linkGitHub: new URL("https://github.com/IvoNild/Edie"),
  },
  {
    img: "/evoting.jpeg",
    title: "Evoting",
    text: "Este é um  projecto da faculdade, criado a fim de ser apresentado como trabalho da cadeira de Engenharia de software, um projecto que lna qual obtive 20 valores.",
    stacks: ["React Native", "Expo", "TypeScript"],
    projectType: "app",
    linkProject: new URL("https://ivonildo.vercel.app/"),
    linkGitHub: new URL("https://github.com/IvoNild/elections"),
  },
  {
    img: "/githubjobs.png",
    title: "Github Jobs",
    text: "Este é um simples projecto criado por hobbie, a fim de testar as minhas capacidades e meus aprendizados.",
    stacks: ["Html5", "Css3", "JavaScript"],
    projectType: "web",
    linkProject: new URL("https://github-jobs-ebon.vercel.app/"),
    linkGitHub: new URL("https://github.com/IvoNild/githubJobs"),
  },
];
const webProjects: ProjectCardProps[] = ProjectCardList.filter(
  (project) => project.projectType === "web"
);

const appProjects: ProjectCardProps[] = ProjectCardList.filter(
  (project) => project.projectType === "app"
);

export default function Projects() {
  return (
    <section
      id="projects"
      className="container space-y-8 py-8 md:py-12 lg:py-24"
    >
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl ">
          Projectos
        </h2>

        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Cada projeto reflete meu compromisso com a excelência técnica e a
          busca pela satisfação do usuário.
        </p>
      </div>

      <div className="mx-auto md:max-w-[64rem] ">
        <Tabs defaultValue="all" className="">
          <div className=" w-full flex justify-center mb-4">
            <TabsList className="">
              <TabsTrigger value="all">Todos</TabsTrigger>
              <TabsTrigger value="web">Web</TabsTrigger>
              <TabsTrigger value="app">App</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all">
            <div className="grid gap-4 sm:grid-cols-2  lg:grid-cols-3 ">
              {ProjectCardList.map((item, index) => (
                <ProjectCard
                  img={item.img}
                  title={item.title}
                  text={item.text}
                  stacks={item.stacks}
                  projectType={item.projectType}
                  linkProject={item.linkProject}
                  linkGitHub={item.linkGitHub}
                  key={index}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="web">
            <div className=" grid gap-4 sm:grid-cols-2  lg:grid-cols-3 ">
              {webProjects.map((item, index) => (
                <ProjectCard
                  img={item.img}
                  title={item.title}
                  text={item.text}
                  stacks={item.stacks}
                  projectType={item.projectType}
                  linkProject={item.linkProject}
                  linkGitHub={item.linkGitHub}
                  key={index}
                />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="app">
            <div className="grid gap-4 sm:grid-cols-2  lg:grid-cols-3 ">
              {appProjects.map((item, index) => (
                <ProjectCard
                  img={item.img}
                  title={item.title}
                  text={item.text}
                  stacks={item.stacks}
                  projectType={item.projectType}
                  linkProject={item.linkProject}
                  linkGitHub={item.linkGitHub}
                  key={index}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

function ProjectCard({
  img,
  title,
  text,
  projectType,
  linkProject,
  linkGitHub,
  stacks,
}: ProjectCardProps) {
  return (
    <div className="h-[400px] border rounded-sm ">
      <div className="h-[50%]  p-2">
        <Image
          src={img}
          alt={title}
          width={800}
          height={800}
          className="h-full object-cover object-top rounded-sm border"
        />
      </div>
      <div className="h-[50%] px-4 pb-3 flex flex-col justify-between">
        <div>
          <h2 className="mb-2 font-medium">{title}</h2>
          <p className="text-muted-foreground text-sm">{text}</p>
          <div className="mt-2 flex flex-wrap gap-1">
            {stacks.map((item, index) => (
              <span
                className="text border rounded-full py-1 px-2 text-xs"
                key={index}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-between">
          <Link
            target="_blank"
            href={linkProject}
            className="flex items-center text-xs underline gap-1"
          >
            <LinkIcon size={14} />
            {projectType === "web" ? (
              <span> Ver site</span>
            ) : (
              <span> Baixar app</span>
            )}
          </Link>

          <Link
            target="_blank"
            href={linkGitHub}
            className="flex items-center text-xs underline gap-1"
          >
            <Github size={14} />
            <span>Ver código</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
