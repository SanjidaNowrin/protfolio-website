import React from "react";
import "../Navbar/Navbar.css";
import logo from "../../images/logo.png";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} className="logo" alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="mb-2 navbar-nav ms-auto mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#aboutsection">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Protfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
            <a
              class="btn btn-outline-light nav-button ms-2 fw-bolder"
              type="submit"
              href="https://drive.google.com/uc?export=download&id=1TcI-FPQVtvuJSCICM0T5Ufzc1kio6C8G"
            >
              Download Resume
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
