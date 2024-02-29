import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";

function Resetpassword() {
  return (
    <>
      <BreadCrumb title="Reset Password" />
      <div className="reset-password-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Reset Password</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="password"
                      name="confpassword"
                      placeholder="Confirm Password"
                      className="form-control"
                    />
                  </div>

                  <div className="d-flex justify-content-center align-items-center gap-15 mt-3">
                    <button className="button border-0" type="submit">
                      Ok
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resetpassword;
