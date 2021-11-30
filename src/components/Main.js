import React from "react";
import About from "./About/About";
import Home from "./Home/Home";
import Projects from "./../Projects/Projects";
import Services from "./Services/Services";

const Main = () => {
  return (
    <div>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Services></Services>
    </div>
  );
};

export default Main;
