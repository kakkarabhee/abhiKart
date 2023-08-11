import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Navbar() {
    var navigate = useNavigate()
    function logout() {
        localStorage.clear()
        navigate("/")
    }
    return (
        <>
            {/* <!--PreLoader--> */}
            <div className="loader">
                <div className="loader-inner">
                    <div className="circle"></div>
                </div>
            </div>
            {/* <!--PreLoader Ends--> */}

            {/* <!-- header --> */}
            <div className="top-header-area" id="sticker">
                <div className="container">
                    <div className="row fixed-top menu-bg">
                        <div className="col-lg-12 col-sm-12 text-center">
                            <div className="main-menu-wrap">
                                {/* <!-- logo --> */}
                                <div className="site-logo">
                                    <Link to="/">
                                        <p className="logo-title"><span className='bg-secondary-subtle text-success'>Abhi</span><span className='text-light bg-success'>Kart</span></p>
                                    </Link>
                                </div>
                                {/* <!-- logo --> */}

                                {/* <!-- menu start --> */}
                                <nav className="main-menu">
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/about ">About</Link></li>
                                        <li><Link to="/shop/All/All/All">Shop</Link></li>
                                        <li><Link to="/contact">Contact</Link></li>
                                        <li><Link to="/admin">Profile</Link></li>

                                        <li>
                                            {
                                                localStorage.getItem("login") ?
                                                    <div className="header-icons">
                                                        <ul>
                                                            <li><Link to={
                                                                localStorage.getItem("role") === "Admin" ? "/admin" : "/profile"
                                                            }>{localStorage.getItem("name")}  ({localStorage.getItem("role")})</Link>
                                                                <ul className="sub-menu">
                                                                    <li>
                                                                        {
                                                                            localStorage.getItem("role") === "Admin" ?
                                                                                <Link to="/admin">Profile</Link> : <Link to="/profile">Profile</Link>
                                                                        }
                                                                    </li>
                                                                    {
                                                                        localStorage.getItem("role") === "Buyer" ?
                                                                            <><li><Link to="/cart">Cart</Link></li>
                                                                                <li><Link to="/checkout">Check Out</Link></li></> : ""
                                                                    }
                                                                    <li><button className='btn' onClick={logout}>Logout</button></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div> :
                                                    <li><Link to="/login">Login</Link></li>

                                            }
                                        </li>
                                    </ul>
                                </nav>
                                <Link className="mobile-show search-bar-icon" to="#"><i className="fas fa-search"></i></Link>
                                <div className="mobile-menu"></div>
                                {/* <!-- menu end --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
// <!-- end header -->

