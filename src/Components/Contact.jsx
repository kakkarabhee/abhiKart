import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { createContact } from '../Store/ActionCreators/ContactActionCreators'
import { useDispatch } from 'react-redux'
export default function Contact() {
    var [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        status:"Active"
    })
    var dispatch= useDispatch()
    function getInputData(e) {
        var { name, value } = e.target
        setData((old) => {
            return{ 
                ...old,
                [name]: value
            }
        })
    }
    function postData(e) {
        e.preventDefault()
        var date= new Date()
        dispatch(createContact({...data,date:date.toLocaleDateString()}))
        alert("Thanks for sharing your query.. We will get back to you Soon")
        setData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: ""
        })
    }
    return (
        <>

            {/* <!-- breadcrumb-section --> */}
            <div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <h4 className='text-white'>
                                    <Link to="/" className='text-white'>Home </Link><i className='fa fa-arrow-right mx-3'></i> Contact
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end breadcrumb section --> */}

            {/* <!-- contact form --> */}
            <div className="contact-from-section my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 mb-5 mb-lg-0">
                            <div className="form-title text-center">
                                <h2>Let Us know your Queries!!</h2>
                            </div>
                            <div id="form_status"></div>
                            <div>
                                <form onSubmit={postData}>
                                    <p>
                                        <input type="text" onChange={getInputData} required placeholder="Name" name="name" className='form-control mb-3' value={data.name}/>
                                        <input type="email" onChange={getInputData} required placeholder="Email" name="email" className='form-control mb-3' value={data.email}/>
                                    </p>
                                    <p>
                                        <input type="tel" onChange={getInputData} required placeholder="Phone" name="phone" className='form-control mb-3' value={data.phone}/>
                                        <input type="text" onChange={getInputData} required placeholder="Subject" name="subject" className='form-control mb-3' value={data.subject}/>
                                    </p>
                                    <p><textarea name="message" rows="3" onChange={getInputData} required placeholder="Message" className='form-control mb-3' value={data.message}></textarea></p>
                                    <button className='btn menu-bg text-white w-100 mybtn'>Send</button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="contact-form-wrap">
                                <div className="contact-form-box">
                                    <h4><i className="fas fa-map"></i> Shop Address</h4>
                                    <p>DUCAT India Mall <br /> A-43, Sector 16 <br /> Noida, Uttar Pradesh</p>
                                </div>
                                <div className="contact-form-box">
                                    <h4><i className="far fa-clock"></i> Shop Hours</h4>
                                    <p>MON - FRIDAY: 8 to 9 PM <br /> SAT - SUN: 10 to 8 PM </p>
                                </div>
                                <div className="contact-form-box">
                                    <h4><i className="fas fa-address-book"></i> Contact</h4>
                                    <p>Phone: <a href="tel:+91 992 999 1959">+91 992 999 1959</a> <br /> Email: <a href="mailto:support@abhi-kart.com">support@abhi-kart.com</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end contact form --> */}

            {/* <!-- find our location --> */}
            <div className="find-location blue-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <p> <i className="fas fa-map-marker-alt"></i> Find Our Location</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end find our location --> */}

            {/* <!-- google map section --> */}
            <div className="embed-responsive embed-responsive-21by9">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28032.597860321974!2d77.31235593826034!3d28.567518526366136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5106f125cfb%3A0xc516eda25aa8482c!2sDucat%20Noida!5e0!3m2!1sen!2sin!4v1686487160498!5m2!1sen!2sin"></iframe>
            </div>
            {/* <!-- end google map section --> */}

        </>
    )
}
