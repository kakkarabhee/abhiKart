import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { createNewslatter, getNewslatter } from "../Store/ActionCreators/NewslatterActionCreators"
import { useDispatch, useSelector } from 'react-redux'
export default function Footer() {
  var [email, setEmail] = useState("")
  var allNewslatterData = useSelector((state) => state.NewslatterStateData)
  var dispatch = useDispatch()
  function postData(e) {
    e.preventDefault()
    var item = allNewslatterData.slice(1).find((item) => item.email === email)
    if (item)
      alert("Your Email Id is Already Subscribed!!!")
    else {
      dispatch(createNewslatter({ email: email }))
      alert("Thanks to Subscribe Our Newslatter Service!!!")
    }
  }

  function getAPIData() {
    dispatch(getNewslatter())
  }
  useEffect(() => {
    getAPIData()
  }, [allNewslatterData.lengh])
  return (
    <>
      {/* <!-- footer --> */}
      <div className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-box about-widget">
                <h2 className="widget-title">About us</h2>
                <p>Ut enim ad minim veniam perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-box get-in-touch">
                <h2 className="widget-title">Get in Touch</h2>
                <ul>
                  <li>DUCAT India Mall, <br /> A-43, Sector 16, <br /> Noida(Uttar Pradesh).</li>
                  <li><a href="mailto:support@abhikart.com">support@abhikart.com</a></li>
                  <li><a href="tel:+91 992 999 1959">+91 992 999 1959</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-box pages">
                <h2 className="widget-title">Menu</h2>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/services">Shop</Link></li>
                  <li><Link to="/news">News</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-box subscribe">
                <h2 className="widget-title">Subscribe</h2>
                <p>Subscribe to our mailing list to get the latest updates.</p>
                <form onSubmit={postData}>
                  <input type="email" name='email' onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                  <button type="submit"><i className="fas fa-paper-plane"></i></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end footer --> */}

      {/* <!-- copyright --> */}
      <div className="copyright">
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <p>Copyrights &copy; 2023 - <a href="https://www.abhishekkakkar.in/">Abhishek Kakkar</a>,  All Rights Reserved.<br /></p>
                <div className="social-icons">
                  <ul>
                    <li><a href="www.facebook.com" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="www.twitter.com" target="_blank"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="www.instagram.com" target="_blank"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="www.instagram.com" target="_blank"><i className="fab fa-linkedin"></i></a></li>
                    <li><a href="www.dribbble.com" target="_blank"><i className="fab fa-dribbble"></i></a></li>
                  </ul>
                </div>
              
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end copyright --> */}
    </>
  )
}
