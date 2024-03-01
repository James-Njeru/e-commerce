import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import { Watch } from "../assets/images";

function SingleProduct() {
  const [orderedProduct, setOrderedProduct] = useState(false);
  const props = { width: 400, height: 500, zoomWidth: 500, img: Watch };

  return (
    <>
      <BreadCrumb title="Product name" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div>
                  <img src={Watch} alt="" className="img-fluid" />
                </div>
                <div>
                  <img src={Watch} alt="" className="img-fluid" />
                </div>
                <div>
                  <img src={Watch} alt="" className="img-fluid" />
                </div>
                <div>
                  <img src={Watch} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">
                    Kids Headphones Bulk 10 Pack Multi Colored For Students
                  </h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">$ 100</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">(2 Reviews)</p>
                  </div>
                  <a href="#review">Write a Review</a>
                </div>
                <div className="border-bottom"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="description-wrapper py-5 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <h4>Description</h4>
                <div className="bg-white p-3">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Excepturi sapiente eligendi alias commodi repudiandae a fuga
                    nisi voluptatum ducimus. Iure vitae veritatis placeat
                    accusantium vero adipisci illo dolore voluptatum
                    dignissimos?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <sections id="review" className="reviews-wrapper home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <h3>Reviews</h3>
                <div className="review-inner-wrapper">
                  <div className="review-head d-flex justify-content-between align-items-end">
                    <div>
                      <h4 className="mb-2">Customer Reviews</h4>
                      <div className="d-flex align-items-center gap-10">
                        <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <p className="mb-0">Based on 2 reviews</p>
                      </div>
                    </div>
                    {orderedProduct && (
                      <div>
                        <a
                          className="text-dark text-decoration-underline"
                          href=""
                        >
                          Write a review
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="review-form py-4">
                    <h4>Write a Review</h4>
                    <form action="" className="d-flex flex-column gap-15">
                      <div>
                        <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={true}
                          activeColor="#ffd700"
                        />
                      </div>
                      <div>
                        <textarea
                          name=""
                          id=""
                          className="w-100 form-control"
                          cols={30}
                          rows={4}
                          placeholder="Comments"
                        ></textarea>
                      </div>
                      <div className="d-flex justify-content-end">
                        <button className="button border-0">
                          Submit Review
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="reviews mt-4">
                    <div className="review">
                      <div className="d-flex gap-10 align-items-center">
                        <h6 className="mb-0">Dave</h6>
                        <ReactStars
                          count={5}
                          size={24}
                          value={4}
                          edit={false}
                          activeColor="#ffd700"
                        />
                      </div>
                      <p className="mt-3">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Fugiat, voluptates. Delectus, iure eum mollitia
                        debitis illo atque, fugit pariatur corrupti optio
                        tenetur quas animi quo sequi earum rem quam sed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </sections>

        <section className="popular-wrapper py-5 home-wrapper-2">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <h3 className="section-heading">Our Popular Products</h3>
              </div>
            </div>
            <div className="row">
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default SingleProduct;
