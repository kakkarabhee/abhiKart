import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { deleteSubcategory, getSubcategory } from '../../../Store/ActionCreators/SubcategoryActionCreators'
export default function AdminSubcategory() {
    var [data, setData] = useState([])
    var allStateData = useSelector(state => state.SubcategoryStateData)
    var dispatch = useDispatch()
    function deleteItem(id) {
        if (window.confirm("Are you Sure to Delete this Item")) {
            dispatch(deleteSubcategory({ id: id }))
            getAPIData()
        }
    }

function getAPIData() {
    dispatch(getSubcategory())
    if (allStateData.length)
        setData(allStateData.slice(1).reverse())
}
useEffect(() => {
    getAPIData()
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
                    <h4 className="bg-primary text-white p-3 rounded">Subcategory <Link to='/admin-add-subCategory'><i className='fa fa-plus text-white float-right'></i></Link></h4>
                    <div className="table-responsive">
                        <table className='table table-bordered'>
                            <tbody>
                                <tr>

                                    <th>Id</th>
                                    <th>Name</th>
                                    <th colSpan={2} className='text-center'>Actions</th>
                                </tr>
                                {
                                    data.map((item, index) => {
                                        return <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td><Link to={"/admin-update-subcategory/"+item.id}><i className='fa fa-edit'></i></Link></td>
                                            <td><button className='btn text-primary' onClick={() => deleteItem(item.id)}><i className='fa fa-trash'></i></button></td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>


                </div>
            </div>
        </div>
    </>
)
                            }                            