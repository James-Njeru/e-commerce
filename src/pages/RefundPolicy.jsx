import React from "react";
import BreadCrumb from "../components/BreadCrumb";

function RefundPolicy() {
  return (
    <>
      <BreadCrumb title="Refund policy" />
      <section className="policy-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="policy"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RefundPolicy;
