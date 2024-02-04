import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import { Cross, Watch } from "../assets/images";

function Wishlist() {
  return (
    <>
      <BreadCrumb title="Wishlist" />
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src={Cross}
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img src={Watch} alt="watch" className="img-fluid w-100" />
                </div>
                <div className="p-2">
                  <h5 className="title">
                    Monor T1 7.0 1GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                  </h5>
                  <h6 className="price">$100</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src={Cross}
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img src={Watch} alt="watch" className="img-fluid w-100" />
                </div>
                <div className="p-2">
                  <h5 className="title">
                    Monor T1 7.0 1GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                  </h5>
                  <h6 className="price">$100</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src={Cross}
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img src={Watch} alt="watch" className="img-fluid w-100" />
                </div>
                <div className="p-2">
                  <h5 className="title">
                    Monor T1 7.0 1GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet
                  </h5>
                  <h6 className="price">$100</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wishlist;
