import React from "react";

import Parentcard from "./Parentcard";
import IdiolTalk from "./IdiolTalk";
import Footer from "../Footer/Footer";
const Homepage = () => {
  return (
    <div>
      <div id="carouselExample" className="carousel slide mb-3">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/Homepage-Banner/image-1.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/Homepage-Banner/image-2.jpg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="/Homepage-Banner/image-3.jpg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Parentcard />
      <div className="mt-3 ">
        <IdiolTalk />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
