import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const ProductCard = () => {
    return (
        <div className="col-md-3">
            <div className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                    <Link>
                        <img src="images/wish.svg" alt="wishlist" />
                    </Link>
                </div>
                <div className="product-image">
                    <img src="images/watch.jpg" alt="product" />
                </div>
                <div className="product-details">
                    <h6 className="brand">Smart Watch</h6>
                    <h5 className="product-title">
                        Kids Headphones Bulk 10 Pack Multi colored for students
                    </h5>
                    <ReactStars
                        count={5}
                        size={20}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <p className="price">$100.00</p>
                </div>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column gap-15">
                        <Link>
                            <img src="images/prodcompare.svg" alt="addCart" />
                        </Link>
                        <Link>
                            <img src="images/view.svg" alt="addCart" />
                        </Link>
                        <Link>
                            <img src="images/add-cart.svg" alt="addCart" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
