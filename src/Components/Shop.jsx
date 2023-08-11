import React, { useEffect, useState } from 'react'
import Brandlogo from './Brandlogo'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../Store/ActionCreators/ProductActionCreators'
import { getMaincategory } from '../Store/ActionCreators/MaincategoryActionCreators'
import { getSubcategory } from '../Store/ActionCreators/SubcategoryActionCreators'
import { getBrand } from '../Store/ActionCreators/BrandActionCreators'


export default function Shop() {
    let [products, setProducts] = useState([])
    let [search, setSearch] = useState("")
    let [min, setMin] = useState(0)
    let [max, setMax] = useState(2000)
    let [mc, setMc] = useState("All")
    let [sc, setSc] = useState("All")
    let [br, setBr] = useState("All")
    let [flag, setFlag] = useState(false)
    let dispatch = useDispatch()
    let params = useParams()
    let allProductStateData = useSelector(state => state.ProductStateData)
    let allMaincategoryStateData = useSelector(state => state.MaincategoryStateData)
    let allSubcategoryStateData = useSelector(state => state.SubcategoryStateData)
    let allBrandStateData = useSelector(state => state.BrandStateData)
    function getInputSearch(e) {
        setSearch(e.target.value)
    }
    function postSearch(e) {
        e.preventDefault()
        var searchTerm = search.toLowerCase()
        setProducts(allProductStateData.slice(1).reverse().filter((item) => item.name.toLowerCase().includes(searchTerm) || item.maincategory.toLowerCase() === searchTerm || item.subcategory.toLowerCase() === searchTerm || item.brand.toLowerCase() === searchTerm || item.color.toLowerCase() === searchTerm))
    }
    function getPriceInput(e) {
        var { name, value } = e.target
        if (name === "min")
            setMin(value)
        else
            setMax(value)
    }
    function postPriceFilter(e) {
        e.preventDefault()
        var p = []
        if (mc === "All" && sc === "All" && br === "All")
            p = allProductStateData.slice(1).reverse()
        else if (mc !== "All" && sc === "All" && br === "All")
            p = allProductStateData.slice(1).reverse().filter((item) => item.maincategory === mc)
        else if (mc === "All" && sc !== "All" && br === "All")
            p = allProductStateData.slice(1).reverse().filter((item) => item.subcategory === sc)
        else if (mc === "All" && sc === "All" && br !== "All")
            p = allProductStateData.slice(1).reverse().filter((item) => item.brand === br)
        else if (mc !== "All" && sc !== "All" && br === "All")
            p = allProductStateData.slice(1).reverse().filter((item) => item.maincategory === mc && item.subcategory === sc)
        else if (mc !== "All" && sc === "All" && br !== "All")
            p = allProductStateData.slice(1).reverse().filter((item) => item.maincategory === mc && item.brand === br)
        else if (mc === "All" && sc !== "All" && br !== "All")
            p = allProductStateData.slice(1).reverse().filter((item) => item.subcategory === sc && item.brand === br)
        else
            p = allProductStateData.slice(1).reverse().filter((item) => item.maincategory === mc && item.subcategory === sc && item.brand === br)
        setProducts(products.filter((item) => item.finalprice >= min && item.finalprice <= max))
    }
    function filterProducts(mc, sc, br) {
        if (mc === "All" && sc === "All" && br === "All")
            setProducts(allProductStateData.slice(1).reverse())
        else if (mc !== "All" && sc === "All" && br === "All")
            setProducts(allProductStateData.slice(1).reverse().filter((item) => item.maincategory === mc))
        else if (mc === "All" && sc !== "All" && br === "All")
            setProducts(allProductStateData.slice(1).reverse().filter((item) => item.subcategory === sc))
        else if (mc === "All" && sc === "All" && br !== "All")
            setProducts(allProductStateData.slice(1).reverse().filter((item) => item.brand === br))
        else if (mc !== "All" && sc !== "All" && br === "All")
            setProducts(allProductStateData.slice(1).reverse().filter((item) => item.maincategory === mc && item.subcategory === sc))
        else if (mc !== "All" && sc === "All" && br !== "All")
            setProducts(allProductStateData.slice(1).reverse().filter((item) => item.maincategory === mc && item.brand === br))
        else if (mc === "All" && sc !== "All" && br !== "All")
            setProducts(allProductStateData.slice(1).reverse().filter((item) => item.subcategory === sc && item.brand === br))
        else
            setProducts(allProductStateData.slice(1).reverse().filter((item) => item.maincategory === mc && item.subcategory === sc && item.brand === br))
    }
    function selectCategory(mc, sc, br) {
        setMc(mc)
        setSc(sc)
        setBr(br)
        filterProducts(mc, sc, br)
    }
    function sortFilter(e) {
        let value = e.target.value
        if (value === "1")
            setProducts(products.sort((x, y) => y.id - x.id))
        else if (value === "2")
            setProducts(products.sort((x, y) => x.finalprice - y.finalprice))
        else if (value === "3")
            setProducts(products.sort((x, y) => y.finalprice - x.finalprice))

        setFlag(!flag)
    }
    function getAPIData() {
        dispatch(getProduct())
        dispatch(getMaincategory())
        dispatch(getSubcategory())
        dispatch(getBrand())
        filterProducts(params.mc, params.sc, params.br)

    }
    useEffect(() => {
        setMc(params.mc)
        setSc(params.sc)
        setBr(params.br)
        getAPIData()
    }, [allProductStateData.length, allMaincategoryStateData.length, allSubcategoryStateData.length, allBrandStateData.length])
    return (
        <>
            {/* <!-- breadcrumb-section --> */}
            <div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <h4 className='text-white'>
                                    <Link to="/" className='text-white'>Home </Link><i className='fa fa-arrow-right mx-3'></i> Shop
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end breadcrumb section --> */}

            {/* <!-- products --> */}
            <div className="product-section my-5">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-2">
                            <div className="list-group mb-3">
                                <a href="#" className="list-group-item menu-bg text-white">
                                    Maincategory
                                </a>
                                <button onClick={() => selectCategory("All", sc, br)} className="list-group-item list-group-item-action">All</button>
                                {
                                    allMaincategoryStateData && allMaincategoryStateData.slice(1).map((item, index) => {
                                        return <button key={index} onClick={() => selectCategory(item.name, sc, br)} className="btn list-group-item list-group-item-action">{item.name}</button>
                                    })
                                }
                            </div>
                            <div className="list-group mb-3">
                                <a href="#" className="list-group-item menu-bg text-white">
                                    Subcategory
                                </a>
                                <button onClick={() => selectCategory(mc, "All", br)} className="list-group-item list-group-item-action">All</button>
                                {
                                    allSubcategoryStateData && allSubcategoryStateData.slice(1).map((item, index) => {
                                        return <button key={index} onClick={() => selectCategory(mc, item.name, br)} className="btn list-group-item list-group-item-action">{item.name}</button>
                                    })
                                }
                            </div>
                            <div className="list-group mb-3">
                                <a href="#" className="list-group-item   menu-bg text-white">
                                    Brand
                                </a>
                                <button onClick={() => selectCategory(mc, sc, "All")} className="list-group-item list-group-item-action">All</button>
                                {
                                    allBrandStateData && allBrandStateData.slice(1).map((item, index) => {
                                        return <button key={index} onClick={() => selectCategory(mc, sc, item.name)} className="btn list-group-item list-group-item-action">{item.name}</button>
                                    })
                                }
                            </div>
                            <div className="card p-1 mb-3">
                                <form onSubmit={postPriceFilter}>
                                    <label className='menu-bg w-100 text-center text-white'>Price</label>
                                    
                                        {/* <input type="number" onChange={getPriceInput} name="min" className='form-control w-50 ' value={min} /> -
                                        <input type="number" onChange={getPriceInput} name="max" className='form-control w-50 ms-1' value={max} /> */}
                                        <div className="input-group mb-3">
                                            <span className="input-group-text">&#8377;</span>
                                            <input type="text" onChange={getPriceInput} value={min} className="form-control" placeholder='Min'/>
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text">&#8377;</span>
                                            <input type="text" onChange={getPriceInput} value={max} className="form-control" placeholder='Max'/>
                                        </div>
                                    

                                    <div className="mb-3">
                                        <button className='btn btn-primary w-100'>Apply</button>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <select name="sortFilter" className='form-control' onChange={sortFilter}>
                                    <option value="1">Newest</option>
                                    <option value="2">Price : Low to High</option>
                                    <option value="3">Price : High to Low</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-10">
                            <div className="btn-group w-100 mb-2">
                                <input type="search" name="search" className='form-control' onChange={getInputSearch} placeholder='Search Here:' value={search} />
                                <button className='btn btn-success' onClick={postSearch}>Search</button>
                            </div>
                            <div className="row product-lists">
                                {
                                    products.map((item, index) => {
                                        return <div key={index} className="col-lg-4 col-md-6 offset-md-3 offset-lg-0 text-center">
                                            <div className="single-product-item">
                                                <div className="product-image">
                                                    <Link to={"/single-product/" + item.id}><img src={`/assets/products/${item.pic1}`} height="250px" alt="" /></Link>
                                                </div>
                                                <h3 style={{ height: "80px" }}>{item.name}</h3>
                                                <h3><del className='text-decoration-strikethrough text-danger'>&#8377;{item.baseprice}</del>&#8377;{item.finalprice}</h3>
                                                <h3 className="text-success"> {item.discount} %Off </h3>
                                                <Link to={"/singleproduct/" + item.id} className="cart-btn"><i className="fas fa-shopping-cart"></i> Add to Cart</Link>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>



                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="pagination-wrap">
                                <ul>
                                    <li><a href="">Prev</a></li>
                                    <li><a href="">1</a></li>
                                    <li><a className="active" href="">2</a></li>
                                    <li><a href="">3</a></li>
                                    <li><a href="">Next</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end products --> */}
            <Brandlogo />
        </>
    )
}
