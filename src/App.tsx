import React from "react";
import Header from "./components/Header.tsx";
import Home from "./sections/Home.tsx";
import AboutMe from "./sections/AboutMe.tsx";
import Projects from "./sections/Projects.tsx";
import Blog from "./sections/Blog.tsx";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <AboutMe />
      <Projects />
      <Blog />
    </div>
  );
}

export default App;
