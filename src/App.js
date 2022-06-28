import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Work from "./Components/Work";
import Home from "./Components/Home";
import Skill from "./Components/Skill";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
