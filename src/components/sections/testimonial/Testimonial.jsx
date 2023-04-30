import React from "react";
import "./style.css";

function Testimonial() {
  return (
    <div
      id="carouselExampleControls carousel"
      className="carousel slide text-center carousel-dark"
      data-mdb-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div class="talk-bubble tri-right border btm-right-in col-md-6">
            <div class="talktext ">
              <p>
                "TooWires gives me the flexibility to manage my business and
                personal life separately"
              </p>
              <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                <li>
                  <i className="fa fa-star fa-sm" />
                </li>
                <li>
                  <i className="fa fa-star fa-sm" />
                </li>
                <li>
                  <i className="fa fa-star fa-sm" />
                </li>
                <li>
                  <i className="fa fa-star fa-sm" />
                </li>
                <li>
                  <i className="fa fa-star fa-sm" />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div class="talk-bubble tri-right border btm-right-in col-md-6">
            <div class="talktext">
              <p>
                "With TooWires, I'm able to use WhatsApp Business and WhatsApp
                all from the same phone!"
              </p>
              <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                <li>
                  <i className="fa fa-star fa-sm" />
                </li>
                <li>
                  <i className="fa fa-star fa-sm" />
                </li>
                <li>
                  <i className="fa fa-star fa-sm" />
                </li>
                <li>
                  <i className="fa fa-star fa-sm" />
                </li>
                <li>
                  <i className="fa fa-star fa-sm" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
