import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="aboutsection">
      <section id="about">
        <div class="container">
          <div class="row">
            <div class="col-md-5">
              <div class="about-img">
                {/* <img class="shape" src="about_tringle.png" alt="" />

                <img class="man" src="about_man.png" alt="" /> */}
              </div>
            </div>
            <br />
            <div class="col-md-7 about-right">
              <h2 class="color-3">
                <b>About Me</b>
              </h2>

              <p class="p-first text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eveniet nesciunt sint, esse iure eius voluptatibus perspiciatis
                sequi fuga magni perferendis beatae ratione, nam culpa veritatis
                dolore sunt ut minus qui Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Cum ea delectus doloremque adipisci autem
                deleniti non nostrum, suscipit soluta perferendis.
              </p>
              <p class="text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Dolores pariatur animi sunt, assumenda dicta distinctio nostrum
                nisi, ullam dignissimos dolor!
              </p>
              <h3 class="color-3 social-link-text">
                <button class="btn btn-danger">Hire Me</button>
              </h3>

              <ul class="about-link">
                <li>
                  <a href="">
                    <i class="fa fa-fonticons"></i>
                  </a>
                </li>

                <li>
                  <a href="">
                    <i class="fa fa-envira"></i>
                  </a>
                </li>

                <li>
                  <a href="">
                    <i class="fa fa-reddit-alien"></i>
                  </a>
                </li>

                <li>
                  <a href="">
                    <i class="fa fa-dribbble"></i>
                  </a>
                </li>

                <li>
                  <a href="">
                    <i class="fa fa-youtube-play"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
