import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
const Header = () => {
    return (
        <div>
            <>
                <header className="header-top-strip py-3">
                    <div className="container-xxl">
                        <div className="row">
                            <div className="col-6 ">
                                <p className="text-white mb-0">
                                    Free Shipping Over $100 & Free Returns
                                </p>
                            </div>
                            <div className="col-6">
                                <p className="text-end text-white mb-0">
                                    Hotline:
                                    <a
                                        className="text-white"
                                        href="tel: +1 5513452323"
                                    >
                                        +1 5513452323
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </header>
                <header className="header-upper py-3">
                    <div className="container-xxl">
                        <div className="row flex-nowrap align-items-center">
                            <div className="col-2">
                                <h2>
                                    <Link className="text-white">
                                        Dev Corner
                                    </Link>
                                </h2>
                            </div>
                            <div className="col-5">
                                <div className="input-group ">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search Product Here..."
                                        aria-label="Search Product Here..."
                                        aria-describedby="basic-addon2"
                                    />
                                    <span
                                        className="input-group-text p-3"
                                        id="basic-addon2"
                                    >
                                        <BsSearch className="fs-6" />
                                    </span>
                                </div>
                            </div>
                            <div className="col-5">
                                <div className="header-upper-links d-flex flex-row align-items-center justify-content-evenly">
                                    <div>
                                        <Link className="d-flex align-items-center gap-10 text-white">
                                            <img
                                                src="./images/compare.svg"
                                                alt="compare"
                                            />
                                            <p className="p-1 mb-0">
                                                Compare <br /> Products
                                            </p>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link className="d-flex align-items-center gap-10 text-white">
                                            <img
                                                src="./images/wishlist.svg"
                                                alt="wishlist"
                                            />
                                            <p className="p-1 mb-0">
                                                Favorite <br /> wishlist
                                            </p>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link className="d-flex align-items-center gap-10 text-white">
                                            <img
                                                src="./images/user.svg"
                                                alt="user"
                                            />
                                            <p className="p-1 mb-0">
                                                Login <br /> My Account
                                            </p>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link className="d-flex align-items-center gap-10 text-white">
                                            <img
                                                src="./images/cart.svg"
                                                alt="Cart"
                                            />
                                            <div className="d-flex flex-column">
                                                <span className="badge bg-white text-dark">
                                                    0
                                                </span>
                                                <p className="p-1 mb-0">$500</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <header className="header-bottom py-3">
                    <div className="container-xxl">
                        <div className="row">
                            <div className="col-12">
                                <div className="menu-bottom d-flex align-items-center">
                                    <div></div>
                                    <div className="menu-links">
                                        <div className="d-flex align-items-center gap-15">
                                            <NavLink to="/"> Home</NavLink>
                                            <NavLink to="/">Our Store</NavLink>
                                            <NavLink to="/">Blog</NavLink>
                                            <NavLink to="/contact">
                                                Contact
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </>
        </div>
    );
};

export default Header;
