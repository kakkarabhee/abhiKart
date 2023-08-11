import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { deleteWishlist, getWishlist } from '../Store/ActionCreators/WishlistActionCreators'
import { getCheckout } from '../Store/ActionCreators/CheckoutActionCreators'
export default function Profile() {
    var [user, setUser] = useState({
        pic: ""
    })
    var [wishlist, setWishlist] = useState([])
    var [checkout, setCheckout] = useState([])
    var allWishlistData = useSelector((state) => state.WishlistStateData)
    var allCheckoutData = useSelector((state) => state.CheckoutStateData)

    var navigate = useNavigate()
    var dispatch = useDispatch()
    async function getAPIData() {
        var response = await fetch("/user", {
            method: "get",
            headers: {
                "content-type": "application/json"
            }
        })
        response = await response.json()
        var item = response.find((item) => item.username === localStorage.getItem("username"))
        if (item) {
            setUser(item)
        }
        else
            navigate("/login")

        dispatch(getWishlist())
        if (allWishlistData.length) {
            setWishlist(allWishlistData.filter((x) => x.userid === localStorage.getItem("userid")))
        }
        dispatch(getCheckout())
        if (allCheckoutData.length) {
            setCheckout(allCheckoutData.filter((x) => x.userid === localStorage.getItem("userid")))
        }
    }

    function deleteRecord(id) {
        dispatch(deleteWishlist({ id: id }))
        getAPIData()
    }

    useEffect(() => {
        getAPIData()
    }, [allWishlistData.length, allCheckoutData.length])
    return (
        <>
            {/* <!-- breadcrumb-section --> */}
            <div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <h4 className='text-white'>
                                    <Link to="/" className='text-white'>Home </Link><i className='fa fa-arrow-right mx-3'></i> Profile</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end breadcrumb section --> */}

            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-6">
                        {
                            user.pic ?
                                <img src={`/assets/users/${user.pic}`} height="400px" /> :
                                <img src={`/assets/users/user.png`} height="400px" />
                        }
                    </div>
                    <div className="col-md-6">
                        <table className='table table-bordered'>
                            <tbody>
                                <tr>
                                    <th>Name</th>
                                    <td>{user.name}</td>
                                </tr>
                                <tr>
                                    <th>Username</th>
                                    <td>{user.username}</td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td>{user.email}</td>
                                </tr>
                                <tr>
                                    <th>Phone</th>
                                    <td>{user.phone}</td>
                                </tr>
                                <tr>
                                    <th>Address</th>
                                    <td>{user.address}</td>
                                </tr>
                                <tr>
                                    <th>pin</th>
                                    <td>{user.pin}</td>
                                </tr>
                                <tr>
                                    <th>City</th>
                                    <td>{user.city}</td>
                                </tr>
                                <tr>
                                    <th>State</th>
                                    <td>{user.state}</td>
                                </tr>
                                <tr>
                                    <td colSpan={2}><Link to="/update-profile" className='btn btn-primary w-100'>Update Profile</Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {
                wishlist.length ?
                    <>
                        <h3 className="menu-bg text-light py-2 text-center">Wishlist</h3>
                        <div className="cart-table-wrap">
                            <table className=" table cart-table table-bordered">
                                <thead className="cart-table-head">
                                    <tr className="table-head-row">
                                        <th className="product-image"></th>
                                        <th className="product-name">Name</th>
                                        <th className="product-price">Price</th>
                                        <th className="product-cart">Buy</th>
                                        <th className="product-delete">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        wishlist.map((item, index) => {
                                            return <tr key={index} className="table-body-row">
                                                <td className="product-image"><img src={`/assets/products/${item.pic}`} alt="" /></td>
                                                <td className="product-name">{item.name} <br />{item.brand}/{item.color}/{item.size} </td>
                                                <td className="product-price">&#8377;{item.price}</td>
                                                <td className="product-cart"><Link className='btn' to={`/single-product/${item.productid}`}><i className='fa fa-shopping-cart text-success'></i></Link></td>
                                                <td className="product-delete"><button className='btn' onClick={() => deleteRecord(item.id)}><i className='fa fa-trash text-danger'></i></button></td>
                                            </tr>
                                        })
                                    }</tbody>
                            </table>
                        </div>
                    </> : 
                    <div className="my-3 text-center">
                        <p>No items in Wishlist</p>
                    </div>
            }

            {
                checkout.length ?
                    <>
                        <h3 className="menu-bg text-light py-2 text-center">Order History</h3>
                        {
                            checkout.map((item, index) => {
                                return <div key={index} className="row">
                                    <div className="col-md-4">
                                        <table className=" table table-bordered">
                                            <thead className="cart-table-head">
                                                <tr className="table-head-row">
                                                    <th>Order Id</th>
                                                    <td>{item.id}</td>
                                                </tr>
                                                <tr>
                                                    <th>Order Status</th>
                                                    <td>{item.orderstatus}</td>
                                                </tr>
                                                <tr>
                                                    <th>Payment Status</th>
                                                    <td>{item.paymentstatus}</td>
                                                </tr>
                                                <tr>
                                                    <th>Payment Mode</th>
                                                    <td>{item.paymentmode}</td>
                                                </tr>
                                                <tr>
                                                    <th>Subtotal</th>
                                                    <td>&#8377;{item.subtotal}</td>
                                                </tr>
                                                <tr>
                                                    <th>Shipping</th>
                                                    <td>&#8377;{item.shipping}</td>
                                                </tr>
                                                <tr>
                                                    <th>Total </th>
                                                    <td>&#8377;{item.total}</td>
                                                </tr>
                                                <tr>
                                                    <th>Date</th>
                                                    <td>{item.date}</td>
                                                </tr>
                                            </thead>
                                        </table>

                                    </div>
                                    <div className="col-md-8">
                                        <div className="cart-table-wrap">
                                            <table className=" table cart-table table-bordered">
                                                <thead className="cart-table-head">
                                                    <tr className="table-head-row">
                                                        <th colSpan="2" className="product-name">Name</th>
                                                        <th className="product-qty">Summary</th>
                                                        <th className="product-price">Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        item.products.map((item, index) => {
                                                            return <tr key={index} className="table-body-row">
                                                                <td className="product-image"><img src={`/assets/products/${item.pic}`} alt="" /></td>
                                                                <td className="product-name">{item.name} <br />{item.brand}/{item.color}/{item.size} </td>
                                                                <td className="product-qty">{item.price} X {item.qty}</td>
                                                                <td className="product-price">&#8377;{item.total}</td>
                                                            </tr>
                                                        })
                                                    }</tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            })
                        }

                    </> : 
                                        <div className="my-3 text-center">
                                        <p>No Order Found</p>
                                    </div>
            }
        </>
    )
}
