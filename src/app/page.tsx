import Image from "next/image";

import { IntroSection } from "@/_components/introSection";
import AboutSection from "@/_components/aboutSection";

import TechStack from "@/_components/techStacks";
import Projects from "@/_components/projects";
import Contact from "@/_components/contactSection";
import Footer from "@/_components/footer";
import MainMenu from "@/_components/mainMenu";

export default function Home() {
  return (
    <div className="">
      <IntroSection />
      <AboutSection />´
      <TechStack />
      <Projects />
      <Contact />
    </div>
  );
}
