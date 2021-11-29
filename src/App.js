import logo from "./images/logo.png";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>

      <Contact></Contact>
    </div>
  );
}

export default App;
