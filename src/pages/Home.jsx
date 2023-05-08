import React from "react";
import { Link } from "react-router-dom";
import {
    mainBanner,
    smallBanner,
    services,
    categories,
    brandMarquee,
    blogData,
} from "../Constants";
import Marquee from "react-fast-marquee";
import BlogCard from "../Components/BlogCard";

const Home = () => {
    return (
        <div>
            <>
                {/* Main Banner */}
                <section className="hero-part py-5">
                    <div className="container-xl">
                        <div className="row mb-2">
                            <div className="col-md-6">
                                <div className="main-banner position-relative">
                                    <img
                                        className="img-fluid rounded-3"
                                        src={mainBanner.image}
                                        alt=" main-banner"
                                    />
                                    <div className="main-banner-content position-absolute">
                                        <h4>{mainBanner.title}</h4>
                                        <h5>{mainBanner.subTitle}</h5>
                                        <p>{mainBanner.price}</p>
                                        <Link className="button">Buy Now</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                                    {smallBanner.map((banner, index) => (
                                        <div
                                            className="small-banner position-relative mb-1"
                                            key={index}
                                        >
                                            <img
                                                className="img-fluid rounded-3 "
                                                src={banner.image}
                                                alt={`small-banner-${banner.id}`}
                                            />
                                            <div className="small-banner-content position-absolute top-50 translate-middle">
                                                <h4>{banner.title}</h4>
                                                <h5>{banner.subTitle}</h5>
                                                <p>{banner.price}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services */}
                <section className="home-wrapper-2 py-5">
                    <div className="container-xl">
                        <div className="row">
                            <div className="col-12">
                                <div className="services d-flex align-items-center justify-content-between">
                                    {services.map((service, index) => (
                                        <div
                                            key={index}
                                            className="d-flex align-items-center gap-10 mx-1"
                                        >
                                            <img
                                                src={service.icon}
                                                alt="services"
                                            />
                                            <div>
                                                <h6>{service.title}</h6>
                                                <p className="d-none d-lg-block mb-0">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}

                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Categories */}
                <section className="home-wrapper-3 py-5">
                    <div className="container-xl">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="categories  d-flex flex-wrap align-items-center justify-content-between">
                                    {categories.map((category, index) => (
                                        <div
                                            className="d-flex p-2 gap-30 align-items-center  "
                                            key={index}
                                        >
                                            <div>
                                                <h6> {category.title}</h6>
                                                <p>10 Items</p>
                                            </div>
                                            <img src={category.image} alt="" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Slider */}
                <section className="marquee-wrapper home-wrapper py-5">
                    <div className="container-xl">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="marquee-inner-wrapper card-wrapper d-flex align-items-center">
                                    <Marquee
                                        pauseOnHover="true"
                                        gradient="true"
                                    >
                                        {brandMarquee.map((brand, id) => (
                                            <div className="mx-4 w-25" key={id}>
                                                <img
                                                    src={brand.image}
                                                    alt="brand"
                                                />
                                            </div>
                                        ))}
                                    </Marquee>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="blog-wrapper home-wrapper py-5">
                    <div className="container-xl">
                        <div className="row">
                            <h4 className="section-heading">Our Latest News</h4>
                            {blogData.map((blog, index) => (
                                <BlogCard {...blog} />
                            ))}

                            {/* <BlogCard />
                            <BlogCard />
                            <BlogCard /> */}
                        </div>
                    </div>
                </section>
            </>
        </div>
    );
};

export default Home;
