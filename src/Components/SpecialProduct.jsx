import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProduct = () => {
    return (
        <div className="col-md-4">
            <div className="special-product-card ">
                <div className="d-flex justify-content-between">
                    {/* Product Image */}
                    <div className="product-image">
                        <img
                            src="images/watch.jpg"
                            alt="product"
                            className="img-fluid"
                        />
                    </div>
                    {/* Product Details */}
                    <div className="special-product-content">
                        <h5 className="brand">Samsung</h5>
                        <h6 className="title">Galaxy Watch 2 </h6>
                        <ReactStars
                            count={5}
                            size={20}
                            value={3}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className="price">
                            <span className="red-p"> $100</span> &nbsp;
                            <strike>$200</strike>
                        </p>
                        <div className="discount-till d-flex gap-10 align-items-center">
                            <p className="mb-0">
                                <b>5 </b>days
                            </p>
                            <div className="d-flex gap-10 align-items-center">
                                <span className="badge rounded-circle p-2 bg-warning">
                                    1
                                </span>
                                :
                                <span className="badge rounded-circle p-2 bg-warning">
                                    1
                                </span>
                                :
                                <span className="badge rounded-circle p-2 bg-warning">
                                    1
                                </span>
                            </div>
                            a
                        </div>
                    </div>
                </div>

                {/* Wishlist Icon */}
                <div className="wishlist-icon position-absolute">
                    <Link>
                        <img src="images/wish.svg" alt="wishlist" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SpecialProduct;
