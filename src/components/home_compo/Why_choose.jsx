import React from "react";
import Truck from "../../assets/images/truck.svg";
import Bag from "../../assets/images/bag.svg";
import Supprot from "../../assets/images/support.svg";
import Return from "../../assets/images/return.svg";
import Why_Choose from "../../assets/images/why-choose-us-img.jpg";

const Why_choose = () => {
  return (
    <div className="why-choose-section">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-6">
            <h2 className="section-title">Why Choose Us</h2>
            <p>
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>

            <div className="row my-5">
              <div className="col-6 col-md-6">
                <div className="feature">
                  <div className="icon">
                    <img src={Truck} alt="Image" className="imf-fluid" />
                  </div>
                  <h3>Fast &amp; Free Shipping</h3>
                  <p>
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate.
                  </p>
                </div>
              </div>

              <div className="col-6 col-md-6">
                <div className="feature">
                  <div className="icon">
                    <img src={Bag} alt="Image" className="imf-fluid" />
                  </div>
                  <h3>Easy to Shop</h3>
                  <p>
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate.
                  </p>
                </div>
              </div>

              <div className="col-6 col-md-6">
                <div className="feature">
                  <div className="icon">
                    <img src={Supprot} alt="Image" className="imf-fluid" />
                  </div>
                  <h3>24/7 Support</h3>
                  <p>
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate.
                  </p>
                </div>
              </div>

              <div className="col-6 col-md-6">
                <div className="feature">
                  <div className="icon">
                    <img src={Return} alt="Image" className="imf-fluid" />
                  </div>
                  <h3>Hassle Free Returns</h3>
                  <p>
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="img-wrap">
              <img src={Why_Choose} alt="Image" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why_choose;
