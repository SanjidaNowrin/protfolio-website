import React from "react";
import Typed from "react-typed";
import Particles from "react-particles-js";
import "./Home.css";
const Home = () => {
  return (
    <div className="header-wraper">
      {/* <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900,
              },
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00",
              },
            },
          },
        }}
      /> */}
      <div className="main-info">
        <h1>HI! I AM SANJIDA ISLAM NOWRIN</h1>
        <Typed
          className="typed-text"
          strings={[
            "Web Developer",
            "Web Designer",
            "React Developer",
            "Programmer",
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a
          href="https://drive.google.com/uc?export=download&id=1TcI-FPQVtvuJSCICM0T5Ufzc1kio6C8G"
          className="btn-main-offer"
        >
          DOWNLOAD RESUME
        </a>
      </div>
    </div>
  );
};

export default Home;
