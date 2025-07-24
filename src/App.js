import "./App.css";
// import background from "./assets/backend-565fc01f.png";
// import creator from "./assets/creator-dbbffaec.png";
// import defender from "./assets/defender-ccbf66b9.png";
// import herobg from "./assets/herobg-ecbfddc8.png";
// import logo from "./assets/akLogo.svg";
// import mobile from "./assets/mobile-896ef2f5.png";

// import tailwind from "./assets/tailwind-6ece120d.png";
// import upcric from "./assets/upcric-2d1f9406.png";
// import web from "./assets/web-0d05165f.png";
// import bootstrap from "./assets/bootstrap.png";
// import native from "./assets/native.png";
// import typescript from "./assets/typescript.png";

import Eduction from "./component/Education";
import About from "./component/About";
import Header from "./component/Header";
import Experience from "./component/Experience";
import Contact from "./component/Contact";
import Project from "./component/Project";
import { useEffect } from "react";

function App() {
  
  return (
    <div className="realative z-0 bg-primary">
      <Header />
      <section className="sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
        <About />
        <Eduction />
      </section>
      <Experience />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
