"use client";

import Link from "next/link";
import { AiFillSnippets, AiOutlineMenu } from "react-icons/ai";
import { FaFileDownload, FaTimes } from "react-icons/fa";
import colors from "../colors";
import { useEffect, useState } from "react";

export default function Menu() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 550) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const textColorClass = scrolled ? "text-black" : "text-white";
  const iconColor = scrolled ? "#000" : "#fff";

  const menuBgClass = scrolled ? "md:border md:border-gray-300" : "";

  return (
    <>
      <div
        className={`${menuBgClass} bg-black flex justify-between w-full h-[60px] px-5 fixed md:justify-center md:w-[750px] md:h-[73px] md:top-7 md:left-1/2 md:transform md:-translate-x-1/2 md:rounded-[10px] md:bg-transparent md:backdrop-blur-[4px] lg:md:w-[800px]`}
      >
        <Link href={"#"} className="flex gap-2 items-center md:hidden">
          <AiFillSnippets color={colors.primary} size={25} />
          <h1 className="text-white font-bold text-[20px]">Portfólio</h1>
        </Link>

        <div className=" gap-2 p-4 text-white hidden items-center justify-center md:flex  md:justify-between md:p-0 md:w-full">
          <Link href={"#"} className="flex gap-2 p-4">
            <AiFillSnippets
              color={colors.primary}
              //   size={20}
              className="text-white text-[25px]"
            />
            <h1 className={`font-bold md:text-xl ${textColorClass}`}>
              Portfólio
            </h1>
          </Link>
          <div className={`flex gap-5 text-[16px] ${textColorClass}`}>
            <Link href={"#home"}>Início</Link>
            <Link href={"#technologySkill"}>Habilidades</Link>
            <Link href={"#education"}>Educação</Link>
            <Link href={"#projects"}>Projectos</Link>
            <Link href={"#contacts"}>Contactos</Link>
          </div>
          <Link
            href={"/docs/Ivo_Pedro_DA.pdf"}
            target="_blank"
            className="flex gap-2 p-4 items-center"
          >
            <FaFileDownload color={iconColor} size={16} />
            <h2 className={`font-medium md:text-md ${textColorClass} `}>
              Baixar CV
            </h2>
          </Link>
        </div>

        <button onClick={toggleMenu} className="md:hidden">
          {showMenu ? (
            <FaTimes size={25} color="#fff" />
          ) : (
            <AiOutlineMenu size={25} color="#fff" />
          )}
        </button>
      </div>

      {showMenu && (
        <div className="bg-black gap-5 flex flex-col items-center justify-center w-full h-[100vh] fixed mt-[60px] md:hidden">
          <Link
            href={"#home"}
            onClick={toggleMenu}
            className="text-white text-xl"
          >
            Início
          </Link>
          <Link
            href={"#technologySkill"}
            onClick={toggleMenu}
            className="text-white text-xl"
          >
            Habilidades
          </Link>
          <Link
            href={"#education"}
            onClick={toggleMenu}
            className="text-white text-xl"
          >
            Educação
          </Link>
          <Link
            href={"#projects"}
            onClick={toggleMenu}
            className="text-white text-xl"
          >
            Projectos
          </Link>
          <Link
            href={"#contacts"}
            onClick={toggleMenu}
            className="text-white text-xl"
          >
            Contactos
          </Link>
          <Link
            href={"#"}
            className="flex gap-2 py-3 px-5 rounded-md mt-6"
            style={{ background: colors.primary }}
          >
            <FaFileDownload
              color={"#fff"}
              size={18}
              className="text-white text-4xl"
            />
            <h1 className="text-white font-bold">Baixar CV</h1>
          </Link>
        </div>
      )}
    </>
  );
}
