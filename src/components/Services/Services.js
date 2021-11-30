import React from "react";
import "./Services.css";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
const Services = () => {
  return (
    <div id="services">
      <div className="container">
        <Zoom bottom cascade>
          <h1
            className="mt-5 mb-5 text-center fst-italic"
            style={{ color: "#a67227" }}
          >
            My <span className="fw-bolder">Services</span>
          </h1>
        </Zoom>
        <div className="row">
          <Fade bottom cascade>
            <div className="col-md-4">
              <div className="text-center card">
                <div className="card-body">
                  <i className="fas fa-code text-custom"></i>
                  <h5 className="mt-3 card-title fw-bold">WEB DEVELOPMENT</h5>
                  <p className="mt-3 card-text">
                    Qualified web design and attractive effects which catches
                    visitor’s Eye.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center card">
                <div className="card-body">
                  <i className="far fa-object-group text-custom"></i>
                  <h5 className="mt-3 card-title fw-bold">RESPONSIVE DESIGN</h5>
                  <p className="mt-3 card-text">
                    I can design a responsive website with clean and optimized
                    code.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-center card">
                <div className="card-body">
                  <i className="fas fa-desktop text-custom"></i>
                  <h5 className="mt-3 card-title fw-bold">WEB DESIGN</h5>
                  <p className="mt-3 card-text">
                    Qualified web design and attractive effects which catches
                    visitor’s Eye.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 col-md-4">
              <div className="text-center card">
                <div className="card-body">
                  <i className="fas fa-tools text-custom"></i>
                  <h5 className="mt-3 card-title fw-bold">BUGS FIXING</h5>
                  <p className="mt-3 card-text">
                    I am expert in fixing bugs. if your website have also
                    problem such like that you may knock me.​
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 col-md-4">
              <div className="text-center card">
                <div className="card-body">
                  <i className="fab fa-html5 text-custom"></i>
                  <h5 className="mt-3 card-title fw-bold">FIGMA TO HTML</h5>
                  <p className="mt-3 card-text">
                    I can covert figma file design to html with more css
                    framework,like Latest Bootstrap,Tailwind.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 col-md-4">
              <div className="text-center card">
                <div className="card-body">
                  <i className="fas fa-database text-custom"></i>
                  <h5 className="mt-3 card-title fw-bold">API DEVELOPMENT</h5>
                  <p className="mt-3 card-text">
                    Build more secure and fast API with node js and express js
                    for development backend.
                  </p>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Services;
