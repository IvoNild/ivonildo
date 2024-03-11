import { ModeToglle } from "./ModeToggle";

export function IntroSection() {
  return (
    <section id="intro" className="py-8 md:py-12 lg:py-40 relative ">
      <svg
        viewBox="0 0 1024 1024"
        className="absolute left-1/3 top-full md:left-1/4 md:top-1/2 -z-10 h-[16rem] w-[16rem] md:w-[54rem] md:h-[54rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        aria-hidden="true"
      >
        <circle
          cx="512"
          cy="512"
          r="512"
          fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
          fill-opacity="0.7"
        />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stopColor="#3B82F6" />
            <stop offset="1" stopColor="#E935C1" />
          </radialGradient>
        </defs>
      </svg>

      <main className="container flex flex-col items-center text-center max-w-[64rem] gap-6 ">
        <h1 className="text-4xl font-bold md:text-6xl lg:text-7xl relative">
          Olá, sou o <span className="text-primary"> Ivonildo</span>
          <span className="absolute -top-5 ">
            <ModeToglle />
          </span>
          <br />
          Desenvolvedor front-end
        </h1>

        <p className="text-muted-foreground max-w-[44rem] sm:text-xl sm:leading-8">
          Meu objetivo como desenvolvedor é criar experiências digitais
          envolventes que encantem e facilitem a vida dos usuários. Cada projeto
          é uma oportunidade de mergulhar na mente do usuário, entender suas
          necessidades e entregar soluções que superem suas expectativas.
        </p>

        <div className="space-x-4">
          <a
          target="_blank"
            href="/Ivo Da Silva PEDRO.pdf.pdf"
            className="bg-primary text-white transition-all ease-in rounded py-2 px-4 md:text-xl shadow-lg hover:shadow"
          >
            Baixar CV
          </a>
          <a
            href="#about"
            className=" bg-background transition-all ease-in px-4 py-2 md:text-xl rounded shadow-lg hover:bg-accent hover:text-accent-foreground hover:shadow"
          >
            Sobre mim
          </a>
        </div>
      </main>
    </section>
  );
}
