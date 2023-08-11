import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import { useDispatch, useSelector } from 'react-redux'

import { deleteNewslatter, getNewslatter } from '../../../Store/ActionCreators/NewslatterActionCreators'
export default function AdminNewslatter() {
    var [data, setData] = useState([])
    var allStateData = useSelector(state => state.NewslatterStateData)
    var dispatch = useDispatch()
    function deleteItem(id) {
        if (window.confirm("Are you Sure to Delete this Item")) {
            dispatch(deleteNewslatter({ id: id }))
            getAPIData()
        }
    }

function getAPIData() {
    dispatch(getNewslatter())
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
                    <h4 className="bg-primary text-white text-center p-3 rounded">Newslatter </h4>
                    <div className="table-responsive">
                        <table className='table table-bordered'>
                            <tbody>
                                <tr>

                                    <th>Id</th>
                                    <th>Subscribers</th>
                                    <th className='text-center'>Actions</th>
                                </tr>
                                {
                                    data.map((item, index) => {
                                        return <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>{item.email}</td>
                                            <td className='text-center'><button className='btn text-primary' onClick={() => deleteItem(item.id)}><i className='fa fa-trash'></i></button></td>
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