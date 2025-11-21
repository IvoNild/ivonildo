import { projectsData } from "../data/projects";
import Image from "next/image";
import { FaArrowLeft, FaChartPie, FaFolder } from "react-icons/fa";
import Link from "next/link";
import colors from "../colors";
import Projects from "../components/Projects";

const allProjects = Object.values(projectsData).flat()

const Title = ({ title }: { title: string }) => {
  return (
    <h2 className="text-[18px] font-bold text-gray-900 mb-2 md:text-[20px]">
      {title}
    </h2>
  );
};

const Paragraph = ({ text }: { text: string }) => {
  return (
    <h2 className="text-gray-800 text-[14px] mt-3 mb-8 md:text-[16px]">
      {text}
    </h2>
  );
};

interface ParagraphData  {
  title: string;
  text: string;
}

function ParagraphsSection({ title, text }: ParagraphData) {
  return (
    <div className="">
      <Title title={title} />
      <Paragraph text={text} />
    </div>
  );
}

const List = ({ list }: { list: string[] }) => {
  return (
    <ul className="list-disc pl-5 space-y-2">
      {list.map((item, index) => (
        <li className="text-gray-800 text-[14px] md:text-[16px]" key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
};

interface Props {
  params: {
    id: string;
  };
}

export default function ProjectDetails({ params }: Props) {
  const projectId = parseInt(params.id);
  // const project = projectsData.find((p) => p.id === projectId);
  // const relatedProjects = projectsData
  //   .filter((p) => p.id !== projectId)
  //   .slice(0, 4);



  const project = allProjects.find((p) => p.id === projectId)
  // const relatedProjects = allProjects.filter((p) => p.id !== projectId).slice(0, 4)

  if (!project) {
    return (
      <div className="h-[100vh] w-full flex justify-center items-center">
        <div>
          <p className="text-4xl">Projeto não encontrado</p>
          <Link href="/#projects" className="text-blue-500 hover:underline">
            Voltar para projectos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-5">
      <div className="container max-w-[1000px] mx-auto py-4">
        <Link
          href="/#projects"
          className=" flex items-center text-gray-600 hover:text-gray-900 mb-6 w-[200px] pt-4"
        >
          <FaArrowLeft className="mr-2" />
          Voltar para projectos
        </Link>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative w-full aspect-video max-h-[500px]">
            <Image
              src={`/imgProjects/${project.img}`}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6 md:p-8">
            <h1 className="  text-[18px] font-bold text-gray-900 mb-2 md:text-[30px] lg:text-[36px]">
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-100 px-4 py-1 rounded-full text-[13px] font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>

            <Paragraph text={project.description} />
            {project.objectives && (
              <div className="mb-8">
                <Title title="Objectivos" />
                <List list={project.objectives} />
              </div>
            )}

            {project.technologies && (
              <div className="mb-8">
                <Title title="Ferramentas Utilizadas" />
                <List list={project.technologies} />
              </div>
            )}

            {project.paragraph && (
              <div className="mb-8">
                {project.paragraph.map((paragraph, index) => (
                  <ParagraphsSection
                    title={paragraph.title}
                    text={paragraph.text}
                    key={index}
                  />
                ))}
              </div>
            )}
            <span className="text-[14px] text-gray-800">{project.date}</span>
            <div className="h-[100px]" />
            <div className="flex flex-wrap gap-4">
              {project.fileUrl && (
                <Link
                  href={project.fileUrl}
                  className="flex gap-2 py-2 px-5 rounded-md items-center bg-gray-900 text-white hover:bg-gray-800 transition-colors"
                >
                  <FaFolder
                    color={"#fff"}
                    size={15}
                    className="text-white text-4xl"
                  />
                  <h1 className="text-white font-bold text-[15px]">
                    Ver Arquivo
                  </h1>
                </Link>
              )}

              <Link
                href={"#technologySkill"}
                className="flex gap-2 py-2 px-5 rounded-md items-center"
                style={{ background: colors.primary }}
              >
                <FaChartPie
                  color={"#fff"}
                  size={15}
                  className="text-white text-4xl"
                />
                <h1 className="text-white font-bold text-[15px]">
                  Ver Projecto Online
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <Projects/>
      </div>
    </div>
  );
}
