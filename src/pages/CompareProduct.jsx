import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import { Cross, Watch } from "../assets/images";
import Color from "../components/Color";

function CompareProduct() {
  return (
    <>
      <BreadCrumb title="Compare Products" />
      <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src={Cross}
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img src={Watch} alt="watch" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Monor T1 7.0 1GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                  </h5>
                  <h6 className="price mb-3 mt-3">$100</h6>
                  <div>
                    <div className="product-detail">
                      <h5>Brand:</h5>
                      <p>Havels</p>
                    </div>
                    <div className="product-detail">
                      <h5>Type:</h5>
                      <p>Watch</p>
                    </div>
                    <div className="product-detail">
                      <h5>Availability:</h5>
                      <p>In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h5>Color:</h5>
                      <Color />
                    </div>
                    <div className="product-detail">
                      <h5>Size:</h5>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src={Cross}
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img src={Watch} alt="watch" />
                </div>
                <div className="compare-product-details">
                  <h5 className="title">
                    Monor T1 7.0 1GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                  </h5>
                  <h6 className="price mb-3 mt-3">$100</h6>
                  <div>
                    <div className="product-detail">
                      <h5>Brand:</h5>
                      <p>Havels</p>
                    </div>
                    <div className="product-detail">
                      <h5>Type:</h5>
                      <p>Watch</p>
                    </div>
                    <div className="product-detail">
                      <h5>Availability:</h5>
                      <p>In Stock</p>
                    </div>
                    <div className="product-detail">
                      <h5>Color:</h5>
                      <Color />
                    </div>
                    <div className="product-detail">
                      <h5>Size:</h5>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompareProduct;
