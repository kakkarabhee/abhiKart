import React, { useEffect, useRef } from 'react'
import Sidebar from '../Sidebar'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { createSubcategory, getSubcategory } from "../../../Store/ActionCreators/SubcategoryActionCreators"
export default function AdminAddSubcategory() {
    let name = useRef("")
    let allStateData = useSelector(state => state.SubcategoryStateData)
    var dispatch = useDispatch()
    var navigate = useNavigate()
    function getInputData(e) {
        name.current = e.target.value
    }
    function postData(e) {
        e.preventDefault()
        if (allStateData.slice(1).find(item => item.name === name.current))
            alert("Subcategory Name already Exists")
        else {

            dispatch(createSubcategory({ name: name.current }))
            navigate("/admin-subcategory")
        }
    }
    function getAPIData() {
        dispatch(getSubcategory())
    }
    useEffect(() => {
        getAPIData(getSubcategory)
    }, [allStateData.length])
    return (
        <>
            {/* <!-- breadcrumb-section --> */}
            <div className="breadcrumb-section breadcrumb-bg py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
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
                        {/* <h4 className="bg-primary text-center text-white p-3 rounded">Subcategory </h4> */}
                        <h4 className="bg-primary text-white p-3 rounded">Subcategory <Link to='/admin-subCategory'><i className='fa fa-minus text-white float-right'></i></Link></h4>

                        <form onSubmit={postData}>
                            <div className="mb-3">
                                <label>Name</label>
                                <input type="text" name="name" onChange={getInputData} placeholder='Enter Subcategory Name' className='form-control' />
                            </div>
                            <div className="mb3 btn-group w-100 ">
                                <button type="reset" className='btn btn-secondary text-white w-50'>Reset</button>
                                <button type="submit" className='btn btn-primary text-white w-50'>Submit</button>
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </>
    )
}
