"use client";
import React, { useEffect, useState } from "react";

interface TypewriterProps {
  texts: string[];      // Frases a serem escritas
  speed?: number;       // Velocidade de escrita (ms)
  deleteSpeed?: number; // Velocidade ao apagar (ms)
  delay?: number;       // Pausa entre frases (ms)
}

const Typewriter: React.FC<TypewriterProps> = ({
  texts,
  speed = 100,
  deleteSpeed = 60,
  delay = 1500,
}) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0); // frase actual
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index];
    
    const handler = setTimeout(() => {
      if (!isDeleting) {
        // Escrever
        setText(currentText.substring(0, text.length + 1));

        if (text.length + 1 === currentText.length) {
          // Pausa antes de apagar
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        // Apagar
        setText(currentText.substring(0, text.length - 1));

        if (text.length === 0) {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(handler);
  }, [text, isDeleting, index, texts, speed, deleteSpeed, delay]);

  return (
    <span>{text}|</span> // O "|" simula o cursor
  );
};

export default Typewriter;
