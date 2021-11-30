import React from "react";
import "./Projects.css";
import Fade from "react-reveal/Fade";
import one from "../images/oneOne.png";
import two from "../images/twoOne.png";
import three from "../images/threeone.png";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <div id="projects">
      <Fade bottom cascade>
        <h1
          className="mb-5 text-center fst-italic"
          style={{ color: "#a67227" }}
        >
          My <span className="fw-bolder">Recent Projects</span>
        </h1>
      </Fade>
      <Fade bottom cascade>
        <div className="container">
          <div class="card mb-5 shadow p-3 mb-5 bg-body rounded">
            <img
              className="p-3 mx-auto w-50 img-fluid"
              src={one}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h2 className="card-title fw-bold text-dark">ALAMP</h2>
              <p className="card-text text-secondary ">
                ALAMP is a decorative lamp lights website.We believe in a world
                where you have total freedom to be you, without judgement. To
                experiment. To express yourself. To be brave and grab life as
                the extraordinary adventure it is. So we make sure everyone has
                an equal chance to discover all the amazing things they’re
                capable of – no matter who they are, where they’re from or what
                looks they like to boss.We exist to give you the confidence to
                be whoever you want to be.
              </p>
              <h4 className="text-dark">Technologies:</h4>
              <button
                type="button"
                className="m-1 btn btn-outline-secondary btn-sm"
              >
                React.js
              </button>
              <button
                type="button"
                className="m-1 btn btn-outline-secondary btn-sm"
              >
                MongoDB
              </button>
              <button
                type="button"
                className="m-1 btn btn-outline-secondary btn-sm"
              >
                Node.js
              </button>
              <button
                type="button"
                className="m-1 btn btn-outline-secondary btn-sm"
              >
                Bootstrap5
              </button>
              <button
                type="button"
                className="m-1 btn btn-outline-secondary btn-sm"
              >
                Firebase Authentication
              </button>
              <button
                type="button"
                className="m-1 btn btn-outline-secondary btn-sm"
              >
                Private route
              </button>
              <button
                type="button"
                className="m-1 btn btn-outline-secondary btn-sm"
              >
                Heroku
              </button>
              <p class="card-text">
                <Link to="/detail1" className="mt-3 btn btn-primary">
                  View Details
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="container">
          <div className="p-3 mb-5 rounded shadow card bg-body">
            <img
              className="p-3 mx-auto w-50 img-fluid"
              src={two}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h2 className="card-title fw-bold text-dark">
                Travelicious Tour Agency
              </h2>
              <p className="card-text text-secondary">
                Travelicious is a Tour Agency.This agency Offer A No-Quibble 14
                Day Money Back Guarantee On All Unredeemed Vouchers able to find
                A New Destination to visit their desire destination.It's
                thrilling, exhilarating and fun, fun, fun. So whether you're
                looking to dive right down into the hustle and bustle of the
                beating heart.
              </p>
              <h4 className="text-dark">Technologies:</h4>
              <button
                type="button"
                className="m-1 btn btn-outline-secondary btn-sm"
              >
                React.js
              </button>
              <button
                type="button"
                className="m-1 btn btn-outline-secondary btn-sm"
              >
                MongoDB
              </button>
              <button
                type="button"
                className="m-1 btn btn-outline-secondary btn-sm"
              >
                Node.js
              </button>
              <button
                type="button"
                className="m-1 btn btn-outline-secondary btn-sm"
              >
                Bootstrap5
              </button>
              <button
                type="button"
                className="m-1 btn btn-outline-secondary btn-sm"
              >
                Firebase Authentication
              </button>
              <button
                type="button"
                className="m-1 btn btn-outline-secondary btn-sm"
              >
                Private route
              </button>
              <button
                type="button"
                className="m-1 btn btn-outline-secondary btn-sm"
              >
                Heroku
              </button>

              <p className="card-text">
                <Link to="/detail2" className="mt-3 btn btn-primary">
                  View Details
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="container">
          <div className="p-3 mb-5 rounded shadow card bg-body">
            <img
              className="p-3 mx-auto w-50 img-fluid"
              src={three}
              class="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h2 className="card-title fw-bold text-dark">DENTISTRY CLINIC</h2>
              <p className="card-text text-secondary">
                We offer a wide-range of dental services at the General
                Clinic.You will be provided with a comprehensive treatment plan
                prior to the start of any dental services.We are offering
                specialized treatment by experienced doctor who have care about
                before and after the treatment.We have built our dentistry over
                the strong pillars of 22 MDS surgeons. Our team has expert
                professionals who are immensely experienced for several years.
              </p>
              <h4 className="text-dark">Technologies:</h4>
              <button
                type="button"
                className="m-1 btn btn-outline-secondary btn-sm"
              >
                React.js
              </button>
              <button
                type="button"
                className="m-1 btn btn-outline-secondary btn-sm"
              >
                HTML5
              </button>
              <button
                type="button"
                className="m-1 btn btn-outline-secondary btn-sm"
              >
                Node.js
              </button>
              <button
                type="button"
                className="m-1 btn btn-outline-secondary btn-sm"
              >
                Bootstrap5
              </button>
              <button
                type="button"
                className="m-1 btn btn-outline-secondary btn-sm"
              >
                Firebase Authentication
              </button>
              <button
                type="button"
                className="m-1 btn btn-outline-secondary btn-sm"
              >
                Private route
              </button>

              <p class="card-text">
                <Link to="/detail3" className="mt-3 btn btn-primary">
                  View Details
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Projects;
