"use client";
import ParticlesWall from "@/componentes/wallpeaper.jsx/ParticlesWall";
import "./pages.css";
import Proyect from "@/componentes/Rick-and-Morty/pages";
import Pokemons from "@/componentes/Pokemons/pokemon";
import Vorttex from "@/componentes/vorttex/vorttex";
import React, { useEffect, useState } from "react";

const Home = () => {
  useEffect(() => {
    const initializeEmailInfo = () => {
      const emailIcon = document.getElementById("emailIcon");
      const emailInfo = document.createElement("div");

      // Agrega la información del correo electrónico
      emailInfo.innerHTML = "<p>Email: dami27cito@gmail.com</p>";
      emailInfo.className = "email-info";
      document.body.appendChild(emailInfo);

      const toggleEmailInfo = () => {
        emailInfo.style.display =
          emailInfo.style.display === "block" ? "none" : "block";
      };

      emailIcon.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        toggleEmailInfo();
      });

      // Cierra la ventana emergente al hacer clic en cualquier parte fuera de ella
      window.addEventListener("click", function (event) {
        if (event.target !== emailInfo && event.target !== emailIcon) {
          emailInfo.style.display = "none";
        }
      });
    };

    initializeEmailInfo();
  }, []);

  return (
    <>
      <ParticlesWall />
      <div className="container">
        <div className="header">
          <div className="h1">
            <h1>¡Hola, soy Damian Diaz! 👋</h1>
          </div>
          <img src="/dami.jpeg" alt="Damian Diaz" className="profile-image" />
        </div>
        <div className="h2">
          <h2>Desarrollador Full Stack 💻</h2>
        </div>
        <div className="simbolos">
          <a
            href="https://www.linkedin.com/in/damian-diaz-6a7537258/"
            target="_blank"
          >
            <img
              align="center"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
              alt="LinkedIn"
              height="30"
              width="40"
            />
          </a>
          <a href="https://github.com/diaz027" target="_blank">
            <img
              align="center"
              src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg"
              alt="GitHub"
              height="30"
              width="40"
            />
          </a>
          <a
            href="mailto:dami27cito@gmail.com"
            target="_blank"
            className="symbol"
            id="emailIcon"
          >
            <img
              align="center"
              src="https://cdn-icons-png.flaticon.com/128/2913/2913990.png"
              alt="Correo electrónico"
              height="30"
              width="40"
            />
          </a>
        </div>

        <br />
        <div className="descipcions">
          <p>
            Apasionado desarrollador Full Stack graduado de "Soy Henry",
            fascinado por la creatividad y la eficiencia en cada proyecto.
          </p>
          <p>
            Mi enfoque va más allá del código, construyo experiencias que
            inspiran y resuelven problemas de manera efectiva.
          </p>
        </div>
        <br />
        <div className="h3">
          <h2>Tecnologias: </h2>
        </div>
        <div className="conteinerT">
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
          <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
              alt="nextjs"
              width="40"
              height="40"
              className="dark-icon"
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
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt="react"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://reactnative.dev/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://reactnative.dev/img/header_logo.svg"
              alt="reactnative"
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
          <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
              alt="tailwind"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
        </div>
        <Proyect />
        <Pokemons />
        <Vorttex />
      </div>
    </>
  );
};
export default Home;
