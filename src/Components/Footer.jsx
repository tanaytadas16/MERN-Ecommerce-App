import React from "react";
import { Link } from "react-router-dom";
import { socialIcons } from "../Constants";

const Footer = () => {
    return (
        <>
            <footer className="py-3">
                <div className="container-xl">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            <div className="footer-top-data d-flex gap-30 align-items-center">
                                <img
                                    src="/images/newsletter.png"
                                    alt="newsletter"
                                />
                                <h4 className="mb-0 text-white">
                                    Sign Up for Newsletter
                                </h4>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Your Email"
                                    aria-label="Your Email"
                                    aria-describedby="basic-addon2"
                                />
                                <span
                                    className="input-group-text p-2"
                                    id="basic-addon2"
                                >
                                    Subscribe
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="py-3">
                <div className="container-xl">
                    <div className="row">
                        <div className="col-md-4 mt-2">
                            <h5 className="text-white mb-4">Contact Us</h5>
                            <div>
                                <address className="fs-6">
                                    146 Abc Avenue, New York, 11111 <br />
                                    United States
                                </address>
                                <a
                                    href="tel:+19919998888"
                                    className="mt-3 d-block mb-1 text-white"
                                >
                                    +1 991-998-8888
                                </a>
                                <a
                                    href="mailto: example@gmail.com"
                                    className="mt-3 d-block mb-0 text-white"
                                >
                                    example@gmail.com
                                </a>
                                <div className="socialIcons d-flex align-items-center gap-30">
                                    {socialIcons.map((item) => (
                                        <a
                                            href={item.url}
                                            className="text-white fs-3"
                                        >
                                            {item.icon}{" "}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3  mt-2">
                            <h5 className="text-white mb-4">Information</h5>
                            <div className="footer-links d-flex flex-column">
                                <Link className="text-white py-2 mb-1">
                                    Privacy Policy
                                </Link>
                                <Link className="text-white py-2 mb-1">
                                    Refund Policy
                                </Link>
                                <Link className="text-white py-2 mb-1">
                                    Shipping Policy
                                </Link>
                                <Link className="text-white py-2 mb-1">
                                    Terms & Conditions
                                </Link>
                                <Link className="text-white py-2 mb-1">
                                    Blogs
                                </Link>
                            </div>
                        </div>
                        <div className="col-3  mt-2">
                            <h5 className="text-white mb-4">Account</h5>
                            <div className="footer-links d-flex flex-column">
                                <Link className="text-white py-2 mb-1">
                                    About Us
                                </Link>
                                <Link className="text-white py-2 mb-1">
                                    Faq
                                </Link>
                                <Link className="text-white py-2 mb-1">
                                    Contact
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-2  mt-2">
                            <h5 className="text-white mb-4">Quick Links</h5>
                            <div className="footer-links d-flex flex-column">
                                <Link className="text-white py-2 mb-1">
                                    Laptops
                                </Link>
                                <Link className="text-white py-2 mb-1">
                                    Headphones
                                </Link>
                                <Link className="text-white py-2 mb-1">
                                    Tablets
                                </Link>
                                <Link className="text-white py-2 mb-1">
                                    Watch
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Footer bottom container */}
            <footer className="py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12 ">
                            <p className="mb-0 text-center text-white">
                                &copy; {new Date().getFullYear()}; Powered by
                                Tranix
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
