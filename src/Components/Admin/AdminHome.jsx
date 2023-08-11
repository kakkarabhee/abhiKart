import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { Link, useNavigate } from 'react-router-dom'

export default function AdminHome() {
    var [user, setUser] = useState({
        pic: ""
    })
    var navigate = useNavigate()
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
    }
    useEffect(() => {
        getAPIData()
    }, [])
    return (
        <>
            {/* <!-- breadcrumb-section --> */}
            <div className="breadcrumb-section breadcrumb-bg py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text mt-5">
                                <h1>Admin Portal</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- end breadcrumb section --> */}
            <div className="container-fluid my-4">
                <div className="row">
                    <div className="col-md-2">
                        <Sidebar />
                    </div>
                    <div className="col-md-10">
                        <h2 className="bg-primary text-white text-center py-1 rounded">Admin Home</h2>
                        <div className="row">
                            <div className='col-md-4'>
                                {
                                    user.pic ?
                                        <img src={`/assets/users/${user.pic}`} alt="" width={"350px"} /> :
                                        <img src="/assets/users/noimage.png" alt="" width={"350px"} />
                                }
                            </div>
                            <div className="col-md-8">
                                <table className='table table-bordered'>
                                    <tbody>
                                        <tr>
                                            <th>Name :</th>
                                            <th>{user.name}</th>
                                        </tr>
                                        <tr>
                                            <th>User Name :</th>
                                            <th>Admin</th>
                                        </tr>
                                        <tr>
                                            <th>Phone :</th>
                                            <th>{user.phone}</th>
                                        </tr>
                                        <tr>
                                            <th>Email :</th>
                                            <th>{user.email}</th>
                                        </tr>
                                        <tr>
                                            <th colSpan={2}> <Link to="/updateprofile" className='btn btn-primary w-100 stn-sm'>Update Profile</Link></th>

                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
