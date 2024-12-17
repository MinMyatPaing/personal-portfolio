import { BrowserRouter } from "react-router-dom";

import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-backcolor">
        <Navbar />

        <Hero />

        <About />
      </div>
    </BrowserRouter>
  );
}

export default App;
