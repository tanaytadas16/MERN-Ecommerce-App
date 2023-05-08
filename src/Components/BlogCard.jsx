import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ date, image, title, description, link }) => {
    return (
        <div className="col-md-3">
            <div className="blog-card">
                <div className="blog-card-img">
                    <img src={image} className="img-fluid" alt="blog" />
                </div>
                <div className="blog-card-content">
                    <p className="date">{date}</p>
                    <h6 className="title">{title}</h6>
                    <p className="desc">{description}</p>
                    <Link to={link} className="button">
                    
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
