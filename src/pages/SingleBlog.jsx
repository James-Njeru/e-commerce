import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import { Blog } from "../assets/images";

function SingleBlog() {
  return (
    <>
      <BreadCrumb title="Dynamic blog name" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to={"/blog"} className="d-flex align-items-center gap-10">
                  <HiOutlineArrowLeft className="fs-4" />
                  Go back to blogs
                </Link>
                <h3 className="title">
                  A Beautiful Sunday Morning Renaissance
                </h3>
                <img src={Blog} alt="blog" className="img-fluid w-100 my-4" />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                  mollitia rerum ab tempora consequatur. Autem dicta temporibus
                  fugiat explicabo minus quo aliquam, quasi mollitia sapiente
                  voluptas sed expedita! Molestias, veritatis?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleBlog;
