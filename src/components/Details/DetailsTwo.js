import React from "react";
import "./Details.css";
import twoone from "../../images/twoOne.png";
import twotwo from "../../images/twoTwo.png";
import twothree from "../../images/twoThree.png";
import twofour from "../../images/twoFour.png";
const DetailsTwo = () => {
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
                  <img src={twoone} class="d-block w-100" alt="..." />
                </div>

                <div className="carousel-item">
                  <img src={twotwo} class="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={twothree} class="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={twofour} class="d-block w-100" alt="..." />
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
            <h1 className="mb-2 card-title">Travelicious Tour Agency</h1>
            <h4 className="mt-3 mb-2 card-title fst-italic">Features</h4>
            <p className="card-text text-secondary">
              <i class="fas fa-arrow-circle-right me-1"></i> From website anyone
              can see our provided services.
              <br />
              <i class="fas fa-arrow-circle-right me-1"></i> By clicking book
              now button he/she will be able to confirm their booking.
              <br />
              <i class="fas fa-arrow-circle-right me-1"></i> Here there are
              three more facilities and they are Add Destination,Booking
              Placed,Manage Booking.
              <br />
              <i class="fas fa-arrow-circle-right me-1"></i> By using add
              destination section they will be able to add their desire
              destination service.
              <br />
              <i class="fas fa-arrow-circle-right me-1"></i> Booking placed
              section used for stored booking confirmed data.
              <br />
              <i class="fas fa-arrow-circle-right me-1"></i> Using Manage
              Booking we are able to see all our services and it provide delete
              facilities also.
            </p>
            <div className="mt-3 d-flex">
              <a
                href="https://github.com/SanjidaNowrin/travel-agent-client-website"
                className="btn btn-primary me-4"
              >
                <i class="fab fa-github me-2"></i>
                Github Client Link
              </a>
              <a
                href="https://github.com/SanjidaNowrin/travel-agent-server-website"
                className="btn btn-primary me-4"
              >
                <i class="fab fa-github me-2"></i>
                Github Server Link
              </a>

              <a
                href="https://travel-agent-d7a62.web.app/"
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

export default DetailsTwo;
