import React from "react";
import { Blog } from "../assets/images";
import { Link } from "react-router-dom";

function BlogCard() {
  return (
    <div className="col-3">
      <div className="blog-card">
        <div className="card-image">
          <img src={Blog} className="img-fluid" alt="blog" />
        </div>
        <div className="blog-content">
          <p className="date">1 Jan, 2024</p>
          <h5 className="title">A beautiful sunday morning renaissance</h5>
          <p className="description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic id
            repellendus
          </p>
          <Link className="button" to="">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
