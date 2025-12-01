"use client";

import Image from "next/image";
import { useState } from "react";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export default function ProjectImageCarousel({ images = string[""], title }) {
  const [index, setIndex] = useState(0);

  // Caso seja apenas 1 imagem
  if (!images || images.length <= 1) {
    return (
      <div className="relative w-full aspect-video max-h-[500px]">
        <Image
          src={`/${images[0]}`}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
    );
  }

  // Avançar
  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  // Recuar
  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full aspect-video max-h-[500px] overflow-hidden">
      {/* Imagem actual */}
      <Image
        src={`/${images[index]}`}
        alt={title}
        fill
        className="object-cover transition-all duration-300"
      />

      {/* Botão esquerdo */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full cursor-pointer"
      >
        <FaAngleLeft size={22} />
      </button>

      {/* Botão direito */}
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full cursor-pointer"
      >
        <FaAngleRight size={22} />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-white/40"
              }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
