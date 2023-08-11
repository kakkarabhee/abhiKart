import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Signup() {
    let [data, setData] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        password: "",
        cpassword: ""
    })
    var navigate = useNavigate()
    function getInputData(e) {
        var { name, value } = e.target
        setData((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    async function postData(e) {
        e.preventDefault()
       if(data.password===data.cpassword){
        var response = await fetch("/user/", {
            method: "get",
            headers: {
                "content-type": "application/json"
            }
        })
        response = await response.json()
        if (response.find((item) => item.username === data.username)) {
            alert("Username already Exists")
        }
        else {
            var item = {
                name: data.name,
                username: data.username,
                email: data.email,
                phone: data.phone,
                password: data.password,
                role:"Buyer"
            }
            response = await fetch("/user", {
                method: "post",
                headers: {
                    "content-type": "Application/json"
                },
                body: JSON.stringify(item)
            })
            response = await response.json()
            navigate("/login")
        }
       }
       else
       alert("Password and Confirm Password must be same")
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
                                    <Link to="/" className='text-white'>Home </Link><i className='fa fa-arrow-right mx-3'></i> SignUp</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end breadcrumb section --> */}
            <div className='container my-5'>
                <div className="w-75 m-auto">
                    <h4 className='text-center menu-bg p-1 text-light rounded'><span className='text-warning mx-2'>SignUp</span>Here</h4>
                    <form onSubmit={postData}>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label>Name</label>
                                <input type="text" name="name" onChange={getInputData} className='form-control' placeholder='Name' />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label>Username</label>
                                <input type="text" name="username" onChange={getInputData} className='form-control' placeholder='Username' />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label>Email</label>
                                <input type="email" name="email" onChange={getInputData} className='form-control' placeholder='Email' />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label>Phone</label>
                                <input type="text" name="phone" onChange={getInputData} className='form-control' placeholder='Phone' />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label>Password</label>
                                <input type="password" name="password" onChange={getInputData} className='form-control' placeholder='Password' />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label>Confirm Password</label>
                                <input type="password" name="cpassword" onChange={getInputData} className='form-control' placeholder='Confirm Password' />
                            </div>
                        </div>

                        <div className="mb-3">
                            <button type="submit" className='btn menu-bg w-100 '><h4 className=' text-warning menu-bg rounded'>SignUp</h4></button>
                        </div>
                    </form>
                    <div className='d-flex justify-content-between'>
                        <Link to="/login">Already an User! Click Here to Login</Link>
                    </div>
                </div>
            </div>
        </>
    )
}