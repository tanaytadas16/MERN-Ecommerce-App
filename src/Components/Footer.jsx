import React from "react";

const Footer = () => {
    return (
        <>
            <footer className="py-3">
                <div className="container-xxl">
                    <div className="row"></div>
                </div>
            </footer>
            <footer className="py-3"></footer>
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12 ">
                            <p className="mb-0 text-center text-white">
                                &copy; 1999-{new Date().getFullYear()}; Powered
                                by Tranix
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
