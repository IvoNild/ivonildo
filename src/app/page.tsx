import Aboutme from "./components/Aboutme";
import Contacts from "./components/Contacts";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Projects from "./components/Projects";
import TechnologySkill from "./components/TechnologySkill";
import { projectsData } from "./data/projects";

export default function Home() {
  return (
    <div>
      <div id="home" className="bg-black w-full h-auto">
        <Menu />
        <div className="pt-[60px]">
          <div className="mt-[50px] md:mt-[110px]">
            <Aboutme />
          </div>
        </div>
      </div>
      <div id="technologySkill" className="px-8 pt-[110px] pb-12">
        <TechnologySkill />
      </div>
      <div id="education" className="pb-12">
        <Education />
      </div>
      <div className="px-8">
        <div id="projects" className="pt-[110px] pb-12">
          <Projects />


        </div>
        <div id="contacts" className="pt-[110px] pb-12">
          <Contacts />
        </div>
      </div>
      <div className="h-[150px]" />
      <Footer />
    </div>
  );
}
