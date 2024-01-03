"use client";
import "./pokemon.css";
import Image from "next/image";
import PokemonsCap1 from "./PokemonsCap1.png";
import PokemonsCap2 from "./PokemonsCap2.png";
import PokemonsCap3 from "./PokemonsCap3.png";
import PokemonsCap4 from "./PokemonsCap4.png";
import youtubeLogo from "./Logotipo-Youtube.png";
import { useEffect, useState } from "react";

const images = [PokemonsCap1, PokemonsCap2, PokemonsCap3, PokemonsCap4];

const Pokemons = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 2000); // Cambia la imagen cada 2 segundos
    return () => clearInterval(timer);
  }, [currentImageIndex]);

  return (
    <>
      <div className="title2">
        <h2> Pokemons app</h2>
      </div>

      <div className="text2">
        <p>
          Esta fue mi primera aplicación full-stack que logré desarrollar de
          manera independiente. Renderiza datos de Pokémon desde una API pública
          y ofrece diversas funcionalidades, como filtros, órdenes, y más, para
          buscar Pokémon específicos o de un mismo tipo. Además, incluye un
          juego interactivo donde los Pokémon pueden enfrentarse en peleas
        </p>
        <div className="conteinerT1">
          {" "}
          <a
            href="https://www.w3schools.com/css/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
              alt="css3"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://expressjs.com" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
              alt="express"
              width="40"
              height="40"
              className="dark-icon"
            />{" "}
          </a>{" "}
          <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
              alt="html5"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="javascript"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://nodejs.org" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
              alt="nodejs"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt="react"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://redux.js.org" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
              alt="redux"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://www.postgresql.org" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
              alt="postgresql"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://postman.com" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
              alt="postman"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
        </div>
      </div>
      <Image
        src={images[currentImageIndex]}
        className="img2"
        onMouseEnter={() => setShowLogo(true)}
        onMouseLeave={() => setShowLogo(false)}
      />
      {showLogo && (
        <a href="https://youtu.be/n9aIsmP7OJE" target="_blank" rel="noreferrer">
          <img src={youtubeLogo} alt="YouTube Logo" />
        </a>
      )}
    </>
  );
};
export default Pokemons;
