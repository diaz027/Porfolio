import { Button } from "@nextui-org/button";
import "./pages.css";

export default function Home() {
  return (
    <>
      <h1>¡Hola, soy Damian Diaz! 👋</h1>
      <h2>Desarrollador Full Stack 💻</h2>
      <br />
      <p>
        Apasionado desarrollador Full Stack graduado de "Soy Henry", fusionando
        creatividad con eficiencia en cada proyecto.
      </p>
      <p>
        Mi enfoque va más allá del código, construyo experiencias que inspiran y
        resuelven problemas de manera efectiva.
      </p>
      <br />
      <div>
        <Button className="buttonme">Click me</Button>
      </div>
    </>
  );
}
