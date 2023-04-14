// import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import Header from "./components/Header";
import Intro from "./components/Intro";
import ParticlesBg from "./components/ParticlesBg";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <div className="particles-wrap">
        <ParticlesBg />
        <Intro />
      </div>
      <Header />
      <About />
      <Projects />
    </div>
  );
}

export default App;
