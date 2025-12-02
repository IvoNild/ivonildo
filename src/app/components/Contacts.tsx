import Link from "next/link";
import colors from "../colors";
import Section from "./Section";
import {
  FaEnvelope,
  FaLinkedin,
  FaWhatsapp,
  FaPhoneSquare,
} from "react-icons/fa";

const ContactCard = () => {
  const contacts = [
    {
      icon: <FaEnvelope className="text-[#707070] text-xl" />,
      title: "Email",
      subtitle: "Entre em contacto por email",
      content: "ivodasilvapedro@gmail.com",
      link: "mailto:ivodasilvapedro@gmail.com",
    },
    {
      icon: <FaLinkedin className="text-[#707070] text-xl" />,
      title: "LinkedIn",
      subtitle: "Veja o Meu Perfil Profissional",
      content: "linkedin.com/in/ivo-da-silva",
      link: "https://www.linkedin.com/in/ivo-da-silva-pedro-37026b217/",
    },
    {
      icon: <FaWhatsapp className="text-[#707070] text-xl" />,
      title: "WhatsApp",
      subtitle: "Converse comigo",
      content: "955612804",
      link: "https://wa.me/955612804",
    },
    {
      icon: <FaPhoneSquare className="text-[#707070] text-xl" />,
      title: "Telefone",
      subtitle: "Disponível para chamadas",
      content: "921220187",
      link: "tel:921220187",
    },
  ];

  return (
    <div className="w-full flex flex-wrap justify-between">
      {contacts.map((contact, index) => (
        <div
          style={{ borderColor: colors.border_color }}
          className="flex flex-col items-start space-x-4 w-full border rounded-md mb-6 p-5 md:mb-5 md:max-w-[49%] lg:max-w-[24%]"
          key={index}
        >
          <div
            style={{ borderColor: colors.border_color }}
            className="p-2 border rounded-md"
          >
            <div className="flex-shrink-0">{contact.icon}</div>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900 mt-3">
              {contact.title}
            </h3>
            <p className="text-sm text-gray-500">{contact.subtitle}</p>
            <div className="mt-2">
              <Link
                href={contact.link}
                target="_blank"
                className="text-sm font-semibold text-gray-700 underline"
              >
                {contact.content}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function Contacts() {
  return (
    <Section
      title="Contactos"
      description="Fico à disposição para colaborações, oportunidades profissionais ou troca de ideias. Não hesite em entrar em contacto comigo através das redes abaixo — será um prazer conversar contigo."
    >
      <ContactCard />
    </Section>
  );
}
