import React from "react";
import User from "../assets/images/user.svg";
import Cart from "../assets/images/cart.svg";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {

  const location = useLocation()

  console.log(location.pathname);

  return (
    <nav
      className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark"
      arial-label="Furni navigation bar"
    >
      <div className="container">
        <Link className="navbar-brand" to={"/"}>
          Salon Shoppe<span>.</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsFurni"
          aria-controls="navbarsFurni"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsFurni">
          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li className={`nav-item ${location.pathname == "/" && "active"}`}>
              <Link className="nav-link " to={"/"}>
                Home
              </Link>
            </li>
            <li className={`nav-item ${location.pathname == "/all-products" && "active"}`}>
              <Link className="nav-link" to={"/all-products"}>
                Products
              </Link>
            </li>
            <li className={`nav-item ${location.pathname == "/about-us" && "active"}`}>
              <Link className="nav-link" to={"/about-us"}>
                About us
              </Link>
            </li>
            {/* <li>
              <a className="nav-link" href="services.html">
                Services
              </a>
            </li>
            <li>
              <a className="nav-link" href="blog.html">
                Blog
              </a>
            </li> */}
            <li className={`nav-item ${location.pathname == "/contact-us" && "active"}`}>
              <Link className="nav-link" to={"/contact-us"}>
                Contact us
              </Link>
            </li>
          </ul>

          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li>
              <Link className="nav-link" to={"/user"}>
                <img src={User} />
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={"/cart"}>
                <img src={Cart} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
