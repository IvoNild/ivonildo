import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// import Facebook from "@/_svgSocialMideas/facebook";

function SocialLink({ icon: Icon, ...props }: any) {
  return (
    <Link className="" {...props}>
      <Icon className="h-6 w-6  text-muted-foreground hover:text-black  dark:hover:text-white transition" />
    </Link>
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className=" container max-w-[64rem] py-10  md:py-12 lg:py-24"
    >
      <div className="grid grid-cols-1  gap-y-16 lg:grid-cols-2 lg:gap-y-12 lg:grid-rows-[auto-1fr]">
        <div className="lg:pl-20 flex justify-center">
          <div className="max-w-xs px-2 lg:max-w-none">
            <Image
              src="/profile.jpg"
              alt="Ivo Pedro"
              width={800}
              height={800}
              quality="95"
              priority={true}
              className="aspect-square rotate-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 object-cover"
            />
          </div>
        </div>

        <div className="lg:order-first lg:row-span-2 text-center md:text-start">
          <h1 className="font-bold text-3xl text-center lg:text-left md:text-4xl lg:text-5xl">
            @Ivonildo
          </h1>
          <p className="mt-6 text-base text-center lg:text-left text-muted-foreground">
            Desenvolvedor apaixonado por criar experiências incríveis para a web
            e dispositivos móveis. Desde muito cedo, mergulhei no mundo do
            desenvolvimento, sendo autodidata e absorvendo conhecimento de forma
            constante. Atualmente, sou finalista do curso de Engenharia de
            Informática, onde tive a oportunidade de aprimorar minhas
            habilidades e explorar novas tecnologias. Com uma base sólida e uma
            mentalidade voltada para a aprendizagem contínua, estou sempre em
            busca de me manter atualizado com as últimas tendências e práticas
            da indústria. Além do desenvolvimento, também me dediquei ao estudo
            de UI/UX Design, o que me permite criar interfaces atraentes e
            experiências de usuário intuitivas. A combinação entre minha
            experiência em desenvolvimento e meu interesse por design me permite
            abordar projetos de forma holística, garantindo tanto a
            funcionalidade quanto a beleza em cada detalhe.
          </p>

          <div className="mt-6 flex justify-center gap-6 lg:justify-start">
            <SocialLink
              target="_blank"
              href="https://www.instagram.com/ivonildo_dasilva/"
              icon={Instagram}
            />
            <SocialLink
              target="_blank"
              href="https://github.com/IvoNild"
              icon={Github}
            />
            <SocialLink
              target="_blank"
              href="https://www.linkedin.com/in/ivo-da-silva-pedro-37026b217/"
              icon={Linkedin}
            />
            <SocialLink
              target="_blank"
              href="https://m.facebook.com/profile.php/?id=100005121480354"
              icon={Facebook}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
