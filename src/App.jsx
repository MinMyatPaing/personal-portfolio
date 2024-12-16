import { BrowserRouter } from "react-router-dom";

import Navbar from "./sections/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </BrowserRouter>
  );
}

export default App;
