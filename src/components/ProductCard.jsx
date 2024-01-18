import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import {
  AddCart,
  Watch,
  Watch2,
  View,
  Prodcompare,
  Wish,
} from "../assets/images";

function ProductCard() {
  return (
    <div className="col-3">
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src={Wish} alt="wishlist" />
          </Link>
        </div>
        <div className="product-image d-flex justify-content-center">
          <img src={Watch} className="img-fluid" alt="product image" />
          <img src={Watch2} className="img-fluid" alt="product image" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids headphones bulk 10 pack multi colored for students
          </h5>
          <ReactStars
            count={5}
            size={24}
            value={4}
            edit={false}
            activeColor="#ffd700"
          />
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src={Prodcompare} alt="compare" />
            </Link>
            <Link>
              <img src={View} alt="view" />
            </Link>

            <Link>
              <img src={AddCart} alt="add cart" />
            </Link>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;