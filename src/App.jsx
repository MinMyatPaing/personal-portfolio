import { BrowserRouter } from "react-router-dom";

import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Hero />

      <div className="h-screen bg-backcolor" />
    </BrowserRouter>
  );
}

export default App;
