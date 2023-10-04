import React, { useEffect, useState } from 'react'
import Carousel from './Carousel'
import Testimonials from './Testimonials'
import Brandlogo from './Brandlogo'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../Store/ActionCreators/ProductActionCreators'


export default function Home() {
    let [products, setProducts] = useState([])
    let dispatch = useDispatch()
    let allProductStateData = useSelector(state => state.ProductStateData)
    function getAPIData() {
        dispatch(getProduct())
        if (allProductStateData.length) {
            setProducts(allProductStateData.slice(1).reverse().slice(0, 6))
        }
    }
    useEffect(() => {
        getAPIData()
    }, [allProductStateData.length])
    return (
        <>
            <Carousel />
            {/* <!-- features list section --> */}
            <div className="list-section pt-80 pb-80">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <div className="list-box d-flex align-items-center">
                                <div className="list-icon">
                                    <i className="fas fa-shipping-fast"></i>
                                </div>
                                <div className="content">
                                    <h3>Free Shipping</h3>
                                    <p>When order over $75</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <div className="list-box d-flex align-items-center">
                                <div className="list-icon">
                                    <i className="fas fa-phone-volume"></i>
                                </div>
                                <div className="content">
                                    <h3>24/7 Support</h3>
                                    <p>Get support all day</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="list-box d-flex justify-content-start align-items-center">
                                <div className="list-icon">
                                    <i className="fas fa-sync"></i>
                                </div>
                                <div className="content">
                                    <h3>Refund</h3>
                                    <p>Get refund within 3 days!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* <!-- end features list section --> */}

            {/* <!-- product section --> */}
            <div className="product-section my-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="section-title">
                                <h3><span className="orange-text">Latest</span> Products</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {
                            products.map((item, index) => {
                                return <div key={index} className="col-lg-4 col-md-6 offset-md-3 offset-lg-0 text-center">
                                    <div className="single-product-item">
                                        <div className="product-image">
                                            <Link to={"/single-product/" + item.id}><img src={`/assets/products/${item.pic1}`} height="250px" alt="" /></Link>
                                        </div>
                                        <h3>{item.name}</h3>
                                        <h3><del className='text-decoration-strikethrough text-danger'>&#8377;{item.baseprice}</del>&#8377;{item.finalprice}</h3>
                                        <h3 className="text-success"> {item.discount} %Off </h3>
                                        <Link to={"/single-product/" + item.id} className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</Link>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <div className="w-25 m-auto">
                        <Link to={"/shop/All/All/All"} className="cart-btn w-100 text-center"> More Products</Link>
                    </div>
                </div>
            </div>
            {/* <!-- end product section --> */}

            {/* <!-- shop banner --> */}
            <section className="shop-banner">
                <div className="container">
                    <h3>June sale is on! <br /> with big <span className="orange-text">Discount...</span></h3>
                    <div className="sale-percent"><span>Sale! <br /> Upto</span>50% <span>off</span></div>
                    <Link to="/shop/All/All/All" className="cart-btn btn-lg">Shop Now</Link>
                </div>
            </section>
            {/* <!-- end shop banner --> */}

            <Testimonials />


            <Brandlogo />

        </>
    )
}
