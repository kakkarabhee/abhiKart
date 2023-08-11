import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';

export default function Carousel() {
    return (
        <>

            {/* <!-- home page slider --> */}
            <OwlCarousel className='owl-theme' loop margin={1} items={1} nav>
                {/* <!-- single home slider --> */}
                <div className="single-homepage-slider homepage-bg-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-7 offset-lg-1 offset-xl-0">
                                <div className="hero-text">
                                    <div className="hero-text-tablecell">
                                        <p className="subtitle">Male Fashion</p>
                                        <h1>Get more than 50% Discount</h1>
                                        <div className="hero-btns">
                                            <Link to="/shop/Male/All/All" className="boxed-btn">Shop Now</Link>
                                            <Link to="/contact" className="bordered-btn">Contact Us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- single home slider --> */}
                <div className="single-homepage-slider homepage-bg-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1 text-center">
                                <div className="hero-text">
                                    <div className="hero-text-tablecell">
                                        <p className="subtitle">Female Fashion</p>
                                        <h1>Get more than 50% Discount</h1>
                                        <div className="hero-btns">
                                            <Link to="/shop/Female/All/All" className="boxed-btn">Shop Now</Link>
                                            <Link to="/contact" className="bordered-btn">Contact Us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- single home slider --> */}
                <div className="single-homepage-slider homepage-bg-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1 text-right">
                                <div className="hero-text">
                                    <div className="hero-text-tablecell">
                                        <p className="subtitle">Kids Fashion</p>
                                        <h1>Get more than 50% Discount</h1>
                                        <div className="hero-btns">
                                            <Link to="/shop/Kids/All/All" className="boxed-btn">Shop Now</Link>
                                            <Link to="/contact" className="bordered-btn">Contact Us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- end home page slider --> */}
                {/* <!-- single home slider --> */}
                <div className="single-homepage-slider homepage-bg-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-7 offset-lg-1 offset-xl-0">
                                <div className="hero-text">
                                    <div className="hero-text-tablecell">
                                        <p className="subtitle">Latest Arrivals</p>
                                        <h1>Get more than 50% Discount</h1>
                                        <div className="hero-btns">
                                            <Link to="/shop/All/All/All" className="boxed-btn">Shop Now</Link>
                                            <Link to="/contact" className="bordered-btn">Contact Us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- single home slider --> */}
                <div className="single-homepage-slider homepage-bg-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1 text-center">
                                <div className="hero-text">
                                    <div className="hero-text-tablecell">
                                        <p className="subtitle">Latest Arrivals</p>
                                        <h1>Get more than 50% Discount</h1>
                                        <div className="hero-btns">
                                            <Link to="/shop/All/All/All" className="boxed-btn">Shop Now</Link>
                                            <Link to="/contact" className="bordered-btn">Contact Us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- single home slider --> */}
                <div className="single-homepage-slider homepage-bg-6">
                    <div className="container">
                        <div className="row">   
                            <div className="col-lg-10 offset-lg-1 text-right">
                                <div className="hero-text">
                                    <div className="hero-text-tablecell">
                                        <p className="subtitle">Latest Arrivals</p>
                                        <h1>Get more than 50% Discount</h1>
                                        <div className="hero-btns">
                                            <Link to="/shop/All/All/All" className="boxed-btn">Shop Now</Link>
                                            <Link to="/contact" className="bordered-btn">Contact Us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- end home page slider --> */}
                {/* <!-- single home slider --> */}
                <div className="single-homepage-slider homepage-bg-7">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-lg-7 offset-lg-1 offset-xl-0">
                                <div className="hero-text">
                                    <div className="hero-text-tablecell">
                                        <p className="subtitle">Latest Arrivals</p>
                                        <h1>Get more than 50% Discount</h1>
                                        <div className="hero-btns">
                                            <Link to="/shop/All/All/All" className="boxed-btn">Shop Now</Link>
                                            <Link to="/contact" className="bordered-btn">Contact Us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- single home slider --> */}
                <div className="single-homepage-slider homepage-bg-8">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1 text-center">
                                <div className="hero-text">
                                    <div className="hero-text-tablecell">
                                        <p className="subtitle">Latest Arrivals</p>
                                        <h1>Get more than 50% Discount</h1>
                                        <div className="hero-btns">
                                            <Link to="/shop/All/All/All" className="boxed-btn">Shop Now</Link>
                                            <Link to="/contact" className="bordered-btn">Contact Us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- single home slider --> */}
                <div className="single-homepage-slider homepage-bg-9">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1 text-right">
                                <div className="hero-text">
                                    <div className="hero-text-tablecell">
                                        <p className="subtitle">Latest Arrivals</p>
                                        <h1>Get more than 50% Discount</h1>
                                        <div className="hero-btns">
                                            <Link to="/shop/All/All/All" className="boxed-btn">Shop Now</Link>
                                            <Link to="/contact" className="bordered-btn">Contact Us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- end home page slider --> */}
                {/* <!-- single home slider --> */}
                <div className="single-homepage-slider homepage-bg-10">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1 text-right">
                                <div className="hero-text">
                                    <div className="hero-text-tablecell">
                                        <p className="subtitle">Latest Arrivals</p>
                                        <h1>Get more than 50% Discount</h1>
                                        <div className="hero-btns">
                                            <Link to="/shop/All/All/All" className="boxed-btn">Shop Now</Link>
                                            <Link to="/contact" className="bordered-btn">Contact Us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- end home page slider --> */}
            </OwlCarousel>

        </>
    )
}
