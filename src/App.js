import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Projects from "./Projects/Projects";
import Services from "./components/Services/Services";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import Blog from "./components/Blog/Blog";
import DetailsThree from "./components/Details/DetailsThree";
import DetailsTwo from "./components/Details/DetailsTwo";
import DetailsOne from "./components/Details/DetailsOne";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Main></Main>
          </Route>
          <Route exact path="/main">
            <Main></Main>
          </Route>
          <Route exact path="/blog">
            <Blog></Blog>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/detail1">
            <DetailsThree></DetailsThree>
          </Route>
          <Route path="/detail2">
            <DetailsTwo></DetailsTwo>
          </Route>
          <Route path="/detail3">
            <DetailsOne></DetailsOne>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
