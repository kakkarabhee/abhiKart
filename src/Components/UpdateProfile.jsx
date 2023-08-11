import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function UpdateProfile() {
    let [data, setData] = useState({})
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
    function getInputFile(e) {
        var { name, files } = e.target
        setData((old) => {
            return {
                ...old,
                [name]: files[0].name
            }
        })
    }
    async function postData(e) {
        e.preventDefault()
        let response = await fetch("/user/"+localStorage.getItem("userid"), {
            method: "put",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({...data})
        })
        response = await response.json()
        if(data.role==="Admin")
        navigate("/admin")
        else
        navigate("/profile")

    }

    async function getAPIData() {
        var response = await fetch("/user/" + localStorage.getItem("userid"), {
            method: "get",
            headers: {
                "content-type": "application/json"
            }
        })
        response = await response.json()
        setData(response)
    }
    useEffect(() => {
        getAPIData()
    }, [])
    return (
        <>
            {/* <!-- breadcrumb-section --> */}
            <div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <h4 className='text-white'>
                                    <Link to="/" className='text-white'>Home </Link><i className='fa fa-arrow-right mx-3'></i>{localStorage.getItem("role") === "Admin" ? <Link to="/Admin" className='text-light'>Profile</Link> : <Link to="/Profile" className='text-light'>Profile</Link>}<i className='fa fa-arrow-right mx-3'></i>Update</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end breadcrumb section --> */}
            <div className='container my-5'>
                <div className="w-75 m-auto">
                    <h4 className='text-center menu-bg p-1 text-light rounded'><span className='text-warning mx-2'>Update</span>Profile</h4>
                    <form onSubmit={postData}>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label>Name</label>
                                <input type="text" name="name" onChange={getInputData} className='form-control' value={data.name} placeholder='Name' />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label>Username</label>
                                <input disabled name="username" onChange={getInputData} className='form-control' value={localStorage.getItem("username")} />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label>Email</label>
                                <input type="email" name="email" onChange={getInputData} className='form-control' placeholder='Email' value={data.email} />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label>Phone</label>
                                <input type="text" name="phone" onChange={getInputData} className='form-control' placeholder='Phone' value={data.phone} />
                            </div>
                            <div className="mb-3">
                                <label>Address</label>
                                <textarea name="address" rows="3" onChange={getInputData}  className='form-control' placeholder='Address' value={data.address}></textarea>
                            </div>
                            <div className="col-md-6">
                                <label>PinCode</label>
                                <input type="number" name="pin" onChange={getInputData}  className='form-control w-100' placeholder='Pincode' value={data.pin} />
                            </div>
                            <div className="col-md-6">
                                <label>City</label>
                                <input type="text" name="city" onChange={getInputData}  className='form-control' placeholder='City' value={data.city} />
                            </div>
                            <div className="col-md-6">
                                <label>State</label>
                                <input type="text" name="state" onChange={getInputData}  className='form-control' placeholder='State' value={data.state} />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label>Pic</label>
                                <input type="file" name="pic" onChange={getInputFile} className='form-control' />
                            </div>
                        </div>

                        <div className="mb-3">
                            <button type="submit" className='btn menu-bg w-100 '><h4 className=' text-warning menu-bg rounded'>Update</h4></button>
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