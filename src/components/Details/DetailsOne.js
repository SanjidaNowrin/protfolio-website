import React from "react";
import thirdone from "../../images/threeone.png";
import thirdtwo from "../../images/threetwo.png";
import threethree from "../../images/threethree.png";
import threefour from "../../images/threefour.png";
import "./Details.css";
const DetailsOne = () => {
  return (
    <div>
      <div className="mt-5 containner">
        <div className="border-0 card">
          <div className="w-75 card-img-top " style={{ margin: "0 auto" }}>
            <div
              id="carouselExampleControls"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={thirdone} class="d-block w-100" alt="..." />
                </div>

                <div className="carousel-item">
                  <img src={thirdtwo} class="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={threethree} class="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={threefour} class="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="mt-3 card-body" style={{ margin: "0 auto" }}>
            <h1 className="mb-2 card-title">DENTISTRY CLINIC</h1>
            <h4 className="mt-3 mb-2 card-title fst-italic">Features</h4>
            <p className="card-text text-secondary">
              <i class="fas fa-arrow-circle-right me-1"></i> Using this website
              anyone can easily know about our facilities.
              <br />
              <i class="fas fa-arrow-circle-right me-1"></i> We provide all
              dental related services.
              <br />
              <i class="fas fa-arrow-circle-right me-1"></i> If anyone want to
              see our detail services first he/she need to sign up then login
              their account otherwise they will not be able to see our detail
              service.
              <br />
              <i class="fas fa-arrow-circle-right me-1"></i> From about section
              anyone will be able know to about our clinic.
              <br />
              <i class="fas fa-arrow-circle-right me-1"></i> From dentist
              section any one will be able to know our specialized and
              experienced dentist.
              <br />
              <i class="fas fa-arrow-circle-right me-1"></i> Using logout button
              anyone will be able to left their account.
            </p>
            <div className="d-flex">
              <a
                href="https://github.com/SanjidaNowrin/dental-service-website"
                className="btn btn-primary me-4"
              >
                <i class="fab fa-github me-2"></i>
                Github Link
              </a>

              <a
                href="https://dental-service-3aa8e.web.app/"
                class="btn btn-primary me-4 "
              >
                <i class="fas fa-external-link-square-alt me-2"></i>
                Live Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsOne;
