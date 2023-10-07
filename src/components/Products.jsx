import React from "react";
import Cross from "../assets/images/cross.svg";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="product-section" id="products">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className="section-title">Products</h2>
          </div>
          <div className="col-md-6 text-start text-md-end">
            <Link to={"/all-products"} className="more">
              View All Products
            </Link>
          </div>
          <div className="col-md-12 col-lg-3 mb-5 mb-lg-0 mt-5">
            <h2 className="mb-4 section-title">
              Crafted with excellent material.
            </h2>
            <p className="mb-4">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.{" "}
            </p>
            <p>
              <Link to={"/all-products"} className="btn">
                Explore
              </Link>
            </p>
          </div>
          <div className="col-12 col-md-4 col-lg-3 my-5 mb-md-0 ">
            <a className="product-item" href="cart.html">
              <img
                src="https://web.archive.org/web/20220927215650im_/https://salonshoppe.in/wf_med/2021/06/shampoo-station-21-2.jpeg"
                className="img-fluid product-thumbnail"
              />
              <h3 className="product-title">Nordic Chair</h3>
              <strong className="product-price">$50.00</strong>

              <span className="icon-cross">
                <img src={Cross} className="img-fluid" />
              </span>
            </a>
          </div>
          <div className="col-12 col-md-4 col-lg-3 my-5 mb-md-0">
            <a className="product-item" href="cart.html">
              <img
                src="https://web.archive.org/web/20220927215650im_/https://salonshoppe.in/wf_med/2021/10/pink-salon-chair.jpeg"
                className="img-fluid product-thumbnail"
              />
              <h3 className="product-title">Kruzo Aero Chair</h3>
              <strong className="product-price">$78.00</strong>

              <span className="icon-cross">
                <img src={Cross} className="img-fluid" />
              </span>
            </a>
          </div>
          <div className="col-12 col-md-4 col-lg-3 my-5 mb-md-0">
            <a className="product-item" href="cart.html">
              <img
                src="https://web.archive.org/web/20220927215650im_/https://salonshoppe.in/wf_med/2021/10/black-chair.jpeg"
                className="img-fluid product-thumbnail"
              />
              <h3 className="product-title">Ergonomic Chair</h3>
              <strong className="product-price">$43.00</strong>

              <span className="icon-cross">
                <img src={Cross} className="img-fluid" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
