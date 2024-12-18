import { BrowserRouter } from "react-router-dom";

import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import StarsCanvas from "./components/canvas/Stars";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-backcolor">
        <Navbar />

        <Hero />

        <About />

        <Projects />

        <Experience />

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
