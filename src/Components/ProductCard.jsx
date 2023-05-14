import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import { products } from "../Constants";

const ProductCard = () => {
    return products.map((product, index) => (
        <div className="col-md-3">
            <div className="product-card position-relative" key={index}>
                {/* Wishlist Icon */}
                <div className="wishlist-icon position-absolute">
                    <Link>
                        <img src="images/wish.svg" alt="wishlist" />
                    </Link>
                </div>
                {/* Product Image */}
                <div className="product-image">
                    <img
                        src={product.image}
                        alt="product"
                        onMouseOver={(e) =>
                            (e.currentTarget.src = product.image2)
                        }
                        onMouseOut={(e) =>
                            (e.currentTarget.src = product.image)
                        }
                    />
                </div>
                {/* Product Details */}
                <div className="product-details">
                    <h6 className="brand">{product.brand}</h6>
                    <h5 className="product-title">{product.description}</h5>
                    <ReactStars
                        count={5}
                        size={20}
                        value={product.rating}
                        edit={false}
                        activeColor="#ffd700"
                    />
                    <p className="price">${product.price}</p>
                </div>
                {/* Action Bar */}
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
    ));
};

export default ProductCard;
