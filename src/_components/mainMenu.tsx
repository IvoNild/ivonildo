import { BookMarked, Contact, FileCode, Home, User } from "lucide-react";

export default function MainMenu() {
  return (
      <nav className="fixed bottom-5 left-0 right-0 mx-10  bg-primary">
        <ul className="flex">
          <li>
            <a href="#">
              <Home /> <span>Início</span>
            </a>
          </li>
          <li>
            <a href="#">
              <User /> <span>Sobre mim</span>
            </a>
          </li>
          <li>
            <a href="#">
              <BookMarked />
              <span>Pilha tecnológica</span>
            </a>
          </li>
          <li>
            <a href="#">
              <FileCode />
              <span>Projectos</span>
            </a>
          </li>
          <li>
            <a href="#">
              <Contact />
              <span>Projectos</span>
            </a>
          </li>
        </ul>
      </nav>
  );
}
