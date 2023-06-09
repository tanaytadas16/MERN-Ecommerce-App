import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { categoryLinks } from "../Constants";
const Header = () => {
    return (
        <div>
            <>
                {/* header first layer */}
                <header className="header-top-strip py-1">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 ">
                                <p className="text-white mb-0">
                                    Free Shipping Over $100 & Free Returns
                                </p>
                            </div>
                            <div className="col-md-6">
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

                {/* header second layer */}
                <header className="header-upper py-2">
                    <div className="container-fluid">
                        <div className="row flex-nowrap align-items-center">
                            <div className="col-md-2">
                                {/* logo */}
                                <h2>
                                    <Link className="text-white">Tranix</Link>
                                </h2>
                            </div>
                            <div className="col-5">
                                {/* search bar */}
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
                                        onClick={() => {
                                            // Add your search function here
                                            console.log(
                                                "Search button clicked!"
                                            );
                                        }}
                                    >
                                        <BsSearch className="fs-6" />
                                    </span>
                                </div>
                            </div>

                            {/* header upper links */}
                            <div className="col-md-5">
                                <div className="header-upper-links d-flex flex-row align-items-center justify-content-evenly">
                                    {/* compare */}
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

                                    {/* wishlist */}
                                    <div>
                                        <Link className="d-flex align-items-center gap-10 text-white">
                                            <img
                                                src="./images/wishlist.svg"
                                                alt="wishlist"
                                            />
                                            <p className=" mb-0">
                                                Favorite <br /> wishlist
                                            </p>
                                        </Link>
                                    </div>

                                    {/* login */}
                                    <div>
                                        <Link className="d-flex align-items-center gap-10 text-white">
                                            <img
                                                src="./images/user.svg"
                                                alt="user"
                                            />
                                            <p className=" mb-0">
                                                Login <br /> My Account
                                            </p>
                                        </Link>
                                    </div>

                                    {/* cart */}
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
                                                <p className=" mb-0">$500</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* header third layer */}
                <header className="header-bottom py-2">
                    <div className="container-xxl">
                        <div className="row">
                            <div className="col-12">
                                <div className="menu-bottom d-flex align-items-center gap-30">
                                    <div>
                                        {/* dropdown menu */}
                                        <div className="dropdown">
                                            {/* dropdown button */}
                                            <button
                                                className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex gap-15 align-items-center"
                                                type="button"
                                                id="dropdownMenuButton1"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                {/* menu icon */}
                                                <img
                                                    src="images/menu.svg"
                                                    alt="menu icon"
                                                />
                                                <span className="me-5 d-inline-block">
                                                    Shop Categories
                                                </span>
                                            </button>

                                            {/* dropdown menu */}
                                            <ul
                                                className="dropdown-menu"
                                                aria-labelledby="dropdownMenuButton1"
                                            >
                                                {/* dropdown menu items */}

                                                {categoryLinks.map(
                                                    (dropdownItem, index) => (
                                                        <li key={index}>
                                                            <Link
                                                                id={
                                                                    dropdownItem.id
                                                                }
                                                                className="dropdown-item text-white"
                                                                to=""
                                                            >
                                                                {
                                                                    dropdownItem.title
                                                                }
                                                            </Link>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </div>

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
