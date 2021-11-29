import logo from "./images/logo.png";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Projects from "./Projects/Projects";
import Services from "./components/Services/Services";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Services></Services>
      <Contact></Contact>
    </div>
  );
}

export default App;
