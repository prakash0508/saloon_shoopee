import React from "react";
import Couch from "../../assets/images/couch.png";
import { Link } from "react-router-dom";

function Banner(props) {
  return (
    <div className="hero">
      <div className="container">
        <div className="row justify-content-between">
          <div className="sm:col-lg-5 col-lg-5">
            <div className="intro-excerpt">
              <h2 className="text-white">
                Modern Saloon Furniture {" "}
                <span className="d-block">Beauty Parlor Equipment </span>
              </h2>
              <p className="mb-4">
                We are a manufacturer of the Most Popular salon furniture and
                beauty parlor equipment, as well as we provide a complete setup
                of the spa and beauty parlor. you can Find here salon Makeup
                vanity bags/kits, Beauty equipment like face/head/multi-use
                steamers, trimmers, clippers.
              </p>
              <p>
                <Link to={"/all-products"} className="btn btn-secondary me-2">
                  Shop Now
                </Link>
                {/* <a href="#products" className="btn btn-white-outline">
                  Explore
                </a> */}
              </p>
            </div>
          </div>
          <div className="sm:col-lg-7 col-lg-7">
            <div className="hero-img-wrap">
              <img src={Couch} className="img-fluid" alt="Couch" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
