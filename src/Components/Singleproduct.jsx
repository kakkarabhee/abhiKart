import React, { useEffect, useState } from 'react'
import OwlCarousel from 'react-owl-carousel';
import Brandlogo from './Brandlogo'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../Store/ActionCreators/ProductActionCreators'
import { createCart, getCart } from '../Store/ActionCreators/CartActionCreators'
import { createWishlist, getWishlist } from '../Store/ActionCreators/WishlistActionCreators'


export default function Singleproduct() {
    let [product, setProduct] = useState({
        pic1: "",
        pic2: "",
        pic3: "",
        pic4: ""
    })
    let [qty, setQty] = useState(1)
    let [relatedProducts, setRelatedProducts] = useState([])
    let navigate = useNavigate()
    let dispatch = useDispatch()
    let { id } = useParams()
    let allProductStateData = useSelector(state => state.ProductStateData)
    let allCartStateData = useSelector(state => state.CartStateData)
    let allWishlistStateData = useSelector(state => state.WishlistStateData)

    function addToCart() {
        if (!localStorage.getItem("login")) {
            navigate("/login")
        }
        else {
            var item = allCartStateData.slice(1).find((x) => x.productid === product.id && x.userid === localStorage.getItem("userid"))
            if (!item) {
                item = {
                    userid: localStorage.getItem("userid"),
                    productid: product.id,
                    name: product.name,
                    brand: product.brand,
                    color: product.color,
                    size: product.size,
                    pic: product.pic1,
                    price: product.finalprice,
                    qty: parseInt(qty),
                    total: product.finalprice * qty
                }
                dispatch(createCart(item))
            }
            navigate("/cart")
        }
    }
    function addToWishlist() {
        if(!localStorage.getItem("login")){

            navigate("/login")
        }
        else{
            var item = allWishlistStateData.slice(1).find((x) => x.productid === product.id && x.userid === localStorage.getItem("userid"))
        if (!item) {
            item = {
                userid: localStorage.getItem("userid"),
                productid: product.id,
                name: product.name,
                brand: product.brand,
                color: product.color,
                size: product.size,
                price: product.finalprice,
                pic: product.pic1,
                qty: qty,
                total: product.finalprice * qty
            }
            dispatch(createWishlist(item))
        }
        navigate("/admin")
        }
    }
        function getAPIData() {
            dispatch(getProduct())
            dispatch(getCart())
            dispatch(getWishlist())
            if (allProductStateData.length) {
                let item = allProductStateData.slice(1).reverse().find((item) => item.id === Number(id))
                if (item)
                    setProduct(item)
                setRelatedProducts(allProductStateData.slice(1).filter((p) => p.maincategory === item.maincategory && p.subcategory === item.subcategory && p.brand === item.brand && p.id !== item.id))
            }
        }
        useEffect(() => {
            getAPIData()
        }, [allProductStateData.length, allCartStateData.length, allWishlistStateData.length])
        return (
            <>
                {/* <!-- breadcrumb-section --> */}
                <div className="breadcrumb-section breadcrumb-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 text-center">
                                <div className="breadcrumb-text">
                                    <h4 className='text-white'>
                                        <Link to="/" className='text-white'>Home </Link><i className='fa fa-arrow-right mx-3'></i> Single Product
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- end breadcrumb section --> */}

                {/* <!-- single product --> */}
                <div className="single-product my-4">
                    <div className="container=fluid">
                        <div className="row">
                            <div className="col-md-5">
                                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={`/assets/products/${product.pic1}`} height="450px" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={`/assets/products/${product.pic2}`} height="450px" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={`/assets/products/${product.pic3}`} height="450px" className="d-block w-100" alt="..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={`/assets/products/${product.pic4}`} height="450px" className="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="single-product-content">
                                    <h2>{product.name}</h2>
                                    <h4 className="single-product-pricing mb-1">{product.maincategory} {product.subcategory}</h4>
                                    <h4 className="single-product-pricing mt-1">{product.size}/{product.color}</h4>
                                    <h3 className="single-product-pricing text-success"><del className="text-danger me-2">&#8377;{product.baseprice}</del>{product.discount}%off</h3>
                                    <h2>&#8377;{product.finalprice}</h2>
                                    <p>{product.description}</p>
                                    <div className="single-product-form">
                                        <form>
                                            <input type="number" name='qty' onChange={(e) => setQty(e.target.value)} value={qty} min={1} />
                                        </form>
                                        <button className="btn btn-success" onClick={addToCart}><i className="fas fa-shopping-cart"></i> Add to Cart</button>
                                        <button className="btn " onClick={addToWishlist}><i className="fas fa-heart"></i> Add to Wishlist</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- end single product --> */}

                {/* <!-- more products --> */}
                {
                    relatedProducts.length ?
                        <div className="more-products my-1">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 offset-lg-2 text-center">
                                        <div className="section-title">
                                            <h3><span className="orange-text">Related</span> Products</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <OwlCarousel className='owl-theme' loop margin={1} items={3} nav>

                                        {
                                            relatedProducts.map((item, index) => {
                                                return <div key={index} className="text-center">
                                                    <div className="single-product-item">
                                                        <div className="product-image">
                                                            <Link to={"/singleproduct/" + item.id}><img src={`/assets/products/${item.pic1}`} height="250px" alt="" /></Link>
                                                        </div>
                                                        <h3>{item.name}</h3>
                                                        <h3><del className='text-decoration-strikethrough text-danger'>&#8377;{item.baseprice}</del>&#8377;{item.finalprice}</h3>
                                                        <h3 className="text-success"> {item.discount} %Off </h3>
                                                        <Link to={"/singleproduct/" + item.id} className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</Link>
                                                    </div>
                                                </div>
                                            })
                                        }
                                    </OwlCarousel>
                                </div>
                            </div>
                        </div> :
                        ""
                }
                {/* <!-- end more products --> */}
                <Brandlogo />
            </>
        )
    }
