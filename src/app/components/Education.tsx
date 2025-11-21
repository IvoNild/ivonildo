import Link from "next/link";
import Section from "./Section";
import {
  FaBook,
  FaBookOpen,
  FaCheckSquare,
  FaFileDownload,
  FaUserGraduate,
} from "react-icons/fa";
import { IconType } from "react-icons";
import colors from "../colors";

interface EducationCardProps {
  status: "Finalista" | "Certificado" | "Em Curso" | "Concluído" | "Licenciado";
  institution: string;
  course: string;
  period: string;
  certification?: string;
  certificateUrl?: string;
  className?: string;
  icon?: IconType | React.ComponentType<{ size?: number; color?: string }>;
  iconSize?: number;
  iconColor?: string;
}

function EducationCard({
  icon: Icon = FaUserGraduate,
  iconColor = "#000",
  iconSize = 16,
  status,
  institution,
  course,
  period,
  certification = "Certificado",
  certificateUrl,
  className = "",
}: EducationCardProps) {
  return (
    <div
      style={{ borderColor: colors.border_color }}
      className={`border rounded-lg p-6 w-full mb-6 lg:mb-5 lg:max-w-[49%]  ${className}`}
    >
      <div className={`flex  py-1 text-[17px] items-center gap-1`}>
        <Icon size={iconSize} color={iconColor} />
        <span>{status}</span>
      </div>

      <h3 className="text-[16px] text-[#000] mb-1">{institution}</h3>
      <p className="text-[16px] font-bold text-[#000] mb-4">{course}</p>

      <div className="flex justify-between items-center  pt-4">
        <span className="text-black">{period}</span>

        {certificateUrl ? (
          <Link
            href={certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center rounded-md px-4 py-1 gap-2"
            style={{ background: colors.primary }}
          >
            <FaFileDownload size={14} color="#fff" />
            <span className="text-white">{certification}</span>
          </Link>
        ) : (
          <span className="font-medium">{certification}</span>
        )}
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <div
      style={{ background: colors.background }}
      className=" pt-[110px] pb-12 px-8"
    >
      <Section
        title="Formação"
        description="Formação académica focada em tecnologia e desenvolvimento, com base sólida em informática desde o ensino médio e aprofundamento contínuo em engenharia informática e sistemas de informação e áreas complementares como análise de dados e redes de computadores."
      >
        <EducationCard
          icon={FaCheckSquare}
          iconColor="#5FCF3D"
          status="Concluído"
          institution="ITEL - Instituto Nacional de Telecomunicações"
          course="Técnico Médio de Informática"
          period="2015-2017"
          certificateUrl="/docs/Certificado - Ensino Médio.pdf" // Para arquivos locais
        />

        <EducationCard
          icon={FaUserGraduate}
          status="Licenciado"
          institution="INSUTEC - Instituto Superior Politécnico de Ciências e Tecnologia"
          course="Eng. Informática e Sistemas de Informação"
          period="2019-2025"
          certificateUrl="/docs/Certificado_Ivo_Da_Silva_Pedro.pdf"
        />

        <EducationCard
          icon={FaBook}
          iconColor={colors.primary}
          status="Certificado"
          institution="Udemy"
          course="Power BI - Business Intelligence"
          period="2025"
          certificateUrl="/docs/Power BI - Business Intelligence for Beginners to Advance.pdf"
        />

        <EducationCard
          // icon={FaBookOpen}
          // iconColor="#CF863D"
          icon={FaBook}
          iconColor={colors.primary}
          status="Certificado"
          institution="CEFTITEL"
          course="CCNA 1 - Introdução às Redes"
          period="2025"
          certificateUrl="/docs/CCNA-_Introduction_to_Networks_certificate_ivodasilvapedro.pdf"
        />
      </Section>
    </div>
  );
}
