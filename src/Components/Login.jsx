import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
    let [data, setData] = useState({
        username: "",
        password: ""
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
        var response = await fetch("/user", {
            method: "get",
            headers: {
                "content-type": "application/json"
            }
        })
        response = await response.json()
        var item = response.find((item) => item.username === data.username && item.password === data.password)
        if (item) {
            localStorage.setItem("login",true)
            localStorage.setItem("name",item.name)
            localStorage.setItem("username",item.username)
            localStorage.setItem("userid",item.id)
            localStorage.setItem("role",item.role)
            // if(item.role==="Admin")
            // navigate("/admin")
            // else
            navigate("/")
        }
        else {
            alert("Invalid Usename or Password")
        }
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
                                    <Link to="/" className='text-white'>Home </Link><i className='fa fa-arrow-right mx-3'></i> Login</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end breadcrumb section --> */}
            <div className='container my-5'>
                <div className="w-75 m-auto">
                    <h4 className='text-center menu-bg p-1 text-light rounded'><span className='text-warning mx-2'>Login</span>Here</h4>
                    <form onSubmit={postData}>
                        <div className="mb-3">
                            <label>Username</label>
                            <input type="text" name="username" onChange={getInputData} className='form-control' placeholder='Username' />
                        </div>
                        <div className="mb-3">
                            <label>Password</label>
                            <input type="password" name="password" onChange={getInputData} className='form-control' placeholder='Password' />
                        </div>
                        <div className="mb-3">
                            <button type="submit" className=' menu-bg w-100 p-1 rounded'><h4 className=' text-warning menu-bg rounded'>Login</h4></button>
                        </div>
                    </form>
                    <div className='d-flex justify-content-between'>
                        <Link to="#">Forget Password</Link>
                        <Link to="/signup">New User! SignUp Here</Link>
                    </div>
                </div>
            </div>
        </>
    )
}