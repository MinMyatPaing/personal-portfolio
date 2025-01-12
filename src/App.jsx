import { BrowserRouter } from "react-router-dom";

import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import StarsCanvas from "./components/canvas/Stars";
import Footer from "./sections/Footer";
import Skills from "./sections/Skills";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-backcolor">
        <Navbar />

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Experience />

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
