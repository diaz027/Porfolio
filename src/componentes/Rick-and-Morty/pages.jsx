"use client";
import "./proyect.css";
// import Image from "next/image";
// import rick1 from "./rick1.png";
// import rick2 from "./rick2.png";
// import rick3 from "./rick3.png";
// import rick4 from "./rick3.png";
// import rick5 from "./rick5.png";

// const Proyect = () => {
//   return (
//     <>
//       <div className="container2">
//         <div className="susTitle">
//           <h2>estos son mis proyecto recientes</h2>
//         </div>

//         <div className="title">
//           <h2> Rick and morty</h2>
//         </div>

//         <div className="espace">
//           <p>
//             Esta app marcó mi inicio en programación, brindándome práctica
//             inicial en codificación. Con una API pública, rendericé 800+
//             personajes de Rick & Morty, exploré, filtré y fortalecí habilidades
//             con Redux al enfrentar desafíos en servidor y cliente. Fundamental
//             para entender programación y desarrollo de apps interactivas.
//           </p>
//         </div>
//         <Image src={rick1} className="img1" />
//         <Image src={rick2} className="img1" />
//         <Image src={rick3} className="img1" />
//         <Image src={rick4} className="img1" />
//         <Image src={rick5} className="img1" />
//       </div>
//     </>
//   );
// };
import { useState, useEffect } from "react";
import Image from "next/image";
import rick1 from "./rick1.png";
import rick2 from "./rick2.png";
import rick3 from "./rick3.png";
import rick4 from "./rick4.png";
import rick5 from "./rick5.png";

const images = [rick1, rick2, rick3, rick4, rick5];

const Proyect = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 2000); // Cambia la imagen cada 2 segundos
    return () => clearInterval(timer);
  }, [currentImageIndex]);

  return (
    <>
      <div className="container2">
        <div className="susTitle">
          <h2>estos son mis proyecto recientes</h2>
        </div>

        <div className="title">
          <h2> Rick and morty</h2>
        </div>

        <div className="espace">
          <p>
            Esta app marcó mi inicio en programación, brindándome práctica
            inicial en codificación. Con una API pública, rendericé 800+
            personajes de Rick & Morty, exploré, filtré y fortalecí habilidades
            con Redux al enfrentar desafíos en servidor y cliente. Fundamental
            para entender programación y desarrollo de apps interactivas.
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
          </div>
        </div>
        <Image src={images[currentImageIndex]} className="img1" />
      </div>
    </>
  );
};
export default Proyect;
