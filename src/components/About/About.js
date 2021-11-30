import React from "react";
import "./About.css";
import Fade from "react-reveal/Fade";
import me from "../../images/girl.png";
const About = () => {
  return (
    <div id="aboutsection">
      <section id="about">
        <div class="container">
          <div className="m-0 mb-5 row align-items-center gy-5 gx-5">
            <div className="col-md-6">
              <Fade left>
                <h1 className="fst-italic" style={{ color: "#a67227" }}>
                  About <span className="fw-bolder">Me</span>
                </h1>
              </Fade>
              <Fade left>
                <p className="mt-4 text-secondary">
                  Hello, I am Sanjida, a fourth-year student of B.Sc in Computer
                  Science & Engineering. I am a Full Stack web developer,
                  experience with web applications and building websites. <br />
                  <br />
                  I am a pixel-perfect web designer and also an experienced and
                  expert in the web development section . Full and fresh hand
                  code is my power. Client satisfaction is my first priority.
                  <br /> <br />I have extensive experience in HTML, CSS,
                  JAVASCRIPT, and various open-source frameworks such as Node
                  Js, MongoDB. I am trying to gain confidence using my potential
                  in the field of “Web Development”.
                </p>
              </Fade>

              <ul class="about-link">
                <Fade left>
                  <li>
                    <a href="https://github.com/SanjidaNowrin">
                      <i class="fab fa-github"></i>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.linkedin.com/in/sanjida-nowrin-0967901b1/">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.facebook.com/sanjida.nowrin.90">
                      <i class="fab fa-facebook"></i>
                    </a>
                  </li>

                  <li>
                    <a href="https://www.youtube.com/channel/UCIJDwLY61kt0vsLm93nS6sQ">
                      <i class="fab fa-youtube"></i>
                    </a>
                  </li>
                </Fade>
              </ul>
            </div>
            <div className="col-md-6">
              <Fade right>
                <img
                  src={me}
                  alt=""
                  className="img-fluid me-5"
                  style={{ height: "600px", marginRight: "0px" }}
                />
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
