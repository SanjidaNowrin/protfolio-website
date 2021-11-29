import React from "react";
import "./Services.css";
const Services = () => {
  return (
    <div id="services">
      <div className="container">
        <h1 className="text-center mb-5">My Services</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <i className="fas fa-code text-custom"></i>
                <h5 className="card-title fw-bold mt-3">WEB DEVELOPMENT</h5>
                <p className="card-text mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam, dolor?
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <i className="far fa-object-group text-custom"></i>
                <h5 className="card-title fw-bold mt-3">RESPONSIVE DESIGN</h5>
                <p className="card-text mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam, dolor?
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card text-center">
              <div className="card-body">
                <i className="fas fa-desktop text-custom"></i>
                <h5 className="card-title fw-bold mt-3">WEB DESIGN</h5>
                <p className="card-text mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam, dolor?
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <div className="card text-center">
              <div className="card-body">
                <i className="fas fa-tools text-custom"></i>
                <h5 className="card-title fw-bold mt-3">BUGS FIXING</h5>
                <p className="card-text mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam, dolor?
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <div className="card text-center">
              <div className="card-body">
                <i className="fab fa-html5 text-custom"></i>
                <h5 className="card-title fw-bold mt-3">PSD TO HTML</h5>
                <p className="card-text mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam, dolor?
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mt-4">
            <div className="card text-center">
              <div className="card-body">
                <i className="fas fa-database text-custom"></i>
                <h5 className="card-title fw-bold mt-3">API DEVELOPMENT</h5>
                <p className="card-text mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam, dolor?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
