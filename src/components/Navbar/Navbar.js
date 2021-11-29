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
              <a className="nav-link " href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Service
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Protfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
            <button class="btn btn-outline-light nav-button ms-2" type="submit">
              Download Resume
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
